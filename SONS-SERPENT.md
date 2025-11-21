# Sons de Serpent à Sonnette - Guide d'Intégration

## 🎵 Fichiers Audio Nécessaires

Le jeu utilise maintenant des sons de serpent à sonnette réels. Vous devez placer 3 fichiers MP3 dans le dossier `public/sounds/` :

### 1. **rattlesnake-hiss.mp3** - Sifflement
- **Son recherché** : Serpent à sonnette qui siffle/gronde (rattle sound)
- **Durée idéale** : 0.7 - 1.5 secondes
- **Volume** : Réglé à 0.3 (30%)
- **Utilisation** : Changement de direction du boss serpent

### 2. **snake-movement.mp3** - Mouvement
- **Son recherché** : Serpent qui glisse/rampe sur surface
- **Durée idéale** : 0.2 - 0.5 secondes
- **Volume** : Réglé à 0.15 (15%) - discret
- **Utilisation** : Appelé toutes les 0.5s pendant le mouvement ondulant

### 3. **snake-attack.mp3** - Attaque
- **Son recherché** : Serpent qui crache/attaque avec sifflement agressif
- **Durée idéale** : 0.3 - 0.6 secondes
- **Volume** : Réglé à 0.25 (25%)
- **Utilisation** : Lorsque le boss lance des petites couleuvres

---

## 📦 Sources Recommandées (Libres de Droit)

### **Freesound.org** ⭐ Recommandé
- 🔗 https://freesound.org/
- Rechercher : `rattlesnake`, `snake hiss`, `snake rattle`
- Filtres : Licence CC0 ou CC-BY (attribution libre)
- Qualité professionnelle, nombreux sons de serpents

### **ZapSplat.com**
- 🔗 https://www.zapsplat.com/
- Rechercher : `rattlesnake`, `snake`
- Gratuit avec attribution (créer un compte gratuit)

### **Mixkit.co**
- 🔗 https://mixkit.co/free-sound-effects/
- Section : Animals > Reptiles
- Licence commerciale libre

### **Pixabay Sound Effects**
- 🔗 https://pixabay.com/sound-effects/
- Rechercher : `snake`, `rattle`
- CC0 - Domaine public

---

## 🛠️ Instructions d'Installation

### Étape 1 : Télécharger les sons
1. Allez sur **Freesound.org** (ou autre source)
2. Recherchez `rattlesnake rattle` pour le sifflement
3. Recherchez `snake slide` ou `snake movement` pour le mouvement
4. Recherchez `snake strike` ou `snake attack` pour l'attaque
5. Téléchargez en format **MP3** (ou WAV que vous convertirez)

### Étape 2 : Convertir en MP3 (si nécessaire)
Si vous téléchargez en WAV, convertissez en MP3 :
```powershell
# Avec FFmpeg installé :
ffmpeg -i input.wav -codec:a libmp3lame -b:a 80k output.mp3
```

### Étape 3 : Renommer les fichiers
```
mon-son-serpent-1.mp3  →  rattlesnake-hiss.mp3
mon-son-serpent-2.mp3  →  snake-movement.mp3
mon-son-serpent-3.mp3  →  snake-attack.mp3
```

### Étape 4 : Placer dans le dossier
```
dove-of-hope-sky-blessing/
  public/
    sounds/
      rattlesnake-hiss.mp3    ← Son principal (sifflement)
      snake-movement.mp3      ← Son de glissement
      snake-attack.mp3        ← Son d'attaque
```

---

## 🎮 Test dans le Jeu

1. Lancez le serveur de développement :
```powershell
.\dev.bat
```

2. Le boss serpent apparaît au **niveau 1** (mode test)

3. Écoutez les sons :
   - **Hiss** : Aux changements de direction (bords gauche/droite)
   - **Movement** : Toutes les 0.5 secondes (mouvement continu)
   - **Attack** : Quand il lance des petites couleuvres

---

## 🔧 Ajustements Possibles

Si les sons ne correspondent pas parfaitement, vous pouvez ajuster dans `dove-of-hope-sky-blessing.html` :

```javascript
// Ligne ~1981-1988
case 'snake_hiss':
  playMP3Sound('public/sounds/rattlesnake-hiss.mp3', 0.3); // ← Ajuster le volume (0.1 à 1.0)
  break;

case 'snake_flip':
  playMP3Sound('public/sounds/snake-movement.mp3', 0.15); // ← Plus fort = 0.3
  break;

case 'snake_spit':
  playMP3Sound('public/sounds/snake-attack.mp3', 0.25); // ← Plus agressif = 0.5
  break;
```

---

## 📝 Exemples de Sons Recommandés

### Pour rattlesnake-hiss.mp3
- **Freesound #458277** : "Western Diamondback Rattlesnake Rattle"
- **Freesound #394426** : "Rattlesnake Warning Sound"
- Son caractéristique : Grondement vibrant avec des harmoniques multiples

### Pour snake-movement.mp3
- **Freesound #369232** : "Snake Sliding on Dry Leaves"
- **Freesound #422108** : "Snake Slithering"
- Son caractéristique : Frottement doux, glissement continu

### Pour snake-attack.mp3
- **Freesound #485632** : "Snake Strike Hiss"
- **Freesound #391847** : "Cobra Attack Sound"
- Son caractéristique : Sifflement court et agressif, parfois avec "clac" de mâchoires

---

## ⚠️ Licences et Attribution

Si vous utilisez des sons CC-BY (avec attribution requise), ajoutez dans `README.md` :

```markdown
### Sons Utilisés
- Serpent à sonnette : [Nom de l'auteur] sur Freesound.org (CC-BY 4.0)
- Lien : [URL du son]
```

Pour CC0 (domaine public), aucune attribution nécessaire mais recommandée.

---

## 🎯 Résumé Rapide

1. **Téléchargez** 3 sons de serpent (hiss, movement, attack)
2. **Renommez** selon les noms ci-dessus
3. **Placez** dans `public/sounds/`
4. **Testez** avec `.\dev.bat` et allez au niveau 1
5. **Ajustez** les volumes si nécessaire

Le boss serpent sonnera maintenant comme un vrai serpent à sonnette terrifiant ! 🐍🎵
