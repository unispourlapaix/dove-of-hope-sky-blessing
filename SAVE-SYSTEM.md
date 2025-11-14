# 💾 Système de Sauvegarde Locale

## 📋 Vue d'Ensemble

Le système de sauvegarde de **Dove of Hope: Sky Blessing** utilise `localStorage` pour persister les données du joueur entre les sessions. Toutes les statistiques, records et progression sont automatiquement sauvegardés.

---

## 📊 Données Sauvegardées

### Structure Complète

```javascript
{
  // 🏆 Progression
  highestLevelReached: 1,        // Niveau maximum atteint
  highScore: 0,                  // Meilleur score de tous les temps
  totalCloudsDestroyed: 0,       // Total de nuages détruits
  totalGamesPlayed: 0,           // Nombre de parties jouées
  totalPlayTime: 0,              // Temps de jeu total (en secondes)
  
  // 📈 Statistiques
  stats: {
    totalShots: 0,               // Tirs totaux effectués
    totalHits: 0,                // Tirs réussis
    totalMisses: 0,              // Tirs ratés
    totalPowerUpsCollected: 0,   // Power-ups collectés
    totalLivesLost: 0,           // Vies perdues
    longestSurvival: 0,          // Plus longue survie (ms)
    perfectLevels: 0,            // Niveaux complétés sans dégât
    deathsByClouds: 0,           // Morts causées par nuages
    deathsByRain: 0              // Morts causées par la pluie
  },
  
  // 🎯 Achievements (usage futur)
  achievements: [],
  
  // 📅 Session
  lastPlayed: "2025-11-13T...",  // Date ISO de la dernière partie
  lastScore: 0,                  // Score de la dernière partie
  lastLevel: 1                   // Niveau de la dernière partie
}
```

---

## 🔧 Fonctions Principales

### 📥 Chargement des Données

```javascript
loadGameData()
```
- Charge automatiquement les données au démarrage
- Fusionne avec la structure par défaut
- Retourne `true` si des données existent
- Console: `💾 Données chargées`

**Exemple:**
```javascript
if (loadGameData()) {
  console.log('Bienvenue de retour !');
  console.log('Meilleur score:', gameData.highScore);
}
```

### 💾 Sauvegarde des Données

```javascript
saveGameData()
```
- Sauvegarde toutes les données dans `localStorage`
- Met à jour automatiquement `lastPlayed`
- Retourne `true` en cas de succès
- Gère les erreurs de quota dépassé

**Exemple:**
```javascript
gameData.highScore = 50000;
saveGameData(); // Données sauvegardées
```

### 📊 Mise à Jour des Statistiques

```javascript
updateStats(statName, value = 1)
```
- Incrémente une statistique spécifique
- `value` par défaut = 1

**Exemples:**
```javascript
updateStats('totalHits');              // +1 tir réussi
updateStats('totalPowerUpsCollected'); // +1 power-up
updateStats('totalShots', 3);          // +3 tirs (multishot)
```

### 📈 Sauvegarde de Progression

```javascript
saveProgress(level, score, clouds)
```
- Met à jour le niveau maximum
- Met à jour le meilleur score
- Ajoute les nuages détruits au total
- Met à jour la dernière session
- **Automatique tous les 10 nuages**

**Exemple:**
```javascript
// Appelé automatiquement dans le jeu
if (cloudsCleared % 10 === 0) {
  saveProgress(level, score, cloudsCleared);
}
```

### 🏁 Sauvegarde Fin de Partie

```javascript
saveGameEnd(finalScore, finalLevel, finalClouds, survivalTime)
```
- Incrémente les parties jouées
- Ajoute le temps de jeu
- Met à jour le record de survie
- Sauvegarde la progression finale

**Exemple:**
```javascript
// Appelé automatiquement au Game Over
const survivalTime = Date.now() - gameStartTime;
saveGameEnd(score, level, cloudsCleared, survivalTime);
```

---

## 🎨 Interface Utilisateur

### Bouton d'Accès

Un bouton **📊 Stats** est disponible dans l'UI du jeu :
- Cliquable à tout moment
- Affiche un panneau détaillé
- Couleur bleue distinctive

### Raccourci Clavier

**Ctrl+S** (ou **Cmd+S** sur Mac)
- Ouvre le panneau de statistiques
- Fonctionne à tout moment

### Panneau de Statistiques

Affiche 4 sections :

#### 1. 🏆 Records
- Meilleur Score
- Niveau Maximum
- Plus Longue Survie

#### 2. 📈 Progression
- Nuages Détruits
- Parties Jouées
- Temps de Jeu Total
- Niveaux Parfaits

#### 3. 🎯 Précision
- Tirs Totaux
- Tirs Réussis
- Pourcentage de Précision
- Power-ups Collectés

#### 4. 💔 Défaites
- Vies Perdues
- Morts par Pluie
- Morts par Nuages

---

## 🛠️ Outils de Gestion

### 🔄 Réinitialisation

```javascript
resetGameData()
```
- Demande confirmation
- Efface toutes les données
- Réinitialise la structure par défaut
- Console: `🔄 Données réinitialisées`

**Utilisation:**
- Via le bouton **🔄 Réinitialiser** dans le panneau Stats
- Via la console développeur

### 📤 Export de Sauvegarde

```javascript
exportGameData()
```
- Exporte les données en JSON
- Télécharge un fichier `.json`
- Nom: `dove-game-save-YYYY-MM-DD.json`
- Console: `📤 Données exportées`

**Utilisation:**
- Cliquer sur **📤 Exporter** dans le panneau Stats
- Sauvegarder le fichier pour backup

### 📥 Import de Sauvegarde

```javascript
importGameData(fileInput)
```
- Importe des données depuis un fichier JSON
- Valide la structure
- Fusionne avec les données actuelles
- Alert de succès/erreur

**Utilisation:**
```javascript
// Créer un input file
const input = document.createElement('input');
input.type = 'file';
input.accept = '.json';
input.onchange = (e) => importGameData(e.target);
input.click();
```

---

## 🎯 Intégration dans le Gameplay

### Sauvegarde Automatique

Le système sauvegarde automatiquement :

1. **Tous les 10 nuages détruits**
   ```javascript
   if (cloudsCleared % 10 === 0) {
     saveProgress(level, score, cloudsCleared);
   }
   ```

2. **À la fin de chaque partie**
   ```javascript
   if (lives <= 0) {
     const survivalTime = Date.now() - gameStartTime;
     saveGameEnd(score, level, cloudsCleared, survivalTime);
   }
   ```

3. **Au redémarrage**
   ```javascript
   function restart() {
     if (gameStartTime > 0) {
       saveGameEnd(score, level, cloudsCleared, survivalTime);
     }
   }
   ```

### Statistiques Temps Réel

Les stats sont mises à jour en temps réel :

- **Tir réussi:**
  ```javascript
  updateStats('totalHits');
  updateStats('totalShots');
  ```

- **Power-up collecté:**
  ```javascript
  updateStats('totalPowerUpsCollected');
  ```

- **Vie perdue:**
  ```javascript
  updateStats('totalLivesLost');
  updateStats('deathsByRain'); // ou deathsByClouds
  ```

---

## 🔍 Débogage

### Console Logs

Le système log automatiquement :
- ✅ `💾 Données chargées` - Au démarrage
- ✅ `💾 Données sauvegardées` - À chaque sauvegarde
- ✅ `🔄 Données réinitialisées` - Lors du reset
- ✅ `📤 Données exportées` - Lors de l'export
- ✅ `📥 Données importées` - Lors de l'import
- ❌ `❌ Erreur lors du chargement` - Erreur
- ❌ `❌ Erreur lors de la sauvegarde` - Erreur

### Inspection Manuelle

Ouvrir la console et taper :
```javascript
// Voir toutes les données
console.log(gameData);

// Voir une stat précise
console.log('High Score:', gameData.highScore);

// Voir les stats complètes
console.log(gameData.stats);
```

### Accès Direct localStorage

```javascript
// Voir la sauvegarde brute
console.log(localStorage.getItem('doveGameSave'));

// Parser la sauvegarde
const save = JSON.parse(localStorage.getItem('doveGameSave'));
console.log(save);
```

---

## 📏 Limites et Contraintes

### Quota localStorage

- **Limite:** ~5-10 MB selon le navigateur
- **Taille actuelle:** ~2-3 KB par sauvegarde
- **Capacité:** Des milliers de parties

### Compatibilité Navigateurs

✅ Chrome, Firefox, Safari, Edge
✅ iOS Safari, Chrome Mobile
⚠️ Mode Navigation Privée (données effacées à la fermeture)
❌ Très vieux navigateurs (IE < 8)

### Sécurité

⚠️ **localStorage n'est pas chiffré**
- Ne stocke pas d'informations sensibles
- Données accessibles via DevTools
- Données modifiables par l'utilisateur

---

## 🚀 Utilisations Avancées

### Système d'Achievements (Futur)

```javascript
// Ajouter un achievement
function unlockAchievement(id, name, description) {
  if (!gameData.achievements.includes(id)) {
    gameData.achievements.push(id);
    saveGameData();
    showAchievementNotification(name, description);
  }
}

// Exemple
if (cloudsCleared >= 1000) {
  unlockAchievement('cloud_master', 'Maître des Nuages', 
                    'Détruire 1000 nuages');
}
```

### Comparaison de Sessions

```javascript
// Comparer avec la dernière partie
if (score > gameData.lastScore) {
  msg('Nouveau record personnel !');
}
```

### Statistiques Étendues

```javascript
// Calculer la précision
const accuracy = (gameData.stats.totalHits / gameData.stats.totalShots) * 100;

// Calculer le ratio mort/parties
const deathRate = gameData.stats.totalLivesLost / gameData.totalGamesPlayed;

// Temps moyen par partie
const avgTime = gameData.totalPlayTime / gameData.totalGamesPlayed;
```

---

## 🔐 Clé de Stockage

**Clé localStorage:** `doveGameSave`

Pour éviter les conflits avec d'autres jeux, une clé unique est utilisée :
```javascript
const SAVE_KEY = 'doveGameSave';
```

---

## ✅ Checklist d'Intégration

- [x] Chargement automatique au démarrage
- [x] Sauvegarde tous les 10 nuages
- [x] Sauvegarde à la fin de partie
- [x] Sauvegarde au redémarrage
- [x] Bouton Stats dans l'UI
- [x] Raccourci clavier Ctrl+S
- [x] Panneau de statistiques complet
- [x] Export de sauvegarde
- [x] Réinitialisation avec confirmation
- [x] Logs de debug dans la console
- [x] Gestion des erreurs
- [x] Statistiques temps réel

---

**Le système de sauvegarde assure la persistance complète de la progression du joueur !** 💾✨

Pour plus d'informations :
- `SCORING-SYSTEM.md` - Système de scoring et achievements
- `LEVELS-MODULAR.md` - Système de niveaux
- `README.md` - Documentation générale
