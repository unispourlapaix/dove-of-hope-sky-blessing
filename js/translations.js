// ============================================
// 🌍 DOVE OF HOPE - TRANSLATIONS MODULE
// ============================================

const LANGUAGES = {
  fr: {
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
      restart: 'REJOUER',
      continue: 'Continuer',
      begin: 'Commencer'
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
  },
  en: {
    code: 'en',
    name: 'English',
    flag: '🇬🇧',
    ui: {
      score: 'Score',
      clouds: 'Clouds',
      level: 'Level',
      lives: 'Life'
    },
    buttons: {
      start: 'Light it!',
      play: 'PLAY',
      restart: 'REPLAY',
      continue: 'Continue',
      begin: 'Begin'
    },
    messages: {
      start: 'Fly, little dove! Clear the clouds!',
      restart: 'The dove is reborn! Here we go again!',
      gameOver: 'Game Over! But in adversity, you shine even brighter!',
      victory: 'VICTORY! Psalm 99.1 - Life is an extraordinary adventure! - says Origen',
      levelUp: 'Level {level} - The light grows!',
      motivation: 'It\'s time to light up - It\'s a beautiful time to realize your dreams!'
    },
    gameplay: [
      'Move, it\'s time!',
      'The dove brings hope!',
      'Keep going, the light returns!',
      'Your wings carry hope!',
      'Persevere, the sun awaits you!',
      'Fly to your dreams!',
      'After the rain comes sunshine!',
      'Knowing how to dance in the rain is knowing how to be happy!',
      'Your faith is stronger than the storm!',
      'Dance with the elements, you are free!'
    ],
    rain: [
      'After the rain comes sunshine!',
      'Your faith is stronger than the storm!',
      'The storm reveals the strength of your wings!'
    ],
    powerups: {
      umbrella: 'Umbrella activated! Dance with the elements!',
      speed: 'Divine speed! Your wings are free!',
      multishot: 'Triple light! Your heart shines!'
    }
  }
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LANGUAGES };
}
