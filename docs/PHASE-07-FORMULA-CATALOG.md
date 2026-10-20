# Phase 07 — Statistics & Probability Formula Catalogue

**Scope:** 32 browser-local introductory calculators. This document records formulas, data conventions, assumptions, representative examples, and the automated acceptance plan. The phase must not be described as independently scientifically reviewed or release-certified until the remaining reviews and current CI results are confirmed.

## Inventory and formula contracts

| Calculator | Formula / method | Domain and assumptions | Reference example |
|---|---|---|---|
| Arithmetic mean | x̄ = Σxᵢ / n | 1–500 finite values; values share a unit | 2, 4, 6 → 4 |
| Median | Middle sorted value; average of two middle values for even n | 1–500 finite values | 1, 9, 3 → 3 |
| Mode(s) | Value(s) with maximum frequency | Reports no mode when all values occur once | 1, 2, 2, 3 → 2 |
| Range | max − min | Sensitive to outliers | 2, 5, 9 → 7 |
| Population variance | Σ(xᵢ − μ)² / N | Use only for a complete population | 2, 4, 6 → 8/3 |
| Population standard deviation | √population variance | Same unit as data | 2, 4, 6 → √(8/3) |
| Sample variance | Σ(xᵢ − x̄)² / (n − 1) | At least two sample observations; Bessel correction | 2, 4, 6 → 4 |
| Sample standard deviation | √sample variance | At least two sample observations | 2, 4, 6 → 2 |
| Quartiles | Median-of-halves Q1/Q2/Q3 | For odd n, exclude the overall median from each half; other conventions exist | 1,2,3,4,5 → 1.5, 3, 4.5 |
| Interquartile range | Q3 − Q1 | Same quartile convention as above | 1,2,3,4,5 → 3 |
| Weighted mean | Σ(wᵢxᵢ) / Σwᵢ | Equal-length arrays; nonnegative weights; positive weight sum | 80,90 with 1,3 → 87.5 |
| Geometric mean | exp(Σln xᵢ / n) | Strictly positive values | 2,8 → 4 |
| Harmonic mean | n / Σ(1/xᵢ) | Strictly positive values; applicability depends on the rate-averaging setup | 2,4 → 8/3 |
| Coefficient of variation | 100σ / |μ| | Population SD convention; nonzero mean; best suited to ratio-scale data | 2,4,6 → about 40.8248% |
| Z-score | (x − μ) / σ | σ > 0; compatible units | 75,60,5 → 3 |
| Percentile rank | 100 × count(xᵢ ≤ target) / n | Explicit empirical ≤ convention; other definitions exist | 1,2,3,4; target 3 → 75% |
| Basic probability | favorable / total | Equally likely outcomes; 0 ≤ favorable ≤ total; total > 0 | 3/8 → 0.375 |
| Complement | 1 − P(A) | Input probability in [0,1] | 0.3 → 0.7 |
| Union probability | P(A)+P(B)−P(A∩B) | All probabilities in [0,1] and mutually consistent | 0.5+0.4−0.2 → 0.7 |
| Independent-event intersection | P(A)P(B) | Only if events are independent | 0.5×0.2 → 0.1 |
| Conditional probability | P(A∩B)/P(B) | P(B) > 0 and joint probability ≤ P(B) | 0.2/0.5 → 0.4 |
| Bayes' theorem | P(A|+) = sensitivity·prior / [sensitivity·prior + falsePositive·(1−prior)] | Inputs in [0,1]; denominator must be positive | 0.01, 0.9, 0.05 → about 0.153846 |
| Permutations | n!/(n−r)! | Integer 0 ≤ r ≤ n ≤ 170; order matters | P(5,2) = 20 |
| Combinations | n!/[r!(n−r)!] | Integer 0 ≤ r ≤ n ≤ 170; order does not matter | C(5,2) = 10 |
| Factorial | n!; 0! = 1 | Integer 0 ≤ n ≤ 170; JavaScript number precision/range applies | 5! = 120 |
| Binomial exact probability | C(n,k)pᵏ(1−p)ⁿ⁻ᵏ | Integer 0 ≤ k ≤ n ≤ 1000; independent trials and constant p | n=4,k=2,p=.5 → .375 |
| Binomial mean and SD | μ=np; σ=√[np(1−p)] | n nonnegative integer; p in [0,1] | n=10,p=.3 → 3 and about 1.44914 |
| Normal z-score | (x−μ)/σ | σ > 0; assumes a normal model only if used for normal inference | 70,60,5 → 2 |
| Normal cumulative probability | Φ((x−μ)/σ) | Numerical error-function approximation; not arbitrary precision, especially in extreme tails | x=μ → 0.5 |
| Expected value | Σxᵢpᵢ | Equal-length outcomes/probabilities; each p in [0,1]; sum p ≈ 1 | outcomes 0,10; p .75,.25 → 2.5 |
| Pearson correlation | Σ[(x−x̄)(y−ȳ)] / √[Σ(x−x̄)²Σ(y−ȳ)²] | Equal-length pairs; both series must vary; correlation is not causation | (1,2,3), (2,4,6) → 1 |
| Simple linear regression | b = Σ[(x−x̄)(y−ȳ)]/Σ(x−x̄)²; a = ȳ−bx̄ | Equal-length pairs; X must vary; extrapolation may be unreliable | (1,2,3), (2,4,6) → y=2x |

## Shared input and numeric rules

- Data lists are comma-separated, limited to 500 finite values per list.
- Data values in a single statistic must use compatible units. Paired X/Y data must be aligned in the same order.
- Probability inputs must be between 0 and 1, inclusive; inconsistent probability relationships are rejected.
- Counts and selections require integer values within the documented limits.
- Results are formatted to 12 significant digits using JavaScript Number. Very large counts and extreme probabilities can be affected by floating-point precision.
- The normal CDF is approximate and must not be presented as high-precision tail probability software.
- Quartiles and percentile rank are convention-dependent; this implementation explicitly names its conventions.
- Calculations run in the browser; visitor inputs are not intentionally transmitted or stored by this calculation engine.

## Verification references and formula cross-checks

- OpenStax, *Introductory Statistics 2e*, [Chapter 3 formula review](https://openstax.org/books/introductory-statistics-2e/pages/3-formula-review): probability bounds, conditional probability, independence, union/addition rule.
- OpenStax, *Introductory Business Statistics*, [Mathematical Phrases, Symbols, and Formulas](https://openstax.org/books/introductory-business-statistics/pages/b-mathematical-phrases-symbols-and-formulas): mean, population/sample variance conventions, coefficient of variation, binomial distribution, and combinatorial formulas.
- OpenStax, *Introductory Statistics 2e*, [Chapter 9 key terms](https://openstax.org/books/introductory-statistics-2e/pages/9-key-terms): binomial probability, mean, and standard deviation.
- OpenStax, *Introductory Statistics 2e*, [The Regression Equation](https://openstax.org/books/introductory-statistics-2e/pages/12-3-the-regression-equation): least-squares slope/intercept and Pearson correlation interpretation.
- OpenStax, *Principles of Data Science*, [Probability Theory](https://openstax.org/books/principles-data-science/pages/3-4-probability-theory): Bayes' theorem and the false-positive term.
- NIST/SEMATECH, [e-Handbook of Statistical Methods](https://www.itl.nist.gov/div898/handbook/): statistical-methods reference.

The sources above were consulted for a targeted formula cross-check of the documented probability rules, common descriptive-statistics definitions, binomial formulas, Bayes' theorem, correlation, and least-squares regression. This is not a full independent review of all 32 implementations, every numerical boundary, or every worked example; that acceptance item remains open until the complete review is recorded.

## Acceptance checklist

- [x] 32 calculator definitions with formula notes, examples, assumptions, and input help.
- [x] Browser-local calculation engine and contextual field tooltip support through shared UI.
- [x] Automated reference examples and invalid-domain tests authored.
- [x] Statistics category and calculator routes integrated into the shared app.
- [ ] Run the complete automated source suite and resolve every failure.
- [x] Add a Playwright route and axe-core WCAG 2.1 A/AA check for all 32 statistics calculator pages (execution still pending).
- [ ] Run Chromium desktop/tablet/mobile UI suite and resolve every failure.
- [ ] Independently verify formulas and reference examples against the sources above.
- [ ] Complete human keyboard and screen-reader review during site-wide QA.
- [ ] Confirm no regression in Phases 03–06.

**Sign-off rule:** implementation is not phase completion by itself. Do not mark Phase 07 fully verified until automated results are confirmed and the open review items are closed.
\n\n## Targeted verification performed\n\nA direct execution of the current calculation engine matched all **32/32** documented calculator examples and rejected all **22/22** invalid-domain cases in the source test matrix. Additional checks confirmed the normal CDF is monotone at representative points, returns exactly 0.5 at the mean, and complement probabilities remain in [0, 1]. This targeted check is not a substitute for the full `npm test`, Playwright browser suite, CI confirmation, or full independent statistical review. The test suite's catalogue uniqueness assertion was corrected to compare the number of unique IDs against the actual catalogue length, and the browser suite now includes a route/accessibility pass over all 32 statistics calculators.\n