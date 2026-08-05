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

const visiblePublicText = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
  .replace(/<[^>]+>/g, " ");
const forbiddenPublicPatterns = [
  {
    label: "street address",
    pattern:
      /\b\d{1,5}\s+[a-z][a-z .'-]{1,60}\s(?:avenue|ave|boulevard|blvd|court|ct|drive|dr|lane|ln|place|pl|road|rd|street|st)\b/i,
    value: visiblePublicText,
    fixture: "9876 Example Road",
  },
  {
    label: "Australian mobile number",
    pattern: /(?:\+?61[\s()-]*4|04)(?:[\s()-]*\d){8}\b/,
    value: visiblePublicText,
    fixture: "+61 412 345 678",
  },
  {
    label: "eight-digit student identifier",
    pattern: /\b\d{8}\b/,
    value: visiblePublicText,
    fixture: "87654321",
  },
];

forbiddenPublicPatterns.push({
  label: "telephone link",
  pattern: /href=["']tel:/i,
  value: html,
  fixture: 'href="tel:+61000000000"',
});

for (const { label, pattern, value, fixture } of forbiddenPublicPatterns) {
  if (!pattern.test(fixture)) {
    throw new Error(`Privacy pattern self-test failed: ${label}.`);
  }
  if (pattern.test(value)) {
    throw new Error(`Potential ${label} found in the static export.`);
  }
}

const forbiddenImplementationText = [
  "ExperienceSection",
  "WorkHistory",
  "EmploymentCard",
];

for (const value of forbiddenImplementationText) {
  if (html.toLowerCase().includes(value.toLowerCase())) {
    throw new Error(`Forbidden implementation text found: ${value}.`);
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
