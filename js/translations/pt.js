// ============================================
// 🇵🇹 PORTUGUÊS - DOVE OF HOPE
// ============================================

const pt = {
  code: 'pt',
  name: 'Português',
  flag: '🇵🇹',
  
  ui: {
    score: 'Pontos',
    clouds: 'Nuvens',
    level: 'Nível',
    lives: 'Vida'
  },
  
  buttons: {
    start: 'Acende!',
    play: 'JOGAR',
    restart: 'REJOGAR'
  },
  
  messages: {
    start: 'Voa, pequena pomba! Dissipa as nuvens!',
    restart: 'A pomba renasce! Vamos de novo!',
    gameOver: 'Game Over! Mas na adversidade, brilhas ainda mais!',
    victory: 'VITÓRIA! Salmo 99.1 - A vida é uma aventura extraordinária! - diz Orígenes',
    levelUp: 'Nível {level} - A luz cresce!',
    motivation: 'É hora de iluminar - É um bom momento para realizar seus sonhos!'
  },
  
  gameplay: [
    'Mexe-te, é a hora!',
    'A pomba traz esperança!',
    'Continua, a luz retorna!',
    'Tuas asas carregam esperança!',
    'Persevera, o sol te espera!',
    'Voa para teus sonhos!',
    'Depois da chuva vem o sol!',
    'Saber dançar na chuva é saber ser feliz!',
    'Tua fé é mais forte que a tempestade!',
    'Dança com os elementos, és livre!'
  ],
  
  rain: [
    'Depois da chuva vem o sol!',
    'Tua fé é mais forte que a tempestade!',
    'A tempestade revela a força de tuas asas!'
  ],
  
  powerups: {
    umbrella: 'Guarda-chuva ativado! Dança com os elementos!',
    speed: 'Velocidade divina! Tuas asas são livres!',
    multishot: 'Tripla luz! Teu coração brilha!'
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = pt;
}
