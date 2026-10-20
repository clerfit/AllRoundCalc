# Phase 06 — Chemistry Formula Catalogue

**Status: Implementation present for the documented introductory scope; do not sign off until the latest CI run and independent review are confirmed.** The current library provides 30 browser-local chemistry calculators. This is not an exhaustive chemistry reference; independent scientific review remains in Phase 21. Automated examples and domain tests verify selected cases only; they do not certify every possible input or replace independent chemistry review.

## Calculator inventory

| Group | Calculators |
|---|---|
| Moles and molar mass | Amount from mass; mass from amount; particles from moles; moles from particles; elemental mass percent |
| Solutions and concentration | Molarity; moles from molarity; dilution; solute mass for solution preparation; mass percent; volume percent; mass-based ppm; molality; mole fraction |
| Physical properties | Density from mass and volume |
| Gases and thermodynamics | Ideal-gas pressure; volume; temperature; combined gas law; heat transfer from specific heat; reaction enthalpy; Dalton partial-pressure sum |
| Acids and bases | Strong-acid pH estimate; strong-base pH estimate; pH from pOH |
| Reaction calculations | Percent yield; percent purity; stoichiometric mole conversion; titration concentration; atom economy |

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

- [x] Current implementation inventory and assumptions documented.\n- [x] 30 calculator definitions with input-level help, formula notes, worked examples, and stated limitations.\n- [x] Source tests are defined for reference examples and invalid domains; latest CI result must be checked before sign-off.\n- [x] Browser tests and automated WCAG 2.1 A/AA checks are configured for chemistry routes; latest CI result must be checked before sign-off.
- [x] Browser-local calculation module with finite-input and domain validation.
- [x] Field-level help text for chemistry inputs.
- [x] Automated reference examples and invalid-domain tests added to CI.
- [ ] Independently review formulas and examples against authoritative chemistry references.
- [ ] Future expansion may add full limiting-reactant workflows, empirical/molecular formula derivation, equilibrium and buffers, electrochemistry, kinetics, and colligative properties; these are outside this introductory release scope.
- [ ] Complete broader regression, keyboard, screen-reader, and mobile checks in later release QA.

The documented 30-calculator introductory implementation is present. Phase 06 should be signed off only after the latest CI run passes. Independent chemistry review, human screen-reader testing, and full-site release checks remain explicitly open in Phases 20–23.
