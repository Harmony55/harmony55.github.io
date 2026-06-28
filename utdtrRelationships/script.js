const CHARACTERS = [
  { id: "kris",    label: "Kris",      desc: "The first hero. The cage, with human soul and parts!" },
  { id: "susie",   label: "Susie",     desc: "The second hero. The girl, with hope crossed on her heart" },
  { id: "ralsei",  label: "Ralsei",    desc: "The third hero. The prince, alone in deepest dark" },
  { id: "noelle",  label: "Noelle",    desc: "And last was the girl. At last, was the girl." },
  { id: "berdly",  label: "Berdly",    desc: "Burghley" },
  { id: "lancer",  label: "Lancer",    desc: "The pointy-headed." },
  { id: "spamton", label: "Spamton",   desc: "Have you heard of hyperlink  blocked ?" },
  { id: "tenna",   label: "Tenna",     desc: "The lord of screens cleaved red by blade." },
  { id: "dess",    label: "December",  desc: "A lost and lost and lost girl." },
  { id: "asriel",  label: "Asriel",    desc: "A crying and crying and crying boy." },
  { id: "gaster",  label: "Gaster",    desc: "GALLERY" },
  { id: "friend",  label: "FRIEND",    desc: "They'll see the tail of hell take crawl." },
  { id: "eram",    label: "ERAM",      desc: "Without play, the knife grows dull." },
  { id: "knight",  label: "Roaring Knight",  desc: "The knight which makes with blackened knife." },
  { id: "gerson",  label: "Gerson",  desc: "Axe carved by the tortoise's grand hammer." },
  { id: "jevil",   label: "Jevil",  desc: "WON'T YOU LET YOURSELF OUTSIDE?" },
  { id: "soul",    label: "SOUL",  desc: "The angel, banished, will finally meet with its desire." },
  { id: "seam",    label: "Seam",  desc: "The name's Seam. Pronounced 'Shawm.'" },
  { id: "ramb",    label: "Ramb",  desc: "Freedom. That's what YOU want, chum, freedom!" },
  { id: "papyrus",    label: "Papyrus",  desc: "I, THE GREAT PAPYRUS" },
  { id: "sans",       label: "Sans",  desc: "Don't forget." },
  { id: "toriel",       label: "Toriel",  desc: "Caretaker of the ruins." },
  { id: "asgore",       label: "Asgore",  desc: "Bergentrückung" },
  { id: "alphys",       label: "Alphys",  desc: "I will create the power to free us all." },
  { id: "undyne",       label: "Undyne",  desc: "I, UNDYNE, will strike you down!" },
  { id: "mettaton",       label: "Mettaton",  desc: "That robot was the embodiment of a Lightner's dream." },
  { id: "chara",       label: "Chara",  desc: "The true name." },
  { id: "frisk",       label: "Frisk",  desc: "Still just you, Frisk." },

  { id: "flowery",       label: "Flowery",  desc: "The flower man, trapped in asylum." },
  { id: "rudy",       label: "Rudy",  desc: "Just kidding!! Well, kinda kidding." },
  { id: "mewmew",       label: "Mew Mew",  desc: "In harmony, forever." },
];


const REL_TYPES = [
  { id: "friend", label: "Amis",  color: "#2980b9", dash: false },
  { id: "love",       label: "Romance",    color: "#ff00f7", dash: false },
  { id: "enemy",      label: "Ennemis",     color: "#c0392b", dash: false  },
  { id: "family",     label: "Famille",      color: "#27ae60", dash: false },
  { id: "partners",     label: "Associés",      color: "#e0ed21", dash: false },
  { id: "divorce",     label: "Divorce",      color: "#9e14f5", dash: false },
  { id: "unkown",     label: "Inconnu",      color: "#6e6e6e", dash: true },
];

const PAR_TYPES = [
  { id: "mirror",     label: "Miroir",      color: "#2980b9", dash: true  },
  { id: "like",       label: "Similarités",        color: "#c0392b", dash: true  },
];

const RELATIONSHIPS = [
  // Relations
  { a: "kris",   b: "susie",     type: "friend",       dir: "both", mode: "relationships", canon: true,  chapters: [{ edition:"Deltarune"}],
    title: "L'amitié entre Kris et Susie",
    desc: "Amis depuis la fin du Chapitre 1." },
  { a: "kris",   b: "noelle",     type: "friend",       dir: "both", mode: "relationships", canon: true,  chapters: [{ edition:"Deltarune"}],
    title: "L'amitié entre Kris et Noelle",
    desc: "Amis d'enfance." },
  { a: "noelle",   b: "susie",     type: "friend",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "L'amitié entre Susie et Noelle",
    desc: "Amis depuis le Chapitre 2." },
  { a: "susie",   b: "ralsei",     type: "friend",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "L'amitié entre Susie et Ralsei",
    desc: "Amis depuis le Chapitre 1." },
  { a: "ralsei",   b: "kris",     type: "friend",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "L'amitié entre Kris et Ralsei",
    desc: "Amis depuis le Chapitre 1." },
  { a: "berdly",   b: "kris",     type: "friend",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "L'amitié entre Kris et Berdly",
    desc: "Amis d'enfance." },
  { a: "noelle",   b: "berdly",     type: "friend",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "L'amitié entre Noelle et Berdly",
    desc: "Amis d'enfance et camarades de classe." },
  { a: "lancer",   b: "susie",     type: "friend",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "L'amitié entre Lancer et Susie",
    desc: "Amis depuis le milieu du Chapitre 1." },
  { a: "tenna",   b: "kris",     type: "family",       dir: "a->b", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "TV Time",
    desc: "Tenna est la télévision familiale des Dreemurr, et veut divertir Kris comme au bon vieux temps." },
  { a: "spamton",   b: "noelle",     type: "friend",       dir: "a->b", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Pipis",
    desc: "Comme Noelle était la seule personne lisant ses spams, Spamton est devenu ami avec Noelle et lui a offert un pipis." },
  { a: "tenna",   b: "kris",     type: "partners",       dir: "none", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Notre deal",
    desc: "Kris a conclu un deal avec Tenna pour aider le Roaring Knight." },
  { a: "spamton",   b: "tenna",     type: "enemy",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Rupture du contract",
    desc: "Un événement tragique s'est produit après la signature du contrat de Tenna par Spamton, le contraignant à fuir TV World. Chacun était convaincu d'avoir été escroqué par l'autre." },
  { a: "spamton",   b: "tenna",     type: "love",       dir: "both", mode: "relationships", canon: false, chapters: [{ edition:"Deltarune"}],
    title: "Spamtenna",
    desc: "Le ship entre Spamton et Tenna est le ship le plus populaire de Deltarune. Leur obsession l'un pour l'autre, le fait que leur séparation soit un quiproquo, et de nombreux autres indices dans le jeu et ses fichiers laissent penser que Spamton et Tenna sont encore amoureux, rendant ce ship très populaire." },
  { a: "berdly",   b: "susie",     type: "love",       dir: "a->b", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Berdsie",
    desc: "Berdly veut rizz Susie dans le Chapitre 2." },
  { a: "kris",   b: "susie",     type: "love",       dir: "a->b", mode: "relationships", canon: false, chapters: [{ edition:"Deltarune"}],
    title: "Krusie",
    desc: "Le comportement de Kris avec Susie dans certaines scènes peut laisser penser que Kris a un crush sur Susie." },
  { a: "ralsei",   b: "kris",     type: "love",       dir: "a->b", mode: "relationships", canon: false, chapters: [{ edition:"Deltarune"}],
    title: "Kralsei",
    desc: "Le comportement de Ralsei avec Kris dans certaines scènes peut laisser penser que Ralsei a un crush sur Kris." },
  { a: "berdly",   b: "kris",     type: "love",       dir: "a->b", mode: "relationships", canon: false, chapters: [{ edition:"Deltarune"}],
    title: "Kerdly",
    desc: "L'obsession de Berdly pour Kris ainsi que son invitation au festival peut laisser penser que Berdly a un crush sur Kris." },
  { a: "friend",   b: "gaster",     type: "partners",       dir: "none", mode: "relationships", canon: false, chapters: [{ edition:"Deltarune"}],
    title: "DEVICE_FRIEND",
    desc: "Friend est classé comme un DEVICE dans le code du jeu, comme des objets associés à Gaster tels que le goner maker de l'introduction." },
  { a: "friend",   b: "dess",     type: "unkown",       dir: "none", mode: "relationships", canon: false, chapters: [{ edition:"Deltarune"}],
    title: "The poor childrens",
    desc: "Friend est le premier suspect dans la disparition de December, même si les raisons de cet enlèvement sont encore floues." },
  { a: "noelle",   b: "friend",     type: "friend",       dir: "a->b", mode: "relationships", canon: false, chapters: [{ edition:"Deltarune"}],
    title: "Cat Petterz 2",
    desc: "Il est probable que le chat étrange glitché élevé par Noelle dans Cat Petterz 2 soit FRIEND." },
  { a: "friend",   b: "spamton",     type: "unkown",       dir: "a->b", mode: "relationships", canon: false, chapters: [{ edition:"Deltarune"}],
    title: "Bénéfacteur",
    desc: "Si FRIEND est bien Mike, et que Mike est bien le bienfaiteur de Spamton, alors FRIEND aurait voulu l'aider avant de l'abandonner, pour une raison encore floue." },
  { a: "gaster",   b: "kris",     type: "partners",       dir: "both", mode: "relationships", canon: false, chapters: [{ edition:"Deltarune"}],
    title: "Psy",
    desc: "Si Gaster est l'homme oublié, il est aussi sûrement l'ancien psychologue de Kris." },
  { a: "gaster",   b: "ralsei",     type: "family",       dir: "none", mode: "relationships", canon: false, chapters: [{ edition:"Deltarune"}],
    title: "Création",
    desc: "En raison des propriétés étranges de Ralsei, semblant comprendre et connaître des éléments du jeu faits uniquement pour le joueur par Gaster, il est possible que Gaster ait créé Ralsei d'une certaine manière, par exemple en créant la prophétie." },
  { a: "tenna",   b: "friend",     type: "partners",       dir: "a->b", mode: "relationships", canon: false, chapters: [{ edition:"Deltarune"}],
    title: "Mike",
    desc: "Si Mike est FRIEND, Tenna semble le connaître et pense qu'il travaille maintenant pour lui. C'est peut-être aussi pour ça que Pluey semble être son Mike favori." },
  { a: "friend",   b: "kris",     type: "unkown",       dir: "a->b", mode: "relationships", canon: false, chapters: [{ edition:"Deltarune"}],
    title: "SWORD_ROUTE",
    desc: "Si FRIEND est bien celui ayant donné la manette à Kris et mis en place la sword route, il doit connaître personnellement Kris et vouloir qu'iel accomplisse la weird route pour une certaine raison encore floue." },
  { a: "asriel",   b: "kris",     type: "family",       dir: "none", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Frère et adèlphe",
    desc: "Asriel et Kris sont dans la famille Dreemurr." },
  { a: "asriel",   b: "dess",     type: "friend",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Amitié",
    desc: "Asriel et December semblent avoir été amis proches avant sa disparition." },
  { a: "dess",   b: "kris",     type: "friend",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Amitié",
    desc: "December était amie avec Kris, jouant dans la forêt avec Noelle et Asriel." },
  { a: "tenna",   b: "asriel",     type: "family",       dir: "a->b", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "TV Time",
    desc: "Tenna est la télévision familiale des Dreemurr, et est nostalgique de l'époque où Asriel s'amusait avec Kris devant la télévision." },
  { a: "tenna",   b: "dess",     type: "friend",       dir: "a->b", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Dess goon theory",
    desc: "Tenna est nostalgique de l'époque où December regardait des émissions de rock pas de son âge à la télévision." },
  { a: "noelle",   b: "dess",     type: "family",       dir: "none", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}, { edition:"Deltarune"}],
    title: "Soeurs",
    desc: "Noelle et December sont de la famille Holiday." },
  { a: "jevil",   b: "seam",     type: "divorce",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Une étrange personne",
    desc: "Jevil et Seam étaient très proches jusqu'à ce que Jevil rencontre une étrange personne, le plongeant dans la folie, ce qui força Seam à l'enfermer." },
  { a: "jevil",   b: "spamton",     type: "enemy",       dir: "b->a", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "ketchup kids",
    desc: "Jevil et Spamton ont déjà 'joué' ensemble, et Spamton n'est jamais arrivé à son niveau même en trichant. Ce qui a fait de lui son rival, même si Jevil ne le mentionne jamais." },
  { a: "jevil",   b: "friend",     type: "unkown",       dir: "b->a", mode: "relationships", canon: false, chapters: [{ edition:"Deltarune"}],
    title: "L'étrange personne",
    desc: "Il est possible que l'étrange personne ayant plongé Jevil dans la folie soit FRIEND, lui ayant également donné le shadow crystal lui révélant la vérité sur la nature du monde." },
  { a: "gerson",   b: "susie",     type: "partners",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Old Man",
    desc: "Un darkner basé sur les mémoires de Gerson du Roaring Knight est devenu le mentor de Susie, lui apprenant à s'entraîner, prendre confiance en elle, et l'encourageant à défier la prophétie. Il vient également l'aider à combattre le titan." },
  { a: "gerson",   b: "dess",     type: "partners",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Ancien enseignant",
    desc: "Gerson était l'enseignant de December quand il était encore vivant." },
  { a: "gerson",   b: "asriel",     type: "partners",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Ancien enseignant",
    desc: "Gerson était l'enseignant d'Asriel quand il était encore vivant." },
  { a: "gerson",   b: "friend",     type: "unkown",       dir: "b->a", mode: "relationships", canon: false, chapters: [{ edition:"Deltarune"}],
    title: "Shadow crystal",
    desc: "Un shadow crystal a été donné à Gerson, sûrement par FRIEND dans le but qu'il l'utilise. Il ne l'a cependant pas fait contrairement aux autres boss secrets." },
  { a: "eram",   b: "kris",     type: "unkown",       dir: "a->b", mode: "relationships", canon: false, chapters: [{ edition:"Deltarune"}],
    title: "Le couteau s'émousse",
    desc: "ERAM parle à Kris durant la sword route, semblant même connaître la weird route et ses pensées les plus sombres. Mais ses objectifs sont encore flous." },
  { a: "eram",   b: "friend",     type: "partners",       dir: "both", mode: "relationships", canon: false, chapters: [{ edition:"Deltarune"}],
    title: "Friendlings",
    desc: "ERAM partage la sword route avec FRIEND, des petites versions digitales de FRIEND apparaissent même durant le combat final. Il est parfois théorisé que FRIEND soit ERAM." },
  { a: "eram",   b: "noelle",     type: "unkown",       dir: "a->b", mode: "relationships", canon: false, chapters: [{ edition:"Deltarune"}],
    title: "Ice Palace",
    desc: "Noelle a déjà joué au jeu sur lequel le Mantle game est basé, et est également représentée dans le Mantle game lui-même. Il est théorisé que le carton de pizza Ice-E l'ayant hantée durant son enfance soit en fait ERAM." },
  { a: "ramb",   b: "eram",     type: "partners",       dir: "both", mode: "relationships", canon: false, chapters: [{ edition:"Deltarune"}],
    title: "Dressing room big shot",
    desc: "Ramb incite Kris à jouer au Mantle game dans lequel ERAM se trouve. Il est possible qu'il ait malgré tout connaissance d'ERAM. Il est théorisé qu'ERAM ait manipulé Ramb pour appâter Kris." },
  { a: "ramb",   b: "kris",     type: "family",       dir: "a->b", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Power strip",
    desc: "Prise électrique avec laquelle Kris jouait enfant, il s'est attaché à Kris. Il cherche le bonheur de Kris et pense lae comprendre, même si Kris semble l'avoir oublié." },
  { a: "ramb",   b: "tenna",     type: "partners",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Barman",
    desc: "Ramb travaille en tant que barman pour Tenna, devant s'occuper de servir des boissons et de distribuer certains lots. Il est cependant peu apprécié, et a interdiction de toucher les points." },
  { a: "knight",   b: "kris",     type: "partners",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Roaring GC",
    desc: "Kris travaille avec le Knight." },
  { a: "knight",   b: "susie",     type: "enemy",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Strife by strife",
    desc: "Le Roaring Knight possède une animosité particulière contre Susie." },
  { a: "knight",   b: "gaster",     type: "enemy",       dir: "b->a", mode: "relationships", canon: false, chapters: [{ edition:"Deltarune"}],
    title: "Go back",
    desc: "Après une défaite, Gaster va insister sur notre capacité à vaincre le Roaring Knight, laissant penser qu'il tient à notre victoire et à la défaite du Knight." },
  { a: "knight",   b: "friend",     type: "unkown",       dir: "both", mode: "relationships", canon: false, chapters: [{ edition:"Deltarune"}],
    title: "crowd laugh",
    desc: "Le Knight possède le même rire que FRIEND ainsi qu'un shadow crystal qui sont associés à FRIEND, ce qui laisse penser qu'ils ont une certaine relation ensemble." },
  { a: "knight",   b: "tenna",     type: "partners",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Le deal",
    desc: "Tenna a sûrement été menacé par le Knight et Kris pour qu'il kidnappe Toriel et distraie les delta warriors suffisamment longtemps pour que le Knight puisse arriver." },
  { a: "knight",   b: "tenna",     type: "partners",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Le deal",
    desc: "Tenna a sûrement été menacé par le Knight et Kris pour qu'il kidnappe Toriel et distraie les delta warriors suffisamment longtemps pour que le Knight puisse arriver." }, 
  { a: "soul",   b: "gaster",     type: "partners",       dir: "both", mode: "relationships", canon: false, chapters: [{ edition:"Deltarune"}],
    title: "Notre magnifique connection",
    desc: "Il est très probable que la voix du début du jeu soit Gaster, et qu'elle nous ait connectés avec ce monde pour un certain objectif." }, 
  { a: "soul",   b: "kris",     type: "partners",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Vessel",
    desc: "Kris et l'âme ont une relation codépendante. Chacune étant faible et ne pouvant pas entrer dans un dark world sans l'autre." }, 
  { a: "soul",   b: "kris",     type: "enemy",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "The distance between two",
    desc: "Kris et l'âme sont en grande tension car chacune agit au dépend du libre arbitre de l'autre, et ont des objectifs opposés sur certains points (le Knight)." }, 
  { a: "soul",   b: "noelle",     type: "partners",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune", chapter: "Weird Route"}],
    title: "Proceed",
    desc: "Dans la Weird Route, l'âme utilise Noelle pour arriver à ses fins." },
  { a: "toriel",   b: "asgore",     type: "divorce",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}, { edition:"Deltarune"}],
    title: "Togore",
    desc: "Dans Undertale et dans Deltarune, Toriel et Asgore sont divorcés au début du jeu, et vivent dans des maisons séparés." },
  { a: "alphys",   b: "undyne",     type: "love",       dir: "both", mode: "relationships", canon: true, chapters: [{edition:"Undertale"}],
    title: "Alphyne",
    desc: "Alphys et Undyne finissent en couple lors de la fin True Pacifist, et se font des bisous aussi. Même avant Undertale elles sont amoureuses aussi juste elles osent pas le dire." },
  { a: "alphys",   b: "undyne",     type: "love",       dir: "both", mode: "relationships", canon: false, chapters: [{ edition:"Deltarune"}],
    title: "Alphyne est de retour",
    desc: "Alphys fait crasher son vélo en mattant Undyne, qui lui offre une boite de chocolat en forme de coeur pour s'excuser, mais elles ne se connaisent pas dans Deltarune." },
  { a: "toriel",   b: "asriel",     type: "family",       dir: "none", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}, { edition:"Deltarune"}],
    title: "Dreemurr",
    desc: "Asriel est l'enfant de Toriel dans Undertale et Deltarune." },
  { a: "asgore",   b: "asriel",     type: "family",       dir: "none", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}, { edition:"Deltarune"}],
    title: "Dreemurr",
    desc: "Asriel est l'enfant de Asgore dans Undertale et Deltarune." },
  { a: "toriel",   b: "chara",     type: "family",       dir: "none", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}],
    title: "Dreemurr",
    desc: "Chara est l'enfant de Toriel dans Undertale après son adoption par les Dreemurr." },
  { a: "asgore",   b: "chara",     type: "family",       dir: "none", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}],
    title: "Dreemurr",
    desc: "Chara est l'enfant de Asgore dans Undertale après son adoption par les Dreemurr." },
  { a: "asriel",   b: "chara",     type: "family",       dir: "none", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}],
    title: "Dreemurr",
    desc: "Par adoption, Asriel est le frère de Chara." },
  { a: "toriel",   b: "kris",     type: "family",       dir: "none", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Dreemurr",
    desc: "Kris est l'enfant de Toriel." },
  { a: "asgore",   b: "kris",     type: "family",       dir: "none", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Dreemurr",
    desc: "Kris est l'enfant de Asgore." },
  { a: "alphys",   b: "asgore",     type: "partners",       dir: "none", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}],
    title: "Scientifique royale",
    desc: "Asgore a embaucher Alphys pour faire des expériences sur les âmes dans le but de briser la barrière, voir de ressusciter Asriel et Chara." },
  { a: "alphys",   b: "asgore",     type: "love",       dir: "a->b", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}, { edition:"Deltarune"}],
    title: "Alphgore",
    desc: "Alphys a un crush sur Asgore." },
  { a: "alphys",   b: "toriel",     type: "love",       dir: "a->b", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}],
    title: "Alphiel",
    desc: "Alphys a un crush sur Toriel dans Undertale." },
  { a: "alphys",   b: "soul",     type: "love",       dir: "a->b", mode: "relationships", canon: false, chapters: [{ edition:"Undertale"}],
    title: "The unknownable",
    desc: "Mettaton indique que Alphys crush sur une personne qui, selon ses théories, l'observe a travers plusieurs univers. Nous pourrions être cette personne étant donner que nous l'observons dans l'univers de Undertale et Deltarune." },
  { a: "alphys",   b: "mettaton",     type: "friend",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}],
    title: "Fans des humains",
    desc: "Alphys est devenue amie de Mettaton, étant la seul a avoir rejoins son club des fans des humains. Elle a fabriquer ses différentes formes physique pour qu'il puisse atteindre son corp idéal." },
  { a: "alphys",   b: "sans",     type: "friend",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}],
    title: "Science peoples",
    desc: "Alphys est amie avec Sans, qui l'aide a s'occuper des amalgames, et semble être au courant de ses recherches sur les univers parallèle. La machine dans l'atelier de Sans est aussi possiblement crée par Alphys." },
  { a: "alphys",   b: "frisk",     type: "partners",       dir: "a->b", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}],
    title: "Caméras secrètes",
    desc: "Alphys surveille le parcours de Frisk dès sa sortie des ruines, et l'aide a de nombreuses reprises pour gagner sa confience et lae convaincre de ne pas quitter les sous terrain." },
  { a: "alphys",   b: "kris",     type: "partners",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Enseignante",
    desc: "Alphys est la prof de Kris dans Deltarune." },
  { a: "alphys",   b: "kris",     type: "enemy",       dir: "b->a", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Hate des animes",
    desc: "Malgrès son laxisme, Kris semble détester Alphys. Dans plusieurs interactions, Kris peut être rude avec elle." },
  { a: "alphys",   b: "susie",     type: "partners",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Enseignante",
    desc: "Alphys est la prof de Susie dans Deltarune, même si elles semblent avoir peur l'une de l'autre." },
  { a: "alphys",   b: "toriel",     type: "partners",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Collègues",
    desc: "Alphys et Toriel travaillent toutes deux comme enseignantes a la même école." },
  { a: "alphys",   b: "noelle",     type: "partners",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Enseignante",
    desc: "Alphys est la prof de Noelle dans Deltarune." },
  { a: "alphys",   b: "berdly",     type: "partners",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Enseignante",
    desc: "Alphys est la prof de Berdly dans Deltarune." },
  { a: "alphys",   b: "berdly",     type: "partners",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Enseignante",
    desc: "Alphys est la prof de Berdly dans Deltarune." },
  { a: "undyne",   b: "frisk",     type: "friend",       dir: "both", mode: "relationships", canon: true, chapters: [{edition:"Undertale", chapter:"True Pacifist"}],
    title: "Cours de cuisine",
    desc: "Dans la route True Pacifist, Undyne deviens amie avec Frisk malgrès sa haine des humains." },
  { a: "undyne",   b: "frisk",     type: "enemy",       dir: "a->b", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}],
    title: "67",
    desc: "Undyne déteste les humains pour ce qu'ils ont fait aux monstres, et veut tuer Frisk pour récupérer la 7ème âme qui permettra d'ouvrire la barrière." },
  { a: "undyne",   b: "asgore",     type: "partners",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}],
    title: "Garde royale",
    desc: "Asgore a proposer a Undyne de l'entrainer au combat, elle est éventuellement devenue si forte qu'il la nommer cheffe de la garde royale." },
  { a: "undyne",   b: "asgore",     type: "unkown",       dir: "none", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Forces de police",
    desc: "Undyne connais Asgore, et elle la remplacer après qu'il se soit fait virer de son travaille comme chef de la police." },
  { a: "undyne",   b: "papyrus",     type: "friend",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}],
    title: "Spaghetti",
    desc: "Undyne et Papyrus sont amis, donc Undyne a trop peur que Papyrus rejoigne la garde royale. Elle lui apprend la cuisine a la place en espérant qu'il se trouve une autre vocation." },
  { a: "sans",   b: "papyrus",     type: "family",       dir: "none", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}, { edition:"Deltarune"}],
    title: "Skelebros",
    desc: "Sans est le grand frère de Papyrus." },
  { a: "sans",   b: "gaster",     type: "family",       dir: "none", mode: "relationships", canon: false, chapters: [{ edition:"Undertale"}, { edition:"Deltarune"}],
    title: "Skelebros",
    desc: "Sans est surement le grand frère de Gaster." },
  { a: "papyrus",   b: "gaster",     type: "family",       dir: "none", mode: "relationships", canon: false, chapters: [{ edition:"Undertale"}, { edition:"Deltarune"}],
    title: "Skelebros",
    desc: "Papyrus est surement le petit frère de Gaster." },
  { a: "papyrus",   b: "frisk",     type: "friend",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Undertale", chapter:"True Pacifist"}],
    title: "Dating Start",
    desc: "Papyrus peut se lier d'amitié avec Frisk si Frisk ne le tue pas et traine avec lui." },
  { a: "chara",   b: "frisk",     type: "partners",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}],
    title: "A great partner",
    desc: "Après sa réanimation, Chara partage son esprit avec Frisk, l'assistant dans différents points. Dans la route génocide, Chara représente la satisfaction de voir des statistiques augmenter, permettant de se détacher de la moralité de ses actions." },
  { a: "sans",   b: "toriel",     type: "friend",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}, { edition:"Deltarune"}],
    title: "Jitterbug",
    desc: "Toriel, après le divorce de Asgore, fini par se rapprocher de Sans et son amour des jeux de mots." },
  { a: "sans",   b: "toriel",     type: "love",       dir: "both", mode: "relationships", canon: false, chapters: [{ edition:"Undertale"}, { edition:"Deltarune"}],
    title: "Soriel",
    desc: "La proximité entre Sans et Toriel, ainsi que les blagues de Sans, laisse penser que les deux serais amoureux. Leur rapprochement arrivant toujours après le divorce avec Asgore, cela laisserais penser que Toriel est aller chercher ailleurs." },
  { a: "toriel",   b: "susie",     type: "friend",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Espoir",
    desc: "Toriel est aller dinner avec Susie pour l'encourager et lui donner de l'espoir, ce qui lui donne un grand respect envers elle." },
  { a: "asriel",   b: "papyrus",     type: "friend",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}],
    title: "Fan club",
    desc: "Dus a son imprévisibilité, Flowey est devenue fan de Papyrus et a ouvert un fan club en son honeur. Ils sont devenue amis, ce que Flowey utilise a son avantage dans la route True Pacifist." },

  // NEW !
  { a: "asriel",   b: "dess",     type: "love",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Dessriel",
    desc: "Asriel a écrit des lettres d'amour pour December, et ils jouait de la musique ensemble. Ils 'pratiquaient' souvent ensemble, et pas leur instruments." },

  { a: "noelle",   b: "susie",     type: "love",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Suselle",
    desc: "Noelle et Susie sont profondément amoureuses." },

  { a: "flowery",   b: "asgore",     type: "friend",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Oldbuddy",
    desc: "Asgore a donner tant d'amour a d'attention a ses 7 fleurs de marriage durant des années, qu'elles veulent absolument lui rendre cette amour dont elles débordent maintenant qu'elles en ont enfin la possibilité." },
  { a: "flowery",   b: "ralsei",     type: "enemy",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Kill that boy",
    desc: "Ralsei est très énervée par le snobisme et la témérité de Flowery, qui se permet de la taquiner de multiples manières au cours du chapitre. Flowery et Ralsei ont une philosophie contraire, et Flowery utilise pleinement sa liberté en dépit de la destiné. Flowery essaye de plus d'empêcher les héros de fermer sa fontaine, remettant en question le favoritisme de Ralsei pour la sienne." },
  { a: "flowery",   b: "susie",     type: "enemy",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Protecteurs de la fontaine",
    desc: "Flowery s'oppose au fun gang, voulant les empêcher de fermer leur fontaine. Il remet aussi spécifiquement l'égoisme de Susie pour placer son rêve de Castle Town au dessus du sien." },
  { a: "flowery",   b: "kris",     type: "enemy",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Protecteurs de la fontaine",
    desc: "Flowery s'oppose au fun gang, voulant les empêcher de fermer leur fontaine." },
  { a: "flowery",   b: "susie",     type: "friend",       dir: "b->a", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Voice lines",
    desc: "Susie admire Flowery qui l'impressionne avec son indépendance et son aura/larp." },

  { a: "rudy",   b: "asgore",     type: "friend",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}, { edition:"Deltarune"}],
    title: "La bête et la bête",
    desc: "Rudy et Asgore sont meilleurs amis depuis la fac. Ils sont très proches et s'inquiètent du sort malencontreux de l'autre." },
  { a: "rudy",   b: "noelle",     type: "family",       dir: "none", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}, { edition:"Deltarune"}],
    title: "Holidays",
    desc: "Rudy Holiday est le père de Noelle Holiday." },
  { a: "rudy",   b: "dess",     type: "family",       dir: "none", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}, { edition:"Deltarune"}],
    title: "Holidays",
    desc: "Rudy Holiday est le père de December Holiday." },
  { a: "rudy",   b: "toriel",     type: "friend",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Holiday and Dreemurr",
    desc: "Rudy Holiday semble être amis avec Toriel Dreemurr, ils se parlent a l'église et Rudy est le dernier membre des Holidays a continuer de regarder la télévision avec Toriel, même après le divorce." },
  { a: "rudy",   b: "susie",     type: "friend",       dir: "a->b", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Wingman",
    desc: "Rudy Holiday backseat Susie pour ship Suselle." },

  { a: "mewmew",   b: "asgore",     type: "family",       dir: "none", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Mew Mew Doll",
    desc: "Le corp de Mew Mew est posséder par Asgore dans Deltarune, et il est présent dans son magasin." },
  { a: "mewmew",   b: "alphys",     type: "family",       dir: "none", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}, { edition:"Deltarune"}],
    title: "Mew Mew Doll",
    desc: "Le corp de Mew Mew est posséder par Alphys dans Undertale, et a surement aussi été posséder par Alphys dans Deltarune avant de le donner a Asgore." },
  { a: "mewmew",   b: "alphys",     type: "friend",       dir: "b->a", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}],
    title: "E-Girl",
    desc: "Mew Mew est révéler comme une streameuse par Mettaton, et Alphys la regarde." },
  { a: "mewmew",   b: "undyne",     type: "love",       dir: "a->b", mode: "relationships", canon: true, chapters: [{ edition:"Undertale"}],
    title: "Mewdyne",
    desc: "Mew Mew a un crush sur Undyne dans Undertale, mais fini par apprendre a respecter son amour pour ALphys." },
  { a: "mewmew",   b: "mewmew",     type: "love",       dir: "both", mode: "relationships", canon: true, chapters: [{ edition:"Deltarune"}],
    title: "Let's date, mew!!!",
    desc: "Mew Mew est très possesive avec son corp, et refuse la partie drageuse de ce dernier, mais fini par aimer et être en harmony avec son nouveau corp." },


  // Parralels
  { a: "spamton",   b: "kris",     type: "like",     dir: "none", mode: "parallels",
    title: "La liberté",
    desc: "Spamton et Kris ne se sentent pas libres, contrôlés par des forces supérieures, et voudraient se libérer. Ils sont pourtant dépendants de cette entité, et ne sauraient sûrement pas comment faire sans elle." },
  { a: "spamton",     b: "tenna",    type: "like",       dir: "none", mode: "parallels",
    title: "La chute et l'abandon",
    desc: "Spamton et Tenna sont des hommes d'affaire véreux ayant eu beaucoup de succès. Malheureusement, ils ont chuté depuis leur heure de gloire, et se sont fait lâcher par des êtres chers par le passé, leur donnant une peur de l'abandon." },
  { a: "ralsei", b: "lancer",   type: "like",       dir: "none", mode: "parallels",
    title: "Princes des ténèbres",
    desc: "Ralsei et Lancer sont des princes des ténèbres solitaires, attendant l'arrivée des lightners." },
  { a: "berdly",   b: "spamton",    type: "like",      dir: "none", mode: "parallels",
    title: "Carry",
    desc: "Berdly et Spamton ont obtenu leur succès en partie grâce à l'aide d'un bienfaiteur pouvant les abandonner, ce qui est une de leurs craintes." },
  { a: "kris",     b: "berdly",    type: "like",      dir: "none", mode: "parallels",
    title: "Autistes",
    desc: "Ils sont autistes pour résumer." },
  { a: "noelle",    b: "susie",    type: "mirror",      dir: "none", mode: "parallels",
    title: "Peur",
    desc: "Noelle a peur de tout, et sa gentillesse cache une grande force, là où Susie fait peur à tout le monde, mais sa force cache une grande gentillesse." },
  { a: "kris",    b: "lancer",    type: "like",      dir: "none", mode: "parallels",
    title: "Traitres",
    desc: "Kris et Lancer sont amis de Susie, mais doivent la trahir pour obéir aux ordres (indirects dans le cas de Lancer) du Knight." },
  { a: "ralsei",    b: "spamton",    type: "like",      dir: "none", mode: "parallels",
    title: "Paradis",
    desc: "Ralsei et Spamton sont les seuls darkners à mentionner l'ange, l'âme et le paradis directement. Ils sont maudits par leur destinée et leur connaissance de cette destinée. Ils utilisent également tous deux des versions miniatures et angéliques d'eux-mêmes pour soigner les delta warriors." },
  { a: "ralsei",    b: "kris",    type: "like",      dir: "none", mode: "parallels",
    title: "L'âme",
    desc: "Ralsei et Kris cachent de nombreuses choses à Susie comme l'âme, notre présence, la weird route, ou les véritables enjeux en général. Ils sont solitaires et utilisés par des forces supérieures pour accomplir un plan sans se soucier de leur libre arbitre. En plus elles sont trans mais bref." },
  { a: "noelle",    b: "kris",    type: "mirror",      dir: "none", mode: "parallels",
    title: "Ange et démon",
    desc: "Noelle est principalement associée à des imageries angéliques et religieuses, là où Kris est associé à des imageries sataniques et profanes." },
  { a: "susie",    b: "kris",    type: "like",      dir: "none", mode: "parallels",
    title: "écartés",
    desc: "Susie et Kris sont solitaires et sont mis à l'écart de la société. Elles ont toutes les deux des problèmes avec la violence contre les autres et contre elles-mêmes. Susie craint également la fin et le changement, ce qui pourrait la lier à l'aspect plus nostalgique supposé de Kris." },
  { a: "dess",    b: "asriel",    type: "like",      dir: "none", mode: "parallels",
    title: "Disparus",
    desc: "December et Asriel sont deux personnages importants de la vie de Kris qui ont fini par s'éloigner. Ils disparaissent dans leur jeu respectif, ce qui est l'élément déclencheur de l'histoire." },
  { a: "dess",    b: "susie",    type: "like",      dir: "none", mode: "parallels",
    title: "Lost girls",
    desc: "Filles rebelles avec tendance violentes qui se plongent dans l'évasion. Associées à une guitare et à la musique Lost Girl." },
  { a: "asriel",    b: "ralsei",    type: "like",      dir: "none", mode: "parallels",
    title: "Asriel dust theory",
    desc: "Asriel et Ralsei sont des anagrammes. Ralsei a aussi une apparence de chèvre semblable à Asriel jeune. Ils servent d'introduction au nouveau monde dans lequel le jeu se passe, ainsi qu'à l'âme et au système de combat. Ils se présentent comme gentils." },
  { a: "ralsei",    b: "friend",    type: "mirror",      dir: "none", mode: "parallels",
    title: "Politesse et honnêteté",
    desc: "Ralsei connaît beaucoup de choses sur le monde, et essaie de le cacher pour ne pas blesser les gens. FRIEND va par contre révéler toute la vérité pour avoir plus de contrôle. Ralsei souffre de la prophétie mais a peur de la changer, là où FRIEND n'est pas contraint par la prophétie mais incite à la changer." },
  { a: "ralsei",    b: "tenna",    type: "like",      dir: "none", mode: "parallels",
    title: "Esclaves",
    desc: "Ralsei et Tenna sont des darkners réduisant leur valeur à leur tâche de servir les lightners." },
  { a: "ralsei",    b: "gaster",    type: "like",      dir: "none", mode: "parallels",
    title: "Green and inbetween",
    desc: "Ralsei et Gaster sont verts, au milieu, souvent oubliés, associés aux ténèbres et à la prophétie, et ils parlent de darker than dark." },
  { a: "eram",    b: "friend",    type: "like",      dir: "none", mode: "parallels",
    title: "Creepypasta",
    desc: "ERAM et FRIEND sont des entités mystérieuses malfaisantes, hantant des jeux à la manière de creepypasta." },
  { a: "eram",    b: "asriel",    type: "like",      dir: "none", mode: "parallels",
    title: "Le couteau s'émousse",
    desc: "ERAM et Flowey essaient de pousser la personne principale vers la violence, voire le meurtre, étant le reflet sombre des pires pulsions d'un personnage." },
  { a: "friend",    b: "asriel",    type: "like",      dir: "none", mode: "parallels",
    title: "Ton amis derrière toi",
    desc: "FRIEND et Flowey sont représentés avec de grands sourires, et proposent leurs services pour des motifs violents. Ils se cachent à des endroits du jeu, disparaissant peu après avoir été trouvés. Ils sont liés à l'événement déclencheur de l'intrigue du jeu." },
  { a: "eram",    b: "kris",    type: "like",      dir: "none", mode: "parallels",
    title: "La violence",
    desc: "ERAM ressemble à un monstre à cornes comme Kris voulait devenir, et parallèle ses pulsions violentes et pensées intrusives." },
  { a: "gerson",    b: "gaster",    type: "like",      dir: "none", mode: "parallels",
    title: "écrivains",
    desc: "Gerson et Gaster sont des experts très reconnus dans leur domaine, chacun 'créant' un monde via la prophétie. Mais ils sont morts avant de pouvoir finir leur dernière œuvre, et sont remplacés par Alphys. Aussi ils sont verts." },
  { a: "gerson",    b: "susie",    type: "mirror",      dir: "none", mode: "parallels",
    title: "La destinée",
    desc: "Gerson et Susie sont présentés comme ayant des différences fondamentales dans leur vision du destin et de la prophétie. Susie est heureuse de pouvoir vivre cette aventure avec ses amis, et la prophétie lui donne un sens et une importance qu'elle n'a pas envie de quitter. Là où Gerson est en paix avec sa mort et remet en cause la prophétie de multiples fois, ce qui énerve Susie initialement." },
  { a: "susie",    b: "soul",    type: "like",      dir: "none", mode: "parallels",
    title: "Protagonistes",
    desc: "Susie et l'âme sont de nouvelles arrivantes à Hometown et dans la vie de Kris, ce qui fait qu'il leur manque des connaissances pourtant élémentaires pour les autres personnages." },
  { a: "soul",    b: "jevil",    type: "like",      dir: "none", mode: "parallels",
    title: "Enfermés",
    desc: "Jevil et l'âme sont exclus du monde. Ils voient le monde uniquement comme un jeu ou celui dont les PV atteignent 0 le premier a perdu, et sont donc totalement détachés des autres personnages, n'hésitant pas à être violents. Malgré ça, ils pensent qu'ils sont les seuls libres car ils connaissent la vraie nature du monde." },
  { a: "soul",    b: "gaster",    type: "like",      dir: "none", mode: "parallels",
    title: "Expériences",
    desc: "Gaster et l'âme vivent dans un plan hors de l'univers du jeu, les détachant complètement des autres personnages. Même s'ils s'attachent à eux, leur soif de connaissance va les pousser à faire des expériences à leur dépend." },
  { a: "ramb",    b: "seam",    type: "like",      dir: "none", mode: "parallels",
    title: "Vendeurs",
    desc: "Ramb et Seam sont des vendeurs liés à un boss secret vers lequel ils nous guident et donnent les clés. Ils semblent également posséder de grandes connaissances auxquelles le joueur n'a pas accès." },
  { a: "spamton",    b: "jevil",    type: "mirror",      dir: "none", mode: "parallels",
    title: "Liberté",
    desc: "Spamton et Jevil ont des visions opposées de la liberté. En découvrant la vérité sur le monde, Jevil se considère libre via son détachement à celui-ci, alors que Spamton essaie à tout prix de fuir ce monde." },
  { a: "spamton",    b: "jevil",    type: "like",      dir: "none", mode: "parallels",
    title: "Boss secrets",
    desc: "Jevil et Spamton sont des boss optionnels, ils se transforment en item et donnent un shadow crystal une fois vaincus, et leur musique contient le freedom motif. Ils offrent tous les deux une certaine vision de la liberté." },
  { a: "dess",    b: "knight",    type: "like",      dir: "none", mode: "parallels",
    title: "Symbolismes",
    desc: "December et le Roaring Knight sont tous deux associés au baseball et à la rébellion, en plus d'avoir des bois." },
  { a: "asriel",    b: "knight",    type: "like",      dir: "none", mode: "parallels",
    title: "Asriel Dreemurr",
    desc: "Comme Asriel Dreemurr de Undertale, le Roaring Knight utilise des étoiles durant son combat, ainsi qu'une attaque faisant tout l'écran et attirant l'âme en son centre." },
  { a: "friend",    b: "knight",    type: "like",      dir: "none", mode: "parallels",
    title: "Rire",
    desc: "Le Knight possède le même rire que FRIEND, peut changer de forme, et est associé sur certaines de ses animations avec la queue de l'enfer." },
  { a: "eram",    b: "ramb",    type: "mirror",      dir: "none", mode: "parallels",
    title: "Kris",
    desc: "ERAM et Ramb partagent un nom similaire mais construit de manière opposée. Là où ERAM se lie à Kris et son enfance pour le pousser vers la violence, Ramb veut le faire pour se connecter avec Kris et lui apporter une joie de l'amusement nostalgique." },
  { a: "seam",    b: "ralsei",    type: "like",      dir: "none", mode: "parallels",
    title: "Le joueur",
    desc: "Seam et Ralsei font partie des rares personnages qui semblent reconnaître la présence du joueur, Ralsei en parlant explicitement des boutons du clavier, et Seam écrivant comment prononcer son nom comme s'il le faisait pour un joueur lisant des lignes de dialogues." },

  // NEW ! 
  { a: "asgore",    b: "spamton",    type: "like",      dir: "none", mode: "parallels",
    title: "Connection et prospérité",
    desc: "Asgore et Spamton on perdu tout ce qu'ils avais et leur connections, et profitent a la place d'un bénéfacteur. Ils sont des vendeurs dont le buisness est en perte de vitesse, mais pensent pouvoir redevenir grand, et sont obséder par le fait de retrouver leur succès passé. Ils sont associés avec les tours de voiture, le rose et le jaune, et le noeud papillon de Spamton." },
  { a: "mettaton",    b: "spamton",    type: "like",      dir: "none", mode: "parallels",
    title: "Dream",
    desc: "Mettaton et Spamton veulent avoir un nouveau corp, littéralement un corp NEO. Le combat contre Spamton NEO utilise la méchanique de l'âme justice utilisé contre Mettaton, et BIG SHOT possède le leitmotif de Power of NEO de Mettaton." },
  { a: "asgore",    b: "tenna",    type: "like",      dir: "none", mode: "parallels",
    title: "Le vrais méchant",
    desc: "Asgore et Tenna endossent tout deux le rôle du méchant a cause des circonstance, et subissent beacoups de peine, nottament après leur divorce. Ils sont portés sur le passé et la nostalgie, voulant que les choses reviennent comme elles était avant. Cependant, ils ont pulsion de vouloir tout aranger, et sont également très paternels." },
  { a: "undyne",    b: "alphys",    type: "like",      dir: "none", mode: "parallels",
    title: "Alphyne est toujours de retour",
    desc: "Undyne et Alphys occupent les deux postes les plus important de l'administration royale et son collèges. Elles partagent une passion pour les animes (même si Undyne pense qu'il s'agit de films historiques sur les humains), et sont amoureuses l'une de l'autre sans oser le dire." },
  { a: "undyne",    b: "alphys",    type: "mirror",      dir: "none", mode: "parallels",
    title: "Deck poisson",
    desc: "Undyne semble avoir plus de confiance en elle que Alphys, mais elle admire pourtant la confiance d'Alphys en ses passions et ce qu'elle aime, ce qu'Undyne fait bien plus difficilement. Undyne vie également dans une zone aquatique la ou Alphys vie dans une zone de feu." },
  { a: "asgore",    b: "frisk",    type: "like",      dir: "none", mode: "parallels",
    title: "Wimpy loser with a big heart",
    desc: "Asgore et Frisk sont tout deux de tendences pacifiste malgrès leur pouvoir et leur position, même si ils peuvent a tuer par nécessité. Ils sont également placer dans le rôle de devoir changer le destin des sous terrains et de libérer les monstres après avoir été séparer de leur famille. Dans la fin neutre, Asgore et Frisk sont mis dans un rôle similaire, ou ils sont forcer de s'entretuer pour pouvoir rejoindre la surface." },
  { a: "asgore",    b: "toriel",    type: "mirror",      dir: "none", mode: "parallels",
    title: "Vivre dans le passé",
    desc: "Asgore veut absolument retrouver la vie de famille qu'il avais avant, et semble obséder par le passé. Toriel veut elle tourner la page et passer a autre chose en se faisant une autre vie." },
  { a: "asgore",    b: "sans",    type: "mirror",      dir: "none", mode: "parallels",
    title: "Nice day today",
    desc: "Sans fait référence au monologue d'introduction de Asgore au début de son combat dans la route génocide, mais détourne sa fin pour montrer la différence de son approche. Ce qui s'approche de l'interprétation que Frisk est un combat de boss pour Sans." },
  { a: "mettaton",    b: "lancer",    type: "like",      dir: "none", mode: "parallels",
    title: "Lancer cookie",
    desc: "Ils vendent tout deux des nourritures de soins a leur image" },
  { a: "asriel",    b: "chara",    type: "mirror",      dir: "none", mode: "parallels",
    title: "Le plan",
    desc: "Contrairement a Chara, Asriel a utiliser l'influence partager sur son corp pour épargner les humains au prix de sa propre vie." },
  { a: "asriel",    b: "chara",    type: "like",      dir: "none", mode: "parallels",
    title: "L'ange qui a vue la surface",
    desc: "Chara et Asriel sont placer dans le rôle de l'ange, ayant tout deux vue la surface, et tuant ou sauvant les sous terrains selon la route." },
  { a: "chara",    b: "kris",    type: "like",      dir: "none", mode: "parallels",
    title: "Chara est de retour",
    desc: "Chara et Kris sont des humains adopter par la famille Dreemurr. Iels ont des tendence violentes, des yeux qui brulent, et possèdent un couteau." },
  { a: "mettaton",    b: "tenna",    type: "like",      dir: "none", mode: "parallels",
    title: "MTTV Time",
    desc: "Mettaton et Tenna sont des présentateurs de télévision et des patrons tyraniques exploitant leur employés. Ils font également des nourritures et statues a leur effigie." },
  { a: "alphys",    b: "chara",    type: "like",      dir: "none", mode: "parallels",
    title: "Libération des monstres",
    desc: "Alphys et Chara avais un plan secret pour briser la barrière et libérer les monstres, mais le plan a horriblement rater." },
  { a: "frisk",    b: "undyne",    type: "like",      dir: "none", mode: "parallels",
    title: "Détermination",
    desc: "Frisk et Undyne sont des combatantes extrêmement déterminer, mais soutiennent aussi leur amis." },
  { a: "papyrus",    b: "susie",    type: "like",      dir: "none", mode: "parallels",
    title: "Tuff",
    desc: "Papyrus et Susie essayent d'apparaitre forts et intimidants, mais ils sont pleins de gentillesse et d'espoir." },
  { a: "sans",    b: "kris",    type: "like",      dir: "none", mode: "parallels",
    title: "A peak behind the curtain",
    desc: "Sans et Kris sont secrets, protecteurs, et ont connaissances des puissances au dela du monde. Aussi c'est des flemmards qui aiment bien faire des pranks et des blagues." },
  { a: "undyne",    b: "susie",    type: "like",      dir: "none", mode: "parallels",
    title: "Axe of justice",
    desc: "Undyne et Susie sont des filles fortes et intimidantes qui se soucient profondément de leur amis, et ont aussi peut être un truc avec cette fille timide comme dit littéralement Toby Fox. Mais elles ont aussi toutes deux admirer Gerson comme mentor, qui fait lui même une référence a Undyne en parlant de Susie." },
  { a: "undyne",    b: "susie",    type: "mirror",      dir: "none", mode: "parallels",
    title: "Institutions",
    desc: "Undyne est une figure institutionellement normative, faisant partie des forces de l'ordre, et est déjà intégrer a la société a des amis, mais elle est extrême, exagérée, et très tétu dans son comprtement. La ou Susie est peu normative, contre l'autorité et arrivant seul dans un nouvel univers, mais est en fait très chill et respectueuse." },

  // NEW !!!
  { a: "frisk",    b: "kris",    type: "mirror",      dir: "none", mode: "parallels",
    title: "Contrôle",
    desc: "La ou Frisk sert d'avatar directement contrôler par la joueuse, Kris est bien séparer de notre personne, et refuse activement notre contrôle." },

  { a: "flowery",    b: "ralsei",    type: "mirror",      dir: "none", mode: "parallels",
    title: "With hope, can he make it real!?",
    desc: "Flowery s'oppose directement a Ralsei, en défiant son destin et en brisant les règles et les normes. Il n'hésite pas a utiliser des pouvoirs surpuissant même si ils sont faux, la ou Ralsei possède des pouvoirs surement plus fort encore mais refuse de l'utiliser, craignant de dévier ainsi de son role. Ralsei reste dans son role, en espérant que le destin sois miséricordieux en retour. Flowery, lui, sais que son histoire doit se terminer, mais décide d'utiliser cette opportunité pour en faire le plus possible et écrire sa propre histoire avant qu'elle prenne fin." },
  { a: "flowery",    b: "rudy",    type: "like",      dir: "none", mode: "parallels",
    title: "College room-mate",
    desc: "Flowery se présente comme un amis d'Asgore du collège, et semble très proche de lui, ce qui rappelle sa relation avec Rudy ayant commencer au collège. Il porte les couleurs de noel, et se présente comme de haute société, et sa tendence a craner, ragebait, et défier rappelle également Rudy." },
  { a: "flowery",    b: "asriel",    type: "mirror",      dir: "none", mode: "parallels",
    title: "love et LOVE",
    desc: "Flowery utilise ses pouvoirs et mépris des conséquences pour distribuer l'amour qu'il possède, devanant amis avec toutes les autres fleurs, la ou Flowey se détache des autres et cherche a leur faire du mal, finissant par devenue ennemie avec toutes les âmes humaines." },
  { a: "flowery",    b: "asriel",    type: "like",      dir: "none", mode: "parallels",
    title: "Omega Flowery",
    desc: "Flowery et Asriel sont des fleurs sans âme possédant de grands pouvoirs, attaquant avec le pouvoir des différentes âmes humaines dans leur combat final. Ils n'ont pas a subir de conséquences pour leur actions car ils savent que leur monde prendra bientôt fin au profit d'un autre. Flowery partage même le leitmotif de Flowey et sa trainée arc en ciel quand il deviens Asriel Dreemurr." },
  { a: "flowery",    b: "gerson",    type: "like",      dir: "none", mode: "parallels",
    title: "Stylo blanc de l'espoir",
    desc: "Flowery et Gerson encouragent chacun a leur manière un des héro du fun gang a sortir de leur role, et a écrire leur propre histoire avant que les marées du destin ne s'approchent, et a se battre pour leur liberté et leur indépendance." },

  { a: "mewmew",    b: "kris",    type: "like",      dir: "none", mode: "parallels",
    title: "Puppet",
    desc: "Mew Mew est composer d'un corp et d'un esprit initialement en désacord, le corp résistant le pleins contrôle de son esprit, tout comme Kris résistant a la volonté de l'âme." },
  { a: "mewmew",    b: "soul",    type: "like",      dir: "none", mode: "parallels",
    title: "Puppet",
    desc: "Comme le parallèle entre Mew Mew et Kris, c'est un parallèle de la relation entre Kris et l'âme." },
  { a: "mewmew",    b: "spamton",    type: "like",      dir: "none", mode: "parallels",
    title: "Mannequins",
    desc: "Mew Mew et Spamton sont des mannequins cherchant tout deux un corp qui les corresponds. Ils sont des boss secrets de type mannequin/chat avec un Shadow Crystal." },

  { a: "noelle",    b: "jevil",    type: "like",      dir: "none", mode: "parallels",
    title: "I can do anything",
    desc: "Dans la Weird Route, Noelle découvre ou se doute surement de la nature de son monde. Tout comme Jevil, elle va essayer de reprendre sa liberté par tout les moyens, et se crois capable de tout faire." },
  { a: "noelle",    b: "dess",    type: "like",      dir: "none", mode: "parallels",
    title: "Angel wings",
    desc: "Noelle se sentant piégée dans sa vie, a envie de la fuir et de disparaitre. Ce qui peut être un parallèle avec December, qui elle aussi avais soif de liberté avec son style alternatif et sa passion pour le survivalisme, et a fini par disparaitre elle même. Noelle disparait peut être dans le même endroit que sa soeur dans la Weird Route." },
  { a: "noelle",    b: "dess",    type: "mirror",      dir: "none", mode: "parallels",
    title: "La tradition",
    desc: "Là où Noelle représente initialement une fille modèle de bonne famille religieuse traditionnelle, December est une ado rebelle bien loin de ses valeurs. Le courage et la force de December lui ont peut être permis de disparaitre la ou Noelle n'en a pas la force. Aussi Noelle est gay." },
];


 
let currentMode = "relationships";
let hiddenTypes = new Set();
let hideCanon = false;
let hideTheory = false;

let hiddenChapters = new Set();
let activePath = null;
let nodes = [];
let activeLink = null;
let hoveredLink = null;
let dragging = null;
let dragOffX = 0, dragOffY = 0;
const NODE_R = 18;
 
 
const canvas = document.getElementById("map-canvas");
const ctx = canvas.getContext("2d");
 
function resize() {
  const wrap = document.getElementById("map-wrap");
  const legendH = document.getElementById("legend").offsetHeight;
  canvas.width = wrap.clientWidth;
  canvas.height = wrap.clientHeight - legendH;
  initNodes();
  draw();
}
 
 
function initNodes() {
  const W = canvas.width, H = canvas.height;
  const cx = W / 2, cy = H / 2;
  const r = Math.min(W, H) * 0.32;
  nodes = CHARACTERS.map((c, i) => {
    const angle = (2 * Math.PI * i / CHARACTERS.length) - Math.PI / 2;
    const existing = nodes.find(n => n.id === c.id);
    return {
      id: c.id, label: c.label, desc: c.desc,
      x: existing ? existing.x : cx + r * Math.cos(angle),
      y: existing ? existing.y : cy + r * Math.sin(angle),
      vx: 0, vy: 0
    };
  });
}
 
function getNode(id) { return nodes.find(n => n.id === id); }
 
 
let animFrame = null;
 
function physicsStep() {
  const W = canvas.width, H = canvas.height;
  const links = getVisibleLinks();
 
 
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j];
      const dx = b.x - a.x, dy = b.y - a.y;
      const dist = Math.sqrt(dx*dx + dy*dy) || 1;
      const force = 3200 / (dist * dist);
      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;
      a.vx -= fx; a.vy -= fy;
      b.vx += fx; b.vy += fy;
    }
  }
 
 
  links.forEach(lk => {
    const a = getNode(lk.a), b = getNode(lk.b);
    if (!a || !b || a === b) return;
    const dx = b.x - a.x, dy = b.y - a.y;
    const dist = Math.sqrt(dx*dx + dy*dy) || 1;
    const rest = 160;
    const force = (dist - rest) * 0.012;
    const fx = (dx / dist) * force;
    const fy = (dy / dist) * force;
    a.vx += fx; a.vy += fy;
    b.vx -= fx; b.vy -= fy;
  });
 
 
  const cx = W / 2, cy = H / 2;
  nodes.forEach(n => {
    n.vx += (cx - n.x) * 0.0015;
    n.vy += (cy - n.y) * 0.0015;
  });
 
 
  nodes.forEach(n => {
    if (dragging && dragging.id === n.id) { n.vx = 0; n.vy = 0; return; }
    n.vx *= 0.82; n.vy *= 0.82;
    n.x += n.vx; n.y += n.vy;
    n.x = Math.max(NODE_R + 2, Math.min(W - NODE_R - 2, n.x));
    n.y = Math.max(NODE_R + 2, Math.min(H - NODE_R - 2, n.y));
  });
 
  draw();
  animFrame = requestAnimationFrame(physicsStep);
}
 
 
function getTypeMap() {
  return currentMode === "relationships" ? REL_TYPES : PAR_TYPES;
}
 
function getTypeInfo(typeId) {
  return getTypeMap().find(t => t.id === typeId);
}
 
function getVisibleLinks() {
  return RELATIONSHIPS.filter(lk => {
    if (lk.mode !== currentMode) return false;
    if (hiddenTypes.has(lk.type)) return false;
    if (lk.mode === "relationships") {
      if (lk.canon && hideCanon) return false;
      if (!lk.canon && hideTheory) return false;
     
      if (lk.chapters && hiddenChapters.size > 0) {
        const anyVisible = lk.chapters.some(c => !hiddenChapters.has(c.edition + "::" + c.chapter));
        if (!anyVisible) return false;
      }
    }
    return true;
  });
}
 
 
const CURVE_STEP = 38;
 
function getControlPoint(ax, ay, bx, by, offset) {
  const mx = (ax + bx) / 2, my = (ay + by) / 2;
  const dx = bx - ax, dy = by - ay;
  const dist = Math.sqrt(dx*dx + dy*dy) || 1;
 
  const px = -dy / dist, py = dx / dist;
  return { cx: mx + px * offset * CURVE_STEP, cy: my + py * offset * CURVE_STEP };
}
 
function bezierPoint(ax, ay, cx, cy, bx, by, t) {
  const mt = 1 - t;
  return {
    x: mt*mt*ax + 2*mt*t*cx + t*t*bx,
    y: mt*mt*ay + 2*mt*t*cy + t*t*by
  };
}
 
function bezierTangent(ax, ay, cx, cy, bx, by, t) {
  const mt = 1 - t;
  const tx = 2*mt*(cx-ax) + 2*t*(bx-cx);
  const ty = 2*mt*(cy-ay) + 2*t*(by-cy);
  const len = Math.sqrt(tx*tx+ty*ty) || 1;
  return { ux: tx/len, uy: ty/len };
}
 
function bezierTrimT(ax, ay, cx, cy, bx, by, fromEnd) {
  const steps = 30;
  const ex = fromEnd ? bx : ax, ey = fromEnd ? by : ay;
  for (let i = 0; i <= steps; i++) {
    const t = fromEnd ? 1 - i/steps : i/steps;
    const p = bezierPoint(ax, ay, cx, cy, bx, by, t);
    const d = Math.hypot(p.x - ex, p.y - ey);
    if (d >= NODE_R + 2) return t;
  }
  return fromEnd ? 0 : 1;
}
 
 
function assignOffsets(links) {
  const groups = new Map();
  links.forEach(lk => {
    const key = [lk.a, lk.b].sort().join('|');
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(lk);
  });
  const map = new Map();
  groups.forEach(group => {
    const n = group.length;
    group.forEach((lk, i) => {
     
      let slot;
      if (n === 1) {
        slot = 0;
      } else {
        const mid = (n - 1) / 2;
        slot = i - mid;
      }
      map.set(lk, slot);
    });
  });
  return map;
}
 
 
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const links = getVisibleLinks();
  const offsets = assignOffsets(links);
 
 
  links.forEach(lk => {
    const a = getNode(lk.a), b = getNode(lk.b);
    if (!a || !b) return;
    const ti = getTypeInfo(lk.type);
    if (!ti) return;
    const isActive = lk === activeLink || lk === hoveredLink;
    const inPath = activePath && activePath.links.has(lk);
    const dimmed = activePath && !inPath && !isActive;
    drawEdge(a, b, ti.color, ti.dash, lk.dir, isActive || inPath, lk.canon, offsets.get(lk) || 0, dimmed);
  });
 
 
  nodes.forEach(n => {
    const inPath = activePath && activePath.nodes.has(n.id);
    const dimmed = activePath && !inPath;
    drawNode(n, inPath, dimmed);
  });
}
 
function drawEdge(a, b, color, dash, dir, highlight, canon, offset, dimmed) {
  // ── CAS RÉFLEXIF : boucle sur soi-même ──────────────────────────────────
  if (a === b) {
    drawSelfLoop(a, color, dash, dir, highlight, canon, offset, dimmed);
    return;
  }

  const { cx, cy } = getControlPoint(a.x, a.y, b.x, b.y, offset);

  const tStart = bezierTrimT(a.x, a.y, cx, cy, b.x, b.y, false);
  const tEnd   = bezierTrimT(a.x, a.y, cx, cy, b.x, b.y, true);

  const pStart = bezierPoint(a.x, a.y, cx, cy, b.x, b.y, tStart);
  const pEnd   = bezierPoint(a.x, a.y, cx, cy, b.x, b.y, tEnd);

  ctx.save();
  ctx.globalAlpha = dimmed ? 0.15 : (canon ? 1 : 0.55);
  ctx.strokeStyle = highlight ? "#000" : color;
  ctx.lineWidth = highlight ? 3 : 1.5;
  if (!canon) ctx.setLineDash([10, 6]);
  else if (dash) ctx.setLineDash([6, 4]);
  else ctx.setLineDash([]);

  ctx.beginPath();
  ctx.moveTo(pStart.x, pStart.y);
  ctx.quadraticCurveTo(cx, cy, pEnd.x, pEnd.y);
  ctx.stroke();
  ctx.setLineDash([]);

  const arrowLen = 9, arrowW = 4;
  if (dir === "a->b" || dir === "both") {
    const tan = bezierTangent(a.x, a.y, cx, cy, b.x, b.y, tEnd);
    drawArrow(ctx, pEnd.x, pEnd.y, tan.ux, tan.uy, arrowLen, arrowW, highlight ? "#000" : color);
  }
  if (dir === "b->a" || dir === "both") {
    const tan = bezierTangent(a.x, a.y, cx, cy, b.x, b.y, tStart);
    drawArrow(ctx, pStart.x, pStart.y, -tan.ux, -tan.uy, arrowLen, arrowW, highlight ? "#000" : color);
  }
  ctx.restore();
}

function drawSelfLoop(n, color, dash, dir, highlight, canon, offset, dimmed) {
  const loopR = NODE_R * 1.1;
  const baseAngle = -Math.PI / 2;
  const angleStep = 0.55;
  const angle = baseAngle + offset * angleStep;

  const dist = NODE_R + loopR;
  const lx = n.x + Math.cos(angle) * dist;
  const ly = n.y + Math.sin(angle) * dist;

  ctx.save();
  ctx.globalAlpha = dimmed ? 0.15 : (canon ? 1 : 0.55);
  ctx.strokeStyle = highlight ? "#000" : color;
  ctx.lineWidth = highlight ? 3 : 1.5;
  if (!canon) ctx.setLineDash([10, 6]);
  else if (dash) ctx.setLineDash([6, 4]);
  else ctx.setLineDash([]);

  ctx.beginPath();
  ctx.arc(lx, ly, loopR, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  if (dir !== "none") {
    // Point où la boucle touche le nœud (angle depuis le nœud vers le centre de la boucle, côté "retour")
    // On place la flèche à ~30° du point d'attache, dans le sens trigonométrique
    const attachAngle = angle + Math.PI; // direction opposée = côté nœud
    const arrowAngle = attachAngle - 0.45; // légèrement décalé = sens de rotation

    // Point sur le périmètre de la boucle à arrowAngle
    const ax = lx + Math.cos(arrowAngle) * loopR;
    const ay = ly + Math.sin(arrowAngle) * loopR;

    // Tangente au cercle en ce point = perpendiculaire au rayon, sens horaire
    const ux =  Math.sin(arrowAngle);
    const uy = -Math.cos(arrowAngle);

    drawArrow(ctx, ax, ay, ux, uy, 9, 4, highlight ? "#000" : color);
  }

  ctx.restore();
}
 
function drawArrow(ctx, x, y, ux, uy, len, w, color) {
  const px = -uy, py = ux;
  ctx.save();
  ctx.setLineDash([]);
  ctx.globalAlpha = ctx.globalAlpha;
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.moveTo(x, y);
  ctx.lineTo(x - ux*len + px*w, y - uy*len + py*w);
  ctx.lineTo(x - ux*len - px*w, y - uy*len - py*w);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
 
function drawNode(n, inPath, dimmed) {
  ctx.save();
  ctx.globalAlpha = dimmed ? 0.2 : 1;
  ctx.beginPath();
  ctx.arc(n.x, n.y, NODE_R, 0, Math.PI * 2);
  ctx.fillStyle = inPath ? "#000" : "#fff";
  ctx.fill();
  ctx.strokeStyle = "#000";
  ctx.lineWidth = inPath ? 3 : 2;
  ctx.stroke();
 
  ctx.fillStyle = inPath ? "#fff" : "#000";
  ctx.font = "bold 11px 'Courier New', Courier, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const label = n.label.length > 7 ? n.label.slice(0, 6) + "." : n.label;
  ctx.fillText(label, n.x, n.y);
  ctx.restore();
}
 
 
function buildLegend() {
  const legend = document.getElementById("legend");
  legend.innerHTML = '<span></span>';
  getTypeMap().forEach(t => {
    const item = document.createElement("div");
    item.className = "legend-item";
    const line = document.createElement("span");
    line.className = "legend-line" + (t.dash ? " dashed" : "");
    line.style.backgroundColor = t.dash ? "transparent" : t.color;
    line.style.color = t.color;
    item.appendChild(line);
    const lbl = document.createElement("span");
    lbl.textContent = t.label;
    item.appendChild(lbl);
    legend.appendChild(item);
  });
  if (currentMode === "relationships") {
    const sep = document.createElement("span");
    sep.style.cssText = "border-left:1px solid #ccc;margin:0 4px;";
    legend.appendChild(sep);
    const item = document.createElement("div");
    item.className = "legend-item";
    const line = document.createElement("span");
    line.style.cssText = "width:28px;height:2px;display:inline-block;opacity:0.5;background:repeating-linear-gradient(90deg,#000 0,#000 8px,transparent 8px,transparent 14px);";
    item.appendChild(line);
    const lbl = document.createElement("span");
    lbl.textContent = "Theory";
    item.appendChild(lbl);
    legend.appendChild(item);
  }
}
 
 
function buildFilters() {
  const list = document.getElementById("filter-list");
  list.innerHTML = "";
 
 
  if (currentMode === "relationships") {
    const secHeader = document.createElement("div");
    secHeader.style.cssText = "background:#bbb;padding:3px 8px;font-weight:bold;font-size:11px;border-bottom:1px solid #000;letter-spacing:0.5px;";
    secHeader.textContent = "CANON / THEORY";
    list.appendChild(secHeader);
 
    [{ label: "Canon", key: "canon" }, { label: "Theory", key: "theory" }].forEach(({ label, key }) => {
      const row = document.createElement("label");
      row.className = "filter-item";
 
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = key === "canon" ? !hideCanon : !hideTheory;
      cb.addEventListener("change", () => {
        if (key === "canon") hideCanon = !cb.checked;
        else hideTheory = !cb.checked;
        if (activeLink) {
          const still = getVisibleLinks().includes(activeLink);
          if (!still) { activeLink = null; clearInfo(); }
        }
        draw();
      });
 
      const badge = document.createElement("span");
      badge.style.cssText = `display:inline-block;border:1px solid #000;padding:0 4px;font-size:10px;font-weight:bold;background:${key === "canon" ? "#000" : "#fff"};color:${key === "canon" ? "#fff" : "#000"};flex-shrink:0;`;
      badge.textContent = label.toUpperCase();
 
      const lbl = document.createElement("span");
      lbl.className = "filter-label";
      lbl.textContent = label;
 
      row.appendChild(cb);
      row.appendChild(badge);
      row.appendChild(lbl);
      list.appendChild(row);
    });
 
    const secHeader2 = document.createElement("div");
    secHeader2.style.cssText = "background:#bbb;padding:3px 8px;font-weight:bold;font-size:11px;border-bottom:1px solid #000;border-top:1px solid #000;letter-spacing:0.5px;";
    secHeader2.textContent = "UNIVERS";
    list.appendChild(secHeader2);
 
   
    const editionMap = new Map();
    RELATIONSHIPS.filter(lk => lk.mode === "relationships" && lk.chapters).forEach(lk => {
      lk.chapters.forEach(({ edition, chapter }) => {
        if (!editionMap.has(edition)) editionMap.set(edition, new Set());
        editionMap.get(edition).add(chapter);
      });
    });
 
   
    const sortedEditions = [...editionMap.keys()].sort();
 
    sortedEditions.forEach(edition => {
      const chapters = [...editionMap.get(edition)].sort();
      const allKeys = chapters.map(ch => edition + "::" + ch);
 
     
      const allHidden = () => allKeys.every(k => hiddenChapters.has(k));
     
      const someHidden = () => allKeys.some(k => hiddenChapters.has(k)) && !allHidden();
 
     
      const masterRow = document.createElement("div");
      masterRow.className = "edition-master";
 
      const masterCb = document.createElement("input");
      masterCb.type = "checkbox";
      masterCb.checked = !allHidden();
      masterCb.indeterminate = someHidden();
 
      const masterLabel = document.createElement("span");
      masterLabel.textContent = edition;
      masterLabel.style.flex = "1";
 
      const toggleIcon = document.createElement("span");
      toggleIcon.className = "edition-toggle";
      toggleIcon.textContent = "[-]";
 
      masterRow.appendChild(masterCb);
      masterRow.appendChild(masterLabel);
      masterRow.appendChild(toggleIcon);
      list.appendChild(masterRow);
 
     
      const chapContainer = document.createElement("div");
      chapContainer.className = "edition-chapters";
 
      const chapterCheckboxes = [];
 
      chapters.forEach(chapter => {
        const key = edition + "::" + chapter;
        const chapRow = document.createElement("label");
        chapRow.className = "chapter-item";
 
        const chapCb = document.createElement("input");
        chapCb.type = "checkbox";
        chapCb.checked = !hiddenChapters.has(key);
        chapterCheckboxes.push(chapCb);
 
        chapCb.addEventListener("change", () => {
          if (chapCb.checked) hiddenChapters.delete(key);
          else hiddenChapters.add(key);
         
          masterCb.checked = !allHidden();
          masterCb.indeterminate = someHidden();
          if (activeLink && !getVisibleLinks().includes(activeLink)) { activeLink = null; clearInfo(); }
          draw();
        });
 
        const chapLabel = document.createElement("span");
        chapLabel.textContent = chapter;
 
        chapRow.appendChild(chapCb);
        chapRow.appendChild(chapLabel);
        chapContainer.appendChild(chapRow);
      });
 
     
      masterCb.addEventListener("change", () => {
        if (masterCb.checked) {
          allKeys.forEach(k => hiddenChapters.delete(k));
          chapterCheckboxes.forEach(cb => { cb.checked = true; });
        } else {
          allKeys.forEach(k => hiddenChapters.add(k));
          chapterCheckboxes.forEach(cb => { cb.checked = false; });
        }
        masterCb.indeterminate = false;
        if (activeLink && !getVisibleLinks().includes(activeLink)) { activeLink = null; clearInfo(); }
        draw();
      });
 
     
      const toggleCollapse = (e) => {
        if (e.target === masterCb) return;
        chapContainer.classList.toggle("collapsed");
        toggleIcon.textContent = chapContainer.classList.contains("collapsed") ? "[+]" : "[-]";
      };
      masterRow.addEventListener("click", toggleCollapse);
 
      list.appendChild(chapContainer);
    });
 
    const secHeader3 = document.createElement("div");
    secHeader3.style.cssText = "background:#ddd;padding:3px 8px;font-weight:bold;font-size:11px;border-bottom:1px solid #000;border-top:1px solid #000;letter-spacing:0.5px;";
    secHeader3.textContent = "RELATION";
    list.appendChild(secHeader3);
  }
 
  getTypeMap().forEach(t => {
    const row = document.createElement("label");
    row.className = "filter-item";
 
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = !hiddenTypes.has(t.id);
    cb.addEventListener("change", () => {
      if (cb.checked) hiddenTypes.delete(t.id);
      else hiddenTypes.add(t.id);
      draw();
    });
 
    const swatch = document.createElement("div");
    swatch.className = "filter-swatch";
    swatch.style.backgroundColor = t.color;
 
    const lbl = document.createElement("span");
    lbl.className = "filter-label";
    lbl.textContent = t.label;
 
    row.appendChild(cb);
    row.appendChild(swatch);
    row.appendChild(lbl);
    list.appendChild(row);
  });
}
 
 
function showInfo(lk) {
  const ti = getTypeInfo(lk.type);
  const a = CHARACTERS.find(c => c.id === lk.a);
  const b = CHARACTERS.find(c => c.id === lk.b);
  document.getElementById("info-placeholder").style.display = "none";
  const ic = document.getElementById("info-content");
  ic.style.display = "block";
  const canonTag = lk.mode === "relationships"
    ? `<span style="display:inline-block;border:1px solid #000;padding:0 4px;font-size:10px;font-weight:bold;background:${lk.canon ? '#000' : '#fff'};color:${lk.canon ? '#fff' : '#000'};margin-left:6px">${lk.canon ? 'CANON' : 'THEORY'}</span>`
    : '';
  const editionTag = (lk.mode === "relationships" && lk.chapters)
    ? (() => {
       
        const byEd = {};
        lk.chapters.forEach(({ edition, chapter }) => {
          if (!byEd[edition]) byEd[edition] = [];
          byEd[edition].push(chapter);
        });
        return Object.entries(byEd).map(([ed, chs]) =>
          `<span style="display:inline-block;border:1px solid #555;padding:0 4px;font-size:10px;font-style:italic;color:#555;margin-left:4px">${ed} ${chs.join(", ")}</span>`
        ).join("");
      })()
    : '';
  ic.innerHTML = `
    <h2>${lk.title}${canonTag}${editionTag}</h2>
    <p>${lk.desc}</p>
    <p class="meta">${a.label} &mdash; ${b.label}</p>
    <p class="meta">Type: <strong style="color:${ti ? ti.color : '#000'}">${ti ? ti.label : lk.type}</strong></p>
  `;
}
 
function clearInfo() {
  if (activeLink) return;
  document.getElementById("info-placeholder").style.display = "";
  document.getElementById("info-content").style.display = "none";
}
 
 
function hitTestNode(mx, my) {
  for (let i = nodes.length - 1; i >= 0; i--) {
    const n = nodes[i];
    const d = Math.hypot(mx - n.x, my - n.y);
    if (d <= NODE_R + 2) return n;
  }
  return null;
}
 
function hitTestLink(mx, my) {
  const links = getVisibleLinks();
  const offsets = assignOffsets(links);
 
  for (let i = links.length - 1; i >= 0; i--) {
    const lk = links[i];
    const a = getNode(lk.a), b = getNode(lk.b);
    if (!a || !b) continue;
    const offset = offsets.get(lk) || 0;

    // Cas réflexif
    if (a === b) {
      const loopR = NODE_R * 1.1;
      const angle = -Math.PI / 2 + offset * 0.55;
      const dist = NODE_R + loopR;
      const lx = a.x + Math.cos(angle) * dist;
      const ly = a.y + Math.sin(angle) * dist;
      const d = Math.hypot(mx - lx, my - ly);
      if (Math.abs(d - loopR) < 7) return lk;
      continue;
    }

    const { cx, cy } = getControlPoint(a.x, a.y, b.x, b.y, offset);
   
    const steps = 40;
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const p = bezierPoint(a.x, a.y, cx, cy, b.x, b.y, t);
      if (Math.hypot(p.x - mx, p.y - my) < 7) return lk;
    }
  }
  return null;
}
 
 
const tooltip = document.getElementById("node-tooltip");
 
canvas.addEventListener("mousemove", e => {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left, my = e.clientY - rect.top;
 
  if (dragging) {
    dragging.x = mx + dragOffX;
    dragging.y = my + dragOffY;
    return;
  }
 
  const node = hitTestNode(mx, my);
  if (node) {
    tooltip.style.display = "block";
    tooltip.style.left = (mx + 12) + "px";
    tooltip.style.top = (my - 8) + "px";
    tooltip.textContent = node.label + " — " + node.desc.slice(0, 60) + (node.desc.length > 60 ? "…" : "");
    hoveredLink = null;
    canvas.style.cursor = "grab";
    draw();
    return;
  }
  tooltip.style.display = "none";
 
  const lk = hitTestLink(mx, my);
  if (lk !== hoveredLink) {
    hoveredLink = lk;
    if (lk && !activeLink) showInfo(lk);
    else if (!lk && !activeLink) clearInfo();
    draw();
  }
  canvas.style.cursor = lk ? "pointer" : "default";
});
 
canvas.addEventListener("mousedown", e => {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left, my = e.clientY - rect.top;
  const node = hitTestNode(mx, my);
  if (node) {
    dragging = node;
    dragOffX = node.x - mx;
    dragOffY = node.y - my;
    canvas.style.cursor = "grabbing";
  }
});
 
canvas.addEventListener("mouseup", e => {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left, my = e.clientY - rect.top;
  if (dragging) { dragging = null; canvas.style.cursor = "default"; return; }
 
  const lk = hitTestLink(mx, my);
  if (lk) {
    activeLink = (activeLink === lk) ? null : lk;
    if (activeLink) showInfo(activeLink);
    else clearInfo();
    draw();
  } else {
    activeLink = null;
    clearInfo();
    draw();
  }
});
 
canvas.addEventListener("mouseleave", () => {
  tooltip.style.display = "none";
  hoveredLink = null;
  dragging = null;
  if (!activeLink) clearInfo();
  draw();
});
 
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentMode = btn.dataset.mode;
    hiddenTypes.clear();
    hideCanon = false;
    hideTheory = false;
    hiddenChapters.clear();
    activeLink = null;
    hoveredLink = null;
    activePath = null;
    clearInfo();
    buildLegend();
    buildFilters();
    buildPathSelects();
    draw();
  });
});
 
 
function buildGraph() {
  const edges = RELATIONSHIPS.filter(lk => lk.mode === currentMode);
 
  const adj = new Map();
  CHARACTERS.forEach(c => adj.set(c.id, []));
  edges.forEach(lk => {
    const cost = (currentMode === "relationships" && !lk.canon) ? 1.5 : 1;
    adj.get(lk.a).push({ neighbor: lk.b, link: lk, cost });
    adj.get(lk.b).push({ neighbor: lk.a, link: lk, cost });
  });
  return adj;
}
 
function dijkstra(adj, startId) {
  const dist = new Map(), prev = new Map(), prevLink = new Map();
  const visited = new Set();
  CHARACTERS.forEach(c => dist.set(c.id, Infinity));
  dist.set(startId, 0);
 
 
  const queue = [{ id: startId, d: 0 }];
 
  while (queue.length) {
    queue.sort((a, b) => a.d - b.d);
    const { id: u } = queue.shift();
    if (visited.has(u)) continue;
    visited.add(u);
    for (const { neighbor: v, link, cost } of (adj.get(u) || [])) {
      const nd = dist.get(u) + cost;
      if (nd < dist.get(v)) {
        dist.set(v, nd);
        prev.set(v, u);
        prevLink.set(v, link);
        queue.push({ id: v, d: nd });
      }
    }
  }
  return { dist, prev, prevLink };
}
 
function findShortestPath(fromId, toId) {
  if (fromId === toId) return { path: [fromId], links: [], dist: 0 };
  const adj = buildGraph();
  const { dist, prev, prevLink } = dijkstra(adj, fromId);
  if (!isFinite(dist.get(toId))) return null;
  //if (lk.a === lk.b) return; // réflexivité
 
  const path = [], links = [];
  let cur = toId;
  while (cur !== fromId) {
    path.unshift(cur);
    links.unshift(prevLink.get(cur));
    cur = prev.get(cur);
  }
  path.unshift(fromId);
  return { path, links, dist: dist.get(toId) };
}
 
function buildPathSelects() {
  ["path-from", "path-to"].forEach((id, idx) => {
    const sel = document.getElementById(id);
    sel.innerHTML = "";
    CHARACTERS.forEach((c, i) => {
      const opt = document.createElement("option");
      opt.value = c.id;
      opt.textContent = c.label;
      if (i === idx) opt.selected = true;
      sel.appendChild(opt);
    });
  });
 
  document.getElementById("path-to").selectedIndex = 1;
}
 
function clearPath() {
  activePath = null;
  document.getElementById("path-result").innerHTML = "";
  draw();
}
 
function runPathfinder() {
  const fromId = document.getElementById("path-from").value;
  const toId   = document.getElementById("path-to").value;
  const result = document.getElementById("path-result");
 
  if (fromId === toId) {
    result.innerHTML = '<span class="path-err">Select two different characters.</span>';
    clearPath();
    return;
  }
 
  const res = findShortestPath(fromId, toId);
  if (!res) {
    result.innerHTML = '<span class="path-err">No path found between these characters in this mode.</span>';
    clearPath();
    return;
  }
 
 
  activePath = {
    nodes: new Set(res.path),
    links: new Set(res.links),
    res  
  };
 
 
  result.innerHTML = "";
 
  const hops = res.path.length - 1;
  const distDisplay = Number.isInteger(res.dist) ? res.dist : res.dist.toFixed(1);
  const summary = document.createElement("div");
  summary.style.marginBottom = "3px";
  let summaryHtml = `<strong>Distance: ${hops}${hops !== 1 ? 's' : ''}</strong>`;
  if (currentMode === "relationships" && res.dist !== hops) {
    summaryHtml += ` <span style="color:#888">(weighted ${distDisplay})</span>`;
  }
  summary.innerHTML = summaryHtml;
  result.appendChild(summary);
 
  res.path.forEach((nodeId, i) => {
    const char = CHARACTERS.find(c => c.id === nodeId);
 
    const stepDiv = document.createElement("div");
    stepDiv.className = "path-step";
    const dot = document.createElement("div");
    dot.className = "path-step-dot";
    dot.style.background = (i === 0 || i === res.path.length - 1) ? "#000" : "#fff";
    stepDiv.appendChild(dot);
    const nameSpan = document.createElement("span");
    nameSpan.textContent = char.label;
    stepDiv.appendChild(nameSpan);
    result.appendChild(stepDiv);
 
    if (i < res.links.length) {
      const lk = res.links[i];
      const ti = getTypeInfo(lk.type) || { color: "#000", label: lk.type };
      const canonTag = lk.mode === "relationships"
        ? ` <span style="font-size:9px;border:1px solid ${ti.color};padding:0 2px;color:${ti.color}">${lk.canon ? "C" : "T"}</span>`
        : "";
      const editionTag = (lk.mode === "relationships" && lk.chapters)
        ? (() => {
            const byEd = {};
            lk.chapters.forEach(({ edition, chapter }) => {
              if (!byEd[edition]) byEd[edition] = [];
              byEd[edition].push(chapter);
            });
            return Object.entries(byEd).map(([ed, chs]) =>
              ` <span style="font-size:9px;border:1px solid #999;padding:0 2px;color:#999;font-style:italic">${ed}: ${chs.join(", ")}</span>`
            ).join("");
          })()
        : "";
 
      const edgeDiv = document.createElement("div");
      edgeDiv.className = "path-edge-line";
      edgeDiv.style.borderColor = ti.color;
      edgeDiv.style.cursor = "pointer";
      edgeDiv.innerHTML = `<span style="color:${ti.color}">&#9472; ${ti.label}${canonTag}${editionTag}</span>`;
 
      edgeDiv.addEventListener("mouseenter", () => {
        showInfo(lk);
      });
      edgeDiv.addEventListener("mouseleave", () => {
       
        if (!activeLink) clearInfo();
      });
 
      result.appendChild(edgeDiv);
    }
  });
 
  const clearBtn = document.createElement("button");
  clearBtn.id = "path-clear";
  clearBtn.textContent = "CLEAR";
  clearBtn.addEventListener("click", clearPath);
  result.appendChild(clearBtn);
 
  draw();
}
 
document.getElementById("path-header").addEventListener("click", () => {
  const body = document.getElementById("path-body");
  const icon = document.getElementById("path-toggle-icon");
  const collapsed = body.classList.toggle("collapsed");
  icon.textContent = collapsed ? "+" : "-";
});
 
document.getElementById("path-run").addEventListener("click", runPathfinder);
 
 
window.addEventListener("resize", resize);
resize();
buildLegend();
buildFilters();
buildPathSelects();
physicsStep();
