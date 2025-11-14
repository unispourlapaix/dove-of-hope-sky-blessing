// ============================================
// 🇳🇱 NEDERLANDS - DOVE OF HOPE
// ============================================

const nl = {
  code: 'nl',
  name: 'Nederlands',
  flag: '🇳🇱',
  
  ui: {
    score: 'Score',
    clouds: 'Wolken',
    level: 'Niveau',
    lives: 'Leven'
  },
  
  buttons: {
    start: 'Aansteken!',
    play: 'SPELEN',
    restart: 'OPNIEUW'
  },
  
  messages: {
    start: 'Vlieg, kleine duif! Verjaag de wolken!',
    restart: 'De duif herrijst! We gaan weer!',
    gameOver: 'Game Over! Maar in tegenspoed schijn je nog helderder!',
    victory: 'OVERWINNING! Psalm 99.1 - Het leven is een buitengewoon avontuur! - zegt Origenes',
    levelUp: 'Niveau {level} - Het licht groeit!',
    motivation: 'Het is tijd om te schijnen - Het is een mooie tijd om je dromen te realiseren!'
  },
  
  gameplay: [
    'Beweeg, het is tijd!',
    'De duif brengt hoop!',
    'Ga door, het licht keert terug!',
    'Je vleugels dragen hoop!',
    'Volhard, de zon wacht op je!',
    'Vlieg naar je dromen!',
    'Na regen komt zonneschijn!',
    'Weten hoe te dansen in de regen is weten hoe gelukkig te zijn!',
    'Je geloof is sterker dan de storm!',
    'Dans met de elementen, je bent vrij!'
  ],
  
  rain: [
    'Na regen komt zonneschijn!',
    'Je geloof is sterker dan de storm!',
    'De storm onthult de kracht van je vleugels!'
  ],
  
  powerups: {
    umbrella: 'Paraplu geactiveerd! Dans met de elementen!',
    speed: 'Goddelijke snelheid! Je vleugels zijn vrij!',
    multishot: 'Drievoudig licht! Je hart straalt!'
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = nl;
}
