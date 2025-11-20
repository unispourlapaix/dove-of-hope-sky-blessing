# 💀 Boss: Grim Reaper (La Faucheuse)

## Vue d'ensemble

Le **Grim Reaper** est un boss avec une profonde philosophie chrétienne bienveillante sur la **victoire de la vie éternelle** sur la mort. Il représente la peur de la mort, mais le joueur apprend que par la foi chrétienne, cette peur est vaincue.

## Visuel

- **Crâne blanc osseux** (#f0e6d2) avec bordures marron (#8b7355)
- **Yeux noirs profonds** (cavités vides) avec lueur violette au fond (#8b00ff) symbolisant l'âme tourmentée
- **Mâchoire mobile** qui s'ouvre et se ferme (animation de 0 à 8 pixels)
- **Dents blanches pointues** (7 dents visibles)
- **Fissures** sur le crâne (marques du temps)
- **Aura spectrale violette** (effet fantomatique)

### Quand les yeux sont touchés (points faibles)
- Les cavités se remplissent de **lumière dorée** (#ffd700) symbolisant la lumière divine qui dissipe les ténèbres

## Projectiles

### 1. Ossements (Bones)
- **Forme**: Os blancs cassés (#e8dcc0) avec extrémités rondes
- **Fréquence**: Toutes les 1,5 secondes
- **Quantité par vague**:
  - Phase 1: 2 ossements
  - Phase 2: 3 ossements
  - Phase 3: 4 ossements
- **Mouvement**: Tombent en rotation avec légère dérive horizontale

### 2. Cercueils (Coffins)
- **Forme**: Hexagone marron foncé (#3d2817) avec **croix dorée** au centre
- **Fréquence**: Tous les 3 secondes
- **Symbolisme**: La croix sur le cercueil représente la **résurrection** et l'espérance chrétienne
- **Mouvement**: Tombent lentement en rotation

## Phases de Combat

### Phase 1 (100% - 61% HP)
**Message philosophique**:
> 🕊️ "Ô mort, où est ta victoire ? Ô mort, où est ton aiguillon ?" (1 Corinthiens 15:55)
> 
> La peur de la mort n'a plus de pouvoir sur ceux qui croient en la vie éternelle !

**Mécanique**: 
- Attaques de base
- 2 ossements par vague
- Flottement spectral lent

### Phase 2 (60% - 31% HP)
**Message philosophique**:
> ✝️ "Jésus lui dit : Je suis la résurrection et la vie. Celui qui croit en moi vivra, quand même il serait mort." (Jean 11:25)
> 
> La vie triomphe toujours sur les ténèbres !

**Mécanique**:
- 3 ossements par vague
- Cercueils plus fréquents
- Mouvement plus rapide

### Phase 3 (30% - 0% HP)
**Message philosophique**:
> 🌟 "Car Dieu ne nous a pas donné un esprit de timidité, mais un esprit de force, d'amour et de sagesse." (2 Timothée 1:7)
> 
> La mort n'est qu'un passage vers la vraie Vie !

**Mécanique**:
- 4 ossements par vague
- Attaques intensifiées
- Mouvement erratique

## Statistiques

- **PV maximum**: 1200
- **Vitesse horizontale**: 0.8 px/frame
- **Amplitude de flottement**: 20 pixels
- **Dimensions crâne**: 30×35 pixels
- **Cooldown ossements**: 1500ms
- **Cooldown cercueils**: 3000ms

## Points Faibles (Weak Points)

### Yeux (×2)
- **Position**: x: ±8, y: -5 (par rapport au centre du crâne)
- **Rayon**: 5 pixels
- **Multiplicateur de dégâts**: **×2.5** (symbolise "ouvrir les yeux sur la vérité")
- **Effet visuel**: Quand touchés, se remplissent de lumière dorée divine

## Récompenses

Après la défaite du boss:
- **+5000 points**
- **+2 cœurs** (vies)
- **+1 arc-en-ciel** (bouclier)
- **+3 étoiles**

## Message de Victoire

```
🙏 VICTOIRE SUR LA MORT !

"Il n'y a donc maintenant aucune condamnation pour ceux qui sont en Jésus-Christ." (Romains 8:1)

Tu as vaincu la peur ! La vie éternelle t'appartient par la grâce de Dieu.
```

## Philosophie & Sagesse

### Message Pro-Vie
> "La mort n'est pas une fin, mais une transformation. Par le Christ, nous passons de la vie terrestre à la vie éternelle. **Chaque vie est précieuse et sacrée, du premier souffle au dernier.** La foi chrétienne nous enseigne que la mort a été vaincue à la Croix, et que l'espérance de la résurrection illumine notre chemin."

### Thèmes abordés
1. **Victoire sur la mort** par le Christ (1 Corinthiens 15:55)
2. **Résurrection et vie éternelle** (Jean 11:25)
3. **Courage face à la peur** (2 Timothée 1:7)
4. **Liberté en Christ** (Romains 8:1)
5. **Sacralité de la vie** (pro-vie, du premier au dernier souffle)

## Comment déclencher le boss

Dans `dove-of-hope-sky-blessing.html`, ajouter au niveau souhaité (par exemple niveau 4):

```javascript
// Boss Grim Reaper au niveau 4 (après 90% des nuages)
if(level === 4 && cloudsInLevel >= bossSpawnThreshold) {
  levelBeforeBoss = level;
  bossShootCount = 0;
  bossManager.spawnBoss('grim_reaper', c.width, c.height);
  
  // Afficher message d'introduction
  const intro = t('bosses.grim_reaper.intro');
  showPopup(intro, '💀', 'warning');
  
  console.log('💀 BOSS: Grim Reaper spawned!');
}
```

## Gestion des messages de phase

Dans la fonction `update()` du jeu:

```javascript
if(bossManager.isBossActive() && bossManager.bossType === 'grim_reaper') {
  const phaseMessage = bossManager.currentBoss.getCurrentPhaseMessage();
  
  if(phaseMessage) {
    const msg = t(`bosses.grim_reaper.phase_${phaseMessage}`);
    showPopup(msg, '✝️', 'info');
  }
}
```

## Message de défaite du boss

```javascript
if(bossManager.isBossDefeated() && bossManager.bossType === 'grim_reaper') {
  const victoryMsg = t('bosses.grim_reaper.defeated');
  const wisdom = t('bosses.grim_reaper.wisdom');
  
  showPopup(victoryMsg + '\n\n💡 ' + wisdom, '🙏', 'success');
  
  // Donner récompenses
  const rewards = bossManager.getBossRewards();
  // ... appliquer rewards
}
```

## Traductions disponibles

- ✅ **Français** (`fr.js`)
- ✅ **Anglais** (`en.js`)
- ⏳ **Autres langues** (à venir: es, pt, de, it, ru, zh, ar, hi, ja, ko, sw, pl)

## Intégration technique

### Fichiers modifiés
1. `js/bosses/boss-system.js` - Classe `GrimReaperBoss` ajoutée
2. `js/translations/fr.js` - Section `bosses.grim_reaper` ajoutée
3. `js/translations/en.js` - Section `bosses.grim_reaper` ajoutée

### Méthodes disponibles
- `GrimReaperBoss.update(dt, playerX, playerY)` - Mise à jour du boss
- `GrimReaperBoss.draw(ctx)` - Rendu visuel
- `GrimReaperBoss.takeDamage(damage, hitX, hitY)` - Gestion dégâts
- `GrimReaperBoss.checkBoneCollision(...)` - Collision ossements
- `GrimReaperBoss.checkCoffinCollision(...)` - Collision cercueils
- `GrimReaperBoss.getCurrentPhaseMessage()` - Récupère message de phase

## Notes de développement

- Le boss utilise un système de **phases automatiques** basé sur le pourcentage de HP
- Les messages philosophiques ne s'affichent **qu'une seule fois par phase**
- Les **yeux sont les points faibles** (×2.5 dégâts) et changent visuellement quand touchés
- L'animation de la **mâchoire mobile** est synchronisée avec le flottement spectral
- Les **cercueils ont une croix dorée** qui symbolise l'espérance chrétienne de la résurrection

## Easter Eggs

- Les ossements ont une **physique réaliste** (gravité + rotation)
- La **lueur violette** dans les yeux représente l'âme tourmentée
- Quand les yeux sont touchés, la **lumière divine** (dorée) remplace l'obscurité
- Le boss **flotte** (pas de pieds) pour effet spectral
- Les **fissures sur le crâne** symbolisent les marques du temps et de la mortalité

---

**Prochaines étapes**: Ajouter 3 autres boss (Araignée géante, Lézard vilain, Grenouille toxique) avec leurs propres philosophies chrétiennes.
