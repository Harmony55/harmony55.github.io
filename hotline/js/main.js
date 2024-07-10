import { sleep, compareColors, getClosestColor, range, isColliding } from './functions.js';

let cnv = document.getElementById('myCanvas');
let ctx = cnv.getContext('2d');

ctx.imageSmoothingEnabled = false;

let img = new Image();
let avion = new Image();
let col = new Image();
let laser = new Image();
let impact = new Image();
let background = new Image();
let windows = new Image();
let tutosoak = new Image();
let arrows = new Image();
let keysImage = new Image();

let collide = new Image();

let shownMap = new Image();

let towels = [ 
[new Image(),new Image()],
[new Image(),new Image()]
];


let steps = new Image();
steps.class = "sand";
steps.src = "./assets/animations/decorations/steps.png";

let grass = new Image();
grass.class = "sand";
grass.src = "./assets/animations/decorations/grass.png";

let pebbles = new Image();
pebbles.class = "sand";
pebbles.src = "./assets/animations/decorations/pebbles.png";

let starfish = new Image();
starfish.class = "sand";
starfish.src = "./assets/animations/decorations/starfish.png";

let starfishmiss = new Image();
starfishmiss.class = "sand";
starfishmiss.src = "./assets/animations/decorations/starfishmiss.png";

let stick = new Image();
stick.class = "sand";
stick.src = "./assets/animations/decorations/stick.png";

let sand = new Image();
sand.class = "sand";

let left = new Image();
left.src = "./assets/UI/left.png";

let right = new Image();
right.src = "./assets/UI/right.png";

let ok = new Image();
ok.src = "./assets/UI/okBase.png";

let water = new Image();
water.class = "water";

let waterOverlay = new Image();

let watergun = new Image();
let waterstream = new Image();

let sandsInner = [ 
[new Image(),new Image(),new Image() ],
[new Image(),new Image(),new Image() ],
[new Image(),new Image(),new Image() ]
];

let sandsOutter = [ 
[new Image(),new Image(),new Image() ],
[new Image(),new Image(),new Image() ],
[new Image(),new Image(),new Image() ]
];

let sandToWet = [ 
[new Image(),new Image(),new Image() ],
[new Image(),new Image(),new Image() ],
[new Image(),new Image(),new Image() ]
];

let sandToWetCorners = [ 
[new Image(),new Image()],
[new Image(),new Image()]
];

let player = {
  x: 200,
  y: 110,
  rel_x: cnv.width/2,
  rel_y: cnv.height/2
};

let zoom = 3;
const camera = {
    get x () {
        return -(cnv.width / 2 - (player.x*zoom));
    },
    get y () {
        return -(cnv.height / 2 - (player.y*zoom));
    }
};

let map = [

]

var heldKeys = []

let size = (26*zoom);
let size_avion = (3);
const speed = 3;

function showText(size, text, x, y, color, outlineColor, outlineThickness){
  ctx.fillStyle = outlineColor;

  ctx.font = size+'px LuckiestGirl, Arial';

  var textPosX = x;
  var textPosY = y;

  ctx.fillText(text, textPosX - outlineThickness, textPosY - outlineThickness);
  ctx.fillText(text, textPosX + outlineThickness, textPosY - outlineThickness);
  ctx.fillText(text, textPosX - outlineThickness, textPosY + outlineThickness);
  ctx.fillText(text, textPosX + outlineThickness, textPosY + outlineThickness);

  ctx.fillStyle = color;
  ctx.fillText(text, textPosX, textPosY);
}

function addMap(x, y, val){
  if(map[y]){
    map[y].push(val);
  }
  else{
    map.push([val]);
  }
}

let recordOfKeys = [];


sandsOutter[0][0].class = "shore";
sandsOutter[0][1].class = "shore";
sandsOutter[0][2].class = "shore";
sandsOutter[1][0].class = "shore";
sandsOutter[1][1].class = "shore";
sandsOutter[1][2].class = "shore";
sandsOutter[2][0].class = "shore";
sandsOutter[2][1].class = "shore";
sandsOutter[2][2].class = "shore";


sandsOutter[0][0].src = "./assets/animations/tiles/sand/wetsand_top_left_outter_0.png";
sandsOutter[0][2].src = "./assets/animations/tiles/sand/wetsand_top_right_outter_0.png";
sandsOutter[2][0].src = "./assets/animations/tiles/sand/wetsand_bottom_left_outter_0.png";
sandsOutter[2][2].src = "./assets/animations/tiles/sand/wetsand_bottom_right_outter_0.png";


sandsInner[0][0].class = "shore";
sandsInner[0][1].class = "shore";
sandsInner[0][2].class = "shore";
sandsInner[1][0].class = "shore";
sandsInner[1][1].class = "shore";
sandsInner[1][2].class = "shore";
sandsInner[2][0].class = "shore";
sandsInner[2][1].class = "shore";
sandsInner[2][2].class = "shore";

sandsInner[0][0].src = "./assets/animations/tiles/sand/wetsand_top_left_inner_0.png";
sandsInner[0][1].src = "./assets/animations/tiles/sand/wetsand_top_center_inner_0.png";
sandsInner[0][2].src = "./assets/animations/tiles/sand/wetsand_top_right_inner_0.png";
sandsInner[1][0].src = "./assets/animations/tiles/sand/wetsand_center_left_inner_0.png";
sandsInner[1][2].src = "./assets/animations/tiles/sand/wetsand_center_right_inner_0.png";
sandsInner[2][0].src = "./assets/animations/tiles/sand/wetsand_bottom_left_inner_0.png";
sandsInner[2][1].src = "./assets/animations/tiles/sand/wetsand_bottom_center_inner_0.png";
sandsInner[2][2].src = "./assets/animations/tiles/sand/wetsand_bottom_right_inner_0.png";


sandToWetCorners[0][0].class = "wet";
sandToWetCorners[0][1].class = "wet";
sandToWetCorners[1][0].class = "wet";
sandToWetCorners[1][1].class = "wet";


sandToWetCorners[0][0].src = "./assets/animations/tiles/wetsand/sandtowet_corner_top_left.png";
sandToWetCorners[0][1].src = "./assets/animations/tiles/wetsand/sandtowet_corner_top_right.png";
sandToWetCorners[1][0].src = "./assets/animations/tiles/wetsand/sandtowet_corner_bottom_left.png";
sandToWetCorners[1][1].src = "./assets/animations/tiles/wetsand/sandtowet_corner_bottom_right.png";


sandToWet[2][0].class = "wet";
sandToWet[2][1].class = "wet";
sandToWet[2][2].class = "wet";
sandToWet[0][0].class = "wet";

sandToWet[0][0].src = "./assets/animations/tiles/wetsand/sandtowet_top_left.png";
sandToWet[0][1].src = "./assets/animations/tiles/wetsand/sandtowet_top_middle.png";
sandToWet[0][2].src = "./assets/animations/tiles/wetsand/sandtowet_top_right.png";
sandToWet[1][0].src = "./assets/animations/tiles/wetsand/sandtowet_center_left.png";
sandToWet[1][2].src = "./assets/animations/tiles/wetsand/sandtowet_center_right.png";
sandToWet[2][0].src = "./assets/animations/tiles/wetsand/sandtowet_bottom_left.png";
sandToWet[2][1].src = "./assets/animations/tiles/wetsand/sandtowet_bottom_middle.png";
sandToWet[2][2].src = "./assets/animations/tiles/wetsand/sandtowet_bottom_right.png";


towels[0][0].class = "sand";
towels[0][1].class = "sand";
towels[1][0].class = "sand";
towels[1][1].class = "sand";

towels[0][0].src = "./assets/animations/decorations/towel_top_left.png";
towels[0][1].src = "./assets/animations/decorations/towel_top_right.png";
towels[1][0].src = "./assets/animations/decorations/towel_bottom_left.png";
towels[1][1].src = "./assets/animations/decorations/towel_bottom_right.png";

var animations = [
[ [],[],[]  ],
[ [],[],[]  ],
[ [],[],[]  ]
];

let carte = new Image();
let indicator = new Image();
indicator.src = "./assets/animations/player/indicator.png";


function mapMake(imagePath){
  let img = new Image();
  img.src = imagePath;
  img.onload = function() {
    let canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height);
    for (let y = 0; y < img.height; y++) {
      for (let x = 0; x < img.width; x++) {
        let pixelData = ctx.getImageData(x, y, 1, 1).data;
        let pixelDataBottomLeft = ctx.getImageData(x+1, y+1, 1, 1).data;
        let pixelDataBottomRight = ctx.getImageData(x-1, y+1, 1, 1).data;
        let pixelDataRight = ctx.getImageData(x+1, y, 1, 1).data;
        let pixelDataLeft = ctx.getImageData(x-1, y, 1, 1).data;
        let pixelDataBottom = ctx.getImageData(x, y+1, 1, 1).data;
        let pixelDataTop = ctx.getImageData(x, y-1, 1, 1).data;
        let pixelDataTopRight = ctx.getImageData(x+1, y-1, 1, 1).data;
        let pixelDataTopLeft  = ctx.getImageData(x-1, y-1, 1, 1).data;
        let rgba = 'rgba(' + pixelData[0] + ',' + pixelData[1] + ',' + pixelData[2] + ',' + pixelData[3] + ')';
        
        const blue = new Uint8ClampedArray([34, 0, 255, 255]);
        const yellow = new Uint8ClampedArray([255, 246, 0, 255]);
        const green = new Uint8ClampedArray([0, 255, 0, 255]);
        const red = new Uint8ClampedArray([255, 0, 0, 255]);
        const cyan = new Uint8ClampedArray([0, 255, 255, 255]);


        var save = pixelDataLeft
        pixelData = getClosestColor(pixelData);
        pixelDataBottomLeft = getClosestColor(pixelDataBottomLeft);
        pixelDataBottomRight = getClosestColor(pixelDataBottomRight);
        pixelDataBottom = getClosestColor(pixelDataBottom);
        pixelDataRight = getClosestColor(pixelDataRight);
        pixelDataLeft = getClosestColor(pixelDataLeft);
        pixelDataTop = getClosestColor(pixelDataTop);
        pixelDataTopRight = getClosestColor(pixelDataTopRight);
        pixelDataTopLeft = getClosestColor(pixelDataTopLeft);
        
        if (compareColors(pixelData, yellow)){
          if(compareColors(pixelDataBottomLeft, blue) && compareColors(pixelDataRight, yellow) && compareColors(pixelDataBottom, yellow)){
            addMap(x,y, sandsInner[0][0]);
          }
          else if(!compareColors(pixelDataLeft, blue) && !compareColors(pixelDataRight, blue) && compareColors(pixelDataBottom, blue)){
            addMap(x,y, sandsInner[0][1]); 
          }
          else if(compareColors(pixelDataBottomRight, blue) && compareColors(pixelDataLeft, yellow) && compareColors(pixelDataBottom, yellow)){
            addMap(x,y, sandsInner[0][2]); 
          } 
          else if(compareColors(pixelDataBottomRight, blue) && compareColors(pixelDataLeft, blue) && compareColors(pixelDataBottom, blue)){
            addMap(x,y, sandsOutter[2][0]); 
          } 
          else if(compareColors(pixelDataBottomLeft, blue) && compareColors(pixelDataRight, blue) && compareColors(pixelDataBottom, blue)){
            addMap(x,y, sandsOutter[2][2]); 
          }
          else if(compareColors(pixelDataLeft, blue) && compareColors(pixelDataTop, yellow) && compareColors(pixelDataBottom, yellow)){
            addMap(x,y, sandsInner[1][2]); 
          }
          else if(compareColors(pixelDataTopLeft, blue) && compareColors(pixelDataTop, yellow)){
            addMap(x,y, sandsInner[2][2]);
          }
          else if(compareColors(pixelDataTopLeft, blue) && compareColors(pixelDataTop, blue) && compareColors(pixelDataLeft, blue)){
            addMap(x,y, sandsOutter[0][0]);
          }
          else if(compareColors(pixelDataTop, blue) && compareColors(pixelDataLeft, yellow) && compareColors(pixelDataRight, yellow)){
            addMap(x,y, sandsInner[2][1]);
          }
          else if(compareColors(pixelDataTopRight, blue) && compareColors(pixelDataTop, blue) && compareColors(pixelDataRight, blue)){
            addMap(x,y, sandsOutter[0][2]);
          }
          else if(compareColors(pixelDataTopRight, blue) && compareColors(pixelDataTop, yellow) && compareColors(pixelDataRight, yellow)){
            addMap(x,y, sandsInner[2][0]);
          }
          else if(compareColors(pixelDataRight, blue) && compareColors(pixelDataTop, yellow) && compareColors(pixelDataBottom, yellow)){
            addMap(x,y, sandsInner[1][0]);
          }
          else{
            if(Math.random() < 0.05){
              const textures = [pebbles, grass, starfish, steps, stick, starfishmiss];
              const randomIndex = Math.floor(Math.random() * textures.length);
              addMap(x, y, textures[randomIndex]);
            }
            else{
              addMap(x, y, sand);
            }
          }
        }
        else if(compareColors(pixelData, green)){
          player.x = x*16;
          player.y = y*16;
          addMap(x, y, sand);
        }
        else if(compareColors(pixelData, cyan)){
          if(compareColors(pixelDataTop, cyan) && compareColors(pixelDataRight, cyan)){
            addMap(x, y, towels[1][0]);
          }
          else if(compareColors(pixelDataTop, cyan) && compareColors(pixelDataLeft, cyan)){
            addMap(x, y, towels[1][1]); 
          }
          else if(compareColors(pixelDataBottom, cyan) && compareColors(pixelDataLeft, cyan)){
            addMap(x, y, towels[0][1]); 
          }
          else if(compareColors(pixelDataBottom, cyan) && compareColors(pixelDataRight, cyan)){
            addMap(x, y, towels[0][0]); 
          }
        }
        else if(compareColors(pixelData, red)){
          addNpc(x*16*3, y*16*3, 255, "./assets/pnj/vieille.png");
          addMap(x, y, sand);
        }
        else{
          addMap(x, y, water);
        }
      }
    }

  carte = img;


    for (let y = 0; y < map.length; y++){
      for (let x = 0; x < map[0].length; x++){

        let value_class = 0;
        if(map[y][x]){
          value_class = map[y][x].class;
        }

        let right_class = 0
        if(map[y][x+1]){
          right_class = map[y][x+1].class;
        }


        let left_class = 0
        if(map[y][x-1]){
          left_class = map[y][x-1].class;
        }

        let bottom_class = 0
        
        try{
          bottom_class = map[y+1][x].class;
        }
        catch(error){

        }

        let top_class = 0
        if(map[Math.max(y-1, 0)][x]){
          top_class = map[Math.max(y-1, 0)][x].class;
        }

        let top_left_class = 0;
        if(map[Math.max(y-1, 0)][x-1]){
          top_left_class = map[Math.max(y-1, 0)][x-1].class;
        }

        let top_right_class = 0;
        if(map[Math.max(y-1, 0)][x+1]){
          top_right_class = map[Math.max(y-1, 0)][x+1].class;
        }

        let bottom_left_class = 0;
        if(map[y+1][x-1]){
          bottom_left_class = map[y+1][x-1].class;
        }

        let bottom_right_class = 0;
        if(map[y+1][x+1]){
          bottom_right_class = map[y+1][x+1].class;
        }
        
        if(value_class == "sand"){
          if(right_class == "shore" && bottom_class == "shore" && bottom_right_class == "shore"){
            map[y][x] = sandToWet[2][2];
          }
          else if(right_class != "shore" && bottom_class == "shore" && left_class != "shore"){
            map[y][x] = sandToWet[2][1];
          }
          else if(left_class == "shore" && bottom_class == "shore" && bottom_left_class == "shore"){
            map[y][x] = sandToWet[2][0];
          }
          else if(left_class == "shore" && bottom_class != "shore" && top_class != "shore"){
            map[y][x] = sandToWet[1][0];
          }
          else if(top_class == "shore" && left_class == "shore" && top_left_class == "shore"){
            map[y][x] = sandToWet[0][0];
          }
          else if(top_class == "shore" && left_class != "shore" && right_class != "shore"){
            map[y][x] = sandToWet[0][1];
          }
          else if(right_class == "shore" && top_class != "shore" && bottom_class != "shore"){
            map[y][x] = sandToWet[1][2];
          }
          else if(top_class == "shore" && right_class == "shore" && top_right_class == "shore"){
            map[y][x] = sandToWet[0][2];
          }
          else if(bottom_right_class == "shore" && bottom_class != "shore" && right_class != "shore"){
            map[y][x] = sandToWetCorners[0][0];
          }
          else if(bottom_left_class == "shore" && bottom_class != "shore" && left_class != "shore"){
            map[y][x] = sandToWetCorners[0][1];
          }
          else if(top_right_class == "shore" && top_class != "shore" && right_class != "shore"){
            map[y][x] = sandToWetCorners[1][0];
          }
          else if(top_left_class == "shore" && top_class != "shore" && left_class != "shore"){
            map[y][x] = sandToWetCorners[1][1];
          }
        }  
      }
    }

  };
}

function handleKeyPress(event){
  if(!registerInputs){
    return;
  }


  let x = player.x+player.rel_x-200;
  let y = player.y+player.rel_y-110
  x = player.x+((player.rel_x-(cnv.width/2))/3)+6;
  y = player.y+((player.rel_y-(cnv.height/2))/3)+25;
  let round_x = Math.floor(x/16);
  let round_y = Math.floor(y/16);

  if(event === 'up'){

    if(map[round_y-1][round_x] == water){
      return;
    }
    if(player.y >= 16*map.length-130){
      if(player.rel_y > cnv.height/2){
        player.rel_y -= speed * 2;
      }
      else{
        player.y -= speed;
        player.rel_y = cnv.height/2;
      }
    }
    else{
      player.y -= speed;
      if(player.y <= 130){
        player.y = 130;
        player.rel_y -= speed * 2;
      }
    }

    if(player.rel_y < 0){
      player.rel_y = 0;
    }

  }
  else if(event === 'down'){
    if(map[round_y+1][round_x] == water){
      if ((round_y+1)*16-y <= 3){
        return;
      }
    }
    if(player.y <= 130){
      if(player.rel_y < cnv.height/2){
        player.rel_y += speed * 2;
      }
      else{
        player.y += speed;
        player.rel_y = cnv.height/2;
      }
    }
    else{
      player.y += speed;
      if(player.y >= 16*map.length-130){
        player.y = 16*map.length-130;
        player.rel_y += speed * 2;
      }
    }
    if(player.rel_y > 560){
      player.rel_y = 560;
    }
  }
  else if(event === 'left'){
    if(map[round_y][round_x-1] == water){
      if ((round_x-1)*16-x > -24){
        return;
      }
    }
    if(player.x >= 16*map[0].length-200){
      if(player.rel_x > cnv.width/2){
        player.rel_x -= speed * 2;
      }
      else{
        player.x -= speed;
        player.rel_x = cnv.width/2;
      }
    }
    else{
      player.x -= speed;
      if(player.x <= 200){
        player.x = 200;
        player.rel_x -= speed * 2;
      }
    }

    if(player.rel_x < 0){
      player.rel_x = 0;
    }
  }
  else if(event === 'right'){
    if(map[round_y][round_x+1] == water){
      if ((round_x-1)*16-x < -23){
        return;
      }
    }
    if(player.x <= 200){
      if(player.rel_x < cnv.width/2){
        player.rel_x += speed * 2;
      }
      else{
        player.x += speed;
        player.rel_x = cnv.width/2;
      }
    }
    else{
      player.x += speed;
      if(player.x >= 16*map[0].length-200){
        player.x = 16*map[0].length-200;
        player.rel_x += speed * 2;
      }
    }

    if(player.rel_x > 1160){
      player.rel_x = 1160;
    }
  }

  if(startRecord){
    recordOfKeys.push(["location", player.x, player.y, player.rel_x, player.rel_y, Date.now()-startTime]);
  }
}

let characters = []

function addNpc(x, y, hp, image){
  characters.push({x: x, y: y, hp: hp, image: new Image(),source: image});
}

let vieille = new Image();
vieille.src = "./assets/pnj/vieille.png"
let vieille_temp = 255;




let blocksAnimationFrame = 0;
let wavesFrame = 0;
let streamAnimationFrame = 0;
let animationFrame = 0;
var downSprites = ["./assets/animations/player/walk_down_0.png","./assets/animations/player/walk_down_1.png","./assets/animations/player/walk_down_2.png","./assets/animations/player/walk_down_3.png"]
var upSprites = ["./assets/animations/player/walk_up_0.png","./assets/animations/player/walk_up_1.png","./assets/animations/player/walk_up_2.png","./assets/animations/player/walk_up_3.png"]
var rightSprites = ["./assets/animations/player/walk_right_0.png","./assets/animations/player/walk_right_1.png","./assets/animations/player/walk_right_2.png","./assets/animations/player/walk_right_3.png"]
var leftSprites = ["./assets/animations/player/walk_left_0.png","./assets/animations/player/walk_left_1.png","./assets/animations/player/walk_left_2.png","./assets/animations/player/walk_left_3.png"]

avion.src = "./assets/animations/player/walk_down_0.png";
collide.src = "./assets/col.png"
watergun.src = "./assets/watergun.png"
waterstream.src = "./assets/animations/water/waterjet_0.png"
windows.src = "./assets/window.png"
tutosoak.src = "./assets/ui/tutosoak.png"
arrows.src = "./assets/ui/arrows.png"
keysImage.src = "./assets/ui/keys.png"

let archive = new Image();
archive.src = "./assets/UI/archiveBase.png";

let menuReturn = new Image();
menuReturn.src = "./assets/UI/menuBase.png";

let rejouer = new Image();
rejouer.src = "./assets/UI/retryBase.png";




let angle = 0;
let angleJet = 0;

let particles = [];
let shootWater = false;



function convertToActualCoordinates(rectangle, player, angle, zoom){
  return rectangle.map(point => {
    let rotatedX = point.x * Math.cos(angle+0.3) - point.y * Math.sin(angle+0.3);
    let rotatedY = point.x * Math.sin(angle+0.3) + point.y * Math.cos(angle+0.3);

    let actualX = rotatedX + player.rel_x+18;
    let actualY = rotatedY + player.rel_y+55;

    return {x: actualX, y: actualY};
  });
}

let gameMusic = new Audio("./assets/audio/FunZone.mp3");
let waterSound = new Audio("./assets/audio/water.mp3");
let stepsSound = new Audio("./assets/audio/steps.mp3");
let drinkSound = new Audio("./assets/audio/drink.wav");
let noSound = new Audio("./assets/audio/no.wav");
var countdownTime = 60;
var points = 0;
var registerInputs = true;
var startTime = Date.now();

var secondDemo = false;

function drawImage(){
  ctx.save();
  ctx.translate(player.x - cnv.width / 2, player.y - cnv.height / 2);

  gameMusic.volume = 0.9;
  gameMusic.play();

  img.src = "./assets/mur.png";
  col.src = "./assets/col.png";
  laser.src = "./assets/laser.png";
  impact.src = "./assets/impact.png";
  background.src = "./assets/background.png";
  sand.src = "./assets/sand.png";
  water.src = "./assets/ocean.png";


  streamAnimationFrame = (streamAnimationFrame+1)%15;
  waterstream.src = "./assets/animations/water/waterjet2_"+(Math.floor(streamAnimationFrame/3)).toString()+".png";

  wavesFrame = (wavesFrame+1)%99;
  waterOverlay.src = "./assets/animations/tiles/waves/waves_"+(Math.floor(wavesFrame/9))+".png";

  blocksAnimationFrame = (blocksAnimationFrame+1)%63;
  sandsInner[0][0].src = "./assets/animations/tiles/sand/wetsand_top_left_inner_"+(Math.floor(blocksAnimationFrame/9)).toString()+".png";
  sandsInner[0][1].src = "./assets/animations/tiles/sand/wetsand_top_center_inner_"+(Math.floor(blocksAnimationFrame/9)).toString()+".png";
  sandsInner[0][2].src = "./assets/animations/tiles/sand/wetsand_top_right_inner_"+(Math.floor(blocksAnimationFrame/9)).toString()+".png";
  sandsInner[1][0].src = "./assets/animations/tiles/sand/wetsand_center_left_inner_"+(Math.floor(blocksAnimationFrame/9)).toString()+".png";
  sandsInner[1][2].src = "./assets/animations/tiles/sand/wetsand_center_right_inner_"+(Math.floor(blocksAnimationFrame/9)).toString()+".png";
  sandsInner[2][0].src = "./assets/animations/tiles/sand/wetsand_bottom_left_inner_"+(Math.floor(blocksAnimationFrame/9)).toString()+".png";
  sandsInner[2][1].src = "./assets/animations/tiles/sand/wetsand_bottom_center_inner_"+(Math.floor(blocksAnimationFrame/9)).toString()+".png";
  sandsInner[2][2].src = "./assets/animations/tiles/sand/wetsand_bottom_right_inner_"+(Math.floor(blocksAnimationFrame/9)).toString()+".png";

  sandsOutter[0][0].src = "./assets/animations/tiles/sand/wetsand_top_left_outter_"+(Math.floor(blocksAnimationFrame/9)).toString()+".png";
  sandsOutter[0][2].src = "./assets/animations/tiles/sand/wetsand_top_right_outter_"+(Math.floor(blocksAnimationFrame/9)).toString()+".png";
  sandsOutter[2][0].src = "./assets/animations/tiles/sand/wetsand_bottom_left_outter_"+(Math.floor(blocksAnimationFrame/9)).toString()+".png";
  sandsOutter[2][2].src = "./assets/animations/tiles/sand/wetsand_bottom_right_outter_"+(Math.floor(blocksAnimationFrame/9)).toString()+".png";

  if(heldKeys[0] == "down"){
    animationFrame = (animationFrame+1)%24;
    avion.src = downSprites[Math.floor(animationFrame/6)];
  }
  if(heldKeys[0] == "up"){
    animationFrame = (animationFrame+1)%24;
    avion.src = upSprites[Math.floor(animationFrame/6)];
  }
  if(heldKeys[0] == "right"){
    animationFrame = (animationFrame+1)%24;
    avion.src = rightSprites[Math.floor(animationFrame/6)];
  }
  if(heldKeys[0] == "left"){
    animationFrame = (animationFrame+1)%24;
    avion.src = leftSprites[Math.floor(animationFrame/6)];
  }
  handleKeyPress(heldKeys[0]);




  img.onload = function () {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.drawImage(background, 0 -camera.x, 0 -camera.y, 2378*zoom, 1082*zoom);

    for(let i = 0; i < map.length; i++){
      for(let k = 0; k < map[i].length;k++){
        if(map[i][k].class == "shore"){
          ctx.drawImage(water, (16*k*zoom)-camera.x,(16*i*zoom+10)-camera.y, 16*zoom, 16*zoom);
          ctx.drawImage(waterOverlay, (16*k*zoom)-camera.x,(16*i*zoom+10)-camera.y, 16*zoom, 16*zoom);
        }
        ctx.drawImage(map[i][k], (16*k*zoom)-camera.x,(16*i*zoom+10)-camera.y, 16*zoom, 16*zoom);
        if(map[i][k].class == "water"){
          ctx.drawImage(waterOverlay, (16*k*zoom)-camera.x,(16*i*zoom+10)-camera.y, 16*zoom, 16*zoom);
        }
      }
    }

    ctx.drawImage(avion, player.rel_x,player.rel_y, 14*zoom, 27*zoom);



    for(let i = 0;i<characters.length;i++){
      characters[i].image.src = characters[i].source;
      ctx.drawImage(characters[i].image, characters[i].x-camera.x,characters[i].y-camera.y, 14*zoom, 24*zoom);

      ctx.beginPath();
      ctx.fillStyle = 'rgb(' + characters[i].hp + ',' + Math.abs(characters[i].hp-255) + ',' + 0 + ')';
      ctx.fillRect(characters[i].x-20-camera.x,characters[i].y-30-camera.y, 80, 20);
      ctx.fill();
    }

    if(shootWater){
        waterSound.play();


        movePlayerToMouse(lastMouseX - player.rel_x, lastMouseY - player.rel_y);
        ctx.save();
        ctx.translate(player.rel_x+18, player.rel_y+55);
        ctx.rotate(angle+0.3);
        ctx.drawImage(waterstream, -(80*1.7)*zoom/2, -(13*1.7)*zoom/2, (80*1.7)*zoom, (13*1.7)*zoom);

        let endX = (80*1.7)*zoom/2;
        let endY = 0;

        ctx.beginPath();

        ctx.fillStyle = "red";
        ctx.fill();
        ctx.restore();

        for(let i = 0;i<characters.length;i++){
          
          let relX = endX;
          let relY = endY+30;

          let rotatedX = relX * Math.cos(angle+0.3) - relY * Math.sin(angle+0.3);
          let rotatedY = relX * Math.sin(angle+0.3) + relY * Math.cos(angle+0.3);

          let actualX = rotatedX + player.rel_x+18;
          let actualY = rotatedY + player.rel_y+55;

          let relX2 = endX;
          let relY2 = endY-30;

          let rotatedX2 = relX2 * Math.cos(angle+0.3) - relY2 * Math.sin(angle+0.3);
          let rotatedY2 = relX2 * Math.sin(angle+0.3) + relY2 * Math.cos(angle+0.3);

          let actualX2 = rotatedX2 + player.rel_x+18;
          let actualY2 = rotatedY2 + player.rel_y+55;


          
          let camX = characters[i].x-camera.x;
          let camY = characters[i].y-camera.y;

          let rectangleA = [
              {x: camX, y: camY},
              {x: camX+14*zoom, y: camY},
              {x: camX+14*zoom, y: camY+24*zoom},
              {x: camX, y: camY+24*zoom}
          ];

          let rectangleB = [
              {x: endX, y: endY+30},
              {x: endX, y: endY-30},
              {x: endX-(80*1.7)*zoom/2, y: endY-30},
              {x: endX-(80*1.7)*zoom/2, y: endY+30}
          ];

          rectangleB = convertToActualCoordinates(rectangleB, player, angle, zoom);

          if(isColliding(rectangleA, rectangleB) && characters[i].hp > -100){
            characters[i].hp -= 5;
            if(characters[i].hp > 0){
              points += 1;
              drinkSound.play();
            }
            else{
              noSound.play();
            }
          }
          else if(characters[i].hp < 255){
            characters[i].hp += 0.5;
          }
        }

    }
    else{
      waterSound.pause();
      for(let i = 0;i<characters.length;i++){
        if(characters[i].hp < 255 && registerInputs){
          characters[i].hp += 0.5;
        }
      }
    }

    ctx.save();
    ctx.translate(player.rel_x+18, player.rel_y+55);
    ctx.rotate(angle-1.35);
    ctx.drawImage(watergun, -(11*0.7)*zoom/2, -(19*0.7)*zoom/2, (11*0.7)*zoom, (19*0.7)*zoom);
    ctx.restore();

    var seconds = countdownTime % 60;
    var milliseconds = countdownTime * 1000 % 1000;

    ctx.fillStyle = "black";

    ctx.font = '48px LuckiestGirl, Arial';

    var text = Math.floor((seconds) * 100) / 100;

    var outlineThickness = 2;

    ctx.fillText(text, 10 - outlineThickness, 50 - outlineThickness);
    ctx.fillText(text, 10 + outlineThickness, 50 - outlineThickness);
    ctx.fillText(text, 10 - outlineThickness, 50 + outlineThickness);
    ctx.fillText(text, 10 + outlineThickness, 50 + outlineThickness);

    ctx.fillStyle = "white";
    ctx.fillText(text, 10, 50);



    ctx.fillStyle = "black";

    ctx.font = '48px LuckiestGirl, Arial';

    text = "Score : "+ points;

    outlineThickness = 2;

    var textPosX = 900;
    var textPosY = 50;

    ctx.fillText(text, textPosX - outlineThickness, textPosY - outlineThickness);
    ctx.fillText(text, textPosX + outlineThickness, textPosY - outlineThickness);
    ctx.fillText(text, textPosX - outlineThickness, textPosY + outlineThickness);
    ctx.fillText(text, textPosX + outlineThickness, textPosY + outlineThickness);

    ctx.fillStyle = "white";
    ctx.fillText(text, textPosX, textPosY);

    let mapLength = 150*(carte.naturalWidth / carte.naturalHeight);
    let mapHeight = 150; 
    ctx.drawImage(carte, 0, cnv.height-mapHeight, mapLength, mapHeight);
    ctx.drawImage(indicator, range(player.x, 0, map[0].length*16, 0, mapLength)-7+  ((player.rel_x-600)*0.035), 
                             range(player.y, 0, map.length*16, cnv.height- mapHeight, (cnv.height-mapHeight)+mapHeight)-7+  ((player.rel_y-320)*0.025), 14, 15);


    if(countdownTime <= 0){
      if(startGame == "demo"){
        secondDemo = true;
        player = {
          x: 200,
          y: 110,
          rel_x: cnv.width/2,
          rel_y: cnv.height/2
        };
        shootWater = false;
        points = 0;
        countdownTime = 60.0;
        map = [];
        characters = [];
        mapMake("./maps/carte"+mapSelected+".png");
        startTime = Date.now();
        shootWater = false;
        points = 0;
        countdownTime = 60.0;
      }
      else{
        startRecord = false;
        ctx.drawImage(windows, 0, 0, cnv.width, cnv.height);
        registerInputs = false;
        shootWater = false;
        var vieille_sauve = 0;
        for(let i = 0;i<characters.length;i++){
          if(characters[i].hp < 100){
            vieille_sauve+=1;
          }
        }
        showText(48,"Ton score est de "+points, 120, 120, "white", "black", 2);
        if(vieille_sauve != characters.length){
          showText(38,"Malheureusement, "+(characters.length-vieille_sauve)+" personnes sont actuellement", 120, 180, "white", "black", 2);
          showText(38,"hospitaliser dans un état critique après", 120, 230, "white", "black", 2);
          showText(38,"avoir souffertes de violentes hyperthermies.", 120, 280, "white", "black", 2);
        }
        else{
          showText(38,"Tu a sauver tout le monde, félicitation !", 120, 180, "white", "black", 2);
          showText(38,"Mais c'était moins une.", 120, 230, "white", "black", 2);
        }
        showText(34,"et après certains disent que l'été est la meilleur saison...", 120, 350, "white", "black", 2);
        showText(48,"brf...", 120, 400, "white", "black", 2);
        showText(38,"Dans tout les cas tu a donc un total de "+points*vieille_sauve+" points", 120, 500, "white", "black", 2);
        ctx.drawImage(menuReturn, 120, 510, menuReturn.width*1.5, menuReturn.height*1.5);
        ctx.drawImage(archive, 520, 510,    archive.width*1.5   , archive.height*1.5);
        ctx.drawImage(rejouer, 920, 510,    rejouer.width*1.5   , rejouer.height*1.5);
      }
    }
    else{
      if(countdownTime == 60.0 && startGame == "demo"){
        shootWater = false;
        readAndExecuteActions("./assets/json/carte"+mapSelected+".json");
      }
      if(countdownTime == 60.0 && startGame == "libre"){
        shootWater = false;
        startTime = Date.now();
        startRecord = true;
      }
      countdownTime -= 0.025;
    }
  };

  ctx.restore();
}




const directions = {
  up: "up",
  down: "down",
  left: "left",
  right: "right",
}
const keys = {
  38: directions.up,
  37: directions.left,
  39: directions.right,
  40: directions.down,
  90: directions.up,
  81: directions.left,
  68: directions.right,
  83: directions.down,
}

function keyPress(event){
  if(startGame != "demo"){
    keyPressFunction(event.which);
  }
}

function keyPressFunction(event){
  if(startRecord){
    recordOfKeys.push(["pressed", event, Date.now()-startTime]);
  }
  stepsSound.play();
  var dir = keys[event];
  if(dir && heldKeys.indexOf(dir) === -1){
    heldKeys.unshift(dir)
  }
  if(event == 32){
    clickFunction();
  }
}

let jeuLibreHover = false;
let demoHover = false;
let creditsHover = false;
let cartesHover = false;

let leftHover = false;
let rightHover = false;

let okHover = false;

let menuHover = false;
let archiveHover = false;
let retryHover = false;

let startGame = false;

function keyRelease(event){
  if(startGame != "demo"){
    keyReleaseFunction(event.which);
  }
}

function keyReleaseFunction(event){
  if(startRecord){
    recordOfKeys.push(["released", event, Date.now()-startTime]);
  }
  var dir = keys[event];
  var index = heldKeys.indexOf(dir);
  if(index > -1){
    heldKeys.splice(index, 1)
    stepsSound.pause();
  }
  if(dir == "left" && heldKeys.length == 0){
    avion.src = "./assets/animations/player/walk_left_0.png";
    animationFrame = 4;
  }
  else if(dir == "right" && heldKeys.length == 0){
    avion.src = "./assets/animations/player/walk_right_0.png";
    animationFrame = 4;
  }
  else if(dir == "up" && heldKeys.length == 0){
    avion.src = "./assets/animations/player/walk_up_0.png";
    animationFrame = 4;
  }
  else if(dir == "down" && heldKeys.length == 0){
    avion.src = "./assets/animations/player/walk_down_0.png";
    animationFrame = 4;
  }
}

function isMouseInsideImage(mouseX, mouseY, x, y, width, height) {
  return mouseX > x && mouseX < x + width && mouseY > y && mouseY < y + height;
}

let velocity = 0.0;

let lastMouseX = 0;
let lastMouseY = 0;

function movePlayerToMouse(dx, dy) {
  if(startGame == "demo"){
    return;
  }

  const distance = Math.sqrt(dx * dx + dy * dy);

  velocity += 0.1;

  const vx = (dx / distance) * (1+(Math.log(velocity)*2));
  const vy = (dy / distance) * (1+(Math.log(velocity)*2));



  if(player.x <= 200){
    player.x = 200;

    if(player.rel_x > 0){

      if(player.rel_x < cnv.width/2 || (vx*-1) < 0){
        player.rel_x += (vx*-1)*2;
      }
      else{
        player.x += (vx*-1);
      }

    }
  }

    
  else if(player.x >= 16*map[0].length-200){
    player.x = 16*map[0].length-200;


    if(player.rel_x > cnv.width/2 || (vx*-1) > 0){
      player.rel_x += (vx*-1) * 2;
    }
    else{
      player.x += (vx*-1);
      player.rel_x = cnv.width/2;
    }


  }
  else{
    player.x += (vx*-1);
  }


  if(player.y <= 130){
    player.y = 130;

    if(player.rel_y > 0){
      if(player.rel_y < cnv.height/2 || (vy*-1) < 0){
        player.rel_y += (vy*-1)*2;
      }
      else{
        player.y += (vy*-1);
      }
    }

  }
  else if(player.y >= 16*map.length-130){
    player.y = 16*map.length-130;

    if(player.rel_y < 16*map.length){

      if(player.rel_y > cnv.height/2 || (vy*-1) > 0){
        player.rel_y += (vy*-1)*2;
      }
      else{
        player.y += (vy*-1);
      }

    }
  }
  else{
    player.y += (vy*-1);
  }

  if(player.rel_y > 560){
    player.rel_y = 560;
  }
  if(player.rel_x > 1160){
    player.rel_x = 1160;
  }

  if(startRecord){
    recordOfKeys.push(["location", player.x, player.y, player.rel_x, player.rel_y, Date.now()-startTime]);
  }
}

var archivable = true;
var startRecord = false;

function mouse(event){
  if(startGame != "demo"){
    mouseFunction(event.clientX, event.clientY);
  }
}

function mouseFunction(clientX, clientY){
  let dx = clientX - (player.rel_x+18);
  let dy = clientY - (player.rel_y+55);
  lastMouseX = clientX;
  lastMouseY = clientY;
  angle = Math.atan2(dy, dx);
  if(startRecord){
    recordOfKeys.push(["move", clientX, clientY, Date.now()-startTime]);
  }

  let dx2 = clientX - (player.rel_x+18);
  let dy2 = clientY - (player.rel_y+155);
  angleJet = Math.atan2(dy2, dx2);

  okHover  = isMouseInsideImage(clientX, clientY, 515, 488, ok.width*2, ok.height*2);

  leftHover  = isMouseInsideImage(clientX, clientY, 320, 550, left.width*2, left.height*2);
  rightHover = isMouseInsideImage(clientX, clientY, 750, 550, right.width*2, right.height*2);

  jeuLibreHover = isMouseInsideImage(clientX, clientY, 500, 250, jeuLibre.width*2, jeuLibre.height*2);

  creditsHover = isMouseInsideImage(clientX, clientY, 1110, 570, credits.width, credits.height);

  cartesHover = isMouseInsideImage(clientX, clientY, 700, 308, cartes.width, cartes.height);
    
  demoHover = isMouseInsideImage(clientX, clientY, 500, 400, demo.width*2, demo.height*2);

  retryHover = isMouseInsideImage(clientX, clientY, 920, 510, rejouer.width*1.5, rejouer.height*1.5);
  
  archiveHover = isMouseInsideImage(clientX, clientY, 520, 510, rejouer.width*1.5, rejouer.height*1.5);

  menuHover = isMouseInsideImage(clientX, clientY, 120, 510, rejouer.width*1.5, rejouer.height*1.5);
}

let eagle = new Audio("./assets/audio/eagle.wav");

function click(e){
  if(startGame != "demo"){
    clickFunction();
  }
}

let showCredits = false;
let showCartes = false;

let mapsNb = 10;

function clickFunction(){
  if(startRecord){
    recordOfKeys.push(["click", Date.now()-startTime]);
  }

  if(startGame && registerInputs){
    if(shootWater){
      shootWater = false;
      velocity = 0.0;
    }
    else{
      shootWater = true;
    }
  }
  if(jeuLibreHover && !startGame && !showCredits && !showCartes){
    eagle.play();
    startGame = "libre";
    archivable = true;
    recordOfKeys = [];
  }
  if(showCredits){
    showCredits = false;
  }
  if(creditsHover && !startGame){
    showCredits = true;
  }

  if(cartesHover && !startGame){
    showCartes = true;
  }
  if(demoHover && !startGame && !showCredits && !showCartes){
    eagle.play();
    startGame = "demo";
    archivable = true;
    recordOfKeys = [];
  }
  
  if(showCartes && leftHover){
    mapSelected -= 1;
    if(mapSelected == 0){
      mapSelected = mapsNb;
    }
  }

  if(showCartes && okHover){
    showCartes = false;
  }

  if(showCartes && rightHover){
    mapSelected += 1;
    if(mapSelected == mapsNb+1){
      mapSelected = 1;
    }
  }

  if(archiveHover && !registerInputs && archivable){
    archivable = false;
    let json = JSON.stringify(recordOfKeys);

    let fileName = "carte"+mapSelected+".json";
    let blob = new Blob([json], { type: "application/json" });
    let url = URL.createObjectURL(blob);

    let a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  }
  if(retryHover && !registerInputs){

    eagle.play();
      secondDemo = true;
      player = {
        x: 200,
        y: 110,
        rel_x: cnv.width/2,
        rel_y: cnv.height/2
      };
      shootWater = false;
      points = 0;
      countdownTime = 60.0;
      map = [];
      characters = [];
      mapMake("./maps/carte"+mapSelected+".png");
      startTime = Date.now();

    startTime = Date.now();
    registerInputs = true;
    startGame = "libre";
    archivable = true;
    recordOfKeys = [];
  }
  if(menuHover && !registerInputs){
    eagle.play();
    shootWater = false;
    points = 0;
    countdownTime = 60.0;
    recordOfKeys = [];
    map = [];
    characters = [];
    registerInputs = true;
    startGame = false;
    for(let i = 0;i<characters.length;i++){
      characters[i].hp = 255;
    }
    player = {
      x: 200,
      y: 110,
      rel_x: cnv.width/2,
      rel_y: cnv.height/2
    };
  clearInterval(doyourememberGame);

lettersAnim = [
  {drop: 4.0, slide: slide, sound: new Audio("./assets/audio/explosion.wav")},
  {drop: 4.0, slide: slide, sound: new Audio("./assets/audio/explosion.wav")},
  {drop: 4.0, slide: slide, sound: new Audio("./assets/audio/explosion.wav")},
  {drop: 4.0, slide: slide, sound: new Audio("./assets/audio/explosion.wav")},
  {drop: 4.0, slide: slide, sound: new Audio("./assets/audio/explosion.wav")},
  {drop: 4.0, slide: slide, sound: new Audio("./assets/audio/explosion.wav")},
  {drop: 4.0, slide: slide, sound: new Audio("./assets/audio/explosion.wav")},
  {drop: 4.0, slide: slide, sound: new Audio("./assets/audio/explosion.wav")}
];
 slide = 300;
 countLetter = 0;
 drop = 4.0;

 screen_shake = 0;
 screen_shake_power = 0;

    start_intro = false;

    size_port = 2.0;
    derive_port = 320;

    scrolling = 0;
    scrollingLighthouse = 0;
    scrollingSky = 0;
    opacity = 0.0;

    fade_out = 1.0;
    gameMusic.pause();
    gameMusic.currentTime = 0;

    menuMusic.currentTime = 0;
    menuMusic.volume = 1.0;
    menuMusic.play();
    menuMusic.currentTime = 0;
    menuMusic.volume = 1.0;
    doyouremember = setInterval(drawMenu, 25);

    sleep(2500).then(() => {
      start_intro = true;
    });

  }
}

addEventListener('keydown', keyPress);
addEventListener('keyup', keyRelease);
addEventListener('mousemove', mouse);
addEventListener('click', click);


let menuSky = new Image();
menuSky.src = "./assets/menuSky.png"

let menuLighthouse = new Image();
menuLighthouse.src = "./assets/menuLighthouse.png"

let menu = new Image();
menu.src = "./assets/menu.png"

let letterC = new Image();
letterC.src = "./assets/logo/C.png"
let letterO = new Image();
letterO.src = "./assets/logo/O.png"
let letterL = new Image();
letterL.src = "./assets/logo/L.png"
let letterD = new Image();
letterD.src = "./assets/logo/D.png"
let letterI = new Image();
letterI.src = "./assets/logo/I.png"
let letterN = new Image();
letterN.src = "./assets/logo/N.png"
let letterE = new Image();
letterE.src = "./assets/logo/E.png"

let portlanouvelle = new Image();
portlanouvelle.src = "./assets/portlanouvelle.png"

let portSound = new Audio("./assets/audio/port.wav");


let jeuLibre = new Image();
jeuLibre.src = "./assets/UI/jeuLibreBase.png";

let credits = new Image();
credits.src = "./assets/UI/creditsBase.png";

let cartes = new Image();
cartes.src = "./assets/UI/cartesBase.png";

let demo = new Image();
demo.src = "./assets/UI/demoBase.png";

function readAndExecuteActions(filePath){
  fetch(filePath)
    .then(response => response.json())
    .then(actions => {
      actions.forEach(action => {
        if(action[action.length - 1] <= 65000){
          sleep(action[action.length - 1]).then(() => {
            if(action[0] == "move"){
              mouseFunction(action[1], action[2]);
            }
            if(action[0] == "click"){
              clickFunction();
            }
            if(action[0] == "location"){
              player.x = action[1];
              player.y = action[2];
              player.rel_x = action[3];
              player.rel_y = action[4];
            }
            if(action[0] == "released"){
              keyReleaseFunction(action[1]);
            }
            if(action[0] == "pressed"){
              keyPressFunction(action[1]);
            }

          });
        }
      });
    })
    .catch(error => console.error('Error fetching the JSON file:', error));
}

let slide = 300;
let lettersAnim = [
  {drop: 4.0, slide: slide, sound: new Audio("./assets/audio/explosion.wav")},
  {drop: 4.0, slide: slide, sound: new Audio("./assets/audio/explosion.wav")},
  {drop: 4.0, slide: slide, sound: new Audio("./assets/audio/explosion.wav")},
  {drop: 4.0, slide: slide, sound: new Audio("./assets/audio/explosion.wav")},
  {drop: 4.0, slide: slide, sound: new Audio("./assets/audio/explosion.wav")},
  {drop: 4.0, slide: slide, sound: new Audio("./assets/audio/explosion.wav")},
  {drop: 4.0, slide: slide, sound: new Audio("./assets/audio/explosion.wav")},
  {drop: 4.0, slide: slide, sound: new Audio("./assets/audio/explosion.wav")}
];
let countLetter = 0;
let drop = 4.0;

let screen_shake = 0;
let screen_shake_power = 0;

let start_intro = false;

let size_port = 2.0;
let derive_port = 320;

let scrolling = 0;
let scrollingLighthouse = 0;
let scrollingSky = 0;
let opacity = 0.0;

let fade_out = 1.0;
let mapSelected = 1;

var mapName = "plage";

function drawMenu(){

  if(start_intro  && countLetter <= 7){
    if(lettersAnim[countLetter].slide > 0){
      lettersAnim[countLetter].slide -= 30;
    }
    if(lettersAnim[countLetter].slide < 0){
      lettersAnim[countLetter].slide = 0;
    }
    if(lettersAnim[countLetter].drop > 1.3){
      lettersAnim[countLetter].drop -= 0.3;
    }
    if(lettersAnim[countLetter].drop < 1.3){
      lettersAnim[countLetter].drop = 1.3;
    }

    if(lettersAnim[countLetter].drop == 1.3 && lettersAnim[countLetter].slide == 0){
      lettersAnim[countLetter].sound.play();
      countLetter += 1;
      screen_shake_power = 3;
    }
  }


  screen_shake += 1;
  scrolling -= 1;
  if (scrolling <= -menu.width) {
      scrolling = 0;
  }

  scrolling -= 1;
  if(scrolling <= -menu.width){
    scrolling = 0;
  }

  scrollingSky -= 0.01;
  if(scrollingSky <= -menuSky.width){
    scrollingSky = 0;
  }

  scrollingLighthouse -= 0.5;
  if(scrollingLighthouse <= -menuLighthouse.width){
    scrollingLighthouse = 0;
  }

  ctx.drawImage(menuSky, scrollingSky + Math.sin(screen_shake) * screen_shake_power, Math.cos(screen_shake) * screen_shake_power, menu.width, menu.height);
  ctx.drawImage(menuSky, scrollingSky + menuSky.width + Math.sin(screen_shake) * screen_shake_power, Math.cos(screen_shake) * screen_shake_power, menu.width, menu.height);
  ctx.drawImage(menuLighthouse, scrollingLighthouse + Math.sin(screen_shake) * screen_shake_power, Math.cos(screen_shake) * screen_shake_power, menu.width, menu.height);
  ctx.drawImage(menuLighthouse, scrollingLighthouse + menuLighthouse.width + Math.sin(screen_shake) * screen_shake_power, Math.cos(screen_shake) * screen_shake_power, menu.width, menu.height);
  ctx.drawImage(menu,           scrolling              + Math.sin(screen_shake) * screen_shake_power, Math.cos(screen_shake) * screen_shake_power, menu.width, menu.height);
  ctx.drawImage(menu,           scrolling + menu.width + Math.sin(screen_shake) * screen_shake_power, Math.cos(screen_shake) * screen_shake_power, menu.width, menu.height);
  

  if(jeuLibreHover){
    jeuLibre.src = "./assets/UI/jeuLibreHover.png";
  }
  else{
    jeuLibre.src = "./assets/UI/jeuLibreBase.png"; 
  }

  if(demoHover){
    demo.src = "./assets/UI/demoHover.png";
  }
  else{
    demo.src = "./assets/UI/demoBase.png";
  }

  if(countLetter >= 8 && opacity < 1){
    opacity += 0.05;
  }
  ctx.globalAlpha = opacity;
  ctx.drawImage(credits,  1110, 570, credits.width, credits.height);
  ctx.drawImage(jeuLibre, 500,  250, jeuLibre.width*2, jeuLibre.height*2);
  ctx.drawImage(demo,     500,  400, jeuLibre.width*2, jeuLibre.height*2);
  ctx.drawImage(cartes,   700,  308, cartes.width, cartes.height);
  ctx.globalAlpha = 1;

  if(countLetter >= 0 && start_intro){
    ctx.drawImage(letterC, 220-lettersAnim[0].slide,        30-(lettersAnim[0].slide*-1), 91*lettersAnim[0].drop, 76*lettersAnim[0].drop);
  }
  if(countLetter >= 1){
    ctx.drawImage(letterO, 220+(90*1)-lettersAnim[1].slide, 30-(lettersAnim[1].slide*-1), 81*lettersAnim[1].drop, 77*lettersAnim[1].drop);
  }
  if(countLetter >= 2){
    ctx.drawImage(letterL, 210+(90*2)-lettersAnim[2].slide, 30-(lettersAnim[2].slide*-1), 89*lettersAnim[2].drop, 77*lettersAnim[2].drop);
  }
  if(countLetter >= 3){
    ctx.drawImage(letterD, 210+(90*3)-lettersAnim[3].slide, 30-(lettersAnim[3].slide*-1), 91*lettersAnim[3].drop, 77*lettersAnim[3].drop);
  }

  if(countLetter >= 4){
    ctx.drawImage(letterL, 230+(90*4)-lettersAnim[4].slide, 30-(lettersAnim[4].slide*-1), 89*lettersAnim[4].drop, 77*lettersAnim[4].drop);
  }
  if(countLetter >= 5){
    ctx.drawImage(letterI, 230+(90*5)-lettersAnim[5].slide, 30-(lettersAnim[5].slide*-1), 70*lettersAnim[5].drop, 77*lettersAnim[5].drop);
  }
  if(countLetter >= 6){
    ctx.drawImage(letterN, 200+(90*6)-lettersAnim[6].slide, 30-(lettersAnim[6].slide*-1), 101*lettersAnim[6].drop,77*lettersAnim[6].drop);
  }
  if(countLetter >= 7){
    ctx.drawImage(letterE, 200+(90*7)-lettersAnim[7].slide, 30-(lettersAnim[7].slide*-1), 84*lettersAnim[7].drop, 76*lettersAnim[7].drop);
  }
  if(countLetter >= 8){
    screen_shake_power = 0;
    if(derive_port > 0){
      derive_port -= 30;
    }
    if(derive_port < 0){
      derive_port = 0;
      portSound.play();
    }
    if(size_port > 0.2){
      size_port -= 0.3;
    }
    if(size_port < 0.2){
      size_port = 0.2;
    }

    ctx.drawImage(portlanouvelle, 340+derive_port, 150+derive_port, 2318*size_port, 259*size_port);
  }

  if(showCredits){
      ctx.drawImage(windows, 0, 0, cnv.width, cnv.height);
      showText(30,"Credits : ", 120, 100, "white", "black", 2);
      showText(30,"Textures : Stardew Valley", 120, 140, "white", "black", 2);
      showText(30,"Textures des boutons : Stardew Valley", 120, 180, "white", "black", 2);
      showText(30,"Musique du menu : CNR par Weird Al Yankovic", 120, 220, "white", "black", 2);
      showText(30,"Musique du jeu : Fun Zone par Weird Al Yankovic", 120, 260, "white", "black", 2);
      
      showText(30,"Click gauche ou espace", 120, 340, "white", "black", 2);
      showText(30,"pour activer l'eau", 145, 380, "white", "black", 2);
      ctx.drawImage(tutosoak, 180, 400, tutosoak.width*3, tutosoak.height*3);
      ctx.drawImage(keysImage, 550, 330, keysImage.width*3, keysImage.height*3);
      showText(40,"ou", 594, 465, "white", "black", 2);
      ctx.drawImage(arrows, 550, 500, arrows.width*3, arrows.height*3);

      showText(20,"Choisissez une carte, et essayez de sauver", 700, 430, "white", "black", 2);
      showText(20,"le plus de grand mère possible en les", 700, 450, "white", "black", 2);
      showText(20,"arrosant. Vous avez 60 secondes.", 700, 470, "white", "black", 2);
  }

  if(showCartes){
    ctx.drawImage(windows, 0, 0, cnv.width, cnv.height);
    showText(30,mapSelected+"/"+mapsNb, 100, 600, "white", "black", 2);
    shownMap.src = "./maps/carte"+mapSelected+".png";
    ctx.drawImage(shownMap, 420, 50, 350, 350);

    showText(30,shownMap.width+"x"+shownMap.height, 540, 450, "white", "black", 2);

    ctx.drawImage(ok,    515, 488, ok.width*2, ok.height*2);    
    ctx.drawImage(left,  320, 550, left.width*2, left.height*2);
    ctx.drawImage(right, 750, 550, right.width*2, right.height*2);
  }

  if(startGame){

    if(fade_out > 0){
      fade_out -= 0.02;
    }
    if(fade_out < 0){
      fade_out = 0;

      mapMake("./maps/carte"+mapSelected+".png");
      

      doyourememberGame = setInterval(drawImage, 25);


      clearInterval(doyouremember);
    }
    ctx.globalAlpha = Math.abs(fade_out-1);
    menuMusic.volume = fade_out;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx.globalAlpha = 1;
  }
}


let menuMusic = new Audio("./assets/audio/menu.mp3");
menuMusic.play();

var doyourememberGame;
var doyouremember = setInterval(drawMenu, 25);

sleep(2500).then(() => {
  start_intro = true;  
});