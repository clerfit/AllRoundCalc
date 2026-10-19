import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const {definitions,calculate}=require("../assets/js/chemistry-calculations.js");

test("Phase 6 chemistry catalogue contains 22 unique calculators with documented field help",()=>{
  assert.equal(definitions.length,22);
  assert.equal(new Set(definitions.map(x=>x.id)).size,22);
  for(const d of definitions){assert.ok(d.formula,d.id+" formula");assert.ok(d.example,d.id+" example");assert.ok(d.fields.length,d.id+" fields");for(const f of d.fields){assert.ok(f[2],d.id+" field help "+f[0]);}}
});
const cases=[
 ["moles-from-mass",{mass:"18",molarMass:"18"},"Amount of substance: 1 mol"],
 ["mass-from-moles",{moles:"0.5",molarMass:"44.01"},"Sample mass: 22.005 g"],
 ["particles-from-moles",{moles:"1"},"Number of entities: 6.02214076e+23"],
 ["moles-from-particles",{particles:"6.02214076e23"},"Amount of substance: 1 mol"],
 ["molarity",{moles:"0.5",volume:"2"},"Molarity: 0.25 mol/L"],
 ["moles-from-molarity",{molarity:"0.2",volume:"0.5"},"Solute amount: 0.1 mol"],
 ["dilution",{initialConcentration:"2",initialVolume:"0.1",finalVolume:"0.5"},"Final concentration: 0.4 mol/L"],
 ["solution-preparation-mass",{molarity:"0.1",volume:"0.25",molarMass:"58.44"},"Required solute mass: 1.461 g"],
 ["mass-percent",{soluteMass:"5",solutionMass:"100"},"Mass concentration: 5%"],
 ["volume-percent",{soluteVolume:"10",solutionVolume:"100"},"Volume concentration: 10%"],
 ["ppm-mass",{soluteMass:"2",solutionMass:"1"},"Concentration: 2 ppm by mass"],
 ["density-chemistry",{mass:"10",volume:"5"},"Density: 2 g/mL"],
 ["ideal-gas-pressure",{moles:"1",temperature:"273.15",volume:"0.022414"},"Absolute pressure: 101324.862325 Pa"],
 ["ideal-gas-volume",{moles:"1",temperature:"298.15",pressure:"101325"},"Gas volume: 0.0244654037 m³"],
 ["ideal-gas-temperature",{pressure:"101325",volume:"0.022414",moles:"1"},"Absolute temperature: 273.150371142 K"],
 ["gas-law-combined",{initialPressure:"100000",initialVolume:"0.02",initialTemperature:"300",finalPressure:"100000",finalTemperature:"600"},"Final gas volume: 0.04 m³"],
 ["heat-from-specific-heat",{mass:"1",specificHeat:"4184",temperatureChange:"10"},"Heat transfer: 41840 J"],
 ["pH-strong-acid",{concentration:"0.01"},"Estimated pH: 2"],
 ["pH-strong-base",{concentration:"0.001"},"Estimated pH: 11"],
 ["ph-from-poh",{poh:"3"},"Estimated pH: 11"],
 ["percent-yield",{actualYield:"8",theoreticalYield:"10"},"Percent yield: 80%"],
 ["percent-purity",{pureMass:"9",sampleMass:"10"},"Percent purity: 90%"]
];
test("Phase 6 chemistry calculators match reference examples",()=>{
 for(const [id,values,expected] of cases){assert.equal(calculate(id,values).result,expected,id);}
});
test("Phase 6 rejects invalid domains and non-finite values",()=>{
 for(const [id,values] of [
  ["moles-from-mass",{mass:"1",molarMass:"0"}],
  ["molarity",{moles:"1",volume:"0"}],
  ["dilution",{initialConcentration:"1",initialVolume:"2",finalVolume:"1"}],
  ["mass-percent",{soluteMass:"11",solutionMass:"10"}],
  ["ideal-gas-pressure",{moles:"1",temperature:"0",volume:"1"}],
  ["pH-strong-acid",{concentration:"0"}],
  ["percent-yield",{actualYield:"1",theoreticalYield:"0"}],
  ["percent-purity",{pureMass:"11",sampleMass:"10"}],
  ["density-chemistry",{mass:"Infinity",volume:"2"}]
 ]) assert.throws(()=>calculate(id,values),undefined,id);
});
