import test from "node:test";
import assert from "node:assert/strict";
import {createRequire} from "node:module";
const require=createRequire(import.meta.url);
const {definitions,calculate}=require("../assets/js/phase14-17-calculations.js");
test("Phases 14–17 have eight unique documented calculators",()=>{
 assert.equal(definitions.length,8);
 assert.equal(new Set(definitions.map(x=>x.id)).size,8);
 for(const d of definitions)assert.ok(d.category&&d.description&&d.formula&&d.example&&d.limits&&d.fields.length,d.id);
});
const cases=[
 ["eng-normal-stress",{forceN:"1000",areaMm2:"100"},"10 MPa"],
 ["eng-torque",{forceN:"20",armM:"0.5"},"10 N·m"],
 ["eng-voltage-power",{voltageV:"12",currentA:"2"},"24 W"],
 ["home-concrete-volume",{lengthM:"5",widthM:"3",depthM:"0.1"},"1.5 m³"],
 ["home-paint-quantity",{areaM2:"40",coats:"2",coverageM2L:"10"},"8 litres"],
 ["travel-fuel-cost",{distanceKm:"300",consumptionL100:"6",pricePerL:"100"},"1800 currency units"],
 ["travel-trip-time",{distanceKm:"150",speedKmh:"60"},"2.5 hours"],
 ["edu-weighted-grade",{scores:"80,90",weights:"2,3"},"86"]
];
test("Phases 14–17 reference examples match outputs",()=>{for(const [id,v,want] of cases)assert.equal(calculate(id,v).result,want,id);});
test("education assessment enforces consistent weights and score bounds",()=>{
 assert.equal(calculate("edu-required-score",{currentScore:"80",completedWeight:"60",targetScore:"85",remainingWeight:"40"}).result,"92.5% required");
 assert.throws(()=>calculate("edu-weighted-grade",{scores:"80,90",weights:"2"}),/matching counts/);
 assert.throws(()=>calculate("edu-required-score",{currentScore:"80",completedWeight:"50",targetScore:"85",remainingWeight:"40"}),/total 100/);
});
test("engineering and travel tools reject invalid ranges and zero divisors",()=>{
 assert.throws(()=>calculate("eng-normal-stress",{forceN:"1000",areaMm2:"0"}),/valid range/);
 assert.throws(()=>calculate("travel-trip-time",{distanceKm:"10",speedKmh:"0"}),/valid range/);
 assert.throws(()=>calculate("home-paint-quantity",{areaM2:"10",coats:"1",coverageM2L:"0"}),/valid range/);
});
