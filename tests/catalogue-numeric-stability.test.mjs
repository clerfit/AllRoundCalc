import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const suites = [
  ["core arithmetic", "../assets/js/calculations.js", "basic-arithmetic", { a: "1e308", b: "1e308", operation: "multiply" }],
  ["advanced geometry", "../assets/js/advanced-calculations.js", "cylinder-lateral-area", { radius: "1e308", height: "1e308" }],
  ["physics energy", "../assets/js/physics-calculations.js", "kinetic-energy", { mass: "1e308", speed: "1e308" }],
  ["chemistry amount", "../assets/js/chemistry-calculations.js", "moles-from-mass", { mass: "1e308", molarMass: "1e-308" }],
  ["statistics mean", "../assets/js/statistics-calculations.js", "statistics-mean", { values: "1e308,1e308" }],
  ["compound interest", "../assets/js/finance-calculations.js", "finance-compound-interest", { principal: "1e308", annualRate: "5", compoundsPerYear: "12", years: "100" }],
  ["adult BMI numeric boundary", "../assets/js/health-calculations.js", "health-adult-bmi", { weight: "1e308", height: "0.01" }],
  ["length conversion", "../assets/js/unit-converters.js", "unit-length", { value: "1e308", fromUnit: "km", toUnit: "m" }],
  ["concrete volume", "../assets/js/phase14-17-calculations.js", "home-concrete-volume", { lengthM: "1e308", widthM: "1e308", depthM: "1e308" }],
  ["light travel time", "../assets/js/specialized-calculations.js", "sp-light-travel-time", { distanceAU: "1e308" }]
];

test("Phase 22 extreme finite inputs never silently render Infinity or NaN", () => {
  for (const [label, source, id, values] of suites) {
    const { calculate } = require(source);
    assert.throws(
      () => calculate(id, values),
      /supported .*range|outside the supported|outside its valid range/i,
      label + " must reject a result outside the representable range"
    );
  }
});
