import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = resolve(projectRoot, "dist");

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

await Promise.all([
  cp(resolve(projectRoot, "index.html"), resolve(outputDir, "index.html")),
  cp(resolve(projectRoot, "styles.css"), resolve(outputDir, "styles.css")),
  cp(resolve(projectRoot, "script.js"), resolve(outputDir, "script.js")),
  cp(resolve(projectRoot, "public"), outputDir, { recursive: true }),
]);

await writeFile(resolve(outputDir, ".nojekyll"), "", "utf8");

console.log("Production site built in dist/");
