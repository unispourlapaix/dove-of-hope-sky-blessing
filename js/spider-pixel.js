/* Hairy black spider with eight articulated hooked legs. */
(() => {
 function line(ctx,x1,y1,x2,y2,width,color){const steps=Math.max(1,Math.ceil(Math.hypot(x2-x1,y2-y1)/2));ctx.fillStyle=color;for(let i=0;i<=steps;i++)ctx.fillRect(Math.round((x1+(x2-x1)*i/steps)/2)*2,Math.round((y1+(y2-y1)*i/steps)/2)*2,width,width);}
 SpiderBoss.prototype.draw=function(ctx){if(this.isDead)return;ctx.save();ctx.shadowBlur=0;ctx.imageSmoothingEnabled=false;this.drawWebLines(ctx);
 // Follow the original five-joint leg animation, including its rapid irregular bends.
 for(const leg of this.legs){
  let x=this.x,y=this.y,angle=leg.baseAngle;
  leg.segments.forEach((segment,index)=>{
   angle+=segment.angle;
   const endX=x+Math.cos(angle)*segment.length*(this.legFoldFactor||1),endY=y+Math.sin(angle)*segment.length*(this.legFoldFactor||1);
   line(ctx,x,y,endX,endY,index<2?5:3,'#12131c');
   line(ctx,x+1,y+1,endX+1,endY+1,2,'#353542');
   if(index%2===0)for(let j=0;j<3;j++){
    const f=j/3,hx=x+(endX-x)*f,hy=y+(endY-y)*f;
    line(ctx,hx,hy,hx+Math.cos(angle+Math.PI/2)*5,hy+Math.sin(angle+Math.PI/2)*5,2,'#44434f');
   }
   ctx.fillStyle='#11121a';ctx.fillRect(Math.round(endX)-2,Math.round(endY)-2,4,4);
   x=endX;y=endY;
  });
  for(const side of [-1,1]){
   const clawAngle=angle+side*Math.PI/12;
   const tipX=x+Math.cos(clawAngle)*8,tipY=y+Math.sin(clawAngle)*8;
   line(ctx,x,y,tipX,tipY,3,'#8c8493');
   line(ctx,tipX,tipY,tipX-Math.cos(angle)*4,tipY-Math.sin(angle)*4,2,'#beb0bd');
  }
 }
 // Stepped oval abdomen with deterministic coarse fur, never shimmering noise.
 const radius=this.bodyRadius;
 for(let row=-radius;row<=radius;row+=2){const half=Math.floor(Math.sqrt(Math.max(0,1-row*row/(radius*radius)))*radius);ctx.fillStyle='#0b0c12';ctx.fillRect(Math.round(this.x-half),Math.round(this.y+row),half*2,2);if(half>5){ctx.fillStyle=row<0?'#1d1e29':'#11121a';ctx.fillRect(Math.round(this.x-half+3),Math.round(this.y+row),half*2-6,2);}}
 for(let i=0;i<64;i++){const a=i*Math.PI*2/64;const x=this.x+Math.cos(a)*(radius-1),y=this.y+Math.sin(a)*(radius-1);const length=4+i%4*2;line(ctx,x,y,x+Math.cos(a)*length,y+Math.sin(a)*length,2,i%3?'#242430':'#44434f');}
 for(let i=0;i<28;i++){const a=i*2.399;const r=Math.sqrt(i/28)*(radius-6);const x=this.x+Math.cos(a)*r,y=this.y+Math.sin(a)*r;line(ctx,x,y,x-2,y-4,2,i%4?'#282833':'#484652');}
 const headY=this.y-this.headRadius;ctx.fillStyle='#0b0c12';ctx.fillRect(Math.round(this.x-15),Math.round(headY-10),30,23);ctx.fillStyle='#262530';ctx.fillRect(Math.round(this.x-11),Math.round(headY-9),22,4);
 this.weakPoints.forEach(wp=>{const x=Math.round(this.x+wp.x),y=Math.round(headY+wp.y);ctx.fillStyle=wp.hit?'#54454b':'#c73250';ctx.fillRect(x-3,y-3,6,6);if(!wp.hit){ctx.fillStyle='#ff9d9d';ctx.fillRect(x-2,y-2,2,2);}});
 ctx.fillStyle='#70243c';for(const dx of [-11,-2,7])ctx.fillRect(Math.round(this.x+dx),Math.round(headY-7),3,2);
 for(const side of [-1,1]){line(ctx,this.x+side*7,headY+8,this.x+side*13,headY+20,5,'#6e6572');line(ctx,this.x+side*13,headY+20,this.x+side*5,headY+25,3,'#b8a7b0');line(ctx,this.x+side*5,headY+25,this.x+side*3,headY+19,2,'#ded0ce');}
 ctx.restore();};
 SpiderBoss.prototype.drawWebLines=function(ctx){for(const web of this.webLines){line(ctx,web.x,this.y+this.bodyRadius,web.x,web.y,2,'#837e92');ctx.fillStyle='#e2dce8';ctx.fillRect(Math.round(web.x),Math.round(web.y)-5,3,7);}};
})();
// The first successful hit provokes a retreat, a two-second crouch and a central lunge.
(() => {
 const originalUpdate=SpiderBoss.prototype.update;
 const originalDamage=SpiderBoss.prototype.takeDamage;
 function beginAmbush(boss){
  boss.ambushStage='retreat';boss.ambushTime=0;
  boss.jumpOrigin={x:boss.x,y:boss.y};
  boss.jumpDestination={x:boss.x<=boss.canvasWidth/2?boss.canvasWidth-140:140,y:155};
  boss.shootWebLine();boss.lastWebAttack=Date.now();
 }
 SpiderBoss.prototype.takeDamage=function(damage,x,y){
  const health=this.health;
  const critical=originalDamage.call(this,damage,x,y);
  if(this.isDead||this.health>=health)return critical;
  this.ambushQueue=this.ambushQueue||[];
  this.ambushThresholds=this.ambushThresholds||{};
  if(!this.ambushTriggered){this.ambushTriggered=true;this.ambushQueue.push('first');}
  for(const threshold of getBossTrapThresholds(this,true)){
   if(!this.ambushThresholds[threshold]&&health/this.maxHealth*100>threshold&&this.health/this.maxHealth*100<=threshold){
    this.ambushThresholds[threshold]=true;this.ambushQueue.push(threshold);
   }
  }
  if((!this.ambushStage||this.ambushStage==='aggressive')&&this.ambushQueue.length){this.ambushQueue.shift();beginAmbush(this);}
  return critical;
 };
 SpiderBoss.prototype.update=function(dt,px,py){
  if(this.isDead)return;
  if((!this.ambushStage||this.ambushStage==='aggressive')&&this.ambushQueue?.length){this.ambushQueue.shift();beginAmbush(this);}
  const stage=this.ambushStage;
  if(!stage||stage==='aggressive'){
   originalUpdate.call(this,dt,px,py);
   this.legFoldFactor=1;
   return;
  }
  // Keep projectiles moving throughout the leap and crouch.
  this.moveTimer+=dt;this.legAnimationOffset+=.12*(dt/16.67);
  this.updateLegs(dt/16.67);this.updateWebLines(dt/16.67);
  this.ambushTime+=dt;
  if(stage==='crouch'){
   this.legFoldFactor=.4;
   if(this.ambushTime>=2000){
    this.ambushStage='return';this.ambushTime=0;
    this.jumpOrigin={x:this.x,y:this.y};
    this.jumpDestination={x:this.canvasWidth/2,y:160};
   }
   return;
  }
  const duration=stage==='retreat'?360:320;
  const progress=Math.min(1,this.ambushTime/duration);
  const ease=progress*progress*(3-2*progress);
  this.x=this.jumpOrigin.x+(this.jumpDestination.x-this.jumpOrigin.x)*ease;
  this.y=this.jumpOrigin.y+(this.jumpDestination.y-this.jumpOrigin.y)*ease-Math.sin(progress*Math.PI)*18;
  this.legFoldFactor=stage==='retreat'?1-.6*progress:.4+.6*progress;
  if(progress>=1){
   this.ambushTime=0;
   if(stage==='retreat'){this.ambushStage='crouch';this.legFoldFactor=.4;}
   else{
    this.ambushStage='aggressive';this.legFoldFactor=1;
    this.webAttackCooldown=750;this.velocityX=(this.velocityX<0?-1:1)*1.6;
    this.shootWebLine();this.shootWebLine();this.lastWebAttack=Date.now();
    if(typeof playSound==='function')playSound('spider_hiss');
   }
  }
 };
})();
