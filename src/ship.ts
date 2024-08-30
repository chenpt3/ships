class Ship {
  length: number;
  hitCount: number;
  sunk: boolean;
  horizontal: boolean;
  placed: boolean;
  constructor(length: number) {
    this.length = length;
    this.hitCount = 0;
    this.sunk = false;
    this.horizontal = true;
    this.placed = false;
  }

  hit() {
    if (this.hitCount < this.length) {
      this.hitCount++;
      if (this.hitCount === this.length) {
        this.sunk = true;
      }
    }
  }

  isSunk() {
    return this.sunk;
  }

  flip() {
    if (this.isSunk()) return;
    if (this.placed) return;
    this.horizontal = !this.horizontal;
  }
}

export default Ship;
