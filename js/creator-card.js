/* Creator links share the same language and local record as the game. */
(() => {
 const peaceSlogans={"fr": "33 millions de raisons d’aimer et de partager la paix", "en": "33 million reasons to love and share peace", "es": "33 millones de razones para amar y compartir la paz", "de": "33 Millionen Gründe, zu lieben und Frieden zu teilen", "it": "33 milioni di ragioni per amare e condividere la pace", "pt": "33 milhões de razões para amar e partilhar a paz", "ru": "33 миллиона причин любить и делиться миром", "zh": "3300万个爱与分享和平的理由", "ja": "愛し、平和を分かち合う3300万の理由", "ko": "사랑하고 평화를 나눌 3,300만 가지 이유", "hi": "प्रेम करने और शांति बाँटने के 3 करोड़ 30 लाख कारण", "pl": "33 miliony powodów, by kochać i dzielić się pokojem", "sw": "Sababu milioni 33 za kupenda na kushiriki amani", "ar": "٣٣ مليون سبب للحب ونشر السلام"};
 window.getArtistPageUrl=function(){
  const url=new URL('./public/emmanuel-artist-module.html',document.baseURI);
  url.searchParams.set('score',String(Math.max(Number(gameData.highScore)||0,Number(playerProfile.bestScore)||0,Number(score)||0)));
  url.searchParams.set('level',String(Math.max(Number(gameData.highestLevelReached)||1,Number(playerProfile.highestLevel)||1,Number(level)||1)));
  url.searchParams.set('lang',currentLang);
  return url.href;
 };
 window.renderCreatorCard=function(){
  return `<section class="treasure-creator" aria-labelledby="treasure-creator-name">
    <div class="treasure-creator-heading">
      <div class="creator-cat" aria-hidden="true">${window.getBraveCatMarkup()}</div>
      <div><p class="creator-eyebrow">${t('treasure.creator')}</p><h3 id="treasure-creator-name">Emmanuel Payet</h3><p class="creator-bio">${t('treasure.creator_bio')}</p></div>
    </div>
    <p class="creator-peace">${peaceSlogans[currentLang]||peaceSlogans.en}</p>
    <nav class="creator-music" aria-label="Gospel">
      <a href="https://audiomack.com/emmanuelpayet888" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">♫</span> AudioMack</a>
      <a href="https://suno.com/@emmanuelpayet" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">♪</span> Suno</a>
    </nav>
    <a class="creator-discover" href="${window.getArtistPageUrl()}" target="_blank" rel="noopener noreferrer"><span>${t('treasure.discover_artist')}</span><span aria-hidden="true">↗</span></a>
    <p class="creator-message">${t('treasure.creator_message')}</p>
  </section>`;
 };
})();
