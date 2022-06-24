import Board from "../dom/Board";

export default class AI {
  // An instance of Board.js
  #gameBoard;

  /**
   * toggleTurn = A callback passed in from Game.js
   * parentNode = The container where this class inserts itself into the DOM.
   */
  constructor(toggleTurn, parentNode) {
    this.#gameBoard = new Board("AI", toggleTurn, parentNode);
    /**
     * From here down are all the methods from the Board.js API.
     * AI is an object that implements and adds to all the public methods defined
     * in Board.js. In other words, this class (the AI class) implements the
     * same interface that Board.js does, but AI adds to it.
     */
    this.disableClick = this.#gameBoard.disableClick();
    this.enableClick = this.#gameBoard.enableClick();
    this.isAlive = this.#gameBoard.isAlive();
    this.render = this.#gameBoard.render();
    this.remove = this.#gameBoard.remove();
  }

  takeTurn() {
    // take its turn
  }

  /**
   * Tell AI to place it's ships on the board.
   */
  placeShips() {}
}
