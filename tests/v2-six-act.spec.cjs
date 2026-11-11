const { test, expect }=require('@playwright/test');

test('six chapters form a single navigable story and retain author credit',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/');
 await expect(page.locator('main > section.scene')).toHaveCount(6);
 await expect(page.locator('.chapter-rail a[href^="#"]')).toHaveCount(6);
 await expect(page.locator('.author-byline')).toContainText('Christopher Hayes');
 await expect.poll(()=>page.evaluate(()=>window.CourtesyV2PrototypeQA?.languageRows)).toBe(122);
 await expect.poll(()=>page.evaluate(()=>typeof window.CourtesySixActQA)).toBe('object');
 expect(errors).toEqual([]);
});
test('Act 3 reveals whole-task rework without invented energy savings',async({page})=>{
 await page.goto('/#resolution');
 await expect(page.locator('#resolution-title')).toBeVisible();
 await expect(page.locator('#taskPath .task-path-row')).toHaveCount(2);
 await expect(page.locator('[data-scope="first"]')).toHaveAttribute('aria-pressed','true');
 await page.locator('[data-scope="whole"]').click();
 await expect(page.locator('[data-scope="whole"]')).toHaveAttribute('aria-pressed','true');
 await expect(page.locator('#taskPath')).toContainText('correction');
 await expect(page.locator('#taskConclusion')).toContainText('need measured resource use');
 await page.locator('[data-scope="first"]').focus();
 await page.keyboard.press('Enter');
 await expect(page.locator('[data-scope="first"]')).toHaveAttribute('aria-pressed','true');
});
test('Act 5 separates environmental measurements and keeps unknown serving location visible',async({page})=>{
 await page.goto('/#footprint');
 await expect(page.locator('#footprint-title')).toBeVisible();
 await expect(page.locator('.measure-pair')).toContainText('0.245');
 await expect(page.locator('.measure-pair')).toContainText('0.24');
 await expect(page.locator('.footprint-route')).toContainText('Serving location unknown');
 await page.locator('#footprint .evidence summary').click();
 await expect(page.locator('#footprint .evidence')).toHaveAttribute('open','');
 await expect(page.locator('#footprint .evidence')).toContainText('0.26 mL');
});
test('Act 6 lets readers compare three closure designs with no fabricated ranking',async({page})=>{
 await page.goto('/#choices');
 await expect(page.locator('#choices-title')).toBeVisible();
 await expect(page.locator('.closing-chat')).toContainText('Thank you.');
 await expect(page.locator('[data-ending]')).toHaveCount(3);
 await page.locator('[data-ending="light"]').click();
 await expect(page.locator('#endingResult')).toContainText('Light acknowledgment');
 await expect(page.locator('#endingResult')).toContainText('What we would test');
 await page.locator('[data-ending="quiet"]').click();
 await expect(page.locator('#endingResult')).toContainText('Quiet closure');
 await page.locator('#compareEndings').click();
 await expect(page.locator('#endingComparison')).toBeVisible();
 await expect(page.locator('#endingComparison > div')).toHaveCount(3);
 await page.locator('[data-ending="reply"]').focus();await page.keyboard.press('Enter');
 await expect(page.locator('[data-ending="reply"]')).toHaveAttribute('aria-pressed','true');
});
test('old six-act anchors route to newly integrated story sections',async({page})=>{
 for(const [hash,target] of [['#act-3','#resolution'],['#act-5','#footprint'],['#act-6','#choices']]){
   await page.goto('/'+hash);
   await expect(page.locator(target)).toBeVisible();
   await expect(page).toHaveURL(new RegExp(target+'$'));
 }
 const original=await page.goto('/archive/v1.5.1/#act-6');
 expect(original?.status()).toBe(200);
 await expect(page.locator('#act-6')).toBeAttached();
});
test('mobile six-act story keeps meaningful explanations and avoids page overflow',async({page,isMobile})=>{
 await page.goto('/#choices');
 await expect(page.locator('.closing-prose')).toBeVisible();
 await expect(page.locator('.closing-reflection')).toContainText('Thank you.');
 if(isMobile){
  const size=await page.evaluate(()=>({doc:document.documentElement.scrollWidth,view:innerWidth}));
  expect(size.doc).toBeLessThanOrEqual(size.view+2);
  await expect(page.locator('#choices .figure-subhead')).toBeVisible();
 }
});
