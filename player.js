// Burada initialPlayers veya players tanımlamasına gerek yok
// Çünkü global.js veya benzeri bir dosyada tanımlandı

// Örneğin:
console.log(players); // Oyuncuları kullan

// Oyuncu enerji sistemi
function initializePlayerEnergy() {
    myTeam.forEach(player => {
        if (!player.energy) {
            player.energy = 100;
        }
    });
    saveGame();
}

function updatePlayerEnergy(playerName, energyChange) {
    const player = myTeam.find(p => p.name === playerName);
    if (player) {
        player.energy = Math.max(0, Math.min(100, player.energy + energyChange));
        saveGame();
    }
}

function getPlayerEnergy(playerName) {
    const player = myTeam.find(p => p.name === playerName);
    return player ? player.energy : 100;
}
