// Scout departmanı verileri
let scoutData = {
    level: 1,
    upgradeCost: 5000,
    discoveryRate: 60,
    accuracyRate: 70
};

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    loadScoutData();
    updateScoutUI();
});

// Scout verilerini yükle
function loadScoutData() {
    const savedData = localStorage.getItem('scoutData');
    if (savedData) {
        scoutData = JSON.parse(savedData);
    }
}

// Scout verilerini kaydet
function saveScoutData() {
    localStorage.setItem('scoutData', JSON.stringify(scoutData));
}

// UI'ı güncelle
function updateScoutUI() {
    document.getElementById('scout-level').textContent = scoutData.level;
    document.getElementById('upgrade-cost').textContent = scoutData.upgradeCost;
}

// Scout departmanını geliştir
function upgradeScout() {
    if (money >= scoutData.upgradeCost) {
        money -= scoutData.upgradeCost;
        scoutData.level++;
        scoutData.upgradeCost = Math.floor(scoutData.upgradeCost * 1.5);
        scoutData.discoveryRate += 5;
        scoutData.accuracyRate += 3;
        
        saveScoutData();
        updateScoutUI();
        updateMoneyDisplay();
        showNotification('Scout departmanı geliştirildi!');
    } else {
        showNotification('Yeterli paranız yok!');
    }
}

// Yerel oyuncu ara
function scoutLocal() {
    searchPlayers('local');
}

// Uluslararası oyuncu ara
function scoutInternational() {
    searchPlayers('international');
}

// Üniversite oyuncusu ara
function scoutCollege() {
    searchPlayers('college');
}

// Oyuncu arama fonksiyonu
function searchPlayers(type) {
    const discoveryChance = Math.random() * 100;
    
    if (discoveryChance <= scoutData.discoveryRate) {
        // Oyuncu bulundu
        const player = generateRandomPlayer(type);
        displayDiscoveredPlayer(player);
        showNotification('Yeni bir oyuncu keşfedildi!');
    } else {
        showNotification('Bu aramada bir oyuncu bulunamadı.');
    }
}

// Keşfedilen oyuncuyu göster
function displayDiscoveredPlayer(player) {
    const playersGrid = document.getElementById('discovered-players');
    const qualityClass = getQualityClass(player.quality);
    
    const playerCard = document.createElement('div');
    playerCard.className = `player-card ${qualityClass}`;
    
    playerCard.innerHTML = `
        <img src="${player.image || 'images/default_player.jpg'}" alt="${player.name}" class="player-image">
        <h3 class="player-name">${player.name}</h3>
        <p class="player-position">${player.position}</p>
        <span class="quality-badge">${player.quality}</span>
        <button onclick='recruitPlayer(${JSON.stringify(player).replace(/'/g, "&#39;")})'>Takıma Kat</button>
        
        <!-- Popup -->
        <div class="player-popup">
            <h3>${player.name}</h3>
            <p class="team">${player.team || 'Serbest Oyuncu'}</p>
            <div class="player-stats">
                <div class="stat-item">
                    <span class="stat-label">Yaş</span>
                    <div class="stat-value">${player.age}</div>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Pozisyon</span>
                    <div class="stat-value">${player.position}</div>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Potansiyel</span>
                    <div class="stat-value">${player.potential}</div>
                </div>
            </div>
        </div>
    `;
    
    playersGrid.appendChild(playerCard);
}

// Oyuncuyu takıma kat
function recruitPlayer(player) {
    try {
        // Oyuncuya gerekli özellikleri ekle
        const newPlayer = {
            ...player,
            points: Math.floor(Math.random() * 10) + 5,
            rebounds: Math.floor(Math.random() * 5) + 2,
            assists: Math.floor(Math.random() * 4) + 1,
            salary: 500000 + (player.potential * 10000),
            image: 'images/default_player.jpg',
            quality: calculateQuality(player.potential),
            team: 'MYTEAM'  // Takım adını ekle
        };

        // myTeam'e oyuncuyu ekle
        if (!myTeam) myTeam = [];
        myTeam.push(newPlayer);
        
        // Local storage'ı güncelle
        localStorage.setItem('myTeam', JSON.stringify(myTeam));
        
        // Bildirim göster
        showNotification(`${player.name} takıma katıldı!`);
        
        // Oyuncu kartını kaldır
        removePlayerCard(player);
        
        console.log('Oyuncu başarıyla eklendi:', newPlayer);
    } catch (error) {
        console.error('Oyuncu eklenirken hata oluştu:', error);
        showNotification('Oyuncu eklenirken bir hata oluştu');
    }
}

// Oyuncu kalitesini hesapla
function calculateQuality(potential) {
    if (potential >= 95) return 'S+';
    if (potential >= 90) return 'S';
    if (potential >= 85) return 'S-';
    if (potential >= 80) return 'A+';
    if (potential >= 75) return 'A';
    if (potential >= 70) return 'A-';
    if (potential >= 65) return 'B+';
    if (potential >= 60) return 'B';
    return 'B-';
}

// Oyuncu kartını kaldır
function removePlayerCard(player) {
    const playersGrid = document.getElementById('discovered-players');
    const cards = playersGrid.getElementsByClassName('player-card');
    
    for (let card of cards) {
        if (card.querySelector('h3').textContent === player.name) {
            card.remove();
            break;
        }
    }
}

// Rastgele oyuncu oluştur
function generateRandomPlayer(type) {
    const positions = ['PG', 'SG', 'SF', 'PF', 'C'];
    const names = [
        'John', 'Mike', 'Steve', 'David', 'James', 'Robert', 'Michael', 
        'William', 'Joseph', 'Thomas', 'Charles', 'Daniel', 'Matthew', 
        'Anthony', 'Donald', 'Mark', 'Paul', 'Steven', 'Andrew', 'Kenneth'
    ];
    const surnames = [
        'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller',
        'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez',
        'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'
    ];

    const position = positions[Math.floor(Math.random() * positions.length)];
    let ageRange, potentialRange, statsRange;

    switch(type) {
        case 'college':
            ageRange = { min: 18, max: 22 };
            potentialRange = { min: 75, max: 95 };
            statsRange = { min: 12, max: 22 }; // Yüksek potansiyelli genç oyuncular
            break;
        case 'international':
            ageRange = { min: 18, max: 28 };
            potentialRange = { min: 70, max: 90 };
            statsRange = { min: 14, max: 25 }; // Tecrübeli uluslararası oyuncular
            break;
        default: // local
            ageRange = { min: 19, max: 25 };
            potentialRange = { min: 65, max: 85 };
            statsRange = { min: 10, max: 20 }; // Standart yerel oyuncular
    }

    // Pozisyona göre istatistik ağırlıkları
    let statMultipliers = {
        PG: { points: 1.2, assists: 1.8, rebounds: 0.6, steals: 1.3, blocks: 0.3 },
        SG: { points: 1.5, assists: 1.2, rebounds: 0.8, steals: 1.2, blocks: 0.4 },
        SF: { points: 1.3, assists: 0.9, rebounds: 1.1, steals: 1.1, blocks: 0.7 },
        PF: { points: 1.2, assists: 0.6, rebounds: 1.4, steals: 0.8, blocks: 1.2 },
        C:  { points: 1.1, assists: 0.4, rebounds: 1.6, steals: 0.6, blocks: 1.5 }
    };

    const multiplier = statMultipliers[position];
    const baseStats = {
        points: (Math.random() * (statsRange.max - statsRange.min) + statsRange.min) * multiplier.points,
        rebounds: (Math.random() * (statsRange.max - statsRange.min) + statsRange.min) * multiplier.rebounds,
        assists: (Math.random() * (statsRange.max - statsRange.min) + statsRange.min) * multiplier.assists,
        steals: (Math.random() * 3) * multiplier.steals,
        blocks: (Math.random() * 2.5) * multiplier.blocks,
        turnovers: Math.random() * 3 + 1,
        fouls: Math.random() * 3 + 1
    };

    // Kalite hesaplama
    const potential = Math.floor(Math.random() * (potentialRange.max - potentialRange.min + 1)) + potentialRange.min;

    // Hücum ve savunma değerlerini data.js'deki mantığa göre hesaplayalım
    const offense = Math.floor(
        (baseStats.points * 2.5 + // Sayı ağırlığı
        baseStats.assists * 1.5 + // Asist ağırlığı
        (100 - baseStats.turnovers * 3)) / 4 // Top kayıpları negatif etki
    );

    const defense = Math.floor(
        (baseStats.rebounds * 2 + // Ribaund ağırlığı
        baseStats.steals * 2.5 + // Top çalma ağırlığı
        baseStats.blocks * 2 + // Blok ağırlığı
        (100 - baseStats.fouls * 2)) / 7 // Faul negatif etki
    );

    const quality = calculateQuality(offense, defense);

    return {
        name: `${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}`,
        position: position,
        team: 'Scout',
        age: Math.floor(Math.random() * (ageRange.max - ageRange.min + 1)) + ageRange.min,
        points: parseFloat(baseStats.points.toFixed(1)),
        rebounds: parseFloat(baseStats.rebounds.toFixed(1)),
        assists: parseFloat(baseStats.assists.toFixed(1)),
        steals: parseFloat(baseStats.steals.toFixed(1)),
        blocks: parseFloat(baseStats.blocks.toFixed(1)),
        turnovers: parseFloat(baseStats.turnovers.toFixed(1)),
        fouls: parseFloat(baseStats.fouls.toFixed(1)),
        salary: Math.floor(((potential + offense + defense) / 3) * 100000), // Maaş hesaplaması da güncellendi
        quality: quality,
        offense: Math.min(99, Math.max(30, offense)), // Minimum 30, maksimum 99
        defense: Math.min(99, Math.max(30, defense)), // Minimum 30, maksimum 99
        potential: potential,
        image: 'default_player.jpg',
        type: type
    };
}

// Kalite hesaplama yardımcı fonksiyonu
function calculateQuality(offense, defense) {
    const overall = (offense + defense) / 2;
    
    if (overall >= 85) return 'S+';
    if (overall >= 80) return 'S';
    if (overall >= 75) return 'S-';
    if (overall >= 70) return 'A+';
    if (overall >= 65) return 'A';
    if (overall >= 60) return 'A-';
    if (overall >= 55) return 'B+';
    if (overall >= 50) return 'B';
    if (overall >= 45) return 'B-';
    if (overall >= 40) return 'C+';
    if (overall >= 35) return 'C';
    if (overall >= 30) return 'C-';
    if (overall >= 25) return 'D+';
    if (overall >= 20) return 'D';
    return 'D-';
}

function createPlayerCard(player) {
    const qualityClass = getQualityClass(player.quality);
    const playerDiv = document.createElement('div');
    playerDiv.className = `player-card ${qualityClass}`;
    
    playerDiv.innerHTML = `
        <img src="${player.image}" alt="${player.name}" class="player-image">
        <h3 class="player-name">${player.name}</h3>
        <p class="player-position">${player.position}</p>
        <span class="quality-badge">${player.quality}</span>
        <button class="scout-player" data-name="${player.name}">Scout Et</button>
        
        <!-- Genişletilmiş Popup -->
        <div class="player-popup">
            <h3>${player.name}</h3>
            <p class="team">${player.team}</p>
            <div class="player-stats">
                <!-- Temel Bilgiler -->
                <div class="stat-group">
                    <h4>Temel Bilgiler</h4>
                    <div class="stat-item">
                        <span class="stat-label">Yaş</span>
                        <div class="stat-value">${player.age}</div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Pozisyon</span>
                        <div class="stat-value">${player.position}</div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Takım</span>
                        <div class="stat-value">${player.team}</div>
                    </div>
                </div>

                <!-- Hücum İstatistikleri -->
                <div class="stat-group">
                    <h4>Hücum İstatistikleri</h4>
                    <div class="stat-item">
                        <span class="stat-label">Sayı</span>
                        <div class="stat-value">${player.points.toFixed(1)}</div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Asist</span>
                        <div class="stat-value">${player.assists.toFixed(1)}</div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Top Kaybı</span>
                        <div class="stat-value">${player.turnovers.toFixed(1)}</div>
                    </div>
                </div>

                <!-- Savunma İstatistikleri -->
                <div class="stat-group">
                    <h4>Savunma İstatistikleri</h4>
                    <div class="stat-item">
                        <span class="stat-label">Ribaund</span>
                        <div class="stat-value">${player.rebounds.toFixed(1)}</div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Top Çalma</span>
                        <div class="stat-value">${player.steals.toFixed(1)}</div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Faul</span>
                        <div class="stat-value">${player.fouls.toFixed(1)}</div>
                    </div>
                </div>

                <!-- Genel Değerlendirme -->
                <div class="stat-group">
                    <h4>Genel Değerlendirme</h4>
                    <div class="stat-item">
                        <span class="stat-label">Hücum</span>
                        <div class="stat-value rating-${getRatingClass(player.offense)}">${player.offense}</div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Savunma</span>
                        <div class="stat-value rating-${getRatingClass(player.defense)}">${player.defense}</div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Kalite</span>
                        <div class="stat-value">${player.quality}</div>
                    </div>
                </div>

                <!-- Potansiyel -->
                <div class="stat-group">
                    <h4>Scout Raporu</h4>
                    <div class="stat-item">
                        <span class="stat-label">Potansiyel</span>
                        <div class="stat-value rating-${getRatingClass(player.potential)}">${player.potential}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return playerDiv;
}

function scoutPlayer(player) {
    if (scoutData.budget >= SCOUT_COST) {
        if (addPlayerToMyTeam(player)) {
            scoutData.budget -= SCOUT_COST;
            saveScoutData();
            showNotification(`${player.name} başarıyla takıma katıldı!`);
            updateScoutDisplay();
        } else {
            showNotification('Bu oyuncu zaten takımınızda!');
        }
    } else {
        showNotification('Yeterli scout bütçeniz yok!');
    }
}

// İlk 5'i kaydetme fonksiyonu (scouting.js'de olmalı)
function saveStartingFive() {
    const startingFive = {
        PG: selectedPlayers.find(p => p.position === 'PG'),
        SG: selectedPlayers.find(p => p.position === 'SG'),
        SF: selectedPlayers.find(p => p.position === 'SF'),
        PF: selectedPlayers.find(p => p.position === 'PF'),
        C: selectedPlayers.find(p => p.position === 'C')
    };
    
    localStorage.setItem('startingFive', JSON.stringify(startingFive));
    alert('İlk 5 kaydedildi!');
} 