// ============================================
// 🇪🇸 ESPAÑOL - DOVE OF HOPE
// ============================================

const es = {
  code: 'es',
  name: 'Español',
  flag: '🇪🇸',
  
  ui: {
    score: 'Puntos',
    clouds: 'Nubes',
    level: 'Nivel',
    lives: 'Vida'
  },
  
  buttons: {
    start: '¡Enciende!',
    play: 'JUGAR',
    restart: 'REJUGAR'
  },
  
  messages: {
    start: '¡Vuela, pequeña paloma! ¡Despeja las nubes!',
    restart: '¡La paloma renace! ¡Aquí vamos de nuevo!',
    gameOver: '¡Game Over! ¡Pero en la adversidad, brillas aún más!',
    victory: '¡VICTORIA! Salmo 99.1 - ¡La vida es una aventura extraordinaria! - dice Orígenes',
    levelUp: 'Nivel {level} - ¡La luz crece!',
    motivation: 'Es hora de iluminar - ¡Es un buen momento para realizar tus sueños!'
  },
  
  gameplay: [
    '¡Muévete, es el momento!',
    '¡La paloma trae esperanza!',
    '¡Continúa, la luz regresa!',
    '¡Tus alas llevan esperanza!',
    '¡Persevera, el sol te espera!',
    '¡Vuela hacia tus sueños!',
    '¡Después de la lluvia viene el sol!',
    '¡Saber bailar bajo la lluvia es saber ser feliz!',
    '¡Tu fe es más fuerte que la tormenta!',
    '¡Baila con los elementos, eres libre!'
  ],
  
  rain: [
    '¡Después de la lluvia viene el sol!',
    '¡Tu fe es más fuerte que la tormenta!',
    '¡La tormenta revela la fuerza de tus alas!'
  ],
  
  powerups: {
    umbrella: '¡Paraguas activado! ¡Baila con los elementos!',
    speed: '¡Velocidad divina! ¡Tus alas son libres!',
    multishot: '¡Triple luz! ¡Tu corazón brilla!'
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = es;
}
