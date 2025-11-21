// ============================================
// 🇪🇸 ESPAÑOL - DOVE OF HOPE
// ============================================

const es = {
  code: 'es',
  name: 'Español',
  flag: '🇪🇸',
  
  ui: {
    score: 'Puntos',
    clouds: 'Nubes',
    level: 'Capítulo',
    lives: 'Vida',
    language: 'Idioma',
    choose_language: 'Elegir idioma',
    language_changed: 'Idioma cambiado'
  },
  
  buttons: {
    start: '¡Enciende!',
    play: 'JUGAR',
    restart: 'REJUGAR',
    infinite_mode: 'Modo Infinito',
    close: 'Cerrar',
    start_bonus: 'Comenzar'
  },
  
  messages: {
    start: '¡Vuela, pequeña paloma! ¡Despeja las nubes!',
    restart: '¡La paloma renace! ¡Aquí vamos de nuevo!',
    gameOver: '¡Game Over! ¡Pero en la adversidad, brillas aún más!',
    victory: '¡VICTORIA! Salmo 99.1 - ¡La vida es una aventura extraordinaria! - dice Orígenes',
    levelUp: 'Nivel {level} - ¡La luz crece!',
    motivation: '¡Es hora de encender la luz - Es un buen momento para hacer realidad tus sueños!',
    welcome: '¡Bienvenido, Cadete Primer Vuelo!'
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
    '¡Baila con los elementos, eres libre!'
  ],
  
  rain: [
    '¡Después de la lluvia viene el sol!',
    '¡Tu fe es más fuerte que la tormenta!',
    '¡La tormenta revela la fuerza de tus alas!'
  ],
  
  powerups: {
    try_again: '¡Pero en la adversidad, brillas aún más!',
    umbrella: '¡Paraguas activado! ¡Baila con los elementos!',
    speed: '¡Velocidad divina! ¡Tus alas son libres!',
    multishot: '¡Triple luz! ¡Tu corazón brilla!',
    rainbow: '¡Escudo Arcoíris activado! ¡Protección divina!',
    star_collected: '⭐ ¡Estrella recogida! ({count} en stock) - ¡Doble clic para onda de choque!',
    level_up: '✨ Nivel {level}: {title}',
    new_record: '🏆 ¡NUEVO RÉCORD! Puntuación: {score}',
    new_record_popup: '🎉 ¡Nuevo récord!\n\nPuntuación: {score}\n\nTu puntuación ha sido guardada.\nHaz clic en Exportar en el menú Tesoro para compartirla.',
    infinite_mode: '🔄 ¡Modo Infinito activado! Versículos cada 100 nubes ☁️',
    record_saved: '☁️ ¡Récord guardado!',
    heart: '💖 ¡+1 Vida! ¡La gracia de Dios te protege!',
    boss_defeated: '🏆 ¡JEFE DERROTADO! +{score} pts',
    storm_cleared: '🌈 ¡La tormenta se disipa! ¡La esperanza brilla de nuevo!',
    continue: '✨ Continuar',
    save_system: '✨ Sistema de guardado'
  },
  
  bonus: {
    collect_blessings: 'Recoge las bendiciones:',
    star: 'Estrella',
    heart: 'Corazón',
    cross: 'Cruz',
    rainbow: 'Arcoíris',
    coin_trap: 'Moneda = -200 pts (¡TRAMPA!)',
    objective: 'Objetivo:',
    objects: 'objetos',
    level_title: 'NIVEL BONUS'
  },
  
  treasure: {
    title: '💎 Menú Tesoro',
    my_records: '🏆 Mis Récords',
    best_score: 'Mejor Puntuación',
    max_level: 'Nivel Máximo',
    star_stock: '⭐ Stock de Estrellas',
    chapters_conquered: '🏅 Capítulos Conquistados',
    chapters_completed: 'capítulos completados',
    infinite_progress: '♾️ Progreso Modo Infinito',
    verse_collection: 'Recolecta versículos aleatorios cada 100 nubes',
    xp_clouds: 'XP: {count} nubes',
    next_verse: 'Próximo verso en: {count}',
    verses_collected: '📚 {count} versículos recolectados',
    last_played: 'Última partida',
    creator: '✨ Creador',
    creator_name: '🎮 Emmanuel Payet',
    creator_bio: 'Desarrollador y Creador de juegos inspirados',
    audiomack: '📱 Audiomack',
    creator_message: '¡Que este juego te inspire y fortalezca! 🕊️',
    discover_artist: '🎵 Descubrir al Artista',
    cloud_connect: '☁️ Conectar a la nube',
    cloud_manage: '☁️ Gestionar mi conexión',
    life_tips_faith: '✝️ Fe',
    life_tips_courage: '💪 Coraje',
    life_tips_peace: '🕊️ Paz',
    life_tips_love: '❤️ Amor',
    life_tips_prompt: 'Haz clic en una pestaña para descubrir un consejo de vida',
    infinite_chapter: 'Capítulo {number}',
    my_profile: 'Mi Perfil',
    nickname: 'Apodo',
    email: 'Correo electrónico',
    cloud_status: 'Nube',
    connected: 'Conectado',
    disconnected: 'Desconectado',
    highest_level: 'Mejor Puntuación',
    last_game: 'Última partida',
    testimonies_title: 'Testimonios de Esperanza',
    testimonies_description: 'Descubre historias de valor y sanación',
    read_testimonies: 'Leer testimonios',
    save_cloud: 'Guardar en la Nube',
    share_score: 'Compartir mi puntuación',
    not_set: 'No definido',
    boss_wisdom_title: 'Sabiduría de los Jefes',
    boss_wisdom_subtitle: 'Derrota a los jefes para desbloquear sus enseñanzas profundas',
    boss_wisdom_collected: 'sabiduría desbloqueada',
    boss_wisdom_locked: '¡Esta sabiduría todavía está bloqueada. ¡Derrota a este jefe para desbloquearla!',
    boss_wisdom_philosophy: 'Filosofía y Enseñanza',
    boss_wisdom_victory: 'Mensaje de Victoria',
    boss_wisdom_close: 'Cerrar'
  },
  
  intro: 'La vida es a menudo una larga batalla, se necesita coraje y fuerza para resistir en los días malos. Valiente héroe, levántate, y con el amor de Dios transforma las nubes grises en bien.',
  
  clouds_cleared: '{count} nubes disipadas',
  transform_clouds: 'Transforma las nubes grises',  level_titles: {
    1: 'Alba de la Esperanza',
    2: 'Aliento Divino',
    3: 'Alas de Fe',
    4: 'Perdón y Libertad',
    5: 'Elegido y Precioso',
    6: 'Fuerza Interior',
    7: 'Tormenta de Gracia',
    8: 'Amor Incondicional',
    9: 'Héroe de Luz',
    10: 'Nueva Criatura',
    11: 'Coraje del León',
    12: 'Puerta de la Sabiduría',
    13: 'Cielo Nuevo',
    14: 'La Aventura Eterna'
  },
  

  
  levels: {
    1: '¡Has dado tus primeros pasos en la luz! No estás solo en esta batalla.',
    2: '¡Como un águila, Dios te fortalece! Te elige tal como eres, con tus debilidades y tu belleza.',
    3: '¡No eres inútil, no eres rechazado. Eres amado infinitamente!',
    4: '¡Tus errores no te definen. El amor de Dios borra todo y te hace libre!',
    5: '¡Eres elegido! No por tu perfección, sino por pura gracia.',
    6: 'En tu debilidad, Su fuerza se revela. ¡Puedes todo, porque Él te fortalece!',
    7: '¡Los desafíos se multiplican, pero bailas con los elementos!',
    8: '¡No necesitas ser perfecto para ser amado. Ya eres perfectamente amado!',
    9: '¡No eres demasiado pecador para Dios. Eres Su héroe, Su hijo amado!',
    10: '¡Lo viejo pasó, he aquí lo nuevo! Renaces en la luz divina.',
    11: '¡Levántate con coraje! ¡Eres digno, eres capaz, eres victorioso!',
    12: '¡La Biblia no es un libro de juicio, sino un tesoro de amor para ti! Ábrela con confianza.',
    13: '¡Te acercas a la cumbre! Lee la Biblia como un vencedor, no como un condenado. ¡Eres elegido y amado!',
    14: '¡Último desafío antes de la victoria total! La Biblia te espera, está escrita para ti, héroe de luz. ¡Continúa, casi llegas a la cumbre!'
  },
  
  victory_message: '¡VICTORIA! ¡Has transformado la oscuridad en luz! Ahora, abre tu Biblia con confianza: ¡eres elegido, eres amado, eres victorioso! "La vida es una aventura extraordinaria" - Salmo 99:1 dice Orígenes. ¡Que la paz y el amor reinen en tu corazón!',
  
  infinite_messages: [
    '¡Continúa tu aventura! ¡Cada nube disipada es una victoria!',
    '¡Eres un campeón de la luz! ¡Continúa tu búsqueda!',
    '¡El infinito te pertenece! ¡Que tu fe crezca aún más!',
    '¡Superas todos los límites! ¡Bravo, héroe eterno!',
    '¡Tu perseverancia es admirable! ¡Sigue brillando!'
  ],

  popups: {
    not_connected: '⚠️ ¡No conectado!\n\nConéctate primero a través del menú Tesoro.',
    no_data_to_save: '⚠️ No hay datos para guardar\n\n¡Juega primero para crear datos!',
    saving: '⏳ Guardando...',
    save_failed: '❌ ¡Error al guardar!\n\n{error}',
    save_error: '❌ ¡Error de guardado!\n\n{error}',
    data_imported: '✅ ¡Datos importados exitosamente!',
    invalid_file: '❌ Archivo inválido',
    enter_nickname_email: '❌ ¡Por favor ingresa apodo Y correo!',
    invalid_email: '❌ ¡Correo inválido!',
    connected_local_saved: '✅ ¡Conectado!\n\nDatos locales guardados en la nube.',
    connected_cloud_restored: '✅ ¡Conectado!\n\nDatos de la nube restaurados.',
    connected_success: '✅ ¡Conectado exitosamente!\n\nTu progreso se guardará automáticamente en línea.',
    reset_confirm: '⚠️ ¿Realmente quieres restablecer todos tus datos?',
    data_conflict: '⚠️ ¡Conflicto de datos detectado!',
    connection_error: '❌ Error de conexión'
  },

  testimony: {
    title: '💎 Tesoro de Vida - Emmanuel',
    paragraph1: 'Hubo un tiempo en que la enfermedad me aisló terriblemente y nubes oscuras vinieron a invadir mi vida. Intenté rendirme pero antes de hacerlo, ¡clamé a Dios! <strong>Es a ti a quien doy mi vida y no a las sombras traicioneras.</strong>',
    paragraph2: 'Como una oración, mi clamor fue escuchado y mi vida cambió desde el día en que supe en mi corazón que <em>soy amado como soy</em>. Un largo trabajo de confianza, valor y cambio comenzó en mí.',
    paragraph3: 'Aprendí de los errores, aprendí a no mirar siempre atrás sin olvidar nunca. Pero sobre todo aprendí a mirar el futuro con paciencia, esperanza y alegría.',
    paragraph4: 'Una alegría que encontré en la alabanza y adoración a Dios salvador, a aquel que me tendió la mano cuando nadie podía estar ahí para mí. Me sacó del valle de la muerte y me hizo ver lo que es verdaderamente importante: <strong>la vida simple, ordinaria</strong>.',
    paragraph5: 'Vi más allá de mis deseos materialistas, vi que debía mirar lo que tengo y no lo que no tengo. Y amar lo que soy, como quiero ser. <em>Vi la esperanza cara a cara.</em>',
    paragraph6: 'Pedí y recibí respuestas inefables que produjeron en mí una fe inquebrantable. A través de las dificultades crecí y no me arrepiento de haber perseverado, esperado una y otra vez porque <strong>cada colina escondía tesoros de vida</strong>, cada montaña conquistada por el valor de moverme trajo un mejor futuro, recuerdos de vida extraordinaria, encuentros y lugares maravillosos.',
    final_message: '🕊️ Por eso Jesús te dice: ¡Nunca te rindas, persevera hasta lo imposible! 🕊️'
  },

  life_tips: {
    faith: {
      title: '✝️ Consejos de Fe',
      tip1: '💫 "La fe es la certeza de lo que se espera" - Hebreos 11:1',
      tip2: '🙏 Ora cada día, incluso unos minutos son suficientes para fortalecer tu alma',
      tip3: '📖 Lee la Biblia regularmente para nutrir tu fe y encontrar respuestas',
      tip4: '✨ Confía en Dios en los momentos difíciles, Él tiene un plan para ti',
      tip5: '🌟 Rodéate de creyentes que te animen en tu fe'
    },
    courage: {
      title: '💪 Consejos de Valor',
      tip1: '🦁 "Sé fuerte y valiente, no temas" - Josué 1:9',
      tip2: '🔥 Enfrenta tus miedos uno por uno, cada pequeña victoria cuenta',
      tip3: '🎯 Establece objetivos claros y avanza paso a paso hacia ellos',
      tip4: '👊 Nunca te rindas, incluso cuando sea difícil - la perseverancia vale la pena',
      tip5: '⭐ Recuerda tus éxitos pasados para encontrar fuerza para continuar'
    },
    peace: {
      title: '🕊️ Consejos de Paz',
      tip1: '🌿 "Mi paz os dejo, mi paz os doy" - Juan 14:27',
      tip2: '🧘 Toma tiempo cada día para descansar y meditar',
      tip3: '🌺 Perdona a quienes te han herido, libérate del peso del rencor',
      tip4: '🌈 Busca la paz en las cosas pequeñas: la naturaleza, la música, la oración',
      tip5: '💕 Rodéate de personas positivas que te brinden serenidad'
    },
    love: {
      title: '❤️ Consejos de Amor',
      tip1: '💖 "Amaos los unos a los otros como yo os he amado" - Juan 13:34',
      tip2: '🤝 Muestra bondad hacia todos, incluso hacia quienes son diferentes',
      tip3: '🎁 Da sin esperar nada a cambio, el amor verdadero es desinteresado',
      tip4: '👂 Escucha realmente a los demás, está presente para quienes sufren',
      tip5: '✨ Comienza por amarte a ti mismo: eres precioso a los ojos de Dios'
    }
  },

  ranks: {
    1: {
      title: 'CADETE - Primeros Vuelos',
      message: 'Tu viaje celestial comienza. Toma los controles y aprende a navegar entre las nubes. Cada misión te acerca a tu destino.'
    },
    2: {
      title: 'PILOTO APRENDIZ - En Formación',
      message: '¡Progresas rápidamente! Tu habilidad crece, tu confianza se fortalece. Continúa elevándote hacia las alturas.'
    },
    3: {
      title: 'AVIADOR - Bautismo del Cielo',
      message: '¡Tus alas se despliegan con confianza! Dominas las bases del vuelo y descubres la libertad de los cielos.'
    },
    4: {
      title: 'PILOTO CONFIRMADO - Navegante Experimentado',
      message: '¡Los vientos te conocen, las nubes te respetan! Navegas con facilidad a través de las corrientes celestiales.'
    },
    5: {
      title: 'AS DE LOS CIELOS - Virtuoso Alado',
      message: '¡Bailas entre las nubes como un maestro! Tus reflejos se agudizan, tu precisión se vuelve legendaria.'
    },
    6: {
      title: 'ESCUADRÓN DE ÉLITE - Fuerza Aérea',
      message: '¡Eres uno de los mejores! Tu experiencia inspira a otros pilotos. Vuelas con gracia divina.'
    },
    7: {
      title: 'COMANDANTE - Táctico Celestial',
      message: '¡Se te confían misiones estratégicas! Comandas el cielo con sabiduría y coraje, guiado por la luz divina.'
    },
    8: {
      title: 'ESTRATEGA DE LAS NUBES - Maestro Táctico',
      message: '¡Anticipas cada movimiento! Tu inteligencia táctica y visión estratégica superan lo ordinario.'
    },
    9: {
      title: 'VETERANO - Forjado por las Tormentas',
      message: '¡Has atravesado mil tempestades! Cada cicatriz cuenta una victoria. Eres una leyenda viviente de los cielos.'
    },
    10: {
      title: 'HÉROE CELESTIAL - Campeón Reconocido',
      message: '¡Tus hazañas se cantan en todos los reinos! Encarnas el coraje y la determinación inquebrantable.'
    },
    11: {
      title: 'LEYENDA - Mito Encarnado',
      message: '¡Tu nombre resuena en todos los cielos! Los cadetes sueñan con ser como tú. Encarnas la excelencia y la gracia.'
    },
    12: {
      title: 'CAMPEÓN ETERNO - Gloria Inmortal',
      message: '¡Tu renombre trasciende las eras! Tu legado inspirará a futuras generaciones de pilotos celestiales.'
    },
    13: {
      title: 'MAESTRO PILOTO - Sinfonía Aérea',
      message: '¡Ya no vuelas, compones una sinfonía celestial! Cada movimiento es perfección, cada misión una obra maestra.'
    },
    14: {
      title: 'ALA DEL CIELO - Guardián Eterno',
      message: '¡Has trascendido la mortalidad! Guardián celestial, protector de los cielos, tu vuelo es ahora eterno. ¡El infinito te pertenece!'
    }
  },

  verses: {
    level: {
      1: { text: 'La luz brilla en las tinieblas', reference: 'Juan 1:5' },
      2: { text: 'El Espíritu de Dios se movía sobre las aguas', reference: 'Génesis 1:2' },
      3: { text: 'Los que esperan en el Señor tendrán alas como las águilas', reference: 'Isaías 40:31' },
      4: { text: 'Donde está el Espíritu del Señor, allí hay libertad', reference: '2 Corintios 3:17' },
      5: { text: 'Te he llamado por tu nombre, tú eres mío', reference: 'Isaías 43:1' },
      6: { text: 'Todo lo puedo en Cristo que me fortalece', reference: 'Filipenses 4:13' },
      7: { text: 'Después de la lluvia viene el sol', reference: 'Job 37:11' },
      8: { text: 'El amor nunca deja de ser', reference: '1 Corintios 13:8' },
      9: { text: 'Tu fe te ha salvado', reference: 'Lucas 7:50' },
      10: { text: 'Si alguno está en Cristo, nueva criatura es', reference: '2 Corintios 5:17' },
      11: { text: 'Esfuérzate y sé valiente', reference: 'Josué 1:9' },
      12: { text: 'Tu palabra es lámpara a mis pies', reference: 'Salmo 119:105' },
      13: { text: 'Vosotros sois linaje escogido', reference: '1 Pedro 2:9' },
      14: { text: 'La vida es una aventura extraordinaria', reference: 'Salmo 99:1 (dice Orígenes)' }
    },
    rank: {
      1: { text: 'Desde lejos el Señor se me apareció: "Con amor eterno te he amado; por tanto, te prolongué mi misericordia.', reference: 'Jeremías 31:3' },
      2: { text: 'El Señor da fuerza al cansado, y multiplica las fuerzas al que no tiene vigor.', reference: 'Isaías 40:29' },
      3: { text: 'Los que esperan en el Señor tendrán alas como las águilas', reference: 'Isaías 40:31' },
      4: { text: 'Donde está el Espíritu del Señor, allí hay libertad', reference: '2 Corintios 3:17' },
      5: { text: 'Te he llamado por tu nombre, tú eres mío', reference: 'Isaías 43:1' },
      6: { text: 'Todo lo puedo en Cristo que me fortalece', reference: 'Filipenses 4:13' },
      7: { text: 'Porque Dios no es Dios de confusión, sino de paz', reference: '1 Corintios 14:33' },
      8: { text: 'No temas, porque yo estoy contigo', reference: 'Isaías 41:10' },
      9: { text: 'Esfuérzate y sé valiente', reference: 'Josué 1:9' },
      10: { text: 'Tu fe te ha salvado', reference: 'Lucas 7:50' },
      11: { text: 'Si alguno está en Cristo, nueva criatura es', reference: '2 Corintios 5:17' },
      12: { text: 'Vosotros sois linaje escogido, real sacerdocio', reference: '1 Pedro 2:9' },
      13: { text: 'Después de la lluvia viene el sol', reference: 'Job 37:11' },
      14: { text: 'El amor nunca deja de ser', reference: '1 Corintios 13:8' }
    },
    infinite: [
      { text: 'No se turbe vuestro corazón', reference: 'Juan 14:1' },
      { text: 'Estoy con vosotros todos los días', reference: 'Mateo 28:20' },
      { text: 'El Señor es mi luz y mi salvación', reference: 'Salmo 27:1' },
      { text: 'Vosotros sois la luz del mundo', reference: 'Mateo 5:14' },
      { text: 'El amor cubre multitud de pecados', reference: '1 Pedro 4:8' },
      { text: 'Porque de tal manera amó Dios al mundo', reference: 'Juan 3:16' },
      { text: 'Buscad primeramente el reino de Dios', reference: 'Mateo 6:33' },
      { text: 'El justo por la fe vivirá', reference: 'Romanos 1:17' },
      { text: 'Todo es posible para el que cree', reference: 'Marcos 9:23' },
      { text: 'Dios es amor', reference: '1 Juan 4:8' },
      { text: 'Nada nos podrá separar del amor de Dios', reference: 'Romanos 8:39' },
      { text: 'Andad en el Espíritu', reference: 'Gálatas 5:16' },
      { text: 'Regocijaos siempre en el Señor', reference: 'Filipenses 4:4' },
      { text: 'La paz de Dios guarda vuestros corazones', reference: 'Filipenses 4:7' },
      { text: 'No temas, porque yo estoy contigo', reference: 'Isaías 41:10' },
      { text: 'El Señor es mi fortaleza y mi escudo', reference: 'Salmo 28:7' },
      { text: 'Bienaventurados los de limpio corazón', reference: 'Mateo 5:8' },
      { text: 'La esperanza no avergüenza', reference: 'Romanos 5:5' },
      { text: 'Haced todo con amor', reference: '1 Corintios 16:14' },
      { text: 'La gracia del Señor sea con vosotros', reference: '1 Corintios 16:23' }
    ]
  },

  bosses: {
    spider: {
      name: '🕷️ La Araña de la Oscuridad',
      intro: 'Una araña gigante teje su red de miedo... ¡Pero "Dios no nos ha dado espíritu de cobardía"!',
      phase_1: '🕸️ "Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio." (2 Timoteo 1:7)\n\n¡El MIEDO AL DOLOR, el MIEDO A SER PICADO... Estos miedos te paralizan!',
      phase_2: '✨ "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios." (Isaías 41:10)\n\n¡Los MIEDOS ILÓGICOS y las FOBIAS no tienen poder sobre quienes caminan en fe!',
      phase_3: '🛡️ "Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo." (Salmo 23:4)\n\n¡El miedo es un MECANISMO PROTECTOR, pero no debe DOMINARTE!',
      defeated: '🦋 ¡VICTORIA SOBRE EL MIEDO!\n\n"El perfecto amor echa fuera el temor." (1 Juan 4:18)\n\n¡Has conquistado el miedo paralizante! La fe transforma el miedo en coraje.',
      wisdom: 'La araña simboliza todos nuestros miedos: el miedo al dolor, a ser picados, las fobias ilógicas. Estos miedos son a menudo mecanismos protectores normales que nos mantienen a salvo del peligro. Pero cuando se vuelven excesivos, nos paralizan. La Biblia dice: "Dios no nos ha dado espíritu de cobardía, sino de poder, amor y dominio propio." La fe no niega el peligro, pero nos da el coraje para enfrentarlo. En Cristo, aprendemos a distinguir entre la precaución saludable y el miedo paralizante. ¡El perfecto amor de Dios echa fuera el temor!'
    },
    flying_snake: {
      name: '🐍 La Serpiente Voladora',
      intro: 'La serpiente antigua, símbolo de tentación, se levanta ante ti... ¡Pero "resistid al diablo, y huirá de vosotros"!',
      phase_1: '🔥 "Velad y orad, para que no entréis en tentación." (Mateo 26:41)\n\n¡TENTACIÓN, la MENTIRA ORIGINAL, la DUDA que susurra: "¿Conque Dios os ha dicho...?"',
      phase_2: '⚔️ "Resistid al diablo, y huirá de vosotros. Acercaos a Dios, y él se acercará a vosotros." (Santiago 4:7-8)\n\n¡El veneno del COMPROMISO y la DESOBEDIENCIA no puede alcanzar a quienes permanecen cerca de Dios!',
      phase_3: '✝️ "Y como Moisés levantó la serpiente en el desierto, así es necesario que el Hijo del Hombre sea levantado." (Juan 3:14)\n\n¡Cristo ha APLASTADO la cabeza de la serpiente! ¡Su victoria es tu victoria!',
      defeated: '🌟 ¡VICTORIA SOBRE LA TENTACIÓN!\n\n"Ésta te herirá en la cabeza, y tú le herirás en el calcañar." (Génesis 3:15)\n\n¡Has conquistado la tentación! En Cristo, la serpiente antigua está derrotada.',
      wisdom: 'La serpiente voladora representa la tentación y la mentira original del Jardín del Edén: "No moriréis... seréis como Dios." Es la voz que siembra duda sobre la bondad de Dios, empujándonos hacia el compromiso y la desobediencia. Pero la Biblia enseña: "Resistid al diablo, y huirá." La tentación no es pecado - es la invitación al pecado. Jesús mismo fue tentado, pero resistió a través de la Palabra de Dios. En la Cruz, Cristo aplastó la cabeza de la serpiente. A través de su victoria, tenemos el poder de resistir y vencer toda tentación. ¡Acercaos a Dios, y Él se acercará a nosotros!'
    },
    crazy_chicken: {
      name: '🐔 El Pollo Loco',
      intro: 'Un pollo que entra en pánico corriendo en todas direcciones... ¡Los falsos miedos te vuelven loco y te paralizan!',
      phase_1: '😰 "Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio." (2 Timoteo 1:7)\n\n¡FALSOS MIEDOS SUBJETIVOS: "¿Y si...?", "Tal vez...", "Tengo miedo de que..." - ¡Miedos IMAGINARIOS que te FRENAN!',
      phase_2: '🧠 "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración." (Filipenses 4:6)\n\n¡ESCENARIOS CATASTRÓFICOS en tu cabeza, MIEDOS IRRACIONALES que te vuelven loco! ¡BASTA!',
      phase_3: '✨ "Porque Dios es el que en vosotros produce así el querer como el hacer, por su buena voluntad." (Filipenses 2:13)\n\n¡Estos miedos SUBJETIVOS NO SON LA REALIDAD! ¡Dios te dio SABIDURÍA, no LOCURA!',
      defeated: '🦅 ¡VICTORIA SOBRE LOS FALSOS MIEDOS!\n\n"No temas, porque yo estoy contigo." (Isaías 41:10)\n\n¡Has conquistado los miedos imaginarios! Ahora caminas en sabiduría, no en locura.',
      wisdom: 'El pollo loco representa los falsos miedos subjetivos que nos vuelven locos: "¿Y si fracaso?", "¿Y si la gente me juzga?", "¿Y si no soy suficientemente bueno?". Estos miedos imaginarios, estos escenarios catastróficos en nuestras cabezas nos paralizan y nos frenan. ¡Entramos en pánico como un pollo asustado por cosas que tal vez nunca sucedan! La Biblia dice: "Dios no nos ha dado espíritu de cobardía, sino de poder, amor y dominio propio." El 95% de nuestros miedos nunca se hacen realidad. Estos miedos subjetivos no son la realidad - son mentiras del enemigo para impedirnos avanzar. "Por nada estéis afanosos" - Dios nos llama a reemplazar los falsos miedos con fe, el pánico con paz, los escenarios catastróficos con confianza en Su providencia.'
    },
    grim_reaper: {
      name: '💀 La Parca',
      intro: 'La muerte misma se levanta ante ti... ¡Pero recuerda: Cristo ha vencido la muerte!',
      phase_1: '🕊️ "¿Dónde está, oh muerte, tu aguijón? ¿Dónde, oh sepulcro, tu victoria?" (1 Corintios 15:55)\n\n¡El miedo a la muerte no tiene poder sobre quienes creen en la vida eterna!',
      phase_2: '✝️ "Le dijo Jesús: Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá." (Juan 11:25)\n\n¡La vida siempre triunfa sobre las tinieblas! ¡Cada momento es una VICTORIA!',
      phase_3: '🌟 "Enséñanos de tal modo a contar nuestros días, que traigamos al corazón sabiduría." (Salmo 90:12)\n\n¡No importa el tiempo que quede - VIVE PLENAMENTE! ¡Cada día es un REGALO!',
      defeated: '🙏 ¡VICTORIA SOBRE LA MUERTE!\n\n"Ahora, pues, ninguna condenación hay para los que están en Cristo Jesús." (Romanos 8:1)\n\n¡Has conquistado el miedo! La vida eterna es tuya por la gracia de Dios.',
      wisdom: 'La muerte no es un final, sino una transformación. A través de Cristo, pasamos de la vida terrenal a la vida eterna. No importa cuánto tiempo nos quede o cómo vivamos - lo mejor es vivir cada momento como una victoria, cada nuevo año como un regalo. ¡Incluso en la enfermedad, incluso en las pruebas, la ESPERANZA y el OPTIMISMO nos dan alas y hacen que lo imposible a menudo sea posible! La Biblia dice: "Enséñanos a contar nuestros días, para que traigamos sabiduría al corazón." Cada día es precioso. Cada aliento es gracia. La fe cristiana nos enseña que la muerte fue derrotada en la Cruz, y que la esperanza de la resurrección ilumina nuestro camino. Vivamos pues plenamente, con alegría y gratitud, porque "¡Este es el día que hizo el Señor; regocijémonos y alegrémonos en él!" (Salmo 118:24)'
    },
    wall: {
      name: '🧱 La Muralla de Cadenas',
      intro: 'Un muro de miedos y dudas se levanta ante ti... ¡Pero "donde está el Espíritu del Señor, allí hay libertad"!',
      phase_1: '⛓️ "Para libertad fue que Cristo nos hizo libres; permaneced, pues, firmes, y no os sometáis otra vez al yugo de esclavitud." (Gálatas 5:1)\n\n¡Las cadenas del MIEDO, la DUDA y la VERGÜENZA no tienen poder sobre ti!',
      phase_2: '🔓 "Así que, si el Hijo os libertare, seréis verdaderamente libres." (Juan 8:36)\n\n¡Cada cadena rota es una victoria sobre las mentiras del enemigo!',
      phase_3: '✨ "Todo lo puedo en Cristo que me fortalece." (Filipenses 4:13)\n\n¡La verdad de Dios destruye las fortalezas y murallas que te aprisionan!',
      defeated: '🎉 ¡LIBERTAD EN CRISTO!\n\n"Y conoceréis la verdad, y la verdad os hará libres." (Juan 8:32)\n\n¡Has roto las cadenas! Eres libre por el poder del amor de Dios.',
      wisdom: 'Los miedos son como cadenas invisibles que nos impiden avanzar. La Biblia nos enseña que "Dios no nos ha dado espíritu de cobardía, sino de poder, amor y dominio propio." Cada miedo conquistado a través de la fe es una cadena rota. En Cristo, estamos llamados a vivir en libertad, liberados de las mentiras que nos mantienen cautivos. ¡La verdad nos hace libres!'
    },
    dark_cloud: {
      name: '☁️ La Nube Oscura',
      intro: 'Una nube de tormenta amenaza con tragarlo todo... ¡Pero "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones"!',
      phase_1: '⚡ "Cercano está Jehová a los quebrantados de corazón; y salva a los contritos de espíritu." (Salmo 34:18)\n\n¡En la depresión más profunda, protege tu ESPERANZA, tu FE y tu AMOR!',
      phase_2: '🌩️ "Estamos atribulados en todo, mas no angustiados; en apuros, mas no desesperados." (2 Corintios 4:8)\n\n¡Los relámpagos del sufrimiento no pueden apagar la luz de Dios en ti!',
      phase_3: '⛈️ "Estas cosas os he hablado para que en mí tengáis paz. En el mundo tendréis aflicción; pero confiad, yo he vencido al mundo." (Juan 16:33)\n\n¡Incluso en la tormenta más oscura, Cristo es tu ancla!',
      defeated: '🌈 ¡VICTORIA SOBRE LA TORMENTA!\n\n"Después de la lluvia viene el sol. Él disipa las nubes con su luz." (Job 37:11-15)\n\n¡Has atravesado la tormenta! La esperanza brilla de nuevo, más fuerte que antes.',
      wisdom: 'Las depresiones, las pérdidas graves y los miedos repentinos son como tormentas que oscurecen nuestro cielo interior. Pero la Biblia nos recuerda que "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente." En los momentos más oscuros, la esperanza, la fe y el amor son luces que debemos proteger. Dios nunca abandona a sus hijos en la tormenta - Él es nuestro refugio, nuestra fuerza, y después de cada tempestad, Él hace brillar Su arco iris de promesas.'
    },
    black_raven: {
      name: '🐦‍⬛ El Cuervo de las Mentiras',
      intro: 'Un cuervo negro escupe mentiras sobre tu identidad... ¡Pero "eres precioso a mis ojos, eres honorable, y yo te amo"!',
      phase_1: '🪶 "Te alabaré; porque formidables, maravillosas son tus obras." (Salmo 139:14)\n\nLas mentiras dicen: NO SUFICIENTEMENTE HERMOSO, NO SUFICIENTEMENTE RICO, NO NORMAL...\n¡Pero la VERDAD de Dios dice: ERES PRECIOSO!',
      phase_2: '✝️ "Mirad cuál amor nos ha dado el Padre, para que seamos llamados hijos de Dios; y lo somos." (1 Juan 3:1)\n\nLas mentiras gritan: SIN VALOR, DEMASIADO DIFERENTE, DEMASIADO PECADOR...\n¡Pero Dios dice: ERES MI HIJO AMADO!',
      phase_3: '👑 "Vosotros sois linaje escogido, real sacerdocio, nación santa, pueblo adquirido por Dios." (1 Pedro 2:9)\n\nLas mentiras aúllan: DEMASIADO MALO, INDIGNO, RECHAZADO...\n¡Pero Cristo proclama: ERES ELEGIDO, ERES REY, ERES AMADO!',
      defeated: '🌟 ¡VICTORIA SOBRE LAS MENTIRAS!\n\n"Y conoceréis la verdad, y la verdad os hará libres." (Juan 8:32)\n\n¡Has conquistado las mentiras! Ahora conoces tu verdadera identidad en Cristo.',
      wisdom: 'El cuervo de las mentiras representa todas las acusaciones y falsas creencias que el enemigo usa para destruir nuestra identidad: "no suficientemente hermoso", "no suficientemente rico", "demasiado diferente", "demasiado pecador". Estas mentiras son flechas envenenadas dirigidas a nuestros corazones. Pero la Biblia nos revela la VERDAD: fuimos creados a imagen de Dios, redimidos por la sangre de Cristo, adoptados como hijos de Dios. Nuestro valor no depende de nuestra apariencia, riqueza o errores - viene del amor incondicional de Dios. En Cristo, somos preciosos, amados, elegidos, reales. ¡Esta es nuestra verdadera identidad!'
    }
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = es;
}
