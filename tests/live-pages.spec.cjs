const { test, expect } = require('@playwright/test');

test('live root serves the updated experience without page errors', async ({page}) => {
  const errors=[]; page.on('pageerror',err=>errors.push(err.message));
  const response=await page.goto('./');
  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle(/The Cost of Courtesy/);
  await expect(page.locator('#exploreMode')).toBeVisible();
  await expect.poll(()=>page.evaluate(()=>window.CourtesyLanguage122?.rows)).toBe(122);
  expect(errors).toEqual([]);
});

test('live courtesy matrix deep link opens Explore and responds to controls', async ({page}) => {
  const errors=[]; page.on('pageerror',err=>errors.push(err.message));
  const response=await page.goto('./#courtesy-response-matrix');
  expect(response?.status()).toBe(200);
  await expect(page.locator('html')).toHaveClass(/explore/);
  await expect(page.locator('#courtesy-response-matrix')).toBeVisible();
  await expect(page.locator('#maToneTable .ma-cell')).toHaveCount(15);
  await page.locator('#maToneTable .ma-cell').first().click();
  await expect(page.locator('#maToneDetail')).toContainText('Table IV');
  await page.locator('#maToneView').selectOption('history');
  await page.locator('#maToneSetting').selectOption('POL');
  await expect(page.locator('#maToneTable .ma-cell').first()).toHaveText('0.631');
  await page.locator('#maToneTable .ma-cell').first().click();
  await expect(page.locator('#maToneDetail')).toContainText('Table V');
  expect(errors).toEqual([]);
});

test('live energy matrix opens, displays all 36 source cells and censorship warning', async ({page}) => {
  const errors=[]; page.on('pageerror',err=>errors.push(err.message));
  const response=await page.goto('./#language-energy-matrix');
  expect(response?.status()).toBe(200);
  await expect(page.locator('html')).toHaveClass(/explore/);
  await expect(page.locator('#language-energy-matrix')).toBeVisible();
  await expect(page.locator('#maEnergyTable .ma-cell')).toHaveCount(36);
  await expect(page.locator('#maEnergyTable .ma-cell[data-censored="true"]')).toHaveCount(1);
  await page.locator('#maEnergyTable .ma-cell[data-censored="true"]').click();
  await expect(page.locator('#maEnergyDetail')).toContainText('Source-censored');
  await page.locator('#maEnergyOrder').selectOption('name');
  await expect(page.locator('#maEnergyTable tbody tr').first()).toContainText('Chinese (Simplified)');
  expect(errors).toEqual([]);
});

test('live 122-language atlas retains all language records and charts', async ({page}) => {
  const response=await page.goto('./#language-distribution');
  expect(response?.status()).toBe(200);
  await expect(page.locator('#language-distribution')).toBeVisible();
  await expect(page.locator('#ldLanguageSelect option')).toHaveCount(122);
  await expect(page.locator('#ldEnergyChart .ld-dot')).toHaveCount(122);
  await page.locator('#ldLanguageSelect').selectOption('zul_Latn');
  await expect(page.locator('#ldSelected')).toHaveText('Zulu');
});

test('live theme toggles without losing Guided / Explore navigation',async ({page})=>{
  await page.goto('./');
  const theme=await page.locator('html').getAttribute('data-theme');
  await page.locator('#themeToggle').click();
  await expect(page.locator('html')).not.toHaveAttribute('data-theme',theme);
  await page.locator('#exploreMode').click();
  await expect(page.locator('#research-lab')).toBeVisible();
  await page.locator('#guidedMode').click();
  await expect(page.locator('#research-lab')).toBeHidden();
});
