import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { definitions, calculate } = require("../assets/js/statistics-calculations.js");

test("Phase 7 catalogue has 36 unique calculators with formulas, examples, and field help", () => {
  assert.equal(definitions.length,40);
  assert.equal(new Set(definitions.map(x => x.id)).size, definitions.length);
  for (const d of definitions) {
    assert.ok(d.name && d.description && d.group && d.formula && d.example, d.id);
    assert.ok(Array.isArray(d.fields) && d.fields.length > 0, d.id);
    for (const f of d.fields) assert.ok(f[2], d.id + " help for " + f[0]);
  }
});

const examples = [
  ["statistics-mean",{values:"2,4,6"},"Arithmetic mean: 4"],
  ["statistics-median",{values:"1,9,3"},"Median: 3"],
  ["statistics-mode",{values:"1,2,2,3"},"Mode(s): 2"],
  ["statistics-range",{values:"2,5,9"},"Range: 7"],
  ["statistics-variance-population",{values:"2,4,6"},"Population variance: 2.66666666667"],
  ["statistics-stddev-population",{values:"2,4,6"},"Population standard deviation: 1.63299316186"],
  ["statistics-variance-sample",{values:"2,4,6"},"Sample variance: 4"],
  ["statistics-stddev-sample",{values:"2,4,6"},"Sample standard deviation: 2"],
  ["statistics-quartiles",{values:"1,2,3,4,5"},"Q1: 1.5; median (Q2): 3; Q3: 4.5"],
  ["statistics-iqr",{values:"1,2,3,4,5"},"Interquartile range: 3"],
  ["statistics-weighted-mean",{values:"80,90",weights:"1,3"},"Weighted mean: 87.5"],
  ["statistics-geometric-mean",{values:"2,8"},"Geometric mean: 4"],
  ["statistics-harmonic-mean",{values:"2,4"},"Harmonic mean: 2.66666666667"],
  ["statistics-coefficient-variation",{values:"2,4,6"},"Coefficient of variation: 40.8248290464%"],
  ["statistics-z-score",{value:"75",mean:"60",standardDeviation:"5"},"Z-score: 3"],
  ["statistics-percentile-rank",{values:"1,2,3,4",value:"3"},"Percentile rank: 75%"],
  ["statistics-probability-basic",{favorable:"3",total:"8"},"Probability: 0.375"],
  ["statistics-complement",{probability:"0.3"},"Complement probability: 0.7"],
  ["statistics-union",{probabilityA:"0.5",probabilityB:"0.4",intersection:"0.2"},"Union probability: 0.7"],
  ["statistics-independent-intersection",{probabilityA:"0.5",probabilityB:"0.2"},"Joint probability: 0.1"],
  ["statistics-conditional-probability",{joint:"0.2",condition:"0.5"},"Conditional probability: 0.4"],
  ["statistics-bayes",{prior:"0.01",sensitivity:"0.9",falsePositive:"0.05"},"Posterior probability: 0.153846153846"],
  ["statistics-permutations",{n:"5",r:"2"},"Permutations: 20"],
  ["statistics-combinations",{n:"5",r:"2"},"Combinations: 10"],
  ["statistics-factorial",{n:"5"},"5! = 120"],
  ["statistics-binomial-probability",{n:"4",k:"2",probability:"0.5"},"Exact binomial probability: 0.375"],
  ["statistics-binomial-mean",{n:"10",probability:"0.3"},"Mean: 3; standard deviation: 1.44913767462"],
  ["statistics-normal-z",{value:"70",mean:"60",standardDeviation:"5"},"Z-score: 2"],
  ["statistics-normal-cdf",{value:"0",mean:"0",standardDeviation:"1"},"Cumulative probability P(X ≤ x): 0.5"],
  ["statistics-expected-value",{values:"0,10",weights:"0.75,0.25"},"Expected value: 2.5"],
  ["statistics-correlation",{values:"1,2,3",weights:"2,4,6"},"Pearson correlation r: 1"],
  ["statistics-linear-regression",{values:"1,2,3",weights:"2,4,6"},"Regression line: y = 0 + (2)x; intercept: 0; slope: 2"]
];

test("Phase 7 calculators match documented reference examples", () => {
  for (const [id, values, expected] of examples) assert.equal(calculate(id, values).result, expected, id);
});

test("Phase 7 rejects invalid inputs and inconsistent probability/data domains", () => {
  const invalid = [
    ["statistics-mean",{values:"1,,2"}],
    ["statistics-mean",{values:"1,Infinity"}],
    ["statistics-variance-sample",{values:"2"}],
    ["statistics-geometric-mean",{values:"2,0"}],
    ["statistics-harmonic-mean",{values:"2,-1"}],
    ["statistics-weighted-mean",{values:"1,2",weights:"1"}],
    ["statistics-weighted-mean",{values:"1,2",weights:"0,0"}],
    ["statistics-z-score",{value:"1",mean:"0",standardDeviation:"0"}],
    ["statistics-percentile-rank",{values:"1,2",value:"NaN"}],
    ["statistics-probability-basic",{favorable:"9",total:"8"}],
    ["statistics-complement",{probability:"1.1"}],
    ["statistics-union",{probabilityA:"0.2",probabilityB:"0.3",intersection:"0.4"}],
    ["statistics-conditional-probability",{joint:"0.5",condition:"0.2"}],
    ["statistics-bayes",{prior:"0",sensitivity:"0",falsePositive:"0"}],
    ["statistics-combinations",{n:"4",r:"5"}],
    ["statistics-factorial",{n:"2.5"}],
    ["statistics-binomial-probability",{n:"4",k:"5",probability:"0.5"}],
    ["statistics-binomial-mean",{n:"10",probability:"-0.1"}],
    ["statistics-normal-cdf",{value:"0",mean:"0",standardDeviation:"0"}],
    ["statistics-expected-value",{values:"0,1",weights:"0.4,0.4"}],
    ["statistics-correlation",{values:"1,1,1",weights:"2,3,4"}],
    ["statistics-linear-regression",{values:"1,1,1",weights:"2,3,4"}]
  ];
  for (const [id, values] of invalid) assert.throws(() => calculate(id, values), undefined, id);
});

test("probabilities are bounded and normal CDF is monotone on representative points", () => {
  for (const p of [0, 0.1, 0.5, 0.9, 1]) {
    const out = calculate("statistics-complement",{probability:String(p)}).result;
    const value = Number(out.replace("Complement probability: ",""));
    assert.ok(value >= 0 && value <= 1);
  }
  const cdf = x => Number(calculate("statistics-normal-cdf",{value:String(x),mean:"0",standardDeviation:"1"}).result.split(": ")[1]);
  assert.ok(cdf(-1) < cdf(0));
  assert.ok(cdf(0) < cdf(1));
});

test("supplemental sampling calculators match known reference values", () => {
  assert.equal(calculate("statistics-standard-error-mean",{standardDeviation:"10",sampleSize:"25"}).result,"Standard error: 2");
  assert.equal(calculate("statistics-covariance",{xValues:"1,2,3",yValues:"2,4,6"}).result,"Sample covariance: 2");
  assert.match(calculate("statistics-margin-error-proportion",{proportion:"50",sampleSize:"400",zValue:"1.96"}).result,/4\.9 percentage points/);
  assert.match(calculate("statistics-confidence-interval-mean",{mean:"50",populationSd:"10",sampleSize:"100",zValue:"1.96"}).result,/\[48\.04, 51\.96\]/);
});

test("additional sample-size and regression calculators match reference values",()=> {
  assert.equal(calculate("statistics-sample-size-proportion",{proportion:"50",marginError:"5",zValue:"1.96"}).result,"Required sample size (rounded up): 385");
  assert.equal(calculate("statistics-sample-size-mean",{populationSd:"10",marginError:"2",zValue:"1.96"}).result,"Required sample size (rounded up): 97");
  assert.equal(calculate("statistics-finite-population-sample-size",{populationSize:"1000",proportion:"50",marginError:"5",zValue:"1.96"}).result,"Required finite-population sample size (rounded up): 278");
  assert.equal(calculate("statistics-r-squared",{xValues:"1,2,3",yValues:"2,4,6"}).result,"Coefficient of determination R²: 1");
});
