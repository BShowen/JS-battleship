import "./randomizer.css";

/**
 * A function that allows a player to click a button in order to randomly place
 * their ships on the board.
 */

import { HtmlElement } from "@bshowen/htmlelement";

export default function (clickHandler) {
  const container = new HtmlElement({
    type: "div",
    id: "randomizer-container",
  });
  const button = new HtmlElement({
    type: "button",
    innerText: "Place randomly",
  });

  button.addEventListener("click", clickHandler);

  container.appendChild(button);

  return container;
}
