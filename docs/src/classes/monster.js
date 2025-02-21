/**
 * Represents a Monster in the game.
 */
class Monster extends Danger {
  /**
   * Creates a new Monster instance.
   * [x, y] - position of monster, monster is on the cloud and can't move outside of cloud.
   * size - The size of monster's image.
   */
  constructor(x, y, cloud) {
    this.x = x;
    this.size = 10;
    this.y = cloud.y + this.size / 2;
  }
  
  move() {
    
  }
  
  show() {
    image(monsterImg, this.x, this.y, this.size, this.size);
  }
  
  //disapper()
}