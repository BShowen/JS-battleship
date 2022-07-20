import getBufferCoords from "./getBufferCoords";
import coordinateList from "../game_modules/coordinateList";

describe("Test the getBufferCoordinates() method", () => {
  let verticalShip;
  let horizontalShip;
  beforeEach(() => {
    verticalShip = coordinateList([
      [3, 3],
      [4, 3],
      [5, 3],
    ]);
    horizontalShip = coordinateList([
      [3, 3],
      [3, 4],
      [3, 5],
    ]);
  });

  test("A vertical ship returns the correct buffer coordinates", () => {
    const expected = [
      [2, 3],
      [3, 4],
      [4, 4],
      [5, 4],
      [6, 3],
      [5, 2],
      [4, 2],
      [3, 2],
    ];

    const received = getBufferCoords(verticalShip);

    expected.forEach((coordinate) => {
      expect(received.contains([coordinate])).toBeTruthy();
    });
  });

  test("A horizontal ship returns the correct buffer coordinates", () => {
    const expected = [
      [3, 2],
      [2, 3],
      [4, 3],
      [2, 4],
      [4, 4],
      [2, 5],
      [4, 5],
      [3, 6],
    ];

    const received = getBufferCoords(horizontalShip);

    expected.forEach((coordinate) => {
      expect(received.contains([coordinate])).toBeTruthy();
    });
  });
});
