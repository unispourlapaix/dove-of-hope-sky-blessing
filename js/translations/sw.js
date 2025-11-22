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
    lives: 'Maisha',
    language: 'Lugha',
    choose_language: 'Chagua lugha',
    language_changed: 'Lugha imebadilishwa',
    difficulty: 'Ugumu',
    easy: 'Rahisi',
    normal: 'Kawaida',
    hard: 'Ngumu',
    legendary: 'Wa kihistoria',
    difficulty_changed: 'Ugumu umebadilishwa',
    install: 'SAKINISHA',
    tap_share: 'Gusa',
    add_home: 'Ongeza kwenye skrini ya nyumbani',
    confirm: 'Thibitisha',
    install_app: 'Sakinisha programu',
    install_desktop: 'Fungua katika Chrome/Edge ili kusakinisha',
    close: 'Funga',
    pause: 'Sitisha',
    music: 'Muziki',
    sfx: 'Sauti',
    menu: 'Menyu',
    click_to_continue: 'Bonyeza kuendelea...'
  },
  
  export: {
    score_label: 'Alama',
    level_label: 'Ngazi',
    courage_message: 'Ujasiri, shujaa mwenye ujasiri!',
    divine_light: 'katika nuru ya kimungu'
  },
  
  buttons: {
    start: 'Washa!',
    play: 'CHEZA',
    restart: 'CHEZA TENA',
    infinite_mode: 'Hali ya Milele',
    close: 'Funga',
    start_bonus: 'Anza'
  },
  
  messages: {
    start: 'Anza safari ya anga',
    restart: 'Anza upya',
    gameOver: 'Mchezo umekwisha! Mawingu yameshinda...',
    victory: 'Ushindi! Anga limesafishwa!',
    levelUp: 'Ngazi inayofuata!',
    motivation: '✨ Neema ya Mungu inaangazia njia yako! ✨',
    welcome: 'Karibu, Kadeti wa Ndege ya Kwanza!'
  },

  profile: {
    nickname: 'Jina lako la utani',
    email: 'Barua pepe (si lazima)',
    enter_nickname: 'Ingiza jina lako la utani...',
    enter_email: 'yako@email.com'
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
    umbrella: 'Mwavuli imeamilishwa! Cheza na vipengele!',
    speed: 'Kasi ya kimungu! Mabawa yako ni huru!',
    multishot: 'Nuru mara tatu! Moyo wako unaangaza!',
    rainbow: 'Ngao ya Upinde wa Mvua imewezesha! Ulinzi wa kimungu!',
    star_collected: '⭐ Nyota imekusanywa! ({count} katika hifadhi) - Bonyeza mara mbili kwa wimbi la mshtuko!',
    level_up: '✨ Ngazi {level}: {title}',
    new_record: '🏆 REKODI MPYA! Alama: {score}',
    new_record_popup: '🎉 Rekodi mpya!\n\nAlama: {score}\n\nAlama yako imehifadhiwa.\nBonyeza Hamisha katika menyu ya Hazina kuishiriki.',
    infinite_mode: '🔄 Hali ya Milele imeamilishwa! Mistari kila mawingu 100 ☁️',
    record_saved: '☁️ Rekodi imehifadhiwa!',
    heart: '💖 +1 Maisha! Neema ya Mungu inakuhifadhi!',
    try_again: 'Lakini katika shida, unaangaza zaidi!',
    boss_defeated: '🏆 Boss ameshindwa! +{score} pts',
    storm_cleared: '🌈 Dhoruba imetoweka! Tumaini linaangaza tena!',
    continue: '✨ Endelea',
    save_system: '✨ Mfumo wa kuhifadhi'
  },
  
  bonus: {
    completed_title: '🎉 BONUS IMEKAMILIKA',
    items_collected: 'Vitu vilivyokusanywa',
    bonus_score: 'ALAMA ZA BONUS',
    collect_blessings: 'Kusanya baraka:',
    star: 'Nyota',
    heart: 'Moyo',
    cross: 'Msalaba',
    rainbow: 'Upinde wa mvua',
    coin_trap: 'Sarafu = -200 pts (MTEGO!)',
    objective: 'Lengo:',
    objects: 'vitu',
    level_title: 'NGAZI YA BONUS',
    messages: [
      "Upendo wa pesa huunda maovu mengi, lakini ukitumika kwa hekima na upendo ni chanzo kikubwa cha baraka.",
      "Jifunze kupenda unachokwisha kuwa nacho na usilie kwa wivu kwa kile ambacho sio chako.",
      "Utajiri wa kweli uko moyoni, nguvu yako ni kwamba wewe ni wa kipekee, wa thamani zaidi ya dhahabu na fedha.",
      "Jiweke huru kutoka utumwa wa kimwili, kuwa huru kweli kweli, kuwa msimamizi mwenye hekima na mzuri."
    ]
  },
  
  treasure: {
    title: '💎 Menyu ya Hazina',
    my_records: '🏆 Rekodi Zangu',
    best_score: 'Alama Bora Zaidi',
    max_level: 'Kiwango cha Juu',
    star_stock: '⭐ Hifadhi ya Nyota',
    chapters_conquered: '🏅 Sura Zilizoshindwa',
    chapters_completed: 'sura zimekamilika',
    infinite_progress: '♾️ Maendeleo ya Hali Isiyo na Kikomo',
    verse_collection: 'Kukusanya mistari ya nasibu kila mawingu 100',
    xp_clouds: 'XP: {count} mawingu',
    next_verse: 'Mistari inayofuata katika: {count}',
    verses_collected: '📚 {count} mistari imekusanywa',
    last_played: 'Mchezo wa mwisho',
    creator: '✨ Muumbaji',
    creator_name: '🎮 Emmanuel Payet',
    creator_bio: 'Msanidi programu & Muumbaji wa michezo ya kuhamasisha',
    audiomack: '📱 Audiomack',
    creator_message: 'Mchezo huu na ukuhamasisha na kukutia nguvu! 🕊️',
    discover_artist: '🎵 Gundua Msanii',
    cloud_connect: '☁️ Unganisha kwenye wingu',
    cloud_manage: '☁️ Dhibiti muunganisho wangu',
    life_tips_faith: '✝️ Imani',
    life_tips_courage: '💪 Ujasiri',
    life_tips_peace: '🕊️ Amani',
    life_tips_love: '❤️ Upendo',
    life_tips_prompt: 'Bonyeza kichupo ili kugundua ushauri wa maisha',
    infinite_chapter: 'Sura ya {number}',
    my_profile: 'Wasifu Wangu',
    nickname: 'Jina la utani',
    email: 'Barua pepe',
    cloud_status: 'Wingu',
    connected: 'Imeunganishwa',
    disconnected: 'Haijaunganishwa',
    highest_level: 'Alama Bora',
    last_game: 'Mchezo wa mwisho',
    testimonies_title: 'Ushuhuda wa Matumaini',
    testimonies_description: 'Gundua hadithi za ujasiri na uponyaji',
    read_testimonies: 'Soma ushuhuda',
    save_cloud: 'Hifadhi kwenye Wingu',
    share_score: 'Shiriki alama yangu',
    not_set: 'Haijawekwa',
    boss_wisdom_title: 'Hekima ya Boss',
    boss_wisdom_subtitle: 'Shinda maboss kufungua mafundisho yao ya kina',
    boss_wisdom_collected: 'hekima imefunguliwa',
    boss_wisdom_locked: 'Hekima hii bado imefungwa. Shinda boss huyu kuifungua!',
    boss_wisdom_philosophy: 'Falsafa na Mafundisho',
    boss_wisdom_victory: 'Ujumbe wa Ushindi',
    boss_wisdom_close: 'Funga'
  },
  
  intro: 'Maisha mara nyingi ni vita virefu, inahitaji ujasiri na nguvu kushikilia siku mbaya. Shujaa jasiri, inuka, na kwa upendo wa Mungu geuza mawingu ya kijivu kuwa mema.',
  
  clouds_cleared: '{count} mawingu yametoweka',
  transform_clouds: 'Geuza mawingu ya kijivu',  level_titles: {
    1: 'Alfajiri ya Tumaini',
    2: 'Pumzi ya Kimungu',
    3: 'Mabawa ya Imani',
    4: 'Msamaha na Uhuru',
    5: 'Umechaguliwa na Thamani',
    6: 'Nguvu ya Ndani',
    7: 'Dhoruba ya Neema',
    8: 'Upendo Usio na Masharti',
    9: 'Shujaa wa Nuru',
    10: 'Kiumbe Kipya',
    11: 'Ujasiri wa Simba',
    12: 'Mlango wa Hekima',
    13: 'Mbingu Mpya',
    14: 'Matukio ya Milele'
  },
  

  
  levels: {
    1: 'Umechukua hatua zako za kwanza katika nuru! Huko peke yako katika vita hivi.',
    2: 'Kama tai, Mungu anakutia nguvu! Anakuchagua kama unavyo, na udhaifu wako na uzuri wako.',
    3: 'Huko pasipo thamani, huko pasipo kukataliwa. Unapendwa bila kikomo!',
    4: 'Makosa yako hayakufafanui. Upendo wa Mungu unafuta kila kitu na kukufanya huru!',
    5: 'Umechaguliwa! Si kwa sababu ya ukamilifu wako, bali kwa neema safi.',
    6: 'Katika udhaifu wako, nguvu Yake inadhihirika. Unaweza yote, kwa sababu Yeye anakutia nguvu!',
    7: 'Changamoto zinazidi, lakini unacheza na vipengele!',
    8: 'Hauhitaji kuwa mkamilifu ili kupendwa. Tayari unapendwa kikamilifu!',
    9: 'Huko wenye dhambi nyingi sana kwa Mungu. Wewe ni shujaa Wake, mtoto Wake mpendwa!',
    10: 'Ya zamani yamepita, tazama yampya! Unazaliwa upya katika nuru ya kimungu.',
    11: 'Inuka kwa ujasiri! Una thamani, una uwezo, una ushindi!',
    12: 'Biblia si kitabu cha hukumu, bali hazina ya upendo kwako! Ifungue kwa ujasiri.',
    13: 'Unakaribia kilele! Soma Biblia kama mshindi, si kama mtu aliyehukumiwa. Umechaguliwa na unapendwa!',
    14: 'Changamoto ya mwisho kabla ya ushindi kamili! Biblia inakungoja, imeandikwa kwa ajili yako, shujaa wa nuru! Endelea, karibu uko kilele!'
  },
  
  victory_message: 'USHINDI! Umegeuza giza kuwa nuru! Sasa, fungua Biblia yako kwa ujasiri: umechaguliwa, unapendwa, una ushindi! "Maisha ni aventure ya kipekee" - Zaburi 99:1 anasema Origeni. Amani na upendo uitawale moyoni mwako!',
  
  infinite_messages: [
    'Endelea na adventure yako! Kila wingu lililoondolewa ni ushindi!',
    'Wewe ni bingwa wa nuru! Endelea na utafutaji wako!',
    'Usio na mwisho ni wako! Imani yako iongezeke zaidi!',
    'Unapita mipaka yote! Bravo, shujaa wa milele!',
    'Uvumilivu wako ni wa kushangaza! Endelea kuangaza!'
  ],

  popups: {
    not_connected: '⚠️ Haujaungana!\n\nUnganisha kwanza kupitia menyu ya Hazina.',
    no_data_to_save: '⚠️ Hakuna data ya kuhifadhi\n\nCheza kwanza ili kuunda data!',
    saving: '⏳ Inahifadhi...',
    save_failed: '❌ Imeshindwa kuhifadhi!\n\n{error}',
    save_error: '❌ Kosa la kuhifadhi!\n\n{error}',
    data_imported: '✅ Data imeingizwa kwa mafanikio!',
    invalid_file: '❌ Faili si sahihi',
    enter_nickname_email: '❌ Tafadhali ingiza jina la utani NA barua pepe!',
    invalid_email: '❌ Barua pepe si sahihi!',
    connected_local_saved: '✅ Imeunganishwa!\n\nData ya ndani imehifadhiwa kwenye wingu.',
    connected_cloud_restored: '✅ Imeunganishwa!\n\nData ya wingu imerejeeshwa.',
    connected_success: '✅ Imeunganishwa kwa mafanikio!\n\nMaendeleo yako yatahifadhiwa kiotomatiki mtandaoni.',
    reset_confirm: '⚠️ Je, una uhakika unataka kuseti upya data yako yote?',
    data_conflict: '⚠️ Mgongano wa data umegunduliwa!\n\nData ya ndani: Alama {localScore}, Kiwango {localLevel}\nData ya wingu: Alama {cloudScore}, Kiwango {cloudLevel}\n\nToleo lipi la kuhifadhi?',
    connection_error: '❌ Kosa la muunganisho:\n{error}'
  },

  testimony: {
    title: '💎 Hazina ya Uzima - Emmanuel',
    paragraph1: 'Kulikuwa na wakati ambapo ugonjwa ulinitenganisha vibaya na mawingu meusi yalikuja kuvamia maisha yangu. Nilijaribu kukata tamaa lakini kabla ya hilo nilimlilia Mungu! <strong>Ni kwako ninakupa uzima wangu si kwa vivuli viovu.</strong>',
    paragraph2: 'Kama maombi, kilio changu kilisikika na maisha yangu yalibadilika tangu siku ile nilipojua moyoni mwangu kwamba <em>ninapendwa kama nilivyo</em>. Kazi ndefu ya imani, ujasiri na mabadiliko ilianza ndani yangu.',
    paragraph3: 'Nilijifunza kutoka makosa, nilijifunza kutorudi nyuma bila kusahau. Lakini zaidi ya yote nilijifunza kuangalia mustakabali kwa uvumilivu, tumaini na furaha.',
    paragraph4: 'Furaha niliyoipata katika kumsifu na kumwabudu Mungu mwokozi, yeye aliyeninyooshea mkono wakati hakuna mtu aliyeweza kuwepo kwa ajili yangu. Aliniondoa katika bonde la mauti na kunifanya nione kinachofaa kweli: <strong>maisha rahisi, ya kawaida</strong>.',
    paragraph5: 'Niliona zaidi ya tamaa zangu za kimwili, niliona kwamba nilihitaji kuangalia ninachomiliki na si nisichomiliki. Na kupenda ninachokuwa, kama ninavyotaka kuwa. <em>Niliona tumaini uso kwa uso.</em>',
    paragraph6: 'Niliomba na nikapokea majibu yasiyoelezeka ambayo yalizalisha ndani yangu imani isiyotikisika. Kupitia magumu nilikua na sijutii kuwa mvumilivu, kutumaini tena na tena kwa sababu <strong>kila kilima kilifunikwa na hazina za uzima</strong>, kila mlima ulioshindwa kwa ujasiri wa kusonga ulileta mustakabali bora, kumbukumbu za maisha ya ajabu, mikutano na maeneo ya ajabu.',
    final_message: '🕊️ Ndiyo maana Yesu anakuambia: Usikate tamaa kamwe, vumilia hadi lisilowezekana! 🕊️'
  },

  life_tips: {
    faith: {
      title: '✝️ Ushauri wa Imani',
      tip1: '💫 "Imani ni uhakika wa mambo tunayotumaini" - Waebrania 11:1',
      tip2: '🙏 Ombea kila siku, hata dakika chache zinatosha kuimarisha roho yako',
      tip3: '📖 Soma Biblia mara kwa mara kulisha imani yako na kupata majibu',
      tip4: '✨ Mwamini Mungu katika nyakati ngumu, Ana mpango kwako',
      tip5: '🌟 Jizungushe na waamini wanaokutia moyo katika imani yako'
    },
    courage: {
      title: '💪 Ushauri wa Ujasiri',
      tip1: '🦁 "Uwe hodari na jasiri, usiogope" - Yoshua 1:9',
      tip2: '🔥 Kabiliana na hofu zako moja kwa moja, kila ushindi mdogo unahesabiwa',
      tip3: '🎯 Weka malengo wazi na usogee hatua kwa hatua kuelekea kwao',
      tip4: '👊 Usikate tamaa kamwe, hata kama ni vigumu - uvumilivu hulipwa',
      tip5: '⭐ Kumbuka mafanikio yako ya zamani kupata nguvu ya kuendelea'
    },
    peace: {
      title: '🕊️ Ushauri wa Amani',
      tip1: '🌿 "Amani yangu ninawaacha, amani yangu ninawapa" - Yohana 14:27',
      tip2: '🧘 Chukua muda kila siku kupumzika na kutafakari',
      tip3: '🌺 Wasamehe wale waliokuumiza, jiachie mzigo wa chuki',
      tip4: '🌈 Tafuta amani katika mambo madogo: asili, muziki, maombi',
      tip5: '💕 Jizungushe na watu chanya wanakuletea utulivu'
    },
    love: {
      title: '❤️ Ushauri wa Upendo',
      tip1: '💖 "Pendaneni kama nilivyowapenda" - Yohana 13:34',
      tip2: '🤝 Onyesha wema kwa wote, hata wale walio tofauti',
      tip3: '🎁 Toa bila kutarajia chochote kinyume, upendo wa kweli ni wa kujitoa',
      tip4: '👂 Sikiliza wengine kwa kweli, uwepo kwa wale wanaoteseka',
      tip5: '✨ Anza kwa kujipenda: Wewe ni wa thamani machoni pa Mungu'
    }
  },

  ranks: {
    1: {
      title: 'KADETI - Kuruka kwa Kwanza',
      message: 'Safari yako ya mbinguni inaanza. Chukua udhibiti na jifunze kuruka kati ya mawingu. Kila dhamira inakupeleka karibu na hatima yako.'
    },
    2: {
      title: 'RUBANI MWANAFUNZI - Katika Mafunzo',
      message: 'Unaendelea haraka! Ujuzi wako unakua, ujasiri wako unaimarika. Endelea kupaa juu zaidi.'
    },
    3: {
      title: 'RUBANI - Ubatizo wa Anga',
      message: 'Mabawa yako yanaenea kwa ujasiri! Unashinda misingi ya kuruka na kugundua uhuru wa mbingu.'
    },
    4: {
      title: 'RUBANI MTAALAMU - Msafiri Mstadi',
      message: 'Upepo unakujua, mawingu yanakuheshimu! Unasafiri kwa urahisi kupitia mikondo ya mbinguni.'
    },
    5: {
      title: 'BINGWA WA ANGA - Mstadi wa Mabawa',
      message: 'Unacheza kati ya mawingu kama bwana! Majibu yako yanakuwa makali, usahihi wako unakuwa hadithi.'
    },
    6: {
      title: 'KIKOSI CHA WASOMI - Jeshi la Anga',
      message: 'Wewe ni miongoni mwa bora! Ujuzi wako unawahamasisha warubani wengine. Unaruka kwa neema takatifu.'
    },
    7: {
      title: 'JEMADARI - Mkakati wa Mbinguni',
      message: 'Unapewa dhamira za kimkakati! Unaongoza anga kwa hekima na ujasiri, ukiongozwa na nuru takatifu.'
    },
    8: {
      title: 'MKAKATI WA MAWINGU - Bwana Mkakati',
      message: 'Unatarajia kila hatua! Akili yako ya kimkakati na maono ya kimkakati yanazidi kawaida.'
    },
    9: {
      title: 'MZOEFU - Aliyeundwa na Dhoruba',
      message: 'Umepita dhoruba elfu! Kila kovu linasimulia hadithi ya ushindi. Wewe ni hadithi hai ya mbingu.'
    },
    10: {
      title: 'SHUJAA WA MBINGUNI - Bingwa Maarufu',
      message: 'Matendo yako yanaimbwa katika falme zote! Unawakilisha ujasiri na azimio lisilo na kusita.'
    },
    11: {
      title: 'HADITHI - Hadithi Hai',
      message: 'Jina lako linaangika katika mbingu zote! Wakadeti wanaota kuwa kama wewe. Unawakilisha ubora na neema.'
    },
    12: {
      title: 'BINGWA WA MILELE - Utukufu Usiokufa',
      message: 'Sifa yako inazidi nyakati! Urithi wako utahamasisha vizazi vijavyo vya warubani wa mbinguni.'
    },
    13: {
      title: 'BWANA RUBANI - Wimbo wa Angani',
      message: 'Haurukaruki tena, unatengeneza wimbo wa mbinguni! Kila harakati ni ukamilifu, kila dhamira ni kipaji.'
    },
    14: {
      title: 'BAWA LA ANGA - Mlind wa Milele',
      message: 'Umezidi kufa! Mlinzi wa mbinguni, mlinzi wa anga, kuruka kwako sasa ni milele. Usio na kikomo ni wako!'
    }
  },

  level_titles: {
    1: 'Mapambazuko ya Tumaini',
    2: 'Pumzi ya Kimungu',
    3: 'Mabawa ya Imani',
    4: 'Kuruka kwa Roho',
    5: 'Wito wa Mbinguni',
    6: 'Nguvu Kutoka Juu',
    7: 'Baada ya Dhoruba',
    8: 'Upendo Unashinda',
    9: 'Njia ya Imani',
    10: 'Kiumbe Kipya',
    11: 'Ujasiri wa Shujaa',
    12: 'Nuru ya Kimungu',
    13: 'Watu Waliochaguliwa',
    14: 'Safari ya Milele'
  },
  
  verses: {
    level: {
      1: { text: 'Nuru inaangaza gizani', reference: 'Yohana 1:5' },
      2: { text: 'Roho wa Mungu alikuwa akielea juu ya maji', reference: 'Mwanzo 1:2' },
      3: { text: 'Wale wamngojao Bwana watapaa mabawa kama tai', reference: 'Isaya 40:31' },
      4: { text: 'Mahali Roho wa Bwana alipo, papo uhuru', reference: '2 Wakorintho 3:17' },
      5: { text: 'Nimekuita kwa jina lako, wewe ni wangu', reference: 'Isaya 43:1' },
      6: { text: 'Naweza kufanya mambo yote katika yeye anayenipa nguvu', reference: 'Wafilipi 4:13' },
      7: { text: 'Baada ya mvua kuna jua', reference: 'Ayubu 37:11' },
      8: { text: 'Upendo haushindwi kamwe', reference: '1 Wakorintho 13:8' },
      9: { text: 'Imani yako imekuokoa', reference: 'Luka 7:50' },
      10: { text: 'Kama mtu yuko katika Kristo, ni kiumbe kipya', reference: '2 Wakorintho 5:17' },
      11: { text: 'Uwe hodari na ujasiri', reference: 'Yoshua 1:9' },
      12: { text: 'Neno lako ni taa ya miguu yangu', reference: 'Zaburi 119:105' },
      13: { text: 'Ninyi ni taifa liliochaguliwa', reference: '1 Petro 2:9' },
      14: { text: 'Maisha ni safari ya ajabu', reference: 'Zaburi 99:1 (anasema Origen)' }
    },
    rank: {
      1: { text: 'Bwana alionitokea kwa mbali, akasema: "Nimekupenda kwa upendo wa milele; kwa hiyo nimekuvuta kwa fadhili.', reference: 'Yeremia 31:3' },
      2: { text: 'Huwapa nguvu waliolegea, na huwazidishia wenye kuwa dhaifu.', reference: 'Isaya 40:29' },
      3: { text: 'Wale wanaomngojea Bwana watafanya upya nguvu, watapaa juu kama tai', reference: 'Isaya 40:31' },
      4: { text: 'Mahali pana Roho wa Bwana, hapo pana uhuru', reference: '2 Wakorintho 3:17' },
      5: { text: 'Nimekuita kwa jina lako, wewe ni wangu', reference: 'Isaya 43:1' },
      6: { text: 'Ninaweza yote katika yeye anayenipa nguvu', reference: 'Wafilipi 4:13' },
      7: { text: 'Kwa maana Mungu si wa machafuko, bali wa amani', reference: '1 Wakorintho 14:33' },
      8: { text: 'Usiogope, kwa maana mimi niko pamoja nawe', reference: 'Isaya 41:10' },
      9: { text: 'Uwe hodari na wa moyo mkuu', reference: 'Yoshua 1:9' },
      10: { text: 'Imani yako imekuokoa', reference: 'Luka 7:50' },
      11: { text: 'Kwa hiyo mtu yeyote aliye katika Kristo ni kiumbe kipya', reference: '2 Wakorintho 5:17' },
      12: { text: 'Lakini ninyi ni watu waliochaguliwa, ukuhani wa kifalme', reference: '1 Petro 2:9' },
      13: { text: 'Baada ya mvua jua huja', reference: 'Ayubu 37:11' },
      14: { text: 'Upendo haushindwi kamwe', reference: '1 Wakorintho 13:8' }
    },
    infinite: [
      { text: 'Mioyo yenu isifadhaike', reference: 'Yohana 14:1' },
      { text: 'Niko pamoja nanyi sikuzote', reference: 'Mathayo 28:20' },
      { text: 'Bwana ni mwanga wangu na wokovu wangu', reference: 'Zaburi 27:1' },
      { text: 'Ninyi ni nuru ya ulimwengu', reference: 'Mathayo 5:14' },
      { text: 'Upendo hufunika dhambi nyingi', reference: '1 Petro 4:8' },
      { text: 'Kwa maana Mungu aliupenda ulimwengu', reference: 'Yohana 3:16' },
      { text: 'Tafuteni kwanza ufalme wa Mungu', reference: 'Mathayo 6:33' },
      { text: 'Mwenye haki ataishi kwa imani', reference: 'Warumi 1:17' },
      { text: 'Yote yawezekana kwa yeye aaminiye', reference: 'Marko 9:23' },
      { text: 'Mungu ni upendo', reference: '1 Yohana 4:8' },
      { text: 'Hakuna kitakachoweza kutuseparate na upendo wa Mungu', reference: 'Warumi 8:39' },
      { text: 'Tembeeni katika Roho', reference: 'Wagalatia 5:16' },
      { text: 'Furahini daima katika Bwana', reference: 'Wafilipi 4:4' },
      { text: 'Amani ya Mungu italinda mioyo yenu', reference: 'Wafilipi 4:7' },
      { text: 'Usiogope, kwa maana mimi niko pamoja nawe', reference: 'Isaya 41:10' },
      { text: 'Bwana ni nguvu yangu na ngao yangu', reference: 'Zaburi 28:7' },
      { text: 'Heri wenye moyo safi', reference: 'Mathayo 5:8' },
      { text: 'Tumaini haliaibishi', reference: 'Warumi 5:5' },
      { text: 'Yote myafanyeni kwa upendo', reference: '1 Wakorintho 16:14' },
      { text: 'Neema ya Bwana iwe pamoja nanyi', reference: '1 Wakorintho 16:23' }
    ]
  },

  bosses: {
    victory_title: '🏆 USHINDI 🏆',
    spiritual_victory: '🌟 Ushindi wa Kiroho 🌟',
    phase_1: '⚔️ Awamu 1',
    phase_2: '⚔️ Awamu 2',
    phase_3: '⚔️ Awamu 3',
    spider: {
      name: '🕷️ Buibui wa Giza',
      intro: 'Buibui mkubwa anafuma utando wa hofu... Lakini "Mungu hakutupa roho ya hofu"!',
      phase_1: '🕸️ "Kwa maana Mungu hakutupa roho ya hofu, bali ya nguvu, na ya upendo, na ya kiasi." (2 Timotheo 1:7)\n\nHOFU YA MAUMIVU, HOFU YA KUUMWA... Hofu hizi zinakufanya usiende mbele!',
      phase_2: '✨ "Usiogope, kwa kuwa mimi niko pamoja nawe; usitetemeke, kwa kuwa mimi ndimi Mungu wako." (Isaya 41:10)\n\nHOFU ZISIZO NA MANTIKI na PHOBIA hazina nguvu juu ya wanaotembea kwa imani!',
      phase_3: '🛡️ "Hata nikienda katika bonde la uvuli wa mauti, sitaogopa mabaya, kwa kuwa wewe u pamoja nami." (Zaburi 23:4)\n\nHofu ni ULINZI, lakini haipaswi KUKUTAWALA!',
      defeated: '🦋 USHINDI JUU YA HOFU!\n\n"Kwa maana Mungu hakutupa roho ya hofu, bali roho ya nguvu, upendo, na kiasi." (2 Timotheo 1:7)\n\nUmeshinda hofu inayofanya usiende mbele! Katika Kristo, unatembea kwa nguvu na ujasiri.',
      wisdom: 'Buibui anaashiria hofu zetu zote: hofu ya maumivu, ya kuumwa, phobia zisizo na mantiki. Hofu hizi mara nyingi ni ulinzi wa kawaida unaotulinda na hatari. Lakini zinapokuwa nyingi sana, zinatufanya tusiende mbele. Biblia inasema: "Mungu hakutupa roho ya hofu, bali ya nguvu, upendo, na kiasi." Imani haikanushi hatari, lakini inatupa ujasiri wa kuikabili. Katika Kristo, tunajifunza kutofautisha uangalifu mzuri na hofu inayofanya tusiende mbele. Upendo kamilifu wa Mungu hufukuza hofu!'
    },
    flying_snake: {
      name: '🐍 Nyoka wa Kuruka',
      intro: 'Nyoka wa kale, ishara ya majaribu, anainuka mbele yako... Lakini "mpingeni shetani, naye atawakimbieni"!',
      phase_1: '🔥 "Kesheni na kusali, ili msije mkaingia katika majaribu." (Mathayo 26:41)\n\nMAJARIBU, UONGO WA KWANZA, SHAKA inasema: "Je, kweli Mungu alisema...?"',
      phase_2: '⚔️ "Mpingeni shetani, naye atawakimbieni. Mkaribie Mungu, naye atawakaribieni." (Yakobo 4:7-8)\n\nSUMU YA MPATANISHO na KUTOTII haiwezi kuwafikia wanaokaa karibu na Mungu!',
      phase_3: '✝️ "Na kama vile Musa alivyomwinua yule nyoka jangwani, ndivyo Mwana wa Adamu apasavyo kuinuliwa." (Yohana 3:14)\n\nKristo ALIPONDA kichwa cha nyoka! Ushindi wake ni ushindi wako!',
      defeated: '🌟 USHINDI JUU YA MAJARIBU!\n\n"Naye atakuponda kichwa, nawe utamponda kisigino." (Mwanzo 3:15)\n\nUmeshinda majaribu! Katika Kristo, nyoka wa kale ameshindwa.',
      wisdom: 'Nyoka wa kuruka anawakilisha majaribu na uongo wa kwanza kutoka Bustani ya Edeni: "Hamtakufa... mtakuwa kama Mungu." Hii ni sauti inayopanda shaka katika wema wa Mungu, inayotusukuma kwa mpatanisho na kutotii. Lakini Biblia inafundisha: "Mpingeni shetani, naye atakimbilia mbali." Majaribu si dhambi - ni mwaliko wa dhambi. Yesu mwenyewe alijaribiwa, lakini alipinga kwa Neno la Mungu. Msalabani, Kristo aliponda kichwa cha nyoka. Kwa ushindi wake, tuna nguvu ya kupinga na kushinda kila jaribu. Mkaribie Mungu, naye atawakaribieni!'
    },
    crazy_chicken: {
      name: '🐔 Kuku wa Wazimu',
      intro: 'Kuku anayepiga kelele anakimbia kila mahali... Hofu za uongo zinakufanya wazimu na kukufanya usiende mbele!',
      phase_1: '😰 "Kwa maana Mungu hakutupa roho ya hofu, bali ya nguvu, na ya upendo, na ya kiasi." (2 Timotheo 1:7)\n\nHOFU ZA UONGO ZA KIBINAFSI: "Je, kama...?", "Labda...", "Ninaogopa kwamba..." - hofu za KUFIKIRIKA zinazokuzuia!',
      phase_2: '🧠 "Msihangaike kwa jambo lolote, bali katika kila jambo kwa sala na dua pamoja na shukrani, ombi lenu lifahamike kwa Mungu." (Wafilipi 4:6)\n\nMITAZAMO YA MAJANGA akilini, HOFU ZISIZO NA MANTIKI zinazofanya wazimu! SIMAMA!',
      phase_3: '✨ "Kwa kuwa Mungu ndiye afanyaye ndani yenu kuwataka na kufanya kadiri ya mpendezapo." (Wafilipi 2:13)\n\nHofu hizi za kibinafsi SI UKWELI! Mungu alikupa HEKIMA, si WAZIMU!',
      defeated: '🦅 USHINDI JUU YA HOFU ZA UONGO!\n\n"Usiogope, kwa kuwa mimi niko pamoja nawe." (Isaya 41:10)\n\nUmeshinda hofu za kufikirika! Sasa unatembea katika hekima, si wazimu.',
      wisdom: 'Kuku wa wazimu anawakilisha hofu za uongo za kibinafsi zinazotufanya wazimu: "Je, kama nitashindwa?", "Je, kama watu watanihukumu?", "Je, kama si mzuri vya kutosha?". Hofu hizi za kufikirika, mitazamo hii ya majanga katika vichwa vyetu inatufanya tusiende mbele na kutuzuia. Tunapiga kelele kama kuku anayeogopa mambo ambayo labda hayatatokea kamwe! Biblia inasema: "Mungu hakutupa roho ya hofu, bali ya nguvu, upendo, na kiasi." 95% ya hofu zetu hazitokei kamwe. Hofu hizi za kibinafsi si ukweli - ni uongo wa adui kuzuia maendeleo yetu. "Msihangaike kwa jambo lolote" - Mungu anatuita kubadilisha hofu za uongo kwa imani, wasiwasi kwa amani, mitazamo ya majanga kwa kutumaini katika ulinzi wake.'
    },
    grim_reaper: {
      name: '💀 Mvunaji wa Mauti',
      intro: 'Mauti yenyewe inasimama mbele yako... Lakini kumbuka: Kristo ameshinda mauti!',
      phase_1: '🕊️ "Ee mauti, ushindi wako u wapi? Ee mauti, mshale wako u wapi?" (1 Wakorintho 15:55)\n\nHofu ya mauti haina nguvu juu ya wanaosadiki uzima wa milele!',
      phase_2: '✝️ "Yesu akamwambia: Mimi ndimi ufufuo na uzima; yeye aniaminiye mimi, hata akifa, ataishi." (Yohana 11:25)\n\nUzima daima unashinda giza! Kila wakati ni USHINDI!',
      phase_3: '🌟 "Utufundishe kuhesabu siku zetu, ili tujipatie moyo wa hekima." (Zaburi 90:12)\n\nHaijalishi muda uliobaki - ISHI KIKAMILIFU! Kila siku ni ZAWADI!',
      defeated: '🙏 USHINDI JUU YA MAUTI!\n\n"Basi, sasa hakuna hukumu kwa wale walio ndani ya Kristo Yesu." (Warumi 8:1)\n\nUmeshinda hofu! Uzima wa milele ni wako kwa neema ya Mungu.',
      wisdom: 'Mauti si mwisho, bali mabadiliko. Kwa njia ya Kristo, tunapita kutoka uzima wa dunia hadi uzima wa milele. Haijalishi muda tuliobaki au jinsi tunavyoishi - bora zaidi ni kuishi kila wakati kama ushindi, kila mwaka kama zawadi. Hata katika ugonjwa, hata katika majaribu, TUMAINI na MATUMAINI MAZURI yanatupa mabawa na kufanya yasiyowezekana mara nyingi yawezekane! Biblia inasema: "Utufundishe kuhesabu siku zetu, ili tujipatie moyo wa hekima." Kila siku ni ya thamani. Kila pumzi ni neema. Imani ya Kikristo inatufundisha kwamba mauti ilishindwa Msalabani, na tumaini la ufufuo linaangaza njia yetu. Kwa hiyo, tuishi kikamilifu, kwa furaha na shukrani, kwa kuwa "Hii ndiyo siku aliyoifanya Bwana; na tufurahi na kushangilia katika siku hiyo!" (Zaburi 118:24)'
    },
    wall: {
      name: '🧱 Ukuta wa Minyororo',
      intro: 'Ukuta wa hofu na mashaka unasimama mbele yako... Lakini "mahali alipo Roho wa Bwana, papo uhuru"!',
      phase_1: '⛓️ "Simameni basi katika uhuru ambao Kristo alitufunguliao, wala msirudi tena kufungwa katika nira ya utumwa." (Wagalatia 5:1)\n\nMINYORORO YA HOFU, MASHAKA na AIBU haina nguvu juu yako!',
      phase_2: '🔓 "Kwa hiyo, Mwana akiwaacheni huru, mtakuwa huru kweli." (Yohana 8:36)\n\nKila mnyororo uliovunjika ni ushindi juu ya uongo wa adui!',
      phase_3: '✨ "Naweza kufanya mambo yote kwa yeye anitiaye nguvu." (Wafilipi 4:13)\n\nUkweli wa Mungu unabomoa ngome na kuta zinazokufunga!',
      defeated: '🎉 UHURU KATIKA KRISTO!\n\n"Nanyi mtaitambua kweli, na kweli itawafanya huru." (Yohana 8:32)\n\nUmevunja minyororo! Uko huru kwa nguvu ya upendo wa Mungu.',
      wisdom: 'Hofu ni kama minyororo isiyoonekana inayotuzuia kusonga mbele. Biblia inatufundisha: "Mungu hakutupa roho ya hofu, bali ya nguvu, upendo, na kiasi." Kila hofu iliyoshindwa kwa imani ni mnyororo uliov unjwa. Katika Kristo, tumeamriwa kuishi katika uhuru, wamefunguliwa kutoka kwa uongo unaotufunga. Ukweli unatufanya huru!'
    },
    dark_cloud: {
      name: '☁️ Wingu Jeusi',
      intro: 'Wingu la dhoruba linatishia kumeza kila kitu... Lakini "Mungu ni kimbilio letu na nguvu yetu, msaada katika shida"!',
      phase_1: '⚡ "Bwana yu karibu na wale wenye moyo uliovunjika, na huwaokoa walio na roho iliyopondeka." (Zaburi 34:18)\n\nKatika huzuni kuu zaidi, linda TUMAINI, IMANI na UPENDO wako!',
      phase_2: '🌩️ "Tunasononwa pande zote, lakini hatuonewi; tunashangaa, lakini hatukatishwi tamaa." (2 Wakorintho 4:8)\n\nUMEME WA MATESO hauwezi kuzima nuru ya Mungu ndani yako!',
      phase_3: '⛈️ "Mambo haya nimewaambia ninyi, ili mpate kuwa na amani ndani yangu. Ulimwenguni mtakuwa na dhiki; lakini jipeni moyo, mimi nimeiushinda dunia." (Yohana 16:33)\n\nHata katika dhoruba kubwa zaidi, Kristo ni nanga yako!',
      defeated: '🌈 USHINDI JUU YA DHORUBA!\n\n"Baada ya mvua huja jua. Anatawanya mawingu kwa nuru yake." (Ayubu 37:11-15)\n\nUmepita dhoruba! Tumaini linaangaza tena, nguvu zaidi kuliko hapo awali.',
      wisdom: 'Huzuni kuu, hasara kubwa na hofu za ghafula ni kama dhoruba zinazofanya anga yetu ya ndani kuwa giza. Lakini Biblia inatukumbusha: "Yeye akaaye katika sitara ya Yeye Aliye juu sana, atakaa chini ya kivuli cha Mwenyezi." Katika nyakati za giza zaidi, tumaini, imani na upendo ni mianga tunayohitaji kulinda. Mungu kamwe hawachi watoto wake katika dhoruba - Yeye ni kimbilio letu, nguvu yetu, na baada ya kila dhoruba, Yeye huangaza upinde wa ahadi zake.'
    },
    black_raven: {
      name: '🐦‍⬛ Kunguru wa Uongo',
      intro: 'Kunguru mweusi anatema uongo kuhusu utambulisho wako... Lakini "wewe ni wa thamani machoni pangu, na mimi nimekupenda"!',
      phase_1: '🪶 "Nitakusifu, kwa kuwa nimeumbwa kwa njia ya ajabu na ya kustaajabisha. Kazi zako ni za ajabu." (Zaburi 139:14)\n\nUongo unasema: SI MZURI VYA KUTOSHA, SI TAJIRI VYA KUTOSHA, SI WA KAWAIDA...\nLakini UKWELI wa Mungu unasema: UNA THAMANI!',
      phase_2: '✝️ "Tazameni upendo wa namna gani Baba aliotupa, ili tuitwe watoto wa Mungu, nasi ni hao." (1 Yohana 3:1)\n\nUongo unapiga kelele: HUNA THAMANI, TOFAUTI SANA, MWENYE DHAMBI SANA...\nLakini Mungu anasema: WEWE NI MTOTO WANGU MPENDWA!',
      phase_3: '👑 "Lakini ninyi ni taifa liliochaguliwa, ukuhani wa kimfalme, taifa takatifu, watu wa Mungu mwenyewe." (1 Petro 2:9)\n\nUongo unapiga mayowe: MBAYA SANA, USIYE STAHILI, UMEKATALIWA...\nLakini Kristo anatangaza: UMECHAGULIWA, UNA HESHIMA YA KIFALME, UMEPENDWA!',
      defeated: '🌟 USHINDI JUU YA UONGO!\n\n"Nanyi mtaitambua kweli, na kweli itawafanya huru." (Yohana 8:32)\n\nUmeshinda uongo! Sasa unajua utambulisho wako wa kweli katika Kristo.',
      wisdom: 'Kunguru wa uongo anawakilisha mashtaka yote na imani za uongo ambazo adui anatumia kuharibu utambulisho wetu: "si mzuri vya kutosha", "si tajiri vya kutosha", "tofauti sana", "mwenye dhambi sana". Uongo huu ni mishale yenye sumu inayoelekezwa mioyoni mwetu. Lakini Biblia inatufunulia UKWELI: tumeumbwa katika mfano wa Mungu, tumekombolewa kwa damu ya Kristo, tumekubalika kama watoto wa Mungu. Thamani yetu haitegemei sura yetu, utajiri au makosa - inatoka kwa upendo wa Mungu usio na masharti. Katika Kristo, tuna thamani, tunapendwa, tumechaguliwa, tuna heshima ya kifalme. Huu ndio utambulisho wetu wa kweli!'
    }
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = sw;
}
