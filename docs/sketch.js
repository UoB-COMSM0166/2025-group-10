let brushred = 0;
let brushgreen = 0;
let brushblue = 0;

function setup() {
  
  createCanvas(1000, 1000);
  
  background(200);
  
  textSize(20);
  fill(0);
  text("Click to draw!\nPress 'r' to add some red to your brush.\nPress 'g' to add some green to your brush.\nPress 'b' to add some blue to your brush.\nPress 'o' to turn the color of brush into black\nPress 'c' to clean the board.\n",10,30)
  
}

function draw() {
  
  if(mouseIsPressed){
    
    ellipse(mouseX, mouseY, 20, 20);
    
    fill(0+brushred, 0+brushgreen, 0+brushblue,100); // the color of the shape
    
     noStroke();
  
  }

}


function keyPressed() {
  
  if (key === 'c') {
    background(200);// press 'c' to clean the board
    fill(0);
    text("Click to draw!\nPress 'r' to add some red to your brush.\nPress 'g' to add some green to your brush.\nPress 'b' to add some blue to your brush.\nPress 'o' to turn the color of brush into black\nPress 'c' to clean the board.\n",10,30)
  
  }  
  
  if(key === 'o'){
    brushred = 0;
    brushgreen = 0;
    brushblue = 0;
  }
  
  if(key ==='r'){
   
    brushred = min(brushred+100,300);
    
  }
  
  if(key ==='g'){
    
    brushgreen = min(brushgreen+100,300);
    
  }
  
  if(key === 'b'){
    
    brushblue = min(brushblue+100,300);
    
  }
  
  
  

}