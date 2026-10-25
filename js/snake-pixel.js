/* Final serpent: native pixel scales, tapered tail and venomous hatchlings. */
(() => {
 const palette={o:'#080a10',d:'#141820',s:'#242a34',l:'#454d5c',b:'#20252e',h:'#505867',r:'#b72a3d',w:'#c4c9d2'};
 function stamp(ctx,rows,x,y,size,colors=palette){rows.forEach((row,j)=>[...row].forEach((v,i)=>{if(colors[v]){ctx.fillStyle=colors[v];ctx.fillRect(Math.round(x+i*size),Math.round(y+j*size),size,size);}}));}
 function scale(ctx,x,y,r,index){const size=2;const rows=['  ooooo  ',' odsssdo ','odslssddo','odsslsddo','odslssddo',' oddbddo ','  obbbo  ','   ooo   '];stamp(ctx,rows,x-9,y-8,size);if(index%2===0){ctx.fillStyle='#555d6b';ctx.fillRect(Math.round(x-3),Math.round(y-4),3,2);}}
 const head=['   oooooo   ','  oddssddo  ',' oddslssddo ','odssssssssdo','odssssssssdo','odssssssssdo',' oddssssddo ','  oddssddo  ','  owoddowo  ','   oddddo   ','    oooo    '];
 FlyingSnakeBoss.prototype.draw=function(ctx){if(this.isDead)return;ctx.save();ctx.shadowBlur=0;ctx.imageSmoothingEnabled=false;this.drawSnaklets(ctx);
 for(let i=this.segments.length-1;i>0;i--){const p=this.segments[i],next=this.segments[i-1];const fraction=(this.segments.length-i)/this.segments.length;const r=Math.max(4,Math.round(this.segmentRadius*(.45+.55*fraction)));const dx=next.x-p.x,dy=next.y-p.y;const steps=Math.max(1,Math.ceil(Math.hypot(dx,dy)/6));
 for(let j=0;j<steps;j++){const x=p.x+dx*j/steps,y=p.y+dy*j/steps;ctx.fillStyle='#080a10';ctx.fillRect(Math.round(x-r),Math.round(y-r),r*2,r*2);ctx.fillStyle='#202630';ctx.fillRect(Math.round(x-r+2),Math.round(y-r+2),r*2-4,r*2-4);ctx.fillStyle='#303641';ctx.fillRect(Math.round(x-r+3),Math.round(y+r-5),Math.max(2,r*2-6),3);}
 if(r>=8)scale(ctx,p.x,p.y,r,i);
 }
 const h=this.segments[0];stamp(ctx,head,h.x-18,h.y-17,3);
 this.weakPoints.forEach(wp=>{const x=Math.round(h.x+wp.x),y=Math.round(h.y+wp.y);ctx.fillStyle='#080a10';ctx.fillRect(x-5,y-4,10,9);ctx.fillStyle=wp.hit?'#171a22':'#df293f';ctx.fillRect(x-4,y-3,8,6);ctx.fillStyle='#272c35';ctx.fillRect(x-1,y-3,2,7);ctx.fillStyle='#ff9a9e';ctx.fillRect(x-3,y-3,2,2);});
 const length=12+(Math.sin(this.waveOffset*3)>0?6:0);ctx.fillStyle='#b51f37';ctx.fillRect(Math.round(h.x-1),Math.round(h.y+16),3,length);ctx.fillRect(Math.round(h.x-4),Math.round(h.y+16+length),3,5);ctx.fillRect(Math.round(h.x+2),Math.round(h.y+16+length),3,5);
 ctx.restore();};
 FlyingSnakeBoss.prototype.drawSnaklets=function(ctx){for(const snake of this.snaklets){if(!snake.active)continue;for(let i=snake.segments.length-1;i>=0;i--){const p=snake.segments[i];stamp(ctx,i===0?[' oooo ','odllso','olv vlo',' osso ','  rr  ']:[' oo ','oslo','osbo',' oo '],p.x-5,p.y-5,2,{...palette,v:'#83ce52'});}
 const h=snake.segments[0];ctx.save();ctx.globalAlpha=.35;ctx.fillStyle='#454b5c';ctx.fillRect(Math.round(h.x-2),Math.round(h.y-19),3,3);ctx.fillRect(Math.round(h.x+3),Math.round(h.y-27),2,2);ctx.restore();}};
})();
