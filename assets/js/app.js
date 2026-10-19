(function () {
  "use strict";

  const categories = [
    { id:"basic-mathematics", name:"Basic & Everyday Mathematics", description:"Arithmetic, fractions, percentages, ratios, and practical number work.", icon:"calculator" },
    { id:"advanced-mathematics", name:"Advanced Mathematics", description:"Algebra, calculus, geometry, trigonometry, and equation tools.", icon:"function" },
    { id:"physics", name:"Physics", description:"Mechanics, motion, energy, electricity, waves, and core physical quantities.", icon:"atom" },
    { id:"chemistry", name:"Chemistry", description:"Molarity, stoichiometry, concentrations, and chemical quantities.", icon:"flask" },
    { id:"statistics-probability", name:"Statistics & Probability", description:"Distributions, descriptive statistics, probability, and data analysis.", icon:"chart" },
    { id:"personal-finance", name:"Personal Finance", description:"Budgeting, savings, loans, interest, and personal money planning.", icon:"wallet" },
    { id:"business-economics", name:"Business & Economics", description:"Margins, pricing, growth, break-even points, and economic indicators.", icon:"briefcase" },
    { id:"health-fitness", name:"Health & Fitness", description:"Fitness planning and general health-related estimates with clear limitations.", icon:"heart" },
    { id:"unit-converters", name:"Unit Converters", description:"Convert length, mass, area, volume, speed, temperature, and more.", icon:"ruler" },
    { id:"date-time", name:"Date & Time", description:"Date differences, durations, time zones, and calendar calculations.", icon:"calendar" },
    { id:"computer-science", name:"Computer Science & Digital Tools", description:"Data sizes, number bases, programming helpers, and digital formats.", icon:"code" },
    { id:"engineering", name:"Engineering", description:"Engineering quantities, material properties, and discipline-specific tools.", icon:"cog" },
    { id:"construction-home", name:"Construction & Home", description:"Room areas, materials, paint estimates, and household projects.", icon:"house" },
    { id:"travel-vehicles", name:"Travel & Vehicles", description:"Travel time, fuel use, distance, trip costs, and vehicle estimates.", icon:"route" },
    { id:"education-exams", name:"Education & Exam Tools", description:"Grade calculations, marks, study planning, and exam-related tools.", icon:"graduation" },
    { id:"specialized", name:"Other Specialized Calculators", description:"Focused tools for other subjects and practical use cases.", icon:"shapes" }
  ];

  const iconPaths = {
    calculator:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h2m4 0h2M8 15h2m4 0h2M8 18h2m4 0h2"/>',
    function:'<path d="M18 4h-4a3 3 0 0 0-3 3v10a3 3 0 0 1-3 3H5M8 8h8M5 14h7"/>',
    atom:'<ellipse cx="12" cy="12" rx="9" ry="3.8"/><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.3"/>',
    flask:'<path d="M9 3h6M10 3v6l-5.6 9.1A2 2 0 0 0 6.1 21h11.8a2 2 0 0 0 1.7-2.9L14 9V3"/><path d="M7.7 16h8.6"/>',
    chart:'<path d="M4 20V5M4 20h17"/><path d="m7 15 4-4 3 2 5-7"/>',
    wallet:'<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 9h18M16 14h2M6 6V4h12"/>',
    briefcase:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2"/>',
    heart:'<path d="M20.8 8.8c0 5.5-8.8 11-8.8 11s-8.8-5.5-8.8-11A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z"/>',
    ruler:'<path d="m4 16 12-12 4 4L8 20H4z"/><path d="m12 8 2 2m-5 1 2 2m-5 1 2 2"/>',
    calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h2m4 0h2"/>',
    code:'<path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-10-2 12"/>',
    cog:'<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.9 1.1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.9-1.1l-1.7.7-1.4-2.4 1.4-1.1A7 7 0 0 1 6.5 13l-1.8-.5V9.7l1.8-.3a8 8 0 0 1 .8-2l-1-1.5 2-2 1.6 1a8 8 0 0 1 2-.8l.4-1.8h2.8l.3 1.8a8 8 0 0 1 2 .8l1.6-1 2 2-1 1.6a8 8 0 0 1 .8 2l1.8.3v2.8l-1.8.5a7 7 0 0 1-.4 1.9Z"/>',
    house:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z"/>',
    route:'<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h4a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3"/>',
    graduation:'<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c4 3 8 3 12 0v-5M22 9v6"/>',
    shapes:'<circle cx="8" cy="8" r="4"/><path d="M14 4h6v6h-6zM14 15l3-3 5 7h-8zM3 16h6v5H3z"/>'
  };

  const app = document.getElementById("app");
  const drawer = document.getElementById("site-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  const menuToggle = document.getElementById("menu-toggle");
  const closeDrawerButton = document.getElementById("close-drawer");
  const searchPanel = document.getElementById("header-search-panel");
  const searchToggle = document.getElementById("header-search-toggle");
  const headerSearchInput = document.getElementById("header-search-input");
  const year = document.getElementById("current-year");
  let lastFocusedElement = null;

  function icon(name) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (iconPaths[name] || iconPaths.shapes) + '</svg>';
  }
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      return { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[character];
    });
  }
  function categoryCard(category) {
    return '<a class="category-card" href="#/category/' + category.id + '" aria-label="Explore ' + escapeHtml(category.name) + '">' +
      '<span class="category-icon">' + icon(category.icon) + '</span><h3>' + escapeHtml(category.name) + '</h3><p>' + escapeHtml(category.description) + '</p><span class="card-arrow" aria-hidden="true">↗</span></a>';
  }
  function drawerLink(category) {
    return '<a class="drawer-link" href="#/category/' + category.id + '"><span class="nav-icon" aria-hidden="true">' + icon(category.icon) + '</span>' + escapeHtml(category.name) + '</a>';
  }
  function populateDrawer() {
    document.getElementById("drawer-categories").innerHTML = categories.map(drawerLink).join("");
  }
  function setDrawer(open) {
    drawer.classList.toggle("is-open", open);
    drawer.setAttribute("aria-hidden", String(!open));
    if (open) drawer.removeAttribute("inert");
    else drawer.setAttribute("inert", "");
    backdrop.hidden = !open;
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    document.body.classList.toggle("drawer-open", open);
    if (open) {
      lastFocusedElement = document.activeElement;
      closeDrawerButton.focus({ preventScroll: true });

    } else if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
      lastFocusedElement = null;
    }
  }
  function setHeaderSearch(open, focusInput) {
    searchPanel.hidden = !open;
    searchToggle.setAttribute("aria-expanded", String(open));
    searchToggle.setAttribute("aria-label", open ? "Close search" : "Open search");
    if (open && focusInput) headerSearchInput.focus();
  }
  function pageShell(content) { return '<div class="page-shell">' + content + '</div>'; }
  function breadcrumbs(items) {
    return '<nav class="breadcrumbs" aria-label="Breadcrumb">' + items.map(function (item, index) {
      const label = escapeHtml(item.label);
      if (index === items.length - 1) return '<span aria-current="page">' + label + '</span>';
      return '<a href="' + item.href + '">' + label + '</a><span class="crumb-separator" aria-hidden="true">/</span>';
    }).join("") + '</nav>';
  }
  function renderHome() {
    app.innerHTML = '<section class="hero"><div class="hero-copy"><p class="eyebrow"><span class="eyebrow-line"></span>A clearer way to calculate</p><h1>Every calculation.<br><span>One place.</span></h1><p class="hero-lede">Find the right tool for the numbers that matter in your study, work, projects, and everyday life.</p><form class="hero-search" id="hero-search-form" role="search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.2 4.2"/></svg><label class="sr-only" for="hero-search-input">Search categories</label><input id="hero-search-input" type="search" placeholder="What would you like to calculate?" autocomplete="off"><button type="submit" class="button button-primary">Search <span aria-hidden="true">↗</span></button></form><p class="search-hint">Try “physics”, “finance”, “units” or “date and time”.</p><div class="hero-principles"><span>' + icon("heart") + ' Privacy-minded by design</span><span>' + icon("calculator") + ' Formulas reviewed before release</span></div></div><div class="hero-art" aria-hidden="true"><div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div><div class="art-card art-card-main"><div class="art-card-top"><span class="art-dot"></span><span>CALCULATION SPACE</span><span class="art-more">•••</span></div><div class="art-formula">a² + b² = c²</div><div class="art-divider"></div><div class="art-row"><span class="art-label">Method</span><span class="art-value">Pythagorean theorem</span></div><div class="art-row"><span class="art-label">Units</span><span class="art-value">Consistent &amp; clear</span></div><div class="art-status"><span class="status-check"><svg viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></svg></span> Results with context</div></div><div class="art-float art-float-top"><span class="float-icon">∑</span><span><strong>16 categories</strong><small>One growing library</small></span></div><div class="art-float art-float-bottom"><span class="float-icon float-icon-teal">↗</span><span><strong>Clarity first</strong><small>Show the method</small></span></div><div class="art-grid"></div></div></section>' +
      '<section class="section categories-section" id="categories"><div class="section-heading"><div><p class="eyebrow">Find your field</p><h2>What are you working on?</h2><p class="section-lede">Browse by subject to find the right kind of calculator.</p></div><a class="subtle-link" href="#/categories">Browse all categories <span aria-hidden="true">→</span></a></div><div class="category-grid">' + categories.slice(0, 8).map(categoryCard).join("") + '</div><div class="catalog-note"><span class="note-icon" aria-hidden="true">i</span><p><strong>The library is being built.</strong> These are subject areas in the roadmap, not a claim that every calculator is already available.</p></div></section>' +
      '<section class="section method-section"><div class="method-panel"><div class="method-copy"><p class="eyebrow eyebrow-light">Built around trust</p><h2>A useful answer<br>shows its work.</h2><p>We’re building calculators to explain their methods, units, assumptions, and limitations—not just display a number.</p><a class="button button-light" href="#/about">Our principles <span aria-hidden="true">→</span></a></div><div class="method-points"><article><span class="method-number">01</span><div><h3>Understand the formula</h3><p>Know what each variable means and which assumptions apply.</p></div></article><article><span class="method-number">02</span><div><h3>Keep your values private</h3><p>Calculations should happen in your browser wherever practical.</p></div></article><article><span class="method-number">03</span><div><h3>Verify before publishing</h3><p>Expected answers, boundary cases, and invalid inputs all matter.</p></div></article></div></div></section>' +
      '<section class="section template-section"><div class="section-heading"><div><p class="eyebrow">The shared experience</p><h2>Designed for every calculator.</h2><p class="section-lede">A consistent layout for inputs, units, results, and the explanation behind them.</p></div><a class="subtle-link" href="#/calculator-preview">View layout preview <span aria-hidden="true">→</span></a></div><div class="template-preview"><div class="template-preview-head"><div><span class="template-icon" aria-hidden="true">ƒ</span><span class="preview-label">SHARED PAGE TEMPLATE</span></div><span class="status-pill">Design preview</span></div><div class="template-preview-body"><div class="preview-fields"><div class="skeleton-label">Input field with unit</div><div class="skeleton-input">Enter a value <span>cm ▾</span></div><div class="skeleton-label">Additional input</div><div class="skeleton-input">Enter a value <span>kg ▾</span></div><button class="button button-disabled" type="button" disabled>Calculation not active</button></div><div class="preview-result"><span class="preview-label">RESULT AREA</span><div class="result-placeholder">—</div><p>Results will include relevant units, formula notes, and limitations.</p><div class="preview-rule"></div><div class="mini-rule"><span></span><span></span><span></span></div></div></div><p class="preview-caption">Interface preview only. Calculator inputs and calculations are not active in this phase.</p></div></section>';
    const form = document.getElementById("hero-search-form");
    const input = document.getElementById("hero-search-input");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const query = input.value.trim();
      if (query) location.hash = "#/categories?q=" + encodeURIComponent(query);
      else input.focus();
    });
  }
  function renderCategories(query) {
    const normalized = (query || "").trim().toLowerCase();
    const filtered = categories.filter(function (item) {
      return (item.name + " " + item.description + " " + item.id).toLowerCase().includes(normalized);
    });
    app.innerHTML = pageShell(breadcrumbs([{label:"Home",href:"#/home"},{label:"All categories"}]) +
      '<div class="page-title-row"><div><p class="page-eyebrow">The AllRoundCalc library</p><h1>Explore all categories</h1><p>Browse the planned subject areas. Category listings will expand as individual calculators pass formula review and testing.</p></div><div class="library-count"><strong>16</strong> planned categories</div></div>' +
      '<label class="sr-only" for="category-search">Filter categories</label><div class="page-search">' + icon("calculator") + '<input id="category-search" type="search" placeholder="Filter categories…" value="' + escapeHtml(query || "") + '" autocomplete="off"></div>' +
      '<div class="page-toolbar"><p id="category-count" aria-live="polite" aria-atomic="true">' + filtered.length + ' of ' + categories.length + ' categories</p><p>Calculator availability: in development</p></div>' +
      '<div class="category-grid" id="all-category-grid">' + filtered.map(categoryCard).join("") + '</div>' +
      (filtered.length ? "" : '<div class="empty-state"><h2>No matching categories</h2><p>Try another subject or a shorter search phrase.</p></div>') +
      '<div class="catalog-note"><span class="note-icon" aria-hidden="true">i</span><p><strong>Planned categories, not live calculators.</strong> Formula and feature availability will be shown clearly as the library is built.</p></div>');
    const input = document.getElementById("category-search");
    input.addEventListener("input", function () {
      const nextValue = input.value;
      const position = input.selectionStart;
      renderCategories(nextValue);
      const updated = document.getElementById("category-search");
      updated.focus();
      updated.setSelectionRange(position, position);
    });
  }
  function renderCategory(id) {
    const category = categories.find(function (item) { return item.id === id; });
    if (!category) return renderNotFound();
    app.innerHTML = pageShell(breadcrumbs([{label:"Home",href:"#/home"},{label:"All categories",href:"#/categories"},{label:category.name}]) +
      '<div class="page-title-row"><div><p class="page-eyebrow">Category overview</p><h1>' + escapeHtml(category.name) + '</h1><p>' + escapeHtml(category.description) + '</p></div><div class="category-icon" style="width:54px;height:54px;border-radius:15px">' + icon(category.icon) + '</div></div>' +
      '<div class="status-note"><strong>In development.</strong> This category is part of the AllRoundCalc roadmap. Individual calculators will be listed here only when their scope, formulas, assumptions, and verification plan are documented.</div>' +
      '<div class="template-page-grid"><section class="panel"><div class="panel-head"><h2>Calculator catalogue</h2><span class="status-pill">Coming in later phases</span></div><div class="panel-body"><div class="empty-state"><h2>No calculators published yet</h2><p>We will add tools to this category after their formulas and expected results have been reviewed.</p></div></div></section><aside class="panel"><div class="panel-head"><h2>Release standards</h2></div><div class="panel-body"><div class="explanation-list"><article><h3>Formula review</h3><p>Document the method, variables, constants, and assumptions before implementation.</p></article><article><h3>Inputs and units</h3><p>Specify valid ranges, unit choices, and how invalid or missing values are handled.</p></article><article><h3>Verification</h3><p>Compare outputs with independent examples and test edge cases before release.</p></article><article><h3>Privacy</h3><p>Keep entered values in the browser wherever practical and disclose any data dependency.</p></article></div></div></aside></div>');
  }
  function renderCalculatorPreview() {
    app.innerHTML = pageShell(breadcrumbs([{label:"Home",href:"#/home"},{label:"Calculator layout preview"}]) +
      '<div class="page-title-row"><div><p class="page-eyebrow">Reusable interface</p><h1>Calculator page template</h1><p>A shared layout for entering values, selecting units, understanding the result, and checking the underlying method.</p></div><span class="preview-only-label">UI preview only</span></div>' +
      '<div class="status-note"><strong>Not a working calculator.</strong> These example controls are deliberately disabled in Phase 02. A real calculator will be added only after its formula and test plan are reviewed.</div>' +
      '<div class="template-page-grid"><section class="panel"><div class="panel-head"><h2>Inputs</h2><span class="preview-only-label">Preview</span></div><div class="panel-body"><div class="form-row"><label for="preview-input-a">Example input A</label><input id="preview-input-a" type="number" placeholder="Enter a value" disabled></div><div class="form-row"><label for="preview-unit-a">Unit</label><select id="preview-unit-a" disabled><option>Choose a unit</option></select></div><div class="form-row"><label for="preview-input-b">Example input B</label><input id="preview-input-b" type="number" placeholder="Enter a value" disabled></div><button class="button button-disabled" type="button" disabled>Calculate · not active</button></div></section>' +
      '<div><section class="panel"><div class="panel-head"><h2>Result</h2><span class="preview-only-label">Placeholder</span></div><div class="panel-body"><div class="template-preview-output"><span class="output-label">Calculated value</span><p class="output-value">—</p><p class="body-copy">Result and unit will appear here when a verified calculator is implemented.</p></div></div></section><section class="panel" style="margin-top:16px"><div class="panel-head"><h2>Formula &amp; assumptions</h2></div><div class="panel-body"><div class="explanation-list"><article><h3>Formula</h3><p>The verified equation and source will be documented for each calculator.</p></article><article><h3>Variables and units</h3><p>Each symbol, input unit, conversion, and output unit will be explained.</p></article><article><h3>Accuracy &amp; limitations</h3><p>Expected ranges, rounding, assumptions, and known limitations will be visible.</p></article></div></div></section></div></div>');
  }
  function renderAbout() {
    app.innerHTML = pageShell(breadcrumbs([{label:"Home",href:"#/home"},{label:"About"}]) +
      '<div class="page-title-row"><div><p class="page-eyebrow">Why we are building this</p><h1>Clarity before complexity.</h1><p>AllRoundCalc is a planned home for calculators across study, science, work, and everyday decisions. Its interface is being designed around understandable methods and honest limitations.</p></div></div>' +
      '<div class="about-grid"><article class="about-card"><h2>Privacy by default</h2><p>Entered calculator values should be processed in the browser wherever practical. The project will review hosting logs and any external services before publishing specific privacy claims.</p></article><article class="about-card"><h2>Formula-first development</h2><p>Before a calculator is coded, its formula, variables, assumptions, supported ranges, worked examples, and edge cases must be documented and reviewed.</p></article><article class="about-card"><h2>Accessible, consistent UI</h2><p>Shared templates aim to support mobile and desktop layouts, keyboard navigation, assistive technologies, readable text, and clear error states.</p></article><article class="about-card"><h2>Honest status</h2><p>A designed interface is not the same as a working calculation. Features will be marked available only after implementation and verification.</p></article></div>');
  }
  function renderContact() {
    app.innerHTML = pageShell(breadcrumbs([{label:"Home",href:"#/home"},{label:"Contact us"}]) +
      '<div class="page-title-row"><div><p class="page-eyebrow">Contact</p><h1>Get in touch.</h1><p>Feedback will help shape the catalogue, usability, and verification standards as AllRoundCalc develops.</p></div></div>' +
      '<section class="contact-panel"><h2>Contact channel not configured yet</h2><p>This project is still being built, and a verified contact address or submission service has not been configured. To protect your information, this page does not collect or transmit any personal details.</p><div class="contact-status">A working contact method will be published after it is configured and tested. No message form is active on this page.</div></section>');
  }
  function renderNotFound() {
    app.innerHTML = pageShell(breadcrumbs([{label:"Home",href:"#/home"},{label:"Page not found"}]) + '<div class="empty-state"><h2>We couldn’t find that page.</h2><p>The address may be outdated, or this section may not be available yet.</p><p style="margin-top:18px"><a class="button button-primary" href="#/home">Return home <span aria-hidden="true">→</span></a></p></div>');
  }
  function route() {
    setDrawer(false);
    setHeaderSearch(false, false);
    const raw = location.hash.replace(/^#\/?/, "");
    const parts = raw.split("?");
    const path = parts[0].split("/").filter(Boolean);
    const params = new URLSearchParams(parts[1] || "");
    const routeName = path[0] || "home";
    if (routeName === "home") renderHome();
    else if (routeName === "categories") renderCategories(params.get("q") || "");
    else if (routeName === "category") renderCategory(path[1] || "");
    else if (routeName === "calculator-preview") renderCalculatorPreview();
    else if (routeName === "about") renderAbout();
    else if (routeName === "contact") renderContact();
    else renderNotFound();
    document.title = routeName === "home" ? "AllRoundCalc — Every calculation. One place." :
      routeName === "category" ? ((categories.find(function (item) { return item.id === path[1]; }) || {}).name || "Category") + " — AllRoundCalc" :
      ({ categories:"All categories", "calculator-preview":"Calculator layout preview", about:"About AllRoundCalc", contact:"Contact AllRoundCalc" }[routeName] || "Page not found") + " — AllRoundCalc";
  }

  menuToggle.addEventListener("click", function () { setDrawer(!drawer.classList.contains("is-open")); });
  closeDrawerButton.addEventListener("click", function () { setDrawer(false); });
  backdrop.addEventListener("click", function () { setDrawer(false); });
  drawer.addEventListener("click", function (event) { if (event.target.closest("a")) setDrawer(false); });
  drawer.addEventListener("transitionend", function (event) {
    if (event.propertyName === "transform" && drawer.classList.contains("is-open")) closeDrawerButton.focus({ preventScroll: true });
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      if (drawer.classList.contains("is-open")) setDrawer(false);
      if (!searchPanel.hidden) { setHeaderSearch(false, false); searchToggle.focus(); }
    }
    if (event.key === "Tab" && drawer.classList.contains("is-open")) {
      const focusable = Array.from(drawer.querySelectorAll('a[href],button:not(:disabled)'));
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  searchToggle.addEventListener("click", function () { setHeaderSearch(searchPanel.hidden, true); });
  document.getElementById("close-header-search").addEventListener("click", function () { setHeaderSearch(false, false); searchToggle.focus(); });
  document.getElementById("header-search-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const query = headerSearchInput.value.trim();
    if (query) location.hash = "#/categories?q=" + encodeURIComponent(query);
  });
  headerSearchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && headerSearchInput.value.trim()) {
      event.preventDefault();
      location.hash = "#/categories?q=" + encodeURIComponent(headerSearchInput.value.trim());
    }
  });
  window.addEventListener("hashchange", route);
  populateDrawer();
  year.textContent = String(new Date().getFullYear());
  route();
}());
