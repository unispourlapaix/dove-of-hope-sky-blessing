# 🏗️ Architecture Modulaire - Dove of Hope

Ce document explique l'architecture modulaire du jeu et comment les différents modules interagissent.

## 📦 Vue d'ensemble des modules

Le jeu est organisé en **5 modules JavaScript** indépendants :

```
index.html (Shell de l'application)
    │
    ├─── js/config.js          (Configuration globale)
    ├─── js/translations.js    (Système i18n)
    ├─── js/story.js           (Contenu narratif)
    ├─── js/levels.js          (Progression)
    └─── js/game.js            (Moteur principal)
```

## 🔧 js/config.js - Configuration du jeu

**Responsabilité** : Centraliser toutes les constantes de configuration

**Contenu** :
- Paramètres du joueur (taille, vitesse, boost)
- Paramètres des projectiles (taille, vitesse, cadence)
- Paramètres des nuages (taille, couleurs, comportement)
- Paramètres de la pluie
- Paramètres des power-ups et durées
- Paramètres des particules et effets visuels
- Configuration du gameplay (vies, points, progression)

**Export** :
```javascript
GAME_CONFIG = {
  player: {...},
  bullets: {...},
  clouds: {...},
  // etc.
}
```

**Utilisation** :
```javascript
player.speed = GAME_CONFIG.player.speed;
umbrella.duration = GAME_CONFIG.powerups.duration.umbrella;
```

## 🌍 js/translations.js - Système de traduction

**Responsabilité** : Gérer toutes les traductions du jeu (14 langues)

**Structure** :
```javascript
LANGUAGES = {
  fr: {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷',
    ui: { score, clouds, level, lives },
    buttons: { start, play, restart },
    messages: { start, restart, gameOver, victory, levelUp, motivation },
    gameplay: [ array de 10 messages ],
    rain: [ array de 3 messages ],
    powerups: { umbrella, speed, multishot }
  },
  en: { ... },
  // 12 autres langues
}
```

**Export** : Objet `LANGUAGES`

**Dépendances** : Aucune

**Utilisé par** : `game.js` via la fonction `t(key)`

## 📖 js/story.js - Chapitres narratifs

**Responsabilité** : Définir le contenu narratif des 5 chapitres

**Structure** :
```javascript
STORY_CHAPTERS = {
  fr: [
    {
      id: 1,
      title: "L'Éveil de la Colombe",
      intro: "...",
      outro: "..."
    },
    // 4 autres chapitres
  ],
  en: [ ... ],
  // Autres langues à compléter
}
```

**Export** : Objet `STORY_CHAPTERS`

**Dépendances** : Aucune

**Utilisé par** : `game.js` via `getStoryChapter(id)`

**Note** : Actuellement, seules les langues FR et EN sont complètes. Les 12 autres langues doivent être traduites.

## 🎯 js/levels.js - Configuration des niveaux

**Responsabilité** : Définir la progression et difficulté des 10 niveaux

**Structure** :
```javascript
LEVELS_CONFIG = [
  {
    chapter: 1,
    level: 1,
    cloudsToPass: 15,
    cloudSpeed: { min: 0.5, max: 1.5 },
    cloudSpawnRate: 0.004,
    shootingClouds: 0.3,
    rainSpeed: { min: 4, max: 6 },
    powerUpRate: 0.001,
    background: { top: '#87ceeb', bottom: '#b8d8f8' },
    difficulty: 'easy'
  },
  // 9 autres niveaux
]
```

**Export** : Array `LEVELS_CONFIG`

**Dépendances** : Aucune

**Utilisé par** : `game.js` via `getLevelConfig(index)`

**Évolution** : La difficulté augmente progressivement du niveau 1 au 10

## 🎮 js/game.js - Moteur de jeu principal

**Responsabilité** : Logique du jeu, rendu, boucle de jeu, événements

**Dépendances** :
- `GAME_CONFIG` (depuis config.js)
- `LANGUAGES` (depuis translations.js)
- `STORY_CHAPTERS` (depuis story.js)
- `LEVELS_CONFIG` (depuis levels.js)

**Fonctions principales** :

### Gestion de la langue
```javascript
setLanguage(langCode)  // Change la langue
t(key, params)         // Traduit une clé
updateUILanguage()     // Met à jour l'interface
```

### Gestion du canvas
```javascript
resizeCanvas()         // Adapte le canvas au conteneur
```

### Factories d'entités
```javascript
cloud()                // Crée un nuage
rainDrop(x, y)         // Crée une goutte de pluie
powerUp(x, y)          // Crée un power-up
bullet(x, y)           // Crée un projectile
heart()                // Crée un cœur (effet visuel)
particle(x, y)         // Crée une particule
```

### Rendu
```javascript
drawPlayer()           // Dessine la colombe
drawCloud(cl)          // Dessine un nuage
drawRain(r)            // Dessine la pluie
drawPowerUp(p)         // Dessine un power-up
drawBullet(b)          // Dessine un projectile
drawHeart(h)           // Dessine un cœur
drawParticle(p)        // Dessine une particule
```

### Utilitaires
```javascript
setSun(mood)           // Change l'humeur du soleil
hit(a, b)              // Détection de collision
msg(text)              // Affiche un message
```

### Système d'histoire
```javascript
getStoryChapter(id)              // Récupère un chapitre
showStoryScreen(type, id, cb)    // Affiche l'écran narratif
```

### Système de niveaux
```javascript
getLevelConfig(index)            // Récupère la config d'un niveau
updateLevelBackground()          // Change l'arrière-plan
startLevel(index)                // Démarre un niveau
completeLevel()                  // Termine un niveau
```

### Boucle de jeu
```javascript
restart()              // Redémarre le jeu
update(dt)             // Met à jour la logique
render()               // Dessine tout
loop(time)             // Boucle principale (requestAnimationFrame)
```

### Initialisation
```javascript
initGame()             // Démarre le jeu avec l'intro
```

## 🔄 Flux d'exécution

### Au chargement de la page
```
1. index.html charge tous les modules JS dans l'ordre :
   - config.js
   - translations.js
   - story.js
   - levels.js
   - game.js

2. game.js s'initialise :
   - Récupère les éléments DOM
   - Configure le canvas
   - Charge la langue sauvegardée
   - Attend le clic sur le bouton "Start"

3. Boucle de rendu commence (requestAnimationFrame)
```

### Au clic sur "Start"
```
1. initGame() est appelée
2. Affiche l'intro du chapitre 1
3. Au clic sur "Commencer" :
   - startLevel(0) démarre le niveau 1
   - state = 'playing'
   - Boucle update() commence à traiter la logique
```

### Pendant le jeu
```
Chaque frame (60 FPS) :
1. update(dt) :
   - Déplace le joueur selon les contrôles
   - Spawn des nuages/power-ups selon les taux du niveau
   - Déplace toutes les entités
   - Détecte les collisions
   - Met à jour les power-ups actifs
   - Vérifie si le niveau est complété

2. render() :
   - Efface le canvas
   - Dessine tous les éléments
   - Affiche la progression
```

### À la complétion d'un niveau
```
1. completeLevel() est appelée
2. Si nouveau chapitre :
   - Affiche outro du chapitre actuel
   - Affiche intro du nouveau chapitre
   - startLevel(nextIndex)
3. Sinon :
   - Passage direct au niveau suivant
```

## 🎯 Avantages de l'architecture modulaire

### ✅ Maintenabilité
- Chaque module a une responsabilité unique
- Facile de trouver et modifier du code
- Moins de risques de casser autre chose

### ✅ Extensibilité
- Ajouter une langue : éditer uniquement `translations.js`
- Ajouter un niveau : éditer uniquement `levels.js`
- Modifier la difficulté : éditer uniquement `config.js`
- Ajouter un chapitre : éditer `story.js` et `levels.js`

### ✅ Collaboration
- Plusieurs personnes peuvent travailler en parallèle
- Traducteurs → `translations.js`
- Game designers → `levels.js` et `config.js`
- Scénaristes → `story.js`
- Développeurs → `game.js`

### ✅ Testabilité
- Chaque module peut être testé indépendamment
- Facile de valider les traductions
- Facile de tester différents niveaux

### ✅ Performance
- Les modules sont chargés une seule fois
- Pas de duplication de code
- Optimisation possible par module

## 🔀 Comparaison avec la version monolithique

### Version monolithique (dove-of-hope-sky-blessing.html)
- ✅ Un seul fichier, facile à distribuer
- ✅ Fonctionne sans serveur HTTP
- ❌ 1000+ lignes dans un fichier
- ❌ Difficile à maintenir
- ❌ Traductions et niveaux noyés dans le code
- ❌ Collaboration difficile

### Version modulaire (index.html + js/)
- ✅ Code organisé et clair
- ✅ Facile à maintenir et étendre
- ✅ Collaboration facilitée
- ✅ Séparation des préoccupations
- ⚠️ Nécessite un serveur HTTP pour dev
- ⚠️ Plusieurs fichiers à gérer

## 📝 Bonnes pratiques

### Pour ajouter du contenu
1. **Traductions** : Éditer `js/translations.js` uniquement
2. **Niveaux** : Éditer `js/levels.js` uniquement
3. **Histoire** : Éditer `js/story.js` uniquement
4. **Gameplay** : Éditer `js/config.js` d'abord, puis `js/game.js` si nécessaire

### Pour tester
1. Utiliser le serveur de développement : `dev.bat`
2. Ouvrir la console du navigateur (F12)
3. Vérifier qu'il n'y a pas d'erreurs
4. Tester sur mobile (mode responsive)

### Pour déployer
1. Vérifier que tous les fichiers sont présents
2. Tester que les modules se chargent correctement
3. Option 1 : Déployer tous les fichiers (index.html + js/)
4. Option 2 : Utiliser la version monolithique pour distribution simple

## 🚀 Évolutions futures possibles

### Modules additionnels
- `js/sounds.js` : Gestion des sons et musiques
- `js/achievements.js` : Système de succès/trophées
- `js/leaderboard.js` : Classement des scores
- `js/multiplayer.js` : Mode multijoueur
- `js/skins.js` : Personnalisation de la colombe

### Améliorations
- Build system pour combiner les modules
- Minification du code pour production
- Service Worker pour fonctionnement offline
- IndexedDB pour sauvegardes avancées
- WebGL pour graphismes 3D

---

**Architecture modulaire = Code maintenable, extensible et collaboratif !** 🏗️✨
