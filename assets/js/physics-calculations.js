(function (root) {
  "use strict";
  const definitions = [
    {id:"speed-distance-time",name:"Speed from Distance and Time",group:"Motion",description:"Calculate average speed from total distance and elapsed time.",fields:[["distance","Distance (m)"],["time","Elapsed time (s)"]],formula:"Average speed = distance / time; distance ≥ 0, time > 0",example:"150 m in 10 s → 15 m/s"},
    {id:"acceleration",name:"Acceleration from Velocity Change",group:"Motion",description:"Calculate average acceleration from initial and final velocity.",fields:[["initialVelocity","Initial velocity u (m/s)"],["finalVelocity","Final velocity v (m/s)"],["time","Elapsed time (s)"]],formula:"Average acceleration a = (v − u) / t; t > 0",example:"From 2 m/s to 14 m/s in 4 s → 3 m/s²"},
    {id:"kinematic-displacement",name:"Displacement with Constant Acceleration",group:"Motion",description:"Calculate displacement when acceleration is constant.",fields:[["initialVelocity","Initial velocity u (m/s)"],["acceleration","Acceleration a (m/s²)"],["time","Elapsed time t (s)"]],formula:"s = ut + ½at²; acceleration is constant and t ≥ 0",example:"u = 3 m/s, a = 2 m/s², t = 4 s → 28 m"},
    {id:"newtons-second-law",name:"Newton's Second Law",group:"Forces and energy",description:"Calculate net force from mass and acceleration.",fields:[["mass","Mass (kg)"],["acceleration","Acceleration (m/s²)"]],formula:"Net force F = ma; mass ≥ 0",example:"2 kg × 3 m/s² → 6 N"},
    {id:"weight",name:"Weight from Mass and Gravity",group:"Forces and energy",description:"Estimate gravitational force for a specified gravitational field strength.",fields:[["mass","Mass (kg)"],["gravity","Gravitational field strength g (m/s²)"]],formula:"Weight W = mg; mass and g ≥ 0",example:"60 kg × 9.80665 m/s² → 588.399 N"},
    {id:"momentum",name:"Linear Momentum",group:"Forces and energy",description:"Calculate one-dimensional momentum using signed velocity.",fields:[["mass","Mass (kg)"],["velocity","Velocity (m/s)"]],formula:"Momentum p = mv; mass ≥ 0; velocity may be signed",example:"3 kg moving at −4 m/s → −12 kg·m/s"},
    {id:"kinetic-energy",name:"Kinetic Energy",group:"Forces and energy",description:"Calculate translational kinetic energy from mass and speed.",fields:[["mass","Mass (kg)"],["speed","Speed (m/s)"]],formula:"Kinetic energy K = ½mv²; mass and speed ≥ 0",example:"2 kg moving at 3 m/s → 9 J"},
    {id:"gravitational-potential-energy",name:"Gravitational Potential Energy",group:"Forces and energy",description:"Calculate potential energy relative to a chosen zero-height reference.",fields:[["mass","Mass (kg)"],["gravity","Gravitational field strength g (m/s²)"],["height","Height above reference (m)"]],formula:"ΔU = mgh; mass, g, and height ≥ 0 for this height-above-reference form",example:"2 kg at 5 m with g = 9.8 m/s² → 98 J"},
    {id:"mechanical-work",name:"Work by a Constant Force",group:"Forces and energy",description:"Calculate work for a constant force applied over a displacement.",fields:[["force","Force magnitude (N)"],["distance","Displacement magnitude (m)"],["angle","Angle between force and displacement (degrees)"]],formula:"W = Fd cos θ; angle is between the force and displacement vectors",example:"10 N over 3 m at 60° → 15 J"},
    {id:"mechanical-power",name:"Average Mechanical Power",group:"Forces and energy",description:"Calculate average power from work and elapsed time.",fields:[["work","Work transferred (J)"],["time","Elapsed time (s)"]],formula:"Average power P = W / t; time > 0; work may be signed",example:"120 J in 4 s → 30 W"},
    {id:"density",name:"Density",group:"Properties of matter",description:"Calculate mass per unit volume.",fields:[["mass","Mass (kg)"],["volume","Volume (m³)"]],formula:"Density ρ = m / V; mass ≥ 0, volume > 0",example:"2 kg in 0.001 m³ → 2000 kg/m³"},
    {id:"pressure",name:"Pressure from Force and Area",group:"Properties of matter",description:"Calculate uniform pressure from normal force and area.",fields:[["force","Normal force magnitude (N)"],["area","Area (m²)"]],formula:"Pressure p = F / A; force ≥ 0, area > 0",example:"100 N over 0.5 m² → 200 Pa"},
    {id:"ohms-law",name:"Ohm's Law — Voltage",group:"Electricity and waves",description:"Calculate voltage across an ohmic component from current and resistance.",fields:[["current","Current (A)"],["resistance","Resistance (Ω)"]],formula:"V = IR; resistance ≥ 0; assumes an ohmic component under applicable conditions",example:"2 A × 6 Ω → 12 V"},
    {id:"electrical-power",name:"Electrical Power",group:"Electricity and waves",description:"Calculate electrical power from voltage and current.",fields:[["voltage","Voltage (V)"],["current","Current (A)"]],formula:"P = VI; passive sign convention assumed for signed values",example:"12 V × 2 A → 24 W"},
    {id:"wave-speed",name:"Wave Speed",group:"Electricity and waves",description:"Calculate wave propagation speed from frequency and wavelength.",fields:[["frequency","Frequency (Hz)"],["wavelength","Wavelength (m)"]],formula:"Wave speed v = fλ; frequency and wavelength ≥ 0",example:"50 Hz × 0.4 m → 20 m/s"},
    {id:"spring-force",name:"Spring Force Magnitude",group:"Forces and energy",description:"Calculate ideal spring-force magnitude from spring constant and extension.",fields:[["springConstant","Spring constant k (N/m)"],["extension","Extension magnitude x (m)"]],formula:"|F| = kx (Hooke's law magnitude); assumes an ideal spring within its elastic range",example:"200 N/m × 0.05 m → 10 N"},
    {id:"projectile-range",name:"Projectile Range",group:"Motion",description:"Calculate the ideal projectile's horizontal range when launch and landing heights match.",fields:[["speed","Launch speed (m/s)"],["angle","Launch angle (degrees)"],["gravity","Gravitational field strength g (m/s²)"]],formula:"R = v² sin(2θ) / g; same launch and landing height; no air resistance",example:"20 m/s at 30° with g = 9.8 m/s² → about 35.346 m"},
    {id:"projectile-flight-time",name:"Projectile Flight Time",group:"Motion",description:"Calculate flight time for an ideal projectile returning to its launch height.",fields:[["speed","Launch speed (m/s)"],["angle","Launch angle (degrees)"],["gravity","Gravitational field strength g (m/s²)"]],formula:"T = 2v sin(θ) / g; same launch and landing height; no air resistance",example:"20 m/s at 30° with g = 10 m/s² → 2 s"},
    {id:"projectile-max-height",name:"Projectile Maximum Height",group:"Motion",description:"Calculate maximum height above the launch point for an ideal projectile.",fields:[["speed","Launch speed (m/s)"],["angle","Launch angle (degrees)"],["gravity","Gravitational field strength g (m/s²)"]],formula:"H = v² sin²(θ) / (2g); no air resistance",example:"20 m/s at 30° with g = 10 m/s² → 5 m"},
    {id:"impulse",name:"Impulse from Constant Force",group:"Forces and energy",description:"Calculate impulse delivered by a constant force over a time interval.",fields:[["force","Constant force (N)"],["time","Time interval (s)"]],formula:"Impulse J = FΔt = change in momentum for the net force",example:"5 N for 3 s → 15 N·s"},
    {id:"spring-potential-energy",name:"Spring Potential Energy",group:"Forces and energy",description:"Calculate stored elastic potential energy in an ideal spring.",fields:[["springConstant","Spring constant k (N/m)"],["extension","Extension magnitude x (m)"]],formula:"U = ½kx²; ideal spring within its elastic range",example:"200 N/m and 0.1 m → 1 J"},
    {id:"gravitation-force",name:"Newtonian Gravitational Force",group:"Forces and energy",description:"Estimate attraction between two point masses separated by a distance.",fields:[["mass1","First mass (kg)"],["mass2","Second mass (kg)"],["distance","Center-to-center separation (m)"]],formula:"F = Gm₁m₂/r²; G = 6.67430 × 10⁻¹¹ N·m²/kg²",example:"Two 1 kg point masses 1 m apart → 6.6743 × 10⁻¹¹ N"},
    {id:"coulomb-force",name:"Coulomb Force Magnitude",group:"Electricity and waves",description:"Calculate electrostatic force magnitude between two point charges.",fields:[["charge1","First charge (C)"],["charge2","Second charge (C)"],["distance","Separation (m)"]],formula:"F = kₑ|q₁q₂|/r²; point charges in vacuum; kₑ ≈ 8.9875517923 × 10⁹ N·m²/C²",example:"1 μC and 2 μC separated by 1 m → about 0.0179751 N"},
    {id:"resistance-series",name:"Series Resistance",group:"Electricity and waves",description:"Calculate equivalent resistance for resistors connected in series.",fields:[["resistances","Resistances in ohms, comma-separated"]],formula:"Rₑq = R₁ + R₂ + …; each resistance ≥ 0",example:"2 Ω, 3 Ω, 5 Ω → 10 Ω"},
    {id:"resistance-parallel",name:"Two Resistors in Parallel",group:"Electricity and waves",description:"Calculate equivalent resistance of two ideal resistors connected in parallel.",fields:[["resistance1","First resistance R₁ (Ω)"],["resistance2","Second resistance R₂ (Ω)"]],formula:"1/Rₑq = 1/R₁ + 1/R₂; ideal zero-ohm branch gives Rₑq = 0",example:"6 Ω ∥ 3 Ω → 2 Ω"},
    {id:"heat-energy",name:"Heat Transfer by Temperature Change",group:"Properties of matter",description:"Estimate sensible heat transfer using a constant specific heat capacity.",fields:[["mass","Mass (kg)"],["specificHeat","Specific heat capacity c (J/(kg·K))"],["temperatureChange","Temperature change ΔT (K or °C difference)"]],formula:"Q = mcΔT; specific heat is treated as constant over the temperature interval",example:"2 kg × 4200 J/(kg·K) × 5 K → 42000 J"},
    {id:"thermal-expansion",name:"Linear Thermal Expansion",group:"Properties of matter",description:"Estimate change in length for a uniform temperature change.",fields:[["initialLength","Initial length L₀ (m)"],["coefficient","Linear expansion coefficient α (1/K)"],["temperatureChange","Temperature change ΔT (K or °C difference)"]],formula:"ΔL = αL₀ΔT; small temperature changes and uniform material temperature assumed",example:"2 m × 0.000012/K × 50 K → 0.0012 m"},
    {id:"thin-lens-image-distance",name:"Thin Lens Image Distance",group:"Optics",description:"Calculate signed image distance using the thin-lens equation and a consistent sign convention.",fields:[["focalLength","Signed focal length f (m)"],["objectDistance","Object distance dₒ (m)"]],formula:"1/f = 1/dₒ + 1/dᵢ, so dᵢ = 1 / (1/f − 1/dₒ); dₒ > 0",example:"f = 0.1 m and dₒ = 0.3 m → dᵢ = 0.15 m"},
    {id:"lens-magnification",name:"Thin Lens Magnification",group:"Optics",description:"Calculate signed transverse magnification from image and object distances.",fields:[["imageDistance","Signed image distance dᵢ (m)"],["objectDistance","Object distance dₒ (m)"]],formula:"m = −dᵢ/dₒ; object distance dₒ > 0",example:"dᵢ = 0.15 m, dₒ = 0.3 m → m = −0.5"},
    {id:"centripetal-force",name:"Centripetal Force",group:"Circular motion",description:"Calculate the inward net force for circular motion.",fields:[["mass","Mass (kg)"],["speed","Speed (m/s)"],["radius","Radius (m)"]],formula:"F = mv²/r",example:"m = 2 kg, v = 3 m/s, r = 1.5 m → 12 N"},
    {id:"frequency-period",name:"Frequency and Period",group:"Waves & oscillations",description:"Convert between period and frequency.",fields:[["value","Input value"],["mode","Mode (1 = frequency, 0 = period)"]],formula:"f = 1/T; T = 1/f",example:"Period 0.02 s → 50 Hz"},
    {id:"electrical-energy",name:"Electrical Energy",group:"Electricity",description:"Calculate electrical energy from power and elapsed time.",fields:[["power","Power (W)"],["time","Time (s)"]],formula:"E = Pt",example:"100 W for 60 s → 6,000 J"},
    {id:"mechanical-efficiency",name:"Mechanical Efficiency",group:"Work, energy & power",description:"Compare useful output energy with supplied input energy.",fields:[["usefulOutput","Useful output energy (J)"],["inputEnergy","Input energy (J)"]],formula:"efficiency = useful output / input energy × 100%",example:"750 J output from 1,000 J input → 75%"},
    {id:"pressure-from-force-area",name:"Pressure from Force and Area",group:"Fluids & pressure",description:"Calculate pressure from a normal force over an area.",fields:[["force","Force (N)"],["area","Area (m²)"]],formula:"P = F/A",example:"100 N over 0.5 m² → 200 Pa"},
    {id:"buoyant-force",name:"Buoyant Force",group:"Fluids & pressure",description:"Estimate buoyant force from displaced fluid density and volume.",fields:[["fluidDensity","Fluid density (kg/m³)","Non-negative fluid density."],["displacedVolume","Displaced volume (m³)","Non-negative submerged volume."],["gravity","Gravitational acceleration (m/s²)","Positive local gravity, commonly 9.80665 m/s²."]],formula:"Fᵦ = ρfluid × Vdisplaced × g",example:"Water density 1000 kg/m³, volume 0.01 m³ → about 98.1 N"},
    {id:"simple-pendulum-period",name:"Simple Pendulum Period",group:"Waves & oscillations",description:"Estimate the period of a simple pendulum at small amplitude.",fields:[["length","Pendulum length (m)","Positive pendulum length."],["gravity","Gravitational acceleration (m/s²)","Positive local gravitational acceleration."]],formula:"T ≈ 2π√(L/g)",example:"L = 1 m, g = 9.81 m/s² → about 2.01 s"},
    {id:"wave-frequency",name:"Wave Frequency from Speed and Wavelength",group:"Waves & oscillations",description:"Calculate wave frequency from propagation speed and wavelength.",fields:[["speed","Wave speed (m/s)","Non-negative wave speed."],["wavelength","Wavelength (m)","Positive wavelength."]],formula:"f = v/λ",example:"Speed 340 m/s, wavelength 0.5 m → 680 Hz"},
    {id:"ideal-gas-state",name:"Ideal Gas Pressure",group:"Thermodynamics",description:"Calculate ideal-gas pressure from amount, temperature and volume.",fields:[["moles","Amount (mol)","Non-negative gas amount."],["temperature","Absolute temperature (K)","Positive absolute temperature."],["volume","Volume (m³)","Positive volume."]],formula:"P = nRT/V; R = 8.314462618 J/(mol·K)",example:"1 mol, 273.15 K, 0.022414 m³ → about 101.3 kPa"}
  ];
  const byId = Object.fromEntries(definitions.map(item => [item.id,item]));
  function number(values,key,label) {
    const raw=values[key];
    if(raw===undefined||raw===null||String(raw).trim()==="") throw new Error(label+" is required.");
    const value=Number(raw);
    if(!Number.isFinite(value)) throw new Error(label+" must be a finite number.");
    return value;
  }
  function nonnegative(value,label) {
    if(value<0) throw new Error(label+" must be zero or greater.");
    return value;
  }
  function positive(value,label) {
    if(value<=0) throw new Error(label+" must be greater than zero.");
    return value;
  }
  function format(value) {
    if(!Number.isFinite(value)) throw new Error("The result is outside the supported finite-number range.");
    if(Object.is(value,-0)) value=0;
    return Number(value.toPrecision(12)).toString();
  }
  function calculate(id,values) {
    const def=byId[id];
    if(!def) throw new Error("Unknown physics calculator.");
    let result,formula=def.formula,note="";
    switch(id) {
      case "speed-distance-time": {
        const d=nonnegative(number(values,"distance","Distance"),"Distance");
        const t=positive(number(values,"time","Elapsed time"),"Elapsed time");
        result="Average speed: "+format(d/t)+" m/s"; break;
      }
      case "acceleration": {
        const u=number(values,"initialVelocity","Initial velocity"),v=number(values,"finalVelocity","Final velocity");
        const t=positive(number(values,"time","Elapsed time"),"Elapsed time");
        result="Average acceleration: "+format((v-u)/t)+" m/s²"; break;
      }
      case "kinematic-displacement": {
        const u=number(values,"initialVelocity","Initial velocity"),a=number(values,"acceleration","Acceleration");
        const t=nonnegative(number(values,"time","Elapsed time"),"Elapsed time");
        result="Displacement: "+format(u*t+0.5*a*t*t)+" m";
        note="Valid for constant acceleration over the entered time interval."; break;
      }
      case "newtons-second-law": {
        const m=nonnegative(number(values,"mass","Mass"),"Mass"),a=number(values,"acceleration","Acceleration");
        result="Net force: "+format(m*a)+" N"; break;
      }
      case "weight": {
        const m=nonnegative(number(values,"mass","Mass"),"Mass"),g=nonnegative(number(values,"gravity","Gravitational field strength"),"Gravitational field strength");
        result="Weight: "+format(m*g)+" N";
        note="The result depends on the gravitational field strength entered; 9.80665 m/s² is a conventional standard value near Earth's surface, not a universal value."; break;
      }
      case "momentum": {
        const m=nonnegative(number(values,"mass","Mass"),"Mass"),v=number(values,"velocity","Velocity");
        result="Momentum: "+format(m*v)+" kg·m/s"; break;
      }
      case "kinetic-energy": {
        const m=nonnegative(number(values,"mass","Mass"),"Mass"),v=nonnegative(number(values,"speed","Speed"),"Speed");
        result="Kinetic energy: "+format(0.5*m*v*v)+" J"; break;
      }
      case "gravitational-potential-energy": {
        const m=nonnegative(number(values,"mass","Mass"),"Mass"),g=nonnegative(number(values,"gravity","Gravitational field strength"),"Gravitational field strength"),h=nonnegative(number(values,"height","Height"),"Height");
        result="Gravitational potential energy change: "+format(m*g*h)+" J";
        note="Height is measured relative to the selected zero-potential reference. Assumes approximately uniform gravity."; break;
      }
      case "mechanical-work": {
        const f=nonnegative(number(values,"force","Force"),"Force"),d=nonnegative(number(values,"distance","Displacement"),"Displacement"),angle=number(values,"angle","Angle");
        if(angle<0||angle>180) throw new Error("The angle between force and displacement must be from 0° through 180°.");
        result="Work: "+format(f*d*Math.cos(angle*Math.PI/180))+" J";
        note="Work can be negative when the force opposes the displacement."; break;
      }
      case "mechanical-power": {
        const w=number(values,"work","Work"),t=positive(number(values,"time","Elapsed time"),"Elapsed time");
        result="Average power: "+format(w/t)+" W"; break;
      }
      case "density": {
        const m=nonnegative(number(values,"mass","Mass"),"Mass"),v=positive(number(values,"volume","Volume"),"Volume");
        result="Density: "+format(m/v)+" kg/m³"; break;
      }
      case "pressure": {
        const f=nonnegative(number(values,"force","Force"),"Force"),a=positive(number(values,"area","Area"),"Area");
        result="Pressure: "+format(f/a)+" Pa"; break;
      }
      case "ohms-law": {
        const i=number(values,"current","Current"),r=nonnegative(number(values,"resistance","Resistance"),"Resistance");
        result="Voltage: "+format(i*r)+" V";
        note="Ohm's law applies to ohmic behavior; many components are non-ohmic or temperature-dependent."; break;
      }
      case "electrical-power": {
        const v=number(values,"voltage","Voltage"),i=number(values,"current","Current");
        result="Electrical power: "+format(v*i)+" W";
        note="Interpret the sign using the passive sign convention and the chosen voltage/current reference directions."; break;
      }
      case "wave-speed": {
        const f=nonnegative(number(values,"frequency","Frequency"),"Frequency"),w=nonnegative(number(values,"wavelength","Wavelength"),"Wavelength");
        result="Wave speed: "+format(f*w)+" m/s"; break;
      }
      case "spring-force": {
        const k=nonnegative(number(values,"springConstant","Spring constant"),"Spring constant"),x=nonnegative(number(values,"extension","Extension"),"Extension");
        result="Spring-force magnitude: "+format(k*x)+" N";
        note="Ideal Hooke's-law behavior is assumed within the spring's elastic range."; break;
      }
      case "projectile-range": {
        const v=nonnegative(number(values,"speed","Launch speed"),"Launch speed"),a=number(values,"angle","Launch angle"),g=positive(number(values,"gravity","Gravitational field strength"),"Gravitational field strength");
        if(a<0||a>90)throw new Error("Launch angle must be from 0° through 90°.");
        result="Horizontal range: "+format(v*v*Math.sin(2*a*Math.PI/180)/g)+" m";
        note="Assumes launch and landing heights are equal and air resistance is negligible.";break;
      }
      case "projectile-flight-time": {
        const v=nonnegative(number(values,"speed","Launch speed"),"Launch speed"),a=number(values,"angle","Launch angle"),g=positive(number(values,"gravity","Gravitational field strength"),"Gravitational field strength");
        if(a<0||a>90)throw new Error("Launch angle must be from 0° through 90°.");
        result="Flight time: "+format(2*v*Math.sin(a*Math.PI/180)/g)+" s";
        note="Assumes launch and landing heights are equal and air resistance is negligible.";break;
      }
      case "projectile-max-height": {
        const v=nonnegative(number(values,"speed","Launch speed"),"Launch speed"),a=number(values,"angle","Launch angle"),g=positive(number(values,"gravity","Gravitational field strength"),"Gravitational field strength");
        if(a<0||a>90)throw new Error("Launch angle must be from 0° through 90°.");
        const vertical=v*Math.sin(a*Math.PI/180);
        result="Maximum height above launch point: "+format(vertical*vertical/(2*g))+" m";
        note="Assumes constant gravity and negligible air resistance.";break;
      }
      case "impulse": {
        const f=number(values,"force","Constant force"),t=nonnegative(number(values,"time","Time interval"),"Time interval");
        result="Impulse: "+format(f*t)+" N·s";break;
      }
      case "spring-potential-energy": {
        const k=nonnegative(number(values,"springConstant","Spring constant"),"Spring constant"),x=nonnegative(number(values,"extension","Extension"),"Extension");
        result="Elastic potential energy: "+format(0.5*k*x*x)+" J";
        note="Assumes ideal Hooke's-law behavior within the spring's elastic range.";break;
      }
      case "gravitation-force": {
        const m1=nonnegative(number(values,"mass1","First mass"),"First mass"),m2=nonnegative(number(values,"mass2","Second mass"),"Second mass"),r=positive(number(values,"distance","Center-to-center separation"),"Center-to-center separation");
        const G=6.67430e-11;
        result="Gravitational force magnitude: "+format((G*m1*m2)/r/r)+" N";
        note="Newtonian point-mass approximation; extended bodies may require a different model.";break;
      }
      case "coulomb-force": {
        const q1=number(values,"charge1","First charge"),q2=number(values,"charge2","Second charge"),r=positive(number(values,"distance","Separation"),"Separation");
        const ke=8.9875517923e9;
        result="Electrostatic force magnitude: "+format((ke*Math.abs(q1)*Math.abs(q2))/r/r)+" N";
        note="Point charges in vacuum; the magnitude is shown, not attraction/repulsion direction.";break;
      }
      case "resistance-series": {
        const raw=values.resistances;
        if(raw===undefined||String(raw).trim()==="")throw new Error("Resistances are required.");
        const parts=String(raw).split(",").map(s=>s.trim());
        if(parts.some(s=>s===""))throw new Error("Resistance list contains an empty item.");
        if(parts.length>100)throw new Error("Enter no more than 100 resistors.");
        const total=parts.reduce((sum,item,index)=>sum+nonnegative(number({v:item},"v","Resistance "+(index+1)),"Resistance"),0);
        result="Equivalent series resistance: "+format(total)+" Ω";break;
      }
      case "resistance-parallel": {
        const r1=nonnegative(number(values,"resistance1","First resistance"),"First resistance"),r2=nonnegative(number(values,"resistance2","Second resistance"),"Second resistance");
        const equivalent=(r1===0||r2===0)?0:Math.min(r1,r2)/(1+Math.min(r1,r2)/Math.max(r1,r2));
        result="Equivalent parallel resistance: "+format(equivalent)+" Ω";
        note="Assumes ideal resistors; a zero-ohm branch shorts the ideal parallel combination.";break;
      }
      case "heat-energy": {
        const m=nonnegative(number(values,"mass","Mass"),"Mass"),c=nonnegative(number(values,"specificHeat","Specific heat capacity"),"Specific heat capacity"),dt=number(values,"temperatureChange","Temperature change");
        result="Heat transfer: "+format(m*c*dt)+" J";
        note="A positive result means heat added under this sign convention; specific heat is assumed constant.";break;
      }
      case "thermal-expansion": {
        const l=nonnegative(number(values,"initialLength","Initial length"),"Initial length"),a=number(values,"coefficient","Linear expansion coefficient"),dt=number(values,"temperatureChange","Temperature change");
        result="Change in length: "+format(a*l*dt)+" m";
        note="Small-strain linear approximation with uniform temperature change.";break;
      }
      case "thin-lens-image-distance": {
        const f=number(values,"focalLength","Focal length"),o=positive(number(values,"objectDistance","Object distance"),"Object distance");
        if(f===0)throw new Error("Focal length must not be zero.");
        const denominator=1/f-1/o;
        if(denominator===0)throw new Error("The image is at infinity for this ideal thin-lens case; no finite image distance exists.");
        result="Signed image distance: "+format(1/denominator)+" m";
        note="Uses the thin-lens sign convention: converging focal length positive, diverging focal length negative, real object distance positive.";break;
      }
      case "lens-magnification": {
        const i=number(values,"imageDistance","Image distance"),o=positive(number(values,"objectDistance","Object distance"),"Object distance");
        result="Transverse magnification: "+format(-i/o);
        note="Negative magnification indicates an inverted image under the stated thin-lens sign convention.";break;
      }
      case "centripetal-force": { const m=nonnegative(number(values,"mass","Mass"),"Mass"),v=nonnegative(number(values,"speed","Speed"),"Speed"),r=positive(number(values,"radius","Radius"),"Radius");result="Centripetal force: "+format(m*v*v/r)+" N";break; }
      case "frequency-period": { const x=positive(number(values,"value","Input value"),"Input value"),mode=number(values,"mode","Mode");if(mode!==0&&mode!==1)throw new Error("Mode must be 1 (frequency to period) or 0 (period to frequency).");result=mode===1?"Period: "+format(1/x)+" s":"Frequency: "+format(1/x)+" Hz";note="When mode is 1, enter frequency in Hz; when mode is 0, enter period in seconds.";break; }
      case "electrical-energy": { const p=nonnegative(number(values,"power","Power"),"Power"),t=nonnegative(number(values,"time","Time"),"Time");result="Electrical energy: "+format(p*t)+" J ("+format(p*t/3600000)+" kWh)";break; }
      case "mechanical-efficiency": { const out=nonnegative(number(values,"usefulOutput","Useful output energy"),"Useful output energy"),input=positive(number(values,"inputEnergy","Input energy"),"Input energy");if(out>input)throw new Error("Useful output energy cannot exceed input energy in this efficiency estimate.");result="Efficiency: "+format(100*out/input)+"%";break; }
      case "pressure-from-force-area": { const f=nonnegative(number(values,"force","Force"),"Force"),a=positive(number(values,"area","Area"),"Area");result="Pressure: "+format(f/a)+" Pa";break; }
      case "buoyant-force": { const rho=nonnegative(number(values,"fluidDensity","Fluid density"),"Fluid density"),vol=nonnegative(number(values,"displacedVolume","Displaced volume"),"Displaced volume"),g=positive(number(values,"gravity","Gravitational acceleration"),"Gravitational acceleration");result="Buoyant force: "+format(rho*vol*g)+" N";note="Archimedes' principle; displaced volume is submerged volume and fluid density is assumed uniform.";break; }
      case "simple-pendulum-period": { const l=positive(number(values,"length","Length"),"Length"),g=positive(number(values,"gravity","Gravitational acceleration"),"Gravitational acceleration"),t=2*Math.PI*Math.sqrt(l/g);result="Period: "+format(t)+" s; frequency: "+format(1/t)+" Hz";note="Small-angle approximation; real pendulum periods depend slightly on amplitude and physical construction.";break; }
      case "wave-frequency": { const v=nonnegative(number(values,"speed","Wave speed"),"Wave speed"),l=positive(number(values,"wavelength","Wavelength"),"Wavelength");result="Frequency: "+format(v/l)+" Hz";break; }
      case "ideal-gas-state": { const n=nonnegative(number(values,"moles","Amount"),"Amount"),t=positive(number(values,"temperature","Absolute temperature"),"Absolute temperature"),v=positive(number(values,"volume","Volume"),"Volume"),p=n*8.314462618*t/v;result="Pressure: "+format(p)+" Pa ("+format(p/1000)+" kPa)";note="Ideal-gas model; non-ideal behavior may matter at high pressure or low temperature.";break; }
      default: throw new Error("Physics calculator not implemented.");
    }
    return {result,formula,note,definition:def};
  }
  root.AllRoundPhysicsCalculations={definitions,calculate};
  if(typeof module!=="undefined"&&module.exports) module.exports={definitions,calculate};
})(typeof globalThis!=="undefined"?globalThis:this);
