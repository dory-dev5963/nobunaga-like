// ========================================
// ゲームデータ定義
// ========================================

// 国データ（簡略版 - 主要な旧国のみ）
const TERRITORIES = {
    owari: {
        id: 'owari',
        name: '尾張',
        owner: 'oda',
        rice: 5000,
        gold: 3000,
        troops: 2000,
        neighbors: ['mino', 'mikawa', 'ise'],
        x: 400, y: 450
    },
    mino: {
        id: 'mino',
        name: '美濃',
        owner: 'saito',
        rice: 4500,
        gold: 2500,
        troops: 1800,
        neighbors: ['owari', 'omi', 'echizen', 'hida'],
        x: 380, y: 400
    },
    mikawa: {
        id: 'mikawa',
        name: '三河',
        owner: 'tokugawa',
        rice: 4000,
        gold: 2000,
        troops: 1500,
        neighbors: ['owari', 'totomi', 'shinano'],
        x: 440, y: 470
    },
    kai: {
        id: 'kai',
        name: '甲斐',
        owner: 'takeda',
        rice: 3500,
        gold: 2500,
        troops: 2500,
        neighbors: ['shinano', 'suruga', 'sagami', 'musashi'],
        x: 480, y: 450
    },
    echigo: {
        id: 'echigo',
        name: '越後',
        owner: 'uesugi',
        rice: 5000,
        gold: 3000,
        troops: 3000,
        neighbors: ['etchu', 'shinano', 'kozuke', 'mutsu'],
        x: 450, y: 330
    },
    omi: {
        id: 'omi',
        name: '近江',
        owner: 'asai',
        rice: 4000,
        gold: 2500,
        troops: 1500,
        neighbors: ['mino', 'echizen', 'yamashiro', 'ise'],
        x: 370, y: 430
    },
    yamashiro: {
        id: 'yamashiro',
        name: '山城',
        owner: 'ashikaga',
        rice: 3000,
        gold: 5000,
        troops: 1000,
        neighbors: ['omi', 'yamato', 'tanba', 'kawachi'],
        x: 350, y: 450
    },
    settsu: {
        id: 'settsu',
        name: '摂津',
        owner: 'miyoshi',
        rice: 3500,
        gold: 4000,
        troops: 1800,
        neighbors: ['kawachi', 'tanba', 'harima'],
        x: 330, y: 460
    },
    bizen: {
        id: 'bizen',
        name: '備前',
        owner: 'ukita',
        rice: 3000,
        gold: 2000,
        troops: 1200,
        neighbors: ['harima', 'bitchu', 'mimasaka'],
        x: 300, y: 480
    },
    suo: {
        id: 'suo',
        name: '周防',
        owner: 'mori',
        rice: 4000,
        gold: 3000,
        troops: 2000,
        neighbors: ['nagato', 'aki', 'iwami'],
        x: 250, y: 500
    },
    bungo: {
        id: 'bungo',
        name: '豊後',
        owner: 'otomo',
        rice: 4500,
        gold: 3000,
        troops: 2000,
        neighbors: ['buzen', 'hyuga', 'higo'],
        x: 200, y: 580
    },
    hizen: {
        id: 'hizen',
        name: '肥前',
        owner: 'ryuzoji',
        rice: 3500,
        gold: 2500,
        troops: 1500,
        neighbors: ['chikuzen', 'higo'],
        x: 150, y: 560
    },
    satsuma: {
        id: 'satsuma',
        name: '薩摩',
        owner: 'shimazu',
        rice: 4000,
        gold: 2000,
        troops: 2500,
        neighbors: ['osumi', 'hyuga'],
        x: 150, y: 650
    },
    mutsu: {
        id: 'mutsu',
        name: '陸奥',
        owner: 'date',
        rice: 5000,
        gold: 2500,
        troops: 2500,
        neighbors: ['echigo', 'dewa'],
        x: 500, y: 200
    },
    shinano: {
        id: 'shinano',
        name: '信濃',
        owner: 'takeda',
        rice: 4000,
        gold: 2000,
        troops: 1800,
        neighbors: ['kai', 'echigo', 'etchu', 'hida', 'mikawa', 'totomi'],
        x: 460, y: 400
    },
    ise: {
        id: 'ise',
        name: '伊勢',
        owner: 'kitabatake',
        rice: 3500,
        gold: 2500,
        troops: 1200,
        neighbors: ['owari', 'omi', 'shima', 'kii'],
        x: 390, y: 480
    }
};

// 大名データ
const LORDS = {
    oda: {
        id: 'oda',
        name: '織田信長',
        portrait: 'assets/portraits/oda.png',
        territories: ['owari'],
        gold: 3000,
        rice: 5000,
        officers: ['oda_nobunaga', 'shibata_katsuie', 'hashiba_hideyoshi']
    },
    takeda: {
        id: 'takeda',
        name: '武田信玄',
        portrait: 'assets/portraits/takeda.png',
        territories: ['kai', 'shinano'],
        gold: 4500,
        rice: 7500,
        officers: ['takeda_shingen', 'sanada_yukitaka', 'baba_nobuharu']
    },
    uesugi: {
        id: 'uesugi',
        name: '上杉謙信',
        portrait: 'assets/portraits/uesugi.png',
        territories: ['echigo'],
        gold: 3000,
        rice: 5000,
        officers: ['uesugi_kenshin', 'kakizaki_kageie', 'naoe_kanetsugu']
    },
    tokugawa: {
        id: 'tokugawa',
        name: '徳川家康',
        portrait: 'assets/portraits/tokugawa.png',
        territories: ['mikawa'],
        gold: 2000,
        rice: 4000,
        officers: ['tokugawa_ieyasu', 'honda_tadakatsu', 'sakai_tadatsugu']
    },
    date: {
        id: 'date',
        name: '伊達政宗',
        portrait: 'assets/portraits/date.png',
        territories: ['mutsu'],
        gold: 2500,
        rice: 5000,
        officers: ['date_masamune', 'katakura_kojuro']
    },
    mori: {
        id: 'mori',
        name: '毛利元就',
        portrait: 'assets/portraits/mori.png',
        territories: ['suo'],
        gold: 3000,
        rice: 4000,
        officers: ['mori_motonari', 'kobayakawa_takakage']
    },
    shimazu: {
        id: 'shimazu',
        name: '島津義久',
        portrait: 'assets/portraits/shimazu.png',
        territories: ['satsuma'],
        gold: 2000,
        rice: 4000,
        officers: ['shimazu_yoshihisa', 'shimazu_yoshihiro']
    },
    saito: {
        id: 'saito',
        name: '斎藤道三',
        portrait: 'assets/portraits/saito.png',
        territories: ['mino'],
        gold: 2500,
        rice: 4500,
        officers: ['saito_dosan']
    },
    asai: {
        id: 'asai',
        name: '浅井長政',
        portrait: 'assets/portraits/asai.png',
        territories: ['omi'],
        gold: 2500,
        rice: 4000,
        officers: ['asai_nagamasa']
    },
    ashikaga: {
        id: 'ashikaga',
        name: '足利義昭',
        portrait: 'assets/portraits/ashikaga.png',
        territories: ['yamashiro'],
        gold: 5000,
        rice: 3000,
        officers: ['ashikaga_yoshiaki']
    },
    miyoshi: {
        id: 'miyoshi',
        name: '三好長慶',
        portrait: 'assets/portraits/miyoshi.png',
        territories: ['settsu'],
        gold: 4000,
        rice: 3500,
        officers: ['miyoshi_nagayoshi']
    },
    ukita: {
        id: 'ukita',
        name: '宇喜多直家',
        portrait: 'assets/portraits/ukita.png',
        territories: ['bizen'],
        gold: 2000,
        rice: 3000,
        officers: ['ukita_naoie']
    },
    otomo: {
        id: 'otomo',
        name: '大友宗麟',
        portrait: 'assets/portraits/otomo.png',
        territories: ['bungo'],
        gold: 3000,
        rice: 4500,
        officers: ['otomo_sorin']
    },
    ryuzoji: {
        id: 'ryuzoji',
        name: '龍造寺隆信',
        portrait: 'assets/portraits/ryuzoji.png',
        territories: ['hizen'],
        gold: 2500,
        rice: 3500,
        officers: ['ryuzoji_takanobu']
    },
    kitabatake: {
        id: 'kitabatake',
        name: '北畠具教',
        portrait: 'assets/portraits/kitabatake.png',
        territories: ['ise'],
        gold: 2500,
        rice: 3500,
        officers: ['kitabatake_tomonori']
    }
};

// 武将データ
const OFFICERS = {
    oda_nobunaga: { id: 'oda_nobunaga', name: '織田信長', war: 95, int: 90, pol: 85, loyalty: 100 },
    shibata_katsuie: { id: 'shibata_katsuie', name: '柴田勝家', war: 88, int: 70, pol: 65, loyalty: 95 },
    hashiba_hideyoshi: { id: 'hashiba_hideyoshi', name: '羽柴秀吉', war: 85, int: 95, pol: 90, loyalty: 90 },
    
    takeda_shingen: { id: 'takeda_shingen', name: '武田信玄', war: 98, int: 92, pol: 88, loyalty: 100 },
    sanada_yukitaka: { id: 'sanada_yukitaka', name: '真田幸隆', war: 82, int: 88, pol: 75, loyalty: 95 },
    baba_nobuharu: { id: 'baba_nobuharu', name: '馬場信春', war: 86, int: 75, pol: 70, loyalty: 98 },
    
    uesugi_kenshin: { id: 'uesugi_kenshin', name: '上杉謙信', war: 99, int: 88, pol: 82, loyalty: 100 },
    kakizaki_kageie: { id: 'kakizaki_kageie', name: '柿崎景家', war: 84, int: 72, pol: 68, loyalty: 92 },
    naoe_kanetsugu: { id: 'naoe_kanetsugu', name: '直江兼続', war: 80, int: 90, pol: 88, loyalty: 95 },
    
    tokugawa_ieyasu: { id: 'tokugawa_ieyasu', name: '徳川家康', war: 88, int: 95, pol: 92, loyalty: 100 },
    honda_tadakatsu: { id: 'honda_tadakatsu', name: '本多忠勝', war: 95, int: 70, pol: 65, loyalty: 98 },
    sakai_tadatsugu: { id: 'sakai_tadatsugu', name: '酒井忠次', war: 85, int: 80, pol: 78, loyalty: 96 },
    
    date_masamune: { id: 'date_masamune', name: '伊達政宗', war: 93, int: 90, pol: 87, loyalty: 100 },
    katakura_kojuro: { id: 'katakura_kojuro', name: '片倉小十郎', war: 86, int: 88, pol: 82, loyalty: 98 },
    
    mori_motonari: { id: 'mori_motonari', name: '毛利元就', war: 90, int: 96, pol: 88, loyalty: 100 },
    kobayakawa_takakage: { id: 'kobayakawa_takakage', name: '小早川隆景', war: 85, int: 92, pol: 86, loyalty: 95 },
    
    shimazu_yoshihisa: { id: 'shimazu_yoshihisa', name: '島津義久', war: 87, int: 85, pol: 83, loyalty: 100 },
    shimazu_yoshihiro: { id: 'shimazu_yoshihiro', name: '島津義弘', war: 94, int: 78, pol: 72, loyalty: 98 },
    
    saito_dosan: { id: 'saito_dosan', name: '斎藤道三', war: 85, int: 88, pol: 82, loyalty: 100 },
    asai_nagamasa: { id: 'asai_nagamasa', name: '浅井長政', war: 82, int: 78, pol: 80, loyalty: 100 },
    ashikaga_yoshiaki: { id: 'ashikaga_yoshiaki', name: '足利義昭', war: 40, int: 65, pol: 70, loyalty: 100 },
    miyoshi_nagayoshi: { id: 'miyoshi_nagayoshi', name: '三好長慶', war: 83, int: 85, pol: 82, loyalty: 100 },
    ukita_naoie: { id: 'ukita_naoie', name: '宇喜多直家', war: 80, int: 86, pol: 78, loyalty: 100 },
    otomo_sorin: { id: 'otomo_sorin', name: '大友宗麟', war: 75, int: 80, pol: 85, loyalty: 100 },
    ryuzoji_takanobu: { id: 'ryuzoji_takanobu', name: '龍造寺隆信', war: 82, int: 75, pol: 73, loyalty: 100 },
    kitabatake_tomonori: { id: 'kitabatake_tomonori', name: '北畠具教', war: 78, int: 82, pol: 80, loyalty: 100 }
};

// ========================================
// ゲーム状態管理
// ========================================

let gameState = {
    currentYear: 1560,
    currentMonth: 1,
    playerLordId: null,
    territories: {},
    lords: {},
    selectedTerritory: null,
    gameLog: []
};

// ========================================
// 初期化処理
// ========================================

function initGame() {
    // 画面遷移イベント
    document.getElementById('new-game-btn').addEventListener('click', showLordSelect);
    document.getElementById('load-game-btn').addEventListener('click', loadGame);
    document.getElementById('back-to-title-btn').addEventListener('click', showTitle);
    document.getElementById('start-game-btn').addEventListener('click', startGame);
    
    // コマンドボタン
    document.getElementById('internal-btn').addEventListener('click', showInternalModal);
    document.getElementById('military-btn').addEventListener('click', showMilitaryModal);
    document.getElementById('diplomacy-btn').addEventListener('click', showDiplomacyModal);
    document.getElementById('save-btn').addEventListener('click', saveGame);
    document.getElementById('next-turn-btn').addEventListener('click', nextTurn);
    
    // モーダル閉じるボタン
    document.getElementById('close-internal-btn').addEventListener('click', closeModal);
    document.getElementById('close-military-btn').addEventListener('click', closeModal);
    document.getElementById('close-diplomacy-btn').addEventListener('click', closeModal);
    document.getElementById('close-battle-result-btn').addEventListener('click', closeModal);
    
    // ゲームデータの初期化
    gameState.territories = JSON.parse(JSON.stringify(TERRITORIES));
    gameState.lords = JSON.parse(JSON.stringify(LORDS));
}

// ========================================
// 画面遷移
// ========================================

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function showTitle() {
    showScreen('title-screen');
}

function showLordSelect() {
    showScreen('lord-select-screen');
    renderLordList();
}

function showGameScreen() {
    showScreen('game-screen');
    updateUI();
    renderMap();
}

// ========================================
// 大名選択
// ========================================

function renderLordList() {
    const lordList = document.getElementById('lord-list');
    lordList.innerHTML = '';
    
    Object.values(LORDS).forEach(lord => {
        const card = document.createElement('div');
        card.className = 'lord-card';
        card.dataset.lordId = lord.id;
        
        card.innerHTML = `
            <img src="${lord.portrait}" alt="${lord.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%238b4513%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 font-size=%2240%22 fill=%22%23f5e6d3%22 text-anchor=%22middle%22>将</text></svg>'">
            <h3>${lord.name}</h3>
            <p>領地: ${lord.territories.length}国</p>
        `;
        
        card.addEventListener('click', () => selectLord(lord.id));
        lordList.appendChild(card);
    });
}

function selectLord(lordId) {
    document.querySelectorAll('.lord-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    const selectedCard = document.querySelector(`[data-lord-id="${lordId}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
        gameState.playerLordId = lordId;
    }
}

function startGame() {
    if (!gameState.playerLordId) {
        alert('大名を選択してください');
        return;
    }
    
    addLog(`${LORDS[gameState.playerLordId].name}として天下統一を目指します！`, true);
    showGameScreen();
}

// ========================================
// 地図描画
// ========================================

function renderMap() {
    const svg = document.getElementById('japan-map');
    svg.innerHTML = '';
    
    // 簡略化された日本地図をSVGで描画
    Object.values(gameState.territories).forEach(territory => {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.classList.add('territory-group');
        g.dataset.territoryId = territory.id;
        
        // 円で国を表現（簡略版）
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', territory.x);
        circle.setAttribute('cy', territory.y);
        circle.setAttribute('r', 35);
        circle.classList.add('territory');
        
        // 支配者の色
        const lord = gameState.lords[territory.owner];
        const color = getLordColor(territory.owner);
        circle.setAttribute('fill', color);
        
        // クリックイベント
        circle.addEventListener('click', () => selectTerritory(territory.id));
        
        // ラベル
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', territory.x);
        text.setAttribute('y', territory.y + 5);
        text.setAttribute('text-anchor', 'middle');
        text.classList.add('territory-label');
        text.textContent = territory.name;
        
        g.appendChild(circle);
        g.appendChild(text);
        svg.appendChild(g);
    });
    
    // 隣接関係を線で表示
    const drawnConnections = new Set();
    Object.values(gameState.territories).forEach(territory => {
        territory.neighbors.forEach(neighborId => {
            const connectionKey = [territory.id, neighborId].sort().join('-');
            if (!drawnConnections.has(connectionKey)) {
                const neighbor = gameState.territories[neighborId];
                if (neighbor) {
                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    line.setAttribute('x1', territory.x);
                    line.setAttribute('y1', territory.y);
                    line.setAttribute('x2', neighbor.x);
                    line.setAttribute('y2', neighbor.y);
                    line.setAttribute('stroke', '#4a2c1a');
                    line.setAttribute('stroke-width', '2');
                    line.setAttribute('opacity', '0.3');
                    svg.insertBefore(line, svg.firstChild);
                    drawnConnections.add(connectionKey);
                }
            }
        });
    });
}

function getLordColor(lordId) {
    const colors = {
        oda: '#e74c3c',
        takeda: '#c0392b',
        uesugi: '#3498db',
        tokugawa: '#f39c12',
        date: '#9b59b6',
        mori: '#16a085',
        shimazu: '#e67e22',
        saito: '#95a5a6',
        asai: '#34495e',
        ashikaga: '#d4af37',
        miyoshi: '#27ae60',
        ukita: '#8e44ad',
        otomo: '#2980b9',
        ryuzoji: '#c0392b',
        kitabatake: '#7f8c8d'
    };
    return colors[lordId] || '#95a5a6';
}

// ========================================
// 国選択
// ========================================

function selectTerritory(territoryId) {
    gameState.selectedTerritory = territoryId;
    
    // 視覚的な選択表示
    document.querySelectorAll('.territory').forEach(t => {
        t.classList.remove('selected');
    });
    
    const selectedElement = document.querySelector(`[data-territory-id="${territoryId}"] .territory`);
    if (selectedElement) {
        selectedElement.classList.add('selected');
    }
    
    updateTerritoryInfo();
}

function updateTerritoryInfo() {
    const territory = gameState.territories[gameState.selectedTerritory];
    if (!territory) return;
    
    const lord = gameState.lords[territory.owner];
    const detailsDiv = document.getElementById('territory-details');
    
    detailsDiv.innerHTML = `
        <h4>${territory.name}</h4>
        <p><span class="stat-label">支配者:</span> <span class="stat-value">${lord.name}</span></p>
        <p><span class="stat-label">石高:</span> <span class="stat-value">${territory.rice}</span></p>
        <p><span class="stat-label">金:</span> <span class="stat-value">${territory.gold}</span></p>
        <p><span class="stat-label">兵数:</span> <span class="stat-value">${territory.troops}</span></p>
    `;
    
    // アクションボタンの表示
    const actionDiv = document.getElementById('action-buttons');
    actionDiv.innerHTML = '';
    
    if (territory.owner === gameState.playerLordId) {
        // 自領地の場合
        const recruitBtn = document.createElement('button');
        recruitBtn.className = 'action-btn';
        recruitBtn.textContent = '兵士募集';
        recruitBtn.addEventListener('click', () => recruitTroops(territory.id));
        actionDiv.appendChild(recruitBtn);
    }
}

// ========================================
// UI更新
// ========================================

function updateUI() {
    const playerLord = gameState.lords[gameState.playerLordId];
    
    // 日付表示
    document.getElementById('current-year').textContent = gameState.currentYear;
    document.getElementById('current-month').textContent = gameState.currentMonth;
    
    // プレイヤー情報
    document.getElementById('player-name').textContent = playerLord.name;
    document.getElementById('player-portrait').src = playerLord.portrait;
    document.getElementById('player-portrait').onerror = function() {
        this.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%238b4513' width='100' height='100'/><text x='50' y='55' font-size='40' fill='%23f5e6d3' text-anchor='middle'>将</text></svg>";
    };
    
    // 資源表示
    document.getElementById('player-gold').textContent = playerLord.gold;
    document.getElementById('player-rice').textContent = playerLord.rice;
}

// ========================================
// 内政システム
// ========================================

function showInternalModal() {
    if (!gameState.selectedTerritory) {
        alert('国を選択してください');
        return;
    }
    
    const territory = gameState.territories[gameState.selectedTerritory];
    if (territory.owner !== gameState.playerLordId) {
        alert('自国の領地を選択してください');
        return;
    }
    
    document.getElementById('internal-modal').classList.add('active');
    renderOfficerList();
}

function renderOfficerList() {
    const playerLord = gameState.lords[gameState.playerLordId];
    const officerList = document.getElementById('officer-list');
    officerList.innerHTML = '';
    
    playerLord.officers.forEach(officerId => {
        const officer = OFFICERS[officerId];
        const div = document.createElement('div');
        div.className = 'officer-item';
        div.dataset.officerId = officerId;
        
        div.innerHTML = `
            <p class="officer-name">${officer.name}</p>
            <p>戦: ${officer.war}</p>
            <p>知: ${officer.int}</p>
            <p>政: ${officer.pol}</p>
        `;
        
        div.addEventListener('click', () => {
            document.querySelectorAll('.officer-item').forEach(item => {
                item.classList.remove('selected');
            });
            div.classList.add('selected');
        });
        
        officerList.appendChild(div);
    });
    
    // 内政コマンドにイベント設定
    document.querySelectorAll('.internal-cmd').forEach(btn => {
        btn.onclick = () => executeInternal(btn.dataset.action);
    });
}

function executeInternal(action) {
    const selectedOfficer = document.querySelector('.officer-item.selected');
    if (!selectedOfficer) {
        alert('武将を選択してください');
        return;
    }
    
    const officerId = selectedOfficer.dataset.officerId;
    const officer = OFFICERS[officerId];
    const territory = gameState.territories[gameState.selectedTerritory];
    const playerLord = gameState.lords[gameState.playerLordId];
    
    // 成功率計算（政治力に依存）
    const successRate = Math.min(95, 50 + officer.pol / 2);
    const success = Math.random() * 100 < successRate;
    
    if (success) {
        switch (action) {
            case 'agriculture':
                const riceIncrease = Math.floor(500 + officer.pol * 10);
                territory.rice += riceIncrease;
                addLog(`${territory.name}で${officer.name}が農業開発を実施。石高+${riceIncrease}`);
                break;
            case 'commerce':
                const goldIncrease = Math.floor(300 + officer.pol * 5);
                territory.gold += goldIncrease;
                playerLord.gold += goldIncrease;
                addLog(`${territory.name}で${officer.name}が商業発展を実施。金+${goldIncrease}`);
                break;
            case 'security':
                addLog(`${territory.name}で${officer.name}が治安維持を実施。民忠上昇`);
                break;
            case 'recruit':
                const cost = 500;
                if (playerLord.gold >= cost) {
                    const troopIncrease = Math.floor(300 + officer.pol * 3);
                    territory.troops += troopIncrease;
                    playerLord.gold -= cost;
                    addLog(`${territory.name}で${officer.name}が兵士募集を実施。兵+${troopIncrease}`);
                } else {
                    addLog(`金が不足しています`, true);
                }
                break;
        }
    } else {
        addLog(`${territory.name}での${officer.name}の内政が失敗しました`);
    }
    
    closeModal();
    updateUI();
    updateTerritoryInfo();
}

// ========================================
// 軍事システム
// ========================================

function showMilitaryModal() {
    if (!gameState.selectedTerritory) {
        alert('出撃元の国を選択してください');
        return;
    }
    
    const territory = gameState.territories[gameState.selectedTerritory];
    if (territory.owner !== gameState.playerLordId) {
        alert('自国の領地を選択してください');
        return;
    }
    
    document.getElementById('military-modal').classList.add('active');
    renderTargetList(territory);
    renderCommanderList();
    
    const troopInput = document.getElementById('troop-count');
    troopInput.max = territory.troops;
    troopInput.value = Math.min(1000, territory.troops);
}

function renderTargetList(territory) {
    const targetList = document.getElementById('target-list');
    targetList.innerHTML = '';
    
    territory.neighbors.forEach(neighborId => {
        const neighbor = gameState.territories[neighborId];
        if (neighbor && neighbor.owner !== gameState.playerLordId) {
            const div = document.createElement('div');
            div.className = 'target-item';
            div.dataset.targetId = neighborId;
            
            const lord = gameState.lords[neighbor.owner];
            div.innerHTML = `
                <h4>${neighbor.name}</h4>
                <p>支配者: ${lord.name}</p>
                <p>兵数: ${neighbor.troops}</p>
            `;
            
            div.addEventListener('click', () => {
                document.querySelectorAll('.target-item').forEach(item => {
                    item.classList.remove('selected');
                });
                div.classList.add('selected');
            });
            
            targetList.appendChild(div);
        }
    });
    
    document.getElementById('attack-btn').onclick = executeAttack;
}

function renderCommanderList() {
    const playerLord = gameState.lords[gameState.playerLordId];
    const commanderList = document.getElementById('commander-list');
    commanderList.innerHTML = '';
    
    playerLord.officers.forEach(officerId => {
        const officer = OFFICERS[officerId];
        const div = document.createElement('div');
        div.className = 'commander-item';
        div.dataset.officerId = officerId;
        
        div.innerHTML = `
            <p class="officer-name">${officer.name}</p>
            <p>戦: ${officer.war}</p>
        `;
        
        div.addEventListener('click', () => {
            document.querySelectorAll('.commander-item').forEach(item => {
                item.classList.remove('selected');
            });
            div.classList.add('selected');
        });
        
        commanderList.appendChild(div);
    });
}

function executeAttack() {
    const selectedTarget = document.querySelector('.target-item.selected');
    const selectedCommander = document.querySelector('.commander-item.selected');
    
    if (!selectedTarget) {
        alert('攻撃対象を選択してください');
        return;
    }
    
    if (!selectedCommander) {
        alert('指揮官を選択してください');
        return;
    }
    
    const troopCount = parseInt(document.getElementById('troop-count').value);
    if (troopCount <= 0) {
        alert('出兵数を入力してください');
        return;
    }
    
    const sourceTerritory = gameState.territories[gameState.selectedTerritory];
    if (troopCount > sourceTerritory.troops) {
        alert('兵数が不足しています');
        return;
    }
    
    const targetId = selectedTarget.dataset.targetId;
    const commanderId = selectedCommander.dataset.officerId;
    
    performBattle(sourceTerritory.id, targetId, troopCount, commanderId);
}

function performBattle(sourceId, targetId, attackTroops, commanderId) {
    const source = gameState.territories[sourceId];
    const target = gameState.territories[targetId];
    const commander = OFFICERS[commanderId];
    const playerLord = gameState.lords[gameState.playerLordId];
    const enemyLord = gameState.lords[target.owner];
    
    // 戦闘力計算
    const attackPower = attackTroops * (1 + commander.war / 100);
    const defensePower = target.troops * (1 + 0.2); // 地形補正
    
    // 戦闘結果
    const victory = attackPower > defensePower;
    
    let resultHtml = `<h3>${source.name} → ${target.name}</h3>`;
    resultHtml += `<p>指揮官: ${commander.name}</p>`;
    resultHtml += `<p>攻撃軍: ${attackTroops}</p>`;
    resultHtml += `<p>防衛軍: ${target.troops}</p>`;
    resultHtml += `<hr>`;
    
    if (victory) {
        // 勝利
        const attackLosses = Math.floor(attackTroops * 0.3);
        const remainingTroops = attackTroops - attackLosses;
        
        source.troops -= attackTroops;
        target.troops = remainingTroops;
        target.owner = gameState.playerLordId;
        
        // 領地リストの更新
        enemyLord.territories = enemyLord.territories.filter(t => t !== targetId);
        playerLord.territories.push(targetId);
        
        resultHtml += `<p class="victory">勝利！</p>`;
        resultHtml += `<p>${target.name}を占領しました</p>`;
        resultHtml += `<p>損失: ${attackLosses}</p>`;
        
        addLog(`${target.name}を${enemyLord.name}から奪取！`, true);
        
        // 敗北判定
        if (enemyLord.territories.length === 0) {
            addLog(`${enemyLord.name}を滅ぼしました！`, true);
        }
        
        // 勝利判定
        if (checkVictory()) {
            resultHtml += `<p class="victory">天下統一達成！</p>`;
            addLog('天下統一を達成しました！', true);
        }
        
    } else {
        // 敗北
        const attackLosses = Math.floor(attackTroops * 0.6);
        const defenseLosses = Math.floor(target.troops * 0.3);
        
        source.troops -= attackLosses;
        target.troops -= defenseLosses;
        
        resultHtml += `<p class="defeat">敗北...</p>`;
        resultHtml += `<p>攻撃が失敗しました</p>`;
        resultHtml += `<p>損失: ${attackLosses}</p>`;
        
        addLog(`${target.name}への攻撃が失敗`, true);
    }
    
    document.getElementById('battle-result-content').innerHTML = resultHtml;
    closeModal();
    document.getElementById('battle-result-modal').classList.add('active');
    
    renderMap();
    updateUI();
}

function checkVictory() {
    const playerLord = gameState.lords[gameState.playerLordId];
    const totalTerritories = Object.keys(gameState.territories).length;
    return playerLord.territories.length === totalTerritories;
}

// ========================================
// 外交システム
// ========================================

function showDiplomacyModal() {
    document.getElementById('diplomacy-modal').classList.add('active');
    renderDiplomacyList();
}

function renderDiplomacyList() {
    const diplomacyList = document.getElementById('diplomacy-list');
    diplomacyList.innerHTML = '<p>外交システムは開発中です</p>';
}

// ========================================
// ターン進行
// ========================================

function nextTurn() {
    gameState.currentMonth++;
    if (gameState.currentMonth > 12) {
        gameState.currentMonth = 1;
        gameState.currentYear++;
    }
    
    // 収入処理
    processIncome();
    
    // AI行動
    processAITurns();
    
    // UI更新
    updateUI();
    addLog(`${gameState.currentYear}年${gameState.currentMonth}月`, true);
}

function processIncome() {
    const playerLord = gameState.lords[gameState.playerLordId];
    
    let totalRiceIncome = 0;
    let totalGoldIncome = 0;
    
    playerLord.territories.forEach(territoryId => {
        const territory = gameState.territories[territoryId];
        const riceIncome = Math.floor(territory.rice * 0.1);
        const goldIncome = Math.floor(territory.gold * 0.1);
        
        totalRiceIncome += riceIncome;
        totalGoldIncome += goldIncome;
    });
    
    playerLord.rice += totalRiceIncome;
    playerLord.gold += totalGoldIncome;
    
    addLog(`収入: 金+${totalGoldIncome}, 米+${totalRiceIncome}`);
}

function processAITurns() {
    Object.values(gameState.lords).forEach(lord => {
        if (lord.id === gameState.playerLordId) return;
        if (lord.territories.length === 0) return;
        
        // 簡易AI思考
        const action = Math.random();
        
        if (action < 0.3) {
            // 内政
            aiInternal(lord);
        } else if (action < 0.7 && lord.territories.length > 0) {
            // 軍事
            aiAttack(lord);
        }
    });
}

function aiInternal(lord) {
    if (lord.territories.length === 0) return;
    
    const territoryId = lord.territories[Math.floor(Math.random() * lord.territories.length)];
    const territory = gameState.territories[territoryId];
    
    const action = Math.random();
    if (action < 0.5 && lord.gold >= 500) {
        // 兵募集
        territory.troops += Math.floor(300 + Math.random() * 200);
        lord.gold -= 500;
    } else {
        // 農業開発
        territory.rice += Math.floor(300 + Math.random() * 300);
    }
}

function aiAttack(lord) {
    if (lord.territories.length === 0) return;
    
    // ランダムに領地を選択
    const territoryId = lord.territories[Math.floor(Math.random() * lord.territories.length)];
    const territory = gameState.territories[territoryId];
    
    if (!territory || territory.troops < 1000) return;
    
    // 隣接する敵国を探す
    const enemies = territory.neighbors.filter(neighborId => {
        const neighbor = gameState.territories[neighborId];
        return neighbor && neighbor.owner !== lord.id;
    });
    
    if (enemies.length === 0) return;
    
    const targetId = enemies[Math.floor(Math.random() * enemies.length)];
    const target = gameState.territories[targetId];
    
    // 簡易戦闘
    const attackTroops = Math.floor(territory.troops * 0.6);
    const attackPower = attackTroops;
    const defensePower = target.troops * 1.2;
    
    if (attackPower > defensePower) {
        // 勝利
        const losses = Math.floor(attackTroops * 0.3);
        territory.troops -= attackTroops;
        target.troops = attackTroops - losses;
        
        const enemyLord = gameState.lords[target.owner];
        enemyLord.territories = enemyLord.territories.filter(t => t !== targetId);
        
        target.owner = lord.id;
        lord.territories.push(targetId);
        
        addLog(`${lord.name}が${target.name}を占領`, true);
        
        renderMap();
    } else {
        // 敗北
        const losses = Math.floor(attackTroops * 0.5);
        territory.troops -= losses;
        target.troops -= Math.floor(target.troops * 0.2);
    }
}

// ========================================
// セーブ/ロード
// ========================================

function saveGame() {
    try {
        localStorage.setItem('sengoku_save', JSON.stringify(gameState));
        alert('ゲームをセーブしました');
        addLog('ゲームをセーブしました');
    } catch (e) {
        alert('セーブに失敗しました');
    }
}

function loadGame() {
    try {
        const saved = localStorage.getItem('sengoku_save');
        if (saved) {
            gameState = JSON.parse(saved);
            showGameScreen();
            addLog('ゲームをロードしました');
        } else {
            alert('セーブデータがありません');
        }
    } catch (e) {
        alert('ロードに失敗しました');
    }
}

// ========================================
// ユーティリティ
// ========================================

function addLog(message, important = false) {
    gameState.gameLog.push(message);
    
    const logDiv = document.getElementById('game-log');
    const p = document.createElement('p');
    p.textContent = message;
    if (important) p.classList.add('important');
    logDiv.appendChild(p);
    
    // 最新のログまでスクロール
    logDiv.scrollTop = logDiv.scrollHeight;
    
    // ログが多くなりすぎたら古いものを削除
    if (logDiv.children.length > 50) {
        logDiv.removeChild(logDiv.firstChild);
    }
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

function recruitTroops(territoryId) {
    const territory = gameState.territories[territoryId];
    const playerLord = gameState.lords[gameState.playerLordId];
    const cost = 500;
    
    if (playerLord.gold >= cost) {
        const increase = 500;
        territory.troops += increase;
        playerLord.gold -= cost;
        addLog(`${territory.name}で兵士を募集。兵+${increase}`);
        updateUI();
        updateTerritoryInfo();
    } else {
        alert('金が不足しています');
    }
}

// ========================================
// 起動
// ========================================

document.addEventListener('DOMContentLoaded', initGame);
