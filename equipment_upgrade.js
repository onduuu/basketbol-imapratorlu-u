// Güçlendirme malzemeleri
const upgradeMaterials = {
    stone: {
        common: { 
            name: 'Sıradan Taş', 
            rarity: 'common', 
            successRate: 10, 
            image: 'images/stones/common.png' 
        },
        rare: { 
            name: 'Nadir Taş', 
            rarity: 'rare', 
            successRate: 20, 
            image: 'images/stones/rare.png' 
        },
        epic: { 
            name: 'Destansı Taş', 
            rarity: 'epic', 
            successRate: 35, 
            image: 'images/stones/epic.png' 
        },
        legendary: { 
            name: 'Efsanevi Taş', 
            rarity: 'legendary', 
            successRate: 50, 
            image: 'images/stones/legendary.png' 
        }
    },
    charm: {
        luck: { 
            name: 'Şans Tılsımı', 
            effect: 'success_rate', 
            successRate: 60, 
            image: 'images/charms/luck.png' 
        },
        protection: { 
            name: 'Koruma Tılsımı', 
            effect: 'prevent_decrease', 
            image: 'images/charms/protection.png' 
        }
    }
};

// Güçlendirme maliyetleri ve şansları
const upgradeConfig = {
    baseCost: 5000,
    costMultiplier: 1.5,
    baseSuccessRate: 50,
    maxLevel: 20
};

// Kombinasyon bonusları
const combinationBonuses = {
    // Aynı nadirlikten 4 taş kullanma bonusları
    fullSet: {
        common: { bonus: 15, name: 'Sıradan Set Bonusu' },
        rare: { bonus: 25, name: 'Nadir Set Bonusu' },
        epic: { bonus: 35, name: 'Destansı Set Bonusu' },
        legendary: { bonus: 45, name: 'Efsanevi Set Bonusu' }
    },
    // Çapraz kombinasyonlar
    cross: {
        horizontal: { bonus: 10, name: 'Yatay Güç' },
        vertical: { bonus: 10, name: 'Dikey Güç' }
    },
    // Özel kombinasyonlar
    special: {
        luckyCharm: { bonus: 15, name: 'Şanslı Kombinasyon' }, // 2 şans tılsımı + 2 taş
        protection: { bonus: 20, name: 'Tam Koruma' }, // 2 koruma tılsımı + 2 taş
        powerUp: { bonus: 25, name: 'Güç Patlaması' } // 2 güç tılsımı + 2 efsanevi taş
    }
};

// Ekipman güçlendirme bonusları
const upgradeBonuses = {
    shoes: {
        offense: 1.5,  // Her seviye için +1.5 hücum
        defense: 1.5   // Her seviye için +1.5 savunma
    },
    kneepads: {
        defense: 2     // Her seviye için +2 savunma
    },
    jersey: {
        defense: 2     // Her seviye için +2 savunma
    },
    wristband: {
        offense: 2     // Her seviye için +2 hücum
    },
    headband: {
        offense: 2     // Her seviye için +2 hücum
    }
};

document.addEventListener('DOMContentLoaded', () => {
    loadGame();
    initializeMoneyDisplay();
    initializeUpgradeCenter();
});

function initializeUpgradeCenter() {
    const upgradeContent = document.getElementById('upgrade-content');
    upgradeContent.innerHTML = `
        <div class="upgrade-container">
            <!-- Sol Panel: Güçlendirme Alanı -->
            <div class="upgrade-panel">
                <div class="material-slots">
                    <div class="material-slot top" data-slot="top"></div>
                    <div class="material-slot left" data-slot="left"></div>
                    <div class="equipment-slot center" data-slot="center">
                        <div class="empty-slot-text">Ekipman Yerleştir</div>
                    </div>
                    <div class="material-slot right" data-slot="right"></div>
                    <div class="material-slot bottom" data-slot="bottom"></div>
                </div>
                <div class="upgrade-info">
                    <div class="success-rate">Başarı Şansı: <span>0%</span></div>
                    <div class="upgrade-cost">Maliyet: <span>0</span></div>
                </div>
                <button class="upgrade-button" disabled>Güçlendir</button>
            </div>

            <!-- Sağ Panel: Ekipman ve Malzemeler -->
            <div class="right-panel">
                <div class="equipment-section">
                    <h3>Ekipmanlar</h3>
                    <div class="equipment-grid" id="owned-equipment"></div>
                </div>
                <div class="materials-section">
                    <h3>Malzemeler</h3>
                    <div class="materials-grid" id="upgrade-materials"></div>
                </div>
            </div>
        </div>
    `;

    loadOwnedEquipment();
    loadUpgradeMaterials();
    initializeDragAndDrop();
    initializeUpgradeButton();
}

function initializeDragAndDrop() {
    // Sürüklenebilir öğeleri ayarla
    const draggableItems = document.querySelectorAll('.equipment-item, .material-item');
    draggableItems.forEach(item => {
        item.setAttribute('draggable', true);
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
    });

    // Hedef slotları ayarla
    const slots = document.querySelectorAll('.material-slot, .equipment-slot');
    slots.forEach(slot => {
        slot.addEventListener('dragover', handleDragOver);
        slot.addEventListener('dragleave', handleDragLeave);
        slot.addEventListener('drop', handleDrop);
    });
}

function handleDragStart(e) {
    e.target.classList.add('dragging');
    const item = e.target.closest('.equipment-item, .material-item');
    if (!item) return;

    e.dataTransfer.setData('text/plain', JSON.stringify({
        id: item.dataset.id,
        type: item.dataset.type,
        slot: item.parentElement.dataset.slot
    }));
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    const slot = e.currentTarget;
    slot.classList.remove('drag-over');

    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    const draggedItem = document.querySelector(`[data-id="${data.id}"]`);
    const targetSlot = slot.dataset.slot;

    // Eğer sürüklenen öğe bulunamadıysa
    if (!draggedItem) {
        console.error('Sürüklenen öğe bulunamadı:', data);
        return;
    }

    // Ekipman sadece merkez slota yerleştirilebilir
    if (data.type === 'equipment' && targetSlot !== 'center') {
        showNotification('Ekipman sadece merkez slota yerleştirilebilir!');
        return;
    }

    // Malzemeler sadece kenar slotlara yerleştirilebilir
    if (data.type === 'material' && targetSlot === 'center') {
        showNotification('Malzemeler sadece kenar slotlara yerleştirilebilir!');
        return;
    }

    // Eğer hedef slotta zaten bir öğe varsa, yer değiştir
    const existingItem = slot.querySelector('.equipment-item, .material-item');
    if (existingItem) {
        const originalSlot = document.querySelector(`[data-slot="${data.slot}"]`);
        if (originalSlot) {
            originalSlot.appendChild(existingItem);
        }
    }

    // Yeni öğeyi oluştur ve özelliklerini kopyala
    const newItem = document.createElement('div');
    newItem.className = draggedItem.className;
    newItem.dataset.id = data.id;
    newItem.dataset.type = data.type;
    
    // İçeriği kopyala
    if (data.type === 'equipment') {
        const level = draggedItem.querySelector('.item-level')?.textContent || '+0';
        newItem.innerHTML = `
            <img src="${draggedItem.querySelector('img').src}" alt="${draggedItem.querySelector('img').alt}">
            <div class="item-level">${level}</div>
        `;
    } else {
        newItem.innerHTML = draggedItem.innerHTML;
    }
    
    // Öğeyi yeni slota taşı
    slot.appendChild(newItem);
    
    // Orijinal öğeyi kaldır
    draggedItem.remove();

    updateUpgradeInfo();
}

function loadOwnedEquipment() {
    const equipmentGrid = document.getElementById('owned-equipment');
    const ownedEquipment = JSON.parse(localStorage.getItem('ownedEquipment') || '{}');

    Object.entries(ownedEquipment).forEach(([category, items]) => {
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = `equipment-item rarity-${item.rarity}`;
            itemElement.dataset.id = item.id;
            itemElement.dataset.type = 'equipment';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-level">+${item.level || 0}</div>
            `;
            equipmentGrid.appendChild(itemElement);
        });
    });
}

function loadUpgradeMaterials() {
    const materialsGrid = document.getElementById('upgrade-materials');
    // Test için bazı malzemeler ekleyelim
    Object.entries(upgradeMaterials).forEach(([type, materials]) => {
        Object.entries(materials).forEach(([rarity, material]) => {
            const materialElement = document.createElement('div');
            materialElement.className = `material-item rarity-${material.rarity}`;
            materialElement.dataset.id = `${type}_${rarity}`;
            materialElement.dataset.type = 'material';
            materialElement.innerHTML = `
                <img src="${material.image}" alt="${material.name}">
                <div class="material-name">${material.name}</div>
            `;
            materialsGrid.appendChild(materialElement);
        });
    });
}

// Başarı şansı hesaplama ve güncelleme fonksiyonları
function updateUpgradeInfo() {
    const centerSlot = document.querySelector('.equipment-slot.center');
    const equipment = centerSlot.querySelector('.equipment-item');
    
    if (!equipment) {
        updateUI({ successRate: 0, cost: 0 });
        document.querySelector('.upgrade-button').disabled = true;
        return;
    }

    const materialSlots = document.querySelectorAll('.material-slot');
    const materials = Array.from(materialSlots)
        .map(slot => slot.querySelector('.material-item'))
        .filter(item => item !== null);

    const calculatedInfo = calculateUpgradeInfo(equipment, materials);
    updateUI(calculatedInfo);
    document.querySelector('.upgrade-button').disabled = false;
}

function calculateUpgradeInfo(equipment, materials) {
    const equipmentLevel = parseInt(equipment.querySelector('.item-level').textContent.replace('+', '')) || 0;
    let successRate = upgradeConfig.baseSuccessRate;
    let cost = upgradeConfig.baseCost * Math.pow(upgradeConfig.costMultiplier, equipmentLevel);
    let hasProtection = false;

    // Malzemelerin etkilerini hesapla
    materials.forEach(material => {
        const [type, rarity] = material.dataset.id.split('_');
        
        if (type === 'stone') {
            successRate += upgradeMaterials.stone[rarity].successRate;
        } else if (type === 'charm') {
            const charm = upgradeMaterials.charm[rarity];
            if (charm.effect === 'success_rate') {
                successRate += charm.successRate;
            } else if (charm.effect === 'prevent_decrease') {
                hasProtection = true;
            }
        }
    });

    // Seviye arttıkça başarı şansı düşer
    successRate = Math.max(5, successRate - (equipmentLevel * 5));
    // Maksimum %95 başarı şansı
    successRate = Math.min(95, successRate);

    return {
        successRate,
        cost,
        hasProtection,
        equipmentLevel
    };
}

function checkCombinations(materials) {
    const activeBonus = [];
    const materialTypes = materials.map(m => m.dataset.id);

    // Tam set kontrolü (4 aynı nadirlik)
    const rarityCount = {};
    materials.forEach(material => {
        const [type, rarity] = material.dataset.id.split('_');
        if (type === 'stone') {
            rarityCount[rarity] = (rarityCount[rarity] || 0) + 1;
        }
    });

    Object.entries(rarityCount).forEach(([rarity, count]) => {
        if (count === 4 && combinationBonuses.fullSet[rarity]) {
            activeBonus.push({
                type: 'fullSet',
                ...combinationBonuses.fullSet[rarity]
            });
        }
    });

    // Çapraz kombinasyon kontrolü
    const slots = {
        left: materials[0]?.dataset.id,
        right: materials[2]?.dataset.id,
        top: materials[1]?.dataset.id,
        bottom: materials[3]?.dataset.id
    };

    if (slots.left && slots.right && slots.left === slots.right) {
        activeBonus.push({
            type: 'cross',
            ...combinationBonuses.cross.horizontal
        });
    }

    if (slots.top && slots.bottom && slots.top === slots.bottom) {
        activeBonus.push({
            type: 'cross',
            ...combinationBonuses.cross.vertical
        });
    }

    // Özel kombinasyon kontrolleri
    const charmCount = materials.filter(m => m.dataset.id.startsWith('charm_')).length;
    const legendaryCount = materials.filter(m => m.dataset.id.includes('legendary')).length;

    if (charmCount >= 2 && legendaryCount >= 2) {
        activeBonus.push({
            type: 'special',
            ...combinationBonuses.special.powerUp
        });
    }

    return activeBonus;
}

function updateUI({ successRate, cost, hasProtection, equipmentLevel }) {
    const successRateElement = document.querySelector('.success-rate span');
    const costElement = document.querySelector('.upgrade-cost span');
    const upgradeButton = document.querySelector('.upgrade-button');

    successRateElement.textContent = `${successRate}%`;
    costElement.textContent = cost.toLocaleString();

    // Başarı şansına göre renk değişimi
    if (successRate >= 70) {
        successRateElement.style.color = '#4CAF50';
    } else if (successRate >= 40) {
        successRateElement.style.color = '#FFC107';
    } else {
        successRateElement.style.color = '#F44336';
    }

    // Koruma tılsımı varsa göster
    if (hasProtection) {
        upgradeButton.setAttribute('data-protection', 'true');
        upgradeButton.title = 'Başarısız olursa ekipman seviyesi düşer';
    } else {
        upgradeButton.removeAttribute('data-protection');
        upgradeButton.title = 'Başarısız olursa ekipman seviyesi düşer';
    }
}

// Güncelleme bilgilerini göstermek için notification sistemi
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Güçlendirme işlemi için yeni fonksiyonlar
function initializeUpgradeButton() {
    const upgradeButton = document.querySelector('.upgrade-button');
    upgradeButton.addEventListener('click', performUpgrade);
}

function performUpgrade() {
    const centerSlot = document.querySelector('.equipment-slot.center');
    const equipment = centerSlot.querySelector('.equipment-item');
    
    if (!equipment) {
        showNotification('Lütfen bir ekipman seçin!', 'error');
        return;
    }

    const materialSlots = document.querySelectorAll('.material-slot');
    const materials = Array.from(materialSlots)
        .map(slot => slot.querySelector('.material-item'))
        .filter(item => item !== null);

    const upgradeInfo = calculateUpgradeInfo(equipment, materials);

    // Para kontrolü
    if (money < upgradeInfo.cost) {
        showNotification('Yeterli paranız yok!', 'error');
        return;
    }

    // Parayı hemen düş ve güncelle
    money -= upgradeInfo.cost;
    localStorage.setItem('money', money);
    updateMoneyDisplay(); // Para göstergesini hemen güncelle

    // Güçlendirme animasyonu başlat
    startUpgradeAnimation(() => {
        // Güçlendirme sonucunu belirle
        const success = Math.random() * 100 < upgradeInfo.successRate;
        
        if (success) {
            handleUpgradeSuccess(equipment, upgradeInfo);
        } else {
            handleUpgradeFailure(equipment, upgradeInfo);
        }

        // Malzemeleri tüket
        consumeMaterials(materials);
        
        // UI'ı güncelle
        updateUpgradeInfo();
    });
}

function handleUpgradeSuccess(equipment, upgradeInfo) {
    const newLevel = upgradeInfo.equipmentLevel + 1;
    
    // Ekipmanı güncelle
    updateEquipmentLevel(equipment, newLevel);
    
    // Başarı efektleri
    showUpgradeEffect('success');
    showNotification(`Güçlendirme başarılı! Yeni seviye: +${newLevel}`, 'success');
    
    // Ekipman verilerini kaydet
    saveEquipmentData(equipment, newLevel);
}

function handleUpgradeFailure(equipment, upgradeInfo) {
    if (!upgradeInfo.hasProtection) {
        // Seviyeyi bir düşür
        const newLevel = Math.max(0, upgradeInfo.equipmentLevel - 1);
        updateEquipmentLevel(equipment, newLevel);
        showUpgradeEffect('fail');
        showNotification(`Güçlendirme başarısız! Seviye düştü: +${newLevel}`, 'warning');
        saveEquipmentData(equipment, newLevel);
    } else {
        // Koruma tılsımı varsa seviye düşmez
        showUpgradeEffect('protected');
        showNotification('Güçlendirme başarısız! Koruma tılsımı seviyeyi korudu.', 'warning');
    }
}

function startUpgradeAnimation(callback) {
    const upgradePanel = document.querySelector('.upgrade-panel');
    upgradePanel.classList.add('upgrading');
    
    // Animasyon sesleri ve efektleri
    playUpgradeSound();
    
    setTimeout(() => {
        upgradePanel.classList.remove('upgrading');
        callback();
    }, 2000);
}

function showUpgradeEffect(type) {
    const effectElement = document.createElement('div');
    effectElement.className = `upgrade-effect ${type}`;
    document.querySelector('.equipment-slot.center').appendChild(effectElement);
    
    setTimeout(() => effectElement.remove(), 1000);
}

function consumeMaterials(materials) {
    materials.forEach(material => {
        material.remove();
    });
}

function updateEquipmentLevel(equipment, newLevel) {
    equipment.querySelector('.item-level').textContent = `+${newLevel}`;
    equipment.classList.add('level-up');
    setTimeout(() => equipment.classList.remove('level-up'), 1000);
}

function saveEquipmentData(equipment, newLevel) {
    const equipmentId = equipment.dataset.id;
    let ownedEquipment = JSON.parse(localStorage.getItem('ownedEquipment') || '{}');
    let myTeam = JSON.parse(localStorage.getItem('myTeam') || '[]');
    
    // Ekipmanı bul ve seviyesini güncelle
    Object.entries(ownedEquipment).forEach(([category, items]) => {
        items.forEach(item => {
            if (item.id === equipmentId) {
                // Önceki temel bonusları sakla
                const baseBoosts = { ...item.boosts };
                
                // Seviyeyi güncelle
                item.level = newLevel;
                
                // Seviyeye göre bonusları güncelle
                const categoryBonuses = upgradeBonuses[category];
                if (categoryBonuses) {
                    item.boosts = { ...baseBoosts }; // Temel bonusları koru
                    Object.entries(categoryBonuses).forEach(([stat, multiplier]) => {
                        // Temel bonusu koru ve seviye bonusunu ekle
                        const baseBoost = baseBoosts[stat] || 0;
                        item.boosts[stat] = baseBoost + (multiplier * newLevel);
                    });
                }

                // Takımdaki oyuncuların ekipmanlarını güncelle
                myTeam.forEach(player => {
                    if (player.equipment && player.equipment[category]) {
                        if (player.equipment[category].id === equipmentId) {
                            player.equipment[category] = { ...item };
                        }
                    }
                });
            }
        });
    });
    
    // Hem ekipmanları hem de takımı kaydet
    localStorage.setItem('ownedEquipment', JSON.stringify(ownedEquipment));
    localStorage.setItem('myTeam', JSON.stringify(myTeam));
}

function playUpgradeSound() {
    // Şimdilik ses efektini atlayalım
    // İleride ses efekti eklemek isterseniz buraya ekleyebiliriz
    return;
}

// Para göstergesini güncelleme fonksiyonu
function updateMoneyDisplay() {
    const moneyDisplay = document.getElementById('money-amount');
    if (moneyDisplay) {
        moneyDisplay.textContent = `$${money.toLocaleString()}`;
    }
}

// Güçlendirme sonrası güncellemeleri yapalım
function upgradeEquipment(equipmentId, category, stone, charm) {
    const ownedEquipment = JSON.parse(localStorage.getItem('ownedEquipment') || '{}');
    
    // Ekipmanı bul ve güncelle
    if (ownedEquipment[category]) {
        ownedEquipment[category] = ownedEquipment[category].map(item => {
            if (item.id === equipmentId) {
                const newLevel = (item.level || 0) + 1;
                const multiplier = 0.1 * newLevel; // Her seviye için %10 artış
                
                // Yeni bonusları hesapla
                const updatedItem = { ...item, level: newLevel };
                Object.keys(item.boosts).forEach(stat => {
                    const baseBoost = equipmentData[category]
                        .find(e => e.id === item.id)?.boosts[stat] || 0;
                    updatedItem.boosts[stat] = Math.round(baseBoost * (1 + multiplier));
                });
                
                return updatedItem;
            }
            return item;
        });
    }
    
    // Güncellenmiş ekipmanları kaydet
    localStorage.setItem('ownedEquipment', JSON.stringify(ownedEquipment));
    
    // Takımdaki oyuncuların ekipmanlarını güncelle
    const myTeam = JSON.parse(localStorage.getItem('myTeam') || '[]');
    myTeam.forEach(player => {
        if (player.equipment && player.equipment[category]) {
            if (player.equipment[category].id === equipmentId) {
                const updatedEquipment = ownedEquipment[category]
                    .find(item => item.id === equipmentId);
                player.equipment[category] = { ...updatedEquipment };
                
                // Oyuncu statlarını yeniden hesapla
                recalculatePlayerStats(player);
            }
        }
    });
    
    localStorage.setItem('myTeam', JSON.stringify(myTeam));
}

// Oyuncu statlarını yeniden hesaplama
function recalculatePlayerStats(player) {
    // Base statları al
    const baseStats = {
        offense: player.baseOffense || player.offense,
        defense: player.baseDefense || player.defense
    };
    
    // Tüm ekipman bonuslarını ekle
    player.offense = baseStats.offense;
    player.defense = baseStats.defense;
    
    if (player.equipment) {
        Object.values(player.equipment).forEach(item => {
            if (item.boosts) {
                if (item.boosts.offense) player.offense += item.boosts.offense;
                if (item.boosts.defense) player.defense += item.boosts.defense;
            }
        });
    }
} 