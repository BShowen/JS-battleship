/**
 * This is a utility method that keeps track of coordinates.
 *
 * Use the add() method to add coordinates to the list.
 * Use the contains() method to see if this list already contains the coordinate
 * Use the remove() method to remove a coordinate from the list.
 */

const coordinateList = function (coords) {
  const _coordinates = coords || [];

  // coords = [[int, int],[int,int], ..., [int, int]];
  function contains(coords) {
    return coords.some((incomingCoord) => {
      return _coordinates.some((existingCoord) => {
        return incomingCoord.join("") === existingCoord.join("");
      });
    });
  }

  // coords = [[int, int],[int,int], ..., [int, int]];
  function add(coords) {
    coords.forEach((coord) => {
      _coordinates.push(coord);
    });
    return true;
  }

  // coords = [int,int]
  function remove(coords) {
    if (!contains([coords])) return false;
    return _coordinates.some((coordinate, index) => {
      if (coordinate.join("") === coords.join("")) {
        _coordinates.splice(index, 1);
        return true;
      }
    });
  }

  function all() {
    return _coordinates.slice();
  }

  return { contains, add, remove, all };
};

export default coordinateList;
