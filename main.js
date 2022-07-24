/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@bshowen/htmlelement/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@bshowen/htmlelement/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtmlElement": () => (/* binding */ HtmlElement)
/* harmony export */ });
/**
 * An abstraction for easily creating HTML nodes.
 * data = {
 *  type: "div",
 *  classList: ["class1", "class2"],
 *  attributes: {
 *    hidden: "true",
 *    display: "none"
 *  },
 *  id: "SomeID",
 *  innerText: "Some text"
 * }
 */
function HtmlElement(data = {}) {
  const element = document.createElement(data.type);

  if (data.classList) {
    data.classList.forEach((className) => element.classList.add(className));
  }

  if (data.attributes) {
    for (const attributeName in data.attributes) {
      element.setAttribute(attributeName, data.attributes[attributeName]);
    }
  }

  if (data.innerText) {
    element.innerText = data.innerText.trim();
  }

  if (data.id) {
    element.id = data.id;
  }

  if (data.innerHTML) {
    element.innerHTML = data.innerHTML;
  }

  if (data.childrenNodes) {
    data.childrenNodes.forEach((childNode) => element.appendChild(childNode));
  }

  return element;
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dom/FleetStatus.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dom/FleetStatus.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".fleet-container{\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 25px 10px;\n  max-width: 500px;\n  gap: 30px;\n}\n\n.fleet-container-right-side {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n}\n.fleet-container-left-side {\n  transform: rotateY(180deg);\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n}\n\n.mock-ship{\n  min-width: min-content;\n  max-width: min-content;\n  min-height: min-content;\n  max-height: min-content;\n  display: flex;\n  flex-direction: row;\n  gap: 6px;\n}\n\n.status-ship {\n  height: 25px;\n  width: 25px;\n}\n\n.mock-ship .damaged{\n  background-color: #EF476F;\n  border-color: #EF476F;\n}", "",{"version":3,"sources":["webpack://./src/dom/FleetStatus.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,2BAA2B;EAC3B,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,0BAA0B;EAC1B,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB","sourcesContent":[".fleet-container{\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 25px 10px;\n  max-width: 500px;\n  gap: 30px;\n}\n\n.fleet-container-right-side {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n}\n.fleet-container-left-side {\n  transform: rotateY(180deg);\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n}\n\n.mock-ship{\n  min-width: min-content;\n  max-width: min-content;\n  min-height: min-content;\n  max-height: min-content;\n  display: flex;\n  flex-direction: row;\n  gap: 6px;\n}\n\n.status-ship {\n  height: 25px;\n  width: 25px;\n}\n\n.mock-ship .damaged{\n  background-color: #EF476F;\n  border-color: #EF476F;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dom/GameMenu.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dom/GameMenu.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#toast-container {\n  position: absolute;\n  top: 0;\n  margin-top: 10px;\n  width: 100%;\n  \n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n}\n\n#game-menu-container {\n  height: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  gap: 50px;\n  padding: 10px;\n}\n\n.button-container {\n  padding: 5px;\n}\n\nbutton{\n  border: 1px solid #3E7080;\n  width: 300px;\n  height: 75px;\n  border-radius: 5px;\n  font-size: larger;\n  font-weight: 900;\n  background-color: #7EC3DA;\n  color: #000;\n}\n\nbutton:hover {\n  color: #FFF;\n}\n\n.button-container:active {\n  padding-top: 8px;\n  padding-bottom: 2px;\n}", "",{"version":3,"sources":["webpack://./src/dom/GameMenu.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,MAAM;EACN,gBAAgB;EAChB,WAAW;;EAEX,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB","sourcesContent":["#toast-container {\n  position: absolute;\n  top: 0;\n  margin-top: 10px;\n  width: 100%;\n  \n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n}\n\n#game-menu-container {\n  height: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  gap: 50px;\n  padding: 10px;\n}\n\n.button-container {\n  padding: 5px;\n}\n\nbutton{\n  border: 1px solid #3E7080;\n  width: 300px;\n  height: 75px;\n  border-radius: 5px;\n  font-size: larger;\n  font-weight: 900;\n  background-color: #7EC3DA;\n  color: #000;\n}\n\nbutton:hover {\n  color: #FFF;\n}\n\n.button-container:active {\n  padding-top: 8px;\n  padding-bottom: 2px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dom/Player.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dom/Player.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".board-container {\n  display: grid;\n  grid-template-rows: 100px 550px;\n  padding: 5px;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 10px;\n  border-radius: 5px;\n  height: min-content;\n  width: min-content;\n}\n\n.board-container-right-side {\n  grid-template-columns: 550px 1fr;\n}\n\n.board-container-right-side > .board {\n  grid-column: 1 / 2;\n  grid-row:  2 / 3;\n}\n\n.board-container-left-side {\n  grid-template-columns: 1fr 550px;\n}\n\n.board-container-left-side > .board {\n  grid-column: 2 / 3;\n  grid-row:  2 / 3;\n}\n\n.board:hover{\n  cursor: pointer;\n}\n\n\n.disabled {\n  background-color: rgba(0, 0, 0, 0.10);\n}\n\n.disabled:hover{\n  cursor: not-allowed;\n}", "",{"version":3,"sources":["webpack://./src/dom/Player.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,+BAA+B;EAC/B,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;;AAGA;EACE,qCAAqC;AACvC;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":[".board-container {\n  display: grid;\n  grid-template-rows: 100px 550px;\n  padding: 5px;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 10px;\n  border-radius: 5px;\n  height: min-content;\n  width: min-content;\n}\n\n.board-container-right-side {\n  grid-template-columns: 550px 1fr;\n}\n\n.board-container-right-side > .board {\n  grid-column: 1 / 2;\n  grid-row:  2 / 3;\n}\n\n.board-container-left-side {\n  grid-template-columns: 1fr 550px;\n}\n\n.board-container-left-side > .board {\n  grid-column: 2 / 3;\n  grid-row:  2 / 3;\n}\n\n.board:hover{\n  cursor: pointer;\n}\n\n\n.disabled {\n  background-color: rgba(0, 0, 0, 0.10);\n}\n\n.disabled:hover{\n  cursor: not-allowed;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dom/Row.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dom/Row.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".row-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  /* gap: 6px; */\n  /* padding: 3px; */\n  justify-content: center;\n}", "",{"version":3,"sources":["webpack://./src/dom/Row.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,uBAAuB;AACzB","sourcesContent":[".row-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  /* gap: 6px; */\n  /* padding: 3px; */\n  justify-content: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dom/Ship.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dom/Ship.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div[id*=\"ship\"]{\n  min-width: min-content;\n  max-width: min-content;\n  min-height: min-content;\n  max-height: min-content;\n  display: flex;\n  gap: 2px;\n  background-color: #ACAEB1;\n}\n\ndiv[data-orientation*=\"vertical\"]{\n  flex-direction: column;\n}\n\ndiv[data-orientation*=\"horizontal\"]{\n  flex-direction: row;\n}\n\n.ship-body{\n  border: 1px solid #1B9AAA;\n  background-color: #1B9AAA;\n  height: 48px;\n  width: 48px;\n}", "",{"version":3,"sources":["webpack://./src/dom/Ship.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;EACvB,aAAa;EACb,QAAQ;EACR,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,YAAY;EACZ,WAAW;AACb","sourcesContent":["div[id*=\"ship\"]{\n  min-width: min-content;\n  max-width: min-content;\n  min-height: min-content;\n  max-height: min-content;\n  display: flex;\n  gap: 2px;\n  background-color: #ACAEB1;\n}\n\ndiv[data-orientation*=\"vertical\"]{\n  flex-direction: column;\n}\n\ndiv[data-orientation*=\"horizontal\"]{\n  flex-direction: row;\n}\n\n.ship-body{\n  border: 1px solid #1B9AAA;\n  background-color: #1B9AAA;\n  height: 48px;\n  width: 48px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dom/ShipSelector.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dom/ShipSelector.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ship-selector-container{\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  width: 500px;\n  padding-top: 100px;\n}\n\n.ships-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  min-width: 30rem;\n  padding-bottom: 30px;\n}\n\n.ships-container > div {\n  height: min-content;\n  margin: 5px 15px;\n}\n\n#instructions-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: x-large;\n}", "",{"version":3,"sources":["webpack://./src/dom/ShipSelector.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,uBAAuB;EACvB,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB","sourcesContent":[".ship-selector-container{\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  width: 500px;\n  padding-top: 100px;\n}\n\n.ships-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  min-width: 30rem;\n  padding-bottom: 30px;\n}\n\n.ships-container > div {\n  height: min-content;\n  margin: 5px 15px;\n}\n\n#instructions-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: x-large;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dom/Square.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dom/Square.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".square {\n  border: 1px solid #ACAEB1;\n  min-height: 50px;\n  min-width: 50px;\n}\n\n.fill-ship-position {\n  background-color: #1B9AAA;\n}\n\n.fill-missed-strike {\n  background-color: #5C5D67;\n}\n\n.fill-ship-hit{\n  background-color: #EF476F;\n}", "",{"version":3,"sources":["webpack://./src/dom/Square.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":[".square {\n  border: 1px solid #ACAEB1;\n  min-height: 50px;\n  min-width: 50px;\n}\n\n.fill-ship-position {\n  background-color: #1B9AAA;\n}\n\n.fill-missed-strike {\n  background-color: #5C5D67;\n}\n\n.fill-ship-hit{\n  background-color: #EF476F;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dom/Toast.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dom/Toast.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".toast-message{\n  overflow: hidden;\n  border-radius: 3px;\n  border: 1px solid #B8DAFF;\n  background-color: #CCE5FF;\n  min-width: 100px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  \n  padding: 5px;\n  height: 3rem;\n  transition: height 0.2s, padding 0.2s;\n}\n\n.remove{\n  height: 0;\n  padding: 0;\n  border: none;\n}", "",{"version":3,"sources":["webpack://./src/dom/Toast.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,yBAAyB;EACzB,yBAAyB;EACzB,gBAAgB;;EAEhB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,YAAY;EACZ,YAAY;EACZ,qCAAqC;AACvC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,YAAY;AACd","sourcesContent":[".toast-message{\n  overflow: hidden;\n  border-radius: 3px;\n  border: 1px solid #B8DAFF;\n  background-color: #CCE5FF;\n  min-width: 100px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  \n  padding: 5px;\n  height: 3rem;\n  transition: height 0.2s, padding 0.2s;\n}\n\n.remove{\n  height: 0;\n  padding: 0;\n  border: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dom/playerNameComponent.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dom/playerNameComponent.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".display-name{\n  display: flex;\n  justify-content: center;\n  grid-row: 1 / 2;\n  margin-bottom: 10px;\n}\n\n.display-name > p {\n  margin: 0;\n  font-size: 3.5rem;\n  font-weight: bolder;\n  color: #D8A631;\n}\n\n.display-name-left-side{\n  grid-column: 2 / 3;\n}\n\n.display-name-right-side{\n  grid-column: 1 / 2;\n}", "",{"version":3,"sources":["webpack://./src/dom/playerNameComponent.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":[".display-name{\n  display: flex;\n  justify-content: center;\n  grid-row: 1 / 2;\n  margin-bottom: 10px;\n}\n\n.display-name > p {\n  margin: 0;\n  font-size: 3.5rem;\n  font-weight: bolder;\n  color: #D8A631;\n}\n\n.display-name-left-side{\n  grid-column: 2 / 3;\n}\n\n.display-name-right-side{\n  grid-column: 1 / 2;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dom/randomizer.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dom/randomizer.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#randomizer-container{\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap:15px;\n}", "",{"version":3,"sources":["webpack://./src/dom/randomizer.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV","sourcesContent":["#randomizer-container{\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap:15px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Battleship_banner.jpeg */ "./src/images/Battleship_banner.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n  box-sizing: border-box;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  min-height: 100vh;\n}\n\n#app {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  min-height: 100vh;\n  margin: 0;\n  padding-top: 50px;\n  background-color: #EEEEEE;\n}\n\n#app.main-menu{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n#boards-container{\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  padding: 10px;\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,uBAAuB;EACvB,iBAAiB;EACjB,SAAS;EACT,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,yDAAwD;EACxD,4BAA4B;EAC5B,2BAA2B;EAC3B,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,uBAAuB;EACvB,aAAa;AACf","sourcesContent":["*{\n  box-sizing: border-box;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  min-height: 100vh;\n}\n\n#app {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  min-height: 100vh;\n  margin: 0;\n  padding-top: 50px;\n  background-color: #EEEEEE;\n}\n\n#app.main-menu{\n  background-image: url(\"./images/Battleship_banner.jpeg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n#boards-container{\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  padding: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/dom/FleetStatus.css":
/*!*********************************!*\
  !*** ./src/dom/FleetStatus.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_FleetStatus_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./FleetStatus.css */ "./node_modules/css-loader/dist/cjs.js!./src/dom/FleetStatus.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_FleetStatus_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_FleetStatus_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_FleetStatus_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_FleetStatus_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/dom/GameMenu.css":
/*!******************************!*\
  !*** ./src/dom/GameMenu.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_GameMenu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./GameMenu.css */ "./node_modules/css-loader/dist/cjs.js!./src/dom/GameMenu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_GameMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_GameMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_GameMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_GameMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/dom/Player.css":
/*!****************************!*\
  !*** ./src/dom/Player.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Player_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Player.css */ "./node_modules/css-loader/dist/cjs.js!./src/dom/Player.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Player_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Player_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Player_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Player_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/dom/Row.css":
/*!*************************!*\
  !*** ./src/dom/Row.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Row_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Row.css */ "./node_modules/css-loader/dist/cjs.js!./src/dom/Row.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Row_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Row_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Row_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Row_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/dom/Ship.css":
/*!**************************!*\
  !*** ./src/dom/Ship.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Ship_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Ship.css */ "./node_modules/css-loader/dist/cjs.js!./src/dom/Ship.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Ship_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Ship_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Ship_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Ship_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/dom/ShipSelector.css":
/*!**********************************!*\
  !*** ./src/dom/ShipSelector.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ShipSelector_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./ShipSelector.css */ "./node_modules/css-loader/dist/cjs.js!./src/dom/ShipSelector.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ShipSelector_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ShipSelector_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ShipSelector_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ShipSelector_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/dom/Square.css":
/*!****************************!*\
  !*** ./src/dom/Square.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Square_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Square.css */ "./node_modules/css-loader/dist/cjs.js!./src/dom/Square.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Square_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Square_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Square_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Square_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/dom/Toast.css":
/*!***************************!*\
  !*** ./src/dom/Toast.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Toast_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Toast.css */ "./node_modules/css-loader/dist/cjs.js!./src/dom/Toast.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Toast_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Toast_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Toast_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Toast_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/dom/playerNameComponent.css":
/*!*****************************************!*\
  !*** ./src/dom/playerNameComponent.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_playerNameComponent_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./playerNameComponent.css */ "./node_modules/css-loader/dist/cjs.js!./src/dom/playerNameComponent.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_playerNameComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_playerNameComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_playerNameComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_playerNameComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/dom/randomizer.css":
/*!********************************!*\
  !*** ./src/dom/randomizer.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_randomizer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./randomizer.css */ "./node_modules/css-loader/dist/cjs.js!./src/dom/randomizer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_randomizer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_randomizer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_randomizer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_randomizer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom/FleetStatus.js":
/*!********************************!*\
  !*** ./src/dom/FleetStatus.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FleetStatus)
/* harmony export */ });
/* harmony import */ var _FleetStatus_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FleetStatus.css */ "./src/dom/FleetStatus.css");
/* harmony import */ var _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bshowen/htmlelement */ "./node_modules/@bshowen/htmlelement/index.js");



class FleetStatus {
  // The Html  node where this class renders its elements
  #container = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({ type: "div", classList: ["fleet-container"] });

  // A list of all the ships.
  #shipList;

  constructor(displayProperties = {}) {
    if (displayProperties.screenSide == "left") {
      this.#container.classList.add("fleet-container-left-side");
    } else {
      this.#container.classList.add("fleet-container-right-side");
    }

    this.#shipList = [
      new MockShip("carrier", this.#container),
      new MockShip("battleship", this.#container),
      new MockShip("cruiser", this.#container),
      new MockShip("submarine", this.#container),
      new MockShip("destroyer", this.#container),
    ];
  }

  shipIsHit(shipName) {
    for (const ship of this.#shipList) {
      if (ship.getName() === shipName) {
        ship.takeHit();
      }
    }
  }

  render(parentNode) {
    this.#shipList.forEach((shipElement) => shipElement.render());
    parentNode.appendChild(this.#container);
  }
}

class MockShip {
  // The length of this ship;
  #length;

  // The name of this ship.
  #name;

  // The number of hits this ship has taken, if any.
  #hits = 0;

  // The Html node where this class inserts its elements
  #container = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({ type: "div", classList: ["mock-ship"] });

  #shipBodyElements = [];

  constructor(shipName, parentNode) {
    this.parentNode = parentNode;
    this.#name = shipName;
    this.setLength();
    this.#createShipBody();
  }

  // Create the individual squares that makeup a ship.
  #createShipBody() {
    for (let i = 0; i < this.#length; i++) {
      const shipBody = this.#shipBody();
      this.#shipBodyElements.push(shipBody);
      this.#container.appendChild(shipBody);
    }
  }

  /**
   * Create the individual squares that makeup this ship.
   * */
  #shipBody() {
    const body = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({
      type: "div",
      classList: ["ship-body", "status-ship"],
    });
    return body;
  }

  setLength() {
    switch (this.#name) {
      case "carrier":
        this.#length = 5;
        break;
      case "battleship":
        this.#length = 4;
        break;
      case "cruiser":
        this.#length = 3;
        break;
      case "submarine":
        this.#length = 3;
        break;
      case "destroyer":
        this.#length = 2;
        break;
    }
  }

  getName() {
    return this.#name;
  }

  takeHit() {
    this.#shipBodyElements[this.#hits].classList.add("damaged");
    ++this.#hits;
  }

  render() {
    this.parentNode.appendChild(this.#container);
  }
}


/***/ }),

/***/ "./src/dom/Game.js":
/*!*************************!*\
  !*** ./src/dom/Game.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/dom/Player.js");
/* harmony import */ var _GameMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameMenu */ "./src/dom/GameMenu.js");
/* harmony import */ var _game_modules_AI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game_modules/AI */ "./src/game_modules/AI.js");




class Game {
  // The iterator used to determine who's turn it is.
  #i = 0;

  #nextTurn;
  #toggleTurn;
  #donePlacingShips;

  // Store a reference to each player so we can interact with them.
  players = [];

  constructor(parentNode) {
    // This is the node where this class renders any DOM elements.
    this.parentNode = parentNode;

    /**
     * Because these methods are used as a callbacks, we need to set the context
     * of 'this' since these methods refer to methods defined in this class.
     */
    this.#donePlacingShips = this.#done_placing_ships.bind(this);
    this.#toggleTurn = this.#toggle_Turn.bind(this);
    this.#nextTurn = this.#next_Turn.bind(this);
  }

  /**
   * Return the next player up. If player one is the current player then this
   * method will return player two and vice versa.
   */
  #nextPlayer() {
    return this.players[++this.#i % 2];
  }

  // Return the player that is currently making the attack
  #currentPlayer() {
    return this.players[this.#i % 2];
  }

  /**
   * Return the player that just made the attack. This function is used only in
   * this.#toggle_Turn to display the users name in the toast message.
   */
  #attacker() {
    const i = this.#i + 1;
    return this.players[i % 2];
  }

  /**
   * This method is responsible for checking to see if the current player is
   * alive and calls the appropriate handler for each scenario.
   *
   * This method initially gets called by this.#donePlacingShips. Then subsequent
   * calls get called as a callback when a player takes their turn.
   *
   * hitOrMiss = Boolean passed in when Square.js calls this method.
   */
  #toggle_Turn(hitOrMiss) {
    const message = (() => {
      if (hitOrMiss == undefined) return;
      if (hitOrMiss) return `${this.#attacker().name}: Direct hit!`;
      return `${this.#attacker().name}: Miss!`;
    })();

    if (this.#currentPlayer().isAlive()) {
      _GameMenu__WEBPACK_IMPORTED_MODULE_1__["default"].toast(message);
      this.#nextTurn();
    } else {
      this.#endGame();
    }
  }

  /**
   * This function only ever gets called from this.#toggleTurn(). This function
   * is responsible for switching turns from player one to player two and vice
   * versa
   */
  #next_Turn() {
    const attacker = this.#currentPlayer();
    const opponent = this.#nextPlayer();

    attacker.disableClick();

    /**
     * When the user is playing against the computer, we never want to enable
     * clicking on the users board. This would allow the user to click on their
     * own board which is unwanted.
     *
     * attacker.takeTurn is defined only on the AI class.
     */
    if (attacker.takeTurn) {
      /**
       * Tell AI to take its turn. AI needs a callback, which is the opponents
       * "receiveAttack" method. AI will call this callback with its guess.
       */
      setTimeout(() => {
        attacker.takeTurn(opponent.receiveAttack);
      }, 800);
    } else {
      opponent.enableClick();
    }
  }

  /**
   * This function only ever gets called from this.#toggleTurn() and is only
   * called when a player dies. This function is responsible for ending the game
   */
  #endGame() {
    const winnerName = this.#nextPlayer().name;
    _GameMenu__WEBPACK_IMPORTED_MODULE_1__["default"].persistentToast(`Winner: ${winnerName}`);
    // Disable clicks on both players boards - the game is over.
    this.players.forEach((player) => {
      player.disableClick();
      player.showPositions();
    });
  }

  /**
   * This is the first method that is called in order to initiate game play.
   * This method is called from index.js
   */
  startGame(gameOptions = { singlePlayer: false }) {
    if (gameOptions.singlePlayer) {
      // Playing against AI.
      this.players = [
        new _Player__WEBPACK_IMPORTED_MODULE_0__["default"]("Player One", this.#toggleTurn, this.parentNode, {
          screenSide: "left",
        }),
        new _game_modules_AI__WEBPACK_IMPORTED_MODULE_2__["default"](this.#toggleTurn, this.parentNode, { screenSide: "right" }),
      ];
    } else {
      this.players = [
        new _Player__WEBPACK_IMPORTED_MODULE_0__["default"]("Player One", this.#toggleTurn, this.parentNode, {
          screenSide: "left",
        }),
        new _Player__WEBPACK_IMPORTED_MODULE_0__["default"]("Player Two", this.#toggleTurn, this.parentNode, {
          screenSide: "right",
        }),
      ];
    }
    /**
     * Initiate the process to let player one place their ships on their
     * board by calling the placeShips method. The callback passed into
     * #currentPlayer.placeShips will be called once the player has finished
     * placing their ships. The callback will then start the process of
     * letting player two place their ships.
     *
     */
    this.#currentPlayer().placeShips(this.#donePlacingShips);
  }

  /**
   * This method is passed into Player.js (in this.startGame()) via
   * the #currentPlayer().placeShips() method. From there it is passed into
   * ShipSelector.js via the ShipSelector constructor. ShipSelector will call
   * this method once a player has placed all of their ships on their board.
   *
   * The purpose of this method can be explained: Player one is placing their
   * ships on the board. Once they have placed their ships we need to allow
   * player two to place their ships. This method toggles from player one to
   * player two, to allow player two to place ships.
   */
  #done_placing_ships() {
    // Remove the player one UI components
    this.#currentPlayer().remove();

    /**
     * Switch from player one to player two, and render the player two UI
     * components
     */
    this.#nextPlayer().placeShips(
      /**
       * This callback gets called once player two is done placing their ships.
       * This means that both players have placed their ships and are ready to
       * battle.
       */
      () => {
        // First, remove player two's UI components.
        this.#currentPlayer().remove();
        // Then render BOTH player's boards.
        this.players.forEach((playerBoard) => playerBoard.render());
        // Switch from player two to player one.
        this.#nextPlayer();
        // Call the function that initiates game play.
        this.#toggleTurn();
      }
    );
  }
}


/***/ }),

/***/ "./src/dom/GameMenu.js":
/*!*****************************!*\
  !*** ./src/dom/GameMenu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameMenu)
/* harmony export */ });
/* harmony import */ var _GameMenu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameMenu.css */ "./src/dom/GameMenu.css");
/* harmony import */ var _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bshowen/htmlelement */ "./node_modules/@bshowen/htmlelement/index.js");
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toast */ "./src/dom/Toast.js");




class GameMenu {
  static getToastContainer() {
    // Find or create the container for the toast messages to populate.
    let toastContainer = document.querySelector("#toast-container");

    if (!toastContainer) {
      toastContainer = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({
        type: "div",
        id: "toast-container",
      });
      document.body.appendChild(toastContainer);
    }

    return toastContainer;
  }

  static toast(message, options) {
    if (message == undefined) return;

    const toastContainer = this.getToastContainer();

    // Create the toast message and render it in the toast container.
    new _Toast__WEBPACK_IMPORTED_MODULE_2__["default"](message, options).render(toastContainer);
  }

  static persistentToast(message) {
    let options = { persist: true };
    this.toast(message, options);
  }

  /**
   * root = The container where this component should insert itself.
   * singlePlayerGame = A callback to start a single player game
   * twoPlayerGame = A callback to start a two player game
   */
  static renderGameSelectionMenu(root, singlePlayerGame, twoPlayerGame) {
    const container = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({
      type: "div",
      id: "game-menu-container",
    });

    const menuElement = (() => {
      const container = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({ type: "div", id: "menu-container" });
      return container;
    })();

    function Button(buttonText, callback) {
      const container = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({
        type: "div",
        classList: ["button-container"],
      });
      const button = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({
        type: "button",
        innerText: buttonText,
      });
      button.addEventListener("click", callback, { once: true });
      container.appendChild(button);
      return container;
    }

    function removeBackground() {
      root.classList.remove("main-menu");
    }

    function playTwoPlayerGame() {
      removeBackground();
      container.remove();
      twoPlayerGame();
    }

    function playAgainstAI() {
      removeBackground();
      container.remove();
      singlePlayerGame();
    }

    menuElement.appendChild(new Button("Single player", playAgainstAI));
    menuElement.appendChild(new Button("Two player", playTwoPlayerGame));
    container.appendChild(menuElement);
    root.appendChild(container);
  }
}


/***/ }),

/***/ "./src/dom/Player.js":
/*!***************************!*\
  !*** ./src/dom/Player.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Player_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.css */ "./src/dom/Player.css");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Row */ "./src/dom/Row.js");
/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Square */ "./src/dom/Square.js");
/* harmony import */ var _game_modules_GameBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game_modules/GameBoard */ "./src/game_modules/GameBoard.js");
/* harmony import */ var _ShipSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShipSelector */ "./src/dom/ShipSelector.js");
/* harmony import */ var _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bshowen/htmlelement */ "./node_modules/@bshowen/htmlelement/index.js");
/* harmony import */ var _FleetStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FleetStatus */ "./src/dom/FleetStatus.js");
/* harmony import */ var _playerNameComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./playerNameComponent */ "./src/dom/playerNameComponent.js");
/* harmony import */ var _utilities_shipCoordinateGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/shipCoordinateGenerator */ "./src/utilities/shipCoordinateGenerator.js");










/**
 * This is a representation of the game board in the DOM. This is the class that
 * interacts with the GameBoard API, found in src/game_modules/GameBoard.js
 */
class Player {
  #gameBoard = new _game_modules_GameBoard__WEBPACK_IMPORTED_MODULE_3__["default"]();
  /**
   * boardSquares is populated with the squares that makeup the board in the
   * DOM. Reference to these squares is needed in order to interact with the
   * Square API.
   */
  #boardSquares = [];

  /**
   * boardRows is populated with rows of squares. This is currently used to
   * unmount and remove rows and squares from the dom when a re-render is needed
   */
  #boardRows = [];

  // This is the HTML node element where all DOM elements are rendered.
  #container = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_5__.HtmlElement({
    type: "div",
    classList: ["board-container"],
  });

  #boardGameContainer = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_5__.HtmlElement({ type: "div", classList: ["board"] });

  // parentNode = The container where this class inserts itself into the DOM.
  #parentNode;

  constructor(displayName, toggleTurn, parentNode, displayProperties = {}) {
    // displayName = A string which is displayed above the board.
    this.name = displayName;

    // toggleTurn = A callback passed in from Game.js. This callback is called
    // in this.receiveAttack()
    this.toggleTurn = toggleTurn;

    this.#parentNode = parentNode;

    this.#container.appendChild(
      (0,_playerNameComponent__WEBPACK_IMPORTED_MODULE_7__["default"])(displayName, displayProperties)
    );
    if (displayProperties.screenSide === "left") {
      this.screenSide = "left";
      this.#container.classList.add("board-container-left-side");
    } else {
      this.screenSide = "right";
      this.#container.classList.add("board-container-right-side");
    }

    /**
     * This method is passed into Square.js as a callback. So I need to set the
     * context of 'this' so that this method can reference methods defined in
     * this class.
     */
    this.placeShip = this.placeShip.bind(this);

    this.randomlyPlaceShips = this.randomlyPlaceShips.bind(this);

    this.receiveAttack = this.receiveAttack.bind(this);
  }

  showPositions() {
    this.#boardSquares.forEach((row) => {
      row.forEach((square) => square.toggleShipPosition());
    });
  }

  // coords = [int, int]
  receiveAttack(coords) {
    const [row, column] = coords;
    const [isHit, shipName, isSunk] = this.#gameBoard.receiveAttack(coords);
    if (isHit) {
      this.fleetStatus.shipIsHit(shipName);
      this.#boardSquares[row][column].fill(true);
    } else {
      this.#boardSquares[row][column].fill(false);
    }
    this.toggleTurn(isHit);
    return [isHit, shipName, isSunk];
  }

  /**
   * This method removes the board from the DOM.
   */
  #removeBoardFromDOM() {
    this.#boardRows.forEach((row) => row.remove());
    this.#boardSquares.forEach((row) => {
      row.forEach((square) => square.unmount());
    });
    this.#boardRows = [];
    this.#boardSquares = [];
  }

  // Disable clicking on this board.
  disableClick() {
    this.#boardGameContainer.classList.add("disabled");
    this.#boardSquares.forEach((row) => {
      row.forEach((square) => square.disable());
    });
  }

  // Enable clicking on this board.
  enableClick() {
    this.#boardGameContainer.classList.remove("disabled");
    this.#boardSquares.forEach((row) => {
      row.forEach((square) => square.enable());
    });
  }

  // Return true if this board has floating ships.
  // Return false if this board does not have floating ships.
  isAlive() {
    return this.#gameBoard.hasFloatingShips();
  }

  /**
   * coords = [[int, int], ... ,[int, int]]
   * Attempt to place a ship on these coordinates. Return true if the ship was
   * placed, return false if the ship was not/cannot be placed on these
   * coordinates.
   *
   * This method is passed into Square as a callback to be called when a ship
   * is trying to be placed on that Square.
   */
  placeShip(shipCoords, shipName) {
    if (this.#gameBoard.placeShip(shipCoords, shipName)) {
      this.renderBoard();
      return true;
    } else {
      return false;
    }
  }

  /**
   * This method creates and renders the UI element that holds the ships for the
   * player to drag and drop onto their board. This method also renders this
   * the game board UI component so that the player can drag their ships onto
   * their board.
   *
   * donePlacingShips = A callback passed in from Game.js when Game.js calls
   * this method.
   */
  placeShips(donePlacingShips) {
    /**
     * Create and render the container that holds all the ships so the user can
     * place them on the board.
     */
    this.shipSelector = new _ShipSelector__WEBPACK_IMPORTED_MODULE_4__["default"](
      donePlacingShips,
      this.randomlyPlaceShips
    );
    this.shipSelector.render();

    // Render the game board
    this.render();
  }

  // This method will place the ships randomly on the board.
  randomlyPlaceShips() {
    this.#gameBoard.reset();
    this.render();
    const coordGenerator = (0,_utilities_shipCoordinateGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])();
    const shipNames = [
      "carrier",
      "battleship",
      "cruiser",
      "submarine",
      "destroyer",
    ];
    shipNames.forEach((shipName) => {
      this.placeShip(coordGenerator.getShipCoords(shipName), shipName);
    });
  }

  // Create the DOM board and populate the boardSquares array.
  renderBoard() {
    // Remove the old board.
    this.#removeBoardFromDOM();

    // Iterate through the rows.
    for (let row = 0; row < 10; row++) {
      // Create a new Row upon each iteration.
      const rowElement = new _Row__WEBPACK_IMPORTED_MODULE_1__["default"]();

      // Iterate through the columns within the row.
      for (let column = 0; column < 10; column++) {
        /**
         * Here, create an instance of Square and pass in the coordinates, and
         * any any callbacks needed by the Square class.
         */
        const square = new _Square__WEBPACK_IMPORTED_MODULE_2__["default"](
          [row, column],
          this.receiveAttack.bind(this, [row, column]),
          this.placeShip,
          this.#gameBoard,
          this.shipSelector || null
        );

        //This will dynamically build a 2d array.
        if (column === 0) this.#boardSquares.push([]);

        // Store a reference of this Square.
        this.#boardSquares[row].push(square);

        // Add this Square element to the Row element.
        // rowElement.appendChild(square.container);
        square.render(rowElement);
      }

      // Store a reference of this Row
      this.#boardRows.push(rowElement);

      // Add this row to the DOM
      this.#boardGameContainer.appendChild(rowElement);
    }
    this.#container.appendChild(this.#boardGameContainer);
  }

  /**
   * This is the only method that is exposed that can render this board in the
   * DOM. This method then calls the renderBoard() method and then adds this
   * class container to the DOM.
   * */
  render() {
    this.renderBoard();
    if (this.fleetStatus) {
      this.fleetStatus.render(this.#container);
    }
    this.#parentNode.appendChild(this.#container);
  }

  // This method will completely remove this board from the DOM.
  remove() {
    /**
     * The only time this method gets called is after the player has placed
     * their ships and we want to remove this board from the DOM. In that case
     * we also need to remove shipSelector from this class. Now, when the board
     * is re-rendered in the DOM, we will pass in null, instead of ShipSelector,
     * to Square.js and Square.js renders differently because of this.
     *
     * If ShipSelector is passed into Square, then Square will show ship
     * positions. We don't want this. Showing ship positions is only useful when
     * the player is placing ships on the board. Otherwise we never want to
     * show ship positions on the board.
     */
    this.shipSelector = null;

    /**
     * When this method is called that means the players have placed their ships
     * and are about to battle. In this case we want to have an instance of
     * FleetStatus which will be passed into Square. Square will update
     * FleetStatus whenever a ship is hit.
     */
    this.fleetStatus = new _FleetStatus__WEBPACK_IMPORTED_MODULE_6__["default"]({ screenSide: this.screenSide });
    this.#container.remove();
  }
}


/***/ }),

/***/ "./src/dom/Row.js":
/*!************************!*\
  !*** ./src/dom/Row.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Row)
/* harmony export */ });
/* harmony import */ var _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bshowen/htmlelement */ "./node_modules/@bshowen/htmlelement/index.js");
/* harmony import */ var _Row_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Row.css */ "./src/dom/Row.css");



function Row() {
  const rowContainer = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
    type: "div",
    classList: ["row-container"],
  });
  return rowContainer;
}


/***/ }),

/***/ "./src/dom/Ship.js":
/*!*************************!*\
  !*** ./src/dom/Ship.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bshowen/htmlelement */ "./node_modules/@bshowen/htmlelement/index.js");
/* harmony import */ var _Ship_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship.css */ "./src/dom/Ship.css");


/**
 * This is a draggable ship. This class creates the ships that the user can
 * drag onto their battle field.
 */
class Ship {
  // The container which holds all DOM elements for this class.
  #container;

  // The container where this class inserts itself.
  #parentElement;

  // The length of the ship.
  #length;

  // Handle a double click on this element
  #doubleClickHandler;

  constructor(length, uniqueElementId, parentElement, shipName) {
    // The Html DOM element where this class inserts itself.
    this.#parentElement = parentElement;

    this.#container = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
      type: "div",
      id: `ship-${uniqueElementId}`,
      attributes: {
        draggable: "true",
        "data-orientation": "vertical",
        "data-ship-name": shipName,
      },
    });

    // The length of this ship.
    this.#length = length;

    this.#container.addEventListener("dragstart", this.#dragStart);

    /**
     * This method is used as a callback for a DOM event. I need to set the
     * context of 'this' so that this method can reference this class.
     */
    this.setDataSet = this.#setDataSet.bind(this);
    this.#doubleClickHandler = this.#double_click_handler.bind(this);

    this.#container.addEventListener("dblclick", this.#doubleClickHandler);

    this.#createShipBody();
  }

  #double_click_handler() {
    const currentOrientation = this.#container.dataset.orientation;
    if (currentOrientation === "vertical") {
      this.#container.dataset.orientation = "horizontal";
    } else {
      this.#container.dataset.orientation = "vertical";
    }
  }

  // Create the individual squares that makeup a ship.
  #createShipBody() {
    for (let i = 0; i < this.#length; i++) {
      this.#container.appendChild(this.#shipBody(i));
    }
  }

  // This mousedown handler for this square.
  #setDataSet(int) {
    this.#container.setAttribute("data-clicked-body", int);
    // this.#container.setAttribute("data-orientation", "vertical");
    this.#container.setAttribute("data-length", this.#length);
  }

  /**
   * Create the individual squares that makeup this ship.
   * location = int
   * The location is used to indicate which square the user picked up the ship
   * from. If the ship has 3 squares, the user can pick the ship up from
   * square 0, square 1, or square 2. This value is needed in order for other
   * functions to generate coordinates to place the ship.
   * */
  #shipBody(location) {
    const body = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
      type: "div",
      classList: ["ship-body"],
    });

    body.addEventListener("mousedown", this.setDataSet.bind(null, location));

    return body;
  }

  // Start the dragging process.
  #dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    e.dataTransfer.effectAllowed = "move";
  }

  // Display this ship in the DOM.
  render() {
    this.#parentElement.appendChild(this.#container);
  }

  // Remove this ship from the DOM
  remove() {
    this.#container.remove();
  }
}


/***/ }),

/***/ "./src/dom/ShipSelector.js":
/*!*********************************!*\
  !*** ./src/dom/ShipSelector.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShipSelector)
/* harmony export */ });
/* harmony import */ var _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bshowen/htmlelement */ "./node_modules/@bshowen/htmlelement/index.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ "./src/dom/Ship.js");
/* harmony import */ var _rootNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rootNode */ "./src/rootNode.js");
/* harmony import */ var _ShipSelector_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShipSelector.css */ "./src/dom/ShipSelector.css");
/* harmony import */ var _randomizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./randomizer */ "./src/dom/randomizer.js");
/* harmony import */ var _shipsContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shipsContainer */ "./src/dom/shipsContainer.js");







/**
 * This class creates the DOM element that holds all the ships for the user to
 * drag and drop onto their board.
 */
class ShipSelector {
  // The callback that is called when all ships have been placed.
  #donePlacingShips;

  // The Html DOM element where this class renders its DOM elements
  #container = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
    type: "div",
    classList: ["ship-selector-container"],
  });

  #shipsContainer = (0,_shipsContainer__WEBPACK_IMPORTED_MODULE_5__["default"])();

  // donePlacingShips = A callback passed in from Board.js
  constructor(donePlacingShips, randomlyPlaceShips) {
    this.#donePlacingShips = donePlacingShips;

    this.#initializeShips();

    this.clickHandler = this.clickHandler.bind(this, randomlyPlaceShips);

    this.allShipsPlaced = this.#allShipsPlaced.bind(this);
  }

  #initializeShips() {
    this.ships = [
      new _Ship__WEBPACK_IMPORTED_MODULE_1__["default"](5, "0", this.#shipsContainer, "carrier"),
      new _Ship__WEBPACK_IMPORTED_MODULE_1__["default"](4, "1", this.#shipsContainer, "battleship"),
      new _Ship__WEBPACK_IMPORTED_MODULE_1__["default"](3, "2", this.#shipsContainer, "cruiser"),
      new _Ship__WEBPACK_IMPORTED_MODULE_1__["default"](3, "3", this.#shipsContainer, "submarine"),
      new _Ship__WEBPACK_IMPORTED_MODULE_1__["default"](2, "4", this.#shipsContainer, "destroyer"),
    ];
    this.ships.forEach((ship) => ship.render());
  }

  /**
   *
   */
  removeShip(shipElementId) {
    const i = Number.parseInt(shipElementId.charAt(shipElementId.length - 1));
    this.ships[i].remove();
    this.ships[i] = null;
    if (this.ships.every((element) => element == null)) {
      this.#allShipsPlaced();
    }
  }

  #allShipsPlaced() {
    this.#container.remove();
    this.#donePlacingShips();
  }

  /**
   * randomlyPlaceShips = A callback passed in from Player.js
   */
  clickHandler(randomlyPlaceShips) {
    // Remove all the ships from the ship selector because they are going to
    // be placed randomly.
    this.#shipsContainer.remove();

    randomlyPlaceShips();
  }

  // Render this element in the DOM.
  render() {
    this.#container.appendChild(
      (0,_randomizer__WEBPACK_IMPORTED_MODULE_4__["default"])(this.clickHandler, this.allShipsPlaced)
    );
    this.#container.appendChild(this.#shipsContainer);
    _rootNode__WEBPACK_IMPORTED_MODULE_2__["default"].appendChild(this.#container);
  }
}


/***/ }),

/***/ "./src/dom/Square.js":
/*!***************************!*\
  !*** ./src/dom/Square.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Square)
/* harmony export */ });
/* harmony import */ var _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bshowen/htmlelement */ "./node_modules/@bshowen/htmlelement/index.js");
/* harmony import */ var _Square_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Square.css */ "./src/dom/Square.css");



/**
 * coordinates = [int,int]
 * receiveAttack = A callback passed in from Player.js
 * placeShip = A callback passed in from Player.js
 * gameBoard = An instance of GameBoard.js passed in from Player.js
 * shipSelector = An instance of ShipSelector.js passed in from Player.js
 */
class Square {
  // See this.#drop_handler for an explanation of this method.
  #dropHandler;

  // See this.#dragover_handler for the definition of this method.
  #dragoverHandler;

  constructor(coordinates, receiveAttack, placeShip, gameBoard, shipSelector) {
    //Define the callbacks used in this class.
    this.coords = coordinates;
    this.receiveAttack = receiveAttack;
    this.placeShip = placeShip;
    this.gameBoard = gameBoard;
    this.shipSelector = shipSelector;

    // The container for rendering this square in the DOM.
    this.container = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({ type: "div", classList: ["square"] });

    // Bind functions to this class
    this.#dropHandler = this.#drop_handler.bind(this);
    this.#dragoverHandler = this.#dragover_handler.bind(this);

    // Add event listeners to DOM elements in this class.
    this.container.addEventListener("dragover", this.#dragoverHandler);
    this.container.addEventListener("drop", this.#dropHandler);

    /**
     * If shipSelector is null that means that we are rendering the board
     * for game play and we DO NOT want to render ship positions on this board.
     *
     * If shipSelector is not null then we want to show the ship positions.
     * We want them so see their ships because this board is being rendered for
     * the player to drag and drop their ships onto it.
     */
    if (shipSelector != null) {
      this.toggleShipPosition();
    }
  }

  // Color in this square if there is a ship on it.
  toggleShipPosition() {
    if (this.gameBoard.isShipPosition(this.coords)) {
      this.container.classList.add("fill-ship-position");
    }
  }

  fill(boolean) {
    if (boolean) {
      this.container.classList.add("fill-ship-hit");
    } else {
      this.container.classList.add("fill-missed-strike");
    }
  }

  #dragover_handler(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }

  /**
   * This method gets called when a user drops a ship onto the board.
   */
  #drop_handler(e) {
    e.preventDefault();
    const shipElementId = e.dataTransfer.getData("text/plain");
    const ship = document.getElementById(shipElementId);
    const shipName = ship.dataset.shipName;
    const dropCoords = this.#generateCoords(ship);
    if (this.placeShip(dropCoords, shipName)) {
      this.shipSelector.removeShip(shipElementId);
    }
  }

  disable() {
    this.container.removeEventListener("click", this.receiveAttack);
    // this.#toggleShipPosition();
  }

  enable() {
    // The coordinates are valid ONLY if they haven't been selected before. This
    // ensures that you cannot select the same square multiple times.
    if (this.gameBoard.coordIsValid(this.coords)) {
      this.container.addEventListener("click", this.receiveAttack, {
        once: true,
      });
    }
    // this.container.classList.remove("fill-ship-position");
  }

  /**
   * This method generates coordinates based on where a ship was placed on the
   * board.
   *
   * A ship is constructed from multiple square div elements. A ship of length 3
   * will have 3 divs. The first div has a data attribute of 0, the following
   * div has a data attribute of 1, and so on. A user places a ship on the board
   * via drag-and-drop. The user can pick the ship up from div 0, div 1, or
   * div 2 (because the ship in this example has a length of 3). When the user
   * places the ship down, we need to know the coordinates for the entire ship.
   * We know where the ship was picked up from, the length, the orientation, and
   * the coordinates where the ship was dropped. Using these parameters we can
   * determine the coordinates for each individual square that makes up the skip.
   * These coordinates are generated and returned from this method.
   */
  #generateCoords(ship) {
    const shipDroppedFrom = ship.dataset.clickedBody;
    const orientation = ship.dataset.orientation;
    const length = ship.dataset.length;

    let xAxisRef = this.coords[0];
    let yAxisRef = this.coords[1];
    const shipCoords = [];

    for (let i = 0; i < length; i++) {
      let newCoords;
      if (i < shipDroppedFrom) {
        newCoords =
          orientation === "vertical"
            ? [xAxisRef - (shipDroppedFrom - i), yAxisRef]
            : [xAxisRef, yAxisRef - (shipDroppedFrom - i)];
      } else if (i == shipDroppedFrom) {
        newCoords = this.coords;
      } else if (i > shipDroppedFrom) {
        newCoords =
          orientation === "vertical"
            ? [++xAxisRef, yAxisRef]
            : [xAxisRef, ++yAxisRef];
      }

      shipCoords.push(newCoords);
    }
    return shipCoords;
  }

  unmount() {
    this.container.removeEventListener("click", this.receiveAttack);
    this.container.removeEventListener("dragover", this.#dragoverHandler);
    this.container.removeEventListener("drop", this.#dropHandler);
    this.container.remove();
  }

  render(parentNode) {
    parentNode.appendChild(this.container);
  }
}


/***/ }),

/***/ "./src/dom/Toast.js":
/*!**************************!*\
  !*** ./src/dom/Toast.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Toast)
/* harmony export */ });
/* harmony import */ var _Toast_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toast.css */ "./src/dom/Toast.css");
/* harmony import */ var _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bshowen/htmlelement */ "./node_modules/@bshowen/htmlelement/index.js");



/**
 * This is the message that gets displayed at the top of the screen whenever a
 * user makes a move.
 */
class Toast {
  #container = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({
    type: "div",
    classList: ["toast-message"],
  });

  #toastText;

  constructor(message, options = { persist: false }) {
    this.options = options;
    this.#toastText = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({ type: "p", innerText: message });
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


/***/ }),

/***/ "./src/dom/playerNameComponent.js":
/*!****************************************!*\
  !*** ./src/dom/playerNameComponent.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _playerNameComponent_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerNameComponent.css */ "./src/dom/playerNameComponent.css");
/* harmony import */ var _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bshowen/htmlelement */ "./node_modules/@bshowen/htmlelement/index.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(displayName, displayProperties) {
  const container = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({
    type: "div",
    classList: ["display-name"],
  });

  const displayText = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({ type: "p", innerText: displayName });

  container.appendChild(displayText);

  if (displayProperties.screenSide == "left") {
    container.classList.add("display-name-left-side");
  } else {
    container.classList.add("display-name-right-side");
  }

  return container;
}


/***/ }),

/***/ "./src/dom/randomizer.js":
/*!*******************************!*\
  !*** ./src/dom/randomizer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _randomizer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomizer.css */ "./src/dom/randomizer.css");
/* harmony import */ var _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bshowen/htmlelement */ "./node_modules/@bshowen/htmlelement/index.js");



/**
 * A function that allows a player to click a button in order to randomly place
 * their ships on the board.
 *
 * placeShips = A callback passed in from ShipSelector.js
 * allShipsPlaced = A callback passed in from ShipSelector.js
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(placeShips, allShipsPlaced) {
  const container = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({
    type: "div",
    id: "randomizer-container",
  });
  const placeShipsButton = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({
    type: "button",
    innerText: "Place randomly",
  });
  const readyButton = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({
    type: "button",
    innerText: "Ready",
  });

  function placeShipsButtonHandler() {
    placeShips();
    container.appendChild(readyButton);
    readyButton.addEventListener("click", allShipsPlaced, { once: true });
  }

  placeShipsButton.addEventListener("click", placeShipsButtonHandler);

  container.appendChild(placeShipsButton);

  return container;
}


/***/ }),

/***/ "./src/dom/shipsContainer.js":
/*!***********************************!*\
  !*** ./src/dom/shipsContainer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shipsContainer)
/* harmony export */ });
/* harmony import */ var _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bshowen/htmlelement */ "./node_modules/@bshowen/htmlelement/index.js");


/**
 * A function that returns a div for placing the ships. The ships placed in this
 * div are the ships that the user will drag onto their game board.
 */
function shipsContainer() {
  const _shipsContainer = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
    type: "div",
    classList: ["ships-container"],
  });

  const _titleInstructions = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
    type: "div",
    id: "instructions-container",
  });

  const _text = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
    type: "p",
    innerText: "Double click a ship to rotate it.",
  });

  _shipsContainer.appendChild(_titleInstructions);
  _titleInstructions.appendChild(_text);

  return _shipsContainer;
}


/***/ }),

/***/ "./src/game_modules/AI.js":
/*!********************************!*\
  !*** ./src/game_modules/AI.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AI)
/* harmony export */ });
/* harmony import */ var _dom_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/Player */ "./src/dom/Player.js");
/* harmony import */ var _utilities_shipCoordinateGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/shipCoordinateGenerator */ "./src/utilities/shipCoordinateGenerator.js");
/* harmony import */ var _utilities_CoordinateGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/CoordinateGenerator */ "./src/utilities/CoordinateGenerator.js");
/* harmony import */ var _utilities_SmartGuesser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/SmartGuesser */ "./src/utilities/SmartGuesser.js");





/**
 * The AI class extends the Player.js class and adds functionality to it.
 */
class AI extends _dom_Player__WEBPACK_IMPORTED_MODULE_0__["default"] {
  #shipCoordGenerator;

  #smartGuesser;

  #coordinateGenerator = new _utilities_CoordinateGenerator__WEBPACK_IMPORTED_MODULE_2__["default"]();

  /**
   * toggleTurn = A callback passed in from Game.js
   * parentNode = The container where this class inserts itself into the DOM.
   *
   *  receiveAttack = Callback passed in from Game.js. This method is defined in
   * the opponents class. The opponent will receive their attacks via this
   * method when battling against the AI.
   */
  constructor(toggleTurn, parentNode, displayProperties) {
    super("Computer", toggleTurn, parentNode, displayProperties);

    this.#shipCoordGenerator = (0,_utilities_shipCoordinateGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }

  // opponentCallback = A callback passed in from Game.js
  takeTurn(opponentCallback) {
    const coords = this.#createGuessCoordinates(); //[int, int]

    // [boolean, string (shipName), boolean]
    const [isHit, _, isSunk] = opponentCallback(coords);

    /**
     * If smartGuesser is instantiated then that means AI is focused on a a ship
     * and is currently attacking a specific ship. The smartGuesser needs to
     * receive feedback in order to make its next guess.
     */
    if (this.#smartGuesser) {
      this.#smartGuesser.receiveFeedback(isHit);
    }

    /**
     * If AI just hit a ship, and smartGuesser is not instantiated, then that
     * means that this is an initial direct hit. AI will now instantiate
     * smartGuesser in order to focus on this ship and take it out. All future
     * guesses will come from smartGuesser. Once the ship is taken out,
     * smartGuesser will be removed until the next direct hit.
     */
    if (isHit && this.#smartGuesser == null) {
      this.#smartGuesser = new _utilities_SmartGuesser__WEBPACK_IMPORTED_MODULE_3__["default"](true, coords);
    }

    /**
     * If the ship that AI is focused on was just sunk, then we can remove
     * smartGuesser so that AI will start making random guesses. When AI makes
     * a direct hit on another ship, then smartGuesser will be instantiated and
     * AI will focus on taking out that ship.
     */
    if (isSunk) {
      this.#smartGuesser = null;
    }
  }

  #createGuessCoordinates() {
    let guess;

    if (this.#smartGuesser) {
      guess = this.#getSmartGuess();
      this.#coordinateGenerator.add(guess);
    } else {
      guess = this.#coordinateGenerator.getCoords(); //[int, int]
    }

    return guess;
  }

  #getSmartGuess() {
    let guess;
    let isCoordValid;
    do {
      guess = this.#smartGuesser.getNextGuess(); //[int, int]
      isCoordValid = this.#validateCoord(guess);
      if (this.#coordinateGenerator.contains(guess) || !isCoordValid) {
        this.#smartGuesser.receiveFeedback(false);
      }
    } while (this.#coordinateGenerator.contains(guess) || !isCoordValid);
    return guess;
  }

  // coord = [int, int]
  #validateCoord(coord) {
    const [row, column] = coord;
    if (row > 9 || row < 0 || column > 9 || column < 0) {
      return false;
    }
    return true;
  }

  placeShips(callback) {
    const _ships = [
      "carrier",
      "battleship",
      "submarine",
      "cruiser",
      "destroyer",
    ];

    _ships.forEach((shipName) => {
      super.placeShip(
        this.#shipCoordGenerator.getShipCoords(shipName),
        shipName
      );
    });

    callback();
  }
}


/***/ }),

/***/ "./src/game_modules/GameBoard.js":
/*!***************************************!*\
  !*** ./src/game_modules/GameBoard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/game_modules/Ship.js");
/* harmony import */ var _utilities_coordinateList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/coordinateList */ "./src/utilities/coordinateList.js");



class GameBoard {
  /**
   * We need to store ship coordinates for a couple reasons.
   *  • Ship placement validation i.e. ships cannot overlap.
   *  • This acts as a cache for checking if a players move lands on a ship.
   */
  #shipCoordinates = (0,_utilities_coordinateList__WEBPACK_IMPORTED_MODULE_1__["default"])();

  /**
   * Store a reference to all the ships on this board.
   *  • So we can call their hit methods.
   *  • So we can determine if a game is over when all ships are sunk.
   *  • Ships are only pushed to this array. NEVER removed.
   */
  #floatingShips = [];
  /**
   * Store the number of sunken ships.
   *  • So we can tell when the game is over.
   */
  #sunkenShips = 0;

  /**
   * Store any hits that have been received.
   *  • So we can properly display the board in the DOM.
   */
  #allReceivedHits = (0,_utilities_coordinateList__WEBPACK_IMPORTED_MODULE_1__["default"])();

  // coords = [[int,int], ...[int,int]]
  // Return true if a coordinate is out of bounds, otherwise return false.
  #outOfBounds(coords) {
    return coords.some((coordinate) => {
      const [row, col] = coordinate;
      return row < 0 || row > 9 || col < 0 || col > 9;
    });
  }

  // Attempt to place a ship on the board.
  // Return true is successful otherwise return false.
  placeShip(coords, shipName) {
    if (
      coords.length === 0 || //Ensure coordinates are provided.
      //Ensure there isn't a ship already on this spot.
      this.#shipCoordinates.contains(coords) ||
      this.#outOfBounds(coords) || //Ensure coordinates are within bounds.
      this.shipsAreTouching(coords)
    ) {
      return false;
    }
    this.#shipCoordinates.add(coords);
    this.#floatingShips.push(new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](coords, shipName));
    return true;
  }

  /**
   * Return true if ships are touching.
   * Return false if ships aren't touching.
   * incomingShipCoords = [[int,int],[int,int],...[int,int]]
   */
  shipsAreTouching(incomingShipCoords) {
    return incomingShipCoords.some((coordinate) => {
      return this.#floatingShips.some((ship) => {
        return ship.getBufferCoords().contains([coordinate]);
      });
    });
  }

  // coords = [int,int]
  receiveAttack(coords) {
    if (!this.#allReceivedHits.contains([coords]))
      this.#allReceivedHits.add([coords]);

    if (this.#shipCoordinates.contains([coords])) {
      for (const ship of this.#floatingShips) {
        if (ship.hit(coords)) {
          if (ship.isSunk()) {
            this.#sunkenShips++;
          }
          return [true, ship.name, ship.isSunk()];
        }
      }
    }

    return [false, null, null];
  }

  // Return true if there are floating ships on the board.
  // Return false if all ships have been sunk.
  hasFloatingShips() {
    return !(this.#sunkenShips === this.#floatingShips.length);
  }

  // Return true if this coordinate has not been selected.
  // Return false if this coordinate has been previously selected.
  // coords = [int, int]
  coordIsValid(coords) {
    return !this.#allReceivedHits.contains([coords]);
  }

  //Return true if a ship is located on the passed in coordinates.
  // This method is used to show ships on the board.
  isShipPosition(coords) {
    return this.#shipCoordinates.contains([coords]);
  }

  reset() {
    this.#shipCoordinates = (0,_utilities_coordinateList__WEBPACK_IMPORTED_MODULE_1__["default"])();
    this.#floatingShips = [];
    this.#sunkenShips = 0;
    this.#allReceivedHits = (0,_utilities_coordinateList__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
}


/***/ }),

/***/ "./src/game_modules/Ship.js":
/*!**********************************!*\
  !*** ./src/game_modules/Ship.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _utilities_coordinateList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/coordinateList */ "./src/utilities/coordinateList.js");
/* harmony import */ var _utilities_getBufferCoords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/getBufferCoords */ "./src/utilities/getBufferCoords.js");



class Ship {
  #length;
  #hits = 0;
  #shipCoords;
  #name;

  constructor(coords, shipName) {
    this.#name = shipName;

    if (coords != null) {
      this.#length = coords.length;
      this.#shipCoords = (0,_utilities_coordinateList__WEBPACK_IMPORTED_MODULE_0__["default"])(coords);
      this.getBufferCoords = _utilities_getBufferCoords__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this, this.#shipCoords);
    } else {
      this.#length = undefined;
      this.hit = undefined;
      this.isSunk = undefined;
    }
  }

  get name() {
    return this.#name;
  }

  //Attempt a hit on this ship.
  hit(coords) {
    if (this.#hits != this.#length && this.#shipCoords.contains([coords])) {
      this.#shipCoords.remove(coords);
      this.#hits++;
      return true;
    }
    return false;
  }

  isSunk() {
    return this.#length === this.#hits;
  }
}


/***/ }),

/***/ "./src/rootNode.js":
/*!*************************!*\
  !*** ./src/rootNode.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bshowen/htmlelement */ "./node_modules/@bshowen/htmlelement/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {
  const root = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
    type: "div",
    id: "app",
    classList: ["main-menu"],
  });
  document.getElementsByTagName("body")[0].appendChild(root);
  return root;
})());


/***/ }),

/***/ "./src/utilities/CoordinateGenerator.js":
/*!**********************************************!*\
  !*** ./src/utilities/CoordinateGenerator.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CoordinateGenerator)
/* harmony export */ });
/* harmony import */ var _coordinateList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinateList.js */ "./src/utilities/coordinateList.js");


/**
 * This class is responsible for generating a unique coordinate. Thats all that
 * this class does. You will use the method getCoords() to get a random
 * [int,int] coordinate. This coordinate will be unique in that it will not have
 * been returned twice by the same instance of this class.
 *
 * Use the method add() if you generate a coordinate outside of this class and
 * want this class to know about that coordinate so that you will not receive
 * that coordinate back from this class.
 *
 * Use the method contains() in order to see if this class has already generated
 * that coordinate.
 */

class CoordinateGenerator {
  /**
   * Store a reference to coordinates already used.
   * We want to generate new, unique, coordinates every time.
   */
  #usedCoordinates = (0,_coordinateList_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

  /**
   * There are only 100 possible coordinates on the game board. This means there
   * are only 100 possible unique coordinates that this class is allowed to
   * generate. We need to keep track of how many times we have had to regenerate
   * a coordinate because it was already used. If we have had to regenerate
   * coordinates 100 times then that means one of two things -
   *
   * A) AI is making its final guess which is the last possible coordinate on
   * the board. Very unlikely, but still possible.
   * -- OR --
   * B) There is an unknown bug in this class.
   */
  #generationCount = 0;

  /**
   * Generate a set of [row,column] coordinates.
   * returns an array populated with two ints between 0,9 inclusive.
   * example return: [0,9] or [1,5] etc.
   */
  getCoords() {
    /**
     * If #generationCount is 100 then exit this method. There are no more
     * unique coordinate to be generated.
     */
    if (this.#generationCount >= 100) return;

    // create the initial coordinate.
    let coordinate = [this.#getRandomInt(), this.#getRandomInt()];

    /**
     * If both of these conditions are true, then the loop gets initiated in
     * order to make another guess at some random coordinates.
     */
    let coordinateAlreadyGuessed = this.#usedCoordinates.contains([coordinate]);
    const notOutOfCoordinates = this.#generationCount < 100;
    while (coordinateAlreadyGuessed && notOutOfCoordinates) {
      coordinate = [this.#getRandomInt(), this.#getRandomInt()];
      coordinateAlreadyGuessed = this.#usedCoordinates.contains([coordinate]);
    }

    ++this.#generationCount;

    this.#usedCoordinates.add([coordinate]);

    return coordinate;
  }

  // Return an int between 0 and 9 (inclusive of 0 and 9).
  #getRandomInt() {
    return Math.floor(Math.random() * 10);
  }

  // Reset the count to 0 and the coordinate list to a new list.
  reset() {
    this.#usedCoordinates = (0,_coordinateList_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    this.#generationCount = 0;
  }

  /**
   * Add a set of coordinates to the list of guessed coordinates. This is
   * useful when we know our next guess and we don't need to use the random
   * coordinate generator. Even though we know our next guess, we still need to
   * tell this class about that guess. This way this class doesn't guess that
   * same coordinate later on.
   * coords = [int, int]
   */
  add(coords) {
    if (this.#usedCoordinates.contains([coords])) return false;
    this.#usedCoordinates.add([coords]);
    ++this.#generationCount;
    return true;
  }

  contains(coords) {
    return this.#usedCoordinates.contains([coords]);
  }
}


/***/ }),

/***/ "./src/utilities/SmartGuesser.js":
/*!***************************************!*\
  !*** ./src/utilities/SmartGuesser.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SmartGuesser)
/* harmony export */ });
/* harmony import */ var _arrayEquality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayEquality */ "./src/utilities/arrayEquality.js");


class SmartGuesser {
  #initialDirectHit;
  #lastDirectHit;
  #previousGuess;
  #orientation;
  #guessDirection = 1;
  #determineOrientationGuesses;

  constructor(isHit, coords) {
    this.isHit = isHit;
    this.#initialDirectHit = coords;
    this.#determineOrientationGuesses = this.#determineOrientationClosure();
  }

  #determineOrientationClosure = () => {
    let pointer = 0;
    const [row, column] = this.#initialDirectHit;
    const guesses = [];
    guesses.push([row + 1, column]);
    guesses.push([row - 1, column]);
    guesses.push([row, column + 1]);
    guesses.push([row, column - 1]);

    return () => guesses[pointer++];
  };

  #guessDirectionChanged() {
    if (!(0,_arrayEquality__WEBPACK_IMPORTED_MODULE_0__["default"])(this.#previousGuess, this.#lastDirectHit)) {
      this.#guessDirection = -1;
      return true;
    } else {
      return false;
    }
  }

  #lastValidCoord() {
    if (this.#guessDirectionChanged()) {
      return this.#initialDirectHit;
    } else {
      return this.#lastDirectHit || this.#initialDirectHit;
    }
  }

  #determineOrientation() {
    if (!(this.#initialDirectHit && this.#lastDirectHit)) return;
    const [row1, column1] = this.#initialDirectHit;
    const [row2, column2] = this.#lastDirectHit;

    if (row1 > row2 || row1 < row2) {
      this.#orientation = "vertical";
    } else if (column1 > column2 || column1 < column2) {
      this.#orientation = "horizontal";
    }
  }

  // isHit = boolean
  receiveFeedback(isHit) {
    if (isHit) {
      this.#lastDirectHit = this.#previousGuess;
    }
  }

  getNextGuess() {
    /**
     * If the orientation of the ship hasn't been determine, try to determine it.
     * This will happen until the orientation of the ship is figured out.
     */
    if (!this.#orientation) this.#determineOrientation();

    let nextGuess;
    let row, column;
    switch (this.#orientation) {
      case "vertical":
        [row, column] = this.#lastValidCoord();
        nextGuess = [row + this.#guessDirection, column];
        break;
      case "horizontal":
        [row, column] = this.#lastValidCoord();
        nextGuess = [row, column + this.#guessDirection];
        break;
      default:
        // This gets triggered when we are still determining orientation
        nextGuess = this.#determineOrientationGuesses();
        break;
    }
    this.#previousGuess = nextGuess;
    return nextGuess;
  }
}


/***/ }),

/***/ "./src/utilities/arrayEquality.js":
/*!****************************************!*\
  !*** ./src/utilities/arrayEquality.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ arrayEquality)
/* harmony export */ });
function arrayEquality(arrayOne, arrayTwo) {
  if (arrayOne.length != arrayTwo.length) return false;

  return arrayOne.every((element, index) => {
    return arrayTwo[index] === element;
  });
}


/***/ }),

/***/ "./src/utilities/coordinateList.js":
/*!*****************************************!*\
  !*** ./src/utilities/coordinateList.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This is a utility method that keeps track of coordinates.
 *
 * Use the add() method to add coordinates to the list.
 * Use the contains() method to see if this list already contains the coordinate
 * Use the remove() method to remove a coordinate from the list.
 */

const coordinateList = function (coords) {
  const _coordinates = coords || [];
  let _length = _coordinates.length;

  // coords = [[int, int],[int,int], ..., [int, int]];
  function contains(coords) {
    return coords.some((incomingCoord) => {
      return _coordinates.some((existingCoord) => {
        return incomingCoord.join("") === existingCoord.join("");
      });
    });
  }

  // coords = [[int, int],[int,int], ..., [int, int]];
  function add(coords) {
    coords.forEach((coord) => {
      _coordinates.push(coord);
      ++_length;
    });
    return true;
  }

  // coords = [int,int]
  function remove(coords) {
    if (!contains([coords])) return false;
    return _coordinates.some((coordinate, index) => {
      if (coordinate.join("") === coords.join("")) {
        _coordinates.splice(index, 1);
        --_length;
        return true;
      }
    });
  }

  function all() {
    return _coordinates.slice();
  }

  function length() {
    return _length;
  }

  return { contains, add, remove, all, length };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coordinateList);


/***/ }),

/***/ "./src/utilities/getBufferCoords.js":
/*!******************************************!*\
  !*** ./src/utilities/getBufferCoords.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBufferCoords)
/* harmony export */ });
/* harmony import */ var _coordinateList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinateList */ "./src/utilities/coordinateList.js");


/**
 * This method returns an instance of coordinateList.js, populated with the
 * coordinates surrounding the ship. These are coordinates that other ships
 * cannot be placed on. In this game, ships cannot touch
 *
 * shipCoords = An instance of coordinateList.js, populated with a ships
 * coordinate positions
 *
 * This function returns an instance of coordinateList.js, populated with the
 * coordinates around a particular ship aka buffer coords.
 */
function getBufferCoords(shipCoords) {
  /**
   * iterate through each shipCoord.
   *   we are on currentCoord.
   *   push the west coord into buffer coords if its not in ship
   *   push the north coord into buffer coords if its not in ship
   *   push the east coord into buffer coords if its not in ship
   *   push the south coord into buffer coords if its not in ship
   * next iteration
   */

  const bufferCoords = (0,_coordinateList__WEBPACK_IMPORTED_MODULE_0__["default"])();

  shipCoords.all().forEach((coordinate) => {
    const [y, x] = coordinate; //y == int, x == int

    if (!shipCoords.contains([[y, x - 1]])) {
      bufferCoords.add([[y, x - 1]]);
    }

    if (!shipCoords.contains([[y, x + 1]])) {
      bufferCoords.add([[y, x + 1]]);
    }

    if (!shipCoords.contains([[y - 1, x]])) {
      bufferCoords.add([[y - 1, x]]);
    }

    if (!shipCoords.contains([[y + 1, x]])) {
      bufferCoords.add([[y + 1, x]]);
    }
  });

  return bufferCoords;
}


/***/ }),

/***/ "./src/utilities/shipCoordinateGenerator.js":
/*!**************************************************!*\
  !*** ./src/utilities/shipCoordinateGenerator.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shipCoordinateGenerator)
/* harmony export */ });
/* harmony import */ var _coordinateList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinateList */ "./src/utilities/coordinateList.js");
/* harmony import */ var _CoordinateGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoordinateGenerator */ "./src/utilities/CoordinateGenerator.js");
/* harmony import */ var _getBufferCoords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getBufferCoords */ "./src/utilities/getBufferCoords.js");




/**
 * This module generates the coordinates to randomly place ships on the
 * game board. The only public method on this module is called getShipCoords()
 * which accepts a shipName (string) and returns a set of coordinates to place
 * that ship on the game board. This class ensures that a ship will not overlap
 * on top of another ship and that a ship will not go out of the bounds of the
 * game board.
 */

function shipCoordinateGenerator() {
  const _shipCoordinates = (0,_coordinateList__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const _shipBufferCoordinates = (0,_coordinateList__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const coordGenerator = new _CoordinateGenerator__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const _getBufferCoords = _getBufferCoords__WEBPACK_IMPORTED_MODULE_2__["default"];

  const _ships = {
    carrier: { length: 5, orientation: _getRandomOrientation() },
    battleship: { length: 4, orientation: _getRandomOrientation() },
    cruiser: { length: 3, orientation: _getRandomOrientation() },
    submarine: { length: 3, orientation: _getRandomOrientation() },
    destroyer: { length: 2, orientation: _getRandomOrientation() },
  };

  function _getRandomOrientation() {
    return Math.floor(Math.random() * 2) ? "vertical" : "horizontal";
  }

  function getShipCoords(shipName) {
    // Ensure no leftover state from previous call.
    coordGenerator.reset();

    // Get the ship details
    const ship = _ships[shipName];

    /**
     * This will be the final coordinates for this particular ship.
     * shipCoords = [[int, int], [int, int],...[int, int]]
     */
    let shipCoords;

    do {
      shipCoords = _getUniqueCoordinate();

      // Extract the initial random coordinates into separate variables.
      let [row, column] = shipCoords[0];

      for (let i = 1; i < ship.length; i++) {
        if (ship.orientation === "vertical") {
          /**
           * Vertical ships will be placed starting from their initial coordinates
           * which are generated in the variable shipCoords. From those
           * coordinates, we will go north until we either reach the edge of the
           * board or until we have placed the entire ship.
           *
           * If we have reached the edge of the board then we start going south,
           * starting from the southern most coordinate.
           *
           * For example: Say shipCoords initializes to [[8,0]] and the length of
           *              the ship is 5.
           * After each loop iteration, shipCoords will look like this.
           * Before iteration 1: shipCoords = [[8,0]]
           * After iteration 1:  shipCoords = [[8,0], [9,0]] //Reached the edge
           * After iteration 2:  shipCoords = [[7,0], [8,0], [9,0]]
           * After iteration 3:  shipCoords = [[6,0], [7,0], [8,0], [9,0]]
           * After iteration 4:  shipCoords = [[5,0], [6,0], [7,0], [8,0], [9,0]]
           *
           * We are done because shipCoords has a length of 5 which is the length
           * of the ship we are placing. shipCoords will always be equal to the
           * length of the ship we are placing.
           */
          if (row + 1 < 10) {
            shipCoords.unshift([++row, column]);
          } else if (row - i >= 0) {
            shipCoords.push([row - i, column]);
          }
        } else if (ship.orientation === "horizontal") {
          /**
           * Horizontal ships will be placed starting from the initial coordinates
           * which are generated in the variable shipCoords. From those
           * coordinates, we will go east until we either reach the edge of the
           * board or until we have placed the entire ship.
           *
           * If we have reached the edge of the board then we start going west,
           * starting from the western most coordinate.
           *
           * For example: Say shipCoords initializes to [[0,8]] and the length of
           *              the ship is 5.
           * After each loop iteration, shipCoords will look like this.
           * Before iteration 1: shipCoords = [[0,8]]
           * After iteration 1:  shipCoords = [[0,8], [0,9]] //Reached the edge
           * After iteration 2:  shipCoords = [[0,7], [0,8], [0,9]]
           * After iteration 3:  shipCoords = [[0,6], [0,7], [0,8], [0,9]]
           * After iteration 4:  shipCoords = [[0,5], [0,6], [0,7], [0,8], [0,9]]
           *
           * We are done because shipCoords has a length of 5 which is the length
           * of the ship we are placing. shipCoords will always be equal to the
           * length of the ship we are placing.
           */
          if (column + 1 < 10) {
            shipCoords.push([row, ++column]);
          } else if (column - i >= 0) {
            shipCoords.unshift([row, column - i]);
          }
        }
      }
    } while (
      /**
       * If _shipCoordinates contains shipCoords then we need to start over
       * because there is already a ship at the spot where this ship is trying
       * to be placed.
       */
      _shipCoordinates.contains(shipCoords) ||
      /**
       * If _shipBufferCoordinates contains shipCoords then we need to start
       * over because that means this ship is trying to be placed on the board
       * in a spot where it would touch another ship.
       */
      _shipBufferCoordinates.contains(shipCoords)
    );

    // Store the coords so that future ships cant be placed here.
    _shipCoordinates.add(shipCoords);

    /**
     *  Store the buffer coordinates so that future ships cant be placed where
     * they're touching this ship.
     */
    const shipCoordinates = (0,_coordinateList__WEBPACK_IMPORTED_MODULE_0__["default"])(shipCoords);
    const bufferCoords = (0,_getBufferCoords__WEBPACK_IMPORTED_MODULE_2__["default"])(shipCoordinates).all();
    _shipBufferCoordinates.add(bufferCoords);

    return shipCoords;
  }

  /**
   * Get a unique pair of coordinates. The loop continues until the initial
   * coordinates are coordinates that have not been previously used.
   * Returns an array of two ints.
   * Returns: [[int, int]]
   */
  function _getUniqueCoordinate() {
    let uniqueCoordinate;
    do {
      /**
       * Get the initial coordinate. This is a random coordinate between
       * [0,0] and [9,9] (including [0,0] and [9,9]);
       */
      uniqueCoordinate = [coordGenerator.getCoords()]; // [[int, int]]
    } while (_shipCoordinates.contains(uniqueCoordinate));
    return uniqueCoordinate;
  }
  return { getShipCoords };
}


/***/ }),

/***/ "./src/images/Battleship_banner.jpeg":
/*!*******************************************!*\
  !*** ./src/images/Battleship_banner.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb5f96d9c63cbf9cb204.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _rootNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootNode */ "./src/rootNode.js");
/* harmony import */ var _dom_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/Game */ "./src/dom/Game.js");
/* harmony import */ var _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bshowen/htmlelement */ "./node_modules/@bshowen/htmlelement/index.js");
/* harmony import */ var _dom_GameMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/GameMenu */ "./src/dom/GameMenu.js");






const app = (() => {
  const appRoot = _rootNode__WEBPACK_IMPORTED_MODULE_1__["default"];
  // A container to hold the game boards.
  const boardsContainer = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_3__.HtmlElement({
    type: "div",
    id: "boards-container",
  });

  const game = new _dom_Game__WEBPACK_IMPORTED_MODULE_2__["default"](boardsContainer);

  const singlePlayerGame = () => {
    appRoot.appendChild(boardsContainer);
    game.startGame({ singlePlayer: true });
  };

  const twoPlayerGame = () => {
    appRoot.appendChild(boardsContainer);
    game.startGame();
  };

  const fleetStatusContainer = new _bshowen_htmlelement__WEBPACK_IMPORTED_MODULE_3__.HtmlElement({
    type: "div",
    id: "fleet-status-container",
  });

  // appRoot.appendChild(fleetStatusContainer);

  _dom_GameMenu__WEBPACK_IMPORTED_MODULE_4__["default"].renderGameSelectionMenu(appRoot, singlePlayerGame, twoPlayerGame);
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDTyw4QkFBOEI7QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDJEQUEyRCxrQkFBa0IsMkJBQTJCLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLHVCQUF1QixxQkFBcUIsY0FBYyxHQUFHLGlDQUFpQyx1QkFBdUIsb0JBQW9CLEdBQUcsOEJBQThCLCtCQUErQix1QkFBdUIsb0JBQW9CLEdBQUcsZUFBZSwyQkFBMkIsMkJBQTJCLDRCQUE0Qiw0QkFBNEIsa0JBQWtCLHdCQUF3QixhQUFhLEdBQUcsa0JBQWtCLGlCQUFpQixnQkFBZ0IsR0FBRyx3QkFBd0IsOEJBQThCLDBCQUEwQixHQUFHLE9BQU8sMEZBQTBGLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsMkNBQTJDLGtCQUFrQiwyQkFBMkIsc0JBQXNCLGdDQUFnQyw0QkFBNEIsdUJBQXVCLHFCQUFxQixjQUFjLEdBQUcsaUNBQWlDLHVCQUF1QixvQkFBb0IsR0FBRyw4QkFBOEIsK0JBQStCLHVCQUF1QixvQkFBb0IsR0FBRyxlQUFlLDJCQUEyQiwyQkFBMkIsNEJBQTRCLDRCQUE0QixrQkFBa0Isd0JBQXdCLGFBQWEsR0FBRyxrQkFBa0IsaUJBQWlCLGdCQUFnQixHQUFHLHdCQUF3Qiw4QkFBOEIsMEJBQTBCLEdBQUcsbUJBQW1CO0FBQzc1RDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw0REFBNEQsdUJBQXVCLFdBQVcscUJBQXFCLGdCQUFnQixzQkFBc0IsMkJBQTJCLGdDQUFnQyx3QkFBd0IsY0FBYyxHQUFHLDBCQUEwQixnQkFBZ0Isa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLEdBQUcscUJBQXFCLGtCQUFrQix3QkFBd0Isc0JBQXNCLGNBQWMsa0JBQWtCLEdBQUcsdUJBQXVCLGlCQUFpQixHQUFHLFdBQVcsOEJBQThCLGlCQUFpQixpQkFBaUIsdUJBQXVCLHNCQUFzQixxQkFBcUIsOEJBQThCLGdCQUFnQixHQUFHLGtCQUFrQixnQkFBZ0IsR0FBRyw4QkFBOEIscUJBQXFCLHdCQUF3QixHQUFHLE9BQU8sdUZBQXVGLFlBQVksV0FBVyxZQUFZLFlBQVksVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsNENBQTRDLHVCQUF1QixXQUFXLHFCQUFxQixnQkFBZ0Isc0JBQXNCLDJCQUEyQixnQ0FBZ0Msd0JBQXdCLGNBQWMsR0FBRywwQkFBMEIsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixHQUFHLHFCQUFxQixrQkFBa0Isd0JBQXdCLHNCQUFzQixjQUFjLGtCQUFrQixHQUFHLHVCQUF1QixpQkFBaUIsR0FBRyxXQUFXLDhCQUE4QixpQkFBaUIsaUJBQWlCLHVCQUF1QixzQkFBc0IscUJBQXFCLDhCQUE4QixnQkFBZ0IsR0FBRyxrQkFBa0IsZ0JBQWdCLEdBQUcsOEJBQThCLHFCQUFxQix3QkFBd0IsR0FBRyxtQkFBbUI7QUFDMXNFO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDREQUE0RCxrQkFBa0Isb0NBQW9DLGlCQUFpQixHQUFHLFlBQVksa0JBQWtCLDJCQUEyQiw0QkFBNEIsa0JBQWtCLHVCQUF1Qix3QkFBd0IsdUJBQXVCLEdBQUcsaUNBQWlDLHFDQUFxQyxHQUFHLDBDQUEwQyx1QkFBdUIscUJBQXFCLEdBQUcsZ0NBQWdDLHFDQUFxQyxHQUFHLHlDQUF5Qyx1QkFBdUIscUJBQXFCLEdBQUcsaUJBQWlCLG9CQUFvQixHQUFHLGlCQUFpQiwwQ0FBMEMsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsT0FBTyxxRkFBcUYsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLDRDQUE0QyxrQkFBa0Isb0NBQW9DLGlCQUFpQixHQUFHLFlBQVksa0JBQWtCLDJCQUEyQiw0QkFBNEIsa0JBQWtCLHVCQUF1Qix3QkFBd0IsdUJBQXVCLEdBQUcsaUNBQWlDLHFDQUFxQyxHQUFHLDBDQUEwQyx1QkFBdUIscUJBQXFCLEdBQUcsZ0NBQWdDLHFDQUFxQyxHQUFHLHlDQUF5Qyx1QkFBdUIscUJBQXFCLEdBQUcsaUJBQWlCLG9CQUFvQixHQUFHLGlCQUFpQiwwQ0FBMEMsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsbUJBQW1CO0FBQzE3RDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSwwREFBMEQsa0JBQWtCLHdCQUF3QixzQkFBc0IsaUJBQWlCLHVCQUF1Qiw4QkFBOEIsR0FBRyxPQUFPLGtGQUFrRixVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSwwQ0FBMEMsa0JBQWtCLHdCQUF3QixzQkFBc0IsaUJBQWlCLHVCQUF1Qiw4QkFBOEIsR0FBRyxtQkFBbUI7QUFDemlCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDREQUE0RCwyQkFBMkIsMkJBQTJCLDRCQUE0Qiw0QkFBNEIsa0JBQWtCLGFBQWEsOEJBQThCLEdBQUcsd0NBQXdDLDJCQUEyQixHQUFHLDBDQUEwQyx3QkFBd0IsR0FBRyxlQUFlLDhCQUE4Qiw4QkFBOEIsaUJBQWlCLGdCQUFnQixHQUFHLE9BQU8sbUZBQW1GLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsMkNBQTJDLDJCQUEyQiwyQkFBMkIsNEJBQTRCLDRCQUE0QixrQkFBa0IsYUFBYSw4QkFBOEIsR0FBRyx3Q0FBd0MsMkJBQTJCLEdBQUcsMENBQTBDLHdCQUF3QixHQUFHLGVBQWUsOEJBQThCLDhCQUE4QixpQkFBaUIsZ0JBQWdCLEdBQUcsbUJBQW1CO0FBQ2x1QztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxtRUFBbUUsa0JBQWtCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGNBQWMsaUJBQWlCLHVCQUF1QixHQUFHLHNCQUFzQixrQkFBa0Isd0JBQXdCLG9CQUFvQiw0QkFBNEIscUJBQXFCLHlCQUF5QixHQUFHLDRCQUE0Qix3QkFBd0IscUJBQXFCLEdBQUcsNkJBQTZCLGdCQUFnQixrQkFBa0IsNEJBQTRCLHdCQUF3Qix1QkFBdUIsR0FBRyxPQUFPLDJGQUEyRixVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsbURBQW1ELGtCQUFrQixrQkFBa0IsMkJBQTJCLHdCQUF3QixjQUFjLGlCQUFpQix1QkFBdUIsR0FBRyxzQkFBc0Isa0JBQWtCLHdCQUF3QixvQkFBb0IsNEJBQTRCLHFCQUFxQix5QkFBeUIsR0FBRyw0QkFBNEIsd0JBQXdCLHFCQUFxQixHQUFHLDZCQUE2QixnQkFBZ0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsdUJBQXVCLEdBQUcsbUJBQW1CO0FBQzNnRDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxtREFBbUQsOEJBQThCLHFCQUFxQixvQkFBb0IsR0FBRyx5QkFBeUIsOEJBQThCLEdBQUcseUJBQXlCLDhCQUE4QixHQUFHLG1CQUFtQiw4QkFBOEIsR0FBRyxPQUFPLHFGQUFxRixZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxtQ0FBbUMsOEJBQThCLHFCQUFxQixvQkFBb0IsR0FBRyx5QkFBeUIsOEJBQThCLEdBQUcseUJBQXlCLDhCQUE4QixHQUFHLG1CQUFtQiw4QkFBOEIsR0FBRyxtQkFBbUI7QUFDcnhCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLHlEQUF5RCxxQkFBcUIsdUJBQXVCLDhCQUE4Qiw4QkFBOEIscUJBQXFCLG9CQUFvQiw0QkFBNEIsd0JBQXdCLHFCQUFxQixpQkFBaUIsMENBQTBDLEdBQUcsWUFBWSxjQUFjLGVBQWUsaUJBQWlCLEdBQUcsT0FBTyxvRkFBb0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxjQUFjLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSx3Q0FBd0MscUJBQXFCLHVCQUF1Qiw4QkFBOEIsOEJBQThCLHFCQUFxQixvQkFBb0IsNEJBQTRCLHdCQUF3QixxQkFBcUIsaUJBQWlCLDBDQUEwQyxHQUFHLFlBQVksY0FBYyxlQUFlLGlCQUFpQixHQUFHLG1CQUFtQjtBQUMxaUM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esd0RBQXdELGtCQUFrQiw0QkFBNEIsb0JBQW9CLHdCQUF3QixHQUFHLHVCQUF1QixjQUFjLHNCQUFzQix3QkFBd0IsbUJBQW1CLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyxPQUFPLGtHQUFrRyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLHdDQUF3QyxrQkFBa0IsNEJBQTRCLG9CQUFvQix3QkFBd0IsR0FBRyx1QkFBdUIsY0FBYyxzQkFBc0Isd0JBQXdCLG1CQUFtQixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyw2QkFBNkIsdUJBQXVCLEdBQUcsbUJBQW1CO0FBQ3o5QjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxnRUFBZ0Usa0JBQWtCLGtCQUFrQiwyQkFBMkIsYUFBYSxHQUFHLE9BQU8seUZBQXlGLFVBQVUsVUFBVSxZQUFZLFdBQVcsK0NBQStDLGtCQUFrQixrQkFBa0IsMkJBQTJCLGFBQWEsR0FBRyxtQkFBbUI7QUFDM2E7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJJQUFrRDtBQUM5Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSw0Q0FBNEMsMkJBQTJCLEdBQUcsVUFBVSxlQUFlLGNBQWMsc0JBQXNCLEdBQUcsVUFBVSxrQkFBa0Isd0JBQXdCLHNCQUFzQiw0QkFBNEIsc0JBQXNCLGNBQWMsc0JBQXNCLDhCQUE4QixHQUFHLG1CQUFtQixzRUFBc0UsaUNBQWlDLGdDQUFnQywyQkFBMkIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsR0FBRyxzQkFBc0Isa0JBQWtCLHdCQUF3QixzQkFBc0IsNEJBQTRCLGtCQUFrQixHQUFHLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVywyQkFBMkIsMkJBQTJCLEdBQUcsVUFBVSxlQUFlLGNBQWMsc0JBQXNCLEdBQUcsVUFBVSxrQkFBa0Isd0JBQXdCLHNCQUFzQiw0QkFBNEIsc0JBQXNCLGNBQWMsc0JBQXNCLDhCQUE4QixHQUFHLG1CQUFtQiwrREFBK0QsaUNBQWlDLGdDQUFnQywyQkFBMkIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsR0FBRyxzQkFBc0Isa0JBQWtCLHdCQUF3QixzQkFBc0IsNEJBQTRCLGtCQUFrQixHQUFHLG1CQUFtQjtBQUN2MEQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBNEc7QUFDNUc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw0RkFBTzs7OztBQUlzRDtBQUM5RSxPQUFPLGlFQUFlLDRGQUFPLElBQUksbUdBQWMsR0FBRyxtR0FBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUF5RztBQUN6RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHlGQUFPOzs7O0FBSW1EO0FBQzNFLE9BQU8saUVBQWUseUZBQU8sSUFBSSxnR0FBYyxHQUFHLGdHQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXVHO0FBQ3ZHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJaUQ7QUFDekUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxvRkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLG9GQUFPLElBQUksMkZBQWMsR0FBRywyRkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFxRztBQUNyRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSStDO0FBQ3ZFLE9BQU8saUVBQWUscUZBQU8sSUFBSSw0RkFBYyxHQUFHLDRGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQTZHO0FBQzdHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNkZBQU87Ozs7QUFJdUQ7QUFDL0UsT0FBTyxpRUFBZSw2RkFBTyxJQUFJLG9HQUFjLEdBQUcsb0dBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBdUc7QUFDdkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUlpRDtBQUN6RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQW9IO0FBQ3BIO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsb0dBQU87Ozs7QUFJOEQ7QUFDdEYsT0FBTyxpRUFBZSxvR0FBTyxJQUFJLDJHQUFjLEdBQUcsMkdBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBMkc7QUFDM0c7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywyRkFBTzs7OztBQUlxRDtBQUM3RSxPQUFPLGlFQUFlLDJGQUFPLElBQUksa0dBQWMsR0FBRyxrR0FBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2YyQjtBQUN3Qjs7QUFFcEM7QUFDZjtBQUNBLG1CQUFtQiw2REFBVyxHQUFHLDZDQUE2Qzs7QUFFOUU7QUFDQTs7QUFFQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLDZEQUFXLEdBQUcsdUNBQXVDOztBQUV4RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2REFBVztBQUNoQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSDhCO0FBQ0k7QUFDRTs7QUFFckI7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHNCQUFzQjtBQUNyRCxnQkFBZ0Isc0JBQXNCO0FBQ3RDLEtBQUs7O0FBRUw7QUFDQSxNQUFNLHVEQUFjO0FBQ3BCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUF3QixZQUFZLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0NBQU07QUFDbEI7QUFDQSxTQUFTO0FBQ1QsWUFBWSx3REFBRSxzQ0FBc0MscUJBQXFCO0FBQ3pFO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsWUFBWSwrQ0FBTTtBQUNsQjtBQUNBLFNBQVM7QUFDVCxZQUFZLCtDQUFNO0FBQ2xCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlMd0I7QUFDMkI7QUFDdkI7O0FBRWI7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsNkRBQVc7QUFDdEM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFFBQVEsOENBQUs7QUFDYjs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw2REFBVztBQUNyQztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDRCQUE0Qiw2REFBVyxHQUFHLG1DQUFtQztBQUM3RTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw0QkFBNEIsNkRBQVc7QUFDdkM7QUFDQTtBQUNBLE9BQU87QUFDUCx5QkFBeUIsNkRBQVc7QUFDcEM7QUFDQTtBQUNBLE9BQU87QUFDUCxtREFBbUQsWUFBWTtBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGc0I7QUFDRTtBQUNNO0FBQ29CO0FBQ1I7QUFDUztBQUNYO0FBQ2dCO0FBQ21COztBQUUzRTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2YsbUJBQW1CLCtEQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLDZEQUFXO0FBQzlCO0FBQ0E7QUFDQSxHQUFHOztBQUVILDRCQUE0Qiw2REFBVyxHQUFHLG1DQUFtQzs7QUFFN0U7QUFDQTs7QUFFQSx5RUFBeUU7QUFDekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxNQUFNLGdFQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFEQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw4RUFBdUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLFVBQVU7QUFDaEM7QUFDQSw2QkFBNkIsNENBQUc7O0FBRWhDO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0NBQU07QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0RBQVcsR0FBRyw2QkFBNkI7QUFDdEU7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVRbUQ7QUFDaEM7O0FBRUo7QUFDZiwyQkFBMkIsNkRBQVc7QUFDdEM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RtRDtBQUMvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLDZEQUFXO0FBQ3JDO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZEQUFXO0FBQ2hDO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzR21EO0FBQ3pCO0FBQ1M7QUFDUDtBQUNVO0FBQ1E7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLDZEQUFXO0FBQzlCO0FBQ0E7QUFDQSxHQUFHOztBQUVILG9CQUFvQiwyREFBYzs7QUFFbEM7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsNkNBQUk7QUFDZCxVQUFVLDZDQUFJO0FBQ2QsVUFBVSw2Q0FBSTtBQUNkLFVBQVUsNkNBQUk7QUFDZCxVQUFVLDZDQUFJO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVEQUFVO0FBQ2hCO0FBQ0E7QUFDQSxJQUFJLDZEQUFvQjtBQUN4QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGbUQ7QUFDN0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsNkRBQVcsR0FBRyxvQ0FBb0M7O0FBRTNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSnFCO0FBQzhCOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2YsbUJBQW1CLDZEQUFXO0FBQzlCO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBLG1DQUFtQyxnQkFBZ0I7QUFDbkQ7QUFDQSwwQkFBMEIsNkRBQVcsR0FBRywrQkFBK0I7QUFDdkU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUEsc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q21DO0FBQ2dCOztBQUVuRCw2QkFBZSxvQ0FBVTtBQUN6Qix3QkFBd0IsNkRBQVc7QUFDbkM7QUFDQTtBQUNBLEdBQUc7O0FBRUgsMEJBQTBCLDZEQUFXLEdBQUcsbUNBQW1DOztBQUUzRTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQjBCO0FBQ3lCOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUFlLG9DQUFVO0FBQ3pCLHdCQUF3Qiw2REFBVztBQUNuQztBQUNBO0FBQ0EsR0FBRztBQUNILCtCQUErQiw2REFBVztBQUMxQztBQUNBO0FBQ0EsR0FBRztBQUNILDBCQUEwQiw2REFBVztBQUNyQztBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsWUFBWTtBQUN4RTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkNtRDs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLDhCQUE4Qiw2REFBVztBQUN6QztBQUNBO0FBQ0EsR0FBRzs7QUFFSCxpQ0FBaUMsNkRBQVc7QUFDNUM7QUFDQTtBQUNBLEdBQUc7O0FBRUgsb0JBQW9CLDZEQUFXO0FBQy9CO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCbUM7QUFDd0M7QUFDUjtBQUNkOztBQUVyRDtBQUNBO0FBQ0E7QUFDZSxpQkFBaUIsbURBQU07QUFDdEM7O0FBRUE7O0FBRUEsNkJBQTZCLHNFQUFtQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLDhFQUF1QjtBQUN0RDs7QUFFQTtBQUNBO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwrREFBWTtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEgwQjtBQUMrQjs7QUFFMUM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFFQUFjOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUVBQWM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw2Q0FBSTtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLHFFQUFjO0FBQzFDO0FBQ0E7QUFDQSw0QkFBNEIscUVBQWM7QUFDMUM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSHlEO0FBQ0U7O0FBRTVDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLHFFQUFjO0FBQ3ZDLDZCQUE2Qix1RUFBb0I7QUFDakQsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDbUQ7O0FBRW5ELGlFQUFlO0FBQ2YsbUJBQW1CLDZEQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQyxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWNEM7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsOERBQWM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsOERBQWM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkc0Qzs7QUFFN0I7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLDBEQUFhO0FBQ3RCO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxRmU7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRGdCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLDJEQUFjOztBQUVyQztBQUNBLCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQzhDO0FBQ1U7QUFDUjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLDJCQUEyQiwyREFBYztBQUN6QyxpQ0FBaUMsMkRBQWM7QUFDL0MsNkJBQTZCLDREQUFtQjtBQUNoRCwyQkFBMkIsd0RBQWU7O0FBRTFDO0FBQ0EsZUFBZSxpREFBaUQ7QUFDaEUsa0JBQWtCLGlEQUFpRDtBQUNuRSxlQUFlLGlEQUFpRDtBQUNoRSxpQkFBaUIsaURBQWlEO0FBQ2xFLGlCQUFpQixpREFBaUQ7QUFDbEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyREFBYztBQUMxQyx5QkFBeUIsNERBQWU7QUFDeEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RCxNQUFNO0FBQ047QUFDQTtBQUNBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1SkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2E7QUFDSjtBQUNxQjtBQUNiOztBQUV0QztBQUNBLGtCQUFrQixpREFBUTtBQUMxQjtBQUNBLDhCQUE4Qiw2REFBVztBQUN6QztBQUNBO0FBQ0EsR0FBRzs7QUFFSCxtQkFBbUIsaURBQUk7O0FBRXZCO0FBQ0E7QUFDQSxxQkFBcUIsb0JBQW9CO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQyw2REFBVztBQUM5QztBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQSxFQUFFLDZFQUFnQztBQUNsQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmF0dGxlIFNoaXAvLi9ub2RlX21vZHVsZXMvQGJzaG93ZW4vaHRtbGVsZW1lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQmF0dGxlIFNoaXAvLi9zcmMvZG9tL0ZsZWV0U3RhdHVzLmNzcyIsIndlYnBhY2s6Ly9CYXR0bGUgU2hpcC8uL3NyYy9kb20vR2FtZU1lbnUuY3NzIiwid2VicGFjazovL0JhdHRsZSBTaGlwLy4vc3JjL2RvbS9QbGF5ZXIuY3NzIiwid2VicGFjazovL0JhdHRsZSBTaGlwLy4vc3JjL2RvbS9Sb3cuY3NzIiwid2VicGFjazovL0JhdHRsZSBTaGlwLy4vc3JjL2RvbS9TaGlwLmNzcyIsIndlYnBhY2s6Ly9CYXR0bGUgU2hpcC8uL3NyYy9kb20vU2hpcFNlbGVjdG9yLmNzcyIsIndlYnBhY2s6Ly9CYXR0bGUgU2hpcC8uL3NyYy9kb20vU3F1YXJlLmNzcyIsIndlYnBhY2s6Ly9CYXR0bGUgU2hpcC8uL3NyYy9kb20vVG9hc3QuY3NzIiwid2VicGFjazovL0JhdHRsZSBTaGlwLy4vc3JjL2RvbS9wbGF5ZXJOYW1lQ29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly9CYXR0bGUgU2hpcC8uL3NyYy9kb20vcmFuZG9taXplci5jc3MiLCJ3ZWJwYWNrOi8vQmF0dGxlIFNoaXAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL0JhdHRsZSBTaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9CYXR0bGUgU2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlIFNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9CYXR0bGUgU2hpcC8uL3NyYy9kb20vRmxlZXRTdGF0dXMuY3NzP2JkMzMiLCJ3ZWJwYWNrOi8vQmF0dGxlIFNoaXAvLi9zcmMvZG9tL0dhbWVNZW51LmNzcz83NGMwIiwid2VicGFjazovL0JhdHRsZSBTaGlwLy4vc3JjL2RvbS9QbGF5ZXIuY3NzPzVlMGIiLCJ3ZWJwYWNrOi8vQmF0dGxlIFNoaXAvLi9zcmMvZG9tL1Jvdy5jc3M/YzA0ZCIsIndlYnBhY2s6Ly9CYXR0bGUgU2hpcC8uL3NyYy9kb20vU2hpcC5jc3M/NTlhNiIsIndlYnBhY2s6Ly9CYXR0bGUgU2hpcC8uL3NyYy9kb20vU2hpcFNlbGVjdG9yLmNzcz80MGEzIiwid2VicGFjazovL0JhdHRsZSBTaGlwLy4vc3JjL2RvbS9TcXVhcmUuY3NzPzg2ODYiLCJ3ZWJwYWNrOi8vQmF0dGxlIFNoaXAvLi9zcmMvZG9tL1RvYXN0LmNzcz9mNTY5Iiwid2VicGFjazovL0JhdHRsZSBTaGlwLy4vc3JjL2RvbS9wbGF5ZXJOYW1lQ29tcG9uZW50LmNzcz8yNGI0Iiwid2VicGFjazovL0JhdHRsZSBTaGlwLy4vc3JjL2RvbS9yYW5kb21pemVyLmNzcz9kMTJiIiwid2VicGFjazovL0JhdHRsZSBTaGlwLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL0JhdHRsZSBTaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0JhdHRsZSBTaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9CYXR0bGUgU2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9CYXR0bGUgU2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9CYXR0bGUgU2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL0JhdHRsZSBTaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vQmF0dGxlIFNoaXAvLi9zcmMvZG9tL0ZsZWV0U3RhdHVzLmpzIiwid2VicGFjazovL0JhdHRsZSBTaGlwLy4vc3JjL2RvbS9HYW1lLmpzIiwid2VicGFjazovL0JhdHRsZSBTaGlwLy4vc3JjL2RvbS9HYW1lTWVudS5qcyIsIndlYnBhY2s6Ly9CYXR0bGUgU2hpcC8uL3NyYy9kb20vUGxheWVyLmpzIiwid2VicGFjazovL0JhdHRsZSBTaGlwLy4vc3JjL2RvbS9Sb3cuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlIFNoaXAvLi9zcmMvZG9tL1NoaXAuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlIFNoaXAvLi9zcmMvZG9tL1NoaXBTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9CYXR0bGUgU2hpcC8uL3NyYy9kb20vU3F1YXJlLmpzIiwid2VicGFjazovL0JhdHRsZSBTaGlwLy4vc3JjL2RvbS9Ub2FzdC5qcyIsIndlYnBhY2s6Ly9CYXR0bGUgU2hpcC8uL3NyYy9kb20vcGxheWVyTmFtZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9CYXR0bGUgU2hpcC8uL3NyYy9kb20vcmFuZG9taXplci5qcyIsIndlYnBhY2s6Ly9CYXR0bGUgU2hpcC8uL3NyYy9kb20vc2hpcHNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlIFNoaXAvLi9zcmMvZ2FtZV9tb2R1bGVzL0FJLmpzIiwid2VicGFjazovL0JhdHRsZSBTaGlwLy4vc3JjL2dhbWVfbW9kdWxlcy9HYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlIFNoaXAvLi9zcmMvZ2FtZV9tb2R1bGVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlIFNoaXAvLi9zcmMvcm9vdE5vZGUuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlIFNoaXAvLi9zcmMvdXRpbGl0aWVzL0Nvb3JkaW5hdGVHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlIFNoaXAvLi9zcmMvdXRpbGl0aWVzL1NtYXJ0R3Vlc3Nlci5qcyIsIndlYnBhY2s6Ly9CYXR0bGUgU2hpcC8uL3NyYy91dGlsaXRpZXMvYXJyYXlFcXVhbGl0eS5qcyIsIndlYnBhY2s6Ly9CYXR0bGUgU2hpcC8uL3NyYy91dGlsaXRpZXMvY29vcmRpbmF0ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlIFNoaXAvLi9zcmMvdXRpbGl0aWVzL2dldEJ1ZmZlckNvb3Jkcy5qcyIsIndlYnBhY2s6Ly9CYXR0bGUgU2hpcC8uL3NyYy91dGlsaXRpZXMvc2hpcENvb3JkaW5hdGVHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlIFNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQmF0dGxlIFNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQmF0dGxlIFNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0JhdHRsZSBTaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vQmF0dGxlIFNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9CYXR0bGUgU2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0JhdHRsZSBTaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL0JhdHRsZSBTaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL0JhdHRsZSBTaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9CYXR0bGUgU2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFuIGFic3RyYWN0aW9uIGZvciBlYXNpbHkgY3JlYXRpbmcgSFRNTCBub2Rlcy5cbiAqIGRhdGEgPSB7XG4gKiAgdHlwZTogXCJkaXZcIixcbiAqICBjbGFzc0xpc3Q6IFtcImNsYXNzMVwiLCBcImNsYXNzMlwiXSxcbiAqICBhdHRyaWJ1dGVzOiB7XG4gKiAgICBoaWRkZW46IFwidHJ1ZVwiLFxuICogICAgZGlzcGxheTogXCJub25lXCJcbiAqICB9LFxuICogIGlkOiBcIlNvbWVJRFwiLFxuICogIGlubmVyVGV4dDogXCJTb21lIHRleHRcIlxuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gSHRtbEVsZW1lbnQoZGF0YSA9IHt9KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGRhdGEudHlwZSk7XG5cbiAgaWYgKGRhdGEuY2xhc3NMaXN0KSB7XG4gICAgZGF0YS5jbGFzc0xpc3QuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSk7XG4gIH1cblxuICBpZiAoZGF0YS5hdHRyaWJ1dGVzKSB7XG4gICAgZm9yIChjb25zdCBhdHRyaWJ1dGVOYW1lIGluIGRhdGEuYXR0cmlidXRlcykge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgZGF0YS5hdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0YS5pbm5lclRleHQpIHtcbiAgICBlbGVtZW50LmlubmVyVGV4dCA9IGRhdGEuaW5uZXJUZXh0LnRyaW0oKTtcbiAgfVxuXG4gIGlmIChkYXRhLmlkKSB7XG4gICAgZWxlbWVudC5pZCA9IGRhdGEuaWQ7XG4gIH1cblxuICBpZiAoZGF0YS5pbm5lckhUTUwpIHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGRhdGEuaW5uZXJIVE1MO1xuICB9XG5cbiAgaWYgKGRhdGEuY2hpbGRyZW5Ob2Rlcykge1xuICAgIGRhdGEuY2hpbGRyZW5Ob2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZsZWV0LWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDI1cHggMTBweDtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbi5mbGVldC1jb250YWluZXItcmlnaHQtc2lkZSB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxufVxcbi5mbGVldC1jb250YWluZXItbGVmdC1zaWRlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4ubW9jay1zaGlwe1xcbiAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcXG4gIG1heC13aWR0aDogbWluLWNvbnRlbnQ7XFxuICBtaW4taGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIG1heC1oZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDZweDtcXG59XFxuXFxuLnN0YXR1cy1zaGlwIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4ubW9jay1zaGlwIC5kYW1hZ2Vke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGNDc2RjtcXG4gIGJvcmRlci1jb2xvcjogI0VGNDc2RjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2RvbS9GbGVldFN0YXR1cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mbGVldC1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAyNXB4IDEwcHg7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uZmxlZXQtY29udGFpbmVyLXJpZ2h0LXNpZGUge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG4uZmxlZXQtY29udGFpbmVyLWxlZnQtc2lkZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLm1vY2stc2hpcHtcXG4gIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxuICBtYXgtd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgbWluLWhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBtYXgtaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiA2cHg7XFxufVxcblxcbi5zdGF0dXMtc2hpcCB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuLm1vY2stc2hpcCAuZGFtYWdlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRjQ3NkY7XFxuICBib3JkZXItY29sb3I6ICNFRjQ3NkY7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiN0b2FzdC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNnYW1lLW1lbnUtY29udGFpbmVyIHtcXG4gIGhlaWdodDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtZW51LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgZ2FwOiA1MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5idXR0b257XFxuICBib3JkZXI6IDFweCBzb2xpZCAjM0U3MDgwO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdFQzNEQTtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNGRkY7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyOmFjdGl2ZSB7XFxuICBwYWRkaW5nLXRvcDogOHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDJweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2RvbS9HYW1lTWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLGdCQUFnQjtFQUNoQixXQUFXOztFQUVYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiN0b2FzdC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNnYW1lLW1lbnUtY29udGFpbmVyIHtcXG4gIGhlaWdodDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtZW51LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgZ2FwOiA1MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5idXR0b257XFxuICBib3JkZXI6IDFweCBzb2xpZCAjM0U3MDgwO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdFQzNEQTtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNGRkY7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyOmFjdGl2ZSB7XFxuICBwYWRkaW5nLXRvcDogOHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDJweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmJvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCA1NTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lci1yaWdodC1zaWRlIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTUwcHggMWZyO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyLXJpZ2h0LXNpZGUgPiAuYm9hcmQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6ICAyIC8gMztcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lci1sZWZ0LXNpZGUge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNTUwcHg7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXItbGVmdC1zaWRlID4gLmJvYXJkIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAgMiAvIDM7XFxufVxcblxcbi5ib2FyZDpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMCk7XFxufVxcblxcbi5kaXNhYmxlZDpob3ZlcntcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9kb20vUGxheWVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYm9hcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDU1MHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyLXJpZ2h0LXNpZGUge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1NTBweCAxZnI7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXItcmlnaHQtc2lkZSA+IC5ib2FyZCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogIDIgLyAzO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyLWxlZnQtc2lkZSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1NTBweDtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lci1sZWZ0LXNpZGUgPiAuYm9hcmQge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6ICAyIC8gMztcXG59XFxuXFxuLmJvYXJkOmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4uZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEwKTtcXG59XFxuXFxuLmRpc2FibGVkOmhvdmVye1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnJvdy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIC8qIGdhcDogNnB4OyAqL1xcbiAgLyogcGFkZGluZzogM3B4OyAqL1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9kb20vUm93LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb3ctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICAvKiBnYXA6IDZweDsgKi9cXG4gIC8qIHBhZGRpbmc6IDNweDsgKi9cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJkaXZbaWQqPVxcXCJzaGlwXFxcIl17XFxuICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xcbiAgbWF4LXdpZHRoOiBtaW4tY29udGVudDtcXG4gIG1pbi1oZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgbWF4LWhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUNBRUIxO1xcbn1cXG5cXG5kaXZbZGF0YS1vcmllbnRhdGlvbio9XFxcInZlcnRpY2FsXFxcIl17XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5kaXZbZGF0YS1vcmllbnRhdGlvbio9XFxcImhvcml6b250YWxcXFwiXXtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5zaGlwLWJvZHl7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMUI5QUFBO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFCOUFBQTtcXG4gIGhlaWdodDogNDhweDtcXG4gIHdpZHRoOiA0OHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZG9tL1NoaXAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixRQUFRO0VBQ1IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpdltpZCo9XFxcInNoaXBcXFwiXXtcXG4gIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxuICBtYXgtd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgbWluLWhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBtYXgtaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNBQ0FFQjE7XFxufVxcblxcbmRpdltkYXRhLW9yaWVudGF0aW9uKj1cXFwidmVydGljYWxcXFwiXXtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmRpdltkYXRhLW9yaWVudGF0aW9uKj1cXFwiaG9yaXpvbnRhbFxcXCJde1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnNoaXAtYm9keXtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxQjlBQUE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUI5QUFBO1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgd2lkdGg6IDQ4cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zaGlwLXNlbGVjdG9yLWNvbnRhaW5lcntcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxufVxcblxcbi5zaGlwcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogMzByZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnNoaXBzLWNvbnRhaW5lciA+IGRpdiB7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgbWFyZ2luOiA1cHggMTVweDtcXG59XFxuXFxuI2luc3RydWN0aW9ucy1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZG9tL1NoaXBTZWxlY3Rvci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zaGlwLXNlbGVjdG9yLWNvbnRhaW5lcntcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxufVxcblxcbi5zaGlwcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogMzByZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnNoaXBzLWNvbnRhaW5lciA+IGRpdiB7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgbWFyZ2luOiA1cHggMTVweDtcXG59XFxuXFxuI2luc3RydWN0aW9ucy1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3F1YXJlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQ0FFQjE7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgbWluLXdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uZmlsbC1zaGlwLXBvc2l0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxQjlBQUE7XFxufVxcblxcbi5maWxsLW1pc3NlZC1zdHJpa2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVDNUQ2NztcXG59XFxuXFxuLmZpbGwtc2hpcC1oaXR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUY0NzZGO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZG9tL1NxdWFyZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNxdWFyZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjQUNBRUIxO1xcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIG1pbi13aWR0aDogNTBweDtcXG59XFxuXFxuLmZpbGwtc2hpcC1wb3NpdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUI5QUFBO1xcbn1cXG5cXG4uZmlsbC1taXNzZWQtc3RyaWtlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1QzVENjc7XFxufVxcblxcbi5maWxsLXNoaXAtaGl0e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGNDc2RjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRvYXN0LW1lc3NhZ2V7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0I4REFGRjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDQ0U1RkY7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIFxcbiAgcGFkZGluZzogNXB4O1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnMsIHBhZGRpbmcgMC4ycztcXG59XFxuXFxuLnJlbW92ZXtcXG4gIGhlaWdodDogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9kb20vVG9hc3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGdCQUFnQjs7RUFFaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLFlBQVk7RUFDWixZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRvYXN0LW1lc3NhZ2V7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0I4REFGRjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDQ0U1RkY7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIFxcbiAgcGFkZGluZzogNXB4O1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnMsIHBhZGRpbmcgMC4ycztcXG59XFxuXFxuLnJlbW92ZXtcXG4gIGhlaWdodDogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5kaXNwbGF5LW5hbWV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uZGlzcGxheS1uYW1lID4gcCB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBjb2xvcjogI0Q4QTYzMTtcXG59XFxuXFxuLmRpc3BsYXktbmFtZS1sZWZ0LXNpZGV7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxufVxcblxcbi5kaXNwbGF5LW5hbWUtcmlnaHQtc2lkZXtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2RvbS9wbGF5ZXJOYW1lQ29tcG9uZW50LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmRpc3BsYXktbmFtZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5kaXNwbGF5LW5hbWUgPiBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGNvbG9yOiAjRDhBNjMxO1xcbn1cXG5cXG4uZGlzcGxheS1uYW1lLWxlZnQtc2lkZXtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuLmRpc3BsYXktbmFtZS1yaWdodC1zaWRle1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjcmFuZG9taXplci1jb250YWluZXJ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6MTVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2RvbS9yYW5kb21pemVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjcmFuZG9taXplci1jb250YWluZXJ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6MTVweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9CYXR0bGVzaGlwX2Jhbm5lci5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jYXBwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcbn1cXG5cXG4jYXBwLm1haW4tbWVudXtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNib2FyZHMtY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlEQUF3RDtFQUN4RCw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jYXBwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcbn1cXG5cXG4jYXBwLm1haW4tbWVudXtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvQmF0dGxlc2hpcF9iYW5uZXIuanBlZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jYm9hcmRzLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9GbGVldFN0YXR1cy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0ZsZWV0U3RhdHVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HYW1lTWVudS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dhbWVNZW51LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9QbGF5ZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9QbGF5ZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Jvdy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Jvdy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2hpcC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NoaXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NoaXBTZWxlY3Rvci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NoaXBTZWxlY3Rvci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3F1YXJlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3F1YXJlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Ub2FzdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1RvYXN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wbGF5ZXJOYW1lQ29tcG9uZW50LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGxheWVyTmFtZUNvbXBvbmVudC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmFuZG9taXplci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JhbmRvbWl6ZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vRmxlZXRTdGF0dXMuY3NzXCI7XG5pbXBvcnQgeyBIdG1sRWxlbWVudCB9IGZyb20gXCJAYnNob3dlbi9odG1sZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbGVldFN0YXR1cyB7XG4gIC8vIFRoZSBIdG1sICBub2RlIHdoZXJlIHRoaXMgY2xhc3MgcmVuZGVycyBpdHMgZWxlbWVudHNcbiAgI2NvbnRhaW5lciA9IG5ldyBIdG1sRWxlbWVudCh7IHR5cGU6IFwiZGl2XCIsIGNsYXNzTGlzdDogW1wiZmxlZXQtY29udGFpbmVyXCJdIH0pO1xuXG4gIC8vIEEgbGlzdCBvZiBhbGwgdGhlIHNoaXBzLlxuICAjc2hpcExpc3Q7XG5cbiAgY29uc3RydWN0b3IoZGlzcGxheVByb3BlcnRpZXMgPSB7fSkge1xuICAgIGlmIChkaXNwbGF5UHJvcGVydGllcy5zY3JlZW5TaWRlID09IFwibGVmdFwiKSB7XG4gICAgICB0aGlzLiNjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZsZWV0LWNvbnRhaW5lci1sZWZ0LXNpZGVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmxlZXQtY29udGFpbmVyLXJpZ2h0LXNpZGVcIik7XG4gICAgfVxuXG4gICAgdGhpcy4jc2hpcExpc3QgPSBbXG4gICAgICBuZXcgTW9ja1NoaXAoXCJjYXJyaWVyXCIsIHRoaXMuI2NvbnRhaW5lciksXG4gICAgICBuZXcgTW9ja1NoaXAoXCJiYXR0bGVzaGlwXCIsIHRoaXMuI2NvbnRhaW5lciksXG4gICAgICBuZXcgTW9ja1NoaXAoXCJjcnVpc2VyXCIsIHRoaXMuI2NvbnRhaW5lciksXG4gICAgICBuZXcgTW9ja1NoaXAoXCJzdWJtYXJpbmVcIiwgdGhpcy4jY29udGFpbmVyKSxcbiAgICAgIG5ldyBNb2NrU2hpcChcImRlc3Ryb3llclwiLCB0aGlzLiNjb250YWluZXIpLFxuICAgIF07XG4gIH1cblxuICBzaGlwSXNIaXQoc2hpcE5hbWUpIHtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2YgdGhpcy4jc2hpcExpc3QpIHtcbiAgICAgIGlmIChzaGlwLmdldE5hbWUoKSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgc2hpcC50YWtlSGl0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKHBhcmVudE5vZGUpIHtcbiAgICB0aGlzLiNzaGlwTGlzdC5mb3JFYWNoKChzaGlwRWxlbWVudCkgPT4gc2hpcEVsZW1lbnQucmVuZGVyKCkpO1xuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcy4jY29udGFpbmVyKTtcbiAgfVxufVxuXG5jbGFzcyBNb2NrU2hpcCB7XG4gIC8vIFRoZSBsZW5ndGggb2YgdGhpcyBzaGlwO1xuICAjbGVuZ3RoO1xuXG4gIC8vIFRoZSBuYW1lIG9mIHRoaXMgc2hpcC5cbiAgI25hbWU7XG5cbiAgLy8gVGhlIG51bWJlciBvZiBoaXRzIHRoaXMgc2hpcCBoYXMgdGFrZW4sIGlmIGFueS5cbiAgI2hpdHMgPSAwO1xuXG4gIC8vIFRoZSBIdG1sIG5vZGUgd2hlcmUgdGhpcyBjbGFzcyBpbnNlcnRzIGl0cyBlbGVtZW50c1xuICAjY29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHsgdHlwZTogXCJkaXZcIiwgY2xhc3NMaXN0OiBbXCJtb2NrLXNoaXBcIl0gfSk7XG5cbiAgI3NoaXBCb2R5RWxlbWVudHMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihzaGlwTmFtZSwgcGFyZW50Tm9kZSkge1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gICAgdGhpcy4jbmFtZSA9IHNoaXBOYW1lO1xuICAgIHRoaXMuc2V0TGVuZ3RoKCk7XG4gICAgdGhpcy4jY3JlYXRlU2hpcEJvZHkoKTtcbiAgfVxuXG4gIC8vIENyZWF0ZSB0aGUgaW5kaXZpZHVhbCBzcXVhcmVzIHRoYXQgbWFrZXVwIGEgc2hpcC5cbiAgI2NyZWF0ZVNoaXBCb2R5KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHNoaXBCb2R5ID0gdGhpcy4jc2hpcEJvZHkoKTtcbiAgICAgIHRoaXMuI3NoaXBCb2R5RWxlbWVudHMucHVzaChzaGlwQm9keSk7XG4gICAgICB0aGlzLiNjb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcEJvZHkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGluZGl2aWR1YWwgc3F1YXJlcyB0aGF0IG1ha2V1cCB0aGlzIHNoaXAuXG4gICAqICovXG4gICNzaGlwQm9keSgpIHtcbiAgICBjb25zdCBib2R5ID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICBjbGFzc0xpc3Q6IFtcInNoaXAtYm9keVwiLCBcInN0YXR1cy1zaGlwXCJdLFxuICAgIH0pO1xuICAgIHJldHVybiBib2R5O1xuICB9XG5cbiAgc2V0TGVuZ3RoKCkge1xuICAgIHN3aXRjaCAodGhpcy4jbmFtZSkge1xuICAgICAgY2FzZSBcImNhcnJpZXJcIjpcbiAgICAgICAgdGhpcy4jbGVuZ3RoID0gNTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYmF0dGxlc2hpcFwiOlxuICAgICAgICB0aGlzLiNsZW5ndGggPSA0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJjcnVpc2VyXCI6XG4gICAgICAgIHRoaXMuI2xlbmd0aCA9IDM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN1Ym1hcmluZVwiOlxuICAgICAgICB0aGlzLiNsZW5ndGggPSAzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkZXN0cm95ZXJcIjpcbiAgICAgICAgdGhpcy4jbGVuZ3RoID0gMjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jbmFtZTtcbiAgfVxuXG4gIHRha2VIaXQoKSB7XG4gICAgdGhpcy4jc2hpcEJvZHlFbGVtZW50c1t0aGlzLiNoaXRzXS5jbGFzc0xpc3QuYWRkKFwiZGFtYWdlZFwiKTtcbiAgICArK3RoaXMuI2hpdHM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMuI2NvbnRhaW5lcik7XG4gIH1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgR2FtZU1lbnUgZnJvbSBcIi4vR2FtZU1lbnVcIjtcbmltcG9ydCBBSSBmcm9tIFwiLi4vZ2FtZV9tb2R1bGVzL0FJXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAvLyBUaGUgaXRlcmF0b3IgdXNlZCB0byBkZXRlcm1pbmUgd2hvJ3MgdHVybiBpdCBpcy5cbiAgI2kgPSAwO1xuXG4gICNuZXh0VHVybjtcbiAgI3RvZ2dsZVR1cm47XG4gICNkb25lUGxhY2luZ1NoaXBzO1xuXG4gIC8vIFN0b3JlIGEgcmVmZXJlbmNlIHRvIGVhY2ggcGxheWVyIHNvIHdlIGNhbiBpbnRlcmFjdCB3aXRoIHRoZW0uXG4gIHBsYXllcnMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihwYXJlbnROb2RlKSB7XG4gICAgLy8gVGhpcyBpcyB0aGUgbm9kZSB3aGVyZSB0aGlzIGNsYXNzIHJlbmRlcnMgYW55IERPTSBlbGVtZW50cy5cbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuXG4gICAgLyoqXG4gICAgICogQmVjYXVzZSB0aGVzZSBtZXRob2RzIGFyZSB1c2VkIGFzIGEgY2FsbGJhY2tzLCB3ZSBuZWVkIHRvIHNldCB0aGUgY29udGV4dFxuICAgICAqIG9mICd0aGlzJyBzaW5jZSB0aGVzZSBtZXRob2RzIHJlZmVyIHRvIG1ldGhvZHMgZGVmaW5lZCBpbiB0aGlzIGNsYXNzLlxuICAgICAqL1xuICAgIHRoaXMuI2RvbmVQbGFjaW5nU2hpcHMgPSB0aGlzLiNkb25lX3BsYWNpbmdfc2hpcHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLiN0b2dnbGVUdXJuID0gdGhpcy4jdG9nZ2xlX1R1cm4uYmluZCh0aGlzKTtcbiAgICB0aGlzLiNuZXh0VHVybiA9IHRoaXMuI25leHRfVHVybi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbmV4dCBwbGF5ZXIgdXAuIElmIHBsYXllciBvbmUgaXMgdGhlIGN1cnJlbnQgcGxheWVyIHRoZW4gdGhpc1xuICAgKiBtZXRob2Qgd2lsbCByZXR1cm4gcGxheWVyIHR3byBhbmQgdmljZSB2ZXJzYS5cbiAgICovXG4gICNuZXh0UGxheWVyKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXllcnNbKyt0aGlzLiNpICUgMl07XG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIHBsYXllciB0aGF0IGlzIGN1cnJlbnRseSBtYWtpbmcgdGhlIGF0dGFja1xuICAjY3VycmVudFBsYXllcigpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJzW3RoaXMuI2kgJSAyXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHBsYXllciB0aGF0IGp1c3QgbWFkZSB0aGUgYXR0YWNrLiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgb25seSBpblxuICAgKiB0aGlzLiN0b2dnbGVfVHVybiB0byBkaXNwbGF5IHRoZSB1c2VycyBuYW1lIGluIHRoZSB0b2FzdCBtZXNzYWdlLlxuICAgKi9cbiAgI2F0dGFja2VyKCkge1xuICAgIGNvbnN0IGkgPSB0aGlzLiNpICsgMTtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJzW2kgJSAyXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyByZXNwb25zaWJsZSBmb3IgY2hlY2tpbmcgdG8gc2VlIGlmIHRoZSBjdXJyZW50IHBsYXllciBpc1xuICAgKiBhbGl2ZSBhbmQgY2FsbHMgdGhlIGFwcHJvcHJpYXRlIGhhbmRsZXIgZm9yIGVhY2ggc2NlbmFyaW8uXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGluaXRpYWxseSBnZXRzIGNhbGxlZCBieSB0aGlzLiNkb25lUGxhY2luZ1NoaXBzLiBUaGVuIHN1YnNlcXVlbnRcbiAgICogY2FsbHMgZ2V0IGNhbGxlZCBhcyBhIGNhbGxiYWNrIHdoZW4gYSBwbGF5ZXIgdGFrZXMgdGhlaXIgdHVybi5cbiAgICpcbiAgICogaGl0T3JNaXNzID0gQm9vbGVhbiBwYXNzZWQgaW4gd2hlbiBTcXVhcmUuanMgY2FsbHMgdGhpcyBtZXRob2QuXG4gICAqL1xuICAjdG9nZ2xlX1R1cm4oaGl0T3JNaXNzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICgoKSA9PiB7XG4gICAgICBpZiAoaGl0T3JNaXNzID09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgaWYgKGhpdE9yTWlzcykgcmV0dXJuIGAke3RoaXMuI2F0dGFja2VyKCkubmFtZX06IERpcmVjdCBoaXQhYDtcbiAgICAgIHJldHVybiBgJHt0aGlzLiNhdHRhY2tlcigpLm5hbWV9OiBNaXNzIWA7XG4gICAgfSkoKTtcblxuICAgIGlmICh0aGlzLiNjdXJyZW50UGxheWVyKCkuaXNBbGl2ZSgpKSB7XG4gICAgICBHYW1lTWVudS50b2FzdChtZXNzYWdlKTtcbiAgICAgIHRoaXMuI25leHRUdXJuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2VuZEdhbWUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBvbmx5IGV2ZXIgZ2V0cyBjYWxsZWQgZnJvbSB0aGlzLiN0b2dnbGVUdXJuKCkuIFRoaXMgZnVuY3Rpb25cbiAgICogaXMgcmVzcG9uc2libGUgZm9yIHN3aXRjaGluZyB0dXJucyBmcm9tIHBsYXllciBvbmUgdG8gcGxheWVyIHR3byBhbmQgdmljZVxuICAgKiB2ZXJzYVxuICAgKi9cbiAgI25leHRfVHVybigpIHtcbiAgICBjb25zdCBhdHRhY2tlciA9IHRoaXMuI2N1cnJlbnRQbGF5ZXIoKTtcbiAgICBjb25zdCBvcHBvbmVudCA9IHRoaXMuI25leHRQbGF5ZXIoKTtcblxuICAgIGF0dGFja2VyLmRpc2FibGVDbGljaygpO1xuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgdXNlciBpcyBwbGF5aW5nIGFnYWluc3QgdGhlIGNvbXB1dGVyLCB3ZSBuZXZlciB3YW50IHRvIGVuYWJsZVxuICAgICAqIGNsaWNraW5nIG9uIHRoZSB1c2VycyBib2FyZC4gVGhpcyB3b3VsZCBhbGxvdyB0aGUgdXNlciB0byBjbGljayBvbiB0aGVpclxuICAgICAqIG93biBib2FyZCB3aGljaCBpcyB1bndhbnRlZC5cbiAgICAgKlxuICAgICAqIGF0dGFja2VyLnRha2VUdXJuIGlzIGRlZmluZWQgb25seSBvbiB0aGUgQUkgY2xhc3MuXG4gICAgICovXG4gICAgaWYgKGF0dGFja2VyLnRha2VUdXJuKSB7XG4gICAgICAvKipcbiAgICAgICAqIFRlbGwgQUkgdG8gdGFrZSBpdHMgdHVybi4gQUkgbmVlZHMgYSBjYWxsYmFjaywgd2hpY2ggaXMgdGhlIG9wcG9uZW50c1xuICAgICAgICogXCJyZWNlaXZlQXR0YWNrXCIgbWV0aG9kLiBBSSB3aWxsIGNhbGwgdGhpcyBjYWxsYmFjayB3aXRoIGl0cyBndWVzcy5cbiAgICAgICAqL1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGF0dGFja2VyLnRha2VUdXJuKG9wcG9uZW50LnJlY2VpdmVBdHRhY2spO1xuICAgICAgfSwgODAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3Bwb25lbnQuZW5hYmxlQ2xpY2soKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBvbmx5IGV2ZXIgZ2V0cyBjYWxsZWQgZnJvbSB0aGlzLiN0b2dnbGVUdXJuKCkgYW5kIGlzIG9ubHlcbiAgICogY2FsbGVkIHdoZW4gYSBwbGF5ZXIgZGllcy4gVGhpcyBmdW5jdGlvbiBpcyByZXNwb25zaWJsZSBmb3IgZW5kaW5nIHRoZSBnYW1lXG4gICAqL1xuICAjZW5kR2FtZSgpIHtcbiAgICBjb25zdCB3aW5uZXJOYW1lID0gdGhpcy4jbmV4dFBsYXllcigpLm5hbWU7XG4gICAgR2FtZU1lbnUucGVyc2lzdGVudFRvYXN0KGBXaW5uZXI6ICR7d2lubmVyTmFtZX1gKTtcbiAgICAvLyBEaXNhYmxlIGNsaWNrcyBvbiBib3RoIHBsYXllcnMgYm9hcmRzIC0gdGhlIGdhbWUgaXMgb3Zlci5cbiAgICB0aGlzLnBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgICBwbGF5ZXIuZGlzYWJsZUNsaWNrKCk7XG4gICAgICBwbGF5ZXIuc2hvd1Bvc2l0aW9ucygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIGZpcnN0IG1ldGhvZCB0aGF0IGlzIGNhbGxlZCBpbiBvcmRlciB0byBpbml0aWF0ZSBnYW1lIHBsYXkuXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBmcm9tIGluZGV4LmpzXG4gICAqL1xuICBzdGFydEdhbWUoZ2FtZU9wdGlvbnMgPSB7IHNpbmdsZVBsYXllcjogZmFsc2UgfSkge1xuICAgIGlmIChnYW1lT3B0aW9ucy5zaW5nbGVQbGF5ZXIpIHtcbiAgICAgIC8vIFBsYXlpbmcgYWdhaW5zdCBBSS5cbiAgICAgIHRoaXMucGxheWVycyA9IFtcbiAgICAgICAgbmV3IFBsYXllcihcIlBsYXllciBPbmVcIiwgdGhpcy4jdG9nZ2xlVHVybiwgdGhpcy5wYXJlbnROb2RlLCB7XG4gICAgICAgICAgc2NyZWVuU2lkZTogXCJsZWZ0XCIsXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgQUkodGhpcy4jdG9nZ2xlVHVybiwgdGhpcy5wYXJlbnROb2RlLCB7IHNjcmVlblNpZGU6IFwicmlnaHRcIiB9KSxcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxheWVycyA9IFtcbiAgICAgICAgbmV3IFBsYXllcihcIlBsYXllciBPbmVcIiwgdGhpcy4jdG9nZ2xlVHVybiwgdGhpcy5wYXJlbnROb2RlLCB7XG4gICAgICAgICAgc2NyZWVuU2lkZTogXCJsZWZ0XCIsXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgUGxheWVyKFwiUGxheWVyIFR3b1wiLCB0aGlzLiN0b2dnbGVUdXJuLCB0aGlzLnBhcmVudE5vZGUsIHtcbiAgICAgICAgICBzY3JlZW5TaWRlOiBcInJpZ2h0XCIsXG4gICAgICAgIH0pLFxuICAgICAgXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5pdGlhdGUgdGhlIHByb2Nlc3MgdG8gbGV0IHBsYXllciBvbmUgcGxhY2UgdGhlaXIgc2hpcHMgb24gdGhlaXJcbiAgICAgKiBib2FyZCBieSBjYWxsaW5nIHRoZSBwbGFjZVNoaXBzIG1ldGhvZC4gVGhlIGNhbGxiYWNrIHBhc3NlZCBpbnRvXG4gICAgICogI2N1cnJlbnRQbGF5ZXIucGxhY2VTaGlwcyB3aWxsIGJlIGNhbGxlZCBvbmNlIHRoZSBwbGF5ZXIgaGFzIGZpbmlzaGVkXG4gICAgICogcGxhY2luZyB0aGVpciBzaGlwcy4gVGhlIGNhbGxiYWNrIHdpbGwgdGhlbiBzdGFydCB0aGUgcHJvY2VzcyBvZlxuICAgICAqIGxldHRpbmcgcGxheWVyIHR3byBwbGFjZSB0aGVpciBzaGlwcy5cbiAgICAgKlxuICAgICAqL1xuICAgIHRoaXMuI2N1cnJlbnRQbGF5ZXIoKS5wbGFjZVNoaXBzKHRoaXMuI2RvbmVQbGFjaW5nU2hpcHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHBhc3NlZCBpbnRvIFBsYXllci5qcyAoaW4gdGhpcy5zdGFydEdhbWUoKSkgdmlhXG4gICAqIHRoZSAjY3VycmVudFBsYXllcigpLnBsYWNlU2hpcHMoKSBtZXRob2QuIEZyb20gdGhlcmUgaXQgaXMgcGFzc2VkIGludG9cbiAgICogU2hpcFNlbGVjdG9yLmpzIHZpYSB0aGUgU2hpcFNlbGVjdG9yIGNvbnN0cnVjdG9yLiBTaGlwU2VsZWN0b3Igd2lsbCBjYWxsXG4gICAqIHRoaXMgbWV0aG9kIG9uY2UgYSBwbGF5ZXIgaGFzIHBsYWNlZCBhbGwgb2YgdGhlaXIgc2hpcHMgb24gdGhlaXIgYm9hcmQuXG4gICAqXG4gICAqIFRoZSBwdXJwb3NlIG9mIHRoaXMgbWV0aG9kIGNhbiBiZSBleHBsYWluZWQ6IFBsYXllciBvbmUgaXMgcGxhY2luZyB0aGVpclxuICAgKiBzaGlwcyBvbiB0aGUgYm9hcmQuIE9uY2UgdGhleSBoYXZlIHBsYWNlZCB0aGVpciBzaGlwcyB3ZSBuZWVkIHRvIGFsbG93XG4gICAqIHBsYXllciB0d28gdG8gcGxhY2UgdGhlaXIgc2hpcHMuIFRoaXMgbWV0aG9kIHRvZ2dsZXMgZnJvbSBwbGF5ZXIgb25lIHRvXG4gICAqIHBsYXllciB0d28sIHRvIGFsbG93IHBsYXllciB0d28gdG8gcGxhY2Ugc2hpcHMuXG4gICAqL1xuICAjZG9uZV9wbGFjaW5nX3NoaXBzKCkge1xuICAgIC8vIFJlbW92ZSB0aGUgcGxheWVyIG9uZSBVSSBjb21wb25lbnRzXG4gICAgdGhpcy4jY3VycmVudFBsYXllcigpLnJlbW92ZSgpO1xuXG4gICAgLyoqXG4gICAgICogU3dpdGNoIGZyb20gcGxheWVyIG9uZSB0byBwbGF5ZXIgdHdvLCBhbmQgcmVuZGVyIHRoZSBwbGF5ZXIgdHdvIFVJXG4gICAgICogY29tcG9uZW50c1xuICAgICAqL1xuICAgIHRoaXMuI25leHRQbGF5ZXIoKS5wbGFjZVNoaXBzKFxuICAgICAgLyoqXG4gICAgICAgKiBUaGlzIGNhbGxiYWNrIGdldHMgY2FsbGVkIG9uY2UgcGxheWVyIHR3byBpcyBkb25lIHBsYWNpbmcgdGhlaXIgc2hpcHMuXG4gICAgICAgKiBUaGlzIG1lYW5zIHRoYXQgYm90aCBwbGF5ZXJzIGhhdmUgcGxhY2VkIHRoZWlyIHNoaXBzIGFuZCBhcmUgcmVhZHkgdG9cbiAgICAgICAqIGJhdHRsZS5cbiAgICAgICAqL1xuICAgICAgKCkgPT4ge1xuICAgICAgICAvLyBGaXJzdCwgcmVtb3ZlIHBsYXllciB0d28ncyBVSSBjb21wb25lbnRzLlxuICAgICAgICB0aGlzLiNjdXJyZW50UGxheWVyKCkucmVtb3ZlKCk7XG4gICAgICAgIC8vIFRoZW4gcmVuZGVyIEJPVEggcGxheWVyJ3MgYm9hcmRzLlxuICAgICAgICB0aGlzLnBsYXllcnMuZm9yRWFjaCgocGxheWVyQm9hcmQpID0+IHBsYXllckJvYXJkLnJlbmRlcigpKTtcbiAgICAgICAgLy8gU3dpdGNoIGZyb20gcGxheWVyIHR3byB0byBwbGF5ZXIgb25lLlxuICAgICAgICB0aGlzLiNuZXh0UGxheWVyKCk7XG4gICAgICAgIC8vIENhbGwgdGhlIGZ1bmN0aW9uIHRoYXQgaW5pdGlhdGVzIGdhbWUgcGxheS5cbiAgICAgICAgdGhpcy4jdG9nZ2xlVHVybigpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBcIi4vR2FtZU1lbnUuY3NzXCI7XG5pbXBvcnQgeyBIdG1sRWxlbWVudCB9IGZyb20gXCJAYnNob3dlbi9odG1sZWxlbWVudFwiO1xuaW1wb3J0IFRvYXN0IGZyb20gXCIuL1RvYXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNZW51IHtcbiAgc3RhdGljIGdldFRvYXN0Q29udGFpbmVyKCkge1xuICAgIC8vIEZpbmQgb3IgY3JlYXRlIHRoZSBjb250YWluZXIgZm9yIHRoZSB0b2FzdCBtZXNzYWdlcyB0byBwb3B1bGF0ZS5cbiAgICBsZXQgdG9hc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvYXN0LWNvbnRhaW5lclwiKTtcblxuICAgIGlmICghdG9hc3RDb250YWluZXIpIHtcbiAgICAgIHRvYXN0Q29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgICAgaWQ6IFwidG9hc3QtY29udGFpbmVyXCIsXG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9hc3RDb250YWluZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB0b2FzdENvbnRhaW5lcjtcbiAgfVxuXG4gIHN0YXRpYyB0b2FzdChtZXNzYWdlLCBvcHRpb25zKSB7XG4gICAgaWYgKG1lc3NhZ2UgPT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICBjb25zdCB0b2FzdENvbnRhaW5lciA9IHRoaXMuZ2V0VG9hc3RDb250YWluZXIoKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgdG9hc3QgbWVzc2FnZSBhbmQgcmVuZGVyIGl0IGluIHRoZSB0b2FzdCBjb250YWluZXIuXG4gICAgbmV3IFRvYXN0KG1lc3NhZ2UsIG9wdGlvbnMpLnJlbmRlcih0b2FzdENvbnRhaW5lcik7XG4gIH1cblxuICBzdGF0aWMgcGVyc2lzdGVudFRvYXN0KG1lc3NhZ2UpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHsgcGVyc2lzdDogdHJ1ZSB9O1xuICAgIHRoaXMudG9hc3QobWVzc2FnZSwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogcm9vdCA9IFRoZSBjb250YWluZXIgd2hlcmUgdGhpcyBjb21wb25lbnQgc2hvdWxkIGluc2VydCBpdHNlbGYuXG4gICAqIHNpbmdsZVBsYXllckdhbWUgPSBBIGNhbGxiYWNrIHRvIHN0YXJ0IGEgc2luZ2xlIHBsYXllciBnYW1lXG4gICAqIHR3b1BsYXllckdhbWUgPSBBIGNhbGxiYWNrIHRvIHN0YXJ0IGEgdHdvIHBsYXllciBnYW1lXG4gICAqL1xuICBzdGF0aWMgcmVuZGVyR2FtZVNlbGVjdGlvbk1lbnUocm9vdCwgc2luZ2xlUGxheWVyR2FtZSwgdHdvUGxheWVyR2FtZSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgaWQ6IFwiZ2FtZS1tZW51LWNvbnRhaW5lclwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgbWVudUVsZW1lbnQgPSAoKCkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHsgdHlwZTogXCJkaXZcIiwgaWQ6IFwibWVudS1jb250YWluZXJcIiB9KTtcbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfSkoKTtcblxuICAgIGZ1bmN0aW9uIEJ1dHRvbihidXR0b25UZXh0LCBjYWxsYmFjaykge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJidXR0b24tY29udGFpbmVyXCJdLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBidXR0b24gPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICBpbm5lclRleHQ6IGJ1dHRvblRleHQsXG4gICAgICB9KTtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FsbGJhY2ssIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVCYWNrZ3JvdW5kKCkge1xuICAgICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKFwibWFpbi1tZW51XCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYXlUd29QbGF5ZXJHYW1lKCkge1xuICAgICAgcmVtb3ZlQmFja2dyb3VuZCgpO1xuICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgdHdvUGxheWVyR2FtZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYXlBZ2FpbnN0QUkoKSB7XG4gICAgICByZW1vdmVCYWNrZ3JvdW5kKCk7XG4gICAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgICBzaW5nbGVQbGF5ZXJHYW1lKCk7XG4gICAgfVxuXG4gICAgbWVudUVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3IEJ1dHRvbihcIlNpbmdsZSBwbGF5ZXJcIiwgcGxheUFnYWluc3RBSSkpO1xuICAgIG1lbnVFbGVtZW50LmFwcGVuZENoaWxkKG5ldyBCdXR0b24oXCJUd28gcGxheWVyXCIsIHBsYXlUd29QbGF5ZXJHYW1lKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVFbGVtZW50KTtcbiAgICByb290LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH1cbn1cbiIsImltcG9ydCBcIi4vUGxheWVyLmNzc1wiO1xuaW1wb3J0IFJvdyBmcm9tIFwiLi9Sb3dcIjtcbmltcG9ydCBTcXVhcmUgZnJvbSBcIi4vU3F1YXJlXCI7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuLi9nYW1lX21vZHVsZXMvR2FtZUJvYXJkXCI7XG5pbXBvcnQgU2hpcFNlbGVjdG9yIGZyb20gXCIuL1NoaXBTZWxlY3RvclwiO1xuaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tIFwiQGJzaG93ZW4vaHRtbGVsZW1lbnRcIjtcbmltcG9ydCBGbGVldFN0YXR1cyBmcm9tIFwiLi9GbGVldFN0YXR1c1wiO1xuaW1wb3J0IHBsYXllck5hbWVDb21wb25lbnQgZnJvbSBcIi4vcGxheWVyTmFtZUNvbXBvbmVudFwiO1xuaW1wb3J0IHNoaXBDb29yZGluYXRlR2VuZXJhdG9yIGZyb20gXCIuLi91dGlsaXRpZXMvc2hpcENvb3JkaW5hdGVHZW5lcmF0b3JcIjtcblxuLyoqXG4gKiBUaGlzIGlzIGEgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdhbWUgYm9hcmQgaW4gdGhlIERPTS4gVGhpcyBpcyB0aGUgY2xhc3MgdGhhdFxuICogaW50ZXJhY3RzIHdpdGggdGhlIEdhbWVCb2FyZCBBUEksIGZvdW5kIGluIHNyYy9nYW1lX21vZHVsZXMvR2FtZUJvYXJkLmpzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICNnYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gIC8qKlxuICAgKiBib2FyZFNxdWFyZXMgaXMgcG9wdWxhdGVkIHdpdGggdGhlIHNxdWFyZXMgdGhhdCBtYWtldXAgdGhlIGJvYXJkIGluIHRoZVxuICAgKiBET00uIFJlZmVyZW5jZSB0byB0aGVzZSBzcXVhcmVzIGlzIG5lZWRlZCBpbiBvcmRlciB0byBpbnRlcmFjdCB3aXRoIHRoZVxuICAgKiBTcXVhcmUgQVBJLlxuICAgKi9cbiAgI2JvYXJkU3F1YXJlcyA9IFtdO1xuXG4gIC8qKlxuICAgKiBib2FyZFJvd3MgaXMgcG9wdWxhdGVkIHdpdGggcm93cyBvZiBzcXVhcmVzLiBUaGlzIGlzIGN1cnJlbnRseSB1c2VkIHRvXG4gICAqIHVubW91bnQgYW5kIHJlbW92ZSByb3dzIGFuZCBzcXVhcmVzIGZyb20gdGhlIGRvbSB3aGVuIGEgcmUtcmVuZGVyIGlzIG5lZWRlZFxuICAgKi9cbiAgI2JvYXJkUm93cyA9IFtdO1xuXG4gIC8vIFRoaXMgaXMgdGhlIEhUTUwgbm9kZSBlbGVtZW50IHdoZXJlIGFsbCBET00gZWxlbWVudHMgYXJlIHJlbmRlcmVkLlxuICAjY29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGNsYXNzTGlzdDogW1wiYm9hcmQtY29udGFpbmVyXCJdLFxuICB9KTtcblxuICAjYm9hcmRHYW1lQ29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHsgdHlwZTogXCJkaXZcIiwgY2xhc3NMaXN0OiBbXCJib2FyZFwiXSB9KTtcblxuICAvLyBwYXJlbnROb2RlID0gVGhlIGNvbnRhaW5lciB3aGVyZSB0aGlzIGNsYXNzIGluc2VydHMgaXRzZWxmIGludG8gdGhlIERPTS5cbiAgI3BhcmVudE5vZGU7XG5cbiAgY29uc3RydWN0b3IoZGlzcGxheU5hbWUsIHRvZ2dsZVR1cm4sIHBhcmVudE5vZGUsIGRpc3BsYXlQcm9wZXJ0aWVzID0ge30pIHtcbiAgICAvLyBkaXNwbGF5TmFtZSA9IEEgc3RyaW5nIHdoaWNoIGlzIGRpc3BsYXllZCBhYm92ZSB0aGUgYm9hcmQuXG4gICAgdGhpcy5uYW1lID0gZGlzcGxheU5hbWU7XG5cbiAgICAvLyB0b2dnbGVUdXJuID0gQSBjYWxsYmFjayBwYXNzZWQgaW4gZnJvbSBHYW1lLmpzLiBUaGlzIGNhbGxiYWNrIGlzIGNhbGxlZFxuICAgIC8vIGluIHRoaXMucmVjZWl2ZUF0dGFjaygpXG4gICAgdGhpcy50b2dnbGVUdXJuID0gdG9nZ2xlVHVybjtcblxuICAgIHRoaXMuI3BhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuXG4gICAgdGhpcy4jY29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgcGxheWVyTmFtZUNvbXBvbmVudChkaXNwbGF5TmFtZSwgZGlzcGxheVByb3BlcnRpZXMpXG4gICAgKTtcbiAgICBpZiAoZGlzcGxheVByb3BlcnRpZXMuc2NyZWVuU2lkZSA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgIHRoaXMuc2NyZWVuU2lkZSA9IFwibGVmdFwiO1xuICAgICAgdGhpcy4jY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1jb250YWluZXItbGVmdC1zaWRlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjcmVlblNpZGUgPSBcInJpZ2h0XCI7XG4gICAgICB0aGlzLiNjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJvYXJkLWNvbnRhaW5lci1yaWdodC1zaWRlXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHBhc3NlZCBpbnRvIFNxdWFyZS5qcyBhcyBhIGNhbGxiYWNrLiBTbyBJIG5lZWQgdG8gc2V0IHRoZVxuICAgICAqIGNvbnRleHQgb2YgJ3RoaXMnIHNvIHRoYXQgdGhpcyBtZXRob2QgY2FuIHJlZmVyZW5jZSBtZXRob2RzIGRlZmluZWQgaW5cbiAgICAgKiB0aGlzIGNsYXNzLlxuICAgICAqL1xuICAgIHRoaXMucGxhY2VTaGlwID0gdGhpcy5wbGFjZVNoaXAuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucmFuZG9tbHlQbGFjZVNoaXBzID0gdGhpcy5yYW5kb21seVBsYWNlU2hpcHMuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucmVjZWl2ZUF0dGFjayA9IHRoaXMucmVjZWl2ZUF0dGFjay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2hvd1Bvc2l0aW9ucygpIHtcbiAgICB0aGlzLiNib2FyZFNxdWFyZXMuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoc3F1YXJlKSA9PiBzcXVhcmUudG9nZ2xlU2hpcFBvc2l0aW9uKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gY29vcmRzID0gW2ludCwgaW50XVxuICByZWNlaXZlQXR0YWNrKGNvb3Jkcykge1xuICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZHM7XG4gICAgY29uc3QgW2lzSGl0LCBzaGlwTmFtZSwgaXNTdW5rXSA9IHRoaXMuI2dhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgaWYgKGlzSGl0KSB7XG4gICAgICB0aGlzLmZsZWV0U3RhdHVzLnNoaXBJc0hpdChzaGlwTmFtZSk7XG4gICAgICB0aGlzLiNib2FyZFNxdWFyZXNbcm93XVtjb2x1bW5dLmZpbGwodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2JvYXJkU3F1YXJlc1tyb3ddW2NvbHVtbl0uZmlsbChmYWxzZSk7XG4gICAgfVxuICAgIHRoaXMudG9nZ2xlVHVybihpc0hpdCk7XG4gICAgcmV0dXJuIFtpc0hpdCwgc2hpcE5hbWUsIGlzU3Vua107XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgcmVtb3ZlcyB0aGUgYm9hcmQgZnJvbSB0aGUgRE9NLlxuICAgKi9cbiAgI3JlbW92ZUJvYXJkRnJvbURPTSgpIHtcbiAgICB0aGlzLiNib2FyZFJvd3MuZm9yRWFjaCgocm93KSA9PiByb3cucmVtb3ZlKCkpO1xuICAgIHRoaXMuI2JvYXJkU3F1YXJlcy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChzcXVhcmUpID0+IHNxdWFyZS51bm1vdW50KCkpO1xuICAgIH0pO1xuICAgIHRoaXMuI2JvYXJkUm93cyA9IFtdO1xuICAgIHRoaXMuI2JvYXJkU3F1YXJlcyA9IFtdO1xuICB9XG5cbiAgLy8gRGlzYWJsZSBjbGlja2luZyBvbiB0aGlzIGJvYXJkLlxuICBkaXNhYmxlQ2xpY2soKSB7XG4gICAgdGhpcy4jYm9hcmRHYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICB0aGlzLiNib2FyZFNxdWFyZXMuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoc3F1YXJlKSA9PiBzcXVhcmUuZGlzYWJsZSgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEVuYWJsZSBjbGlja2luZyBvbiB0aGlzIGJvYXJkLlxuICBlbmFibGVDbGljaygpIHtcbiAgICB0aGlzLiNib2FyZEdhbWVDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICAgIHRoaXMuI2JvYXJkU3F1YXJlcy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChzcXVhcmUpID0+IHNxdWFyZS5lbmFibGUoKSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBSZXR1cm4gdHJ1ZSBpZiB0aGlzIGJvYXJkIGhhcyBmbG9hdGluZyBzaGlwcy5cbiAgLy8gUmV0dXJuIGZhbHNlIGlmIHRoaXMgYm9hcmQgZG9lcyBub3QgaGF2ZSBmbG9hdGluZyBzaGlwcy5cbiAgaXNBbGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jZ2FtZUJvYXJkLmhhc0Zsb2F0aW5nU2hpcHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb29yZHMgPSBbW2ludCwgaW50XSwgLi4uICxbaW50LCBpbnRdXVxuICAgKiBBdHRlbXB0IHRvIHBsYWNlIGEgc2hpcCBvbiB0aGVzZSBjb29yZGluYXRlcy4gUmV0dXJuIHRydWUgaWYgdGhlIHNoaXAgd2FzXG4gICAqIHBsYWNlZCwgcmV0dXJuIGZhbHNlIGlmIHRoZSBzaGlwIHdhcyBub3QvY2Fubm90IGJlIHBsYWNlZCBvbiB0aGVzZVxuICAgKiBjb29yZGluYXRlcy5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgcGFzc2VkIGludG8gU3F1YXJlIGFzIGEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gYSBzaGlwXG4gICAqIGlzIHRyeWluZyB0byBiZSBwbGFjZWQgb24gdGhhdCBTcXVhcmUuXG4gICAqL1xuICBwbGFjZVNoaXAoc2hpcENvb3Jkcywgc2hpcE5hbWUpIHtcbiAgICBpZiAodGhpcy4jZ2FtZUJvYXJkLnBsYWNlU2hpcChzaGlwQ29vcmRzLCBzaGlwTmFtZSkpIHtcbiAgICAgIHRoaXMucmVuZGVyQm9hcmQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGNyZWF0ZXMgYW5kIHJlbmRlcnMgdGhlIFVJIGVsZW1lbnQgdGhhdCBob2xkcyB0aGUgc2hpcHMgZm9yIHRoZVxuICAgKiBwbGF5ZXIgdG8gZHJhZyBhbmQgZHJvcCBvbnRvIHRoZWlyIGJvYXJkLiBUaGlzIG1ldGhvZCBhbHNvIHJlbmRlcnMgdGhpc1xuICAgKiB0aGUgZ2FtZSBib2FyZCBVSSBjb21wb25lbnQgc28gdGhhdCB0aGUgcGxheWVyIGNhbiBkcmFnIHRoZWlyIHNoaXBzIG9udG9cbiAgICogdGhlaXIgYm9hcmQuXG4gICAqXG4gICAqIGRvbmVQbGFjaW5nU2hpcHMgPSBBIGNhbGxiYWNrIHBhc3NlZCBpbiBmcm9tIEdhbWUuanMgd2hlbiBHYW1lLmpzIGNhbGxzXG4gICAqIHRoaXMgbWV0aG9kLlxuICAgKi9cbiAgcGxhY2VTaGlwcyhkb25lUGxhY2luZ1NoaXBzKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuZCByZW5kZXIgdGhlIGNvbnRhaW5lciB0aGF0IGhvbGRzIGFsbCB0aGUgc2hpcHMgc28gdGhlIHVzZXIgY2FuXG4gICAgICogcGxhY2UgdGhlbSBvbiB0aGUgYm9hcmQuXG4gICAgICovXG4gICAgdGhpcy5zaGlwU2VsZWN0b3IgPSBuZXcgU2hpcFNlbGVjdG9yKFxuICAgICAgZG9uZVBsYWNpbmdTaGlwcyxcbiAgICAgIHRoaXMucmFuZG9tbHlQbGFjZVNoaXBzXG4gICAgKTtcbiAgICB0aGlzLnNoaXBTZWxlY3Rvci5yZW5kZXIoKTtcblxuICAgIC8vIFJlbmRlciB0aGUgZ2FtZSBib2FyZFxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvLyBUaGlzIG1ldGhvZCB3aWxsIHBsYWNlIHRoZSBzaGlwcyByYW5kb21seSBvbiB0aGUgYm9hcmQuXG4gIHJhbmRvbWx5UGxhY2VTaGlwcygpIHtcbiAgICB0aGlzLiNnYW1lQm9hcmQucmVzZXQoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIGNvbnN0IGNvb3JkR2VuZXJhdG9yID0gc2hpcENvb3JkaW5hdGVHZW5lcmF0b3IoKTtcbiAgICBjb25zdCBzaGlwTmFtZXMgPSBbXG4gICAgICBcImNhcnJpZXJcIixcbiAgICAgIFwiYmF0dGxlc2hpcFwiLFxuICAgICAgXCJjcnVpc2VyXCIsXG4gICAgICBcInN1Ym1hcmluZVwiLFxuICAgICAgXCJkZXN0cm95ZXJcIixcbiAgICBdO1xuICAgIHNoaXBOYW1lcy5mb3JFYWNoKChzaGlwTmFtZSkgPT4ge1xuICAgICAgdGhpcy5wbGFjZVNoaXAoY29vcmRHZW5lcmF0b3IuZ2V0U2hpcENvb3JkcyhzaGlwTmFtZSksIHNoaXBOYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIENyZWF0ZSB0aGUgRE9NIGJvYXJkIGFuZCBwb3B1bGF0ZSB0aGUgYm9hcmRTcXVhcmVzIGFycmF5LlxuICByZW5kZXJCb2FyZCgpIHtcbiAgICAvLyBSZW1vdmUgdGhlIG9sZCBib2FyZC5cbiAgICB0aGlzLiNyZW1vdmVCb2FyZEZyb21ET00oKTtcblxuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCB0aGUgcm93cy5cbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgIC8vIENyZWF0ZSBhIG5ldyBSb3cgdXBvbiBlYWNoIGl0ZXJhdGlvbi5cbiAgICAgIGNvbnN0IHJvd0VsZW1lbnQgPSBuZXcgUm93KCk7XG5cbiAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCB0aGUgY29sdW1ucyB3aXRoaW4gdGhlIHJvdy5cbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IDEwOyBjb2x1bW4rKykge1xuICAgICAgICAvKipcbiAgICAgICAgICogSGVyZSwgY3JlYXRlIGFuIGluc3RhbmNlIG9mIFNxdWFyZSBhbmQgcGFzcyBpbiB0aGUgY29vcmRpbmF0ZXMsIGFuZFxuICAgICAgICAgKiBhbnkgYW55IGNhbGxiYWNrcyBuZWVkZWQgYnkgdGhlIFNxdWFyZSBjbGFzcy5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IG5ldyBTcXVhcmUoXG4gICAgICAgICAgW3JvdywgY29sdW1uXSxcbiAgICAgICAgICB0aGlzLnJlY2VpdmVBdHRhY2suYmluZCh0aGlzLCBbcm93LCBjb2x1bW5dKSxcbiAgICAgICAgICB0aGlzLnBsYWNlU2hpcCxcbiAgICAgICAgICB0aGlzLiNnYW1lQm9hcmQsXG4gICAgICAgICAgdGhpcy5zaGlwU2VsZWN0b3IgfHwgbnVsbFxuICAgICAgICApO1xuXG4gICAgICAgIC8vVGhpcyB3aWxsIGR5bmFtaWNhbGx5IGJ1aWxkIGEgMmQgYXJyYXkuXG4gICAgICAgIGlmIChjb2x1bW4gPT09IDApIHRoaXMuI2JvYXJkU3F1YXJlcy5wdXNoKFtdKTtcblxuICAgICAgICAvLyBTdG9yZSBhIHJlZmVyZW5jZSBvZiB0aGlzIFNxdWFyZS5cbiAgICAgICAgdGhpcy4jYm9hcmRTcXVhcmVzW3Jvd10ucHVzaChzcXVhcmUpO1xuXG4gICAgICAgIC8vIEFkZCB0aGlzIFNxdWFyZSBlbGVtZW50IHRvIHRoZSBSb3cgZWxlbWVudC5cbiAgICAgICAgLy8gcm93RWxlbWVudC5hcHBlbmRDaGlsZChzcXVhcmUuY29udGFpbmVyKTtcbiAgICAgICAgc3F1YXJlLnJlbmRlcihyb3dFbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgLy8gU3RvcmUgYSByZWZlcmVuY2Ugb2YgdGhpcyBSb3dcbiAgICAgIHRoaXMuI2JvYXJkUm93cy5wdXNoKHJvd0VsZW1lbnQpO1xuXG4gICAgICAvLyBBZGQgdGhpcyByb3cgdG8gdGhlIERPTVxuICAgICAgdGhpcy4jYm9hcmRHYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvd0VsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLiNjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4jYm9hcmRHYW1lQ29udGFpbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBvbmx5IG1ldGhvZCB0aGF0IGlzIGV4cG9zZWQgdGhhdCBjYW4gcmVuZGVyIHRoaXMgYm9hcmQgaW4gdGhlXG4gICAqIERPTS4gVGhpcyBtZXRob2QgdGhlbiBjYWxscyB0aGUgcmVuZGVyQm9hcmQoKSBtZXRob2QgYW5kIHRoZW4gYWRkcyB0aGlzXG4gICAqIGNsYXNzIGNvbnRhaW5lciB0byB0aGUgRE9NLlxuICAgKiAqL1xuICByZW5kZXIoKSB7XG4gICAgdGhpcy5yZW5kZXJCb2FyZCgpO1xuICAgIGlmICh0aGlzLmZsZWV0U3RhdHVzKSB7XG4gICAgICB0aGlzLmZsZWV0U3RhdHVzLnJlbmRlcih0aGlzLiNjb250YWluZXIpO1xuICAgIH1cbiAgICB0aGlzLiNwYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMuI2NvbnRhaW5lcik7XG4gIH1cblxuICAvLyBUaGlzIG1ldGhvZCB3aWxsIGNvbXBsZXRlbHkgcmVtb3ZlIHRoaXMgYm9hcmQgZnJvbSB0aGUgRE9NLlxuICByZW1vdmUoKSB7XG4gICAgLyoqXG4gICAgICogVGhlIG9ubHkgdGltZSB0aGlzIG1ldGhvZCBnZXRzIGNhbGxlZCBpcyBhZnRlciB0aGUgcGxheWVyIGhhcyBwbGFjZWRcbiAgICAgKiB0aGVpciBzaGlwcyBhbmQgd2Ugd2FudCB0byByZW1vdmUgdGhpcyBib2FyZCBmcm9tIHRoZSBET00uIEluIHRoYXQgY2FzZVxuICAgICAqIHdlIGFsc28gbmVlZCB0byByZW1vdmUgc2hpcFNlbGVjdG9yIGZyb20gdGhpcyBjbGFzcy4gTm93LCB3aGVuIHRoZSBib2FyZFxuICAgICAqIGlzIHJlLXJlbmRlcmVkIGluIHRoZSBET00sIHdlIHdpbGwgcGFzcyBpbiBudWxsLCBpbnN0ZWFkIG9mIFNoaXBTZWxlY3RvcixcbiAgICAgKiB0byBTcXVhcmUuanMgYW5kIFNxdWFyZS5qcyByZW5kZXJzIGRpZmZlcmVudGx5IGJlY2F1c2Ugb2YgdGhpcy5cbiAgICAgKlxuICAgICAqIElmIFNoaXBTZWxlY3RvciBpcyBwYXNzZWQgaW50byBTcXVhcmUsIHRoZW4gU3F1YXJlIHdpbGwgc2hvdyBzaGlwXG4gICAgICogcG9zaXRpb25zLiBXZSBkb24ndCB3YW50IHRoaXMuIFNob3dpbmcgc2hpcCBwb3NpdGlvbnMgaXMgb25seSB1c2VmdWwgd2hlblxuICAgICAqIHRoZSBwbGF5ZXIgaXMgcGxhY2luZyBzaGlwcyBvbiB0aGUgYm9hcmQuIE90aGVyd2lzZSB3ZSBuZXZlciB3YW50IHRvXG4gICAgICogc2hvdyBzaGlwIHBvc2l0aW9ucyBvbiB0aGUgYm9hcmQuXG4gICAgICovXG4gICAgdGhpcy5zaGlwU2VsZWN0b3IgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgdGhhdCBtZWFucyB0aGUgcGxheWVycyBoYXZlIHBsYWNlZCB0aGVpciBzaGlwc1xuICAgICAqIGFuZCBhcmUgYWJvdXQgdG8gYmF0dGxlLiBJbiB0aGlzIGNhc2Ugd2Ugd2FudCB0byBoYXZlIGFuIGluc3RhbmNlIG9mXG4gICAgICogRmxlZXRTdGF0dXMgd2hpY2ggd2lsbCBiZSBwYXNzZWQgaW50byBTcXVhcmUuIFNxdWFyZSB3aWxsIHVwZGF0ZVxuICAgICAqIEZsZWV0U3RhdHVzIHdoZW5ldmVyIGEgc2hpcCBpcyBoaXQuXG4gICAgICovXG4gICAgdGhpcy5mbGVldFN0YXR1cyA9IG5ldyBGbGVldFN0YXR1cyh7IHNjcmVlblNpZGU6IHRoaXMuc2NyZWVuU2lkZSB9KTtcbiAgICB0aGlzLiNjb250YWluZXIucmVtb3ZlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEh0bWxFbGVtZW50IH0gZnJvbSBcIkBic2hvd2VuL2h0bWxlbGVtZW50XCI7XG5pbXBvcnQgXCIuL1Jvdy5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm93KCkge1xuICBjb25zdCByb3dDb250YWluZXIgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgY2xhc3NMaXN0OiBbXCJyb3ctY29udGFpbmVyXCJdLFxuICB9KTtcbiAgcmV0dXJuIHJvd0NvbnRhaW5lcjtcbn1cbiIsImltcG9ydCB7IEh0bWxFbGVtZW50IH0gZnJvbSBcIkBic2hvd2VuL2h0bWxlbGVtZW50XCI7XG5pbXBvcnQgXCIuL1NoaXAuY3NzXCI7XG4vKipcbiAqIFRoaXMgaXMgYSBkcmFnZ2FibGUgc2hpcC4gVGhpcyBjbGFzcyBjcmVhdGVzIHRoZSBzaGlwcyB0aGF0IHRoZSB1c2VyIGNhblxuICogZHJhZyBvbnRvIHRoZWlyIGJhdHRsZSBmaWVsZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIC8vIFRoZSBjb250YWluZXIgd2hpY2ggaG9sZHMgYWxsIERPTSBlbGVtZW50cyBmb3IgdGhpcyBjbGFzcy5cbiAgI2NvbnRhaW5lcjtcblxuICAvLyBUaGUgY29udGFpbmVyIHdoZXJlIHRoaXMgY2xhc3MgaW5zZXJ0cyBpdHNlbGYuXG4gICNwYXJlbnRFbGVtZW50O1xuXG4gIC8vIFRoZSBsZW5ndGggb2YgdGhlIHNoaXAuXG4gICNsZW5ndGg7XG5cbiAgLy8gSGFuZGxlIGEgZG91YmxlIGNsaWNrIG9uIHRoaXMgZWxlbWVudFxuICAjZG91YmxlQ2xpY2tIYW5kbGVyO1xuXG4gIGNvbnN0cnVjdG9yKGxlbmd0aCwgdW5pcXVlRWxlbWVudElkLCBwYXJlbnRFbGVtZW50LCBzaGlwTmFtZSkge1xuICAgIC8vIFRoZSBIdG1sIERPTSBlbGVtZW50IHdoZXJlIHRoaXMgY2xhc3MgaW5zZXJ0cyBpdHNlbGYuXG4gICAgdGhpcy4jcGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQ7XG5cbiAgICB0aGlzLiNjb250YWluZXIgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgIGlkOiBgc2hpcC0ke3VuaXF1ZUVsZW1lbnRJZH1gLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBkcmFnZ2FibGU6IFwidHJ1ZVwiLFxuICAgICAgICBcImRhdGEtb3JpZW50YXRpb25cIjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICBcImRhdGEtc2hpcC1uYW1lXCI6IHNoaXBOYW1lLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vIFRoZSBsZW5ndGggb2YgdGhpcyBzaGlwLlxuICAgIHRoaXMuI2xlbmd0aCA9IGxlbmd0aDtcblxuICAgIHRoaXMuI2NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIHRoaXMuI2RyYWdTdGFydCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIGFzIGEgY2FsbGJhY2sgZm9yIGEgRE9NIGV2ZW50LiBJIG5lZWQgdG8gc2V0IHRoZVxuICAgICAqIGNvbnRleHQgb2YgJ3RoaXMnIHNvIHRoYXQgdGhpcyBtZXRob2QgY2FuIHJlZmVyZW5jZSB0aGlzIGNsYXNzLlxuICAgICAqL1xuICAgIHRoaXMuc2V0RGF0YVNldCA9IHRoaXMuI3NldERhdGFTZXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLiNkb3VibGVDbGlja0hhbmRsZXIgPSB0aGlzLiNkb3VibGVfY2xpY2tfaGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy4jY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCB0aGlzLiNkb3VibGVDbGlja0hhbmRsZXIpO1xuXG4gICAgdGhpcy4jY3JlYXRlU2hpcEJvZHkoKTtcbiAgfVxuXG4gICNkb3VibGVfY2xpY2tfaGFuZGxlcigpIHtcbiAgICBjb25zdCBjdXJyZW50T3JpZW50YXRpb24gPSB0aGlzLiNjb250YWluZXIuZGF0YXNldC5vcmllbnRhdGlvbjtcbiAgICBpZiAoY3VycmVudE9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIHRoaXMuI2NvbnRhaW5lci5kYXRhc2V0Lm9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2NvbnRhaW5lci5kYXRhc2V0Lm9yaWVudGF0aW9uID0gXCJ2ZXJ0aWNhbFwiO1xuICAgIH1cbiAgfVxuXG4gIC8vIENyZWF0ZSB0aGUgaW5kaXZpZHVhbCBzcXVhcmVzIHRoYXQgbWFrZXVwIGEgc2hpcC5cbiAgI2NyZWF0ZVNoaXBCb2R5KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jbGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuI2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiNzaGlwQm9keShpKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gVGhpcyBtb3VzZWRvd24gaGFuZGxlciBmb3IgdGhpcyBzcXVhcmUuXG4gICNzZXREYXRhU2V0KGludCkge1xuICAgIHRoaXMuI2NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNsaWNrZWQtYm9keVwiLCBpbnQpO1xuICAgIC8vIHRoaXMuI2NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudGF0aW9uXCIsIFwidmVydGljYWxcIik7XG4gICAgdGhpcy4jY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtbGVuZ3RoXCIsIHRoaXMuI2xlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBpbmRpdmlkdWFsIHNxdWFyZXMgdGhhdCBtYWtldXAgdGhpcyBzaGlwLlxuICAgKiBsb2NhdGlvbiA9IGludFxuICAgKiBUaGUgbG9jYXRpb24gaXMgdXNlZCB0byBpbmRpY2F0ZSB3aGljaCBzcXVhcmUgdGhlIHVzZXIgcGlja2VkIHVwIHRoZSBzaGlwXG4gICAqIGZyb20uIElmIHRoZSBzaGlwIGhhcyAzIHNxdWFyZXMsIHRoZSB1c2VyIGNhbiBwaWNrIHRoZSBzaGlwIHVwIGZyb21cbiAgICogc3F1YXJlIDAsIHNxdWFyZSAxLCBvciBzcXVhcmUgMi4gVGhpcyB2YWx1ZSBpcyBuZWVkZWQgaW4gb3JkZXIgZm9yIG90aGVyXG4gICAqIGZ1bmN0aW9ucyB0byBnZW5lcmF0ZSBjb29yZGluYXRlcyB0byBwbGFjZSB0aGUgc2hpcC5cbiAgICogKi9cbiAgI3NoaXBCb2R5KGxvY2F0aW9uKSB7XG4gICAgY29uc3QgYm9keSA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgY2xhc3NMaXN0OiBbXCJzaGlwLWJvZHlcIl0sXG4gICAgfSk7XG5cbiAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5zZXREYXRhU2V0LmJpbmQobnVsbCwgbG9jYXRpb24pKTtcblxuICAgIHJldHVybiBib2R5O1xuICB9XG5cbiAgLy8gU3RhcnQgdGhlIGRyYWdnaW5nIHByb2Nlc3MuXG4gICNkcmFnU3RhcnQoZSkge1xuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIGUudGFyZ2V0LmlkKTtcbiAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJtb3ZlXCI7XG4gIH1cblxuICAvLyBEaXNwbGF5IHRoaXMgc2hpcCBpbiB0aGUgRE9NLlxuICByZW5kZXIoKSB7XG4gICAgdGhpcy4jcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiNjb250YWluZXIpO1xuICB9XG5cbiAgLy8gUmVtb3ZlIHRoaXMgc2hpcCBmcm9tIHRoZSBET01cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuI2NvbnRhaW5lci5yZW1vdmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tIFwiQGJzaG93ZW4vaHRtbGVsZW1lbnRcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL1NoaXBcIjtcbmltcG9ydCByb290Tm9kZSBmcm9tIFwiLi4vcm9vdE5vZGVcIjtcbmltcG9ydCBcIi4vU2hpcFNlbGVjdG9yLmNzc1wiO1xuaW1wb3J0IHJhbmRvbWl6ZXIgZnJvbSBcIi4vcmFuZG9taXplclwiO1xuaW1wb3J0IHNoaXBzQ29udGFpbmVyIGZyb20gXCIuL3NoaXBzQ29udGFpbmVyXCI7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBjcmVhdGVzIHRoZSBET00gZWxlbWVudCB0aGF0IGhvbGRzIGFsbCB0aGUgc2hpcHMgZm9yIHRoZSB1c2VyIHRvXG4gKiBkcmFnIGFuZCBkcm9wIG9udG8gdGhlaXIgYm9hcmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXBTZWxlY3RvciB7XG4gIC8vIFRoZSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGFsbCBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkLlxuICAjZG9uZVBsYWNpbmdTaGlwcztcblxuICAvLyBUaGUgSHRtbCBET00gZWxlbWVudCB3aGVyZSB0aGlzIGNsYXNzIHJlbmRlcnMgaXRzIERPTSBlbGVtZW50c1xuICAjY29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGNsYXNzTGlzdDogW1wic2hpcC1zZWxlY3Rvci1jb250YWluZXJcIl0sXG4gIH0pO1xuXG4gICNzaGlwc0NvbnRhaW5lciA9IHNoaXBzQ29udGFpbmVyKCk7XG5cbiAgLy8gZG9uZVBsYWNpbmdTaGlwcyA9IEEgY2FsbGJhY2sgcGFzc2VkIGluIGZyb20gQm9hcmQuanNcbiAgY29uc3RydWN0b3IoZG9uZVBsYWNpbmdTaGlwcywgcmFuZG9tbHlQbGFjZVNoaXBzKSB7XG4gICAgdGhpcy4jZG9uZVBsYWNpbmdTaGlwcyA9IGRvbmVQbGFjaW5nU2hpcHM7XG5cbiAgICB0aGlzLiNpbml0aWFsaXplU2hpcHMoKTtcblxuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gdGhpcy5jbGlja0hhbmRsZXIuYmluZCh0aGlzLCByYW5kb21seVBsYWNlU2hpcHMpO1xuXG4gICAgdGhpcy5hbGxTaGlwc1BsYWNlZCA9IHRoaXMuI2FsbFNoaXBzUGxhY2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICAjaW5pdGlhbGl6ZVNoaXBzKCkge1xuICAgIHRoaXMuc2hpcHMgPSBbXG4gICAgICBuZXcgU2hpcCg1LCBcIjBcIiwgdGhpcy4jc2hpcHNDb250YWluZXIsIFwiY2FycmllclwiKSxcbiAgICAgIG5ldyBTaGlwKDQsIFwiMVwiLCB0aGlzLiNzaGlwc0NvbnRhaW5lciwgXCJiYXR0bGVzaGlwXCIpLFxuICAgICAgbmV3IFNoaXAoMywgXCIyXCIsIHRoaXMuI3NoaXBzQ29udGFpbmVyLCBcImNydWlzZXJcIiksXG4gICAgICBuZXcgU2hpcCgzLCBcIjNcIiwgdGhpcy4jc2hpcHNDb250YWluZXIsIFwic3VibWFyaW5lXCIpLFxuICAgICAgbmV3IFNoaXAoMiwgXCI0XCIsIHRoaXMuI3NoaXBzQ29udGFpbmVyLCBcImRlc3Ryb3llclwiKSxcbiAgICBdO1xuICAgIHRoaXMuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5yZW5kZXIoKSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHJlbW92ZVNoaXAoc2hpcEVsZW1lbnRJZCkge1xuICAgIGNvbnN0IGkgPSBOdW1iZXIucGFyc2VJbnQoc2hpcEVsZW1lbnRJZC5jaGFyQXQoc2hpcEVsZW1lbnRJZC5sZW5ndGggLSAxKSk7XG4gICAgdGhpcy5zaGlwc1tpXS5yZW1vdmUoKTtcbiAgICB0aGlzLnNoaXBzW2ldID0gbnVsbDtcbiAgICBpZiAodGhpcy5zaGlwcy5ldmVyeSgoZWxlbWVudCkgPT4gZWxlbWVudCA9PSBudWxsKSkge1xuICAgICAgdGhpcy4jYWxsU2hpcHNQbGFjZWQoKTtcbiAgICB9XG4gIH1cblxuICAjYWxsU2hpcHNQbGFjZWQoKSB7XG4gICAgdGhpcy4jY29udGFpbmVyLnJlbW92ZSgpO1xuICAgIHRoaXMuI2RvbmVQbGFjaW5nU2hpcHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByYW5kb21seVBsYWNlU2hpcHMgPSBBIGNhbGxiYWNrIHBhc3NlZCBpbiBmcm9tIFBsYXllci5qc1xuICAgKi9cbiAgY2xpY2tIYW5kbGVyKHJhbmRvbWx5UGxhY2VTaGlwcykge1xuICAgIC8vIFJlbW92ZSBhbGwgdGhlIHNoaXBzIGZyb20gdGhlIHNoaXAgc2VsZWN0b3IgYmVjYXVzZSB0aGV5IGFyZSBnb2luZyB0b1xuICAgIC8vIGJlIHBsYWNlZCByYW5kb21seS5cbiAgICB0aGlzLiNzaGlwc0NvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgIHJhbmRvbWx5UGxhY2VTaGlwcygpO1xuICB9XG5cbiAgLy8gUmVuZGVyIHRoaXMgZWxlbWVudCBpbiB0aGUgRE9NLlxuICByZW5kZXIoKSB7XG4gICAgdGhpcy4jY29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgcmFuZG9taXplcih0aGlzLmNsaWNrSGFuZGxlciwgdGhpcy5hbGxTaGlwc1BsYWNlZClcbiAgICApO1xuICAgIHRoaXMuI2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiNzaGlwc0NvbnRhaW5lcik7XG4gICAgcm9vdE5vZGUuYXBwZW5kQ2hpbGQodGhpcy4jY29udGFpbmVyKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tIFwiQGJzaG93ZW4vaHRtbGVsZW1lbnRcIjtcbmltcG9ydCBcIi4vU3F1YXJlLmNzc1wiO1xuXG4vKipcbiAqIGNvb3JkaW5hdGVzID0gW2ludCxpbnRdXG4gKiByZWNlaXZlQXR0YWNrID0gQSBjYWxsYmFjayBwYXNzZWQgaW4gZnJvbSBQbGF5ZXIuanNcbiAqIHBsYWNlU2hpcCA9IEEgY2FsbGJhY2sgcGFzc2VkIGluIGZyb20gUGxheWVyLmpzXG4gKiBnYW1lQm9hcmQgPSBBbiBpbnN0YW5jZSBvZiBHYW1lQm9hcmQuanMgcGFzc2VkIGluIGZyb20gUGxheWVyLmpzXG4gKiBzaGlwU2VsZWN0b3IgPSBBbiBpbnN0YW5jZSBvZiBTaGlwU2VsZWN0b3IuanMgcGFzc2VkIGluIGZyb20gUGxheWVyLmpzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNxdWFyZSB7XG4gIC8vIFNlZSB0aGlzLiNkcm9wX2hhbmRsZXIgZm9yIGFuIGV4cGxhbmF0aW9uIG9mIHRoaXMgbWV0aG9kLlxuICAjZHJvcEhhbmRsZXI7XG5cbiAgLy8gU2VlIHRoaXMuI2RyYWdvdmVyX2hhbmRsZXIgZm9yIHRoZSBkZWZpbml0aW9uIG9mIHRoaXMgbWV0aG9kLlxuICAjZHJhZ292ZXJIYW5kbGVyO1xuXG4gIGNvbnN0cnVjdG9yKGNvb3JkaW5hdGVzLCByZWNlaXZlQXR0YWNrLCBwbGFjZVNoaXAsIGdhbWVCb2FyZCwgc2hpcFNlbGVjdG9yKSB7XG4gICAgLy9EZWZpbmUgdGhlIGNhbGxiYWNrcyB1c2VkIGluIHRoaXMgY2xhc3MuXG4gICAgdGhpcy5jb29yZHMgPSBjb29yZGluYXRlcztcbiAgICB0aGlzLnJlY2VpdmVBdHRhY2sgPSByZWNlaXZlQXR0YWNrO1xuICAgIHRoaXMucGxhY2VTaGlwID0gcGxhY2VTaGlwO1xuICAgIHRoaXMuZ2FtZUJvYXJkID0gZ2FtZUJvYXJkO1xuICAgIHRoaXMuc2hpcFNlbGVjdG9yID0gc2hpcFNlbGVjdG9yO1xuXG4gICAgLy8gVGhlIGNvbnRhaW5lciBmb3IgcmVuZGVyaW5nIHRoaXMgc3F1YXJlIGluIHRoZSBET00uXG4gICAgdGhpcy5jb250YWluZXIgPSBuZXcgSHRtbEVsZW1lbnQoeyB0eXBlOiBcImRpdlwiLCBjbGFzc0xpc3Q6IFtcInNxdWFyZVwiXSB9KTtcblxuICAgIC8vIEJpbmQgZnVuY3Rpb25zIHRvIHRoaXMgY2xhc3NcbiAgICB0aGlzLiNkcm9wSGFuZGxlciA9IHRoaXMuI2Ryb3BfaGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuI2RyYWdvdmVySGFuZGxlciA9IHRoaXMuI2RyYWdvdmVyX2hhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gRE9NIGVsZW1lbnRzIGluIHRoaXMgY2xhc3MuXG4gICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHRoaXMuI2RyYWdvdmVySGFuZGxlcik7XG4gICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgdGhpcy4jZHJvcEhhbmRsZXIpO1xuXG4gICAgLyoqXG4gICAgICogSWYgc2hpcFNlbGVjdG9yIGlzIG51bGwgdGhhdCBtZWFucyB0aGF0IHdlIGFyZSByZW5kZXJpbmcgdGhlIGJvYXJkXG4gICAgICogZm9yIGdhbWUgcGxheSBhbmQgd2UgRE8gTk9UIHdhbnQgdG8gcmVuZGVyIHNoaXAgcG9zaXRpb25zIG9uIHRoaXMgYm9hcmQuXG4gICAgICpcbiAgICAgKiBJZiBzaGlwU2VsZWN0b3IgaXMgbm90IG51bGwgdGhlbiB3ZSB3YW50IHRvIHNob3cgdGhlIHNoaXAgcG9zaXRpb25zLlxuICAgICAqIFdlIHdhbnQgdGhlbSBzbyBzZWUgdGhlaXIgc2hpcHMgYmVjYXVzZSB0aGlzIGJvYXJkIGlzIGJlaW5nIHJlbmRlcmVkIGZvclxuICAgICAqIHRoZSBwbGF5ZXIgdG8gZHJhZyBhbmQgZHJvcCB0aGVpciBzaGlwcyBvbnRvIGl0LlxuICAgICAqL1xuICAgIGlmIChzaGlwU2VsZWN0b3IgIT0gbnVsbCkge1xuICAgICAgdGhpcy50b2dnbGVTaGlwUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICAvLyBDb2xvciBpbiB0aGlzIHNxdWFyZSBpZiB0aGVyZSBpcyBhIHNoaXAgb24gaXQuXG4gIHRvZ2dsZVNoaXBQb3NpdGlvbigpIHtcbiAgICBpZiAodGhpcy5nYW1lQm9hcmQuaXNTaGlwUG9zaXRpb24odGhpcy5jb29yZHMpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmlsbC1zaGlwLXBvc2l0aW9uXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZpbGwoYm9vbGVhbikge1xuICAgIGlmIChib29sZWFuKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmlsbC1zaGlwLWhpdFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZpbGwtbWlzc2VkLXN0cmlrZVwiKTtcbiAgICB9XG4gIH1cblxuICAjZHJhZ292ZXJfaGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBnZXRzIGNhbGxlZCB3aGVuIGEgdXNlciBkcm9wcyBhIHNoaXAgb250byB0aGUgYm9hcmQuXG4gICAqL1xuICAjZHJvcF9oYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc2hpcEVsZW1lbnRJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO1xuICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzaGlwRWxlbWVudElkKTtcbiAgICBjb25zdCBzaGlwTmFtZSA9IHNoaXAuZGF0YXNldC5zaGlwTmFtZTtcbiAgICBjb25zdCBkcm9wQ29vcmRzID0gdGhpcy4jZ2VuZXJhdGVDb29yZHMoc2hpcCk7XG4gICAgaWYgKHRoaXMucGxhY2VTaGlwKGRyb3BDb29yZHMsIHNoaXBOYW1lKSkge1xuICAgICAgdGhpcy5zaGlwU2VsZWN0b3IucmVtb3ZlU2hpcChzaGlwRWxlbWVudElkKTtcbiAgICB9XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnJlY2VpdmVBdHRhY2spO1xuICAgIC8vIHRoaXMuI3RvZ2dsZVNoaXBQb3NpdGlvbigpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIC8vIFRoZSBjb29yZGluYXRlcyBhcmUgdmFsaWQgT05MWSBpZiB0aGV5IGhhdmVuJ3QgYmVlbiBzZWxlY3RlZCBiZWZvcmUuIFRoaXNcbiAgICAvLyBlbnN1cmVzIHRoYXQgeW91IGNhbm5vdCBzZWxlY3QgdGhlIHNhbWUgc3F1YXJlIG11bHRpcGxlIHRpbWVzLlxuICAgIGlmICh0aGlzLmdhbWVCb2FyZC5jb29yZElzVmFsaWQodGhpcy5jb29yZHMpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5yZWNlaXZlQXR0YWNrLCB7XG4gICAgICAgIG9uY2U6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImZpbGwtc2hpcC1wb3NpdGlvblwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBnZW5lcmF0ZXMgY29vcmRpbmF0ZXMgYmFzZWQgb24gd2hlcmUgYSBzaGlwIHdhcyBwbGFjZWQgb24gdGhlXG4gICAqIGJvYXJkLlxuICAgKlxuICAgKiBBIHNoaXAgaXMgY29uc3RydWN0ZWQgZnJvbSBtdWx0aXBsZSBzcXVhcmUgZGl2IGVsZW1lbnRzLiBBIHNoaXAgb2YgbGVuZ3RoIDNcbiAgICogd2lsbCBoYXZlIDMgZGl2cy4gVGhlIGZpcnN0IGRpdiBoYXMgYSBkYXRhIGF0dHJpYnV0ZSBvZiAwLCB0aGUgZm9sbG93aW5nXG4gICAqIGRpdiBoYXMgYSBkYXRhIGF0dHJpYnV0ZSBvZiAxLCBhbmQgc28gb24uIEEgdXNlciBwbGFjZXMgYSBzaGlwIG9uIHRoZSBib2FyZFxuICAgKiB2aWEgZHJhZy1hbmQtZHJvcC4gVGhlIHVzZXIgY2FuIHBpY2sgdGhlIHNoaXAgdXAgZnJvbSBkaXYgMCwgZGl2IDEsIG9yXG4gICAqIGRpdiAyIChiZWNhdXNlIHRoZSBzaGlwIGluIHRoaXMgZXhhbXBsZSBoYXMgYSBsZW5ndGggb2YgMykuIFdoZW4gdGhlIHVzZXJcbiAgICogcGxhY2VzIHRoZSBzaGlwIGRvd24sIHdlIG5lZWQgdG8ga25vdyB0aGUgY29vcmRpbmF0ZXMgZm9yIHRoZSBlbnRpcmUgc2hpcC5cbiAgICogV2Uga25vdyB3aGVyZSB0aGUgc2hpcCB3YXMgcGlja2VkIHVwIGZyb20sIHRoZSBsZW5ndGgsIHRoZSBvcmllbnRhdGlvbiwgYW5kXG4gICAqIHRoZSBjb29yZGluYXRlcyB3aGVyZSB0aGUgc2hpcCB3YXMgZHJvcHBlZC4gVXNpbmcgdGhlc2UgcGFyYW1ldGVycyB3ZSBjYW5cbiAgICogZGV0ZXJtaW5lIHRoZSBjb29yZGluYXRlcyBmb3IgZWFjaCBpbmRpdmlkdWFsIHNxdWFyZSB0aGF0IG1ha2VzIHVwIHRoZSBza2lwLlxuICAgKiBUaGVzZSBjb29yZGluYXRlcyBhcmUgZ2VuZXJhdGVkIGFuZCByZXR1cm5lZCBmcm9tIHRoaXMgbWV0aG9kLlxuICAgKi9cbiAgI2dlbmVyYXRlQ29vcmRzKHNoaXApIHtcbiAgICBjb25zdCBzaGlwRHJvcHBlZEZyb20gPSBzaGlwLmRhdGFzZXQuY2xpY2tlZEJvZHk7XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBzaGlwLmRhdGFzZXQub3JpZW50YXRpb247XG4gICAgY29uc3QgbGVuZ3RoID0gc2hpcC5kYXRhc2V0Lmxlbmd0aDtcblxuICAgIGxldCB4QXhpc1JlZiA9IHRoaXMuY29vcmRzWzBdO1xuICAgIGxldCB5QXhpc1JlZiA9IHRoaXMuY29vcmRzWzFdO1xuICAgIGNvbnN0IHNoaXBDb29yZHMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBuZXdDb29yZHM7XG4gICAgICBpZiAoaSA8IHNoaXBEcm9wcGVkRnJvbSkge1xuICAgICAgICBuZXdDb29yZHMgPVxuICAgICAgICAgIG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCJcbiAgICAgICAgICAgID8gW3hBeGlzUmVmIC0gKHNoaXBEcm9wcGVkRnJvbSAtIGkpLCB5QXhpc1JlZl1cbiAgICAgICAgICAgIDogW3hBeGlzUmVmLCB5QXhpc1JlZiAtIChzaGlwRHJvcHBlZEZyb20gLSBpKV07XG4gICAgICB9IGVsc2UgaWYgKGkgPT0gc2hpcERyb3BwZWRGcm9tKSB7XG4gICAgICAgIG5ld0Nvb3JkcyA9IHRoaXMuY29vcmRzO1xuICAgICAgfSBlbHNlIGlmIChpID4gc2hpcERyb3BwZWRGcm9tKSB7XG4gICAgICAgIG5ld0Nvb3JkcyA9XG4gICAgICAgICAgb3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIlxuICAgICAgICAgICAgPyBbKyt4QXhpc1JlZiwgeUF4aXNSZWZdXG4gICAgICAgICAgICA6IFt4QXhpc1JlZiwgKyt5QXhpc1JlZl07XG4gICAgICB9XG5cbiAgICAgIHNoaXBDb29yZHMucHVzaChuZXdDb29yZHMpO1xuICAgIH1cbiAgICByZXR1cm4gc2hpcENvb3JkcztcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMucmVjZWl2ZUF0dGFjayk7XG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHRoaXMuI2RyYWdvdmVySGFuZGxlcik7XG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgdGhpcy4jZHJvcEhhbmRsZXIpO1xuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZSgpO1xuICB9XG5cbiAgcmVuZGVyKHBhcmVudE5vZGUpIHtcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcbiAgfVxufVxuIiwiaW1wb3J0IFwiLi9Ub2FzdC5jc3NcIjtcbmltcG9ydCB7IEh0bWxFbGVtZW50IH0gZnJvbSBcIkBic2hvd2VuL2h0bWxlbGVtZW50XCI7XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgbWVzc2FnZSB0aGF0IGdldHMgZGlzcGxheWVkIGF0IHRoZSB0b3Agb2YgdGhlIHNjcmVlbiB3aGVuZXZlciBhXG4gKiB1c2VyIG1ha2VzIGEgbW92ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9hc3Qge1xuICAjY29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGNsYXNzTGlzdDogW1widG9hc3QtbWVzc2FnZVwiXSxcbiAgfSk7XG5cbiAgI3RvYXN0VGV4dDtcblxuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBvcHRpb25zID0geyBwZXJzaXN0OiBmYWxzZSB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLiN0b2FzdFRleHQgPSBuZXcgSHRtbEVsZW1lbnQoeyB0eXBlOiBcInBcIiwgaW5uZXJUZXh0OiBtZXNzYWdlIH0pO1xuICAgIHRoaXMuI2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiN0b2FzdFRleHQpO1xuXG4gICAgdGhpcy5yZW1vdmUgPSB0aGlzLiNyZW1vdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIEF1dG9tYXRpY2FsbHkgcmVtb3ZlIHRoZSB0b2FzdCBtZXNzYWdlIGFmdGVyIDEgc2Vjb25kLlxuICAjcmVtb3ZlKCkge1xuICAgIHRoaXMuI2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy4jY29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgcmVuZGVyKHJvb3ROb2RlKSB7XG4gICAgcm9vdE5vZGUuYXBwZW5kQ2hpbGQodGhpcy4jY29udGFpbmVyKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMucGVyc2lzdCkgcmV0dXJuOyAvL0Rvbid0IHJlbW92ZSB0aGlzIHRvYXN0LlxuXG4gICAgLy8gUmVtb3ZlIHRoZSB0b2FzdCBtZXNzYWdlIGFmdGVyIDEuNSBzZWNvbmRzLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICB9LCAxNTAwKTtcbiAgfVxufVxuIiwiaW1wb3J0IFwiLi9wbGF5ZXJOYW1lQ29tcG9uZW50LmNzc1wiO1xuaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tIFwiQGJzaG93ZW4vaHRtbGVsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGRpc3BsYXlOYW1lLCBkaXNwbGF5UHJvcGVydGllcykge1xuICBjb25zdCBjb250YWluZXIgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgY2xhc3NMaXN0OiBbXCJkaXNwbGF5LW5hbWVcIl0sXG4gIH0pO1xuXG4gIGNvbnN0IGRpc3BsYXlUZXh0ID0gbmV3IEh0bWxFbGVtZW50KHsgdHlwZTogXCJwXCIsIGlubmVyVGV4dDogZGlzcGxheU5hbWUgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlUZXh0KTtcblxuICBpZiAoZGlzcGxheVByb3BlcnRpZXMuc2NyZWVuU2lkZSA9PSBcImxlZnRcIikge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1uYW1lLWxlZnQtc2lkZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbmFtZS1yaWdodC1zaWRlXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsImltcG9ydCBcIi4vcmFuZG9taXplci5jc3NcIjtcbmltcG9ydCB7IEh0bWxFbGVtZW50IH0gZnJvbSBcIkBic2hvd2VuL2h0bWxlbGVtZW50XCI7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGFsbG93cyBhIHBsYXllciB0byBjbGljayBhIGJ1dHRvbiBpbiBvcmRlciB0byByYW5kb21seSBwbGFjZVxuICogdGhlaXIgc2hpcHMgb24gdGhlIGJvYXJkLlxuICpcbiAqIHBsYWNlU2hpcHMgPSBBIGNhbGxiYWNrIHBhc3NlZCBpbiBmcm9tIFNoaXBTZWxlY3Rvci5qc1xuICogYWxsU2hpcHNQbGFjZWQgPSBBIGNhbGxiYWNrIHBhc3NlZCBpbiBmcm9tIFNoaXBTZWxlY3Rvci5qc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGxhY2VTaGlwcywgYWxsU2hpcHNQbGFjZWQpIHtcbiAgY29uc3QgY29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGlkOiBcInJhbmRvbWl6ZXItY29udGFpbmVyXCIsXG4gIH0pO1xuICBjb25zdCBwbGFjZVNoaXBzQnV0dG9uID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIGlubmVyVGV4dDogXCJQbGFjZSByYW5kb21seVwiLFxuICB9KTtcbiAgY29uc3QgcmVhZHlCdXR0b24gPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgaW5uZXJUZXh0OiBcIlJlYWR5XCIsXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcHNCdXR0b25IYW5kbGVyKCkge1xuICAgIHBsYWNlU2hpcHMoKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVhZHlCdXR0b24pO1xuICAgIHJlYWR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhbGxTaGlwc1BsYWNlZCwgeyBvbmNlOiB0cnVlIH0pO1xuICB9XG5cbiAgcGxhY2VTaGlwc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxhY2VTaGlwc0J1dHRvbkhhbmRsZXIpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZVNoaXBzQnV0dG9uKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuIiwiaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tIFwiQGJzaG93ZW4vaHRtbGVsZW1lbnRcIjtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGRpdiBmb3IgcGxhY2luZyB0aGUgc2hpcHMuIFRoZSBzaGlwcyBwbGFjZWQgaW4gdGhpc1xuICogZGl2IGFyZSB0aGUgc2hpcHMgdGhhdCB0aGUgdXNlciB3aWxsIGRyYWcgb250byB0aGVpciBnYW1lIGJvYXJkLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGlwc0NvbnRhaW5lcigpIHtcbiAgY29uc3QgX3NoaXBzQ29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGNsYXNzTGlzdDogW1wic2hpcHMtY29udGFpbmVyXCJdLFxuICB9KTtcblxuICBjb25zdCBfdGl0bGVJbnN0cnVjdGlvbnMgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgaWQ6IFwiaW5zdHJ1Y3Rpb25zLWNvbnRhaW5lclwiLFxuICB9KTtcblxuICBjb25zdCBfdGV4dCA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgdHlwZTogXCJwXCIsXG4gICAgaW5uZXJUZXh0OiBcIkRvdWJsZSBjbGljayBhIHNoaXAgdG8gcm90YXRlIGl0LlwiLFxuICB9KTtcblxuICBfc2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoX3RpdGxlSW5zdHJ1Y3Rpb25zKTtcbiAgX3RpdGxlSW5zdHJ1Y3Rpb25zLmFwcGVuZENoaWxkKF90ZXh0KTtcblxuICByZXR1cm4gX3NoaXBzQ29udGFpbmVyO1xufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vZG9tL1BsYXllclwiO1xuaW1wb3J0IHNoaXBDb29yZGluYXRlR2VuZXJhdG9yIGZyb20gXCIuLi91dGlsaXRpZXMvc2hpcENvb3JkaW5hdGVHZW5lcmF0b3JcIjtcbmltcG9ydCBDb29yZGluYXRlR2VuZXJhdG9yIGZyb20gXCIuLi91dGlsaXRpZXMvQ29vcmRpbmF0ZUdlbmVyYXRvclwiO1xuaW1wb3J0IFNtYXJ0R3Vlc3NlciBmcm9tIFwiLi4vdXRpbGl0aWVzL1NtYXJ0R3Vlc3NlclwiO1xuXG4vKipcbiAqIFRoZSBBSSBjbGFzcyBleHRlbmRzIHRoZSBQbGF5ZXIuanMgY2xhc3MgYW5kIGFkZHMgZnVuY3Rpb25hbGl0eSB0byBpdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQUkgZXh0ZW5kcyBQbGF5ZXIge1xuICAjc2hpcENvb3JkR2VuZXJhdG9yO1xuXG4gICNzbWFydEd1ZXNzZXI7XG5cbiAgI2Nvb3JkaW5hdGVHZW5lcmF0b3IgPSBuZXcgQ29vcmRpbmF0ZUdlbmVyYXRvcigpO1xuXG4gIC8qKlxuICAgKiB0b2dnbGVUdXJuID0gQSBjYWxsYmFjayBwYXNzZWQgaW4gZnJvbSBHYW1lLmpzXG4gICAqIHBhcmVudE5vZGUgPSBUaGUgY29udGFpbmVyIHdoZXJlIHRoaXMgY2xhc3MgaW5zZXJ0cyBpdHNlbGYgaW50byB0aGUgRE9NLlxuICAgKlxuICAgKiAgcmVjZWl2ZUF0dGFjayA9IENhbGxiYWNrIHBhc3NlZCBpbiBmcm9tIEdhbWUuanMuIFRoaXMgbWV0aG9kIGlzIGRlZmluZWQgaW5cbiAgICogdGhlIG9wcG9uZW50cyBjbGFzcy4gVGhlIG9wcG9uZW50IHdpbGwgcmVjZWl2ZSB0aGVpciBhdHRhY2tzIHZpYSB0aGlzXG4gICAqIG1ldGhvZCB3aGVuIGJhdHRsaW5nIGFnYWluc3QgdGhlIEFJLlxuICAgKi9cbiAgY29uc3RydWN0b3IodG9nZ2xlVHVybiwgcGFyZW50Tm9kZSwgZGlzcGxheVByb3BlcnRpZXMpIHtcbiAgICBzdXBlcihcIkNvbXB1dGVyXCIsIHRvZ2dsZVR1cm4sIHBhcmVudE5vZGUsIGRpc3BsYXlQcm9wZXJ0aWVzKTtcblxuICAgIHRoaXMuI3NoaXBDb29yZEdlbmVyYXRvciA9IHNoaXBDb29yZGluYXRlR2VuZXJhdG9yKCk7XG4gIH1cblxuICAvLyBvcHBvbmVudENhbGxiYWNrID0gQSBjYWxsYmFjayBwYXNzZWQgaW4gZnJvbSBHYW1lLmpzXG4gIHRha2VUdXJuKG9wcG9uZW50Q2FsbGJhY2spIHtcbiAgICBjb25zdCBjb29yZHMgPSB0aGlzLiNjcmVhdGVHdWVzc0Nvb3JkaW5hdGVzKCk7IC8vW2ludCwgaW50XVxuXG4gICAgLy8gW2Jvb2xlYW4sIHN0cmluZyAoc2hpcE5hbWUpLCBib29sZWFuXVxuICAgIGNvbnN0IFtpc0hpdCwgXywgaXNTdW5rXSA9IG9wcG9uZW50Q2FsbGJhY2soY29vcmRzKTtcblxuICAgIC8qKlxuICAgICAqIElmIHNtYXJ0R3Vlc3NlciBpcyBpbnN0YW50aWF0ZWQgdGhlbiB0aGF0IG1lYW5zIEFJIGlzIGZvY3VzZWQgb24gYSBhIHNoaXBcbiAgICAgKiBhbmQgaXMgY3VycmVudGx5IGF0dGFja2luZyBhIHNwZWNpZmljIHNoaXAuIFRoZSBzbWFydEd1ZXNzZXIgbmVlZHMgdG9cbiAgICAgKiByZWNlaXZlIGZlZWRiYWNrIGluIG9yZGVyIHRvIG1ha2UgaXRzIG5leHQgZ3Vlc3MuXG4gICAgICovXG4gICAgaWYgKHRoaXMuI3NtYXJ0R3Vlc3Nlcikge1xuICAgICAgdGhpcy4jc21hcnRHdWVzc2VyLnJlY2VpdmVGZWVkYmFjayhpc0hpdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgQUkganVzdCBoaXQgYSBzaGlwLCBhbmQgc21hcnRHdWVzc2VyIGlzIG5vdCBpbnN0YW50aWF0ZWQsIHRoZW4gdGhhdFxuICAgICAqIG1lYW5zIHRoYXQgdGhpcyBpcyBhbiBpbml0aWFsIGRpcmVjdCBoaXQuIEFJIHdpbGwgbm93IGluc3RhbnRpYXRlXG4gICAgICogc21hcnRHdWVzc2VyIGluIG9yZGVyIHRvIGZvY3VzIG9uIHRoaXMgc2hpcCBhbmQgdGFrZSBpdCBvdXQuIEFsbCBmdXR1cmVcbiAgICAgKiBndWVzc2VzIHdpbGwgY29tZSBmcm9tIHNtYXJ0R3Vlc3Nlci4gT25jZSB0aGUgc2hpcCBpcyB0YWtlbiBvdXQsXG4gICAgICogc21hcnRHdWVzc2VyIHdpbGwgYmUgcmVtb3ZlZCB1bnRpbCB0aGUgbmV4dCBkaXJlY3QgaGl0LlxuICAgICAqL1xuICAgIGlmIChpc0hpdCAmJiB0aGlzLiNzbWFydEd1ZXNzZXIgPT0gbnVsbCkge1xuICAgICAgdGhpcy4jc21hcnRHdWVzc2VyID0gbmV3IFNtYXJ0R3Vlc3Nlcih0cnVlLCBjb29yZHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBzaGlwIHRoYXQgQUkgaXMgZm9jdXNlZCBvbiB3YXMganVzdCBzdW5rLCB0aGVuIHdlIGNhbiByZW1vdmVcbiAgICAgKiBzbWFydEd1ZXNzZXIgc28gdGhhdCBBSSB3aWxsIHN0YXJ0IG1ha2luZyByYW5kb20gZ3Vlc3Nlcy4gV2hlbiBBSSBtYWtlc1xuICAgICAqIGEgZGlyZWN0IGhpdCBvbiBhbm90aGVyIHNoaXAsIHRoZW4gc21hcnRHdWVzc2VyIHdpbGwgYmUgaW5zdGFudGlhdGVkIGFuZFxuICAgICAqIEFJIHdpbGwgZm9jdXMgb24gdGFraW5nIG91dCB0aGF0IHNoaXAuXG4gICAgICovXG4gICAgaWYgKGlzU3Vuaykge1xuICAgICAgdGhpcy4jc21hcnRHdWVzc2VyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAjY3JlYXRlR3Vlc3NDb29yZGluYXRlcygpIHtcbiAgICBsZXQgZ3Vlc3M7XG5cbiAgICBpZiAodGhpcy4jc21hcnRHdWVzc2VyKSB7XG4gICAgICBndWVzcyA9IHRoaXMuI2dldFNtYXJ0R3Vlc3MoKTtcbiAgICAgIHRoaXMuI2Nvb3JkaW5hdGVHZW5lcmF0b3IuYWRkKGd1ZXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ3Vlc3MgPSB0aGlzLiNjb29yZGluYXRlR2VuZXJhdG9yLmdldENvb3JkcygpOyAvL1tpbnQsIGludF1cbiAgICB9XG5cbiAgICByZXR1cm4gZ3Vlc3M7XG4gIH1cblxuICAjZ2V0U21hcnRHdWVzcygpIHtcbiAgICBsZXQgZ3Vlc3M7XG4gICAgbGV0IGlzQ29vcmRWYWxpZDtcbiAgICBkbyB7XG4gICAgICBndWVzcyA9IHRoaXMuI3NtYXJ0R3Vlc3Nlci5nZXROZXh0R3Vlc3MoKTsgLy9baW50LCBpbnRdXG4gICAgICBpc0Nvb3JkVmFsaWQgPSB0aGlzLiN2YWxpZGF0ZUNvb3JkKGd1ZXNzKTtcbiAgICAgIGlmICh0aGlzLiNjb29yZGluYXRlR2VuZXJhdG9yLmNvbnRhaW5zKGd1ZXNzKSB8fCAhaXNDb29yZFZhbGlkKSB7XG4gICAgICAgIHRoaXMuI3NtYXJ0R3Vlc3Nlci5yZWNlaXZlRmVlZGJhY2soZmFsc2UpO1xuICAgICAgfVxuICAgIH0gd2hpbGUgKHRoaXMuI2Nvb3JkaW5hdGVHZW5lcmF0b3IuY29udGFpbnMoZ3Vlc3MpIHx8ICFpc0Nvb3JkVmFsaWQpO1xuICAgIHJldHVybiBndWVzcztcbiAgfVxuXG4gIC8vIGNvb3JkID0gW2ludCwgaW50XVxuICAjdmFsaWRhdGVDb29yZChjb29yZCkge1xuICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb29yZDtcbiAgICBpZiAocm93ID4gOSB8fCByb3cgPCAwIHx8IGNvbHVtbiA+IDkgfHwgY29sdW1uIDwgMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHBsYWNlU2hpcHMoY2FsbGJhY2spIHtcbiAgICBjb25zdCBfc2hpcHMgPSBbXG4gICAgICBcImNhcnJpZXJcIixcbiAgICAgIFwiYmF0dGxlc2hpcFwiLFxuICAgICAgXCJzdWJtYXJpbmVcIixcbiAgICAgIFwiY3J1aXNlclwiLFxuICAgICAgXCJkZXN0cm95ZXJcIixcbiAgICBdO1xuXG4gICAgX3NoaXBzLmZvckVhY2goKHNoaXBOYW1lKSA9PiB7XG4gICAgICBzdXBlci5wbGFjZVNoaXAoXG4gICAgICAgIHRoaXMuI3NoaXBDb29yZEdlbmVyYXRvci5nZXRTaGlwQ29vcmRzKHNoaXBOYW1lKSxcbiAgICAgICAgc2hpcE5hbWVcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBjYWxsYmFjaygpO1xuICB9XG59XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwXCI7XG5pbXBvcnQgY29vcmRpbmF0ZUxpc3QgZnJvbSBcIi4uL3V0aWxpdGllcy9jb29yZGluYXRlTGlzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xuICAvKipcbiAgICogV2UgbmVlZCB0byBzdG9yZSBzaGlwIGNvb3JkaW5hdGVzIGZvciBhIGNvdXBsZSByZWFzb25zLlxuICAgKiAg4oCiIFNoaXAgcGxhY2VtZW50IHZhbGlkYXRpb24gaS5lLiBzaGlwcyBjYW5ub3Qgb3ZlcmxhcC5cbiAgICogIOKAoiBUaGlzIGFjdHMgYXMgYSBjYWNoZSBmb3IgY2hlY2tpbmcgaWYgYSBwbGF5ZXJzIG1vdmUgbGFuZHMgb24gYSBzaGlwLlxuICAgKi9cbiAgI3NoaXBDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVMaXN0KCk7XG5cbiAgLyoqXG4gICAqIFN0b3JlIGEgcmVmZXJlbmNlIHRvIGFsbCB0aGUgc2hpcHMgb24gdGhpcyBib2FyZC5cbiAgICogIOKAoiBTbyB3ZSBjYW4gY2FsbCB0aGVpciBoaXQgbWV0aG9kcy5cbiAgICogIOKAoiBTbyB3ZSBjYW4gZGV0ZXJtaW5lIGlmIGEgZ2FtZSBpcyBvdmVyIHdoZW4gYWxsIHNoaXBzIGFyZSBzdW5rLlxuICAgKiAg4oCiIFNoaXBzIGFyZSBvbmx5IHB1c2hlZCB0byB0aGlzIGFycmF5LiBORVZFUiByZW1vdmVkLlxuICAgKi9cbiAgI2Zsb2F0aW5nU2hpcHMgPSBbXTtcbiAgLyoqXG4gICAqIFN0b3JlIHRoZSBudW1iZXIgb2Ygc3Vua2VuIHNoaXBzLlxuICAgKiAg4oCiIFNvIHdlIGNhbiB0ZWxsIHdoZW4gdGhlIGdhbWUgaXMgb3Zlci5cbiAgICovXG4gICNzdW5rZW5TaGlwcyA9IDA7XG5cbiAgLyoqXG4gICAqIFN0b3JlIGFueSBoaXRzIHRoYXQgaGF2ZSBiZWVuIHJlY2VpdmVkLlxuICAgKiAg4oCiIFNvIHdlIGNhbiBwcm9wZXJseSBkaXNwbGF5IHRoZSBib2FyZCBpbiB0aGUgRE9NLlxuICAgKi9cbiAgI2FsbFJlY2VpdmVkSGl0cyA9IGNvb3JkaW5hdGVMaXN0KCk7XG5cbiAgLy8gY29vcmRzID0gW1tpbnQsaW50XSwgLi4uW2ludCxpbnRdXVxuICAvLyBSZXR1cm4gdHJ1ZSBpZiBhIGNvb3JkaW5hdGUgaXMgb3V0IG9mIGJvdW5kcywgb3RoZXJ3aXNlIHJldHVybiBmYWxzZS5cbiAgI291dE9mQm91bmRzKGNvb3Jkcykge1xuICAgIHJldHVybiBjb29yZHMuc29tZSgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3QgW3JvdywgY29sXSA9IGNvb3JkaW5hdGU7XG4gICAgICByZXR1cm4gcm93IDwgMCB8fCByb3cgPiA5IHx8IGNvbCA8IDAgfHwgY29sID4gOTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEF0dGVtcHQgdG8gcGxhY2UgYSBzaGlwIG9uIHRoZSBib2FyZC5cbiAgLy8gUmV0dXJuIHRydWUgaXMgc3VjY2Vzc2Z1bCBvdGhlcndpc2UgcmV0dXJuIGZhbHNlLlxuICBwbGFjZVNoaXAoY29vcmRzLCBzaGlwTmFtZSkge1xuICAgIGlmIChcbiAgICAgIGNvb3Jkcy5sZW5ndGggPT09IDAgfHwgLy9FbnN1cmUgY29vcmRpbmF0ZXMgYXJlIHByb3ZpZGVkLlxuICAgICAgLy9FbnN1cmUgdGhlcmUgaXNuJ3QgYSBzaGlwIGFscmVhZHkgb24gdGhpcyBzcG90LlxuICAgICAgdGhpcy4jc2hpcENvb3JkaW5hdGVzLmNvbnRhaW5zKGNvb3JkcykgfHxcbiAgICAgIHRoaXMuI291dE9mQm91bmRzKGNvb3JkcykgfHwgLy9FbnN1cmUgY29vcmRpbmF0ZXMgYXJlIHdpdGhpbiBib3VuZHMuXG4gICAgICB0aGlzLnNoaXBzQXJlVG91Y2hpbmcoY29vcmRzKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLiNzaGlwQ29vcmRpbmF0ZXMuYWRkKGNvb3Jkcyk7XG4gICAgdGhpcy4jZmxvYXRpbmdTaGlwcy5wdXNoKG5ldyBTaGlwKGNvb3Jkcywgc2hpcE5hbWUpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdHJ1ZSBpZiBzaGlwcyBhcmUgdG91Y2hpbmcuXG4gICAqIFJldHVybiBmYWxzZSBpZiBzaGlwcyBhcmVuJ3QgdG91Y2hpbmcuXG4gICAqIGluY29taW5nU2hpcENvb3JkcyA9IFtbaW50LGludF0sW2ludCxpbnRdLC4uLltpbnQsaW50XV1cbiAgICovXG4gIHNoaXBzQXJlVG91Y2hpbmcoaW5jb21pbmdTaGlwQ29vcmRzKSB7XG4gICAgcmV0dXJuIGluY29taW5nU2hpcENvb3Jkcy5zb21lKChjb29yZGluYXRlKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy4jZmxvYXRpbmdTaGlwcy5zb21lKChzaGlwKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwLmdldEJ1ZmZlckNvb3JkcygpLmNvbnRhaW5zKFtjb29yZGluYXRlXSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGNvb3JkcyA9IFtpbnQsaW50XVxuICByZWNlaXZlQXR0YWNrKGNvb3Jkcykge1xuICAgIGlmICghdGhpcy4jYWxsUmVjZWl2ZWRIaXRzLmNvbnRhaW5zKFtjb29yZHNdKSlcbiAgICAgIHRoaXMuI2FsbFJlY2VpdmVkSGl0cy5hZGQoW2Nvb3Jkc10pO1xuXG4gICAgaWYgKHRoaXMuI3NoaXBDb29yZGluYXRlcy5jb250YWlucyhbY29vcmRzXSkpIHtcbiAgICAgIGZvciAoY29uc3Qgc2hpcCBvZiB0aGlzLiNmbG9hdGluZ1NoaXBzKSB7XG4gICAgICAgIGlmIChzaGlwLmhpdChjb29yZHMpKSB7XG4gICAgICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIHRoaXMuI3N1bmtlblNoaXBzKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBbdHJ1ZSwgc2hpcC5uYW1lLCBzaGlwLmlzU3VuaygpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbZmFsc2UsIG51bGwsIG51bGxdO1xuICB9XG5cbiAgLy8gUmV0dXJuIHRydWUgaWYgdGhlcmUgYXJlIGZsb2F0aW5nIHNoaXBzIG9uIHRoZSBib2FyZC5cbiAgLy8gUmV0dXJuIGZhbHNlIGlmIGFsbCBzaGlwcyBoYXZlIGJlZW4gc3Vuay5cbiAgaGFzRmxvYXRpbmdTaGlwcygpIHtcbiAgICByZXR1cm4gISh0aGlzLiNzdW5rZW5TaGlwcyA9PT0gdGhpcy4jZmxvYXRpbmdTaGlwcy5sZW5ndGgpO1xuICB9XG5cbiAgLy8gUmV0dXJuIHRydWUgaWYgdGhpcyBjb29yZGluYXRlIGhhcyBub3QgYmVlbiBzZWxlY3RlZC5cbiAgLy8gUmV0dXJuIGZhbHNlIGlmIHRoaXMgY29vcmRpbmF0ZSBoYXMgYmVlbiBwcmV2aW91c2x5IHNlbGVjdGVkLlxuICAvLyBjb29yZHMgPSBbaW50LCBpbnRdXG4gIGNvb3JkSXNWYWxpZChjb29yZHMpIHtcbiAgICByZXR1cm4gIXRoaXMuI2FsbFJlY2VpdmVkSGl0cy5jb250YWlucyhbY29vcmRzXSk7XG4gIH1cblxuICAvL1JldHVybiB0cnVlIGlmIGEgc2hpcCBpcyBsb2NhdGVkIG9uIHRoZSBwYXNzZWQgaW4gY29vcmRpbmF0ZXMuXG4gIC8vIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gc2hvdyBzaGlwcyBvbiB0aGUgYm9hcmQuXG4gIGlzU2hpcFBvc2l0aW9uKGNvb3Jkcykge1xuICAgIHJldHVybiB0aGlzLiNzaGlwQ29vcmRpbmF0ZXMuY29udGFpbnMoW2Nvb3Jkc10pO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy4jc2hpcENvb3JkaW5hdGVzID0gY29vcmRpbmF0ZUxpc3QoKTtcbiAgICB0aGlzLiNmbG9hdGluZ1NoaXBzID0gW107XG4gICAgdGhpcy4jc3Vua2VuU2hpcHMgPSAwO1xuICAgIHRoaXMuI2FsbFJlY2VpdmVkSGl0cyA9IGNvb3JkaW5hdGVMaXN0KCk7XG4gIH1cbn1cbiIsImltcG9ydCBjb29yZGluYXRlTGlzdCBmcm9tIFwiLi4vdXRpbGl0aWVzL2Nvb3JkaW5hdGVMaXN0XCI7XG5pbXBvcnQgZ2V0QnVmZmVyQ29vcmRzIGZyb20gXCIuLi91dGlsaXRpZXMvZ2V0QnVmZmVyQ29vcmRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICAjbGVuZ3RoO1xuICAjaGl0cyA9IDA7XG4gICNzaGlwQ29vcmRzO1xuICAjbmFtZTtcblxuICBjb25zdHJ1Y3Rvcihjb29yZHMsIHNoaXBOYW1lKSB7XG4gICAgdGhpcy4jbmFtZSA9IHNoaXBOYW1lO1xuXG4gICAgaWYgKGNvb3JkcyAhPSBudWxsKSB7XG4gICAgICB0aGlzLiNsZW5ndGggPSBjb29yZHMubGVuZ3RoO1xuICAgICAgdGhpcy4jc2hpcENvb3JkcyA9IGNvb3JkaW5hdGVMaXN0KGNvb3Jkcyk7XG4gICAgICB0aGlzLmdldEJ1ZmZlckNvb3JkcyA9IGdldEJ1ZmZlckNvb3Jkcy5iaW5kKHRoaXMsIHRoaXMuI3NoaXBDb29yZHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNsZW5ndGggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmhpdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuaXNTdW5rID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiNuYW1lO1xuICB9XG5cbiAgLy9BdHRlbXB0IGEgaGl0IG9uIHRoaXMgc2hpcC5cbiAgaGl0KGNvb3Jkcykge1xuICAgIGlmICh0aGlzLiNoaXRzICE9IHRoaXMuI2xlbmd0aCAmJiB0aGlzLiNzaGlwQ29vcmRzLmNvbnRhaW5zKFtjb29yZHNdKSkge1xuICAgICAgdGhpcy4jc2hpcENvb3Jkcy5yZW1vdmUoY29vcmRzKTtcbiAgICAgIHRoaXMuI2hpdHMrKztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2xlbmd0aCA9PT0gdGhpcy4jaGl0cztcbiAgfVxufVxuIiwiaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tIFwiQGJzaG93ZW4vaHRtbGVsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBpZDogXCJhcHBcIixcbiAgICBjbGFzc0xpc3Q6IFtcIm1haW4tbWVudVwiXSxcbiAgfSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5hcHBlbmRDaGlsZChyb290KTtcbiAgcmV0dXJuIHJvb3Q7XG59KSgpO1xuIiwiaW1wb3J0IGNvb3JkaW5hdGVMaXN0IGZyb20gXCIuL2Nvb3JkaW5hdGVMaXN0LmpzXCI7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgZ2VuZXJhdGluZyBhIHVuaXF1ZSBjb29yZGluYXRlLiBUaGF0cyBhbGwgdGhhdFxuICogdGhpcyBjbGFzcyBkb2VzLiBZb3Ugd2lsbCB1c2UgdGhlIG1ldGhvZCBnZXRDb29yZHMoKSB0byBnZXQgYSByYW5kb21cbiAqIFtpbnQsaW50XSBjb29yZGluYXRlLiBUaGlzIGNvb3JkaW5hdGUgd2lsbCBiZSB1bmlxdWUgaW4gdGhhdCBpdCB3aWxsIG5vdCBoYXZlXG4gKiBiZWVuIHJldHVybmVkIHR3aWNlIGJ5IHRoZSBzYW1lIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MuXG4gKlxuICogVXNlIHRoZSBtZXRob2QgYWRkKCkgaWYgeW91IGdlbmVyYXRlIGEgY29vcmRpbmF0ZSBvdXRzaWRlIG9mIHRoaXMgY2xhc3MgYW5kXG4gKiB3YW50IHRoaXMgY2xhc3MgdG8ga25vdyBhYm91dCB0aGF0IGNvb3JkaW5hdGUgc28gdGhhdCB5b3Ugd2lsbCBub3QgcmVjZWl2ZVxuICogdGhhdCBjb29yZGluYXRlIGJhY2sgZnJvbSB0aGlzIGNsYXNzLlxuICpcbiAqIFVzZSB0aGUgbWV0aG9kIGNvbnRhaW5zKCkgaW4gb3JkZXIgdG8gc2VlIGlmIHRoaXMgY2xhc3MgaGFzIGFscmVhZHkgZ2VuZXJhdGVkXG4gKiB0aGF0IGNvb3JkaW5hdGUuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29vcmRpbmF0ZUdlbmVyYXRvciB7XG4gIC8qKlxuICAgKiBTdG9yZSBhIHJlZmVyZW5jZSB0byBjb29yZGluYXRlcyBhbHJlYWR5IHVzZWQuXG4gICAqIFdlIHdhbnQgdG8gZ2VuZXJhdGUgbmV3LCB1bmlxdWUsIGNvb3JkaW5hdGVzIGV2ZXJ5IHRpbWUuXG4gICAqL1xuICAjdXNlZENvb3JkaW5hdGVzID0gY29vcmRpbmF0ZUxpc3QoKTtcblxuICAvKipcbiAgICogVGhlcmUgYXJlIG9ubHkgMTAwIHBvc3NpYmxlIGNvb3JkaW5hdGVzIG9uIHRoZSBnYW1lIGJvYXJkLiBUaGlzIG1lYW5zIHRoZXJlXG4gICAqIGFyZSBvbmx5IDEwMCBwb3NzaWJsZSB1bmlxdWUgY29vcmRpbmF0ZXMgdGhhdCB0aGlzIGNsYXNzIGlzIGFsbG93ZWQgdG9cbiAgICogZ2VuZXJhdGUuIFdlIG5lZWQgdG8ga2VlcCB0cmFjayBvZiBob3cgbWFueSB0aW1lcyB3ZSBoYXZlIGhhZCB0byByZWdlbmVyYXRlXG4gICAqIGEgY29vcmRpbmF0ZSBiZWNhdXNlIGl0IHdhcyBhbHJlYWR5IHVzZWQuIElmIHdlIGhhdmUgaGFkIHRvIHJlZ2VuZXJhdGVcbiAgICogY29vcmRpbmF0ZXMgMTAwIHRpbWVzIHRoZW4gdGhhdCBtZWFucyBvbmUgb2YgdHdvIHRoaW5ncyAtXG4gICAqXG4gICAqIEEpIEFJIGlzIG1ha2luZyBpdHMgZmluYWwgZ3Vlc3Mgd2hpY2ggaXMgdGhlIGxhc3QgcG9zc2libGUgY29vcmRpbmF0ZSBvblxuICAgKiB0aGUgYm9hcmQuIFZlcnkgdW5saWtlbHksIGJ1dCBzdGlsbCBwb3NzaWJsZS5cbiAgICogLS0gT1IgLS1cbiAgICogQikgVGhlcmUgaXMgYW4gdW5rbm93biBidWcgaW4gdGhpcyBjbGFzcy5cbiAgICovXG4gICNnZW5lcmF0aW9uQ291bnQgPSAwO1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBhIHNldCBvZiBbcm93LGNvbHVtbl0gY29vcmRpbmF0ZXMuXG4gICAqIHJldHVybnMgYW4gYXJyYXkgcG9wdWxhdGVkIHdpdGggdHdvIGludHMgYmV0d2VlbiAwLDkgaW5jbHVzaXZlLlxuICAgKiBleGFtcGxlIHJldHVybjogWzAsOV0gb3IgWzEsNV0gZXRjLlxuICAgKi9cbiAgZ2V0Q29vcmRzKCkge1xuICAgIC8qKlxuICAgICAqIElmICNnZW5lcmF0aW9uQ291bnQgaXMgMTAwIHRoZW4gZXhpdCB0aGlzIG1ldGhvZC4gVGhlcmUgYXJlIG5vIG1vcmVcbiAgICAgKiB1bmlxdWUgY29vcmRpbmF0ZSB0byBiZSBnZW5lcmF0ZWQuXG4gICAgICovXG4gICAgaWYgKHRoaXMuI2dlbmVyYXRpb25Db3VudCA+PSAxMDApIHJldHVybjtcblxuICAgIC8vIGNyZWF0ZSB0aGUgaW5pdGlhbCBjb29yZGluYXRlLlxuICAgIGxldCBjb29yZGluYXRlID0gW3RoaXMuI2dldFJhbmRvbUludCgpLCB0aGlzLiNnZXRSYW5kb21JbnQoKV07XG5cbiAgICAvKipcbiAgICAgKiBJZiBib3RoIG9mIHRoZXNlIGNvbmRpdGlvbnMgYXJlIHRydWUsIHRoZW4gdGhlIGxvb3AgZ2V0cyBpbml0aWF0ZWQgaW5cbiAgICAgKiBvcmRlciB0byBtYWtlIGFub3RoZXIgZ3Vlc3MgYXQgc29tZSByYW5kb20gY29vcmRpbmF0ZXMuXG4gICAgICovXG4gICAgbGV0IGNvb3JkaW5hdGVBbHJlYWR5R3Vlc3NlZCA9IHRoaXMuI3VzZWRDb29yZGluYXRlcy5jb250YWlucyhbY29vcmRpbmF0ZV0pO1xuICAgIGNvbnN0IG5vdE91dE9mQ29vcmRpbmF0ZXMgPSB0aGlzLiNnZW5lcmF0aW9uQ291bnQgPCAxMDA7XG4gICAgd2hpbGUgKGNvb3JkaW5hdGVBbHJlYWR5R3Vlc3NlZCAmJiBub3RPdXRPZkNvb3JkaW5hdGVzKSB7XG4gICAgICBjb29yZGluYXRlID0gW3RoaXMuI2dldFJhbmRvbUludCgpLCB0aGlzLiNnZXRSYW5kb21JbnQoKV07XG4gICAgICBjb29yZGluYXRlQWxyZWFkeUd1ZXNzZWQgPSB0aGlzLiN1c2VkQ29vcmRpbmF0ZXMuY29udGFpbnMoW2Nvb3JkaW5hdGVdKTtcbiAgICB9XG5cbiAgICArK3RoaXMuI2dlbmVyYXRpb25Db3VudDtcblxuICAgIHRoaXMuI3VzZWRDb29yZGluYXRlcy5hZGQoW2Nvb3JkaW5hdGVdKTtcblxuICAgIHJldHVybiBjb29yZGluYXRlO1xuICB9XG5cbiAgLy8gUmV0dXJuIGFuIGludCBiZXR3ZWVuIDAgYW5kIDkgKGluY2x1c2l2ZSBvZiAwIGFuZCA5KS5cbiAgI2dldFJhbmRvbUludCgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICB9XG5cbiAgLy8gUmVzZXQgdGhlIGNvdW50IHRvIDAgYW5kIHRoZSBjb29yZGluYXRlIGxpc3QgdG8gYSBuZXcgbGlzdC5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy4jdXNlZENvb3JkaW5hdGVzID0gY29vcmRpbmF0ZUxpc3QoKTtcbiAgICB0aGlzLiNnZW5lcmF0aW9uQ291bnQgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHNldCBvZiBjb29yZGluYXRlcyB0byB0aGUgbGlzdCBvZiBndWVzc2VkIGNvb3JkaW5hdGVzLiBUaGlzIGlzXG4gICAqIHVzZWZ1bCB3aGVuIHdlIGtub3cgb3VyIG5leHQgZ3Vlc3MgYW5kIHdlIGRvbid0IG5lZWQgdG8gdXNlIHRoZSByYW5kb21cbiAgICogY29vcmRpbmF0ZSBnZW5lcmF0b3IuIEV2ZW4gdGhvdWdoIHdlIGtub3cgb3VyIG5leHQgZ3Vlc3MsIHdlIHN0aWxsIG5lZWQgdG9cbiAgICogdGVsbCB0aGlzIGNsYXNzIGFib3V0IHRoYXQgZ3Vlc3MuIFRoaXMgd2F5IHRoaXMgY2xhc3MgZG9lc24ndCBndWVzcyB0aGF0XG4gICAqIHNhbWUgY29vcmRpbmF0ZSBsYXRlciBvbi5cbiAgICogY29vcmRzID0gW2ludCwgaW50XVxuICAgKi9cbiAgYWRkKGNvb3Jkcykge1xuICAgIGlmICh0aGlzLiN1c2VkQ29vcmRpbmF0ZXMuY29udGFpbnMoW2Nvb3Jkc10pKSByZXR1cm4gZmFsc2U7XG4gICAgdGhpcy4jdXNlZENvb3JkaW5hdGVzLmFkZChbY29vcmRzXSk7XG4gICAgKyt0aGlzLiNnZW5lcmF0aW9uQ291bnQ7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb250YWlucyhjb29yZHMpIHtcbiAgICByZXR1cm4gdGhpcy4jdXNlZENvb3JkaW5hdGVzLmNvbnRhaW5zKFtjb29yZHNdKTtcbiAgfVxufVxuIiwiaW1wb3J0IGFycmF5RXF1YWxpdHkgZnJvbSBcIi4vYXJyYXlFcXVhbGl0eVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbWFydEd1ZXNzZXIge1xuICAjaW5pdGlhbERpcmVjdEhpdDtcbiAgI2xhc3REaXJlY3RIaXQ7XG4gICNwcmV2aW91c0d1ZXNzO1xuICAjb3JpZW50YXRpb247XG4gICNndWVzc0RpcmVjdGlvbiA9IDE7XG4gICNkZXRlcm1pbmVPcmllbnRhdGlvbkd1ZXNzZXM7XG5cbiAgY29uc3RydWN0b3IoaXNIaXQsIGNvb3Jkcykge1xuICAgIHRoaXMuaXNIaXQgPSBpc0hpdDtcbiAgICB0aGlzLiNpbml0aWFsRGlyZWN0SGl0ID0gY29vcmRzO1xuICAgIHRoaXMuI2RldGVybWluZU9yaWVudGF0aW9uR3Vlc3NlcyA9IHRoaXMuI2RldGVybWluZU9yaWVudGF0aW9uQ2xvc3VyZSgpO1xuICB9XG5cbiAgI2RldGVybWluZU9yaWVudGF0aW9uQ2xvc3VyZSA9ICgpID0+IHtcbiAgICBsZXQgcG9pbnRlciA9IDA7XG4gICAgY29uc3QgW3JvdywgY29sdW1uXSA9IHRoaXMuI2luaXRpYWxEaXJlY3RIaXQ7XG4gICAgY29uc3QgZ3Vlc3NlcyA9IFtdO1xuICAgIGd1ZXNzZXMucHVzaChbcm93ICsgMSwgY29sdW1uXSk7XG4gICAgZ3Vlc3Nlcy5wdXNoKFtyb3cgLSAxLCBjb2x1bW5dKTtcbiAgICBndWVzc2VzLnB1c2goW3JvdywgY29sdW1uICsgMV0pO1xuICAgIGd1ZXNzZXMucHVzaChbcm93LCBjb2x1bW4gLSAxXSk7XG5cbiAgICByZXR1cm4gKCkgPT4gZ3Vlc3Nlc1twb2ludGVyKytdO1xuICB9O1xuXG4gICNndWVzc0RpcmVjdGlvbkNoYW5nZWQoKSB7XG4gICAgaWYgKCFhcnJheUVxdWFsaXR5KHRoaXMuI3ByZXZpb3VzR3Vlc3MsIHRoaXMuI2xhc3REaXJlY3RIaXQpKSB7XG4gICAgICB0aGlzLiNndWVzc0RpcmVjdGlvbiA9IC0xO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAjbGFzdFZhbGlkQ29vcmQoKSB7XG4gICAgaWYgKHRoaXMuI2d1ZXNzRGlyZWN0aW9uQ2hhbmdlZCgpKSB7XG4gICAgICByZXR1cm4gdGhpcy4jaW5pdGlhbERpcmVjdEhpdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuI2xhc3REaXJlY3RIaXQgfHwgdGhpcy4jaW5pdGlhbERpcmVjdEhpdDtcbiAgICB9XG4gIH1cblxuICAjZGV0ZXJtaW5lT3JpZW50YXRpb24oKSB7XG4gICAgaWYgKCEodGhpcy4jaW5pdGlhbERpcmVjdEhpdCAmJiB0aGlzLiNsYXN0RGlyZWN0SGl0KSkgcmV0dXJuO1xuICAgIGNvbnN0IFtyb3cxLCBjb2x1bW4xXSA9IHRoaXMuI2luaXRpYWxEaXJlY3RIaXQ7XG4gICAgY29uc3QgW3JvdzIsIGNvbHVtbjJdID0gdGhpcy4jbGFzdERpcmVjdEhpdDtcblxuICAgIGlmIChyb3cxID4gcm93MiB8fCByb3cxIDwgcm93Mikge1xuICAgICAgdGhpcy4jb3JpZW50YXRpb24gPSBcInZlcnRpY2FsXCI7XG4gICAgfSBlbHNlIGlmIChjb2x1bW4xID4gY29sdW1uMiB8fCBjb2x1bW4xIDwgY29sdW1uMikge1xuICAgICAgdGhpcy4jb3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIjtcbiAgICB9XG4gIH1cblxuICAvLyBpc0hpdCA9IGJvb2xlYW5cbiAgcmVjZWl2ZUZlZWRiYWNrKGlzSGl0KSB7XG4gICAgaWYgKGlzSGl0KSB7XG4gICAgICB0aGlzLiNsYXN0RGlyZWN0SGl0ID0gdGhpcy4jcHJldmlvdXNHdWVzcztcbiAgICB9XG4gIH1cblxuICBnZXROZXh0R3Vlc3MoKSB7XG4gICAgLyoqXG4gICAgICogSWYgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBzaGlwIGhhc24ndCBiZWVuIGRldGVybWluZSwgdHJ5IHRvIGRldGVybWluZSBpdC5cbiAgICAgKiBUaGlzIHdpbGwgaGFwcGVuIHVudGlsIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgc2hpcCBpcyBmaWd1cmVkIG91dC5cbiAgICAgKi9cbiAgICBpZiAoIXRoaXMuI29yaWVudGF0aW9uKSB0aGlzLiNkZXRlcm1pbmVPcmllbnRhdGlvbigpO1xuXG4gICAgbGV0IG5leHRHdWVzcztcbiAgICBsZXQgcm93LCBjb2x1bW47XG4gICAgc3dpdGNoICh0aGlzLiNvcmllbnRhdGlvbikge1xuICAgICAgY2FzZSBcInZlcnRpY2FsXCI6XG4gICAgICAgIFtyb3csIGNvbHVtbl0gPSB0aGlzLiNsYXN0VmFsaWRDb29yZCgpO1xuICAgICAgICBuZXh0R3Vlc3MgPSBbcm93ICsgdGhpcy4jZ3Vlc3NEaXJlY3Rpb24sIGNvbHVtbl07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImhvcml6b250YWxcIjpcbiAgICAgICAgW3JvdywgY29sdW1uXSA9IHRoaXMuI2xhc3RWYWxpZENvb3JkKCk7XG4gICAgICAgIG5leHRHdWVzcyA9IFtyb3csIGNvbHVtbiArIHRoaXMuI2d1ZXNzRGlyZWN0aW9uXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBUaGlzIGdldHMgdHJpZ2dlcmVkIHdoZW4gd2UgYXJlIHN0aWxsIGRldGVybWluaW5nIG9yaWVudGF0aW9uXG4gICAgICAgIG5leHRHdWVzcyA9IHRoaXMuI2RldGVybWluZU9yaWVudGF0aW9uR3Vlc3NlcygpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy4jcHJldmlvdXNHdWVzcyA9IG5leHRHdWVzcztcbiAgICByZXR1cm4gbmV4dEd1ZXNzO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcnJheUVxdWFsaXR5KGFycmF5T25lLCBhcnJheVR3bykge1xuICBpZiAoYXJyYXlPbmUubGVuZ3RoICE9IGFycmF5VHdvLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gIHJldHVybiBhcnJheU9uZS5ldmVyeSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gYXJyYXlUd29baW5kZXhdID09PSBlbGVtZW50O1xuICB9KTtcbn1cbiIsIi8qKlxuICogVGhpcyBpcyBhIHV0aWxpdHkgbWV0aG9kIHRoYXQga2VlcHMgdHJhY2sgb2YgY29vcmRpbmF0ZXMuXG4gKlxuICogVXNlIHRoZSBhZGQoKSBtZXRob2QgdG8gYWRkIGNvb3JkaW5hdGVzIHRvIHRoZSBsaXN0LlxuICogVXNlIHRoZSBjb250YWlucygpIG1ldGhvZCB0byBzZWUgaWYgdGhpcyBsaXN0IGFscmVhZHkgY29udGFpbnMgdGhlIGNvb3JkaW5hdGVcbiAqIFVzZSB0aGUgcmVtb3ZlKCkgbWV0aG9kIHRvIHJlbW92ZSBhIGNvb3JkaW5hdGUgZnJvbSB0aGUgbGlzdC5cbiAqL1xuXG5jb25zdCBjb29yZGluYXRlTGlzdCA9IGZ1bmN0aW9uIChjb29yZHMpIHtcbiAgY29uc3QgX2Nvb3JkaW5hdGVzID0gY29vcmRzIHx8IFtdO1xuICBsZXQgX2xlbmd0aCA9IF9jb29yZGluYXRlcy5sZW5ndGg7XG5cbiAgLy8gY29vcmRzID0gW1tpbnQsIGludF0sW2ludCxpbnRdLCAuLi4sIFtpbnQsIGludF1dO1xuICBmdW5jdGlvbiBjb250YWlucyhjb29yZHMpIHtcbiAgICByZXR1cm4gY29vcmRzLnNvbWUoKGluY29taW5nQ29vcmQpID0+IHtcbiAgICAgIHJldHVybiBfY29vcmRpbmF0ZXMuc29tZSgoZXhpc3RpbmdDb29yZCkgPT4ge1xuICAgICAgICByZXR1cm4gaW5jb21pbmdDb29yZC5qb2luKFwiXCIpID09PSBleGlzdGluZ0Nvb3JkLmpvaW4oXCJcIik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGNvb3JkcyA9IFtbaW50LCBpbnRdLFtpbnQsaW50XSwgLi4uLCBbaW50LCBpbnRdXTtcbiAgZnVuY3Rpb24gYWRkKGNvb3Jkcykge1xuICAgIGNvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgX2Nvb3JkaW5hdGVzLnB1c2goY29vcmQpO1xuICAgICAgKytfbGVuZ3RoO1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gY29vcmRzID0gW2ludCxpbnRdXG4gIGZ1bmN0aW9uIHJlbW92ZShjb29yZHMpIHtcbiAgICBpZiAoIWNvbnRhaW5zKFtjb29yZHNdKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBfY29vcmRpbmF0ZXMuc29tZSgoY29vcmRpbmF0ZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChjb29yZGluYXRlLmpvaW4oXCJcIikgPT09IGNvb3Jkcy5qb2luKFwiXCIpKSB7XG4gICAgICAgIF9jb29yZGluYXRlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAtLV9sZW5ndGg7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWxsKCkge1xuICAgIHJldHVybiBfY29vcmRpbmF0ZXMuc2xpY2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlbmd0aCgpIHtcbiAgICByZXR1cm4gX2xlbmd0aDtcbiAgfVxuXG4gIHJldHVybiB7IGNvbnRhaW5zLCBhZGQsIHJlbW92ZSwgYWxsLCBsZW5ndGggfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvb3JkaW5hdGVMaXN0O1xuIiwiaW1wb3J0IGNvb3JkaW5hdGVMaXN0IGZyb20gXCIuL2Nvb3JkaW5hdGVMaXN0XCI7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhbiBpbnN0YW5jZSBvZiBjb29yZGluYXRlTGlzdC5qcywgcG9wdWxhdGVkIHdpdGggdGhlXG4gKiBjb29yZGluYXRlcyBzdXJyb3VuZGluZyB0aGUgc2hpcC4gVGhlc2UgYXJlIGNvb3JkaW5hdGVzIHRoYXQgb3RoZXIgc2hpcHNcbiAqIGNhbm5vdCBiZSBwbGFjZWQgb24uIEluIHRoaXMgZ2FtZSwgc2hpcHMgY2Fubm90IHRvdWNoXG4gKlxuICogc2hpcENvb3JkcyA9IEFuIGluc3RhbmNlIG9mIGNvb3JkaW5hdGVMaXN0LmpzLCBwb3B1bGF0ZWQgd2l0aCBhIHNoaXBzXG4gKiBjb29yZGluYXRlIHBvc2l0aW9uc1xuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhbiBpbnN0YW5jZSBvZiBjb29yZGluYXRlTGlzdC5qcywgcG9wdWxhdGVkIHdpdGggdGhlXG4gKiBjb29yZGluYXRlcyBhcm91bmQgYSBwYXJ0aWN1bGFyIHNoaXAgYWthIGJ1ZmZlciBjb29yZHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJ1ZmZlckNvb3JkcyhzaGlwQ29vcmRzKSB7XG4gIC8qKlxuICAgKiBpdGVyYXRlIHRocm91Z2ggZWFjaCBzaGlwQ29vcmQuXG4gICAqICAgd2UgYXJlIG9uIGN1cnJlbnRDb29yZC5cbiAgICogICBwdXNoIHRoZSB3ZXN0IGNvb3JkIGludG8gYnVmZmVyIGNvb3JkcyBpZiBpdHMgbm90IGluIHNoaXBcbiAgICogICBwdXNoIHRoZSBub3J0aCBjb29yZCBpbnRvIGJ1ZmZlciBjb29yZHMgaWYgaXRzIG5vdCBpbiBzaGlwXG4gICAqICAgcHVzaCB0aGUgZWFzdCBjb29yZCBpbnRvIGJ1ZmZlciBjb29yZHMgaWYgaXRzIG5vdCBpbiBzaGlwXG4gICAqICAgcHVzaCB0aGUgc291dGggY29vcmQgaW50byBidWZmZXIgY29vcmRzIGlmIGl0cyBub3QgaW4gc2hpcFxuICAgKiBuZXh0IGl0ZXJhdGlvblxuICAgKi9cblxuICBjb25zdCBidWZmZXJDb29yZHMgPSBjb29yZGluYXRlTGlzdCgpO1xuXG4gIHNoaXBDb29yZHMuYWxsKCkuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IFt5LCB4XSA9IGNvb3JkaW5hdGU7IC8veSA9PSBpbnQsIHggPT0gaW50XG5cbiAgICBpZiAoIXNoaXBDb29yZHMuY29udGFpbnMoW1t5LCB4IC0gMV1dKSkge1xuICAgICAgYnVmZmVyQ29vcmRzLmFkZChbW3ksIHggLSAxXV0pO1xuICAgIH1cblxuICAgIGlmICghc2hpcENvb3Jkcy5jb250YWlucyhbW3ksIHggKyAxXV0pKSB7XG4gICAgICBidWZmZXJDb29yZHMuYWRkKFtbeSwgeCArIDFdXSk7XG4gICAgfVxuXG4gICAgaWYgKCFzaGlwQ29vcmRzLmNvbnRhaW5zKFtbeSAtIDEsIHhdXSkpIHtcbiAgICAgIGJ1ZmZlckNvb3Jkcy5hZGQoW1t5IC0gMSwgeF1dKTtcbiAgICB9XG5cbiAgICBpZiAoIXNoaXBDb29yZHMuY29udGFpbnMoW1t5ICsgMSwgeF1dKSkge1xuICAgICAgYnVmZmVyQ29vcmRzLmFkZChbW3kgKyAxLCB4XV0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGJ1ZmZlckNvb3Jkcztcbn1cbiIsImltcG9ydCBjb29yZGluYXRlTGlzdCBmcm9tIFwiLi9jb29yZGluYXRlTGlzdFwiO1xuaW1wb3J0IENvb3JkaW5hdGVHZW5lcmF0b3IgZnJvbSBcIi4vQ29vcmRpbmF0ZUdlbmVyYXRvclwiO1xuaW1wb3J0IGdldEJ1ZmZlckNvb3JkcyBmcm9tIFwiLi9nZXRCdWZmZXJDb29yZHNcIjtcblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBnZW5lcmF0ZXMgdGhlIGNvb3JkaW5hdGVzIHRvIHJhbmRvbWx5IHBsYWNlIHNoaXBzIG9uIHRoZVxuICogZ2FtZSBib2FyZC4gVGhlIG9ubHkgcHVibGljIG1ldGhvZCBvbiB0aGlzIG1vZHVsZSBpcyBjYWxsZWQgZ2V0U2hpcENvb3JkcygpXG4gKiB3aGljaCBhY2NlcHRzIGEgc2hpcE5hbWUgKHN0cmluZykgYW5kIHJldHVybnMgYSBzZXQgb2YgY29vcmRpbmF0ZXMgdG8gcGxhY2VcbiAqIHRoYXQgc2hpcCBvbiB0aGUgZ2FtZSBib2FyZC4gVGhpcyBjbGFzcyBlbnN1cmVzIHRoYXQgYSBzaGlwIHdpbGwgbm90IG92ZXJsYXBcbiAqIG9uIHRvcCBvZiBhbm90aGVyIHNoaXAgYW5kIHRoYXQgYSBzaGlwIHdpbGwgbm90IGdvIG91dCBvZiB0aGUgYm91bmRzIG9mIHRoZVxuICogZ2FtZSBib2FyZC5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGlwQ29vcmRpbmF0ZUdlbmVyYXRvcigpIHtcbiAgY29uc3QgX3NoaXBDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVMaXN0KCk7XG4gIGNvbnN0IF9zaGlwQnVmZmVyQ29vcmRpbmF0ZXMgPSBjb29yZGluYXRlTGlzdCgpO1xuICBjb25zdCBjb29yZEdlbmVyYXRvciA9IG5ldyBDb29yZGluYXRlR2VuZXJhdG9yKCk7XG4gIGNvbnN0IF9nZXRCdWZmZXJDb29yZHMgPSBnZXRCdWZmZXJDb29yZHM7XG5cbiAgY29uc3QgX3NoaXBzID0ge1xuICAgIGNhcnJpZXI6IHsgbGVuZ3RoOiA1LCBvcmllbnRhdGlvbjogX2dldFJhbmRvbU9yaWVudGF0aW9uKCkgfSxcbiAgICBiYXR0bGVzaGlwOiB7IGxlbmd0aDogNCwgb3JpZW50YXRpb246IF9nZXRSYW5kb21PcmllbnRhdGlvbigpIH0sXG4gICAgY3J1aXNlcjogeyBsZW5ndGg6IDMsIG9yaWVudGF0aW9uOiBfZ2V0UmFuZG9tT3JpZW50YXRpb24oKSB9LFxuICAgIHN1Ym1hcmluZTogeyBsZW5ndGg6IDMsIG9yaWVudGF0aW9uOiBfZ2V0UmFuZG9tT3JpZW50YXRpb24oKSB9LFxuICAgIGRlc3Ryb3llcjogeyBsZW5ndGg6IDIsIG9yaWVudGF0aW9uOiBfZ2V0UmFuZG9tT3JpZW50YXRpb24oKSB9LFxuICB9O1xuXG4gIGZ1bmN0aW9uIF9nZXRSYW5kb21PcmllbnRhdGlvbigpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNoaXBDb29yZHMoc2hpcE5hbWUpIHtcbiAgICAvLyBFbnN1cmUgbm8gbGVmdG92ZXIgc3RhdGUgZnJvbSBwcmV2aW91cyBjYWxsLlxuICAgIGNvb3JkR2VuZXJhdG9yLnJlc2V0KCk7XG5cbiAgICAvLyBHZXQgdGhlIHNoaXAgZGV0YWlsc1xuICAgIGNvbnN0IHNoaXAgPSBfc2hpcHNbc2hpcE5hbWVdO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIGJlIHRoZSBmaW5hbCBjb29yZGluYXRlcyBmb3IgdGhpcyBwYXJ0aWN1bGFyIHNoaXAuXG4gICAgICogc2hpcENvb3JkcyA9IFtbaW50LCBpbnRdLCBbaW50LCBpbnRdLC4uLltpbnQsIGludF1dXG4gICAgICovXG4gICAgbGV0IHNoaXBDb29yZHM7XG5cbiAgICBkbyB7XG4gICAgICBzaGlwQ29vcmRzID0gX2dldFVuaXF1ZUNvb3JkaW5hdGUoKTtcblxuICAgICAgLy8gRXh0cmFjdCB0aGUgaW5pdGlhbCByYW5kb20gY29vcmRpbmF0ZXMgaW50byBzZXBhcmF0ZSB2YXJpYWJsZXMuXG4gICAgICBsZXQgW3JvdywgY29sdW1uXSA9IHNoaXBDb29yZHNbMF07XG5cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVmVydGljYWwgc2hpcHMgd2lsbCBiZSBwbGFjZWQgc3RhcnRpbmcgZnJvbSB0aGVpciBpbml0aWFsIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICogd2hpY2ggYXJlIGdlbmVyYXRlZCBpbiB0aGUgdmFyaWFibGUgc2hpcENvb3Jkcy4gRnJvbSB0aG9zZVxuICAgICAgICAgICAqIGNvb3JkaW5hdGVzLCB3ZSB3aWxsIGdvIG5vcnRoIHVudGlsIHdlIGVpdGhlciByZWFjaCB0aGUgZWRnZSBvZiB0aGVcbiAgICAgICAgICAgKiBib2FyZCBvciB1bnRpbCB3ZSBoYXZlIHBsYWNlZCB0aGUgZW50aXJlIHNoaXAuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBJZiB3ZSBoYXZlIHJlYWNoZWQgdGhlIGVkZ2Ugb2YgdGhlIGJvYXJkIHRoZW4gd2Ugc3RhcnQgZ29pbmcgc291dGgsXG4gICAgICAgICAgICogc3RhcnRpbmcgZnJvbSB0aGUgc291dGhlcm4gbW9zdCBjb29yZGluYXRlLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogRm9yIGV4YW1wbGU6IFNheSBzaGlwQ29vcmRzIGluaXRpYWxpemVzIHRvIFtbOCwwXV0gYW5kIHRoZSBsZW5ndGggb2ZcbiAgICAgICAgICAgKiAgICAgICAgICAgICAgdGhlIHNoaXAgaXMgNS5cbiAgICAgICAgICAgKiBBZnRlciBlYWNoIGxvb3AgaXRlcmF0aW9uLCBzaGlwQ29vcmRzIHdpbGwgbG9vayBsaWtlIHRoaXMuXG4gICAgICAgICAgICogQmVmb3JlIGl0ZXJhdGlvbiAxOiBzaGlwQ29vcmRzID0gW1s4LDBdXVxuICAgICAgICAgICAqIEFmdGVyIGl0ZXJhdGlvbiAxOiAgc2hpcENvb3JkcyA9IFtbOCwwXSwgWzksMF1dIC8vUmVhY2hlZCB0aGUgZWRnZVxuICAgICAgICAgICAqIEFmdGVyIGl0ZXJhdGlvbiAyOiAgc2hpcENvb3JkcyA9IFtbNywwXSwgWzgsMF0sIFs5LDBdXVxuICAgICAgICAgICAqIEFmdGVyIGl0ZXJhdGlvbiAzOiAgc2hpcENvb3JkcyA9IFtbNiwwXSwgWzcsMF0sIFs4LDBdLCBbOSwwXV1cbiAgICAgICAgICAgKiBBZnRlciBpdGVyYXRpb24gNDogIHNoaXBDb29yZHMgPSBbWzUsMF0sIFs2LDBdLCBbNywwXSwgWzgsMF0sIFs5LDBdXVxuICAgICAgICAgICAqXG4gICAgICAgICAgICogV2UgYXJlIGRvbmUgYmVjYXVzZSBzaGlwQ29vcmRzIGhhcyBhIGxlbmd0aCBvZiA1IHdoaWNoIGlzIHRoZSBsZW5ndGhcbiAgICAgICAgICAgKiBvZiB0aGUgc2hpcCB3ZSBhcmUgcGxhY2luZy4gc2hpcENvb3JkcyB3aWxsIGFsd2F5cyBiZSBlcXVhbCB0byB0aGVcbiAgICAgICAgICAgKiBsZW5ndGggb2YgdGhlIHNoaXAgd2UgYXJlIHBsYWNpbmcuXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKHJvdyArIDEgPCAxMCkge1xuICAgICAgICAgICAgc2hpcENvb3Jkcy51bnNoaWZ0KFsrK3JvdywgY29sdW1uXSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChyb3cgLSBpID49IDApIHtcbiAgICAgICAgICAgIHNoaXBDb29yZHMucHVzaChbcm93IC0gaSwgY29sdW1uXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNoaXAub3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSG9yaXpvbnRhbCBzaGlwcyB3aWxsIGJlIHBsYWNlZCBzdGFydGluZyBmcm9tIHRoZSBpbml0aWFsIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICogd2hpY2ggYXJlIGdlbmVyYXRlZCBpbiB0aGUgdmFyaWFibGUgc2hpcENvb3Jkcy4gRnJvbSB0aG9zZVxuICAgICAgICAgICAqIGNvb3JkaW5hdGVzLCB3ZSB3aWxsIGdvIGVhc3QgdW50aWwgd2UgZWl0aGVyIHJlYWNoIHRoZSBlZGdlIG9mIHRoZVxuICAgICAgICAgICAqIGJvYXJkIG9yIHVudGlsIHdlIGhhdmUgcGxhY2VkIHRoZSBlbnRpcmUgc2hpcC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIElmIHdlIGhhdmUgcmVhY2hlZCB0aGUgZWRnZSBvZiB0aGUgYm9hcmQgdGhlbiB3ZSBzdGFydCBnb2luZyB3ZXN0LFxuICAgICAgICAgICAqIHN0YXJ0aW5nIGZyb20gdGhlIHdlc3Rlcm4gbW9zdCBjb29yZGluYXRlLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogRm9yIGV4YW1wbGU6IFNheSBzaGlwQ29vcmRzIGluaXRpYWxpemVzIHRvIFtbMCw4XV0gYW5kIHRoZSBsZW5ndGggb2ZcbiAgICAgICAgICAgKiAgICAgICAgICAgICAgdGhlIHNoaXAgaXMgNS5cbiAgICAgICAgICAgKiBBZnRlciBlYWNoIGxvb3AgaXRlcmF0aW9uLCBzaGlwQ29vcmRzIHdpbGwgbG9vayBsaWtlIHRoaXMuXG4gICAgICAgICAgICogQmVmb3JlIGl0ZXJhdGlvbiAxOiBzaGlwQ29vcmRzID0gW1swLDhdXVxuICAgICAgICAgICAqIEFmdGVyIGl0ZXJhdGlvbiAxOiAgc2hpcENvb3JkcyA9IFtbMCw4XSwgWzAsOV1dIC8vUmVhY2hlZCB0aGUgZWRnZVxuICAgICAgICAgICAqIEFmdGVyIGl0ZXJhdGlvbiAyOiAgc2hpcENvb3JkcyA9IFtbMCw3XSwgWzAsOF0sIFswLDldXVxuICAgICAgICAgICAqIEFmdGVyIGl0ZXJhdGlvbiAzOiAgc2hpcENvb3JkcyA9IFtbMCw2XSwgWzAsN10sIFswLDhdLCBbMCw5XV1cbiAgICAgICAgICAgKiBBZnRlciBpdGVyYXRpb24gNDogIHNoaXBDb29yZHMgPSBbWzAsNV0sIFswLDZdLCBbMCw3XSwgWzAsOF0sIFswLDldXVxuICAgICAgICAgICAqXG4gICAgICAgICAgICogV2UgYXJlIGRvbmUgYmVjYXVzZSBzaGlwQ29vcmRzIGhhcyBhIGxlbmd0aCBvZiA1IHdoaWNoIGlzIHRoZSBsZW5ndGhcbiAgICAgICAgICAgKiBvZiB0aGUgc2hpcCB3ZSBhcmUgcGxhY2luZy4gc2hpcENvb3JkcyB3aWxsIGFsd2F5cyBiZSBlcXVhbCB0byB0aGVcbiAgICAgICAgICAgKiBsZW5ndGggb2YgdGhlIHNoaXAgd2UgYXJlIHBsYWNpbmcuXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKGNvbHVtbiArIDEgPCAxMCkge1xuICAgICAgICAgICAgc2hpcENvb3Jkcy5wdXNoKFtyb3csICsrY29sdW1uXSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gLSBpID49IDApIHtcbiAgICAgICAgICAgIHNoaXBDb29yZHMudW5zaGlmdChbcm93LCBjb2x1bW4gLSBpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSB3aGlsZSAoXG4gICAgICAvKipcbiAgICAgICAqIElmIF9zaGlwQ29vcmRpbmF0ZXMgY29udGFpbnMgc2hpcENvb3JkcyB0aGVuIHdlIG5lZWQgdG8gc3RhcnQgb3ZlclxuICAgICAgICogYmVjYXVzZSB0aGVyZSBpcyBhbHJlYWR5IGEgc2hpcCBhdCB0aGUgc3BvdCB3aGVyZSB0aGlzIHNoaXAgaXMgdHJ5aW5nXG4gICAgICAgKiB0byBiZSBwbGFjZWQuXG4gICAgICAgKi9cbiAgICAgIF9zaGlwQ29vcmRpbmF0ZXMuY29udGFpbnMoc2hpcENvb3JkcykgfHxcbiAgICAgIC8qKlxuICAgICAgICogSWYgX3NoaXBCdWZmZXJDb29yZGluYXRlcyBjb250YWlucyBzaGlwQ29vcmRzIHRoZW4gd2UgbmVlZCB0byBzdGFydFxuICAgICAgICogb3ZlciBiZWNhdXNlIHRoYXQgbWVhbnMgdGhpcyBzaGlwIGlzIHRyeWluZyB0byBiZSBwbGFjZWQgb24gdGhlIGJvYXJkXG4gICAgICAgKiBpbiBhIHNwb3Qgd2hlcmUgaXQgd291bGQgdG91Y2ggYW5vdGhlciBzaGlwLlxuICAgICAgICovXG4gICAgICBfc2hpcEJ1ZmZlckNvb3JkaW5hdGVzLmNvbnRhaW5zKHNoaXBDb29yZHMpXG4gICAgKTtcblxuICAgIC8vIFN0b3JlIHRoZSBjb29yZHMgc28gdGhhdCBmdXR1cmUgc2hpcHMgY2FudCBiZSBwbGFjZWQgaGVyZS5cbiAgICBfc2hpcENvb3JkaW5hdGVzLmFkZChzaGlwQ29vcmRzKTtcblxuICAgIC8qKlxuICAgICAqICBTdG9yZSB0aGUgYnVmZmVyIGNvb3JkaW5hdGVzIHNvIHRoYXQgZnV0dXJlIHNoaXBzIGNhbnQgYmUgcGxhY2VkIHdoZXJlXG4gICAgICogdGhleSdyZSB0b3VjaGluZyB0aGlzIHNoaXAuXG4gICAgICovXG4gICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gY29vcmRpbmF0ZUxpc3Qoc2hpcENvb3Jkcyk7XG4gICAgY29uc3QgYnVmZmVyQ29vcmRzID0gZ2V0QnVmZmVyQ29vcmRzKHNoaXBDb29yZGluYXRlcykuYWxsKCk7XG4gICAgX3NoaXBCdWZmZXJDb29yZGluYXRlcy5hZGQoYnVmZmVyQ29vcmRzKTtcblxuICAgIHJldHVybiBzaGlwQ29vcmRzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHVuaXF1ZSBwYWlyIG9mIGNvb3JkaW5hdGVzLiBUaGUgbG9vcCBjb250aW51ZXMgdW50aWwgdGhlIGluaXRpYWxcbiAgICogY29vcmRpbmF0ZXMgYXJlIGNvb3JkaW5hdGVzIHRoYXQgaGF2ZSBub3QgYmVlbiBwcmV2aW91c2x5IHVzZWQuXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdHdvIGludHMuXG4gICAqIFJldHVybnM6IFtbaW50LCBpbnRdXVxuICAgKi9cbiAgZnVuY3Rpb24gX2dldFVuaXF1ZUNvb3JkaW5hdGUoKSB7XG4gICAgbGV0IHVuaXF1ZUNvb3JkaW5hdGU7XG4gICAgZG8ge1xuICAgICAgLyoqXG4gICAgICAgKiBHZXQgdGhlIGluaXRpYWwgY29vcmRpbmF0ZS4gVGhpcyBpcyBhIHJhbmRvbSBjb29yZGluYXRlIGJldHdlZW5cbiAgICAgICAqIFswLDBdIGFuZCBbOSw5XSAoaW5jbHVkaW5nIFswLDBdIGFuZCBbOSw5XSk7XG4gICAgICAgKi9cbiAgICAgIHVuaXF1ZUNvb3JkaW5hdGUgPSBbY29vcmRHZW5lcmF0b3IuZ2V0Q29vcmRzKCldOyAvLyBbW2ludCwgaW50XV1cbiAgICB9IHdoaWxlIChfc2hpcENvb3JkaW5hdGVzLmNvbnRhaW5zKHVuaXF1ZUNvb3JkaW5hdGUpKTtcbiAgICByZXR1cm4gdW5pcXVlQ29vcmRpbmF0ZTtcbiAgfVxuICByZXR1cm4geyBnZXRTaGlwQ29vcmRzIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCByb290Tm9kZSBmcm9tIFwiLi9yb290Tm9kZVwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vZG9tL0dhbWVcIjtcbmltcG9ydCB7IEh0bWxFbGVtZW50IH0gZnJvbSBcIkBic2hvd2VuL2h0bWxlbGVtZW50XCI7XG5pbXBvcnQgR2FtZU1lbnUgZnJvbSBcIi4vZG9tL0dhbWVNZW51XCI7XG5cbmNvbnN0IGFwcCA9ICgoKSA9PiB7XG4gIGNvbnN0IGFwcFJvb3QgPSByb290Tm9kZTtcbiAgLy8gQSBjb250YWluZXIgdG8gaG9sZCB0aGUgZ2FtZSBib2FyZHMuXG4gIGNvbnN0IGJvYXJkc0NvbnRhaW5lciA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBpZDogXCJib2FyZHMtY29udGFpbmVyXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShib2FyZHNDb250YWluZXIpO1xuXG4gIGNvbnN0IHNpbmdsZVBsYXllckdhbWUgPSAoKSA9PiB7XG4gICAgYXBwUm9vdC5hcHBlbmRDaGlsZChib2FyZHNDb250YWluZXIpO1xuICAgIGdhbWUuc3RhcnRHYW1lKHsgc2luZ2xlUGxheWVyOiB0cnVlIH0pO1xuICB9O1xuXG4gIGNvbnN0IHR3b1BsYXllckdhbWUgPSAoKSA9PiB7XG4gICAgYXBwUm9vdC5hcHBlbmRDaGlsZChib2FyZHNDb250YWluZXIpO1xuICAgIGdhbWUuc3RhcnRHYW1lKCk7XG4gIH07XG5cbiAgY29uc3QgZmxlZXRTdGF0dXNDb250YWluZXIgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgaWQ6IFwiZmxlZXQtc3RhdHVzLWNvbnRhaW5lclwiLFxuICB9KTtcblxuICAvLyBhcHBSb290LmFwcGVuZENoaWxkKGZsZWV0U3RhdHVzQ29udGFpbmVyKTtcblxuICBHYW1lTWVudS5yZW5kZXJHYW1lU2VsZWN0aW9uTWVudShhcHBSb290LCBzaW5nbGVQbGF5ZXJHYW1lLCB0d29QbGF5ZXJHYW1lKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=