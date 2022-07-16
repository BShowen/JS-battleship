import "./Player.css";
import Row from "./Row";
import Square from "./Square";
import GameBoard from "../game_modules/GameBoard";
import ShipSelector from "./ShipSelector";
import { HtmlElement } from "@bshowen/htmlelement";
import FleetStatus from "./FleetStatus";
import playerNameComponent from "./playerNameComponent";
import shipCoordinateGenerator from "./../AI/shipCoordinateGenerator";

/**
 * This is a representation of the game board in the DOM. This is the class that
 * interacts with the GameBoard API, found in src/game_modules/GameBoard.js
 */
export default class Player {
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

    // toggleTurn = A callback passed in from Game.js. This callback is called
    // in this.receiveAttack()
    this.toggleTurn = toggleTurn;

    this.#parentNode = parentNode;

    this.#container.appendChild(playerNameComponent(displayName));

    /**
     * This method is passed into Square.js as a callback. So I need to set the
     * context of 'this' so that this method can reference methods defined in
     * this class.
     */
    this.placeShip = this.placeShip.bind(this);

    this.randomlyPlaceShips = this.randomlyPlaceShips.bind(this);

    this.receiveAttack = this.receiveAttack.bind(this);
  }

  // coords = [int, int]
  receiveAttack(coords) {
    const [row, column] = coords;
    const [isHit, shipName] = this.#gameBoard.receiveAttack(coords);
    if (isHit) {
      this.fleetStatus.shipIsHit(shipName);
      this.#boardSquares[row][column].fill(true);
    } else {
      this.#boardSquares[row][column].fill(false);
    }
    this.toggleTurn(isHit);
    return [isHit, shipName];
  }

  /**
   * This method removes the board from the DOM.
   */
  #removeBoardFromDOM() {
    this.#boardRows.forEach((row) => row.remove());
    this.#boardSquares.forEach((row) => {
      row.forEach((square) => square.unmount());
    });
    this.#boardRows = [];
    this.#boardSquares = [];
  }

  // Disable clicking on this board.
  disableClick() {
    this.#container.classList.add("disabled");
    this.#boardSquares.forEach((row) => {
      row.forEach((square) => square.disable());
    });
  }

  // Enable clicking on this board.
  enableClick() {
    this.#container.classList.remove("disabled");
    this.#boardSquares.forEach((row) => {
      row.forEach((square) => square.enable());
    });
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
  placeShip(shipCoords, shipName) {
    if (this.#gameBoard.placeShip(shipCoords, shipName)) {
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
    /**
     * Create and render the container that holds all the ships so the user can
     * place them on the board.
     */
    this.shipSelector = new ShipSelector(
      donePlacingShips,
      this.randomlyPlaceShips
    );
    this.shipSelector.render();

    // Render the game board
    this.render();
  }

  // This method will place the ships randomly on the board.
  randomlyPlaceShips() {
    const coordGenerator = shipCoordinateGenerator();
    const shipNames = [
      "carrier",
      "battleship",
      "cruiser",
      "submarine",
      "destroyer",
    ];
    shipNames.forEach((shipName) => {
      this.placeShip(coordGenerator.getShipCoords(shipName), shipName);
    });
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
          this.receiveAttack.bind(this, [row, column]),
          this.placeShip,
          this.#gameBoard,
          this.shipSelector || null
        );

        //This will dynamically build a 2d array.
        if (column === 0) this.#boardSquares.push([]);

        // Store a reference of this Square.
        this.#boardSquares[row].push(square);

        // Add this Square element to the Row element.
        // rowElement.appendChild(square.container);
        square.render(rowElement);
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
    if (this.fleetStatus) {
      this.fleetStatus.render();
    }
    this.#parentNode.appendChild(this.#container);
  }

  // This method will completely remove this board from the DOM.
  remove() {
    /**
     * The only time this method gets called is after the player has placed
     * their ships and we want to remove this board from the DOM. In that case
     * we also need to remove shipSelector from this class. Now, when the board
     * is re-rendered in the DOM, we will pass in null, instead of ShipSelector,
     * to Square.js and Square.js renders differently because of this.
     *
     * If ShipSelector is passed into Square, then Square will show ship
     * positions. We don't want this. Showing ship positions is only useful when
     * the player is placing ships on the board. Otherwise we never want to
     * show ship positions on the board.
     */
    this.shipSelector = null;

    /**
     * When this method is called that means the players have placed their ships
     * and are about to battle. In this case we want to have an instance of
     * FleetStatus which will be passed into Square. Square will update
     * FleetStatus whenever a ship is hit.
     */
    this.fleetStatus = new FleetStatus();
    this.#container.remove();
  }
}
