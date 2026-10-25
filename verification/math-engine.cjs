"use strict";
const finite=(v,n="value")=>{const x=Number(v);if(!Number.isFinite(x))throw new RangeError(n+" must be finite");return x};
const integer=(v,n="value",min=Number.MIN_SAFE_INTEGER,max=Number.MAX_SAFE_INTEGER)=>{const x=finite(v,n);if(!Number.isSafeInteger(x)||x<min||x>max)throw new RangeError(n+" must be an integer from "+min+" to "+max);return x};
const nonzero=(v,n="value")=>{const x=finite(v,n);if(x===0)throw new RangeError(n+" cannot be zero");return x};
const positive=(v,n="value")=>{const x=finite(v,n);if(x<=0)throw new RangeError(n+" must be positive");return x};
const gcd=(a,b)=>{a=Math.abs(integer(a,"a"));b=Math.abs(integer(b,"b"));while(b)[a,b]=[b,a%b];return a};
const list=v=>{const s=String(v??"").trim();if(!s)throw new RangeError("Enter one or more comma-separated values");const a=s.split(/[\s,;]+/).map(Number);if(a.some(x=>!Number.isFinite(x)))throw new RangeError("Values must all be finite numbers");return a};
const mean=a=>a.reduce((s,x)=>s+x,0)/a.length;
const median=a=>{a=[...a].sort((x,y)=>x-y);let m=a.length>>1;return a.length%2?a[m]:(a[m-1]+a[m])/2};
const factorial=n=>{n=integer(n,"n",0,170);let x=1;for(let i=2;i<=n;i++)x*=i;return x};
const choose=(n,k)=>{n=integer(n,"n",0,170);k=integer(k,"k",0,n);let r=1;k=Math.min(k,n-k);for(let i=1;i<=k;i++)r=r*(n-k+i)/i;return Math.round(r)};
const M={
 arithmetic({a,b,operation="add"}){a=finite(a,"a");b=finite(b,"b");if(operation==="add")return a+b;if(operation==="subtract")return a-b;if(operation==="multiply")return a*b;if(operation==="divide")return a/nonzero(b,"b");if(operation==="modulo")return ((a%nonzero(b,"b"))+Math.abs(b))%Math.abs(b);throw new RangeError("Unknown operation")},
 absoluteValue({x}){return Math.abs(finite(x,"x"))},
 reciprocal({x}){return 1/nonzero(x,"x")},
 fractionToDecimal({numerator,denominator}){return finite(numerator,"numerator")/nonzero(denominator,"denominator")},
 percentageOf({value,percent}){return finite(value)*finite(percent)/100},
 percentageChange({oldValue,newValue}){const a=finite(oldValue,"oldValue");if(a===0)throw new RangeError("Original value cannot be zero");return (finite(newValue,"newValue")-a)/Math.abs(a)*100},
 percentageDifference({a,b}){a=finite(a,"a");b=finite(b,"b");const d=(Math.abs(a)+Math.abs(b))/2;if(!d)throw new RangeError("Undefined when both values are zero");return Math.abs(a-b)/d*100},
 reversePercentage({part,percent}){return finite(part)/(nonzero(percent,"percent")/100)},
 ratioSimplifier({a,b}){a=integer(a,"a");b=integer(b,"b");if(a===0&&b===0)throw new RangeError("0:0 is undefined");const g=gcd(a,b);return a/g+":"+b/g},
 gcd({a,b}){return gcd(a,b)},
 lcm({a,b}){a=integer(a,"a");b=integer(b,"b");return !a||!b?0:Math.abs(a/gcd(a,b)*b)},
 primeCheck({n}){n=integer(n,"n",0);if(n<2)return false;for(let i=2;i<=Math.sqrt(n);i++)if(n%i===0)return false;return true},
 primeFactorization({n}){n=integer(n,"n",2);let v=n,out=[];for(let p=2;p*p<=v;p++)if(v%p===0){let e=0;while(v%p===0){v/=p;e++}out.push([p,e])}if(v>1)out.push([v,1]);return out},
 factors({n}){n=integer(n,"n",1,100000000);let o=[];for(let i=1;i<=Math.sqrt(n);i++)if(n%i===0){o.push(i);if(i!==n/i)o.push(n/i)}return o.sort((a,b)=>a-b)},
 factorial({n}){return factorial(n)},
 permutation({n,k}){n=integer(n,"n",0,170);k=integer(k,"k",0,n);return factorial(n)/factorial(n-k)},
 combination({n,k}){return choose(n,k)},
 power({base,exponent}){const r=finite(base)**finite(exponent);if(!Number.isFinite(r))throw new RangeError("Result is not finite");return r},
 root({value,index=2}){value=finite(value);index=integer(index,"index",1,99);if(value<0&&index%2===0)throw new RangeError("Even root of a negative value is not real");return value<0?-Math.pow(-value,1/index):Math.pow(value,1/index)},
 logarithm({value,base=Math.E}){value=positive(value);base=positive(base,"base");if(base===1)throw new RangeError("Base cannot equal one");return Math.log(value)/Math.log(base)},
 linear({a,b}){a=finite(a,"a");if(a===0)throw new RangeError("Coefficient cannot be zero");return -finite(b,"b")/a},
 quadratic({a,b,c}){a=finite(a,"a");b=finite(b,"b");c=finite(c,"c");if(a===0)throw new RangeError("Quadratic coefficient cannot be zero");const d=b*b-4*a*c;if(d<0)return {discriminant:d,roots:[]};const s=Math.sqrt(d);return {discriminant:d,roots:d===0?[-b/(2*a)]:[(-b-s)/(2*a),(-b+s)/(2*a)]}},
 mean({values}){return mean(list(values))},
 median({values}){return median(list(values))},
 variance({values,sample=false}){const a=list(values);if(sample&&a.length<2)throw new RangeError("Sample variance requires two values");const m=mean(a);return a.reduce((s,x)=>s+(x-m)**2,0)/(a.length-(sample?1:0))},
 standardDeviation({values,sample=false}){return Math.sqrt(M.variance({values,sample}))},
 weightedMean({values,weights}){const a=list(values),w=list(weights);if(a.length!==w.length)throw new RangeError("Values and weights must have same length");const d=w.reduce((s,x)=>s+x,0);if(!d)throw new RangeError("Weights sum cannot be zero");return a.reduce((s,x,i)=>s+x*w[i],0)/d},
 slope({x1,y1,x2,y2}){const dx=finite(x2)-finite(x1);if(!dx)throw new RangeError("Vertical line slope is undefined");return (finite(y2)-finite(y1))/dx},
 distance2D({x1,y1,x2,y2}){return Math.hypot(finite(x2)-finite(x1),finite(y2)-finite(y1))},
 midpoint2D({x1,y1,x2,y2}){return [(finite(x1)+finite(x2))/2,(finite(y1)+finite(y2))/2]},
 triangleArea({base,height}){return finite(base)*finite(height)/2},
 heronArea({a,b,c}){a=positive(a,"a");b=positive(b,"b");c=positive(c,"c");if(a+b<=c||a+c<=b||b+c<=a)throw new RangeError("Sides do not form a triangle");const s=(a+b+c)/2;return Math.sqrt(s*(s-a)*(s-b)*(s-c))},
 circleArea({radius}){radius=finite(radius,"radius");if(radius<0)throw new RangeError("Radius cannot be negative");return Math.PI*radius**2},
 circleCircumference({radius}){radius=finite(radius,"radius");if(radius<0)throw new RangeError("Radius cannot be negative");return 2*Math.PI*radius},
 rectangleArea({length,width}){length=finite(length);width=finite(width);if(length<0||width<0)throw new RangeError("Dimensions cannot be negative");return length*width},
 pythagorean({a,b}){return Math.hypot(positive(a,"a"),positive(b,"b"))},
 degreeRadian({value,direction="deg2rad"}){value=finite(value);if(direction==="deg2rad")return value*Math.PI/180;if(direction==="rad2deg")return value*180/Math.PI;throw new RangeError("Unknown direction")},
 sine({angle,unit="deg"}){return Math.sin(finite(angle)*(unit==="deg"?Math.PI/180:1))},
 cosine({angle,unit="deg"}){return Math.cos(finite(angle)*(unit==="deg"?Math.PI/180:1))},
 tangent({angle,unit="deg"}){const r=finite(angle)*(unit==="deg"?Math.PI/180:1);if(Math.abs(Math.cos(r))<1e-12)throw new RangeError("Tangent undefined for this angle");return Math.tan(r)},
 matrixDet2({a,b,c,d}){return finite(a)*finite(d)-finite(b)*finite(c)},
 vectorMagnitude({values}){return Math.hypot(...list(values))},
 dotProduct({a,b}){const x=list(a),y=list(b);if(x.length!==y.length)throw new RangeError("Vectors must have same length");return x.reduce((s,v,i)=>s+v*y[i],0)},
 averageSpeed({distance,time}){distance=finite(distance);if(distance<0)throw new RangeError("Distance cannot be negative");return distance/positive(time,"time")}
};
if(typeof module!=="undefined")module.exports={M};
