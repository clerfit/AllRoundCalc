# Scientific Review Inventory — AllRoundCalc Catalogue (295 Definitions)

**Inventory scope:** All 295 current calculator definitions across 13 source modules, including core and advanced mathematics, physics, chemistry, statistics, finance, business, health/fitness, units, date/time, computer science, and Phases 14–18.

**How to interpret this inventory:** The formula and worked example are copied from the current source definitions to make the review surface complete and auditable. Existing automated suites exercise documented reference examples and domain cases. This inventory is not, by itself, proof that every formula is scientifically correct, and it does not claim independent external certification. Source-specific assumptions are shown where the definition exposes them.

**Catalogue-level checks:** The Phase 21 test asserts the 295-definition total, global ID uniqueness, per-module counts, required metadata, and a test-file reference for every calculator ID. Phase 22 adds cross-catalog overflow cases. The independent formula review against authoritative references remains open for the complete catalogue.

### Core mathematics

| ID | Calculator | Formula / method | Documented example | Limitation / review note |
|---|---|---|---|---|
| `basic-arithmetic` | Basic Arithmetic Calculator | a + b, a − b, a × b, or a ÷ b | 12 + 5 = 17 | — |
| `fraction-calculator` | Fraction Calculator | a/b ± c/d = (ad ± bc)/bd; multiplication = ac/bd; division = ad/bc | 1/2 + 1/3 = 5/6 | — |
| `decimal-calculator` | Decimal Calculator | Selected arithmetic operation on a and b | 2.75 + 1.60 = 4.35 | — |
| `powers` | Exponents and Powers | y = base^exponent | 2^5 = 32 | — |
| `roots` | Square Root and Nth Root | y = nth root of x | √144 = 12 | — |
| `absolute-value` | Absolute Value | \|x\| = x if x ≥ 0, otherwise −x | \|-18\| = 18 | — |
| `percentage` | Percentage Calculator | result = value × rate / 100 | 15% of 800 = 120 | — |
| `percentage-change` | Percentage Increase / Decrease | (new − original) / original × 100% | 200 to 250 = 25% increase | — |
| `discount` | Discount Calculator | discount = price × rate / 100; final = price − discount | ₹1,500 less 20% = ₹1,200 | — |
| `tax` | Tax Calculator | Added: price × (1 + rate/100); included tax: total × rate/(100 + rate) | ₹1,000 plus 18% = ₹1,180 | — |
| `tip-split` | Tip and Bill Split | tip = bill × rate/100; per person = (bill + tip)/people | ₹1,000 + 10%, split 4 ways = ₹275 each | — |
| `ratio-simplifier` | Ratio Simplifier | Divide both terms by their greatest common divisor | 24:36 = 2:3 | — |
| `proportion` | Proportion Calculator | d = (b × c) / a, for a ≠ 0 | 3/90 = 5/d gives d = 150 | — |
| `proportion-type` | Direct / Inverse Proportion | Direct: new y = y × new x/x; inverse: new y = y × x/new x | Direct: y=10 at x=2 gives y=25 at x=5 | — |
| `mean` | Arithmetic Mean | mean = sum(values) / count(values) | 10, 20, 30 → 20 | — |
| `weighted-mean` | Weighted Average | sum(value × weight) / sum(weights) | 80 (weight 2), 90 (weight 3) → 86 | — |
| `rounding` | Rounding and Precision | Round to the requested decimal place; exact ties away from zero | 2.345 to 2 places → 2.35 | — |
| `scientific-notation` | Scientific Notation | value = coefficient × 10^exponent | 45000 = 4.5 × 10⁴ | — |
| `significant-figures` | Significant Figures | Round at the place implied by the requested significant figures | 1234 to 3 significant figures → 1230 | — |
| `base-converter` | Integer Base Converter | Represent the same integer in a different positional base | 25₁₀ = 11001₂ | — |
| `gcd-lcm` | GCD and LCM | LCM(a,b) = \|a × b\| / GCD(a,b), when GCD ≠ 0 | GCD(12,18)=6; LCM=36 | — |
| `prime-check` | Prime Number Checker | Test integer divisors up to floor(√n) | 29 is prime | — |
| `prime-factorization` | Prime Factorization | Repeatedly divide by prime factors | 360 = 2³ × 3² × 5 | — |
| `factors-multiples` | Factors and Multiples | Factors divide n with zero remainder; multiples are k × n | Factors of 12: 1, 2, 3, 4, 6, 12 | — |
| `modulo` | Modulo and Remainder | a = bq + r, with 0 ≤ r < \|b\| | −7 mod 3 = 2 under Euclidean modulo | — |
| `reciprocal` | Reciprocal | reciprocal = 1/x | 1/0.25 = 4 | — |
| `ratio-percentage` | Ratio to Percentages | share A = a/(a+b) × 100%; share B = b/(a+b) × 100% | 2:3 → 40% and 60% | — |
| `compare-difference` | Number Comparison and Difference | signed difference = a − b; absolute difference = \|a − b\| | 10 and 7 → difference 3 | — |
| `fraction-to-decimal` | Fraction to Decimal Converter | decimal = numerator / denominator; percent = 100 × decimal | 3/8 = 0.375 = 37.5% | — |
| `decimal-to-fraction` | Decimal to Fraction Converter | Choose the fraction with smallest absolute error among denominators up to the selected limit | 0.75 → 3/4 | — |
| `absolute-percentage-error` | Absolute Percentage Error | \|observed − reference\| / \|reference\| × 100% | Observed 92 vs reference 100 → 8% | — |
| `percentage-point-change` | Percentage-Point Change | percentage-point change = ending rate − starting rate | 12% to 15% = +3 percentage points | — |
| `unit-price-comparison` | Unit Price Comparison | unit price = price / quantity | ₹120 for 2 kg vs ₹90 for 1.5 kg → both ₹60/kg | — |
| `weighted-average-basic` | Weighted Average | weighted mean = Σ(value × weight) / Σ(weight) | Values 10,20 with weights 1,3 → 17.5 | — |

### Advanced mathematics

| ID | Calculator | Formula / method | Documented example | Limitation / review note |
|---|---|---|---|---|
| `linear-equation` | Linear Equation Solver | x = (c − b) / a, where a ≠ 0 | 3x + 2 = 11 → x = 3 | — |
| `quadratic-equation` | Quadratic Equation Solver | D = b² − 4ac; x = (−b ± √D) / (2a), where a ≠ 0 | x² − 3x + 2 = 0 → roots 2 and 1 | — |
| `linear-system-2x2` | Two-Variable Linear System | Δ = a₁b₂ − a₂b₁; x = (c₁b₂ − c₂b₁)/Δ; y = (a₁c₂ − a₂c₁)/Δ, for Δ ≠ 0 | 2x + y = 7; x − 2y = 6 → x = 4, y = −1 | — |
| `logarithm` | Logarithm Calculator | logᵦ(x) = ln(x) / ln(b); x > 0, b > 0, b ≠ 1 | log₁₀(1000) = 3 | — |
| `exponential-equation` | Exponential Equation Solver | x = ln(t/k) / ln(b), when t/k > 0, b > 0, b ≠ 1 and k ≠ 0 | 2·3ˣ = 54 → x = 3 | — |
| `trigonometry` | Trigonometry Calculator | sin(θ), cos(θ), or tan(θ); degree inputs are converted to radians before evaluation | sin(30°) = 0.5 | — |
| `inverse-trigonometry` | Inverse Trigonometry Calculator | asin(x) for −1 ≤ x ≤ 1; acos(x) for −1 ≤ x ≤ 1; atan(x) for real x | asin(0.5) = 30° = π/6 radians | — |
| `angle-converter` | Degree and Radian Converter | Radians = degrees × π / 180 | 180° = π radians | — |
| `slope` | Slope of a Line | m = (y₂ − y₁) / (x₂ − x₁), when x₂ ≠ x₁ | (1, 2) and (3, 6) → slope 2 | — |
| `distance-midpoint` | Distance and Midpoint | d = √((x₂−x₁)²+(y₂−y₁)²); M = ((x₁+x₂)/2, (y₁+y₂)/2) | (0, 0) and (3, 4) → distance 5; midpoint (1.5, 2) | — |
| `circle` | Circle Area and Circumference | Area = πr²; circumference = 2πr | r = 2 → area ≈ 12.5664; circumference ≈ 12.5664 | — |
| `arithmetic-sequence` | Arithmetic Sequence and Series | aₙ = a₁ + (n−1)d; Sₙ = n(a₁+aₙ)/2 | a₁ = 3, d = 2, n = 5 → a₅ = 11; S₅ = 35 | — |
| `geometric-sequence` | Geometric Sequence and Series | aₙ = a₁rⁿ⁻¹; Sₙ = a₁(1−rⁿ)/(1−r) for r ≠ 1; if r = 1, Sₙ = na₁ | a₁ = 2, r = 3, n = 4 → a₄ = 54; S₄ = 80 | — |
| `polynomial-derivative` | Polynomial Differentiation | Term by term: d(cxⁿ)/dx = cnxⁿ⁻¹; derivative of a constant is 0 | 2, 3, 4 represents 2x² + 3x + 4 → derivative 4x + 3 | — |
| `polynomial-integral` | Polynomial Definite Integral | ∫ₐᵇ cxⁿ dx = c(bⁿ⁺¹ − aⁿ⁺¹)/(n+1), term by term for integer n ≥ 0 | ∫₀³ x² dx = 9 | — |
| `complex-numbers` | Complex Number Calculator | i² = −1; division uses the conjugate of the non-zero denominator | (1 + 2i) + (3 + 4i) = 4 + 6i | — |
| `matrix-2x2` | 2×2 Matrix Determinant and Inverse | det(A) = ad − bc; A⁻¹ = (1/det(A))[[d, −b], [−c, a]] when det(A) ≠ 0 | A = [[1, 2], [3, 4]] → det(A) = −2 | — |
| `vectors-2d` | 2D Vector Calculator | u·v = uₓvₓ + uᵧvᵧ; \|u\| = √(uₓ²+uᵧ²); cos θ = (u·v)/(\|u\|\|v\|) | u = (1, 2), v = (3, 4) → dot product 11 | — |
| `pythagorean-theorem` | Pythagorean Theorem | c = √(a² + b²); a = √(c² − b²); b = √(c² − a²) | Legs 3 and 4 → hypotenuse 5 | — |
| `cylinder-volume` | Cylinder Volume and Surface Area | V = πr²h; A = 2πr(r + h) | r = 2, h = 5 → V ≈ 62.8319 | — |
| `sphere-volume` | Sphere Volume and Surface Area | V = 4πr³/3; A = 4πr² | r = 3 → V ≈ 113.0973; A ≈ 113.0973 | — |
| `distance-3d` | 3D Point Distance | d = √((x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²) | (0,0,0) to (2,3,6) → 7 | — |
| `cylinder-lateral-area` | Cylinder Lateral Surface Area | A = 2πrh | r = 2, h = 5 → A ≈ 62.8319 | — |
| `cone-volume` | Cone Volume and Surface Area | V = πr²h/3; A = πr(r + √(r²+h²)) | r = 3, h = 4 → V ≈ 37.699; area ≈ 75.398 | — |
| `rectangle-measures` | Rectangle Area and Perimeter | A = lw; P = 2(l+w); diagonal = √(l²+w²) | Length 3, width 4 → area 12, perimeter 14, diagonal 5 | — |
| `circle-measures` | Circle Area and Circumference | A = πr²; C = 2πr | r = 2 → area ≈ 12.566; circumference ≈ 12.566 | — |
| `linear-inequality` | Linear Inequality Solver | Solve ax + b relation c; dividing by a < 0 reverses the inequality | −2x + 4 ≤ 10 → x ≥ −3 | — |

### Physics

| ID | Calculator | Formula / method | Documented example | Limitation / review note |
|---|---|---|---|---|
| `speed-distance-time` | Speed from Distance and Time | Average speed = distance / time; distance ≥ 0, time > 0 | 150 m in 10 s → 15 m/s | — |
| `acceleration` | Acceleration from Velocity Change | Average acceleration a = (v − u) / t; t > 0 | From 2 m/s to 14 m/s in 4 s → 3 m/s² | — |
| `kinematic-displacement` | Displacement with Constant Acceleration | s = ut + ½at²; acceleration is constant and t ≥ 0 | u = 3 m/s, a = 2 m/s², t = 4 s → 28 m | — |
| `newtons-second-law` | Newton's Second Law | Net force F = ma; mass ≥ 0 | 2 kg × 3 m/s² → 6 N | — |
| `weight` | Weight from Mass and Gravity | Weight W = mg; mass and g ≥ 0 | 60 kg × 9.80665 m/s² → 588.399 N | — |
| `momentum` | Linear Momentum | Momentum p = mv; mass ≥ 0; velocity may be signed | 3 kg moving at −4 m/s → −12 kg·m/s | — |
| `kinetic-energy` | Kinetic Energy | Kinetic energy K = ½mv²; mass and speed ≥ 0 | 2 kg moving at 3 m/s → 9 J | — |
| `gravitational-potential-energy` | Gravitational Potential Energy | ΔU = mgh; mass, g, and height ≥ 0 for this height-above-reference form | 2 kg at 5 m with g = 9.8 m/s² → 98 J | — |
| `mechanical-work` | Work by a Constant Force | W = Fd cos θ; angle is between the force and displacement vectors | 10 N over 3 m at 60° → 15 J | — |
| `mechanical-power` | Average Mechanical Power | Average power P = W / t; time > 0; work may be signed | 120 J in 4 s → 30 W | — |
| `density` | Density | Density ρ = m / V; mass ≥ 0, volume > 0 | 2 kg in 0.001 m³ → 2000 kg/m³ | — |
| `pressure` | Pressure from Force and Area | Pressure p = F / A; force ≥ 0, area > 0 | 100 N over 0.5 m² → 200 Pa | — |
| `ohms-law` | Ohm's Law — Voltage | V = IR; resistance ≥ 0; assumes an ohmic component under applicable conditions | 2 A × 6 Ω → 12 V | — |
| `electrical-power` | Electrical Power | P = VI; passive sign convention assumed for signed values | 12 V × 2 A → 24 W | — |
| `wave-speed` | Wave Speed | Wave speed v = fλ; frequency and wavelength ≥ 0 | 50 Hz × 0.4 m → 20 m/s | — |
| `spring-force` | Spring Force Magnitude | \|F\| = kx (Hooke's law magnitude); assumes an ideal spring within its elastic range | 200 N/m × 0.05 m → 10 N | — |
| `projectile-range` | Projectile Range | R = v² sin(2θ) / g; same launch and landing height; no air resistance | 20 m/s at 30° with g = 9.8 m/s² → about 35.346 m | — |
| `projectile-flight-time` | Projectile Flight Time | T = 2v sin(θ) / g; same launch and landing height; no air resistance | 20 m/s at 30° with g = 10 m/s² → 2 s | — |
| `projectile-max-height` | Projectile Maximum Height | H = v² sin²(θ) / (2g); no air resistance | 20 m/s at 30° with g = 10 m/s² → 5 m | — |
| `impulse` | Impulse from Constant Force | Impulse J = FΔt = change in momentum for the net force | 5 N for 3 s → 15 N·s | — |
| `spring-potential-energy` | Spring Potential Energy | U = ½kx²; ideal spring within its elastic range | 200 N/m and 0.1 m → 1 J | — |
| `gravitation-force` | Newtonian Gravitational Force | F = Gm₁m₂/r²; G = 6.67430 × 10⁻¹¹ N·m²/kg² | Two 1 kg point masses 1 m apart → 6.6743 × 10⁻¹¹ N | — |
| `coulomb-force` | Coulomb Force Magnitude | F = kₑ\|q₁q₂\|/r²; point charges in vacuum; kₑ ≈ 8.9875517923 × 10⁹ N·m²/C² | 1 μC and 2 μC separated by 1 m → about 0.0179751 N | — |
| `resistance-series` | Series Resistance | Rₑq = R₁ + R₂ + …; each resistance ≥ 0 | 2 Ω, 3 Ω, 5 Ω → 10 Ω | — |
| `resistance-parallel` | Two Resistors in Parallel | 1/Rₑq = 1/R₁ + 1/R₂; ideal zero-ohm branch gives Rₑq = 0 | 6 Ω ∥ 3 Ω → 2 Ω | — |
| `heat-energy` | Heat Transfer by Temperature Change | Q = mcΔT; specific heat is treated as constant over the temperature interval | 2 kg × 4200 J/(kg·K) × 5 K → 42000 J | — |
| `thermal-expansion` | Linear Thermal Expansion | ΔL = αL₀ΔT; small temperature changes and uniform material temperature assumed | 2 m × 0.000012/K × 50 K → 0.0012 m | — |
| `thin-lens-image-distance` | Thin Lens Image Distance | 1/f = 1/dₒ + 1/dᵢ, so dᵢ = 1 / (1/f − 1/dₒ); dₒ > 0 | f = 0.1 m and dₒ = 0.3 m → dᵢ = 0.15 m | — |
| `lens-magnification` | Thin Lens Magnification | m = −dᵢ/dₒ; object distance dₒ > 0 | dᵢ = 0.15 m, dₒ = 0.3 m → m = −0.5 | — |
| `centripetal-force` | Centripetal Force | F = mv²/r | m = 2 kg, v = 3 m/s, r = 1.5 m → 12 N | — |
| `frequency-period` | Frequency and Period | f = 1/T; T = 1/f | Period 0.02 s → 50 Hz | — |
| `electrical-energy` | Electrical Energy | E = Pt | 100 W for 60 s → 6,000 J | — |
| `mechanical-efficiency` | Mechanical Efficiency | efficiency = useful output / input energy × 100% | 750 J output from 1,000 J input → 75% | — |
| `pressure-from-force-area` | Pressure from Force and Area | P = F/A | 100 N over 0.5 m² → 200 Pa | — |
| `buoyant-force` | Buoyant Force | Fᵦ = ρfluid × Vdisplaced × g | Water density 1000 kg/m³, volume 0.01 m³ → about 98.1 N | — |
| `simple-pendulum-period` | Simple Pendulum Period | T ≈ 2π√(L/g) | L = 1 m, g = 9.81 m/s² → about 2.01 s | — |
| `wave-frequency` | Wave Frequency from Speed and Wavelength | f = v/λ | Speed 340 m/s, wavelength 0.5 m → 680 Hz | — |
| `ideal-gas-state` | Ideal Gas Pressure | P = nRT/V; R = 8.314462618 J/(mol·K) | 1 mol, 273.15 K, 0.022414 m³ → about 101.3 kPa | — |

### Chemistry

| ID | Calculator | Formula / method | Documented example | Limitation / review note |
|---|---|---|---|---|
| `moles-from-mass` | Amount of Substance from Mass | n = m / M; mass ≥ 0, molar mass > 0 | 18 g / 18 g/mol → 1 mol | — |
| `mass-from-moles` | Mass from Amount of Substance | m = nM | 0.5 mol × 44.01 g/mol → 22.005 g | — |
| `particles-from-moles` | Particles from Moles | N = nNₐ; Nₐ = 6.02214076 × 10²³ mol⁻¹ exactly | 2 mol → about 1.204428152 × 10²⁴ entities | — |
| `moles-from-particles` | Moles from Number of Particles | n = N / Nₐ; Nₐ = 6.02214076 × 10²³ mol⁻¹ exactly | 6.02214076 × 10²³ entities → 1 mol | — |
| `molarity` | Molarity of a Solution | c = n / V; V > 0 | 0.5 mol in 2 L → 0.25 mol/L | — |
| `moles-from-molarity` | Moles from Molarity and Volume | n = cV | 0.2 mol/L × 0.5 L → 0.1 mol | — |
| `dilution` | Solution Dilution | C₁V₁ = C₂V₂; C₂ = C₁V₁/V₂ | 2 mol/L × 0.1 L diluted to 0.5 L → 0.4 mol/L | — |
| `solution-preparation-mass` | Solute Mass for Solution Preparation | m = cVM; assumes pure solute and complete dissolution | 0.1 mol/L × 0.25 L × 58.44 g/mol → 1.461 g | — |
| `mass-percent` | Mass Percent Concentration | Mass % = 100 × solute mass / total solution mass | 5 g solute in 100 g solution → 5% by mass | — |
| `volume-percent` | Volume Percent Concentration | Volume % = 100 × solute volume / total solution volume | 10 mL solute in 100 mL solution → 10% by volume | — |
| `ppm-mass` | Parts per Million by Mass | ppm by mass = solute mass (mg) / mixture mass (kg) | 2 mg in 1 kg mixture → 2 ppm by mass | — |
| `density-chemistry` | Density from Mass and Volume | ρ = m / V; V > 0 | 10 g / 5 mL → 2 g/mL | — |
| `ideal-gas-pressure` | Ideal Gas Pressure | P = nRT/V; R = 8.31446261815324 Pa·m³·mol⁻¹·K⁻¹ | 1 mol at 273.15 K in 0.022414 m³ → about 101.3 kPa | — |
| `ideal-gas-volume` | Ideal Gas Volume | V = nRT/P; R = 8.31446261815324 Pa·m³·mol⁻¹·K⁻¹ | 1 mol at 298.15 K and 101325 Pa → about 0.02447 m³ | — |
| `ideal-gas-temperature` | Ideal Gas Temperature | T = PV/(nR); R = 8.31446261815324 Pa·m³·mol⁻¹·K⁻¹ | 101325 Pa × 0.022414 m³ / (1 mol × R) → about 273.15 K | — |
| `gas-law-combined` | Combined Gas Law | V₂ = P₁V₁T₂/(P₂T₁); fixed amount of ideal gas | At unchanged pressure, doubling absolute temperature doubles volume | — |
| `heat-from-specific-heat` | Heat Transfer from Specific Heat | q = mcΔT; assumes specific heat is approximately constant | 1 kg × 4184 J/(kg·K) × 10 K → 41840 J | — |
| `pH-strong-acid` | pH from Strong Acid Concentration | pH ≈ −log₁₀[H⁺]; assumes [H⁺] ≈ acid concentration | 0.01 mol/L strong acid → pH ≈ 2 | — |
| `pH-strong-base` | pH from Strong Base Concentration | pOH ≈ −log₁₀[OH⁻]; pH ≈ 14 − pOH at 25 °C | 0.001 mol/L strong base → pH ≈ 11 | — |
| `ph-from-poh` | pH from pOH | pH + pOH ≈ 14 at 25 °C | pOH = 3 → pH ≈ 11 | — |
| `percent-yield` | Percent Yield | Percent yield = 100 × actual yield / theoretical yield | 8 g actual / 10 g theoretical × 100 → 80% | — |
| `percent-purity` | Percent Purity | Purity % = 100 × pure substance mass / total sample mass | 9 g pure substance in a 10 g sample → 90% | — |
| `molality` | Molality | b = n(solute) / mass(solvent in kg); solvent mass > 0 | 0.5 mol in 2 kg solvent → 0.25 mol/kg | — |
| `mole-fraction` | Mole Fraction | xᵢ = nᵢ / (nᵢ + nₒₜₕₑᵣ) | 1 mol component and 3 mol other → mole fraction 0.25 | — |
| `stoichiometric-mole-conversion` | Stoichiometric Mole Conversion | n(target) = n(known) × coefficient(target) / coefficient(known); equation must be balanced | 2 mol species with coefficient 2 maps to 3 mol species with coefficient 3 | — |
| `titration-concentration` | Titration Concentration | Cᵤ = CₜVₜ × (νᵤ/νₜ) / Vᵤ; assumes reaction reaches equivalence quantitatively | 0.1 mol/L × 0.025 L × (1/1) / 0.05 L → 0.05 mol/L | — |
| `atom-economy` | Atom Economy | Atom economy = 100 × (νdesired × Mdesired) / Σ(νreactant × Mreactant) | 80 g desired product per 100 g stoichiometric reactants → 80% | — |
| `reaction-enthalpy` | Reaction Enthalpy from Molar Enthalpy | q = nΔHₘ; use the same reaction-extent basis for n and ΔHₘ | 2 mol × −100 kJ/mol → −200 kJ | — |
| `dalton-partial-pressures` | Total Pressure from Partial Pressures | Ptotal = ΣPᵢ; ideal gas mixture assumption | 100000 Pa + 20000 Pa → 120000 Pa | — |
| `element-mass-percent` | Elemental Mass Percent in a Compound | Element mass % = 100 × (atom count × element molar mass) / compound molar mass | 4.0026 g/mol helium contribution in a 18.015 g/mol formula unit → about 22.22% | — |
| `radioactive-decay` | Radioactive Decay | N(t) = N₀ × (1/2)^(t / t½) | 80 g with half-life 5 y after 10 y → 20 g | — |
| `first-order-rate-constant` | First-Order Rate Constant from Half-Life | k = ln(2) / t½ | t½ = 10 s → k ≈ 0.0693 s⁻¹ | — |
| `ph-strong-base-concentration` | pH of a Strong Monovalent Base | pOH = −log₁₀[OH⁻]; pH ≈ 14 − pOH at 25°C | [OH⁻] = 0.01 mol/L → pH = 12 | — |
| `dilution-factor` | Dilution Factor | dilution factor = final volume / initial volume; C₂ = C₁ × V₁ / V₂ | 10 mL diluted to 100 mL → factor 10 | — |
| `henderson-hasselbalch` | Buffer pH (Henderson–Hasselbalch) | pH ≈ pKa + log₁₀([A⁻]/[HA]) | pKa 4.76, equal base and acid concentrations → pH ≈ 4.76 | — |
| `equilibrium-quotient` | Reaction Quotient Qc | Qc = Π[products]^coefficients / Π[reactants]^coefficients | Product concentration 2 with unit coefficient; reactants 1 and 1 → Qc = 2 | — |
| `faraday-electrolysis-mass` | Electrolysis Product Mass | m = I t M / (z F); F ≈ 96485.33212 C/mol | 1 A for 3600 s, M=63.546 g/mol, z=2 → about 1.185 g | — |
| `arrhenius-rate-ratio` | Arrhenius Rate Constant Ratio | k₂/k₁ = exp((Ea/R)(1/T₁ − 1/T₂)) | Ea 50 kJ/mol; 300 K to 310 K → rate increases by about 1.92× | — |

### Statistics and probability

| ID | Calculator | Formula / method | Documented example | Limitation / review note |
|---|---|---|---|---|
| `statistics-mean` | Arithmetic Mean | x̄ = Σxᵢ / n | 2, 4, 6 → mean = 4 | — |
| `statistics-median` | Median | Odd n: middle ordered value; even n: mean of the two middle ordered values. | 1, 9, 3 → median = 3 | — |
| `statistics-mode` | Mode(s) | Mode = value(s) with maximum frequency | 1, 2, 2, 3 → mode = 2 | — |
| `statistics-range` | Range | Range = max(x) − min(x) | 2, 5, 9 → range = 7 | — |
| `statistics-variance-population` | Population Variance | σ² = Σ(xᵢ − μ)² / N | 2, 4, 6 → population variance = 2.66666666667 | — |
| `statistics-stddev-population` | Population Standard Deviation | σ = √(Σ(xᵢ − μ)² / N) | 2, 4, 6 → population standard deviation ≈ 1.63299316186 | — |
| `statistics-variance-sample` | Sample Variance | s² = Σ(xᵢ − x̄)² / (n − 1) | 2, 4, 6 → sample variance = 4 | — |
| `statistics-stddev-sample` | Sample Standard Deviation | s = √(Σ(xᵢ − x̄)² / (n − 1)) | 2, 4, 6 → sample standard deviation = 2 | — |
| `statistics-quartiles` | Quartiles | Q1 = median(lower half); Q2 = median(all data); Q3 = median(upper half) | 1, 2, 3, 4, 5 → Q1 = 1.5, Q2 = 3, Q3 = 4.5 | — |
| `statistics-iqr` | Interquartile Range | IQR = Q3 − Q1 | 1, 2, 3, 4, 5 → IQR = 3 | — |
| `statistics-weighted-mean` | Weighted Mean | x̄w = Σ(wᵢxᵢ) / Σwᵢ | Values 80, 90 with weights 1, 3 → weighted mean = 87.5 | — |
| `statistics-geometric-mean` | Geometric Mean | GM = (Πxᵢ)^(1/n) | 2, 8 → geometric mean = 4 | — |
| `statistics-harmonic-mean` | Harmonic Mean | HM = n / Σ(1/xᵢ) | 2, 4 → harmonic mean = 2.66666666667 | — |
| `statistics-coefficient-variation` | Coefficient of Variation | CV = 100 × σ / \|μ\| | 2, 4, 6 → CV ≈ 40.8248290464% | — |
| `statistics-z-score` | Z-Score | z = (x − μ) / σ | x = 75, μ = 60, σ = 5 → z = 3 | — |
| `statistics-percentile-rank` | Percentile Rank | Percentile rank = 100 × #{xᵢ ≤ target} / n | Data 1, 2, 3, 4; target 3 → 75% | — |
| `statistics-probability-basic` | Basic Probability | P(A) = favorable outcomes / total outcomes | 3 favorable out of 8 equally likely outcomes → 0.375 | — |
| `statistics-complement` | Complement Probability | P(Aᶜ) = 1 − P(A) | P(A) = 0.3 → P(not A) = 0.7 | — |
| `statistics-union` | Union Probability | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | 0.5 + 0.4 − 0.2 = 0.7 | — |
| `statistics-independent-intersection` | Independent Events Intersection | P(A ∩ B) = P(A)P(B), only when A and B are independent | 0.5 × 0.2 = 0.1 | — |
| `statistics-conditional-probability` | Conditional Probability | P(A \| B) = P(A ∩ B) / P(B) | P(A ∩ B) = 0.2, P(B) = 0.5 → 0.4 | — |
| `statistics-bayes` | Bayes' Theorem | P(A \| +) = sensitivity × prior / [sensitivity × prior + falsePositive × (1 − prior)] | prior 0.01, sensitivity 0.9, false positive 0.05 → posterior ≈ 0.153846 | — |
| `statistics-permutations` | Permutations | P(n,r) = n! / (n − r)! | P(5, 2) = 20 | — |
| `statistics-combinations` | Combinations | C(n,r) = n! / [r!(n − r)!] | C(5, 2) = 10 | — |
| `statistics-factorial` | Factorial | n! = n × (n − 1) × … × 1; 0! = 1 | 5! = 120 | — |
| `statistics-binomial-probability` | Binomial Probability | P(X = k) = C(n,k) p^k (1 − p)^(n − k) | n = 4, k = 2, p = 0.5 → 0.375 | — |
| `statistics-binomial-mean` | Binomial Mean and Standard Deviation | μ = np; σ = √[np(1 − p)] | n = 10, p = 0.3 → mean = 3, standard deviation ≈ 1.44913767462 | — |
| `statistics-normal-z` | Normal Distribution Z-Score | z = (x − μ) / σ | x = 70, μ = 60, σ = 5 → z = 2 | — |
| `statistics-normal-cdf` | Normal Distribution Cumulative Probability | P(X ≤ x) = Φ((x − μ)/σ); Φ is evaluated with an approximation. | For x = μ, P(X ≤ x) = 0.5 | — |
| `statistics-expected-value` | Expected Value | E[X] = Σ xᵢpᵢ | Outcomes 0, 10 with probabilities 0.75, 0.25 → expected value = 2.5 | — |
| `statistics-correlation` | Pearson Correlation Coefficient | r = Σ[(xᵢ − x̄)(yᵢ − ȳ)] / √[Σ(xᵢ − x̄)² Σ(yᵢ − ȳ)²] | X: 1,2,3; Y: 2,4,6 → r = 1 | — |
| `statistics-linear-regression` | Simple Linear Regression | b = Σ[(xᵢ − x̄)(yᵢ − ȳ)] / Σ(xᵢ − x̄)²; a = ȳ − bx̄ | X: 1,2,3; Y: 2,4,6 → intercept = 0, slope = 2 | — |
| `statistics-standard-error-mean` | Standard Error of the Mean | SE = s / √n | s = 10, n = 25 → SE = 2 | — |
| `statistics-covariance` | Sample Covariance | sₓᵧ = Σ(xᵢ−x̄)(yᵢ−ȳ)/(n−1) | X: 1,2,3; Y: 2,4,6 → sample covariance = 2 | — |
| `statistics-margin-error-proportion` | Margin of Error for a Proportion | MOE = z × √(p(1−p)/n) | p = 50%, n = 400, z = 1.96 → 4.9 percentage points | — |
| `statistics-confidence-interval-mean` | Mean Confidence Interval (Known σ) | x̄ ± z × σ / √n | x̄ = 50, σ = 10, n = 100, z = 1.96 → [48.04, 51.96] | — |
| `statistics-one-sample-z` | One-Sample Z Statistic | z = (x̄ − μ₀)/(σ/√n) | x̄ 52, μ₀ 50, σ 10, n 100 → z = 2 | — |
| `statistics-r-squared` | Coefficient of Determination R² | R² = 1 − SSE/SST | X 1,2,3 and Y 2,4,6 → R² = 1 | — |
| `statistics-pooled-proportion` | Pooled Proportion | p̂ pooled = (x₁+x₂)/(n₁+n₂) | 12/100 and 18/100 → pooled proportion = 0.15 | — |
| `statistics-weighted-standard-deviation` | Weighted Standard Deviation | σw = √(Σwᵢ(xᵢ−μw)²/Σwᵢ) | Values 1,3 with equal weights → σw = 1 | — |

### Personal finance

| ID | Calculator | Formula / method | Documented example | Limitation / review note |
|---|---|---|---|---|
| `finance-simple-interest` | Simple Interest | I = Prt; A = P + I, where r is the annual rate as a decimal. | P = 1,000; r = 5%; t = 2 years → interest = 100; total = 1,100 | — |
| `finance-compound-interest` | Compound Interest | A = P(1 + r/m)^(mt); interest = A − P. | P = 1,000; r = 5%; m = 12; t = 1 → A ≈ 1,051.16 | — |
| `finance-effective-annual-rate` | Effective Annual Rate | EAR = (1 + r/m)^m − 1. | Nominal 12% compounded monthly → effective annual rate ≈ 12.6825% | — |
| `finance-loan-payment` | Fixed-Rate Loan Payment | PMT = P i / [1 − (1+i)^(-N)]; at i = 0, PMT = P/N. | 10,000 at 6% for 3 years with monthly payments → about 304.22 per month | — |
| `finance-loan-balance` | Remaining Loan Balance | Bₖ = P(1+i)^k − PMT·[((1+i)^k − 1)/i]; at i = 0, Bₖ = P − kP/N. | A zero-interest 1,200 loan over 12 monthly payments has 600 remaining after 6 payments | — |
| `finance-savings-future-value` | Savings Future Value | FV = P(1+i)^N + D·[((1+i)^N − 1)/i]; at i = 0, FV = P + DN. | Initial 500, deposit 100 monthly, 0% return for 12 months → 1,700 | — |
| `finance-savings-goal` | Savings Goal Deposit | D = [FV − P(1+i)^N]·i / [(1+i)^N − 1]; at i = 0, D = (FV − P)/N. | Target 1,200, current 0, 0% return, 12 monthly deposits → 100 per month | — |
| `finance-inflation-value` | Inflation-Adjusted Purchasing Power | Real purchasing power in future currency units = amount / (1 + inflationRate)^years. | 1,000 today at 3% annual inflation for 5 years → purchasing power ≈ 862.61 | — |
| `finance-debt-to-income` | Debt-to-Income Ratio | DTI = monthly debt payments / gross monthly income × 100%. | Monthly debt 800 and gross monthly income 4,000 → DTI = 20% | — |
| `finance-budget-share` | Budget Category Share | Category share = category spending / take-home income × 100%. | Rent 900 out of take-home income 3,000 → 30% | — |
| `finance-roi` | Investment Return (ROI) | ROI = (final value − initial cost) / initial cost × 100%. | Invest 1,000 and end with total value 1,150 → ROI = 15% | — |
| `finance-net-present-value` | Net Present Value (NPV) | NPV = −initial investment + Σ CFₜ/(1+r)^t. | Initial cost 100; cash flows 60, 60; discount rate 10% → NPV ≈ 4.13 | — |
| `finance-salary-raise` | Salary Increase | Increase = current salary × raise rate; new salary = current salary + increase. | Annual salary 40,000 with a 5% raise → increase 2,000; new salary 42,000 | — |
| `finance-future-value-annuity` | Future Value of Regular Savings | FV = PMT × (((1+i)^n − 1)/i); if i = 0, FV = PMT × n | 100 per month for 12 months at 0% → 1,200 | — |
| `finance-loan-to-value` | Loan-to-Value Ratio | LTV = loan amount / asset value × 100% | Loan 160,000 on value 200,000 → 80% | — |
| `finance-savings-rate` | Savings Rate | savings rate = savings / take-home income × 100% | Save 500 from income 2,500 → 20% | — |
| `finance-debt-payoff-time` | Debt Payoff Time Estimate | n = −ln(1 − rB/P) / ln(1+r); if r = 0, n = B/P | Balance 1,000 at 0% with payment 250 → 4 months | — |
| `finance-emergency-fund` | Emergency Fund Target | target = monthly essential expenses × target months | 25000 × 6 months = 150000 | — |
| `finance-dividend-yield` | Dividend Yield | yield = annual dividend per share / share price × 100% | Annual dividend 5, share price 100 → 5% | — |
| `finance-real-return` | Inflation-Adjusted Return | real return = ((1 + nominal return)/(1 + inflation) − 1) × 100% | Nominal return 8%, inflation 3% → about 4.85% | — |

### Business and economics

| ID | Calculator | Formula / method | Documented example | Limitation / review note |
|---|---|---|---|---|
| `business-gross-profit-margin` | Gross Profit Margin | Gross profit = revenue − COGS; gross margin = gross profit / revenue × 100%. | Revenue 10,000; COGS 6,000 → gross profit 4,000; margin 40% | — |
| `business-markup` | Markup Percentage | Markup % = (selling price − cost) / cost × 100%. | Cost 60; selling price 90 → markup 50% | — |
| `business-net-profit-margin` | Net Profit Margin | Net profit = revenue − total costs; net margin = net profit / revenue × 100%. | Revenue 10,000; total costs 8,500 → profit 1,500; margin 15% | — |
| `business-contribution-margin` | Contribution Margin | Contribution = price − variable cost; contribution ratio = contribution / price × 100%. | Price 50; variable cost 30 → contribution 20; ratio 40% | — |
| `business-break-even-units` | Break-Even Units | Break-even units = fixed costs / (selling price − variable cost); round up to a whole unit for operational planning. | Fixed costs 1,000; price 50; variable cost 30 → 50 units | — |
| `business-break-even-revenue` | Break-Even Revenue | Break-even revenue = fixed costs / [(price − variable cost) / price]. | Fixed costs 1,000; price 50; variable cost 30 → break-even revenue 2,500 | — |
| `business-revenue-growth` | Revenue Growth Rate | Growth rate = (current − previous) / previous × 100%. | Revenue rises from 8,000 to 10,000 → growth 25% | — |
| `business-cagr` | Compound Annual Growth Rate | CAGR = (ending / beginning)^(1/years) − 1. | Value rises from 100 to 121 over 2 years → CAGR 10% | — |
| `business-roi` | Business Return on Investment | ROI = net profit / investment cost × 100%. | Net profit 2,000 on investment 10,000 → ROI 20% | — |
| `business-discount-price` | Discounted Selling Price | Discount = original price × discount rate; sale price = original price − discount. | Price 80 with 25% discount → discount 20; sale price 60 | — |
| `business-sales-tax` | Sales Tax Estimate | Tax = pre-tax price × tax rate; total = price + tax. | Price 100 at 8% → tax 8; total 108 | — |
| `business-price-elasticity` | Price Elasticity of Demand | Arc elasticity = [(Q₂−Q₁)/((Q₁+Q₂)/2)] / [(P₂−P₁)/((P₁+P₂)/2)]. | Quantity 100→80 and price 10→12 → elasticity ≈ −1.2222 | — |
| `business-weighted-average` | Weighted Average | Weighted average = Σ(value × weight) / Σ(weight). | Values 10, 20 with weights 1, 3 → 17.5 | — |
| `business-customer-acquisition-cost` | Customer Acquisition Cost (CAC) | CAC = acquisition spend / new customers | Spend 12,000 to acquire 300 customers → CAC = 40 | — |
| `business-return-on-ad-spend` | Return on Ad Spend (ROAS) | ROAS = attributed revenue / ad spend | Revenue 5,000, ad spend 1,000 → ROAS = 5.0x | — |
| `business-burn-runway` | Startup Cash Runway | runway in months = available cash / monthly net burn | Cash 60,000 / burn 10,000 per month → 6 months | — |
| `business-churn-rate` | Customer Churn Rate | churn = lost customers / opening customers × 100% | 25 lost from 500 opening customers → 5% | — |
| `business-customer-lifetime-value` | Simple Customer Lifetime Value | simple LTV = monthly revenue × gross margin × lifespan months | 1000/month × 60% × 12 months = 7200 | — |
| `business-customer-retention` | Customer Retention Rate | retention = (ending − new customers)/opening customers × 100% | 500 opening + 20 new, 480 ending → 92% | — |
| `business-margin-of-safety` | Margin of Safety | margin of safety = (actual sales − break-even sales)/actual sales × 100% | Actual sales 100000, break-even 80000 → 20% | — |

### Health and fitness

| ID | Calculator | Formula / method | Documented example | Limitation / review note |
|---|---|---|---|---|
| `health-adult-bmi` | Adult Body Mass Index (BMI) | BMI = weight (kg) / height (m)². | 70 kg and 175 cm → BMI ≈ 22.86 | — |
| `health-bmr-mifflin` | Resting Energy Estimate (Mifflin–St Jeor) | Men's equation: 10W + 6.25H − 5A + 5; women's equation: 10W + 6.25H − 5A − 161. | For the men's equation: 70 kg, 175 cm, age 30 → 1,648.75 kcal/day | Requires a choice of the equation's sex-specific constant. The estimate may not fit every person; not a clinical measurement. |
| `health-tdee-estimate` | Daily Energy Expenditure Scenario | Estimated daily expenditure = resting energy estimate × activity multiplier. | 1,600 kcal/day × 1.5 → 2,400 kcal/day | A rough scenario only, not a prescription for intake or weight change. |
| `health-target-heart-rate` | Estimated Target Heart-Rate Zone | Estimated HRmax = 220 − age; zone endpoints = HRmax × intensity fraction. | Age 30 at 60–80% → estimated zone 114–152 beats/min | The 220 − age equation has substantial individual error; medications, conditions, heat, and fitness affect heart rate. |
| `health-heart-rate-reserve` | Heart-Rate Reserve Target | Target HR = (HRmax − resting HR) × intensity + resting HR; HRmax is estimated as 220 − age. | Age 30, resting HR 60, intensity 70% → estimated target 137 bpm | A rough exercise estimate only; the age-based maximum can be inaccurate. Seek clinical advice if exercise heart-rate targets are medically relevant. |
| `health-waist-height-ratio` | Waist-to-Height Ratio | Waist-to-height ratio = waist circumference / height. | Waist 80 cm and height 175 cm → 0.457 | — |
| `health-waist-hip-ratio` | Waist-to-Hip Ratio | Waist-to-hip ratio = waist circumference / hip circumference. | Waist 80 cm and hips 100 cm → 0.8 | Measurement technique affects the ratio; no individual diagnosis is made. |
| `health-body-surface-area` | Body Surface Area (Mosteller) | BSA (m²) = √[height(cm) × weight(kg) / 3600]. | 70 kg and 175 cm → BSA ≈ 1.844 m² | Population estimate; do not use this result alone for medication dosing or clinical decisions. |
| `health-one-rep-max` | One-Rep Max Estimate (Epley) | Estimated 1RM = load × (1 + repetitions/30). | 60 kg × (1 + 5/30) → estimated 1RM 70 kg | This is a formula estimate, not a recommendation to attempt a maximal lift. Use safe technique and appropriate supervision. |
| `health-running-pace` | Running Pace | Pace = elapsed minutes / distance, expressed as minutes per kilometre. | 5 km in 30 minutes → 6:00 min/km | — |
| `health-running-speed` | Running Speed | Average speed (km/h) = distance / elapsed hours. | 5 km in 30 minutes → 10 km/h | — |
| `health-met-energy` | Exercise Energy Estimate (MET) | Approximate kcal = MET × 3.5 × weight(kg) / 200 × minutes. | MET 6, 70 kg, 30 minutes → about 220.5 kcal | Population-level approximation; actual energy expenditure can differ substantially. Not suitable for medical or dietary decisions. |
| `health-training-volume` | Strength Training Volume | Training volume = load × repetitions per set × sets. | 40 kg × 8 reps × 3 sets → 960 kg-volume | Volume-load is one tracking metric and does not measure effort, technique, fatigue, or injury risk. |
| `health-body-weight-change` | Weight Change Percentage | Percentage change = (current − starting) / starting × 100%. | 60 kg to 57 kg → −5% | — |
| `health-adult-weight-range` | Adult Reference Weight Range | weight = BMI × height(m)², using a conventional adult BMI reference range | Height 170 cm → about 53.5–72.0 kg | — |
| `health-body-weight-change-rate` | Body Weight Change Rate | weekly change = (ending mass − starting mass) / elapsed weeks | 70 kg to 68 kg over 4 weeks → −0.5 kg/week | — |
| `health-exercise-energy-per-minute` | Exercise Energy Estimate from MET | gross kcal ≈ MET × 3.5 × mass(kg) / 200 × minutes | 6 MET, 70 kg, 30 min → about 220.5 kcal | — |
| `health-macro-split` | Macronutrient Grams from Calories | protein and carbohydrate ≈ 4 kcal/g; fat ≈ 9 kcal/g | 2000 kcal: 25% protein, 45% carbs, 30% fat → ~125 g, 225 g, 66.7 g | — |
| `health-training-frequency` | Weekly Training Frequency | weekly training time = sessions × minutes per session | 4 sessions × 45 min = 180 min/week | — |
| `health-step-distance` | Walking Distance from Steps | distance (km) = steps × step length (cm) / 100000 | 8000 steps × 75 cm → 6 km | — |

### Units and measurement

| ID | Calculator | Formula / method | Documented example | Limitation / review note |
|---|---|---|---|---|
| `unit-length` | Length Converter | m, km, cm, mm, mi, yd, ft, in; factors are exact international definitions where applicable. | 1 km = 1,000 m | Conversion factors and supported units are documented in the converter definition. |
| `unit-mass` | Mass Converter | kg, g, mg, lb, oz; pound and ounce use international avoirdupois definitions. | 1 kg ≈ 2.20462262185 lb | Conversion factors and supported units are documented in the converter definition. |
| `unit-area` | Area Converter | Area conversions use squared length factors; hectare and acre use defined conversion factors. | 1 ha = 10,000 m² | Conversion factors and supported units are documented in the converter definition. |
| `unit-volume` | Volume Converter | US liquid gallon and derived US quart/cup only; not imperial units or dry measures. | 1 L ≈ 0.264172052 US gal | Conversion factors and supported units are documented in the converter definition. |
| `unit-speed` | Speed Converter | Uses consistent distance/time factors; knots are nautical miles per hour. | 36 km/h = 10 m/s | Conversion factors and supported units are documented in the converter definition. |
| `unit-temperature` | Temperature Converter | Absolute temperature scales use affine conversion; kelvin cannot be negative. | 0 °C = 32 °F = 273.15 K | Conversion factors and supported units are documented in the converter definition. |
| `unit-time` | Time Converter | A day is defined as 86,400 seconds; this is not calendar/date arithmetic. | 2 h = 7,200 s | Conversion factors and supported units are documented in the converter definition. |
| `unit-pressure` | Pressure Converter | Uses standard conversion constants; mmHg uses the conventional standard factor. | 1 atm = 101,325 Pa | Conversion factors and supported units are documented in the converter definition. |
| `unit-energy` | Energy Converter | cal means thermochemical calorie (4.184 J); kcal means 1,000 cal. | 1 kWh = 3,600,000 J | Conversion factors and supported units are documented in the converter definition. |
| `unit-power` | Power Converter | hp means mechanical horsepower, not metric horsepower. | 1 kW ≈ 1.34102209 hp | Conversion factors and supported units are documented in the converter definition. |
| `unit-data` | Digital Storage Converter | Uses decimal SI multiples of 1,000, not binary KiB/MiB/GiB units. | 1 GB = 1,000,000,000 bytes | Conversion factors and supported units are documented in the converter definition. |




## Remaining catalogue sections

### Date and time

| ID | Calculator | Formula / method | Documented example | Limitation / review note |
|---|---|---|---|---|
| `dt-date-difference` | Date Difference Calculator | Calendar day difference = (end date − start date) / 86,400,000 using UTC-midnight date-only values. | 2026-01-01 to 2026-01-31 → 30 days | — |
| `dt-add-days` | Add or Subtract Calendar Days | Result date = start date + integer day count in the UTC calendar. | 2026-01-31 + 1 day → 2026-02-01 | — |
| `dt-business-days` | Business Days Between Dates | Count weekdays in (start date, end date], excluding weekends. Public holidays are not excluded. | Monday 2026-01-05 to Friday 2026-01-09 → 4 business days | — |
| `dt-add-business-days` | Add or Subtract Business Days | Advance one calendar day at a time and count weekdays only. Public holidays are not excluded. | Friday 2026-01-09 + 1 business day → Monday 2026-01-12 | — |
| `dt-age` | Age Between Two Dates | Subtract calendar date components with anniversary-aware month/day borrowing; future birth dates are rejected. | 2000-01-15 to 2026-01-14 → 25 years, 11 months, 30 days | — |
| `dt-timezone-offset` | Fixed Time-Zone Offset Converter | UTC = source local time − source offset; target local time = UTC + target offset. Daylight-saving and historical zone rules are not inferred. | 2026-01-01T09:00 at UTC+05:30 → 2026-01-01T03:30 at UTC | — |
| `dt-unix-timestamp` | Unix Timestamp Converter | Unix timestamp = floor(milliseconds since 1970-01-01T00:00:00Z / 1000). | 1970-01-01T00:00:01Z → 1 second | — |
| `dt-work-hours` | Net Work Hours Calculator | Elapsed minutes = end − start (add 1,440 if crossing midnight); net minutes = elapsed − break. | 09:00 to 17:30 with a 30-minute break → 8 hours | — |
| `dt-overtime` | Overtime Calculator | Overtime = max(0, total hours − regular threshold); regular counted = min(total hours, threshold). | 10 hours worked and 8 regular hours → 8 regular, 2 overtime | — |
| `dt-countdown` | Date Countdown Calculator | Difference = target date − reference date, expressed as signed days. | 2026-01-01 to 2026-01-10 → 9 days remaining | — |
| `dt-recurring-interval` | Recurring Date Generator | Occurrence n = start date + n × interval days, for n = 1…count. | Start 2026-01-01, interval 7, count 3 → Jan 8, Jan 15, Jan 22 | — |
| `dt-leap-year` | Leap Year Checker | Leap year iff divisible by 4 and (not divisible by 100 unless divisible by 400). | 2000 is a leap year; 1900 is not | — |
| `dt-iso-week` | ISO Week Number Calculator | ISO weeks start Monday; week 1 contains the year's first Thursday. | 2021-01-01 belongs to ISO week 53 of ISO week-year 2020 | — |
| `dt-duration-seconds` | Duration to Total Seconds | Total seconds = days × 86,400 + hours × 3,600 + minutes × 60 + seconds. | 1 day, 2 hours, 3 minutes, 4 seconds → 93,784 seconds | — |

### Computer science

| ID | Calculator | Formula / method | Documented example | Limitation / review note |
|---|---|---|---|---|
| `cs-base-converter` | Number Base Converter | Parse an exact integer in the selected source radix, then render it in the target radix. | 255 decimal → FF hexadecimal | — |
| `cs-decimal-binary` | Decimal to Binary and Hexadecimal | Use radix conversion on an exact JavaScript safe integer. | 42 → binary 101010, octal 52, hexadecimal 2A | — |
| `cs-integer-range` | Integer Type Range Calculator | Unsigned range: 0 to 2^n−1. Signed two's-complement range: −2^(n−1) to 2^(n−1)−1. | 8-bit signed → −128 to 127 | — |
| `cs-bitwise` | Bitwise Operations Calculator | JavaScript 32-bit bitwise operators are used; NOT uses two's-complement signed 32-bit semantics. | 5 AND 3 → 1 | — |
| `cs-gcd-lcm` | Greatest Common Divisor and Least Common Multiple | Euclidean algorithm for GCD; LCM = \|a / GCD(a,b) × b\|, with zero handling. | GCD(12, 18) = 6; LCM = 36 | — |
| `cs-prime-check` | Prime Number Checker | Trial division through the integer square root; this is intended for ordinary-sized values, not cryptographic primality. | 97 is prime | — |
| `cs-factorial` | Factorial Calculator | n! = n × (n−1) × … × 1, with 0! = 1. | 5! = 120 | — |
| `cs-combinations` | Permutations and Combinations | nPr = n!/(n−r)!; nCr = n!/(r!(n−r)!). | 5 choose 2 = 10; 5 permute 2 = 20 | — |
| `cs-ascii-unicode` | Unicode Code Point Inspector | Iterate Unicode code points, not UTF-16 code units; display U+ notation and decimal value. | A → U+0041 (decimal 65) | — |
| `cs-utf8-size` | UTF-8 Text Size Estimator | UTF-8 byte count = TextEncoder encoding length; line endings are counted as entered. | ASCII 'Hello' → 5 bytes | — |
| `cs-data-transfer-time` | Data Transfer Time Calculator | Duration seconds = size in bytes × 8 / rate in bits per second. Decimal and binary prefixes are distinguished. | 100 MB at 100 Mbit/s → 8 seconds (decimal MB) | — |
| `cs-throughput` | Network Throughput Calculator | Throughput (bit/s) = bytes transferred × 8 / elapsed seconds. | 100 MB over 10 seconds → 80 Mbit/s | — |
| `cs-ipv4-subnet` | IPv4 Subnet Calculator | Apply the CIDR prefix mask to the 32-bit IPv4 address; /31 and /32 follow modern point-to-point/single-address host-count conventions. | 192.168.1.10/24 → network 192.168.1.0/24; broadcast 192.168.1.255 | — |
| `cs-ipv4-validator` | IPv4 Address Validator | Four decimal octets, each in the range 0–255; value = octet1×2^24 + octet2×2^16 + octet3×2^8 + octet4. | 192.168.1.1 → 3232235777 | — |
| `cs-hash-checksum` | Text Checksum (FNV-1a 32-bit) | FNV-1a 32-bit over UTF-8 bytes: start 0x811C9DC5; XOR each byte, multiply by 0x01000193 modulo 2^32. | Same UTF-8 input always yields the same checksum; not for security or password storage | — |

### Phases 14–17 initial slice

| ID | Calculator | Formula / method | Documented example | Limitation / review note |
|---|---|---|---|---|
| `eng-normal-stress` | Normal Stress | Average normal stress σ = signed axial force / area; 1 N/mm² = 1 MPa. | 1,000 N / 100 mm² = 10 MPa | Average stress only; does not model stress concentrations, bending, buckling, fatigue, or material failure. |
| `eng-torque` | Torque from Force | τ = F × r for a perpendicular force. | 20 N × 0.5 m = 10 N·m | Assumes force is perpendicular to the lever arm; otherwise use the perpendicular force component. |
| `eng-voltage-power` | Electrical Power | P = V × I. | 12 V × 2 A = 24 W | For AC systems with phase difference or nonlinear loads, real power may require power factor and waveform information. |
| `home-concrete-volume` | Concrete Volume Estimate | Volume = length × width × depth. | 5 m × 3 m × 0.1 m = 1.5 m³ | Ideal rectangular geometry only; excludes waste, subgrade variation, reinforcement displacement, and supplier-specific ordering rules. |
| `home-paint-quantity` | Paint Quantity Estimate | Litres = area × coats / stated coverage. | 40 m² × 2 coats / 10 m²/L = 8 L | Coverage is user-supplied and depends on surface, application, primer, and product; allow for waste separately. |
| `travel-fuel-cost` | Trip Fuel Cost | Fuel litres = distance × consumption / 100; cost = litres × price per litre. | 300 km × 6 L/100 km × ₹100/L = ₹1,800 | Uses stated average consumption and price; excludes tolls, idling, traffic variation, and return-trip distance unless included. |
| `travel-trip-time` | Travel Time Estimate | Time (hours) = distance / average speed. | 150 km / 60 km/h = 2.5 hours | Excludes stops, traffic, road conditions, and schedule buffers; average speed must be positive. |
| `edu-weighted-grade` | Weighted Grade Calculator | Weighted grade = Σ(score × weight) / Σ(weight). | 80, 90 with weights 2, 3 → 86 | Scores must use a consistent scale; weights are relative and do not validate an institution's grading policy. |
| `edu-required-score` | Required Exam Score | Required remaining score = (target × 100 − current average × completed weight) / remaining weight, with weights in percent. | Current 80%, completed weight 60%, target 85%, remaining 40% → 92.5% | Assumes completed and remaining weights total 100%; required results outside 0–100% indicate the target is unreachable under the stated assumptions. |

### Phase 18 specialized calculators

| ID | Calculator | Formula / method | Documented example | Limitation / review note |
|---|---|---|---|---|
| `sp-great-circle-distance` | Great-Circle Distance | Haversine: a = sin²(Δφ/2) + cos φ₁ cos φ₂ sin²(Δλ/2); d = 2R asin(√a), R = 6,371.0088 km. | (0°, 0°) to (0°, 1°) ≈ 111.195 km | Spherical-Earth approximation; not a surveyed distance and does not account for altitude, road routes, or ellipsoidal geodesics. |
| `sp-initial-bearing` | Initial Compass Bearing | θ = atan2(sin Δλ cos φ₂, cos φ₁ sin φ₂ − sin φ₁ cos φ₂ cos Δλ); normalize to 0°–360°. | From (0°, 0°) toward (0°, 1°) → 90° | Initial true-north bearing on a spherical Earth. Coincident or antipodal points do not have a unique initial bearing. |
| `sp-light-travel-time` | Light Travel Time | t = distance × 149,597,870,700 m / 299,792,458 m·s⁻¹. | 1 AU → approximately 499.0048 seconds | Vacuum speed of light; ignores propagation through matter, gravitational effects, and uncertainty in the entered distance. |
| `sp-parallax-distance` | Stellar Parallax Distance | Distance (parsecs) = 1 / parallax (arcseconds). | 0.1 arcsecond → 10 parsecs | Direct inversion assumes a positive parallax with negligible uncertainty; noisy or negative measured parallaxes require statistical treatment. |
| `sp-plant-population` | Plant Population Estimate | Approximate plants = plot area / ((row spacing in m) × (within-row spacing in m)). | 100 m² at 50 cm × 25 cm spacing → about 800 planting positions | Idealized density estimate; plot edges, paths, germination, plant size, and field layout reduce or change actual counts. |
| `sp-irrigation-volume` | Irrigation Water Volume | Volume (litres) = area (m²) × depth (mm), because 1 mm over 1 m² equals 1 litre. | 100 m² × 5 mm = 500 litres | Net applied volume only; excludes runoff, evaporation, infiltration variation, and system efficiency. |
| `sp-electricity-cost` | Electricity Usage Cost | Estimated charge = energy used × entered rate. | 250 kWh × 8.00 per kWh = 2,000.00 currency units | Uses the entered rate only; excludes fixed charges, taxes, time-of-use pricing, subsidies, and tiered tariffs. |
| `sp-electricity-emissions` | Electricity Emissions Estimate | Estimated emissions (kg CO₂e) = electricity (kWh) × entered factor (kg CO₂e/kWh). | 100 kWh × 0.4 kg CO₂e/kWh = 40 kg CO₂e | Not a universal grid factor. Results depend on the user-supplied source, geography, year, and lifecycle/reporting boundary. |
| `sp-oee` | Overall Equipment Effectiveness (OEE) | OEE = availability × performance × quality, with each factor expressed as a fraction. | 90% × 95% × 98% = 83.79% OEE | Assumes the three percentages follow compatible definitions and the same measurement window; values above 100% are rejected. |

**Total entries inventoried:** 295. This inventory records the formula and example displayed by each source definition; it must be read alongside the automated tests and the independent-review limitations above.
