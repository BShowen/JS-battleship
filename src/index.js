import "./index.css";
import rootNode from "./rootNode";
import Game from "./dom/Game";

const app = (() => {
  const appRoot = rootNode;
  const game = new Game();

  const [playerOne, playerTwo] = game.players;
  playerOne.placeShip([
    [0, 0],
    [0, 1],
    [0, 2],
  ]);
  playerTwo.placeShip([
    [9, 9],
    [8, 9],
    [7, 9],
  ]);

  function render() {
    const [playerOneBoard, playerTwoBoard] = game.players;
    appRoot.appendChild(playerOneBoard.element);
    appRoot.appendChild(playerTwoBoard.element);
    game.start();
  }

  render();
})();
