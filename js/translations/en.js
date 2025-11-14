// ============================================
// 🇬🇧 ENGLISH - DOVE OF HOPE
// ============================================

const en = {
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
    restart: 'REPLAY'
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
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = en;
}
