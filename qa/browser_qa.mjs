import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { extname, join, resolve, sep } from 'node:path';

const ROOT = process.cwd();
const OUT = join(ROOT, 'qa', 'results');
await mkdir(OUT, {recursive: true});
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.md':'text/markdown'};
const server = createServer(async (req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const path = resolve(ROOT, '.' + pathname.replace(/\/$/,'/index.html'));
  if (!path.startsWith(ROOT + sep)) { res.writeHead(403).end('Forbidden'); return; }
  try { const data = await readFile(path); res.writeHead(200, {'Content-Type':mime[extname(path)] || 'application/octet-stream','Cache-Control':'no-store'}); res.end(data); }
  catch { res.writeHead(404).end('Not found'); }
});
await new Promise(done => server.listen(0, '127.0.0.1', done));
const BASE = 'http://127.0.0.1:' + server.address().port + '/';
const viewportCases = [
  {name:'desktop', width:1440, height:900, mobile:false},
  {name:'large_desktop', width:1920, height:1080, mobile:false},
  {name:'tablet', width:768, height:1024, mobile:true},
  {name:'mobile_430', width:430, height:932, mobile:true},
  {name:'mobile_390', width:390, height:844, mobile:true},
  {name:'small_mobile_320', width:320, height:700, mobile:true}
];
const failures = [], checks = [];
const check = (name, ok, details='') => {
  checks.push({name, ok:Boolean(ok), details});
  if (!ok) failures.push({name, details});
};
const browser = await chromium.launch({headless:true, args:['--no-sandbox']});
const sampledText = s => (s ?? '').replace(/\s+/g,' ').slice(0,180);
try {
  for (const cfg of viewportCases) {
    const context = await browser.newContext({viewport:{width:cfg.width,height:cfg.height},isMobile:cfg.mobile,hasTouch:cfg.mobile,deviceScaleFactor:cfg.mobile?2:1, reducedMotion:'reduce'});
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push('pageerror: ' + e.message));
    page.on('console', e => { if (e.type()==='error') errors.push('console: ' + e.text()); });
    page.on('response', r => {if (r.status() >= 400 && new URL(r.url()).origin === new URL(BASE).origin) errors.push('HTTP '+r.status()+' '+r.url());});
    const prefix = cfg.name+': ';
    const goto = await page.goto(BASE, {waitUntil:'load'});
    await page.waitForTimeout(320);
    check(prefix+'local site 200', goto?.status()===200);
    check(prefix+'title', (await page.title()).includes('The Cost of Courtesy'));
    check(prefix+'edition label V1.4', (await page.locator('.wordmark .edition').textContent()).includes('1.4'));
    check(prefix+'six guided acts', await page.locator('section.story-act').count()===6);
    check(prefix+'fifteen story checkpoints', await page.locator('.story-beat').count()===15);
    check(prefix+'no initial JS errors', errors.length===0, errors.join(' | '));
    const jsData = await page.evaluate(()=>({
      version:document.title,
      nd:window.CourtesyLanguage122?.rows,
      beatCount:window.__courtesyStoryQA?.stepCount?.(),
      theme:document.documentElement.dataset.theme
    }));
    check(prefix+'full language data initialized', jsData.nd===122, JSON.stringify(jsData));
    check(prefix+'guided story engine running',jsData.beatCount===15,JSON.stringify(jsData));
    await page.screenshot({path:join(OUT,cfg.name+'_guided.png'),fullPage:false,animations:'disabled'});
    await page.locator('#exploreMode').click({timeout:8000});
    await page.waitForTimeout(150);
    check(prefix+'explore section visible', await page.locator('#language-distribution').isVisible());
    check(prefix+'all 122 languages in selector', await page.locator('#ldLanguageSelect option').count()===122);
    check(prefix+'122 energy bubbles', await page.locator('#ldEnergyChart circle.ld-dot').count()===122);
    check(prefix+'122 accuracy bubbles', await page.locator('#ldAccuracyChart circle.ld-dot').count()===122);
    check(prefix+'charts keyboard focusable', await page.locator('#language-distribution .ld-plot[tabindex="0"]').count()===2);
    if(cfg.mobile && cfg.width<750){const swipe=await page.locator('#language-distribution .ld-plot').first().evaluate(el=>getComputedStyle(el,'::before').content);check(prefix+'mobile swipe cue visible',swipe.includes('SWIPE'),swipe);}
    check(prefix+'median displays expected value', sampledText(await page.locator('#ldMedEnergy').textContent()).includes('0.132'));
    check(prefix+'mean displays expected value', sampledText(await page.locator('#ldMeanEnergy').textContent()).includes('0.173'));
    const mode = page.locator('[data-ld-mode=distance]');
    await mode.click({timeout:8000});
    check(prefix+'distance toggles accuracy off',await page.locator('#ldAccuracyPanel').isHidden());
    await page.locator('[data-ld-mode=linked]').click({timeout:8000});
    check(prefix+'linked toggles accuracy on',await page.locator('#ldAccuracyPanel').isVisible());
    await page.locator('#ldAccuracySelect').selectOption('strict');
    check(prefix+'accuracy switch works', (await page.locator('#ldAccuracyDescription').textContent()).includes('Strict'));
    await page.locator('#ldLanguageSelect').selectOption('fra_Latn');
    check(prefix+'French selected', (await page.locator('#ldSelected').textContent()).includes('French'));
    check(prefix+'French lenient', (await page.locator('#ldLenient').textContent()).includes('91.7'));
    check(prefix+'French strict', (await page.locator('#ldStrict').textContent()).includes('0.1'));
    check(prefix+'original 12-language view preserved', await page.locator('#languageSelect option').count()===12);
    const themeBefore = await page.locator('html').getAttribute('data-theme');
    await page.locator('#themeToggle').click({timeout:8000});
    const themeAfter = await page.locator('html').getAttribute('data-theme');
    check(prefix+'theme toggle',themeBefore!==themeAfter,themeBefore+' => '+themeAfter);
    await page.locator('#methodToggle').click({timeout:8000});
    check(prefix+'methods panel opens', await page.locator('#methodPanel').getAttribute('aria-hidden')==='false');
    await page.locator('#closeDrawer').click({timeout:8000}).catch(async()=>{
      const close=page.locator('#methodPanel button[aria-label="Close methods panel"]');
      await close.click({timeout:8000});
    });
    check(prefix+'methods panel closes', await page.locator('#methodPanel').getAttribute('aria-hidden')==='true');
    const width = await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,inner:window.innerWidth,body:document.body.scrollWidth,ld:document.querySelector('#language-distribution').getBoundingClientRect().width}));
    check(prefix+'no document-level horizontal overflow',width.scroll<=width.inner+12,JSON.stringify(width));
    await page.locator('#language-distribution').scrollIntoViewIfNeeded();
    await page.screenshot({path:join(OUT,cfg.name+'_language.png'),fullPage:false,animations:'disabled'});
    check(prefix+'no JS/runtime errors after interactions',errors.length===0,errors.join(' | '));
    await context.close();
  }
  // Verify deep-link behaviour in a separate clean browser context, including touch/mobile.
  for (const width of [320,390,1440]) {
    const context=await browser.newContext({viewport:{width,height:844},isMobile:width<500,hasTouch:width<500});
    const page=await context.newPage();
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.goto(BASE+'#language-distribution',{waitUntil:'load'});
    await page.waitForTimeout(350);
    check('deeplink '+width+': explore mode active',await page.locator('#exploreMode').getAttribute('aria-pressed')==='true');
    check('deeplink '+width+': target visible',await page.locator('#language-distribution').isVisible());
    check('deeplink '+width+': no errors',errors.length===0,errors.join(' | '));
    await context.close();
  }
} catch(e) { check('unhandled QA harness exception',false,e.stack || String(e)); }
finally {
 await browser.close();
 await new Promise(resolve=>server.close(resolve));
}
await writeFile(join(OUT,'qa-results.json'),JSON.stringify({timestamp:new Date().toISOString(),checks,failures},null,2));
const passed=checks.filter(x=>x.ok).length;
console.log(JSON.stringify({passed,total:checks.length,failed:failures.length,failures},null,2));
process.exitCode=failures.length?1:0;
