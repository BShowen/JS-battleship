/**
 * This function returns a key/value pair object of where the ship name is the
 * key and the ship object is the value.
 */
export default function getAllShips() {
  const ships = {};

  ["carrier", "battleship", "cruiser", "submarine", "destroyer"].forEach(
    (shipName) => (ships[shipName] = new Ship(shipName))
  );

  return ships;
}

class Ship {
  #hitsReceived = 0;
  #length;

  constructor(shipName) {
    this.shipName = shipName;
    switch (shipName) {
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

  isSunk() {
    return this.#length <= this.#hitsReceived;
  }

  takeHit() {
    if (this.#hitsReceived === this.#length) return false;
    return ++this.#hitsReceived;
  }
}
