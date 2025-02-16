document.addEventListener('DOMContentLoaded', function() {
    loadGame(); // Global oyun verilerini yükle
    
    const canvas = document.getElementById('wheel');
    const ctx = canvas.getContext('2d');
    const segments = 16;
    let currentRotation = 0;
    let isSpinning = false;
    let selectedColor = null;
    let currentBet = 0;

    // Sonuç geçmişini tut
    let resultHistory = JSON.parse(localStorage.getItem('wheelHistory') || '[]');
    
    function drawWheel() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(centerX, centerY) - 10;

        for (let i = 0; i < segments; i++) {
            const startAngle = (i * 2 * Math.PI) / segments + currentRotation;
            const endAngle = ((i + 1) * 2 * Math.PI) / segments + currentRotation;
            
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.closePath();
            
            ctx.fillStyle = i % 2 === 0 ? '#333' : '#ff4444';
            ctx.fill();
            ctx.strokeStyle = '#1a1d2b';
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(centerX, centerY, 10, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
    }

    function spin() {
        if (isSpinning || !selectedColor || currentBet <= 0) return;
        
        isSpinning = true;
        document.getElementById('spinButton').disabled = true;
        
        // Rastgele sonuç üret
        const isRed = Math.random() < 0.5;
        
        // Çarkın kaç tur döneceğini hesapla (4-5 tam tur)
        const fullSpins = 4 + Math.random();
        
        // Hedef segmenti belirle
        // Kırmızı için çift (0,2,4...), siyah için tek (1,3,5...) segmentler
        let targetSegment;
        if (isRed) {
            targetSegment = Math.floor(Math.random() * (segments/2)) * 2; // Çift sayılar
        } else {
            targetSegment = Math.floor(Math.random() * (segments/2)) * 2 + 1; // Tek sayılar
        }
        
        const segmentAngle = (2 * Math.PI) / segments;
        const targetAngle = segmentAngle * targetSegment;
        const totalRotation = (fullSpins * 2 * Math.PI) + targetAngle;
        
        // Animasyon parametreleri
        let startTime = null;
        const duration = 3000; // 3 saniye
        
        function animate(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;
            
            if (progress >= 1) {
                // Animasyon bitti
                currentRotation = totalRotation % (2 * Math.PI);
                drawWheel();
                isSpinning = false;
                document.getElementById('spinButton').disabled = false;
                
                // Sonucu kontrol et
                const finalSegment = Math.floor((currentRotation / (2 * Math.PI) * segments) % segments);
                const resultIsRed = finalSegment % 2 === 0;
                handleSpinResult(resultIsRed);
                return;
            }
            
            // Easing fonksiyonu - başta hızlı, sonda yavaş
            const easeOut = 1 - Math.pow(1 - progress, 3);
            currentRotation = (totalRotation * easeOut) % (2 * Math.PI);
            
            drawWheel();
            requestAnimationFrame(animate);
        }
        
        requestAnimationFrame(animate);
    }

    function handleSpinResult(isRed) {
        const result = isRed ? 'red' : 'black';
        const won = result === selectedColor;
        
        if (won) {
            const winAmount = currentBet * 2;
            money += winAmount;
            showNotification(`Kazandınız! +${winAmount}$`, 'success');
        } else {
            showNotification('Kaybettiniz!', 'error');
        }
        
        // Sonucu geçmişe ekle
        resultHistory.unshift(result);
        if (resultHistory.length > 10) resultHistory.pop();
        localStorage.setItem('wheelHistory', JSON.stringify(resultHistory));
        
        displayHistory();
        updateMoneyDisplay();
        saveGame();
        
        selectedColor = null;
        currentBet = 0;
    }

    // Geçmişi göster
    function displayHistory() {
        const container = document.getElementById('historyContainer');
        container.innerHTML = resultHistory.slice(-10).map(color => 
            `<div class="history-item ${color}"></div>`
        ).join('');
    }

    // Para işlemleri için global.js fonksiyonlarını kullan
    function updateBalance(amount) {
        money += amount;
        saveGame();
        updateMoneyDisplay();
    }

    // Diğer fonksiyonlar aynı kalacak, sadece para işlemleri güncellenecek
    // ...

    // Bahis kontrolleri
    document.getElementById('betRed').addEventListener('click', function() {
        const amount = parseInt(document.getElementById('betAmount').value);
        if (amount && amount <= money) {
            selectedColor = 'red';
            currentBet = amount;
            money -= amount;
            updateMoneyDisplay();
            saveGame();
            showNotification(`${amount}$ ile kırmızıya bahis yapıldı`, 'info');
        } else {
            showNotification('Yetersiz bakiye!', 'error');
        }
    });

    document.getElementById('betBlack').addEventListener('click', function() {
        const amount = parseInt(document.getElementById('betAmount').value);
        if (amount && amount <= money) {
            selectedColor = 'black';
            currentBet = amount;
            money -= amount;
            updateMoneyDisplay();
            saveGame();
            showNotification(`${amount}$ ile siyaha bahis yapıldı`, 'info');
        } else {
            showNotification('Yetersiz bakiye!', 'error');
        }
    });

    document.getElementById('spinButton').addEventListener('click', spin);

    // Sayfa yüklendiğinde geçmişi göster
    displayHistory();

    drawWheel();
}); 