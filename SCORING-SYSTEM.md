# 🏆 Système de Scoring et Récompenses

## 📊 Vue d'Ensemble

Le système de scoring de **Dove of Hope: Sky Blessing** comprend :
- **Système de points** multi-critères
- **10 Échelons de Courage** (progression par score)
- **10 Blasons de Connaissance Bienveillante** (déblocables)
- **Statistiques de jeu** sauvegardées

---

## 💯 Système de Points

### Points par Action

| Action | Points | Notes |
|--------|--------|-------|
| Nuage détruit | 100 | Base |
| Pluie évitée | 50 | Bonus survie |
| Power-up collecté | 200 | Bonus stratégique |
| Niveau complété | 1000 | Bonus de progression |
| Niveau sans vie perdue | 500 | Bonus de maîtrise |
| Niveau parfait | 2000 | Tous les nuages sans dégât |
| Combo (3+ nuages) | x1.5 | Multiplicateur |
| Nuage rapide | +50 | Bonus de vitesse |

### Calcul du Score

```javascript
// Exemple : 3 nuages en combo rapide
score = (100 * 1.5 + 50) * 3 = 525 points
```

---

## 🎖️ Les 10 Échelons de Courage

Progression basée sur le **score total** (cumulatif entre les parties).

### 1. 🐣 Colombe Naissante
- **Score:** 0 - 5,000
- **Message:** "Tes premiers battements d'ailes sont pleins de promesses !"
- **Couleur:** Gris clair

### 2. 🕊️ Aile Timide
- **Score:** 5,001 - 15,000
- **Message:** "Tu prends confiance, continue à t'élever !"
- **Couleur:** Gris

### 3. 🌟 Messager d'Espoir
- **Score:** 15,001 - 30,000
- **Message:** "Ta lumière commence à percer les ténèbres !"
- **Couleur:** Jaune doré

### 4. ✨ Gardien Céleste
- **Score:** 30,001 - 50,000
- **Message:** "Le ciel te reconnait comme protecteur !"
- **Couleur:** Bleu ciel

### 5. ⚔️ Chevalier de la Foi
- **Score:** 50,001 - 75,000
- **Message:** "Ton courage inspire les autres créatures ailées !"
- **Couleur:** Violet

### 6. 👼 Ange Guerrier
- **Score:** 75,001 - 100,000
- **Message:** "Tu combats l'obscurité avec grâce et puissance !"
- **Couleur:** Rouge vif

### 7. 🏆 Champion Divin
- **Score:** 100,001 - 150,000
- **Message:** "Les anges chantent tes exploits dans les cieux !"
- **Couleur:** Orange

### 8. 🔥 Séraphin Vaillant
- **Score:** 150,001 - 200,000
- **Message:** "Ton feu intérieur brille comme mille soleils !"
- **Couleur:** Rouge foncé

### 9. ⭐ Archange de Lumière
- **Score:** 200,001 - 300,000
- **Message:** "Ta sagesse et ton courage sont légendaires !"
- **Couleur:** Or foncé

### 10. 👑 Légende Éternelle
- **Score:** 300,001+
- **Message:** "Tu es devenu une légende vivante, source d'inspiration éternelle !"
- **Couleur:** Or royal

---

## 🎖️ Les 10 Blasons de Connaissance Bienveillante

Chaque blason représente une vérité spirituelle et se débloque par des actions spécifiques.

### 1. ❤️ Cœur Compatissant
- **Description:** Comprendre que l'amour de Dieu est inconditionnel
- **Déblocage:** Terminer le niveau 8 (Amour Inconditionnel)
- **Verset:** "L'amour ne périt jamais"

### 2. 📖 Esprit de Sagesse
- **Description:** Ouvrir son cœur à la Parole
- **Déblocage:** Terminer le niveau 12 (Porte de la Sagesse)
- **Verset:** "Ta parole est une lampe à mes pieds"

### 3. 💪 Force Intérieure
- **Description:** Puiser sa force dans la foi
- **Déblocage:** Terminer le niveau 6 (Force Intérieure)
- **Verset:** "Je peux tout par celui qui me fortifie"

### 4. 🦁 Persévérance Divine
- **Description:** Ne jamais abandonner face aux épreuves
- **Déblocage:** Atteindre 500 nuages dissipés
- **Verset:** "Soyez forts et prenez courage"

### 5. 🦋 Grâce Transformatrice
- **Description:** Renaître dans la lumière
- **Déblocage:** Terminer le niveau 10 (Nouvelle Créature)
- **Verset:** "Si quelqu'un est en Christ, il est une nouvelle créature"

### 6. 🕊️ Foi Inébranlable
- **Description:** Croire même dans la tempête
- **Déblocage:** Terminer le niveau 7 sans perdre de vie
- **Verset:** "Après la pluie vient le beau temps"

### 7. 🔓 Liberté Spirituelle
- **Description:** Se libérer des chaînes du passé
- **Déblocage:** Terminer le niveau 4 (Pardon et Liberté)
- **Verset:** "Là où est l'Esprit, là est la liberté"

### 8. 💡 Lumière Éternelle
- **Description:** Être une lumière dans les ténèbres
- **Déblocage:** Dissiper 100 nuages sans mourir
- **Verset:** "La lumière brille dans les ténèbres"

### 9. 🦸 Héros Céleste
- **Description:** Être reconnu comme enfant de Dieu
- **Déblocage:** Terminer le niveau 9 (Héros de Lumière)
- **Verset:** "Ta foi t'a sauvé"

### 10. 🌟 Maître Spirituel
- **Description:** Atteindre la victoire finale
- **Déblocage:** Atteindre 991 nuages (Victoire Finale)
- **Verset:** "La vie est une aventure extraordinaire"

---

## 💻 Utilisation dans le Code

### Afficher l'Échelon de Courage

```javascript
// Dans l'interface du jeu
displayCourageRank();
// Affiche l'échelon actuel en haut à gauche
```

### Vérifier une Montée en Grade

```javascript
const oldRank = getCurrentCourageRank(gameStats.totalScore);
gameStats.totalScore += 5000; // Ajouter des points
const newRank = getCurrentCourageRank(gameStats.totalScore);

if (newRank.id > oldRank.id) {
    showRankUpScreen(newRank); // Écran de promotion !
}
```

### Débloquer un Blason

```javascript
// Quand un niveau est complété
const context = {
    levelCompleted: 8,
    totalClouds: cloudsCleared,
    livesLostInLevel: 0,
    cloudStreak: 150
};

const unlockedBadges = checkBadgeUnlocks(context);

unlockedBadges.forEach(badge => {
    showBadgeUnlockScreen(badge); // Afficher le déblocage
});

// Mettre à jour l'UI
document.getElementById('badgeCount').textContent = getUnlockedBadgesCount();
```

### Calculer les Points

```javascript
// Nuage détruit avec combo
const points = calculateCloudPoints(currentCombo, isSpeedBonus);
gameStats.totalScore += points;
score += points;

// Sauvegarder
saveStats();
```

### Afficher la Collection

```javascript
// Clic sur le bouton "Blasons"
showBadgesCollection();
// Affiche tous les blasons (débloqués et verrouillés)
```

---

## 📈 Statistiques Sauvegardées

Les données suivantes sont persistées dans `localStorage` :

```javascript
{
    totalScore: 0,          // Score total (cumulatif)
    highScore: 0,           // Meilleur score d'une partie
    cloudsDestroyed: 0,     // Total de nuages détruits
    livesLost: 0,           // Total de vies perdues
    powerUpsCollected: 0,   // Total de power-ups collectés
    perfectLevels: 0,       // Niveaux parfaits réalisés
    currentCombo: 0,        // Combo actuel
    bestCombo: 0,           // Meilleur combo
    playTime: 0,            // Temps de jeu total
    gamesPlayed: 0          // Nombre de parties
}
```

---

## 🎨 Interface Utilisateur

### Affichage en Jeu

1. **Badge d'Échelon** (haut gauche)
   - Icône + Nom de l'échelon
   - Couleur selon le rang
   - Tooltip avec le message

2. **Compteur de Blasons** (UI principale)
   - "🏆 Blasons: X/10"
   - Cliquable pour voir la collection

### Écrans Spéciaux

1. **Écran de Promotion**
   - Animation de l'icône (pulse)
   - Nom et message du nouvel échelon
   - Score actuel
   - Bouton "Continuer"

2. **Écran de Déblocage de Blason**
   - Animation de l'icône (bounce)
   - Nom et description du blason
   - Verset biblique associé
   - Progression (X/10)
   - Bouton "Continuer"

3. **Collection de Blasons**
   - Écran scrollable
   - Tous les blasons (débloqués + verrouillés)
   - Affichage de l'échelon actuel
   - Détails pour chaque blason :
     - Débloqué : Icône couleur + verset
     - Verrouillé : Icône grisée + condition
   - Bouton "Fermer"

---

## 🎯 Stratégies de Déblocage

### Pour Monter en Grade Rapidement

1. **Maintenir les combos** (multiplicateur x1.5)
2. **Jouer vite** pour les bonus de vitesse
3. **Compléter les niveaux parfaits** (+2000 points)
4. **Collecter tous les power-ups** (+200 chacun)
5. **Éviter la pluie** (+50 par goutte évitée)

### Pour Débloquer Tous les Blasons

1. **Blasons de niveau** (1,2,3,5,7,9) : Terminer les niveaux correspondants
2. **Foi Inébranlable** : Niveau 7 sans perdre de vie (difficile !)
3. **Lumière Éternelle** : 100 nuages sans mourir (concentration)
4. **Persévérance Divine** : 500 nuages totaux (jouer longtemps)
5. **Maître Spirituel** : Victoire finale à 991 nuages

---

## 🔧 Configuration et Personnalisation

### Modifier les Seuils d'Échelon

Éditer `js/scoring.js` :

```javascript
COURAGE_RANKS[0].maxScore = 10000; // Au lieu de 5000
```

### Ajouter un Nouveau Blason

```javascript
KNOWLEDGE_BADGES.push({
    id: 11,
    name: "Nouveau Blason",
    icon: "🎯",
    description: "Description...",
    requirement: "Condition...",
    verse: "Verset...",
    unlocked: false
});
```

### Ajuster les Points

```javascript
SCORING.cloudDestroyed = 150; // Au lieu de 100
SCORING.comboMultiplier = 2.0; // Au lieu de 1.5
```

---

## 📊 Exemples de Progression

### Partie Typique

```
Départ : 🐣 Colombe Naissante (0 pts)
Niveau 1-3 : 3,000 pts
Niveau 4 : 🕊️ Aile Timide (5,500 pts) + 🔓 Liberté Spirituelle
Niveau 6 : 💪 Force Intérieure débloqué
Niveau 7 : 🕊️ Foi Inébranlable (si parfait)
Niveau 10 : 🌟 Messager d'Espoir (18,000 pts) + 🦋 Grâce Transformatrice
...
Victoire : 🌟 Maître Spirituel débloqué (991 nuages)
```

### Joueur Expert

```
Score total : 250,000 pts
Échelon : ⭐ Archange de Lumière
Blasons : 10/10 (100%)
Meilleur combo : 47 nuages
Niveaux parfaits : 8
```

---

**Le système de récompenses enrichit l'expérience spirituelle avec des objectifs motivants !** 🏆✨🕊️

Pour plus d'informations :
- `LEVELS-MODULAR.md` - Système de niveaux
- `VERSES-MODULE.md` - Versets bibliques
- `README.md` - Documentation générale
