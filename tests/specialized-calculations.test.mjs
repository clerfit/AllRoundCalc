import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
const require=createRequire(import.meta.url);
const {definitions,calculate}=require("../assets/js/specialized-calculations.js");

test("Phase 18 registry contains unique documented specialized tools",()=>{
 assert.equal(definitions.length,9);
 assert.equal(new Set(definitions.map(x=>x.id)).size,definitions.length);
 for(const d of definitions) assert.ok(d.category&&d.name&&d.description&&d.formula&&d.example&&d.limits&&d.fields.length,d.id);
});
const cases=[
 ["sp-great-circle-distance",{lat1:"0",lon1:"0",lat2:"0",lon2:"1"},"111.19508 km"],
 ["sp-initial-bearing",{lat1:"0",lon1:"0",lat2:"0",lon2:"1"},"90° true"],
 ["sp-light-travel-time",{distanceAU:"1"},"499.004784 seconds (8.316746 minutes)"],
 ["sp-parallax-distance",{parallaxArcsec:"0.1"},"10 parsecs"],
 ["sp-plant-population",{areaM2:"100",rowSpacingCm:"50",plantSpacingCm:"25"},"800 planting positions (approx.)"],
 ["sp-irrigation-volume",{areaM2:"100",depthMm:"5"},"500 litres"],
 ["sp-electricity-cost",{energyKWh:"250",ratePerKWh:"8"},"2000 currency units"],
 ["sp-electricity-emissions",{energyKWh:"100",factorKgPerKWh:"0.4"},"40 kg CO₂e"],
 ["sp-oee",{availabilityPct:"90",performancePct:"95",qualityPct:"98"},"83.79%"]
];
test("Phase 18 reference examples match expected outputs",()=>{
 for(const [id,values,expected] of cases) assert.equal(calculate(id,values).result,expected,id);
});
test("geographic coordinates and compass bearings validate domains",()=>{
 assert.throws(()=>calculate("sp-great-circle-distance",{lat1:"91",lon1:"0",lat2:"0",lon2:"0"}),/valid range/);
 assert.throws(()=>calculate("sp-initial-bearing",{lat1:"0",lon1:"0",lat2:"0",lon2:"0"}),/undefined/);
});
test("astronomy parallax rejects zero and negative angles",()=>{
 assert.throws(()=>calculate("sp-parallax-distance",{parallaxArcsec:"0"}),/valid range/);
 assert.throws(()=>calculate("sp-parallax-distance",{parallaxArcsec:"-0.1"}),/valid range/);
});
test("physical and economic calculators reject non-finite and invalid inputs",()=>{
 assert.throws(()=>calculate("sp-light-travel-time",{distanceAU:"Infinity"}),/finite/);
 assert.throws(()=>calculate("sp-electricity-cost",{energyKWh:"-1",ratePerKWh:"8"}),/valid range/);
 assert.throws(()=>calculate("sp-oee",{availabilityPct:"101",performancePct:"90",qualityPct:"90"}),/valid range/);
});
