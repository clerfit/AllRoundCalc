"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");

const modulePath = path.join(__dirname, "..", "assets", "js", "mathematics-300.js");
function loadWithBase(base) {
  global.AllRoundAdvancedCalculations = base;
  delete require.cache[require.resolve(modulePath)];
  const api = require(modulePath);
  delete global.AllRoundAdvancedCalculations;
  return api;
}
function fixture(def) {
  const v = {
    x:"2", y:"3", z:"1", a:"2", b:"3", c:"1", d:"4", e:"2", f:"3", g:"1", h:"2", i:"1",
    n:"3", k:"1", sigFigs:"3", maxDenominator:"100", numerator:"3", denominator:"4",
    n1:"1", d1:"2", n2:"1", d2:"3", w1:"1", w2:"2", a1:"1", a2:"2", a3:"0",
    b1:"2", b2:"1", b3:"1", c1:"3", c2:"5", c3:"1", d1:"2", d2:"6", d3:"7",
    d:"1", x1:"0", y1:"0", x2:"3", y2:"4", x3:"1", y3:"2",
    radius:"3", height:"4", length:"3", width:"4", side:"3", base:"2", equalSide:"3",
    diagonal1:"3", diagonal2:"4", outerRadius:"4", innerRadius:"2", r1:"3", r2:"1",
    majorRadius:"5", minorRadius:"2", angle:"30", A:"30", B:"45", opposite:"3", adjacent:"4",
    initial:"100", final:"120", percent:"15", percent1:"10", percent2:"5", rate:"0.1", time:"2",
    frequency:"2", phase:"0", value:"20", whole:"100", part:"25", cost:"70", sell:"100", revenue:"100",
    quantity:"12", units:"3", quantity1:"12", time1:"3", quantity2:"20", time2:"4",
    score1:"80", weight1:"40", score2:"90", weight2:"60", sales:"1000", target:"8",
    real:"1", imag:"1", start:"1", count:"5", r:"0.5", p:"1", q:"1", a0:"0", center:"0",
    order:"2", lower:"1", upper:"2", iterations:"20", fx:"2", fy:"4", df:"2", dg:"1",
    outerDerivative:"2", innerDerivative:"3", xPower:"2", yPower:"1", scalar:"2",
    baseArea:"12", lateralArea:"20", cx:"0", cy:"0", xIntercept:"3", yIntercept:"4",
    expression:"1+2*3", assignments:"A=1,B=0", exprA:"A && B", exprB:"B && A",
    variables:"A,B", relation:"<=", operation:"add", coefficients:"1,0,-2", otherCoefficients:"1,1",
    values:"1,2,3", weights:"1,2,3", xValues:"0,1,2", yValues:"1,2,5",
    matrixA:"1,0;0,1", matrixB:"0,1;1,0", setA:"a,b", setB:"b,c",
    objects:"10", boxes:"3", intersection:"1", m:"2", h:"2"
  };
  for (const field of def.fields) {
    const key = field[0];
    if (!(key in v)) v[key] = "1";
  }
  if (def.id === "truth-table-generator") v.variables = "2";
  if (def.id === "logic-equivalence-checker") v.variables = "A,B";
  if (def.id === "scientific-calculator") v.operation = "sqrt";
  if (def.id === "inverse-hyperbolic-functions") v.operation = "asinh";
  if (def.id === "exponential-equation-solver") Object.assign(v,{a:"2",base:"2",target:"8"});
  if (def.id === "logarithmic-equation-solver") Object.assign(v,{base:"2",target:"3"});
  if (def.id === "logarithm-calculator" || def.id === "change-of-base-logarithm") Object.assign(v,{x:"8",base:"2"});
  if (def.id === "infinite-geometric-series") Object.assign(v,{a1:"2",r:"0.5"});
  if (def.id === "matrix-determinant-3-3" || def.id === "matrix-inverse-3-3") Object.assign(v,{a:"1",b:"0",c:"0",d:"0",e:"1",f:"0",g:"0",h:"0",i:"1"});
  if (def.id === "system-of-two-linear-equations" || def.id === "solve-2-2-linear-system" || def.id === "cramer-s-rule-2-2") Object.assign(v,{a1:"1",b1:"2",c1:"3",a2:"2",b2:"1",c2:"5"});
  if (def.id === "three-variable-linear-system") Object.assign(v,{a1:"1",b1:"0",c1:"0",d1:"1",a2:"0",b2:"1",c2:"0",d2:"2",a3:"0",b3:"0",c3:"1",d3:"3"});
  if (["bisection-method","secant-method-root-finder","newton-raphson-root-finder"].includes(def.id)) Object.assign(v,{coefficients:"1,0,-2",x:"1.5",lower:"1",upper:"2",iterations:"30"});
  if (def.id === "parallelogram-area") Object.assign(v,{base:"3",height:"4"});
  if (def.id === "trapezoid-area") Object.assign(v,{a:"3",b:"4",height:"2"});
  if (def.id === "circle-through-three-points" || def.id === "triangle-incenter" || def.id === "triangle-circumcenter" || def.id === "triangle-orthocenter") Object.assign(v,{x1:"0",y1:"0",x2:"4",y2:"0",x3:"0",y3:"3"});
  if (def.id === "ellipse-eccentricity" || def.id === "ellipse-perimeter-approximation") Object.assign(v,{a:"3",b:"2"});
  if (def.id === "slope-calculator" || def.id === "line-equation-from-two-points") Object.assign(v,{x1:"0",y1:"1",x2:"2",y2:"3"});
  return v;
}

test("registers 300 unique Mathematics calculators with non-empty fields", () => {
  const api = loadWithBase({definitions:[], calculate(){throw new Error("base only");}});
  assert.equal(api.definitions.length, 300);
  const ids = api.definitions.map((d) => d.id);
  assert.equal(new Set(ids).size, 300);
  for (const d of api.definitions) {
    assert.ok(d.name && d.group && d.description && d.formula && d.example, d.id);
    assert.ok(d.fields.length > 0, d.id);
    assert.ok(d.fields.every((f) => f[0] && f[1]), d.id);
  }
});

test("every catalogue route reaches a calculation handler", () => {
  const api = loadWithBase({definitions:[], calculate(){throw new Error("base only");}});
  const failures = [];
  for (const def of api.definitions) {
    try {
      api.calculate(def.id, fixture(def));
    } catch (err) {
      if (/No calculation handler is registered/.test(String(err.message)) ||
          /^Enter /.test(String(err.message))) {
        failures.push(def.id + ": " + err.message);
      }
    }
  }
  assert.deepEqual(failures, []);
});

test("keeps earlier Advanced Mathematics calculators working", () => {
  const baseDefinition = {id:"existing-check",name:"Existing",group:"Tests",description:"Existing",fields:[["x","x"]],formula:"x",example:"x"};
  let baseCalls = 0;
  const base = {definitions:[baseDefinition],calculate(id,values){baseCalls++;return {result:String(values.x),formula:"existing",note:"base"};}};
  const api = loadWithBase(base);
  assert.equal(global.AllRoundAdvancedCalculations, undefined);
  assert.ok(base.definitions.some((d)=>d.id==="basic-arithmetic"));
  const result = base.calculate("basic-arithmetic",{a:"12",b:"4",operation:"add"});
  assert.equal(result.result,"16");
  assert.equal(base.calculate("existing-check",{x:"ok"}).result,"ok");
  assert.equal(baseCalls,1);
  assert.equal(api.definitions.length,300);
});

test("matches independent reference results for core formulas", () => {
  const api = loadWithBase({definitions:[],calculate(){throw new Error("base only");}});
  assert.equal(api.calculate("basic-arithmetic",{a:"12",b:"4",operation:"add"}).result,"16");
  assert.equal(api.calculate("percentage-of-a-number",{value:"200",percent:"15"}).result,"30");
  assert.equal(api.calculate("greatest-common-divisor-gcd",{a:"54",b:"24"}).result,"6");
  assert.equal(api.calculate("quadratic-equation-solver",{a:"1",b:"-3",c:"2"}).result,"Discriminant = 1; roots = 2, 1");
  assert.equal(api.calculate("sine-calculator",{x:"30"}).result,"0.5");
  assert.equal(api.calculate("circle-calculator",{radius:"2"}).result,"Area = 12.56637061; circumference = 12.56637061");
  assert.equal(api.calculate("logic-equivalence-checker",{exprA:"A && B",exprB:"B && A",variables:"A,B"}).result,"Logically equivalent for all 4 assignments.");
  assert.equal(api.calculate("matrix-determinant-2-2",{a:"1",b:"2",c:"3",d:"4"}).result,"-2");
});

test("rejects important invalid mathematical domains", () => {
  const api = loadWithBase({definitions:[],calculate(){throw new Error("base only");}});
  assert.throws(()=>api.calculate("square-root-calculator",{x:"-1"}),/Real square root/);
  assert.throws(()=>api.calculate("fraction-to-decimal",{numerator:"1",denominator:"0"}),/Denominator/);
  assert.throws(()=>api.calculate("infinite-geometric-series",{a1:"1",r:"1"}),/converges only/);
  assert.throws(()=>api.calculate("matrix-inverse-2-2",{a:"1",b:"2",c:"2",d:"4"}),/Singular matrix/);
});
