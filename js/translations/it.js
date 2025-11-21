// ============================================
// 🇮🇹 ITALIANO - DOVE OF HOPE
// ============================================

const it = {
  code: 'it',
  name: 'Italiano',
  flag: '🇮🇹',
  
  ui: {
    score: 'Punteggio',
    clouds: 'Nuvole',
    level: 'Capitolo',
    lives: 'Vita',
    language: 'Lingua',
    choose_language: 'Scegli lingua',
    language_changed: 'Lingua cambiata'
  },
  
  buttons: {
    start: 'Accendilo!',
    play: 'GIOCA',
    restart: 'RIGIOCA',
    infinite_mode: 'Modalità Infinita',
    close: 'Chiudi',
    start_bonus: 'Inizia'
  },
  
  messages: {
    start: 'Vola, piccola colomba! Dissipa le nuvole!',
    restart: 'La colomba rinasce! Ripartiamo!',
    gameOver: 'Game Over! Ma nell\'avversità, brilli ancora di più!',
    victory: 'VITTORIA! Salmo 99,1 - La vita è un\'avventura straordinaria! - dice Origene',
    levelUp: 'Livello {level} - La luce cresce!',
    motivation: 'È tempo di accendere la luce - È un buon momento per realizzare i tuoi sogni!',
    welcome: 'Benvenuto, Cadetto Primo Volo!'
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
    'Danza con gli elementi, sei libero!'
  ],
  
  rain: [
    'Dopo la pioggia viene il sole!',
    'La tua fede è più forte della tempesta!',
    'La tempesta rivela la forza delle tue ali!'
  ],
  
  powerups: {
    try_again: 'Ma nell\'avversità, brilli ancora di più!',
    umbrella: 'Ombrello attivato! Danza con gli elementi!',
    speed: 'Velocità divina! Le tue ali sono libere!',
    multishot: 'Luce tripla! Il tuo cuore brilla!',
    rainbow: 'Scudo Arcobaleno attivato! Protezione divina!',
    star_collected: '⭐ Stella raccolta! ({count} in stock) - Doppio clic per onda d\'urto!',
    level_up: '✨ Livello {level}: {title}',
    new_record: '🏆 NUOVO RECORD! Punteggio: {score}',
    new_record_popup: '🎉 Nuovo record!\n\nPunteggio: {score}\n\nIl tuo punteggio è stato salvato.\nClicca su Esporta nel menu Tesoro per condividerlo.',
    infinite_mode: '🔄 Modalità Infinita attivata! Versetti ogni 100 nuvole ☁️',
    record_saved: '☁️ Record salvato!',
    heart: '💖 +1 Vita! La grazia di Dio ti protegge!',
    boss_defeated: '🏆 BOSS SCONFITTO! +{score} pts',
    storm_cleared: '🌈 La tempesta si dissipa! La speranza brilla di nuovo!',
    continue: '✨ Continua',
    save_system: '✨ Sistema di salvataggio'
  },
  
  bonus: {
    collect_blessings: 'Raccogli le benedizioni:',
    star: 'Stella',
    heart: 'Cuore',
    cross: 'Croce',
    rainbow: 'Arcobaleno',
    coin_trap: 'Moneta = -200 pti (TRAPPOLA!)',
    objective: 'Obiettivo:',
    objects: 'oggetti',
    level_title: 'LIVELLO BONUS'
  },
  
  treasure: {
    title: '💎 Menu Tesoro',
    my_records: '🏆 I Miei Record',
    best_score: 'Miglior Punteggio',
    max_level: 'Livello Massimo',
    star_stock: '⭐ Scorta di Stelle',
    chapters_conquered: '🏅 Capitoli Conquistati',
    chapters_completed: 'capitoli completati',
    infinite_progress: '♾️ Progresso Modalità Infinita',
    verse_collection: 'Raccolta di versetti casuali ogni 100 nuvole',
    xp_clouds: 'XP: {count} nuvole',
    next_verse: 'Prossimo verso tra: {count}',
    verses_collected: '📚 {count} versi raccolti',
    last_played: 'Ultima partita',
    creator: '✨ Creatore',
    creator_name: '🎮 Emmanuel Payet',
    creator_bio: 'Sviluppatore & Creatore di giochi ispirati',
    audiomack: '📱 Audiomack',
    creator_message: 'Che questo gioco ti ispiri e ti fortifichi! 🕊️',
    discover_artist: '🎵 Scoprire l\'Artista',
    cloud_connect: '☁️ Connettiti al cloud',
    cloud_manage: '☁️ Gestire la mia connessione',
    life_tips_faith: '✝️ Fede',
    life_tips_courage: '💪 Coraggio',
    life_tips_peace: '🕊️ Pace',
    life_tips_love: '❤️ Amore',
    life_tips_prompt: 'Clicca su una scheda per scoprire un consiglio di vita',
    infinite_chapter: 'Capitolo {number}',
    my_profile: 'Il Mio Profilo',
    nickname: 'Soprannome',
    email: 'Email',
    cloud_status: 'Cloud',
    connected: 'Connesso',
    disconnected: 'Disconnesso',
    highest_level: 'Miglior Punteggio',
    last_game: 'Ultima partita',
    testimonies_title: 'Testimonianze di Speranza',
    testimonies_description: 'Scopri storie di coraggio e guarigione',
    read_testimonies: 'Leggi testimonianze',
    save_cloud: 'Salva nel Cloud',
    share_score: 'Condividi il mio punteggio',
    not_set: 'Non definito'
  },
  
  intro: 'La vita è spesso una lunga battaglia, ci vuole coraggio e forza per resistere nei giorni difficili. Valoroso eroe, alzati, e con l\'amore di Dio trasforma le nuvole grigie in bene.',
  
  clouds_cleared: '{count} nuvole dissipate',
  transform_clouds: 'Trasforma le nuvole grigie',  level_titles: {
    1: 'Alba della Speranza',
    2: 'Soffio Divino',
    3: 'Ali di Fede',
    4: 'Perdono e Libertà',
    5: 'Scelto e Prezioso',
    6: 'Forza Interiore',
    7: 'Tempesta di Grazia',
    8: 'Amore Incondizionato',
    9: 'Eroe di Luce',
    10: 'Nuova Creatura',
    11: 'Coraggio del Leone',
    12: 'Porta della Saggezza',
    13: 'Nuovo Cielo',
    14: 'L\'Avventura Eterna'
  },
  

  
  levels: {
    1: 'Hai fatto i tuoi primi passi nella luce! Non sei solo in questa battaglia.',
    2: 'Come un\'aquila, Dio ti fortifica! Ti sceglie così come sei, con le tue debolezze e la tua bellezza.',
    3: 'Non sei inutile, non sei rifiutato. Sei infinitamente amato!',
    4: 'I tuoi errori non ti definiscono. L\'amore di Dio cancella tutto e ti rende libero!',
    5: 'Sei scelto! Non per la tua perfezione, ma per pura grazia.',
    6: 'Nella tua debolezza, si rivela la Sua forza. Puoi tutto, perché Lui ti fortifica!',
    7: 'Le sfide si moltiplicano, ma tu danzi con gli elementi!',
    8: 'Non hai bisogno di essere perfetto per essere amato. Sei già perfettamente amato!',
    9: 'Non sei troppo peccatore per Dio. Sei il Suo eroe, il Suo figlio amato!',
    10: 'Il vecchio è passato, ecco il nuovo! Rinasci nella luce divina.',
    11: 'Alzati con coraggio! Sei degno, sei capace, sei vittorioso!',
    12: 'La Bibbia non è un libro di giudizio, ma un tesoro d\'amore per te! Aprila con fiducia.',
    13: 'Ti avvicini alla vetta! Leggi la Bibbia come un vincitore, non come un condannato. Sei scelto e amato!',
    14: 'Ultima sfida prima della vittoria totale! La Bibbia ti aspetta, è scritta per te, eroe di luce! Continua, sei quasi in cima!'
  },
  
  victory_message: 'VITTORIA! Hai trasformato le tenebre in luce! Ora, apri la tua Bibbia con fiducia: sei scelto, sei amato, sei vittorioso! "La vita è un\'avventura straordinaria" - Salmo 99:1 dice Origene. Possano pace e amore regnare nel tuo cuore!',
  
  infinite_messages: [
    'Continua la tua avventura! Ogni nuvola dissolta è una vittoria!',
    'Sei un campione di luce! Prosegui la tua ricerca!',
    'L\'infinito ti appartiene! Che la tua fede cresca ancora!',
    'Superi tutti i limiti! Bravo, eroe eterno!',
    'La tua perseveranza è ammirevole! Continua a brillare!'
  ],

  popups: {
    not_connected: '⚠️ Non connesso!\n\nConnettiti prima tramite il menu Tesoro.',
    no_data_to_save: '⚠️ Nessun dato da salvare\n\nGioca prima per creare dati!',
    saving: '⏳ Salvataggio in corso...',
    save_failed: '❌ Salvataggio fallito!\n\n{error}',
    save_error: '❌ Errore di salvataggio!\n\n{error}',
    data_imported: '✅ Dati importati con successo!',
    invalid_file: '❌ File non valido',
    enter_nickname_email: '❌ Inserisci nickname E email!',
    invalid_email: '❌ Email non valida!',
    connected_local_saved: '✅ Connesso!\n\nDati locali salvati nel cloud.',
    connected_cloud_restored: '✅ Connesso!\n\nDati cloud ripristinati.',
    connected_success: '✅ Connesso con successo!\n\nI tuoi progressi verranno salvati automaticamente online.',
    reset_confirm: '⚠️ Vuoi davvero resettare tutti i tuoi dati?',
    data_conflict: '⚠️ Conflitto di dati rilevato!',
    connection_error: '❌ Errore di connessione'
  },

  testimony: {
    title: '💎 Tesoro di Vita - Emmanuel',
    paragraph1: 'C\'era un tempo in cui la malattia mi isolava terribilmente e nuvole oscure venivano a invadere la mia vita. Ho tentato di arrendermi ma prima ho gridato a Dio! <strong>È a te che dono la mia vita e non alle ombre insidiose.</strong>',
    paragraph2: 'Come una preghiera, il mio grido fu ascoltato e la mia vita cambiò dal giorno in cui seppi nel mio cuore che <em>sono amato come sono</em>. Un lungo lavoro di fiducia, coraggio e cambiamento iniziò in me.',
    paragraph3: 'Ho imparato dagli errori, ho imparato a non guardare sempre indietro senza mai dimenticare. Ma soprattutto ho imparato a guardare al futuro con pazienza, speranza e gioia.',
    paragraph4: 'Una gioia che ho ritrovato nella lode e nell\'adorazione di Dio salvatore, a colui che mi ha teso la mano quando nessuno poteva essere lì per me. Mi ha portato fuori dalla valle della morte e mi ha fatto vedere ciò che è veramente importante: <strong>la vita semplice, ordinaria</strong>.',
    paragraph5: 'Ho visto oltre i miei desideri materialisti, ho visto che dovevo guardare a ciò che ho e non a ciò che non ho. E amare ciò che sono, come voglio essere. <em>Ho visto la speranza faccia a faccia.</em>',
    paragraph6: 'Ho chiesto e ho ricevuto risposte ineffabili che hanno prodotto in me una fede incrollabile. Attraverso le difficoltà sono cresciuto e non mi pento di aver perseverato, sperato ancora e ancora perché <strong>ogni collina nascondeva tesori di vita</strong>, ogni montagna conquistata dal coraggio di muoversi ha portato un futuro migliore, ricordi di vita straordinaria, incontri e luoghi meravigliosi.',
    final_message: '🕊️ È per questo che Gesù ti dice: Non arrenderti mai, persevera fino all\'impossibile! 🕊️'
  },

  life_tips: {
    faith: {
      title: '✝️ Consigli di Fede',
      tip1: '💫 "La fede è certezza di cose che si sperano" - Ebrei 11:1',
      tip2: '🙏 Prega ogni giorno, anche pochi minuti sono sufficienti per fortificare la tua anima',
      tip3: '📖 Leggi la Bibbia regolarmente per nutrire la tua fede e trovare risposte',
      tip4: '✨ Confida in Dio nei momenti difficili, Lui ha un piano per te',
      tip5: '🌟 Circondati di credenti che ti incoraggiano nella tua fede'
    },
    courage: {
      title: '💪 Consigli di Coraggio',
      tip1: '🦁 "Sii forte e coraggioso, non temere" - Giosuè 1:9',
      tip2: '🔥 Affronta le tue paure una per una, ogni piccola vittoria conta',
      tip3: '🎯 Stabilisci obiettivi chiari e avanza passo dopo passo verso di essi',
      tip4: '👊 Non arrenderti mai, anche quando è difficile - la perseveranza ripaga',
      tip5: '⭐ Ricorda i tuoi successi passati per trovare la forza di continuare'
    },
    peace: {
      title: '🕊️ Consigli di Pace',
      tip1: '🌿 "Vi lascio la pace, vi do la mia pace" - Giovanni 14:27',
      tip2: '🧘 Prenditi del tempo ogni giorno per riposare e meditare',
      tip3: '🌺 Perdona coloro che ti hanno ferito, liberati dal peso del rancore',
      tip4: '🌈 Cerca la pace nelle piccole cose: la natura, la musica, la preghiera',
      tip5: '💕 Circondati di persone positive che ti portano serenità'
    },
    love: {
      title: '❤️ Consigli d\'Amore',
      tip1: '💖 "Amatevi gli uni gli altri come io ho amato voi" - Giovanni 13:34',
      tip2: '🤝 Mostra benevolenza verso tutti, anche verso chi è diverso',
      tip3: '🎁 Dona senza aspettarti nulla in cambio, l\'amore vero è disinteressato',
      tip4: '👂 Ascolta veramente gli altri, sii presente per chi soffre',
      tip5: '✨ Inizia ad amare te stesso: sei prezioso agli occhi di Dio'
    }
  },

  ranks: {
    1: {
      title: 'CADETTO - Primi Voli',
      message: 'Il tuo viaggio celeste inizia. Prendi i comandi e impara a navigare tra le nuvole. Ogni missione ti avvicina al tuo destino.'
    },
    2: {
      title: 'PILOTA APPRENDISTA - In Formazione',
      message: 'Progredisci rapidamente! La tua abilità cresce, la tua fiducia si rafforza. Continua a elevarti verso le altezze.'
    },
    3: {
      title: 'AVIATORE - Battesimo del Cielo',
      message: 'Le tue ali si aprono con sicurezza! Padroneggi le basi del volo e scopri la libertà dei cieli.'
    },
    4: {
      title: 'PILOTA CONFERMATO - Navigatore Esperto',
      message: 'I venti ti conoscono, le nuvole ti rispettano! Navighi con facilità nelle correnti celesti.'
    },
    5: {
      title: 'ASSO DEI CIELI - Virtuoso Alato',
      message: 'Danzi tra le nuvole come un maestro! I tuoi riflessi si affinano, la tua precisione diventa leggendaria.'
    },
    6: {
      title: 'SQUADRONE D\'ÉLITE - Forza Aerea',
      message: 'Fai parte dei migliori! La tua esperienza ispira gli altri piloti. Voli con una grazia divina.'
    },
    7: {
      title: 'COMANDANTE - Tattico Celeste',
      message: 'Ti vengono affidate missioni strategiche! Comandi il cielo con saggezza e coraggio, guidato dalla luce divina.'
    },
    8: {
      title: 'STRATEGA DELLE NUVOLE - Maestro Tattico',
      message: 'Anticipi ogni movimento! La tua intelligenza tattica e la tua visione strategica superano l\'ordinario.'
    },
    9: {
      title: 'VETERANO - Forgiato dalle Tempeste',
      message: 'Hai attraversato mille tempeste! Ogni cicatrice racconta una vittoria. Sei una leggenda vivente dei cieli.'
    },
    10: {
      title: 'EROE CELESTE - Campione Rinomato',
      message: 'Le tue imprese sono cantate in tutti i regni! Incarni il coraggio e la determinazione incrollabile.'
    },
    11: {
      title: 'LEGGENDA - Mito Incarnato',
      message: 'Il tuo nome risuona in tutti i cieli! I cadetti sognano di diventare come te. Incarni l\'eccellenza e la grazia.'
    },
    12: {
      title: 'CAMPIONE ETERNO - Gloria Immortale',
      message: 'La tua fama attraversa le ere! Il tuo lascito ispirerà le generazioni future di piloti celesti.'
    },
    13: {
      title: 'MAESTRO PILOTA - Sinfonia Aerea',
      message: 'Non voli più, componi una sinfonia celeste! Ogni movimento è perfezione, ogni missione un capolavoro.'
    },
    14: {
      title: 'ALA DEL CIELO - Guardiano Eterno',
      message: 'Hai trasceso la mortalità! Guardiano celeste, protettore dei cieli, il tuo volo è ora eterno. L\'infinito ti appartiene!'
    }
  },

  verses: {
    level: {
      1: { text: 'La luce risplende nelle tenebre', reference: 'Giovanni 1:5' },
      2: { text: 'Lo Spirito di Dio aleggiava sulle acque', reference: 'Genesi 1:2' },
      3: { text: 'Quelli che sperano nel Signore avranno ali come aquile', reference: 'Isaia 40:31' },
      4: { text: 'Dove c\'\u00e8 lo Spirito del Signore, lì c\'\u00e8 libertà', reference: '2 Corinzi 3:17' },
      5: { text: 'Ti ho chiamato per nome, tu sei mio', reference: 'Isaia 43:1' },
      6: { text: 'Tutto posso in Colui che mi fortifica', reference: 'Filippesi 4:13' },
      7: { text: 'Dopo la pioggia viene il sole', reference: 'Giobbe 37:11' },
      8: { text: 'L\'amore non viene mai meno', reference: '1 Corinzi 13:8' },
      9: { text: 'La tua fede ti ha salvato', reference: 'Luca 7:50' },
      10: { text: 'Se uno è in Cristo, è una nuova creatura', reference: '2 Corinzi 5:17' },
      11: { text: 'Sii forte e coraggioso', reference: 'Giosuè 1:9' },
      12: { text: 'La tua parola è lampada ai miei passi', reference: 'Salmo 119:105' },
      13: { text: 'Voi siete stirpe eletta', reference: '1 Pietro 2:9' },
      14: { text: 'La vita è un\'avventura straordinaria', reference: 'Salmo 99:1 (dice Origene)' }
    },
    rank: {
      1: { text: 'Da lontano, l\'Eterno si è rivelato a me: "Io ti amo di un amore eterno; perciò ti conservo la mia benevolenza."', reference: 'Geremia 31:3' },
      2: { text: 'L\'Eterno dà forza allo stanco e accresce il vigore a colui che è spossato.', reference: 'Isaia 40:29' },
      3: { text: 'Quelli che sperano nel Signore avranno ali come aquile', reference: 'Isaia 40:31' },
      4: { text: 'Dove c\'è lo Spirito del Signore, lì c\'è libertà', reference: '2 Corinzi 3:17' },
      5: { text: 'Ti ho chiamato per nome, tu sei mio', reference: 'Isaia 43:1' },
      6: { text: 'Tutto posso in Colui che mi fortifica', reference: 'Filippesi 4:13' },
      7: { text: 'Dio infatti non è un Dio di disordine, ma di pace', reference: '1 Corinzi 14:33' },
      8: { text: 'Non temere, perché io sono con te', reference: 'Isaia 41:10' },
      9: { text: 'Sii forte e coraggioso', reference: 'Giosuè 1:9' },
      10: { text: 'La tua fede ti ha salvato', reference: 'Luca 7:50' },
      11: { text: 'Se uno è in Cristo, è una nuova creatura', reference: '2 Corinzi 5:17' },
      12: { text: 'Voi siete stirpe eletta, un sacerdozio regale', reference: '1 Pietro 2:9' },
      13: { text: 'Dopo la pioggia viene il sole', reference: 'Giobbe 37:11' },
      14: { text: 'L\'amore non viene mai meno', reference: '1 Corinzi 13:8' }
    },
    infinite: [
      { text: 'Non sia turbato il vostro cuore', reference: 'Giovanni 14:1' },
      { text: 'Io sono con voi tutti i giorni', reference: 'Matteo 28:20' },
      { text: 'Il Signore è la mia luce e la mia salvezza', reference: 'Salmo 27:1' },
      { text: 'Voi siete la luce del mondo', reference: 'Matteo 5:14' },
      { text: 'L\'amore copre una moltitudine di peccati', reference: '1 Pietro 4:8' },
      { text: 'Perché Dio ha tanto amato il mondo', reference: 'Giovanni 3:16' },
      { text: 'Cercate prima il regno di Dio', reference: 'Matteo 6:33' },
      { text: 'Il giusto vivrà per fede', reference: 'Romani 1:17' },
      { text: 'Ogni cosa è possibile a chi crede', reference: 'Marco 9:23' },
      { text: 'Dio è amore', reference: '1 Giovanni 4:8' },
      { text: 'Nulla ci potrà separare dall\'amore di Dio', reference: 'Romani 8:39' },
      { text: 'Camminate nello Spirito', reference: 'Galati 5:16' },
      { text: 'Rallegratevi sempre nel Signore', reference: 'Filippesi 4:4' },
      { text: 'La pace di Dio custodisce i vostri cuori', reference: 'Filippesi 4:7' },
      { text: 'Non temere, perché io sono con te', reference: 'Isaia 41:10' },
      { text: 'Il Signore è la mia forza e il mio scudo', reference: 'Salmo 28:7' },
      { text: 'Beati i puri di cuore', reference: 'Matteo 5:8' },
      { text: 'La speranza non delude', reference: 'Romani 5:5' },
      { text: 'Fate ogni cosa con amore', reference: '1 Corinzi 16:14' },
      { text: 'La grazia del Signore sia con voi', reference: '1 Corinzi 16:23' }
    ]
  },

  bosses: {
    spider: {
      name: '🕷️ Il Ragno dell\'Oscurità',
      intro: 'Un ragno gigante tesse la sua rete di paura... Ma "Dio non ci ha dato uno spirito di paura"!',
      phase_1: '🕸️ "Dio infatti non ci ha dato uno spirito di timidezza, ma di forza, d\'amore e di autocontrollo." (2 Timoteo 1:7)\n\nLa PAURA DEL DOLORE, la PAURA DI ESSERE MORSI... Queste paure ti paralizzano!',
      phase_2: '✨ "Non temere, perché io sono con te; non smarrirti, perché io sono il tuo Dio." (Isaia 41:10)\n\nLe PAURE ILLOGICHE e le FOBIE non hanno potere su coloro che camminano nella fede!',
      phase_3: '🛡️ "Quand\'anche camminassi nella valle dell\'ombra della morte, non temerei alcun male, perché tu sei con me." (Salmo 23:4)\n\nLa paura è un MECCANISMO PROTETTIVO, ma non deve DOMINARTI!',
      defeated: '🦋 VITTORIA SULLA PAURA!\n\n"L\'amore perfetto caccia via la paura." (1 Giovanni 4:18)\n\nHai conquistato la paura paralizzante! La fede trasforma la paura in coraggio.',
      wisdom: 'Il ragno simboleggia tutte le nostre paure: la paura del dolore, di essere morsi, fobie illogiche. Queste paure sono spesso normali meccanismi protettivi che ci tengono al sicuro dal pericolo. Ma quando diventano eccessive, ci paralizzano. La Bibbia dice: "Dio non ci ha dato uno spirito di timidezza, ma di forza, amore e autocontrollo." La fede non nega il pericolo, ma ci dà il coraggio di affrontarlo. In Cristo, impariamo a distinguere tra prudenza sana e paura paralizzante. L\'amore perfetto di Dio caccia via la paura!'
    },
    flying_snake: {
      name: '🐍 Il Serpente Volante',
      intro: 'L\'antico serpente, simbolo di tentazione, si erge davanti a te... Ma "resistete al diavolo, ed egli fuggirà da voi"!',
      phase_1: '🔥 "Vegliate e pregate, per non cadere in tentazione." (Matteo 26:41)\n\nTENTAZIONE, la MENZOGNA ORIGINALE, il DUBBIO che sussurra: "Ha Dio veramente detto...?"',
      phase_2: '⚔️ "Resistete al diavolo, ed egli fuggirà da voi. Avvicinatevi a Dio, ed egli si avvicinerà a voi." (Giacomo 4:7-8)\n\nIl veleno del COMPROMESSO e della DISOBBEDIENZA non può raggiungere chi rimane vicino a Dio!',
      phase_3: '✝️ "E come Mosè innalzò il serpente nel deserto, così bisogna che il Figlio dell\'uomo sia innalzato." (Giovanni 3:14)\n\nCristo ha SCHIACCIATO la testa del serpente! La sua vittoria è la tua vittoria!',
      defeated: '🌟 VITTORIA SULLA TENTAZIONE!\n\n"Esso ti schiaccerà il capo, e tu gli ferirai il calcagno." (Genesi 3:15)\n\nHai conquistato la tentazione! In Cristo, l\'antico serpente è sconfitto.',
      wisdom: 'Il serpente volante rappresenta la tentazione e la menzogna originale del Giardino dell\'Eden: "Non morirete affatto... sarete come Dio." È la voce che semina dubbi sulla bontà di Dio, spingendoci verso il compromesso e la disobbedienza. Ma la Bibbia insegna: "Resistete al diavolo, ed egli fuggirà." La tentazione non è peccato - è l\'invito al peccato. Gesù stesso fu tentato, ma resistette attraverso la Parola di Dio. Alla Croce, Cristo ha schiacciato la testa del serpente. Attraverso la sua vittoria, abbiamo il potere di resistere e vincere ogni tentazione. Avvicinatevi a Dio, ed Egli si avvicinerà a noi!'
    },
    crazy_chicken: {
      name: '🐔 Il Pollo Pazzo',
      intro: 'Un pollo in preda al panico corre in tutte le direzioni... Le false paure ti fanno impazzire e ti paralizzano!',
      phase_1: '😰 "Dio infatti non ci ha dato uno spirito di timidezza, ma di forza, d\'amore e di autocontrollo." (2 Timoteo 1:7)\n\nFALSE PAURE SOGGETTIVE: "E se...?", "Forse...", "Ho paura che..." - Paure IMMAGINARIE che ti FRENANO!',
      phase_2: '🧠 "Non angustiatevi di nulla, ma in ogni cosa fate conoscere le vostre richieste a Dio in preghiera e supplica." (Filippesi 4:6)\n\nSCENARI CATASTROFICI nella tua testa, PAURE IRRAZIONALI che ti fanno impazzire! BASTA!',
      phase_3: '✨ "Infatti è Dio che produce in voi il volere e l\'agire, secondo il suo disegno benevolo." (Filippesi 2:13)\n\nQueste paure SOGGETTIVE NON SONO LA REALTÀ! Dio ti ha dato SAGGEZZA, non FOLLIA!',
      defeated: '🦅 VITTORIA SULLE FALSE PAURE!\n\n"Non temere, perché io sono con te." (Isaia 41:10)\n\nHai conquistato le paure immaginarie! Ora cammini nella saggezza, non nella follia.',
      wisdom: 'Il pollo pazzo rappresenta le false paure soggettive che ci fanno impazzire: "E se fallisco?", "E se la gente mi giudica?", "E se non sono abbastanza bravo?". Queste paure immaginarie, questi scenari catastrofici nelle nostre teste ci paralizzano e ci frenano. Andiamo nel panico come un pollo spaventato per cose che forse non accadranno mai! La Bibbia dice: "Dio non ci ha dato uno spirito di timidezza, ma di forza, amore e autocontrollo." Il 95% delle nostre paure non si avvera mai. Queste paure soggettive non sono la realtà - sono bugie del nemico per impedirci di andare avanti. "Non angustiatevi di nulla" - Dio ci chiama a sostituire le false paure con la fede, il panico con la pace, gli scenari catastrofici con la fiducia nella Sua provvidenza.'
    },
    grim_reaper: {
      name: '💀 La Morte',
      intro: 'La morte stessa si erge davanti a te... Ma ricorda: Cristo ha vinto la morte!',
      phase_1: '🕊️ "O morte, dov\'è il tuo dardo? O inferno, dov\'è la tua vittoria?" (1 Corinzi 15:55)\n\nLa paura della morte non ha potere su coloro che credono nella vita eterna!',
      phase_2: '✝️ "Gesù le disse: Io sono la risurrezione e la vita; chi crede in me, anche se muore, vivrà." (Giovanni 11:25)\n\nLa vita trionfa sempre sulle tenebre! Ogni momento è una VITTORIA!',
      phase_3: '🌟 "Insegnaci dunque a contar bene i nostri giorni, per acquistare un cuore saggio." (Salmo 90:12)\n\nNon importa quanto tempo rimane - VIVI PIENAMENTE! Ogni giorno è un DONO!',
      defeated: '🙏 VITTORIA SULLA MORTE!\n\n"Non c\'è dunque più nessuna condanna per quelli che sono in Cristo Gesù." (Romani 8:1)\n\nHai conquistato la paura! La vita eterna è tua per la grazia di Dio.',
      wisdom: 'La morte non è una fine, ma una trasformazione. Attraverso Cristo, passiamo dalla vita terrena alla vita eterna. Non importa quanto tempo ci rimane o come viviamo - la cosa migliore è vivere ogni momento come una vittoria, ogni nuovo anno come un dono. Anche nella malattia, anche nelle prove, la SPERANZA e l\'OTTIMISMO ci danno ali e rendono spesso possibile l\'impossibile! La Bibbia dice: "Insegnaci a contare i nostri giorni, per acquistare un cuore saggio." Ogni giorno è prezioso. Ogni respiro è grazia. La fede cristiana ci insegna che la morte è stata sconfitta alla Croce, e che la speranza della risurrezione illumina il nostro cammino. Viviamo quindi pienamente, con gioia e gratitudine, perché "Questo è il giorno che il Signore ha fatto; rallegriamoci e gioisci in esso!" (Salmo 118:24)'
    },
    wall: {
      name: '🧱 Il Muro di Catene',
      intro: 'Un muro di paure e dubbi si erge davanti a te... Ma "dove c\'è lo Spirito del Signore, c\'è libertà"!',
      phase_1: '⛓️ "Cristo ci ha liberati perché restassimo liberi; state dunque saldi e non vi lasciate porre di nuovo sotto il giogo della schiavitù." (Galati 5:1)\n\nLe catene della PAURA, del DUBBIO e della VERGOGNA non hanno potere su di te!',
      phase_2: '🔓 "Se dunque il Figlio vi farà liberi, sarete veramente liberi." (Giovanni 8:36)\n\nOgni catena spezzata è una vittoria sulle bugie del nemico!',
      phase_3: '✨ "Io posso ogni cosa in Cristo che mi fortifica." (Filippesi 4:13)\n\nLa verità di Dio distrugge le fortezze e i muri che ti imprigionano!',
      defeated: '🎉 LIBERTÀ IN CRISTO!\n\n"Conoscerete la verità, e la verità vi farà liberi." (Giovanni 8:32)\n\nHai spezzato le catene! Sei libero attraverso il potere dell\'amore di Dio.',
      wisdom: 'Le paure sono come catene invisibili che ci impediscono di andare avanti. La Bibbia ci insegna che "Dio non ci ha dato uno spirito di timidezza, ma di forza, amore e autocontrollo." Ogni paura conquistata attraverso la fede è una catena spezzata. In Cristo, siamo chiamati a vivere nella libertà, liberati dalle bugie che ci tengono prigionieri. La verità ci rende liberi!'
    },
    dark_cloud: {
      name: '☁️ La Nuvola Oscura',
      intro: 'Una nuvola di tempesta minaccia di inghiottire tutto... Ma "Dio è il nostro rifugio e la nostra forza, un aiuto sempre pronto nelle difficoltà"!',
      phase_1: '⚡ "Il Signore è vicino a quelli che hanno il cuore affranto e salva quelli che hanno lo spirito abbattuto." (Salmo 34:18)\n\nNella depressione più profonda, proteggi la tua SPERANZA, la tua FEDE e il tuo AMORE!',
      phase_2: '🌩️ "Siamo tribolati da ogni parte, ma non schiacciati; perplessi, ma non disperati." (2 Corinzi 4:8)\n\nI fulmini della sofferenza non possono spegnere la luce di Dio in te!',
      phase_3: '⛈️ "Vi ho detto queste cose, affinché abbiate pace in me. Nel mondo avrete tribolazione; ma fatevi coraggio, io ho vinto il mondo." (Giovanni 16:33)\n\nAnche nella tempesta più buia, Cristo è la tua ancora!',
      defeated: '🌈 VITTORIA SULLA TEMPESTA!\n\n"Dopo la pioggia viene il sole. Egli disperde le nuvole con la sua luce." (Giobbe 37:11-15)\n\nHai attraversato la tempesta! La speranza brilla di nuovo, più forte di prima.',
      wisdom: 'Le depressioni, le perdite gravi e le paure improvvise sono come tempeste che oscurano il nostro cielo interiore. Ma la Bibbia ci ricorda che "Chi abita al riparo dell\'Altissimo riposa all\'ombra dell\'Onnipotente." Nei momenti più bui, la speranza, la fede e l\'amore sono luci che dobbiamo proteggere. Dio non abbandona mai i suoi figli nella tempesta - Egli è il nostro rifugio, la nostra forza, e dopo ogni tempesta, Egli fa brillare il Suo arcobaleno di promesse.'
    },
    black_raven: {
      name: '🐦‍⬛ Il Corvo delle Menzogne',
      intro: 'Un corvo nero sputa menzogne sulla tua identità... Ma "tu sei prezioso ai miei occhi, sei degno di stima, e io ti amo"!',
      phase_1: '🪶 "Io ti celebro, perché sono stato fatto in modo stupendo. Meravigliose sono le tue opere." (Salmo 139:14)\n\nLe menzogne dicono: NON ABBASTANZA BELLO, NON ABBASTANZA RICCO, NON NORMALE...\nMa la VERITÀ di Dio dice: SEI PREZIOSO!',
      phase_2: '✝️ "Vedete quale amore ci ha manifestato il Padre, dandoci di essere chiamati figli di Dio! E tali siamo." (1 Giovanni 3:1)\n\nLe menzogne gridano: SENZA VALORE, TROPPO DIVERSO, TROPPO PECCATORE...\nMa Dio dice: SEI IL MIO FIGLIO AMATO!',
      phase_3: '👑 "Voi siete una stirpe eletta, un sacerdozio regale, una gente santa, un popolo che Dio si è acquistato." (1 Pietro 2:9)\n\nLe menzogne urlano: TROPPO CATTIVO, INDEGNO, RIFIUTATO...\nMa Cristo proclama: SEI SCELTO, SEI REGALE, SEI AMATO!',
      defeated: '🌟 VITTORIA SULLE MENZOGNE!\n\n"Conoscerete la verità, e la verità vi farà liberi." (Giovanni 8:32)\n\nHai conquistato le menzogne! Ora conosci la tua vera identità in Cristo.',
      wisdom: 'Il corvo delle menzogne rappresenta tutte le accuse e le false credenze che il nemico usa per distruggere la nostra identità: "non abbastanza bello", "non abbastanza ricco", "troppo diverso", "troppo peccatore". Queste menzogne sono frecce avvelenate puntate ai nostri cuori. Ma la Bibbia ci rivela la VERITÀ: siamo creati a immagine di Dio, redenti dal sangue di Cristo, adottati come figli di Dio. Il nostro valore non dipende dal nostro aspetto, ricchezza o errori - viene dall\'amore incondizionato di Dio. In Cristo, siamo preziosi, amati, scelti, regali. Questa è la nostra vera identità!'
    }
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = it;
}
