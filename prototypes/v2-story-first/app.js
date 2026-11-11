/* The Cost of Courtesy — V2 Story-First Design Study.
   Source data preserved in data.js. Prototypes A/B/C, not a new empirical study. */
(() => {
  "use strict";
  const src = window.COURTESY_V2_DATA;
  if (!src || !Array.isArray(src.language122) || src.language122.length !== 122) {
    document.body.insertAdjacentHTML("afterbegin", '<div role="alert" style="padding:20px;background:#632e26;color:white">The original language data did not load. Please reload this prototype.</div>');
    return;
  }
  const $ = id => document.getElementById(id);
  const fmt = (x, n=3) => Number(x).toLocaleString('en-CA',{minimumFractionDigits:n,maximumFractionDigits:n});
  const percent = x => fmt(x*100,1)+'%';
  const svgNS = 'http://www.w3.org/2000/svg';
  const makeSvg = (tag, attrs, text) => {
    const e = document.createElementNS(svgNS,tag);
    Object.entries(attrs||{}).forEach(([k,v])=>e.setAttribute(k,String(v)));
    if(text!==undefined)e.textContent=text;
    return e;
  };

  // Appearance and navigation: no story state should be discarded when the theme changes.
  const themeBtn = $('themeToggle');
  const flipTheme = () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    themeBtn.setAttribute('aria-label','Switch to '+(next==='dark'?'light':'dark')+' appearance');
    themeBtn.textContent=next==='dark'?'◑':'◐';
  };
  themeBtn.addEventListener('click',flipTheme);
  const updateScroll = () => {
    const max = Math.max(1,document.documentElement.scrollHeight-innerHeight);
    $('progressFill').style.width = (100*scrollY/max).toFixed(2)+'%';
  };
  addEventListener('scroll',updateScroll,{passive:true});
  addEventListener('resize',updateScroll,{passive:true});
  updateScroll();
  if('IntersectionObserver' in window) {
    const links=Array.from(document.querySelectorAll('.chapter-rail a, .topnav a'));
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);
      if(!visible[0])return;
      const id=visible[0].target.id;
      links.forEach(a=>{if(a.getAttribute('href')==='#'+id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
    },{rootMargin:'-18% 0px -52% 0px',threshold:[0,.08,.2,.4]});
    ['opening','courtesy','uneven'].forEach(id=>observer.observe($(id)));
  }

  // PROTOTYPE A — the visual is an illustrative interaction, not an observed chat.
  let replied=false;
  $('showReply').addEventListener('click',()=>{
    replied=!replied;
    $('messageOutcome').replaceChildren();
    if(replied){
      const response=document.createElement('p');
      response.className='machine-reply';
      response.textContent="You're welcome.";
      $('messageOutcome').append(response);
      $('responseTrace').hidden=false;
      $('showReply').textContent='Return to the moment before the reply';
    }else{
      $('messageOutcome').innerHTML='<span class="reply-dots" aria-hidden="true"><i></i><i></i><i></i></span><span>What should happen next?</span>';
      $('responseTrace').hidden=true;
      $('showReply').textContent='See one possible response ↗';
    }
  });

  // PROTOTYPE B — exact published PLUM Table IV means; no invented joint tone/history comparisons.
  const categoryLabels={
    BAL:'Direct (bald on record)', POP:'Positive politeness',
    NEP:'Negative politeness', POI:'Positive impoliteness', NEI:'Negative impoliteness'
  };
  let tone='BAL', chosenCell=null;
  const colorScale = value => {
    const t=Math.max(0,Math.min(1,(value-.36)/.31));
    const a=[220,159,140],b=[147,193,220];
    return '#'+a.map((x,i)=>Math.round(x+(b[i]-x)*t).toString(16).padStart(2,'0')).join('');
  };
  const labelFor = (model,language,score) => model+' · '+language+' · '+categoryLabels[tone]+': '+fmt(score,3)+' study-defined composite score';
  function renderMatrix(){
    const body=$('courtesyTable').tBodies[0];
    body.replaceChildren();
    const idx=src.tones.indexOf(tone);
    src.modelNames.forEach((model,mi)=>{
      const tr=document.createElement('tr'), name=document.createElement('td');
      name.textContent=model; tr.append(name);
      src.languages.forEach(lang=>{
        const score=src.category[lang][mi][idx],td=document.createElement('td'),b=document.createElement('button');
        b.type='button';b.className='matrix-cell';b.textContent=fmt(score,3);
        b.style.background=colorScale(score);
        b.setAttribute('aria-label',labelFor(model,lang,score));
        const selected=chosenCell && chosenCell.model===model&&chosenCell.lang===lang;
        b.setAttribute('aria-pressed',String(!!selected));
        b.addEventListener('click',()=>{
          chosenCell={model,lang};
          body.querySelectorAll('button.matrix-cell').forEach(x=>x.setAttribute('aria-pressed','false'));
          b.setAttribute('aria-pressed','true');
          $('courtesyDetail').replaceChildren();
          const strong=document.createElement('strong'),detail=document.createElement('p');
          strong.textContent=model+' · '+lang+' · '+fmt(score,3);
          detail.textContent='Composite response-quality score under '+categoryLabels[tone].toLowerCase()+'. This is a published study mean, not an accuracy percentage or measured energy. The separately published conversation-history comparison cannot be combined with this cell.';
          $('courtesyDetail').append(strong,detail);
        });
        td.append(b);tr.append(td);
      });
      body.append(tr);
    });
  }
  $('revealMatrix').addEventListener('click',()=>{
    const panel=$('matrixPanel');
    panel.hidden=!panel.hidden;
    $('revealMatrix').setAttribute('aria-expanded',String(!panel.hidden));
    $('revealMatrix').textContent=panel.hidden?'See how the pattern changes across models ↗':'Hide the full comparison ↑';
    if(!panel.hidden){renderMatrix();panel.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}
  });
  $('toneSelect').addEventListener('change',e=>{
    tone=e.target.value;
    chosenCell=null;
    renderMatrix();
    $('courtesyDetail').innerHTML='<strong>Choose a cell.</strong><p>The pattern is now shown for '+categoryLabels[tone].toLowerCase()+'. Numerical values come from PLUM Table IV; do not treat these automatically evaluated composites as energy or universal quality measures.</p>';
  });

  // PROTOTYPE C — preserve every published language, source categories, separate metrics.
  const all=src.language122.slice().sort((a,b)=>a.energy-b.energy);
  const alpha=src.language122.slice().sort((a,b)=>a.language.localeCompare(b.language,'en'));
  const energyValues=all.map(x=>x.energy);
  const mean=energyValues.reduce((a,b)=>a+b,0)/all.length;
  const median=(energyValues[60]+energyValues[61])/2;
  const find=$('languageFinder');
  alpha.forEach(d=>{const o=document.createElement('option');o.value=d.code;o.textContent=d.language;find.append(o)});
  let stage='all',selectedCode='eng_Latn';
  const byCode=code=>all.find(x=>x.code===code)||all[0];
  function selectLanguage(code, sync=true){
    const d=byCode(code);selectedCode=d.code;
    if(sync)find.value=d.code;
    $('languageName').textContent=d.language;
    $('languageDesc').textContent='Published Qwen3–8B / Belebele language-condition aggregate · '+(d.resource==='Low'?'lower':'higher')+'-resource source category. The category is not an individual attribute.';
    $('energyValue').textContent=fmt(d.energy,3)+' J';
    $('accuracyValue').textContent=percent(d.lenient);
    $('strictValue').textContent=percent(d.strict);
    $('lenientValue').textContent=percent(d.lenient);
    $('strictBar').style.width=(d.strict*100).toFixed(2)+'%';
    $('lenientBar').style.width=(d.lenient*100).toFixed(2)+'%';
    $('accuracyExplanation').textContent='For '+d.language+', the study recorded '+fmt(d.format,0)+' formatting failures across '+fmt(d.n,0)+' benchmark items. Different scoring rules can change the apparent result; they do not measure the ability of people who speak this language.';
    $('atlasGraphic').querySelectorAll('.data-dot').forEach(c=>c.setAttribute('aria-pressed',String(c.dataset.code===d.code)));
  }
  const drawCircle=(svg,d,x,y,r) => {
    const circle=makeSvg('circle',{cx:x,cy:y,r,fill:d.resource==='Low'?'var(--human)':'var(--compute)',class:'data-dot','data-code':d.code,tabindex:'0',role:'button','aria-pressed':String(selectedCode===d.code),'aria-label':d.language+' · '+fmt(d.energy,3)+' joules per output token'});
    circle.dataset.code=d.code;
    circle.append(makeSvg('title',{},d.language+' · '+fmt(d.energy,3)+' J per output token · '+percent(d.lenient)+' lenient accuracy'));
    circle.addEventListener('click',()=>selectLanguage(d.code));
    circle.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectLanguage(d.code)}});
    svg.append(circle);
  };
  function drawGrid(svg){
    const compact=innerWidth<=540,medium=innerWidth<=820;
    const cols=compact?10:medium?14:18,stepX=compact?30:medium?34:42,stepY=compact?33:medium?33:37;
    const rows=Math.ceil(all.length/cols),left=compact?26:40,top=34,width=left*2+(cols-1)*stepX,height=top+rows*stepY+43;
    svg.setAttribute('viewBox','0 0 '+width+' '+height);
    svg.style.maxWidth=compact?'410px':'960px';
    all.forEach((d,i)=>drawCircle(svg,d,left+(i%cols)*stepX,top+Math.floor(i/cols)*stepY,compact?10.5:11));
    svg.append(makeSvg('text',{x:left,y:height-20},'LOWER ENERGY  →'));
    svg.append(makeSvg('text',{x:width-left,y:height-20,'text-anchor':'end'},'→  HIGHER ENERGY'));
  }
  function drawDistribution(svg){
    const width=930,height=295,left=70,right=width-45;
    svg.setAttribute('viewBox','0 0 '+width+' '+height);
    svg.style.maxWidth='none';
    // A logarithmic axis preserves the right tail without cutting any source condition.
    const min=Math.min(...energyValues)*.89, max=Math.max(...energyValues)*1.08;
    const X=n=>left+(Math.log(n)-Math.log(min))/(Math.log(max)-Math.log(min))*(right-left);
    const dots=[],r=5.1,mid=135;
    const yCandidates=[0];for(let i=1;i<=11;i++){yCandidates.push(i*9.7);yCandidates.push(-i*9.7);}
    for(const d of all){
      const x=X(d.energy);
      let y=mid,placed=false;
      for(const delta of yCandidates){
        const candidate=mid+delta;
        if(candidate<29||candidate>242)continue;
        if(dots.every(p=>Math.hypot(x-p.x,candidate-p.y)>=2*r+1.5)){y=candidate;placed=true;break;}
      }
      if(!placed) {
        // Fallback for unusually dense data: hold the measured x-coordinate and use a free vertical lane.
        for(let yy=27;yy<245&&!placed;yy+=5){if(dots.every(p=>Math.hypot(x-p.x,yy-p.y)>=2*r+0.6)){y=yy;placed=true;}}
      }
      dots.push({d,x,y});
    }
    const baseY=254;
    svg.append(makeSvg('line',{x1:left,y1:baseY,x2:right,y2:baseY,class:'axis-line'}));
    const ticks=[.1,.2,.5,1.0].filter(v=>v>=min&&v<=max);
    for(const t of ticks){const x=X(t);svg.append(makeSvg('line',{x1:x,y1:baseY-4,x2:x,y2:baseY+4,class:'axis-line'}));svg.append(makeSvg('text',{x,y:baseY+20,'text-anchor':'middle'},fmt(t,1)+' J'));}
    const overlays=[{v:median,label:'MEDIAN '+fmt(median,3)+' J',className:'stat-line',y:12},{v:mean,label:'MEAN '+fmt(mean,3)+' J',className:'mean-line',y:35}];
    overlays.forEach(o=>{const x=X(o.v);svg.append(makeSvg('line',{x1:x,y1:50,x2:x,y2:baseY-2,class:o.className}));const label=makeSvg('text',{x:x+(o.className==='mean-line'?10:-10),y:o.y,'text-anchor':o.className==='mean-line'?'start':'end'},o.label);label.style.fill=o.className==='mean-line'?'var(--compute)':'var(--value)';label.style.fontWeight='700';svg.append(label);});
    dots.forEach(p=>drawCircle(svg,p.d,p.x,p.y,r));
    svg.append(makeSvg('text',{x:width/2,y:height-5,'text-anchor':'middle'},'ENERGY PER GENERATED TOKEN · LOGARITHMIC AXIS'));
  }
  function renderAtlas(){
    const svg=$('atlasGraphic');
    svg.replaceChildren();
    if(stage==='all')drawGrid(svg);else drawDistribution(svg);
    $('accuracyNote').hidden=stage!=='evaluation';
    const copy={
      all:['Every language belongs in the picture.','Each bubble is one published language condition, ordered from lower to higher energy per generated token. No language is omitted.','LEFT TO RIGHT, TOP TO BOTTOM · LOWER → HIGHER ENERGY PER OUTPUT TOKEN'],
      distribution:['An average can hide the expensive tail.','The same 122 measurements, now plotted by their actual per-token energy. The mean rises above the median because of a right tail.','MEAN '+fmt(mean,3)+' J · MEDIAN '+fmt(median,3)+' J · LOGARITHMIC ENERGY AXIS'],
      evaluation:['The scoring rule changes the picture.','Accuracy depends on how the benchmark decides what counts as correct. Select a language to compare strict and lenient scores under this particular evaluation.','EVERY LANGUAGE IS STILL PRESENT · THE SCORING COMPARISON APPEARS BELOW']
    }[stage];
    $('atlasTitle').textContent=copy[0];
    $('atlasDescription').textContent=copy[1];
    $('atlasAxisNote').textContent=copy[2];
    document.querySelectorAll('[data-stage]').forEach(b=>{const selected=b.dataset.stage===stage;b.classList.toggle('is-current',selected);b.setAttribute('aria-pressed',String(selected));});
    selectLanguage(selectedCode);
  }
  document.querySelectorAll('[data-stage]').forEach(b=>b.addEventListener('click',()=>{
    stage=b.dataset.stage;
    if(stage==='evaluation')selectedCode='fra_Latn';
    renderAtlas();
  }));
  find.addEventListener('change',()=>selectLanguage(find.value));
  // Reflow the point ledger only when the breakpoint changes (not on each width change).
  let breakpoint=innerWidth<=540?'small':innerWidth<=820?'medium':'wide';
  addEventListener('resize',()=>{
    const next=innerWidth<=540?'small':innerWidth<=820?'medium':'wide';
    if(next!==breakpoint){breakpoint=next;renderAtlas();}
  });
  $('languageCount').textContent=all.length+' / '+all.length;
  renderAtlas();
  window.CourtesyV2PrototypeQA={
    languageRows:all.length,
    modelRows:src.modelNames.length,
    sourceMean:mean,sourceMedian:median,
    sourceLanguageIds:all.map(d=>d.code),
    stage:()=>stage,
    matrix:()=>({condition:tone,cells:$('courtesyTable').querySelectorAll('.matrix-cell').length}),
    setStage:kind=>{stage=kind;renderAtlas();}
  };
})();
