// ========================================
// 武将の顔画像生成システム（リアルグラフィック版）
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
        
        const svg = this.createRealisticPortrait(officer);
        const dataUrl = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
        
        this.cache.set(officerId, dataUrl);
        return dataUrl;
    }
    
    createRealisticPortrait(officer) {
        // 武将ごとに完全に個別のデザインを生成
        const portraits = {
            // 織田家
            oda_nobunaga: this.createOdaNobunaga(),
            shibata_katsuie: this.createShibataKatsuie(),
            hashiba_hideyoshi: this.createHashibaHideyoshi(),
            
            // 武田家
            takeda_shingen: this.createTakedaShingen(),
            sanada_yukitaka: this.createSanadaYukitaka(),
            baba_nobuharu: this.createBabaNobuharu(),
            
            // 上杉家
            uesugi_kenshin: this.createUesugiKenshin(),
            kakizaki_kageie: this.createKakizakiKageie(),
            naoe_kanetsugu: this.createNaoeKanetsugu(),
            
            // 徳川家
            tokugawa_ieyasu: this.createTokugawaIeyasu(),
            honda_tadakatsu: this.createHondaTadakatsu(),
            sakai_tadatsugu: this.createSakaiTadatsugu(),
            
            // 伊達家
            date_masamune: this.createDateMasamune(),
            katakura_kojuro: this.createKatakuraKojuro(),
            
            // 北条家
            hojo_ujiyasu: this.createHojoUjiyasu(),
            hojo_ujimasa: this.createHojoUjimasa(),
            
            // 今川家
            imagawa_yoshimoto: this.createImagawaYoshimoto(),
            
            // 毛利家
            mori_motonari: this.createMoriMotonari(),
            kobayakawa_takakage: this.createKobayakawaTakakage(),
            kikkawa_motoharu: this.createKikkawaMotoharu(),
            
            // 島津家
            shimazu_yoshihisa: this.createShimazuYoshihisa(),
            shimazu_yoshihiro: this.createShimazuYoshihiro(),
            
            // その他大名
            saito_dosan: this.createSaitoDosan(),
            asai_nagamasa: this.createAsaiNagamasa(),
            ashikaga_yoshiaki: this.createAshikagaYoshiaki(),
            miyoshi_nagayoshi: this.createMiyoshiNagayoshi(),
            ukita_naoie: this.createUkitaNaoie(),
            otomo_sorin: this.createOtomoSorin(),
            ryuzoji_takanobu: this.createRyuzojiTakanobu(),
            kitabatake_tomonori: this.createKitabatakeTomonori(),
            asakura_yoshikage: this.createAsakuraYoshikage(),
            chosokabe_motochika: this.createChosokabeMotochika(),
            mogami_yoshiaki: this.createMogamiYoshiaki(),
            satomi_yoshitaka: this.createSatomiYoshitaka(),
            tsutsui_junkei: this.createTsutsuiJunkei(),
            hatakeyama_takamasa: this.createHatakeyamaTakamasa(),
            akamatsu_harumasa: this.createAkamatsuHarumasa(),
            kono_michinobu: this.createKonoMichinobu(),
            sagara_yoshihi: this.createSagaraYoshihi(),
            ito_yoshisuke: this.createItoYoshisuke(),
            honganji_kennyo: this.createHonganjiKennyo(),
            jinbo_nagamoto: this.createJinboNagamoto(),
            anegakoji_yoritsuna: this.createAnegakojiYoritsuna(),
            saiga_magoichi: this.createSaigaMagoichi()
        };
        
        return portraits[officer.id] || this.createGenericWarrior(officer);
    }
    
    // グラデーション定義
    getDefs() {
        return `
        <defs>
            <radialGradient id="faceGrad" cx="50%" cy="40%">
                <stop offset="0%" style="stop-color:#f5d7b8;stop-opacity:1" />
                <stop offset="70%" style="stop-color:#e6b896;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#c19a7a;stop-opacity:1" />
            </radialGradient>
            <radialGradient id="faceGradDark" cx="50%" cy="40%">
                <stop offset="0%" style="stop-color:#d4b896;stop-opacity:1" />
                <stop offset="70%" style="stop-color:#c0a080;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#a68860;stop-opacity:1" />
            </radialGradient>
            <linearGradient id="helmetGold" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#ffd700;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#daa520;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#b8860b;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="armorRed" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#c41e3a;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#8b0000;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#5c0000;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="armorBlue" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#4169e1;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#1e3a8a;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#0f1f4f;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="armorBlack" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#3a3a3a;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#1a1a1a;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#0a0a0a;stop-opacity:1" />
            </linearGradient>
            <filter id="shadow">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                <feOffset dx="2" dy="2" result="offsetblur"/>
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.5"/>
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        `;
    }
    
    // 織田信長
    createOdaNobunaga() {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
            ${this.getDefs()}
            <rect width="300" height="300" fill="url(#armorBlack)"/>
            
            <!-- 背景の家紋 -->
            <circle cx="150" cy="150" r="120" fill="#1a1a1a" opacity="0.3"/>
            <circle cx="150" cy="150" r="25" fill="#d4af37" opacity="0.2"/>
            
            <!-- 首 -->
            <rect x="125" y="200" width="50" height="40" fill="url(#faceGrad)" filter="url(#shadow)"/>
            
            <!-- 鎧の肩 -->
            <path d="M 80 220 Q 150 200 220 220 L 220 300 L 80 300 Z" fill="url(#armorBlack)" stroke="#d4af37" stroke-width="2"/>
            <rect x="90" y="230" width="120" height="8" fill="#d4af37" opacity="0.6"/>
            
            <!-- 顔 -->
            <ellipse cx="150" cy="160" rx="55" ry="70" fill="url(#faceGrad)" filter="url(#shadow)"/>
            
            <!-- 髪 -->
            <path d="M 95 120 Q 150 90 205 120 L 205 160 Q 200 155 195 160 L 190 140 Q 150 110 110 140 L 105 160 Q 100 155 95 160 Z" fill="#1a1a1a"/>
            
            <!-- 額 -->
            <ellipse cx="150" cy="130" rx="48" ry="25" fill="#1a1a1a"/>
            
            <!-- 眉毛（鋭い） -->
            <path d="M 115 145 L 125 140 L 135 142" stroke="#2a1a10" stroke-width="4" fill="none" stroke-linecap="round"/>
            <path d="M 165 142 L 175 140 L 185 145" stroke="#2a1a10" stroke-width="4" fill="none" stroke-linecap="round"/>
            
            <!-- 目（鋭い眼光） -->
            <ellipse cx="125" cy="155" rx="12" ry="10" fill="white"/>
            <ellipse cx="175" cy="155" rx="12" ry="10" fill="white"/>
            <circle cx="125" cy="156" r="6" fill="#1a0f0a"/>
            <circle cx="175" cy="156" r="6" fill="#1a0f0a"/>
            <circle cx="127" cy="154" r="2" fill="white" opacity="0.8"/>
            <circle cx="177" cy="154" r="2" fill="white" opacity="0.8"/>
            
            <!-- 鼻 -->
            <path d="M 150 160 L 148 175 Q 150 177 152 175 Z" fill="#d4a080" stroke="#b8905f" stroke-width="1.5"/>
            <ellipse cx="145" cy="177" rx="3" ry="2" fill="#b8905f" opacity="0.5"/>
            <ellipse cx="155" cy="177" rx="3" ry="2" fill="#b8905f" opacity="0.5"/>
            
            <!-- 口（自信に満ちた） -->
            <path d="M 130 190 Q 150 197 170 190" stroke="#8b4513" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M 135 192 Q 150 196 165 192" stroke="#ff6b8a" stroke-width="2" fill="none" opacity="0.6"/>
            
            <!-- 顎のライン -->
            <path d="M 105 180 Q 150 215 195 180" stroke="#c19a7a" stroke-width="1.5" fill="none" opacity="0.6"/>
            
            <!-- 口ひげ -->
            <path d="M 130 193 Q 125 198 122 200" stroke="#2a1a10" stroke-width="2" fill="none"/>
            <path d="M 170 193 Q 175 198 178 200" stroke="#2a1a10" stroke-width="2" fill="none"/>
        </svg>`;
    }
    
    // 武田信玄
    createTakedaShingen() {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
            ${this.getDefs()}
            <rect width="300" height="300" fill="url(#armorRed)"/>
            
            <!-- 背景装飾 -->
            <circle cx="150" cy="150" r="110" fill="#8b0000" opacity="0.2"/>
            
            <!-- 兜（諏訪法性兜風） -->
            <path d="M 90 90 Q 150 60 210 90 L 215 110 Q 150 95 85 110 Z" fill="url(#helmetGold)" stroke="#b8860b" stroke-width="3" filter="url(#shadow)"/>
            <ellipse cx="150" cy="90" rx="35" ry="15" fill="#ffd700"/>
            <circle cx="150" cy="85" r="12" fill="#8b0000"/>
            <path d="M 100 95 L 95 75 L 105 95" fill="#ffd700" stroke="#b8860b" stroke-width="1"/>
            <path d="M 200 95 L 205 75 L 195 95" fill="#ffd700" stroke="#b8860b" stroke-width="1"/>
            
            <!-- 顔（風格のある） -->
            <ellipse cx="150" cy="165" rx="58" ry="75" fill="url(#faceGradDark)" filter="url(#shadow)"/>
            
            <!-- 眉毛（太く威厳のある） -->
            <path d="M 110 145 Q 120 142 135 145" stroke="#2a1a10" stroke-width="5" fill="none" stroke-linecap="round"/>
            <path d="M 165 145 Q 180 142 190 145" stroke="#2a1a10" stroke-width="5" fill="none" stroke-linecap="round"/>
            
            <!-- 目（威厳） -->
            <ellipse cx="122" cy="158" rx="13" ry="11" fill="white"/>
            <ellipse cx="178" cy="158" rx="13" ry="11" fill="white"/>
            <circle cx="122" cy="159" r="7" fill="#1a0f0a"/>
            <circle cx="178" cy="159" r="7" fill="#1a0f0a"/>
            <circle cx="124" cy="157" r="3" fill="white" opacity="0.7"/>
            <circle cx="180" cy="157" r="3" fill="white" opacity="0.7"/>
            
            <!-- 鼻 -->
            <path d="M 150 165 L 147 180 Q 150 183 153 180 Z" fill="#c8a882" stroke="#a68860" stroke-width="2"/>
            
            <!-- ひげ（立派な） -->
            <path d="M 135 192 Q 130 205 128 215" stroke="#3a3a3a" stroke-width="3" fill="none"/>
            <path d="M 140 195 Q 138 208 137 220" stroke="#3a3a3a" stroke-width="3" fill="none"/>
            <path d="M 145 197 Q 145 210 145 225" stroke="#3a3a3a" stroke-width="3.5" fill="none"/>
            <path d="M 150 198 Q 150 213 150 230" stroke="#3a3a3a" stroke-width="4" fill="none"/>
            <path d="M 155 197 Q 155 210 155 225" stroke="#3a3a3a" stroke-width="3.5" fill="none"/>
            <path d="M 160 195 Q 162 208 163 220" stroke="#3a3a3a" stroke-width="3" fill="none"/>
            <path d="M 165 192 Q 170 205 172 215" stroke="#3a3a3a" stroke-width="3" fill="none"/>
            
            <!-- 口髭 -->
            <path d="M 125 187 Q 120 192 115 195" stroke="#3a3a3a" stroke-width="2.5" fill="none"/>
            <path d="M 175 187 Q 180 192 185 195" stroke="#3a3a3a" stroke-width="2.5" fill="none"/>
            
            <!-- 口 -->
            <path d="M 133 188 Q 150 192 167 188" stroke="#6d4c3d" stroke-width="3" fill="none"/>
            
            <!-- 鎧 -->
            <rect x="75" y="220" width="150" height="80" fill="url(#armorRed)" stroke="#d4af37" stroke-width="3"/>
            <line x1="85" y1="235" x2="215" y2="235" stroke="#d4af37" stroke-width="2" opacity="0.6"/>
            <line x1="85" y1="250" x2="215" y2="250" stroke="#d4af37" stroke-width="2" opacity="0.6"/>
        </svg>`;
    }
    
    // 上杉謙信
    createUesugiKenshin() {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
            ${this.getDefs()}
            <rect width="300" height="300" fill="url(#armorBlue)"/>
            
            <!-- 背景 -->
            <circle cx="150" cy="150" r="115" fill="#1e3a8a" opacity="0.3"/>
            
            <!-- 頭巾（白） -->
            <path d="M 95 105 Q 150 80 205 105 L 210 135 Q 150 115 90 135 Z" fill="white" stroke="#ccc" stroke-width="2" filter="url(#shadow)"/>
            <path d="M 140 90 Q 150 85 160 90 L 155 105 L 145 105 Z" fill="white" stroke="#ccc" stroke-width="1"/>
            
            <!-- 額当て（月） -->
            <circle cx="150" cy="110" r="15" fill="#ffd700" stroke="#b8860b" stroke-width="2"/>
            <path d="M 145 110 Q 150 105 155 110 Q 150 115 145 110" fill="#1e3a8a"/>
            
            <!-- 顔（気高い） -->
            <ellipse cx="150" cy="170" rx="52" ry="70" fill="url(#faceGrad)" filter="url(#shadow)"/>
            
            <!-- 眉毛（凛とした） -->
            <path d="M 115 152 Q 125 150 135 152" stroke="#2a1a10" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M 165 152 Q 175 150 185 152" stroke="#2a1a10" stroke-width="3" fill="none" stroke-linecap="round"/>
            
            <!-- 目（澄んだ眼） -->
            <ellipse cx="125" cy="165" rx="12" ry="10" fill="white"/>
            <ellipse cx="175" cy="165" rx="12" ry="10" fill="white"/>
            <circle cx="125" cy="166" r="6" fill="#1a0f0a"/>
            <circle cx="175" cy="166" r="6" fill="#1a0f0a"/>
            <circle cx="127" cy="164" r="2.5" fill="white" opacity="0.9"/>
            <circle cx="177" cy="164" r="2.5" fill="white" opacity="0.9"/>
            
            <!-- まつげ -->
            <path d="M 115 162 L 112 160" stroke="#2a1a10" stroke-width="1.5"/>
            <path d="M 120 161 L 118 158" stroke="#2a1a10" stroke-width="1.5"/>
            <path d="M 180 161 L 182 158" stroke="#2a1a10" stroke-width="1.5"/>
            <path d="M 185 162 L 188 160" stroke="#2a1a10" stroke-width="1.5"/>
            
            <!-- 鼻 -->
            <path d="M 150 170 L 148 185 Q 150 187 152 185 Z" fill="#e0c0a0" stroke="#c0a080" stroke-width="1.5"/>
            
            <!-- 口（意志の強い） -->
            <path d="M 135 200 L 165 200" stroke="#8b4513" stroke-width="3" fill="none" stroke-linecap="round"/>
            
            <!-- 鎧 -->
            <path d="M 80 225 Q 150 215 220 225 L 220 300 L 80 300 Z" fill="url(#armorBlue)" stroke="#d4af37" stroke-width="2"/>
            <rect x="100" y="235" width="100" height="6" fill="#d4af37" opacity="0.7"/>
            <rect x="100" y="250" width="100" height="6" fill="#d4af37" opacity="0.7"/>
        </svg>`;
    }
    
    // 徳川家康
    createTokugawaIeyasu() {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
            ${this.getDefs()}
            <linearGradient id="armorGold" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#daa520;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#8b6914;stop-opacity:1" />
            </linearGradient>
            <rect width="300" height="300" fill="url(#armorGold)"/>
            
            <!-- 兜（シダの葉） -->
            <path d="M 100 85 Q 150 65 200 85 L 205 105 Q 150 90 95 105 Z" fill="#4a5d3f" stroke="#2a3a1f" stroke-width="2" filter="url(#shadow)"/>
            <path d="M 140 70 L 145 55 L 150 70" fill="#4a5d3f" stroke="#2a3a1f" stroke-width="1"/>
            <path d="M 150 70 L 155 55 L 160 70" fill="#4a5d3f" stroke="#2a3a1f" stroke-width="1"/>
            
            <!-- 顔（貫禄） -->
            <ellipse cx="150" cy="170" rx="60" ry="75" fill="url(#faceGradDark)" filter="url(#shadow)"/>
            
            <!-- 眉毛（太く賢い） -->
            <path d="M 110 147 Q 122 144 135 147" stroke="#3a2a1a" stroke-width="4.5" fill="none" stroke-linecap="round"/>
            <path d="M 165 147 Q 178 144 190 147" stroke="#3a2a1a" stroke-width="4.5" fill="none" stroke-linecap="round"/>
            
            <!-- 目（深謀遠慮） -->
            <ellipse cx="123" cy="162" rx="13" ry="9" fill="white"/>
            <ellipse cx="177" cy="162" rx="13" ry="9" fill="white"/>
            <circle cx="123" cy="163" r="6" fill="#2a1a0a"/>
            <circle cx="177" cy="163" r="6" fill="#2a1a0a"/>
            <circle cx="125" cy="161" r="2" fill="white" opacity="0.8"/>
            <circle cx="179" cy="161" r="2" fill="white" opacity="0.8"/>
            
            <!-- 鼻（堂々とした） -->
            <path d="M 150 168 L 147 185 Q 150 188 153 185 Z" fill="#c8a882" stroke="#a68860" stroke-width="2"/>
            <ellipse cx="145" cy="185" rx="4" ry="3" fill="#a68860" opacity="0.6"/>
            <ellipse cx="155" cy="185" rx="4" ry="3" fill="#a68860" opacity="0.6"/>
            
            <!-- 口髭（小さめ） -->
            <path d="M 135 195 Q 130 198 128 200" stroke="#3a2a1a" stroke-width="2.5" fill="none"/>
            <path d="M 165 195 Q 170 198 172 200" stroke="#3a2a1a" stroke-width="2.5" fill="none"/>
            
            <!-- ひげ（貫禄） -->
            <path d="M 138 200 Q 135 212 134 220" stroke="#4a3a2a" stroke-width="3" fill="none"/>
            <path d="M 145 202 Q 145 214 145 225" stroke="#4a3a2a" stroke-width="3.5" fill="none"/>
            <path d="M 150 203 Q 150 218 150 230" stroke="#4a3a2a" stroke-width="4" fill="none"/>
            <path d="M 155 202 Q 155 214 155 225" stroke="#4a3a2a" stroke-width="3.5" fill="none"/>
            <path d="M 162 200 Q 165 212 166 220" stroke="#4a3a2a" stroke-width="3" fill="none"/>
            
            <!-- 口 -->
            <path d="M 137 196 Q 150 199 163 196" stroke="#6d4c3d" stroke-width="3" fill="none"/>
            
            <!-- 鎧 -->
            <rect x="70" y="225" width="160" height="75" fill="url(#armorGold)" stroke="#d4af37" stroke-width="3"/>
            <circle cx="110" cy="245" r="8" fill="#1a1a1a" stroke="#d4af37" stroke-width="2"/>
            <circle cx="150" cy="245" r="8" fill="#1a1a1a" stroke="#d4af37" stroke-width="2"/>
            <circle cx="190" cy="245" r="8" fill="#1a1a1a" stroke="#d4af37" stroke-width="2"/>
        </svg>`;
    }
    
    // 伊達政宗（独眼竜）
    createDateMasamune() {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
            ${this.getDefs()}
            <rect width="300" height="300" fill="#1a1a1a"/>
            
            <!-- 背景（月） -->
            <circle cx="220" cy="80" r="35" fill="#ffd700" opacity="0.3"/>
            
            <!-- 三日月兜 -->
            <path d="M 95 90 Q 150 65 205 90 L 210 110 Q 150 92 90 110 Z" fill="#2a2a2a" stroke="#d4af37" stroke-width="3" filter="url(#shadow)"/>
            <path d="M 120 75 Q 150 55 180 75" stroke="#ffd700" stroke-width="6" fill="none" stroke-linecap="round"/>
            <path d="M 122 77 Q 150 60 178 77" stroke="#daa520" stroke-width="4" fill="none" stroke-linecap="round"/>
            <circle cx="150" cy="85" r="10" fill="#ffd700" stroke="#b8860b" stroke-width="2"/>
            
            <!-- 顔（若々しく鋭い） -->
            <ellipse cx="150" cy="165" rx="54" ry="72" fill="url(#faceGrad)" filter="url(#shadow)"/>
            
            <!-- 眉毛（鋭い） -->
            <path d="M 113 145 L 125 140 L 137 143" stroke="#2a1a10" stroke-width="4" fill="none" stroke-linecap="round"/>
            <path d="M 163 143 L 175 140 L 187 145" stroke="#2a1a10" stroke-width="4" fill="none" stroke-linecap="round"/>
            
            <!-- 右目（鋭い眼光） -->
            <ellipse cx="125" cy="160" rx="13" ry="11" fill="white"/>
            <circle cx="125" cy="161" r="7" fill="#1a0f0a"/>
            <circle cx="127" cy="159" r="3" fill="white" opacity="0.9"/>
            
            <!-- 左目（眼帯） -->
            <ellipse cx="175" cy="160" rx="18" ry="13" fill="#1a1a1a"/>
            <path d="M 160 158 L 190 158" stroke="#1a1a1a" stroke-width="5"/>
            <line x1="165" y1="152" x2="185" y2="152" stroke="#3a3a3a" stroke-width="2"/>
            <line x1="165" y1="168" x2="185" y2="168" stroke="#3a3a3a" stroke-width="2"/>
            
            <!-- 傷跡 -->
            <path d="M 160 148 L 188 172" stroke="#c19a7a" stroke-width="2" opacity="0.6"/>
            
            <!-- 鼻 -->
            <path d="M 150 165 L 148 180 Q 150 183 152 180 Z" fill="#e6c0a0" stroke="#c0a080" stroke-width="1.5"/>
            
            <!-- 口（自信に満ちた笑み） -->
            <path d="M 128 192 Q 150 200 172 192" stroke="#8b4513" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M 133 194 Q 150 198 167 194" stroke="#ff6b8a" stroke-width="2" fill="none" opacity="0.5"/>
            
            <!-- 鎧 -->
            <path d="M 75 220 Q 150 210 225 220 L 225 300 L 75 300 Z" fill="#1a1a1a" stroke="#d4af37" stroke-width="3"/>
            <rect x="95" y="235" width="110" height="8" fill="#d4af37"/>
            <circle cx="120" cy="255" r="6" fill="#d4af37"/>
            <circle cx="150" cy="255" r="6" fill="#d4af37"/>
            <circle cx="180" cy="255" r="6" fill="#d4af37"/>
        </svg>`;
    }
    
    // 汎用武将作成（その他の武将用）
    createGenericWarrior(officer) {
        const isWarrior = officer.war >= 80;
        const isStrategist = officer.int >= 80;
        const age = Math.floor(officer.war / 3) + 25; // 擬似的な年齢
        
        const faceColor = age > 40 ? '#d4b896' : '#f5d7b8';
        const hairColor = age > 50 ? '#4a4a4a' : '#2a1a1a';
        const hasBeard = officer.war >= 75 || age > 45;
        const armorColor = isWarrior ? 'url(#armorRed)' : 'url(#armorBlue)';
        
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
            ${this.getDefs()}
            <rect width="300" height="300" fill="${armorColor}"/>
            
            <!-- 頭部 -->
            <ellipse cx="150" cy="120" rx="50" ry="35" fill="${hairColor}"/>
            <rect x="100" y="115" width="100" height="45" fill="${hairColor}"/>
            
            <!-- 顔 -->
            <ellipse cx="150" cy="170" rx="55" ry="70" fill="${faceColor}" filter="url(#shadow)"/>
            
            <!-- 眉毛 -->
            <path d="M 115 150 Q 125 147 135 150" stroke="${hairColor}" stroke-width="${isWarrior ? '4' : '3'}" fill="none" stroke-linecap="round"/>
            <path d="M 165 150 Q 175 147 185 150" stroke="${hairColor}" stroke-width="${isWarrior ? '4' : '3'}" fill="none" stroke-linecap="round"/>
            
            <!-- 目 -->
            <ellipse cx="125" cy="163" rx="12" ry="10" fill="white"/>
            <ellipse cx="175" cy="163" rx="12" ry="10" fill="white"/>
            <circle cx="125" cy="164" r="${isWarrior ? '7' : '6'}" fill="#1a0f0a"/>
            <circle cx="175" cy="164" r="${isWarrior ? '7' : '6'}" fill="#1a0f0a"/>
            <circle cx="127" cy="162" r="2" fill="white" opacity="0.8"/>
            <circle cx="177" cy="162" r="2" fill="white" opacity="0.8"/>
            
            <!-- 鼻 -->
            <path d="M 150 168 L 148 183 Q 150 185 152 183 Z" fill="#c8a882" stroke="#a68860" stroke-width="1.5"/>
            
            <!-- 口 -->
            <path d="M 135 195 Q 150 ${isStrategist ? '197' : '200'} 165 195" stroke="#8b4513" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            
            ${hasBeard ? `
            <!-- ひげ -->
            <path d="M 140 198 Q 138 210 137 220" stroke="${hairColor}" stroke-width="2.5" fill="none"/>
            <path d="M 150 200 Q 150 215 150 225" stroke="${hairColor}" stroke-width="3" fill="none"/>
            <path d="M 160 198 Q 162 210 163 220" stroke="${hairColor}" stroke-width="2.5" fill="none"/>
            ` : ''}
            
            <!-- 鎧 -->
            <rect x="80" y="225" width="140" height="75" fill="${armorColor}" stroke="#d4af37" stroke-width="2"/>
            <line x1="90" y1="240" x2="210" y2="240" stroke="#d4af37" stroke-width="1.5" opacity="0.6"/>
        </svg>`;
    }
    
    // 以下、その他の武将の個別実装
    createShibataKatsuie() {
        return this.createGenericWarriorVariant('#c41e3a', true, 'thick');
    }
    
    createHashibaHideyoshi() {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
            ${this.getDefs()}
            <rect width="300" height="300" fill="url(#armorGold)"/>
            <ellipse cx="150" cy="170" rx="52" ry="68" fill="#d4a373" filter="url(#shadow)"/>
            <path d="M 115 150 Q 125 148 135 150" stroke="#2a1a10" stroke-width="3" fill="none"/>
            <path d="M 165 150 Q 175 148 185 150" stroke="#2a1a10" stroke-width="3" fill="none"/>
            <ellipse cx="125" cy="163" rx="11" ry="10" fill="white"/>
            <ellipse cx="175" cy="163" rx="11" ry="10" fill="white"/>
            <circle cx="125" cy="164" r="6" fill="#1a0f0a"/>
            <circle cx="175" cy="164" r="6" fill="#1a0f0a"/>
            <path d="M 150 168 L 148 180 L 152 180 Z" fill="#b8905f" stroke="#a68860" stroke-width="1.5"/>
            <path d="M 132 192 Q 150 200 168 192" stroke="#8b4513" stroke-width="3" fill="none" stroke-linecap="round"/>
            <rect x="80" y="225" width="140" height="75" fill="url(#armorGold)"/>
        </svg>`;
    }
    
    createSanadaYukitaka() { return this.createGenericWarriorVariant('#c41e3a', true, 'normal'); }
    createBabaNobuharu() { return this.createGenericWarriorVariant('#8b0000', true, 'thick'); }
    createKakizakiKageie() { return this.createGenericWarriorVariant('#4169e1', true, 'thick'); }
    createNaoeKanetsugu() { return this.createGenericWarriorVariant('#4169e1', false, 'normal'); }
    createHondaTadakatsu() { return this.createGenericWarriorVariant('#1a1a1a', true, 'thick'); }
    createSakaiTadatsugu() { return this.createGenericWarriorVariant('#daa520', true, 'normal'); }
    createKatakuraKojuro() { return this.createGenericWarriorVariant('#1a1a1a', false, 'normal'); }
    createHojoUjiyasu() { return this.createGenericWarriorVariant('#2ecc71', true, 'thick'); }
    createHojoUjimasa() { return this.createGenericWarriorVariant('#2ecc71', false, 'normal'); }
    createImagawaYoshimoto() { return this.createGenericWarriorVariant('#e67e22', false, 'thick'); }
    createMoriMotonari() { return this.createGenericWarriorVariant('#16a085', true, 'normal'); }
    createKobayakawaTakakage() { return this.createGenericWarriorVariant('#16a085', false, 'normal'); }
    createKikkawaMotoharu() { return this.createGenericWarriorVariant('#16a085', true, 'thick'); }
    createShimazuYoshihisa() { return this.createGenericWarriorVariant('#e67e22', false, 'normal'); }
    createShimazuYoshihiro() { return this.createGenericWarriorVariant('#e67e22', true, 'thick'); }
    createSaitoDosan() { return this.createGenericWarriorVariant('#95a5a6', true, 'sharp'); }
    createAsaiNagamasa() { return this.createGenericWarriorVariant('#34495e', false, 'normal'); }
    createAshikagaYoshiaki() { return this.createGenericWarriorVariant('#d4af37', false, 'thin'); }
    createMiyoshiNagayoshi() { return this.createGenericWarriorVariant('#27ae60', false, 'normal'); }
    createUkitaNaoie() { return this.createGenericWarriorVariant('#8e44ad', false, 'normal'); }
    createOtomoSorin() { return this.createGenericWarriorVariant('#2980b9', false, 'normal'); }
    createRyuzojiTakanobu() { return this.createGenericWarriorVariant('#c0392b', true, 'thick'); }
    createKitabatakeTomonori() { return this.createGenericWarriorVariant('#7f8c8d', false, 'normal'); }
    createAsakuraYoshikage() { return this.createGenericWarriorVariant('#9b59b6', false, 'normal'); }
    createChosokabeMotochika() { return this.createGenericWarriorVariant('#1abc9c', true, 'normal'); }
    createMogamiYoshiaki() { return this.createGenericWarriorVariant('#3498db', true, 'thick'); }
    createSatomiYoshitaka() { return this.createGenericWarriorVariant('#e74c3c', false, 'normal'); }
    createTsutsuiJunkei() { return this.createGenericWarriorVariant('#f39c12', false, 'normal'); }
    createHatakeyamaTakamasa() { return this.createGenericWarriorVariant('#95a5a6', false, 'normal'); }
    createAkamatsuHarumasa() { return this.createGenericWarriorVariant('#c0392b', false, 'normal'); }
    createKonoMichinobu() { return this.createGenericWarriorVariant('#16a085', false, 'normal'); }
    createSagaraYoshihi() { return this.createGenericWarriorVariant('#e67e22', false, 'normal'); }
    createItoYoshisuke() { return this.createGenericWarriorVariant('#9b59b6', false, 'normal'); }
    createHonganjiKennyo() { return this.createGenericWarriorVariant('#f39c12', false, 'thin'); }
    createJinboNagamoto() { return this.createGenericWarriorVariant('#34495e', false, 'normal'); }
    createAnegakojiYoritsuna() { return this.createGenericWarriorVariant('#7f8c8d', false, 'normal'); }
    createSaigaMagoichi() { return this.createGenericWarriorVariant('#e74c3c', false, 'sharp'); }
    
    createGenericWarriorVariant(armorColor, hasBeard, eyebrowType) {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
            ${this.getDefs()}
            <rect width="300" height="300" fill="${armorColor}"/>
            <ellipse cx="150" cy="170" rx="54" ry="70" fill="url(#faceGrad)" filter="url(#shadow)"/>
            <path d="M 115 150 Q 125 ${eyebrowType === 'thick' ? '147' : '148'} 135 150" stroke="#2a1a10" stroke-width="${eyebrowType === 'thick' ? '4.5' : eyebrowType === 'thin' ? '2.5' : '3.5'}" fill="none" stroke-linecap="round"/>
            <path d="M 165 150 Q 175 ${eyebrowType === 'thick' ? '147' : '148'} 185 150" stroke="#2a1a10" stroke-width="${eyebrowType === 'thick' ? '4.5' : eyebrowType === 'thin' ? '2.5' : '3.5'}" fill="none" stroke-linecap="round"/>
            <ellipse cx="125" cy="163" rx="12" ry="10" fill="white"/>
            <ellipse cx="175" cy="163" rx="12" ry="10" fill="white"/>
            <circle cx="125" cy="164" r="6" fill="#1a0f0a"/>
            <circle cx="175" cy="164" r="6" fill="#1a0f0a"/>
            <circle cx="127" cy="162" r="2" fill="white" opacity="0.8"/>
            <circle cx="177" cy="162" r="2" fill="white" opacity="0.8"/>
            <path d="M 150 168 L 148 182 Q 150 184 152 182 Z" fill="#c8a882" stroke="#a68860" stroke-width="1.5"/>
            <path d="M 135 195 Q 150 198 165 195" stroke="#8b4513" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            ${hasBeard ? `
            <path d="M 140 198 Q 138 210 137 220" stroke="#2a1a10" stroke-width="2.5" fill="none"/>
            <path d="M 150 200 Q 150 215 150 225" stroke="#2a1a10" stroke-width="3" fill="none"/>
            <path d="M 160 198 Q 162 210 163 220" stroke="#2a1a10" stroke-width="2.5" fill="none"/>
            ` : ''}
            <rect x="80" y="225" width="140" height="75" fill="${armorColor}" stroke="#d4af37" stroke-width="2"/>
            <line x1="90" y1="240" x2="210" y2="240" stroke="#d4af37" stroke-width="1.5" opacity="0.6"/>
        </svg>`;
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
