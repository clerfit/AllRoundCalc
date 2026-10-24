# Phase 20 — Privacy and Security Review

**Review type:** source-level static review and regression checks  
**Scope:** AllRoundCalc front-end source on the Phase 18–20 work branch  
**Status:** Static checks implemented; production/manual review is not signed off.

## Findings checked in source

- Calculator logic runs through local JavaScript modules loaded by `index.html`.
- The reviewed `index.html`, shared `assets/js/app.js`, and Phase 18 specialized module do not call `fetch`, `XMLHttpRequest`, `navigator.sendBeacon`, `localStorage`, `sessionStorage`, or `document.cookie`.
- The page shell does not embed remote script sources or iframes.
- Calculator results are rendered using `textContent`; category and calculator labels inserted into generated HTML are escaped with the shared `escapeHtml` helper.
- Phase 18 formulas accept explicit user-entered factors for electricity price and emissions; the app does not silently invent a currency or emissions factor.
- Phase 18 domain checks reject non-finite inputs, invalid geographic ranges, non-positive parallax, and OEE percentages outside 0–100.

## Automated regression coverage

- `tests/platform-privacy.test.mjs` checks local script ordering, specialist category registration, absence of selected persistence/transmission APIs in the reviewed source, and absence of remote script/iframe embeds.
- `tests/specialized-calculations.test.mjs` checks registry uniqueness, documented formula fields, reference examples, and input-domain failures.
- `tests/e2e/ui.spec.js` now uses textbox-role locators for calculator inputs with adjacent tooltip buttons. The previous broad label locator matched both the help button and the input, causing the three responsive Phase 13 browser tests to fail.

## Limitations and remaining sign-off

This static review does **not** establish that the deployed site, GitHub Pages infrastructure, browser extensions, hosting logs, DNS, or every dependency is free of privacy/security risks. It is not a penetration test or a manual screen-reader audit. Before making broad production privacy claims, separately inspect the live deployment, network panel, hosting/provider logging and retention terms, dependency advisories, security headers, and contact workflow.

**Phase 20 acceptance status:** Static source checks and automated regression tests are added. Full production/manual privacy and security sign-off remains open until those checks are actually run against the final merged deployment and the remaining manual checks are documented.
