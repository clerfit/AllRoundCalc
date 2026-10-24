import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { definitions, calculate } = require("../assets/js/finance-calculations.js");

test("Phase 8 catalogue has 20 unique finance calculators with formula, example, and field help", () => {
  assert.equal(definitions.length,20);
  assert.equal(new Set(definitions.map(x => x.id)).size, definitions.length);
  for (const d of definitions) {
    assert.ok(d.name && d.description && d.group && d.formula && d.example, d.id);
    assert.ok(d.fields.length, d.id);
    for (const f of d.fields) assert.ok(f[2], d.id + " field help " + f[0]);
  }
});

const cases = [
  ["finance-simple-interest",{principal:"1000",annualRate:"5",years:"2"},"Interest: 100; total: 1100"],
  ["finance-compound-interest",{principal:"1000",annualRate:"5",compoundsPerYear:"12",years:"1"},"Future amount: 1051.16189788; interest: 51.1618978817"],
  ["finance-effective-annual-rate",{annualRate:"12",compoundsPerYear:"12"},"Effective annual rate: 12.6825030132%"],
  ["finance-loan-payment",{principal:"10000",annualRate:"6",years:"3",paymentsPerYear:"12"},"Periodic payment: 304.219374516; total scheduled payments: 10951.8974826; total interest: 951.89748256"],
  ["finance-loan-balance",{principal:"1200",annualRate:"0",years:"1",paymentsPerYear:"12",paymentsMade:"6"},"Remaining balance: 600"],
  ["finance-savings-future-value",{initialBalance:"500",deposit:"100",annualRate:"0",depositsPerYear:"12",years:"1"},"Projected savings: 1700"],
  ["finance-savings-goal",{target:"1200",initialBalance:"0",annualRate:"0",depositsPerYear:"12",years:"1"},"Required periodic deposit: 100"],
  ["finance-inflation-value",{amount:"1000",inflationRate:"3",years:"5"},"Future purchasing power in today's-money terms: 862.608784384"],
  ["finance-debt-to-income",{monthlyDebt:"800",grossMonthlyIncome:"4000"},"Debt-to-income ratio: 20%"],
  ["finance-budget-share",{categorySpend:"900",takeHomeIncome:"3000"},"Income share: 30%"],
  ["finance-roi",{initialCost:"1000",finalValue:"1150"},"Return on investment: 15%"],
  ["finance-net-present-value",{initialInvestment:"100",discountRate:"10",cashFlows:"60,60"},"Net present value: 4.13223140496"],
  ["finance-salary-raise",{currentSalary:"40000",raisePercent:"5"},"Increase: 2000; new salary: 42000"]
];

test("Phase 8 calculators match documented reference examples", () => {
  for (const [id, values, expected] of cases) assert.equal(calculate(id, values).result, expected, id);
});

test("Phase 8 rejects invalid domains and malformed lists", () => {
  const invalid = [
    ["finance-simple-interest",{principal:"-1",annualRate:"5",years:"1"}],
    ["finance-compound-interest",{principal:"100",annualRate:"5",compoundsPerYear:"0",years:"1"}],
    ["finance-effective-annual-rate",{annualRate:"5",compoundsPerYear:"1.5"}],
    ["finance-loan-payment",{principal:"100",annualRate:"5",years:"0",paymentsPerYear:"12"}],
    ["finance-loan-balance",{principal:"100",annualRate:"5",years:"1",paymentsPerYear:"12",paymentsMade:"13"}],
    ["finance-savings-future-value",{initialBalance:"100",deposit:"10",annualRate:"0",depositsPerYear:"12",years:"-1"}],
    ["finance-savings-goal",{target:"100",initialBalance:"0",annualRate:"0",depositsPerYear:"12",years:"0"}],
    ["finance-inflation-value",{amount:"100",inflationRate:"-100",years:"1"}],
    ["finance-debt-to-income",{monthlyDebt:"100",grossMonthlyIncome:"0"}],
    ["finance-budget-share",{categorySpend:"-1",takeHomeIncome:"100"}],
    ["finance-roi",{initialCost:"0",finalValue:"100"}],
    ["finance-net-present-value",{initialInvestment:"100",discountRate:"-100",cashFlows:"10"}],
    ["finance-net-present-value",{initialInvestment:"100",discountRate:"5",cashFlows:"1,,2"}],
    ["finance-salary-raise",{currentSalary:"100",raisePercent:"NaN"}]
  ];
  for (const [id, values] of invalid) assert.throws(() => calculate(id, values), undefined, id);
});

test("zero-interest loan and savings edge cases remain finite", () => {
  assert.equal(calculate("finance-loan-payment",{principal:"1200",annualRate:"0",years:"1",paymentsPerYear:"12"}).result, "Periodic payment: 100; total scheduled payments: 1200; total interest: 0");
  assert.equal(calculate("finance-savings-future-value",{initialBalance:"0",deposit:"0",annualRate:"0",depositsPerYear:"12",years:"2"}).result, "Projected savings: 0");
});

test("supplemental finance calculators handle common planning examples", () => {
  assert.equal(calculate("finance-future-value-annuity",{deposit:"100",annualRate:"0",paymentsPerYear:"12",years:"1"}).result,"Future value of deposits: 1200");
  assert.equal(calculate("finance-loan-to-value",{loanAmount:"160000",assetValue:"200000"}).result,"Loan-to-value ratio: 80%");
  assert.equal(calculate("finance-savings-rate",{income:"2500",savings:"500"}).result,"Savings rate: 20%");
  assert.match(calculate("finance-debt-payoff-time",{balance:"1000",annualRate:"0",monthlyPayment:"250"}).result,/4 whole monthly payments/);
  assert.throws(()=>calculate("finance-debt-payoff-time",{balance:"1000",annualRate:"12",monthlyPayment:"5"}),/must exceed/);
});

test("extra personal finance tools match reference examples",()=>{assert.equal(calculate("finance-emergency-fund",{monthlyEssentials:"25000",months:"6"}).result,"Emergency fund target: 150000");assert.equal(calculate("finance-dividend-yield",{annualDividend:"5",sharePrice:"100"}).result,"Dividend yield: 5%");assert.match(calculate("finance-real-return",{nominalReturn:"8",inflationRate:"3"}).result,/4\.854/);});
