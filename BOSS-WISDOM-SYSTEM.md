# 📚 Système de Collection des Sagesses de Boss

## Vue d'ensemble

Le système de collection des sagesses de boss permet aux joueurs de **débloquer des enseignements philosophiques profonds** en vainquant les boss du jeu. Chaque boss représente une lutte spirituelle/psychologique avec un message chrétien de victoire.

## Fonctionnalités

### 🎯 Mécaniques de déverrouillage

1. **Tracking automatique** : Quand un boss est vaincu, sa sagesse est automatiquement débloquée
2. **Sauvegarde persistante** : Les sagesses débloquées sont sauvegardées dans `localStorage`
3. **Affichage dans le menu Trésor** : Section dédiée avec icônes verrouillées/déverrouillées

### 🔒 États des icônes

#### Boss Non Vaincu
- Icône grisée et assombrie (`grayscale(100%) brightness(0.5)`)
- Cadenas 🔒 en haut à droite
- Taille réduite (20px)
- Opacité 0.4
- Non cliquable

#### Boss Vaincu
- Icône colorée en pleine taille (36px)
- Bordure dorée (`rgba(241,196,15,0.6)`)
- Effet hover avec transformation scale(1.1)
- Opacité 1
- Cliquable pour voir la sagesse

## Boss Disponibles

| Emoji | ID | Nom | Thème Principal |
|-------|-----|-----|----------------|
| 🕷️ | `spider` | L'Araignée | Attaques sournoises de l'ennemi |
| 🐍 | `flying_snake` | Le Serpent Volant | Mensonges et tromperie |
| 🐔 | `crazy_chicken` | Le Poulet Fou | Chaos et distractions |
| 💀 | `grim_reaper` | La Faucheuse | Peur de la mort, vie éternelle |
| 🧱 | `wall` | La Muraille | Peurs qui enchaînent, liberté en Christ |
| ☁️ | `dark_cloud` | Le Nuage Sombre | Dépression, espoir dans la tempête |
| 🐦‍⬛ | `black_raven` | Le Corbeau | Mensonges d'identité, vérité en Christ |

## Structure des Données

### gameData.bossesDefeated

```javascript
bossesDefeated: {
  spider: false,
  flying_snake: false,
  crazy_chicken: false,
  grim_reaper: false,
  wall: false,
  dark_cloud: false,
  black_raven: false
}
```

### Traductions Requises

Chaque boss nécessite ces clés de traduction :

```javascript
bosses: {
  [boss_id]: {
    name: 'Nom du Boss avec Emoji',
    intro: 'Message d\'introduction avant combat',
    phase_1: 'Message phase 1 avec verset biblique',
    phase_2: 'Message phase 2 avec verset biblique',
    phase_3: 'Message phase 3 avec verset biblique',
    defeated: 'Message de victoire',
    wisdom: 'Enseignement philosophique profond' // ⭐ AFFICHÉ DANS LE TRÉSOR
  }
}
```

## Fonctions JavaScript

### `generateBossWisdomIcons()`
Génère la grille d'icônes de boss (4 colonnes) avec états verrouillé/déverrouillé.

**Retour** : HTML string avec 7 icônes de boss

### `getDefeatedBossesCount()`
Compte le nombre de boss vaincus.

**Retour** : Number (0-7)

### `showBossWisdom(bossId)`
Affiche la sagesse d'un boss dans un popup modal.

**Paramètres** :
- `bossId` : string - ID du boss ('spider', 'grim_reaper', etc.)

**Composants du Modal** :
- Emoji du boss (48px)
- Nom du boss
- Section "Philosophie & Enseignement" (background doré)
- Section "Message de Victoire" (background vert)
- Bouton "Fermer"

### `getBossEmoji(bossId)`
Retourne l'emoji correspondant à un boss.

**Mapping** :
```javascript
{
  spider: '🕷️',
  flying_snake: '🐍',
  crazy_chicken: '🐔',
  grim_reaper: '💀',
  wall: '🧱',
  dark_cloud: '☁️',
  black_raven: '🐦‍⬛'
}
```

## Déverrouillage Automatique

### Localisation du Code
`dove-of-hope-sky-blessing.html` ligne ~2926

### Logique
```javascript
if(bossManager.isBossDefeated() && !bossDefeatRewardsGiven) {
  // Débloquer la sagesse
  if(bossManager.bossType && gameData.bossesDefeated) {
    gameData.bossesDefeated[bossManager.bossType] = true;
    saveGameData();
    console.log(`📚 Sagesse débloquée: ${bossManager.bossType}`);
  }
  
  // ... reste du code de récompenses
}
```

## Interface Utilisateur

### Emplacement dans le Menu Trésor
Situé après la section "Chapitres Conquis" et avant la barre de progression du Mode Infini.

### Design
- **Background** : Dégradé violet (`rgba(155,89,182,0.2)` → `rgba(142,68,173,0.2)`)
- **Bordure** : 2px solid `rgba(155,89,182,0.3)`
- **Titre** : 📚 Sagesses des Boss
- **Sous-titre** : "Vaincre les boss pour débloquer leurs enseignements profonds"
- **Grille** : 4 colonnes avec gap de 12px
- **Compteur** : "X/7 sagesses débloquées"

### Modal de Sagesse
- **z-index** : 600 (au-dessus du menu Trésor)
- **Background** : Dégradé sombre (`rgba(52,73,94,0.98)`)
- **Bordure** : 3px solid `rgba(241,196,15,0.5)` (dorée)
- **Shadow** : `0 10px 50px rgba(0,0,0,0.7), 0 0 30px rgba(241,196,15,0.3)`
- **Max-width** : 500px
- **Max-height** : 85vh
- **Overflow** : scroll

## Traductions

### Clés Ajoutées

#### Français (fr.js)
```javascript
boss_wisdom_title: 'Sagesses des Boss'
boss_wisdom_subtitle: 'Vaincre les boss pour débloquer leurs enseignements profonds'
boss_wisdom_collected: 'sagesses débloquées'
boss_wisdom_locked: 'Cette sagesse est encore verrouillée. Vaincre ce boss pour la débloquer !'
boss_wisdom_philosophy: 'Philosophie & Enseignement'
boss_wisdom_victory: 'Message de Victoire'
boss_wisdom_close: 'Fermer'
```

#### Anglais (en.js)
```javascript
boss_wisdom_title: 'Boss Wisdom'
boss_wisdom_subtitle: 'Defeat bosses to unlock their profound teachings'
boss_wisdom_collected: 'wisdom unlocked'
boss_wisdom_locked: 'This wisdom is still locked. Defeat this boss to unlock it!'
boss_wisdom_philosophy: 'Philosophy & Teaching'
boss_wisdom_victory: 'Victory Message'
boss_wisdom_close: 'Close'
```

## Exemples de Sagesses

### 💀 Grim Reaper (La Faucheuse)
**Wisdom FR** :
> La mort = transformation. Chaque vie précieuse. Défaite à la Croix. Espérance de résurrection.

**Wisdom EN** :
> Death = transformation. Every life precious. Defeated at the Cross. Hope of resurrection.

### 🧱 Wall (La Muraille)
**Wisdom FR** :
> Peurs = chaînes invisibles. "Esprit de force, amour, sagesse". Foi brise les mensonges.

**Wisdom EN** :
> Fears = invisible chains. "Spirit of power, love, sound mind". Faith breaks lies.

### ☁️ Dark Cloud (Le Nuage Sombre)
**Wisdom FR** :
> Dépressions/pertes = tempêtes. "Abri du Très-Haut". Protéger espoir/foi/amour. Dieu ne nous abandonne pas. Arc-en-ciel après l'orage.

**Wisdom EN** :
> Depressions/losses = storms. "Shelter of the Most High". Protect hope/faith/love. God never abandons. Rainbow after storm.

### 🐦‍⬛ Black Raven (Le Corbeau)
**Wisdom FR** :
> Corbeau = accusations/fausses croyances. Flèches empoisonnées. VÉRITÉ: créés à image de Dieu, rachetés, adoptés. Valeur ≠ apparence/richesse/erreurs = amour inconditionnel de Dieu. Précieux, aimés, choisis, royaux !

**Wisdom EN** :
> Raven = accusations/false beliefs. Poisoned arrows. TRUTH: created in God's image, redeemed, adopted. Worth ≠ appearance/wealth/mistakes = God's unconditional love. Precious, loved, chosen, royal!

## TODO (Futures Améliorations)

- [ ] Ajouter traductions dans les 12 autres langues (es, pt, de, it, ru, zh, ar, hi, ja, ko, sw, pl)
- [ ] Animation de déverrouillage (effet de lumière dorée)
- [ ] Son de déverrouillage spécial
- [ ] Badge "Collectionneur de Sagesses" (7/7 boss vaincus)
- [ ] Partage social des sagesses débloquées
- [ ] Mode galerie pour revoir toutes les sagesses

## Notes Techniques

### Compatibilité
- Sauvegarde dans `localStorage` sous clé `doveGameSave`
- Compatible avec tous les navigateurs modernes
- Responsive (adapté mobile avec max-width 90%)

### Performance
- Génération d'icônes légère (7 éléments)
- Modal chargé à la demande (pas de pré-render)
- Pas d'impact sur les performances du jeu

### Sécurité
- Pas de validation côté serveur nécessaire
- Données locales seulement
- Pas de risque de triche critique (jeu solo)

## Logs Console

```javascript
// Au déverrouillage
📚 Sagesse débloquée: grim_reaper

// Si tentative d'accès verrouillé
🔒 Cette sagesse est encore verrouillée. Vaincre ce boss pour la débloquer !
```

---

**Créé le** : 20 novembre 2025  
**Version** : 1.0  
**Auteur** : Emmanuel Payet  
**Système** : Dove of Hope - Sky Blessing
