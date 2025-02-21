/**
 * Represents a danger in the game.
 */
class Danger {
  /**
   * Creates a new Danger instance.
   * [x, y] - position of danger, danger is on the cloud.
   * size - The size of danger's image.
   */
  constructor(x, y, cloud) {
    this.x = x; //生成时需要判定x不超出cloudPos
    this.size = 10;
    this.y = cloud.y + this.size / 2;
  }
  
  show() {
    image(dangerImg, this.x, this.y, this.size, this.size);
  }
}