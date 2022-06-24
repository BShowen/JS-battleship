import CoordinateGenerator from "./CoordinateGenerator";

/**
 * This function generates the coordinates to randomly place ships on the
 * game board. The AI class imports and calls this function.
 */

export default function placeShips() {
  const coordGenerator = new CoordinateGenerator();

  const ships = {
    carrier: { length: 5, orientation: "vertical" },
    battleship: { length: 4, orientation: "vertical" },
    cruiser: { length: 3, orientation: "vertical" },
    submarine: { length: 3, orientation: "vertical" },
    destroyer: { length: 2, orientation: "vertical" },
  };

  function getShipCoords(shipName) {
    let coordinates;
    do {
      /**
       * Generate coordinates for a ship. We pass in the ships length, and the
       * ships orientation, either vertical or horizontal.
       * _generateCoordinatesForShipPlacement() will return either undefined,
       * and the loop will start again, or it will return a set of valid
       * coordinates.
       */
      coordinates = _generateCoordinatesForShipPlacement(ships.shipName);
    } while (coordinates === undefined);

    return coordinates;
  }

  function _generateCoordinatesForShipPlacement(ship) {
    /**
     * Ensure a clean working slate. We don't want leftover state from the
     * previous iterations
     */
    coordGenerator.reset();

    /**
     * Generate and extract the row and column coordinates from the original.
     * coordGenerator.getCoords() returns [int, int]
     */
    const [row, column] = coordGenerator.getCoords();
    let shipCoords = [[row, column]]; //[[int,int]]

    for (let index = 1; index < ship.length; index++) {
      if (ship.orientation === "vertical") {
        if (ship.length - 1 + row <= 9 && ship.length - 1 - row >= 0) {
          if (ship.length - 1 + row <= 9) {
            // Going up
            shipCoords.push([index + row, column]);
          } else if (ship.length - 1 - row >= 0) {
            // Going down
            shipCoords.push([index - row, column]);
          }
        } else {
          shipCoords = undefined;
          break;
        }
      } else {
        if (ship.length - 1 + column <= 9 && ship.length - 1 - column >= 0) {
          if (ship.length - 1 + column <= 9) {
            // Going right
            shipCoords.push([row, index + column]);
          } else if (ship.length - 1 - column >= 0) {
            // Going left
            shipCoords.push([row, index - column]);
          }
        } else {
          shipCoords = undefined;
          break;
        }
      }
    }

    return shipCoords;
  }

  return { getShipCoords };
}
