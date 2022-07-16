import Ship from "./Ship";
import coordinateList from "./coordinateList";

export default function GameBoard() {
  /**
   * We need to store ship coordinates for a couple reasons.
   *  • Ship placement validation. Ships cannot overlap.
   *  • This acts as a cache for checking if a players move lands on a ship.
   */
  const _shipCoordinates = coordinateList();

  /**
   * Store a reference to all the ships on this board.
   *  • So we can call their hit methods.
   *  • So we can determine if a game is over when all ships are sunk.
   *  • Ships are only pushed to this array. NEVER removed.
   */
  const _floatingShips = [];
  /**
   * Store the number of sunken ships.
   *  • So we can tell when the game is over.
   */
  let _sunkenShips = 0;

  /**
   * Store any hits that have been received.
   *  • So we can properly display the board in the DOM.
   */
  const _allReceivedHits = coordinateList();

  // coords = [[int,int], ...[int,int]]
  // Return true if a coordinate is out of bounds, otherwise return false.
  function _outOfBounds(coords) {
    return coords.some((coordinate) => {
      const [row, col] = coordinate;
      return row < 0 || row > 9 || col < 0 || col > 9;
    });
  }

  // Attempt to place a ship on the board.
  // Return true is successful otherwise return false.
  function placeShip(coords, shipName) {
    if (
      coords.length === 0 || //Ensure coordinates are provided.
      _shipCoordinates.contains(coords) || //Ensure coordinates are empty.
      _outOfBounds(coords) //Ensure coordinates are within bounds.
    ) {
      return false;
    }
    _shipCoordinates.add(coords);
    _floatingShips.push(new Ship(coords, shipName));
    return true;
  }

  // coords = [int,int]
  function receiveAttack(coords) {
    if (!_allReceivedHits.contains([coords])) _allReceivedHits.add([coords]);

    if (_shipCoordinates.contains([coords])) {
      for (const ship of _floatingShips) {
        if (ship.hit(coords)) {
          if (ship.isSunk()) {
            _sunkenShips++;
          }
          return [true, ship.name];
        }
      }
    }

    return [false, null];
  }

  // Return true if there are floating ships on the board.
  // Return false if all ships have been sunk.
  function hasFloatingShips() {
    return !(_sunkenShips === _floatingShips.length);
  }

  // Return true if this coordinate has not been selected.
  // Return false if this coordinate has been previously selected.
  // coords = [int, int]
  function coordIsValid(coords) {
    return !_allReceivedHits.contains([coords]);
  }

  //Return true if a ship is located on the passed in coordinates.
  // This method is used to show ships on the board.
  function isShipPosition(coords) {
    return _shipCoordinates.contains([coords]);
  }

  return {
    placeShip,
    receiveAttack,
    hasFloatingShips,
    coordIsValid,
    isShipPosition,
  };
}
