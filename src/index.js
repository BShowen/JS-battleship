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

  const fleetStatusContainer = new HtmlElement({
    type: "div",
    id: "fleet-status-container",
  });

  appRoot.appendChild(boardsContainer);
  appRoot.appendChild(fleetStatusContainer);

  GameMenu.renderGameSelectionMenu(appRoot, new Game(boardsContainer));
})();
