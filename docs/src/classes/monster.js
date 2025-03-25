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
    this.size = 40; // 怪物的大小
    
    this.updateBounds();
    this.x = (this.minX + this.maxX) / 2; // 設定怪物初始位置在範圍中心
  }

  updateBounds() {
    this.minX = this.cloud.x - this.cloud.w / 2; // 雲朵左邊界
    this.maxX = this.cloud.x + this.cloud.w / 2 - this.size; // 雲朵右邊界
    this.y = this.cloud.y - this.cloud.h / 2 - this.size; // 怪物應該在雲的上方
  }

  move() {
    this.updateBounds(); // 確保邊界是最新的
    this.x += this.speed * this.direction;

    // 如果超出範圍，則反轉方向並確保不溢出
    if (this.x <= this.minX) {
      this.x = this.minX;
      this.direction *= -1;
    }
    if (this.x >= this.maxX) {
      this.x = this.maxX;
      this.direction *= -1;
    }
  }
  
  show() {
    if (this.direction === -1) {
      image(monsterLeftImg, this.x, this.y, this.size, this.size);
    } else {
      image(monsterRightImg, this.x, this.y, this.size, this.size);
    }
  }  
}