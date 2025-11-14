# 📖 Module des Versets Bibliques

## 📦 Description

Le module `verses.js` centralise tous les versets bibliques et messages inspirants du jeu **Dove of Hope: Sky Blessing**. Il permet une gestion facile du contenu spirituel et facilite les traductions futures.

## 🎯 Contenu du Module

### 1. Message d'Introduction
```javascript
INTRO_MESSAGE
```
Message affiché au démarrage du jeu, avant le niveau 1.

### 2. Versets des 14 Niveaux
```javascript
LEVEL_VERSES = {
    1: { text: "...", reference: "Jean 1:5" },
    2: { text: "...", reference: "Genèse 1:2" },
    // ... jusqu'à 14
}
```

### 3. Messages des 14 Niveaux
```javascript
LEVEL_MESSAGES = {
    1: "Tu as fait tes premiers pas...",
    2: "Comme un aigle, Dieu te fortifie...",
    // ... jusqu'à 14
}
```

### 4. Message de Victoire Finale
```javascript
VICTORY_MESSAGE
```
Affiché lorsque le joueur atteint 991 nuages.

### 5. Versets du Mode Infini
```javascript
INFINITE_VERSES = [
    { text: "...", reference: "Jean 14:1" },
    // 25 versets au total
]
```
Affichés tous les 50 nuages après la victoire (991+).

### 6. Messages du Mode Infini
```javascript
INFINITE_MESSAGES = [
    "Continue ton aventure !",
    // 8 messages au total
]
```

## 🔧 Fonctions Disponibles

### `getVerseForLevel(levelId)`
Obtient le verset d'un niveau spécifique.

```javascript
const verse = getVerseForLevel(1);
// { text: "La lumière brille dans les ténèbres", reference: "Jean 1:5" }
```

### `getMessageForLevel(levelId)`
Obtient le message d'un niveau spécifique.

```javascript
const message = getMessageForLevel(1);
// "Tu as fait tes premiers pas dans la lumière ! ..."
```

### `getRandomInfiniteVerse()`
Obtient un verset aléatoire pour le mode infini.

```javascript
const verse = getRandomInfiniteVerse();
// { text: "Que votre cœur ne se trouble pas", reference: "Jean 14:1" }
```

### `getRandomInfiniteMessage()`
Obtient un message aléatoire pour le mode infini.

```javascript
const message = getRandomInfiniteMessage();
// "Continue ton aventure ! Chaque nuage dissipé est une victoire !"
```

### `formatVerse(verse)`
Formate un verset pour l'affichage.

```javascript
const verse = getVerseForLevel(1);
const formatted = formatVerse(verse);
// "« La lumière brille dans les ténèbres » - Jean 1:5"
```

### `isVerseMilestone(cloudCount)`
Vérifie si c'est un milestone de verset (tous les 50 nuages après 991).

```javascript
isVerseMilestone(1000); // false
isVerseMilestone(1041); // true (991 + 50)
isVerseMilestone(1091); // true (991 + 100)
```

## 💻 Utilisation dans le Jeu

### Afficher le Message d'Introduction
```javascript
// Au démarrage du jeu
console.log(INTRO_MESSAGE);
```

### Afficher un Niveau
```javascript
const levelId = 5;
const verse = getVerseForLevel(levelId);
const message = getMessageForLevel(levelId);

console.log(message);
console.log(formatVerse(verse));
```

### Gérer le Mode Infini
```javascript
if (cloudsCleared > 991) {
    if (isVerseMilestone(cloudsCleared)) {
        const verse = getRandomInfiniteVerse();
        const message = getRandomInfiniteMessage();
        
        showNotification(message);
        showVerse(formatVerse(verse));
    }
}
```

### Afficher la Victoire
```javascript
if (cloudsCleared >= 991) {
    showVictoryScreen(VICTORY_MESSAGE);
}
```

## 📊 Structure des 14 Niveaux

| Niveau | Titre | Verset | Référence |
|--------|-------|--------|-----------|
| 1 | L'Aube de l'Espoir | La lumière brille dans les ténèbres | Jean 1:5 |
| 2 | Le Souffle Divin | L'Esprit de Dieu planait sur les eaux | Genèse 1:2 |
| 3 | Ailes de Foi | Ceux qui espèrent en l'Éternel... | Ésaïe 40:31 |
| 4 | Pardon et Liberté | Là où est l'Esprit, là est la liberté | 2 Cor. 3:17 |
| 5 | Choisi et Précieux | Je t'ai appelé par ton nom | Ésaïe 43:1 |
| 6 | Force Intérieure | Je peux tout par celui qui me fortifie | Phil. 4:13 |
| 7 | Tempête de Grâce | Après la pluie vient le beau temps | Job 37:11 |
| 8 | Amour Inconditionnel | L'amour ne périt jamais | 1 Cor. 13:8 |
| 9 | Héros de Lumière | Ta foi t'a sauvé | Luc 7:50 |
| 10 | Nouvelle Créature | Si quelqu'un est en Christ... | 2 Cor. 5:17 |
| 11 | Courage du Lion | Soyez forts et prenez courage | Josué 1:9 |
| 12 | Porte de la Sagesse | Ta parole est une lampe à mes pieds | Ps. 119:105 |
| 13 | Ciel Nouveau | Vous êtes une race élue | 1 Pierre 2:9 |
| 14 | L'Aventure Éternelle | La vie est une aventure extraordinaire | Ps. 99:1 |

## 🌍 Traductions Futures

Pour ajouter une nouvelle langue, créez un fichier `verses-[code].js` :

```javascript
// verses-en.js
const LEVEL_VERSES_EN = {
    1: {
        text: "The light shines in the darkness",
        reference: "John 1:5"
    },
    // ...
};
```

Puis chargez-le conditionnellement selon la langue active.

## 🔄 Intégration avec le Système de Niveaux

Le module `verses.js` fonctionne en tandem avec le système de niveaux modulaire :

```javascript
// Dans levels-index.js
const levelInfo = {
    ...LEVEL_DEFINITIONS[levelId],
    message: getMessageForLevel(levelId),
    verse: getVerseForLevel(levelId)
};
```

## 🎨 Exemples d'Affichage

### Écran de Niveau
```javascript
function showLevelScreen(levelId) {
    const verse = getVerseForLevel(levelId);
    const message = getMessageForLevel(levelId);
    
    const html = `
        <div class="level-screen">
            <h2>${LEVEL_DEFINITIONS[levelId].icon} ${LEVEL_DEFINITIONS[levelId].title}</h2>
            <p class="message">${message}</p>
            <p class="verse">${formatVerse(verse)}</p>
        </div>
    `;
    
    displayHTML(html);
}
```

### Notification de Verset en Mode Infini
```javascript
function checkInfiniteMilestone(cloudCount) {
    if (isVerseMilestone(cloudCount)) {
        const verse = getRandomInfiniteVerse();
        const message = getRandomInfiniteMessage();
        
        showFloatingNotification({
            title: "✨ Milestone Atteint !",
            message: message,
            verse: formatVerse(verse),
            duration: 5000
        });
    }
}
```

## 📈 Statistiques

- **14 niveaux** avec versets uniques
- **14 messages** inspirants personnalisés
- **25 versets** pour le mode infini
- **8 messages** d'encouragement infini
- **1 message** d'introduction
- **1 message** de victoire finale

**Total : 64 textes spirituels** 📖✨

## 🛠️ Maintenance

### Ajouter un Nouveau Verset Infini
```javascript
INFINITE_VERSES.push({
    text: "Nouveau verset",
    reference: "Référence"
});
```

### Modifier un Message de Niveau
```javascript
LEVEL_MESSAGES[5] = "Nouveau message pour le niveau 5";
```

### Changer l'Intervalle des Versets Infinis
```javascript
// Dans isVerseMilestone()
return cloudsSinceVictory > 0 && cloudsSinceVictory % 25 === 0; // Au lieu de 50
```

## ✅ Avantages du Module

1. **Centralisation** - Tous les versets au même endroit
2. **Maintenabilité** - Facile à modifier et mettre à jour
3. **Traductions** - Structure prête pour le multilinguisme
4. **Réutilisabilité** - Fonctions utilitaires pratiques
5. **Testabilité** - Module indépendant facile à tester
6. **Documentation** - Code auto-documenté avec JSDoc

---

**Le module verses.js enrichit le jeu d'une dimension spirituelle profonde et organisée !** 📖🕊️✨

Pour plus d'informations :
- `LEVELS-MODULAR.md` - Système de niveaux
- `README-TRANSLATIONS.md` - Système de traduction
- `ARCHITECTURE.md` - Architecture complète
