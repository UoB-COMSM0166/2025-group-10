/**
 * Represents a player in the game.
 */
class Player {
  /**
   * Creates a new Player instance.
   * [x, y] - Initially, player should be at position[width/2, height]
   * life - The life for the player, initially 3, at most 3, if is 0 the game will be over.
   * pace - The pace of the player, for common player pace is 5, while for angle pace is 3.
   * candyCount - The current number of candies player has. Player can only have at most 3 candies. 3 candies turn into 1 life.
   * size - The size of player's image.
   * maxX - The most right position movingCloud can move to. Initially, the total distance that movingCloud can move is 2/3 of width of canvas.
   * minX - The most left position movingCloud can move to.
   * direction - The direction depends on the last move direction. Initially direction is right. Let left = -1, right = 1.
   * jumpPower - When pressing space, player can jump 40.
   * gravity - After jumping, player can fall down automatically, until reach the bottom of canvas or a cloud.
   * prevY - After jumping, storing the previous height.
   * currentCloud - Current cloud player is landing on.
   * cloudOffsetX - Width distance between player.x and current cloud.x.
   * landingY - Height of player when trying to land on a cloud.
   * isControlled - If player is controlled to move left or right.
   * isJumping - If player is jumping.
   */
  constructor(x, y, life, candyCount) {
    this.x = x;
    this.life = life;
    this.pace = 5;
    this.candyCount = candyCount;
    this.size = 20;
    this.y = y - this.size / 2;
    this.direction = 1;
    this.jumpPower = -15;  // 調整 jumpPower 為較小的數值
    this.gravity = 0.8;    // 可根據需要調整重力值
    this.velocity = 0;     // 垂直速度
    this.isOnCloud = false;
    this.prevY = this.y;   // 用來儲存上一幀的 y 值

    // 當落在移動雲上時，記錄該雲以及相對偏移與落地高度    
    this.currentCloud = null;
    this.cloudOffsetX = 0;
    this.landingY = this.y;

    // 是否收到左右操控（true 表示有操控輸入）
    this.isControlled = false;

    // 新增跳躍標記
    this.isJumping = false;
  }
  
  update() {
    // 儲存上一幀的 y 值
    this.prevY = this.y;

    // 如果玩家目前附著在移動雲上，且不在跳躍狀態
    if (this.currentCloud && !this.isJumping) {
      // 檢查玩家是否超出雲的水平範圍
      if (this.x < this.currentCloud.x - this.currentCloud.w / 2 ||
        this.x > this.currentCloud.x + this.currentCloud.w / 2) {
        this.currentCloud = null;
      } else {
        if (!this.isControlled) {
          this.x = this.currentCloud.x + this.cloudOffsetX;
        }
        this.y = this.landingY;
        this.velocity = 0;
        this.isOnCloud = true;
      }
    } else {
      // 沒有附著，或在跳躍中：正常受重力影響
      this.y += this.velocity;
      this.velocity += this.gravity;
      this.isOnCloud = false;
    }

     // 當玩家跳躍後開始下落時，取消跳躍狀態
      if (this.isJumping && this.velocity > 0) {
      this.isJumping = false;
    }

    // 檢查與雲的碰撞（僅在不處於跳躍狀態下進行）
    if (!this.isJumping) {
      for (let cloud of clouds) {
        if (this.currentCloud) break;
        let cloudTop = cloud.y - cloud.h / 2;
        if (
          this.velocity > 0 &&
          (this.prevY + this.size / 2) <= cloudTop &&
          (this.y + this.size / 2) >= cloudTop &&
          this.x >= cloud.x - cloud.w / 2 &&
          this.x <= cloud.x + cloud.w / 2
        ) {
          if (cloud instanceof MovingCloud) {
            this.currentCloud = cloud;
            this.cloudOffsetX = this.x - cloud.x;
            this.landingY = cloudTop - this.size / 2;
          } else {
            this.y = cloudTop - this.size / 2;
            this.velocity = 0;
            this.isOnCloud = true;
          }
        }
      }
    }

    // 若玩家落到底部，解除附著並處理生命損失
    if (this.y + this.size / 2 >= canvasHeight) {
      this.y = canvasHeight - this.size / 2;
      this.velocity = 0;
      this.currentCloud = null;
      this.isOnCloud = false;
    }
    
    // 每一幀結束前，重置操控標記
    this.isControlled = false;

    if (this.y < canvasHeight / 2) {
      // 計算玩家距離中線的差距
      let diff = canvasHeight / 2 - this.y;
      // 設定一個平滑係數，例如 0.1，這個值可以根據遊戲需求調整
      let shiftAmount = diff * 0.1;
      shiftScreen(shiftAmount);
      // 讓玩家的 y 座標逐漸往中線靠攏
      this.y += shiftAmount;
    }
  }
  
  move(dir) {
    // 玩家左右移動（允許操控時調整位置）
    let newX = this.x + dir * this.pace;
    if (newX < this.size / 2) {
      newX = this.size / 2;
    } else if (newX > canvasWidth - this.size / 2) {
      newX = canvasWidth - this.size / 2;
    }
    this.x = newX;
    // 如果附著在移動雲上，同步更新與雲的相對偏移
    if (this.currentCloud) {
      this.cloudOffsetX = this.x - this.currentCloud.x;
    }
    // 設定本幀有操控輸入，這樣 update() 就不會覆蓋玩家輸入
    this.isControlled = true;
  }
  
  jump() {
    // 允許跳躍（無論是在地面或雲上，只要速度為 0）
    if (this.velocity === 0) {
      this.velocity = this.jumpPower;
      // 跳躍時解除附著狀態
      this.currentCloud = null;
      this.isOnCloud = false;
    }
  }

  addLife() {
    if (life < 3) {
      life += 1;
    }
  }
  
  loseLife() {
    life -= 1;  // 生命值先減少

    // **當 candy 累積 3 個時，額外補血**
    if (life === 2 && candyCount === 3) {
      life += 1;
      candyCount = 0;
    }

    // **🔴 只有當 `life = 0` 時，才進入 Game Over**
    if (life <= 0) {
      gameScreen = "gameOver";
    }
  }
  
  addHalo() {
    if (curHalo === 2) {
      if (life !== 3) {
        this.addLife();
        curHalo = 0;
      } else {
        curHalo += 1;
      }
    } else {
      curHalo += 1;
    }
  }
  
  collidesWith(obj) {
    let tolerance = 5;
    if (abs((obj.y + obj.size) - (this.y + this.size / 2)) > tolerance)     {
      return false;
    }
    let d = abs(this.x - obj.x);
    if (d < this.size / 2 + obj.size / 2) {
      if (obj instanceof Candy) {
        // 不要在這裡直接調用 this.addHalo();
        return true;
      } else if (obj instanceof Danger) {
        return true;
      } else if (obj instanceof Halo) {
        if (this.life > 0) {
          //TODO
          console.log("You win the game");
        }
        return true;
      } else if (obj instanceof Candy) {
        return true;
      }
    }
    return false;
  }
  
  show() {
    image(playerImg, this.x, this.y, this.size, this.size);
    // if (this.direction === -1) {
    //   image(playerLeftImg, this.x, this.y, this.size, this.size);
    // } else {
    //   image(playerRightImg, this.x, this.y, this.size, this.size);
    // }
  }  
}