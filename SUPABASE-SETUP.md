# 🕊️ Dove of Hope: Configuration Supabase

## 📋 Guide d'installation

### 1. Créer un projet Supabase

1. Allez sur [supabase.com](https://supabase.com)
2. Créez un compte ou connectez-vous
3. Cliquez sur "New Project"
4. Nommez votre projet : **doveofhope_storelevestart**
5. Choisissez un mot de passe pour la base de données
6. Sélectionnez une région (choisissez la plus proche de vos joueurs)
7. Cliquez sur "Create new project"

### 2. Configurer la base de données

1. Une fois le projet créé, allez dans l'onglet **SQL Editor**
2. Copiez tout le contenu du fichier `supabase-schema.sql`
3. Collez-le dans l'éditeur SQL
4. Cliquez sur **Run** pour exécuter le script
5. Vérifiez que toutes les tables sont créées sans erreur

### 3. Obtenir vos clés API

1. Allez dans **Settings** > **API**
2. Copiez les valeurs suivantes :
   - **Project URL** : `https://your-project-id.supabase.co`
   - **anon public** : votre clé API publique

### 4. Configurer le jeu

1. Ouvrez le fichier `supabase-config.js`
2. Remplacez les valeurs dans `SUPABASE_CONFIG` :

```javascript
const SUPABASE_CONFIG = {
  url: 'https://your-project-id.supabase.co',  // Remplacez ici
  anonKey: 'your-anon-key-here'                // Remplacez ici
};
```

### 5. Inclure dans votre HTML

Ajoutez ces lignes dans votre fichier HTML **avant** le script principal :

```html
<!-- Bibliothèque Supabase -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

<!-- Configuration Supabase -->
<script src="supabase-config.js"></script>
```

## 📊 Structure de la base de données

### Tables principales

#### `players`
- Stocke les informations des joueurs
- Email (unique, optionnel)
- Nickname (pseudo du joueur)

#### `game_progress`
- Progression complète du joueur
- Scores, niveaux, statistiques
- Stock d'étoiles
- Niveaux bonus

#### `leaderboard`
- Classement global
- Synchronisé automatiquement
- Top 100 des meilleurs joueurs

#### `achievements`
- Succès débloqués
- Extensible pour futures fonctionnalités

### Vues disponibles

- `top_players` : Top 100 du classement
- `player_stats` : Statistiques détaillées avec calculs

## 🔐 Sécurité (Row Level Security)

Les politiques RLS sont activées pour protéger les données :

- ✅ Tout le monde peut **créer** un joueur
- ✅ Tout le monde peut **voir** les classements
- ✅ Seul le propriétaire peut **modifier** ses propres données
- ✅ Lecture publique du leaderboard

## 🚀 Utilisation dans le jeu

### Initialiser Supabase

```javascript
// Au chargement du jeu
initSupabase();
```

### Synchroniser les données

```javascript
// Sauvegarder la progression
await syncPlayerData('MonPseudo', 'email@example.com', gameData);
```

### Charger les données

```javascript
// Charger la progression
const result = await loadPlayerData('MonPseudo', 'email@example.com');
if (result.success && result.progress) {
  gameData = result.progress;
}
```

### Obtenir le classement

```javascript
// Top 100
const leaderboard = await getLeaderboard(100);
```

## 📱 Intégration dans le jeu

### Modifier la fonction `showSupabaseSave()`

Dans votre fichier HTML, mettez à jour la fonction pour activer réellement la sauvegarde :

```javascript
async function saveToSupabase() {
  if (!supabaseClient) {
    const initialized = initSupabase();
    if (!initialized) {
      alert('❌ Supabase non configuré. Consultez SUPABASE-SETUP.md');
      return;
    }
  }
  
  // Demander les infos du joueur
  const nickname = playerProfile.nickname || prompt('🎮 Entre ton pseudo :');
  const email = playerProfile.email || prompt('📧 Entre ton email (optionnel) :') || null;
  
  if (!nickname) {
    alert('⚠️ Un pseudo est requis pour sauvegarder en ligne');
    return;
  }
  
  // Afficher un loader
  const loader = document.createElement('div');
  loader.textContent = '⏳ Sauvegarde en cours...';
  loader.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.8);color:white;padding:20px;border-radius:10px;z-index:9999;';
  document.body.appendChild(loader);
  
  try {
    // Synchroniser avec Supabase
    const result = await syncPlayerData(nickname, email, gameData);
    
    loader.remove();
    
    if (result.success) {
      alert('✅ Données sauvegardées en ligne avec succès !');
      
      // Sauvegarder les identifiants localement
      playerProfile.nickname = nickname;
      playerProfile.email = email;
      savePlayerProfile();
    } else {
      alert('❌ Erreur : ' + result.message);
    }
  } catch (error) {
    loader.remove();
    alert('❌ Erreur lors de la sauvegarde : ' + error.message);
  }
}
```

## 🔧 Fonctions disponibles

### Joueurs
- `getOrCreatePlayer(nickname, email)` - Créer ou récupérer un joueur
- `updatePlayer(playerId, updates)` - Mettre à jour le profil

### Progression
- `saveGameProgress(playerId, progressData)` - Sauvegarder la progression
- `loadGameProgress(playerId)` - Charger la progression

### Classement
- `getLeaderboard(limit)` - Obtenir le top N
- `getPlayerRank(playerId)` - Obtenir le rang d'un joueur
- `getPlayerStats(playerId)` - Statistiques détaillées

### Achievements
- `unlockAchievement(playerId, achievementId)` - Débloquer un succès
- `getPlayerAchievements(playerId)` - Liste des succès

### Synchronisation
- `syncPlayerData(nickname, email, gameData)` - Sync complète (upload)
- `loadPlayerData(nickname, email)` - Chargement complet (download)

## 🧪 Tester la connexion

Dans la console du navigateur :

```javascript
// Initialiser
initSupabase();

// Tester la connexion
const player = await getOrCreatePlayer('TestPlayer', 'test@example.com');
console.log('Joueur créé:', player);

// Voir le classement
const leaderboard = await getLeaderboard(10);
console.log('Top 10:', leaderboard);
```

## 📈 Monitoring

Dans le dashboard Supabase :

- **Table Editor** : Voir vos données en temps réel
- **API Logs** : Voir les requêtes
- **Database** > **Roles** : Gérer les permissions

## 🎯 Prochaines étapes

1. ✅ Créer le projet Supabase
2. ✅ Exécuter le schéma SQL
3. ✅ Configurer les clés API
4. ✅ Tester la connexion
5. ⚡ Intégrer dans le jeu
6. 🎨 Créer l'interface de sauvegarde
7. 🏆 Afficher le classement dans le jeu

## 🆘 Support

En cas de problème :

1. Vérifiez les clés API dans `supabase-config.js`
2. Consultez les logs dans la console du navigateur (F12)
3. Vérifiez le dashboard Supabase > API Logs
4. Assurez-vous que RLS est bien configuré

## 📝 Notes importantes

- Les clés API sont **publiques** (anon key)
- RLS protège les données sensibles
- Le classement est public
- Les emails sont optionnels
- Le stock d'étoiles est sauvegardé
- Synchronisation automatique du leaderboard

---

**Créé pour Dove of Hope: Sky Blessing** 🕊️✨
