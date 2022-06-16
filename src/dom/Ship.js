import { HtmlElement } from "@bshowen/htmlelement";
import "./Ship.css";
/**
 * This is a draggable ship. This class creates the ships that the user can
 * drag onto their battle field.
 */
export default class Ship {
  constructor(length) {
    this.container = new HtmlElement({
      type: "div",
      id: `ship-${length}`,
      attributes: {
        draggable: "true",
      },
    });

    // The length of this ship.
    this.length = length;

    this.container.addEventListener("dragstart", this.dragStart);

    this.setDataSet = this.setDataSet.bind(this);

    this.createShipBody();
  }

  // Create the individual squares that makeup a ship.
  createShipBody() {
    for (let i = 0; i < this.length; i++) {
      this.container.appendChild(this.shipBody(i));
    }
  }

  // This mousedown handler for this square.
  setDataSet(int) {
    this.container.setAttribute("data-clicked-body", int);
    this.container.setAttribute("data-orientation", "vertical");
    this.container.setAttribute("data-length", this.length);
  }

  /**
   * Create the individual squares that makeup this ship.
   * location = int
   * The location is used to indicate which square the user picked up the ship
   * from. If the ship is 3 squares, the user can pick the ship up from square 0,
   * square 1, or square 2. This value is needed in order for other functions
   * to generate coordinates to place the ship.
   * */
  shipBody(location) {
    const body = new HtmlElement({
      type: "div",
      classList: ["ship-body"],
    });

    body.addEventListener("mousedown", this.setDataSet.bind(null, location));

    return body;
  }

  // Start the dragging process.
  dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    e.dataTransfer.dropEffect = "move";
  }
}
