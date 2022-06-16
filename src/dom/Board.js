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

  /**
   * boardRows is populated with rows of squares. This is currently used to
   * unmount and remove rows and squares from the dom when a re-render is needed
   */
  const boardRows = [];

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

  // Return true if this board has floating ships.
  // Return false if this board does not have floating ships.
  function isAlive() {
    return gameBoard.hasFloatingShips();
  }

  // coords = [[int, int], ... ,[int, int]]
  function placeShip(shipCoords) {
    if (gameBoard.placeShip(shipCoords)) {
      console.log("Placed a ship");
      renderBoard();
      return true;
    } else {
      console.log("Cannot place ship", { shipCoords });
      return false;
    }
  }

  // Create the DOM board and populate the boardSquares array.
  function renderBoard() {
    boardRows.forEach((row) => row.remove());
    boardSquares.forEach((square) => square.unmount());

    for (let row = 0; row < 10; row++) {
      const rowElement = new Row();
      for (let column = 0; column < 10; column++) {
        const square = new Square(
          [row, column],
          toggleTurn,
          gameBoard.receiveAttack,
          gameBoard.coordIsValid,
          gameBoard.isShipPosition,
          placeShip
        );
        boardSquares.push(square);
        rowElement.appendChild(square.container);
      }
      boardRows.push(rowElement);
      container.appendChild(rowElement);
    }
  }

  renderBoard();
  return {
    element: container,
    disableClick,
    enableClick,
    placeShip,
    isAlive,
    name,
  };
}
