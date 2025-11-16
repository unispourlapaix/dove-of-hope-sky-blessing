// ============================================
// 🇵🇱 POLSKI - DOVE OF HOPE
// ============================================

const pl = {
  code: 'pl',
  name: 'Polski',
  flag: '🇵🇱',
  
  ui: {
    score: 'Wynik',
    clouds: 'Chmury',
    level: 'Rozdział',
    lives: 'Życie'
  },
  
  buttons: {
    start: 'Zapal!',
    play: 'GRAJ',
    restart: 'GRAJ PONOWNIE'
  },
  
  messages: {
    start: 'Leć, mała gołąbko! Rozprosz chmury!',
    restart: 'Gołąbek odradza się! Ruszamy!',
    gameOver: 'Koniec gry! Ale w przeciwnościach błyszczy jeszcze jaśniej!',
    victory: 'ZWYCIĘSTWO! Psalm 99,1 - Życie to niezwykła przygoda! - mówi Początek',
    levelUp: 'Poziom {level} - Światło rośnie!',
    motivation: 'Czas zapalić światło - To dobry czas, aby spełnić swoje marzenia!'
  },
  
  gameplay: [
    'Ruszaj się, to czas!',
    'Gołąbek przynosi nadzieję!',
    'Kontynuuj, światło wraca!',
    'Twoje skrzydła niosą nadzieję!',
    'Wytrwaj, słońce na ciebie czeka!',
    'Leć ku swoim marzeniom!',
    'Po deszczu przychodzi słońce!',
    'Umieć tańczyć w deszczu to umieć być szczęśliwym!',
    'Twoja wiara jest silniejsza niż burza!',
    'Tańcz z żywiołami, jesteś wolny!'
  ],
  
  rain: [
    'Po deszczu przychodzi słońce!',
    'Twoja wiara jest silniejsza niż burza!',
    'Burza ujawnia siłę twoich skrzydeł!'
  ],
  
  powerups: {
    umbrella: 'Parasol aktywowany! Tańcz z żywiołami!',
    speed: 'Boska prędkość! Twoje skrzydła są wolne!',
    multishot: 'Potrójne światło! Twoje serce promieniuje!'
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = pl;
}
