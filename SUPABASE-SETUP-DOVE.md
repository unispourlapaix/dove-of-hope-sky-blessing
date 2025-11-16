# 🕊️ Configuration Supabase pour Dove of Hope

## 📋 Utilisation du projet existant: **Jeuxchretiensscores**

Puisque vous avez déjà un projet Supabase nommé "Jeuxchretiensscores", nous allons créer des tables spécifiques pour Dove of Hope avec le préfixe `dove_` pour les distinguer des autres jeux.

---

## 🚀 Étapes de configuration

### 1️⃣ Accéder à votre projet Supabase

1. Connectez-vous sur [supabase.com](https://supabase.com)
2. Ouvrez votre projet **Jeuxchretiensscores**

### 2️⃣ Exécuter le script SQL

1. Dans le menu latéral, cliquez sur **SQL Editor**
2. Cliquez sur **New Query**
3. Copiez le contenu complet du fichier `supabase-schema.sql`
4. Collez-le dans l'éditeur SQL
5. Cliquez sur **Run** (ou `Ctrl+Enter`)

✅ Cela créera :
- Table `dove_players` (joueurs Dove of Hope)
- Table `dove_game_progress` (progression des joueurs)
- Table `dove_leaderboard` (classement global)
- Table `dove_achievements` (succès débloqués)
- Triggers automatiques pour synchronisation
- Politiques de sécurité RLS
- Vues pour statistiques

### 3️⃣ Récupérer vos clés API

1. Dans le menu latéral, cliquez sur **Settings** ⚙️
2. Cliquez sur **API**
3. Vous verrez deux informations importantes :
   - **Project URL** : `https://xxxxx.supabase.co`
   - **anon public key** : Une longue clé commençant par `eyJ...`

### 4️⃣ Configurer le fichier JavaScript

Ouvrez le fichier `supabase-config-dove.js` et remplacez :

```javascript
const SUPABASE_CONFIG_DOVE = {
    url: 'VOTRE_URL_SUPABASE',  // ← Remplacez par votre Project URL
    anonKey: 'VOTRE_ANON_KEY'   // ← Remplacez par votre anon public key
};
```

**Exemple :**
```javascript
const SUPABASE_CONFIG_DOVE = {
    url: 'https://abcdefgh.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
};
```

### 5️⃣ Inclure dans votre HTML

Ajoutez ces lignes dans votre fichier HTML **avant** le script principal du jeu :

```html
<!-- Bibliothèque Supabase -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

<!-- Configuration Dove of Hope -->
<script src="supabase-config-dove.js"></script>
```

---

## 📊 Structure de la base de données Dove of Hope

### Architecture multi-jeux

**Table globale (partagée) :**
- `players` - Joueurs de TOUS les jeux (Dove of Hope, autres jeux chrétiens, etc.)

### Tables créées avec préfixe `dove_`

1. **dove_game_progress** - Progression complète Dove of Hope
   - Niveau max atteint, high score, stock d'étoiles
   - Statistiques détaillées (tirs, précision, etc.)
   - Niveaux bonus complétés
   - Temps de jeu, jours consécutifs

3. **dove_leaderboard** - Classement (auto-synchronisé)
   - Synchronisé automatiquement via triggers PostgreSQL
   - Optimisé pour requêtes rapides

4. **dove_achievements** - Succès débloqués
   - Nom, description, date de déverrouillage

### Vues disponibles

- `dove_top_players` : Top 100 joueurs
- `dove_player_stats` : Statistiques complètes d'un joueur

---

## 🔐 Sécurité

- ✅ **Row Level Security (RLS)** activé sur toutes les tables
- ✅ Politiques permettant la création et lecture publique
- ✅ Les clés `anon` sont publiques (c'est normal !)
- ✅ Les données sensibles sont protégées par RLS

---

## 💾 Utilisation dans le jeu

### Sauvegarder la progression

```javascript
// Dans votre fonction showSupabaseSave()
async function saveToSupabase() {
    const nickname = prompt('Entrez votre pseudo:');
    if (!nickname) return;
    
    const email = prompt('Email (optionnel):') || null;
    
    // Synchroniser avec Supabase
    const result = await syncDovePlayerData(nickname, email, gameData);
    
    if (result.success) {
        alert('✅ Sauvegarde réussie !');
    } else {
        alert('❌ Erreur: ' + result.error);
    }
}
```

### Charger la progression

```javascript
async function loadFromSupabase() {
    const nickname = prompt('Entrez votre pseudo:');
    if (!nickname) return;
    
    const result = await loadDovePlayerData(nickname);
    
    if (result.success && result.progress) {
        // Fusionner avec gameData
        gameData = { ...gameData, ...result.progress };
        saveGameData();
        alert('✅ Progression chargée !');
        location.reload();
    } else {
        alert('❌ Aucune sauvegarde trouvée');
    }
}
```

### Afficher le classement

```javascript
async function showLeaderboard() {
    const leaderboard = await getDoveLeaderboard(10);
    
    let html = '<h3>🏆 Top 10</h3><ol>';
    leaderboard.forEach(player => {
        html += `<li>${player.nickname} - ${player.high_score} pts</li>`;
    });
    html += '</ol>';
    
    // Afficher dans une modal
    document.getElementById('leaderboardContent').innerHTML = html;
}
```

---

## 🧪 Tester la configuration

Ouvrez la console du navigateur (`F12`) et testez :

```javascript
// Initialiser
initSupabaseDove();

// Créer un joueur test
await getOrCreateDovePlayer('TestPlayer', 'test@example.com');

// Sauvegarder une progression test
await saveDoveGameProgress('player-id-here', {
    highestLevelReached: 5,
    highScore: 1000,
    starStock: 50
});

// Voir le classement
await getDoveLeaderboard(10);
```

---

## 📈 Monitoring

Dans Supabase Dashboard :
- **Table Editor** : Voir vos données en temps réel
- **Database** → **Logs** : Voir les requêtes
- **Authentication** : Si vous voulez ajouter l'authentification plus tard

---

## ❓ Problèmes courants

### "Supabase JS library not loaded"
→ Vérifiez que `<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>` est bien inclus

### "Failed to save game progress"
→ Vérifiez vos clés API dans `SUPABASE_CONFIG_DOVE`

### "Permission denied"
→ Les politiques RLS sont configurées pour accès public, cela devrait fonctionner

---

## 🎯 Prochaines étapes

Une fois configuré :
1. ✅ Modifier `showSupabaseSave()` dans votre HTML pour activer la sauvegarde
2. ✅ Ajouter un bouton "Charger" pour récupérer les sauvegardes
3. ✅ Afficher le classement dans le menu
4. ✅ Débloquer des achievements automatiquement

---

## 📝 Notes importantes

- ⚠️ Les tables avec préfixe `dove_` sont spécifiques à Dove of Hope
- ⚠️ Vous pouvez avoir d'autres tables sans préfixe pour d'autres jeux
- ⚠️ Les clés `anon` sont publiques et c'est normal (RLS protège les données)
- ⚠️ Sauvegardez toujours vos clés API quelque part de sûr

---

Besoin d'aide ? Les fonctions JavaScript incluent des console.log détaillés pour déboguer ! 🔍
