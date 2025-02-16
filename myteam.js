document.addEventListener('DOMContentLoaded', () => {
    loadGame();
    initializeTeam();
    loadTeamPositions();

    // Pozisyon slotlarına sürükleme olaylarını ekle
    const positionSlots = document.querySelectorAll('.position-slot');
    positionSlots.forEach(slot => {
        slot.addEventListener('dragover', handleDragOver);
        slot.addEventListener('dragleave', handleDragLeave);
        slot.addEventListener('drop', handleDrop);
    });
});

function initializeTeam() {
    console.log('Initializing team with:', myTeam);
    const benchContainer = document.getElementById('benchSlots');
    if (!benchContainer) {
        console.error('Bench container not found!');
        return;
    }
    
    // Bench'i temizle
    benchContainer.innerHTML = '';
    
    // Oyuncuları benzersiz isimlerine göre filtrele
    const uniquePlayers = Array.from(new Map(myTeam.map(player => [player.name, player])).values());
    
    if (uniquePlayers && Array.isArray(uniquePlayers) && uniquePlayers.length > 0) {
        uniquePlayers.forEach(player => {
            if (player) {
                console.log('Creating card for player:', player);
        const playerCard = createPlayerCard(player);
                if (playerCard) {
                    benchContainer.appendChild(playerCard);
                }
            }
    });
    } else {
        console.log('No players in myTeam or myTeam is not properly initialized');
    }
}

function createPlayerCard(player) {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.setAttribute('draggable', 'true');
    card.setAttribute('data-player-id', player.name);
    card.setAttribute('data-position', player.position);
    card.setAttribute('data-quality', player.quality);

    const popupHtml = `
        <div class="player-popup">
            <div class="popup-header">
                <div class="player-info">
        <h3>${player.name}</h3>
                    <p class="position">${player.position}</p>
                </div>
            </div>
            
            <div class="popup-stats">
                <div class="stats-container">
                    <div class="stats-left">
                        <div class="stat-row">
                            <span class="stat-label">Hücum:</span>
                            <span class="stat-value">${player.offense || 0}</span>
                        </div>
                        <div class="stat-row">
                            <span class="stat-label">Savunma:</span>
                            <span class="stat-value">${player.defense || 0}</span>
                        </div>
                        <div class="stat-row">
                            <span class="stat-label">Enerji:</span>
                            <span class="stat-value">${player.energy || 100}%</span>
                        </div>
                    </div>
                    <div class="stats-right">
                        <div class="stat-row">
                            <span class="stat-label">Sayı:</span>
                            <span class="stat-value">${player.points || 0}</span>
                        </div>
                        <div class="stat-row">
                            <span class="stat-label">Ribaund:</span>
                            <span class="stat-value">${player.rebounds || 0}</span>
                        </div>
                        <div class="stat-row">
                            <span class="stat-label">Asist:</span>
                            <span class="stat-value">${player.assists || 0}</span>
                        </div>
                        <div class="stat-row">
                            <span class="stat-label">Top Çalma:</span>
                            <span class="stat-value">${player.steals || 0}</span>
                        </div>
                        <div class="stat-row">
                            <span class="stat-label">Top Kaybı:</span>
                            <span class="stat-value">${player.turnovers || 0}</span>
                        </div>
                        <div class="stat-row">
                            <span class="stat-label">Faul:</span>
                            <span class="stat-value">${player.fouls || 0}</span>
                        </div>
                    </div>
                </div>

                <div class="equipment-box">
                    ${getDetailedEquipmentSummary(player)}
                </div>
            </div>
        </div>
    `;

    card.innerHTML = `
        <div class="player-content">
            <img src="${player.image}" alt="${player.name}" class="player-image">
            <div class="player-info">
                <div class="player-position">${player.position}</div>
                <div class="player-name quality-${player.quality.toLowerCase()}">${player.name}</div>
            </div>
            <div class="player-quality">${player.quality}</div>
        </div>
        ${popupHtml}
    `;

    // Sürükleme olaylarını ekle
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragend', handleDragEnd);

    // Legendary set kontrolü
    updateLegendarySetEffect(card, player);

    return card;
}

// Enerji sınıfını belirleyen yardımcı fonksiyon
function getEnergyClass(energy) {
    if (!energy && energy !== 0) return 'energy-high';
    if (energy >= 80) return 'energy-high';
    if (energy >= 50) return 'energy-medium';
    return 'energy-low';
}

// Sürükleme işlemleri için gerekli fonksiyonlar
function handleDragStart(e) {
    e.target.classList.add('dragging');
    const playerPosition = e.target.getAttribute('data-position');
    e.dataTransfer.setData('text/plain', playerPosition);
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    const slot = e.target.closest('.position-slot');
    if (slot) {
        slot.classList.add('drag-over');
    }
}

function handleDragLeave(e) {
    const slot = e.target.closest('.position-slot');
    if (slot) {
        slot.classList.remove('drag-over');
    }
}

function handleDrop(e) {
    e.preventDefault();
    const slot = e.target.closest('.position-slot');
    if (!slot) return;

    slot.classList.remove('drag-over');
    const draggedPosition = e.dataTransfer.getData('text/plain');
    const slotPosition = slot.getAttribute('data-position');

    // Pozisyon karşılaştırmasını düzelt
    if (isPositionMatch(draggedPosition, slotPosition)) {
        const draggedCard = document.querySelector('.player-card.dragging');
        if (draggedCard) {
            // Eğer slot'ta başka bir oyuncu varsa bench'e gönder
            const existingCard = slot.querySelector('.player-card');
            if (existingCard) {
                const benchContainer = document.querySelector('.bench-slots');
                if (benchContainer) {
                    benchContainer.appendChild(existingCard);
                }
            }
            
            // Pozisyon etiketini koru
            const positionLabel = slot.querySelector('.position-label');
            slot.innerHTML = '';
            if (positionLabel) {
                slot.appendChild(positionLabel);
            }
            
            slot.appendChild(draggedCard);
            saveTeamPositions();
        }
    } else {
        showNotification(`Bu oyuncu sadece ${draggedPosition} pozisyonunda oynayabilir!`);
    }
}

// Pozisyon eşleşmesini kontrol eden yardımcı fonksiyon
function isPositionMatch(playerPosition, slotPosition) {
    // Center pozisyonu için özel kontrol
    if (playerPosition === 'CENTER' || playerPosition === 'C') {
        return slotPosition === 'C' || slotPosition === 'CENTER';
    }
    
    // Diğer pozisyonlar için normal karşılaştırma
    return playerPosition === slotPosition;
}

function saveTeamPositions() {
    const positions = {};
    const slots = document.querySelectorAll('.position-slot');
    
    slots.forEach(slot => {
        const playerCard = slot.querySelector('.player-card');
        if (playerCard) {
            const playerName = playerCard.querySelector('h3').textContent;
            const position = slot.getAttribute('data-position');
            // Center pozisyonu için özel kontrol
            positions[position === 'CENTER' ? 'C' : position] = playerName;
        }
    });
    
    localStorage.setItem('teamPositions', JSON.stringify(positions));
    showNotification('Takım dizilişi kaydedildi!');
}

function loadTeamPositions() {
    const savedPositions = JSON.parse(localStorage.getItem('teamPositions'));
    if (!savedPositions) return;

    const benchContainer = document.getElementById('benchSlots');
    benchContainer.innerHTML = '';

    // Pozisyon slotlarını temizle
    document.querySelectorAll('.position-slot').forEach(slot => {
        const position = slot.getAttribute('data-position');
        slot.innerHTML = `<div class="position-label">${position}</div>`;
    });

    // Önce tüm oyuncuları bench'e ekle
    const uniquePlayers = Array.from(new Map(myTeam.map(player => [player.name, player])).values());
    uniquePlayers.forEach(player => {
        // Center pozisyonu için özel kontrol
        const playerPosition = player.position === 'CENTER' ? 'C' : player.position;
        if (!savedPositions[playerPosition] || savedPositions[playerPosition] !== player.name) {
            const playerCard = createPlayerCard(player);
            if (playerCard) {
                benchContainer.appendChild(playerCard);
            }
        }
    });

    // Sonra kaydedilmiş pozisyonları uygula
    Object.entries(savedPositions).forEach(([position, playerName]) => {
        const player = uniquePlayers.find(p => {
            // Center pozisyonu için özel kontrol
            const playerPos = p.position === 'CENTER' ? 'C' : p.position;
            return p.name === playerName && (playerPos === position || (playerPos === 'C' && position === 'CENTER'));
        });
        
            if (player) {
                    const playerCard = createPlayerCard(player);
            const slot = document.querySelector(`.position-slot[data-position="${position}"]`);
            
            if (slot && playerCard) {
                slot.appendChild(playerCard);
            }
        }
    });
}

function resetStartingFive() {
    const benchContainer = document.querySelector('.bench-slots');
    const positionSlots = document.querySelectorAll('.position-slot');
    
    positionSlots.forEach(slot => {
        const position = slot.getAttribute('data-position');
        const playerCards = slot.querySelectorAll('.player-card');
        playerCards.forEach(card => {
            if (card) benchContainer.appendChild(card);
        });
        
        // Pozisyon etiketini yeniden ekle
        slot.innerHTML = `<div class="position-label">${position}</div>`;
    });

    localStorage.removeItem('teamPositions');
    arrangeBench();
    showNotification('İlk 5 sıfırlandı! Yeni ilk 5\'inizi belirleyebilirsiniz.');
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

// displayPlayers fonksiyonunu güncelle
function displayPlayers() {
    const playerList = document.getElementById('player-list');
    if (!playerList) return;

    playerList.innerHTML = myTeam.map(player => `
        <div class="player-card" onclick="showPlayerDetails('${player.name}')">
            <img src="${player.image || 'images/default-player.png'}" alt="${player.name}">
            <h3>${player.name}</h3>
            <p>${player.position}</p>
            
            <!-- Ekipman Slotları -->
            <div class="equipment-slots">
                <div class="equipment-slot ${player.equipment?.shoes ? player.equipment.shoes.rarity : ''}" title="${player.equipment?.shoes?.name || 'Ayakkabı'}">
                    ${player.equipment?.shoes ? 
                        `<img src="${player.equipment.shoes.image}" alt="${player.equipment.shoes.name}">` : 
                        '<i class="fas fa-shoe-prints"></i>'}
                </div>
                <div class="equipment-slot ${player.equipment?.kneepads ? player.equipment.kneepads.rarity : ''}" title="${player.equipment?.kneepads?.name || 'Dizlik'}">
                    ${player.equipment?.kneepads ? 
                        `<img src="${player.equipment.kneepads.image}" alt="${player.equipment.kneepads.name}">` : 
                        '<i class="fas fa-band-aid"></i>'}
                </div>
                <div class="equipment-slot ${player.equipment?.jersey ? player.equipment.jersey.rarity : ''}" title="${player.equipment?.jersey?.name || 'Forma'}">
                    ${player.equipment?.jersey ? 
                        `<img src="${player.equipment.jersey.image}" alt="${player.equipment.jersey.name}">` : 
                        '<i class="fas fa-tshirt"></i>'}
                </div>
                <div class="equipment-slot ${player.equipment?.wristband ? player.equipment.wristband.rarity : ''}" title="${player.equipment?.wristband?.name || 'Bileklik'}">
                    ${player.equipment?.wristband ? 
                        `<img src="${player.equipment.wristband.image}" alt="${player.equipment.wristband.name}">` : 
                        '<i class="fas fa-band-aid"></i>'}
                </div>
                <div class="equipment-slot ${player.equipment?.headband ? player.equipment.headband.rarity : ''}" title="${player.equipment?.headband?.name || 'Kafa Bandı'}">
                    ${player.equipment?.headband ? 
                        `<img src="${player.equipment.headband.image}" alt="${player.equipment.headband.name}">` : 
                        '<i class="fas fa-hat-cowboy"></i>'}
                </div>
            </div>

            <!-- Ekipman Bonusları -->
            <div class="equipment-bonuses">
                ${getEquipmentBonusesSummary(player)}
            </div>

            <div class="player-stats">
                <div class="stat">
                    <span class="stat-label">Hücum:</span>
                    <span class="stat-value">${player.offense || 0}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Savunma:</span>
                    <span class="stat-value">${player.defense || 0}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Ekipman bonuslarını hesaplama fonksiyonu
function getEquipmentBonusesSummary(player) {
    if (!player.equipment) return '';

    const totalBoosts = {};
    Object.values(player.equipment).forEach(item => {
        Object.entries(item.boosts).forEach(([stat, value]) => {
            totalBoosts[stat] = (totalBoosts[stat] || 0) + value;
        });
    });

    return Object.entries(totalBoosts)
        .map(([stat, value]) => `
            <div class="bonus-item">
                <span class="stat-name">${stat}</span>
                <span class="stat-value">+${value}</span>
            </div>
        `).join('');
}

// Detaylı ekipman özeti için yeni fonksiyon
function getDetailedEquipmentSummary(player) {
    let html = '<div class="equipment-details-container">';
    
    // Sabit ekipman sırası
    const equipmentOrder = ['shoes', 'kneepads', 'jersey', 'wristband', 'headband'];
    
    // Her ekipman tipi için slot oluştur
    equipmentOrder.forEach(category => {
        const item = player.equipment?.[category];
        html += `
            <div class="equipment-detail ${item?.rarity || ''}">
                ${item ? `
                    <img src="${item.image}" alt="${item.name}" class="equipment-icon">
                    ${item.level ? `<span class="equipment-level">+${item.level}</span>` : ''}
                ` : ''}
            </div>
        `;
    });
    
    html += '</div>';
    return html;
}

// Legendary set kontrolü için fonksiyon
function checkLegendarySet(player) {
    if (!player.equipment) return false;

    const requiredEquipment = ['shoes', 'kneepads', 'jersey', 'wristband', 'headband'];
    
    // Tüm ekipman tiplerini kontrol et
    return requiredEquipment.every(type => {
        return player.equipment[type] && player.equipment[type].rarity === 'legendary';
    });
}

// Legendary set efektini uygula/kaldır
function updateLegendarySetEffect(playerCard, player) {
    const hasLegendarySet = checkLegendarySet(player);
    
    if (hasLegendarySet) {
        playerCard.classList.add('legendary-set-active');
    } else {
        playerCard.classList.remove('legendary-set-active');
    }
}

// Ekipman değişikliklerinde efekti güncelle (office.js'de ekipman takma/çıkarma işlemlerinden sonra)
function updatePlayerCard(player) {
    const playerCard = document.querySelector(`.player-card[data-player-id="${player.name}"]`);
    if (playerCard) {
        updateLegendarySetEffect(playerCard, player);
    }
}

// Ekipman takıldığında/çıkarıldığında çağrılacak
function equipItem(playerId, category, item) {
    // ... mevcut ekipman takma kodu ...

    // Oyuncuyu güncelle
    const playerIndex = myTeam.findIndex(p => p.name === playerId);
    if (playerIndex !== -1) {
        const player = myTeam[playerIndex];
        
        // Ekipmanı güncelle
        if (!player.equipment) player.equipment = {};
        player.equipment[category] = item;

        // Legendary set efektini kontrol et ve güncelle
        const playerCard = document.querySelector(`.player-card[data-player-id="${playerId}"]`);
        if (playerCard) {
            updateLegendarySetEffect(playerCard, player);
        }

        // Diğer güncellemeler...
        saveGame();
        displayPlayers();
    }
}

function removeItem(playerId, category) {
    // ... mevcut ekipman çıkarma kodu ...

    // Oyuncuyu güncelle
    const playerIndex = myTeam.findIndex(p => p.name === playerId);
    if (playerIndex !== -1) {
        const player = myTeam[playerIndex];
        
        // Ekipmanı kaldır
        if (player.equipment && player.equipment[category]) {
            delete player.equipment[category];
        }

        // Legendary set efektini kontrol et ve güncelle
        const playerCard = document.querySelector(`.player-card[data-player-id="${playerId}"]`);
        if (playerCard) {
            updateLegendarySetEffect(playerCard, player);
        }

        // Diğer güncellemeler...
        saveGame();
        displayPlayers();
    }
}
