/**
 * Represents a player in the game.
 */
class Player {
  /**
   * Creates a new Player instance.
   * [x, y] - Initially, player should be at position[width/2, height]
   * life - The life for the player, initially 3, at most 3, if is 0 the game will be over.
   * pace - The pace of the player, for common player pace is 5, while for angle pace is 3.
   * curHalo - The current number of haloes player has. Player can only have at most 3 haloes. 3 haloes turn into 1 life.
   * size - The size of player's image.
   * maxX - The most right position movingCloud can move to. Initially, the total distance that movingCloud can move is 2/3 of width of canvas.
   * minX - The most left position movingCloud can move to.
   * direction - The direction depends on the last move direction. Initially direction is right. Let left = -1, right = 1.
   * jumpPower - When pressing space, player can jump 40.
   * gravity - After jumping, player can fall down automatically, until reach the bottom of canvas or a cloud.
   * velocityY - After jumping, the distance player should fall down;
   */
  constructor(x, y) {
    this.x = x;
    this.life = 3;
    this.pace = 5;
    this.curHalo = 0;
    this.size = 20;
    this.y = y - this.size / 2;
    this.direction = 1;
    this.jumpPower = -150;
    this.gravity = 5;
    this.isOnCloud = false;
  }
  
  update(canvasHeight, clouds, objects) {
    if (this.y != canvasHeight - this.size / 2) {
      let newY = this.y + this.gravity;
      // Stop at the bottom of canvas, life -1
      if (newY + this.size / 2 >= canvasHeight) {
        this.y = canvasHeight - this.size / 2;
        this.velocityY = 0; // Stop falling
        this.loseLife();
      } else {
        this.y = newY;
      }
    }

    // Stop at cloud
    for (let i = clouds.length - 1; i >= 0; i--) {
      let cloud = clouds[i];
      if (
        this.y + this.size / 2 >= cloud.y - cloud.h / 2 &&
        this.y + this.size / 2 <= cloud.y + cloud.h / 2 &&
        this.x >= cloud.x - cloud.w / 2 &&
        this.x <= cloud.x + cloud.w / 2
      ) {
        this.y = cloud.y - cloud.h / 2 - this.size / 2;
        this.isOnCloud = true;
        if (this.collidesWith(objects[i])) {
          objects[i] = new Objects(cloud);
        }
      }
    }
  }
  
  move(dir, canvasWidth) {
    let newX = this.x + dir * this.pace;
    if (dir < 0) {
      this.x = newX < this.size / 2 ? this.size / 2 : newX;
    } else {
      this.x = newX > canvasWidth - this.size / 2 ? canvasWidth - this.size / 2 : newX;
    }
  }
  
  jump() {
    this.y += this.jumpPower;
    this.isOnCloud = false;
  }

  addLife() {
    if (this.life < 3) {
      this.life += 1;
      console.log("current life is:" + this.life);
    }
  }
  
  loseLife() {
    this.life -= 1;
    if (this.life == 0) {
      console.log("game over");
    }
    console.log("current life is:" + this.life);
  }
  
  addHalo() {
    this.curHalo += 1;
    if (this.curHalo === 3) {
      this.addLife();
      this.curHalo = 0;
    }
    console.log("current life is:" + this.life);
    console.log("current halo is:" + this.curHalo);
  }
  
  collidesWith(obj) {
    let d = abs(this.x - obj.x);
    if (d < this.size / 2 + obj.size / 2) {
      if (obj instanceof Halo) {
        this.addHalo();
        return true;
      } else if (obj instanceof Danger){
        this.loseLife();
        return true;
      }
    }
    return false;
  }
  
  show() {
    circle(this.x, this.y, this.size);
    //image(playerImg, this.x, this.y, this.size, this.size);
  }
}