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
    this.w = cloudWidth;
    this.h = cloudHeight;
  }
  
  move(){}
  
  show() {
    image(cloudImg, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
  }
}