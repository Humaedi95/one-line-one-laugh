// SPDX-License-Identifier: MIT
// One Line, One Laugh — writes the single funny line to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked my AI to organize my life — it deleted my ex, blocked my boss, and scheduled me a nap I didn't know I needed.";

const OUTPUT_PATH = "/output/entry.txt";
const CONTENT = ENTRY + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, CONTENT, "utf8");
console.log(ENTRY);
console.log(`Characters: ${ENTRY.length}`);
