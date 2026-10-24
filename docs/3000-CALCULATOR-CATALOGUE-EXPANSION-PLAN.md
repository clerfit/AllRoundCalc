# AllRoundCalc — 3,000-Calculator Expansion Plan

**Scope:** AllRoundCalc only. This is a staged delivery plan, not a claim that 3,000 calculators already exist.

## Target and counting rules

- Current verified inventory baseline for the working branch: **295 calculator definitions**.
- Target catalogue size: **3,000 implemented calculator definitions**.
- Remaining planned additions from that baseline: **2,705**.
- Delivery is split into **28 manageable expansion phases**: Phases 25–51 target 100 new calculators each (2,700 total); Phase 52 targets the final 5 to reach 3,000.
- A calculator counts toward the target only when it has a distinct use case, documented inputs/units/formula and assumptions, validated examples and boundary tests, an accessible page, and passing automated verification.
- Category ideas, placeholders, aliases, and unimplemented roadmap items do **not** count as implemented calculators.
- A calculator may be linked from a primary category and related categories, but it must be counted only once in the global total.

## Page and navigation model

1. **Homepage:** responsive category tiles inspired by the supplied reference: square-like cards in a multi-column grid on tablet/desktop and two-column reading order on mobile.
2. **Category directory:** a searchable, paginated index of every category. Each tile should show the category name and the number of *implemented* calculators in that category, not a guessed or aspirational number.
3. **Category pages:** one stable URL per category, with its calculator count, short scope description, search/filter, subcategory sections, and calculator cards.
4. **Calculator pages:** one stable URL per calculator, with inputs, units selectable within the calculator, formula, worked example, validation messages, assumptions/limitations, and related tools.
5. **Browse controls:** search, breadcrumbs, pagination or “load more,” and filters for subject/subcategory. Do not place thousands of calculator cards on a single page.
6. **Responsive design:** use CSS grid, accessible focus states, keyboard navigation, and meaningful mobile touch targets. Never rely on colour alone to convey status.

## Expansion phases

Every phase must go through the same gate: scope and deduplicate candidates → authoritative formula/source review → implement calculator logic → input/range/error handling → reference-value and edge-case tests → accessible page and category integration → desktop/tablet/mobile browser tests → review counts and documentation. A phase may be split further when a domain is too broad; no phase is “complete” just because its candidate list exists.

| Phase | Target new tools | Primary scope |
|---|---:|---|
| 25 | 100 | Everyday arithmetic, percentages, ratios, fractions, rounding, estimation, and number properties |
| 26 | 100 | Algebra, equations, inequalities, polynomials, sequences, logarithms, and complex numbers |
| 27 | 100 | Geometry, mensuration, trigonometry, triangles, coordinate geometry, and transformations |
| 28 | 100 | Calculus, differential equations, linear algebra, vectors, matrices, and numerical methods |
| 29 | 100 | Probability, distributions, combinatorics, descriptive statistics, and statistical inference |
| 30 | 100 | Data analysis, regression, forecasting, experimental design, sampling, and quality metrics |
| 31 | 100 | Classical mechanics, kinematics, dynamics, energy, momentum, rotation, and fluids |
| 32 | 100 | Electricity, magnetism, circuits, waves, acoustics, optics, and modern physics |
| 33 | 100 | Thermodynamics, gases, heat transfer, materials, and applied physics |
| 34 | 100 | General chemistry, stoichiometry, concentrations, solutions, and gas calculations |
| 35 | 100 | Acids/bases, equilibrium, electrochemistry, kinetics, thermochemistry, and analytical chemistry |
| 36 | 100 | Organic chemistry, chemical structures, polymers, and reaction yield/selectivity |
| 37 | 100 | Biology, genetics, microbiology, cell biology, ecology, and population models |
| 38 | 100 | Health measurements, fitness, exercise physiology, sleep, and evidence-qualified wellness estimates |
| 39 | 100 | Nutrition, food composition arithmetic, recipe scaling, meal quantities, and food-service planning |
| 40 | 100 | Sports performance, pace/splits, training load, competition scoring, and sport-specific metrics |
| 41 | 100 | Personal finance, savings, compound interest, loans, mortgages, and debt payoff |
| 42 | 100 | Business finance, accounting, tax arithmetic, depreciation, cash flow, and valuation basics |
| 43 | 100 | Marketing, advertising, ecommerce, conversion funnels, pricing, and unit economics |
| 44 | 100 | Project management, scheduling, critical path, capacity, operations, and inventory |
| 45 | 100 | Mechanical, civil, structural, and construction engineering calculations |
| 46 | 100 | Electrical, electronics, control systems, chemical/process, and manufacturing engineering |
| 47 | 100 | Units, dimensions, scientific constants, precision, uncertainty, and measurement tools |
| 48 | 100 | Programming, algorithms, number systems, data structures, complexity, and developer utilities |
| 49 | 100 | Networking, IP/subnetting, data storage, compression, transfer, reliability, and cybersecurity-safe utilities |
| 50 | 100 | Date/time, calendars, time intervals, geography, mapping, navigation, and travel estimates |
| 51 | 100 | Astronomy, energy, environment, agriculture, home improvement, education, and other specialist domains |
| 52 | 5 | Final gap-filling tools selected from the audited category coverage matrix; only distinct, reviewed calculators qualify |

**Planned expansion arithmetic:** 27 phases × 100 + 5 = 2,705 new tools. With the 295-tool baseline, the planned total is 3,000.

## Category coverage matrix and anti-duplication

Before each phase starts, update a candidate register with: proposed name, primary category, subcategory, user problem, inputs/units, formula/source, expected result, existing-tool comparison, test cases, implementation status, and review status. Reject or merge candidates that duplicate an existing calculator without a genuinely different model or input/output contract.

Categories should include, at minimum: mathematics; geometry and trigonometry; calculus and linear algebra; statistics and data analysis; physics; chemistry; biology and ecology; health and fitness; nutrition and food; sports; personal finance; business and economics; accounting and tax; marketing; project management; engineering; construction and home; computer science and programming; networking and digital storage; units and measurement; date and time; geography and mapping; travel and vehicles; astronomy and space; energy and sustainability; agriculture and gardening; education and exams; and clearly named specialist categories as evidence supports them. Similar subjects can have different category names where that improves navigation, but each calculator has one canonical ID and one primary category.

## Release and reporting rules

- Report separately: **implemented**, **automated-tested**, **scientifically reviewed**, and **production verified**.
- Publish per-category counts from the actual registry at build time; do not hardcode marketing numbers.
- Do not claim “3,000 calculators” publicly until 3,000 unique implemented definitions pass the catalogue integrity checks.
- For health, finance, engineering, tax, and safety-related tools, document the jurisdiction/model limitations and avoid presenting estimates as professional advice.
- External sources are evidence for review, not proof by themselves; record the exact source and the test cases that support each formula.
- Do not merge or deploy a phase merely because the code was committed. Wait for CI and required review gates.

## Current status

The working branch's 295-tool baseline is the starting point. Phases 25–52 are planned, not yet implemented. Track completion phase-by-phase in the repository and revise the target distribution only with a documented reason; the total target remains 3,000.
