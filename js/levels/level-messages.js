/**
 * 🎮 DOVE OF HOPE: SKY BLESSING
 * =============================
 * Module: Messages des Niveaux
 * 
 * Ce module contient tous les messages affichés lors du jeu.
 * Les messages sont maintenant récupérés depuis le système de traduction.
 */

/**
 * Message d'introduction du jeu
 */
function getIntroMessage() {
  return typeof t === 'function' ? t('intro') : "La vie est souvent un long combat, il faut du courage et de la force pour tenir bon aux mauvais jours. Vaillant héros, lève-toi, et avec l'amour de Dieu transforme les nuages gris en bien.";
}

/**
 * Obtenir le message d'un niveau spécifique
 * @param {number} levelId - ID du niveau (1-14)
 * @returns {string} Message du niveau
 */
function getLevelMessage(levelId) {
  // Récupérer le message depuis ranks (nouveau système)
  if (typeof LANGUAGES !== 'undefined' && typeof currentLang !== 'undefined' && levelId >= 1 && levelId <= 14) {
    const lang = LANGUAGES[currentLang];
    if (lang && lang.ranks && lang.ranks[levelId] && lang.ranks[levelId].message) {
      return lang.ranks[levelId].message;
    }
  }
  // Fallback en français (messages des ranks)
  const LEVEL_MESSAGES = {
    1: "Ton voyage céleste commence. Prends les commandes et apprends à naviguer entre les nuages. Chaque mission te rapproche de ta destinée.",
    2: "Tu progresses rapidement ! Ton habileté grandit, ta confiance s'affirme. Continue à t'élever vers les hauteurs.",
    3: "Tes ailes se déploient avec assurance ! Tu maîtrises les bases du vol et découvres la liberté des cieux.",
    4: "Les vents te connaissent, les nuages te respectent ! Tu navigues avec aisance dans les courants célestes.",
    5: "Tu danses entre les nuages comme un maître ! Tes réflexes s'aiguisent, ta précision devient légendaire.",
    6: "Tu fais partie des meilleurs ! Ton expertise inspire les autres pilotes. Tu voles avec une grâce divine.",
    7: "On te confie des missions stratégiques ! Tu commandes le ciel avec sagesse et courage, guidé par la lumière divine.",
    8: "Tu anticipes chaque mouvement ! Ton intelligence tactique et ta vision stratégique dépassent l'ordinaire.",
    9: "Tu as traversé mille orages ! Chaque cicatrice raconte une victoire. Tu es une légende vivante des cieux.",
    10: "Tes exploits sont chantés dans tous les royaumes ! Tu incarnes le courage et la détermination sans faille.",
    11: "Ton nom résonne dans tous les cieux ! Les cadets rêvent de devenir comme toi. Tu incarnes l'excellence et la grâce.",
    12: "Ta renommée traverse les âges ! Ton héritage inspirera les générations futures de pilotes célestes.",
    13: "Tu ne voles plus, tu composes une symphonie céleste ! Chaque mouvement est perfection, chaque mission un chef-d'œuvre.",
    14: "Tu as transcendé la mortalité ! Gardien céleste, protecteur des cieux, ton vol est désormais éternel. L'infini t'appartient !"
  };
  return LEVEL_MESSAGES[levelId] || "";
}

/**
 * Message de victoire finale (991 nuages)
 */
function getVictoryMessage() {
  return typeof t === 'function' ? t('victory_message') : "VICTOIRE ! Tu as transformé les ténèbres en lumière ! Maintenant, ouvre ta Bible avec confiance : tu es choisi, tu es aimé, tu es vainqueur ! « La vie est une aventure extraordinaire » - Psaume 99:1 dit Origine. Que la paix et l'amour règnent dans ton cœur !";
}

/**
 * Obtenir un message aléatoire du mode infini
 * @returns {string} Message aléatoire du mode infini
 */
function getInfiniteModeMessage() {
  if (typeof t === 'function') {
    const messages = t('infinite_messages');
    if (Array.isArray(messages) && messages.length > 0) {
      return messages[Math.floor(Math.random() * messages.length)];
    }
  }
  // Fallback
  const INFINITE_MODE_MESSAGES = [
    "Continue ton aventure ! Chaque nuage dissipé est une victoire !",
    "Tu es un champion de lumière ! Poursuis ta quête !",
    "L'infini t'appartient ! Que ta foi grandisse encore !",
    "Tu dépasses toutes les limites ! Bravo, héros éternel !",
    "Ta persévérance est admirable ! Continue à briller !"
  ];
  return INFINITE_MODE_MESSAGES[Math.floor(Math.random() * INFINITE_MODE_MESSAGES.length)];
}

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getIntroMessage,
        getLevelMessage,
        getVictoryMessage,
        getInfiniteModeMessage
    };
}
