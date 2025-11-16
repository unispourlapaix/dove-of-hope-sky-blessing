// ============================================
// 🇰🇪 SWAHILI - DOVE OF HOPE
// ============================================

const sw = {
  code: 'sw',
  name: 'Kiswahili',
  flag: '🇰🇪',
  
  ui: {
    score: 'Alama',
    clouds: 'Mawingu',
    level: 'Sura',
    lives: 'Maisha'
  },
  
  buttons: {
    start: 'Washa!',
    play: 'CHEZA',
    restart: 'CHEZA TENA'
  },
  
  messages: {
    start: 'Ruka, njiwa mdogo! Ondoa mawingu!',
    restart: 'Njiwa anazaliwa upya! Tuendelee!',
    gameOver: 'Mwisho wa Mchezo! Lakini katika dhiki, unaangaza zaidi!',
    victory: 'USHINDI! Zaburi 99.1 - Maisha ni tukio la ajabu! - asema Asili',
    levelUp: 'Kiwango {level} - Nuru inakua!',
    motivation: 'Ni wakati wa kuwasha nuru - Ni wakati mzuri wa kutimiza ndoto!'
  },
  
  gameplay: [
    'Sogea, ni wakati!',
    'Njiwa analeta tumaini!',
    'Endelea, nuru inarudi!',
    'Mabawa yako yanabeba tumaini!',
    'Vumilia, jua linakungoja!',
    'Ruka kuelekea ndoto zako!',
    'Baada ya mvua kuna jua!',
    'Kujua kucheza mvuani ni kujua kuwa na furaha!',
    'Imani yako ni yenye nguvu kuliko dhoruba!',
    'Cheza na vipengele, wewe ni huru!'
  ],
  
  rain: [
    'Baada ya mvua kuna jua!',
    'Imani yako ni yenye nguvu kuliko dhoruba!',
    'Dhoruba inafichua nguvu za mabawa yako!'
  ],
  
  powerups: {
    umbrella: 'Mwavuli umewashwa! Cheza na vipengele!',
    speed: 'Kasi ya kimungu! Mabawa yako ni huru!',
    multishot: 'Nuru ya tatu! Moyo wako unaangaza!'
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = sw;
}
