// SPDX-License-Identifier: MIT
// One Line, One Laugh — writes the single funny line to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked my AI to organize my life — it deleted my ex, blocked my boss, and scheduled me a nap I didn't know I needed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(ENTRY);
console.log(`Characters: ${ENTRY.length}`);
