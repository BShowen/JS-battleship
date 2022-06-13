import "./index.css";
import rootNode from "./rootNode";
import Game from "./dom/Game";

const app = (() => {
  const appRoot = rootNode;
  const game = new Game();

  function render() {
    const [playerOneBoard, playerTwoBoard] = game.players;
    appRoot.appendChild(playerOneBoard.element);
    appRoot.appendChild(playerTwoBoard.element);
    game.start();
  }

  render();
})();
