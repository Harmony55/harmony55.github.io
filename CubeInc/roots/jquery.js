const svg = document.getElementById("1F9AB");
let nodeId = 0;

const LEVEL_GAP = 120;
const SIBLING_GAP = 90;
const NODE_SIZE = 50;

let nodes = [
  { id: nodeId++, x: window.innerWidth / 2, y: 120, parent: null }
];

function draw() {
  svg.innerHTML = "";

 
  nodes.forEach(n => {
    if (n.parent !== null) {
      const parent = nodes.find(p => p.id === n.parent);
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", parent.x);
      line.setAttribute("y1", parent.y);
      line.setAttribute("x2", n.x);
      line.setAttribute("y2", n.y);
      svg.appendChild(line);
    }
  });

 
  nodes.forEach(n => {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", n.x - NODE_SIZE / 2);
    rect.setAttribute("y", n.y - NODE_SIZE / 2);
    rect.setAttribute("width", NODE_SIZE);
    rect.setAttribute("height", NODE_SIZE);
    rect.setAttribute("class", "node");

    rect.addEventListener("click", e => {
      e.stopPropagation();
      addChildren(n);
    });

    svg.appendChild(rect);
  });
}

function addChildren(parent) {
  if (expanded.has(parent.id)) return;
  expanded.add(parent.id);

  const count = Math.floor(Math.random() * 3) + 1;

 
  const spread = SIBLING_GAP * 2.2;
  const startX = parent.x - ((count - 1) * spread) / 2;

  for (let i = 0; i < count; i++) {
    const jitter = (Math.random() - 0.5) * 80;
    nodes.push({
      id: nodeId++,
      x: startX + i * spread + jitter,
      y: parent.y + LEVEL_GAP,
      parent: parent.id
    });
  }

  draw();
}

draw();
let viewY = 0;
svg.setAttribute("viewBox", `0 ${viewY} ${window.innerWidth} ${window.innerHeight}`);

document.addEventListener("wheel", e => {
  viewY += e.deltaY;
  svg.setAttribute("viewBox", `0 ${viewY} ${window.innerWidth} ${window.innerHeight}`);
});

let expanded = new Set();

function addChildren(parent) {
  if (expanded.has(parent.id)) return;
  expanded.add(parent.id);

 
  const count = Math.floor(Math.random() * 3) + 1;

 
  const spread = SIBLING_GAP * 1.4;
  const startX = parent.x - ((count - 1) * spread) / 2;

  for (let i = 0; i < count; i++) {
    const jitter = (Math.random() - 0.5) * 40;
    nodes.push({
      id: nodeId++,
      x: startX + i * spread + jitter,
      y: parent.y + LEVEL_GAP,
      parent: parent.id
    });
  }

  draw();
}

const collapseDepth = Math.floor(Math.random() * 11) + 10;
let collapsed = false;
let collapseInProgress = false;

const collapseSound = new Audio('Berdly.mp3');
collapseSound.load();

function collapseTree() {
  if (collapseInProgress || collapsed) return;
  collapseInProgress = true;

  const targetX = window.innerWidth / 2;
  const duration = 1200;
  const startTime = performance.now();

  const initialPositions = nodes.map(n => ({ id: n.id, x: n.x, y: n.y }));

  function animateCollapse(time) {
    const t = Math.min((time - startTime) / duration, 1);

    nodes.forEach((n, i) => {
      const start = initialPositions[i];
      n.x = start.x + (targetX - start.x) * t;
    });

    draw();

    if (t < 1) requestAnimationFrame(animateCollapse);
    else {
      collapsed = true;
      collapseInProgress = false;
    }
  }

  requestAnimationFrame(animateCollapse);
}

function addChildren(parent) {

  const depth = parent.y / LEVEL_GAP;
  if (!collapsed && depth >= collapseDepth) {
    collapseSound.play();
    collapseTree();
    return;
  }

  if (expanded.has(parent.id)) return;
  expanded.add(parent.id);

  var count = Math.floor(Math.random() * 3) + 1;
  if (collapsed) {
    count = 1;
  }
  let startX = parent.x - ((count - 1) * SIBLING_GAP) / 2;

  if (count !== 2) {
    for (let i = 0; i < count; i++) {
      nodes.push({ id: nodeId++, x: startX + i * SIBLING_GAP, y: parent.y + LEVEL_GAP, parent: parent.id });
    }
  } else {
    startX = parent.x - ((3 - 1) * SIBLING_GAP) / 2;
    nodes.push({ id: nodeId++, x: startX, y: parent.y + LEVEL_GAP, parent: parent.id });
    nodes.push({ id: nodeId++, x: startX + 2 * SIBLING_GAP, y: parent.y + LEVEL_GAP, parent: parent.id });
  }

  draw();

}
