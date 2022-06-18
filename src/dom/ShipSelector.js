import { HtmlElement } from "@bshowen/htmlelement";
import Ship from "./Ship";
import rootNode from "../rootNode";
import "./shipSelector.css";

/**
 * This class creates the DOM element that holds all the ships for the user to
 * drag and drop onto their board.
 */
export default class ShipSelector {
  // The callback that is called when all ships have been placed.
  #donePlacingShips;

  // The Html DOM element where this class renders its DOM elements
  #container = new HtmlElement({
    type: "div",
    classList: ["ship-selector-container"],
  });

  // donePlacingShips = A callback passed in from Board.js
  constructor(donePlacingShips) {
    this.#donePlacingShips = donePlacingShips;

    this.#initializeShips();
  }

  #initializeShips() {
    this.ships = [
      new Ship(5, "0", this.#container),
      new Ship(5, "1", this.#container),
      new Ship(3, "2", this.#container),
      new Ship(3, "3", this.#container),
      new Ship(2, "4", this.#container),
    ];
    this.ships.forEach((ship) => ship.render());
  }

  /**
   *
   */
  removeShip(shipElementId) {
    const i = Number.parseInt(shipElementId.charAt(shipElementId.length - 1));
    this.ships[i].remove();
    this.ships[i] = null;
    if (this.ships.every((element) => element == null)) {
      this.#container.remove();
      this.#donePlacingShips();
    }
  }

  // Render this element in the DOM.
  render() {
    rootNode.appendChild(this.#container);
  }
}
