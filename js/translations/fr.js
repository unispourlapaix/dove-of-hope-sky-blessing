// ============================================
// 🇫🇷 FRANÇAIS - DOVE OF HOPE
// ============================================

const fr = {
  code: 'fr',
  name: 'Français',
  flag: '🇫🇷',
  
  ui: {
    score: 'Score',
    clouds: 'Nuages',
    level: 'Chapitre',
    lives: 'Vie',
    language: 'Langue',
    choose_language: 'Choisir la langue',
    language_changed: 'Langue changée',
    difficulty: 'Difficulté',
    easy: 'Facile',
    normal: 'Normal',
    hard: 'Difficile',
    legendary: 'Légendaire',
    difficulty_changed: 'Difficulté changée'
  },
  
  buttons: {
    start: 'Rallume !',
    play: 'JOUER',
    restart: 'REJOUER',
    infinite_mode: 'Mode Infini',
    close: 'Fermer',
    start_bonus: 'Commencer'
  },
  
  messages: {
    start: 'Vole, petite colombe ! Dissipe les nuages !',
    restart: 'La colombe renaît ! C\'est reparti !',
    gameOver: 'GAME OVER',
    victory: 'VICTOIRE ! Le Psaume 99.1 - La vie est une aventure extraordinaire ! - dit Origine',
    levelUp: 'Niveau {level} - La lumière grandit !',
    motivation: 'Il est temps de rallumer la lumière - C\'est un beau temps pour réaliser ses rêves !',
    welcome: 'Bienvenue, Cadet Premier Vole !'
  },

  profile: {
    nickname: 'Ton surnom',
    email: 'Email (optionnel)',
    enter_nickname: 'Entre ton surnom...',
    enter_email: 'ton@email.com'
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
    'Danse avec les éléments, tu es libre !'
  ],
  
  rain: [
    'Après la pluie y a le beau temps !',
    'Ta foi est plus forte que l\'orage !',
    'La tempête révèle la force de tes ailes !'
  ],
  
  powerups: {
    try_again: 'Mais dans l\'adversité, tu brilles encore plus !',
    umbrella: 'Parapluie activé ! Danse avec les éléments !',
    speed: 'Vitesse divine ! Tes ailes sont libres !',
    multishot: 'Triple lumière ! Ton cœur rayonne !',
    rainbow: 'Bouclier Arc-en-ciel activé ! Protection divine !',
    star_collected: '⭐ Étoile collectée ! ({count} en stock) - Double-clic pour onde de choc !',
    level_up: '✨ Niveau {level}: {title}',
    new_record: '🏆 NOUVEAU RECORD ! Score: {score}',
    new_record_popup: '🎉 Nouveau record !\n\nScore: {score}\n\nTon score a été sauvegardé.\nClique sur Exporter dans le menu Trésor pour le partager.',
    infinite_mode: '🔄 Mode Infini activé ! Versets tous les 100 nuages ☁️',
    record_saved: '☁️ Record sauvegardé !',
    heart: '💖 +1 Vie ! La grâce de Dieu te protège !'
  },
  
  bonus: {
    collect_blessings: 'Collecte les bénédictions :',
    star: 'Étoile',
    heart: 'Cœur',
    cross: 'Croix',
    rainbow: 'Arc-en-ciel',
    coin_trap: 'Pièce = -200 pts (PIÈGE !)',
    objective: 'Objectif :',
    objects: 'objets',
    level_title: 'NIVEAU BONUS'
  },
  
  treasure: {
    title: '💎 Menu Trésor',
    my_records: '🏆 Mes Records',
    best_score: 'Meilleur Score',
    max_level: 'Niveau Maximum',
    star_stock: '⭐ Stock d\'Étoiles',
    chapters_conquered: '🏅 Chapitres Conquis',
    chapters_completed: 'chapitres complétés',
    infinite_progress: '♾️ Progression Mode Infini',
    verse_collection: 'Collecte des versets aléatoires tous les 100 nuages',
    xp_clouds: 'XP: {count} nuages',
    next_verse: 'Prochain verset dans: {count}',
    verses_collected: '📚 {count} versets collectés',
    last_played: 'Dernière partie',
    creator: '✨ Créateur',
    creator_name: '🎮 Emmanuel Payet',
    creator_bio: 'Développeur & Créateur de jeux inspirés',
    audiomack: '📱 Audiomack',
    creator_message: 'Que ce jeu t\'inspire et te fortifie ! 🕊️',
    discover_artist: '🎵 Découvrir l\'Artiste',
    cloud_connect: '☁️ Se connecter au cloud',
    cloud_manage: '☁️ Gérer ma connexion',
    life_tips_faith: '✝️ Foi',
    life_tips_courage: '💪 Courage',
    life_tips_peace: '🕊️ Paix',
    life_tips_love: '❤️ Amour',
    life_tips_prompt: 'Clique sur un onglet pour découvrir un conseil de vie',
    infinite_chapter: 'Chapitre {number}',
    my_profile: 'Mon Profil',
    nickname: 'Surnom',
    email: 'Email',
    cloud_status: 'Cloud',
    connected: 'Connecté',
    disconnected: 'Déconnecté',
    highest_level: 'Meilleur Score',
    last_game: 'Dernière partie',
    testimonies_title: 'Témoignages d\'Espoir',
    testimonies_description: 'Découvre des histoires de courage et de guérison',
    read_testimonies: 'Lire les témoignages',
    save_cloud: 'Sauvegarder Cloud',
    share_score: 'Partager mon score',
    not_set: 'Non défini',
    boss_wisdom_title: 'Sagesses des Boss',
    boss_wisdom_subtitle: 'Vaincre les boss pour débloquer leurs enseignements profonds',
    boss_wisdom_collected: 'sagesses débloquées',
    boss_wisdom_locked: 'Cette sagesse est encore verrouillée. Vaincre ce boss pour la débloquer !',
    boss_wisdom_philosophy: 'Philosophie & Enseignement',
    boss_wisdom_victory: 'Message de Victoire',
    boss_wisdom_close: 'Fermer'
  },
  
  intro: 'La vie est souvent un long combat, il faut du courage et de la force pour tenir bon aux mauvais jours. Vaillant héros, lève-toi, et avec l\'amour de Dieu transforme les nuages gris en bien.',
  
  clouds_cleared: '{count} nuages dissipés',
  transform_clouds: 'Transforme les nuages gris',
  
  level_titles: {
    1: 'L\'Aube de l\'Espoir',
    2: 'Le Souffle Divin',
    3: 'Ailes de Foi',
    4: 'Pardon et Liberté',
    5: 'Choisi et Précieux',
    6: 'Force Intérieure',
    7: 'Tempête de Grâce',
    8: 'Amour Inconditionnel',
    9: 'Héros de Lumière',
    10: 'Nouvelle Créature',
    11: 'Courage du Lion',
    12: 'Porte de la Sagesse',
    13: 'Ciel Nouveau',
    14: 'L\'Aventure Éternelle'
  },
  
  levels: {
    1: 'Tu as fait tes premiers pas dans la lumière ! Tu n\'es pas seul dans ce combat.',
    2: 'Comme un aigle, Dieu te fortifie ! Il te choisit tel que tu es, avec tes faiblesses et ta beauté.',
    3: 'Tu n\'es pas trop nul, tu n\'es pas rejeté. Tu es aimé infiniment !',
    4: 'Tes erreurs ne te définissent pas. L\'amour de Dieu efface tout et te rend libre !',
    5: 'Tu es choisi ! Pas à cause de ta perfection, mais par pure grâce.',
    6: 'Dans ta faiblesse, Sa force se révèle. Tu peux tout, car Il te fortifie !',
    7: 'Les défis se multiplient, mais tu danses avec les éléments !',
    8: 'Tu n\'as pas besoin d\'être parfait pour être aimé. Tu es déjà aimé parfaitement !',
    9: 'Tu n\'es pas trop pécheur pour Dieu. Tu es Son héros, Son enfant chéri !',
    10: 'L\'ancien est passé, voici du nouveau ! Tu renais dans la lumière divine.',
    11: 'Lève-toi avec courage ! Tu es digne, tu es capable, tu es victorieux !',
    12: 'La Bible n\'est pas un livre de jugement, mais un trésor d\'amour pour toi ! Ouvre-la avec confiance.',
    13: 'Tu approches du sommet ! Lis la Bible comme un vainqueur, pas comme un condamné. Tu es choisi et aimé !',
    14: 'Dernier défi avant la victoire totale ! La Bible t\'attend, elle est écrite pour toi, héros de lumière ! Continue, tu es presque au sommet !'
  },
  
  victory_message: 'VICTOIRE ! Tu as transformé les ténèbres en lumière ! Maintenant, ouvre ta Bible avec confiance : tu es choisi, tu es aimé, tu es vainqueur ! « La vie est une aventure extraordinaire » - Psaume 99:1 dit Origine. Que la paix et l\'amour règnent dans ton cœur !',
  
  infinite_messages: [
    'Continue ton aventure ! Chaque nuage dissipé est une victoire !',
    'Tu es un champion de lumière ! Poursuis ta quête !',
    'L\'infini t\'appartient ! Que ta foi grandisse encore !',
    'Tu dépasses toutes les limites ! Bravo, héros éternel !',
    'Ta persévérance est admirable ! Continue à briller !'
  ],

  popups: {
    not_connected: '⚠️ Non connecté !\n\nConnecte-toi d\'abord via le menu Trésor.',
    no_data_to_save: '⚠️ Aucune donnée à sauvegarder\n\nJoue d\'abord pour créer des données !',
    saving: '⏳ Sauvegarde en cours...',
    save_failed: '❌ Échec sauvegarde !\n\n{error}',
    save_error: '❌ Erreur sauvegarde !\n\n{error}',
    data_imported: '✅ Données importées avec succès !',
    invalid_file: '❌ Fichier invalide',
    enter_nickname_email: '❌ Merci d\'entrer pseudo ET email !',
    invalid_email: '❌ Email invalide !',
    connected_local_saved: '✅ Connecté !\n\nDonnées locales sauvegardées dans le cloud.',
    connected_cloud_restored: '✅ Connecté !\n\nDonnées cloud restaurées.',
    connected_success: '✅ Connecté avec succès !\n\nTa progression sera automatiquement sauvegardée en ligne.'
  },

  testimony: {
    title: '💎 Trésor de Vie - Emmanuel',
    paragraph1: 'Il fut un temps où la maladie m\'a terriblement isolé et de sombres nuages est venue envahir ma vie. J\'ai tenté d\'abandonner mais avant j\'ai crié à Dieu ! <strong>C\'est à toi que je donne ma vie et pas aux ombres sournoises.</strong>',
    paragraph2: 'Comme une prière, mon cri fut entendu et ma vie a changé dès ce jour où j\'ai su dans mon cœur que <em>je suis aimé comme je suis</em>. Un long travail de confiance, de courage, de changement s\'amorça en moi.',
    paragraph3: 'J\'ai appris des erreurs, j\'ai appris à ne pas regarder en arrière toujours sans jamais oublier. Mais j\'ai surtout appris à regarder l\'avenir à patience, espérance et joie.',
    paragraph4: 'Une joie que j\'ai retrouvée dans la louange et une adoration de Dieu sauveur, à celui qui m\'a tendu la main quand personne ne pouvait être là pour moi. Il m\'a sorti de la vallée de la mort et fait voir ce qui est vraiment important : <strong>la vie simple, ordinaire</strong>.',
    paragraph5: 'J\'ai vu au-delà de mes désirs matérialistes, j\'ai vu qu\'il fallait regarder à ce que j\'ai et pas à ce que je n\'ai pas. Et aimer ce que je suis, comme je veux être. <em>J\'ai vu l\'espoir en face.</em>',
    paragraph6: 'J\'ai demandé et j\'ai reçu des réponses ineffables qui a produit en moi une foi inébranlable. À travers les difficultés j\'ai grandi et je ne regrette pas d\'avoir persévéré, espéré encore et encore car <strong>chaque colline cachait des trésors de vie</strong>, chaque montagne vaincue par le courage de bouger a porté un meilleur avenir, des souvenirs de vie extraordinaire, des rencontres et lieux merveilleux.',
    final_message: '🕊️ C\'est pour cela que Jésus te dit : N\'abandonne jamais, persévère jusqu\'à l\'impossible ! 🕊️'
  },

  life_tips: {
    faith: {
      title: '✝️ Conseils de Foi',
      tip1: '💫 "La foi est la ferme assurance des choses qu\'on espère" - Hébreux 11:1',
      tip2: '🙏 Prie chaque jour, même quelques minutes suffisent pour fortifier ton âme',
      tip3: '📖 Lis la Bible régulièrement pour nourrir ta foi et trouver des réponses',
      tip4: '✨ Fais confiance à Dieu dans les moments difficiles, Il a un plan pour toi',
      tip5: '🌟 Entoure-toi de croyants qui t\'encouragent dans ta foi'
    },
    courage: {
      title: '💪 Conseils de Courage',
      tip1: '🦁 "Sois fort et courageux, ne crains point" - Josué 1:9',
      tip2: '🔥 Affronte tes peurs une par une, chaque petite victoire compte',
      tip3: '🎯 Fixe-toi des objectifs clairs et avance pas à pas vers eux',
      tip4: '👊 N\'abandonne jamais, même quand c\'est difficile - la persévérance paie',
      tip5: '⭐ Rappelle-toi tes succès passés pour trouver la force de continuer'
    },
    peace: {
      title: '🕊️ Conseils de Paix',
      tip1: '🌿 "Je vous laisse la paix, je vous donne ma paix" - Jean 14:27',
      tip2: '🧘 Prends du temps chaque jour pour te reposer et méditer',
      tip3: '🌺 Pardonne ceux qui t\'ont blessé, libère-toi du poids de la rancune',
      tip4: '🌈 Cherche la paix dans les petites choses : la nature, la musique, la prière',
      tip5: '💕 Entoure-toi de personnes positives qui t\'apportent de la sérénité'
    },
    love: {
      title: '❤️ Conseils d\'Amour',
      tip1: '💖 "Aimez-vous les uns les autres comme je vous ai aimés" - Jean 13:34',
      tip2: '🤝 Montre de la bienveillance envers tous, même ceux qui sont différents',
      tip3: '🎁 Donne sans attendre en retour, l\'amour véritable est désintéressé',
      tip4: '👂 Écoute vraiment les autres, sois présent pour ceux qui souffrent',
      tip5: '✨ Commence par t\'aimer toi-même : tu es précieux(se) aux yeux de Dieu'
    }
  },
  
  ranks: {
    1: {
      title: 'CADET - Premiers Vols',
      message: 'Ton voyage céleste commence. Prends les commandes et apprends à naviguer entre les nuages. Chaque mission te rapproche de ta destinée.'
    },
    2: {
      title: 'APPRENTI PILOTE - En Formation',
      message: 'Tu progresses rapidement ! Ton habileté grandit, ta confiance s\'affirme. Continue à t\'élever vers les hauteurs.'
    },
    3: {
      title: 'AVIATEUR - Baptême du Ciel',
      message: 'Tes ailes se déploient avec assurance ! Tu maîtrises les bases du vol et découvres la liberté des cieux.'
    },
    4: {
      title: 'PILOTE CONFIRMÉ - Navigateur Aguerri',
      message: 'Les vents te connaissent, les nuages te respectent ! Tu navigues avec aisance dans les courants célestes.'
    },
    5: {
      title: 'AS DES CIEUX - Virtuose Ailé',
      message: 'Tu danses entre les nuages comme un maître ! Tes réflexes s\'aiguisent, ta précision devient légendaire.'
    },
    6: {
      title: 'ESCADRON D\'ÉLITE - Force Aérienne',
      message: 'Tu fais partie des meilleurs ! Ton expertise inspire les autres pilotes. Tu voles avec une grâce divine.'
    },
    7: {
      title: 'COMMANDANT - Tacticien Céleste',
      message: 'On te confie des missions stratégiques ! Tu commandes le ciel avec sagesse et courage, guidé par la lumière divine.'
    },
    8: {
      title: 'STRATÈGE DES NUÉES - Maître Tactique',
      message: 'Tu anticipes chaque mouvement ! Ton intelligence tactique et ta vision stratégique dépassent l\'ordinaire.'
    },
    9: {
      title: 'VÉTÉRAN - Forgé par les Tempêtes',
      message: 'Tu as traversé mille orages ! Chaque cicatrice raconte une victoire. Tu es une légende vivante des cieux.'
    },
    10: {
      title: 'HÉROS CÉLESTE - Champion Reconnu',
      message: 'Tes exploits sont chantés dans tous les royaumes ! Tu incarnes le courage et la détermination sans faille.'
    },
    11: {
      title: 'LÉGENDE - Mythe Incarné',
      message: 'Ton nom résonne dans tous les cieux ! Les cadets rêvent de devenir comme toi. Tu incarnes l\'excellence et la grâce.'
    },
    12: {
      title: 'CHAMPION ÉTERNEL - Gloire Immortelle',
      message: 'Ta renommée traverse les âges ! Ton héritage inspirera les générations futures de pilotes célestes.'
    },
    13: {
      title: 'MAÎTRE PILOTE - Symphonie Aérienne',
      message: 'Tu ne voles plus, tu composes une symphonie céleste ! Chaque mouvement est perfection, chaque mission un chef-d\'œuvre.'
    },
    14: {
      title: 'AILE DU CIEL - Gardien Éternel',
      message: 'Tu as transcendé la mortalité ! Gardien céleste, protecteur des cieux, ton vol est désormais éternel. L\'infini t\'appartient !'
    }
  },

  verses: {
    level: {
      1: { text: 'La lumière brille dans les ténèbres', reference: 'Jean 1:5' },
      2: { text: 'L\'Esprit de Dieu planait sur les eaux', reference: 'Genèse 1:2' },
      3: { text: 'Ceux qui espèrent en l\'Éternel prennent des ailes comme les aigles', reference: 'Ésaïe 40:31' },
      4: { text: 'Là où est l\'Esprit, là est la liberté', reference: '2 Corinthiens 3:17' },
      5: { text: 'Je t\'ai appelé par ton nom, tu es à moi', reference: 'Ésaïe 43:1' },
      6: { text: 'Je peux tout par celui qui me fortifie', reference: 'Philippiens 4:13' },
      7: { text: 'Après la pluie vient le beau temps', reference: 'Job 37:11' },
      8: { text: 'L\'amour ne périt jamais', reference: '1 Corinthiens 13:8' },
      9: { text: 'Ta foi t\'a sauvé', reference: 'Luc 7:50' },
      10: { text: 'Si quelqu\'un est en Christ, il est une nouvelle créature', reference: '2 Corinthiens 5:17' },
      11: { text: 'Soyez forts et prenez courage', reference: 'Josué 1:9' },
      12: { text: 'Ta parole est une lampe à mes pieds', reference: 'Psaume 119:105' },
      13: { text: 'Vous êtes une race élue', reference: '1 Pierre 2:9' },
      14: { text: 'La vie est une aventure extraordinaire', reference: 'Psaume 99:1 (dit Origine)' }
    },
    rank: {
      1: { text: 'De loin, l\'Éternel s\'est révélé à moi : « Je t\'aime d\'un amour éternel ; c\'est pourquoi je te maintiens ma bonté.', reference: 'Jérémie 31:3' },
      2: { text: 'L\'Éternel donne de la force à celui qui est fatigué, et il augmente la vigueur de celui qui tombe en défaillance.', reference: 'Ésaïe 40:29' },
      3: { text: 'Ceux qui espèrent en l\'Éternel prennent des ailes comme les aigles', reference: 'Ésaïe 40:31' },
      4: { text: 'Là où est l\'Esprit, là est la liberté', reference: '2 Corinthiens 3:17' },
      5: { text: 'Je t\'ai appelé par ton nom, tu es à moi', reference: 'Ésaïe 43:1' },
      6: { text: 'Je peux tout par celui qui me fortifie', reference: 'Philippiens 4:13' },
      7: { text: 'Car Dieu n\'est pas un Dieu de désordre, mais de paix', reference: '1 Corinthiens 14:33' },
      8: { text: 'Ne crains rien, car je suis avec toi', reference: 'Ésaïe 41:10' },
      9: { text: 'Soyez forts et prenez courage', reference: 'Josué 1:9' },
      10: { text: 'Ta foi t\'a sauvé', reference: 'Luc 7:50' },
      11: { text: 'Si quelqu\'un est en Christ, il est une nouvelle créature', reference: '2 Corinthiens 5:17' },
      12: { text: 'Vous êtes une race élue, un sacerdoce royal', reference: '1 Pierre 2:9' },
      13: { text: 'Après la pluie vient le beau temps', reference: 'Job 37:11' },
      14: { text: 'L\'amour ne périt jamais', reference: '1 Corinthiens 13:8' }
    },
    infinite: [
      { text: 'Que votre cœur ne se trouble pas', reference: 'Jean 14:1' },
      { text: 'Je suis avec vous tous les jours', reference: 'Matthieu 28:20' },
      { text: 'L\'Éternel est ma lumière et mon salut', reference: 'Psaume 27:1' },
      { text: 'Vous êtes la lumière du monde', reference: 'Matthieu 5:14' },
      { text: 'L\'amour couvre une multitude de péchés', reference: '1 Pierre 4:8' },
      { text: 'Car Dieu a tant aimé le monde', reference: 'Jean 3:16' },
      { text: 'Cherchez premièrement le royaume de Dieu', reference: 'Matthieu 6:33' },
      { text: 'Le juste vivra par la foi', reference: 'Romains 1:17' },
      { text: 'Tout est possible à celui qui croit', reference: 'Marc 9:23' },
      { text: 'Dieu est amour', reference: '1 Jean 4:8' },
      { text: 'Rien ne pourra nous séparer de l\'amour de Dieu', reference: 'Romains 8:39' },
      { text: 'Marchez par l\'Esprit', reference: 'Galates 5:16' },
      { text: 'Réjouissez-vous toujours dans le Seigneur', reference: 'Philippiens 4:4' },
      { text: 'La paix de Dieu garde vos cœurs', reference: 'Philippiens 4:7' },
      { text: 'Ne crains rien, car je suis avec toi', reference: 'Ésaïe 41:10' },
      { text: 'Le Seigneur est ma force et mon bouclier', reference: 'Psaume 28:7' },
      { text: 'Heureux ceux qui ont le cœur pur', reference: 'Matthieu 5:8' },
      { text: 'L\'espérance ne trompe point', reference: 'Romains 5:5' },
      { text: 'Faites tout avec amour', reference: '1 Corinthiens 16:14' },
      { text: 'Que la grâce du Seigneur soit avec vous', reference: '1 Corinthiens 16:23' }
    ]
  },

  bosses: {
    grim_reaper: {
      name: '💀 La Faucheuse',
      intro: 'La mort elle-même se dresse devant toi... Mais rappelle-toi : Christ a vaincu la mort !',
      phase_1: '🕊️ "Ô mort, où est ta victoire ? Ô mort, où est ton aiguillon ?" (1 Corinthiens 15:55)\n\nLa peur de la mort n\'a plus de pouvoir sur ceux qui croient en la vie éternelle !',
      phase_2: '✝️ "Jésus lui dit : Je suis la résurrection et la vie. Celui qui croit en moi vivra, quand même il serait mort." (Jean 11:25)\n\nLa vie triomphe toujours sur les ténèbres !',
      phase_3: '🌟 "Car Dieu ne nous a pas donné un esprit de timidité, mais un esprit de force, d\'amour et de sagesse." (2 Timothée 1:7)\n\nLa mort n\'est qu\'un passage vers la vraie Vie !',
      defeated: '🙏 VICTOIRE SUR LA MORT !\n\n"Il n\'y a donc maintenant aucune condamnation pour ceux qui sont en Jésus-Christ." (Romains 8:1)\n\nTu as vaincu la peur ! La vie éternelle t\'appartient par la grâce de Dieu.',
      wisdom: 'La mort n\'est pas une fin, mais une transformation. Par le Christ, nous passons de la vie terrestre à la vie éternelle. Chaque vie est précieuse et sacrée, du premier souffle au dernier. La foi chrétienne nous enseigne que la mort a été vaincue à la Croix, et que l\'espérance de la résurrection illumine notre chemin.'
    },
    wall: {
      name: '🧱 La Muraille des Chaînes',
      intro: 'Un mur de peurs et de doutes se dresse devant toi... Mais "là où est l\'Esprit du Seigneur, là est la liberté" !',
      phase_1: '⛓️ "C\'est pour la liberté que Christ nous a affranchis. Demeurez donc fermes, et ne vous laissez pas mettre de nouveau sous le joug de la servitude." (Galates 5:1)\n\nLes chaînes de la PEUR, du DOUTE et de la HONTE n\'ont aucun pouvoir sur toi !',
      phase_2: '🔓 "Si donc le Fils vous affranchit, vous serez réellement libres." (Jean 8:36)\n\nChaque chaîne brisée est une victoire sur les mensonges de l\'ennemi !',
      phase_3: '✨ "Je puis tout par celui qui me fortifie." (Philippiens 4:13)\n\nLa vérité de Dieu détruit les forteresses et les murailles qui t\'emprisonnent !',
      defeated: '🎉 LIBERTÉ EN CHRIST !\n\n"Vous connaîtrez la vérité, et la vérité vous affranchira." (Jean 8:32)\n\nTu as brisé les chaînes ! Tu es libre par la puissance de l\'amour de Dieu.',
      wisdom: 'Les peurs sont comme des chaînes invisibles qui nous empêchent d\'avancer. La Bible nous enseigne que "Dieu ne nous a pas donné un esprit de timidité, mais de force, d\'amour et de sagesse." Chaque peur vaincue par la foi est une chaîne brisée. En Christ, nous sommes appelés à vivre dans la liberté, débarrassés des mensonges qui nous maintiennent captifs. La vérité nous rend libres !'
    },
    dark_cloud: {
      name: '☁️ Le Nuage Sombre',
      intro: 'Un nuage de tempête menace de tout engloutir... Mais "Dieu est notre refuge et notre force, un secours qui ne manque jamais dans la détresse" !',
      phase_1: '⚡ "L\'Éternel est près de ceux qui ont le cœur brisé, et il sauve ceux qui ont l\'esprit dans l\'abattement." (Psaume 34:18)\n\nDans la dépression la plus profonde, protège ton ESPOIR, ta FOI et ton AMOUR !',
      phase_2: '🌩️ "Nous sommes pressés de toute manière, mais non réduits à l\'extrémité ; dans la détresse, mais non dans le désespoir." (2 Corinthiens 4:8)\n\nLes éclairs de la souffrance ne peuvent éteindre la lumière de Dieu en toi !',
      phase_3: '⛈️ "Ces choses, je vous les ai dites, afin que vous ayez la paix en moi. Vous aurez des tribulations dans le monde ; mais prenez courage, j\'ai vaincu le monde." (Jean 16:33)\n\nMême dans la tempête la plus noire, Christ est ton ancre !',
      defeated: '🌈 VICTOIRE SUR LA TEMPÊTE !\n\n"Après la pluie vient le beau temps. Il dissipe les nuages par sa lumière." (Job 37:11-15)\n\nTu as traversé la tempête ! L\'espoir brille de nouveau, plus fort qu\'avant.',
      wisdom: 'Les dépressions, les pertes graves et les peurs subites sont comme des tempêtes qui assombrissent notre ciel intérieur. Mais la Bible nous rappelle que "Celui qui demeure sous l\'abri du Très-Haut repose à l\'ombre du Tout-Puissant." Dans les moments les plus sombres, l\'espoir, la foi et l\'amour sont des lumières que nous devons protéger. Dieu n\'abandonne jamais ses enfants dans la tempête - Il est notre refuge, notre force, et après chaque orage, Il fait briller Son arc-en-ciel de promesses.'
    },
    black_raven: {
      name: '🐦‍⬛ Le Corbeau des Mensonges',
      intro: 'Un corbeau noir crache des mensonges sur ton identité... Mais "tu es précieux à mes yeux, tu as du prix, et je t\'aime" !',
      phase_1: '🪶 "Tu es une créature merveilleuse. Je te loue de ce que je suis une création si merveilleuse." (Psaume 139:14)\n\nLes mensonges disent : PAS ASSEZ BEAU, PAS ASSEZ RICHE, PAS NORMAL...\nMais la VÉRITÉ de Dieu dit : TU ES PRÉCIEUX !',
      phase_2: '✝️ "Voyez quel amour le Père nous a témoigné, pour que nous soyons appelés enfants de Dieu ! Et nous le sommes." (1 Jean 3:1)\n\nLes mensonges crient : MOINS QUE RIEN, TROP DIFFÉRENT, TROP PÉCHEUR...\nMais Dieu dit : TU ES MON ENFANT BIEN-AIMÉ !',
      phase_3: '👑 "Vous êtes une race élue, un sacerdoce royal, une nation sainte, un peuple acquis." (1 Pierre 2:9)\n\nLes mensonges hurlent : TROP MAUVAIS, INDIGNE, REJETÉ...\nMais Christ proclame : TU ES CHOISI, TU ES ROI, TU ES AIMÉ !',
      defeated: '🌟 VICTOIRE SUR LES MENSONGES !\n\n"Vous connaîtrez la vérité, et la vérité vous affranchira." (Jean 8:32)\n\nTu as vaincu les mensonges ! Tu connais maintenant ta vraie identité en Christ.',
      wisdom: 'Le corbeau des mensonges représente toutes les accusations et les fausses croyances que l\'ennemi utilise pour détruire notre identité : "pas assez beau", "pas assez riche", "trop différent", "trop pécheur". Ces mensonges sont des flèches empoisonnées qui visent notre cœur. Mais la Bible nous révèle la VÉRITÉ : nous sommes créés à l\'image de Dieu, rachetés par le sang de Christ, adoptés comme enfants de Dieu. Notre valeur ne dépend pas de notre apparence, notre richesse ou nos erreurs - elle vient de l\'amour inconditionnel de Dieu. En Christ, nous sommes précieux, aimés, choisis, royaux. C\'est notre vraie identité !'
    }
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = fr;
}
