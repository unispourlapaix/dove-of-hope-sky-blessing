-- ============================================
-- 🕊️ DOVE OF HOPE: SKY BLESSING
-- Base de données Supabase - Projet: Jeuxchretiensscores
-- ============================================

-- Table globale des joueurs (partagée entre tous les jeux)
CREATE TABLE IF NOT EXISTS players (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE,
    nickname TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table spécifique pour Dove of Hope
CREATE TABLE IF NOT EXISTS dove_game_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    player_id UUID REFERENCES players(id) ON DELETE CASCADE,
    
    -- Progression
    highest_level_reached INTEGER DEFAULT 1,
    high_score INTEGER DEFAULT 0,
    total_clouds_destroyed INTEGER DEFAULT 0,
    total_games_played INTEGER DEFAULT 0,
    total_play_time INTEGER DEFAULT 0,
    star_stock INTEGER DEFAULT 0,
    
    -- Statistiques détaillées
    total_shots INTEGER DEFAULT 0,
    total_hits INTEGER DEFAULT 0,
    total_misses INTEGER DEFAULT 0,
    total_power_ups_collected INTEGER DEFAULT 0,
    total_lives_lost INTEGER DEFAULT 0,
    longest_survival INTEGER DEFAULT 0,
    perfect_levels INTEGER DEFAULT 0,
    deaths_by_clouds INTEGER DEFAULT 0,
    deaths_by_rain INTEGER DEFAULT 0,
    
    -- Niveaux bonus
    bonus_levels_completed BOOLEAN[] DEFAULT ARRAY[false, false, false, false],
    bonus_best_scores INTEGER[] DEFAULT ARRAY[0, 0, 0, 0],
    bonus_total_items_collected INTEGER DEFAULT 0,
    
    -- Métadonnées
    last_played TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_score INTEGER DEFAULT 0,
    last_level INTEGER DEFAULT 1,
    
    -- Contrainte unique par joueur
    UNIQUE(player_id),
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des achievements pour Dove of Hope
CREATE TABLE IF NOT EXISTS dove_achievements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    player_id UUID REFERENCES players(id) ON DELETE CASCADE,
    achievement_id TEXT NOT NULL,
    unlocked_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    UNIQUE(player_id, achievement_id)
);

-- Table du classement global pour Dove of Hope (dénormalisée pour performance)
CREATE TABLE IF NOT EXISTS dove_leaderboard (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    player_id UUID REFERENCES players(id) ON DELETE CASCADE,
    nickname TEXT NOT NULL,
    high_score INTEGER NOT NULL,
    highest_level_reached INTEGER NOT NULL,
    total_clouds_destroyed INTEGER NOT NULL,
    star_stock INTEGER DEFAULT 0,
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    UNIQUE(player_id)
);

-- Index pour les requêtes fréquentes
CREATE INDEX IF NOT EXISTS idx_players_email ON players(email);
CREATE INDEX IF NOT EXISTS idx_players_nickname ON players(nickname);
CREATE INDEX IF NOT EXISTS idx_dove_game_progress_player_id ON dove_game_progress(player_id);
CREATE INDEX IF NOT EXISTS idx_dove_leaderboard_high_score ON dove_leaderboard(high_score DESC);
CREATE INDEX IF NOT EXISTS idx_dove_leaderboard_level ON dove_leaderboard(highest_level_reached DESC);
CREATE INDEX IF NOT EXISTS idx_dove_achievements_player_id ON dove_achievements(player_id);

-- Fonction pour mettre à jour le timestamp updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers pour updated_at
CREATE TRIGGER update_players_updated_at
    BEFORE UPDATE ON players
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_dove_game_progress_updated_at
    BEFORE UPDATE ON dove_game_progress
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Fonction pour synchroniser le leaderboard Dove of Hope
CREATE OR REPLACE FUNCTION sync_dove_leaderboard()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO dove_leaderboard (player_id, nickname, high_score, highest_level_reached, total_clouds_destroyed, star_stock, last_updated)
    SELECT 
        NEW.player_id,
        p.nickname,
        NEW.high_score,
        NEW.highest_level_reached,
        NEW.total_clouds_destroyed,
        NEW.star_stock,
        NOW()
    FROM players p
    WHERE p.id = NEW.player_id
    ON CONFLICT (player_id) 
    DO UPDATE SET
        nickname = EXCLUDED.nickname,
        high_score = EXCLUDED.high_score,
        highest_level_reached = EXCLUDED.highest_level_reached,
        total_clouds_destroyed = EXCLUDED.total_clouds_destroyed,
        star_stock = EXCLUDED.star_stock,
        last_updated = NOW();
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger pour synchroniser le leaderboard automatiquement
CREATE TRIGGER sync_dove_leaderboard_on_progress_update
    AFTER INSERT OR UPDATE ON dove_game_progress
    FOR EACH ROW
    EXECUTE FUNCTION sync_dove_leaderboard();

-- Politiques de sécurité RLS (Row Level Security)
ALTER TABLE players ENABLE ROW LEVEL SECURITY;
ALTER TABLE dove_game_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE dove_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE dove_leaderboard ENABLE ROW LEVEL SECURITY;

-- Politiques pour players (table globale)
CREATE POLICY "Tout le monde peut créer un joueur"
    ON players FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Tout le monde peut voir les joueurs"
    ON players FOR SELECT
    USING (true);

CREATE POLICY "Les joueurs peuvent mettre à jour leur profil"
    ON players FOR UPDATE
    USING (true);

-- Politiques pour dove_game_progress
CREATE POLICY "Tout le monde peut créer une progression Dove"
    ON dove_game_progress FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Tout le monde peut voir les progressions Dove"
    ON dove_game_progress FOR SELECT
    USING (true);

CREATE POLICY "Tout le monde peut mettre à jour les progressions Dove"
    ON dove_game_progress FOR UPDATE
    USING (true);

-- Politiques pour dove_achievements
CREATE POLICY "Tout le monde peut créer des achievements Dove"
    ON dove_achievements FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Tout le monde peut voir les achievements Dove"
    ON dove_achievements FOR SELECT
    USING (true);

-- Politique pour dove_leaderboard : lecture publique
CREATE POLICY "Tout le monde peut voir le classement Dove"
    ON dove_leaderboard FOR SELECT
    USING (true);

-- Vues utiles pour Dove of Hope
CREATE OR REPLACE VIEW dove_top_players 
WITH (security_invoker = true)
AS
SELECT 
    l.nickname,
    l.high_score,
    l.highest_level_reached,
    l.total_clouds_destroyed,
    l.star_stock,
    l.last_updated,
    ROW_NUMBER() OVER (ORDER BY l.high_score DESC) as rank
FROM dove_leaderboard l
ORDER BY l.high_score DESC
LIMIT 100;

CREATE OR REPLACE VIEW dove_player_stats
WITH (security_invoker = true)
AS
SELECT 
    p.nickname,
    p.email,
    gp.highest_level_reached,
    gp.high_score,
    gp.total_clouds_destroyed,
    gp.total_games_played,
    gp.star_stock,
    gp.total_shots,
    gp.total_hits,
    CASE 
        WHEN gp.total_shots > 0 
        THEN ROUND((gp.total_hits::DECIMAL / gp.total_shots::DECIMAL) * 100, 2)
        ELSE 0 
    END as accuracy_percentage,
    gp.perfect_levels,
    gp.last_played
FROM players p
JOIN dove_game_progress gp ON p.id = gp.player_id;

-- Commentaires pour documentation
COMMENT ON TABLE players IS 'Joueurs globaux (tous les jeux)';
COMMENT ON TABLE dove_game_progress IS 'Progression et statistiques Dove of Hope';
COMMENT ON TABLE dove_achievements IS 'Succès débloqués Dove of Hope';
COMMENT ON TABLE dove_leaderboard IS 'Classement global Dove of Hope';
COMMENT ON VIEW dove_top_players IS 'Top 100 joueurs Dove of Hope';
COMMENT ON VIEW dove_player_stats IS 'Statistiques complètes Dove of Hope';
