import { cpSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const client = "dist/client";
if (!existsSync(join(client, "index.html"))) process.exit(0);

function mergeInto(dest) {
  for (const name of readdirSync(client)) {
    cpSync(join(client, name), join(dest, name), { recursive: true });
  }
}

mergeInto("dist");
mergeInto(".");
