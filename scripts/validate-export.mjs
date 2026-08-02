import { access, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outputDirectory = path.join(root, "out");
const htmlPath = path.join(outputDirectory, "index.html");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const requiredOutputFiles = [
  "index.html",
  "robots.txt",
  "sitemap.xml",
  "manifest.webmanifest",
  "downloads/nihar-majalikar-resume-public.pdf",
  "assets/diagrams/22_architecture_diagram.png",
];

for (const relativePath of requiredOutputFiles) {
  await access(path.join(outputDirectory, relativePath));
}

const html = await readFile(htmlPath, "utf8");
const requiredSectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "certifications",
  "education",
  "evidence",
  "contact",
];

for (const id of requiredSectionIds) {
  if (!html.includes(`id="${id}"`)) {
    throw new Error(`Missing required section #${id} in the static export.`);
  }
}

const forbiddenPublicText = [
  "[private street address removed]",
  "[private mobile number removed]",
  "[private student identifier removed]",
  "ExperienceSection",
  "WorkHistory",
  "EmploymentCard",
];

for (const value of forbiddenPublicText) {
  if (html.toLowerCase().includes(value.toLowerCase())) {
    throw new Error(
      `Forbidden public text found in the static export: ${value}`,
    );
  }
}

const localReferences = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(
  (match) => match[1],
);
const uniqueLocalReferences = [
  ...new Set(
    localReferences.filter(
      (reference) =>
        reference.startsWith("/") &&
        !reference.startsWith("//") &&
        !reference.startsWith("/#"),
    ),
  ),
];

for (const reference of uniqueLocalReferences) {
  const pathname = new URL(reference, "https://portfolio.example").pathname;
  const relativePath =
    basePath && pathname.startsWith(basePath)
      ? pathname.slice(basePath.length)
      : pathname;
  const outputPath = path.join(
    outputDirectory,
    relativePath === "/" ? "index.html" : relativePath,
  );
  await access(outputPath);
}

console.log(
  `Validated ${requiredOutputFiles.length} output files, ${requiredSectionIds.length} sections and ${uniqueLocalReferences.length} local references.`,
);
