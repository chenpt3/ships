import Ship from '@/games/battleships/ship';

class Cell {
  state: 'water' | 'ship' | 'wreckage' | 'missed';
  ship: null | Ship;
  row: number;
  col: number;

  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
    this.state = 'water';
    this.ship = null;
  }
}

export default Cell;
