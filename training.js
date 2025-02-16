// Enerji seviyesine göre sınıf döndüren fonksiyon
function getEnergyClass(energy) {
    if (!energy && energy !== 0) return 'energy-high'; // Enerji tanımlı değilse
    if (energy >= 80) return 'energy-high';
    if (energy >= 50) return 'energy-medium';
    return 'energy-low';
}

document.addEventListener('DOMContentLoaded', () => {
    loadGame();
    displayPlayerList();
    initializeTrainingSystem();
});

// Temel oyuncu özellikleri
const playerAttributes = {
    energy: 100
};

function initializeTrainingSystem() {
    // Her oyuncuya başlangıç enerji değeri ata
    myTeam.forEach(player => {
        if (typeof player.energy === 'undefined') {
            player.energy = 100;
        }
    });
    saveGame();
}

function displayPlayerList() {
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = '';

    myTeam.forEach(player => {
        // Enerji değeri tanımlı değilse 100 olarak ayarla
        if (typeof player.energy === 'undefined') {
            player.energy = 100;
        }

        const qualityClass = getQualityClass(player.quality);
        const playerCard = document.createElement('div');
        playerCard.className = `player-card ${qualityClass}`;
        
        playerCard.innerHTML = `
            <img src="${player.image}" alt="${player.name}" class="player-image">
            <h3 class="player-name">${player.name}</h3>
            <p class="player-position">${player.position}</p>
            <span class="quality-badge">${player.quality}</span>
            <p>Enerji: ${player.energy}%</p>
            <button onclick="selectPlayer('${player.name}')">Seç</button>
            
            <!-- Popup -->
            <div class="player-popup">
                <h3>${player.name}</h3>
                <div class="player-stats">
                    <!-- Enerji Durumu -->
                    <div class="stat-group">
                        <h4>Kondisyon</h4>
                        <div class="stat-item">
                            <span class="stat-label">Enerji</span>
                            <div class="stat-value energy-value ${getEnergyClass(player.energy)}">
                                ${player.energy}%
                            </div>
                        </div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Yaş</span>
                        <div class="stat-value">${player.age}</div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Pozisyon</span>
                        <div class="stat-value">${player.position}</div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Sayı</span>
                        <div class="stat-value">${player.points.toFixed(1)}</div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Ribaund</span>
                        <div class="stat-value">${player.rebounds.toFixed(1)}</div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Asist</span>
                        <div class="stat-value">${player.assists.toFixed(1)}</div>
                    </div>
                </div>
            </div>
        `;
        
        playerList.appendChild(playerCard);
    });
}

// Seçili oyuncuyu takip etmek için global değişken
let selectedPlayerId = null;

// Oyuncu seçim fonksiyonu
function selectPlayer(playerId) {
    selectedPlayerId = playerId;
    // Seçili oyuncuyu görsel olarak belirt
    document.querySelectorAll('.player-card').forEach(card => {
        card.classList.remove('selected');
    });
    document.querySelector(`[data-player-id="${playerId}"]`)?.classList.add('selected');
}

// Seçili oyuncuyu getir
function getSelectedPlayer() {
    if (!selectedPlayerId) {
        return null;
    }
    return myTeam.find(player => player.name === selectedPlayerId);
}

function saveGame() {
    // Tüm takımı kaydet
    localStorage.setItem('myTeam', JSON.stringify(myTeam));
}

function loadGame() {
    // Kaydedilmiş takımı yükle
    const savedTeam = localStorage.getItem('myTeam');
    if (savedTeam) {
        myTeam = JSON.parse(savedTeam);
    }
}

function startTraining(player, type) {
    if (money >= trainingCost) {
        money -= trainingCost;
        saveGame();
        updateMoneyDisplay(); // Bu fonksiyon artık global.js'den gelecek
        // ... diğer kodlar
    }
}

// Antrenman enerji maliyetlerini getir
function getEnergyCost(type) {
    const energyCosts = {
        'shooting': 20,
        'physical': 25,
        'agility': 15,
        'tactical': 15
    };
    return energyCosts[type] || 20;
}

function applyTrainingEffects(type) {
    // Başlangıç değerlerini kontrol et
    if (selectedPlayer.points === undefined) selectedPlayer.points = 0;
    if (selectedPlayer.rebounds === undefined) selectedPlayer.rebounds = 0;
    if (selectedPlayer.assists === undefined) selectedPlayer.assists = 0;

    const improvement = Math.random() * 2 + 1; // 1-3 arası rastgele gelişim
    
    switch(type) {
        case 'shooting':
            selectedPlayer.points += improvement;
            break;
        case 'physical':
            selectedPlayer.rebounds += improvement;
            break;
        case 'tactical':
            selectedPlayer.assists += improvement;
            break;
    }
}

function updateProgressDisplay(results) {
    const progressStats = document.getElementById('progress-stats');
    if (progressStats && results) {
        progressStats.innerHTML = `
            <div class="stat-change">
                ${results.offense > 0 ? `<p>Hücum: +${results.offense.toFixed(1)}</p>` : ''}
                ${results.defense > 0 ? `<p>Savunma: +${results.defense.toFixed(1)}</p>` : ''}
                ${results.points > 0 ? `<p>Sayı: +${results.points.toFixed(1)}</p>` : ''}
                ${results.rebounds > 0 ? `<p>Ribaund: +${results.rebounds.toFixed(1)}</p>` : ''}
                ${results.assists > 0 ? `<p>Asist: +${results.assists.toFixed(1)}</p>` : ''}
                ${results.steals > 0 ? `<p>Top Çalma: +${results.steals.toFixed(1)}</p>` : ''}
            </div>
        `;
    }
}

// Her gün enerjiyi yenile (24 saatte bir)
setInterval(() => {
    myTeam.forEach(player => {
        if (player.training && player.training.energy < 100) {
            player.training.energy = Math.min(100, player.training.energy + 10);
        }
    });
    if (selectedPlayerId) {
        updateProgressDisplay();
    }
    saveGame();
}, 86400000); // 24 saat

function updateAllDisplays(player) {
    // Mevcut göstergeleri güncelle
    updateProgressDisplay();
    
    // Beceri göstergelerini güncelle
    updateSkillDisplays(player);
    
    // Form ve kondisyon göstergelerini güncelle
    updateConditionDisplays(player);
}

function updateConditionDisplays(player) {
    // Form seviyesi
    const formLevel = document.getElementById('form-level');
    if (formLevel) {
        formLevel.style.width = `${player.form}%`;
    }

    // Moral seviyesi
    const moraleLevel = document.getElementById('morale-level');
    if (moraleLevel) {
        moraleLevel.style.width = `${player.morale}%`;
    }

    // Yorgunluk göstergesi
    const fatigueLevel = document.querySelector('.fatigue-level');
    if (fatigueLevel) {
        fatigueLevel.style.width = `${player.fatigue}%`;
        fatigueLevel.style.backgroundColor = player.fatigue > 80 ? 'red' : '#ffd700';
    }

    // Enerji barı
    const energyFill = document.querySelector('.energy-fill');
    if (energyFill) {
        energyFill.style.width = `${player.training.energy}%`;
    }
}

// Oyuncu ilerlemesini kaydet
function savePlayerProgress(player) {
    // myTeam'deki oyuncuyu güncelle
    const playerInTeam = myTeam.find(p => p.name === player.name);
    if (playerInTeam) {
        Object.assign(playerInTeam, player);
    }

    // Scout'tan gelen oyuncuları güncelle
    let scoutedPlayers = JSON.parse(localStorage.getItem('scoutedPlayers') || '[]');
    const scoutedIndex = scoutedPlayers.findIndex(p => p.name === player.name);
    if (scoutedIndex !== -1) {
        scoutedPlayers[scoutedIndex] = {...player};
        localStorage.setItem('scoutedPlayers', JSON.stringify(scoutedPlayers));
    }

    saveGame();
}

// UI güncellemeleri
function updatePlayerDisplay() {
    displayPlayerList();
}

// Antrenman sonuçlarını hesapla
function calculateTrainingResults(type, player) {
    const improvement = 0.5 + Math.random(); // 0.5-1.5 arası rastgele gelişim
    const results = {
        offense: 0,
        defense: 0,
        points: 0,
        rebounds: 0,
        assists: 0,
        steals: 0
    };

    switch(type) {
        case 'shooting':
            results.offense = improvement;
            results.points = improvement / 2;
            break;
        case 'physical':
            results.defense = improvement;
            results.rebounds = improvement / 2;
            break;
        case 'agility':
            results.steals = improvement / 3;
            results.assists = improvement / 3;
            break;
        case 'tactical':
            results.offense = improvement / 2;
            results.defense = improvement / 2;
            results.assists = improvement / 4;
            break;
    }

    return results;
}

// Antrenman sonuçlarını uygula
function applyTrainingResults(player, results) {
    // Mevcut değerleri kontrol et ve varsayılan değerler ata
    player.offense = player.offense || 0;
    player.defense = player.defense || 0;
    player.points = player.points || 0;
    player.rebounds = player.rebounds || 0;
    player.assists = player.assists || 0;
    player.steals = player.steals || 0;

    // Yeni değerleri uygula
    player.offense = Math.floor(Math.min(99, player.offense + results.offense));
    player.defense = Math.floor(Math.min(99, player.defense + results.defense));
    player.points = Math.max(player.points, player.points + results.points);
    player.rebounds = Math.max(player.rebounds, player.rebounds + results.rebounds);
    player.assists = Math.max(player.assists, player.assists + results.assists);
    player.steals = Math.max(player.steals, player.steals + results.steals);

    // İstatistikleri yuvarla
    player.points = Math.floor(player.points * 10) / 10;
    player.rebounds = Math.floor(player.rebounds * 10) / 10;
    player.assists = Math.floor(player.assists * 10) / 10;
    player.steals = Math.floor(player.steals * 10) / 10;

    // Enerji değerini kontrol et
    if (typeof player.energy === 'undefined') {
        player.energy = 100;
    }
}

// Para göstergesi ile ilgili eski kodları kaldır
function initializeTraining() {
    loadGame();
    displayPlayers();
    // updateMoneyDisplay(); -> Bu satırı kaldır çünkü global.js'de zaten çağrılıyor
}

// Eğer varsa özel money-display div'ini kaldır
document.querySelector('.money-display')?.remove(); 