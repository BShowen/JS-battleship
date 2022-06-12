import { HtmlElement } from "@bshowen/htmlelement";

export default (() => {
  const root = new HtmlElement({ type: "div", id: "app" });
  document.getElementsByTagName("body")[0].appendChild(root);
  return root;
})();
