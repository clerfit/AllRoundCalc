# AllRoundCalc

**Every calculation. One place.**

AllRoundCalc is a planned, privacy-first collection of calculators and converters for education, mathematics, science, engineering, finance, health and fitness, business, and everyday use.

> **Project status:** Phases 01 and 02 are signed off. Phase 03 is in progress: 28 Basic & Everyday Mathematics calculator tools have been catalogued, implemented in the browser calculation engine, and given formula documentation and automated test cases. Final CI/browser verification and phase sign-off are pending.

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
| 02 | Design the complete responsive UI model and shared page templates — **complete** |
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
- `assets/js/app.js` — category data, hash-based navigation, category search, menu behavior, and page templates.\n- `assets/js/calculations.js` — Phase 03 calculation definitions, input validation, and browser-local calculation functions.\n- `docs/PHASE-03-FORMULA-CATALOG.md` — Phase 03 formulas, assumptions, domains, examples, limitations, and sign-off checklist.\n- `tests/calculations.test.cjs` — Phase 03 reference-example and edge-case tests.
- `assets/icons/favicon.svg` — project favicon.
- `docs/UI-MODEL.md` — Phase 02 scope, page patterns, interactions, and acceptance requirements.
- `tests/ui-model.test.mjs` — dependency-free Node.js source-contract tests.
- `tests/e2e/ui.spec.js` — Playwright interaction, responsive viewport, and accessibility checks.
- `playwright.config.js` — Chromium desktop/tablet/mobile projects.
- `.github/workflows/ui-verification.yml` — CI workflow for source and browser checks.
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

## Phase 02 sign-off

**Status: Complete.** Phase 02 remains signed off; Phase 03 is now in progress as a separate implementation phase.

Delivered:
- Responsive home page with AllRoundCalc branding, category search, featured subject areas, and project principles.
- All sixteen category entries, a searchable catalogue, and individual category overview pages.
- Reusable calculator-page preview with input/unit, result, formula, assumptions, and limitation sections. Preview controls remain disabled; no unverified calculations are presented as working.
- Shared header, footer, menu, category navigation, keyboard dismissal, skip link, search result announcements, About page, Contact status page, and favicon.
- Responsive layouts, visible keyboard focus, reduced-motion styling, improved contrast, and first-party-only UI assets.
- Source-contract tests, Playwright tests across desktop/tablet/mobile Chromium, and axe-core WCAG 2.1 A/AA checks on six primary routes.

Verification:
- **9 source-contract assertions passed.**
- **33 browser tests passed** across desktop, tablet, and mobile Chromium.
- **Automated WCAG 2.1 A/AA checks passed** for Home, Categories, a Category page, Calculator Preview, About, and Contact.
- The successful GitHub Actions run is recorded at [UI verification run 26](https://github.com/clerfit/AllRoundCalc/actions/runs/39226251381).
- Tablet horizontal overflow and text-contrast issues found during testing were fixed before the successful run.
- Manual screen-reader/assistive-technology testing remains part of Phase 22 pre-release accessibility QA; it is not represented as completed here.

Scope boundaries:
- No calculator formulas or active calculation logic have been added.
- Contact delivery is not configured and no contact form claims to send messages.
- Deployment and production privacy/security checks remain in their scheduled later phases.
- The GitHub repository description remains intentionally blank, as requested.

Phase 02 is signed off. Phase 03 was started with explicit user approval; see the Phase 03 progress section below.


## Phase 03 progress — Basic & Everyday Mathematics

**Status: Implementation committed; verification pending. Do not treat the phase as signed off until the latest CI run is successful and the remaining review items are resolved.**

Implemented in the current branch:
- A catalogue of 28 calculator tools across arithmetic, fractions, decimals, powers/roots, percentages and everyday money, ratios/proportions/averages, precision and notation, factors/multiples, and numerical utilities.
- Browser-local calculation engine with shared validation and explicit domain errors.
- Individual calculator pages with input forms, visible formula, worked example, assumptions/limitations, reset behavior, error messages, and related-tool navigation.
- Formula catalogue documenting domains, assumptions, reference examples, known limitations, and a Phase 03 sign-off checklist.
- Automated test cases for every calculator ID plus key invalid inputs and edge cases.
- CI updated to run the calculation tests and syntax-check the new engine.

Verification is pending. A commit or the existence of tests does not prove that the tests pass. Decimal calculations use JavaScript binary floating-point; the rounding helper is not certified for accounting use. Tax tools are generic arithmetic only. See the formula catalogue for exact restrictions and remaining limitations.

Browser review links:
- [Basic & Everyday Mathematics catalogue](https://github.com/clerfit/AllRoundCalc/blob/main/docs/PHASE-03-FORMULA-CATALOG.md)
- [Calculation engine](https://github.com/clerfit/AllRoundCalc/blob/main/assets/js/calculations.js)
- [Calculation tests](https://github.com/clerfit/AllRoundCalc/blob/main/tests/calculations.test.cjs)
\n## Disclaimer

AllRoundCalc is a planned software project. The contents of this repository do not constitute medical, financial, engineering, legal, or other professional advice. Any published calculator must state relevant assumptions and limitations.
