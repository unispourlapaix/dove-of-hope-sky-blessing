// ============================================
// 🎮 DOVE OF HOPE - LEVELS CONFIG MODULE
// ============================================

const LEVELS_CONFIG = [
  {
    chapter: 1,
    level: 1,
    cloudsToPass: 15,
    cloudSpeed: { min: 0.5, max: 1.5 },
    cloudSpawnRate: 0.004,
    shootingClouds: 0.3,
    rainSpeed: { min: 4, max: 6 },
    powerUpRate: 0.001,
    background: { top: '#87ceeb', bottom: '#b8d8f8' },
    difficulty: 'easy'
  },
  {
    chapter: 1,
    level: 2,
    cloudsToPass: 30,
    cloudSpeed: { min: 0.7, max: 1.8 },
    cloudSpawnRate: 0.005,
    shootingClouds: 0.4,
    rainSpeed: { min: 4.5, max: 6.5 },
    powerUpRate: 0.0012,
    background: { top: '#87ceeb', bottom: '#b8d8f8' },
    difficulty: 'easy'
  },
  {
    chapter: 1,
    level: 3,
    cloudsToPass: 45,
    cloudSpeed: { min: 0.8, max: 2.0 },
    cloudSpawnRate: 0.006,
    shootingClouds: 0.5,
    rainSpeed: { min: 5, max: 7 },
    powerUpRate: 0.0015,
    background: { top: '#7db8d8', bottom: '#a8c8e8' },
    difficulty: 'medium'
  },
  {
    chapter: 2,
    level: 4,
    cloudsToPass: 60,
    cloudSpeed: { min: 1.0, max: 2.3 },
    cloudSpawnRate: 0.007,
    shootingClouds: 0.6,
    rainSpeed: { min: 5.5, max: 7.5 },
    powerUpRate: 0.0013,
    background: { top: '#6a9fc8', bottom: '#98b8d8' },
    difficulty: 'medium'
  },
  {
    chapter: 2,
    level: 5,
    cloudsToPass: 75,
    cloudSpeed: { min: 1.2, max: 2.5 },
    cloudSpawnRate: 0.008,
    shootingClouds: 0.65,
    rainSpeed: { min: 6, max: 8 },
    powerUpRate: 0.0014,
    background: { top: '#5a8fb8', bottom: '#88a8c8' },
    difficulty: 'medium'
  },
  {
    chapter: 3,
    level: 6,
    cloudsToPass: 90,
    cloudSpeed: { min: 1.3, max: 2.7 },
    cloudSpawnRate: 0.009,
    shootingClouds: 0.7,
    rainSpeed: { min: 6.5, max: 8.5 },
    powerUpRate: 0.0016,
    background: { top: '#4a7fa8', bottom: '#7898b8' },
    difficulty: 'hard'
  },
  {
    chapter: 3,
    level: 7,
    cloudsToPass: 105,
    cloudSpeed: { min: 1.4, max: 2.9 },
    cloudSpawnRate: 0.010,
    shootingClouds: 0.75,
    rainSpeed: { min: 7, max: 9 },
    powerUpRate: 0.0015,
    background: { top: '#3a6f98', bottom: '#6888a8' },
    difficulty: 'hard'
  },
  {
    chapter: 4,
    level: 8,
    cloudsToPass: 120,
    cloudSpeed: { min: 1.5, max: 3.0 },
    cloudSpawnRate: 0.011,
    shootingClouds: 0.8,
    rainSpeed: { min: 7.5, max: 9.5 },
    powerUpRate: 0.0017,
    background: { top: '#2a5f88', bottom: '#587898' },
    difficulty: 'hard'
  },
  {
    chapter: 4,
    level: 9,
    cloudsToPass: 135,
    cloudSpeed: { min: 1.6, max: 3.2 },
    cloudSpawnRate: 0.012,
    shootingClouds: 0.82,
    rainSpeed: { min: 8, max: 10 },
    powerUpRate: 0.0018,
    background: { top: '#1a4f78', bottom: '#486888' },
    difficulty: 'expert'
  },
  {
    chapter: 5,
    level: 10,
    cloudsToPass: 150,
    cloudSpeed: { min: 1.7, max: 3.5 },
    cloudSpawnRate: 0.013,
    shootingClouds: 0.85,
    rainSpeed: { min: 8.5, max: 10.5 },
    powerUpRate: 0.002,
    background: { top: '#0a3f68', bottom: '#385878' },
    difficulty: 'expert'
  }
];

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LEVELS_CONFIG };
}
