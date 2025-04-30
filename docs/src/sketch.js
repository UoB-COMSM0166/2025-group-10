let clouds = [], objects = [], hearts = [];
let player;
let numClouds = 100;
let canvasWidth = 800, canvasHeight = 600, statusAreaHeight = 50;
let cloudWidth = 100, cloudHeight = 20, firstLevelX;
let movingDistance = canvasHeight / 8;
let numCoinOrHeart = 3;
let life = 3, candyCount = 0;
let cloudImg, haloImg, monsterLeftImg, monsterRightImg, dangerImg, playerLeftImg, playerRightImg;
let bgImg, bgGame, angelWords, challengeWords;
let simple, simpleHover, medium, mediumHover, hard, hardHover;
let simpleBox, mediumBox, hardBox;
let titleY = 100, angle = 0; // 控制標題彈跳動畫
let playX, playY, playWidth = 200, playHeight = 80; // 增大按鈕尺寸
let gameScreen = "start";
let IgotitX, IgotitY, IgotitW = 160, IgotitH = 50;
let selectedDifficulty = "easy"; // 預設為簡單模式
let gameAssetsLoaded = false;

//game over or you win variables
let winOrLoseButtons = [];
let winOrLoseLabels = ["Play Again", "Settings", "Exit Game"];
let winOrLoseX, winOrLoseY;
let winOrLoseWidth = 200, winOrLoseHeight = 50, winOrLoseSpacing = 15, winOrLoseFlashTimer = 0;

//圖片匯入
function preload() {
  bgImg = loadImage('assets/bg.png');
  angelWords = loadImage('assets/upup.png');
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  loadGameAssets(); 
  playX = width / 2;
  playY = height - 150;
  
  textAlign(CENTER, CENTER);
  textSize(24);
  textFont("Comic Sans MS"); 
  
  // Igotit 按鈕位置
  IgotitX = width - 100;
  IgotitY = height - 60;
  
  // 設定 Game Over or You Win 页面按鈕位置
  winOrLoseX = width / 2;
  winOrLoseY = height / 2 + 40;

  for (let i = 0; i < winOrLoseLabels.length; i++) {
    winOrLoseButtons.push({
      label: winOrLoseLabels[i],
      x: winOrLoseX,
      y: winOrLoseY + i * (winOrLoseHeight + winOrLoseSpacing),
      w: winOrLoseWidth,
      h: winOrLoseHeight,
      hover: false
    });
  }
}

function draw() {
  background(255);

  if (!gameAssetsLoaded || gameScreen === "start") {
    drawStartScreen();
  } else if (gameScreen === "instruction") {
    drawInstructionScreen();
  } else if (gameScreen === "difficulty") {
    drawDifficultyScreen();
  } else if (gameScreen === "game")  {
    drawGame();
  } else {
    drawWinOrLoseScreen();
  }
}

// 繪製開始畫面
function drawStartScreen() {
  background(bgImg);
  let bounce = sin(angle) * 20;
  angle += 0.05;
  image(angelWords, width / 3- angelWords.width / 3 , titleY/3+ bounce-60, angelWords.width / 0.7 , angelWords.height / 0.7);

  let isPlayHover = mouseX > playX - playWidth / 2 && mouseX < playX + playWidth / 2 &&mouseY > playY - playHeight / 2 && mouseY < playY + playHeight / 2;

  fill(isPlayHover ? '#DFA0B2' : '#0BCBB8');
  noStroke();
  rect(playX - playWidth / 2+7, playY - playHeight / 2+5, playWidth-20, playHeight-20, 10);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("PLAY", playX, playY);
}

// 繪製教學畫面
function drawInstructionScreen() {
  background(bgGame);
  fill(0);
  
  textSize(50);
  text("Instructions", width / 2, 60);

  textSize(24);
  let textX = width / 2 - 50;

  fill(255, 150, 0);
  text("Candy - ", 150, 120);
  fill(0, 0, 0);
  text("Collect three candies to gain an extra life!", textX + 85, 120);

  fill(255, 150, 0);
  text("Ghost - ", 150, 170);
  fill(0, 0, 0);
  text("If you touch a ghost, you will lose one life!", textX + 90, 170);

  fill(255, 150, 0);
  text("Hellfire - ", 160, 220);
  fill(0, 0, 0);
  drawWrappedText("If you touch the hellfire, you will lose one life!", textX + 130, 220, 600);

  fill(255, 150, 0);
  text("Heart - ", 150, 270);
  fill(0, 0, 0);
  drawWrappedText("Represents your life. You start with three lives. If you lose them all, the game is over.", textX + 90, 270, 500);

  fill(255, 150, 0);
  text("Halo - ", 145, 350);
  fill(0, 0, 0);
  drawWrappedText("If you touch the halo, you will fly to heaven and win the game!", textX + 110, 350, 540);
  
  //Note1
    fill(255, 150, 0);
    text("Note1 - ", 150, 420);
    fill(0, 0, 0);
    drawWrappedText("If you fall to the ground, you will lose one life!", textX + 110, 420, 610);
  
    //Note2
    fill(255, 150, 0);
    text("Note2 - ", 150, 470);
    fill(0, 0, 0);
    drawWrappedText("You can only have up to three lives. If you already have three, collecting more candies won’t give you any extras!", textX + 130, 470, 580);

  image(candyImg, width / 2 - 360, 95, 60, 60); 
  image(monsterRightImg, width / 2 - 350, 150, 35, 45);
  image(dangerImg, width / 2 - 345, 205, 26, 30);
  image(heartImg, width / 2 - 360, 245, 55, 55);
  image(haloImg, width / 2 - 350, 330, 40, 40);

  // 繪製 Igotit 按鈕
    let IgotitX = width - 70;
    let IgotitY = height - 30;
    let IgotitW = 100;
    let IgotitH = 30;
  
    let isIgotitHover = mouseX > IgotitX && mouseX < IgotitX + IgotitW && mouseY > IgotitY && mouseY < IgotitY + IgotitH;

    textSize(24);
    textAlign(CENTER, CENTER);

  
    if (mouseX > IgotitX - IgotitW/2 && mouseX < IgotitX + IgotitW/2 && mouseY > IgotitY - IgotitH/2 && mouseY < IgotitY + IgotitH/2) {
    fill("rgb(255, 150, 0)");
  } else {
    fill("#0662AC");
  }
    text("I got it →", IgotitX, IgotitY);
}

function drawWrappedText(txt, x, y, maxWidth) {
  let words = txt.split(" ");
  let line = "";
  let lineHeight = 30;
  
  for (let i = 0; i < words.length; i++) {
    let testLine = line + words[i] + " ";
    if (textWidth(testLine) > maxWidth) {
      text(line, x, y);
      line = words[i] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  text(line, x, y);
}

//繪製選擇難度畫面
window.drawDifficultyScreen = function() {
  background(bgGame);
  
  fill("#0662AC"); 
  textSize(36);
  textFont("Comic Sans MS");
  textAlign(LEFT, TOP);
  text("Select your challenge !", 50, 50);
  
  // 設定按鈕的新大小
  let buttonWidth = 400;
  let buttonHeight = 350;

  let isSimpleHover = mouseX > 190 && mouseX < 190 + buttonWidth && mouseY > 200 && mouseY < 270;
  let isMediumHover = mouseX > 190 && mouseX < 190 + buttonWidth && mouseY > 350 && mouseY < 420 ;
  let isHardHover = mouseX > 190 && mouseX < 190 + buttonWidth && mouseY > 500 && mouseY < 570;
  
  let simpleHoverWidth = 250;  // 調整為適合的寬度
  let simpleHoverHeight = 100; // 調整為適合的高度
  let simpleHoverX = 250;  // 調整 X 位置
  let simpleHoverY = 120;   // 調整 Y 位置

   image(isSimpleHover ? simpleHover : simple, 190, 50, buttonWidth, buttonHeight);
  // 如果 hover 到簡單模式，就顯示提示圖
if (isSimpleHover && simpleBox) {
  let boxWidth = simpleBox.width/1.2 ;  // 可依情況縮放
  let boxHeight = simpleBox.height/1.2 ;
  let boxX = 190 + buttonWidth-150 ; // 按鈕右邊一點
  let boxY = -100; // 和簡單按鈕同高
  image(simpleBox, boxX, boxY, boxWidth, boxHeight);
}
  image(isMediumHover ? mediumHover : medium, 190, 200, buttonWidth, buttonHeight);
  
  if (isMediumHover && mediumBox) {
  let boxWidth = mediumBox.width / 1.2;
  let boxHeight = mediumBox.height / 1.2;
  let boxX = 190 + buttonWidth-150;
  let boxY = 50;
  image(mediumBox, boxX, boxY, boxWidth, boxHeight);
}
  
  image(isHardHover ? hardHover : hard, 190, 350, buttonWidth-2, buttonHeight+10);
  
  if (isHardHover && hardBox) {
  let boxWidth = hardBox.width / 1.2;
  let boxHeight = hardBox.height / 1.2;
  let boxX = 190 + buttonWidth-150;
  let boxY = 200;
  image(hardBox, boxX, boxY, boxWidth, boxHeight);
}
};

//Every time player jumps, scroll clouds down and center the current cloud in the canvas.
function shiftScreen(shiftAmount) {
  for (let i = 0; i < clouds.length; i++) {
    clouds[i].y += shiftAmount;
    let obj = objects[i];
    if (obj instanceof Object) {
      objects[i].y += shiftAmount;
    }
  }
}

function drawGame() {
  background(bgGame);
  for (let cloud of clouds) {
    cloud.show();
    cloud.move();
  }
  for (let obj of objects) {
    obj.show();
    obj.move();
  }
  if (keyIsDown(LEFT_ARROW)) player.move(-1);
  if (keyIsDown(RIGHT_ARROW)) player.move(1);
  player.update();
  player.show();
  drawStatusArea();
  
  for (let i = objects.length - 1; i >= 0; i--) {
    if (player.collidesWith(objects[i])) {
      if (objects[i] instanceof Danger) {
        player.loseLife();
        objects.splice(i, 1);
      } else if (objects[i] instanceof Candy) {
        candyCount++;
        objects.splice(i, 1);
        if (candyCount >= 3) {
          player.addLife();
          candyCount = 0;
        }
      } else if (objects[i] instanceof Halo && life > 0) {
        gameScreen = "youWin";
        objects.splice(i, 1);
      }
    }
  }
}

function drawStatusArea() {
  // 畫出狀態區背景
  fill(225);
  rect(0, 0, canvasWidth, statusAreaHeight);
  noStroke();
  
  // 顯示生命心（根據全局變數 life 與 hearts 陣列）
  for (let i = 0; i < hearts.length; i++) {
    if (i < life) {
      hearts[i].show(1);
    } else {
      hearts[i].show(0);
    }
  }
  
  // 重設 tint，確保後續繪製不受之前 tint 影響
  noTint();
  
  // 顯示金幣圖示及金幣數量（固定顯示在右上角）
  let coinIconSize = 70;
  let coinIconX = canvasWidth - 120;
  let coinIconY = -7;
  image(candyImg, coinIconX, coinIconY, coinIconSize, coinIconSize);
  fill(0);
  textSize(25);
  text(candyCount, coinIconX + coinIconSize + 5, coinIconY + coinIconSize - 28);
}

// game over or you win screen
function drawWinOrLoseScreen() {
  background(bgImg);
  
  winOrLoseFlashTimer++;
  let textSizeValue = 100 + map(sin(winOrLoseFlashTimer * 0.1), -1, 1, 0, 10);
  
  fill(178, 34, 34);
  textSize(textSizeValue);
  let textContent = gameScreen === "gameOver" ? "Game Over!" : "You Win!";
  text(textContent, width / 2, buttonY - buttonHeight - 80);
  
  textSize(34);
  for (let btn of winOrLoseButtons) {
    btn.hover = mouseX > btn.x - btn.w / 2 && mouseX < btn.x + btn.w / 2 &&
                mouseY > btn.y - btn.h / 2 && mouseY < btn.y + btn.h / 2;
    
    fill(btn.hover ? 'rgb(255,182,193)' : 'black');
    text(btn.label, btn.x, btn.y);
  }
}

//按鈕控制
window.mousePressed = function() {
  let isPlayHover = mouseX > playX - playWidth / 2 && mouseX < playX + playWidth / 2 &&mouseY > playY - playHeight / 2 && mouseY < playY + playHeight / 2;
  
  let isIgotitHover = mouseX > IgotitX && mouseX < IgotitX + IgotitW &&mouseY > IgotitY && mouseY < IgotitY + IgotitH;
  
  let buttonWidth = 400;
  let buttonHeight = 350;

  let isSimpleHover = mouseX > 190 && mouseX < 190 + buttonWidth && mouseY > 200 && mouseY < 270;
  let isMediumHover = mouseX > 190 && mouseX < 190 + buttonWidth && mouseY > 350 && mouseY < 420 ;
  let isHardHover = mouseX > 190 && mouseX < 190 + buttonWidth && mouseY > 500 && mouseY < 570;


  if (gameScreen === "start" && isPlayHover) {
    gameScreen = "instruction";
  } else if (gameScreen === "instruction" && isIgotitHover) {
    gameScreen = "difficulty";
  } else if (gameScreen === "difficulty") {
    if (isSimpleHover) {
      selectedDifficulty = "easy";
      startNewGame();  // **確保新的遊戲初始化**
    } else if (isMediumHover) {
      selectedDifficulty = "medium";
      startNewGame();
    } else if (isHardHover) {
      selectedDifficulty = "hard";
      startNewGame();
    }
  } else {
    for (let btn of winOrLoseButtons) {
      if (btn.hover) {
        if (btn.label === "Play Again") {
          restartGame(); //重新開始當前難度的遊戲
        } else if (btn.label === "Settings") {
          resetGameData();  
          gameScreen = "difficulty"; // 回到選擇難度畫面
        } else if (btn.label === "Exit Game") {
          resetGameData(); 
          gameScreen = "start"; // 回到主畫面
        }
      }
    }
  }
};

function keyPressed() {
  if (gameScreen === "start") {
    if (keyCode === ENTER) gameScreen = "game";
  } else if (gameScreen === "gameOver" || gameScreen === "youWin" || gameScreen === "instruction") {
    if (keyCode === ENTER) gameScreen = "start";
  } else if (gameScreen === "game") {
    if (keyCode === 32) { // SPACE 跳躍
      if (player.y === canvasHeight - player.size / 2 || player.currentCloud) {
        player.jump();
      }
    }
  }
}

function restartGame() {
    // 重設遊戲變數
    life = 3;
    candyCount = 0;
    
    // 重新建立遊戲對象
    clouds = [];
    objects = [];
    hearts = [];
    
    // 重新建立玩家
    player = new Player(canvasWidth / 2, canvasHeight);

    // 重新生成雲朵、物件、生命
    generateGameElements();
    generateHeart();

    // 切換回遊戲畫面
    gameScreen = "game";
}

function startNewGame() {
  resetGameData();  // **確保清空舊資料**
  player = new Player(canvasWidth / 2, canvasHeight, life, candyCount);
  generateGameElements();
  generateHeart();
  gameScreen = "game";  // 切換到遊戲畫面
}

function resetGameData() {
  // **重設所有變數**
  life = 3;
  candyCount = 0;
  
  // **清空所有物件**
  clouds = [];
  objects = [];
  hearts = [];
  
  // **確保畫面回到選擇難度時是乾淨的**
  player = null;  
}

function generateGameElements() {
  clouds = generateClouds(random(60, 200), random(canvasHeight - 60, canvasHeight - 90));
  firstLevelX = clouds[0].y;
  objects = [];

  for (let i = 0; i < clouds.length; i++) {
    let cloud = clouds[i];
    if (i === clouds.length - 1) {
      objects.push(new Halo(cloud));
    } else {
      if (selectedDifficulty === "easy") {
        // 簡單模式：只有 Candy
        if (random() < 0.3) {
          objects.push(new Candy(cloud));
        } else {
          objects.push(new Objects(cloud));
        }
      } else if (selectedDifficulty === "medium") {
        // 中級模式：有 Danger
        if (random() < 0.3) {
          objects.push(new Candy(cloud));
        } else if (random() < 0.2) {
          objects.push(new Danger(cloud));
        } else {
          objects.push(new Objects(cloud));
        }
      } else if (selectedDifficulty === "hard") {
        // 困難模式：有 Monster 和 Danger
        if (random() < 0.3) {
          objects.push(new Candy(cloud));
        } else if (random() < 0.2) {
          objects.push(new Monster(cloud));
        } else if (random() < 0.2) {
          objects.push(new Danger(cloud));
        } else {
          objects.push(new Objects(cloud));
        }
      }
    }
  }
  
  player = new Player(canvasWidth / 2, canvasHeight, life, candyCount);
  generateHeart();
}

function generateClouds(x, y) {
  let prevXMin = x - cloudWidth / 2, prevXMax = x + cloudWidth / 2, prevX = x;
  let prevY = y;
  let movingCloudsRatio = 0.5;
  clouds.push(new Cloud(x, y));

  for (let i = 1; i < numClouds; i++) {
    //height between ajacent clouds should be appropriate; every level has three clouds;
    let newY, newX;
    if (i % 3 !== 0) {
      newY = prevY;
    } else {
      newY = prevY - random(60, 90);
    }
    
    if (random() < movingCloudsRatio) {
      newX = nextCloudX(prevX, prevXMin, prevXMax, i, movingDistance);
      if (newX === prevX && i % 3 !== 0) { //overlap after adjusting
        continue;
      } else {
        clouds.push(new MovingCloud(newX, newY));
        prevXMin = newX - cloudWidth / 2 - movingDistance;
        prevXMax = newX + cloudWidth / 2 + movingDistance;
      }
    } else {
      newX = nextCloudX(prevX, prevXMin, prevXMax, i, 0);
      if (newX === prevX && i % 3 !== 0) { //overlap after adjusting
        continue;
      } else {
        clouds.push(new Cloud(newX, newY));
        prevXMin = newX - cloudWidth / 2;
        prevXMax = newX + cloudWidth / 2;
      }
    }

    prevX = newX;
    prevY = newY;
  }
  return clouds;
}

function nextCloudX(prevX, prevXMin, prevXMax, i, movingDistance) {
  // The first cloud will be generated on the bottom left of canvas.
  // Each level has three clouds.
  // At the first level, clouds generated from left to right. At the next level, generation is from right to left.
  
  let newX;
  let level = Math.floor(i / 3);
  if (i % 3 === 0) { // Generate a cloud in next level, allowing to overlap.
    newX = prevX + random(-cloudWidth * 2, cloudWidth * 2);
    newX = newX < cloudWidth ? cloudWidth : newX;
    newX = newX > canvasWidth - cloudWidth ? canvasWidth - cloudWidth : newX;
  } else if (level % 2 !== 0) { // Generate in the same level, to the left.
    newX = prevXMin + random(-cloudWidth * 2, -cloudWidth) - movingDistance;
    newX = newX < cloudWidth ? cloudWidth : newX;
    //Check if clouds overlap after adjusting according to the boundary of canvas.
    newX = (newX + cloudWidth / 2 + movingDistance>= prevXMin) ? prevX : newX;
  } else { //To the right.
    newX = prevXMax + random(cloudWidth, cloudWidth * 2) + movingDistance;
    newX = newX > canvasWidth - cloudWidth ? canvasWidth - cloudWidth : newX;
    //Check overlap
    newX = (newX - cloudWidth / 2 - movingDistance <= prevXMax) ? prevX : newX;
  }
  return newX;
}

function generateHeart() {
  let gapWidth = 20; // 調整間距，避免圖案重疊
  let size = 40; // 調整初始大小
  for (let i = 0; i < numCoinOrHeart; i++) {
    let heart = new LifeHeart((i + 1) * gapWidth + size / 2 * (2 * i + 1), statusAreaHeight / 2, size);
    hearts.push(heart);
  }
}

function loadGameAssets() {
  setTimeout(() => { 
    
    bgGame = loadImage('assets/gameBackground.jpg');
    cloudImg = loadImage('assets/cloud2.png');
    candyImg = loadImage('assets/candy.png');
    monsterLeftImg = loadImage('assets/ghost2.gif');
    monsterRightImg = loadImage('assets/ghost1.gif');
    dangerImg = loadImage('assets/ghost-fire.gif');
    heartImg = loadImage('assets/blood.png');
    haloImg = loadImage('assets/halo.png');
    playerLeftImg = loadImage('assets/angel-2.gif');
    playerRightImg = loadImage('assets/angel-1.gif');
    simple = loadImage('assets/simple1.PNG');
    simpleHover = loadImage('assets/simple2.PNG');
    simpleBox = loadImage('assets/simpleBox.PNG');

    medium = loadImage('assets/medium1.png');
    mediumHover = loadImage('assets/medium2.png');
    mediumBox = loadImage('assets/mediumBox.png');

    hard = loadImage('assets/hard1.png');
    hardHover = loadImage('assets/hard2.png');
    hardBox = loadImage('assets/hardBox.png');
    gameAssetsLoaded = true;
  }, 500); // Simulating 0.5 seconds of loading
}
