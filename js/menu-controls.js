(() => {
 const menu=document.getElementById('pauseMenu');
 const heading=menu.querySelector('.cloud-menu-heading');heading.innerHTML='<span>Réglages</span>';heading.className='settings-heading';
 const button=document.getElementById('menuButton');button.innerHTML='<span aria-hidden="true">☰</span>';button.title='Réglages';
 const controls=menu.querySelector(':scope > div');controls.classList.add('settings-grid');
 controls.querySelectorAll('[id^="diffBtn_"]').forEach(el=>el.remove());
 [...controls.children].filter(el=>!el.title).forEach(el=>el.remove());
 const names=['easy','normal','hard','legendary'],labels=['Doux','Normal','Difficile','Expert'];
 let tuning={speed:100,density:100,attacks:100};
 try{const saved=JSON.parse(localStorage.getItem('doveDifficultyTuning'));for(const key of Object.keys(tuning)){if(Number.isFinite(saved?.[key]))tuning[key]=Math.max(75,Math.min(150,saved[key]));}}catch{}
 const panel=document.createElement('section');panel.className='difficulty-panel';
 panel.innerHTML='<label for="difficulty-range">Difficulté <output id="difficulty-name"></output></label><input id="difficulty-range" type="range" min="0" max="3" step="1" aria-label="Difficulté générale"><div class="difficulty-ticks">'+labels.map((label,i)=>`<button type="button" data-preset="${i}">${label}</button>`).join('')+'</div><details><summary>Affiner la difficulté</summary>'+[['speed','Vitesse'],['density','Nuages'],['attacks','Tirs ennemis']].map(([key,label])=>`<label for="tuning-${key}">${label}<output id="value-${key}"></output></label><input id="tuning-${key}" type="range" min="75" max="150" step="5" value="${tuning[key]}" aria-label="${label}">`).join('')+'</details>';
 const trapInfo=document.createElement('p');trapInfo.style.cssText='font-size:10px;line-height:1.5';panel.append(trapInfo);
 menu.append(panel);
 const range=panel.querySelector('#difficulty-range');
 function sync(){trapInfo.textContent='Attaques spéciales : '+({easy:1,normal:2,hard:4,legendary:8}[currentDifficulty]||2)+' par boss au prochain combat.';range.value=Math.max(0,names.indexOf(currentDifficulty));panel.querySelector('#difficulty-name').textContent=labels[range.value];panel.querySelectorAll('[data-preset]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.preset===range.value)));for(const key of Object.keys(tuning)){panel.querySelector('#value-'+key).textContent=tuning[key]+' %';panel.querySelector('#tuning-'+key).value=tuning[key];}}
 function preset(index){changeDifficulty(names[index]);tuning={speed:100,density:100,attacks:100};localStorage.setItem('doveDifficultyTuning',JSON.stringify(tuning));sync();}
 range.addEventListener('input',()=>preset(Number(range.value)));
 panel.querySelectorAll('[data-preset]').forEach(el=>el.addEventListener('click',()=>preset(Number(el.dataset.preset))));
 for(const key of Object.keys(tuning))panel.querySelector('#tuning-'+key).addEventListener('input',event=>{tuning[key]=Number(event.target.value);localStorage.setItem('doveDifficultyTuning',JSON.stringify(tuning));sync();});
 const baseApply=applyDifficulty;
 applyDifficulty=function(name,value){const result=baseApply(name,value);const factor=(name==='cloudSpeed'||name==='rainSpeed'?tuning.speed:name==='cloudSpawnRate'?tuning.density:name==='shootingClouds'?tuning.attacks:100)/100;if(typeof result==='object')return {min:result.min*factor,max:result.max*factor};return name==='shootingClouds'?Math.min(.95,result*factor):result*factor;};
 sync();
})();
