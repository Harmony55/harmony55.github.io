export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function compareColors(color1, color2){
  if(color1.length !== color2.length){
    return false;
  }
  for(let i = 0; i < color1.length; i++){
    if(color1[i] !== color2[i]){
      return false;
    }
  }
  return true;
}

function colorDistance(colorA, colorB) {
  return Math.sqrt(
    (colorA[0] - colorB[0]) ** 2 +
    (colorA[1] - colorB[1]) ** 2 +
    (colorA[2] - colorB[2]) ** 2 +
    (colorA[3] - colorB[3]) ** 2
  );
}

export function getClosestColor(array){
  const colors = [ new Uint8ClampedArray([0, 255, 255, 255]), new Uint8ClampedArray([255, 246, 0, 255]), new Uint8ClampedArray([34, 0, 255, 255]), new Uint8ClampedArray([0, 0, 0, 0]), new Uint8ClampedArray([0, 255, 0, 255]), new Uint8ClampedArray([255, 0, 0, 255])];

  let closestColor = colors[0];
  let smallestDistance = colorDistance(array, colors[0]);

  for (let i = 1; i < colors.length; i++) {
    const currentDistance = colorDistance(array, colors[i]);
    if (currentDistance < smallestDistance) {
      smallestDistance = currentDistance;
      closestColor = colors[i];
    }
  }

  if(compareColors(closestColor, colors[3])){
    return colors[1];
  }

  return closestColor;
}

export function range(number, inMin, inMax, outMin, outMax){
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

export function isColliding(polygonA, polygonB){
  let polygons = [polygonA, polygonB];
  let minA, maxA, projected, minB, maxB, iv;

  for(let i=0;i<polygons.length;i++){
    let polygon = polygons[i];
    for(let ii=0;ii<polygon.length;ii++){
      let iii = (ii + 1) % polygon.length;
      let p1 = polygon[ii];
      let p2 = polygon[iii];

      let normal = { x: p2.y - p1.y, y: p1.x - p2.x };

      minA = undefined;
      maxA = undefined;

      for(iv=0;iv<polygonA.length;iv++){
        projected = normal.x * polygonA[iv].x + normal.y * polygonA[iv].y;
        if(minA === undefined || projected < minA){
          minA = projected;
        }
        if(maxA === undefined || projected > maxA){
          maxA = projected;
        }
      }

      minB = undefined;
      maxB = undefined;
      for(iv=0;iv<polygonB.length;iv++){
        projected = normal.x * polygonB[iv].x + normal.y * polygonB[iv].y;
        if(minB === undefined || projected < minB){
          minB = projected;
        }
        if(maxB === undefined || projected > maxB){
          maxB = projected;
        }
      }


      if(maxA < minB || maxB < minA){
        return false;
      }
    }
  }
  return true;
};