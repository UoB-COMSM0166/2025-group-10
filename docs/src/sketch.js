let clouds = [];
let dangers = [];
let monsters = [];
let halos = [];
let player;
let numClouds = 20;
let level = 1;
let canvasWidth = 300;
let canvasHeight = 400;

function generateClouds(numClouds, level, x, y, w, h, canvasWidth) {
  let prevX = x;
  let prevY = y;
  
  //Suppose our game has 10 levels, in the 1st level, we have 20% movingClouds, while in the 10th level, we have 80% movingClouds.Total number of Clouds is 20 now.
  let movingCloudsRatio = map(level, 1, 10, 0.2, 0.8);
  
  for (let i = 0; i < numClouds; i++) {
    //Suppose player can jump 40, height between ajacent clouds should be about 20;
    let newY = prevY - random(16, 20);
    //Suppose player can move 10, distance between ajacent clouds should not larger than 5;
    //let newX = constrain(prevX + random(-5, 5), 0, canvasWidth - w);
    let newX = random(w / 2, canvasWidth - w);
    
    if (random() < movingCloudsRatio) {
      clouds.push(new MovingCloud(newX, newY, canvasWidth));
    } else {
      clouds.push(new Cloud(newX, newY));
    }

    prevX = newX;
    prevY = newY;
  }
  return clouds;
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  // Generate clouds
  clouds = generateClouds(numClouds, level, random(50, 250), random(canvasHeight - 3, canvasHeight - 4), 30, 5, canvasWidth);
  
  for (let i = 0; i < numClouds; i++) {
    let cloud = clouds[i];
     // Randomly add a danger on some clouds
    if (random() < 0.3) { // 30% chance of having a danger
      if (random() < 0.3) {
        dangers.push(new Monster(cloud));
      } else {
        dangers.push(new Danger(cloud));
      }
    } else if (random() < 0.3) { // 30% chance of having a halo
      halos.push(new Halo(cloud));
    }
  }
}

function draw() {
  background(220);

  // Draw clouds and moving clouds
  for (let cloud of clouds) {
    cloud.show();
    cloud.move();
  }

  // Draw dangers and monsters
  for (let danger of dangers) {
    danger.show();
    danger.move();
  }
  
  for (let halo of halos) {
    halo.show();
    halo.move();
  }
  
  player = player(canvasWidth / 2, canvasHeight);
  player.move();
}
