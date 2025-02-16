document.addEventListener('DOMContentLoaded', () => {
    initializeMarket();
});

function initializeFilters() {
    const filters = document.querySelectorAll('.market-tab, .position-filter');
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            const type = filter.dataset.type;
            const position = filter.dataset.position;
            
            // Tab değişimi
            if (type) {
                filters.forEach(f => {
                    if (f.dataset.type) f.classList.remove('active');
                });
                filter.classList.add('active');
                
                // İçerik değişimi
                document.getElementById('players-section').style.display = type === 'players' ? 'block' : 'none';
                document.getElementById('equipment-section').style.display = type === 'equipment' ? 'block' : 'none';
            }
            
            // Pozisyon filtresi
            if (position) {
                filters.forEach(f => {
                    if (f.dataset.position) f.classList.remove('active');
                });
                filter.classList.add('active');
                displayMarketPlayers(position);
            }
        });
    });
}

function displayMarketPlayers(positionFilter = 'ALL') {
    const playersSection = document.getElementById('players-section');
    if (!playersSection) return;
    
    playersSection.innerHTML = '';
    
    const filteredPlayers = positionFilter === 'ALL' 
        ? players 
        : players.filter(player => player.position === positionFilter);
    
    filteredPlayers.forEach(player => {
        const qualityClass = getQualityClass(player.quality);
        const playerDiv = document.createElement('div');
        playerDiv.className = `player-card ${qualityClass}`;
        
        playerDiv.innerHTML = `
            <img src="${player.image}" alt="${player.name}" class="player-image">
            <h3 class="player-name">${player.name}</h3>
            <p class="player-position">${player.position}</p>
            <span class="quality-badge">${player.quality}</span>
            <button class="buy-player" data-name="${player.name}">Satın Al</button>
            
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
        
        playersSection.appendChild(playerDiv);
    });
    
    // Satın alma butonlarını aktifleştir
    document.querySelectorAll('.buy-player').forEach(button => {
        button.addEventListener('click', (e) => {
            const playerName = e.target.dataset.name;
            const player = players.find(p => p.name === playerName);
            if (player) {
                buyPlayer(player);
            }
        });
    });
}

function buyPlayer(player) {
    if (money >= player.salary) {
        if (addPlayerToMyTeam(player)) {
        money -= player.salary;
            saveGame();
        updateMoneyDisplay();
        showNotification(`${player.name} başarıyla satın alındı!`);
            displayMarketPlayers();
}
    }
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

function loadGame() {
    const storedPlayers = localStorage.getItem('players');
    if (storedPlayers) {
        players = JSON.parse(storedPlayers);
        console.log("Loaded players from localStorage:", players);
    } else {
        players = initialPlayers;
        localStorage.setItem('players', JSON.stringify(players));
        console.log("No players found in localStorage, using initial players.");
    }

    myTeam = JSON.parse(localStorage.getItem('myTeam')) || [];
    money = parseInt(localStorage.getItem('money'), 10) || 99999999999;
    console.log('Game data loaded successfully.');
}

function addPlayerToMyTeam(player) {
    if (!myTeam.some(p => p.name === player.name)) {
        myTeam.push(player);
        saveGame();
        console.log(`${player.name} added to My Team.`);
        return true;
    } else {
        console.log(`${player.name} is already in My Team.`);
        return false;
    }
}

// Ekipman verilerini market için fiyatlarla birlikte genişlet
const marketEquipment = {
    shoes: [
        { id: 'shoe1', name: 'Temel Ayakkabı', rarity: 'common', price: 10000, boosts: { offense: 1, defense: 1 }, image: 'images/shoes/basic.png' },
        { id: 'shoe2', name: 'Hızlı Koşucu', rarity: 'rare', price: 25000, boosts: { offense: 2, defense: 2 }, image: 'images/shoes/runner.png' },
        { id: 'shoe3', name: 'Pro Performer', rarity: 'epic', price: 50000, boosts: { offense: 3, defense: 3 }, image: 'images/shoes/pro.png' },
        { id: 'shoe4', name: 'Efsane Ayakkabı', rarity: 'legendary', price: 100000, boosts: { offense: 4, defense: 4 }, image: 'images/shoes/legend.png' },
        { id: 'shoe5', name: 'Mitik Uçuş', rarity: 'mythical', price: 200000, boosts: { offense: 5, defense: 5 }, image: 'images/shoes/mythic.png' }
    ],
    kneepads: [
        { id: 'knee1', name: 'Basit Dizlik', rarity: 'common', price: 10000, boosts: { defense: 2 }, image: 'images/kneepads/basic.png' },
        { id: 'knee2', name: 'Koruyucu Dizlik', rarity: 'rare', price: 25000, boosts: { defense: 4 }, image: 'images/kneepads/protector.png' },
        { id: 'knee3', name: 'Elite Dizlik', rarity: 'epic', price: 50000, boosts: { defense: 6 }, image: 'images/kneepads/elite.png' },
        { id: 'knee4', name: 'Efsane Dizlik', rarity: 'legendary', price: 100000, boosts: { defense: 8 }, image: 'images/kneepads/legend.png' },
        { id: 'knee5', name: 'Mitik Dizlik', rarity: 'mythical', price: 200000, boosts: { defense: 10 }, image: 'images/kneepads/mythic.png' }
    ],
    jersey: [
        { id: 'jersey1', name: 'Standart Forma', rarity: 'common', price: 10000, boosts: { defense: 2 }, image: 'images/beyazforma.png' },
        { id: 'jersey2', name: 'Pro Forma', rarity: 'rare', price: 25000, boosts: { defense: 4 }, image: 'images/jerseys/pro.png' },
        { id: 'jersey3', name: 'Elite Forma', rarity: 'epic', price: 50000, boosts: { defense: 6 }, image: 'images/jerseys/elite.png' },
        { id: 'jersey4', name: 'Efsane Forma', rarity: 'legendary', price: 100000, boosts: { defense: 8 }, image: 'images/jerseys/legend.png' },
        { id: 'jersey5', name: 'Mitik Forma', rarity: 'mythical', price: 200000, boosts: { defense: 10 }, image: 'images/jerseys/mythic.png' }
    ],
    wristband: [
        { id: 'wrist1', name: 'Basit Bileklik', rarity: 'common', price: 10000, boosts: { offense: 2 }, image: 'images/beyazband.png' },
        { id: 'wrist2', name: 'Şutör Bilekliği', rarity: 'rare', price: 25000, boosts: { offense: 4 }, image: 'images/wristbands/shooter.png' },
        { id: 'wrist3', name: 'Pro Bileklik', rarity: 'epic', price: 50000, boosts: { offense: 6 }, image: 'images/wristbands/pro.png' },
        { id: 'wrist4', name: 'Efsane Bileklik', rarity: 'legendary', price: 100000, boosts: { offense: 8 }, image: 'images/wristbands/legend.png' },
        { id: 'wrist5', name: 'Mitik Bileklik', rarity: 'mythical', price: 200000, boosts: { offense: 10 }, image: 'images/wristbands/mythic.png' }
    ],
    headband: [
        { id: 'head1', name: 'Basit Kafa Bandı', rarity: 'common', price: 10000, boosts: { offense: 2 }, image: 'images/beyazkafabandı.png' },
        { id: 'head2', name: 'Odak Bandı', rarity: 'rare', price: 25000, boosts: { offense: 4 }, image: 'images/headbands/focus.png' },
        { id: 'head3', name: 'Pro Kafa Bandı', rarity: 'epic', price: 50000, boosts: { offense: 6 }, image: 'images/headbands/pro.png' },
        { id: 'head4', name: 'Efsane Kafa Bandı', rarity: 'legendary', price: 100000, boosts: { offense: 8 }, image: 'images/headbands/legend.png' },
        { id: 'head5', name: 'Mitik Kafa Bandı', rarity: 'mythical', price: 200000, boosts: { offense: 10 }, image: 'images/headbands/mythic.png' }
    ]
};

function displayMarketEquipment() {
    const equipmentSection = document.getElementById('equipment-section');
    if (!equipmentSection) return;
    
    equipmentSection.innerHTML = '<h3>Ekipmanlar</h3>';

    Object.entries(marketEquipment).forEach(([category, items]) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'equipment-category';
        categoryDiv.innerHTML = `
            <h4>${getCategoryName(category)}</h4>
            <div class="equipment-grid">
                ${items.map(item => `
                    <div class="equipment-card rarity-${item.rarity}">
                        <img src="${item.image}" alt="${item.name}">
                        <h5>${item.name}</h5>
                        <p class="price">$${item.price.toLocaleString()}</p>
                        <div class="stats">
                            ${Object.entries(item.boosts).map(([stat, value]) => 
                                `<span>+${value} ${stat}</span>`
                            ).join('')}
                        </div>
                        <button onclick="buyEquipment('${category}', '${item.id}')">Satın Al</button>
                    </div>
                `).join('')}
            </div>
        `;
        equipmentSection.appendChild(categoryDiv);
    });
}

function getCategoryName(category) {
    const names = {
        shoes: 'Ayakkabılar',
        kneepads: 'Dizlikler',
        jersey: 'Formalar',
        wristband: 'Bileklikler',
        headband: 'Kafa Bantları'
    };
    return names[category] || category;
}

function buyEquipment(category, itemId) {
    const item = marketEquipment[category].find(i => i.id === itemId);
    if (!item) return;

    if (money >= item.price) {
        money -= item.price;
        
        // Envantere ekle
        const ownedEquipment = JSON.parse(localStorage.getItem('ownedEquipment') || '{}');
        if (!ownedEquipment[category]) {
            ownedEquipment[category] = [];
        }
        
        // Her satın alma için benzersiz bir ID ekle
        ownedEquipment[category].push({
            ...item,
            purchaseId: Date.now() // Benzersiz satın alma ID'si
        });
        
        localStorage.setItem('ownedEquipment', JSON.stringify(ownedEquipment));
        saveGame();
        
        showNotification(`${item.name} başarıyla satın alındı!`);
        updateMoneyDisplay();
    } else {
        showNotification('Yeterli paranız yok!', 'error');
    }
}

function initializeMarket() {
    loadGame();
    displayMarketPlayers();
    displayMarketEquipment();
    initializeFilters();
    addPositionFilter();
}

// Eğer varsa özel money-display div'ini kaldır
document.querySelector('.money-display')?.remove();

// Popup pozisyonlama fonksiyonu
function updatePopupPosition(card) {
    const popup = card.querySelector('.details-popup');
    const rect = card.getBoundingClientRect();
    
    // Popup'ın pozisyonunu hesapla
    let top = rect.top;
    let left = rect.right + 5;
    
    // Ekranın sağ kenarını kontrol et
    if (left + popup.offsetWidth > window.innerWidth) {
        left = rect.left - popup.offsetWidth - 5;
    }
    
    // Ekranın alt kenarını kontrol et
    if (top + popup.offsetHeight > window.innerHeight) {
        top = window.innerHeight - popup.offsetHeight;
    }
    
    // Pozisyonları ayarla
    popup.style.top = `${top}px`;
    popup.style.left = `${left}px`;
}

// Kart oluşturma fonksiyonuna event listener ekle
function createPlayerCard(player) {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.setAttribute('data-quality', player.quality);

    // Popup içeriği
    const detailsPopup = `
        <div class="details-popup">
            <div class="stats-section">
                <h4>İstatistikler</h4>
                <div class="stat-row">
                    <span class="stat-label">Hücum:</span>
                    <span class="stat-value">${player.offense || 0}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Savunma:</span>
                    <span class="stat-value">${player.defense || 0}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Sayı:</span>
                    <span class="stat-value">${player.points || 0}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Asist:</span>
                    <span class="stat-value">${player.assists || 0}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Ribaund:</span>
                    <span class="stat-value">${player.rebounds || 0}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Top Çalma:</span>
                    <span class="stat-value">${player.steals || 0}</span>
                </div>
            </div>
            <div class="price-section">
                <p class="price">Fiyat: ${formatMoney(player.price)}</p>
                <button onclick="buyPlayer('${player.name}', ${player.price})">Satın Al</button>
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
        ${detailsPopup}
    `;

    card.addEventListener('mouseenter', () => {
        updatePopupPosition(card);
    });
    
    return card;
}

// Pozisyon filtresi için HTML ekleyelim
function addPositionFilter() {
    const filterDiv = document.createElement('div');
    filterDiv.className = 'position-filters';
    filterDiv.innerHTML = `
        <button class="position-btn active" data-position="all">Tümü</button>
        <button class="position-btn" data-position="PG">PG</button>
        <button class="position-btn" data-position="SG">SG</button>
        <button class="position-btn" data-position="SF">SF</button>
        <button class="position-btn" data-position="PF">PF</button>
        <button class="position-btn" data-position="C">C</button>
    `;

    // Market sekmesinin altına ekle
    const marketTabs = document.querySelector('.market-tabs');
    marketTabs.after(filterDiv);

    // Filtreleme olaylarını ekle
    const buttons = filterDiv.querySelectorAll('.position-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Aktif buton stilini güncelle
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Oyuncuları filtrele
            const selectedPosition = button.dataset.position;
            const cards = document.querySelectorAll('.player-card');

            cards.forEach(card => {
                const cardPosition = card.querySelector('.player-position').textContent;
                if (selectedPosition === 'all' || cardPosition === selectedPosition) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function switchTab(tabType) {
    // Tüm sekmeleri gizle
    document.getElementById('supermarket-section').style.display = 'none';
    document.getElementById('players-section').style.display = 'none';
    document.getElementById('equipment-section').style.display = 'none';

    // Seçilen sekmeyi göster
    document.getElementById(`${tabType}-section`).style.display = 'block';

    // Tab butonlarının active class'ını güncelle
    document.querySelectorAll('.market-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.type === tabType) {
            tab.classList.add('active');
        }
    });
}

// Market sekmelerini aktifleştir
document.querySelectorAll('.market-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        switchTab(tab.dataset.type);
    });
});
