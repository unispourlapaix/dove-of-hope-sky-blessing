/**
 * 🎮 DOVE OF HOPE: SKY BLESSING
 * =============================
 * Module: Définitions des Niveaux
 *
 * Ce module contient les définitions de base des 14 niveaux du jeu.
 * Chaque niveau a un seuil de nuages et un identifiant unique.
 * Les titres sont récupérés dynamiquement depuis les traductions.
 */

const LEVEL_DEFINITIONS = [
    {
        id: 1,
        threshold: 0,
        icon: "🎯"
    },
    {
        id: 2,
        threshold: 76,
        icon: "🛩️"
    },
    {
        id: 3,
        threshold: 151,
        icon: "✈️"
    },
    {
        id: 4,
        threshold: 251,
        icon: "🧭"
    },
    {
        id: 5,
        threshold: 376,
        icon: "🦅"
    },
    {
        id: 6,
        threshold: 526,
        icon: "⚡"
    },
    {
        id: 7,
        threshold: 701,
        icon: "⭐"
    },
    {
        id: 8,
        threshold: 901,
        icon: "🎲"
    },
    {
        id: 9,
        threshold: 1126,
        icon: "🎖️"
    },
    {
        id: 10,
        threshold: 1376,
        icon: "🌟"
    },
    {
        id: 11,
        threshold: 1651,
        icon: "🏆"
    },
    {
        id: 12,
        threshold: 1976,
        icon: "💫"
    },
    {
        id: 13,
        threshold: 2351,
        icon: "👑"
    },
    {
        id: 14,
        threshold: 2801,
        icon: "🕊️"
    }
];

/**
 * Fonction pour obtenir le titre traduit d'un niveau
 * @param {number} levelId - ID du niveau (1-14)
 * @param {string} lang - Code de langue (fr, en, es, etc.)
 * @returns {string} - Titre traduit du niveau
 */
function getLevelTitle(levelId, lang = 'fr') {
    // Charge les traductions depuis le module LANGUAGES
    if (typeof LANGUAGES !== 'undefined' && LANGUAGES[lang] && LANGUAGES[lang].level_titles) {
        return LANGUAGES[lang].level_titles[levelId] || `Level ${levelId}`;
    }
    // Fallback en français si les traductions ne sont pas disponibles
    const fallbackTitles = {
        1: "L'Aube de l'Espoir",
        2: "Le Souffle Divin",
        3: "Ailes de Foi",
        4: "Pardon et Liberté",
        5: "Choisi et Précieux",
        6: "Force Intérieure",
        7: "Tempête de Grâce",
        8: "Amour Inconditionnel",
        9: "Héros de Lumière",
        10: "Nouvelle Créature",
        11: "Courage du Lion",
        12: "Porte de la Sagesse",
        13: "Ciel Nouveau",
        14: "L'Aventure Éternelle"
    };
    return fallbackTitles[levelId] || `Level ${levelId}`;
}

/**
 * Seuil de victoire finale
 */
const VICTORY_THRESHOLD = 3800;

/**
 * Seuil pour le mode infini (après avoir terminé le niveau 14)
 * Niveau 14: commence à 2801 + nécessite 999 nuages = 3800 total
 */
const INFINITE_MODE_THRESHOLD = 3800;

/**
 * Intervalle pour les versets aléatoires en mode infini (tous les 100 nuages)
 */
const INFINITE_VERSE_INTERVAL = 100;

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LEVEL_DEFINITIONS,
        VICTORY_THRESHOLD,
        INFINITE_MODE_THRESHOLD,
        INFINITE_VERSE_INTERVAL,
        getLevelTitle
    };
}
