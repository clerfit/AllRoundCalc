# Phase 05 — Physics Formula Catalogue

**Status: In progress.** This first implementation slice provides 29 browser-local introductory physics calculators. The formulas are standard introductory models; automated reference examples and domain tests verify the implemented cases, not every possible value or every real-world condition. Independent formula review and broader regression remain part of Phase 21.

## Conventions and limitations

- SI units are used throughout. Enter values in the units shown beside each input.
- Calculations run in the visitor's browser; no calculator input needs to be sent to a server.
- Results use JavaScript IEEE-754 double-precision arithmetic and are formatted to at most 12 significant digits.
- Physical models include assumptions (constant acceleration, uniform gravity, ideal springs, ohmic behavior, or the angle between force and displacement) where relevant. Read each calculator's note.
- Finite numeric input is required. Invalid domains and non-finite results are rejected.
- These tools are educational calculations, not substitutes for instrument calibration, engineering design review, or professional safety calculations.

## Calculator inventory

| Calculator | Formula | Domain and assumptions | Reference example |
|---|---|---|---|
| Speed from distance and time | v_avg = d / t | Distance ≥ 0; elapsed time > 0. Average speed is non-negative and does not convey direction. | 150 m / 10 s = 15 m/s |
| Acceleration from velocity change | a_avg = (v − u) / t | Signed initial/final one-dimensional velocities; elapsed time > 0. | (14 − 2) m/s / 4 s = 3 m/s² |
| Displacement with constant acceleration | s = ut + ½at² | Acceleration is constant; elapsed time ≥ 0; velocities and acceleration are signed. | u = 3 m/s, a = 2 m/s², t = 4 s → 28 m |
| Newton's second law | F_net = ma | Mass ≥ 0; acceleration may be signed in one dimension. Force is net force. | 2 kg × 3 m/s² = 6 N |
| Weight | W = mg | Mass and gravitational field strength ≥ 0. g is supplied by the user, not assumed universal. | 60 kg × 9.80665 m/s² = 588.399 N |
| Linear momentum | p = mv | One-dimensional signed velocity; mass ≥ 0. | 3 kg × (−4 m/s) = −12 kg·m/s |
| Kinetic energy | K = ½mv² | Translational motion; mass and speed ≥ 0. | ½ × 2 kg × (3 m/s)² = 9 J |
| Gravitational potential energy change | ΔU = mgh | Height measured from a chosen reference; approximately uniform g; entered height ≥ 0. | 2 kg × 9.8 m/s² × 5 m = 98 J |
| Work by a constant force | W = Fd cos θ | Constant force; θ is the angle between force and displacement, 0°–180°. | 10 N × 3 m × cos 60° = 15 J |
| Average mechanical power | P_avg = W / t | Elapsed time > 0; work can be signed. | 120 J / 4 s = 30 W |
| Density | ρ = m / V | Mass ≥ 0; volume > 0. | 2 kg / 0.001 m³ = 2000 kg/m³ |
| Pressure | p = F / A | Normal force magnitude ≥ 0; area > 0; average/uniform pressure model. | 100 N / 0.5 m² = 200 Pa |
| Ohm's law voltage | V = IR | Resistance ≥ 0; assumes ohmic behavior under applicable conditions. | 2 A × 6 Ω = 12 V |
| Electrical power | P = VI | Signed voltage/current values are allowed; interpret the sign with the passive sign convention and chosen reference directions. | 12 V × 2 A = 24 W |
| Wave speed | v = fλ | Frequency and wavelength ≥ 0; speed refers to propagation speed in the relevant medium. | 50 Hz × 0.4 m = 20 m/s |
| Spring-force magnitude | |F| = kx | Ideal Hooke's-law spring within its elastic range; spring constant and extension magnitude ≥ 0. | 200 N/m × 0.05 m = 10 N |

| Projectile range | R = v² sin(2θ) / g | Launch/landing heights equal, no air resistance, 0° ≤ θ ≤ 90°, g > 0. | 20 m/s at 30° with g = 9.8 m/s² → about 35.346 m |
| Projectile flight time | T = 2v sin(θ) / g | Launch/landing heights equal, no air resistance, g > 0. | 20 m/s at 30° with g = 10 m/s² → 2 s |
| Projectile maximum height | H = v² sin²(θ) / (2g) | Height above launch point; no air resistance, g > 0. | 20 m/s at 30° with g = 10 m/s² → 5 m |
| Impulse | J = FΔt | Constant net force; signed force and non-negative time interval. | 5 N for 3 s → 15 N·s |
| Spring potential energy | U = ½kx² | Ideal spring within its elastic range; k and extension magnitude ≥ 0. | 200 N/m and 0.1 m → 1 J |
| Newtonian gravitational force | F = Gm₁m₂/r² | Point-mass approximation; masses ≥ 0, center separation > 0; G = 6.67430 × 10⁻¹¹ N·m²/kg². | Two 1 kg masses 1 m apart → 6.6743 × 10⁻¹¹ N |
| Coulomb force magnitude | F = kₑ|q₁q₂|/r² | Point charges in vacuum; separation > 0; magnitude only, not direction. | 1 μC and 2 μC separated by 1 m → about 0.0179751 N |
| Series resistance | Rₑq = ΣRᵢ | Ideal series resistors; each resistance ≥ 0. | 2 Ω, 3 Ω, 5 Ω → 10 Ω |
| Two resistors in parallel | 1/Rₑq = 1/R₁ + 1/R₂ | Ideal resistors; a zero-ohm branch gives zero equivalent resistance. | 6 Ω ∥ 3 Ω → 2 Ω |
| Heat transfer by temperature change | Q = mcΔT | Specific heat is treated as constant; ΔT may be signed. | 2 kg × 4200 J/(kg·K) × 5 K → 42000 J |
| Linear thermal expansion | ΔL = αL₀ΔT | Small-strain approximation and uniform temperature change. | 2 m × 0.000012/K × 50 K → 0.0012 m |
| Thin-lens image distance | 1/f = 1/dₒ + 1/dᵢ | Consistent thin-lens sign convention; dₒ > 0; image at infinity is reported as no finite result. | f = 0.1 m, dₒ = 0.3 m → dᵢ = 0.15 m |
| Thin-lens magnification | m = −dᵢ/dₒ | Signed image distance; object distance > 0. | dᵢ = 0.15 m, dₒ = 0.3 m → m = −0.5 |

## Reference material for independent review

1. OpenStax, [Physics](https://openstax.org/details/books/physics) — introductory mechanics, forces, energy, momentum, waves, and electricity.
2. OpenStax, [University Physics Volume 1](https://openstax.org/details/books/university-physics-volume-1) — kinematics, Newton's laws, work and energy, momentum, and oscillations.
3. OpenStax, [University Physics Volume 2](https://openstax.org/details/books/university-physics-volume-2) — fluids, thermodynamics, and electricity and magnetism.
4. NIST, [Guide for the Use of the International System of Units (SI)](https://www.nist.gov/pml/special-publication-811) — SI units and notation.

These are reference starting points; Phase 21 should confirm the exact relationships, conventions, and limits for each calculator against the relevant sections and independent worked examples.

## Automated verification checklist

- [x] One calculation definition and visible formula contract for each of 29 IDs.
- [x] Reference-example assertions for all 29 calculators.
- [x] Tests for physical-domain validation, signed quantities, zero denominators, and non-finite inputs.
- [x] Responsive browser checks for catalogue navigation and calculator interaction.
- [x] Automated WCAG 2.1 A/AA axe checks on all 29 Phase 05 calculator routes.
- [ ] Independent numerical review of all formulas and assumptions (Phase 21).
- [ ] Human screen-reader/assistive-technology review (Phase 22).
- [ ] Full-site security, SEO, performance, and release acceptance (Phases 20–23).

## Scope boundaries

This phase is an introductory first set, not a complete physics library. It does not yet include projectile trajectories, collisions, circuits with multiple components, thermodynamics, optics, relativistic mechanics, uncertainty propagation, vector-component solvers, or unit conversion across arbitrary input units. Those can be considered for later expansion after formula contracts and test fixtures are reviewed.
