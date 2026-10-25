/* Death: ragged charcoal cloak, ivory skull and a broad steel scythe. */
(() => {
 const colors={o:'#15141f',d:'#252331',m:'#3a3548',l:'#555064',b:'#a8a7b3',w:'#e1ded0',h:'#fff1d7',s:'#9d9b8d',g:'#7a604e',r:'#47303e'};
 function stamp(ctx,rows,x,y,size,palette=colors){rows.forEach((row,j)=>[...row].forEach((v,i)=>{if(palette[v]){ctx.fillStyle=palette[v];ctx.fillRect(Math.round(x+i*size),Math.round(y+j*size),size,size);}}));}
 const hood=['     ooooo     ','   ooddmddoo   ','  oddmlmldddo  ',' oddmlmmmlmddo ',' oddmmooommddo ','oddmmooooomdddo','oddmooooooomddo','oddmooooooomddo',' oddmooooomddo ','  oddmmmdddo   '];
 const robe=['   ooddmddoo   ','  oddmlmmdddo  ',' oddmmlmmmdddo ','oddmmmlmmmmdddo','oddmmlmmmlmdddo','oddmmlmmmlmdddo','oddmmlmmmlmdddo','oddmmlmmmlmdddo','oddmlmmmlmmdddo','oddmlmmmlmmdddo','odmlmmmmlmmmddo','odmlmmmlmmmlddo','odmmmmlmmmldddo','odmmmlmmmlddddo','odmm o mm o ddo',' oo  o oo o oo '];
 GrimReaperBoss.prototype.draw=function(ctx){if(this.isDead)return;ctx.save();ctx.shadowBlur=0;ctx.imageSmoothingEnabled=false;
 const flutter=Math.sin(this.floatOffset*2)>0?2:0;
 stamp(ctx,robe,this.x-30,this.y+16,4);
 stamp(ctx,hood,this.x-30,this.y-38,4);
 stamp(ctx,['  ooooooo  ',' owwhwwwwo ','owhwwwwwwwo','owwwwwwwwwo','owwsssss w o'.replaceAll(' ',''),' owssssswo ','  owwwwwo  '],this.x-22,this.y-24,4);
 this.weakPoints.forEach(wp=>{const x=Math.round(this.x+wp.x),y=Math.round(this.y+wp.y);ctx.fillStyle='#100f18';ctx.fillRect(x-6,y-5,12,11);if(!wp.hit){ctx.fillStyle='#8c697e';ctx.fillRect(x-2,y-1,3,3);}else{ctx.fillStyle='#b7a17e';ctx.fillRect(x-3,y+3,6,2);}});
 stamp(ctx,[' oo ','oooo',' oo '],this.x-6,this.y+3,3);
 const jaw=Math.round(this.jawOffset/2)*2;stamp(ctx,['owowowo','owwwww o'.replaceAll(' ',''),' ooooo '],this.x-14,this.y+13+jaw,4);
 // Bony hands grip the haft. The blade remains entirely below the HUD margin.
 ctx.fillStyle='#302735';ctx.fillRect(Math.round(this.x+39),Math.round(this.y-60),6,145);
 ctx.fillStyle='#806b61';ctx.fillRect(Math.round(this.x+40),Math.round(this.y-57),2,138);
 stamp(ctx,['          ooooooooo ','     ooooobbbbbbbbo ','  ooobbbbbhbbbbboo  ',' obbbhhhhbbbooo     ','obbbbbbboooo        ',' obbbooo            ','  ooo               '],this.x-24,this.y-67,4);
 stamp(ctx,[' www ','wwsww',' ws w',' w  w'],this.x+29,this.y+20+flutter,3);
 if(this.coffinChargeRemaining>0){
  ctx.font='bold 13px monospace';ctx.textAlign='center';ctx.fillStyle='#dfc4d4';ctx.fillText('HA HA HA',this.x,this.y-79);
  ctx.fillStyle='#302735';ctx.fillRect(Math.round(this.x-27),Math.round(this.y-74),54,6);ctx.fillStyle='#a88aa8';ctx.fillRect(Math.round(this.x-25),Math.round(this.y-72),Math.round((1-this.coffinChargeRemaining/2000)*50),2);
 }
 this.drawBones(ctx);this.drawCoffins(ctx);ctx.restore();};
 GrimReaperBoss.prototype.drawBones=function(ctx){for(const bone of this.bones){if(!bone.active)continue;ctx.save();const vertical=Math.sin(bone.rotation)>.5;let rows=['oo     oo','owooooowo','owhhhhhwo','owooooowo','oo     oo'];if(vertical)rows=Array.from({length:9},(_,i)=>rows.map(r=>r[i]).join(''));stamp(ctx,rows,bone.x-(vertical?5:9),bone.y-(vertical?9:5),2);ctx.restore();}};
 GrimReaperBoss.prototype.drawCoffins=function(ctx){for(const coffin of this.coffins){if(!coffin.active)continue;const size=coffin.large?5:3;stamp(ctx,['   ooooo   ','  ogggggo  ',' ogmmmmmgo ','ogmmmmmmmgo','ogmmmwmmmgo','ogmmwwwmmgo','ogmmmwmmmgo','ogmmmwmmmgo','ogmmmmmmmgo',' ogmmmmmgo ',' ogmmmmmgo ','  ogggggo  ','   ooooo   '],coffin.x-5.5*size,coffin.y-6.5*size,size,coffin.large?{...colors,o:'#735018',g:'#e4b536',m:'#bf8d21',w:'#fff0ae'}:colors);}};
 function beginCoffinCharge(boss,count){
  boss.coffinVolleyCount=count;boss.coffinChargeRemaining=2000;
  if(typeof playSound==='function')playSound('reaper_charge_laugh');
 }
 const damage=GrimReaperBoss.prototype.takeDamage;
 GrimReaperBoss.prototype.takeDamage=function(amount,x,y){const before=this.health;const critical=damage.call(this,amount,x,y);
  if(!this.isDead){
   this.coffinThresholds=this.coffinThresholds||{};this.coffinVolleyQueue=this.coffinVolleyQueue||[];
   for(const threshold of getBossTrapThresholds(this)){
    if(!this.coffinThresholds[threshold]&&before>this.maxHealth*threshold/100&&this.health<=this.maxHealth*threshold/100){this.coffinThresholds[threshold]=true;this.coffinVolleyQueue.push(threshold===20?6:3);}
   }
   if(!this.coffinChargeRemaining&&this.coffinVolleyQueue.length)beginCoffinCharge(this,this.coffinVolleyQueue.shift());
  }
  return critical;
 };
 const update=GrimReaperBoss.prototype.update;
 GrimReaperBoss.prototype.update=function(dt,px,py){
  if(this.isDead)return;
  if(!this.coffinChargeRemaining&&this.coffinVolleyQueue?.length)beginCoffinCharge(this,this.coffinVolleyQueue.shift());
  if(this.coffinChargeRemaining>0){
   this.coffinChargeRemaining=Math.max(0,this.coffinChargeRemaining-dt);
   this.animationOffset+=.24*dt/16.67;this.jawOffset=Math.abs(Math.sin(this.animationOffset))*12;
   this.updateBones(dt/16.67);this.updateCoffins(dt/16.67);
   if(this.coffinChargeRemaining===0){
    for(const offset of (this.coffinVolleyCount===6?[-150,-90,-30,30,90,150]:[-72,0,72]))this.coffins.push({x:Math.max(30,Math.min(this.canvasWidth-30,this.x+offset)),y:this.y+85,velocityY:2,rotation:0,rotationSpeed:0,active:true,large:true});
    this.lastCoffinAttack=Date.now();this.lastBoneAttack=Date.now();
    if(typeof playSound==='function')playSound('reaper_coffin');
   }
   return;
  }
  update.call(this,dt,px,py);
 };
 GrimReaperBoss.prototype.checkCoffinCollision=function(x,y,w,h){for(const coffin of this.coffins){if(!coffin.active)continue;const rx=coffin.large?28:18,ry=coffin.large?33:25;if(x<coffin.x+rx&&x+w>coffin.x-rx&&y<coffin.y+ry&&y+h>coffin.y-ry){coffin.active=false;return true;}}return false;};

})();
