# 🚀 Guide de Démarrage Rapide - Dove of Hope

## ⚡ Pour Jouer Immédiatement

### Option 1 : Version Simple (1 fichier)
1. Ouvrez `dove-of-hope-sky-blessing.html` dans votre navigateur
2. Cliquez sur l'ampoule 💡 pour commencer
3. Jouez ! 🕊️

### Option 2 : Version Modulaire (Recommandée)
1. Double-cliquez sur `dev.bat` (lance le serveur)
2. Ouvrez http://localhost:8000/index.html
3. Jouez ! 🕊️

## 📱 Contrôles

- **Mobile** : Touchez l'écran pour déplacer et tirer
- **Desktop** : Souris pour déplacer, clic maintenu pour tirer

## 🎯 Objectif

Détruisez les nuages ☁️ pour rallumer le soleil ☀️ !

## 💎 Power-ups

- ☂️ **Parapluie** : Protection contre la pluie
- ⚡ **Vitesse** : Mouvement rapide
- 🔥 **Triple tir** : 3 projectiles à la fois

## 📚 Documentation Complète

- **[README.md](README.md)** - Guide principal du jeu
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Architecture technique
- **[README-TRANSLATIONS.md](README-TRANSLATIONS.md)** - Ajouter des langues
- **[LEVELS-SYSTEM.md](LEVELS-SYSTEM.md)** - Créer des niveaux
- **[level-templates.js](level-templates.js)** - Templates de niveaux

## 🛠️ Pour Développeurs

### Changer la langue
```javascript
// Ouvrez la console (F12) et tapez :
setLanguage('en');  // Anglais
setLanguage('ja');  // Japonais
setLanguage('es');  // Espagnol
```

### Ajouter une traduction
Éditez `js/translations.js`

### Créer un niveau
Éditez `js/levels.js`

### Modifier la difficulté
Éditez `js/config.js`

### Changer l'histoire
Éditez `js/story.js`

## 📂 Structure du Projet

```
dove-of-hope-sky-blessing/
├── index.html                      # 🎮 Version modulaire
├── dove-of-hope-sky-blessing.html  # 📜 Version monolithique
├── dev.bat                         # 🖥️ Serveur de dev
├── js/
│   ├── config.js                   # ⚙️ Configuration
│   ├── translations.js             # 🌍 14 langues
│   ├── story.js                    # 📖 5 chapitres
│   ├── levels.js                   # 🎯 10 niveaux
│   └── game.js                     # 🎮 Moteur
└── docs (README, guides, etc.)
```

## 🌍 14 Langues Disponibles

🇫🇷 FR • 🇬🇧 EN • 🇪🇸 ES • 🇩🇪 DE • 🇮🇹 IT • 🇵🇹 PT • 🇷🇺 RU • 🇯🇵 JA • 🇨🇳 ZH • 🇸🇦 AR • 🇰🇷 KO • 🇮🇳 HI • 🇹🇷 TR • 🇳🇱 NL

## 🎊 5 Chapitres Épiques

1. **L'Éveil de la Colombe** (Niveaux 1-2)
2. **La Tempête Commence** (Niveaux 3-5)
3. **L'Ascension Divine** (Niveaux 6-7)
4. **Le Souffle de l'Espoir** (Niveaux 8-9)
5. **La Révélation Finale** (Niveau 10)

## ❓ Questions Fréquentes

### Comment installer comme application ?
- **iOS** : Safari → Partager → Sur l'écran d'accueil
- **Android** : Chrome → Menu → Ajouter à l'écran d'accueil

### Où sont sauvegardés mes progrès ?
Le jeu sauvegarde uniquement la langue choisie dans le navigateur.

### Le jeu fonctionne-t-il hors ligne ?
La version monolithique (`dove-of-hope-sky-blessing.html`) fonctionne entièrement hors ligne.
La version modulaire nécessite un serveur pour le développement.

### Comment contribuer ?
1. Ajoutez une traduction dans `js/translations.js`
2. Créez des niveaux dans `js/levels.js`
3. Proposez des améliorations

## 💡 Astuces

- 🎯 Visez les nuages sombres en premier (ils tirent de la pluie)
- 💎 Attrapez les power-ups pour faciliter le jeu
- ⏰ Le parapluie est très utile dans les niveaux difficiles
- 🌈 Après la pluie vient le beau temps !

## 🐛 Problèmes ?

### Le jeu ne se charge pas
- Vérifiez que tous les fichiers sont présents (index.html + dossier js/)
- Utilisez un serveur HTTP (`dev.bat` ou `python -m http.server`)

### Les modules JS ne se chargent pas
- Vérifiez la console du navigateur (F12)
- Les fichiers JS doivent être chargés depuis un serveur HTTP
- Utilisez `dev.bat` pour lancer le serveur

### Le jeu est trop difficile
Éditez `js/config.js` pour ajuster :
```javascript
GAME_CONFIG.gameplay.startingLives = 5; // Plus de vies
GAME_CONFIG.player.speed = 7;            // Plus rapide
```

## 🎉 Bon Jeu !

> "Il est temps de rallumer la lumière - C'est un beau temps pour réaliser ses rêves !"

🕊️ **Dove of Hope : Sky Blessing**

---

**Questions ?** Consultez la documentation complète dans README.md
