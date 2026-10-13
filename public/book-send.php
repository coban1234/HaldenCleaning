<?php
header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  http_response_code(204);
  exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  echo json_encode(["ok" => false, "error" => "POST only"]);
  exit;
}

$raw = file_get_contents("php://input");
$data = json_decode($raw, true);
if (!is_array($data)) {
  $data = $_POST;
}

function field($data, $key) {
  $value = isset($data[$key]) ? $data[$key] : "";
  if (is_array($value)) {
    $value = implode(", ", $value);
  }
  return trim((string) $value);
}

function smtp_read($fp) {
  $data = "";
  while (($line = fgets($fp, 515)) !== false) {
    $data .= $line;
    if (isset($line[3]) && $line[3] === " ") {
      break;
    }
  }
  return $data;
}

function smtp_cmd($fp, $command) {
  fwrite($fp, $command . "\r\n");
  return smtp_read($fp);
}

function resend_api_key() {
  $env = getenv("RESEND_API_KEY");
  if (is_string($env) && strpos($env, "re_") === 0) {
    return $env;
  }
  foreach (array(dirname(__DIR__) . "/resend-secret.php", __DIR__ . "/resend-secret.php") as $path) {
    if (!is_file($path)) {
      continue;
    }
    $value = include $path;
    if (is_string($value) && strpos($value, "re_") === 0) {
      return $value;
    }
  }
  return "";
}

function send_via_resend($to, $from, $subject, $text, $replyTo) {
  $key = resend_api_key();
  if ($key === "") {
    return false;
  }
  $payload = json_encode(array(
    "from" => $from,
    "to" => array($to),
    "reply_to" => $replyTo,
    "subject" => $subject,
    "text" => $text,
  ));
  if (!function_exists("curl_init")) {
    return false;
  }
  $ch = curl_init("https://api.resend.com/emails");
  curl_setopt_array($ch, array(
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => array(
      "Authorization: Bearer " . $key,
      "Content-Type: application/json",
    ),
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 20,
  ));
  curl_exec($ch);
  $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  curl_close($ch);
  return $code >= 200 && $code < 300;
}

/**
 * Deliver to Google Workspace via MX. Hostinger mail() keeps
 * @haldencleaning.com messages on the local server instead of Google.
 */
function send_to_google_workspace($to, $subject, $body, $replyTo) {
  $domain = substr(strrchr($to, "@"), 1);
  if (!$domain || !getmxrr($domain, $hosts, $weights)) {
    return false;
  }
  array_multisort($weights, $hosts);
  $payload = "From: HaldenCleaning <website@haldencleaning.com>\r\n";
  $payload .= "To: <$to>\r\n";
  $payload .= "Reply-To: <$replyTo>\r\n";
  $payload .= "Subject: $subject\r\n";
  $payload .= "Content-Type: text/plain; charset=UTF-8\r\n";
  $payload .= "\r\n";
  $payload .= $body;
  $payload .= "\r\n.\r\n";

  foreach ($hosts as $host) {
    $fp = @fsockopen($host, 25, $errno, $errstr, 12);
    if (!$fp) {
      continue;
    }
    stream_set_timeout($fp, 12);
    smtp_read($fp);
    smtp_cmd($fp, "EHLO haldencleaning.com");
    $from = smtp_cmd($fp, "MAIL FROM:<website@haldencleaning.com>");
    $rcpt = smtp_cmd($fp, "RCPT TO:<$to>");
    $data = smtp_cmd($fp, "DATA");
    fwrite($fp, $payload);
    $done = smtp_read($fp);
    smtp_cmd($fp, "QUIT");
    fclose($fp);
    if (strpos($from, "250") === 0 && strpos($rcpt, "250") === 0 && strpos($done, "250") === 0) {
      return true;
    }
  }
  return false;
}

$name = field($data, "name");
$email = filter_var(field($data, "email"), FILTER_VALIDATE_EMAIL);
$phone = field($data, "phone");
$address = field($data, "address");
$date = field($data, "date");

if ($name === "" || !$email || $phone === "" || $address === "" || $date === "") {
  http_response_code(400);
  echo json_encode(["ok" => false, "error" => "Date, name, address, email and phone are required."]);
  exit;
}

$ops = "office@haldencleaning.com";
$from = "HaldenCleaning <office@haldencleaning.com>";
$service = field($data, "service");
$freq = field($data, "frequency") !== "" ? field($data, "frequency") : field($data, "freq");
$beds = field($data, "beds");
$baths = field($data, "baths");
$sqft = field($data, "sqft");
$addons = field($data, "addons");
$parking = field($data, "parking");
$pets = field($data, "pets");
$access = field($data, "access");
$notes = field($data, "notes");
$price = field($data, "price");
$duration = field($data, "duration");

$lines = [
  "Name: $name",
  "Email: $email",
  "Phone: $phone",
  "Address: $address",
  "Date: $date",
  "Service: $service",
  "Frequency: $freq",
  "Beds: $beds",
  "Baths: $baths",
  "Sqft: $sqft",
  "Add-ons: $addons",
  "Parking: $parking",
  "Pets: $pets",
  "Access: $access",
  "Notes: $notes",
  "Price: $price",
  "Duration: $duration",
];
$body = implode("\n", $lines);

$opsBody = "New website booking\n\n" . $body;
$clientBody = "Hi $name,\n\nWe received your booking for $date.\nWe'll confirm at this email and at $phone.\n\n" . $body . "\n\nHaldenCleaning\n(604) 968-5835\n";

$clientHeaders = "From: HaldenCleaning <website@haldencleaning.com>\r\n";
$clientHeaders .= "Reply-To: $ops\r\n";
$clientHeaders .= "Content-Type: text/plain; charset=UTF-8\r\n";

$clientOk = @mail(
  $email,
  "HaldenCleaning booking received",
  $clientBody,
  $clientHeaders,
  "-f website@haldencleaning.com"
);

$opsOk = send_via_resend(
  $ops,
  $from,
  "HaldenCleaning booking — $name",
  $opsBody,
  $email
);

if (!$opsOk) {
  $opsOk = send_to_google_workspace(
    $ops,
    "HaldenCleaning booking — $name",
    $opsBody,
    $email
  );
}

if (!$opsOk && !$clientOk) {
  http_response_code(502);
  echo json_encode(["ok" => false, "error" => "Mail could not be sent."]);
  exit;
}

echo json_encode(["ok" => true, "email" => $email]);
