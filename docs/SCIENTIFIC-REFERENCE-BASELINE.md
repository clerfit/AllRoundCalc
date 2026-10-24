# Scientific Reference Baseline

This file records authoritative references used as a baseline for checking formulas and constants in the AllRoundCalc catalogue. These sources support the listed subject areas; **they do not constitute a source-by-source external verification of all 295 calculators**. The formula inventory and automated tests must be reviewed alongside these references, and the remaining formulas need explicit per-calculator reference mapping before full scientific sign-off.

## Reference set

| Subject / calculator area | Reference | What it supports | Review boundary |
|---|---|---|---|
| Unit conversions and SI conversion factors | [NIST Guide to the SI — Appendix B conversion factors](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors) | Reference factors for common units; distinguish exact defined factors from rounded factors | Check each supported unit and base factor, especially customary units and temperature offsets |
| Fundamental constants | [NIST CODATA values of the fundamental physical constants](https://www.nist.gov/programs-projects/codata-values-fundamental-physical-constants) and [speed of light in vacuum](https://physics.nist.gov/cuu/Constants/Value/c.html) | Speed of light and related physical constants | Confirm constant values and units wherever used in physics, astronomy, and chemistry calculations |
| Avogadro constant and SI definitions | [NIST Guide to the SI — Section 2](https://www.nist.gov/pml/special-publication-330/sp-330-section-2) | Exact defining constants including the Avogadro constant and speed of light | Check dimensional consistency and significant digits in mole/entity conversions |
| Adult BMI | [CDC — Calculating BMI](https://www.cdc.gov/growth-chart-training/hcp/using-bmi/calculating-bmi.html) | BMI = mass in kg / height in metres squared; distinguishes child/teen BMI-for-age from adult BMI | Adult BMI is a screening measure, not a diagnosis; child/teen interpretation is age- and sex-referenced |
| Resting energy estimate | [Mifflin–St Jeor original paper, PubMed](https://pubmed.ncbi.nlm.nih.gov/2305711/) | Published adult resting-energy equations and population used to derive them | The calculator must remain labelled an estimate and should not imply clinical measurement or adolescent validation |
| Solution molarity and dilution | [OpenStax Chemistry 2e — Molarity](https://openstax.org/books/chemistry-2e/pages/3-3-molarity) | Molarity as amount per final solution volume and dilution relation C₁V₁ = C₂V₂ | Keep volume units consistent and distinguish final solution volume from solvent volume |
| Enthalpy and reaction heat | [OpenStax Chemistry 2e — Enthalpy](https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy) | Enthalpy, constant-pressure heat, and reaction enthalpy examples | Reaction enthalpy depends on stoichiometry and physical states; calculator inputs must match the documented model |

## Required use during sign-off

1. Map each catalogue ID to a suitable primary or authoritative reference, rather than treating this general source list as coverage for every equation.
2. Recompute the documented example independently with units and sign conventions shown.
3. Check input domains, boundary cases, rounding, and numerical stability against the chosen model.
4. Record disagreements as defects and add regression tests before closing them.
5. Keep independent review, automated tests, and production verification as separate acceptance statuses.

## Current status

- The current source inventory lists 295 formulas and documented examples.
- Automated source tests check registry integrity, required metadata, explicit test-suite references, inventory synchronization, and selected numeric-overflow cases.
- One confirmed convention gap was corrected: normal stress now accepts signed axial force and documents positive tension / negative compression.
- Full independent reference mapping and subject-matter sign-off for all 295 calculator IDs remain open.
