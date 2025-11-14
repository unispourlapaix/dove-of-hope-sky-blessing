/**
 * 🎮 DOVE OF HOPE: SKY BLESSING
 * =============================
 * Module: Système de Scoring et Récompenses
 * 
 * Ce module gère :
 * - Le système de points
 * - Les échelons de courage
 * - Les 10 blasons de connaissance bienveillante
 */

/**
 * Configuration du système de points
 */
const SCORING = {
    cloudDestroyed: 100,           // Points par nuage détruit
    rainAvoided: 50,               // Points pour éviter la pluie
    powerUpCollected: 200,         // Points pour power-up collecté
    levelCompleted: 1000,          // Bonus de niveau complété
    noLifeLost: 500,               // Bonus si aucune vie perdue
    perfectLevel: 2000,            // Bonus niveau parfait (tous les nuages sans dégât)
    comboMultiplier: 1.5,          // Multiplicateur de combo (3+ nuages consécutifs)
    speedBonus: 50                 // Bonus par nuage détruit rapidement
};

/**
 * Échelons de Courage - 10 rangs basés sur le score total
 */
const COURAGE_RANKS = [
    {
        id: 1,
        name: "Colombe Naissante",
        icon: "🐣",
        minScore: 0,
        maxScore: 5000,
        message: "Tes premiers battements d'ailes sont pleins de promesses !",
        color: "#ecf0f1"
    },
    {
        id: 2,
        name: "Aile Timide",
        icon: "🕊️",
        minScore: 5001,
        maxScore: 15000,
        message: "Tu prends confiance, continue à t'élever !",
        color: "#bdc3c7"
    },
    {
        id: 3,
        name: "Messager d'Espoir",
        icon: "🌟",
        minScore: 15001,
        maxScore: 30000,
        message: "Ta lumière commence à percer les ténèbres !",
        color: "#f1c40f"
    },
    {
        id: 4,
        name: "Gardien Céleste",
        icon: "✨",
        minScore: 30001,
        maxScore: 50000,
        message: "Le ciel te reconnait comme protecteur !",
        color: "#3498db"
    },
    {
        id: 5,
        name: "Chevalier de la Foi",
        icon: "⚔️",
        minScore: 50001,
        maxScore: 75000,
        message: "Ton courage inspire les autres créatures ailées !",
        color: "#9b59b6"
    },
    {
        id: 6,
        name: "Ange Guerrier",
        icon: "👼",
        minScore: 75001,
        maxScore: 100000,
        message: "Tu combats l'obscurité avec grâce et puissance !",
        color: "#e74c3c"
    },
    {
        id: 7,
        name: "Champion Divin",
        icon: "🏆",
        minScore: 100001,
        maxScore: 150000,
        message: "Les anges chantent tes exploits dans les cieux !",
        color: "#e67e22"
    },
    {
        id: 8,
        name: "Séraphin Vaillant",
        icon: "🔥",
        minScore: 150001,
        maxScore: 200000,
        message: "Ton feu intérieur brille comme mille soleils !",
        color: "#c0392b"
    },
    {
        id: 9,
        name: "Archange de Lumière",
        icon: "⭐",
        minScore: 200001,
        maxScore: 300000,
        message: "Ta sagesse et ton courage sont légendaires !",
        color: "#f39c12"
    },
    {
        id: 10,
        name: "Légende Éternelle",
        icon: "👑",
        minScore: 300001,
        maxScore: Infinity,
        message: "Tu es devenu une légende vivante, source d'inspiration éternelle !",
        color: "#d4af37"
    }
];

/**
 * 10 Blasons de Connaissance Bienveillante
 * Débloqués par des actions spécifiques dans le jeu
 */
const KNOWLEDGE_BADGES = [
    {
        id: 1,
        name: "Cœur Compatissant",
        icon: "❤️",
        description: "Comprendre que l'amour de Dieu est inconditionnel",
        requirement: "Terminer le niveau 8 (Amour Inconditionnel)",
        verse: "L'amour ne périt jamais",
        unlocked: false
    },
    {
        id: 2,
        name: "Esprit de Sagesse",
        icon: "📖",
        description: "Ouvrir son cœur à la Parole",
        requirement: "Terminer le niveau 12 (Porte de la Sagesse)",
        verse: "Ta parole est une lampe à mes pieds",
        unlocked: false
    },
    {
        id: 3,
        name: "Force Intérieure",
        icon: "💪",
        description: "Puiser sa force dans la foi",
        requirement: "Terminer le niveau 6 (Force Intérieure)",
        verse: "Je peux tout par celui qui me fortifie",
        unlocked: false
    },
    {
        id: 4,
        name: "Persévérance Divine",
        icon: "🦁",
        description: "Ne jamais abandonner face aux épreuves",
        requirement: "Atteindre 500 nuages dissipés",
        verse: "Soyez forts et prenez courage",
        unlocked: false
    },
    {
        id: 5,
        name: "Grâce Transformatrice",
        icon: "🦋",
        description: "Renaître dans la lumière",
        requirement: "Terminer le niveau 10 (Nouvelle Créature)",
        verse: "Si quelqu'un est en Christ, il est une nouvelle créature",
        unlocked: false
    },
    {
        id: 6,
        name: "Foi Inébranlable",
        icon: "🕊️",
        description: "Croire même dans la tempête",
        requirement: "Terminer le niveau 7 sans perdre de vie",
        verse: "Après la pluie vient le beau temps",
        unlocked: false
    },
    {
        id: 7,
        name: "Liberté Spirituelle",
        icon: "🔓",
        description: "Se libérer des chaînes du passé",
        requirement: "Terminer le niveau 4 (Pardon et Liberté)",
        verse: "Là où est l'Esprit, là est la liberté",
        unlocked: false
    },
    {
        id: 8,
        name: "Lumière Éternelle",
        icon: "💡",
        description: "Être une lumière dans les ténèbres",
        requirement: "Dissiper 100 nuages sans mourir",
        verse: "La lumière brille dans les ténèbres",
        unlocked: false
    },
    {
        id: 9,
        name: "Héros Céleste",
        icon: "🦸",
        description: "Être reconnu comme enfant de Dieu",
        requirement: "Terminer le niveau 9 (Héros de Lumière)",
        verse: "Ta foi t'a sauvé",
        unlocked: false
    },
    {
        id: 10,
        name: "Maître Spirituel",
        icon: "🌟",
        description: "Atteindre la victoire finale",
        requirement: "Atteindre 991 nuages (Victoire Finale)",
        verse: "La vie est une aventure extraordinaire",
        unlocked: false
    }
];

/**
 * Statistiques de jeu
 */
let gameStats = {
    totalScore: 0,
    highScore: 0,
    cloudsDestroyed: 0,
    livesLost: 0,
    powerUpsCollected: 0,
    perfectLevels: 0,
    currentCombo: 0,
    bestCombo: 0,
    playTime: 0,
    gamesPlayed: 0
};

/**
 * Obtenir l'échelon de courage actuel basé sur le score
 * @param {number} score - Score total
 * @returns {Object} Échelon de courage
 */
function getCurrentCourageRank(score) {
    for (let i = COURAGE_RANKS.length - 1; i >= 0; i--) {
        if (score >= COURAGE_RANKS[i].minScore) {
            return COURAGE_RANKS[i];
        }
    }
    return COURAGE_RANKS[0];
}

/**
 * Obtenir le prochain échelon de courage
 * @param {number} score - Score actuel
 * @returns {Object|null} Prochain échelon ou null si dernier rang
 */
function getNextCourageRank(score) {
    const currentRank = getCurrentCourageRank(score);
    const nextRankIndex = COURAGE_RANKS.findIndex(r => r.id === currentRank.id) + 1;
    return nextRankIndex < COURAGE_RANKS.length ? COURAGE_RANKS[nextRankIndex] : null;
}

/**
 * Calculer les points pour un nuage détruit
 * @param {number} combo - Combo actuel
 * @param {boolean} isSpeedBonus - Bonus de vitesse
 * @returns {number} Points gagnés
 */
function calculateCloudPoints(combo = 0, isSpeedBonus = false) {
    let points = SCORING.cloudDestroyed;
    
    // Bonus de combo (3+ nuages consécutifs)
    if (combo >= 3) {
        points *= SCORING.comboMultiplier;
    }
    
    // Bonus de vitesse
    if (isSpeedBonus) {
        points += SCORING.speedBonus;
    }
    
    return Math.floor(points);
}

/**
 * Vérifier et débloquer un blason
 * @param {number} badgeId - ID du blason
 */
function unlockBadge(badgeId) {
    const badge = KNOWLEDGE_BADGES.find(b => b.id === badgeId);
    if (badge && !badge.unlocked) {
        badge.unlocked = true;
        return badge;
    }
    return null;
}

/**
 * Vérifier les conditions de déblocage des blasons
 * @param {Object} context - Contexte du jeu (niveau, nuages, etc.)
 * @returns {Array} Blasons débloqués
 */
function checkBadgeUnlocks(context) {
    const unlockedBadges = [];
    
    // Blason 1: Cœur Compatissant - Niveau 8
    if (context.levelCompleted === 8) {
        const badge = unlockBadge(1);
        if (badge) unlockedBadges.push(badge);
    }
    
    // Blason 2: Esprit de Sagesse - Niveau 12
    if (context.levelCompleted === 12) {
        const badge = unlockBadge(2);
        if (badge) unlockedBadges.push(badge);
    }
    
    // Blason 3: Force Intérieure - Niveau 6
    if (context.levelCompleted === 6) {
        const badge = unlockBadge(3);
        if (badge) unlockedBadges.push(badge);
    }
    
    // Blason 4: Persévérance Divine - 500 nuages
    if (context.totalClouds >= 500) {
        const badge = unlockBadge(4);
        if (badge) unlockedBadges.push(badge);
    }
    
    // Blason 5: Grâce Transformatrice - Niveau 10
    if (context.levelCompleted === 10) {
        const badge = unlockBadge(5);
        if (badge) unlockedBadges.push(badge);
    }
    
    // Blason 6: Foi Inébranlable - Niveau 7 sans vie perdue
    if (context.levelCompleted === 7 && context.livesLostInLevel === 0) {
        const badge = unlockBadge(6);
        if (badge) unlockedBadges.push(badge);
    }
    
    // Blason 7: Liberté Spirituelle - Niveau 4
    if (context.levelCompleted === 4) {
        const badge = unlockBadge(7);
        if (badge) unlockedBadges.push(badge);
    }
    
    // Blason 8: Lumière Éternelle - 100 nuages sans mourir
    if (context.cloudStreak >= 100) {
        const badge = unlockBadge(8);
        if (badge) unlockedBadges.push(badge);
    }
    
    // Blason 9: Héros Céleste - Niveau 9
    if (context.levelCompleted === 9) {
        const badge = unlockBadge(9);
        if (badge) unlockedBadges.push(badge);
    }
    
    // Blason 10: Maître Spirituel - 991 nuages (Victoire)
    if (context.totalClouds >= 991) {
        const badge = unlockBadge(10);
        if (badge) unlockedBadges.push(badge);
    }
    
    return unlockedBadges;
}

/**
 * Obtenir le nombre de blasons débloqués
 * @returns {number} Nombre de blasons débloqués
 */
function getUnlockedBadgesCount() {
    return KNOWLEDGE_BADGES.filter(b => b.unlocked).length;
}

/**
 * Obtenir le pourcentage de progression des blasons
 * @returns {number} Pourcentage (0-100)
 */
function getBadgeProgress() {
    return Math.floor((getUnlockedBadgesCount() / KNOWLEDGE_BADGES.length) * 100);
}

/**
 * Réinitialiser les blasons (pour nouveau jeu)
 */
function resetBadges() {
    KNOWLEDGE_BADGES.forEach(badge => {
        badge.unlocked = false;
    });
}

/**
 * Sauvegarder les statistiques dans localStorage
 */
function saveStats() {
    try {
        localStorage.setItem('doveOfHope_stats', JSON.stringify(gameStats));
        localStorage.setItem('doveOfHope_badges', JSON.stringify(KNOWLEDGE_BADGES));
    } catch (e) {
        console.warn('Impossible de sauvegarder les stats:', e);
    }
}

/**
 * Charger les statistiques depuis localStorage
 */
function loadStats() {
    try {
        const savedStats = localStorage.getItem('doveOfHope_stats');
        if (savedStats) {
            gameStats = JSON.parse(savedStats);
        }
        
        const savedBadges = localStorage.getItem('doveOfHope_badges');
        if (savedBadges) {
            const loaded = JSON.parse(savedBadges);
            loaded.forEach((savedBadge, index) => {
                if (KNOWLEDGE_BADGES[index]) {
                    KNOWLEDGE_BADGES[index].unlocked = savedBadge.unlocked;
                }
            });
        }
    } catch (e) {
        console.warn('Impossible de charger les stats:', e);
    }
}

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SCORING,
        COURAGE_RANKS,
        KNOWLEDGE_BADGES,
        gameStats,
        getCurrentCourageRank,
        getNextCourageRank,
        calculateCloudPoints,
        unlockBadge,
        checkBadgeUnlocks,
        getUnlockedBadgesCount,
        getBadgeProgress,
        resetBadges,
        saveStats,
        loadStats
    };
}

// Log de chargement
console.log('🏆 Module Scoring chargé:', {
    echelons: COURAGE_RANKS.length,
    blasons: KNOWLEDGE_BADGES.length
});

// Charger les stats au démarrage
loadStats();
