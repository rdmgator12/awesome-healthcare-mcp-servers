#!/usr/bin/env node

/**
 * sync-from-registry.js
 *
 * Reads mcps.json from the Healthcare MCP Marketplace registry and generates
 * awesome-list formatted entries grouped by category.
 *
 * Usage:
 *   node scripts/sync-from-registry.js [path-to-mcps.json]
 *
 * If no path is provided, defaults to ../healthcare-mcp-marketplace/registry/mcps.json
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const FALLBACK_URL = "https://github.com/rdmgator12/awesome-healthcare-mcp-servers";

// Map category IDs to awesome-list section headings
const CATEGORY_HEADINGS = {
  rcm: "Revenue Cycle Management",
  cds: "Clinical Decision Support",
  fhir: "FHIR and Health Data Interoperability",
  quality: "Quality Compliance and Regulatory",
  credentialing: "Credentialing and Provider Operations",
  medlegal: "Medical-Legal and Expert Witness",
  education: "Medical Education and Training",
  pophealth: "Population Health and Value-Based Care",
  lifesci: "Life Sciences and Research",
  payer: "Health Plan and Payer Operations",
};

// Category display order
const CATEGORY_ORDER = [
  "rcm",
  "cds",
  "fhir",
  "quality",
  "credentialing",
  "medlegal",
  "education",
  "pophealth",
  "lifesci",
  "payer",
];

function formatEntry(mcp) {
  const url = mcp.url || FALLBACK_URL;
  const name = mcp.name.replace(/^EasyPA\s+/, "");
  const desc = mcp.description.replace(/\.$/, ""); // Remove trailing period if present
  const hipaa = `\`L${mcp.hipaa_level}\``;
  const clinical = `\`${mcp.clinical_score}\``;

  let lang = "";
  if (mcp.languages && mcp.languages.length > 0) {
    lang = ` \`${mcp.languages[0]}\``;
  }

  return `- [${name}](${url}) - ${desc} (${hipaa} ${clinical}${lang}).`;
}

function main() {
  const registryPath =
    process.argv[2] ||
    resolve(__dirname, "../../healthcare-mcp-marketplace/registry/mcps.json");

  let data;
  try {
    data = JSON.parse(readFileSync(registryPath, "utf-8"));
  } catch (err) {
    console.error(`Error reading registry: ${err.message}`);
    console.error(`Looked for: ${registryPath}`);
    process.exit(1);
  }

  // Group MCPs by their primary category (first in the categories array)
  const grouped = {};
  for (const mcp of data.mcps) {
    const primaryCategory = mcp.categories[0];
    if (!grouped[primaryCategory]) {
      grouped[primaryCategory] = [];
    }
    grouped[primaryCategory].push(mcp);
  }

  // Sort entries alphabetically within each category
  for (const cat of Object.keys(grouped)) {
    grouped[cat].sort((a, b) => a.name.localeCompare(b.name));
  }

  // Output formatted sections
  for (const catId of CATEGORY_ORDER) {
    if (!grouped[catId] || grouped[catId].length === 0) continue;

    const heading = CATEGORY_HEADINGS[catId];
    console.log(`## ${heading}\n`);

    for (const mcp of grouped[catId]) {
      console.log(formatEntry(mcp));
    }

    console.log("");
  }
}

main();
