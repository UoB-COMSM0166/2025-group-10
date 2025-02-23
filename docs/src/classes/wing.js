 /**
 * Represents a wing in the game.
 */
class Wing extends Objects {
  /**
   * Creates a new Wing instance.
   * [x, y] - position of wing, wing is on the final cloud.
   * size - The size of wing's image.
   */
  constructor(cloud) {
    super(cloud);
  }
  
  move(){
    super.move();
  }
  
  show() {
    fill(0, 255, 255);
    rect(this.x, this.y, this.size, this.size);
    //image(wingImg, this.x, this.y, this.size, this.size);
  }
}