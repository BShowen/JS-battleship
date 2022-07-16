import "./GameMenu.css";
import { HtmlElement } from "@bshowen/htmlelement";
import Toast from "./Toast";

export default class GameMenu {
  static toast(message) {
    if (message == undefined) return;

    // Find or create the container for the toast messages to populate.
    const toastContainer =
      document.querySelector("#toast-container") ||
      new HtmlElement({
        type: "div",
        id: "toast-container",
      });
    document.body.appendChild(toastContainer);

    // Create the toast message and render it in the toast container.
    new Toast(message).render(toastContainer);
  }

  /**
   * root = The container where this component should insert itself.
   * game = An instance of the game. game.startGame() is called when a player
   * selects "single player" or "two player".
   */
  static renderGameSelectionMenu(root, game) {
    const container = new HtmlElement({
      type: "div",
      id: "game-menu-container",
    });

    const menuElement = (() => {
      const container = new HtmlElement({ type: "div", id: "menu-container" });
      return container;
    })();

    function Button(buttonText, callback) {
      const container = new HtmlElement({
        type: "div",
        classList: ["button-container"],
      });
      const button = new HtmlElement({
        type: "button",
        innerText: buttonText,
      });
      button.addEventListener("click", callback, { once: true });
      container.appendChild(button);
      return container;
    }

    function transition() {
      root.classList.toggle("game-in-progress");
    }

    function removeBackground() {
      root.classList.remove("main-menu");
    }

    function playTwoPlayerGame() {
      transition();
      setTimeout(() => {
        removeBackground();
        container.remove();
        game.startGame();
        transition();
      }, 600);
    }

    function playAgainstAI() {
      transition();
      setTimeout(() => {
        removeBackground();
        container.remove();
        game.startGame({ singlePlayer: true });
        transition();
      }, 600);
    }

    menuElement.appendChild(new Button("Single player", playAgainstAI));
    menuElement.appendChild(new Button("Two player", playTwoPlayerGame));
    container.appendChild(menuElement);
    root.appendChild(container);
  }
}
