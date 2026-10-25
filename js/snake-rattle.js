/* Preserve the original black head while giving the serpent a continuous tapered tail. */
(() => {
 FlyingSnakeBoss.prototype.getBodyRadius=function(index){const t=index/(this.segments.length-1);return Math.max(2,this.segmentRadius*Math.pow(1-t,.7));};
 // Shared mechanics (shockwaves, targeting) can use the head as the boss position.
 Object.defineProperties(FlyingSnakeBoss.prototype,{x:{get(){return this.segments[0].x;},configurable:true},y:{get(){return this.segments[0].y;},configurable:true}});
 const originalDraw=FlyingSnakeBoss.prototype.draw;
 FlyingSnakeBoss.prototype.draw=function(ctx){if(this.isDead)return;ctx.save();ctx.shadowBlur=0;this.drawSnaklets(ctx);
  for(let i=this.segments.length-1;i>0;i--){const p=this.segments[i],q=this.segments[i-1],r=this.getBodyRadius(i),r2=i===1?this.segmentRadius:this.getBodyRadius(i-1);const dx=q.x-p.x,dy=q.y-p.y,d=Math.hypot(dx,dy)||1,nx=-dy/d,ny=dx/d;
   ctx.fillStyle='#11131a';ctx.strokeStyle='#363440';ctx.lineWidth=1;
   ctx.beginPath();ctx.moveTo(p.x+nx*r,p.y+ny*r);ctx.lineTo(q.x+nx*r2,q.y+ny*r2);ctx.lineTo(q.x-nx*r2,q.y-ny*r2);ctx.lineTo(p.x-nx*r,p.y-ny*r);ctx.closePath();ctx.fill();ctx.stroke();
   ctx.beginPath();ctx.ellipse(p.x,p.y,r,r,0,0,Math.PI*2);ctx.fill();
   if(i%2===0){ctx.strokeStyle='#48434f';ctx.beginPath();ctx.moveTo(p.x-r*.4,p.y-r*.3);ctx.lineTo(p.x,p.y+1);ctx.lineTo(p.x+r*.4,p.y-r*.3);ctx.stroke();}
  }
  const tail=this.segments[this.segments.length-1],before=this.segments[this.segments.length-2];let dx=tail.x-before.x,dy=tail.y-before.y,d=Math.hypot(dx,dy)||1;dx/=d;dy/=d;
  const shake=this.rattleRemaining>0?Math.sin(this.rattleElapsed*.11)*4:0;
  for(let i=0;i<5;i++){const x=tail.x+dx*(4+i*4)-dy*shake,y=tail.y+dy*(4+i*4)+dx*shake;ctx.fillStyle=i%2?'#a3947b':'#74695d';ctx.strokeStyle='#332e30';ctx.lineWidth=1;ctx.beginPath();ctx.ellipse(x,y,Math.max(2,4-i*.4),Math.max(2,4-i*.4),0,0,Math.PI*2);ctx.fill();ctx.stroke();}
  const headOnly=Object.create(this);headOnly.segments=[this.segments[0]];headOnly.drawSnaklets=()=>{};originalDraw.call(headOnly,ctx);
  if(this.rattleRemaining>0){ctx.strokeStyle='#a8a0ba';ctx.globalAlpha=.45;ctx.lineWidth=2;for(let i=0;i<3;i++){const r=23+(this.rattleElapsed*.045+i*12)%45;ctx.beginPath();ctx.arc(this.x,this.y,r,0,Math.PI*2);ctx.stroke();}}
  ctx.restore();
 };
 function attract(boss){boss.rattleRemaining=1000;boss.rattleElapsed=0;if(typeof playSound==='function')playSound('snake_rattle');}
 const damage=FlyingSnakeBoss.prototype.takeDamage;
 FlyingSnakeBoss.prototype.takeDamage=function(amount,x,y){const before=this.health;const critical=damage.call(this,amount,x,y);
  if(!this.isDead){this.rattleThresholds=this.rattleThresholds||{};this.rattleQueue=this.rattleQueue||[];for(const threshold of getBossTrapThresholds(this))if(!this.rattleThresholds[threshold]&&before>this.maxHealth*threshold/100&&this.health<=this.maxHealth*threshold/100){this.rattleThresholds[threshold]=true;this.rattleQueue.push(threshold);}
   if(!this.rattleRemaining&&this.rattleQueue.length){this.rattleQueue.shift();attract(this);}
  }return critical;
 };
 const bossUpdate=FlyingSnakeBoss.prototype.update;
 FlyingSnakeBoss.prototype.update=function(dt,px,py){this.rattlePullFrameMs=0;if(this.isDead)return;bossUpdate.call(this,dt,px,py);
  if(!this.rattleRemaining&&this.rattleQueue?.length){this.rattleQueue.shift();attract(this);}
  if(this.rattleRemaining>0){this.rattlePullFrameMs=Math.min(dt,this.rattleRemaining);this.rattleRemaining-=this.rattlePullFrameMs;this.rattleElapsed+=this.rattlePullFrameMs;}
 };
 const gameUpdate=update;
 update=function(dt){gameUpdate(dt);const boss=bossManager.currentBoss;if(state!=='playing'||bossManager.bossType!=='flying_snake'||!boss||boss.isDead||!boss.rattlePullFrameMs)return;
  const dx=boss.x-(player.x+player.w/2),dy=boss.y-(player.y+player.h/2),distance=Math.hypot(dx,dy)||1;
  const travel=Math.min(240*boss.rattlePullFrameMs/1000,Math.max(0,distance-65));
  player.x=Math.max(0,Math.min(c.width-player.w,player.x+dx/distance*travel));player.y=Math.max(0,Math.min(c.height-player.h,player.y+dy/distance*travel));boss.rattlePullFrameMs=0;
 };
})();
