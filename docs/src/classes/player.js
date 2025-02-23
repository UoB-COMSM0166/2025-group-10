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
   * newY - After jumping, the ideal height player should be according to jumpPower.
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
    this.gravity = 3 ;
    this.isOnCloud = false;
    this.newY = this.y;
  }
  
  update(canvasHeight, clouds, objects) {
    //Jump beyond canvasHeight / 2, move clouds
    if (this.newY < canvasHeight / 2) {
      while (this.newY < canvasHeight / 2) {
        shiftScreen(this.gravity);
        this.y = canvasHeight / 2;
        this.newY += this.gravity;
      }
      
    } else {
      this.y = this.newY;
    }
    
    this.newY = this.y;
    // Drop with gravity
    if (this.y !== canvasHeight - this.size / 2) {
      this.newY += this.gravity;
      //Drop at bottom, life -1
      if (this.newY + this.size / 2 >= canvasHeight) {
        this.y = canvasHeight - this.size / 2;
        this.loseLife();
      } else {
        this.y = this.newY;
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
      this.newY = this.y;
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
    this.newY = this.y + this.jumpPower;
    this.isOnCloud = false;
  }

  addLife() {
    if (this.life < 3) {
      this.life += 1;
      console.log("current life is:" + this.life);
    }
  }
  
  loseLife() {
    if (this.life > 0) {
      this.life -= 1;
    } else {
      console.log("game over");
    }
    console.log("current life is:" + this.life);
  }
  
  addHalo() {
    if (this.curHalo === 3) {
      if (this.life !== 3) {
        this.addLife();
        this.curHalo = 0;
      }
    } else {
      this.curHalo += 1;
    }
    console.log("current life is:" + this.life);
    console.log("current halo is:" + this.curHalo);
  }
  
  collidesWith(obj) {
    if (obj.y + obj.size !== this.y + this.size / 2) {
      return false;
    }
    let d = abs(this.x - obj.x);
    if (d < this.size / 2 + obj.size / 2) {
      if (obj instanceof Halo) {
        this.addHalo();
        return true;
      } else if (obj instanceof Danger){
        this.loseLife();
        return true;
      } else if (obj instanceof Wing) {
        if (this.life > 0) {
          console.log("You win the game");
        }
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
  
  show() {
    circle(this.x, this.y, this.size);
    // if (this.direction === -1) {
    //   image(playerLeftImg, this.x, this.y, this.size, this.size);
    // } else {
    //   image(playerRightImg, this.x, this.y, this.size, this.size);
    // }
  }  
}