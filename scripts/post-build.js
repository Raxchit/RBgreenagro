const fs = require("fs");
const path = require("path");

const projectRoot = path.join(__dirname, "..");
const nextDir = path.join(projectRoot, ".next");
const staticDir = path.join(nextDir, "static");
const standaloneDir = path.join(nextDir, "standalone");
const standaloneNextDir = path.join(standaloneDir, ".next");
const publicDir = path.join(projectRoot, "public");

// Create .next/standalone/.next if it doesn't exist
if (!fs.existsSync(standaloneNextDir)) {
  fs.mkdirSync(standaloneNextDir, { recursive: true });
}

// Copy .next/static to .next/standalone/.next/static
if (fs.existsSync(staticDir)) {
  fs.cpSync(staticDir, path.join(standaloneNextDir, "static"), { recursive: true });
  console.log("Copied .next/static to .next/standalone/.next/static");
}

// Copy public to .next/standalone/public
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, path.join(standaloneDir, "public"), { recursive: true });
  console.log("Copied public to .next/standalone/public");
}

console.log("Post-build copy completed successfully");