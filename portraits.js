// ========================================
// 武将の顔画像生成システム
// ========================================

class PortraitGenerator {
    constructor() {
        this.cache = new Map();
    }
    
    // 武将の顔をSVGで生成
    generatePortrait(officerId) {
        if (this.cache.has(officerId)) {
            return this.cache.get(officerId);
        }
        
        const officer = OFFICERS[officerId];
        if (!officer) return this.getDefaultPortrait();
        
        const svg = this.createFaceSVG(officer);
        const dataUrl = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
        
        this.cache.set(officerId, dataUrl);
        return dataUrl;
    }
    
    createFaceSVG(officer) {
        // 武将の能力値から特徴を決定
        const isWarrior = officer.war >= 85;
        const isStrategist = officer.int >= 85;
        const isAdministrator = officer.pol >= 85;
        
        // 顔の基本構成
        let faceColor = '#f4c8a0';
        let hairColor = '#2c1810';
        let eyeShape = 'normal';
        let mouthExpression = 'neutral';
        let hasBeard = false;
        let hasHelmet = false;
        let eyebrowType = 'normal';
        
        // 特定の武将のカスタマイズ
        switch (officer.id) {
            case 'oda_nobunaga':
                eyeShape = 'sharp';
                mouthExpression = 'confident';
                eyebrowType = 'sharp';
                break;
            case 'takeda_shingen':
                hasBeard = true;
                eyebrowType = 'thick';
                hasHelmet = true;
                break;
            case 'uesugi_kenshin':
                eyeShape = 'calm';
                hasHelmet = true;
                eyebrowType = 'thin';
                break;
            case 'tokugawa_ieyasu':
                mouthExpression = 'wise';
                eyebrowType = 'thick';
                hasBeard = true;
                break;
            case 'date_masamune':
                eyeShape = 'one-eyed';
                mouthExpression = 'confident';
                hasHelmet = true;
                break;
            case 'hashiba_hideyoshi':
                faceColor = '#d4a373';
                mouthExpression = 'smile';
                break;
            case 'mori_motonari':
                hasBeard = true;
                eyeShape = 'wise';
                hairColor = '#5a5a5a';
                break;
            default:
                // 能力値ベースのカスタマイズ
                if (isWarrior) {
                    eyeShape = 'sharp';
                    eyebrowType = 'thick';
                    if (officer.war >= 90) hasBeard = true;
                }
                if (isStrategist) {
                    eyeShape = 'calm';
                    eyebrowType = 'thin';
                }
                if (officer.loyalty >= 95) {
                    mouthExpression = 'determined';
                }
        }
        
        return this.buildSVG(faceColor, hairColor, eyeShape, mouthExpression, hasBeard, hasHelmet, eyebrowType);
    }
    
    buildSVG(faceColor, hairColor, eyeShape, mouthExpression, hasBeard, hasHelmet, eyebrowType) {
        let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">`;
        
        // 背景
        svg += `<rect width="200" height="200" fill="#2c1810"/>`;
        
        // 兜（オプション）
        if (hasHelmet) {
            svg += `
                <path d="M 60 40 Q 100 20 140 40 L 145 55 L 55 55 Z" fill="${hairColor}" stroke="#1a0f0a" stroke-width="2"/>
                <circle cx="100" cy="45" r="8" fill="#d4af37"/>
            `;
        } else {
            // 髪
            svg += `
                <ellipse cx="100" cy="60" rx="45" ry="30" fill="${hairColor}"/>
                <rect x="65" y="55" width="70" height="40" fill="${hairColor}"/>
            `;
        }
        
        // 顔
        svg += `<ellipse cx="100" cy="110" rx="40" ry="50" fill="${faceColor}" stroke="#8b6f47" stroke-width="2"/>`;
        
        // 眉毛
        const eyebrowY = 90;
        switch (eyebrowType) {
            case 'thick':
                svg += `
                    <path d="M 75 ${eyebrowY} Q 80 ${eyebrowY-2} 90 ${eyebrowY}" stroke="${hairColor}" stroke-width="4" fill="none" stroke-linecap="round"/>
                    <path d="M 110 ${eyebrowY} Q 120 ${eyebrowY-2} 125 ${eyebrowY}" stroke="${hairColor}" stroke-width="4" fill="none" stroke-linecap="round"/>
                `;
                break;
            case 'thin':
                svg += `
                    <path d="M 75 ${eyebrowY} Q 80 ${eyebrowY-1} 90 ${eyebrowY}" stroke="${hairColor}" stroke-width="2" fill="none"/>
                    <path d="M 110 ${eyebrowY} Q 120 ${eyebrowY-1} 125 ${eyebrowY}" stroke="${hairColor}" stroke-width="2" fill="none"/>
                `;
                break;
            case 'sharp':
                svg += `
                    <path d="M 75 ${eyebrowY+2} L 85 ${eyebrowY-3} L 90 ${eyebrowY}" stroke="${hairColor}" stroke-width="3" fill="none" stroke-linejoin="miter"/>
                    <path d="M 110 ${eyebrowY} L 115 ${eyebrowY-3} L 125 ${eyebrowY+2}" stroke="${hairColor}" stroke-width="3" fill="none" stroke-linejoin="miter"/>
                `;
                break;
            default:
                svg += `
                    <path d="M 75 ${eyebrowY} Q 82 ${eyebrowY-2} 90 ${eyebrowY-1}" stroke="${hairColor}" stroke-width="3" fill="none" stroke-linecap="round"/>
                    <path d="M 110 ${eyebrowY-1} Q 118 ${eyebrowY-2} 125 ${eyebrowY}" stroke="${hairColor}" stroke-width="3" fill="none" stroke-linecap="round"/>
                `;
        }
        
        // 目
        switch (eyeShape) {
            case 'sharp':
                svg += `
                    <path d="M 75 100 L 90 102 L 75 104" fill="white" stroke="#000" stroke-width="1"/>
                    <path d="M 110 102 L 125 100 L 125 104" fill="white" stroke="#000" stroke-width="1"/>
                    <circle cx="82" cy="102" r="4" fill="#1a0f0a"/>
                    <circle cx="118" cy="102" r="4" fill="#1a0f0a"/>
                `;
                break;
            case 'calm':
                svg += `
                    <ellipse cx="82" cy="102" rx="8" ry="6" fill="white" stroke="#000" stroke-width="1"/>
                    <ellipse cx="118" cy="102" rx="8" ry="6" fill="white" stroke="#000" stroke-width="1"/>
                    <circle cx="82" cy="102" r="3" fill="#1a0f0a"/>
                    <circle cx="118" cy="102" r="3" fill="#1a0f0a"/>
                `;
                break;
            case 'wise':
                svg += `
                    <ellipse cx="82" cy="102" rx="10" ry="7" fill="white" stroke="#000" stroke-width="1"/>
                    <ellipse cx="118" cy="102" rx="10" ry="7" fill="white" stroke="#000" stroke-width="1"/>
                    <circle cx="82" cy="103" r="4" fill="#3d2314"/>
                    <circle cx="118" cy="103" r="4" fill="#3d2314"/>
                `;
                break;
            case 'one-eyed':
                // 伊達政宗の独眼
                svg += `
                    <ellipse cx="82" cy="102" rx="9" ry="7" fill="white" stroke="#000" stroke-width="1"/>
                    <circle cx="82" cy="102" r="4" fill="#1a0f0a"/>
                    <path d="M 110 102 L 125 102" stroke="#1a0f0a" stroke-width="3" stroke-linecap="round"/>
                `;
                break;
            default:
                svg += `
                    <ellipse cx="82" cy="102" rx="9" ry="7" fill="white" stroke="#000" stroke-width="1"/>
                    <ellipse cx="118" cy="102" rx="9" ry="7" fill="white" stroke="#000" stroke-width="1"/>
                    <circle cx="82" cy="102" r="4" fill="#1a0f0a"/>
                    <circle cx="118" cy="102" r="4" fill="#1a0f0a"/>
                `;
        }
        
        // 鼻
        svg += `<path d="M 100 110 L 98 120 L 102 120" stroke="#8b6f47" stroke-width="1.5" fill="none" stroke-linejoin="round"/>`;
        
        // 口
        switch (mouthExpression) {
            case 'confident':
                svg += `<path d="M 85 130 Q 100 135 115 130" stroke="#8b4513" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
                break;
            case 'smile':
                svg += `<path d="M 85 128 Q 100 138 115 128" stroke="#8b4513" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
                break;
            case 'wise':
                svg += `<path d="M 88 132 Q 100 133 112 132" stroke="#8b4513" stroke-width="2" fill="none"/>`;
                break;
            case 'determined':
                svg += `<line x1="88" y1="132" x2="112" y2="132" stroke="#8b4513" stroke-width="2.5" stroke-linecap="round"/>`;
                break;
            default:
                svg += `<path d="M 88 132 Q 100 134 112 132" stroke="#8b4513" stroke-width="2" fill="none" stroke-linecap="round"/>`;
        }
        
        // ひげ（オプション）
        if (hasBeard) {
            svg += `
                <path d="M 92 138 Q 95 145 98 148" stroke="${hairColor}" stroke-width="2" fill="none"/>
                <path d="M 100 140 Q 100 148 100 152" stroke="${hairColor}" stroke-width="2.5" fill="none"/>
                <path d="M 108 138 Q 105 145 102 148" stroke="${hairColor}" stroke-width="2" fill="none"/>
                <path d="M 85 135 Q 80 140 78 145" stroke="${hairColor}" stroke-width="1.5" fill="none"/>
                <path d="M 115 135 Q 120 140 122 145" stroke="${hairColor}" stroke-width="1.5" fill="none"/>
            `;
        }
        
        // 鎧の襟
        svg += `
            <rect x="70" y="155" width="60" height="45" fill="#4a2c1a" stroke="#2c1810" stroke-width="2"/>
            <line x1="75" y1="160" x2="125" y2="160" stroke="#d4af37" stroke-width="1"/>
            <line x1="75" y1="170" x2="125" y2="170" stroke="#d4af37" stroke-width="1"/>
        `;
        
        svg += `</svg>`;
        return svg;
    }
    
    getDefaultPortrait() {
        return "data:image/svg+xml;base64," + btoa(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <rect fill="#8b4513" width="100" height="100"/>
                <text x="50" y="55" font-size="40" fill="#f5e6d3" text-anchor="middle">将</text>
            </svg>
        `);
    }
}

// グローバルインスタンス
const portraitGenerator = new PortraitGenerator();
