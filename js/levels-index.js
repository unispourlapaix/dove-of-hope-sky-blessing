/**
 * 🎮 DOVE OF HOPE: SKY BLESSING
 * =============================
 * Module: Index des Niveaux
 * 
 * Ce module assemble tous les sous-modules du système de niveaux
 * et expose une API unifiée pour le reste de l'application.
 */

// ============================================================================
// VÉRIFICATION DES DÉPENDANCES
// ============================================================================

// Vérifier que tous les modules sont chargés
if (typeof LEVEL_DEFINITIONS === 'undefined') {
    console.error('❌ Module level-definitions.js non chargé !');
}
if (typeof LEVEL_MESSAGES === 'undefined') {
    console.error('❌ Module level-messages.js non chargé !');
}
if (typeof LEVEL_VERSES === 'undefined') {
    console.error('❌ Module bible-verses.js non chargé !');
}

// ============================================================================
// API PUBLIQUE DU SYSTÈME DE NIVEAUX
// ============================================================================

/**
 * Objet principal exposant toutes les fonctionnalités des niveaux
 */
const LevelSystem = {
    // ========================================================================
    // CONSTANTES
    // ========================================================================
    
    /**
     * Toutes les définitions de niveaux
     */
    definitions: LEVEL_DEFINITIONS,
    
    /**
     * Seuil de victoire
     */
    victoryThreshold: VICTORY_THRESHOLD,
    
    /**
     * Seuil du mode infini
     */
    infiniteThreshold: INFINITE_MODE_THRESHOLD,
    
    /**
     * Intervalle des versets en mode infini
     */
    verseInterval: INFINITE_VERSE_INTERVAL,
    
    /**
     * Message d'introduction
     */
    introMessage: INTRO_MESSAGE,
    
    /**
     * Message de victoire finale
     */
    victoryMessage: VICTORY_MESSAGE,
    
    // ========================================================================
    // FONCTIONS DE PROGRESSION
    // ========================================================================
    
    /**
     * Obtenir le niveau actuel
     */
    getCurrentLevel: getCurrentLevel,
    
    /**
     * Obtenir les informations d'un niveau
     */
    getLevelInfo: getLevelInfo,
    
    /**
     * Vérifier un changement de niveau
     */
    checkLevelUp: checkLevelUp,
    
    /**
     * Vérifier si c'est la victoire
     */
    isVictory: isVictory,
    
    /**
     * Vérifier si mode infini actif
     */
    isInfiniteMode: isInfiniteMode,
    
    /**
     * Vérifier si c'est un milestone de verset
     */
    isVerseMilestone: isVerseMilestone,
    
    /**
     * Obtenir le prochain seuil
     */
    getNextLevelThreshold: getNextLevelThreshold,
    
    /**
     * Obtenir le pourcentage de progression
     */
    getProgressToNextLevel: getProgressToNextLevel,
    
    /**
     * Obtenir un résumé complet
     */
    getProgressionSummary: getProgressionSummary,
    
    // ========================================================================
    // FONCTIONS DE MESSAGES
    // ========================================================================
    
    /**
     * Obtenir le message d'un niveau
     */
    getLevelMessage: getLevelMessage,
    
    /**
     * Obtenir un message aléatoire pour le mode infini
     */
    getRandomInfiniteMessage: getRandomInfiniteMessage,
    
    // ========================================================================
    // FONCTIONS DE VERSETS
    // ========================================================================
    
    /**
     * Obtenir le verset d'un niveau
     */
    getLevelVerse: getLevelVerse,
    
    /**
     * Obtenir un verset aléatoire
     */
    getRandomVerse: getRandomVerse,
    
    /**
     * Formater un verset
     */
    formatVerse: formatVerse,
    
    // ========================================================================
    // FONCTIONS UTILITAIRES
    // ========================================================================
    
    /**
     * Obtenir toutes les informations pour un affichage
     * @param {number} cloudCount - Nombre de nuages
     * @param {string} lang - Code de langue (optionnel, utilise currentLang par défaut)
     * @returns {Object} Toutes les infos formatées
     */
    getDisplayInfo: function(cloudCount, lang) {
        const summary = this.getProgressionSummary(cloudCount, lang);
        const level = summary.currentLevel;
        
        return {
            cloudCount: cloudCount,
            level: {
                id: level.id,
                title: level.title,
                icon: level.icon,
                threshold: level.threshold
            },
            message: level.message,
            verse: this.formatVerse(level.verse),
            progress: {
                percent: summary.progress,
                nextThreshold: summary.nextThreshold
            },
            states: {
                isVictory: summary.isVictory,
                isInfinite: summary.isInfinite,
                isVerseMilestone: summary.isVerseMilestone
            }
        };
    },
    
    /**
     * Afficher un résumé dans la console (debug)
     * @param {number} cloudCount - Nombre de nuages
     */
    debugInfo: function(cloudCount) {
        const info = this.getDisplayInfo(cloudCount);
        
        console.group(`🎮 Niveau ${info.level.id}: ${info.level.title} ${info.level.icon}`);
        console.log(`☁️ Nuages: ${info.cloudCount}`);
        console.log(`💬 Message: ${info.message}`);
        console.log(`📖 Verset: ${info.verse}`);
        
        if (!info.states.isInfinite) {
            console.log(`📊 Progression: ${info.progress.percent}% vers niveau suivant`);
            console.log(`🎯 Prochain seuil: ${info.progress.nextThreshold}`);
        }
        
        if (info.states.isVictory) {
            console.log('🏆 VICTOIRE FINALE !');
        }
        if (info.states.isInfinite) {
            console.log('♾️ MODE INFINI ACTIF');
        }
        if (info.states.isVerseMilestone) {
            console.log('📖 Milestone de verset !');
        }
        
        console.groupEnd();
    },
    
    /**
     * Lister tous les niveaux (debug)
     */
    listAllLevels: function() {
        console.group('📋 Liste de tous les niveaux');
        
        this.definitions.forEach(level => {
            const info = this.getLevelInfo(level.id);
            console.log(
                `${info.icon} Niveau ${info.id}: ${info.title} (${info.threshold}+ nuages)`
            );
        });
        
        console.log(`🏆 Victoire finale: ${this.victoryThreshold} nuages`);
        console.log(`♾️ Mode infini: ${this.infiniteThreshold}+ nuages`);
        
        console.groupEnd();
    }
};

// ============================================================================
// LOG DE CHARGEMENT
// ============================================================================

console.log(`🎮 Système de niveaux chargé: ${LEVEL_DEFINITIONS.length} niveaux`);
console.log(`🏆 Seuil de victoire: ${VICTORY_THRESHOLD} nuages`);
console.log(`♾️ Mode infini: ${INFINITE_MODE_THRESHOLD}+ nuages`);

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LevelSystem;
}
