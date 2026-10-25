(() => {
 // title, invitation, share, save image, copy, copied, close, another cat
 const copy={
 fr:['Partager un peu d’espoir','Une petite colombe, un grand espoir. Viens jouer à Dove of Hope !','Partager','Enregistrer l’image','Copier le message','Message copié','Fermer','Un autre chat'],
 en:['Share a little hope','A little dove, a great hope. Come play Dove of Hope!','Share','Save image','Copy message','Message copied','Close','Another cat'],
 es:['Comparte esperanza','Una pequeña paloma, una gran esperanza. ¡Ven a jugar a Dove of Hope!','Compartir','Guardar imagen','Copiar mensaje','Mensaje copiado','Cerrar','Otro gato'],
 de:['Teile ein wenig Hoffnung','Eine kleine Taube, eine große Hoffnung. Spiele Dove of Hope!','Teilen','Bild speichern','Nachricht kopieren','Nachricht kopiert','Schließen','Andere Katze'],
 it:['Condividi la speranza','Una piccola colomba, una grande speranza. Gioca a Dove of Hope!','Condividi','Salva immagine','Copia messaggio','Messaggio copiato','Chiudi','Un altro gatto'],
 pt:['Partilhe esperança','Uma pequena pomba, uma grande esperança. Venha jogar Dove of Hope!','Partilhar','Guardar imagem','Copiar mensagem','Mensagem copiada','Fechar','Outro gato'],
 ru:['Поделись надеждой','Маленький голубь, большая надежда. Играй в Dove of Hope!','Поделиться','Сохранить картинку','Копировать сообщение','Сообщение скопировано','Закрыть','Другой кот'],
 ar:['شارك بعض الأمل','حمامة صغيرة وأمل كبير. تعال والعب Dove of Hope!','مشاركة','حفظ الصورة','نسخ الرسالة','تم نسخ الرسالة','إغلاق','قطة أخرى'],
 hi:['थोड़ी आशा बाँटें','नन्हा कबूतर, बड़ी आशा। Dove of Hope खेलें!','साझा करें','चित्र सहेजें','संदेश कॉपी करें','संदेश कॉपी हुआ','बंद करें','दूसरी बिल्ली'],
 ja:['希望を分かち合おう','小さな鳩、大きな希望。Dove of Hopeで遊ぼう！','共有','画像を保存','メッセージをコピー','コピーしました','閉じる','別の猫'],
 ko:['희망을 나눠요','작은 비둘기, 커다란 희망. Dove of Hope를 즐겨 보세요!','공유','이미지 저장','메시지 복사','복사했어요','닫기','다른 고양이'],
 zh:['分享一份希望','小小的鸽子，大大的希望。来玩 Dove of Hope！','分享','保存图片','复制消息','已复制消息','关闭','另一只猫'],
 sw:['Shiriki tumaini','Njiwa mdogo, tumaini kubwa. Njoo ucheze Dove of Hope!','Shiriki','Hifadhi picha','Nakili ujumbe','Ujumbe umenakiliwa','Funga','Paka mwingine'],
 pl:['Podziel się nadzieją','Mały gołąb, wielka nadzieja. Zagraj w Dove of Hope!','Udostępnij','Zapisz obraz','Kopiuj wiadomość','Skopiowano wiadomość','Zamknij','Inny kot']};
 window.getShareLabel=()=> (copy[currentLang]||copy.en)[2];
 const url='https://github.com/unispourlapaix/dove-of-hope-sky-blessing';
 const rows=['  oo       oo  ','  owo     owo  ','  owpooooopwo  ','  owwwwwwwwwo  ',' owwwwwwwwwwwo ',' owwowwwwowwwo ',' owwowwwwowwwo ',' owppwwpwwppwo ','  owwwowowwwo  ','   owwwwwwwo   ','  owwwssswwwo o','  owwwwwwwwwowo','   oowwoowwoo  ','    ooo ooo    '];
 let last=-1;
 window.getBraveCatMarkup=function(){
  const colors={o:'#655477',w:'#fff0d7',p:'#efa7b9',s:'#b9a6c7'};
  const pixels=rows.flatMap((row,y)=>[...row].map((v,x)=>colors[v]?`<rect x="${x}" y="${y}" width="1" height="1" fill="${colors[v]}"/>`:'')).join('');
  return `<svg viewBox="-2 -1 19 17" shape-rendering="crispEdges" aria-hidden="true"><path d="M1 8H12L15 15H-1Z" fill="#bb6689"/>${pixels}<path d="M4 9H11V10H8V12H7V10H4Z" fill="#ba6588"/><rect x="7" y="11" width="2" height="2" fill="#e3b84c"/><rect x="7" y="11" width="1" height="1" fill="#fff1a8"/></svg>`;
 };
 window.showShareScore=()=>window.showShareCats({score:true});
 window.showShareCats=function(options={}){
  if(document.getElementById('share-screen'))return;
  const text=[...(copy[currentLang]||copy.en)],previousState=state;
  const isScore=options.score===true;
  const bestScore=Math.max(Number(gameData.highScore)||0,Number(playerProfile.bestScore)||0,Number(score)||0);
  const bestLevel=Math.max(Number(gameData.highestLevelReached)||1,Number(playerProfile.highestLevel)||1,Number(level)||1);
  if(isScore){text[0]=t('treasure.share_score');text[1]=t('export.courage_message')+' · '+t('export.score_label')+' : '+bestScore.toLocaleString(currentLang)+' · '+t('export.level_label')+' : '+bestLevel;}
if(state==='playing')state='paused';
  const screen=document.createElement('div');screen.id='share-screen';screen.className='share-screen';screen.dir=currentLang==='ar'?'rtl':'ltr';screen.setAttribute('role','dialog');screen.setAttribute('aria-modal','true');screen.setAttribute('aria-label',text[0]);
  const card=document.createElement('section');card.className='share-card pixel-dialog';
  const heading=document.createElement('h2');heading.textContent=text[0];card.append(heading);
  const canvas=document.createElement('canvas');canvas.width=600;canvas.height=700;canvas.className='share-preview';card.append(canvas);
  const caption=document.createElement('p');caption.textContent=text[1];card.append(caption);
  const actions=document.createElement('div');actions.className='share-actions';card.append(actions);
  const status=document.createElement('p');status.setAttribute('role','status');card.append(status);
  let closed=false;
  function close(){if(closed)return;closed=true;screen.remove();if(previousState==='playing'&&state==='paused')state='playing';document.removeEventListener('keydown',escape);document.getElementById('menuButton').focus();}
  const escape=e=>{if(e.key==='Escape')close();};document.addEventListener('keydown',escape);
  function button(label,action){const b=document.createElement('button');b.type='button';b.textContent=label;b.addEventListener('click',action);actions.append(b);return b;}
  function paint(){const colors=['#fff0d7','#dfd5ef','#d3e7e0','#f4d0dc','#f5dabd','#d2e3f1'];let choice=Math.floor(Math.random()*colors.length);if(choice===last)choice=(choice+1)%colors.length;last=choice;
   const p=canvas.getContext('2d');p.imageSmoothingEnabled=false;p.fillStyle='#d9c9eb';p.fillRect(0,0,600,700);p.fillStyle='#fff3e4';p.fillRect(20,20,560,660);p.fillStyle='#c7accf';for(let y=26;y<680;y+=8)for(let x=26;x<580;x+=8)if((x+y)%3===0)p.fillRect(x,y,1,1);
   p.fillStyle='#665477';p.textAlign='center';p.font='bold 42px monospace';p.fillText('DOVE OF HOPE',300,95);p.font='18px monospace';p.fillText('SKY BLESSING',300,132);
   p.fillStyle='#d7c2e4';p.fillRect(112,440,376,56);p.fillRect(144,416,312,88);p.fillRect(196,400,208,112);
   if(isScore){p.fillStyle='#bb6689';p.fillRect(150,320,280,130);p.fillRect(130,410,320,40);}
   const palette={o:'#655477',w:colors[choice],p:'#efa7b9',s:'#b9a6c7'};rows.forEach((r,y)=>[...r].forEach((v,x)=>{if(palette[v]){p.fillStyle=palette[v];p.fillRect(150+x*20,174+y*20,20,20);}}));
   if(isScore){p.fillStyle='#bb6689';p.fillRect(230,350,140,20);p.fillRect(290,370,20,55);p.fillStyle='#e3b84c';p.fillRect(280,390,40,40);p.fillStyle='#fff1a8';p.fillRect(280,390,15,15);}
   p.fillStyle='#665477';p.font='bold 24px sans-serif';p.direction=currentLang==='ar'?'rtl':'ltr';const words=text[0].split(' ');let line='',lines=[];for(const word of words){if(p.measureText(line+' '+word).width>490&&line){lines.push(line);line=word;}else line+=(line?' ':'')+word;}lines.push(line);lines.forEach((l,i)=>p.fillText(l,300,560+i*32,500));p.font='14px monospace';if(isScore){p.font='bold 22px sans-serif';p.fillText(t('export.score_label')+' : '+bestScore.toLocaleString(currentLang),300,620,490);p.font='17px sans-serif';p.fillText(t('export.level_label')+' : '+bestLevel,300,650,490);}else p.fillText('Dove of Hope · Sky Blessing',300,650);
  }
  const blob=()=>new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
  async function save(){const data=await blob();if(!data)return;const link=document.createElement('a');link.href=URL.createObjectURL(data);link.download='dove-of-hope-chat.png';link.click();setTimeout(()=>URL.revokeObjectURL(link.href),1000);}
  button(text[2],async()=>{try{const data=await blob();const file=data&&new File([data],'dove-of-hope-chat.png',{type:'image/png'});if(file&&navigator.canShare?.({files:[file]})){await navigator.share({title:'Dove of Hope',text:text[1],url,files:[file]});}else if(navigator.share){await navigator.share({title:'Dove of Hope',text:text[1],url});}else{await save();}}catch(e){if(e.name!=='AbortError')await save();}});
  button(text[3],save);button(text[4],async()=>{try{await navigator.clipboard.writeText(text[1]+'\n'+url);status.textContent=text[5];}catch{const field=document.createElement('textarea');field.value=text[1]+'\n'+url;card.append(field);field.select();}});button(text[7],paint);const closeButton=button(text[6],close);
  screen.append(card);document.getElementById('gameContainer').append(screen);paint();closeButton.focus();
 };
 const shareButton=document.createElement('button');shareButton.type='button';shareButton.className='hud-share';shareButton.addEventListener('click',()=>{document.getElementById('pauseMenu').style.display='none';document.getElementById('pauseMenuOverlay').style.display='none';window.showShareCats();});
 const old=document.querySelector('#ui [onclick="showStats();"]');old.after(document.getElementById('menuButton'));document.querySelector('#pauseMenu .settings-grid').append(shareButton);old.setAttribute('role','button');old.tabIndex=0;old.setAttribute('aria-label',t('treasure.title')||'Mes Trésors');old.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();showStats();}});
 // Keep the score counter available to the engine while replacing its visible slot.
 document.getElementById('score').parentElement.style.display='none';
 function translate(){const label=(copy[currentLang]||copy.en)[2];shareButton.textContent='↗ '+label;shareButton.setAttribute('aria-label',label);}
 const flag=document.getElementById('langFlag');new MutationObserver(translate).observe(flag,{childList:true,characterData:true,subtree:true});translate();
})();

