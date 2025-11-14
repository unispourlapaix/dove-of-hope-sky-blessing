// Module de base de données de versets bibliques (Psaumes)
// Bible Verses Database - Multilingual

const BIBLE_VERSES = {
  fr: [
    // Protection et Confiance
    { text: "L'Éternel est ma lumière et mon salut : De qui aurais-je crainte ?", ref: "Psaume 27:1" },
    { text: "L'Éternel est mon berger : je ne manquerai de rien.", ref: "Psaume 23:1" },
    { text: "Quand je marche dans la vallée de l'ombre de la mort, je ne crains aucun mal, car tu es avec moi.", ref: "Psaume 23:4" },
    { text: "Celui qui habite sous l'abri du Très-Haut repose à l'ombre du Tout-Puissant.", ref: "Psaume 91:1" },
    { text: "Il ne te sera fait aucun mal, et aucune plaie n'approchera de ta tente.", ref: "Psaume 91:10" },
    { text: "Car il ordonnera à ses anges de te garder dans toutes tes voies.", ref: "Psaume 91:11" },
    { text: "L'Éternel est mon rocher, ma forteresse, mon libérateur.", ref: "Psaume 18:3" },
    { text: "En Dieu je me confie, je ne crains rien : que peuvent me faire des hommes ?", ref: "Psaume 56:12" },
    
    // Louange et Joie
    { text: "Les cieux racontent la gloire de Dieu, et l'étendue manifeste l'œuvre de ses mains.", ref: "Psaume 19:2" },
    { text: "Éternel, tu es mon Dieu ! Je t'exalterai, je célébrerai ton nom.", ref: "Psaume 118:28" },
    { text: "Ce jour que l'Éternel a fait : qu'il soit pour nous un sujet de joie et d'allégresse !", ref: "Psaume 118:24" },
    { text: "Venez, poussons des cris de joie vers l'Éternel ! Poussons des cris de joie vers le rocher de notre salut !", ref: "Psaume 95:1" },
    { text: "Chantez à l'Éternel un cantique nouveau ! Chantez à l'Éternel, vous tous, habitants de la terre !", ref: "Psaume 96:1" },
    
    // Espérance et Consolation
    { text: "L'Éternel est près de ceux qui ont le cœur brisé, et il sauve ceux qui ont l'esprit dans l'abattement.", ref: "Psaume 34:19" },
    { text: "Recommande ton sort à l'Éternel, mets ta confiance en lui, et il agira.", ref: "Psaume 37:5" },
    { text: "Garde le silence devant l'Éternel, et espère en lui.", ref: "Psaume 37:7" },
    { text: "Comme une biche soupire après des courants d'eau, ainsi mon âme soupire après toi, ô Dieu !", ref: "Psaume 42:2" },
    { text: "Dieu est pour nous un refuge et un appui, un secours qui ne manque jamais dans la détresse.", ref: "Psaume 46:2" },
    { text: "Arrêtez, et sachez que je suis Dieu.", ref: "Psaume 46:11" },
    { text: "Remets ton sort à l'Éternel, et il te soutiendra, il ne laissera jamais chanceler le juste.", ref: "Psaume 55:23" },
    
    // Appel et Délivrance
    { text: "Invoque-moi au jour de la détresse ; je te délivrerai, et tu me glorifieras.", ref: "Psaume 50:15" },
    { text: "Ô Dieu, crée en moi un cœur pur, renouvelle en moi un esprit bien disposé.", ref: "Psaume 51:12" },
    { text: "L'Éternel est mon secours, et ma délivrance se fera sans tarder.", ref: "Psaume 71:12" },
    { text: "Éternel, tu es mon Dieu ; je t'exalterai, je célébrerai ton nom, car tu as fait des choses merveilleuses.", ref: "Psaume 25:1" },
    
    // Sagesse et Direction
    { text: "Ta parole est une lampe à mes pieds, et une lumière sur mon sentier.", ref: "Psaume 119:105" },
    { text: "Heureux l'homme qui ne marche pas selon le conseil des méchants.", ref: "Psaume 1:1" },
    { text: "Il est comme un arbre planté près d'un courant d'eau.", ref: "Psaume 1:3" },
    { text: "L'Éternel connaît la voie des justes, et la voie des pécheurs mène à la ruine.", ref: "Psaume 1:6" },
    { text: "Enseigne-moi tes voies, ô Éternel ! Guide-moi dans ta vérité.", ref: "Psaume 25:4-5" },
    { text: "L'Éternel est bon et droit : c'est pourquoi il montre aux pécheurs la voie.", ref: "Psaume 25:8" },
    
    // Force et Victoire
    { text: "L'Éternel est ma force et mon bouclier.", ref: "Psaume 28:7" },
    { text: "L'Éternel donnera la force à son peuple.", ref: "Psaume 29:11" },
    { text: "Le soir arrivent les pleurs, et le matin l'allégresse.", ref: "Psaume 30:6" },
    { text: "Car auprès de toi est la source de la vie ; par ta lumière nous voyons la lumière.", ref: "Psaume 36:10" },
    { text: "Ne t'irrite pas contre les méchants, n'envie pas ceux qui font le mal.", ref: "Psaume 37:1" },
    { text: "Fais de l'Éternel tes délices, et il te donnera ce que ton cœur désire.", ref: "Psaume 37:4" },
    
    // Amour et Miséricorde
    { text: "Car ta bonté est grande jusqu'aux cieux, et ta fidélité jusqu'aux nues.", ref: "Psaume 57:11" },
    { text: "Oui, la bonté et la grâce m'accompagneront tous les jours de ma vie.", ref: "Psaume 23:6" },
    { text: "L'Éternel est miséricordieux et compatissant, lent à la colère et riche en bonté.", ref: "Psaume 103:8" },
    { text: "Comme un père a compassion de ses enfants, l'Éternel a compassion de ceux qui le craignent.", ref: "Psaume 103:13" },
    { text: "Mais la bonté de l'Éternel dure à jamais pour ceux qui le craignent.", ref: "Psaume 103:17" }
  ],
  
  en: [
    // Protection and Trust
    { text: "The Lord is my light and my salvation; whom shall I fear?", ref: "Psalm 27:1" },
    { text: "The Lord is my shepherd; I shall not want.", ref: "Psalm 23:1" },
    { text: "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me.", ref: "Psalm 23:4" },
    { text: "He who dwells in the shelter of the Most High will abide in the shadow of the Almighty.", ref: "Psalm 91:1" },
    { text: "No evil shall befall you, nor shall any plague come near your dwelling.", ref: "Psalm 91:10" },
    { text: "For he will command his angels concerning you to guard you in all your ways.", ref: "Psalm 91:11" },
    { text: "The Lord is my rock, my fortress and my deliverer.", ref: "Psalm 18:3" },
    { text: "In God I trust and am not afraid. What can mere mortals do to me?", ref: "Psalm 56:12" },
    
    // Praise and Joy
    { text: "The heavens declare the glory of God; the skies proclaim the work of his hands.", ref: "Psalm 19:2" },
    { text: "You are my God, and I will praise you; you are my God, and I will exalt you.", ref: "Psalm 118:28" },
    { text: "This is the day the Lord has made; let us rejoice and be glad in it.", ref: "Psalm 118:24" },
    { text: "Come, let us sing for joy to the Lord; let us shout aloud to the Rock of our salvation.", ref: "Psalm 95:1" },
    { text: "Sing to the Lord a new song; sing to the Lord, all the earth.", ref: "Psalm 96:1" },
    
    // Hope and Comfort
    { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", ref: "Psalm 34:19" },
    { text: "Commit your way to the Lord; trust in him and he will do this.", ref: "Psalm 37:5" },
    { text: "Be still before the Lord and wait patiently for him.", ref: "Psalm 37:7" },
    { text: "As the deer pants for streams of water, so my soul pants for you, my God.", ref: "Psalm 42:2" },
    { text: "God is our refuge and strength, an ever-present help in trouble.", ref: "Psalm 46:2" },
    { text: "Be still, and know that I am God.", ref: "Psalm 46:11" },
    { text: "Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken.", ref: "Psalm 55:23" },
    
    // Call and Deliverance
    { text: "Call on me in the day of trouble; I will deliver you, and you will honor me.", ref: "Psalm 50:15" },
    { text: "Create in me a pure heart, O God, and renew a steadfast spirit within me.", ref: "Psalm 51:12" },
    { text: "The Lord is my help and my deliverer; do not delay, my God.", ref: "Psalm 71:12" },
    { text: "Lord, you are my God; I will exalt you and praise your name, for in perfect faithfulness you have done wonderful things.", ref: "Psalm 25:1" },
    
    // Wisdom and Guidance
    { text: "Your word is a lamp for my feet, a light on my path.", ref: "Psalm 119:105" },
    { text: "Blessed is the one who does not walk in step with the wicked.", ref: "Psalm 1:1" },
    { text: "That person is like a tree planted by streams of water.", ref: "Psalm 1:3" },
    { text: "For the Lord watches over the way of the righteous, but the way of the wicked leads to destruction.", ref: "Psalm 1:6" },
    { text: "Show me your ways, Lord, teach me your paths. Guide me in your truth and teach me.", ref: "Psalm 25:4-5" },
    { text: "Good and upright is the Lord; therefore he instructs sinners in his ways.", ref: "Psalm 25:8" },
    
    // Strength and Victory
    { text: "The Lord is my strength and my shield.", ref: "Psalm 28:7" },
    { text: "The Lord gives strength to his people.", ref: "Psalm 29:11" },
    { text: "Weeping may stay for the night, but rejoicing comes in the morning.", ref: "Psalm 30:6" },
    { text: "For with you is the fountain of life; in your light we see light.", ref: "Psalm 36:10" },
    { text: "Do not fret because of those who are evil or be envious of those who do wrong.", ref: "Psalm 37:1" },
    { text: "Take delight in the Lord, and he will give you the desires of your heart.", ref: "Psalm 37:4" },
    
    // Love and Mercy
    { text: "For great is your love, reaching to the heavens; your faithfulness reaches to the skies.", ref: "Psalm 57:11" },
    { text: "Surely your goodness and love will follow me all the days of my life.", ref: "Psalm 23:6" },
    { text: "The Lord is compassionate and gracious, slow to anger, abounding in love.", ref: "Psalm 103:8" },
    { text: "As a father has compassion on his children, so the Lord has compassion on those who fear him.", ref: "Psalm 103:13" },
    { text: "But from everlasting to everlasting the Lord's love is with those who fear him.", ref: "Psalm 103:17" }
  ],
  
  es: [
    // Protección y Confianza
    { text: "Jehová es mi luz y mi salvación; ¿de quién temeré?", ref: "Salmo 27:1" },
    { text: "Jehová es mi pastor; nada me faltará.", ref: "Salmo 23:1" },
    { text: "Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo.", ref: "Salmo 23:4" },
    { text: "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.", ref: "Salmo 91:1" },
    { text: "No te sobrevendrá mal, ni plaga tocará tu morada.", ref: "Salmo 91:10" },
    { text: "Pues a sus ángeles mandará acerca de ti, que te guarden en todos tus caminos.", ref: "Salmo 91:11" },
    { text: "Jehová, roca mía y castillo mío, y mi libertador.", ref: "Salmo 18:3" },
    { text: "En Dios he confiado; no temeré; ¿qué puede hacerme el hombre?", ref: "Salmo 56:12" },
    
    // Alabanza y Gozo
    { text: "Los cielos cuentan la gloria de Dios, y el firmamento anuncia la obra de sus manos.", ref: "Salmo 19:2" },
    { text: "Dios mío eres tú, y te alabaré; Dios mío, te exaltaré.", ref: "Salmo 118:28" },
    { text: "Este es el día que hizo Jehová; nos gozaremos y alegraremos en él.", ref: "Salmo 118:24" },
    { text: "¡Venid, aclamemos alegremente a Jehová; cantemos con júbilo a la roca de nuestra salvación!", ref: "Salmo 95:1" },
    { text: "¡Cantad a Jehová cántico nuevo; cantad a Jehová, toda la tierra!", ref: "Salmo 96:1" },
    
    // Esperanza y Consuelo
    { text: "Cercano está Jehová a los quebrantados de corazón; y salva a los contritos de espíritu.", ref: "Salmo 34:19" },
    { text: "Encomienda a Jehová tu camino, y confía en él; y él hará.", ref: "Salmo 37:5" },
    { text: "Guarda silencio ante Jehová, y espera en él.", ref: "Salmo 37:7" },
    { text: "Como el ciervo brama por las corrientes de las aguas, así clama por ti, oh Dios, el alma mía.", ref: "Salmo 42:2" },
    { text: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.", ref: "Salmo 46:2" },
    { text: "Estad quietos, y conoced que yo soy Dios.", ref: "Salmo 46:11" },
    { text: "Echa sobre Jehová tu carga, y él te sustentará; no dejará para siempre caído al justo.", ref: "Salmo 55:23" },
    
    // Llamado y Liberación
    { text: "Invócame en el día de la angustia; te libraré, y tú me honrarás.", ref: "Salmo 50:15" },
    { text: "Crea en mí, oh Dios, un corazón limpio, y renueva un espíritu recto dentro de mí.", ref: "Salmo 51:12" },
    { text: "Jehová es mi ayuda y mi libertador; Dios mío, no te tardes.", ref: "Salmo 71:12" },
    { text: "Jehová, tú eres mi Dios; te exaltaré, alabaré tu nombre, porque has hecho maravillas.", ref: "Salmo 25:1" },
    
    // Sabiduría y Dirección
    { text: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.", ref: "Salmo 119:105" },
    { text: "Bienaventurado el varón que no anduvo en consejo de malos.", ref: "Salmo 1:1" },
    { text: "Será como árbol plantado junto a corrientes de aguas.", ref: "Salmo 1:3" },
    { text: "Porque Jehová conoce el camino de los justos; mas la senda de los malos perecerá.", ref: "Salmo 1:6" },
    { text: "Muéstrame, oh Jehová, tus caminos; enséñame tus sendas. Encamíname en tu verdad.", ref: "Salmo 25:4-5" },
    { text: "Bueno y recto es Jehová; por tanto, él enseñará a los pecadores el camino.", ref: "Salmo 25:8" },
    
    // Fuerza y Victoria
    { text: "Jehová es mi fortaleza y mi escudo.", ref: "Salmo 28:7" },
    { text: "Jehová dará poder a su pueblo.", ref: "Salmo 29:11" },
    { text: "Por la noche durará el lloro, y a la mañana vendrá la alegría.", ref: "Salmo 30:6" },
    { text: "Porque contigo está el manantial de la vida; en tu luz veremos la luz.", ref: "Salmo 36:10" },
    { text: "No te impacientes a causa de los malignos, ni tengas envidia de los que hacen iniquidad.", ref: "Salmo 37:1" },
    { text: "Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón.", ref: "Salmo 37:4" },
    
    // Amor y Misericordia
    { text: "Porque grande es hasta los cielos tu misericordia, y hasta las nubes tu verdad.", ref: "Salmo 57:11" },
    { text: "Ciertamente el bien y la misericordia me seguirán todos los días de mi vida.", ref: "Salmo 23:6" },
    { text: "Misericordioso y clemente es Jehová; lento para la ira, y grande en misericordia.", ref: "Salmo 103:8" },
    { text: "Como el padre se compadece de los hijos, se compadece Jehová de los que le temen.", ref: "Salmo 103:13" },
    { text: "Mas la misericordia de Jehová es desde la eternidad y hasta la eternidad sobre los que le temen.", ref: "Salmo 103:17" }
  ],
  
  de: [
    // Schutz und Vertrauen
    { text: "Der HERR ist mein Licht und mein Heil; vor wem sollte ich mich fürchten?", ref: "Psalm 27:1" },
    { text: "Der HERR ist mein Hirte, mir wird nichts mangeln.", ref: "Psalm 23:1" },
    { text: "Und ob ich schon wanderte im finstern Tal, fürchte ich kein Unglück; denn du bist bei mir.", ref: "Psalm 23:4" },
    { text: "Wer unter dem Schirm des Höchsten sitzt und unter dem Schatten des Allmächtigen bleibt.", ref: "Psalm 91:1" },
    { text: "Es wird dir kein Übel begegnen, und keine Plage wird sich deinem Hause nahen.", ref: "Psalm 91:10" },
    { text: "Denn er hat seinen Engeln befohlen, dass sie dich behüten auf allen deinen Wegen.", ref: "Psalm 91:11" },
    { text: "HERR, mein Fels, meine Burg, mein Erretter.", ref: "Psalm 18:3" },
    { text: "Auf Gott vertraue ich und fürchte mich nicht; was können mir Menschen tun?", ref: "Psalm 56:12" },
    
    // Lob und Freude
    { text: "Die Himmel erzählen die Ehre Gottes, und die Feste verkündigt seiner Hände Werk.", ref: "Psalm 19:2" },
    { text: "Du bist mein Gott, und ich danke dir; mein Gott, ich will dich preisen.", ref: "Psalm 118:28" },
    { text: "Dies ist der Tag, den der HERR macht; lasst uns freuen und fröhlich an ihm sein.", ref: "Psalm 118:24" },
    { text: "Kommt herzu, lasst uns dem HERRN frohlocken und jauchzen dem Hort unsres Heils!", ref: "Psalm 95:1" },
    { text: "Singet dem HERRN ein neues Lied; singet dem HERRN, alle Welt!", ref: "Psalm 96:1" },
    
    // Hoffnung und Trost
    { text: "Der HERR ist nahe denen, die zerbrochenen Herzens sind, und hilft denen, die ein zerschlagenes Gemüt haben.", ref: "Psalm 34:19" },
    { text: "Befiehl dem HERRN deine Wege und hoffe auf ihn, er wird's wohlmachen.", ref: "Psalm 37:5" },
    { text: "Sei stille dem HERRN und warte auf ihn.", ref: "Psalm 37:7" },
    { text: "Wie der Hirsch lechzt nach frischem Wasser, so schreit meine Seele, Gott, zu dir.", ref: "Psalm 42:2" },
    { text: "Gott ist unsre Zuversicht und Stärke, eine Hilfe in den großen Nöten.", ref: "Psalm 46:2" },
    { text: "Seid stille und erkennet, dass ich Gott bin.", ref: "Psalm 46:11" },
    { text: "Wirf dein Anliegen auf den HERRN; der wird dich versorgen und wird den Gerechten in Ewigkeit nicht wanken lassen.", ref: "Psalm 55:23" },
    
    // Ruf und Befreiung
    { text: "Rufe mich an in der Not, so will ich dich erretten, und du sollst mich preisen.", ref: "Psalm 50:15" },
    { text: "Schaffe in mir, Gott, ein reines Herz und gib mir einen neuen, beständigen Geist.", ref: "Psalm 51:12" },
    { text: "Der HERR ist meine Hilfe und mein Erretter; mein Gott, säume nicht!", ref: "Psalm 71:12" },
    { text: "HERR, du bist mein Gott; dich preise ich, ich lobe deinen Namen, denn du tust Wunder.", ref: "Psalm 25:1" },
    
    // Weisheit und Führung
    { text: "Dein Wort ist meines Fußes Leuchte und ein Licht auf meinem Wege.", ref: "Psalm 119:105" },
    { text: "Wohl dem, der nicht wandelt im Rat der Gottlosen.", ref: "Psalm 1:1" },
    { text: "Der ist wie ein Baum, gepflanzt an den Wasserbächen.", ref: "Psalm 1:3" },
    { text: "Denn der HERR kennt den Weg der Gerechten, aber der Gottlosen Weg vergeht.", ref: "Psalm 1:6" },
    { text: "HERR, zeige mir deine Wege und lehre mich deine Steige! Leite mich in deiner Wahrheit.", ref: "Psalm 25:4-5" },
    { text: "Der HERR ist gut und gerecht; darum weist er Sündern den Weg.", ref: "Psalm 25:8" },
    
    // Kraft und Sieg
    { text: "Der HERR ist meine Stärke und mein Schild.", ref: "Psalm 28:7" },
    { text: "Der HERR wird seinem Volk Kraft geben.", ref: "Psalm 29:11" },
    { text: "Den Abend lang währt das Weinen, aber des Morgens die Freude.", ref: "Psalm 30:6" },
    { text: "Denn bei dir ist die Quelle des Lebens, und in deinem Lichte sehen wir das Licht.", ref: "Psalm 36:10" },
    { text: "Entrüste dich nicht über die Bösen, sei nicht neidisch auf die Übeltäter.", ref: "Psalm 37:1" },
    { text: "Habe deine Lust am HERRN; der wird dir geben, was dein Herz wünscht.", ref: "Psalm 37:4" },
    
    // Liebe und Barmherzigkeit
    { text: "Denn deine Güte reicht, so weit der Himmel ist, und deine Wahrheit, so weit die Wolken gehen.", ref: "Psalm 57:11" },
    { text: "Gutes und Barmherzigkeit werden mir folgen mein Leben lang.", ref: "Psalm 23:6" },
    { text: "Barmherzig und gnädig ist der HERR, geduldig und von großer Güte.", ref: "Psalm 103:8" },
    { text: "Wie sich ein Vater über Kinder erbarmt, so erbarmt sich der HERR über die, die ihn fürchten.", ref: "Psalm 103:13" },
    { text: "Aber die Gnade des HERRN währt von Ewigkeit zu Ewigkeit über denen, die ihn fürchten.", ref: "Psalm 103:17" }
  ]
};

// Fonction pour obtenir un verset aléatoire
function getRandomVerse(lang = 'fr') {
  const verses = BIBLE_VERSES[lang] || BIBLE_VERSES.en;
  const randomIndex = Math.floor(Math.random() * verses.length);
  return verses[randomIndex];
}

// Fonction pour obtenir un verset par index
function getVerseByIndex(index, lang = 'fr') {
  const verses = BIBLE_VERSES[lang] || BIBLE_VERSES.en;
  return verses[index % verses.length];
}

// Fonction pour obtenir le nombre total de versets
function getTotalVerses(lang = 'fr') {
  const verses = BIBLE_VERSES[lang] || BIBLE_VERSES.en;
  return verses.length;
}

// Export pour utilisation dans le jeu
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BIBLE_VERSES, getRandomVerse, getVerseByIndex, getTotalVerses };
}
