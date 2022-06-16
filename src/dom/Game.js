import Board from "./Board";

export default function Game() {
  const players = [
    new Board("Player One", toggleTurn),
    new Board("Player Two", toggleTurn),
  ];

  let i = 0;

  function nextPlayer() {
    return players[++i % 2];
  }

  function currentPlayer() {
    return players[i % 2];
  }

  function toggleTurn() {
    if (currentPlayer().isAlive()) {
      console.log(`${currentPlayer().name}'s turn`);
      currentPlayer().disableClick();
      nextPlayer().enableClick();
    } else {
      // nextPlayer();
      // console.log(`${currentPlayer().name} is the winner!`);
      // currentPlayer().disableClick();
      // nextPlayer().disableClick();
    }
  }

  return { players, start: toggleTurn };
}
