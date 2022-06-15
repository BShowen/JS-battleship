import Row from "./Row";
import Square from "./Square";
import GameBoard from "../game_modules/GameBoard";
import { HtmlElement } from "@bshowen/htmlelement";

/**
 * This is a representation of the game board in the DOM. This is the class that
 * interacts with the GameBoard API, found in src/game_modules/GameBoard.js
 *
 * toggleTurn = A callback passed in from Game.js. This callback is passed into
 * Square.js
 */
export default function Board(displayName, toggleTurn) {
  const name = displayName;

  const gameBoard = new GameBoard();
  /**
   * boardSquares is populated with the squares that makeup the board in the
   * DOM. Reference to these squares is needed in order to interact with the
   * Square API.
   */
  const boardSquares = [];

  const container = new HtmlElement({
    type: "div",
    classList: ["board"],
  });

  const displayText = new HtmlElement({ type: "p", innerText: displayName });
  container.appendChild(displayText);

  // Disable clicking on this board.
  function disableClick() {
    boardSquares.forEach((square) => square.disable());
  }

  // Enable clicking on this board.
  function enableClick() {
    boardSquares.forEach((square) => square.enable());
  }

  // coords = [[int, int], ... ,[int, int]]
  function placeShip(coords) {
    gameBoard.placeShip(coords);
  }

  // Return true if this board has floating ships.
  // Return false if this board does not have floating ships.
  function isAlive() {
    return gameBoard.hasFloatingShips();
  }

  // Create the DOM board and populate the boardSquares array.
  for (let row = 0; row < 10; row++) {
    const rowElement = new Row();
    for (let column = 0; column < 10; column++) {
      const square = new Square(
        [row, column],
        toggleTurn,
        gameBoard.receiveAttack,
        gameBoard.coordIsValid,
        gameBoard.isShipPosition
      );
      boardSquares.push(square);
      rowElement.appendChild(square.element);
    }
    container.appendChild(rowElement);
  }
  return {
    element: container,
    disableClick,
    enableClick,
    placeShip,
    isAlive,
    name,
  };
}
