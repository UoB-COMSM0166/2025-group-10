/**
 * Represents a Monster in the game.
 */
class Monster extends Danger {
  /**
   * Creates a new Monster instance.
   * [x, y] - position of monster, monster is on the cloud and can't move outside of cloud.
   * size - The size of monster's image.
   * speed - The speed of monster.
   * direction - The direction of monster, initially is right. Right = 1, left = -1;
   */
  constructor(x, cloud) {
    this.x = x;
    this.size = 10;
    this.y = cloud.y + cloud.h / 2 + this.size / 2;
    this.speed = 2;
    this.direction = 1;
    
    this.maxX = cloud.x + cloud.w / 2;
    this.minX = cloud.x - cloud.w / 2;
  }
  
  move() {
    this.x += this.speed * this.direction;
    if (this.x <= minX || this.x >= maxX) {
      this.direction *= -1;
    }
  }
  
  show() {
    image(monsterImg, this.x, this.y, this.size, this.size);
  }  
}