import Board from "../dom/Board";
import shipCoordinateGenerator from "./shipCoordinateGenerator";
import CoordinateGenerator from "./CoordinateGenerator";

export default class AI {
  // An instance of Board.js
  #gameBoard;

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
    this.#gameBoard = new Board("AI", toggleTurn, parentNode);

    this.#shipCoordGenerator = shipCoordinateGenerator();

    /**
     * From here down are all the methods from the Board.js API.
     * AI is an object that implements and adds to all the public methods defined
     * in Board.js. In other words, this class (the AI class) implements the
     * same interface that Board.js does, but AI adds to it.
     */
    this.disableClick = this.#gameBoard.disableClick.bind(this.#gameBoard);
    this.enableClick = this.#gameBoard.enableClick.bind(this.#gameBoard);
    this.isAlive = this.#gameBoard.isAlive.bind(this.#gameBoard);
    this.render = this.#gameBoard.render.bind(this.#gameBoard);
    this.remove = this.#gameBoard.remove.bind(this.#gameBoard);
  }

  takeTurn(callback) {
    const AIGuess = this.#coordinateGenerator.getCoords(); //[int, int]
    const attack = callback.bind(null, AIGuess);
    setTimeout(attack, 500);
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
      this.#gameBoard.placeShip(
        this.#shipCoordGenerator.getShipCoords(shipName),
        shipName
      );
    });

    callback();
  }
}
