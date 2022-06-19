import coordinateList from "./coordinateList";

export default function Ship(coords, shipName) {
  const _length = coords.length;
  let _hits = 0;
  const _shipCoords = coordinateList(coords);

  //Attempt a hit on this ship.
  const hit = function (coords) {
    if (_hits != _length && _shipCoords.contains([coords])) {
      _shipCoords.remove(coords);
      _hits++;
      return true;
    }
    return false;
  };

  const isSunk = function () {
    return _length === _hits;
  };

  const name = shipName;

  return { hit, isSunk, name };
}
