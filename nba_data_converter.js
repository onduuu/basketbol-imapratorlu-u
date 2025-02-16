// NBA verilerini işlemek için yardımcı fonksiyonlar
class NBADataConverter {
    static async loadPlayers() {
        try {
            const response = await fetch('data/all_seasons.csv');
            const data = await response.text();
            return this.convertCSVToPlayers(data);
        } catch (error) {
            console.error('Veri yükleme hatası:', error);
            return [];
        }
    }

    static convertCSVToPlayers(csvData) {
        const players = csvData.split('\n')
            .slice(1) // Başlık satırını atla
            .filter(row => row.trim()) // Boş satırları filtrele
            .map(row => {
                const [
                    _, // index
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
                ] = row.split(',');

                return {
                    name: player_name,
                    position: this.determinePosition(height, weight),
                    team: team,
                    age: parseFloat(age) || 0,
                    points: parseFloat(points) || 0,
                    rebounds: parseFloat(rebounds) || 0,
                    assists: parseFloat(assists) || 0,
                    quality: this.calculateQuality(points, rebounds, assists),
                    offense: this.calculateOffense(points, ts_pct, usg_pct),
                    defense: this.calculateDefense(rebounds, net_rating),
                    salary: this.calculateSalary(points, rebounds, assists),
                    college: college,
                    country: country,
                    image: `images/players/default.jpg`,
                    stats: {
                        gamesPlayed: parseInt(games_played) || 0,
                        netRating: parseFloat(net_rating) || 0,
                        usageRate: parseFloat(usg_pct) || 0,
                        trueShootingPct: parseFloat(ts_pct) || 0
                    }
                };
            });
        
        return this.filterAndSortPlayers(players);
    }

    static calculateQuality(pts, reb, ast) {
        const total = parseFloat(pts) + parseFloat(reb) + parseFloat(ast);
        if (total > 35) return 'S';
        if (total > 30) return 'S-';
        if (total > 25) return 'A';
        if (total > 20) return 'B';
        if (total > 15) return 'C';
        return 'D';
    }

    static calculateSalary(pts, reb, ast) {
        const baseAmount = 800000;
        const total = parseFloat(pts) * 50000 + 
                     parseFloat(reb) * 30000 + 
                     parseFloat(ast) * 40000;
        return Math.round(baseAmount + total);
    }

    static calculateOffense(pts, ts_pct, usg_pct) {
        const base = parseFloat(pts) * 2;
        const efficiency = parseFloat(ts_pct) * 100;
        const usage = parseFloat(usg_pct);
        return Math.round(Math.min(99, (base + efficiency + usage) / 3));
    }

    static calculateDefense(reb, net_rating) {
        const base = parseFloat(reb) * 3;
        const impact = (parseFloat(net_rating) + 20) * 2; // normalize net rating
        return Math.round(Math.min(99, (base + impact) / 2));
    }

    static determinePosition(height, weight) {
        const h = parseFloat(height);
        if (h < 195) return 'PG';
        if (h < 200) return 'SG';
        if (h < 205) return 'SF';
        if (h < 210) return 'PF';
        return 'C';
    }

    static filterAndSortPlayers(players) {
        // Son sezonun en iyi oyuncularını seç
        return players
            .filter(player => 
                player.points > 5 && // Minimum istatistik gereksinimleri
                player.stats.gamesPlayed > 20
            )
            .sort((a, b) => 
                (b.points + b.rebounds + b.assists) - 
                (a.points + a.rebounds + a.assists)
            )
            .slice(0, 200); // En iyi 200 oyuncuyu al
    }
} 