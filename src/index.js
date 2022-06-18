import "./index.css";
import rootNode from "./rootNode";
import Game from "./dom/Game";
import { HtmlElement } from "@bshowen/htmlelement";

const app = (() => {
  const appRoot = rootNode;
  // A container to hold the game boards.
  const boardsContainer = new HtmlElement({
    type: "div",
    id: "boards-container",
  });
  appRoot.appendChild(boardsContainer);

  const game = new Game(boardsContainer);

  function render() {
    game.startGame();
  }

  render();
})();
