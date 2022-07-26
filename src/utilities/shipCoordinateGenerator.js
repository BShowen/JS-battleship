import coordinateList from "./coordinateList";
import CoordinateGenerator from "./CoordinateGenerator";
import getBufferCoords from "./getBufferCoords";

/**
 * This module generates the coordinates to randomly place ships on the
 * game board. The only public method on this module is called getShipCoords()
 * which accepts a shipName (string) and returns a set of coordinates to place
 * that ship on the game board. This class ensures that a ship will not overlap
 * on top of another ship and that a ship will not go out of the bounds of the
 * game board.
 */

export default function shipCoordinateGenerator() {
  const _shipCoordinates = coordinateList();
  const _shipBufferCoordinates = coordinateList();
  const coordGenerator = new CoordinateGenerator();
  const _getBufferCoords = getBufferCoords;

  const _ships = {
    carrier: { length: 5, orientation: _getRandomOrientation() },
    battleship: { length: 4, orientation: _getRandomOrientation() },
    cruiser: { length: 3, orientation: _getRandomOrientation() },
    submarine: { length: 3, orientation: _getRandomOrientation() },
    destroyer: { length: 2, orientation: _getRandomOrientation() },
  };

  function _getRandomOrientation() {
    return Math.floor(Math.random() * 2) ? "vertical" : "horizontal";
  }

  function getShipCoords(shipName) {
    // Ensure no leftover state from previous call.
    coordGenerator.reset();

    // Get the ship details
    const ship = _ships[shipName];

    /**
     * This will be the final coordinates for this particular ship.
     * shipCoords = [[int, int], [int, int],...[int, int]]
     */
    let shipCoords;

    do {
      shipCoords = _getUniqueCoordinate();

      // Extract the initial random coordinates into separate variables.
      let [row, column] = shipCoords[0];

      for (let i = 1; i < ship.length; i++) {
        if (ship.orientation === "vertical") {
          /**
           * Vertical ships will be placed starting from their initial coordinates
           * which are generated in the variable shipCoords. From those
           * coordinates, we will go north until we either reach the edge of the
           * board or until we have placed the entire ship.
           *
           * If we have reached the edge of the board then we start going south,
           * starting from the southern most coordinate.
           *
           * For example: Say shipCoords initializes to [[8,0]] and the length of
           *              the ship is 5.
           * After each loop iteration, shipCoords will look like this.
           * Before iteration 1: shipCoords = [[8,0]]
           * After iteration 1:  shipCoords = [[8,0], [9,0]] //Reached the edge
           * After iteration 2:  shipCoords = [[7,0], [8,0], [9,0]]
           * After iteration 3:  shipCoords = [[6,0], [7,0], [8,0], [9,0]]
           * After iteration 4:  shipCoords = [[5,0], [6,0], [7,0], [8,0], [9,0]]
           *
           * We are done because shipCoords has a length of 5 which is the length
           * of the ship we are placing. shipCoords will always be equal to the
           * length of the ship we are placing.
           */
          if (row + 1 < 10) {
            shipCoords.unshift([++row, column]);
          } else if (row - i >= 0) {
            shipCoords.push([row - i, column]);
          }
        } else if (ship.orientation === "horizontal") {
          /**
           * Horizontal ships will be placed starting from the initial coordinates
           * which are generated in the variable shipCoords. From those
           * coordinates, we will go east until we either reach the edge of the
           * board or until we have placed the entire ship.
           *
           * If we have reached the edge of the board then we start going west,
           * starting from the western most coordinate.
           *
           * For example: Say shipCoords initializes to [[0,8]] and the length of
           *              the ship is 5.
           * After each loop iteration, shipCoords will look like this.
           * Before iteration 1: shipCoords = [[0,8]]
           * After iteration 1:  shipCoords = [[0,8], [0,9]] //Reached the edge
           * After iteration 2:  shipCoords = [[0,7], [0,8], [0,9]]
           * After iteration 3:  shipCoords = [[0,6], [0,7], [0,8], [0,9]]
           * After iteration 4:  shipCoords = [[0,5], [0,6], [0,7], [0,8], [0,9]]
           *
           * We are done because shipCoords has a length of 5 which is the length
           * of the ship we are placing. shipCoords will always be equal to the
           * length of the ship we are placing.
           */
          if (column + 1 < 10) {
            shipCoords.push([row, ++column]);
          } else if (column - i >= 0) {
            shipCoords.unshift([row, column - i]);
          }
        }
      }
    } while (
      /**
       * If _shipCoordinates contains shipCoords then we need to start over
       * because there is already a ship at the spot where this ship is trying
       * to be placed.
       */
      _shipCoordinates.contains(shipCoords) ||
      /**
       * If _shipBufferCoordinates contains shipCoords then we need to start
       * over because that means this ship is trying to be placed on the board
       * in a spot where it would touch another ship.
       */
      _shipBufferCoordinates.contains(shipCoords)
    );

    // Store the coords so that future ships cant be placed here.
    _shipCoordinates.add(shipCoords);

    /**
     *  Store the buffer coordinates so that future ships cant be placed where
     * they're touching this ship.
     */
    const shipCoordinates = coordinateList(shipCoords);
    const bufferCoords = getBufferCoords(shipCoordinates).all();
    _shipBufferCoordinates.add(bufferCoords);

    return shipCoords;
  }

  /**
   * Get a unique pair of coordinates. The loop continues until the initial
   * coordinates are coordinates that have not been previously used.
   * Returns an array of two ints.
   * Returns: [[int, int]]
   */
  function _getUniqueCoordinate() {
    let uniqueCoordinate;
    do {
      /**
       * Get the initial coordinate. This is a random coordinate between
       * [0,0] and [9,9] (including [0,0] and [9,9]);
       */
      uniqueCoordinate = [coordGenerator.getCoords()]; // [[int, int]]
    } while (_shipCoordinates.contains(uniqueCoordinate));
    return uniqueCoordinate;
  }
  return { getShipCoords };
}
