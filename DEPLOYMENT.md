# 🚀 Guide de Déploiement - Dove of Hope

Ce guide explique comment déployer **Dove of Hope : Sky Blessing** sur différentes plateformes.

---

## 📦 Option 1 : Hébergement Web Simple

### Plateformes Recommandées (Gratuites)

#### GitHub Pages
```bash
# 1. Créer un repo GitHub
# 2. Pusher tous les fichiers
# 3. Activer GitHub Pages dans Settings
# URL: https://votre-username.github.io/dove-of-hope-sky-blessing/
```

**Avantages** :
- ✅ Gratuit
- ✅ HTTPS automatique
- ✅ Déploiement automatique
- ✅ Domaine personnalisé possible

**Configuration** :
- Source: `main` branch
- Folder: `/` (root)
- Point d'entrée: `index.html`

#### Netlify
```bash
# 1. Créer compte Netlify
# 2. Drag & drop le dossier complet
# 3. Déploiement instantané
# URL: https://votre-projet.netlify.app
```

**Avantages** :
- ✅ Gratuit
- ✅ HTTPS automatique
- ✅ Déploiement continu
- ✅ Formulaires et fonctions serverless

**Fichier de configuration** (optionnel) :
```toml
# netlify.toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Vercel
```bash
# 1. Créer compte Vercel
# 2. Importer le repo GitHub
# 3. Déploiement automatique
# URL: https://votre-projet.vercel.app
```

**Avantages** :
- ✅ Gratuit
- ✅ HTTPS automatique
- ✅ CDN global
- ✅ Analytics inclus

#### Cloudflare Pages
```bash
# 1. Créer compte Cloudflare
# 2. Pages > Create a project
# 3. Connecter GitHub repo
# URL: https://votre-projet.pages.dev
```

**Avantages** :
- ✅ Gratuit
- ✅ CDN ultra-rapide
- ✅ Unlimited bandwidth
- ✅ Analytics détaillés

---

## 📱 Option 2 : Application Mobile Native

### Utiliser Apache Cordova

#### Installation
```bash
npm install -g cordova
cordova create DoveOfHope com.votrecompagnie.dove DoveOfHope
cd DoveOfHope
```

#### Copier les fichiers
```bash
# Copier tous les fichiers du projet dans www/
cp -r ../dove-of-hope-sky-blessing/* www/
```

#### Ajouter les plateformes
```bash
cordova platform add android
cordova platform add ios
```

#### Configurer config.xml
```xml
<widget id="com.votrecompagnie.dove" version="1.0.0">
    <name>Dove of Hope</name>
    <description>Sky Blessing - A game of hope</description>
    <author email="you@example.com">Your Name</author>
    
    <preference name="Orientation" value="portrait" />
    <preference name="Fullscreen" value="true" />
    
    <icon src="icon.png" />
</widget>
```

#### Build
```bash
# Android
cordova build android

# iOS (nécessite Mac)
cordova build ios
```

### Utiliser Capacitor (Recommandé)

#### Installation
```bash
npm install @capacitor/core @capacitor/cli
npx cap init DoveOfHope com.votrecompagnie.dove
```

#### Ajouter les plateformes
```bash
npm install @capacitor/android @capacitor/ios
npx cap add android
npx cap add ios
```

#### Copier les fichiers web
```bash
npx cap copy
```

#### Ouvrir dans l'IDE
```bash
npx cap open android  # Android Studio
npx cap open ios      # Xcode (Mac)
```

---

## 🌐 Option 3 : PWA (Progressive Web App)

### Créer un Service Worker

```javascript
// sw.js
const CACHE_NAME = 'dove-of-hope-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/js/config.js',
  '/js/translations.js',
  '/js/story.js',
  '/js/levels.js',
  '/js/game.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

### Créer un manifest.json

```json
{
  "name": "Dove of Hope : Sky Blessing",
  "short_name": "Dove of Hope",
  "description": "A mobile game about hope and light",
  "start_url": "/index.html",
  "display": "fullscreen",
  "orientation": "portrait",
  "theme_color": "#87ceeb",
  "background_color": "#ffffff",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Modifier index.html

```html
<head>
  <!-- Ajouter -->
  <link rel="manifest" href="manifest.json">
  <script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
  </script>
</head>
```

---

## 📦 Option 4 : Distribution Standalone

### Créer un package pour Windows (Electron)

#### Installation
```bash
npm init -y
npm install electron --save-dev
npm install electron-packager --save-dev
```

#### Créer main.js
```javascript
const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 900,
    webPreferences: {
      nodeIntegration: false
    }
  });
  
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
```

#### Package
```bash
electron-packager . DoveOfHope --platform=win32 --arch=x64
```

---

## 🎨 Préparer les Assets

### Créer les icônes

#### Tailles nécessaires
- **Android** : 192×192, 512×512
- **iOS** : 180×180, 167×167, 152×152, 120×120, 76×76
- **Favicon** : 16×16, 32×32, 64×64

#### Générateur en ligne
Utilisez https://realfavicongenerator.net/

### Optimiser les assets

#### Minifier le JavaScript
```bash
# Installer terser
npm install -g terser

# Minifier les modules
terser js/config.js -o js/config.min.js
terser js/translations.js -o js/translations.min.js
terser js/story.js -o js/story.min.js
terser js/levels.js -o js/levels.min.js
terser js/game.js -o js/game.min.js
```

#### Minifier le CSS
```bash
# Installer clean-css
npm install -g clean-css-cli

# Extraire et minifier le CSS
cleancss -o styles.min.css styles.css
```

---

## 🔧 Configuration par Environnement

### Production

#### Créer index.prod.html
```html
<!-- Utiliser les versions minifiées -->
<script src="js/config.min.js"></script>
<script src="js/translations.min.js"></script>
<script src="js/story.min.js"></script>
<script src="js/levels.min.js"></script>
<script src="js/game.min.js"></script>
```

#### Ajouter Google Analytics
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

---

## 📊 Checklist de Déploiement

### Avant le déploiement
- [ ] Tester le jeu localement
- [ ] Vérifier toutes les traductions
- [ ] Tester sur mobile (iOS et Android)
- [ ] Vérifier la console (pas d'erreurs)
- [ ] Optimiser les assets (minification)
- [ ] Créer les icônes
- [ ] Configurer le manifest.json
- [ ] Tester le service worker

### Déploiement
- [ ] Choisir la plateforme d'hébergement
- [ ] Configurer le domaine (optionnel)
- [ ] Activer HTTPS
- [ ] Tester l'URL de production
- [ ] Vérifier la performance (Lighthouse)
- [ ] Tester l'installation PWA

### Après le déploiement
- [ ] Monitorer les erreurs (Sentry)
- [ ] Analyser le trafic (Google Analytics)
- [ ] Collecter les retours utilisateurs
- [ ] Planifier les mises à jour

---

## 🌍 Domaine Personnalisé

### Acheter un domaine
- Namecheap
- Google Domains
- OVH
- GoDaddy

### Configurer le DNS

#### Pour GitHub Pages
```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
CNAME www  votre-username.github.io
```

#### Pour Netlify
```
CNAME @    votre-projet.netlify.app
CNAME www  votre-projet.netlify.app
```

---

## 📈 Monitoring et Analytics

### Google Analytics
```html
<!-- Ajouter dans index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
```

### Sentry (Error Tracking)
```javascript
// Ajouter au début de game.js
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN"
});
```

---

## 🚀 Mise à Jour

### Version Control
```bash
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

### Cache Busting
```html
<!-- Ajouter des versions aux fichiers -->
<script src="js/game.js?v=1.0.0"></script>
```

---

## 🎁 Bonus : Docker

### Créer un Dockerfile
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Build et Run
```bash
docker build -t dove-of-hope .
docker run -p 8080:80 dove-of-hope
```

---

## 📞 Support Déploiement

### Problèmes Courants

#### Les modules JS ne se chargent pas
- Vérifier les chemins relatifs
- Utiliser un serveur HTTP (pas file://)
- Vérifier les CORS headers

#### PWA ne s'installe pas
- Vérifier le manifest.json
- HTTPS requis
- Service worker correctement enregistré

#### Performance lente
- Minifier les fichiers
- Utiliser un CDN
- Optimiser les images

---

## ✨ Recommandations Finales

### Pour Débutants
🎯 **GitHub Pages** - Le plus simple et gratuit

### Pour Production
🎯 **Netlify** ou **Vercel** - Performance et fonctionnalités

### Pour Application Mobile
🎯 **Capacitor** - Plus moderne que Cordova

### Pour Distribution Desktop
🎯 **Electron** - Multi-plateforme

---

**Votre jeu est prêt à conquérir le monde !** 🕊️🌍

Choisissez votre méthode de déploiement et lancez-vous ! ✨
