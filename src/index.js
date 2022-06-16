import "./index.css";
import rootNode from "./rootNode";
import Game from "./dom/Game";
import { HtmlElement } from "@bshowen/htmlelement";
import ShipSelector from "./dom/ShipSelector";

const app = (() => {
  const appRoot = rootNode;
  // A container to hold the game boards.
  const boardsContainer = new HtmlElement({
    type: "div",
    id: "boards-container",
  });
  const game = new Game();
  const shipContainer = new ShipSelector().container;

  function render() {
    const [playerOneBoard, playerTwoBoard] = game.players;
    boardsContainer.appendChild(playerOneBoard.element);
    boardsContainer.appendChild(playerTwoBoard.element);
    appRoot.appendChild(boardsContainer);
    appRoot.appendChild(shipContainer);
    game.start();
  }

  render();
})();
