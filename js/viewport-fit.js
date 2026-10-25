// Fit the full logical stage, including menus, inside the visible browser panel.
(() => {
 const stage=document.getElementById('gameContainer');
 function fit(){
  const view=window.visualViewport;
  const width=view?view.width:window.innerWidth;
  const height=view?view.height:window.innerHeight;
  const scale=Math.min((width-12)/480,(height-12)/800,1);
  stage.style.setProperty('--stage-scale',String(Math.max(.05,scale)));
  stage.style.left=((view?view.offsetLeft:0)+width/2)+'px';
  stage.style.top=((view?view.offsetTop:0)+height/2)+'px';
 }
 window.addEventListener('resize',fit);
 window.visualViewport?.addEventListener('resize',fit);
 window.visualViewport?.addEventListener('scroll',fit);
 fit();
})();
