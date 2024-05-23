import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import pages from "./src/app/pages/pages.js"; // Use named import

// Get the directory name using `import.meta.url`
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://www.mantragor.tech";

const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
const urlsetOpen =
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
const urlsetClose = "</urlset>";

const createUrl = (route) => `
  <url>
    <loc>${BASE_URL}${route}</loc>
  </url>`;

const sitemap = `
  ${xmlHeader}
  ${urlsetOpen}
  ${pages
    .filter((page) => page.visible)
    .map((page) => createUrl(page.route))
    .join("")}
  ${urlsetClose}
`;

fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemap.trim());

console.log("Sitemap generated successfully!");
