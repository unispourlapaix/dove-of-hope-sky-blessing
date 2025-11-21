/**
 * 🎮 DOVE OF HOPE: SKY BLESSING
 * =============================
 * Module: Interface de Scoring
 * 
 * Gère l'affichage des échelons de courage et des blasons
 */

/**
 * Afficher l'échelon de courage actuel dans l'UI
 */
function displayCourageRank() {
    const rank = getCurrentCourageRank(gameStats.totalScore);
    const nextRank = getNextCourageRank(gameStats.totalScore);
    
    // Chercher ou créer l'élément d'affichage
    let rankDisplay = document.getElementById('courageRank');
    if (!rankDisplay) {
        rankDisplay = document.createElement('div');
        rankDisplay.id = 'courageRank';
        rankDisplay.style.cssText = `
            position: fixed;
            top: 60px;
            left: 10px;
            background: rgba(255,255,255,0.9);
            padding: 8px 12px;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            z-index: 90;
            font-size: 13px;
            font-weight: bold;
            color: ${rank.color};
            border: 2px solid ${rank.color};
        `;
        document.getElementById('gameContainer').appendChild(rankDisplay);
    }
    
    rankDisplay.style.color = rank.color;
    rankDisplay.style.borderColor = rank.color;
    rankDisplay.innerHTML = `${rank.icon} ${rank.name}`;
    rankDisplay.title = rank.message;
}

/**
 * Afficher un écran de montée en grade
 */
function showRankUpScreen(newRank) {
    const rankUpDiv = document.createElement('div');
    rankUpDiv.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(30,30,60,0.95) 100%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 600;
        padding: 20px;
        box-sizing: border-box;
        animation: fadeIn 0.5s ease-in;
    `;
    
    rankUpDiv.innerHTML = `
        <div style="max-width: 500px; text-align: center;">
            <h1 style="font-size: 48px; margin-bottom: 20px; animation: pulse 2s infinite;">
                ${newRank.icon}
            </h1>
            <h2 style="color: ${newRank.color}; font-size: 32px; margin-bottom: 20px; text-shadow: 0 0 10px ${newRank.color};">
                🎉 PROMOTION ! 🎉
            </h2>
            <h3 style="color: #fff; font-size: 28px; margin-bottom: 15px;">
                ${newRank.name}
            </h3>
            <p style="color: #ecf0f1; font-size: 18px; line-height: 1.6; margin-bottom: 30px;">
                ${newRank.message}
            </p>
            <p style="color: #95a5a6; font-size: 14px; margin-bottom: 30px;">
                Score: ${gameStats.totalScore.toLocaleString()} points
            </p>
            <button id="rankUpBtn" style="
                background: linear-gradient(135deg, ${newRank.color} 0%, ${newRank.color}dd 100%);
                border: none;
                padding: 15px 50px;
                border-radius: 25px;
                color: #fff;
                font-size: 20px;
                font-weight: bold;
                cursor: pointer;
                box-shadow: 0 5px 15px ${newRank.color}66;
                transition: all 0.3s;
            ">
                ✨ Continuer
            </button>
        </div>
        <style>
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.2); }
            }
        </style>
    `;
    
    document.getElementById('gameContainer').appendChild(rankUpDiv);
    
    document.getElementById('rankUpBtn').addEventListener('click', () => {
        rankUpDiv.remove();
    });
}

/**
 * Afficher l'écran de déblocage d'un blason
 */
function showBadgeUnlockScreen(badge) {
    const badgeDiv = document.createElement('div');
    badgeDiv.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(155,89,182,0.95) 0%, rgba(142,68,173,0.95) 100%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 600;
        padding: 20px;
        box-sizing: border-box;
        animation: fadeIn 0.5s ease-in;
    `;
    
    badgeDiv.innerHTML = `
        <div style="max-width: 500px; text-align: center;">
            <h1 style="font-size: 64px; margin-bottom: 20px; animation: bounce 1s infinite;">
                ${badge.icon}
            </h1>
            <h2 style="color: #f1c40f; font-size: 32px; margin-bottom: 20px; text-shadow: 0 0 10px rgba(241,196,15,0.5);">
                🎖️ BLASON DÉBLOQUÉ ! 🎖️
            </h2>
            <h3 style="color: #fff; font-size: 26px; margin-bottom: 15px;">
                ${badge.name}
            </h3>
            <p style="color: #ecf0f1; font-size: 18px; line-height: 1.6; margin-bottom: 20px;">
                ${badge.description}
            </p>
            <p style="color: #3498db; font-size: 16px; font-style: italic; margin-bottom: 30px; line-height: 1.6;">
                « ${badge.verse} »
            </p>
            <p style="color: #bdc3c7; font-size: 14px; margin-bottom: 30px;">
                ${getUnlockedBadgesCount()}/10 Blasons débloqués (${getBadgeProgress()}%)
            </p>
            <button id="badgeBtn" style="
                background: linear-gradient(135deg, #f1c40f 0%, #f39c12 100%);
                border: none;
                padding: 15px 50px;
                border-radius: 25px;
                color: #2c3e50;
                font-size: 20px;
                font-weight: bold;
                cursor: pointer;
                box-shadow: 0 5px 15px rgba(241,196,15,0.4);
                transition: all 0.3s;
            ">
                ✨ Continuer
            </button>
        </div>
        <style>
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-20px); }
            }
        </style>
    `;
    
    document.getElementById('gameContainer').appendChild(badgeDiv);
    
    document.getElementById('badgeBtn').addEventListener('click', () => {
        badgeDiv.remove();
    });
}

/**
 * Afficher l'écran de collection de blasons
 */
function showBadgesCollection() {
    const collectionDiv = document.createElement('div');
    collectionDiv.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(44,62,80,0.98) 0%, rgba(52,73,94,0.98) 100%);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        z-index: 600;
        padding: 20px;
        box-sizing: border-box;
        overflow-y: auto;
        animation: fadeIn 0.5s ease-in;
    `;
    
    let badgesHTML = '';
    KNOWLEDGE_BADGES.forEach(badge => {
        const isUnlocked = badge.unlocked;
        badgesHTML += `
            <div style="
                background: ${isUnlocked ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.3)'};
                padding: 15px;
                border-radius: 10px;
                margin: 10px;
                width: 100%;
                max-width: 500px;
                border: 2px solid ${isUnlocked ? '#f1c40f' : '#7f8c8d'};
                opacity: ${isUnlocked ? '1' : '0.5'};
            ">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="font-size: 48px; ${isUnlocked ? '' : 'filter: grayscale(100%);'}">
                        ${badge.icon}
                    </div>
                    <div style="flex: 1; text-align: left;">
                        <h4 style="color: ${isUnlocked ? '#f1c40f' : '#95a5a6'}; font-size: 18px; margin: 0 0 5px 0;">
                            ${badge.name}
                        </h4>
                        <p style="color: #ecf0f1; font-size: 14px; margin: 5px 0;">
                            ${badge.description}
                        </p>
                        ${isUnlocked ? `
                            <p style="color: #3498db; font-size: 12px; font-style: italic; margin: 5px 0;">
                                « ${badge.verse} »
                            </p>
                        ` : `
                            <p style="color: #7f8c8d; font-size: 12px; margin: 5px 0;">
                                🔒 ${badge.requirement}
                            </p>
                        `}
                    </div>
                    ${isUnlocked ? '<div style="color: #27ae60; font-size: 24px;">✓</div>' : ''}
                </div>
            </div>
        `;
    });
    
    const currentRank = getCurrentCourageRank(gameStats.totalScore);
    
    collectionDiv.innerHTML = `
        <div style="width: 100%; max-width: 600px;">
            <h2 style="color: #f1c40f; font-size: 32px; text-align: center; margin-bottom: 20px;">
                📜 Collection de Blasons
            </h2>
            
            <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; margin-bottom: 20px; text-align: center;">
                <h3 style="color: ${currentRank.color}; font-size: 24px; margin-bottom: 10px;">
                    ${currentRank.icon} ${currentRank.name}
                </h3>
                <p style="color: #ecf0f1; font-size: 14px; margin: 10px 0;">
                    Score Total: ${gameStats.totalScore.toLocaleString()} points
                </p>
                <p style="color: #3498db; font-size: 14px;">
                    Blasons: ${getUnlockedBadgesCount()}/10 (${getBadgeProgress()}%)
                </p>
            </div>
            
            ${badgesHTML}
            
            <button id="closeCollectionBtn" style="
                background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
                border: none;
                padding: 15px 50px;
                border-radius: 25px;
                color: #fff;
                font-size: 18px;
                font-weight: bold;
                cursor: pointer;
                box-shadow: 0 5px 15px rgba(231,76,60,0.4);
                transition: all 0.3s;
                margin: 20px auto;
                display: block;
            ">
                ✕ Fermer
            </button>
        </div>
    `;
    
    document.getElementById('gameContainer').appendChild(collectionDiv);
    
    document.getElementById('closeCollectionBtn').addEventListener('click', () => {
        collectionDiv.remove();
    });
}

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        displayCourageRank,
        showRankUpScreen,
        showBadgeUnlockScreen,
        showBadgesCollection
    };
}

// console.log('🎨 Module Interface de Scoring chargé');
