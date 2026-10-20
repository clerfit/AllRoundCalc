(function (root) {
  "use strict";
  const families = {
    length: { label: "Length", units: { m: ["metre", 1], km: ["kilometre", 1000], cm: ["centimetre", 0.01], mm: ["millimetre", 0.001], mi: ["mile", 1609.344], yd: ["yard", 0.9144], ft: ["foot", 0.3048], in: ["inch", 0.0254] } },
    mass: { label: "Mass", units: { kg: ["kilogram", 1], g: ["gram", 0.001], mg: ["milligram", 0.000001], lb: ["pound", 0.45359237], oz: ["ounce", 0.028349523125] } },
    area: { label: "Area", units: { "m²": ["square metre", 1], "km²": ["square kilometre", 1000000], "cm²": ["square centimetre", 0.0001], "ft²": ["square foot", 0.09290304], "in²": ["square inch", 0.00064516], ha: ["hectare", 10000], acre: ["acre", 4046.8564224] } },
    volume: { label: "Volume", units: { L: ["litre", 1], mL: ["millilitre", 0.001], "m³": ["cubic metre", 1000], "cm³": ["cubic centimetre", 0.001], "gal-US": ["US liquid gallon", 3.785411784], "qt-US": ["US liquid quart", 0.946352946], "cup-US": ["US customary cup", 0.2365882365] } },
    speed: { label: "Speed", units: { "m/s": ["metre per second", 1], "km/h": ["kilometre per hour", 1 / 3.6], mph: ["mile per hour", 0.44704], "ft/s": ["foot per second", 0.3048], knot: ["knot", 0.514444444444] } },
    temperature: { label: "Temperature", units: { "°C": ["degrees Celsius"], "°F": ["degrees Fahrenheit"], K: ["kelvin"] } },
    time: { label: "Time", units: { s: ["second", 1], ms: ["millisecond", 0.001], min: ["minute", 60], h: ["hour", 3600], day: ["day", 86400] } },
    pressure: { label: "Pressure", units: { Pa: ["pascal", 1], kPa: ["kilopascal", 1000], bar: ["bar", 100000], atm: ["standard atmosphere", 101325], psi: ["pound per square inch", 6894.757293168], mmHg: ["millimetre of mercury", 133.322387415] } },
    energy: { label: "Energy", units: { J: ["joule", 1], kJ: ["kilojoule", 1000], cal: ["thermochemical calorie", 4.184], kcal: ["kilocalorie", 4184], Wh: ["watt-hour", 3600], kWh: ["kilowatt-hour", 3600000] } },
    power: { label: "Power", units: { W: ["watt", 1], kW: ["kilowatt", 1000], MW: ["megawatt", 1000000], hp: ["mechanical horsepower", 745.699871582] } },
    data: { label: "Digital storage (decimal)", units: { B: ["byte", 1], kB: ["kilobyte (1000 bytes)", 1000], MB: ["megabyte (1000 kB)", 1000000], GB: ["gigabyte (1000 MB)", 1000000000], TB: ["terabyte (1000 GB)", 1000000000000] } }
  };
  const definitions = [
    ["unit-length", "Length Converter", "Length", "Convert metric and customary length units.", "m, km, cm, mm, mi, yd, ft, in; factors are exact international definitions where applicable.", "1 km = 1,000 m"],
    ["unit-mass", "Mass Converter", "Mass", "Convert common metric and avoirdupois mass units.", "kg, g, mg, lb, oz; pound and ounce use international avoirdupois definitions.", "1 kg ≈ 2.20462262185 lb"],
    ["unit-area", "Area Converter", "Area", "Convert square units, hectares, and acres.", "Area conversions use squared length factors; hectare and acre use defined conversion factors.", "1 ha = 10,000 m²"],
    ["unit-volume", "Volume Converter", "Volume", "Convert litres, cubic units, and US customary liquid measures.", "US liquid gallon and derived US quart/cup only; not imperial units or dry measures.", "1 L ≈ 0.264172052 US gal"],
    ["unit-speed", "Speed Converter", "Speed", "Convert linear speed units.", "Uses consistent distance/time factors; knots are nautical miles per hour.", "36 km/h = 10 m/s"],
    ["unit-temperature", "Temperature Converter", "Temperature", "Convert Celsius, Fahrenheit, and kelvin temperatures.", "Absolute temperature scales use affine conversion; kelvin cannot be negative.", "0 °C = 32 °F = 273.15 K"],
    ["unit-time", "Time Converter", "Time", "Convert seconds, milliseconds, minutes, hours, and days.", "A day is defined as 86,400 seconds; this is not calendar/date arithmetic.", "2 h = 7,200 s"],
    ["unit-pressure", "Pressure Converter", "Pressure", "Convert pascals, bar, atmospheres, psi, and mmHg.", "Uses standard conversion constants; mmHg uses the conventional standard factor.", "1 atm = 101,325 Pa"],
    ["unit-energy", "Energy Converter", "Energy", "Convert joules, calories, watt-hours, and kilowatt-hours.", "cal means thermochemical calorie (4.184 J); kcal means 1,000 cal.", "1 kWh = 3,600,000 J"],
    ["unit-power", "Power Converter", "Power", "Convert watts, kilowatts, megawatts, and mechanical horsepower.", "hp means mechanical horsepower, not metric horsepower.", "1 kW ≈ 1.34102209 hp"],
    ["unit-data", "Digital Storage Converter", "Digital storage", "Convert bytes and decimal SI storage units.", "Uses decimal SI multiples of 1,000, not binary KiB/MiB/GiB units.", "1 GB = 1,000,000,000 bytes"]
  ].map(function (x) {
    return { id: x[0], name: x[1], group: x[2], description: x[3], fields: [["value", "Value", "Enter a finite numeric value."], ["fromUnit", "Convert from", "Choose the source unit."], ["toUnit", "Convert to", "Choose the target unit."]], formula: x[4], example: x[5] };
  });
  function unitsFor(id) {
    const def = definitions.find(function (item) { return item.id === id; });
    const family = def && families[familyKey(id)];
    return family ? Object.keys(family.units).map(function (symbol) { return { value: symbol, label: symbol + " — " + family.units[symbol][0] }; }) : [];
  }
  function familyKey(id) { return id.replace(/^unit-/, ""); }
  function finite(value, label) {
    if (value === undefined || String(value).trim() === "") throw new Error(label + " is required.");
    const number = Number(value);
    if (!Number.isFinite(number)) throw new Error(label + " must be a finite number.");
    return number;
  }
  function toBase(value, unit, family) {
    if (!Object.prototype.hasOwnProperty.call(family.units, unit)) throw new Error("Choose a supported unit.");
    if (family === families.temperature) {
      if (unit === "°C") return value + 273.15;
      if (unit === "°F") return (value - 32) * 5 / 9 + 273.15;
      if (value < 0) throw new Error("Temperature in kelvin cannot be below absolute zero.");
      return value;
    }
    return value * family.units[unit][1];
  }
  function fromBase(value, unit, family) {
    if (family === families.temperature) {
      if (unit === "°C") return value - 273.15;
      if (unit === "°F") return (value - 273.15) * 9 / 5 + 32;
      return value;
    }
    return value / family.units[unit][1];
  }
  function fmt(value) {
    if (!Number.isFinite(value)) throw new Error("The result is outside the supported numeric range.");
    if (Object.is(value, -0) || Math.abs(value) < 5e-13) value = 0;
    return Number(value.toPrecision(12)).toString();
  }
  function calculate(id, values) {
    const def = definitions.find(function (item) { return item.id === id; });
    if (!def) throw new Error("Unit converter not found.");
    const family = families[familyKey(id)];
    const value = finite(values.value, "Value");
    const fromUnit = values.fromUnit;
    const toUnit = values.toUnit;
    if (!Object.prototype.hasOwnProperty.call(family.units, fromUnit) || !Object.prototype.hasOwnProperty.call(family.units, toUnit)) throw new Error("Choose supported source and target units.");
    const base = toBase(value, fromUnit, family);
    if (family === families.temperature && base < 0) throw new Error("Temperature cannot be below absolute zero.");
    const converted = fromBase(base, toUnit, family);
    return {
      result: fmt(converted) + " " + toUnit,
      formula: fromUnit === toUnit ? "The source and target units are identical; the value is unchanged." : "Convert " + value + " " + fromUnit + " to the family base unit, then convert to " + toUnit + ".",
      note: def.formula,
      definition: def
    };
  }
  root.AllRoundUnitConverters = { definitions: definitions, calculate: calculate, unitsFor: unitsFor };
  if (typeof module !== "undefined" && module.exports) module.exports = { definitions: definitions, calculate: calculate, unitsFor: unitsFor };
})(typeof globalThis !== "undefined" ? globalThis : this);
