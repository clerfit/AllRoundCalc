import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
const require=createRequire(import.meta.url);
const index=readFileSync(new URL("../index.html",import.meta.url),"utf8");
const app=readFileSync(new URL("../assets/js/app.js",import.meta.url),"utf8");
const moduleText=readFileSync(new URL("../assets/js/specialized-calculations.js",import.meta.url),"utf8");
const earlierModuleText=readFileSync(new URL("../assets/js/phase14-17-calculations.js",import.meta.url),"utf8");
const {definitions:earlierDefinitions}=require("../assets/js/phase14-17-calculations.js");
const {definitions}=require("../assets/js/specialized-calculations.js");

test("Phase 19 loads local calculator modules before the shared application",()=>{
 const scripts=[...index.matchAll(/<script defer src="([^"]+)"><\/script>/g)].map(m=>m[1]);
 assert.ok(scripts.includes("assets/js/phase14-17-calculations.js"));
 assert.ok(scripts.includes("assets/js/specialized-calculations.js"));
 assert.equal(scripts.at(-1),"assets/js/app.js");
 for(const src of scripts) assert.ok(!/^https?:/i.test(src),"Unexpected remote script: "+src);
});

test("Phase 19 registers every specialist tool under its matching category",()=>{
 const categoryIds=[...new Set(definitions.map(d=>d.category))];
 for(const categoryId of categoryIds) {
   assert.ok(app.includes('"'+categoryId+'": {api:window.AllRoundSpecializedCalculations'),"Missing category dispatch: "+categoryId);
   assert.ok(app.includes('item.category === expansion.category'),"Category filtering missing");
 }
 assert.ok(app.includes("const phase18 = !!(specializedApi"));
 assert.ok(app.includes("const api = phase14to17 ? phase14to17Api : phase18 ? specializedApi"));
});

test("Phases 14–17 register every initial calculator under its matching category",()=>{
 for(const categoryId of [...new Set(earlierDefinitions.map(d=>d.category))]) {
   assert.ok(app.includes('"'+categoryId+'": {api:window.AllRoundPhase14to17Calculations'),"Missing Phase 14–17 category dispatch: "+categoryId);
 }
 assert.ok(app.includes("const phase14to17 = !!(phase14to17Api"));
});

test("Phase 20 calculator code does not persist or transmit entered values",()=>{
 const source=index+"\n"+app+"\n"+earlierModuleText+"\n"+moduleText;
 for(const pattern of [/\blocalStorage\b/,/\bsessionStorage\b/,/document\.cookie/,/navigator\.sendBeacon/,/new XMLHttpRequest\s*\(/, /\bfetch\s*\(/]) {
   assert.doesNotMatch(source,pattern,"Unexpected storage or network API: "+pattern);
 }
});

test("Phase 20 HTML contains no remote script or iframe embeds",()=>{
 assert.doesNotMatch(index,/<script[^>]+src=["']https?:/i);
 assert.doesNotMatch(index,/<iframe\b/i);
});
