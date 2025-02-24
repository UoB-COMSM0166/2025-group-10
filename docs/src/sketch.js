let clouds = [];
let objects = [];
let hearts = [];
let coins = [];
let player;
let numClouds = 50;
let level = 1;
let canvasWidth = 350;
let canvasHeight = 600;
let statusAreaHeight = 50;
let cloudWidth = 70;
let cloudHeight = 10;
let numCoinOrHeart = 3;
let life = 3;
let curHalo = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  // Generate clouds
  clouds = generateClouds(level, 
                          random(50, 250), 
                          random(canvasHeight - 3, canvasHeight - 4), 
                          cloudWidth, 
                          cloudHeight);
  
  //Generate objects
  for (let i = 0; i < numClouds; i++) {
    let cloud = clouds[i];
    
    //Wing is on the final cloud
    if (i === numClouds - 1) {
      objects.push(new Wing(cloud));
    } else {
      // Randomly add a danger on some clouds
      if (random() < 0.3) { // 30% chance of having a danger
        if (random() < 0.2) {
          objects.push(new Monster(cloud));
        } else {
          objects.push(new Danger(cloud));
        }
      } else if (random() < 0.3) { // 30% chance of having a halo
        objects.push(new Halo(cloud));
      } else {
        objects.push(new Objects(cloud));
      }
    }
  }
  
  //Generate player
  player = new Player(canvasWidth / 2, canvasHeight, life, curHalo);
  
  //Generate heart
  generateHeart();
  
  generateCoin();
}

function draw() {
  background(255);

  // Draw clouds and moving clouds
  for (let cloud of clouds) {
    cloud.show();
    cloud.move();
  }

  for (let obj of objects) {
    obj.show();
    obj.move();
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    player.move(-1); // Move left
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.move(1);  // Move right
  }
  
  player.update();
  player.show();
  
  drawStatusArea();
  
  for (let i = 0; i < life; i++) {
    hearts[i].show(1);
  }
  
  for (let i = 0; i < curHalo; i++) {
    coins[i].show(1);
  }
}

function keyPressed() {
  if (keyCode === 32) { // SPACE key
    if (player.y === canvasHeight - player.size / 2) {
      player.jump();
    } else if (player.isOnCloud) {
      player.jump();
    }
  }
}

//Every time player jumps, scroll clouds down and center the current cloud in the canvas.
function shiftScreen(shiftAmount) {
    for (let cloud of clouds) {
      cloud.y += shiftAmount;
    }
}

function generateClouds(level, x, y, w, h) {
  let prevX = x;
  let prevY = y;
  
  //Suppose our game has 10 levels, in the 1st level, we have 20% movingClouds, while in the 10th level, we have 80% movingClouds.Total number of Clouds is 20 now.
  let movingCloudsRatio = map(level, 1, 10, 0.2, 0.8);
  
  for (let i = 0; i < numClouds; i++) {
    //height between ajacent clouds should be appropriate;
    let newY = prevY - random(60, 90);
    //Distance between ajacent clouds should be suitable;
    let newX;
    if (random() < 0.5) {
      newX = prevX + random(-w * 2, -w / 2);
    } else {
      newX = prevX + random(w / 2, w * 2);
    }
    newX = newX < w ? w : newX;
    newX = newX > canvasWidth - w ? canvasWidth - w : newX;
    
    if (random() < movingCloudsRatio) {
      clouds.push(new MovingCloud(newX, newY, w, h, canvasWidth));
    } else {
      clouds.push(new Cloud(newX, newY, w, h));
    }

    prevX = newX;
    prevY = newY;
  }
  return clouds;
}

function drawStatusArea() {
  fill(225);
  rect(0, 0, canvasWidth, statusAreaHeight);
  noStroke();
}

function generateHeart() {
  let gapWidth = 10;
  let size = 20;
  for (let i = 0; i < numCoinOrHeart; i++) {
    let heart = new LifeHeart((i + 1) * gapWidth + size / 2 * (2 * i + 1), statusAreaHeight / 2, size);
    hearts.push(heart);
  }
}

function generateCoin() {
  let gapWidth = 10;
  let size = 20;
  for (let i = 0; i < numCoinOrHeart; i++) {
    let coin = new Coin(canvasWidth - (i + 1) * gapWidth - size / 2 * (2 * i + 1), statusAreaHeight / 2, size);
    coins.push(coin);
  }
}