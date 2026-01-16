// ========================================
// 地図のズーム・パン制御
// ========================================

class MapZoomControl {
    constructor(svgElement) {
        this.svg = svgElement;
        this.scale = 1;
        this.minScale = 0.5;
        this.maxScale = 3;
        this.translateX = 0;
        this.translateY = 0;
        this.isPanning = false;
        this.startX = 0;
        this.startY = 0;
        
        this.init();
    }
    
    init() {
        // マウスホイールでズーム
        this.svg.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? 0.9 : 1.1;
            this.zoom(delta, e.offsetX, e.offsetY);
        });
        
        // マウスドラッグでパン
        this.svg.addEventListener('mousedown', (e) => {
            // 国をクリックした場合はパン開始しない
            if (e.target.classList.contains('territory-shape')) {
                return;
            }
            this.isPanning = true;
            this.startX = e.clientX - this.translateX;
            this.startY = e.clientY - this.translateY;
            this.svg.style.cursor = 'grabbing';
        });
        
        this.svg.addEventListener('mousemove', (e) => {
            if (!this.isPanning) return;
            this.translateX = e.clientX - this.startX;
            this.translateY = e.clientY - this.startY;
            this.updateTransform();
        });
        
        this.svg.addEventListener('mouseup', () => {
            this.isPanning = false;
            this.svg.style.cursor = 'grab';
        });
        
        this.svg.addEventListener('mouseleave', () => {
            this.isPanning = false;
            this.svg.style.cursor = 'grab';
        });
        
        // タッチデバイス対応
        this.svg.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                const touch = e.touches[0];
                this.isPanning = true;
                this.startX = touch.clientX - this.translateX;
                this.startY = touch.clientY - this.translateY;
            }
        });
        
        this.svg.addEventListener('touchmove', (e) => {
            if (!this.isPanning || e.touches.length !== 1) return;
            e.preventDefault();
            const touch = e.touches[0];
            this.translateX = touch.clientX - this.startX;
            this.translateY = touch.clientY - this.startY;
            this.updateTransform();
        });
        
        this.svg.addEventListener('touchend', () => {
            this.isPanning = false;
        });
        
        this.svg.style.cursor = 'grab';
    }
    
    zoom(delta, centerX, centerY) {
        const newScale = Math.max(this.minScale, Math.min(this.maxScale, this.scale * delta));
        
        if (newScale !== this.scale) {
            const scaleDiff = newScale / this.scale;
            
            // ズーム中心点を基準に調整
            const rect = this.svg.getBoundingClientRect();
            const x = centerX - rect.left;
            const y = centerY - rect.top;
            
            this.translateX = x - (x - this.translateX) * scaleDiff;
            this.translateY = y - (y - this.translateY) * scaleDiff;
            this.scale = newScale;
            
            this.updateTransform();
        }
    }
    
    zoomIn() {
        this.zoom(1.2, this.svg.clientWidth / 2, this.svg.clientHeight / 2);
    }
    
    zoomOut() {
        this.zoom(0.8, this.svg.clientWidth / 2, this.svg.clientHeight / 2);
    }
    
    reset() {
        this.scale = 1;
        this.translateX = 0;
        this.translateY = 0;
        this.updateTransform();
    }
    
    updateTransform() {
        const g = this.svg.querySelector('#map-transform-group');
        if (g) {
            g.setAttribute('transform', `translate(${this.translateX}, ${this.translateY}) scale(${this.scale})`);
        }
    }
}

let mapZoomControl = null;

function initMapZoom() {
    const svg = document.getElementById('japan-map');
    if (svg && !mapZoomControl) {
        mapZoomControl = new MapZoomControl(svg);
    }
}
