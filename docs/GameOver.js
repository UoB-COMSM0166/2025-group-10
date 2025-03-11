let bg;
let buttons = [];
let buttonLabels = ["Play Again", "Settings", "Exit Game"];
let buttonX, buttonY;
let buttonWidth = 200;
let buttonHeight = 50;
let spacing = 15; // buttons
let baseTextSize = 100;

let flashTimer = 0;

function preload() {
    bg = loadImage("/assests/images/Background.png"); 
}

function setup() {
    createCanvas(800, 600);
    textAlign(CENTER, CENTER);
    textFont("Comic Sans MS");
    textSize(70);
    
    buttonX = width / 2;
    buttonY = height / 2 + 40; // 按鈕群組下移
    
    for (let i = 0; i < buttonLabels.length; i++) {
        buttons.push({
            label: buttonLabels[i],
            x: buttonX,
            y: buttonY + i * (buttonHeight + spacing),
            w: buttonWidth,
            h: buttonHeight,
            hover: false
        });
    }
}

function draw() {
    background(bg);
    
    // Control Game Over!
    flashTimer++;
    let alphaValue = map(sin(flashTimer * 0.1), -1, 1, 150, 255); 
    let textSizeValue = baseTextSize + map(sin(flashTimer * 0.1), -1, 1, 0, 10);
    fill(178, 34, 34); 
    textSize(textSizeValue);
    text("Game Over!", width / 2, buttonY - buttonHeight - 80); 
    
    // Buttons Words
    textSize(34);
    for (let btn of buttons) {
        btn.hover = mouseX > btn.x - btn.w / 2 && mouseX < btn.x + btn.w / 2 &&
                    mouseY > btn.y - btn.h / 2 && mouseY < btn.y + btn.h / 2;
        
        fill(btn.hover ? 'rgb(255,182,193)' : 'black');
        text(btn.label, btn.x, btn.y);
    }
}


function mousePressed() {
    for (let btn of buttons) {
        if (btn.hover) {
            if (btn.label === "Play Again") {
                console.log("Play Again clicked");
            } else if (btn.label === "Settings") {
                console.log("Settings clicked");
            } else if (btn.label === "Exit Game") {
                console.log("Exit Game clicked");
            }
        }
    }
}

function windowResized() {
    resizeCanvas(800, 600);
}