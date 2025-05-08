/**
 * Represents a plateform in the game.
 */
class Plateform {
  /**
   * Creates a new Plateform instance.
   * [x, y] - position of plateform.
   * w - The width of plateform's image.
   * h - The height of plateform's image.
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = canvasWidth;
    this.h = grassHeight;
  }
  
  move(){}
  
  show() {
    image(grassImg, this.x - this.w / 2, this.y - this.h, this.w, this.h);
  }
}