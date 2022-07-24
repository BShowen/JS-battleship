import "./Toast.css";
import { HtmlElement } from "@bshowen/htmlelement";

/**
 * This is the message that gets displayed at the top of the screen whenever a
 * user makes a move.
 */
export default class Toast {
  #container = new HtmlElement({
    type: "div",
    classList: ["toast-message"],
  });

  #toastText;

  constructor(message, options = { persist: false }) {
    this.options = options;
    this.#toastText = new HtmlElement({ type: "p", innerText: message });
    this.#container.appendChild(this.#toastText);

    this.remove = this.#remove.bind(this);
  }

  // Automatically remove the toast message after 1 second.
  #remove() {
    this.#container.classList.add("remove");
    setTimeout(() => {
      this.#container.remove();
    }, 1000);
  }

  render(rootNode) {
    rootNode.appendChild(this.#container);

    if (this.options.persist) return; //Don't remove this toast.

    // Remove the toast message after 1.5 seconds.
    setTimeout(() => {
      this.remove();
    }, 1500);
  }
}
