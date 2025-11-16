// ============================================
// 🕊️ DOVE OF HOPE: SKY BLESSING
// Configuration Supabase
// ============================================

// À CONFIGURER avec vos propres clés Supabase
const SUPABASE_CONFIG = {
  url: 'https://your-project-id.supabase.co',
  anonKey: 'your-anon-key-here'
};

// Initialiser le client Supabase
let supabaseClient = null;

function initSupabase() {
  if (typeof supabase !== 'undefined') {
    supabaseClient = supabase.createClient(
      SUPABASE_CONFIG.url,
      SUPABASE_CONFIG.anonKey
    );
    console.log('✅ Supabase initialisé');
    return true;
  } else {
    console.warn('⚠️ Bibliothèque Supabase non chargée');
    return false;
  }
}

// ============================================
// 🔐 GESTION DES JOUEURS
// ============================================

/**
 * Créer ou récupérer un joueur
 */
async function getOrCreatePlayer(nickname, email = null) {
  try {
    if (!supabaseClient) {
      throw new Error('Supabase non initialisé');
    }

    // Vérifier si le joueur existe déjà par email ou nickname
    let query = supabaseClient
      .from('players')
      .select('*');
    
    if (email) {
      query = query.eq('email', email);
    } else {
      query = query.eq('nickname', nickname);
    }
    
    const { data: existingPlayers, error: selectError } = await query;

    if (selectError) throw selectError;

    if (existingPlayers && existingPlayers.length > 0) {
      console.log('✅ Joueur existant trouvé:', existingPlayers[0]);
      return existingPlayers[0];
    }

    // Créer un nouveau joueur
    const { data: newPlayer, error: insertError } = await supabaseClient
      .from('players')
      .insert([{ nickname, email }])
      .select()
      .single();

    if (insertError) throw insertError;

    console.log('✅ Nouveau joueur créé:', newPlayer);
    return newPlayer;
  } catch (error) {
    console.error('❌ Erreur getOrCreatePlayer:', error);
    throw error;
  }
}

/**
 * Mettre à jour le profil du joueur
 */
async function updatePlayer(playerId, updates) {
  try {
    const { data, error } = await supabaseClient
      .from('players')
      .update(updates)
      .eq('id', playerId)
      .select()
      .single();

    if (error) throw error;

    console.log('✅ Profil mis à jour:', data);
    return data;
  } catch (error) {
    console.error('❌ Erreur updatePlayer:', error);
    throw error;
  }
}

// ============================================
// 💾 GESTION DE LA PROGRESSION
// ============================================

/**
 * Sauvegarder la progression du joueur
 */
async function saveGameProgress(playerId, progressData) {
  try {
    if (!supabaseClient) {
      throw new Error('Supabase non initialisé');
    }

    const gameProgressData = {
      player_id: playerId,
      highest_level_reached: progressData.highestLevelReached || 1,
      high_score: progressData.highScore || 0,
      total_clouds_destroyed: progressData.totalCloudsDestroyed || 0,
      total_games_played: progressData.totalGamesPlayed || 0,
      total_play_time: progressData.totalPlayTime || 0,
      star_stock: progressData.starStock || 0,
      
      // Statistiques
      total_shots: progressData.stats?.totalShots || 0,
      total_hits: progressData.stats?.totalHits || 0,
      total_misses: progressData.stats?.totalMisses || 0,
      total_power_ups_collected: progressData.stats?.totalPowerUpsCollected || 0,
      total_lives_lost: progressData.stats?.totalLivesLost || 0,
      longest_survival: progressData.stats?.longestSurvival || 0,
      perfect_levels: progressData.stats?.perfectLevels || 0,
      deaths_by_clouds: progressData.stats?.deathsByClouds || 0,
      deaths_by_rain: progressData.stats?.deathsByRain || 0,
      
      // Niveaux bonus
      bonus_levels_completed: progressData.bonusLevels?.completed || [false, false, false, false],
      bonus_best_scores: progressData.bonusLevels?.bestScores || [0, 0, 0, 0],
      bonus_total_items_collected: progressData.bonusLevels?.totalItemsCollected || 0,
      
      // Session
      last_score: progressData.lastScore || 0,
      last_level: progressData.lastLevel || 1,
      last_played: new Date().toISOString()
    };

    const { data, error } = await supabaseClient
      .from('game_progress')
      .upsert(gameProgressData, { 
        onConflict: 'player_id',
        returning: 'representation'
      })
      .select()
      .single();

    if (error) throw error;

    console.log('✅ Progression sauvegardée:', data);
    return data;
  } catch (error) {
    console.error('❌ Erreur saveGameProgress:', error);
    throw error;
  }
}

/**
 * Charger la progression du joueur
 */
async function loadGameProgress(playerId) {
  try {
    const { data, error } = await supabaseClient
      .from('game_progress')
      .select('*')
      .eq('player_id', playerId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // Aucune progression trouvée, retourner null
        return null;
      }
      throw error;
    }

    console.log('✅ Progression chargée:', data);
    
    // Convertir au format du jeu
    return {
      highestLevelReached: data.highest_level_reached,
      highScore: data.high_score,
      totalCloudsDestroyed: data.total_clouds_destroyed,
      totalGamesPlayed: data.total_games_played,
      totalPlayTime: data.total_play_time,
      starStock: data.star_stock,
      
      stats: {
        totalShots: data.total_shots,
        totalHits: data.total_hits,
        totalMisses: data.total_misses,
        totalPowerUpsCollected: data.total_power_ups_collected,
        totalLivesLost: data.total_lives_lost,
        longestSurvival: data.longest_survival,
        perfectLevels: data.perfect_levels,
        deathsByClouds: data.deaths_by_clouds,
        deathsByRain: data.deaths_by_rain
      },
      
      bonusLevels: {
        completed: data.bonus_levels_completed,
        bestScores: data.bonus_best_scores,
        totalItemsCollected: data.bonus_total_items_collected
      },
      
      lastPlayed: data.last_played,
      lastScore: data.last_score,
      lastLevel: data.last_level
    };
  } catch (error) {
    console.error('❌ Erreur loadGameProgress:', error);
    throw error;
  }
}

// ============================================
// 🏆 GESTION DU CLASSEMENT
// ============================================

/**
 * Obtenir le top 100 du classement
 */
async function getLeaderboard(limit = 100) {
  try {
    const { data, error } = await supabaseClient
      .from('leaderboard')
      .select('*')
      .order('high_score', { ascending: false })
      .limit(limit);

    if (error) throw error;

    console.log('✅ Classement chargé:', data.length, 'joueurs');
    return data;
  } catch (error) {
    console.error('❌ Erreur getLeaderboard:', error);
    throw error;
  }
}

/**
 * Obtenir le rang d'un joueur
 */
async function getPlayerRank(playerId) {
  try {
    const { data, error } = await supabaseClient
      .rpc('get_player_rank', { player_id_param: playerId });

    if (error) throw error;

    return data;
  } catch (error) {
    console.error('❌ Erreur getPlayerRank:', error);
    return null;
  }
}

/**
 * Obtenir les statistiques d'un joueur
 */
async function getPlayerStats(playerId) {
  try {
    const { data, error } = await supabaseClient
      .from('player_stats')
      .select('*')
      .eq('player_id', playerId)
      .single();

    if (error) throw error;

    return data;
  } catch (error) {
    console.error('❌ Erreur getPlayerStats:', error);
    throw error;
  }
}

// ============================================
// 🎯 GESTION DES ACHIEVEMENTS
// ============================================

/**
 * Débloquer un achievement
 */
async function unlockAchievement(playerId, achievementId) {
  try {
    const { data, error } = await supabaseClient
      .from('achievements')
      .insert([{
        player_id: playerId,
        achievement_id: achievementId
      }])
      .select()
      .single();

    if (error) {
      // Ignorer si déjà débloqué
      if (error.code === '23505') {
        console.log('ℹ️ Achievement déjà débloqué');
        return null;
      }
      throw error;
    }

    console.log('✅ Achievement débloqué:', achievementId);
    return data;
  } catch (error) {
    console.error('❌ Erreur unlockAchievement:', error);
    throw error;
  }
}

/**
 * Obtenir les achievements d'un joueur
 */
async function getPlayerAchievements(playerId) {
  try {
    const { data, error } = await supabaseClient
      .from('achievements')
      .select('*')
      .eq('player_id', playerId);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error('❌ Erreur getPlayerAchievements:', error);
    throw error;
  }
}

// ============================================
// 🔄 SYNCHRONISATION COMPLÈTE
// ============================================

/**
 * Synchroniser toutes les données du joueur avec Supabase
 */
async function syncPlayerData(nickname, email, gameData) {
  try {
    // 1. Créer ou récupérer le joueur
    const player = await getOrCreatePlayer(nickname, email);
    
    // 2. Sauvegarder la progression
    await saveGameProgress(player.id, gameData);
    
    console.log('✅ Synchronisation complète réussie');
    return {
      success: true,
      player: player,
      message: 'Données synchronisées avec succès !'
    };
  } catch (error) {
    console.error('❌ Erreur syncPlayerData:', error);
    return {
      success: false,
      error: error.message,
      message: 'Erreur lors de la synchronisation'
    };
  }
}

/**
 * Charger toutes les données du joueur depuis Supabase
 */
async function loadPlayerData(nickname, email = null) {
  try {
    // 1. Récupérer le joueur
    const player = await getOrCreatePlayer(nickname, email);
    
    // 2. Charger la progression
    const progress = await loadGameProgress(player.id);
    
    // 3. Charger les achievements
    const achievements = await getPlayerAchievements(player.id);
    
    return {
      success: true,
      player: player,
      progress: progress,
      achievements: achievements
    };
  } catch (error) {
    console.error('❌ Erreur loadPlayerData:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// Export pour utilisation dans le jeu
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initSupabase,
    getOrCreatePlayer,
    updatePlayer,
    saveGameProgress,
    loadGameProgress,
    getLeaderboard,
    getPlayerRank,
    getPlayerStats,
    unlockAchievement,
    getPlayerAchievements,
    syncPlayerData,
    loadPlayerData
  };
}
