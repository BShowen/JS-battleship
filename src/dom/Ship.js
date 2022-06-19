import { HtmlElement } from "@bshowen/htmlelement";
import "./Ship.css";
/**
 * This is a draggable ship. This class creates the ships that the user can
 * drag onto their battle field.
 */
export default class Ship {
  // The container which holds all DOM elements for this class.
  #container;

  // The container where this class inserts itself.
  #parentElement;

  // The length of the ship.
  #length;

  // Handle a double click on this element
  #doubleClickHandler;

  constructor(length, uniqueElementId, parentElement) {
    // The Html DOM element where this class inserts itself.
    this.#parentElement = parentElement;

    this.#container = new HtmlElement({
      type: "div",
      id: `ship-${uniqueElementId}`,
      attributes: {
        draggable: "true",
        "data-orientation": "vertical",
      },
    });

    // The length of this ship.
    this.#length = length;

    this.#container.addEventListener("dragstart", this.#dragStart);

    /**
     * This method is used as a callback for a DOM event. I need to set the
     * context of 'this' so that this method can reference this class.
     */
    this.setDataSet = this.#setDataSet.bind(this);
    this.#doubleClickHandler = this.#double_click_handler.bind(this);

    this.#container.addEventListener("dblclick", this.#doubleClickHandler);

    this.#createShipBody();
  }

  #double_click_handler() {
    const currentOrientation = this.#container.dataset.orientation;
    console.log(currentOrientation);
    if (currentOrientation === "vertical") {
      console.log("change to horizontal");
      this.#container.dataset.orientation = "horizontal";
    } else {
      console.log("change to vertical");
      this.#container.dataset.orientation = "vertical";
    }
  }

  // Create the individual squares that makeup a ship.
  #createShipBody() {
    for (let i = 0; i < this.#length; i++) {
      this.#container.appendChild(this.#shipBody(i));
    }
  }

  // This mousedown handler for this square.
  #setDataSet(int) {
    this.#container.setAttribute("data-clicked-body", int);
    // this.#container.setAttribute("data-orientation", "vertical");
    this.#container.setAttribute("data-length", this.#length);
  }

  /**
   * Create the individual squares that makeup this ship.
   * location = int
   * The location is used to indicate which square the user picked up the ship
   * from. If the ship has 3 squares, the user can pick the ship up from
   * square 0, square 1, or square 2. This value is needed in order for other
   * functions to generate coordinates to place the ship.
   * */
  #shipBody(location) {
    const body = new HtmlElement({
      type: "div",
      classList: ["ship-body"],
    });

    body.addEventListener("mousedown", this.setDataSet.bind(null, location));

    return body;
  }

  // Start the dragging process.
  #dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    e.dataTransfer.effectAllowed = "move";
  }

  // Display this ship in the DOM.
  render() {
    this.#parentElement.appendChild(this.#container);
  }

  // Remove this ship from the DOM
  remove() {
    this.#container.remove();
  }
}
