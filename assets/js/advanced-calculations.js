(function (root) {
  "use strict";
  const definitions = [
    {id:"linear-equation",name:"Linear Equation Solver",group:"Algebra",description:"Solve ax + b = c for x.",fields:[["a","Coefficient a"],["b","Constant b"],["c","Right-hand side c"]],formula:"x = (c − b) / a, where a ≠ 0",example:"3x + 2 = 11 → x = 3"},
    {id:"quadratic-equation",name:"Quadratic Equation Solver",group:"Algebra",description:"Solve ax² + bx + c = 0 and identify real or complex roots.",fields:[["a","Coefficient a"],["b","Coefficient b"],["c","Coefficient c"]],formula:"D = b² − 4ac; x = (−b ± √D) / (2a), where a ≠ 0",example:"x² − 3x + 2 = 0 → roots 2 and 1"},
    {id:"linear-system-2x2",name:"Two-Variable Linear System",group:"Algebra",description:"Solve two simultaneous linear equations when a unique solution exists.",fields:[["a1","Equation 1 coefficient of x"],["b1","Equation 1 coefficient of y"],["c1","Equation 1 right-hand side"],["a2","Equation 2 coefficient of x"],["b2","Equation 2 coefficient of y"],["c2","Equation 2 right-hand side"]],formula:"Δ = a₁b₂ − a₂b₁; x = (c₁b₂ − c₂b₁)/Δ; y = (a₁c₂ − a₂c₁)/Δ, for Δ ≠ 0",example:"2x + y = 7; x − 2y = 6 → x = 4, y = −1"},
    {id:"logarithm",name:"Logarithm Calculator",group:"Exponents & logarithms",description:"Calculate a logarithm at a selected valid base.",fields:[["x","Positive argument x"],["base","Logarithm base b"]],formula:"logᵦ(x) = ln(x) / ln(b); x > 0, b > 0, b ≠ 1",example:"log₁₀(1000) = 3"},
    {id:"exponential-equation",name:"Exponential Equation Solver",group:"Exponents & logarithms",description:"Solve k·bˣ = t for x over the real numbers.",fields:[["coefficient","Coefficient k"],["base","Base b"],["target","Target t"]],formula:"x = ln(t/k) / ln(b), when t/k > 0, b > 0, b ≠ 1 and k ≠ 0",example:"2·3ˣ = 54 → x = 3"},
    {id:"trigonometry",name:"Trigonometry Calculator",group:"Trigonometry",description:"Evaluate sine, cosine, or tangent using an explicit angle unit.",fields:[["angle","Angle"]],formula:"sin(θ), cos(θ), or tan(θ); degree inputs are converted to radians before evaluation",example:"sin(30°) = 0.5"},
    {id:"inverse-trigonometry",name:"Inverse Trigonometry Calculator",group:"Trigonometry",description:"Find the principal inverse sine, cosine, or tangent angle.",fields:[["value","Function input"]],formula:"asin(x) for −1 ≤ x ≤ 1; acos(x) for −1 ≤ x ≤ 1; atan(x) for real x",example:"asin(0.5) = 30° = π/6 radians"},
    {id:"angle-converter",name:"Degree and Radian Converter",group:"Trigonometry",description:"Convert an angle entered in degrees to radians.",fields:[["angle","Angle in degrees"]],formula:"Radians = degrees × π / 180",example:"180° = π radians"},
    {id:"slope",name:"Slope of a Line",group:"Coordinate geometry",description:"Calculate slope from two points in the Cartesian plane.",fields:[["x1","Point 1 x"],["y1","Point 1 y"],["x2","Point 2 x"],["y2","Point 2 y"]],formula:"m = (y₂ − y₁) / (x₂ − x₁), when x₂ ≠ x₁",example:"(1, 2) and (3, 6) → slope 2"},
    {id:"distance-midpoint",name:"Distance and Midpoint",group:"Coordinate geometry",description:"Calculate Euclidean distance and midpoint between two points.",fields:[["x1","Point 1 x"],["y1","Point 1 y"],["x2","Point 2 x"],["y2","Point 2 y"]],formula:"d = √((x₂−x₁)²+(y₂−y₁)²); M = ((x₁+x₂)/2, (y₁+y₂)/2)",example:"(0, 0) and (3, 4) → distance 5; midpoint (1.5, 2)"},
    {id:"circle",name:"Circle Area and Circumference",group:"Coordinate geometry",description:"Calculate circle area and circumference from its radius.",fields:[["radius","Radius r (non-negative)"]],formula:"Area = πr²; circumference = 2πr",example:"r = 2 → area ≈ 12.5664; circumference ≈ 12.5664"},
    {id:"arithmetic-sequence",name:"Arithmetic Sequence and Series",group:"Sequences & series",description:"Calculate the nth term and sum of the first n arithmetic-sequence terms.",fields:[["first","First term a₁"],["difference","Common difference d"],["n","Term count n (positive integer)"]],formula:"aₙ = a₁ + (n−1)d; Sₙ = n(a₁+aₙ)/2",example:"a₁ = 3, d = 2, n = 5 → a₅ = 11; S₅ = 35"},
    {id:"geometric-sequence",name:"Geometric Sequence and Series",group:"Sequences & series",description:"Calculate the nth term and finite sum of a geometric sequence.",fields:[["first","First term a₁"],["ratio","Common ratio r"],["n","Term count n (positive integer)"]],formula:"aₙ = a₁rⁿ⁻¹; Sₙ = a₁(1−rⁿ)/(1−r) for r ≠ 1; if r = 1, Sₙ = na₁",example:"a₁ = 2, r = 3, n = 4 → a₄ = 54; S₄ = 80"},
    {id:"polynomial-derivative",name:"Polynomial Differentiation",group:"Calculus",description:"Differentiate a polynomial specified by coefficients in descending-power order.",fields:[["coefficients","Polynomial coefficients (comma-separated, highest power first)"]],formula:"Term by term: d(cxⁿ)/dx = cnxⁿ⁻¹; derivative of a constant is 0",example:"2, 3, 4 represents 2x² + 3x + 4 → derivative 4x + 3"},
    {id:"polynomial-integral",name:"Polynomial Definite Integral",group:"Calculus",description:"Numerically evaluate the definite integral of a polynomial between two bounds.",fields:[["coefficients","Polynomial coefficients (comma-separated, highest power first)"],["lower","Lower bound a"],["upper","Upper bound b"]],formula:"∫ₐᵇ cxⁿ dx = c(bⁿ⁺¹ − aⁿ⁺¹)/(n+1), term by term for integer n ≥ 0",example:"∫₀³ x² dx = 9"},
    {id:"complex-numbers",name:"Complex Number Calculator",group:"Complex numbers & matrices",description:"Add, subtract, multiply, or divide two complex numbers a + bi and c + di.",fields:[["a","First real part a"],["b","First imaginary coefficient b"],["c","Second real part c"],["d","Second imaginary coefficient d"]],formula:"i² = −1; division uses the conjugate of the non-zero denominator",example:"(1 + 2i) + (3 + 4i) = 4 + 6i"},
    {id:"matrix-2x2",name:"2×2 Matrix Determinant and Inverse",group:"Complex numbers & matrices",description:"Calculate a matrix determinant and, when possible, its inverse.",fields:[["a","Matrix element a (top left)"],["b","Matrix element b (top right)"],["c","Matrix element c (bottom left)"],["d","Matrix element d (bottom right)"]],formula:"det(A) = ad − bc; A⁻¹ = (1/det(A))[[d, −b], [−c, a]] when det(A) ≠ 0",example:"A = [[1, 2], [3, 4]] → det(A) = −2"},
    {id:"vectors-2d",name:"2D Vector Calculator",group:"Vectors",description:"Calculate vector dot product, magnitudes, and angle between two 2D vectors.",fields:[["ux","Vector u x-component"],["uy","Vector u y-component"],["vx","Vector v x-component"],["vy","Vector v y-component"]],formula:"u·v = uₓvₓ + uᵧvᵧ; |u| = √(uₓ²+uᵧ²); cos θ = (u·v)/(|u||v|)",example:"u = (1, 2), v = (3, 4) → dot product 11"}
    {id:"pythagorean-theorem",name:"Pythagorean Theorem",group:"Geometry",description:"Find the hypotenuse or a missing leg of a right triangle.",fields:[["a","Leg a"],["b","Leg b"],["hypotenuse","Hypotenuse c (0 to find c)"]],formula:"c = √(a² + b²); a = √(c² − b²); b = √(c² − a²)",example:"Legs 3 and 4 → hypotenuse 5"},
    {id:"cylinder-volume",name:"Cylinder Volume and Surface Area",group:"Geometry & mensuration",description:"Calculate a cylinder's volume and total surface area.",fields:[["radius","Radius"],["height","Height"]],formula:"V = πr²h; A = 2πr(r + h)",example:"r = 2, h = 5 → V ≈ 62.8319"},
    {id:"sphere-volume",name:"Sphere Volume and Surface Area",group:"Geometry & mensuration",description:"Calculate a sphere's volume and surface area.",fields:[["radius","Radius"]],formula:"V = 4πr³/3; A = 4πr²",example:"r = 3 → V ≈ 113.0973; A ≈ 113.0973"},
    {id:"distance-3d",name:"3D Point Distance",group:"Coordinate geometry",description:"Find Euclidean distance between two points in three-dimensional space.",fields:[["x1","x₁"],["y1","y₁"],["z1","z₁"],["x2","x₂"],["y2","y₂"],["z2","z₂"]],formula:"d = √((x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²)",example:"(0,0,0) to (2,3,6) → 7"},
    {id:"cylinder-lateral-area",name:"Cylinder Lateral Surface Area",group:"Geometry & mensuration",description:"Calculate the curved surface area of a cylinder.",fields:[["radius","Radius"],["height","Height"]],formula:"A = 2πrh",example:"r = 2, h = 5 → A ≈ 62.8319"}
  ];
  const byId = Object.fromEntries(definitions.map(d => [d.id, d]));
  function num(v, label) {
    if (v === undefined || v === null || String(v).trim() === "") throw new Error(label + " is required.");
    const n = Number(v);
    if (!Number.isFinite(n)) throw new Error(label + " must be a finite number.");
    return n;
  }
  function int(v, label, min, max) {
    const n = num(v, label);
    if (!Number.isSafeInteger(n)) throw new Error(label + " must be a safe integer.");
    if (min !== undefined && n < min) throw new Error(label + " must be at least " + min + ".");
    if (max !== undefined && n > max) throw new Error(label + " must be at most " + max + ".");
    return n;
  }
  function fmt(v) {
    if (!Number.isFinite(v)) throw new Error("The result is outside the supported finite-number range.");
    if (Object.is(v, -0)) v = 0;
    return Number(v.toPrecision(12)).toString();
  }
  function coefficients(raw) {
    if (raw === undefined || String(raw).trim() === "") throw new Error("Polynomial coefficients are required.");
    const parts = String(raw).split(",").map(s => s.trim());
    if (parts.some(s => s === "")) throw new Error("Polynomial coefficients contain an empty item.");
    if (parts.length > 13) throw new Error("Polynomials are limited to degree 12 (13 coefficients).");
    return parts.map((s,i) => num(s, "Coefficient " + (i+1)));
  }
  function polynomial(terms) {
    if (terms.some(t => !Number.isFinite(t.coef))) {
      throw new Error("Polynomial coefficient operation exceeds the supported finite-number range.");
    }
    const active = terms.filter(t => t.coef !== 0);
    if (!active.length) return "0";
    return active.map((t,i) => {
      const negative = t.coef < 0;
      const value = Math.abs(t.coef);
      const coef = t.power === 0 || value !== 1 ? fmt(value) : "";
      const variable = t.power === 0 ? "" : t.power === 1 ? "x" : "x^" + t.power;
      const body = coef + variable;
      if (i === 0) return (negative ? "−" : "") + body;
      return (negative ? " − " : " + ") + body;
    }).join("");
  }
  function complexText(re, im) {
    if (im === 0) return fmt(re);
    if (re === 0) return (im < 0 ? "−" : "") + fmt(Math.abs(im)) + "i";
    return fmt(re) + (im < 0 ? " − " : " + ") + fmt(Math.abs(im)) + "i";
  }
  function calculate(id, v) {
    const def = byId[id];
    if (!def) throw new Error("Unknown advanced mathematics calculator.");
    let result, formula = def.formula, note = "";
    switch (id) {
      case "linear-equation": {
        const a=num(v.a,"Coefficient a"), b=num(v.b,"Constant b"), c=num(v.c,"Right-hand side c");
        if (a === 0) throw new Error("Coefficient a must not be zero; the equation is not a unique linear equation.");
        result = "x = " + fmt((c-b)/a); break;
      }
      case "quadratic-equation": {
        const a=num(v.a,"Coefficient a"), b=num(v.b,"Coefficient b"), c=num(v.c,"Coefficient c");
        if (a === 0) throw new Error("Coefficient a must not be zero for a quadratic equation.");
        const d=b*b-4*a*c;
        if (!Number.isFinite(d)) throw new Error("The discriminant is outside the supported numeric range.");
        if (d > 0) {
          const s = Math.sqrt(d);
          // Use the stable q form for one root and Vieta's product c/a for the other.
          const q = -0.5 * (b + (b >= 0 ? s : -s));
          const r1 = q === 0 ? (-b + s) / (2 * a) : q / a;
          const r2 = q === 0 ? (-b - s) / (2 * a) : c / q;
          result = "Discriminant: " + fmt(d) + "; roots: " + fmt(r1) + ", " + fmt(r2);
        }
        else if (d === 0) result="Discriminant: 0; repeated root: "+fmt(-b/(2*a));
        else { const re=-b/(2*a), im=Math.sqrt(-d)/(2*Math.abs(a)); result="Discriminant: "+fmt(d)+"; complex roots: "+complexText(re,im)+" and "+complexText(re,-im); }
        formula="D = b² − 4ac; roots = (−b ± √D)/(2a)"; break;
      }
      case "linear-system-2x2": {
        const a1=num(v.a1,"a₁"), b1=num(v.b1,"b₁"), c1=num(v.c1,"c₁"), a2=num(v.a2,"a₂"), b2=num(v.b2,"b₂"), c2=num(v.c2,"c₂");
        const delta=a1*b2-a2*b1, dx=c1*b2-c2*b1, dy=a1*c2-a2*c1;
        if (![delta,dx,dy].every(Number.isFinite)) throw new Error("Determinant overflow; reduce the scale of the inputs.");
        if (delta === 0) {
          // A zero coefficient row is consistent only when its right-hand side is zero.
          if ((a1 === 0 && b1 === 0 && c1 !== 0) || (a2 === 0 && b2 === 0 && c2 !== 0)) {
            throw new Error("The system is inconsistent and has no solution.");
          }
          // For dependent rows, both augmented minors must also be zero.
          if (a1*c2 === a2*c1 && b1*c2 === b2*c1) {
            throw new Error("The system does not have a unique solution (it has infinitely many solutions).");
          }
          throw new Error("The system is inconsistent and has no solution.");
        }
        result="x = "+fmt(dx/delta)+"; y = "+fmt(dy/delta); break;
      }
      case "logarithm": {
        const x=num(v.x,"Logarithm argument x"), b=num(v.base,"Base b");
        if (x<=0) throw new Error("The logarithm argument must be greater than zero.");
        if (b<=0 || b===1) throw new Error("The logarithm base must be positive and not equal to one.");
        result="log base "+fmt(b)+" of "+fmt(x)+" = "+fmt(Math.log(x)/Math.log(b)); break;
      }
      case "exponential-equation": {
        const k=num(v.coefficient,"Coefficient k"), b=num(v.base,"Base b"), t=num(v.target,"Target t");
        if (b<=0 || b===1) throw new Error("The exponential base must be positive and not equal to one.");
        if (k===0) throw new Error(t===0 ? "Every real x satisfies 0·bˣ = 0; there is no unique solution." : "A zero coefficient cannot equal a non-zero target.");
        const ratio=t/k;
        if (ratio<=0) throw new Error("Target divided by coefficient must be positive for a real logarithm.");
        result="x = "+fmt(Math.log(ratio)/Math.log(b)); break;
      }
      case "trigonometry": {
        const angle=num(v.angle,"Angle"), unit=v.unit||"degrees", fn=v.fn||"sin";
        if (!["degrees","radians"].includes(unit)) throw new Error("Choose degrees or radians.");
        if (!["sin","cos","tan"].includes(fn)) throw new Error("Choose sine, cosine, or tangent.");
        const rad=unit==="degrees"?angle*Math.PI/180:angle;
        if (fn==="tan" && Math.abs(Math.cos(rad))<1e-12) throw new Error("Tangent is undefined or numerically unstable at this angle (cosine is approximately zero).");
        result=fn+"("+fmt(angle)+(unit==="degrees"?"°":" rad")+") = "+fmt(Math[fn](rad));
        formula=fn+"(θ), with θ converted to radians when degrees are selected"; break;
      }
      case "inverse-trigonometry": {
        const x=num(v.value,"Function input"), fn=v.fn||"asin";
        if (!["asin","acos","atan"].includes(fn)) throw new Error("Choose inverse sine, inverse cosine, or inverse tangent.");
        if ((fn==="asin" || fn==="acos") && (x < -1 || x > 1)) throw new Error("Inverse sine and cosine require an input from −1 through 1.");
        const rad=Math[fn](x), deg=rad*180/Math.PI;
        result="Angle: "+fmt(deg)+"°; "+fmt(rad)+" radians";
        formula=fn+"(x); output is the principal angle in radians, also shown in degrees";
        note=fn==="asin"?"Principal range: −90° to 90°.":fn==="acos"?"Principal range: 0° to 180°.":"Principal range: greater than −90° and less than 90°.";
        break;
      }
      case "angle-converter": {
        const deg=num(v.angle,"Angle in degrees");
        result="Degrees: "+fmt(deg)+"; radians: "+fmt(deg*Math.PI/180); break;
      }
      case "slope": {
        const x1=num(v.x1,"x₁"), y1=num(v.y1,"y₁"), x2=num(v.x2,"x₂"), y2=num(v.y2,"y₂");
        if (x2===x1) throw new Error("Slope is undefined for a vertical line because x₂ − x₁ = 0.");
        result="Slope: "+fmt((y2-y1)/(x2-x1)); break;
      }
      case "distance-midpoint": {
        const x1=num(v.x1,"x₁"), y1=num(v.y1,"y₁"), x2=num(v.x2,"x₂"), y2=num(v.y2,"y₂");
        const distance=Math.hypot(x2-x1,y2-y1), mx=x1/2+x2/2, my=y1/2+y2/2;
        result="Distance: "+fmt(distance)+"; midpoint: ("+fmt(mx)+", "+fmt(my)+")";
        formula="Distance = √((x₂−x₁)²+(y₂−y₁)²); midpoint = ((x₁+x₂)/2, (y₁+y₂)/2)"; break;
      }
      case "circle": {
        const r=num(v.radius,"Radius");
        if (r<0) throw new Error("Radius must be non-negative.");
        result="Circumference: "+fmt(2*Math.PI*r)+"; area: "+fmt(Math.PI*r*r); break;
      }
      case "arithmetic-sequence": {
        const a=num(v.first,"First term"), d=num(v.difference,"Common difference"), n=int(v.n,"Term count",1,100000);
        const an=a+(n-1)*d, sum=n*(a+an)/2;
        result="nth term: "+fmt(an)+"; sum of first "+n+" terms: "+fmt(sum); break;
      }
      case "geometric-sequence": {
        const a=num(v.first,"First term"), r=num(v.ratio,"Common ratio"), n=int(v.n,"Term count",1,100000);
        const an=a*Math.pow(r,n-1), sum=r===1?n*a:a*(1-Math.pow(r,n))/(1-r);
        result="nth term: "+fmt(an)+"; sum of first "+n+" terms: "+fmt(sum); break;
      }
      case "polynomial-derivative": {
        const cs=coefficients(v.coefficients), degree=cs.length-1;
        const terms=cs.map((coef,i)=>({coef:coef*(degree-i),power:degree-i-1})).filter((t,i)=>degree-i>=1);
        result="f′(x) = "+polynomial(terms); formula="Differentiate every term: d(cxⁿ)/dx = cnxⁿ⁻¹; constants differentiate to zero"; break;
      }
      case "polynomial-integral": {
        const cs=coefficients(v.coefficients), lower=num(v.lower,"Lower bound"), upper=num(v.upper,"Upper bound");
        let total=0;
        cs.forEach((coef,i)=>{const p=cs.length-i; total+=coef*(Math.pow(upper,p)-Math.pow(lower,p))/p;});
        result="Definite integral: "+fmt(total); formula="Evaluate the polynomial antiderivative at upper bound and subtract its value at lower bound";
        note="Coefficients are entered in descending-power order. Numerical evaluation uses IEEE-754 floating-point arithmetic."; break;
      }
      case "complex-numbers": {
        const a=num(v.a,"First real part"), b=num(v.b,"First imaginary coefficient"), c=num(v.c,"Second real part"), d=num(v.d,"Second imaginary coefficient"), op=v.operation||"add";
        let re, im;
        if(op==="add"){re=a+c;im=b+d;formula="(a+bi)+(c+di) = (a+c)+(b+d)i";}
        else if(op==="subtract"){re=a-c;im=b-d;formula="(a+bi)−(c+di) = (a−c)+(b−d)i";}
        else if(op==="multiply"){re=a*c-b*d;im=a*d+b*c;formula="(a+bi)(c+di) = (ac−bd)+(ad+bc)i";}
        else if(op==="divide"){
          const scale=Math.max(Math.abs(c),Math.abs(d));
          if(scale===0)throw new Error("Cannot divide by zero complex number.");
          // Scale the divisor first to avoid squaring very large or tiny components.
          const cs=c/scale, ds=d/scale, den=cs*cs+ds*ds;
          re=((a/scale)*cs+(b/scale)*ds)/den;
          im=((b/scale)*cs-(a/scale)*ds)/den;
          formula="(a+bi)/(c+di) = ((ac+bd)+(bc−ad)i)/(c²+d²), evaluated with a scaled divisor to reduce overflow/underflow";
        }
        else throw new Error("Choose a valid complex-number operation.");
        result=complexText(re,im); break;
      }
      case "matrix-2x2": {
        const a=num(v.a,"Matrix element a"), b=num(v.b,"Matrix element b"), c=num(v.c,"Matrix element c"), d=num(v.d,"Matrix element d"), det=a*d-b*c;
        if(!Number.isFinite(det)) throw new Error("The determinant is outside the supported numeric range.");
        if(det===0){result="Determinant: 0; inverse: does not exist (singular matrix).";note="A matrix has an inverse only when its determinant is nonzero.";}
        else {result="Determinant: "+fmt(det)+"; inverse: [["+fmt(d/det)+", "+fmt(-b/det)+"], ["+fmt(-c/det)+", "+fmt(a/det)+"]]";}
        break;
      }
      case "vectors-2d": {
        const ux=num(v.ux,"u x-component"), uy=num(v.uy,"u y-component"), vx=num(v.vx,"v x-component"), vy=num(v.vy,"v y-component");
        const dot=ux*vx+uy*vy, mu=Math.hypot(ux,uy), mv=Math.hypot(vx,vy);
        let angle=mu===0||mv===0?"undefined (one vector has zero magnitude)":fmt(Math.acos(Math.max(-1,Math.min(1,dot/(mu*mv))))*180/Math.PI)+"°";
        result="Dot product: "+fmt(dot)+"; |u|: "+fmt(mu)+"; |v|: "+fmt(mv)+"; angle: "+angle;
        note="The angle is undefined when either vector is the zero vector."; break;
      }
      case "pythagorean-theorem": { const a=num(v.a,"Leg a"),b=num(v.b,"Leg b"),c=num(v.hypotenuse,"Hypotenuse"); if(a<0||b<0||c<0)throw new Error("Lengths cannot be negative."); if(c===0){if(a<=0||b<=0)throw new Error("Enter two positive legs to calculate the hypotenuse.");result="Hypotenuse: "+fmt(Math.hypot(a,b));}else{if(c<a||c<b)throw new Error("Hypotenuse cannot be shorter than either leg.");if(a===0)result="Missing leg a: "+fmt(Math.sqrt(c*c-b*b));else if(b===0)result="Missing leg b: "+fmt(Math.sqrt(c*c-a*a));else if(Math.abs(a*a+b*b-c*c)>1e-9*Math.max(1,c*c))throw new Error("Entered lengths do not form a right triangle.");else result="Right triangle verified; hypotenuse: "+fmt(c);}break; }
      case "cylinder-volume": { const r=num(v.radius,"Radius"),h=num(v.height,"Height");if(r<0||h<0)throw new Error("Radius and height must be non-negative.");result="Volume: "+fmt(Math.PI*r*r*h)+"; total surface area: "+fmt(2*Math.PI*r*(r+h));break; }
      case "sphere-volume": { const r=num(v.radius,"Radius");if(r<0)throw new Error("Radius must be non-negative.");result="Volume: "+fmt(4*Math.PI*r*r*r/3)+"; surface area: "+fmt(4*Math.PI*r*r);break; }
      case "distance-3d": { const x1=num(v.x1,"x1"),y1=num(v.y1,"y1"),z1=num(v.z1,"z1"),x2=num(v.x2,"x2"),y2=num(v.y2,"y2"),z2=num(v.z2,"z2");result="Distance: "+fmt(Math.hypot(x2-x1,y2-y1,z2-z1));break; }
      case "cylinder-lateral-area": { const r=num(v.radius,"Radius"),h=num(v.height,"Height");if(r<0||h<0)throw new Error("Radius and height must be non-negative.");result="Lateral surface area: "+fmt(2*Math.PI*r*h);break; }
      default: throw new Error("Calculator not implemented.");
    }
    if(typeof result==="number") result=fmt(result);
    return {result:String(result),formula,note,definition:def};
  }
  const api={definitions,calculate};
  if(typeof module!=="undefined" && module.exports) module.exports=api;
  root.AllRoundAdvancedCalculations=api;
})(typeof globalThis!=="undefined"?globalThis:this);
