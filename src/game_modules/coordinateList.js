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

  function remove(coords) {
    if (!contains([coords])) return false;
    return _coordinates.some((coordinate, index) => {
      if (coordinate.join("") === coords.join("")) {
        _coordinates.splice(index, 1);
        return true;
      }
    });
  }

  function peek() {
    console.table(_coordinates);
  }

  return { contains, add, remove, peek };
};

export default coordinateList;
