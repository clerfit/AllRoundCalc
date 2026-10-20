# Phase 11 — Unit Converters

**Scope:** 11 browser-local converters for length, mass, area, volume, speed, temperature, time, pressure, energy, power, and digital storage.

## Conversion conventions

- Linear converters use documented factors to SI-family base units; area factors are squared length factors.
- Temperature conversions use affine equations through kelvin and reject values below absolute zero.
- Volume tools use US liquid customary units (not imperial or dry measures).
- Energy uses the thermochemical calorie (4.184 J); horsepower means mechanical horsepower.
- Digital storage uses decimal SI units (1 kB = 1,000 bytes), not binary IEC units.
- Values must be finite. Source and target units must be part of the selected converter. Inputs and results remain in the browser.

## Acceptance examples

| Converter | Example | Expected result |
|---|---|---|
| Length | 1 km → m | 1,000 m |
| Mass | 1 kg → lb | ≈ 2.20462262185 lb |
| Area | 1 ha → m² | 10,000 m² |
| Volume | 1 L → US gal | ≈ 0.264172052358 US gal |
| Speed | 36 km/h → m/s | 10 m/s |
| Temperature | 0 °C → °F | 32 °F |
| Time | 2 h → s | 7,200 s |
| Pressure | 1 atm → Pa | 101,325 Pa |
| Energy | 1 kWh → J | 3,600,000 J |
| Power | 1 kW → mechanical hp | ≈ 1.3410220896 hp |
| Digital storage | 1 GB → B | 1,000,000,000 B |

## Acceptance checklist

- [x] 11 converter definitions with formula notes, examples, and limitations.
- [x] Browser-local conversion engine and unit dropdown metadata.
- [x] Tests for every converter family, invalid input, temperature absolute zero, and same-unit conversion.
- [ ] Full Node source suite and Chromium desktop/tablet/mobile tests pass on the same commit.
- [ ] Independent reference review and human assistive-technology review completed.

**Status:** Implementation is being added in Phase 11. Do not sign off until CI and human review are complete.
