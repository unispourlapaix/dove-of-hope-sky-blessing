// ============================================
// 🇩🇪 DEUTSCH - DOVE OF HOPE
// ============================================

const de = {
  code: 'de',
  name: 'Deutsch',
  flag: '🇩🇪',
  
  ui: {
    score: 'Punktzahl',
    clouds: 'Wolken',
    level: 'Kapitel',
    lives: 'Leben',
    language: 'Sprache',
    choose_language: 'Sprache wählen',
    language_changed: 'Sprache geändert'
  },
  
  buttons: {
    start: 'Anzünden!',
    play: 'SPIELEN',
    restart: 'NOCHMAL',
    infinite_mode: 'Unendlicher Modus',
    close: 'Schließen',
    start_bonus: 'Starten'
  },
  
  messages: {
    start: 'Flieg, kleine Taube! Vertreibe die Wolken!',
    restart: 'Die Taube ist wiedergeboren! Los geht\'s!',
    gameOver: 'Game Over! Aber in der Not glänzt du noch heller!',
    victory: 'SIEG! Psalm 99,1 - Das Leben ist ein außergewöhnliches Abenteuer! - sagt Origenes',
    levelUp: 'Level {level} - Das Licht wächst!',
    motivation: 'Es ist Zeit, das Licht einzuschalten - Es ist eine gute Zeit, deine Träume wahr werden zu lassen!',
    welcome: 'Willkommen, Kadett Erstflug!'
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
    'Tanze mit den Elementen, du bist frei!'
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
    rainbow: 'Regenbogenschild aktiviert! Göttlicher Schutz!',
    star_collected: '⭐ Stern gesammelt! ({count} auf Lager) - Doppelklick für Schockwelle!',
    level_up: '✨ Level {level}: {title}',
    new_record: '🏆 NEUER REKORD! Punktzahl: {score}',
    new_record_popup: '🎉 Neuer Rekord!\n\nPunktzahl: {score}\n\nDeine Punktzahl wurde gespeichert.\nKlicke auf Exportieren im Schatzmenu, um sie zu teilen.',
    infinite_mode: '🔄 Unendlicher Modus aktiviert! Verse alle 100 Wolken ☁️',
    record_saved: '☁️ Rekord gespeichert!',
    heart: '💖 +1 Leben! Gottes Gnade beschützt dich!'
  },
  
  bonus: {
    collect_blessings: 'Sammle die Segnungen:',
    star: 'Stern',
    heart: 'Herz',
    cross: 'Kreuz',
    rainbow: 'Regenbogen',
    coin_trap: 'Münze = -200 Pkte (FALLE!)',
    objective: 'Ziel:',
    objects: 'Objekte',
    level_title: 'BONUSLEVEL'
  },
  
  treasure: {
    title: '💎 Schatzkammer-Menü',
    my_records: '🏆 Meine Rekorde',
    best_score: 'Beste Punktzahl',
    max_level: 'Maximales Niveau',
    star_stock: '⭐ Sternen-Vorrat',
    chapters_conquered: '🏅 Eroberte Kapitel',
    chapters_completed: 'abgeschlossene Kapitel',
    infinite_progress: '♾️ Fortschritt Unendlich-Modus',
    verse_collection: 'Sammlung zufälliger Verse alle 100 Wolken',
    xp_clouds: 'XP: {count} Wolken',
    next_verse: 'Nächster Vers in: {count}',
    verses_collected: '📚 {count} Verse gesammelt',
    last_played: 'Letztes Spiel',
    creator: '✨ Schöpfer',
    creator_name: '🎮 Emmanuel Payet',
    creator_bio: 'Entwickler & Schöpfer inspirierter Spiele',
    audiomack: '📱 Audiomack',
    creator_message: 'Möge dieses Spiel dich inspirieren und stärken! 🕊️',
    discover_artist: '🎵 Den Künstler entdecken',
    cloud_connect: '☁️ Mit der Cloud verbinden',
    cloud_manage: '☁️ Meine Verbindung verwalten',
    life_tips_faith: '✝️ Glaube',
    life_tips_courage: '💪 Mut',
    life_tips_peace: '🕊️ Frieden',
    life_tips_love: '❤️ Liebe',
    life_tips_prompt: 'Klicke auf einen Tab, um einen Lebensrat zu entdecken',
    infinite_chapter: 'Kapitel {number}',
    my_profile: 'Mein Profil',
    nickname: 'Spitzname',
    email: 'E-Mail',
    cloud_status: 'Cloud',
    connected: 'Verbunden',
    disconnected: 'Getrennt',
    highest_level: 'Beste Punktzahl',
    last_game: 'Letztes Spiel',
    testimonies_title: 'Zeugnisse der Hoffnung',
    testimonies_description: 'Entdecken Sie Geschichten von Mut und Heilung',
    read_testimonies: 'Zeugnisse lesen',
    save_cloud: 'In Cloud speichern',
    share_score: 'Meine Punktzahl teilen',
    not_set: 'Nicht festgelegt'
  },
  
  intro: 'Das Leben ist oft ein langer Kampf, es braucht Mut und Kraft, um in den schlechten Tagen durchzuhalten. Tapferer Held, erhebe dich, und verwandle mit Gottes Liebe die grauen Wolken in Gutes.',
  
  clouds_cleared: '{count} Wolken aufgelöst',
  transform_clouds: 'Verwandle die grauen Wolken',  level_titles: {
    1: 'Morgenröte der Hoffnung',
    2: 'Göttlicher Atem',
    3: 'Flügel des Glaubens',
    4: 'Vergebung und Freiheit',
    5: 'Auserwählt und Kostbar',
    6: 'Innere Stärke',
    7: 'Sturm der Gnade',
    8: 'Bedingungslose Liebe',
    9: 'Held des Lichts',
    10: 'Neue Kreatur',
    11: 'Mut des Löwen',
    12: 'Tor der Weisheit',
    13: 'Neuer Himmel',
    14: 'Das Ewige Abenteuer'
  },
  

  
  levels: {
    1: 'Du hast deine ersten Schritte im Licht gemacht! Du bist nicht allein in diesem Kampf.',
    2: 'Wie ein Adler stärkt Gott dich! Er wählt dich so wie du bist, mit deinen Schwächen und deiner Schönheit.',
    3: 'Du bist nicht nutzlos, du bist nicht abgelehnt. Du bist unendlich geliebt!',
    4: 'Deine Fehler definieren dich nicht. Gottes Liebe löscht alles aus und macht dich frei!',
    5: 'Du bist auserwählt! Nicht wegen deiner Perfektion, sondern aus reiner Gnade.',
    6: 'In deiner Schwäche offenbart sich Seine Kraft. Du kannst alles, denn Er stärkt dich!',
    7: 'Die Herausforderungen vervielfachen sich, aber du tanzt mit den Elementen!',
    8: 'Du musst nicht perfekt sein, um geliebt zu werden. Du bist bereits perfekt geliebt!',
    9: 'Du bist nicht zu sündig für Gott. Du bist Sein Held, Sein geliebtes Kind!',
    10: 'Das Alte ist vergangen, siehe, Neues ist geworden! Du wirst im göttlichen Licht wiedergeboren.',
    11: 'Erhebe dich mit Mut! Du bist würdig, du bist fähig, du bist siegreich!',
    12: 'Die Bibel ist kein Buch des Urteils, sondern ein Schatz der Liebe für dich! Öffne sie mit Zuversicht.',
    13: 'Du näherst dich dem Gipfel! Lies die Bibel als Sieger, nicht als Verurteilter. Du bist auserwählt und geliebt!',
    14: 'Letzte Herausforderung vor dem totalen Sieg! Die Bibel wartet auf dich, sie ist für dich geschrieben, Held des Lichts! Mach weiter, du bist fast am Gipfel!'
  },
  
  victory_message: 'SIEG! Du hast die Dunkelheit in Licht verwandelt! Öffne jetzt deine Bibel mit Zuversicht: Du bist auserwählt, du bist geliebt, du bist siegreich! "Das Leben ist ein außergewöhnliches Abenteuer" - Psalm 99:1 sagt Origenes. Mögen Frieden und Liebe in deinem Herzen regieren!',
  
  infinite_messages: [
    'Setze dein Abenteuer fort! Jede geklärte Wolke ist ein Sieg!',
    'Du bist ein Champion des Lichts! Verfolge deine Suche!',
    'Die Unendlichkeit gehört dir! Möge dein Glaube noch mehr wachsen!',
    'Du übertriffst alle Grenzen! Bravo, ewiger Held!',
    'Deine Beharrlichkeit ist bewundernswert! Leuchte weiter!'
  ],

  popups: {
    not_connected: '⚠️ Nicht verbunden!\n\nVerbinde dich zuerst über das Schatzmenu.',
    no_data_to_save: '⚠️ Keine Daten zum Speichern\n\nSpiele zuerst, um Daten zu erstellen!',
    saving: '⏳ Speichern...',
    save_failed: '❌ Speichern fehlgeschlagen!\n\n{error}',
    save_error: '❌ Speicherfehler!\n\n{error}',
    data_imported: '✅ Daten erfolgreich importiert!',
    invalid_file: '❌ Ungültige Datei',
    enter_nickname_email: '❌ Bitte Spitzname UND E-Mail eingeben!',
    invalid_email: '❌ Ungültige E-Mail!',
    connected_local_saved: '✅ Verbunden!\n\nLokale Daten in der Cloud gespeichert.',
    connected_cloud_restored: '✅ Verbunden!\n\nCloud-Daten wiederhergestellt.',
    connected_success: '✅ Erfolgreich verbunden!\n\nDein Fortschritt wird automatisch online gespeichert.'
  },

  testimony: {
    title: '💎 Lebensschatz - Emmanuel',
    paragraph1: 'Es gab eine Zeit, in der mich Krankheit schrecklich isolierte und dunkle Wolken mein Leben überfielen. Ich versuchte aufzugeben, aber zuvor schrie ich zu Gott! <strong>Dir gebe ich mein Leben und nicht den heimtückischen Schatten.</strong>',
    paragraph2: 'Wie ein Gebet wurde mein Schrei gehört und mein Leben änderte sich an dem Tag, als ich in meinem Herzen wusste, dass <em>ich geliebt werde, wie ich bin</em>. Eine lange Arbeit des Vertrauens, des Mutes und der Veränderung begann in mir.',
    paragraph3: 'Ich lernte aus Fehlern, ich lernte, nicht immer zurückzublicken, ohne jemals zu vergessen. Aber vor allem lernte ich, mit Geduld, Hoffnung und Freude in die Zukunft zu schauen.',
    paragraph4: 'Eine Freude, die ich im Lobpreis und in der Anbetung Gottes, des Retters, fand, dem, der mir die Hand reichte, als niemand für mich da sein konnte. Er holte mich aus dem Tal des Todes und ließ mich sehen, was wirklich wichtig ist: <strong>das einfache, gewöhnliche Leben</strong>.',
    paragraph5: 'Ich sah über meine materialistischen Wünsche hinaus, ich sah, dass ich auf das schauen musste, was ich habe, und nicht auf das, was ich nicht habe. Und lieben, was ich bin, wie ich sein möchte. <em>Ich sah der Hoffnung ins Gesicht.</em>',
    paragraph6: 'Ich bat und erhielt unbeschreibliche Antworten, die in mir einen unerschütterlichen Glauben hervorbrachten. Durch Schwierigkeiten wuchs ich und ich bereue es nicht, ausgeharrt und immer wieder gehofft zu haben, denn <strong>jeder Hügel verbarg Schätze des Lebens</strong>, jeder Berg, der durch den Mut zur Bewegung erobert wurde, brachte eine bessere Zukunft, Erinnerungen an außergewöhnliches Leben, wunderbare Begegnungen und Orte.',
    final_message: '🕊️ Deshalb sagt Jesus zu dir: Gib niemals auf, beharrre bis zum Unmöglichen! 🕊️'
  },

  life_tips: {
    faith: {
      title: '✝️ Glaubensratschläge',
      tip1: '💫 "Der Glaube ist eine feste Zuversicht dessen, was man hofft" - Hebräer 11:1',
      tip2: '🙏 Bete jeden Tag, auch wenige Minuten reichen aus, um deine Seele zu stärken',
      tip3: '📖 Lies regelmäßig die Bibel, um deinen Glauben zu nähren und Antworten zu finden',
      tip4: '✨ Vertraue Gott in schwierigen Zeiten, Er hat einen Plan für dich',
      tip5: '🌟 Umgib dich mit Gläubigen, die dich in deinem Glauben ermutigen'
    },
    courage: {
      title: '💪 Mutratschläge',
      tip1: '🦁 "Sei stark und mutig, fürchte dich nicht" - Josua 1:9',
      tip2: '🔥 Stelle dich deinen Ängsten eine nach der anderen, jeder kleine Sieg zählt',
      tip3: '🎯 Setze dir klare Ziele und gehe Schritt für Schritt darauf zu',
      tip4: '👊 Gib niemals auf, auch wenn es schwer ist - Ausdauer zahlt sich aus',
      tip5: '⭐ Erinnere dich an deine vergangenen Erfolge, um Kraft zum Weitermachen zu finden'
    },
    peace: {
      title: '🕊️ Friedensratschläge',
      tip1: '🌿 "Meinen Frieden gebe ich euch" - Johannes 14:27',
      tip2: '🧘 Nimm dir jeden Tag Zeit zum Ausruhen und Meditieren',
      tip3: '🌺 Vergib denen, die dich verletzt haben, befreie dich von der Last des Grolls',
      tip4: '🌈 Suche Frieden in den kleinen Dingen: Natur, Musik, Gebet',
      tip5: '💕 Umgib dich mit positiven Menschen, die dir Gelassenheit bringen'
    },
    love: {
      title: '❤️ Liebesratschläge',
      tip1: '💖 "Liebt einander, wie ich euch geliebt habe" - Johannes 13:34',
      tip2: '🤝 Zeige Wohlwollen gegenüber allen, auch gegenüber denen, die anders sind',
      tip3: '🎁 Gib, ohne etwas zurückzuerwarten, wahre Liebe ist selbstlos',
      tip4: '👂 Höre anderen wirklich zu, sei für die da, die leiden',
      tip5: '✨ Beginne damit, dich selbst zu lieben: Du bist kostbar in Gottes Augen'
    }
  },

  ranks: {
    1: {
      title: 'KADETT - Erste Flüge',
      message: 'Deine himmlische Reise beginnt. Übernimm die Kontrolle und lerne, zwischen den Wolken zu navigieren. Jede Mission bringt dich deinem Schicksal näher.'
    },
    2: {
      title: 'FLUGSCHÜLER - In Ausbildung',
      message: 'Du machst schnell Fortschritte! Deine Fähigkeiten wachsen, dein Selbstvertrauen stärkt sich. Steige weiter zu den Höhen auf.'
    },
    3: {
      title: 'FLIEGER - Taufe des Himmels',
      message: 'Deine Flügel breiten sich mit Zuversicht aus! Du beherrschst die Grundlagen des Flugs und entdeckst die Freiheit der Himmel.'
    },
    4: {
      title: 'ERFAHRENER PILOT - Geübter Navigator',
      message: 'Die Winde kennen dich, die Wolken respektieren dich! Du navigierst mit Leichtigkeit durch die himmlischen Strömungen.'
    },
    5: {
      title: 'HIMMELSASS - Geflügelter Virtuose',
      message: 'Du tanzt zwischen den Wolken wie ein Meister! Deine Reflexe schärfen sich, deine Präzision wird legendär.'
    },
    6: {
      title: 'ELITE-GESCHWADER - Luftwaffe',
      message: 'Du gehörst zu den Besten! Deine Expertise inspiriert andere Piloten. Du fliegst mit göttlicher Anmut.'
    },
    7: {
      title: 'KOMMANDANT - Himmlischer Taktiker',
      message: 'Dir werden strategische Missionen anvertraut! Du befehligst den Himmel mit Weisheit und Mut, geführt vom göttlichen Licht.'
    },
    8: {
      title: 'WOLKENSTRATEGE - Meistertaktiker',
      message: 'Du antizipierst jede Bewegung! Deine taktische Intelligenz und strategische Vision übertreffen das Gewöhnliche.'
    },
    9: {
      title: 'VETERAN - Von Stürmen Geschmiedet',
      message: 'Du hast tausend Stürme überstanden! Jede Narbe erzählt von einem Sieg. Du bist eine lebende Legende der Himmel.'
    },
    10: {
      title: 'HIMMLISCHER HELD - Anerkannter Champion',
      message: 'Deine Heldentaten werden in allen Reichen besungen! Du verkörperst Mut und unerschütterliche Entschlossenheit.'
    },
    11: {
      title: 'LEGENDE - Verkörperter Mythos',
      message: 'Dein Name hallt durch alle Himmel! Kadetten träumen davon, wie du zu werden. Du verkörperst Exzellenz und Anmut.'
    },
    12: {
      title: 'EWIGER CHAMPION - Unsterblicher Ruhm',
      message: 'Dein Ruhm überdauert die Zeitalter! Dein Vermächtnis wird zukünftige Generationen himmlischer Piloten inspirieren.'
    },
    13: {
      title: 'MEISTERPILOT - Luftsymphonie',
      message: 'Du fliegst nicht mehr, du komponierst eine himmlische Symphonie! Jede Bewegung ist Perfektion, jede Mission ein Meisterwerk.'
    },
    14: {
      title: 'HIMMELSFLÜGEL - Ewiger Wächter',
      message: 'Du hast die Sterblichkeit überschritten! Himmlischer Wächter, Beschützer der Himmel, dein Flug ist nun ewig. Die Unendlichkeit gehört dir!'
    }
  },

  verses: {
    level: {
      1: { text: 'Das Licht scheint in der Finsternis', reference: 'Johannes 1:5' },
      2: { text: 'Der Geist Gottes schwebte über den Wassern', reference: '1. Mose 1:2' },
      3: { text: 'Die auf den Herrn harren, werden Flügel bekommen wie Adler', reference: 'Jesaja 40:31' },
      4: { text: 'Wo der Geist des Herrn ist, da ist Freiheit', reference: '2. Korinther 3:17' },
      5: { text: 'Ich habe dich bei deinem Namen gerufen, du bist mein', reference: 'Jesaja 43:1' },
      6: { text: 'Ich vermag alles durch den, der mich stärkt', reference: 'Philipper 4:13' },
      7: { text: 'Nach dem Regen kommt die Sonne', reference: 'Hiob 37:11' },
      8: { text: 'Die Liebe hört niemals auf', reference: '1. Korinther 13:8' },
      9: { text: 'Dein Glaube hat dich gerettet', reference: 'Lukas 7:50' },
      10: { text: 'Ist jemand in Christus, so ist er eine neue Kreatur', reference: '2. Korinther 5:17' },
      11: { text: 'Sei stark und mutig', reference: 'Josua 1:9' },
      12: { text: 'Dein Wort ist eine Leuchte für meinen Fuß', reference: 'Psalm 119:105' },
      13: { text: 'Ihr seid ein auserwähltes Geschlecht', reference: '1. Petrus 2:9' },
      14: { text: 'Das Leben ist ein außergewöhnliches Abenteuer', reference: 'Psalm 99:1 (sagt Origenes)' }
    },
    rank: {
      1: { text: 'Von ferne ist mir der Herr erschienen: "Ich habe dich je und je geliebt; darum habe ich dich zu mir gezogen aus lauter Güte.', reference: 'Jeremia 31:3' },
      2: { text: 'Der Herr gibt dem Müden Kraft und Stärke genug dem Unvermögenden.', reference: 'Jesaja 40:29' },
      3: { text: 'Die auf den Herrn harren, werden Flügel bekommen wie Adler', reference: 'Jesaja 40:31' },
      4: { text: 'Wo der Geist des Herrn ist, da ist Freiheit', reference: '2. Korinther 3:17' },
      5: { text: 'Ich habe dich bei deinem Namen gerufen, du bist mein', reference: 'Jesaja 43:1' },
      6: { text: 'Ich vermag alles durch den, der mich stärkt', reference: 'Philipper 4:13' },
      7: { text: 'Denn Gott ist nicht ein Gott der Unordnung, sondern des Friedens', reference: '1. Korinther 14:33' },
      8: { text: 'Fürchte dich nicht, denn ich bin mit dir', reference: 'Jesaja 41:10' },
      9: { text: 'Sei stark und mutig', reference: 'Josua 1:9' },
      10: { text: 'Dein Glaube hat dich gerettet', reference: 'Lukas 7:50' },
      11: { text: 'Ist jemand in Christus, so ist er eine neue Kreatur', reference: '2. Korinther 5:17' },
      12: { text: 'Ihr seid ein auserwähltes Geschlecht, ein königliches Priestertum', reference: '1. Petrus 2:9' },
      13: { text: 'Nach dem Regen kommt die Sonne', reference: 'Hiob 37:11' },
      14: { text: 'Die Liebe hört niemals auf', reference: '1. Korinther 13:8' }
    },
    infinite: [
      { text: 'Euer Herz erschrecke nicht', reference: 'Johannes 14:1' },
      { text: 'Ich bin bei euch alle Tage', reference: 'Matthäus 28:20' },
      { text: 'Der Herr ist mein Licht und mein Heil', reference: 'Psalm 27:1' },
      { text: 'Ihr seid das Licht der Welt', reference: 'Matthäus 5:14' },
      { text: 'Die Liebe deckt eine Menge Sünden zu', reference: '1. Petrus 4:8' },
      { text: 'Denn so sehr hat Gott die Welt geliebt', reference: 'Johannes 3:16' },
      { text: 'Trachtet zuerst nach dem Reich Gottes', reference: 'Matthäus 6:33' },
      { text: 'Der Gerechte wird aus Glauben leben', reference: 'Römer 1:17' },
      { text: 'Alle Dinge sind möglich dem, der glaubt', reference: 'Markus 9:23' },
      { text: 'Gott ist Liebe', reference: '1. Johannes 4:8' },
      { text: 'Nichts kann uns von der Liebe Gottes trennen', reference: 'Römer 8:39' },
      { text: 'Wandelt im Geist', reference: 'Galater 5:16' },
      { text: 'Freuet euch allezeit im Herrn', reference: 'Philipper 4:4' },
      { text: 'Der Friede Gottes behütet eure Herzen', reference: 'Philipper 4:7' },
      { text: 'Fürchte dich nicht, denn ich bin mit dir', reference: 'Jesaja 41:10' },
      { text: 'Der Herr ist meine Stärke und mein Schild', reference: 'Psalm 28:7' },
      { text: 'Selig sind, die reinen Herzens sind', reference: 'Matthäus 5:8' },
      { text: 'Die Hoffnung lässt nicht zuschanden werden', reference: 'Römer 5:5' },
      { text: 'Tut alles in Liebe', reference: '1. Korinther 16:14' },
      { text: 'Die Gnade des Herrn sei mit euch', reference: '1. Korinther 16:23' }
    ]
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = de;
}
