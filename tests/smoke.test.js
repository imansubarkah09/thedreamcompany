const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

const requiredFiles = ['index.html', 'wrangler.jsonc', 'worker.mjs'];

for (const file of requiredFiles) {
  const fullPath = path.join(rootDir, file);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Missing required file: ${file}`);
  }
}

const html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');

if (!/<!DOCTYPE html>/i.test(html)) {
  throw new Error('index.html is missing the HTML doctype.');
}

if (!/<html[^>]*lang=/i.test(html)) {
  throw new Error('index.html is missing the html lang attribute.');
}

if (!/The Dream Company/i.test(html)) {
  throw new Error('index.html does not contain the expected site title content.');
}

const wranglerConfig = fs.readFileSync(path.join(rootDir, 'wrangler.jsonc'), 'utf8');
if (!/"name"\s*:\s*"thedreamcompany"/i.test(wranglerConfig)) {
  throw new Error('wrangler.jsonc is missing the project name.');
}

console.log('Smoke test passed: required files and landing page checks succeeded.');
