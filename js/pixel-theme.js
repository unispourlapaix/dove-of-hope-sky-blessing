(() => {
 const rows=['  oo     oo  ','  owoo oowo  ','  owppoppwo  ','  owwwwwwo   ',' owwwwwwwwo  ',' owwowwowwo  ',' owppwpwpwo  ','  owwowwwo   ','  owwwwwwo oo','  owwwwwwowwo','   oowoowwo  ','    oo oo    '];
 const colors={o:'#61547f',w:'#fff3df',p:'#f3a9bc'};
 const art='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12" shape-rendering="crispEdges" aria-hidden="true">'+rows.flatMap((r,y)=>[...r].map((p,x)=>colors[p]?`<rect x="${x}" y="${y}" width="1" height="1" fill="${colors[p]}"/>`:'')).join('')+'</svg>';
 const cat=document.querySelector('.brand-dove');cat.innerHTML=art;cat.classList.add('pixel-cat');
 document.querySelector('.brand-eyebrow').textContent='UN PETIT CIEL, UN GRAND ESPOIR';
 const scene=document.createElement('div');scene.className='pixel-scenery';scene.setAttribute('aria-hidden','true');scene.innerHTML='<i class="pixel-cloud cloud-one"></i><i class="pixel-cloud cloud-two"></i><i class="pixel-cloud cloud-three"></i><b class="pixel-star star-one">✦</b><b class="pixel-star star-two">✦</b>';
 document.getElementById('gameContainer').prepend(scene);
 document.getElementById('menuButton').innerHTML='<span aria-hidden="true">☁</span><small>MENU</small>';
 const heading=document.createElement('header');heading.className='cloud-menu-heading';heading.innerHTML='<span class="menu-cat">'+art+'</span><span>Le petit nuage<small>Une pause dans le ciel</small></span>';document.getElementById('pauseMenu').prepend(heading);
})();
// Theme dynamically created story, score, language and victory panels too.
(() => {
 const theme=node=>{if(!(node instanceof HTMLElement))return;[node,...node.querySelectorAll('[style]')].forEach(el=>{if(el.id==='gameContainer'||el.id==='pauseMenuOverlay'||el.tagName==='CANVAS')return;const s=el.style;if((s.position==='fixed'||s.position==='absolute')&&(s.zIndex>=1000)&&(s.background||s.backgroundColor))el.classList.add('pixel-dialog');});};
 new MutationObserver(changes=>changes.forEach(change=>change.addedNodes.forEach(theme))).observe(document.body,{childList:true,subtree:true});
 [...document.body.children].forEach(theme);
})();
// A new pastel cat greets the player on each level card.
(() => {
 const coats=[['#fff0d7','#d6b792'],['#dfd5ef','#b5a1cf'],['#d3e7e0','#9dbfb1'],['#f4d0dc','#d49cb4'],['#f5dabd','#d6ac82'],['#d2e3f1','#a2bcd5']];
 let previous=-1;
 function decorate(screen){
  if(screen.dataset.catCard)return;
  const direct=screen.id==='bossWisdomDisplay'||screen.hasAttribute('data-bonus-menu');
  const card=direct?screen:screen.firstElementChild;if(!card)return;
  screen.dataset.catCard='true';if(!direct)screen.classList.add('pixel-level-screen');card.classList.add('pixel-level-card');
  if(screen.id==='bossVictoryScreen')card.classList.add('pixel-boss-card');
  if(screen.id==='bossWisdomDisplay')card.classList.add('pixel-wisdom-card');
  let choice=Math.floor(Math.random()*coats.length);if(choice===previous)choice=(choice+1)%coats.length;previous=choice;
  const [fur,shadow]=coats[choice];
  const rows=['  oo       oo  ','  owo     owo  ','  owpooooopwo  ','  owwwwwwwwwo  ',' owwwwwwwwwwwo ',' owwowwwwowwwo ',' owwowwwwowwwo ',' owppwwpwwppwo ','  owwwowowwwo  ','   owwwwwwwo   ','  owwwssswwwo o','  owwwwwwwwwowo','   oowwoowwoo  ','    ooo ooo    '];
  const colors={o:'#655477',w:fur,p:'#efa7b9',s:shadow};
  const pixels=rows.flatMap((r,y)=>[...r].map((p,x)=>colors[p]?`<rect x="${x}" y="${y}" width="1" height="1" fill="${colors[p]}"/>`:'')).join('');
  const mascot=document.createElement('div');mascot.className='level-cat';mascot.setAttribute('aria-hidden','true');mascot.innerHTML=`<svg viewBox="0 0 15 14" shape-rendering="crispEdges">${pixels}</svg><span class="cat-cloud"></span>`;
  // Replace the old large emoji where present, leaving badges and level text intact.
  const icon=[...card.children].find(el=>el.children.length===0&&parseInt(el.style.fontSize)>=40);
  if(icon)icon.replaceWith(mascot);else card.prepend(mascot);
 }
 const scan=node=>{if(!(node instanceof HTMLElement))return;const selector='#levelUpScreen,#bossVictoryScreen,#bossWisdomDisplay,#victoryScreen,#gameOverPopup,#infiniteVerseDisplay,[data-bonus-menu]';if(node.matches(selector))decorate(node);node.querySelectorAll(selector).forEach(decorate);};
 new MutationObserver(changes=>changes.forEach(change=>change.addedNodes.forEach(scan))).observe(document.body,{childList:true,subtree:true});
 scan(document.body);
})();
(() => {
 const stock=document.getElementById('starStock').parentElement;
 stock.setAttribute('role','button');stock.tabIndex=0;
 stock.title='Onde de choc : utiliser une étoile (ou double-clic dans le ciel)';
 stock.setAttribute('aria-label',stock.title);stock.style.cursor='pointer';
 stock.addEventListener('click',event=>{event.stopPropagation();activateStarShockwave();});
 stock.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();activateStarShockwave();}});
})();
