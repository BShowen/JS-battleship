import "./GameMenu.css";
import { HtmlElement } from "@bshowen/htmlelement";

export default class GameMenu {
  static container = new HtmlElement({
    type: "div",
    id: "game-menu-container",
  });

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
}
