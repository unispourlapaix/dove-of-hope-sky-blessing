// ============================================
// 🇨🇳 中文 - DOVE OF HOPE
// ============================================

const zh = {
  code: 'zh',
  name: '中文',
  flag: '🇨🇳',
  
  ui: {
    score: '分数',
    clouds: '云朵',
    level: '章节',
    lives: '生命'
  },
  
  buttons: {
    start: '点亮！',
    play: '开始',
    restart: '重玩'
  },
  
  messages: {
    start: '飞吧，小鸽子！驱散云层！',
    restart: '鸽子重生！再来一次！',
    gameOver: '游戏结束！但在逆境中，你更加闪耀！',
    victory: '胜利！诗篇99.1 - 生命是一场非凡的冒险！- 俄利根说',
    levelUp: '第 {level} 关 - 光明增长！',
    motivation: '是时候点亮光明了 - 这是实现梦想的美好时刻！'
  },
  
  gameplay: [
    '行动起来，现在是时候了！',
    '鸽子带来希望！',
    '继续，光明归来！',
    '你的翅膀承载希望！',
    '坚持，太阳在等你！',
    '飞向你的梦想！',
    '雨后必有晴天！',
    '懂得在雨中跳舞就是懂得幸福！',
    '你的信念比风暴更强！',
    '与元素共舞，你是自由的！'
  ],
  
  rain: [
    '雨后必有晴天！',
    '你的信念比风暴更强！',
    '风暴揭示你翅膀的力量！'
  ],
  
  powerups: {
    umbrella: '雨伞激活！与元素共舞！',
    speed: '神圣速度！你的翅膀自由了！',
    multishot: '三重光芒！你的心在闪耀！'
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = zh;
}
