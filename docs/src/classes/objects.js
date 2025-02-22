class Objects {
  /**
   * Creates a new Object instance, including danger and halo.
   * [x, y] - position of object, object is on the cloud.
   * size - The size of object's image.
   */
   constructor(cloud) {
    this.size = 10;
    this.cloud = cloud;
    this.x = random(cloud.x - cloud.w / 2 + this.size, cloud.x + cloud.w / 2 - this.size);
    this.y = cloud.y - cloud.h / 2 - this.size;
     
    this.offsetX = this.x - cloud.x;
  }
  
  move() {
    this.x = this.offsetX + this.cloud.x;
  }
  
  show() {}
}