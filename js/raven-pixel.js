/* Native pixel artwork for the raven: no blur or downsampling filter. */
(() => {
 const colors={o:'#292c32',d:'#3b3f47',m:'#505660',l:'#707782',h:'#959ca6',g:'#d7b877',p:'#de98b4',v:'#438b39',n:'#a1e75b',w:'#e5ffc5'};
 function stamp(ctx,rows,x,y,size,palette=colors){rows.forEach((row,j)=>[...row].forEach((v,i)=>{if(palette[v]){ctx.fillStyle=palette[v];ctx.fillRect(Math.round(x+i*size),Math.round(y+j*size),size,size);}}));}
 const body=['    ooooo    ','   odmmmdo   ','  odmlhmmdo  ',' odmmmmmmmdo ',' odmmmlmmmdo ','odmmmmmmmmmdo','odmmldmmmmmdo','odmmmmmmldmdo','odmmmdmmmmmdo',' oddmmmmmddo ',' oddmmlddddo ','  odddddddo  ','   odddddo   ','    odddo    ','    ododo    ','    o o o    '];
 const wing=['         oo','       oodo','     oodmdo','   oodmmdo ',' oodmmlmdo ','odmmlmmdo  ',' odmmddo   ','  oddo     ','   oo      '];
 BlackRavenBoss.prototype.draw=function(ctx){if(this.isDead)return;ctx.save();ctx.shadowBlur=0;ctx.imageSmoothingEnabled=false;this.drawLieMessages(ctx);this.drawFeathers(ctx);
 const beat=Math.sin(this.wingFlapOffset)>0?-8:5;
 const leftWing=wing.map(row=>[...row.padEnd(10)].reverse().join(''));
 stamp(ctx,leftWing,this.x-65,this.y-25+beat,5);
 stamp(ctx,wing,this.x+14,this.y-25+beat,5);
 stamp(ctx,body,this.x-32,this.y-34,5);
 // Tapered crown, beak and talons define the silhouette.
 stamp(ctx,[' o   o ','odo odo','odmmmdo',' odldo '],this.x-14,this.y-46,4);
 // Heavy hooked raven bill, with a clear lower jaw when calling.
 const bill=this.isAttacking?
 [' ooooooo       ',
  ' okkkhhhoo     ',
  ' okkkmmmhho    ',
  '  okkkmmmhho   ',
  '   okkkmmmhho  ',
  '    okkkmmhho  ',
  '     okkmmhho  ',
  '      okmmhko  ',
  '       oooo oo ',
  '        oo  oo ',
  '        okko   ',
  '         okko  ',
  '          oko  ',
  '           oo  ']:
 [' ooooooo       ',
  ' okkkhhhoo     ',
  ' okkkmmmhho    ',
  '  okkkmmmhho   ',
  '   okkkmmmhho  ',
  '    okkkmmhho  ',
  '     okkmmhho  ',
  '      okmmhko  ',
  '       okmhko  ',
  '        omhko  ',
  '         ohko  ',
  '          oko  ',
  '           oo  ',
  '            o  '];
 stamp(ctx,bill,this.x-16,this.y-10,4,{o:'#24232e',k:'#383943',m:'#858b96',h:'#bec4cd'});

 // Two scaly feet with long separated hooked talons.
 stamp(ctx,[' oo      oo ',' ogo    ogo ',' ogo    ogo ','oggo    oggo','ogggo  ogggo','ogogoooogogo','o o oo o o o','  o      o  '],this.x-24,this.y+37,4);
 this.weakPoints.forEach(wp=>{const x=Math.round(this.x+wp.x),y=Math.round(this.y+wp.y);ctx.fillStyle='#302c48';ctx.fillRect(x-6,y-6,12,12);ctx.fillStyle='#080b10';ctx.fillRect(x-4,y-4,8,8);ctx.fillStyle='#576575';ctx.fillRect(x-3,y+2,5,2);ctx.fillStyle='#f2f7ff';ctx.fillRect(x-3,y-3,3,3);ctx.fillStyle='#a2b8cc';ctx.fillRect(x+2,y+1,2,2);if(wp.hit){ctx.fillStyle='#f2dc9c';ctx.fillRect(x-6,y+6,12,2);}});
 if(this.isAttacking){ctx.fillStyle='#c9b5da';for(let i=0;i<3;i++){ctx.fillRect(this.x+36+i*9,this.y-12-i*5,4,4);ctx.fillRect(this.x+36+i*9,this.y+4+i*5,4,4);}}
 ctx.restore();};
 BlackRavenBoss.prototype.drawFeathers=function(ctx){for(const f of this.poisonFeathers){if(!f.active)continue;ctx.save();ctx.shadowBlur=0;const size=Math.max(2,Math.round(f.size/6));
 ctx.globalAlpha=.35;ctx.fillStyle='#c99e76';for(let i=1;i<=3;i++)ctx.fillRect(Math.round(f.x-f.velocityX*i*3),Math.round(f.y-f.velocityY*i*3),4,4);ctx.globalAlpha=1;
 const rows=['  oo ',' onvo','onmvo','olnvo','onvo ',' vo  ',' o   '];stamp(ctx,rows,f.x-2*size,f.y-3*size,size,{o:'#76543e',n:'#dbb58b',v:'#bb8c62',m:'#c99e76',l:'#f2d8b7'});ctx.restore();}};
 BlackRavenBoss.prototype.drawLieMessages=function(ctx){for(const m of this.lieMessages){if(!m.active)continue;ctx.save();ctx.globalAlpha=Math.max(0,m.opacity);ctx.shadowBlur=0;ctx.font='bold 11px monospace';ctx.textAlign='center';const width=Math.min(this.canvasWidth-24,ctx.measureText(m.text).width+20);const x=Math.max(width/2+6,Math.min(this.canvasWidth-width/2-6,m.x));const y=Math.max(40,m.y);ctx.fillStyle='#665477';ctx.fillRect(Math.round(x-width/2)-2,Math.round(y)-14,width+4,24);ctx.fillStyle='#f2d7e5';ctx.fillRect(Math.round(x-width/2),Math.round(y)-12,width,20);ctx.fillStyle='#6a4563';ctx.fillText(m.text,x,y+2,width-8);ctx.restore();}};
})();
// The raven hurls a huge, visibly smelly camembert at 50% and 20% health.
(() => {
 const cheeseRadius=76,sliceAngle=-2.2,sliceHalf=.42;
 function inSlice(dx,dy){return Math.abs(Math.atan2(Math.sin(Math.atan2(dy,dx)-sliceAngle),Math.cos(Math.atan2(dy,dx)-sliceAngle)))<sliceHalf;}
 function cheese(ctx,x,y,scale=1,age=0){ctx.save();ctx.shadowBlur=0;
  for(let puff=0;puff<6;puff++){const phase=(age/850+puff*.16)%1;const px=x+(puff-2.5)*20*scale+Math.sin(age/160+puff)*4,py=y-45*scale-phase*50*scale;ctx.globalAlpha=(1-phase)*.5;ctx.fillStyle=puff%2?'#b5c17c':'#7f9b5c';ctx.fillRect(Math.round(px),Math.round(py),8*scale,8*scale);ctx.fillRect(Math.round(px+4*scale),Math.round(py-7*scale),5*scale,8*scale);}
  ctx.globalAlpha=1;
  // Circular overhead view, with a triangular missing slice facing the raven's beak.
  const step=6;
  for(let dy=-78;dy<=78;dy+=step)for(let dx=-78;dx<=78;dx+=step){
   const distance=Math.hypot(dx,dy);if(distance>cheeseRadius||inSlice(dx,dy))continue;
   const angleDiff=Math.abs(Math.atan2(Math.sin(Math.atan2(dy,dx)-sliceAngle),Math.cos(Math.atan2(dy,dx)-sliceAngle)));
   const cutEdge=angleDiff<sliceHalf+.1&&distance>10;
   ctx.fillStyle=distance>70?'#aa9674':cutEdge?'#dab45d':distance>64?'#e0d5b2':((dx/step+dy/step*3+99)%13===0?'#dfd8bd':'#fff5dc');
   ctx.fillRect(Math.round(x+dx*scale),Math.round(y+dy*scale),Math.ceil(step*scale),Math.ceil(step*scale));
  }
  ctx.restore();
 }
 function prepare(boss){boss.cheeseCharge=700;boss.cheeseOrigin={x:boss.x,y:boss.y};}
 const damage=BlackRavenBoss.prototype.takeDamage;
 BlackRavenBoss.prototype.takeDamage=function(amount,x,y){const before=this.health;const critical=damage.call(this,amount,x,y);
  if(!this.isDead){this.cheeseThresholds=this.cheeseThresholds||{};this.cheeseQueue=this.cheeseQueue||[];for(const threshold of getBossTrapThresholds(this))if(!this.cheeseThresholds[threshold]&&before>this.maxHealth*threshold/100&&this.health<=this.maxHealth*threshold/100){this.cheeseThresholds[threshold]=true;this.cheeseQueue.push(threshold);}
   if(!this.cheeseCharge&&this.cheeseQueue.length){this.cheeseQueue.shift();prepare(this);}
  }return critical;
 };
 const update=BlackRavenBoss.prototype.update;
 BlackRavenBoss.prototype.update=function(dt,px,py){if(this.isDead)return;update.call(this,dt,px,py);this.camemberts=this.camemberts||[];
  if(!this.cheeseCharge&&this.cheeseQueue?.length){this.cheeseQueue.shift();prepare(this);}
  if(this.cheeseCharge>0){this.x=this.cheeseOrigin.x;this.y=this.cheeseOrigin.y;this.cheeseCharge=Math.max(0,this.cheeseCharge-dt);
   if(this.cheeseCharge===0){const vx=Math.max(-1.5,Math.min(1.5,(px-this.x)/100));this.camemberts.push({x:Math.min(this.canvasWidth-80,this.x+55),y:this.y+66,vx,vy:1.5,age:0,active:true});if(typeof playSound==='function')playSound('raven_caw');}
  }
  for(const item of this.camemberts){if(!item.active)continue;const f=dt/16.67;item.vy=Math.min(5,item.vy+.06*f);item.x+=item.vx*f;item.y+=item.vy*f;item.age+=dt;if(item.x<80){item.x=80;item.vx=Math.abs(item.vx);}if(item.x>this.canvasWidth-80){item.x=this.canvasWidth-80;item.vx=-Math.abs(item.vx);}if(item.y-80>this.canvasHeight)item.active=false;}
  this.camemberts=this.camemberts.filter(item=>item.active);
 };
 const draw=BlackRavenBoss.prototype.draw;
 BlackRavenBoss.prototype.draw=function(ctx){if(this.isDead)return;for(const item of this.camemberts||[])if(item.active)cheese(ctx,item.x,item.y,1,item.age);draw.call(this,ctx);if(this.cheeseCharge>0)cheese(ctx,Math.min(this.canvasWidth-80,this.x+55),this.y+66,.8+.2*(1-this.cheeseCharge/700),700-this.cheeseCharge);};
 const collision=BlackRavenBoss.prototype.checkFeatherCollision;
 BlackRavenBoss.prototype.checkFeatherCollision=function(x,y,w,h){
  for(const item of this.camemberts||[]){if(!item.active)continue;
   const points=[[x,y],[x+w,y],[x,y+h],[x+w,y+h],[x+w/2,y+h/2],[x+w/2,y],[x+w/2,y+h],[x,y+h/2],[x+w,y+h/2]];
   if(points.some(([px,py])=>Math.hypot(px-item.x,py-item.y)<cheeseRadius&&!inSlice(px-item.x,py-item.y))){item.active=false;return true;}
  }
  return collision.call(this,x,y,w,h);
 };

})();
