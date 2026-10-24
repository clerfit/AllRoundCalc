# Phases 21–24 — Catalogue Scientific Audit, Validation, Accessibility, Release Readiness

**Scope:** AllRoundCalc only. Do not modify the separate ClerFit website/repository.
**Delivery rule:** Phase implementation, automated verification, independent review, and production acceptance are separate states. Never label the full release complete merely because source tests pass.

## Phase 21 — Full-catalogue scientific audit foundation

Implemented:
- Add a catalogue-wide test covering the 295 currently registered calculator definitions across 13 modules.
- Assert the total count, globally unique IDs, expected per-module counts, required formula/example/field metadata, and explicit references to each calculator ID in its module's test file.
- Include the gate in the default `npm test` command so catalog additions cannot silently bypass audit metadata and test references.

Acceptance:
- [ ] Catalogue-wide test passes on the final branch head.
- [ ] Any uncovered calculator IDs are added to real reference/domain tests; metadata-only mentions do not count as scientific validation.
- [ ] Review each formula against a trustworthy reference and record sources/assumptions, especially health, finance, chemistry, statistics, and engineering tools.

## Phase 22 — Mathematical edge cases and validation hardening

Planned work:
- Expand boundary and numerical-stability tests for division by zero, domain boundaries, empty lists, overflow, underflow, precision loss, signed values, and zero-rate special cases.
- Check input units, percentage/fraction conventions, date/time semantics, rounding, and explanatory limitations.
- Fix confirmed defects and add a regression test for every fix.

Acceptance:
- [ ] Every calculator has at least one independently reasoned reference case and applicable invalid-domain tests.
- [ ] No unresolved high-severity formula or validation defects.
- [ ] Any result whose assumptions are user-supplied states that limitation beside the result.

## Phase 23 — UI, accessibility, and responsive verification

Planned work:
- Keep automated axe scans and keyboard-driven interaction tests, including field help, validation errors, result announcements, and navigation focus.
- Exercise all registered calculator routes at desktop, tablet, and mobile sizes for render failures and horizontal overflow.
- Track manual keyboard-only and screen-reader checks separately from automated accessibility results.

Acceptance:
- [ ] CI passes on all configured browser projects.
- [ ] No untriaged high-impact automated accessibility findings.
- [ ] Manual keyboard and screen-reader checklist has dated evidence; automated axe results are not presented as a substitute.

## Phase 24 — Release and operational sign-off

Planned work:
- Re-run source, catalogue, browser, and syntax checks against one immutable commit.
- Check all calculator IDs are reachable from the correct category and no preview is presented as a functioning calculator.
- Document production network requests, dependency advisories, security headers, hosting/privacy terms, contact-form delivery status, and rollback steps.
- Keep release blockers visible; do not merge or deploy without explicit authorization.

Acceptance:
- [ ] All required CI checks pass for the release candidate commit.
- [ ] Independent subject-matter review and manual accessibility review are recorded.
- [ ] Production network/security/privacy and contact-form behavior are checked in the deployed environment.
- [ ] The release notes state precisely which catalogue slices are reviewed and which remain unverified.

## Current boundary

The current catalogue contains 295 definitions according to the source modules on this branch. The new Phase 21 gate checks registry integrity and test references; it does **not by itself prove** that every formula is correct. Full scientific sign-off requires validating each implementation and its assumptions against independent references. No external certification is claimed.
