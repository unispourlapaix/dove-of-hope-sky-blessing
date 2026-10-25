(() => {
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
 const peaceSlogans={"fr": "33 millions de raisons d’aimer et de partager la paix", "en": "33 million reasons to love and share peace", "es": "33 millones de razones para amar y compartir la paz", "de": "33 Millionen Gründe, zu lieben und Frieden zu teilen", "it": "33 milioni di ragioni per amare e condividere la pace", "pt": "33 milhões de razões para amar e partilhar a paz", "ru": "33 миллиона причин любить и делиться миром", "zh": "3300万个爱与分享和平的理由", "ja": "愛し、平和を分かち合う3300万の理由", "ko": "사랑하고 평화를 나눌 3,300만 가지 이유", "hi": "प्रेम करने और शांति बाँटने के 3 करोड़ 30 लाख कारण", "pl": "33 miliony powodów, by kochać i dzielić się pokojem", "sw": "Sababu milioni 33 za kupenda na kushiriki amani", "ar": "٣٣ مليون سبب للحب ونشر السلام"};
 window.renderArtistScore=function(lang){
  document.getElementById("peace-slogan").textContent=peaceSlogans[lang]||peaceSlogans.en;
  const labels=copy[lang]||copy.en,words=translations[lang]||translations.en;
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  document.getElementById('score-share-title').textContent=labels[2]+' · '+words.scoreHeader;
  document.getElementById('score-invitation').textContent=labels[1];
  document.getElementById('local-score-label').textContent=words.statTopScore;
  document.getElementById('local-level-label').textContent=words.levelHeader;
  for(const [id,index]of [['share-score',2],['save-score-image',3],['copy-score',4],['new-score-cat',7]])document.getElementById(id).textContent=labels[index];
  const record=readRecord();document.getElementById('local-score').textContent=record.score.toLocaleString(lang);document.getElementById('local-level').textContent=record.level;
  document.getElementById('score-share-status').textContent='';
  paint(lang,record);
 };
 function safeNumber(value,fallback=0){const number=Number(value);return Number.isFinite(number)&&number>=0?Math.min(Math.floor(number),Number.MAX_SAFE_INTEGER):fallback;}
 function readRecord(){let data={},profile={};try{data=JSON.parse(localStorage.getItem('doveGameData')||'{}')||{};}catch{}try{profile=JSON.parse(localStorage.getItem('dovePlayerProfile')||'{}')||{};}catch{}
  const params=new URLSearchParams(location.search);
  return {score:Math.max(safeNumber(data.highScore),safeNumber(profile.bestScore),safeNumber(params.get('score'))),level:Math.max(1,safeNumber(data.highestLevelReached),safeNumber(profile.highestLevel),safeNumber(params.get('level')))};
 }
 const cat=['  oo       oo  ','  owo     owo  ','  owpooooopwo  ','  owwwwwwwwwo  ',' owwwwwwwwwwwo ',' owwowwwwowwwo ',' owwowwwwowwwo ',' owppwwpwwppwo ','  owwwowowwwo  ','   owwwwwwwo   ','  owwwssswwwo o','  owwwwwwwwwowo','   oowwoowwoo  ','    ooo ooo    '];
 const coats=['#fff0d7','#dfd5ef','#d3e7e0','#f4d0dc','#f5dabd','#d2e3f1'];let coat=0;
 function paint(lang,record){const canvas=document.getElementById('brave-score-card'),p=canvas.getContext('2d'),words=translations[lang]||translations.en;
  p.imageSmoothingEnabled=false;p.fillStyle='#d4bede';p.fillRect(0,0,600,740);p.fillStyle='#fff4e5';p.fillRect(18,18,564,704);p.fillStyle='#ccb3d2';for(let y=25;y<715;y+=8)for(let x=25;x<575;x+=8)if((x+y)%3===0)p.fillRect(x,y,1,1);
  p.fillStyle='#655477';p.textAlign='center';p.direction=lang==='ar'?'rtl':'ltr';p.font='bold 40px monospace';p.fillText('DOVE OF HOPE',300,85);p.font='16px monospace';p.fillText('SKY BLESSING',300,120);
  p.fillStyle='#bb6689';p.fillRect(150,330,280,130);p.fillRect(130,420,320,40);
  const palette={o:'#655477',w:coats[coat],p:'#efa7b9',s:'#b9a6c7'};cat.forEach((row,y)=>[...row].forEach((v,x)=>{if(palette[v]){p.fillStyle=palette[v];p.fillRect(150+x*20,184+y*20,20,20);}}));
  p.fillStyle='#bb6689';p.fillRect(230,360,140,20);p.fillRect(290,380,20,55);p.fillStyle='#e3b84c';p.fillRect(280,400,40,40);p.fillStyle='#fff1a8';p.fillRect(280,400,15,15);
  p.fillStyle='#655477';p.font='bold 20px sans-serif';p.fillText(words.statTopScore,300,535,500);p.font='bold 48px monospace';p.fillText(record.score.toLocaleString(lang),300,592,500);p.font='20px sans-serif';p.fillText(words.levelHeader+' : '+record.level,300,640,500);p.font='15px sans-serif';p.fillText('Emmanuel Payet · Dove of Hope',300,691,500);
  canvas.setAttribute('aria-label',words.statTopScore+' : '+record.score+' · '+words.levelHeader+' : '+record.level);
 }
 const gameUrl='https://github.com/unispourlapaix/dove-of-hope-sky-blessing';
 function message(){const words=translations[currentLang]||translations.en,labels=copy[currentLang]||copy.en,data=readRecord();return labels[1]+'\n'+words.statTopScore+' : '+data.score.toLocaleString(currentLang)+' · '+words.levelHeader+' : '+data.level;}
 const imageBlob=()=>new Promise(resolve=>document.getElementById('brave-score-card').toBlob(resolve,'image/png'));
 async function saveImage(){const blob=await imageBlob();if(!blob)return;const a=document.createElement('a');a.download='dove-of-hope-chat-courageux.png';a.href=URL.createObjectURL(blob);a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);}
 document.getElementById('share-score').addEventListener('click',async()=>{try{const blob=await imageBlob();const file=blob&&new File([blob],'dove-of-hope-score.png',{type:'image/png'});if(file&&navigator.canShare?.({files:[file]}))await navigator.share({title:'Dove of Hope',text:message(),url:gameUrl,files:[file]});else if(navigator.share)await navigator.share({title:'Dove of Hope',text:message(),url:gameUrl});else await saveImage();}catch(error){if(error.name!=='AbortError')await saveImage();}});
 document.getElementById('save-score-image').addEventListener('click',saveImage);
 document.getElementById('copy-score').addEventListener('click',async()=>{const text=message()+'\n'+gameUrl;try{await navigator.clipboard.writeText(text);document.getElementById('score-share-status').textContent=(copy[currentLang]||copy.en)[5];}catch{let area=document.getElementById('copy-score-fallback');if(!area){area=document.createElement('textarea');area.id='copy-score-fallback';document.getElementById('score-share-status').append(area);}area.value=text;area.select();}});
 document.getElementById('new-score-cat').addEventListener('click',()=>{coat=(coat+1+Math.floor(Math.random()*(coats.length-1)))%coats.length;paint(currentLang,readRecord());});
 window.addEventListener('storage',()=>window.renderArtistScore(currentLang));

})();