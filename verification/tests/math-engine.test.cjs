const test = require("node:test");
const assert = require("node:assert/strict");
const { M } = require("../math-engine.cjs");
const near=(a,b,t=1e-10)=>assert.ok(Math.abs(a-b)<=t*Math.max(1,Math.abs(b)), `${a} not near ${b}`);

test("arithmetic, division and modulo",()=>{
 assert.equal(M.arithmetic({a:12,b:5,operation:"multiply"}),60);
 assert.equal(M.arithmetic({a:12,b:5,operation:"subtract"}),7);
 assert.equal(M.arithmetic({a:-7,b:3,operation:"modulo"}),2);
 assert.throws(()=>M.arithmetic({a:1,b:0,operation:"divide"}),/zero/i);
});
test("fractions, percentage tools and ratios",()=>{
 assert.equal(M.fractionToDecimal({numerator:1,denominator:4}),.25);
 assert.equal(M.percentageOf({value:800,percent:15}),120);
 assert.equal(M.percentageChange({oldValue:200,newValue:250}),25);
 near(M.percentageDifference({a:20,b:10}),200/3);
 assert.equal(M.reversePercentage({part:120,percent:15}),800);
 assert.equal(M.ratioSimplifier({a:24,b:36}),"2:3");
 assert.throws(()=>M.percentageChange({oldValue:0,newValue:5}),/zero/i);
});
test("number theory and combinatorics",()=>{
 assert.equal(M.gcd({a:54,b:24}),6);assert.equal(M.lcm({a:12,b:18}),36);
 assert.equal(M.primeCheck({n:29}),true);assert.equal(M.primeCheck({n:1}),false);
 assert.deepEqual(M.primeFactorization({n:360}),[[2,3],[3,2],[5,1]]);
 assert.deepEqual(M.factors({n:12}),[1,2,3,4,6,12]);
 assert.equal(M.factorial({n:5}),120);assert.equal(M.permutation({n:5,k:2}),20);assert.equal(M.combination({n:5,k:2}),10);
});
test("powers, roots, logarithms and equations",()=>{
 assert.equal(M.power({base:2,exponent:5}),32);assert.equal(M.root({value:-27,index:3}),-3);
 near(M.logarithm({value:100,base:10}),2);assert.equal(M.linear({a:2,b:-8}),4);
 assert.deepEqual(M.quadratic({a:1,b:-3,c:2}),{discriminant:1,roots:[1,2]});
 assert.deepEqual(M.quadratic({a:1,b:0,c:1}),{discriminant:-4,roots:[]});
 assert.throws(()=>M.root({value:-16,index:2}),/not real/i);
 assert.throws(()=>M.logarithm({value:2,base:1}),/one/i);
});
test("descriptive statistics and data validation",()=>{
 assert.equal(M.mean({values:"10,20,30"}),20);assert.equal(M.median({values:"9,1,4,2"}),3);
 assert.equal(M.variance({values:"1,2,3"}),2/3);assert.equal(M.variance({values:"1,2,3",sample:true}),1);
 assert.equal(M.standardDeviation({values:"1,2,3",sample:true}),1);
 assert.equal(M.weightedMean({values:"80,90",weights:"2,3"}),86);
 assert.throws(()=>M.weightedMean({values:"1,2",weights:"1"}),/same length/i);
 assert.throws(()=>M.mean({values:"1,foo"}),/finite/i);
});
test("geometry, trig, vector and matrix calculations",()=>{
 assert.equal(M.slope({x1:1,y1:2,x2:3,y2:6}),2);
 assert.equal(M.distance2D({x1:0,y1:0,x2:3,y2:4}),5);
 assert.deepEqual(M.midpoint2D({x1:0,y1:2,x2:4,y2:8}),[2,5]);
 assert.equal(M.triangleArea({base:10,height:6}),30);assert.equal(M.heronArea({a:3,b:4,c:5}),6);
 near(M.circleArea({radius:2}),Math.PI*4);assert.equal(M.rectangleArea({length:4,width:5}),20);
 assert.equal(M.pythagorean({a:3,b:4}),5);near(M.degreeRadian({value:180}),Math.PI);
 near(M.sine({angle:30}),.5);near(M.cosine({angle:60}),.5);
 assert.equal(M.matrixDet2({a:1,b:2,c:3,d:4}),-2);assert.equal(M.vectorMagnitude({values:"3,4,12"}),13);
 assert.equal(M.dotProduct({a:"1,2,3",b:"4,5,6"}),32);
 assert.throws(()=>M.slope({x1:1,y1:2,x2:1,y2:3}),/undefined/i);
 assert.throws(()=>M.heronArea({a:1,b:2,c:5}),/triangle/i);
});
test("invalid numeric domains are rejected",()=>{
 assert.throws(()=>M.factorial({n:-1}),/integer/i);
 assert.throws(()=>M.circleArea({radius:-1}),/negative/i);
 assert.throws(()=>M.rectangleArea({length:-1,width:2}),/negative/i);
 assert.throws(()=>M.averageSpeed({distance:10,time:0}),/positive/i);
});