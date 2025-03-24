 /**
 * Represents a halo in the game.
 */
class Halo extends Objects {
  /**
   * Creates a new Halo instance.
   * [x, y] - position of halo, halo is on the final cloud.
   * size - The size of halo's image.
   */
  constructor(cloud) {
    super(cloud);
  }
  
  move(){
    super.move();
  }
  
  show() {
    image(haloImg, this.x, this.y, this.size, this.size);
  }
}