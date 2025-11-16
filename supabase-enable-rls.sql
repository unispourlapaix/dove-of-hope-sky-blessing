-- ============================================
-- 🔐 ACTIVATION RLS POUR DOVE OF HOPE
-- À exécuter APRÈS avoir créé les tables
-- ============================================

-- Activer RLS sur toutes les tables
ALTER TABLE players ENABLE ROW LEVEL SECURITY;
ALTER TABLE dove_game_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE dove_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE dove_leaderboard ENABLE ROW LEVEL SECURITY;

-- Politiques pour players (table globale)
DROP POLICY IF EXISTS "Tout le monde peut créer un joueur" ON players;
CREATE POLICY "Tout le monde peut créer un joueur"
    ON players FOR INSERT
    WITH CHECK (true);

DROP POLICY IF EXISTS "Tout le monde peut voir les joueurs" ON players;
CREATE POLICY "Tout le monde peut voir les joueurs"
    ON players FOR SELECT
    USING (true);

DROP POLICY IF EXISTS "Les joueurs peuvent mettre à jour leur profil" ON players;
CREATE POLICY "Les joueurs peuvent mettre à jour leur profil"
    ON players FOR UPDATE
    USING (true);

-- Politiques pour dove_game_progress
DROP POLICY IF EXISTS "Tout le monde peut créer une progression Dove" ON dove_game_progress;
CREATE POLICY "Tout le monde peut créer une progression Dove"
    ON dove_game_progress FOR INSERT
    WITH CHECK (true);

DROP POLICY IF EXISTS "Tout le monde peut voir les progressions Dove" ON dove_game_progress;
CREATE POLICY "Tout le monde peut voir les progressions Dove"
    ON dove_game_progress FOR SELECT
    USING (true);

DROP POLICY IF EXISTS "Tout le monde peut mettre à jour les progressions Dove" ON dove_game_progress;
CREATE POLICY "Tout le monde peut mettre à jour les progressions Dove"
    ON dove_game_progress FOR UPDATE
    USING (true);

-- Politiques pour dove_achievements
DROP POLICY IF EXISTS "Tout le monde peut créer des achievements Dove" ON dove_achievements;
CREATE POLICY "Tout le monde peut créer des achievements Dove"
    ON dove_achievements FOR INSERT
    WITH CHECK (true);

DROP POLICY IF EXISTS "Tout le monde peut voir les achievements Dove" ON dove_achievements;
CREATE POLICY "Tout le monde peut voir les achievements Dove"
    ON dove_achievements FOR SELECT
    USING (true);

-- Politiques pour dove_leaderboard
DROP POLICY IF EXISTS "Tout le monde peut voir le classement Dove" ON dove_leaderboard;
CREATE POLICY "Tout le monde peut voir le classement Dove"
    ON dove_leaderboard FOR SELECT
    USING (true);

DROP POLICY IF EXISTS "Tout le monde peut créer des entrées leaderboard Dove" ON dove_leaderboard;
CREATE POLICY "Tout le monde peut créer des entrées leaderboard Dove"
    ON dove_leaderboard FOR INSERT
    WITH CHECK (true);

DROP POLICY IF EXISTS "Tout le monde peut mettre à jour le leaderboard Dove" ON dove_leaderboard;
CREATE POLICY "Tout le monde peut mettre à jour le leaderboard Dove"
    ON dove_leaderboard FOR UPDATE
    USING (true);

-- Recréer les vues avec SECURITY INVOKER pour éviter l'avertissement
DROP VIEW IF EXISTS dove_top_players;
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

DROP VIEW IF EXISTS dove_player_stats;
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

-- Vérifier que RLS est activé
SELECT 
    schemaname,
    tablename,
    rowsecurity as rls_enabled
FROM pg_tables 
WHERE schemaname = 'public' 
    AND tablename IN ('players', 'dove_game_progress', 'dove_achievements', 'dove_leaderboard')
ORDER BY tablename;
