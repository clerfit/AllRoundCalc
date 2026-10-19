import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { Script } from "node:vm";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (path) => readFileSync(resolve(root, path), "utf8");
const html = read("index.html");
const css = read("assets/css/styles.css");
const appJs = read("assets/js/app.js");
const uiDocs = read("docs/UI-MODEL.md");
const contributorDocs = read("CONTRIBUTING.md");

test("main HTML references existing first-party assets and a viewport", () => {
  assert.match(html, /<meta name="viewport"/i);
  assert.match(html, /href="assets\/css\/styles\.css"/);
  assert.match(html, /src="assets\/js\/app\.js"/);
  assert.match(html, /href="assets\/icons\/favicon\.svg"/);
  for (const path of ["assets/css/styles.css", "assets/js/app.js", "assets/icons/favicon.svg"]) {
    assert.equal(existsSync(resolve(root, path)), true, path + " should exist");
  }
});

test("static HTML has unique IDs and accessible landmarks", () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length, "HTML IDs must be unique");
  assert.match(html, /<main\b[^>]*id="main"/i);
  assert.match(html, /class="skip-link"/);
  assert.match(html, /aria-label="Open navigation menu"/);
  assert.match(html, /aria-controls="site-drawer"/);
  assert.match(html, /<noscript>/i);
});

test("JavaScript syntax is valid without executing browser code", () => {
  assert.doesNotThrow(() => new Script(appJs, { filename: "assets/js/app.js" }));
});

test("the taxonomy contains sixteen uniquely identified categories", () => {
  const entries = [...appJs.matchAll(/\{ id:"([^"]+)", name:"([^"]+)"/g)];
  const ids = entries.map((match) => match[1]);
  assert.equal(entries.length, 16);
  assert.equal(new Set(ids).size, 16);
  for (const id of ids) assert.match(id, /^[a-z0-9-]+$/);
});

test("the shared routes and navigation/search handlers are present", () => {
  for (const marker of [
    "function renderHome",
    "function renderCategories",
    "function renderCategory",
    "function renderCalculatorPreview",
    "function renderAbout",
    "function renderContact",
    'window.addEventListener("hashchange", route)',
    'document.getElementById("header-search-form")',
    'document.getElementById("drawer-backdrop")',
    'event.key === "Escape"'
  ]) assert.ok(appJs.includes(marker), "missing UI contract: " + marker);
});

test("the UI is responsive, keyboard-visible, and reduced-motion aware", () => {
  assert.match(css, /:focus-visible/);
  assert.match(css, /\.skip-link:focus/);
  assert.match(css, /max-width:920px/);
  assert.match(css, /max-width:700px/);
  assert.match(css, /max-width:390px/);
  assert.match(css, /prefers-reduced-motion/);
});

test("Phase 02 does not claim working calculator logic or contact delivery", () => {
  assert.match(appJs, /Not a working calculator/);
  assert.match(appJs, /Calculate · not active/);
  assert.match(appJs, /Contact channel not configured yet/);
  assert.match(appJs, /does not collect or transmit any personal details/);
  assert.match(uiDocs, /controls deliberately disabled/);
});

test("the browser UI does not add user-value storage or network calls", () => {
  assert.doesNotMatch(appJs, /\bfetch\s*\(|\blocalStorage\b|\bsessionStorage\b|\bXMLHttpRequest\b|\bsendBeacon\b/);
  assert.doesNotMatch(html, /<script\b[^>]*\bsrc=["']https?:\/\//i);
  assert.doesNotMatch(css, /@import\s+url\s*\(/i);
  assert.match(contributorDocs, /Do not add accounts, input-history storage, or analytics/);
});
