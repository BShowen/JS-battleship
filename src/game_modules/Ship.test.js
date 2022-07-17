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

describe("Ships can be instantiated without coordinates", () => {
  test("Returns a ships name", () => {
    const ship = new Ship([[0, 0][(0, 1)]], "Carrier");
    expect(ship.name).toBe("Carrier");
  });

  it("Instantiates a ship without coordinates", () => {
    const ship = new Ship(null, "Submarine");
    expect(ship.name).toBe("Submarine");
  });
});

describe("Some methods are undefined without coordinates", () => {
  let ship;
  beforeEach(() => {
    ship = new Ship(null, "Carrier");
  });

  test("The hit method is undefined", () => {
    expect(ship.hit).toBe(undefined);
  });

  test("The isSunk method is undefined", () => {
    expect(ship.isSunk).toBe(undefined);
  });

  test("The name method is NOT undefined", () => {
    expect(ship.name).not.toBe(undefined);
    expect(ship.name).toBe("Carrier");
  });
});
