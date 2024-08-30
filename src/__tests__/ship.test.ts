import Ship from '@/ship';

let ship: Ship;

beforeEach(() => {
  ship = new Ship(3);
});

it('Check that initial values are correct', () => {
  expect(ship.hitCount).toBe(0);
  expect(ship.length).toBe(3);
  expect(ship.sunk).toBe(false);
  expect(ship.horizontal).toBe(true);
});

it('Check the Hit() function', () => {
  ship.hit();
  expect(ship.hitCount).toBe(1);
});

it('Check the isSunk() function and hit limit', () => {
  for (let i = 0; i < 4; i++) {
    ship.hit();
  }
  expect(ship.hitCount).toBe(3);
  expect(ship.isSunk()).toBe(true);
});

it('Check the flip() function', () => {
  ship.flip();
  expect(ship.horizontal).toBe(false);
});

it('Should not allow more hits than the ship length', () => {
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.hitCount).toBe(3);
  expect(ship.isSunk()).toBe(true);
});

it('Should not allow flipping a ship that is already sunk', () => {
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
  ship.flip();
  expect(ship.horizontal).toBe(true);
});
