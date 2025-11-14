# 🎁 Niveaux Bonus

## 📋 Vue d'Ensemble

Les **niveaux bonus** sont des niveaux spéciaux qui apparaissent après certains niveaux principaux. Au lieu de combattre des nuages, le joueur collecte des objets saints qui tombent du ciel pour gagner des points bonus !

---

## 🎯 Déclenchement

Les niveaux bonus se déclenchent **automatiquement** après avoir complété :

- ✅ **Niveau 3** (Chemin de Lumière) → Premier niveau bonus
- ✅ **Niveau 7** (Après la Pluie) → Deuxième niveau bonus
- ✅ **Niveau 10** (Nouvelle Créature) → Troisième niveau bonus
- ✅ **Niveau 13** (Lumière Éternelle) → Quatrième niveau bonus

**Total : 4 niveaux bonus** dans tout le jeu !

---

## 🎁 Objets à Collecter

### 1. ❤️ Cœur
- **Points :** 500
- **Couleur :** Rouge (#e74c3c)
- **Symbolisme :** L'amour divin

### 2. ⭐ Étoile
- **Points :** 300
- **Couleur :** Jaune doré (#f1c40f)
- **Symbolisme :** L'espoir et la lumière

### 3. ✝️ Croix
- **Points :** 1000 (le plus précieux !)
- **Couleur :** Blanc (#ecf0f1)
- **Symbolisme :** Le sacrifice et la rédemption

### 4. 💰 Pièce
- **Points :** 200
- **Couleur :** Orange (#f39c12)
- **Symbolisme :** Les bénédictions matérielles

---

## 🎮 Gameplay

### Mécaniques

**Objectif :** Collecter **20 objets** tombant du ciel

**Contrôles :**
- Même que le jeu normal (déplacement au toucher/souris)
- **PAS de tir** dans les niveaux bonus
- Uniquement déplacement et collection

**Caractéristiques :**
- Les objets tombent aléatoirement
- Vitesse de chute : 2-3.5 pixels/frame
- Rotation des objets pour effet visuel
- Pas d'ennemis, pas de pluie, pas de danger
- Le niveau ne se termine qu'après avoir collecté 20 objets

### Spawn Rate

```javascript
if(Math.random()<0.03) // 3% de chance par frame
  bonusItems.push(bonusItem());
```

Environ **1-2 objets par seconde** apparaissent.

---

## 💯 Système de Points

### Points par Objet

| Objet | Points | Rareté |
|-------|--------|--------|
| ✝️ Croix | 1000 | Rare |
| ❤️ Cœur | 500 | Commun |
| ⭐ Étoile | 300 | Commun |
| 💰 Pièce | 200 | Très commun |

### Score Bonus Total

**Bonus de complétion :** `bonusItemsCollected × 100`

Exemple avec 20 objets collectés :
```
20 × 100 = +2000 points bonus
```

**Score théorique :**
- Minimum : 20 × 200 = 4,000 pts (que des pièces)
- Maximum : 20 × 1000 = 20,000 pts (que des croix)
- Moyenne : ~8,000-10,000 pts

---

## 🎨 Interface

### Écran de Démarrage

Apparaît automatiquement avec :
- Titre : **🎁 NIVEAU BONUS !**
- Description des objets et leurs valeurs
- Objectif : 20 objets à collecter
- Bouton **✨ Commencer !**
- Fond jaune doré avec animation

### Pendant le Niveau

Affichage en bas de l'écran :
```
🎁 BONUS - 15/20 objets
```

Progression en temps réel.

### Écran de Fin

Apparaît après avoir collecté 20 objets avec :
- Titre : **🎉 Bonus Terminé !**
- Trophée : 🏆
- Objets collectés : X/20
- Score bonus gagné
- Bouton **✨ Continuer**
- Fond vert avec animation

---

## ✨ Effets Visuels

### Objets

- **Rotation continue** pour effet dynamique
- **Glow/Shadow** de la couleur de l'objet
- **Taille :** 35×35 pixels
- **Police :** 30px pour l'emoji

### Collection

Quand un objet est collecté :
- **10 particules colorées** explosent
- Couleur des particules = couleur de l'objet
- **Message central** : `+X pts [emoji]`
- Le score s'incrémente immédiatement

### Ambiance

- Soleil en mode **happy** (😊)
- Pas de nuages gris
- Atmosphère joyeuse et relaxante
- Fond bleu ciel apaisant

---

## 🔧 Implémentation Technique

### Variables Globales

```javascript
let isBonusLevel = false;          // Mode bonus actif ?
let bonusItemsCollected = 0;       // Objets collectés
let bonusItemsTarget = 20;         // Objectif
let bonusItems = [];               // Array des objets actifs
```

### Fonction de Création

```javascript
function bonusItem() {
  const types = [
    {name:'heart', icon:'❤️', points:500, color:'#e74c3c'},
    {name:'star', icon:'⭐', points:300, color:'#f1c40f'},
    {name:'cross', icon:'✝️', points:1000, color:'#ecf0f1'},
    {name:'coin', icon:'💰', points:200, color:'#f39c12'}
  ];
  const type = types[Math.floor(Math.random()*types.length)];
  return {
    x: Math.random()*(c.width-40),
    y: -40,
    w: 35, h: 35,
    s: 2+Math.random()*1.5,
    type: type.name,
    icon: type.icon,
    points: type.points,
    color: type.color,
    rotation: 0,
    rotSpeed: (Math.random()-0.5)*0.1
  };
}
```

### Rendu

```javascript
function drawBonusItem(item) {
  ctx.save();
  ctx.translate(item.x+item.w/2, item.y+item.h/2);
  ctx.rotate(item.rotation);
  ctx.shadowBlur = 15;
  ctx.shadowColor = item.color;
  ctx.font = '30px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(item.icon, 0, 0);
  ctx.shadowBlur = 0;
  ctx.restore();
}
```

### Déclenchement

```javascript
// Dans completeLevel()
if([3,7,10,13].includes(currentLevelIndex)) {
  setTimeout(() => startBonusLevel(), 1000);
} else {
  completeLevel();
}
```

---

## 🎯 Stratégies

### Pour Maximiser le Score

1. **Prioriser les croix** (✝️) : 1000 points
2. **Ne pas manquer les cœurs** (❤️) : 500 points
3. **Se positionner au centre** pour avoir accès aux deux côtés
4. **Bouger en anticipant** les trajectoires

### Astuces

- Les objets tombent en ligne droite, facile à prévoir
- Pas de limite de temps, on peut être patient
- Pas de pénalité pour les objets manqués
- Se concentrer sur la collection sans stress

---

## 📊 Statistiques

### Données Sauvegardées

Les niveaux bonus contribuent aux stats globales :
- ✅ Score total
- ✅ Temps de jeu
- ✅ Parties jouées
- ❌ PAS de nuages détruits (mode bonus)
- ❌ PAS de tirs (désactivés)

### Impact sur la Progression

- Le score bonus s'ajoute au score normal
- Contribue au meilleur score
- Aide à débloquer les échelons de courage
- Ne compte pas dans `cloudsCleared`

---

## 🎨 Personnalisation

### Modifier l'Objectif

```javascript
bonusItemsTarget = 30; // Au lieu de 20
```

### Ajouter un Objet

```javascript
const types = [
  // ... objets existants
  {name:'dove', icon:'🕊️', points:1500, color:'#ecf0f1'}
];
```

### Modifier les Points

```javascript
{name:'cross', icon:'✝️', points:2000, color:'#ecf0f1'} // Au lieu de 1000
```

### Changer le Spawn Rate

```javascript
if(Math.random()<0.05) // 5% au lieu de 3% (plus d'objets)
```

### Modifier les Niveaux Déclencheurs

```javascript
if([2,5,8,12].includes(currentLevelIndex)) // Autres niveaux
```

---

## 🐛 Debug

### Forcer un Niveau Bonus

Dans la console :
```javascript
startBonusLevel();
```

### Terminer Instantanément

```javascript
bonusItemsCollected = bonusItemsTarget;
endBonusLevel();
```

### Voir les Objets Actifs

```javascript
console.log(bonusItems);
console.log('Collectés:', bonusItemsCollected);
```

---

## 🎯 Gameplay Recommandé

### Difficulté

- **Très facile** : Détente et récompense
- **Aucun danger** : Pas de game over possible
- **Temps illimité** : Pas de pression
- **Objectif clair** : 20 objets

### Durée Moyenne

Environ **30-60 secondes** par niveau bonus :
- Spawn rate : ~2 objets/seconde
- 20 objets à collecter
- Temps de déplacement

### Récompense

- **Moral boost** : Pause dans le combat
- **Score boost** : 4,000-20,000 points bonus
- **Progression** : Aide à atteindre les rangs supérieurs
- **Fun** : Changement de rythme agréable

---

**Les niveaux bonus offrent une pause rafraîchissante et lucrative dans l'aventure !** 🎁✨🎉

Pour plus d'informations :
- `LEVELS-MODULAR.md` - Système de niveaux principaux
- `SCORING-SYSTEM.md` - Système de scoring et achievements
- `README.md` - Documentation générale
