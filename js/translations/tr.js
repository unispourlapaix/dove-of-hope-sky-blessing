// ============================================
// 🇹🇷 TÜRKÇE - DOVE OF HOPE
// ============================================

const tr = {
  code: 'tr',
  name: 'Türkçe',
  flag: '🇹🇷',
  
  ui: {
    score: 'Puan',
    clouds: 'Bulutlar',
    level: 'Seviye',
    lives: 'Can'
  },
  
  buttons: {
    start: 'Yak!',
    play: 'OYNA',
    restart: 'YENİDEN OYNA'
  },
  
  messages: {
    start: 'Uç, küçük güvercin! Bulutları dağıt!',
    restart: 'Güvercin yeniden doğuyor! Tekrar başlıyoruz!',
    gameOver: 'Oyun Bitti! Ama zorluklar karşısında daha da parlıyorsun!',
    victory: 'ZAFER! Mezmur 99.1 - Hayat olağanüstü bir macera! - Origen der',
    levelUp: 'Seviye {level} - Işık büyüyor!',
    motivation: 'Işığı yakma zamanı - Hayallerinizi gerçekleştirmek için güzel bir zaman!'
  },
  
  gameplay: [
    'Hareket et, zamanı geldi!',
    'Güvercin umut getiriyor!',
    'Devam et, ışık geri dönüyor!',
    'Kanatların umut taşıyor!',
    'Sebat et, güneş seni bekliyor!',
    'Hayallerine doğru uç!',
    'Yağmurdan sonra güneş doğar!',
    'Yağmurda dans etmeyi bilmek mutlu olmayı bilmektir!',
    'İnancın fırtınadan daha güçlü!',
    'Elementlerle dans et, özgürsün!'
  ],
  
  rain: [
    'Yağmurdan sonra güneş doğar!',
    'İnancın fırtınadan daha güçlü!',
    'Fırtına kanatlarının gücünü ortaya çıkarır!'
  ],
  
  powerups: {
    umbrella: 'Şemsiye aktif! Elementlerle dans et!',
    speed: 'İlahi hız! Kanatların özgür!',
    multishot: 'Üçlü ışık! Kalbin parlıyor!'
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = tr;
}
