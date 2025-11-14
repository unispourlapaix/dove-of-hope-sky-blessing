// ============================================
// 🇫🇷 FRANÇAIS - DOVE OF HOPE
// ============================================

const fr = {
  code: 'fr',
  name: 'Français',
  flag: '🇫🇷',
  
  ui: {
    score: 'Score',
    clouds: 'Nuages',
    level: 'Niveau',
    lives: 'Vie'
  },
  
  buttons: {
    start: 'Rallume !',
    play: 'JOUER',
    restart: 'REJOUER'
  },
  
  messages: {
    start: 'Vole, petite colombe ! Dissipe les nuages !',
    restart: 'La colombe renaît ! C\'est reparti !',
    gameOver: 'Game Over ! Mais dans l\'adversité, tu brilles encore plus !',
    victory: 'VICTOIRE ! Le Psaume 99.1 - La vie est une aventure extraordinaire ! - dit Origine',
    levelUp: 'Niveau {level} - La lumière grandit !',
    motivation: 'Il est temps de rallumer la lumière - C\'est un beau temps pour réaliser ses rêves !'
  },
  
  gameplay: [
    'Bouge-toi, c\'est le temps !',
    'La colombe apporte l\'espoir !',
    'Continue, la lumière revient !',
    'Tes ailes portent l\'espoir !',
    'Persévère, le soleil t\'attend !',
    'Vole vers tes rêves !',
    'Après la pluie y a le beau temps !',
    'Savoir danser sous la pluie c\'est savoir être heureux !',
    'Ta foi est plus forte que l\'orage !',
    'Danse avec les éléments, tu es libre !'
  ],
  
  rain: [
    'Après la pluie y a le beau temps !',
    'Ta foi est plus forte que l\'orage !',
    'La tempête révèle la force de tes ailes !'
  ],
  
  powerups: {
    umbrella: 'Parapluie activé ! Danse avec les éléments !',
    speed: 'Vitesse divine ! Tes ailes sont libres !',
    multishot: 'Triple lumière ! Ton cœur rayonne !'
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = fr;
}
