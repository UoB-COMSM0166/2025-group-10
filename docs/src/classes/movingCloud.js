/**
 * Represents a movingCloud in the game.
 */
class MovingCloud extends Cloud {
  /**
   * Creates a new MovingCloud instance.
   * [x, y] - position of movingCloud.
   * w - The width of movingCloud's image.
   * h - The height of movingCloud's image.
   * speed - The speed of movingCloud.
   * direction - The direction of movingCloud, initially is right. Right = 1, left = -1;
   * maxX - The most right position movingCloud can move to. Initially, the total distance that movingCloud can move is 2/3 of width of canvas.
   * minX - The most left position movingCloud can move to.
   */
  constructor(x, y, w, h, canvasWidth) {
    this.x = x;
    this.y = y;
    this.w = 30;
    this.h = 5;
    this.speed = 2;
    this.direction = 1; 
    
    this.maxX = (x + w / 2 + canvasWidth / 3) > canvasWidth ? canvasWidth : x + canvasWidth / 3;
    this.minX = (x - w / 2 - canvasWidth / 3) < 0 ? 0 : x - canvasWidth / 3;
  }
  
  move() {
    this.x += this.speed * this.direction;
    if (this.x <= minX || this.x >= maxX) {
      this.direction *= -1;
    }
  }
  
  show() {
    image(cloudImg, this.x, this.y, this.w, this.h);
  }
}