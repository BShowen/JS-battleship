import { HtmlElement } from "@bshowen/htmlelement";
import "./Square.css";

/**
 * coordinates = [int,int]
 * gameBoard = An instance of GameBoard passed in from index.js > Board()
 * toggleTurn = A callback passed in from Board.js and is used to toggle the
 * turn.
 */
export default function Square(coordinates, gameBoard, toggleTurn) {
  // The coordinates of this square.
  const coords = coordinates;

  // The container for rendering this square in the DOM.
  const container = new HtmlElement({ type: "div", classList: ["square"] });
  const clickHandler = handler.bind(this);

  function handler() {
    if (gameBoard.receiveAttack(coords)) {
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
    if (gameBoard.peekShipPosition(coords)) {
      container.classList.add("fill-ship-position");
    }
  }

  function enable() {
    // The coordinates are valid ONLY if they haven'y been selected before. This
    // ensures that you cannot select the same square multiple times.
    if (gameBoard.coordIsValid(coords)) {
      container.addEventListener("click", clickHandler, { once: true });
    }
    container.classList.remove("fill-ship-position");
  }

  function toggleShip() {}

  return { element: container, disable, enable };
}
