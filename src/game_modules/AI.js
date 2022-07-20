import Player from "../dom/Player";
import shipCoordinateGenerator from "../utilities/shipCoordinateGenerator";
import CoordinateGenerator from "../utilities/CoordinateGenerator";
import SmartGuesser from "../utilities/SmartGuesser";

/**
 * The AI class extends the Player.js class and adds functionality to it.
 */
export default class AI extends Player {
  #shipCoordGenerator;

  #smartGuesser;

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

    // [boolean, string (shipName), boolean]
    const [isHit, _, isSunk] = opponentCallback(coords);

    /**
     * If smartGuesser is instantiated then that means AI is focused on a a ship
     * and is currently attacking a specific ship. The smartGuesser needs to
     * receive feedback in order to make its next guess.
     */
    if (this.#smartGuesser) {
      this.#smartGuesser.receiveFeedback(isHit);
    }

    /**
     * If AI just hit a ship, and smartGuesser is not instantiated, then that
     * means that this is an initial direct hit. AI will now instantiate
     * smartGuesser in order to focus on this ship and take it out. All future
     * guesses will come from smartGuesser. Once the ship is taken out,
     * smartGuesser will be removed until the next direct hit.
     */
    if (isHit && this.#smartGuesser == null) {
      this.#smartGuesser = new SmartGuesser(true, coords);
    }

    /**
     * If the ship that AI is focused on was just sunk, then we can remove
     * smartGuesser so that AI will start making random guesses. When AI makes
     * a direct hit on another ship, then smartGuesser will be instantiated and
     * AI will focus on taking out that ship.
     */
    if (isSunk) {
      this.#smartGuesser = null;
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
