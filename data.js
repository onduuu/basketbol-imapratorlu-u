const initialPlayers = [



{ name: "Shai Gilgeous-Alexander", position: 'PG', team: 'Oklahoma City Thunder', age: 25, points: 31.4, rebounds: 5.5, assists: 6.4, steals: 2.1, turnovers: 2.4, fouls: 2.1, salary: 33600000, quality: 'S+', offense: 94, defense: 88, image: 'images/shai.jpg' },
{ name: 'Giannis Antetokounmpo', position: 'PF', team: 'Milwaukee Bucks', age: 29, points: 30.8, rebounds: 11.2, assists: 6.3, steals: 1.2, turnovers: 3.3, fouls: 3.1, salary: 45640084, quality: 'S+', offense: 93, defense: 91, image: 'images/giannis.jpg' },
{ name: 'Luka Doncic', position: 'PG', team: 'Dallas Mavericks', age: 25, points: 33.9, rebounds: 9.2, assists: 9.8, steals: 1.4, turnovers: 3.9, fouls: 2.8, salary: 40064220, quality: 'S+', offense: 96, defense: 85, image: 'images/doncic.jpg' },
{ name: 'Devin Booker', position: 'SG', team: 'Phoenix Suns', age: 27, points: 27.5, rebounds: 4.6, assists: 6.8, steals: 0.9, turnovers: 2.7, fouls: 2.4, salary: 36016200, quality: 'S+', offense: 91, defense: 83, image: 'images/booker.jpg' },
{ name: 'Donovan Mitchell', position: 'SG', team: 'Cleveland Cavaliers', age: 27, points: 28.0, rebounds: 5.4, assists: 6.2, steals: 1.8, turnovers: 2.8, fouls: 2.7, salary: 32600000, quality: 'S+', offense: 90, defense: 84, image: 'images/mitchell.jpg' },
{ name: 'Anthony Edwards', position: 'SG', team: 'Minnesota Timberwolves', age: 22, points: 26.4, rebounds: 5.2, assists: 5.1, steals: 1.3, turnovers: 2.7, fouls: 2.4, salary: 13534817, quality: 'S+', offense: 89, defense: 86, image: 'images/edwards.jpg' },
{ name: 'Tyrese Haliburton', position: 'PG', team: 'Indiana Pacers', age: 24, points: 21.9, rebounds: 3.9, assists: 11.7, steals: 1.0, turnovers: 2.3, fouls: 1.5, salary: 5808435, quality: 'A+', offense: 88, defense: 82, image: 'images/haliburton.jpg' },
{ name: 'Jalen Brunson', position: 'PG', team: 'New York Knicks', age: 27, points: 27.2, rebounds: 3.6, assists: 6.5, steals: 0.9, turnovers: 2.3, fouls: 2.1, salary: 27700000, quality: 'S+', offense: 89, defense: 81, image: 'images/brunson.jpg' },
{ name: "De'Aaron Fox", position: 'PG', team: 'Sacramento Kings', age: 26, points: 26.9, rebounds: 4.1, assists: 5.6, steals: 1.9, turnovers: 2.6, fouls: 2.3, salary: 32600000, quality: 'S+', offense: 90, defense: 83, image: 'images/fox.jpg' },
{ name: 'Jaylen Brown', position: 'SG', team: 'Boston Celtics', age: 27, points: 26.6, rebounds: 6.9, assists: 3.5, steals: 1.1, turnovers: 2.6, fouls: 2.7, salary: 31830357, quality: 'S+', offense: 88, defense: 85, image: 'images/brown.jpg' },
{ name: 'Trae Young', position: 'PG', team: 'Atlanta Hawks', age: 25, points: 26.1, rebounds: 2.7, assists: 10.8, steals: 1.4, turnovers: 4.1, fouls: 1.8, salary: 40064220, quality: 'S+', offense: 91, defense: 78, image: 'images/young.jpg' },
{ name: 'Tyler Herro', position: 'SG', team: 'Miami Heat', age: 24, points: 20.8, rebounds: 5.3, assists: 4.4, steals: 0.8, turnovers: 2.5, fouls: 1.9, salary: 27000000, quality: 'A+', offense: 85, defense: 79, image: 'images/herro.jpg' },
{ name: 'Jalen Green', position: 'SG', team: 'Houston Rockets', age: 21, points: 18.5, rebounds: 4.5, assists: 3.4, steals: 0.8, turnovers: 2.4, fouls: 2.1, salary: 9891480, quality: 'A', offense: 85, defense: 79, image: 'images/jgreen.jpg' },
{ name: 'Fred VanVleet', position: 'PG', team: 'Houston Rockets', age: 29, points: 17.2, rebounds: 3.7, assists: 8.4, steals: 1.1, turnovers: 2.2, fouls: 1.9, salary: 40800000, quality: 'A', offense: 84, defense: 83, image: 'images/vanvleet.jpg' },
{ name: 'Dillon Brooks', position: 'SF', team: 'Houston Rockets', age: 28, points: 13.7, rebounds: 3.4, assists: 1.7, steals: 0.9, turnovers: 1.4, fouls: 3.1, salary: 20502000, quality: 'B+', offense: 79, defense: 84, image: 'images/brooks.jpg' },
{ name: 'Jeff Green', position: 'PF', team: 'Houston Rockets', age: 37, points: 5.4, rebounds: 2.0, assists: 0.9, steals: 0.3, turnovers: 0.7, fouls: 1.4, salary: 2463840, quality: 'C+', offense: 74, defense: 75, image: 'images/jgreen_vet.jpg' },
{ name: 'Reggie Bullock', position: 'SF', team: 'Houston Rockets', age: 32, points: 5.0, rebounds: 2.4, assists: 1.1, steals: 0.5, turnovers: 0.4, fouls: 1.6, salary: 2463840, quality: 'C+', offense: 75, defense: 77, image: 'images/bullock.jpg' },
{ name: 'Jae\'Sean Tate', position: 'SF', team: 'Houston Rockets', age: 28, points: 4.8, rebounds: 3.1, assists: 1.4, steals: 0.5, turnovers: 0.9, fouls: 2.0, salary: 6500000, quality: 'C+', offense: 73, defense: 78, image: 'images/tate.jpg' },
{ name: 'Aaron Holiday', position: 'PG', team: 'Houston Rockets', age: 27, points: 5.4, rebounds: 1.4, assists: 2.3, steals: 0.5, turnovers: 0.8, fouls: 1.3, salary: 2463840, quality: 'C+', offense: 74, defense: 76, image: 'images/holiday_a.jpg' },
{ name: 'Terry Rozier', position: 'PG', team: 'Miami Heat', age: 29, points: 23.2, rebounds: 3.9, assists: 6.6, steals: 1.2, turnovers: 2.3, fouls: 1.7, salary: 23200000, quality: 'A+', offense: 86, defense: 82, image: 'images/rozier.jpg' },
{ name: 'Nikola Vucevic', position: 'C', team: 'Chicago Bulls', age: 33, points: 17.6, rebounds: 10.6, assists: 3.4, steals: 0.7, turnovers: 1.8, fouls: 2.2, salary: 23200000, quality: 'A', offense: 84, defense: 82, image: 'images/vucevic.jpg' },
{ name: 'Alex Caruso', position: 'SG', team: 'Chicago Bulls', age: 29, points: 10.1, rebounds: 3.7, assists: 3.3, steals: 1.2, turnovers: 1.1, fouls: 2.4, salary: 9460000, quality: 'B+', offense: 78, defense: 86, image: 'images/caruso.jpg' },
{ name: 'Patrick Williams', position: 'PF', team: 'Chicago Bulls', age: 22, points: 10.0, rebounds: 4.0, assists: 1.4, steals: 0.7, turnovers: 0.9, fouls: 1.8, salary: 9835881, quality: 'B+', offense: 78, defense: 82, image: 'images/williams.jpg' },
{ name: 'Ayo Dosunmu', position: 'SG', team: 'Chicago Bulls', age: 24, points: 9.6, rebounds: 2.7, assists: 2.7, steals: 0.7, turnovers: 0.9, fouls: 1.7, salary: 6500000, quality: 'B', offense: 77, defense: 80, image: 'images/dosunmu.jpg' },
{ name: 'Andre Drummond', position: 'C', team: 'Chicago Bulls', age: 30, points: 7.3, rebounds: 8.4, assists: 0.7, steals: 1.1, turnovers: 1.1, fouls: 2.3, salary: 3360000, quality: 'B', offense: 75, defense: 83, image: 'images/drummond.jpg' },
{ name: 'Torrey Craig', position: 'SF', team: 'Chicago Bulls', age: 33, points: 6.1, rebounds: 4.0, assists: 1.0, steals: 0.5, turnovers: 0.6, fouls: 1.9, salary: 2720000, quality: 'B-', offense: 74, defense: 80, image: 'images/craig.jpg' },
{ name: 'Jevon Carter', position: 'PG', team: 'Chicago Bulls', age: 28, points: 5.0, rebounds: 1.7, assists: 1.7, steals: 0.6, turnovers: 0.6, fouls: 1.4, salary: 6000000, quality: 'B-', offense: 73, defense: 79, image: 'images/carter_j.jpg' },
{ name: 'Dalen Terry', position: 'SF', team: 'Chicago Bulls', age: 21, points: 3.4, rebounds: 1.6, assists: 1.1, steals: 0.4, turnovers: 0.5, fouls: 1.0, salary: 3207120, quality: 'C+', offense: 71, defense: 75, image: 'images/terry.jpg' },
{ name: 'Julian Phillips', position: 'SF', team: 'Chicago Bulls', age: 20, points: 3.2, rebounds: 1.5, assists: 0.4, steals: 0.3, turnovers: 0.4, fouls: 0.9, salary: 1119563, quality: 'C', offense: 70, defense: 73, image: 'images/phillips.jpg' },
{ name: 'Nikola Vucevic', position: 'C', team: 'Chicago Bulls', age: 33, points: 17.6, rebounds: 10.6, assists: 3.4, steals: 0.7, turnovers: 1.8, fouls: 2.2, salary: 23200000, quality: 'A', offense: 84, defense: 82, image: 'images/vucevic.jpg' },
{ name: 'Alex Caruso', position: 'SG', team: 'Chicago Bulls', age: 29, points: 10.1, rebounds: 3.7, assists: 3.3, steals: 1.2, turnovers: 1.1, fouls: 2.4, salary: 9460000, quality: 'B+', offense: 78, defense: 86, image: 'images/caruso.jpg' },
{ name: 'Patrick Williams', position: 'PF', team: 'Chicago Bulls', age: 22, points: 10.0, rebounds: 4.0, assists: 1.4, steals: 0.7, turnovers: 0.9, fouls: 1.8, salary: 9835881, quality: 'B+', offense: 78, defense: 82, image: 'images/williams.jpg' },
{ name: 'Ayo Dosunmu', position: 'SG', team: 'Chicago Bulls', age: 24, points: 9.6, rebounds: 2.7, assists: 2.7, steals: 0.7, turnovers: 0.9, fouls: 1.7, salary: 6500000, quality: 'B', offense: 77, defense: 80, image: 'images/dosunmu.jpg' },
{ name: 'Andre Drummond', position: 'C', team: 'Chicago Bulls', age: 30, points: 7.3, rebounds: 8.4, assists: 0.7, steals: 1.1, turnovers: 1.1, fouls: 2.3, salary: 3360000, quality: 'B', offense: 75, defense: 83, image: 'images/drummond.jpg' },
{ name: 'Terry Rozier', position: 'PG', team: 'Miami Heat', age: 29, points: 23.2, rebounds: 3.9, assists: 6.6, steals: 1.2, turnovers: 2.3, fouls: 1.7, salary: 23200000, quality: 'A+', offense: 86, defense: 82, image: 'images/rozier.jpg' },
{ name: 'Joe Ingles', position: 'SF', team: 'Orlando Magic', age: 36, points: 4.9, rebounds: 2.8, assists: 3.4, steals: 0.5, turnovers: 1.0, fouls: 1.5, salary: 11000000, quality: 'B', offense: 76, defense: 75, image: 'images/ingles.jpg' },
{ name: 'Jonathan Isaac', position: 'PF', team: 'Orlando Magic', age: 26, points: 6.0, rebounds: 4.0, assists: 0.7, steals: 0.9, turnovers: 0.8, fouls: 1.9, salary: 17400000, quality: 'B', offense: 75, defense: 84, image: 'images/isaac.jpg' },
{ name: 'Moritz Wagner', position: 'C', team: 'Orlando Magic', age: 26, points: 11.1, rebounds: 4.1, assists: 1.2, steals: 0.5, turnovers: 1.1, fouls: 2.8, salary: 8000000, quality: 'B+', offense: 78, defense: 77, image: 'images/wagner_m.jpg' },
{ name: 'Caleb Martin', position: 'SF', team: 'Miami Heat', age: 28, points: 8.8, rebounds: 4.6, assists: 1.8, steals: 0.8, turnovers: 0.9, fouls: 2.1, salary: 6800000, quality: 'B', offense: 77, defense: 81, image: 'images/martin.jpg' },
{ name: 'Duncan Robinson', position: 'SF', team: 'Miami Heat', age: 29, points: 13.7, rebounds: 2.4, assists: 2.8, steals: 0.5, turnovers: 1.0, fouls: 2.0, salary: 16900000, quality: 'B+', offense: 82, defense: 76, image: 'images/robinson.jpg' },
{ name: 'Josh Richardson', position: 'SG', team: 'Miami Heat', age: 30, points: 9.9, rebounds: 2.3, assists: 2.8, steals: 0.8, turnovers: 1.1, fouls: 1.9, salary: 4000000, quality: 'B', offense: 78, defense: 80, image: 'images/richardson.jpg' },
{ name: 'Jaime Jaquez Jr.', position: 'SF', team: 'Miami Heat', age: 22, points: 12.5, rebounds: 3.8, assists: 2.6, steals: 1.0, turnovers: 1.3, fouls: 1.8, salary: 4664520, quality: 'B+', offense: 80, defense: 82, image: 'images/jaquez.jpg' },
{ name: 'Kevin Love', position: 'PF', team: 'Miami Heat', age: 35, points: 8.8, rebounds: 6.3, assists: 2.6, steals: 0.4, turnovers: 0.9, fouls: 1.6, salary: 3110000, quality: 'B', offense: 77, defense: 76, image: 'images/love.jpg' },
{ name: 'Caleb Martin', position: 'SF', team: 'Miami Heat', age: 28, points: 8.8, rebounds: 4.6, assists: 1.8, steals: 0.8, turnovers: 0.9, fouls: 2.1, salary: 6800000, quality: 'B', offense: 77, defense: 81, image: 'images/martin.jpg' },
{ name: 'Duncan Robinson', position: 'SF', team: 'Miami Heat', age: 29, points: 13.7, rebounds: 2.4, assists: 2.8, steals: 0.5, turnovers: 1.0, fouls: 2.0, salary: 16900000, quality: 'B+', offense: 82, defense: 76, image: 'images/robinson.jpg' },
{ name: 'Josh Richardson', position: 'SG', team: 'Miami Heat', age: 30, points: 9.9, rebounds: 2.3, assists: 2.8, steals: 0.8, turnovers: 1.1, fouls: 1.9, salary: 4000000, quality: 'B', offense: 78, defense: 80, image: 'images/richardson.jpg' },
{ name: 'Jaime Jaquez Jr.', position: 'SF', team: 'Miami Heat', age: 22, points: 12.5, rebounds: 3.8, assists: 2.6, steals: 1.0, turnovers: 1.3, fouls: 1.8, salary: 4664520, quality: 'B+', offense: 80, defense: 82, image: 'images/jaquez.jpg' },
{ name: 'Kevin Love', position: 'PF', team: 'Miami Heat', age: 35, points: 8.8, rebounds: 6.3, assists: 2.6, steals: 0.4, turnovers: 0.9, fouls: 1.6, salary: 3110000, quality: 'B', offense: 77, defense: 76, image: 'images/love.jpg' },
{ name: 'JaVale McGee', position: 'C', team: 'Sacramento Kings', age: 36, points: 2.7, rebounds: 2.2, assists: 0.3, steals: 0.2, turnovers: 0.4, fouls: 1.1, salary: 2510000, quality: 'C', offense: 70, defense: 75, image: 'images/mcgee.jpg' },
{ name: 'Chris Duarte', position: 'SG', team: 'Sacramento Kings', age: 26, points: 4.2, rebounds: 1.4, assists: 0.8, steals: 0.4, turnovers: 0.6, fouls: 1.2, salary: 4124160, quality: 'C+', offense: 73, defense: 75, image: 'images/duarte.jpg' },
{ name: 'Malik Monk', position: 'SG', team: 'Sacramento Kings', age: 25, points: 15.4, rebounds: 2.7, assists: 5.1, steals: 0.6, turnovers: 2.0, fouls: 1.6, salary: 10000000, quality: 'A', offense: 83, defense: 77, image: 'images/monk.jpg' },
{ name: 'Kevin Huerter', position: 'SG', team: 'Sacramento Kings', age: 25, points: 10.2, rebounds: 3.5, assists: 2.6, steals: 0.9, turnovers: 1.1, fouls: 1.8, salary: 15669643, quality: 'B+', offense: 80, defense: 78, image: 'images/huerter.jpg' },
{ name: 'Harrison Barnes', position: 'PF', team: 'Sacramento Kings', age: 31, points: 12.1, rebounds: 3.0, assists: 1.2, steals: 0.7, turnovers: 0.9, fouls: 1.4, salary: 16400000, quality: 'B+', offense: 79, defense: 77, image: 'images/barnes.jpg' },
{ name: 'Keegan Murray', position: 'PF', team: 'Sacramento Kings', age: 23, points: 15.2, rebounds: 5.5, assists: 1.6, steals: 0.8, turnovers: 0.9, fouls: 2.0, salary: 9361560, quality: 'A', offense: 82, defense: 81, image: 'images/murray.jpg' },
{ name: 'Davion Mitchell', position: 'PG', team: 'Sacramento Kings', age: 25, points: 5.4, rebounds: 1.4, assists: 2.4, steals: 0.6, turnovers: 0.7, fouls: 1.4, salary: 4833600, quality: 'B', offense: 75, defense: 82, image: 'images/mitchell.jpg' },
{ name: 'Trey Lyles', position: 'PF', team: 'Sacramento Kings', age: 28, points: 10.1, rebounds: 5.4, assists: 1.1, steals: 0.5, turnovers: 0.8, fouls: 1.9, salary: 8000000, quality: 'B', offense: 77, defense: 76, image: 'images/lyles.jpg' },
{ name: 'Keon Ellis', position: 'SG', team: 'Sacramento Kings', age: 23, points: 5.8, rebounds: 2.4, assists: 1.1, steals: 0.8, turnovers: 0.6, fouls: 1.5, salary: 1719000, quality: 'C+', offense: 74, defense: 77, image: 'images/ellis.jpg' },
{ name: 'Jalen Suggs', position: 'PG', team: 'Orlando Magic', age: 22, points: 12.8, rebounds: 3.2, assists: 2.7, steals: 1.4, turnovers: 1.4, fouls: 2.5, salary: 7252920, quality: 'B+', offense: 79, defense: 84, image: 'images/suggs.jpg' },
{ name: 'Cole Anthony', position: 'PG', team: 'Orlando Magic', age: 23, points: 12.4, rebounds: 4.0, assists: 3.7, steals: 0.7, turnovers: 1.5, fouls: 1.8, salary: 5539959, quality: 'B+', offense: 80, defense: 78, image: 'images/anthony.jpg' },
{ name: 'Wendell Carter Jr.', position: 'C', team: 'Orlando Magic', age: 24, points: 10.3, rebounds: 6.4, assists: 2.0, steals: 0.5, turnovers: 1.2, fouls: 2.4, salary: 13050000, quality: 'B+', offense: 78, defense: 83, image: 'images/carter.jpg' },
{ name: 'Gary Harris', position: 'SG', team: 'Orlando Magic', age: 29, points: 8.2, rebounds: 1.8, assists: 1.9, steals: 0.9, turnovers: 0.7, fouls: 1.6, salary: 13000000, quality: 'B', offense: 77, defense: 80, image: 'images/harris.jpg' },
{ name: 'Markelle Fultz', position: 'PG', team: 'Orlando Magic', age: 25, points: 11.5, rebounds: 3.4, assists: 4.9, steals: 1.1, turnovers: 1.8, fouls: 1.9, salary: 17000000, quality: 'B+', offense: 79, defense: 81, image: 'images/fultz.jpg' },
{ name: 'Gary Harris', position: 'SG', team: 'Orlando Magic', age: 29, points: 8.2, rebounds: 1.8, assists: 1.9, steals: 0.9, turnovers: 0.7, fouls: 1.6, salary: 13000000, quality: 'B', offense: 77, defense: 80, image: 'images/harris.jpg' },
{ name: 'Markelle Fultz', position: 'PG', team: 'Orlando Magic', age: 25, points: 11.5, rebounds: 3.4, assists: 4.9, steals: 1.1, turnovers: 1.8, fouls: 1.9, salary: 17000000, quality: 'B+', offense: 79, defense: 81, image: 'images/fultz.jpg' },
{ name: 'Joe Ingles', position: 'SF', team: 'Orlando Magic', age: 36, points: 4.9, rebounds: 2.8, assists: 3.4, steals: 0.5, turnovers: 1.0, fouls: 1.5, salary: 11000000, quality: 'B', offense: 76, defense: 75, image: 'images/ingles.jpg' },
{ name: 'Jonathan Isaac', position: 'PF', team: 'Orlando Magic', age: 26, points: 6.0, rebounds: 4.0, assists: 0.7, steals: 0.9, turnovers: 0.8, fouls: 1.9, salary: 17400000, quality: 'B', offense: 75, defense: 84, image: 'images/isaac.jpg' },
{ name: 'Moritz Wagner', position: 'C', team: 'Orlando Magic', age: 26, points: 11.1, rebounds: 4.1, assists: 1.2, steals: 0.5, turnovers: 1.1, fouls: 2.8, salary: 8000000, quality: 'B+', offense: 78, defense: 77, image: 'images/wagner_m.jpg' },
{ name: 'Malik Monk', position: 'SG', team: 'Sacramento Kings', age: 25, points: 15.4, rebounds: 2.7, assists: 5.1, steals: 0.6, turnovers: 2.0, fouls: 1.6, salary: 10000000, quality: 'A', offense: 83, defense: 77, image: 'images/monk.jpg' },
{ name: 'Kevin Huerter', position: 'SG', team: 'Sacramento Kings', age: 25, points: 10.2, rebounds: 3.5, assists: 2.6, steals: 0.9, turnovers: 1.1, fouls: 1.8, salary: 15669643, quality: 'B+', offense: 80, defense: 78, image: 'images/huerter.jpg' },
{ name: 'Harrison Barnes', position: 'PF', team: 'Sacramento Kings', age: 31, points: 12.1, rebounds: 3.0, assists: 1.2, steals: 0.7, turnovers: 0.9, fouls: 1.4, salary: 16400000, quality: 'B+', offense: 79, defense: 77, image: 'images/barnes.jpg' },
{ name: 'Keegan Murray', position: 'PF', team: 'Sacramento Kings', age: 23, points: 15.2, rebounds: 5.5, assists: 1.6, steals: 0.8, turnovers: 0.9, fouls: 2.0, salary: 9361560, quality: 'A', offense: 82, defense: 81, image: 'images/murray.jpg' },
{ name: 'Davion Mitchell', position: 'PG', team: 'Sacramento Kings', age: 25, points: 5.4, rebounds: 1.4, assists: 2.4, steals: 0.6, turnovers: 0.7, fouls: 1.4, salary: 4833600, quality: 'B', offense: 75, defense: 82, image: 'images/mitchell.jpg' },
{ name: 'Alex Len', position: 'C', team: 'Sacramento Kings', age: 30, points: 3.1, rebounds: 2.7, assists: 0.5, steals: 0.2, turnovers: 0.5, fouls: 1.4, salary: 3196448, quality: 'C+', offense: 72, defense: 76, image: 'images/len.jpg' },
{ name: 'Trey Lyles', position: 'PF', team: 'Sacramento Kings', age: 28, points: 10.1, rebounds: 5.4, assists: 1.1, steals: 0.5, turnovers: 0.8, fouls: 1.9, salary: 8000000, quality: 'B', offense: 77, defense: 76, image: 'images/lyles.jpg' },
{ name: 'Keon Ellis', position: 'SG', team: 'Sacramento Kings', age: 23, points: 5.8, rebounds: 2.4, assists: 1.1, steals: 0.8, turnovers: 0.6, fouls: 1.5, salary: 1719000, quality: 'C+', offense: 74, defense: 77, image: 'images/ellis.jpg' },
{ name: 'Collin Sexton', position: 'PG', team: 'Utah Jazz', age: 25, points: 18.7, rebounds: 2.7, assists: 4.9, steals: 0.9, turnovers: 2.2, fouls: 2.0, salary: 17325000, quality: 'A', offense: 85, defense: 79, image: 'images/sexton.jpg' },
{ name: 'Ochai Agbaji', position: 'SG', team: 'Utah Jazz', age: 23, points: 7.9, rebounds: 2.3, assists: 1.1, steals: 0.6, turnovers: 0.7, fouls: 1.5, salary: 3918360, quality: 'B', offense: 77, defense: 79, image: 'images/agbaji.jpg' },
{ name: 'Talen Horton-Tucker', position: 'SG', team: 'Utah Jazz', age: 23, points: 8.6, rebounds: 2.4, assists: 3.1, steals: 0.8, turnovers: 1.6, fouls: 1.7, salary: 11000000, quality: 'B', offense: 78, defense: 77, image: 'images/tht.jpg' },
{ name: 'Kelly Olynyk', position: 'C', team: 'Utah Jazz', age: 32, points: 8.1, rebounds: 5.1, assists: 4.4, steals: 0.9, turnovers: 1.5, fouls: 2.4, salary: 12195122, quality: 'B', offense: 77, defense: 78, image: 'images/olynyk.jpg' },
{ name: 'Simone Fontecchio', position: 'SF', team: 'Utah Jazz', age: 28, points: 8.9, rebounds: 3.5, assists: 1.5, steals: 0.6, turnovers: 1.0, fouls: 1.8, salary: 3200000, quality: 'B', offense: 78, defense: 77, image: 'images/fontecchio.jpg' },
{ name: 'Taylor Hendricks', position: 'PF', team: 'Utah Jazz', age: 19, points: 4.2, rebounds: 2.8, assists: 0.4, steals: 0.3, turnovers: 0.5, fouls: 1.4, salary: 4844280, quality: 'C', offense: 72, defense: 75, image: 'images/hendricks.jpg' },
{ name: 'Kris Murray', position: 'SF', team: 'Portland Trail Blazers', age: 23, points: 8.5, rebounds: 3.2, assists: 1.1, steals: 0.5, turnovers: 0.7, fouls: 1.6, salary: 3600000, quality: 'B', offense: 76, defense: 75, image: 'images/kmurray.jpg' },
{ name: 'Matisse Thybulle', position: 'SF', team: 'Portland Trail Blazers', age: 26, points: 6.8, rebounds: 2.5, assists: 1.4, steals: 1.4, turnovers: 0.7, fouls: 2.1, salary: 11000000, quality: 'B', offense: 74, defense: 88, image: 'images/thybulle.jpg' },
{ name: 'Toumani Camara', position: 'PF', team: 'Portland Trail Blazers', age: 23, points: 7.5, rebounds: 4.8, assists: 1.1, steals: 0.8, turnovers: 0.8, fouls: 2.2, salary: 1119563, quality: 'B', offense: 75, defense: 79, image: 'images/camara.jpg' },
{ name: 'Jalen Suggs', position: 'PG', team: 'Orlando Magic', age: 22, points: 12.8, rebounds: 3.2, assists: 2.7, steals: 1.4, turnovers: 1.4, fouls: 2.5, salary: 7252920, quality: 'B+', offense: 79, defense: 84, image: 'images/suggs.jpg' },
{ name: 'Cole Anthony', position: 'PG', team: 'Orlando Magic', age: 23, points: 12.4, rebounds: 4.0, assists: 3.7, steals: 0.7, turnovers: 1.5, fouls: 1.8, salary: 5539959, quality: 'B+', offense: 80, defense: 78, image: 'images/anthony.jpg' },
{ name: 'Wendell Carter Jr.', position: 'C', team: 'Orlando Magic', age: 24, points: 10.3, rebounds: 6.4, assists: 2.0, steals: 0.5, turnovers: 1.2, fouls: 2.4, salary: 13050000, quality: 'B+', offense: 78, defense: 83, image: 'images/carter.jpg' },
{ name: 'Amen Thompson', position: 'PG', team: 'Houston Rockets', age: 20, points: 9.6, rebounds: 6.1, assists: 2.9, steals: 0.9, turnovers: 1.7, fouls: 2.1, salary: 9248640, quality: 'B', offense: 79, defense: 82, image: 'images/thompson.jpg' },
{ name: 'Cam Thomas', position: 'SG', team: 'Brooklyn Nets', age: 22, points: 21.2, rebounds: 2.7, assists: 2.7, steals: 0.6, turnovers: 1.8, fouls: 1.5, salary: 2240160, quality: 'A+', offense: 86, defense: 78, image: 'images/thomas.jpg' },
{ name: 'Nicolas Claxton', position: 'C', team: 'Brooklyn Nets', age: 24, points: 12.4, rebounds: 9.8, assists: 1.9, steals: 0.7, turnovers: 1.6, fouls: 2.7, salary: 8750000, quality: 'B+', offense: 79, defense: 87, image: 'images/claxton.jpg' },
{ name: 'Austin Reaves', position: 'SG', team: 'Los Angeles Lakers', age: 25, points: 15.7, rebounds: 4.2, assists: 5.1, steals: 0.9, turnovers: 1.8, fouls: 2.1, salary: 12000000, quality: 'A', offense: 83, defense: 80, image: 'images/reaves.jpg' },
{ name: 'Rui Hachimura', position: 'PF', team: 'Los Angeles Lakers', age: 25, points: 13.2, rebounds: 4.3, assists: 1.1, steals: 0.5, turnovers: 1.0, fouls: 1.8, salary: 15700000, quality: 'B+', offense: 81, defense: 79, image: 'images/hachimura.jpg' },
{ name: 'Herbert Jones', position: 'SF', team: 'New Orleans Pelicans', age: 25, points: 11.0, rebounds: 3.6, assists: 2.6, steals: 1.4, turnovers: 1.1, fouls: 2.7, salary: 12500000, quality: 'B+', offense: 78, defense: 87, image: 'images/jones.jpg' },
{ name: 'Deandre Ayton', position: 'C', team: 'Portland Trail Blazers', age: 25, points: 16.1, rebounds: 11.0, assists: 1.7, steals: 0.8, turnovers: 1.9, fouls: 2.6, salary: 32459438, quality: 'A', offense: 82, defense: 85, image: 'images/ayton.jpg' },
{ name: 'Jerami Grant', position: 'PF', team: 'Portland Trail Blazers', age: 29, points: 21.2, rebounds: 3.5, assists: 2.7, steals: 0.8, turnovers: 1.7, fouls: 2.2, salary: 27586207, quality: 'A+', offense: 85, defense: 84, image: 'images/grant.jpg' },
{ name: 'Anfernee Simons', position: 'SG', team: 'Portland Trail Blazers', age: 24, points: 23.3, rebounds: 3.2, assists: 5.1, steals: 0.9, turnovers: 2.4, fouls: 1.8, salary: 24107143, quality: 'A+', offense: 87, defense: 79, image: 'images/simons.jpg' },
{ name: 'Shaedon Sharpe', position: 'SG', team: 'Portland Trail Blazers', age: 20, points: 16.2, rebounds: 5.1, assists: 3.2, steals: 0.9, turnovers: 2.1, fouls: 1.9, salary: 6503040, quality: 'A', offense: 83, defense: 80, image: 'images/sharpe.jpg' },
{ name: 'Keyonte George', position: 'PG', team: 'Utah Jazz', age: 20, points: 11.5, rebounds: 2.4, assists: 4.6, steals: 0.7, turnovers: 1.9, fouls: 1.6, salary: 3700000, quality: 'B+', offense: 80, defense: 78, image: 'images/george.jpg' },
{ name: 'John Collins', position: 'PF', team: 'Utah Jazz', age: 26, points: 14.1, rebounds: 8.3, assists: 1.2, steals: 0.5, turnovers: 1.3, fouls: 2.8, salary: 25340000, quality: 'B+', offense: 81, defense: 82, image: 'images/collins.jpg' },
{ name: 'Walker Kessler', position: 'C', team: 'Utah Jazz', age: 22, points: 8.8, rebounds: 8.2, assists: 1.0, steals: 0.5, turnovers: 0.9, fouls: 2.5, salary: 3039600, quality: 'B', offense: 76, defense: 85, image: 'images/kessler.jpg' },
{ name: 'Sam Hauser', position: 'SF', team: 'Boston Celtics', age: 26, points: 10.2, rebounds: 3.8, assists: 1.1, steals: 0.5, turnovers: 0.5, fouls: 1.4, salary: 1927896, quality: 'B+', offense: 81, defense: 79, image: 'images/hauser.jpg' },
{ name: 'RJ Barrett', position: 'SF', team: 'Toronto Raptors', age: 23, points: 19.7, rebounds: 5.0, assists: 3.6, steals: 0.6, turnovers: 2.2, fouls: 2.1, salary: 23883929, quality: 'A', offense: 85, defense: 82, image: 'images/barrett.jpg' },
{ name: 'Immanuel Quickley', position: 'PG', team: 'Toronto Raptors', age: 24, points: 17.4, rebounds: 4.1, assists: 5.3, steals: 1.1, turnovers: 1.5, fouls: 1.7, salary: 4171548, quality: 'A', offense: 84, defense: 83, image: 'images/quickley.jpg' },
{ name: 'OG Anunoby', position: 'SF', team: 'New York Knicks', age: 26, points: 15.1, rebounds: 3.9, assists: 2.6, steals: 1.3, turnovers: 1.3, fouls: 2.4, salary: 18642857, quality: 'A', offense: 82, defense: 88, image: 'images/anunoby.jpg' },
{ name: 'Donte DiVincenzo', position: 'SG', team: 'New York Knicks', age: 27, points: 13.6, rebounds: 3.4, assists: 2.7, steals: 1.3, turnovers: 1.0, fouls: 1.8, salary: 4725000, quality: 'B+', offense: 81, defense: 84, image: 'images/divincenzo.jpg' },
{ name: 'Buddy Hield', position: 'SG', team: 'Philadelphia 76ers', age: 31, points: 12.5, rebounds: 3.2, assists: 2.7, steals: 0.8, turnovers: 1.2, fouls: 1.6, salary: 19200000, quality: 'B+', offense: 83, defense: 78, image: 'images/hield.jpg' },
{ name: 'Kyle Kuzma', position: 'PF', team: 'Washington Wizards', age: 28, points: 22.4, rebounds: 6.4, assists: 4.2, steals: 0.4, turnovers: 2.8, fouls: 2.1, salary: 23000000, quality: 'A+', offense: 86, defense: 81, image: 'images/kuzma.jpg' },
{ name: 'Jordan Poole', position: 'SG', team: 'Washington Wizards', age: 24, points: 16.9, rebounds: 2.5, assists: 3.8, steals: 0.7, turnovers: 2.5, fouls: 2.0, salary: 27000000, quality: 'A', offense: 84, defense: 77, image: 'images/poole.jpg' },
{ name: 'Coby White', position: 'PG', team: 'Chicago Bulls', age: 24, points: 19.4, rebounds: 4.7, assists: 5.2, steals: 0.8, turnovers: 1.9, fouls: 1.7, salary: 9500000, quality: 'A', offense: 85, defense: 80, image: 'images/cwhite.jpg' },
{ name: 'Keldon Johnson', position: 'SF', team: 'San Antonio Spurs', age: 24, points: 15.7, rebounds: 6.1, assists: 2.7, steals: 0.7, turnovers: 1.6, fouls: 2.0, salary: 20000000, quality: 'A', offense: 83, defense: 81, image: 'images/johnson.jpg' },
{ name: 'Devin Vassell', position: 'SG', team: 'San Antonio Spurs', age: 23, points: 19.2, rebounds: 3.8, assists: 4.0, steals: 1.2, turnovers: 1.9, fouls: 2.1, salary: 5887899, quality: 'A', offense: 84, defense: 82, image: 'images/vassell.jpg' },
{ name: 'Jabari Smith Jr.', position: 'PF', team: 'Houston Rockets', age: 20, points: 13.3, rebounds: 8.4, assists: 1.6, steals: 0.7, turnovers: 1.3, fouls: 2.6, salary: 9301600, quality: 'B+', offense: 81, defense: 83, image: 'images/smith.jpg' },
{ name: 'deneme.', position: 'PF', team: 'Houston Rockets', age: 20, points: 13.3, rebounds: 8.4, assists: 1.6, steals: 0.7, turnovers: 1.3, fouls: 2.6, salary: 9301600, quality: 'B+', offense: 81, defense: 83, image: 'images/smith.jpg' },
{ name: 'Russell Westbrook', position: 'PG', team: 'LA Clippers', age: 35, points: 11.1, rebounds: 5.1, assists: 4.4, steals: 1.1, turnovers: 1.7, fouls: 2.0, salary: 3800000, quality: 'B+', offense: 82, defense: 80, image: 'images/westbrook.jpg' },
{ name: 'Bradley Beal', position: 'SG', team: 'Phoenix Suns', age: 30, points: 18.2, rebounds: 3.3, assists: 4.0, steals: 0.9, turnovers: 2.1, fouls: 2.0, salary: 46741590, quality: 'A', offense: 86, defense: 81, image: 'images/beal.jpg' },
{ name: 'Aaron Gordon', position: 'PF', team: 'Denver Nuggets', age: 28, points: 13.8, rebounds: 6.8, assists: 3.4, steals: 0.9, turnovers: 1.6, fouls: 2.4, salary: 22300000, quality: 'B+', offense: 82, defense: 85, image: 'images/gordon.jpg' },
{ name: 'Karl-Anthony Towns', position: 'C', team: 'Minnesota Timberwolves', age: 28, points: 22.1, rebounds: 8.4, assists: 3.0, steals: 0.7, turnovers: 2.8, fouls: 3.2, salary: 36016200, quality: 'A+', offense: 88, defense: 83, image: 'images/towns.jpg' },
{ name: 'Rudy Gobert', position: 'C', team: 'Minnesota Timberwolves', age: 31, points: 13.8, rebounds: 12.8, assists: 1.2, steals: 0.7, turnovers: 1.6, fouls: 3.0, salary: 41000000, quality: 'B+', offense: 78, defense: 92, image: 'images/gobert.jpg' },
{ name: 'Alperen Şengün', position: 'C', team: 'Houston Rockets', age: 21, points: 21.3, rebounds: 9.4, assists: 5.0, steals: 1.2, turnovers: 3.1, fouls: 3.2, salary: 3536280, quality: 'A+', offense: 86, defense: 84, image: 'images/sengun.jpg' },
{ name: 'Jalen Green', position: 'SG', team: 'Houston Rockets', age: 21, points: 18.5, rebounds: 4.5, assists: 3.4, steals: 0.8, turnovers: 2.4, fouls: 2.1, salary: 9891480, quality: 'A', offense: 85, defense: 79, image: 'images/jgreen.jpg' },
{ name: 'Brandon Miller', position: 'SF', team: 'Charlotte Hornets', age: 21, points: 16.7, rebounds: 3.9, assists: 2.3, steals: 0.7, turnovers: 1.7, fouls: 2.2, salary: 9248640, quality: 'A', offense: 83, defense: 80, image: 'images/miller.jpg' },
{ name: 'Scoot Henderson', position: 'PG', team: 'Portland Trail Blazers', age: 19, points: 13.6, rebounds: 3.0, assists: 5.4, steals: 0.9, turnovers: 2.8, fouls: 2.1, salary: 9247440, quality: 'B+', offense: 81, defense: 78, image: 'images/henderson.jpg' },
{ name: 'Klay Thompson', position: 'SG', team: 'Golden State Warriors', age: 33, points: 17.6, rebounds: 3.3, assists: 2.3, steals: 0.7, turnovers: 1.5, fouls: 1.9, salary: 43200000, quality: 'A', offense: 85, defense: 82, image: 'images/thompson.jpg' },
{ name: 'Draymond Green', position: 'PF', team: 'Golden State Warriors', age: 33, points: 9.8, rebounds: 7.1, assists: 6.3, steals: 1.1, turnovers: 2.8, fouls: 3.1, salary: 22300000, quality: 'B+', offense: 79, defense: 89, image: 'images/dgreen.jpg' },
{ name: 'Devin Vassell', position: 'SG', team: 'San Antonio Spurs', age: 23, points: 19.2, rebounds: 3.8, assists: 4.0, steals: 1.2, turnovers: 1.9, fouls: 2.1, salary: 5887899, quality: 'A', offense: 84, defense: 82, image: 'images/vassell.jpg' },
{ name: 'Victor Wembanyama', position: 'C', team: 'San Antonio Spurs', age: 20, points: 20.7, rebounds: 10.2, assists: 3.4, steals: 1.2, turnovers: 3.4, fouls: 2.6, salary: 12160680, quality: 'A+', offense: 85, defense: 91, image: 'images/wembanyama.jpg' },
{ name: 'DeMar DeRozan', position: 'SF', team: 'Chicago Bulls', age: 34, points: 22.7, rebounds: 4.1, assists: 5.3, steals: 1.0, turnovers: 1.9, fouls: 2.1, salary: 28600000, quality: 'A+', offense: 87, defense: 82, image: 'images/derozan.jpg' },
{ name: 'Zach LaVine', position: 'SG', team: 'Chicago Bulls', age: 28, points: 19.5, rebounds: 5.2, assists: 3.9, steals: 0.9, turnovers: 1.8, fouls: 2.0, salary: 40000000, quality: 'A', offense: 86, defense: 80, image: 'images/lavine.jpg' },
{ name: 'Lauri Markkanen', position: 'PF', team: 'Utah Jazz', age: 26, points: 23.2, rebounds: 8.3, assists: 1.7, steals: 0.9, turnovers: 1.8, fouls: 2.2, salary: 17300000, quality: 'A+', offense: 87, defense: 83, image: 'images/markkanen.jpg' },
{ name: 'Jordan Clarkson', position: 'SG', team: 'Utah Jazz', age: 31, points: 17.1, rebounds: 3.5, assists: 4.9, steals: 0.8, turnovers: 2.6, fouls: 1.9, salary: 14260000, quality: 'A', offense: 84, defense: 79, image: 'images/clarkson.jpg' },
{ name: 'Cade Cunningham', position: 'PG', team: 'Detroit Pistons', age: 22, points: 22.7, rebounds: 4.1, assists: 7.5, steals: 1.0, turnovers: 3.4, fouls: 2.8, salary: 11055360, quality: 'A+', offense: 86, defense: 82, image: 'images/cunningham.jpg' },
{ name: 'Franz Wagner', position: 'SF', team: 'Orlando Magic', age: 22, points: 20.8, rebounds: 5.4, assists: 3.9, steals: 1.0, turnovers: 2.1, fouls: 2.3, salary: 5508720, quality: 'A+', offense: 85, defense: 83, image: 'images/wagner.jpg' },
{ name: 'Evan Mobley', position: 'PF', team: 'Cleveland Cavaliers', age: 22, points: 16.2, rebounds: 10.5, assists: 3.0, steals: 0.9, turnovers: 2.1, fouls: 2.5, salary: 8882640, quality: 'A', offense: 83, defense: 88, image: 'images/mobley.jpg' },
{ name: 'Scottie Barnes', position: 'PF', team: 'Toronto Raptors', age: 22, points: 20.0, rebounds: 8.3, assists: 6.1, steals: 1.2, turnovers: 2.5, fouls: 2.7, salary: 8008680, quality: 'A+', offense: 84, defense: 86, image: 'images/barnes.jpg' },
{ name: 'Pascal Siakam', position: 'PF', team: 'Indiana Pacers', age: 29, points: 22.2, rebounds: 6.3, assists: 4.9, steals: 0.8, turnovers: 2.4, fouls: 2.8, salary: 37800000, quality: 'A+', offense: 86, defense: 84, image: 'images/siakam.jpg' },
{ name: 'Julius Randle', position: 'PF', team: 'New York Knicks', age: 29, points: 24.0, rebounds: 9.2, assists: 5.0, steals: 0.6, turnovers: 2.8, fouls: 2.7, salary: 28200000, quality: 'A+', offense: 87, defense: 83, image: 'images/randle.jpg' },
{ name: 'Jamal Murray', position: 'PG', team: 'Denver Nuggets', age: 26, points: 20.9, rebounds: 4.0, assists: 6.7, steals: 1.0, turnovers: 2.3, fouls: 1.9, salary: 33600000, quality: 'A+', offense: 87, defense: 82, image: 'images/murray.jpg' },
{ name: 'Paul George', position: 'SF', team: 'LA Clippers', age: 33, points: 22.6, rebounds: 5.2, assists: 3.5, steals: 1.5, turnovers: 2.4, fouls: 2.6, salary: 45640084, quality: 'A+', offense: 87, defense: 86, image: 'images/george.jpg' },
{ name: 'James Harden', position: 'PG', team: 'LA Clippers', age: 34, points: 17.2, rebounds: 4.8, assists: 8.5, steals: 1.1, turnovers: 2.4, fouls: 1.9, salary: 35640000, quality: 'A', offense: 85, defense: 80, image: 'images/harden.jpg' },
{ name: 'Tyrese Maxey', position: 'PG', team: 'Philadelphia 76ers', age: 23, points: 25.9, rebounds: 3.6, assists: 6.2, steals: 1.0, turnovers: 2.1, fouls: 1.7, salary: 2726880, quality: 'S+', offense: 89, defense: 82, image: 'images/maxey.jpg' },
{ name: 'Jrue Holiday', position: 'PG', team: 'Boston Celtics', age: 33, points: 12.8, rebounds: 5.4, assists: 4.9, steals: 0.9, turnovers: 1.7, fouls: 2.1, salary: 36860000, quality: 'B+', offense: 82, defense: 88, image: 'images/holiday.jpg' },
{ name: 'Kristaps Porzingis', position: 'C', team: 'Boston Celtics', age: 28, points: 20.3, rebounds: 7.2, assists: 1.9, steals: 0.7, turnovers: 1.8, fouls: 2.6, salary: 36000000, quality: 'A+', offense: 86, defense: 87, image: 'images/porzingis.jpg' },
{ name: 'Bam Adebayo', position: 'C', team: 'Miami Heat', age: 26, points: 21.8, rebounds: 10.5, assists: 4.2, steals: 1.1, turnovers: 2.6, fouls: 2.8, salary: 32600000, quality: 'A+', offense: 85, defense: 90, image: 'images/adebayo.jpg' },
{ name: 'Damian Lillard', position: 'PG', team: 'Milwaukee Bucks', age: 33, points: 24.7, rebounds: 4.4, assists: 7.0, steals: 1.0, turnovers: 2.7, fouls: 2.1, salary: 45640084, quality: 'A+', offense: 89, defense: 80, image: 'images/lillard.jpg' },
{ name: 'Jalen Williams', position: 'SG', team: 'Oklahoma City Thunder', age: 22, points: 19.5, rebounds: 4.0, assists: 4.4, steals: 1.1, turnovers: 1.9, fouls: 2.3, salary: 4449120, quality: 'A+', offense: 84, defense: 82, image: 'images/jwilliams.jpg' },
{ name: 'Paolo Banchero', position: 'PF', team: 'Orlando Magic', age: 21, points: 22.6, rebounds: 6.8, assists: 5.4, steals: 1.0, turnovers: 2.7, fouls: 2.2, salary: 11608080, quality: 'A+', offense: 86, defense: 83, image: 'images/banchero.jpg' },
{ name: 'Mikal Bridges', position: 'SF', team: 'Brooklyn Nets', age: 27, points: 21.7, rebounds: 4.7, assists: 3.6, steals: 1.0, turnovers: 1.8, fouls: 2.1, salary: 21700000, quality: 'A+', offense: 85, defense: 87, image: 'images/bridges.jpg' },
{ name: 'Domantas Sabonis', position: 'C', team: 'Sacramento Kings', age: 27, points: 20.1, rebounds: 13.7, assists: 8.3, steals: 0.8, turnovers: 3.2, fouls: 3.4, salary: 30600000, quality: 'A+', offense: 87, defense: 86, image: 'images/sabonis.jpg' },
{ name: 'Nikola Jokic', position: 'C', team: 'Denver Nuggets', age: 29, points: 26.1, rebounds: 12.3, assists: 9.0, steals: 1.2, turnovers: 3.0, fouls: 2.7, salary: 47600000, quality: 'S+', offense: 95, defense: 89, image: 'images/jokic.jpg' },
{ name: 'Kawhi Leonard', position: 'SF', team: 'LA Clippers', age: 32, points: 23.7, rebounds: 6.1, assists: 3.6, steals: 1.6, turnovers: 1.7, fouls: 1.5, salary: 45640084, quality: 'A+', offense: 88, defense: 90, image: 'images/leonard.jpg' },
{ name: 'Stephen Curry', position: 'PG', team: 'Golden State Warriors', age: 35, points: 26.8, rebounds: 4.4, assists: 4.9, steals: 0.7, turnovers: 3.1, fouls: 2.1, salary: 51915615, quality: 'S+', offense: 93, defense: 82, image: 'images/curry.jpg' },
{ name: 'Anthony Davis', position: 'C', team: 'Los Angeles Lakers', age: 30, points: 24.7, rebounds: 12.4, assists: 3.7, steals: 1.2, turnovers: 2.5, fouls: 2.7, salary: 40600000, quality: 'A+', offense: 88, defense: 93, image: 'images/davis.jpg' },
{ name: 'Zion Williamson', position: 'PF', team: 'New Orleans Pelicans', age: 23, points: 22.9, rebounds: 5.8, assists: 5.0, steals: 1.1, turnovers: 2.8, fouls: 2.3, salary: 33500000, quality: 'A+', offense: 87, defense: 83, image: 'images/zion.jpg' },
{ name: 'Brandon Ingram', position: 'SF', team: 'New Orleans Pelicans', age: 26, points: 21.2, rebounds: 4.9, assists: 5.7, steals: 0.7, turnovers: 2.6, fouls: 2.1, salary: 31650000, quality: 'A+', offense: 86, defense: 82, image: 'images/ingram.jpg' },
{ name: 'Ja Morant', position: 'PG', team: 'Memphis Grizzlies', age: 24, points: 25.1, rebounds: 5.6, assists: 8.1, steals: 1.1, turnovers: 3.3, fouls: 2.1, salary: 33500000, quality: 'S+', offense: 90, defense: 83, image: 'images/morant.jpg' },
{ name: 'Jaren Jackson Jr.', position: 'PF', team: 'Memphis Grizzlies', age: 24, points: 22.5, rebounds: 5.6, assists: 2.1, steals: 1.1, turnovers: 2.4, fouls: 3.2, salary: 27600000, quality: 'A+', offense: 85, defense: 89, image: 'images/jackson.jpg' },
{ name: 'Darius Garland', position: 'PG', team: 'Cleveland Cavaliers', age: 24, points: 20.7, rebounds: 2.8, assists: 7.0, steals: 1.4, turnovers: 2.8, fouls: 1.8, salary: 27800000, quality: 'A+', offense: 86, defense: 81, image: 'images/garland.jpg' },
{ name: 'Önder Atun', position: 'SF', team: 'Banvit Basketbol', age: 18, points: 20.72, rebounds: 5.6, assists: 3.8, steals: 2.8, turnovers: 0.8, fouls: 1.9, salary: 1, quality: 'S', offense: 108, defense: 115, image: 'images/onder.jpg' },
{ name: 'Ömer Atun', position: 'SG', team: 'Banvit Basketbol', age: 18, points: 18.6, rebounds: 8.6, assists: 4.8, steals: 3.2, turnovers: 0.8, fouls: 1.9, salary: 1, quality: 'S', offense: 98, defense: 125, image: 'images/omeratun.jpg' },
{ name: 'Sinan Emre Bitim', position: 'C', team: 'Banvit Basketbol', age: 18, points: 11.6, rebounds: 8.6, assists: 2.8, steals: 0.2, turnovers: 0.8, fouls: 1.9, salary: 1, quality: 'S', offense: 99, defense: 105, image: 'images/sinan.jpg' },
{ name: 'Cihat MERT Dalgalı', position: 'PF', team: 'Banvit Basketbol', age: 18, points: 19.6, rebounds: 9.6, assists: 3.8, steals: 0.2, turnovers: 0.8, fouls: 1.9, salary: 1, quality: 'S', offense: 103, defense: 110, image: 'images/cihat.jpg' },
{ name: 'Mert Işık', position: 'PG', team: 'Banvit Basketbol', age: 18, points: 10.6, rebounds: 5.2, assists: 5.82, steals: 5.2, turnovers: 0.8, fouls: 1.9, salary: 1, quality: 'S', offense: 93, defense: 129, image: 'images/mertısık.jpg' },
{ name: 'Yunus Emre Hamatoğlu', position: 'PF', team: 'Houston Rockets', age: 28, points: 13.6, rebounds: 9.6, assists: 0.8, steals: 0.2, turnovers: 0.8, fouls: 1.9, salary: 1, quality: 'S', offense: 93, defense: 119, image: 'images/yunusemre.jpg' },
{ name: 'Joel Embiid', position: 'C', team: 'Philadelphia 76ers', age: 29, points: 35.3, rebounds: 11.3, assists: 5.7, steals: 1.1, turnovers: 3.6, fouls: 3.1, salary: 47600000, quality: 'S+', offense: 94, defense: 90, image: 'images/embiid.jpg' },
{ name: 'Jayson Tatum', position: 'SF', team: 'Boston Celtics', age: 25, points: 27.3, rebounds: 8.8, assists: 4.7, steals: 1.0, turnovers: 2.7, fouls: 2.2, salary: 32600000, quality: 'S+', offense: 91, defense: 88, image: 'images/tatum.jpg' },
{ name: 'Derrick White', position: 'PG', team: 'Boston Celtics', age: 29, points: 15.3, rebounds: 3.9, assists: 5.2, steals: 1.1, turnovers: 1.7, fouls: 2.1, salary: 19625000, quality: 'A', offense: 83, defense: 86, image: 'images/white.jpg' },
{ name: 'Jimmy Butler', position: 'SF', team: 'Miami Heat', age: 34, points: 21.0, rebounds: 5.3, assists: 4.7, steals: 1.3, turnovers: 1.9, fouls: 1.6, salary: 37650000, quality: 'A+', offense: 86, defense: 88, image: 'images/butler.jpg' },
{ name: 'Kevin Durant', position: 'SF', team: 'Phoenix Suns', age: 35, points: 28.3, rebounds: 6.6, assists: 5.6, steals: 0.8, turnovers: 3.3, fouls: 2.1, salary: 47649708, quality: 'S+', offense: 93, defense: 87, image: 'images/durant.jpg' },
{ name: 'LeBron James', position: 'SF', team: 'Los Angeles Lakers', age: 39, points: 25.3, rebounds: 7.3, assists: 7.9, steals: 1.2, turnovers: 3.3, fouls: 1.6, salary: 47600000, quality: 'S+', offense: 90, defense: 85, image: 'images/lebron.jpg' },
{ name: 'Donovan Mitchell', position: 'SG', team: 'Cleveland Cavaliers', age: 27, points: 28.0, rebounds: 5.4, assists: 6.2, steals: 1.8, turnovers: 2.8, fouls: 2.7, salary: 32600000, quality: 'S+', offense: 90, defense: 84, image: 'images/mitchell.jpg' },
{ name: 'Dejounte Murray', position: 'PG', team: 'Atlanta Hawks', age: 27, points: 21.5, rebounds: 5.1, assists: 6.3, steals: 1.4, turnovers: 2.4, fouls: 2.2, salary: 17700000, quality: 'A+', offense: 85, defense: 86, image: 'images/murray.jpg' },
{ name: 'Desmond Bane', position: 'SG', team: 'Memphis Grizzlies', age: 25, points: 24.4, rebounds: 5.3, assists: 5.4, steals: 1.2, turnovers: 2.5, fouls: 2.3, salary: 3900000, quality: 'A+', offense: 87, defense: 83, image: 'images/bane.jpg' },
{ name: 'Jaden Ivey', position: 'SG', team: 'Detroit Pistons', age: 21, points: 13.1, rebounds: 3.4, assists: 3.9, steals: 0.7, turnovers: 1.9, fouls: 2.1, salary: 7252920, quality: 'B+', offense: 81, defense: 78, image: 'images/ivey.jpg' },
{ name: 'Ausar Thompson', position: 'SF', team: 'Detroit Pistons', age: 20, points: 8.8, rebounds: 6.4, assists: 2.4, steals: 0.8, turnovers: 1.6, fouls: 2.7, salary: 7840800, quality: 'B', offense: 77, defense: 83, image: 'images/thompson_a.jpg' },
{ name: 'Bojan Bogdanovic', position: 'SF', team: 'Detroit Pistons', age: 34, points: 20.2, rebounds: 3.4, assists: 2.5, steals: 0.4, turnovers: 1.8, fouls: 1.9, salary: 20000000, quality: 'A', offense: 84, defense: 77, image: 'images/bogdanovic.jpg' },
{ name: 'Bogdan Bogdanovic', position: 'SG', team: 'Atlanta Hawks', age: 31, points: 17.4, rebounds: 3.3, assists: 3.4, steals: 1.2, turnovers: 1.6, fouls: 2.0, salary: 18700000, quality: 'A', offense: 83, defense: 79, image: 'images/bogdanovic_b.jpg' },
{ name: 'Saddiq Bey', position: 'SF', team: 'Atlanta Hawks', age: 24, points: 13.7, rebounds: 6.5, assists: 1.4, steals: 1.0, turnovers: 1.1, fouls: 2.3, salary: 4556983, quality: 'B+', offense: 79, defense: 81, image: 'images/bey.jpg' },
{ name: 'Clint Capela', position: 'C', team: 'Atlanta Hawks', age: 29, points: 11.5, rebounds: 10.6, assists: 1.2, steals: 0.7, turnovers: 1.4, fouls: 2.6, salary: 20600000, quality: 'B+', offense: 78, defense: 85, image: 'images/capela.jpg' },
{ name: 'De\'Andre Hunter', position: 'SF', team: 'Atlanta Hawks', age: 26, points: 14.5, rebounds: 4.1, assists: 1.4, steals: 0.7, turnovers: 1.3, fouls: 2.4, salary: 20100000, quality: 'B+', offense: 80, defense: 82, image: 'images/hunter.jpg' },
{ name: 'Jalen Johnson', position: 'PF', team: 'Atlanta Hawks', age: 22, points: 15.9, rebounds: 8.6, assists: 3.5, steals: 1.1, turnovers: 1.8, fouls: 2.3, salary: 2911440, quality: 'A', offense: 82, defense: 83, image: 'images/johnson_j.jpg' },
{ name: 'Onyeka Okongwu', position: 'C', team: 'Atlanta Hawks', age: 23, points: 10.2, rebounds: 7.0, assists: 1.4, steals: 0.6, turnovers: 1.1, fouls: 2.5, salary: 8109063, quality: 'B+', offense: 77, defense: 84, image: 'images/okongwu.jpg' },
{ name: 'Lebron James', position: 'SF', team: 'Lakers', age: 33, points: 21.2, rebounds: 7.0, assists: 6.4, steals: 0.6, turnovers: 1.1, fouls: 2.5, salary: 128109063, quality: 'S+', offense: 97, defense: 104, image: 'images/lebron.jpg' }
// 
// Devam edebilirim, başka oyuncular eklememi ister misiniz?

];

// Takımlar ve oyuncular verisi
window.teams = [
    
    
    
        {
            name: 'Golden State Warriors',
            lunlock: false,
            players: [
                { name: 'Stephen Curry', position: 'PG', team: 'Golden State Warriors', age: 26, points: 23.8, rebounds: 4.3, assists: 7.7, steals: 2.0, turnovers: 3.1, fouls: 2.0, salary: 10900000, quality: 'X', offense: 205, defense: 185, image: 'images/curry.jpg' },
                { name: 'Klay Thompson', position: 'SG', team: 'Golden State Warriors', age: 24, points: 21.7, rebounds: 3.2, assists: 2.9, steals: 1.1, turnovers: 1.9, fouls: 2.0, salary: 3075880, quality: 'X', offense: 200, defense: 188, image: 'images/thompson.jpg' },
                { name: 'Harrison Barnes', position: 'SF', team: 'Golden State Warriors', age: 22, points: 10.1, rebounds: 5.5, assists: 1.4, steals: 0.7, turnovers: 1.1, fouls: 1.9, salary: 3049920, quality: 'X', offense: 182, defense: 180, image: 'images/barnes.jpg' },
                { name: 'Draymond Green', position: 'PF', team: 'Golden State Warriors', age: 24, points: 11.7, rebounds: 8.2, assists: 3.7, steals: 1.6, turnovers: 1.7, fouls: 3.2, salary: 915243, quality: 'X', offense: 182, defense: 192, image: 'images/green.jpg' },
                { name: 'Andrew Bogut', position: 'C', team: 'Golden State Warriors', age: 30, points: 6.3, rebounds: 8.1, assists: 2.7, steals: 0.6, turnovers: 1.8, fouls: 3.1, salary: 12972973, quality: 'X', offense: 175, defense: 188, image: 'images/bogut.jpg' },
                { name: 'Andre Iguodala', position: 'SF', team: 'Golden State Warriors', age: 31, points: 9.0, rebounds: 4.7, assists: 3.7, steals: 1.2, turnovers: 1.5, fouls: 1.7, salary: 12289544, quality: 'X', offense: 180, defense: 185, image: 'images/iguodala.jpg' },
                { name: 'Shaun Livingston', position: 'PG', team: 'Golden State Warriors', age: 29, points: 6.3, rebounds: 2.3, assists: 3.0, steals: 0.6, turnovers: 1.0, fouls: 1.9, salary: 5305000, quality: 'X', offense: 175, defense: 178, image: 'images/livingston.jpg' }
            ]
        },
        {
            name: 'Cleveland Cavaliers',
            lunlock: false,
            players: [
                { name: 'Kyrie Irving', position: 'PG', team: 'Cleveland Cavaliers', age: 22, points: 21.7, rebounds: 3.2, assists: 5.2, steals: 1.5, turnovers: 2.5, fouls: 2.3, salary: 7070730, quality: 'X', offense: 202, defense: 184, image: 'images/irving.jpg' },
                { name: 'J.R. Smith', position: 'SG', team: 'Cleveland Cavaliers', age: 29, points: 12.7, rebounds: 3.5, assists: 2.5, steals: 1.4, turnovers: 1.3, fouls: 2.1, salary: 5982375, quality: 'X', offense: 185, defense: 180, image: 'images/smith.jpg' },
                { name: 'LeBron James', position: 'SF', team: 'Cleveland Cavaliers', age: 30, points: 25.3, rebounds: 6.0, assists: 7.4, steals: 1.6, turnovers: 3.9, fouls: 2.0, salary: 20644400, quality: 'X', offense: 215, defense: 192, image: 'images/lebron.jpg' },
                { name: 'Kevin Love', position: 'PF', team: 'Cleveland Cavaliers', age: 26, points: 16.4, rebounds: 9.7, assists: 2.2, steals: 0.7, turnovers: 1.9, fouls: 1.9, salary: 15719063, quality: 'X', offense: 188, defense: 185, image: 'images/love.jpg' },
                { name: 'Timofey Mozgov', position: 'C', team: 'Cleveland Cavaliers', age: 28, points: 9.7, rebounds: 7.3, assists: 0.9, steals: 0.4, turnovers: 1.2, fouls: 2.7, salary: 4650000, quality: 'X', offense: 178, defense: 182, image: 'images/mozgov.jpg' },
                { name: 'Tristan Thompson', position: 'PF', team: 'Cleveland Cavaliers', age: 23, points: 8.5, rebounds: 8.0, assists: 0.5, steals: 0.4, turnovers: 0.9, fouls: 2.3, salary: 5138430, quality: 'X', offense: 175, defense: 185, image: 'images/thompson.jpg' },
                { name: 'Matthew Dellavedova', position: 'PG', team: 'Cleveland Cavaliers', age: 24, points: 4.8, rebounds: 1.9, assists: 3.0, steals: 0.5, turnovers: 1.1, fouls: 1.9, salary: 816482, quality: 'X', offense: 172, defense: 175, image: 'images/dellavedova.jpg' }
            ]
        },
        {
            name: 'Houston Rockets',
            lunlock: false,
            players: [
                { name: 'James Harden', position: 'SG', team: 'Houston Rockets', age: 25, points: 27.4, rebounds: 5.7, assists: 7.0, steals: 1.9, turnovers: 4.0, fouls: 2.6, salary: 14728844, quality: 'X', offense: 215, defense: 185, image: 'images/harden.jpg' },
                { name: 'Patrick Beverley', position: 'PG', team: 'Houston Rockets', age: 26, points: 10.1, rebounds: 4.2, assists: 3.4, steals: 1.1, turnovers: 1.4, fouls: 2.8, salary: 915243, quality: 'X', offense: 178, defense: 185, image: 'images/beverley.jpg' },
                { name: 'Trevor Ariza', position: 'SF', team: 'Houston Rockets', age: 29, points: 12.8, rebounds: 5.6, assists: 2.5, steals: 1.9, turnovers: 1.4, fouls: 2.1, salary: 8579088, quality: 'X', offense: 180, defense: 184, image: 'images/ariza.jpg' },
                { name: 'Donatas Motiejunas', position: 'PF', team: 'Houston Rockets', age: 24, points: 12.0, rebounds: 5.9, assists: 1.8, steals: 0.5, turnovers: 1.7, fouls: 2.8, salary: 1483920, quality: 'X', offense: 182, defense: 180, image: 'images/motiejunas.jpg' },
                { name: 'Dwight Howard', position: 'C', team: 'Houston Rockets', age: 29, points: 15.8, rebounds: 10.5, assists: 1.2, steals: 0.7, turnovers: 2.3, fouls: 3.0, salary: 21436271, quality: 'X', offense: 185, defense: 190, image: 'images/howard.jpg' },
                { name: 'Corey Brewer', position: 'SF', team: 'Houston Rockets', age: 28, points: 11.9, rebounds: 3.6, assists: 1.7, steals: 1.1, turnovers: 1.3, fouls: 2.1, salary: 4702500, quality: 'X', offense: 178, defense: 180, image: 'images/brewer.jpg' },
                { name: 'Josh Smith', position: 'PF', team: 'Houston Rockets', age: 29, points: 12.4, rebounds: 6.4, assists: 3.3, steals: 1.4, turnovers: 2.4, fouls: 3.0, salary: 2077000, quality: 'X', offense: 180, defense: 182, image: 'images/smith.jpg' },
                { name: 'Jason Terry', position: 'SG', team: 'Houston Rockets', age: 37, points: 7.0, rebounds: 1.6, assists: 1.9, steals: 0.9, turnovers: 0.8, fouls: 1.5, salary: 1448490, quality: 'X', offense: 175, defense: 172, image: 'images/terry.jpg' },
                { name: 'Pablo Prigioni', position: 'PG', team: 'Houston Rockets', age: 37, points: 3.0, rebounds: 1.7, assists: 2.8, steals: 1.0, turnovers: 0.7, fouls: 1.4, salary: 1662961, quality: 'X', offense: 170, defense: 172, image: 'images/prigioni.jpg' }
            ]
        },
        {
            name: 'Atlanta Hawks',
            lunlock: false,
            players: [
                { name: 'Jeff Teague', position: 'PG', team: 'Atlanta Hawks', age: 26, points: 15.9, rebounds: 2.5, assists: 7.0, steals: 1.7, turnovers: 2.8, fouls: 2.1, salary: 8000000, quality: 'X', offense: 185, defense: 182, image: 'images/teague.jpg' },
                { name: 'Kyle Korver', position: 'SG', team: 'Atlanta Hawks', age: 33, points: 12.1, rebounds: 4.1, assists: 2.6, steals: 0.7, turnovers: 1.3, fouls: 1.9, salary: 6253521, quality: 'X', offense: 185, defense: 178, image: 'images/korver.jpg' },
                { name: 'DeMarre Carroll', position: 'SF', team: 'Atlanta Hawks', age: 28, points: 12.6, rebounds: 5.3, assists: 1.7, steals: 1.3, turnovers: 1.1, fouls: 2.4, salary: 2442455, quality: 'X', offense: 180, defense: 185, image: 'images/carroll.jpg' },
                { name: 'Paul Millsap', position: 'PF', team: 'Atlanta Hawks', age: 29, points: 16.7, rebounds: 7.8, assists: 3.1, steals: 1.8, turnovers: 2.2, fouls: 2.8, salary: 9500000, quality: 'X', offense: 188, defense: 185, image: 'images/millsap.jpg' },
                { name: 'Al Horford', position: 'C', team: 'Atlanta Hawks', age: 28, points: 15.2, rebounds: 7.2, assists: 3.2, steals: 0.9, turnovers: 1.7, fouls: 2.0, salary: 12000000, quality: 'X', offense: 185, defense: 188, image: 'images/horford.jpg' },
                { name: 'Dennis Schroder', position: 'PG', team: 'Atlanta Hawks', age: 21, points: 10.0, rebounds: 2.1, assists: 4.1, steals: 0.6, turnovers: 2.3, fouls: 2.1, salary: 1690680, quality: 'X', offense: 180, defense: 178, image: 'images/schroder.jpg' },
                { name: 'Mike Scott', position: 'PF', team: 'Atlanta Hawks', age: 26, points: 7.8, rebounds: 2.9, assists: 1.1, steals: 0.4, turnovers: 0.9, fouls: 1.8, salary: 3333333, quality: 'X', offense: 175, defense: 175, image: 'images/scott.jpg' }
            ]
        },
        {
            name: 'Los Angeles Clippers',
            lunlock: false,
            players: [
                { name: 'Chris Paul', position: 'PG', team: 'Los Angeles Clippers', age: 29, points: 19.1, rebounds: 4.6, assists: 10.2, steals: 1.9, turnovers: 2.3, fouls: 2.5, salary: 20068563, quality: 'X', offense: 202, defense: 190, image: 'images/paul.jpg' },
                { name: 'J.J. Redick', position: 'SG', team: 'Los Angeles Clippers', age: 30, points: 16.4, rebounds: 2.1, assists: 1.8, steals: 0.5, turnovers: 1.2, fouls: 2.0, salary: 6792500, quality: 'X', offense: 185, defense: 178, image: 'images/redick.jpg' },
                { name: 'Matt Barnes', position: 'SF', team: 'Los Angeles Clippers', age: 34, points: 10.1, rebounds: 4.0, assists: 1.5, steals: 0.9, turnovers: 1.0, fouls: 2.4, salary: 3396250, quality: 'X', offense: 175, defense: 180, image: 'images/barnes.jpg' },
                { name: 'Blake Griffin', position: 'PF', team: 'Los Angeles Clippers', age: 25, points: 21.9, rebounds: 7.6, assists: 5.3, steals: 0.9, turnovers: 2.3, fouls: 3.2, salary: 17674613, quality: 'X', offense: 200, defense: 185, image: 'images/griffin.jpg' },
                { name: 'DeAndre Jordan', position: 'C', team: 'Los Angeles Clippers', age: 26, points: 11.5, rebounds: 15.0, assists: 0.7, steals: 0.6, turnovers: 1.3, fouls: 2.8, salary: 11440000, quality: 'X', offense: 182, defense: 192, image: 'images/jordan.jpg' },
                { name: 'Jamal Crawford', position: 'SG', team: 'Los Angeles Clippers', age: 34, points: 15.8, rebounds: 1.9, assists: 2.5, steals: 0.9, turnovers: 1.7, fouls: 1.5, salary: 5450000, quality: 'X', offense: 185, defense: 175, image: 'images/crawford.jpg' },
                { name: 'Spencer Hawes', position: 'C', team: 'Los Angeles Clippers', age: 26, points: 5.8, rebounds: 3.5, assists: 1.2, steals: 0.3, turnovers: 0.9, fouls: 2.2, salary: 5305000, quality: 'X', offense: 175, defense: 178, image: 'images/hawes.jpg' },
                { name: 'Austin Rivers', position: 'PG', team: 'Los Angeles Clippers', age: 22, points: 7.1, rebounds: 2.0, assists: 1.7, steals: 0.6, turnovers: 1.1, fouls: 1.8, salary: 2439840, quality: 'X', offense: 172, defense: 175, image: 'images/rivers.jpg' },
                { name: 'Glen Davis', position: 'PF', team: 'Los Angeles Clippers', age: 29, points: 4.0, rebounds: 2.3, assists: 0.7, steals: 0.4, turnovers: 0.7, fouls: 1.7, salary: 1227985, quality: 'X', offense: 170, defense: 175, image: 'images/davis.jpg' }
            ]
        },
        {
            name: 'San Antonio Spurs',
            lunlock: false,
            players: [
                { name: 'Tony Parker', position: 'PG', team: 'San Antonio Spurs', age: 32, points: 14.4, rebounds: 1.9, assists: 4.9, steals: 0.6, turnovers: 2.2, fouls: 1.3, salary: 12500000, quality: 'X', offense: 185, defense: 180, image: 'images/parker.jpg' },
                { name: 'Danny Green', position: 'SG', team: 'San Antonio Spurs', age: 27, points: 11.7, rebounds: 4.2, assists: 2.0, steals: 1.2, turnovers: 1.1, fouls: 2.0, salary: 4025000, quality: 'X', offense: 182, defense: 185, image: 'images/green.jpg' },
                { name: 'Kawhi Leonard', position: 'SF', team: 'San Antonio Spurs', age: 23, points: 16.5, rebounds: 7.2, assists: 2.5, steals: 2.3, turnovers: 1.5, fouls: 1.8, salary: 2894059, quality: 'X', offense: 188, defense: 192, image: 'images/leonard.jpg' },
                { name: 'Tim Duncan', position: 'PF', team: 'San Antonio Spurs', age: 38, points: 13.9, rebounds: 9.1, assists: 3.0, steals: 0.8, turnovers: 1.6, fouls: 1.9, salary: 10361446, quality: 'X', offense: 185, defense: 188, image: 'images/duncan.jpg' },
                { name: 'Tiago Splitter', position: 'C', team: 'San Antonio Spurs', age: 30, points: 8.2, rebounds: 4.8, assists: 1.5, steals: 0.5, turnovers: 1.1, fouls: 2.1, salary: 9250000, quality: 'X', offense: 175, defense: 182, image: 'images/splitter.jpg' },
                { name: 'Manu Ginobili', position: 'SG', team: 'San Antonio Spurs', age: 37, points: 10.5, rebounds: 3.0, assists: 4.2, steals: 1.0, turnovers: 2.0, fouls: 1.8, salary: 7000000, quality: 'X', offense: 182, defense: 178, image: 'images/ginobili.jpg' },
                { name: 'Boris Diaw', position: 'PF', team: 'San Antonio Spurs', age: 32, points: 8.7, rebounds: 4.3, assists: 2.9, steals: 0.5, turnovers: 1.3, fouls: 1.7, salary: 7500000, quality: 'X', offense: 178, defense: 180, image: 'images/diaw.jpg' },
                { name: 'Patty Mills', position: 'PG', team: 'San Antonio Spurs', age: 26, points: 6.9, rebounds: 1.5, assists: 1.7, steals: 0.6, turnovers: 0.9, fouls: 1.1, salary: 3578947, quality: 'X', offense: 175, defense: 175, image: 'images/mills.jpg' },
                { name: 'Marco Belinelli', position: 'SG', team: 'San Antonio Spurs', age: 28, points: 9.2, rebounds: 2.5, assists: 1.5, steals: 0.4, turnovers: 0.9, fouls: 1.2, salary: 2873750, quality: 'X', offense: 178, defense: 172, image: 'images/belinelli.jpg' }
            ]
        },
        {
            name: 'Portland Trail Blazers',
            lunlock: false,
            players: [
                { name: 'Damian Lillard', position: 'PG', team: 'Portland Trail Blazers', age: 24, points: 21.0, rebounds: 4.6, assists: 6.2, steals: 1.2, turnovers: 2.7, fouls: 2.0, salary: 4236287, quality: 'X', offense: 200, defense: 182, image: 'images/lillard.jpg' },
                { name: 'Wesley Matthews', position: 'SG', team: 'Portland Trail Blazers', age: 28, points: 15.9, rebounds: 3.7, assists: 2.3, steals: 1.3, turnovers: 1.4, fouls: 2.3, salary: 7245640, quality: 'X', offense: 185, defense: 184, image: 'images/matthews.jpg' },
                { name: 'Nicolas Batum', position: 'SF', team: 'Portland Trail Blazers', age: 26, points: 9.4, rebounds: 5.9, assists: 4.8, steals: 1.1, turnovers: 1.9, fouls: 1.8, salary: 11765500, quality: 'X', offense: 182, defense: 185, image: 'images/batum.jpg' },
                { name: 'LaMarcus Aldridge', position: 'PF', team: 'Portland Trail Blazers', age: 29, points: 23.4, rebounds: 10.2, assists: 1.7, steals: 0.7, turnovers: 1.9, fouls: 2.0, salary: 16006000, quality: 'X', offense: 202, defense: 185, image: 'images/aldridge.jpg' },
                { name: 'Robin Lopez', position: 'C', team: 'Portland Trail Blazers', age: 26, points: 9.6, rebounds: 6.7, assists: 0.9, steals: 0.3, turnovers: 1.3, fouls: 2.8, salary: 5340229, quality: 'X', offense: 178, defense: 185, image: 'images/lopez.jpg' },
                { name: 'Chris Kaman', position: 'C', team: 'Portland Trail Blazers', age: 32, points: 8.6, rebounds: 6.5, assists: 1.0, steals: 0.3, turnovers: 1.3, fouls: 2.3, salary: 4800000, quality: 'X', offense: 175, defense: 178, image: 'images/kaman.jpg' },
                { name: 'Steve Blake', position: 'PG', team: 'Portland Trail Blazers', age: 34, points: 4.3, rebounds: 1.7, assists: 3.6, steals: 0.7, turnovers: 1.1, fouls: 1.4, salary: 2077000, quality: 'X', offense: 172, defense: 175, image: 'images/blake.jpg' },
                { name: 'CJ McCollum', position: 'SG', team: 'Portland Trail Blazers', age: 23, points: 6.8, rebounds: 1.5, assists: 1.0, steals: 0.7, turnovers: 0.8, fouls: 1.5, salary: 2421000, quality: 'X', offense: 175, defense: 172, image: 'images/mccollum.jpg' },
                { name: 'Meyers Leonard', position: 'C', team: 'Portland Trail Blazers', age: 22, points: 5.9, rebounds: 4.5, assists: 0.6, steals: 0.2, turnovers: 0.7, fouls: 2.3, salary: 2317920, quality: 'X', offense: 172, defense: 175, image: 'images/leonard.jpg' }
            ]
        },
        {
            name: 'Brooklyn Nets',
            lunlock: false,
            players: [
                { name: 'Deron Williams', position: 'PG', team: 'Brooklyn Nets', age: 30, points: 13.0, rebounds: 3.5, assists: 6.6, steals: 0.9, turnovers: 2.4, fouls: 2.1, salary: 19754465, quality: 'X', offense: 182, defense: 178, image: 'images/williams.jpg' },
                { name: 'Joe Johnson', position: 'SG', team: 'Brooklyn Nets', age: 33, points: 14.4, rebounds: 4.8, assists: 3.7, steals: 0.7, turnovers: 1.8, fouls: 1.6, salary: 23180790, quality: 'X', offense: 185, defense: 180, image: 'images/johnson.jpg' },
                { name: 'Alan Anderson', position: 'SF', team: 'Brooklyn Nets', age: 32, points: 7.4, rebounds: 2.8, assists: 1.1, steals: 0.6, turnovers: 0.8, fouls: 2.0, salary: 1333484, quality: 'X', offense: 175, defense: 175, image: 'images/anderson.jpg' },
                { name: 'Thaddeus Young', position: 'PF', team: 'Brooklyn Nets', age: 26, points: 14.1, rebounds: 5.4, assists: 1.4, steals: 1.6, turnovers: 1.7, fouls: 2.1, salary: 9410869, quality: 'X', offense: 182, defense: 182, image: 'images/young.jpg' },
                { name: 'Brook Lopez', position: 'C', team: 'Brooklyn Nets', age: 26, points: 17.2, rebounds: 7.4, assists: 0.7, steals: 0.6, turnovers: 1.8, fouls: 2.5, salary: 15719063, quality: 'X', offense: 185, defense: 182, image: 'images/lopez.jpg' },
                { name: 'Jarrett Jack', position: 'PG', team: 'Brooklyn Nets', age: 31, points: 12.0, rebounds: 3.1, assists: 4.7, steals: 0.9, turnovers: 2.2, fouls: 2.1, salary: 6300000, quality: 'X', offense: 180, defense: 175, image: 'images/jack.jpg' },
                { name: 'Mason Plumlee', position: 'C', team: 'Brooklyn Nets', age: 24, points: 8.7, rebounds: 6.2, assists: 0.9, steals: 0.8, turnovers: 1.4, fouls: 2.8, salary: 1357080, quality: 'X', offense: 175, defense: 180, image: 'images/plumlee.jpg' },
                { name: 'Bojan Bogdanovic', position: 'SG', team: 'Brooklyn Nets', age: 25, points: 9.0, rebounds: 2.7, assists: 0.9, steals: 0.4, turnovers: 1.1, fouls: 1.8, salary: 3278720, quality: 'X', offense: 178, defense: 175, image: 'images/bogdanovic.jpg' },
                { name: 'Mirza Teletovic', position: 'PF', team: 'Brooklyn Nets', age: 29, points: 8.5, rebounds: 4.9, assists: 1.2, steals: 0.4, turnovers: 0.9, fouls: 2.0, salary: 3368100, quality: 'X', offense: 175, defense: 172, image: 'images/teletovic.jpg' }
            ]
        },
        {
            name: 'Phoenix Suns',
            lunlock: false,
            players: [
                { name: 'Eric Bledsoe', position: 'PG', team: 'Phoenix Suns', age: 25, points: 17.0, rebounds: 5.2, assists: 6.1, steals: 1.6, turnovers: 3.4, fouls: 2.6, salary: 13000000, quality: 'X', offense: 185, defense: 185, image: 'images/bledsoe.jpg' },
                { name: 'Goran Dragic', position: 'SG', team: 'Phoenix Suns', age: 28, points: 16.2, rebounds: 3.6, assists: 4.1, steals: 1.0, turnovers: 2.2, fouls: 2.4, salary: 7500000, quality: 'X', offense: 185, defense: 180, image: 'images/dragic.jpg' },
                { name: 'P.J. Tucker', position: 'SF', team: 'Phoenix Suns', age: 29, points: 9.1, rebounds: 6.4, assists: 1.6, steals: 1.4, turnovers: 1.3, fouls: 3.2, salary: 5700000, quality: 'X', offense: 175, defense: 185, image: 'images/tucker.jpg' },
                { name: 'Markieff Morris', position: 'PF', team: 'Phoenix Suns', age: 25, points: 15.3, rebounds: 6.2, assists: 2.3, steals: 1.2, turnovers: 2.4, fouls: 3.3, salary: 2989239, quality: 'X', offense: 182, defense: 180, image: 'images/markieff.jpg' },
                { name: 'Alex Len', position: 'C', team: 'Phoenix Suns', age: 21, points: 6.3, rebounds: 6.6, assists: 0.5, steals: 0.5, turnovers: 1.3, fouls: 3.4, salary: 3649920, quality: 'X', offense: 175, defense: 182, image: 'images/len.jpg' },
                { name: 'Isaiah Thomas', position: 'PG', team: 'Phoenix Suns', age: 25, points: 15.2, rebounds: 2.4, assists: 3.7, steals: 1.0, turnovers: 2.0, fouls: 2.1, salary: 7238606, quality: 'X', offense: 185, defense: 175, image: 'images/thomas.jpg' },
                { name: 'Gerald Green', position: 'SG', team: 'Phoenix Suns', age: 29, points: 11.9, rebounds: 2.5, assists: 1.2, steals: 0.5, turnovers: 1.3, fouls: 2.1, salary: 3500000, quality: 'X', offense: 180, defense: 172, image: 'images/green.jpg' },
                { name: 'Marcus Morris', position: 'SF', team: 'Phoenix Suns', age: 25, points: 10.4, rebounds: 4.8, assists: 1.6, steals: 0.8, turnovers: 1.4, fouls: 2.8, salary: 2943960, quality: 'X', offense: 178, defense: 175, image: 'images/marcus.jpg' },
                { name: 'Brandan Wright', position: 'C', team: 'Phoenix Suns', age: 27, points: 7.3, rebounds: 4.3, assists: 0.5, steals: 0.5, turnovers: 0.7, fouls: 1.9, salary: 5000000, quality: 'X', offense: 175, defense: 180, image: 'images/wright.jpg' }
            ]
        },
        {
            name: 'Oklahoma City Thunder',
            lunlock: false,
            players: [
                { name: 'Russell Westbrook', position: 'PG', team: 'Oklahoma City Thunder', age: 26, points: 28.1, rebounds: 7.3, assists: 8.6, steals: 2.1, turnovers: 4.4, fouls: 2.6, salary: 15719062, quality: 'X', offense: 215, defense: 188, image: 'images/westbrook.jpg' },
                { name: 'Andre Roberson', position: 'SG', team: 'Oklahoma City Thunder', age: 23, points: 3.4, rebounds: 3.8, assists: 1.0, steals: 0.8, turnovers: 0.5, fouls: 2.0, salary: 1208400, quality: 'X', offense: 170, defense: 185, image: 'images/roberson.jpg' },
                { name: 'Kevin Durant', position: 'SF', team: 'Oklahoma City Thunder', age: 26, points: 25.4, rebounds: 6.6, assists: 4.1, steals: 0.9, turnovers: 2.7, fouls: 1.9, salary: 18995624, quality: 'X', offense: 215, defense: 185, image: 'images/durant.jpg' },
                { name: 'Serge Ibaka', position: 'PF', team: 'Oklahoma City Thunder', age: 25, points: 14.3, rebounds: 7.8, assists: 0.9, steals: 0.5, turnovers: 1.4, fouls: 2.5, salary: 12350000, quality: 'X', offense: 182, defense: 190, image: 'images/ibaka.jpg' },
                { name: 'Steven Adams', position: 'C', team: 'Oklahoma City Thunder', age: 21, points: 7.7, rebounds: 7.5, assists: 0.9, steals: 0.5, turnovers: 1.3, fouls: 3.0, salary: 2184960, quality: 'X', offense: 175, defense: 185, image: 'images/adams.jpg' },
                { name: 'Dion Waiters', position: 'SG', team: 'Oklahoma City Thunder', age: 23, points: 11.8, rebounds: 2.9, assists: 1.9, steals: 1.0, turnovers: 1.4, fouls: 2.0, salary: 4062000, quality: 'X', offense: 180, defense: 175, image: 'images/waiters.jpg' },
                { name: 'Anthony Morrow', position: 'SG', team: 'Oklahoma City Thunder', age: 29, points: 10.7, rebounds: 2.6, assists: 0.8, steals: 0.5, turnovers: 0.7, fouls: 1.6, salary: 3200000, quality: 'X', offense: 180, defense: 172, image: 'images/morrow.jpg' },
                { name: 'Nick Collison', position: 'PF', team: 'Oklahoma City Thunder', age: 34, points: 4.1, rebounds: 3.8, assists: 1.4, steals: 0.4, turnovers: 0.8, fouls: 2.5, salary: 2242003, quality: 'X', offense: 170, defense: 178, image: 'images/collison.jpg' },
                { name: 'D.J. Augustin', position: 'PG', team: 'Oklahoma City Thunder', age: 27, points: 7.3, rebounds: 1.8, assists: 3.1, steals: 0.6, turnovers: 1.1, fouls: 1.2, salary: 3000000, quality: 'X', offense: 175, defense: 172, image: 'images/augustin.jpg' }
            ]
        },
        {
            name: 'New Orleans Pelicans',
            lunlock: false,
            players: [
                { name: 'Jrue Holiday', position: 'PG', team: 'New Orleans Pelicans', age: 24, points: 14.8, rebounds: 3.4, assists: 6.9, steals: 1.6, turnovers: 2.3, fouls: 1.9, salary: 10404000, quality: 'X', offense: 185, defense: 185, image: 'images/holiday.jpg' },
                { name: 'Eric Gordon', position: 'SG', team: 'New Orleans Pelicans', age: 26, points: 13.4, rebounds: 2.6, assists: 3.8, steals: 0.8, turnovers: 1.8, fouls: 1.9, salary: 14898938, quality: 'X', offense: 182, defense: 178, image: 'images/gordon.jpg' },
                { name: 'Tyreke Evans', position: 'SF', team: 'New Orleans Pelicans', age: 25, points: 16.6, rebounds: 5.3, assists: 6.6, steals: 1.3, turnovers: 3.1, fouls: 2.4, salary: 10800000, quality: 'X', offense: 185, defense: 180, image: 'images/evans.jpg' },
                { name: 'Ryan Anderson', position: 'PF', team: 'New Orleans Pelicans', age: 26, points: 13.7, rebounds: 4.8, assists: 0.9, steals: 0.5, turnovers: 0.8, fouls: 1.8, salary: 8500000, quality: 'X', offense: 182, defense: 175, image: 'images/anderson.jpg' },
                { name: 'Anthony Davis', position: 'PF', team: 'New Orleans Pelicans', age: 21, points: 24.4, rebounds: 10.2, assists: 2.2, steals: 1.5, turnovers: 1.4, fouls: 2.0, salary: 5607240, quality: 'X', offense: 202, defense: 195, image: 'images/davis.jpg' },
                { name: 'Omer Asik', position: 'C', team: 'New Orleans Pelicans', age: 28, points: 7.3, rebounds: 9.8, assists: 0.9, steals: 0.4, turnovers: 1.3, fouls: 2.7, salary: 8374646, quality: 'X', offense: 172, defense: 185, image: 'images/asik.jpg' },
                { name: 'Quincy Pondexter', position: 'SF', team: 'New Orleans Pelicans', age: 26, points: 7.2, rebounds: 2.6, assists: 1.3, steals: 0.5, turnovers: 0.7, fouls: 1.8, salary: 3146068, quality: 'X', offense: 175, defense: 178, image: 'images/pondexter.jpg' },
                { name: 'Norris Cole', position: 'PG', team: 'New Orleans Pelicans', age: 26, points: 7.6, rebounds: 1.8, assists: 3.4, steals: 0.7, turnovers: 1.2, fouls: 1.5, salary: 2150000, quality: 'X', offense: 175, defense: 178, image: 'images/cole.jpg' },
                { name: 'Dante Cunningham', position: 'PF', team: 'New Orleans Pelicans', age: 27, points: 5.2, rebounds: 3.9, assists: 0.8, steals: 0.6, turnovers: 0.5, fouls: 1.8, salary: 981084, quality: 'X', offense: 172, defense: 175, image: 'images/cunningham.jpg' }
            ]
        },
        {
            name: 'Memphis Grizzlies',
            lunlock: false,
            players: [
                { name: 'Mike Conley', position: 'PG', team: 'Memphis Grizzlies', age: 27, points: 15.8, rebounds: 3.0, assists: 5.4, steals: 1.3, turnovers: 1.7, fouls: 1.8, salary: 9388426, quality: 'X', offense: 185, defense: 188, image: 'images/conley.jpg' },
                { name: 'Courtney Lee', position: 'SG', team: 'Memphis Grizzlies', age: 29, points: 10.1, rebounds: 2.3, assists: 2.0, steals: 1.0, turnovers: 1.1, fouls: 1.7, salary: 5450000, quality: 'X', offense: 178, defense: 182, image: 'images/lee.jpg' },
                { name: 'Jeff Green', position: 'SF', team: 'Memphis Grizzlies', age: 28, points: 13.1, rebounds: 4.2, assists: 1.8, steals: 0.7, turnovers: 1.7, fouls: 2.0, salary: 9200000, quality: 'X', offense: 182, defense: 180, image: 'images/green.jpg' },
                { name: 'Zach Randolph', position: 'PF', team: 'Memphis Grizzlies', age: 33, points: 16.1, rebounds: 10.5, assists: 2.2, steals: 1.0, turnovers: 2.3, fouls: 2.5, salary: 16500000, quality: 'X', offense: 185, defense: 182, image: 'images/randolph.jpg' },
                { name: 'Marc Gasol', position: 'C', team: 'Memphis Grizzlies', age: 30, points: 17.4, rebounds: 7.8, assists: 3.8, steals: 0.9, turnovers: 2.2, fouls: 2.7, salary: 15829688, quality: 'X', offense: 188, defense: 192, image: 'images/gasol.jpg' },
                { name: 'Tony Allen', position: 'SG', team: 'Memphis Grizzlies', age: 33, points: 8.6, rebounds: 4.4, assists: 1.4, steals: 2.0, turnovers: 1.3, fouls: 2.2, salary: 5000000, quality: 'X', offense: 175, defense: 190, image: 'images/allen.jpg' },
                { name: 'Vince Carter', position: 'SF', team: 'Memphis Grizzlies', age: 38, points: 5.8, rebounds: 2.0, assists: 1.2, steals: 0.7, turnovers: 0.8, fouls: 1.4, salary: 4088019, quality: 'X', offense: 175, defense: 172, image: 'images/carter.jpg' },
                { name: 'Beno Udrih', position: 'PG', team: 'Memphis Grizzlies', age: 32, points: 7.7, rebounds: 1.8, assists: 2.8, steals: 0.7, turnovers: 1.1, fouls: 1.3, salary: 1145685, quality: 'X', offense: 175, defense: 172, image: 'images/udrih.jpg' },
                { name: 'Kosta Koufos', position: 'C', team: 'Memphis Grizzlies', age: 25, points: 5.2, rebounds: 5.3, assists: 0.5, steals: 0.4, turnovers: 0.8, fouls: 2.2, salary: 3000000, quality: 'X', offense: 172, defense: 178, image: 'images/koufos.jpg' }
            ]
        },
        {
            name: 'Dallas Mavericks',
            lunlock: false,
            players: [
                { name: 'Rajon Rondo', position: 'PG', team: 'Dallas Mavericks', age: 28, points: 9.3, rebounds: 4.5, assists: 6.5, steals: 1.2, turnovers: 2.9, fouls: 2.5, salary: 12909090, quality: 'X', offense: 178, defense: 185, image: 'images/rondo.jpg' },
                { name: 'Monta Ellis', position: 'SG', team: 'Dallas Mavericks', age: 29, points: 18.9, rebounds: 2.4, assists: 4.1, steals: 1.9, turnovers: 2.5, fouls: 2.1, salary: 8360000, quality: 'X', offense: 188, defense: 180, image: 'images/ellis.jpg' },
                { name: 'Chandler Parsons', position: 'SF', team: 'Dallas Mavericks', age: 26, points: 15.7, rebounds: 4.9, assists: 2.4, steals: 1.0, turnovers: 1.7, fouls: 2.1, salary: 14700000, quality: 'X', offense: 185, defense: 180, image: 'images/parsons.jpg' },
                { name: 'Dirk Nowitzki', position: 'PF', team: 'Dallas Mavericks', age: 36, points: 17.3, rebounds: 5.9, assists: 1.9, steals: 0.5, turnovers: 1.3, fouls: 1.7, salary: 7974482, quality: 'X', offense: 188, defense: 180, image: 'images/nowitzki.jpg' },
                { name: 'Tyson Chandler', position: 'C', team: 'Dallas Mavericks', age: 32, points: 10.3, rebounds: 11.5, assists: 1.1, steals: 0.7, turnovers: 1.3, fouls: 2.7, salary: 14596888, quality: 'X', offense: 178, defense: 188, image: 'images/chandler.jpg' },
                { name: 'Devin Harris', position: 'PG', team: 'Dallas Mavericks', age: 31, points: 8.8, rebounds: 1.8, assists: 3.1, steals: 1.1, turnovers: 1.4, fouls: 2.0, salary: 3878000, quality: 'X', offense: 175, defense: 178, image: 'images/harris.jpg' },
                { name: 'J.J. Barea', position: 'PG', team: 'Dallas Mavericks', age: 30, points: 7.5, rebounds: 1.7, assists: 3.4, steals: 0.4, turnovers: 1.3, fouls: 1.2, salary: 3988424, quality: 'X', offense: 175, defense: 172, image: 'images/barea.jpg' },
                { name: 'Al-Farouq Aminu', position: 'SF', team: 'Dallas Mavericks', age: 24, points: 5.6, rebounds: 4.6, assists: 0.8, steals: 0.9, turnovers: 0.8, fouls: 1.9, salary: 981084, quality: 'X', offense: 172, defense: 180, image: 'images/aminu.jpg' },
                { name: 'Richard Jefferson', position: 'SF', team: 'Dallas Mavericks', age: 34, points: 5.8, rebounds: 2.5, assists: 0.8, steals: 0.5, turnovers: 0.6, fouls: 1.4, salary: 1448490, quality: 'X', offense: 172, defense: 175, image: 'images/jefferson.jpg' }
            ]
        },
        {
            name: 'Miami Heat',
            lunlock: false,
            players: [
                { name: 'Goran Dragic', position: 'PG', team: 'Miami Heat', age: 28, points: 16.3, rebounds: 3.5, assists: 4.5, steals: 1.0, turnovers: 2.2, fouls: 2.4, salary: 7500000, quality: 'X', offense: 185, defense: 180, image: 'images/dragic.jpg' },
                { name: 'Dwyane Wade', position: 'SG', team: 'Miami Heat', age: 33, points: 21.5, rebounds: 3.5, assists: 4.8, steals: 1.2, turnovers: 3.4, fouls: 2.1, salary: 15000000, quality: 'X', offense: 188, defense: 182, image: 'images/wade.jpg' },
                { name: 'Luol Deng', position: 'SF', team: 'Miami Heat', age: 29, points: 14.0, rebounds: 5.2, assists: 1.9, steals: 0.9, turnovers: 1.4, fouls: 1.9, salary: 9714461, quality: 'X', offense: 182, defense: 185, image: 'images/deng.jpg' },
                { name: 'Chris Bosh', position: 'PF', team: 'Miami Heat', age: 30, points: 21.1, rebounds: 7.0, assists: 2.2, steals: 0.9, turnovers: 1.9, fouls: 2.0, salary: 20644400, quality: 'X', offense: 188, defense: 185, image: 'images/bosh.jpg' },
                { name: 'Hassan Whiteside', position: 'C', team: 'Miami Heat', age: 25, points: 11.8, rebounds: 10.0, assists: 0.1, steals: 0.9, turnovers: 1.6, fouls: 3.0, salary: 769881, quality: 'X', offense: 180, defense: 188, image: 'images/whiteside.jpg' },
                { name: 'Mario Chalmers', position: 'PG', team: 'Miami Heat', age: 28, points: 10.2, rebounds: 2.6, assists: 3.8, steals: 1.5, turnovers: 2.0, fouls: 2.5, salary: 4300000, quality: 'X', offense: 175, defense: 178, image: 'images/chalmers.jpg' },
                { name: 'Chris Andersen', position: 'C', team: 'Miami Heat', age: 36, points: 5.3, rebounds: 5.0, assists: 0.4, steals: 0.4, turnovers: 0.7, fouls: 2.6, salary: 5375000, quality: 'X', offense: 172, defense: 180, image: 'images/andersen.jpg' },
                { name: 'Shabazz Napier', position: 'PG', team: 'Miami Heat', age: 23, points: 5.1, rebounds: 2.2, assists: 2.5, steals: 1.0, turnovers: 1.6, fouls: 1.4, salary: 1032240, quality: 'X', offense: 172, defense: 175, image: 'images/napier.jpg' },
                { name: 'Udonis Haslem', position: 'PF', team: 'Miami Heat', age: 34, points: 4.2, rebounds: 4.2, assists: 0.6, steals: 0.3, turnovers: 0.6, fouls: 2.4, salary: 2732000, quality: 'X', offense: 170, defense: 175, image: 'images/haslem.jpg' }
            ]
        },
        {
            name: 'Indiana Pacers',
            lunlock: false,
            players: [
                { name: 'George Hill', position: 'PG', team: 'Indiana Pacers', age: 28, points: 16.1, rebounds: 4.2, assists: 5.1, steals: 1.0, turnovers: 1.9, fouls: 2.1, salary: 8000000, quality: 'X', offense: 182, defense: 185, image: 'images/hill.jpg' },
                { name: 'C.J. Miles', position: 'SG', team: 'Indiana Pacers', age: 27, points: 13.5, rebounds: 3.1, assists: 1.3, steals: 0.9, turnovers: 1.2, fouls: 2.1, salary: 4500000, quality: 'X', offense: 180, defense: 178, image: 'images/miles.jpg' },
                { name: 'Solomon Hill', position: 'SF', team: 'Indiana Pacers', age: 23, points: 8.9, rebounds: 3.8, assists: 2.2, steals: 0.7, turnovers: 1.2, fouls: 2.0, salary: 1374840, quality: 'X', offense: 175, defense: 178, image: 'images/solomon.jpg' },
                { name: 'David West', position: 'PF', team: 'Indiana Pacers', age: 34, points: 11.7, rebounds: 6.8, assists: 3.4, steals: 0.7, turnovers: 1.9, fouls: 2.2, salary: 12000000, quality: 'X', offense: 182, defense: 182, image: 'images/west.jpg' },
                { name: 'Roy Hibbert', position: 'C', team: 'Indiana Pacers', age: 28, points: 10.6, rebounds: 7.1, assists: 1.1, steals: 0.2, turnovers: 1.8, fouls: 2.9, salary: 15514031, quality: 'X', offense: 175, defense: 188, image: 'images/hibbert.jpg' },
                { name: 'Rodney Stuckey', position: 'SG', team: 'Indiana Pacers', age: 28, points: 12.6, rebounds: 3.5, assists: 3.1, steals: 0.8, turnovers: 1.9, fouls: 1.9, salary: 1227985, quality: 'X', offense: 180, defense: 178, image: 'images/stuckey.jpg' },
                { name: 'Luis Scola', position: 'PF', team: 'Indiana Pacers', age: 34, points: 9.4, rebounds: 6.5, assists: 1.3, steals: 0.7, turnovers: 1.3, fouls: 2.5, salary: 4868499, quality: 'X', offense: 178, defense: 175, image: 'images/scola.jpg' },
                { name: 'Donald Sloan', position: 'PG', team: 'Indiana Pacers', age: 27, points: 7.4, rebounds: 2.7, assists: 3.6, steals: 0.5, turnovers: 1.7, fouls: 1.6, salary: 948163, quality: 'X', offense: 172, defense: 175, image: 'images/sloan.jpg' },
                { name: 'Lavoy Allen', position: 'PF', team: 'Indiana Pacers', age: 25, points: 5.0, rebounds: 5.1, assists: 1.2, steals: 0.4, turnovers: 0.8, fouls: 2.1, salary: 3000000, quality: 'X', offense: 170, defense: 175, image: 'images/allen.jpg' }
            ]
        },
        {
            name: 'Denver Nuggets',
            lunlock: false,
            players: [
                { name: 'Ty Lawson', position: 'PG', team: 'Denver Nuggets', age: 27, points: 15.2, rebounds: 3.1, assists: 9.6, steals: 1.2, turnovers: 2.5, fouls: 1.8, salary: 11595506, quality: 'X', offense: 185, defense: 180, image: 'images/lawson.jpg' },
                { name: 'Randy Foye', position: 'SG', team: 'Denver Nuggets', age: 31, points: 8.7, rebounds: 1.7, assists: 2.4, steals: 0.6, turnovers: 1.2, fouls: 1.9, salary: 3000000, quality: 'X', offense: 175, defense: 175, image: 'images/foye.jpg' },
                { name: 'Wilson Chandler', position: 'SF', team: 'Denver Nuggets', age: 27, points: 13.9, rebounds: 6.1, assists: 1.7, steals: 0.7, turnovers: 1.3, fouls: 2.1, salary: 6757000, quality: 'X', offense: 182, defense: 180, image: 'images/chandler.jpg' },
                { name: 'Kenneth Faried', position: 'PF', team: 'Denver Nuggets', age: 25, points: 12.6, rebounds: 8.9, assists: 1.2, steals: 0.8, turnovers: 1.4, fouls: 2.3, salary: 11235955, quality: 'X', offense: 180, defense: 182, image: 'images/faried.jpg' },
                { name: 'Jusuf Nurkic', position: 'C', team: 'Denver Nuggets', age: 20, points: 6.9, rebounds: 6.2, assists: 1.1, steals: 1.1, turnovers: 1.5, fouls: 3.7, salary: 1562680, quality: 'X', offense: 172, defense: 182, image: 'images/nurkic.jpg' },
                { name: 'Will Barton', position: 'SG', team: 'Denver Nuggets', age: 24, points: 11.0, rebounds: 4.6, assists: 1.9, steals: 1.2, turnovers: 1.4, fouls: 1.8, salary: 915243, quality: 'X', offense: 178, defense: 175, image: 'images/barton.jpg' },
                { name: 'Danilo Gallinari', position: 'SF', team: 'Denver Nuggets', age: 26, points: 12.4, rebounds: 3.7, assists: 1.4, steals: 0.8, turnovers: 1.2, fouls: 1.8, salary: 10854850, quality: 'X', offense: 182, defense: 178, image: 'images/gallinari.jpg' },
                { name: 'J.J. Hickson', position: 'PF', team: 'Denver Nuggets', age: 26, points: 7.6, rebounds: 6.2, assists: 1.0, steals: 0.5, turnovers: 1.1, fouls: 2.0, salary: 5613500, quality: 'X', offense: 175, defense: 175, image: 'images/hickson.jpg' },
                { name: 'Jameer Nelson', position: 'PG', team: 'Denver Nuggets', age: 33, points: 8.3, rebounds: 2.3, assists: 4.0, steals: 0.7, turnovers: 1.7, fouls: 1.5, salary: 4360000, quality: 'X', offense: 175, defense: 172, image: 'images/nelson.jpg' }
            ]
        },
        {
            name: 'Utah Jazz',
            lunlock: false,
            players: [
                { name: 'Dante Exum', position: 'PG', team: 'Utah Jazz', age: 19, points: 4.8, rebounds: 1.6, assists: 2.4, steals: 0.5, turnovers: 1.4, fouls: 1.7, salary: 3777720, quality: 'X', offense: 172, defense: 178, image: 'images/exum.jpg' },
                { name: 'Rodney Hood', position: 'SG', team: 'Utah Jazz', age: 22, points: 8.7, rebounds: 2.3, assists: 1.7, steals: 0.6, turnovers: 1.1, fouls: 1.9, salary: 1290360, quality: 'X', offense: 175, defense: 175, image: 'images/hood.jpg' },
                { name: 'Gordon Hayward', position: 'SF', team: 'Utah Jazz', age: 24, points: 19.3, rebounds: 4.9, assists: 4.1, steals: 1.4, turnovers: 2.7, fouls: 2.3, salary: 14746000, quality: 'X', offense: 188, defense: 182, image: 'images/hayward.jpg' },
                { name: 'Derrick Favors', position: 'PF', team: 'Utah Jazz', age: 23, points: 16.0, rebounds: 8.2, assists: 1.5, steals: 1.0, turnovers: 1.7, fouls: 2.8, salary: 12950000, quality: 'X', offense: 185, defense: 185, image: 'images/favors.jpg' },
                { name: 'Rudy Gobert', position: 'C', team: 'Utah Jazz', age: 22, points: 8.4, rebounds: 9.5, assists: 1.3, steals: 0.8, turnovers: 1.4, fouls: 2.7, salary: 1127400, quality: 'X', offense: 175, defense: 192, image: 'images/gobert.jpg' },
                { name: 'Trey Burke', position: 'PG', team: 'Utah Jazz', age: 22, points: 12.8, rebounds: 2.7, assists: 4.3, steals: 0.9, turnovers: 1.6, fouls: 1.5, salary: 2548560, quality: 'X', offense: 180, defense: 175, image: 'images/burke.jpg' },
                { name: 'Trevor Booker', position: 'PF', team: 'Utah Jazz', age: 27, points: 7.2, rebounds: 5.0, assists: 1.1, steals: 0.6, turnovers: 1.0, fouls: 2.5, salary: 5000000, quality: 'X', offense: 172, defense: 178, image: 'images/booker.jpg' },
                { name: 'Joe Ingles', position: 'SF', team: 'Utah Jazz', age: 27, points: 5.0, rebounds: 2.2, assists: 2.3, steals: 1.2, turnovers: 1.2, fouls: 1.8, salary: 1045000, quality: 'X', offense: 172, defense: 175, image: 'images/ingles.jpg' },
                { name: 'Elijah Millsap', position: 'SG', team: 'Utah Jazz', age: 27, points: 5.3, rebounds: 3.2, assists: 1.2, steals: 1.2, turnovers: 1.1, fouls: 2.4, salary: 816482, quality: 'X', offense: 170, defense: 178, image: 'images/millsap.jpg' }
            ]
        },
        {
            name: 'Sacramento Kings',
            lunlock: false,
            players: [
                { name: 'Darren Collison', position: 'PG', team: 'Sacramento Kings', age: 27, points: 16.1, rebounds: 3.2, assists: 5.6, steals: 1.5, turnovers: 2.3, fouls: 2.1, salary: 4797664, quality: 'X', offense: 182, defense: 180, image: 'images/collison.jpg' },
                { name: 'Ben McLemore', position: 'SG', team: 'Sacramento Kings', age: 22, points: 12.1, rebounds: 2.9, assists: 1.7, steals: 0.9, turnovers: 1.7, fouls: 2.3, salary: 3156600, quality: 'X', offense: 178, defense: 175, image: 'images/mclemore.jpg' },
                { name: 'Rudy Gay', position: 'SF', team: 'Sacramento Kings', age: 28, points: 21.1, rebounds: 5.9, assists: 3.7, steals: 1.0, turnovers: 2.7, fouls: 2.4, salary: 19317326, quality: 'X', offense: 185, defense: 180, image: 'images/gay.jpg' },
                { name: 'Jason Thompson', position: 'PF', team: 'Sacramento Kings', age: 28, points: 6.1, rebounds: 6.5, assists: 0.9, steals: 0.5, turnovers: 1.1, fouls: 2.8, salary: 6431250, quality: 'X', offense: 172, defense: 178, image: 'images/thompson.jpg' },
                { name: 'DeMarcus Cousins', position: 'C', team: 'Sacramento Kings', age: 24, points: 24.1, rebounds: 12.7, assists: 3.6, steals: 1.5, turnovers: 4.3, fouls: 3.6, salary: 14746000, quality: 'X', offense: 202, defense: 188, image: 'images/cousins.jpg' },
                { name: 'Carl Landry', position: 'PF', team: 'Sacramento Kings', age: 31, points: 7.2, rebounds: 3.8, assists: 0.8, steals: 0.3, turnovers: 0.9, fouls: 2.1, salary: 6500000, quality: 'X', offense: 175, defense: 172, image: 'images/landry.jpg' },
                { name: 'Omri Casspi', position: 'SF', team: 'Sacramento Kings', age: 26, points: 8.9, rebounds: 3.9, assists: 1.5, steals: 0.7, turnovers: 1.1, fouls: 1.9, salary: 1063384, quality: 'X', offense: 175, defense: 172, image: 'images/casspi.jpg' },
                { name: 'Ray McCallum', position: 'PG', team: 'Sacramento Kings', age: 23, points: 7.4, rebounds: 2.6, assists: 2.8, steals: 0.7, turnovers: 1.2, fouls: 1.6, salary: 816482, quality: 'X', offense: 172, defense: 175, image: 'images/mccallum.jpg' },
                { name: 'Derrick Williams', position: 'PF', team: 'Sacramento Kings', age: 23, points: 8.3, rebounds: 2.7, assists: 0.8, steals: 0.5, turnovers: 0.9, fouls: 1.5, salary: 6331404, quality: 'X', offense: 175, defense: 172, image: 'images/williams.jpg' }
            ]
        },
        {
            name: 'Detroit Pistons',
            lunlock: false, 
            players: [
                { name: 'Reggie Jackson', position: 'PG', team: 'Detroit Pistons', age: 24, points: 14.5, rebounds: 4.2, assists: 6.0, steals: 0.7, turnovers: 2.8, fouls: 2.3, salary: 2204369, quality: 'X', offense: 182, defense: 178, image: 'images/jackson.jpg' },
                { name: 'Kentavious Caldwell-Pope', position: 'SG', team: 'Detroit Pistons', age: 22, points: 12.7, rebounds: 3.1, assists: 1.3, steals: 1.1, turnovers: 1.3, fouls: 2.3, salary: 2772480, quality: 'X', offense: 178, defense: 182, image: 'images/caldwell-pope.jpg' },
                { name: 'Tayshaun Prince', position: 'SF', team: 'Detroit Pistons', age: 34, points: 7.5, rebounds: 3.2, assists: 1.4, steals: 0.4, turnovers: 0.8, fouls: 1.3, salary: 7707865, quality: 'X', offense: 172, defense: 178, image: 'images/prince.jpg' },
                { name: 'Greg Monroe', position: 'PF', team: 'Detroit Pistons', age: 24, points: 15.9, rebounds: 10.2, assists: 2.1, steals: 1.1, turnovers: 2.3, fouls: 2.8, salary: 5479934, quality: 'X', offense: 185, defense: 182, image: 'images/monroe.jpg' },
                { name: 'Andre Drummond', position: 'C', team: 'Detroit Pistons', age: 21, points: 13.8, rebounds: 13.5, assists: 0.7, steals: 0.9, turnovers: 1.8, fouls: 3.0, salary: 2568360, quality: 'X', offense: 182, defense: 188, image: 'images/drummond.jpg' },
                { name: 'Anthony Tolliver', position: 'PF', team: 'Detroit Pistons', age: 29, points: 7.7, rebounds: 3.7, assists: 0.9, steals: 0.5, turnovers: 0.7, fouls: 2.1, salary: 3000000, quality: 'X', offense: 175, defense: 175, image: 'images/tolliver.jpg' },
                { name: 'Jodie Meeks', position: 'SG', team: 'Detroit Pistons', age: 27, points: 11.1, rebounds: 1.7, assists: 1.3, steals: 0.9, turnovers: 1.0, fouls: 1.7, salary: 6270000, quality: 'X', offense: 178, defense: 175, image: 'images/meeks.jpg' },
                { name: 'Spencer Dinwiddie', position: 'PG', team: 'Detroit Pistons', age: 22, points: 4.3, rebounds: 1.4, assists: 3.1, steals: 0.6, turnovers: 1.3, fouls: 1.5, salary: 750000, quality: 'X', offense: 170, defense: 175, image: 'images/dinwiddie.jpg' },
                { name: 'Joel Anthony', position: 'C', team: 'Detroit Pistons', age: 32, points: 1.8, rebounds: 1.9, assists: 0.3, steals: 0.2, turnovers: 0.3, fouls: 1.3, salary: 5000000, quality: 'X', offense: 165, defense: 175, image: 'images/anthony.jpg' }
            ]
        },
        {
            name: 'Minnesota Timberwolves',
            lunlock: false, 
            players: [
                { name: 'Ricky Rubio', position: 'PG', team: 'Minnesota Timberwolves', age: 24, points: 10.3, rebounds: 4.2, assists: 8.8, steals: 1.7, turnovers: 2.5, fouls: 2.6, salary: 12700000, quality: 'X', offense: 178, defense: 185, image: 'images/rubio.jpg' },
                { name: 'Kevin Martin', position: 'SG', team: 'Minnesota Timberwolves', age: 32, points: 20.0, rebounds: 3.6, assists: 2.3, steals: 1.0, turnovers: 1.8, fouls: 1.8, salary: 6792500, quality: 'X', offense: 185, defense: 175, image: 'images/martin.jpg' },
                { name: 'Andrew Wiggins', position: 'SF', team: 'Minnesota Timberwolves', age: 20, points: 16.9, rebounds: 4.6, assists: 2.1, steals: 1.0, turnovers: 2.2, fouls: 2.3, salary: 5510640, quality: 'X', offense: 185, defense: 182, image: 'images/wiggins.jpg' },
                { name: 'Gorgui Dieng', position: 'PF', team: 'Minnesota Timberwolves', age: 25, points: 9.7, rebounds: 8.3, assists: 2.0, steals: 1.0, turnovers: 1.7, fouls: 3.2, salary: 1413480, quality: 'X', offense: 175, defense: 182, image: 'images/dieng.jpg' },
                { name: 'Nikola Pekovic', position: 'C', team: 'Minnesota Timberwolves', age: 29, points: 12.5, rebounds: 7.5, assists: 0.9, steals: 0.4, turnovers: 1.5, fouls: 2.8, salary: 12100000, quality: 'X', offense: 182, defense: 178, image: 'images/pekovic.jpg' },
                { name: 'Zach LaVine', position: 'PG', team: 'Minnesota Timberwolves', age: 20, points: 10.1, rebounds: 2.8, assists: 3.6, steals: 0.7, turnovers: 2.5, fouls: 2.2, salary: 3380160, quality: 'X', offense: 178, defense: 172, image: 'images/lavine.jpg' },
                { name: 'Chase Budinger', position: 'SF', team: 'Minnesota Timberwolves', age: 26, points: 6.8, rebounds: 3.0, assists: 1.0, steals: 0.5, turnovers: 0.8, fouls: 1.2, salary: 5000000, quality: 'X', offense: 175, defense: 172, image: 'images/budinger.jpg' },
                { name: 'Adreian Payne', position: 'PF', team: 'Minnesota Timberwolves', age: 23, points: 6.7, rebounds: 5.1, assists: 1.0, steals: 0.4, turnovers: 1.2, fouls: 2.3, salary: 1932240, quality: 'X', offense: 172, defense: 175, image: 'images/payne.jpg' },
                { name: 'Anthony Bennett', position: 'PF', team: 'Minnesota Timberwolves', age: 22, points: 5.2, rebounds: 3.8, assists: 0.8, steals: 0.3, turnovers: 0.9, fouls: 1.6, salary: 5563920, quality: 'X', offense: 170, defense: 172, image: 'images/bennett.jpg' }
            ]
        },
        {
            name: 'Orlando Magic',
            lunlock: false, 
            players: [
                { name: 'Elfrid Payton', position: 'PG', team: 'Orlando Magic', age: 21, points: 8.9, rebounds: 4.3, assists: 6.5, steals: 1.7, turnovers: 2.5, fouls: 2.3, salary: 2505720, quality: 'X', offense: 175, defense: 182, image: 'images/payton.jpg' },
                { name: 'Victor Oladipo', position: 'SG', team: 'Orlando Magic', age: 22, points: 17.9, rebounds: 4.2, assists: 4.1, steals: 1.7, turnovers: 2.8, fouls: 2.4, salary: 5184480, quality: 'X', offense: 185, defense: 185, image: 'images/oladipo.jpg' },
                { name: 'Tobias Harris', position: 'SF', team: 'Orlando Magic', age: 22, points: 17.1, rebounds: 6.3, assists: 1.8, steals: 1.0, turnovers: 1.6, fouls: 2.0, salary: 2380594, quality: 'X', offense: 185, defense: 178, image: 'images/harris.jpg' },
                { name: 'Channing Frye', position: 'PF', team: 'Orlando Magic', age: 31, points: 7.3, rebounds: 3.9, assists: 1.3, steals: 0.5, turnovers: 0.8, fouls: 2.0, salary: 8579088, quality: 'X', offense: 175, defense: 175, image: 'images/frye.jpg' },
                { name: 'Nikola Vucevic', position: 'C', team: 'Orlando Magic', age: 24, points: 19.3, rebounds: 10.9, assists: 2.0, steals: 0.7, turnovers: 2.1, fouls: 2.6, salary: 11250000, quality: 'X', offense: 188, defense: 182, image: 'images/vucevic.jpg' },
                { name: 'Ben Gordon', position: 'SG', team: 'Orlando Magic', age: 31, points: 6.2, rebounds: 1.1, assists: 1.1, steals: 0.4, turnovers: 0.8, fouls: 1.1, salary: 4500000, quality: 'X', offense: 172, defense: 170, image: 'images/gordon.jpg' },
                { name: 'Willie Green', position: 'SG', team: 'Orlando Magic', age: 33, points: 5.9, rebounds: 1.5, assists: 1.3, steals: 0.5, turnovers: 0.7, fouls: 1.5, salary: 1448490, quality: 'X', offense: 172, defense: 172, image: 'images/green.jpg' },
                { name: 'Aaron Gordon', position: 'PF', team: 'Orlando Magic', age: 19, points: 5.2, rebounds: 3.6, assists: 0.7, steals: 0.4, turnovers: 0.7, fouls: 1.5, salary: 4171680, quality: 'X', offense: 172, defense: 178, image: 'images/agordon.jpg' },
                { name: 'Dewayne Dedmon', position: 'C', team: 'Orlando Magic', age: 25, points: 3.7, rebounds: 5.0, assists: 0.3, steals: 0.3, turnovers: 0.8, fouls: 2.3, salary: 816482, quality: 'X', offense: 170, defense: 178, image: 'images/dedmon.jpg' }
            ]
        },
        {
            name: 'Milwaukee Bucks',
            lunlock: false,  
            players: [
                { name: 'Michael Carter-Williams', position: 'PG', team: 'Milwaukee Bucks', age: 23, points: 14.6, rebounds: 5.3, assists: 6.7, steals: 1.7, turnovers: 3.8, fouls: 2.2, salary: 2300040, quality: 'X', offense: 182, defense: 185, image: 'images/carter-williams.jpg' },
                { name: 'Khris Middleton', position: 'SG', team: 'Milwaukee Bucks', age: 23, points: 13.4, rebounds: 4.4, assists: 2.3, steals: 1.5, turnovers: 1.4, fouls: 2.3, salary: 915243, quality: 'X', offense: 182, defense: 182, image: 'images/middleton.jpg' },
                { name: 'Giannis Antetokounmpo', position: 'SF', team: 'Milwaukee Bucks', age: 20, points: 12.7, rebounds: 6.7, assists: 2.6, steals: 0.9, turnovers: 2.1, fouls: 3.1, salary: 1873200, quality: 'X', offense: 182, defense: 185, image: 'images/antetokounmpo.jpg' },
                { name: 'Ersan Ilyasova', position: 'PF', team: 'Milwaukee Bucks', age: 27, points: 11.5, rebounds: 4.8, assists: 1.0, steals: 0.7, turnovers: 1.0, fouls: 2.5, salary: 7900000, quality: 'X', offense: 178, defense: 175, image: 'images/ilyasova.jpg' },
                { name: 'Zaza Pachulia', position: 'C', team: 'Milwaukee Bucks', age: 30, points: 8.3, rebounds: 6.8, assists: 2.4, steals: 0.7, turnovers: 1.4, fouls: 2.7, salary: 5200000, quality: 'X', offense: 175, defense: 180, image: 'images/pachulia.jpg' },
                { name: 'O.J. Mayo', position: 'SG', team: 'Milwaukee Bucks', age: 27, points: 11.4, rebounds: 2.6, assists: 2.8, steals: 0.9, turnovers: 1.6, fouls: 2.1, salary: 8000000, quality: 'X', offense: 180, defense: 175, image: 'images/mayo.jpg' },
                { name: 'Jared Dudley', position: 'SF', team: 'Milwaukee Bucks', age: 29, points: 7.2, rebounds: 3.1, assists: 1.8, steals: 1.0, turnovers: 0.8, fouls: 1.8, salary: 4250000, quality: 'X', offense: 175, defense: 178, image: 'images/dudley.jpg' },
                { name: 'John Henson', position: 'C', team: 'Milwaukee Bucks', age: 24, points: 7.0, rebounds: 4.7, assists: 0.9, steals: 0.3, turnovers: 1.0, fouls: 2.0, salary: 1987320, quality: 'X', offense: 172, defense: 182, image: 'images/henson.jpg' },
                { name: 'Jerryd Bayless', position: 'PG', team: 'Milwaukee Bucks', age: 26, points: 7.8, rebounds: 2.1, assists: 3.0, steals: 0.8, turnovers: 1.2, fouls: 1.6, salary: 3000000, quality: 'X', offense: 175, defense: 175, image: 'images/bayless.jpg' }
            ]
        },
        {
            name: 'Brooklyn Nets',
            lunlock: false, 
            players: [
                { name: 'Deron Williams', position: 'PG', team: 'Brooklyn Nets', age: 30, points: 13.0, rebounds: 3.5, assists: 6.6, steals: 0.9, turnovers: 2.4, fouls: 2.1, salary: 19754465, quality: 'X', offense: 182, defense: 178, image: 'images/williams.jpg' },
                { name: 'Joe Johnson', position: 'SG', team: 'Brooklyn Nets', age: 33, points: 14.4, rebounds: 4.8, assists: 3.7, steals: 0.7, turnovers: 1.8, fouls: 1.6, salary: 23180790, quality: 'X', offense: 182, defense: 178, image: 'images/johnson.jpg' },
                { name: 'Alan Anderson', position: 'SF', team: 'Brooklyn Nets', age: 32, points: 7.4, rebounds: 2.8, assists: 1.1, steals: 0.6, turnovers: 0.8, fouls: 2.0, salary: 1333484, quality: 'X', offense: 175, defense: 175, image: 'images/anderson.jpg' },
                { name: 'Thaddeus Young', position: 'PF', team: 'Brooklyn Nets', age: 26, points: 14.1, rebounds: 5.4, assists: 1.4, steals: 1.6, turnovers: 1.7, fouls: 2.1, salary: 9410869, quality: 'X', offense: 182, defense: 182, image: 'images/young.jpg' },
                { name: 'Brook Lopez', position: 'C', team: 'Brooklyn Nets', age: 26, points: 17.2, rebounds: 7.4, assists: 0.7, steals: 0.6, turnovers: 1.8, fouls: 2.5, salary: 15719063, quality: 'X', offense: 185, defense: 182, image: 'images/lopez.jpg' },
                { name: 'Jarrett Jack', position: 'PG', team: 'Brooklyn Nets', age: 31, points: 12.0, rebounds: 3.1, assists: 4.7, steals: 0.9, turnovers: 2.2, fouls: 2.1, salary: 6300000, quality: 'X', offense: 180, defense: 175, image: 'images/jack.jpg' },
                { name: 'Bojan Bogdanovic', position: 'SG', team: 'Brooklyn Nets', age: 25, points: 9.0, rebounds: 2.7, assists: 0.9, steals: 0.4, turnovers: 1.1, fouls: 1.8, salary: 3278720, quality: 'X', offense: 175, defense: 172, image: 'images/bogdanovic.jpg' },
                { name: 'Mason Plumlee', position: 'C', team: 'Brooklyn Nets', age: 24, points: 8.7, rebounds: 6.2, assists: 0.9, steals: 0.8, turnovers: 1.4, fouls: 2.8, salary: 1357080, quality: 'X', offense: 175, defense: 180, image: 'images/plumlee.jpg' },
                { name: 'Mirza Teletovic', position: 'PF', team: 'Brooklyn Nets', age: 29, points: 8.5, rebounds: 4.9, assists: 1.2, steals: 0.4, turnovers: 0.9, fouls: 2.0, salary: 3368100, quality: 'X', offense: 175, defense: 172, image: 'images/teletovic.jpg' }
            ]
        },
        {
            name: 'Toronto Raptors',
            lunlock: false,  
            players: [
                { name: 'Kyle Lowry', position: 'PG', team: 'Toronto Raptors', age: 28, points: 17.8, rebounds: 4.7, assists: 6.8, steals: 1.6, turnovers: 2.5, fouls: 2.7, salary: 12000000, quality: 'X', offense: 188, defense: 185, image: 'images/lowry.jpg' },
                { name: 'DeMar DeRozan', position: 'SG', team: 'Toronto Raptors', age: 25, points: 20.1, rebounds: 4.6, assists: 3.5, steals: 1.2, turnovers: 2.3, fouls: 2.1, salary: 9500000, quality: 'X', offense: 190, defense: 182, image: 'images/derozan.jpg' },
                { name: 'Terrence Ross', position: 'SF', team: 'Toronto Raptors', age: 24, points: 9.8, rebounds: 2.8, assists: 1.0, steals: 0.8, turnovers: 0.8, fouls: 1.8, salary: 2793960, quality: 'X', offense: 178, defense: 175, image: 'images/ross.jpg' },
                { name: 'Amir Johnson', position: 'PF', team: 'Toronto Raptors', age: 27, points: 9.3, rebounds: 6.1, assists: 1.6, steals: 0.8, turnovers: 1.2, fouls: 3.1, salary: 7000000, quality: 'X', offense: 175, defense: 182, image: 'images/johnson.jpg' },
                { name: 'Jonas Valanciunas', position: 'C', team: 'Toronto Raptors', age: 22, points: 12.0, rebounds: 8.7, assists: 0.5, steals: 0.4, turnovers: 1.8, fouls: 3.2, salary: 4660482, quality: 'X', offense: 180, defense: 185, image: 'images/valanciunas.jpg' },
                { name: 'Lou Williams', position: 'SG', team: 'Toronto Raptors', age: 28, points: 15.5, rebounds: 1.9, assists: 2.1, steals: 1.1, turnovers: 1.3, fouls: 1.9, salary: 5450000, quality: 'X', offense: 185, defense: 175, image: 'images/williams.jpg' },
                { name: 'Patrick Patterson', position: 'PF', team: 'Toronto Raptors', age: 25, points: 8.0, rebounds: 5.3, assists: 1.9, steals: 0.7, turnovers: 0.8, fouls: 2.1, salary: 6268675, quality: 'X', offense: 175, defense: 180, image: 'images/patterson.jpg' },
                { name: 'Greivis Vasquez', position: 'PG', team: 'Toronto Raptors', age: 28, points: 9.5, rebounds: 2.6, assists: 3.7, steals: 0.6, turnovers: 1.5, fouls: 1.8, salary: 6600000, quality: 'X', offense: 178, defense: 172, image: 'images/vasquez.jpg' }
            ]
        },
        {
            name: 'Chicago Bulls',
            lunlock: false,
            lunlock: false,
            players: [
                { name: 'Derrick Rose', position: 'PG', team: 'Chicago Bulls', age: 26, points: 17.7, rebounds: 3.2, assists: 4.9, steals: 0.7, turnovers: 3.2, fouls: 1.6, salary: 18862876, quality: 'X', offense: 188, defense: 180, image: 'images/rose.jpg' },
                { name: 'Jimmy Butler', position: 'SG', team: 'Chicago Bulls', age: 25, points: 20.0, rebounds: 5.8, assists: 3.3, steals: 1.8, turnovers: 1.4, fouls: 1.9, salary: 2008748, quality: 'X', offense: 190, defense: 192, image: 'images/butler.jpg' },
                { name: 'Mike Dunleavy', position: 'SF', team: 'Chicago Bulls', age: 34, points: 9.4, rebounds: 3.9, assists: 1.8, steals: 0.6, turnovers: 1.0, fouls: 2.1, salary: 3326235, quality: 'X', offense: 175, defense: 175, image: 'images/dunleavy.jpg' },
                { name: 'Pau Gasol', position: 'PF', team: 'Chicago Bulls', age: 34, points: 18.5, rebounds: 11.8, assists: 2.7, steals: 0.3, turnovers: 2.2, fouls: 2.1, salary: 7128000, quality: 'X', offense: 192, defense: 185, image: 'images/gasol.jpg' },
                { name: 'Joakim Noah', position: 'C', team: 'Chicago Bulls', age: 30, points: 7.2, rebounds: 9.6, assists: 4.7, steals: 0.7, turnovers: 1.8, fouls: 3.1, salary: 12700000, quality: 'X', offense: 175, defense: 190, image: 'images/noah.jpg' },
                { name: 'Taj Gibson', position: 'PF', team: 'Chicago Bulls', age: 29, points: 10.3, rebounds: 6.4, assists: 1.1, steals: 0.6, turnovers: 1.3, fouls: 2.7, salary: 8000000, quality: 'X', offense: 178, defense: 185, image: 'images/gibson.jpg' },
                { name: 'Aaron Brooks', position: 'PG', team: 'Chicago Bulls', age: 30, points: 11.6, rebounds: 2.0, assists: 3.2, steals: 0.7, turnovers: 1.7, fouls: 1.6, salary: 1145685, quality: 'X', offense: 180, defense: 172, image: 'images/brooks.jpg' },
                { name: 'Nikola Mirotic', position: 'PF', team: 'Chicago Bulls', age: 24, points: 10.2, rebounds: 4.9, assists: 1.2, steals: 0.7, turnovers: 1.4, fouls: 2.7, salary: 5543725, quality: 'X', offense: 180, defense: 178, image: 'images/mirotic.jpg' }
            ]
        },
        {
            name: 'Washington Wizards',
            lunlock: false, 
            players: [
                { name: 'John Wall', position: 'PG', team: 'Washington Wizards', age: 24, points: 17.6, rebounds: 4.6, assists: 10.0, steals: 1.7, turnovers: 3.8, fouls: 2.0, salary: 14746000, quality: 'X', offense: 192, defense: 188, image: 'images/wall.jpg' },
                { name: 'Bradley Beal', position: 'SG', team: 'Washington Wizards', age: 21, points: 15.3, rebounds: 3.8, assists: 3.1, steals: 1.2, turnovers: 1.8, fouls: 2.0, salary: 4505280, quality: 'X', offense: 185, defense: 182, image: 'images/beal.jpg' },
                { name: 'Paul Pierce', position: 'SF', team: 'Washington Wizards', age: 37, points: 11.9, rebounds: 4.0, assists: 2.0, steals: 1.1, turnovers: 1.4, fouls: 2.5, salary: 5305000, quality: 'X', offense: 182, defense: 178, image: 'images/pierce.jpg' },
                { name: 'Nene Hilario', position: 'PF', team: 'Washington Wizards', age: 32, points: 11.0, rebounds: 5.1, assists: 1.8, steals: 1.0, turnovers: 1.8, fouls: 3.1, salary: 13000000, quality: 'X', offense: 180, defense: 185, image: 'images/nene.jpg' },
                { name: 'Marcin Gortat', position: 'C', team: 'Washington Wizards', age: 31, points: 12.2, rebounds: 8.7, assists: 1.2, steals: 0.6, turnovers: 1.6, fouls: 2.7, salary: 12000000, quality: 'X', offense: 182, defense: 185, image: 'images/gortat.jpg' },
                { name: 'Ramon Sessions', position: 'PG', team: 'Washington Wizards', age: 29, points: 7.4, rebounds: 2.7, assists: 3.1, steals: 0.6, turnovers: 1.2, fouls: 1.4, salary: 2077000, quality: 'X', offense: 175, defense: 172, image: 'images/sessions.jpg' },
                { name: 'Kris Humphries', position: 'PF', team: 'Washington Wizards', age: 30, points: 8.0, rebounds: 6.5, assists: 0.9, steals: 0.5, turnovers: 0.8, fouls: 2.2, salary: 4600000, quality: 'X', offense: 172, defense: 178, image: 'images/humphries.jpg' },
                { name: 'Otto Porter', position: 'SF', team: 'Washington Wizards', age: 21, points: 6.0, rebounds: 3.0, assists: 1.6, steals: 0.6, turnovers: 0.7, fouls: 1.6, salary: 4662960, quality: 'X', offense: 172, defense: 175, image: 'images/porter.jpg' }
            ]
        },
        {
            name: 'Boston Celtics',     
            lunlock: false,
            players: [
                { name: 'Isaiah Thomas', position: 'PG', team: 'Boston Celtics', age: 26, points: 19.0, rebounds: 2.1, assists: 5.4, steals: 0.9, turnovers: 2.3, fouls: 2.0, salary: 7238606, quality: 'X', offense: 188, defense: 175, image: 'images/thomas.jpg' },
                { name: 'Avery Bradley', position: 'SG', team: 'Boston Celtics', age: 24, points: 13.9, rebounds: 3.1, assists: 1.8, steals: 1.1, turnovers: 1.4, fouls: 2.2, salary: 7730337, quality: 'X', offense: 180, defense: 185, image: 'images/bradley.jpg' },
                { name: 'Evan Turner', position: 'SF', team: 'Boston Celtics', age: 26, points: 9.5, rebounds: 5.1, assists: 5.5, steals: 1.0, turnovers: 2.4, fouls: 2.4, salary: 3278000, quality: 'X', offense: 178, defense: 180, image: 'images/turner.jpg' },
                { name: 'Brandon Bass', position: 'PF', team: 'Boston Celtics', age: 29, points: 10.6, rebounds: 4.9, assists: 1.3, steals: 0.5, turnovers: 1.0, fouls: 2.1, salary: 6900000, quality: 'X', offense: 178, defense: 178, image: 'images/bass.jpg' },
                { name: 'Tyler Zeller', position: 'C', team: 'Boston Celtics', age: 25, points: 10.2, rebounds: 5.7, assists: 1.4, steals: 0.3, turnovers: 1.1, fouls: 2.5, salary: 1703760, quality: 'X', offense: 178, defense: 180, image: 'images/zeller.jpg' },
                { name: 'Marcus Smart', position: 'PG', team: 'Boston Celtics', age: 21, points: 7.8, rebounds: 3.3, assists: 3.1, steals: 1.5, turnovers: 1.5, fouls: 2.5, salary: 3283320, quality: 'X', offense: 172, defense: 185, image: 'images/smart.jpg' },
                { name: 'Jae Crowder', position: 'SF', team: 'Boston Celtics', age: 24, points: 9.5, rebounds: 4.6, assists: 1.4, steals: 1.0, turnovers: 0.9, fouls: 2.4, salary: 915243, quality: 'X', offense: 175, defense: 182, image: 'images/crowder.jpg' },
                { name: 'Kelly Olynyk', position: 'C', team: 'Boston Celtics', age: 23, points: 10.3, rebounds: 4.7, assists: 1.7, steals: 0.8, turnovers: 1.4, fouls: 3.2, salary: 2075760, quality: 'X', offense: 178, defense: 175, image: 'images/olynyk.jpg' }
            ]
        },
        {
            name: 'Philadelphia 76ers',
            lunlock: false,
            players: [
                { name: 'Michael Carter-Williams', position: 'PG', team: 'Philadelphia 76ers', age: 23, points: 15.0, rebounds: 6.2, assists: 7.4, steals: 1.5, turnovers: 4.2, fouls: 2.2, salary: 2300040, quality: 'X', offense: 182, defense: 180, image: 'images/carter-williams.jpg' },
                { name: 'Robert Covington', position: 'SF', team: 'Philadelphia 76ers', age: 24, points: 13.5, rebounds: 4.5, assists: 1.5, steals: 1.4, turnovers: 1.6, fouls: 2.5, salary: 1000000, quality: 'X', offense: 180, defense: 178, image: 'images/covington.jpg' },
                { name: 'Nerlens Noel', position: 'C', team: 'Philadelphia 76ers', age: 20, points: 9.9, rebounds: 8.1, assists: 1.7, steals: 1.8, turnovers: 1.8, fouls: 3.1, salary: 3315120, quality: 'X', offense: 175, defense: 188, image: 'images/noel.jpg' },
                { name: 'Luc Mbah a Moute', position: 'PF', team: 'Philadelphia 76ers', age: 28, points: 9.9, rebounds: 4.9, assists: 1.6, steals: 1.2, turnovers: 1.3, fouls: 2.4, salary: 4382576, quality: 'X', offense: 172, defense: 182, image: 'images/mbah-a-moute.jpg' },
                { name: 'Henry Sims', position: 'C', team: 'Philadelphia 76ers', age: 24, points: 8.0, rebounds: 4.9, assists: 1.1, steals: 0.4, turnovers: 1.3, fouls: 2.5, salary: 915243, quality: 'X', offense: 172, defense: 175, image: 'images/sims.jpg' },
                { name: 'Tony Wroten', position: 'SG', team: 'Philadelphia 76ers', age: 21, points: 16.9, rebounds: 2.9, assists: 5.2, steals: 1.6, turnovers: 3.8, fouls: 2.1, salary: 1210080, quality: 'X', offense: 180, defense: 175, image: 'images/wroten.jpg' },
                { name: 'Hollis Thompson', position: 'SG', team: 'Philadelphia 76ers', age: 23, points: 8.8, rebounds: 2.8, assists: 1.1, steals: 0.7, turnovers: 0.9, fouls: 1.9, salary: 816482, quality: 'X', offense: 175, defense: 172, image: 'images/thompson.jpg' },
                { name: 'JaKarr Sampson', position: 'SF', team: 'Philadelphia 76ers', age: 21, points: 5.2, rebounds: 2.2, assists: 1.0, steals: 0.4, turnovers: 0.8, fouls: 1.8, salary: 507336, quality: 'X', offense: 170, defense: 172, image: 'images/sampson.jpg' }
            ]
        },
        {
            name: 'New York Knicks',
            lunlock: false,
            players: [
                { name: 'Jose Calderon', position: 'PG', team: 'New York Knicks', age: 33, points: 9.1, rebounds: 3.0, assists: 4.7, steals: 0.7, turnovers: 1.4, fouls: 1.5, salary: 7097191, quality: 'X', offense: 175, defense: 172, image: 'images/calderon.jpg' },
                { name: 'Tim Hardaway Jr.', position: 'SG', team: 'New York Knicks', age: 22, points: 11.5, rebounds: 2.2, assists: 1.8, steals: 0.3, turnovers: 1.1, fouls: 1.8, salary: 1304520, quality: 'X', offense: 178, defense: 172, image: 'images/hardaway.jpg' },
                { name: 'Carmelo Anthony', position: 'SF', team: 'New York Knicks', age: 30, points: 24.2, rebounds: 6.6, assists: 3.1, steals: 1.0, turnovers: 2.2, fouls: 2.5, salary: 22458000, quality: 'X', offense: 195, defense: 180, image: 'images/anthony.jpg' },
                { name: 'Andrea Bargnani', position: 'PF', team: 'New York Knicks', age: 29, points: 14.8, rebounds: 4.4, assists: 1.6, steals: 0.3, turnovers: 1.4, fouls: 2.2, salary: 11500000, quality: 'X', offense: 180, defense: 172, image: 'images/bargnani.jpg' },
                { name: 'Cole Aldrich', position: 'C', team: 'New York Knicks', age: 26, points: 5.5, rebounds: 5.5, assists: 1.2, steals: 0.7, turnovers: 1.1, fouls: 2.7, salary: 981084, quality: 'X', offense: 172, defense: 178, image: 'images/aldrich.jpg' },
                { name: 'Langston Galloway', position: 'PG', team: 'New York Knicks', age: 23, points: 11.8, rebounds: 4.2, assists: 3.3, steals: 1.2, turnovers: 1.6, fouls: 1.7, salary: 845059, quality: 'X', offense: 178, defense: 175, image: 'images/galloway.jpg' },
                { name: 'Jason Smith', position: 'PF', team: 'New York Knicks', age: 28, points: 8.0, rebounds: 4.0, assists: 1.7, steals: 0.3, turnovers: 0.9, fouls: 2.6, salary: 3278000, quality: 'X', offense: 175, defense: 175, image: 'images/smith.jpg' },
                { name: 'Shane Larkin', position: 'PG', team: 'New York Knicks', age: 22, points: 6.2, rebounds: 2.3, assists: 3.0, steals: 1.2, turnovers: 1.4, fouls: 1.6, salary: 1606080, quality: 'X', offense: 172, defense: 175, image: 'images/larkin.jpg' }
            ]
        },
        {
            name: 'Charlotte Hornets',
            lunlock: false,
            players: [
                { name: 'Kemba Walker', position: 'PG', team: 'Charlotte Hornets', age: 24, points: 17.3, rebounds: 3.5, assists: 5.1, steals: 1.4, turnovers: 1.6, fouls: 1.6, salary: 12000000, quality: 'X', offense: 185, defense: 182, image: 'images/walker.jpg' },
                { name: 'Gerald Henderson', position: 'SG', team: 'Charlotte Hornets', age: 27, points: 12.1, rebounds: 3.4, assists: 2.6, steals: 0.6, turnovers: 1.4, fouls: 1.8, salary: 6000000, quality: 'X', offense: 178, defense: 178, image: 'images/henderson.jpg' },
                { name: 'Michael Kidd-Gilchrist', position: 'SF', team: 'Charlotte Hornets', age: 21, points: 10.9, rebounds: 7.6, assists: 1.4, steals: 0.5, turnovers: 1.3, fouls: 2.1, salary: 5016960, quality: 'X', offense: 175, defense: 185, image: 'images/kidd-gilchrist.jpg' },
                { name: 'Marvin Williams', position: 'PF', team: 'Charlotte Hornets', age: 28, points: 7.4, rebounds: 4.9, assists: 1.3, steals: 0.7, turnovers: 0.8, fouls: 1.8, salary: 7000000, quality: 'X', offense: 175, defense: 178, image: 'images/williams.jpg' },
                { name: 'Al Jefferson', position: 'C', team: 'Charlotte Hornets', age: 30, points: 16.6, rebounds: 8.4, assists: 1.7, steals: 0.7, turnovers: 1.5, fouls: 2.2, salary: 13500000, quality: 'X', offense: 185, defense: 180, image: 'images/jefferson.jpg' },
                { name: 'Mo Williams', position: 'PG', team: 'Charlotte Hornets', age: 32, points: 14.2, rebounds: 2.6, assists: 6.2, steals: 0.7, turnovers: 2.4, fouls: 1.5, salary: 3750000, quality: 'X', offense: 180, defense: 172, image: 'images/mwilliams.jpg' },
                { name: 'Cody Zeller', position: 'PF', team: 'Charlotte Hornets', age: 22, points: 7.6, rebounds: 5.8, assists: 1.6, steals: 0.5, turnovers: 1.1, fouls: 2.8, salary: 4030560, quality: 'X', offense: 175, defense: 180, image: 'images/zeller.jpg' },
                { name: 'Lance Stephenson', position: 'SG', team: 'Charlotte Hornets', age: 24, points: 8.2, rebounds: 4.5, assists: 3.9, steals: 0.6, turnovers: 1.7, fouls: 1.8, salary: 9000000, quality: 'X', offense: 175, defense: 180, image: 'images/stephenson.jpg' }
            ]
        },
        {
            name: 'Los Angeles Lakers',
            lunlock: false,
            players: [
                { name: 'Jordan Clarkson', position: 'PG', team: 'Los Angeles Lakers', age: 22, points: 11.9, rebounds: 3.2, assists: 3.5, steals: 0.9, turnovers: 1.6, fouls: 1.8, salary: 507336, quality: 'X', offense: 178, defense: 175, image: 'images/clarkson.jpg' },
                { name: 'Wayne Ellington', position: 'SG', team: 'Los Angeles Lakers', age: 27, points: 10.0, rebounds: 3.2, assists: 1.6, steals: 0.5, turnovers: 0.9, fouls: 1.4, salary: 1063384, quality: 'X', offense: 175, defense: 172, image: 'images/ellington.jpg' },
                { name: 'Kobe Bryant', position: 'SG', team: 'Los Angeles Lakers', age: 36, points: 22.3, rebounds: 5.7, assists: 5.6, steals: 1.3, turnovers: 3.7, fouls: 2.0, salary: 23500000, quality: 'X', offense: 188, defense: 180, image: 'images/bryant.jpg' },
                { name: 'Carlos Boozer', position: 'PF', team: 'Los Angeles Lakers', age: 33, points: 11.8, rebounds: 6.8, assists: 1.3, steals: 0.6, turnovers: 1.4, fouls: 2.1, salary: 13550000, quality: 'X', offense: 178, defense: 175, image: 'images/boozer.jpg' },
                { name: 'Jordan Hill', position: 'C', team: 'Los Angeles Lakers', age: 27, points: 12.0, rebounds: 7.9, assists: 1.5, steals: 0.4, turnovers: 1.3, fouls: 2.7, salary: 9000000, quality: 'X', offense: 178, defense: 180, image: 'images/hill.jpg' },
                { name: 'Jeremy Lin', position: 'PG', team: 'Los Angeles Lakers', age: 26, points: 11.2, rebounds: 2.6, assists: 4.6, steals: 1.1, turnovers: 2.2, fouls: 2.0, salary: 14898938, quality: 'X', offense: 178, defense: 175, image: 'images/lin.jpg' },
                { name: 'Ed Davis', position: 'PF', team: 'Los Angeles Lakers', age: 25, points: 8.3, rebounds: 7.6, assists: 1.2, steals: 0.7, turnovers: 1.1, fouls: 2.3, salary: 981084, quality: 'X', offense: 175, defense: 180, image: 'images/davis.jpg' },
                { name: 'Nick Young', position: 'SF', team: 'Los Angeles Lakers', age: 29, points: 13.4, rebounds: 2.3, assists: 1.0, steals: 0.6, turnovers: 1.0, fouls: 1.7, salary: 4994420, quality: 'X', offense: 180, defense: 172, image: 'images/young.jpg' }
            ]
        },
        {
            name: 'Dream Team I ',
            lunlock: false, 
            players: [
                { name: 'Chris Paul', position: 'PG', team: 'LAC', age: 22, points: 23.4, rebounds: 3.2, assists: 11.5, steals: 0.9, turnovers: 1.6, fouls: 1.8, salary: 507336, quality: 'X', offense: 210, defense: 175, image: 'images/ChrisPaul.jpg' },
                { name: 'Wayne Ellington', position: 'SG', team: 'Los Angeles Lakers', age: 27, points: 10.0, rebounds: 3.2, assists: 1.6, steals: 0.5, turnovers: 0.9, fouls: 1.4, salary: 1063384, quality: 'X', offense: 175, defense: 172, image: 'images/ellington.jpg' },
                { name: 'Kobe Bryant', position: 'SG', team: 'Los Angeles Lakers', age: 36, points: 22.3, rebounds: 5.7, assists: 5.6, steals: 1.3, turnovers: 3.7, fouls: 2.0, salary: 23500000, quality: 'X', offense: 235, defense: 170, image: 'images/bryant.jpg' },
                { name: 'Carlos Boozer', position: 'PF', team: 'Los Angeles Lakers', age: 33, points: 11.8, rebounds: 6.8, assists: 1.3, steals: 0.6, turnovers: 1.4, fouls: 2.1, salary: 13550000, quality: 'X', offense: 178, defense: 175, image: 'images/boozer.jpg' },
                { name: 'Dwight Howard', position: 'C', team: 'Los Angeles Lakers', age: 27, points: 29.0, rebounds: 11.9, assists: 1.5, steals: 0.4, turnovers: 1.3, fouls: 2.7, salary: 9000000, quality: 'X', offense: 178, defense: 220, image: 'images/hill.jpg' },
                { name: 'Jeremy Lin', position: 'PG', team: 'Los Angeles Lakers', age: 26, points: 11.2, rebounds: 2.6, assists: 4.6, steals: 1.1, turnovers: 2.2, fouls: 2.0, salary: 14898938, quality: 'X', offense: 178, defense: 175, image: 'images/lin.jpg' },
                { name: 'Dirk Nowitzki', position: 'PF', team: 'Dallas Mavericks', age: 25, points: 28.3, rebounds: 7.6, assists: 1.2, steals: 0.7, turnovers: 1.1, fouls: 2.3, salary: 981084, quality: 'X', offense: 225, defense: 180, image: 'images/davis.jpg' },
                { name: 'Lebron James', position: 'SF', team: 'Miami Heat', age: 29, points: 23.4, rebounds: 8.3, assists: 7.0, steals: 0.6, turnovers: 1.0, fouls: 1.7, salary: 4994420, quality: 'X', offense: 220, defense: 192, image: 'images/young.jpg' }
            ]
        },
        {
            name: 'Dream Team II ',
            lunlock: false,
            players: [
                { name: 'Magic Johnson', position: 'PG', team: 'LAC', age: 22, points: 25.8, rebounds: 3.2, assists: 12.5, steals: 0.9, turnovers: 1.6, fouls: 1.8, salary: 507336, quality: 'X', offense: 230, defense: 175, image: 'images/ChrisPaul.jpg' },
                { name: 'Wayne Ellington', position: 'SG', team: 'Los Angeles Lakers', age: 27, points: 10.0, rebounds: 3.2, assists: 1.6, steals: 0.5, turnovers: 0.9, fouls: 1.4, salary: 1063384, quality: 'X', offense: 175, defense: 172, image: 'images/ellington.jpg' },
                { name: 'Stephen Curry', position: 'SG', team: 'Los Angeles Lakers', age: 36, points: 29.3, rebounds: 5.7, assists: 5.6, steals: 1.3, turnovers: 3.7, fouls: 2.0, salary: 23500000, quality: 'X', offense: 260, defense: 170, image: 'images/bryant.jpg' },
                { name: 'Carlos Boozer', position: 'PF', team: 'Los Angeles Lakers', age: 33, points: 11.8, rebounds: 6.8, assists: 1.3, steals: 0.6, turnovers: 1.4, fouls: 2.1, salary: 13550000, quality: 'X', offense: 178, defense: 175, image: 'images/boozer.jpg' },
                { name: 'Shaquille O\'Neal', position: 'C', team: 'Los Angeles Lakers', age: 29, points: 29.2, rebounds: 14.9, assists: 1.5, steals: 0.4, turnovers: 1.3, fouls: 2.7, salary: 9000000, quality: 'X', offense: 238, defense: 250, image: 'images/hill.jpg' },
                { name: 'Jeremy Lin', position: 'PG', team: 'Los Angeles Lakers', age: 26, points: 11.2, rebounds: 2.6, assists: 4.6, steals: 1.1, turnovers: 2.2, fouls: 2.0, salary: 14898938, quality: 'X', offense: 178, defense: 175, image: 'images/lin.jpg' },
                { name: 'Anthony Davis', position: 'PF', team: 'Dallas Mavericks', age: 25, points: 28.3, rebounds: 11.6, assists: 1.2, steals: 0.7, turnovers: 1.1, fouls: 2.3, salary: 981084, quality: 'X', offense: 225, defense: 220, image: 'images/davis.jpg' },
                { name: 'Kawhi Leonard', position: 'SF', team: 'Miami Heat', age: 29, points: 29.4, rebounds: 6.3, assists: 4.0, steals: 0.6, turnovers: 1.0, fouls: 1.7, salary: 4994420, quality: 'X', offense: 230, defense: 220, image: 'images/young.jpg' }
            ]
        },
        {
            name: 'Dream Team III ',
            lunlock: false,
            players: [
                { name: 'Stephen Curry', position: 'PG', team: 'LAC', age: 22, points: 31.8, rebounds: 6.2, assists: 7.5, steals: 0.9, turnovers: 1.6, fouls: 1.8, salary: 507336, quality: 'X', offense: 290, defense: 175, image: 'images/ChrisPaul.jpg' },
                { name: 'Wayne Ellington', position: 'SG', team: 'Los Angeles Lakers', age: 27, points: 10.0, rebounds: 3.2, assists: 1.6, steals: 0.5, turnovers: 0.9, fouls: 1.4, salary: 1063384, quality: 'X', offense: 175, defense: 172, image: 'images/ellington.jpg' },
                { name: 'Jhames Harden', position: 'SG', team: 'Los Angeles Lakers', age: 36, points: 33.3, rebounds: 5.7, assists: 5.6, steals: 1.3, turnovers: 3.7, fouls: 2.0, salary: 23500000, quality: 'X', offense: 297, defense: 170, image: 'images/bryant.jpg' },
                { name: 'Carlos Boozer', position: 'PF', team: 'Los Angeles Lakers', age: 33, points: 11.8, rebounds: 6.8, assists: 1.3, steals: 0.6, turnovers: 1.4, fouls: 2.1, salary: 13550000, quality: 'X', offense: 178, defense: 175, image: 'images/boozer.jpg' },
                { name: 'Tim Duncan', position: 'C', team: 'Los Angeles Lakers', age: 29, points: 24.2, rebounds: 13.9, assists: 1.5, steals: 0.4, turnovers: 1.3, fouls: 2.7, salary: 9000000, quality: 'X', offense: 238, defense: 290, image: 'images/hill.jpg' },
                { name: 'Jeremy Lin', position: 'PG', team: 'Los Angeles Lakers', age: 26, points: 11.2, rebounds: 2.6, assists: 4.6, steals: 1.1, turnovers: 2.2, fouls: 2.0, salary: 14898938, quality: 'X', offense: 178, defense: 175, image: 'images/lin.jpg' },
                { name: 'Demarcus Cousins', position: 'PF', team: 'Dallas Mavericks', age: 25, points: 28.3, rebounds: 13.6, assists: 1.2, steals: 0.7, turnovers: 1.1, fouls: 2.3, salary: 981084, quality: 'X', offense: 275, defense: 270, image: 'images/davis.jpg' },
                { name: 'Tracy McGrady', position: 'SF', team: 'Miami Heat', age: 29, points: 34.4, rebounds: 6.3, assists: 4.0, steals: 0.6, turnovers: 1.0, fouls: 1.7, salary: 4994420, quality: 'X', offense: 330, defense: 220, image: 'images/young.jpg' }
            ]
        },
        {
            name: 'Hall of Fame',
            lunlock: false,
            players: [
                { name: 'Kaan Pomakoğlu', position: 'PG', team: 'LAC', age: 22, points: 18.8, rebounds: 6.2, assists: 14.5, steals: 2.9, turnovers: 1.6, fouls: 1.8, salary: 507336, quality: 'X', offense: 490, defense: 375, image: 'images/ChrisPaul.jpg' },
                { name: 'Wayne Ellington', position: 'SG', team: 'Los Angeles Lakers', age: 27, points: 10.0, rebounds: 3.2, assists: 1.6, steals: 0.5, turnovers: 0.9, fouls: 1.4, salary: 1063384, quality: 'X', offense: 175, defense: 172, image: 'images/ellington.jpg' },
                { name: 'Ömer Atun', position: 'SG', team: 'Los Angeles Lakers', age: 36, points: 21.3, rebounds: 7.7, assists: 5.6, steals: 4.3, turnovers: 3.7, fouls: 2.0, salary: 23500000, quality: 'X', offense: 317, defense: 470, image: 'images/bryant.jpg' },
                { name: 'Carlos Boozer', position: 'PF', team: 'Los Angeles Lakers', age: 33, points: 11.8, rebounds: 6.8, assists: 1.3, steals: 0.6, turnovers: 1.4, fouls: 2.1, salary: 13550000, quality: 'X', offense: 178, defense: 175, image: 'images/boozer.jpg' },
                { name: 'Yunus Emre Hamatoğlu', position: 'C', team: 'Los Angeles Lakers', age: 29, points: 19.2, rebounds: 14.9, assists: 1.5, steals: 0.4, turnovers: 1.3, fouls: 2.7, salary: 9000000, quality: 'X', offense: 338, defense: 690, image: 'images/hill.jpg' },
                { name: 'Jeremy Lin', position: 'PG', team: 'Los Angeles Lakers', age: 26, points: 11.2, rebounds: 2.6, assists: 4.6, steals: 1.1, turnovers: 2.2, fouls: 2.0, salary: 14898938, quality: 'X', offense: 178, defense: 175, image: 'images/lin.jpg' },
                { name: 'Sinan Emre Bitim', position: 'PF', team: 'Dallas Mavericks', age: 25, points: 18.3, rebounds: 15.6, assists: 1.2, steals: 0.7, turnovers: 1.1, fouls: 2.3, salary: 981084, quality: 'X', offense: 275, defense: 670, image: 'images/davis.jpg' },
                { name: 'Önder Atun', position: 'SF', team: 'Miami Heat', age: 29, points: 28.4, rebounds: 6.3, assists: 4.0, steals: 2.6, turnovers: 1.0, fouls: 1.7, salary: 4994420, quality: 'X', offense: 550, defense: 520, image: 'images/young.jpg' }
            ]
        }
    ];
    // ... diğer takımlar


// Kalite değerleri için sabitler
const qualityLevels = {
    'S+': { minOffense: 85, minDefense: 85 },
    'S': { minOffense: 80, minDefense: 80 },
    'S-': { minOffense: 75, minDefense: 75 },
    // ... diğer kalite seviyeleri
};  

// Takımların kilidini açma fonksiyonu
function unlockTeam(teamName) {
    const team = teams.find(t => t.name === teamName);
    if (team) {
        team.unlocked = true;
        // Takım verilerini localStorage'a kaydet
        localStorage.setItem('teams', JSON.stringify(teams));
    }
}

// Takımın kilit durumunu kontrol etme
function isTeamUnlocked(teamName) {
    const team = teams.find(t => t.name === teamName);
    return team ? team.unlocked : false;
}