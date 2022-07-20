import Ship from "./Ship";
import coordinateList from "./coordinateList";

export default class GameBoard {
  /**
   * We need to store ship coordinates for a couple reasons.
   *  • Ship placement validation i.e. ships cannot overlap.
   *  • This acts as a cache for checking if a players move lands on a ship.
   */
  #shipCoordinates = coordinateList();

  /**
   * Store a reference to all the ships on this board.
   *  • So we can call their hit methods.
   *  • So we can determine if a game is over when all ships are sunk.
   *  • Ships are only pushed to this array. NEVER removed.
   */
  #floatingShips = [];
  /**
   * Store the number of sunken ships.
   *  • So we can tell when the game is over.
   */
  #sunkenShips = 0;

  /**
   * Store any hits that have been received.
   *  • So we can properly display the board in the DOM.
   */
  #allReceivedHits = coordinateList();

  // coords = [[int,int], ...[int,int]]
  // Return true if a coordinate is out of bounds, otherwise return false.
  #outOfBounds(coords) {
    return coords.some((coordinate) => {
      const [row, col] = coordinate;
      return row < 0 || row > 9 || col < 0 || col > 9;
    });
  }

  // Attempt to place a ship on the board.
  // Return true is successful otherwise return false.
  placeShip(coords, shipName) {
    if (
      coords.length === 0 || //Ensure coordinates are provided.
      this.#shipCoordinates.contains(coords) || //Ensure coordinates are empty.
      this.#outOfBounds(coords) //Ensure coordinates are within bounds.
    ) {
      return false;
    }
    this.#shipCoordinates.add(coords);
    this.#floatingShips.push(new Ship(coords, shipName));
    return true;
  }

  // coords = [int,int]
  receiveAttack(coords) {
    if (!this.#allReceivedHits.contains([coords]))
      this.#allReceivedHits.add([coords]);

    if (this.#shipCoordinates.contains([coords])) {
      for (const ship of this.#floatingShips) {
        if (ship.hit(coords)) {
          if (ship.isSunk()) {
            this.#sunkenShips++;
          }
          return [true, ship.name, ship.isSunk()];
        }
      }
    }

    return [false, null, null];
  }

  // Return true if there are floating ships on the board.
  // Return false if all ships have been sunk.
  hasFloatingShips() {
    return !(this.#sunkenShips === this.#floatingShips.length);
  }

  // Return true if this coordinate has not been selected.
  // Return false if this coordinate has been previously selected.
  // coords = [int, int]
  coordIsValid(coords) {
    return !this.#allReceivedHits.contains([coords]);
  }

  //Return true if a ship is located on the passed in coordinates.
  // This method is used to show ships on the board.
  isShipPosition(coords) {
    return this.#shipCoordinates.contains([coords]);
  }

  reset() {
    this.#shipCoordinates = coordinateList();
    this.#floatingShips = [];
    this.#sunkenShips = 0;
    this.#allReceivedHits = coordinateList();
  }
}
