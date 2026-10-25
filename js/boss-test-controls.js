(() => {
 const types=['spider','grim_reaper','crazy_chicken','wall','dark_cloud','black_raven','flying_snake'];
 const menu=document.getElementById('pauseMenu');const panel=document.createElement('section');panel.className='difficulty-panel';panel.id='boss-test-panel';panel.hidden=true;panel.style.display='none';
 const title=document.createElement('h3');title.textContent='Test des 7 boss';title.style.fontSize='14px';panel.append(title);
 const select=document.createElement('select');select.style.cssText='width:100%;padding:9px;margin-bottom:10px;background:#fff4e5;color:#655477';
 types.forEach((type,i)=>{const option=document.createElement('option');option.value=type;option.textContent=((i+1)*2)+' · '+(t('bosses.'+type+'.name')||type);select.append(option);});panel.append(select);
 let chosen=types[0];
 function closeMenu(){menu.style.display='none';document.getElementById('pauseMenuOverlay').style.display='none';}
 function button(label,action){const b=document.createElement('button');b.textContent=label;b.style.cssText='width:100%;padding:10px;margin:4px 0;background:#d7c0df;color:#655477;border:2px solid #a78ab7;cursor:pointer';b.addEventListener('click',action);panel.append(b);}
 button('Lancer le combat',()=>{
  // A cheat combat cannot write progression or scores into the normal save.
  if(!window.bossCheatActive){
   window.bossCheatActive=true;
   Storage.prototype.setItem=function(){};Storage.prototype.removeItem=function(){};Storage.prototype.clear=function(){};
   saveGameData=()=>{};saveProgress=()=>{};saveGameEnd=()=>{};autoSaveToCloud=()=>{};
  }

  document.querySelectorAll('#levelUpScreen,#bossVictoryScreen,[data-bonus-menu],#gameOverPopup').forEach(el=>el.remove());
  chosen=select.value;const index=types.indexOf(chosen);level=(index+1)*2;currentLevelIndex=level-1;currentLevelConfig=LEVELS_CONFIG[currentLevelIndex];
  clouds=[];rain=[];bullets=[];particles=[];fallingPowerUps=[];shockwaves=[];powerUps=[];hearts=[];bonusItems=[];isBonusLevel=false;umbrella=false;electric=false;multi=false;
  lives=5;starCount=20;score=0;totalScore=0;cloudsInLevel=0;bossSpawnedThisLevel=true;bossDefeatRewardsGiven=true;bossShootCount=0;levelBeforeBoss=level;
  player.x=220;player.y=650;shooting=false;touchX=null;touchY=null;
  bossManager.reset();bossManager.spawnBoss(chosen,c.width,c.height);
  startBtn.classList.add('hidden');const motivation=document.getElementById('motivationText');if(motivation)motivation.style.display='none';
  state='playing';closeMenu();msg('TEST · '+t('bosses.'+chosen+'.name')+' · 5 vies / 20 étoiles');
 });
 button('Voir la fenêtre de victoire',()=>{closeMenu();showBossVictoryScreen(select.value,()=>{});});
 const note=document.createElement('p');note.textContent='Version de test : les sauvegardes sont désactivées. Ouvrez ce menu pour changer de boss ou relancer un combat.';note.style.cssText='font-size:10px;line-height:1.5';panel.append(note);menu.prepend(panel);
 let flagClicks=0,titleClicks=0,unlocked=false,unlockClickGuardUntil=0;
 function unlock(){
  if(unlocked)return;unlocked=true;unlockClickGuardUntil=Date.now()+1200;panel.hidden=false;panel.style.display='';
  document.getElementById('languageSelector')?.remove();
  menu.style.display='block';document.getElementById('pauseMenuOverlay').style.display='block';
 }
 document.addEventListener('click',event=>{
  if(unlocked){
   // Extra clicks from the unlock gesture must not fall through onto the backdrop.
   if(Date.now()<unlockClickGuardUntil&&event.target.closest('#pauseMenuOverlay,#langFlag,#chooseLanguageTitle')){
    event.preventDefault();event.stopImmediatePropagation();unlockClickGuardUntil=Date.now()+600;
   }
   return;
  }
  if(event.target.closest('#chooseLanguageTitle')){titleClicks++;if(titleClicks===8){event.preventDefault();event.stopImmediatePropagation();unlock();}}
  else if(event.target.closest('#langFlag')){flagClicks++;if(flagClicks===8){event.preventDefault();event.stopImmediatePropagation();unlock();}}
 },true);

})();
