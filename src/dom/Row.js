import { HtmlElement } from "@bshowen/htmlelement";
import "./Row.css";

export default function Row() {
  const rowContainer = new HtmlElement({
    type: "div",
    classList: ["row-container"],
  });
  return rowContainer;
}
