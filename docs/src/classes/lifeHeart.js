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
  }
  
  //Status - 1: heart exist, 0: lose life
  show(status) {
    if (status === 1) {
      tint(255, 255);
    } else {
      tint(255, 0);
    }
    image(heartImg, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
  }
}