// ========================================
// オーディオシステム
// ========================================

class AudioManager {
    constructor() {
        this.bgmVolume = 0.3;
        this.seVolume = 0.5;
        this.currentBGM = null;
        this.audioContext = null;
        this.isMuted = false;
        
        // Web Audio APIの初期化
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Web Audio API not supported');
        }
    }
    
    // BGMの生成と再生
    playBGM(type = 'main') {
        if (this.isMuted) return;
        
        // 既存のBGMを停止
        if (this.currentBGM) {
            this.currentBGM.pause();
        }
        
        // シンプルなBGMを生成
        const audio = new Audio();
        audio.volume = this.bgmVolume;
        audio.loop = true;
        
        // data URIで簡単なメロディを作成（実際の音声ファイルがない場合の代替）
        const bgmData = this.generateBGM(type);
        audio.src = bgmData;
        
        audio.play().catch(e => {
            console.log('BGM playback failed:', e);
        });
        
        this.currentBGM = audio;
    }
    
    stopBGM() {
        if (this.currentBGM) {
            this.currentBGM.pause();
            this.currentBGM = null;
        }
    }
    
    // SEの再生
    playSE(type) {
        if (this.isMuted) return;
        
        const audio = new Audio();
        audio.volume = this.seVolume;
        
        const seData = this.generateSE(type);
        audio.src = seData;
        
        audio.play().catch(e => {
            console.log('SE playback failed:', e);
        });
    }
    
    // Web Audio APIを使用したBGM生成
    generateBGM(type) {
        if (!this.audioContext) return '';
        
        const duration = 30; // 30秒のループ
        const sampleRate = this.audioContext.sampleRate;
        const buffer = this.audioContext.createBuffer(1, sampleRate * duration, sampleRate);
        const data = buffer.getChannelData(0);
        
        // 和風のペンタトニックスケール（A, C, D, E, G）
        const scale = [440, 523.25, 587.33, 659.25, 783.99]; // A4, C5, D5, E5, G5
        
        // メロディパターン
        const melody = type === 'battle' 
            ? [0, 2, 4, 2, 1, 3, 4, 3, 2, 0, 1, 2] // 激しめ
            : [0, 1, 2, 1, 0, 3, 2, 1, 0, 4, 3, 2]; // 穏やかめ
        
        let noteIndex = 0;
        const noteDuration = sampleRate * 2; // 2秒/音
        
        for (let i = 0; i < data.length; i++) {
            const noteTime = Math.floor(i / noteDuration);
            const noteProgress = (i % noteDuration) / noteDuration;
            
            if (noteTime < melody.length) {
                const freq = scale[melody[noteTime]];
                const volume = 0.05 * Math.exp(-noteProgress * 2); // エンベロープ
                data[i] = volume * Math.sin(2 * Math.PI * freq * i / sampleRate);
            }
        }
        
        return this.bufferToWave(buffer);
    }
    
    // Web Audio APIを使用したSE生成
    generateSE(type) {
        if (!this.audioContext) return '';
        
        const sampleRate = this.audioContext.sampleRate;
        let duration = 0.3;
        let buffer, data;
        
        switch (type) {
            case 'click':
                duration = 0.1;
                buffer = this.audioContext.createBuffer(1, sampleRate * duration, sampleRate);
                data = buffer.getChannelData(0);
                for (let i = 0; i < data.length; i++) {
                    const t = i / sampleRate;
                    data[i] = 0.3 * Math.sin(2 * Math.PI * 800 * t) * Math.exp(-t * 20);
                }
                break;
                
            case 'select':
                duration = 0.15;
                buffer = this.audioContext.createBuffer(1, sampleRate * duration, sampleRate);
                data = buffer.getChannelData(0);
                for (let i = 0; i < data.length; i++) {
                    const t = i / sampleRate;
                    data[i] = 0.2 * Math.sin(2 * Math.PI * 600 * t) * Math.exp(-t * 15);
                }
                break;
                
            case 'battle':
                duration = 0.5;
                buffer = this.audioContext.createBuffer(1, sampleRate * duration, sampleRate);
                data = buffer.getChannelData(0);
                for (let i = 0; i < data.length; i++) {
                    const t = i / sampleRate;
                    const freq = 200 - t * 100; // 下降音
                    data[i] = 0.3 * (Math.random() * 0.5 + Math.sin(2 * Math.PI * freq * t)) * Math.exp(-t * 3);
                }
                break;
                
            case 'victory':
                duration = 1.0;
                buffer = this.audioContext.createBuffer(1, sampleRate * duration, sampleRate);
                data = buffer.getChannelData(0);
                const victoryNotes = [523.25, 659.25, 783.99, 1046.50]; // C, E, G, C (high)
                for (let i = 0; i < data.length; i++) {
                    const t = i / sampleRate;
                    const noteIndex = Math.floor(t * 4);
                    const freq = victoryNotes[Math.min(noteIndex, 3)];
                    data[i] = 0.2 * Math.sin(2 * Math.PI * freq * t) * Math.exp(-(t % 0.25) * 8);
                }
                break;
                
            case 'coin':
                duration = 0.3;
                buffer = this.audioContext.createBuffer(1, sampleRate * duration, sampleRate);
                data = buffer.getChannelData(0);
                for (let i = 0; i < data.length; i++) {
                    const t = i / sampleRate;
                    data[i] = 0.2 * Math.sin(2 * Math.PI * 1000 * t) * Math.exp(-t * 10);
                }
                break;
                
            case 'turn':
                duration = 0.4;
                buffer = this.audioContext.createBuffer(1, sampleRate * duration, sampleRate);
                data = buffer.getChannelData(0);
                for (let i = 0; i < data.length; i++) {
                    const t = i / sampleRate;
                    const freq = 400 + Math.sin(t * 10) * 50;
                    data[i] = 0.15 * Math.sin(2 * Math.PI * freq * t) * Math.exp(-t * 5);
                }
                break;
                
            default:
                duration = 0.2;
                buffer = this.audioContext.createBuffer(1, sampleRate * duration, sampleRate);
                data = buffer.getChannelData(0);
                for (let i = 0; i < data.length; i++) {
                    const t = i / sampleRate;
                    data[i] = 0.2 * Math.sin(2 * Math.PI * 440 * t) * Math.exp(-t * 10);
                }
        }
        
        return this.bufferToWave(buffer);
    }
    
    // AudioBufferをWAVデータURIに変換
    bufferToWave(buffer) {
        const length = buffer.length * buffer.numberOfChannels * 2;
        const arrayBuffer = new ArrayBuffer(44 + length);
        const view = new DataView(arrayBuffer);
        const channels = [];
        let offset = 0;
        let pos = 0;
        
        // WAVヘッダーを書き込み
        const setUint16 = (data) => {
            view.setUint16(pos, data, true);
            pos += 2;
        };
        const setUint32 = (data) => {
            view.setUint32(pos, data, true);
            pos += 4;
        };
        
        // "RIFF"
        setUint32(0x46464952);
        setUint32(36 + length);
        // "WAVE"
        setUint32(0x45564157);
        // "fmt "
        setUint32(0x20746d66);
        setUint32(16);
        setUint16(1); // PCM
        setUint16(buffer.numberOfChannels);
        setUint32(buffer.sampleRate);
        setUint32(buffer.sampleRate * 2 * buffer.numberOfChannels);
        setUint16(buffer.numberOfChannels * 2);
        setUint16(16);
        // "data"
        setUint32(0x61746164);
        setUint32(length);
        
        // チャンネルデータを書き込み
        for (let i = 0; i < buffer.numberOfChannels; i++) {
            channels.push(buffer.getChannelData(i));
        }
        
        while (pos < arrayBuffer.byteLength) {
            for (let i = 0; i < buffer.numberOfChannels; i++) {
                let sample = Math.max(-1, Math.min(1, channels[i][offset]));
                sample = sample < 0 ? sample * 0x8000 : sample * 0x7FFF;
                view.setInt16(pos, sample, true);
                pos += 2;
            }
            offset++;
        }
        
        // Base64エンコード
        const bytes = new Uint8Array(arrayBuffer);
        let binary = '';
        for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        const base64 = btoa(binary);
        
        return 'data:audio/wav;base64,' + base64;
    }
    
    setVolume(bgm, se) {
        this.bgmVolume = bgm;
        this.seVolume = se;
        if (this.currentBGM) {
            this.currentBGM.volume = bgm;
        }
    }
    
    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.isMuted) {
            this.stopBGM();
        }
        return this.isMuted;
    }
}

// グローバルインスタンス
const audioManager = new AudioManager();
