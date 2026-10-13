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

$ops = "hello@haldencleaning.com";
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

$headers = "From: HaldenCleaning <noreply@haldencleaning.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$envelope = "-f noreply@haldencleaning.com";
$opsOk = @mail($ops, "HaldenCleaning booking — $name", $body, $headers, $envelope);
$clientOk = @mail(
  $email,
  "HaldenCleaning booking received",
  "Hi $name,\n\nWe received your booking for $date.\nWe'll confirm at this email and at $phone.\n\n" . $body . "\n\nHaldenCleaning\n(604) 968-5835\n",
  "From: HaldenCleaning <noreply@haldencleaning.com>\r\nContent-Type: text/plain; charset=UTF-8\r\n",
  $envelope
);

if (!$opsOk && !$clientOk) {
  http_response_code(502);
  echo json_encode(["ok" => false, "error" => "Mail could not be sent."]);
  exit;
}

echo json_encode(["ok" => true, "email" => $email]);
