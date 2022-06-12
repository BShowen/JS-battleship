import { HtmlElement } from "@bshowen/htmlelement";
import "./Square.css";

export default function Square(coordinates) {
  // The coordinates of this square.
  const coords = coordinates;

  // The container for rendering this square in the DOM.
  const container = new HtmlElement({ type: "div", classList: ["square"] });

  return container;
}
