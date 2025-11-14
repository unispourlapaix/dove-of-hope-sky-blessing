# 🎮 Système Modulaire des Niveaux

## 📁 Structure du Module

Le système de niveaux est maintenant organisé en **4 modules séparés** dans `js/levels/` :

```
js/levels/
├── level-definitions.js    → Définitions des 14 niveaux (seuils, titres, icônes)
├── level-messages.js        → Messages de jeu (intro, progression, victoire)
├── bible-verses.js          → Versets bibliques (par niveau + mode infini)
└── progression-system.js    → Logique de progression et calculs
```

Plus un **fichier d'index** qui assemble tout :
```
js/levels-index.js           → API unifiée du système de niveaux
```

---

## 🎯 Avantages de la Modularité

### 1. **Séparation des Responsabilités**
- **Définitions** : Structure des niveaux (seuils, titres)
- **Messages** : Contenu narratif et motivationnel
- **Versets** : Citations bibliques
- **Progression** : Logique de calcul et détection

### 2. **Facilité de Modification**
- Modifier les versets bibliques → Éditer uniquement `bible-verses.js`
- Ajuster les messages → Éditer uniquement `level-messages.js`
- Changer les seuils de niveaux → Éditer uniquement `level-definitions.js`
- Modifier la logique → Éditer uniquement `progression-system.js`

### 3. **Meilleure Collaboration**
- Plusieurs personnes peuvent travailler simultanément
- Moins de conflits Git
- Chaque module peut être testé indépendamment

### 4. **Traductions Facilitées**
- Les messages et versets peuvent être traduits séparément
- Possibilité future de créer des versions multilingues

---

## 📖 Guide des Modules

### 1. `level-definitions.js` - Définitions

**Contenu :**
- `LEVEL_DEFINITIONS` : Tableau des 14 niveaux avec :
  - `id` : Numéro du niveau (1-14)
  - `threshold` : Nombre de nuages requis
  - `title` : Titre du niveau
  - `icon` : Émoji du niveau

- `VICTORY_THRESHOLD` : 991 nuages
- `INFINITE_MODE_THRESHOLD` : 991 nuages
- `INFINITE_VERSE_INTERVAL` : 50 nuages

**Exemple :**
```javascript
{
    id: 1,
    threshold: 0,
    title: "L'Aube de l'Espoir",
    icon: "🌅"
}
```

---

### 2. `level-messages.js` - Messages

**Contenu :**
- `INTRO_MESSAGE` : Message d'introduction du jeu
- `LEVEL_MESSAGES` : Messages pour chaque niveau (1-14)
- `VICTORY_MESSAGE` : Message de victoire finale
- `INFINITE_MODE_MESSAGES` : Messages aléatoires pour le mode infini

**Fonctions :**
- `getLevelMessage(levelId)` : Obtenir le message d'un niveau
- `getRandomInfiniteMessage()` : Message aléatoire pour mode infini

**Exemple :**
```javascript
LEVEL_MESSAGES[1] = "Tu as fait tes premiers pas dans la lumière ! Tu n'es pas seul dans ce combat."
```

---

### 3. `bible-verses.js` - Versets Bibliques

**Contenu :**
- `LEVEL_VERSES` : Versets pour chaque niveau (1-14)
- `INFINITE_VERSES` : 20 versets aléatoires pour le mode infini

**Fonctions :**
- `getLevelVerse(levelId)` : Obtenir le verset d'un niveau
- `getRandomVerse()` : Verset aléatoire pour mode infini
- `formatVerse(verse)` : Formater un verset pour l'affichage

**Structure d'un verset :**
```javascript
{
    text: "La lumière brille dans les ténèbres",
    reference: "Jean 1:5"
}
```

---

### 4. `progression-system.js` - Logique de Progression

**Fonctions Principales :**

#### Détection de Niveau
- `getCurrentLevel(cloudCount)` : Niveau actuel (1-14 ou 15 pour infini)
- `getLevelInfo(levelId)` : Informations complètes d'un niveau
- `checkLevelUp(oldCount, newCount)` : Détecter un changement de niveau

#### États du Jeu
- `isVictory(cloudCount)` : Vérifie si victoire atteinte (991+)
- `isInfiniteMode(cloudCount)` : Vérifie si mode infini actif (991+)
- `isVerseMilestone(cloudCount)` : Vérifie si c'est un multiple de 50

#### Progression
- `getNextLevelThreshold(cloudCount)` : Prochain seuil de niveau
- `getProgressToNextLevel(cloudCount)` : Pourcentage de progression (0-100)
- `getProgressionSummary(cloudCount)` : Résumé complet

---

## 🔌 API Unifiée - `LevelSystem`

Le fichier `js/levels-index.js` expose un objet `LevelSystem` avec toutes les fonctionnalités :

### Constantes
```javascript
LevelSystem.definitions           // Tous les niveaux
LevelSystem.victoryThreshold      // 991
LevelSystem.infiniteThreshold     // 991
LevelSystem.verseInterval         // 50
LevelSystem.introMessage          // Message d'intro
LevelSystem.victoryMessage        // Message de victoire
```

### Fonctions de Progression
```javascript
LevelSystem.getCurrentLevel(cloudCount)
LevelSystem.getLevelInfo(levelId)
LevelSystem.checkLevelUp(oldCount, newCount)
LevelSystem.isVictory(cloudCount)
LevelSystem.isInfiniteMode(cloudCount)
LevelSystem.isVerseMilestone(cloudCount)
LevelSystem.getNextLevelThreshold(cloudCount)
LevelSystem.getProgressToNextLevel(cloudCount)
LevelSystem.getProgressionSummary(cloudCount)
```

### Fonctions de Contenu
```javascript
LevelSystem.getLevelMessage(levelId)
LevelSystem.getRandomInfiniteMessage()
LevelSystem.getLevelVerse(levelId)
LevelSystem.getRandomVerse()
LevelSystem.formatVerse(verse)
```

### Fonctions Utilitaires
```javascript
LevelSystem.getDisplayInfo(cloudCount)    // Tout pour l'affichage
LevelSystem.debugInfo(cloudCount)         // Debug dans console
LevelSystem.listAllLevels()               // Liste tous les niveaux
```

---

## 💻 Utilisation dans le Code

### Exemple 1 : Détecter un Changement de Niveau

```javascript
// Lors d'un nuage dissipé
const oldCount = 100;
const newCount = 101;

const levelUp = LevelSystem.checkLevelUp(oldCount, newCount);

if (levelUp) {
    console.log(`🎉 Nouveau niveau: ${levelUp.title} ${levelUp.icon}`);
    console.log(`💬 ${levelUp.message}`);
    console.log(`📖 ${LevelSystem.formatVerse(levelUp.verse)}`);
}
```

### Exemple 2 : Afficher la Progression

```javascript
const cloudCount = 250;
const summary = LevelSystem.getProgressionSummary(cloudCount);

console.log(`Niveau ${summary.currentLevel.id}: ${summary.currentLevel.title}`);
console.log(`Progression: ${summary.progress}%`);
console.log(`Prochain niveau: ${summary.nextThreshold} nuages`);
```

### Exemple 3 : Gérer le Mode Infini

```javascript
const cloudCount = 1050;

if (LevelSystem.isInfiniteMode(cloudCount)) {
    if (LevelSystem.isVerseMilestone(cloudCount)) {
        const verse = LevelSystem.getRandomVerse();
        console.log(`📖 ${LevelSystem.formatVerse(verse)}`);
    }
}
```

### Exemple 4 : Obtenir Toutes les Infos pour l'UI

```javascript
const cloudCount = 350;
const info = LevelSystem.getDisplayInfo(cloudCount);

// Utiliser dans l'interface
document.querySelector('.level-title').textContent = 
    `${info.level.icon} ${info.level.title}`;
    
document.querySelector('.level-message').textContent = info.message;
document.querySelector('.level-verse').textContent = info.verse;
document.querySelector('.progress-bar').style.width = `${info.progress.percent}%`;

if (info.states.isVictory) {
    showVictoryScreen(LevelSystem.victoryMessage);
}
```

---

## 🔧 Modification et Extension

### Ajouter un Nouveau Niveau

#### 1. Éditer `level-definitions.js`
```javascript
{
    id: 15,
    threshold: 991,
    title: "Transcendance Divine",
    icon: "✨"
}
```

#### 2. Éditer `level-messages.js`
```javascript
LEVEL_MESSAGES[15] = "Tu as atteint la transcendance ! Continue ton voyage éternel.";
```

#### 3. Éditer `bible-verses.js`
```javascript
LEVEL_VERSES[15] = {
    text: "Je fais toutes choses nouvelles",
    reference: "Apocalypse 21:5"
};
```

### Modifier les Seuils de Niveaux

Éditer uniquement `level-definitions.js` :
```javascript
{
    id: 7,
    threshold: 301,  // Changer à 350 par exemple
    title: "Tempête de Grâce",
    icon: "⛈️"
}
```

### Ajouter des Versets pour le Mode Infini

Éditer `bible-verses.js` :
```javascript
INFINITE_VERSES.push({
    text: "Votre nouveau verset",
    reference: "Référence biblique"
});
```

### Modifier l'Intervalle des Versets

Éditer `level-definitions.js` :
```javascript
const INFINITE_VERSE_INTERVAL = 25;  // Au lieu de 50
```

---

## 🐛 Débogage

### Afficher les Infos d'un Niveau

```javascript
// Dans la console du navigateur
LevelSystem.debugInfo(250);
```

**Sortie :**
```
🎮 Niveau 6: Force Intérieure 💪
☁️ Nuages: 250
💬 Message: Dans ta faiblesse, Sa force se révèle...
📖 Verset: « Je peux tout par celui qui me fortifie » - Philippiens 4:13
📊 Progression: 0% vers niveau suivant
🎯 Prochain seuil: 301
```

### Lister Tous les Niveaux

```javascript
LevelSystem.listAllLevels();
```

**Sortie :**
```
📋 Liste de tous les niveaux
🌅 Niveau 1: L'Aube de l'Espoir (0+ nuages)
🌬️ Niveau 2: Le Souffle Divin (51+ nuages)
...
🏆 Victoire finale: 991 nuages
♾️ Mode infini: 991+ nuages
```

### Tester la Progression

```javascript
// Simuler une progression
for (let clouds = 0; clouds <= 1000; clouds += 50) {
    const level = LevelSystem.getCurrentLevel(clouds);
    const info = LevelSystem.getLevelInfo(level);
    console.log(`${clouds} nuages → Niveau ${level}: ${info.title}`);
}
```

---

## 📊 Structure des 14 Niveaux

| Niveau | Seuil | Titre | Verset |
|--------|-------|-------|--------|
| 1 | 0 | L'Aube de l'Espoir 🌅 | Jean 1:5 |
| 2 | 51 | Le Souffle Divin 🌬️ | Genèse 1:2 |
| 3 | 101 | Ailes de Foi 🕊️ | Ésaïe 40:31 |
| 4 | 151 | Pardon et Liberté 🔓 | 2 Corinthiens 3:17 |
| 5 | 201 | Choisi et Précieux 💎 | Ésaïe 43:1 |
| 6 | 251 | Force Intérieure 💪 | Philippiens 4:13 |
| 7 | 301 | Tempête de Grâce ⛈️ | Job 37:11 |
| 8 | 351 | Amour Inconditionnel ❤️ | 1 Corinthiens 13:8 |
| 9 | 401 | Héros de Lumière 🦸 | Luc 7:50 |
| 10 | 451 | Nouvelle Créature 🦋 | 2 Corinthiens 5:17 |
| 11 | 551 | Courage du Lion 🦁 | Josué 1:9 |
| 12 | 651 | Porte de la Sagesse 📖 | Psaume 119:105 |
| 13 | 751 | Ciel Nouveau 🌌 | 1 Pierre 2:9 |
| 14 | 851 | L'Aventure Éternelle ✨ | Psaume 99:1 |

**Victoire Finale** : 991 nuages
**Mode Infini** : 991+ nuages (versets tous les 50 nuages)

---

## 🎮 Intégration avec le Jeu

### Chargement dans `index.html`

```html
<!-- Modules de niveaux -->
<script src="js/levels/level-definitions.js"></script>
<script src="js/levels/level-messages.js"></script>
<script src="js/levels/bible-verses.js"></script>
<script src="js/levels/progression-system.js"></script>

<!-- Index des niveaux -->
<script src="js/levels-index.js"></script>
```

### Utilisation dans `game.js`

```javascript
// Initialisation
const currentLevel = LevelSystem.getCurrentLevel(this.cloudsCleared);

// Lors d'un nuage dissipé
this.cloudsCleared++;
const levelUp = LevelSystem.checkLevelUp(oldCount, this.cloudsCleared);

if (levelUp) {
    this.onLevelUp(levelUp);
}

// Vérifier la victoire
if (LevelSystem.isVictory(this.cloudsCleared)) {
    this.onVictory();
}

// Mode infini
if (LevelSystem.isVerseMilestone(this.cloudsCleared)) {
    this.showVerse(LevelSystem.getRandomVerse());
}
```

---

## ✅ Checklist de Migration

Si vous migrez depuis l'ancien système `levels.js` :

- [ ] Remplacer `<script src="js/levels.js">` dans `index.html`
- [ ] Ajouter les 4 nouveaux scripts de modules + index
- [ ] Remplacer `LEVELS` par `LevelSystem.definitions`
- [ ] Remplacer `getCurrentLevel()` par `LevelSystem.getCurrentLevel()`
- [ ] Remplacer `checkLevelUp()` par `LevelSystem.checkLevelUp()`
- [ ] Adapter les appels aux messages et versets
- [ ] Tester tous les niveaux (0, 51, 101, ..., 991+)
- [ ] Vérifier le mode infini et les milestones

---

## 🚀 Fonctionnalités Futures

### Traductions Multilingues
```javascript
// Créer level-messages-en.js, level-messages-es.js, etc.
const LEVEL_MESSAGES_EN = {
    1: "You've taken your first steps into the light!",
    // ...
};
```

### Difficultés Variables
```javascript
// Ajouter dans level-definitions.js
{
    id: 7,
    threshold: 301,
    title: "Tempête de Grâce",
    icon: "⛈️",
    difficulty: "hard",  // Nouveau champ
    cloudSpeed: 1.5      // Vitesse augmentée
}
```

### Système de Succès
```javascript
// Ajouter des achievements par niveau
LevelSystem.checkAchievement(cloudCount, timeElapsed, lives);
```

---

**Le système modulaire de niveaux rend le jeu plus flexible et maintenable !** 🎮✨

Pour plus d'informations :
- `README.md` - Documentation générale
- `ARCHITECTURE.md` - Architecture complète
