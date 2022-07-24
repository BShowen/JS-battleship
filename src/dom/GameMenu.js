import "./GameMenu.css";
import { HtmlElement } from "@bshowen/htmlelement";
import Toast from "./Toast";

export default class GameMenu {
  static getToastContainer() {
    // Find or create the container for the toast messages to populate.
    let toastContainer = document.querySelector("#toast-container");

    if (!toastContainer) {
      toastContainer = new HtmlElement({
        type: "div",
        id: "toast-container",
      });
      document.body.appendChild(toastContainer);
    }

    return toastContainer;
  }

  static toast(message, options) {
    if (message == undefined) return;

    const toastContainer = this.getToastContainer();

    // Create the toast message and render it in the toast container.
    new Toast(message, options).render(toastContainer);
  }

  static persistentToast(message) {
    let options = { persist: true };
    this.toast(message, options);
  }

  /**
   * root = The container where this component should insert itself.
   * singlePlayerGame = A callback to start a single player game
   * twoPlayerGame = A callback to start a two player game
   */
  static renderGameSelectionMenu(root, singlePlayerGame, twoPlayerGame) {
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

    function removeBackground() {
      root.classList.remove("main-menu");
    }

    function playTwoPlayerGame() {
      removeBackground();
      container.remove();
      twoPlayerGame();
    }

    function playAgainstAI() {
      removeBackground();
      container.remove();
      singlePlayerGame();
    }

    menuElement.appendChild(new Button("Single player", playAgainstAI));
    menuElement.appendChild(new Button("Two player", playTwoPlayerGame));
    container.appendChild(menuElement);
    root.appendChild(container);
  }
}
