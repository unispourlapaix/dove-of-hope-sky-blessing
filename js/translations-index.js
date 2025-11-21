// ============================================
// 🌍 SYSTÈME DE TRADUCTION - INDEX PRINCIPAL
// ============================================
// Ce fichier charge et assemble toutes les langues depuis leurs modules séparés

// Note: Les fichiers de langue doivent être chargés AVANT ce fichier dans index.html
// Ordre de chargement requis:
// 1. js/translations/fr.js
// 2. js/translations/en.js
// 3. js/translations/es.js
// ... (toutes les autres langues)
// 4. js/translations-index.js (ce fichier)

// Construction de l'objet LANGUAGES depuis les modules individuels
const LANGUAGES = {
  fr: typeof fr !== 'undefined' ? fr : null,
  en: typeof en !== 'undefined' ? en : null,
  es: typeof es !== 'undefined' ? es : null,
  de: typeof de !== 'undefined' ? de : null,
  it: typeof it !== 'undefined' ? it : null,
  pt: typeof pt !== 'undefined' ? pt : null,
  ru: typeof ru !== 'undefined' ? ru : null,
  ja: typeof ja !== 'undefined' ? ja : null,
  zh: typeof zh !== 'undefined' ? zh : null,
  ar: typeof ar !== 'undefined' ? ar : null,
  ko: typeof ko !== 'undefined' ? ko : null,
  hi: typeof hi !== 'undefined' ? hi : null,
  sw: typeof sw !== 'undefined' ? sw : null,
  pl: typeof pl !== 'undefined' ? pl : null
};

// Filtrer les langues null (non chargées)
Object.keys(LANGUAGES).forEach(key => {
  if (LANGUAGES[key] === null) {
    delete LANGUAGES[key];
  }
});

// Vérification du chargement
// console.log('🌍 Langues chargées:', Object.keys(LANGUAGES).length);
// console.log('📋 Langues disponibles:', Object.keys(LANGUAGES).join(', '));

// Export pour compatibilité
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LANGUAGES };
}
