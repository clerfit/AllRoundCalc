import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { definitions, calculate } = require("../assets/js/calculations.js");

test("Phase 3 catalog contains 28 uniquely identified calculator tools", () => {
  assert.equal(definitions.length, 28);
  assert.equal(new Set(definitions.map((item) => item.id)).size, 28);
  for (const item of definitions) {
    assert.ok(item.name && item.description && item.formula && item.example, item.id);
    assert.ok(Array.isArray(item.fields) && item.fields.length > 0, item.id);
  }
});

const examples = [
  ["basic-arithmetic", {a:"12",b:"5",operation:"multiply"}, "60"],
  ["fraction-calculator", {a:"1",b:"2",c:"1",d:"3",operation:"add"}, "5/6"],
  ["decimal-calculator", {a:"2.75",b:"1.6",operation:"add"}, "4.35"],
  ["powers", {base:"2",exponent:"5"}, "32"],
  ["roots", {value:"144",index:"2"}, "12"],
  ["absolute-value", {x:"-18"}, "18"],
  ["percentage", {value:"800",rate:"15"}, "120"],
  ["percentage-change", {old:"200",next:"250"}, "25"],
  ["discount", {price:"1500",rate:"20"}, "Discount: 300; final price: 1200"],
  ["tax", {price:"1000",rate:"18",mode:"added"}, "Tax: 180; total: 1180"],
  ["tip-split", {bill:"1000",rate:"10",people:"4"}, "Tip: 100; total: 1100; each person: 275"],
  ["ratio-simplifier", {a:"24",b:"36"}, "2:3"],
  ["proportion", {a:"3",b:"90",c:"5"}, "150"],
  ["proportion-type", {x:"2",y:"10",newX:"5",mode:"direct"}, "25"],
  ["mean", {values:"10,20,30"}, "20"],
  ["weighted-mean", {values:"80,90",weights:"2,3"}, "86"],
  ["rounding", {value:"2.345",digits:"2"}, "2.35"],
  ["scientific-notation", {value:"45000"}, "4.5 × 10^4"],
  ["significant-figures", {value:"1234",digits:"3"}, "1.23e+3"],
  ["base-converter", {value:"25",fromBase:"10",toBase:"2"}, "11001"],
  ["gcd-lcm", {a:"12",b:"18"}, "GCD: 6; LCM: 36"],
  ["prime-check", {n:"29"}, "Prime"],
  ["prime-factorization", {n:"360"}, "360 = 2^3 × 3^2 × 5"],
  ["factors-multiples", {n:"12",limit:"6",mode:"factors"}, "1, 2, 3, 4, 6, 12"],
  ["modulo", {a:"-7",b:"3"}, "2"],
  ["reciprocal", {x:"0.25"}, "4"],
  ["ratio-percentage", {a:"2",b:"3"}, "First part: 40%; second part: 60%"],
  ["compare-difference", {a:"10",b:"7"}, "Comparison: first is greater; signed difference (a−b): 3; absolute difference: 3"]
];

for (const [id, values, expected] of examples) {
  test(`${id} returns its reference example`, () => {
    assert.equal(calculate(id, values).result, expected);
  });
}

test("division by zero and invalid fraction denominators are rejected", () => {
  assert.throws(() => calculate("basic-arithmetic", {a:"1",b:"0",operation:"divide"}), /Division by zero/);
  assert.throws(() => calculate("fraction-calculator", {a:"1",b:"0",c:"1",d:"2"}), /denominators cannot be zero/);
  assert.throws(() => calculate("fraction-calculator", {a:"1",b:"2",c:"0",d:"3",operation:"divide"}), /zero fraction/);
});

test("percentage change rejects a zero original value", () => {
  assert.throws(() => calculate("percentage-change", {old:"0",next:"10"}), /original value is zero/);
});

test("roots enforce real-number domains and valid indices", () => {
  assert.throws(() => calculate("roots", {value:"-16",index:"2"}), /not real/);
  assert.equal(calculate("roots", {value:"-27",index:"3"}).result, "-3");
  assert.throws(() => calculate("roots", {value:"4",index:"0"}), /at least 1/);
});

test("tax-inclusive and tax-added modes use distinct correct equations", () => {
  assert.equal(calculate("tax", {price:"1180",rate:"18",mode:"included"}).result, "Pre-tax price: 1000; included tax: 180");
  assert.equal(calculate("tax", {price:"1000",rate:"18",mode:"added"}).result, "Tax: 180; total: 1180");
});

test("list calculators validate malformed lists and mismatched weights", () => {
  assert.throws(() => calculate("mean", {values:"1, ,3"}), /empty item/);
  assert.throws(() => calculate("weighted-mean", {values:"1,2",weights:"1"}), /same number of items/);
  assert.throws(() => calculate("weighted-mean", {values:"1,2",weights:"0,0"}), /sum of weights/);
});

test("integer and base tools reject invalid domains", () => {
  assert.throws(() => calculate("base-converter", {value:"2",fromBase:"2",toBase:"10"}), /invalid for the selected base/);
  assert.throws(() => calculate("prime-factorization", {n:"1"}), /at least 2/);
  assert.equal(calculate("prime-check", {n:"1"}).result, "Not prime");
  assert.throws(() => calculate("modulo", {a:"5",b:"0"}), /Divisor cannot be zero/);
});

test("ratio and reciprocal tools handle undefined cases explicitly", () => {
  assert.throws(() => calculate("ratio-simplifier", {a:"0",b:"0"}), /0:0 is undefined/);
  assert.throws(() => calculate("ratio-percentage", {a:"0",b:"0"}), /sum must be greater than zero/);
  assert.throws(() => calculate("reciprocal", {x:"0"}), /no reciprocal/);
});

test("all calculators return a formula and definition with successful results", () => {
  for (const [id, values] of examples) {
    const output = calculate(id, values);
    assert.ok(output.formula, id);
    assert.equal(output.definition.id, id);
    assert.ok(typeof output.result === "string", id);
  }
});
