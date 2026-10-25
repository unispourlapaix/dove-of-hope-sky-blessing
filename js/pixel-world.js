/* Hand-drawn pixel sprites; coordinates retain the original collision boxes. */
(() => {
 const ink='#665778', cream='#fff4df', shade='#d6c8e6', pink='#efa9bd', gold='#f4d997';
 function sprite(rows,x,y,size,palette){ctx.save();ctx.shadowBlur=0;ctx.imageSmoothingEnabled=false;rows.forEach((row,j)=>[...row].forEach((v,i)=>{if(palette[v]){ctx.fillStyle=palette[v];ctx.fillRect(Math.round(x+i*size),Math.round(y+j*size),size,size);}}));ctx.restore();}
 const palette={o:ink,w:cream,s:shade,p:pink,g:gold,b:'#9ebfdc',l:'#c1d9d2'};
 const cloud=['    oooooooo    ','  oowwwwwwwwoo  ',' owwwwwwwwwwwwo ','owwwwwwwwwwwwwwo','owwsswwswwsswwwo',' osssssssssssso ','   oooooooooo   '];
 const dove=['      o      ','     owo     ','o    owo    o','owo owwwo owo','owwoswwwsowwo',' owwswwwswwo ','  owswwwswo  ','   owwwwwo   ','     owo     ','     oso     '];
 const heart=[' oo oo ','owwowwo','owwwwwo',' owwwo ','  owo  ','   o   '];
 const star=['   g   ','  gwg  ','ggwwwgg',' gwwwg ',' gwgwg ',' g   g '];
 drawPlayer=function(){const beat=Math.sin(Date.now()*.014)>0?0:2;sprite(dove,player.x-1,player.y+beat,3,palette);if(umbrella){
 ctx.save();ctx.shadowBlur=0;
 const shieldColors=['#aa82c5','#78b9d4','#94d1ba','#f0ce83'];
 for(let ring=0;ring<shieldColors.length;ring++){
  ctx.fillStyle=shieldColors[ring];ctx.globalAlpha=.85;
  const radius=49-ring*3;
  for(let i=0;i<100;i++){const angle=i*Math.PI*2/100;ctx.fillRect(Math.round((player.x+20+Math.cos(angle)*radius)/3)*3,Math.round((player.y+15+Math.sin(angle)*radius)/3)*3,3,3);}
 }
 ctx.globalAlpha=.9;ctx.fillStyle='#fff5dd';ctx.fillRect(Math.round(player.x-15),Math.round(player.y-14),3,8);ctx.fillRect(Math.round(player.x-12),Math.round(player.y-17),6,3);ctx.restore();
}if(electric||multi){sprite(star,player.x+32,player.y-8,2,palette);}if(starCount>0){sprite(star,player.x+13,player.y-23,2,palette);ctx.save();ctx.font='bold 10px monospace';ctx.fillStyle=ink;ctx.fillText('x'+starCount,player.x+30,player.y-10);ctx.restore();}};
 drawCloud=function(cl){
  // Dark scalloped mass, cold highlights and a jagged storm underside.
  sprite(['      ooooo      ','   ooowwwwwooo   ','  owwwswwswwwwo  ',' owwsswwwwsswwwo ','owwssssssssssswo','owsssssssssssswo',' osssosssosssso ','  ooo ooo oooo  '],cl.x,cl.y,3,{...palette,o:'#49435f',w:cl.shoot?'#867d9e':'#a097b1',s:cl.shoot?'#625c7e':'#79718f'});
  sprite(['oo    oo',' oo  oo ','  b  b  '],cl.x+12,cl.y+9,3,{o:'#3c364f',b:cl.shoot?'#f0b4c8':'#ced3e5'});
  if(cl.shoot){sprite(['  b ',' bb ','bb  ',' bb ',' b  '],cl.x+21,cl.y+22,2,{b:'#94dce7'});}
 };
 drawBackgroundCloud=function(bg){ctx.save();ctx.globalAlpha=bg.opacity;sprite(cloud,bg.x,bg.y,Math.max(2,Math.round(bg.size/8)),{...palette,o:'#d5c4df',s:'#eee3ed'});ctx.restore();};
 drawRain=function(r){if(r.stormRain){ctx.save();ctx.shadowBlur=0;ctx.strokeStyle='#ffffff';ctx.lineWidth=1;ctx.globalAlpha=.55;ctx.beginPath();ctx.moveTo(r.x,r.y);ctx.lineTo(r.x-2,r.y+(r.l||16));ctx.stroke();ctx.restore();return;}sprite(['  oo  ',' obbo ','obwbbo','obbbbo',' oss o','  oo  '],r.x-6,r.y-8,3,{o:'#701d2b',b:'#de3546',w:'#ffc5ba',s:'#a71e32'});};
 drawDecorativeRain=function(r){ctx.save();ctx.globalAlpha=.35;ctx.fillStyle='#ffffff';ctx.fillRect(Math.round(r.x),Math.round(r.y),2,7);ctx.restore();};
 drawBullet=function(b){const tint=b.fan?b.c:'#4baecb';const highlight=b.fan?(b.vx<0?'#ffe1ef':b.vx>0?'#fff0b7':'#d8fbff'):'#d8fbff';sprite(b.fan?[' bb ','bwwb','bwwb','bssb',' ss ']:[' b ','bwb','bwb','bsb',' s '],b.x,b.y,2,{b:tint,w:highlight,s:tint});};
 drawHeart=function(h){ctx.save();ctx.globalAlpha=Math.max(0,h.life);sprite(heart,h.x-h.size/2,h.y-h.size/2,Math.max(1,Math.round(h.size/7)),{...palette,w:pink});ctx.restore();};
 drawPowerUp=function(p){const x=p.x,y=p.y;const icon=p.type==='star'?star:p.type==='heart'?heart:p.type==='electric'?['   gg ','  gwg ',' gww  ','  wg  ',' gw   ',' g    ']:p.type==='rainbow'?['  ppp  ',' pgggp ','pgl l gp','gl   lg']:p.type==='umbrella'?['  ppp  ',' pwwwp ','pwwwwwp','   o   ','   oo  ']:p.type==='speed'?['   gg ','  gwg ',' gww  ','  wg  ',' gw   ',' g    ']:['g g g','w w w','w w w','g g g'];sprite([' oooooooo ','owwwwwwwwo','owsssssswo','owsssssswo','owsssssswo','owsssssswo','owsssssswo','owwwwwwwwo',' oooooooo '],x-2,y-2,3,palette);sprite(icon,x+3,y+3,3,palette);};
 drawBonusItem=function(item){sprite(item.name==='heart'?heart: item.name==='cross'?['  ww  ','  ww  ','wwwwww','  ww  ','  ww  ','  ww  ']:star,item.x,item.y,4,{...palette,w:item.name==='heart'?pink:cream});};
 drawParticle=function(p){ctx.save();ctx.globalAlpha=Math.max(0,p.life);ctx.fillStyle=[pink,gold,'#b6d9cf'][Math.abs(Math.floor(p.x))%3];ctx.fillRect(Math.round(p.x/2)*2,Math.round(p.y/2)*2,3,3);ctx.restore();};
 drawShockwave=function(wave){
  if(wave.radius<=0)return;
  ctx.save();ctx.shadowBlur=0;ctx.globalAlpha=Math.max(.25,wave.opacity);
  const count=Math.max(32,Math.ceil(2*Math.PI*wave.radius/5));
  for(let ring=0;ring<2;ring++){
   const radius=wave.radius*(ring===0?1:.82);ctx.fillStyle=ring===0?'#e9bd43':'#fff8d2';
   for(let i=0;i<count;i++){const a=i/count*Math.PI*2;ctx.fillRect(Math.round((wave.x+Math.cos(a)*radius)/3)*3,Math.round((wave.y+Math.sin(a)*radius)/3)*3,ring===0?7:4,ring===0?7:4);}
  }ctx.restore();
 };

 // Render the existing animated bosses on a coarse pixel grid, preserving attacks.
 const bossDraw=bossManager.draw.bind(bossManager), layer=document.createElement('canvas'), pen=layer.getContext('2d');
 bossManager.draw=function(target){if((this.bossType==='black_raven'||this.bossType==='flying_snake'||this.bossType==='crazy_chicken'||this.bossType==='grim_reaper'||this.bossType==='spider'||this.bossType==='wall'||this.bossType==='dark_cloud')&&this.currentBoss){this.currentBoss.draw(target);return;}const w=Math.ceil(c.width/3),h=Math.ceil(c.height/3);if(layer.width!==w||layer.height!==h){layer.width=w;layer.height=h;}pen.clearRect(0,0,w,h);pen.save();pen.scale(1/3,1/3);bossDraw(pen);pen.restore();target.save();target.imageSmoothingEnabled=false;target.filter='saturate(0.65)';target.drawImage(layer,0,0,w,h,0,0,c.width,c.height);target.restore();};
})();
