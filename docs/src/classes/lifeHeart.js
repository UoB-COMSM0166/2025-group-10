/**
 * Represents a heart in the game.
 */
class LifeHeart {
  /**
   * Creates a new LifeHeart instance.
   * [x, y] - position of heart.
   * size - The size of heart's image.
   */
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.img = loadImage('assets/R.png');
  }
  
  //Status - 1: heart exist, 0: lose life
  show(status) {
    image(this.img, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
    if (status === 1) {
      tint(255, 255);
    } else {
      tint(255, 0);
    }
  }
}