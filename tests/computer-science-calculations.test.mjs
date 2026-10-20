import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
const require=createRequire(import.meta.url);
const {definitions,calculate}=require("../assets/js/computer-science-calculations.js");
test("Phase 13 registry has 15 unique documented tools",()=>{
 assert.equal(definitions.length,15);
 assert.equal(new Set(definitions.map(d=>d.id)).size,15);
 for(const d of definitions)assert.ok(d.name&&d.description&&d.formula&&d.example&&d.fields.length,d.id);
});
const cases=[
 ["cs-base-converter",{value:"255",fromBase:"10",toBase:"16"},"FF"],
 ["cs-decimal-binary",{value:"42"},"Binary: 101010; octal: 52; hexadecimal: 2A"],
 ["cs-integer-range",{bits:"8",signed:"yes"},"Signed 8-bit range: -128 to 127"],
 ["cs-bitwise",{a:"5",b:"3",operation:"AND"},"1"],
 ["cs-gcd-lcm",{a:"12",b:"18"},"GCD: 6; LCM: 36"],
 ["cs-prime-check",{value:"97"},"97 is prime"],
 ["cs-factorial",{n:"5"},"5! = 120"],
 ["cs-combinations",{n:"5",r:"2",mode:"combination"},"nCr = 10"],
 ["cs-ascii-unicode",{text:"A"},"A → U+0041 (decimal 65)"],
 ["cs-utf8-size",{text:"Hello"},"5 UTF-8 bytes"],
 ["cs-data-transfer-time",{size:"100",sizeUnit:"MB",rate:"100",rateUnit:"Mbit/s"},"8 seconds"],
 ["cs-throughput",{size:"100",sizeUnit:"MB",seconds:"10"},"80000000 bit/s (80 Mbit/s)"],
 ["cs-ipv4-subnet",{cidr:"192.168.1.10/24"},"Network: 192.168.1.0/24; mask: 255.255.255.0; broadcast: 192.168.1.255; 254 usable hosts; usable range: 192.168.1.1 – 192.168.1.254"],
 ["cs-ipv4-validator",{address:"192.168.1.1"},"192.168.1.1 is valid; unsigned value: 3232235777"],
 ["cs-hash-checksum",{text:"a"},"FNV-1a 32-bit: E40C292C (unsigned 3826002220)"]
];
test("Phase 13 documented examples return reference outputs",()=>{
 for(const [id,v,expected] of cases)assert.equal(calculate(id,v).result,expected,id);
});
test("base conversion validates radix and digits",()=>{
 assert.throws(()=>calculate("cs-base-converter",{value:"2",fromBase:"2",toBase:"10"}),/invalid for the selected base/);
 assert.throws(()=>calculate("cs-base-converter",{value:"1",fromBase:"3",toBase:"10"}),/must be 2, 8, 10, or 16/);
});
test("fixed-width ranges use exact integer arithmetic",()=>{
 assert.match(calculate("cs-integer-range",{bits:"128",signed:"no"}).result,/0 to 340282366920938463463374607431768211455/);
 assert.throws(()=>calculate("cs-integer-range",{bits:"0",signed:"yes"}),/from 1 through 1024/);
});
test("algorithm inputs reject invalid domains and keep exact factorial arithmetic",()=>{
 assert.equal(calculate("cs-factorial",{n:"100"}).result.startsWith("100! = "),true);
 assert.throws(()=>calculate("cs-combinations",{n:"4",r:"5",mode:"combination"}),/cannot exceed/);
 assert.throws(()=>calculate("cs-prime-check",{value:"1"}),/at least 2/);
});
test("IPv4 tools reject invalid octets and prefixes",()=>{
 assert.throws(()=>calculate("cs-ipv4-validator",{address:"192.168.1.256"}),/octets/);
 assert.throws(()=>calculate("cs-ipv4-subnet",{cidr:"192.168.1.1/33"}),/prefix must be 0–32/);
});
test("transfer tools reject non-positive rate and elapsed time",()=>{
 assert.throws(()=>calculate("cs-data-transfer-time",{size:"10",sizeUnit:"MB",rate:"0",rateUnit:"Mbit/s"}),/Rate must be positive/);
 assert.throws(()=>calculate("cs-throughput",{size:"1",sizeUnit:"GB",seconds:"0"}),/seconds must be positive/);
});
test("Unicode code point and UTF-8 byte counts handle multibyte text",()=>{
 assert.match(calculate("cs-ascii-unicode",{text:"😀"}).result,/U\+1F600/);
 assert.equal(calculate("cs-utf8-size",{text:"😀"}).result,"4 UTF-8 bytes");
});
