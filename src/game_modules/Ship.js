import coordinateList from "./coordinateList";
import getBufferCoords from "../utilities/getBufferCoords";

export default class Ship {
  #length;
  #hits = 0;
  #shipCoords;
  #name;

  constructor(coords, shipName) {
    this.#name = shipName;

    if (coords != null) {
      this.#length = coords.length;
      this.#shipCoords = coordinateList(coords);
      this.getBufferCoords = getBufferCoords.bind(this, this.#shipCoords);
    } else {
      this.#length = undefined;
      this.hit = undefined;
      this.isSunk = undefined;
    }
  }

  get name() {
    return this.#name;
  }

  //Attempt a hit on this ship.
  hit(coords) {
    if (this.#hits != this.#length && this.#shipCoords.contains([coords])) {
      this.#shipCoords.remove(coords);
      this.#hits++;
      return true;
    }
    return false;
  }

  isSunk() {
    return this.#length === this.#hits;
  }
}
