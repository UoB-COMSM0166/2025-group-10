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
   * attackDirection - Angle can attck, the direction depends on the last move direction. Initially direction is right. Let left = 0, right = 1.
   * size - The size of angle's image.
   * attckDistance - AttckDistance of angle.
   */
  constructor(x, y) {
    super(x, y);
    this.pace = 3;
    this.attackDirection = 1;
    this.attckDistance = 5;
  }

  move() {
    if (keyPressed()) {
      if (key == ' ') {
        this.y -= 5;
      }
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
      this.attckDirection = 0;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
      this.attckDirection = 1;
    }
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
    image(AngleImg, this.x, this.y, this.size, this.size);
  }
}