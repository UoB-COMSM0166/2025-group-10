class Objects {
  /**
   * Creates a new Object instance, including danger and halo.
   * [x, y] - position of object, object is on the cloud.
   * size - The size of object's image.
   */
   constructor(cloud) {
    this.size = 10;
    this.cloud = cloud;
    this.x = random(cloud.x - cloud.w / 2 + this.size * 2, cloud.x + cloud.w / 2 - this.size * 2);
    this.y = cloud.y - cloud.h / 2 - this.size;
     
    this.offsetX = this.x - cloud.x;
  }
  
  move() {
    this.x = this.offsetX + this.cloud.x;
    this.y = this.cloud.y - this.cloud.h / 2 - this.size;
  }
  
  show() {}
}