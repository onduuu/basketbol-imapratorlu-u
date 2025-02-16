document.addEventListener('DOMContentLoaded', () => {
    loadGame();
    initializeFinances();
    updateFinancialDisplay();
    setupCharts();
});

// Finansal veriler
const finances = {
    balance: 0,
    weeklyIncome: 0,
    weeklyExpenses: 0,
    ticketPrice: 30,
    averageAttendance: 0,
    fanSatisfaction: 50,
    sponsorships: [],
    merchandiseSales: 0,
    facilityCost: 5000,
    facilityLevel: 1,
    marketingCampaigns: [],
    transactionHistory: []
};

function initializeFinances() {
    const savedFinances = localStorage.getItem('finances');
    if (savedFinances) {
        Object.assign(finances, JSON.parse(savedFinances));
    } else {
        finances.balance = money;
        saveFinances();
    }
}

function saveFinances() {
    localStorage.setItem('finances', JSON.stringify(finances));
    money = finances.balance;
    saveGame();
}

function updateFinancialDisplay() {
    document.getElementById('total-balance').textContent = `$${finances.balance.toLocaleString()}`;
    document.getElementById('weekly-income').textContent = `$${finances.weeklyIncome.toLocaleString()}`;
    document.getElementById('weekly-expenses').textContent = `$${finances.weeklyExpenses.toLocaleString()}`;
    document.getElementById('avg-attendance').textContent = finances.averageAttendance.toLocaleString();
    document.getElementById('ticket-price').textContent = finances.ticketPrice;
    document.getElementById('merch-sales').textContent = finances.merchandiseSales.toLocaleString();
    document.getElementById('fan-satisfaction').textContent = finances.fanSatisfaction;
    document.getElementById('total-salaries').textContent = calculateTotalSalaries().toLocaleString();
    document.getElementById('facility-cost').textContent = finances.facilityCost.toLocaleString();
    
    updateSponsors();
    updateTransactionHistory();
}

function calculateTotalSalaries() {
    return myTeam.reduce((total, player) => total + player.salary, 0);
}

function adjustTicketPrice() {
    const newPrice = prompt('Yeni bilet fiyatını girin:', finances.ticketPrice);
    if (newPrice && !isNaN(newPrice)) {
        finances.ticketPrice = parseInt(newPrice);
        updateFanSatisfaction();
        saveFinances();
        updateFinancialDisplay();
    }
}

function updateFanSatisfaction() {
    // Bilet fiyatına göre fan memnuniyetini güncelle
    if (finances.ticketPrice < 20) {
        finances.fanSatisfaction = Math.min(100, finances.fanSatisfaction + 5);
    } else if (finances.ticketPrice > 50) {
        finances.fanSatisfaction = Math.max(0, finances.fanSatisfaction - 5);
    }
}

function negotiateSponsorship() {
    const sponsorTypes = [
        { name: 'Yerel Sponsor', value: 10000, duration: 5 },
        { name: 'Ulusal Sponsor', value: 50000, duration: 10 },
        { name: 'Global Sponsor', value: 100000, duration: 15 }
    ];

    const randomSponsor = sponsorTypes[Math.floor(Math.random() * sponsorTypes.length)];
    
    if (confirm(`${randomSponsor.name} size haftalık $${randomSponsor.value.toLocaleString()} öneriyor. Kabul ediyor musunuz?`)) {
        finances.sponsorships.push({
            name: randomSponsor.name,
            value: randomSponsor.value,
            remainingWeeks: randomSponsor.duration
        });
        
        addTransaction('Sponsorluk Anlaşması', randomSponsor.value);
        saveFinances();
        updateFinancialDisplay();
    }
}

function upgradeFacility() {
    const upgradeCost = finances.facilityLevel * 100000;
    
    if (finances.balance >= upgradeCost) {
        if (confirm(`Tesis geliştirme maliyeti: $${upgradeCost.toLocaleString()}. Onaylıyor musunuz?`)) {
            finances.balance -= upgradeCost;
            finances.facilityLevel++;
            finances.facilityCost = finances.facilityLevel * 5000;
            
            addTransaction('Tesis Geliştirme', -upgradeCost);
            saveFinances();
            updateFinancialDisplay();
            showNotification('Tesis başarıyla geliştirildi!');
        }
    } else {
        showNotification('Yetersiz bütçe!');
    }
}

function startMarketingCampaign(type) {
    const campaigns = {
        local: { cost: 10000, duration: 4, effect: 5 },
        national: { cost: 50000, duration: 8, effect: 15 },
        social: { cost: 5000, duration: 2, effect: 3 }
    };

    const campaign = campaigns[type];
    
    if (finances.balance >= campaign.cost) {
        if (confirm(`Kampanya maliyeti: $${campaign.cost.toLocaleString()}. Onaylıyor musunuz?`)) {
            finances.balance -= campaign.cost;
            finances.marketingCampaigns.push({
                type: type,
                remainingWeeks: campaign.duration,
                effect: campaign.effect
            });
            
            addTransaction('Pazarlama Kampanyası', -campaign.cost);
            saveFinances();
            updateFinancialDisplay();
            showNotification('Kampanya başlatıldı!');
        }
    } else {
        showNotification('Yetersiz bütçe!');
    }
}

function addTransaction(description, amount) {
    finances.transactionHistory.unshift({
        date: new Date().toLocaleDateString(),
        description: description,
        amount: amount
    });
    
    if (finances.transactionHistory.length > 50) {
        finances.transactionHistory.pop();
    }
}

function updateSponsors() {
    const sponsorList = document.getElementById('active-sponsors');
    sponsorList.innerHTML = finances.sponsorships
        .map(sponsor => `
            <div class="sponsor-item">
                <span>${sponsor.name}</span>
                <span>$${sponsor.value.toLocaleString()} / hafta</span>
                <span>${sponsor.remainingWeeks} hafta kaldı</span>
            </div>
        `).join('');
}

function updateTransactionHistory() {
    const historyContainer = document.getElementById('transaction-history');
    historyContainer.innerHTML = finances.transactionHistory
        .map(transaction => `
            <div class="transaction-item">
                <span>${transaction.date}</span>
                <span>${transaction.description}</span>
                <span style="color: ${transaction.amount >= 0 ? 'green' : 'red'}">
                    ${transaction.amount >= 0 ? '+' : ''}$${Math.abs(transaction.amount).toLocaleString()}
                </span>
            </div>
        `).join('');
}

function setupCharts() {
    // Maaş dağılımı grafiği
    const salaryCtx = document.getElementById('salaryChart').getContext('2d');
    new Chart(salaryCtx, {
        type: 'pie',
        data: {
            labels: myTeam.map(player => player.name),
            datasets: [{
                data: myTeam.map(player => player.salary),
                backgroundColor: myTeam.map(() => `hsl(${Math.random() * 360}, 70%, 50%)`)
            }]
        }
    });

    // Finansal geçmiş grafiği
    const financeCtx = document.getElementById('financeChart').getContext('2d');
    new Chart(financeCtx, {
        type: 'line',
        data: {
            labels: [...Array(10)].map((_, i) => `Hafta ${i + 1}`),
            datasets: [{
                label: 'Gelir',
                data: finances.transactionHistory
                    .filter(t => t.amount > 0)
                    .map(t => t.amount),
                borderColor: 'green',
                fill: false
            }, {
                label: 'Gider',
                data: finances.transactionHistory
                    .filter(t => t.amount < 0)
                    .map(t => Math.abs(t.amount)),
                borderColor: 'red',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Haftalık güncelleme
setInterval(() => {
    // Sponsorluk gelirlerini ekle
    finances.sponsorships.forEach(sponsor => {
        finances.balance += sponsor.value;
        sponsor.remainingWeeks--;
    });
    
    // Süresi biten sponsorlukları kaldır
    finances.sponsorships = finances.sponsorships.filter(s => s.remainingWeeks > 0);
    
    // Pazarlama kampanyalarını güncelle
    finances.marketingCampaigns = finances.marketingCampaigns.filter(campaign => {
        if (campaign.remainingWeeks > 0) {
            finances.fanSatisfaction = Math.min(100, finances.fanSatisfaction + campaign.effect);
            campaign.remainingWeeks--;
            return true;
        }
        return false;
    });
    
    // Tesis giderlerini düş
    finances.balance -= finances.facilityCost;
    
    saveFinances();
    updateFinancialDisplay();
}, 604800000); // Haftalık (7 gün) 