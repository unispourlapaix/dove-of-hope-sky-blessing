/**
 * 🎮 DOVE OF HOPE: SKY BLESSING
 * =============================
 * Module: Versets Bibliques
 * 
 * Ce module contient tous les versets bibliques du jeu :
 * - Message d'introduction
 * - Versets pour chaque niveau (1-14)
 * - Message de victoire finale
 * - Versets aléatoires pour le mode infini (991+)
 */

/**
 * Message d'introduction du jeu
 */
const INTRO_MESSAGE = "La vie est souvent un long combat, il faut du courage et de la force pour tenir bon aux mauvais jours. Vaillant héros, lève-toi, et avec l'amour de Dieu transforme les nuages gris en bien.";

/**
 * Versets bibliques pour chaque niveau (1-14)
 * Chaque verset contient le texte et la référence biblique
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
 * Messages inspirants pour chaque niveau (1-14)
 */
const LEVEL_MESSAGES = {
    1: "Tu as fait tes premiers pas dans la lumière ! Tu n'es pas seul dans ce combat.",
    2: "Comme un aigle, Dieu te fortifie ! Il te choisit tel que tu es, avec tes faiblesses et ta beauté.",
    3: "Tu n'es pas trop nul, tu n'es pas rejeté. Tu es aimé infiniment !",
    4: "Tes erreurs ne te définissent pas. L'amour de Dieu efface tout et te rend libre !",
    5: "Tu es choisi ! Pas à cause de ta perfection, mais par pure grâce.",
    6: "Dans ta faiblesse, Sa force se révèle. Tu peux tout, car Il te fortifie !",
    7: "Les défis se multiplient, mais tu danses avec les éléments !",
    8: "Tu n'as pas besoin d'être parfait pour être aimé. Tu es déjà aimé parfaitement !",
    9: "Tu n'es pas trop pécheur pour Dieu. Tu es Son héros, Son enfant chéri !",
    10: "L'ancien est passé, voici du nouveau ! Tu renais dans la lumière divine.",
    11: "Lève-toi avec courage ! Tu es digne, tu es capable, tu es victorieux !",
    12: "La Bible n'est pas un livre de jugement, mais un trésor d'amour pour toi ! Ouvre-la avec confiance.",
    13: "Tu approches du sommet ! Lis la Bible comme un vainqueur, pas comme un condamné. Tu es choisi et aimé !",
    14: "Dernier défi avant la victoire totale ! La Bible t'attend, elle est écrite pour toi, héros de lumière ! Continue, tu es presque au sommet !"
};

/**
 * Message de victoire finale (991 nuages)
 */
const VICTORY_MESSAGE = "VICTOIRE ! Tu as transformé les ténèbres en lumière ! Maintenant, ouvre ta Bible avec confiance : tu es choisi, tu es aimé, tu es vainqueur ! « La vie est une aventure extraordinaire » - Psaume 99:1 dit Origine. Que la paix et l'amour règnent dans ton cœur !";

/**
 * Versets aléatoires pour le mode infini (991+ nuages)
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
    },
    {
        text: "L'Éternel est mon berger, je ne manquerai de rien",
        reference: "Psaume 23:1"
    },
    {
        text: "Venez à moi, vous tous qui êtes fatigués",
        reference: "Matthieu 11:28"
    },
    {
        text: "Tu es mon Fils bien-aimé, en toi j'ai mis toute mon affection",
        reference: "Marc 1:11"
    },
    {
        text: "Demandez, et l'on vous donnera",
        reference: "Matthieu 7:7"
    },
    {
        text: "La foi est une ferme assurance des choses qu'on espère",
        reference: "Hébreux 11:1"
    }
];

/**
 * Messages encourageants pour le mode infini
 */
const INFINITE_MESSAGES = [
    "Continue ton aventure ! Chaque nuage dissipé est une victoire !",
    "Tu es un champion de lumière ! Poursuis ta quête !",
    "L'infini t'appartient ! Que ta foi grandisse encore !",
    "Tu dépasses toutes les limites ! Bravo, héros éternel !",
    "Ta persévérance est admirable ! Continue à briller !",
    "Tu es une source d'inspiration ! Vole encore plus haut !",
    "Rien ne peut t'arrêter ! Ta lumière est éternelle !",
    "Magnifique ! Le ciel célèbre ta victoire !"
];

/**
 * Obtenir le verset d'un niveau spécifique
 * @param {number} levelId - ID du niveau (1-14)
 * @returns {Object} {text, reference} du verset
 */
function getVerseForLevel(levelId) {
    return LEVEL_VERSES[levelId] || { text: "", reference: "" };
}

/**
 * Obtenir le message d'un niveau spécifique
 * @param {number} levelId - ID du niveau (1-14)
 * @returns {string} Message du niveau
 */
function getMessageForLevel(levelId) {
    return LEVEL_MESSAGES[levelId] || "";
}

/**
 * Obtenir un verset aléatoire pour le mode infini
 * @returns {Object} {text, reference} du verset aléatoire
 */
function getRandomInfiniteVerse() {
    const randomIndex = Math.floor(Math.random() * INFINITE_VERSES.length);
    return INFINITE_VERSES[randomIndex];
}

/**
 * Obtenir un message aléatoire pour le mode infini
 * @returns {string} Message aléatoire
 */
function getRandomInfiniteMessage() {
    const randomIndex = Math.floor(Math.random() * INFINITE_MESSAGES.length);
    return INFINITE_MESSAGES[randomIndex];
}

/**
 * Formater un verset pour l'affichage
 * @param {Object} verse - {text, reference}
 * @returns {string} Verset formaté
 */
function formatVerse(verse) {
    if (!verse || !verse.text) return "";
    return `« ${verse.text} » - ${verse.reference}`;
}

/**
 * Vérifier si c'est un milestone de verset en mode infini (tous les 50 nuages)
 * @param {number} cloudCount - Nombre total de nuages dissipés
 * @returns {boolean} True si c'est un milestone
 */
function isVerseMilestone(cloudCount) {
    if (cloudCount < 991) return false;
    const cloudsSinceVictory = cloudCount - 991;
    return cloudsSinceVictory > 0 && cloudsSinceVictory % 50 === 0;
}

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        INTRO_MESSAGE,
        LEVEL_VERSES,
        LEVEL_MESSAGES,
        VICTORY_MESSAGE,
        INFINITE_VERSES,
        INFINITE_MESSAGES,
        getVerseForLevel,
        getMessageForLevel,
        getRandomInfiniteVerse,
        getRandomInfiniteMessage,
        formatVerse,
        isVerseMilestone
    };
}

// Log de chargement
// console.log('📖 Module Versets chargé:', {
//     niveaux: Object.keys(LEVEL_VERSES).length,
//     versetsInfinis: INFINITE_VERSES.length,
//     messagesInfinis: INFINITE_MESSAGES.length
// });
