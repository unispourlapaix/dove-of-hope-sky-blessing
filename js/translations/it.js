// ============================================
// 🇮🇹 ITALIANO - DOVE OF HOPE
// ============================================

const it = {
  code: 'it',
  name: 'Italiano',
  flag: '🇮🇹',
  
  ui: {
    score: 'Punteggio',
    clouds: 'Nuvole',
    level: 'Capitolo',
    lives: 'Vite'
  },
  
  buttons: {
    start: 'Accendi!',
    play: 'GIOCA',
    restart: 'RIGIOCA'
  },
  
  messages: {
    start: 'Vola, piccola colomba! Dissipa le nuvole!',
    restart: 'La colomba rinasce! Ripartiamo!',
    gameOver: 'Game Over! Ma nell\'avversità, brilli ancora di più!',
    victory: 'VITTORIA! Salmo 99,1 - La vita è un\'avventura straordinaria! - dice Origene',
    levelUp: 'Livello {level} - La luce cresce!',
    motivation: 'È tempo di illuminare - È un bel momento per realizzare i tuoi sogni!'
  },
  
  gameplay: [
    'Muoviti, è il momento!',
    'La colomba porta speranza!',
    'Continua, la luce ritorna!',
    'Le tue ali portano speranza!',
    'Persevera, il sole ti aspetta!',
    'Vola verso i tuoi sogni!',
    'Dopo la pioggia viene il sole!',
    'Saper ballare sotto la pioggia significa saper essere felici!',
    'La tua fede è più forte della tempesta!',
    'Danza con gli elementi, sei libero!'
  ],
  
  rain: [
    'Dopo la pioggia viene il sole!',
    'La tua fede è più forte della tempesta!',
    'La tempesta rivela la forza delle tue ali!'
  ],
  
  powerups: {
    umbrella: 'Ombrello attivato! Danza con gli elementi!',
    speed: 'Velocità divina! Le tue ali sono libere!',
    multishot: 'Tripla luce! Il tuo cuore brilla!'
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = it;
}
