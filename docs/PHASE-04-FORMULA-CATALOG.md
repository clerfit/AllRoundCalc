# Phase 04 — Advanced Mathematics Formula Catalogue

**Status: In progress.** The main identities below were checked against established OpenStax mathematics references before implementation. Automated source/calculation tests and responsive browser tests have passed. Passing fixtures verify the listed examples and tested behaviors; they do not prove every possible floating-point input, symbolic case, or near-singular system correct.

## Scope, numeric behavior, and conventions

All calculations execute in the visitor's browser. Inputs must be finite real numbers unless otherwise stated. Numeric outputs are formatted to at most 12 significant digits using JavaScript IEEE-754 double precision; this is approximate numeric computation, not arbitrary precision or symbolic algebra. Polynomial inputs are comma-separated coefficients in descending-power order: `1,0,-3` represents `x² − 3`. Polynomial degree is limited to 12.

Where a mathematical domain is undefined, the calculator must reject the input or explain that no unique result exists. Tangent uses a numerical tolerance near cosine zero because floating-point trigonometry cannot represent every multiple of π/2 exactly. Near-singular systems and matrices can be sensitive to rounding.

## Calculator inventory and formula contracts

| Calculator | Formula or method | Domain and assumptions | Reference example |
|---|---|---|---|
| Linear equation solver | `ax + b = c ⇒ x = (c − b) / a` | Finite real coefficients; a ≠ 0. A zero coefficient does not define a unique linear equation. | `3x + 2 = 11 ⇒ x = 3` |
| Quadratic equation solver | `D = b² − 4ac`; `x = (−b ± √D) / (2a)` | Require a ≠ 0. D > 0 gives two real roots; D = 0 a repeated root; D < 0 complex-conjugate roots. The implementation uses an algebraically equivalent stable q-form for real roots to reduce cancellation, with the second root obtained from the product c/a. | `x² − 3x + 2 = 0 ⇒ roots 2, 1` |
| Two-variable linear system | Cramer’s rule: `Δ = a₁b₂ − a₂b₁`; `x = (c₁b₂ − c₂b₁)/Δ`; `y = (a₁c₂ − a₂c₁)/Δ` | A unique solution requires Δ ≠ 0. When Δ = 0, the system is reported as inconsistent or non-unique. Near-singular systems need extra numerical caution. | `2x + y = 7; x − 2y = 6 ⇒ x = 4, y = −1` |
| Logarithm | `log_b(x) = ln(x) / ln(b)` | x > 0, b > 0, b ≠ 1. | `log₁₀(1000) = 3` |
| Exponential equation | `k·bˣ = t ⇒ x = ln(t/k) / ln(b)` | b > 0, b ≠ 1, k ≠ 0, t/k > 0. If k = 0 and t = 0, all real x satisfy the equation, so there is no unique solution. | `2·3ˣ = 54 ⇒ x = 3` |
| Trigonometry | `sin(θ)`, `cos(θ)`, `tan(θ)` | The user selects degrees or radians. Degree inputs are converted to radians before evaluation. Tangent is rejected when cosine is numerically close to zero (tolerance 10⁻¹²). | `sin(30°) = 0.5` |
| Inverse trigonometry | `arcsin(x)`, `arccos(x)`, `arctan(x)` | Arcsine and arccosine require −1 ≤ x ≤ 1. Principal ranges: arcsine [−90°, 90°], arccosine [0°, 180°], arctangent (−90°, 90°). Both degrees and radians are shown. | `arcsin(0.5) = 30° = π/6` |
| Degree/radian conversion | `radians = degrees × π / 180` | Any finite degree value; result is not normalized to one turn. | `180° = π radians` |
| Slope of a line | `m = (y₂ − y₁) / (x₂ − x₁)` | Finite Cartesian coordinates; vertical lines have undefined slope and are rejected. | Points (1, 2) and (3, 6) give slope 2. |
| Distance and midpoint | `d = √((x₂−x₁)² + (y₂−y₁)²)`; `M = ((x₁+x₂)/2, (y₁+y₂)/2)` | Finite coordinates in the same coordinate system and units. | Points (0, 0) and (3, 4) give distance 5 and midpoint (1.5, 2). |
| Circle area/circumference | `A = πr²`; `C = 2πr` | Radius must be non-negative. Area uses square units; circumference uses linear units. | `r = 2 ⇒ A = C = 4π ≈ 12.5664` |
| Arithmetic sequence/series | `aₙ = a₁ + (n−1)d`; `Sₙ = n(a₁+aₙ)/2` | n is an integer from 1 to 100,000; first term and difference are finite. | `a₁=3, d=2, n=5 ⇒ a₅=11, S₅=35` |
| Geometric sequence/series | `aₙ = a₁rⁿ⁻¹`; for r ≠ 1, `Sₙ = a₁(1−rⁿ)/(1−r)`; for r = 1, `Sₙ = na₁` | n is an integer from 1 to 100,000. Non-finite results are rejected. | `a₁=2, r=3, n=4 ⇒ a₄=54, S₄=80` |
| Polynomial derivative | Differentiate each term: `cxⁿ → cnxⁿ⁻¹`; a constant's derivative is zero. | Coefficients are listed highest power first; degree at most 12. This differentiates polynomials only. Numeric overflow is rejected instead of silently omitting terms. | `2x² + 3x + 4 → 4x + 3` |
| Polynomial definite integral | For each `cxⁿ`, use `c(bⁿ⁺¹ − aⁿ⁺¹)/(n+1)` and sum the terms. | Polynomial degree at most 12, finite bounds, integer powers n ≥ 0, coefficients in descending-power order. Result is numerical and floating-point based. | `∫₀³ x² dx = 9` |
| Complex-number arithmetic | Multiplication: `(a+bi)(c+di) = (ac−bd) + (ad+bc)i`. Division uses the conjugate and denominator `c²+d²`. | Finite real components. Division by 0 + 0i is undefined and rejected. | `(1+2i) + (3+4i) = 4+6i` |
| 2×2 matrix determinant/inverse | For A = [[a,b],[c,d]], `det(A)=ad−bc`; inverse is `1/det(A) × [[d,−b],[−c,a]]`. | Matrix entries must be finite. An inverse exists only when determinant ≠ 0; singular matrices report no inverse. | A = [[1,2],[3,4]] has determinant −2. |
| 2D vector calculator | `u·v = uₓvₓ + uᵧvᵧ`; `|u| = √(uₓ²+uᵧ²)`; `cos(θ) = (u·v)/(|u||v|)` | Finite components. The cosine ratio is clamped to [−1, 1] for tiny rounding overshoots. Angle is undefined if either vector is zero. | `u=(1,2), v=(3,4) ⇒ u·v=11` |

## Mathematics references used for formula review

1. OpenStax, [Quadratic Equations](https://openstax.org/books/college-algebra-2e/pages/2-5-quadratic-equations) — quadratic formula and discriminant interpretation.
2. OpenStax, [Logarithmic Properties](https://openstax.org/books/college-algebra-corequisite-support/pages/6-5-logarithmic-properties) — change-of-base identity and logarithm restrictions.
3. OpenStax, [Solving Systems with Cramer's Rule](https://openstax.org/books/college-algebra-2e/pages/7-8-solving-systems-with-cramers-rule) — determinants and two-equation systems.
4. OpenStax, [Inverse Trigonometric Functions](https://openstax.org/books/precalculus-2e/pages/6-3-inverse-trigonometric-functions) — domains and principal angle ranges.
5. OpenStax, [Key Equations: College Algebra](https://openstax.org/books/college-algebra-2e/pages/9-key-equations) and [Series and Their Notations](https://openstax.org/books/college-algebra/pages/9-4-series-and-their-notations) — sequence and series identities.
6. OpenStax, [Differentiation Rules](https://openstax.org/books/calculus-volume-1/pages/3-3-differentiation-rules) — power and constant rules.
7. OpenStax, [Antiderivatives](https://openstax.org/books/calculus-volume-1/pages/4-10-antiderivatives) — power rule for integration.
8. OpenStax, [Complex Numbers](https://openstax.org/books/precalculus-2e/pages/3-1-complex-numbers) — conjugates and complex division.
9. OpenStax, [Solving Systems with Inverses](https://openstax.org/books/college-algebra/pages/7-7-solving-systems-with-inverses) — matrix inverse method and invertibility.
10. OpenStax, [The Dot Product](https://openstax.org/books/calculus-volume-3/pages/2-3-the-dot-product) — dot product and angle relation.
11. OpenStax, [Linear Functions](https://openstax.org/books/precalculus-2e/pages/2-1-linear-functions) — line slope.
12. OpenStax, [Distance and Midpoint Formulas; Circles](https://openstax.org/books/intermediate-algebra/pages/11-1-distance-and-midpoint-formulas-circles) — coordinate distance and midpoint.
13. OpenStax, [Area of Circles](https://openstax.org/books/contemporary-mathematics/pages/10-6-area) and [Circumference](https://openstax.org/books/contemporary-mathematics/pages/10-4-polygons-perimeter-and-circumference) — circle measures.

These sources support the standard identities. Test fixtures and edge tests separately check the implemented results; they do not prove behavior for every possible floating-point input.

## Automated verification

- [x] Reference examples for all 18 calculator IDs pass.
- [x] Domain and edge-case tests pass for zero coefficients, non-unique systems, logarithm domains, inverse-trig domains, tangent singularities, vertical-line slopes, zero complex divisors, singular matrices, zero vectors, malformed polynomial coefficients, and derivative overflow.
- [x] Browser tests pass across desktop, tablet, and mobile; they cover catalogue navigation, quadratic roots, logarithm success/error, trig unit/function controls, and definite integration.
- [x] Automated WCAG 2.1 A/AA axe checks now cover all 18 Phase 04 calculator routes; calculator results use an explicitly named polite status region, and calculator pages expose calculator-specific document titles.
- [x] JavaScript syntax, source-contract tests, and Phase 03 regression browser tests pass.
- [ ] A human screen-reader/assistive-technology session and broader independent numerical review remain open; automated accessibility checks are not a substitute for these reviews.
- [ ] Phase 21 must perform site-wide formula verification and regression before release sign-off.

## Known limitations

- No expression parser, arbitrary-precision arithmetic, symbolic simplifier, or computer algebra engine is included.
- Differentiation and integration are limited to polynomials.
- Linear systems use direct floating-point determinants and may be sensitive to near-singular inputs.
- Tangent singularity handling uses a tolerance near cosine zero.
- Phase 04 is an implementation stage, not a claim that the whole site is launched or fully verified.
