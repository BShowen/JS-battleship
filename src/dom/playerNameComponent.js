import "./playerNameComponent.css";
import { HtmlElement } from "@bshowen/htmlelement";

export default function (displayName, displayProperties) {
  const container = new HtmlElement({
    type: "div",
    classList: ["display-name"],
  });

  const displayText = new HtmlElement({ type: "p", innerText: displayName });

  container.appendChild(displayText);

  if (displayProperties.screenSide == "left") {
    container.classList.add("display-name-left-side");
  } else {
    container.classList.add("display-name-right-side");
  }

  return container;
}
