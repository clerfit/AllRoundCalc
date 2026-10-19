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
    {id:"spring-force",name:"Spring Force Magnitude",group:"Forces and energy",description:"Calculate ideal spring-force magnitude from spring constant and extension.",fields:[["springConstant","Spring constant k (N/m)"],["extension","Extension magnitude x (m)"]],formula:"|F| = kx (Hooke's law magnitude); assumes an ideal spring within its elastic range",example:"200 N/m × 0.05 m → 10 N"}
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
      default: throw new Error("Physics calculator not implemented.");
    }
    return {result,formula,note,definition:def};
  }
  root.AllRoundPhysicsCalculations={definitions,calculate};
  if(typeof module!=="undefined"&&module.exports) module.exports={definitions,calculate};
})(typeof globalThis!=="undefined"?globalThis:this);
