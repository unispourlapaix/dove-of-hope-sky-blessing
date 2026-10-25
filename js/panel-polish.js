/* Explicit panel registry covers legacy dialogs without touching the gameplay art. */
(() => {
 const selector='#statsDisplay,#languageSelector,#testimonyDisplay,#cloudSaveDisplay,#installInstructions,[data-pixel-window],#bossWisdomDisplay';
 function polish(panel){
  if(panel.dataset.pixelPolished)return;
  panel.dataset.pixelPolished='true';
  if(panel.id==='cloudSaveDisplay'){
   panel.classList.add('pixel-save-overlay');panel.firstElementChild?.classList.add('pixel-window');
  }else panel.classList.add('pixel-window');
  if(panel.id==='languageSelector')panel.classList.add('pixel-language-window');
  if(panel.dataset.pixelWindow==='notification')panel.classList.add('pixel-notification');
  for(const element of panel.querySelectorAll('div,section,button,input,select,textarea')){
   if(element.tagName==='DIV'&&(element.style.background||element.style.backgroundColor)&&(element.style.padding||element.style.border))element.classList.add('pixel-window-surface');
  }
 }
 function scan(node){if(!(node instanceof HTMLElement))return;if(node.matches(selector))polish(node);node.querySelectorAll(selector).forEach(polish);}
 new MutationObserver(changes=>{for(const change of changes){for(const node of change.addedNodes)scan(node);}}).observe(document.body,{childList:true,subtree:true});
 scan(document.body);
})();
