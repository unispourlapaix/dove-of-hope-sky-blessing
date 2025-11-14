// ============================================
// 🎮 DOVE OF HOPE - MOTEUR DE JEU PRINCIPAL
// ============================================

// Récupération des éléments DOM
const c = document.getElementById('gameCanvas');
const ctx = c.getContext('2d');
const scoreEl = document.getElementById('score');
const cloudsEl = document.getElementById('clouds');
const levelEl = document.getElementById('level');
const livesEl = document.getElementById('lives');
const messageEl = document.getElementById('message');
const startBtn = document.getElementById('startButton');
const sunEl = document.getElementById('sun');

// ============================================
// 🌍 GESTION DE LA LANGUE
// ============================================
let currentLang = localStorage.getItem('doveGameLang') || 'fr';

// Fonction pour changer de langue
function setLanguage(langCode) {
  if (LANGUAGES[langCode]) {
    currentLang = langCode;
    localStorage.setItem('doveGameLang', langCode);
    updateUILanguage();
  }
}

// Fonction pour obtenir une traduction
function t(key, params = {}) {
  const keys = key.split('.');
  let value = LANGUAGES[currentLang];
  
  for (const k of keys) {
    value = value?.[k];
    if (!value) return key;
  }
  
  // Remplacer les paramètres {param}
  if (typeof value === 'string') {
    Object.keys(params).forEach(param => {
      value = value.replace(`{${param}}`, params[param]);
    });
  }
  
  return value;
}

// Mettre à jour l'UI avec la langue actuelle
function updateUILanguage() {
  document.querySelector('.motivation').textContent = `"${t('messages.motivation')}"`;
  document.getElementById('scoreLabel').textContent = t('ui.score');
  document.getElementById('cloudsLabel').textContent = t('ui.clouds');
  document.getElementById('levelLabel').textContent = t('ui.level');
  document.getElementById('livesLabel').textContent = t('ui.lives');
  
  const btnAfter = startBtn.querySelector('::after') || startBtn;
  if (startBtn.dataset) {
    startBtn.dataset.text = t('buttons.start');
  }
}

// ============================================
// 📐 GESTION DU CANVAS
// ============================================
function resizeCanvas() {
  const container = document.getElementById('gameContainer');
  c.width = container.clientWidth;
  c.height = container.clientHeight;
  player.x = c.width / 2;
  player.y = c.height - 120;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// ============================================
// 🎯 VARIABLES DU JEU
// ============================================
let state = 'start';
let score = 0;
let cloudsCleared = 0;
let level = 1;
let lives = 3;
let lastTime = 0;

// Power-ups
let umbrella = false, uTime = 0;
let speed = false, sTime = 0;
let multi = false, mTime = 0;

// Entités du jeu
const player = { x: c.width / 2, y: c.height - 120, w: 40, h: 30, s: 5 };
let bullets = [];
let clouds = [];
let rain = [];
let particles = [];
let powerUps = [];
let hearts = [];

// Contrôles
let touchX = null, touchY = null;
let shooting = false;
let lastShot = 0;

// Système de niveaux
let currentLevelIndex = 0;
let currentChapter = 1;
let currentLevelConfig = LEVELS_CONFIG[0];
let totalScore = 0;
let cloudsInLevel = 0;
let showingStory = false;

// ============================================
// 🏭 FACTORIES D'ENTITÉS
// ============================================
function cloud() {
  const shoot = Math.random() < currentLevelConfig.shootingClouds;
  return {
    x: Math.random() * (c.width - 50),
    y: -40,
    w: 45,
    h: 30,
    s: currentLevelConfig.cloudSpeed.min + Math.random() * (currentLevelConfig.cloudSpeed.max - currentLevelConfig.cloudSpeed.min),
    c: shoot ? '#7f8c8d' : '#95a5a6',
    shoot: shoot,
    lastShot: Date.now(),
    delay: 2000 + Math.random() * 3000
  };
}

function rainDrop(x, y) {
  return {
    x: x,
    y: y,
    w: 3,
    h: 8,
    s: currentLevelConfig.rainSpeed.min + Math.random() * (currentLevelConfig.rainSpeed.max - currentLevelConfig.rainSpeed.min),
    c: '#3498db'
  };
}

function powerUp(x, y) {
  const types = ['umbrella', 'speed', 'multishot'];
  const type = types[Math.floor(Math.random() * types.length)];
  const colors = { umbrella: '#e74c3c', speed: '#9b59b6', multishot: '#f39c12' };
  return { x: x, y: y, w: 25, h: 25, s: 2, type: type, c: colors[type] };
}

function bullet(x, y) {
  return { x: x, y: y, w: 4, h: 12, s: 8, c: '#f1c40f' };
}

function heart() {
  return {
    x: player.x + 18 + Math.random() * 8,
    y: player.y + 10 + Math.random() * 5,
    vx: (Math.random() - 0.5) * 1.5,
    vy: -2.5 - Math.random() * 1.2,
    size: 12 + Math.random() * 6,
    life: 1,
    decay: 0.006,
    c: '#e74c3c',
    rot: 0,
    rotS: (Math.random() - 0.5) * 0.1
  };
}

function particle(x, y) {
  return {
    x: x,
    y: y,
    vx: (Math.random() - 0.5) * 6,
    vy: (Math.random() - 0.5) * 6,
    life: 1,
    decay: 0.02,
    c: `hsl(${45 + Math.random() * 30},80%,70%)`
  };
}

// ============================================
// 🎨 FONCTIONS DE DESSIN
// ============================================
function drawPlayer() {
  let glow = '#f1c40f', intensity = 20;
  if (umbrella) { glow = '#e74c3c'; intensity = 30; }
  else if (speed) { glow = '#9b59b6'; intensity = 25; }
  else if (multi) { glow = '#f39c12'; intensity = 23; }

  ctx.shadowBlur = 30;
  ctx.shadowColor = '#f1c40f';
  ctx.fillStyle = 'rgba(241,196,15,0.2)';
  ctx.beginPath();
  ctx.arc(player.x + 20, player.y + 15, 40, 0, Math.PI * 2);
  ctx.fill();

  ctx.shadowBlur = intensity;
  ctx.shadowColor = glow;
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#2c3e50';
  ctx.lineWidth = 1;

  const beat = Math.sin(Date.now() * (speed ? 0.025 : 0.015)) * 2;

  // Tête
  ctx.beginPath();
  ctx.moveTo(player.x + 20, player.y + 8);
  ctx.lineTo(player.x + 15, player.y + 22);
  ctx.lineTo(player.x + 25, player.y + 22);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Aile gauche
  ctx.beginPath();
  ctx.moveTo(player.x + 15, player.y + 12);
  ctx.lineTo(player.x + 2, player.y + 8 + beat);
  ctx.lineTo(player.x + 18, player.y + 25);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Aile droite
  ctx.beginPath();
  ctx.moveTo(player.x + 25, player.y + 12);
  ctx.lineTo(player.x + 38, player.y + 8 - beat);
  ctx.lineTo(player.x + 22, player.y + 25);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Queue
  ctx.beginPath();
  ctx.moveTo(player.x + 20, player.y + 22);
  ctx.lineTo(player.x + 18, player.y + 30);
  ctx.lineTo(player.x + 22, player.y + 30);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Halo
  ctx.shadowBlur = 40;
  ctx.shadowColor = 'rgba(241,196,15,0.4)';
  ctx.fillStyle = 'rgba(255,255,255,0.1)';
  ctx.beginPath();
  ctx.arc(player.x + 20, player.y + 15, 50, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;

  // Parapluie si actif
  if (umbrella) {
    ctx.strokeStyle = '#e74c3c';
    ctx.lineWidth = 4;
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#e74c3c';
    ctx.beginPath();
    ctx.arc(player.x + 20, player.y - 15, 30, 0, Math.PI, true);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(player.x + 20, player.y - 15);
    ctx.lineTo(player.x + 20, player.y + 5);
    ctx.stroke();
    ctx.shadowBlur = 0;
  }
}

function drawCloud(cl) {
  ctx.fillStyle = cl.c;
  ctx.shadowBlur = 3;
  ctx.shadowColor = cl.c;
  ctx.beginPath();
  ctx.arc(cl.x + 10, cl.y + 15, 10, 0, Math.PI * 2);
  ctx.arc(cl.x + 25, cl.y + 10, 12, 0, Math.PI * 2);
  ctx.arc(cl.x + 40, cl.y + 15, 10, 0, Math.PI * 2);
  ctx.arc(cl.x + 20, cl.y + 20, 8, 0, Math.PI * 2);
  ctx.fill();
  
  if (cl.shoot) {
    ctx.fillStyle = '#34495e';
    ctx.beginPath();
    ctx.arc(cl.x + 25, cl.y + 12, 3, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.shadowBlur = 0;
}

function drawRain(r) {
  ctx.fillStyle = r.c;
  ctx.shadowBlur = 2;
  ctx.shadowColor = r.c;
  ctx.beginPath();
  ctx.ellipse(r.x, r.y, 2, 4, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;
}

function drawPowerUp(p) {
  ctx.strokeStyle = p.c;
  ctx.fillStyle = p.c;
  ctx.lineWidth = 2;
  
  if (p.type === 'umbrella') {
    ctx.beginPath();
    ctx.arc(p.x + 12, p.y + 8, 12, 0, Math.PI, true);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(p.x + 12, p.y + 8);
    ctx.lineTo(p.x + 12, p.y + 20);
    ctx.stroke();
  } else if (p.type === 'speed') {
    ctx.beginPath();
    ctx.moveTo(p.x + 8, p.y + 2);
    ctx.lineTo(p.x + 12, p.y + 2);
    ctx.lineTo(p.x + 6, p.y + 12);
    ctx.lineTo(p.x + 10, p.y + 12);
    ctx.lineTo(p.x + 4, p.y + 22);
    ctx.lineTo(p.x + 16, p.y + 10);
    ctx.lineTo(p.x + 12, p.y + 10);
    ctx.lineTo(p.x + 18, p.y + 2);
    ctx.closePath();
    ctx.fill();
  } else {
    for (let i = 0; i < 3; i++) {
      const o = i * 6;
      ctx.beginPath();
      ctx.arc(p.x + 6 + o, p.y + 12, 4, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function drawBullet(b) {
  ctx.fillStyle = b.c;
  ctx.shadowBlur = 8;
  ctx.shadowColor = b.c;
  ctx.fillRect(b.x, b.y, b.w, b.h);
  ctx.shadowBlur = 0;
}

function drawHeart(h) {
  ctx.save();
  ctx.globalAlpha = h.life;
  ctx.translate(h.x, h.y);
  ctx.rotate(h.rot);
  ctx.fillStyle = h.c;
  ctx.shadowBlur = 8;
  ctx.shadowColor = h.c;
  
  const s = h.size;
  ctx.beginPath();
  ctx.arc(-s / 4, -s / 4, s / 4, 0, Math.PI * 2);
  ctx.arc(s / 4, -s / 4, s / 4, 0, Math.PI * 2);
  ctx.moveTo(0, s / 4);
  ctx.lineTo(-s / 2, -s / 8);
  ctx.lineTo(s / 2, -s / 8);
  ctx.closePath();
  ctx.fill();
  
  ctx.shadowBlur = 0;
  ctx.restore();
}

function drawParticle(p) {
  ctx.globalAlpha = p.life;
  ctx.fillStyle = p.c;
  ctx.shadowBlur = 5;
  ctx.shadowColor = p.c;
  ctx.fillRect(p.x, p.y, 3, 3);
  ctx.shadowBlur = 0;
  ctx.globalAlpha = 1;
}

// ============================================
// 🎭 UTILITAIRES
// ============================================
function setSun(mood) {
  sunEl.className = `sun ${mood}`;
}

function hit(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

function msg(text) {
  messageEl.textContent = text;
  messageEl.style.opacity = '1';
  const time = Math.max(3000, Math.min(3000 + text.length * 50, 6000));
  setTimeout(() => messageEl.style.opacity = '0', time);
}

// ============================================
// 📖 SYSTÈME D'HISTOIRE
// ============================================
function getStoryChapter(chapterId) {
  const chapters = STORY_CHAPTERS[currentLang] || STORY_CHAPTERS['en'] || STORY_CHAPTERS['fr'];
  return chapters.find(ch => ch.id === chapterId) || chapters[0];
}

function showStoryScreen(type, chapterId, callback) {
  showingStory = true;
  state = 'story';
  const chapter = getStoryChapter(chapterId);
  const text = type === 'intro' ? chapter.intro : chapter.outro;
  const title = chapter.title;
  
  const storyDiv = document.createElement('div');
  storyDiv.id = 'storyScreen';
  storyDiv.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(30,30,60,0.95) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 500;
    padding: 20px;
    box-sizing: border-box;
    animation: fadeIn 0.5s ease-in;
  `;
  
  storyDiv.innerHTML = `
    <div style="max-width: 500px; text-align: center;">
      <h2 style="color: #f1c40f; font-size: 24px; margin-bottom: 20px; text-shadow: 0 0 10px rgba(241,196,15,0.5);">
        ${title}
      </h2>
      <p style="color: #fff; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
        ${text}
      </p>
      <button id="continueStory" style="
        background: linear-gradient(135deg, #f1c40f 0%, #f39c12 100%);
        border: none;
        padding: 15px 40px;
        border-radius: 25px;
        color: #2c3e50;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(241,196,15,0.4);
        transition: all 0.3s;
      " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 7px 20px rgba(241,196,15,0.6)';"
         onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 5px 15px rgba(241,196,15,0.4)';">
        ${type === 'intro' ? '✨ ' + t('buttons.play') : '🎯 ' + t('buttons.restart')}
      </button>
    </div>
  `;
  
  document.getElementById('gameContainer').appendChild(storyDiv);
  
  document.getElementById('continueStory').addEventListener('click', () => {
    storyDiv.remove();
    showingStory = false;
    if (callback) callback();
  });
}

// ============================================
// 🎯 SYSTÈME DE NIVEAUX
// ============================================
function getLevelConfig(levelIndex) {
  return LEVELS_CONFIG[levelIndex] || LEVELS_CONFIG[LEVELS_CONFIG.length - 1];
}

function updateLevelBackground() {
  const bg = currentLevelConfig.background;
  document.getElementById('gameContainer').style.background = 
    `linear-gradient(180deg, ${bg.top} 0%, ${bg.bottom} 100%)`;
}

function startLevel(levelIndex) {
  currentLevelIndex = levelIndex;
  currentLevelConfig = getLevelConfig(levelIndex);
  currentChapter = currentLevelConfig.chapter;
  cloudsInLevel = 0;
  
  updateLevelBackground();
  
  bullets = [];
  clouds = [];
  rain = [];
  particles = [];
  powerUps = [];
  hearts = [];
  umbrella = false;
  speed = false;
  multi = false;
  
  state = 'playing';
  setSun('happy');
}

function completeLevel() {
  state = 'levelComplete';
  const nextLevelIndex = currentLevelIndex + 1;
  
  if (nextLevelIndex >= LEVELS_CONFIG.length) {
    showStoryScreen('outro', currentChapter, () => {
      state = 'victory';
      msg(t('messages.victory'));
    });
  } else {
    const nextConfig = getLevelConfig(nextLevelIndex);
    const isNewChapter = nextConfig.chapter !== currentChapter;
    
    if (isNewChapter) {
      showStoryScreen('outro', currentChapter, () => {
        setTimeout(() => {
          showStoryScreen('intro', nextConfig.chapter, () => {
            startLevel(nextLevelIndex);
          });
        }, 500);
      });
    } else {
      setTimeout(() => {
        startLevel(nextLevelIndex);
        msg(`${t('ui.level')} ${level} - ${t('messages.levelUp', {level: level})}`);
      }, 2000);
    }
  }
}

// ============================================
// 🔄 BOUCLE DE JEU
// ============================================
function restart() {
  score = 0;
  cloudsCleared = 0;
  level = 1;
  lives = 3;
  bullets = [];
  clouds = [];
  rain = [];
  particles = [];
  powerUps = [];
  hearts = [];
  umbrella = false;
  speed = false;
  multi = false;
  totalScore = 0;
  cloudsInLevel = 0;
  currentLevelIndex = 0;
  startLevel(0);
  msg(t('messages.restart'));
}

function update(dt) {
  if (state !== 'playing') return;

  // Contrôles
  if (touchX !== null && touchY !== null) {
    const currentSpeed = speed ? player.s * 1.8 : player.s;
    const targetX = Math.max(20, Math.min(c.width - 60, touchX - 20));
    const targetY = Math.max(30, Math.min(c.height - 50, touchY - 80));
    player.x += (targetX - player.x) * 0.12 * currentSpeed;
    player.y += (targetY - player.y) * 0.12 * currentSpeed;
  }

  // Tir
  if (shooting && Date.now() - lastShot > (multi ? 100 : 200)) {
    if (multi) {
      bullets.push(bullet(player.x + 10, player.y));
      bullets.push(bullet(player.x + 18, player.y));
      bullets.push(bullet(player.x + 26, player.y));
    } else {
      bullets.push(bullet(player.x + 18, player.y));
    }
    lastShot = Date.now();
  }

  // Power-ups timer
  if (umbrella && (uTime -= dt) <= 0) umbrella = false;
  if (speed && (sTime -= dt) <= 0) speed = false;
  if (multi && (mTime -= dt) <= 0) multi = false;

  // Spawn
  if (Math.random() < currentLevelConfig.cloudSpawnRate) clouds.push(cloud());
  if (Math.random() < currentLevelConfig.powerUpRate) powerUps.push(powerUp(Math.random() * (c.width - 30), -30));

  // Mise à jour bullets
  bullets.forEach((b, i) => {
    b.y -= b.s;
    if (b.y < 0) bullets.splice(i, 1);
  });

  // Mise à jour clouds
  clouds.forEach((cl, i) => {
    cl.y += cl.s;
    if (cl.shoot && Date.now() - cl.lastShot > cl.delay) {
      rain.push(rainDrop(cl.x + cl.w / 2, cl.y + cl.h));
      cl.lastShot = Date.now();
    }
    if (cl.y > c.height) clouds.splice(i, 1);
  });

  // Mise à jour rain
  rain.forEach((r, i) => {
    r.y += r.s;
    if (r.y > c.height) {
      rain.splice(i, 1);
    } else if (!umbrella && hit(r, player)) {
      rain.splice(i, 1);
      lives--;
      const rainMsgs = t('rain');
      msg(rainMsgs[Math.floor(Math.random() * rainMsgs.length)]);
      if (lives <= 0) {
        state = 'gameOver';
        setSun('sad');
        msg(t('messages.gameOver'));
      } else {
        setSun('neutral');
        setTimeout(() => {
          if (state === 'playing') setSun('happy');
        }, 2000);
      }
    }
  });

  // Mise à jour powerUps
  powerUps.forEach((p, i) => {
    p.y += p.s;
    if (p.y > c.height) {
      powerUps.splice(i, 1);
    } else if (hit(p, player)) {
      powerUps.splice(i, 1);
      if (p.type === 'umbrella') {
        umbrella = true;
        uTime = 5000;
        msg(t('powerups.umbrella'));
      } else if (p.type === 'speed') {
        speed = true;
        sTime = 4000;
        msg(t('powerups.speed'));
      } else if (p.type === 'multishot') {
        multi = true;
        mTime = 6000;
        msg(t('powerups.multishot'));
      }
    }
  });

  // Collisions bullets-clouds
  bullets.forEach((b, bi) => {
    clouds.forEach((cl, ci) => {
      if (hit(b, cl)) {
        for (let i = 0; i < 8; i++) particles.push(particle(cl.x + cl.w / 2, cl.y + cl.h / 2));
        bullets.splice(bi, 1);
        clouds.splice(ci, 1);
        score += 100;
        totalScore += 100;
        cloudsCleared++;
        cloudsInLevel++;
        setSun('happy');
        
        const gameplayMsgs = t('gameplay');
        if (Math.random() < 0.4) msg(gameplayMsgs[Math.floor(Math.random() * gameplayMsgs.length)]);
        
        if (cloudsInLevel >= currentLevelConfig.cloudsToPass) {
          level++;
          completeLevel();
          for (let i = 0; i < 5; i++) setTimeout(() => hearts.push(heart()), i * 150);
        } else if (cloudsCleared % 15 === 0) {
          level++;
          msg(t('messages.levelUp', {level: level}));
          for (let i = 0; i < 3; i++) setTimeout(() => hearts.push(heart()), i * 150);
        }
      }
    });
  });

  // Mise à jour hearts
  hearts.forEach((h, i) => {
    h.x += h.vx;
    h.y += h.vy;
    h.life -= h.decay;
    h.rot += h.rotS;
    h.vy += 0.015;
    if (h.life <= 0) hearts.splice(i, 1);
  });

  // Mise à jour particles
  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    p.life -= p.decay;
    if (p.life <= 0) particles.splice(i, 1);
  });

  // Mise à jour UI
  scoreEl.textContent = score;
  cloudsEl.textContent = cloudsCleared;
  levelEl.textContent = level;
  livesEl.textContent = lives;
}

function render() {
  ctx.clearRect(0, 0, c.width, c.height);
  
  if (state === 'playing' || state === 'levelComplete') {
    clouds.forEach(drawCloud);
    rain.forEach(drawRain);
    powerUps.forEach(drawPowerUp);
    bullets.forEach(drawBullet);
    particles.forEach(drawParticle);
    hearts.forEach(drawHeart);
    drawPlayer();
    
    if (state === 'playing') {
      ctx.fillStyle = 'rgba(255,255,255,0.8)';
      ctx.font = 'bold 12px Arial';
      ctx.textAlign = 'center';
      const progress = `${t('ui.level')} ${currentChapter} - ${cloudsInLevel}/${currentLevelConfig.cloudsToPass}`;
      ctx.fillText(progress, c.width / 2, c.height - 10);
    }
  }
}

function loop(time) {
  const dt = time - lastTime;
  lastTime = time;
  update(dt);
  render();
  requestAnimationFrame(loop);
}

// ============================================
// 🎮 ÉVÉNEMENTS
// ============================================
c.addEventListener('touchstart', (e) => {
  e.preventDefault();
  if (state === 'gameOver' || state === 'victory') {
    restart();
  } else {
    const t = e.touches[0];
    touchX = t.clientX;
    touchY = t.clientY;
    shooting = true;
  }
});

c.addEventListener('touchmove', (e) => {
  e.preventDefault();
  if (e.touches[0]) {
    touchX = e.touches[0].clientX;
    touchY = e.touches[0].clientY;
  }
});

c.addEventListener('touchend', (e) => {
  e.preventDefault();
  shooting = false;
  touchX = null;
  touchY = null;
});

c.addEventListener('mousemove', (e) => {
  touchX = e.clientX;
  touchY = e.clientY;
});

c.addEventListener('mousedown', (e) => {
  if (state === 'gameOver' || state === 'victory') {
    restart();
  } else {
    shooting = true;
  }
});

c.addEventListener('mouseup', () => {
  shooting = false;
});

startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';
  initGame();
});

// ============================================
// 🚀 INITIALISATION
// ============================================
function initGame() {
  showStoryScreen('intro', 1, () => {
    startLevel(0);
  });
}

// Charger la langue et démarrer
updateUILanguage();
requestAnimationFrame(loop);
