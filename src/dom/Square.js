import { HtmlElement } from "@bshowen/htmlelement";
import "./Square.css";

/**
 * coordinates = [int,int]
 * toggleTurn, isDirectHIt, isValidCoord, isShipPosition = Are callbacks that
 * are passed in from Board.js
 */
export default function Square(
  coordinates,
  toggleTurn,
  isDirectHit,
  isValidCoord,
  isShipPosition
) {
  // The coordinates of this square.
  const coords = coordinates;

  // The container for rendering this square in the DOM.
  const container = new HtmlElement({ type: "div", classList: ["square"] });
  const clickHandler = handler.bind(this);

  function handler() {
    if (isDirectHit(coords)) {
      container.classList.add("fill-ship-hit");
    } else {
      container.classList.add("fill-missed-strike");
    }
    toggleTurn();
  }

  function disable() {
    container.removeEventListener("click", clickHandler);
    _toggleShipPosition();
  }

  function _toggleShipPosition() {
    if (isShipPosition(coords)) {
      container.classList.add("fill-ship-position");
    }
  }

  function enable() {
    // The coordinates are valid ONLY if they haven'y been selected before. This
    // ensures that you cannot select the same square multiple times.
    if (isValidCoord(coords)) {
      container.addEventListener("click", clickHandler, { once: true });
    }
    container.classList.remove("fill-ship-position");
  }

  function toggleShip() {}

  return { element: container, disable, enable };
}
