# Phases 18–20: Specialized Calculators, Platform Integration, Privacy & Security

Status: **Implementation submitted for CI review.** The work is tracked in the Phase 18–20 pull request. This document records delivered source changes separately from verification that is still pending.

## Phase 18 — Other Specialized Calculators

Implemented in the working branch:
- Nine calculators across geography/mapping, astronomy/space, agriculture/gardening, energy/sustainability, environment/climate, and manufacturing/quality.
- Formula, field, example, and limitation metadata for every calculator.
- Input validation for finite values, latitude/longitude ranges, positive parallax, and OEE percentage bounds.
- Browser-local calculation logic and shared UI registration with category-specific filtering.
- Reference examples and invalid-domain tests.

Pending acceptance:
- [ ] CI run passes for source tests, syntax checks, and desktop/tablet/mobile browser tests.
- [ ] Independent subject-matter review of each formula and assumption.
- [ ] Manual accessibility review.

## Phase 19 — Platform Integration

Implemented in the working branch:
- Loads the specialized calculation module before the shared app shell.
- Routes all specialist calculators through the shared calculator renderer.
- Filters each specialist category to only its own calculators.
- Adds integration regression tests for script ordering, category registration, and registry presence.
- Fixes the previously failing Phase 13 browser-test locators: tooltip help buttons and text inputs shared matching labels, so tests now target the textbox role explicitly.

Pending acceptance:
- [ ] Re-run CI and confirm all browser viewports pass.
- [ ] Verify the final merged/live deployment and direct routes after merge.
- [ ] Complete human keyboard and screen-reader testing.

## Phase 20 — Privacy and Security

Implemented in the working branch:
- Adds static regression checks for selected browser persistence/transmission APIs and remote script/iframe embeds.
- Documents source-review findings and explicit limits in `docs/PHASE-20-PRIVACY-SECURITY-REVIEW.md`.
- Keeps user-entered calculator data in local calculation flows in the reviewed source; no account, history, or analytics feature is added by this phase.

Pending acceptance:
- [ ] Run automated checks on the final PR head.
- [ ] Inspect the production network panel, hosting/provider logs and retention terms, security headers, and dependency advisories.
- [ ] Complete manual security/accessibility checks and record evidence.

## Completion rule

A source change is not equivalent to a passing test. A passing CI job is not equivalent to independent scientific review or production security sign-off. Keep those statuses separate and do not claim full release readiness while any acceptance item remains open.

## Scope boundary

Only the AllRoundCalc repository is in scope. Do not modify the separate ClerFit website/repository.
