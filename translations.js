// Module de traductions pour Dove of Hope
// Facilite l'ajout et la maintenance des langues

const TRANSLATIONS = {
  fr: {
    name: 'Français',
    flag: '🇫🇷',
    messages: {
      start: 'Vole, petite colombe ! Dissipe les nuages !',
      restart: 'La colombe renaît ! C\'est reparti !',
      gameOver: 'Game Over ! Mais dans l\'adversité, tu brilles encore plus fort !',
      victory: 'VICTOIRE ! Psaume 99.1 - La vie est une aventure extraordinaire ! - dit Origène',
      levelUp: 'Niveau {level} - La lumière grandit !',
      motivation: 'C\'est le temps d\'illuminer - C\'est un beau temps pour réaliser tes rêves !',
      welcome: 'Vole, petite colombe, vole vers de meilleurs jours, de meilleurs espoirs, de meilleurs rêves.'
    },
    gameplay: [
      'Bouge-toi, c\'est le temps !',
      'La colombe apporte l\'espoir !',
      'Continue, la lumière revient !',
      'Tes ailes portent l\'espoir !',
      'Persévère, le soleil t\'attend !',
      'Vole vers tes rêves !',
      'Après la pluie y a le beau temps !',
      'Savoir danser sous la pluie c\'est savoir être heureux !',
      'Ta foi est plus forte que l\'orage !',
      'Danse avec les éléments, tu es libre !',
      'Ce n\'est pas un esprit de timidité !',
      'Tu es appelé à la lumière !',
      'Porte la paix et l\'amour !',
      'Choisis la vie !',
      'Rejette la haine et le racisme !',
      'L\'œuvre du mal : guerre, destruction... Vole !',
      'Ne juge pas les autres !',
      'Sois d\'abord toi-même la meilleure version possible !',
      'Ne t\'isole pas dans les plus mauvais moments !',
      'N\'abandonne jamais !',
      'La vie est remplie de surprises impossibles !',
      'L\'impossible peut devenir possible !',
      'Courage, persévère !'
    ],
    rain: [
      'Après la pluie y a le beau temps !',
      'Ta foi est plus forte que l\'orage !',
      'La tempête révèle la force de tes ailes !'
    ],
    powerups: {
      umbrella: 'Parapluie activé ! Danse avec les éléments !',
      speed: 'Vitesse divine ! Tes ailes sont libres !',
      multishot: 'Triple lumière ! Ton cœur rayonne !',
      heart: '💖 Vie supplémentaire !',
      rainbow: '🌈 Magie arc-en-ciel ! Les nuages deviennent des cœurs + Triple laser !',
      star: '⭐ BOUM ! Onde de choc activée ! Tous les nuages s\'évaporent !'
    }
  },
  
  en: {
    name: 'English',
    flag: '🇬🇧',
    messages: {
      start: 'Fly, little dove! Clear the clouds!',
      restart: 'The dove is reborn! Here we go again!',
      gameOver: 'Game Over! But in adversity, you shine even brighter!',
      victory: 'VICTORY! Psalm 99.1 - Life is an extraordinary adventure! - says Origen',
      levelUp: 'Level {level} - The light grows!',
      motivation: 'It\'s time to light up - It\'s a beautiful time to realize your dreams!',
      welcome: 'Fly, little dove, fly towards better days, better hopes, better dreams.'
    },
    gameplay: [
      'Move, it\'s time!',
      'The dove brings hope!',
      'Keep going, the light returns!',
      'Your wings carry hope!',
      'Persevere, the sun awaits you!',
      'Fly to your dreams!',
      'After the rain comes sunshine!',
      'Knowing how to dance in the rain is knowing how to be happy!',
      'Your faith is stronger than the storm!',
      'Dance with the elements, you are free!',
      'This is not a spirit of timidity!',
      'You are called to the light!',
      'Bring peace and love!',
      'Choose life!',
      'Reject hatred and racism!',
      'The work of evil: war, destruction... Fly!',
      'Don\'t judge others!',
      'Be first yourself the best version possible!',
      'Don\'t isolate yourself in the worst moments!',
      'Never give up!',
      'Life is full of impossible surprises!',
      'The impossible can become possible!',
      'Courage, persevere!'
    ],
    rain: [
      'After the rain comes sunshine!',
      'Your faith is stronger than the storm!',
      'The storm reveals the strength of your wings!'
    ],
    powerups: {
      umbrella: 'Umbrella activated! Dance with the elements!',
      speed: 'Divine speed! Your wings are free!',
      multishot: 'Triple light! Your heart shines!',
      heart: '💖 Extra life!',
      rainbow: '🌈 Rainbow magic! Clouds turn into hearts + Triple laser!',
      star: '⭐ BOOM! Shockwave activated! All clouds evaporate!'
    }
  },
  
  es: {
    name: 'Español',
    flag: '🇪🇸',
    messages: {
      start: '¡Vuela, pequeña paloma! ¡Despeja las nubes!',
      restart: '¡La paloma renace! ¡Aquí vamos de nuevo!',
      gameOver: '¡Game Over! ¡Pero en la adversidad, brillas aún más!',
      victory: '¡VICTORIA! Salmo 99.1 - ¡La vida es una aventura extraordinaria! - dice Orígenes',
      levelUp: 'Nivel {level} - ¡La luz crece!',
      motivation: 'Es hora de iluminar - ¡Es un buen momento para realizar tus sueños!',
      welcome: 'Vuela, pequeña paloma, vuela hacia mejores días, mejores esperanzas, mejores sueños.'
    },
    gameplay: [
      '¡Muévete, es el momento!',
      '¡La paloma trae esperanza!',
      '¡Continúa, la luz regresa!',
      '¡Tus alas llevan esperanza!',
      '¡Persevera, el sol te espera!',
      '¡Vuela hacia tus sueños!',
      '¡Después de la lluvia viene el sol!',
      '¡Saber bailar bajo la lluvia es saber ser feliz!',
      '¡Tu fe es más fuerte que la tormenta!',
      '¡Baila con los elementos, eres libre!',
      '¡No es un espíritu de timidez!',
      '¡Estás llamado a la luz!',
      '¡Lleva la paz y el amor!',
      '¡Elige la vida!',
      '¡Rechaza el odio y el racismo!',
      'La obra del mal: guerra, destrucción... ¡Vuela!',
      '¡No juzgues a los demás!',
      '¡Sé primero tú mismo la mejor versión posible!',
      '¡No te aísles en los peores momentos!',
      '¡Nunca te rindas!',
      '¡La vida está llena de sorpresas imposibles!',
      '¡Lo imposible puede volverse posible!',
      '¡Valor, persevera!'
    ],
    rain: [
      '¡Después de la lluvia viene el sol!',
      '¡Tu fe es más fuerte que la tormenta!',
      '¡La tormenta revela la fuerza de tus alas!'
    ],
    powerups: {
      umbrella: '¡Paraguas activado! ¡Baila con los elementos!',
      speed: '¡Velocidad divina! ¡Tus alas son libres!',
      multishot: '¡Triple luz! ¡Tu corazón brilla!',
      heart: '💖 ¡Vida extra!',
      rainbow: '🌈 ¡Magia arcoíris! ¡Las nubes se vuelven corazones + Láser triple!',
      star: '⭐ ¡BUM! ¡Onda de choque activada! ¡Todas las nubes se evaporan!'
    }
  },
  
  de: {
    name: 'Deutsch',
    flag: '🇩🇪',
    messages: {
      start: 'Flieg, kleine Taube! Vertreibe die Wolken!',
      restart: 'Die Taube ist wiedergeboren! Los geht\'s!',
      gameOver: 'Game Over! Aber in der Not glänzt du noch heller!',
      victory: 'SIEG! Psalm 99,1 - Das Leben ist ein außergewöhnliches Abenteuer! - sagt Origenes',
      levelUp: 'Level {level} - Das Licht wächst!',
      motivation: 'Es ist Zeit zu leuchten - Es ist eine schöne Zeit, deine Träume zu verwirklichen!',
      welcome: 'Fly, little dove, fly towards better days, better hopes, better dreams.'
    },
    gameplay: [
      'Beweg dich, es ist Zeit!',
      'Die Taube bringt Hoffnung!',
      'Mach weiter, das Licht kehrt zurück!',
      'Deine Flügel tragen Hoffnung!',
      'Beharrlichkeit, die Sonne erwartet dich!',
      'Flieg zu deinen Träumen!',
      'Nach dem Regen kommt die Sonne!',
      'Im Regen tanzen zu können bedeutet, glücklich sein zu können!',
      'Dein Glaube ist stärker als der Sturm!',
      'Tanze mit den Elementen, du bist frei!',
      'Das ist kein Geist der Feigheit!',
      'Du bist zum Licht berufen!',
      'Bringe Frieden und Liebe!',
      'Wähle das Leben!',
      'Lehne Hass und Rassismus ab!',
      'Das Werk des Bösen: Krieg, Zerstörung... Fliege!',
      'Urteile nicht über andere!',
      'Sei zuerst selbst die beste Version möglich!',
      'Isoliere dich nicht in den schlimmsten Momenten!',
      'Gib niemals auf!',
      'Das Leben ist voller unmöglicher Überraschungen!',
      'Das Unmögliche kann möglich werden!',
      'Mut, bleib dran!'
    ],
    rain: [
      'Nach dem Regen kommt die Sonne!',
      'Dein Glaube ist stärker als der Sturm!',
      'Der Sturm offenbart die Stärke deiner Flügel!'
    ],
    powerups: {
      umbrella: 'Regenschirm aktiviert! Tanze mit den Elementen!',
      speed: 'Göttliche Geschwindigkeit! Deine Flügel sind frei!',
      multishot: 'Dreifaches Licht! Dein Herz strahlt!',
      heart: '💖 Extra Leben!',
      rainbow: '🌈 Regenbogenmagie! Wolken werden zu Herzen + Dreifachlaser!',
      star: '⭐ BUMM! Schockwelle aktiviert! Alle Wolken verdampfen!'
    }
  },
  
  it: {
    name: 'Italiano',
    flag: '🇮🇹',
    messages: {
      start: 'Vola, piccola colomba! Dissipa le nuvole!',
      restart: 'La colomba rinasce! Ripartiamo!',
      gameOver: 'Game Over! Ma nell\'avversità, brilli ancora di più!',
      victory: 'VITTORIA! Salmo 99,1 - La vita è un\'avventura straordinaria! - dice Origene',
      levelUp: 'Livello {level} - La luce cresce!',
      motivation: 'È tempo di illuminare - È un bel momento per realizzare i tuoi sogni!',
      welcome: 'Fly, little dove, fly towards better days, better hopes, better dreams.'
    },
    gameplay: [
      'Muoviti, è il momento!',
      'La colomba porta speranza!',
      'Continua, la luce ritorna!',
      'Le tue ali portano speranza!',
      'Persevera, il sole ti aspetta!',
      'Vola verso i tuoi sogni!',
      'Dopo la pioggia viene il sole!',
      'Saper ballare sotto la pioggia significa saper essere felici!',
      'La tua fede è più forte della tempesta!',
      'Danza con gli elementi, sei libero!',
      'Questo non è uno spirito di timidezza!',
      'Sei chiamato alla luce!',
      'Porta pace e amore!',
      'Scegli la vita!',
      'Rifiuta l\'odio e il razzismo!',
      'L\'opera del male: guerra, distruzione... Vola!',
      'Non giudicare gli altri!',
      'Sii prima tu stesso la migliore versione possibile!',
      'Non isolarti nei momenti peggiori!',
      'Non mollare mai!',
      'La vita è piena di sorprese impossibili!',
      'L\'impossibile può diventare possibile!',
      'Coraggio, persevera!'
    ],
    rain: [
      'Dopo la pioggia viene il sole!',
      'La tua fede è più forte della tempesta!',
      'La tempesta rivela la forza delle tue ali!'
    ],
    powerups: {
      umbrella: 'Ombrello attivato! Danza con gli elementi!',
      speed: 'Velocità divina! Le tue ali sono libere!',
      multishot: 'Tripla luce! Il tuo cuore brilla!',
      heart: '💖 Vita extra!',
      rainbow: '🌈 Magia arcobaleno! Le nuvole diventano cuori + Laser triplo!',
      star: '⭐ BUM! Onda d\'urto attivata! Tutte le nuvole evaporano!'
    }
  },
  
  pt: {
    name: 'Português',
    flag: '🇵🇹',
    messages: {
      start: 'Voa, pequena pomba! Dissipa as nuvens!',
      restart: 'A pomba renasce! Vamos de novo!',
      gameOver: 'Game Over! Mas na adversidade, brilhas ainda mais!',
      victory: 'VITÓRIA! Salmo 99.1 - A vida é uma aventura extraordinária! - diz Orígenes',
      levelUp: 'Nível {level} - A luz cresce!',
      motivation: 'É hora de iluminar - É um bom momento para realizar seus sonhos!',
      welcome: 'Fly, little dove, fly towards better days, better hopes, better dreams.'
    },
    gameplay: [
      'Mexe-te, é a hora!',
      'A pomba traz esperança!',
      'Continua, a luz retorna!',
      'Tuas asas carregam esperança!',
      'Persevera, o sol te espera!',
      'Voa para teus sonhos!',
      'Depois da chuva vem o sol!',
      'Saber dançar na chuva é saber ser feliz!',
      'Tua fé é mais forte que a tempestade!',
      'Dança com os elementos, és livre!',
      'Isso não é um espírito de timidez!',
      'És chamado à luz!',
      'Traz paz e amor!',
      'Escolhe a vida!',
      'Rejeita o ódio e o racismo!',
      'A obra do mal: guerra, destruição... Voa!',
      'Não julgues os outros!',
      'Sê primeiro tu mesmo a melhor versão possível!',
      'Não se isole nos piores momentos!',
      'Nunca desista!',
      'A vida está cheia de surpresas impossíveis!',
      'O impossível pode se tornar possível!',
      'Coragem, persevere!'
    ],
    rain: [
      'Depois da chuva vem o sol!',
      'Tua fé é mais forte que a tempestade!',
      'A tempestade revela a força de tuas asas!'
    ],
    powerups: {
      umbrella: 'Guarda-chuva ativado! Dança com os elementos!',
      speed: 'Velocidade divina! Tuas asas são livres!',
      multishot: 'Tripla luz! Teu coração brilha!',
      heart: '💖 Vida extra!',
      rainbow: '🌈 Magia arco-íris! As nuvens viram corações + Laser triplo!',
      star: '⭐ BUM! Onda de choque ativada! Todas as nuvens evaporam!'
    }
  }
};

// Fonction pour obtenir une traduction
function getTranslation(lang, key) {
  const keys = key.split('.');
  let value = TRANSLATIONS[lang];
  
  for (const k of keys) {
    if (value && value[k] !== undefined) {
      value = value[k];
    } else {
      // Fallback sur l'anglais si la clé n'existe pas
      value = TRANSLATIONS['en'];
      for (const fallbackKey of keys) {
        if (value && value[fallbackKey] !== undefined) {
          value = value[fallbackKey];
        } else {
          return `[Missing: ${key}]`;
        }
      }
      break;
    }
  }
  
  return value;
}

// Fonction pour obtenir toutes les langues disponibles
function getAvailableLanguages() {
  return Object.keys(TRANSLATIONS).map(code => ({
    code: code,
    name: TRANSLATIONS[code].name,
    flag: TRANSLATIONS[code].flag
  }));
}

// Fonction pour vérifier si une langue existe
function languageExists(lang) {
  return TRANSLATIONS.hasOwnProperty(lang);
}

// Export pour utilisation dans le jeu
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TRANSLATIONS, getTranslation, getAvailableLanguages, languageExists };
}
