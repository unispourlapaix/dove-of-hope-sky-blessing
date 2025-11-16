// ============================================
// 🇩🇪 DEUTSCH - DOVE OF HOPE
// ============================================

const de = {
  code: 'de',
  name: 'Deutsch',
  flag: '🇩🇪',
  
  ui: {
    score: 'Punktzahl',
    clouds: 'Wolken',
    level: 'Kapitel',
    lives: 'Leben'
  },
  
  buttons: {
    start: 'Anzünden!',
    play: 'SPIELEN',
    restart: 'NOCHMAL'
  },
  
  messages: {
    start: 'Flieg, kleine Taube! Vertreibe die Wolken!',
    restart: 'Die Taube ist wiedergeboren! Los geht\'s!',
    gameOver: 'Game Over! Aber in der Not glänzt du noch heller!',
    victory: 'SIEG! Psalm 99,1 - Das Leben ist ein außergewöhnliches Abenteuer! - sagt Origenes',
    levelUp: 'Level {level} - Das Licht wächst!',
    motivation: 'Es ist Zeit zu leuchten - Es ist eine schöne Zeit, deine Träume zu verwirklichen!'
  },
  
  gameplay: [
    'Beweg dich, es ist Zeit!',
    'Die Taube bringt Hoffnung!',
    'Mach weiter, das Licht kehrt zurück!',
    'Deine Flügel tragen Hoffnung!',
    'Beharrlichkeit, die Sonne erwartet dich!',
    'Flieg zu deinen Träumen!',
    'Nach dem Regen kommt die Sonne!',
    'Im Regen tanzen zu können bedeutet, glücklich sein zu können!',
    'Dein Glaube ist stärker als der Sturm!',
    'Tanze mit den Elementen, du bist frei!'
  ],
  
  rain: [
    'Nach dem Regen kommt die Sonne!',
    'Dein Glaube ist stärker als der Sturm!',
    'Der Sturm offenbart die Stärke deiner Flügel!'
  ],
  
  powerups: {
    umbrella: 'Regenschirm aktiviert! Tanze mit den Elementen!',
    speed: 'Göttliche Geschwindigkeit! Deine Flügel sind frei!',
    multishot: 'Dreifaches Licht! Dein Herz strahlt!'
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = de;
}
