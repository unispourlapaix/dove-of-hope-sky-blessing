/**
 * 🎮 DOVE OF HOPE: SKY BLESSING
 * =============================
 * Module: Système de Progression
 * 
 * Ce module gère la logique de progression entre les niveaux,
 * détecte les changements de niveau et les milestones.
 */

/**
 * Obtenir le niveau actuel en fonction du nombre de nuages
 * @param {number} cloudCount - Nombre de nuages dissipés
 * @returns {number} ID du niveau actuel (1-14, ou 15 pour mode infini)
 */
function getCurrentLevel(cloudCount) {
    // Mode infini (991+)
    if (cloudCount >= INFINITE_MODE_THRESHOLD) {
        return 15; // Mode infini
    }
    
    // Parcourir les niveaux en ordre inverse pour trouver le bon niveau
    for (let i = LEVEL_DEFINITIONS.length - 1; i >= 0; i--) {
        if (cloudCount >= LEVEL_DEFINITIONS[i].threshold) {
            return LEVEL_DEFINITIONS[i].id;
        }
    }
    
    return 1; // Par défaut, niveau 1
}

/**
 * Obtenir les informations complètes d'un niveau
 * @param {number} levelId - ID du niveau (1-14)
 * @returns {Object} Informations du niveau
 */
function getLevelInfo(levelId) {
    if (levelId === 15) {
        return {
            id: 15,
            title: "Mode Infini",
            icon: "♾️",
            threshold: INFINITE_MODE_THRESHOLD,
            message: getRandomInfiniteMessage(),
            verse: getRandomVerse()
        };
    }
    
    const definition = LEVEL_DEFINITIONS.find(level => level.id === levelId);
    if (!definition) return null;
    
    return {
        ...definition,
        message: getLevelMessage(levelId),
        verse: getLevelVerse(levelId)
    };
}

/**
 * Vérifier si un changement de niveau s'est produit
 * @param {number} oldCloudCount - Ancien nombre de nuages
 * @param {number} newCloudCount - Nouveau nombre de nuages
 * @returns {Object|null} Informations du nouveau niveau, ou null si pas de changement
 */
function checkLevelUp(oldCloudCount, newCloudCount) {
    const oldLevel = getCurrentLevel(oldCloudCount);
    const newLevel = getCurrentLevel(newCloudCount);
    
    if (newLevel > oldLevel) {
        return getLevelInfo(newLevel);
    }
    
    return null;
}

/**
 * Vérifier si la victoire finale est atteinte
 * @param {number} cloudCount - Nombre de nuages dissipés
 * @returns {boolean} True si victoire finale
 */
function isVictory(cloudCount) {
    return cloudCount >= VICTORY_THRESHOLD;
}

/**
 * Vérifier si le mode infini est actif
 * @param {number} cloudCount - Nombre de nuages dissipés
 * @returns {boolean} True si mode infini actif
 */
function isInfiniteMode(cloudCount) {
    return cloudCount >= INFINITE_MODE_THRESHOLD;
}

/**
 * Vérifier si c'est un milestone de verset (tous les 50 nuages en mode infini)
 * @param {number} cloudCount - Nombre de nuages dissipés
 * @returns {boolean} True si c'est un milestone de verset
 */
function isVerseMilestone(cloudCount) {
    if (!isInfiniteMode(cloudCount)) return false;
    
    // Vérifier si c'est un multiple de 50 après 991
    const cloudsSinceInfinite = cloudCount - INFINITE_MODE_THRESHOLD;
    return cloudsSinceInfinite > 0 && cloudsSinceInfinite % INFINITE_VERSE_INTERVAL === 0;
}

/**
 * Obtenir le prochain seuil de niveau
 * @param {number} cloudCount - Nombre de nuages actuel
 * @returns {number|null} Seuil du prochain niveau, ou null si mode infini
 */
function getNextLevelThreshold(cloudCount) {
    if (isInfiniteMode(cloudCount)) return null;
    
    const currentLevel = getCurrentLevel(cloudCount);
    const nextLevel = LEVEL_DEFINITIONS.find(level => level.id === currentLevel + 1);
    
    return nextLevel ? nextLevel.threshold : VICTORY_THRESHOLD;
}

/**
 * Calculer le pourcentage de progression vers le prochain niveau
 * @param {number} cloudCount - Nombre de nuages actuel
 * @returns {number} Pourcentage (0-100), ou 100 si mode infini
 */
function getProgressToNextLevel(cloudCount) {
    if (isInfiniteMode(cloudCount)) return 100;
    
    const currentLevel = getCurrentLevel(cloudCount);
    const currentLevelDef = LEVEL_DEFINITIONS.find(level => level.id === currentLevel);
    const nextThreshold = getNextLevelThreshold(cloudCount);
    
    if (!currentLevelDef || !nextThreshold) return 100;
    
    const cloudsInLevel = cloudCount - currentLevelDef.threshold;
    const levelRange = nextThreshold - currentLevelDef.threshold;
    
    return Math.min(100, Math.floor((cloudsInLevel / levelRange) * 100));
}

/**
 * Obtenir un résumé complet de la progression
 * @param {number} cloudCount - Nombre de nuages dissipés
 * @returns {Object} Résumé de progression
 */
function getProgressionSummary(cloudCount) {
    const currentLevel = getCurrentLevel(cloudCount);
    const levelInfo = getLevelInfo(currentLevel);
    const nextThreshold = getNextLevelThreshold(cloudCount);
    const progress = getProgressToNextLevel(cloudCount);
    
    return {
        cloudCount,
        currentLevel: levelInfo,
        nextThreshold,
        progress,
        isVictory: isVictory(cloudCount),
        isInfinite: isInfiniteMode(cloudCount),
        isVerseMilestone: isVerseMilestone(cloudCount)
    };
}

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getCurrentLevel,
        getLevelInfo,
        checkLevelUp,
        isVictory,
        isInfiniteMode,
        isVerseMilestone,
        getNextLevelThreshold,
        getProgressToNextLevel,
        getProgressionSummary
    };
}
