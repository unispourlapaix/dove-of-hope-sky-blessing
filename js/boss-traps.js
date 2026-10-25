/* One shared health-threshold plan, fixed when each boss fight begins. */
function getBossTrapThresholds(boss,spider=false){
 const difficulty=boss.trapDifficulty||currentDifficulty;
 const plans={easy:[50],normal:[50,20],hard:[75,50,35,20],legendary:[90,80,70,60,50,40,30,20]};
 return plans[difficulty]||plans.normal;
}
(() => {
 const spawn=BossManager.prototype.spawnBoss;
 BossManager.prototype.spawnBoss=function(...args){const result=spawn.apply(this,args);if(this.currentBoss)this.currentBoss.trapDifficulty=currentDifficulty;return result;};
})();
