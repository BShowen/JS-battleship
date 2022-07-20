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

  /**
   * This method returns an instance of coordinateList.js, populated with the
   * coordinates surrounding the ship. These are coordinates that other ships
   * cannot be placed on. In this game, ships cannot touch
   */
  getBufferCoords() {
    /**
     * iterate through each shipCoord.
     *   we are on currentCoord.
     *   push the west coord into buffer coords if its not in ship
     *   push the north coord into buffer coords if its not in ship
     *   push the east coord into buffer coords if its not in ship
     *   push the south coord into buffer coords if its not in ship
     * next iteration
     */

    const bufferCoords = coordinateList();

    this.#shipCoords.all().forEach((coordinate) => {
      const [y, x] = coordinate; //y == int, x == int

      if (!this.#shipCoords.contains([[y, x - 1]])) {
        bufferCoords.add([[y, x - 1]]);
      }

      if (!this.#shipCoords.contains([[y, x + 1]])) {
        bufferCoords.add([[y, x + 1]]);
      }

      if (!this.#shipCoords.contains([[y - 1, x]])) {
        bufferCoords.add([[y - 1, x]]);
      }

      if (!this.#shipCoords.contains([[y + 1, x]])) {
        bufferCoords.add([[y + 1, x]]);
      }
    });

    return bufferCoords;
  }
}
