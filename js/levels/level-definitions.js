/**
 * 🎮 DOVE OF HOPE: SKY BLESSING
 * =============================
 * Module: Définitions des Niveaux
 * 
 * Ce module contient les définitions de base des 14 niveaux du jeu.
 * Chaque niveau a un seuil de nuages, un titre et un identifiant unique.
 */

const LEVEL_DEFINITIONS = [
    {
        id: 1,
        threshold: 0,
        title: "L'Aube de l'Espoir",
        icon: "🌅"
    },
    {
        id: 2,
        threshold: 51,
        title: "Le Souffle Divin",
        icon: "🌬️"
    },
    {
        id: 3,
        threshold: 101,
        title: "Ailes de Foi",
        icon: "🕊️"
    },
    {
        id: 4,
        threshold: 151,
        title: "Pardon et Liberté",
        icon: "🔓"
    },
    {
        id: 5,
        threshold: 201,
        title: "Choisi et Précieux",
        icon: "💎"
    },
    {
        id: 6,
        threshold: 251,
        title: "Force Intérieure",
        icon: "💪"
    },
    {
        id: 7,
        threshold: 301,
        title: "Tempête de Grâce",
        icon: "⛈️"
    },
    {
        id: 8,
        threshold: 351,
        title: "Amour Inconditionnel",
        icon: "❤️"
    },
    {
        id: 9,
        threshold: 401,
        title: "Héros de Lumière",
        icon: "🦸"
    },
    {
        id: 10,
        threshold: 451,
        title: "Nouvelle Créature",
        icon: "🦋"
    },
    {
        id: 11,
        threshold: 551,
        title: "Courage du Lion",
        icon: "🦁"
    },
    {
        id: 12,
        threshold: 651,
        title: "Porte de la Sagesse",
        icon: "📖"
    },
    {
        id: 13,
        threshold: 751,
        title: "Ciel Nouveau",
        icon: "🌌"
    },
    {
        id: 14,
        threshold: 851,
        title: "L'Aventure Éternelle",
        icon: "✨"
    }
];

/**
 * Seuil de victoire finale
 */
const VICTORY_THRESHOLD = 991;

/**
 * Seuil pour le mode infini
 */
const INFINITE_MODE_THRESHOLD = 991;

/**
 * Intervalle pour les versets aléatoires en mode infini (tous les 50 nuages)
 */
const INFINITE_VERSE_INTERVAL = 50;

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LEVEL_DEFINITIONS,
        VICTORY_THRESHOLD,
        INFINITE_MODE_THRESHOLD,
        INFINITE_VERSE_INTERVAL
    };
}
