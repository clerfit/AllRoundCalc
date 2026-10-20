import test from "node:test";
import assert from "node:assert/strict";
import {createRequire} from "node:module";
const require=createRequire(import.meta.url);
const {definitions,calculate,unitsFor}=require("../assets/js/computer-science-calculations.js");

test("Phase 13 registry has 11 unique documented calculator contracts",()=>{
  assert.equal(definitions.length,11);
  assert.equal(new Set(definitions.map(d=>d.id)).size,11);
  for(const d of definitions)assert.ok(d.name&&d.description&&d.formula&&d.example&&d.fields.length,d.id);
});
const cases=[
 ["cs-base-converter",{value:"1010",fromBase:"2",toBase:"10"},"10 (base 10) = decimal 10"],
 ["cs-base-converter",{value:"255",fromBase:"10",toBase:"16"},"FF (base 16) = decimal 255"],
 ["cs-binary-arithmetic",{left:"1010",right:"110",operation:"add"},"Binary result: 10000; decimal result: 16"],
 ["cs-integer-range",{bits:"8",mode:"unsigned"},"8-bit unsigned range: 0 to 255"],
 ["cs-integer-range",{bits:"8",mode:"signed"},"8-bit signed range: -128 to 127"],
 ["cs-twos-complement",{value:"-1",bits:"8"},"8-bit two's complement: 11111111"],
 ["cs-bitwise-operations",{left:"12",right:"10",operation:"and"},"Result: 8; binary: 1000"],
 ["cs-data-size",{value:"1024",fromUnit:"B",toUnit:"KiB"},"1 KiB"],
 ["cs-transfer-time",{sizeMB:"100",speedMbps:"20"},"40 seconds"],
 ["cs-utf8-size",{textValue:"café"},"5 UTF-8 bytes; 4 Unicode code points"],
 ["cs-availability-downtime",{availabilityPercent:"99.9",periodHours:"720"},"Downtime: 0.72 hours (43.2 minutes)"],
 ["cs-parity-bit",{bits:"101",mode:"even"},"Parity bit (even): 0"],
 ["cs-parity-bit",{bits:"101",mode:"odd"},"Parity bit (odd): 1"],
 ["cs-ipv4-cidr",{address:"192.168.1.10",prefix:"24"},"Network: 192.168.1.0; broadcast: 192.168.1.255; addresses: 256; conventional usable hosts: 254"]
];
test("Phase 13 reference examples produce documented results",()=>{
  for(const [id,values,expected] of cases)assert.equal(calculate(id,values).result,expected,id);
});
test("base conversion rejects invalid radices and digits",()=>{
  assert.throws(()=>calculate("cs-base-converter",{value:"1010",fromBase:"1",toBase:"10"}),/from 2 through 36/);
  assert.throws(()=>calculate("cs-base-converter",{value:"102",fromBase:"2",toBase:"10"}),/invalid for base 2/);
  assert.throws(()=>calculate("cs-base-converter",{value:"12.4",fromBase:"10",toBase:"2"}),/integer digits/);
});
test("integer representation checks bit widths and range",()=>{
  assert.throws(()=>calculate("cs-integer-range",{bits:"0",mode:"signed"}),/from 1 through 1024/);
  assert.throws(()=>calculate("cs-twos-complement",{value:"128",bits:"8"}),/does not fit/);
  assert.throws(()=>calculate("cs-twos-complement",{value:"-129",bits:"8"}),/does not fit/);
});
test("binary and bitwise operations validate inputs and operators",()=>{
  assert.throws(()=>calculate("cs-binary-arithmetic",{left:"102",right:"1",operation:"add"}),/invalid for base 2/);
  assert.throws(()=>calculate("cs-binary-arithmetic",{left:"10",right:"1",operation:"mod"}),/Choose add/);
  assert.throws(()=>calculate("cs-bitwise-operations",{left:"-1",right:"2",operation:"xor"}),/non-negative/);
});
test("digital-size conversion validates units and supports decimal and binary conventions",()=>{
  assert.equal(unitsFor("cs-data-size").length,10);
  assert.equal(calculate("cs-data-size",{value:"1",fromUnit:"MB",toUnit:"B"}).result,"1000000 B");
  assert.equal(calculate("cs-data-size",{value:"1",fromUnit:"MB",toUnit:"MiB"}).result,"0.953674316406 MiB");
  assert.throws(()=>calculate("cs-data-size",{value:"1",fromUnit:"GB",toUnit:"mph"}),/supported source and target/);
});
test("transfer, availability, parity, and IPv4 tools reject invalid domains",()=>{
  assert.throws(()=>calculate("cs-transfer-time",{sizeMB:"1",speedMbps:"0"}),/greater than zero/);
  assert.throws(()=>calculate("cs-availability-downtime",{availabilityPercent:"101",periodHours:"24"}),/from 0 through 100/);
  assert.throws(()=>calculate("cs-parity-bit",{bits:"10x",mode:"even"}),/only 0 and 1/);
  assert.throws(()=>calculate("cs-ipv4-cidr",{address:"192.168.1.256",prefix:"24"}),/valid IPv4/);
  assert.throws(()=>calculate("cs-ipv4-cidr",{address:"192.168.1.10",prefix:"33"}),/from 0 through 32/);
  assert.match(calculate("cs-ipv4-cidr",{address:"192.168.1.10",prefix:"31"}).result,/addresses: 2; conventional usable hosts: 2/);
});
