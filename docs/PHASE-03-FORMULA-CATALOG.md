# Phase 03 — Basic & Everyday Mathematics

**Status:** Implementation and automated verification complete. The current CI run passed 46 source/calculation tests and 45 Chromium browser tests. Broader independent formula verification and release-wide regression checks remain part of Phase 21.

## Implementation inventory and mathematical contract

This document is the review index for Phase 03. Inputs are processed in the browser; no calculator values are sent to a server or persisted by this implementation. Unless a tool states otherwise, numerical inputs must be finite. Display formatting is not a promise of arbitrary-precision decimal arithmetic.

| Calculator | Formula / operation | Domain and assumptions | Reference example |
|---|---|---|---|
| Basic arithmetic | a+b, a−b, a×b, a÷b | Finite real numbers; divisor must be nonzero. Operation is explicit; no expression parser is implied. | 12×5=60 |
| Fraction calculator | Addition/subtraction via common denominator; multiplication ac/bd; division ad/bc | Integer numerators and denominators; denominators nonzero; divisor fraction numerator nonzero; result normalized to positive denominator and reduced by GCD. | 1/2+1/3=5/6 |
| Decimal calculator | Selected arithmetic operation | Finite decimal inputs represented as JavaScript numbers; division by zero rejected; binary floating-point precision applies. | 2.75+1.60=4.35 |
| Powers | y = a^b | Finite real base/exponent; result must be finite. Non-real or overflowing results are rejected. 0^0 follows JavaScript's convention (1) and displays an explicit caveat. | 2^5=32 |
| Roots | y = nth root of x | Integer index 1–99; negative radicands allowed for odd indices only in the real domain. | cube root(−27)=−3 |
| Absolute value | |x| = x for x≥0, otherwise −x | Finite real input. | |−18|=18 |
| Percentage | base × rate / 100 | Finite base and rate; negative rates/values are permitted as arithmetic, not interpreted as a business rule. | 15% of 800=120 |
| Percentage change | (new−original)/original ×100% | Original must be nonzero. With negative originals, the result is algebraically defined but can be unintuitive; note explains sign interpretation. | 200→250 = +25% |
| Discount | discount=price×rate/100; final=price−discount | Price ≥0; discount rate 0–100%. Single discount only. Sequential discounts must be applied sequentially. | ₹1,500 at 20% off → ₹1,200 |
| Tax | Added: tax=price×rate/100; total=price+tax. Included: pretax=inclusive/(1+rate/100); tax=inclusive−pretax | Price and rate non-negative. Assumes one simple rate and excludes exemptions, compound taxes, fees, and jurisdiction-specific rules. | ₹1,000 + 18% = ₹1,180; ₹1,180 tax-inclusive at 18% → ₹1,000 pre-tax |
| Tip and bill split | tip=bill×rate/100; each=(bill+tip)/people | Bill/rate non-negative; people integer 1–100,000; equal split before any currency-specific rounding. | ₹1,000 + 10%, 4 people → ₹275 each |
| Ratio simplifier | (a/GCD):(b/GCD) | Integer terms; 0:0 rejected; signed terms allowed and simplified by absolute GCD. | 24:36=2:3 |
| Proportion | a/b=c/d ⇒ d=bc/a | a≠0; other inputs finite. Solves only for d under the stated arrangement. | 3/90=5/d ⇒ d=150 |
| Direct/inverse proportion | Direct: y₂=y₁x₂/x₁. Inverse: y₂=y₁x₁/x₂ | x₁≠0; for inverse, x₂≠0. Relationship is explicitly selected by the user and not inferred from observations. | Direct: x=2,y=10,x₂=5 ⇒ y₂=25 |
| Arithmetic mean | sum(xᵢ)/n | One or more finite values; comma-separated list; empty entries rejected. | 10,20,30 → 20 |
| Weighted mean | sum(xᵢwᵢ)/sum(wᵢ) | Values and weights must have equal length; weights non-negative; total weight >0. | values 80,90; weights 2,3 → 86 |
| Rounding | Round to decimal place d; exact ties intended away from zero | d integer 0–12. Binary floating-point can affect whether a decimal is represented as an exact tie; not suitable as a financial ledger rounding engine. | 2.345 to 2 places → 2.35 |
| Scientific notation | x = a×10ⁿ, normalized 1≤|a|<10 for nonzero x | Finite real input; zero shown separately. Uses JavaScript's number exponent representation. | 45000=4.5×10⁴ |
| Significant figures | JavaScript toPrecision(n) | n integer 1–15; this is numeric rounding, not a determination of measurement uncertainty. Ambiguous trailing-zero precision must be supplied by the user. | 1234 to 3 significant figures → 1.23×10³ |
| Integer base converter | Same integer represented in bases 2–36 | Signed safe integers only; digits must be valid in source base; fractional conversion is not included. | 25₁₀=11001₂ |
| GCD/LCM | LCM=|ab|/GCD(a,b) when GCD nonzero | Safe integer inputs; reject LCM beyond exact safe-integer range. Explicit convention: GCD(0,0)=0 and LCM(0,0)=0 for implementation purposes. | GCD(12,18)=6; LCM=36 |
| Prime checker | Trial division through floor(√n) | Integer input capped at 10¹² for practical execution time; integers below 2 are not prime. | 29 is prime |
| Prime factorization | Repeated division by prime factors | Integer 2 through 10¹²; this is a practical cap to avoid unbounded runtime. | 360=2³×3²×5 |
| Factors/multiples | Factors divide n exactly; multiples are k×n | Positive integer n up to 10¹²; multiples count 1–100; factor display is bounded. | Factors of 12: 1,2,3,4,6,12 |
| Modulo | Euclidean remainder r with a=bq+r and 0≤r<|b| | Safe integers; divisor nonzero. Explicit Euclidean modulo convention, including negative dividends. | −7 mod 3 = 2 |
| Reciprocal | 1/x | Finite nonzero real input. | 1/0.25=4 |
| Ratio to percentages | a/(a+b)×100%; b/(a+b)×100% | Both parts non-negative and total >0; outputs are component shares, not percentage change. | 2:3 → 40%, 60% |
| Comparison/difference | signed=a−b; absolute=|a−b| | Finite real values. Does not compute relative percentage difference, which needs a separately specified denominator convention. | 10 and 7 → signed 3, absolute 3 |

## Test plan and current test coverage

The calculation test suite includes a reference case for all 28 calculator IDs, checks that each successful result carries a formula and definition, and exercises invalid domains including division by zero, invalid fractions, zero starting value for percentage change, non-real roots, malformed lists, invalid bases, undefined ratios, and zero reciprocals. Browser tests cover catalogue navigation, an arithmetic calculation, division-by-zero messaging, and a percentage result.

## Remaining limitations and downstream verification

- CI and browser tests passed on the Phase 03 implementation commit. This is automated implementation verification, not proof of every possible mathematical edge case.
- Browser Number uses IEEE-754 binary floating point. High-precision decimal and currency calculations may need a decimal arithmetic library in a future scope.
- Rounding behavior around decimal ties must be checked with a broader edge-case matrix; the current helper is not certified for accounting use.
- Tax behavior is a generic arithmetic illustration, not jurisdiction-specific tax advice.
- The formula reference examples are regression fixtures. The Phase 21 verification phase remains responsible for broader independent formula verification and regression across the complete site.
- The current Phase 3 interface presents formulas, assumptions, examples, and limitations; related-tool cross-links and full manual assistive-technology review still require review.

## Sign-off checklist

- [x] Calculation reference tests pass.
- [x] Browser tests pass across desktop, tablet, and mobile.
- [x] No regressions detected in Phase 1/2 navigation and automated accessibility checks.
- [ ] Broader independent formula examples and edge cases reviewed (Phase 21).
- [ ] Related-calculator navigation reviewed.
- [ ] Known limitations and remaining work accurately recorded.
