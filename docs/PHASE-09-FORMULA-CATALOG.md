# Phase 09 — Business & Economics Formula Catalogue

**Scope:** 13 introductory browser-local calculators. Keep currency, units, accounting definitions, and time periods consistent. Outputs are arithmetic scenarios, not accounting, tax, legal, or investment advice.

| Calculator | Formula | Domain and example |
|---|---|---|
| Gross profit margin | (revenue − COGS)/revenue | Revenue > 0; 10,000 revenue, 6,000 COGS → 40% |
| Markup | (selling price − cost)/cost | Cost > 0; 60 cost, 90 price → 50% |
| Net profit margin | (revenue − total costs)/revenue | Revenue > 0; 10,000 revenue, 8,500 costs → 15% |
| Contribution margin | price − variable cost; divided by price | Price 50, variable 30 → 20/unit and 40% |
| Break-even units | fixed costs/(price − variable cost), rounded up | Price > variable cost; 1,000 fixed costs, 50 price, 30 variable → 50 units |
| Break-even revenue | fixed costs/contribution ratio | Same values → 2,500 revenue |
| Revenue growth | (current − previous)/previous | Comparable periods; 8,000→10,000 → 25% |
| CAGR | (ending/beginning)^(1/years) − 1 | Positive values and time; 100→121 in 2 years → 10% |
| Business ROI | net profit/investment cost | Investment cost > 0; 2,000/10,000 → 20% |
| Discounted price | price × (1 − discount rate) | Discount 0–100%; 80 at 25% → 60 |
| Sales tax estimate | pre-tax price × supplied rate | Generic arithmetic only; 100 at 8% → 108 total |
| Price elasticity | midpoint % change in quantity / midpoint % change in price | Positive quantities/prices and changed price; 100→80 quantity, 10→12 price → −1.2222 |
| Weighted average | Σ(value × weight)/Σweight | Equal lists, nonnegative weights, positive sum; 10,20 weights 1,3 → 17.5 |

## Limitations and privacy

- Comma-separated lists are limited to 500 finite numbers.
- Break-even analysis assumes constant price, variable cost per unit, fixed costs, and stable product mix.
- Tax arithmetic does not infer jurisdiction, exemptions, taxability, inclusive pricing, or required rounding.
- Elasticity is an observed arc calculation and does not establish causation.
- Inputs are processed in the browser by this engine; no account or server-side input history is added.

## Reference sources

- OpenStax, *Principles of Accounting, Volume 2*: https://openstax.org/details/books/principles-managerial-accounting
- OpenStax, *Principles of Economics 3e*: https://openstax.org/details/books/principles-economics-3e
- U.S. Small Business Administration, business guide: https://www.sba.gov/business-guide

These are review references, not proof of independent accounting or jurisdiction-specific certification.

## Acceptance checklist

- [x] 13 definitions with formulas, examples, assumptions, and field help.
- [x] Browser-local engine and domain validation.
- [x] Reference and invalid-domain tests authored.
- [x] Full source suite (112 tests) and JavaScript syntax checks pass.
- [x] Chromium desktop/tablet/mobile and automated accessibility checks pass.
- [ ] Independent formula review and human keyboard/screen-reader review completed.
- [x] Automated regression tests for Phases 03–08 pass.

**Sign-off rule:** phase is not verified until the complete automated runs and remaining reviews are recorded.
