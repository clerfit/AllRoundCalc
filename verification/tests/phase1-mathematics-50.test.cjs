const test = require("node:test");
const assert = require("node:assert/strict");
const api = require("../../assets/js/phase1-mathematics-50.js");

test("Part 1 registers exactly 50 unique calculators", () => {
  assert.equal(api.definitions.length, 50);
  assert.equal(new Set(api.definitions.map(x => x.id)).size, 50);
  assert.ok(api.definitions.every(x => x.id.startsWith("p1-") && x.fields.length > 0 && x.formula));
});

test("basic arithmetic and percentage reference cases", () => {
  assert.equal(api.calculate("p1-basic-arithmetic", {a:"12",b:"5",operation:"multiply"}).result, "60");
  assert.equal(api.calculate("p1-percentage", {value:"80",percent:"15"}).result, "12");
  assert.equal(api.calculate("p1-percentage-increase", {value:"200",percent:"10"}).result, "220");
  assert.equal(api.calculate("p1-percentage-decrease", {value:"200",percent:"10"}).result, "180");
  assert.equal(api.calculate("p1-percentage-change", {initial:"40",final:"50"}).result, "25");
});

test("fractions and ratios", () => {
  assert.equal(api.calculate("p1-fraction", {a:"1",b:"2",c:"1",d:"3",operation:"add"}).result, "5/6");
  assert.equal(api.calculate("p1-fraction-simplifier", {numerator:"18",denominator:"24"}).result, "3/4");
  assert.equal(api.calculate("p1-fraction-to-decimal", {numerator:"1",denominator:"4"}).result, "0.25");
  assert.equal(api.calculate("p1-decimal-to-fraction", {value:"1.25"}).result, "5/4");
  assert.equal(api.calculate("p1-ratio", {a:"12",b:"18"}).result, "2:3");
  assert.equal(api.calculate("p1-fraction-comparison", {a:"1",b:"2",c:"2",d:"3"}).result, "Fraction A is smaller");
});

test("summary statistics", () => {
  assert.equal(api.calculate("p1-mean", {values:"1,2,3,4"}).result, "2.5");
  assert.equal(api.calculate("p1-median", {values:"1,4,2,3"}).result, "2.5");
  assert.equal(api.calculate("p1-mode", {values:"1,2,2,3"}).result, "2");
  assert.equal(api.calculate("p1-range", {values:"-2,5,7"}).result, "9");
  assert.equal(api.calculate("p1-weighted-average", {values:"10,20",weights:"1,3"}).result, "17.5");
});

test("number formats and number theory", () => {
  assert.equal(api.calculate("p1-rounding", {value:"3.14159",places:"2"}).result, "3.14");
  assert.equal(api.calculate("p1-significant-figures", {value:"1234",figures:"2"}).result, "1200");
  assert.equal(api.calculate("p1-scientific-notation", {value:"1200"}).result, "1.2 × 10^3");
  assert.equal(api.calculate("p1-factors", {n:"12"}).result, "1, 2, 3, 4, 6, 12");
  assert.equal(api.calculate("p1-prime-check", {n:"17"}).result, "Prime");
  assert.equal(api.calculate("p1-prime-factorization", {n:"84"}).result, "2 × 2 × 3 × 7");
  assert.equal(api.calculate("p1-gcd", {a:"54",b:"24"}).result, "6");
  assert.equal(api.calculate("p1-lcm", {a:"6",b:"8"}).result, "24");
  assert.equal(api.calculate("p1-remainder", {a:"17",b:"5"}).result, "2");
});

test("proportions, prices, sequence and bases", () => {
  assert.equal(api.calculate("p1-proportion", {a:"2",b:"3",c:"8"}).result, "12");
  assert.equal(api.calculate("p1-unit-price", {price:"15",quantity:"3"}).result, "5");
  assert.match(api.calculate("p1-discount", {price:"100",percent:"20"}).result, /final price: 80/);
  assert.equal(api.calculate("p1-number-sequence", {first:"2",difference:"3",count:"4"}).result, "2, 5, 8, 11");
  assert.equal(api.calculate("p1-base-converter", {value:"1010",fromBase:"2",toBase:"10"}).result, "10");
  assert.equal(api.calculate("p1-binary-arithmetic", {a:"101",b:"11",operation:"add"}).result, "1000");
  assert.equal(api.calculate("p1-order-of-operations", {expression:"(2 + 3) * 4"}).result, "20");
});

test("invalid domains are rejected", () => {
  assert.throws(() => api.calculate("p1-basic-arithmetic", {a:"1",b:"0",operation:"divide"}), /zero/);
  assert.throws(() => api.calculate("p1-fraction", {a:"1",b:"0",c:"1",d:"2"}), /denominators/i);
  assert.throws(() => api.calculate("p1-percentage-change", {initial:"0",final:"5"}), /zero/);
  assert.throws(() => api.calculate("p1-unit-price", {price:"2",quantity:"0"}), /quantity/);
  assert.throws(() => api.calculate("p1-base-converter", {value:"2",fromBase:"2",toBase:"10"}), /source base/);
  assert.throws(() => api.calculate("p1-prime-factorization", {n:"1"}), /≥ 2/);
});
