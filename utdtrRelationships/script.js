

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
];


const REL_TYPES = [
  { id: "friend", label: "Amis",  color: "#2980b9", dash: false },
  { id: "love",       label: "Romance",    color: "#ff00f7", dash: false },
  { id: "enemy",      label: "Ennemis",     color: "#c0392b", dash: false  },
  { id: "family",     label: "Famille",      color: "#27ae60", dash: false },
  { id: "partners",     label: "Associés",      color: "#e0ed21", dash: false },
  { id: "unkown",     label: "Inconnu",      color: "#6e6e6e", dash: true },
];

const PAR_TYPES = [
  { id: "mirror",     label: "Miroir",      color: "#2980b9", dash: true  },
  { id: "like",       label: "Similarités",        color: "#c0392b", dash: true  },
];

const RELATIONSHIPS = [
  { a: "kris",   b: "susie",     type: "friend",       dir: "both", mode: "relationships", canon: true,
    title: "L'amitié entre Kris et Susie",
    desc: "Amis depuis la fin du Chapitre 1." },
  { a: "kris",   b: "noelle",     type: "friend",       dir: "both", mode: "relationships", canon: true,
    title: "L'amitié entre Kris et Noelle",
    desc: "Amis d'enfance." },
  { a: "noelle",   b: "susie",     type: "friend",       dir: "both", mode: "relationships", canon: true,
    title: "L'amitié entre Susie et Noelle",
    desc: "Amis depuis le Chapitre 2." },
  { a: "susie",   b: "ralsei",     type: "friend",       dir: "both", mode: "relationships", canon: true,
    title: "L'amitié entre Susie et Ralsei",
    desc: "Amis depuis le Chapitre 1." },
  { a: "kris",   b: "ralsei",     type: "friend",       dir: "both", mode: "relationships", canon: true,
    title: "L'amitié entre Kris et Ralsei",
    desc: "Amis depuis le Chapitre 1." },
  { a: "berdly",   b: "kris",     type: "friend",       dir: "both", mode: "relationships", canon: true,
    title: "L'amitié entre Kris et Berdly",
    desc: "Amis d'enfance." },
  { a: "noelle",   b: "berdly",     type: "friend",       dir: "both", mode: "relationships", canon: true,
    title: "L'amitié entre Noelle et Berdly",
    desc: "Amis d'enfance et camarades de classe." },
  { a: "lancer",   b: "susie",     type: "friend",       dir: "both", mode: "relationships", canon: true,
    title: "L'amitié entre Lancer et Susie",
    desc: "Amis depuis le milieu du Chapitre 1." },
  { a: "tenna",   b: "kris",     type: "family",       dir: "a->b", mode: "relationships", canon: true,
    title: "TV Time",
    desc: "Tenna est la télévision familiale des Dreemurr, et veut divertir Kris comme au bon vieux temps." },
  { a: "spamton",   b: "noelle",     type: "friend",       dir: "a->b", mode: "relationships", canon: true,
    title: "Pipis",
    desc: "Comme Noelle était la seul personne lisant ses spams, Spamton est devenus amis avec Noelle est lui a offert un pipis." },
  { a: "tenna",   b: "kris",     type: "partners",       dir: "none", mode: "relationships", canon: true,
    title: "Notre deal",
    desc: "Kris a conclu un deal avec Tenna pour aider le Roaring Knight." },
  { a: "spamton",   b: "tenna",     type: "enemy",       dir: "both", mode: "relationships", canon: true,
    title: "Rupture du contract",
    desc: "Un événement tragique s'est produit après la signature du contrat de Tenna par Spamton, le contraignant à fuir TV World. Chacun était convaincu d'avoir été escroqué par l'autre." },
  { a: "spamton",   b: "tenna",     type: "love",       dir: "both", mode: "relationships", canon: false,
    title: "Spamtenna",
    desc: "Le ship entre Spamton et Tenna est le ship le plus populaire de Deltarune. Leur obsessions pour chacun, le fait que leur séparation soit un quiproquo, et de nombreux autres indices dans le jeu et ses fichiers laissent penser que Spamton et Tenna sont encore amoureux, rendant ce ship très populaire." },
  { a: "noelle",   b: "susie",     type: "love",       dir: "a->b", mode: "relationships", canon: true,
    title: "Suselle",
    desc: "Noelle crush sur Susie depuis son arrivée." },
  { a: "berdly",   b: "susie",     type: "love",       dir: "a->b", mode: "relationships", canon: true,
    title: "Berdsie",
    desc: "Berdly veut rizz Susie dans le Chapitre 2." },
  { a: "kris",   b: "susie",     type: "love",       dir: "a->b", mode: "relationships", canon: false,
    title: "Krusie",
    desc: "Le comportement de Kris avec Susie dans certaines scènes peu laisser penser que Kris crush sur Susie." },
  { a: "ralsei",   b: "kris",     type: "love",       dir: "a->b", mode: "relationships", canon: false,
    title: "Kralsei",
    desc: "Le comportement de Ralsei avec Kris dans certaines scènes peu laisser penser que Ralsei crush sur Kris." },
  { a: "berdly",   b: "kris",     type: "love",       dir: "a->b", mode: "relationships", canon: false,
    title: "Kerdly",
    desc: "L'obsession de Berdly pour Kris ainsi que son invitation au festival peu laisser penser que Berdly crush sur Kris." },
  { a: "friend",   b: "gaster",     type: "partners",       dir: "none", mode: "relationships", canon: false,
    title: "DEVICE_FRIEND",
    desc: "Friend est classé comme un DEVICE dans le code du jeu, comme des objets associés avec Gaster tels que le goner maker de l'introduction." },
  { a: "friend",   b: "dess",     type: "unkown",       dir: "none", mode: "relationships", canon: false,
    title: "The poor childrens",
    desc: "Friend est le premier suspect dans la disparition de December, même si les raisons de cette enlèvement sont encore flous." },
  { a: "noelle",   b: "friend",     type: "friend",       dir: "a->b", mode: "relationships", canon: false,
    title: "Cat Petterz 2",
    desc: "Il est probable que le chat étrange glitché élevé par Noelle dans Cat Petterz 2 sois FRIEND." },
  { a: "friend",   b: "spamton",     type: "unkown",       dir: "a->b", mode: "relationships", canon: false,
    title: "Bénéfacteur",
    desc: "Si FRIEND est bien Mike, et que Mike est bien le bénéfacteur de Spamton, alors FRIEND aurais voulu l'aider avant de l'abandonner, pour une raison encore flous." },
  { a: "gaster",   b: "kris",     type: "partners",       dir: "both", mode: "relationships", canon: false,
    title: "Patient",
    desc: "Si Gaster est l'homme oublié, il est aussi surement l'ancien psychologue de Kris." },
  { a: "gaster",   b: "ralsei",     type: "family",       dir: "none", mode: "relationships", canon: false,
    title: "Création",
    desc: "Dus aux propriétés étrange de Ralsei, semblant comprendre et connaitre des éléments du jeu fait uniquement pour le joueur par Gaster, il est possible que Gaster ait crée Ralsei d'une certaine manière, par exemple en créant la prophétie." },
  { a: "tenna",   b: "friend",     type: "partners",       dir: "a->b", mode: "relationships", canon: false,
    title: "Mike",
    desc: "Si Mike est FRIEND, Tenna semble le connaitre et pense qu'il travaille maintenant pour lui. C'est peut être aussi pour ça que Pluey semble être son Mike favoris." },
  { a: "friend",   b: "kris",     type: "unkown",       dir: "a->b", mode: "relationships", canon: false,
    title: "SWORD_ROUTE",
    desc: "Si FRIEND est bien celui ayant donner la manette a Kris et mis en place la sword route, il doit connaitre personnellement Kris et vouloir qu'iel accomplisse la weird route pour une certaine raison encore flou." },
  { a: "asriel",   b: "kris",     type: "family",       dir: "none", mode: "relationships", canon: true,
    title: "Frère et adèlphe",
    desc: "Asriel et Kris sont dans la famille Dreemurr." },
  { a: "asriel",   b: "dess",     type: "friend",       dir: "both", mode: "relationships", canon: true,
    title: "Amitié",
    desc: "Asriel et December semblent avoir été amis proche avant sa disparition." },
  { a: "dess",   b: "kris",     type: "friend",       dir: "both", mode: "relationships", canon: true,
    title: "Amitié",
    desc: "December était amis avec Kris, jouant dans la foret avec Noelle et Asriel." },
  { a: "tenna",   b: "asriel",     type: "family",       dir: "a->b", mode: "relationships", canon: true,
    title: "TV Time",
    desc: "Tenna est la télévision familiale des Dreemurr, et est nostalgique de l'époque ou Asriel s'amusait avec Kris devant la télévision." },
  { a: "tenna",   b: "dess",     type: "friend",       dir: "a->b", mode: "relationships", canon: true,
    title: "Dess goon theory",
    desc: "Tenna est nostalgique de l'époque ou December regardais des émission de rock pas de son age a la télévision." },
  { a: "noelle",   b: "dess",     type: "family",       dir: "none", mode: "relationships", canon: true,
    title: "Soeurs",
    desc: "Noelle et Decemebr sont de la famille Holiday." },
  { a: "asriel",   b: "dess",     type: "love",       dir: "both", mode: "relationships", canon: false,
    title: "Dessriel",
    desc: "La proximité de Asriel et December ainsi que certains détails trouvable laisse penser que leur relation aurais pu être romantique." },


  
  { a: "spamton",   b: "kris",     type: "like",     dir: "none", mode: "parallels",
    title: "La liberté",
    desc: "Spamton et Kris ne se sentent pas libre, controlés par des forces supérieurs, et voudrais se libérer. Ils sont pourtant dépendant de cette entité, et ne saurais surement pas comment faire sans elle." },
  { a: "spamton",     b: "tenna",    type: "like",       dir: "none", mode: "parallels",
    title: "La chute et l'abandon",
    desc: "Spamton et Tenna sont des hommes d'affaire verreux ayant eux beacoups de succès. Malheuresement ils ont chuter depuis leur heure de gloire, et se sont fait lacher par des êtres cher par le passé leur donnant une peur de l'abandon." },
  { a: "ralsei", b: "lancer",   type: "like",       dir: "none", mode: "parallels",
    title: "Princes des ténèbres",
    desc: "Ralsei et Lancer sont des princes des ténèbres solitaires, attendant l'arrivée des lightners." },
  { a: "berdly",   b: "spamton",    type: "like",      dir: "none", mode: "parallels",
    title: "Carry",
    desc: "Berdly et Spamton ont obtenus leur succès en parti grace a l'aide d'un bénéfacteur pouvant les abandonner, ce qui est une de leur crainte." },
  { a: "kris",     b: "berdly",    type: "like",      dir: "none", mode: "parallels",
    title: "Autistes",
    desc: "Ils sont autistes pour résumer." },
  { a: "noelle",    b: "susie",    type: "mirror",      dir: "none", mode: "parallels",
    title: "Peur",
    desc: "Noelle a peur de tout, et sa gentilesse cache une grande force, la ou Susie fait peur a tout le monde, mais sa force cache une grande gentilesse." },
  { a: "kris",    b: "lancer",    type: "like",      dir: "none", mode: "parallels",
    title: "Traitres",
    desc: "Kris et Lancer sont amis de Susie, mais doivent la trahir pour obéir aux ordres (indirectes dans le cas de Lancer) du Knight." },
  { a: "ralsei",    b: "spamton",    type: "like",      dir: "none", mode: "parallels",
    title: "Paradis",
    desc: "Ralsei et Spamton sont les seuls darkners a mentionner l'ange, l'âme et le paradis directement. Ils sont maudits par leur destiné et leur connaissance de cette destiné. Ils utilisent également out deux des versions miniatures et angéliques d'eux même pour soigner les delta warriors." },
  { a: "ralsei",    b: "kris",    type: "like",      dir: "none", mode: "parallels",
    title: "L'âme",
    desc: "Ralsei et Kris cachent de nombreuses choses a Susie comme l'âme, notre présence, la weird route, ou les véritables enjeux en général. Ils sont solitaires et utilisés par des forces supérieurs pour accomplir un plan sans se soucier de leur libre arbitre. En plus elles sont trans mais brf." },
  { a: "noelle",    b: "kris",    type: "mirror",      dir: "none", mode: "parallels",
    title: "Ange et démon",
    desc: "Noelle est principalement associés avec des imageries angéliques et religieuses, la ou Kris est associés avec des imageries sataniques et profanes." },
  { a: "susie",    b: "kris",    type: "like",      dir: "none", mode: "parallels",
    title: "écartés",
    desc: "Susie et Kris sont solitaires et sont mis a l'écart de la société. Elles ont toutes les deux des problèmes avec la violence contre les autres et contre eux même. Susie craint également la fin et le changement ce qui pourrais la lier a l'aspect plus nostalgique supposé de Kris." },
  { a: "dess",    b: "asriel",    type: "like",      dir: "none", mode: "parallels",
    title: "Disparus",
    desc: "December et Asriel sont deux personnages important de la vie de Kris qui ont fini par s'éloigner. Ils disparaissent dans leur jeu respectif, ce qui est l'élément déclancheur de l'histoire." },
  { a: "dess",    b: "susie",    type: "like",      dir: "none", mode: "parallels",
    title: "Lost girls",
    desc: "Filles rebelles avec tendence violentes qui se plongent dans l'évasion. Associés avec une guitar et la musique Lost Girl." },
  { a: "asriel",    b: "ralsei",    type: "like",      dir: "none", mode: "parallels",
    title: "Asriel dust theory",
    desc: "Asriel et Ralsei sont des anagrammes. Ralsei a aussi une apparence de chêvre semblable a Asriel jeune. Ils servent d'introduction au nouveau monde dans le quel le jeu se passe, ainsi qu'a l'âme et au système de combat. Ils se présentent comme gentils." },
  { a: "ralsei",    b: "friend",    type: "mirror",      dir: "none", mode: "parallels",
    title: "Politesse et honnêteté",
    desc: "Ralsei connais beacoups de choses sur le monde, et essaie de le cacher pour ne pas blesser les gens. FRIEND va par contre rêvéler toute la vérité pour avoir plus de contrôle. Ralsei souffre de la prophétie mais a peur de la changer, la ou FRIEND n'est pas contraint par la prophétie mais incite a la changer." },
  { a: "ralsei",    b: "tenna",    type: "like",      dir: "none", mode: "parallels",
    title: "Esclaves",
    desc: "Ralsei et Tenna sont des darkners réduisant leur valeur a leur tache de servir les lightners." },
  { a: "ralsei",    b: "gaster",    type: "like",      dir: "none", mode: "parallels",
    title: "Green and inbetween",
    desc: "Ralsei et Gaster sont verts, au milieu, souvent oubliés, associés avec les ténèbres et la prophétie, et ils parlent de darker than dark." },
];


 
let currentMode = "relationships";
let hiddenTypes = new Set();
let hideCanon = false;
let hideTheory = false;
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
    if (!a || !b) return;
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
    drawEdge(a, b, ti.color, ti.dash, lk.dir, isActive, lk.canon, offsets.get(lk) || 0);
  });
 
  nodes.forEach(n => drawNode(n));
}
 
function drawEdge(a, b, color, dash, dir, highlight, canon, offset) {
  const { cx, cy } = getControlPoint(a.x, a.y, b.x, b.y, offset);
 
  const tStart = bezierTrimT(a.x, a.y, cx, cy, b.x, b.y, false);
  const tEnd   = bezierTrimT(a.x, a.y, cx, cy, b.x, b.y, true);
 
  const pStart = bezierPoint(a.x, a.y, cx, cy, b.x, b.y, tStart);
  const pEnd   = bezierPoint(a.x, a.y, cx, cy, b.x, b.y, tEnd);
 
  ctx.save();
  ctx.globalAlpha = canon ? 1 : 0.55;
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
 
function drawNode(n) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(n.x, n.y, NODE_R, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;
  ctx.stroke();
 
  ctx.fillStyle = "#000";
  ctx.font = "bold 11px 'Courier New', Courier, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  
  const label = n.label.length > 7 ? n.label.slice(0, 6) + "." : n.label;
  ctx.fillText(label, n.x, n.y);
  ctx.restore();
}
 

 
function buildLegend() {
  const legend = document.getElementById("legend");
  legend.innerHTML = '';
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
    secHeader2.style.cssText = "background:#ddd;padding:3px 8px;font-weight:bold;font-size:11px;border-bottom:1px solid #000;border-top:1px solid #000;letter-spacing:0.5px;";
    secHeader2.textContent = "TYPE DE CONNECTION";
    list.appendChild(secHeader2);
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
  ic.innerHTML = `
    <h2>${lk.title}${canonTag}</h2>
    <p>${lk.desc}</p>
    <p class="meta">${a.label} &mdash; ${b.label}</p>
    <p class="meta">Type: <strong style="color:${ti.color}">${ti.label}</strong></p>
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
    activeLink = null;
    hoveredLink = null;
    clearInfo();
    buildLegend();
    buildFilters();
    draw();
  });
});
 

 
window.addEventListener("resize", resize);
resize();
buildLegend();
buildFilters();
physicsStep();