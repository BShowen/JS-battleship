import Player from "../dom/Player";
import shipCoordinateGenerator from "./shipCoordinateGenerator";
import CoordinateGenerator from "./CoordinateGenerator";

/**
 * The AI class extends the Player.js class and adds functionality to it.
 */
export default class AI extends Player {
  #shipCoordGenerator;

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
    const AIGuess = this.#coordinateGenerator.getCoords(); //[int, int]
    opponentCallback(AIGuess);
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
