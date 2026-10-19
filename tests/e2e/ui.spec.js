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
  await page.getByLabel("First number").fill("12");
  await page.getByLabel("Second number").fill("5");
  await page.getByLabel("Operation").selectOption("multiply");
  await page.getByRole("button", { name: "Calculate" }).click();
  await expect(page.locator("#calculator-result")).toHaveText("60");
  await expect(page.locator("#calculator-formula")).toHaveText("a × b");
});

test("Phase 3 rejects division by zero without displaying a numeric result", async ({ page }) => {
  await page.goto("/#/calculator/basic-arithmetic");
  await page.getByLabel("First number").fill("12");
  await page.getByLabel("Second number").fill("0");
  await page.getByLabel("Operation").selectOption("divide");
  await page.getByRole("button", { name: "Calculate" }).click();
  await expect(page.getByRole("alert")).toHaveText("Division by zero is undefined.");
  await expect(page.locator("#calculator-result")).toHaveText("No result");
});

test("Phase 3 percentage calculator shows its computed value", async ({ page }) => {
  await page.goto("/#/calculator/percentage");
  await page.getByLabel("Base value").fill("800");
  await page.getByLabel("Percentage (%)").fill("15");
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
  await page.getByLabel("Coefficient a").fill("1");
  await page.getByLabel("Coefficient b").fill("-3");
  await page.getByLabel("Coefficient c").fill("2");
  await page.getByRole("button", { name: "Calculate" }).click();
  await expect(page.locator("#calculator-result")).toHaveText("Discriminant: 1; roots: 2, 1");
  await expect(page.locator("#calculator-formula")).toContainText("D = b² − 4ac");
});

test("Phase 4 logarithm checks valid arguments and base", async ({ page }) => {
  await page.goto("/#/calculator/logarithm");
  await page.getByLabel("Positive argument x").fill("1000");
  await page.getByLabel("Logarithm base b").fill("10");
  await page.getByRole("button", { name: "Calculate" }).click();
  await expect(page.locator("#calculator-result")).toHaveText("log base 10 of 1000 = 3");
  await page.getByLabel("Logarithm base b").fill("1");
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
  await page.getByLabel("Polynomial coefficients (comma-separated, highest power first)").fill("1,0,0");
  await page.getByLabel("Lower bound a").fill("0");
  await page.getByLabel("Upper bound b").fill("3");
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
