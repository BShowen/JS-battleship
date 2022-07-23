import "./index.css";
import rootNode from "./rootNode";
import Game from "./dom/Game";
import { HtmlElement } from "@bshowen/htmlelement";
import GameMenu from "./dom/GameMenu";

const app = (() => {
  const appRoot = rootNode;
  // A container to hold the game boards.
  const boardsContainer = new HtmlElement({
    type: "div",
    id: "boards-container",
  });

  const game = new Game(boardsContainer);

  const singlePlayerGame = () => {
    appRoot.appendChild(boardsContainer);
    game.startGame({ singlePlayer: true });
  };

  const twoPlayerGame = () => {
    appRoot.appendChild(boardsContainer);
    game.startGame();
  };

  const fleetStatusContainer = new HtmlElement({
    type: "div",
    id: "fleet-status-container",
  });

  // appRoot.appendChild(fleetStatusContainer);

  GameMenu.renderGameSelectionMenu(appRoot, singlePlayerGame, twoPlayerGame);
})();
