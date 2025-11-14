// ============================================
// 📖 DOVE OF HOPE - STORY MODULE
// ============================================

const STORY_CHAPTERS = {
  fr: [
    {
      id: 1,
      title: "L'Éveil de la Colombe",
      intro: "Dans un monde plongé dans les ténèbres, une petite colombe s'éveille. Sa mission : rallumer la lumière de l'espoir.",
      outro: "Les premiers nuages se dissipent. L'espoir renaît doucement..."
    },
    {
      id: 2,
      title: "La Tempête Commence",
      intro: "Les nuages deviennent plus sombres. La pluie menace. Mais ta foi est plus forte.",
      outro: "Tu as traversé la tempête ! La lumière perce les nuages."
    },
    {
      id: 3,
      title: "L'Ascension Divine",
      intro: "Le ciel s'ouvre. Les défis s'intensifient. Tes ailes se renforcent à chaque bataille.",
      outro: "Tu t'élèves au-dessus des difficultés ! Le soleil brille de nouveau."
    },
    {
      id: 4,
      title: "Le Souffle de l'Espoir",
      intro: "Les ténèbres résistent, mais ton cœur rayonne. Chaque nuage dissipé est une victoire.",
      outro: "L'espoir se répand comme une douce brise. Continue ton vol !"
    },
    {
      id: 5,
      title: "La Révélation Finale",
      intro: "Le dernier voile de nuages se dresse devant toi. C'est l'heure de la victoire finale.",
      outro: "VICTOIRE ! Le Psaume 99.1 - La vie est une aventure extraordinaire !"
    }
  ],
  en: [
    {
      id: 1,
      title: "The Dove's Awakening",
      intro: "In a world plunged into darkness, a small dove awakens. Your mission: relight the light of hope.",
      outro: "The first clouds dissipate. Hope is slowly reborn..."
    },
    {
      id: 2,
      title: "The Storm Begins",
      intro: "The clouds grow darker. Rain threatens. But your faith is stronger.",
      outro: "You weathered the storm! Light pierces through the clouds."
    },
    {
      id: 3,
      title: "Divine Ascension",
      intro: "The sky opens. Challenges intensify. Your wings strengthen with each battle.",
      outro: "You rise above difficulties! The sun shines again."
    },
    {
      id: 4,
      title: "The Breath of Hope",
      intro: "Darkness resists, but your heart radiates. Each cloud cleared is a victory.",
      outro: "Hope spreads like a gentle breeze. Continue your flight!"
    },
    {
      id: 5,
      title: "The Final Revelation",
      intro: "The last veil of clouds stands before you. It's time for final victory.",
      outro: "VICTORY! Psalm 99.1 - Life is an extraordinary adventure!"
    }
  ]
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { STORY_CHAPTERS };
}
