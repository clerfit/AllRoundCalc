(function (root) {
  "use strict";
  const definitions = [
    {id:"sp-great-circle-distance",category:"geography-mapping",name:"Great-Circle Distance",group:"Geography & Mapping",description:"Estimate the shortest surface distance between two latitude/longitude points on a spherical Earth.",fields:[["lat1","Start latitude (degrees)", "Latitude from −90° to 90°."],["lon1","Start longitude (degrees)","Longitude from −180° to 180°."],["lat2","End latitude (degrees)","Latitude from −90° to 90°."],["lon2","End longitude (degrees)","Longitude from −180° to 180°."]],formula:"Haversine: a = sin²(Δφ/2) + cos φ₁ cos φ₂ sin²(Δλ/2); d = 2R asin(√a), R = 6,371.0088 km.",example:"(0°, 0°) to (0°, 1°) ≈ 111.195 km",limits:"Spherical-Earth approximation; not a surveyed distance and does not account for altitude, road routes, or ellipsoidal geodesics."},
    {id:"sp-initial-bearing",category:"geography-mapping",name:"Initial Compass Bearing",group:"Geography & Mapping",description:"Calculate the initial bearing from one geographic coordinate to another.",fields:[["lat1","Start latitude (degrees)"],["lon1","Start longitude (degrees)"],["lat2","End latitude (degrees)"],["lon2","End longitude (degrees)"]],formula:"θ = atan2(sin Δλ cos φ₂, cos φ₁ sin φ₂ − sin φ₁ cos φ₂ cos Δλ); normalize to 0°–360°.",example:"From (0°, 0°) toward (0°, 1°) → 90°",limits:"Initial true-north bearing on a spherical Earth. Coincident or antipodal points do not have a unique initial bearing."},
    {id:"sp-light-travel-time",category:"astronomy-space",name:"Light Travel Time",group:"Astronomy & Space",description:"Estimate how long light takes to cross a distance entered in astronomical units.",fields:[["distanceAU","Distance (AU)","One astronomical unit is defined here as 149,597,870,700 metres."]],formula:"t = distance × 149,597,870,700 m / 299,792,458 m·s⁻¹.",example:"1 AU → approximately 499.0048 seconds",limits:"Vacuum speed of light; ignores propagation through matter, gravitational effects, and uncertainty in the entered distance."},
    {id:"sp-parallax-distance",category:"astronomy-space",name:"Stellar Parallax Distance",group:"Astronomy & Space",description:"Convert a positive annual parallax angle in arcseconds to parsecs.",fields:[["parallaxArcsec","Parallax angle (arcseconds)","Must be positive; measurement uncertainty is not modelled."]],formula:"Distance (parsecs) = 1 / parallax (arcseconds).",example:"0.1 arcsecond → 10 parsecs",limits:"Direct inversion assumes a positive parallax with negligible uncertainty; noisy or negative measured parallaxes require statistical treatment."},
    {id:"sp-plant-population",category:"agriculture-gardening",name:"Plant Population Estimate",group:"Agriculture & Gardening",description:"Estimate planting positions on a rectangular plot from row and within-row spacing.",fields:[["areaM2","Plot area (m²)"],["rowSpacingCm","Row spacing (cm)"],["plantSpacingCm","Spacing within row (cm)"]],formula:"Approximate plants = plot area / ((row spacing in m) × (within-row spacing in m)).",example:"100 m² at 50 cm × 25 cm spacing → about 800 planting positions",limits:"Idealized density estimate; plot edges, paths, germination, plant size, and field layout reduce or change actual counts."},
    {id:"sp-irrigation-volume",category:"agriculture-gardening",name:"Irrigation Water Volume",group:"Agriculture & Gardening",description:"Estimate water volume needed to apply a uniform depth across an area.",fields:[["areaM2","Area (m²)"],["depthMm","Water depth (mm)"]],formula:"Volume (litres) = area (m²) × depth (mm), because 1 mm over 1 m² equals 1 litre.",example:"100 m² × 5 mm = 500 litres",limits:"Net applied volume only; excludes runoff, evaporation, infiltration variation, and system efficiency."},
    {id:"sp-electricity-cost",category:"energy-sustainability",name:"Electricity Usage Cost",group:"Energy & Sustainability",description:"Estimate energy charges from consumption and a user-entered rate.",fields:[["energyKWh","Energy used (kWh)"],["ratePerKWh","Rate per kWh (currency units)"]],formula:"Estimated charge = energy used × entered rate.",example:"250 kWh × 8.00 per kWh = 2,000.00 currency units",limits:"Uses the entered rate only; excludes fixed charges, taxes, time-of-use pricing, subsidies, and tiered tariffs."},
    {id:"sp-electricity-emissions",category:"environment-climate",name:"Electricity Emissions Estimate",group:"Environment & Climate",description:"Estimate emissions using an explicitly user-supplied grid emission factor.",fields:[["energyKWh","Electricity used (kWh)"],["factorKgPerKWh","Emission factor (kg CO₂e/kWh)","Use a current factor appropriate to the location and reporting boundary."]],formula:"Estimated emissions (kg CO₂e) = electricity (kWh) × entered factor (kg CO₂e/kWh).",example:"100 kWh × 0.4 kg CO₂e/kWh = 40 kg CO₂e",limits:"Not a universal grid factor. Results depend on the user-supplied source, geography, year, and lifecycle/reporting boundary."},
    {id:"sp-oee",category:"manufacturing-quality",name:"Overall Equipment Effectiveness (OEE)",group:"Manufacturing & Quality",description:"Calculate OEE from availability, performance, and quality percentages.",fields:[["availabilityPct","Availability (%)"],["performancePct","Performance (%)"],["qualityPct","Quality (%)"]],formula:"OEE = availability × performance × quality, with each factor expressed as a fraction.",example:"90% × 95% × 98% = 83.79% OEE",limits:"Assumes the three percentages follow compatible definitions and the same measurement window; values above 100% are rejected."}
  ];
  function number(values,key,label,min,max,exclusiveMin) {
    const raw = values[key];
    if (raw === undefined || String(raw).trim() === "") throw new Error(label + " is required.");
    const n = Number(raw);
    if (!Number.isFinite(n)) throw new Error(label + " must be finite.");
    if (exclusiveMin ? n <= min : n < min) throw new Error(label + " is outside its valid range.");
    if (max !== undefined && n > max) throw new Error(label + " is outside its valid range.");
    return n;
  }
  function fmt(n,digits=6) { if (!Number.isFinite(n)) throw new Error("Result exceeds the supported numeric range."); return Number(n.toFixed(digits)).toString(); }
  function calculate(id, values) {
    const def = definitions.find(x=>x.id===id);
    if (!def) throw new Error("Calculator not found.");
    let result, note = def.limits;
    if (id === "sp-great-circle-distance" || id === "sp-initial-bearing") {
      const lat1=number(values,"lat1","Start latitude",-90,90), lon1=number(values,"lon1","Start longitude",-180,180);
      const lat2=number(values,"lat2","End latitude",-90,90), lon2=number(values,"lon2","End longitude",-180,180);
      const rad=x=>x*Math.PI/180, p1=rad(lat1), p2=rad(lat2), dl=rad(lon2-lon1), dp=p2-p1;
      if(id==="sp-great-circle-distance") {
        const a=Math.min(1,Math.max(0,Math.sin(dp/2)**2+Math.cos(p1)*Math.cos(p2)*Math.sin(dl/2)**2));
        result=fmt(2*6371.0088*Math.asin(Math.sqrt(a)))+" km";
      } else {
        const y=Math.sin(dl)*Math.cos(p2), x=Math.cos(p1)*Math.sin(p2)-Math.sin(p1)*Math.cos(p2)*Math.cos(dl);
        if(Math.abs(x)<1e-14 && Math.abs(y)<1e-14) throw new Error("Initial bearing is undefined for these coordinates.");
        result=fmt((Math.atan2(y,x)*180/Math.PI+360)%360)+"° true";
      }
    } else if(id==="sp-light-travel-time") {
      const au=number(values,"distanceAU","Distance",0,undefined);
      const seconds=au*149597870700/299792458;
      result=fmt(seconds)+" seconds ("+fmt(seconds/60)+" minutes)";
    } else if(id==="sp-parallax-distance") {
      const p=number(values,"parallaxArcsec","Parallax",0,undefined,true);
      result=fmt(1/p)+" parsecs";
    } else if(id==="sp-plant-population") {
      const area=number(values,"areaM2","Plot area",0,undefined,true), row=number(values,"rowSpacingCm","Row spacing",0,undefined,true), plant=number(values,"plantSpacingCm","Plant spacing",0,undefined,true);
      result=fmt(area/((row/100)*(plant/100)),2)+" planting positions (approx.)";
    } else if(id==="sp-irrigation-volume") {
      const area=number(values,"areaM2","Area",0,undefined), depth=number(values,"depthMm","Water depth",0,undefined);
      result=fmt(area*depth,3)+" litres";
    } else if(id==="sp-electricity-cost") {
      const kwh=number(values,"energyKWh","Energy",0,undefined), rate=number(values,"ratePerKWh","Rate",0,undefined);
      result=fmt(kwh*rate,2)+" currency units";
      note += " Currency is not inferred; result uses the rate and currency unit supplied by the user.";
    } else if(id==="sp-electricity-emissions") {
      const kwh=number(values,"energyKWh","Electricity",0,undefined), factor=number(values,"factorKgPerKWh","Emission factor",0,undefined);
      result=fmt(kwh*factor,4)+" kg CO₂e";
    } else if(id==="sp-oee") {
      const a=number(values,"availabilityPct","Availability",0,100)/100, p=number(values,"performancePct","Performance",0,100)/100, q=number(values,"qualityPct","Quality",0,100)/100;
      result=fmt(a*p*q*100,4)+"%";
    }
    return {result,formula:def.formula,note};
  }
  root.AllRoundSpecializedCalculations={definitions,calculate};
  if(typeof module!=="undefined"&&module.exports) module.exports={definitions,calculate};
}(typeof window!=="undefined"?window:globalThis));
