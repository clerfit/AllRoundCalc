# AllRoundCalc

**Every calculation. One place.**

AllRoundCalc is a planned, privacy-first collection of calculators and converters for education, mathematics, science, engineering, finance, health and fitness, business, and everyday use.

> **Project status:** Phase 01 is signed off. Phase 02 is in progress: the responsive UI shell, category navigation, search, and reusable calculator-page preview are now in the repository. No calculator calculations are active yet.

## Principles

- **Privacy first:** calculator inputs and results should be processed in the visitor's browser wherever practical. Do not create user accounts or send calculation inputs to a database by default.
- **No invented accuracy:** formulas, assumptions, supported ranges, units, and expected results must be reviewed before a calculator is implemented.
- **Transparent results:** explain relevant formulas, units, assumptions, estimates, and limitations.
- **Accessible and responsive:** support mobile, tablet, and desktop layouts, keyboard use, and assistive technologies.
- **Maintainable:** use shared interface components and independently testable calculation logic.
- **Honest verification:** report passing tests and remaining work accurately; never mark unverified work as complete.

## Planned top-level categories

1. Basic & Everyday Mathematics
2. Advanced Mathematics
3. Physics
4. Chemistry
5. Statistics & Probability
6. Personal Finance
7. Business & Economics
8. Health & Fitness
9. Unit Converters
10. Date & Time
11. Computer Science & Digital Tools
12. Engineering
13. Construction & Home
14. Travel & Vehicles
15. Education & Exam Tools
16. Other Specialized Calculators

This is an initial taxonomy, not a claim that all calculators are already implemented. The catalogue can expand as additional tools are researched, reviewed, and tested.

## Development roadmap

| Phase | Scope |
|---|---|
| 01 | Create and document the GitHub repository — **complete** |
| 02 | Design the complete responsive UI model and shared page templates — **in progress** |
| 03 | Basic & Everyday Mathematics |
| 04 | Advanced Mathematics |
| 05 | Physics |
| 06 | Chemistry |
| 07 | Statistics & Probability |
| 08 | Personal Finance |
| 09 | Business & Economics |
| 10 | Health & Fitness |
| 11 | Unit Converters |
| 12 | Date & Time |
| 13 | Computer Science & Digital Tools |
| 14 | Engineering |
| 15 | Construction & Home |
| 16 | Travel & Vehicles |
| 17 | Education & Exam Tools |
| 18 | Other Specialized Calculators |
| 19 | Platform integration |
| 20 | Privacy and security review |
| 21 | Formula verification and regression testing |
| 22 | SEO, accessibility, and performance |
| 23 | Release and deployment |
| 24 | Post-launch maintenance and expansion |

Large categories may be split into additional subphases. The roadmap is a planning baseline, not a limit on the eventual number of calculators.

## Repository structure

- `index.html` — single-page site shell and shared footer/header.
- `assets/css/styles.css` — responsive design system, page layouts, and reduced-motion styling.
- `assets/js/app.js` — category data, hash-based navigation, category search, menu behavior, and page templates.
- `assets/icons/favicon.svg` — project favicon.
- `docs/UI-MODEL.md` — Phase 02 scope, page patterns, interactions, and acceptance requirements.
- `CONTRIBUTING.md` — coding, privacy, accessibility, and verification conventions.
- `.gitignore` — ignores local environment files, secrets, and generated output.

The initial UI uses semantic HTML, CSS, and browser-native JavaScript without third-party libraries or a build step. The GitHub repository description is intentionally left blank as requested.

## Required review process for each calculator

Before implementation, publish and review:

1. Calculator inventory and intended use.
2. Formula(s), variable definitions, constants, and assumptions.
3. Input and output fields, units, and valid ranges.
4. Worked examples with independently calculated expected results.
5. Edge cases, rounding rules, and known limitations.
6. Test cases and acceptance criteria.

Only after formula review should implementation begin. After implementation, run the agreed tests and record the results before signing off the calculator or phase.

## Privacy and external data

- Avoid collecting personal calculator inputs and results on the server.
- Do not add accounts, input-history storage, or analytics that capture calculator values by default.
- Currency exchange rates and other public reference data may be cached separately from visitor inputs.
- Clearly show the source or last-updated time for time-sensitive data.
- Review hosting logs, cookies, third-party requests, and any advertising or analytics services before making public privacy claims.

Privacy claims must reflect verified production behavior, including unavoidable technical data processing by hosting or external providers.

## Phase 01 sign-off

- [x] Repository created under the connected GitHub account.
- [x] Public visibility and default branch `main` verified.
- [x] README purpose, principles, roadmap, and formula-review procedure documented.
- [x] Ignore rules added for local secrets and generated files.
- [x] Contribution, coding, accessibility, privacy, and verification conventions documented.
- [x] Initial repository structure established.
- [x] Repository description intentionally left blank per user preference.
- [x] Phase 01 scope kept to repository and project documentation; Phase 02 started as the next phase.

## Phase 02 status

Implemented in the repository so far: responsive home page styling, sixteen-category data model, searchable category directory, category overview template, reusable calculator layout preview, about page, contact status page, sidebar navigation, keyboard dismissal/focus handling, shared footer/header, and favicon.

Still required before Phase 02 sign-off: real-browser verification of layout and interactions at mobile/tablet/desktop widths; link and keyboard checks; semantic/accessibility review; and any fixes found during those checks. Calculator calculations, production contact delivery, and deployment are not part of the completed work described above.

## Disclaimer

AllRoundCalc is a planned software project. The contents of this repository do not constitute medical, financial, engineering, legal, or other professional advice. Any published calculator must state relevant assumptions and limitations.
