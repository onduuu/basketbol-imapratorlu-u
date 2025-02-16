document.addEventListener('DOMContentLoaded', () => {
    loadGame();
    initializeMoneyDisplay();

    // Sadece index.html'de bu elementi ara
    const playerCardsContainer = document.getElementById('player-cards-container');
    if (playerCardsContainer) {
        playerCardsContainer.innerHTML = players.map(createPlayerCard).join('');
    }

    // Level container'ı ekle
    const header = document.querySelector('header');
    if (header) {
        const levelContainer = document.createElement('div');
        levelContainer.className = 'level-container';
        header.insertBefore(levelContainer, header.firstChild);
        updateLevelDisplay();
    }
});

// Oyuncu verilerini data.js'den alıyoruz
if (!localStorage.getItem('players')) {
    localStorage.setItem('players', JSON.stringify(initialPlayers));
}

let players = JSON.parse(localStorage.getItem('players')) || initialPlayers;
let myTeam = JSON.parse(localStorage.getItem('myTeam')) || [];
let money = parseInt(localStorage.getItem('money'), 10) || 6000000;

// Level sistemi için global değişkenler
let playerLevel = parseInt(localStorage.getItem('playerLevel')) || 1;
let playerXP = parseInt(localStorage.getItem('playerXP')) || 0;

function saveGame() {
    localStorage.setItem('players', JSON.stringify(players));
    localStorage.setItem('myTeam', JSON.stringify(myTeam));
    localStorage.setItem('money', money);
    console.log('Game data saved successfully.');
    console.log('Current myTeam:', myTeam);
}

function loadGame() {
    const storedPlayers = localStorage.getItem('players');
    const storedMyTeam = localStorage.getItem('myTeam');
    
    if (storedPlayers) {
        players = JSON.parse(storedPlayers);
    } else {
        players = initialPlayers;
        localStorage.setItem('players', JSON.stringify(players));
    }

    if (storedMyTeam) {
        myTeam = JSON.parse(storedMyTeam);
    } else {
        myTeam = [];
        localStorage.setItem('myTeam', JSON.stringify(myTeam));
    }

    money = parseInt(localStorage.getItem('money'), 10) || 9999999999;
    console.log('Game data loaded successfully.');
    console.log('Loaded myTeam:', myTeam);
}

function addPlayerToMyTeam(player) {
    if (!myTeam.some(p => p.name === player.name)) {
        // Oyuncunun tam bir kopyasını oluştur
        const playerCopy = JSON.parse(JSON.stringify(player));
        myTeam.push(playerCopy);
        
        // Oyuncuyu orijinal listeden kaldır
        players = players.filter(p => p.name !== player.name);
        
        // Değişiklikleri kaydet
        saveGame();
        console.log(`${player.name} added to My Team. Current team:`, myTeam);
        return true;
    } else {
        console.log(`${player.name} is already in My Team.`);
        return false;
    }
}

function updateMoney(amount) {
    money += amount;
    saveGame();
    console.log(`Money updated: $${money}`);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

function getQualityClass(quality) {
    // Kalite sınıfını belirle
    const qualityMap = {
        'S+': 'quality-S-plus',
        'S': 'quality-S',
        'S-': 'quality-S-minus',
        'A+': 'quality-A-plus',
        'A': 'quality-A',
        'A-': 'quality-A-minus',
        'B+': 'quality-B-plus',
        'B': 'quality-B',
        'B-': 'quality-B-minus',
        'C+': 'quality-C-plus',
        'C': 'quality-C',
        'C-': 'quality-C-minus',
        'D+': 'quality-D-plus',
        'D': 'quality-D',
        'D-': 'quality-D-minus'
    };
    
    return qualityMap[quality] || 'quality-D';
}

function createPlayerCard(player) {
    const qualityClass = getQualityClass(player.quality);
    const card = document.createElement('div');
    card.className = `player-card ${qualityClass}`;
    
    // Ana kart içeriği
    card.innerHTML = `
        <img src="${player.image}" alt="${player.name}" class="player-image">
        <h3 class="player-name">${player.name}</h3>
        <p class="player-position">${player.position}</p>
        <span class="quality-badge">${player.quality}</span>
        
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
                </div>

                <!-- Kontrat Bilgisi -->
                <div class="stat-group">
                    <h4>Kontrat</h4>
                    <div class="stat-item">
                        <span class="stat-label">Maaş</span>
                        <div class="stat-value">$${(player.salary/1000000).toFixed(1)}M</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

const playerCardsContainer = document.getElementById('player-cards-container');
playerCardsContainer.innerHTML = players.map(createPlayerCard).join('');

function getRatingClass(rating) {
    if (rating >= 75) {
        return 'high';
    } else if (rating >= 50) {
        return 'medium';
    } else {
        return 'low';
    }
}

// İlk 5'i güncelleme fonksiyonu
function updateMyTeamStartingFive(newStartingFive) {
    console.log('Updating Starting Five:', newStartingFive); // Debug için
    
    // İlk 5'i kontrol et ve eksik pozisyonları doldur
    const positions = ['PG', 'SG', 'SF', 'PF', 'C'];
    const validStartingFive = {};
    
    positions.forEach(pos => {
        if (newStartingFive[pos]) {
            validStartingFive[pos] = {
                name: newStartingFive[pos].name,
                position: pos,
                offense: newStartingFive[pos].offense,
                defense: newStartingFive[pos].defense,
                image: newStartingFive[pos].image
            };
        }
    });

    // İlk 5'i localStorage'a kaydet
    localStorage.setItem('startingFive', JSON.stringify(validStartingFive));
    console.log('Saved Starting Five:', validStartingFive); // Debug için
}

// Market'ten oyuncu alındığında
function buyPlayer(player) {
    // ... diğer kodlar ...

    // Eğer bu oyuncu ilk 5'e eklenecekse
    const startingFive = JSON.parse(localStorage.getItem('startingFive')) || {};
    startingFive[player.position] = player;
    updateMyTeamStartingFive(startingFive);
}

// Takım yönetimi ekranında ilk 5 değiştirildiğinde
function changeStartingLineup(position, player) {
    const startingFive = JSON.parse(localStorage.getItem('startingFive')) || {};
    startingFive[position] = player;
    updateMyTeamStartingFive(startingFive);
}

// İlk 5'i sıfırlama fonksiyonu
function resetStartingFive() {
    // İlk 5'i localStorage'dan sil
    localStorage.removeItem('startingFive');
    
    try {
        // Sahadan tüm oyuncuları kaldır ve bench'e ekle
        const positionSlots = document.querySelectorAll('.position-slot');
        const benchContainer = document.querySelector('.bench-slots');
        
        if (!benchContainer) {
            console.error('Bench container bulunamadı');
            return;
        }

        positionSlots.forEach(slot => {
            const playerCards = slot.querySelectorAll('.player-card');
            playerCards.forEach(playerCard => {
                if (playerCard) {
                    // Oyuncuyu bench'e taşı
                    benchContainer.appendChild(playerCard);
                    
                    // Drag & drop özelliklerini tekrar ekle
                    if (!playerCard.hasAttribute('draggable')) {
                        playerCard.setAttribute('draggable', 'true');
                    }
                    
                    // Event listener'ı sadece bir kez ekle
                    playerCard.removeEventListener('dragstart', drag);
                    playerCard.addEventListener('dragstart', drag);
                }
            });
        });

        // MyTeam'deki tüm oyuncuları bench'e al
        const myTeamData = JSON.parse(localStorage.getItem('myTeam')) || [];
        myTeamData.forEach(player => {
            player.isStarter = false;
            player.position = player.originalPosition || player.position;
        });
        localStorage.setItem('myTeam', JSON.stringify(myTeamData));

        // Pozisyon slotlarını temizle
        positionSlots.forEach(slot => {
            const label = slot.querySelector('.position-label');
            slot.innerHTML = '';
            if (label) {
                slot.appendChild(label);
            }
        });

        // Bench'i yeniden düzenle
        arrangeBench();

        // Kullanıcıya bilgi ver
        showNotification('İlk 5 sıfırlandı! Yeni ilk 5\'inizi belirleyebilirsiniz.');

    } catch (error) {
        console.error('Sıfırlama sırasında hata:', error);
        showNotification('Bir hata oluştu. Lütfen sayfayı yenileyin.');
    }
}

// Bench'i düzenlemek için yardımcı fonksiyon
function arrangeBench() {
    const benchContainer = document.querySelector('.bench-slots');
    const playerCards = benchContainer.querySelectorAll('.player-card');
    
    // Oyuncuları pozisyonlarına göre sırala
    const sortedCards = Array.from(playerCards);
    sortedCards.sort((a, b) => {
        const posA = a.getAttribute('data-position');
        const posB = b.getAttribute('data-position');
        const posOrder = { 'PG': 1, 'SG': 2, 'SF': 3, 'PF': 4, 'C': 5 };
        return posOrder[posA] - posOrder[posB];
    });

    // Sıralanmış oyuncuları bench'e yerleştir
    sortedCards.forEach(card => benchContainer.appendChild(card));
}

// XP hesaplama formülü: Bir sonraki levele geçmek için gereken XP
function getRequiredXP(level) {
    return Math.floor(100 * Math.pow(1.5, level - 1));
}

// XP ve Level güncelleme
function addXP(amount) {
    playerXP += amount;
    const requiredXP = getRequiredXP(playerLevel);
    
    // Level atlama kontrolü
    while (playerXP >= requiredXP) {
        playerXP -= requiredXP;
        playerLevel++;
        showLevelUpNotification();
    }
    
    // Verileri kaydet
    localStorage.setItem('playerLevel', playerLevel);
    localStorage.setItem('playerXP', playerXP);
    
    // UI güncelle
    updateLevelDisplay();
}

// Level göstergesini güncelle
function updateLevelDisplay() {
    const levelContainer = document.querySelector('.level-container');
    if (levelContainer) {
        const requiredXP = getRequiredXP(playerLevel);
        const xpPercentage = (playerXP / requiredXP) * 100;
        
        levelContainer.innerHTML = `
            <div class="level-info">
                <span class="level-number">Level ${playerLevel}</span>
                <div class="xp-bar">
                    <div class="xp-fill" style="width: ${xpPercentage}%"></div>
                </div>
                <span class="xp-text">${playerXP}/${requiredXP} XP</span>
            </div>
        `;
    }
}

// Level atlama bildirimi
function showLevelUpNotification() {
    const notification = document.createElement('div');
    notification.className = 'level-up-notification';
    notification.innerHTML = `
        <h3>Level Atladın!</h3>
        <p>Yeni Seviye: ${playerLevel}</p>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Para göstergesini tüm sayfalara ekleyen fonksiyon
function initializeMoneyDisplay() {
    // Önce mevcut para göstergesini kaldır (varsa)
    const existingDisplay = document.querySelector('.money-display');
    if (existingDisplay) {
        existingDisplay.remove();
    }

    // Yeni para göstergesini oluştur
    const moneyDisplay = document.createElement('div');
    moneyDisplay.className = 'money-display';
    moneyDisplay.innerHTML = `
        <span class="coin-icon">🪙</span><span id="money-amount">$0</span>
    `;
    document.body.appendChild(moneyDisplay);
    updateMoneyDisplay();
}

// Para göstergesini güncelleme fonksiyonu
function updateMoneyDisplay() {
    const moneyDisplay = document.getElementById('money-amount');
    if (moneyDisplay) {
        moneyDisplay.textContent = `$${money.toLocaleString()}`;
    }
}

// Oyun verilerini sıfırlama fonksiyonu
function resetGameData() {
    // Tüm yerel depolama verilerini temizle
    localStorage.removeItem('players');
    localStorage.removeItem('myTeam');
    localStorage.removeItem('money');
    localStorage.removeItem('playerLevel');
    localStorage.removeItem('playerXP');
    localStorage.removeItem('collectionTimes');
    localStorage.removeItem('wheelHistory');
    localStorage.removeItem('finances');
    localStorage.removeItem('scoutData');
    
    // Varsayılan değerleri ayarla
    players = initialPlayers;
    myTeam = [];
    money = 6000000;
    playerLevel = 1;
    playerXP = 0;
    
    // Yeni değerleri kaydet
    saveGame();
    
    // Sayfayı yenile
    window.location.reload();
}
