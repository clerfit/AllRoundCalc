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

**Status:** Initial implementation is present on the Phase 11 branch. Do not sign off until the full CI run and human review are complete.


## Supplemental implementation on the Phase 11 branch

This branch also adds 60 supplemental tools to previously started categories: 6 basic mathematics, 9 advanced mathematics, 9 physics, 8 chemistry, 8 statistics, 7 personal finance, 7 business/economics, and 6 health/fitness calculators. These additions have reference tests in the category test files. They do not imply that the entire 50-category roadmap is implemented; the other roadmap categories still require their own registries, formulas, and tests.

## Current branch inventory

| Active calculator registry | Defined tools |
|---|---:|
| Basic & Everyday Mathematics | 34 |
| Advanced Mathematics | 27 |
| Physics | 38 |
| Chemistry | 38 |
| Statistics & Probability | 40 |
| Personal Finance | 20 |
| Business & Economics | 20 |
| Health & Fitness | 20 |
| Unit Converters | 11 |
| **Total** | **248** |

This inventory counts unique calculator definitions in the branch's active registries. It does not count the 50 roadmap categories themselves as implemented. The remaining 41 planned fields/categories need their own calculator registries and formula/test coverage; independent scientific and clinical review remains necessary before production claims are made.


## Count methodology

Calculator totals count unique active registry definitions, with the 11 converter families counted from the converter-definition registry. Tests assert each active registry's unique IDs and reference behavior. This is an implementation inventory, not a guarantee that every individual subtopic in the 50-category roadmap has a corresponding tool or has passed independent domain review.
