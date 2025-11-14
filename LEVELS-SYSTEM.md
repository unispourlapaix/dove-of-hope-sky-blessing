# 📖 Dove of Hope : Sky Blessing - Système de Niveaux et Histoire

## 🎯 Vue d'ensemble

Le jeu utilise maintenant un **système modulaire de niveaux et chapitres** permettant de créer une progression narrative et une difficulté croissante.

## 📚 Structure de l'Histoire

### 5 Chapitres Épiques

Le jeu est divisé en **5 chapitres**, chacun avec sa propre histoire :

| Chapitre | Titre | Niveaux | Difficulté |
|----------|-------|---------|------------|
| 1 | L'Éveil de la Colombe | 1-3 | Facile → Moyen |
| 2 | La Tempête Commence | 4-5 | Moyen |
| 3 | L'Ascension Divine | 6-7 | Difficile |
| 4 | Le Souffle de l'Espoir | 8-9 | Difficile → Expert |
| 5 | La Révélation Finale | 10 | Expert |

### Format des Chapitres

Chaque chapitre contient :
- **Intro** : Message au début du chapitre
- **Outro** : Message à la fin du chapitre
- **Titre** : Nom du chapitre
- **ID** : Identifiant unique

```javascript
{
  id: 1,
  title: "L'Éveil de la Colombe",
  intro: "Dans un monde plongé dans les ténèbres...",
  outro: "Les premiers nuages se dissipent..."
}
```

## 🎮 Configuration des Niveaux

### Paramètres de Niveau

Chaque niveau est configurable avec ces paramètres :

```javascript
{
  chapter: 1,              // Numéro du chapitre
  level: 1,                // Numéro du niveau
  cloudsToPass: 15,        // Nuages à détruire pour finir
  cloudSpeed: {            // Vitesse des nuages
    min: 0.5, 
    max: 1.5
  },
  cloudSpawnRate: 0.004,   // Fréquence d'apparition (0-1)
  shootingClouds: 0.3,     // % de nuages qui tirent
  rainSpeed: {             // Vitesse de la pluie
    min: 4, 
    max: 6
  },
  powerUpRate: 0.001,      // Fréquence des power-ups
  background: {            // Couleurs du ciel
    top: '#87ceeb', 
    bottom: '#b8d8f8'
  },
  difficulty: 'easy'       // Label de difficulté
}
```

### Progression de Difficulté

| Niveau | Nuages | Vitesse | Tir | Difficulté |
|--------|--------|---------|-----|------------|
| 1 | 15 | 0.5-1.5 | 30% | ⭐ Facile |
| 3 | 45 | 0.8-2.0 | 50% | ⭐⭐ Moyen |
| 6 | 90 | 1.3-2.7 | 70% | ⭐⭐⭐ Difficile |
| 10 | 150 | 1.7-3.5 | 85% | ⭐⭐⭐⭐ Expert |

## 🔧 Créer un Nouveau Niveau

### Étape 1 : Ajouter la Configuration

Dans `LEVELS_CONFIG`, ajoutez :

```javascript
{
  chapter: 6,              // Nouveau chapitre
  level: 11,
  cloudsToPass: 200,
  cloudSpeed: { min: 2.0, max: 4.0 },
  cloudSpawnRate: 0.015,
  shootingClouds: 0.9,
  rainSpeed: { min: 9, max: 12 },
  powerUpRate: 0.0025,
  background: { top: '#001f48', bottom: '#284868' },
  difficulty: 'nightmare'
}
```

### Étape 2 : Ajouter l'Histoire

Dans `STORY_CHAPTERS`, pour chaque langue :

```javascript
fr: [
  // ... chapitres existants
  {
    id: 6,
    title: "Le Dernier Combat",
    intro: "Les ténèbres finales t'attendent...",
    outro: "Tu as vaincu l'impossible !"
  }
]
```

### Étape 3 : Tester

Le niveau sera automatiquement intégré dans la progression !

## 🎨 Personnalisation Avancée

### Backgrounds Thématiques

Les backgrounds évoluent avec la difficulté :

```javascript
// Chapitre 1 - Ciel clair
background: { top: '#87ceeb', bottom: '#b8d8f8' }

// Chapitre 3 - Ciel sombre
background: { top: '#4a7fa8', bottom: '#7898b8' }

// Chapitre 5 - Ciel de tempête
background: { top: '#0a3f68', bottom: '#385878' }
```

### Taux de Spawn Dynamiques

```javascript
// Facile : peu de nuages
cloudSpawnRate: 0.004

// Moyen : spawn modéré
cloudSpawnRate: 0.007

// Expert : spawn intense !
cloudSpawnRate: 0.013
```

## 🎯 Système de Progression

### Passage de Niveau

Quand le joueur détruit assez de nuages :
1. **Fin du niveau** → Écran de transition
2. **Même chapitre** → Passage direct au suivant
3. **Nouveau chapitre** → Outro ancien + Intro nouveau

### Variables de Suivi

```javascript
currentLevelIndex  // Index dans LEVELS_CONFIG
currentChapter     // Numéro du chapitre actuel
cloudsInLevel      // Nuages détruits dans le niveau
totalScore         // Score total de la partie
```

## 📊 Métriques de Niveau

### Calcul de la Difficulté

La difficulté est déterminée par :
- Vitesse des nuages (cloudSpeed)
- Fréquence de spawn (cloudSpawnRate)
- Pourcentage de tir (shootingClouds)
- Vitesse de pluie (rainSpeed)
- Nombre de nuages requis (cloudsToPass)

### Formule Suggérée

```javascript
difficulty = (
  cloudSpeed.max * 0.3 +
  cloudSpawnRate * 1000 +
  shootingClouds * 100 +
  cloudsToPass * 0.5
)

// < 50 = Facile
// 50-100 = Moyen
// 100-150 = Difficile
// > 150 = Expert
```

## 🌍 Traduction de l'Histoire

### Ajouter une Langue

```javascript
STORY_CHAPTERS.es = [  // Espagnol
  {
    id: 1,
    title: "El Despertar de la Paloma",
    intro: "En un mundo sumido en la oscuridad...",
    outro: "Las primeras nubes se disipan..."
  }
  // ... autres chapitres
]
```

### Langues Supportées

Actuellement : FR, EN
À ajouter : ES, DE, IT, PT, RU, JA, ZH, AR, KO, HI, TR, NL

## 🎮 API du Système

### Fonctions Principales

```javascript
// Démarrer un niveau spécifique
startLevel(levelIndex)

// Compléter le niveau actuel
completeLevel()

// Afficher un écran d'histoire
showStoryScreen('intro', chapterId, callback)

// Obtenir la config d'un niveau
getLevelConfig(levelIndex)

// Obtenir un chapitre
getStoryChapter(chapterId)
```

### Événements du Jeu

```javascript
state = 'story'          // Affichage de l'histoire
state = 'playing'        // Jeu en cours
state = 'levelComplete'  // Niveau terminé
state = 'gameOver'       // Partie terminée
state = 'victory'        // Jeu complété
```

## 📝 Exemple : Boss Fight

Créer un niveau boss :

```javascript
{
  chapter: 3,
  level: 7,
  cloudsToPass: 1,        // Un seul "boss"
  cloudSpeed: { min: 0.3, max: 0.5 },  // Lent mais...
  cloudSpawnRate: 0.001,   // Rare
  shootingClouds: 1.0,     // Toujours tire !
  rainSpeed: { min: 10, max: 15 },  // Très rapide
  powerUpRate: 0.003,      // Plus de power-ups
  background: { top: '#1a1a2e', bottom: '#16213e' },
  difficulty: 'boss',
  bossMode: true,          // Flag custom
  bossHealth: 1000         // Vie du boss
}
```

## 🎨 Effets Visuels par Chapitre

### Ajouter des Particules Spéciales

```javascript
// Dans drawCloud() ou update()
if (currentChapter === 5) {
  // Ajouter éclairs, effets dramatiques
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2;
  // ... dessin d'éclair
}
```

## 🏆 Achievements

Idées d'achievements basés sur les niveaux :

- ✨ **Espoir Éveillé** : Compléter le Chapitre 1
- ⛈️ **Maître des Tempêtes** : Compléter le Chapitre 2
- 🌟 **Ascension Divine** : Compléter le Chapitre 3
- 💫 **Porteur d'Espoir** : Compléter le Chapitre 4
- 👑 **Révélation Finale** : Compléter le Chapitre 5

## 🔮 Extensions Futures

- **Mode Infini** après la victoire
- **Niveaux secrets** entre chapitres
- **Défis quotidiens** avec configs spéciales
- **Classements** par chapitre
- **Replays** de niveaux préférés

---

💡 **Astuce** : Pour tester un niveau spécifique, utilisez dans la console :
```javascript
startLevel(5); // Niveau 6 (index commence à 0)
```

🎮 **Bon développement !** Le système est conçu pour être flexible et facile à étendre.
