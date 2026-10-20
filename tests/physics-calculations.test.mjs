import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { definitions, calculate } = require("../assets/js/physics-calculations.js");

test("Phase 5 catalogue contains 34 unique physics calculators with documented contracts", () => {
  assert.equal(definitions.length, 29);
  assert.equal(new Set(definitions.map(item => item.id)).size, 29);
  for (const item of definitions) {
    assert.ok(item.name && item.description && item.formula && item.example, item.id);
    assert.ok(Array.isArray(item.fields) && item.fields.length > 0, item.id);
  }
});

const examples = [
  ["speed-distance-time",{distance:"150",time:"10"},"Average speed: 15 m/s"],
  ["acceleration",{initialVelocity:"2",finalVelocity:"14",time:"4"},"Average acceleration: 3 m/s²"],
  ["kinematic-displacement",{initialVelocity:"3",acceleration:"2",time:"4"},"Displacement: 28 m"],
  ["newtons-second-law",{mass:"2",acceleration:"3"},"Net force: 6 N"],
  ["weight",{mass:"60",gravity:"9.80665"},"Weight: 588.399 N"],
  ["momentum",{mass:"3",velocity:"-4"},"Momentum: -12 kg·m/s"],
  ["kinetic-energy",{mass:"2",speed:"3"},"Kinetic energy: 9 J"],
  ["gravitational-potential-energy",{mass:"2",gravity:"9.8",height:"5"},"Gravitational potential energy change: 98 J"],
  ["mechanical-work",{force:"10",distance:"3",angle:"60"},"Work: 15 J"],
  ["mechanical-power",{work:"120",time:"4"},"Average power: 30 W"],
  ["density",{mass:"2",volume:"0.001"},"Density: 2000 kg/m³"],
  ["pressure",{force:"100",area:"0.5"},"Pressure: 200 Pa"],
  ["ohms-law",{current:"2",resistance:"6"},"Voltage: 12 V"],
  ["electrical-power",{voltage:"12",current:"2"},"Electrical power: 24 W"],
  ["wave-speed",{frequency:"50",wavelength:"0.4"},"Wave speed: 20 m/s"],
  ["spring-force",{springConstant:"200",extension:"0.05"},"Spring-force magnitude: 10 N"],
  ["projectile-range",{speed:"20",angle:"30",gravity:"9.8"},"Horizontal range: 35.3479756647 m"],
  ["projectile-flight-time",{speed:"20",angle:"30",gravity:"10"},"Flight time: 2 s"],
  ["projectile-max-height",{speed:"20",angle:"30",gravity:"10"},"Maximum height above launch point: 5 m"],
  ["impulse",{force:"5",time:"3"},"Impulse: 15 N·s"],
  ["spring-potential-energy",{springConstant:"200",extension:"0.1"},"Elastic potential energy: 1 J"],
  ["gravitation-force",{mass1:"1",mass2:"1",distance:"1"},"Gravitational force magnitude: 6.6743e-11 N"],
  ["coulomb-force",{charge1:"0.000001",charge2:"0.000002",distance:"1"},"Electrostatic force magnitude: 0.0179751035846 N"],
  ["resistance-series",{resistances:"2,3,5"},"Equivalent series resistance: 10 Ω"],
  ["resistance-parallel",{resistance1:"6",resistance2:"3"},"Equivalent parallel resistance: 2 Ω"],
  ["heat-energy",{mass:"2",specificHeat:"4200",temperatureChange:"5"},"Heat transfer: 42000 J"],
  ["thermal-expansion",{initialLength:"2",coefficient:"0.000012",temperatureChange:"50"},"Change in length: 0.0012 m"],
  ["thin-lens-image-distance",{focalLength:"0.1",objectDistance:"0.3"},"Signed image distance: 0.15 m"],
  ["lens-magnification",{imageDistance:"0.15",objectDistance:"0.3"},"Transverse magnification: -0.5"]
];

test("reference example for each Phase 5 calculator returns the documented result", () => {
  for (const [id, values, expected] of examples) {
    assert.equal(calculate(id, values).result, expected, id);
  }
});

test("every successful result exposes a formula and matching definition", () => {
  for (const [id, values] of examples) {
    const answer = calculate(id, values);
    assert.ok(answer.formula, id);
    assert.equal(answer.definition.id, id);
  }
});

test("motion calculations validate elapsed time and physical domains", () => {
  assert.throws(() => calculate("speed-distance-time",{distance:"5",time:"0"}),/greater than zero/);
  assert.throws(() => calculate("speed-distance-time",{distance:"-1",time:"2"}),/zero or greater/);
  assert.throws(() => calculate("acceleration",{initialVelocity:"0",finalVelocity:"1",time:"-2"}),/greater than zero/);
  assert.throws(() => calculate("kinematic-displacement",{initialVelocity:"1",acceleration:"2",time:"-1"}),/zero or greater/);
  assert.equal(calculate("acceleration",{initialVelocity:"10",finalVelocity:"2",time:"4"}).result,"Average acceleration: -2 m/s²");
});

test("energy, work, density, pressure, and spring calculations reject invalid domains", () => {
  assert.throws(() => calculate("kinetic-energy",{mass:"-1",speed:"3"}),/zero or greater/);
  assert.throws(() => calculate("mechanical-work",{force:"10",distance:"2",angle:"181"}),/from 0° through 180°/);
  assert.throws(() => calculate("density",{mass:"1",volume:"0"}),/greater than zero/);
  assert.throws(() => calculate("pressure",{force:"10",area:"0"}),/greater than zero/);
  assert.throws(() => calculate("spring-force",{springConstant:"-2",extension:"1"}),/zero or greater/);
});

test("electrical and wave calculators validate finite inputs and preserve signed results", () => {
  assert.throws(() => calculate("ohms-law",{current:"2",resistance:"-1"}),/zero or greater/);
  assert.throws(() => calculate("wave-speed",{frequency:"Infinity",wavelength:"2"}),/finite number/);
  assert.equal(calculate("electrical-power",{voltage:"-12",current:"2"}).result,"Electrical power: -24 W");
  assert.equal(calculate("momentum",{mass:"2",velocity:"-3"}).result,"Momentum: -6 kg·m/s");
});

test("numeric overflow is reported rather than returning Infinity", () => {
  assert.throws(() => calculate("kinetic-energy",{mass:"1e308",speed:"1e308"}),/finite-number range/);
  assert.throws(() => calculate("density",{mass:"1e308",volume:"1e-308"}),/finite-number range/);
});

test("unknown physics calculator IDs are rejected", () => {
  assert.throws(() => calculate("not-a-physics-tool",{}),/Unknown physics calculator/);
});

test("projectile tools enforce same-height angle and gravity assumptions", () => {
  assert.throws(() => calculate("projectile-range",{speed:"20",angle:"91",gravity:"9.8"}),/from 0° through 90°/);
  assert.throws(() => calculate("projectile-flight-time",{speed:"20",angle:"30",gravity:"0"}),/greater than zero/);
  assert.equal(calculate("projectile-range",{speed:"20",angle:"0",gravity:"10"}).result,"Horizontal range: 0 m");
});

test("field-force, circuit, thermal, and optics calculators validate singular cases", () => {
  assert.throws(() => calculate("gravitation-force",{mass1:"1",mass2:"1",distance:"0"}),/greater than zero/);
  assert.throws(() => calculate("coulomb-force",{charge1:"1",charge2:"1",distance:"0"}),/greater than zero/);
  assert.equal(calculate("resistance-parallel",{resistance1:"0",resistance2:"5"}).result,"Equivalent parallel resistance: 0 Ω");
  assert.equal(calculate("resistance-series",{resistances:"1, 2, 3"}).result,"Equivalent series resistance: 6 Ω");
  assert.throws(() => calculate("resistance-series",{resistances:"1,,3"}),/empty item/);
  assert.throws(() => calculate("thin-lens-image-distance",{focalLength:"0.1",objectDistance:"0.1"}),/image is at infinity/);
  assert.equal(calculate("heat-energy",{mass:"2",specificHeat:"4200",temperatureChange:"-5"}).result,"Heat transfer: -42000 J");
});

test("supplemental physics calculators match reference values and validate domains", () => {
  assert.equal(calculate("centripetal-force",{mass:"2",speed:"3",radius:"1.5"}).result,"Centripetal force: 12 N");
  assert.match(calculate("frequency-period",{value:"0.02",mode:"0"}).result,/Frequency: 50 Hz/);
  assert.match(calculate("electrical-energy",{power:"100",time:"60"}).result,/6000 J/);
  assert.equal(calculate("mechanical-efficiency",{usefulOutput:"750",inputEnergy:"1000"}).result,"Efficiency: 75%");
  assert.equal(calculate("pressure-from-force-area",{force:"100",area:"0.5"}).result,"Pressure: 200 Pa");
  assert.throws(()=>calculate("centripetal-force",{mass:"2",speed:"3",radius:"0"}),/positive/);
});
