import Player from "../dom/Player";
import shipCoordinateGenerator from "./shipCoordinateGenerator";
import CoordinateGenerator from "./CoordinateGenerator";
import SmartGuesser from "./SmartGuesser";
import getAllShips from "./ships";

/**
 * The AI class extends the Player.js class and adds functionality to it.
 */
export default class AI extends Player {
  #shipCoordGenerator;

  #smartGuesser;
  #ships = getAllShips();

  #coordinateGenerator = new CoordinateGenerator();

  /**
   * toggleTurn = A callback passed in from Game.js
   * parentNode = The container where this class inserts itself into the DOM.
   *
   *  receiveAttack = Callback passed in from Game.js. This method is defined in
   * the opponents class. The opponent will receive their attacks via this
   * method when battling against the AI.
   */
  constructor(toggleTurn, parentNode) {
    super("AI", toggleTurn, parentNode);

    this.#shipCoordGenerator = shipCoordinateGenerator();
  }

  // opponentCallback = A callback passed in from Game.js
  takeTurn(opponentCallback) {
    const coords = this.#createGuessCoordinates(); //[int, int]
    const [isHit, shipName] = opponentCallback(coords); // [boolean, shipName]

    if (this.#smartGuesser) {
      this.#smartGuesser.receiveFeedback(isHit);
    }

    if (isHit && this.#smartGuesser == null) {
      this.#smartGuesser = new SmartGuesser(true, coords);
    }

    if (shipName) {
      this.#ships[shipName].takeHit();
      if (this.#ships[shipName].isSunk()) {
        this.#smartGuesser = null;
      }
    }
  }

  #createGuessCoordinates() {
    let guess;

    if (this.#smartGuesser) {
      guess = this.#getSmartGuess();
      this.#coordinateGenerator.add(guess);
    } else {
      guess = this.#coordinateGenerator.getCoords(); //[int, int]
    }

    return guess;
  }

  #getSmartGuess() {
    let guess;
    let isCoordValid;
    do {
      guess = this.#smartGuesser.getNextGuess(); //[int, int]
      isCoordValid = this.#validateCoord(guess);
      if (this.#coordinateGenerator.contains(guess) || !isCoordValid) {
        this.#smartGuesser.receiveFeedback(false);
      }
    } while (this.#coordinateGenerator.contains(guess) || !isCoordValid);
    return guess;
  }

  // coord = [int, int]
  #validateCoord(coord) {
    const [row, column] = coord;
    if (row > 9 || row < 0 || column > 9 || column < 0) {
      return false;
    }
    return true;
  }

  placeShips(callback) {
    const _ships = [
      "carrier",
      "battleship",
      "submarine",
      "cruiser",
      "destroyer",
    ];

    _ships.forEach((shipName) => {
      super.placeShip(
        this.#shipCoordGenerator.getShipCoords(shipName),
        shipName
      );
    });

    callback();
  }
}
