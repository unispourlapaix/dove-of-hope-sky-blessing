/* Black storm boss with committed, telegraphed lightning paths. */
(() => {
 function pixelLine(ctx,x1,y1,x2,y2,size,color,dashed=false){const steps=Math.max(1,Math.ceil(Math.hypot(x2-x1,y2-y1)/3));ctx.fillStyle=color;for(let i=0;i<=steps;i++){if(dashed&&i%8>3)continue;ctx.fillRect(Math.round((x1+(x2-x1)*i/steps)/3)*3,Math.round((y1+(y2-y1)*i/steps)/3)*3,size,size);}}
 DarkCloudBoss.prototype.strikeLightning=function(px,py){
  const target=Math.max(24,Math.min(this.canvasWidth-24,px));
  const startX=this.x,startY=this.y+this.height/2;
  this.lightnings.push({startX,startY,targetX:target,segments:this.generateLightningPath(startX,startY,target,this.canvasHeight-15),warning:true,remaining:600,lifetime:280,active:true});
 };
 DarkCloudBoss.prototype.updateLightnings=function(f){for(const lightning of this.lightnings){if(!lightning.active)continue;lightning.remaining-=f*16.67;if(lightning.remaining<=0){if(lightning.warning){lightning.warning=false;lightning.remaining+=lightning.lifetime;this.lightningFlash=.35;if(typeof playSound==='function')playSound('thunder');if(lightning.remaining<=0)lightning.active=false;}else lightning.active=false;}}this.lightnings=this.lightnings.filter(l=>l.active);};
 DarkCloudBoss.prototype.checkLightningCollision=function(x,y,w,h){for(const lightning of this.lightnings){if(!lightning.active||lightning.warning)continue;for(const seg of lightning.segments){if(this.pointToLineDistance(x+w/2,y+h/2,seg.x1,seg.y1,seg.x2,seg.y2)<12){lightning.active=false;return true;}}}return false;};
 // Pixelise the original organic cloud alone; keep rain thin and lightning readable.
 const originalCloudDraw=DarkCloudBoss.prototype.draw;
 let cloudLayer=null,cloudPen=null;
 DarkCloudBoss.prototype.draw=function(ctx){
  if(this.isDead)return;
  if(!cloudLayer){cloudLayer=document.createElement('canvas');cloudPen=cloudLayer.getContext('2d');}
  const pixel=4,width=Math.ceil(this.canvasWidth/pixel),height=Math.ceil(this.canvasHeight/pixel);
  if(cloudLayer.width!==width||cloudLayer.height!==height){cloudLayer.width=width;cloudLayer.height=height;}
  ctx.save();ctx.shadowBlur=0;
  this.drawLightnings(ctx);this.drawDarkRain(ctx);
  // Slow, translucent grey-to-white mist follows the cloud's original lobes.
  for(let i=0;i<20;i++){
   const angle=i*Math.PI*2/20;
   const drift=Math.sin(this.pulseOffset*.4+i)*7;
   const cx=this.x+Math.cos(angle)*(90+drift),cy=this.y+Math.sin(angle)*43;
   const radius=14+i%4*3;
   for(let y=-radius;y<=radius;y+=4){
    const half=Math.sqrt(Math.max(0,radius*radius-y*y));
    ctx.globalAlpha=.12;ctx.fillStyle=i%3===0?'#f2f2f4':i%3===1?'#c4c4cb':'#8b8b99';
    ctx.fillRect(Math.round((cx-half)/4)*4,Math.round((cy+y)/4)*4,Math.ceil(half*2/4)*4,4);
   }
  }
  ctx.globalAlpha=1;
  cloudPen.clearRect(0,0,width,height);cloudPen.save();cloudPen.scale(1/pixel,1/pixel);
  const cloudOnly=Object.create(this);cloudOnly.drawLightnings=()=>{};cloudOnly.drawDarkRain=()=>{};cloudOnly.lightningFlash=0;
  originalCloudDraw.call(cloudOnly,cloudPen);cloudPen.restore();
  ctx.imageSmoothingEnabled=false;ctx.drawImage(cloudLayer,0,0,width,height,0,0,this.canvasWidth,this.canvasHeight);
  ctx.restore();
 };
 const originalLightningDraw=DarkCloudBoss.prototype.drawLightnings;
 DarkCloudBoss.prototype.drawLightnings=function(ctx){
  for(const lightning of this.lightnings){if(!lightning.active||!lightning.warning)continue;ctx.save();ctx.globalAlpha=.65;for(const seg of lightning.segments)pixelLine(ctx,seg.x1,seg.y1,seg.x2,seg.y2,2,'#d6dce5',true);ctx.restore();}
  const activeView=Object.create(this);activeView.lightnings=this.lightnings.filter(l=>l.active&&!l.warning);originalLightningDraw.call(activeView,ctx);
 };
 // Preserve the original black drop projectiles and their original collision bounds.
 // White weather streaks are rendered separately by drawRain(stormRain) and drawDecorativeRain.

})();
// At half health and one fifth health the storm releases twelve thunderclouds.
(() => {
 function beginStormBurst(boss){boss.stormBurstRemaining=1000;boss.stormBurstOrigin={x:boss.x,y:boss.y};if(typeof playSound==='function')playSound('thunder');}
 const takeDamage=DarkCloudBoss.prototype.takeDamage;
 DarkCloudBoss.prototype.takeDamage=function(amount,x,y){const before=this.health;const critical=takeDamage.call(this,amount,x,y);
  if(!this.isDead){this.stormBurstThresholds=this.stormBurstThresholds||{};this.stormBurstQueue=this.stormBurstQueue||[];
   for(const threshold of getBossTrapThresholds(this))if(!this.stormBurstThresholds[threshold]&&before>this.maxHealth*threshold/100&&this.health<=this.maxHealth*threshold/100){this.stormBurstThresholds[threshold]=true;this.stormBurstQueue.push(threshold);}
   if(!this.stormBurstRemaining&&this.stormBurstQueue.length){this.stormBurstQueue.shift();beginStormBurst(this);}
  }return critical;
 };
 const update=DarkCloudBoss.prototype.update;
 DarkCloudBoss.prototype.update=function(dt,px,py){if(this.isDead)return;
  if(!this.stormBurstRemaining&&this.stormBurstQueue?.length){this.stormBurstQueue.shift();beginStormBurst(this);}
  update.call(this,dt,px,py);
  if(this.stormBurstRemaining>0){this.stormBurstRemaining=Math.max(0,this.stormBurstRemaining-dt);this.stormShake=Math.sin((1000-this.stormBurstRemaining)*.12)*5;
   if(this.stormBurstRemaining===0){this.stormShake=0;this.stormMiniClouds=this.stormMiniClouds||[];
    for(let i=0;i<12;i++){const angle=i*Math.PI*2/12;this.stormMiniClouds.push({x:this.x+Math.cos(angle)*46,y:this.y+Math.sin(angle)*24,vx:Math.cos(angle)*1.7,vy:1.8+Math.sin(angle)*1.2,age:0,fired:false,active:true});}
    this.stormBurstFlash=250;if(typeof playSound==='function')playSound('thunder');
   }
  }
  this.stormBurstFlash=Math.max(0,(this.stormBurstFlash||0)-dt);
  const f=dt/16.67;
  for(const cloud of this.stormMiniClouds||[]){if(!cloud.active)continue;cloud.age+=dt;cloud.x+=cloud.vx*f;cloud.y+=cloud.vy*f;
   if(cloud.x<18){cloud.x=18;cloud.vx=Math.abs(cloud.vx);}if(cloud.x>this.canvasWidth-18){cloud.x=this.canvasWidth-18;cloud.vx=-Math.abs(cloud.vx);}
   if(!cloud.fired&&cloud.age>=600){cloud.fired=true;const endY=Math.min(this.canvasHeight-8,cloud.y+110);this.lightnings.push({startX:cloud.x,startY:cloud.y+8,targetX:cloud.x,segments:this.generateLightningPath(cloud.x,cloud.y+8,cloud.x,endY),warning:true,remaining:600,lifetime:230,active:true});}
   if(cloud.y>this.canvasHeight+20||cloud.age>4500)cloud.active=false;
  }
  this.stormMiniClouds=(this.stormMiniClouds||[]).filter(cloud=>cloud.active);
 };
 const draw=DarkCloudBoss.prototype.draw;
 DarkCloudBoss.prototype.draw=function(ctx){if(this.isDead)return;
  if(this.stormShake){const shaken=Object.create(this);shaken.x=this.x+this.stormShake;draw.call(shaken,ctx);}else draw.call(this,ctx);
  ctx.save();ctx.shadowBlur=0;ctx.imageSmoothingEnabled=false;
  for(const cloud of this.stormMiniClouds||[]){const rows=['   ooooo   ',' oosssssoo ','osllllsssso','ossssssssso',' ossssssso ','  ooooooo  '];const colors={o:'#4c4b59',s:'#8f8c99',l:'#d2ced6'};
   rows.forEach((row,j)=>[...row].forEach((v,i)=>{if(colors[v]){ctx.fillStyle=colors[v];ctx.fillRect(Math.round(cloud.x-16+i*3),Math.round(cloud.y-9+j*3),3,3);}}));
   ctx.fillStyle='#e5def6';ctx.fillRect(Math.round(cloud.x-3),Math.round(cloud.y+5),3,3);ctx.fillRect(Math.round(cloud.x-5),Math.round(cloud.y+8),3,3);ctx.fillRect(Math.round(cloud.x-2),Math.round(cloud.y+11),3,3);
  }
  if(this.stormBurstFlash>0){ctx.globalAlpha=this.stormBurstFlash/250*.35;ctx.fillStyle='#d5d0dd';for(let i=0;i<16;i++){const a=i*Math.PI*2/16,r=55+(250-this.stormBurstFlash)*.2;ctx.fillRect(Math.round(this.x+Math.cos(a)*r),Math.round(this.y+Math.sin(a)*r*.6),5,5);}}
  ctx.restore();
 };
 const collision=DarkCloudBoss.prototype.checkDarkRainCollision;
 DarkCloudBoss.prototype.checkDarkRainCollision=function(x,y,w,h){for(const cloud of this.stormMiniClouds||[]){if(cloud.active&&x<cloud.x+15&&x+w>cloud.x-15&&y<cloud.y+8&&y+h>cloud.y-8){cloud.active=false;return true;}}return collision.call(this,x,y,w,h);};
})();
