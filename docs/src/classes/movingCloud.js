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
    super(x, y, w, h);
    this.speed = 1;
    this.direction = 1; 
    
    this.maxX = (x + this.w / 2 + canvasWidth / 3) > canvasWidth ? canvasWidth - this.w / 2 : x + canvasWidth / 3;
    this.minX = (x - this.w / 2 - canvasWidth / 3) < 0 ? this.w / 2 : x - canvasWidth / 3;
  }
  
  move() {
    this.x += this.speed * this.direction;
    if (this.x <= this.minX || this.x >= this.maxX) {
      this.direction *= -1;
    }
  }
  
  show() {
    super.show();
  }
}