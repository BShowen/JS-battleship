import "./playerNameComponent.css";
import { HtmlElement } from "@bshowen/htmlelement";

export default function (displayName) {
  const container = new HtmlElement({
    type: "div",
    classList: ["display-name"],
  });

  const displayText = new HtmlElement({ type: "p", innerText: displayName });

  container.appendChild(displayText);

  return container;
}
