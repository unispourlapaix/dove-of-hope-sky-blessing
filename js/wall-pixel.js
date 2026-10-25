/* Masonry, fissures and articulated iron links rendered on a crisp pixel grid. */
(() => {
 function block(ctx,x,y,w,h,color){ctx.fillStyle=color;ctx.fillRect(Math.round(x),Math.round(y),w,h);}
 WallBoss.prototype.draw=function(ctx){if(this.isDead)return;ctx.save();ctx.shadowBlur=0;ctx.imageSmoothingEnabled=false;const offset=Math.round(this.shakeOffset),left=this.x-this.width/2+offset,top=this.y-this.height/2;
 block(ctx,left-3,top-3,this.width+6,this.height+6,'#302d3b');
 const colors=['#77707d','#696573','#817783','#625d6b'];
 for(let row=0;row<2;row++)for(let col=-1;col<11;col++){
  const x=col*40+(row%2)*20;const start=Math.max(0,x),end=Math.min(this.width,x+38);if(end<=start)continue;const y=top+row*20;
  block(ctx,left+start,y,end-start,18,colors[((col+1)*3+row)%4]);block(ctx,left+start+1,y+1,Math.max(1,end-start-2),2,'#a199a5');block(ctx,left+start+1,y+15,Math.max(1,end-start-2),3,'#4e495c');
  for(let k=0;k<3;k++){const tx=start+5+k*9;if(tx+3<end)block(ctx,left+tx,y+5+(col+k+20)%3*3,3,2,'#8c8190');}
 }
 // Crenellated ends frame the wall without expanding the collision surface.
 for(const side of [0,1]){if(this.collapsedTowers?.[side])continue;const x=side?left+this.width-35:left;block(ctx,x,top-24,35,24,'#514b60');block(ctx,x+2,top-22,31,3,'#8f8498');for(let i=0;i<3;i++)block(ctx,x+i*13,top-33,9,12,'#5f586e');block(ctx,x+13,top-12,8,12,'#282631');}
 this.weakPoints.forEach((wp,i)=>{const x=this.x+wp.x+offset,y=this.y;block(ctx,x-13,y-13,26,26,'#37313f');block(ctx,x-10,y-10,20,20,wp.hit?'#29232f':'#a07a92');block(ctx,x-8,y-8,16,2,wp.hit?'#655367':'#e1b9c9');block(ctx,x-2,y-6,4,12,wp.hit?'#18151e':'#503647');block(ctx,x-6,y-2,12,4,wp.hit?'#18151e':'#503647');});
 for(const crack of this.cracks){const x=this.x+crack.x+offset,y=this.y+crack.y;const length=crack.type==='major'?18:10;for(let i=0;i<length;i+=3){block(ctx,x+(i%6?2:-2),y-length/2+i,3,4,'#24212d');if(i%6===0)block(ctx,x+4,y-length/2+i,4,2,'#b49cab');}}
 this.drawChains(ctx);
 for(const tower of this.fallingTowers||[]){
  const x=tower.x-tower.width/2,y=tower.y-tower.height/2;
  block(ctx,x-2,y-2,tower.width+4,tower.height+4,'#302d3b');
  block(ctx,x,y,tower.width,tower.height,'#62576e');
  for(let row=0;row<3;row++){block(ctx,x+2,y+row*17+2,tower.width-4,2,'#a396ac');block(ctx,x+2,y+row*17+14,tower.width-4,3,'#40394e');block(ctx,x+((row%2)?12:22),y+row*17+4,2,10,'#3b3448');}
  if(!tower.rubble)for(let i=0;i<3;i++)block(ctx,x+i*13,y-8,9,10,'#6d607b');
  block(ctx,x+13,y+18,8,16,'#28222f');
 }

 for(const p of this.stoneDust||[]){ctx.save();ctx.globalAlpha=Math.max(0,p.life);block(ctx,p.x,p.y,p.size,p.size,p.color);ctx.restore();}ctx.restore();};
 WallBoss.prototype.drawChains=function(ctx){for(const chain of this.chains){if(!chain.active)continue;const x=chain.x+Math.sin(chain.swingOffset)*15;for(let i=0;i<chain.length;i+=8){const y=chain.y-chain.length+i;const wide=(i/8)%2===0;const width=wide?8:5;block(ctx,x-width/2-1,y-1,width+2,9,'#292936');block(ctx,x-width/2,y,width,7,'#8c8596');block(ctx,x-width/2+2,y+2,Math.max(1,width-4),3,'#33303f');block(ctx,x-width/2,y,2,5,'#c4bac9');}}};
 const damage=WallBoss.prototype.takeDamage;
 WallBoss.prototype.takeDamage=function(amount,x,y){const old=this.health;const result=damage.call(this,amount,x,y);
 this.collapsedTowers=this.collapsedTowers||[false,false];this.fallingTowers=this.fallingTowers||[];
 this.wallTrapThresholds=this.wallTrapThresholds||{};
 const stages=getBossTrapThresholds(this);
 if(!this.isDead)for(let index=0;index<stages.length;index++){
  const threshold=stages[index];
  if(!this.wallTrapThresholds[threshold]&&old/this.maxHealth*100>threshold&&this.health/this.maxHealth*100<=threshold){
   this.wallTrapThresholds[threshold]=true;
   const side=index===0?0:index===stages.length-1?1:-1;
   if(side>=0)this.collapsedTowers[side]=true;
   const x=side===0?this.x-this.width/2+17.5:side===1?this.x+this.width/2-17.5:this.x+(index%2?35:-35);
   this.fallingTowers.push({x,y:this.y-this.height/2,width:35,height:57,vy:1,active:true,rubble:side<0});
   this.shakeIntensity=8;if(typeof playSound==='function')playSound('wall_rumble');
  }
 }
if(this.health<old){this.stoneDust=this.stoneDust||[];for(let i=0;i<5;i++)this.stoneDust.push({x,y,vx:(Math.random()-.5)*3,vy:-Math.random()*2,life:1,size:2+i%3,color:i%2?'#9b8d9d':'#5a5266'});}return result;};
 const update=WallBoss.prototype.update;
 WallBoss.prototype.update=function(dt,px,py){update.call(this,dt,px,py);const f=dt/16.67;
 this.stoneDust=this.stoneDust||[];
 for(const tower of this.fallingTowers||[]){tower.vy+=.16*f;tower.y+=tower.vy*f;
  if(tower.y+tower.height/2>=this.canvasHeight){tower.active=false;for(let i=0;i<12;i++)this.stoneDust.push({x:tower.x+(Math.random()-.5)*35,y:this.canvasHeight-4,vx:(Math.random()-.5)*5,vy:-Math.random()*4,life:1,size:3+i%4,color:i%2?'#9b8d9d':'#5a5266'});}
 }
 this.fallingTowers=(this.fallingTowers||[]).filter(tower=>tower.active);
 for(const p of this.stoneDust||[]){p.x+=p.vx*f;p.vy+=.12*f;p.y+=p.vy*f;p.life-=.035*f;}this.stoneDust=(this.stoneDust||[]).filter(p=>p.life>0);};
 const checkChains=WallBoss.prototype.checkChainCollision;
 WallBoss.prototype.checkChainCollision=function(x,y,w,h){
  for(const tower of this.fallingTowers||[]){
   if(tower.active&&x<tower.x+tower.width/2&&x+w>tower.x-tower.width/2&&y<tower.y+tower.height/2&&y+h>tower.y-tower.height/2){tower.active=false;return true;}
  }
  return checkChains.call(this,x,y,w,h);
 };

})();
