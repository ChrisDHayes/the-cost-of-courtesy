const {test,expect}=require('@playwright/test');

test('six-act editorial reading path retains progressive evidence and byline',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/');
 const anchors=['opening','courtesy','useful','uneven','footprint','choice'];
 for(const id of anchors)await expect(page.locator('section.scene#'+id)).toBeAttached();
 await expect(page.locator('.author-byline')).toContainText('Christopher Hayes');
 await expect(page.locator('#evidence-useful')).not.toHaveAttribute('open','');
 await expect(page.locator('#evidence-footprint')).not.toHaveAttribute('open','');
 await expect(page.locator('#evidence-choice')).not.toHaveAttribute('open','');
 await expect(page.locator('.ending-user-message')).toContainText('Thank you.');
 await expect(page.locator('#implications-title')).toBeAttached();
 expect(errors).toEqual([]);
});

test('source boundaries are explained when evidence is deliberately opened',async({page})=>{
 await page.goto('/#footprint');
 await page.locator('#evidence-footprint summary').click();
 await expect(page.locator('#evidence-footprint')).toHaveAttribute('open','');
 await expect(page.locator('#evidence-footprint')).toContainText('0.26');
 await page.locator('#sourceGemini').click();
 await expect(page.locator('#sourceDetail')).toContainText('must not be applied');
 await page.goto('/#choice');
 await page.locator('#evidence-choice summary').click();
 await expect(page.locator('#evidence-choice')).toContainText('do not compare these three interface endings');
 await expect(page.locator('.implications')).toContainText('not a finding about any particular firm');
});

test('narrow-phone story has visible navigation and readable content',async({page})=>{
 for(const width of [360,390,430]){
   await page.setViewportSize({width,height:780});
   await page.goto('/');
   await expect(page.locator('.author-byline')).toBeAttached();
   await expect(page.locator('.mobile-chapters')).toBeVisible();
   const dims=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,viewport:window.innerWidth}));
   expect(dims.scroll, 'Overflow at '+width).toBeLessThanOrEqual(dims.viewport+2);
   await page.locator('.mobile-chapters a[href="#choice"]').click();
   await expect(page.locator('#choice')).toBeInViewport({ratio:0.05});
   await expect(page.locator('#endingReply')).toBeVisible();
 }
});
