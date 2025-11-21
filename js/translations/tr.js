// ============================================
// 🇹🇷 TÜRKÇE - DOVE OF HOPE
// ============================================

const tr = {
  code: 'tr',
  name: 'Türkçe',
  flag: '🇹🇷',
  
  ui: {
    score: 'Skor',
    clouds: 'Bulutlar',
    level: 'Bölüm',
    lives: 'Hayat',
    language: 'Dil',
    choose_language: 'Dil seç',
    language_changed: 'Dil değiştirildi',
    difficulty: 'Zorluk',
    easy: 'Kolay',
    normal: 'Normal',
    hard: 'Zor',
    legendary: 'Efsanevi',
    difficulty_changed: 'Zorluk değiştirildi',
    install: 'YÜKLE',
    tap_share: 'Dokun',
    add_home: 'Ana ekrana ekle',
    confirm: 'Onayla',
    install_app: 'Uygulama yükle',
    install_desktop: 'Yüklemek için Chrome/Edge\'de aç',
    close: 'Kapat',
    pause: 'Duraklat',
    music: 'Müzik',
    sfx: 'Ses efektleri',
    menu: 'Menü'
  },
  
  export: {
    score_label: 'Skor',
    level_label: 'Seviye',
    courage_message: 'Cesaret, cesur kahraman!',
    divine_light: 'ilahi ışığa'
  },
  
  buttons: {
    start: 'Yak!',
    play: 'OYNA',
    restart: 'YENİDEN OYNA',
    infinite_mode: 'Sonsuz Mod',
    close: 'Kapat',
    start_bonus: 'Başla'
  },
  
  messages: {
    start: 'Uç küçük güvercin! Bulutları temizle!',
    restart: 'Güvercin yeniden doğuyor! Yeniden başlayalım!',
    gameOver: 'OYUN BİTTİ',
    victory: 'ZAFER!',
    levelUp: 'Seviye {level} - Işık büyüyor!',
    motivation: 'Işığı yakma zamanı!',
    welcome: 'Hoş geldin!'
  },

  profile: {
    nickname: 'Takma adın',
    email: 'E-posta (isteğe bağlı)',
    enter_nickname: 'Takma adını gir...',
    enter_email: 'senin@email.com'
  },

  gameplay: [
    'Hareket et, zamanı geldi!',
    'Güvercin umut getirir!',
    'Devam et!',
    'Kanatların umut taşıyor!'
  ],
  
  rain: [
    'Yağmurdan sonra güneş gelir!',
    'İnancın fırtınadan güçlü!'
  ],
  
  powerups: {
    try_again: 'Ama zorluklarda daha da parlıyorsun!',
    umbrella: 'Şemsiye aktif!',
    speed: 'İlahi hız!',
    multishot: 'Üçlü ışık!',
    rainbow: 'Gökkuşağı kalkanı aktif!',
    star_collected: '⭐ Yıldız toplandı!',
    level_up: '✨ Seviye {level}: {title}',
    new_record: '🏆 YENİ REKOR! Skor: {score}',
    infinite_mode: '🔄 Sonsuz Mod aktif!',
    record_saved: '☁️ Rekor kaydedildi!',
    heart: '💖 +1 Hayat!',
    boss_defeated: '🏆 PATRON YENİLDİ! +{score} puan',
    continue: '✨ Devam',
    save_system: '✨ Kaydetme Sistemi'
  },
  
  treasure: {
    title: '💎 Hazine Menüsü',
    my_records: '🏆 Rekorlarım',
    best_score: 'En İyi Skor',
    max_level: 'Maksimum Seviye',
    creator: '✨ Yaratıcı',
    creator_name: '🎮 Emmanuel Payet',
    my_profile: 'Profilim',
    nickname: 'Takma Ad',
    email: 'E-posta',
    cloud_status: 'Bulut',
    connected: 'Bağlandı',
    disconnected: 'Bağlantı kesildi',
    not_set: 'Ayarlanmadı'
  },
  
  intro: 'Hayat genellikle uzun bir savaştır. Cesur kahraman, ayağa kalk ve Tanrı\'nın sevgisiyle gri bulutları iyiye dönüştür.',
  
  clouds_cleared: '{count} bulut temizlendi',
  transform_clouds: 'Gri bulutları dönüştür',
  
  level_titles: {
    1: 'Umudun Şafağı',
    2: 'İlahi Nefes',
    3: 'İnanç Kanatları',
    4: 'Bağışlama ve Özgürlük',
    5: 'Seçilmiş ve Değerli',
    6: 'İç Güç',
    7: 'Lütuf Fırtınası',
    8: 'Koşulsuz Sevgi',
    9: 'Işık Kahramanı',
    10: 'Yeni Yaratık',
    11: 'Aslan Cesareti',
    12: 'Bilgelik Kapısı',
    13: 'Yeni Cennet',
    14: 'Sonsuz Macera'
  },
  
  levels: {
    1: 'Işıkta ilk adımlarını attın!',
    2: 'Bir kartal gibi Tanrı seni güçlendiriyor!',
    3: 'Değersiz değilsin, sonsuzca seviliyorsun!',
    4: 'Hatalarının seni tanımlamıyor!',
    5: 'Seçildiniz!',
    6: 'Zayıflığında O\'nun gücü ortaya çıkar!',
    7: 'Zorluklar çoğalıyor!',
    8: 'Sevilmek için mükemmel olman gerekmiyor!',
    9: 'Tanrı için çok günahkar değilsin!',
    10: 'Eski geçti, yeni olanı gör!',
    11: 'Cesaretle ayağa kalk!',
    12: 'İncil bir yargı kitabı değil!',
    13: 'Zirveye yaklaşıyorsun!',
    14: 'Tam zafer için son meydan okuma!'
  },
  
  victory_message: 'ZAFER! Karanlığı ışığa dönüştürdün!',
  
  infinite_messages: [
    'Macerana devam et!',
    'Işığın şampiyonusun!',
    'Sonsuzluk senindir!',
    'Tüm sınırları aşıyorsun!',
    'Azmin hayranlık uyandırıcı!'
  ],

  popups: {
    not_connected: '⚠️ Bağlı değil!',
    no_data_to_save: '⚠️ Kaydedilecek veri yok',
    saving: '⏳ Kaydediliyor...',
    save_failed: '❌ Kaydetme başarısız!',
    save_error: '❌ Kaydetme hatası!',
    data_imported: '✅ Veriler başarıyla içe aktarıldı!',
    invalid_file: '❌ Geçersiz dosya',
    enter_nickname_email: '❌ Takma ad VE e-posta girin!',
    invalid_email: '❌ Geçersiz e-posta!',
    connected_success: '✅ Başarıyla bağlandı!',
    reset_confirm: '⚠️ Gerçekten tüm verilerinizi sıfırlamak istiyor musunuz?',
    data_conflict: '⚠️ Veri çakışması algılandı!',
    connection_error: '❌ Bağlantı hatası'
  },

  testimony: {
    title: '💎 Hayat Hazinesi - Emmanuel',
    paragraph1: 'Hastalığın beni korkunç bir şekilde izole ettiği bir zaman vardı...',
    paragraph2: 'Bir dua gibi, çığlığım duyuldu...',
    paragraph3: 'Hatalardan öğrendim...',
    paragraph4: 'Övgü ve ibadette bulduğum bir sevinç...',
    paragraph5: 'Materyalist arzularımın ötesini gördüm...',
    paragraph6: 'Sordum ve anlatılamaz cevaplar aldım...',
    final_message: '🕊️ Bu yüzden İsa sana şunu söylüyor: Asla vazgeçme! 🕊️'
  },

  life_tips: {
    faith: {
      title: '✝️ İnanç İpuçları',
      tip1: '💫 "İnanç umut ettiğimiz şeylere güvenmektir" - İbraniler 11:1',
      tip2: '🙏 Her gün dua et',
      tip3: '📖 Düzenli olarak İncil oku',
      tip4: '✨ Zor zamanlarda Tanrı\'ya güven',
      tip5: '🌟 Kendini inananlarla çevrele'
    },
    courage: {
      title: '💪 Cesaret İpuçları',
      tip1: '🦁 "Güçlü ve cesur ol" - Yeşu 1:9',
      tip2: '🔥 Korkularınla birer birer yüzleş',
      tip3: '🎯 Net hedefler belirle',
      tip4: '👊 Asla vazgeçme',
      tip5: '⭐ Geçmiş başarılarını hatırla'
    },
    peace: {
      title: '🕊️ Barış İpuçları',
      tip1: '🌿 "Size barış bırakıyorum" - Yuhanna 14:27',
      tip2: '🧘 Her gün dinlenmek için zaman ayır',
      tip3: '🌺 Sana acı verenleri bağışla',
      tip4: '🌈 Küçük şeylerde barış ara',
      tip5: '💕 Kendini pozitif insanlarla çevrele'
    },
    love: {
      title: '❤️ Sevgi İpuçları',
      tip1: '💖 "Birbirinizi sevin" - Yuhanna 13:34',
      tip2: '🤝 Herkese nezaket göster',
      tip3: '🎁 Karşılık beklemeden ver',
      tip4: '👂 Başkalarını gerçekten dinle',
      tip5: '✨ Kendini sevmeye başla'
    }
  },

  ranks: {
    1: { title: 'ÖĞRETMEN - İlk Uçuşlar', message: 'Göksel yolculuğun başlıyor.' },
    2: { title: 'ÇIRAK PİLOT - Eğitimde', message: 'Hızla ilerliyorsun!' },
    3: { title: 'HAVACI - Göğün Vaftizi', message: 'Kanatların güvenle açılıyor!' },
    4: { title: 'ONAYLANMIŞ PİLOT - Tecrübeli Navigatör', message: 'Rüzgarlar seni tanıyor!' },
    5: { title: 'GÖK ASI - Kanatlı Virtüöz', message: 'Bulutlar arasında dans ediyorsun!' },
    6: { title: 'ELİT FILO - Hava Kuvvetleri', message: 'En iyiler arasındasın!' },
    7: { title: 'KOMUTAN - Göksel Taktikçi', message: 'Stratejik görevler veriliyor!' },
    8: { title: 'BULUT STRATEJİSTİ - Usta Taktikçi', message: 'Her hareketi öngörüyorsun!' },
    9: { title: 'VETERAN - Fırtınalar Tarafından Dövülmüş', message: 'Bin fırtınayı atlattın!' },
    10: { title: 'GÖKSELKAHRAMAN - Ünlü Şampiyon', message: 'Kahramanlıkların övülüyor!' },
    11: { title: 'EFSANE - Yaşayan Efsane', message: 'Adın göklerde yankılanıyor!' },
    12: { title: 'SONSUZ ŞAMPİYON - Ölümsüz Zafer', message: 'Ününz çağları aşıyor!' },
    13: { title: 'USTA PİLOT - Hava Senfonisi', message: 'Artık uçmuyorsun, beste yapıyorsun!' },
    14: { title: 'GÖK KANADI - Sonsuz Koruyucu', message: 'Ölümlülüğü aştın!' }
  },

  verses: {
    level: {
      1: { text: 'Işık karanlıkta parlar', reference: 'Yuhanna 1:5' },
      2: { text: 'Tanrı\'nın Ruhu suların üzerinde geziniyordu', reference: 'Yaratılış 1:2' },
      3: { text: 'Rab\'be umut bağlayanlar kartallar gibi kanat açacaklar', reference: 'Yeşaya 40:31' },
      4: { text: 'Rab\'bin Ruhu neredeyse, orada özgürlük vardır', reference: '2. Korintliler 3:17' },
      5: { text: 'Seni isminle çağırdım, sen benimsin', reference: 'Yeşaya 43:1' },
      6: { text: 'Beni güçlendiren Mesih\'te her şeyi yapabilirim', reference: 'Filipililer 4:13' },
      7: { text: 'Yağmurdan sonra güneş gelir', reference: 'Eyüp 37:11' },
      8: { text: 'Sevgi asla tükenmez', reference: '1. Korintliler 13:8' },
      9: { text: 'İmacın seni kurtardı', reference: 'Luka 7:50' },
      10: { text: 'Bir kimse Mesih\'teyse yeni yaratılıştır', reference: '2. Korintliler 5:17' },
      11: { text: 'Güçlü ve cesur ol', reference: 'Yeşu 1:9' },
      12: { text: 'Sözün ayağıma ışık', reference: 'Mezmur 119:105' },
      13: { text: 'Siz seçilmiş bir soysunuz', reference: '1. Petrus 2:9' },
      14: { text: 'Hayat olağanüstü bir maceradır', reference: 'Mezmur 99:1' }
    },
    rank: {
      1: { text: 'Seni sonsuz bir sevgiyle sevdim', reference: 'Yeremya 31:3' },
      2: { text: 'Rab yorgunlara güç verir', reference: 'Yeşaya 40:29' },
      3: { text: 'Rab\'be umut bağlayanlar kanat açacaklar', reference: 'Yeşaya 40:31' },
      4: { text: 'Rab\'bin Ruhu neredeyse, özgürlük vardır', reference: '2. Korintliler 3:17' },
      5: { text: 'Seni isminle çağırdım', reference: 'Yeşaya 43:1' },
      6: { text: 'Her şeyi yapabilirim', reference: 'Filipililer 4:13' },
      7: { text: 'Tanrı karışıklığın değil barışın Tanrısıdır', reference: '1. Korintliler 14:33' },
      8: { text: 'Korkma, çünkü ben seninleyim', reference: 'Yeşaya 41:10' },
      9: { text: 'Güçlü ve cesur ol', reference: 'Yeşu 1:9' },
      10: { text: 'İmanın seni kurtardı', reference: 'Luka 7:50' },
      11: { text: 'Mesih\'te yeni yaratılıştır', reference: '2. Korintliler 5:17' },
      12: { text: 'Seçilmiş bir soysunuz', reference: '1. Petrus 2:9' },
      13: { text: 'Yağmurdan sonra güneş gelir', reference: 'Eyüp 37:11' },
      14: { text: 'Sevgi asla tükenmez', reference: '1. Korintliler 13:8' }
    },
    infinite: [
      { text: 'Yüreğiniz sıkılmasın', reference: 'Yuhanna 14:1' },
      { text: 'Ben sizinle her zaman birlikteyim', reference: 'Matta 28:20' },
      { text: 'Rab benim ışığım ve kurtuluşumdur', reference: 'Mezmur 27:1' },
      { text: 'Siz dünyanın ışığısınız', reference: 'Matta 5:14' },
      { text: 'Sevgi birçok günahı örter', reference: '1. Petrus 4:8' }
    ]
  },

  bosses: {
    spider: {
      name: '🕷️ Karanlığın Örümceği',
      intro: 'Dev bir örümcek korku ağını örüyor...',
      phase_1: '🕸️ Acı korkusu...',
      phase_2: '✨ İrrasyonel korkular...',
      phase_3: '🛡️ Korku seni domine etmemeli!',
      defeated: '🦋 KORKU ÜZERİNDE ZAFER!',
      wisdom: 'Örümcek tüm korkularımızı simgeler...'
    }
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = tr;
}
