let superMarketPlayers = [];
const REFRESH_INTERVAL = 600000; // 10 dakika (milisaniye cinsinden)
const PLAYERS_PER_REFRESH = 5;

// Oyuncu kalitesini hesapla
function calculateQuality(offense, defense, points) {
    // NBA yıldızları için özel kontrol (15+ sayı ortalaması olan herkes)
    if (points > 15) {
        return 'X'; // Tüm NBA yıldızları için X kalitesi
    }
    
    const overallRating = (offense + defense) / 2;
    
    if (overallRating >= 200) return 'S';
    if (overallRating >= 190) return 'S-';
    if (overallRating >= 175) return 'A';
    if (overallRating >= 160) return 'A-';
    if (overallRating >= 145) return 'B';
    if (overallRating >= 130) return 'B-';
    if (overallRating >= 115) return 'C';
    if (overallRating >= 100) return 'C-';
    return 'D';
}

// CSV'den oyuncuları dönüştür
function convertCSVToPlayers(csvData) {
    const lines = csvData.split('\n').slice(1);
    return lines
        .filter(line => line.trim())
        .map(line => {
            const [
                _,
                player_name,
                team,
                age,
                height,
                weight,
                college,
                country,
                draft_year,
                draft_round,
                draft_number,
                games_played,
                points,
                rebounds,
                assists,
                net_rating,
                oreb_pct,
                dreb_pct,
                usg_pct,
                ts_pct,
                ast_pct,
                season
            ] = line.split(',');

            // Temel istatistikleri parse et
            const parsedPoints = parseFloat(points) || 0;
            const parsedAssists = parseFloat(assists) || 0;
            const parsedRebounds = parseFloat(rebounds) || 0;
            const parsedUsageRate = parseFloat(usg_pct) || 0;

            // Top çalma tahminini hesapla (oyuncunun agresifliğine ve pozisyonuna göre)
            const estimatedSteals = calculateEstimatedSteals(
                parsedPoints,
                parsedAssists,
                determinePosition(height, weight)
            );

            // Top kaybı tahminini hesapla (kullanım oranı ve asist sayısına göre)
            const estimatedTurnovers = calculateEstimatedTurnovers(
                parsedPoints,
                parsedAssists,
                parsedUsageRate
            );

            // Faul tahminini hesapla (pozisyon ve oyun stiline göre)
            const estimatedFouls = calculateEstimatedFouls(
                parsedRebounds,
                determinePosition(height, weight),
                parsedPoints
            );

            // Hücum ve savunma değerlerini hesapla
            const offense = calculateOffenseRating(
                parsedPoints,
                parsedAssists,
                parseFloat(ts_pct) || 0
            );

            const defense = calculateDefenseRating(
                parsedRebounds,
                estimatedSteals,
                estimatedFouls,
                parseFloat(net_rating) || 0
            );

            // Kalite değerini hesapla
            const quality = calculateQuality(offense, defense, parsedPoints);

            return {
                name: player_name,
                team: team,
                position: determinePosition(height, weight),
                age: parseFloat(age) || 0,
                points: parsedPoints,
                rebounds: parsedRebounds,
                assists: parsedAssists,
                steals: estimatedSteals,
                turnovers: estimatedTurnovers,
                fouls: estimatedFouls,
                image: `images/players/default.jpg`,
                offense: offense,
                defense: defense,
                quality: quality,
                stats: {
                    gamesPlayed: parseInt(games_played) || 0,
                    netRating: parseFloat(net_rating) || 0,
                    usageRate: parsedUsageRate,
                    trueShootingPct: parseFloat(ts_pct) || 0,
                    offense: offense,
                    defense: defense,
                    steals: estimatedSteals,
                    turnovers: estimatedTurnovers,
                    fouls: estimatedFouls
                }
            };
        });
}

// Hücum değeri hesapla (90-220 arası)
function calculateOffenseRating(points, assists, ts_pct) {
    // Temel puanlama
    const baseRating = 90;
    
    // Sayı katkısı (0-70 puan)
    const pointsBonus = Math.min(70, points * 2.5);
    
    // Asist katkısı (0-35 puan)
    const assistsBonus = Math.min(35, assists * 3);
    
    // Şut isabet katkısı (0-25 puan)
    const efficiencyBonus = Math.min(25, parseFloat(ts_pct) * 40);
    
    // Toplam hücum değeri
    const totalRating = baseRating + pointsBonus + assistsBonus + efficiencyBonus;
    
    // Süper yıldızlar için ekstra bonus (25+ sayı ortalaması için)
    const superstarBonus = points >= 25 ? 20 : 0;
    
    return Math.min(220, Math.round(totalRating + superstarBonus));
}

// Savunma değeri hesapla (90-220 arası)
function calculateDefenseRating(rebounds, steals, fouls, net_rating) {
    // Temel puanlama
    const baseRating = 90;
    
    // Ribaund katkısı (0-45 puan)
    const reboundsBonus = Math.min(45, rebounds * 3.5);
    
    // Top çalma katkısı (0-35 puan)
    const stealsBonus = Math.min(35, (steals || 0) * 8);
    
    // Blok katkısı (0-35 puan)
    const blocksBonus = Math.min(35, (fouls || 0) * 8);
    
    // Net rating katkısı (0-15 puan)
    const ratingBonus = Math.min(15, (parseFloat(net_rating) + 10) * 1.5);
    
    // Toplam savunma değeri
    const totalRating = baseRating + reboundsBonus + stealsBonus + blocksBonus + ratingBonus;
    
    // Süper defansçılar için ekstra bonus (10+ ribaund veya 2+ blok için)
    const superDefenderBonus = (rebounds >= 10 || (fouls || 0) >= 2) ? 20 : 0;
    
    return Math.min(220, Math.round(totalRating + superDefenderBonus));
}

// Pozisyon belirle
function determinePosition(height, weight) {
    const h = parseFloat(height);
    if (h < 195) return 'PG';
    if (h < 200) return 'SG';
    if (h < 205) return 'SF';
    if (h < 210) return 'PF';
    return 'C';
}

// Para formatla (Dolar için)
function formatMoney(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Süper market oyuncularını göster
function displaySuperMarketPlayers() {
    const container = document.querySelector('.super-market-container');
    if (!container) {
        console.error('Süper market container bulunamadı');
        return;
    }
    container.innerHTML = '';
    
    superMarketPlayers.forEach(player => {
        const card = createSuperMarketCard(player);
        container.appendChild(card);
    });
}

// Süper market kartı oluştur
function createSuperMarketCard(player) {
    const card = document.createElement('div');
    card.className = 'super-market-card';
    
    card.innerHTML = `
        <div class="discount-badge">%${player.discountPercentage} İNDİRİM</div>
        <div class="quality-badge ${player.quality.toLowerCase()}">${player.quality}</div>
        <img src="${player.image}" alt="${player.name}" class="player-image">
        <h3>${player.name}</h3>
        <p class="player-position">${player.position}</p>
        <div class="player-stats">
            <span>Sayı: ${player.points.toFixed(1)}</span>
            <span>Asist: ${player.assists.toFixed(1)}</span>
            <span>Ribaund: ${player.rebounds.toFixed(1)}</span>
        </div>
        <div class="price-section">
            <span class="original-price">${formatMoney(player.originalPrice)}</span>
            <span class="discounted-price">${formatMoney(player.discountedPrice)}</span>
        </div>
        <div class="ratings-section">
            <div class="rating offense">
                <span>Hücum</span>
                <span class="rating-value">${player.offense}</span>
            </div>
            <div class="rating defense">
                <span>Savunma</span>
                <span class="rating-value">${player.defense}</span>
            </div>
        </div>
        <button class="buy-button" onclick="buySuperMarketPlayer('${player.name}')">Satın Al</button>
        <button class="stats-button" onclick="showPlayerStats(this)">İstatistikler</button>
        
        <!-- Detaylı İstatistik Popup -->
        <div class="player-stats-popup">
            <div class="stats-header">
                <img src="${player.image}" alt="${player.name}">
                <div class="player-info">
                    <h3>${player.name}</h3>
                    <p>${player.team}</p>
                    <p class="position">${player.position}</p>
                </div>
            </div>
            
            <div class="stats-grid">
                <div class="stats-column">
                    <h4>Hücum (${player.offense})</h4>
                    <div class="stat-item">
                        <label>Sayı:</label>
                        <span>${player.points.toFixed(1)}</span>
                    </div>
                    <div class="stat-item">
                        <label>Asist:</label>
                        <span>${player.assists.toFixed(1)}</span>
                    </div>
                    <div class="stat-item">
                        <label>Şut Yüzdesi:</label>
                        <span>${(player.stats.trueShootingPct * 100).toFixed(1)}%</span>
                    </div>
                </div>
                
                <div class="stats-column">
                    <h4>Savunma (${player.defense})</h4>
                    <div class="stat-item">
                        <label>Ribaund:</label>
                        <span>${player.rebounds.toFixed(1)}</span>
                    </div>
                    <div class="stat-item">
                        <label>Top Çalma:</label>
                        <span>${player.steals || 0}</span>
                    </div>
                    <div class="stat-item">
                        <label>Blok:</label>
                        <span>${player.fouls || 0}</span>
                    </div>
                </div>
                
                <div class="stats-column">
                    <h4>Genel</h4>
                    <div class="stat-item">
                        <label>Maç Sayısı:</label>
                        <span>${player.stats.gamesPlayed}</span>
                    </div>
                    <div class="stat-item">
                        <label>Net Rating:</label>
                        <span>${player.stats.netRating.toFixed(1)}</span>
                    </div>
                    <div class="stat-item">
                        <label>Kullanım Oranı:</label>
                        <span>${(player.stats.usageRate * 100).toFixed(1)}%</span>
                    </div>
                </div>
            </div>
            
            <button class="close-popup" onclick="hidePlayerStats(this)">Kapat</button>
        </div>
    `;
    
    return card;
}

// Geri sayım sayacı
function startRefreshTimer() {
    const timerElement = document.getElementById('timer');
    let timeLeft = REFRESH_INTERVAL / 1000;
    
    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft > 0) {
            timeLeft--;
            setTimeout(updateTimer, 1000);
        }
    }
    
    updateTimer();
}

// Oyuncu satın alma fonksiyonu
function buySuperMarketPlayer(playerName) {
    const player = superMarketPlayers.find(p => p.name === playerName);
    if (!player) return;
    
    if (money >= player.discountedPrice) {
        if (addPlayerToMyTeam(player)) {
            money -= player.discountedPrice;
            saveGame();
            updateMoneyDisplay();
            showNotification(`${player.name} başarıyla satın alındı!`);
        }
    } else {
        showNotification('Yeterli paranız yok!', 'error');
    }
}

// Rastgele oyuncu seç
function getRandomPlayers(allPlayers, count) {
    const shuffled = [...allPlayers].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// İndirimli fiyat hesapla (%5-%50 arası, düşük indirimler daha olası)
function calculateDiscountedPrice(player) {
    // Temel fiyatı hesapla
    const originalPrice = calculatePlayerPrice(player);
    
    // Üstel dağılım için rastgele sayı (0-1 arası)
    const rand = Math.random();
    
    // İndirim aralıkları ve olasılıkları
    // rand değeri küçüldükçe indirim yüzdesinin artması için üstel fonksiyon kullanıyoruz
    const minDiscount = 0.05; // %5
    const maxDiscount = 0.50; // %50
    
    // Üstel dağılım formülü (3 üssü daha keskin bir eğri oluşturur)
    const discount = minDiscount + (maxDiscount - minDiscount) * Math.pow(rand, 3);
    
    // İndirimli fiyatı hesapla
    const discountedPrice = Math.round(originalPrice * (1 - discount));
    
    return {
        originalPrice: originalPrice,
        discountedPrice: discountedPrice,
        discountPercentage: Math.round(discount * 100)
    };
}

// Süper market oyuncularını yenile
async function refreshSuperMarketPlayers() {
    try {
        const response = await fetch('data/all_seasons.csv');
        const data = await response.text();
        const players = convertCSVToPlayers(data);
        
        // Kaliteli oyuncuları filtrele (örnek: points > 15)
        const qualityPlayers = players.filter(p => p.points > 15);
        
        // Rastgele 5 oyuncu seç
        superMarketPlayers = getRandomPlayers(qualityPlayers, PLAYERS_PER_REFRESH);
        
        // Oyunculara özel indirimli fiyat ekle
        superMarketPlayers = superMarketPlayers.map(player => {
            const priceInfo = calculateDiscountedPrice(player);
            return {
                ...player,
                originalPrice: priceInfo.originalPrice,
                discountedPrice: priceInfo.discountedPrice,
                discountPercentage: priceInfo.discountPercentage
            };
        });
        
        displaySuperMarketPlayers();
    } catch (error) {
        console.error('Süper market oyuncuları yüklenirken hata:', error);
    }
}

// Oyuncu fiyatını hesapla
function calculatePlayerPrice(player) {
    // Hücum ve savunma değerlerinin ortalamasını al
    const overallRating = (player.offense + player.defense) / 2;
    
    // Temel fiyat (en yüksek rating için 5M$)
    const maxRating = 220; // Maksimum olabilecek rating
    const maxPrice = 5000000; // 5M$
    
    // Rating'e göre fiyat hesapla (doğrusal azalma)
    let price = (overallRating / maxRating) * maxPrice;
    
    // İstatistik bonusları (daha küçük etkiler)
    const statsBonus = (
        (player.points * 10000) +     // Her sayı için 10,000$
        (player.rebounds * 7500) +     // Her ribaund için 7,500$
        (player.assists * 8500)        // Her asist için 8,500$
    );

    // Toplam fiyat
    price += statsBonus;

    // Minimum ve maximum fiyat sınırları
    const minPrice = 500000;    // 500K$
    const maxPriceLimit = 5000000;   // 5M$

    // Fiyat aralıkları:
    // 200+ rating: ~4.5M - 5M$
    // 180-199 rating: ~3.5M - 4.5M$
    // 160-179 rating: ~2.5M - 3.5M$
    // 140-159 rating: ~1.5M - 2.5M$
    // <140 rating: 500K - 1.5M$

    return Math.min(Math.max(Math.round(price), minPrice), maxPriceLimit);
}

// Popup göster/gizle fonksiyonları
function showPlayerStats(button) {
    const card = button.closest('.super-market-card');
    const popup = card.querySelector('.player-stats-popup');
    popup.classList.add('show');
}

function hidePlayerStats(button) {
    const popup = button.closest('.player-stats-popup');
    popup.classList.remove('show');
}

// Süper market oyuncularını yükle ve göster
async function initializeSuperMarket() {
    const supermarketSection = document.getElementById('supermarket-section');
    if (!supermarketSection) return;

    supermarketSection.innerHTML = `
        <div id="super-market">
            <h2 class="super-market-title">Süper Market</h2>
            <div class="refresh-timer">Yenileme: <span id="timer">10:00</span></div>
            <div class="super-market-container"></div>
        </div>
    `;

    // İlk oyuncuları yükle
    await refreshSuperMarketPlayers();
    
    // Zamanlayıcıyı başlat
    startRefreshTimer();
    
    // 10 dakikada bir yenile
    setInterval(refreshSuperMarketPlayers, REFRESH_INTERVAL);
}

// Sayfa yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initializeSuperMarket, 1000);
});

// Top çalma tahmini
function calculateEstimatedSteals(points, assists, position) {
    let baseSteal = 0.8; // Temel top çalma
    
    // Pozisyona göre ayarlama
    switch(position) {
        case 'PG': baseSteal += 0.5; break; // Point guardlar daha fazla top çalar
        case 'SG': baseSteal += 0.4; break;
        case 'SF': baseSteal += 0.3; break;
        case 'PF': baseSteal += 0.2; break;
        case 'C': baseSteal += 0.1; break;
    }

    // Skor ve asist katkısı (agresif oyuncular daha fazla top çalar)
    const scoringImpact = points * 0.03;
    const assistImpact = assists * 0.05;

    // Rastgele varyasyon ekle (±0.3)
    const variation = (Math.random() * 0.6) - 0.3;

    return Number((baseSteal + scoringImpact + assistImpact + variation).toFixed(1));
}

// Top kaybı tahmini
function calculateEstimatedTurnovers(points, assists, usageRate) {
    // Temel top kaybı (kullanım oranına göre)
    let baseTurnover = (usageRate / 100) * 2;
    
    // Sayı ve asist etkisi
    const scoringImpact = points * 0.05;
    const assistImpact = assists * 0.08;

    // Top kaybını hesapla (daha fazla top kullanan oyuncular daha fazla top kaybeder)
    let estimatedTurnover = baseTurnover + scoringImpact + assistImpact;

    // Makul bir aralıkta tut
    estimatedTurnover = Math.min(Math.max(estimatedTurnover, 1), 5);

    // Rastgele varyasyon ekle (±0.5)
    const variation = (Math.random() * 1) - 0.5;

    return Number((estimatedTurnover + variation).toFixed(1));
}

// Faul tahmini
function calculateEstimatedFouls(rebounds, position, points) {
    let baseFoul = 2.0; // Temel faul sayısı

    // Pozisyona göre ayarlama
    switch(position) {
        case 'C': baseFoul += 0.8; break;  // Pivotlar daha fazla faul yapar
        case 'PF': baseFoul += 0.6; break;
        case 'SF': baseFoul += 0.4; break;
        case 'SG': baseFoul += 0.2; break;
        case 'PG': baseFoul += 0.1; break;
    }

    // Ribaund etkisi (daha fazla ribaund alan oyuncular daha fazla faul yapar)
    const reboundImpact = rebounds * 0.05;
    
    // Skor etkisi (daha agresif oyuncular daha fazla faul yapar)
    const scoringImpact = points * 0.02;

    // Rastgele varyasyon ekle (±0.4)
    const variation = (Math.random() * 0.8) - 0.4;

    let estimatedFoul = baseFoul + reboundImpact + scoringImpact + variation;
    
    // Makul bir aralıkta tut
    return Number(Math.min(Math.max(estimatedFoul, 1.5), 4.5).toFixed(1));
} 