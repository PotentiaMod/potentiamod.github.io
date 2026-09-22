var GUI =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"pot-desktop": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"iframe-extension-worker":"iframe-extension-worker"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/playground/pot-desktop/pot-desktop.jsx","vendors~404~addon-settings~credits~editor~embed~fullscreen~index~player~pot-desktop","vendors~404~credits~editor~embed~fullscreen~index~player~pot-desktop","404~addon-settings~credits~editor~embed~fullscreen~index~player~pot-desktop","404~credits~index~pot-desktop"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/pot-desktop/pot-desktop.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/pot-desktop/pot-desktop.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background: var(--page-background);\n    color: var(--page-foreground);\n}\n\na {\n    color: var(--link-color);\n}\n\nh1 {\n    padding: 20px 0;\n    text-align: center;\n    margin-bottom: 30px;\n}\n\n.pot-desktop_main_1JXnk section {\n    max-width: 900px;\n    margin: auto;\n    margin-bottom: 30px;\n}\n\n.pot-desktop_header-container_sIgDH {\n    background-color: var(--looks-secondary);\n    padding: 20px 0;\n    text-align: center;\n    margin-bottom: 30px;\n}\n\n.pot-desktop_header-container-trans_39DKD {\n    padding: 20px 0;\n    text-align: center;\n    margin-bottom: 30px;\n}\n\n.pot-desktop_header-text_3sdYK {\n}\n\n.pot-desktop_download-list_2Sz0s {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n}\n\n.pot-desktop_screenshot_ka__5 {\n    filter: drop-shadow(0 0 1rem var(--ui-black-transparent));\n    border-radius: 0.5rem;\n    background-color: var(--page-background);\n    width: 100%;\n}\n\n.pot-desktop_download-button_1bpkK {\n\tfont-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\tborder: 1px solid var(--looks-secondary);\n    display: inline-flex;\n\tfont-weight: 600;\n    align-items: center;\n    gap: 0.6rem;\n    background: var(--looks-secondary);\n    color: var(--ui-white);\n    padding: 0.9rem 1.75rem;\n    border-radius: 0.5rem;\n    text-decoration: none;\n    box-shadow: 0 4px 14px var(--looks-transparent);\n}\n\n.pot-desktop_download-button_1bpkK:hover {\n    text-decoration: none;\n    box-shadow: 0 6px 18px var(--looks-transparent);\n}\n\n.pot-desktop_page_1B27_ {\n    max-width: 62rem;\n    margin: 0 auto;\n    text-align: center;\n}\n\n.pot-desktop_hero_1zAD0 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 0 auto 1.5rem;\n    max-width: 34rem;\n}\n\n.pot-desktop_hero-icon_hPe-A {\n    width: 4rem;\n    height: 4rem;\n    border-radius: 1rem;\n    box-shadow: 0 4px 16px var(--shadow);\n    margin-bottom: 0.75rem;\n}\n\n.pot-desktop_tagline_3asK4 {\n    margin: 0.3rem 0 0;\n    color: var(--text-primary);\n    opacity: 0.75;\n}\n\n.pot-desktop_card_3IHmR {\n    max-width: 34rem;\n    margin: 0 auto 1.25rem;\n    padding: 2rem;\n    border-radius: 1rem;\n    border: 1px solid var(--looks-transparent);\n    background: var(--looks-light-transparent);\n    text-align: center;\n}\n\n.pot-desktop_download-area_1BDG2 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.pot-desktop_download-icon_sij_b {\n    flex-shrink: 0;\n}\n\n.pot-desktop_download-button-text_nXisa {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    line-height: 1.3;\n}\n\n.pot-desktop_download-label_2NuQx {\n    font-weight: bold;\n    font-size: 1.05rem;\n}\n\n.pot-desktop_download-size_qKmpl {\n    font-size: 0.75rem;\n    opacity: 0.85;\n}\n\n.pot-desktop_mac-prompt_3drrk {\n    font-weight: bold;\n    margin-bottom: 0.9rem;\n}\n\n.pot-desktop_mac-choices_1yFt_ {\n    display: flex;\n    gap: 0.75rem;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.pot-desktop_unknown-platform_1AkTU {\n    color: var(--text-primary);\n    opacity: 0.75;\n}\n\n.pot-desktop_version_1iMDX {\n    margin-top: 1.25rem;\n    display: inline-block;\n    font-size: 0.75rem;\n    font-weight: bold;\n    color: var(--looks-secondary);\n    background: var(--looks-light-transparent);\n    border: 1px solid var(--looks-transparent);\n    padding: 0.25rem 0.75rem;\n    border-radius: 999px;\n}\n\n.pot-desktop_loading-row_CPmlU {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.75rem;\n    color: var(--text-primary);\n    opacity: 0.8;\n}\n\n.pot-desktop_error-box_2ccLO {\n    color: var(--error-primary);\n    background: var(--error-transparent);\n    border-radius: 0.5rem;\n    padding: 0.75rem 1rem;\n    text-align: left;\n}\n\n.pot-desktop_error-title_1ULqV {\n    font-weight: bold;\n    margin-bottom: 0.25rem;\n}\n\n.pot-desktop_screenshots_3sVXs {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1rem;\n    margin-bottom: 1.5rem;\n}\n\n.pot-desktop_screenshot_ka__5 {\n    width: 100%;\n    height: auto;\n    display: block;\n    border-radius: 0.6rem;\n    border: 1px solid var(--ui-black-transparent);\n    box-shadow: 0 4px 16px var(--shadow);\n}\n\n@media (max-width: 40rem) {\n    .pot-desktop_screenshots_3sVXs {\n        grid-template-columns: 1fr;\n    }\n}\n\n.pot-desktop_all-downloads-link_1Rkqw {\n    display: inline-block;\n    font-size: 0.85rem;\n    font-weight: bold;\n}", ""]);

// exports
exports.locals = {
	"main": "pot-desktop_main_1JXnk",
	"header-container": "pot-desktop_header-container_sIgDH",
	"headerContainer": "pot-desktop_header-container_sIgDH",
	"header-container-trans": "pot-desktop_header-container-trans_39DKD",
	"headerContainerTrans": "pot-desktop_header-container-trans_39DKD",
	"header-text": "pot-desktop_header-text_3sdYK",
	"headerText": "pot-desktop_header-text_3sdYK",
	"download-list": "pot-desktop_download-list_2Sz0s",
	"downloadList": "pot-desktop_download-list_2Sz0s",
	"screenshot": "pot-desktop_screenshot_ka__5",
	"download-button": "pot-desktop_download-button_1bpkK",
	"downloadButton": "pot-desktop_download-button_1bpkK",
	"page": "pot-desktop_page_1B27_",
	"hero": "pot-desktop_hero_1zAD0",
	"hero-icon": "pot-desktop_hero-icon_hPe-A",
	"heroIcon": "pot-desktop_hero-icon_hPe-A",
	"tagline": "pot-desktop_tagline_3asK4",
	"card": "pot-desktop_card_3IHmR",
	"download-area": "pot-desktop_download-area_1BDG2",
	"downloadArea": "pot-desktop_download-area_1BDG2",
	"download-icon": "pot-desktop_download-icon_sij_b",
	"downloadIcon": "pot-desktop_download-icon_sij_b",
	"download-button-text": "pot-desktop_download-button-text_nXisa",
	"downloadButtonText": "pot-desktop_download-button-text_nXisa",
	"download-label": "pot-desktop_download-label_2NuQx",
	"downloadLabel": "pot-desktop_download-label_2NuQx",
	"download-size": "pot-desktop_download-size_qKmpl",
	"downloadSize": "pot-desktop_download-size_qKmpl",
	"mac-prompt": "pot-desktop_mac-prompt_3drrk",
	"macPrompt": "pot-desktop_mac-prompt_3drrk",
	"mac-choices": "pot-desktop_mac-choices_1yFt_",
	"macChoices": "pot-desktop_mac-choices_1yFt_",
	"unknown-platform": "pot-desktop_unknown-platform_1AkTU",
	"unknownPlatform": "pot-desktop_unknown-platform_1AkTU",
	"version": "pot-desktop_version_1iMDX",
	"loading-row": "pot-desktop_loading-row_CPmlU",
	"loadingRow": "pot-desktop_loading-row_CPmlU",
	"error-box": "pot-desktop_error-box_2ccLO",
	"errorBox": "pot-desktop_error-box_2ccLO",
	"error-title": "pot-desktop_error-title_1ULqV",
	"errorTitle": "pot-desktop_error-title_1ULqV",
	"screenshots": "pot-desktop_screenshots_3sVXs",
	"all-downloads-link": "pot-desktop_all-downloads-link_1Rkqw",
	"allDownloadsLink": "pot-desktop_all-downloads-link_1Rkqw"
};

/***/ }),

/***/ "./src/playground/pot-desktop/pot-desktop.css":
/*!****************************************************!*\
  !*** ./src/playground/pot-desktop/pot-desktop.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./pot-desktop.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/pot-desktop/pot-desktop.css");

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

/***/ "./src/playground/pot-desktop/pot-desktop.jsx":
/*!****************************************************!*\
  !*** ./src/playground/pot-desktop/pot-desktop.jsx ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-target */ "./src/playground/app-target.js");
/* harmony import */ var _pot_desktop_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pot-desktop.css */ "./src/playground/pot-desktop/pot-desktop.css");
/* harmony import */ var _pot_desktop_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pot_desktop_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_brand_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/brand.js */ "./src/lib/brand.js");
/* harmony import */ var _lib_brand_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_brand_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/version.js */ "./src/lib/version.js");
/* harmony import */ var _lib_version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_version_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_themes_guiHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/themes/guiHelpers */ "./src/lib/themes/guiHelpers.js");
/* harmony import */ var _lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/themes/themePersistance */ "./src/lib/themes/themePersistance.js");
/* harmony import */ var _components_potentia_header_header_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/potentia-header/header.jsx */ "./src/components/potentia-header/header.jsx");
/* harmony import */ var _components_potentia_footer_footer_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/potentia-footer/footer.jsx */ "./src/components/potentia-footer/footer.jsx");
/* harmony import */ var _components_button_button_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/button/button.jsx */ "./src/components/button/button.jsx");
/* harmony import */ var _screencap_light_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./screencap-light.png */ "./src/playground/pot-desktop/screencap-light.png");
/* harmony import */ var _screencap_light_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_screencap_light_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _screencap_dark_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./screencap-dark.png */ "./src/playground/pot-desktop/screencap-dark.png");
/* harmony import */ var _screencap_dark_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_screencap_dark_png__WEBPACK_IMPORTED_MODULE_12__);












/* eslint-disable react/jsx-no-literals */

const theme = Object(_lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_7__["detectTheme"])();
Object(_lib_themes_guiHelpers__WEBPACK_IMPORTED_MODULE_6__["applyGuiColors"])(theme);
document.documentElement.lang = 'en';


const DESKTOP_REPO_URL = 'https://github.com/PotentiaMod/desktop/';
const ALL_RELEASES_URL = "https://github.com/PotentiaMod/desktop/releases#release-v.".concat(_lib_version_js__WEBPACK_IMPORTED_MODULE_5__["DESKTOP_VERSION"]);
const DESKTOP_RELEASE_URL = "https://github.com/PotentiaMod/desktop/releases/download/v.".concat(_lib_version_js__WEBPACK_IMPORTED_MODULE_5__["DESKTOP_VERSION"], "/");
const openFile = file => {
  window.open("".concat(DESKTOP_RELEASE_URL, "/").concat(file), '_blank', 'noreferrer');
};

// Android's user agent also contains "Linux", so it has to be ruled out first.
const detectPlatform = () => {
  if (typeof navigator === 'undefined') {
    return 'unknown';
  }
  const ua = navigator.userAgent || '';
  if (/android/i.test(ua)) {
    return 'unknown';
  }
  if (/windows/i.test(ua)) {
    return 'windows';
  }
  if (/linux/i.test(ua)) {
    return 'linux';
  }
  return 'unknown';
};
const Desktop = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
  className: _pot_desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.main
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_potentia_header_header_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _lib_brand_js__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " Desktop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _lib_brand_js__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " as a desktop app. ", _lib_brand_js__WEBPACK_IMPORTED_MODULE_4__["MOTTO"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  className: _pot_desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.screenshot,
  loading: "lazy",
  src: theme.isDark() ? _screencap_dark_png__WEBPACK_IMPORTED_MODULE_12___default.a : _screencap_light_png__WEBPACK_IMPORTED_MODULE_11___default.a
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Install ", _lib_brand_js__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " Desktop (v", _lib_version_js__WEBPACK_IMPORTED_MODULE_5__["DESKTOP_VERSION"], "):")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Windows 10 and later"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If a Windows SmartScreen alert appears, click \"More info\" then \"Run anyways\"."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _pot_desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.downloadList
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button_button_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
  className: _pot_desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.downloadButton,
  onClick: () => openFile("PotentiaMod-Setup-".concat(_lib_version_js__WEBPACK_IMPORTED_MODULE_5__["DESKTOP_VERSION"], "-x64.exe"))
}, "Download installer (64-bit, recommended)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button_button_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
  className: _pot_desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.downloadButton,
  onClick: () => openFile("PotentiaMod.Portable.".concat(_lib_version_js__WEBPACK_IMPORTED_MODULE_5__["DESKTOP_VERSION"], ".x64.exe"))
}, "Download portable (64-bit)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Linux"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _pot_desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.downloadList
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button_button_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
  className: _pot_desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.downloadButton,
  onClick: () => openFile("PotentiaMod-linux-x86_64-".concat(_lib_version_js__WEBPACK_IMPORTED_MODULE_5__["DESKTOP_VERSION"], ".AppImage"))
}, "Download .AppImage"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: _pot_desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.allDownloadsLink,
  href: ALL_RELEASES_URL,
  target: "_blank",
  rel: "noreferrer"
}, 'View all download options on GitHub')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "This page is based on Dash and Nyx IDE's Desktop page.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_potentia_footer_footer_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], null));
Object(_app_target__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Desktop, null));

/***/ }),

/***/ "./src/playground/pot-desktop/screencap-dark.png":
/*!*******************************************************!*\
  !*** ./src/playground/pot-desktop/screencap-dark.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/b42ec67d24100b6530833f7b543a6169.png";

/***/ }),

/***/ "./src/playground/pot-desktop/screencap-light.png":
/*!********************************************************!*\
  !*** ./src/playground/pot-desktop/screencap-light.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/bfc6b7579394e04a226cb8678d625ac8.png";

/***/ })

/******/ });
//# sourceMappingURL=pot-desktop.js.map