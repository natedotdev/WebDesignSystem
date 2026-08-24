#!/usr/bin/env node
import { copyFileSync, cpSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(join(root, "library.json"), "utf8"));
const args = process.argv.slice(2);
if (args.includes("--list") || args.length === 0) {
  console.log("Components:");
  for (const component of manifest.components) console.log(`  ${component}`);
  console.log("\nLayouts:");
  for (const layout of manifest.layouts) console.log(`  ${layout}`);
  process.exit(0);
}
const name = args[0];
const outputArg = args.find((arg) => arg.startsWith("--out="));
const outputRoot = resolve(process.cwd(), outputArg ? outputArg.slice(6) : "design-system");
const componentSource = join(root, "components", name);
const layoutSource = join(root, "layouts", name);
let source = componentSource;
let target = join(outputRoot, "components", name);
if (!existsSync(source) && existsSync(layoutSource)) { source = layoutSource; target = join(outputRoot, "layouts", name); }
if (!existsSync(source)) { console.error(`Unknown item: ${name}`); console.error("Run: dps-add --list"); process.exit(1); }
mkdirSync(dirname(target), { recursive: true });
cpSync(source, target, { recursive: true });
const tokenTarget = join(outputRoot, "tokens.css");
if (!existsSync(tokenTarget)) copyFileSync(join(root, "tokens", "tokens.css"), tokenTarget);
console.log(`Copied ${name} to ${target}`);
