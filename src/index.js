import { HtmlElement } from "@bshowen/htmlelement";
import Row from "./dom/Row";
import Square from "./dom/Square";
import rootNode from "./rootNode";
import "./index.css";

const app = (() => {
  const appRoot = rootNode;
  const playerOneBoard = new Board("Player One");
  const playerTwoBoard = new Board("Player Two");

  render();

  function render() {
    appRoot.appendChild(playerOneBoard);
    appRoot.appendChild(playerTwoBoard);
  }

  function Board(displayName) {
    const container = new HtmlElement({
      type: "div",
      classList: ["board"],
    });

    const displayText = new HtmlElement({ type: "p", innerText: displayName });
    container.appendChild(displayText);

    for (let row = 0; row < 10; row++) {
      const row = new Row();
      for (let column = 0; column < 10; column++) {
        row.appendChild(new Square([row, column]));
      }
      container.appendChild(row);
    }
    return container;
  }
})();
