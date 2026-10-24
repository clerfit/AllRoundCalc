import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const catalogues = [
  { name: "Core mathematics", source: "../assets/js/calculations.js", tests: "calculations.test.mjs", api: "AllRoundCalculations", count: 34 },
  { name: "Advanced mathematics", source: "../assets/js/advanced-calculations.js", tests: "advanced-calculations.test.mjs", api: "AllRoundAdvancedCalculations", count: 27 },
  { name: "Physics", source: "../assets/js/physics-calculations.js", tests: "physics-calculations.test.mjs", api: "AllRoundPhysicsCalculations", count: 38 },
  { name: "Chemistry", source: "../assets/js/chemistry-calculations.js", tests: "chemistry-calculations.test.mjs", api: "AllRoundChemistryCalculations", count: 38 },
  { name: "Statistics", source: "../assets/js/statistics-calculations.js", tests: "statistics-calculations.test.mjs", api: "AllRoundStatisticsCalculations", count: 40 },
  { name: "Personal finance", source: "../assets/js/finance-calculations.js", tests: "finance-calculations.test.mjs", api: "AllRoundFinanceCalculations", count: 20 },
  { name: "Business", source: "../assets/js/business-calculations.js", tests: "business-calculations.test.mjs", api: "AllRoundBusinessCalculations", count: 20 },
  { name: "Health and fitness", source: "../assets/js/health-calculations.js", tests: "health-calculations.test.mjs", api: "AllRoundHealthCalculations", count: 20 },
  { name: "Units and measurement", source: "../assets/js/unit-converters.js", tests: "unit-converters.test.mjs", api: "AllRoundUnitConverters", count: 11 },
  { name: "Date and time", source: "../assets/js/date-time-calculations.js", tests: "date-time-calculations.test.mjs", api: "AllRoundDateTimeCalculations", count: 14 },
  { name: "Computer science", source: "../assets/js/computer-science-calculations.js", tests: "computer-science-calculations.test.mjs", api: "AllRoundComputerScienceCalculations", count: 15 },
  { name: "Phase 14–17 initial slice", source: "../assets/js/phase14-17-calculations.js", tests: "phase14-17-calculations.test.mjs", api: "AllRoundPhase14to17Calculations", count: 9 },
  { name: "Phase 18 specialized", source: "../assets/js/specialized-calculations.js", tests: "specialized-calculations.test.mjs", api: "AllRoundSpecializedCalculations", count: 9 }
];

const inventoryText = readFileSync(new URL("../docs/SCIENTIFIC-CATALOGUE-REVIEW-INVENTORY.md", import.meta.url), "utf8");
const workflowText = readFileSync(new URL("../.github/workflows/ui-verification.yml", import.meta.url), "utf8");

function inventoryCell(value) {
  return String(value || "—").replace(/\\|/g, "\\\\|").replace(/\
/g, " ").replace(/`/g, "\\\\`");
}

const loaded = catalogues.map((catalogue) => {
  const module = require(catalogue.source);
  return { ...catalogue, definitions: module.definitions, testText: readFileSync(new URL("../tests/" + catalogue.tests, import.meta.url), "utf8") };
});

test("Phase 21 catalogue registry has 295 unique calculator definitions", () => {
  const all = loaded.flatMap((catalogue) => catalogue.definitions);
  assert.equal(all.length, 295, "update the reviewed catalogue total when a deliberate calculator is added or removed");
  const ids = all.map((definition) => definition.id);
  assert.equal(new Set(ids).size, ids.length, "calculator IDs must be unique across every module");
});

test("Phase 21 each catalogue matches its expected count and has complete formula metadata", () => {
  for (const catalogue of loaded) {
    assert.equal(catalogue.definitions.length, catalogue.count, catalogue.name + " definition count");
    for (const definition of catalogue.definitions) {
      assert.ok(definition.id && definition.name && definition.description && definition.formula && definition.example, catalogue.name + ": " + definition.id + " needs name, description, formula, and example");
      assert.ok(Array.isArray(definition.fields) && definition.fields.length > 0, catalogue.name + ": " + definition.id + " needs input metadata");
      assert.ok(catalogue.testText.includes(definition.id), catalogue.name + ": " + definition.id + " has no explicit reference/validation-test mention");
    }
  }
});

test("Phase 21 catalogues and test coverage are connected to the actual module exports", () => {
  for (const catalogue of loaded) {
    assert.ok(catalogue.definitions.every((definition) => typeof definition.id === "string" && definition.id.length > 0), catalogue.name);
    assert.ok(catalogue.testText.includes(catalogue.definitions[0].id), catalogue.name + " test file must reference the module's real IDs");
  }
});


test("Phase 21 scientific inventory contains every registered calculator ID and name", () => {
  for (const catalogue of loaded) {
    for (const definition of catalogue.definitions) {
      const row = inventoryText.split("
").find((line) => line.includes("`" + definition.id + "`"));
      assert.ok(row, "missing inventory row for " + definition.id);
      for (const field of ["name", "formula", "example"]) {
        assert.ok(row.includes(inventoryCell(definition[field])), "inventory " + field + " differs from source for " + definition.id);
      }
    }
  }
  assert.match(inventoryText, /Total entries inventoried:\*\*\s*295/);
});


test("Phase 24 release gate depends on source and browser verification", () => {
  assert.match(workflowText, /release-readiness:/);
  assert.match(workflowText, /needs:\s*\[source-tests, browser-tests\]/);
  assert.match(workflowText, /Verify audit and release evidence files/);
});
