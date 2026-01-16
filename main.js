// ========================================
// ゲームデータ定義
// ========================================

// 国データ（拡張版 - 全40カ国以上）
const TERRITORIES = {
    // 東北
    mutsu: {
        id: 'mutsu',
        name: '陸奥',
        owner: 'date',
        rice: 5000,
        gold: 2500,
        troops: 2500,
        neighbors: ['dewa'],
        x: 620, y: 230
    },
    dewa: {
        id: 'dewa',
        name: '出羽',
        owner: 'mogami',
        rice: 4500,
        gold: 2200,
        troops: 2000,
        neighbors: ['mutsu', 'echigo'],
        x: 577, y: 245
    },
    
    // 関東
    musashi: {
        id: 'musashi',
        name: '武蔵',
        owner: 'hojo',
        rice: 6000,
        gold: 4000,
        troops: 3000,
        neighbors: ['sagami', 'kazusa', 'kozuke'],
        x: 597, y: 347
    },
    sagami: {
        id: 'sagami',
        name: '相模',
        owner: 'hojo',
        rice: 4000,
        gold: 3000,
        troops: 2200,
        neighbors: ['musashi', 'kai', 'suruga'],
        x: 615, y: 385
    },
    kazusa: {
        id: 'kazusa',
        name: '上総',
        owner: 'satomi',
        rice: 3500,
        gold: 2500,
        troops: 1800,
        neighbors: ['musashi'],
        x: 632, y: 355
    },
    kozuke: {
        id: 'kozuke',
        name: '上野',
        owner: 'hojo',
        rice: 3800,
        gold: 2000,
        troops: 1700,
        neighbors: ['musashi', 'shinano', 'echigo'],
        x: 575, y: 330
    },
    
    // 中部
    echigo: {
        id: 'echigo',
        name: '越後',
        owner: 'uesugi',
        rice: 5000,
        gold: 3000,
        troops: 3000,
        neighbors: ['dewa', 'kozuke', 'shinano', 'etchu'],
        x: 565, y: 325
    },
    etchu: {
        id: 'etchu',
        name: '越中',
        owner: 'jinbo',
        rice: 4000,
        gold: 2500,
        troops: 1800,
        neighbors: ['echigo', 'shinano', 'hida', 'kaga'],
        x: 540, y: 350
    },
    kaga: {
        id: 'kaga',
        name: '加賀',
        owner: 'ikko',
        rice: 4500,
        gold: 3000,
        troops: 2500,
        neighbors: ['etchu', 'echizen'],
        x: 520, y: 360
    },
    echizen: {
        id: 'echizen',
        name: '越前',
        owner: 'asakura',
        rice: 4200,
        gold: 2800,
        troops: 2200,
        neighbors: ['kaga', 'mino', 'omi'],
        x: 495, y: 385
    },
    shinano: {
        id: 'shinano',
        name: '信濃',
        owner: 'takeda',
        rice: 4000,
        gold: 2000,
        troops: 1800,
        neighbors: ['echigo', 'kozuke', 'musashi', 'kai', 'suruga', 'totomi', 'mikawa', 'hida', 'etchu'],
        x: 570, y: 397
    },
    kai: {
        id: 'kai',
        name: '甲斐',
        owner: 'takeda',
        rice: 3500,
        gold: 2500,
        troops: 2500,
        neighbors: ['shinano', 'musashi', 'sagami', 'suruga'],
        x: 595, y: 418
    },
    hida: {
        id: 'hida',
        name: '飛騨',
        owner: 'anegakoji',
        rice: 2500,
        gold: 1500,
        troops: 1000,
        neighbors: ['shinano', 'etchu', 'mino'],
        x: 535, y: 442
    },
    suruga: {
        id: 'suruga',
        name: '駿河',
        owner: 'imagawa',
        rice: 4500,
        gold: 3500,
        troops: 2500,
        neighbors: ['kai', 'sagami', 'totomi'],
        x: 600, y: 467
    },
    totomi: {
        id: 'totomi',
        name: '遠江',
        owner: 'imagawa',
        rice: 4000,
        gold: 2800,
        troops: 2000,
        neighbors: ['suruga', 'mikawa', 'shinano'],
        x: 580, y: 487
    },
    mikawa: {
        id: 'mikawa',
        name: '三河',
        owner: 'tokugawa',
        rice: 4000,
        gold: 2000,
        troops: 1500,
        neighbors: ['totomi', 'owari', 'shinano'],
        x: 560, y: 507
    },
    owari: {
        id: 'owari',
        name: '尾張',
        owner: 'oda',
        rice: 5000,
        gold: 3000,
        troops: 2000,
        neighbors: ['mino', 'mikawa', 'ise'],
        x: 532, y: 517
    },
    mino: {
        id: 'mino',
        name: '美濃',
        owner: 'saito',
        rice: 4500,
        gold: 2500,
        troops: 1800,
        neighbors: ['owari', 'omi', 'echizen', 'hida'],
        x: 517, y: 477
    },
    
    // 近畿
    ise: {
        id: 'ise',
        name: '伊勢',
        owner: 'kitabatake',
        rice: 3500,
        gold: 2500,
        troops: 1200,
        neighbors: ['owari', 'omi', 'yamato', 'kii'],
        x: 527, y: 542
    },
    omi: {
        id: 'omi',
        name: '近江',
        owner: 'asai',
        rice: 4000,
        gold: 2500,
        troops: 1500,
        neighbors: ['mino', 'echizen', 'yamashiro', 'ise'],
        x: 492, y: 507
    },
    yamashiro: {
        id: 'yamashiro',
        name: '山城',
        owner: 'ashikaga',
        rice: 3000,
        gold: 5000,
        troops: 1000,
        neighbors: ['omi', 'yamato', 'settsu'],
        x: 467, y: 522
    },
    yamato: {
        id: 'yamato',
        name: '大和',
        owner: 'tsutsui',
        rice: 3200,
        gold: 2200,
        troops: 1300,
        neighbors: ['yamashiro', 'ise', 'kii', 'kawachi'],
        x: 482, y: 562
    },
    settsu: {
        id: 'settsu',
        name: '摂津',
        owner: 'miyoshi',
        rice: 3500,
        gold: 4000,
        troops: 1800,
        neighbors: ['yamashiro', 'kawachi', 'harima'],
        x: 447, y: 542
    },
    kawachi: {
        id: 'kawachi',
        name: '河内',
        owner: 'hatakeyama',
        rice: 3000,
        gold: 2500,
        troops: 1400,
        neighbors: ['settsu', 'yamato', 'izumi'],
        x: 460, y: 567
    },
    izumi: {
        id: 'izumi',
        name: '和泉',
        owner: 'miyoshi',
        rice: 2800,
        gold: 2300,
        troops: 1200,
        neighbors: ['kawachi', 'kii'],
        x: 440, y: 587
    },
    kii: {
        id: 'kii',
        name: '紀伊',
        owner: 'saiga',
        rice: 3000,
        gold: 2000,
        troops: 1500,
        neighbors: ['yamato', 'ise', 'izumi'],
        x: 477, y: 602
    },
    
    // 中国
    harima: {
        id: 'harima',
        name: '播磨',
        owner: 'akamatsu',
        rice: 4000,
        gold: 2800,
        troops: 1800,
        neighbors: ['settsu', 'bizen', 'mimasaka'],
        x: 417, y: 567
    },
    bizen: {
        id: 'bizen',
        name: '備前',
        owner: 'ukita',
        rice: 3000,
        gold: 2000,
        troops: 1200,
        neighbors: ['harima', 'bitchu', 'mimasaka'],
        x: 392, y: 582
    },
    mimasaka: {
        id: 'mimasaka',
        name: '美作',
        owner: 'ukita',
        rice: 2500,
        gold: 1500,
        troops: 1000,
        neighbors: ['harima', 'bizen', 'bitchu'],
        x: 405, y: 595
    },
    bitchu: {
        id: 'bitchu',
        name: '備中',
        owner: 'mori',
        rice: 3200,
        gold: 2200,
        troops: 1500,
        neighbors: ['bizen', 'mimasaka', 'bingo'],
        x: 367, y: 592
    },
    bingo: {
        id: 'bingo',
        name: '備後',
        owner: 'mori',
        rice: 3000,
        gold: 2000,
        troops: 1400,
        neighbors: ['bitchu', 'aki'],
        x: 342, y: 602
    },
    aki: {
        id: 'aki',
        name: '安芸',
        owner: 'mori',
        rice: 3800,
        gold: 2500,
        troops: 2000,
        neighbors: ['bingo', 'suo'],
        x: 317, y: 617
    },
    suo: {
        id: 'suo',
        name: '周防',
        owner: 'mori',
        rice: 4000,
        gold: 3000,
        troops: 2000,
        neighbors: ['aki', 'nagato'],
        x: 292, y: 627
    },
    nagato: {
        id: 'nagato',
        name: '長門',
        owner: 'mori',
        rice: 3500,
        gold: 2500,
        troops: 1700,
        neighbors: ['suo', 'buzen'],
        x: 267, y: 637
    },
    
    // 四国
    awa: {
        id: 'awa',
        name: '阿波',
        owner: 'chosokabe',
        rice: 3200,
        gold: 2200,
        troops: 1500,
        neighbors: ['sanuki', 'tosa'],
        x: 452, y: 637
    },
    sanuki: {
        id: 'sanuki',
        name: '讃岐',
        owner: 'chosokabe',
        rice: 3000,
        gold: 2000,
        troops: 1300,
        neighbors: ['awa', 'iyo'],
        x: 422, y: 647
    },
    iyo: {
        id: 'iyo',
        name: '伊予',
        owner: 'kono',
        rice: 3500,
        gold: 2300,
        troops: 1600,
        neighbors: ['sanuki', 'tosa'],
        x: 387, y: 662
    },
    tosa: {
        id: 'tosa',
        name: '土佐',
        owner: 'chosokabe',
        rice: 3800,
        gold: 2500,
        troops: 1800,
        neighbors: ['awa', 'iyo'],
        x: 417, y: 692
    },
    
    // 九州
    buzen: {
        id: 'buzen',
        name: '豊前',
        owner: 'otomo',
        rice: 3000,
        gold: 2000,
        troops: 1400,
        neighbors: ['nagato', 'bungo', 'chikuzen'],
        x: 267, y: 677
    },
    bungo: {
        id: 'bungo',
        name: '豊後',
        owner: 'otomo',
        rice: 4500,
        gold: 3000,
        troops: 2000,
        neighbors: ['buzen', 'hyuga', 'higo'],
        x: 282, y: 717
    },
    chikuzen: {
        id: 'chikuzen',
        name: '筑前',
        owner: 'otomo',
        rice: 3500,
        gold: 2500,
        troops: 1600,
        neighbors: ['buzen', 'hizen', 'higo'],
        x: 237, y: 687
    },
    hizen: {
        id: 'hizen',
        name: '肥前',
        owner: 'ryuzoji',
        rice: 3500,
        gold: 2500,
        troops: 1500,
        neighbors: ['chikuzen', 'higo'],
        x: 207, y: 702
    },
    higo: {
        id: 'higo',
        name: '肥後',
        owner: 'sagara',
        rice: 4000,
        gold: 2300,
        troops: 1700,
        neighbors: ['chikuzen', 'hizen', 'bungo', 'hyuga'],
        x: 232, y: 737
    },
    hyuga: {
        id: 'hyuga',
        name: '日向',
        owner: 'ito',
        rice: 3500,
        gold: 2000,
        troops: 1500,
        neighbors: ['bungo', 'higo', 'osumi'],
        x: 257, y: 777
    },
    osumi: {
        id: 'osumi',
        name: '大隅',
        owner: 'shimazu',
        rice: 3200,
        gold: 1800,
        troops: 1600,
        neighbors: ['hyuga', 'satsuma'],
        x: 237, y: 817
    },
    satsuma: {
        id: 'satsuma',
        name: '薩摩',
        owner: 'shimazu',
        rice: 4000,
        gold: 2000,
        troops: 2500,
        neighbors: ['osumi'],
        x: 207, y: 832
    }
};

// 大名データ（拡張版）
const LORDS = {
    oda: {
        id: 'oda',
        name: '織田信長',
        portrait: 'assets/portraits/oda.svg',
        territories: ['owari'],
        gold: 3000,
        rice: 5000,
        officers: ['oda_nobunaga', 'shibata_katsuie', 'hashiba_hideyoshi']
    },
    takeda: {
        id: 'takeda',
        name: '武田信玄',
        portrait: 'assets/portraits/takeda.svg',
        territories: ['kai', 'shinano'],
        gold: 4500,
        rice: 7500,
        officers: ['takeda_shingen', 'sanada_yukitaka', 'baba_nobuharu']
    },
    uesugi: {
        id: 'uesugi',
        name: '上杉謙信',
        portrait: 'assets/portraits/uesugi.svg',
        territories: ['echigo'],
        gold: 3000,
        rice: 5000,
        officers: ['uesugi_kenshin', 'kakizaki_kageie', 'naoe_kanetsugu']
    },
    tokugawa: {
        id: 'tokugawa',
        name: '徳川家康',
        portrait: 'assets/portraits/tokugawa.svg',
        territories: ['mikawa'],
        gold: 2000,
        rice: 4000,
        officers: ['tokugawa_ieyasu', 'honda_tadakatsu', 'sakai_tadatsugu']
    },
    date: {
        id: 'date',
        name: '伊達政宗',
        portrait: 'assets/portraits/date.svg',
        territories: ['mutsu'],
        gold: 2500,
        rice: 5000,
        officers: ['date_masamune', 'katakura_kojuro']
    },
    hojo: {
        id: 'hojo',
        name: '北条氏康',
        portrait: 'assets/portraits/oda.svg', // 仮
        territories: ['musashi', 'sagami', 'kozuke'],
        gold: 7000,
        rice: 13800,
        officers: ['hojo_ujiyasu', 'hojo_ujimasa']
    },
    imagawa: {
        id: 'imagawa',
        name: '今川義元',
        portrait: 'assets/portraits/oda.svg', // 仮
        territories: ['suruga', 'totomi'],
        gold: 6300,
        rice: 8500,
        officers: ['imagawa_yoshimoto']
    },
    mori: {
        id: 'mori',
        name: '毛利元就',
        portrait: 'assets/portraits/mori.svg',
        territories: ['suo', 'aki', 'bingo', 'bitchu', 'nagato'],
        gold: 12500,
        rice: 17500,
        officers: ['mori_motonari', 'kobayakawa_takakage', 'kikkawa_motoharu']
    },
    shimazu: {
        id: 'shimazu',
        name: '島津義久',
        portrait: 'assets/portraits/shimazu.svg',
        territories: ['satsuma', 'osumi'],
        gold: 3800,
        rice: 7200,
        officers: ['shimazu_yoshihisa', 'shimazu_yoshihiro']
    },
    saito: {
        id: 'saito',
        name: '斎藤道三',
        portrait: 'assets/portraits/saito.svg',
        territories: ['mino'],
        gold: 2500,
        rice: 4500,
        officers: ['saito_dosan']
    },
    asai: {
        id: 'asai',
        name: '浅井長政',
        portrait: 'assets/portraits/asai.svg',
        territories: ['omi'],
        gold: 2500,
        rice: 4000,
        officers: ['asai_nagamasa']
    },
    ashikaga: {
        id: 'ashikaga',
        name: '足利義昭',
        portrait: 'assets/portraits/ashikaga.svg',
        territories: ['yamashiro'],
        gold: 5000,
        rice: 3000,
        officers: ['ashikaga_yoshiaki']
    },
    miyoshi: {
        id: 'miyoshi',
        name: '三好長慶',
        portrait: 'assets/portraits/miyoshi.svg',
        territories: ['settsu', 'izumi'],
        gold: 6300,
        rice: 6300,
        officers: ['miyoshi_nagayoshi']
    },
    ukita: {
        id: 'ukita',
        name: '宇喜多直家',
        portrait: 'assets/portraits/ukita.svg',
        territories: ['bizen', 'mimasaka'],
        gold: 3500,
        rice: 5500,
        officers: ['ukita_naoie']
    },
    otomo: {
        id: 'otomo',
        name: '大友宗麟',
        portrait: 'assets/portraits/otomo.svg',
        territories: ['bungo', 'buzen', 'chikuzen'],
        gold: 7500,
        rice: 11000,
        officers: ['otomo_sorin']
    },
    ryuzoji: {
        id: 'ryuzoji',
        name: '龍造寺隆信',
        portrait: 'assets/portraits/ryuzoji.svg',
        territories: ['hizen'],
        gold: 2500,
        rice: 3500,
        officers: ['ryuzoji_takanobu']
    },
    kitabatake: {
        id: 'kitabatake',
        name: '北畠具教',
        portrait: 'assets/portraits/kitabatake.svg',
        territories: ['ise'],
        gold: 2500,
        rice: 3500,
        officers: ['kitabatake_tomonori']
    },
    // 新規追加大名
    asakura: {
        id: 'asakura',
        name: '朝倉義景',
        portrait: 'assets/portraits/oda.svg', // 仮
        territories: ['echizen'],
        gold: 2800,
        rice: 4200,
        officers: ['asakura_yoshikage']
    },
    chosokabe: {
        id: 'chosokabe',
        name: '長宗我部元親',
        portrait: 'assets/portraits/oda.svg', // 仮
        territories: ['tosa', 'awa', 'sanuki'],
        gold: 6700,
        rice: 10000,
        officers: ['chosokabe_motochika']
    },
    mogami: {
        id: 'mogami',
        name: '最上義光',
        portrait: 'assets/portraits/oda.svg', // 仮
        territories: ['dewa'],
        gold: 2200,
        rice: 4500,
        officers: ['mogami_yoshiaki']
    },
    satomi: {
        id: 'satomi',
        name: '里見義堯',
        portrait: 'assets/portraits/oda.svg', // 仮
        territories: ['kazusa'],
        gold: 2500,
        rice: 3500,
        officers: ['satomi_yoshitaka']
    },
    tsutsui: {
        id: 'tsutsui',
        name: '筒井順慶',
        portrait: 'assets/portraits/oda.svg', // 仮
        territories: ['yamato'],
        gold: 2200,
        rice: 3200,
        officers: ['tsutsui_junkei']
    },
    hatakeyama: {
        id: 'hatakeyama',
        name: '畠山高政',
        portrait: 'assets/portraits/oda.svg', // 仮
        territories: ['kawachi'],
        gold: 2500,
        rice: 3000,
        officers: ['hatakeyama_takamasa']
    },
    akamatsu: {
        id: 'akamatsu',
        name: '赤松晴政',
        portrait: 'assets/portraits/oda.svg', // 仮
        territories: ['harima'],
        gold: 2800,
        rice: 4000,
        officers: ['akamatsu_harumasa']
    },
    kono: {
        id: 'kono',
        name: '河野通宣',
        portrait: 'assets/portraits/oda.svg', // 仮
        territories: ['iyo'],
        gold: 2300,
        rice: 3500,
        officers: ['kono_michinobu']
    },
    sagara: {
        id: 'sagara',
        name: '相良義陽',
        portrait: 'assets/portraits/oda.svg', // 仮
        territories: ['higo'],
        gold: 2300,
        rice: 4000,
        officers: ['sagara_yoshihi']
    },
    ito: {
        id: 'ito',
        name: '伊東義祐',
        portrait: 'assets/portraits/oda.svg', // 仮
        territories: ['hyuga'],
        gold: 2000,
        rice: 3500,
        officers: ['ito_yoshisuke']
    },
    ikko: {
        id: 'ikko',
        name: '一向一揆',
        portrait: 'assets/portraits/oda.svg', // 仮
        territories: ['kaga'],
        gold: 3000,
        rice: 4500,
        officers: ['honganji_kennyo']
    },
    jinbo: {
        id: 'jinbo',
        name: '神保長職',
        portrait: 'assets/portraits/oda.svg', // 仮
        territories: ['etchu'],
        gold: 2500,
        rice: 4000,
        officers: ['jinbo_nagamoto']
    },
    anegakoji: {
        id: 'anegakoji',
        name: '姉小路頼綱',
        portrait: 'assets/portraits/oda.svg', // 仮
        territories: ['hida'],
        gold: 1500,
        rice: 2500,
        officers: ['anegakoji_yoritsuna']
    },
    saiga: {
        id: 'saiga',
        name: '雑賀孫市',
        portrait: 'assets/portraits/oda.svg', // 仮
        territories: ['kii'],
        gold: 2000,
        rice: 3000,
        officers: ['saiga_magoichi']
    }
};

// 武将データ（拡張版）
const OFFICERS = {
    // 織田家
    oda_nobunaga: { id: 'oda_nobunaga', name: '織田信長', war: 95, int: 90, pol: 85, loyalty: 100 },
    shibata_katsuie: { id: 'shibata_katsuie', name: '柴田勝家', war: 88, int: 70, pol: 65, loyalty: 95 },
    hashiba_hideyoshi: { id: 'hashiba_hideyoshi', name: '羽柴秀吉', war: 85, int: 95, pol: 90, loyalty: 90 },
    
    // 武田家
    takeda_shingen: { id: 'takeda_shingen', name: '武田信玄', war: 98, int: 92, pol: 88, loyalty: 100 },
    sanada_yukitaka: { id: 'sanada_yukitaka', name: '真田幸隆', war: 82, int: 88, pol: 75, loyalty: 95 },
    baba_nobuharu: { id: 'baba_nobuharu', name: '馬場信春', war: 86, int: 75, pol: 70, loyalty: 98 },
    
    // 上杉家
    uesugi_kenshin: { id: 'uesugi_kenshin', name: '上杉謙信', war: 99, int: 88, pol: 82, loyalty: 100 },
    kakizaki_kageie: { id: 'kakizaki_kageie', name: '柿崎景家', war: 84, int: 72, pol: 68, loyalty: 92 },
    naoe_kanetsugu: { id: 'naoe_kanetsugu', name: '直江兼続', war: 80, int: 90, pol: 88, loyalty: 95 },
    
    // 徳川家
    tokugawa_ieyasu: { id: 'tokugawa_ieyasu', name: '徳川家康', war: 88, int: 95, pol: 92, loyalty: 100 },
    honda_tadakatsu: { id: 'honda_tadakatsu', name: '本多忠勝', war: 95, int: 70, pol: 65, loyalty: 98 },
    sakai_tadatsugu: { id: 'sakai_tadatsugu', name: '酒井忠次', war: 85, int: 80, pol: 78, loyalty: 96 },
    
    // 伊達家
    date_masamune: { id: 'date_masamune', name: '伊達政宗', war: 93, int: 90, pol: 87, loyalty: 100 },
    katakura_kojuro: { id: 'katakura_kojuro', name: '片倉小十郎', war: 86, int: 88, pol: 82, loyalty: 98 },
    
    // 北条家
    hojo_ujiyasu: { id: 'hojo_ujiyasu', name: '北条氏康', war: 90, int: 93, pol: 88, loyalty: 100 },
    hojo_ujimasa: { id: 'hojo_ujimasa', name: '北条氏政', war: 75, int: 72, pol: 70, loyalty: 95 },
    
    // 今川家
    imagawa_yoshimoto: { id: 'imagawa_yoshimoto', name: '今川義元', war: 76, int: 82, pol: 85, loyalty: 100 },
    
    // 毛利家
    mori_motonari: { id: 'mori_motonari', name: '毛利元就', war: 90, int: 96, pol: 88, loyalty: 100 },
    kobayakawa_takakage: { id: 'kobayakawa_takakage', name: '小早川隆景', war: 85, int: 92, pol: 86, loyalty: 95 },
    kikkawa_motoharu: { id: 'kikkawa_motoharu', name: '吉川元春', war: 91, int: 78, pol: 72, loyalty: 97 },
    
    // 島津家
    shimazu_yoshihisa: { id: 'shimazu_yoshihisa', name: '島津義久', war: 87, int: 85, pol: 83, loyalty: 100 },
    shimazu_yoshihiro: { id: 'shimazu_yoshihiro', name: '島津義弘', war: 94, int: 78, pol: 72, loyalty: 98 },
    
    // その他既存大名
    saito_dosan: { id: 'saito_dosan', name: '斎藤道三', war: 85, int: 88, pol: 82, loyalty: 100 },
    asai_nagamasa: { id: 'asai_nagamasa', name: '浅井長政', war: 82, int: 78, pol: 80, loyalty: 100 },
    ashikaga_yoshiaki: { id: 'ashikaga_yoshiaki', name: '足利義昭', war: 40, int: 65, pol: 70, loyalty: 100 },
    miyoshi_nagayoshi: { id: 'miyoshi_nagayoshi', name: '三好長慶', war: 83, int: 85, pol: 82, loyalty: 100 },
    ukita_naoie: { id: 'ukita_naoie', name: '宇喜多直家', war: 80, int: 86, pol: 78, loyalty: 100 },
    otomo_sorin: { id: 'otomo_sorin', name: '大友宗麟', war: 75, int: 80, pol: 85, loyalty: 100 },
    ryuzoji_takanobu: { id: 'ryuzoji_takanobu', name: '龍造寺隆信', war: 82, int: 75, pol: 73, loyalty: 100 },
    kitabatake_tomonori: { id: 'kitabatake_tomonori', name: '北畠具教', war: 78, int: 82, pol: 80, loyalty: 100 },
    
    // 新規追加大名の武将
    asakura_yoshikage: { id: 'asakura_yoshikage', name: '朝倉義景', war: 65, int: 70, pol: 68, loyalty: 100 },
    chosokabe_motochika: { id: 'chosokabe_motochika', name: '長宗我部元親', war: 89, int: 87, pol: 84, loyalty: 100 },
    mogami_yoshiaki: { id: 'mogami_yoshiaki', name: '最上義光', war: 84, int: 82, pol: 79, loyalty: 100 },
    satomi_yoshitaka: { id: 'satomi_yoshitaka', name: '里見義堯', war: 77, int: 74, pol: 72, loyalty: 100 },
    tsutsui_junkei: { id: 'tsutsui_junkei', name: '筒井順慶', war: 76, int: 79, pol: 77, loyalty: 100 },
    hatakeyama_takamasa: { id: 'hatakeyama_takamasa', name: '畠山高政', war: 68, int: 65, pol: 70, loyalty: 100 },
    akamatsu_harumasa: { id: 'akamatsu_harumasa', name: '赤松晴政', war: 72, int: 70, pol: 74, loyalty: 100 },
    kono_michinobu: { id: 'kono_michinobu', name: '河野通宣', war: 70, int: 68, pol: 69, loyalty: 100 },
    sagara_yoshihi: { id: 'sagara_yoshihi', name: '相良義陽', war: 73, int: 71, pol: 70, loyalty: 100 },
    ito_yoshisuke: { id: 'ito_yoshisuke', name: '伊東義祐', war: 74, int: 70, pol: 72, loyalty: 100 },
    honganji_kennyo: { id: 'honganji_kennyo', name: '本願寺顕如', war: 55, int: 85, pol: 88, loyalty: 100 },
    jinbo_nagamoto: { id: 'jinbo_nagamoto', name: '神保長職', war: 70, int: 68, pol: 66, loyalty: 100 },
    anegakoji_yoritsuna: { id: 'anegakoji_yoritsuna', name: '姉小路頼綱', war: 62, int: 60, pol: 58, loyalty: 100 },
    saiga_magoichi: { id: 'saiga_magoichi', name: '雑賀孫市', war: 88, int: 75, pol: 60, loyalty: 100 }
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
    gameLog: [],
    officerActions: {} // 武将の行動状態を管理 {officerId: {month: X, year: Y}}
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
    document.getElementById('mute-btn').addEventListener('click', toggleMute);
    document.getElementById('next-turn-btn').addEventListener('click', nextTurn);
    
    // BGMの開始
    audioManager.playBGM('main');
    
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
        
        // portraitプロパティの画像パスを使用
        const portraitUrl = lord.portrait;
        
        card.innerHTML = `
            <img src="${portraitUrl}" alt="${lord.name}">
            <h3>${lord.name}</h3>
            <p>領地: ${lord.territories.length}国</p>
        `;
        
        card.addEventListener('click', () => selectLord(lord.id));
        lordList.appendChild(card);
    });
}

function selectLord(lordId) {
    audioManager.playSE('select');
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
    
    // トランスフォーム用のグループを作成
    const transformGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    transformGroup.setAttribute('id', 'map-transform-group');
    svg.appendChild(transformGroup);
    
    // 背景の海（装飾）
    const bgRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    bgRect.setAttribute('x', '0');
    bgRect.setAttribute('y', '0');
    bgRect.setAttribute('width', '800');
    bgRect.setAttribute('height', '900');
    bgRect.setAttribute('fill', '#87CEEB');
    bgRect.setAttribute('opacity', '0.2');
    transformGroup.appendChild(bgRect);
    
    // 実際の形状を使用して日本地図を描画
    Object.values(gameState.territories).forEach(territory => {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.classList.add('territory-group');
        g.dataset.territoryId = territory.id;
        
        const shape = TERRITORY_SHAPES[territory.id];
        if (shape) {
            // 地域の形状を描画
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', shape.path);
            path.classList.add('territory-shape');
            
            // 支配者の色
            const color = getLordColor(territory.owner);
            path.setAttribute('fill', color);
            path.setAttribute('stroke', '#654321');
            path.setAttribute('stroke-width', '2.5');
            
            // クリックイベント
            path.addEventListener('click', () => selectTerritory(territory.id));
            
            g.appendChild(path);
            
            // ラベル
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', shape.labelX);
            text.setAttribute('y', shape.labelY);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('dominant-baseline', 'middle');
            text.classList.add('territory-label');
            text.textContent = territory.name;
            
            g.appendChild(text);
            transformGroup.appendChild(g);
        } else {
            // フォールバック: 円で表示
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', territory.x);
            circle.setAttribute('cy', territory.y);
            circle.setAttribute('r', 35);
            circle.classList.add('territory-shape');
            
            const color = getLordColor(territory.owner);
            circle.setAttribute('fill', color);
            
            circle.addEventListener('click', () => selectTerritory(territory.id));
            
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', territory.x);
            text.setAttribute('y', territory.y + 5);
            text.setAttribute('text-anchor', 'middle');
            text.classList.add('territory-label');
            text.textContent = territory.name;
            
            g.appendChild(circle);
            g.appendChild(text);
            transformGroup.appendChild(g);
        }
    });
    
    // ズーム機能を初期化
    initMapZoom();
    
    // ズームボタンのイベント設定
    document.getElementById('zoom-in-btn').onclick = () => {
        if (mapZoomControl) mapZoomControl.zoomIn();
    };
    document.getElementById('zoom-out-btn').onclick = () => {
        if (mapZoomControl) mapZoomControl.zoomOut();
    };
    document.getElementById('zoom-reset-btn').onclick = () => {
        if (mapZoomControl) mapZoomControl.reset();
    };
}

function getLordColor(lordId) {
    const colors = {
        oda: '#e74c3c',
        takeda: '#c0392b',
        uesugi: '#3498db',
        tokugawa: '#f39c12',
        date: '#9b59b6',
        hojo: '#2ecc71',
        imagawa: '#e67e22',
        mori: '#16a085',
        shimazu: '#e67e22',
        saito: '#95a5a6',
        asai: '#34495e',
        ashikaga: '#d4af37',
        miyoshi: '#27ae60',
        ukita: '#8e44ad',
        otomo: '#2980b9',
        ryuzoji: '#c0392b',
        kitabatake: '#7f8c8d',
        asakura: '#9b59b6',
        chosokabe: '#1abc9c',
        mogami: '#3498db',
        satomi: '#e74c3c',
        tsutsui: '#f39c12',
        hatakeyama: '#95a5a6',
        akamatsu: '#c0392b',
        kono: '#16a085',
        sagara: '#e67e22',
        ito: '#9b59b6',
        ikko: '#f39c12',
        jinbo: '#34495e',
        anegakoji: '#7f8c8d',
        saiga: '#e74c3c'
    };
    return colors[lordId] || '#95a5a6';
}

// ========================================
// 国選択
// ========================================

function selectTerritory(territoryId) {
    audioManager.playSE('click');
    gameState.selectedTerritory = territoryId;
    
    // 視覚的な選択表示
    document.querySelectorAll('.territory-shape').forEach(t => {
        t.classList.remove('selected');
    });
    
    const selectedElement = document.querySelector(`[data-territory-id="${territoryId}"] .territory-shape`);
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
    
    // 資源表示
    document.getElementById('player-gold').textContent = playerLord.gold;
    document.getElementById('player-rice').textContent = playerLord.rice;
}

// ========================================
// 武将の行動管理
// ========================================

function hasOfficerActedThisMonth(officerId) {
    const action = gameState.officerActions[officerId];
    if (!action) return false;
    return action.year === gameState.currentYear && action.month === gameState.currentMonth;
}

function recordOfficerAction(officerId) {
    gameState.officerActions[officerId] = {
        year: gameState.currentYear,
        month: gameState.currentMonth
    };
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
        
        // 今月既に行動したかチェック
        const hasActed = hasOfficerActedThisMonth(officerId);
        if (hasActed) {
            div.classList.add('acted');
        }
        
        const portraitUrl = portraitGenerator.generatePortrait(officerId);
        
        div.innerHTML = `
            <img src="${portraitUrl}" class="officer-portrait" alt="${officer.name}">
            <div class="officer-info">
                <p class="officer-name">${officer.name}${hasActed ? ' (行動済)' : ''}</p>
                <p>戦: ${officer.war} 知: ${officer.int} 政: ${officer.pol}</p>
            </div>
        `;
        
        div.addEventListener('click', () => {
            if (hasActed) {
                audioManager.playSE('click');
                alert('この武将は今月既に行動しました');
                return;
            }
            audioManager.playSE('select');
            document.querySelectorAll('.officer-item').forEach(item => {
                item.classList.remove('selected');
            });
            div.classList.add('selected');
            
            // 効果プレビューを更新
            updateInternalCommandPreviews(officer);
        });
        
        officerList.appendChild(div);
    });
    
    // 内政コマンドにイベント設定
    document.querySelectorAll('.internal-cmd').forEach(btn => {
        btn.onclick = () => executeInternal(btn.dataset.action);
    });
}

// 内政コマンドの効果プレビューを更新
function updateInternalCommandPreviews(officer) {
    const territory = gameState.territories[gameState.selectedTerritory];
    
    // 農業開発の効果予測
    const agricultureBtn = document.querySelector('[data-action="agriculture"]');
    if (agricultureBtn) {
        const riceIncrease = Math.floor(officer.pol * 10);
        agricultureBtn.innerHTML = `
            農業開発
            <span class="preview-effect">+${riceIncrease}石</span>
        `;
    }
    
    // 商業発展の効果予測
    const commerceBtn = document.querySelector('[data-action="commerce"]');
    if (commerceBtn) {
        const goldIncrease = Math.floor(officer.int * 8);
        commerceBtn.innerHTML = `
            商業発展
            <span class="preview-effect">+${goldIncrease}金</span>
        `;
    }
    
    // 治安維持の効果予測
    const securityBtn = document.querySelector('[data-action="security"]');
    if (securityBtn) {
        const loyaltyIncrease = Math.floor(officer.pol / 10);
        securityBtn.innerHTML = `
            治安維持
            <span class="preview-effect">民忠+${loyaltyIncrease}</span>
        `;
    }
    
    // 兵士募集の効果予測
    const recruitBtn = document.querySelector('[data-action="recruit"]');
    if (recruitBtn) {
        const troopIncrease = Math.floor(officer.war * 5);
        const cost = Math.floor(troopIncrease * 0.5);
        recruitBtn.innerHTML = `
            兵士募集
            <span class="preview-effect">+${troopIncrease}兵 (-${cost}金)</span>
        `;
    }
}

function executeInternal(action) {
    const selectedOfficer = document.querySelector('.officer-item.selected');
    if (!selectedOfficer) {
        audioManager.playSE('click');
        alert('武将を選択してください');
        return;
    }
    
    const officerId = selectedOfficer.dataset.officerId;
    
    // 武将が今月既に行動しているかチェック
    if (hasOfficerActedThisMonth(officerId)) {
        audioManager.playSE('click');
        alert('この武将は今月既に行動しました');
        return;
    }
    
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
                audioManager.playSE('coin');
                addLog(`${territory.name}で${officer.name}が農業開発を実施。石高+${riceIncrease}`);
                break;
            case 'commerce':
                const goldIncrease = Math.floor(300 + officer.pol * 5);
                territory.gold += goldIncrease;
                playerLord.gold += goldIncrease;
                audioManager.playSE('coin');
                addLog(`${territory.name}で${officer.name}が商業発展を実施。金+${goldIncrease}`);
                break;
            case 'security':
                audioManager.playSE('coin');
                addLog(`${territory.name}で${officer.name}が治安維持を実施。民忠上昇`);
                break;
            case 'recruit':
                const cost = 500;
                if (playerLord.gold >= cost) {
                    const troopIncrease = Math.floor(300 + officer.pol * 3);
                    territory.troops += troopIncrease;
                    playerLord.gold -= cost;
                    audioManager.playSE('coin');
                    addLog(`${territory.name}で${officer.name}が兵士募集を実施。兵+${troopIncrease}`);
                } else {
                    audioManager.playSE('click');
                    addLog(`金が不足しています`, true);
                    return; // 失敗時は行動を記録しない
                }
                break;
        }
        
        // 武将の行動を記録
        recordOfficerAction(officerId);
    } else {
        audioManager.playSE('click');
        addLog(`${territory.name}での${officer.name}の内政が失敗しました`);
        // 失敗しても行動を消費する
        recordOfficerAction(officerId);
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
    
    // 兵糧コスト表示を初期化
    updateRiceCostDisplay();
    
    // 兵数変更時に兵糧コストを更新
    troopInput.addEventListener('input', updateRiceCostDisplay);
}

function updateRiceCostDisplay() {
    const troopCount = parseInt(document.getElementById('troop-count').value) || 0;
    const requiredRice = Math.floor(troopCount * 0.5);
    const playerLord = gameState.lords[gameState.playerLordId];
    const riceCostDisplay = document.getElementById('rice-cost-display');
    
    if (playerLord.rice >= requiredRice) {
        riceCostDisplay.innerHTML = `必要兵糧: ${requiredRice} (現在: ${playerLord.rice})`;
        riceCostDisplay.style.color = '#90ee90';
    } else {
        riceCostDisplay.innerHTML = `必要兵糧: ${requiredRice} (現在: ${playerLord.rice}) <span style="color: #ff6b6b;">不足!</span>`;
        riceCostDisplay.style.color = '#ff6b6b';
    }
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
        
        // 今月既に行動したかチェック
        const hasActed = hasOfficerActedThisMonth(officerId);
        if (hasActed) {
            div.classList.add('acted');
        }
        
        const portraitUrl = portraitGenerator.generatePortrait(officerId);
        
        div.innerHTML = `
            <img src="${portraitUrl}" class="officer-portrait-small" alt="${officer.name}">
            <div>
                <p class="officer-name">${officer.name}${hasActed ? ' (行動済)' : ''}</p>
                <p>戦: ${officer.war}</p>
            </div>
        `;
        
        div.addEventListener('click', () => {
            if (hasActed) {
                audioManager.playSE('click');
                alert('この武将は今月既に行動しました');
                return;
            }
            audioManager.playSE('select');
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
        audioManager.playSE('click');
        alert('攻撃対象を選択してください');
        return;
    }
    
    if (!selectedCommander) {
        audioManager.playSE('click');
        alert('指揮官を選択してください');
        return;
    }
    
    const commanderId = selectedCommander.dataset.officerId;
    
    // 武将が今月既に行動しているかチェック
    if (hasOfficerActedThisMonth(commanderId)) {
        audioManager.playSE('click');
        alert('この武将は今月既に行動しました');
        return;
    }
    
    const troopCount = parseInt(document.getElementById('troop-count').value);
    if (troopCount <= 0) {
        audioManager.playSE('click');
        alert('出兵数を入力してください');
        return;
    }
    
    const sourceTerritory = gameState.territories[gameState.selectedTerritory];
    if (troopCount > sourceTerritory.troops) {
        audioManager.playSE('click');
        alert('兵数が不足しています');
        return;
    }
    
    // 兵糧（石高）チェック
    const playerLord = gameState.lords[gameState.playerLordId];
    const requiredRice = Math.floor(troopCount * 0.5); // 兵数の0.5倍の石高が必要
    
    if (playerLord.rice < requiredRice) {
        audioManager.playSE('click');
        alert(`兵糧が不足しています。必要石高: ${requiredRice}、現在: ${playerLord.rice}`);
        return;
    }
    
    // 兵糧消費
    playerLord.rice -= requiredRice;
    
    const targetId = selectedTarget.dataset.targetId;
    
    audioManager.playSE('battle');
    performBattle(sourceTerritory.id, targetId, troopCount, commanderId);
    
    // 武将の行動を記録
    recordOfficerAction(commanderId);
}

function performBattle(sourceId, targetId, attackTroops, commanderId) {
    const source = gameState.territories[sourceId];
    const target = gameState.territories[targetId];
    const commander = OFFICERS[commanderId];
    const playerLord = gameState.lords[gameState.playerLordId];
    const enemyLord = gameState.lords[target.owner];
    const enemyLordId = target.owner;
    
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
        
        audioManager.playSE('victory');
        resultHtml += `<p class="victory">勝利！</p>`;
        resultHtml += `<p>${target.name}を占領しました</p>`;
        resultHtml += `<p>損失: ${attackLosses}</p>`;
        
        addLog(`${target.name}を${enemyLord.name}から奪取！`, true);
        
        // 敗北判定と武将吸収
        if (enemyLord.territories.length === 0) {
            addLog(`${enemyLord.name}を滅ぼしました！`, true);
            resultHtml += `<p class="victory">${enemyLord.name}を滅ぼしました！</p>`;
            
            // 敵の武将を全て吸収
            const capturedOfficers = [...enemyLord.officers];
            capturedOfficers.forEach(officerId => {
                if (!playerLord.officers.includes(officerId)) {
                    playerLord.officers.push(officerId);
                    const officer = OFFICERS[officerId];
                    resultHtml += `<p style="color: #90ee90;">${officer.name}が配下になりました</p>`;
                    addLog(`${officer.name}が配下になりました`, true);
                }
            });
            enemyLord.officers = [];
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
    audioManager.playSE('turn');
    
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
    
    // 詳細な収入情報を表示
    addLog(`【収入】金 +${totalGoldIncome}、米 +${totalRiceIncome}（現在: 金${playerLord.gold}、米${playerLord.rice}）`, true);
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
        audioManager.playSE('coin');
        addLog(`${territory.name}で兵士を募集。兵+${increase}`);
        updateUI();
        updateTerritoryInfo();
    } else {
        audioManager.playSE('click');
        alert('金が不足しています');
    }
}

// ========================================
// 音声システム
// ========================================

function toggleMute() {
    const isMuted = audioManager.toggleMute();
    const btn = document.getElementById('mute-btn');
    btn.textContent = isMuted ? '🔇' : '🔊';
    audioManager.playSE('click');
}

// ========================================
// 起動
// ========================================

document.addEventListener('DOMContentLoaded', initGame);
