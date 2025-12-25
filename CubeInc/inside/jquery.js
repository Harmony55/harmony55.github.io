        const chatContainer = document.getElementById('chatContainer');
        const messageInput = document.getElementById('messageInput');
        
        let currentDir = '/home/guest';
        let gameActive = false;
        let playerPos = { x: 1, y: 1 };
        let exitPos = { x: 19, y: 19 };
        let gameContainer = null;
        
        const fileSystem = {
            '/home/guest': {
                type: 'dir',
                contents: ['dossier_nigoland', 'notes.txt', 'experiments','simulated']
            },
            '/home/guest/simulated': {
                type: 'dir',
                contents: ['test.exe', 'traces.csv','photo.jpg']
            },

            '/home/guest/experiments': {
                type: 'dir',
                contents: ['results.csv', 'trace9_TOBEDELETED.csv', 'render.jpg']
            },
            '/home/guest/experiments/render.jpg': {
                type: 'image',
                path: 'render.jpg'
            },
            '/home/guest/experiments/trace9_TOBEDELETED.csv': {
                type: 'file',
                content: `
time_ms,w_position,memory_retention,structural_integrity
0,0.50,100.00,1.000
1000,1.20,99.95,0.998
2000,2.50,99.82,0.995
3000,4.00,99.50,0.980
3500,6.20,98.10,0.950
4000,12.40,92.00,0.880
4200,25.80,75.40,0.710
4400,55.00,42.15,0.450
4600,120.00,12.05,0.120
4800,450.00,0.02,0.005
5000,NaN,0.00,0.000`
            },
            '/home/guest/experiments/results.csv': {
                type: 'file',
                content: `
id,w_moved,time_completion_ms,structural_integrity,memory_retention
001,0.05,120,0.999,99.98
002,0.15,250,0.998,99.92
003,0.50,580,0.995,98.45
004,1.20,1100,0.992,97.10
005,2.00,2400,0.988,96.55
006,5.00,5000,0.975,95.12
007,0.01,50,1.000,100.00
008,10.00,12000,0.940,94.05`
            },

            '/home/guest/simulated/test.exe': {
                type: 'exe',
                content: 'labyrinth_game'
            },
            '/home/guest/simulated/photo.jpg': {
                type: 'image',
                path: 'photo.jpg'
            },
            // Related images
            '/home/guest/dossier_nigoland/related_images1.png': {
                type: 'image',
                path: 'related_images1.png'
            },
            '/home/guest/dossier_nigoland/related_images2.png': {
                type: 'image',
                path: 'related_images2.png'
            },
            '/home/guest/dossier_nigoland/related_images3.png': {
                type: 'image',
                path: 'related_images3.png'
            },
            '/home/guest/dossier_nigoland/related_images4.png': {
                type: 'image',
                path: 'related_images4.png'
            },
            '/home/guest/dossier_nigoland': {
                type: 'dir',
                contents: ['archive_nigoland.txt', 'cube_correspondant.txt', 'related_images1.png', 'related_images2.png', 'related_images3.png', 'related_images4.png']
            },
            '/home/guest/dossier_nigoland/archive_nigoland.txt': {
                type: 'file',
                content: `
[1] : Vous pensez c'est quoi cette "marchandise" dans le Nigola ? Je pense ça peut faire partie du mystère aussi.\n
[2] : Quand j'étais allé à l'espèce de fête foraine, on m'avait dit que c'était du "caca-o", mais ça me semble étrange, car le Nigola n'a pas du tout un goût chocolaté, et je ne comprends pas non plus pourquoi il serait bleu, alors que le verre des bouteilles et l'emballage sont marron/rouge. Je sais qu'il y a la bouteille spéciale au goût bleu, qui est transparente, mais en réalité, c'est exactement le même Nigola.\n
[3] : Je comprends vraiment pas cette direction, normalement le client a toujours raison, c'est eux qui devraient toujours être à notre humble service. Ils pensent qu'ils sont le S alors que tout ce qu'on a c'est une décharge. Tu vas n'importe où on te dit que le chemin est interdit car ils ont commencé à construire une patinoire ou je ne sais quoi à la place d'utiliser correctement l'espace du parc. Alors oui on avait la boutique de Nigola de Coaster, mais maintenant qu'elle a été utilisée il y a aucune de ses attractions qui méritent d'aller au parc aux aurores comme on faisait avant. On dirait qu'ils comprennent pas que sans jeu le parc devient ennuyeux.\n
[1] : C'est vrais que j'aurais pas fait ça si je voulais vraiment faire un tel cola, il y a personne qui saurais c'est quoi cette couleur bleue même ?\n
[4] : Je crois que c'est peut être par ce que bleue c'est la couleur de l'eau donc c'est plus naturel ?\n
[1] : Non, pas du tout, la c'est bleue en mode radioactif option brulage de la peau\n
[4] : Oui c'est vrais, je sais pas, c'est peut être pour faire un peu comme le Luap ?\n
[1] : Sauf que le Luap existait pas encore quand le Nigola a eu sa couleur\n
[4] : Ah oui, c'est peut être le Luap qui a copier du coup, mais c'est quoi qu'on avais avant de l'uranium ? Un phosphore ?\n
[5] : On dirais la fois ou ils avais remplacer le sel de table par du sulfure de calcium pour l'esthétique, a cause des dégats a mes nerfs périphériques j'avais perdu ma motricité pendant quelques semaines. \n
[2] : Je crois que dans tous les Nigolas que j'ai bus, c'était surtout très sucré, et pourtant j'ai bu beaucoup de variantes différentes.\n
[6] : Pourquoi pas dire que la marchandise c'est du sérum a la place ? Je pense que ça suffirais on peut terminer la discussion maintenant.\n
[7] : \n
`
            },
            '/home/guest/dossier_nigoland/cube_correspondant.txt': {
                type: 'file',
                content: `
                          20129  
                          15738
                          15100  
                          11225
                          8321
                          1225
                          102
                          `
            },
            '/home/guest/notes.txt': {
                type: 'file',
                content: `Notes persos
==============
- Finir la simulation des layouts
- Demander l'accréditation du Cube
- Revoir les protocoles de chiffrement
- Simulation de commande sujet 28372`
            },
            '/var': {
                type: 'dir',
                contents: ['secure']
            },
            '/var/secure': {
                type: 'dir',
                contents: ['chat_logs']
            },
            '/var/secure/chat_logs': {
                type: 'dir',
                contents: ['session_2024_01_10.log']
            },
            '/var/secure/chat_logs/session_2024_01_10.log': {
                type: 'file',
                content: `
Participants: Z3JlZw, bWlrZQ
Conversation`
            }
        };
        
        function addOutput(content, className = 'command-output') {
            const outputDiv = document.createElement('div');
            outputDiv.className = className;
            outputDiv.textContent = content;
            chatContainer.appendChild(outputDiv);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
        
        function handleLs() {
            const dir = fileSystem[currentDir];
            if (dir && dir.type === 'dir') {
                addOutput(dir.contents.join('  '));
            } else {
                addOutput('Erreur: Dossier invalide', 'error-message');
            }
        }
        
        function handleCd(path) {
            if (!path || path === '~') {
                currentDir = '/home/guest';
                addOutput('');
                return;
            }
            
            let newPath;
            if (path.startsWith('/')) {
                newPath = path;
            } else if (path === '..') {
                const parts = currentDir.split('/').filter(p => p);
                parts.pop();
                newPath = '/' + parts.join('/');
                if (newPath === '/') newPath = '/home/guest';
            } else {
                newPath = currentDir === '/' ? '/' + path : currentDir + '/' + path;
            }
            
            if (fileSystem[newPath] && fileSystem[newPath].type === 'dir') {
                currentDir = newPath;
                addOutput('');
            } else {
                addOutput(`cd: ${path}: Dossier inexistant`, 'error-message');
            }
        }
        
        function handleCat(filename) {
            if (!filename) {
                addOutput('cat: aucun fichier', 'error-message');
                return;
            }
            
            const filepath = currentDir === '/' ? '/' + filename : currentDir + '/' + filename;
            const file = fileSystem[filepath];
            
            if (file && file.type === 'file') {
                const contentDiv = document.createElement('div');
                contentDiv.className = 'file-content';
                contentDiv.textContent = file.content;
                //chatContainer.appendChild(contentDiv);
                addOutput(file.content);
                chatContainer.scrollTop = chatContainer.scrollHeight;
            } else {
                addOutput(`cat: ${filename}: Fichier inexistant`, 'error-message');
            }
        }
        
        function handleHelp() {
            const helpText = `Commandes:
  ls              Lister les fichiers du dossier
  cd [dir]        Changer de dossier (.. pour le dossier précédent)
  cat [file]      Affiche le contenu d'un fichier
  open [image]    Ouvre une image
  run [exe]       Exécute un programme
  help            Montre cette page
  
Dossier actuel: ${currentDir}`;
            addOutput(helpText);
        }
        
        function handleOpen(filename) {
            if (!filename) {
                addOutput('open: image manquante', 'error-message');
                return;
            }
            
            const filepath = currentDir === '/' ? '/' + filename : currentDir + '/' + filename;
            const file = fileSystem[filepath];
            
            if (file && file.type === 'image') {
                const imgDiv = document.createElement('div');
                imgDiv.className = 'image-container';
                imgDiv.innerHTML = `<img src="${file.path}" alt="${filename}" onerror="this.parentElement.innerHTML='<span style=color:#ff5555>Erreur: Image non trouvé</span>'">`;
                chatContainer.appendChild(imgDiv);
                chatContainer.scrollTop = chatContainer.scrollHeight;
            } else {
                addOutput(`open: ${filename}: Pas une image`, 'error-message');
            }
        }
        
        function createLabyrinthMap() {
        const map = [
            ['█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█'],
            ['█', ' ', ' ', ' ', ' ', '█', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '█', ' ', ' ', ' ', ' ', '█'],
            ['█', '█', '█', '█', ' ', '█', ' ', '█', '█', '█', '█', '█', '█', '█', ' ', '█', ' ', '█', '█', ' ', '█'],
            ['█', ' ', ' ', ' ', ' ', '█', ' ', ' ', ' ', '█', ' ', ' ', ' ', '█', ' ', '█', ' ', ' ', '█', ' ', '█'],
            ['█', ' ', '█', '█', '█', '█', '█', '█', ' ', '█', ' ', '█', ' ', '█', ' ', '█', '█', ' ', '█', ' ', '█'],
            ['█', ' ', ' ', ' ', ' ', ' ', ' ', '█', ' ', ' ', ' ', '█', ' ', ' ', ' ', ' ', ' ', ' ', '█', ' ', '█'],
            ['█', '█', '█', '█', '█', '█', ' ', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', ' ', '█'],
            ['█', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '█'],
            ['█', ' ', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█'],
            ['█', ' ', ' ', ' ', '█', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '█'],
            ['█', '█', '█', ' ', '█', ' ', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', ' ', '█'],
            ['█', ' ', ' ', ' ', '█', ' ', ' ', ' ', ' ', '█', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '█', ' ', '█'],
            ['█', ' ', '█', '█', '█', '█', '█', '█', ' ', '█', ' ', '█', '█', '█', '█', '█', '█', ' ', '█', ' ', '█'],
            ['█', ' ', ' ', ' ', ' ', ' ', ' ', '█', ' ', '█', ' ', '█', ' ', ' ', ' ', ' ', '█', ' ', ' ', ' ', '█'],
            ['█', '█', '█', '█', '█', '█', ' ', '█', ' ', '█', ' ', '█', ' ', '█', '█', ' ', '█', '█', '█', '█', '█'],
            ['█', ' ', ' ', ' ', ' ', '█', ' ', '█', ' ', ' ', ' ', '█', ' ', '█', ' ', ' ', ' ', ' ', ' ', ' ', '█'],
            ['█', ' ', '█', '█', ' ', '█', ' ', '█', '█', '█', '█', '█', ' ', '█', ' ', '█', '█', '█', '█', ' ', '█'],
            ['█', ' ', '█', ' ', ' ', '█', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '█', ' ', ' ', ' ', ' ', '█', ' ', '█'],
            ['█', ' ', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', ' ', '█', ' ', '█'],
            ['█', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '█', '⬡', '█'],
            ['█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█']
        ];
            
            map[playerPos.y][playerPos.x] = '♥';
            return map.map(row => row.join(' ')).join('\n');
        }
        
        function startLabyrinth() {
            gameActive = true;
            playerPos = { x: 1, y: 1 };
            
            gameContainer = document.createElement('div');
            gameContainer.className = 'game-container';
            gameContainer.innerHTML = `
                <div style="color:#ffff00;margin-bottom:10px;">=== PROTOTYPE CUBE 15100 ===</div>
                <div>ZQSD pour bouger. Atteindre la sortie '⬡'</div>
                <pre class="game-map">${createLabyrinthMap()}</pre>
                <div class="game-info">ESC pour quitter</div>
            `;
            chatContainer.appendChild(gameContainer);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
        
        function updateLabyrinth() {
            if (gameContainer) {
                gameContainer.querySelector('.game-map').textContent = createLabyrinthMap();
            }
        }
        
        function movePlayer(dx, dy) {
            const newX = playerPos.x + dx;
            const newY = playerPos.y + dy;
            
            const map = [
                ['█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█'],
                ['█', ' ', ' ', ' ', ' ', '█', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '█', ' ', ' ', ' ', ' ', '█'],
                ['█', '█', '█', '█', ' ', '█', ' ', '█', '█', '█', '█', '█', '█', '█', ' ', '█', ' ', '█', '█', ' ', '█'],
                ['█', ' ', ' ', ' ', ' ', '█', ' ', ' ', ' ', '█', ' ', ' ', ' ', '█', ' ', '█', ' ', ' ', '█', ' ', '█'],
                ['█', ' ', '█', '█', '█', '█', '█', '█', ' ', '█', ' ', '█', ' ', '█', ' ', '█', '█', ' ', '█', ' ', '█'],
                ['█', ' ', ' ', ' ', ' ', ' ', ' ', '█', ' ', ' ', ' ', '█', ' ', ' ', ' ', ' ', ' ', ' ', '█', ' ', '█'],
                ['█', '█', '█', '█', '█', '█', ' ', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', ' ', '█'],
                ['█', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '█'],
                ['█', ' ', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█'],
                ['█', ' ', ' ', ' ', '█', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '█'],
                ['█', '█', '█', ' ', '█', ' ', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', ' ', '█'],
                ['█', ' ', ' ', ' ', '█', ' ', ' ', ' ', ' ', '█', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '█', ' ', '█'],
                ['█', ' ', '█', '█', '█', '█', '█', '█', ' ', '█', ' ', '█', '█', '█', '█', '█', '█', ' ', '█', ' ', '█'],
                ['█', ' ', ' ', ' ', ' ', ' ', ' ', '█', ' ', '█', ' ', '█', ' ', ' ', ' ', ' ', '█', ' ', ' ', ' ', '█'],
                ['█', '█', '█', '█', '█', '█', ' ', '█', ' ', '█', ' ', '█', ' ', '█', '█', ' ', '█', '█', '█', '█', '█'],
                ['█', ' ', ' ', ' ', ' ', '█', ' ', '█', ' ', ' ', ' ', '█', ' ', '█', ' ', ' ', ' ', ' ', ' ', ' ', '█'],
                ['█', ' ', '█', '█', ' ', '█', ' ', '█', '█', '█', '█', '█', ' ', '█', ' ', '█', '█', '█', '█', ' ', '█'],
                ['█', ' ', '█', ' ', ' ', '█', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '█', ' ', ' ', ' ', ' ', '█', ' ', '█'],
                ['█', ' ', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', ' ', '█', ' ', '█'],
                ['█', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '█', 'E', '█'],
                ['█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█']
            ];
            
            if (map[newY][newX] !== '█') {
                playerPos.x = newX;
                playerPos.y = newY;
                updateLabyrinth();
                
                if (newX === exitPos.x && newY === exitPos.y) {
                    gameActive = false;
                    downloadZip('./nigoland.deleted.file.tmp.7z', 'nigoland.deleted.file.tmp.7z');
                    addOutput('\nCompilation des données de test.\n', 'command-output');
                    gameContainer = null;
                }
            }
        }

        function downloadZip(fileUrl, fileName) {
          const link = document.createElement('a');
          link.href = fileUrl;
          link.download = fileName || 'download.zip';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
        
        function handleRun(filename) {
            if (!filename) {
                addOutput('run: fichier manquant', 'error-message');
                return;
            }
            
            const filepath = currentDir === '/' ? '/' + filename : currentDir + '/' + filename;
            const file = fileSystem[filepath];
            
            if (file && file.type === 'exe') {
                if (file.content === 'labyrinth_game') {
                    addOutput('Initialisation du Cube...\n');
                    setTimeout(() => startLabyrinth(), 100);
                }
            } else {
                addOutput(`run: ${filename}: N'est pas un exécutable`, 'error-message');
            }
        }
        
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && messageInput.value.trim()) {
                const input = messageInput.value.trim();
                const commandDiv = document.createElement('div');
                commandDiv.className = 'command-output';
                commandDiv.innerHTML = `<span class="prompt">$</span> ${input}`;
                chatContainer.appendChild(commandDiv);
                
                const parts = input.split(' ');
                const command = parts[0].toLowerCase();
                const args = parts.slice(1).join(' ');
                
                switch(command) {
                    case 'ls':
                        handleLs();
                        break;
                    case 'cd':
                        handleCd(args);
                        break;
                    case 'cat':
                        handleCat(args);
                        break;
                    case 'open':
                        handleOpen(args);
                        break;
                    case 'run':
                        handleRun(args);
                        break;
                    case 'help':
                        handleHelp();
                        break;
                    default:
                        addOutput(`Commande invalide: ${command}. 'help' pour obtenir les commandes existantes.`, 'error-message');
                }
                
                messageInput.value = '';
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (gameActive) {
                e.preventDefault();
                
                if (e.key === 'Escape') {
                    gameActive = false;
                    addOutput('\nPrendre congé.\n');
                    gameContainer = null;
                    return;
                }
                
                switch(e.key.toLowerCase()) {
                    case 'z':
                        movePlayer(0, -1);
                        break;
                    case 'q':
                        movePlayer(-1, 0);
                        break;
                    case 's':
                        movePlayer(0, 1);
                        break;
                    case 'd':
                        movePlayer(1, 0);
                        break;
                }
            }
        });