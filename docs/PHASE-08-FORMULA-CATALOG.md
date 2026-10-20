# Phase 08 — Personal Finance Formula Catalogue

**Scope:** 13 introductory, browser-local scenario calculators. Amounts are currency-agnostic: keep all inputs in the same currency and period. These tools do not provide financial advice, tax calculations, lending decisions, or investment forecasts.

| Calculator | Formula / method | Domain and assumptions | Reference example |
|---|---|---|---|
| Simple interest | I = Prt; A = P + I | Nonnegative principal/time; fixed annual simple rate | 1,000 at 5% for 2 years → interest 100 |
| Compound interest | A = P(1+r/m)^(mt) | Fixed nominal annual rate and compounding frequency | 1,000 at 5%, monthly, 1 year → 1,051.16 |
| Effective annual rate | EAR = (1+r/m)^m − 1 | Nominal annual rate compounded m times | 12% nominal, monthly → 12.6825% |
| Fixed-rate loan payment | PMT = Pi/[1−(1+i)^−N] | Equal end-period payments; fixed rate; excludes fees | 10,000 at 6%, 3 years, monthly → about 304.22/month |
| Remaining loan balance | Bk = P(1+i)^k − PMT[((1+i)^k−1)/i] | Same loan assumptions; zero-rate case handled separately | 1,200 at 0% over 12 monthly payments, after 6 → 600 |
| Savings future value | FV = P(1+i)^N + D[((1+i)^N−1)/i] | Equal end-period deposits; fixed return; no fees/taxes | 500 initial + 100/month for 12 months at 0% → 1,700 |
| Savings goal deposit | Solve FV equation for D | Fixed return and equal end-period deposits | Goal 1,200 in 12 months from zero at 0% → 100/month |
| Inflation-adjusted purchasing power | Amount/(1+inflation)^years | Constant-rate scenario only; not a forecast | 1,000 at 3% for 5 years → 862.61 in future purchasing power |
| Debt-to-income ratio | Monthly debt / gross monthly income × 100% | Matching monthly period; definitions vary by lender | 800 / 4,000 → 20% |
| Budget category share | Category spending / take-home income × 100% | Matching currency and period | 900 / 3,000 → 30% |
| Investment ROI | (final value − initial cost)/initial cost × 100% | Excludes taxes, fees, timing, inflation and risk unless included | 1,000 cost, 1,150 ending value → 15% |
| Net present value | −initial cost + Σ CFₜ/(1+r)^t | Equally spaced cash flows; constant per-period discount rate | Cost 100; flows 60,60; 10% → NPV ≈ 4.13 |
| Salary increase | Increase = salary × raise%; new salary = salary + increase | Same salary period and currency | 40,000 with 5% increase → 42,000 |

## Numeric and privacy rules

- All values must be finite; amounts and durations are checked against each calculator's stated domain.
- Rates are entered as percentages; calculations convert them to decimals internally.
- Payment/deposit frequencies must be positive integers. Extremely large outputs can exceed ordinary JavaScript numeric precision.
- NPV cash flows are comma-separated and limited to 500 finite values.
- Calculations run in the browser; this engine does not intentionally transmit or store visitor inputs.
- Results exclude local tax rules, fees, changing rates, credit underwriting, market uncertainty, and personal circumstances unless explicitly entered.

## Reference sources

- OpenStax, *Introductory Business Statistics*: https://openstax.org/details/books/introductory-business-statistics
- U.S. SEC, Investor.gov compound interest calculator and explanation: https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator
- CFPB, consumer tools and loan/credit education: https://www.consumerfinance.gov/consumer-tools/

These sources are reference starting points. They do not constitute independent certification of every calculator or guarantee that any scenario matches a particular lender, tax jurisdiction, or investment product.

## Acceptance checklist

- [x] 13 calculator definitions with formulas, worked examples, and field-level help.
- [x] Browser-local engine and explicit domain validation.
- [x] Automated reference and invalid-input tests authored.
- [x] Full Node source suite (112 tests) and JavaScript syntax checks pass on current commit.
- [x] Chromium desktop/tablet/mobile interactions and automated accessibility checks pass.
- [ ] Independently review all formulas, boundaries, and examples.
- [x] Automated regression tests for Phases 03–07 pass. Human keyboard/screen-reader review remains open for site-wide QA.

**Sign-off rule:** do not mark Phase 08 verified until the automated runs and remaining reviews are recorded as complete.
