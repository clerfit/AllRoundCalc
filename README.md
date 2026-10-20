# AllRoundCalc

**Every calculation. One place.**

AllRoundCalc is a planned, privacy-first collection of calculators and converters for education, mathematics, science, engineering, finance, health and fitness, business, and everyday use.

> **Project status:** Phases 01–05 have implementation and automated verification recorded; Phase 05 includes 29 introductory browser-local physics calculators. Phase 06 (Chemistry) has a 30-calculator introductory implementation; independent scientific review and release QA remain open. Phase 07 (Statistics & Probability) has 32 browser-local calculators and expanded source/browser tests; final verification remains pending. Phase 08 adds 13 Personal Finance tools, Phase 09 adds 13 Business & Economics tools, and Phase 10 adds 14 Health & Fitness tools. Their complete verification and review remain pending. The site is not yet launched.

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
| 03 | Basic & Everyday Mathematics — **implementation and automated verification complete** |
| 04 | Advanced Mathematics — **implementation and automated verification complete** |
| 05 | Physics — initial implementation slice and automated verification complete; broader independent scientific review remains |
| 06 | Chemistry — 30 introductory calculators implemented; independent scientific review and release QA remain open |
| 07 | Statistics & Probability — 32 introductory calculators implemented; final automated/browser verification and independent review pending |
| 08 | Personal Finance — 13 introductory calculators implemented; verification pending |
| 09 | Business & Economics — 13 introductory calculators implemented; verification pending |
| 10 | Health & Fitness — 14 introductory calculators implemented; verification pending |
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

- `index.html` — site shell and shared header/footer.
- `assets/css/styles.css` — responsive design system and page layouts.
- `assets/js/app.js` — navigation, search, category pages, and shared calculator UI.
- `assets/js/calculations.js` — Phase 03 calculation logic.
- `assets/js/advanced-calculations.js` — Phase 04 advanced mathematics calculation logic.\n- `assets/js/physics-calculations.js` — Phase 05 physics calculation logic.\n- `assets/js/chemistry-calculations.js` — Phase 06 chemistry calculation logic.\n- `assets/js/statistics-calculations.js` — Phase 07 statistics and probability calculation logic.\n- `docs/PHASE-07-FORMULA-CATALOG.md` — Phase 07 formulas, assumptions, examples, reference sources, and acceptance checklist.\n- `tests/statistics-calculations.test.mjs` — Phase 07 calculation examples and domain tests.\n- `docs/PHASE-06-FORMULA-CATALOG.md` — Phase 06 chemistry formulas, units, assumptions, and acceptance checklist.\n- `tests/chemistry-calculations.test.mjs` — Phase 06 chemistry reference examples and domain tests.
- `docs/PHASE-03-FORMULA-CATALOG.md` — Phase 03 formula catalogue and verification status.
- `docs/PHASE-04-FORMULA-CATALOG.md` — Phase 04 formula contracts, reference links, assumptions, examples, and limits.
- `tests/ui-model.test.mjs` — source-contract tests for the shared interface.
- `tests/calculations.test.mjs` — Phase 03 reference examples and edge-case tests.
- `tests/advanced-calculations.test.mjs` — Phase 04 reference examples and edge-case tests.
- `tests/e2e/ui.spec.js` — Playwright interaction, responsive viewport, and accessibility checks.
- `playwright.config.js` — Chromium desktop/tablet/mobile test configuration.
- `.github/workflows/ui-verification.yml` — CI workflow for source, syntax, calculation, and browser checks.
- `assets/icons/favicon.svg` — project favicon.
- `docs/UI-MODEL.md` — Phase 02 scope, page patterns, interactions, and acceptance requirements.
- `CONTRIBUTING.md` — development, privacy, accessibility, and verification conventions.
- `.gitignore` — ignores local environment files, secrets, and generated output.

The site uses semantic HTML, CSS, and browser-native JavaScript without a production build step. The GitHub repository description is intentionally left blank as requested.

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
\n## Phase 05 progress — Physics\n\n**Status: Initial implementation slice complete; Phase 06 has started.** The current catalogue contains 29 introductory calculators. The browser UI provides formula/assumption notes, and compact field-help buttons are available on advanced mathematics, physics, and chemistry calculators. The automated tests and browser accessibility checks passed in the latest recorded run; independent scientific review is still outstanding. This does not mean every physics topic is covered.\n\n## Phase 06 progress — Chemistry\n\n**Status: Implementation present; latest automated verification must be confirmed before sign-off.** The 30 browser-local calculators cover amount of substance, solution concentration, selected gas laws, introductory acid/base estimates, stoichiometric ratios, titration concentration, atom economy, and yield/purity. Field-level tooltips, formula notes, domain tests, and browser accessibility checks are configured. Independent scientific review remains assigned to Phase 21. This is not an exhaustive chemistry library.\n\n## Phase 05 progress — Physics\n\n**Status: Initial implementation slice complete; Phase 06 has started.** The current catalogue contains 29 introductory calculators. Compact field-help buttons are available on advanced mathematics, physics, and chemistry calculator inputs. Independent scientific review and human assistive-technology testing remain outstanding; this is not a claim that every physics topic is covered.\n\n## Phase 06 progress — Chemistry\n\n**Status: Implementation present; latest automated verification must be confirmed before sign-off.** The current source defines 30 browser-local chemistry calculators, each with contextual input help, a formula note, a worked example, and stated limitations. Unit/domain tests cover reference examples and invalid inputs; the browser suite is configured to exercise chemistry calculator routes and accessibility. This is an introductory scope, not an exhaustive chemistry library. Independent scientific review, human screen-reader testing, and full-site release checks remain open.\n\n## Disclaimer

AllRoundCalc is a planned software project. The contents of this repository do not constitute medical, financial, engineering, legal, or other professional advice. Any published calculator must state relevant assumptions and limitations.

\n## Phase 07 progress — Statistics & Probability\n\n**Status: Implementation committed; automated execution and review are pending.** The current scope defines 32 browser-local calculators for descriptive statistics, probability rules, counting, binomial and normal distributions, expected value, correlation, and simple linear regression. The formula catalogue documents formulas, assumptions, conventions, and examples. The shared UI includes field-level tooltips, formula/limitation sections, validation messages, and related-tool navigation. A targeted calculation harness passed all 32 documented reference examples and rejected all 22 invalid-domain cases. The source suite includes 32 reference examples and 22 invalid-domain cases. Playwright now includes an axe-core WCAG 2.1 A/AA route check for all 32 statistics calculator pages, in addition to an end-to-end arithmetic-mean interaction. The complete Node test suite and Chromium desktop/tablet/mobile browser suite still need to run.\n\nOpen acceptance items: obtain a successful full source and browser test run; resolve failures; finish independent verification of all formulas and examples against the listed statistical references; complete human keyboard/screen-reader review and confirm no regression in Phases 03–06. The normal CDF uses an approximation and quartiles/percentile rank follow explicitly documented conventions.\n

## Phase 08 progress — Personal Finance

**Status: Initial implementation integrated; verification pending.** Thirteen browser-local tools cover simple and compound interest, effective annual rate, fixed-rate loan payment and balance, savings projections and goals, inflation scenarios, debt-to-income, budget share, ROI, NPV, and salary increases. Currency is user-defined and must remain consistent. This is not financial advice or a jurisdiction-specific tax/lending engine.

## Phase 09 progress — Business & Economics

**Status: Initial implementation integrated; verification pending.** Thirteen browser-local tools cover gross/net margin, markup, contribution margin, break-even analysis, growth, CAGR, ROI, discounts, generic sales-tax arithmetic, price elasticity, and weighted averages. Accounting definitions and periods must be consistent; the generic tax calculator does not infer local rules.

## Phase 10 progress — Health & Fitness

**Status: Initial implementation integrated; verification pending.** Fourteen browser-local tools cover adult BMI, Mifflin–St Jeor resting-energy estimates, activity-factor scenarios, age-based heart-rate estimates, waist ratios, Mosteller body-surface area, Epley 1RM, running pace/speed, MET energy, training volume, and weight-change percentage. Outputs are estimates only. BMI and Mifflin–St Jeor are restricted to adults; heart-rate and energy estimates are not diagnoses or prescriptions.

The source and browser suites must pass on the same commit before these phases can be signed off. Human keyboard/screen-reader review, independent formula review, and full regression verification remain outstanding.
