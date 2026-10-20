import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { definitions, calculate } = require("../assets/js/advanced-calculations.js");

test("Phase 4 catalog contains 23 uniquely identified advanced calculators", () => {
  assert.equal(definitions.length,27);
  assert.equal(new Set(definitions.map(item => item.id)).size, 23);
  for (const item of definitions) {
    assert.ok(item.name && item.description && item.formula && item.example, item.id);
    assert.ok(Array.isArray(item.fields) && item.fields.length > 0, item.id);
  }
});

const examples = [
  ["linear-equation",{a:"3",b:"2",c:"11"},"x = 3"],
  ["quadratic-equation",{a:"1",b:"-3",c:"2"},"Discriminant: 1; roots: 2, 1"],
  ["linear-system-2x2",{a1:"2",b1:"1",c1:"7",a2:"1",b2:"-2",c2:"6"},"x = 4; y = -1"],
  ["logarithm",{x:"1000",base:"10"},"log base 10 of 1000 = 3"],
  ["exponential-equation",{coefficient:"2",base:"3",target:"54"},"x = 3"],
  ["trigonometry",{angle:"30",unit:"degrees",fn:"sin"},"sin(30°) = 0.5"],
  ["inverse-trigonometry",{value:"0.5",fn:"asin"},"Angle: 30°; 0.523598775598 radians"],
  ["angle-converter",{angle:"180"},"Degrees: 180; radians: 3.14159265359"],
  ["slope",{x1:"1",y1:"2",x2:"3",y2:"6"},"Slope: 2"],
  ["distance-midpoint",{x1:"0",y1:"0",x2:"3",y2:"4"},"Distance: 5; midpoint: (1.5, 2)"],
  ["circle",{radius:"2"},"Circumference: 12.5663706144; area: 12.5663706144"],
  ["arithmetic-sequence",{first:"3",difference:"2",n:"5"},"nth term: 11; sum of first 5 terms: 35"],
  ["geometric-sequence",{first:"2",ratio:"3",n:"4"},"nth term: 54; sum of first 4 terms: 80"],
  ["polynomial-derivative",{coefficients:"2,3,4"},"f′(x) = 4x + 3"],
  ["polynomial-integral",{coefficients:"1,0,0",lower:"0",upper:"3"},"Definite integral: 9"],
  ["complex-numbers",{a:"1",b:"2",c:"3",d:"4",operation:"add"},"4 + 6i"],
  ["matrix-2x2",{a:"1",b:"2",c:"3",d:"4"},"Determinant: -2; inverse: [[-2, 1], [1.5, -0.5]]"],
  ["vectors-2d",{ux:"1",uy:"2",vx:"3",vy:"4"},"Dot product: 11; |u|: 2.2360679775; |v|: 5; angle: 10.3048464688°"]
];
for (const [id, values, expected] of examples) {
  test(`${id} matches independently checked reference values`, () => {
    assert.equal(calculate(id, values).result, expected);
  });
}
test("quadratic solver handles repeated and complex roots", () => {
  assert.equal(calculate("quadratic-equation",{a:"1",b:"2",c:"1"}).result,"Discriminant: 0; repeated root: -1");
  assert.equal(calculate("quadratic-equation",{a:"1",b:"0",c:"1"}).result,"Discriminant: -4; complex roots: 1i and −1i");
  assert.throws(()=>calculate("quadratic-equation",{a:"0",b:"2",c:"1"}),/must not be zero/);
});
test("quadratic solver remains stable when one root is much smaller than the other", () => {
  const answer = calculate("quadratic-equation",{a:"1",b:"100000000",c:"1"}).result;
  assert.equal(answer,"Discriminant: 10000000000000000; roots: -100000000, -1e-8");
});
test("systems distinguish unique, inconsistent, and non-unique equations", () => {
  assert.throws(()=>calculate("linear-system-2x2",{a1:"1",b1:"1",c1:"2",a2:"2",b2:"2",c2:"5"}),/no solution/);
  assert.throws(()=>calculate("linear-system-2x2",{a1:"1",b1:"1",c1:"2",a2:"2",b2:"2",c2:"4"}),/infinitely many/);
});
test("logarithms and exponential equations reject invalid domains", () => {
  assert.throws(()=>calculate("logarithm",{x:"0",base:"10"}),/argument must be greater/);
  assert.throws(()=>calculate("logarithm",{x:"10",base:"1"}),/base must be positive/);
  assert.throws(()=>calculate("exponential-equation",{coefficient:"2",base:"3",target:"-5"}),/must be positive/);
  assert.equal(calculate("geometric-sequence",{first:"5",ratio:"1",n:"3"}).result,"nth term: 5; sum of first 3 terms: 15");
});
test("trigonometric calculators enforce real domains and singular cases", () => {
  assert.throws(()=>calculate("inverse-trigonometry",{value:"2",fn:"asin"}),/input from −1 through 1/);
  assert.throws(()=>calculate("trigonometry",{angle:"90",unit:"degrees",fn:"tan"}),/undefined or numerically unstable/);
  assert.throws(()=>calculate("slope",{x1:"3",y1:"0",x2:"3",y2:"5"}),/vertical line/);
});
test("calculus, complex numbers, matrices, and vectors handle special cases", () => {
  assert.equal(calculate("polynomial-derivative",{coefficients:"7"}).result,"f′(x) = 0");
  assert.throws(()=>calculate("polynomial-derivative",{coefficients:"1,,3"}),/empty item/);
  assert.throws(()=>calculate("complex-numbers",{a:"1",b:"1",c:"0",d:"0",operation:"divide"}),/zero complex/);
  assert.match(calculate("matrix-2x2",{a:"1",b:"2",c:"2",d:"4"}).result,/inverse: does not exist/);
  assert.match(calculate("vectors-2d",{ux:"0",uy:"0",vx:"1",vy:"2"}).result,/angle: undefined/);
});
test("complex arithmetic uses correct component formulas for all operations", () => {
  const values = {a:"1",b:"2",c:"3",d:"4"};
  assert.equal(calculate("complex-numbers",{...values,operation:"subtract"}).result,"-2 − 2i");
  assert.equal(calculate("complex-numbers",{...values,operation:"multiply"}).result,"-5 + 10i");
  assert.equal(calculate("complex-numbers",{...values,operation:"divide"}).result,"0.44 + 0.08i");
});
test("polynomial differentiation rejects arithmetic overflow instead of dropping terms", () => {
  assert.throws(() => calculate("polynomial-derivative",{coefficients:"1e308,0,0"}), /exceeds the supported finite-number range/);
});
test("successful Phase 4 calculators always expose the formula and definition", () => {
  for (const [id, values] of examples) {
    const answer = calculate(id, values);
    assert.ok(answer.formula, id);
    assert.equal(answer.definition.id,id);
  }
});

test("linear and exponential solvers handle negative coefficients and fractional bases", () => {
  assert.equal(calculate("linear-equation",{a:"-2",b:"4",c:"10"}).result,"x = -3");
  assert.equal(calculate("logarithm",{x:"0.125",base:"0.5"}).result,"log base 0.5 of 0.125 = 3");
  assert.equal(calculate("exponential-equation",{coefficient:"2",base:"0.5",target:"0.25"}).result,"x = 3");
});
test("inverse trigonometry includes valid endpoints and angle conversion accepts negative turns", () => {
  assert.equal(calculate("inverse-trigonometry",{value:"-1",fn:"acos"}).result,"Angle: 180°; 3.14159265359 radians");
  assert.equal(calculate("angle-converter",{angle:"-360"}).result,"Degrees: -360; radians: -6.28318530718");
});
test("coordinate geometry handles negative slope and coincident points", () => {
  assert.equal(calculate("slope",{x1:"0",y1:"4",x2:"2",y2:"0"}).result,"Slope: -2");
  assert.equal(calculate("distance-midpoint",{x1:"4",y1:"-3",x2:"4",y2:"-3"}).result,"Distance: 0; midpoint: (4, -3)");
});
test("circle and sequences handle zero-radius and one-term boundaries", () => {
  assert.equal(calculate("circle",{radius:"0"}).result,"Circumference: 0; area: 0");
  assert.equal(calculate("arithmetic-sequence",{first:"7",difference:"-4",n:"1"}).result,"nth term: 7; sum of first 1 terms: 7");
  assert.equal(calculate("geometric-sequence",{first:"2",ratio:"-2",n:"3"}).result,"nth term: 8; sum of first 3 terms: 6");
});
test("polynomial tools handle constant, zero, and reversed-bound cases", () => {
  assert.equal(calculate("polynomial-derivative",{coefficients:"0,0,5"}).result,"f′(x) = 0");
  assert.equal(calculate("polynomial-integral",{coefficients:"1,0,0",lower:"3",upper:"0"}).result,"Definite integral: -9");
  assert.throws(()=>calculate("polynomial-integral",{coefficients:"1,2",lower:"Infinity",upper:"2"}),/finite number/);
});
test("complex division handles a pure imaginary divisor", () => {
  assert.equal(calculate("complex-numbers",{a:"1",b:"2",c:"0",d:"1",operation:"divide"}).result,"2 − 1i");
});
test("matrix and vector geometry handle identity and perpendicular inputs", () => {
  assert.equal(calculate("matrix-2x2",{a:"1",b:"0",c:"0",d:"1"}).result,"Determinant: 1; inverse: [[1, 0], [0, 1]]");
  assert.equal(calculate("vectors-2d",{ux:"1",uy:"0",vx:"0",vy:"1"}).result,"Dot product: 0; |u|: 1; |v|: 1; angle: 90°");
});
test("input validation rejects non-finite values and invalid sequence counts", () => {
  assert.throws(()=>calculate("linear-equation",{a:"Infinity",b:"1",c:"2"}),/finite number/);
  assert.throws(()=>calculate("arithmetic-sequence",{first:"1",difference:"1",n:"0"}),/at least 1/);
  assert.throws(()=>calculate("polynomial-derivative",{coefficients:"1,2,3,4,5,6,7,8,9,10,11,12,13,14"}),/limited to degree 12/);
});
test("complex division and midpoint avoid avoidable extreme-value overflow", () => {
  assert.equal(
    calculate("complex-numbers",{a:"1e200",b:"0",c:"1e200",d:"1e200",operation:"divide"}).result,
    "0.5 − 0.5i"
  );
  assert.equal(
    calculate("complex-numbers",{a:"1e-200",b:"0",c:"1e-200",d:"1e-200",operation:"divide"}).result,
    "0.5 − 0.5i"
  );
  assert.equal(
    calculate("complex-numbers",{a:"1e308",b:"1e308",c:"1e308",d:"1e308",operation:"divide"}).result,
    "1"
  );
  assert.equal(
    calculate("complex-numbers",{a:"1e-308",b:"1e-308",c:"1e-308",d:"1e-308",operation:"divide"}).result,
    "1"
  );
  assert.equal(
    calculate("distance-midpoint",{x1:"1e308",y1:"1e308",x2:"1e308",y2:"1e308"}).result,
    "Distance: 0; midpoint: (1e+308, 1e+308)"
  );
});
test("linear systems classify zero-coefficient equations by their right-hand sides", () => {
  assert.throws(
    () => calculate("linear-system-2x2",{a1:"0",b1:"0",c1:"0",a2:"1",b2:"1",c2:"2"}),
    /infinitely many solutions/
  );
  assert.throws(
    () => calculate("linear-system-2x2",{a1:"0",b1:"0",c1:"1",a2:"1",b2:"1",c2:"2"}),
    /no solution/
  );
  assert.throws(
    () => calculate("linear-system-2x2",{a1:"1",b1:"1",c1:"2",a2:"0",b2:"0",c2:"1"}),
    /no solution/
  );
});


test("supplemental geometry calculators match reference values and reject invalid dimensions", () => {
  assert.match(calculate("pythagorean-theorem",{a:"3",b:"4",hypotenuse:"0"}).result,/Hypotenuse: 5/);
  assert.match(calculate("sphere-volume",{radius:"3"}).result,/Volume: 113\.097/);
  assert.match(calculate("cylinder-volume",{radius:"2",height:"5"}).result,/Volume: 62\.831/);
  assert.equal(calculate("distance-3d",{x1:"0",y1:"0",z1:"0",x2:"2",y2:"3",z2:"6"}).result,"Distance: 7");
  assert.throws(()=>calculate("sphere-volume",{radius:"-1"}),/non-negative/);
});

test("extra geometry and inequality calculators match reference examples",()=>{assert.match(calculate("cone-volume",{radius:"3",height:"4"}).result,/Volume: 37\.699/);assert.match(calculate("rectangle-measures",{length:"3",width:"4"}).result,/diagonal: 5/);assert.match(calculate("circle-measures",{radius:"2"}).result,/circumference: 12\.566/);assert.equal(calculate("linear-inequality",{a:"-2",b:"4",c:"10",relation:"1"}).result,"x ≥ -3");assert.throws(()=>calculate("cone-volume",{radius:"-1",height:"4"}),/non-negative/);});
