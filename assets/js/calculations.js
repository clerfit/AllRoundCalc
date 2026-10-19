(function (root) {
  "use strict";
  const definitions = [
    {id:"basic-arithmetic",name:"Basic Arithmetic Calculator",group:"Arithmetic",description:"Evaluate two-number arithmetic with an explicit operation.",fields:[["a","First number"],["b","Second number"]],formula:"a + b, a − b, a × b, or a ÷ b",example:"12 + 5 = 17"},
    {id:"fraction-calculator",name:"Fraction Calculator",group:"Arithmetic",description:"Add, subtract, multiply, or divide two fractions and simplify the result.",fields:[["a","Numerator A"],["b","Denominator A"],["c","Numerator B"],["d","Denominator B"]],formula:"a/b ± c/d = (ad ± bc)/bd; multiplication = ac/bd; division = ad/bc",example:"1/2 + 1/3 = 5/6"},
    {id:"decimal-calculator",name:"Decimal Calculator",group:"Arithmetic",description:"Perform arithmetic on decimal values.",fields:[["a","First decimal"],["b","Second decimal"]],formula:"Selected arithmetic operation on a and b",example:"2.75 + 1.60 = 4.35"},
    {id:"powers",name:"Exponents and Powers",group:"Arithmetic",description:"Calculate a base raised to an exponent.",fields:[["base","Base"],["exponent","Exponent"]],formula:"y = base^exponent",example:"2^5 = 32"},
    {id:"roots",name:"Square Root and Nth Root",group:"Arithmetic",description:"Calculate a real nth root.",fields:[["value","Radicand"],["index","Root index (integer)"]],formula:"y = nth root of x",example:"√144 = 12"},
    {id:"absolute-value",name:"Absolute Value",group:"Arithmetic",description:"Find the non-negative magnitude of a real number.",fields:[["x","Number"]],formula:"|x| = x if x ≥ 0, otherwise −x",example:"|-18| = 18"},
    {id:"percentage",name:"Percentage Calculator",group:"Percentages & money",description:"Find a percentage of a value.",fields:[["value","Base value"],["rate","Percentage (%)"]],formula:"result = value × rate / 100",example:"15% of 800 = 120"},
    {id:"percentage-change",name:"Percentage Increase / Decrease",group:"Percentages & money",description:"Compare an original value with a new value.",fields:[["old","Original value"],["next","New value"]],formula:"(new − original) / original × 100%",example:"200 to 250 = 25% increase"},
    {id:"discount",name:"Discount Calculator",group:"Percentages & money",description:"Calculate a single discount and final price.",fields:[["price","Original price"],["rate","Discount (%)"]],formula:"discount = price × rate / 100; final = price − discount",example:"₹1,500 less 20% = ₹1,200"},
    {id:"tax",name:"Tax Calculator",group:"Percentages & money",description:"Add tax to a pre-tax price or extract included tax.",fields:[["price","Price"],["rate","Tax rate (%)"]],formula:"Added: price × (1 + rate/100); included tax: total × rate/(100 + rate)",example:"₹1,000 plus 18% = ₹1,180"},
    {id:"tip-split",name:"Tip and Bill Split",group:"Percentages & money",description:"Add a tip calculated on the bill and split equally.",fields:[["bill","Bill amount"],["rate","Tip (%)"],["people","Number of people"]],formula:"tip = bill × rate/100; per person = (bill + tip)/people",example:"₹1,000 + 10%, split 4 ways = ₹275 each"},
    {id:"ratio-simplifier",name:"Ratio Simplifier",group:"Ratios & averages",description:"Reduce a ratio of two integers to lowest terms.",fields:[["a","First integer"],["b","Second integer"]],formula:"Divide both terms by their greatest common divisor",example:"24:36 = 2:3"},
    {id:"proportion",name:"Proportion Calculator",group:"Ratios & averages",description:"Solve a/b = c/d for d.",fields:[["a","a"],["b","b"],["c","c"]],formula:"d = (b × c) / a, for a ≠ 0",example:"3/90 = 5/d gives d = 150"},
    {id:"proportion-type",name:"Direct / Inverse Proportion",group:"Ratios & averages",description:"Estimate a new y when x changes, under a selected relationship.",fields:[["x","Known x"],["y","Known y"],["newX","New x"]],formula:"Direct: new y = y × new x/x; inverse: new y = y × x/new x",example:"Direct: y=10 at x=2 gives y=25 at x=5"},
    {id:"mean",name:"Arithmetic Mean",group:"Ratios & averages",description:"Calculate the mean of a comma-separated list of finite numbers.",fields:[["values","Values (comma-separated)"]],formula:"mean = sum(values) / count(values)",example:"10, 20, 30 → 20"},
    {id:"weighted-mean",name:"Weighted Average",group:"Ratios & averages",description:"Calculate a weighted mean from matching value and weight lists.",fields:[["values","Values (comma-separated)"],["weights","Weights (comma-separated)"]],formula:"sum(value × weight) / sum(weights)",example:"80 (weight 2), 90 (weight 3) → 86"},
    {id:"rounding",name:"Rounding and Precision",group:"Precision & notation",description:"Round a value to decimal places using half-away-from-zero for exact ties.",fields:[["value","Number"],["digits","Decimal places (0–12)"]],formula:"Round to the requested decimal place; exact ties away from zero",example:"2.345 to 2 places → 2.35"},
    {id:"scientific-notation",name:"Scientific Notation",group:"Precision & notation",description:"Express a nonzero number as a × 10ⁿ with 1 ≤ |a| < 10.",fields:[["value","Number"]],formula:"value = coefficient × 10^exponent",example:"45000 = 4.5 × 10⁴"},
    {id:"significant-figures",name:"Significant Figures",group:"Precision & notation",description:"Round a number to a requested number of significant figures.",fields:[["value","Number"],["digits","Significant figures (1–15)"]],formula:"Round at the place implied by the requested significant figures",example:"1234 to 3 significant figures → 1230"},
    {id:"base-converter",name:"Integer Base Converter",group:"Precision & notation",description:"Convert an integer between bases 2 and 36.",fields:[["value","Integer"],["fromBase","Input base (2–36)"],["toBase","Output base (2–36)"]],formula:"Represent the same integer in a different positional base",example:"25₁₀ = 11001₂"},
    {id:"gcd-lcm",name:"GCD and LCM",group:"Factors & multiples",description:"Calculate greatest common divisor and least common multiple for integers.",fields:[["a","First integer"],["b","Second integer"]],formula:"LCM(a,b) = |a × b| / GCD(a,b), when GCD ≠ 0",example:"GCD(12,18)=6; LCM=36"},
    {id:"prime-check",name:"Prime Number Checker",group:"Factors & multiples",description:"Check whether an integer greater than 1 is prime.",fields:[["n","Integer"]],formula:"Test integer divisors up to floor(√n)",example:"29 is prime"},
    {id:"prime-factorization",name:"Prime Factorization",group:"Factors & multiples",description:"Express an integer greater than one as prime powers.",fields:[["n","Integer greater than 1"]],formula:"Repeatedly divide by prime factors",example:"360 = 2³ × 3² × 5"},
    {id:"factors-multiples",name:"Factors and Multiples",group:"Factors & multiples",description:"List positive factors or the first multiples of a positive integer.",fields:[["n","Positive integer"],["limit","Maximum results (1–100)"]],formula:"Factors divide n with zero remainder; multiples are k × n",example:"Factors of 12: 1, 2, 3, 4, 6, 12"},
    {id:"modulo",name:"Modulo and Remainder",group:"Numerical tools",description:"Find the Euclidean remainder for integer inputs; remainder is 0 ≤ r < |b|.",fields:[["a","Dividend (integer)"],["b","Divisor (non-zero integer)"]],formula:"a = bq + r, with 0 ≤ r < |b|",example:"−7 mod 3 = 2 under Euclidean modulo"},
    {id:"reciprocal",name:"Reciprocal",group:"Numerical tools",description:"Calculate the multiplicative inverse of a nonzero real number.",fields:[["x","Number (non-zero)"]],formula:"reciprocal = 1/x",example:"1/0.25 = 4"},
    {id:"ratio-percentage",name:"Ratio to Percentages",group:"Numerical tools",description:"Convert two non-negative ratio parts into shares of their total.",fields:[["a","First part"],["b","Second part"]],formula:"share A = a/(a+b) × 100%; share B = b/(a+b) × 100%",example:"2:3 → 40% and 60%"},
    {id:"compare-difference",name:"Number Comparison and Difference",group:"Numerical tools",description:"Compare two values and calculate signed and absolute difference.",fields:[["a","First number"],["b","Second number"]],formula:"signed difference = a − b; absolute difference = |a − b|",example:"10 and 7 → difference 3"}
  ];
  const byId = Object.fromEntries(definitions.map(item => [item.id, item]));
  function finite(v, label) {
    if (v === undefined || v === null || String(v).trim() === "") throw new Error(label + " is required.");
    const n = Number(v);
    if (!Number.isFinite(n)) throw new Error(label + " must be a finite number.");
    return n;
  }
  function integer(v, label, min, max) {
    const n = finite(v, label);
    if (!Number.isSafeInteger(n)) throw new Error(label + " must be a safe integer.");
    if (min !== undefined && n < min) throw new Error(label + " must be at least " + min + ".");
    if (max !== undefined && n > max) throw new Error(label + " must be at most " + max + ".");
    return n;
  }
  function list(v, label) {
    if (v === undefined || String(v).trim() === "") throw new Error(label + " is required.");
    const parts = String(v).split(",").map(s => s.trim());
    if (parts.some(s => !s)) throw new Error(label + " contains an empty item.");
    return parts.map((s, i) => finite(s, label + " item " + (i + 1)));
  }
  function gcd(a,b) {
    a = Math.abs(a); b = Math.abs(b);
    while (b) { const r = a % b; a = b; b = r; }
    return a;
  }
  function gcdBig(a,b) { if(a<0n)a=-a; if(b<0n)b=-b; while(b!==0n){const r=a%b;a=b;b=r;} return a; }
  function fmt(n) {
    if (typeof n !== "number" || !Number.isFinite(n)) return String(n);
    if (Object.is(n, -0)) n = 0;
    return Number(n.toPrecision(12)).toString();
  }
  function calculate(id, v) {
    const def = byId[id];
    if (!def) throw new Error("Unknown calculator.");
    let result, formula = def.formula, note = "";
    switch (id) {
      case "basic-arithmetic":
      case "decimal-calculator": {
        const a=finite(v.a,"First number"), b=finite(v.b,"Second number"), op=v.operation || "add";
        if (op==="divide" && b===0) throw new Error("Division by zero is undefined.");
        result = ({add:a+b,subtract:a-b,multiply:a*b,divide:a/b})[op];
        if (result === undefined) throw new Error("Choose a valid operation.");
        formula = ({add:"a + b",subtract:"a − b",multiply:"a × b",divide:"a ÷ b"})[op]; break;
      }
      case "fraction-calculator": {
        const a=BigInt(integer(v.a,"Numerator A")), b=BigInt(integer(v.b,"Denominator A")), c=BigInt(integer(v.c,"Numerator B")), d=BigInt(integer(v.d,"Denominator B")), op=v.operation||"add";
        if (b===0n||d===0n) throw new Error("Fraction denominators cannot be zero.");
        let n, den;
        if(op==="add"){n=a*d+c*b;den=b*d;} else if(op==="subtract"){n=a*d-c*b;den=b*d;} else if(op==="multiply"){n=a*c;den=b*d;} else if(op==="divide"){if(c===0n)throw new Error("Cannot divide by a zero fraction.");n=a*d;den=b*c;} else throw new Error("Choose a valid operation.");
        if(den<0n){n=-n;den=-den;} const g=gcdBig(n,den); result=(n/g).toString()+"/"+(den/g).toString(); note="Exact integer fraction simplified using integer arithmetic."; formula="Selected operation, followed by division of numerator and denominator by their GCD"; break;
      }
      case "powers": { const a=finite(v.base,"Base"), e=finite(v.exponent,"Exponent"); result=Math.pow(a,e); if(!Number.isFinite(result)) throw new Error("The result is outside the supported finite-number range."); if(a===0&&e===0) note="0⁰ is indeterminate in many mathematical contexts; this tool follows JavaScript's convention and returns 1."; break; }
      case "roots": { const x=finite(v.value,"Radicand"), n=integer(v.index,"Root index",1,99); if(x<0&&n%2===0) throw new Error("An even root of a negative number is not real."); result=x<0?-Math.pow(-x,1/n):Math.pow(x,1/n); break; }
      case "absolute-value": result=Math.abs(finite(v.x,"Number")); break;
      case "percentage": result=finite(v.value,"Base value")*finite(v.rate,"Percentage")/100; break;
      case "percentage-change": {const a=finite(v.old,"Original value"), b=finite(v.next,"New value");if(a===0)throw new Error("Percentage change is undefined when the original value is zero.");result=(b-a)/a*100;formula="(new − original) / original × 100%";note="A negative result indicates a decrease relative to the signed original value.";break;}
      case "discount": {const p=finite(v.price,"Original price"),r=finite(v.rate,"Discount rate");if(p<0||r<0||r>100)throw new Error("Price must be non-negative and discount must be between 0% and 100%.");const discount=p*r/100;result="Discount: "+fmt(discount)+"; final price: "+fmt(p-discount);break;}
      case "tax": {const p=finite(v.price,"Price"),r=finite(v.rate,"Tax rate");if(p<0||r<0)throw new Error("Price and tax rate must be non-negative.");if(v.mode==="included"){const before=p/(1+r/100);result="Pre-tax price: "+fmt(before)+"; included tax: "+fmt(p-before);formula="Pre-tax = inclusive price / (1 + rate/100)";}else{result="Tax: "+fmt(p*r/100)+"; total: "+fmt(p*(1+r/100));formula="Tax = price × rate/100; total = price + tax";}break;}
      case "tip-split": {const bill=finite(v.bill,"Bill"),r=finite(v.rate,"Tip rate"),p=integer(v.people,"Number of people",1,100000);if(bill<0||r<0)throw new Error("Bill and tip rate must be non-negative.");const tip=bill*r/100;result="Tip: "+fmt(tip)+"; total: "+fmt(bill+tip)+"; each person: "+fmt((bill+tip)/p);break;}
      case "ratio-simplifier": {const a=integer(v.a,"First ratio term"),b=integer(v.b,"Second ratio term");if(a===0&&b===0)throw new Error("The ratio 0:0 is undefined.");const g=gcd(a,b);result=(a/g)+":"+(b/g);break;}
      case "proportion": {const a=finite(v.a,"a"),b=finite(v.b,"b"),c=finite(v.c,"c");if(a===0)throw new Error("a must be non-zero to solve d = bc/a.");result=fmt(b*c/a);formula="d = (b × c) / a";break;}
      case "proportion-type": {const x=finite(v.x,"Known x"),y=finite(v.y,"Known y"),nx=finite(v.newX,"New x");if(x===0)throw new Error("Known x must be non-zero.");if(v.mode==="inverse"){if(nx===0)throw new Error("New x must be non-zero for inverse proportion.");result=y*x/nx;formula="new y = y × x / new x";}else{result=y*nx/x;formula="new y = y × new x / x";}note="The relationship is an assumption selected by the user, not inferred from data.";break;}
      case "mean": {const xs=list(v.values,"Values");result=xs.reduce((s,n)=>s+n,0)/xs.length;break;}
      case "weighted-mean": {const xs=list(v.values,"Values"),ws=list(v.weights,"Weights");if(xs.length!==ws.length)throw new Error("Values and weights must contain the same number of items.");if(ws.some(w=>w<0))throw new Error("Weights must be non-negative.");const sum=ws.reduce((s,n)=>s+n,0);if(sum===0)throw new Error("The sum of weights must be greater than zero.");result=xs.reduce((s,n,i)=>s+n*ws[i],0)/sum;break;}
      case "rounding": {const x=finite(v.value,"Number"),d=integer(v.digits,"Decimal places",0,12),factor=10**d;result=Math.sign(x)*Math.round((Math.abs(x)+Number.EPSILON)*factor)/factor;formula="Round to "+d+" decimal place(s), exact ties away from zero";note="Floating-point values may not represent decimal ties exactly; this is a display-oriented numeric rounding helper.";break;}
      case "scientific-notation": {const x=finite(v.value,"Number");if(x===0){result="0 × 10⁰";break;}const parts=x.toExponential().split("e");result=fmt(Number(parts[0]))+" × 10^"+Number(parts[1]);break;}
      case "significant-figures": {const x=finite(v.value,"Number"),d=integer(v.digits,"Significant figures",1,15);result=x.toPrecision(d);formula="Round to "+d+" significant figure(s)";note="Trailing zeros are shown where the output format preserves them.";break;}
      case "base-converter": {const raw=String(v.value||"").trim(),from=integer(v.fromBase,"Input base",2,36),to=integer(v.toBase,"Output base",2,36);if(!/^[+-]?[0-9a-z]+$/i.test(raw))throw new Error("Enter a signed integer using digits and letters only.");const n=parseInt(raw,from);if(!Number.isSafeInteger(n)||n.toString(from)!==raw.toLowerCase().replace(/^\+/,"").replace(/^(-?)0+(?=\d)/,"$1"))throw new Error("Input is invalid for the selected base or exceeds safe integer precision.");result=n.toString(to).toUpperCase();formula="Parse the integer in base "+from+" and represent it in base "+to;break;}
      case "gcd-lcm": {const a=integer(v.a,"First integer"),b=integer(v.b,"Second integer");const g=gcd(a,b);const lcm=g===0?0:Math.abs((a/g)*b);if(!Number.isSafeInteger(lcm))throw new Error("The LCM exceeds the exact integer range supported by this calculator.");if(a===0&&b===0)result="GCD(0,0) convention: 0; LCM(0,0) convention: 0";else result="GCD: "+g+"; LCM: "+lcm;note="This tool adopts GCD(0,0)=0 and LCM(0,0)=0 as explicit programming conventions.";break;}
      case "prime-check": {const n=integer(v.n,"Number",undefined,1000000000000);if(n<2){result="Not prime";break;}let prime=true;for(let d=2;d<=Math.sqrt(n);d++){if(n%d===0){prime=false;break;}}result=prime?"Prime":"Not prime";break;}
      case "prime-factorization": {let n=integer(v.n,"Number",2,1000000000000),original=n;const out=[];for(let d=2;d<=Math.sqrt(n);d+=(d===2?1:2)){let count=0;while(n%d===0){n/=d;count++;}if(count)out.push(count===1?String(d):d+"^"+count);}if(n>1)out.push(String(n));result=original+" = "+out.join(" × ");break;}
      case "factors-multiples": {const n=integer(v.n,"Number",1,1000000000000),limit=integer(v.limit,"Maximum results",1,100);if(v.mode==="multiples"){result=Array.from({length:limit},(_,i)=>(i+1)*n).join(", ");formula="Multiples are k × n for k = 1…limit";}else{const out=[];for(let i=1;i<=Math.sqrt(n);i++){if(n%i===0){out.push(i);if(i!==n/i)out.push(n/i);if(out.length>200)throw new Error("Too many factors to display safely.");}}result=out.sort((a,b)=>a-b).join(", ");formula="Positive integers that divide n exactly";}break;}
      case "modulo": {const a=integer(v.a,"Dividend"),b=integer(v.b,"Divisor");if(b===0)throw new Error("Divisor cannot be zero.");result=((a%Math.abs(b))+Math.abs(b))%Math.abs(b);formula="Euclidean modulo: r = ((a mod |b|) + |b|) mod |b|";break;}
      case "reciprocal": {const x=finite(v.x,"Number");if(x===0)throw new Error("Zero has no reciprocal.");result=1/x;break;}
      case "ratio-percentage": {const a=finite(v.a,"First part"),b=finite(v.b,"Second part");if(a<0||b<0||a+b===0)throw new Error("Parts must be non-negative and their sum must be greater than zero.");result="First part: "+fmt(a/(a+b)*100)+"%; second part: "+fmt(b/(a+b)*100)+"%";break;}
      case "compare-difference": {const a=finite(v.a,"First number"),b=finite(v.b,"Second number");result="Comparison: "+(a===b?"equal":a>b?"first is greater":"second is greater")+"; signed difference (a−b): "+fmt(a-b)+"; absolute difference: "+fmt(Math.abs(a-b));break;}
      default: throw new Error("Calculator not implemented.");
    }
    if(typeof result==="number"&&!Number.isFinite(result)) throw new Error("The result is outside the supported finite-number range.");
    return {result:typeof result==="number"?fmt(result):String(result),formula,note,definition:def};
  }
  const api={definitions,calculate};
  if(typeof module!=="undefined"&&module.exports) module.exports=api;
  root.AllRoundCalculations=api;
})(typeof globalThis!=="undefined"?globalThis:this);
