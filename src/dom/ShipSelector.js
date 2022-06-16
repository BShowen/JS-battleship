import { HtmlElement } from "@bshowen/htmlelement";
import Ship from "./Ship";
import "./shipSelector.css";

export default function ShipSelector() {
  const container = new HtmlElement({
    type: "div",
    classList: ["ship-selector-container"],
  });

  container.appendChild(new Ship(4).container);
  container.appendChild(new Ship(1).container);
  container.appendChild(new Ship(3).container);
  return { container };
}
