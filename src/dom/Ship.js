import { HtmlElement } from "@bshowen/htmlelement";
import "./Ship.css";
/**
 * This is a draggable ship. This function creates the ships that the user can
 * drag onto their battle field.
 */
export default function Ship(length) {
  const ship = new HtmlElement({
    type: "div",
    id: `ship-${length}`,
    attributes: {
      draggable: "true",
    },
  });

  ship.addEventListener("dragstart", dragStart);

  for (let i = 0; i < length; i++) {
    ship.appendChild(new shipBody(i, setDataSet));
  }

  function setDataSet(int) {
    ship.setAttribute("data-clicked-body", int);
    ship.setAttribute("data-orientation", "vertical");
    ship.setAttribute("data-length", length);
  }

  // A ship is composed of multiple square elements.
  function shipBody(location, callBack) {
    const body = new HtmlElement({
      type: "div",
      classList: ["ship-body"],
    });

    body.addEventListener("mousedown", callBack.bind(null, location));

    return body;
  }

  function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    e.dataTransfer.dropEffect = "move";
  }

  return { container: ship };
}
