# 🌍 Dove of Hope : Sky Blessing - Guide de Traduction

## Langues Supportées (14)

Le jeu supporte actuellement **14 langues** :

| Code | Langue | Drapeau | Statut |
|------|--------|---------|--------|
| `fr` | Français | 🇫🇷 | ✅ Complet |
| `en` | English | 🇬🇧 | ✅ Complet |
| `es` | Español | 🇪🇸 | ✅ Complet |
| `de` | Deutsch | 🇩🇪 | ✅ Complet |
| `it` | Italiano | 🇮🇹 | ✅ Complet |
| `pt` | Português | 🇵🇹 | ✅ Complet |
| `ru` | Русский | 🇷🇺 | ✅ Complet |
| `ja` | 日本語 | 🇯🇵 | ✅ Complet |
| `zh` | 中文 | 🇨🇳 | ✅ Complet |
| `ar` | العربية | 🇸🇦 | ✅ Complet |
| `ko` | 한국어 | 🇰🇷 | ✅ Complet |
| `hi` | हिन्दी | 🇮🇳 | ✅ Complet |
| `tr` | Türkçe | 🇹🇷 | ✅ Complet |
| `nl` | Nederlands | 🇳🇱 | ✅ Complet |

## 🎮 Utilisation dans le Jeu

### Changer de langue par code
```javascript
// Dans la console du navigateur
setLanguage('en'); // Anglais
setLanguage('es'); // Espagnol
setLanguage('ja'); // Japonais
```

### Récupérer une traduction
```javascript
t('ui.score');           // "Score" (en français)
t('messages.start');     // "Vole, petite colombe ! Dissipe les nuages !"
t('messages.levelUp', {level: 5}); // "Niveau 5 - La lumière grandit !"
```

## 📝 Structure de Traduction

Chaque langue contient ces sections :

### 1. **ui** - Interface utilisateur
- `score` : Label du score
- `clouds` : Label des nuages éliminés
- `level` : Label du niveau
- `lives` : Label de la vie

### 2. **buttons** - Boutons
- `start` : Bouton de démarrage
- `play` : Bouton jouer
- `restart` : Bouton rejouer

### 3. **messages** - Messages système
- `start` : Message au démarrage du jeu
- `restart` : Message de redémarrage
- `gameOver` : Message de fin de partie
- `victory` : Message de victoire
- `levelUp` : Message de montée de niveau (avec paramètre `{level}`)
- `motivation` : Message de motivation initial

### 4. **gameplay** - Messages de jeu (10 messages aléatoires)
Tableau de 10 messages encourageants pendant le jeu

### 5. **rain** - Messages de pluie (3 messages)
Messages affichés quand le joueur est touché par la pluie

### 6. **powerups** - Messages de power-ups
- `umbrella` : Message pour le parapluie
- `speed` : Message pour la vitesse
- `multishot` : Message pour le tir multiple

## 🔧 Ajouter une Nouvelle Langue

Pour ajouter une 15ème langue (par exemple, le polonais) :

```javascript
pl: {
  code: 'pl',
  name: 'Polski',
  flag: '🇵🇱',
  ui: {
    score: 'Wynik',
    clouds: 'Chmury',
    level: 'Poziom',
    lives: 'Życie'
  },
  buttons: {
    start: 'Zapal!',
    play: 'GRAJ',
    restart: 'ZAGRAJ PONOWNIE'
  },
  messages: {
    start: 'Leć, mały gołąbku! Rozprosz chmury!',
    restart: 'Gołąb się odrodzi! Zaczynamy ponownie!',
    gameOver: 'Koniec gry! Ale w przeciwnościach błyszczy jeszcze jaśniej!',
    victory: 'ZWYCIĘSTWO! Psalm 99.1 - Życie to niezwykła przygoda! - mówi Orygenes',
    levelUp: 'Poziom {level} - Światło rośnie!',
    motivation: 'Czas zapalić światło - To piękny czas na realizację marzeń!'
  },
  gameplay: [
    // ... 10 messages en polonais
  ],
  rain: [
    // ... 3 messages en polonais
  ],
  powerups: {
    umbrella: 'Parasol aktywowany! Tańcz z żywiołami!',
    speed: 'Boska prędkość! Twoje skrzydła są wolne!',
    multishot: 'Potrójne światło! Twoje serce świeci!'
  }
}
```

## 💾 Sauvegarde de la Langue

La langue choisie est automatiquement sauvegardée dans `localStorage` sous la clé `doveGameLang`.

## 🌐 Détection Automatique (À implémenter)

Pour détecter automatiquement la langue du navigateur :

```javascript
const browserLang = navigator.language.split('-')[0]; // 'en', 'fr', etc.
if (LANGUAGES[browserLang]) {
  currentLang = browserLang;
}
```

## 📱 Intégration UI (À implémenter)

Pour ajouter un sélecteur de langue dans le menu :

```html
<select id="languageSelector" onchange="setLanguage(this.value)">
  <option value="fr">🇫🇷 Français</option>
  <option value="en">🇬🇧 English</option>
  <option value="es">🇪🇸 Español</option>
  <!-- etc. -->
</select>
```

## ✅ Checklist pour Nouvelle Traduction

- [ ] Traduire toutes les sections (ui, buttons, messages)
- [ ] Traduire les 10 messages de gameplay
- [ ] Traduire les 3 messages de pluie
- [ ] Traduire les 3 messages de power-ups
- [ ] Vérifier la longueur des textes (interface mobile)
- [ ] Tester le jeu dans la nouvelle langue
- [ ] Vérifier la lisibilité sur petit écran

## 🎯 Conseils de Traduction

1. **Motivation** : Gardez l'esprit positif et encourageant
2. **Longueur** : Évitez les textes trop longs (interface mobile)
3. **Culture** : Adaptez les expressions idiomatiques
4. **Ton** : Maintenez un ton joyeux et inspirant
5. **Cohérence** : Utilisez le même vocabulaire tout au long

---

💡 **Astuce** : Pour tester rapidement toutes les langues, ouvrez la console et exécutez :
```javascript
Object.keys(LANGUAGES).forEach(lang => {
  console.log(`${LANGUAGES[lang].flag} ${LANGUAGES[lang].name}:`, LANGUAGES[lang].messages.start);
});
```
