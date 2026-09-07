(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["404~addon-settings~credits~embed~index~pot-desktop"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/button/button.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/components/button/button.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* make sure to keep these in sync with other constants,\ne.g. STAGE_DIMENSION_DEFAULTS in lib/screen-utils.js */\n\n/* layout contants from `layout-constants.js` */\n\n.button_outlined-button_2f510 {\n    cursor: pointer;\n    border-radius: calc(0.5rem / 2);\n    font-weight: bold;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding-left: .75rem;\n    padding-right: .75rem;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n.button_icon_JhCuM {\n    height: 1.5rem;\n}\n\n[dir=\"ltr\"] .button_icon_JhCuM {\n    margin-right: .5rem;\n}\n\n[dir=\"rtl\"] .button_icon_JhCuM {\n    margin-left: .5rem;\n}\n\n.button_content_3y79K {\n    white-space: nowrap;\n}\n", ""]);

// exports
exports.locals = {
	"outlined-button": "button_outlined-button_2f510",
	"outlinedButton": "button_outlined-button_2f510",
	"icon": "button_icon_JhCuM",
	"content": "button_content_3y79K"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/lib/themes/global-styles.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/lib/themes/global-styles.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\n\n/* This is for overriding some styles that don't really \"belong\" to any existing stylesheets */\n\n/* Try to use this sparingly, otherwise this will become unmaintainable again... */\n\n:root {\n    color-scheme: var(--color-scheme);\n}\n\n/* popover is used by gui and paint */\n\n/* some of these are duplicated over there too; !important makes sure these win */\n\n.Popover {\n    color-scheme: light !important;\n}\n\n.Popover-body {\n    color: var(--text-primary) !important;\n    background: var(--popover-background) !important;\n    border: 1px solid var(--ui-black-transparent) !important;\n    box-shadow: 0px 0px 8px 1px var(--shadow) !important;\n}\n\n.Popover-tipShape {\n    fill: var(--popover-background) !important;\n    stroke: var(--ui-black-transparent) !important;\n}\n\n/* ScratchAdddons editor-dark-mode compatibility */\n\n:root {\n    --editorDarkMode-primary: var(--looks-secondary);\n    --editorDarkMode-primary-transparent35: var(--looks-transparent);\n    --editorDarkMode-primary-variant: var(--looks-secondary-dark);\n    --editorDarkMode-border: var(--ui-black-transparent);\n    --editorDarkMode-accent: var(--ui-modal-background);\n    --editorDarkMode-categoryMenu-text: var(--text-primary);\n    --editorDarkMode-accent-text: var(--text-primary);\n    --editorDarkMode-page: var(--ui-primary);\n    --editorDarkMode-highlightText: var(--looks-secondary);\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/addons/hooks.js":
/*!*****************************!*\
  !*** ./src/addons/hooks.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const AddonHooks = {
  appStateReducer: () => {},
  appStateStore: null,
  blockly: null,
  blocklyWorkspace: null,
  blocklyCallbacks: [],
  recolorCallbacks: []
};
/* harmony default export */ __webpack_exports__["default"] = (AddonHooks);

/***/ }),

/***/ "./src/components/button/button.css":
/*!******************************************!*\
  !*** ./src/components/button/button.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./button.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/button/button.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/button/button.jsx":
/*!******************************************!*\
  !*** ./src/components/button/button.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.css */ "./src/components/button/button.css");
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_css__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["className", "disabled", "iconClassName", "iconSrc", "iconWidth", "iconHeight", "onClick", "children"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }




const ButtonComponent = _ref => {
  let className = _ref.className,
    disabled = _ref.disabled,
    iconClassName = _ref.iconClassName,
    iconSrc = _ref.iconSrc,
    iconWidth = _ref.iconWidth,
    iconHeight = _ref.iconHeight,
    onClick = _ref.onClick,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  if (disabled) {
    onClick = function onClick() {};
  }
  const icon = iconSrc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(iconClassName, _button_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon),
    draggable: false,
    src: iconSrc,
    height: iconHeight,
    width: iconWidth
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_button_css__WEBPACK_IMPORTED_MODULE_3___default.a.outlinedButton, className),
    role: "button",
    onClick: onClick
  }, props), icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _button_css__WEBPACK_IMPORTED_MODULE_3___default.a.content
  }, children));
};
ButtonComponent.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  iconClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  iconSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  iconHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  iconWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (ButtonComponent);

/***/ }),

/***/ "./src/components/menu-bar/tw-align-center.svg":
/*!*****************************************************!*\
  !*** ./src/components/menu-bar/tw-align-center.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPCEtLSBDaXJjdWxhciBiYWNrZ3JvdW5kIC0tPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjExIiBmaWxsPSIjNEVDREM0IiBzdHJva2U9IiMyNkE2OUEiIHN0cm9rZS13aWR0aD0iMSIvPgogIAogIDwhLS0gQ2VudGVyLWFsaWduZWQgdGV4dCBsaW5lcyBpbiB3aGl0ZSAtLT4KICA8cmVjdCB4PSI2IiB5PSI4IiB3aWR0aD0iMTIiIGhlaWdodD0iMS41IiByeD0iMC43NSIgZmlsbD0id2hpdGUiLz4KICA8cmVjdCB4PSI4IiB5PSIxMSIgd2lkdGg9IjgiIGhlaWdodD0iMS41IiByeD0iMC43NSIgZmlsbD0id2hpdGUiLz4KICA8cmVjdCB4PSI2IiB5PSIxNCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEuNSIgcng9IjAuNzUiIGZpbGw9IndoaXRlIi8+CiAgPHJlY3QgeD0iOCIgeT0iMTciIHdpZHRoPSI4IiBoZWlnaHQ9IjEuNSIgcng9IjAuNzUiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/components/menu-bar/tw-align-left.svg":
/*!***************************************************!*\
  !*** ./src/components/menu-bar/tw-align-left.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPCEtLSBDaXJjdWxhciBiYWNrZ3JvdW5kIC0tPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjExIiBmaWxsPSIjRkY2NjgwIiBzdHJva2U9IiNFNzRDM0MiIHN0cm9rZS13aWR0aD0iMSIvPgogIAogIDwhLS0gTGVmdC1hbGlnbmVkIHRleHQgbGluZXMgaW4gd2hpdGUgLS0+CiAgPHJlY3QgeD0iNiIgeT0iOCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEuNSIgcng9IjAuNzUiIGZpbGw9IndoaXRlIi8+CiAgPHJlY3QgeD0iNiIgeT0iMTEiIHdpZHRoPSI4IiBoZWlnaHQ9IjEuNSIgcng9IjAuNzUiIGZpbGw9IndoaXRlIi8+CiAgPHJlY3QgeD0iNiIgeT0iMTQiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxLjUiIHJ4PSIwLjc1IiBmaWxsPSJ3aGl0ZSIvPgogIDxyZWN0IHg9IjYiIHk9IjE3IiB3aWR0aD0iOCIgaGVpZ2h0PSIxLjUiIHJ4PSIwLjc1IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/components/menu-bar/tw-align-right.svg":
/*!****************************************************!*\
  !*** ./src/components/menu-bar/tw-align-right.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPCEtLSBDaXJjdWxhciBiYWNrZ3JvdW5kIC0tPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjExIiBmaWxsPSIjRkZCODREIiBzdHJva2U9IiNGRjk4MDAiIHN0cm9rZS13aWR0aD0iMSIvPgogIAogIDwhLS0gUmlnaHQtYWxpZ25lZCB0ZXh0IGxpbmVzIGluIHdoaXRlIC0tPgogIDxyZWN0IHg9IjYiIHk9IjgiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxLjUiIHJ4PSIwLjc1IiBmaWxsPSJ3aGl0ZSIvPgogIDxyZWN0IHg9IjEwIiB5PSIxMSIgd2lkdGg9IjgiIGhlaWdodD0iMS41IiByeD0iMC43NSIgZmlsbD0id2hpdGUiLz4KICA8cmVjdCB4PSI2IiB5PSIxNCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEuNSIgcng9IjAuNzUiIGZpbGw9IndoaXRlIi8+CiAgPHJlY3QgeD0iMTAiIHk9IjE3IiB3aWR0aD0iOCIgaGVpZ2h0PSIxLjUiIHJ4PSIwLjc1IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/lib/brand.js":
/*!**************************!*\
  !*** ./src/lib/brand.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Legacy export format because this is used by some build-time scripts stuck in the past.
// eslint-disable-next-line import/no-commonjs
module.exports = {
  APP_NAME: 'PotentiaMod',
  MOTTO: 'It makes the very best!',
  LIBRARY_SITE: 'https://potentiamod.github.io/scratch-library/'
};

/***/ }),

/***/ "./src/lib/detect-locale.js":
/*!**********************************!*\
  !*** ./src/lib/detect-locale.js ***!
  \**********************************/
/*! exports provided: LANGUAGE_KEY, detectLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_KEY", function() { return LANGUAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectLocale", function() { return detectLocale; });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @fileoverview
 * Utility function to detect locale from the browser setting or paramenter on the URL.
 */



// tw: read language from localStorage
const LANGUAGE_KEY = 'tw:language';

/**
 * look for language setting in the browser. Check against supported locales.
 * If there's a parameter in the URL, override the browser setting
 * @param {Array.string} supportedLocales An array of supported locale codes.
 * @return {string} the preferred locale
 */
const detectLocale = supportedLocales => {
  // tw: read language from localStorage
  try {
    const storedLanguage = localStorage.getItem(LANGUAGE_KEY);
    if (storedLanguage && supportedLocales.includes(storedLanguage)) {
      return storedLanguage;
    }
  } catch (e) {/* ignore */}
  let locale = 'en'; // default
  let browserLocale = window.navigator.userLanguage || window.navigator.language;
  browserLocale = browserLocale.toLowerCase();
  // try to set locale from browserLocale
  if (supportedLocales.includes(browserLocale)) {
    locale = browserLocale;
  } else {
    browserLocale = browserLocale.split('-')[0];
    if (supportedLocales.includes(browserLocale)) {
      locale = browserLocale;
    }
  }
  const queryParams = query_string__WEBPACK_IMPORTED_MODULE_0___default.a.parse(location.search);
  // Flatten potential arrays and remove falsy values
  const potentialLocales = [].concat(queryParams.locale, queryParams.lang).filter(l => l);
  if (!potentialLocales.length) {
    return locale;
  }
  const urlLocale = potentialLocales[0].toLowerCase();
  if (supportedLocales.includes(urlLocale)) {
    return urlLocale;
  }
  return locale;
};


/***/ }),

/***/ "./src/lib/download-blob.js":
/*!**********************************!*\
  !*** ./src/lib/download-blob.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((filename, blob) => {
  const downloadLink = document.createElement('a');
  document.body.appendChild(downloadLink);

  // Use special ms version if available to get it working on Edge.
  if (navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(blob, filename);
    return;
  }
  if ('download' in HTMLAnchorElement.prototype) {
    const url = window.URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = filename;
    downloadLink.type = blob.type;
    downloadLink.click();
    // remove the link after a timeout to prevent a crash on iOS 13 Safari
    window.setTimeout(() => {
      document.body.removeChild(downloadLink);
      window.URL.revokeObjectURL(url);
    }, 1000);
  } else {
    // iOS 12 Safari, open a new page and set href to data-uri
    let popup = window.open('', '_blank');
    const reader = new FileReader();
    reader.onloadend = function () {
      popup.location.href = reader.result;
      popup = null;
    };
    reader.readAsDataURL(blob);
  }
});

/***/ }),

/***/ "./src/lib/gradient-to-css.js":
/*!************************************!*\
  !*** ./src/lib/gradient-to-css.js ***!
  \************************************/
/*! exports provided: gradientDataToCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gradientDataToCSS", function() { return gradientDataToCSS; });
const gradientDataToCSS = (colors, direction) => {
  let buffer = "linear-gradient(".concat(direction, "deg");
  for (const color of colors) {
    buffer += ", ".concat(color.color, " ").concat(color.position, "%");
  }
  buffer += ')';
  return buffer;
};

/***/ }),

/***/ "./src/lib/isScratchDesktop.js":
/*!*************************************!*\
  !*** ./src/lib/isScratchDesktop.js ***!
  \*************************************/
/*! exports provided: default, isScratchDesktop, notScratchDesktop, setIsScratchDesktop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScratchDesktop", function() { return isScratchDesktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notScratchDesktop", function() { return notScratchDesktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsScratchDesktop", function() { return setIsScratchDesktop; });
/**
 * Internal stored state. Not valid until after at least one call to `setIsScratchDesktop()`.
 * @type {boolean}
 */
let _isScratchDesktop; // undefined = not ready yet

/**
 * Tell the `isScratchDesktop()` whether or not the GUI is running under Scratch Desktop.
 * @param {boolean} value - the new value which `isScratchDesktop()` should return in the future.
 */
const setIsScratchDesktop = function setIsScratchDesktop(value) {
  _isScratchDesktop = value;
};

/**
 * @returns {boolean} - true if it seems like the GUI is running under Scratch Desktop; false otherwise.
 * If `setIsScratchDesktop()` has not yet been called, this can return `undefined`.
 */
const isScratchDesktop = function isScratchDesktop() {
  return _isScratchDesktop;
};

/**
 * @returns {boolean} - false if it seems like the GUI is running under Scratch Desktop; true otherwise.
 */
const notScratchDesktop = function notScratchDesktop() {
  return !isScratchDesktop();
};
/* harmony default export */ __webpack_exports__["default"] = (isScratchDesktop);


/***/ }),

/***/ "./src/lib/themes/accent/02e.js":
/*!**************************************!*\
  !*** ./src/lib/themes/accent/02e.js ***!
  \**************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#00BAAD',
  'motion-primary-transparent': '#00BAADe6',
  'motion-tertiary': '#009388',
  'looks-secondary': '#00BAAD',
  'looks-transparent': '#00BAAD59',
  'looks-light-transparent': '#00BAAD26',
  'looks-secondary-dark': '#009388',
  'extensions-primary': '#009388',
  'extensions-tertiary': '#006C64',
  'extensions-transparent': '#00938859',
  'extensions-light': '#00BAAD',
  'drop-highlight': '#00BAAD'
};
const blockColors = {
  checkboxActiveBackground: '#00BAAD',
  checkboxActiveBorder: '#009388'
};


/***/ }),

/***/ "./src/lib/themes/accent/ace.js":
/*!**************************************!*\
  !*** ./src/lib/themes/accent/ace.js ***!
  \**************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'oklab(0.42 0.16 -0.10)',
  'motion-primary-transparent': 'oklab(0.42 0.16 -0.10 / 0.75)',
  'motion-tertiary': 'oklab(0.34 0.15 -0.09)',
  'looks-secondary': 'oklab(0.42 0.16 -0.10)',
  'looks-transparent': 'oklab(0.42 0.16 -0.10 / 0.35)',
  'looks-light-transparent': 'oklab(0.42 0.16 -0.10 / 0.15)',
  'looks-secondary-dark': 'oklab(0.34 0.15 -0.09)',
  'extensions-primary': 'oklab(0.52 0.17 -0.11)',
  'extensions-tertiary': 'oklab(0.35 0.00 0.00)',
  'extensions-transparent': 'oklab(0.52 0.17 -0.11 / 0.35)',
  'extensions-light': 'oklab(0.85 0.00 0.00)',
  'drop-highlight': 'oklab(0.72 0.00 0.00)',
  'menu-bar-background-image': 'linear-gradient(90deg, ' + 'oklab(0.10 0.00 0.00 / 0.75) 0%, ' + 'oklab(0.72 0.00 0.00 / 0.75) 33%, ' + 'oklab(1.00 0.00 0.00 / 0.75) 66%, ' + 'oklab(0.42 0.16 -0.10 / 0.75) 100%)'
};
const blockColors = {
  checkboxActiveBackground: 'oklab(0.42 0.16 -0.10)',
  checkboxActiveBorder: 'oklab(0.72 0.00 0.00)'
};


/***/ }),

/***/ "./src/lib/themes/accent/astraeditor.js":
/*!**********************************************!*\
  !*** ./src/lib/themes/accent/astraeditor.js ***!
  \**********************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#0099ff',
  'motion-primary-transparent': '#0099ffe6',
  'motion-tertiary': '#0066ff',
  'looks-secondary': '#0099ff',
  'looks-transparent': '#0077aa59',
  'looks-light-transparent': '#00669926',
  'looks-secondary-dark': '#4e97b7ff',
  'extensions-primary': '#5a8ff2ff',
  'extensions-tertiary': 'hsla(197, 85%, 40%, 1.00)',
  'extensions-transparent': '#5abdf259',
  'extensions-light': 'hsla(213, 58%, 85%, 1.00)',
  'drop-highlight': '#8cd3ffff'
};
const blockColors = {
  checkboxActiveBackground: '#0099ff',
  checkboxActiveBorder: '#0066ff'
};


/***/ }),

/***/ "./src/lib/themes/accent/aurora.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/aurora.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'oklab(0.70 -0.10 0.08)',
  'motion-primary-transparent': 'oklab(0.70 -0.10 0.08 / 0.75)',
  'motion-tertiary': 'oklab(0.75 -0.08 0.06)',
  'looks-secondary': 'oklab(0.70 -0.10 0.08)',
  'looks-tertiary': 'hsla(215, 100%, 55%, 1)',
  'looks-transparent': 'oklab(0.70 -0.10 0.08 / 0.35)',
  'looks-light-transparent': 'oklab(0.70 -0.10 0.08 / 0.15)',
  'looks-secondary-dark': 'oklab(0.60 -0.12 0.10)',
  'looks-secondary-light': 'oklab(0.77 -0.10 0.08)',
  //light
  'looks-secondary-lighter': 'oklab(0.86 -0.10 0.08)',
  //lighter
  'looks-secondary-darker': 'oklab(0.50 -0.12 0.10)',
  //darker
  'looks-secondary-deep-dark': 'oklab(0.30 -0.12 0.10)',
  //darkest

  'extensions-primary': 'oklab(0.75 -0.08 0.06)',
  'extensions-tertiary': 'oklab(0.65 -0.06 -0.08)',
  'extensions-transparent': 'oklab(0.75 -0.08 0.06 / 0.35)',
  'extensions-light': 'oklab(0.80 -0.04 0.04)',
  'drop-highlight': 'oklab(0.70 -0.10 0.08)',
  'menu-bar-background-image': 'linear-gradient(90deg, ' + 'oklab(0.65 -0.12 0.10 / 0.8) 0%, ' +
  // emerald green
  'oklab(0.70 -0.10 0.05 / 0.8) 20%, ' +
  // green-teal
  'oklab(0.65 -0.08 -0.05 / 0.8) 40%, ' +
  // teal-blue
  'oklab(0.60 -0.06 -0.10 / 0.8) 60%, ' +
  // blue
  'oklab(0.55 0.02 -0.12 / 0.8) 80%, ' +
  // purple-blue
  'oklab(0.60 0.08 -0.08 / 0.8) 100%)' // purple
};
const blockColors = {
  checkboxActiveBackground: 'oklab(0.70 -0.10 0.08)',
  checkboxActiveBorder: 'oklab(0.75 -0.08 0.06)'
};


/***/ }),

/***/ "./src/lib/themes/accent/bi.js":
/*!*************************************!*\
  !*** ./src/lib/themes/accent/bi.js ***!
  \*************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'oklab(0.55 0.12 -0.07)',
  'motion-primary-transparent': 'oklab(0.55 0.12 -0.07 / 0.75)',
  'motion-tertiary': 'oklab(0.47 0.14 -0.08)',
  'looks-secondary': 'oklab(0.55 0.12 -0.07)',
  'looks-transparent': 'oklab(0.55 0.12 -0.07 / 0.35)',
  'looks-light-transparent': 'oklab(0.55 0.12 -0.07 / 0.15)',
  'looks-secondary-dark': 'oklab(0.45 0.13 -0.08)',
  'extensions-primary': 'oklab(0.57 0.23 0.00)',
  'extensions-tertiary': 'oklab(0.40 -0.03 -0.18)',
  'extensions-transparent': 'oklab(0.57 0.23 0.00 / 0.35)',
  'extensions-light': 'oklab(0.75 0.06 -0.04)',
  'drop-highlight': 'oklab(0.57 0.23 0.00)',
  'menu-bar-background-image': 'linear-gradient(90deg, ' + 'oklab(0.57 0.23 0.00 / 0.75) 0%, ' + 'oklab(0.55 0.12 -0.07 / 0.75) 50%, ' + 'oklab(0.40 -0.03 -0.18 / 0.75) 100%)'
};
const blockColors = {
  checkboxActiveBackground: 'oklab(0.55 0.12 -0.07)',
  checkboxActiveBorder: 'oklab(0.57 0.23 0.00)'
};


/***/ }),

/***/ "./src/lib/themes/accent/blue.js":
/*!***************************************!*\
  !*** ./src/lib/themes/accent/blue.js ***!
  \***************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'looks-secondary': 'hsla(215, 100%, 65%, 1)',
  'looks-secondary-light': 'hsl(215,100%,85%)',
  'looks-secondary-lighter': 'hsl(214,100%,95%)',
  'looks-transparent': 'hsla(215, 100%, 65%, 0.35)',
  'looks-light-transparent': 'hsla(215, 100%, 65%, 0.15)',
  'looks-secondary-dark': 'hsla(215, 60%, 50%, 1)',
  'looks-secondary-darker': 'hsl(215,62%,31%)',
  'looks-secondary-deep-dark': 'hsl(215,64%,18%)'
};
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/accent/ce.js":
/*!*************************************!*\
  !*** ./src/lib/themes/accent/ce.js ***!
  \*************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#ff9b86',
  'motion-primary-transparent': '#ff9b86e6',
  'motion-tertiary': '#cc7a69',
  'looks-secondary': '#ff9b86',
  'looks-transparent': '#ff9b8659',
  'looks-light-transparent': '#ff9b8626',
  'looks-secondary-dark': '#cc7a69',
  'extensions-primary': '#ff9b86',
  'extensions-tertiary': '#cc7a69',
  'extensions-transparent': '#ff9b8659',
  'extensions-light': '#ffcbbd',
  'drop-highlight': '#ffccb8'
};
const blockColors = {
  checkboxActiveBackground: '#ff9b86',
  checkboxActiveBorder: '#cc7a69'
};


/***/ }),

/***/ "./src/lib/themes/accent/cherry.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/cherry.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'oklab(0.70 0.18 0.08)',
  'motion-primary-transparent': 'oklab(0.70 0.18 0.08 / 0.75)',
  'motion-tertiary': 'oklab(0.72 0.16 0.10)',
  'looks-secondary': 'oklab(0.70 0.18 0.08)',
  'looks-transparent': 'oklab(0.70 0.18 0.08 / 0.35)',
  'looks-light-transparent': 'oklab(0.70 0.18 0.08 / 0.15)',
  'looks-secondary-dark': 'oklab(0.60 0.20 0.06)',
  'extensions-primary': 'oklab(0.72 0.16 0.10)',
  'extensions-tertiary': 'oklab(0.68 0.14 0.04)',
  'extensions-transparent': 'oklab(0.72 0.16 0.10 / 0.35)',
  'extensions-light': 'oklab(0.78 0.12 0.12)',
  'drop-highlight': 'oklab(0.70 0.18 0.08)',
  'menu-bar-background-image': 'linear-gradient(90deg, ' + 'oklab(0.65 0.20 0.06 / 0.8) 0%, ' +
  // deep cherry
  'oklab(0.70 0.18 0.08 / 0.8) 20%, ' +
  // cherry red
  'oklab(0.72 0.16 0.12 / 0.8) 40%, ' +
  // warm cherry
  'oklab(0.75 0.14 0.14 / 0.8) 60%, ' +
  // cherry pink
  'oklab(0.78 0.12 0.08 / 0.8) 80%, ' +
  // soft pink
  'oklab(0.80 0.08 0.04 / 0.8) 100%)' // pale rose
};
const blockColors = {
  checkboxActiveBackground: 'oklab(0.70 0.18 0.08)',
  checkboxActiveBorder: 'oklab(0.72 0.16 0.10)'
};


/***/ }),

/***/ "./src/lib/themes/accent/coral.js":
/*!****************************************!*\
  !*** ./src/lib/themes/accent/coral.js ***!
  \****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'oklab(0.72 0.14 0.10)',
  'motion-primary-transparent': 'oklab(0.72 0.14 0.10 / 0.75)',
  'motion-tertiary': 'oklab(0.75 0.12 0.08)',
  'looks-secondary': 'oklab(0.72 0.14 0.10)',
  'looks-transparent': 'oklab(0.72 0.14 0.10 / 0.35)',
  'looks-light-transparent': 'oklab(0.72 0.14 0.10 / 0.15)',
  'looks-secondary-dark': 'oklab(0.62 0.16 0.12)',
  'extensions-primary': 'oklab(0.75 0.12 0.08)',
  'extensions-tertiary': 'oklab(0.78 0.10 0.06)',
  'extensions-transparent': 'oklab(0.75 0.12 0.08 / 0.35)',
  'extensions-light': 'oklab(0.82 0.08 0.04)',
  'drop-highlight': 'oklab(0.72 0.14 0.10)',
  'menu-bar-background-image': 'linear-gradient(90deg, ' + 'oklab(0.68 0.16 0.12 / 0.8) 0%, ' +
  // deep coral
  'oklab(0.72 0.14 0.10 / 0.8) 20%, ' +
  // coral
  'oklab(0.75 0.12 0.08 / 0.8) 40%, ' +
  // light coral
  'oklab(0.78 0.10 0.06 / 0.8) 60%, ' +
  // pale coral
  'oklab(0.80 0.08 0.08 / 0.8) 80%, ' +
  // peach
  'oklab(0.85 0.06 0.04 / 0.8) 100%)' // soft peach
};
const blockColors = {
  checkboxActiveBackground: 'oklab(0.72 0.14 0.10)',
  checkboxActiveBorder: 'oklab(0.75 0.12 0.08)'
};


/***/ }),

/***/ "./src/lib/themes/accent/corrupted-blue.js":
/*!*************************************************!*\
  !*** ./src/lib/themes/accent/corrupted-blue.js ***!
  \*************************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#625e97',
  'motion-primary-transparent': 'hsla(240,21%,19%,0.35)',
  'motion-tertiary': '#454171',
  'looks-secondary': '#625e97',
  'looks-secondary-light': '#8d87cf',
  'looks-secondary-lighter': '#b6aff3',
  'looks-transparent': 'hsla(240,21%,19%,0.35)',
  'looks-light-transparent': 'hsla(261, 100%, 50%, 0.15)',
  'looks-secondary-dark': '#2a293f',
  'looks-secondary-darker': '#1c1c2b',
  'looks-secondary-deep-dark': '#12121a',
  'extensions-primary': '#625e97',
  'extensions-tertiary': '#444171',
  'extensions-transparent': 'hsla(240,21%,19%,0.35)',
  'extensions-light': '#8d87cf',
  'drop-highlight': '#7a74bb'
};
const blockColors = {
  checkboxActiveBackground: '#625e97',
  checkboxActiveBorder: '#5b5788'
};


/***/ }),

/***/ "./src/lib/themes/accent/cosmic.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/cosmic.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'oklab(0.68 0.15 -0.08)',
  'motion-primary-transparent': 'oklab(0.68 0.15 -0.08 / 0.75)',
  'motion-tertiary': 'oklab(0.72 0.12 -0.06)',
  'looks-secondary': 'oklab(0.68 0.15 -0.08)',
  'looks-transparent': 'oklab(0.68 0.15 -0.08 / 0.35)',
  'looks-light-transparent': 'oklab(0.68 0.15 -0.08 / 0.15)',
  'looks-secondary-dark': 'oklab(0.58 0.18 -0.10)',
  'looks-secondary-light': '#D39ACC',
  //light
  'looks-secondary-lighter': '#D3B0CF',
  //lighter
  'looks-secondary-darker': '#941C8B',
  //darker
  'looks-secondary-deep-dark': '#63005B',
  //darkest

  'extensions-primary': 'oklab(0.72 0.12 -0.06)',
  'extensions-tertiary': 'oklab(0.65 0.08 -0.12)',
  'extensions-transparent': 'oklab(0.72 0.12 -0.06 / 0.35)',
  'extensions-light': 'oklab(0.78 0.08 -0.04)',
  'drop-highlight': 'oklab(0.68 0.15 -0.08)',
  'menu-bar-background-image': 'linear-gradient(90deg, ' + 'oklab(0.45 0.08 -0.15 / 0.8) 0%, ' +
  // deep purple
  'oklab(0.55 0.12 -0.12 / 0.8) 20%, ' +
  // purple
  'oklab(0.65 0.15 -0.08 / 0.8) 40%, ' +
  // magenta
  'oklab(0.70 0.12 -0.04 / 0.8) 60%, ' +
  // pink
  'oklab(0.65 0.05 -0.10 / 0.8) 80%, ' +
  // blue-purple
  'oklab(0.60 -0.02 -0.12 / 0.8) 100%)' // cosmic blue
};
const blockColors = {
  checkboxActiveBackground: 'oklab(0.68 0.15 -0.08)',
  checkboxActiveBorder: 'oklab(0.72 0.12 -0.06)'
};


/***/ }),

/***/ "./src/lib/themes/accent/cottoncandy.js":
/*!**********************************************!*\
  !*** ./src/lib/themes/accent/cottoncandy.js ***!
  \**********************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#FF80C4',
  'motion-primary-transparent': '#FF80C4e6',
  'motion-tertiary': '#DB61A2',
  'looks-secondary': '#FF80C4',
  'looks-secondary-light': '#ffc6df',
  'looks-secondary-lighter': '#ffe5f1',
  'looks-transparent': '#FF73B059',
  'looks-light-transparent': '#FF73B026',
  'looks-secondary-dark': '#BF4888',
  'looks-secondary-darker': '#7e2e5a',
  'looks-secondary-deep-dark': '#431a30',
  'data-primary': '#FF82EE',
  'extensions-primary': '#88D4F2',
  'extensions-tertiary': '#6C97D4',
  'extensions-transparent': '#74D3F235',
  'extensions-light': '#BAE2F2',
  'drop-highlight': '#FF94DA',
  'menu-bar-background-image': 'linear-gradient(to right, #91d3ff 0%, #ff91e2 100%)',
  'menu-bar-background-image-dark': 'linear-gradient(to right, #005091,#8A2770)'
};
const blockColors = {
  checkboxActiveBackground: '#FF80C4',
  checkboxActiveBorder: '#DB61A2'
};


/***/ }),

/***/ "./src/lib/themes/accent/custom.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/custom.js ***!
  \*****************************************/
/*! exports provided: getGuiColors, getBlockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGuiColors", function() { return getGuiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockColors", function() { return getBlockColors; });
/* harmony import */ var _lib_gradient_to_css_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/gradient-to-css.js */ "./src/lib/gradient-to-css.js");

const getGuiColors = (primaryColor, secondaryColor, tertiaryColor, gradient) => ({
  'motion-primary': '${primaryColor}',
  'motion-primary-transparent': '${primaryColor}e6',
  'motion-tertiary': '${secondaryColor}',
  'looks-secondary': '${primaryColor}',
  'looks-secondary-light': '${primaryColor}',
  'looks-secondary-lighter': '${primaryColor}',
  'looks-transparent': '${primaryColor}59',
  'looks-light-transparent': '${primaryColor}26',
  'looks-secondary-dark': '${secondaryColor}',
  'looks-secondary-darker': '${secondaryColor}',
  'looks-secondary-deep-dark': '${secondaryColor}',
  'extensions-primary': '${tertiaryColor}',
  'extensions-tertiary': '${tertiaryColor}',
  'extensions-transparent': '${tertiaryColor}6e',
  'extensions-light': 'hsla(10, 57%, 85%, 1)',
  'drop-highlight': '${primaryColor}',
  'menu-bar-background-image': "".concat(gradient ? Object(_lib_gradient_to_css_js__WEBPACK_IMPORTED_MODULE_0__["gradientDataToCSS"])(gradient.colors, gradient.direction) : 'none')
});
const getBlockColors = (primaryColor, secondaryColor) => ({
  checkboxActiveBackground: primaryColor,
  checkboxActiveBorder: secondaryColor
});


/***/ }),

/***/ "./src/lib/themes/accent/cyan.js":
/*!***************************************!*\
  !*** ./src/lib/themes/accent/cyan.js ***!
  \***************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#00c4ff',
  'motion-primary-transparent': '#00c4ffe6',
  'motion-tertiary': '#007bc7',
  'looks-secondary': '#00c4ff',
  'looks-secondary-light': '#5EDAFF',
  'looks-secondary-lighter': '#94E6FF',
  'looks-transparent': '#00c4ffe6',
  'looks-light-transparent': 'hsla(203, 100%, 39%, 0.15)',
  'looks-secondary-dark': '#009CCC',
  'looks-secondary-darker': '#006994',
  'looks-secondary-deep-dark': '#004970',
  'extensions-primary': 'hsla(194, 100%, 58%, 1)',
  'extensions-tertiary': 'hsla(194, 100%, 35%, 1)',
  'extensions-transparent': 'hsla(194, 100%, 58%, 0.43)',
  'extensions-light': 'hsla(194, 100%, 75%, 1)',
  'drop-highlight': '#64caf5'
};
const blockColors = {
  checkboxActiveBackground: '#00c4ff',
  checkboxActiveBorder: '#007CBD'
};


/***/ }),

/***/ "./src/lib/themes/accent/dark-green.js":
/*!*********************************************!*\
  !*** ./src/lib/themes/accent/dark-green.js ***!
  \*********************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#13261f',
  'motion-primary-transparent': '#13261fe6',
  'motion-tertiary': '#080f0f',
  'looks-secondary': '#13261f',
  'looks-transparent': '#ff4d4d59',
  'looks-light-transparent': '#ff4d4d26',
  'looks-secondary-dark': 'hsla(163, 35%, 21%, 1)',
  'looks-secondary-light': '#374A43',
  //light
  'looks-secondary-lighter': '#5D7069',
  //lighter
  'looks-secondary-darker': 'hsla(163, 35%, 15%, 1)',
  //darker
  'looks-secondary-deep-dark': 'hsla(163, 35%, 07%, 1)',
  //darkest

  'extensions-primary': 'hsla(10, 85%, 65%, 1)',
  'extensions-tertiary': 'hsla(10, 85%, 40%, 1)',
  'extensions-transparent': 'hsla(10, 85%, 65%, 0.35)',
  'extensions-light': 'hsla(10, 57%, 85%, 1)',
  'drop-highlight': '#258C8C'
};
const blockColors = {
  checkboxActiveBackground: '#13261f',
  checkboxActiveBorder: '#080f0f'
};


/***/ }),

/***/ "./src/lib/themes/accent/eggplant-purple.js":
/*!**************************************************!*\
  !*** ./src/lib/themes/accent/eggplant-purple.js ***!
  \**************************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#49214A',
  'motion-primary-transparent': '#49214Ae6',
  'motion-tertiary': '#3a1a3b',
  'looks-secondary': '#6b3d6c',
  'looks-tertiary': 'hsla(300, 29%, 23%, 1)',
  'looks-transparent': '#6b3d6c59',
  'looks-light-transparent': '#6b3d6c26',
  'looks-secondary-dark': 'hsla(300, 29%, 33%, 1)',
  'extensions-primary': 'hsla(300, 38%, 21%, 1)',
  'extensions-tertiary': 'hsla(300, 38%, 13%, 1)',
  'extensions-transparent': 'hsla(300, 38%, 21%, 0.35)',
  'extensions-light': 'hsla(300, 29%, 33%, 1)',
  'drop-highlight': '#8a4d8b'
};
const blockColors = {
  checkboxActiveBackground: '#49214A',
  checkboxActiveBorder: '#3a1a3b'
};


/***/ }),

/***/ "./src/lib/themes/accent/fire.js":
/*!***************************************!*\
  !*** ./src/lib/themes/accent/fire.js ***!
  \***************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'oklab(0.68 0.18 0.12)',
  'motion-primary-transparent': 'oklab(0.68 0.18 0.12 / 0.75)',
  'motion-tertiary': 'oklab(0.72 0.15 0.10)',
  'looks-secondary': 'oklab(0.68 0.18 0.12)',
  'looks-transparent': 'oklab(0.68 0.18 0.12 / 0.35)',
  'looks-light-transparent': 'oklab(0.68 0.18 0.12 / 0.15)',
  'looks-secondary-dark': 'oklab(0.58 0.20 0.14)',
  'extensions-primary': 'oklab(0.72 0.15 0.10)',
  'extensions-tertiary': 'oklab(0.76 0.12 0.08)',
  'extensions-transparent': 'oklab(0.72 0.15 0.10 / 0.35)',
  'extensions-light': 'oklab(0.80 0.10 0.06)',
  'drop-highlight': 'oklab(0.68 0.18 0.12)',
  'menu-bar-background-image': 'linear-gradient(90deg, ' + 'oklab(0.55 0.20 0.16 / 0.8) 0%, ' +
  // deep red
  'oklab(0.65 0.18 0.14 / 0.8) 25%, ' +
  // red-orange
  'oklab(0.72 0.15 0.12 / 0.8) 50%, ' +
  // orange
  'oklab(0.78 0.12 0.10 / 0.8) 75%, ' +
  // yellow-orange
  'oklab(0.85 0.08 0.08 / 0.8) 100%)' // bright yellow
};
const blockColors = {
  checkboxActiveBackground: 'oklab(0.68 0.18 0.12)',
  checkboxActiveBorder: 'oklab(0.72 0.15 0.10)'
};


/***/ }),

/***/ "./src/lib/themes/accent/forest.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/forest.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'oklab(0.65 -0.12 0.12)',
  'motion-primary-transparent': 'oklab(0.65 -0.12 0.12 / 0.75)',
  'motion-tertiary': 'oklab(0.68 -0.10 0.14)',
  'looks-secondary': 'oklab(0.65 -0.12 0.12)',
  'looks-transparent': 'oklab(0.65 -0.12 0.12 / 0.35)',
  'looks-light-transparent': 'oklab(0.65 -0.12 0.12 / 0.15)',
  'looks-secondary-dark': 'oklab(0.55 -0.14 0.10)',
  'extensions-primary': 'oklab(0.68 -0.10 0.14)',
  'extensions-tertiary': 'oklab(0.72 -0.08 0.16)',
  'extensions-transparent': 'oklab(0.68 -0.10 0.14 / 0.35)',
  'extensions-light': 'oklab(0.75 -0.06 0.18)',
  'drop-highlight': 'oklab(0.65 -0.12 0.12)',
  'menu-bar-background-image': 'linear-gradient(90deg, ' + 'oklab(0.55 -0.14 0.10 / 0.8) 0%, ' +
  // deep forest
  'oklab(0.60 -0.12 0.12 / 0.8) 20%, ' +
  // dark green
  'oklab(0.65 -0.10 0.14 / 0.8) 40%, ' +
  // forest green
  'oklab(0.70 -0.08 0.16 / 0.8) 60%, ' +
  // medium green
  'oklab(0.75 -0.06 0.18 / 0.8) 80%, ' +
  // light green
  'oklab(0.80 -0.04 0.20 / 0.8) 100%)' // bright green
};
const blockColors = {
  checkboxActiveBackground: 'oklab(0.65 -0.12 0.12)',
  checkboxActiveBorder: 'oklab(0.68 -0.10 0.14)'
};


/***/ }),

/***/ "./src/lib/themes/accent/gaia-blue.js":
/*!********************************************!*\
  !*** ./src/lib/themes/accent/gaia-blue.js ***!
  \********************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#2d2dd3',
  'motion-primary-transparent': 'hsla(240, 65%, 50%, 0.35)',
  'motion-tertiary': 'hsla(240, 65%, 30%, 1)',
  'motion-primary-dark': 'hsla(240, 65%, 40%, 1)',
  'looks-secondary': '#2d2dd3',
  'looks-secondary-light': '#6565fa',
  'looks-secondary-lighter': '#9393fb',
  'looks-transparent': 'hsla(240, 65%, 50%, 0.35',
  'looks-light-transparent': 'hsla(240, 100%, 50%, 0.15)',
  'looks-secondary-dark': '#2424a9',
  'looks-secondary-darker': '#161672',
  'looks-secondary-deep-dark': '#0f0f42',
  'extensions-primary': 'hsla(240, 91%, 53%, 1)',
  'extensions-tertiary': 'hsla(240, 80%, 43%, 1)',
  'extensions-transparent': 'hsla(240, 91%, 53%, 0.35)',
  'extensions-light': 'hsla(240, 80%, 43%, 1)',
  'drop-highlight': 'hsla(240, 100%, 77%, 1)'
};
const blockColors = {
  checkboxActiveBackground: 'hsla(240, 65%, 50%, 1)',
  checkboxActiveBorder: '#5b5788'
};


/***/ }),

/***/ "./src/lib/themes/accent/gay.js":
/*!**************************************!*\
  !*** ./src/lib/themes/accent/gay.js ***!
  \**************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#078e70',
  // teal green
  'motion-primary-transparent': '#078e70bf',
  // semi-transparent teal green
  'motion-tertiary': '#26cfaa',
  // light green

  'looks-secondary': '#078e70',
  // teal green
  'looks-transparent': '#078e7059',
  // more transparent teal green
  'looks-light-transparent': '#078e7026',
  // very transparent teal green
  'looks-secondary-dark': 'hsla(168, 75%, 40%, 1)',
  // darker teal green

  'extensions-primary': 'hsla(168, 60%, 70%, 1)',
  // light green
  'extensions-tertiary': 'hsla(230, 55%, 55%, 1)',
  // blue
  'extensions-transparent': 'hsla(230, 55%, 55%, 0.35)',
  // semi-transparent blue
  'extensions-light': 'hsla(255, 65%, 50%, 1)',
  // indigo

  'drop-highlight': '#26cfaa',
  // light green

  'menu-bar-background-image': 'linear-gradient(90deg, rgba(7, 142, 112, 0.75) 0%, rgba(38, 207, 170, 0.75) 16.67%, ' + 'rgba(152, 233, 193, 0.75) 33.33%, rgba(251, 254, 252, 0.75) 50%, ' + 'rgba(123, 173, 226, 0.75) 66.67%, rgba(80, 73, 203, 0.75) 83.33%, ' + 'rgba(63, 32, 130, 0.75) 100%)' // new gradient
};
const blockColors = {
  checkboxActiveBackground: '#078e70',
  // teal green
  checkboxActiveBorder: '#26cfaa' // light green
};


/***/ }),

/***/ "./src/lib/themes/accent/green(v2).js":
/*!********************************************!*\
  !*** ./src/lib/themes/accent/green(v2).js ***!
  \********************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'hsla(110, 100%, 65%, 1)',
  'motion-primary-transparent': 'hsla(110, 100%, 65%, 0.9)',
  'motion-tertiary': 'hsla(110, 60%, 45%, 1)',
  'looks-secondary': 'hsla(110, 100%, 65%, 1)',
  'looks-tertiary': 'hsla(110, 60%, 45%, 1)',
  'looks-transparent': 'hsla(110, 100%, 65%, 0.35)',
  'looks-light-transparent': 'hsla(110, 100%, 65%, 0.15)',
  'looks-secondary-dark': 'hsla(110, 60%, 50%, 1)',
  'extensions-primary': 'hsla(110, 100%, 65%, 1)',
  'extensions-tertiary': 'hsla(110, 60%, 45%, 1)',
  'extensions-transparent': 'hsla(110, 100%, 65%, 0.35)',
  'extensions-light': 'hsla(110, 60%, 55%, 1)',
  'drop-highlight': 'hsla(110, 100%, 75%, 1)'
};
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/accent/green-tea.js":
/*!********************************************!*\
  !*** ./src/lib/themes/accent/green-tea.js ***!
  \********************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#91B821',
  'motion-primary-transparent': '#91B821e6',
  'motion-tertiary': '#73941a',
  'looks-secondary': '#6BB392',
  'looks-tertiary': 'hsla(157, 35%, 46%, 1)',
  'looks-transparent': '#6BB39259',
  'looks-light-transparent': '#6BB39226',
  'looks-secondary-dark': 'hsla(157, 35%, 56%, 1)',
  'extensions-primary': 'hsla(73, 70%, 43%, 1)',
  'extensions-tertiary': 'hsla(73, 70%, 26%, 1)',
  'extensions-transparent': 'hsla(73, 70%, 43%, 0.35)',
  'extensions-light': 'hsla(157, 35%, 56%, 1)',
  'drop-highlight': '#b8d455'
};
const blockColors = {
  checkboxActiveBackground: '#91B821',
  checkboxActiveBorder: '#73941a'
};


/***/ }),

/***/ "./src/lib/themes/accent/green.js":
/*!****************************************!*\
  !*** ./src/lib/themes/accent/green.js ***!
  \****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#4caf50',
  // bright green
  'motion-primary-transparent': '#4caf50e6',
  // semi-transparent green
  'motion-tertiary': '#388e3c',
  // darker green

  'looks-secondary': '#4caf50',
  // bright green
  'looks-secondary-light': '#a8f7ab',
  // bright green
  'looks-secondary-lighter': '#ddfade',
  // bright green
  'looks-transparent': '#4caf5059',
  // more transparent green
  'looks-light-transparent': '#4caf5026',
  // very transparent green
  'looks-secondary-dark': 'hsla(122, 39%, 35%, 1)',
  // dark green
  'looks-secondary-darker': 'hsl(121,40%,22%)',
  // dark green
  'looks-secondary-deep-dark': 'hsl(120,38%,11%)',
  // dark green

  'extensions-primary': 'hsla(122, 39%, 65%, 1)',
  // light green
  'extensions-tertiary': 'hsla(122, 39%, 45%, 1)',
  // medium green
  'extensions-transparent': 'hsla(122, 39%, 65%, 0.35)',
  // semi-transparent green
  'extensions-light': 'hsla(122, 39%, 85%, 1)',
  // very light green

  'drop-highlight': '#80c883' // light green
};
const blockColors = {
  checkboxActiveBackground: '#4caf50',
  // bright green
  checkboxActiveBorder: '#388e3c' // darker green
};


/***/ }),

/***/ "./src/lib/themes/accent/honey.js":
/*!****************************************!*\
  !*** ./src/lib/themes/accent/honey.js ***!
  \****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#e6a817',
  'motion-primary-transparent': '#e6a817e6',
  'motion-tertiary': '#b8860b',
  'looks-secondary': '#e6a817',
  'looks-transparent': '#e6a81759',
  'looks-light-transparent': '#e6a81726',
  'looks-secondary-dark': 'hsla(42, 89%, 38%, 1)',
  'extensions-primary': 'hsla(42, 89%, 55%, 1)',
  'extensions-tertiary': 'hsla(30, 85%, 40%, 1)',
  'extensions-transparent': 'hsla(42, 89%, 55%, 0.35)',
  'extensions-light': 'hsla(48, 90%, 85%, 1)',
  'drop-highlight': '#ffd54f',
  'menu-bar-background-image': 'linear-gradient(90deg, ' + 'rgba(255, 213, 79, 0.75) 0%, ' + 'rgba(230, 168, 23, 0.75) 50%, ' + 'rgba(184, 134, 11, 0.75) 100%)'
};
const blockColors = {
  checkboxActiveBackground: '#e6a817',
  checkboxActiveBorder: '#b8860b'
};


/***/ }),

/***/ "./src/lib/themes/accent/hotfuse.js":
/*!******************************************!*\
  !*** ./src/lib/themes/accent/hotfuse.js ***!
  \******************************************/
/*! exports provided: guiColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
const guiColors = {
  'motion-primary': '#FF0EB0',
  'motion-primary-transparent': '#FF0EB0e6',
  'motion-tertiary': '#DB1C9C',
  'looks-secondary': '#FF0EB0',
  'looks-secondary-light': '#FF5CCA',
  'looks-secondary-lighter': '#FF8FDA',
  'looks-transparent': '#FF0EB059',
  'looks-light-transparent': '#e675c026',
  'looks-secondary-dark': '#CF0087',
  'looks-secondary-darker': '#AD006A',
  'looks-secondary-deep-dark': '#800042',
  'data-primary': '#8d00ff',
  'extensions-primary': '#8d00ff',
  'extensions-tertiary': '#7200d0',
  'extensions-transparent': '#8d00ff35',
  'extensions-light': '#a63aff',
  'drop-highlight': '#FF0EB0',
  'menu-bar-background-image': 'linear-gradient(to right, #FF0EB0 0%, #8d00ff 100%)',
  'menu-bar-background-image-dark': 'linear-gradient(to right, #CF0087 0%, #5D00C2 100%)'
};


/***/ }),

/***/ "./src/lib/themes/accent/indigo-blue.js":
/*!**********************************************!*\
  !*** ./src/lib/themes/accent/indigo-blue.js ***!
  \**********************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#5a00ff',
  'motion-primary-transparent': 'hsla(261, 100%, 50%, 0.35)',
  'motion-tertiary': '#4600c7',
  'looks-secondary': '#5a00ff',
  'looks-secondary-light': '#7e39fd',
  'looks-secondary-lighter': '#a16ffb',
  'looks-transparent': 'hsla(289, 100%, 39%, 0.15)',
  'looks-light-transparent': 'hsla(261, 100%, 50%, 0.15)',
  'looks-secondary-dark': '#5900ff',
  'looks-secondary-darker': '#4002b3',
  'looks-secondary-deep-dark': '#240066',
  'extensions-primary': 'hsla(261, 100%, 50%, 1)',
  'extensions-tertiary': 'hsla(261, 100%, 39%, 1)',
  'extensions-transparent': 'hsla(261, 100%, 50%, 0.35)',
  'extensions-light': '#7e39fd',
  'drop-highlight': '#722bf5'
};
const blockColors = {
  checkboxActiveBackground: '#5a00ff',
  checkboxActiveBorder: '#4b05ca'
};


/***/ }),

/***/ "./src/lib/themes/accent/indigo.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/indigo.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#4800cc',
  'motion-primary-transparent': '#4800cce6',
  'motion-tertiary': '#2D00A8',
  'looks-secondary': '#4800cc',
  'looks-secondary-light': '#9a69f3',
  'looks-secondary-lighter': '#eadefe',
  'looks-transparent': '#5208D959',
  'looks-light-transparent': '#6B30D926',
  'looks-secondary-dark': '#220099',
  'looks-secondary-darker': '#1d017c',
  'looks-secondary-deep-dark': '#0b012e',
  'extensions-primary': 'hsla(261, 100%, 38%, 1)',
  'extensions-tertiary': 'hsla(261, 100%, 15%, 1)',
  'extensions-transparent': 'hsla(261, 100%, 38%, 0.43)',
  'extensions-light': 'hsla(261, 100%, 56%, 1)',
  'drop-highlight': '#7E4ED9'
};
const blockColors = {
  checkboxActiveBackground: '#4800cc',
  checkboxActiveBorder: '#3100AD'
};


/***/ }),

/***/ "./src/lib/themes/accent/lavender.js":
/*!*******************************************!*\
  !*** ./src/lib/themes/accent/lavender.js ***!
  \*******************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'oklab(0.75 0.08 -0.12)',
  'motion-primary-transparent': 'oklab(0.75 0.08 -0.12 / 0.75)',
  'motion-tertiary': 'oklab(0.78 0.06 -0.10)',
  'looks-secondary': 'oklab(0.75 0.08 -0.12)',
  'looks-transparent': 'oklab(0.75 0.08 -0.12 / 0.35)',
  'looks-light-transparent': 'oklab(0.75 0.08 -0.12 / 0.15)',
  'looks-secondary-dark': 'oklab(0.65 0.10 -0.14)',
  'extensions-primary': 'oklab(0.78 0.06 -0.10)',
  'extensions-tertiary': 'oklab(0.82 0.04 -0.08)',
  'extensions-transparent': 'oklab(0.78 0.06 -0.10 / 0.35)',
  'extensions-light': 'oklab(0.85 0.02 -0.06)',
  'drop-highlight': 'oklab(0.75 0.08 -0.12)',
  'menu-bar-background-image': 'linear-gradient(90deg, ' + 'oklab(0.72 0.10 -0.14 / 0.8) 0%, ' +
  // deep lavender
  'oklab(0.75 0.08 -0.12 / 0.8) 20%, ' +
  // lavender
  'oklab(0.78 0.06 -0.08 / 0.8) 40%, ' +
  // light lavender
  'oklab(0.80 0.08 -0.04 / 0.8) 60%, ' +
  // lavender pink
  'oklab(0.82 0.10 0.00 / 0.8) 80%, ' +
  // soft pink
  'oklab(0.85 0.08 0.04 / 0.8) 100%)' // pale pink
};
const blockColors = {
  checkboxActiveBackground: 'oklab(0.75 0.08 -0.12)',
  checkboxActiveBorder: 'oklab(0.78 0.06 -0.10)'
};


/***/ }),

/***/ "./src/lib/themes/accent/lesbian.js":
/*!******************************************!*\
  !*** ./src/lib/themes/accent/lesbian.js ***!
  \******************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'oklab(0.65 0.15 -0.04)',
  'motion-primary-transparent': 'oklab(0.65 0.15 -0.04 / 0.75)',
  'motion-tertiary': 'oklab(0.47 0.19 -0.02)',
  'looks-secondary': 'oklab(0.65 0.15 -0.04)',
  'looks-transparent': 'oklab(0.65 0.15 -0.04 / 0.35)',
  'looks-light-transparent': 'oklab(0.65 0.15 -0.04 / 0.15)',
  'looks-secondary-dark': 'oklab(0.47 0.19 -0.02)',
  'extensions-primary': 'oklab(0.78 0.09 0.12)',
  'extensions-tertiary': 'oklab(0.57 0.17 0.11)',
  'extensions-transparent': 'oklab(0.78 0.09 0.12 / 0.35)',
  'extensions-light': 'oklab(0.85 0.07 0.02)',
  'drop-highlight': 'oklab(0.78 0.09 0.12)',
  'menu-bar-background-image': 'linear-gradient(90deg, ' + 'oklab(0.57 0.17 0.11 / 0.75) 0%, ' + 'oklab(0.78 0.09 0.12 / 0.75) 25%, ' + 'oklab(1.00 0.00 0.00 / 0.75) 50%, ' + 'oklab(0.65 0.15 -0.04 / 0.75) 75%, ' + 'oklab(0.47 0.19 -0.02 / 0.75) 100%)'
};
const blockColors = {
  checkboxActiveBackground: 'oklab(0.65 0.15 -0.04)',
  checkboxActiveBorder: 'oklab(0.47 0.19 -0.02)'
};


/***/ }),

/***/ "./src/lib/themes/accent/lime.js":
/*!***************************************!*\
  !*** ./src/lib/themes/accent/lime.js ***!
  \***************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#80f51b',
  'motion-primary-transparent': 'hsla(92, 92%, 53%, 0.35)',
  'motion-tertiary': '#68c616',
  'motion-primary-dark': '#7ed200',
  'looks-secondary': '#80f51b',
  // bright green
  'looks-secondary-light': '#aaff60',
  // bright green
  'looks-secondary-lighter': '#d1ffa8',
  // bright green
  'looks-transparent': '#80f51b59',
  // more transparent green
  'looks-light-transparent': '#aaff6026',
  // very transparent green
  'looks-secondary-dark': '#7ed200',
  // dark green
  'looks-secondary-darker': '#599302',
  // dark green
  'looks-secondary-deep-dark': '#385c01',
  // dark green

  'extensions-primary': '#80f51b',
  'extensions-tertiary': '#68c616',
  'extensions-transparent': 'hsla(92, 91%, 53%, 0.35)',
  'extensions-light': '#89ee30',
  'drop-highlight': 'hsl(92,100%,71%)'
};
const blockColors = {
  checkboxActiveBackground: '#80f51b',
  // bright green
  checkboxActiveBorder: '#5ab70a' // darker green
};


/***/ }),

/***/ "./src/lib/themes/accent/magenta-purple.js":
/*!*************************************************!*\
  !*** ./src/lib/themes/accent/magenta-purple.js ***!
  \*************************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#d415ff',
  'motion-primary-transparent': 'hsla(289, 100%, 54%, 0.35)',
  'motion-tertiary': '#a300c7',
  'looks-secondary': '#d415ff',
  'looks-secondary-light': '#df4eff',
  'looks-secondary-lighter': '#e892fb',
  'looks-transparent': 'hsla(289, 100%, 39%, 0.15)',
  'looks-light-transparent': '#FF4DC126',
  'looks-secondary-dark': '#58039c',
  'looks-secondary-darker': '#360160',
  'looks-secondary-deep-dark': '#1d0133',
  'extensions-primary': '#d415ff',
  'extensions-tertiary': '#a300c7',
  'extensions-transparent': 'hsla(289, 100%, 54%, 0.35)',
  'extensions-light': '#df4eff',
  'drop-highlight': '#e670ff'
};
const blockColors = {
  checkboxActiveBackground: '#d415ff',
  checkboxActiveBorder: '#a509c8'
};


/***/ }),

/***/ "./src/lib/themes/accent/magenta.js":
/*!******************************************!*\
  !*** ./src/lib/themes/accent/magenta.js ***!
  \******************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#FF269A',
  'motion-primary-transparent': '#FF269Ae6',
  'motion-tertiary': '#E60D8C',
  'looks-secondary': '#FF269A',
  'looks-secondary-light': '#ffa7d6',
  'looks-secondary-lighter': '#ffd8ed',
  'looks-transparent': '#FF4DC159',
  'looks-light-transparent': '#FF4DC126',
  'looks-secondary-dark': 'hsla(330, 68%, 57%, 1)',
  'looks-secondary-darker': 'hsl(330,53%,30%)',
  'looks-secondary-deep-dark': 'hsl(330,53%,20%)',
  'extensions-primary': 'hsla(315, 85%, 65%, 1)',
  'extensions-tertiary': 'hsla(315, 85%, 57%, 1)',
  'extensions-transparent': 'hsla(315, 85%, 65%, 0.43)',
  'extensions-light': 'hsla(315, 57%, 85%, 1)',
  'drop-highlight': '#FF8ADC'
};
const blockColors = {
  checkboxActiveBackground: '#FF269A',
  checkboxActiveBorder: '#FC00B9'
};


/***/ }),

/***/ "./src/lib/themes/accent/matrix.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/matrix.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#00a832',
  'motion-primary-transparent': '#00a832e6',
  'motion-tertiary': '#007a24',
  'looks-secondary': '#00a832',
  'looks-transparent': '#00a83259',
  'looks-light-transparent': '#00a83226',
  'looks-secondary-dark': 'hsla(138, 100%, 24%, 1)',
  'extensions-primary': 'hsla(138, 100%, 33%, 1)',
  'extensions-tertiary': 'hsla(138, 100%, 18%, 1)',
  'extensions-transparent': 'hsla(138, 100%, 33%, 0.35)',
  'extensions-light': 'hsla(138, 60%, 75%, 1)',
  'drop-highlight': '#00ff41',
  'menu-bar-background-image': 'linear-gradient(90deg, ' + 'rgba(0, 20, 0, 0.85) 0%, ' + 'rgba(0, 59, 0, 0.8) 40%, ' + 'rgba(0, 143, 17, 0.75) 80%, ' + 'rgba(0, 255, 65, 0.7) 100%)'
};
const blockColors = {
  checkboxActiveBackground: '#00a832',
  checkboxActiveBorder: '#00ff41'
};


/***/ }),

/***/ "./src/lib/themes/accent/miku.js":
/*!***************************************!*\
  !*** ./src/lib/themes/accent/miku.js ***!
  \***************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#39c5bb',
  'motion-primary-transparent': '#39c5bbe6',
  'motion-tertiary': '#2c9e96',
  'looks-secondary': '#39c5bb',
  'looks-transparent': '#39c5bb59',
  'looks-light-transparent': '#39c5bb26',
  'looks-secondary-dark': '#2c9e96',
  'extensions-primary': '#39c5bb',
  'extensions-tertiary': '#2c9e96',
  'extensions-transparent': '#39c5bb59',
  'extensions-light': '#8ae3d9',
  'drop-highlight': '#8ae3d9'
};
const blockColors = {
  checkboxActiveBackground: '#39c5bb',
  checkboxActiveBorder: '#2c9e96'
};


/***/ }),

/***/ "./src/lib/themes/accent/mint.js":
/*!***************************************!*\
  !*** ./src/lib/themes/accent/mint.js ***!
  \***************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'oklab(0.78 -0.12 0.08)',
  'motion-primary-transparent': 'oklab(0.78 -0.12 0.08 / 0.75)',
  'motion-tertiary': 'oklab(0.80 -0.10 0.06)',
  'looks-secondary': 'oklab(0.78 -0.12 0.08)',
  'looks-transparent': 'oklab(0.78 -0.12 0.08 / 0.35)',
  'looks-light-transparent': 'oklab(0.78 -0.12 0.08 / 0.15)',
  'looks-secondary-dark': 'oklab(0.68 -0.14 0.10)',
  'looks-secondary-light': 'oklab(0.88 -0.12 0.08)',
  //light
  'looks-secondary-lighter': 'oklab(0.96 -0.12 0.08)',
  //lighter
  'looks-secondary-darker': 'oklab(0.56 -0.14 0.10)',
  //darker
  'looks-secondary-deep-dark': 'oklab(0.43 -0.14 0.10)',
  //darkest

  'extensions-primary': 'oklab(0.80 -0.10 0.06)',
  'extensions-tertiary': 'oklab(0.75 -0.08 -0.02)',
  'extensions-transparent': 'oklab(0.80 -0.10 0.06 / 0.35)',
  'extensions-light': 'oklab(0.85 -0.06 0.04)',
  'drop-highlight': 'oklab(0.78 -0.12 0.08)',
  'menu-bar-background-image': 'linear-gradient(90deg, ' + 'oklab(0.75 -0.14 0.10 / 0.8) 0%, ' +
  // fresh mint
  'oklab(0.78 -0.12 0.08 / 0.8) 20%, ' +
  // mint green
  'oklab(0.80 -0.10 0.04 / 0.8) 40%, ' +
  // light mint
  'oklab(0.82 -0.08 0.00 / 0.8) 60%, ' +
  // mint white
  'oklab(0.80 -0.06 -0.04 / 0.8) 80%, ' +
  // mint cyan
  'oklab(0.75 -0.04 -0.08 / 0.8) 100%)' // soft cyan
};
const blockColors = {
  checkboxActiveBackground: 'oklab(0.78 -0.12 0.08)',
  checkboxActiveBorder: 'oklab(0.80 -0.10 0.06)'
};


/***/ }),

/***/ "./src/lib/themes/accent/nebula.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/nebula.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'oklab(0.55 0.08 -0.12)',
  'motion-primary-transparent': 'oklab(0.55 0.08 -0.12 / 0.75)',
  'motion-tertiary': 'oklab(0.60 0.06 -0.10)',
  'looks-secondary': 'oklab(0.55 0.08 -0.12)',
  'looks-transparent': 'oklab(0.55 0.08 -0.12 / 0.35)',
  'looks-light-transparent': 'oklab(0.55 0.08 -0.12 / 0.15)',
  'looks-secondary-dark': 'oklab(0.45 0.10 -0.14)',
  'looks-secondary-light': 'oklab(0.67 0.08 -0.12)',
  //light
  'looks-secondary-lighter': 'oklab(0.77 0.08 -0.12)',
  //lighter
  'looks-secondary-darker': 'oklab(0.35 0.08 -0.12)',
  //darker
  'looks-secondary-deep-dark': 'oklab(0.20 0.08 -0.12)',
  //darkest

  'extensions-primary': 'oklab(0.60 0.06 -0.10)',
  'extensions-tertiary': 'oklab(0.50 0.12 0.04)',
  'extensions-transparent': 'oklab(0.60 0.06 -0.10 / 0.35)',
  'extensions-light': 'oklab(0.70 0.04 -0.08)',
  'drop-highlight': 'oklab(0.55 0.08 -0.12)',
  'menu-bar-background-image': 'linear-gradient(90deg, ' + 'oklab(0.25 0.02 -0.08 / 0.9) 0%, ' +
  // deep space black
  'oklab(0.35 0.08 -0.12 / 0.85) 15%, ' +
  // dark purple
  'oklab(0.45 0.12 -0.08 / 0.8) 30%, ' +
  // purple
  'oklab(0.55 0.15 0.02 / 0.8) 50%, ' +
  // magenta-pink
  'oklab(0.65 0.08 0.08 / 0.8) 70%, ' +
  // coral
  'oklab(0.75 0.02 0.12 / 0.8) 85%, ' +
  // gold
  'oklab(0.85 -0.02 0.08 / 0.8) 100%)' // bright yellow
};
const blockColors = {
  checkboxActiveBackground: 'oklab(0.55 0.08 -0.12)',
  checkboxActiveBorder: 'oklab(0.60 0.06 -0.10)'
};


/***/ }),

/***/ "./src/lib/themes/accent/nitrofire.js":
/*!********************************************!*\
  !*** ./src/lib/themes/accent/nitrofire.js ***!
  \********************************************/
/*! exports provided: guiColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
const guiColors = {
  'motion-primary': '#ff9000',
  'motion-primary-transparent': '#FF9000e6',
  'motion-tertiary': '#d37700',
  'looks-secondary': '#ff9000',
  'looks-secondary-light': '#ffb144',
  'looks-secondary-lighter': '#ffc879',
  'looks-transparent': '#ff900059',
  'looks-light-transparent': '#ffb14426',
  'looks-secondary-dark': '#bb6c00',
  'looks-secondary-darker': '#784600',
  'looks-secondary-deep-dark': '#502e00',
  'data-primary': '#ff0004',
  'extensions-primary': '##ff0004',
  'extensions-tertiary': '#c10004',
  'extensions-transparent': '##ff000435',
  'extensions-light': '#ff4f52',
  'drop-highlight': '#ff970f',
  'menu-bar-background-image': 'linear-gradient(to right, #ff9000 0%, #ff0004 100%)',
  'menu-bar-background-image-dark': 'linear-gradient(to right, #bb6c00 0%, #a00104 100%)'
};


/***/ }),

/***/ "./src/lib/themes/accent/nonbinary.js":
/*!********************************************!*\
  !*** ./src/lib/themes/accent/nonbinary.js ***!
  \********************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'oklab(0.59 0.11 -0.15)',
  'motion-primary-transparent': 'oklab(0.59 0.11 -0.15 / 0.75)',
  'motion-tertiary': 'oklab(0.50 0.12 -0.16)',
  'looks-secondary': 'oklab(0.59 0.11 -0.15)',
  'looks-transparent': 'oklab(0.59 0.11 -0.15 / 0.35)',
  'looks-light-transparent': 'oklab(0.59 0.11 -0.15 / 0.15)',
  'looks-secondary-dark': 'oklab(0.48 0.12 -0.16)',
  'extensions-primary': 'oklab(0.94 -0.06 0.18)',
  'extensions-tertiary': 'oklab(0.59 0.11 -0.15)',
  'extensions-transparent': 'oklab(0.94 -0.06 0.18 / 0.35)',
  'extensions-light': 'oklab(0.85 0.04 -0.08)',
  'drop-highlight': 'oklab(0.94 -0.06 0.18)',
  'menu-bar-background-image': 'linear-gradient(90deg, ' + 'oklab(0.94 -0.06 0.18 / 0.75) 0%, ' + 'oklab(1.00 0.00 0.00 / 0.75) 33%, ' + 'oklab(0.59 0.11 -0.15 / 0.75) 66%, ' + 'oklab(0.29 0.00 0.00 / 0.75) 100%)'
};
const blockColors = {
  checkboxActiveBackground: 'oklab(0.59 0.11 -0.15)',
  checkboxActiveBorder: 'oklab(0.94 -0.06 0.18)'
};


/***/ }),

/***/ "./src/lib/themes/accent/ocean.js":
/*!****************************************!*\
  !*** ./src/lib/themes/accent/ocean.js ***!
  \****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'oklab(0.65 -0.08 -0.12)',
  'motion-primary-transparent': 'oklab(0.65 -0.08 -0.12 / 0.75)',
  'motion-tertiary': 'oklab(0.70 -0.06 -0.10)',
  'looks-secondary': 'oklab(0.65 -0.08 -0.12)',
  'looks-transparent': 'oklab(0.65 -0.08 -0.12 / 0.35)',
  'looks-light-transparent': 'oklab(0.65 -0.08 -0.12 / 0.15)',
  'looks-secondary-dark': 'oklab(0.55 -0.10 -0.14)',
  'extensions-primary': 'oklab(0.70 -0.06 -0.10)',
  'extensions-tertiary': 'oklab(0.75 -0.04 -0.08)',
  'extensions-transparent': 'oklab(0.70 -0.06 -0.10 / 0.35)',
  'extensions-light': 'oklab(0.80 -0.02 -0.06)',
  'drop-highlight': 'oklab(0.65 -0.08 -0.12)',
  'menu-bar-background-image': 'linear-gradient(90deg, ' + 'oklab(0.45 -0.05 -0.15 / 0.8) 0%, ' +
  // deep blue
  'oklab(0.55 -0.08 -0.12 / 0.8) 20%, ' +
  // ocean blue
  'oklab(0.65 -0.08 -0.08 / 0.8) 40%, ' +
  // teal
  'oklab(0.70 -0.06 -0.04 / 0.8) 60%, ' +
  // aqua
  'oklab(0.80 -0.02 -0.02 / 0.8) 80%, ' +
  // cyan
  'oklab(0.85 0.00 0.00 / 0.8) 100%)' // light cyan
};
const blockColors = {
  checkboxActiveBackground: 'oklab(0.65 -0.08 -0.12)',
  checkboxActiveBorder: 'oklab(0.70 -0.06 -0.10)'
};


/***/ }),

/***/ "./src/lib/themes/accent/omnimax-blue.js":
/*!***********************************************!*\
  !*** ./src/lib/themes/accent/omnimax-blue.js ***!
  \***********************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#4aa8ff',
  // bright blue
  'motion-dark': '#3484CF',
  // way darker blue
  'motion-primary-transparent': '#4aa8ffe6',
  // semi-transparent blue
  'motion-tertiary': '#4092de',
  // darker blue

  'looks-secondary': '#4aa8ff',
  // bright blue
  'looks-transparent': '#4aa8ff59',
  // more transparent blue
  'looks-light-transparent': '#4aa8ff26',
  // very transparent blue
  'looks-secondary-dark': '#1065CC',
  // dark blue

  'looks-secondary-light': '#96CDFF',
  //light
  'looks-secondary-lighter': '#BFE0FF',
  //lighter
  'looks-secondary-darker': '#0043A3',
  //darker
  'looks-secondary-deep-dark': '#002C87',
  //darkest

  'extensions-primary': '#9ecdf9',
  // light blue
  'extensions-tertiary': '#76baf9',
  // medium blue
  'extensions-transparent': '#76baf935',
  // semi-transparent blue
  'extensions-light': '#b0d6f9',
  // very light blue

  'menu-bar-background': '#4aa8ff',
  // bright blue
  'menu-bar-background-dark': '#3484CF',
  // way darker blue

  'drop-highlight': '#9ecdf9' // light blue
};
const blockColors = {
  checkboxActiveBackground: '#4aa8ff',
  // bright blue
  checkboxActiveBorder: '#4092de' // darker blue
};


/***/ }),

/***/ "./src/lib/themes/accent/orange.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/orange.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#ff5726',
  'motion-primary-transparent': '#ff5726e6',
  'motion-tertiary': '#e63e0d',
  'looks-secondary': '#ff5726',
  'looks-secondary-light': '#f7977b',
  'looks-secondary-lighter': '#ffdfd5',
  'looks-transparent': '#ff5d4d59',
  'looks-light-transparent': '#ff5d4d26',
  'looks-secondary-dark': 'hsl(14,55%,55%)',
  'looks-secondary-darker': 'hsl(14,40%,40%)',
  'looks-secondary-deep-dark': 'hsl(16,26%,17%)',
  'extensions-primary': 'hsla(10, 85%, 65%, 1)',
  'extensions-tertiary': 'hsla(10, 85%, 57%, 1)',
  'extensions-transparent': 'hsla(10, 85%, 65%, 0.43)',
  'extensions-light': 'hsla(10, 57%, 85%, 1)',
  'drop-highlight': '#ff9d8a'
};
const blockColors = {
  checkboxActiveBackground: '#ff5726',
  checkboxActiveBorder: '#fc3900'
};


/***/ }),

/***/ "./src/lib/themes/accent/oubi.js":
/*!***************************************!*\
  !*** ./src/lib/themes/accent/oubi.js ***!
  \***************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#3C7699',
  'motion-primary-transparent': '#3C7699e6',
  'motion-tertiary': '#305e7a',
  'looks-secondary': '#a6e699',
  'looks-transparent': '#75C1C459',
  'looks-light-transparent': '#75C1C426',
  'looks-secondary-dark': '#a6e699',
  'extensions-primary': 'hsla(203, 44%, 42%, 1)',
  'extensions-tertiary': 'hsla(203, 44%, 25%, 1)',
  'extensions-transparent': 'hsla(203, 44%, 42%, 0.35)',
  'extensions-light': '#a6e699',
  'drop-highlight': '#9ce88d'
};
const blockColors = {
  checkboxActiveBackground: '#3C7699',
  checkboxActiveBorder: '#305e7a'
};


/***/ }),

/***/ "./src/lib/themes/accent/pale-blue.js":
/*!********************************************!*\
  !*** ./src/lib/themes/accent/pale-blue.js ***!
  \********************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#3C7699',
  'motion-primary-transparent': '#3C7699e6',
  'motion-tertiary': '#305e7a',
  'looks-secondary': '#75C1C4',
  'looks-tertiary': 'hsla(181, 44%, 51%, 1)',
  'looks-transparent': '#75C1C459',
  'looks-light-transparent': '#75C1C426',
  'looks-secondary-dark': 'hsla(181, 44%, 61%, 1)',
  'extensions-primary': 'hsla(203, 44%, 42%, 1)',
  'extensions-tertiary': 'hsla(203, 44%, 25%, 1)',
  'extensions-transparent': 'hsla(203, 44%, 42%, 0.35)',
  'extensions-light': 'hsla(181, 44%, 61%, 1)',
  'drop-highlight': '#5da8cc'
};
const blockColors = {
  checkboxActiveBackground: '#3C7699',
  checkboxActiveBorder: '#305e7a'
};


/***/ }),

/***/ "./src/lib/themes/accent/pan.js":
/*!**************************************!*\
  !*** ./src/lib/themes/accent/pan.js ***!
  \**************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'oklab(0.66 0.25 -0.00)',
  'motion-primary-transparent': 'oklab(0.66 0.25 -0.00 / 0.75)',
  'motion-tertiary': 'oklab(0.58 0.24 -0.01)',
  'looks-secondary': 'oklab(0.66 0.25 -0.00)',
  'looks-transparent': 'oklab(0.66 0.25 -0.00 / 0.35)',
  'looks-light-transparent': 'oklab(0.66 0.25 -0.00 / 0.15)',
  'looks-secondary-dark': 'oklab(0.56 0.23 -0.01)',
  'extensions-primary': 'oklab(0.89 -0.02 0.18)',
  'extensions-tertiary': 'oklab(0.73 -0.08 -0.14)',
  'extensions-transparent': 'oklab(0.89 -0.02 0.18 / 0.35)',
  'extensions-light': 'oklab(0.85 -0.05 -0.08)',
  'drop-highlight': 'oklab(0.73 -0.08 -0.14)',
  'menu-bar-background-image': 'linear-gradient(90deg, ' + 'oklab(0.66 0.25 -0.00 / 0.75) 0%, ' + 'oklab(0.89 -0.02 0.18 / 0.75) 50%, ' + 'oklab(0.73 -0.08 -0.14 / 0.75) 100%)'
};
const blockColors = {
  checkboxActiveBackground: 'oklab(0.66 0.25 -0.00)',
  checkboxActiveBorder: 'oklab(0.73 -0.08 -0.14)'
};


/***/ }),

/***/ "./src/lib/themes/accent/pink(v2).js":
/*!*******************************************!*\
  !*** ./src/lib/themes/accent/pink(v2).js ***!
  \*******************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'hsla(325, 60%, 60%, 1)',
  'motion-primary-transparent': 'hsla(325, 60%, 60%, 0.9)',
  'motion-tertiary': 'hsla(325, 42%, 51%, 1)',
  'looks-secondary': 'hsla(325, 60%, 60%, 1)',
  'looks-tertiary': 'hsla(325, 42%, 51%, 1)',
  'looks-transparent': 'hsla(325, 60%, 60%, 0.35)',
  'looks-light-transparent': 'hsla(325, 60%, 60%, 0.15)',
  'looks-secondary-dark': 'hsla(325, 42%, 51%, 1)',
  'extensions-primary': 'hsla(325, 60%, 60%, 1)',
  'extensions-tertiary': 'hsla(325, 42%, 51%, 1)',
  'extensions-transparent': 'hsla(325, 60%, 60%, 0.35)',
  'extensions-light': 'hsla(325, 42%, 51%, 1)',
  'drop-highlight': 'hsla(325, 60%, 70%, 1)'
};
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/accent/pink.js":
/*!***************************************!*\
  !*** ./src/lib/themes/accent/pink.js ***!
  \***************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'hsla(330, 80%, 70%, 1)',
  'motion-primary-transparent': 'hsla(330, 80%, 70%, 0.9)',
  'motion-tertiary': 'hsla(330, 60%, 55%, 1)',
  'looks-secondary': 'hsla(330, 80%, 70%, 1)',
  'looks-tertiary': 'hsla(330, 80%, 60%, 1)',
  'looks-transparent': 'hsla(330, 80%, 70%, 0.35)',
  'looks-light-transparent': 'hsla(330, 80%, 70%, 0.15)',
  'looks-secondary-dark': 'hsla(330, 60%, 55%, 1)',
  'looks-secondary-light': 'hsla(330, 80%, 82%, 1)',
  //light
  'looks-secondary-lighter': 'hsla(330, 80%, 95%, 1)',
  //lighter
  'looks-secondary-darker': 'hsla(330, 60%, 43%, 1)',
  //darker
  'looks-secondary-deep-dark': 'hsla(330, 60%, 30%, 1)',
  //darkest

  'extensions-primary': 'hsla(330, 80%, 70%, 1)',
  'extensions-tertiary': 'hsla(330, 80%, 60%, 1)',
  'extensions-transparent': 'hsla(330, 80%, 70%, 0.35)',
  'extensions-light': 'hsla(330, 60%, 55%, 1)',
  'drop-highlight': 'hsla(330, 100%, 80%, 1)'
};
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/accent/purple.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/purple.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'hsla(260, 60%, 60%, 1)',
  'motion-primary-transparent': 'hsla(260, 60%, 60%, 0.9)',
  'motion-tertiary': 'hsla(260, 42%, 51%, 1)',
  'looks-secondary': 'hsla(260, 60%, 60%, 1)',
  'looks-secondary-light': 'hsla(260, 80%, 80%, 1)',
  'looks-secondary-lighter': 'hsla(260, 95%, 95%, 1)',
  'looks-transparent': 'hsla(260, 60%, 60%, 0.35)',
  'looks-light-transparent': 'hsla(260, 60%, 60%, 0.15)',
  'looks-secondary-dark': 'hsla(260, 42%, 52%, 1)',
  'looks-secondary-darker': 'hsl(260,30%,30%)',
  'looks-secondary-deep-dark': 'hsla(260, 10%, 10%, 1)',
  'drop-highlight': 'hsl(260,100%,82%)'
};
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/accent/rainbow.js":
/*!******************************************!*\
  !*** ./src/lib/themes/accent/rainbow.js ***!
  \******************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#ff4c4c',
  'motion-primary-transparent': '#ff4c4ce6',
  'motion-tertiary': '#cc3333',
  'looks-secondary': '#ff4c4c',
  'looks-secondary-light': '#fe9c9c',
  'looks-secondary-lighter': '#ffd7d7',
  'looks-transparent': '#ff4d4d59',
  'looks-light-transparent': '#ff4d4d26',
  'looks-secondary-dark': 'hsla(0, 42%, 51%, 1)',
  'looks-secondary-darker': 'hsl(0,30%,28%)',
  'looks-secondary-deep-dark': 'hsl(0,15%,11%)',
  'extensions-primary': 'hsla(10, 85%, 65%, 1)',
  'extensions-tertiary': 'hsla(10, 85%, 40%, 1)',
  'extensions-transparent': 'hsla(10, 85%, 65%, 0.35)',
  'extensions-light': 'hsla(10, 57%, 85%, 1)',
  'drop-highlight': '#ff8c8c',
  // eslint-disable-next-line max-len
  'menu-bar-background-image': 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)',
  'menu-bar-background-image-dark': 'linear-gradient(to right, #8C0000,#991D00,#969600,#008C00,#002BA6,#4400A6,#8A00A6)'
};
const blockColors = {
  checkboxActiveBackground: '#ff4c4c',
  checkboxActiveBorder: '#cc3333'
};


/***/ }),

/***/ "./src/lib/themes/accent/red.js":
/*!**************************************!*\
  !*** ./src/lib/themes/accent/red.js ***!
  \**************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#ff4c4c',
  'motion-primary-transparent': '#ff4c4ce6',
  'motion-tertiary': '#cc3333',
  'looks-secondary': '#ff4c4c',
  'looks-secondary-light': '#fe9c9c',
  'looks-secondary-lighter': '#ffd7d7',
  'looks-transparent': '#ff4d4d59',
  'looks-light-transparent': '#ff4d4d26',
  'looks-secondary-dark': 'hsla(0, 42%, 51%, 1)',
  'looks-secondary-darker': 'hsl(0,30%,28%)',
  'looks-secondary-deep-dark': 'hsl(0,15%,11%)',
  'extensions-primary': 'hsla(10, 85%, 65%, 1)',
  'extensions-tertiary': 'hsla(10, 85%, 40%, 1)',
  'extensions-transparent': 'hsla(10, 85%, 65%, 0.35)',
  'extensions-light': 'hsla(10, 57%, 85%, 1)',
  'drop-highlight': '#ff8c8c'
};
const blockColors = {
  checkboxActiveBackground: '#ff4c4c',
  checkboxActiveBorder: '#cc3333'
};


/***/ }),

/***/ "./src/lib/themes/accent/rotur.js":
/*!****************************************!*\
  !*** ./src/lib/themes/accent/rotur.js ***!
  \****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'oklab(0.42 -0.01 -0.08)',
  'motion-primary-transparent': 'oklab(0.42 -0.01 -0.08 / 0.8)',
  'motion-tertiary': 'oklab(0.37 0.01 -0.07)',
  'looks-secondary': 'oklab(0.37 0.01 -0.07)',
  'looks-transparent': 'oklab(0.37 0.01 -0.07 / 0.6)',
  'looks-light-transparent': 'oklab(0.37 0.01 -0.07 / 0.3)',
  'looks-secondary-dark': 'oklab(0.30 0.02 -0.04)',
  'extensions-primary': 'oklab(0.30 0.02 -0.04)',
  'extensions-tertiary': 'oklab(0.30 0.02 -0.04 / 0.8)',
  'extensions-transparent': 'oklab(0.30 0.02 -0.04 / 0.35)',
  'extensions-light': 'oklab(0.42 -0.01 -0.08 / 0.9)',
  'drop-highlight': 'oklab(0.37 0.01 -0.07)',
  'menu-bar-background-image': 'linear-gradient(90deg, ' + 'oklab(0.42 -0.01 -0.08 / 0.4) 0%, ' + 'oklab(0.37 0.01 -0.07 / 0.4) 50%, ' + 'oklab(0.30 0.02 -0.04 / 0.4) 100%)'
};
const blockColors = {
  checkboxActiveBackground: 'oklab(0.42 -0.01 -0.08)',
  checkboxActiveBorder: 'oklab(0.37 0.01 -0.07)'
};


/***/ }),

/***/ "./src/lib/themes/accent/sky.js":
/*!**************************************!*\
  !*** ./src/lib/themes/accent/sky.js ***!
  \**************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'oklab(0.80 -0.04 -0.08)',
  'motion-primary-transparent': 'oklab(0.80 -0.04 -0.08 / 0.75)',
  'motion-tertiary': 'oklab(0.82 -0.02 -0.06)',
  'looks-secondary': 'oklab(0.80 -0.04 -0.08)',
  'looks-transparent': 'oklab(0.80 -0.04 -0.08 / 0.35)',
  'looks-light-transparent': 'oklab(0.80 -0.04 -0.08 / 0.15)',
  'looks-secondary-dark': 'oklab(0.70 -0.06 -0.10)',
  'extensions-primary': 'oklab(0.82 -0.02 -0.06)',
  'extensions-tertiary': 'oklab(0.85 0.00 -0.04)',
  'extensions-transparent': 'oklab(0.82 -0.02 -0.06 / 0.35)',
  'extensions-light': 'oklab(0.88 0.00 -0.02)',
  'drop-highlight': 'oklab(0.80 -0.04 -0.08)',
  'menu-bar-background-image': 'linear-gradient(90deg, ' + 'oklab(0.75 -0.06 -0.10 / 0.8) 0%, ' +
  // soft blue
  'oklab(0.80 -0.04 -0.08 / 0.8) 20%, ' +
  // sky blue
  'oklab(0.83 -0.02 -0.06 / 0.8) 40%, ' +
  // light blue
  'oklab(0.86 0.00 -0.04 / 0.8) 60%, ' +
  // pale blue
  'oklab(0.88 0.00 -0.02 / 0.8) 80%, ' +
  // very pale blue
  'oklab(0.92 0.00 0.00 / 0.8) 100%)' // almost white
};
const blockColors = {
  checkboxActiveBackground: 'oklab(0.80 -0.04 -0.08)',
  checkboxActiveBorder: 'oklab(0.82 -0.02 -0.06)'
};


/***/ }),

/***/ "./src/lib/themes/accent/sunset.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/sunset.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'oklab(0.75 0.12 0.08)',
  'motion-primary-transparent': 'oklab(0.75 0.12 0.08 / 0.75)',
  'motion-tertiary': 'oklab(0.72 0.14 0.06)',
  'looks-secondary': 'oklab(0.75 0.12 0.08)',
  'looks-transparent': 'oklab(0.75 0.12 0.08 / 0.35)',
  'looks-light-transparent': 'oklab(0.75 0.12 0.08 / 0.15)',
  'looks-secondary-dark': 'oklab(0.65 0.15 0.10)',
  'extensions-primary': 'oklab(0.72 0.14 0.06)',
  'extensions-tertiary': 'oklab(0.68 0.16 0.04)',
  'extensions-transparent': 'oklab(0.72 0.14 0.06 / 0.35)',
  'extensions-light': 'oklab(0.80 0.10 0.10)',
  'drop-highlight': 'oklab(0.75 0.12 0.08)',
  'menu-bar-background-image': 'linear-gradient(90deg, ' + 'oklab(0.72 0.14 0.12 / 0.8) 0%, ' +
  // warm orange
  'oklab(0.75 0.12 0.08 / 0.8) 25%, ' +
  // coral
  'oklab(0.70 0.15 0.02 / 0.8) 50%, ' +
  // pink
  'oklab(0.65 0.12 -0.04 / 0.8) 75%, ' +
  // purple-pink
  'oklab(0.58 0.08 -0.08 / 0.8) 100%)' // deep purple
};
const blockColors = {
  checkboxActiveBackground: 'oklab(0.75 0.12 0.08)',
  checkboxActiveBorder: 'oklab(0.72 0.14 0.06)'
};


/***/ }),

/***/ "./src/lib/themes/accent/trans.js":
/*!****************************************!*\
  !*** ./src/lib/themes/accent/trans.js ***!
  \****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'oklab(0.85 0.08 0.02)',
  'motion-primary-transparent': 'oklab(0.85 0.08 0.02 / 0.75)',
  'motion-tertiary': 'oklab(0.85 0.08 0.02)',
  'looks-secondary': 'oklab(0.85 0.08 0.02)',
  'looks-transparent': 'oklab(0.85 0.08 0.02 / 0.75)',
  'looks-light-transparent': 'oklab(0.85 0.08 0.02 / 0.75)',
  'looks-secondary-dark': 'oklab(0.85 0.08 0.02)',
  'extensions-primary': 'oklab(0.85 0.08 0.02)',
  'extensions-tertiary': 'oklab(0.72 0.10 0.03)',
  'extensions-transparent': 'oklab(0.85 0.08 0.02 / 0.35)',
  'extensions-light': 'oklab(0.85 0.08 0.02)',
  'drop-highlight': 'oklab(0.85 0.08 0.02)',
  'menu-bar-background-image': 'linear-gradient(90deg, ' + 'oklab(0.82 -0.05 -0.15 / 0.75) 0%, ' + 'oklab(0.85 0.08 0.02 / 0.75) 50%, ' + 'oklab(1.0 0.0 0.0 / 0.75) 100%)'
};
const blockColors = {
  checkboxActiveBackground: 'oklab(0.85 0.08 0.02)',
  checkboxActiveBorder: 'oklab(0.85 0.08 0.02)'
};


/***/ }),

/***/ "./src/lib/themes/accent/ty.js":
/*!*************************************!*\
  !*** ./src/lib/themes/accent/ty.js ***!
  \*************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#66ccff',
  'motion-primary-transparent': '#66ccffe6',
  'motion-tertiary': '#4da3cc',
  'looks-secondary': '#66ccff',
  'looks-transparent': '#66ccff59',
  'looks-light-transparent': '#66ccff26',
  'looks-secondary-dark': '#4da3cc',
  'extensions-primary': '#66ccff',
  'extensions-tertiary': '#4da3cc',
  'extensions-transparent': '#66ccff59',
  'extensions-light': '#b3e6ff',
  'drop-highlight': '#b3e6ff'
};
const blockColors = {
  checkboxActiveBackground: '#66ccff',
  checkboxActiveBorder: '#4da3cc'
};


/***/ }),

/***/ "./src/lib/themes/accent/vaporwave.js":
/*!********************************************!*\
  !*** ./src/lib/themes/accent/vaporwave.js ***!
  \********************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#ff71ce',
  'motion-primary-transparent': '#ff71cee6',
  'motion-tertiary': '#d94fae',
  'looks-secondary': '#ff71ce',
  'looks-transparent': '#ff71ce59',
  'looks-light-transparent': '#ff71ce26',
  'looks-secondary-dark': 'hsla(320, 100%, 62%, 1)',
  'extensions-primary': 'hsla(271, 100%, 70%, 1)',
  'extensions-tertiary': 'hsla(193, 99%, 50%, 1)',
  'extensions-transparent': 'hsla(271, 100%, 70%, 0.35)',
  'extensions-light': 'hsla(193, 99%, 85%, 1)',
  'drop-highlight': '#01cdfe',
  'menu-bar-background-image': 'linear-gradient(90deg, ' + 'rgba(255, 113, 206, 0.75) 0%, ' + 'rgba(185, 103, 255, 0.75) 35%, ' + 'rgba(1, 205, 254, 0.75) 70%, ' + 'rgba(5, 255, 161, 0.75) 100%)'
};
const blockColors = {
  checkboxActiveBackground: '#ff71ce',
  checkboxActiveBorder: '#01cdfe'
};


/***/ }),

/***/ "./src/lib/themes/accent/yellow.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/yellow.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#ffcc00',
  // bright yellow
  'motion-primary-transparent': '#ffcc00e6',
  // semi-transparent yellow
  'motion-tertiary': '#e6b800',
  // darker yellow

  'looks-secondary': '#ffcc00',
  // bright yellow
  'looks-tertiary': 'hsla(48, 100%, 30%, 1)',
  // dark yellow
  'looks-transparent': '#ffcc0059',
  // more transparent yellow
  'looks-light-transparent': '#ffcc0026',
  // very transparent yellow
  'looks-secondary-dark': 'hsla(48, 100%, 40%, 1)',
  // dark yellow

  'looks-secondary-light': '#FFDE59',
  //light
  'looks-secondary-lighter': '#FFEA96',
  //lighter
  'looks-secondary-darker': 'hsla(48, 100%, 33%, 1)',
  //darker
  'looks-secondary-deep-dark': 'hsla(48, 100%, 25%, 1)',
  //darkest

  'extensions-primary': 'hsla(50, 100%, 65%, 1)',
  // light yellow
  'extensions-tertiary': 'hsla(50, 90%, 45%, 1)',
  // medium yellow
  'extensions-transparent': 'hsla(50, 90%, 65%, 0.35)',
  // semi-transparent yellow
  'extensions-light': 'hsla(50, 100%, 85%, 1)',
  // very light yellow

  'drop-highlight': '#ffdb4d' // light yellow
};
const blockColors = {
  checkboxActiveBackground: '#ffcc00',
  // bright yellow
  checkboxActiveBorder: '#e6b800' // darker yellow
};


/***/ }),

/***/ "./src/lib/themes/blocks/colorful.js":
/*!*******************************************!*\
  !*** ./src/lib/themes/blocks/colorful.js ***!
  \*******************************************/
/*! exports provided: blockColors, customExtensionColors, extensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customExtensionColors", function() { return customExtensionColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensions", function() { return extensions; });
const blockColors = {
  motion: {
    primary: '#006BFF',
    secondary: '#0055E0',
    tertiary: '#0045C9',
    quaternary: '#0045C9'
  },
  looks: {
    primary: '#8800FF',
    secondary: '#7600E8',
    tertiary: '#6900D6',
    quaternary: '#6900D6'
  },
  sounds: {
    primary: '#C000CF',
    secondary: '#A900B8',
    tertiary: '#8E009C',
    quaternary: '#8E009C'
  },
  control: {
    primary: '#FFA200',
    secondary: '#E08900',
    tertiary: '#CC7800',
    quaternary: '#CC7800'
  },
  event: {
    primary: '#FFE600',
    secondary: '#E0C800',
    tertiary: '#C4AE00',
    quaternary: '#C4AE00'
  },
  sensing: {
    primary: '#00B2FF',
    secondary: '#008FD6',
    tertiary: '#0079BD',
    quaternary: '#0079BD'
  },
  pen: {
    primary: '#00C989',
    secondary: '#00A166',
    tertiary: '#007A45',
    quaternary: '#007A45'
  },
  operators: {
    primary: '#59C059',
    secondary: '#46B946',
    tertiary: '#389438',
    quaternary: '#389438'
  },
  data: {
    primary: '#FF6A00',
    secondary: '#D64D00',
    tertiary: '#B23400',
    quaternary: '#B23400'
  },
  // This is not a new category, but rather for differentiation
  // between lists and scalar variables.
  data_lists: {
    primary: '#FF5500',
    secondary: '#D93B00',
    tertiary: '#BF2A00',
    quaternary: '#BF2A00'
  },
  more: {
    primary: '#9966FF',
    secondary: '#7A49DB',
    tertiary: '#6132BF',
    quaternary: '#6132BF'
  },
  addons: {
    primary: '#44E0DA',
    secondary: '#2ABFB9',
    tertiary: '#2ABFB9',
    quaternary: '#2ABFB9'
  },
  text: '#FFFFFF',
  workspace: '#F9F9F9',
  toolboxHover: '#006BFF',
  toolboxSelected: '#C7D9E8',
  toolboxText: '#292929',
  toolbox: '#FFFFFF',
  blackText: '#292929',
  flyout: '#F9F9F9',
  scrollbar: '#E0DFE0',
  scrollbarHover: '#E0DFE0',
  textField: '#FFFFFF',
  textFieldText: '#292929',
  insertionMarker: '#000000',
  insertionMarkerOpacity: 0.2,
  dragShadowOpacity: 0.6,
  stackGlow: '#B700FF',
  stackGlowSize: 7,
  stackGlowOpacity: 1,
  replacementGlow: '#FFFFFF',
  replacementGlowSize: 7,
  replacementGlowOpacity: 1,
  colourPickerStroke: '#FFFFFF',
  // CSS colours: support RGBA
  fieldShadow: 'rgba(255, 255, 255, 0.3)',
  dropDownShadow: 'rgba(0, 0, 0, .3)',
  numPadBackground: '#774BDE',
  numPadBorder: '#6036C2',
  numPadActiveBackground: '#552BB8',
  numPadText: 'white',
  // Do not use hex here, it cannot be inlined with data-uri SVG
  valueReportBackground: '#FFFFFF',
  valueReportBorder: '#AAAAAA',
  valueReportForeground: '#000000',
  menuHover: 'rgba(0, 0, 0, 0.2)',
  contextMenuBackground: '#ffffff',
  contextMenuBorder: '#cccccc',
  contextMenuForeground: '#000000',
  contextMenuActiveBackground: '#ECD6F8',
  contextMenuDisabledForeground: '#cccccc',
  flyoutLabelColor: '#292929',
  checkboxInactiveBackground: '#ffffff',
  checkboxInactiveBorder: '#c8c8c8',
  checkboxActiveBackground: '#A34CFF',
  checkboxActiveBorder: '#7D33CC',
  checkboxCheck: '#ffffff',
  buttonBorder: '#c6c6c6',
  buttonActiveBackground: '#ffffff',
  buttonForeground: '#292929',
  zoomIconFilter: 'none',
  gridColor: 'transparent'
};
const extensions = {};
const customExtensionColors = {
  primary: _primary => {
    const hsv = hex2hsv(_primary);
    hsv[2] = Math.max(hsv[2] - 70, 20);
    return hsv2hex(hsv);
  },
  secondary: () => '#30175C',
  tertiary: primary => primary,
  quaternary: primary => primary,
  categoryIconBackground: primary => customExtensionColors.primary(primary),
  categoryIconBorder: primary => customExtensionColors.tertiary(primary)
};


/***/ }),

/***/ "./src/lib/themes/blocks/dark.js":
/*!***************************************!*\
  !*** ./src/lib/themes/blocks/dark.js ***!
  \***************************************/
/*! exports provided: blockColors, extensions, customExtensionColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensions", function() { return extensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customExtensionColors", function() { return customExtensionColors; });
/* harmony import */ var _tw_color_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tw-color-utils */ "./src/lib/tw-color-utils.js");

const blockColors = {
  motion: {
    primary: '#0F1E33',
    secondary: '#4C4C4C',
    tertiary: '#4C97FF',
    quaternary: '#4C97FF'
  },
  looks: {
    primary: '#1E1433',
    secondary: '#4C4C4C',
    tertiary: '#9966FF',
    quaternary: '#9966FF'
  },
  sounds: {
    primary: '#291329',
    secondary: '#4C4C4C',
    tertiary: '#CF63CF',
    quaternary: '#CF63CF'
  },
  control: {
    primary: '#332205',
    secondary: '#4C4C4C',
    tertiary: '#FFAB19',
    quaternary: '#FFAB19'
  },
  event: {
    primary: '#332600',
    secondary: '#4C4C4C',
    tertiary: '#FFBF00',
    quaternary: '#FFBF00'
  },
  sensing: {
    primary: '#12232A',
    secondary: '#4C4C4C',
    tertiary: '#5CB1D6',
    quaternary: '#5CB1D6'
  },
  pen: {
    primary: '#03251C',
    secondary: '#4C4C4C',
    tertiary: '#0fBD8C',
    quaternary: '#0fBD8C'
  },
  operators: {
    primary: '#112611',
    secondary: '#4C4C4C',
    tertiary: '#59C059',
    quaternary: '#59C059'
  },
  data: {
    primary: '#331C05',
    secondary: '#4C4C4C',
    tertiary: '#FF8C1A',
    quaternary: '#FF8C1A'
  },
  data_lists: {
    primary: '#331405',
    secondary: '#4C4C4C',
    tertiary: '#FF661A',
    quaternary: '#FF661A'
  },
  more: {
    primary: '#331419',
    secondary: '#4C4C4C',
    tertiary: '#FF6680',
    quaternary: '#FF6680'
  },
  addons: {
    primary: '#0b3331',
    secondary: '#4C4C4C',
    tertiary: '#34e4d0',
    quaternary: '#34e4d0'
  },
  text: 'rgba(255, 255, 255, .7)',
  textFieldText: '#E5E5E5',
  textField: '#4C4C4C',
  menuHover: 'rgba(255, 255, 255, 0.3)'
};
const extensions = {};
const customExtensionColors = {
  primary: _primary => {
    const hsv = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_0__["hex2hsv"])(_primary);
    hsv[2] = Math.max(hsv[2] - 70, 20);
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_0__["hsv2hex"])(hsv);
  },
  secondary: () => '#4C4C4C',
  tertiary: primary => primary,
  quaternary: primary => primary,
  categoryIconBackground: primary => customExtensionColors.primary(primary),
  categoryIconBorder: primary => customExtensionColors.tertiary(primary)
};


/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/musicIcon.svg":
/*!****************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/musicIcon.svg ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjQzMzggMzBDMjkuNTEzIDMwIDMxLjYzNjYgMjguMTU2OSAzMS4xNzkgMjUuODc0QzI4LjI5OTQgMTMuMDQzNiAyNy40MjU2IDkuODUxMzQgMjcuOTQ1NCA5LjYwNTQ3QzI4LjMxMjUgOS40MzE4MyAyOS4zNzQ2IDEwLjcyNzYgMzAuOTE2MiAxMS4xMzU5QzM0LjY0MTYgMTIuMTEyNiA0MC4yNzQyIDYuNDA3NTEgMzQuNTY1NSA3LjI5MTg2QzMyLjMyMjQgNy42MzkgMzAuMTU4NyA2LjIzODM2IDI4LjQ4NzkgNS4xNTY3OUMyNS45MDcyIDMuNDg2MiAyNC41MDI0IDIuNTc2ODQgMjUuNzk3NCAxMC4wNDUxQzI2LjQzNDkgMTMuNzAzNSAyNi45Njk3IDE2LjMyMzEgMjcuMzQ3NSAxOC4xNzM5QzI3Ljk5NTcgMjEuMzQ5NCAyOC4xODE5IDIyLjI2MTYgMjcuNjMyNSAyMi4yNzQxQzI3LjMzMjEgMjIuMTUyIDI3LjAzMjcgMjIuMDU3OCAyNi42OTU3IDIxLjk3MjRDMjYuMDg4IDIxLjgyMjUgMjUuNDUxNiAyMS43MzgyIDI0LjgwNTMgMjEuNzM4MkMyMS43MjcxIDIxLjczODIgMTkuNjAzNiAyMy41ODkyIDIwLjA2MjEgMjUuODc0QzIwLjUxMDcgMjguMTU2OSAyMy4zNjQ2IDMwIDI2LjQzMzggMzBaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOS40Mzg2MSAzNi4wMDAxQzEyLjUwNjUgMzYuMDAwMSAxNC42MzAyIDM0LjE0OCAxNC4xODE3IDMxLjg2NDJDMTEuMzAzMiAxOS4wMzM2IDEwLjQyOTkgMTUuODQxNiAxMC45NDk2IDE1LjU5NThDMTEuMzE2NiAxNS40MjIyIDEyLjM3ODMgMTYuNzE3NyAxMy45MTkgMTcuMTI2QzE3LjY0MjggMTguMTEzNiAyMy4yNzI5IDEyLjM5ODUgMTcuNTY2NyAxMy4yOTE4QzE1LjMyNDggMTMuNjM4NiAxMy4xNjIzIDEyLjIzODIgMTEuNDkyMiAxMS4xNTY5QzguOTEyMzcgOS40ODYzNiA3LjUwNzk3IDguNTc2OTggOC44MDI1MSAxNi4wNDUxQzkuNDQyOTQgMTkuNzI4NiA5Ljk3OTggMjIuMzU5NCAxMC4zNTggMjQuMjEyNUMxMC45OTEyIDI3LjMxNTQgMTEuMTc5NSAyOC4yMzg0IDEwLjY2NDQgMjguMjczMkM5Ljc4NDMyIDI3LjkyNTggOC44MTIzOSAyNy43MjkzIDcuODEwODIgMjcuNzI5M0M0LjczNCAyNy43MjkzIDIuNjExMzQgMjkuNTgwNCAzLjA1OTc4IDMxLjg2NDJDMy41MTgwOSAzNC4xNDggNi4zNzA2OSAzNi4wMDAxIDkuNDM4NjEgMzYuMDAwMVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/penIcon.svg":
/*!**************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/penIcon.svg ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/b631383707e87a454b479dedaa8ca014.svg";

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/text2speechIcon.svg":
/*!**********************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/text2speechIcon.svg ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDIxLjY2OTNWMzQuMjgzNEMxNiAzNS44MTUxIDE0IDM2LjUzNTkgMTIuOCAzNS41NDQ4TDEwLjIgMzMuMzgyNEM5LjIgMzIuNTcxNSA4IDMyLjIxMTEgNi43IDMyLjIxMTFINi4zQzUgMzIuMjExMSA0IDMxLjMxMDEgNCAzMC4xMzg4VjI1LjkwNDFDNCAyNC43MzI4IDUgMjMuODMxOCA2LjMgMjMuODMxOEg2LjdDOCAyMy44MzE4IDkuMiAyMy4zODEzIDEwLjEgMjIuNjYwNEwxMi44IDIwLjQ5OEMxNCAxOS40MTY4IDE2IDIwLjIyNzcgMTYgMjEuNjY5M1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yNCA0QzE5LjU4MTcgNCAxNiA3LjU4MTcyIDE2IDEyQzE2IDE1LjExNDcgMTcuNzc5OSAxNy44MTM2IDIwLjM3ODEgMTkuMTM1MUMyMC4yMDk1IDIwLjkwODcgMTkuNjU2NCAyMS42NjU1IDE5LjMwNDIgMjIuMTQ3M0MxOS4xMjY1IDIyLjM5MDQgMTkgMjIuNTYzNSAxOSAyMi43NjE5QzE5IDIzLjQyODYgMTkuNjY2NyAyMy40Mjg2IDE5LjY2NjcgMjMuNDI4NkMyMC42MTMyIDIzLjQyODYgMjMuNTgxMyAyMi4yNjIzIDI1LjQwOTcgMjBIMjhDMzIuNDE4MyAyMCAzNiAxNi40MTgzIDM2IDEyQzM2IDcuNTgxNzIgMzIuNDE4MyA0IDI4IDRIMjRaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjMEI4RTY5Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/translateIcon.svg":
/*!********************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/translateIcon.svg ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/ef4a998a82a8567de018baa4607bc6a0.svg";

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/videoSensingIcon.svg":
/*!***********************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/videoSensingIcon.svg ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBvcGFjaXR5PSIwLjI1IiBjeD0iMzIiIGN5PSIyNiIgcj0iNCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzBCOEU2OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgb3BhY2l0eT0iMC41IiBjeD0iMzIiIGN5PSIyMiIgcj0iNCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzBCOEU2OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgb3BhY2l0eT0iMC43NSIgY3g9IjMyIiBjeT0iMTgiIHI9IjQiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMwQjhFNjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSIzMiIgY3k9IjE0IiByPSI0IiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjMEI4RTY5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE3IDE3LjVMMjIuNCAxNEMyMi45IDEzLjcgMjMuNSAxMy44IDIzLjggMTQuM0MyMy45IDE0LjUgMjQgMTQuNyAyNCAxNC44VjI1LjFDMjQgMjUuNyAyMy41IDI2LjEgMjMgMjYuMUMyMi44IDI2LjEgMjIuNiAyNiAyMi41IDI1LjlMMTcgMjIuNlYyNEMxNyAyNi4yIDE1LjIgMjguMSAxMyAyOC4xSDQuMUMxLjggMjggMCAyNi4yIDAgMjRWMTYuMUMwIDEzLjggMS44IDEyIDQuMSAxMkgxM0MxNS4yIDEyIDE3IDEzLjggMTcgMTYuMVYxNy41WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast.js":
/*!************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast.js ***!
  \************************************************/
/*! exports provided: blockColors, extensions, customExtensionColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensions", function() { return extensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customExtensionColors", function() { return customExtensionColors; });
/* harmony import */ var _high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./high-contrast-media/extensions/musicIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/musicIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./high-contrast-media/extensions/penIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/penIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./high-contrast-media/extensions/text2speechIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/text2speechIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./high-contrast-media/extensions/translateIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/translateIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./high-contrast-media/extensions/videoSensingIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/videoSensingIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tw_color_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tw-color-utils */ "./src/lib/tw-color-utils.js");






const blockColors = {
  motion: {
    primary: '#80B5FF',
    secondary: '#B3D2FF',
    tertiary: '#3373CC',
    quaternary: '#CCE1FF'
  },
  looks: {
    primary: '#CCB3FF',
    secondary: '#DDCCFF',
    tertiary: '#774DCB',
    quaternary: '#EEE5FF'
  },
  sounds: {
    primary: '#E19DE1',
    secondary: '#FFB3FF',
    tertiary: '#BD42BD',
    quaternary: '#FFCCFF'
  },
  control: {
    primary: '#FFBE4C',
    secondary: '#FFDA99',
    tertiary: '#CF8B17',
    quaternary: '#FFE3B3'
  },
  event: {
    primary: '#FFD966',
    secondary: '#FFECB3',
    tertiary: '#CC9900',
    quaternary: '#FFF2CC'
  },
  sensing: {
    primary: '#85C4E0',
    secondary: '#AED8EA',
    tertiary: '#2E8EB8',
    quaternary: '#C2E2F0'
  },
  pen: {
    primary: '#13ECAF',
    secondary: '#75F0CD',
    tertiary: '#0B8E69',
    quaternary: '#A3F5DE'
  },
  operators: {
    primary: '#7ECE7E',
    secondary: '#B5E3B5',
    tertiary: '#389438',
    quaternary: '#DAF1DA'
  },
  data: {
    primary: '#FFA54C',
    secondary: '#FFCC99',
    tertiary: '#DB6E00',
    quaternary: '#FFE5CC'
  },
  // This is not a new category, but rather for differentiation
  // between lists and scalar variables.
  data_lists: {
    primary: '#FF9966',
    secondary: '#FFCAB0',
    // I don't think this is used, b/c we don't have any droppable fields in list blocks
    tertiary: '#E64D00',
    quaternary: '#FFDDCC'
  },
  more: {
    primary: '#FF99AA',
    secondary: '#FFCCD5',
    tertiary: '#FF3355',
    quaternary: '#FFE5EA'
  },
  addons: {
    primary: '#34e4d0',
    secondary: '#71e2d5',
    tertiary: '#29b2a2',
    quaternary: '#9ee2db'
  },
  text: '#000000',
  textFieldText: '#000000',
  // Text inside of inputs e.g. 90 in [point in direction (90)]
  toolboxText: '#000000',
  // Toolbox text, color picker text (used to be #575E75)
  blackText: '#000000',
  // The color that the category menu label (e.g. 'motion', 'looks', etc.) changes to on hover
  toolboxHover: '#3373CC',
  insertionMarker: '#000000',
  insertionMarkerOpacity: 0.2,
  fieldShadow: 'rgba(255, 255, 255, 0.3)',
  dragShadowOpacity: 0.6,
  menuHover: 'rgba(255, 255, 255, 0.3)'
};
const extensions = {
  music: {
    blockIconURI: _high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  pen: {
    blockIconURI: _high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  text2speech: {
    blockIconURI: _high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  translate: {
    blockIconURI: _high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  videoSensing: {
    blockIconURI: _high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }
};
const clamp = (value, lower, upper) => Math.max(lower, Math.min(upper, value));
const customExtensionColors = {
  primary: _primary => {
    const hsv = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hex2hsv"])(_primary);
    hsv[1] = clamp(hsv[1] - 20, 0, 50);
    hsv[2] = clamp(hsv[2] + 20, 80, 100);
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hsv2hex"])(hsv);
  },
  secondary: primary => {
    const hsv = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hex2hsv"])(primary);
    hsv[1] = clamp(hsv[1] - 40, 0, 50);
    hsv[2] = clamp(hsv[2] + 20, 80, 100);
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hsv2hex"])(hsv);
  },
  tertiary: primary => {
    const hsv = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hex2hsv"])(primary);
    hsv[2] = clamp(hsv[2] - 20, 0, 100);
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hsv2hex"])(hsv);
  },
  quaternary: primary => {
    const hsv = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hex2hsv"])(primary);
    hsv[1] = clamp(hsv[1] - 60, 0, 100);
    hsv[2] = clamp(hsv[2] + 20, 90, 100);
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hsv2hex"])(hsv);
  },
  categoryIconBackground: primary => customExtensionColors.primary(primary),
  categoryIconBorder: primary => customExtensionColors.tertiary(primary)
};


/***/ }),

/***/ "./src/lib/themes/blocks/three.js":
/*!****************************************!*\
  !*** ./src/lib/themes/blocks/three.js ***!
  \****************************************/
/*! exports provided: blockColors, extensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensions", function() { return extensions; });
const blockColors = {
  motion: {
    primary: '#4C97FF',
    secondary: '#4280D7',
    tertiary: '#3373CC',
    quaternary: '#3373CC'
  },
  looks: {
    primary: '#9966FF',
    secondary: '#855CD6',
    tertiary: '#774DCB',
    quaternary: '#774DCB'
  },
  sounds: {
    primary: '#CF63CF',
    secondary: '#C94FC9',
    tertiary: '#BD42BD',
    quaternary: '#BD42BD'
  },
  control: {
    primary: '#FFAB19',
    secondary: '#EC9C13',
    tertiary: '#CF8B17',
    quaternary: '#CF8B17'
  },
  event: {
    primary: '#FFBF00',
    secondary: '#E6AC00',
    tertiary: '#CC9900',
    quaternary: '#CC9900'
  },
  sensing: {
    primary: '#5CB1D6',
    secondary: '#47A8D1',
    tertiary: '#2E8EB8',
    quaternary: '#2E8EB8'
  },
  pen: {
    primary: '#0fBD8C',
    secondary: '#0DA57A',
    tertiary: '#0B8E69',
    quaternary: '#0B8E69'
  },
  operators: {
    primary: '#59C059',
    secondary: '#46B946',
    tertiary: '#389438',
    quaternary: '#389438'
  },
  data: {
    primary: '#FF8C1A',
    secondary: '#FF8000',
    tertiary: '#DB6E00',
    quaternary: '#DB6E00'
  },
  // This is not a new category, but rather for differentiation
  // between lists and scalar variables.
  data_lists: {
    primary: '#FF661A',
    secondary: '#FF5500',
    tertiary: '#E64D00',
    quaternary: '#E64D00'
  },
  more: {
    primary: '#FF6680',
    secondary: '#FF4D6A',
    tertiary: '#FF3355',
    quaternary: '#FF3355'
  },
  addons: {
    primary: '#29beb8',
    secondary: '#3aa8a4',
    tertiary: '#3aa8a4',
    quaternary: '#3aa8a4'
  },
  text: '#FFFFFF',
  workspace: '#F9F9F9',
  toolboxHover: '#4C97FF',
  toolboxSelected: '#E9EEF2',
  toolboxText: '#575E75',
  toolbox: '#FFFFFF',
  blackText: '#575E75',
  flyout: '#F9F9F9',
  scrollbar: '#CECDCE',
  scrollbarHover: '#CECDCE',
  textField: '#FFFFFF',
  textFieldText: '#575E75',
  insertionMarker: '#000000',
  insertionMarkerOpacity: 0.2,
  dragShadowOpacity: 0.6,
  stackGlow: '#FFF200',
  stackGlowSize: 4,
  stackGlowOpacity: 1,
  replacementGlow: '#FFFFFF',
  replacementGlowSize: 2,
  replacementGlowOpacity: 1,
  colourPickerStroke: '#FFFFFF',
  // CSS colours: support RGBA
  fieldShadow: 'rgba(255, 255, 255, 0.3)',
  dropDownShadow: 'rgba(0, 0, 0, .3)',
  numPadBackground: '#547AB2',
  numPadBorder: '#435F91',
  numPadActiveBackground: '#435F91',
  numPadText: 'white',
  // Do not use hex here, it cannot be inlined with data-uri SVG
  valueReportBackground: '#FFFFFF',
  valueReportBorder: '#AAAAAA',
  valueReportForeground: '#000000',
  menuHover: 'rgba(0, 0, 0, 0.2)',
  contextMenuBackground: '#ffffff',
  contextMenuBorder: '#cccccc',
  contextMenuForeground: '#000000',
  contextMenuActiveBackground: '#d6e9f8',
  contextMenuDisabledForeground: '#cccccc',
  flyoutLabelColor: '#575E75',
  checkboxInactiveBackground: '#ffffff',
  checkboxInactiveBorder: '#c8c8c8',
  checkboxActiveBackground: '#4C97FF',
  checkboxActiveBorder: '#3373CC',
  checkboxCheck: '#ffffff',
  buttonBorder: '#c6c6c6',
  buttonActiveBackground: '#ffffff',
  buttonForeground: '#575E75',
  zoomIconFilter: 'none',
  gridColor: '#dddddd'
};
const extensions = {};


/***/ }),

/***/ "./src/lib/themes/global-styles.css":
/*!******************************************!*\
  !*** ./src/lib/themes/global-styles.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./global-styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/lib/themes/global-styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/lib/themes/gui/amoled.js":
/*!**************************************!*\
  !*** ./src/lib/themes/gui/amoled.js ***!
  \**************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony import */ var _modern_dark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modern-dark */ "./src/lib/themes/gui/modern-dark.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const guiColors = _objectSpread(_objectSpread({}, _modern_dark__WEBPACK_IMPORTED_MODULE_0__["guiColors"]), {}, {
  'color-scheme': 'dark',
  'ui-primary': '#000000',
  'ui-secondary': '#000000',
  'ui-tertiary': '#222222',
  'ui-modal-overlay': '#000000aa',
  'ui-modal-background': '#010101',
  'ui-modal-foreground': '#c0c0c0',
  'ui-modal-header-background': 'var(--looks-secondary-darker)',
  'ui-modal-header-foreground': '#ffffff',
  'menu-bar-background': 'var(--looks-secondary-dark)',
  'ui-white': '#000000',
  'assets-background': '#000000',
  'input-background': '#0a0a0a',
  'popover-background': '#0a0a0a',
  'fullscreen-background': '#000000',
  'fullscreen-accent': '#000000',
  'page-background': '#000000'
});
const blockColors = {
  insertionMarker: '#cccccc',
  workspace: '#000000',
  toolboxSelected: '#0a0a0a',
  toolboxText: '#cccccc',
  toolbox: '#000000',
  flyout: '#000000',
  scrollbar: '#666666',
  valueReportBackground: '#000000',
  valueReportBorder: '#222222',
  valueReportForeground: '#eeeeee',
  contextMenuBackground: '#000000',
  contextMenuBorder: '#ffffff26',
  contextMenuForeground: '#eeeeee',
  contextMenuActiveBackground: '#121212',
  contextMenuDisabledForeground: '#666666',
  flyoutLabelColor: '#cccccc',
  checkboxInactiveBackground: '#000000',
  checkboxInactiveBorder: '#c8c8c8',
  buttonBorder: '#c6c6c6',
  buttonActiveBackground: '#111111',
  buttonForeground: '#cccccc',
  zoomIconFilter: 'invert(100%) grayscale(100%) brightness(140%)',
  gridColor: 'transparent'
};


/***/ }),

/***/ "./src/lib/themes/gui/amp-amoled.js":
/*!******************************************!*\
  !*** ./src/lib/themes/gui/amp-amoled.js ***!
  \******************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony import */ var _amp_dark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./amp-dark */ "./src/lib/themes/gui/amp-dark.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const guiColors = _objectSpread(_objectSpread({}, _amp_dark__WEBPACK_IMPORTED_MODULE_0__["guiColors"]), {}, {
  'ui-primary': '#000000',
  'ui-secondary': '#000000',
  'ui-tertiary': '#222222',
  "menu-bar-background": "#000000",
  'ui-white': '#000000',
  'assets-background': '#000000',
  'input-background': '#0a0a0a',
  'popover-background': '#0a0a0a',
  'fullscreen-background': '#000000',
  'fullscreen-accent': '#000000',
  'page-background': '#000000'
});
const blockColors = {
  insertionMarker: '#cccccc',
  workspace: '#000000',
  toolboxSelected: '#0a0a0a',
  toolboxText: '#cccccc',
  toolbox: '#000000',
  flyout: '#000000',
  scrollbar: '#666666',
  valueReportBackground: '#000000',
  valueReportBorder: '#222222',
  valueReportForeground: '#eeeeee',
  contextMenuBackground: '#000000',
  contextMenuBorder: '#ffffff26',
  contextMenuForeground: '#eeeeee',
  contextMenuActiveBackground: '#121212',
  contextMenuDisabledForeground: '#666666',
  flyoutLabelColor: '#cccccc',
  checkboxInactiveBackground: '#000000',
  checkboxInactiveBorder: '#c8c8c8',
  buttonBorder: '#c6c6c6',
  buttonActiveBackground: '#111111',
  buttonForeground: '#cccccc',
  zoomIconFilter: 'invert(100%) grayscale(100%) brightness(140%)',
  gridColor: '#333333'
};


/***/ }),

/***/ "./src/lib/themes/gui/amp-dark.js":
/*!****************************************!*\
  !*** ./src/lib/themes/gui/amp-dark.js ***!
  \****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony import */ var _amp_light__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./amp-light */ "./src/lib/themes/gui/amp-light.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const guiColors = _objectSpread(_objectSpread({}, _amp_light__WEBPACK_IMPORTED_MODULE_0__["guiColors"]), {}, {
  "color-scheme": "dark",
  "ui-primary": "#1c1c1c",
  "ui-secondary": "#1f1f1f",
  "ui-tertiary": "#2f2f2f",
  "ui-modal-overlay": "#333333aa",
  "ui-modal-background": "#111111",
  "ui-modal-foreground": "#eeeeee",
  "ui-white": "#111111",
  "progress-bar-outer": "hsla(0, 100%, 100%, 0.25)",
  "ui-black-transparent": "#ffffff26",
  "text-primary": "#eeeeee",
  "assets-background": "#111111",
  "input-background": "#1e1e1e",
  "popover-background": "#1e1e1e",
  "badge-background": "#16202c",
  "badge-border": "#203652",
  "fullscreen-background": "#111111",
  "fullscreen-accent": "#111111",
  "page-background": "#111111",
  "page-foreground": "#eeeeee",
  "project-title-inactive": "var(--ui-secondary)",
  "project-title-hover": "#ffffff3f",
  "link-color": "#44aaff",
  "filter-icon-black": "invert(100%)",
  "filter-icon-gray": "grayscale(100%) brightness(1.7)",
  "filter-icon-white": "brightness(0) invert(100%)",
  "paint-filter-icon-gray": "brightness(0) invert(1)",
  "high-contrast-border": "transparent",
  "menu-bar-background": "#181818",
  "menu-bar-foreground": "white",
  "menu-bar-background-image": "var(--menu-bar-background-image-classic)",
  "menu-bar-hover": "#fff2",
  "progress-bar-outer": "#fff3",
  "menu-bar-bottom-border": "#fff2",
  "menu-bar-icon-filter": "",
  'ui-modal-header-background': '#1f1f1f',
  'ui-modal-header-foreground': 'white',
  "feedback-background": "var(--looks-secondary)",
  "feedback-foreground": "white",
  "menu-bar-background-classic": "",
  "ui-modal-header-background-classic": ""
});
const blockColors = {
  insertionMarker: "#cccccc",
  workspace: "#1e1e1e",
  toolboxSelected: "#1e1e1e",
  toolboxText: "#cccccc",
  toolbox: "#111111",
  flyout: "#111111",
  scrollbar: "#666666",
  valueReportBackground: "#1e1e1e",
  valueReportBorder: "#333333",
  valueReportForeground: "#eeeeee",
  contextMenuBackground: "#111111",
  contextMenuBorder: "#ffffff26",
  contextMenuForeground: "#eeeeee",
  contextMenuActiveBackground: "#2e2e2e",
  contextMenuDisabledForeground: "#666666",
  flyoutLabelColor: "#cccccc",
  checkboxInactiveBackground: "#222222",
  checkboxInactiveBorder: "#c8c8c8",
  buttonBorder: "#c6c6c6",
  buttonActiveBackground: "#222222",
  buttonForeground: "#cccccc",
  zoomIconFilter: "invert(100%) grayscale(100%) brightness(140%)",
  gridColor: "#484848"
};


/***/ }),

/***/ "./src/lib/themes/gui/amp-high-contrast.js":
/*!*************************************************!*\
  !*** ./src/lib/themes/gui/amp-high-contrast.js ***!
  \*************************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'color-scheme': 'dark',
  'ui-primary': '#000000',
  'ui-secondary': '#000000',
  'ui-tertiary': '#000000',
  'ui-modal-overlay': '#000000cc',
  'ui-modal-background': '#000000',
  'ui-modal-foreground': '#FFFF00',
  'ui-modal-header-background': '#000000',
  'ui-modal-header-foreground': '#FFFFFF',
  'ui-white': '#000000',
  'ui-black-transparent': '#FFFFFF',
  'text-primary': '#FFFF00',
  'assets-background': '#000000',
  'input-background': '#000000',
  'popover-background': '#000000',
  'badge-background': '#000000',
  'badge-border': '#FFFF00',
  'fullscreen-background': '#000000',
  'fullscreen-accent': '#000000',
  'page-background': '#000000',
  'page-foreground': '#FFFF00',
  'project-title-inactive': '#000000',
  'project-title-hover': '#FFFF003F',
  'link-color': '#00FFFF',
  'filter-icon-black': 'invert(100%) contrast(100%)',
  'filter-icon-gray': 'invert(100&) contrast(100%)',
  'filter-icon-white': 'brightness(100%) invert(100%) contrast(100%)',
  'paint-filter-icon-gray': 'none',
  'menu-bar-background': '#000',
  'menu-bar-background-image': 'none',
  'menu-bar-foreground': '#ffffff',
  'menu-bar-icon-filter': 'none',
  'high-contrast-border': 'white',
  'motion-primary': 'blue',
  'motion-primary-transparent': 'white',
  'motion-tertiary': 'darkblue',
  'looks-secondary': 'black',
  'looks-transparent': 'white',
  'looks-light-transparent': 'white',
  'looks-secondary-dark': '#333333',
  'extensions-primary': '#3e3e3e',
  'extensions-tertiary': '#333333',
  'extensions-transparent': 'white',
  'extensions-light': '#7e7e7e',
  'drop-highlight': '#66bb6a',
  'data-primary': 'black',
  'turbowarp-color': 'black',
  'turbowarp-transparent': 'white'
};
const blockColors = {
  // Block Insertion Marker: Often needs a solid background to remove 'transparency'
  // in the area where a block is about to be placed.
  insertionMarker: '#FFFF00',
  insertionMarkerBackground: '#000000',
  // Added to make insertion area solid

  // Workspace & UI Backgrounds (all set to solid black)
  workspace: '#000000',
  toolboxSelected: '#000000',
  toolboxText: '#FFFF00',
  toolbox: '#000000',
  flyout: '#000000',
  // Scrollbar & Zoom Icons (Solid foreground/backgrounds)
  scrollbar: '#FFFFFF',
  zoomIconFilter: 'none',
  gridColor: '#FFFFFF',
  // Value Reports (Solid backgrounds)
  valueReportBackground: '#000000',
  valueReportBorder: '#FFFF00',
  valueReportForeground: '#FFFF00',
  // Context Menu (Solid backgrounds)
  contextMenuBackground: '#000000',
  contextMenuBorder: '#FFFFFF',
  contextMenuForeground: '#FFFF00',
  contextMenuActiveBackground: '#000000',
  contextMenuDisabledForeground: '#CCCCCC',
  // Flyout Text/Labels
  flyoutLabelColor: '#FFFF00',
  // Checkbox and Button colors
  checkboxInactiveBackground: '#000000',
  checkboxInactiveBorder: '#FFFF00',
  buttonBorder: '#FFFFFF',
  buttonActiveBackground: '#000000',
  buttonForeground: '#FFFF00'
};


/***/ }),

/***/ "./src/lib/themes/gui/amp-light.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/gui/amp-light.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'color-scheme': 'light',
  'ui-primary': '#FAFAFA',
  'ui-secondary': '#F2F2F2',
  'ui-tertiary': '#EDEDED',
  'ui-modal-overlay': 'var(--motion-primary-transparent)',
  'ui-modal-background': 'hsla(0, 100%, 100%, 1)' /* #FFFFFF */,
  'ui-modal-foreground': 'hsla(225, 15%, 40%, 1)' /* #575E75 */,
  'ui-modal-header-background': 'white',
  'ui-modal-header-foreground': 'black',
  'ui-white': 'hsla(0, 100%, 100%, 1)' /* #FFFFFF */,
  'ui-white-dim': 'hsla(0, 100%, 100%, 0.75)' /* 25% transparent version of ui-white */,
  'ui-white-transparent': 'hsla(0, 100%, 100%, 0.25)' /* 25% transparent version of ui-white */,
  'ui-transparent': 'hsla(0, 100%, 100%, 0)' /* 25% transparent version of ui-white */,

  'ui-black-transparent': 'hsla(0, 0%, 0%, 0.15)' /* 15% transparent version of black */,

  'text-primary': 'hsla(225, 15%, 40%, 1)' /* #575E75 */,
  'text-primary-transparent': 'hsla(225, 15%, 40%, 0.75)',
  'motion-primary': 'hsla(215, 100%, 65%, 1)' /* #4C97FF */,
  'motion-primary-transparent': 'hsla(215, 100%, 65%, 0.9)' /* 90% transparent version of motion-primary */,
  'motion-tertiary': 'hsla(215, 60%, 50%, 1)' /* #3373CC */,

  'looks-secondary': 'hsla(260, 60%, 60%, 1)' /* #855CD6 */,
  'looks-transparent': 'hsla(260, 60%, 60%, 0.35)' /* 35% transparent version of looks-tertiary */,
  'looks-light-transparent': 'hsla(260, 60%, 60%, 0.15)' /* 15% transparent version of looks-tertiary */,
  'looks-secondary-dark': 'hsla(260, 42%, 51%, 1)' /* #714EB6 */,

  'red-primary': 'hsla(20, 100%, 55%, 1)' /* #FF661A */,
  'red-tertiary': 'hsla(20, 100%, 45%, 1)' /* #E64D00 */,

  'sound-primary': 'hsla(300, 53%, 60%, 1)' /* #CF63CF */,
  'sound-tertiary': 'hsla(300, 48%, 50%, 1)' /* #BD42BD */,

  'control-primary': 'hsla(38, 100%, 55%, 1)' /* #FFAB19 */,

  'data-primary': 'hsla(30, 100%, 55%, 1)' /* #FF8C1A */,

  'pen-primary': 'hsla(163, 85%, 40%, 1)' /* #0FBD8C */,
  'pen-transparent': 'hsla(163, 85%, 40%, 0.25)' /* #0FBD8C */,
  'pen-tertiary': 'hsla(163, 86%, 30%, 1)' /* #0B8E69 */,

  'error-primary': 'hsla(30, 100%, 55%, 1)' /* #FF8C1A */,
  'error-light': 'hsla(30, 100%, 70%, 1)' /* #FFB366 */,
  'error-transparent': 'hsla(30, 100%, 55%, 0.25)' /* #FF8C1A */,

  'extensions-primary': 'hsla(163, 85%, 40%, 1)' /* #0FBD8C */,
  'extensions-tertiary': 'hsla(163, 85%, 30%, 1)' /* #0B8E69 */,
  'extensions-transparent': 'hsla(163, 85%, 40%, 0.35)' /* 35% transparent version of extensions-primary */,
  'extensions-light': 'hsla(163, 57%, 85%, 1)' /* opaque version of extensions-transparent, on white bg */,

  'drop-highlight': 'hsla(215, 100%, 77%, 1)' /* lighter than motion-primary */,

  'menu-bar-background-image': 'none',
  'assets-background': '#ffffff',
  'input-background': '#ffffff',
  'popover-background': '#ffffff',
  'shadow': 'hsla(0, 0%, 0%, 0.15)',
  'badge-background': '#dbebff',
  'badge-border': '#b9d6ff',
  'fullscreen-background': '#ffffff',
  'fullscreen-accent': '#e8edf1',
  'page-background': '#ffffff',
  'page-foreground': '#000000',
  'project-title-inactive': 'var(--ui-white-transparent)',
  'project-title-hover': '#ffffff7f',
  'link-color': '#2255dd',
  'filter-icon-black': 'none',
  'filter-icon-gray': 'grayscale(100%)',
  'filter-icon-white': 'none',
  'paint-ui-pane-border': 'var(--ui-black-transparent)',
  'paint-text-primary': 'var(--text-primary)',
  'paint-form-border': 'var(--ui-black-transparent)',
  'paint-looks-secondary': 'var(--looks-secondary)',
  'paint-looks-transparent': 'var(--looks-transparent)',
  'paint-input-background': 'var(--input-background)',
  'paint-popover-background': 'var(--popover-background)',
  'paint-filter-icon-gray': 'none',
  'turbowarp-color': '#ff4c4c',
  'turbowarp-transparent': '#ff4c4c26',
  'high-contrast-border': 'transparent',
  'menu-bar-background': 'white',
  'menu-bar-foreground': 'black',
  'menu-bar-background-image': 'var(--menu-bar-background-image-modern)',
  'menu-bar-icon-filter': 'invert(100%)',
  'menu-bar-hover': 'var(--looks-transparent)',
  'progress-bar-outer': 'var(--looks-transparent)',
  'menu-bar-bottom-border': '#00000022',
  'feedback-background': 'var(--looks-secondary)',
  'feedback-foreground': 'white',
  'menu-bar-background-classic': '',
  'ui-modal-header-background-classic': ''
};
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/gui/dark.js":
/*!************************************!*\
  !*** ./src/lib/themes/gui/dark.js ***!
  \************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'color-scheme': 'dark',
  'ui-primary': '#111111',
  'ui-secondary': '#1e1e1e',
  'ui-tertiary': '#2e2e2e',
  'ui-modal-overlay': '#333333aa',
  'ui-modal-background': '#111111',
  'ui-modal-foreground': '#eeeeee',
  'ui-modal-header-background': '#333333',
  'ui-modal-header-foreground': '#ffffff',
  'ui-white': '#111111',
  'ui-black-transparent': '#ffffff26',
  'text-primary': '#eeeeee',
  'menu-bar-background': 'var(--looks-secondary-dark)',
  'assets-background': '#111111',
  'input-background': '#1e1e1e',
  'popover-background': '#1e1e1e',
  'badge-background': '#16202c',
  'badge-border': '#203652',
  'menu-bar-icon-filter': 'none',
  'fullscreen-background': '#111111',
  'fullscreen-accent': '#111111',
  'page-background': '#111111',
  'page-foreground': '#eeeeee',
  'project-title-inactive': 'var(--ui-secondary)',
  'project-title-hover': '#ffffff3f',
  'link-color': '#44aaff',
  'filter-icon-black': 'invert(100%)',
  'filter-icon-gray': 'grayscale(100%) brightness(1.7)',
  'filter-icon-white': 'brightness(0) invert(100%)',
  'paint-filter-icon-gray': 'brightness(1.7)'
};
const blockColors = {
  insertionMarker: '#cccccc',
  workspace: '#1e1e1e',
  toolboxSelected: '#1e1e1e',
  toolboxText: '#cccccc',
  toolbox: '#111111',
  flyout: '#111111',
  scrollbar: '#666666',
  valueReportBackground: '#1e1e1e',
  valueReportBorder: '#333333',
  valueReportForeground: '#eeeeee',
  contextMenuBackground: '#111111',
  contextMenuBorder: '#ffffff26',
  contextMenuForeground: '#eeeeee',
  contextMenuActiveBackground: '#2e2e2e',
  contextMenuDisabledForeground: '#666666',
  flyoutLabelColor: '#cccccc',
  checkboxInactiveBackground: '#222222',
  checkboxInactiveBorder: '#c8c8c8',
  buttonBorder: '#c6c6c6',
  buttonActiveBackground: '#222222',
  buttonForeground: '#cccccc',
  zoomIconFilter: 'invert(100%)',
  gridColor: 'transparent'
};


/***/ }),

/***/ "./src/lib/themes/gui/deep-dark.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/gui/deep-dark.js ***!
  \*****************************************/
/*! exports provided: name, guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const name = {
  defaultMessage: 'Deep Dark',
  description: 'Label for the deep dark GUI theme',
  id: 'tw.theme.gui.deepdark'
};
const guiColors = {
  "color-scheme": "dark",
  "ui-primary": "#050505",
  "ui-secondary": "#101010",
  "ui-tertiary": "#101010",
  "ui-modal-overlay": "#111111aa",
  "ui-modal-background": "#050505",
  "ui-modal-foreground": "#e0e0e0",
  "ui-modal-header-background": "#050505",
  "ui-modal-header-foreground": "#eeeeee",
  "ui-white": "#050505",
  "ui-black-transparent": "#ffffff26",
  "text-primary": "#eeeeee",
  "menu-bar-background": "#050505",
  "menu-bar-feedback": "white",
  "icon-style": "brightness(1)",
  "assets-background": "#050505",
  "input-background": "#101010",
  "popover-background": "#101010",
  "badge-background": "#16202c",
  "badge-border": "#203652",
  "fullscreen-background": "#050505",
  "fullscreen-accent": "#050505",
  "page-background": "#050505",
  "page-foreground": "#eeeeee",
  "project-title-inactive": "var(--ui-secondary)",
  "project-title-hover": "#eeeeee3f",
  "link-color": "#004488",
  "filter-icon-black": "invert(100%)",
  "filter-icon-gray": "grayscale(100%) brightness(1.7)",
  "filter-icon-white": "brightness(0) invert(100%)",
  "paint-filter-icon-gray": "brightness(1.7)"
};
const blockColors = {
  insertionMarker: '#cccccc',
  workspace: '#101010',
  toolboxSelected: '#101010',
  toolboxText: '#cccccc',
  toolbox: '#050505',
  flyout: '#050505',
  scrollbar: '#666666',
  valueReportBackground: '#101010',
  valueReportBorder: '#333333',
  valueReportForeground: '#eeeeee',
  contextMenuBackground: '#050505',
  contextMenuBorder: '#ffffff26',
  contextMenuForeground: '#eeeeee',
  contextMenuActiveBackground: '#2e2e2e',
  contextMenuDisabledForeground: '#666666',
  flyoutLabelColor: '#cccccc',
  checkboxInactiveBackground: '#222222',
  checkboxInactiveBorder: '#c8c8c8',
  buttonBorder: '#c6c6c6',
  buttonActiveBackground: '#222222',
  buttonForeground: '#cccccc',
  zoomIconFilter: 'invert(100%)',
  gridColor: '#484848'
};


/***/ }),

/***/ "./src/lib/themes/gui/genesisdark.js":
/*!*******************************************!*\
  !*** ./src/lib/themes/gui/genesisdark.js ***!
  \*******************************************/
/*! exports provided: name, guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const name = {
  defaultMessage: 'Genesis Dark',
  description: 'Label for the genesis dark GUI theme',
  id: 'tw.theme.gui.genesis dark'
};
const guiColors = {
  'color-scheme': 'dark',
  'ui-primary': '#000000',
  'ui-secondary': '#0e0e0e',
  'ui-tertiary': '#0F0F0F',
  'ui-modal-overlay': 'var(--looks-secondary-dark)',
  'ui-modal-background': 'black',
  'ui-modal-foreground': 'white',
  'ui-modal-header-background': 'black',
  'ui-modal-header-foreground': 'var(--looks-secondary)',
  'ui-white': '#000000',
  'ui-black-transparent': '#ffffff26',
  'text-primary': 'var(--looks-secondary)',
  'menu-bar-background': 'black',
  'assets-background': '#000000',
  'input-background': '#0F0F0F',
  'popover-background': '#0F0F0F',
  'badge-background': '#2C1624',
  'badge-border': '#52204B',
  'fullscreen-background': 'black',
  'fullscreen-accent': 'var(--looks-secondary)',
  'page-background': 'black',
  'page-foreground': 'var(--looks-secondary)',
  'project-title-inactive': 'var(--ui-secondary)',
  'project-title-hover': '#ffffff3f',
  'link-color': '#44aaff',
  'filter-icon-black': 'invert(100%)',
  'filter-icon-gray': 'grayscale(100%) brightness(1.7)',
  'filter-icon-white': 'brightness(0) invert(100%)',
  'paint-filter-icon-gray': 'brightness(1.7)'
};
const blockColors = {
  insertionMarker: '#cccccc',
  workspace: '#0F0F0F',
  toolboxSelected: '#0F0F0F',
  toolboxText: '#cccccc',
  toolbox: '#000000',
  flyout: '#000000',
  scrollbar: '#666666',
  valueReportBackground: '#0F0F0F',
  valueReportBorder: '#333333',
  valueReportForeground: '#eeeeee',
  contextMenuBackground: '#000000',
  contextMenuBorder: '#ffffff26',
  contextMenuForeground: '#eeeeee',
  contextMenuActiveBackground: '#2e2e2e',
  contextMenuDisabledForeground: '#666666',
  flyoutLabelColor: '#cccccc',
  checkboxInactiveBackground: '#222222',
  checkboxInactiveBorder: '#c8c8c8',
  buttonBorder: '#c6c6c6',
  buttonActiveBackground: '#222222',
  buttonForeground: '#cccccc',
  zoomIconFilter: 'invert(100%)',
  gridColor: '#484848'
};


/***/ }),

/***/ "./src/lib/themes/gui/genesislight.js":
/*!********************************************!*\
  !*** ./src/lib/themes/gui/genesislight.js ***!
  \********************************************/
/*! exports provided: name, guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const name = {
  defaultMessage: 'Genesis Light',
  description: 'Label for the genesis light GUI theme',
  id: 'tw.theme.gui.genesis light'
};
const guiColors = {
  'color-scheme': 'light',
  'ui-primary': '#FFFFFF',
  'ui-secondary': '#E0E0E0',
  'ui-tertiary': '#DBDBDB',
  'ui-modal-overlay': 'var(--looks-secondary)',
  'ui-modal-background': 'white',
  /* #FFFFFF */
  'ui-modal-foreground': 'black',
  /* #575E75 */
  'ui-modal-header-background': 'white',
  'ui-modal-header-foreground': 'var(--looks-secondary-dark)',
  /* #FFFFFF */

  'ui-white': 'hsla(0, 100%, 100%, 1)',
  /* #FFFFFF */
  'ui-white-dim': 'hsla(0, 100%, 100%, 0.55)',
  /* 25% transparent version of ui-white */
  'ui-white-transparent': 'hsla(0, 100%, 100%, 0.45)',
  /* 25% transparent version of ui-white */
  'ui-transparent': 'hsla(0, 100%, 100%, 0)',
  /* 25% transparent version of ui-white */

  'ui-black-transparent': '#00000015',
  /* 15% transparent version of black */

  'text-primary': '#000000',
  /* #575E75 */
  'text-primary-transparent': '#00000075',
  'motion-primary': 'hsla(215, 100%, 65%, 1)',
  /* #4C97FF */
  'motion-primary-transparent': 'hsla(215, 100%, 65%, 0.9)',
  /* 90% transparent version of motion-primary */
  'motion-tertiary': 'hsla(215, 60%, 50%, 1)',
  /* #3373CC */

  'looks-secondary': 'hsla(260, 60%, 60%, 1)',
  /* #855CD6 */
  'looks-transparent': 'hsla(260, 60%, 60%, 0.35)',
  /* 35% transparent version of looks-tertiary */
  'looks-light-transparent': 'hsla(260, 60%, 60%, 0.15)',
  /* 15% transparent version of looks-tertiary */
  'looks-secondary-dark': 'hsla(260, 42%, 51%, 1)',
  /* #714EB6 */

  'red-primary': 'white',
  /* #FF661A */
  'red-tertiary': 'var(--looks-secondary)',
  /* #E64D00 */

  'sound-primary': 'hsla(300, 53%, 60%, 1)',
  /* #CF63CF */
  'sound-tertiary': 'hsla(300, 48%, 50%, 1)',
  /* #BD42BD */

  'control-primary': 'hsla(38, 100%, 55%, 1)',
  /* #FFAB19 */

  'data-primary': 'hsla(30, 100%, 55%, 1)',
  /* #FF8C1A */

  'pen-primary': 'hsla(163, 85%, 40%, 1)',
  /* #0FBD8C */
  'pen-transparent': 'hsla(163, 85%, 40%, 0.25)',
  /* #0FBD8C */
  'pen-tertiary': 'hsla(163, 86%, 30%, 1)',
  /* #0B8E69 */

  'error-primary': 'hsla(30, 100%, 55%, 1)',
  /* #FF8C1A */
  'error-light': 'hsla(30, 100%, 70%, 1)',
  /* #FFB366 */
  'error-transparent': 'hsla(30, 100%, 55%, 0.25)',
  /* #FF8C1A */

  'extensions-primary': 'hsla(163, 85%, 40%, 1)',
  /* #0FBD8C */
  'extensions-tertiary': 'hsla(163, 85%, 30%, 1)',
  /* #0B8E69 */
  'extensions-transparent': 'hsla(163, 85%, 40%, 0.35)',
  /* 35% transparent version of extensions-primary */
  'extensions-light': 'hsla(163, 57%, 85%, 1)',
  /* opaque version of extensions-transparent, on white bg */

  'drop-highlight': 'white',
  /* lighter than motion-primary */

  'menu-bar-background': '#D9D9D9',
  'menu-bar-background-image': 'var(--looks-secondary)',
  'menu-bar-foreground': '#000000',
  'assets-background': '#ffffff',
  'input-background': '#ffffff',
  'popover-background': '#ffffff',
  'shadow': 'hsla(0, 0%, 0%, 0.15)',
  'badge-background': 'var(--looks-secondary)',
  'badge-border': 'black',
  'fullscreen-background': '#ffffff',
  'fullscreen-accent': '#e8edf1',
  'page-background': '#ffffff',
  'page-foreground': '#000000',
  'project-title-inactive': 'var(--ui-white-transparent)',
  'project-title-hover': '#ffffff',
  'link-color': '#2255dd',
  'filter-icon-black': '#ffffff',
  'filter-icon-gray': 'grayscale(100%)',
  'filter-icon-white': 'var(--looks-secondary-dark)',
  'paint-ui-pane-border': 'var(--ui-black-transparent)',
  'paint-text-primary': 'var(--text-primary)',
  'paint-form-border': 'var(--ui-black-transparent)',
  'paint-looks-secondary': 'var(--looks-secondary)',
  'paint-looks-transparent': 'var(--looks-transparent)',
  'paint-input-background': 'var(--input-background)',
  'paint-popover-background': 'var(--popover-background)',
  'paint-filter-icon-gray': 'none'
};
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/gui/light.js":
/*!*************************************!*\
  !*** ./src/lib/themes/gui/light.js ***!
  \*************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'color-scheme': 'light',
  'ui-primary': 'hsla(215, 100%, 95%, 1)',
  /* #E5F0FF */
  'ui-secondary': 'hsla(215, 75%, 95%, 1)',
  /* #E9F1FC */
  'ui-tertiary': 'hsla(215, 50%, 90%, 1)',
  /* #D9E3F2 */

  'ui-modal-overlay': 'var(--motion-primary-transparent)',
  'ui-modal-background': 'hsla(0, 100%, 100%, 1)',
  /* #FFFFFF */
  'ui-modal-foreground': 'hsla(225, 15%, 40%, 1)',
  /* #575E75 */
  'ui-modal-header-background': 'var(--looks-secondary)',
  'ui-modal-header-foreground': 'hsla(0, 100%, 100%, 1)',
  /* #FFFFFF */

  'ui-white': 'hsla(0, 100%, 100%, 1)',
  /* #FFFFFF */
  'ui-white-dim': 'hsla(0, 100%, 100%, 0.75)',
  /* 25% transparent version of ui-white */
  'ui-white-transparent': 'hsla(0, 100%, 100%, 0.25)',
  /* 25% transparent version of ui-white */
  'ui-transparent': 'hsla(0, 100%, 100%, 0)',
  /* 25% transparent version of ui-white */

  'ui-black-transparent': 'hsla(0, 0%, 0%, 0.15)',
  /* 15% transparent version of black */

  'text-primary': 'hsla(225, 15%, 40%, 1)',
  /* #575E75 */
  'text-primary-transparent': 'hsla(225, 15%, 40%, 0.75)',
  'motion-primary': 'hsla(215, 100%, 65%, 1)',
  /* #4C97FF */
  'motion-primary-transparent': 'hsla(215, 100%, 65%, 0.9)',
  /* 90% transparent version of motion-primary */
  'motion-tertiary': 'hsla(215, 60%, 50%, 1)',
  /* #3373CC */

  'looks-secondary': 'hsla(260, 60%, 60%, 1)',
  /* #855CD6 */
  'looks-transparent': 'hsla(260, 60%, 60%, 0.35)',
  /* 35% transparent version of looks-tertiary */
  'looks-light-transparent': 'hsla(260, 60%, 60%, 0.15)',
  /* 15% transparent version of looks-tertiary */
  'looks-secondary-dark': 'hsla(260, 42%, 51%, 1)',
  /* #714EB6 */

  'red-primary': 'hsla(20, 100%, 55%, 1)',
  /* #FF661A */
  'red-tertiary': 'hsla(20, 100%, 45%, 1)',
  /* #E64D00 */

  'sound-primary': 'hsla(300, 53%, 60%, 1)',
  /* #CF63CF */
  'sound-tertiary': 'hsla(300, 48%, 50%, 1)',
  /* #BD42BD */

  'control-primary': 'hsla(38, 100%, 55%, 1)',
  /* #FFAB19 */

  'data-primary': 'hsla(30, 100%, 55%, 1)',
  /* #FF8C1A */

  'pen-primary': 'hsla(163, 85%, 40%, 1)',
  /* #0FBD8C */
  'pen-transparent': 'hsla(163, 85%, 40%, 0.25)',
  /* #0FBD8C */
  'pen-tertiary': 'hsla(163, 86%, 30%, 1)',
  /* #0B8E69 */

  'error-primary': 'hsla(30, 100%, 55%, 1)',
  /* #FF8C1A */
  'error-light': 'hsla(30, 100%, 70%, 1)',
  /* #FFB366 */
  'error-transparent': 'hsla(30, 100%, 55%, 0.25)',
  /* #FF8C1A */

  'extensions-primary': 'hsla(163, 85%, 40%, 1)',
  /* #0FBD8C */
  'extensions-tertiary': 'hsla(163, 85%, 30%, 1)',
  /* #0B8E69 */
  'extensions-transparent': 'hsla(163, 85%, 40%, 0.35)',
  /* 35% transparent version of extensions-primary */
  'extensions-light': 'hsla(163, 57%, 85%, 1)',
  /* opaque version of extensions-transparent, on white bg */

  'drop-highlight': 'hsla(215, 100%, 77%, 1)',
  /* lighter than motion-primary */

  'menu-bar-background': 'var(--looks-secondary)',
  'menu-bar-background-image': 'none',
  'menu-bar-foreground': '#ffffff',
  'menu-bar-icon-filter': 'none',
  'assets-background': '#ffffff',
  'input-background': '#ffffff',
  'popover-background': '#ffffff',
  'shadow': 'hsla(0, 0%, 0%, 0.15)',
  'badge-background': '#dbebff',
  'badge-border': '#b9d6ff',
  'fullscreen-background': '#ffffff',
  'fullscreen-accent': '#e8edf1',
  'page-background': '#ffffff',
  'page-foreground': '#000000',
  'project-title-inactive': 'var(--ui-white-transparent)',
  'project-title-hover': '#ffffff7f',
  'link-color': '#2255dd',
  'filter-icon-black': 'none',
  'filter-icon-gray': 'grayscale(100%)',
  'filter-icon-white': 'none',
  'paint-ui-pane-border': 'var(--ui-black-transparent)',
  'paint-text-primary': 'var(--text-primary)',
  'paint-form-border': 'var(--ui-black-transparent)',
  'paint-looks-secondary': 'var(--looks-secondary)',
  'paint-looks-transparent': 'var(--looks-transparent)',
  'paint-input-background': 'var(--input-background)',
  'paint-popover-background': 'var(--popover-background)',
  'paint-filter-icon-gray': 'none'
};
const blockColors = {
  gridColor: 'transparent'
};


/***/ }),

/***/ "./src/lib/themes/gui/midnight.js":
/*!****************************************!*\
  !*** ./src/lib/themes/gui/midnight.js ***!
  \****************************************/
/*! exports provided: name, guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const name = {
  defaultMessage: 'Midnight',
  description: 'Label for the midnight GUI theme',
  id: 'tw.theme.gui.midnight'
};
const guiColors = {
  'color-scheme': 'dark',
  'ui-primary': '#000000',
  'ui-secondary': '#0a0a0a',
  'ui-tertiary': '#151515',
  'ui-modal-overlay': '#222222aa',
  'ui-modal-background': '#000000',
  'ui-modal-foreground': '#eeeeee',
  'ui-modal-header-background': '#222222',
  'ui-modal-header-foreground': '#ffffff',
  'ui-white': '#000000',
  'ui-black-transparent': '#ffffff26',
  'text-primary': '#eeeeee',
  'menu-bar-background': '#222222',
  'assets-background': '#000000',
  'input-background': '#0a0a0a',
  'popover-background': '#0a0a0a',
  'badge-background': '#101820',
  'badge-border': '#152638',
  'fullscreen-background': '#000000',
  'fullscreen-accent': '#000000',
  'page-background': '#000000',
  'page-foreground': '#eeeeee',
  'project-title-inactive': 'var(--ui-secondary)',
  'project-title-hover': '#ffffff3f',
  'link-color': '#44aaff',
  'filter-icon-black': 'invert(100%)',
  'filter-icon-gray': 'grayscale(100%) brightness(1.7)',
  'filter-icon-white': 'brightness(0) invert(100%)',
  'paint-filter-icon-gray': 'brightness(1.7)'
};
const blockColors = {
  insertionMarker: '#cccccc',
  workspace: '#0a0a0a',
  toolboxSelected: '#0a0a0a',
  toolboxText: '#cccccc',
  toolbox: '#000000',
  flyout: '#000000',
  scrollbar: '#555555',
  valueReportBackground: '#0a0a0a',
  valueReportBorder: '#222222',
  valueReportForeground: '#eeeeee',
  contextMenuBackground: '#000000',
  contextMenuBorder: '#ffffff26',
  contextMenuForeground: '#eeeeee',
  contextMenuActiveBackground: '#1a1a1a',
  contextMenuDisabledForeground: '#666666',
  flyoutLabelColor: '#cccccc',
  checkboxInactiveBackground: '#111111',
  checkboxInactiveBorder: '#c8c8c8',
  buttonBorder: '#c6c6c6',
  buttonActiveBackground: '#111111',
  buttonForeground: '#cccccc',
  zoomIconFilter: 'invert(100%)',
  gridColor: '#383838'
};


/***/ }),

/***/ "./src/lib/themes/gui/modern-dark.js":
/*!*******************************************!*\
  !*** ./src/lib/themes/gui/modern-dark.js ***!
  \*******************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'color-scheme': 'dark',
  'ui-primary': '#030303',
  'ui-secondary': '#080808',
  'ui-tertiary': 'var(--looks-secondary-darker)',
  'ui-modal-overlay': '#111111aa',
  'ui-modal-background': '#030303',
  'ui-modal-foreground': '#e0e0e0',
  'ui-modal-header-background': 'var(--looks-secondary-darker)',
  'ui-modal-header-foreground': '#ffffff',
  'ui-white': '#030303',
  'ui-black-transparent': '#ffffff26',
  'text-primary': '#eeeeee',
  'assets-background': '#030303',
  'input-background': 'var(--looks-secondary-darker)',
  'popover-background': 'var(--looks-secondary-darker)',
  'badge-background': '#16202c',
  'badge-border': '#203652',
  'menu-bar-background': 'var(--looks-secondary-darker)',
  'menu-bar-foreground': 'white',
  'menu-bar-background-image': 'none',
  'menu-bar-icon-filter': 'none',
  'fullscreen-background': '#030303',
  'fullscreen-accent': '#030303',
  'page-background': 'black',
  'page-foreground': 'var(--looks-secondary)',
  'project-title-inactive': 'var(--ui-secondary)',
  'project-title-hover': '#ffffff3f',
  'link-color': '#44aaff',
  'filter-icon-black': 'invert(100%)',
  'filter-icon-gray': 'grayscale(100%) brightness(1.7)',
  'filter-icon-white': 'brightness(0) invert(100%)',
  'paint-filter-icon-gray': 'brightness(1.7)'
};
const blockColors = {
  insertionMarker: '#cccccc',
  workspace: '#080808',
  toolboxSelected: '#080808',
  toolboxText: '#cccccc',
  toolbox: '#030303',
  flyout: '#030303',
  scrollbar: '#666666',
  valueReportBackground: '#080808',
  valueReportBorder: '#111111',
  valueReportForeground: '#eeeeee',
  contextMenuBackground: '#030303',
  contextMenuBorder: '#ffffff26',
  contextMenuForeground: '#eeeeee',
  contextMenuActiveBackground: '#080808',
  contextMenuDisabledForeground: '#666666',
  flyoutLabelColor: '#cccccc',
  checkboxInactiveBackground: '#222222',
  checkboxInactiveBorder: '#c8c8c8',
  buttonBorder: '#c6c6c6',
  buttonActiveBackground: '#222222',
  buttonForeground: '#cccccc',
  zoomIconFilter: 'invert(100%)',
  gridColor: 'transparent'
};


/***/ }),

/***/ "./src/lib/themes/gui/modern-light.js":
/*!********************************************!*\
  !*** ./src/lib/themes/gui/modern-light.js ***!
  \********************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'color-scheme': 'light',
  'ui-primary': 'white',
  'ui-secondary': 'white',
  'ui-tertiary': 'var(--looks-secondary-lighter)',
  'ui-modal-overlay': 'var(--motion-primary-transparent)',
  'ui-modal-background': 'white',
  /* #FFFFFF */
  'ui-modal-foreground': 'var(--looks-secondary-dark)',
  /* #575E75 */
  'ui-modal-header-background': 'var(--looks-secondary-lighter)',
  'ui-modal-header-foreground': 'hsla(0, 100%, 100%, 1)',
  /* #FFFFFF */

  'ui-white': 'hsla(0, 100%, 100%, 1)',
  /* #FFFFFF */
  'ui-white-dim': 'hsla(0, 100%, 100%, 0.75)',
  /* 25% transparent version of ui-white */
  'ui-white-transparent': 'hsla(0, 100%, 100%, 0.25)',
  /* 25% transparent version of ui-white */
  'ui-transparent': 'hsla(0, 100%, 100%, 0)',
  /* 25% transparent version of ui-white */

  'ui-black-transparent': 'hsla(0, 0%, 0%, 0.15)',
  /* 15% transparent version of black */

  'text-primary': 'hsla(225, 15%, 40%, 1)',
  /* #575E75 */
  'text-primary-transparent': 'hsla(225, 15%, 40%, 0.75)',
  'motion-primary': 'hsla(215, 100%, 65%, 1)',
  /* #4C97FF */
  'motion-primary-transparent': 'hsla(215, 100%, 65%, 0.9)',
  /* 90% transparent version of motion-primary */
  'motion-tertiary': 'hsla(215, 60%, 50%, 1)',
  /* #3373CC */

  'looks-secondary': 'hsla(260, 60%, 60%, 1)',
  /* #855CD6 */
  'looks-transparent': 'hsla(260, 60%, 60%, 0.35)',
  /* 35% transparent version of looks-tertiary */
  'looks-light-transparent': 'hsla(260, 60%, 60%, 0.15)',
  /* 15% transparent version of looks-tertiary */
  'looks-secondary-dark': 'hsla(260, 42%, 51%, 1)',
  /* #714EB6 */

  'red-primary': 'hsla(20, 100%, 55%, 1)',
  /* #FF661A */
  'red-tertiary': 'hsla(20, 100%, 45%, 1)',
  /* #E64D00 */

  'sound-primary': 'hsla(300, 53%, 60%, 1)',
  /* #CF63CF */
  'sound-tertiary': 'hsla(300, 48%, 50%, 1)',
  /* #BD42BD */

  'control-primary': 'hsla(38, 100%, 55%, 1)',
  /* #FFAB19 */

  'data-primary': 'hsla(30, 100%, 55%, 1)',
  /* #FF8C1A */

  'pen-primary': 'hsla(163, 85%, 40%, 1)',
  /* #0FBD8C */
  'pen-transparent': 'hsla(163, 85%, 40%, 0.25)',
  /* #0FBD8C */
  'pen-tertiary': 'hsla(163, 86%, 30%, 1)',
  /* #0B8E69 */

  'error-primary': 'hsla(30, 100%, 55%, 1)',
  /* #FF8C1A */
  'error-light': 'hsla(30, 100%, 70%, 1)',
  /* #FFB366 */
  'error-transparent': 'hsla(30, 100%, 55%, 0.25)',
  /* #FF8C1A */

  'extensions-primary': 'hsla(163, 85%, 40%, 1)',
  /* #0FBD8C */
  'extensions-tertiary': 'hsla(163, 85%, 30%, 1)',
  /* #0B8E69 */
  'extensions-transparent': 'hsla(163, 85%, 40%, 0.35)',
  /* 35% transparent version of extensions-primary */
  'extensions-light': 'hsla(163, 57%, 85%, 1)',
  /* opaque version of extensions-transparent, on white bg */

  'drop-highlight': 'hsla(215, 100%, 77%, 1)',
  /* lighter than motion-primary */

  'menu-bar-background': 'var(--looks-secondary-light)',
  'menu-bar-foreground': 'black',
  'menu-bar-background-image': 'none',
  'menu-bar-foreground': '#ffffff',
  'menu-bar-icon-filter': 'none',
  'progress-bar-outer': 'var(--looks-secondary-lighter)',
  'assets-background': '#ffffff',
  'input-background': '#ffffff',
  'popover-background': '#ffffff',
  'feedback-background': 'white',
  'feedback-foreground': 'black',
  'shadow': 'hsla(0, 0%, 0%, 0.15)',
  'badge-background': '#dbebff',
  'badge-border': '#b9d6ff',
  'fullscreen-background': '#ffffff',
  'fullscreen-accent': '#e8edf1',
  'page-background': '#ffffff',
  'page-foreground': 'var(--looks-secondary-dark)',
  'project-title-inactive': 'var(--ui-white-transparent)',
  'project-title-hover': '#ffffff7f',
  'link-color': '#2255dd',
  'filter-icon-black': 'none',
  'filter-icon-gray': 'grayscale(100%)',
  'filter-icon-white': 'none',
  'paint-ui-pane-border': 'var(--ui-black-transparent)',
  'paint-text-primary': 'var(--text-primary)',
  'paint-form-border': 'var(--ui-black-transparent)',
  'paint-looks-secondary': 'var(--looks-secondary-lighter)',
  'paint-looks-transparent': 'var(--looks-transparent)',
  'paint-input-background': 'var(--input-background)',
  'paint-popover-background': 'var(--popover-background)',
  'paint-filter-icon-gray': 'none'
};
const blockColors = {
  workspace: 'white',
  gridColor: 'transparent'
};


/***/ }),

/***/ "./src/lib/themes/gui/modern-white.js":
/*!********************************************!*\
  !*** ./src/lib/themes/gui/modern-white.js ***!
  \********************************************/
/*! exports provided: name, guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const name = {
  defaultMessage: 'Modern White',
  description: 'Label for the modern white GUI theme',
  id: 'tw.theme.gui.modernwhite'
};
const guiColors = {
  "color-scheme": "light",
  "ui-primary": "color-mix(in srgb, rgb(255, 255, 255) 98%, var(--looks-secondary))",
  "ui-secondary": "color-mix(in srgb, rgb(255, 255, 255) 98%, var(--looks-secondary))",
  "ui-tertiary": "color-mix(in srgb, rgb(255, 255, 255) 98%, var(--looks-secondary))",
  "ui-modal-overlay": "color-mix(in srgb, rgba(130, 130, 130, 0.8) 98%, var(--looks-secondary))",
  "ui-modal-background": "hsla(0, 100%, 100%, 1)",
  "ui-modal-foreground": "rgb(117, 117, 117)",
  "ui-modal-header-background": "#ffffff",
  "ui-modal-header-foreground": "rgb(0, 0, 0)",
  "ui-white": "rgb(255, 255, 255)",
  "ui-white-dim": "hsla(0, 100%, 100%, 0.75)",
  "ui-white-transparent": "hsla(0, 100%, 100%, 0.25)",
  "ui-transparent": "hsla(0, 100%, 100%, 0)",
  "ui-black-transparent": "hsla(0, 0%, 0%, 0.15)",
  "text-primary": "hsla(225, 15%, 40%, 1)",
  "text-primary-transparent": "hsla(225, 15%, 40%, 0.75)",
  "motion-primary": "hsla(215, 100%, 75%, 1)",
  "motion-primary-transparent": "hsla(215, 100%, 75%, 0.9)",
  "motion-tertiary": "hsla(215, 60%, 65%, 1)",
  "looks-secondary": "hsla(260, 60%, 72%, 1)",
  "looks-transparent": "hsla(260, 60%, 72%, 0.35)",
  "looks-light-transparent": "hsla(260, 60%, 72%, 0.15)",
  "looks-secondary-dark": "hsla(260, 42%, 62%, 1)",
  "red-primary": "hsla(20, 100%, 65%, 1)",
  "red-tertiary": "hsla(20, 100%, 55%, 1)",
  "sound-primary": "hsla(300, 53%, 72%, 1)",
  "sound-tertiary": "hsla(300, 48%, 62%, 1)",
  "control-primary": "hsla(38, 100%, 72%, 1)",
  "data-primary": "hsla(30, 100%, 70%, 1)",
  "pen-primary": "hsla(163, 85%, 68%, 1)",
  "pen-transparent": "hsla(163, 85%, 68%, 0.25)",
  "pen-tertiary": "hsla(163, 86%, 58%, 1)",
  "error-primary": "hsla(30, 100%, 68%, 1)",
  "error-light": "hsla(30, 100%, 78%, 1)",
  "error-transparent": "hsla(30, 100%, 68%, 0.25)",
  "extensions-primary": "hsla(163, 85%, 68%, 1)",
  "extensions-tertiary": "hsla(163, 85%, 58%, 1)",
  "extensions-transparent": "hsla(163, 85%, 68%, 0.35)",
  "extensions-light": "hsla(163, 57%, 85%, 1)",
  "drop-highlight": "hsla(215, 100%, 85%, 1)",
  "menu-bar-background": "color-mix(in srgb, rgb(255, 255, 255) 98%, var(--looks-secondary))",
  "menu-bar-background-image": "none",
  "icon-style": "brightness(0.2)",
  "menu-bar-feedback": "#606060",
  "menu-bar-foreground": "#7d7d7d",
  "assets-background": "#ffffff",
  "input-background": "#ffffff",
  "popover-background": "#ffffff",
  shadow: "hsla(0, 0%, 0%, 0.05)",
  "badge-background": "#dbebff",
  "badge-border": "#b9d6ff",
  "fullscreen-background": "#ffffff",
  "fullscreen-accent": "#e8edf1",
  "page-background": "#ffffff",
  "page-foreground": "#000000",
  "project-title-inactive": "var(--ui-white-transparent)",
  "project-title-hover": "#ffffff7f",
  "link-color": "#2255dd",
  "filter-icon-black": "none",
  "filter-icon-gray": "grayscale(100%)",
  "filter-icon-white": "none",
  "paint-ui-pane-border": "var(--ui-black-transparent)",
  "paint-text-primary": "var(--text-primary)",
  "paint-form-border": "var(--ui-black-transparent)",
  "paint-looks-secondary": "var(--looks-secondary)",
  "paint-looks-transparent": "var(--looks-transparent)",
  "paint-input-background": "var(--input-background)",
  "paint-popover-background": "var(--popover-background)",
  "paint-filter-icon-gray": "none"
};
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/guiHelpers.js":
/*!**************************************!*\
  !*** ./src/lib/themes/guiHelpers.js ***!
  \**************************************/
/*! exports provided: applyGuiColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyGuiColors", function() { return applyGuiColors; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/lib/themes/index.js");
/* harmony import */ var _addons_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../addons/hooks */ "./src/addons/hooks.js");
/* harmony import */ var _global_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-styles.css */ "./src/lib/themes/global-styles.css");
/* harmony import */ var _global_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_global_styles_css__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



const BLOCK_COLOR_NAMES = [
// Corresponds to the name of the object in blockColors
'motion', 'looks', 'sounds', 'control', 'event', 'sensing', 'pen', 'operators', 'data', 'data_lists', 'more', 'addons'];

/**
 * @param {string} css CSS color or var(--...)
 * @returns {string} evaluated CSS
 */
const evaluateCSS = css => {
  const variableMatch = css.match(/^var\(([\w-]+)\)$/);
  if (variableMatch) {
    return document.documentElement.style.getPropertyValue(variableMatch[1]);
  }
  return css;
};

/**
 * @param {Theme} theme the theme
 */
const applyGuiColors = theme => {
  const doc = document.documentElement;
  const defaultGuiColors = ___WEBPACK_IMPORTED_MODULE_0__["Theme"].light.getGuiColors();
  for (const _ref of Object.entries(defaultGuiColors)) {
    var _ref2 = _slicedToArray(_ref, 2);
    const name = _ref2[0];
    const value = _ref2[1];
    doc.style.setProperty("--".concat(name, "-default"), value);
  }
  const guiColors = theme.getGuiColors();
  for (const _ref3 of Object.entries(guiColors)) {
    var _ref4 = _slicedToArray(_ref3, 2);
    const name = _ref4[0];
    const value = _ref4[1];
    doc.style.setProperty("--".concat(name), value);
  }
  const blockColors = theme.getBlockColors();
  doc.style.setProperty('--editorTheme3-blockText', blockColors.text);
  doc.style.setProperty('--editorTheme3-inputColor', blockColors.textField);
  doc.style.setProperty('--editorTheme3-inputColor-text', blockColors.textFieldText);
  for (const color of BLOCK_COLOR_NAMES) {
    doc.style.setProperty("--editorTheme3-".concat(color, "-primary"), blockColors[color].primary);
    doc.style.setProperty("--editorTheme3-".concat(color, "-secondary"), blockColors[color].secondary);
    doc.style.setProperty("--editorTheme3-".concat(color, "-tertiary"), blockColors[color].tertiary);
    doc.style.setProperty("--editorTheme3-".concat(color, "-field-background"), blockColors[color].quaternary);
  }

  // Some browsers will color their interfaces to match theme-color, so if we make it the same color as our
  // menu bar, it'll look pretty cool.
  let metaThemeColor = document.head.querySelector('meta[name=theme-color]');
  if (!metaThemeColor) {
    metaThemeColor = document.createElement('meta');
    metaThemeColor.setAttribute('name', 'theme-color');
    document.head.appendChild(metaThemeColor);
  }
  metaThemeColor.setAttribute('content', evaluateCSS(guiColors['menu-bar-background']));

  // a horrible hack for icons...
  window.Recolor = {
    primary: guiColors['looks-secondary']
  };
  _addons_hooks__WEBPACK_IMPORTED_MODULE_1__["default"].recolorCallbacks.forEach(i => i());
};


/***/ }),

/***/ "./src/lib/themes/icons/tw-accent-rainbow.svg":
/*!****************************************************!*\
  !*** ./src/lib/themes/icons/tw-accent-rainbow.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/82aa0eba517b9756a9db4e3a9144723e.svg";

/***/ }),

/***/ "./src/lib/themes/icons/tw-accent-stars.svg":
/*!**************************************************!*\
  !*** ./src/lib/themes/icons/tw-accent-stars.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/73bdfee64cdf97022200bc10602ab9fd.svg";

/***/ }),

/***/ "./src/lib/themes/icons/tw-blocks-colorful.svg":
/*!*****************************************************!*\
  !*** ./src/lib/themes/icons/tw-blocks-colorful.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/99c18ed3fcf835ba2176971762abd9f7.svg";

/***/ }),

/***/ "./src/lib/themes/icons/tw-blocks-custom.svg":
/*!***************************************************!*\
  !*** ./src/lib/themes/icons/tw-blocks-custom.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLSBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL21hdGVyaWFsLWRlc2lnbi1pY29ucyAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNNyAxNGMtMS42NiAwLTMgMS4zNC0zIDMgMCAxLjMxLTEuMTYgMi0yIDIgLjkyIDEuMjIgMi40OSAyIDQgMiAyLjIxIDAgNC0xLjc5IDQtNCAwLTEuNjYtMS4zNC0zLTMtM3ptMTMuNzEtOS4zN2wtMS4zNC0xLjM0Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMEw5IDEyLjI1IDExLjc1IDE1bDguOTYtOC45NmMuMzktLjM5LjM5LTEuMDIgMC0xLjQxeiIvPjwvc3ZnPg=="

/***/ }),

/***/ "./src/lib/themes/icons/tw-blocks-dark.svg":
/*!*************************************************!*\
  !*** ./src/lib/themes/icons/tw-blocks-dark.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/3c06b74c80d1e6b1d210ca86c87cd326.svg";

/***/ }),

/***/ "./src/lib/themes/icons/tw-blocks-high-contrast.svg":
/*!**********************************************************!*\
  !*** ./src/lib/themes/icons/tw-blocks-high-contrast.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/e4dfc45f34b4606356c4c70ba14a96f0.svg";

/***/ }),

/***/ "./src/lib/themes/icons/tw-blocks-three.svg":
/*!**************************************************!*\
  !*** ./src/lib/themes/icons/tw-blocks-three.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/64e66a9dcf4b42a699f49e5973a4a62e.svg";

/***/ }),

/***/ "./src/lib/themes/icons/tw-moon.svg":
/*!******************************************!*\
  !*** ./src/lib/themes/icons/tw-moon.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNS4yNzExNCIgaGVpZ2h0PSIxNy43NDI5OSIgdmlld0JveD0iMCwwLDE1LjI3MTE0LDE3Ljc0Mjk5Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMyLjM2NDQzLC0xNzEuMTI4NSkiPjxnIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMjQzLjIwMDgzLDE3MS4zNDY4M2MwLjM0MzA3LDAuMDc2MjQgMC41OTk1MiwwLjM2MDQxIDAuNjQxMSwwLjcxMDQyYzAuMDQxNTgsMC4zNTAwMSAtMC4xMzg2MiwwLjY4OTYyIC0wLjQ1Mzk3LDAuODQ1NTZjLTIuMTAwMDUsMS4wNDY1NiAtMy41MzgyLDMuMjEyNDYgLTMuNTM4Miw1LjcxMTAzYzAsMy41MjA4NyAyLjg1NTUyLDYuMzc2MzggNi4zNzYzOSw2LjM3NjM4YzAuMTczMjcsMCAwLjM0MzA3LC0wLjAwNjkzIDAuNTEyODgsLTAuMDIwNzljMC4zNTAwMSwtMC4wMjc3MyAwLjY4MjY5LDAuMTY5OCAwLjgyNDc3LDAuNDg4NjJjMC4xNDIwOSwwLjMxODgyIDAuMDY5MzEsMC42OTY1NSAtMC4xODM2NywwLjkzOTEzYy0xLjU5NDEsMS41MzE3MiAtMy43NTk5OSwyLjQ3NDMyIC02LjE0NDIsMi40NzQzMmMtNC45MDAxMSwwIC04Ljg3MTUsLTMuOTcxMzggLTguODcxNSwtOC44NzE1YzAsLTQuOTAwMTEgMy45NzEzOCwtOC44NzE1IDguODcxNSwtOC44NzE1YzAuNjcyMjksMCAxLjMzMDczLDAuMDc2MjMgMS45NjQ5LDAuMjE4MzJ6Ii8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6Ny42MzU1NzAwMDAwMDAwMDE6OC44NzE0OTUwMDAwMDAwMS0tPg=="

/***/ }),

/***/ "./src/lib/themes/icons/tw-palette.svg":
/*!*********************************************!*\
  !*** ./src/lib/themes/icons/tw-palette.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMi42NTU1NiIgaGVpZ2h0PSIyMi42NTExMyIgdmlld0JveD0iMCwwLDIyLjY1NTU2LDIyLjY1MTEzIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI4LjY3MjIyLC0xNjguNjc0NDMpIj48ZyBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTI1MS4zMjc3OCwxODBjMCwwLjAzOTgyIDAsMC4wNzk2MyAwLDAuMTE5NDVjLTAuMDE3NywxLjYxNDc4IC0xLjQ4NjQ4LDIuNzExOTQgLTMuMTAxMjYsMi43MTE5NGgtNC4zMzExNGMtMS4xNzIzNywwIC0yLjEyMzU1LDAuOTUxMTcgLTIuMTIzNTUsMi4xMjM1NWMwLDAuMTUwNDIgMC4wMTc3LDAuMjk2NDEgMC4wNDQyNCwwLjQzNzk4YzAuMDkyOTEsMC40NTEyNiAwLjI4NzU3LDAuODg0ODEgMC40Nzc4LDEuMzIyNzljMC4yNjk4NywwLjYxMDUyIDAuNTM1MzEsMS4yMTY2MSAwLjUzNTMxLDEuODU4MWMwLDEuNDA2ODUgLTAuOTU1NiwyLjY4NTQgLTIuMzYyNDUsMi43NDI5MmMtMC4xNTQ4NCwwLjAwNDQyIC0wLjMwOTY4LDAuMDA4ODUgLTAuNDY4OTQsMC4wMDg4NWMtNi4yNTU2MSwwIC0xMS4zMjU1NywtNS4wNjk5NiAtMTEuMzI1NTcsLTExLjMyNTU3YzAsLTYuMjU1NjEgNS4wNzQzOCwtMTEuMzI1NTcgMTEuMzI5OTksLTExLjMyNTU3YzYuMjU1NjEsMCAxMS4zMjU1Nyw1LjA2OTk2IDExLjMyNTU3LDExLjMyNTU3ek0yMzQuMzM5NDMsMTgxLjQxNTdjMCwtMC43ODMwNSAtMC42MzI2NCwtMS40MTU2OSAtMS40MTU2OSwtMS40MTU2OWMtMC43ODMwNSwwIC0xLjQxNTY5LDAuNjMyNjQgLTEuNDE1NjksMS40MTU2OWMwLDAuNzgzMDUgMC42MzI2NCwxLjQxNTY5IDEuNDE1NjksMS40MTU2OWMwLjc4MzA1LDAgMS40MTU2OSwtMC42MzI2NCAxLjQxNTY5LC0xLjQxNTY5ek0yMzQuMzM5NDMsMTc3LjE2ODYxYzAuNzgzMDUsMCAxLjQxNTY5LC0wLjYzMjY0IDEuNDE1NjksLTEuNDE1NjljMCwtMC43ODMwNSAtMC42MzI2NCwtMS40MTU3IC0xLjQxNTY5LC0xLjQxNTdjLTAuNzgzMDUsMCAtMS40MTU2OSwwLjYzMjY1IC0xLjQxNTY5LDEuNDE1N2MwLDAuNzgzMDUgMC42MzI2NCwxLjQxNTY5IDEuNDE1NjksMS40MTU2OXpNMjQxLjQxNzkxLDE3Mi45MjE1MmMwLC0wLjc4MzA1IC0wLjYzMjY1LC0xLjQxNTY5IC0xLjQxNTcsLTEuNDE1NjljLTAuNzgzMDUsMCAtMS40MTU2OSwwLjYzMjY0IC0xLjQxNTY5LDEuNDE1NjljMCwwLjc4MzA1IDAuNjMyNjQsMS40MTU2OSAxLjQxNTY5LDEuNDE1NjljMC43ODMwNSwwIDEuNDE1NywtMC42MzI2NCAxLjQxNTcsLTEuNDE1Njl6TTI0NS42NjUsMTc3LjE2ODYxYzAuNzgzMDUsMCAxLjQxNTY5LC0wLjYzMjY0IDEuNDE1NjksLTEuNDE1NjljMCwtMC43ODMwNSAtMC42MzI2NCwtMS40MTU3IC0xLjQxNTY5LC0xLjQxNTdjLTAuNzgzMDUsMCAtMS40MTU2OSwwLjYzMjY1IC0xLjQxNTY5LDEuNDE1N2MwLDAuNzgzMDUgMC42MzI2NCwxLjQxNTY5IDEuNDE1NjksMS40MTU2OXoiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMS4zMjc3Nzk5OTk5OTk5OToxMS4zMjU1NjUwMDAwMDAwMTItLT4="

/***/ }),

/***/ "./src/lib/themes/icons/tw-star.svg":
/*!******************************************!*\
  !*** ./src/lib/themes/icons/tw-star.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMy4wNzk3OCIgaGVpZ2h0PSIyMi4yMDEwNiIgdmlld0JveD0iMCwwLDIzLjA3OTc4LDIyLjIwMTA2Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI4LjQ2MDEyLC0xNjguNjc2KSI+PGcgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMjQwLDE3MC45ODE0N2wyLjMyMDE1LDYuNzQ0MDdsNy4wNjUwNCwwLjE0NTQ3bC01LjYzMTExLDQuMzEzNTRsMi4wNDYyOSw2LjgzMzk4bC01LjgwMDM2LC00LjA3ODE2bC01LjgwMDM2LDQuMDc4MTZsMi4wNDYyOSwtNi44MzM5OGwtNS42MzExMSwtNC4zMTM1NGw3LjA2NTA0LC0wLjE0NTQ3eiIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjExLjUzOTg4MTE3NDk3MjcyOjExLjMyNDAwMDcxMjQ3MzE3OS0tPg=="

/***/ }),

/***/ "./src/lib/themes/icons/tw-sun.svg":
/*!*****************************************!*\
  !*** ./src/lib/themes/icons/tw-sun.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMS4yNzk0OSIgaGVpZ2h0PSIyMS4yODMxOCIgdmlld0JveD0iMCwwLDIxLjI3OTQ5LDIxLjI4MzE4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI5LjM2MDI1LC0xNjkuMzU4NDEpIj48ZyBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTIzOS45OTgxNiwxNjkuMzYyMTFjMC4zMTAyNywwIDAuNjAyMDgsMC4xNjI1MiAwLjc2MDkxLDAuNDMyMTZsMi4wNTAwMSwzLjQyMDM3bDMuODcxMDEsLTAuOTcxNDRjMC4zMDI4OSwtMC4wNzM4NyAwLjYyNDI0LDAuMDE0NzggMC44NDIxNywwLjIzMjcxYzAuMjE3OTMsMC4yMTc5MyAwLjMwNjU4LDAuNTQyOTcgMC4yMzI3LDAuODQyMTZsLTAuOTcxNDUsMy44NjczMmwzLjQyNDA4LDIuMDUwMDFjMC4yNjU5NCwwLjE1ODgzIDAuNDMyMTYsMC40NTA2NCAwLjQzMjE2LDAuNzYwOTFjMCwwLjMxMDI3IC0wLjE2MjUyLDAuNjAyMDcgLTAuNDMyMTYsMC43NjA5bC0zLjQyNDA4LDIuMDUzNzFsMC45NzE0NSwzLjg2NzMyYzAuMDczODcsMC4zMDI4OSAtMC4wMTQ3NywwLjYyNDIzIC0wLjIzMjcsMC44NDIxNmMtMC4yMTc5MywwLjIxNzkzIC0wLjU0Mjk4LDAuMzEwMjcgLTAuODQyMTcsMC4yMzY0bC0zLjg2NzMxLC0wLjk3MTQ0bC0yLjA1MDAyLDMuNDI0MDdjLTAuMTU4ODMsMC4yNjU5NCAtMC40NTA2NCwwLjQzMjE2IC0wLjc2MDkxLDAuNDMyMTZjLTAuMzEwMjcsMCAtMC42MDIwOCwtMC4xNjI1MiAtMC43NjA5MSwtMC40MzIxNmwtMi4wNTM3MSwtMy40MjQwN2wtMy44NjczMSwwLjk3MTQ0Yy0wLjMwMjg5LDAuMDczODcgLTAuNjIwNTUsLTAuMDE0NzggLTAuODQyMTcsLTAuMjMyNzFjLTAuMjIxNjIsLTAuMjE3OTMgLTAuMzEwMjcsLTAuNTQyOTcgLTAuMjM2MzksLTAuODQ1ODZsMC45Njc3NSwtMy44NjczMmwtMy40MjAzOCwtMi4wNTAwMWMtMC4yNjU5NCwtMC4xNjI1MiAtMC40Mjg0NywtMC40NTA2NCAtMC40Mjg0NywtMC43NjA5MWMwLC0wLjMxMDI3IDAuMTYyNTIsLTAuNjAyMDggMC40MzIxNiwtMC43NjA5MWwzLjQyMDM4LC0yLjA1MDAxbC0wLjk3MTQ0LC0zLjg3MTAxYy0wLjA3Mzg3LC0wLjMwMjg5IDAuMDExMDgsLTAuNjIwNTQgMC4yMzI3LC0wLjg0MjE2YzAuMjIxNjIsLTAuMjIxNjIgMC41NDI5OCwtMC4zMDY1OCAwLjg0NTg3LC0wLjIzMjcxbDMuODY3MzEsMC45Njc3NmwyLjA1MDAyLC0zLjQyMDM4bDAuMDY2NDksLTAuMDk2MDRjMC4xNjYyMSwtMC4yMTA1NCAwLjQyMTA5LC0wLjMzNjEzIDAuNjk0NDIsLTAuMzM2MTN6TTIzOS45OTgxNiwxNzQuNjgxMDVjLTIuOTM2NTEsMCAtNS4zMTg5NSwyLjM4MjQ0IC01LjMxODk1LDUuMzE4OTVjMCwyLjkzNjUxIDIuMzgyNDQsNS4zMTg5NSA1LjMxODk1LDUuMzE4OTVjMi45MzY1MSwwIDUuMzE4OTUsLTIuMzgyNDQgNS4zMTg5NSwtNS4zMTg5NWMwLC0yLjkzNjUxIC0yLjM4MjQ0LC01LjMxODk1IC01LjMxODk1LC01LjMxODk1ek0yMzkuOTk4MTYsMTgzLjU0NTk3Yy0xLjk1NzY3LDAgLTMuNTQ1OTYsLTEuNTg4MjkgLTMuNTQ1OTYsLTMuNTQ1OTZjMCwtMS45NTc2NyAxLjU4ODI5LC0zLjU0NTk2IDMuNTQ1OTYsLTMuNTQ1OTZjMS45NTc2NywwIDMuNTQ1OTYsMS41ODgyOSAzLjU0NTk2LDMuNTQ1OTZjMCwxLjk1NzY3IC0xLjU4ODI5LDMuNTQ1OTYgLTMuNTQ1OTYsMy41NDU5NnoiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMC42Mzk3NDUwMDAwMDAwMDU6MTAuNjQxNTkwMDAwMDAwMDA4LS0+"

/***/ }),

/***/ "./src/lib/themes/index.js":
/*!*********************************!*\
  !*** ./src/lib/themes/index.js ***!
  \*********************************/
/*! exports provided: Theme, defaultBlockColors, ACCENT_RED, ACCENT_PURPLE, ACCENT_BLUE, ACCENT_ORANGE, ACCENT_CYAN, ACCENT_LIME, ACCENT_MAGENTA, ACCENT_FUCHSIA, ACCENT_INDIGO, ACCENT_INDIGO_BLUE, ACCENT_CORRUPTED_BLUE, ACCENT_GAIA_BLUE, ACCENT_GREEN, ACCENT_RAINBOW, ACCENT_COTTON_CANDY, ACCENT_NITRO_FIRE, ACCENT_HOT_FUSE, ACCENT_CUSTOM, ACCENT_MAP, AccentIcons, AccentOptions, GUI_LIGHT, GUI_MODERN_LIGHT, GUI_DARK, GUI_MODERN_DARK, GUI_MIDNIGHT, GUI_CUSTOM, GUI_MAP, GuiIcons, GuiOptions, BLOCKS_THREE, BLOCKS_DARK, BLOCKS_HIGH_CONTRAST, BLOCKS_COLORFUL, BLOCKS_CUSTOM, BLOCKS_MAP, MENUBAR_ALIGN, MENUBAR_ALIGN_DEFAULT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBlockColors", function() { return defaultBlockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_RED", function() { return ACCENT_RED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_PURPLE", function() { return ACCENT_PURPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_BLUE", function() { return ACCENT_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_ORANGE", function() { return ACCENT_ORANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_CYAN", function() { return ACCENT_CYAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_LIME", function() { return ACCENT_LIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_MAGENTA", function() { return ACCENT_MAGENTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_FUCHSIA", function() { return ACCENT_FUCHSIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_INDIGO", function() { return ACCENT_INDIGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_INDIGO_BLUE", function() { return ACCENT_INDIGO_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_CORRUPTED_BLUE", function() { return ACCENT_CORRUPTED_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_GAIA_BLUE", function() { return ACCENT_GAIA_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_GREEN", function() { return ACCENT_GREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_RAINBOW", function() { return ACCENT_RAINBOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_COTTON_CANDY", function() { return ACCENT_COTTON_CANDY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_NITRO_FIRE", function() { return ACCENT_NITRO_FIRE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_HOT_FUSE", function() { return ACCENT_HOT_FUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_CUSTOM", function() { return ACCENT_CUSTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_MAP", function() { return ACCENT_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccentIcons", function() { return AccentIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccentOptions", function() { return AccentOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_LIGHT", function() { return GUI_LIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_MODERN_LIGHT", function() { return GUI_MODERN_LIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_DARK", function() { return GUI_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_MODERN_DARK", function() { return GUI_MODERN_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_MIDNIGHT", function() { return GUI_MIDNIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_CUSTOM", function() { return GUI_CUSTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_MAP", function() { return GUI_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiIcons", function() { return GuiIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiOptions", function() { return GuiOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_THREE", function() { return BLOCKS_THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_DARK", function() { return BLOCKS_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_HIGH_CONTRAST", function() { return BLOCKS_HIGH_CONTRAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_COLORFUL", function() { return BLOCKS_COLORFUL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_CUSTOM", function() { return BLOCKS_CUSTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_MAP", function() { return BLOCKS_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENUBAR_ALIGN", function() { return MENUBAR_ALIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENUBAR_ALIGN_DEFAULT", function() { return MENUBAR_ALIGN_DEFAULT; });
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.defaultsdeep */ "./node_modules/lodash.defaultsdeep/index.js");
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _accent_purple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accent/purple */ "./src/lib/themes/accent/purple.js");
/* harmony import */ var _accent_blue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accent/blue */ "./src/lib/themes/accent/blue.js");
/* harmony import */ var _accent_red__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accent/red */ "./src/lib/themes/accent/red.js");
/* harmony import */ var _accent_cyan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accent/cyan */ "./src/lib/themes/accent/cyan.js");
/* harmony import */ var _accent_lime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accent/lime */ "./src/lib/themes/accent/lime.js");
/* harmony import */ var _accent_magenta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accent/magenta */ "./src/lib/themes/accent/magenta.js");
/* harmony import */ var _accent_orange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accent/orange */ "./src/lib/themes/accent/orange.js");
/* harmony import */ var _accent_green__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./accent/green */ "./src/lib/themes/accent/green.js");
/* harmony import */ var _accent_indigo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./accent/indigo */ "./src/lib/themes/accent/indigo.js");
/* harmony import */ var _accent_indigo_blue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./accent/indigo-blue */ "./src/lib/themes/accent/indigo-blue.js");
/* harmony import */ var _accent_corrupted_blue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./accent/corrupted-blue */ "./src/lib/themes/accent/corrupted-blue.js");
/* harmony import */ var _accent_gaia_blue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./accent/gaia-blue */ "./src/lib/themes/accent/gaia-blue.js");
/* harmony import */ var _accent_magenta_purple__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./accent/magenta-purple */ "./src/lib/themes/accent/magenta-purple.js");
/* harmony import */ var _accent_cottoncandy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./accent/cottoncandy */ "./src/lib/themes/accent/cottoncandy.js");
/* harmony import */ var _accent_rainbow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./accent/rainbow */ "./src/lib/themes/accent/rainbow.js");
/* harmony import */ var _accent_hotfuse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./accent/hotfuse */ "./src/lib/themes/accent/hotfuse.js");
/* harmony import */ var _accent_nitrofire__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./accent/nitrofire */ "./src/lib/themes/accent/nitrofire.js");
/* harmony import */ var _accent_green_tea__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./accent/green-tea */ "./src/lib/themes/accent/green-tea.js");
/* harmony import */ var _accent_pale_blue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./accent/pale-blue */ "./src/lib/themes/accent/pale-blue.js");
/* harmony import */ var _accent_eggplant_purple__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./accent/eggplant-purple */ "./src/lib/themes/accent/eggplant-purple.js");
/* harmony import */ var _accent_trans__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./accent/trans */ "./src/lib/themes/accent/trans.js");
/* harmony import */ var _accent_gay__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./accent/gay */ "./src/lib/themes/accent/gay.js");
/* harmony import */ var _accent_bi__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./accent/bi */ "./src/lib/themes/accent/bi.js");
/* harmony import */ var _accent_pan__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./accent/pan */ "./src/lib/themes/accent/pan.js");
/* harmony import */ var _accent_lesbian__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./accent/lesbian */ "./src/lib/themes/accent/lesbian.js");
/* harmony import */ var _accent_nonbinary__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./accent/nonbinary */ "./src/lib/themes/accent/nonbinary.js");
/* harmony import */ var _accent_ace__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./accent/ace */ "./src/lib/themes/accent/ace.js");
/* harmony import */ var _accent_rotur__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./accent/rotur */ "./src/lib/themes/accent/rotur.js");
/* harmony import */ var _accent_pink__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./accent/pink */ "./src/lib/themes/accent/pink.js");
/* harmony import */ var _accent_pink_v2___WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./accent/pink(v2) */ "./src/lib/themes/accent/pink(v2).js");
/* harmony import */ var _accent_sunset__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./accent/sunset */ "./src/lib/themes/accent/sunset.js");
/* harmony import */ var _accent_ocean__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./accent/ocean */ "./src/lib/themes/accent/ocean.js");
/* harmony import */ var _accent_aurora__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./accent/aurora */ "./src/lib/themes/accent/aurora.js");
/* harmony import */ var _accent_cosmic__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./accent/cosmic */ "./src/lib/themes/accent/cosmic.js");
/* harmony import */ var _accent_fire__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./accent/fire */ "./src/lib/themes/accent/fire.js");
/* harmony import */ var _accent_nebula__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./accent/nebula */ "./src/lib/themes/accent/nebula.js");
/* harmony import */ var _accent_lavender__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./accent/lavender */ "./src/lib/themes/accent/lavender.js");
/* harmony import */ var _accent_mint__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./accent/mint */ "./src/lib/themes/accent/mint.js");
/* harmony import */ var _accent_cherry__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./accent/cherry */ "./src/lib/themes/accent/cherry.js");
/* harmony import */ var _accent_sky__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./accent/sky */ "./src/lib/themes/accent/sky.js");
/* harmony import */ var _accent_forest__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./accent/forest */ "./src/lib/themes/accent/forest.js");
/* harmony import */ var _accent_coral__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./accent/coral */ "./src/lib/themes/accent/coral.js");
/* harmony import */ var _accent_astraeditor__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./accent/astraeditor */ "./src/lib/themes/accent/astraeditor.js");
/* harmony import */ var _accent_02e__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./accent/02e */ "./src/lib/themes/accent/02e.js");
/* harmony import */ var _accent_ce__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./accent/ce */ "./src/lib/themes/accent/ce.js");
/* harmony import */ var _accent_miku__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./accent/miku */ "./src/lib/themes/accent/miku.js");
/* harmony import */ var _accent_ty__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./accent/ty */ "./src/lib/themes/accent/ty.js");
/* harmony import */ var _accent_oubi__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./accent/oubi */ "./src/lib/themes/accent/oubi.js");
/* harmony import */ var _accent_omnimax_blue__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./accent/omnimax-blue */ "./src/lib/themes/accent/omnimax-blue.js");
/* harmony import */ var _accent_vaporwave__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./accent/vaporwave */ "./src/lib/themes/accent/vaporwave.js");
/* harmony import */ var _accent_matrix__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./accent/matrix */ "./src/lib/themes/accent/matrix.js");
/* harmony import */ var _accent_honey__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./accent/honey */ "./src/lib/themes/accent/honey.js");
/* harmony import */ var _accent_yellow__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./accent/yellow */ "./src/lib/themes/accent/yellow.js");
/* harmony import */ var _accent_green_v2___WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./accent/green(v2) */ "./src/lib/themes/accent/green(v2).js");
/* harmony import */ var _accent_dark_green__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./accent/dark-green */ "./src/lib/themes/accent/dark-green.js");
/* harmony import */ var _accent_custom__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./accent/custom */ "./src/lib/themes/accent/custom.js");
/* harmony import */ var _gui_light__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./gui/light */ "./src/lib/themes/gui/light.js");
/* harmony import */ var _gui_modern_light__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./gui/modern-light */ "./src/lib/themes/gui/modern-light.js");
/* harmony import */ var _gui_amp_light__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./gui/amp-light */ "./src/lib/themes/gui/amp-light.js");
/* harmony import */ var _gui_genesislight__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./gui/genesislight */ "./src/lib/themes/gui/genesislight.js");
/* harmony import */ var _gui_modern_white__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./gui/modern-white */ "./src/lib/themes/gui/modern-white.js");
/* harmony import */ var _gui_dark__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./gui/dark */ "./src/lib/themes/gui/dark.js");
/* harmony import */ var _gui_amp_dark__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./gui/amp-dark */ "./src/lib/themes/gui/amp-dark.js");
/* harmony import */ var _gui_modern_dark__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./gui/modern-dark */ "./src/lib/themes/gui/modern-dark.js");
/* harmony import */ var _gui_genesisdark__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./gui/genesisdark */ "./src/lib/themes/gui/genesisdark.js");
/* harmony import */ var _gui_deep_dark__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./gui/deep-dark */ "./src/lib/themes/gui/deep-dark.js");
/* harmony import */ var _gui_midnight__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./gui/midnight */ "./src/lib/themes/gui/midnight.js");
/* harmony import */ var _gui_amoled__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./gui/amoled */ "./src/lib/themes/gui/amoled.js");
/* harmony import */ var _gui_amp_amoled__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./gui/amp-amoled */ "./src/lib/themes/gui/amp-amoled.js");
/* harmony import */ var _gui_amp_high_contrast__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./gui/amp-high-contrast */ "./src/lib/themes/gui/amp-high-contrast.js");
/* harmony import */ var _blocks_three__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./blocks/three */ "./src/lib/themes/blocks/three.js");
/* harmony import */ var _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./blocks/high-contrast */ "./src/lib/themes/blocks/high-contrast.js");
/* harmony import */ var _blocks_dark__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./blocks/dark */ "./src/lib/themes/blocks/dark.js");
/* harmony import */ var _blocks_colorful__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./blocks/colorful */ "./src/lib/themes/blocks/colorful.js");
/* harmony import */ var _icons_tw_accent_rainbow_svg__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./icons/tw-accent-rainbow.svg */ "./src/lib/themes/icons/tw-accent-rainbow.svg");
/* harmony import */ var _icons_tw_accent_rainbow_svg__WEBPACK_IMPORTED_MODULE_76___default = /*#__PURE__*/__webpack_require__.n(_icons_tw_accent_rainbow_svg__WEBPACK_IMPORTED_MODULE_76__);
/* harmony import */ var _icons_tw_accent_stars_svg__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./icons/tw-accent-stars.svg */ "./src/lib/themes/icons/tw-accent-stars.svg");
/* harmony import */ var _icons_tw_accent_stars_svg__WEBPACK_IMPORTED_MODULE_77___default = /*#__PURE__*/__webpack_require__.n(_icons_tw_accent_stars_svg__WEBPACK_IMPORTED_MODULE_77__);
/* harmony import */ var _icons_tw_sun_svg__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./icons/tw-sun.svg */ "./src/lib/themes/icons/tw-sun.svg");
/* harmony import */ var _icons_tw_sun_svg__WEBPACK_IMPORTED_MODULE_78___default = /*#__PURE__*/__webpack_require__.n(_icons_tw_sun_svg__WEBPACK_IMPORTED_MODULE_78__);
/* harmony import */ var _icons_tw_moon_svg__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./icons/tw-moon.svg */ "./src/lib/themes/icons/tw-moon.svg");
/* harmony import */ var _icons_tw_moon_svg__WEBPACK_IMPORTED_MODULE_79___default = /*#__PURE__*/__webpack_require__.n(_icons_tw_moon_svg__WEBPACK_IMPORTED_MODULE_79__);
/* harmony import */ var _icons_tw_star_svg__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./icons/tw-star.svg */ "./src/lib/themes/icons/tw-star.svg");
/* harmony import */ var _icons_tw_star_svg__WEBPACK_IMPORTED_MODULE_80___default = /*#__PURE__*/__webpack_require__.n(_icons_tw_star_svg__WEBPACK_IMPORTED_MODULE_80__);
/* harmony import */ var _icons_tw_palette_svg__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./icons/tw-palette.svg */ "./src/lib/themes/icons/tw-palette.svg");
/* harmony import */ var _icons_tw_palette_svg__WEBPACK_IMPORTED_MODULE_81___default = /*#__PURE__*/__webpack_require__.n(_icons_tw_palette_svg__WEBPACK_IMPORTED_MODULE_81__);
/* harmony import */ var _icons_tw_blocks_three_svg__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./icons/tw-blocks-three.svg */ "./src/lib/themes/icons/tw-blocks-three.svg");
/* harmony import */ var _icons_tw_blocks_three_svg__WEBPACK_IMPORTED_MODULE_82___default = /*#__PURE__*/__webpack_require__.n(_icons_tw_blocks_three_svg__WEBPACK_IMPORTED_MODULE_82__);
/* harmony import */ var _icons_tw_blocks_high_contrast_svg__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./icons/tw-blocks-high-contrast.svg */ "./src/lib/themes/icons/tw-blocks-high-contrast.svg");
/* harmony import */ var _icons_tw_blocks_high_contrast_svg__WEBPACK_IMPORTED_MODULE_83___default = /*#__PURE__*/__webpack_require__.n(_icons_tw_blocks_high_contrast_svg__WEBPACK_IMPORTED_MODULE_83__);
/* harmony import */ var _icons_tw_blocks_dark_svg__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./icons/tw-blocks-dark.svg */ "./src/lib/themes/icons/tw-blocks-dark.svg");
/* harmony import */ var _icons_tw_blocks_dark_svg__WEBPACK_IMPORTED_MODULE_84___default = /*#__PURE__*/__webpack_require__.n(_icons_tw_blocks_dark_svg__WEBPACK_IMPORTED_MODULE_84__);
/* harmony import */ var _icons_tw_blocks_colorful_svg__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./icons/tw-blocks-colorful.svg */ "./src/lib/themes/icons/tw-blocks-colorful.svg");
/* harmony import */ var _icons_tw_blocks_colorful_svg__WEBPACK_IMPORTED_MODULE_85___default = /*#__PURE__*/__webpack_require__.n(_icons_tw_blocks_colorful_svg__WEBPACK_IMPORTED_MODULE_85__);
/* harmony import */ var _icons_tw_blocks_custom_svg__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./icons/tw-blocks-custom.svg */ "./src/lib/themes/icons/tw-blocks-custom.svg");
/* harmony import */ var _icons_tw_blocks_custom_svg__WEBPACK_IMPORTED_MODULE_86___default = /*#__PURE__*/__webpack_require__.n(_icons_tw_blocks_custom_svg__WEBPACK_IMPORTED_MODULE_86__);
/* harmony import */ var _components_menu_bar_tw_align_left_svg__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ../../components/menu-bar/tw-align-left.svg */ "./src/components/menu-bar/tw-align-left.svg");
/* harmony import */ var _components_menu_bar_tw_align_left_svg__WEBPACK_IMPORTED_MODULE_87___default = /*#__PURE__*/__webpack_require__.n(_components_menu_bar_tw_align_left_svg__WEBPACK_IMPORTED_MODULE_87__);
/* harmony import */ var _components_menu_bar_tw_align_center_svg__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ../../components/menu-bar/tw-align-center.svg */ "./src/components/menu-bar/tw-align-center.svg");
/* harmony import */ var _components_menu_bar_tw_align_center_svg__WEBPACK_IMPORTED_MODULE_88___default = /*#__PURE__*/__webpack_require__.n(_components_menu_bar_tw_align_center_svg__WEBPACK_IMPORTED_MODULE_88__);
/* harmony import */ var _components_menu_bar_tw_align_right_svg__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ../../components/menu-bar/tw-align-right.svg */ "./src/components/menu-bar/tw-align-right.svg");
/* harmony import */ var _components_menu_bar_tw_align_right_svg__WEBPACK_IMPORTED_MODULE_89___default = /*#__PURE__*/__webpack_require__.n(_components_menu_bar_tw_align_right_svg__WEBPACK_IMPORTED_MODULE_89__);
var _Theme;
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


























































































const ACCENT_PURPLE = 'purple';
const ACCENT_BLUE = 'blue';
const ACCENT_RED = 'red';
const ACCENT_CYAN = 'cyan';
const ACCENT_LIME = 'lime';
const ACCENT_ORANGE = 'orange';
const ACCENT_MAGENTA = 'magenta';
const ACCENT_FUCHSIA = 'fuchsia';
const ACCENT_INDIGO = 'indigo';
const ACCENT_INDIGO_BLUE = 'indigoblue';
const ACCENT_CORRUPTED_BLUE = 'corruptedblue';
const ACCENT_GAIA_BLUE = 'gaiablue';
const ACCENT_GREEN = 'green';
const ACCENT_RAINBOW = 'rainbow';
const ACCENT_COTTON_CANDY = 'cottoncandy'; //unique
const ACCENT_HOT_FUSE = 'stars'; //unique
const ACCENT_NITRO_FIRE = 'nitrofire'; //unique
const ACCENT_OMNIBLUE = 'omnimax-blue'; //LOL From my deleted MistWarp mod.
const ACCENT_GREEN_TEA = 'green-tea'; //Bilup
const ACCENT_PALE_BLUE = 'pale-blue'; //Bilup
const ACCENT_EGGPLANT_PURPLE = 'eggplant-purple'; //Bilup
const ACCENT_TRANS = 'trans'; //MistWarp
const ACCENT_GAY = 'gay'; //MistWarp
const ACCENT_BI = 'bi'; //MistWarp
const ACCENT_LESBIAN = 'lesbian'; //MistWarp
const ACCENT_PAN = 'pan'; //MistWarp
const ACCENT_NONBINARY = 'nonbinary'; //MistWarp
const ACCENT_ACE = 'ace'; //MistWarp
const ACCENT_ROTUR = 'rotur'; //MistWarp
const ACCENT_PINK = 'pink'; //MistWarp
const ACCENT_PINK2 = 'pink(v2)'; //MistWarp
const ACCENT_GREEN2 = 'greenv2'; //MistWarp
const ACCENT_YELLOW = 'yellow'; //MistWarp
const ACCENT_DARK_GREEN = 'dark-green'; //MistWarp
const ACCENT_SUNSET = 'sunset'; //MistWarp
const ACCENT_OCEAN = 'ocean'; //MistWarp
const ACCENT_AURORA = 'aurora'; //MistWarp
const ACCENT_COSMIC = 'cosmic'; //MistWarp
const ACCENT_NEBULA = 'nebula'; //MistWarp
const ACCENT_FIRE = 'fire'; //MistWarp
const ACCENT_MINT = 'mint'; //MistWarp
const ACCENT_SKY = 'sky'; //MistWarp
const ACCENT_FOREST = 'forest'; //MistWarp
const ACCENT_CHERRY = 'cherry'; //MistWarp
const ACCENT_LAVENDER = 'lavender'; //MistWarp
const ACCENT_CORAL = 'coral'; //MistWarp
const ACCENT_VAPORWAVE = 'vaporwave'; //MistWarp
const ACCENT_MATRIX = 'matrix'; //MistWarp
const ACCENT_HONEY = 'honey'; //MistWarp
const ACCENT_AE = 'astraeditor'; //Astra Editor
const ACCENT_MIKU = 'miku'; //Astra Editor
const ACCENT_TY = 'ty'; //Astra Editor
const ACCENT_OUBI = 'oubi'; //Astra Editor
const ACCENT_CE = 'ce'; //02Engines
const ACCENT_02E = '02e'; //02Engine
const ACCENT_CUSTOM = 'custom';
const ACCENT_MAP = {
  [ACCENT_PURPLE]: _accent_purple__WEBPACK_IMPORTED_MODULE_2__,
  [ACCENT_BLUE]: _accent_blue__WEBPACK_IMPORTED_MODULE_3__,
  [ACCENT_RED]: _accent_red__WEBPACK_IMPORTED_MODULE_4__,
  [ACCENT_CYAN]: _accent_cyan__WEBPACK_IMPORTED_MODULE_5__,
  [ACCENT_LIME]: _accent_lime__WEBPACK_IMPORTED_MODULE_6__,
  [ACCENT_ORANGE]: _accent_orange__WEBPACK_IMPORTED_MODULE_8__,
  [ACCENT_MAGENTA]: _accent_magenta__WEBPACK_IMPORTED_MODULE_7__,
  [ACCENT_FUCHSIA]: _accent_magenta_purple__WEBPACK_IMPORTED_MODULE_14__,
  [ACCENT_INDIGO]: _accent_indigo__WEBPACK_IMPORTED_MODULE_10__,
  [ACCENT_INDIGO_BLUE]: _accent_indigo_blue__WEBPACK_IMPORTED_MODULE_11__,
  [ACCENT_CORRUPTED_BLUE]: _accent_corrupted_blue__WEBPACK_IMPORTED_MODULE_12__,
  [ACCENT_GAIA_BLUE]: _accent_gaia_blue__WEBPACK_IMPORTED_MODULE_13__,
  [ACCENT_GREEN]: _accent_green__WEBPACK_IMPORTED_MODULE_9__,
  [ACCENT_RAINBOW]: _accent_rainbow__WEBPACK_IMPORTED_MODULE_16__,
  [ACCENT_HOT_FUSE]: _accent_hotfuse__WEBPACK_IMPORTED_MODULE_17__,
  [ACCENT_NITRO_FIRE]: _accent_nitrofire__WEBPACK_IMPORTED_MODULE_18__,
  [ACCENT_OMNIBLUE]: _accent_omnimax_blue__WEBPACK_IMPORTED_MODULE_50__,
  [ACCENT_COTTON_CANDY]: _accent_cottoncandy__WEBPACK_IMPORTED_MODULE_15__,
  [ACCENT_GREEN_TEA]: _accent_green_tea__WEBPACK_IMPORTED_MODULE_19__,
  [ACCENT_PALE_BLUE]: _accent_pale_blue__WEBPACK_IMPORTED_MODULE_20__,
  [ACCENT_EGGPLANT_PURPLE]: _accent_eggplant_purple__WEBPACK_IMPORTED_MODULE_21__,
  [ACCENT_TRANS]: _accent_trans__WEBPACK_IMPORTED_MODULE_22__,
  [ACCENT_GAY]: _accent_gay__WEBPACK_IMPORTED_MODULE_23__,
  [ACCENT_BI]: _accent_bi__WEBPACK_IMPORTED_MODULE_24__,
  [ACCENT_PAN]: _accent_pan__WEBPACK_IMPORTED_MODULE_25__,
  [ACCENT_LESBIAN]: _accent_lesbian__WEBPACK_IMPORTED_MODULE_26__,
  [ACCENT_NONBINARY]: _accent_nonbinary__WEBPACK_IMPORTED_MODULE_27__,
  [ACCENT_ACE]: _accent_ace__WEBPACK_IMPORTED_MODULE_28__,
  [ACCENT_ROTUR]: _accent_rotur__WEBPACK_IMPORTED_MODULE_29__,
  [ACCENT_PINK]: _accent_pink__WEBPACK_IMPORTED_MODULE_30__,
  [ACCENT_PINK2]: _accent_pink_v2___WEBPACK_IMPORTED_MODULE_31__,
  [ACCENT_GREEN2]: _accent_green_v2___WEBPACK_IMPORTED_MODULE_55__,
  [ACCENT_YELLOW]: _accent_yellow__WEBPACK_IMPORTED_MODULE_54__,
  [ACCENT_DARK_GREEN]: _accent_dark_green__WEBPACK_IMPORTED_MODULE_56__,
  [ACCENT_SUNSET]: _accent_sunset__WEBPACK_IMPORTED_MODULE_32__,
  [ACCENT_OCEAN]: _accent_ocean__WEBPACK_IMPORTED_MODULE_33__,
  [ACCENT_AURORA]: _accent_aurora__WEBPACK_IMPORTED_MODULE_34__,
  [ACCENT_COSMIC]: _accent_cosmic__WEBPACK_IMPORTED_MODULE_35__,
  [ACCENT_FIRE]: _accent_fire__WEBPACK_IMPORTED_MODULE_36__,
  [ACCENT_FOREST]: _accent_forest__WEBPACK_IMPORTED_MODULE_42__,
  [ACCENT_NEBULA]: _accent_nebula__WEBPACK_IMPORTED_MODULE_37__,
  [ACCENT_LAVENDER]: _accent_lavender__WEBPACK_IMPORTED_MODULE_38__,
  [ACCENT_MINT]: _accent_mint__WEBPACK_IMPORTED_MODULE_39__,
  [ACCENT_CHERRY]: _accent_cherry__WEBPACK_IMPORTED_MODULE_40__,
  [ACCENT_SKY]: _accent_sky__WEBPACK_IMPORTED_MODULE_41__,
  [ACCENT_CORAL]: _accent_coral__WEBPACK_IMPORTED_MODULE_43__,
  [ACCENT_AE]: _accent_astraeditor__WEBPACK_IMPORTED_MODULE_44__,
  [ACCENT_02E]: _accent_02e__WEBPACK_IMPORTED_MODULE_45__,
  [ACCENT_CE]: _accent_ce__WEBPACK_IMPORTED_MODULE_46__,
  [ACCENT_MIKU]: _accent_miku__WEBPACK_IMPORTED_MODULE_47__,
  [ACCENT_TY]: _accent_ty__WEBPACK_IMPORTED_MODULE_48__,
  [ACCENT_OUBI]: _accent_oubi__WEBPACK_IMPORTED_MODULE_49__,
  [ACCENT_VAPORWAVE]: _accent_vaporwave__WEBPACK_IMPORTED_MODULE_51__,
  [ACCENT_MATRIX]: _accent_matrix__WEBPACK_IMPORTED_MODULE_52__,
  [ACCENT_HONEY]: _accent_honey__WEBPACK_IMPORTED_MODULE_53__,
  [ACCENT_CUSTOM]: _accent_custom__WEBPACK_IMPORTED_MODULE_57__
};
const AccentOptions = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  [ACCENT_INDIGO]: {
    "id": "tw.accent.indigo",
    "defaultMessage": "Indigo"
  },
  [ACCENT_MAGENTA]: {
    "id": "tw.accent.magenta",
    "defaultMessage": "Magenta"
  },
  [ACCENT_PINK]: {
    "id": "tw.accent.pink",
    "defaultMessage": "Pink"
  },
  [ACCENT_ORANGE]: {
    "id": "tw.accent.orange",
    "defaultMessage": "Orange"
  },
  [ACCENT_YELLOW]: {
    "id": "tw.accent.yellow",
    "defaultMessage": "Yellow"
  },
  [ACCENT_GREEN]: {
    "id": "tw.accent.green",
    "defaultMessage": "Green"
  },
  [ACCENT_DARK_GREEN]: {
    "id": "tw.accent.darkgreen",
    "defaultMessage": "Dark Green"
  },
  [ACCENT_RED]: {
    "id": "tw.accent.red",
    "defaultMessage": "Red"
  },
  [ACCENT_PURPLE]: {
    "id": "tw.accent.purple",
    "defaultMessage": "Purple"
  },
  [ACCENT_BLUE]: {
    "id": "tw.accent.blue",
    "defaultMessage": "Blue"
  },
  [ACCENT_CYAN]: {
    "id": "tw.accent.cyan",
    "defaultMessage": "Cyan"
  },
  [ACCENT_LIME]: {
    "id": "tw.accent.lime",
    "defaultMessage": "Lime"
  },
  [ACCENT_FUCHSIA]: {
    "id": "tw.accent.fuchsia",
    "defaultMessage": "Fuchsia"
  },
  [ACCENT_INDIGO_BLUE]: {
    "id": "tw.accent.indigoblue",
    "defaultMessage": "S. Blue"
  },
  [ACCENT_CORRUPTED_BLUE]: {
    "id": "tw.accent.corruptedblue",
    "defaultMessage": "C. Blue"
  },
  [ACCENT_GAIA_BLUE]: {
    "id": "tw.accent.gaiablue",
    "defaultMessage": "G. Blue"
  },
  [ACCENT_COTTON_CANDY]: {
    "id": "tw.accent.cottoncandy",
    "defaultMessage": "C. Candy"
  },
  [ACCENT_OMNIBLUE]: {
    "id": "tw.accent.omniblue",
    "defaultMessage": "O. Blue"
  },
  [ACCENT_HOT_FUSE]: {
    "id": "tw.accent.hotfuse",
    "defaultMessage": "H. Fuse"
  },
  [ACCENT_NITRO_FIRE]: {
    "id": "tw.accent.nitrofire",
    "defaultMessage": "N. Fire"
  },
  [ACCENT_NEBULA]: {
    "id": "tw.accent.nebula",
    "defaultMessage": "Nebula"
  },
  [ACCENT_COSMIC]: {
    "id": "tw.accent.cosmic",
    "defaultMessage": "Cosmic"
  },
  [ACCENT_AURORA]: {
    "id": "tw.accent.aurora",
    "defaultMessage": "Aurora"
  },
  [ACCENT_MINT]: {
    "id": "tw.accent.mint",
    "defaultMessage": "Mint"
  },
  [ACCENT_RAINBOW]: {
    "id": "tw.accent.rainbow",
    "defaultMessage": "Rainbow"
  }
});
const AccentIcons = {
  //[ACCENT_RAINBOW]: rainbowIcon,
  //[ACCENT_HOT_FUSE]: starsIcon
};
const ACCENT_DEFAULT = ACCENT_INDIGO;
const GUI_LIGHT = 'light';
const GUI_MODERN_LIGHT = 'modern-light';
const GUI_AMP_LIGHT = 'amp-light';
const GUI_GENESIS_LIGHT = 'genesislight';
const GUI_MODERN_WHITE = 'modern-white';
const GUI_DARK = 'dark';
const GUI_AMP_DARK = 'amp-dark';
const GUI_MODERN_DARK = 'modern-dark';
const GUI_GENESIS_DARK = 'genesisdark';
const GUI_DEEP_DARK = 'deep-dark';
const GUI_MIDNIGHT = 'midnight';
const GUI_AMOLED = 'amoled';
const GUI_AMP_AMOLED = 'amp-amoled';
const GUI_HIGH_CONTRAST = 'high-contrast';
const GUI_CUSTOM = "custom";
const GUI_MAP = {
  [GUI_LIGHT]: _gui_light__WEBPACK_IMPORTED_MODULE_58__,
  [GUI_MODERN_LIGHT]: _gui_modern_light__WEBPACK_IMPORTED_MODULE_59__,
  [GUI_AMP_LIGHT]: _gui_amp_light__WEBPACK_IMPORTED_MODULE_60__,
  [GUI_GENESIS_LIGHT]: _gui_genesislight__WEBPACK_IMPORTED_MODULE_61__,
  [GUI_MODERN_WHITE]: _gui_modern_white__WEBPACK_IMPORTED_MODULE_62__,
  [GUI_DARK]: _gui_dark__WEBPACK_IMPORTED_MODULE_63__,
  [GUI_MODERN_DARK]: _gui_modern_dark__WEBPACK_IMPORTED_MODULE_65__,
  [GUI_GENESIS_DARK]: _gui_genesisdark__WEBPACK_IMPORTED_MODULE_66__,
  [GUI_AMP_DARK]: _gui_modern_dark__WEBPACK_IMPORTED_MODULE_65__,
  [GUI_DEEP_DARK]: _gui_deep_dark__WEBPACK_IMPORTED_MODULE_67__,
  [GUI_MIDNIGHT]: _gui_midnight__WEBPACK_IMPORTED_MODULE_68__,
  [GUI_AMOLED]: _gui_amoled__WEBPACK_IMPORTED_MODULE_69__,
  [GUI_AMP_AMOLED]: _gui_amp_amoled__WEBPACK_IMPORTED_MODULE_70__,
  [GUI_HIGH_CONTRAST]: _gui_amp_high_contrast__WEBPACK_IMPORTED_MODULE_71__,
  // amp-customizable-colours addon
  [GUI_CUSTOM]: {}
};
const GuiOptions = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  [GUI_LIGHT]: {
    "id": "tw.gui.light",
    "defaultMessage": "Light"
  },
  [GUI_MODERN_LIGHT]: {
    "id": "tw.gui.modernlight",
    "defaultMessage": "PotentiaMod - Light"
  },
  [GUI_GENESIS_LIGHT]: {
    "id": "tw.gui.genesislight",
    "defaultMessage": "Genesis Light"
  },
  [GUI_AMP_LIGHT]: {
    "id": "tw.gui.amplight",
    "defaultMessage": "AmpMod light"
  },
  [GUI_MODERN_WHITE]: {
    "id": "tw.gui.astralight",
    "defaultMessage": "Astra White"
  },
  [GUI_DARK]: {
    "id": "tw.gui.dark",
    "defaultMessage": "Dark"
  },
  [GUI_MODERN_DARK]: {
    "id": "tw.gui.moderndark",
    "defaultMessage": "PotentiaMod - Dark"
  },
  [GUI_GENESIS_DARK]: {
    "id": "tw.gui.genesisdark",
    "defaultMessage": "Genesis Dark"
  },
  [GUI_AMP_DARK]: {
    "id": "tw.gui.ampdark",
    "defaultMessage": "AmpMod Dark"
  },
  [GUI_DEEP_DARK]: {
    "id": "tw.gui.astradark",
    "defaultMessage": "Astra Dark"
  },
  [GUI_MIDNIGHT]: {
    "id": "tw.gui.midnight",
    "defaultMessage": "Midnight"
  },
  [GUI_AMOLED]: {
    "id": "tw.gui.amoled",
    "defaultMessage": "Amoled"
  },
  [GUI_AMP_AMOLED]: {
    "id": "tw.gui.ampamoled",
    "defaultMessage": "AmpMod Amoled"
  },
  [GUI_HIGH_CONTRAST]: {
    "id": "tw.gui.highcontrast",
    "defaultMessage": "High Contrast"
  }
});
const GuiIcons = {
  [GUI_LIGHT]: _icons_tw_sun_svg__WEBPACK_IMPORTED_MODULE_78___default.a,
  [GUI_MODERN_LIGHT]: _icons_tw_sun_svg__WEBPACK_IMPORTED_MODULE_78___default.a,
  [GUI_GENESIS_LIGHT]: _icons_tw_sun_svg__WEBPACK_IMPORTED_MODULE_78___default.a,
  [GUI_MODERN_WHITE]: _icons_tw_sun_svg__WEBPACK_IMPORTED_MODULE_78___default.a,
  [GUI_AMP_LIGHT]: _icons_tw_sun_svg__WEBPACK_IMPORTED_MODULE_78___default.a,
  [GUI_DARK]: _icons_tw_moon_svg__WEBPACK_IMPORTED_MODULE_79___default.a,
  [GUI_MODERN_DARK]: _icons_tw_moon_svg__WEBPACK_IMPORTED_MODULE_79___default.a,
  [GUI_GENESIS_DARK]: _icons_tw_moon_svg__WEBPACK_IMPORTED_MODULE_79___default.a,
  [GUI_AMP_DARK]: _icons_tw_moon_svg__WEBPACK_IMPORTED_MODULE_79___default.a,
  [GUI_DEEP_DARK]: _icons_tw_moon_svg__WEBPACK_IMPORTED_MODULE_79___default.a,
  [GUI_MIDNIGHT]: _icons_tw_star_svg__WEBPACK_IMPORTED_MODULE_80___default.a,
  [GUI_AMOLED]: _icons_tw_star_svg__WEBPACK_IMPORTED_MODULE_80___default.a,
  [GUI_AMP_AMOLED]: _icons_tw_star_svg__WEBPACK_IMPORTED_MODULE_80___default.a,
  [GUI_HIGH_CONTRAST]: _icons_tw_palette_svg__WEBPACK_IMPORTED_MODULE_81___default.a
};
const GUI_DEFAULT = GUI_LIGHT;
const BLOCKS_THREE = 'three';
const BLOCKS_DARK = 'dark';
const BLOCKS_HIGH_CONTRAST = 'high-contrast';
const BLOCKS_COLORFUL = 'colorful';
const BLOCKS_CUSTOM = 'custom';
const BLOCKS_DEFAULT = BLOCKS_THREE;
const defaultBlockColors = _blocks_three__WEBPACK_IMPORTED_MODULE_72__["blockColors"];
const BLOCKS_MAP = {
  [BLOCKS_THREE]: {
    blocksMediaFolder: 'blocks-media/default',
    colors: _blocks_three__WEBPACK_IMPORTED_MODULE_72__["blockColors"],
    extensions: _blocks_three__WEBPACK_IMPORTED_MODULE_72__["extensions"],
    customExtensionColors: {},
    useForStage: true
  },
  [BLOCKS_HIGH_CONTRAST]: {
    blocksMediaFolder: 'blocks-media/high-contrast',
    colors: lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_73__["blockColors"], defaultBlockColors),
    extensions: _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_73__["extensions"],
    customExtensionColors: _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_73__["customExtensionColors"],
    useForStage: true
  },
  [BLOCKS_DARK]: {
    blocksMediaFolder: 'blocks-media/default',
    colors: lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, _blocks_dark__WEBPACK_IMPORTED_MODULE_74__["blockColors"], defaultBlockColors),
    extensions: _blocks_dark__WEBPACK_IMPORTED_MODULE_74__["extensions"],
    customExtensionColors: _blocks_dark__WEBPACK_IMPORTED_MODULE_74__["customExtensionColors"],
    useForStage: false
  },
  [BLOCKS_COLORFUL]: {
    blocksMediaFolder: 'blocks-media/default',
    colors: lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, _blocks_colorful__WEBPACK_IMPORTED_MODULE_75__["blockColors"], defaultBlockColors),
    extensions: _blocks_colorful__WEBPACK_IMPORTED_MODULE_75__["extensions"],
    customExtensionColors: _blocks_colorful__WEBPACK_IMPORTED_MODULE_75__["customExtensionColors"],
    useForStage: false
  },
  [BLOCKS_CUSTOM]: {
    // to be filled by editor-theme3 addon
    blocksMediaFolder: 'blocks-media/default',
    colors: _blocks_three__WEBPACK_IMPORTED_MODULE_72__["blockColors"],
    extensions: {},
    customExtensionColors: {},
    useForStage: false
  }
};
const BlockIcons = {
  [BLOCKS_THREE]: _icons_tw_blocks_three_svg__WEBPACK_IMPORTED_MODULE_82___default.a,
  [BLOCKS_HIGH_CONTRAST]: _icons_tw_blocks_high_contrast_svg__WEBPACK_IMPORTED_MODULE_83___default.a,
  [BLOCKS_DARK]: _icons_tw_blocks_dark_svg__WEBPACK_IMPORTED_MODULE_84___default.a,
  [BLOCKS_COLORFUL]: _icons_tw_blocks_colorful_svg__WEBPACK_IMPORTED_MODULE_85___default.a,
  [BLOCKS_CUSTOM]: _icons_tw_blocks_custom_svg__WEBPACK_IMPORTED_MODULE_86___default.a
};
const BlockOptions = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  [BLOCKS_THREE]: {
    "id": "tw.blockColors.three",
    "defaultMessage": "Original"
  },
  [BLOCKS_HIGH_CONTRAST]: {
    "id": "tw.blockColors.highContrast",
    "defaultMessage": "High Contrast"
  },
  [BLOCKS_DARK]: {
    "id": "tw.blockColors.dark",
    "defaultMessage": "Dark"
  },
  [BLOCKS_COLORFUL]: {
    "id": "tw.blockColors.colorful",
    "defaultMessage": "Colorful (Beta)"
  },
  [BLOCKS_CUSTOM]: {
    "id": "tw.blockColors.custom",
    "defaultMessage": "Customize in Addon Settings"
  }
});
//Copied from ScratchBox/MistWarp
const MENUBAR_ALIGN = {
  left: {
    defaultMessage: 'Left',
    description: 'Label for left-aligned menu bar',
    id: 'tw.menuBar.align.left',
    icon: _components_menu_bar_tw_align_left_svg__WEBPACK_IMPORTED_MODULE_87___default.a
  },
  center: {
    defaultMessage: 'Center',
    description: 'Label for center-aligned menu bar',
    id: 'tw.menuBar.align.center',
    icon: _components_menu_bar_tw_align_center_svg__WEBPACK_IMPORTED_MODULE_88___default.a
  },
  right: {
    defaultMessage: 'Right',
    description: 'Label for right-aligned menu bar',
    id: 'tw.menuBar.align.right',
    icon: _components_menu_bar_tw_align_right_svg__WEBPACK_IMPORTED_MODULE_89___default.a
  }
};
const MENUBAR_ALIGN_DEFAULT = 'left';
let themeObjectsCreated = 0;
class Theme {
  constructor(accent, gui, blocks, menuBarAlign, wallpaper, font) {
    // do not modify these directly
    /** @readonly */
    this.id = ++themeObjectsCreated;
    /** @readonly */
    this.accent = Object.prototype.hasOwnProperty.call(ACCENT_MAP, accent) ? accent : ACCENT_DEFAULT;
    /** @readonly */
    this.gui = Object.prototype.hasOwnProperty.call(GUI_MAP, gui) ? gui : GUI_DEFAULT;
    /** @readonly */
    this.blocks = Object.prototype.hasOwnProperty.call(BLOCKS_MAP, blocks) ? blocks : BLOCKS_DEFAULT;
    /** @readonly */
    this.menuBarAlign = Object.keys(MENUBAR_ALIGN).includes(menuBarAlign) ? menuBarAlign : MENUBAR_ALIGN_DEFAULT;

    /** @readonly */
    this.wallpaper = wallpaper || {
      url: null,
      opaque: 0.6
    };
    /** @readonly */
    this.font = font || {
      font: null
    };
  }
  set(what, to) {
    if (what === 'accent') {
      return new Theme(to, this.gui, this.blocks, this.menuBarAlign, this.wallpaper, this.font);
    } else if (what === 'gui') {
      return new Theme(this.accent, to, this.blocks, this.wallpaper, this.menuBarAlign, this.font);
    } else if (what === 'blocks') {
      return new Theme(this.accent, this.gui, to, this.wallpaper, this.menuBarAlign, this.font);
    } else if (what === 'wallpaper') {
      return new Theme(this.accent, this.gui, this.blocks, to, this.menuBarAlign, this.font);
    } else if (what === 'menuBarAlign') {
      return new Theme(this.accent, this.gui, this.blocks, this.wallpaper, to, this.font);
    } else if (what === 'font') {
      return new Theme(this.accent, this.gui, this.blocks, this.wallpaper, this.menuBarAlign, to);
    }
    throw new Error("Unknown theme property: ".concat(what));
  }
  getBlocksMediaFolder() {
    return BLOCKS_MAP[this.blocks].blocksMediaFolder;
  }
  getGuiColors() {
    return lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, this.gui === "custom" ? null : Object.hasOwn(this.accent, 'primaryColor') ? ACCENT_MAP[ACCENT_CUSTOM].getGuiColors(this.accent.primaryColor, this.accent.secondaryColor, this.accent.tertiaryColor, this.accent.gradient) : ACCENT_MAP[this.accent].guiColors, GUI_MAP[this.gui].guiColors, _gui_light__WEBPACK_IMPORTED_MODULE_58__["guiColors"]);
  }
  getBlockColors() {
    let blockColors = lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, Object.hasOwn(this.accent, 'primaryColor') ? ACCENT_MAP[ACCENT_CUSTOM].getBlockColors(this.accent.primaryColor, this.accent.secondaryColor) : ACCENT_MAP[this.accent].blockColors, GUI_MAP[this.gui].blockColors, BLOCKS_MAP[this.blocks].colors);
    if (this.wallpaper.url !== null) {
      blockColors = lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({
        workspace: blockColors.workspace + Math.round(this.wallpaper.opaque * 255).toString(16).padStart(2, 0)
      }, blockColors);
    }
    return blockColors;
  }
  getExtensions() {
    return BLOCKS_MAP[this.blocks].extensions;
  }
  isDark() {
    return this.getGuiColors()['color-scheme'] === 'dark';
  }
  getStageBlockColors() {
    if (BLOCKS_MAP[this.blocks].useForStage) {
      return this.getBlockColors();
    }
    return Theme.light.getBlockColors();
  }
  getCustomExtensionColors() {
    return BLOCKS_MAP[this.blocks].customExtensionColors;
  }
}
_Theme = Theme;
_defineProperty(Theme, "light", new _Theme(ACCENT_DEFAULT, GUI_LIGHT, BLOCKS_DEFAULT, null, null));
_defineProperty(Theme, "dark", new _Theme(ACCENT_DEFAULT, GUI_DARK, BLOCKS_DEFAULT, null, null));
_defineProperty(Theme, "highContrast", new _Theme(ACCENT_DEFAULT, GUI_DEFAULT, BLOCKS_HIGH_CONTRAST, null, null));


/***/ }),

/***/ "./src/lib/themes/themePersistance.js":
/*!********************************************!*\
  !*** ./src/lib/themes/themePersistance.js ***!
  \********************************************/
/*! exports provided: onSystemPreferenceChange, detectTheme, persistTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSystemPreferenceChange", function() { return onSystemPreferenceChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectTheme", function() { return detectTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistTheme", function() { return persistTheme; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/lib/themes/index.js");
/* harmony import */ var _guiHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guiHelpers.js */ "./src/lib/themes/guiHelpers.js");

const matchMedia = query => window.matchMedia ? window.matchMedia(query) : null;
const PREFERS_HIGH_CONTRAST_QUERY = matchMedia('(prefers-contrast: more)');
const PREFERS_DARK_QUERY = matchMedia('(prefers-color-scheme: dark)');

const STORAGE_KEY = 'tw:theme';

/**
 * @returns {Theme} detected theme
 */
const systemPreferencesTheme = () => {
  if (PREFERS_HIGH_CONTRAST_QUERY && PREFERS_HIGH_CONTRAST_QUERY.matches) {
    return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].highContrast;
  }
  if (PREFERS_DARK_QUERY && PREFERS_DARK_QUERY.matches) {
    return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].dark;
  }
  return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].light;
};

/**
 * @param {function} onChange callback; no guarantees about arguments
 * @returns {function} call to remove event listeners to prevent memory leak
 */
const onSystemPreferenceChange = onChange => {
  if (!PREFERS_HIGH_CONTRAST_QUERY || !PREFERS_DARK_QUERY ||
  // Some old browsers don't support addEventListener on media queries
  !PREFERS_HIGH_CONTRAST_QUERY.addEventListener || !PREFERS_DARK_QUERY.addEventListener) {
    return () => {};
  }
  PREFERS_HIGH_CONTRAST_QUERY.addEventListener('change', onChange);
  PREFERS_DARK_QUERY.addEventListener('change', onChange);
  return () => {
    PREFERS_HIGH_CONTRAST_QUERY.removeEventListener('change', onChange);
    PREFERS_DARK_QUERY.removeEventListener('change', onChange);
  };
};

/**
 * @returns {Theme} the theme
 */
const detectTheme = () => {
  const systemPreferences = systemPreferencesTheme();
  try {
    const local = localStorage.getItem(STORAGE_KEY);

    // Migrate legacy preferences
    if (local === 'dark') {
      return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].dark;
    }
    if (local === 'light') {
      return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].light;
    }
    const parsed = JSON.parse(local);
    // Any invalid values in storage will be handled by Theme itself
    const theme = new ___WEBPACK_IMPORTED_MODULE_0__["Theme"](parsed.accent || systemPreferences.accent, parsed.gui || systemPreferences.gui, parsed.blocks || systemPreferences.blocks, parsed.menuBarAlign || systemPreferences.menuBarAlign, parsed.wallpaper || null, parsed.font || null);
    return theme;
  } catch (e) {
    // ignore
  }
  return systemPreferences;
};

/**
 * @param {Theme} theme the theme
 */
const persistTheme = theme => {
  const systemPreferences = systemPreferencesTheme();
  const nonDefaultSettings = {};
  if (theme.accent !== systemPreferences.accent) {
    nonDefaultSettings.accent = theme.accent;
  }
  if (theme.gui !== systemPreferences.gui) {
    nonDefaultSettings.gui = theme.gui;
  }
  // custom blocks are managed by addon at runtime, don't save here
  if (theme.blocks !== systemPreferences.blocks && theme.blocks !== ___WEBPACK_IMPORTED_MODULE_0__["BLOCKS_CUSTOM"]) {
    nonDefaultSettings.blocks = theme.blocks;
  }
  if (theme.wallpaper.url !== null) {
    nonDefaultSettings.wallpaper = theme.wallpaper;
  }
  if (theme.font.font !== null) {
    nonDefaultSettings.font = theme.font;
  }
  if (Object.keys(nonDefaultSettings).length === 0) {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // ignore
    }
  } else {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nonDefaultSettings));
    } catch (e) {
      // ignore
    }
  }
};


/***/ }),

/***/ "./src/lib/tw-color-utils.js":
/*!***********************************!*\
  !*** ./src/lib/tw-color-utils.js ***!
  \***********************************/
/*! exports provided: hex2hsv, hsv2hex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex2hsv", function() { return hex2hsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsv2hex", function() { return hsv2hex; });
/*
    Parts of this file are from https://github.com/Qix-/color-convert/blob/6b7dee5a168f76bf42c084fefa7bbe1a0941ad7e/conversions.js

    Copyright (c) 2011-2016 Heather Arthur <fayearthur@gmail.com>.
    Copyright (c) 2016-2021 Josh Junon <josh@junon.me>.

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * @param {string} hex hex color code like #abc123
 * @returns {number[]} [r, g, b] in range [0-255]. Alpha channel is ignored.
 */
const hex2rgb = hex => {
  const parsed = Number.parseInt(hex.substring(1), 16);
  return [parsed >> 16 & 255, parsed >> 8 & 255, parsed & 255];
};

/**
 * @param {number[]} rgb [r, g, b] in range [0-255]
 * @returns {string} hex color code like #123abc
 */
const rgb2hex = rgb => {
  const number = rgb[0] << 16 | rgb[1] << 8 | rgb[2];
  return "#".concat(number.toString(16).padStart(6, '0'));
};

/**
 * @param {number[]} rgb [r, g, b] in range [0-255]
 * @returns {number[]} [h, s, v] in range [0-360] for h, [0-100] for s, v
 */
const rgb2hsv = rgb => {
  let rdif;
  let gdif;
  let bdif;
  let h;
  let s;
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const v = Math.max(r, g, b);
  const diff = v - Math.min(r, g, b);
  const diffc = c => (v - c) / 6 / diff + 1 / 2;
  if (diff === 0) {
    h = 0;
    s = 0;
  } else {
    s = diff / v;
    rdif = diffc(r);
    gdif = diffc(g);
    bdif = diffc(b);
    if (r === v) {
      h = bdif - gdif;
    } else if (g === v) {
      h = 1 / 3 + rdif - bdif;
    } else if (b === v) {
      h = 2 / 3 + gdif - rdif;
    }
    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }
  return [h * 360, s * 100, v * 100];
};

/**
 * @param {number[]} hsv [h, s, v] in range [0-360] for h, [0-100] for s, v
 * @returns {number[]} [r, g, b] in range [0-255]
 */
const hsv2rgb = hsv => {
  const h = hsv[0] / 60;
  const s = hsv[1] / 100;
  let v = hsv[2] / 100;
  const hi = Math.floor(h) % 6;
  const f = h - Math.floor(h);
  const p = 255 * v * (1 - s);
  const q = 255 * v * (1 - s * f);
  const t = 255 * v * (1 - s * (1 - f));
  v *= 255;
  switch (hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
};
const hex2hsv = hex => rgb2hsv(hex2rgb(hex));
const hsv2hex = hsv => rgb2hex(hsv2rgb(hsv));


/***/ }),

/***/ "./src/playground/app-target.js":
/*!**************************************!*\
  !*** ./src/playground/app-target.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);


const appTarget = document.getElementById('app');

// Remove everything from the target to fix macOS Safari "Save Page As",
while (appTarget.firstChild) {
  appTarget.removeChild(appTarget.firstChild);
}
Object(react_modal__WEBPACK_IMPORTED_MODULE_1__["setAppElement"])(appTarget);
const render = children => {
  react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render(children, appTarget);
  if (window.SplashEnd) {
    window.SplashEnd();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (render);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** ../locale-data/index.js (ignored) ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!*******************************!*\
  !*** ./lib/locales (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** ./lib/locales (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=404~addon-settings~credits~embed~index~pot-desktop.js.map