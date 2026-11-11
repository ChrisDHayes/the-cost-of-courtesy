const {chromium}=require('@playwright/test');
const fs=require('fs');
(async()=>{
 const launch={headless:true,...(process.env.CHROME_BINARY?{executablePath:process.env.CHROME_BINARY}:{})};
 const browser=await chromium.launch(launch);
 fs.mkdirSync('design-review-six-act',{recursive:true});
 const cases=[{name:'desktop',width:1440,height:900,isMobile:false},{name:'mobile',width:390,height:844,isMobile:true}];
 for(const cfg of cases){
   const page=await browser.newPage({viewport:{width:cfg.width,height:cfg.height},isMobile:cfg.isMobile,deviceScaleFactor:1});
   await page.goto('http://127.0.0.1:4174/');
   await page.addStyleTag({content:'.topbar,.progress,.mobile-chapters{position:static!important}.skip{display:none!important} html{scroll-behavior:auto!important}'});
   for(const [id,number] of [['useful','03'],['footprint','05'],['choice','06']]){
     await page.locator('#'+id).screenshot({path:'design-review-six-act/'+number+'-'+id+'-'+cfg.name+'.png',animations:'disabled'});
   }
   await page.locator('#pathWhole').click();
   await page.locator('#resolution-figure').screenshot({path:'design-review-six-act/03-full-task-'+cfg.name+'.png',animations:'disabled'});
   await page.locator('#sourceGemini').click();
   await page.locator('#boundaryCompare').screenshot({path:'design-review-six-act/05-google-boundary-'+cfg.name+'.png',animations:'disabled'});
   await page.locator('[data-ending="quiet"]').click();
   await page.locator('#endingFigure').screenshot({path:'design-review-six-act/06-quiet-closure-'+cfg.name+'.png',animations:'disabled'});
   const dimensions=await page.evaluate(()=>({viewport:innerWidth,document:document.documentElement.scrollWidth}));
   console.log(cfg.name,'viewport QA',dimensions);
   await page.close();
 }
 await browser.close();console.log('Captured 12 six-act design review screenshots.');
})().catch(e=>{console.error(e);process.exit(1);});
