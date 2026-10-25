(() => {
  const start = document.getElementById('startButton');
  const sync = () => document.getElementById('gameContainer').classList.toggle('game-started', start.classList.contains('hidden'));
  new MutationObserver(sync).observe(start, {attributes:true, attributeFilter:['class']});
  sync();
  document.querySelectorAll('#pauseMenu [title]').forEach(control => {
    const label = document.createElement('span');
    label.className = 'menu-label';
    const update = () => {label.textContent = control.title; control.setAttribute('aria-label', control.title);};
    control.append(label);
    update();
    new MutationObserver(update).observe(control,{attributes:true,attributeFilter:['title']});
    control.setAttribute('role','button');
    control.tabIndex = 0;
    control.addEventListener('keydown', event => {
      if(event.key === 'Enter' || event.key === ' ') {event.preventDefault();control.click();}
    });
  });
  document.addEventListener('keydown', event => {
    if(event.key === 'Escape' && document.getElementById('pauseMenu').style.display !== 'none') {
      document.getElementById('pauseMenu').style.display = 'none';
      document.getElementById('pauseMenuOverlay').style.display = 'none';
      document.getElementById('menuButton').focus();
    }
  });
})();
