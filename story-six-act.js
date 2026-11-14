/* The Cost of Courtesy — six-act narrative interactions.
   Source-specific measurements remain separate; new choices are hypothetical. */
(() => {
  'use strict';
  const $=id=>document.getElementById(id);
  const setCurrent=(selector,active,valueAttribute)=>{
    document.querySelectorAll(selector).forEach(button=>{
      const current=button.getAttribute(valueAttribute)===active;
      button.classList.toggle('is-current',current);
      button.setAttribute('aria-pressed',String(current));
    });
  };

  // Act 3: focus first on the reply; then consider the whole task.
  const pathStage=$('routeCompare');
  const pathCopy={
    first:'At this point, we’ve seen one reply from each assistant. We still need to see what it takes to finish the message.',
    whole:'The first path adds a follow-up and a revision. Both paths end with a person checking the result. The example shows the extra steps. Their energy use would need to be measured.'
  };
  const changePath=stage=>{
    if(!pathStage)return;
    pathStage.dataset.stage=stage;
    setCurrent('[data-path-view]',stage,'data-path-view');
    $('pathExplanation').textContent=pathCopy[stage];
  };
  document.querySelectorAll('[data-path-view]').forEach(b=>b.addEventListener('click',()=>changePath(b.dataset.pathView)));

  // Act 5: preserve separate experimental and production accounting boundaries.
  const studies={
    thanks:{
      title:'One bounded experiment — generated thank-you replies',
      desc:'A mean of approximately 0.245 Wh was reported for generated responses to thank-you messages in a specified Llama 3.1–8B/H100 setup. GPU and CPU energy were measured; memory energy was estimated. No water-per-reply figure was established.',
      link:'https://arxiv.org/abs/2601.22357',label:'Read the thank-you study ↗'
    },
    gemini:{
      title:'A different accounting boundary — median production text prompt',
      desc:'The Google-scale analysis reported approximately 0.24 Wh for a median Gemini Apps text prompt and an associated 0.26 mL water estimate under the study\'s full-stack accounting. That water number must not be applied to the Llama/H100 thank-you experiment.',
      link:'https://arxiv.org/abs/2508.15734',label:'Read the Google-scale study ↗'
    }
  };
  const changeStudy=key=>{
    if(!studies[key])return;
    setCurrent('[data-study]',key,'data-study');
    const detail=$('sourceDetail'),s=studies[key];
    if(!detail)return;
    const heading=document.createElement('b');heading.textContent=s.title;
    const para=document.createElement('p');para.textContent=s.desc;
    const link=document.createElement('a');
    link.href=s.link;link.target='_blank';link.rel='noopener noreferrer';link.textContent=s.label;
    detail.replaceChildren(heading,para,link);
  };
  document.querySelectorAll('[data-study]').forEach(b=>b.addEventListener('click',()=>changeStudy(b.dataset.study)));

  // Act 6: no recommended answer and no invented energy estimate.
  const endings={
    generated:{
      reply:'You\'re welcome.',
      subtitle:'The system writes a new message.',
      benefit:'A friendly response can reassure the person or maintain a helpful conversation.',
      risk:'Another generated turn may be unnecessary when the person meant to close.',
      test:'Check task closure, accessibility, user preference and actual resource use.'
    },
    lightweight:{
      reply:'Acknowledged',
      subtitle:'A small interface acknowledgment appears; this is not a full generated message.',
      benefit:'It might make closure feel recognized without a new full reply.',
      risk:'The acknowledgment may be misunderstood, inaccessible or still require processing.',
      test:'Compare understanding and accessibility alongside real system work and resource use.'
    },
    quiet:{
      reply:'No visible reply',
      subtitle:'The interface leaves the conversation at the thank-you.',
      benefit:'It may match a person\'s wish to finish without further interruption.',
      risk:'Silence may feel abrupt or obscure a genuine request for reassurance or help.',
      test:'Measure comprehension, support availability, re-engagement and processing costs.'
    }
  };
  const changeEnding=key=>{
    if(!endings[key])return;
    setCurrent('[data-ending]',key,'data-ending');
    const e=endings[key],reply=$('endingReply'),insight=$('endingInsight');
    if(!reply||!insight)return;
    const strong=document.createElement('strong');strong.textContent=e.reply;
    const p=document.createElement('p');p.textContent=e.subtitle;
    reply.replaceChildren(strong,p);
    const rows=[['Possible benefit',e.benefit],['Possible risk',e.risk],['What to test',e.test]];
    insight.replaceChildren(...rows.map(([head,copy])=>{
      const row=document.createElement('p'),title=document.createElement('strong');
      title.textContent=head+': ';row.append(title,document.createTextNode(copy));return row;
    }));
  };
  document.querySelectorAll('[data-ending]').forEach(b=>b.addEventListener('click',()=>changeEnding(b.dataset.ending)));

  // Mirror the global chapter indicator in the horizontal touch navigation.
  const sections=['opening','courtesy','useful','uneven','footprint','choice']
     .map($).filter(Boolean);
  const mobileLinks=[...document.querySelectorAll('.mobile-chapters a')];
  if('IntersectionObserver' in window){
    const observe=new IntersectionObserver(entries=>{
      const first=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(!first)return;
      mobileLinks.forEach(a=>{
        if(a.getAttribute('href')==='#'+first.target.id)a.setAttribute('aria-current','location');
        else a.removeAttribute('aria-current');
      });
    },{rootMargin:'-14% 0px -55% 0px',threshold:[0,.05,.2,.35]});
    sections.forEach(section=>observe.observe(section));
  }

  window.CourtesySixActQA={
    sections:sections.length,
    pathStage:()=>pathStage?.dataset.stage,
    study:()=>document.querySelector('[data-study][aria-pressed="true"]')?.dataset.study,
    ending:()=>document.querySelector('[data-ending][aria-pressed="true"]')?.dataset.ending,
    changePath,changeStudy,changeEnding
  };
})();
