# Contribution and verification conventions

AllRoundCalc is being built as a privacy-first, accessible static website. The initial UI foundation uses semantic HTML, CSS, and browser-native JavaScript; adding a framework or build tool requires a documented reason.

## Before implementing a calculator

1. Record the intended use and exclusions.
2. Document the formula, source, variables, constants, assumptions, units, and applicable range.
3. Work at least one example independently to establish an expected result.
4. Define normal, boundary, invalid-input, and edge-case tests.
5. Request formula review before implementing the calculation.
6. After implementation, run the agreed tests and record evidence before sign-off.

Do not invent formulas, silently substitute assumptions, or present estimates as authoritative professional advice.

## Privacy

- Compute visitor-entered values locally in the browser wherever practical.
- Do not send calculator inputs or outputs to a server.
- Do not add accounts, input history, tracking, analytics, or third-party scripts without an explicit design and privacy review.
- Public reference data may be fetched separately from visitor-entered values; explain its source, freshness, and limitations.

## UI and accessibility

- Use semantic landmarks, a logical heading hierarchy, visible keyboard focus, and meaningful accessible names.
- Ensure core navigation, search, and controls work with a keyboard and assistive technology.
- Respect reduced-motion preferences and test narrow mobile layouts as well as desktop layouts.
- Use descriptive text and professional icons; do not rely on emoji or color alone to communicate meaning.
- Keep shared styling and interaction patterns consistent across home, category, and calculator templates.

## Change quality

- Keep changes scoped and reviewable.
- Do not mark a feature as working merely because its layout exists.
- For every user-facing behavior, verify success, empty, invalid, and failure states where applicable.
- Report what was tested, what was not tested, and any remaining limitations accurately.

## Run the UI source-contract checks

Use Node.js 20 or newer and run `node --test tests/ui-model.test.mjs` for source-contract checks. Run `npm install`, `npx playwright install chromium`, then `npm run test:e2e` for Chromium desktop/tablet/mobile browser tests and automated axe-core accessibility checks. CI runs these checks automatically on pushes to `main`. Automated checks do not replace manual screen-reader review.
