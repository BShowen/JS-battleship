import Ship from "./Ship";

describe("Hitting a ship", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship([
      [0, 0],
      [1, 0],
      [2, 0],
    ]);
    return ship;
  });

  it("Takes a hit", () => {
    expect(ship.hit([0, 0])).toBeTruthy();
  });

  it("Ignores a miss", () => {
    expect(ship.hit([0, 1])).not.toBeTruthy();
  });

  it("Doesn't take too many hits", () => {
    ship.hit([0, 0]);
    ship.hit([1, 0]);
    ship.hit([2, 0]);
    expect(ship.hit([2, 0])).not.toBeTruthy();
  });

  it("Doesn't accept the same hit more than once", () => {
    ship.hit([0, 0]);
    expect(ship.hit([0, 0])).not.toBeTruthy();
  });
});

describe("Sinking a ship", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship([
      [4, 7],
      [5, 7],
    ]);
    return ship;
  });

  it("Knows when it is sunk", () => {
    ship.hit([4, 7]);
    ship.hit([5, 7]);
    expect(ship.isSunk()).toBeTruthy();
  });

  it("Knows when it is not sunk", () => {
    ship.hit([4, 7]);
    expect(ship.isSunk()).not.toBeTruthy();
    ship.hit([0, 0]); //Make a random hit
    ship.hit([5, 7]);
    expect(ship.isSunk()).toBeTruthy();
  });
});
