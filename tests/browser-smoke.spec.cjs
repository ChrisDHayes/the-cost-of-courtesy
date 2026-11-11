const { test, expect } = require('@playwright/test');

// Regression coverage for self-contained, source-linked evidence instruments.
test('starts without uncaught browser errors and retains the research narrative', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('/');
  await expect(page).toHaveTitle(/The Cost of Courtesy/);
  await expect(page.locator('#exploreMode')).toBeVisible();
  await expect(page.locator('#guidedMode')).toHaveAttribute('aria-pressed', 'true');
  await expect.poll(() => page.evaluate(() => window.CourtesyLanguage122?.rows)).toBe(122);
  expect(errors).toEqual([]);
});

test('external courtesy-matrix anchor opens Explore and both tone dimensions work', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('/#courtesy-response-matrix');
  await expect(page.locator('html')).toHaveClass(/explore/);
  await expect(page.locator('#courtesy-response-matrix')).toBeVisible();
  await expect(page.locator('#maToneTable .ma-cell')).toHaveCount(15);
  await expect(page.locator('#maToneSetting option')).toHaveCount(5);
  await page.locator('#maToneTable .ma-cell').first().click();
  await expect(page.locator('#maToneDetail')).toContainText('Table IV');
  await page.locator('#maToneView').selectOption('history');
  await expect(page.locator('#maToneSetting option')).toHaveCount(3);
  await page.locator('#maToneSetting').selectOption('POL');
  await expect(page.locator('#maToneTable .ma-cell').first()).toHaveText('0.631');
  await page.locator('#maToneTable .ma-cell').first().focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#maToneDetail')).toContainText('Table V');
  expect(errors).toEqual([]);
});

test('cross-model energy matrix has exact coverage and flags the censored observation', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('/#language-energy-matrix');
  await expect(page.locator('html')).toHaveClass(/explore/);
  await expect(page.locator('#language-energy-matrix')).toBeVisible();
  await expect(page.locator('#maEnergyTable .ma-cell')).toHaveCount(36);
  await expect(page.locator('#maEnergyTable .ma-cell[data-censored="true"]')).toHaveCount(1);
  await page.locator('#maEnergyTable .ma-cell[data-censored="true"]').click();
  await expect(page.locator('#maEnergyDetail')).toContainText('Source-censored');
  await page.locator('#maEnergyMetric').selectOption('absolute');
  await page.locator('#maEnergyOrder').selectOption('name');
  await expect(page.locator('#maEnergyTable tbody tr').first()).toContainText('Chinese (Simplified)');
  expect(errors).toEqual([]);
});

test('full 122-language evidence is preserved and all bubbles have unique positions', async ({ page }) => {
  await page.goto('/#language-distribution');
  await expect(page.locator('#language-distribution')).toBeVisible();
  await expect(page.locator('#ldLanguageSelect option')).toHaveCount(122);
  await expect(page.locator('#ldEnergyChart .ld-dot')).toHaveCount(122);
  const check = await page.evaluate(() => {
    const src = window.CourtesyLanguage122.stage();
    const doc = new DOMParser().parseFromString(src, 'text/html');
    const circles = [...doc.querySelectorAll('circle')];
    const positions = circles.map(c => c.getAttribute('cx') + ',' + c.getAttribute('cy'));
    return { rows: window.CourtesyLanguage122.rows, total: circles.length, unique: new Set(positions).size, saysAll: src.includes('122 / 122') };
  });
  expect(check).toEqual({ rows: 122, total: 122, unique: 122, saysAll: true });
});

test('links work after switching modes, and appearance toggle remains functional', async ({ page }) => {
  await page.goto('/');
  await page.locator('#exploreMode').click();
  await expect(page.locator('#research-lab')).toBeVisible();
  await page.locator('#guidedMode').click();
  await expect(page.locator('#research-lab')).toBeHidden();
  await page.evaluate(() => { window.location.hash = '#language-energy-matrix'; });
  await expect(page.locator('#language-energy-matrix')).toBeVisible();
  const before = await page.locator('html').getAttribute('data-theme');
  await page.locator('#themeToggle').click();
  await expect(page.locator('html')).not.toHaveAttribute('data-theme', before);
});
