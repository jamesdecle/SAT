#!/usr/bin/env node
/*
 * Convert a markdown file to PDF for student-facing deliverables.
 *
 * Usage:
 *   node scripts/md-to-pdf.js <input.md> <output.pdf> [--header "text"]
 *
 * The --header text is printed at the top of every page (student, date,
 * skill(s), time limit — per the Output rule in CLAUDE.md). A form-feed
 * character (\f) or an HTML comment "<!-- PAGE BREAK -->" in the markdown
 * source forces a PDF page break (used to separate quiz/homework questions
 * from their answer key).
 *
 * Requires: `marked` (npm install, see package.json) and Playwright's
 * Chromium (already installed in this environment at /opt/pw-browsers).
 */

const fs = require("fs");
const path = require("path");

function findModule(name) {
  const candidates = [
    path.join(process.cwd(), "node_modules", name),
    path.join(__dirname, "..", "node_modules", name),
    path.join("/opt/node22/lib/node_modules", name),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return name; // fall back to normal resolution
}

let marked, chromium;
try {
  ({ marked } = require(findModule("marked")));
} catch (e) {
  console.error(
    "Missing dependency 'marked'. Install it with:\n  npm install marked\n(run from the SAT-Math project root)"
  );
  process.exit(1);
}
try {
  ({ chromium } = require(findModule("playwright")));
} catch (e) {
  console.error(
    "Missing dependency 'playwright'. This environment should have it installed globally; if not:\n  npm install -g playwright\nand ensure Chromium is available (PLAYWRIGHT_BROWSERS_PATH)."
  );
  process.exit(1);
}

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error("Usage: node scripts/md-to-pdf.js <input.md> <output.pdf> [--header \"text\"]");
  process.exit(1);
}
const [inputPath, outputPath] = args;
let headerText = "";
const headerIdx = args.indexOf("--header");
if (headerIdx !== -1) headerText = args[headerIdx + 1] || "";

if (!fs.existsSync(inputPath)) {
  console.error(`Input file not found: ${inputPath}`);
  process.exit(1);
}

const mdSource = fs.readFileSync(inputPath, "utf8");
// Strip HTML comments (template instructions) before rendering.
const cleaned = mdSource.replace(/<!--[\s\S]*?-->/g, "");
const bodyHtml = marked.parse(cleaned);

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @page { margin: 20mm 16mm; }
  body {
    font-family: -apple-system, "Segoe UI", Helvetica, Arial, sans-serif;
    font-size: 11pt;
    line-height: 1.45;
    color: #1a1a1a;
  }
  h1 { font-size: 18pt; margin-bottom: 2mm; }
  h2 { font-size: 14pt; margin-top: 6mm; border-bottom: 1px solid #ccc; padding-bottom: 1mm; }
  h3 { font-size: 12pt; margin-top: 5mm; }
  table { border-collapse: collapse; width: 100%; margin: 3mm 0; }
  th, td { border: 1px solid #999; padding: 2mm; text-align: left; font-size: 10pt; }
  th { background: #f0f0f0; }
  code { background: #f5f5f5; padding: 0 1mm; }
  hr { border: none; border-top: 1px solid #999; margin: 6mm 0; }
  .doc-header {
    font-size: 9pt;
    color: #555;
    border-bottom: 1px solid #999;
    padding-bottom: 2mm;
    margin-bottom: 5mm;
  }
</style>
</head>
<body>
${headerText ? `<div class="doc-header">${headerText}</div>` : ""}
${bodyHtml}
</body>
</html>`;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.pdf({
    path: outputPath,
    format: "Letter",
    printBackground: true,
    margin: { top: "20mm", bottom: "16mm", left: "16mm", right: "16mm" },
  });
  await browser.close();
  console.log(`Wrote ${outputPath}`);
})().catch((err) => {
  console.error("PDF generation failed:", err);
  process.exit(1);
});
