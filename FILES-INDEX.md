# 📋 Index des Fichiers - Dove of Hope : Sky Blessing

## 🎮 Fichiers de Jeu

### Versions jouables
| Fichier | Type | Description | Usage |
|---------|------|-------------|-------|
| `index.html` | ⭐ Modulaire | Point d'entrée principal avec modules JS | **Recommandé pour le développement** |
| `dove-of-hope-sky-blessing.html` | 📜 Monolithique | Version tout-en-un (1 fichier) | Distribution simple, fonctionne sans serveur |

### Scripts
| Fichier | Description |
|---------|-------------|
| `dev.bat` | Serveur de développement Windows (Python HTTP Server sur port 8000) |

## 📦 Modules JavaScript (dossier js/)

| Fichier | Taille | Responsabilité | Dépendances |
|---------|--------|----------------|-------------|
| `config.js` | ~3 KB | Configuration du jeu (vitesses, durées, constantes) | Aucune |
| `translations.js` | ~25 KB | Traductions dans 14 langues | Aucune |
| `story.js` | ~8 KB | Chapitres narratifs (5 chapitres × 2 langues) | Aucune |
| `levels.js` | ~5 KB | Configuration des 10 niveaux progressifs | Aucune |
| `game.js` | ~20 KB | Moteur de jeu principal (logique, rendu, événements) | Tous les modules ci-dessus |

**Total modules** : ~61 KB de JavaScript modulaire

## 📚 Documentation

| Fichier | Contenu | Pour qui ? |
|---------|---------|------------|
| **README.md** | Guide principal du jeu | 🎮 Joueurs et développeurs |
| **QUICKSTART.md** | Guide de démarrage rapide | 🚀 Nouveaux utilisateurs |
| **ARCHITECTURE.md** | Architecture technique modulaire | 👨‍💻 Développeurs |
| **README-TRANSLATIONS.md** | Guide du système de traduction | 🌍 Traducteurs |
| **LEVELS-SYSTEM.md** | Guide du système de niveaux | 🎯 Game designers |
| **level-templates.js** | Templates pour créer des niveaux | 🎨 Créateurs de contenu |

## 🗂️ Arborescence Complète

```
dove-of-hope-sky-blessing/
│
├── 🎮 JEUX
│   ├── index.html                      ⭐ Version modulaire (recommandée)
│   └── dove-of-hope-sky-blessing.html  📜 Version monolithique (legacy)
│
├── 📦 MODULES JAVASCRIPT
│   └── js/
│       ├── config.js                   ⚙️ Configuration
│       ├── translations.js             🌍 Traductions (14 langues)
│       ├── story.js                    📖 Chapitres narratifs (5 chapitres)
│       ├── levels.js                   🎯 Niveaux (10 niveaux)
│       └── game.js                     🎮 Moteur de jeu
│
├── 📚 DOCUMENTATION
│   ├── README.md                       📘 Guide principal
│   ├── QUICKSTART.md                   🚀 Démarrage rapide
│   ├── ARCHITECTURE.md                 🏗️ Architecture technique
│   ├── README-TRANSLATIONS.md          🌐 Guide traductions
│   ├── LEVELS-SYSTEM.md                📊 Guide niveaux
│   └── level-templates.js              📝 Templates de niveaux
│
├── 🛠️ OUTILS
│   └── dev.bat                         🖥️ Serveur de développement
│
└── 📁 AUTRES
    └── gospel/                         (Dossier existant)
```

## 📊 Statistiques du Projet

### Langues
- **14 langues** disponibles
- **~450 chaînes** traduites par langue
- **FR & EN** : Traductions complètes (UI + Histoire)
- **12 autres langues** : UI traduite, histoire à compléter

### Niveaux
- **10 niveaux** avec difficulté progressive
- **5 chapitres** narratifs
- **3 écrans d'histoire** par chapitre (intro/outro)
- Arrière-plans dynamiques (10 dégradés de couleur)

### Code
- **~1000 lignes** dans la version monolithique
- **~800 lignes** réparties en 5 modules
- **HTML5 Canvas** pour le rendu
- **Vanilla JavaScript** (pur, sans framework)

### Power-ups
- **3 types** : Parapluie, Vitesse, Triple tir
- Durées configurables (4-6 secondes)
- Spawn aléatoire contrôlé

## 🎯 Guides par Cas d'Usage

### Je veux jouer immédiatement
👉 Ouvrez `dove-of-hope-sky-blessing.html`

### Je veux développer/modifier le jeu
👉 Lancez `dev.bat` puis ouvrez `http://localhost:8000/index.html`

### Je veux ajouter une langue
👉 Consultez `README-TRANSLATIONS.md` puis éditez `js/translations.js`

### Je veux créer des niveaux
👉 Consultez `LEVELS-SYSTEM.md` puis éditez `js/levels.js`

### Je veux modifier la difficulté
👉 Éditez `js/config.js`

### Je veux changer l'histoire
👉 Éditez `js/story.js`

### Je veux comprendre le code
👉 Consultez `ARCHITECTURE.md`

### Je veux un démarrage rapide
👉 Consultez `QUICKSTART.md`

## 🔄 Flux de Développement Recommandé

### 1️⃣ Première Installation
```
1. Cloner/télécharger le projet
2. Lire QUICKSTART.md
3. Lancer dev.bat
4. Ouvrir index.html dans le navigateur
5. Jouer pour comprendre le jeu
```

### 2️⃣ Contribuer du Contenu
```
Traductions → js/translations.js → README-TRANSLATIONS.md
Niveaux     → js/levels.js       → LEVELS-SYSTEM.md
Histoire    → js/story.js        → LEVELS-SYSTEM.md
Difficulté  → js/config.js       → ARCHITECTURE.md
```

### 3️⃣ Développement Avancé
```
1. Lire ARCHITECTURE.md
2. Modifier js/game.js si besoin
3. Tester avec dev.bat
4. Vérifier la console (F12) pour les erreurs
```

## 📝 Checklist Avant Modification

- [ ] J'ai lu le QUICKSTART.md
- [ ] J'ai compris quelle partie je veux modifier
- [ ] J'ai consulté la documentation appropriée
- [ ] J'ai lancé le serveur de dev (`dev.bat`)
- [ ] J'ai testé mes modifications
- [ ] Je n'ai pas d'erreurs dans la console (F12)

## 🎨 Fichiers Modifiables par Profil

### 🌍 Traducteur
- **Fichier principal** : `js/translations.js`
- **Documentation** : `README-TRANSLATIONS.md`
- **Niveau** : Débutant ✅

### 🎯 Game Designer
- **Fichiers principaux** : `js/levels.js`, `js/config.js`
- **Documentation** : `LEVELS-SYSTEM.md`
- **Templates** : `level-templates.js`
- **Niveau** : Intermédiaire ⭐

### 📖 Scénariste
- **Fichier principal** : `js/story.js`
- **Documentation** : `LEVELS-SYSTEM.md`
- **Niveau** : Débutant ✅

### 👨‍💻 Développeur
- **Fichiers principaux** : `js/game.js`, `js/config.js`
- **Documentation** : `ARCHITECTURE.md`
- **Niveau** : Avancé ⭐⭐⭐

## ⚙️ Configuration Recommandée

### Éditeur de Code
- Visual Studio Code (gratuit)
- Extensions recommandées :
  - Live Server (pour tester sans dev.bat)
  - JavaScript (ES6) code snippets
  - Bracket Pair Colorizer

### Navigateur
- Chrome ou Edge (meilleurs outils de développement)
- Firefox (excellent pour le debugging)
- Safari (pour tester sur iOS)

### Outils
- Python 3.x (pour dev.bat)
- Git (pour versionner vos modifications)

## 📞 Support

### En cas de problème
1. Consultez QUICKSTART.md section "Problèmes ?"
2. Vérifiez la console du navigateur (F12)
3. Relisez la documentation appropriée

### Pour contribuer
1. Ajoutez vos modifications
2. Testez localement
3. Documentez vos changements
4. Proposez vos améliorations

---

**Dernière mise à jour** : Architecture modulaire complète ✅

🕊️ **Dove of Hope : Sky Blessing** - Bonne création !
