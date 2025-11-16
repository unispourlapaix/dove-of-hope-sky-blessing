// ============================================
// 💬 MODULE TÉMOIGNAGES
// Témoignages d'espoir et de guérison
// ============================================

const TESTIMONIES = {
    fr: [
        {
            id: 1,
            title: "Vivre avec ses difficultés",
            text: "J'ai appris que nous avons tous nos folies, nos fantasmes, des peurs irrationnelles plus ou moins handicapantes. Apprendre à vivre avec est une belle victoire. Il faut savoir que dans le monde, il existe plein d'autres gens comme toi, comme moi, qui vivent leur meilleure vie.\n\nQu'est-ce qu'ils ont choisi d'écouter seulement les voix sombres dans leur tête ? Non ! Ils vivent avec, pour certains facilement, d'autres choisissent de ne pas s'isoler et trouvent avec de l'aide, du repos, que ce soit à l'hôpital ou religieusement.\n\nDe bonnes âmes sur le chemin peuvent faire de grandes guérisons. Allez vers les autres malgré tout, vous premièrement, et n'attendez pas que les autres viennent à vous. Bouge-toi !",
            author: "Témoignage anonyme"
        }
    ],
    en: [
        {
            id: 1,
            title: "Living with our struggles",
            text: "I learned that we all have our quirks, our fantasies, irrational fears more or less debilitating. Learning to live with them is a beautiful victory. You should know that in the world, there are plenty of other people like you, like me, living their best lives.\n\nDid they choose to only listen to the dark voices in their heads? No! They live with it, some easily, others choose not to isolate themselves and find help, rest, whether in the hospital or through faith.\n\nGood souls on the path can bring great healing. Reach out to others despite everything, you first, and don't wait for others to come to you. Move yourself!",
            author: "Anonymous testimony"
        }
    ],
    es: [
        {
            id: 1,
            title: "Vivir con nuestras dificultades",
            text: "Aprendí que todos tenemos nuestras locuras, nuestras fantasías, miedos irracionales más o menos incapacitantes. Aprender a vivir con ellos es una hermosa victoria. Debes saber que en el mundo hay muchas otras personas como tú, como yo, viviendo su mejor vida.\n\n¿Eligieron solo escuchar las voces oscuras en sus cabezas? ¡No! Viven con ello, algunos fácilmente, otros eligen no aislarse y encuentran ayuda, descanso, ya sea en el hospital o a través de la fe.\n\nLas buenas almas en el camino pueden traer gran sanación. Acércate a los demás a pesar de todo, tú primero, y no esperes a que otros vengan a ti. ¡Muévete!",
            author: "Testimonio anónimo"
        }
    ],
    pt: [
        {
            id: 1,
            title: "Viver com nossas dificuldades",
            text: "Aprendi que todos temos nossas loucuras, nossas fantasias, medos irracionais mais ou menos incapacitantes. Aprender a viver com eles é uma bela vitória. Você deve saber que no mundo existem muitas outras pessoas como você, como eu, vivendo sua melhor vida.\n\nEles escolheram apenas ouvir as vozes sombrias em suas cabeças? Não! Eles vivem com isso, alguns facilmente, outros escolhem não se isolar e encontram ajuda, descanso, seja no hospital ou através da fé.\n\nBoas almas no caminho podem trazer grande cura. Aproxime-se dos outros apesar de tudo, você primeiro, e não espere que outros venham até você. Mova-se!",
            author: "Testemunho anônimo"
        }
    ],
    de: [
        {
            id: 1,
            title: "Mit unseren Schwierigkeiten leben",
            text: "Ich habe gelernt, dass wir alle unsere Macken, unsere Fantasien, irrationale Ängste haben, die mehr oder weniger behindernd sind. Zu lernen, damit zu leben, ist ein schöner Sieg. Du solltest wissen, dass es auf der Welt viele andere Menschen gibt wie dich, wie mich, die ihr bestes Leben leben.\n\nHaben sie sich entschieden, nur die dunklen Stimmen in ihren Köpfen zu hören? Nein! Sie leben damit, manche leicht, andere entscheiden sich, sich nicht zu isolieren und finden Hilfe, Ruhe, sei es im Krankenhaus oder durch den Glauben.\n\nGute Seelen auf dem Weg können große Heilung bringen. Gehe auf andere zu trotz allem, du zuerst, und warte nicht darauf, dass andere zu dir kommen. Bewege dich!",
            author: "Anonymes Zeugnis"
        }
    ],
    it: [
        {
            id: 1,
            title: "Vivere con le nostre difficoltà",
            text: "Ho imparato che tutti abbiamo le nostre follie, le nostre fantasie, paure irrazionali più o meno invalidanti. Imparare a conviverci è una bella vittoria. Devi sapere che nel mondo ci sono tante altre persone come te, come me, che vivono la loro vita migliore.\n\nHanno scelto di ascoltare solo le voci oscure nelle loro teste? No! Ci convivono, alcuni facilmente, altri scelgono di non isolarsi e trovano aiuto, riposo, sia in ospedale che attraverso la fede.\n\nLe anime buone sul cammino possono portare grande guarigione. Vai verso gli altri nonostante tutto, tu per primo, e non aspettare che gli altri vengano da te. Muoviti!",
            author: "Testimonianza anonima"
        }
    ],
    ru: [
        {
            id: 1,
            title: "Жить с нашими трудностями",
            text: "Я узнал, что у всех нас есть свои причуды, наши фантазии, иррациональные страхи, более или менее изнурительные. Научиться жить с ними - это прекрасная победа. Вы должны знать, что в мире есть много других людей, таких как вы, как я, живущих своей лучшей жизнью.\n\nВыбрали ли они слушать только темные голоса в своих головах? Нет! Они живут с этим, некоторые легко, другие выбирают не изолироваться и находят помощь, отдых, будь то в больнице или через веру.\n\nХорошие души на пути могут принести великое исцеление. Тянитесь к другим несмотря ни на что, вы в первую очередь, и не ждите, что другие придут к вам. Двигайтесь!",
            author: "Анонимное свидетельство"
        }
    ],
    zh: [
        {
            id: 1,
            title: "与我们的困难共存",
            text: "我学到我们都有自己的怪癖、幻想、或多或少令人衰弱的非理性恐惧。学会与它们共存是一场美丽的胜利。你应该知道，世界上有很多像你、像我一样的人，正在过着最好的生活。\n\n他们选择只听脑海中黑暗的声音吗？不！他们与之共存，有些人很容易，其他人选择不孤立自己，并找到帮助、休息，无论是在医院还是通过信仰。\n\n路上的善良灵魂可以带来巨大的治愈。不管怎样都要接触他人，首先是你自己，不要等待别人来找你。行动起来！",
            author: "匿名见证"
        }
    ],
    ar: [
        {
            id: 1,
            title: "العيش مع صعوباتنا",
            text: "تعلمت أن لدينا جميعًا غرائبنا، وخيالاتنا، ومخاوف غير عقلانية أكثر أو أقل إعاقة. تعلم العيش معها هو انتصار جميل. يجب أن تعلم أن هناك في العالم الكثير من الأشخاص الآخرين مثلك، مثلي، يعيشون أفضل حياتهم.\n\nهل اختاروا الاستماع فقط إلى الأصوات المظلمة في رؤوسهم؟ لا! إنهم يعيشون معها، بعضهم بسهولة، والبعض الآخر يختار عدم عزل نفسه ويجد المساعدة والراحة، سواء في المستشفى أو من خلال الإيمان.\n\nالأرواح الطيبة في الطريق يمكن أن تجلب شفاءً عظيمًا. تواصل مع الآخرين على الرغم من كل شيء، أنت أولاً، ولا تنتظر أن يأتي الآخرون إليك. تحرك!",
            author: "شهادة مجهولة"
        }
    ],
    hi: [
        {
            id: 1,
            title: "अपनी कठिनाइयों के साथ जीना",
            text: "मैंने सीखा कि हम सभी के पास अपनी विचित्रताएं, अपनी कल्पनाएं, कम या ज्यादा दुर्बल करने वाले अतार्किक भय हैं। उनके साथ जीना सीखना एक सुंदर जीत है। आपको पता होना चाहिए कि दुनिया में आपके जैसे, मेरे जैसे कई अन्य लोग हैं, जो अपना सर्वश्रेष्ठ जीवन जी रहे हैं।\n\nक्या उन्होंने केवल अपने दिमाग में अंधेरी आवाज़ें सुनना चुना? नहीं! वे इसके साथ जीते हैं, कुछ आसानी से, अन्य खुद को अलग न करने का चुनाव करते हैं और मदद, आराम पाते हैं, चाहे अस्पताल में हो या विश्वास के माध्यम से।\n\nरास्ते में अच्छी आत्माएं महान उपचार ला सकती हैं। सब कुछ के बावजूद दूसरों तक पहुंचें, पहले आप, और दूसरों के आपके पास आने का इंतजार न करें। आगे बढ़ें!",
            author: "गुमनाम गवाही"
        }
    ],
    sw: [
        {
            id: 1,
            title: "Kuishi na changamoto zetu",
            text: "Nilijifunza kwamba sote tuna tabia zetu za kipekee, mawazo yetu, hofu zisizo na mantiki ambazo zinaweza kuwa na athari kubwa au ndogo. Kujifunza kuishi nazo ni ushindi mzuri. Unapaswa kujua kwamba duniani kuna watu wengi wengine kama wewe, kama mimi, wanaoishi maisha yao bora.\n\nJe, walichagua kusikiliza tu sauti za giza vichwani mwao? Hapana! Wanaishi nayo, wengine kwa urahisi, wengine wanachagua kutojitenga na kupata msaada, pumziko, iwe hospitalini au kupitia imani.\n\nRoho njema njiani zinaweza kuleta uponyaji mkubwa. Wafikilie wengine licha ya yote, wewe kwanza, na usisubiri wengine waje kwako. Jiondoe!",
            author: "Ushuhuda usio na jina"
        }
    ],
    ko: [
        {
            id: 1,
            title: "우리의 어려움과 함께 살기",
            text: "나는 우리 모두가 우리의 기벽, 환상, 다소 쇠약하게 만드는 비합리적인 두려움을 가지고 있다는 것을 배웠습니다. 그것들과 함께 사는 법을 배우는 것은 아름다운 승리입니다. 세상에는 당신처럼, 나처럼, 최고의 삶을 살고 있는 많은 다른 사람들이 있다는 것을 알아야 합니다.\n\n그들은 머릿속의 어두운 목소리만 듣기로 선택했습니까? 아니요! 그들은 그것과 함께 살고 있습니다. 어떤 사람들은 쉽게, 다른 사람들은 고립되지 않기로 선택하고 병원이든 신앙을 통해서든 도움과 휴식을 찾습니다.\n\n길 위의 선한 영혼들은 큰 치유를 가져올 수 있습니다. 모든 것에도 불구하고 다른 사람들에게 다가가세요. 당신이 먼저이고, 다른 사람들이 당신에게 오기를 기다리지 마세요. 움직이세요!",
            author: "익명의 증언"
        }
    ],
    ja: [
        {
            id: 1,
            title: "困難と共に生きる",
            text: "私たちは皆、癖や空想、多少なりとも衰弱させる不合理な恐怖を持っていることを学びました。それらと共に生きることを学ぶのは美しい勝利です。世界にはあなたのような、私のような、最高の人生を送っている他の多くの人々がいることを知るべきです。\n\n彼らは頭の中の暗い声だけを聞くことを選んだのでしょうか？いいえ！彼らはそれと共に生きています。簡単に生きている人もいれば、孤立しないことを選び、病院でも信仰を通してでも助けや休息を見つける人もいます。\n\n道の上の善良な魂は大きな癒しをもたらすことができます。すべてにもかかわらず他の人に手を差し伸べてください。まずあなた自身が、そして他の人があなたのところに来るのを待たないでください。動いてください！",
            author: "匿名の証言"
        }
    ],
    pl: [
        {
            id: 1,
            title: "Życie z naszymi trudnościami",
            text: "Nauczyłem się, że wszyscy mamy swoje dziwactwa, nasze fantazje, irracjonalne lęki bardziej lub mniej wyniszczające. Nauczenie się życia z nimi to piękne zwycięstwo. Powinieneś wiedzieć, że na świecie jest wielu innych ludzi takich jak ty, jak ja, żyjących swoim najlepszym życiem.\n\nCzy wybrali słuchanie tylko ciemnych głosów w swoich głowach? Nie! Żyją z tym, niektórzy łatwo, inni decydują się nie izolować i znajdują pomoc, odpoczynek, czy to w szpitalu, czy poprzez wiarę.\n\nDobre dusze na drodze mogą przynieść wielkie uzdrowienie. Sięgnij do innych pomimo wszystko, ty najpierw, i nie czekaj, aż inni przyjdą do ciebie. Ruszaj się!",
            author: "Anonimowe świadectwo"
        }
    ]
};

// Fonction pour obtenir les témoignages dans une langue
function getTestimonies(lang = 'fr') {
    return TESTIMONIES[lang] || TESTIMONIES.fr;
}

// Fonction pour obtenir un témoignage aléatoire
function getRandomTestimony(lang = 'fr') {
    const testimonies = getTestimonies(lang);
    return testimonies[Math.floor(Math.random() * testimonies.length)];
}
