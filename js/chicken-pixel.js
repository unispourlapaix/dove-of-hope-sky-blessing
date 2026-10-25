/* Crazy chicken: chunky cream plumage, wonky eyes and speckled eggs. */
(() => {
 const colors={o:'#685046',w:'#fff2d8',s:'#dfc39e',h:'#fffbee',r:'#c95e70',p:'#e99298',g:'#e1a548',d:'#b78045'};
 function stamp(ctx,rows,x,y,size){rows.forEach((row,j)=>[...row].forEach((v,i)=>{if(colors[v]){ctx.fillStyle=colors[v];ctx.fillRect(Math.round(x+i*size),Math.round(y+j*size),size,size);}}));}
 const body=['     ooooo     ','   oowwwwwoo   ','  owwhwwwwwwo  ',' owwwwwhwwwwwo ',' owwwwwwwwwwwo ','owwhwwwwwwwwswo','owwwwwwswwwwswo','owwwswwwwwwsswo','owwwwwwwwwssswo',' owwwwwswssswo ',' owwwwwsssswo  ','  owssssssswo  ','   oosssssoo   ','     ooooo     '];
 const wing=['   oo  ',' oosso ','oswwso ','oswsso ',' ossso ','  oso  ','   o   '];
 CrazyChickenBoss.prototype.draw=function(ctx){if(this.isDead)return;ctx.save();ctx.shadowBlur=0;ctx.imageSmoothingEnabled=false;this.drawEggs(ctx);ctx.save();
 const growth=this.burstScale||1;ctx.translate(this.x,this.y);ctx.scale(growth,growth);ctx.translate(-this.x,-this.y);
 if(this.burstFlash>0)ctx.globalAlpha=.3;
 const beat=this.eggChargeRemaining>0?0:(Math.sin(this.wingFlapOffset)>0?-5:4);
 stamp(ctx,wing,this.x-45,this.y-14+beat,3);stamp(ctx,wing.map(r=>[...r].reverse().join('')),this.x+24,this.y-14-beat,3);
 stamp(ctx,body,this.x-24,this.y-21,3);
 const headY=this.y-this.bodyRadius-this.headRadius+5;
 stamp(ctx,['  r r r  ','  rprpr  ','  orrro  ',' owwwwo  ','owwhwwwo ','owwwwwwo ',' owwwwo  ','  oggo   ','   go    '],this.x-13,headY-22,3);
 this.weakPoints.forEach((wp,i)=>{const x=Math.round(this.x+wp.x),y=Math.round(headY+wp.y);ctx.fillStyle='#685046';ctx.fillRect(x-8,y-8,16,16);ctx.fillStyle=wp.hit?'#d6bd9c':'#fffbee';ctx.fillRect(x-6,y-6,12,12);const dx=Math.round(Math.sin(this.eyeWiggleOffset*(i?1.3:1))*2),dy=Math.round(Math.cos(this.eyeWiggleOffset*(i?1.1:.8))*2);ctx.fillStyle='#302c35';ctx.fillRect(x-3+dx,y-3+dy,6,7);ctx.fillStyle='#fffbee';ctx.fillRect(x-2+dx,y-3+dy,2,2);});
 stamp(ctx,[' rr ','rprr',' rr '],this.x-5,headY+9,3);
 stamp(ctx,['g   g','g   g','gg gg'],this.x-10,this.y+20,3);
 if(this.eggChargeRemaining>0){
  const progress=1-this.eggChargeRemaining/2000;
  ctx.fillStyle='#685046';ctx.fillRect(Math.round(this.x-27),Math.round(this.y-67),54,7);
  ctx.fillStyle='#e1a548';ctx.fillRect(Math.round(this.x-25),Math.round(this.y-65),Math.round(progress*50),3);
  for(const side of [-1,1]){ctx.fillStyle='#e99298';ctx.fillRect(Math.round(this.x+side*36),Math.round(this.y-32),3,9);ctx.fillRect(Math.round(this.x+side*43),Math.round(this.y-22),3,6);}
 }

 ctx.restore();
 for(const effect of this.shellBursts||[]){ctx.save();ctx.globalAlpha=Math.max(0,effect.life);for(let i=0;i<7;i++){const angle=i*Math.PI*2/7;ctx.fillStyle=i%2?'#fff1d0':'#d8aa74';ctx.fillRect(Math.round(effect.x+Math.cos(angle)*effect.radius),Math.round(effect.y+Math.sin(angle)*effect.radius),4,3);}ctx.restore();}ctx.restore();};
 CrazyChickenBoss.prototype.drawEggs=function(ctx){for(const egg of this.eggs){if(!egg.active)continue;const size=egg.large?6:2;stamp(ctx,['  ooo  ',' owhwo ','owhhhwo','owwswwo','owswwwo',' owss o','  ooo  '],egg.x-3.5*size,egg.y-3.5*size,size);ctx.fillStyle='#c29464';ctx.fillRect(Math.round(egg.x+size),Math.round(egg.y-size),size,size);}};

 const updateEggs=CrazyChickenBoss.prototype.updateEggs;
 CrazyChickenBoss.prototype.updateEggs=function(dt){const before=[...this.eggs];for(const egg of this.eggs){if(egg.velocityX){egg.x+=egg.velocityX*dt;if(egg.x<22){egg.x=22;egg.velocityX=Math.abs(egg.velocityX);}if(egg.x>this.canvasWidth-22){egg.x=this.canvasWidth-22;egg.velocityX=-Math.abs(egg.velocityX);}}}updateEggs.call(this,dt);this.shellBursts=this.shellBursts||[];for(const egg of before)if(egg.exploded)this.shellBursts.push({x:egg.x,y:egg.y,life:1,radius:2});for(const e of this.shellBursts){e.life-=.045*dt;e.radius+=1.4*dt;}this.shellBursts=this.shellBursts.filter(e=>e.life>0);};
 function startNextEggTrap(boss){
  if(boss.eggChargeRemaining||boss.burstRemaining||boss.eggBurstPending||!boss.eggTrapQueue?.length)return;
  const threshold=boss.eggTrapQueue.shift();if(threshold===20)boss.eggBurstPending=true;else boss.eggChargeRemaining=2000;
 }
 const damage=CrazyChickenBoss.prototype.takeDamage;
 CrazyChickenBoss.prototype.takeDamage=function(amount,x,y){const before=this.health;const critical=damage.call(this,amount,x,y);
  if(!this.isDead){this.eggTrapThresholds=this.eggTrapThresholds||{};this.eggTrapQueue=this.eggTrapQueue||[];
   for(const threshold of getBossTrapThresholds(this))if(!this.eggTrapThresholds[threshold]&&before>this.maxHealth*threshold/100&&this.health<=this.maxHealth*threshold/100){this.eggTrapThresholds[threshold]=true;this.eggTrapQueue.push(threshold);}
   startNextEggTrap(this);
  }return critical;
 };
 const update=CrazyChickenBoss.prototype.update;
 CrazyChickenBoss.prototype.update=function(dt,px,py){
  if(this.isDead)return;
  startNextEggTrap(this);
  this.burstFlash=Math.max(0,(this.burstFlash||0)-dt);
  if(this.eggBurstPending&&!this.eggChargeRemaining&&!this.burstRemaining){this.eggBurstPending=false;this.burstRemaining=1200;this.burstOrigin={x:this.x,y:this.y};}
  if(this.burstRemaining>0){
   this.burstRemaining=Math.max(0,this.burstRemaining-dt);const progress=1-this.burstRemaining/1200;
   this.burstScale=1+2*progress;this.x=this.burstOrigin.x+(this.canvasWidth/2-this.burstOrigin.x)*progress;this.y=this.burstOrigin.y+(220-this.burstOrigin.y)*progress;
   this.updateEggs(dt/16.67);
   if(this.burstRemaining===0){
    this.burstScale=1;this.burstFlash=350;
    for(let i=0;i<8;i++){const angle=(15+i*150/7)*Math.PI/180;
     this.eggs.push({x:this.x+Math.cos(angle)*45,y:this.y+35+Math.sin(angle)*35,velocityX:Math.cos(angle)*4,velocityY:Math.sin(angle)*4,rotation:0,active:true,exploded:false,large:true,burst:true});
    }
    this.shellBursts=this.shellBursts||[];for(let i=0;i<12;i++)this.shellBursts.push({x:this.x+(i%4-1.5)*18,y:this.y+(Math.floor(i/4)-1)*18,life:1,radius:10});
    this.lastEggDrop=Date.now();if(typeof playSound==='function'){playSound('chicken_cluck');playSound('hit');}
   }
   return;
  }
  if(this.eggChargeRemaining>0){
   this.eggChargeRemaining=Math.max(0,this.eggChargeRemaining-dt);
   this.updateEggs(dt/16.67);this.eyeWiggleOffset+=.03*dt/16.67;
   if(this.eggChargeRemaining===0){
    for(const offset of [-48,0,48])this.eggs.push({x:Math.max(24,Math.min(this.canvasWidth-24,this.x+offset)),y:this.y+this.bodyRadius+24,velocityY:0,rotation:0,active:true,exploded:false,large:true});
    this.lastEggDrop=Date.now();
    if(typeof playSound==='function'){playSound('chicken_cluck');playSound('egg_drop');}
   }
   return;
  }
  update.call(this,dt,px,py);
 };
 CrazyChickenBoss.prototype.checkEggCollision=function(x,y,w,h){for(const egg of this.eggs){if(!egg.active)continue;const rx=egg.large?21:8,ry=egg.large?21:10;if(x<egg.x+rx&&x+w>egg.x-rx&&y<egg.y+ry&&y+h>egg.y-ry){egg.active=false;return true;}}return false;};
})();
