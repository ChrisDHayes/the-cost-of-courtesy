const original=require('./playwright.config.cjs');
const launchOptions=process.env.CHROME_BINARY?{executablePath:process.env.CHROME_BINARY}:undefined;
module.exports={
  ...original,
  projects:original.projects.map(p=>({...p,use:{...p.use,...(launchOptions?{launchOptions}:{})}}))
};
