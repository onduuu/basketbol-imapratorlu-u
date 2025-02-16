document.addEventListener('DOMContentLoaded', () => {
    loadGame();
});

function displayWelcomeCards() {
    const container = document.getElementById('player-cards-container');
    if (!container) return;

    // Örnek oyuncuları göster (en iyi 3 oyuncu)
    const featuredPlayers = myTeam
        .sort((a, b) => (b.offense + b.defense) - (a.offense + a.defense))
        .slice(0, 3);

    if (featuredPlayers.length === 0) {
        container.innerHTML = `
            <div class="welcome-message">
                <h3>Henüz takımınızda oyuncu yok!</h3>
                <p>Market'e giderek yeni oyuncular alabilirsiniz.</p>
            </div>
        `;
        return;
    }

    const cardsHTML = featuredPlayers.map(player => `
        <div class="player-card" data-quality="${player.quality}">
            <div class="player-image">
                <img src="${player.image}" alt="${player.name}">
            </div>
            <div class="player-info">
                <h3>${player.name}</h3>
                <p class="player-position">${player.position}</p>
                <div class="player-stats">
                    <div>Hücum: ${player.offense}</div>
                    <div>Savunma: ${player.defense}</div>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = cardsHTML;
} 