import "./GameMenu.css";
import { HtmlElement } from "@bshowen/htmlelement";

export default class GameMenu {
  static container = new HtmlElement({
    type: "div",
    id: "game-menu-container",
  });

  static passScreen(playerName, callBack) {
    const clickHandler = function clickHandler(e) {
      e.preventDefault();
      screenOverlay.remove();
    }.bind(this);

    const screenOverlay = new HtmlElement({
      type: "div",
      id: "pass-screen-overlay",
    });

    const buttonElement = (() => {
      const buttonContainer = new HtmlElement({
        type: "div",
        id: "pass-screen-button-container",
      });
      const button = new HtmlElement({
        type: "button",
        innerText: "Ready",
        id: "pass-button",
      });

      button.addEventListener("click", clickHandler, { once: true });
      button.addEventListener("click", callBack, { once: true });

      buttonContainer.appendChild(button);
      return buttonContainer;
    })();

    const playerNameElement = (() => {
      const playerNameContainer = new HtmlElement({ type: "div" });
      const playerNameElement = new HtmlElement({
        type: "p",
        innerText: playerName,
      });
      playerNameContainer.appendChild(playerNameElement);
      return playerNameContainer;
    })();

    screenOverlay.appendChild(playerNameElement);
    screenOverlay.appendChild(buttonElement);
    document.body.appendChild(screenOverlay);
  }
}
