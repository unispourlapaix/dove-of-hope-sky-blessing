# 🕊️ Dove of Hope : Sky Blessing

> **Un jeu mobile en format portrait qui apporte espoir et lumière**

## 🎮 À Propos

**Dove of Hope : Sky Blessing** est un jeu web mobile inspirant où vous incarnez une colombe porteuse d'espoir. Votre mission : dissiper les nuages sombres et rallumer la lumière du monde !

### ✨ Caractéristiques

- 🌍 **14 langues supportées** (FR, EN, ES, DE, IT, PT, RU, JA, ZH, AR, KO, HI, TR, NL)
- 📱 **Format portrait mobile** optimisé pour smartphones
- 🎯 **Gameplay simple** : touchez l'écran pour voler et tirer
- 💎 **Power-ups** : Parapluie, Vitesse, Tir Triple
- 🌈 **Messages inspirants** dans toutes les langues
- ☀️ **Soleil dynamique** qui réagit à vos performances
- ❤️ **Système de vies** avec effets visuels magnifiques

## 🚀 Démarrage Rapide

### Option 1 : Version modulaire (recommandée)
1. Téléchargez tous les fichiers du projet
2. Ouvrez `index.html` dans votre navigateur
3. Ou lancez le serveur de développement (voir ci-dessous)

### Option 2 : Version fichier unique
1. Téléchargez `dove-of-hope-sky-blessing.html`
2. Ouvrez-le dans votre navigateur
3. Jouez !

### Option 3 : Serveur de développement
```bash
# Double-cliquez sur dev.bat (Windows)
# Ou lancez manuellement :
python -m http.server 8000
```
Puis ouvrez : `http://localhost:8000/index.html`

## 🎯 Comment Jouer

### Sur Mobile 📱
- **Touchez l'écran** pour déplacer la colombe
- **Maintenez le doigt** pour tirer automatiquement
- **Évitez la pluie** ou attrapez le power-up parapluie
- **Détruisez les nuages** pour marquer des points

### Sur Ordinateur 🖥️
- **Souris** : Déplacez le curseur pour bouger
- **Clic maintenu** : Tirer automatiquement
- **Même objectif** : Détruire tous les nuages !

## 🌟 Power-Ups

| Power-up | Icône | Effet |
|----------|-------|-------|
| **Parapluie** | ☂️ | Protection contre la pluie (5 secondes) |
| **Vitesse** | ⚡ | Déplacement ultra-rapide (4 secondes) |
| **Tir Triple** | 🔸🔸🔸 | Trois projectiles simultanés (6 secondes) |

## 🌍 Langues Disponibles

Le jeu est disponible en **14 langues** :

🇫🇷 Français • 🇬🇧 English • 🇪🇸 Español • 🇩🇪 Deutsch • 🇮🇹 Italiano • 🇵🇹 Português • 🇷🇺 Русский • 🇯🇵 日本語 • 🇨🇳 中文 • 🇸🇦 العربية • 🇰🇷 한국어 • 🇮🇳 हिन्दी • 🇹🇷 Türkçe • 🇳🇱 Nederlands

Pour changer de langue :
```javascript
// Ouvrez la console du navigateur (F12)
setLanguage('en'); // Anglais
setLanguage('ja'); // Japonais
setLanguage('es'); // Espagnol
```

📖 **Guide complet des traductions** : Voir [README-TRANSLATIONS.md](README-TRANSLATIONS.md)

## 📱 Installation comme Application Web

### iOS (iPhone/iPad)
1. Ouvrez le jeu dans Safari
2. Appuyez sur le bouton Partager (□↑)
3. Sélectionnez "Sur l'écran d'accueil"
4. Confirmez

### Android
1. Ouvrez le jeu dans Chrome
2. Menu (⋮) > "Ajouter à l'écran d'accueil"
3. Confirmez

## 🎨 Captures d'écran

```
┌─────────────────┐
│   ☀️  Score: 500│
│   Niveau: 3     │
│                 │
│      ☁️  ☁️     │
│   💧    💧      │
│       🕊️        │
│                 │
│   "Vole vers    │
│   tes rêves!"   │
└─────────────────┘
```

## 🛠️ Technologies

- **HTML5 Canvas** pour le rendu graphique
- **JavaScript Vanilla** (pur, sans framework)
- **CSS3** pour l'interface responsive
- **LocalStorage** pour sauvegarder la langue

## 📂 Structure du Projet

```
dove-of-hope-sky-blessing/
│
├── index.html                      # 🎮 Point d'entrée (version modulaire)
├── dove-of-hope-sky-blessing.html  # 📜 Version monolithique (legacy)
├── dev.bat                         # 🖥️ Serveur de développement (Windows)
│
├── js/                             # 📦 Modules JavaScript
│   ├── config.js                   # ⚙️ Configuration du jeu
│   ├── translations.js             # 🌍 Système de traduction (14 langues)
│   ├── story.js                    # 📖 Chapitres narratifs (5 chapitres)
│   ├── levels.js                   # 🎯 Configuration des 10 niveaux
│   └── game.js                     # 🎮 Moteur de jeu principal
│
├── README.md                       # 📘 Ce fichier
├── README-TRANSLATIONS.md          # 🌐 Guide des traductions
├── LEVELS-SYSTEM.md                # 📊 Documentation du système de niveaux
└── level-templates.js              # 📝 Templates pour créer des niveaux
```

### 🏗️ Architecture Modulaire

Le jeu utilise une **architecture modulaire moderne** :

- **index.html** : Version modulaire recommandée (charge les modules JS)
- **dove-of-hope-sky-blessing.html** : Version monolithique (tout en un fichier)
- **js/config.js** : Constantes de configuration (vitesses, durées, etc.)
- **js/translations.js** : Textes dans les 14 langues
- **js/story.js** : Contenu narratif des 5 chapitres
- **js/levels.js** : Configuration des 10 niveaux progressifs
- **js/game.js** : Logique principale du jeu

Cette séparation facilite :
- ✅ La maintenance du code
- ✅ L'ajout de nouvelles langues
- ✅ La création de nouveaux niveaux
- ✅ La modification de la difficulté
- ✅ La collaboration en équipe

## 🔧 Développement

### 🌐 Ajouter une nouvelle langue
Consultez [README-TRANSLATIONS.md](README-TRANSLATIONS.md) pour le guide complet.

Bref aperçu :
1. Éditez `js/translations.js`
2. Ajoutez votre langue dans l'objet `LANGUAGES`
3. Traduisez toutes les sections (ui, buttons, messages, gameplay, rain, powerups)
4. Testez dans le jeu

### 🎯 Créer de nouveaux niveaux
Consultez [LEVELS-SYSTEM.md](LEVELS-SYSTEM.md) pour le guide complet.

Bref aperçu :
1. Éditez `js/levels.js`
2. Ajoutez une entrée dans `LEVELS_CONFIG`
3. Configurez : vitesse, spawn rate, difficulté, arrière-plan
4. Ou utilisez les templates de `level-templates.js`

### ⚙️ Modifier le gameplay
Toutes les constantes sont dans `js/config.js` :
```javascript
GAME_CONFIG.player.speed = 5;           // Vitesse de la colombe
GAME_CONFIG.bullets.fireRate = 200;     // Cadence de tir (ms)
GAME_CONFIG.powerups.duration.umbrella = 5000; // Durée parapluie (ms)
```

### 📝 Modifier l'histoire
Éditez `js/story.js` pour changer les textes narratifs des 5 chapitres.

## 🎯 Système de Progression

### 📖 Mode Histoire
Le jeu propose une progression narrative à travers **5 chapitres** et **10 niveaux** :

1. **L'Éveil de la Colombe** - Niveaux 1-2 (Facile)
2. **La Tempête Commence** - Niveaux 3-5 (Moyen)
3. **L'Ascension Divine** - Niveaux 6-7 (Difficile)
4. **Le Souffle de l'Espoir** - Niveaux 8-9 (Très difficile)
5. **La Révélation Finale** - Niveau 10 (Expert)

Chaque chapitre a :
- 🎬 Une **introduction narrative** 
- 🎯 Des **objectifs de progression** (15-150 nuages selon le niveau)
- 🏆 Une **conclusion épique**
- 🎨 Un **arrière-plan unique** qui évolue

### 📊 Difficulté Progressive
- **Score** : +100 points par nuage détruit
- **Nuages requis** : De 15 (niveau 1) à 150 (niveau 10)
- **Vitesse** : Les nuages deviennent plus rapides
- **Pluie** : Augmentation du pourcentage de nuages qui tirent
- **Arrière-plan** : Devient plus sombre avec la progression

📚 **Guide complet** : Voir [LEVELS-SYSTEM.md](LEVELS-SYSTEM.md)

## 💡 Messages Inspirants

Le jeu contient plus de **100 messages uniques** à travers toutes les langues :
- Messages de motivation
- Citations inspirantes
- Encouragements pendant le jeu
- Messages de power-up

## 🌈 Philosophie du Jeu

> "Après la pluie vient le beau temps. Savoir danser sous la pluie, c'est savoir être heureux."

Le jeu encourage :
- La **persévérance** face aux difficultés
- L'**espoir** même dans l'adversité
- La **joie** de réaliser ses rêves
- La **foi** plus forte que les tempêtes

## 📜 Licence

Ce jeu est un projet créatif personnel. Libre d'utilisation à des fins éducatives et personnelles.

## 🤝 Contribution

Pour contribuer une nouvelle traduction :
1. Consultez [README-TRANSLATIONS.md](README-TRANSLATIONS.md)
2. Ajoutez votre langue dans l'objet `LANGUAGES`
3. Testez tous les messages
4. Soumettez votre contribution

## 📧 Contact

Pour questions, suggestions ou nouvelles traductions, n'hésitez pas à contribuer !

---

**Fait avec ❤️ et inspiration** • *"Il est temps de rallumer la lumière"* ✨

🕊️ **Dove of Hope : Sky Blessing** - Volez vers vos rêves !
