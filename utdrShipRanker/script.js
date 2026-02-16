const DEFAULT_ITEMS = [
    {
        "id": 1,
        "name": "25 Shadowguys",
        "flag": "./deltarune-ship/25-shadowguys.png"
    },
    {
        "id": 2,
        "name": "Addison Polycule",
        "flag": "./deltarune-ship/addison-polycule.png"
    },
    {
        "id": 3,
        "name": "Alphiel",
        "flag": "./deltarune-ship/alphiel.png"
    },
    {
        "id": 4,
        "name": "Alphore",
        "flag": "./deltarune-ship/alphore.png"
    },
    {
        "id": 5,
        "name": "Alphyne",
        "flag": "./deltarune-ship/alphyne.png"
    },
    {
        "id": 6,
        "name": "Asgore x Carol",
        "flag": "./deltarune-ship/asgore-x-carol.png"
    },
    {
        "id": 7,
        "name": "Asgoriel",
        "flag": "./deltarune-ship/asgoriel.png"
    },
    {
        "id": 8,
        "name": "Asgorudy",
        "flag": "./deltarune-ship/asgorudy.png"
    },
    {
        "id": 9,
        "name": "Azzypants",
        "flag": "./deltarune-ship/66.png"
    },
    {
        "id": 10,
        "name": "Berdelle",
        "flag": "./deltarune-ship/berdelle.png"
    },
    {
        "id": 11,
        "name": "Berdsei",
        "flag": "./deltarune-ship/berdsei.png"
    },
    {
        "id": 12,
        "name": "Berdsie",
        "flag": "./deltarune-ship/berdsie.png"
    },
    {
        "id": 14,
        "name": "Bluescreen",
        "flag": "./deltarune-ship/bluescreen.png"
    },
    {
        "id": 15,
        "name": "Bratcat",
        "flag": "./deltarune-ship/bratcat.png"
    },
    {
        "id": 16,
        "name": "Brazzy",
        "flag": "./deltarune-ship/67.png"
    },
    {
        "id": 19,
        "name": "Cariel",
        "flag": "./deltarune-ship/cariel.png"
    },
    {
        "id": 22,
        "name": "Carudy",
        "flag": "./deltarune-ship/carudy.png"
    },
    {
        "id": 23,
        "name": "Catelle",
        "flag": "./deltarune-ship/catelle.png"
    },
    {
        "id": 25,
        "name": "Catsie",
        "flag": "./deltarune-ship/catsie.png"
    },
    {
        "id": 26,
        "name": "Catti x Berdly",
        "flag": "./deltarune-ship/catti-x-berdly.png"
    },
    {
        "id": 27,
        "name": "Cattington",
        "flag": "./deltarune-ship/cattington.png"
    },
    {
        "id": 28,
        "name": "Cazzy",
        "flag": "./deltarune-ship/cazzy.png"
    },
    {
        "id": 30,
        "name": "Clovsei",
        "flag": "./deltarune-ship/clovsei.png"
    },
    {
        "id": 31,
        "name": "Cyberspade",
        "flag": "./deltarune-ship/cyberspade.png"
    },
    {
        "id": 32,
        "name": "Dess x Bratty",
        "flag": "./deltarune-ship/dess-x-bratty.png"
    },
    {
        "id": 33,
        "name": "Dessriel",
        "flag": "./deltarune-ship/68.png"
    },
    {
        "id": 34,
        "name": "FRIEND x ERAM",
        "flag": "./deltarune-ship/friend-x-eram.png"
    },
    {
        "id": 35,
        "name": "Friendtenna",
        "flag": "./deltarune-ship/friendtenna.png"
    },
    {
        "id": 37,
        "name": "Friendton",
        "flag": "./deltarune-ship/friendton.png"
    },
    {
        "id": 38,
        "name": "Corestrings",
        "flag": "./deltarune-ship/gaster-x-player.png"
    },
    {
        "id": 39,
        "name": "gasterouxls",
        "flag": "./deltarune-ship/gasterouxls.png"
    },
    {
        "id": 40,
        "name": "gerster",
        "flag": "./deltarune-ship/gerster.png"
    },
    {
        "id": 41,
        "name": "Head Hathy x Werewerewire",
        "flag": "./deltarune-ship/head-hathy-x-werewerewire.png"
    },
    {
        "id": 42,
        "name": "Jevilaard",
        "flag": "./deltarune-ship/jevilaard.png"
    },
    {
        "id": 44,
        "name": "Kerdly",
        "flag": "./deltarune-ship/kerdly.png"
    },
    {
        "id": 45,
        "name": "Kerdsei",
        "flag": "./deltarune-ship/kerdsei.png"
    },
    {
        "id": 46,
        "name": "Kerdsuselle",
        "flag": "./deltarune-ship/kerdsuselle.png"
    },
    {
        "id": 47,
        "name": "Kingkaard",
        "flag": "./deltarune-ship/kingkaard.png"
    },
    {
        "id": 49,
        "name": "Kingvil",
        "flag": "./deltarune-ship/kingvil.png"
    },
    {
        "id": 50,
        "name": "Kralsei",
        "flag": "./deltarune-ship/kralsei.png"
    },
    {
        "id": 51,
        "name": "Kralsuselle",
        "flag": "./deltarune-ship/kralsuselle.png"
    },
    {
        "id": 52,
        "name": "Kralsuselly",
        "flag": "./deltarune-ship/kralsuselly.png"
    },
    {
        "id": 53,
        "name": "Kralsusie",
        "flag": "./deltarune-ship/kralsusie.png"
    },
    {
        "id": 54,
        "name": "Kratti",
        "flag": "./deltarune-ship/kratti.png"
    },
    {
        "id": 55,
        "name": "Kressel",
        "flag": "./deltarune-ship/kressel.png"
    },
    {
        "id": 56,
        "name": "Snowgrave Kriselle",
        "flag": "./deltarune-ship/kriselle-wr.png"
    },
    {
        "id": 57,
        "name": "Kriselle",
        "flag": "./deltarune-ship/kriselle.png"
    },
    {
        "id": 58,
        "name": "Krisington",
        "flag": "./deltarune-ship/krisington.png"
    },
    {
        "id": 59,
        "name": "Kristeen",
        "flag": "./deltarune-ship/kristeen.png"
    },
    {
        "id": 60,
        "name": "Krusie",
        "flag": "./deltarune-ship/krusie.png"
    },
    {
        "id": 61,
        "name": "Krusielle",
        "flag": "./deltarune-ship/krusielle.png"
    },
    {
        "id": 63,
        "name": "Mettatenna",
        "flag": "./deltarune-ship/mettatenna.png"
    },
    {
        "id": 64,
        "name": "Mewgore",
        "flag": "./deltarune-ship/mewgore.png"
    },
    {
        "id": 65,
        "name": "Polymike",
        "flag": "./deltarune-ship/mike-polycule.png"
    },
    {
        "id": 67,
        "name": "Miketenna",
        "flag": "./deltarune-ship/miketenna.png"
    },
    {
        "id": 73,
        "name": "Mizzmanager",
        "flag": "./deltarune-ship/mizzmanager.png"
    },
    {
        "id": 74,
        "name": "Nicepants",
        "flag": "./deltarune-ship/nicepants.png"
    },
    {
        "id": 75,
        "name": "Nubert x Starwalker",
        "flag": "./deltarune-ship/nubert-x-starwalker.png"
    },
    {
        "id": 76,
        "name": "Papykaard",
        "flag": "./deltarune-ship/papykaard.png"
    },
    {
        "id": 77,
        "name": "Playersei",
        "flag": "./deltarune-ship/playersei.png"
    },
    {
        "id": 78,
        "name": "Polyrouxls",
        "flag": "./deltarune-ship/polyrouxls.png"
    },
    {
        "id": 79,
        "name": "Queenkaard",
        "flag": "./deltarune-ship/queenkaard.png"
    },
    {
        "id": 81,
        "name": "Queentenna",
        "flag": "./deltarune-ship/queentenna.png"
    },
    {
        "id": 82,
        "name": "Quoriel",
        "flag": "./deltarune-ship/quoriel.png"
    },
    {
        "id": 84,
        "name": "Ralselle",
        "flag": "./deltarune-ship/ralselle.png"
    },
    {
        "id": 85,
        "name": "Ralsusie",
        "flag": "./deltarune-ship/ralsusie.png"
    },
    {
        "id": 86,
        "name": "Ramb x ERAM",
        "flag": "./deltarune-ship/ramb-x-eram.png"
    },
    {
        "id": 87,
        "name": "Rambfriend",
        "flag": "./deltarune-ship/rambfriend.png"
    },
    {
        "id": 88,
        "name": "Rambtenna",
        "flag": "./deltarune-ship/rambtenna.png"
    },
    {
        "id": 91,
        "name": "Rudouxls",
        "flag": "./deltarune-ship/rudouxls.png"
    },
    {
        "id": 93,
        "name": "Sweet Cap'n Cakes",
        "flag": "./deltarune-ship/scc.png"
    },
    {
        "id": 98,
        "name": "Seavil",
        "flag": "./deltarune-ship/seavil.png"
    },
    {
        "id": 103,
        "name": "Snowyteen",
        "flag": "./deltarune-ship/snowyteen.png"
    },
    {
        "id": 104,
        "name": "Soriel",
        "flag": "./deltarune-ship/soriel.png"
    },
    {
        "id": 106,
        "name": "Spadesgore",
        "flag": "./deltarune-ship/spadesgore.png"
    },
    {
        "id": 111,
        "name": "Spamqueen",
        "flag": "./deltarune-ship/spamqueen.png"
    },
    {
        "id": 112,
        "name": "Spamtenna",
        "flag": "./deltarune-ship/spamtenna.png"
    },
    {
        "id": 114,
        "name": "Spamvil",
        "flag": "./deltarune-ship/spamvil.png"
    },
    {
        "id": 115,
        "name": "Starweather",
        "flag": "./deltarune-ship/starweather.png"
    },
    {
        "id": 117,
        "name": "Suselle",
        "flag": "./deltarune-ship/suselle.png"
    },
    {
        "id": 118,
        "name": "Susellerdy",
        "flag": "./deltarune-ship/susellerdy.png"
    },
    {
        "id": 124,
        "name": "Swatchton",
        "flag": "./deltarune-ship/swatchton.png"
    },
    {
        "id": 127,
        "name": "Tasqueen",
        "flag": "./deltarune-ship/tasqueen.png"
    },
    {
        "id": 128,
        "name": "Tasquevil",
        "flag": "./deltarune-ship/tasquevil.png"
    },
    {
        "id": 131,
        "name": "Vessel x Ralsei",
        "flag": "./deltarune-ship/vessel-x-ralsei.png"
    },
    {
        "id": 132,
        "name": "Vesselle",
        "flag": "./deltarune-ship/vesselle.png"
    },
    {
        "id": 133,
        "name": "Weather Duo",
        "flag": "./deltarune-ship/weather-duo.png"
    },
    {
        "id": 137,
        "name": "Jongtat",
        "flag": "./deltarune-ship/zzzzz-1763928359jongtat.png"
    },
    {
        "id": 138,
        "name": "Miketat",
        "flag": "./deltarune-ship/zzzzz-1763928359miketat.png"
    },
    {
        "id": 139,
        "name": "Rambpins",
        "flag": "./deltarune-ship/zzzzz-1763928359rambpins.png"
    },
    {
        "id": 140,
        "name": "Rambtat",
        "flag": "./deltarune-ship/zzzzz-1763928359rambtat.png"
    },
    {
        "id": 141,
        "name": "Battenna",
        "flag": "./deltarune-ship/zzzzz-1763928360battenna.png"
    },
    {
        "id": 142,
        "name": "Copycats",
        "flag": "./deltarune-ship/zzzzz-1763928360copycats.png"
    },
    {
        "id": 143,
        "name": "Friendlytricks",
        "flag": "./deltarune-ship/zzzzz-1763928360friendlytricks.png"
    },
    {
        "id": 144,
        "name": "Friendpins",
        "flag": "./deltarune-ship/zzzzz-1763928360friendpins.png"
    },
    {
        "id": 145,
        "name": "Meowdy",
        "flag": "./deltarune-ship/zzzzz-1763928360meowdy.png"
    },
    {
        "id": 146,
        "name": "Pluttat",
        "flag": "./deltarune-ship/zzzzz-1763928360pluttat.png"
    },
    {
        "id": 147,
        "name": "Ralsuselle",
        "flag": "./deltarune-ship/zzzzz-1763928360ralsuselle.png"
    },
    {
        "id": 149,
        "name": "Shippins",
        "flag": "./deltarune-ship/zzzzz-1763928360shippins.png"
    },
    {
        "id": 150,
        "name": "Zappins",
        "flag": "./deltarune-ship/zzzzz-1763928360zappins.png"
    },
    {
        "id": 152,
        "name": "Ramb x Swatch",
        "flag": "./deltarune-ship/zzzzz-1763929226ramb-x-swatch.png"
    },
    {
        "id": 154,
        "name": "Batgast",
        "flag": "./deltarune-ship/zzzzz-1763929361batgast.png"
    },
    {
        "id": 155,
        "name": "Mettaspam",
        "flag": "./deltarune-ship/zzzzz-1764297740mettaspam.png"
    },
    {
        "id": 157,
        "name": "Little Ball x Nubert",
        "flag": "./deltarune-ship/zzzzz-1765653783little-ball-x-nubert.png"
    },
    {
        "id": 160,
        "name": "Jongtenna",
        "flag": "./deltarune-ship/zzzzz-1769327787jongtenna.png"
    },
    {
        "id": 161,
        "name": "Kingtenna",
        "flag": "./deltarune-ship/zzzzz-1769327787kingtenna.png"
    },
    {
        "id": 162,
        "name": "Krissoul",
        "flag": "./deltarune-ship/zzzzz-1769327787krissoul.png"
    },
    {
        "id": 168,
        "name": "Soulttat",
        "flag": "./deltarune-ship/zzzzz-1769327787soulttat.png"
    },
    {
        "id": 171,
        "name": "Spamtat",
        "flag": "./deltarune-ship/zzzzz-1769327787spamtat.png"
    },
    {
        "id": 172,
        "name": "Zapper x Shadowguy",
        "flag": "./deltarune-ship/zzzzz-1769327787zapper-x-shadowguy.png"
    },
    {
        "id": 173,
        "name": "Azzyrus",
        "flag": "./deltarune-ship/zzzzz-1769327788azzyrus.png"
    },
    {
        "id": 176,
        "name": "Gaster x Forgotten Man",
        "flag": "./deltarune-ship/zzzzz-1769327788gaster-x-forgotten-man.png"
    },
    {
        "id": 178,
        "name": "Knight x Maddie",
        "flag": "./deltarune-ship/zzzzz-1769327788knight-x-maddie.png"
    },
    {
        "id": 179,
        "name": "Mettaswatch",
        "flag": "./deltarune-ship/zzzzz-1769327788mettaswatch.png"
    },
    {
        "id": 183,
        "name": "Plutenna",
        "flag": "./deltarune-ship/zzzzz-1769327788plutenna.png"
    },
    {
        "id": 184,
        "name": "Spamtennaton",
        "flag": "./deltarune-ship/zzzzz-1769327788spamtennaton.png"
    },
    {
        "id": 185,
        "name": "Charisk",
        "flag": "./deltarune-ship/1.png"
    },
    {
        "id": 186,
        "name": "Friskriel",
        "flag": "./deltarune-ship/2.png"
    },
    {
        "id": 187,
        "name": "Friskid",
        "flag": "./deltarune-ship/3.png"
    },
    {
        "id": 188,
        "name": "Undertale Asgoriel",
        "flag": "./deltarune-ship/4.png"
    },
    {
        "id": 189,
        "name": "KingDings",
        "flag": "./deltarune-ship/10.png"
    },
    {
        "id": 190,
        "name": "Undertale Soriel",
        "flag": "./deltarune-ship/19.png"
    },
    {
        "id": 191,
        "name": "Toaster",
        "flag": "./deltarune-ship/21.png"
    },
    {
        "id": 192,
        "name": "Goatbun",
        "flag": "./deltarune-ship/23.png"
    },
    {
        "id": 193,
        "name": "Sansby",
        "flag": "./deltarune-ship/28.png"
    },
    {
        "id": 194,
        "name": "Dunkin Donuts",
        "flag": "./deltarune-ship/29.png"
    },
    {
        "id": 195,
        "name": "Sciencepeoples",
        "flag": "./deltarune-ship/30.png"
    },
    {
        "id": 197,
        "name": "Sanschup",
        "flag": "./deltarune-ship/35.png"
    },
    {
        "id": 198,
        "name": "Papyruffet",
        "flag": "./deltarune-ship/38.png"
    },
    {
        "id": 199,
        "name": "Papby",
        "flag": "./deltarune-ship/39.png"
    },
    {
        "id": 200,
        "name": "Papyton",
        "flag": "./deltarune-ship/41.png"
    },
    {
        "id": 201,
        "name": "Undertale Alphyne",
        "flag": "./deltarune-ship/42.png"
    },
    {
        "id": 202,
        "name": "Mewdyne",
        "flag": "./deltarune-ship/45.png"
    },
    {
        "id": 203,
        "name": "MewAlphyne",
        "flag": "./deltarune-ship/46.png"
    },
    {
        "id": 204,
        "name": "Mewphys",
        "flag": "./deltarune-ship/48.png"
    },
    {
        "id": 205,
        "name": "Mettalphys",
        "flag": "./deltarune-ship/49.png"
    },
    {
        "id": 206,
        "name": "Alphster",
        "flag": "./deltarune-ship/50.png"
    },
    {
        "id": 207,
        "name": "Burgerton",
        "flag": "./deltarune-ship/51.png"
    },
    {
        "id": 208,
        "name": "MettaGrill",
        "flag": "./deltarune-ship/52.png"
    },
    {
        "id": 209,
        "name": "Mettaren",
        "flag": "./deltarune-ship/53.png"
    },
    {
        "id": 210,
        "name": "GhostlyWebs",
        "flag": "./deltarune-ship/54.png"
    },
    {
        "id": 211,
        "name": "Dogamyressa",
        "flag": "./deltarune-ship/59.png"
    },
    {
        "id": 212,
        "name": "Grillster",
        "flag": "./deltarune-ship/60.png"
    },
    {
        "id": 213,
        "name": "Royal Guards",
        "flag": "./deltarune-ship/64.png"
    },
    {
        "id": 214,
        "name": "Schoolgirls",
        "flag": "./deltarune-ship/112.png"
    }
];

class RankingGame {
    constructor() {
        this.items = [...DEFAULT_ITEMS];
        // Liste des ELO par id
        this.elo = {};
        // Nombre de comparaison par id
        this.comparisonCount = {};
        this.comparisons = [];
        // Ships big
        this.boostedItemIds = [5, 98, 147, 141, 117, 112, 104, 85, 65, 63, 61, 60, 57, 56, 50, 44, 38, 33, 185, 188, 190, 201, 207, 195];
        // Matchup récents
        this.recentMatches = [];
        this.preventDuplicates = true;
        this.INITIAL_ELO = 1500;
        this.bannedIds = [];
        this.initializeItems();
        this.loadFromStorage();
        this.setupEventListeners();
        this.nextMatchup();
        this.updateUI();
    }
    initializeItems() {
        this.items.forEach(item => {
            const id = item.id;
            if (!this.elo[id]) {
                this.elo[id] = this.INITIAL_ELO;
            }
            if (!this.comparisonCount[id]) {
                this.comparisonCount[id] = 0;
            }
        });
    }
            setupEventListeners() {
                document.getElementById('card1').addEventListener('click', () => this.selectWinner(1));
                document.getElementById('card2').addEventListener('click', () => this.selectWinner(2));
                document.getElementById('exportBtn').addEventListener('click', () => this.exportRanking());
                document.getElementById('importBtn').addEventListener('click', () => this.openImportModal());
                document.getElementById('resetBtn').addEventListener('click', () => this.resetRanking());
                document.getElementById('fileInput').addEventListener('change', (e) => this.handleFileImport(e));
            }

    // Algorithme de calcul de l'ELO
    updateElo(winnerRating, loserRating, winnerComparisons, loserComparisons) {
        const getK = (comparisons) => (comparisons < 10) ? 100 : 32;
        const kWinner = getK(winnerComparisons);
        const kLoser = getK(loserComparisons);
        const expectedWin = 1 / (1 + Math.pow(10, (loserRating - winnerRating) / 400));
        const winnerChange = kWinner * (1 - expectedWin);
        const loserChange = kLoser * (expectedWin - 1);
        return {
            newWinnerRating: winnerRating + winnerChange,
            newLoserRating: loserRating + loserChange,
        };
    }
            nextMatchup() {
                const items = this.items.filter(item => !this.bannedIds.includes(item.id));
                let item1, item2;
                let attempts = 0;
                const maxAttempts = 15;
                do {
                    const roll = Math.random();
                    let boostedItem = null;

                    // 25% un ship big
                    if (this.boostedItemIds.length > 0 && Math.random() < 0.25) {
                        const idx = Math.floor(Math.random() * this.boostedItemIds.length);
                        const boostedId = this.boostedItemIds.splice(idx, 1)[0];
                        boostedItem = items.find(i => i.id === boostedId);
                    }
                    if (boostedItem) {
                        item1 = boostedItem;
                    }
                    // Sinon 60% pour les ships sous coté avec pas assez de match
                    else if (roll < 0.6){
                        const sortedByComparisons = [...items].sort((a, b) => this.comparisonCount[a.id] - this.comparisonCount[b.id]);
                        const uncertaintyPoolSize = Math.max(5, Math.floor(items.length * 0.25));
                        const uncertaintyPool = sortedByComparisons.slice(0, uncertaintyPoolSize);
                        item1 = uncertaintyPool[Math.floor(Math.random() * uncertaintyPool.length)];
                    }
                    // 30% pour ceux avec le plus d'ELO
                    else if (roll < 0.9) {
                        const sortedByElo = [...items].sort((a, b) => this.elo[b.id] - this.elo[a.id]);
                        const topPoolSize = Math.min(20, items.length);
                        const topPool = sortedByElo.slice(0, topPoolSize);
                        item1 = topPool[Math.floor(Math.random() * topPool.length)];
                    }
                    // 10% de pif
                    else {
                        item1 = items[Math.floor(Math.random() * items.length)];
                    }
                    // Prendre un opposant similaire
                    const sortedOpponents = [...items]
                        .filter(i => i.id !== item1.id)
                        .sort((a, b) => Math.abs(this.elo[a.id] - this.elo[item1.id]) - Math.abs(this.elo[b.id] - this.elo[item1.id]));
                    const neighborPoolSize = 10;
                    const neighborPool = sortedOpponents.slice(0, neighborPoolSize);
                    item2 = neighborPool[Math.floor(Math.random() * neighborPool.length)];
                    if (!this.preventDuplicates || items.length < 5) break;
                    const pairKey = [item1.id, item2.id].sort((a, b) => a - b).join('-');
                    if (!this.recentMatches.includes(pairKey)) break;
                    attempts++;
                } while (attempts < maxAttempts);
                // Empêcher les doubles
                if (this.preventDuplicates && item1 && item2) {
                    const pairKey = [item1.id, item2.id].sort((a, b) => a - b).join('-');
                    this.recentMatches.push(pairKey);
                    if (this.recentMatches.length > 20) this.recentMatches.shift();
                }
                this.currentItem1 = item1;
                this.currentItem2 = item2;
                this.displayMatchup();
            }

    toggleBan(id) {
        console.log(id);
        const index = this.bannedIds.indexOf(id);
        if (index === -1) {
            this.bannedIds.push(id);
        } else {
            this.bannedIds.splice(index, 1);
        }
        this.saveToStorage();
        this.updateUI();
        
        console.log(this.bannedIds);

        if (this.currentItem1?.id === id || this.currentItem2?.id === id) {
            this.nextMatchup();
        }
    }
    displayMatchup() {
        document.getElementById('flag1').innerHTML = `<img src="${this.currentItem1.flag}" alt="${this.currentItem1.name}">`;
        document.getElementById('name1').textContent = this.currentItem1.name;
        document.getElementById('flag2').innerHTML = `<img src="${this.currentItem2.flag}" alt="${this.currentItem2.name}">`;
        document.getElementById('name2').textContent = this.currentItem2.name;
        document.getElementById('card1').classList.remove('winner');
        document.getElementById('card2').classList.remove('winner');
    }
    selectWinner(cardNumber) {
        const winner = cardNumber === 1 ? this.currentItem1 : this.currentItem2;
        const loser = cardNumber === 1 ? this.currentItem2 : this.currentItem1;
        const winnerId = winner.id;
        const loserId = loser.id;
        // Valeurs actuels
        const winnerRating = this.elo[winnerId];
        const loserRating = this.elo[loserId];
        const winnerComparisons = this.comparisonCount[winnerId] || 0;
        const loserComparisons = this.comparisonCount[loserId] || 0;
        // Nouvelles valeurs avec l'ELO
        const result = this.updateElo(
            winnerRating,
            loserRating,
            winnerComparisons,
            loserComparisons
        );
        this.elo[winnerId] = result.newWinnerRating;
        this.elo[loserId] = result.newLoserRating;

        this.comparisonCount[winnerId] = (this.comparisonCount[winnerId] || 0) + 1;
        this.comparisonCount[loserId] = (this.comparisonCount[loserId] || 0) + 1;

        this.comparisons.push({
            winner: winnerId,
            loser: loserId,
            winnerOld: Math.round(winnerRating * 10) / 10,
            loserOld: Math.round(loserRating * 10) / 10,
            winnerNew: Math.round(result.newWinnerRating * 10) / 10,
            loserNew: Math.round(result.newLoserRating * 10) / 10,
            timestamp: Date.now()
        });

        const winnerCard = document.getElementById(`card${cardNumber}`);
        winnerCard.classList.add('winner');
        
        this.saveToStorage();
        this.updateUI();
        setTimeout(() => {
            this.nextMatchup();
        }, 50);
    }
    
    getRanking() {
        return this.items
            .map(item => ({
                ...item,
                elo: Math.round(this.elo[item.id] * 10) / 10,
                games: this.comparisonCount[item.id] || 0
            }))
            .sort((a, b) => b.elo - a.elo);
    }
            updateUI() {
                const ranking = this.getRanking();
                // Update stats
                //document.getElementById('totalComparisons').textContent = this.comparisons.length;
                //document.getElementById('totalItems').textContent = this.items.length;

                // MAJ du progrès
                const possibleComparisons = (this.items.length * (this.items.length - 1)) / 2;
                const progress = 100 * (1 - Math.exp(-this.comparisons.length / 100));
                document.getElementById('progressFill').style.width = (progress) + '%';
                document.getElementById('progressText').textContent = `Ranking Accuracy: ${progress.toFixed(1)}% | ${this.comparisons.length} / ${Math.ceil(possibleComparisons)}`;
                
                // Mettre a jour le ranking
                const rankingList = document.getElementById('rankingList');
                if (ranking.length > 0) {
                    rankingList.innerHTML = ranking
                        .map((item, index) => {
                            const isBanned = this.bannedIds.includes(item.id);
                            console.log(this.bannedIds);
                            console.log(item.id);
                            console.log(isBanned);
                            return `
                                <div class="ranking-item" style="--animation-delay: ${index * 0.05}s">
                                    <div class="ranking-index">${index + 1}</div>
                                    <div class="ranking-flag">
                                        <img src="${item.flag}" alt="${item.name}" class="${isBanned ? 'ranking-img-swoon' : 'ranking-img'}">
                                    </div>
                                    <div class="ranking-name">${item.name}</div>
                                    <div style="font-size: 0.75rem; color: var(--text-muted); margin-left: auto;">${Math.round(item.elo)}</div>
                                    <button class="ban-btn" onclick="game.toggleBan(${item.id})">
                                        ${isBanned ? 'Revive' : 'Swoon'}
                                    </button>
                                </div>
                            `;
                        })
                        .join('');

                } else {
                    rankingList.innerHTML = '<div class="empty-state"><div class="empty-state-text">Start comparing!</div></div>';
                }
            }

    saveToStorage() {
        const data = {
            items: this.items,
            elo: this.elo,
            comparisonCount: this.comparisonCount,
            comparisons: this.comparisons,
            boostedItemIds: this.boostedItemIds,
            recentMatches: this.recentMatches,
            preventDuplicates: this.preventDuplicates,
            bannedIds: this.bannedIds
        };
        localStorage.setItem('rankingGameData', JSON.stringify(data));
    }
    loadFromStorage() {
        const stored = localStorage.getItem('rankingGameData');
        if (stored) {
            try {
                const data = JSON.parse(stored);
                //this.items = data.items || this.items;
                this.elo = data.elo || this.elo;
                this.comparisonCount = data.comparisonCount || {};
                this.comparisons = data.comparisons || [];
                this.boostedItemIds = data.boostedItemIds || [];
                this.recentMatches = data.recentMatches || [];
                this.preventDuplicates = data.preventDuplicates !== undefined ? data.preventDuplicates : true;
                this.bannedIds = data.bannedIds || [];
                this.initializeItems();
            } catch (e) {
                console.error('Echec du stockage', e);
            }
        }
    }
            exportRanking() {
                const data = {
                    items: this.items,
                    elo: this.elo,
                    comparisons: this.comparisons,
                    exportDate: new Date().toISOString(),
                    bannedIds: this.bannedIds
                };
                const dataStr = JSON.stringify(data, null, 2);
                const blob = new Blob([dataStr], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `historique-${Date.now()}.json`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }
            openImportModal() {
                document.getElementById('importModal').classList.add('active');
                document.getElementById('importData').value = '';
            }
    resetRanking() {
        if (confirm("The idea of resetting everything... I... Are you sure ?")) {
            this.elo = {};
            this.comparisonCount = {};
            this.comparisons = [];
            this.boostedItemIds = [];
            this.recentMatches = [];
            this.preventDuplicates = true;
            this.initializeItems();
            this.saveToStorage();
            this.updateUI();
            this.nextMatchup();
            localStorage.removeItem('rankingGameData');
            window.location.reload();
        }
    }
            handleFileImport(e) {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (event) => {
                    try {
                        const data = JSON.parse(event.target.result);
                        document.getElementById('importData').value = JSON.stringify(data, null, 2);
                        document.getElementById('importModal').classList.add('active');
                    } catch (err) {
                        alert('Invalid JSON file');
                    }
                };
                reader.readAsText(file);
            }
        }

        function openImportModal() {
            document.getElementById('importModal').classList.add('active');
            document.getElementById('importData').value = '';
        }
        function closeImportModal() {
            document.getElementById('importModal').classList.remove('active');
        }
        function confirmImport() {
            const dataStr = document.getElementById('importData').value.trim();
            if (!dataStr) {
                alert('Please paste ranking data');
                return;
            }
            try {
                const data = JSON.parse(dataStr);
                if (!data.items || !data.elo || !data.comparisons) {
                    alert('Invalid ranking data format');
                    return;
                }
                //game.items = data.items;
                
                const newEloMap = {};
                game.items.forEach(item => {
                    newEloMap[item.id] = data.elo[item.id] !== undefined ? data.elo[item.id] : game.INITIAL_ELO;
                });
                game.elo = newEloMap;

                const newCountMap = {};
                game.items.forEach(item => {
                    newCountMap[item.id] = (data.comparisonCount && data.comparisonCount[item.id]) ? data.comparisonCount[item.id] : 0;
                });

                game.comparisonCount = newCountMap;
                game.bannedIds = data.bannedIds || [];
                game.saveToStorage();
                game.updateUI();
                game.nextMatchup();
                closeImportModal();
                alert('Importation réussie!');
            } catch (e) {
                alert('Fichier invalide: ' + e.message);
            }
        }

let game;
document.addEventListener('DOMContentLoaded', () => {
    game = new RankingGame();
});