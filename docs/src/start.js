let bgImg;
let bgGame;
let angelWords;
let titleY; // 標題 Y 軸位置
let angle = 0; // 角度用來計算彈跳幅度


//let playNormal;
//let playHover;
let playX, playY;
let playWidth=100
let playHeight=40;

let buttonX, buttonY;
let buttonWidth = 150;
let buttonHeight = 50;

let pageState=0;

let challengeWords;
let simple,simpleHover;
let simpleX, simpleY, simpleWidth, simpleHeight;
let medium, mediumHover;
let hard, hardHover;

let selectedChallenge = -1;

function preload() {
  bgImg = loadImage('/images/bg.png');
  bgGame = loadImage('/images/GameBackground.jpg');
  angelWords = loadImage('/images/upup.png');
  /*playNormal = loadImage('/images/playorange.png');
  playHover = loadImage('/images/playgreen.png'); */
  challengeWords=loadImage('/images/selectchallenge.png');
  simple = loadImage('/images/simple1.png');
  simpleHover = loadImage('/images/simple2.png');
  medium = loadImage('/images/medium1.png');
  mediumHover = loadImage('/images/medium2.png');
  hard = loadImage('/images/hard1.png');
  hardHover = loadImage('/images/hard2.png');
}

function setup() {
  createCanvas(800, 600);
  
  textAlign(CENTER, CENTER);
  textFont("Comic Sans MS");
  textSize(50);
  
  titleY = -20; // 設定標題初始位置
  /*playWidth = playNormal.width; // 設定按鈕寬度
  playHeight = playNormal.height / 1.5; */
  
  // 設定 PLAY 文字的中心位置
  playX = width /2;
  playY = height - 150;
  
  
  
  
  
  simpleWidth = simple.width; // 設定按鈕寬度
  simpleHeight = simple.height ; 
  simpleX = 180;
  simpleY = 10;
}

function draw() {
  if (pageState == 0) { 
    image(bgImg, 0, 0, width, height);
    
    let bounce = sin(angle) * 20; // 讓標題上下移動 10 像素範圍
    angle += 0.05; // 控制動畫速度
    
    image(angelWords, 90, titleY + bounce, angelWords.width/0.7, angelWords.height/0.7); 

    /*let isPlayHover = mouseX > playX && mouseX < playX + playWidth && mouseY > playY && mouseY < playY + playHeight;*/
    // 檢查滑鼠是否在 PLAY 文字範圍內
    let isPlayHover = mouseX > playX - playWidth / 2 && mouseX < playX + playWidth / 2 &&
                      mouseY > playY - playHeight
  +10/ 2 && mouseY < playY + playHeight / 2;

    // 改變文字顏色（滑鼠懸停變橘色）
    fill(isPlayHover ? '#DFA0B2' : '#0BCBB8'); 
    text("PLAY", playX, playY);
  }
    

    else if (pageState == 1) {
    let isSimpleHover = mouseX > simpleX+120 && mouseX < simpleX + simpleWidth-80 && mouseY > simpleY+150 && mouseY < simpleY + simpleHeight-150;
    let isMediumHover = mouseX > simpleX+120 && mouseX < simpleX + simpleWidth-80 && mouseY > simpleY+150+140 && mouseY < simpleY + simpleHeight-150+140;
    
    let isHardHover = mouseX > simpleX+120 && mouseX < simpleX + simpleWidth-80 && mouseY > simpleY+150+140+140 && mouseY < simpleY + simpleHeight-150+140+140;

   image(bgGame, 0, 0, width, height);
   image(challengeWords, 0, -80, challengeWords.width/0.8, challengeWords.height/1);
    
    image(simple, 180, 10,  simple.width,  simple.height/1);
    image(medium, 180, 150, medium.width, medium.height/1);
    image(hard, 180, 290, hard.width, hard.height/1);
    
    if(isSimpleHover){
      image(simpleHover, simpleX, simpleY, simpleWidth, simpleHeight);
    } else {
      image(simple, simpleX, simpleY, simpleWidth, simpleHeight);
    }
    
     if(isMediumHover){
      image(mediumHover, simpleX, simpleY+140, simpleWidth, simpleHeight);
    } else {
      image(medium, simpleX, simpleY+140, simpleWidth, simpleHeight);
    }
    
    if(isHardHover){
      image(hardHover, simpleX, simpleY+140+140, simpleWidth, simpleHeight);
    } else {
      image(hard, simpleX, simpleY+140+140, simpleWidth, simpleHeight);
    }
    
  }else if (pageState == 2) {
    game_setup();
  }
}

function mousePressed() {
  let isPlayHover = mouseX > playX - playWidth / 2 && mouseX < playX + playWidth / 2 &&
                    mouseY > playY - playHeight / 2 && mouseY < playY + playHeight / 2;

  if (pageState == 0 && isPlayHover) {
    pageState = 1;
  }   else if (pageState == 1) {
    if (mouseX > 300 && mouseX < 300 + simple.width && mouseY > 100 && mouseY < 100 + simple.height/1.5) {
      selectedChallenge = 0;
      pageState = 2;
    } else if (mouseX > 300 && mouseX < 300 + medium.width && mouseY > 250 && mouseY < 250 + medium.height/1.5) {
      selectedChallenge = 1;
      pageState = 2;
    } else if (mouseX > 300 && mouseX < 300 + hard.width && mouseY > 400 && mouseY < 400 + hard.height/1.5) {
      selectedChallenge = 2;
      pageState = 2;
    }
      }
  }
