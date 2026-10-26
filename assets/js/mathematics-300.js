(function (root) {
  "use strict";
  const groups = [
    "Arithmetic & Number Sense",
    "Percentages, Ratios & Proportions",
    "Algebra & Equations",
    "Powers, Roots, Logs & Exponents",
    "Sequences, Series & Discrete Math",
    "Geometry & Mensuration",
    "Geometry Continued & Coordinate Geometry",
    "Trigonometry",
    "Calculus & Analysis",
    "Linear Algebra & Matrices"
  ];
  const rawCatalog = String.raw`basic-arithmetic|Basic Arithmetic
order-of-operations|Order of Operations
integer-operations|Integer Operations
decimal-operations|Decimal Operations
fraction-operations|Fraction Operations
mixed-number-calculator|Mixed Number Calculator
fraction-to-decimal|Fraction to Decimal
decimal-to-fraction|Decimal to Fraction
fraction-to-percentage|Fraction to Percentage
percentage-to-fraction|Percentage to Fraction
rounding-calculator|Rounding Calculator
significant-figures|Significant Figures
scientific-notation|Scientific Notation
standard-form-converter|Standard Form Converter
absolute-value|Absolute Value
reciprocal-calculator|Reciprocal Calculator
prime-factorization|Prime Factorization
prime-number-checker|Prime Number Checker
factors-of-an-integer|Factors of an Integer
divisors-count|Divisors Count
sum-of-divisors|Sum of Divisors
greatest-common-divisor-gcd|Greatest Common Divisor (GCD)
least-common-multiple-lcm|Least Common Multiple (LCM)
euclidean-algorithm|Euclidean Algorithm
integer-quotient-and-remainder|Integer Quotient and Remainder
modulo-calculator|Modulo Calculator
parity-checker|Parity Checker
consecutive-integer-sum|Consecutive Integer Sum
arithmetic-sequence-sum|Arithmetic Sequence Sum
triangular-number-calculator|Triangular Number Calculator
percentage-of-a-number|Percentage of a Number
percentage-change|Percentage Change
percentage-difference|Percentage Difference
percentage-increase|Percentage Increase
percentage-decrease|Percentage Decrease
reverse-percentage|Reverse Percentage
what-percent-is-a-of-b|What Percent Is A of B
part-to-whole-percentage|Part-to-Whole Percentage
ratio-simplifier|Ratio Simplifier
ratio-calculator|Ratio Calculator
ratio-to-fraction|Ratio to Fraction
proportion-solver|Proportion Solver
direct-proportion|Direct Proportion
inverse-proportion|Inverse Proportion
unit-rate-calculator|Unit Rate Calculator
rate-comparison|Rate Comparison
weighted-average|Weighted Average
weighted-percentage|Weighted Percentage
markup-calculator|Markup Calculator
markdown-calculator|Markdown Calculator
discount-calculator|Discount Calculator
successive-discounts|Successive Discounts
tax-percentage-calculator|Tax Percentage Calculator
tip-percentage-calculator|Tip Percentage Calculator
commission-calculator|Commission Calculator
profit-percentage|Profit Percentage
loss-percentage|Loss Percentage
profit-margin-calculator|Profit Margin Calculator
price-per-unit|Price per Unit
concentration-percentage|Concentration Percentage
linear-equation-solver|Linear Equation Solver
two-variable-linear-equation|Two-Variable Linear Equation
system-of-two-linear-equations|System of Two Linear Equations
three-variable-linear-system|Three-Variable Linear System
quadratic-equation-solver|Quadratic Equation Solver
quadratic-discriminant|Quadratic Discriminant
quadratic-vertex-calculator|Quadratic Vertex Calculator
quadratic-formula-steps|Quadratic Formula Steps
polynomial-evaluation|Polynomial Evaluation
polynomial-addition|Polynomial Addition
polynomial-subtraction|Polynomial Subtraction
polynomial-multiplication|Polynomial Multiplication
polynomial-division|Polynomial Division
polynomial-remainder-theorem|Polynomial Remainder Theorem
polynomial-factor-checker|Polynomial Factor Checker
factorization-calculator|Factorization Calculator
expand-algebraic-expression|Expand Algebraic Expression
simplify-algebraic-expression|Simplify Algebraic Expression
solve-for-a-variable|Solve for a Variable
literal-equation-rearranger|Literal Equation Rearranger
inequality-solver|Inequality Solver
compound-inequality-solver|Compound Inequality Solver
absolute-value-equation|Absolute Value Equation
absolute-value-inequality|Absolute Value Inequality
rational-equation-solver|Rational Equation Solver
radical-equation-solver|Radical Equation Solver
exponential-equation-solver|Exponential Equation Solver
logarithmic-equation-solver|Logarithmic Equation Solver
inverse-function-finder|Inverse Function Finder
function-composition|Function Composition
exponent-calculator|Exponent Calculator
power-of-a-power|Power of a Power
fractional-exponents|Fractional Exponents
square-root-calculator|Square Root Calculator
cube-root-calculator|Cube Root Calculator
nth-root-calculator|Nth Root Calculator
radical-simplifier|Radical Simplifier
rationalizing-denominator|Rationalizing Denominator
logarithm-calculator|Logarithm Calculator
natural-logarithm|Natural Logarithm
common-logarithm|Common Logarithm
change-of-base-logarithm|Change of Base Logarithm
exponential-growth|Exponential Growth
exponential-decay|Exponential Decay
compound-exponential-model|Compound Exponential Model
scientific-calculator|Scientific Calculator
factorial-calculator|Factorial Calculator
double-factorial|Double Factorial
binomial-coefficient|Binomial Coefficient
permutations-calculator|Permutations Calculator
combinations-calculator|Combinations Calculator
multinomial-coefficient|Multinomial Coefficient
powers-of-ten|Powers of Ten
binary-exponent-calculator|Binary Exponent Calculator
complex-exponent-calculator|Complex Exponent Calculator
hyperbolic-sine|Hyperbolic Sine
hyperbolic-cosine|Hyperbolic Cosine
hyperbolic-tangent|Hyperbolic Tangent
inverse-hyperbolic-functions|Inverse Hyperbolic Functions
power-comparison|Power Comparison
arithmetic-sequence-nth-term|Arithmetic Sequence nth Term
arithmetic-sequence-sum-122|Arithmetic Sequence Sum
geometric-sequence-nth-term|Geometric Sequence nth Term
geometric-series-sum|Geometric Series Sum
infinite-geometric-series|Infinite Geometric Series
harmonic-mean|Harmonic Mean
harmonic-sequence-term|Harmonic Sequence Term
fibonacci-sequence|Fibonacci Sequence
lucas-sequence|Lucas Sequence
sequence-difference-table|Sequence Difference Table
finite-difference-calculator|Finite Difference Calculator
recursive-sequence-calculator|Recursive Sequence Calculator
sigma-notation-sum|Sigma Notation Sum
product-notation-calculator|Product Notation Calculator
telescoping-series-helper|Telescoping Series Helper
convergence-quick-check|Convergence Quick Check
catalan-number|Catalan Number
stirling-number-second-kind|Stirling Number (Second Kind)
bell-number|Bell Number
partition-number|Partition Number
recurrence-relation-helper|Recurrence Relation Helper
pigeonhole-principle-calculator|Pigeonhole Principle Calculator
inclusion-exclusion-calculator|Inclusion-Exclusion Calculator
set-union-and-intersection|Set Union and Intersection
set-difference-calculator|Set Difference Calculator
power-set-size|Power Set Size
cartesian-product-size|Cartesian Product Size
truth-table-generator|Truth Table Generator
boolean-algebra-evaluator|Boolean Algebra Evaluator
logic-equivalence-checker|Logic Equivalence Checker
circle-calculator|Circle Calculator
rectangle-calculator|Rectangle Calculator
square-calculator|Square Calculator
triangle-area|Triangle Area
heron-s-formula-triangle|Heron’s Formula Triangle
triangle-perimeter|Triangle Perimeter
right-triangle-solver|Right Triangle Solver
pythagorean-theorem|Pythagorean Theorem
equilateral-triangle|Equilateral Triangle
isosceles-triangle|Isosceles Triangle
parallelogram-area|Parallelogram Area
trapezoid-area|Trapezoid Area
rhombus-area|Rhombus Area
kite-area|Kite Area
polygon-interior-angles|Polygon Interior Angles
regular-polygon-area|Regular Polygon Area
regular-polygon-perimeter|Regular Polygon Perimeter
arc-length|Arc Length
sector-area|Sector Area
chord-length|Chord Length
circle-segment-area|Circle Segment Area
annulus-area|Annulus Area
ellipse-area|Ellipse Area
ellipse-perimeter-approximation|Ellipse Perimeter Approximation
ellipse-eccentricity|Ellipse Eccentricity
cube-surface-area|Cube Surface Area
cube-volume|Cube Volume
cuboid-surface-area|Cuboid Surface Area
cuboid-volume|Cuboid Volume
cylinder-surface-area|Cylinder Surface Area
cylinder-volume|Cylinder Volume
cone-volume|Cone Volume
cone-surface-area|Cone Surface Area
sphere-volume|Sphere Volume
sphere-surface-area|Sphere Surface Area
hemisphere-calculator|Hemisphere Calculator
frustum-volume|Frustum Volume
frustum-surface-area|Frustum Surface Area
prism-volume|Prism Volume
pyramid-volume|Pyramid Volume
pyramid-surface-area|Pyramid Surface Area
torus-volume|Torus Volume
distance-between-two-points|Distance Between Two Points
midpoint-calculator|Midpoint Calculator
slope-calculator|Slope Calculator
line-equation-from-two-points|Line Equation from Two Points
point-slope-form|Point-Slope Form
intercept-form-converter|Intercept Form Converter
parallel-line-checker|Parallel Line Checker
perpendicular-line-checker|Perpendicular Line Checker
point-to-line-distance|Point-to-Line Distance
circle-equation-from-center|Circle Equation from Center
circle-through-three-points|Circle Through Three Points
polygon-area-by-coordinates|Polygon Area by Coordinates
shoelace-formula|Shoelace Formula
centroid-of-triangle|Centroid of Triangle
triangle-incenter|Triangle Incenter
triangle-circumcenter|Triangle Circumcenter
triangle-orthocenter|Triangle Orthocenter
barycentric-coordinate-helper|Barycentric Coordinate Helper
degree-radian-converter|Degree-Radian Converter
sine-calculator|Sine Calculator
cosine-calculator|Cosine Calculator
tangent-calculator|Tangent Calculator
inverse-sine|Inverse Sine
inverse-cosine|Inverse Cosine
inverse-tangent|Inverse Tangent
two-argument-arctangent|Two-Argument Arctangent
law-of-sines|Law of Sines
law-of-cosines|Law of Cosines
triangle-side-angle-solver|Triangle Side-Angle Solver
right-triangle-trigonometry|Right Triangle Trigonometry
trigonometric-identity-checker|Trigonometric Identity Checker
exact-trigonometric-values|Exact Trigonometric Values
unit-circle-coordinates|Unit Circle Coordinates
arc-trigonometric-functions|Arc Trigonometric Functions
secant-calculator|Secant Calculator
cosecant-calculator|Cosecant Calculator
cotangent-calculator|Cotangent Calculator
trigonometric-equation-helper|Trigonometric Equation Helper
amplitude-and-period|Amplitude and Period
phase-shift-calculator|Phase Shift Calculator
sinusoid-parameter-solver|Sinusoid Parameter Solver
bearing-and-heading-angle|Bearing and Heading Angle
angle-of-elevation|Angle of Elevation
angle-of-depression|Angle of Depression
harmonic-wave-calculator|Harmonic Wave Calculator
radians-per-second|Radians per Second
angular-frequency|Angular Frequency
trigonometric-product-to-sum-helper|Trigonometric Product-to-Sum Helper
derivative-calculator-polynomial|Derivative Calculator (Polynomial)
derivative-from-power-rule|Derivative from Power Rule
product-rule-derivative|Product Rule Derivative
quotient-rule-derivative|Quotient Rule Derivative
chain-rule-derivative|Chain Rule Derivative
second-derivative|Second Derivative
implicit-differentiation-helper|Implicit Differentiation Helper
tangent-line-calculator|Tangent Line Calculator
critical-points-of-polynomial|Critical Points of Polynomial
stationary-point-classifier|Stationary Point Classifier
increasing-decreasing-intervals|Increasing-Decreasing Intervals
antiderivative-of-polynomial|Antiderivative of Polynomial
definite-polynomial-integral|Definite Polynomial Integral
area-under-linear-function|Area Under Linear Function
average-value-of-function|Average Value of Function
riemann-sum-calculator|Riemann Sum Calculator
trapezoidal-rule|Trapezoidal Rule
simpson-s-rule|Simpson’s Rule
numerical-differentiation|Numerical Differentiation
newton-raphson-root-finder|Newton-Raphson Root Finder
bisection-method|Bisection Method
secant-method-root-finder|Secant Method Root Finder
taylor-polynomial-coefficients|Taylor Polynomial Coefficients
maclaurin-polynomial-helper|Maclaurin Polynomial Helper
limit-of-polynomial|Limit of Polynomial
l-h-pital-rule-applicability-helper|L’Hôpital Rule Applicability Helper
partial-derivative-of-monomial|Partial Derivative of Monomial
gradient-of-scalar-field|Gradient of Scalar Field
directional-derivative-of-linear-function|Directional Derivative of Linear Function
double-integral-rectangle-constant|Double Integral Rectangle Constant
matrix-addition|Matrix Addition
matrix-subtraction|Matrix Subtraction
scalar-matrix-multiplication|Scalar-Matrix Multiplication
matrix-multiplication|Matrix Multiplication
matrix-transpose|Matrix Transpose
matrix-determinant-2-2|Matrix Determinant 2×2
matrix-determinant-3-3|Matrix Determinant 3×3
matrix-inverse-2-2|Matrix Inverse 2×2
matrix-inverse-3-3|Matrix Inverse 3×3
matrix-rank|Matrix Rank
trace-of-matrix|Trace of Matrix
identity-matrix-generator|Identity Matrix Generator
matrix-power|Matrix Power
solve-2-2-linear-system|Solve 2×2 Linear System
cramer-s-rule-2-2|Cramer’s Rule 2×2
vector-addition|Vector Addition
vector-subtraction|Vector Subtraction
vector-magnitude|Vector Magnitude
unit-vector|Unit Vector
dot-product|Dot Product
cross-product-3d|Cross Product 3D
angle-between-vectors|Angle Between Vectors
projection-of-vector|Projection of Vector
vector-distance|Vector Distance
linear-independence-2d|Linear Independence 2D
eigenvalues-2-2|Eigenvalues 2×2
eigenvector-2-2-helper|Eigenvector 2×2 Helper
characteristic-polynomial-2-2|Characteristic Polynomial 2×2
row-reduction-2-2|Row Reduction 2×2
basis-coordinate-helper|Basis Coordinate Helper`;
  const catalog = rawCatalog.trim().split(/\n/).map(function (line, i) {
    const parts = line.split("|");
    return { id: parts[0], name: parts.slice(1).join("|"), group: groups[Math.floor(i / 30)] };
  });
  const schema = Object.create(null);
  function set(ids, spec) {
    const fields = spec.split(";").map(function (part) {
      const p = part.split(":");
      return [p[0].trim(), p.slice(1).join(":").trim(), "Enter " + p.slice(1).join(":").trim() + " using the units or format stated."];
    });
    ids.trim().split(/\s+/).forEach(function (id) { schema[id] = fields; });
  }
  const xy = "x:Number x;y:Number y";
  const ab = "a:Number a;b:Number b";
  const abc = "a:Coefficient a;b:Coefficient b;c:Coefficient c";
  const poly = "coefficients:Polynomial coefficients, highest power first (comma-separated);x:Evaluation point x";
  const polyOnly = "coefficients:Polynomial coefficients, highest power first (comma-separated)";
  const mat2 = "a:Matrix entry a;b:Matrix entry b;c:Matrix entry c;d:Matrix entry d";
  const vec2 = "x1:Vector or point x-coordinate;y1:Vector or point y-coordinate;x2:Second x-coordinate;y2:Second y-coordinate";
  const vec3 = "x1:First vector x;y1:First vector y;z1:First vector z;x2:Second vector x;y2:Second vector y;z2:Second vector z";
  set("basic-arithmetic integer-operations decimal-operations", "a:First number;b:Second number;operation:Operation (add, subtract, multiply, divide)");
  set("order-of-operations simplify-algebraic-expression", "expression:Arithmetic expression");
  set("boolean-algebra-evaluator", "expression:Boolean expression using T/F, 1/0, !, AND/OR;assignments:Optional variable assignments like A=1,B=0");
  set("fraction-operations", "n1:First numerator;d1:First denominator;n2:Second numerator;d2:Second denominator;operation:Operation (add, subtract, multiply, divide)");
  set("mixed-number-calculator", "w1:First whole number;n1:First numerator;d1:First denominator;w2:Second whole number;n2:Second numerator;d2:Second denominator;operation:Operation (add, subtract, multiply, divide)");
  set("fraction-to-decimal fraction-to-percentage", "numerator:Numerator;denominator:Denominator");
  set("decimal-to-fraction", "x:Decimal value;maxDenominator:Maximum denominator (integer)");
  set("percentage-to-fraction", "percent:Percentage");
  set("rounding-calculator", "x:Number to round;digits:Decimal places (integer)");
  set("significant-figures", "x:Number;sigFigs:Significant figures (integer)");
  set("scientific-notation standard-form-converter absolute-value reciprocal-calculator radical-simplifier square-root-calculator cube-root-calculator natural-logarithm common-logarithm hyperbolic-sine hyperbolic-cosine hyperbolic-tangent inverse-sine inverse-cosine inverse-tangent degree-radian-converter sine-calculator cosine-calculator tangent-calculator secant-calculator cosecant-calculator cotangent-calculator exact-trigonometric-values unit-circle-coordinates arc-trigonometric-functions", "x:Number or angle");
  set("powers-of-ten", "n:Exponent n");
  set("prime-factorization prime-number-checker factors-of-an-integer divisors-count sum-of-divisors parity-checker triangular-number-calculator fibonacci-sequence lucas-sequence catalan-number bell-number partition-number identity-matrix-generator", "n:Integer n");
  set("greatest-common-divisor-gcd least-common-multiple-lcm euclidean-algorithm integer-quotient-and-remainder modulo-calculator", ab);
  set("consecutive-integer-sum", "start:First integer;count:Number of consecutive integers");
  set("arithmetic-sequence-sum arithmetic-sequence-sum-122", "a1:First term a₁;d:Common difference d;n:Number of terms n");
  set("percentage-of-a-number", "value:Base value;percent:Percentage");
  set("percentage-change percentage-difference", "a:First value;b:Second value");
  set("percentage-increase percentage-decrease markup-calculator markdown-calculator discount-calculator tax-percentage-calculator tip-percentage-calculator", "initial:Original amount;percent:Percentage");
  set("commission-calculator", "sales:Sales amount;rate:Commission rate (%)");
  set("reverse-percentage", "final:Final amount;percent:Percentage change");
  set("what-percent-is-a-of-b part-to-whole-percentage", "part:Part value;whole:Whole value");
  set("ratio-simplifier ratio-to-fraction", "a:First ratio part;b:Second ratio part");
  set("ratio-calculator", "a:First ratio part;b:Second ratio part;c:Known third value");
  set("proportion-solver", "a:First numerator;b:First denominator;c:Second numerator;d:Second denominator (or x)");
  set("direct-proportion inverse-proportion", "x1:Known x₁;y1:Known y₁;x2:Target x₂");
  set("unit-rate-calculator price-per-unit", "quantity:Quantity or price;units:Unit count or quantity");
  set("rate-comparison", "quantity1:First quantity;time1:First time;quantity2:Second quantity;time2:Second time");
  set("weighted-average", "values:Values separated by commas;weights:Weights separated by commas");
  set("weighted-percentage", "score1:First score;weight1:First weight (%);score2:Second score;weight2:Second weight (%)");
  set("successive-discounts", "original:Original price;percent1:First discount (%);percent2:Second discount (%)");
  set("profit-percentage", "sell:Selling price;cost:Cost price");
  set("loss-percentage", "cost:Cost price;sell:Selling price");
  set("profit-margin-calculator", "revenue:Revenue;cost:Cost");
  set("concentration-percentage", "solute:Solute amount;total:Total solution amount");
  set("linear-equation-solver solve-for-a-variable literal-equation-rearranger", "a:Coefficient a;b:Constant b;c:Right-hand side c");
  set("two-variable-linear-equation", "a:Coefficient a;b:Coefficient b;c:Right side c;x:Known x value");
  set("system-of-two-linear-equations solve-2-2-linear-system cramer-s-rule-2-2", "a1:Equation 1 coefficient a₁;b1:Equation 1 coefficient b₁;c1:Equation 1 right side c₁;a2:Equation 2 coefficient a₂;b2:Equation 2 coefficient b₂;c2:Equation 2 right side c₂");
  set("three-variable-linear-system", "a1:Equation 1 coefficient x;b1:Equation 1 coefficient y;c1:Equation 1 coefficient z;d1:Equation 1 right side;a2:Equation 2 coefficient x;b2:Equation 2 coefficient y;c2:Equation 2 coefficient z;d2:Equation 2 right side;a3:Equation 3 coefficient x;b3:Equation 3 coefficient y;c3:Equation 3 coefficient z;d3:Equation 3 right side");
  set("quadratic-equation-solver quadratic-discriminant quadratic-vertex-calculator quadratic-formula-steps factorization-calculator stationary-point-classifier", abc);
  set("polynomial-evaluation", poly);
  set("polynomial-addition polynomial-subtraction polynomial-multiplication polynomial-division", "coefficients:First polynomial coefficients, highest power first;otherCoefficients:Second polynomial coefficients, highest power first");
  set("polynomial-remainder-theorem polynomial-factor-checker", "coefficients:Polynomial coefficients, highest power first;root:Test root");
  set("expand-algebraic-expression", "a:First binomial term;b:Second binomial term;n:Integer power");
  set("inequality-solver absolute-value-equation absolute-value-inequality rational-equation-solver radical-equation-solver", "a:Coefficient a;b:Constant b;c:Right side c;relation:Relation (<, <=, >, >=) where applicable");
  set("compound-inequality-solver", "lower:Lower bound;upper:Upper bound");
  set("exponential-equation-solver", "a:Coefficient;base:Exponential base;target:Target value");
  set("logarithmic-equation-solver", "base:Logarithm base;target:Logarithm target");
  set("inverse-function-finder", "a:Linear coefficient a;b:Linear constant b");
  set("function-composition", "a:Outer coefficient a;b:Outer constant b;c:Inner coefficient c;d:Inner constant d;x:Input x");
  set("exponent-calculator binary-exponent-calculator power-of-a-power power-comparison", "a:First base or number;b:First exponent or power;c:Second base or number;d:Second exponent or power");
  set("fractional-exponents", "a:Base a;n:Numerator of exponent;d:Denominator of exponent");
  set("nth-root-calculator", "x:Radicand x;n:Root index n");
  set("rationalizing-denominator", "a:Numerator coefficient;b:Positive radicand in denominator");
  set("logarithm-calculator change-of-base-logarithm", "x:Positive argument x;base:Logarithm base");
  set("exponential-growth exponential-decay", "initial:Initial amount;rate:Rate per period (decimal);time:Number of periods");
  set("compound-exponential-model", "initial:Initial amount;rate:Rate per period (decimal);time:Elapsed periods;frequency:Compounds per period");
  set("scientific-calculator", "x:Number;operation:Operation (sqrt, sin, cos, tan, ln, log10, exp, abs)");
  set("factorial-calculator double-factorial", "n:Non-negative integer n");
  set("binomial-coefficient permutations-calculator combinations-calculator stirling-number-second-kind", "n:Integer n;k:Integer k");
  set("multinomial-coefficient", "values:Non-negative integer parts separated by commas");
  set("complex-exponent-calculator", "real:Complex real part;imag:Complex imaginary part;n:Integer power");
  set("inverse-hyperbolic-functions", "x:Function input;operation:asinh, acosh, or atanh");
  set("arithmetic-sequence-nth-term", "a1:First term a₁;d:Common difference d;n:Term number n");
  set("geometric-sequence-nth-term geometric-series-sum infinite-geometric-series", "a1:First term a₁;r:Common ratio r;n:Number of terms n");
  set("harmonic-mean sequence-difference-table finite-difference-calculator convergence-quick-check", "values:Values separated by commas");
  set("harmonic-sequence-term", "n:Term index n");
  set("recursive-sequence-calculator recurrence-relation-helper", "a0:First initial term;a1:Second initial term;p:Previous-term coefficient p;q:Second-previous coefficient q;n:Term index n");
  set("sigma-notation-sum product-notation-calculator", "coefficients:Polynomial coefficients, highest power first;lower:Starting integer;upper:Ending integer");
  set("telescoping-series-helper", "n:Number of terms n");
  set("pigeonhole-principle-calculator cartesian-product-size", "objects:Number of objects;boxes:Number of boxes");
  set("inclusion-exclusion-calculator", "a:Set A size;b:Set B size;intersection:Intersection size");
  set("set-union-and-intersection set-difference-calculator", "setA:Set A, comma-separated;setB:Set B, comma-separated");
  set("power-set-size", "n:Set size n");
  set("truth-table-generator", "variables:Number of Boolean variables");
  set("logic-equivalence-checker", "exprA:First Boolean expression;exprB:Second Boolean expression;variables:Variable names separated by commas");
  set("circle-calculator", "radius:Radius r");
  set("rectangle-calculator cuboid-surface-area cuboid-volume", "length:Length;width:Width;height:Height (for cuboid)");
  set("square-calculator cube-surface-area cube-volume", "side:Side length");
  set("triangle-area", "base:Base length;height:Perpendicular height");
  set("heron-s-formula-triangle triangle-perimeter right-triangle-solver", "a:Side a;b:Side b;c:Side c (if needed)");
  set("pythagorean-theorem", "a:First leg a;b:Second leg b");
  set("equilateral-triangle", "side:Side length");
  set("isosceles-triangle", "equalSide:Equal side length;base:Base length");
  set("parallelogram-area", "base:Base length;height:Perpendicular height");
  set("trapezoid-area", "a:First parallel side;b:Second parallel side;height:Height");
  set("rhombus-area kite-area", "diagonal1:First diagonal;diagonal2:Second diagonal");
  set("polygon-interior-angles", "n:Number of polygon sides");
  set("regular-polygon-area regular-polygon-perimeter", "n:Number of sides;side:Side length");
  set("arc-length sector-area chord-length circle-segment-area", "radius:Circle radius;angle:Central angle in degrees");
  set("annulus-area", "outerRadius:Outer radius;innerRadius:Inner radius");
  set("ellipse-area ellipse-perimeter-approximation ellipse-eccentricity", "a:Semi-major or semi-axis a;b:Semi-minor or semi-axis b");
  set("cylinder-surface-area cylinder-volume", "radius:Radius r;height:Height h");
  set("cone-volume cone-surface-area", "radius:Radius r;height:Height h");
  set("sphere-volume sphere-surface-area hemisphere-calculator", "radius:Radius r");
  set("frustum-volume frustum-surface-area", "r1:Lower radius r₁;r2:Upper radius r₂;height:Height h");
  set("prism-volume pyramid-volume", "baseArea:Base area;height:Perpendicular height");
  set("pyramid-surface-area", "baseArea:Base area;lateralArea:Total lateral area");
  set("torus-volume", "majorRadius:Major radius R;minorRadius:Minor radius r");
  set("distance-between-two-points midpoint-calculator slope-calculator line-equation-from-two-points", "x1:Point 1 x;y1:Point 1 y;x2:Point 2 x;y2:Point 2 y");
  set("point-slope-form", "m:Line slope;x1:Known point x;y1:Known point y");
  set("intercept-form-converter", "xIntercept:X intercept;yIntercept:Y intercept");
  set("parallel-line-checker perpendicular-line-checker", "a1:First line x coefficient;b1:First line y coefficient;a2:Second line x coefficient;b2:Second line y coefficient");
  set("point-to-line-distance", "x:Point x;y:Point y;a:Line coefficient a;b:Line coefficient b;c:Line constant c");
  set("circle-equation-from-center", "cx:Center x;cy:Center y;radius:Radius r");
  set("circle-through-three-points triangle-incenter triangle-circumcenter triangle-orthocenter centroid-of-triangle", "x1:Point 1 x;y1:Point 1 y;x2:Point 2 x;y2:Point 2 y;x3:Point 3 x;y3:Point 3 y");
  set("polygon-area-by-coordinates shoelace-formula", "xValues:X coordinates separated by commas;yValues:Y coordinates separated by commas");
  set("barycentric-coordinate-helper", "x:Point x;y:Point y;x1:Vertex A x;y1:Vertex A y;x2:Vertex B x;y2:Vertex B y;x3:Vertex C x;y3:Vertex C y");
  set("two-argument-arctangent bearing-and-heading-angle", "y:Vertical component;y2:Second y or north component;x:Horizontal component;x2:Second x or east component");
  set("law-of-sines", "a:Known side a;A:Known angle A (degrees);B:Target angle B (degrees)");
  set("law-of-cosines triangle-side-angle-solver", "a:Side a;b:Side b;angle:Included angle C (degrees)");
  set("right-triangle-trigonometry", "opposite:Opposite side;adjacent:Adjacent side");
  set("trigonometric-identity-checker", "angle:Angle in degrees");
  set("trigonometric-equation-helper", "target:Function target in [-1,1]");
  set("amplitude-and-period", "amplitude:Amplitude A;frequency:Frequency or angular coefficient");
  set("phase-shift-calculator", "amplitude:Amplitude A;period:Period;shift:Phase shift;x:Input x");
  set("sinusoid-parameter-solver", "a:Amplitude a;b:Angular frequency b;c:Phase offset c;d:Vertical shift d;x:Input x");
  set("angle-of-elevation angle-of-depression", "height:Vertical height;distance:Horizontal distance");
  set("harmonic-wave-calculator", "amplitude:Amplitude;frequency:Frequency (Hz);time:Time (s);phase:Phase in radians");
  set("radians-per-second angular-frequency", "frequency:Frequency in Hz");
  set("trigonometric-product-to-sum-helper", "a:First angle in degrees;b:Second angle in degrees");
  set("derivative-calculator-polynomial second-derivative critical-points-of-polynomial increasing-decreasing-intervals antiderivative-of-polynomial limit-of-polynomial", poly);
  set("maclaurin-polynomial-helper", "coefficients:Polynomial coefficients, highest power first");
  set("derivative-from-power-rule", "c:Coefficient c;n:Power n;x:Evaluation point x");
  set("product-rule-derivative", "f:Function value f;g:Function value g;df:Derivative f′;dg:Derivative g′");
  set("quotient-rule-derivative", "f:Numerator f;g:Denominator g;df:Numerator derivative f′;dg:Denominator derivative g′");
  set("chain-rule-derivative", "outerDerivative:Outer derivative;innerDerivative:Inner derivative");
  set("implicit-differentiation-helper", "fx:Partial derivative Fₓ;fy:Partial derivative Fᵧ");
  set("tangent-line-calculator", "coefficients:Polynomial coefficients, highest power first;x:Point x-coordinate");
  set("definite-polynomial-integral average-value-of-function", "coefficients:Polynomial coefficients, highest power first;lower:Lower bound;upper:Upper bound");
  set("area-under-linear-function", "a:Slope a;b:Intercept b;lower:Lower bound;upper:Upper bound");
  set("riemann-sum-calculator trapezoidal-rule simpson-s-rule", "xValues:X values separated by commas;yValues:Y values separated by commas");
  set("numerical-differentiation newton-raphson-root-finder bisection-method secant-method-root-finder", "coefficients:Polynomial coefficients, highest power first;x:Initial point or guess;lower:Left interval bound;upper:Right interval bound;iterations:Maximum iterations");
  set("taylor-polynomial-coefficients", "coefficients:Polynomial coefficients, highest power first;center:Expansion center;order:Polynomial order");
  set("l-h-pital-rule-applicability-helper", "numerator:Numerator limit;denominator:Denominator limit");
  set("partial-derivative-of-monomial", "c:Coefficient;xPower:Power of x;yPower:Power of y;x:Point x;y:Point y");
  set("gradient-of-scalar-field", "a:Partial derivative in x;b:Partial derivative in y;c:Partial derivative in z");
  set("directional-derivative-of-linear-function", "a:Gradient x component;b:Gradient y component;x:Direction x;y:Direction y");
  set("double-integral-rectangle-constant", "f:Constant integrand;x1:Lower x;x2:Upper x;y1:Lower y;y2:Upper y");
  set("matrix-addition matrix-subtraction matrix-multiplication matrix-transpose matrix-rank trace-of-matrix matrix-power row-reduction-2-2", "matrixA:Matrix A (rows separated by semicolons, entries by commas);matrixB:Matrix B in same format (if required);n:Non-negative integer power (for matrix power)");
  set("scalar-matrix-multiplication", "matrixA:Matrix A (rows separated by semicolons, entries by commas);scalar:Scalar multiplier");
  set("matrix-determinant-2-2 matrix-determinant-3-3 matrix-inverse-2-2 matrix-inverse-3-3 eigenvalues-2-2 characteristic-polynomial-2-2 eigenvector-2-2-helper", "a:Matrix entry a;b:Matrix entry b;c:Matrix entry c;d:Matrix entry d;e:Matrix entry e;f:Matrix entry f;g:Matrix entry g;h:Matrix entry h;i:Matrix entry i;lambda:Eigenvalue λ (for eigenvector)");
  set("vector-addition vector-subtraction vector-magnitude unit-vector dot-product cross-product-3d angle-between-vectors projection-of-vector vector-distance linear-independence-2d", "x1:Vector A x;y1:Vector A y;z1:Vector A z;x2:Vector B x;y2:Vector B y;z2:Vector B z");
  set("basis-coordinate-helper", "x:Target x;y:Target y;x1:Basis vector 1 x;y1:Basis vector 1 y;x2:Basis vector 2 x;y2:Basis vector 2 y");
  schema["identity-matrix-generator"] = [["n","Matrix order n","Enter an integer order from 1 to 10."]];
  schema["gcd-placeholder"] = [["a","First integer"],["b","Second integer"]];
  const formulaText = {
  "basic-arithmetic": "Apply the selected operation to a and b: a+b, a−b, a×b, or a÷b; division by zero is undefined.",
  "order-of-operations": "Evaluate parentheses first, then powers, then multiplication/division, then addition/subtraction.",
  "integer-operations": "For integers a and b, apply the selected arithmetic operation; division may produce a non-integer quotient.",
  "decimal-operations": "For decimal values a and b, apply the selected arithmetic operation; division by zero is undefined.",
  "fraction-operations": "Convert fractions to common denominators for addition/subtraction; multiply numerators and denominators for multiplication; divide by multiplying by the reciprocal.",
  "mixed-number-calculator": "Convert each mixed number to an improper fraction, apply the selected fraction operation, then simplify.",
  "fraction-to-decimal": "Decimal value = numerator ÷ denominator, with denominator ≠ 0.",
  "decimal-to-fraction": "Approximate x by a rational number p/q within the selected maximum denominator, then simplify p/q.",
  "fraction-to-percentage": "Percentage = (numerator ÷ denominator) × 100%, with denominator ≠ 0.",
  "percentage-to-fraction": "p% = p/100; reduce numerator and denominator to lowest terms.",
  "rounding-calculator": "Round x to d decimal places using the nearest representable decimal place.",
  "significant-figures": "Round x to the requested number of significant digits.",
  "scientific-notation": "Write x as m × 10ⁿ, where 1 ≤ |m| < 10 for non-zero x.",
  "standard-form-converter": "Write x in scientific notation m × 10ⁿ, with 1 ≤ |m| < 10 for non-zero x.",
  "absolute-value": "|x| = x when x ≥ 0 and −x when x < 0.",
  "reciprocal-calculator": "Reciprocal of x = 1/x; x must not be zero.",
  "prime-factorization": "Express positive integer n as a product of prime powers.",
  "prime-number-checker": "An integer n > 1 is prime if its only positive divisors are 1 and n.",
  "factors-of-an-integer": "List each positive integer d such that n mod d = 0.",
  "divisors-count": "If n = ∏ pᵢ^eᵢ, the number of positive divisors is ∏(eᵢ + 1).",
  "sum-of-divisors": "If n = ∏ pᵢ^eᵢ, sum of positive divisors = ∏((pᵢ^(eᵢ+1)−1)/(pᵢ−1)).",
  "greatest-common-divisor-gcd": "Use the Euclidean algorithm: gcd(a,b) = gcd(b, a mod b).",
  "least-common-multiple-lcm": "For integers a,b not both zero, lcm(a,b) = |ab|/gcd(a,b); lcm(0,b)=0.",
  "euclidean-algorithm": "Repeat a = bq + r and replace (a,b) by (b,r) until r = 0; the last non-zero remainder is the GCD.",
  "integer-quotient-and-remainder": "For integer dividend a and non-zero divisor b, a = bq + r, where q is the integer quotient and r = a mod b.",
  "modulo-calculator": "Remainder r = a mod b; divisor b must be non-zero.",
  "parity-checker": "An integer is even when n mod 2 = 0; otherwise it is odd.",
  "consecutive-integer-sum": "Sum of n consecutive integers starting at a = n(2a+n−1)/2.",
  "arithmetic-sequence-sum": "Sₙ = n(2a₁ + (n−1)d)/2.",
  "triangular-number-calculator": "Tₙ = n(n+1)/2.",
  "percentage-of-a-number": "Part = value × percent/100.",
  "percentage-change": "Percentage change = (final − initial)/initial × 100%; initial ≠ 0.",
  "percentage-difference": "Percentage difference = |a−b| / ((|a|+|b|)/2) × 100%; the denominator must be non-zero.",
  "percentage-increase": "Increase = initial × percent/100; new value = initial × (1+percent/100).",
  "percentage-decrease": "Decrease = initial × percent/100; new value = initial × (1−percent/100).",
  "reverse-percentage": "Original value = final value / (1 + percentage change/100), provided the divisor is non-zero.",
  "what-percent-is-a-of-b": "Percentage = part/whole × 100%; whole ≠ 0.",
  "part-to-whole-percentage": "Percentage = part/whole × 100%; whole ≠ 0.",
  "ratio-simplifier": "Divide both integer ratio terms by gcd(a,b) to obtain the simplest ratio.",
  "ratio-calculator": "For ratio a:b scaled so the first part becomes c, the second part is c·b/a (a ≠ 0).",
  "ratio-to-fraction": "The ratio a:b corresponds to the fraction a/b; reduce by the greatest common divisor.",
  "proportion-solver": "For a/b = c/d, the fourth proportional is d = bc/a (with a,b ≠ 0).",
  "direct-proportion": "For direct proportion y ∝ x, y₂ = y₁x₂/x₁, with x₁ ≠ 0.",
  "inverse-proportion": "For inverse proportion xy = constant, y₂ = x₁y₁/x₂, with x₁,x₂ ≠ 0.",
  "unit-rate-calculator": "Unit rate = quantity ÷ number of units; units must be positive.",
  "rate-comparison": "Compare each rate quantity/time, with positive elapsed times.",
  "weighted-average": "Weighted mean = Σ(valueᵢ × weightᵢ) / Σweightᵢ, when total weight is non-zero.",
  "weighted-percentage": "Combined weighted score = Σ(scoreᵢ × weightᵢ) / Σweightᵢ, when total weight is non-zero.",
  "markup-calculator": "Marked-up price = cost × (1 + markup percentage/100).",
  "markdown-calculator": "Marked-down price = original price × (1 − markdown percentage/100).",
  "discount-calculator": "Discounted price = original price × (1 − discount percentage/100).",
  "successive-discounts": "Final price = original × (1−p₁/100) × (1−p₂/100); discounts are multiplicative, not additive.",
  "tax-percentage-calculator": "Tax = pre-tax amount × tax rate/100; total = pre-tax amount + tax.",
  "tip-percentage-calculator": "Tip = bill × tip rate/100; total = bill + tip.",
  "commission-calculator": "Commission = sales amount × commission rate/100.",
  "profit-percentage": "Profit percentage = (selling price − cost price)/cost price × 100%; cost ≠ 0.",
  "loss-percentage": "Loss percentage = (cost price − selling price)/cost price × 100%; cost ≠ 0.",
  "profit-margin-calculator": "Profit margin = (revenue − cost)/revenue × 100%; revenue ≠ 0.",
  "price-per-unit": "Unit price = total price ÷ quantity; quantity > 0.",
  "concentration-percentage": "Percentage concentration = solute amount/total solution amount × 100%; total ≠ 0.",
  "linear-equation-solver": "For ax+b=c, x=(c−b)/a, where a ≠ 0.",
  "two-variable-linear-equation": "For ax+by=c with x known, y=(c−ax)/b, where b ≠ 0.",
  "system-of-two-linear-equations": "Solve the two equations simultaneously; a unique solution exists only when the coefficient determinant is non-zero.",
  "three-variable-linear-system": "Use elimination/Gaussian elimination on the 3×3 coefficient matrix; a unique solution requires a non-singular matrix.",
  "quadratic-equation-solver": "D=b²−4ac; roots x=(−b±√D)/(2a), where a ≠ 0.",
  "quadratic-discriminant": "Discriminant D=b²−4ac: D>0 two distinct real roots; D=0 one repeated real root; D<0 complex conjugate roots.",
  "quadratic-vertex-calculator": "For y=ax²+bx+c, vertex x-coordinate is −b/(2a); y-coordinate is −D/(4a).",
  "quadratic-formula-steps": "Compute D=b²−4ac, then substitute x=(−b±√D)/(2a); a must be non-zero.",
  "polynomial-evaluation": "Use Horner's method to evaluate p(x) for a polynomial supplied as descending-power coefficients.",
  "polynomial-addition": "Align coefficients by polynomial degree and add matching coefficients.",
  "polynomial-subtraction": "Align coefficients by polynomial degree and subtract matching coefficients.",
  "polynomial-multiplication": "Multiply polynomials by coefficient convolution and combine terms of equal degree.",
  "polynomial-division": "Use polynomial long division to obtain quotient and remainder coefficients.",
  "polynomial-remainder-theorem": "When p(x) is divided by (x−r), the remainder is p(r).",
  "polynomial-factor-checker": "(x−r) is a factor exactly when p(r)=0, subject to numerical tolerance.",
  "factorization-calculator": "For ax²+bx+c, find roots with the quadratic formula and express factors when roots are real.",
  "expand-algebraic-expression": "Apply the binomial theorem: (a+b)ⁿ = Σₖ₌₀ⁿ C(n,k)aⁿ⁻ᵏbᵏ.",
  "simplify-algebraic-expression": "Evaluate a numeric arithmetic expression using parentheses, exponents, multiplication/division, then addition/subtraction.",
  "solve-for-a-variable": "For ax+b=c, isolate x=(c−b)/a, where a ≠ 0.",
  "literal-equation-rearranger": "For ax+b=c, rearrange to x=(c−b)/a, where a ≠ 0.",
  "inequality-solver": "Solve ax+b relation c for x; reverse the inequality sign when dividing by a negative coefficient.",
  "compound-inequality-solver": "Represent the interval bounded by lower and upper, with lower ≤ upper.",
  "absolute-value-equation": "|ax+b|=c gives ax+b=±c, with c≥0 and a≠0.",
  "absolute-value-inequality": "For |ax+b|≤c, the solution is the interval between the boundary roots; for ≥c, it is outside that interval.",
  "rational-equation-solver": "For a/(x−b)=c, x=b+a/c, with c≠0 and x≠b.",
  "radical-equation-solver": "For √(ax+b)=c, require c≥0 and solve x=(c²−b)/a; check any candidate in the original equation.",
  "exponential-equation-solver": "For a·baseˣ=target, x=ln(target/a)/ln(base), with a≠0, base>0, base≠1, and target/a>0.",
  "logarithmic-equation-solver": "For log_base(x)=target, x=base^target, with base>0 and base≠1.",
  "inverse-function-finder": "For f(x)=ax+b, f⁻¹(x)=(x−b)/a, with a≠0.",
  "function-composition": "For f(x)=ax+b and g(x)=cx+d, f(g(x))=a(cx+d)+b.",
  "exponent-calculator": "Evaluate aᵇ using real exponentiation where the result is defined in the real numbers.",
  "power-of-a-power": "(aᵇ)ᶜ = aᵇᶜ when the real-power domain conditions hold.",
  "fractional-exponents": "a^(n/d) is the d-th root of aⁿ; even roots require a non-negative radicand in the real domain.",
  "square-root-calculator": "√x is real only when x≥0.",
  "cube-root-calculator": "∛x is defined for every real x.",
  "nth-root-calculator": "ⁿ√x = x^(1/n); for negative x, n must be odd for a real root.",
  "radical-simplifier": "Extract perfect-square factors from √n when n is a non-negative integer.",
  "rationalizing-denominator": "a/√b = a√b/b, for b>0.",
  "logarithm-calculator": "log_base(x)=ln(x)/ln(base), with x>0, base>0, and base≠1.",
  "natural-logarithm": "ln(x) is the logarithm to base e and requires x>0.",
  "common-logarithm": "log₁₀(x) requires x>0.",
  "change-of-base-logarithm": "log_base(x)=ln(x)/ln(base), with x>0, base>0, base≠1.",
  "exponential-growth": "Exponential growth model: A(t)=A₀(1+r)ᵗ for a per-period rate r.",
  "exponential-decay": "Exponential decay model: A(t)=A₀(1−r)ᵗ, where 0≤r≤1.",
  "compound-exponential-model": "Compounded model: A(t)=A₀(1+r/m)^(mt), for m compounding periods per time unit.",
  "scientific-calculator": "Evaluate the selected supported function (sqrt, sin, cos, tan, ln, log10, exp, or abs); trig inputs use radians.",
  "factorial-calculator": "n! = 1×2×…×n, with 0!=1.",
  "double-factorial": "n!! = n(n−2)(n−4)… down to 1 or 2; 0!!=1.",
  "binomial-coefficient": "C(n,k)=n!/[k!(n−k)!], for integers 0≤k≤n.",
  "permutations-calculator": "P(n,k)=n!/(n−k)!, for integers 0≤k≤n.",
  "combinations-calculator": "C(n,k)=n!/[k!(n−k)!], for integers 0≤k≤n.",
  "multinomial-coefficient": "Multinomial coefficient = (Σnᵢ)! / ∏nᵢ! for non-negative integer parts nᵢ.",
  "powers-of-ten": "Compute 10ⁿ for the selected integer exponent n.",
  "binary-exponent-calculator": "Exponentiation by repeated squaring computes aᵇ; this calculator returns the same mathematical power.",
  "complex-exponent-calculator": "For integer n≥0, compute (a+bi)ⁿ by repeated complex multiplication.",
  "hyperbolic-sine": "sinh(x)=(eˣ−e⁻ˣ)/2.",
  "hyperbolic-cosine": "cosh(x)=(eˣ+e⁻ˣ)/2.",
  "hyperbolic-tangent": "tanh(x)=sinh(x)/cosh(x).",
  "inverse-hyperbolic-functions": "Use asinh(x), acosh(x) for x≥1, or atanh(x) for −1<x<1.",
  "power-comparison": "Compare aᵇ with cᵈ after evaluating both powers in the supported real-number domain.",
  "arithmetic-sequence-nth-term": "aₙ=a₁+(n−1)d.",
  "arithmetic-sequence-sum-122": "Sₙ=n(2a₁+(n−1)d)/2.",
  "geometric-sequence-nth-term": "aₙ=a₁rⁿ⁻¹.",
  "geometric-series-sum": "Sₙ=a₁(1−rⁿ)/(1−r) for r≠1; if r=1, Sₙ=na₁.",
  "infinite-geometric-series": "S∞=a₁/(1−r), which converges only when |r|<1.",
  "harmonic-mean": "H=n/Σ(1/xᵢ), provided the values are non-zero and the reciprocal sum is non-zero.",
  "harmonic-sequence-term": "The nth term of the unit harmonic sequence is aₙ=1/n.",
  "fibonacci-sequence": "F₀=0, F₁=1, and Fₙ=Fₙ₋₁+Fₙ₋₂.",
  "lucas-sequence": "L₀=2, L₁=1, and Lₙ=Lₙ₋₁+Lₙ₋₂.",
  "sequence-difference-table": "Build successive forward-difference rows: Δaᵢ=aᵢ₊₁−aᵢ.",
  "finite-difference-calculator": "Compute forward finite differences repeatedly: Δaᵢ=aᵢ₊₁−aᵢ.",
  "recursive-sequence-calculator": "Use uₙ=p·uₙ₋₁+q·uₙ₋₂ with the two supplied initial values.",
  "sigma-notation-sum": "Σₖ₌ₗᵒʷᵉʳᵘᵖᵖᵉʳ p(k), evaluating the supplied polynomial at every integer in the inclusive range.",
  "product-notation-calculator": "∏ₖ₌ₗᵒʷᵉʳᵘᵖᵖᵉʳ p(k), multiplying the supplied polynomial values over the inclusive integer range.",
  "telescoping-series-helper": "For Σₖ₌₁ⁿ 1/[k(k+1)], cancellation gives Sₙ=1−1/(n+1)=n/(n+1).",
  "convergence-quick-check": "Inspect recent absolute term ratios as a heuristic only; a finite sample cannot prove convergence.",
  "catalan-number": "Cₙ=(2n)!/[n!(n+1)!].",
  "stirling-number-second-kind": "S(n,k)=k·S(n−1,k)+S(n−1,k−1), with S(0,0)=1.",
  "bell-number": "Bell numbers count set partitions; the Bell triangle recurrence is used to generate Bₙ.",
  "partition-number": "Use the integer partition recurrence to count additive partitions of n.",
  "recurrence-relation-helper": "Generate the selected term from uₙ=p·uₙ₋₁+q·uₙ₋₂ and the two starting terms.",
  "pigeonhole-principle-calculator": "If N objects go into m boxes, at least one box contains at least ceil(N/m) objects when m>0.",
  "inclusion-exclusion-calculator": "|A∪B|=|A|+|B|−|A∩B|.",
  "set-union-and-intersection": "Union contains elements in A or B; intersection contains elements common to both sets.",
  "set-difference-calculator": "A−B contains elements of A that are not in B.",
  "power-set-size": "A set with n elements has 2ⁿ subsets.",
  "cartesian-product-size": "|A×B|=|A|·|B|.",
  "truth-table-generator": "A Boolean table with n variables contains 2ⁿ assignments.",
  "boolean-algebra-evaluator": "Evaluate a Boolean expression using NOT, AND, OR, parentheses, and the supplied variable assignments.",
  "logic-equivalence-checker": "Two Boolean expressions are equivalent when their outputs match for every assignment of the selected variables.",
  "circle-calculator": "Area A=πr²; circumference C=2πr.",
  "rectangle-calculator": "Area A=lw; perimeter P=2(l+w); diagonal d=√(l²+w²).",
  "square-calculator": "Area A=s²; perimeter P=4s.",
  "triangle-area": "Area A=bh/2.",
  "heron-s-formula-triangle": "Heron's formula: A=√[s(s−a)(s−b)(s−c)], where s=(a+b+c)/2 and triangle inequalities hold.",
  "triangle-perimeter": "Perimeter P=a+b+c, for valid triangle side lengths.",
  "right-triangle-solver": "Pythagorean theorem: c²=a²+b², with c the hypotenuse.",
  "pythagorean-theorem": "For perpendicular legs a,b, hypotenuse c=√(a²+b²).",
  "equilateral-triangle": "Perimeter=3s; area=√3s²/4; altitude=√3s/2.",
  "isosceles-triangle": "For equal sides s and base b, height=√(s²−b²/4), area=bh/2, perimeter=2s+b.",
  "parallelogram-area": "Area A=base×perpendicular height.",
  "trapezoid-area": "Area A=(a+b)h/2, where a and b are parallel sides.",
  "rhombus-area": "Area A=d₁d₂/2 using the diagonals.",
  "kite-area": "Area A=d₁d₂/2 using the diagonals.",
  "polygon-interior-angles": "Sum of interior angles=(n−2)×180°; regular polygon angle=(n−2)×180°/n.",
  "regular-polygon-area": "Area A=ns²/[4 tan(π/n)] for a regular n-sided polygon of side s.",
  "regular-polygon-perimeter": "Perimeter P=ns.",
  "arc-length": "Arc length s=rθ, where θ is measured in radians.",
  "sector-area": "Sector area A=r²θ/2, where θ is measured in radians.",
  "chord-length": "Chord length c=2r sin(θ/2), where θ is measured in radians.",
  "circle-segment-area": "Minor segment area A=r²(θ−sinθ)/2, where θ is measured in radians.",
  "annulus-area": "Area A=π(R²−r²), where R≥r≥0.",
  "ellipse-area": "Area A=πab for semi-axes a and b.",
  "ellipse-perimeter-approximation": "Ramanujan approximation: P≈π(a+b)[1+3h/(10+√(4−3h))], h=(a−b)²/(a+b)².",
  "ellipse-eccentricity": "Eccentricity e=√(1−b²/a²), where a≥b>0.",
  "cube-surface-area": "Surface area A=6s².",
  "cube-volume": "Volume V=s³.",
  "cuboid-surface-area": "Surface area A=2(lw+lh+wh).",
  "cuboid-volume": "Volume V=lwh.",
  "cylinder-surface-area": "Total surface area A=2πr(r+h).",
  "cylinder-volume": "Volume V=πr²h.",
  "cone-volume": "Volume V=πr²h/3.",
  "cone-surface-area": "Total surface area A=πr(r+√(r²+h²)).",
  "sphere-volume": "Volume V=4πr³/3.",
  "sphere-surface-area": "Surface area A=4πr².",
  "hemisphere-calculator": "Volume V=2πr³/3; curved area=2πr²; total surface area=3πr².",
  "frustum-volume": "Volume V=πh(R²+Rr+r²)/3.",
  "frustum-surface-area": "Total surface area A=π(R²+r²)+π(R+r)√(h²+(R−r)²).",
  "prism-volume": "Volume V=base area×perpendicular height.",
  "pyramid-volume": "Volume V=base area×height/3.",
  "pyramid-surface-area": "Total surface area = base area + lateral surface area.",
  "torus-volume": "Volume V=2π²Rr², for major radius R and minor radius r.",
  "distance-between-two-points": "Distance d=√[(x₂−x₁)²+(y₂−y₁)²].",
  "midpoint-calculator": "Midpoint M=((x₁+x₂)/2,(y₁+y₂)/2).",
  "slope-calculator": "Slope m=(y₂−y₁)/(x₂−x₁), undefined for a vertical line.",
  "line-equation-from-two-points": "Find m=(y₂−y₁)/(x₂−x₁), then use y−y₁=m(x−x₁); vertical lines have x=x₁.",
  "point-slope-form": "Point-slope form: y−y₁=m(x−x₁).",
  "intercept-form-converter": "Intercept form: x/a+y/b=1, where a and b are non-zero intercepts.",
  "parallel-line-checker": "Lines ax+by+c=0 are parallel/coincident when a₁b₂−a₂b₁=0.",
  "perpendicular-line-checker": "Lines with normal coefficients (a₁,b₁),(a₂,b₂) are perpendicular when a₁a₂+b₁b₂=0.",
  "point-to-line-distance": "Distance from (x₀,y₀) to ax+by+c=0 is |ax₀+by₀+c|/√(a²+b²).",
  "circle-equation-from-center": "Circle equation: (x−h)²+(y−k)²=r².",
  "circle-through-three-points": "Solve for the unique circumcenter and radius through three non-collinear points.",
  "polygon-area-by-coordinates": "Use the shoelace sum: area=|Σ(xᵢyᵢ₊₁−yᵢxᵢ₊₁)|/2.",
  "shoelace-formula": "Area=|Σ(xᵢyᵢ₊₁−yᵢxᵢ₊₁)|/2, with vertices ordered around the polygon.",
  "centroid-of-triangle": "Centroid G=((x₁+x₂+x₃)/3,(y₁+y₂+y₃)/3).",
  "triangle-incenter": "The incenter is the side-length-weighted average of vertex coordinates.",
  "triangle-circumcenter": "Solve the perpendicular bisectors to locate the point equidistant from all three vertices.",
  "triangle-orthocenter": "For a non-degenerate triangle, orthocenter H=A+B+C−2O, where O is the circumcenter.",
  "barycentric-coordinate-helper": "Express point P as αA+βB+γC with α+β+γ=1.",
  "degree-radian-converter": "Radians = degrees×π/180; degrees = radians×180/π.",
  "sine-calculator": "sin θ, with the input angle interpreted in degrees.",
  "cosine-calculator": "cos θ, with the input angle interpreted in degrees.",
  "tangent-calculator": "tan θ=sin θ/cos θ, with degree input; undefined when cos θ=0.",
  "inverse-sine": "θ=arcsin(x), for −1≤x≤1; output is in degrees.",
  "inverse-cosine": "θ=arccos(x), for −1≤x≤1; output is in degrees.",
  "inverse-tangent": "θ=arctan(x); output is in degrees.",
  "two-argument-arctangent": "atan2(y,x) identifies the quadrant-aware angle from the x and y components.",
  "law-of-sines": "a/sin A=b/sin B=c/sin C.",
  "law-of-cosines": "c²=a²+b²−2ab cos C.",
  "triangle-side-angle-solver": "For sides a,b and included angle C, c=√(a²+b²−2ab cos C).",
  "right-triangle-trigonometry": "Hypotenuse=√(opposite²+adjacent²); angle=atan2(opposite,adjacent).",
  "trigonometric-identity-checker": "sin²θ+cos²θ=1.",
  "exact-trigonometric-values": "Evaluate sin θ, cos θ, and tan θ for the selected degree angle.",
  "unit-circle-coordinates": "Point on the unit circle at θ is (cos θ,sin θ).",
  "arc-trigonometric-functions": "Principal inverse angles: arcsin(x) and arccos(x), for −1≤x≤1.",
  "secant-calculator": "sec θ=1/cos θ, where cos θ≠0.",
  "cosecant-calculator": "csc θ=1/sin θ, where sin θ≠0.",
  "cotangent-calculator": "cot θ=cos θ/sin θ, where sin θ≠0.",
  "trigonometric-equation-helper": "For sin θ=t, principal solution α=arcsin(t); periodic solutions follow θ=α+360°k or θ=180°−α+360°k.",
  "amplitude-and-period": "For sin(bx), amplitude is |A| and period is 2π/|b| (b≠0).",
  "phase-shift-calculator": "y=A sin(2π(x−phase)/period).",
  "sinusoid-parameter-solver": "Evaluate y=a sin(bx+c)+d.",
  "bearing-and-heading-angle": "Use atan2 for quadrant-aware direction; this implementation reports angle from the positive x/east axis.",
  "angle-of-elevation": "Elevation angle θ=arctan(height/horizontal distance).",
  "angle-of-depression": "Depression angle θ=arctan(height/horizontal distance) for a horizontal sight line.",
  "harmonic-wave-calculator": "y=A sin(2πft+φ).",
  "radians-per-second": "Angular speed ω=2πf radians/s.",
  "angular-frequency": "Angular frequency ω=2πf.",
  "trigonometric-product-to-sum-helper": "sin A sin B = [cos(A−B)−cos(A+B)]/2.",
  "derivative-calculator-polynomial": "Differentiate term-by-term: d(cxⁿ)/dx=ncxⁿ⁻¹.",
  "derivative-from-power-rule": "For f(x)=cxⁿ, f′(x)=cnxⁿ⁻¹.",
  "product-rule-derivative": "(fg)′=f′g+fg′.",
  "quotient-rule-derivative": "(f/g)′=(f′g−fg′)/g², where g≠0.",
  "chain-rule-derivative": "d f(g(x))/dx=f′(g(x))·g′(x).",
  "second-derivative": "Differentiate the polynomial twice, term-by-term.",
  "implicit-differentiation-helper": "For F(x,y)=0, dy/dx=−Fₓ/Fᵧ when Fᵧ≠0.",
  "tangent-line-calculator": "Tangent at x=a: y=p(a)+p′(a)(x−a).",
  "critical-points-of-polynomial": "Critical points occur where p′(x)=0 or the derivative is undefined.",
  "stationary-point-classifier": "For a quadratic, the stationary point is at x=−b/(2a); a>0 gives a minimum and a<0 a maximum.",
  "increasing-decreasing-intervals": "Intervals are determined by the sign of p′(x); this tool returns derivative coefficients for further root analysis.",
  "antiderivative-of-polynomial": "Integrate each term: ∫cxⁿdx=cxⁿ⁺¹/(n+1)+C, for n≠−1.",
  "definite-polynomial-integral": "Use the fundamental theorem: ∫ₐᵇp(x)dx=P(b)−P(a), where P′=p.",
  "area-under-linear-function": "Signed integral of ax+b from l to u is a(u²−l²)/2+b(u−l); reported area is absolute.",
  "average-value-of-function": "Average value = (1/(b−a))∫ₐᵇ f(x)dx, for a<b.",
  "riemann-sum-calculator": "Approximate the integral using the trapezoidal sum over the supplied sample points.",
  "trapezoidal-rule": "T=Σ(xᵢ₊₁−xᵢ)(yᵢ+yᵢ₊₁)/2.",
  "simpson-s-rule": "Composite Simpson rule: h/3[y₀+yₙ+4Σy_odd+2Σy_even] for equally spaced samples and even interval count.",
  "numerical-differentiation": "Central difference f′(x)≈[f(x+h)−f(x−h)]/(2h).",
  "newton-raphson-root-finder": "Newton iteration: xₙ₊₁=xₙ−f(xₙ)/f′(xₙ).",
  "bisection-method": "Repeatedly bisect an interval whose endpoint function values have opposite signs.",
  "secant-method-root-finder": "Secant iteration: xₙ₊₁=xₙ−f(xₙ)(xₙ−xₙ₋₁)/(f(xₙ)−f(xₙ₋₁)).",
  "taylor-polynomial-coefficients": "Taylor coefficient for term k is f⁽ᵏ⁾(a)/k!; this polynomial implementation evaluates polynomial derivatives at a.",
  "maclaurin-polynomial-helper": "A polynomial's finite Maclaurin expansion at 0 equals the original polynomial.",
  "limit-of-polynomial": "Polynomials are continuous, so limₓ→a p(x)=p(a).",
  "l-h-pital-rule-applicability-helper": "L’Hôpital’s rule may apply to differentiable 0/0 or ∞/∞ indeterminate forms; numeric finite inputs cannot establish infinite-limit conditions.",
  "partial-derivative-of-monomial": "For f=cxᵖyᑫ, ∂f/∂x=cpxᵖ⁻¹yᑫ and ∂f/∂y=cqxᵖyᑫ⁻¹.",
  "gradient-of-scalar-field": "For a scalar field f, ∇f=(∂f/∂x,∂f/∂y,∂f/∂z).",
  "directional-derivative-of-linear-function": "Directional derivative = ∇f·u, where u is the unit direction vector.",
  "double-integral-rectangle-constant": "For constant f over a rectangle, ∬f dA=f(x₂−x₁)(y₂−y₁).",
  "matrix-addition": "Add corresponding entries of equal-sized matrices.",
  "matrix-subtraction": "Subtract corresponding entries of equal-sized matrices.",
  "scalar-matrix-multiplication": "Multiply each matrix entry by the scalar.",
  "matrix-multiplication": "For compatible matrices, (AB)ᵢⱼ=ΣₖAᵢₖBₖⱼ.",
  "matrix-transpose": "Transpose interchanges rows and columns: (Aᵀ)ᵢⱼ=Aⱼᵢ.",
  "matrix-determinant-2-2": "det([[a,b],[c,d]])=ad−bc.",
  "matrix-determinant-3-3": "Use cofactor expansion for the 3×3 determinant.",
  "matrix-inverse-2-2": "A⁻¹=(1/(ad−bc))[[d,−b],[−c,a]], when ad−bc≠0.",
  "matrix-inverse-3-3": "A⁻¹=adj(A)/det(A), when det(A)≠0.",
  "matrix-rank": "Rank is the number of pivots in a row-reduced matrix.",
  "trace-of-matrix": "Trace tr(A)=Σᵢaᵢᵢ for a square matrix.",
  "identity-matrix-generator": "The identity matrix has 1s on its main diagonal and 0s elsewhere.",
  "matrix-power": "Aⁿ is the product of n copies of square matrix A; A⁰=I.",
  "solve-2-2-linear-system": "Solve the two equations using elimination or Cramer's rule when the determinant is non-zero.",
  "cramer-s-rule-2-2": "For Δ≠0, x=Δₓ/Δ and y=Δᵧ/Δ.",
  "vector-addition": "Add vector components coordinate-wise.",
  "vector-subtraction": "Subtract vector components coordinate-wise.",
  "vector-magnitude": "||v||=√(x²+y²+z²).",
  "unit-vector": "Unit vector u=v/||v||, requiring a non-zero vector.",
  "dot-product": "a·b=Σᵢaᵢbᵢ.",
  "cross-product-3d": "a×b=(a₂b₃−a₃b₂, a₃b₁−a₁b₃, a₁b₂−a₂b₁).",
  "angle-between-vectors": "θ=arccos((a·b)/(||a||||b||)), for non-zero vectors.",
  "projection-of-vector": "Projection of A onto B is ((A·B)/(B·B))B, for B≠0.",
  "vector-distance": "Distance between vectors = ||A−B||.",
  "linear-independence-2d": "Two 2D vectors are independent when x₁y₂−y₁x₂≠0.",
  "eigenvalues-2-2": "For a 2×2 matrix, solve λ²−tr(A)λ+det(A)=0.",
  "eigenvector-2-2-helper": "An eigenvector v≠0 satisfies (A−λI)v=0.",
  "characteristic-polynomial-2-2": "For 2×2 A, characteristic polynomial is λ²−tr(A)λ+det(A).",
  "row-reduction-2-2": "Use elementary row operations to produce row-echelon form.",
  "basis-coordinate-helper": "Solve [u v][α β]ᵀ = target to obtain coordinates in a 2D basis."
};
  const catalogById = Object.create(null);
  catalog.forEach(function (item, i) {
    catalogById[item.id] = item;
    if (!schema[item.id]) schema[item.id] = (i < 30) ? [["x","Input value","Enter a finite numeric value."],["y","Second value","Enter a finite numeric value if needed."]] :
      (i < 60) ? [["value","Value","Enter a finite numeric value."],["percent","Percentage","Enter a percentage value."]] :
      (i < 90) ? [["a","Coefficient a","Enter a finite numeric value."],["b","Coefficient b","Enter a finite numeric value."],["c","Coefficient c","Enter a finite numeric value."]] :
      (i < 120) ? [["x","Input x","Enter a finite numeric value."],["n","Integer n","Enter an integer when required."]] :
      (i < 150) ? [["n","Integer n","Enter a non-negative integer."],["k","Integer k","Enter an integer when required."]] :
      (i < 210) ? [["x","Input x","Enter a finite numeric value."],["y","Input y","Enter a finite numeric value."]] :
      (i < 240) ? [["angle","Angle in degrees","Enter degrees unless the formula states otherwise."]] :
      (i < 270) ? [["coefficients","Polynomial coefficients, highest power first","Comma-separated coefficients."],["x","Evaluation point x","Enter a finite numeric value."]] :
      [["matrixA","Matrix A (rows separated by semicolons, entries by commas)","Enter a rectangular numeric matrix."],["matrixB","Matrix B (if needed)","Enter a compatible numeric matrix if required."]];
  });
  const definitions = catalog.map(function (item) {
    const fields = schema[item.id].map(function (f) { return Array.isArray(f) ? f : f.split(":"); });
    const groupCount = catalog.filter(function (v) { return v.group === item.group; }).length;
    return {
      id:item.id, name:item.name, group:item.group,
      description:item.name + " calculator with explicit input validation and a displayed mathematical method.",
      fields:fields,
      formula:formulaText[item.id] || "Use the mathematical relationship described for this calculator; invalid input domains are rejected.",
      example:"Enter a valid set of values, calculate, then compare the result with the displayed formula and an independent reference case."
    };
  });
  function number(v, key) {
    const raw = v[key];
    if (raw === undefined || String(raw).trim() === "") throw new Error("Enter " + key + ".");
    const x = Number(raw);
    if (!Number.isFinite(x)) throw new Error(key + " must be a finite number.");
    return x;
  }
  function integer(v,key,min,max) {
    const x = number(v,key);
    if (!Number.isInteger(x) || (min !== undefined && x < min) || (max !== undefined && x > max)) {
      throw new Error(key + " must be an integer" + (min !== undefined ? " at least " + min : "") + (max !== undefined ? " and at most " + max : "") + ".");
    }
    return x;
  }
  function sequence(v,key) {
    const raw = v[key];
    if (raw === undefined || String(raw).trim() === "") throw new Error("Enter " + key + " as comma-separated numbers.");
    const a = String(raw).split(/[,\s]+/).filter(Boolean).map(Number);
    if (!a.length || a.some(function(x){return !Number.isFinite(x);})) throw new Error(key + " must contain only finite comma-separated numbers.");
    return a;
  }
  function gcd(a,b){a=Math.abs(Math.trunc(a));b=Math.abs(Math.trunc(b));while(b){const t=a%b;a=b;b=t;}return a;}
  function factorial(n){n=integer({n:n},"n",0,170);let r=1;for(let i=2;i<=n;i++)r*=i;return r;}
  function fmt(x) {
    if (Array.isArray(x)) return x.map(fmt).join(", ");
    if (typeof x === "string") return x;
    if (typeof x === "boolean") return String(x);
    if (!Number.isFinite(x)) throw new Error("The result is not a finite real number in the supported domain.");
    if (Object.is(x,-0)) x=0;
    return Number(x.toPrecision(10)).toLocaleString(undefined,{maximumFractionDigits:8});
  }
  function polyEval(cs,x){return cs.reduce(function(acc,c){return acc*x+c;},0);}
  function derivative(cs){if(cs.length<=1)return [0];const n=cs.length-1;return cs.slice(0,-1).map(function(c,i){return c*(n-i);});}
  function polyInt(cs){const n=cs.length;return cs.map(function(c,i){return c/(n-i);}).concat(0);}
  function trim(cs){while(cs.length>1 && Math.abs(cs[0])<1e-12)cs.shift();return cs;}
  function parsePoly(v,key){return trim(sequence(v,key));}
  function matrix(v,key) {
    const raw=String(v[key]||"").trim();
    if(!raw) throw new Error("Enter " + key + " rows separated by semicolons and entries by commas.");
    const m=raw.split(";").map(function(row){return row.split(/[,\s]+/).filter(Boolean).map(Number);});
    if(m.some(function(row){return !row.length || row.some(function(x){return !Number.isFinite(x);}) || row.length!==m[0].length;})) throw new Error(key + " must be a rectangular matrix of finite numbers.");
    return m;
  }
  function matMul(A,B){if(A[0].length!==B.length)throw new Error("Matrix dimensions are incompatible.");return A.map(function(row){return B[0].map(function(_,j){return row.reduce(function(s,x,k){return s+x*B[k][j];},0);});});}
  function det(M){
    if(M.length!==M[0].length)throw new Error("Determinant requires a square matrix.");
    if(M.length===1)return M[0][0];
    if(M.length===2)return M[0][0]*M[1][1]-M[0][1]*M[1][0];
    if(M.length===3)return M[0][0]*(M[1][1]*M[2][2]-M[1][2]*M[2][1])-M[0][1]*(M[1][0]*M[2][2]-M[1][2]*M[2][0])+M[0][2]*(M[1][0]*M[2][1]-M[1][1]*M[2][0]);
    throw new Error("Determinant implementation supports orders 1 to 3.");
  }
  function solveLinear(A,b) {
    const n=A.length, M=A.map(function(row,i){return row.slice().concat(b[i]);});
    for(let c=0;c<n;c++){
      let p=c;for(let r=c+1;r<n;r++)if(Math.abs(M[r][c])>Math.abs(M[p][c]))p=r;
      if(Math.abs(M[p][c])<1e-12)throw new Error("The system has no unique solution (singular coefficient matrix).");
      [M[c],M[p]]=[M[p],M[c]];
      const d=M[c][c];for(let j=c;j<=n;j++)M[c][j]/=d;
      for(let r=0;r<n;r++)if(r!==c){const f=M[r][c];for(let j=c;j<=n;j++)M[r][j]-=f*M[c][j];}
    }
    return M.map(function(row){return row[n];});
  }
  function parseExpression(source, vars) {
    const s=String(source||"").replace(/π/g,"pi").replace(/\be\b/g,"E");
    if(!s.trim()) throw new Error("Enter an expression.");
    const tokens=s.match(/(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|[A-Za-z_][A-Za-z0-9_]*|[()+\-*/%^]/gi)||[];
    if(tokens.join("")!==s.replace(/\s+/g,"")) throw new Error("Expression contains unsupported characters.");
    let i=0;
    function atom(){
      const t=tokens[i++];
      if(t===undefined)throw new Error("Incomplete expression.");
      if(t==="+")return atom();if(t==="-")return -atom();
      if(t==="("){const v=expr();if(tokens[i++]!==")")throw new Error("Missing closing parenthesis.");return v;}
      if(/^(?:\d|\.)/.test(t))return Number(t);
      if(/^pi$/i.test(t))return Math.PI;if(/^E$/i.test(t))return Math.E;
      if(vars && Object.prototype.hasOwnProperty.call(vars,t))return vars[t];
      throw new Error("Unknown variable or token: "+t);
    }
    function power(){let a=atom();if(tokens[i]==="^"){i++;a=Math.pow(a,power());}return a;}
    function term(){let a=power();while(["*","/","%"].includes(tokens[i])){const op=tokens[i++],b=power();if((op==="/"||op==="%")&&b===0)throw new Error("Division or modulo by zero is undefined.");a=op==="*"?a*b:op==="/"?a/b:a%b;}return a;}
    function expr(){let a=term();while(tokens[i]==="+"||tokens[i]==="-"){const op=tokens[i++],b=term();a=op==="+"?a+b:a-b;}return a;}
    const out=expr();if(i!==tokens.length)throw new Error("Could not parse the full expression.");if(!Number.isFinite(out))throw new Error("Expression result is not finite.");return out;
  }
  function parseSet(v,key){return Array.from(new Set(String(v[key]||"").split(/[,\s]+/).filter(Boolean)));}
  function parseBooleanExpression(source, assignments) {
    const normalized = String(source || "")
      .replace(/\bAND\b/gi, "&&").replace(/\bOR\b/gi, "||").replace(/\bNOT\b/gi, "!");
    const tokens = normalized.match(/&&|\|\||[!()]|[A-Za-z_][A-Za-z0-9_]*|[01]/g) || [];
    if (tokens.join("").toLowerCase() !== normalized.replace(/\s+/g, "").toLowerCase()) {
      throw new Error("Unsupported token in Boolean expression.");
    }
    let pos = 0;
    function primary() {
      const t = tokens[pos++];
      if (t === "(") { const v = disjunction(); if (tokens[pos++] !== ")") throw new Error("Missing closing parenthesis."); return v; }
      if (t === "!" ) return !primary();
      if (t === undefined) throw new Error("Incomplete Boolean expression.");
      if (/^(?:1|t|true)$/i.test(t)) return true;
      if (/^(?:0|f|false)$/i.test(t)) return false;
      if (assignments && Object.prototype.hasOwnProperty.call(assignments, t)) return assignments[t];
      throw new Error("Assign a Boolean value to variable " + t + ".");
    }
    function conjunction() { let v = primary(); while (tokens[pos] === "&&") { pos++; const right = primary(); v = v && right; } return v; }
    function disjunction() { let v = conjunction(); while (tokens[pos] === "||") { pos++; const right = conjunction(); v = v || right; } return v; }
    const result = disjunction();
    if (pos !== tokens.length) throw new Error("Invalid Boolean expression.");
    return result;
  }
  function parseAssignments(raw) {
    const out = Object.create(null);
    String(raw || "").split(/[,\s]+/).filter(Boolean).forEach(function (part) {
      const m = /^([A-Za-z_][A-Za-z0-9_]*)=(1|0|true|false|t|f)$/i.exec(part);
      if (!m) throw new Error("Assignments must use forms such as A=1,B=0.");
      out[m[1]] = /^(?:1|true|t)$/i.test(m[2]);
    });
    return out;
  }
  function calculate(id,v) {
    v=v||{};
    let r, note="Calculated locally in the browser. Check the assumptions and units shown with the formula.";
    const x=function(k){return number(v,k);};
    const iv=function(k,min,max){return integer(v,k,min,max);};
    const a=function(k){return sequence(v,k);};
    switch(id) {
      case "basic-arithmetic": case "integer-operations": case "decimal-operations": {
        const u=x("a"),w=x("b"),op=String(v.operation||"add").toLowerCase();
        if(id==="integer-operations"&&(!Number.isInteger(u)||!Number.isInteger(w)))throw new Error("Both values must be integers.");
        if(op==="add")r=u+w;else if(op==="subtract"||op==="sub")r=u-w;else if(op==="multiply"||op==="mul")r=u*w;else if(op==="divide"||op==="div"){if(w===0)throw new Error("Division by zero is undefined.");r=u/w;}else throw new Error("Operation must be add, subtract, multiply, or divide.");break;
      }
      case "order-of-operations": case "simplify-algebraic-expression": r=parseExpression(v.expression);break;
      case "fraction-operations": case "mixed-number-calculator": {
        let n1=x("n1"),n2=x("n2"),d1=x("d1"),d2=x("d2");
        if(id==="mixed-number-calculator"){n1=Math.sign(x("w1"))*(Math.abs(x("w1"))*d1+n1);n2=Math.sign(x("w2"))*(Math.abs(x("w2"))*d2+n2);}
        if(d1===0||d2===0)throw new Error("Denominators cannot be zero.");
        const op=String(v.operation||"add").toLowerCase(),u=n1/d1,w=n2/d2;
        if(op==="add")r=u+w;else if(op==="subtract"||op==="sub")r=u-w;else if(op==="multiply"||op==="mul")r=u*w;else if(op==="divide"||op==="div"){if(w===0)throw new Error("Cannot divide by a zero fraction.");r=u/w;}else throw new Error("Operation must be add, subtract, multiply, or divide.");
        note="Decimal result. Exact fraction form can be obtained by converting the decimal to a rational number.";break;
      }
      case "fraction-to-decimal": r=x("numerator")/x("denominator");if(x("denominator")===0)throw new Error("Denominator cannot be zero.");break;
      case "decimal-to-fraction": {
        const value=x("x"),max=iv("maxDenominator",1,1000000);let bestN=Math.round(value),bestD=1,bestErr=Math.abs(value-bestN);
        for(let den=1;den<=Math.min(max,20000);den++){const num=Math.round(value*den),err=Math.abs(value-num/den);if(err<bestErr){bestErr=err;bestN=num;bestD=den;if(err<1e-12)break;}}
        const g=gcd(bestN,bestD);r=(bestN/g)+"/"+(bestD/g);break;
      }
      case "fraction-to-percentage": r=x("numerator")/x("denominator")*100;if(x("denominator")===0)throw new Error("Denominator cannot be zero.");r=fmt(r)+"%";break;
      case "percentage-to-fraction": {const p=x("percent");let den=1000000,num=Math.round(p*den/100);while(den>1&&num%10===0&&den%10===0){num/=10;den/=10;}const g=gcd(num,den);r=(num/g)+"/"+(den/g);break;}
      case "rounding-calculator": {const z=x("x"),places=iv("digits",-12,12),m=Math.pow(10,places);r=Math.round((z+Number.EPSILON)*m)/m;break;}
      case "significant-figures": {const z=x("x"),sig=iv("sigFigs",1,15);r=z===0?"0":z.toPrecision(sig);break;}
      case "scientific-notation": case "standard-form-converter": {const z=x("x");r=z===0?"0 × 10⁰":z.toExponential(8).replace("e"," × 10^");break;}
      case "absolute-value": r=Math.abs(x("x"));break;
      case "reciprocal-calculator": {const z=x("x");if(z===0)throw new Error("Zero has no reciprocal.");r=1/z;break;}
      case "prime-factorization": case "factors-of-an-integer": case "divisors-count": case "sum-of-divisors": case "prime-number-checker": {
        const n=iv("n",1,1000000000),fs=[];let m=n;for(let p=2;p*p<=m&&p<100000;p+=(p===2?1:2)){let e=0;while(m%p===0){m/=p;e++;}if(e)fs.push([p,e]);}if(m>1)fs.push([m,1]);
        if(id==="prime-factorization")r=fs.map(function(z){return z[0]+(z[1]>1?"^"+z[1]:"");}).join(" × ");
        else if(id==="prime-number-checker")r=n===1?"1 is neither prime nor composite":fs.length===1&&fs[0][1]===1?"Prime":"Composite";
        else {const divs=[];for(let i=1;i*i<=n;i++)if(n%i===0){divs.push(i);if(i!==n/i)divs.push(n/i);}divs.sort(function(a,b){return a-b;});if(id==="factors-of-an-integer")r=divs.join(", ");else if(id==="divisors-count")r=divs.length;else r=divs.reduce(function(s,z){return s+z;},0);}
        break;
      }
      case "greatest-common-divisor-gcd": case "euclidean-algorithm": r=gcd(iv("a"),iv("b"));break;
      case "least-common-multiple-lcm": {const u=iv("a"),w=iv("b");r=(u===0||w===0)?0:Math.abs(u*w)/gcd(u,w);break;}
      case "integer-quotient-and-remainder": case "modulo-calculator": {const u=iv("a"),w=iv("b");if(w===0)throw new Error("Divisor cannot be zero.");r=id==="modulo-calculator"?u%w:Math.trunc(u/w)+" remainder "+(u%w);break;}
      case "parity-checker": {const n=iv("n");r=n%2===0?"Even":"Odd";break;}
      case "consecutive-integer-sum": {const s=iv("start"),n=iv("count",1,1000000);r=n*(2*s+n-1)/2;break;}
      case "arithmetic-sequence-sum": case "arithmetic-sequence-sum-122": {const n=iv("n",1,1000000000),first=x("a1"),diff=x("d");r=n*(2*first+(n-1)*diff)/2;break;}
      case "triangular-number-calculator": {const n=iv("n",0,1000000000);r=n*(n+1)/2;break;}
      case "percentage-of-a-number": r=x("value")*x("percent")/100;break;
      case "percentage-change": {const u=x("a"),w=x("b");if(u===0)throw new Error("First value must not be zero.");r=(w-u)/u*100+"%";break;}
      case "percentage-difference": {const u=x("a"),w=x("b"),avg=(Math.abs(u)+Math.abs(w))/2;if(avg===0)throw new Error("At least one value must be non-zero.");r=Math.abs(u-w)/avg*100+"%";break;}
      case "percentage-increase": r="Increase = "+fmt(x("initial")*x("percent")/100)+"; new value = "+fmt(x("initial")*(1+x("percent")/100));break;
      case "percentage-decrease": case "discount-calculator": case "markdown-calculator": r="Decrease = "+fmt(x("initial")*x("percent")/100)+"; new value = "+fmt(x("initial")*(1-x("percent")/100));break;
      case "reverse-percentage": {const f=x("final"),p=x("percent");if(p===-100)throw new Error("A −100% change cannot be reversed uniquely.");r=f/(1+p/100);break;}
      case "what-percent-is-a-of-b": case "part-to-whole-percentage": {const w=x("whole");if(w===0)throw new Error("Whole value cannot be zero.");r=x("part")/w*100+"%";break;}
      case "ratio-simplifier": case "ratio-to-fraction": {const u=iv("a"),w=iv("b");if(u===0&&w===0)throw new Error("The ratio 0:0 is undefined.");const g=gcd(u,w);r=id==="ratio-to-fraction"?(u/g)+"/"+(w/g):(u/g)+":"+(w/g);break;}
      case "ratio-calculator": {const u=x("a"),w=x("b"),c=x("c");if(u===0)throw new Error("First ratio part cannot be zero.");r="Scaled value = "+fmt(c*w/u)+"; ratio "+fmt(u)+":"+fmt(w);break;}
      case "proportion-solver": {const u=x("a"),w=x("b"),c=x("c"),d0=x("d");if(w===0)throw new Error("Denominator b cannot be zero.");r="Expected d = "+fmt(w*c/u)+"; supplied d = "+fmt(d0);break;}
      case "direct-proportion": {const x1=x("x1"),y1=x("y1"),x2=x("x2");if(x1===0)throw new Error("Known x₁ cannot be zero for a unique proportionality constant.");r=y1*x2/x1;break;}
      case "inverse-proportion": {const x1=x("x1"),y1=x("y1"),x2=x("x2");if(x1===0||x2===0)throw new Error("x values cannot be zero in an inverse relationship.");r=x1*y1/x2;break;}
      case "unit-rate-calculator": case "price-per-unit": {const q=x("quantity"),u=x("units");if(u<=0)throw new Error("Unit count must be positive.");r=q/u;break;}
      case "rate-comparison": {const q1=x("quantity1"),t1=x("time1"),q2=x("quantity2"),t2=x("time2");if(t1<=0||t2<=0)throw new Error("Times must be positive.");r="Rate 1 = "+fmt(q1/t1)+"; rate 2 = "+fmt(q2/t2)+"; "+((q1/t1)>(q2/t2)?"rate 1 is greater":(q1/t1)<(q2/t2)?"rate 2 is greater":"rates are equal");break;}
      case "weighted-average": {const values=a("values"),weights=a("weights");if(values.length!==weights.length)throw new Error("Values and weights must have the same number of entries.");const sw=weights.reduce(function(s,z){return s+z;},0);if(sw===0)throw new Error("Total weight cannot be zero.");r=values.reduce(function(s,z,i){return s+z*weights[i];},0)/sw;break;}
      case "weighted-percentage": {const w=x("weight1")+x("weight2");if(w===0)throw new Error("Weights cannot total zero.");r=(x("score1")*x("weight1")+x("score2")*x("weight2"))/w;break;}
      case "markup-calculator": {const c=x("initial"),p=x("percent");r=c*(1+p/100);break;}
      case "successive-discounts": {const p=x("original"),p1=x("percent1"),p2=x("percent2");if(p1<0||p1>100||p2<0||p2>100)throw new Error("Discount percentages must be between 0 and 100.");r=p*(1-p1/100)*(1-p2/100);break;}
      case "tax-percentage-calculator": {const amount=x("initial"),rate=x("percent");r="Tax = "+fmt(amount*rate/100)+"; total including tax = "+fmt(amount*(1+rate/100));break;}
      case "tip-percentage-calculator": {const amount=x("initial"),rate=x("percent");r="Tip = "+fmt(amount*rate/100)+"; total including tip = "+fmt(amount*(1+rate/100));break;}
      case "commission-calculator": r=x("sales")*x("rate")/100;break;
      case "profit-percentage": {const c=x("cost"),s=x("sell");if(c===0)throw new Error("Cost cannot be zero.");r=(s-c)/c*100+"%";break;}
      case "loss-percentage": {const c=x("cost"),s=x("sell");if(c===0)throw new Error("Cost cannot be zero.");r=(c-s)/c*100+"%";break;}
      case "profit-margin-calculator": {const rev=x("revenue");if(rev===0)throw new Error("Revenue cannot be zero.");r=(rev-x("cost"))/rev*100+"%";break;}
      case "concentration-percentage": {const total=x("total");if(total===0)throw new Error("Total amount cannot be zero.");r=x("solute")/total*100+"%";break;}
      case "linear-equation-solver": case "solve-for-a-variable": case "literal-equation-rearranger": {const aa=x("a"),bb=x("b"),cc=x("c");if(aa===0)throw new Error("Coefficient a cannot be zero.");r="x = "+fmt((cc-bb)/aa);break;}
      case "two-variable-linear-equation": {const aa=x("a"),bb=x("b"),cc=x("c"),xx=x("x");if(bb===0)throw new Error("Coefficient b cannot be zero to solve for y.");r="y = "+fmt((cc-aa*xx)/bb);break;}
      case "system-of-two-linear-equations": case "solve-2-2-linear-system": case "cramer-s-rule-2-2": {const A=[[x("a1"),x("b1")],[x("a2"),x("b2")]],B=[x("c1"),x("c2")];const sol=solveLinear(A,B);r="x = "+fmt(sol[0])+"; y = "+fmt(sol[1]);break;}
      case "three-variable-linear-system": {const sol=solveLinear([[x("a1"),x("b1"),x("c1")],[x("a2"),x("b2"),x("c2")],[x("a3"),x("b3"),x("c3")]],[x("d1"),x("d2"),x("d3")]);r="x = "+fmt(sol[0])+"; y = "+fmt(sol[1])+"; z = "+fmt(sol[2]);break;}
      case "quadratic-equation-solver": case "quadratic-discriminant": case "quadratic-vertex-calculator": case "quadratic-formula-steps": case "factorization-calculator": case "stationary-point-classifier": {
        const aa=x("a"),bb=x("b"),cc=x("c");if(aa===0)throw new Error("Coefficient a must not be zero.");const D=bb*bb-4*aa*cc;
        if(id==="quadratic-discriminant")r=D;
        else if(id==="quadratic-vertex-calculator")r="Vertex = ("+fmt(-bb/(2*aa))+", "+fmt(-D/(4*aa))+")";
        else if(id==="stationary-point-classifier")r=aa>0?"Local minimum at x = "+fmt(-bb/(2*aa)):"Local maximum at x = "+fmt(-bb/(2*aa));
        else if(D>=0)r="Discriminant = "+fmt(D)+"; roots = "+fmt((-bb+Math.sqrt(D))/(2*aa)+"")+", "+fmt((-bb-Math.sqrt(D))/(2*aa)+"");
        else r="Discriminant = "+fmt(D)+"; roots = "+fmt(-bb/(2*aa))+" ± "+fmt(Math.sqrt(-D)/(2*Math.abs(aa)))+"i";
        break;
      }
      case "polynomial-evaluation": {const cs=parsePoly(v,"coefficients");r=polyEval(cs,x("x"));break;}
      case "polynomial-addition": case "polynomial-subtraction": case "polynomial-multiplication": case "polynomial-division": {
        const A=parsePoly(v,"coefficients"),B=parsePoly(v,"otherCoefficients");
        if(id==="polynomial-multiplication"){const out=Array(A.length+B.length-1).fill(0);A.forEach(function(c,i){B.forEach(function(d0,j){out[i+j]+=c*d0;});});r=out.join(", ");}
        else if(id==="polynomial-addition"||id==="polynomial-subtraction"){const n=Math.max(A.length,B.length),AA=Array(n-A.length).fill(0).concat(A),BB=Array(n-B.length).fill(0).concat(B);r=AA.map(function(c,i){return c+(id==="polynomial-addition"?1:-1)*BB[i];}).join(", ");}
        else {const R=A.slice(),Q=Array(Math.max(1,A.length-B.length+1)).fill(0);if(B.every(function(z){return z===0;}))throw new Error("Divisor polynomial cannot be zero.");for(let i=0;i<Q.length;i++){const c=R[i]/B[0];Q[i]=c;for(let j=0;j<B.length;j++)R[i+j]-=c*B[j];}r="Quotient coefficients: "+Q.join(", ")+"; remainder coefficients: "+trim(R.slice(Q.length)).join(", ");}
        break;
      }
      case "polynomial-remainder-theorem": case "polynomial-factor-checker": {const cs=parsePoly(v,"coefficients"),root0=x("root"),rem=polyEval(cs,root0);r=id==="polynomial-remainder-theorem"?"Remainder = "+fmt(rem):Math.abs(rem)<1e-9?"The proposed root is a factor (within numerical tolerance).":"Not a factor; remainder = "+fmt(rem);break;}
      case "expand-algebraic-expression": {const aa=x("a"),bb=x("b"),n=iv("n",0,100);const out=[];for(let k=0;k<=n;k++)out.push(fmt((factorial(n)/(factorial(k)*factorial(n-k)))*Math.pow(aa,n-k)*Math.pow(bb,k)));r="Coefficients of (a+b)^n: "+out.join(", ");break;}
      case "inequality-solver": {const aa=x("a"),bb=x("b"),cc=x("c"),rel=String(v.relation||"<=").trim();if(aa===0){const ok={"<=":bb<=cc,">=":bb>=cc,"<":bb<cc,">":bb>cc}[rel];if(ok===undefined)throw new Error("Relation must be <, <=, >, or >=.");r=ok?"All real x satisfy the inequality.":"No real x satisfies the inequality.";}else {let sign=rel;if(aa<0)sign=({"<=":">=",">=":"<=","<":">",">":"<"})[rel];if(!sign)throw new Error("Relation must be <, <=, >, or >=.");r="x "+sign+" "+fmt((cc-bb)/aa);}break;}
      case "compound-inequality-solver": {const lo=x("lower"),hi=x("upper");if(lo>hi)throw new Error("Lower bound cannot exceed upper bound.");r=fmt(lo)+" ≤ x ≤ "+fmt(hi);break;}
      case "absolute-value-equation": case "absolute-value-inequality": {const aa=x("a"),bb=x("b"),cc=x("c");if(cc<0)throw new Error("Right side c must be non-negative for |ax+b| = c.");if(aa===0)throw new Error("Coefficient a cannot be zero.");const lo=(-cc-bb)/aa,hi=(cc-bb)/aa;if(id==="absolute-value-equation")r="Solutions: x = "+fmt(lo)+" or x = "+fmt(hi);else r="For |ax+b| ≤ c: x ∈ ["+fmt(Math.min(lo,hi))+", "+fmt(Math.max(lo,hi))+"]; for |ax+b| ≥ c: outside that interval.";break;}
      case "rational-equation-solver": {const aa=x("a"),bb=x("b"),cc=x("c");if(cc===0)throw new Error("Right side c cannot be zero in this rearrangement.");const sol=bb+aa/cc;if(sol===bb)throw new Error("The rearranged solution is excluded by the original denominator x − b.");r="x = "+fmt(sol);break;}
      case "radical-equation-solver": {const aa=x("a"),bb=x("b"),cc=x("c");if(cc<0||aa===0)throw new Error("Require c ≥ 0 and a ≠ 0.");r="Candidate x = "+fmt((cc*cc-bb)/aa)+" (check the original equation for extraneous roots).";break;}
      case "exponential-equation-solver": {const aa=x("a"),base=x("base"),target=x("target");if(aa===0||base<=0||base===1||target/aa<=0)throw new Error("Require a ≠ 0, base > 0 and base ≠ 1, and target/a > 0.");r=Math.log(target/aa)/Math.log(base);break;}
      case "logarithmic-equation-solver": {const base=x("base"),target=x("target");if(base<=0||base===1)throw new Error("Logarithm base must be positive and not equal to 1.");r=Math.pow(base,target);break;}
      case "inverse-function-finder": {const aa=x("a"),bb=x("b");if(aa===0)throw new Error("Linear coefficient cannot be zero.");r="f⁻¹(x) = (x − "+fmt(bb)+") / "+fmt(aa);break;}
      case "function-composition": r=(x("a")*(x("c")*x("x")+x("d"))+x("b"));break;
      case "exponent-calculator": case "binary-exponent-calculator": {const aa=x("a"),bb=x("b");r=Math.pow(aa,bb);break;}
      case "power-of-a-power": r=Math.pow(x("a"),x("b")*x("c"));break;
      case "power-comparison": {const a0=Math.pow(x("a"),x("b")),b0=Math.pow(x("c"),x("d"));r=fmt(a0)+" vs "+fmt(b0)+" — "+(a0>b0?"first is larger":a0<b0?"second is larger":"equal");break;}
      case "fractional-exponents": {const aa=x("a"),nn=x("n"),dd=x("d");if(dd===0)throw new Error("Exponent denominator cannot be zero.");r=Math.pow(aa,nn/dd);break;}
      case "square-root-calculator": {const z=x("x");if(z<0)throw new Error("Real square root requires x ≥ 0.");r=Math.sqrt(z);break;}
      case "cube-root-calculator": r=Math.cbrt(x("x"));break;
      case "nth-root-calculator": {const z=x("x"),n=iv("n",1,1000);if(z<0&&n%2===0)throw new Error("Even roots of negative numbers are not real.");r=z<0?-Math.pow(-z,1/n):Math.pow(z,1/n);break;}
      case "radical-simplifier": {const z=x("x");if(z<0)throw new Error("Use a non-negative radicand for real square-root simplification.");let outside=1,inside=Math.round(z);if(!Number.isInteger(z)||z>1000000000){r="√("+fmt(z)+")";break;}for(let i=2;i*i<=inside;i++){while(inside%(i*i)===0){outside*=i;inside/=i*i;}}r=inside===1?fmt(outside):fmt(outside)+"√"+inside;break;}
      case "rationalizing-denominator": {const aa=x("a"),bb=x("b");if(bb<=0)throw new Error("Radicand must be positive.");r=fmt(aa)+"√"+fmt(bb)+"/"+fmt(bb);break;}
      case "logarithm-calculator": case "change-of-base-logarithm": {const z=x("x"),base=x("base");if(z<=0||base<=0||base===1)throw new Error("Require x > 0, base > 0 and base ≠ 1.");r=Math.log(z)/Math.log(base);break;}
      case "natural-logarithm": case "common-logarithm": {const z=x("x");if(z<=0)throw new Error("Logarithm argument must be positive.");r=id==="natural-logarithm"?Math.log(z):Math.log10(z);break;}
      case "exponential-growth": case "exponential-decay": {const start=x("initial"),rate=x("rate"),t=x("time");if(start<0||rate<0||t<0)throw new Error("Initial amount, rate, and time must be non-negative.");r=id==="exponential-growth"?start*Math.pow(1+rate,t):start*Math.pow(1-rate,t);if(id==="exponential-decay"&&rate>1)throw new Error("Decay rate must be between 0 and 1.");break;}
      case "compound-exponential-model": {const start=x("initial"),rate=x("rate"),t=x("time"),freq=iv("frequency",1,100000);r=start*Math.pow(1+rate/freq,freq*t);break;}
      case "scientific-calculator": {const z=x("x"),op=String(v.operation||"sqrt").toLowerCase();const fn={sqrt:Math.sqrt,sin:Math.sin,cos:Math.cos,tan:Math.tan,ln:Math.log,log10:Math.log10,exp:Math.exp,abs:Math.abs}[op];if(!fn)throw new Error("Choose sqrt, sin, cos, tan, ln, log10, exp, or abs.");if((op==="sqrt"||op==="ln"||op==="log10")&&z<(op==="sqrt"?0:0))throw new Error("Input is outside the real domain.");r=fn(z);break;}
      case "factorial-calculator": r=factorial(iv("n",0,170));break;
      case "double-factorial": {let n=iv("n",0,170),z=1;for(let i=n;i>1;i-=2)z*=i;r=z;break;}
      case "binomial-coefficient": case "combinations-calculator": case "permutations-calculator": case "stirling-number-second-kind": {
        const n=iv("n",0,170),k=iv("k",0,n);
        function choose(nn,kk){return factorial(nn)/(factorial(kk)*factorial(nn-kk));}
        if(id==="permutations-calculator")r=factorial(n)/factorial(n-k);
        else if(id==="stirling-number-second-kind"){const dp=Array(k+1).fill(0);dp[0]=1;for(let i=1;i<=n;i++)for(let j=k;j>=1;j--)dp[j]=j*dp[j]+dp[j-1];r=dp[k];}
        else r=choose(n,k);break;
      }
      case "multinomial-coefficient": {const vals=a("values").map(function(z){if(!Number.isInteger(z)||z<0)throw new Error("Parts must be non-negative integers.");return z;});const total=vals.reduce(function(s,z){return s+z;},0);r=factorial(total)/vals.reduce(function(s,z){return s*factorial(z);},1);break;}
      case "powers-of-ten": {const n=iv("n",-1000,1000);r="10^"+n+" = "+fmt(Math.pow(10,n));break;}
      case "complex-exponent-calculator": {const re=x("real"),im=x("imag"),n=iv("n",0,100);let rr=1,ii=0;for(let j=0;j<n;j++){const nr=rr*re-ii*im,ni=rr*im+ii*re;rr=nr;ii=ni;}r=fmt(rr)+(ii<0?" − ":" + ")+fmt(Math.abs(ii))+"i";break;}
      case "hyperbolic-sine": r=Math.sinh(x("x"));break;
      case "hyperbolic-cosine": r=Math.cosh(x("x"));break;
      case "hyperbolic-tangent": r=Math.tanh(x("x"));break;
      case "inverse-hyperbolic-functions": {const z=x("x"),op=String(v.operation||"asinh").toLowerCase();if(op==="asinh")r=Math.asinh(z);else if(op==="acosh"){if(z<1)throw new Error("acosh requires x ≥ 1.");r=Math.acosh(z);}else if(op==="atanh"){if(Math.abs(z)>=1)throw new Error("atanh requires −1 < x < 1.");r=Math.atanh(z);}else throw new Error("Choose asinh, acosh, or atanh.");break;}
      case "arithmetic-sequence-nth-term": {const n=iv("n",1,1000000000);r=x("a1")+(n-1)*x("d");break;}
      case "geometric-sequence-nth-term": {const n=iv("n",1,1000000);r=x("a1")*Math.pow(x("r"),n-1);break;}
      case "geometric-series-sum": {const n=iv("n",1,1000000),first=x("a1"),ratio=x("r");r=ratio===1?first*n:first*(1-Math.pow(ratio,n))/(1-ratio);break;}
      case "infinite-geometric-series": {const first=x("a1"),ratio=x("r");if(Math.abs(ratio)>=1)throw new Error("An infinite geometric series converges only when |r| < 1.");r=first/(1-ratio);break;}
      case "harmonic-mean": {const vals=a("values");if(vals.some(function(z){return z===0;}))throw new Error("Harmonic mean is undefined with zero values.");r=vals.length/vals.reduce(function(s,z){return s+1/z;},0);break;}
      case "harmonic-sequence-term": {const n=iv("n",1,1000000);r="1/"+n;break;}
      case "fibonacci-sequence": case "lucas-sequence": {const n=iv("n",0,10000);let a0=id==="lucas-sequence"?2:0,b0=1;for(let i=0;i<n;i++){const t=a0+b0;a0=b0;b0=t;}r=a0;break;}
      case "sequence-difference-table": case "finite-difference-calculator": {let row=a("values"),rows=[row.slice()];while(row.length>1){row=row.slice(1).map(function(z,i){return z-row[i];});rows.push(row);}r=rows.map(function(row,i){return "Δ"+i+": ["+row.map(fmt).join(", ")+"]";}).join("\n");break;}
      case "recursive-sequence-calculator": case "recurrence-relation-helper": {const n=iv("n",0,1000),p=x("p"),q=x("q");let a0=x("a0"),b0=x("a1");if(n===0)r=a0;else if(n===1)r=b0;else {for(let i=2;i<=n;i++){const t=p*b0+q*a0;a0=b0;b0=t;}r=b0;}break;}
      case "sigma-notation-sum": case "product-notation-calculator": {const cs=parsePoly(v,"coefficients"),lo=iv("lower",-100000,100000),hi=iv("upper",-100000,100000);if(hi<lo)throw new Error("Upper bound must not be less than lower bound.");let z=id==="sigma-notation-sum"?0:1;for(let k=lo;k<=hi;k++){const term=polyEval(cs,k);if(id==="sigma-notation-sum")z+=term;else z*=term;if(!Number.isFinite(z))throw new Error("Result overflowed the supported numeric range.");}r=z;break;}
      case "telescoping-series-helper": {const n=iv("n",1,1000000);r=n/(n+1);note="For the standard telescoping sum Σ 1/[k(k+1)] from k=1 to n.";break;}
      case "convergence-quick-check": {const vals=a("values");if(vals.length<3)throw new Error("Enter at least three terms.");const ratios=[];for(let i=1;i<vals.length;i++)if(vals[i-1]!==0)ratios.push(Math.abs(vals[i]/vals[i-1]));const tail=ratios.slice(-Math.min(4,ratios.length));const avg=tail.reduce(function(s,z){return s+z;},0)/tail.length;r="Heuristic only: recent absolute term ratios average "+fmt(avg)+(avg<1?" (suggests decay)":" (does not establish convergence)");note="A finite list cannot prove convergence or divergence.";break;}
      case "catalan-number": {const n=iv("n",0,35);r=factorial(2*n)/(factorial(n)*factorial(n+1));break;}
      case "bell-number": {const n=iv("n",0,20),tri=Array.from({length:n+1},()=>Array(n+1).fill(0));tri[0][0]=1;for(let i=1;i<=n;i++){tri[i][0]=tri[i-1][i-1];for(let j=1;j<=i;j++)tri[i][j]=tri[i][j-1]+tri[i-1][j-1];}r=tri[n][0];break;}
      case "partition-number": {const n=iv("n",0,1000),p=Array(n+1).fill(0);p[0]=1;for(let k=1;k<=n;k++)for(let j=k;j<=n;j++)p[j]+=p[j-k];r=p[n];break;}
      case "pigeonhole-principle-calculator": {const o=iv("objects",0,1e9),b=iv("boxes",1,1e9);r="At least one box contains ≥ "+Math.ceil(o/b)+" objects.";break;}
      case "inclusion-exclusion-calculator": {const aa=x("a"),bb=x("b"),ii=x("intersection");if(ii<0||ii>Math.min(aa,bb))throw new Error("Intersection must be between zero and the smaller set size.");r=aa+bb-ii;break;}
      case "set-union-and-intersection": case "set-difference-calculator": {const A=parseSet(v,"setA"),B=parseSet(v,"setB"),inter=A.filter(function(z){return B.includes(z);}),union=Array.from(new Set(A.concat(B)));r=id==="set-difference-calculator"?"A − B = {"+A.filter(function(z){return !B.includes(z);}).join(", ")+"}":"Union = {"+union.join(", ")+"}; intersection = {"+inter.join(", ")+"}";break;}
      case "power-set-size": r=Math.pow(2,iv("n",0,1023));break;
      case "cartesian-product-size": r=iv("objects",0,1e9)*iv("boxes",0,1e9);break;
      case "truth-table-generator": {const n=iv("variables",1,8),rows=[];for(let i=0;i<Math.pow(2,n);i++)rows.push(Array.from({length:n},function(_,j){return (i>>(n-j-1))&1?"T":"F";}).join(" | "));r="Truth assignments ("+n+" variables):\n"+rows.join("\n");break;}
      case "boolean-algebra-evaluator": {const vars=parseAssignments(v.assignments||"");r=parseBooleanExpression(v.expression,vars)?"True":"False";break;}
      case "logic-equivalence-checker": {const A=String(v.exprA||""),B=String(v.exprB||""),names=String(v.variables||"").split(/[\s,]+/).filter(Boolean),seen=new Set(names);if(!names.length)throw new Error("Enter variable names, e.g. A,B.");if(names.length>10)throw new Error("Truth-table equivalence is limited to 10 variables.");for(let i=0;i<Math.pow(2,names.length);i++){const env=Object.create(null);names.forEach(function(k,j){env[k]=!!(i&(1<<(names.length-j-1)));});if(parseBooleanExpression(A,env)!==parseBooleanExpression(B,env)){r="Not logically equivalent; counterexample assignment: "+names.map(function(k){return k+"="+(env[k]?1:0);}).join(", ");break;}}if(r===undefined)r="Logically equivalent for all "+Math.pow(2,names.length)+" assignments.";note="Exhaustive truth-table comparison.";break;}
      case "circle-calculator": {const z=x("radius");if(z<0)throw new Error("Radius must be non-negative.");r="Area = "+fmt(Math.PI*z*z)+"; circumference = "+fmt(2*Math.PI*z);break;}
      case "rectangle-calculator": {const l=x("length"),w=x("width");if(l<0||w<0)throw new Error("Side lengths must be non-negative.");r="Area = "+fmt(l*w)+"; perimeter = "+fmt(2*(l+w))+"; diagonal = "+fmt(Math.hypot(l,w));break;}
      case "square-calculator": {const s=x("side");if(s<0)throw new Error("Side length must be non-negative.");r="Area = "+fmt(s*s)+"; perimeter = "+fmt(4*s);break;}
      case "triangle-area": {const b=x("base"),h=x("height");if(b<0||h<0)throw new Error("Dimensions must be non-negative.");r=b*h/2;break;}
      case "heron-s-formula-triangle": {const a0=x("a"),b=x("b"),c=x("c"),s=(a0+b+c)/2;if(a0+b<=c||a0+c<=b||b+c<=a0)throw new Error("Side lengths must form a valid triangle.");r=Math.sqrt(s*(s-a0)*(s-b)*(s-c));break;}
      case "triangle-perimeter": {const a0=x("a"),b=x("b"),c=x("c");if(a0+b<=c||a0+c<=b||b+c<=a0)throw new Error("Side lengths must form a valid triangle.");r=a0+b+c;break;}
      case "right-triangle-solver": {const a0=x("a"),b0=x("b"),c0=v.c!==undefined&&String(v.c).trim()!==""?x("c"):NaN;if(a0<0||b0<0)throw new Error("Side lengths must be non-negative.");r=Number.isFinite(c0)?"c = "+fmt(c0)+"; a²+b² = "+fmt(a0*a0+b0*b0):"Hypotenuse = "+fmt(Math.hypot(a0,b0));break;}
      case "pythagorean-theorem": r=Math.hypot(x("a"),x("b"));break;
      case "equilateral-triangle": {const s=x("side");r="Area = "+fmt(Math.sqrt(3)*s*s/4)+"; perimeter = "+fmt(3*s)+"; height = "+fmt(Math.sqrt(3)*s/2);break;}
      case "isosceles-triangle": {const s=x("equalSide"),b=x("base");if(b>2*s)throw new Error("Base cannot exceed twice the equal side.");const h=Math.sqrt(s*s-b*b/4);r="Area = "+fmt(b*h/2)+"; perimeter = "+fmt(2*s+b);break;}
      case "parallelogram-area": r=x("base")*x("height");break;
      case "trapezoid-area": r=(x("a")+x("b"))*x("height")/2;break;
      case "rhombus-area": case "kite-area": r=x("diagonal1")*x("diagonal2")/2;break;
      case "polygon-interior-angles": {const n=iv("n",3,1000000);r=(n-2)*180+"° total; each regular interior angle = "+fmt((n-2)*180/n)+"°";break;}
      case "regular-polygon-area": case "regular-polygon-perimeter": {const n=iv("n",3,1000000),s=x("side");r=id==="regular-polygon-perimeter"?n*s:n*s*s/(4*Math.tan(Math.PI/n));break;}
      case "arc-length": case "sector-area": case "chord-length": case "circle-segment-area": {const rad=x("radius"),ang=x("angle")*Math.PI/180;if(rad<0)throw new Error("Radius must be non-negative.");if(id==="arc-length")r=rad*ang;else if(id==="sector-area")r=rad*rad*ang/2;else if(id==="chord-length")r=2*rad*Math.sin(ang/2);else r=rad*rad*(ang-Math.sin(ang))/2;break;}
      case "annulus-area": {const R=x("outerRadius"),r0=x("innerRadius");if(R<r0||r0<0)throw new Error("Require outer radius ≥ inner radius ≥ 0.");r=Math.PI*(R*R-r0*r0);break;}
      case "ellipse-area": r=Math.PI*x("a")*x("b");break;
      case "ellipse-perimeter-approximation": {const a0=x("a"),b0=x("b"),h=Math.pow(a0-b0,2)/Math.pow(a0+b0,2);r=Math.PI*(a0+b0)*(1+3*h/(10+Math.sqrt(4-3*h)));break;}
      case "ellipse-eccentricity": {const a0=x("a"),b0=x("b");if(a0<=0||b0<=0||b0>a0)throw new Error("Require semi-major a ≥ semi-minor b > 0.");r=Math.sqrt(1-b0*b0/(a0*a0));break;}
      case "cube-surface-area": case "cube-volume": {const s=x("side");r=id==="cube-volume"?s*s*s:6*s*s;break;}
      case "cuboid-surface-area": case "cuboid-volume": {const l=x("length"),w=x("width"),h=x("height");r=id==="cuboid-volume"?l*w*h:2*(l*w+l*h+w*h);break;}
      case "cylinder-surface-area": case "cylinder-volume": {const rad=x("radius"),h=x("height");r=id==="cylinder-volume"?Math.PI*rad*rad*h:2*Math.PI*rad*(rad+h);break;}
      case "cone-volume": case "cone-surface-area": {const rad=x("radius"),h=x("height"),s=Math.hypot(rad,h);r=id==="cone-volume"?Math.PI*rad*rad*h/3:Math.PI*rad*(rad+s);break;}
      case "sphere-volume": case "sphere-surface-area": case "hemisphere-calculator": {const rad=x("radius");if(id==="sphere-volume")r=4*Math.PI*rad**3/3;else if(id==="sphere-surface-area")r=4*Math.PI*rad*rad;else r="Volume = "+fmt(2*Math.PI*rad**3/3)+"; curved area = "+fmt(2*Math.PI*rad*rad)+"; total surface = "+fmt(3*Math.PI*rad*rad);break;}
      case "frustum-volume": case "frustum-surface-area": {const r1=x("r1"),r2=x("r2"),h=x("height"),s=Math.hypot(h,r1-r2);r=id==="frustum-volume"?Math.PI*h*(r1*r1+r1*r2+r2*r2)/3:Math.PI*(r1*r1+r2*r2)+Math.PI*(r1+r2)*s;break;}
      case "prism-volume": case "pyramid-volume": {const b=x("baseArea"),h=x("height");r=id==="prism-volume"?b*h:b*h/3;break;}
      case "pyramid-surface-area": r=x("baseArea")+x("lateralArea");break;
      case "torus-volume": {const R=x("majorRadius"),r0=x("minorRadius");if(R<r0||r0<0)throw new Error("Require major radius ≥ minor radius ≥ 0.");r=2*Math.PI*Math.PI*R*r0*r0;break;}
      case "distance-between-two-points": r=Math.hypot(x("x2")-x("x1"),x("y2")-x("y1"));break;
      case "midpoint-calculator": r="("+fmt((x("x1")+x("x2"))/2)+", "+fmt((x("y1")+x("y2"))/2)+")";break;
      case "slope-calculator": {const dx=x("x2")-x("x1");if(dx===0)throw new Error("A vertical line has undefined slope.");r=(x("y2")-x("y1"))/dx;break;}
      case "line-equation-from-two-points": {const dx=x("x2")-x("x1"),dy=x("y2")-x("y1");if(dx===0)r="x = "+fmt(x("x1"));else {const m=dy/dx;r="y = "+fmt(m)+"x "+(x("y1")-m*x("x1")<0?"− ":"+ ")+fmt(Math.abs(x("y1")-m*x("x1")));}break;}
      case "point-slope-form": r="y − "+fmt(x("y1"))+" = "+fmt(x("m"))+"(x − "+fmt(x("x1"))+")";break;
      case "intercept-form-converter": {const a0=x("xIntercept"),b0=x("yIntercept");if(a0===0||b0===0)throw new Error("Intercepts must be non-zero for intercept form.");r="x/"+fmt(a0)+" + y/"+fmt(b0)+" = 1";break;}
      case "parallel-line-checker": case "perpendicular-line-checker": {const a0=x("a1"),b0=x("b1"),c0=x("a2"),d0=x("b2");r=id==="parallel-line-checker"?(Math.abs(a0*d0-b0*c0)<1e-10?"Parallel or coincident":"Not parallel"):(Math.abs(a0*c0+b0*d0)<1e-10?"Perpendicular":"Not perpendicular");break;}
      case "point-to-line-distance": {const aa=x("a"),bb=x("b"),cc=x("c"),den=Math.hypot(aa,bb);if(den===0)throw new Error("Line coefficients a and b cannot both be zero.");r=Math.abs(aa*x("x")+bb*x("y")+cc)/den;break;}
      case "circle-equation-from-center": {const cx=x("cx"),cy=x("cy"),rad=x("radius");r="(x − "+fmt(cx)+")² + (y − "+fmt(cy)+")² = "+fmt(rad*rad);break;}
      case "circle-through-three-points": {const X1=x("x1"),Y1=x("y1"),X2=x("x2"),Y2=x("y2"),X3=x("x3"),Y3=x("y3");const D=2*(X1*(Y2-Y3)+X2*(Y3-Y1)+X3*(Y1-Y2));if(Math.abs(D)<1e-12)throw new Error("The three points must not be collinear.");const Ux=((X1*X1+Y1*Y1)*(Y2-Y3)+(X2*X2+Y2*Y2)*(Y3-Y1)+(X3*X3+Y3*Y3)*(Y1-Y2))/D;const Uy=((X1*X1+Y1*Y1)*(X3-X2)+(X2*X2+Y2*Y2)*(X1-X3)+(X3*X3+Y3*Y3)*(X2-X1))/D;r="Center = ("+fmt(Ux)+", "+fmt(Uy)+"); radius = "+fmt(Math.hypot(Ux-X1,Uy-Y1));break;}
      case "polygon-area-by-coordinates": case "shoelace-formula": {const xs=a("xValues"),ys=a("yValues");if(xs.length!==ys.length||xs.length<3)throw new Error("Coordinate lists must have equal length and at least three points.");let sum=0;for(let i=0;i<xs.length;i++){const j=(i+1)%xs.length;sum+=xs[i]*ys[j]-ys[i]*xs[j];}r=Math.abs(sum)/2;break;}
      case "centroid-of-triangle": {const xs=[x("x1"),x("x2"),x("x3")],ys=[x("y1"),x("y2"),x("y3")];r="("+fmt(xs.reduce((s,z)=>s+z,0)/3)+", "+fmt(ys.reduce((s,z)=>s+z,0)/3)+")";break;}
      case "triangle-incenter": {const X1=x("x1"),Y1=x("y1"),X2=x("x2"),Y2=x("y2"),X3=x("x3"),Y3=x("y3"),a0=Math.hypot(X2-X3,Y2-Y3),b0=Math.hypot(X1-X3,Y1-Y3),c0=Math.hypot(X1-X2,Y1-Y2),p=a0+b0+c0;if(p===0)throw new Error("Points must form a non-degenerate triangle.");r="("+fmt((a0*X1+b0*X2+c0*X3)/p)+", "+fmt((a0*Y1+b0*Y2+c0*Y3)/p)+")";break;}
      case "triangle-circumcenter": {const X1=x("x1"),Y1=x("y1"),X2=x("x2"),Y2=x("y2"),X3=x("x3"),Y3=x("y3");const D=2*(X1*(Y2-Y3)+X2*(Y3-Y1)+X3*(Y1-Y2));if(Math.abs(D)<1e-12)throw new Error("Points must not be collinear.");const Ux=((X1*X1+Y1*Y1)*(Y2-Y3)+(X2*X2+Y2*Y2)*(Y3-Y1)+(X3*X3+Y3*Y3)*(Y1-Y2))/D,Uy=((X1*X1+Y1*Y1)*(X3-X2)+(X2*X2+Y2*Y2)*(X1-X3)+(X3*X3+Y3*Y3)*(X2-X1))/D;r="("+fmt(Ux)+", "+fmt(Uy)+")";break;}
      case "triangle-orthocenter": {const X1=x("x1"),Y1=x("y1"),X2=x("x2"),Y2=x("y2"),X3=x("x3"),Y3=x("y3");const Gx=(X1+X2+X3)/3,Gy=(Y1+Y2+Y3)/3;const D=2*(X1*(Y2-Y3)+X2*(Y3-Y1)+X3*(Y1-Y2));if(Math.abs(D)<1e-12)throw new Error("Points must not be collinear.");const Ux=((X1*X1+Y1*Y1)*(Y2-Y3)+(X2*X2+Y2*Y2)*(Y3-Y1)+(X3*X3+Y3*Y3)*(Y1-Y2))/D,Uy=((X1*X1+Y1*Y1)*(X3-X2)+(X2*X2+Y2*Y2)*(X1-X3)+(X3*X3+Y3*Y3)*(X2-X1))/D;r="("+fmt(X1+X2+X3-2*Ux)+", "+fmt(Y1+Y2+Y3-2*Uy)+")";break;}
      case "barycentric-coordinate-helper": {const x0=x("x"),y0=x("y"),x1=x("x1"),y1=x("y1"),x2=x("x2"),y2=x("y2"),x3=x("x3"),y3=x("y3"),d0=(y2-y3)*(x1-x3)+(x3-x2)*(y1-y3);if(d0===0)throw new Error("Triangle vertices must not be collinear.");const u=((y2-y3)*(x0-x3)+(x3-x2)*(y0-y3))/d0,v0=((y3-y1)*(x0-x3)+(x1-x3)*(y0-y3))/d0;r="Barycentric coordinates = ("+fmt(u)+", "+fmt(v0)+", "+fmt(1-u-v0)+")";break;}
      case "degree-radian-converter": {const z=x("x");r="Radians = "+fmt(z*Math.PI/180)+"; degrees = "+fmt(z*180/Math.PI);break;}
      case "sine-calculator": r=Math.sin(x("x")*Math.PI/180);break;
      case "cosine-calculator": r=Math.cos(x("x")*Math.PI/180);break;
      case "tangent-calculator": {const z=x("x")*Math.PI/180;if(Math.abs(Math.cos(z))<1e-12)throw new Error("Tangent is undefined at odd multiples of 90°.");r=Math.tan(z);break;}
      case "inverse-sine": case "inverse-cosine": case "inverse-tangent": {const z=x("x");if(id!=="inverse-tangent"&&(z<-1||z>1))throw new Error("Inverse sine and cosine require input in [−1,1].");r=(id==="inverse-sine"?Math.asin(z):id==="inverse-cosine"?Math.acos(z):Math.atan(z))*180/Math.PI+"°";break;}
      case "two-argument-arctangent": case "bearing-and-heading-angle": {const ang=Math.atan2(x("y"),x("x"))*180/Math.PI;r=(ang+360)%360+"° clockwise from positive x/east axis";break;}
      case "law-of-sines": {const side=x("a"),A=x("A")*Math.PI/180,B=x("B")*Math.PI/180;if(Math.sin(A)===0)throw new Error("Known angle must have non-zero sine.");r=side*Math.sin(B)/Math.sin(A);break;}
      case "law-of-cosines": case "triangle-side-angle-solver": {const aa=x("a"),bb=x("b"),C=x("angle")*Math.PI/180;r=Math.sqrt(aa*aa+bb*bb-2*aa*bb*Math.cos(C));break;}
      case "right-triangle-trigonometry": {const o=x("opposite"),ad=x("adjacent");r="Hypotenuse = "+fmt(Math.hypot(o,ad))+"; angle = "+fmt(Math.atan2(o,ad)*180/Math.PI)+"°";break;}
      case "trigonometric-identity-checker": {const z=x("angle")*Math.PI/180;r="sin²θ + cos²θ = "+fmt(Math.sin(z)**2+Math.cos(z)**2);break;}
      case "exact-trigonometric-values": {const deg=x("x"),ang=deg*Math.PI/180;r="sin = "+fmt(Math.sin(ang))+"; cos = "+fmt(Math.cos(ang))+"; tan = "+(Math.abs(Math.cos(ang))<1e-12?"undefined":fmt(Math.tan(ang)));break;}
      case "unit-circle-coordinates": {const z=x("x")*Math.PI/180;r="("+fmt(Math.cos(z))+", "+fmt(Math.sin(z))+")";break;}
      case "arc-trigonometric-functions": {const z=x("x");if(Math.abs(z)>1)throw new Error("Input must be in [−1,1] for principal arcsine.");r="arcsin = "+fmt(Math.asin(z))+" rad; arccos = "+fmt(Math.acos(z))+" rad";break;}
      case "secant-calculator": case "cosecant-calculator": case "cotangent-calculator": {const z=x("x")*Math.PI/180,s=Math.sin(z),c=Math.cos(z);if(id==="secant-calculator"){if(Math.abs(c)<1e-12)throw new Error("Secant undefined at this angle.");r=1/c;}else if(id==="cosecant-calculator"){if(Math.abs(s)<1e-12)throw new Error("Cosecant undefined at this angle.");r=1/s;}else {if(Math.abs(s)<1e-12)throw new Error("Cotangent undefined at this angle.");r=c/s;}break;}
      case "trigonometric-equation-helper": {const z=x("target");if(z<-1||z>1)throw new Error("Sine target must be in [−1,1].");const ang=Math.asin(z)*180/Math.PI;r="Principal solutions: θ = "+fmt(ang)+"° + 360°k or θ = "+fmt(180-ang)+"° + 360°k, k ∈ ℤ";break;}
      case "amplitude-and-period": {const amp=x("amplitude"),freq=x("frequency");if(freq===0)throw new Error("Frequency coefficient cannot be zero.");r="Amplitude = "+fmt(Math.abs(amp))+"; period = "+fmt(2*Math.PI/Math.abs(freq));break;}
      case "phase-shift-calculator": {const amp=x("amplitude"),period=x("period"),shift=x("shift"),xx=x("x");if(period===0)throw new Error("Period cannot be zero.");r=amp*Math.sin(2*Math.PI*(xx-shift)/period);break;}
      case "sinusoid-parameter-solver": r=x("a")*Math.sin(x("b")*x("x")+x("c"))+x("d");break;
      case "angle-of-elevation": case "angle-of-depression": {const h=x("height"),d0=x("distance");if(d0===0)throw new Error("Horizontal distance cannot be zero.");r=Math.atan(h/d0)*180/Math.PI+"°";break;}
      case "harmonic-wave-calculator": r=x("amplitude")*Math.sin(2*Math.PI*x("frequency")*x("time")+x("phase"));break;
      case "radians-per-second": case "angular-frequency": r=2*Math.PI*x("frequency");break;
      case "trigonometric-product-to-sum-helper": {const A=x("a")*Math.PI/180,B=x("b")*Math.PI/180;r="sin A sin B = ½[cos(A−B) − cos(A+B)] = "+fmt((Math.cos(A-B)-Math.cos(A+B))/2);break;}
      case "maclaurin-polynomial-helper": {const cs=parsePoly(v,"coefficients");r="Maclaurin polynomial coefficients (highest power first): "+cs.join(", ");note="For a polynomial, its finite Maclaurin expansion equals the polynomial itself.";break;}
      case "limit-of-polynomial": {const cs=parsePoly(v,"coefficients");r=polyEval(cs,x("x"));note="A polynomial is continuous, so its limit at x=a equals its value p(a).";break;}
      case "derivative-calculator-polynomial": {const cs=parsePoly(v,"coefficients");r="Derivative coefficients: "+derivative(cs).join(", ");break;}
      case "derivative-from-power-rule": {const c=x("c"),n=x("n"),xx=x("x");r="Derivative = "+fmt(c*n)+"x^"+fmt(n-1)+"; value at x = "+fmt(c*n*Math.pow(xx,n-1));break;}
      case "product-rule-derivative": r=x("df")*x("g")+x("f")*x("dg");break;
      case "quotient-rule-derivative": {const g=x("g");if(g===0)throw new Error("Denominator function g cannot be zero.");r=(x("df")*g-x("f")*x("dg"))/(g*g);break;}
      case "chain-rule-derivative": r=x("outerDerivative")*x("innerDerivative");break;
      case "second-derivative": {const cs=derivative(derivative(parsePoly(v,"coefficients")));r="Second derivative coefficients: "+cs.join(", ");if(v.x!==undefined&&String(v.x).trim()!=="")r+="; value at x = "+fmt(polyEval(cs,x("x")));break;}
      case "implicit-differentiation-helper": {const fy=x("fy");if(fy===0)throw new Error("Partial derivative Fᵧ cannot be zero for this formula.");r=-x("fx")/fy;break;}
      case "tangent-line-calculator": {const cs=parsePoly(v,"coefficients"),xx=x("x"),y0=polyEval(cs,xx),slope=polyEval(derivative(cs),xx);r="y = "+fmt(slope)+"(x − "+fmt(xx)+") + "+fmt(y0);break;}
      case "critical-points-of-polynomial": {const cs=parsePoly(v,"coefficients");if(cs.length===3){const A=cs[0]*2,B=cs[1];if(A===0)r="No isolated critical point";else r="Critical x = "+fmt(-B/A);}else r="Derivative coefficients: "+derivative(cs).join(", ")+"; use a numerical root finder for roots.";break;}
      case "increasing-decreasing-intervals": {const cs=derivative(parsePoly(v,"coefficients"));r="Derivative coefficients: "+cs.join(", ");note="The derivative polynomial is returned; interval classification requires its real roots.";break;}
      case "antiderivative-of-polynomial": {const cs=polyInt(parsePoly(v,"coefficients"));r="Antiderivative coefficients (highest power first): "+cs.join(", ")+" + C";break;}
      case "definite-polynomial-integral": case "average-value-of-function": {const cs=parsePoly(v,"coefficients"),lo=x("lower"),hi=x("upper");if(hi<lo)throw new Error("Upper bound must not be below lower bound.");const anti=polyInt(cs),area=polyEval(anti,hi)-polyEval(anti,lo);r=id==="definite-polynomial-integral"?area:area/(hi-lo||1);break;}
      case "area-under-linear-function": {const aa=x("a"),bb=x("b"),lo=x("lower"),hi=x("upper");r=Math.abs(aa*(hi*hi-lo*lo)/2+bb*(hi-lo));break;}
      case "riemann-sum-calculator": {const xs=a("xValues"),ys=a("yValues");if(xs.length!==ys.length||xs.length<2)throw new Error("x and y lists need the same length, at least 2.");let sum=0;for(let i=1;i<xs.length;i++)sum+=(xs[i]-xs[i-1])*(ys[i]+ys[i-1])/2;r=sum;note="Trapezoidal approximation from supplied sample points.";break;}
      case "trapezoidal-rule": {const xs=a("xValues"),ys=a("yValues");if(xs.length!==ys.length||xs.length<2)throw new Error("x and y lists need the same length, at least 2.");let sum=0;for(let i=1;i<xs.length;i++)sum+=(xs[i]-xs[i-1])*(ys[i]+ys[i-1])/2;r=sum;break;}
      case "simpson-s-rule": {const xs=a("xValues"),ys=a("yValues");if(xs.length!==ys.length||xs.length<3||xs.length%2===0)throw new Error("Simpson's rule needs an odd number of equally spaced samples (at least 3).");const h=xs[1]-xs[0];for(let i=1;i<xs.length;i++)if(Math.abs((xs[i]-xs[i-1])-h)>1e-8)throw new Error("Samples must be equally spaced.");let sum=ys[0]+ys[ys.length-1];for(let i=1;i<ys.length-1;i++)sum+=(i%2?4:2)*ys[i];r=h*sum/3;break;}
      case "numerical-differentiation": {const cs=parsePoly(v,"coefficients"),xx=x("x"),h=v.h!==undefined&&String(v.h).trim()!==""?x("h"):1e-5;if(h===0)throw new Error("Step size cannot be zero.");r=(polyEval(cs,xx+h)-polyEval(cs,xx-h))/(2*h);break;}
      case "newton-raphson-root-finder": {const cs=parsePoly(v,"coefficients");let xx=x("x");const dcs=derivative(cs),it=v.iterations!==undefined&&String(v.iterations).trim()!==""?iv("iterations",1,100):50;for(let i=0;i<it;i++){const f=polyEval(cs,xx),df=polyEval(dcs,xx);if(Math.abs(df)<1e-12)throw new Error("Derivative is zero or too small near the current iterate.");const next=xx-f/df;if(Math.abs(next-xx)<1e-10){xx=next;break;}xx=next;if(!Number.isFinite(xx))throw new Error("Iteration diverged.");}r=xx;break;}
      case "bisection-method": {const cs=parsePoly(v,"coefficients");let lo=x("lower"),hi=x("upper");const it=v.iterations!==undefined&&String(v.iterations).trim()!==""?iv("iterations",1,200):60;let fl=polyEval(cs,lo),fh=polyEval(cs,hi);if(fl*fh>0)throw new Error("The function values at the interval ends must have opposite signs or include zero.");for(let i=0;i<it;i++){const mid=(lo+hi)/2,fm=polyEval(cs,mid);if(Math.abs(fm)<1e-12){lo=hi=mid;break;}if(fl*fm<=0){hi=mid;fh=fm;}else{lo=mid;fl=fm;}}r=(lo+hi)/2;break;}
      case "secant-method-root-finder": {const cs=parsePoly(v,"coefficients");let x0=x("x"),x1=x("upper");for(let i=0;i<(v.iterations?iv("iterations",1,100):50);i++){const f0=polyEval(cs,x0),f1=polyEval(cs,x1);if(Math.abs(f1-f0)<1e-12)throw new Error("Secant denominator became zero.");const next=x1-f1*(x1-x0)/(f1-f0);x0=x1;x1=next;if(Math.abs(x1-x0)<1e-10)break;}r=x1;break;}
      case "taylor-polynomial-coefficients": {const cs=parsePoly(v,"coefficients"),center=x("center"),order=iv("order",0,30);let deriv=cs,values=[];for(let k=0;k<=order;k++){values.push(polyEval(deriv,center)/factorial(k));deriv=derivative(deriv);}r="Taylor coefficients in powers of (x − center): "+values.join(", ");break;}
      case "l-h-pital-rule-applicability-helper": {const n0=x("numerator"),d0=x("denominator");r=d0===0&&n0===0?"0/0 form: L’Hôpital may apply if differentiability conditions hold.":Math.abs(n0)===Infinity&&Math.abs(d0)===Infinity?"∞/∞ form: L’Hôpital may apply if differentiability conditions hold.":"Not the 0/0 or ∞/∞ indeterminate form based on these values.";break;}
      case "partial-derivative-of-monomial": {const c=x("c"),px=x("xPower"),py=x("yPower"),xx=x("x"),yy=x("y");const dx=px===0?0:c*px*Math.pow(xx,px-1)*Math.pow(yy,py),dy=py===0?0:c*py*Math.pow(xx,px)*Math.pow(yy,py-1);r="∂f/∂x = "+fmt(dx)+"; ∂f/∂y = "+fmt(dy);break;}
      case "gradient-of-scalar-field": r="∇f = ("+fmt(x("a"))+", "+fmt(x("b"))+", "+fmt(x("c"))+")";break;
      case "directional-derivative-of-linear-function": {const dx=x("x"),dy=x("y"),len=Math.hypot(dx,dy);if(len===0)throw new Error("Direction vector cannot be zero.");r=(x("a")*dx+x("b")*dy)/len;break;}
      case "double-integral-rectangle-constant": r=x("f")*(x("x2")-x("x1"))*(x("y2")-x("y1"));break;
      case "identity-matrix-generator": {const n=iv("n",1,10);r=Array.from({length:n},function(_,i){return "["+Array.from({length:n},function(_,j){return i===j?1:0;}).join(", ")+"]";}).join("\\n");break;}
      case "matrix-addition": case "matrix-subtraction": case "matrix-multiplication": case "matrix-transpose": case "matrix-rank": case "trace-of-matrix": case "matrix-power": case "row-reduction-2-2": {
        const A=matrix(v,"matrixA");
        if(id==="matrix-transpose")r=A[0].map(function(_,j){return A.map(function(row){return row[j];});}).map(function(row){return "["+row.map(fmt).join(", ")+"]";}).join("\n");
        else if(id==="matrix-addition"||id==="matrix-subtraction"){const B=matrix(v,"matrixB");if(A.length!==B.length||A[0].length!==B[0].length)throw new Error("Matrices must have equal dimensions.");r=A.map(function(row,i){return row.map(function(z,j){return z+(id==="matrix-addition"?1:-1)*B[i][j];});}).map(function(row){return "["+row.map(fmt).join(", ")+"]";}).join("\n");}
        else if(id==="matrix-multiplication"){const B=matrix(v,"matrixB");r=matMul(A,B).map(function(row){return "["+row.map(fmt).join(", ")+"]";}).join("\n");}
        else if(id==="trace-of-matrix"){if(A.length!==A[0].length)throw new Error("Trace requires a square matrix.");r=A.reduce(function(s,row,i){return s+row[i];},0);}
        else if(id==="matrix-power"){if(A.length!==A[0].length)throw new Error("Matrix power requires a square matrix.");let p=iv("n",0,20),R=A.map(function(row,i){return row.map(function(_,j){return i===j?1:0;});});for(let i=0;i<p;i++)R=matMul(R,A);r=R.map(function(row){return "["+row.map(fmt).join(", ")+"]";}).join("\n");}
        else {const M=A.map(function(row){return row.slice();}),rows=M.length,cols=M[0].length;let rank=0;for(let c=0;c<cols&&rank<rows;c++){let p=rank;for(let i=rank+1;i<rows;i++)if(Math.abs(M[i][c])>Math.abs(M[p][c]))p=i;if(Math.abs(M[p][c])<1e-10)continue;[M[rank],M[p]]=[M[p],M[rank]];const z=M[rank][c];for(let j=c;j<cols;j++)M[rank][j]/=z;for(let i=0;i<rows;i++)if(i!==rank){const f=M[i][c];for(let j=c;j<cols;j++)M[i][j]-=f*M[rank][j];}rank++;}r=id==="matrix-rank"?"Rank = "+rank:M.map(function(row){return "["+row.map(fmt).join(", ")+"]";}).join("\n");}
        break;
      }
      case "scalar-matrix-multiplication": {const A=matrix(v,"matrixA"),s=x("scalar");r=A.map(function(row){return "["+row.map(function(z){return fmt(z*s);}).join(", ")+"]";}).join("\n");break;}
      case "matrix-determinant-2-2": case "matrix-inverse-2-2": case "matrix-determinant-3-3": case "matrix-inverse-3-3": case "eigenvalues-2-2": case "characteristic-polynomial-2-2": case "eigenvector-2-2-helper": {
        let M;if(id.includes("3-3"))M=[[x("a"),x("b"),x("c")],[x("d"),x("e"),x("f")],[x("g"),x("h"),x("i")]];else M=[[x("a"),x("b")],[x("c"),x("d")]];
        const D=det(M);
        if(id.includes("determinant"))r=D;
        else if(id==="characteristic-polynomial-2-2")r="λ² − "+fmt(M[0][0]+M[1][1])+"λ + "+fmt(D);
        else if(id==="eigenvalues-2-2"){const tr=M[0][0]+M[1][1],disc=tr*tr-4*D;if(disc<0)r="Complex eigenvalues: "+fmt(tr/2)+" ± "+fmt(Math.sqrt(-disc)/2)+"i";else r=fmt((tr+Math.sqrt(disc))/2)+", "+fmt((tr-Math.sqrt(disc))/2);}
        else if(id==="eigenvector-2-2-helper"){const l=x("lambda");let vx=M[0][1],vy=l-M[0][0];if(Math.abs(vx)+Math.abs(vy)<1e-10){vx=l-M[1][1];vy=M[1][0];}const norm=Math.hypot(vx,vy);if(norm===0)throw new Error("Could not determine a non-zero eigenvector for the supplied value.");r="Eigenvector direction = ("+fmt(vx/norm)+", "+fmt(vy/norm)+")";}
        else {if(Math.abs(D)<1e-12)throw new Error("Singular matrix has no inverse.");if(M.length===2)r="["+fmt(M[1][1]/D)+", "+fmt(-M[0][1]/D)+"]\n["+fmt(-M[1][0]/D)+", "+fmt(M[0][0]/D)+"]";else {const aa=M[0][0],bb=M[0][1],cc=M[0][2],dd=M[1][0],ee=M[1][1],ff=M[1][2],gg=M[2][0],hh=M[2][1],ii=M[2][2];const C=[[ee*ii-ff*hh,cc*hh-bb*ii,bb*ff-cc*ee],[ff*gg-dd*ii,aa*ii-cc*gg,cc*dd-aa*ff],[dd*hh-ee*gg,bb*gg-aa*hh,aa*ee-bb*dd]];r=C.map(function(row){return "["+row.map(function(z){return fmt(z/D);}).join(", ")+"]";}).join("\n");}}
        break;
      }
      case "vector-addition": case "vector-subtraction": case "vector-magnitude": case "unit-vector": case "dot-product": case "cross-product-3d": case "angle-between-vectors": case "projection-of-vector": case "vector-distance": case "linear-independence-2d": case "basis-coordinate-helper": {
        const A=[x("x1"),x("y1"),v.z1!==undefined&&String(v.z1).trim()!==""?x("z1"):0],B=[x("x2"),x("y2"),v.z2!==undefined&&String(v.z2).trim()!==""?x("z2"):0],dot=A.reduce(function(s,z,i){return s+z*B[i];},0),mag=A.reduce(function(s,z){return s+z*z;},0)**0.5,magB=B.reduce(function(s,z){return s+z*z;},0)**0.5;
        if(id==="vector-addition")r=A.map(function(z,i){return z+B[i];});
        else if(id==="vector-subtraction")r=A.map(function(z,i){return z-B[i];});
        else if(id==="vector-distance")r=Math.hypot(A[0]-B[0],A[1]-B[1],A[2]-B[2]);
        else if(id==="vector-magnitude")r=mag;
        else if(id==="unit-vector"){if(mag===0)throw new Error("Zero vector has no unit direction.");r=A.map(function(z){return z/mag;});}
        else if(id==="dot-product")r=dot;
        else if(id==="cross-product-3d")r=[A[1]*B[2]-A[2]*B[1],A[2]*B[0]-A[0]*B[2],A[0]*B[1]-A[1]*B[0]];
        else if(id==="angle-between-vectors"){if(mag===0||magB===0)throw new Error("Angle requires two non-zero vectors.");r=Math.acos(Math.max(-1,Math.min(1,dot/(mag*magB))))*180/Math.PI+"°";}
        else if(id==="projection-of-vector"){if(magB===0)throw new Error("Projection vector cannot be zero.");r=B.map(function(z){return z*dot/(magB*magB);});}
        else if(id==="linear-independence-2d")r=Math.abs(A[0]*B[1]-A[1]*B[0])>1e-10?"Linearly independent":"Linearly dependent";
        else {const D=A[0]*B[1]-A[1]*B[0];if(Math.abs(D)<1e-12)throw new Error("Basis vectors must be independent.");r="Coordinates = ("+fmt((x("x")*B[1]-x("y")*B[0])/D)+", "+fmt((A[0]*x("y")-A[1]*x("x"))/D)+")";}
        break;
      }
      default: throw new Error("No calculation handler is registered for "+id+". Do not use this result as a substitute for a validated domain-specific calculation.");
    }
    if(typeof r==="number"&&!Number.isFinite(r))throw new Error("Result overflowed the supported finite-number range.");
    return {result:fmt(r),formula:catalogById[id] ? (formulaText[id] || catalogById[id].name+" — apply the formula and domain constraints described for this calculator.") : "",note:note,definition:catalogById[id]};
  }
  const api={definitions:definitions,calculate:calculate,version:"1.0.0"};
  root.AllRoundMathematics300=api;
  if(typeof module!=="undefined"&&module.exports)module.exports=api;
  if(root.AllRoundAdvancedCalculations&&Array.isArray(root.AllRoundAdvancedCalculations.definitions)){
    const existing=root.AllRoundAdvancedCalculations;
    const existingIds=new Set(existing.definitions.map(function(d){return d.id;}));
    const fresh=definitions.filter(function(d){return !existingIds.has(d.id);});
    existing.definitions=existing.definitions.concat(fresh);
    const previous=existing.calculate.bind(existing);
    existing.calculate=function(id,values){return catalogById[id]?calculate(id,values):previous(id,values);};
    root.AllRoundAdvancedCalculations=existing;
  }
})(typeof globalThis!=="undefined"?globalThis:this);
