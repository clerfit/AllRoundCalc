# Phase 06 — Chemistry Formula Catalogue

**Status: In progress.** This initial implementation slice provides 22 browser-local chemistry calculators. Automated examples and domain tests verify selected cases only; they do not certify every possible input or replace independent chemistry review.

## Calculator inventory

| Group | Calculators |
|---|---|
| Moles and molar mass | Amount from mass; mass from amount; particles from moles; moles from particles |
| Solutions and concentration | Molarity; moles from molarity; dilution; solute mass for solution preparation; mass percent; volume percent; mass-based ppm |
| Physical properties | Density from mass and volume |
| Gases and thermodynamics | Ideal-gas pressure; volume; temperature; combined gas law; heat transfer from specific heat |
| Acids and bases | Strong-acid pH estimate; strong-base pH estimate; pH from pOH |
| Reaction calculations | Percent yield; percent purity |

## Formula assumptions and unit conventions

- Mass-based amount calculations require a user-supplied molar mass in g/mol; no automatic chemical formula parser or periodic table lookup is claimed.
- Avogadro constant is 6.02214076 × 10²³ mol⁻¹ exactly.
- Molarity uses moles per liter of final solution. Dilution uses C₁V₁ = C₂V₂ and rejects a smaller final volume.
- Gas laws use SI units: pressure Pa absolute, volume m³, temperature K, amount mol, and R = 8.31446261815324 Pa·m³·mol⁻¹·K⁻¹.
- Ideal-gas outputs assume ideal behavior; high pressure, low temperature, and reactive/associating gases can deviate.
- pH tools are limited to ideal dilute, fully dissociated strong electrolytes; the strong-base tool assumes a monohydroxide base and pKw ≈ 14 at 25 °C. These are not general acid/base equilibrium solvers.
- Mass percent and purity require the numerator not to exceed total mass. Volume percent uses measured final mixture volume; volumes may not be additive.
- Ppm is mass-based (mg/kg). The mg/L approximation is not automatically assumed.
- Heat transfer uses q = mcΔT with constant specific heat.

## Verification references to consult

- IUPAC Gold Book: https://goldbook.iupac.org/
- NIST SI units and constants: https://www.nist.gov/pml/owm/metric-si/si-units
- OpenStax Chemistry 2e: https://openstax.org/details/books/chemistry-2e

## Phase 06 acceptance checklist

- [x] Current implementation inventory and assumptions documented.
- [x] Browser-local calculation module with finite-input and domain validation.
- [x] Field-level help text for chemistry inputs.
- [x] Automated reference examples and invalid-domain tests added to CI.
- [ ] Independently review formulas and examples against authoritative chemistry references.
- [ ] Expand coverage to balanced-equation stoichiometry, limiting reactants, empirical/molecular formulas, equilibrium, buffers, titration, electrochemistry, kinetics, thermochemistry, and colligative properties.
- [ ] Complete broader regression, keyboard, screen-reader, and mobile checks in later release QA.

A phase is not complete merely because this initial slice and its tests exist.
