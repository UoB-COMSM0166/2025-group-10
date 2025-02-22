let clouds = [];
let objects = [];
let player;
let numClouds = 100;
let level = 1;
let canvasWidth = 250;
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
  
  //Generate objects
  for (let i = 0; i < numClouds; i++) {
    let cloud = clouds[i];
     // Randomly add a danger on some clouds
    if (random() < 0.3) { // 30% chance of having a danger
      if (random() < 0.3) {
        objects.push(new Monster(cloud));
      } else {
        objects.push(new Danger(cloud));
      }
    } else if (random() < 0.3) { // 30% chance of having a halo
      objects.push(new Halo(cloud));
    }
  }
  
  //Generate player
  player = new Player(canvasWidth / 2, canvasHeight);
}

function draw() {
  background(220);

  // Draw clouds and moving clouds
  for (let cloud of clouds) {
    cloud.show();
    cloud.move();
  }

  for (let obj of objects) {
    obj.show();
    obj.move();
  }
  
  player.show();
  player.move();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.direction = -1;
    player.move();
  } else if (keyCode === RIGHT_ARROW) {
    player.direction = 1;
    player.move();
  } else if (keyCode === 32) { // SPACE key
    player.jump();
  }
}
