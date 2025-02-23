/**
 * Represents an angle player in the game.
 */
class Angle extends Player {
  /**
   * Creates a new Angle player instance.
   * [x, y] - Initially, angle should be at position[width/2, height]
   * life - The life for the angle, initially 3, at most 3, if is 0 the game will be over.
   * pace - The pace of the angle is 3.
   * curHalo - The current number of haloes angle has. Angle can only have at most 3 haloes. 3 haloes turn into 1 life.
   * size - The size of angle's image.
   * attckDistance - AttckDistance of angle.
   */
  constructor(x, y) {
    super(x, y);
    this.pace = 3;
    this.attckDistance = 5;
  }

  move() {
    super.move();
  }
  
  jump() {
    super.jump();
  }

  addLife() {
    super.addLife();
  }
  
  loseLife() {
    super.loseLife();
  }
  
  addHalo() {
    super.addHalo();
  }
  
  collidesWith(obj) {
    let d = dist(this.x, obj.x);

    if (d < this.size / 2 + obj.size / 2) {
      if (obj instanceof Halo) {
        addHalo();
      } else if (obj instanceof Danger){
        loseLife();
      } else if (obj instanceof Monster) {
        if (!attack(obj)) {
          loseLife();
        }
      } else if (obj instanceof Wing) {
        console.log("You win the game");
        return true;
      }
    }
  }
  
  canAttack(monster) {
    if (this.y !== monster.y) {
      return false;
    }
    let d = dist(this.x, obj.x);
    if ((obj.x > this.x && this.attackDirection == 1) || (obj.x < this.x && this.attackDirection == 0)) {
      if (d < this.size / 2 + obj.size / 2 + this.attckDistance) {
        return true;
      }
    }
    return false;
  }
  
  show() {
    super.show();
    // if (this.direction === -1) {
    //   image(angleLeftImg, this.x, this.y, this.size, this.size);
    // } else {
    //   image(angleRightImg, this.x, this.y, this.size, this.size);
    // }
  }
}