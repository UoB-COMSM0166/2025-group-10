/**
 * Represents a coin in the game, every time got a halo, player could win a coin. Three coins equals to on life.
 */
class Coin {
  /**
   * Creates a new Coin instance.
   * [x, y] - position of coin.
   * size - The size of coin's image.
   */
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.img = loadImage('assets/coin.jpg');
  }
  
  //Status - 1: coin exist, else: no coin
  show(status) {
    image(this.img, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
    if (status === 1) {
      tint(255, 255);
    } else {
      tint(255, 0);
    }
  }
}