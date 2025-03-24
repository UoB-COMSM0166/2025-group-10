/**
 * Represents a danger in the game.
 */
class Danger extends Objects {
  /**
   * Creates a new Danger instance, including monster.
   * [x, y] - position of danger, danger is on the cloud.
   * size - The size of danger's image.
   */
  constructor(cloud) {
    super(cloud);
    this.size = 25; // 原本可能是 40，現在縮小到 30
  }
  
  move() {
    super.move();
  }
  
  show() {
    image(dangerImg, this.x, this.y, this.size, this.size);
  }
}