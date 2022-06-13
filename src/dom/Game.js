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
    currentPlayer().disableClick();
    nextPlayer().enableClick();
  }

  return { players, start: toggleTurn };
}
