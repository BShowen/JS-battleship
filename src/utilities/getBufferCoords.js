import coordinateList from "./coordinateList";

/**
 * This method returns an instance of coordinateList.js, populated with the
 * coordinates surrounding the ship. These are coordinates that other ships
 * cannot be placed on. In this game, ships cannot touch
 *
 * shipCoords = An instance of coordinateList.js, populated with a ships
 * coordinate positions
 */
export default function getBufferCoords(shipCoords) {
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

  shipCoords.all().forEach((coordinate) => {
    const [y, x] = coordinate; //y == int, x == int

    if (!shipCoords.contains([[y, x - 1]])) {
      bufferCoords.add([[y, x - 1]]);
    }

    if (!shipCoords.contains([[y, x + 1]])) {
      bufferCoords.add([[y, x + 1]]);
    }

    if (!shipCoords.contains([[y - 1, x]])) {
      bufferCoords.add([[y - 1, x]]);
    }

    if (!shipCoords.contains([[y + 1, x]])) {
      bufferCoords.add([[y + 1, x]]);
    }
  });

  return bufferCoords;
}
