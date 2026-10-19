const { test, expect } = require("@playwright/test");

test("home page renders with key landmarks and project honesty notice", async ({ page }) => {
  const response = await page.goto("/");
  expect(response.status()).toBe(200);
  await expect(page.getByRole("heading", { name: /Every calculation/i })).toBeVisible();
  await expect(page.getByRole("searchbox", { name: /Search categories/i })).toBeVisible();
  await expect(page.getByText(/The library is being built/i)).toBeVisible();
  await expect(page.locator(".header-actions").getByRole("link", { name: "Contact us" })).toBeVisible();
});

test("all category page contains sixteen categories and filters by query", async ({ page }) => {
  await page.goto("/#/categories");
  await expect(page.getByRole("heading", { name: "Explore all categories" })).toBeVisible();
  await expect(page.locator("#all-category-grid .category-card")).toHaveCount(16);
  await page.getByRole("searchbox", { name: "Filter categories" }).fill("physics");
  await expect(page.locator("#all-category-grid .category-card")).toHaveCount(1);
  await expect(page.getByRole("link", { name: /Physics/ })).toBeVisible();
});

test("category links open the corresponding category page", async ({ page }) => {
  await page.goto("/#/categories");
  await page.getByRole("link", { name: /Explore Unit Converters/ }).click();
  await expect(page.getByRole("heading", { name: "Unit Converters" })).toBeVisible();
  await expect(page.getByText(/In development/i)).toBeVisible();
});

test("sidebar opens, supports keyboard dismissal, and returns focus", async ({ page }) => {
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Open navigation menu" });
  await menu.click();
  await expect(page.getByRole("navigation", { name: "Calculator categories" })).toBeVisible();
  await expect(page.locator(".site-drawer").getByRole("button", { name: "Close navigation menu" })).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(drawerContactLink(page)).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.locator(".site-drawer").getByRole("button", { name: "Close navigation menu" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("navigation", { name: "Calculator categories" })).toBeHidden();
  await expect(page.getByRole("button", { name: "Open navigation menu" })).toBeFocused();
});

function drawerContactLink(page) { return page.locator(".site-drawer").getByRole("link", { name: "Contact us" }); }

test("skip link supports keyboard navigation to main content", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main")).toBeFocused();
});

test("header search navigates to filtered category results", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Open search" }).click();
  await page.getByRole("searchbox", { name: "Search calculator categories" }).fill("finance");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#\/categories\?q=finance/);
  await expect(page.getByRole("link", { name: /Personal Finance/ })).toBeVisible();
});

test("calculator preview controls remain disabled and do not imply a live result", async ({ page }) => {
  await page.goto("/#/calculator-preview");
  await expect(page.getByRole("heading", { name: "Calculator page template" })).toBeVisible();
  await expect(page.getByRole("button", { name: /Calculate.*not active/ })).toBeDisabled();
  await expect(page.getByText(/Not a working calculator/i)).toBeVisible();
});

test("contact page clearly states that delivery is not configured", async ({ page }) => {
  await page.goto("/#/contact");
  await expect(page.getByRole("heading", { name: "Contact channel not configured yet" })).toBeVisible();
  await expect(page.getByText(/does not collect or transmit any personal details/i)).toBeVisible();
});

test("no horizontal page overflow at the current device viewport", async ({ page }) => {
  await page.goto("/");
  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    document: document.documentElement.scrollWidth
  }));
  expect(dimensions.document).toBeLessThanOrEqual(dimensions.viewport);
});

test("no uncaught page errors while navigating primary views", async ({ page }) => {
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  for (const path of ["/#/home", "/#/categories", "/#/category/physics", "/#/calculator-preview", "/#/about", "/#/contact"]) {
    await page.goto(path);
    await expect(page.locator("main")).toBeVisible();
  }
  expect(errors).toEqual([]);
});

test("primary pages have no automated WCAG 2.1 A/AA violations", async ({ page }) => {
  const AxeBuilder = require("@axe-core/playwright").default;
  for (const route of ["/#/home", "/#/categories", "/#/category/physics", "/#/calculator-preview", "/#/about", "/#/contact"]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(results.violations, route + " accessibility violations: " + JSON.stringify(results.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => n.target) }))))
      .toEqual([]);
  }
});


test("Phase 3 mathematics category lists working calculator tools", async ({ page }) => {
  await page.goto("/#/category/basic-mathematics");
  await expect(page.getByRole("heading", { name: "Basic & Everyday Mathematics" })).toBeVisible();
  await expect(page.getByText("28 calculators")).toBeVisible();
  await expect(page.getByRole("link", { name: /Percentage Calculator/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Prime Factorization/ })).toBeVisible();
});

test("Phase 3 arithmetic calculator calculates and explains the formula", async ({ page }) => {
  await page.goto("/#/calculator/basic-arithmetic");
  await page.getByRole("textbox", { name: "First number" }).fill("12");
  await page.getByRole("textbox", { name: "Second number" }).fill("5");
  await page.getByLabel("Operation").selectOption("multiply");
  await page.getByRole("button", { name: "Calculate" }).click();
  await expect(page.locator("#calculator-result")).toHaveText("60");
  await expect(page.locator("#calculator-formula")).toHaveText("a × b");
});

test("Phase 3 rejects division by zero without displaying a numeric result", async ({ page }) => {
  await page.goto("/#/calculator/basic-arithmetic");
  await page.getByRole("textbox", { name: "First number" }).fill("12");
  await page.getByRole("textbox", { name: "Second number" }).fill("0");
  await page.getByLabel("Operation").selectOption("divide");
  await page.getByRole("button", { name: "Calculate" }).click();
  await expect(page.getByRole("alert")).toHaveText("Division by zero is undefined.");
  await expect(page.locator("#calculator-result")).toHaveText("No result");
});

test("Phase 3 percentage calculator shows its computed value", async ({ page }) => {
  await page.goto("/#/calculator/percentage");
  await page.getByRole("textbox", { name: "Base value" }).fill("800");
  await page.getByRole("textbox", { name: "Percentage (%)" }).fill("15");
  await page.getByRole("button", { name: "Calculate" }).click();
  await expect(page.locator("#calculator-result")).toHaveText("120");
});

test("Phase 4 advanced mathematics category lists all reviewed calculator definitions", async ({ page }) => {
  await page.goto("/#/category/advanced-mathematics");
  await expect(page.getByRole("heading", { name: "Advanced Mathematics" })).toBeVisible();
  await expect(page.getByText("18 calculators")).toBeVisible();
  await expect(page.getByRole("link", { name: /Quadratic Equation Solver/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Polynomial Definite Integral/ })).toBeVisible();
});

test("Phase 4 quadratic solver handles two real roots and explains discriminant", async ({ page }) => {
  await page.goto("/#/calculator/quadratic-equation");
  await page.getByRole("textbox", { name: "Coefficient a" }).fill("1");
  await page.getByRole("textbox", { name: "Coefficient b" }).fill("-3");
  await page.getByRole("textbox", { name: "Coefficient c" }).fill("2");
  await page.getByRole("button", { name: "Calculate" }).click();
  await expect(page.locator("#calculator-result")).toHaveText("Discriminant: 1; roots: 2, 1");
  await expect(page.locator("#calculator-formula")).toContainText("D = b² − 4ac");
});

test("Phase 4 logarithm checks valid arguments and base", async ({ page }) => {
  await page.goto("/#/calculator/logarithm");
  await page.getByRole("textbox", { name: "Positive argument x" }).fill("1000");
  await page.getByRole("textbox", { name: "Logarithm base b" }).fill("10");
  await page.getByRole("button", { name: "Calculate" }).click();
  await expect(page.locator("#calculator-result")).toHaveText("log base 10 of 1000 = 3");
  await page.getByRole("textbox", { name: "Logarithm base b" }).fill("1");
  await page.getByRole("button", { name: "Calculate" }).click();
  await expect(page.getByRole("alert")).toContainText("base must be positive and not equal to one");
});

test("Phase 4 trigonometry function and angle-unit controls calculate correctly", async ({ page }) => {
  await page.goto("/#/calculator/trigonometry");
  await page.getByLabel("Angle", { exact: true }).fill("30");
  await page.getByLabel("Function").selectOption("sin");
  await page.getByLabel("Angle unit").selectOption("degrees");
  await page.getByRole("button", { name: "Calculate" }).click();
  await expect(page.locator("#calculator-result")).toHaveText("sin(30°) = 0.5");
});

test("Phase 4 polynomial integration evaluates a definite integral", async ({ page }) => {
  await page.goto("/#/calculator/polynomial-integral");
  await page.getByRole("textbox", { name: "Polynomial coefficients (comma-separated, highest power first)" }).fill("1,0,0");
  await page.getByRole("textbox", { name: "Lower bound a" }).fill("0");
  await page.getByRole("textbox", { name: "Upper bound b" }).fill("3");
  await page.getByRole("button", { name: "Calculate" }).click();
  await expect(page.locator("#calculator-result")).toHaveText("Definite integral: 9");
});

test("Phase 4 calculator form remains keyboard operable", async ({ page }) => {
  await page.goto("/#/calculator/quadratic-equation");
  const a = page.getByLabel("Coefficient a");
  await a.focus();
  await page.keyboard.type("1");
  await page.keyboard.press("Tab");
  await page.keyboard.type("-3");
  await page.keyboard.press("Tab");
  await page.keyboard.type("2");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("button", { name: "Calculate" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#calculator-result")).toHaveText("Discriminant: 1; roots: 2, 1");
  await expect(page.locator("#calculator-formula")).toContainText("D = b² − 4ac");
});

test("Phase 4 calculator pages expose live results and pass automated WCAG 2.1 A/AA checks", async ({ page }) => {
  const AxeBuilder = require("@axe-core/playwright").default;
  const calculatorIds = [
    "linear-equation", "quadratic-equation", "linear-system-2x2", "logarithm",
    "exponential-equation", "trigonometry", "inverse-trigonometry", "angle-converter",
    "slope", "distance-midpoint", "circle", "arithmetic-sequence", "geometric-sequence",
    "polynomial-derivative", "polynomial-integral", "complex-numbers", "matrix-2x2", "vectors-2d"
  ];
  for (const id of calculatorIds) {
    const route = "/#/calculator/" + id;
    await page.goto(route);
    await expect(page.locator("#calculator-form")).toBeVisible();
    await expect(page.locator("#calculator-result")).toHaveAttribute("role", "status");
    await expect(page).toHaveTitle(/— AllRoundCalc$/);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(results.violations, route + " accessibility violations: " + JSON.stringify(results.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => n.target) }))))
      .toEqual([]);
  }
});

test("Phase 5 Physics category lists all 29 implemented calculators", async ({ page }) => {
  await page.goto("/#/category/physics");
  await expect(page.getByRole("heading", { name: "Physics", exact: true })).toBeVisible();
  await expect(page.getByText("29 calculators")).toBeVisible();
  await expect(page.getByRole("link", { name: /Speed from Distance and Time/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Ohm's Law/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Wave Speed/ })).toBeVisible();
});

test("Phase 5 speed calculator calculates, validates, and resets", async ({ page }) => {
  await page.goto("/#/calculator/speed-distance-time");
  await expect(page).toHaveTitle(/Speed from Distance and Time — AllRoundCalc$/);
  await page.getByRole("textbox", { name: "Distance (m)" }).fill("150");
  await page.getByRole("textbox", { name: "Elapsed time (s)" }).fill("10");
  await page.getByRole("button", { name: "Calculate" }).click();
  await expect(page.locator("#calculator-result")).toHaveText("Average speed: 15 m/s");
  await page.getByRole("textbox", { name: "Elapsed time (s)" }).fill("0");
  await page.getByRole("button", { name: "Calculate" }).click();
  await expect(page.getByRole("alert")).toContainText("Elapsed time must be greater than zero");
  await page.getByRole("button", { name: "Reset" }).click();
  await expect(page.locator("#calculator-result")).toHaveText("Enter values and select Calculate.");
});

test("Phase 5 Ohm's law calculator calculates voltage and shows its assumption", async ({ page }) => {
  await page.goto("/#/calculator/ohms-law");
  await page.getByRole("textbox", { name: "Current (A)" }).fill("2");
  await page.getByRole("textbox", { name: "Resistance (Ω)" }).fill("6");
  await page.getByRole("button", { name: "Calculate" }).click();
  await expect(page.locator("#calculator-result")).toHaveText("Voltage: 12 V");
  await expect(page.locator("#calculator-result-note")).toContainText("Ohm's law applies to ohmic behavior");
});

test("all Phase 5 physics calculator routes pass automated WCAG 2.1 A/AA checks", async ({ page }) => {
  const AxeBuilder = require("@axe-core/playwright").default;
  const ids = [
    "speed-distance-time", "acceleration", "kinematic-displacement", "newtons-second-law",
    "weight", "momentum", "kinetic-energy", "gravitational-potential-energy", "mechanical-work",
    "mechanical-power", "density", "pressure", "ohms-law", "electrical-power", "wave-speed", "spring-force",
    "projectile-range", "projectile-flight-time", "projectile-max-height", "impulse", "spring-potential-energy",
    "gravitation-force", "coulomb-force", "resistance-series", "resistance-parallel", "heat-energy",
    "thermal-expansion", "thin-lens-image-distance", "lens-magnification"
  ];
  for (const id of ids) {
    const route = "/#/calculator/" + id;
    await page.goto(route);
    await expect(page.locator("#calculator-form")).toBeVisible();
    await expect(page.locator("#calculator-result")).toHaveAttribute("role", "status");
    await expect(page).toHaveTitle(/— AllRoundCalc$/);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(results.violations, route + " accessibility violations: " + JSON.stringify(results.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => n.target) }))))
      .toEqual([]);
  }
});

test("Phase 5 projectile and lens calculators handle standard reference examples", async ({ page }) => {
  await page.goto("/#/calculator/projectile-flight-time");
  await page.getByRole("textbox", { name: "Launch speed (m/s)" }).fill("20");
  await page.getByRole("textbox", { name: "Launch angle (degrees)" }).fill("30");
  await page.getByRole("textbox", { name: "Gravitational field strength g (m/s²)" }).fill("10");
  await page.getByRole("button", { name: "Calculate" }).click();
  await expect(page.locator("#calculator-result")).toHaveText("Flight time: 2 s");
  await page.goto("/#/calculator/thin-lens-image-distance");
  await page.getByRole("textbox", { name: "Signed focal length f (m)" }).fill("0.1");
  await page.getByRole("textbox", { name: "Object distance dₒ (m)" }).fill("0.3");
  await page.getByRole("button", { name: "Calculate" }).click();
  await expect(page.locator("#calculator-result")).toHaveText("Signed image distance: 0.15 m");
});

test("Phase 6 Chemistry category lists the implemented calculator catalogue", async ({ page }) => {
  await page.goto("/#/category/chemistry");
  await expect(page.getByRole("heading", { name: "Chemistry", exact: true })).toBeVisible();
  await expect(page.getByText("22 calculators")).toBeVisible();
  await expect(page.getByRole("link", { name: /Molarity of a Solution/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Ideal Gas Pressure/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Percent Yield/ })).toBeVisible();
});

test("Phase 6 dilution calculator exposes a usable field tooltip", async ({ page }) => {
  await page.goto("/#/calculator/dilution");
  await expect(page).toHaveTitle(/Solution Dilution — AllRoundCalc$/);
  const help = page.getByRole("button", { name: "Show field help: Initial concentration C₁ (mol/L)" });
  await expect(help).toBeVisible();
  await help.click();
  await expect(page.locator("#field-tip-initialConcentration")).toBeVisible();
  await page.getByRole("textbox", { name: "Initial concentration C₁ (mol/L)" }).fill("2");
  await page.getByRole("textbox", { name: "Initial volume V₁ (L)" }).fill("0.1");
  await page.getByRole("textbox", { name: "Final volume V₂ (L)" }).fill("0.5");
  await page.getByRole("button", { name: "Calculate" }).click();
  await expect(page.locator("#calculator-result")).toHaveText("Final concentration: 0.4 mol/L");
});

test("advanced calculator tooltips can be opened and dismissed by keyboard", async ({ page }) => {
  await page.goto("/#/calculator/quadratic-equation");
  const help = page.getByRole("button", { name: /Show field help: Coefficient a/ });
  await expect(help).toBeVisible();
  await help.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#field-tip-a")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator("#field-tip-a")).toBeHidden();
});
