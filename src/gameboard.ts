import Ship from '@/ship';

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

class Gameboard {
  attacks: number;
  missed: string[];
  cells: Cell[][];
  BOARD_SIZE: number;
  validRows: string[];

  constructor() {
    this.BOARD_SIZE = 10;
    this.attacks = 0;
    this.missed = [];
    this.cells = this.initBoard(this.BOARD_SIZE);
    this.validRows = [...'abcdefghij'];
  }

  initBoard(size: number): Cell[][] {
    const arr: Cell[][] = [];
    for (let i = 0; i < size; i++) {
      arr.push([]);
      for (let j = 0; j < size; j++) {
        arr[i].push(new Cell(i, j));
      }
    }
    return arr;
  }

  fetchCell(coord: string): Cell | null {
    const coordPattern = /^[a-jA-J](10|[1-9])$/;

    if (!coordPattern.test(coord)) return null;

    const [r, ...c] = coord;

    const row = r.toLowerCase();
    const col = Number(c.join('')) - 1;

    const rowIndex = this.validRows.indexOf(row);
    if (rowIndex === -1 || col < 0 || col >= this.BOARD_SIZE) return null;

    return this.cells[this.BOARD_SIZE - 1 - rowIndex][col] || null;
  }

  placeShip(coord: string, length: number, dir: boolean = true): boolean {
    const ship = new Ship(length);
    const [y, ...x] = coord;
    const initialCol = Number(x.join(''));

    for (let i = 0; i < length; i++) {
      const newCoord = dir
        ? `${y}${initialCol + i}`
        : `${this.validRows[this.validRows.indexOf(y.toLowerCase()) - i]}${initialCol}`;

      const cell = this.fetchCell(newCoord);
      if (!cell || cell.state !== 'water') return false;

      cell.state = 'ship';
      cell.ship = ship;
      cell.ship.placed = true;
    }
    return true;
  }

  receiveAttack(coord: string): boolean {
    const cell = this.fetchCell(coord);
    if (!cell) return false;
    if (cell.state === 'ship' && cell.ship) {
      cell.ship.hit();
      cell.state = 'wreckage';
      this.attacks++;
      return true;
    }
    if (cell.state === 'water') {
      cell.state = 'missed';
      this.missed.push(coord);
      this.attacks++;
      return true;
    }
    return false;
  }
}

export default Gameboard;
