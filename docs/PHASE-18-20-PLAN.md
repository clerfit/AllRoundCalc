# Phases 18–20: Specialized Calculators, Platform Integration, Privacy & Security

Status: **In progress — kickoff and acceptance gates recorded; implementation and verification remain open.**

This work is scoped exclusively to AllRoundCalc. Do not modify the separate ClerFit repository.

## Gate before feature work

- [ ] Resolve Phase 12–13 Chromium desktop/tablet/mobile CI failures in PR #2.
- [ ] Preserve the current PR as unmerged until all required CI jobs pass.
- [ ] Reconcile the active calculator registry with the 50-category taxonomy; a category card is not evidence that its calculators exist.
- [ ] Keep Phase 14–17 gaps visible. This phase sequence does not imply those earlier scopes have been implemented.

## Phase 18 — Other Specialized Calculators

Goal: implement a carefully scoped first slice of specialized tools without pretending the full catalogue is complete.

- [ ] Inventory specialized domains and existing category IDs; avoid duplicate calculator IDs.
- [ ] Publish formula contracts before implementation: purpose, equations, units, assumptions, valid ranges, worked examples, edge cases, and limitations.
- [ ] Select a small, testable first slice from geography/mapping, astronomy/space, agriculture/gardening, and other specialist domains only where reliable formulas and references are available.
- [ ] Add calculation logic to isolated modules and register tools through the existing shared UI.
- [ ] Add reference-result, invalid-input, boundary, and syntax tests.
- [ ] Confirm tooltips/explanations, keyboard operation, and responsive layouts.
- [ ] Independent domain review remains required before sign-off.

## Phase 19 — Platform Integration

- [ ] Verify every implemented calculator is discoverable through category navigation and search.
- [ ] Verify script/module loading, stable IDs, input/output contracts, shared errors, and related-calculator links.
- [ ] Add automated integration checks for every registered calculator and its execution path.
- [ ] Test direct page loads, navigation, back/forward behavior, and desktop/tablet/mobile viewports.
- [ ] Check console errors and missing assets in browser automation.
- [ ] Do not claim deployment or production verification unless the live site is actually checked.

## Phase 20 — Privacy and Security Review

- [ ] Trace network requests, form submissions, cookies, local/session storage, and third-party resources.
- [ ] Confirm calculator inputs/results stay client-side unless a documented feature explicitly requires a request.
- [ ] Check URL/query-string leakage, error logging, external-link behavior, and dependency risks.
- [ ] Review HTML injection/XSS surfaces and unsafe dynamic rendering.
- [ ] Document hosting-provider processing and any remaining limitations before making privacy claims.
- [ ] Add regression tests for privacy/security invariants where technically testable.
- [ ] Record unresolved findings as blockers; do not label the review passed until evidence supports it.

## Acceptance rule

A phase is complete only when its implementation exists, automated tests pass, browser checks pass where applicable, and outstanding independent/human reviews are explicitly recorded. Planning documents and category labels alone do not count as completion.
