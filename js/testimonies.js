// ============================================
// 💬 MODULE TÉMOIGNAGES
// Témoignages d'espoir et de guérison
// ============================================

const TESTIMONY_TITLES = {
    fr: '💬 Témoignages d\'Espoir',
    en: '💬 Testimonies of Hope',
    es: '💬 Testimonios de Esperanza',
    pt: '💬 Testemunhos de Esperança',
    de: '💬 Zeugnisse der Hoffnung',
    it: '💬 Testimonianze di Speranza',
    ru: '💬 Свидетельства Надежды',
    zh: '💬 希望的见证',
    ar: '💬 شهادات الأمل',
    hi: '💬 आशा की गवाहियां',
    sw: '💬 Ushuhuda wa Tumaini',
    ko: '💬 희망의 증언',
    ja: '💬 希望の証言',
    pl: '💬 Świadectwa Nadziei'
};

const TESTIMONIES = {
    fr: [
        {
            id: 1,
            title: "Vivre avec ses difficultés",
            text: "J'ai appris que nous avons tous nos folies, nos fantasmes, des peurs irrationnelles plus ou moins handicapantes. Apprendre à vivre avec est une belle victoire. Il faut savoir que dans le monde, il existe plein d'autres gens comme toi, comme moi, qui vivent leur meilleure vie.\n\nQu'est-ce qu'ils ont choisi d'écouter seulement les voix sombres dans leur tête ? Non ! Ils vivent avec, pour certains facilement, d'autres choisissent de ne pas s'isoler et trouvent avec de l'aide, du repos, que ce soit à l'hôpital ou religieusement.\n\nDe bonnes âmes sur le chemin peuvent faire de grandes guérisons. Allez vers les autres malgré tout, vous premièrement, et n'attendez pas que les autres viennent à vous. Bouge-toi !",
            author: "Témoignage anonyme"
        },
        {
            id: 2,
            title: "💎 Trésor de Vie - Emmanuel",
            text: "Il fut un temps où la maladie m'a terriblement isolé et de sombres nuages est venue envahir ma vie. J'ai tenté d'abandonner mais avant j'ai crié à Dieu ! C'est à toi que je donne ma vie et pas aux ombres sournoises.\n\nComme une prière, mon cri fut entendu et ma vie a changé dès ce jour où j'ai su dans mon cœur que je suis aimé comme je suis. Un long travail de confiance, de courage, de changement s'amorça en moi.\n\nJ'ai appris des erreurs, j'ai appris à ne pas regarder en arrière toujours sans jamais oublier. Mais j'ai surtout appris à regarder l'avenir à patience, espérance et joie.\n\nUne joie que j'ai retrouvée dans la louange et une adoration de Dieu sauveur, à celui qui m'a tendu la main quand personne ne pouvait être là pour moi. Il m'a sorti de la vallée de la mort et fait voir ce qui est vraiment important : la vie simple, ordinaire.\n\nJ'ai vu au-delà de mes désirs matérialistes, j'ai vu qu'il fallait regarder à ce que j'ai et pas à ce que je n'ai pas. Et aimer ce que je suis, comme je veux être. J'ai vu l'espoir en face.\n\nJ'ai demandé et j'ai reçu des réponses ineffables qui a produit en moi une foi inébranlable. À travers les difficultés j'ai grandi et je ne regrette pas d'avoir persévéré, espéré encore et encore car chaque colline cachait des trésors de vie, chaque montagne vaincue par le courage de bouger a porté un meilleur avenir, des souvenirs de vie extraordinaire, des rencontres et lieux merveilleux.\n\n🕊️ C'est pour cela que Jésus te dit : N'abandonne jamais, persévère jusqu'à l'impossible ! 🕊️",
            author: "Emmanuel"
        }
    ],
    en: [
        {
            id: 1,
            title: "Living with our struggles",
            text: "I learned that we all have our quirks, our fantasies, irrational fears more or less debilitating. Learning to live with them is a beautiful victory. You should know that in the world, there are plenty of other people like you, like me, living their best lives.\n\nDid they choose to only listen to the dark voices in their heads? No! They live with it, some easily, others choose not to isolate themselves and find help, rest, whether in the hospital or through faith.\n\nGood souls on the path can bring great healing. Reach out to others despite everything, you first, and don't wait for others to come to you. Move yourself!",
            author: "Anonymous testimony"
        },
        {
            id: 2,
            title: "💎 Life Treasure - Emmanuel",
            text: "There was a time when illness terribly isolated me and dark clouds came to invade my life. I tried to give up but before I did, I cried out to God! It is to you that I give my life and not to the sneaky shadows.\n\nLike a prayer, my cry was heard and my life changed from the day I knew in my heart that I am loved as I am. A long work of trust, courage, and change began in me.\n\nI learned from mistakes, I learned not to always look back without ever forgetting. But above all I learned to look to the future with patience, hope and joy.\n\nA joy that I found in praise and worship of God the savior, to the one who reached out to me when no one could be there for me. He brought me out of the valley of death and made me see what is truly important: simple, ordinary life.\n\nI saw beyond my materialistic desires, I saw that I had to look at what I have and not at what I don't have. And love what I am, as I want to be. I saw hope face to face.\n\nI asked and I received ineffable answers that produced in me an unshakable faith. Through difficulties I grew and I do not regret having persevered, hoped again and again because every hill hid treasures of life, every mountain conquered by the courage to move brought a better future, memories of extraordinary life, wonderful encounters and places.\n\n🕊️ That is why Jesus tells you: Never give up, persevere to the impossible! 🕊️",
            author: "Emmanuel"
        }
    ],
    es: [
        {
            id: 1,
            title: "Vivir con nuestras dificultades",
            text: "Aprendí que todos tenemos nuestras locuras, nuestras fantasías, miedos irracionales más o menos incapacitantes. Aprender a vivir con ellos es una hermosa victoria. Debes saber que en el mundo hay muchas otras personas como tú, como yo, viviendo su mejor vida.\n\n¿Eligieron solo escuchar las voces oscuras en sus cabezas? ¡No! Viven con ello, algunos fácilmente, otros eligen no aislarse y encuentran ayuda, descanso, ya sea en el hospital o a través de la fe.\n\nLas buenas almas en el camino pueden traer gran sanación. Acércate a los demás a pesar de todo, tú primero, y no esperes a que otros vengan a ti. ¡Muévete!",
            author: "Testimonio anónimo"
        },
        {
            id: 2,
            title: "💎 Tesoro de Vida - Emmanuel",
            text: "Hubo un tiempo en que la enfermedad me aisló terriblemente y nubes oscuras vinieron a invadir mi vida. Intenté rendirme pero antes de hacerlo, ¡clamé a Dios! Es a ti a quien doy mi vida y no a las sombras traicioneras.\n\nComo una oración, mi clamor fue escuchado y mi vida cambió desde el día en que supe en mi corazón que soy amado como soy. Un largo trabajo de confianza, valor y cambio comenzó en mí.\n\nAprendí de los errores, aprendí a no mirar siempre atrás sin olvidar nunca. Pero sobre todo aprendí a mirar el futuro con paciencia, esperanza y alegría.\n\nUna alegría que encontré en la alabanza y adoración a Dios salvador, a aquel que me tendió la mano cuando nadie podía estar ahí para mí. Me sacó del valle de la muerte y me hizo ver lo que es verdaderamente importante: la vida simple, ordinaria.\n\nVi más allá de mis deseos materialistas, vi que debía mirar lo que tengo y no lo que no tengo. Y amar lo que soy, como quiero ser. Vi la esperanza cara a cara.\n\nPedí y recibí respuestas inefables que produjeron en mí una fe inquebrantable. A través de las dificultades crecí y no me arrepiento de haber perseverado, esperado una y otra vez porque cada colina escondía tesoros de vida, cada montaña conquistada por el valor de moverme trajo un mejor futuro, recuerdos de vida extraordinaria, encuentros y lugares maravillosos.\n\n🕊️ Por eso Jesús te dice: ¡Nunca te rindas, persevera hasta lo imposible! 🕊️",
            author: "Emmanuel"
        }
    ],
    pt: [
        {
            id: 1,
            title: "Viver com nossas dificuldades",
            text: "Aprendi que todos temos nossas loucuras, nossas fantasias, medos irracionais mais ou menos incapacitantes. Aprender a viver com eles é uma bela vitória. Você deve saber que no mundo existem muitas outras pessoas como você, como eu, vivendo sua melhor vida.\n\nEles escolheram apenas ouvir as vozes sombrias em suas cabeças? Não! Eles vivem com isso, alguns facilmente, outros escolhem não se isolar e encontram ajuda, descanso, seja no hospital ou através da fé.\n\nBoas almas no caminho podem trazer grande cura. Aproxime-se dos outros apesar de tudo, você primeiro, e não espere que outros venham até você. Mova-se!",
            author: "Testemunho anônimo"
        },
        {
            id: 2,
            title: "💎 Tesouro de Vida - Emmanuel",
            text: "Houve um tempo em que a doença me isolou terrivelmente e nuvens escuras vieram invadir minha vida. Tentei desistir mas antes disso clamei a Deus! É a ti que dou minha vida e não às sombras traicoeiras.\n\nComo uma oração, meu clamor foi ouvido e minha vida mudou desde o dia em que soube em meu coração que sou amado como sou. Um longo trabalho de confiança, coragem e mudança começou em mim.\n\nAprendi com os erros, aprendi a não olhar sempre para trás sem nunca esquecer. Mas acima de tudo aprendi a olhar para o futuro com paciência, esperança e alegria.\n\nUma alegria que encontrei no louvor e na adoração a Deus salvador, aquele que estendeu a mão quando ninguém podia estar lá para mim. Ele me tirou do vale da morte e me fez ver o que é verdadeiramente importante: a vida simples, ordinária.\n\nVi além dos meus desejos materialistas, vi que devia olhar para o que tenho e não para o que não tenho. E amar o que sou, como quero ser. Vi a esperança cara a cara.\n\nPedi e recebi respostas inefáveis que produziram em mim uma fé inabalável. Através das dificuldades cresci e não me arrependo de ter perseverado, esperado mais e mais porque cada colina escondia tesouros de vida, cada montanha conquistada pela coragem de mover trouxe um futuro melhor, memórias de vida extraordinária, encontros e lugares maravilhosos.\n\n🕊️ É por isso que Jesus te diz: Nunca desista, persevere até o impossível! 🕊️",
            author: "Emmanuel"
        }
    ],
    de: [
        {
            id: 1,
            title: "Mit unseren Schwierigkeiten leben",
            text: "Ich habe gelernt, dass wir alle unsere Macken, unsere Fantasien, irrationale Ängste haben, die mehr oder weniger behindernd sind. Zu lernen, damit zu leben, ist ein schöner Sieg. Du solltest wissen, dass es auf der Welt viele andere Menschen gibt wie dich, wie mich, die ihr bestes Leben leben.\n\nHaben sie sich entschieden, nur die dunklen Stimmen in ihren Köpfen zu hören? Nein! Sie leben damit, manche leicht, andere entscheiden sich, sich nicht zu isolieren und finden Hilfe, Ruhe, sei es im Krankenhaus oder durch den Glauben.\n\nGute Seelen auf dem Weg können große Heilung bringen. Gehe auf andere zu trotz allem, du zuerst, und warte nicht darauf, dass andere zu dir kommen. Bewege dich!",
            author: "Anonymes Zeugnis"
        },
        {
            id: 2,
            title: "💎 Lebensschatz - Emmanuel",
            text: "Es gab eine Zeit, in der mich Krankheit schrecklich isolierte und dunkle Wolken mein Leben überfielen. Ich versuchte aufzugeben, aber zuvor schrie ich zu Gott! Dir gebe ich mein Leben und nicht den heimtückischen Schatten.\n\nWie ein Gebet wurde mein Schrei gehört und mein Leben änderte sich an dem Tag, als ich in meinem Herzen wusste, dass ich geliebt werde, wie ich bin. Eine lange Arbeit des Vertrauens, des Mutes und der Veränderung begann in mir.\n\nIch lernte aus Fehlern, ich lernte, nicht immer zurückzublicken, ohne jemals zu vergessen. Aber vor allem lernte ich, mit Geduld, Hoffnung und Freude in die Zukunft zu schauen.\n\nEine Freude, die ich im Lobpreis und in der Anbetung Gottes, des Retters, fand, dem, der mir die Hand reichte, als niemand für mich da sein konnte. Er holte mich aus dem Tal des Todes und ließ mich sehen, was wirklich wichtig ist: das einfache, gewöhnliche Leben.\n\nIch sah über meine materialistischen Wünsche hinaus, ich sah, dass ich auf das schauen musste, was ich habe, und nicht auf das, was ich nicht habe. Und lieben, was ich bin, wie ich sein möchte. Ich sah der Hoffnung ins Gesicht.\n\nIch bat und erhielt unbeschreibliche Antworten, die in mir einen unerschütterlichen Glauben hervorbrachten. Durch Schwierigkeiten wuchs ich und ich bereue es nicht, ausgeharrt und immer wieder gehofft zu haben, denn jeder Hügel verbarg Schätze des Lebens, jeder Berg, der durch den Mut zur Bewegung erobert wurde, brachte eine bessere Zukunft, Erinnerungen an außergewöhnliches Leben, wunderbare Begegnungen und Orte.\n\n🕊️ Deshalb sagt Jesus zu dir: Gib niemals auf, beharrre bis zum Unmöglichen! 🕊️",
            author: "Emmanuel"
        }
    ],
    it: [
        {
            id: 1,
            title: "Vivere con le nostre difficoltà",
            text: "Ho imparato che tutti abbiamo le nostre follie, le nostre fantasie, paure irrazionali più o meno invalidanti. Imparare a conviverci è una bella vittoria. Devi sapere che nel mondo ci sono tante altre persone come te, come me, che vivono la loro vita migliore.\n\nHanno scelto di ascoltare solo le voci oscure nelle loro teste? No! Ci convivono, alcuni facilmente, altri scelgono di non isolarsi e trovano aiuto, riposo, sia in ospedale che attraverso la fede.\n\nLe anime buone sul cammino possono portare grande guarigione. Vai verso gli altri nonostante tutto, tu per primo, e non aspettare che gli altri vengano da te. Muoviti!",
            author: "Testimonianza anonima"
        },
        {
            id: 2,
            title: "💎 Tesoro di Vita - Emmanuel",
            text: "C'era un tempo in cui la malattia mi isolava terribilmente e nuvole oscure venivano a invadere la mia vita. Ho tentato di arrendermi ma prima ho gridato a Dio! È a te che dono la mia vita e non alle ombre insidiose.\n\nCome una preghiera, il mio grido fu ascoltato e la mia vita cambiò dal giorno in cui seppi nel mio cuore che sono amato come sono. Un lungo lavoro di fiducia, coraggio e cambiamento iniziò in me.\n\nHo imparato dagli errori, ho imparato a non guardare sempre indietro senza mai dimenticare. Ma soprattutto ho imparato a guardare al futuro con pazienza, speranza e gioia.\n\nUna gioia che ho ritrovato nella lode e nell'adorazione di Dio salvatore, a colui che mi ha teso la mano quando nessuno poteva essere lì per me. Mi ha portato fuori dalla valle della morte e mi ha fatto vedere ciò che è veramente importante: la vita semplice, ordinaria.\n\nHo visto oltre i miei desideri materialisti, ho visto che dovevo guardare a ciò che ho e non a ciò che non ho. E amare ciò che sono, come voglio essere. Ho visto la speranza faccia a faccia.\n\nHo chiesto e ho ricevuto risposte ineffabili che hanno prodotto in me una fede incrollabile. Attraverso le difficoltà sono cresciuto e non mi pento di aver perseverato, sperato ancora e ancora perché ogni collina nascondeva tesori di vita, ogni montagna conquistata dal coraggio di muoversi ha portato un futuro migliore, ricordi di vita straordinaria, incontri e luoghi meravigliosi.\n\n🕊️ È per questo che Gesù ti dice: Non arrenderti mai, persevera fino all'impossibile! 🕊️",
            author: "Emmanuel"
        }
    ],
    ru: [
        {
            id: 1,
            title: "Жить с нашими трудностями",
            text: "Я узнал, что у всех нас есть свои причуды, наши фантазии, иррациональные страхи, более или менее изнурительные. Научиться жить с ними - это прекрасная победа. Вы должны знать, что в мире есть много других людей, таких как вы, как я, живущих своей лучшей жизнью.\n\nВыбрали ли они слушать только темные голоса в своих головах? Нет! Они живут с этим, некоторые легко, другие выбирают не изолироваться и находят помощь, отдых, будь то в больнице или через веру.\n\nХорошие души на пути могут принести великое исцеление. Тянитесь к другим несмотря ни на что, вы в первую очередь, и не ждите, что другие придут к вам. Двигайтесь!",
            author: "Анонимное свидетельство"
        },
        {
            id: 2,
            title: "💎 Сокровище Жизни - Эммануэль",
            text: "Было время, когда болезнь ужасно изолировала меня, и тёмные облака пришли вторгнуться в мою жизнь. Я пытался сдаться, но перед этим я возопил к Богу! Тебе я отдаю свою жизнь, а не коварным теням.\n\nКак молитва, мой крик был услышан, и моя жизнь изменилась с того дня, когда я узнал в своём сердце, что меня любят таким, какой я есть. Долгая работа доверия, мужества и изменений началась во мне.\n\nЯ учился на ошибках, я научился не смотреть всегда назад, не забывая. Но прежде всего я научился смотреть в будущее с терпением, надеждой и радостью.\n\nРадость, которую я нашёл в хвале и поклонении Богу Спасителю, Тому, кто протянул мне руку, когда никто не мог быть рядом со мной. Он вывел меня из долины смерти и показал, что действительно важно: простая, обычная жизнь.\n\nЯ увидел за пределами своих материалистических желаний, я увидел, что мне нужно смотреть на то, что у меня есть, а не на то, чего нет. И любить то, какой я есть, каким я хочу быть. Я увидел надежду лицом к лицу.\n\nЯ просил и получил неизъяснимые ответы, которые произвели во мне непоколебимую веру. Через трудности я рос и не жалею, что упорствовал, надеялся снова и снова, потому что каждый холм скрывал сокровища жизни, каждая гора, покорённая мужеством движения, принесла лучшее будущее, воспоминания о необычайной жизни, удивительные встречи и места.\n\n🕊️ Вот почему Иисус говорит тебе: Никогда не сдавайся, упорствуй до невозможного! 🕊️",
            author: "Эммануэль"
        }
    ],
    zh: [
        {
            id: 1,
            title: "与我们的困难共存",
            text: "我学到我们都有自己的怪癖、幻想、或多或少令人衰弱的非理性恐惧。学会与它们共存是一场美丽的胜利。你应该知道，世界上有很多像你、像我一样的人，正在过着最好的生活。\n\n他们选择只听脑海中黑暗的声音吗？不！他们与之共存，有些人很容易，其他人选择不孤立自己，并找到帮助、休息，无论是在医院还是通过信仰。\n\n路上的善良灵魂可以带来巨大的治愈。不管怎样都要接触他人，首先是你自己，不要等待别人来找你。行动起来！",
            author: "匿名见证"
        },
        {
            id: 2,
            title: "💎 生命的宝藏 - 以马内利",
            text: "曾经有一段时间，疾病让我极度孤立，乌云侵入了我的生活。我试图放弃，但在那之前我向上帝呼求！我把我的生命献给你，而不是给那些阴险的阴影。\n\n就像祷告一样，我的呼求被听见了，从我在心中知道我被爱着，就像我本来的样子那天起，我的生活改变了。一段漫长的信任、勇气和改变的工作在我心中开始了。\n\n我从错误中学习，我学会了不要总是回头看而又不忘记。但最重要的是，我学会了以耐心、希望和喜乐展望未来。\n\n我在赞美和敬拜救主上帝中找到的喜乐，当没有人能陪伴我时，他向我伸出了手。他把我从死亡谷中带出来，让我看到真正重要的是什么：简单、平凡的生活。\n\n我看到了我物质欲望之外的东西，我看到我应该看我拥有的，而不是我没有的。并爱我所是的，如我想要成为的。我面对面地看到了希望。\n\n我祈求并收到了无法形容的答案，它在我心中产生了不可动摇的信念。通过困难我成长了，我不后悔坚持不懈，一次又一次地希望，因为每座山丘都隐藏着生命的宝藏，每座被勇敢行动征服的山都带来了更好的未来、非凡生活的回忆、美妙的相遇和地方。\n\n🕊️ 这就是为什么耶稣告诉你：永不放弃，坚持到不可能！🕊️",
            author: "以马内利"
        }
    ],
    ar: [
        {
            id: 1,
            title: "العيش مع صعوباتنا",
            text: "تعلمت أن لدينا جميعًا غرائبنا، وخيالاتنا، ومخاوف غير عقلانية أكثر أو أقل إعاقة. تعلم العيش معها هو انتصار جميل. يجب أن تعلم أن هناك في العالم الكثير من الأشخاص الآخرين مثلك، مثلي، يعيشون أفضل حياتهم.\n\nهل اختاروا الاستماع فقط إلى الأصوات المظلمة في رؤوسهم؟ لا! إنهم يعيشون معها، بعضهم بسهولة، والبعض الآخر يختار عدم عزل نفسه ويجد المساعدة والراحة، سواء في المستشفى أو من خلال الإيمان.\n\nالأرواح الطيبة في الطريق يمكن أن تجلب شفاءً عظيمًا. تواصل مع الآخرين على الرغم من كل شيء، أنت أولاً، ولا تنتظر أن يأتي الآخرون إليك. تحرك!",
            author: "شهادة مجهولة"
        },
        {
            id: 2,
            title: "💎 كنز الحياة - إيمانويل",
            text: "كان هناك وقت عزلني فيه المرض بشكل رهيب وجاءت الغيوم المظلمة لتغزو حياتي. حاولت الاستسلام لكن قبل ذلك صرخت إلى الله! لك أهب حياتي وليس للظلال الخبيثة.\n\nمثل صلاة، سُمِعت صرختي وتغيرت حياتي منذ ذلك اليوم الذي عرفت فيه في قلبي أن أنا محبوب كما أنا. بدأ فيّ عمل طويل من الثقة والشجاعة والتغيير.\n\nتعلمت من الأخطاء، تعلمت ألا أنظر إلى الوراء دائمًا دون أن أنسى. لكن فوق كل شيء تعلمت أن أنظر إلى المستقبل بصبر وأمل وفرح.\n\nفرحة وجدتها في التسبيح والعبادة لله المخلص، لذلك الذي مد يده إليّ حين لم يستطع أحد أن يكون معي. أخرجني من وادي الموت وأراني ما هو مهم حقًا: الحياة البسيطة العادية.\n\nرأيت ما وراء رغباتي المادية، رأيت أنه يجب أن أنظر إلى ما أملك وليس إلى ما لا أملك. وأن أحب ما أنا عليه، كما أريد أن أكون. رأيت الأمل وجهًا لوجه.\n\nطلبت وتلقيت إجابات لا توصف أنتجت فيّ إيمانًا لا يتزعزع. من خلال الصعوبات نموت ولست نادمًا على مثابرتي والأمل مرة تلو الأخرى لأن كل تلة أخفت كنوز الحياة، كل جبل غُلِب بشجاعة الحركة جلب مستقبلاً أفضل، ذكريات حياة استثنائية، لقاءات وأماكن رائعة.\n\n🕊️ لهذا يقول لك يسوع: لا تستسلم أبدًا، ثابر حتى المستحيل! 🕊️",
            author: "إيمانويل"
        }
    ],
    hi: [
        {
            id: 1,
            title: "अपनी कठिनाइयों के साथ जीना",
            text: "मैंने सीखा कि हम सभी के पास अपनी विचित्रताएं, अपनी कल्पनाएं, कम या ज्यादा दुर्बल करने वाले अतार्किक भय हैं। उनके साथ जीना सीखना एक सुंदर जीत है। आपको पता होना चाहिए कि दुनिया में आपके जैसे, मेरे जैसे कई अन्य लोग हैं, जो अपना सर्वश्रेष्ठ जीवन जी रहे हैं।\n\nक्या उन्होंने केवल अपने दिमाग में अंधेरी आवाज़ें सुनना चुना? नहीं! वे इसके साथ जीते हैं, कुछ आसानी से, अन्य खुद को अलग न करने का चुनाव करते हैं और मदद, आराम पाते हैं, चाहे अस्पताल में हो या विश्वास के माध्यम से।\n\nरास्ते में अच्छी आत्माएं महान उपचार ला सकती हैं। सब कुछ के बावजूद दूसरों तक पहुंचें, पहले आप, और दूसरों के आपके पास आने का इंतजार न करें। आगे बढ़ें!",
            author: "गुमनाम गवाही"
        },
        {
            id: 2,
            title: "💎 जीवन का खजाना - इमैनुएल",
            text: "एक समय था जब बीमारी ने मुझे भयानक रूप से अलग-थलग कर दिया और काले बादल मेरे जीवन पर आ गए। मैंने हार मानने की कोशिश की लेकिन उससे पहले मैंने भगवान से प्रार्थना की! मैं अपना जीवन तुम्हें देता हूं, धोखेबाज छायाओं को नहीं।\n\nएक प्रार्थना की तरह, मेरी पुकार सुनी गई और मेरा जीवन उस दिन से बदल गया जब मैंने अपने दिल में जाना कि मैं जैसा हूं वैसा ही प्यार किया जाता हूं। विश्वास, साहस और परिवर्तन का एक लंबा काम मुझमें शुरू हुआ।\n\nमैंने गलतियों से सीखा, मैंने सीखा कि हमेशा पीछे मुड़कर न देखूं बिना भूले। लेकिन सबसे बढ़कर मैंने धैर्य, आशा और खुशी के साथ भविष्य की ओर देखना सीखा।\n\nएक खुशी जो मुझे भगवान उद्धारकर्ता की स्तुति और आराधना में मिली, उस व्यक्ति ने जिसने मुझे हाथ बढ़ाया जब कोई मेरे लिए वहां नहीं हो सकता था। उसने मुझे मृत्यु की घाटी से बाहर निकाला और मुझे दिखाया कि वास्तव में क्या महत्वपूर्ण है: सरल, साधारण जीवन।\n\nमैंने अपनी भौतिकवादी इच्छाओं से परे देखा, मैंने देखा कि मुझे जो है उसे देखना चाहिए न कि जो नहीं है। और प्यार करना कि मैं क्या हूं, जैसा मैं बनना चाहता हूं। मैंने आशा को आमने-सामने देखा।\n\nमैंने मांगा और मुझे अकथनीय उत्तर मिले जिसने मुझमें अटूट विश्वास उत्पन्न किया। कठिनाइयों के माध्यम से मैं बढ़ा और मुझे खेद नहीं है कि मैंने धैर्य रखा, बार-बार आशा रखी क्योंकि प्रत्येक पहाड़ी में जीवन के खजाने छिपे थे, आगे बढ़ने के साहस से जीती गई प्रत्येक पर्वत ने एक बेहतर भविष्य, असाधारण जीवन की यादें, अद्भुत मुलाकातें और स्थान लाए।\n\n🕊️ यही कारण है कि यीशु तुमसे कहते हैं: कभी हार मत मानो, असंभव तक डटे रहो! 🕊️",
            author: "इमैनुएल"
        }
    ],
    sw: [
        {
            id: 1,
            title: "Kuishi na changamoto zetu",
            text: "Nilijifunza kwamba sote tuna tabia zetu za kipekee, mawazo yetu, hofu zisizo na mantiki ambazo zinaweza kuwa na athari kubwa au ndogo. Kujifunza kuishi nazo ni ushindi mzuri. Unapaswa kujua kwamba duniani kuna watu wengi wengine kama wewe, kama mimi, wanaoishi maisha yao bora.\n\nJe, walichagua kusikiliza tu sauti za giza vichwani mwao? Hapana! Wanaishi nayo, wengine kwa urahisi, wengine wanachagua kutojitenga na kupata msaada, pumziko, iwe hospitalini au kupitia imani.\n\nRoho njema njiani zinaweza kuleta uponyaji mkubwa. Wafikilie wengine licha ya yote, wewe kwanza, na usisubiri wengine waje kwako. Jiondoe!",
            author: "Ushuhuda usio na jina"
        },
        {
            id: 2,
            title: "💎 Hazina ya Maisha - Emmanuel",
            text: "Kulikuwa na wakati ugonjwa uliponitenganisha vibaya na mawingu meusi yalishuka juu ya maisha yangu. Nilijaribu kukata tamaa lakini kabla ya hilo nilimlilia Mungu! Ninakupa maisha yangu, si kwa vivuli vya udanganyifu.\n\nKama maombi, kilio changu kilisikilizwa na maisha yangu yalibadilika tangu siku ile nilipojua moyoni kwamba ninapendwa kama nilivyo. Kazi ndefu ya imani, ujasiri na mabadiliko ilianza ndani yangu.\n\nNilijifunza kutoka kwa makosa, nilijifunza kutokuangalia nyuma bila kusahau. Lakini zaidi ya yote nilijifunza kutazama mbele kwa subira, matumaini na furaha.\n\nFuraha niliyopata katika kumsifu na kuabudu Mungu mwokozi, yule aliyeniusia mkono wakati hakuna mtu angeweza kuwa pale kwa ajili yangu. Alinitoa katika bonde la mauti na kunionyesha kinachohitaji kweli: maisha rahisi, ya kawaida.\n\nNilitazama zaidi ya tamaa zangu za kimapinduzi, niliona kwamba ninapaswa kuona kile nilichonacho si kile nisinachokicho. Na kupenda nilivyo, kama ninavyotaka kuwa. Nilikutana na matumaini uso kwa uso.\n\nNiliomba na nikapokea majibu yasiyoelezeka ambayo yalizaa imani isiyotikisika ndani yangu. Kupitia changamoto nilikua na sijuta kuwa na subira, kutilia matumaini mara kwa mara kwa sababu katika kila kilima hazina za maisha zilikuwa zimefichwa, kila mlima ulioshindwa kwa ujasiri wa kuendelea ulileta mustakabali bora, kumbukumbu za maisha ya ajabu, mikutano ya ajabu na maeneo.\n\n🕊️ Ndiyo maana Yesu anakuambia: Usikate tamaa kamwe, vumilia hadi kisingizowezekana! 🕊️",
            author: "Emmanuel"
        }
    ],
    ko: [
        {
            id: 1,
            title: "우리의 어려움과 함께 살기",
            text: "나는 우리 모두가 우리의 기벽, 환상, 다소 쇠약하게 만드는 비합리적인 두려움을 가지고 있다는 것을 배웠습니다. 그것들과 함께 사는 법을 배우는 것은 아름다운 승리입니다. 세상에는 당신처럼, 나처럼, 최고의 삶을 살고 있는 많은 다른 사람들이 있다는 것을 알아야 합니다.\n\n그들은 머릿속의 어두운 목소리만 듣기로 선택했습니까? 아니요! 그들은 그것과 함께 살고 있습니다. 어떤 사람들은 쉽게, 다른 사람들은 고립되지 않기로 선택하고 병원이든 신앙을 통해서든 도움과 휴식을 찾습니다.\n\n길 위의 선한 영혼들은 큰 치유를 가져올 수 있습니다. 모든 것에도 불구하고 다른 사람들에게 다가가세요. 당신이 먼저이고, 다른 사람들이 당신에게 오기를 기다리지 마세요. 움직이세요!",
            author: "익명의 증언"
        },
        {
            id: 2,
            title: "💎 생명의 보물 - 엠마누엘",
            text: "질병이 나를 끔찍하게 고립시키고 어두운 구름이 내 삶에 내려앉았던 때가 있었습니다. 포기하려 했지만 그 전에 하나님께 부르짖었습니다! 내 생명을 당신께 드립니다, 속이는 그림자가 아니라.\n\n기도처럼, 나의 부르짖음은 들렸고 내 삶은 그날부터 변화했습니다. 있는 그대로의 내가 사랑받고 있다는 것을 마음으로 알았을 때부터. 믿음, 용기, 변화의 긴 작업이 내 안에서 시작되었습니다.\n\n실수로부터 배웠고, 잊지 않고도 항상 뒤를 돌아보지 않는 법을 배웠습니다. 그러나 무엇보다도 인내, 희망, 기쁨으로 미래를 바라보는 법을 배웠습니다.\n\n하나님 구원자를 찬양하고 예배하는 가운데 찾은 기쁨, 아무도 나를 위해 그곳에 있을 수 없었을 때 손을 내밀어 준 분. 그분은 나를 죽음의 골짜기에서 끌어내시고 진정으로 중요한 것이 무엇인지 보여주셨습니다: 단순하고 평범한 삶.\n\n나는 물질주의적 욕망을 넘어 보았고, 가진 것을 봐야지 없는 것을 봐서는 안 된다는 것을 보았습니다. 그리고 되고 싶은 나를 사랑하는 것. 희망을 대면했습니다.\n\n구했고 말로 표현할 수 없는 답을 받았으며 그것이 내 안에 흔들리지 않는 믿음을 낳았습니다. 어려움을 통해 성장했고 인내하고 희망을 품기를 반복한 것을 후회하지 않습니다. 모든 언덕에 생명의 보물이 숨겨져 있었기 때문입니다. 전진하는 용기로 얻은 산들은 더 나은 미래, 특별한 삶의 추억, 놀라운 만남과 장소를 가져다주었습니다.\n\n🕊️ 그래서 예수님이 당신에게 말씀하십니다: 절대 포기하지 마세요, 불가능까지 견디세요! 🕊️",
            author: "엠마누엘"
        }
    ],
    ja: [
        {
            id: 1,
            title: "困難と共に生きる",
            text: "私たちは皆、癖や空想、多少なりとも衰弱させる不合理な恐怖を持っていることを学びました。それらと共に生きることを学ぶのは美しい勝利です。世界にはあなたのような、私のような、最高の人生を送っている他の多くの人々がいることを知るべきです。\n\n彼らは頭の中の暗い声だけを聞くことを選んだのでしょうか？いいえ！彼らはそれと共に生きています。簡単に生きている人もいれば、孤立しないことを選び、病院でも信仰を通してでも助けや休息を見つける人もいます。\n\n道の上の善良な魂は大きな癒しをもたらすことができます。すべてにもかかわらず他の人に手を差し伸べてください。まずあなた自身が、そして他の人があなたのところに来るのを待たないでください。動いてください！",
            author: "匿名の証言"
        },
        {
            id: 2,
            title: "💎 命の宝 - エマニュエル",
            text: "病気が私をひどく孤立させ、暗い雲が私の人生に降りかかった時がありました。諦めようとしましたが、その前に神に叫びました！私の命をあなたに捧げます、欺く影にではありません。\n\n祈りのように、私の叫びは聞かれ、その日から私の人生は変わりました。ありのままの自分が愛されていることを心で知った時から。信仰、勇気、変容の長い働きが私の中で始まりました。\n\n間違いから学び、忘れずに常に振り返らないことを学びました。しかし何よりも、忍耐、希望、喜びをもって未来を見ることを学びました。\n\n神なる救い主を賛美し礼拝する中で見つけた喜び、誰も私のためにそこにいられなかった時に手を差し伸べてくれた方。彼は私を死の谷から引き出し、本当に重要なことを示してくれました：シンプルで平凡な人生。\n\n私は物質主義的な欲望を超えて見ました。持っているものを見るべきで、持っていないものを見るべきではないことを。そしてなりたい自分を愛すること。希望と対面しました。\n\n求めると、言葉にできない答えを受け取り、揺るぎない信仰が私の中に生まれました。困難を通して成長し、何度も何度も希望を抱き続けたことを後悔していません。すべての丘に命の宝が隠されていたからです。前進する勇気で勝ち取った山々は、より良い未来、並外れた人生の思い出、素晴らしい出会いと場所をもたらしました。\n\n🕊️ だからこそイエスはあなたに言います：決して諦めないで、不可能まで耐え抜きなさい！🕊️",
            author: "エマニュエル"
        }
    ],
    pl: [
        {
            id: 1,
            title: "Życie z naszymi trudnościami",
            text: "Nauczyłem się, że wszyscy mamy swoje dziwactwa, nasze fantazje, irracjonalne lęki bardziej lub mniej wyniszczające. Nauczenie się życia z nimi to piękne zwycięstwo. Powinieneś wiedzieć, że na świecie jest wielu innych ludzi takich jak ty, jak ja, żyjących swoim najlepszym życiem.\n\nCzy wybrali słuchanie tylko ciemnych głosów w swoich głowach? Nie! Żyją z tym, niektórzy łatwo, inni decydują się nie izolować i znajdują pomoc, odpoczynek, czy to w szpitalu, czy poprzez wiarę.\n\nDobre dusze na drodze mogą przynieść wielkie uzdrowienie. Sięgnij do innych pomimo wszystko, ty najpierw, i nie czekaj, aż inni przyjdą do ciebie. Ruszaj się!",
            author: "Anonimowe świadectwo"
        },
        {
            id: 2,
            title: "💎 Skarb Życia - Emmanuel",
            text: "Był czas, kiedy choroba straszliwie mnie izolowała i ciemne chmury opadły na moje życie. Próbowałem się poddać, ale zanim to zrobiłem, wołałem do Boga! Oddaję moje życie Tobie, nie zwodniczym cieniom.\n\nJak modlitwa, moje wołanie zostało wysłuchane i moje życie zmieniło się od tego dnia, kiedy poznałem w sercu, że jestem kochany takim, jakim jestem. Długa praca wiary, odwagi i przemiany rozpoczęła się we mnie.\n\nNauczyłem się na błędach, nauczyłem się, aby nie oglądać się wstecz bez zapominania. Ale przede wszystkim nauczyłem się patrzeć w przyszłość z cierpliwością, nadzieją i radością.\n\nRadość, którą znalazłem w uwielbianiu i wielbieniu Boga zbawiciela, tego, który wyciągnął do mnie rękę, kiedy nikt nie mógł tam być dla mnie. Wyciągnął mnie z doliny śmierci i pokazał mi, co naprawdę się liczy: proste, zwykłe życie.\n\nPatrzyłem poza moimi materialistycznymi pragnieniami, zobaczyłem, że powinienem patrzeć na to, co mam, a nie na to, czego nie mam. I kochać to, czym jestem, jakim chcę być. Zobaczyłem nadzieję twarzą w twarz.\n\nProsiłem i otrzymałem niewypowiedziane odpowiedzi, które zrodziły we mnie niezachwianą wiarę. Poprzez trudności urosłem i nie żałuję, że cierpliwie, raz za razem pokładałem nadzieję, ponieważ w każdym wzgórzu ukryte były skarby życia, każda góra zdobyta odwagą iść dalej przyniosła lepszą przyszłość, wspomnienia niezwykłego życia, wspaniałe spotkania i miejsca.\n\n🕊️ Dlatego Jezus mówi do ciebie: Nigdy się nie poddawaj, wytrwaj do niemożliwego! 🕊️",
            author: "Emmanuel"
        }
    ]
};

// Fonction pour obtenir les témoignages dans une langue
function getTestimonies(lang = 'fr') {
    return TESTIMONIES[lang] || TESTIMONIES.fr;
}

// Fonction pour obtenir le titre des témoignages dans une langue
function getTestimonyTitle(lang = 'fr') {
    return TESTIMONY_TITLES[lang] || TESTIMONY_TITLES.fr;
}

// Fonction pour obtenir un témoignage aléatoire
function getRandomTestimony(lang = 'fr') {
    const testimonies = getTestimonies(lang);
    return testimonies[Math.floor(Math.random() * testimonies.length)];
}

// Log pour confirmer que le module est chargé
console.log('✅ Module testimonies.js chargé - Fonctions disponibles:', {
    getTestimonies: typeof getTestimonies,
    getTestimonyTitle: typeof getTestimonyTitle,
    getRandomTestimony: typeof getRandomTestimony
});
