import { access, readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const distDir = resolve(projectRoot, "dist");
const html = await readFile(resolve(distDir, "index.html"), "utf8");
const script = await readFile(resolve(distDir, "script.js"), "utf8");

const requiredSections = [
  "overview",
  "thesis",
  "lte-network-planning",
  "network-engineering",
  "security-labs",
  "infrastructure",
  "architecture",
  "proxmox",
  "ubuntu-docker",
  "services",
  "pihole",
  "uptime-kuma",
  "nextcloud",
  "storage",
  "automation",
  "case-studies",
  "skills",
  "gallery",
  "contact",
];

const missingSections = requiredSections.filter((id) => !html.includes(`id="${id}"`));
if (missingSections.length) {
  throw new Error(`Missing required sections: ${missingSections.join(", ")}`);
}

for (const requiredFile of ["styles.css", "script.js", "og-portfolio.jpg", ".nojekyll"]) {
  await access(resolve(distDir, requiredFile));
}

const imageFiles = await readdir(resolve(distDir, "assets", "images"));
const diagramFiles = await readdir(resolve(distDir, "assets", "diagrams"));
const thesisFiles = await readdir(resolve(distDir, "assets", "thesis"));
const ltePlanningFiles = await readdir(resolve(distDir, "assets", "lte-network-planning"));
const networkEngineeringFiles = await readdir(
  resolve(distDir, "assets", "network-engineering"),
);
const securityLabFiles = await readdir(resolve(distDir, "assets", "security-labs"));

if (imageFiles.filter((file) => file.endsWith(".png")).length !== 21) {
  throw new Error("Expected 21 repository screenshots in dist/assets/images");
}

if (diagramFiles.filter((file) => file.endsWith(".png")).length !== 4) {
  throw new Error("Expected 4 repository diagrams in dist/assets/diagrams");
}

if (thesisFiles.filter((file) => file.endsWith(".png")).length !== 4) {
  throw new Error("Expected 4 thesis evidence images in dist/assets/thesis");
}

if (
  ltePlanningFiles.filter((file) => file.endsWith(".png")).length !== 6 ||
  ltePlanningFiles.some((file) => file.endsWith(".pdf"))
) {
  throw new Error(
    "Expected 6 reviewed LTE planning PNGs and no raw PDF files in dist/assets/lte-network-planning",
  );
}

if (
  networkEngineeringFiles.filter((file) => file.endsWith(".png")).length !== 7 ||
  networkEngineeringFiles.some((file) => file.endsWith(".pdf") || file.endsWith(".pka"))
) {
  throw new Error(
    "Expected 7 reviewed CSE5INE PNG references and no PDF or PKA files in dist/assets/network-engineering",
  );
}

if (securityLabFiles.filter((file) => file.endsWith(".jpg")).length !== 6) {
  throw new Error("Expected 6 CSE5NSW evidence images in dist/assets/security-labs");
}

const publicThesisPath = resolve(
  distDir,
  "downloads",
  "nihar-majalikar-masters-thesis-public.pdf",
);
await access(publicThesisPath);
const publicThesis = await readFile(publicThesisPath);
const knownStudentIdentifier = Buffer.from([50, 50, 49, 54, 57, 51, 53, 55]);
if (publicThesis.includes(knownStudentIdentifier)) {
  throw new Error("Student ID found in public thesis PDF");
}

const publicResumePath = resolve(
  distDir,
  "downloads",
  "nihar-majalikar-resume-public.pdf",
);
await access(publicResumePath);

if (!html.includes("linkedin.com/in/nihar-ravi-majalikar-1bb75b199")) {
  throw new Error("Verified LinkedIn profile is missing from the generated site");
}

const requiredPlaceholders = [
  "Portainer dashboard",
  "Tailscale admin dashboard",
  "GitHub Actions successful deployment",
  "Homelab status app",
  "Nextcloud mobile access",
];

const missingPlaceholders = requiredPlaceholders.filter((item) => !script.includes(item));
if (missingPlaceholders.length) {
  throw new Error(`Missing planned screenshot placeholders: ${missingPlaceholders.join(", ")}`);
}

if (script.includes("DB_PASSWORD=") || script.includes("MYSQL_PASSWORD=")) {
  throw new Error("Potential database credential found in generated site script");
}

console.log(
  "Validation passed: 19 sections, 48 evidence visuals, public-safe resume and thesis PDFs, and 5 planned captures.",
);
