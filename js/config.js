// ============================================
// 🎮 DOVE OF HOPE - GAME CONFIG MODULE
// ============================================

const GAME_CONFIG = {
  // Configuration du joueur
  player: {
    width: 40,
    height: 30,
    speed: 5,
    speedBoostMultiplier: 1.8
  },
  
  // Configuration des projectiles
  bullets: {
    width: 4,
    height: 12,
    speed: 8,
    color: '#f1c40f',
    fireRate: 200,
    fireRateMultishot: 100
  },
  
  // Configuration des nuages
  clouds: {
    width: 45,
    height: 30,
    colors: {
      normal: '#95a5a6',
      shooting: '#7f8c8d'
    },
    rainDelayMin: 2000,
    rainDelayMax: 5000
  },
  
  // Configuration de la pluie
  rain: {
    width: 3,
    height: 8,
    color: '#3498db'
  },
  
  // Configuration des power-ups
  powerups: {
    width: 25,
    height: 25,
    speed: 2,
    duration: {
      umbrella: 5000,
      speed: 4000,
      multishot: 6000
    },
    colors: {
      umbrella: '#e74c3c',
      speed: '#9b59b6',
      multishot: '#f39c12'
    }
  },
  
  // Configuration des particules
  particles: {
    count: 8,
    speedMin: -6,
    speedMax: 6,
    decay: 0.02,
    hueMin: 45,
    hueMax: 75
  },
  
  // Configuration des cœurs
  hearts: {
    count: 3,
    sizeMin: 12,
    sizeMax: 18,
    decay: 0.006,
    color: '#e74c3c',
    gravity: 0.015
  },
  
  // Configuration du gameplay
  gameplay: {
    startingLives: 3,
    scorePerCloud: 100,
    levelUpEvery: 15
  },
  
  // Configuration de l'affichage
  display: {
    maxWidth: 600,
    messageDisplayTime: 3000,
    messageMinTime: 3000,
    messageMaxTime: 6000
  },
  
  // États du soleil
  sun: {
    moods: ['happy', 'neutral', 'sad'],
    neutralTimeAfterHit: 2000
  }
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GAME_CONFIG };
}
