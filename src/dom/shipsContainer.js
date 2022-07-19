import { HtmlElement } from "@bshowen/htmlelement";

/**
 * A function that returns a div for placing the ships. The ships placed in this
 * div are the ships that the user will drag onto their game board.
 */
export default function shipsContainer() {
  const _shipsContainer = new HtmlElement({
    type: "div",
    classList: ["ships-container"],
  });

  const _titleInstructions = new HtmlElement({
    type: "div",
    id: "instructions-container",
  });

  const _text = new HtmlElement({
    type: "p",
    innerText: "Double click a ship to rotate it.",
  });

  _shipsContainer.appendChild(_titleInstructions);
  _titleInstructions.appendChild(_text);

  return _shipsContainer;
}
