// ============================================
// 📦 TEMPLATES DE NIVEAUX - DOVE OF HOPE
// ============================================
// Copiez-collez ces templates dans LEVELS_CONFIG

// 🟢 TEMPLATE : NIVEAU FACILE
{
  chapter: 1,
  level: 1,
  cloudsToPass: 20,
  cloudSpeed: { min: 0.5, max: 1.5 },
  cloudSpawnRate: 0.004,
  shootingClouds: 0.3,
  rainSpeed: { min: 4, max: 6 },
  powerUpRate: 0.001,
  background: { top: '#87ceeb', bottom: '#b8d8f8' },
  difficulty: 'easy'
}

// 🟡 TEMPLATE : NIVEAU MOYEN
{
  chapter: 2,
  level: 4,
  cloudsToPass: 60,
  cloudSpeed: { min: 1.0, max: 2.2 },
  cloudSpawnRate: 0.007,
  shootingClouds: 0.6,
  rainSpeed: { min: 5.5, max: 7.5 },
  powerUpRate: 0.0013,
  background: { top: '#6a9fc8', bottom: '#98b8d8' },
  difficulty: 'medium'
}

// 🟠 TEMPLATE : NIVEAU DIFFICILE
{
  chapter: 3,
  level: 7,
  cloudsToPass: 100,
  cloudSpeed: { min: 1.5, max: 2.8 },
  cloudSpawnRate: 0.010,
  shootingClouds: 0.75,
  rainSpeed: { min: 7, max: 9 },
  powerUpRate: 0.0015,
  background: { top: '#3a6f98', bottom: '#6888a8' },
  difficulty: 'hard'
}

// 🔴 TEMPLATE : NIVEAU EXPERT
{
  chapter: 5,
  level: 10,
  cloudsToPass: 150,
  cloudSpeed: { min: 1.8, max: 3.5 },
  cloudSpawnRate: 0.013,
  shootingClouds: 0.85,
  rainSpeed: { min: 8.5, max: 10.5 },
  powerUpRate: 0.002,
  background: { top: '#0a3f68', bottom: '#385878' },
  difficulty: 'expert'
}

// 💀 TEMPLATE : NIVEAU CAUCHEMAR
{
  chapter: 6,
  level: 11,
  cloudsToPass: 200,
  cloudSpeed: { min: 2.0, max: 4.0 },
  cloudSpawnRate: 0.015,
  shootingClouds: 0.9,
  rainSpeed: { min: 9, max: 12 },
  powerUpRate: 0.0025,
  background: { top: '#001f48', bottom: '#284868' },
  difficulty: 'nightmare'
}

// 👑 TEMPLATE : BOSS FIGHT
{
  chapter: 3,
  level: 7,
  cloudsToPass: 50,        // Boss avec beaucoup de vie
  cloudSpeed: { min: 0.3, max: 0.8 },  // Lent mais dangereux
  cloudSpawnRate: 0.002,   // Peu de nuages
  shootingClouds: 1.0,     // Tous tirent !
  rainSpeed: { min: 10, max: 15 },  // Pluie rapide
  powerUpRate: 0.005,      // Beaucoup de power-ups
  background: { top: '#1a1a2e', bottom: '#16213e' },
  difficulty: 'boss'
}

// 🌟 TEMPLATE : NIVEAU BONUS
{
  chapter: 2,
  level: 4.5,              // Entre deux niveaux
  cloudsToPass: 30,
  cloudSpeed: { min: 0.8, max: 1.2 },
  cloudSpawnRate: 0.008,
  shootingClouds: 0.2,     // Moins de tir
  rainSpeed: { min: 3, max: 5 },
  powerUpRate: 0.005,      // Beaucoup de power-ups !
  background: { top: '#ffd700', bottom: '#ffed4e' },  // Doré
  difficulty: 'bonus'
}

// 🌈 TEMPLATE : NIVEAU PACIFIQUE
{
  chapter: 1,
  level: 2,
  cloudsToPass: 40,
  cloudSpeed: { min: 0.6, max: 1.0 },
  cloudSpawnRate: 0.005,
  shootingClouds: 0.0,     // Aucun tir !
  rainSpeed: { min: 3, max: 4 },
  powerUpRate: 0.0008,
  background: { top: '#e0f7ff', bottom: '#c8e6f5' },
  difficulty: 'peaceful'
}

// ⚡ TEMPLATE : NIVEAU SURVIE
{
  chapter: 4,
  level: 9,
  cloudsToPass: 999,       // "Infini"
  cloudSpeed: { min: 1.0, max: 2.5 },
  cloudSpawnRate: 0.012,
  shootingClouds: 0.8,
  rainSpeed: { min: 6, max: 9 },
  powerUpRate: 0.002,
  background: { top: '#2a2a4a', bottom: '#4a4a6a' },
  difficulty: 'survival'
}

// 🎯 TEMPLATE : NIVEAU PRÉCISION
{
  chapter: 2,
  level: 5,
  cloudsToPass: 25,
  cloudSpeed: { min: 2.0, max: 3.0 },  // Très rapide !
  cloudSpawnRate: 0.003,   // Peu de nuages
  shootingClouds: 0.1,     // Peu de tir
  rainSpeed: { min: 8, max: 10 },
  powerUpRate: 0.0005,     // Peu de power-ups
  background: { top: '#5a8fb8', bottom: '#88a8c8' },
  difficulty: 'precision'
}

// ============================================
// 📚 TEMPLATES DE CHAPITRES
// ============================================

// FRANÇAIS
{
  id: 6,
  title: "Le Nouveau Chapitre",
  intro: "Une nouvelle aventure commence. Les défis vous attendent avec des récompenses extraordinaires.",
  outro: "Vous avez triomphé ! L'espoir brille plus fort que jamais."
}

// ANGLAIS
{
  id: 6,
  title: "The New Chapter",
  intro: "A new adventure begins. Challenges await you with extraordinary rewards.",
  outro: "You have triumphed! Hope shines brighter than ever."
}

// ============================================
// 🎨 PALETTES DE COULEURS
// ============================================

// Jour Ensoleillé
background: { top: '#87ceeb', bottom: '#b8d8f8' }

// Coucher de Soleil
background: { top: '#ff7f50', bottom: '#ffa07a' }

// Nuit Étoilée
background: { top: '#191970', bottom: '#4b0082' }

// Aube Dorée
background: { top: '#ffd700', bottom: '#ffed4e' }

// Tempête Sombre
background: { top: '#2f4f4f', bottom: '#696969' }

// Ciel Mystique
background: { top: '#9370db', bottom: '#ba55d3' }

// Paradis Céleste
background: { top: '#00bfff', bottom: '#87cefa' }

// Enfer Ardent
background: { top: '#8b0000', bottom: '#ff4500' }

// Crépuscule Violet
background: { top: '#4b0082', bottom: '#8b008b' }

// Arctique Glacé
background: { top: '#e0ffff', bottom: '#f0f8ff' }

// ============================================
// 📐 FORMULES DE PROGRESSION
// ============================================

// PROGRESSION LINÉAIRE
level: n
cloudsToPass: 15 * n
cloudSpeed.max: 1.5 + (n * 0.2)
cloudSpawnRate: 0.004 + (n * 0.001)

// PROGRESSION EXPONENTIELLE
level: n
cloudsToPass: 15 * Math.pow(1.5, n-1)
cloudSpeed.max: 1.5 * Math.pow(1.1, n-1)
shootingClouds: Math.min(0.9, 0.3 * Math.pow(1.2, n-1))

// PROGRESSION EN VAGUES
level: n
difficulty: (n % 3 === 0) ? 'boss' : 'normal'
cloudsToPass: (n % 3 === 0) ? 100 : 50

// ============================================
// 🎮 EXEMPLES DE VARIATIONS
// ============================================

// NIVEAU "BULLET HELL" (Pluie de projectiles)
{
  cloudSpawnRate: 0.020,
  shootingClouds: 0.95,
  rainSpeed: { min: 12, max: 15 },
  powerUpRate: 0.003  // Beaucoup de parapluies nécessaires !
}

// NIVEAU "COURSE CONTRE LA MONTRE"
{
  cloudsToPass: 100,
  cloudSpeed: { min: 3.0, max: 5.0 },  // Ultra rapide !
  cloudSpawnRate: 0.015,
  shootingClouds: 0.2  // Moins de danger, plus de vitesse
}

// NIVEAU "FORTERESSE"
{
  cloudsToPass: 200,
  cloudSpeed: { min: 0.2, max: 0.5 },  // Très lent
  shootingClouds: 1.0,  // Mais toujours dangereux !
  cloudSpawnRate: 0.001,  // Peu de nuages
  powerUpRate: 0.0001  // Presque pas de power-ups
}

// NIVEAU "GÉNÉROSITÉ"
{
  powerUpRate: 0.010,  // Power-ups partout !
  shootingClouds: 0.8,
  cloudSpawnRate: 0.015,
  cloudsToPass: 80
}

// ============================================
// 💡 CONSEILS DE DESIGN
// ============================================

/*
ÉQUILIBRAGE :
- Facile : cloudSpawnRate < 0.006, shootingClouds < 0.5
- Moyen : cloudSpawnRate 0.006-0.009, shootingClouds 0.5-0.7
- Difficile : cloudSpawnRate 0.009-0.012, shootingClouds 0.7-0.85
- Expert : cloudSpawnRate > 0.012, shootingClouds > 0.85

RYTHME :
- Alterner difficile/facile pour éviter la frustration
- Boss tous les 3-4 niveaux
- Bonus après moments difficiles

THÉMATIQUE :
- Chapitre 1 : Introduction douce
- Chapitre 2-3 : Montée en difficulté
- Chapitre 4 : Pic de difficulté
- Chapitre 5 : Conclusion épique

ACCESSIBILITÉ :
- Toujours donner assez de power-ups
- Éviter les "murs de difficulté"
- Tester chaque niveau plusieurs fois
*/
