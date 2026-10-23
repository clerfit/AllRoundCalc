(function () {
  "use strict";

  const categories = [
    { id:"basic-mathematics", name:"Basic & Everyday Mathematics", description:"Arithmetic, fractions, percentages, ratios, and practical number work.", icon:"calculator" },
    { id:"advanced-mathematics", name:"Advanced Mathematics", description:"Algebra, calculus, geometry, trigonometry, and equation tools.", icon:"function" },
    { id:"geometry-mensuration", name:"Geometry & Mensuration", description:"Plane shapes, perimeter, area, surface area, and volume.", icon:"shapes" },
    { id:"trigonometry", name:"Trigonometry", description:"Trigonometric ratios, triangle solving, angles, and identities.", icon:"function" },
    { id:"calculus", name:"Calculus", description:"Limits, derivatives, integrals, and differential equations.", icon:"chart" },
    { id:"linear-algebra", name:"Linear Algebra", description:"Matrices, vectors, systems, eigenvalues, and linear transformations.", icon:"grid" },
    { id:"number-theory-discrete", name:"Number Theory & Discrete Mathematics", description:"Prime numbers, modular arithmetic, combinatorics, sets, and graphs.", icon:"hash" },
    { id:"probability", name:"Probability", description:"Conditional probability, Bayes' theorem, events, and distributions.", icon:"chart" },
    { id:"statistics-probability", name:"Statistics & Probability", description:"Descriptive statistics, distributions, inference, correlation, and regression.", icon:"chart" },
    { id:"data-analysis", name:"Data Analysis", description:"Data summaries, scaling, trend estimates, error metrics, and outliers.", icon:"database" },
    { id:"physics", name:"Physics — Mechanics", description:"Motion, forces, momentum, work, energy, and rotation.", icon:"atom" },
    { id:"physics-waves-sound", name:"Physics — Waves & Sound", description:"Wave motion, frequency, resonance, sound intensity, and Doppler shift.", icon:"audio-lines" },
    { id:"physics-electricity-magnetism", name:"Physics — Electricity & Magnetism", description:"Circuits, fields, capacitance, induction, and AC quantities.", icon:"zap" },
    { id:"physics-thermodynamics", name:"Physics — Thermodynamics", description:"Heat, gases, thermal expansion, energy balances, and efficiency.", icon:"thermometer" },
    { id:"physics-optics", name:"Physics — Optics", description:"Lenses, mirrors, refraction, diffraction, and photon quantities.", icon:"eye" },
    { id:"chemistry", name:"Chemistry — General & Stoichiometry", description:"Moles, molar mass, concentration, stoichiometry, and gas laws.", icon:"flask" },
    { id:"chemistry-acids-bases", name:"Chemistry — Acids, Bases & Equilibrium", description:"pH, buffers, titration, equilibrium constants, and solubility.", icon:"flask" },
    { id:"chemistry-thermochemistry-kinetics", name:"Chemistry — Thermochemistry & Kinetics", description:"Reaction enthalpy, calorimetry, rates, half-life, and Arrhenius estimates.", icon:"flame" },
    { id:"chemistry-electrochemistry", name:"Chemistry — Electrochemistry", description:"Cell potential, Nernst equation, electrolysis, and charge conversions.", icon:"battery-charging" },
    { id:"biology-life-sciences", name:"Biology & Life Sciences", description:"Population models, genetics, dilution, microscopy, and ecology.", icon:"dna" },
    { id:"health-fitness", name:"Health & Fitness", description:"General fitness and health-related estimates with clear limitations.", icon:"heart" },
    { id:"nutrition-food", name:"Nutrition & Food", description:"Nutrition-label arithmetic, recipe scaling, energy, and nutrient estimates.", icon:"utensils" },
    { id:"sports-performance", name:"Sports Performance", description:"Pace, splits, race estimates, training loads, and performance metrics.", icon:"trophy" },
    { id:"personal-finance", name:"Personal Finance", description:"Budgeting, savings, loans, interest, and personal money planning.", icon:"wallet" },
    { id:"business-economics", name:"Business & Economics", description:"Margins, pricing, growth, break-even points, and economic indicators.", icon:"briefcase" },
    { id:"accounting-tax", name:"Accounting & Tax Planning", description:"Accounting metrics, depreciation, tax arithmetic, and cash cycles.", icon:"receipt" },
    { id:"marketing-advertising", name:"Marketing & Advertising", description:"CPM, CPC, CTR, conversion, acquisition cost, and campaign returns.", icon:"megaphone" },
    { id:"project-management", name:"Project Management", description:"Critical path, earned value, capacity, utilization, and prioritization.", icon:"calendar-check" },
    { id:"engineering-mechanical", name:"Engineering — Mechanical", description:"Stress, torque, gears, springs, power, and mechanical estimates.", icon:"cog" },
    { id:"engineering-civil-structural", name:"Engineering — Civil & Structural", description:"Material quantities, structural models, concrete, and section properties.", icon:"building-2" },
    { id:"engineering-electrical", name:"Engineering — Electrical", description:"Electrical power, circuits, voltage drop, battery runtime, and filters.", icon:"circuit-board" },
    { id:"engineering-chemical-process", name:"Engineering — Chemical & Process", description:"Mass balances, flow, conversion, heat duty, and process estimates.", icon:"factory" },
    { id:"computer-science", name:"Computer Science & Algorithms", description:"Number bases, data sizes, networking, algorithm helpers, and digital tools.", icon:"code" },
    { id:"programming-number-systems", name:"Programming & Number Systems", description:"Base conversion, integer ranges, bit operations, and representation.", icon:"terminal" },
    { id:"internet-networking", name:"Internet & Networking", description:"Subnets, throughput, latency, bandwidth, packet loss, and availability.", icon:"network" },
    { id:"digital-storage", name:"Digital Storage & Data Transfer", description:"Storage units, bitrates, transfer time, compression, and capacity planning.", icon:"hard-drive" },
    { id:"date-time", name:"Date & Time", description:"Date differences, durations, calendar calculations, and time conversion.", icon:"calendar" },
    { id:"unit-converters", name:"Units & Measurement", description:"Length, mass, area, volume, speed, temperature, pressure, energy, and power.", icon:"ruler" },
    { id:"geography-mapping", name:"Geography & Mapping", description:"Distances, bearings, coordinate conversions, and map scales.", icon:"map" },
    { id:"astronomy-space", name:"Astronomy & Space", description:"Orbital estimates, light travel time, parallax, and astronomy units.", icon:"orbit" },
    { id:"agriculture-gardening", name:"Agriculture & Gardening", description:"Plant spacing, plot area, irrigation, application rates, and yields.", icon:"sprout" },
    { id:"construction-home", name:"Construction & Home Improvement", description:"Room dimensions, paint, flooring, concrete, and household estimates.", icon:"house" },
    { id:"travel-vehicles", name:"Automotive & Transport", description:"Fuel economy, trip costs, range, speed, and vehicle estimates.", icon:"car" },
    { id:"aviation-marine", name:"Aviation & Marine", description:"Knots, nautical distance, travel time, and simplified flight/marine estimates.", icon:"plane" },
    { id:"energy-sustainability", name:"Energy & Sustainability", description:"Energy costs, solar yield, battery runtime, emissions, and payback.", icon:"leaf" },
    { id:"environment-climate", name:"Environment & Climate", description:"Rainfall, concentration, emissions intensity, degree days, and waste metrics.", icon:"cloud-sun" },
    { id:"real-estate-property", name:"Real Estate & Property", description:"Price per area, rental yield, mortgage scenarios, and property costs.", icon:"landmark" },
    { id:"education-exams", name:"Education & Assessment", description:"Weighted grades, required marks, attendance, and study allocation.", icon:"graduation-cap" },
    { id:"manufacturing-quality", name:"Manufacturing & Quality Control", description:"Takt time, throughput, yield, defects, OEE, and process capability.", icon:"factory" },
    { id:"everyday-planning", name:"Everyday Planning & Lifestyle", description:"Bill splits, discounts, budgets, recipe scaling, and time allocation.", icon:"list-check" }
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
    app.innerHTML = '<section class="hero"><div class="hero-copy"><p class="eyebrow"><span class="eyebrow-line"></span>A clearer way to calculate</p><h1>Every calculation.<br><span>One place.</span></h1><p class="hero-lede">Find the right tool for the numbers that matter in your study, work, projects, and everyday life.</p><form class="hero-search" id="hero-search-form" role="search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.2 4.2"/></svg><label class="sr-only" for="hero-search-input">Search categories</label><input id="hero-search-input" type="search" placeholder="What would you like to calculate?" autocomplete="off"><button type="submit" class="button button-primary">Search <span aria-hidden="true">↗</span></button></form><p class="search-hint">Try “physics”, “finance”, “units” or “date and time”.</p><div class="hero-principles"><span>' + icon("heart") + ' Privacy-minded by design</span><span>' + icon("calculator") + ' Formulas reviewed before release</span></div></div><div class="hero-art" aria-hidden="true"><div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div><div class="art-card art-card-main"><div class="art-card-top"><span class="art-dot"></span><span>CALCULATION SPACE</span><span class="art-more">•••</span></div><div class="art-formula">a² + b² = c²</div><div class="art-divider"></div><div class="art-row"><span class="art-label">Method</span><span class="art-value">Pythagorean theorem</span></div><div class="art-row"><span class="art-label">Units</span><span class="art-value">Consistent &amp; clear</span></div><div class="art-status"><span class="status-check"><svg viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></svg></span> Results with context</div></div><div class="art-float art-float-top"><span class="float-icon">∑</span><span><strong>50 categories</strong><small>One growing library</small></span></div><div class="art-float art-float-bottom"><span class="float-icon float-icon-teal">↗</span><span><strong>Clarity first</strong><small>Show the method</small></span></div><div class="art-grid"></div></div></section>' +
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
      '<div class="page-title-row"><div><p class="page-eyebrow">The AllRoundCalc library</p><h1>Explore all categories</h1><p>Browse the planned subject areas. Category listings will expand as individual calculators pass formula review and testing.</p></div><div class="library-count"><strong>50</strong> planned categories</div></div>' +
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
    const expansion = {
      "date-time": {api:window.AllRoundDateTimeCalculations,phase:"Phase 12 · Date & Time",icon:"calendar",description:"Browser-local calendar, elapsed-time, business-day, time-zone offset, and duration tools.",notice:"Date-only calculations use Gregorian UTC calendar days. Fixed-offset conversion does not apply daylight-saving or historical time-zone rules; public holidays are not excluded from business-day counts."},
      "computer-science": {api:window.AllRoundComputerScienceCalculations,phase:"Phase 13 · Computer Science & Digital Tools",icon:"code",description:"Browser-local programming, number-system, text-encoding, networking, and algorithm utilities.",notice:"Integer and bitwise tools state their supported ranges. Network transfer results are idealized estimates; FNV-1a is a non-cryptographic checksum and must not be used for security."},
      "personal-finance": {api:window.AllRoundFinanceCalculations,phase:"Phase 08 · Personal Finance",icon:"wallet",description:"Browser-local financial scenario calculators with visible formulas and assumptions.",notice:"Scenario estimates only. Results exclude fees, taxes, changing rates, risk, and lender-specific rules unless explicitly represented by the inputs."},
      "business-economics": {api:window.AllRoundBusinessCalculations,phase:"Phase 09 · Business & Economics",icon:"briefcase",description:"Business metrics, pricing, profitability, break-even analysis, and growth.",notice:"Introductory arithmetic only. Use consistent currencies, accounting definitions, units, and time periods; jurisdiction-specific tax and accounting rules are not inferred."},
      "health-fitness": {api:window.AllRoundHealthCalculations,phase:"Phase 10 · Health & Fitness",icon:"heart",description:"Body measurements, exercise estimates, and training calculations with explicit limitations.",notice:"These are estimates, not diagnoses or prescriptions. Age-based heart-rate and energy equations can be inaccurate for individuals; follow qualified clinical guidance where relevant."},
      "unit-converters": {api:window.AllRoundUnitConverters,phase:"Phase 11 · Unit Converters",icon:"ruler",description:"Browser-local conversions across common metric, customary, scientific, and digital units.",notice:"Choose units within each converter. Volume, energy, horsepower, and digital-storage conventions are explicitly stated on each tool."},
      "geography-mapping": {api:window.AllRoundSpecializedCalculations,category:"geography-mapping",phase:"Phase 18 · Other Specialized Calculators",icon:"map",description:"Geographic distance and navigation estimates.",notice:"Distances and bearings use a spherical-Earth model and are not surveyed or road-route results."},
      "astronomy-space": {api:window.AllRoundSpecializedCalculations,category:"astronomy-space",phase:"Phase 18 · Other Specialized Calculators",icon:"atom",description:"Introductory astronomy distance and light-travel calculations.",notice:"Astronomical outputs depend on stated idealized assumptions and do not replace scientific data analysis."},
      "agriculture-gardening": {api:window.AllRoundSpecializedCalculations,category:"agriculture-gardening",phase:"Phase 18 · Other Specialized Calculators",icon:"shapes",description:"Basic planting-density and irrigation-volume estimates.",notice:"Real plots and irrigation systems have edge effects, losses, and site-specific requirements."},
      "energy-sustainability": {api:window.AllRoundSpecializedCalculations,category:"energy-sustainability",phase:"Phase 18 · Other Specialized Calculators",icon:"calculator",description:"Simple electricity usage cost estimates.",notice:"Uses only the energy and tariff entered; taxes and fixed charges are excluded."},
      "environment-climate": {api:window.AllRoundSpecializedCalculations,category:"environment-climate",phase:"Phase 18 · Other Specialized Calculators",icon:"shapes",description:"User-factor-based electricity emissions estimates.",notice:"Emission factors vary by location, year, and reporting boundary; no universal factor is assumed."},
      "manufacturing-quality": {api:window.AllRoundSpecializedCalculations,category:"manufacturing-quality",phase:"Phase 18 · Other Specialized Calculators",icon:"cog",description:"Manufacturing performance and quality metrics.",notice:"Use consistent definitions and measurement periods for availability, performance, and quality."}
    }[id];
    if (expansion && expansion.api) {
      const defs = expansion.category ? expansion.api.definitions.filter(function (item) { return item.category === expansion.category; }) : expansion.api.definitions;
      const groups = [...new Set(defs.map(function (item) { return item.group; }))];
      const catalogue = groups.map(function (group) {
        return '<section class="panel" style="margin-bottom:16px"><div class="panel-head"><h2>' + escapeHtml(group) + '</h2><span class="status-pill">' + defs.filter(function (item) { return item.group === group; }).length + ' tools</span></div><div class="panel-body"><div class="category-grid">' + defs.filter(function (item) { return item.group === group; }).map(function (item) {
          return '<a class="category-card" href="#/calculator/' + item.id + '"><span class="category-icon">' + icon(expansion.icon) + '</span><h3>' + escapeHtml(item.name) + '</h3><p>' + escapeHtml(item.description) + '</p><span class="card-arrow" aria-hidden="true">↗</span></a>';
        }).join("") + '</div></div></section>';
      }).join("");
      app.innerHTML = pageShell(breadcrumbs([{label:"Home",href:"#/home"},{label:"All categories",href:"#/categories"},{label:category.name}]) +
        '<div class="page-title-row"><div><p class="page-eyebrow">' + escapeHtml(expansion.phase) + '</p><h1>' + escapeHtml(category.name) + '</h1><p>' + escapeHtml(expansion.description) + '</p></div><span class="status-pill">' + defs.length + ' calculators</span></div>' +
        '<div class="status-note"><strong>' + escapeHtml(expansion.phase) + ' implementation.</strong> ' + escapeHtml(expansion.notice) + ' Calculations run locally in your browser.</div>' + catalogue);
      return;
    }
      if (id === "advanced-mathematics" && window.AllRoundAdvancedCalculations) {
      const defs = window.AllRoundAdvancedCalculations.definitions;
      const groups = [...new Set(defs.map(function (item) { return item.group; }))];
      const catalogue = groups.map(function (group) {
        return '<section class="panel" style="margin-bottom:16px"><div class="panel-head"><h2>' + escapeHtml(group) + '</h2><span class="status-pill">' + defs.filter(function (item) { return item.group === group; }).length + ' tools</span></div><div class="panel-body"><div class="category-grid">' + defs.filter(function (item) { return item.group === group; }).map(function (item) {
          return '<a class="category-card" href="#/calculator/' + item.id + '"><span class="category-icon">' + icon("function") + '</span><h3>' + escapeHtml(item.name) + '</h3><p>' + escapeHtml(item.description) + '</p><span class="card-arrow" aria-hidden="true">↗</span></a>';
        }).join("") + '</div></div></section>';
      }).join("");
      app.innerHTML = pageShell(breadcrumbs([{label:"Home",href:"#/home"},{label:"All categories",href:"#/categories"},{label:category.name}]) +
        '<div class="page-title-row"><div><p class="page-eyebrow">Phase 04 · Advanced Mathematics</p><h1>' + escapeHtml(category.name) + '</h1><p>Advanced mathematics tools with visible formulas, explicit domains, worked examples, and edge-case handling.</p></div><span class="status-pill">' + defs.length + ' calculators</span></div>' +
        '<div class="status-note"><strong>Phase 4 implementation and automated verification are complete.</strong> These calculators run locally in your browser. Broader independent numerical review and human assistive-technology testing remain part of site-wide release acceptance.</div>' + catalogue);
      return;
    }
    if (id === "physics" && window.AllRoundPhysicsCalculations) {
      const defs = window.AllRoundPhysicsCalculations.definitions;
      const groups = [...new Set(defs.map(function (item) { return item.group; }))];
      const catalogue = groups.map(function (group) {
        return '<section class="panel" style="margin-bottom:16px"><div class="panel-head"><h2>' + escapeHtml(group) + '</h2><span class="status-pill">' + defs.filter(function (item) { return item.group === group; }).length + ' tools</span></div><div class="panel-body"><div class="category-grid">' + defs.filter(function (item) { return item.group === group; }).map(function (item) {
          return '<a class="category-card" href="#/calculator/' + item.id + '"><span class="category-icon">' + icon("atom") + '</span><h3>' + escapeHtml(item.name) + '</h3><p>' + escapeHtml(item.description) + '</p><span class="card-arrow" aria-hidden="true">↗</span></a>';
        }).join("") + '</div></div></section>';
      }).join("");
      app.innerHTML = pageShell(breadcrumbs([{label:"Home",href:"#/home"},{label:"All categories",href:"#/categories"},{label:category.name}]) +
        '<div class="page-title-row"><div><p class="page-eyebrow">Phase 05 · Physics</p><h1>' + escapeHtml(category.name) + '</h1><p>Physics tools with SI units, visible formulas, explicit assumptions, and domain validation.</p></div><span class="status-pill">' + defs.length + ' calculators</span></div>' +
        '<div class="status-note"><strong>Phase 5 is in progress.</strong> These calculators run locally in your browser. Review the formula, units, and assumptions shown on each calculator.</div>' + catalogue);
      return;
    }
    if (id === "chemistry" && window.AllRoundChemistryCalculations) {
      const defs = window.AllRoundChemistryCalculations.definitions;
      const groups = [...new Set(defs.map(function (item) { return item.group; }))];
      const catalogue = groups.map(function (group) {
        return '<section class="panel" style="margin-bottom:16px"><div class="panel-head"><h2>' + escapeHtml(group) + '</h2><span class="status-pill">' + defs.filter(function (item) { return item.group === group; }).length + ' tools</span></div><div class="panel-body"><div class="category-grid">' + defs.filter(function (item) { return item.group === group; }).map(function (item) {
          return '<a class="category-card" href="#/calculator/' + item.id + '"><span class="category-icon">' + icon("flask") + '</span><h3>' + escapeHtml(item.name) + '</h3><p>' + escapeHtml(item.description) + '</p><span class="card-arrow" aria-hidden="true">↗</span></a>';
        }).join("") + '</div></div></section>';
      }).join("");
      app.innerHTML = pageShell(breadcrumbs([{label:"Home",href:"#/home"},{label:"All categories",href:"#/categories"},{label:category.name}]) +
        '<div class="page-title-row"><div><p class="page-eyebrow">Phase 06 · Chemistry</p><h1>' + escapeHtml(category.name) + '</h1><p>Chemistry tools with explicit units, ideal-model assumptions, and visible formulas.</p></div><span class="status-pill">' + defs.length + ' calculators</span></div>' +
        '<div class="status-note"><strong>Phase 6 is in progress.</strong> These tools run locally in your browser. Read each formula and limitation; concentration and gas-law estimates depend on stated assumptions.</div>' + catalogue);
      return;
    }
    if (id === "statistics-probability" && window.AllRoundStatisticsCalculations) {
      const defs = window.AllRoundStatisticsCalculations.definitions;
      const groups = [...new Set(defs.map(function (item) { return item.group; }))];
      const catalogue = groups.map(function (group) {
        return '<section class="panel" style="margin-bottom:16px"><div class="panel-head"><h2>' + escapeHtml(group) + '</h2><span class="status-pill">' + defs.filter(function (item) { return item.group === group; }).length + ' tools</span></div><div class="panel-body"><div class="category-grid">' + defs.filter(function (item) { return item.group === group; }).map(function (item) {
          return '<a class="category-card" href="#/calculator/' + item.id + '"><span class="category-icon">' + icon("chart") + '</span><h3>' + escapeHtml(item.name) + '</h3><p>' + escapeHtml(item.description) + '</p><span class="card-arrow" aria-hidden="true">↗</span></a>';
        }).join("") + '</div></div></section>';
      }).join("");
      app.innerHTML = pageShell(breadcrumbs([{label:"Home",href:"#/home"},{label:"All categories",href:"#/categories"},{label:category.name}]) +
        '<div class="page-title-row"><div><p class="page-eyebrow">Phase 07 · Statistics & Probability</p><h1>' + escapeHtml(category.name) + '</h1><p>Statistical summaries, probability rules, counting, discrete distributions, and linear relationships with explicit conventions and validation.</p></div><span class="status-pill">' + defs.length + ' calculators</span></div>' +
        '<div class="status-note"><strong>Phase 7 implementation.</strong> These tools run locally in your browser. Review the formula, data conventions, and assumptions shown on each calculator. Normal cumulative probabilities use a numerical approximation.</div>' + catalogue);
      return;
    }
    if (id === "basic-mathematics" && window.AllRoundCalculations) {
      const defs = window.AllRoundCalculations.definitions;
      const groups = [...new Set(defs.map(function (item) { return item.group; }))];
      const catalogue = groups.map(function (group) {
        return '<section class="panel" style="margin-bottom:16px"><div class="panel-head"><h2>' + escapeHtml(group) + '</h2><span class="status-pill">' + defs.filter(function (item) { return item.group === group; }).length + ' tools</span></div><div class="panel-body"><div class="category-grid">' + defs.filter(function (item) { return item.group === group; }).map(function (item) {
          return '<a class="category-card" href="#/calculator/' + item.id + '"><span class="category-icon">' + icon("calculator") + '</span><h3>' + escapeHtml(item.name) + '</h3><p>' + escapeHtml(item.description) + '</p><span class="card-arrow" aria-hidden="true">↗</span></a>';
        }).join("") + '</div></div></section>';
      }).join("");
    app.innerHTML = pageShell(breadcrumbs([{label:"Home",href:"#/home"},{label:"All categories",href:"#/categories"},{label:category.name}]) +
        '<div class="page-title-row"><div><p class="page-eyebrow">Phase 03 · First calculator release</p><h1>' + escapeHtml(category.name) + '</h1><p>Working browser-based calculators with visible formulas, clear assumptions, and input validation.</p></div><span class="status-pill">' + defs.length + ' calculators</span></div>' +
        '<div class="status-note"><strong>Phase 3 automated verification passed.</strong> These tools run locally in your browser. Results are numerical tools, not professional advice. Review formulas, assumptions, and edge cases shown on each page.</div>' + catalogue);
      return;
    }
    app.innerHTML = pageShell(breadcrumbs([{label:"Home",href:"#/home"},{label:"All categories",href:"#/categories"},{label:category.name}]) +
      '<div class="page-title-row"><div><p class="page-eyebrow">Category overview</p><h1>' + escapeHtml(category.name) + '</h1><p>' + escapeHtml(category.description) + '</p></div><div class="category-icon" style="width:54px;height:54px;border-radius:15px">' + icon(category.icon) + '</div></div>' +
      '<div class="status-note"><strong>In development.</strong> This category is part of the AllRoundCalc roadmap. Individual calculators will be listed here only when their scope, formulas, assumptions, and verification plan are documented.</div>' +
      '<div class="template-page-grid"><section class="panel"><div class="panel-head"><h2>Calculator catalogue</h2><span class="status-pill">Coming in later phases</span></div><div class="panel-body"><div class="empty-state"><h2>No calculators published yet</h2><p>We will add tools to this category after their formulas and expected results have been reviewed.</p></div></div></section><aside class="panel"><div class="panel-head"><h2>Release standards</h2></div><div class="panel-body"><div class="explanation-list"><article><h3>Formula review</h3><p>Document the method, variables, and assumptions.</p></article><article><h3>Inputs and units</h3><p>Specify valid ranges, unit choices, and invalid-value behavior.</p></article><article><h3>Verification</h3><p>Compare outputs with independent examples and test edge cases.</p></article><article><h3>Privacy</h3><p>Keep entered values in the browser wherever practical.</p></article></div></div></aside></div>');
  }
  function renderCalculator(id) {
    const basicApi = window.AllRoundCalculations;
    const advancedApi = window.AllRoundAdvancedCalculations;
    const physicsApi = window.AllRoundPhysicsCalculations;
    const chemistryApi = window.AllRoundChemistryCalculations;
    const statisticsApi = window.AllRoundStatisticsCalculations;
    const financeApi = window.AllRoundFinanceCalculations;
    const businessApi = window.AllRoundBusinessCalculations;
    const healthApi = window.AllRoundHealthCalculations;
    const unitApi = window.AllRoundUnitConverters;
    const dateTimeApi = window.AllRoundDateTimeCalculations;
    const computerScienceApi = window.AllRoundComputerScienceCalculations;
    const specializedApi = window.AllRoundSpecializedCalculations;
    const phase18 = !!(specializedApi && specializedApi.definitions.some(function (item) { return item.id === id; }));
    const phase13 = !!(computerScienceApi && computerScienceApi.definitions.some(function (item) { return item.id === id; }));
    const phase12 = !!(dateTimeApi && dateTimeApi.definitions.some(function (item) { return item.id === id; }));
    const phase11 = !!(unitApi && unitApi.definitions.some(function (item) { return item.id === id; }));
    const phase10 = !!(healthApi && healthApi.definitions.some(function (item) { return item.id === id; }));
    const phase9 = !!(businessApi && businessApi.definitions.some(function (item) { return item.id === id; }));
    const phase8 = !!(financeApi && financeApi.definitions.some(function (item) { return item.id === id; }));
    const phase7 = !!(statisticsApi && statisticsApi.definitions.some(function (item) { return item.id === id; }));
    const phase4 = !!(advancedApi && advancedApi.definitions.some(function (item) { return item.id === id; }));
    const phase5 = !!(physicsApi && physicsApi.definitions.some(function (item) { return item.id === id; }));
    const phase6 = !!(chemistryApi && chemistryApi.definitions.some(function (item) { return item.id === id; }));
    const api = phase18 ? specializedApi : phase13 ? computerScienceApi : phase12 ? dateTimeApi : phase11 ? unitApi : phase10 ? healthApi : phase9 ? businessApi : phase8 ? financeApi : phase7 ? statisticsApi : phase6 ? chemistryApi : phase5 ? physicsApi : phase4 ? advancedApi : basicApi;
    const def = api && api.definitions.find(function (item) { return item.id === id; });
    if (!def) return renderNotFound();
    const categoryId = phase18 ? def.category : phase13 ? "computer-science" : phase12 ? "date-time" : phase11 ? "unit-converters" : phase10 ? "health-fitness" : phase9 ? "business-economics" : phase8 ? "personal-finance" : phase7 ? "statistics-probability" : phase6 ? "chemistry" : phase5 ? "physics" : phase4 ? "advanced-mathematics" : "basic-mathematics";
    const categoryName = phase18 ? ((categories.find(function (item) { return item.id === def.category; }) || {}).name || "Other Specialized Calculators") : phase13 ? "Computer Science & Algorithms" : phase12 ? "Date & Time" : phase11 ? "Unit Converters" : phase10 ? "Health & Fitness" : phase9 ? "Business & Economics" : phase8 ? "Personal Finance" : phase7 ? "Statistics & Probability" : phase6 ? "Chemistry" : phase5 ? "Physics" : phase4 ? "Advanced Mathematics" : "Basic & Everyday Mathematics";
    const phaseLabel = phase18 ? "Phase 18 · Other Specialized Calculators" : phase13 ? "Phase 13 · Computer Science & Digital Tools" : phase12 ? "Phase 12 · Date & Time" : phase11 ? "Phase 11 · Unit Converters" : phase10 ? "Phase 10 · Health & Fitness" : phase9 ? "Phase 09 · Business & Economics" : phase8 ? "Phase 08 · Personal Finance" : phase7 ? "Phase 07 · Statistics & Probability" : phase6 ? "Phase 06 · Chemistry" : phase5 ? "Phase 05 · Physics" : phase4 ? "Phase 04 · Advanced Mathematics" : "Phase 03 · Basic & Everyday Mathematics";
    const extra = (id === "basic-arithmetic" || id === "decimal-calculator" || id === "fraction-calculator")
      ? '<div class="form-row"><label for="calc-operation">Operation</label><select id="calc-operation"><option value="add">Add (+)</option><option value="subtract">Subtract (−)</option><option value="multiply">Multiply (×)</option><option value="divide">Divide (÷)</option></select></div>'
      : id === "tax" ? '<div class="form-row"><label for="calc-mode">Price mode</label><select id="calc-mode"><option value="added">Tax added to pre-tax price</option><option value="included">Tax already included in price</option></select></div>'
      : id === "proportion-type" ? '<div class="form-row"><label for="calc-mode">Relationship</label><select id="calc-mode"><option value="direct">Direct proportion</option><option value="inverse">Inverse proportion</option></select></div>'
      : id === "factors-multiples" ? '<div class="form-row"><label for="calc-mode">Find</label><select id="calc-mode"><option value="factors">Positive factors</option><option value="multiples">First multiples</option></select></div>'
      : id === "health-bmr-mifflin" ? '<div class="form-row"><label for="calc-sex">Equation constant</label><select id="calc-sex"><option value="male">Men’s equation constant</option><option value="female">Women’s equation constant</option></select></div>'
      : id === "trigonometry" ? '<div class="form-row"><label for="calc-function">Function</label><select id="calc-function"><option value="sin">Sine</option><option value="cos">Cosine</option><option value="tan">Tangent</option></select></div><div class="form-row"><label for="calc-unit">Angle unit</label><select id="calc-unit"><option value="degrees">Degrees</option><option value="radians">Radians</option></select></div>'
      : id === "inverse-trigonometry" ? '<div class="form-row"><label for="calc-function">Function</label><select id="calc-function"><option value="asin">Inverse sine (arcsine)</option><option value="acos">Inverse cosine (arccosine)</option><option value="atan">Inverse tangent (arctangent)</option></select></div>'
      : id === "complex-numbers" ? '<div class="form-row"><label for="calc-operation">Operation</label><select id="calc-operation"><option value="add">Add</option><option value="subtract">Subtract</option><option value="multiply">Multiply</option><option value="divide">Divide</option></select></div>'
      : "";
    const relatedLinks = api.definitions.filter(function (item) { return item.group === def.group && item.id !== id; }).slice(0, 4).map(function (item) {
      return '<a class="category-card" href="#/calculator/' + item.id + '"><span class="category-icon">' + icon("calculator") + '</span><h3>' + escapeHtml(item.name) + '</h3><p>' + escapeHtml(item.description) + '</p><span class="card-arrow" aria-hidden="true">↗</span></a>';
    }).join("");
    const fieldHelp = {
      a:"Coefficient of the highest-power term or first variable, as defined by this formula.",
      b:"Coefficient of the next term or second variable, as defined by this formula.",
      c:"Constant term or third coefficient, as defined by this formula.",
      angle:"Enter an angle in the unit stated beside the field. Check whether the model assumes degrees or radians.",
      gravity:"Gravitational field strength; near Earth's surface a commonly used approximation is 9.81 m/s².",
      mass:"Enter mass in the unit shown. Mass is not the same physical quantity as weight (force).",
      time:"Enter a positive elapsed time unless the formula explicitly permits zero.",
      distance:"Use the distance or separation defined by the formula and enter it in the displayed unit.",
      volume:"Use the volume unit displayed; for concentration, use final solution volume when specified.",
      temperature:"Use absolute temperature in kelvin when required by a gas law; temperature differences may be expressed in K or °C.",
      pressure:"Use absolute pressure for gas laws, not gauge pressure.",
      frequency:"Frequency is cycles per second (Hz).",
      wavelength:"Wavelength is the distance between equivalent points on adjacent waves.",
      resistance:"Resistance is measured in ohms (Ω); ideal zero-ohm cases may represent a short circuit.",
      focalLength:"Use the signed focal length convention stated below; a zero focal length is not valid for the thin-lens equation.",
      objectDistance:"Use the object distance under the sign convention stated in the limitations.",
      imageDistance:"Use signed image distance; sign affects whether the image is real or virtual under the chosen convention.",
      initialVelocity:"Signed initial velocity along the selected one-dimensional axis.",
      finalVelocity:"Signed final velocity along the same axis as initial velocity.",
      acceleration:"Acceleration is the rate of change of velocity; use m/s² and preserve the sign.",
      force:"Use the force magnitude or signed force as specified by the label and formula.",
      current:"Electric current in amperes (A); signed values follow the chosen sign convention.",
      voltage:"Electric potential difference in volts (V).",
      charge1:"Electric charge in coulombs (C); the result may depend on the magnitude or sign as noted.",
      charge2:"Electric charge in coulombs (C); the result may depend on the magnitude or sign as noted.",
      moles:"Amount of substance in moles (mol), not mass.",
      molarMass:"Molar mass of the exact substance in g/mol; verify it independently from a trusted chemistry reference.",
      concentration:"Enter concentration in mol/L as stated. The pH estimate may only apply to ideal dilute strong electrolytes.",
      initialPressure:"Starting absolute pressure; do not use gauge pressure in gas-law equations.",
      finalPressure:"Final absolute pressure; do not use gauge pressure in gas-law equations."
    };
    const fields = def.fields.map(function (field) {
      const listField = ["values","weights","resistances","productConcentrations","productCoefficients","reactantConcentrations","reactantCoefficients","xValues","yValues"].includes(field[0]);
      const help = field[2] || fieldHelp[field[0]] || ("Meaning and unit: " + field[1] + ". Use the units shown and check the formula and assumptions below before calculating.");
      const tipId = "field-tip-" + field[0];
      const tip = (phase4 || phase5 || phase6 || phase7 || phase8 || phase9 || phase10 || phase11 || phase12 || phase13 || phase18)
        ? '<span class="tooltip-wrap"><button class="tooltip-trigger" type="button" aria-label="Show field help: ' + escapeHtml(field[1]) + '" aria-expanded="false" aria-controls="' + tipId + '">i</button><span class="field-tooltip" id="' + tipId + '" role="tooltip" hidden>' + escapeHtml(help) + '</span></span>'
        : "";
      if (phase11 && (field[0] === "fromUnit" || field[0] === "toUnit")) {
        const options = unitApi.unitsFor(id).map(function (unit) { return '<option value="' + escapeHtml(unit.value) + '">' + escapeHtml(unit.label) + '</option>'; }).join("");
        return '<div class="form-row"><label for="calc-' + field[0] + '">' + escapeHtml(field[1]) + '</label> ' + tip + '<select id="calc-' + field[0] + '" name="' + field[0] + '" required>' + options + '</select></div>';
      }
      return '<div class="form-row"><label for="calc-' + field[0] + '">' + escapeHtml(field[1]) + '</label> ' + tip + '<input id="calc-' + field[0] + '" name="' + field[0] + '" type="text" inputmode="' + (listField ? 'text' : 'decimal') + '" autocomplete="off" placeholder="' + escapeHtml(field[1]) + '" required></div>';
    }).join("");
    app.innerHTML = pageShell(breadcrumbs([{label:"Home",href:"#/home"},{label:"All categories",href:"#/categories"},{label:categoryName,href:"#/category/" + categoryId},{label:def.name}]) +
      '<div class="page-title-row"><div><p class="page-eyebrow">' + phaseLabel + '</p><h1>' + escapeHtml(def.name) + '</h1><p>' + escapeHtml(def.description) + '</p></div><span class="status-pill">Available</span></div>' +
      '<div class="template-page-grid"><section class="panel"><div class="panel-head"><h2>Enter values</h2><span class="status-pill">Runs in browser</span></div><div class="panel-body"><form id="calculator-form" novalidate>' + fields + extra + '<button class="button button-primary" type="submit">Calculate</button> <button class="button" type="reset">Reset</button></form><p id="calculator-error" role="alert" hidden></p></div></section>' +
      '<div><section class="panel"><div class="panel-head"><h2>Result</h2></div><div class="panel-body"><p class="output-label">Calculated result</p><p class="output-value" id="calculator-result" role="status" aria-live="polite" aria-atomic="true">Enter values and select Calculate.</p><p class="body-copy" id="calculator-result-note"></p></div></section>' +
      '<section class="panel" style="margin-top:16px"><div class="panel-head"><h2>Formula and assumptions</h2></div><div class="panel-body"><div class="explanation-list"><article><h3>Formula</h3><p id="calculator-formula">' + escapeHtml(def.formula) + '</p></article><article><h3>Worked example</h3><p>' + escapeHtml(def.example) + '</p></article><article><h3>Input guidance</h3><p>Enter finite numbers unless a field asks for a comma-separated list or integer. Invalid domains and division by zero are rejected. Results are displayed to a readable precision and are not a substitute for context-specific professional calculations.</p></article><article><h3>Limitations</h3><p>Calculations run locally in this browser. Decimal arithmetic uses JavaScript number precision; outputs are formatted for readability and may not represent arbitrary-precision decimal arithmetic.</p></article></div></div></section></div></div>' +
      '<section class="panel" style="margin-top:16px"><div class="panel-head"><h2>Related ' + (phase13 ? 'computer science' : phase12 ? 'date & time' : phase11 ? 'unit conversion' : phase10 ? 'health & fitness' : phase9 ? 'business & economics' : phase8 ? 'personal finance' : phase7 ? 'statistics & probability' : phase6 ? 'chemistry' : phase5 ? 'physics' : 'mathematics') + ' calculators</h2><a class="subtle-link" href="#/category/' + categoryId + '">' + (phase13 ? 'All Phase 13 tools' : phase12 ? 'All Phase 12 tools' : phase11 ? 'All Phase 11 tools' : phase10 ? 'All Phase 10 tools' : phase9 ? 'All Phase 9 tools' : phase8 ? 'All Phase 8 tools' : phase7 ? 'All Phase 7 tools' : phase6 ? 'All Phase 6 tools' : phase5 ? 'All Phase 5 tools' : phase4 ? 'All Phase 4 tools' : 'All Phase 3 tools') + '</a></div><div class="panel-body"><div class="category-grid">' + relatedLinks + '</div></div></section>');
    const form = document.getElementById("calculator-form");
    form.addEventListener("click", function (event) {
      const trigger = event.target.closest(".tooltip-trigger");
      if (!trigger) return;
      const target = document.getElementById(trigger.getAttribute("aria-controls"));
      const willOpen = target.hidden;
      form.querySelectorAll(".field-tooltip").forEach(function (tip) { tip.hidden = true; });
      form.querySelectorAll(".tooltip-trigger").forEach(function (button) { button.setAttribute("aria-expanded", "false"); });
      target.hidden = !willOpen;
      trigger.setAttribute("aria-expanded", String(willOpen));
    });
    form.addEventListener("keydown", function (event) {
      if (event.key !== "Escape") return;
      const openTip = form.querySelector(".field-tooltip:not([hidden])");
      if (!openTip) return;
      openTip.hidden = true;
      const trigger = form.querySelector('[aria-controls="' + openTip.id + '"]');
      if (trigger) { trigger.setAttribute("aria-expanded", "false"); trigger.focus(); }
    });
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const values = {};
      def.fields.forEach(function (field) { values[field[0]] = document.getElementById("calc-" + field[0]).value; });
      const op = document.getElementById("calc-operation");
      const mode = document.getElementById("calc-mode");
      if (op) values.operation = op.value;
      if (mode) values.mode = mode.value;
      const fn = document.getElementById("calc-function");
      const unit = document.getElementById("calc-unit");
      if (fn) values.fn = fn.value;
      if (unit) values.unit = unit.value;
      const sex = document.getElementById("calc-sex");
      if (sex) values.sex = sex.value;
      const error = document.getElementById("calculator-error");
      try {
        const output = api.calculate(id, values);
        document.getElementById("calculator-result").textContent = output.result;
        document.getElementById("calculator-formula").textContent = output.formula;
        document.getElementById("calculator-result-note").textContent = output.note || "";
        error.hidden = true;
        error.textContent = "";
      } catch (e) {
        error.textContent = e.message || "Please check the entered values.";
        error.hidden = false;
        document.getElementById("calculator-result").textContent = "No result";
        document.getElementById("calculator-result-note").textContent = "";
      }
    });
    form.addEventListener("reset", function () {
      document.getElementById("calculator-result").textContent = "Enter values and select Calculate.";
      document.getElementById("calculator-result-note").textContent = "";
      document.getElementById("calculator-error").hidden = true;
    });
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
    else if (routeName === "calculator") renderCalculator(path[1] || "");
    else if (routeName === "about") renderAbout();
    else if (routeName === "contact") renderContact();
    else renderNotFound();
    if (routeName === "calculator") {
      const computerScienceDefinition = window.AllRoundComputerScienceCalculations && window.AllRoundComputerScienceCalculations.definitions.find(function (item) { return item.id === path[1]; });
      const dateTimeDefinition = window.AllRoundDateTimeCalculations && window.AllRoundDateTimeCalculations.definitions.find(function (item) { return item.id === path[1]; });
      const unitDefinition = window.AllRoundUnitConverters && window.AllRoundUnitConverters.definitions.find(function (item) { return item.id === path[1]; });
      const basicDefinition = window.AllRoundCalculations && window.AllRoundCalculations.definitions.find(function (item) { return item.id === path[1]; });
      const advancedDefinition = window.AllRoundAdvancedCalculations && window.AllRoundAdvancedCalculations.definitions.find(function (item) { return item.id === path[1]; });
      const physicsDefinition = window.AllRoundPhysicsCalculations && window.AllRoundPhysicsCalculations.definitions.find(function (item) { return item.id === path[1]; });
      const chemistryDefinition = window.AllRoundChemistryCalculations && window.AllRoundChemistryCalculations.definitions.find(function (item) { return item.id === path[1]; });
      const statisticsDefinition = window.AllRoundStatisticsCalculations && window.AllRoundStatisticsCalculations.definitions.find(function (item) { return item.id === path[1]; });
      document.title = ((computerScienceDefinition || dateTimeDefinition || unitDefinition || statisticsDefinition || chemistryDefinition || physicsDefinition || advancedDefinition || basicDefinition || {}).name || "Calculator") + " — AllRoundCalc";
    } else {
      document.title = routeName === "home" ? "AllRoundCalc — Every calculation. One place." :
        routeName === "category" ? ((categories.find(function (item) { return item.id === path[1]; }) || {}).name || "Category") + " — AllRoundCalc" :
        ({ categories:"All categories", "calculator-preview":"Calculator layout preview", about:"About AllRoundCalc", contact:"Contact AllRoundCalc" }[routeName] || "Page not found") + " — AllRoundCalc";
    }
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
