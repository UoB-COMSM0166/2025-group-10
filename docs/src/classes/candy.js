/**
 * Represents a candy in the game.
 */
class Candy extends Objects {
  /**
   * Creates a new Candy instance.
   * [x, y] - position of candy, candy is on the cloud.
   * size - The size of candy's image.
   */
  constructor(cloud) {
    super(cloud);
    this.size = 50;
  }
  move(){
    super.move();
  }
  
  show() {
    image(candyImg, this.x, this.y + 20, this.size, this.size);
  }
}