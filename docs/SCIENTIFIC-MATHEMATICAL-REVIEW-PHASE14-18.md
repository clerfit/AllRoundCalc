# Scientific and Mathematical Review — Phase 14–18 Calculator Slice

**Review status:** Internal formula and implementation review completed for the 18 calculators listed below. This is not an independent external subject-matter certification and does not certify the entire AllRoundCalc catalogue.

**Reviewed source:** `assets/js/phase14-17-calculations.js` and `assets/js/specialized-calculations.js` on the Phase 18–20 branch.

## Review matrix

| Calculator | Mathematical model reviewed | Key assumptions / limits |
|---|---|---|
| Normal stress | Signed average axial stress = force / area; N/mm² is MPa | Positive force is tension and negative force is compression; average stress only; does not assess structural safety, buckling, fatigue, or stress concentration |
| Torque from force | Torque magnitude = force × perpendicular lever arm | Force is perpendicular; angled forces require the perpendicular component |
| Electrical power | P = V × I | DC/resistive-load model; AC real power may require power factor and waveform data |
| Concrete volume | Rectangular volume = length × width × depth | Ideal geometry; no waste/order allowance |
| Paint quantity | Litres = area × coats / coverage | User-supplied coverage; surface and waste effects excluded |
| Trip fuel cost | Distance × (L/100 km) / 100 × price/L | User-supplied average consumption and price; other trip costs excluded |
| Travel time | Time = distance / positive average speed | Moving time only; stops and traffic excluded |
| Weighted grade | Sum(score × weight) / sum(weights) | Matching lists and positive total weight; scores must share one scale |
| Required exam score | (target × 100 − current score × completed weight) / remaining weight | Completed and remaining weights must total 100%; out-of-range result means target is infeasible |
| Great-circle distance | Haversine central angle × mean Earth radius 6,371.0088 km | Spherical-Earth approximation, not a road route or ellipsoidal survey |
| Initial compass bearing | Spherical initial-bearing atan2 formula, normalized to [0°, 360°) | Undefined for coincident/antipodal coordinate cases |
| Light travel time | Distance in AU × 149,597,870,700 m / 299,792,458 m·s⁻¹ | Vacuum propagation; ignores media and relativistic/gravitational effects |
| Stellar parallax distance | Parsecs = 1 / parallax in arcseconds | Positive measured parallax; uncertainty requires statistical treatment |
| Plant population | Plot area / (row spacing × within-row spacing), after cm-to-m conversion | Ideal planting positions; field boundaries and germination excluded |
| Irrigation water volume | Litres = area (m²) × depth (mm) | Net uniform depth; excludes losses and system efficiency |
| Electricity usage cost | kWh × user-entered price per kWh | Rate and currency supplied by user; tariff extras excluded |
| Electricity emissions | kWh × user-entered kg CO₂e/kWh factor | Factor must match geography, year, source, and reporting boundary |
| OEE | Availability fraction × performance fraction × quality fraction × 100% | Compatible definitions/time window; each percentage constrained to 0–100% |

## Implementation checks

- Formula examples are stored with each definition and asserted in source-level tests.
- Tests cover registry uniqueness, representative expected outputs, invalid geographic domains, undefined coincident bearing, non-positive parallax, zero divisors, mismatched weighted-grade lists, inconsistent assessment weights, and invalid percentage domains.
- Numeric formatting now rejects a non-finite result caused by overflow even when every individual input is finite.
- The normal-stress calculator now accepts signed axial force and explicitly documents the tension/compression sign convention; a negative-force reference case is covered by regression tests.
- Weighted-grade input parsing now rejects blank list elements rather than silently interpreting an empty element as zero.
- All outputs remain estimates where assumptions or user-provided factors materially affect accuracy; the limitations are exposed in the calculator metadata.

## Sign-off boundary and remaining evidence

**Internal mathematical/formula review for this 18-calculator slice: complete.** This review confirms the implemented equations against their stated models and examples; it does not validate the suitability of any result for safety-critical engineering, medical, legal, financial, or regulated decisions.

The following are still required before a release-wide scientific sign-off:
1. Review every other calculator in the full catalogue against an authoritative reference and its implementation, not just these 18 additions.
2. Obtain an independent subject-matter review if the project requires independent certification.
3. Run the full CI/browser suite on the final branch head and retain the result.
4. Verify live UI units, labels, input ranges, rounding, and example parity after deployment.

Do not describe the entire catalogue or production release as scientifically certified until these separate items are evidenced.
