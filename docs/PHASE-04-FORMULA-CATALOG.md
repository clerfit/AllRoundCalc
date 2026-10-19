# Phase 04 — Advanced Mathematics Formula Catalogue

**Status:** In progress. The formulas below were checked against the cited mathematics references before implementation. Automated reference tests and browser tests are required before Phase 04 sign-off. A textbook source supports the identities, but does not alone prove numerical implementation correctness.

## Scope and input conventions

All calculators run in the visitor's browser and use JavaScript IEEE-754 double-precision numbers. Inputs must be finite; integer counts must be safe positive integers. Outputs use up to 12 significant digits for display. This is not symbolic algebra, arbitrary-precision computation, a computer algebra system, or a proof assistant. Polynomial tools accept comma-separated coefficients in descending powers (for example, `1,0,-3` means `x² - 3`). Polynomials are limited to degree 12. Calculators reject undefined domains and report limitations rather than inventing results.

## Calculator inventory and mathematical contracts

| Calculator | Formula / operation | Valid domain, assumptions, and edge handling | Reference example |
|---|---|---|---|
| Linear equation solver | (ax+b=c Rightarrow x=(c-b)/a) | Finite real coefficients; require (a\ne0). When (a=0), the equation is either inconsistent or not a unique linear equation, so this tool rejects it. | (3x+2=11\Rightarrow x=3) |
| Quadratic equation solver | (D=b^2-4ac\); (x=(-b\pm\sqrt D)/(2a)) | Real finite coefficients; require (a\ne0). (D>0): two real roots; (D=0): one repeated root; (D<0): complex-conjugate roots. Numeric overflow is rejected. | (x^2-3x+2=0\Rightarrow 2,1) |
| 2×2 linear system | Cramer's rule, (\Delta=a_1b_2-a_2b_1\); (x=(c_1b_2-c_2b_1)/\Delta\), (y=(a_1c_2-a_2c_1)/\Delta) | Finite coefficients. If (\Delta=0), there is no unique solution; the tool distinguishes inconsistent and non-unique systems for exact zero determinants. Near-singular cases can be sensitive to floating-point error. | (2x+y=7,\;x-2y=6\Rightarrow x=4,y=-1) |
| Logarithm | (\log_b(x)=\ln(x)/\ln(b)) | (x>0\), (b>0\), (b\ne1). Uses numerical natural logarithm; small floating-point display errors may occur. | (\log_{10}(1000)=3) |
| Exponential equation | (k b^x=t\Rightarrow x=\ln(t/k)/\ln(b)) | Require (b>0\), (b\ne1\), (k\ne0\), (t/k>0). If (k=0), handle the zero-target identity separately and reject a nonzero target. | (2\cdot3^x=54\Rightarrow x=3) |
| Trigonometry | (sin(\theta),\cos(\theta),\tan(\theta)) | Angle unit must be selected explicitly as degrees or radians. Input is converted to radians before JS trigonometric functions. Tangent is rejected when cosine is numerically near zero (tolerance (10^{-12})) to avoid unstable output near a vertical asymptote. | (sin(30^\circ)=0.5) |
| Inverse trigonometry | (\arcsin(x),\arccos(x),\arctan(x)) | For arcsine/arccosine require (-1\le x\le1). Principal output ranges: arcsine ([-90^\circ,90^\circ]), arccosine ([0^\circ,180^\circ]), arctangent ((-90^\circ,90^\circ)). | (\arcsin(0.5)=30^\circ=\pi/6) |
| Degree-to-radian conversion | (\text{rad}=\text{deg}\times\pi/180) | Any finite angle; periodic normalization is not applied, so multi-turn angles remain represented as entered. | (180^\circ=\pi\text{ rad}) |
| Slope of a line | (m=(y_2-y_1)/(x_2-x_1)) | Finite coordinates. Reject vertical lines when (x_2=x_1) because their slope is undefined. | ((1,2),(3,6)\Rightarrow m=2) |
| Distance and midpoint | (d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\); (M=((x_1+x_2)/2,(y_1+y_2)/2)) | Finite Cartesian coordinates; Euclidean distance in the same coordinate units. | ((0,0),(3,4)\Rightarrow d=5,M=(1.5,2)) |
| Circle area and circumference | (A=\pi r^2\); (C=2\pi r) | Radius finite and non-negative. Area uses square units; circumference uses linear units. No units are inferred or converted. | (r=2\Rightarrow A=C=4\pi\) |
| Arithmetic sequence/series | (a_n=a_1+(n-1)d\); (S_n=n(a_1+a_n)/2) | Finite first term and common difference; (n) is integer from 1 to 100,000. | (a_1=3,d=2,n=5\Rightarrow a_5=11,S_5=35) |
| Geometric sequence/series | (a_n=a_1r^{n-1}\); (S_n=a_1(1-r^n)/(1-r)) for (r\ne1), and (S_n=na_1) for (r=1) | Finite first term and common ratio; (n) is integer from 1 to 100,000. Overflow and non-finite outputs are rejected. | (a_1=2,r=3,n=4\Rightarrow a_4=54,S_4=80) |
| Polynomial differentiation | Differentiate each term (cx^n\mapsto cnx^{n-1}); constant term derivative is zero | Coefficients listed highest power first; degree 0–12. Returns a symbolic-looking formatted polynomial assembled from numeric coefficients, not a symbolic algebra engine. | (2x^2+3x+4\mapsto4x+3) |
| Polynomial definite integration | Apply (\int_a^b cx^n dx=c(b^{n+1}-a^{n+1})/(n+1)) term by term for integer (n\ge0) | Coefficients in descending-power order, degree 0–12; finite bounds. The result is numerical and uses floating point. | (\int_0^3 x^2 dx=9) |
| Complex arithmetic | Addition/subtraction by components; multiplication ((a+bi)(c+di)=(ac-bd)+(ad+bc)i\); division uses (c^2+d^2) denominator and the conjugate | Finite real components; division rejected when both components of the divisor are zero. Results are approximate floating-point complex numbers. | ((1+2i)+(3+4i)=4+6i) |
| 2×2 matrix determinant/inverse | (\det(A)=ad-bc\); (A^{-1}=\frac1{ad-bc}\begin{bmatrix}d&-b\\-c&a\end{bmatrix}) | Finite matrix elements. The inverse exists only when determinant is nonzero; singular matrices report no inverse. Near-singular matrices may amplify rounding error. | (A=[[1,2],[3,4]]\Rightarrow\det(A)=-2) |
| 2D vectors | Dot product (u\cdot v=u_xv_x+u_yv_y\); magnitude (\lVert u\rVert=\sqrt{u_x^2+u_y^2}\); angle (\theta=\arccos((u\cdot v)/(\lVert u\rVert\lVert v\rVert))) | Finite components; ratio is clamped to ([-1,1]) to absorb tiny floating-point overshoots. Angle is reported undefined if either vector has zero magnitude. | (u=(1,2),v=(3,4)\Rightarrow u\cdot v=11) |

## Formula references checked

1. OpenStax, [Quadratic Equations](https://openstax.org/books/college-algebra-2e/pages/2-5-quadratic-equations) — quadratic formula and discriminant interpretation.
2. OpenStax, [Logarithmic Properties](https://openstax.org/books/college-algebra-corequisite-support/pages/6-5-logarithmic-properties) — change-of-base formula and base restrictions.
3. OpenStax, [Solving Systems with Cramer's Rule](https://openstax.org/books/college-algebra-2e/pages/7-8-solving-systems-with-cramers-rule) — 2×2 determinant and Cramer's rule.
4. OpenStax, [Inverse Trigonometric Functions](https://openstax.org/books/precalculus-2e/pages/6-3-inverse-trigonometric-functions) — domains and principal ranges.
5. OpenStax, [Key Equations: College Algebra](https://openstax.org/books/college-algebra-2e/pages/9-key-equations) and [Series and Their Notations](https://openstax.org/books/college-algebra/pages/9-4-series-and-their-notations) — arithmetic and geometric sequence/series identities.
6. OpenStax, [Differentiation Rules](https://openstax.org/books/calculus-volume-1/pages/3-3-differentiation-rules) — power rule and constant rule.
7. OpenStax, [Antiderivatives](https://openstax.org/books/calculus-volume-1/pages/4-10-antiderivatives) — power rule for integration.
8. OpenStax, [Complex Numbers](https://openstax.org/books/precalculus-2e/pages/3-1-complex-numbers) — complex conjugates and complex division.

The circle, coordinate-geometry, and vector equations are standard Euclidean definitions. Their code still receives direct test coverage; formula citations alone are not taken as a substitute for implementation tests.

## Automated verification plan

- Reference fixtures for all 18 calculator IDs.
- Domain tests for zero linear/quadratic coefficients, singular systems and matrices, invalid log bases/arguments, exponential log-domain failures, inverse-trig bounds, tangent singularities, vertical-line slope, sequence (r=1), zero complex divisor, and angle of a zero vector.
- Polynomial derivative/integral examples and malformed coefficient validation.
- Browser tests for catalogue navigation, quadratic roots, logarithm result/error, trig unit/function selection, and definite integration.
- Run JavaScript syntax checks, source tests, Chromium browser tests across desktop/tablet/mobile, then inspect CI status before declaring implementation tests passed.

## Known limitations

- No general expression parser, symbolic simplifier, arbitrary-precision arithmetic, or unit system is included.
- The derivative calculator differentiates polynomials only; the integration calculator computes definite polynomial integrals only.
- Linear systems use direct floating-point determinants and may be sensitive for near-singular coefficients.
- Tangent singularity handling uses a numeric tolerance near cosine zero.
- Full manual scientific review, adversarial numerical testing, live deployment, and overall release sign-off remain separate tasks.

## Phase 04 sign-off checklist

- [ ] All 18 formula examples independently reproduce expected results.
- [ ] Domain and edge-case tests pass.
- [ ] Browser tests pass on desktop, tablet, and mobile.
- [ ] No regression to Phase 03 tools or Phase 01/02 navigation.
- [ ] Scientific limitations are visible in the repository documentation.
