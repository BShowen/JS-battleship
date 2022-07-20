import GameBoard from "./GameBoard";

describe("Test the placement of ships", () => {
  let board;
  beforeEach(() => {
    board = new GameBoard();
    return board;
  });

  test("GameBoard can place a ship", () => {
    const coords = [
      [1, 1],
      [2, 1],
      [3, 1],
    ];
    expect(board.placeShip(coords)).toBeTruthy();
  });

  test("Cannot have overlapping ships", () => {
    const coords = [
      [3, 7],
      [4, 7],
      [5, 7],
    ];
    board.placeShip(coords);
    expect(board.placeShip(coords)).not.toBeTruthy();
  });

  test("Ships cannot hang over edge of board", () => {
    const coords_1 = [[0, 10]];
    const coords_2 = [[-1, 1]];
    expect(board.placeShip(coords_1)).not.toBeTruthy();
    expect(board.placeShip(coords_2)).not.toBeTruthy();
  });

  test("Ships cannot touch", () => {
    const ship1 = [
      [1, 1],
      [1, 2],
      [1, 3],
    ];
    const ship2 = [
      [2, 1],
      [3, 1],
      [4, 1],
    ];
    expect(board.placeShip(ship1)).toBeTruthy();
    expect(board.placeShip(ship2)).not.toBeTruthy();
  });

  test("Test the shipsAreTouching() method", () => {
    board.placeShip([
      [3, 3],
      [4, 3],
      [5, 3],
    ]);
    expect(
      board.shipsAreTouching([
        [4, 4],
        [4, 5],
        [4, 6],
      ])
    ).toBeTruthy();
  });
});

describe("Receiving attack commands", () => {
  let board;

  beforeEach(() => {
    board = new GameBoard();
    board.placeShip([
      [0, 0],
      [1, 0],
    ]);
  });

  test("Responds properly to direct hits on a ship", () => {
    board.receiveAttack([1, 0]);
    expect(board.receiveAttack([0, 0])).toBeTruthy();
  });

  test("Responds properly to missed hits", () => {
    const results = board.receiveAttack([1, 1]);
    expect(results[0]).not.toBeTruthy();
  });

  test("Doesn't allow ship hits on the same coordinate", () => {
    board.receiveAttack([0, 0]);
    const results = board.receiveAttack([0, 0]);
    expect(results[0]).not.toBeTruthy();
  });
});

describe("Knows when all ships have been sunk", () => {
  let board;
  beforeEach(() => {
    const smallShip = [
      [0, 0],
      [0, 1],
    ];
    const largeShip = [
      [3, 5],
      [4, 5],
      [5, 5],
      [6, 5],
      [7, 5],
    ];
    board = new GameBoard();
    board.placeShip(smallShip);
    board.placeShip(largeShip);
  });

  it("Knows that there are ships still floating", () => {
    expect(board.hasFloatingShips()).toBeTruthy();
  });

  it("Knows when all ships are sunk", () => {
    board.receiveAttack([0, 0]);
    board.receiveAttack([0, 1]);
    expect(board.hasFloatingShips()).toBeTruthy();
    board.receiveAttack([3, 5]);
    board.receiveAttack([4, 5]);
    board.receiveAttack([5, 5]);
    board.receiveAttack([6, 5]);
    board.receiveAttack([7, 5]);
    expect(board.hasFloatingShips()).not.toBeTruthy();
  });
});
