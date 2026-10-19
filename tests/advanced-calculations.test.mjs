import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { definitions, calculate } = require("../assets/js/advanced-calculations.js");

test("Phase 4 catalog contains 18 uniquely identified advanced calculators", () => {
  assert.equal(definitions.length, 18);
  assert.equal(new Set(definitions.map(item => item.id)).size, 18);
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
test("successful Phase 4 calculators always expose the formula and definition", () => {
  for (const [id, values] of examples) {
    const answer = calculate(id, values);
    assert.ok(answer.formula, id);
    assert.equal(answer.definition.id,id);
  }
});
