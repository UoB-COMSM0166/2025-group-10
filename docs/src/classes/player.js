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
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.life = 3;
    this.pace = 5;
    this.curHalo = 0;
    this.size = 10;
  }

  move() {
    //在main中判定x,y是否超出width，height，这里不判定
    if (keyPressed()) {
      if (key == ' ') {
        this.y -= 40;
      }
    }
    if (keyIsDown(LEFT_ARROW)) this.x -= 10;
    if (keyIsDown(RIGHT_ARROW)) this.x += 10;
  }

  addLife() {
    if (this.life < 3) {
      this.life += 1;
    }
  }
  
  loseLife() {
    this.life -= 1;
  }
  
  addHalo() {
    this.curHalo += 1;
    if (this.curHalo == 3) {
      this.addLife();
      this.curHalo = 0;
    }
  }
  
  collidesWith(obj) {
    if (this.y !== obj.y) {
      return false;
    }
    
    let d = dist(this.x, obj.x);
    if (d < this.size / 2 + obj.size / 2) {
      if (obj instanceof Halo) {
        addHalo();
        return true;
      } else {
        loseLife();
        return true;
      }
    }
    return false;
  }
  
  show() {
    image(playerImg, this.x, this.y, this.size, this.size);
  }
}