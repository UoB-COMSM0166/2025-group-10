/**
 * Represents a halo in the game.
 */
class Halo {
  /**
   * Creates a new Halo instance.
   * [x, y] - position of halo, halo is on the cloud.
   * size - The size of halo's image.
   */
  constructor(x, y, cloud) {
    this.x = x;
    this.size = 10;
    this.y = cloud.y + this.size / 2;
  }
  
  show() {
    image(haloImg, this.x, this.y, this.size, this.size);
  }
  
  //disapper()
}