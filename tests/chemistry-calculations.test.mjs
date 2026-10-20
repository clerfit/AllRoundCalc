import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const {definitions,calculate}=require("../assets/js/chemistry-calculations.js");

test("Phase 6 chemistry catalogue contains 38 unique calculators with documented field help",()=>{
  assert.equal(definitions.length,38);
  assert.equal(new Set(definitions.map(x=>x.id)).size,38);
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
 ["ideal-gas-volume",{moles:"1",temperature:"298.15",pressure:"101325"},"Gas volume: 0.024465403697 m³"],
 ["ideal-gas-temperature",{pressure:"101325",volume:"0.022414",moles:"1"},"Absolute temperature: 273.150371143 K"],
 ["gas-law-combined",{initialPressure:"100000",initialVolume:"0.02",initialTemperature:"300",finalPressure:"100000",finalTemperature:"600"},"Final gas volume: 0.04 m³"],
 ["heat-from-specific-heat",{mass:"1",specificHeat:"4184",temperatureChange:"10"},"Heat transfer: 41840 J"],
 ["pH-strong-acid",{concentration:"0.01"},"Estimated pH: 2"],
 ["pH-strong-base",{concentration:"0.001"},"Estimated pH: 11"],
 ["ph-from-poh",{poh:"3"},"Estimated pH: 11"],
 ["percent-yield",{actualYield:"8",theoreticalYield:"10"},"Percent yield: 80%"],
 ["percent-purity",{pureMass:"9",sampleMass:"10"},"Percent purity: 90%"],
 ["molality",{moles:"1",solventMass:"2"},"Molality: 0.5 mol/kg"],
 ["mole-fraction",{componentMoles:"1",otherMoles:"3"},"Component mole fraction: 0.25"],
 ["stoichiometric-mole-conversion",{knownMoles:"2",knownCoefficient:"2",targetCoefficient:"3"},"Target species amount: 3 mol"],
 ["titration-concentration",{titrantConcentration:"0.1",titrantVolume:"0.025",unknownVolume:"0.05",unknownCoefficient:"1",titrantCoefficient:"1"},"Unknown concentration: 0.05 mol/L"],
 ["atom-economy",{desiredCoefficient:"1",desiredMolarMass:"80",reactantMassSum:"100"},"Atom economy: 80%"],
 ["reaction-enthalpy",{moles:"2",molarEnthalpy:"-100"},"Reaction heat: -200 kJ"],
 ["dalton-partial-pressures",{partialPressures:"100000,20000"},"Total pressure: 120000 Pa"],
 ["element-mass-percent",{elementCount:"1",elementMolarMass:"4.0026",compoundMolarMass:"18.015"},"Elemental mass percent: 22.2181515404%"],
];
test("Phase 6 chemistry calculators match reference examples",()=>{
 for(const [id,values,expected] of cases){assert.equal(calculate(id,values).result,expected,id);}
});
test("Phase 6 rejects invalid domains and non-finite values",()=>{
 for(const [id,values] of [
  ["moles-from-mass",{mass:"1",molarMass:"0"}],
  ["mass-from-moles",{moles:"1",molarMass:"0"}],
  ["molarity",{moles:"1",volume:"0"}],
  ["dilution",{initialConcentration:"1",initialVolume:"2",finalVolume:"1"}],
  ["mass-percent",{soluteMass:"11",solutionMass:"10"}],
  ["ideal-gas-pressure",{moles:"1",temperature:"0",volume:"1"}],
  ["pH-strong-acid",{concentration:"0"}],
  ["percent-yield",{actualYield:"1",theoreticalYield:"0"}],
  ["percent-purity",{pureMass:"11",sampleMass:"10"}],
  ["density-chemistry",{mass:"Infinity",volume:"2"}],
  ["mole-fraction",{componentMoles:"0",otherMoles:"0"}],
  ["stoichiometric-mole-conversion",{knownMoles:"1",knownCoefficient:"0",targetCoefficient:"1"}],
  ["stoichiometric-mole-conversion",{knownMoles:"1",knownCoefficient:"1.5",targetCoefficient:"1"}],
  ["titration-concentration",{titrantConcentration:"0.1",titrantVolume:"0.02",unknownVolume:"0",unknownCoefficient:"1",titrantCoefficient:"1"}],
  ["atom-economy",{desiredCoefficient:"1",desiredMolarMass:"80",reactantMassSum:"0"}],
  ["atom-economy",{desiredCoefficient:"2",desiredMolarMass:"80",reactantMassSum:"100"}],
  ["dalton-partial-pressures",{partialPressures:"100,,200"}],
  ["element-mass-percent",{elementCount:"10",elementMolarMass:"20",compoundMolarMass:"100"}],
 ]) assert.throws(()=>calculate(id,values),undefined,id);
});

test("supplemental chemistry calculators match reference examples and validate dilution", () => {
  assert.equal(calculate("radioactive-decay",{initialAmount:"80",halfLife:"5",elapsedTime:"10"}).result,"Remaining amount: 20");
  assert.match(calculate("first-order-rate-constant",{halfLife:"10"}).result,/0\.0693/);
  assert.match(calculate("ph-strong-base-concentration",{concentration:"0.01"}).result,/pH: 12/);
  assert.equal(calculate("dilution-factor",{initialConcentration:"10",initialVolume:"10",finalVolume:"100"}).result,"Dilution factor: 10; final concentration: 1");
  assert.throws(()=>calculate("dilution-factor",{initialConcentration:"1",initialVolume:"10",finalVolume:"5"}),/at least/);
});

test("extra chemistry tools match reference examples",()=>{assert.equal(calculate("henderson-hasselbalch",{pKa:"4.76",baseConcentration:"1",acidConcentration:"1"}).result,"Estimated buffer pH: 4.76");assert.equal(calculate("equilibrium-quotient",{productConcentrations:"2",productCoefficients:"1",reactantConcentrations:"1,1",reactantCoefficients:"1,1"}).result,"Reaction quotient Qc: 2");assert.match(calculate("faraday-electrolysis-mass",{current:"1",time:"3600",molarMass:"63.546",electrons:"2"}).result,/1\.185/);assert.match(calculate("arrhenius-rate-ratio",{activationEnergy:"50000",temperature1:"300",temperature2:"310"}).result,/1\.9/);});
