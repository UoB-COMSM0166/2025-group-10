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
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = 30;
    this.h = 5;
  }
  
  show() {
    image(cloudImg, this.x, this.y, this.w, this.h);
  }
}