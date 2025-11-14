// ============================================
// 🛠️ UTILITAIRES POUR LE SYSTÈME DE TRADUCTION
// ============================================

/**
 * Vérifier qu'une langue est complète
 */
function checkLanguageCompleteness(langCode) {
  const lang = LANGUAGES[langCode];
  
  if (!lang) {
    console.error(`❌ Langue "${langCode}" non trouvée`);
    return false;
  }
  
  const required = {
    ui: 4,           // 4 clés (score, clouds, level, lives)
    buttons: 3,      // 3 clés (start, play, restart)
    messages: 6,     // 6 clés (start, restart, gameOver, victory, levelUp, motivation)
    gameplay: 10,    // 10 messages
    rain: 3,         // 3 messages
    powerups: 3      // 3 clés (umbrella, speed, multishot)
  };
  
  console.log(`\n🔍 Vérification de ${lang.name} (${langCode}):`);
  
  let isComplete = true;
  
  // Vérifier chaque section
  Object.keys(required).forEach(section => {
    const actual = Array.isArray(lang[section]) 
      ? lang[section].length 
      : Object.keys(lang[section] || {}).length;
    
    const expected = required[section];
    const status = actual === expected ? '✅' : '❌';
    
    if (actual !== expected) isComplete = false;
    
    console.log(`${status} ${section}: ${actual}/${expected}`);
  });
  
  console.log(`\n${isComplete ? '✅ Langue complète' : '❌ Langue incomplète'}`);
  return isComplete;
}

/**
 * Vérifier toutes les langues
 */
function checkAllLanguages() {
  console.log('🌍 Vérification de toutes les langues...\n');
  
  const results = {};
  Object.keys(LANGUAGES).forEach(langCode => {
    results[langCode] = checkLanguageCompleteness(langCode);
  });
  
  console.log('\n📊 Résumé:');
  const complete = Object.values(results).filter(Boolean).length;
  const total = Object.keys(results).length;
  console.log(`${complete}/${total} langues complètes (${Math.round(complete/total*100)}%)`);
  
  return results;
}

/**
 * Comparer deux langues
 */
function compareLanguages(lang1Code, lang2Code) {
  const lang1 = LANGUAGES[lang1Code];
  const lang2 = LANGUAGES[lang2Code];
  
  if (!lang1 || !lang2) {
    console.error('❌ Une ou plusieurs langues non trouvées');
    return;
  }
  
  console.log(`\n🔄 Comparaison ${lang1.name} vs ${lang2.name}:`);
  
  // Comparer les structures
  const keys1 = JSON.stringify(Object.keys(lang1).sort());
  const keys2 = JSON.stringify(Object.keys(lang2).sort());
  
  console.log('Structure identique:', keys1 === keys2 ? '✅' : '❌');
  
  // Comparer les longueurs
  ['ui', 'buttons', 'messages', 'powerups'].forEach(section => {
    const len1 = Object.keys(lang1[section]).length;
    const len2 = Object.keys(lang2[section]).length;
    console.log(`${section}: ${len1 === len2 ? '✅' : '❌'} (${len1} vs ${len2})`);
  });
  
  ['gameplay', 'rain'].forEach(section => {
    const len1 = lang1[section].length;
    const len2 = lang2[section].length;
    console.log(`${section}: ${len1 === len2 ? '✅' : '❌'} (${len1} vs ${len2})`);
  });
}

/**
 * Générer un template de langue
 */
function generateLanguageTemplate(langCode, langName, flagEmoji) {
  const template = `// ============================================
// ${flagEmoji} ${langName.toUpperCase()} - DOVE OF HOPE
// ============================================

const ${langCode.replace('-', '_')} = {
  code: '${langCode}',
  name: '${langName}',
  flag: '${flagEmoji}',
  
  ui: {
    score: 'Score',
    clouds: 'Clouds',
    level: 'Level',
    lives: 'Life'
  },
  
  buttons: {
    start: 'Start!',
    play: 'PLAY',
    restart: 'RESTART'
  },
  
  messages: {
    start: 'Fly, little dove! Clear the clouds!',
    restart: 'The dove is reborn! Here we go again!',
    gameOver: 'Game Over! But in adversity, you shine even brighter!',
    victory: 'VICTORY! Psalm 99.1 - Life is an extraordinary adventure! - says Origen',
    levelUp: 'Level {level} - The light grows!',
    motivation: 'It\\'s time to light up - It\\'s a beautiful time to realize your dreams!'
  },
  
  gameplay: [
    'Move, it\\'s time!',
    'The dove brings hope!',
    'Keep going, the light returns!',
    'Your wings carry hope!',
    'Persevere, the sun awaits you!',
    'Fly to your dreams!',
    'After the rain comes sunshine!',
    'Knowing how to dance in the rain is knowing how to be happy!',
    'Your faith is stronger than the storm!',
    'Dance with the elements, you are free!'
  ],
  
  rain: [
    'After the rain comes sunshine!',
    'Your faith is stronger than the storm!',
    'The storm reveals the strength of your wings!'
  ],
  
  powerups: {
    umbrella: 'Umbrella activated! Dance with the elements!',
    speed: 'Divine speed! Your wings are free!',
    multishot: 'Triple light! Your heart shines!'
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ${langCode.replace('-', '_')};
}`;
  
  console.log(`\n📝 Template généré pour ${langName} (${langCode}):`);
  console.log('Copier ce code dans js/translations/' + langCode + '.js\n');
  console.log(template);
  
  return template;
}

/**
 * Lister toutes les langues disponibles
 */
function listLanguages() {
  console.log('\n🌍 Langues disponibles:\n');
  
  Object.keys(LANGUAGES).forEach(code => {
    const lang = LANGUAGES[code];
    console.log(`${lang.flag} ${lang.name.padEnd(20)} (${code})`);
  });
  
  console.log(`\nTotal: ${Object.keys(LANGUAGES).length} langues`);
}

/**
 * Obtenir les statistiques de traduction
 */
function getTranslationStats() {
  const stats = {
    totalLanguages: Object.keys(LANGUAGES).length,
    totalTranslations: 0,
    bySection: {}
  };
  
  Object.keys(LANGUAGES).forEach(langCode => {
    const lang = LANGUAGES[langCode];
    
    // Compter les traductions
    stats.totalTranslations += Object.keys(lang.ui).length;
    stats.totalTranslations += Object.keys(lang.buttons).length;
    stats.totalTranslations += Object.keys(lang.messages).length;
    stats.totalTranslations += lang.gameplay.length;
    stats.totalTranslations += lang.rain.length;
    stats.totalTranslations += Object.keys(lang.powerups).length;
  });
  
  console.log('\n📊 Statistiques de traduction:');
  console.log(`Langues: ${stats.totalLanguages}`);
  console.log(`Traductions totales: ${stats.totalTranslations}`);
  console.log(`Moyenne par langue: ${Math.round(stats.totalTranslations / stats.totalLanguages)}`);
  
  return stats;
}

/**
 * Rechercher une traduction dans toutes les langues
 */
function findTranslation(key) {
  console.log(`\n🔎 Recherche de "${key}" dans toutes les langues:\n`);
  
  const keys = key.split('.');
  
  Object.keys(LANGUAGES).forEach(langCode => {
    const lang = LANGUAGES[langCode];
    let value = lang;
    
    for (const k of keys) {
      value = value?.[k];
      if (!value) break;
    }
    
    if (value) {
      console.log(`${lang.flag} ${lang.name.padEnd(15)}: ${value}`);
    }
  });
}

// Exporter les utilitaires
if (typeof window !== 'undefined') {
  window.TranslationUtils = {
    checkLanguageCompleteness,
    checkAllLanguages,
    compareLanguages,
    generateLanguageTemplate,
    listLanguages,
    getTranslationStats,
    findTranslation
  };
  
  console.log('🛠️ Utilitaires de traduction chargés ! Utilisez TranslationUtils.*');
}
