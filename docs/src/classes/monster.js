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
  constructor(cloud) {
    super(cloud);
    this.speed = 2;
    this.direction = 1;
    
    this.maxX = cloud.x + cloud.w / 2 - this.size / 2;
    this.minX = cloud.x - cloud.w / 2 + this.size / 2;
  }
  
  move() {
    this.maxX = this.cloud.x + this.cloud.w / 2 - this.size / 2;
    this.minX = this.cloud.x - this.cloud.w / 2 + this.size / 2;
    
    this.x += this.speed * this.direction;
    if (this.x <= this.minX || this.x >= this.maxX) {
      this.direction *= -1;
    }
    while (this.x <= this.minX || this.x >= this.maxX) {
      this.x += this.speed * this.direction;
    }
  }
  
  show() {
    fill(0, 255, 0);
    rect(this.x, this.y, this.size, this.size);
    //image(monsterImg, this.x, this.y, this.size, this.size);
  }  
}