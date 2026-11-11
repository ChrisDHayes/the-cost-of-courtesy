const { test, expect } = require('@playwright/test');
const path='/prototypes/v2-story-first/';

test('V2 preview loads all three stories, baseline data and no runtime errors', async ({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const response=await page.goto(path);expect(response?.status()).toBe(200);
 await expect(page).toHaveTitle(/The Cost of Courtesy.*V2/);
 await expect(page.locator('.scene')).toHaveCount(3);
 await expect(page.locator('.evidence')).toHaveCount(3);
 await expect.poll(()=>page.evaluate(()=>window.CourtesyV2PrototypeQA?.languageRows)).toBe(122);
 await expect.poll(()=>page.evaluate(()=>window.CourtesyV2PrototypeQA?.modelRows)).toBe(5);
 expect(errors).toEqual([]);
});

test('opening is an interactive human moment, not a fabricated energy measurement', async({page})=>{
 await page.goto(path);
 await expect(page.getByRole('heading',{name:/Two words.*Another response/i})).toBeVisible();
 await expect(page.locator('#responseTrace')).toBeHidden();
 await page.locator('#showReply').click();
 await expect(page.locator('#responseTrace')).toBeVisible();
 await expect(page.locator('.machine-reply')).toHaveText("You're welcome.");
 await expect(page.locator('.visual-note')).toContainText('Illustrative chat scene');
 await page.locator('#showReply').click();
 await expect(page.locator('#responseTrace')).toBeHidden();
 await page.locator('#evidence-opening summary').click();
 await expect(page.locator('#evidence-opening')).toHaveAttribute('open','');
 await expect(page.locator('#evidence-opening')).toContainText('0.245 Wh');
});

test('courtesy finding expands into all 15 source-backed cells',async({page})=>{
 await page.goto(path+'#courtesy');
 await expect(page.locator('#matrixPanel')).toBeHidden();
 await page.locator('#revealMatrix').click();
 await expect(page.locator('#matrixPanel')).toBeVisible();
 await expect(page.locator('#courtesyTable .matrix-cell')).toHaveCount(15);
 const englishGpt=page.locator('#courtesyTable tbody tr:nth-child(2) td:nth-child(2) button');
 await expect(englishGpt).toHaveText('0.636');
 await englishGpt.click();
 await expect(page.locator('#courtesyDetail')).toContainText('GPT-4o mini');
 await page.locator('#toneSelect').selectOption('POP');
 await expect(englishGpt).toHaveText('0.567');
 await englishGpt.focus();await page.keyboard.press('Enter');
 await expect(page.locator('#courtesyDetail')).toContainText(/positive politeness/i);
 await page.locator('#evidence-courtesy summary').click();
 await expect(page.locator('#evidence-courtesy')).toHaveAttribute('open','');
 await page.locator('#revealMatrix').click();
 await expect(page.locator('#matrixPanel')).toBeHidden();
});

test('every language is selectable, and statistical insight is faithful',async({page})=>{
 await page.goto(path+'#uneven');
 await expect(page.locator('#languageFinder option')).toHaveCount(122);
 await expect(page.locator('#atlasGraphic .data-dot')).toHaveCount(122);
 const allPositions=await page.locator('#atlasGraphic .data-dot').evaluateAll(nodes=>nodes.map(x=>[x.getAttribute('cx'),x.getAttribute('cy')].join(',')));
 expect(new Set(allPositions).size).toBe(122);
 await expect.poll(()=>page.evaluate(()=>window.CourtesyV2PrototypeQA.sourceMean)).toBeGreaterThan(.172);
 await expect.poll(()=>page.evaluate(()=>window.CourtesyV2PrototypeQA.sourceMedian)).toBeGreaterThan(.131);
 await page.locator('[data-stage="distribution"]').click();
 await expect(page.locator('#atlasGraphic .data-dot')).toHaveCount(122);
 await expect(page.locator('#atlasAxisNote')).toContainText('MEAN');
 const minDistance=await page.locator('#atlasGraphic .data-dot').evaluateAll(nodes=>{
   const p=nodes.map(n=>({x:+n.getAttribute('cx'),y:+n.getAttribute('cy')}));
   let best=Infinity;for(let i=0;i<p.length;i++)for(let j=i+1;j<p.length;j++)best=Math.min(best,Math.hypot(p[i].x-p[j].x,p[i].y-p[j].y));
   return best;
 });
 expect(minDistance).toBeGreaterThan(10.1);
 await page.locator('[data-stage="evaluation"]').click();
 await expect(page.locator('#accuracyNote')).toBeVisible();
 await expect(page.locator('#languageName')).toHaveText('French');
 await expect(page.locator('#strictValue')).toHaveText('0.1%');
 await expect(page.locator('#lenientValue')).toHaveText('91.7%');
 await expect(page.locator('#accuracyExplanation')).toContainText('899');
 await page.locator('#languageFinder').selectOption('eng_Latn');
 await expect(page.locator('#languageName')).toHaveText('English');
});

test('theme, mobile layout and reading disclosures remain accessible',async({page,isMobile})=>{
 await page.goto(path);
 const current=await page.locator('html').getAttribute('data-theme');
 await page.locator('#themeToggle').click();
 await expect(page.locator('html')).not.toHaveAttribute('data-theme',current);
 await page.locator('#evidence-opening summary').focus();
 await page.keyboard.press('Enter');
 await expect(page.locator('#evidence-opening')).toHaveAttribute('open','');
 await expect(page.locator('#opening-title')).toBeVisible();
 if(isMobile){
   const widths=await page.evaluate(()=>({doc:document.documentElement.scrollWidth,window:innerWidth}));
   expect(widths.doc).toBeLessThanOrEqual(widths.window+2);
   const paragraphs=await page.locator('.message-narrative p').count();
   expect(paragraphs).toBeGreaterThan(2);
 }
});
