import Gameboard from '@/gameboard';

describe('Board tests', () => {
  let board: Gameboard;

  beforeEach(() => {
    board = new Gameboard();
  });

  describe('Initialization', () => {
    it('Amount of initial attacks', () => {
      expect(board.attacks).toBe(0);
    });

    it('Amount of hit cells', () => {
      expect(board.missed.length).toBe(0);
    });

    describe('Cells initialization', () => {
      it('Amount of rows', () => {
        expect(board.cells.length).toBe(10);
      });

      it('Rows length', () => {
        expect(board.cells[0].length).toBe(10);
      });

      it('Cell state', () => {
        expect(board.cells[0][0].state).toBe('water');
      });

      it('Cell occupied by', () => {
        expect(board.cells[0][0].ship).toBeNull();
      });

      it('Fetch Cell 1', () => {
        expect(board.fetchCell('a1')).toEqual(board.cells[9][0]);
      });

      it('Fetch Cell 2', () => {
        expect(board.fetchCell('j10')).toEqual(board.cells[0][9]);
      });

      it('Fetch Cell 3', () => {
        expect(board.fetchCell('d4')).toEqual(board.cells[6][3]);
      });

      it('Fetch Cell with wrong row', () => {
        expect(board.fetchCell('x1')).toBeNull();
      });

      it('Fetch Cell with wrong column - high', () => {
        expect(board.fetchCell('a11')).toBeNull();
      });

      it('Fetch Cell with wrong column - low', () => {
        expect(board.fetchCell('a0')).toBeNull();
      });

      it('Fetch Cell with wrong row and column - high', () => {
        expect(board.fetchCell('x11')).toBeNull();
      });

      it('Fetch Cell with wrong row and column - low', () => {
        expect(board.fetchCell('x0')).toBeNull();
      });

      it('Fetch Cell with only letters (first one correct)', () => {
        expect(board.fetchCell('ar')).toBeNull();
      });

      it('Fetch Cell with only letters (first one incorrect)', () => {
        expect(board.fetchCell('xr')).toBeNull();
      });

      it('Returns null for coordinate with special characters', () => {
        expect(board.fetchCell('@1')).toBeNull();
      });

      it('Returns null for coordinate with spaces', () => {
        expect(board.fetchCell('a 1')).toBeNull();
      });

      it('Returns null for a coordinate with only one character', () => {
        expect(board.fetchCell('a')).toBeNull();
      });

      it('Returns null for an empty coordinate', () => {
        expect(board.fetchCell('')).toBeNull();
      });

      it('Returns null for a coordinate with an invalid number', () => {
        expect(board.fetchCell('a-1')).toBeNull();
      });

      it('Returns null for mixed valid and invalid characters', () => {
        expect(board.fetchCell('a1x')).toBeNull();
      });
    });
  });

  describe('Check placeShip()', () => {
    describe('Place a horizontal ship on a1', () => {
      beforeEach(() => {
        board.placeShip('a1', 3);
      });

      ['a1', 'a2', 'a3'].forEach((coord) => {
        it(`Check if ${coord} is correctly defined`, () => {
          expect(board.fetchCell(coord)?.state).toBe('ship');
          expect(board.fetchCell(coord)?.ship).toBeTruthy();
        });
      });
    });

    describe('Place a vertical ship on j3', () => {
      beforeEach(() => {
        board.placeShip('j3', 2, false);
      });

      ['j3', 'i3'].forEach((coord) => {
        it(`Check if ${coord} is correctly defined`, () => {
          expect(board.fetchCell(coord)?.state).toBe('ship');
          expect(board.fetchCell(coord)?.ship).toBeTruthy();
        });
      });
    });

    describe('Invalid ship placements', () => {
      it('Place a horizontal ship in an occupied cell', () => {
        board.placeShip('a1', 3);
        expect(board.placeShip('a2', 3)).toBeFalsy();
      });

      it('Place a horizontal ship in a cell that was hit', () => {
        board.placeShip('a1', 3);
        board.receiveAttack('a2');
        expect(board.placeShip('a2', 3)).toBeFalsy();
      });

      it('Place a ship on an out of bounds cell', () => {
        expect(board.placeShip('k1', 3)).toBeFalsy();
      });

      it('Place a horizontal ship that goes out of bounds', () => {
        expect(board.placeShip('a8', 5)).toBeFalsy();
      });

      it('Place a vertical ship that goes out of bounds', () => {
        expect(board.placeShip('b2', 5, false)).toBeFalsy();
      });
    });
  });
});
