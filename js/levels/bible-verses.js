/**
 * 🎮 DOVE OF HOPE: SKY BLESSING
 * =============================
 * Module: Versets Bibliques
 * 
 * Ce module contient tous les versets bibliques associés aux niveaux
 * et le système de versets aléatoires pour le mode infini.
 */

/**
 * Versets bibliques pour chaque niveau (1-14)
 */
const LEVEL_VERSES = {
    1: {
        text: "La lumière brille dans les ténèbres",
        reference: "Jean 1:5"
    },
    
    2: {
        text: "L'Esprit de Dieu planait sur les eaux",
        reference: "Genèse 1:2"
    },
    
    3: {
        text: "Ceux qui espèrent en l'Éternel prennent des ailes comme les aigles",
        reference: "Ésaïe 40:31"
    },
    
    4: {
        text: "Là où est l'Esprit, là est la liberté",
        reference: "2 Corinthiens 3:17"
    },
    
    5: {
        text: "Je t'ai appelé par ton nom, tu es à moi",
        reference: "Ésaïe 43:1"
    },
    
    6: {
        text: "Je peux tout par celui qui me fortifie",
        reference: "Philippiens 4:13"
    },
    
    7: {
        text: "Après la pluie vient le beau temps",
        reference: "Job 37:11"
    },
    
    8: {
        text: "L'amour ne périt jamais",
        reference: "1 Corinthiens 13:8"
    },
    
    9: {
        text: "Ta foi t'a sauvé",
        reference: "Luc 7:50"
    },
    
    10: {
        text: "Si quelqu'un est en Christ, il est une nouvelle créature",
        reference: "2 Corinthiens 5:17"
    },
    
    11: {
        text: "Soyez forts et prenez courage",
        reference: "Josué 1:9"
    },
    
    12: {
        text: "Ta parole est une lampe à mes pieds",
        reference: "Psaume 119:105"
    },
    
    13: {
        text: "Vous êtes une race élue",
        reference: "1 Pierre 2:9"
    },
    
    14: {
        text: "La vie est une aventure extraordinaire",
        reference: "Psaume 99:1 (dit Origine)"
    }
};

/**
 * Versets aléatoires pour le mode infini (991+)
 * Affichés tous les 50 nuages
 */
const INFINITE_VERSES = [
    {
        text: "Que votre cœur ne se trouble pas",
        reference: "Jean 14:1"
    },
    {
        text: "Je suis avec vous tous les jours",
        reference: "Matthieu 28:20"
    },
    {
        text: "L'Éternel est ma lumière et mon salut",
        reference: "Psaume 27:1"
    },
    {
        text: "Vous êtes la lumière du monde",
        reference: "Matthieu 5:14"
    },
    {
        text: "L'amour couvre une multitude de péchés",
        reference: "1 Pierre 4:8"
    },
    {
        text: "Car Dieu a tant aimé le monde",
        reference: "Jean 3:16"
    },
    {
        text: "Cherchez premièrement le royaume de Dieu",
        reference: "Matthieu 6:33"
    },
    {
        text: "Le juste vivra par la foi",
        reference: "Romains 1:17"
    },
    {
        text: "Tout est possible à celui qui croit",
        reference: "Marc 9:23"
    },
    {
        text: "Dieu est amour",
        reference: "1 Jean 4:8"
    },
    {
        text: "Rien ne pourra nous séparer de l'amour de Dieu",
        reference: "Romains 8:39"
    },
    {
        text: "Marchez par l'Esprit",
        reference: "Galates 5:16"
    },
    {
        text: "Réjouissez-vous toujours dans le Seigneur",
        reference: "Philippiens 4:4"
    },
    {
        text: "La paix de Dieu garde vos cœurs",
        reference: "Philippiens 4:7"
    },
    {
        text: "Ne crains rien, car je suis avec toi",
        reference: "Ésaïe 41:10"
    },
    {
        text: "Le Seigneur est ma force et mon bouclier",
        reference: "Psaume 28:7"
    },
    {
        text: "Heureux ceux qui ont le cœur pur",
        reference: "Matthieu 5:8"
    },
    {
        text: "L'espérance ne trompe point",
        reference: "Romains 5:5"
    },
    {
        text: "Faites tout avec amour",
        reference: "1 Corinthiens 16:14"
    },
    {
        text: "Que la grâce du Seigneur soit avec vous",
        reference: "1 Corinthiens 16:23"
    }
];

/**
 * Obtenir le verset d'un niveau spécifique
 * @param {number} levelId - ID du niveau (1-14)
 * @returns {Object} {text, reference} du verset
 */
function getLevelVerse(levelId) {
    return LEVEL_VERSES[levelId] || { text: "", reference: "" };
}

/**
 * Obtenir un verset aléatoire pour le mode infini
 * @returns {Object} {text, reference} du verset aléatoire
 */
function getRandomVerse() {
    const randomIndex = Math.floor(Math.random() * INFINITE_VERSES.length);
    return INFINITE_VERSES[randomIndex];
}

/**
 * Formater un verset pour l'affichage
 * @param {Object} verse - {text, reference}
 * @returns {string} Verset formaté
 */
function formatVerse(verse) {
    return `« ${verse.text} » - ${verse.reference}`;
}

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LEVEL_VERSES,
        INFINITE_VERSES,
        getLevelVerse,
        getRandomVerse,
        formatVerse
    };
}
