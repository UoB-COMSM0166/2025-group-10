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
  }
  
  move() {
    super.move();
  }
  
  show() {
    fill(0, 255, 0);
    rect(this.x, this.y, this.size, this.size);
    //image(dangerImg, this.x, this.y, this.size, this.size);
  }
}