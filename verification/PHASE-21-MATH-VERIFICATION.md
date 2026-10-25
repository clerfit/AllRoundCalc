# Mathematics verification branch — scope and status

This branch adds an isolated calculation engine and automated regression tests to support the mathematical verification effort.

## Added
- `verification/math-engine.cjs`: named calculation functions with input-domain validation.
- `verification/tests/math-engine.test.cjs`: independent reference examples and invalid-domain tests.
- `.github/workflows/math-verification.yml`: GitHub Actions job to syntax-check and execute this test suite.

## Scope caveat
This branch does **not** connect these functions to all 300 independent prototype calculator pages. Therefore passing tests for these functions do not certify all 300 page handlers, formulas, form-field mappings, UI behavior, accessibility, or production deployment. No calculator should be reported complete solely because its title has a matching handler.

## Required acceptance work before full Phase 1 sign-off
1. Map each catalog entry to a dedicated calculation contract (inputs, units, formula, assumptions, output).
2. Wire the correct function to the calculator page and ensure each field maps to the intended variable.
3. Add independent numerical expected-result, boundary, and invalid-input tests for every page/handler.
4. Run full browser checks across desktop/tablet/mobile and manual keyboard/screen-reader checks.
5. Inspect CI results and resolve failures before creating the release/deployment PR.
