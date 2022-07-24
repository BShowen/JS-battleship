import "./FleetStatus.css";
import { HtmlElement } from "@bshowen/htmlelement";

export default class FleetStatus {
  // The Html  node where this class renders its elements
  #container = new HtmlElement({ type: "div", classList: ["fleet-container"] });

  // A list of all the ships.
  #shipList;

  constructor(displayProperties = {}) {
    if (displayProperties.screenSide == "left") {
      this.#container.classList.add("fleet-container-left-side");
    } else {
      this.#container.classList.add("fleet-container-right-side");
    }

    this.#shipList = [
      new MockShip("carrier", this.#container),
      new MockShip("battleship", this.#container),
      new MockShip("cruiser", this.#container),
      new MockShip("submarine", this.#container),
      new MockShip("destroyer", this.#container),
    ];
  }

  shipIsHit(shipName) {
    for (const ship of this.#shipList) {
      if (ship.getName() === shipName) {
        ship.takeHit();
      }
    }
  }

  render(parentNode) {
    this.#shipList.forEach((shipElement) => shipElement.render());
    parentNode.appendChild(this.#container);
  }
}

class MockShip {
  // The length of this ship;
  #length;

  // The name of this ship.
  #name;

  // The number of hits this ship has taken, if any.
  #hits = 0;

  // The Html node where this class inserts its elements
  #container = new HtmlElement({ type: "div", classList: ["mock-ship"] });

  #shipBodyElements = [];

  constructor(shipName, parentNode) {
    this.parentNode = parentNode;
    this.#name = shipName;
    this.setLength();
    this.#createShipBody();
  }

  // Create the individual squares that makeup a ship.
  #createShipBody() {
    for (let i = 0; i < this.#length; i++) {
      const shipBody = this.#shipBody();
      this.#shipBodyElements.push(shipBody);
      this.#container.appendChild(shipBody);
    }
  }

  /**
   * Create the individual squares that makeup this ship.
   * */
  #shipBody() {
    const body = new HtmlElement({
      type: "div",
      classList: ["ship-body", "status-ship"],
    });
    return body;
  }

  setLength() {
    switch (this.#name) {
      case "carrier":
        this.#length = 5;
        break;
      case "battleship":
        this.#length = 4;
        break;
      case "cruiser":
        this.#length = 3;
        break;
      case "submarine":
        this.#length = 3;
        break;
      case "destroyer":
        this.#length = 2;
        break;
    }
  }

  getName() {
    return this.#name;
  }

  takeHit() {
    this.#shipBodyElements[this.#hits].classList.add("damaged");
    ++this.#hits;
  }

  render() {
    this.parentNode.appendChild(this.#container);
  }
}
