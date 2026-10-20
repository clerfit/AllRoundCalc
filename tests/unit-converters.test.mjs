import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { definitions, calculate, unitsFor } = require("../assets/js/unit-converters.js");

test("Phase 11 has 11 unique converters with documented fields, assumptions, and examples", () => {
  assert.equal(definitions.length, 11);
  assert.equal(new Set(definitions.map((item) => item.id)).size, definitions.length);
  for (const def of definitions) {
    assert.ok(def.description && def.formula && def.example, def.id);
    assert.deepEqual(def.fields.map((field) => field[0]), ["value", "fromUnit", "toUnit"]);
    assert.ok(unitsFor(def.id).length >= 2, def.id);
  }
});

const cases = [
  ["unit-length", { value: "1", fromUnit: "km", toUnit: "m" }, "1000 m"],
  ["unit-mass", { value: "1", fromUnit: "kg", toUnit: "lb" }, "2.20462262185 lb"],
  ["unit-area", { value: "1", fromUnit: "ha", toUnit: "m²" }, "10000 m²"],
  ["unit-volume", { value: "1", fromUnit: "L", toUnit: "gal-US" }, "0.264172052358 gal-US"],
  ["unit-speed", { value: "36", fromUnit: "km/h", toUnit: "m/s" }, "10 m/s"],
  ["unit-temperature", { value: "0", fromUnit: "°C", toUnit: "°F" }, "32 °F"],
  ["unit-time", { value: "2", fromUnit: "h", toUnit: "s" }, "7200 s"],
  ["unit-pressure", { value: "1", fromUnit: "atm", toUnit: "Pa" }, "101325 Pa"],
  ["unit-energy", { value: "1", fromUnit: "kWh", toUnit: "J" }, "3600000 J"],
  ["unit-power", { value: "1", fromUnit: "kW", toUnit: "hp" }, "1.3410220896 hp"],
  ["unit-data", { value: "1", fromUnit: "GB", toUnit: "B" }, "1000000000 B"]
];

test("Phase 11 conversion reference examples match the documented results", () => {
  for (const [id, values, expected] of cases) assert.equal(calculate(id, values).result, expected, id);
});

test("temperature conversion supports negative Celsius but rejects below absolute zero", () => {
  assert.equal(calculate("unit-temperature", { value: "-40", fromUnit: "°C", toUnit: "°F" }).result, "-40 °F");
  assert.throws(() => calculate("unit-temperature", { value: "-274", fromUnit: "°C", toUnit: "K" }), /absolute zero/i);
  assert.throws(() => calculate("unit-temperature", { value: "-1", fromUnit: "K", toUnit: "°C" }), /absolute zero/i);
});

test("unit converters reject missing, non-finite, and unsupported values", () => {
  assert.throws(() => calculate("unit-length", { fromUnit: "km", toUnit: "m" }), /required/i);
  assert.throws(() => calculate("unit-length", { value: "Infinity", fromUnit: "km", toUnit: "m" }), /finite/i);
  assert.throws(() => calculate("unit-length", { value: "1", fromUnit: "parsec", toUnit: "m" }), /supported/i);
  assert.throws(() => calculate("unit-not-real", { value: "1", fromUnit: "x", toUnit: "y" }), /not found/i);
});

test("identical source and target units preserve the numeric value", () => {
  assert.equal(calculate("unit-length", { value: "12.5", fromUnit: "cm", toUnit: "cm" }).result, "12.5 cm");
});
