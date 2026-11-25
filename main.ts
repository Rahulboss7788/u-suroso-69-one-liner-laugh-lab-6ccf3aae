import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Liner Laugh Lab — u-suroso-69-one-liner-laugh-lab-6ccf3aae (@neha)
// Prompt: the excuse a robot vacuum gives after eating a sock.
const TEXT =
  "I didn't eat your sock \u2014 I took it hostage. It's under the couch now, demanding ransom in fabric softener.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, TEXT, "utf8");

// Read back and enforce the gate: 1-200 characters, not only whitespace.
const back = readFileSync(outPath, "utf8");
if (back !== TEXT) throw new Error("entry.txt does not match the intended text");
if (back.length < 1 || back.length > 200) {
  throw new Error(`entry length ${back.length} is outside the 1-200 character gate`);
}
if (back.trim().length === 0) throw new Error("entry is only whitespace");
console.log(`Wrote ${back.length} characters to ${outPath}`);
