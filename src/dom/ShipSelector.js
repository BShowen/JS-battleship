import { HtmlElement } from "@bshowen/htmlelement";
import Ship from "./Ship";
import rootNode from "../rootNode";
import "./shipSelector.css";
import randomizer from "./randomizer";
import shipsContainer from "./shipsContainer";

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

  #shipsContainer = shipsContainer();

  // donePlacingShips = A callback passed in from Board.js
  constructor(donePlacingShips, randomlyPlaceShips) {
    this.#donePlacingShips = donePlacingShips;

    this.#initializeShips();

    this.clickHandler = this.clickHandler.bind(this, randomlyPlaceShips);
  }

  #initializeShips() {
    this.ships = [
      new Ship(5, "0", this.#shipsContainer, "carrier"),
      new Ship(4, "1", this.#shipsContainer, "battleship"),
      new Ship(3, "2", this.#shipsContainer, "cruiser"),
      new Ship(3, "3", this.#shipsContainer, "submarine"),
      new Ship(2, "4", this.#shipsContainer, "destroyer"),
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

  /**
   * randomlyPlaceShips = A callback passed in from Player.js
   */
  clickHandler(randomlyPlaceShips) {
    // Remove all the ships from the ship selector because they are going to
    // be placed randomly.
    this.#shipsContainer.remove();

    randomlyPlaceShips();
  }

  // Render this element in the DOM.
  render() {
    this.#container.appendChild(randomizer(this.clickHandler));
    this.#container.appendChild(this.#shipsContainer);
    rootNode.appendChild(this.#container);
  }
}
