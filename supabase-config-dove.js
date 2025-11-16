// ============================================
// 🕊️ DOVE OF HOPE: Configuration Supabase
// Projet: Jeuxchretiensscores
// ============================================

// Configuration Supabase
const SUPABASE_CONFIG_DOVE = {
    url: 'https://dmszyxowetilvsanqsxm.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtc3p5eG93ZXRpbHZzYW5xc3htIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3NzM0NDUsImV4cCI6MjA3NTM0OTQ0NX0.EukDYFVt0sCrDb0_V4ZPMv5B4gkD43V8Cw7CEuvl0C8'
};

let supabaseClientDove = null;

// Initialiser le client Supabase
function initSupabaseDove() {
    if (!window.supabase) {
        console.error('❌ Supabase JS library not loaded');
        return null;
    }
    
    if (!supabaseClientDove) {
        supabaseClientDove = window.supabase.createClient(
            SUPABASE_CONFIG_DOVE.url,
            SUPABASE_CONFIG_DOVE.anonKey
        );
        console.log('✅ Supabase client initialized for Dove of Hope');
    }
    
    return supabaseClientDove;
}

// ============================================
// FONCTIONS POUR LES JOUEURS (players - table globale)
// ============================================

// Créer ou récupérer un joueur (table globale)
async function getOrCreatePlayer(nickname, email = null) {
    const supabase = initSupabaseDove();
    if (!supabase) return null;
    
    try {
        // Chercher par nickname d'abord
        let { data: existingPlayer, error: searchError } = await supabase
            .from('players')
            .select('*')
            .eq('nickname', nickname)
            .maybeSingle();
        
        if (existingPlayer) {
            console.log('✅ Player found by nickname:', nickname);
            // Mettre à jour l'email si fourni et différent
            if (email && existingPlayer.email !== email) {
                const { data: updated } = await supabase
                    .from('players')
                    .update({ email })
                    .eq('id', existingPlayer.id)
                    .select()
                    .single();
                if (updated) existingPlayer = updated;
            }
            return existingPlayer;
        }
        
        // Si email fourni, chercher par email
        if (email) {
            const { data: playerByEmail } = await supabase
                .from('players')
                .select('*')
                .eq('email', email)
                .maybeSingle();
            
            if (playerByEmail) {
                console.log('✅ Player found by email, updating nickname');
                // Mettre à jour le pseudo
                const { data: updated } = await supabase
                    .from('players')
                    .update({ nickname })
                    .eq('id', playerByEmail.id)
                    .select()
                    .single();
                return updated || playerByEmail;
            }
        }
        
        // Créer un nouveau joueur
        const { data: newPlayer, error: createError } = await supabase
            .from('players')
            .insert([{ nickname, email }])
            .select()
            .single();
        
        if (createError) throw createError;
        
        console.log('✅ Player created:', nickname);
        return newPlayer;
        
    } catch (error) {
        console.error('❌ Error with player:', error);
        return null;
    }
}

// Mettre à jour le profil d'un joueur
async function updatePlayer(playerId, updates) {
    const supabase = initSupabaseDove();
    if (!supabase) return null;
    
    try {
        const { data, error } = await supabase
            .from('players')
            .update(updates)
            .eq('id', playerId)
            .select()
            .single();
        
        if (error) throw error;
        console.log('✅ Player updated');
        return data;
        
    } catch (error) {
        console.error('❌ Error updating player:', error);
        return null;
    }
}

// ============================================
// FONCTIONS POUR LA PROGRESSION (dove_game_progress)
// ============================================

// Sauvegarder la progression Dove of Hope
async function saveDoveGameProgress(playerId, progressData) {
    const supabase = initSupabaseDove();
    if (!supabase) return false;
    
    try {
        // Vérifier si une progression existe déjà
        const { data: existing } = await supabase
            .from('dove_game_progress')
            .select('id')
            .eq('player_id', playerId)
            .maybeSingle();
        
        const dataToSave = {
            player_id: playerId,
            highest_level_reached: progressData.highestLevelReached || 1,
            high_score: progressData.highScore || 0,
            star_stock: progressData.starStock || 0,
            total_clouds_destroyed: progressData.totalCloudsDestroyed || 0,
            total_games_played: progressData.totalGamesPlayed || 0,
            total_shots: progressData.totalShots || 0,
            total_hits: progressData.totalHits || 0,
            perfect_levels: progressData.perfectLevels || 0,
            bonus_levels_completed: progressData.bonusLevelsCompleted || [],
            bonus_best_scores: progressData.bonusLevelsHighScores || [],
            last_played: new Date().toISOString()
        };
        
        let result;
        if (existing) {
            // Mettre à jour
            result = await supabase
                .from('dove_game_progress')
                .update(dataToSave)
                .eq('player_id', playerId)
                .select()
                .single();
        } else {
            // Insérer
            result = await supabase
                .from('dove_game_progress')
                .insert([dataToSave])
                .select()
                .single();
        }
        
        if (result.error) throw result.error;
        
        console.log('✅ Dove game progress saved');
        return true;
        
    } catch (error) {
        console.error('❌ Error saving Dove game progress:', error);
        return false;
    }
}

// Charger la progression Dove of Hope
async function loadDoveGameProgress(playerId) {
    const supabase = initSupabaseDove();
    if (!supabase) return null;
    
    try {
        const { data, error } = await supabase
            .from('dove_game_progress')
            .select('*')
            .eq('player_id', playerId)
            .maybeSingle();
        
        if (error) throw error;
        
        if (!data) {
            console.log('ℹ️ No Dove game progress found');
            return null;
        }
        
        // Convertir les données SQL en format JavaScript
        const progressData = {
            highestLevelReached: data.highest_level_reached,
            highScore: data.high_score,
            starStock: data.star_stock,
            totalCloudsDestroyed: data.total_clouds_destroyed,
            totalGamesPlayed: data.total_games_played,
            totalShots: data.total_shots,
            totalHits: data.total_hits,
            perfectLevels: data.perfect_levels,
            bonusLevelsCompleted: data.bonus_levels_completed || [],
            bonusLevelsHighScores: data.bonus_best_scores || [],
            lastPlayed: data.last_played
        };
        
        console.log('✅ Dove game progress loaded');
        return progressData;
        
    } catch (error) {
        console.error('❌ Error loading Dove game progress:', error);
        return null;
    }
}

// ============================================
// FONCTIONS POUR LE CLASSEMENT (dove_leaderboard)
// ============================================

// Obtenir le classement Dove of Hope
async function getDoveLeaderboard(limit = 100) {
    const supabase = initSupabaseDove();
    if (!supabase) return [];
    
    try {
        const { data, error } = await supabase
            .from('dove_leaderboard')
            .select('*')
            .order('high_score', { ascending: false })
            .limit(limit);
        
        if (error) throw error;
        
        console.log(`✅ Dove leaderboard loaded (${data.length} players)`);
        return data;
        
    } catch (error) {
        console.error('❌ Error loading Dove leaderboard:', error);
        return [];
    }
}

// Obtenir le rang d'un joueur Dove
async function getDovePlayerRank(playerId) {
    const supabase = initSupabaseDove();
    if (!supabase) return null;
    
    try {
        const { data, error } = await supabase
            .rpc('get_dove_player_rank', { p_player_id: playerId });
        
        if (error) throw error;
        return data;
        
    } catch (error) {
        console.error('❌ Error getting Dove player rank:', error);
        return null;
    }
}

// Obtenir les statistiques d'un joueur Dove via la vue
async function getDovePlayerStats(nickname) {
    const supabase = initSupabaseDove();
    if (!supabase) return null;
    
    try {
        const { data, error } = await supabase
            .from('dove_player_stats')
            .select('*')
            .eq('nickname', nickname)
            .maybeSingle();
        
        if (error) throw error;
        return data;
        
    } catch (error) {
        console.error('❌ Error getting Dove player stats:', error);
        return null;
    }
}

// ============================================
// FONCTIONS POUR LES ACHIEVEMENTS (dove_achievements)
// ============================================

// Débloquer un achievement Dove
async function unlockDoveAchievement(playerId, achievementName, description) {
    const supabase = initSupabaseDove();
    if (!supabase) return false;
    
    try {
        // Vérifier si déjà débloqué
        const { data: existing } = await supabase
            .from('dove_achievements')
            .select('id')
            .eq('player_id', playerId)
            .eq('achievement_name', achievementName)
            .maybeSingle();
        
        if (existing) {
            console.log('ℹ️ Dove achievement already unlocked:', achievementName);
            return false;
        }
        
        const { error } = await supabase
            .from('dove_achievements')
            .insert([{
                player_id: playerId,
                achievement_name: achievementName,
                achievement_description: description,
                unlocked_at: new Date().toISOString()
            }]);
        
        if (error) throw error;
        
        console.log('✅ Dove achievement unlocked:', achievementName);
        return true;
        
    } catch (error) {
        console.error('❌ Error unlocking Dove achievement:', error);
        return false;
    }
}

// Obtenir tous les achievements d'un joueur Dove
async function getDovePlayerAchievements(playerId) {
    const supabase = initSupabaseDove();
    if (!supabase) return [];
    
    try {
        const { data, error } = await supabase
            .from('dove_achievements')
            .select('*')
            .eq('player_id', playerId)
            .order('unlocked_at', { ascending: false });
        
        if (error) throw error;
        return data;
        
    } catch (error) {
        console.error('❌ Error loading Dove achievements:', error);
        return [];
    }
}

// ============================================
// FONCTIONS UTILITAIRES DOVE OF HOPE
// ============================================

// Synchroniser toutes les données locales vers Supabase (Dove)
async function syncDovePlayerData(nickname, email, gameData) {
    try {
        console.log('🔄 Syncing Dove player data to Supabase...');
        
        // 1. Créer ou récupérer le joueur
        const player = await getOrCreatePlayer(nickname, email);
        if (!player) {
            throw new Error('Failed to create/get player');
        }
        
        // 2. Sauvegarder la progression
        const saved = await saveDoveGameProgress(player.id, gameData);
        if (!saved) {
            throw new Error('Failed to save Dove game progress');
        }
        
        console.log('✅ Dove player data synced successfully');
        return {
            success: true,
            player: player
        };
        
    } catch (error) {
        console.error('❌ Error syncing Dove player data:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

// Charger toutes les données depuis Supabase (Dove)
async function loadDovePlayerData(nickname) {
    try {
        console.log('📥 Loading Dove player data from Supabase...');
        
        // 1. Récupérer le joueur
        const player = await getOrCreatePlayer(nickname);
        if (!player) {
            throw new Error('Player not found');
        }
        
        // 2. Charger la progression
        const progress = await loadDoveGameProgress(player.id);
        
        // 3. Charger les achievements
        const achievements = await getDovePlayerAchievements(player.id);
        
        console.log('✅ Dove player data loaded successfully');
        return {
            success: true,
            player: player,
            progress: progress,
            achievements: achievements
        };
        
    } catch (error) {
        console.error('❌ Error loading Dove player data:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

console.log('🕊️ Dove of Hope Supabase config loaded');
