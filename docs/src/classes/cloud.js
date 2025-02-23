/**
 * Represents a cloud in the game.
 */
class Cloud {
  /**
   * Creates a new Cloud instance.
   * [x, y] - position of cloud.
   * w - The width of cloud's image.
   * h - The height of cloud's image.
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 70;
    this.h = 10;
  }
  
  move(){}
  
  show() {
    //image(cloudImg, this.x, this.y, this.w, this.h);
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.w, this.h);
  }
}