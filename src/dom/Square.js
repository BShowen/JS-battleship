import { HtmlElement } from "@bshowen/htmlelement";
import "./Square.css";

/**
 * coordinates = [int,int]
 * toggleTurn, isDirectHIt, isValidCoord, isShipPosition = Are callbacks that
 * are passed in from Board.js
 */
export default class Square {
  constructor(
    coordinates,
    toggleTurn,
    isDirectHit,
    isValidCoord,
    isShipPosition,
    placeShip
  ) {
    // The coordinates of this square.
    this.coords = coordinates;

    // The container for rendering this square in the DOM.
    this.container = new HtmlElement({ type: "div", classList: ["square"] });
    this.clickHandler = this.handler.bind(this);
    this.drop_handler = this.drop_handler.bind(this);
    this.dragover_handler = this.dragover_handler.bind(this);
    this.container.addEventListener("dragover", this.dragover_handler);
    this.container.addEventListener("drop", this.drop_handler);

    this.callBacks = {
      toggleTurn,
      isDirectHit,
      isShipPosition,
      placeShip,
      isValidCoord,
    };

    if (isShipPosition(this.coords)) {
      this.container.classList.add("fill-ship-position");
    }
  }

  handler() {
    if (this.callBacks.isDirectHit(coords)) {
      this.container.classList.add("fill-ship-hit");
    } else {
      this.container.classList.add("fill-missed-strike");
    }
    this.callBacks.toggleTurn();
  }

  disable() {
    this.container.removeEventListener("click", this.clickHandler);
    this.callBacks.toggleShipPosition();
  }

  toggleShipPosition() {
    if (isShipPosition(this.coords)) {
      this.container.classList.add("fill-ship-position");
    }
  }

  enable() {
    // The coordinates are valid ONLY if they haven'y been selected before. This
    // ensures that you cannot select the same square multiple times.
    if (this.callBacks.isValidCoord(this.coords)) {
      this.container.addEventListener("click", this.clickHandler, {
        once: true,
      });
    }
    this.container.classList.remove("fill-ship-position");
  }

  dragover_handler(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }

  drop_handler(e) {
    e.preventDefault();
    const elementId = e.dataTransfer.getData("text/plain");
    const ship = document.getElementById(elementId);
    const shipDraggedFrom = ship.dataset.clickedBody;
    const orientation = ship.dataset.orientation;
    const length = ship.dataset.length;
    const dropCoords = this.generateCoords(
      shipDraggedFrom,
      orientation,
      length
    );
    if (this.callBacks.placeShip(dropCoords)) {
      ship.remove();
    }
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
  generateCoords(shipDroppedFrom, orientation, length) {
    let xAxisRef = this.coords[0];
    let yAxisRef = this.coords[1];
    const shipCoords = [];

    for (let i = 0; i < length; i++) {
      let newCoords;
      if (i < shipDroppedFrom) {
        newCoords = [xAxisRef - (shipDroppedFrom - i), yAxisRef];
      } else if (i == shipDroppedFrom) {
        newCoords = this.coords;
      } else if (i > shipDroppedFrom) {
        newCoords = [++xAxisRef, yAxisRef];
      }

      shipCoords.push(newCoords);
    }

    return shipCoords;
  }

  unmount() {
    this.container.removeEventListener("click", this.clickHandler);
    this.container.removeEventListener("dragover", this.dragover_handler);
    this.container.removeEventListener("drop", this.drop_handler);
    this.container.remove();
  }

  // return { element: container, disable, enable };
}
