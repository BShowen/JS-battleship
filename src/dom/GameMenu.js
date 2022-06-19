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

    const titleElement = (() => {
      const container = new HtmlElement({
        type: "div",
        id: "menu-title",
      });

      const title = new HtmlElement({
        type: "p",
        id: "title-text",
        innerText: "Let's play Battleship!",
      });

      container.appendChild(title);
      return container;
    })();

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
      container.remove();
      options.twoPlayer();
    }

    function playAgainstAI() {
      container.remove();
      options.singlePlayer();
    }

    menuElement.appendChild(titleElement);
    menuElement.appendChild(new Button("Two player", playTwoPlayerGame));
    menuElement.appendChild(new Button("Single player", playAgainstAI));
    container.appendChild(menuElement);
    root.appendChild(container);
  }
}
