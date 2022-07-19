import "./randomizer.css";
import { HtmlElement } from "@bshowen/htmlelement";

/**
 * A function that allows a player to click a button in order to randomly place
 * their ships on the board.
 *
 * placeShips = A callback passed in from ShipSelector.js
 * allShipsPlaced = A callback passed in from ShipSelector.js
 */
export default function (placeShips, allShipsPlaced) {
  const container = new HtmlElement({
    type: "div",
    id: "randomizer-container",
  });
  const placeShipsButton = new HtmlElement({
    type: "button",
    innerText: "Place randomly",
  });
  const readyButton = new HtmlElement({
    type: "button",
    innerText: "Ready",
  });

  function placeShipsButtonHandler() {
    placeShips();
    container.appendChild(readyButton);
    readyButton.addEventListener("click", allShipsPlaced, { once: true });
  }

  placeShipsButton.addEventListener("click", placeShipsButtonHandler);

  container.appendChild(placeShipsButton);

  return container;
}
