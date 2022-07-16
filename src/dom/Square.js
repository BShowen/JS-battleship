import { HtmlElement } from "@bshowen/htmlelement";
import "./Square.css";

/**
 * coordinates = [int,int]
 * receiveAttack = A callback passed in from Player.js
 * placeShip = A callback passed in from Player.js
 * gameBoard = An instance of GameBoard.js passed in from Player.js
 * shipSelector = An instance of ShipSelector.js passed in from Player.js
 */
export default class Square {
  // See this.#drop_handler for an explanation of this method.
  #dropHandler;

  // See this.#dragover_handler for the definition of this method.
  #dragoverHandler;

  constructor(coordinates, receiveAttack, placeShip, gameBoard, shipSelector) {
    //Define the callbacks used in this class.
    this.coords = coordinates;
    this.receiveAttack = receiveAttack;
    this.placeShip = placeShip;
    this.gameBoard = gameBoard;
    this.shipSelector = shipSelector;

    // The container for rendering this square in the DOM.
    this.container = new HtmlElement({ type: "div", classList: ["square"] });

    // Bind functions to this class
    this.#dropHandler = this.#drop_handler.bind(this);
    this.#dragoverHandler = this.#dragover_handler.bind(this);

    // Add event listeners to DOM elements in this class.
    this.container.addEventListener("dragover", this.#dragoverHandler);
    this.container.addEventListener("drop", this.#dropHandler);

    /**
     * If shipSelector is null that means that we are rendering the board
     * for game play and we DO NOT want to render ship positions on this board.
     *
     * If shipSelector is not null then we want to show the ship positions.
     * We want them so see their ships because this board is being rendered for
     * the player to drag and drop their ships onto it.
     */
    if (shipSelector != null) {
      this.#toggleShipPosition();
    }
  }

  // Color in this square if there is a ship on it.
  #toggleShipPosition() {
    if (this.gameBoard.isShipPosition(this.coords)) {
      this.container.classList.add("fill-ship-position");
    }
  }

  fill(boolean) {
    if (boolean) {
      this.container.classList.add("fill-ship-hit");
    } else {
      this.container.classList.add("fill-missed-strike");
    }
  }

  #dragover_handler(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }

  /**
   * This method gets called when a user drops a ship onto the board.
   */
  #drop_handler(e) {
    e.preventDefault();
    const shipElementId = e.dataTransfer.getData("text/plain");
    const ship = document.getElementById(shipElementId);
    const shipName = ship.dataset.shipName;
    const dropCoords = this.#generateCoords(ship);
    if (this.placeShip(dropCoords, shipName)) {
      this.shipSelector.removeShip(shipElementId);
    }
  }

  disable() {
    this.container.removeEventListener("click", this.receiveAttack);
    // this.#toggleShipPosition();
  }

  enable() {
    // The coordinates are valid ONLY if they haven't been selected before. This
    // ensures that you cannot select the same square multiple times.
    if (this.gameBoard.coordIsValid(this.coords)) {
      this.container.addEventListener("click", this.receiveAttack, {
        once: true,
      });
    }
    // this.container.classList.remove("fill-ship-position");
  }

  /**
   * This method generates coordinates based on where a ship was placed on the
   * board.
   *
   * A ship is constructed from multiple square div elements. A ship of length 3
   * will have 3 divs. The first div has a data attribute of 0, the following
   * div has a data attribute of 1, and so on. A user places a ship on the board
   * via drag-and-drop. The user can pick the ship up from div 0, div 1, or
   * div 2 (because the ship in this example has a length of 3). When the user
   * places the ship down, we need to know the coordinates for the entire ship.
   * We know where the ship was picked up from, the length, the orientation, and
   * the coordinates where the ship was dropped. Using these parameters we can
   * determine the coordinates for each individual square that makes up the skip.
   * These coordinates are generated and returned from this method.
   */
  #generateCoords(ship) {
    const shipDroppedFrom = ship.dataset.clickedBody;
    const orientation = ship.dataset.orientation;
    const length = ship.dataset.length;

    let xAxisRef = this.coords[0];
    let yAxisRef = this.coords[1];
    const shipCoords = [];

    for (let i = 0; i < length; i++) {
      let newCoords;
      if (i < shipDroppedFrom) {
        newCoords =
          orientation === "vertical"
            ? [xAxisRef - (shipDroppedFrom - i), yAxisRef]
            : [xAxisRef, yAxisRef - (shipDroppedFrom - i)];
      } else if (i == shipDroppedFrom) {
        newCoords = this.coords;
      } else if (i > shipDroppedFrom) {
        newCoords =
          orientation === "vertical"
            ? [++xAxisRef, yAxisRef]
            : [xAxisRef, ++yAxisRef];
      }

      shipCoords.push(newCoords);
    }
    return shipCoords;
  }

  unmount() {
    this.container.removeEventListener("click", this.receiveAttack);
    this.container.removeEventListener("dragover", this.#dragoverHandler);
    this.container.removeEventListener("drop", this.#dropHandler);
    this.container.remove();
  }

  render(parentNode) {
    parentNode.appendChild(this.container);
  }
}
