const {test,expect}=require('@playwright/test');
test('six narrative acts and author credit load with no additional script failures',async({page})=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const responses=[];page.on('response',r=>{if(r.url().includes('/story-six-act.'))responses.push([r.url(),r.status()]);});
  await page.goto('/');
  await expect(page.locator('section.scene')).toHaveCount(6);
  await expect.poll(()=>page.evaluate(()=>window.CourtesySixActQA?.sections)).toBe(6);
  await expect(page.locator('.author-byline')).toContainText('Christopher Hayes');
  await expect(page.locator('.chapter-rail a[href^="#"]')).toHaveCount(6);
  await expect(page.locator('.mobile-chapters a')).toHaveCount(6);
  expect(responses.length).toBe(2);
  expect(responses.map(x=>x[1])).toEqual([200,200]);
  expect(errors).toEqual([]);
});
test('Act 3 makes the full-task context visible without claiming any invented cost',async({page})=>{
  await page.goto('/#useful');
  await expect(page.locator('#routeCompare')).toHaveAttribute('data-stage','first');
  await expect(page.locator('#routeCompare .follow-on').first()).toBeHidden();
  await page.locator('#pathWhole').click();
  await expect(page.locator('#routeCompare')).toHaveAttribute('data-stage','whole');
  await expect(page.locator('#routeCompare .follow-on').first()).toBeVisible();
  await expect(page.locator('#pathWhole')).toHaveAttribute('aria-pressed','true');
  await expect(page.locator('#pathExplanation')).toContainText('hypothetical');
  await page.locator('#pathFirst').click();
  await expect(page.locator('#routeCompare .follow-on').first()).toBeHidden();
  await page.locator('#evidence-useful summary').click();
  await expect(page.locator('#evidence-useful')).toContainText('not a value established');
});
test('Act 5 keeps energy and water measurements within their original study boundaries',async({page})=>{
  await page.goto('/#footprint');
  await expect(page.locator('#sourceThankYou')).toHaveAttribute('aria-pressed','true');
  await page.locator('#sourceGemini').click();
  await expect(page.locator('#sourceGemini')).toHaveAttribute('aria-pressed','true');
  await expect(page.locator('#sourceDetail')).toContainText('0.26 mL');
  await expect(page.locator('#sourceDetail')).toContainText('must not be applied');
  await expect(page.locator('#sourceDetail a')).toHaveAttribute('href','https://arxiv.org/abs/2508.15734');
  await page.locator('#sourceThankYou').click();
  await expect(page.locator('#sourceDetail')).toContainText('No water-per-reply figure');
  await expect(page.locator('.physical-unknown')).toContainText('NOT OBSERVED HERE');
});
test('Act 6 compares three completion designs and returns to the unchanged human message',async({page})=>{
  await page.goto('/#choice');
  const message=await page.locator('.ending-user-message').textContent();
  expect(message.trim()).toBe('Thank you.');
  await expect(page.locator('[data-ending="generated"]')).toHaveAttribute('aria-pressed','true');
  await page.locator('[data-ending="lightweight"]').click();
  await expect(page.locator('#endingReply')).toContainText('Acknowledged');
  await expect(page.locator('#endingInsight')).toContainText('still require processing');
  await page.locator('[data-ending="quiet"]').click();
  await expect(page.locator('#endingReply')).toContainText('No visible reply');
  await expect(page.locator('#endingInsight')).toContainText('Silence may feel abrupt');
  await expect(page.locator('.ending-user-message')).toHaveText(message);
  await expect(page.locator('#implications-title')).toBeVisible();
  await expect(page.locator('.implications')).toContainText('wealth-management dealer');
  await page.locator('#evidence-choice summary').click();
  await expect(page.locator('#evidence-choice')).toContainText('do not compare these three interface endings');
});
test('legacy act anchors map to their six-act counterparts while detailed energy tools remain archived',async({page})=>{
  for(const [from,to] of [['#act-3','#useful'],['#act-5','#footprint'],['#act-6','#choice']]){
    await page.goto('/'+from);
    await expect(page).toHaveURL(new RegExp(to.replace('#','\\#')+'$'));
    await expect(page.locator(to)).toBeAttached();
  }
  await page.goto('/#language-energy-matrix');
  await expect(page).toHaveURL(/\/archive\/v1\.5\.1\/#language-energy-matrix$/);
  await expect(page.locator('#maEnergyTable .ma-cell')).toHaveCount(36);
});
test('mobile reader can navigate to all six chapters without page horizontal overflow',async({page,isMobile})=>{
  await page.goto('/');
  if(isMobile){
    await expect(page.locator('.mobile-chapters')).toBeVisible();
    await page.locator('.mobile-chapters a[href="#footprint"]').click();
    await expect(page).toHaveURL(/#footprint$/);
    await expect(page.locator('#sourceGemini')).toBeVisible();
    const viewport=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,window:innerWidth}));
    expect(viewport.scroll).toBeLessThanOrEqual(viewport.window+2);
  }
});
