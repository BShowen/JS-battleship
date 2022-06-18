import Row from "./Row";
import Square from "./Square";
import GameBoard from "../game_modules/GameBoard";
import ShipSelector from "./ShipSelector";
import { HtmlElement } from "@bshowen/htmlelement";

/**
 * This is a representation of the game board in the DOM. This is the class that
 * interacts with the GameBoard API, found in src/game_modules/GameBoard.js
 */
export default class Board {
  #gameBoard = new GameBoard();
  /**
   * boardSquares is populated with the squares that makeup the board in the
   * DOM. Reference to these squares is needed in order to interact with the
   * Square API.
   */
  #boardSquares = [];

  /**
   * boardRows is populated with rows of squares. This is currently used to
   * unmount and remove rows and squares from the dom when a re-render is needed
   */
  #boardRows = [];

  // This is the HTML node element where all DOM elements are rendered.
  #container = new HtmlElement({
    type: "div",
    classList: ["board"],
  });

  // parentNode = The container where this class inserts itself into the DOM.
  #parentNode;

  constructor(displayName, toggleTurn, parentNode) {
    // displayName = A string which is displayed above the board.
    this.name = displayName;

    // toggleTurn = A callback passed in from Game.js. This callback is passed
    // into Square.js
    this.toggleTurn = toggleTurn;

    this.#parentNode = parentNode;

    const displayText = new HtmlElement({ type: "p", innerText: displayName });
    this.#container.appendChild(displayText);

    /**
     * This method is passed into Square.js as a callback. So I need to set the
     * context of 'this' so that this method can reference methods defined in
     * this class.
     */
    this.placeShip = this.placeShip.bind(this);
  }

  /**
   * This method removes the board from the DOM.
   */
  #removeBoardFromDOM() {
    this.#boardRows.forEach((row) => row.remove());
    this.#boardSquares.forEach((square) => square.unmount());
  }

  // Disable clicking on this board.
  disableClick() {
    this.#boardSquares.forEach((square) => square.disable());
  }

  // Enable clicking on this board.
  enableClick() {
    this.#boardSquares.forEach((square) => square.enable());
  }

  // Return true if this board has floating ships.
  // Return false if this board does not have floating ships.
  isAlive() {
    return this.#gameBoard.hasFloatingShips();
  }

  /**
   * coords = [[int, int], ... ,[int, int]]
   * Attempt to place a ship on these coordinates. Return true if the ship was
   * placed, return false if the ship was not/cannot be placed on these
   * coordinates.
   *
   * This method is passed into Square as a callback to be called when a ship
   * is trying to be placed on that Square.
   */
  placeShip(shipCoords) {
    if (this.#gameBoard.placeShip(shipCoords)) {
      this.renderBoard();
      return true;
    } else {
      return false;
    }
  }

  /**
   * This method creates and renders the UI element that holds the ships for the
   * player to drag and drop onto their board. This method also renders this
   * the game board UI component so that the player can drag their ships onto
   * their board.
   *
   * donePlacingShips = A callback passed in from Game.js when Game.js calls
   * this method.
   */
  placeShips(donePlacingShips) {
    // Create and render the container that holds all the ships.
    this.shipSelector = new ShipSelector(donePlacingShips);
    this.shipSelector.render();

    // Render the game board
    this.render();
  }

  // Create the DOM board and populate the boardSquares array.
  renderBoard() {
    // Remove the old board.
    this.#removeBoardFromDOM();

    // Iterate through the rows.
    for (let row = 0; row < 10; row++) {
      // Create a new Row upon each iteration.
      const rowElement = new Row();

      // Iterate through the columns within the row.
      for (let column = 0; column < 10; column++) {
        /**
         * Here, create an instance of Square and pass in the coordinates, and
         * any any callbacks needed by the Square class.
         */
        const square = new Square(
          [row, column],
          this.toggleTurn,
          this.placeShip,
          this.#gameBoard,
          this.shipSelector || null
        );

        // Store a reference of this Square.
        this.#boardSquares.push(square);

        // Add this Square element to the Row element.
        rowElement.appendChild(square.container);
      }

      // Store a reference of this Row
      this.#boardRows.push(rowElement);

      // Add this row to the DOM
      this.#container.appendChild(rowElement);
    }
  }

  /**
   * This is the only method that is exposed that can render this board in the
   * DOM. This method then calls the renderBoard() method and then adds this
   * class container to the DOM.
   * */
  render() {
    this.renderBoard();
    this.#parentNode.appendChild(this.#container);
  }

  // This method will completely remove this board from the DOM.
  remove() {
    this.#container.remove();
  }
}
