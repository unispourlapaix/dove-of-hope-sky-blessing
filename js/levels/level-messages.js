/**
 * 🎮 DOVE OF HOPE: SKY BLESSING
 * =============================
 * Module: Messages des Niveaux
 * 
 * Ce module contient tous les messages affichés lors du jeu :
 * - Message d'introduction
 * - Messages de chaque niveau
 * - Message de victoire finale
 */

/**
 * Message d'introduction du jeu
 */
const INTRO_MESSAGE = "La vie est souvent un long combat, il faut du courage et de la force pour tenir bon aux mauvais jours. Vaillant héros, lève-toi, et avec l'amour de Dieu transforme les nuages gris en bien.";

/**
 * Messages pour chaque niveau (1-14)
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
 * Messages pour le mode infini (991+)
 */
const INFINITE_MODE_MESSAGES = [
    "Continue ton aventure ! Chaque nuage dissipé est une victoire !",
    "Tu es un champion de lumière ! Poursuis ta quête !",
    "L'infini t'appartient ! Que ta foi grandisse encore !",
    "Tu dépasses toutes les limites ! Bravo, héros éternel !",
    "Ta persévérance est admirable ! Continue à briller !"
];

/**
 * Obtenir le message d'un niveau spécifique
 * @param {number} levelId - ID du niveau (1-14)
 * @returns {string} Message du niveau
 */
function getLevelMessage(levelId) {
    return LEVEL_MESSAGES[levelId] || "";
}

/**
 * Obtenir un message aléatoire pour le mode infini
 * @returns {string} Message aléatoire
 */
function getRandomInfiniteMessage() {
    const randomIndex = Math.floor(Math.random() * INFINITE_MODE_MESSAGES.length);
    return INFINITE_MODE_MESSAGES[randomIndex];
}

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        INTRO_MESSAGE,
        LEVEL_MESSAGES,
        VICTORY_MESSAGE,
        INFINITE_MODE_MESSAGES,
        getLevelMessage,
        getRandomInfiniteMessage
    };
}
