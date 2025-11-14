# 🛠️ Utilitaires de Traduction - Guide d'Utilisation

## 📦 Chargement

Pour utiliser les utilitaires, ajoutez dans votre HTML (après les traductions) :

```html
<script src="js/translations-index.js"></script>
<script src="js/translation-utils.js"></script>
```

## 🎯 Fonctions Disponibles

Toutes les fonctions sont accessibles via `TranslationUtils.*`

### 1. Vérifier une Langue

```javascript
// Vérifier qu'une langue est complète
TranslationUtils.checkLanguageCompleteness('fr');
```

**Sortie :**
```
🔍 Vérification de Français (fr):
✅ ui: 4/4
✅ buttons: 3/3
✅ messages: 6/6
✅ gameplay: 10/10
✅ rain: 3/3
✅ powerups: 3/3

✅ Langue complète
```

### 2. Vérifier Toutes les Langues

```javascript
// Vérifier toutes les langues d'un coup
TranslationUtils.checkAllLanguages();
```

**Sortie :**
```
🌍 Vérification de toutes les langues...

[... vérification de chaque langue ...]

📊 Résumé:
14/14 langues complètes (100%)
```

### 3. Comparer Deux Langues

```javascript
// Comparer la structure de deux langues
TranslationUtils.compareLanguages('fr', 'en');
```

**Sortie :**
```
🔄 Comparaison Français vs English:
Structure identique: ✅
ui: ✅ (4 vs 4)
buttons: ✅ (3 vs 3)
messages: ✅ (6 vs 6)
powerups: ✅ (3 vs 3)
gameplay: ✅ (10 vs 10)
rain: ✅ (3 vs 3)
```

### 4. Générer un Template de Langue

```javascript
// Générer un template pour une nouvelle langue
TranslationUtils.generateLanguageTemplate('pl', 'Polski', '🇵🇱');
```

**Sortie :**
```javascript
// Code complet du template à copier dans js/translations/pl.js
```

### 5. Lister Toutes les Langues

```javascript
// Afficher toutes les langues disponibles
TranslationUtils.listLanguages();
```

**Sortie :**
```
🌍 Langues disponibles:

🇫🇷 Français             (fr)
🇬🇧 English              (en)
🇪🇸 Español              (es)
🇩🇪 Deutsch              (de)
🇮🇹 Italiano             (it)
🇵🇹 Português            (pt)
🇷🇺 Русский              (ru)
🇯🇵 日本語                (ja)
🇨🇳 中文                  (zh)
🇸🇦 العربية              (ar)
🇰🇷 한국어                (ko)
🇮🇳 हिन्दी               (hi)
🇹🇷 Türkçe               (tr)
🇳🇱 Nederlands           (nl)

Total: 14 langues
```

### 6. Obtenir les Statistiques

```javascript
// Obtenir les stats globales de traduction
TranslationUtils.getTranslationStats();
```

**Sortie :**
```
📊 Statistiques de traduction:
Langues: 14
Traductions totales: 630
Moyenne par langue: 45
```

### 7. Rechercher une Traduction

```javascript
// Voir une traduction dans toutes les langues
TranslationUtils.findTranslation('messages.start');
```

**Sortie :**
```
🔎 Recherche de "messages.start" dans toutes les langues:

🇫🇷 Français       : Vole, petite colombe ! Dissipe les nuages !
🇬🇧 English        : Fly, little dove! Clear the clouds!
🇪🇸 Español        : ¡Vuela, pequeña paloma! ¡Despeja las nubes!
🇩🇪 Deutsch        : Flieg, kleine Taube! Vertreibe die Wolken!
...
```

## 🎯 Cas d'Usage

### Vérifier qu'une Nouvelle Traduction est Complète

```javascript
// 1. Ajouter votre nouvelle langue
// 2. Charger la page
// 3. Vérifier dans la console

TranslationUtils.checkLanguageCompleteness('pl');
```

### Comparer avec une Langue de Référence

```javascript
// Comparer votre nouvelle langue avec le français
TranslationUtils.compareLanguages('pl', 'fr');
```

### Trouver ce qui Manque

Si une section est incomplète, utilisez :

```javascript
// Voir ce qui existe dans les autres langues
TranslationUtils.findTranslation('gameplay');
TranslationUtils.findTranslation('rain');
```

### Générer un Nouveau Fichier de Langue

```javascript
// 1. Générer le template
const template = TranslationUtils.generateLanguageTemplate('pl', 'Polski', '🇵🇱');

// 2. Copier le code affiché dans la console
// 3. Créer js/translations/pl.js
// 4. Traduire tous les textes
// 5. Recharger et vérifier
```

## 📝 Workflow Complet pour Ajouter une Langue

### Étape 1 : Générer le Template

```javascript
TranslationUtils.generateLanguageTemplate('pl', 'Polski', '🇵🇱');
```

### Étape 2 : Créer le Fichier

1. Créer `js/translations/pl.js`
2. Copier le template généré
3. Traduire tous les textes

### Étape 3 : Ajouter dans l'Index

Éditer `js/translations-index.js` :

```javascript
const LANGUAGES = {
  // ... langues existantes
  pl: typeof pl !== 'undefined' ? pl : null,
};
```

### Étape 4 : Charger dans HTML

Éditer `index.html` :

```html
<script src="js/translations/pl.js"></script>
```

### Étape 5 : Vérifier

```javascript
// Recharger la page puis :
TranslationUtils.checkLanguageCompleteness('pl');
TranslationUtils.compareLanguages('pl', 'en');
```

## 🐛 Débogage

### Problème : Langue Incomplète

```javascript
// Identifier les sections manquantes
TranslationUtils.checkLanguageCompleteness('votre-langue');

// Comparer avec une langue complète
TranslationUtils.compareLanguages('votre-langue', 'fr');

// Voir les exemples dans d'autres langues
TranslationUtils.findTranslation('section.manquante');
```

### Problème : Structure Différente

```javascript
// Comparer avec plusieurs langues de référence
TranslationUtils.compareLanguages('votre-langue', 'fr');
TranslationUtils.compareLanguages('votre-langue', 'en');
TranslationUtils.compareLanguages('fr', 'en');  // Vérifier que FR et EN sont identiques
```

## 📊 Exemples Avancés

### Audit Complet de Qualité

```javascript
// Script d'audit complet
console.log('🔍 AUDIT DE QUALITÉ DES TRADUCTIONS\n');

// 1. Stats globales
TranslationUtils.getTranslationStats();

// 2. Vérification de toutes les langues
const results = TranslationUtils.checkAllLanguages();

// 3. Identifier les langues incomplètes
Object.entries(results).forEach(([lang, isComplete]) => {
  if (!isComplete) {
    console.log(`⚠️ ${lang} nécessite une révision`);
  }
});

// 4. Comparer toutes les langues avec la référence
Object.keys(LANGUAGES).forEach(lang => {
  if (lang !== 'fr') {
    TranslationUtils.compareLanguages(lang, 'fr');
  }
});
```

### Trouver les Traductions Manquantes

```javascript
// Vérifier toutes les sections
const sections = [
  'ui.score', 'ui.clouds', 'ui.level', 'ui.lives',
  'buttons.start', 'buttons.play', 'buttons.restart',
  'messages.start', 'messages.restart', 'messages.gameOver',
  'messages.victory', 'messages.levelUp', 'messages.motivation',
  'powerups.umbrella', 'powerups.speed', 'powerups.multishot'
];

sections.forEach(section => {
  console.log(`\n--- ${section} ---`);
  TranslationUtils.findTranslation(section);
});
```

### Générer un Rapport de Traduction

```javascript
// Générer un rapport détaillé
function generateTranslationReport() {
  const report = {
    date: new Date().toISOString(),
    stats: {},
    languages: {}
  };
  
  // Stats globales
  report.stats = TranslationUtils.getTranslationStats();
  
  // Vérifier chaque langue
  Object.keys(LANGUAGES).forEach(langCode => {
    const isComplete = TranslationUtils.checkLanguageCompleteness(langCode);
    report.languages[langCode] = {
      complete: isComplete,
      name: LANGUAGES[langCode].name,
      flag: LANGUAGES[langCode].flag
    };
  });
  
  console.log('📊 RAPPORT DE TRADUCTION');
  console.log(JSON.stringify(report, null, 2));
  
  return report;
}

generateTranslationReport();
```

## 🎓 Bonnes Pratiques

### 1. Toujours Vérifier Après Modification

```javascript
// Après avoir modifié une langue
TranslationUtils.checkLanguageCompleteness('votre-langue');
```

### 2. Comparer avec la Référence

```javascript
// FR et EN sont les langues de référence
TranslationUtils.compareLanguages('votre-langue', 'fr');
TranslationUtils.compareLanguages('votre-langue', 'en');
```

### 3. Tester les Traductions en Jeu

```javascript
// 1. Vérifier la complétude
TranslationUtils.checkLanguageCompleteness('pl');

// 2. Charger la langue
setLanguage('pl');

// 3. Jouer pour voir les traductions en contexte

// 4. Vérifier des traductions spécifiques
console.log(t('messages.start'));
console.log(t('gameplay'));
```

## 🚀 Automatisation

### Script de Validation CI/CD

```javascript
// À exécuter dans les tests automatiques
function validateAllTranslations() {
  const results = TranslationUtils.checkAllLanguages();
  const incomplete = Object.entries(results)
    .filter(([lang, isComplete]) => !isComplete)
    .map(([lang]) => lang);
  
  if (incomplete.length > 0) {
    console.error(`❌ Langues incomplètes: ${incomplete.join(', ')}`);
    return false;
  }
  
  console.log('✅ Toutes les langues sont complètes');
  return true;
}

// Utiliser dans CI/CD
if (!validateAllTranslations()) {
  process.exit(1);
}
```

---

**Les utilitaires rendent la gestion des traductions simple et efficace !** 🛠️✨

Pour plus d'informations, voir :
- `TRANSLATIONS-MODULAR.md` - Guide du système modulaire
- `README-TRANSLATIONS.md` - Guide de traduction général
