import coordinateList from "./coordinateList";

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
