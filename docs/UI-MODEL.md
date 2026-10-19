# Phase 02 — responsive UI model

## Scope

Phase 02 defines the shared user interface and page patterns only. It does not implement calculator formulas, production contact delivery, exchange-rate fetching, user accounts, analytics, or persistence.

## Visual direction

- Distinct AllRoundCalc brand: deep blue, teal, soft neutral surfaces, and a geometric mark.
- System-font stack with no third-party font or image requests.
- Clear type hierarchy, generous spacing, subtle borders, and professional inline SVG icons.
- Responsive layouts for mobile, tablet, and desktop; reduced-motion support.

## Shared site shell

- Sticky header with menu, brand/home link, search control, Home, and Contact us navigation.
- Sidebar closed by default, operable by keyboard, dismissible with Escape/backdrop/navigation, and closed after a navigation link is chosen.
- Skip link, semantic landmarks, visible focus indication, and accessible names for icon-only controls.
- Shared footer and page title/breadcrumb patterns.

## Page patterns

1. **Home** — purpose, category search, featured categories, project principles, shared calculator-template preview.
2. **All categories** — searchable directory of the sixteen planned top-level categories.
3. **Category** — category summary, development state, catalogue placeholder, and release standards.
4. **Calculator template preview** — intended layout for inputs, units, result, formula, and assumptions; controls deliberately disabled until a reviewed calculation exists.
5. **About** — privacy-first and formula-first principles.
6. **Contact** — explicit notice that a working contact channel has not yet been configured; no inactive form that implies message delivery.

## Interaction behavior

- Search filters the category catalogue and preserves the search query in the URL fragment.
- Category cards and sidebar navigation open their corresponding category view.
- Menu and header search can be closed with Escape.
- No visitor-entered calculator data is collected, stored, or transmitted in Phase 02.
- No analytics, trackers, external fonts, external images, or third-party JavaScript are included.

## Status and acceptance

- UI pages and navigation shell exist in the repository.
- Category taxonomy and descriptions are centralized in assets/js/app.js.
- Calculator pages are interface placeholders only; no calculations are claimed to work in this phase.
- Contact is informative only; no email address or form delivery has been invented.
- Before Phase 02 can be signed off, syntax, links, narrow-screen layout, keyboard navigation, and screen-reader semantics should be checked in a real browser. Repository edits alone do not establish browser-tested acceptance.
