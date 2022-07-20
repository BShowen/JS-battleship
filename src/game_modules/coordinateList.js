/**
 * This is a utility method that keeps track of coordinates.
 *
 * Use the add() method to add coordinates to the list.
 * Use the contains() method to see if this list already contains the coordinate
 * Use the remove() method to remove a coordinate from the list.
 */

const coordinateList = function (coords) {
  const _coordinates = coords || [];
  let _length = _coordinates.length;

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
      ++_length;
    });
    return true;
  }

  // coords = [int,int]
  function remove(coords) {
    if (!contains([coords])) return false;
    return _coordinates.some((coordinate, index) => {
      if (coordinate.join("") === coords.join("")) {
        _coordinates.splice(index, 1);
        --_length;
        return true;
      }
    });
  }

  function all() {
    return _coordinates.slice();
  }

  function length() {
    return _length;
  }

  return { contains, add, remove, all, length };
};

export default coordinateList;
