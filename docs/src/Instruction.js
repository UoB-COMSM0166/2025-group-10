let bg;
let candyImg;

function preload() {
    bg = loadImage("assets/GameBackground.jpg"); 
    candyImg = loadImage("assets/Candy.png");
    ghostImg = loadImage("assets/ghost1.gif");
    ghostfireImg = loadImage("assets/ghost fire.gif");
    heartImg = loadImage("assets/blood.png");
    holeImg = loadImage("assets/Hole2.png");
}

function setup() {
    createCanvas(800, 600);
    textAlign(CENTER, CENTER);
    textSize(24);
    textFont("Comic Sans MS"); 
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

function draw() {
    background(bg);
    fill(0);
    
    // Title
    textSize(50);
    text("Instructions", width / 2, 100);
    
    // Game Instructions
    textSize(24);
    let textX = width / 2 - 50

    // Candy
    fill(255, 150, 0);  
    text("Candy - ", 150, 200);
    fill(0, 0, 0);
    text("Collect three candies to gain an extra life!", textX + 85, 200);

    // Ghost
    fill(255, 150, 0);
    text("Ghost - ", 150, 250);
    fill(0, 0, 0);
    text("If you touch a ghost, you will lose one life!", textX + 85, 250);

    // Ghost Fire
    fill(255, 150, 0);
    text("Ghost Fire - ", 170, 300);
    fill(0, 0, 0);
    drawWrappedText("If you touch the ghost fire, you will lose one life!", textX + 125, 300, 500);

    // Heart
    fill(255, 150, 0);
    text("Heart - ", 150, 380);
    fill(0, 0, 0);
    drawWrappedText("Represents your life. You start with three lives. If you lose them all, the game is over.", textX + 90, 380, 500);

    // Hole
    fill(255, 150, 0);
    text("Hole - ", 150, 460);
    fill(0, 0, 0);
    drawWrappedText("If you touch the hole, you will fly to heaven and win the game!", textX + 130, 460, 600);
  
    // Image
    image(candyImg, width / 2 - 370, 172, 60, 60); 
    image(ghostImg, width / 2 - 360, 220, 40, 50);
    image(ghostfireImg, width / 2 - 350, 282, 26, 30);
    image(heartImg, width / 2 - 360, 355, 50, 50);
    image(holeImg, width / 2 - 370, 435, 70, 70)
}
