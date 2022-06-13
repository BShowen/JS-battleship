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
      console.log("Direct Hit");
    } else {
      container.classList.add("fill-missed-strike");
    }
    toggleTurn();
  }

  function disable() {
    container.removeEventListener("click", clickHandler);
  }

  function enable() {
    if (gameBoard.coordIsValid(coords)) {
      console.log("valid");
      container.addEventListener("click", clickHandler, { once: true });
    }
  }

  return { element: container, disable, enable };
}
