import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Lost Sock Status Update
// One status update, in the voice of a lost sock that has ended up
// somewhere it should not be: squatting inside the dog's favourite
// slipper. Fresh premise (no dryer, no missing partner), punchline
// lands in the last few words.
const PARTS = [
  "Status update: I've moved into the dog's favourite slipper. ",
  "Rent's free, but the landlord won't stop licking me.",
];
const ENTRY = PARTS.join("");

if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry is ${ENTRY.length} characters; gate requires 1-120`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
