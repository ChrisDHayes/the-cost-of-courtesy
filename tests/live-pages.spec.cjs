const { test, expect }=require('@playwright/test');

test('live story-first homepage responds, credits Christopher Hayes and loads complete language data',async({page})=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const response=await page.goto('./');
  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle(/The Cost of Courtesy.*Christopher Hayes/);
  await expect(page.locator('meta[name="author"]')).toHaveAttribute('content','Christopher Hayes');
  await expect(page.locator('.author-byline')).toContainText('Christopher Hayes, CDAIO');
  await expect(page.locator('#implications-title')).toBeVisible();
  await expect(page.locator('.implications')).toContainText('Data & AI leaders');
  await expect(page.locator('.implications')).toContainText('wealth-management dealer');
  await expect.poll(()=>page.evaluate(()=>window.CourtesyV2PrototypeQA?.languageRows)).toBe(122);
  expect(errors).toEqual([]);
});

test('live response vignette and evidence disclosure remain interactive',async({page})=>{
  await page.goto('./#opening');
  await expect(page.locator('#responseTrace')).toBeHidden();
  await page.locator('#showReply').click();
  await expect(page.locator('#responseTrace')).toBeVisible();
  await expect(page.locator('.machine-reply')).toContainText("You're welcome.");
  await page.locator('#evidence-opening summary').click();
  await expect(page.locator('#evidence-opening')).toHaveAttribute('open','');
});

test('old article courtesy link opens live source-backed matrix',async({page})=>{
  await page.goto('./#courtesy-response-matrix');
  await expect(page.locator('#matrixPanel')).toBeVisible();
  await expect(page.locator('#courtesyTable .matrix-cell')).toHaveCount(15);
  const englishGpt=page.locator('#courtesyTable tbody tr:nth-child(2) td:nth-child(2) button');
  await expect(englishGpt).toHaveText('0.636');
  await page.locator('#toneSelect').selectOption('POP');
  await expect(englishGpt).toHaveText('0.567');
  await englishGpt.click();
  await expect(page.locator('#courtesyDetail')).toContainText('GPT-4o mini');
});

test('old article language link opens live 122-record distribution',async({page})=>{
  await page.goto('./#language-distribution');
  await expect(page.locator('#atlasGraphic .data-dot')).toHaveCount(122);
  await expect(page.locator('#atlasAxisNote')).toContainText('MEAN');
  await page.locator('#languageFinder').selectOption('fra_Latn');
  await expect(page.locator('#languageName')).toHaveText('French');
});

test('old energy link routes into preserved full six-act research matrix',async({page})=>{
  await page.goto('./#language-energy-matrix');
  await expect(page).toHaveURL(/\/archive\/v1\.5\.1\/#language-energy-matrix$/);
  await expect(page.locator('#maEnergyTable .ma-cell')).toHaveCount(36);
  await expect(page.locator('#maEnergyTable .ma-cell[data-censored="true"]')).toHaveCount(1);
});

test('complete archive works independently and retains author',async({page})=>{
  const r=await page.goto('./archive/v1.5.1/');
  expect(r?.status()).toBe(200);
  await expect(page.locator('#act-1')).toBeAttached();
  await expect(page.locator('#act-6')).toBeAttached();
  await expect(page.locator('#courtesy-response-matrix')).toBeAttached();
  await expect(page.getByText('Christopher Hayes, CDAIO').first()).toBeAttached();
});

test('mobile story remains usable with theme control and no page-level overflow',async({page,isMobile})=>{
  await page.goto('./');
  const before=await page.locator('html').getAttribute('data-theme');
  await page.locator('#themeToggle').click();
  await expect(page.locator('html')).not.toHaveAttribute('data-theme',before);
  if(isMobile){
    const sizes=await page.evaluate(()=>({full:document.documentElement.scrollWidth,view:innerWidth}));
    expect(sizes.full).toBeLessThanOrEqual(sizes.view+2);
    await expect(page.locator('.mobile-research-link')).toBeVisible();
  }
});
