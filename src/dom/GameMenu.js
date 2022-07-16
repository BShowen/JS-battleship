import "./GameMenu.css";
import { HtmlElement } from "@bshowen/htmlelement";

export default class GameMenu {
  static toast(message) {
    if (message == undefined) return;

    const toastContainer = new HtmlElement({
      type: "div",
      id: "toast-container",
    });

    const toastContent = new HtmlElement({ type: "div", id: "toast-content" });

    const toastMessage = new HtmlElement({ type: "p", innerText: message });

    function removeToast() {
      toastContainer.remove();
    }

    toastContainer.appendChild(toastContent);
    toastContent.appendChild(toastMessage);
    document.body.appendChild(toastContainer);
    setTimeout(removeToast, 1500);
  }

  static renderGameSelectionMenu(root, options = { twoPlayer, singlePlayer }) {
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

    function playTwoPlayerGame() {
      setTimeout(() => {
        container.remove();
        options.twoPlayer();
      }, 250);
    }

    function playAgainstAI() {
      setTimeout(() => {
        container.remove();
        options.singlePlayer();
      }, 250);
    }

    menuElement.appendChild(new Button("Single player", playAgainstAI));
    menuElement.appendChild(new Button("Two player", playTwoPlayerGame));
    container.appendChild(menuElement);
    root.appendChild(container);
  }
}
