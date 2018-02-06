require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		7: 0
/******/ 	};
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
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./chunks/" + ({"0":"privacy","1":"about","2":"register","3":"not-found","4":"login","5":"contact","6":"admin"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(30);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(31);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(prefix + id);
      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && typeof btoa === 'function') {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__config__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


var sequelize = new __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a(__WEBPACK_IMPORTED_MODULE_1__config___default.a.databaseUrl, {
  define: {
    freezeTableName: true
  }
});
/* harmony default export */ __webpack_exports__["a"] = (sequelize);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */
if (false) {
  throw new Error('Do not import `config.js` from inside the client-side code.');
}

module.exports = {
  // Node.js app
  port: process.env.PORT || 3000,
  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl: process.env.API_CLIENT_URL || '',
    // API URL to be used in the server-side code
    serverUrl: process.env.API_SERVER_URL || "http://localhost:".concat(process.env.PORT || 3000)
  },
  // Database
  databaseUrl: process.env.DATABASE_URL || 'sqlite:database.sqlite',
  // Web analytics
  analytics: {
    // https://analytics.google.com/
    googleTrackingId: process.env.GOOGLE_TRACKING_ID // UA-XXXXX-X

  },
  // Authentication
  auth: {
    jwt: {
      secret: process.env.JWT_SECRET || 'React Starter Kit'
    },
    // https://developers.facebook.com/
    facebook: {
      id: process.env.FACEBOOK_APP_ID || '186244551745631',
      secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
    },
    // https://cloud.google.com/console/project
    google: {
      id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
      secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
    },
    // https://apps.twitter.com/
    twitter: {
      key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
      secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(29);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./ErrorPage.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./ErrorPage.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sequelize__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UserLogin__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserClaim__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UserProfile__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__User__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__UserLogin__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__UserClaim__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__UserProfile__["a"]; });
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */].hasMany(__WEBPACK_IMPORTED_MODULE_2__UserLogin__["a" /* default */], {
  foreignKey: 'userId',
  as: 'logins',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});
__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */].hasMany(__WEBPACK_IMPORTED_MODULE_3__UserClaim__["a" /* default */], {
  foreignKey: 'userId',
  as: 'claims',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});
__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */].hasOne(__WEBPACK_IMPORTED_MODULE_4__UserProfile__["a" /* default */], {
  foreignKey: 'userId',
  as: 'profile',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

function sync() {
  return __WEBPACK_IMPORTED_MODULE_0__sequelize__["a" /* default */].sync.apply(__WEBPACK_IMPORTED_MODULE_0__sequelize__["a" /* default */], arguments);
}

/* harmony default export */ __webpack_exports__["e"] = ({
  sync: sync
});


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_normalize_css__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Layout_css__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Layout_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Chart__ = __webpack_require__(51);
var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

/**
 * 
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

 // external-global styles must be imported in your JS.





var _ref = _jsx("div", {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__Chart__["a" /* default */], {}));

var Layout = function Layout() {
  return _ref;
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2_normalize_css___default.a, __WEBPACK_IMPORTED_MODULE_3__Layout_css___default.a)(Layout));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(14);
module.exports = __webpack_require__(15);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_jwt__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_graphql__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_express_graphql__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_express_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_express_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jsonwebtoken__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_node_fetch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom_server__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_pretty_error__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_pretty_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_pretty_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_App__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Html__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__routes_error_ErrorPage_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__routes_error_ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__routes_error_ErrorPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__createFetch__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__passport__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__data_models__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__data_schema__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__assets_json__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__assets_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__assets_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__config__);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





















 // eslint-disable-line import/no-unresolved


var app = __WEBPACK_IMPORTED_MODULE_1_express___default()(); //
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------

global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all'; //
// Register Node.js middleware
// -----------------------------------------------------------------------------

app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static(__WEBPACK_IMPORTED_MODULE_0_path___default.a.resolve(__dirname, 'public')));
app.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());
app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({
  extended: true
}));
app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.json()); //
// Authentication
// -----------------------------------------------------------------------------

app.use(__WEBPACK_IMPORTED_MODULE_4_express_jwt___default()({
  secret: __WEBPACK_IMPORTED_MODULE_22__config___default.a.auth.jwt.secret,
  credentialsRequired: false,
  getToken: function getToken(req) {
    return req.cookies.id_token;
  }
})); // Error handler for express-jwt

app.use(function (err, req, res, next) {
  // eslint-disable-line no-unused-vars
  if (err instanceof __WEBPACK_IMPORTED_MODULE_4_express_jwt__["UnauthorizedError"]) {
    console.error('[express-jwt-error]', req.cookies.id_token); // `clearCookie`, otherwise user can't use web-app until cookie expires

    res.clearCookie('id_token');
  }

  next(err);
});
app.use(__WEBPACK_IMPORTED_MODULE_17__passport__["a" /* default */].initialize());

if (false) {
  app.enable('trust proxy');
}

app.get('/login/facebook', __WEBPACK_IMPORTED_MODULE_17__passport__["a" /* default */].authenticate('facebook', {
  scope: ['email', 'user_location'],
  session: false
}));
app.get('/login/facebook/return', __WEBPACK_IMPORTED_MODULE_17__passport__["a" /* default */].authenticate('facebook', {
  failureRedirect: '/login',
  session: false
}), function (req, res) {
  var expiresIn = 60 * 60 * 24 * 180; // 180 days

  var token = __WEBPACK_IMPORTED_MODULE_7_jsonwebtoken___default.a.sign(req.user, __WEBPACK_IMPORTED_MODULE_22__config___default.a.auth.jwt.secret, {
    expiresIn: expiresIn
  });
  res.cookie('id_token', token, {
    maxAge: 1000 * expiresIn,
    httpOnly: true
  });
  res.redirect('/');
}); //
// Register API middleware
// -----------------------------------------------------------------------------

app.use('/graphql', __WEBPACK_IMPORTED_MODULE_6_express_graphql___default()(function (req) {
  return {
    schema: __WEBPACK_IMPORTED_MODULE_20__data_schema__["a" /* default */],
    graphiql: false,
    rootValue: {
      request: req
    },
    pretty: false
  };
})); //
// Register server-side rendering middleware
// -----------------------------------------------------------------------------

app.get('*',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var css, insertCss, fetch, context, route, data, _data$scripts, html;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            css = new Set(); // Enables critical path CSS rendering
            // https://github.com/kriasoft/isomorphic-style-loader

            insertCss = function insertCss() {
              for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
                styles[_key] = arguments[_key];
              }

              // eslint-disable-next-line no-underscore-dangle
              styles.forEach(function (style) {
                return css.add(style._getCss());
              });
            }; // Universal HTTP client


            fetch = Object(__WEBPACK_IMPORTED_MODULE_16__createFetch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_8_node_fetch___default.a, {
              baseUrl: __WEBPACK_IMPORTED_MODULE_22__config___default.a.api.serverUrl,
              cookie: req.headers.cookie,
              schema: __WEBPACK_IMPORTED_MODULE_20__data_schema__["a" /* default */],
              graphql: __WEBPACK_IMPORTED_MODULE_5_graphql__["graphql"]
            }); // Global (context) variables that can be easily accessed from any React component
            // https://facebook.github.io/react/docs/context.html

            context = {
              insertCss: insertCss,
              fetch: fetch,
              // The twins below are wild, be careful!
              pathname: req.path,
              query: req.query
            };
            _context.next = 7;
            return __WEBPACK_IMPORTED_MODULE_18__router__["a" /* default */].resolve(context);

          case 7:
            route = _context.sent;

            if (!route.redirect) {
              _context.next = 11;
              break;
            }

            res.redirect(route.status || 302, route.redirect);
            return _context.abrupt("return");

          case 11:
            data = _extends({}, route);
            data.children = __WEBPACK_IMPORTED_MODULE_10_react_dom_server___default.a.renderToString(_jsx(__WEBPACK_IMPORTED_MODULE_12__components_App__["a" /* default */], {
              context: context
            }, void 0, route.component));
            data.styles = [{
              id: 'css',
              cssText: _toConsumableArray(css).join('')
            }];
            data.scripts = [__WEBPACK_IMPORTED_MODULE_21__assets_json___default.a.vendor.js];

            if (route.chunks) {
              (_data$scripts = data.scripts).push.apply(_data$scripts, _toConsumableArray(route.chunks.map(function (chunk) {
                return __WEBPACK_IMPORTED_MODULE_21__assets_json___default.a[chunk].js;
              })));
            }

            data.scripts.push(__WEBPACK_IMPORTED_MODULE_21__assets_json___default.a.client.js);
            data.app = {
              apiUrl: __WEBPACK_IMPORTED_MODULE_22__config___default.a.api.clientUrl
            };
            html = __WEBPACK_IMPORTED_MODULE_10_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_Html__["a" /* default */], data));
            res.status(route.status || 200);
            res.send("<!doctype html>".concat(html));
            _context.next = 26;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 23]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}()); //
// Error handling
// -----------------------------------------------------------------------------

var pe = new __WEBPACK_IMPORTED_MODULE_11_pretty_error___default.a();
pe.skipNodeFiles();
pe.skipPackage('express'); // eslint-disable-next-line no-unused-vars

app.use(function (err, req, res, next) {
  console.error(pe.render(err));
  var html = __WEBPACK_IMPORTED_MODULE_10_react_dom_server___default.a.renderToStaticMarkup(_jsx(__WEBPACK_IMPORTED_MODULE_13__components_Html__["a" /* default */], {
    title: "Internal Server Error",
    description: err.message,
    styles: [{
      id: 'css',
      cssText: __WEBPACK_IMPORTED_MODULE_15__routes_error_ErrorPage_css___default.a._getCss()
    }] // eslint-disable-line no-underscore-dangle

  }, void 0, __WEBPACK_IMPORTED_MODULE_10_react_dom_server___default.a.renderToString(_jsx(__WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage__["a" /* ErrorPageWithoutStyle */], {
    error: err
  }))));
  res.status(err.status || 500);
  res.send("<!doctype html>".concat(html));
}); //
// Launch the server
// -----------------------------------------------------------------------------

var promise = __WEBPACK_IMPORTED_MODULE_19__data_models__["e" /* default */].sync().catch(function (err) {
  return console.error(err.stack);
});

if (true) {
  promise.then(function () {
    app.listen(__WEBPACK_IMPORTED_MODULE_22__config___default.a.port, function () {
      console.info("The server is running at http://localhost:".concat(__WEBPACK_IMPORTED_MODULE_22__config___default.a.port, "/"));
    });
  });
} //
// Hot Module Replacement
// -----------------------------------------------------------------------------


if (false) {
  app.hot = module.hot;
  module.hot.accept('./router');
}

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


var ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  // Universal HTTP client
  fetch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  pathname: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  query: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */

var App =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(App, _React$PureComponent);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return this.props.context;
    }
  }, {
    key: "render",
    value: function render() {
      // NOTE: If you need to add or modify header, footer etc. of the app,
      // please do that inside the Layout component.
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children);
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

Object.defineProperty(App, "childContextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ContextType
});
/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




/* eslint-disable react/no-danger */

var _ref = _jsx("meta", {
  charSet: "utf-8"
});

var _ref2 = _jsx("meta", {
  httpEquiv: "x-ua-compatible",
  content: "ie=edge"
});

var _ref3 = _jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1"
});

var _ref4 = _jsx("link", {
  rel: "manifest",
  href: "/site.webmanifest"
});

var _ref5 = _jsx("link", {
  rel: "apple-touch-icon",
  href: "/icon.png"
});

var _ref6 = _jsx("script", {
  src: "https://www.google-analytics.com/analytics.js",
  async: true,
  defer: true
});

var Html =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Html, _React$Component);

  function Html() {
    _classCallCheck(this, Html);

    return _possibleConstructorReturn(this, (Html.__proto__ || Object.getPrototypeOf(Html)).apply(this, arguments));
  }

  _createClass(Html, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          description = _props.description,
          styles = _props.styles,
          scripts = _props.scripts,
          app = _props.app,
          children = _props.children;
      return _jsx("html", {
        className: "no-js",
        lang: "en"
      }, void 0, _jsx("head", {}, void 0, _ref, _ref2, _jsx("title", {}, void 0, title), _jsx("meta", {
        name: "description",
        content: description
      }), _ref3, scripts.map(function (script) {
        return _jsx("link", {
          rel: "preload",
          href: script,
          as: "script"
        }, script);
      }), _ref4, _ref5, styles.map(function (style) {
        return _jsx("style", {
          id: style.id,
          dangerouslySetInnerHTML: {
            __html: style.cssText
          }
        }, style.id);
      })), _jsx("body", {}, void 0, _jsx("div", {
        id: "app",
        dangerouslySetInnerHTML: {
          __html: children
        }
      }), _jsx("script", {
        dangerouslySetInnerHTML: {
          __html: "window.App=".concat(__WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default()(app))
        }
      }), scripts.map(function (script) {
        return _jsx("script", {
          src: script
        }, script);
      }), __WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics.googleTrackingId && _jsx("script", {
        dangerouslySetInnerHTML: {
          __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + "ga('create','".concat(__WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics.googleTrackingId, "','auto');ga('send','pageview')")
        }
      }), __WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics.googleTrackingId && _ref6));
    }
  }]);

  return Html;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(Html, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    styles: [],
    scripts: []
  }
});
/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrorPage_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ErrorPage_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var _ref = _jsx("div", {}, void 0, _jsx("h1", {}, void 0, "Error"), _jsx("p", {}, void 0, "Sorry, a critical error occurred on this page."));

var ErrorPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorPage, _React$Component);

  function ErrorPage() {
    _classCallCheck(this, ErrorPage);

    return _possibleConstructorReturn(this, (ErrorPage.__proto__ || Object.getPrototypeOf(ErrorPage)).apply(this, arguments));
  }

  _createClass(ErrorPage, [{
    key: "render",
    value: function render() {
      if (false) {
        return _jsx("div", {}, void 0, _jsx("h1", {}, void 0, this.props.error.name), _jsx("pre", {}, void 0, this.props.error.stack));
      }

      return _ref;
    }
  }]);

  return ErrorPage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(ErrorPage, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    error: null
  }
});

/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__ErrorPage_css___default.a)(ErrorPage));

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "html{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0 32px;padding:0 2rem;height:100%;font-family:sans-serif;text-align:center;color:#888}body{margin:0}h1{font-weight:400;color:#555}pre{white-space:pre-wrap;text-align:left}", ""]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Creates a wrapper function around the HTML5 Fetch API that provides
 * default arguments to fetch(...) and is intended to reduce the amount
 * of boilerplate code in the application.
 * https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch
 */
function createFetch(fetch, _ref) {
  var baseUrl = _ref.baseUrl,
      cookie = _ref.cookie,
      schema = _ref.schema,
      graphql = _ref.graphql;
  // NOTE: Tweak the default options to suite your application needs
  var defaults = {
    method: 'POST',
    // handy with GraphQL backends
    mode: baseUrl ? 'cors' : 'same-origin',
    credentials: baseUrl ? 'include' : 'same-origin',
    headers: _extends({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }, cookie ? {
      Cookie: cookie
    } : null)
  };
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(url, options) {
        var isGraphQL, query, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isGraphQL = url.startsWith('/graphql');

                if (!(schema && graphql && isGraphQL)) {
                  _context.next = 7;
                  break;
                }

                // We're SSR, so route the graphql internal to avoid latency
                query = JSON.parse(options.body);
                _context.next = 5;
                return graphql(schema, query.query, {
                  request: {}
                }, // fill in request vars needed by graphql
                null, query.variables);

              case 5:
                result = _context.sent;
                return _context.abrupt("return", Promise.resolve({
                  status: result.errors ? 400 : 200,
                  json: function json() {
                    return Promise.resolve(result);
                  }
                }));

              case 7:
                return _context.abrupt("return", isGraphQL || url.startsWith('/api') ? fetch("".concat(baseUrl).concat(url), _extends({}, defaults, options, {
                  headers: _extends({}, defaults.headers, options && options.headers)
                })) : fetch(url, options));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}

/* harmony default export */ __webpack_exports__["a"] = (createFetch);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_facebook__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_passport_facebook__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_models__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config__);
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Passport.js reference implementation.
 * The database schema used in this sample is available at
 * https://github.com/membership/membership.db/tree/master/postgres
 */




/**
 * Sign in with Facebook.
 */

__WEBPACK_IMPORTED_MODULE_0_passport___default.a.use(new __WEBPACK_IMPORTED_MODULE_1_passport_facebook__["Strategy"]({
  clientID: __WEBPACK_IMPORTED_MODULE_3__config___default.a.auth.facebook.id,
  clientSecret: __WEBPACK_IMPORTED_MODULE_3__config___default.a.auth.facebook.secret,
  callbackURL: '/login/facebook/return',
  profileFields: ['displayName', 'name', 'email', 'link', 'locale', 'timezone'],
  passReqToCallback: true
}, function (req, accessToken, refreshToken, profile, done) {
  /* eslint-disable no-underscore-dangle */
  var loginName = 'facebook';
  var claimType = 'urn:facebook:access_token';

  var fooBar =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var userLogin, user, users, _user, _user2;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!req.user) {
                _context.next = 14;
                break;
              }

              _context.next = 3;
              return __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* UserLogin */].findOne({
                attributes: ['name', 'key'],
                where: {
                  name: loginName,
                  key: profile.id
                }
              });

            case 3:
              userLogin = _context.sent;

              if (!userLogin) {
                _context.next = 8;
                break;
              }

              // There is already a Facebook account that belongs to you.
              // Sign in with that account or delete it, then link it with your current account.
              done();
              _context.next = 12;
              break;

            case 8:
              _context.next = 10;
              return __WEBPACK_IMPORTED_MODULE_2__data_models__["a" /* User */].create({
                id: req.user.id,
                email: profile._json.email,
                logins: [{
                  name: loginName,
                  key: profile.id
                }],
                claims: [{
                  type: claimType,
                  value: profile.id
                }],
                profile: {
                  displayName: profile.displayName,
                  gender: profile._json.gender,
                  picture: "https://graph.facebook.com/".concat(profile.id, "/picture?type=large")
                }
              }, {
                include: [{
                  model: __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* UserLogin */],
                  as: 'logins'
                }, {
                  model: __WEBPACK_IMPORTED_MODULE_2__data_models__["b" /* UserClaim */],
                  as: 'claims'
                }, {
                  model: __WEBPACK_IMPORTED_MODULE_2__data_models__["d" /* UserProfile */],
                  as: 'profile'
                }]
              });

            case 10:
              user = _context.sent;
              done(null, {
                id: user.id,
                email: user.email
              });

            case 12:
              _context.next = 33;
              break;

            case 14:
              _context.next = 16;
              return __WEBPACK_IMPORTED_MODULE_2__data_models__["a" /* User */].findAll({
                attributes: ['id', 'email'],
                where: {
                  '$logins.name$': loginName,
                  '$logins.key$': profile.id
                },
                include: [{
                  attributes: ['name', 'key'],
                  model: __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* UserLogin */],
                  as: 'logins',
                  required: true
                }]
              });

            case 16:
              users = _context.sent;

              if (!users.length) {
                _context.next = 22;
                break;
              }

              _user = users[0].get({
                plain: true
              });
              done(null, _user);
              _context.next = 33;
              break;

            case 22:
              _context.next = 24;
              return __WEBPACK_IMPORTED_MODULE_2__data_models__["a" /* User */].findOne({
                where: {
                  email: profile._json.email
                }
              });

            case 24:
              _user2 = _context.sent;

              if (!_user2) {
                _context.next = 29;
                break;
              }

              // There is already an account using this email address. Sign in to
              // that account and link it with Facebook manually from Account Settings.
              done(null);
              _context.next = 33;
              break;

            case 29:
              _context.next = 31;
              return __WEBPACK_IMPORTED_MODULE_2__data_models__["a" /* User */].create({
                email: profile._json.email,
                emailConfirmed: true,
                logins: [{
                  name: loginName,
                  key: profile.id
                }],
                claims: [{
                  type: claimType,
                  value: accessToken
                }],
                profile: {
                  displayName: profile.displayName,
                  gender: profile._json.gender,
                  picture: "https://graph.facebook.com/".concat(profile.id, "/picture?type=large")
                }
              }, {
                include: [{
                  model: __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* UserLogin */],
                  as: 'logins'
                }, {
                  model: __WEBPACK_IMPORTED_MODULE_2__data_models__["b" /* UserClaim */],
                  as: 'claims'
                }, {
                  model: __WEBPACK_IMPORTED_MODULE_2__data_models__["d" /* UserProfile */],
                  as: 'profile'
                }]
              });

            case 31:
              _user2 = _context.sent;
              done(null, {
                id: _user2.id,
                email: _user2.email
              });

            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function fooBar() {
      return _ref.apply(this, arguments);
    };
  }();

  fooBar().catch(done);
}));
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_passport___default.a);

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("passport-facebook");

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(4);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


var User = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('User', {
  id: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID,
    defaultValue: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUIDV1,
    primaryKey: true
  },
  email: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255),
    validate: {
      isEmail: true
    }
  },
  emailConfirmed: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.BOOLEAN,
    defaultValue: false
  }
}, {
  indexes: [{
    fields: ['email']
  }]
});
/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(4);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


var UserLogin = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('UserLogin', {
  name: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(50),
    primaryKey: true
  },
  key: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100),
    primaryKey: true
  }
});
/* harmony default export */ __webpack_exports__["a"] = (UserLogin);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(4);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


var UserClaim = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('UserClaim', {
  type: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
  },
  value: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
  }
});
/* harmony default export */ __webpack_exports__["a"] = (UserClaim);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(4);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


var UserProfile = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('UserProfile', {
  userId: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID,
    primaryKey: true
  },
  displayName: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100)
  },
  picture: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255)
  },
  gender: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(50)
  },
  location: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100)
  },
  website: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255)
  }
});
/* harmony default export */ __webpack_exports__["a"] = (UserProfile);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__(42);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_universal_router___default.a(__WEBPACK_IMPORTED_MODULE_1__routes__["a" /* default */], {
  resolveRoute: function resolveRoute(context, params) {
    if (typeof context.route.load === 'function') {
      return context.route.load().then(function (action) {
        return action.default(context, params);
      });
    }

    if (typeof context.route.action === 'function') {
      return context.route.action(context, params);
    }

    return undefined;
  }
}));

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("universal-router");

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */
// The top-level (parent) route
var routes = {
  path: '',
  // Keep in mind, routes are evaluated in order
  children: [// The home route is added to client.js to make sure shared components are
  // added to client.js as well and not repeated in individual each route chunk.
  {
    path: '',
    load: function load() {
      return new Promise(function(resolve) { resolve(__webpack_require__(43)); });
    }
  }, {
    path: '/contact',
    load: function load() {
      return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 63));
    }
  }, {
    path: '/login',
    load: function load() {
      return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 64));
    }
  }, {
    path: '/register',
    load: function load() {
      return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 65));
    }
  }, {
    path: '/about',
    load: function load() {
      return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 66));
    }
  }, {
    path: '/privacy',
    load: function load() {
      return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 67));
    }
  }, {
    path: '/admin',
    load: function load() {
      return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 68));
    }
  }, // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
  {
    path: '(.*)',
    load: function load() {
      return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 69));
    }
  }],
  action: function () {
    var _action = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(_ref) {
      var next, route;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              next = _ref.next;
              _context.next = 3;
              return next();

            case 3:
              route = _context.sent;
              // Provide default values for title, description etc.
              route.title = "".concat(route.title || 'Untitled Page', " - www.reactstarterkit.com");
              route.description = route.description || '';
              return _context.abrupt("return", route);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function action(_x) {
      return _action.apply(this, arguments);
    };
  }()
}; // The error page is available by permanent url for development mode

if (false) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default
  });
}

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(12);
var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




function action(_x) {
  return _action.apply(this, arguments);
}

function _action() {
  _action = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var fetch, resp, _ref2, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fetch = _ref.fetch;
            _context.next = 3;
            return fetch('/graphql', {
              body: JSON.stringify({
                query: '{news{title,link,content}}'
              })
            });

          case 3:
            resp = _context.sent;
            _context.next = 6;
            return resp.json();

          case 6:
            _ref2 = _context.sent;
            data = _ref2.data;

            if (!(!data || !data.news)) {
              _context.next = 10;
              break;
            }

            throw new Error('Failed to load the news feed.');

          case 10:
            return _context.abrupt("return", {
              title: 'React Starter Kit',
              component: _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], {
                news: data.news
              }))
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _action.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Home_css__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Home_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var _ref = _jsx("h1", {}, void 0, "React.js News");

var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.root
      }, void 0, _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.container
      }, void 0, _ref, this.props.news.map(function (item) {
        return _jsx("article", {
          className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.newsItem
        }, item.link, _jsx("h1", {
          className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.newsTitle
        }, void 0, _jsx("a", {
          href: item.link
        }, void 0, item.title)), _jsx("div", {
          className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.newsDesc // eslint-disable-next-line react/no-danger
          ,
          dangerouslySetInnerHTML: {
            __html: item.content
          }
        }));
      })));
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Home_css___default.a)(Home));

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(46);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Home.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Home.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._1avl7{padding-left:20px;padding-right:20px}._3YPN-{margin:0 auto;padding:0 0 40px;max-width:1000px}.-EKGZ{margin:0 0 32px;margin:0 0 2rem}._3GwAp{font-size:24px;font-size:1.5rem}._107uo h1,._107uo h2,._107uo h3,._107uo h4,._107uo h5,._107uo h6{font-size:18px;font-size:1.125rem}._107uo pre{white-space:pre-wrap;font-size:14px;font-size:.875rem}._107uo img{max-width:100%}", ""]);

// exports
exports.locals = {
	"root": "_1avl7",
	"container": "_3YPN-",
	"newsItem": "-EKGZ",
	"newsTitle": "_3GwAp",
	"newsDesc": "_107uo"
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(48);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../css-loader/index.js??ref--1-rules-1!../postcss-loader/lib/index.js??ref--1-rules-3!./normalize.css", function() {
        content = require("!!../css-loader/index.js??ref--1-rules-1!../postcss-loader/lib/index.js??ref--1-rules-3!./normalize.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}", ""]);

// exports


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(50);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Layout.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Layout.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "html{color:#222;font-weight:100;font-size:1em;font-family:Segoe UI,HelveticaNeue-Light,sans-serif;line-height:1.375}body{margin:0}a{color:#0074c2}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{*,:after,:before{background:transparent!important;color:#000!important;-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}", ""]);

// exports


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recharts__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Chart_css__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Chart_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Chart_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mkdata_json__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mkdata_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__mkdata_json__);
var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

/**
 * 
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var COLORS = ['#84A5EE', '#8585D9', '#D3EB50', '#ABDB69', '#8BC79C', '#94CFE2'];

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_1_recharts__["CartesianGrid"], {
  strokeDasharray: "3 3"
});

var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_1_recharts__["XAxis"], {
  interval: 450,
  dataKey: "d",
  type: "category",
  allowDuplicatedCategory: false
});

var _ref4 = _jsx(__WEBPACK_IMPORTED_MODULE_1_recharts__["YAxis"], {
  dataKey: "v"
});

var _ref5 = _jsx(__WEBPACK_IMPORTED_MODULE_1_recharts__["Tooltip"], {});

var _ref6 = _jsx(__WEBPACK_IMPORTED_MODULE_1_recharts__["Legend"], {});

var Chart = function Chart(_ref) {
  var sliderValue = _ref.sliderValue,
      sliderChangeHandler = _ref.sliderChangeHandler;
  return _jsx("div", {
    className: __WEBPACK_IMPORTED_MODULE_4__Chart_css___default.a.root
  }, void 0, _jsx("input", {
    onChange: sliderChangeHandler,
    value: sliderValue,
    type: "range"
  }), _jsx("span", {
    className: __WEBPACK_IMPORTED_MODULE_4__Chart_css___default.a.factor
  }, void 0, "factor: ", sliderValue), _jsx("div", {
    className: __WEBPACK_IMPORTED_MODULE_4__Chart_css___default.a.container
  }, void 0, _jsx("div", {
    className: __WEBPACK_IMPORTED_MODULE_4__Chart_css___default.a.banner
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_recharts__["LineChart"], {
    width: 600,
    height: 300
  }, void 0, _ref2, _ref3, _ref4, _ref5, _ref6, __WEBPACK_IMPORTED_MODULE_5__mkdata_json___default.a.mktData.map(function (serie, i) {
    return _jsx(__WEBPACK_IMPORTED_MODULE_1_recharts__["Line"], {
      dot: false,
      dataKey: "v",
      data: sliderValue !== 1 ? serie.timeSeries.entries.map(function (entry) {
        return {
          d: entry.d,
          v: entry.v * sliderValue
        };
      }) : serie.timeSeries.entries,
      name: serie.instrumentId,
      stroke: COLORS[i]
    }, serie.instrumentId);
  })))));
};

var extendWithHandlers = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withHandlers"])({
  sliderChangeHandler: function sliderChangeHandler(props) {
    return function (event) {
      return props.setSliderValue(parseInt(event.target.value, 10));
    };
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__Chart_css___default.a)(Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withState"])('sliderValue', 'setSliderValue', 1), extendWithHandlers)(Chart)));

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(55);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Chart.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Chart.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._14rgn{color:#000}.llrCD{margin:0 auto;padding:20px 0;max-width:1000px}._2QbVw{text-align:center}._1KVnp{margin-left:10px;position:relative;top:-6px}", ""]);

// exports
exports.locals = {
	"root": "_14rgn",
	"container": "llrCD",
	"banner": "_2QbVw",
	"factor": "_1KVnp"
};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = {"mktData":[{"instrumentId":70,"timeSeries":{"entries":[{"d":"2010-01-01","v":6545.91},{"d":"2010-01-04","v":6631.44},{"d":"2010-01-05","v":6579.26},{"d":"2010-01-06","v":6559.41},{"d":"2010-01-07","v":6555.36},{"d":"2010-01-08","v":6617.88},{"d":"2010-01-11","v":6592.26},{"d":"2010-01-12","v":6541.9},{"d":"2010-01-13","v":6554.55},{"d":"2010-01-14","v":6627.42},{"d":"2010-01-15","v":6576.02},{"d":"2010-01-18","v":6603.78},{"d":"2010-01-19","v":6633.86},{"d":"2010-01-20","v":6586.53},{"d":"2010-01-21","v":6578.95},{"d":"2010-01-22","v":6493.96},{"d":"2010-01-25","v":6451.3},{"d":"2010-01-26","v":6484.23},{"d":"2010-01-27","v":6473.03},{"d":"2010-01-28","v":6442.41},{"d":"2010-01-29","v":6440.72},{"d":"2010-02-01","v":6496.33},{"d":"2010-02-02","v":6550.12},{"d":"2010-02-03","v":6553.8},{"d":"2010-02-04","v":6396.51},{"d":"2010-02-05","v":6264.33},{"d":"2010-02-08","v":6347.14},{"d":"2010-02-09","v":6314.75},{"d":"2010-02-10","v":6333.99},{"d":"2010-02-11","v":6403.42},{"d":"2010-02-12","v":6416.2},{"d":"2010-02-15","v":6440.76},{"d":"2010-02-16","v":6497.66},{"d":"2010-02-17","v":6567.6},{"d":"2010-02-18","v":6637.29},{"d":"2010-02-19","v":6709.68},{"d":"2010-02-22","v":6687.41},{"d":"2010-02-23","v":6649.09},{"d":"2010-02-24","v":6687.95},{"d":"2010-02-25","v":6643.96},{"d":"2010-02-26","v":6710.99},{"d":"2010-03-01","v":6791.48},{"d":"2010-03-02","v":6820.04},{"d":"2010-03-03","v":6813.16},{"d":"2010-03-04","v":6804.87},{"d":"2010-03-05","v":6847.78},{"d":"2010-03-08","v":6851.2},{"d":"2010-03-09","v":6868.32},{"d":"2010-03-10","v":6873.59},{"d":"2010-03-11","v":6851.73},{"d":"2010-03-12","v":6836.6},{"d":"2010-03-15","v":6825.1},{"d":"2010-03-16","v":6874.43},{"d":"2010-03-17","v":6892.01},{"d":"2010-03-18","v":6897.74},{"d":"2010-03-19","v":6880.76},{"d":"2010-03-22","v":6866.43},{"d":"2010-03-23","v":6877.16},{"d":"2010-03-24","v":6879.95},{"d":"2010-03-25","v":6894.17},{"d":"2010-03-26","v":6838.95},{"d":"2010-03-29","v":6850.58},{"d":"2010-03-30","v":6871.42},{"d":"2010-03-31","v":6873.37},{"d":"2010-04-01","v":6888.92},{"d":"2010-04-02","v":6888.92},{"d":"2010-04-05","v":6888.92},{"d":"2010-04-06","v":6886.21},{"d":"2010-04-07","v":6843.49},{"d":"2010-04-08","v":6791.01},{"d":"2010-04-09","v":6888.97},{"d":"2010-04-12","v":6910.96},{"d":"2010-04-13","v":6885.86},{"d":"2010-04-14","v":6916.59},{"d":"2010-04-15","v":6967.56},{"d":"2010-04-16","v":6893.69},{"d":"2010-04-19","v":6803.68},{"d":"2010-04-20","v":6841.91},{"d":"2010-04-21","v":6814.71},{"d":"2010-04-22","v":6720.09},{"d":"2010-04-23","v":6767.97},{"d":"2010-04-26","v":6803.74},{"d":"2010-04-27","v":6667.47},{"d":"2010-04-28","v":6576.39},{"d":"2010-04-29","v":6665.84},{"d":"2010-04-30","v":6616.82},{"d":"2010-05-03","v":6607.71},{"d":"2010-05-04","v":6488.42},{"d":"2010-05-05","v":6448.49},{"d":"2010-05-06","v":6387.52},{"d":"2010-05-07","v":6205.63},{"d":"2010-05-10","v":6481.95},{"d":"2010-05-11","v":6509},{"d":"2010-05-12","v":6575.05},{"d":"2010-05-13","v":6575.05},{"d":"2010-05-14","v":6428.68},{"d":"2010-05-17","v":6428.86},{"d":"2010-05-18","v":6470.84},{"d":"2010-05-19","v":6374.43},{"d":"2010-05-20","v":6262.42},{"d":"2010-05-21","v":6206.59},{"d":"2010-05-24","v":6206.59},{"d":"2010-05-25","v":6091.55},{"d":"2010-05-26","v":6167.53},{"d":"2010-05-27","v":6305.18},{"d":"2010-05-28","v":6321.92},{"d":"2010-05-31","v":6312.6},{"d":"2010-06-01","v":6316.6},{"d":"2010-06-02","v":6368.81},{"d":"2010-06-03","v":6418.82},{"d":"2010-06-04","v":6298.97},{"d":"2010-06-07","v":6291.04},{"d":"2010-06-08","v":6246.22},{"d":"2010-06-09","v":6319.18},{"d":"2010-06-10","v":6376.66},{"d":"2010-06-11","v":6426.74},{"d":"2010-06-14","v":6472.12},{"d":"2010-06-15","v":6484.73},{"d":"2010-06-16","v":6490.07},{"d":"2010-06-17","v":6475.25},{"d":"2010-06-18","v":6447.06},{"d":"2010-06-21","v":6519.57},{"d":"2010-06-22","v":6463.46},{"d":"2010-06-23","v":6381.85},{"d":"2010-06-24","v":6320.62},{"d":"2010-06-25","v":6275.35},{"d":"2010-06-28","v":6311.15},{"d":"2010-06-29","v":6144.45},{"d":"2010-06-30","v":6128.06},{"d":"2010-07-01","v":5981.66},{"d":"2010-07-02","v":5974.3},{"d":"2010-07-05","v":5942.25},{"d":"2010-07-06","v":6063.12},{"d":"2010-07-07","v":6099.2},{"d":"2010-07-08","v":6155.72},{"d":"2010-07-09","v":6210.49},{"d":"2010-07-12","v":6228.31},{"d":"2010-07-13","v":6298.59},{"d":"2010-07-14","v":6332.28},{"d":"2010-07-15","v":6291.07},{"d":"2010-07-16","v":6184.37},{"d":"2010-07-19","v":6156.64},{"d":"2010-07-20","v":6123.42},{"d":"2010-07-21","v":6132.66},{"d":"2010-07-22","v":6194.18},{"d":"2010-07-23","v":6201.25},{"d":"2010-07-26","v":6199.46},{"d":"2010-07-27","v":6275.19},{"d":"2010-07-28","v":6277.49},{"d":"2010-07-29","v":6220.65},{"d":"2010-07-30","v":6200.78},{"d":"2010-08-02","v":6321.64},{"d":"2010-08-03","v":6337.72},{"d":"2010-08-04","v":6380.3},{"d":"2010-08-05","v":6374.89},{"d":"2010-08-06","v":6321.36},{"d":"2010-08-09","v":6391.74},{"d":"2010-08-10","v":6395.02},{"d":"2010-08-11","v":6265.84},{"d":"2010-08-12","v":6279.35},{"d":"2010-08-13","v":6294.34},{"d":"2010-08-16","v":6285.66},{"d":"2010-08-17","v":6359.74},{"d":"2010-08-18","v":6362.88},{"d":"2010-08-19","v":6281.35},{"d":"2010-08-20","v":6185.82},{"d":"2010-08-23","v":6209.45},{"d":"2010-08-24","v":6144.14},{"d":"2010-08-25","v":6098.59},{"d":"2010-08-26","v":6131.76},{"d":"2010-08-27","v":6183.14},{"d":"2010-08-30","v":6205.24},{"d":"2010-08-31","v":6180.89},{"d":"2010-09-01","v":6332.43},{"d":"2010-09-02","v":6333.65},{"d":"2010-09-03","v":6400.71},{"d":"2010-09-06","v":6418.25},{"d":"2010-09-07","v":6360.2},{"d":"2010-09-08","v":6386.95},{"d":"2010-09-09","v":6425.26},{"d":"2010-09-10","v":6467.69},{"d":"2010-09-13","v":6471.77},{"d":"2010-09-14","v":6466.32},{"d":"2010-09-15","v":6434.01},{"d":"2010-09-16","v":6424.16},{"d":"2010-09-17","v":6389.02},{"d":"2010-09-20","v":6461.98},{"d":"2010-09-21","v":6420.4},{"d":"2010-09-22","v":6344.88},{"d":"2010-09-23","v":6303.2},{"d":"2010-09-24","v":6360.77},{"d":"2010-09-27","v":6338.89},{"d":"2010-09-28","v":6334.38},{"d":"2010-09-29","v":6311.57},{"d":"2010-09-30","v":6296.33},{"d":"2010-10-01","v":6284.17},{"d":"2010-10-04","v":6248.8},{"d":"2010-10-05","v":6313.9},{"d":"2010-10-06","v":6351.01},{"d":"2010-10-07","v":6375.58},{"d":"2010-10-08","v":6363.16},{"d":"2010-10-11","v":6386.18},{"d":"2010-10-12","v":6375.26},{"d":"2010-10-13","v":6455.13},{"d":"2010-10-14","v":6440.97},{"d":"2010-10-15","v":6443.01},{"d":"2010-10-18","v":6470.26},{"d":"2010-10-19","v":6471.96},{"d":"2010-10-20","v":6477.2},{"d":"2010-10-21","v":6512.19},{"d":"2010-10-22","v":6477.13},{"d":"2010-10-25","v":6513.63},{"d":"2010-10-26","v":6476.61},{"d":"2010-10-27","v":6479.21},{"d":"2010-10-28","v":6484.71},{"d":"2010-10-29","v":6472.23},{"d":"2010-11-01","v":6504.72},{"d":"2010-11-02","v":6541.5},{"d":"2010-11-03","v":6512.99},{"d":"2010-11-04","v":6595.64},{"d":"2010-11-05","v":6587.72},{"d":"2010-11-08","v":6600.36},{"d":"2010-11-09","v":6581.88},{"d":"2010-11-10","v":6539.82},{"d":"2010-11-11","v":6516.99},{"d":"2010-11-12","v":6505.29},{"d":"2010-11-15","v":6562.15},{"d":"2010-11-16","v":6476.53},{"d":"2010-11-17","v":6494.99},{"d":"2010-11-18","v":6613.37},{"d":"2010-11-19","v":6590.84},{"d":"2010-11-22","v":6532.64},{"d":"2010-11-23","v":6393.79},{"d":"2010-11-24","v":6449.8},{"d":"2010-11-25","v":6502.14},{"d":"2010-11-26","v":6483.56},{"d":"2010-11-29","v":6397.5},{"d":"2010-11-30","v":6312.43},{"d":"2010-12-01","v":6409.7},{"d":"2010-12-02","v":6483.44},{"d":"2010-12-03","v":6440.9},{"d":"2010-12-06","v":6412.22},{"d":"2010-12-07","v":6462.53},{"d":"2010-12-08","v":6508.13},{"d":"2010-12-09","v":6537.63},{"d":"2010-12-10","v":6519.14},{"d":"2010-12-13","v":6519.08},{"d":"2010-12-14","v":6545.84},{"d":"2010-12-15","v":6560.43},{"d":"2010-12-16","v":6566.17},{"d":"2010-12-17","v":6538.16},{"d":"2010-12-20","v":6521.25},{"d":"2010-12-21","v":6558.17},{"d":"2010-12-22","v":6553.7},{"d":"2010-12-23","v":6599.43},{"d":"2010-12-24","v":6599.43},{"d":"2010-12-27","v":6568.21},{"d":"2010-12-28","v":6569.06},{"d":"2010-12-29","v":6566.65},{"d":"2010-12-30","v":6436.04},{"d":"2010-12-31","v":6436.04},{"d":"2011-01-03","v":6493.88},{"d":"2011-01-04","v":6494.31},{"d":"2011-01-05","v":6519.25},{"d":"2011-01-06","v":6532.84},{"d":"2011-01-07","v":6497.64},{"d":"2011-01-10","v":6446.32},{"d":"2011-01-11","v":6534.84},{"d":"2011-01-12","v":6613.75},{"d":"2011-01-13","v":6562.47},{"d":"2011-01-14","v":6556.09},{"d":"2011-01-17","v":6578.17},{"d":"2011-01-18","v":6634.93},{"d":"2011-01-19","v":6559.66},{"d":"2011-01-20","v":6513.5},{"d":"2011-01-21","v":6567.31},{"d":"2011-01-24","v":6603.8},{"d":"2011-01-25","v":6580.33},{"d":"2011-01-26","v":6592.99},{"d":"2011-01-27","v":6562.36},{"d":"2011-01-28","v":6528.13},{"d":"2011-01-31","v":6479.15},{"d":"2011-02-01","v":6555.26},{"d":"2011-02-02","v":6553.67},{"d":"2011-02-03","v":6544.91},{"d":"2011-02-04","v":6584.4},{"d":"2011-02-07","v":6611.14},{"d":"2011-02-08","v":6638.66},{"d":"2011-02-09","v":6631.64},{"d":"2011-02-10","v":6612.06},{"d":"2011-02-11","v":6665.22},{"d":"2011-02-14","v":6666.06},{"d":"2011-02-15","v":6690.9},{"d":"2011-02-16","v":6711.65},{"d":"2011-02-17","v":6706.47},{"d":"2011-02-18","v":6717.25},{"d":"2011-02-21","v":6683.87},{"d":"2011-02-22","v":6622.49},{"d":"2011-02-23","v":6622.77},{"d":"2011-02-24","v":6515.97},{"d":"2011-02-25","v":6537.2},{"d":"2011-02-28","v":6610.44},{"d":"2011-03-01","v":6619.36},{"d":"2011-03-02","v":6592.07},{"d":"2011-03-03","v":6599.21},{"d":"2011-03-04","v":6530.54},{"d":"2011-03-07","v":6495.52},{"d":"2011-03-08","v":6511.21},{"d":"2011-03-09","v":6446.6},{"d":"2011-03-10","v":6404.62},{"d":"2011-03-11","v":6353.76},{"d":"2011-03-14","v":6274.47},{"d":"2011-03-15","v":6101.01},{"d":"2011-03-16","v":6021.55},{"d":"2011-03-17","v":6073.42},{"d":"2011-03-18","v":6098.05},{"d":"2011-03-21","v":6223.91},{"d":"2011-03-22","v":6227.03},{"d":"2011-03-23","v":6256.06},{"d":"2011-03-24","v":6319.23},{"d":"2011-03-25","v":6352.28},{"d":"2011-03-28","v":6359.02},{"d":"2011-03-29","v":6355.06},{"d":"2011-03-30","v":6398.42},{"d":"2011-03-31","v":6357.55},{"d":"2011-04-01","v":6439.91},{"d":"2011-04-04","v":6414.6},{"d":"2011-04-05","v":6430.3},{"d":"2011-04-06","v":6443.06},{"d":"2011-04-07","v":6465.57},{"d":"2011-04-08","v":6457.93},{"d":"2011-04-11","v":6440.11},{"d":"2011-04-12","v":6351.6},{"d":"2011-04-13","v":6364.3},{"d":"2011-04-14","v":6357.03},{"d":"2011-04-15","v":6400.26},{"d":"2011-04-18","v":6244.95},{"d":"2011-04-19","v":6326.65},{"d":"2011-04-20","v":6444.81},{"d":"2011-04-21","v":6457.16},{"d":"2011-04-22","v":6457.16},{"d":"2011-04-25","v":6457.16},{"d":"2011-04-26","v":6476.59},{"d":"2011-04-27","v":6472.42},{"d":"2011-04-28","v":6516.21},{"d":"2011-04-29","v":6539.7},{"d":"2011-05-02","v":6544.67},{"d":"2011-05-03","v":6510.61},{"d":"2011-05-04","v":6470.35},{"d":"2011-05-05","v":6450.03},{"d":"2011-05-06","v":6526.51},{"d":"2011-05-09","v":6476.89},{"d":"2011-05-10","v":6526.16},{"d":"2011-05-11","v":6562.82},{"d":"2011-05-12","v":6562.59},{"d":"2011-05-13","v":6563.26},{"d":"2011-05-16","v":6564.15},{"d":"2011-05-17","v":6496.56},{"d":"2011-05-18","v":6535.24},{"d":"2011-05-19","v":6557.95},{"d":"2011-05-20","v":6530.61},{"d":"2011-05-23","v":6437.82},{"d":"2011-05-24","v":6454.29},{"d":"2011-05-25","v":6464.55},{"d":"2011-05-26","v":6469.16},{"d":"2011-05-27","v":6489.32},{"d":"2011-05-30","v":6470.8},{"d":"2011-05-31","v":6554.71},{"d":"2011-06-01","v":6496.47},{"d":"2011-06-02","v":6496.47},{"d":"2011-06-03","v":6407.39},{"d":"2011-06-06","v":6370.06},{"d":"2011-06-07","v":6330.65},{"d":"2011-06-08","v":6256.86},{"d":"2011-06-09","v":6271.01},{"d":"2011-06-10","v":6197.25},{"d":"2011-06-13","v":6197.25},{"d":"2011-06-14","v":6255.68},{"d":"2011-06-15","v":6198.17},{"d":"2011-06-16","v":6157.67},{"d":"2011-06-17","v":6145.16},{"d":"2011-06-20","v":6113.7},{"d":"2011-06-21","v":6171.01},{"d":"2011-06-22","v":6113.44},{"d":"2011-06-23","v":5991.09},{"d":"2011-06-24","v":5998.02},{"d":"2011-06-27","v":5990.82},{"d":"2011-06-28","v":6002.4},{"d":"2011-06-29","v":6101.55},{"d":"2011-06-30","v":6187.07},{"d":"2011-07-01","v":6237.81},{"d":"2011-07-04","v":6245.78},{"d":"2011-07-05","v":6243.01},{"d":"2011-07-06","v":6179.35},{"d":"2011-07-07","v":6211.11},{"d":"2011-07-08","v":6152.69},{"d":"2011-07-11","v":6053},{"d":"2011-07-12","v":6014.84},{"d":"2011-07-13","v":6025.23},{"d":"2011-07-14","v":5980.97},{"d":"2011-07-15","v":5938.06},{"d":"2011-07-18","v":5826.26},{"d":"2011-07-19","v":5896.55},{"d":"2011-07-20","v":5966.54},{"d":"2011-07-21","v":6042.06},{"d":"2011-07-22","v":6031.93},{"d":"2011-07-25","v":6017.49},{"d":"2011-07-26","v":5990.18},{"d":"2011-07-27","v":5904.47},{"d":"2011-07-28","v":5871.41},{"d":"2011-07-29","v":5783.35},{"d":"2011-08-01","v":5783.35},{"d":"2011-08-02","v":5546.94},{"d":"2011-08-03","v":5483.15},{"d":"2011-08-04","v":5285.25},{"d":"2011-08-05","v":5172.06},{"d":"2011-08-08","v":4967.99},{"d":"2011-08-09","v":4997.92},{"d":"2011-08-10","v":4791.96},{"d":"2011-08-11","v":5032.75},{"d":"2011-08-12","v":5252.81},{"d":"2011-08-15","v":5324.73},{"d":"2011-08-16","v":5373.3},{"d":"2011-08-17","v":5421.21},{"d":"2011-08-18","v":5196},{"d":"2011-08-19","v":5093.75},{"d":"2011-08-22","v":5144.02},{"d":"2011-08-23","v":5230.58},{"d":"2011-08-24","v":5328.49},{"d":"2011-08-25","v":5298.18},{"d":"2011-08-26","v":5323.12},{"d":"2011-08-29","v":5446.47},{"d":"2011-08-30","v":5449.16},{"d":"2011-08-31","v":5528.52},{"d":"2011-09-01","v":5531.54},{"d":"2011-09-02","v":5359.67},{"d":"2011-09-05","v":5142.99},{"d":"2011-09-06","v":5367.24},{"d":"2011-09-07","v":5501.26},{"d":"2011-09-08","v":5528.91},{"d":"2011-09-09","v":5430.77},{"d":"2011-09-12","v":5303.14},{"d":"2011-09-13","v":5359.14},{"d":"2011-09-14","v":5417.89},{"d":"2011-09-15","v":5433.48},{"d":"2011-09-16","v":5452.88},{"d":"2011-09-19","v":5360.56},{"d":"2011-09-20","v":5471.4},{"d":"2011-09-21","v":5475.34},{"d":"2011-09-22","v":5288.48},{"d":"2011-09-23","v":5298.83},{"d":"2011-09-26","v":5401.01},{"d":"2011-09-27","v":5564.62},{"d":"2011-09-28","v":5551.65},{"d":"2011-09-29","v":5608.6},{"d":"2011-09-30","v":5531.74},{"d":"2011-10-03","v":5495.69},{"d":"2011-10-04","v":5444.55},{"d":"2011-10-05","v":5504.99},{"d":"2011-10-06","v":5640.07},{"d":"2011-10-07","v":5652.23},{"d":"2011-10-10","v":5718.56},{"d":"2011-10-11","v":5732.19},{"d":"2011-10-12","v":5781.13},{"d":"2011-10-13","v":5713.17},{"d":"2011-10-14","v":5761.12},{"d":"2011-10-17","v":5723.41},{"d":"2011-10-18","v":5682.51},{"d":"2011-10-19","v":5699.98},{"d":"2011-10-20","v":5657.66},{"d":"2011-10-21","v":5753.52},{"d":"2011-10-24","v":5788.63},{"d":"2011-10-25","v":5708.79},{"d":"2011-10-26","v":5700.5},{"d":"2011-10-27","v":5823},{"d":"2011-10-28","v":5852.66},{"d":"2011-10-31","v":5731.27},{"d":"2011-11-01","v":5588.57},{"d":"2011-11-02","v":5611.05},{"d":"2011-11-03","v":5668.05},{"d":"2011-11-04","v":5659.83},{"d":"2011-11-07","v":5645.96},{"d":"2011-11-08","v":5682.65},{"d":"2011-11-09","v":5607.85},{"d":"2011-11-10","v":5565.78},{"d":"2011-11-11","v":5649.03},{"d":"2011-11-14","v":5661.71},{"d":"2011-11-15","v":5664.91},{"d":"2011-11-16","v":5685.8},{"d":"2011-11-17","v":5644.62},{"d":"2011-11-18","v":5614.61},{"d":"2011-11-21","v":5477.26},{"d":"2011-11-22","v":5447.66},{"d":"2011-11-23","v":5386.14},{"d":"2011-11-24","v":5356.96},{"d":"2011-11-25","v":5395.61},{"d":"2011-11-28","v":5522.66},{"d":"2011-11-29","v":5531.24},{"d":"2011-11-30","v":5652.31},{"d":"2011-12-01","v":5681.57},{"d":"2011-12-02","v":5718.85},{"d":"2011-12-05","v":5739.86},{"d":"2011-12-06","v":5767.93},{"d":"2011-12-07","v":5766.24},{"d":"2011-12-08","v":5737.82},{"d":"2011-12-09","v":5793.57},{"d":"2011-12-12","v":5747.09},{"d":"2011-12-13","v":5759.72},{"d":"2011-12-14","v":5719.09},{"d":"2011-12-15","v":5784.14},{"d":"2011-12-16","v":5733.5},{"d":"2011-12-19","v":5767.98},{"d":"2011-12-20","v":5804.31},{"d":"2011-12-21","v":5804.77},{"d":"2011-12-22","v":5837.06},{"d":"2011-12-23","v":5893.89},{"d":"2011-12-26","v":5893.89},{"d":"2011-12-27","v":5886.91},{"d":"2011-12-28","v":5895.25},{"d":"2011-12-29","v":5896.6},{"d":"2011-12-30","v":5936.23},{"d":"2012-01-02","v":5936.23},{"d":"2012-01-03","v":6050.93},{"d":"2012-01-04","v":6058.08},{"d":"2012-01-05","v":6026.57},{"d":"2012-01-06","v":6013.83},{"d":"2012-01-09","v":5987.54},{"d":"2012-01-10","v":6050.78},{"d":"2012-01-11","v":6008.04},{"d":"2012-01-12","v":6018.07},{"d":"2012-01-13","v":5996.34},{"d":"2012-01-16","v":6031.24},{"d":"2012-01-17","v":6056.17},{"d":"2012-01-18","v":6116.23},{"d":"2012-01-19","v":6194.45},{"d":"2012-01-20","v":6122.67},{"d":"2012-01-23","v":6127.67},{"d":"2012-01-24","v":6135.1},{"d":"2012-01-25","v":6073.36},{"d":"2012-01-26","v":6100.43},{"d":"2012-01-27","v":6033.52},{"d":"2012-01-30","v":5970.74},{"d":"2012-01-31","v":5970.49},{"d":"2012-02-01","v":6069.91},{"d":"2012-02-02","v":6064.41},{"d":"2012-02-03","v":6153.31},{"d":"2012-02-06","v":6147.03},{"d":"2012-02-07","v":6157.59},{"d":"2012-02-08","v":6155.86},{"d":"2012-02-09","v":6169.63},{"d":"2012-02-10","v":6130.66},{"d":"2012-02-13","v":6177.44},{"d":"2012-02-14","v":6163.82},{"d":"2012-02-15","v":6198.34},{"d":"2012-02-16","v":6217.28},{"d":"2012-02-17","v":6237.69},{"d":"2012-02-20","v":6242.99},{"d":"2012-02-21","v":6237.82},{"d":"2012-02-22","v":6192.42},{"d":"2012-02-23","v":6200.97},{"d":"2012-02-24","v":6184.13},{"d":"2012-02-27","v":6143.92},{"d":"2012-02-28","v":6125.09},{"d":"2012-02-29","v":6109.93},{"d":"2012-03-01","v":6128.28},{"d":"2012-03-02","v":6149.37},{"d":"2012-03-05","v":6153.91},{"d":"2012-03-06","v":6047.53},{"d":"2012-03-07","v":6102.54},{"d":"2012-03-08","v":6153.93},{"d":"2012-03-09","v":6188.51},{"d":"2012-03-12","v":6189.86},{"d":"2012-03-13","v":6260.02},{"d":"2012-03-14","v":6300.43},{"d":"2012-03-15","v":6332.22},{"d":"2012-03-16","v":6341.33},{"d":"2012-03-19","v":6326.56},{"d":"2012-03-20","v":6296.16},{"d":"2012-03-21","v":6290},{"d":"2012-03-22","v":6249.56},{"d":"2012-03-23","v":6240.33},{"d":"2012-03-26","v":6283.26},{"d":"2012-03-27","v":6269.38},{"d":"2012-03-28","v":6250.43},{"d":"2012-03-29","v":6176.26},{"d":"2012-03-30","v":6235.51},{"d":"2012-04-02","v":6299.38},{"d":"2012-04-03","v":6258.66},{"d":"2012-04-04","v":6166.79},{"d":"2012-04-05","v":6163.49},{"d":"2012-04-06","v":6163.49},{"d":"2012-04-09","v":6163.49},{"d":"2012-04-10","v":6061.43},{"d":"2012-04-11","v":6059.82},{"d":"2012-04-12","v":6125.39},{"d":"2012-04-13","v":6072.12},{"d":"2012-04-16","v":6124.91},{"d":"2012-04-17","v":6200.27},{"d":"2012-04-18","v":6173.35},{"d":"2012-04-19","v":6203.78},{"d":"2012-04-20","v":6237.79},{"d":"2012-04-23","v":6114.83},{"d":"2012-04-24","v":6124.84},{"d":"2012-04-25","v":6150.57},{"d":"2012-04-26","v":6122.41},{"d":"2012-04-27","v":6116.36},{"d":"2012-04-30","v":6096.34},{"d":"2012-05-01","v":6096.34},{"d":"2012-05-02","v":6108.77},{"d":"2012-05-03","v":6097.68},{"d":"2012-05-04","v":6056.79},{"d":"2012-05-07","v":6040.18},{"d":"2012-05-08","v":5977.8},{"d":"2012-05-09","v":5936.13},{"d":"2012-05-10","v":5926.6},{"d":"2012-05-11","v":5954.88},{"d":"2012-05-14","v":5875.66},{"d":"2012-05-15","v":5865.16},{"d":"2012-05-16","v":5872.73},{"d":"2012-05-17","v":5872.73},{"d":"2012-05-18","v":5797.76},{"d":"2012-05-21","v":5814.59},{"d":"2012-05-22","v":5910.2},{"d":"2012-05-23","v":5817.91},{"d":"2012-05-24","v":5852.44},{"d":"2012-05-25","v":5865.19},{"d":"2012-05-28","v":5865.19},{"d":"2012-05-29","v":5914.73},{"d":"2012-05-30","v":5902.82},{"d":"2012-05-31","v":5850.18},{"d":"2012-06-01","v":5777.47},{"d":"2012-06-04","v":5713.34},{"d":"2012-06-05","v":5714.57},{"d":"2012-06-06","v":5822.63},{"d":"2012-06-07","v":5869.21},{"d":"2012-06-08","v":5869.32},{"d":"2012-06-11","v":5871.35},{"d":"2012-06-12","v":5919.88},{"d":"2012-06-13","v":5944.69},{"d":"2012-06-14","v":5908.51},{"d":"2012-06-15","v":5911.82},{"d":"2012-06-18","v":5938.76},{"d":"2012-06-19","v":6034.13},{"d":"2012-06-20","v":6017.91},{"d":"2012-06-21","v":6012.19},{"d":"2012-06-22","v":5989.33},{"d":"2012-06-25","v":5944.48},{"d":"2012-06-26","v":5957.72},{"d":"2012-06-27","v":5996.53},{"d":"2012-06-28","v":5986.85},{"d":"2012-06-29","v":6066.86},{"d":"2012-07-02","v":6109.41},{"d":"2012-07-03","v":6194.08},{"d":"2012-07-04","v":6201.31},{"d":"2012-07-05","v":6202.32},{"d":"2012-07-06","v":6183.67},{"d":"2012-07-09","v":6160.78},{"d":"2012-07-10","v":6191.2},{"d":"2012-07-11","v":6174.75},{"d":"2012-07-12","v":6147.57},{"d":"2012-07-13","v":6181.81},{"d":"2012-07-16","v":6195.61},{"d":"2012-07-17","v":6202.34},{"d":"2012-07-18","v":6265.5},{"d":"2012-07-19","v":6323.64},{"d":"2012-07-20","v":6284.81},{"d":"2012-07-23","v":6180.44},{"d":"2012-07-24","v":6174.89},{"d":"2012-07-25","v":6180.77},{"d":"2012-07-26","v":6277.74},{"d":"2012-07-27","v":6362.82},{"d":"2012-07-30","v":6402.38},{"d":"2012-07-31","v":6399.27},{"d":"2012-08-01","v":6399.27},{"d":"2012-08-02","v":6407.3},{"d":"2012-08-03","v":6461.54},{"d":"2012-08-06","v":6463.01},{"d":"2012-08-07","v":6457.85},{"d":"2012-08-08","v":6458},{"d":"2012-08-09","v":6505.29},{"d":"2012-08-10","v":6483.44},{"d":"2012-08-13","v":6466.18},{"d":"2012-08-14","v":6505.98},{"d":"2012-08-15","v":6511.87},{"d":"2012-08-16","v":6518.43},{"d":"2012-08-17","v":6529.34},{"d":"2012-08-20","v":6506.25},{"d":"2012-08-21","v":6518.32},{"d":"2012-08-22","v":6475.47},{"d":"2012-08-23","v":6453.91},{"d":"2012-08-24","v":6475.94},{"d":"2012-08-27","v":6491.28},{"d":"2012-08-28","v":6421.42},{"d":"2012-08-29","v":6421.96},{"d":"2012-08-30","v":6378.29},{"d":"2012-08-31","v":6388.01},{"d":"2012-09-03","v":6437.66},{"d":"2012-09-04","v":6362.82},{"d":"2012-09-05","v":6425.2},{"d":"2012-09-06","v":6527.87},{"d":"2012-09-07","v":6537.32},{"d":"2012-09-10","v":6507.87},{"d":"2012-09-11","v":6503.3},{"d":"2012-09-12","v":6489.8},{"d":"2012-09-13","v":6513.22},{"d":"2012-09-14","v":6559.16},{"d":"2012-09-17","v":6552.32},{"d":"2012-09-18","v":6537.1},{"d":"2012-09-19","v":6570.72},{"d":"2012-09-20","v":6556.49},{"d":"2012-09-21","v":6605.82},{"d":"2012-09-24","v":6597.22},{"d":"2012-09-25","v":6613.45},{"d":"2012-09-26","v":6540.41},{"d":"2012-09-27","v":6545.91},{"d":"2012-09-28","v":6495.88},{"d":"2012-10-01","v":6610.91},{"d":"2012-10-02","v":6613.54},{"d":"2012-10-03","v":6604.44},{"d":"2012-10-04","v":6631.35},{"d":"2012-10-05","v":6674.82},{"d":"2012-10-08","v":6655.77},{"d":"2012-10-09","v":6649.1},{"d":"2012-10-10","v":6629.04},{"d":"2012-10-11","v":6654.02},{"d":"2012-10-12","v":6655.2},{"d":"2012-10-15","v":6704.21},{"d":"2012-10-16","v":6774.02},{"d":"2012-10-17","v":6786.4},{"d":"2012-10-18","v":6781.72},{"d":"2012-10-19","v":6756.14},{"d":"2012-10-22","v":6746.71},{"d":"2012-10-23","v":6626.79},{"d":"2012-10-24","v":6627.41},{"d":"2012-10-25","v":6606.57},{"d":"2012-10-26","v":6600.84},{"d":"2012-10-29","v":6601.42},{"d":"2012-10-30","v":6633.1},{"d":"2012-10-31","v":6595.13},{"d":"2012-11-01","v":6660.25},{"d":"2012-11-02","v":6701.37},{"d":"2012-11-05","v":6706.27},{"d":"2012-11-06","v":6745.74},{"d":"2012-11-07","v":6697.63},{"d":"2012-11-08","v":6713.62},{"d":"2012-11-09","v":6715.2},{"d":"2012-11-12","v":6696.67},{"d":"2012-11-13","v":6722.76},{"d":"2012-11-14","v":6676.96},{"d":"2012-11-15","v":6574.56},{"d":"2012-11-16","v":6508.66},{"d":"2012-11-19","v":6638.89},{"d":"2012-11-20","v":6618.99},{"d":"2012-11-21","v":6643.7},{"d":"2012-11-22","v":6679.11},{"d":"2012-11-23","v":6715.09},{"d":"2012-11-26","v":6681.88},{"d":"2012-11-27","v":6711.71},{"d":"2012-11-28","v":6756.48},{"d":"2012-11-29","v":6828.52},{"d":"2012-11-30","v":6820.6},{"d":"2012-12-03","v":6838.7},{"d":"2012-12-04","v":6853.15},{"d":"2012-12-05","v":6852.04},{"d":"2012-12-06","v":6912.02},{"d":"2012-12-07","v":6925.25},{"d":"2012-12-10","v":6943.9},{"d":"2012-12-11","v":6973.69},{"d":"2012-12-12","v":6959.39},{"d":"2012-12-13","v":6919.54},{"d":"2012-12-14","v":6902.51},{"d":"2012-12-17","v":6897.1},{"d":"2012-12-18","v":6912.09},{"d":"2012-12-19","v":6946.07},{"d":"2012-12-20","v":6912.79},{"d":"2012-12-21","v":6889.54},{"d":"2012-12-24","v":6889.54},{"d":"2012-12-25","v":6889.54},{"d":"2012-12-26","v":6889.54},{"d":"2012-12-27","v":6862.55},{"d":"2012-12-28","v":6822.44},{"d":"2012-12-31","v":6822.44},{"d":"2013-01-01","v":6822.44},{"d":"2013-01-02","v":6822.44},{"d":"2013-01-03","v":7020.46},{"d":"2013-01-04","v":7058.92},{"d":"2013-01-07","v":7049.3},{"d":"2013-01-08","v":7074.52},{"d":"2013-01-09","v":7151.6},{"d":"2013-01-10","v":7143.73},{"d":"2013-01-11","v":7188.22},{"d":"2013-01-14","v":7202.52},{"d":"2013-01-15","v":7272.31},{"d":"2013-01-16","v":7304.85},{"d":"2013-01-17","v":7429.89},{"d":"2013-01-18","v":7368.8},{"d":"2013-01-21","v":7336.05},{"d":"2013-01-22","v":7291.85},{"d":"2013-01-23","v":7391.95},{"d":"2013-01-24","v":7457.74},{"d":"2013-01-25","v":7458.66},{"d":"2013-01-28","v":7483.95},{"d":"2013-01-29","v":7458.03},{"d":"2013-01-30","v":7387.9},{"d":"2013-01-31","v":7390.86},{"d":"2013-02-01","v":7420.35},{"d":"2013-02-04","v":7362.72},{"d":"2013-02-05","v":7404.63},{"d":"2013-02-06","v":7433.47},{"d":"2013-02-07","v":7337.05},{"d":"2013-02-08","v":7395.97},{"d":"2013-02-11","v":7407.6},{"d":"2013-02-12","v":7427.06},{"d":"2013-02-13","v":7482.22},{"d":"2013-02-14","v":7482.2},{"d":"2013-02-15","v":7500.57},{"d":"2013-02-18","v":7497.23},{"d":"2013-02-19","v":7579.5},{"d":"2013-02-20","v":7626.01},{"d":"2013-02-21","v":7505.71},{"d":"2013-02-22","v":7554.38},{"d":"2013-02-25","v":7594.35},{"d":"2013-02-26","v":7449.98},{"d":"2013-02-27","v":7484.99},{"d":"2013-02-28","v":7593.67},{"d":"2013-03-01","v":7601.99},{"d":"2013-03-04","v":7590.52},{"d":"2013-03-05","v":7718.46},{"d":"2013-03-06","v":7698.72},{"d":"2013-03-07","v":7708.96},{"d":"2013-03-08","v":7744.84},{"d":"2013-03-11","v":7758.65},{"d":"2013-03-12","v":7802.93},{"d":"2013-03-13","v":7780.88},{"d":"2013-03-14","v":7842.85},{"d":"2013-03-15","v":7864.39},{"d":"2013-03-18","v":7830.37},{"d":"2013-03-19","v":7789.6},{"d":"2013-03-20","v":7847.7},{"d":"2013-03-21","v":7762.3},{"d":"2013-03-22","v":7744.33},{"d":"2013-03-25","v":7758.22},{"d":"2013-03-26","v":7800.05},{"d":"2013-03-27","v":7780.17},{"d":"2013-03-28","v":7813.67},{"d":"2013-03-29","v":7813.67},{"d":"2013-04-01","v":7813.67},{"d":"2013-04-02","v":7899.3},{"d":"2013-04-03","v":7875.1},{"d":"2013-04-04","v":7762.65},{"d":"2013-04-05","v":7641.11},{"d":"2013-04-08","v":7691.84},{"d":"2013-04-09","v":7653.95},{"d":"2013-04-10","v":7771.37},{"d":"2013-04-11","v":7815.28},{"d":"2013-04-12","v":7760.6},{"d":"2013-04-15","v":7754.73},{"d":"2013-04-16","v":7717.6},{"d":"2013-04-17","v":7533.81},{"d":"2013-04-18","v":7578.97},{"d":"2013-04-19","v":7618.76},{"d":"2013-04-22","v":7609.1},{"d":"2013-04-23","v":7802.48},{"d":"2013-04-24","v":7859.63},{"d":"2013-04-25","v":7901.24},{"d":"2013-04-26","v":7856.32},{"d":"2013-04-29","v":7901.73},{"d":"2013-04-30","v":7906.21},{"d":"2013-05-01","v":7906.21},{"d":"2013-05-02","v":7902.21},{"d":"2013-05-03","v":7937.61},{"d":"2013-05-06","v":7927.34},{"d":"2013-05-07","v":7977.54},{"d":"2013-05-08","v":8093.02},{"d":"2013-05-09","v":8093.02},{"d":"2013-05-10","v":8177.85},{"d":"2013-05-13","v":8147.68},{"d":"2013-05-14","v":8187.75},{"d":"2013-05-15","v":8313.08},{"d":"2013-05-16","v":8256.15},{"d":"2013-05-17","v":8280.25},{"d":"2013-05-20","v":8280.25},{"d":"2013-05-21","v":8318.42},{"d":"2013-05-22","v":8407.61},{"d":"2013-05-23","v":8168.52},{"d":"2013-05-24","v":8168.78},{"d":"2013-05-27","v":8163.05},{"d":"2013-05-28","v":8221.22},{"d":"2013-05-29","v":8028.64},{"d":"2013-05-30","v":8021.57},{"d":"2013-05-31","v":7947.01},{"d":"2013-06-03","v":7780.98},{"d":"2013-06-04","v":7875.68},{"d":"2013-06-05","v":7747.84},{"d":"2013-06-06","v":7622.74},{"d":"2013-06-07","v":7784.84},{"d":"2013-06-10","v":7790.55},{"d":"2013-06-11","v":7673.01},{"d":"2013-06-12","v":7656.83},{"d":"2013-06-13","v":7627.53},{"d":"2013-06-14","v":7635.96},{"d":"2013-06-17","v":7729.71},{"d":"2013-06-18","v":7699.74},{"d":"2013-06-19","v":7731.82},{"d":"2013-06-20","v":7496.05},{"d":"2013-06-21","v":7421.06},{"d":"2013-06-24","v":7249.47},{"d":"2013-06-25","v":7397.39},{"d":"2013-06-26","v":7553.89},{"d":"2013-06-27","v":7671.7},{"d":"2013-06-28","v":7683.04},{"d":"2013-07-01","v":7741.07},{"d":"2013-07-02","v":7732.62},{"d":"2013-07-03","v":7675.29},{"d":"2013-07-04","v":7831.59},{"d":"2013-07-05","v":7781.98},{"d":"2013-07-08","v":7863.48},{"d":"2013-07-09","v":7944.19},{"d":"2013-07-10","v":7971.62},{"d":"2013-07-11","v":7986.4},{"d":"2013-07-12","v":7983.18},{"d":"2013-07-15","v":7999.15},{"d":"2013-07-16","v":7932.79},{"d":"2013-07-17","v":7928.15},{"d":"2013-07-18","v":7929.01},{"d":"2013-07-19","v":7928.12},{"d":"2013-07-22","v":7927.45},{"d":"2013-07-23","v":7896.26},{"d":"2013-07-24","v":7923.07},{"d":"2013-07-25","v":7865.38},{"d":"2013-07-26","v":7796.84},{"d":"2013-07-29","v":7814.11},{"d":"2013-07-30","v":7810.17},{"d":"2013-07-31","v":7820.43},{"d":"2013-08-01","v":7820.43},{"d":"2013-08-02","v":7963.93},{"d":"2013-08-05","v":7979.4},{"d":"2013-08-06","v":7996.79},{"d":"2013-08-07","v":7976.28},{"d":"2013-08-08","v":7955.29},{"d":"2013-08-09","v":7977.34},{"d":"2013-08-12","v":8000.6},{"d":"2013-08-13","v":8036.44},{"d":"2013-08-14","v":8078.26},{"d":"2013-08-15","v":7982.43},{"d":"2013-08-16","v":7961.31},{"d":"2013-08-19","v":7939.42},{"d":"2013-08-20","v":7935.89},{"d":"2013-08-21","v":7887.14},{"d":"2013-08-22","v":7988.6},{"d":"2013-08-23","v":8006.9},{"d":"2013-08-26","v":8022.2},{"d":"2013-08-27","v":7886.07},{"d":"2013-08-28","v":7776.01},{"d":"2013-08-29","v":7763.55},{"d":"2013-08-30","v":7745.97},{"d":"2013-09-02","v":7891.62},{"d":"2013-09-03","v":7866.23},{"d":"2013-09-04","v":7880.65},{"d":"2013-09-05","v":7932.29},{"d":"2013-09-06","v":7950.78},{"d":"2013-09-09","v":7935.76},{"d":"2013-09-10","v":8039.18},{"d":"2013-09-11","v":8051.31},{"d":"2013-09-12","v":8033.45},{"d":"2013-09-13","v":8038.31},{"d":"2013-09-16","v":8029.38},{"d":"2013-09-17","v":8014.47},{"d":"2013-09-18","v":8052.57},{"d":"2013-09-19","v":8092.29},{"d":"2013-09-20","v":8105.39},{"d":"2013-09-23","v":8057.04},{"d":"2013-09-24","v":8047.02},{"d":"2013-09-25","v":8055.23},{"d":"2013-09-26","v":8061.36},{"d":"2013-09-27","v":8055},{"d":"2013-09-30","v":8022.6},{"d":"2013-10-01","v":8059.01},{"d":"2013-10-02","v":7964.44},{"d":"2013-10-03","v":7942.5},{"d":"2013-10-04","v":7943.71},{"d":"2013-10-07","v":7887.86},{"d":"2013-10-08","v":7828.24},{"d":"2013-10-09","v":7755.26},{"d":"2013-10-10","v":7851.08},{"d":"2013-10-11","v":7936.08},{"d":"2013-10-14","v":7928.49},{"d":"2013-10-15","v":7984.35},{"d":"2013-10-16","v":7981.87},{"d":"2013-10-17","v":8032.4},{"d":"2013-10-18","v":8084.65},{"d":"2013-10-21","v":8124.08},{"d":"2013-10-22","v":8214.76},{"d":"2013-10-23","v":8214.56},{"d":"2013-10-24","v":8233.15},{"d":"2013-10-25","v":8249.31},{"d":"2013-10-28","v":8291.1},{"d":"2013-10-29","v":8237.03},{"d":"2013-10-30","v":8228.37},{"d":"2013-10-31","v":8234.29},{"d":"2013-11-01","v":8221.8},{"d":"2013-11-04","v":8185.69},{"d":"2013-11-05","v":8149.31},{"d":"2013-11-06","v":8224.58},{"d":"2013-11-07","v":8229.66},{"d":"2013-11-08","v":8240.92},{"d":"2013-11-11","v":8280.2},{"d":"2013-11-12","v":8261.31},{"d":"2013-11-13","v":8234.72},{"d":"2013-11-14","v":8304.97},{"d":"2013-11-15","v":8327.31},{"d":"2013-11-18","v":8351.38},{"d":"2013-11-19","v":8300.12},{"d":"2013-11-20","v":8281.21},{"d":"2013-11-21","v":8268.69},{"d":"2013-11-22","v":8250.43},{"d":"2013-11-25","v":8304.05},{"d":"2013-11-26","v":8238.92},{"d":"2013-11-27","v":8245.68},{"d":"2013-11-28","v":8257.61},{"d":"2013-11-29","v":8264.2},{"d":"2013-12-02","v":8257.32},{"d":"2013-12-03","v":8109.89},{"d":"2013-12-04","v":8045.54},{"d":"2013-12-05","v":8025.59},{"d":"2013-12-06","v":8066.07},{"d":"2013-12-09","v":8056.33},{"d":"2013-12-10","v":7971.84},{"d":"2013-12-11","v":7956.32},{"d":"2013-12-12","v":7849.62},{"d":"2013-12-13","v":7828.91},{"d":"2013-12-16","v":7856.27},{"d":"2013-12-17","v":7830.98},{"d":"2013-12-18","v":7881.26},{"d":"2013-12-19","v":8028.27},{"d":"2013-12-20","v":8081.35},{"d":"2013-12-23","v":8107.1},{"d":"2013-12-24","v":8107.1},{"d":"2013-12-25","v":8107.1},{"d":"2013-12-26","v":8107.1},{"d":"2013-12-27","v":8221.9},{"d":"2013-12-30","v":8202.98},{"d":"2013-12-31","v":8202.98},{"d":"2014-01-01","v":8202.98},{"d":"2014-01-02","v":8202.98},{"d":"2014-01-03","v":8270.46},{"d":"2014-01-06","v":8272.23},{"d":"2014-01-07","v":8319.4},{"d":"2014-01-08","v":8352.82},{"d":"2014-01-09","v":8295.9},{"d":"2014-01-10","v":8365.12},{"d":"2014-01-13","v":8412.89},{"d":"2014-01-14","v":8384.65},{"d":"2014-01-15","v":8423.42},{"d":"2014-01-16","v":8450.67},{"d":"2014-01-17","v":8478.89},{"d":"2014-01-20","v":8480.95},{"d":"2014-01-21","v":8486.37},{"d":"2014-01-22","v":8466.7},{"d":"2014-01-23","v":8404.98},{"d":"2014-01-24","v":8201.5},{"d":"2014-01-27","v":8132.16},{"d":"2014-01-28","v":8186.62},{"d":"2014-01-29","v":8135.81},{"d":"2014-01-30","v":8204.96},{"d":"2014-01-31","v":8191.33},{"d":"2014-02-03","v":8107.02},{"d":"2014-02-04","v":8092.53},{"d":"2014-02-05","v":8112.96},{"d":"2014-02-06","v":8218.44},{"d":"2014-02-07","v":8318.6},{"d":"2014-02-10","v":8324.85},{"d":"2014-02-11","v":8361.52},{"d":"2014-02-12","v":8402.41},{"d":"2014-02-13","v":8383.9},{"d":"2014-02-14","v":8417.58},{"d":"2014-02-17","v":8415.67},{"d":"2014-02-18","v":8419.92},{"d":"2014-02-19","v":8410.63},{"d":"2014-02-20","v":8383.25},{"d":"2014-02-21","v":8431.78},{"d":"2014-02-24","v":8485.48},{"d":"2014-02-25","v":8506.29},{"d":"2014-02-26","v":8532.99},{"d":"2014-02-27","v":8470.9},{"d":"2014-02-28","v":8475.33},{"d":"2014-03-03","v":8281.01},{"d":"2014-03-04","v":8445.22},{"d":"2014-03-05","v":8459.61},{"d":"2014-03-06","v":8484.21},{"d":"2014-03-07","v":8378.58},{"d":"2014-03-10","v":8367.55},{"d":"2014-03-11","v":8359.51},{"d":"2014-03-12","v":8310.36},{"d":"2014-03-13","v":8205.9},{"d":"2014-03-14","v":8114.02},{"d":"2014-03-17","v":8161.78},{"d":"2014-03-18","v":8240.07},{"d":"2014-03-19","v":8226.55},{"d":"2014-03-20","v":8261.69},{"d":"2014-03-21","v":8289.76},{"d":"2014-03-24","v":8198.02},{"d":"2014-03-25","v":8299.19},{"d":"2014-03-26","v":8334.34},{"d":"2014-03-27","v":8327.93},{"d":"2014-03-28","v":8373.23},{"d":"2014-03-31","v":8453.82},{"d":"2014-04-01","v":8457.27},{"d":"2014-04-02","v":8508.26},{"d":"2014-04-03","v":8521.63},{"d":"2014-04-04","v":8503},{"d":"2014-04-07","v":8405.1},{"d":"2014-04-08","v":8423.36},{"d":"2014-04-09","v":8411.43},{"d":"2014-04-10","v":8420.58},{"d":"2014-04-11","v":8298.82},{"d":"2014-04-14","v":8312.9},{"d":"2014-04-15","v":8280.53},{"d":"2014-04-16","v":8322.7},{"d":"2014-04-17","v":8375.08},{"d":"2014-04-18","v":8375.08},{"d":"2014-04-21","v":8375.08},{"d":"2014-04-22","v":8461.3},{"d":"2014-04-23","v":8443.26},{"d":"2014-04-24","v":8409.13},{"d":"2014-04-25","v":8374.47},{"d":"2014-04-28","v":8384.86},{"d":"2014-04-29","v":8434.66},{"d":"2014-04-30","v":8476.66},{"d":"2014-05-01","v":8476.66},{"d":"2014-05-02","v":8442.71},{"d":"2014-05-05","v":8409.07},{"d":"2014-05-06","v":8395.77},{"d":"2014-05-07","v":8421.65},{"d":"2014-05-08","v":8465.66},{"d":"2014-05-09","v":8510.39},{"d":"2014-05-12","v":8545.12},{"d":"2014-05-13","v":8543.58},{"d":"2014-05-14","v":8611.7},{"d":"2014-05-15","v":8644.74},{"d":"2014-05-16","v":8683.62},{"d":"2014-05-19","v":8646.02},{"d":"2014-05-20","v":8635.61},{"d":"2014-05-21","v":8655.9},{"d":"2014-05-22","v":8693.98},{"d":"2014-05-23","v":8703.84},{"d":"2014-05-26","v":8712.35},{"d":"2014-05-27","v":8710.38},{"d":"2014-05-28","v":8706.5},{"d":"2014-05-29","v":8706.5},{"d":"2014-05-30","v":8674.52},{"d":"2014-06-02","v":8688.96},{"d":"2014-06-03","v":8661.2},{"d":"2014-06-04","v":8661.08},{"d":"2014-06-05","v":8643.28},{"d":"2014-06-06","v":8659.69},{"d":"2014-06-09","v":8659.69},{"d":"2014-06-10","v":8752.86},{"d":"2014-06-11","v":8712.09},{"d":"2014-06-12","v":8670.98},{"d":"2014-06-13","v":8653.76},{"d":"2014-06-16","v":8663.59},{"d":"2014-06-17","v":8667.79},{"d":"2014-06-18","v":8657.27},{"d":"2014-06-19","v":8674.37},{"d":"2014-06-20","v":8701.61},{"d":"2014-06-23","v":8644.57},{"d":"2014-06-24","v":8673.27},{"d":"2014-06-25","v":8581.96},{"d":"2014-06-26","v":8541.28},{"d":"2014-06-27","v":8562.11},{"d":"2014-06-30","v":8554.52},{"d":"2014-07-01","v":8607.97},{"d":"2014-07-02","v":8607.2},{"d":"2014-07-03","v":8694.32},{"d":"2014-07-04","v":8678.22},{"d":"2014-07-07","v":8612.77},{"d":"2014-07-08","v":8554.51},{"d":"2014-07-09","v":8539.71},{"d":"2014-07-10","v":8474.23},{"d":"2014-07-11","v":8468.52},{"d":"2014-07-14","v":8565.67},{"d":"2014-07-15","v":8574.32},{"d":"2014-07-16","v":8617.07},{"d":"2014-07-17","v":8548.08},{"d":"2014-07-18","v":8511.43},{"d":"2014-07-21","v":8513.96},{"d":"2014-07-22","v":8594.21},{"d":"2014-07-23","v":8605.1},{"d":"2014-07-24","v":8637.01},{"d":"2014-07-25","v":8571.48},{"d":"2014-07-28","v":8530.09},{"d":"2014-07-29","v":8532.11},{"d":"2014-07-30","v":8497.38},{"d":"2014-07-31","v":8410.27},{"d":"2014-08-01","v":8410.27},{"d":"2014-08-04","v":8304.04},{"d":"2014-08-05","v":8342.04},{"d":"2014-08-06","v":8290.16},{"d":"2014-08-07","v":8306.75},{"d":"2014-08-08","v":8274.65},{"d":"2014-08-11","v":8329.86},{"d":"2014-08-12","v":8329.8},{"d":"2014-08-13","v":8388.71},{"d":"2014-08-14","v":8430.1},{"d":"2014-08-15","v":8366.73},{"d":"2014-08-18","v":8453.59},{"d":"2014-08-19","v":8525.38},{"d":"2014-08-20","v":8527.91},{"d":"2014-08-21","v":8570},{"d":"2014-08-22","v":8554.16},{"d":"2014-08-25","v":8611.58},{"d":"2014-08-26","v":8673.29},{"d":"2014-08-27","v":8669.8},{"d":"2014-08-28","v":8622.23},{"d":"2014-08-29","v":8658.97},{"d":"2014-09-01","v":8746.97},{"d":"2014-09-02","v":8757.32},{"d":"2014-09-03","v":8803.57},{"d":"2014-09-04","v":8834.75},{"d":"2014-09-05","v":8788.77},{"d":"2014-09-08","v":8817.19},{"d":"2014-09-09","v":8825.6},{"d":"2014-09-10","v":8816.07},{"d":"2014-09-11","v":8829.01},{"d":"2014-09-12","v":8795.93},{"d":"2014-09-15","v":8796.41},{"d":"2014-09-16","v":8804.44},{"d":"2014-09-17","v":8825.61},{"d":"2014-09-18","v":8830.49},{"d":"2014-09-19","v":8840.17},{"d":"2014-09-22","v":8817.52},{"d":"2014-09-23","v":8763.8},{"d":"2014-09-24","v":8797.17},{"d":"2014-09-25","v":8772.76},{"d":"2014-09-26","v":8774.36},{"d":"2014-09-29","v":8776.73},{"d":"2014-09-30","v":8835.14},{"d":"2014-10-01","v":8789.53},{"d":"2014-10-02","v":8654.71},{"d":"2014-10-03","v":8683.53},{"d":"2014-10-06","v":8723.04},{"d":"2014-10-07","v":8561.99},{"d":"2014-10-08","v":8517.29},{"d":"2014-10-09","v":8482.9},{"d":"2014-10-10","v":8374.59},{"d":"2014-10-13","v":8342.07},{"d":"2014-10-14","v":8338.01},{"d":"2014-10-15","v":8144.88},{"d":"2014-10-16","v":8057.54},{"d":"2014-10-17","v":8250.1},{"d":"2014-10-20","v":8283.31},{"d":"2014-10-21","v":8404.81},{"d":"2014-10-22","v":8506.14},{"d":"2014-10-23","v":8546.08},{"d":"2014-10-24","v":8532.09},{"d":"2014-10-27","v":8520.48},{"d":"2014-10-28","v":8630.41},{"d":"2014-10-29","v":8654.47},{"d":"2014-10-30","v":8719.03},{"d":"2014-10-31","v":8837.78},{"d":"2014-11-03","v":8751.67},{"d":"2014-11-04","v":8718.02},{"d":"2014-11-05","v":8843.17},{"d":"2014-11-06","v":8863.88},{"d":"2014-11-07","v":8816.92},{"d":"2014-11-10","v":8867.53},{"d":"2014-11-11","v":8896.15},{"d":"2014-11-12","v":8867.78},{"d":"2014-11-13","v":8954.4},{"d":"2014-11-14","v":8915.31},{"d":"2014-11-17","v":8927.05},{"d":"2014-11-18","v":8972.54},{"d":"2014-11-19","v":8983.52},{"d":"2014-11-20","v":8989.94},{"d":"2014-11-21","v":9080.55},{"d":"2014-11-24","v":9058.51},{"d":"2014-11-25","v":9042.74},{"d":"2014-11-26","v":9058.94},{"d":"2014-11-27","v":9129.15},{"d":"2014-11-28","v":9150.46},{"d":"2014-12-01","v":9146.18},{"d":"2014-12-02","v":9138.56},{"d":"2014-12-03","v":9168.37},{"d":"2014-12-04","v":9118.17},{"d":"2014-12-05","v":9212.85},{"d":"2014-12-08","v":9181.24},{"d":"2014-12-09","v":9051.39},{"d":"2014-12-10","v":9020.83},{"d":"2014-12-11","v":9058.82},{"d":"2014-12-12","v":8895.35},{"d":"2014-12-15","v":8712.82},{"d":"2014-12-16","v":8795.13},{"d":"2014-12-17","v":8775.88},{"d":"2014-12-18","v":9013.11},{"d":"2014-12-19","v":8976.24},{"d":"2014-12-22","v":9033.45},{"d":"2014-12-23","v":9021.67},{"d":"2014-12-24","v":9021.67},{"d":"2014-12-25","v":9021.67},{"d":"2014-12-26","v":9021.67},{"d":"2014-12-29","v":9034.55},{"d":"2014-12-30","v":8983.37},{"d":"2014-12-31","v":8983.37},{"d":"2015-01-01","v":8983.37},{"d":"2015-01-02","v":8983.37},{"d":"2015-01-05","v":8938.85},{"d":"2015-01-06","v":8874.47},{"d":"2015-01-07","v":8900.83},{"d":"2015-01-08","v":9139.69},{"d":"2015-01-09","v":9105.7},{"d":"2015-01-12","v":9152.97},{"d":"2015-01-13","v":9285.63},{"d":"2015-01-14","v":9198.2},{"d":"2015-01-15","v":8400.61},{"d":"2015-01-16","v":7899.59},{"d":"2015-01-19","v":8152.78},{"d":"2015-01-20","v":8178.9},{"d":"2015-01-21","v":8008.55},{"d":"2015-01-22","v":7999.48},{"d":"2015-01-23","v":8161.16},{"d":"2015-01-26","v":8296.45},{"d":"2015-01-27","v":8402.82},{"d":"2015-01-28","v":8311.55},{"d":"2015-01-29","v":8435.34},{"d":"2015-01-30","v":8385.13},{"d":"2015-02-02","v":8429.2},{"d":"2015-02-03","v":8452.13},{"d":"2015-02-04","v":8608.24},{"d":"2015-02-05","v":8544.32},{"d":"2015-02-06","v":8587.99},{"d":"2015-02-09","v":8632.14},{"d":"2015-02-10","v":8620.42},{"d":"2015-02-11","v":8577.76},{"d":"2015-02-12","v":8611.03},{"d":"2015-02-13","v":8651.98},{"d":"2015-02-16","v":8712.69},{"d":"2015-02-17","v":8747.83},{"d":"2015-02-18","v":8800.71},{"d":"2015-02-19","v":8900.18},{"d":"2015-02-20","v":8892.17},{"d":"2015-02-23","v":8977.69},{"d":"2015-02-24","v":8984.61},{"d":"2015-02-25","v":8977.62},{"d":"2015-02-26","v":9049.49},{"d":"2015-02-27","v":9014.53},{"d":"2015-03-02","v":9055.69},{"d":"2015-03-03","v":8954.68},{"d":"2015-03-04","v":8992.5},{"d":"2015-03-05","v":9034.6},{"d":"2015-03-06","v":9080.03},{"d":"2015-03-09","v":9046.88},{"d":"2015-03-10","v":9023.71},{"d":"2015-03-11","v":9106.23},{"d":"2015-03-12","v":9119.81},{"d":"2015-03-13","v":9156.02},{"d":"2015-03-16","v":9237.08},{"d":"2015-03-17","v":9198.51},{"d":"2015-03-18","v":9256.24},{"d":"2015-03-19","v":9328.48},{"d":"2015-03-20","v":9396.29},{"d":"2015-03-23","v":9366.2},{"d":"2015-03-24","v":9292.68},{"d":"2015-03-25","v":9188.25},{"d":"2015-03-26","v":9082.51},{"d":"2015-03-27","v":9083.52},{"d":"2015-03-30","v":9202.18},{"d":"2015-03-31","v":9128.98},{"d":"2015-04-01","v":9137.26},{"d":"2015-04-02","v":9130.6},{"d":"2015-04-03","v":9130.6},{"d":"2015-04-06","v":9130.6},{"d":"2015-04-07","v":9260.75},{"d":"2015-04-08","v":9247.82},{"d":"2015-04-09","v":9393.38},{"d":"2015-04-10","v":9471.46},{"d":"2015-04-13","v":9430.25},{"d":"2015-04-14","v":9415.62},{"d":"2015-04-15","v":9428.55},{"d":"2015-04-16","v":9398.6},{"d":"2015-04-17","v":9245.92},{"d":"2015-04-20","v":9243.71},{"d":"2015-04-21","v":9299.43},{"d":"2015-04-22","v":9358.09},{"d":"2015-04-23","v":9338.25},{"d":"2015-04-24","v":9302.12},{"d":"2015-04-27","v":9349.18},{"d":"2015-04-28","v":9259.81},{"d":"2015-04-29","v":9105.05},{"d":"2015-04-30","v":9077.12},{"d":"2015-05-01","v":9077.12},{"d":"2015-05-04","v":9095.82},{"d":"2015-05-05","v":9024.38},{"d":"2015-05-06","v":8888.92},{"d":"2015-05-07","v":8873.55},{"d":"2015-05-08","v":9093.33},{"d":"2015-05-11","v":9117.33},{"d":"2015-05-12","v":9044.98},{"d":"2015-05-13","v":9050.66},{"d":"2015-05-14","v":9050.66},{"d":"2015-05-15","v":9109.92},{"d":"2015-05-18","v":9196.55},{"d":"2015-05-19","v":9295.62},{"d":"2015-05-20","v":9319.9},{"d":"2015-05-21","v":9365.35},{"d":"2015-05-22","v":9353.3},{"d":"2015-05-25","v":9353.3},{"d":"2015-05-26","v":9272.68},{"d":"2015-05-27","v":9396.24},{"d":"2015-05-28","v":9394.25},{"d":"2015-05-29","v":9237.79},{"d":"2015-06-01","v":9267.44},{"d":"2015-06-02","v":9204.09},{"d":"2015-06-03","v":9253.3},{"d":"2015-06-04","v":9233.65},{"d":"2015-06-05","v":9105.02},{"d":"2015-06-08","v":9060.49},{"d":"2015-06-09","v":8980.22},{"d":"2015-06-10","v":9102.7},{"d":"2015-06-11","v":9146.3},{"d":"2015-06-12","v":9026.43},{"d":"2015-06-15","v":8924.67},{"d":"2015-06-16","v":8965.4},{"d":"2015-06-17","v":8906.69},{"d":"2015-06-18","v":8880.29},{"d":"2015-06-19","v":8867.32},{"d":"2015-06-22","v":9021.37},{"d":"2015-06-23","v":9137.33},{"d":"2015-06-24","v":9081.81},{"d":"2015-06-25","v":9045.32},{"d":"2015-06-26","v":9007.5},{"d":"2015-06-29","v":8868.39},{"d":"2015-06-30","v":8780.91},{"d":"2015-07-01","v":8908.99},{"d":"2015-07-02","v":8961.48},{"d":"2015-07-03","v":8912.84},{"d":"2015-07-06","v":8862.78},{"d":"2015-07-07","v":8764.11},{"d":"2015-07-08","v":8852.43},{"d":"2015-07-09","v":8985.08},{"d":"2015-07-10","v":9134.18},{"d":"2015-07-13","v":9250.1},{"d":"2015-07-14","v":9311.07},{"d":"2015-07-15","v":9319.25},{"d":"2015-07-16","v":9458.96},{"d":"2015-07-17","v":9446.17},{"d":"2015-07-20","v":9482.62},{"d":"2015-07-21","v":9385.45},{"d":"2015-07-22","v":9289.26},{"d":"2015-07-23","v":9381.57},{"d":"2015-07-24","v":9322.97},{"d":"2015-07-27","v":9194.48},{"d":"2015-07-28","v":9275.72},{"d":"2015-07-29","v":9387.97},{"d":"2015-07-30","v":9397.69},{"d":"2015-07-31","v":9428.17},{"d":"2015-08-03","v":9468.97},{"d":"2015-08-04","v":9480.2},{"d":"2015-08-05","v":9526.79},{"d":"2015-08-06","v":9457.99},{"d":"2015-08-07","v":9408.27},{"d":"2015-08-10","v":9510.78},{"d":"2015-08-11","v":9424.41},{"d":"2015-08-12","v":9183.88},{"d":"2015-08-13","v":9325.21},{"d":"2015-08-14","v":9346.56},{"d":"2015-08-17","v":9390.46},{"d":"2015-08-18","v":9383.6},{"d":"2015-08-19","v":9251.6},{"d":"2015-08-20","v":9104.71},{"d":"2015-08-21","v":8798.57},{"d":"2015-08-24","v":8468.89},{"d":"2015-08-25","v":8758.79},{"d":"2015-08-26","v":8548.75},{"d":"2015-08-27","v":8812.58},{"d":"2015-08-28","v":8785.1},{"d":"2015-08-31","v":8824.56},{"d":"2015-09-01","v":8621.27},{"d":"2015-09-02","v":8626.34},{"d":"2015-09-03","v":8775.64},{"d":"2015-09-04","v":8652.35},{"d":"2015-09-07","v":8705.53},{"d":"2015-09-08","v":8760.95},{"d":"2015-09-09","v":8871.92},{"d":"2015-09-10","v":8778.76},{"d":"2015-09-11","v":8772.44},{"d":"2015-09-14","v":8686.17},{"d":"2015-09-15","v":8790.44},{"d":"2015-09-16","v":8871.17},{"d":"2015-09-17","v":8849.43},{"d":"2015-09-18","v":8739.22},{"d":"2015-09-21","v":8782.27},{"d":"2015-09-22","v":8475.47},{"d":"2015-09-23","v":8447.68},{"d":"2015-09-24","v":8278.07},{"d":"2015-09-25","v":8505.94},{"d":"2015-09-28","v":8381.22},{"d":"2015-09-29","v":8323.48},{"d":"2015-09-30","v":8513.41},{"d":"2015-10-01","v":8510.56},{"d":"2015-10-02","v":8515.52},{"d":"2015-10-05","v":8740.83},{"d":"2015-10-06","v":8761.68},{"d":"2015-10-07","v":8639.03},{"d":"2015-10-08","v":8674.17},{"d":"2015-10-09","v":8680.21},{"d":"2015-10-12","v":8706.11},{"d":"2015-10-13","v":8654.64},{"d":"2015-10-14","v":8573.31},{"d":"2015-10-15","v":8653.35},{"d":"2015-10-16","v":8715.73},{"d":"2015-10-19","v":8705.66},{"d":"2015-10-20","v":8650.02},{"d":"2015-10-21","v":8602.12},{"d":"2015-10-22","v":8788.92},{"d":"2015-10-23","v":8910.52},{"d":"2015-10-26","v":8907.86},{"d":"2015-10-27","v":8849.92},{"d":"2015-10-28","v":8932.64},{"d":"2015-10-29","v":8957.27},{"d":"2015-10-30","v":8938.65},{"d":"2015-11-02","v":8936.08},{"d":"2015-11-03","v":8935.5},{"d":"2015-11-04","v":8951.76},{"d":"2015-11-05","v":8990.16},{"d":"2015-11-06","v":8970.27},{"d":"2015-11-09","v":8876.67},{"d":"2015-11-10","v":8849.77},{"d":"2015-11-11","v":8884.55},{"d":"2015-11-12","v":8816.94},{"d":"2015-11-13","v":8749.84},{"d":"2015-11-16","v":8727.09},{"d":"2015-11-17","v":8952.58},{"d":"2015-11-18","v":8990.96},{"d":"2015-11-19","v":9008.65},{"d":"2015-11-20","v":9015.83},{"d":"2015-11-23","v":8924.41},{"d":"2015-11-24","v":8808.53},{"d":"2015-11-25","v":8934.48},{"d":"2015-11-26","v":8968.25},{"d":"2015-11-27","v":9002.96},{"d":"2015-11-30","v":8993.1},{"d":"2015-12-01","v":8993.24},{"d":"2015-12-02","v":9016.56},{"d":"2015-12-03","v":8852.14},{"d":"2015-12-04","v":8802.89},{"d":"2015-12-07","v":8825.28},{"d":"2015-12-08","v":8701.2},{"d":"2015-12-09","v":8624.95},{"d":"2015-12-10","v":8632.63},{"d":"2015-12-11","v":8502.06},{"d":"2015-12-14","v":8375.31},{"d":"2015-12-15","v":8581.56},{"d":"2015-12-16","v":8604.08},{"d":"2015-12-17","v":8656.3},{"d":"2015-12-18","v":8608.91},{"d":"2015-12-21","v":8544.35},{"d":"2015-12-22","v":8515.82},{"d":"2015-12-23","v":8705.74},{"d":"2015-12-24","v":8705.74},{"d":"2015-12-25","v":8705.74},{"d":"2015-12-28","v":8739.36},{"d":"2015-12-29","v":8883.01},{"d":"2015-12-30","v":8818.09},{"d":"2015-12-31","v":8818.09},{"d":"2016-01-01","v":8818.09},{"d":"2016-01-04","v":8656.31},{"d":"2016-01-05","v":8701.46},{"d":"2016-01-06","v":8613.42},{"d":"2016-01-07","v":8449.86},{"d":"2016-01-08","v":8257.28},{"d":"2016-01-11","v":8213.52},{"d":"2016-01-12","v":8332.04},{"d":"2016-01-13","v":8414.83},{"d":"2016-01-14","v":8305.47},{"d":"2016-01-15","v":8107.13},{"d":"2016-01-18","v":8099.08},{"d":"2016-01-19","v":8223.76},{"d":"2016-01-20","v":7966.34},{"d":"2016-01-21","v":8035.06},{"d":"2016-01-22","v":8271.11},{"d":"2016-01-25","v":8253.34},{"d":"2016-01-26","v":8314.47},{"d":"2016-01-27","v":8322.68},{"d":"2016-01-28","v":8153.27},{"d":"2016-01-29","v":8319.81},{"d":"2016-02-01","v":8310.99},{"d":"2016-02-02","v":8196.99},{"d":"2016-02-03","v":8123.74},{"d":"2016-02-04","v":8003.4},{"d":"2016-02-05","v":7960.13},{"d":"2016-02-08","v":7759.21},{"d":"2016-02-09","v":7583.27},{"d":"2016-02-10","v":7731.93},{"d":"2016-02-11","v":7496.62},{"d":"2016-02-12","v":7656.6},{"d":"2016-02-15","v":7848.33},{"d":"2016-02-16","v":7813.79},{"d":"2016-02-17","v":7946.19},{"d":"2016-02-18","v":7916.61},{"d":"2016-02-19","v":7863.36},{"d":"2016-02-22","v":7961.49},{"d":"2016-02-23","v":7807.01},{"d":"2016-02-24","v":7689.56},{"d":"2016-02-25","v":7794.05},{"d":"2016-02-26","v":7877.03},{"d":"2016-02-29","v":7843.63},{"d":"2016-03-01","v":7962.22},{"d":"2016-03-02","v":8039.89},{"d":"2016-03-03","v":7950.84},{"d":"2016-03-04","v":7982.57},{"d":"2016-03-07","v":8019.13},{"d":"2016-03-08","v":7971.15},{"d":"2016-03-09","v":7975.81},{"d":"2016-03-10","v":7893.66},{"d":"2016-03-11","v":7998.43},{"d":"2016-03-14","v":8018.36},{"d":"2016-03-15","v":7953.93},{"d":"2016-03-16","v":7916.43},{"d":"2016-03-17","v":7861.79},{"d":"2016-03-18","v":7813.68},{"d":"2016-03-21","v":7849.57},{"d":"2016-03-22","v":7853.07},{"d":"2016-03-23","v":7894.36},{"d":"2016-03-24","v":7775.58},{"d":"2016-03-25","v":7775.58},{"d":"2016-03-28","v":7775.58},{"d":"2016-03-29","v":7797.65},{"d":"2016-03-30","v":7845.08},{"d":"2016-03-31","v":7807.89},{"d":"2016-04-01","v":7688.34},{"d":"2016-04-04","v":7731.81},{"d":"2016-04-05","v":7673.67},{"d":"2016-04-06","v":7768.23},{"d":"2016-04-07","v":7761.35},{"d":"2016-04-08","v":7817.55},{"d":"2016-04-11","v":7751.58},{"d":"2016-04-12","v":7788.78},{"d":"2016-04-13","v":7934.46},{"d":"2016-04-14","v":8021},{"d":"2016-04-15","v":8014.6},{"d":"2016-04-18","v":8044.6},{"d":"2016-04-19","v":8152.76},{"d":"2016-04-20","v":8186.97},{"d":"2016-04-21","v":8159.67},{"d":"2016-04-22","v":8109.44},{"d":"2016-04-25","v":8079.89},{"d":"2016-04-26","v":8077.18},{"d":"2016-04-27","v":8096.76},{"d":"2016-04-28","v":8099.42},{"d":"2016-04-29","v":7960.85},{"d":"2016-05-02","v":7977.77},{"d":"2016-05-03","v":7850.68},{"d":"2016-05-04","v":7752.97},{"d":"2016-05-05","v":7752.97},{"d":"2016-05-06","v":7735.6},{"d":"2016-05-09","v":7824.95},{"d":"2016-05-10","v":7934.93},{"d":"2016-05-11","v":7937.88},{"d":"2016-05-12","v":7885.85},{"d":"2016-05-13","v":7925.76},{"d":"2016-05-16","v":7925.76},{"d":"2016-05-17","v":7906.76},{"d":"2016-05-18","v":7973.93},{"d":"2016-05-19","v":7908.79},{"d":"2016-05-20","v":7997.3},{"d":"2016-05-23","v":8038.46},{"d":"2016-05-24","v":8125.24},{"d":"2016-05-25","v":8167.61},{"d":"2016-05-26","v":8229.55},{"d":"2016-05-27","v":8292.45},{"d":"2016-05-30","v":8277.83},{"d":"2016-05-31","v":8216.42},{"d":"2016-06-01","v":8185.53},{"d":"2016-06-02","v":8205.82},{"d":"2016-06-03","v":8148.4},{"d":"2016-06-06","v":8165.98},{"d":"2016-06-07","v":8215.78},{"d":"2016-06-08","v":8143.76},{"d":"2016-06-09","v":8076.35},{"d":"2016-06-10","v":7922.71},{"d":"2016-06-13","v":7782.35},{"d":"2016-06-14","v":7638.77},{"d":"2016-06-15","v":7679.49},{"d":"2016-06-16","v":7634.66},{"d":"2016-06-17","v":7713.61},{"d":"2016-06-20","v":7900.22},{"d":"2016-06-21","v":7935.75},{"d":"2016-06-22","v":7972.14},{"d":"2016-06-23","v":8023.05},{"d":"2016-06-24","v":7747.18},{"d":"2016-06-27","v":7594.49},{"d":"2016-06-28","v":7773.8},{"d":"2016-06-29","v":7978.96},{"d":"2016-06-30","v":8020.15},{"d":"2016-07-01","v":8085.21},{"d":"2016-07-04","v":8056.71},{"d":"2016-07-05","v":7941.67},{"d":"2016-07-06","v":7898.21},{"d":"2016-07-07","v":7964.23},{"d":"2016-07-08","v":8037.94},{"d":"2016-07-11","v":8117.11},{"d":"2016-07-12","v":8143.13},{"d":"2016-07-13","v":8142.33},{"d":"2016-07-14","v":8174.02},{"d":"2016-07-15","v":8156.26},{"d":"2016-07-18","v":8161.6},{"d":"2016-07-19","v":8111.48},{"d":"2016-07-20","v":8197.43},{"d":"2016-07-21","v":8182.45},{"d":"2016-07-22","v":8194.73},{"d":"2016-07-25","v":8194.41},{"d":"2016-07-26","v":8227.2},{"d":"2016-07-27","v":8221.33},{"d":"2016-07-28","v":8095.07},{"d":"2016-07-29","v":8127.2},{"d":"2016-08-01","v":8127.2},{"d":"2016-08-02","v":8011.24},{"d":"2016-08-03","v":8010.1},{"d":"2016-08-04","v":8081.14},{"d":"2016-08-05","v":8194.34},{"d":"2016-08-08","v":8168.84},{"d":"2016-08-09","v":8229.42},{"d":"2016-08-10","v":8208.9},{"d":"2016-08-11","v":8296.14},{"d":"2016-08-12","v":8295.04},{"d":"2016-08-15","v":8305.28},{"d":"2016-08-16","v":8215.45},{"d":"2016-08-17","v":8153.8},{"d":"2016-08-18","v":8189.73},{"d":"2016-08-19","v":8127.28},{"d":"2016-08-22","v":8157.85},{"d":"2016-08-23","v":8201.61},{"d":"2016-08-24","v":8199.83},{"d":"2016-08-25","v":8141.28},{"d":"2016-08-26","v":8168.32},{"d":"2016-08-29","v":8184.09},{"d":"2016-08-30","v":8236.01},{"d":"2016-08-31","v":8202.13},{"d":"2016-09-01","v":8142.64},{"d":"2016-09-02","v":8294.3},{"d":"2016-09-05","v":8310.37},{"d":"2016-09-06","v":8304.34},{"d":"2016-09-07","v":8320.99},{"d":"2016-09-08","v":8315.2},{"d":"2016-09-09","v":8264.13},{"d":"2016-09-12","v":8206.2},{"d":"2016-09-13","v":8174.73},{"d":"2016-09-14","v":8162.65},{"d":"2016-09-15","v":8184.84},{"d":"2016-09-16","v":8130.44},{"d":"2016-09-19","v":8195.71},{"d":"2016-09-20","v":8237.54},{"d":"2016-09-21","v":8226.47},{"d":"2016-09-22","v":8307.63},{"d":"2016-09-23","v":8272.89},{"d":"2016-09-26","v":8165.05},{"d":"2016-09-27","v":8175.42},{"d":"2016-09-28","v":8220.07},{"d":"2016-09-29","v":8164.2},{"d":"2016-09-30","v":8139.01},{"d":"2016-10-03","v":8166.32},{"d":"2016-10-04","v":8230.73},{"d":"2016-10-05","v":8195.23},{"d":"2016-10-06","v":8170.44},{"d":"2016-10-07","v":8124.59},{"d":"2016-10-10","v":8172.22},{"d":"2016-10-11","v":8135.15},{"d":"2016-10-12","v":8068.56},{"d":"2016-10-13","v":7999.93},{"d":"2016-10-14","v":8089.91},{"d":"2016-10-17","v":8000.96},{"d":"2016-10-18","v":8074.69},{"d":"2016-10-19","v":8093.78},{"d":"2016-10-20","v":8069.27},{"d":"2016-10-21","v":8034.86},{"d":"2016-10-24","v":7991.88},{"d":"2016-10-25","v":7929.87},{"d":"2016-10-26","v":7892.77},{"d":"2016-10-27","v":7924.39},{"d":"2016-10-28","v":7908.57},{"d":"2016-10-31","v":7827.74},{"d":"2016-11-01","v":7761.34},{"d":"2016-11-02","v":7700.41},{"d":"2016-11-03","v":7640.94},{"d":"2016-11-04","v":7593.2},{"d":"2016-11-07","v":7735.22},{"d":"2016-11-08","v":7744.03},{"d":"2016-11-09","v":7897.84},{"d":"2016-11-10","v":7928.77},{"d":"2016-11-11","v":7880.29},{"d":"2016-11-14","v":7900.57},{"d":"2016-11-15","v":7909.2},{"d":"2016-11-16","v":7914.02},{"d":"2016-11-17","v":7964.68},{"d":"2016-11-18","v":7904.55},{"d":"2016-11-21","v":7849.86},{"d":"2016-11-22","v":7741.82},{"d":"2016-11-23","v":7752.24},{"d":"2016-11-24","v":7798.5},{"d":"2016-11-25","v":7881.53},{"d":"2016-11-28","v":7823.23},{"d":"2016-11-29","v":7845.01},{"d":"2016-11-30","v":7875.19},{"d":"2016-12-01","v":7779.11},{"d":"2016-12-02","v":7784.01},{"d":"2016-12-05","v":7845.68},{"d":"2016-12-06","v":7912.39},{"d":"2016-12-07","v":7930.25},{"d":"2016-12-08","v":7953.68},{"d":"2016-12-09","v":8099.63},{"d":"2016-12-12","v":8040.09},{"d":"2016-12-13","v":8162.53},{"d":"2016-12-14","v":8140.41},{"d":"2016-12-15","v":8214.3},{"d":"2016-12-16","v":8227.72},{"d":"2016-12-19","v":8234.49},{"d":"2016-12-20","v":8243},{"d":"2016-12-21","v":8233.45},{"d":"2016-12-22","v":8237.98},{"d":"2016-12-23","v":8232.64},{"d":"2016-12-26","v":8232.64},{"d":"2016-12-27","v":8259.45},{"d":"2016-12-28","v":8256.61},{"d":"2016-12-29","v":8251.13},{"d":"2016-12-30","v":8219.87},{"d":"2017-01-02","v":8219.87},{"d":"2017-01-03","v":8316.18},{"d":"2017-01-04","v":8354.81},{"d":"2017-01-05","v":8392.49},{"d":"2017-01-06","v":8417.46},{"d":"2017-01-09","v":8424.86},{"d":"2017-01-10","v":8449.19},{"d":"2017-01-11","v":8427.15},{"d":"2017-01-12","v":8375.02},{"d":"2017-01-13","v":8452.19},{"d":"2017-01-16","v":8362.6},{"d":"2017-01-17","v":8304.1},{"d":"2017-01-18","v":8312.42},{"d":"2017-01-19","v":8273.08},{"d":"2017-01-20","v":8275.13},{"d":"2017-01-23","v":8229.01},{"d":"2017-01-24","v":8246.66},{"d":"2017-01-25","v":8387.55},{"d":"2017-01-26","v":8405.48},{"d":"2017-01-27","v":8379.57},{"d":"2017-01-30","v":8320.83},{"d":"2017-01-31","v":8291.69},{"d":"2017-02-01","v":8329.17},{"d":"2017-02-02","v":8276.7},{"d":"2017-02-03","v":8350.84},{"d":"2017-02-06","v":8330.93},{"d":"2017-02-07","v":8370.14},{"d":"2017-02-08","v":8378.73},{"d":"2017-02-09","v":8437.54},{"d":"2017-02-10","v":8456.22},{"d":"2017-02-13","v":8462.88},{"d":"2017-02-14","v":8426.15},{"d":"2017-02-15","v":8486.27},{"d":"2017-02-16","v":8467.52},{"d":"2017-02-17","v":8506.49},{"d":"2017-02-20","v":8514.52},{"d":"2017-02-21","v":8567.18},{"d":"2017-02-22","v":8585.85},{"d":"2017-02-23","v":8569.36},{"d":"2017-02-24","v":8525.62},{"d":"2017-02-27","v":8520.56},{"d":"2017-02-28","v":8545.81},{"d":"2017-03-01","v":8634.7},{"d":"2017-03-02","v":8661.63},{"d":"2017-03-03","v":8670.06},{"d":"2017-03-06","v":8664.8},{"d":"2017-03-07","v":8623.97},{"d":"2017-03-08","v":8626.65},{"d":"2017-03-09","v":8639.7},{"d":"2017-03-10","v":8669.97},{"d":"2017-03-13","v":8683.05},{"d":"2017-03-14","v":8663.54},{"d":"2017-03-15","v":8688.86},{"d":"2017-03-16","v":8667.48},{"d":"2017-03-17","v":8698.53},{"d":"2017-03-20","v":8695.04},{"d":"2017-03-21","v":8614.86},{"d":"2017-03-22","v":8567.88},{"d":"2017-03-23","v":8628.64},{"d":"2017-03-24","v":8613.64},{"d":"2017-03-27","v":8594.54},{"d":"2017-03-28","v":8597.02},{"d":"2017-03-29","v":8661.53},{"d":"2017-03-30","v":8704.39},{"d":"2017-03-31","v":8658.89},{"d":"2017-04-03","v":8633.86},{"d":"2017-04-04","v":8646.99},{"d":"2017-04-05","v":8640.51},{"d":"2017-04-06","v":8638.37},{"d":"2017-04-07","v":8640.91},{"d":"2017-04-10","v":8616.68},{"d":"2017-04-11","v":8641.55},{"d":"2017-04-12","v":8663.77},{"d":"2017-04-13","v":8629.02},{"d":"2017-04-14","v":8629.02},{"d":"2017-04-17","v":8629.02},{"d":"2017-04-18","v":8529.28},{"d":"2017-04-19","v":8532.27},{"d":"2017-04-20","v":8557.87},{"d":"2017-04-21","v":8553.99},{"d":"2017-04-24","v":8711.32},{"d":"2017-04-25","v":8775.24},{"d":"2017-04-26","v":8830.29},{"d":"2017-04-27","v":8844.78},{"d":"2017-04-28","v":8812.67},{"d":"2017-05-01","v":8812.67},{"d":"2017-05-02","v":8868.56},{"d":"2017-05-03","v":8891.89},{"d":"2017-05-04","v":8980.02},{"d":"2017-05-05","v":9016.66},{"d":"2017-05-08","v":9039.61},{"d":"2017-05-09","v":9113.83},{"d":"2017-05-10","v":9089.8},{"d":"2017-05-11","v":9064.88},{"d":"2017-05-12","v":9123.41},{"d":"2017-05-15","v":9108.25},{"d":"2017-05-16","v":9127.61},{"d":"2017-05-17","v":9001.6},{"d":"2017-05-18","v":8938.37},{"d":"2017-05-19","v":9022.51},{"d":"2017-05-22","v":9084.78},{"d":"2017-05-23","v":9061.76},{"d":"2017-05-24","v":9035.09},{"d":"2017-05-25","v":9035.09},{"d":"2017-05-26","v":9042.03},{"d":"2017-05-29","v":9031.96},{"d":"2017-05-30","v":9007.54},{"d":"2017-05-31","v":9016.64},{"d":"2017-06-01","v":9024.92},{"d":"2017-06-02","v":9043.96},{"d":"2017-06-05","v":9043.96},{"d":"2017-06-06","v":8908.27},{"d":"2017-06-07","v":8876.73},{"d":"2017-06-08","v":8811.62},{"d":"2017-06-09","v":8845.85},{"d":"2017-06-12","v":8807.85},{"d":"2017-06-13","v":8867.07},{"d":"2017-06-14","v":8849.4},{"d":"2017-06-15","v":8853.01},{"d":"2017-06-16","v":8963.29},{"d":"2017-06-19","v":9030.3},{"d":"2017-06-20","v":9023.55},{"d":"2017-06-21","v":8985.61},{"d":"2017-06-22","v":9051.27},{"d":"2017-06-23","v":9032.89},{"d":"2017-06-26","v":9121.22},{"d":"2017-06-27","v":9072.92},{"d":"2017-06-28","v":9072.92}]}},{"instrumentId":71,"timeSeries":{"entries":[{"d":"2010-01-01","v":4398.666408},{"d":"2010-01-04","v":4480.07499},{"d":"2010-01-05","v":4472.902746},{"d":"2010-01-06","v":4455.952113},{"d":"2010-01-07","v":4452.216503000001},{"d":"2010-01-08","v":4451.1778575},{"d":"2010-01-11","v":4439.652464},{"d":"2010-01-12","v":4393.7407955},{"d":"2010-01-13","v":4401.047536499999},{"d":"2010-01-14","v":4415.9511555},{"d":"2010-01-15","v":4337.8978375},{"d":"2010-01-18","v":4361.2314215},{"d":"2010-01-19","v":4403.654187},{"d":"2010-01-20","v":4292.18569},{"d":"2010-01-21","v":4204.8257875},{"d":"2010-01-22","v":4175.62776},{"d":"2010-01-25","v":4129.959395},{"d":"2010-01-26","v":4164.836859},{"d":"2010-01-27","v":4104.8646100000005},{"d":"2010-01-28","v":4022.3695685},{"d":"2010-01-29","v":4082.6343075},{"d":"2010-02-01","v":4109.9072415},{"d":"2010-02-02","v":4171.010238500001},{"d":"2010-02-03","v":4124.8801575},{"d":"2010-02-04","v":3965.4666424999996},{"d":"2010-02-05","v":3862.58961},{"d":"2010-02-08","v":3903.3180644999998},{"d":"2010-02-09","v":3917.1218185},{"d":"2010-02-10","v":3959.6642965},{"d":"2010-02-11","v":3928.3084124999996},{"d":"2010-02-12","v":3920.3571910000005},{"d":"2010-02-15","v":3933.0186734999997},{"d":"2010-02-16","v":3992.3218595},{"d":"2010-02-17","v":4051.5301875},{"d":"2010-02-18","v":4072.015395},{"d":"2010-02-19","v":4090.4713595},{"d":"2010-02-22","v":4064.8062779999996},{"d":"2010-02-23","v":3997.9640655000003},{"d":"2010-02-24","v":4002.1890824999996},{"d":"2010-02-25","v":3928.2460069999997},{"d":"2010-02-26","v":3991.3423394999995},{"d":"2010-03-01","v":4057.9850849999993},{"d":"2010-03-02","v":4092.0095054999997},{"d":"2010-03-03","v":4128.7435225},{"d":"2010-03-04","v":4119.531884999999},{"d":"2010-03-05","v":4210.701824},{"d":"2010-03-08","v":4212.8331634999995},{"d":"2010-03-09","v":4212.3181975},{"d":"2010-03-10","v":4251.36075},{"d":"2010-03-11","v":4231.979222999999},{"d":"2010-03-12","v":4220.446914},{"d":"2010-03-15","v":4168.4691825},{"d":"2010-03-16","v":4220.7180284999995},{"d":"2010-03-17","v":4244.9765765},{"d":"2010-03-18","v":4193.891669},{"d":"2010-03-19","v":4162.4704825},{"d":"2010-03-22","v":4147.5035625},{"d":"2010-03-23","v":4152.5844099999995},{"d":"2010-03-24","v":4149.875457},{"d":"2010-03-25","v":4204.123744500001},{"d":"2010-03-26","v":4200.691649},{"d":"2010-03-29","v":4221.2478034999995},{"d":"2010-03-30","v":4205.94716},{"d":"2010-03-31","v":4172.6528180000005},{"d":"2010-04-01","v":4265.063075},{"d":"2010-04-02","v":4269.530825},{"d":"2010-04-05","v":4266.850175},{"d":"2010-04-06","v":4280.8002055},{"d":"2010-04-07","v":4261.291881},{"d":"2010-04-08","v":4217.948500500001},{"d":"2010-04-09","v":4306.955675},{"d":"2010-04-12","v":4323.6615345},{"d":"2010-04-13","v":4287.974988},{"d":"2010-04-14","v":4318.7790725},{"d":"2010-04-15","v":4319.6882025},{"d":"2010-04-16","v":4226.9959325},{"d":"2010-04-19","v":4215.791431500001},{"d":"2010-04-20","v":4284.1487825},{"d":"2010-04-21","v":4222.936446},{"d":"2010-04-22","v":4151.5220725},{"d":"2010-04-23","v":4188.5091885},{"d":"2010-04-26","v":4228.26564},{"d":"2010-04-27","v":4068.113679},{"d":"2010-04-28","v":3997.232663},{"d":"2010-04-29","v":4057.362358},{"d":"2010-04-30","v":4035.0111070000003},{"d":"2010-05-03","v":4034.777075},{"d":"2010-05-04","v":3879.788118},{"d":"2010-05-05","v":3839.035005},{"d":"2010-05-06","v":3672.5564535},{"d":"2010-05-07","v":3534.0044299999995},{"d":"2010-05-10","v":3915.0028544999996},{"d":"2010-05-11","v":3837.553116},{"d":"2010-05-12","v":3877.3594215},{"d":"2010-05-13","v":3872.0194425},{"d":"2010-05-14","v":3689.726832},{"d":"2010-05-17","v":3695.669049},{"d":"2010-05-18","v":3778.7081945},{"d":"2010-05-19","v":3745.463478},{"d":"2010-05-20","v":3690.045359},{"d":"2010-05-21","v":3721.363317},{"d":"2010-05-24","v":3665.6171695},{"d":"2010-05-25","v":3555.693225},{"d":"2010-05-26","v":3571.7014270000004},{"d":"2010-05-27","v":3728.266056},{"d":"2010-05-28","v":3718.108241},{"d":"2010-05-31","v":3712.050746},{"d":"2010-06-01","v":3683.4885269999995},{"d":"2010-06-02","v":3680.6308089999998},{"d":"2010-06-03","v":3706.3948279999995},{"d":"2010-06-04","v":3555.2356775000003},{"d":"2010-06-07","v":3507.6769064999994},{"d":"2010-06-08","v":3465.084742},{"d":"2010-06-09","v":3518.886518},{"d":"2010-06-10","v":3611.930967},{"d":"2010-06-11","v":3673.4509285},{"d":"2010-06-14","v":3745.439295},{"d":"2010-06-15","v":3795.3501750000005},{"d":"2010-06-16","v":3784.3362235},{"d":"2010-06-17","v":3756.2120219999997},{"d":"2010-06-18","v":3758.612715},{"d":"2010-06-21","v":3792.3914865},{"d":"2010-06-22","v":3731.6359315},{"d":"2010-06-23","v":3680.82708},{"d":"2010-06-24","v":3593.799486},{"d":"2010-06-25","v":3555.9291624999996},{"d":"2010-06-28","v":3562.0072825},{"d":"2010-06-29","v":3370.9177410000007},{"d":"2010-06-30","v":3393.0510860000004},{"d":"2010-07-01","v":3341.1151575},{"d":"2010-07-02","v":3368.990134},{"d":"2010-07-05","v":3348.3292245000002},{"d":"2010-07-06","v":3449.9004165},{"d":"2010-07-07","v":3501.4994685},{"d":"2010-07-08","v":3552.338045},{"d":"2010-07-09","v":3584.89846},{"d":"2010-07-12","v":3586.3330635},{"d":"2010-07-13","v":3674.2564185},{"d":"2010-07-14","v":3668.973868},{"d":"2010-07-15","v":3640.8202105},{"d":"2010-07-16","v":3594.1934655},{"d":"2010-07-19","v":3596.88765},{"d":"2010-07-20","v":3563.2485},{"d":"2010-07-21","v":3537.088776},{"d":"2010-07-22","v":3649.9338974999996},{"d":"2010-07-23","v":3702.5033645000003},{"d":"2010-07-26","v":3736.81522},{"d":"2010-07-27","v":3816.2476455},{"d":"2010-07-28","v":3796.6242805},{"d":"2010-07-29","v":3749.6283065},{"d":"2010-07-30","v":3724.2374409999998},{"d":"2010-08-02","v":3864.2562725000003},{"d":"2010-08-03","v":3875.9428014999994},{"d":"2010-08-04","v":3915.137118},{"d":"2010-08-05","v":3889.702431},{"d":"2010-08-06","v":3834.2384970000003},{"d":"2010-08-09","v":3921.8475805000003},{"d":"2010-08-10","v":3866.687619},{"d":"2010-08-11","v":3711.2593759999995},{"d":"2010-08-12","v":3664.3047374999996},{"d":"2010-08-13","v":3630.9171284999998},{"d":"2010-08-16","v":3596.1459975000002},{"d":"2010-08-17","v":3679.0447065},{"d":"2010-08-18","v":3656.2679669999998},{"d":"2010-08-19","v":3539.185211},{"d":"2010-08-20","v":3475.115113},{"d":"2010-08-23","v":3504.1932380000003},{"d":"2010-08-24","v":3407.399255},{"d":"2010-08-25","v":3374.09897},{"d":"2010-08-26","v":3394.5618134999995},{"d":"2010-08-27","v":3449.5725075},{"d":"2010-08-30","v":3399.0552585000005},{"d":"2010-08-31","v":3376.1300924999996},{"d":"2010-09-01","v":3531.6159255000002},{"d":"2010-09-02","v":3528.2536455},{"d":"2010-09-03","v":3599.6209725000003},{"d":"2010-09-06","v":3584.4988},{"d":"2010-09-07","v":3498.26449},{"d":"2010-09-08","v":3542.2812075},{"d":"2010-09-09","v":3587.2478775},{"d":"2010-09-10","v":3593.5279800000003},{"d":"2010-09-13","v":3639.705603},{"d":"2010-09-14","v":3629.7479744999996},{"d":"2010-09-15","v":3647.058954},{"d":"2010-09-16","v":3698.1013105},{"d":"2010-09-17","v":3634.6272655},{"d":"2010-09-20","v":3679.7655765000004},{"d":"2010-09-21","v":3692.2991875000002},{"d":"2010-09-22","v":3640.1254095},{"d":"2010-09-23","v":3594.2886945},{"d":"2010-09-24","v":3710.5872875000005},{"d":"2010-09-27","v":3679.6089655},{"d":"2010-09-28","v":3679.284851},{"d":"2010-09-29","v":3663.7193745000004},{"d":"2010-09-30","v":3683.422555},{"d":"2010-10-01","v":3670.1614845},{"d":"2010-10-04","v":3587.089611},{"d":"2010-10-05","v":3688.88436},{"d":"2010-10-06","v":3723.6710000000003},{"d":"2010-10-07","v":3747.9355680000003},{"d":"2010-10-08","v":3739.9968609999996},{"d":"2010-10-11","v":3734.1797059999994},{"d":"2010-10-12","v":3698.5480875},{"d":"2010-10-13","v":3800.5138725},{"d":"2010-10-14","v":3805.3505925},{"d":"2010-10-15","v":3807.3847525},{"d":"2010-10-18","v":3812.9805359999996},{"d":"2010-10-19","v":3784.2888875},{"d":"2010-10-20","v":3829.1636320000002},{"d":"2010-10-21","v":3882.8769735},{"d":"2010-10-22","v":3925.6725269999997},{"d":"2010-10-25","v":3891.716844},{"d":"2010-10-26","v":3896.7209175},{"d":"2010-10-27","v":3858.621525},{"d":"2010-10-28","v":3896.2419525000005},{"d":"2010-10-29","v":3898.0630484999997},{"d":"2010-11-01","v":3910.5741414999998},{"d":"2010-11-02","v":3932.0290935000003},{"d":"2010-11-03","v":3885.1897394999996},{"d":"2010-11-04","v":3928.7266515},{"d":"2010-11-05","v":3879.2116690000003},{"d":"2010-11-08","v":3854.681638},{"d":"2010-11-09","v":3851.488736},{"d":"2010-11-10","v":3804.0123344999993},{"d":"2010-11-11","v":3773.1668939999995},{"d":"2010-11-12","v":3789.2533964999993},{"d":"2010-11-15","v":3809.9442974999997},{"d":"2010-11-16","v":3738.0034375},{"d":"2010-11-17","v":3760.2424549999996},{"d":"2010-11-18","v":3879.686524},{"d":"2010-11-19","v":3860.9713125},{"d":"2010-11-22","v":3784.3253514999997},{"d":"2010-11-23","v":3653.6347375},{"d":"2010-11-24","v":3663.340065},{"d":"2010-11-25","v":3691.7565075},{"d":"2010-11-26","v":3635.914512},{"d":"2010-11-29","v":3503.254516},{"d":"2010-11-30","v":3454.3725194999997},{"d":"2010-12-01","v":3583.8862289999997},{"d":"2010-12-02","v":3649.6008884999997},{"d":"2010-12-03","v":3634.7751764999994},{"d":"2010-12-06","v":3621.03021},{"d":"2010-12-07","v":3672.0098109999994},{"d":"2010-12-08","v":3686.1999674999997},{"d":"2010-12-09","v":3696.899994},{"d":"2010-12-10","v":3685.0000575000004},{"d":"2010-12-13","v":3701.7016679999997},{"d":"2010-12-14","v":3674.5273635},{"d":"2010-12-15","v":3635.0473094999998},{"d":"2010-12-16","v":3635.4839500000003},{"d":"2010-12-17","v":3604.6700865},{"d":"2010-12-20","v":3595.5882079999997},{"d":"2010-12-21","v":3611.9170954999995},{"d":"2010-12-22","v":3579.1460175},{"d":"2010-12-23","v":3602.277126},{"d":"2010-12-24","v":3615.4888020000003},{"d":"2010-12-27","v":3572.7086400000003},{"d":"2010-12-28","v":3524.585185},{"d":"2010-12-29","v":3545.9971015},{"d":"2010-12-30","v":3489.15072},{"d":"2010-12-31","v":3483.4843860000005},{"d":"2011-01-03","v":3540.2013239999997},{"d":"2011-01-04","v":3588.489289},{"d":"2011-01-05","v":3599.2748609999994},{"d":"2011-01-06","v":3560.1777075},{"d":"2011-01-07","v":3505.9597125},{"d":"2011-01-10","v":3459.796772},{"d":"2011-01-11","v":3532.8049499999997},{"d":"2011-01-12","v":3653.8785009999997},{"d":"2011-01-13","v":3753.277626},{"d":"2011-01-14","v":3767.7540599999998},{"d":"2011-01-17","v":3729.6812820000005},{"d":"2011-01-18","v":3799.113395},{"d":"2011-01-19","v":3760.101548},{"d":"2011-01-20","v":3813.4036630000005},{"d":"2011-01-21","v":3877.620496},{"d":"2011-01-24","v":3855.3504989999997},{"d":"2011-01-25","v":3813.169976},{"d":"2011-01-26","v":3833.4814260000003},{"d":"2011-01-27","v":3883.0872999999997},{"d":"2011-01-28","v":3787.785486},{"d":"2011-01-31","v":3818.748227},{"d":"2011-02-01","v":3888.7073729999997},{"d":"2011-02-02","v":3910.7858699999997},{"d":"2011-02-03","v":3860.8870609999994},{"d":"2011-02-04","v":3895.2875895},{"d":"2011-02-07","v":3933.865404},{"d":"2011-02-08","v":3993.5855},{"d":"2011-02-09","v":3985.822395},{"d":"2011-02-10","v":3987.3923879999998},{"d":"2011-02-11","v":3988.3879375},{"d":"2011-02-14","v":3949.7011490000004},{"d":"2011-02-15","v":3952.4774549999997},{"d":"2011-02-16","v":3984.6295920000002},{"d":"2011-02-17","v":3959.998588},{"d":"2011-02-18","v":3968.6114},{"d":"2011-02-21","v":3900.377832},{"d":"2011-02-22","v":3822.6898954999997},{"d":"2011-02-23","v":3791.605598},{"d":"2011-02-24","v":3767.0712055},{"d":"2011-02-25","v":3809.6317750000003},{"d":"2011-02-28","v":3863.986616},{"d":"2011-03-01","v":3814.8565125},{"d":"2011-03-02","v":3789.1872200000003},{"d":"2011-03-03","v":3862.5358539999997},{"d":"2011-03-04","v":3815.059248},{"d":"2011-03-07","v":3794.136906},{"d":"2011-03-08","v":3829.193271},{"d":"2011-03-09","v":3794.510208},{"d":"2011-03-10","v":3742.785699},{"d":"2011-03-11","v":3727.651584},{"d":"2011-03-14","v":3688.3486519999997},{"d":"2011-03-15","v":3566.8386199999995},{"d":"2011-03-16","v":3409.5776579999997},{"d":"2011-03-17","v":3508.889904},{"d":"2011-03-18","v":3573.2841255},{"d":"2011-03-21","v":3681.2903079999996},{"d":"2011-03-22","v":3660.411738},{"d":"2011-03-23","v":3670.494138},{"d":"2011-03-24","v":3745.905283},{"d":"2011-03-25","v":3772.0647145},{"d":"2011-03-28","v":3763.975326},{"d":"2011-03-29","v":3780.5703375},{"d":"2011-03-30","v":3810.177722},{"d":"2011-03-31","v":3788.6949105},{"d":"2011-04-01","v":3894.9064860000003},{"d":"2011-04-04","v":3880.2789600000006},{"d":"2011-04-05","v":3882.5780720000002},{"d":"2011-04-06","v":3912.399142},{"d":"2011-04-07","v":3884.508483},{"d":"2011-04-08","v":3917.515483},{"d":"2011-04-11","v":3892.535388},{"d":"2011-04-12","v":3807.7771215000002},{"d":"2011-04-13","v":3817.7166169999996},{"d":"2011-04-14","v":3773.049618},{"d":"2011-04-15","v":3757.8390175000004},{"d":"2011-04-18","v":3629.8674180000003},{"d":"2011-04-19","v":3685.1738560000003},{"d":"2011-04-20","v":3769.5211289999997},{"d":"2011-04-21","v":3787.386555},{"d":"2011-04-22","v":3789.4419650000004},{"d":"2011-04-25","v":3771.8241650000004},{"d":"2011-04-26","v":3781.235352},{"d":"2011-04-27","v":3852.4059420000003},{"d":"2011-04-28","v":3892.8039489999996},{"d":"2011-04-29","v":3859.6696875},{"d":"2011-05-02","v":3857.2465354999995},{"d":"2011-05-03","v":3830.5979129999996},{"d":"2011-05-04","v":3769.286737},{"d":"2011-05-05","v":3702.6584080000002},{"d":"2011-05-06","v":3717.553455},{"d":"2011-05-09","v":3635.11088},{"d":"2011-05-10","v":3726.2365069999996},{"d":"2011-05-11","v":3704.0780055},{"d":"2011-05-12","v":3673.2952125},{"d":"2011-05-13","v":3647.3407299999994},{"d":"2011-05-16","v":3607.5441855000004},{"d":"2011-05-17","v":3570.69128},{"d":"2011-05-18","v":3599.751785},{"d":"2011-05-19","v":3642.58959},{"d":"2011-05-20","v":3544.5004610000005},{"d":"2011-05-23","v":3468.6546510000003},{"d":"2011-05-24","v":3475.9558795},{"d":"2011-05-25","v":3462.037202},{"d":"2011-05-26","v":3423.8998780000006},{"d":"2011-05-27","v":3431.06883},{"d":"2011-05-30","v":3426.036799},{"d":"2011-05-31","v":3518.301352},{"d":"2011-06-01","v":3413.833918},{"d":"2011-06-02","v":3398.074484},{"d":"2011-06-03","v":3402.2958335000003},{"d":"2011-06-06","v":3366.9275414999997},{"d":"2011-06-07","v":3408.7506999999996},{"d":"2011-06-08","v":3354.8987429999997},{"d":"2011-06-09","v":3391.667802},{"d":"2011-06-10","v":3306.783281},{"d":"2011-06-13","v":3298.9207675},{"d":"2011-06-14","v":3393.611755},{"d":"2011-06-15","v":3302.793225},{"d":"2011-06-16","v":3290.2605689999996},{"d":"2011-06-17","v":3366.3883299999998},{"d":"2011-06-20","v":3326.3287045},{"d":"2011-06-21","v":3393.7702879999997},{"d":"2011-06-22","v":3364.8450195000005},{"d":"2011-06-23","v":3265.425845},{"d":"2011-06-24","v":3212.20707},{"d":"2011-06-27","v":3250.0570794999994},{"d":"2011-06-28","v":3289.1734665},{"d":"2011-06-29","v":3376.6523675000003},{"d":"2011-06-30","v":3474.2096145},{"d":"2011-07-01","v":3541.2438214999997},{"d":"2011-07-04","v":3537.3656655},{"d":"2011-07-05","v":3457.5261045},{"d":"2011-07-06","v":3405.5294175000004},{"d":"2011-07-07","v":3450.8173065},{"d":"2011-07-08","v":3328.4378655},{"d":"2011-07-11","v":3182.6976720000002},{"d":"2011-07-12","v":3121.9359465},{"d":"2011-07-13","v":3125.2940550000003},{"d":"2011-07-14","v":3108.6127215},{"d":"2011-07-15","v":3084.7131400000003},{"d":"2011-07-18","v":3026.0723220000004},{"d":"2011-07-19","v":3100.8455324999995},{"d":"2011-07-20","v":3155.5809375},{"d":"2011-07-21","v":3251.2076770000003},{"d":"2011-07-22","v":3259.60719},{"d":"2011-07-25","v":3177.5550849999995},{"d":"2011-07-26","v":3185.8020025},{"d":"2011-07-27","v":3100.5948955},{"d":"2011-07-28","v":3091.423118},{"d":"2011-07-29","v":3020.3219885000003},{"d":"2011-08-01","v":2897.1497810000005},{"d":"2011-08-02","v":2763.1143174999997},{"d":"2011-08-03","v":2758.4785604999997},{"d":"2011-08-04","v":2608.2885625},{"d":"2011-08-05","v":2603.0456425},{"d":"2011-08-08","v":2446.8793545},{"d":"2011-08-09","v":2381.8799679999997},{"d":"2011-08-10","v":2218.0600345},{"d":"2011-08-11","v":2409.3018749999997},{"d":"2011-08-12","v":2557.444572},{"d":"2011-08-15","v":2634.565632},{"d":"2011-08-16","v":2668.1540775},{"d":"2011-08-17","v":2656.660908},{"d":"2011-08-18","v":2509.2465615000006},{"d":"2011-08-19","v":2441.3684025000002},{"d":"2011-08-22","v":2478.2568194999994},{"d":"2011-08-23","v":2516.0071270000003},{"d":"2011-08-24","v":2567.005355},{"d":"2011-08-25","v":2529.587205},{"d":"2011-08-26","v":2560.514838},{"d":"2011-08-29","v":2653.34657},{"d":"2011-08-30","v":2650.805889},{"d":"2011-08-31","v":2670.067488},{"d":"2011-09-01","v":2613.2217625000003},{"d":"2011-09-02","v":2485.318788},{"d":"2011-09-05","v":2337.383884},{"d":"2011-09-06","v":2510.6807},{"d":"2011-09-07","v":2600.322208},{"d":"2011-09-08","v":2628.3146600000005},{"d":"2011-09-09","v":2501.882855},{"d":"2011-09-12","v":2400.8947845},{"d":"2011-09-13","v":2452.2163920000003},{"d":"2011-09-14","v":2508.910365},{"d":"2011-09-15","v":2602.8033689999997},{"d":"2011-09-16","v":2608.95006},{"d":"2011-09-19","v":2528.630235},{"d":"2011-09-20","v":2600.2770885},{"d":"2011-09-21","v":2565.0892515},{"d":"2011-09-22","v":2439.1058625},{"d":"2011-09-23","v":2475.3021525},{"d":"2011-09-26","v":2541.1661624999997},{"d":"2011-09-27","v":2672.2188385000004},{"d":"2011-09-28","v":2652.127008},{"d":"2011-09-29","v":2697.738714},{"d":"2011-09-30","v":2649.0497809999997},{"d":"2011-10-03","v":2596.571744},{"d":"2011-10-04","v":2559.3896055000005},{"d":"2011-10-05","v":2686.680005},{"d":"2011-10-06","v":2781.4035430000004},{"d":"2011-10-07","v":2814.8167355},{"d":"2011-10-10","v":2861.66244},{"d":"2011-10-11","v":2868.6762405},{"d":"2011-10-12","v":2926.4028475},{"d":"2011-10-13","v":2885.210614},{"d":"2011-10-14","v":2914.553178},{"d":"2011-10-17","v":2860.7031224999996},{"d":"2011-10-18","v":2849.4870524999997},{"d":"2011-10-19","v":2893.842856},{"d":"2011-10-20","v":2798.4798745},{"d":"2011-10-21","v":2866.1378865000006},{"d":"2011-10-24","v":2905.3089945},{"d":"2011-10-25","v":2862.092358},{"d":"2011-10-26","v":2860.3317469999997},{"d":"2011-10-27","v":3020.975478},{"d":"2011-10-28","v":3007.649622},{"d":"2011-10-31","v":2899.1156489999994},{"d":"2011-11-01","v":2745.0070175},{"d":"2011-11-02","v":2784.3025665},{"d":"2011-11-03","v":2850.0469690000004},{"d":"2011-11-04","v":2796.0516939999998},{"d":"2011-11-07","v":2822.4821880000004},{"d":"2011-11-08","v":2851.0161199999993},{"d":"2011-11-09","v":2769.5614374999996},{"d":"2011-11-10","v":2779.978122},{"d":"2011-11-11","v":2880.2071089999995},{"d":"2011-11-14","v":2831.910416},{"d":"2011-11-15","v":2793.0441},{"d":"2011-11-16","v":2807.16749},{"d":"2011-11-17","v":2782.7292850000003},{"d":"2011-11-18","v":2772.9240299999997},{"d":"2011-11-21","v":2672.80643},{"d":"2011-11-22","v":2638.4261475},{"d":"2011-11-23","v":2573.7048855},{"d":"2011-11-24","v":2565.4683375},{"d":"2011-11-25","v":2600.333379},{"d":"2011-11-28","v":2729.765424},{"d":"2011-11-29","v":2740.5446305},{"d":"2011-11-30","v":2862.5836905},{"d":"2011-12-01","v":2852.38626},{"d":"2011-12-02","v":2892.167625},{"d":"2011-12-05","v":2922.7610345},{"d":"2011-12-06","v":2923.8522615},{"d":"2011-12-07","v":2905.0041420000002},{"d":"2011-12-08","v":2826.7713725},{"d":"2011-12-09","v":2894.3870745},{"d":"2011-12-12","v":2804.258249},{"d":"2011-12-13","v":2786.3187030000004},{"d":"2011-12-14","v":2730.1445114999997},{"d":"2011-12-15","v":2724.0440715},{"d":"2011-12-16","v":2690.732616},{"d":"2011-12-19","v":2684.1844275},{"d":"2011-12-20","v":2757.5140515},{"d":"2011-12-21","v":2739.5658275},{"d":"2011-12-22","v":2776.1529769999997},{"d":"2011-12-23","v":2799.6337695},{"d":"2011-12-26","v":2800.2063619999994},{"d":"2011-12-27","v":2795.8959325},{"d":"2011-12-28","v":2750.1218365},{"d":"2011-12-29","v":2793.0285660000004},{"d":"2011-12-30","v":2820.2837975},{"d":"2012-01-02","v":2881.0966099999996},{"d":"2012-01-03","v":2907.4450105},{"d":"2012-01-04","v":2863.9284374999997},{"d":"2012-01-05","v":2821.3940125},{"d":"2012-01-06","v":2791.8253575000003},{"d":"2012-01-09","v":2771.0630775},{"d":"2012-01-10","v":2845.7205074999997},{"d":"2012-01-11","v":2836.0709975000004},{"d":"2012-01-12","v":2839.2995475},{"d":"2012-01-13","v":2820.4583635000004},{"d":"2012-01-16","v":2859.494926},{"d":"2012-01-17","v":2898.6041535},{"d":"2012-01-18","v":2888.2517159999998},{"d":"2012-01-19","v":2942.867592},{"d":"2012-01-20","v":2932.37442},{"d":"2012-01-23","v":2947.4284399999997},{"d":"2012-01-24","v":2940.2510265},{"d":"2012-01-25","v":2924.10768},{"d":"2012-01-26","v":2968.59562},{"d":"2012-01-27","v":2939.660199},{"d":"2012-01-30","v":2898.408717},{"d":"2012-01-31","v":2909.2961410000003},{"d":"2012-02-01","v":2975.9430155},{"d":"2012-02-02","v":2986.2946575},{"d":"2012-02-03","v":3036.9178675},{"d":"2012-02-06","v":3025.3931015},{"d":"2012-02-07","v":3038.6911379999997},{"d":"2012-02-08","v":3041.010138},{"d":"2012-02-09","v":3055.184325},{"d":"2012-02-10","v":3000.107106},{"d":"2012-02-13","v":3010.901513},{"d":"2012-02-14","v":3004.7345895},{"d":"2012-02-15","v":3009.336834},{"d":"2012-02-16","v":3004.5209824999997},{"d":"2012-02-17","v":3045.1645575000002},{"d":"2012-02-20","v":3078.060446},{"d":"2012-02-21","v":3069.1090799999997},{"d":"2012-02-22","v":3038.29185},{"d":"2012-02-23","v":3022.3618039999997},{"d":"2012-02-24","v":3039.9107895},{"d":"2012-02-27","v":3028.614259},{"d":"2012-02-28","v":3036.8925299999996},{"d":"2012-02-29","v":3027.7205774999998},{"d":"2012-03-01","v":3073.556527},{"d":"2012-03-02","v":3071.3055},{"d":"2012-03-05","v":3050.3786950000003},{"d":"2012-03-06","v":2944.319424},{"d":"2012-03-07","v":2965.8430424999997},{"d":"2012-03-08","v":3031.269343},{"d":"2012-03-09","v":3033.1035224999996},{"d":"2012-03-12","v":3032.1735805},{"d":"2012-03-13","v":3088.7664010000003},{"d":"2012-03-14","v":3122.8340515},{"d":"2012-03-15","v":3131.8296794999997},{"d":"2012-03-16","v":3147.044365},{"d":"2012-03-19","v":3146.667467},{"d":"2012-03-20","v":3107.0051685000003},{"d":"2012-03-21","v":3095.3460689999997},{"d":"2012-03-22","v":3050.5597430000003},{"d":"2012-03-23","v":3043.14315},{"d":"2012-03-26","v":3062.7022395},{"d":"2012-03-27","v":3043.5093524999997},{"d":"2012-03-28","v":3009.1235699999997},{"d":"2012-03-29","v":2956.6554329999994},{"d":"2012-03-30","v":2981.530344},{"d":"2012-04-02","v":3011.045543},{"d":"2012-04-03","v":2960.7348690000003},{"d":"2012-04-04","v":2886.4266869999997},{"d":"2012-04-05","v":2875.474199},{"d":"2012-04-06","v":2872.842405},{"d":"2012-04-09","v":2875.474199},{"d":"2012-04-10","v":2789.4343715},{"d":"2012-04-11","v":2816.304876},{"d":"2012-04-12","v":2826.0987479999994},{"d":"2012-04-13","v":2755.4261995},{"d":"2012-04-16","v":2765.6852015000004},{"d":"2012-04-17","v":2843.6555175},{"d":"2012-04-18","v":2797.48172},{"d":"2012-04-19","v":2746.2875735000002},{"d":"2012-04-20","v":2775.9508335},{"d":"2012-04-23","v":2697.7244525},{"d":"2012-04-24","v":2744.207916},{"d":"2012-04-25","v":2791.3248015},{"d":"2012-04-26","v":2790.5959005},{"d":"2012-04-27","v":2816.222829},{"d":"2012-04-30","v":2771.0603234999994},{"d":"2012-05-01","v":2771.6033694999996},{"d":"2012-05-02","v":2751.6929495},{"d":"2012-05-03","v":2747.8362949999996},{"d":"2012-05-04","v":2701.043259},{"d":"2012-05-07","v":2742.5618625},{"d":"2012-05-08","v":2685.4563045},{"d":"2012-05-09","v":2673.0929115},{"d":"2012-05-10","v":2699.215749},{"d":"2012-05-11","v":2707.589813},{"d":"2012-05-14","v":2644.6520474999998},{"d":"2012-05-15","v":2616.4737365},{"d":"2012-05-16","v":2612.692107},{"d":"2012-05-17","v":2578.3315645},{"d":"2012-05-18","v":2575.8799245},{"d":"2012-05-21","v":2582.664684},{"d":"2012-05-22","v":2633.7224924999996},{"d":"2012-05-23","v":2562.8873475},{"d":"2012-05-24","v":2590.303998},{"d":"2012-05-25","v":2596.9463374999996},{"d":"2012-05-28","v":2581.4776520000005},{"d":"2012-05-29","v":2594.4242944999996},{"d":"2012-05-30","v":2541.4263709999996},{"d":"2012-05-31","v":2544.952887},{"d":"2012-06-01","v":2483.736629},{"d":"2012-06-04","v":2496.9349079999997},{"d":"2012-06-05","v":2506.8593100000003},{"d":"2012-06-06","v":2567.3068435},{"d":"2012-06-07","v":2573.946234},{"d":"2012-06-08","v":2575.145485},{"d":"2012-06-11","v":2567.4845849999997},{"d":"2012-06-12","v":2574.306549},{"d":"2012-06-13","v":2574.450675},{"d":"2012-06-14","v":2579.8927995},{"d":"2012-06-15","v":2619.7662915},{"d":"2012-06-18","v":2588.600294},{"d":"2012-06-19","v":2639.7001095},{"d":"2012-06-20","v":2651.3058644999996},{"d":"2012-06-21","v":2641.393449},{"d":"2012-06-22","v":2626.0307884999997},{"d":"2012-06-25","v":2558.8761745},{"d":"2012-06-26","v":2555.880745},{"d":"2012-06-27","v":2600.8976100000004},{"d":"2012-06-28","v":2591.193739},{"d":"2012-06-29","v":2720.0419559999996},{"d":"2012-07-02","v":2752.9026839999997},{"d":"2012-07-03","v":2786.7204085},{"d":"2012-07-04","v":2777.3200304999996},{"d":"2012-07-05","v":2744.531658},{"d":"2012-07-06","v":2685.1828365},{"d":"2012-07-09","v":2675.3857234999996},{"d":"2012-07-10","v":2692.3497574999997},{"d":"2012-07-11","v":2697.1606725},{"d":"2012-07-12","v":2675.2830075},{"d":"2012-07-13","v":2712.8282265000003},{"d":"2012-07-16","v":2704.4913619999998},{"d":"2012-07-17","v":2703.9385125},{"d":"2012-07-18","v":2744.0389349999996},{"d":"2012-07-19","v":2765.1273275},{"d":"2012-07-20","v":2687.1451964999997},{"d":"2012-07-23","v":2617.2423445},{"d":"2012-07-24","v":2584.107117},{"d":"2012-07-25","v":2593.1750445000002},{"d":"2012-07-26","v":2703.3984975000003},{"d":"2012-07-27","v":2763.6621685},{"d":"2012-07-30","v":2811.0633565},{"d":"2012-07-31","v":2793.5385779999997},{"d":"2012-08-01","v":2803.439401},{"d":"2012-08-02","v":2718.634864},{"d":"2012-08-03","v":2850.7734989999994},{"d":"2012-08-06","v":2882.18315},{"d":"2012-08-07","v":2931.3382999999994},{"d":"2012-08-08","v":2921.77635},{"d":"2012-08-09","v":2927.006892},{"d":"2012-08-10","v":2909.9237369999996},{"d":"2012-08-13","v":2901.447162},{"d":"2012-08-14","v":2921.3019044999996},{"d":"2012-08-15","v":2918.7768705},{"d":"2012-08-16","v":2950.4153565},{"d":"2012-08-17","v":2967.6896475000003},{"d":"2012-08-20","v":2961.927004},{"d":"2012-08-21","v":2990.6897565},{"d":"2012-08-22","v":2945.6060935},{"d":"2012-08-23","v":2916.8258775},{"d":"2012-08-24","v":2923.1450955},{"d":"2012-08-27","v":2956.5227290000003},{"d":"2012-08-28","v":2932.6198019999997},{"d":"2012-08-29","v":2923.3885185},{"d":"2012-08-30","v":2886.60323},{"d":"2012-08-31","v":2931.1706745},{"d":"2012-09-03","v":2957.8976945},{"d":"2012-09-04","v":2926.406367},{"d":"2012-09-05","v":2940.3055115},{"d":"2012-09-06","v":3042.6909975},{"d":"2012-09-07","v":3072.34065},{"d":"2012-09-10","v":3052.3149895},{"d":"2012-09-11","v":3086.9556675},{"d":"2012-09-12","v":3100.9714400000003},{"d":"2012-09-13","v":3088.867851},{"d":"2012-09-14","v":3156.93088},{"d":"2012-09-17","v":3142.7837265000003},{"d":"2012-09-18","v":3092.29507},{"d":"2012-09-19","v":3107.7793845},{"d":"2012-09-20","v":3088.0174365},{"d":"2012-09-21","v":3120.19961},{"d":"2012-09-24","v":3094.6632165},{"d":"2012-09-25","v":3106.704984},{"d":"2012-09-26","v":3020.835606},{"d":"2012-09-27","v":3032.708509},{"d":"2012-09-28","v":2965.6050710000004},{"d":"2012-10-01","v":3021.4361114999997},{"d":"2012-10-02","v":3015.8724254999997},{"d":"2012-10-03","v":3019.265648},{"d":"2012-10-04","v":3011.1132625},{"d":"2012-10-05","v":3066.4343544999997},{"d":"2012-10-08","v":3020.8929225},{"d":"2012-10-09","v":2994.9830334999997},{"d":"2012-10-10","v":2964.675299},{"d":"2012-10-11","v":3006.009242},{"d":"2012-10-12","v":2985.5001735},{"d":"2012-10-15","v":3002.894752},{"d":"2012-10-16","v":3081.048075},{"d":"2012-10-17","v":3109.1088255},{"d":"2012-10-18","v":3110.2650675},{"d":"2012-10-19","v":3073.4410479999997},{"d":"2012-10-22","v":3064.0231049999998},{"d":"2012-10-23","v":3000.389432},{"d":"2012-10-24","v":3012.7300969999997},{"d":"2012-10-25","v":3004.5777855},{"d":"2012-10-26","v":3018.6585349999996},{"d":"2012-10-29","v":2995.5541980000003},{"d":"2012-10-30","v":3040.1965164999997},{"d":"2012-10-31","v":3022.7697539999995},{"d":"2012-11-01","v":3055.2137525000003},{"d":"2012-11-02","v":3073.2638325000003},{"d":"2012-11-05","v":3039.4571075},{"d":"2012-11-06","v":3063.5423170000004},{"d":"2012-11-07","v":2991.158105},{"d":"2012-11-08","v":2988.7151715},{"d":"2012-11-09","v":2990.2909470000004},{"d":"2012-11-12","v":2980.715276},{"d":"2012-11-13","v":3000.618647},{"d":"2012-11-14","v":2976.186582},{"d":"2012-11-15","v":2964.0941685000003},{"d":"2012-11-16","v":2923.585574},{"d":"2012-11-19","v":3003.6090375000003},{"d":"2012-11-20","v":3023.213733},{"d":"2012-11-21","v":3033.8207039999998},{"d":"2012-11-22","v":3053.8961685000004},{"d":"2012-11-23","v":3077.7691595000006},{"d":"2012-11-26","v":3060.812702},{"d":"2012-11-27","v":3061.6779375},{"d":"2012-11-28","v":3064.9945979999998},{"d":"2012-11-29","v":3107.7093375000004},{"d":"2012-11-30","v":3103.8200625},{"d":"2012-12-03","v":3120.394706},{"d":"2012-12-04","v":3143.5835804999997},{"d":"2012-12-05","v":3138.1137585},{"d":"2012-12-06","v":3147.9132014999996},{"d":"2012-12-07","v":3142.0647545},{"d":"2012-12-10","v":3135.862359},{"d":"2012-12-11","v":3180.1931585000007},{"d":"2012-12-12","v":3185.473257},{"d":"2012-12-13","v":3173.556365},{"d":"2012-12-14","v":3178.086901},{"d":"2012-12-17","v":3174.2418785000004},{"d":"2012-12-18","v":3192.9514750000003},{"d":"2012-12-19","v":3205.6709094999997},{"d":"2012-12-20","v":3209.232675},{"d":"2012-12-21","v":3202.1190565000006},{"d":"2012-12-24","v":3198.7621075000006},{"d":"2012-12-25","v":3197.7026955},{"d":"2012-12-26","v":3197.9675485},{"d":"2012-12-27","v":3214.9485674999996},{"d":"2012-12-28","v":3171.7900324999996},{"d":"2012-12-31","v":3182.4900854999996},{"d":"2013-01-01","v":3184.5988294999997},{"d":"2013-01-02","v":3281.0191875},{"d":"2013-01-03","v":3265.6399189999997},{"d":"2013-01-04","v":3274.3849425},{"d":"2013-01-07","v":3256.91037},{"d":"2013-01-08","v":3253.2901875},{"d":"2013-01-09","v":3271.0782735},{"d":"2013-01-10","v":3284.1836155},{"d":"2013-01-11","v":3312.0347835},{"d":"2013-01-14","v":3349.5571339999997},{"d":"2013-01-15","v":3349.8365205000005},{"d":"2013-01-16","v":3343.987869},{"d":"2013-01-17","v":3392.0011214999995},{"d":"2013-01-18","v":3372.4911935000005},{"d":"2013-01-21","v":3385.5201395},{"d":"2013-01-22","v":3361.7804149999997},{"d":"2013-01-23","v":3352.444398},{"d":"2013-01-24","v":3383.1416520000002},{"d":"2013-01-25","v":3421.855251},{"d":"2013-01-28","v":3419.2353249999996},{"d":"2013-01-29","v":3418.3048544999997},{"d":"2013-01-30","v":3377.856562},{"d":"2013-01-31","v":3341.8293230000004},{"d":"2013-02-01","v":3358.195632},{"d":"2013-02-04","v":3222.0023995},{"d":"2013-02-05","v":3269.6047325},{"d":"2013-02-06","v":3219.4713675000003},{"d":"2013-02-07","v":3196.870456},{"d":"2013-02-08","v":3225.6684050000003},{"d":"2013-02-11","v":3235.9073485},{"d":"2013-02-12","v":3267.4642464999997},{"d":"2013-02-13","v":3277.635339},{"d":"2013-02-14","v":3243.9840824999997},{"d":"2013-02-15","v":3220.823453},{"d":"2013-02-18","v":3225.1519575},{"d":"2013-02-19","v":3288.9587794999998},{"d":"2013-02-20","v":3252.7791825},{"d":"2013-02-21","v":3166.526412},{"d":"2013-02-22","v":3224.8358075000006},{"d":"2013-02-25","v":3229.0373289999998},{"d":"2013-02-26","v":3130.507782},{"d":"2013-02-27","v":3189.7706624999996},{"d":"2013-02-28","v":3222.8068125},{"d":"2013-03-01","v":3212.1914625},{"d":"2013-03-04","v":3210.147423},{"d":"2013-03-05","v":3294.6144090000003},{"d":"2013-03-06","v":3297.7386395},{"d":"2013-03-07","v":3324.1415475},{"d":"2013-03-08","v":3374.2729090000003},{"d":"2013-03-11","v":3357.4709145},{"d":"2013-03-12","v":3346.5584925000003},{"d":"2013-03-13","v":3338.5834755},{"d":"2013-03-14","v":3380.2352849999997},{"d":"2013-03-15","v":3345.4124419999994},{"d":"2013-03-18","v":3315.9593054999996},{"d":"2013-03-19","v":3257.252838},{"d":"2013-03-20","v":3311.223915},{"d":"2013-03-21","v":3276.932124},{"d":"2013-03-22","v":3277.1348235000005},{"d":"2013-03-25","v":3230.3995680000003},{"d":"2013-03-26","v":3220.4496719999997},{"d":"2013-03-27","v":3183.935625},{"d":"2013-03-28","v":3193.038737},{"d":"2013-03-29","v":3194.350747},{"d":"2013-04-01","v":3191.201923},{"d":"2013-04-02","v":3259.8427100000004},{"d":"2013-04-03","v":3204.4178925000006},{"d":"2013-04-04","v":3185.9549504999995},{"d":"2013-04-05","v":3141.76152},{"d":"2013-04-08","v":3150.9877874999997},{"d":"2013-04-09","v":3166.4478695000003},{"d":"2013-04-10","v":3244.1155369999997},{"d":"2013-04-11","v":3262.5488835},{"d":"2013-04-12","v":3201.9044995},{"d":"2013-04-15","v":3187.3165885000003},{"d":"2013-04-16","v":3171.734615},{"d":"2013-04-17","v":3104.1501184999993},{"d":"2013-04-18","v":3110.1712749999997},{"d":"2013-04-19","v":3137.961218},{"d":"2013-04-22","v":3152.662305},{"d":"2013-04-23","v":3273.078952},{"d":"2013-04-24","v":3329.8713175000003},{"d":"2013-04-25","v":3324.1255515},{"d":"2013-04-26","v":3295.6545545},{"d":"2013-04-29","v":3334.361129},{"d":"2013-04-30","v":3318.5388},{"d":"2013-05-01","v":3314.424215},{"d":"2013-05-02","v":3320.184735},{"d":"2013-05-03","v":3389.7917039999998},{"d":"2013-05-06","v":3374.20041},{"d":"2013-05-07","v":3405.553038},{"d":"2013-05-08","v":3426.335679},{"d":"2013-05-09","v":3429.9829459999996},{"d":"2013-05-10","v":3464.6992979999995},{"d":"2013-05-13","v":3450.2127275000003},{"d":"2013-05-14","v":3492.7203405},{"d":"2013-05-15","v":3495.819915},{"d":"2013-05-16","v":3487.465085},{"d":"2013-05-17","v":3518.4014144999996},{"d":"2013-05-20","v":3518.0559749999998},{"d":"2013-05-21","v":3533.4112125},{"d":"2013-05-22","v":3567.1513325000005},{"d":"2013-05-23","v":3478.8888230000002},{"d":"2013-05-24","v":3438.3621164999995},{"d":"2013-05-27","v":3479.35575},{"d":"2013-05-28","v":3560.2929914999995},{"d":"2013-05-29","v":3468.545665},{"d":"2013-05-30","v":3480.66524},{"d":"2013-05-31","v":3438.0926139999997},{"d":"2013-06-03","v":3402.663829},{"d":"2013-06-04","v":3414.1745149999997},{"d":"2013-06-05","v":3341.2812225},{"d":"2013-06-06","v":3295.8864255},{"d":"2013-06-07","v":3370.36798},{"d":"2013-06-10","v":3366.4812300000003},{"d":"2013-06-11","v":3301.81176},{"d":"2013-06-12","v":3273.8199299999997},{"d":"2013-06-13","v":3282.0215155},{"d":"2013-06-14","v":3278.5363780000002},{"d":"2013-06-17","v":3332.0113665},{"d":"2013-06-18","v":3328.2209925},{"d":"2013-06-19","v":3311.091927},{"d":"2013-06-20","v":3171.3756675},{"d":"2013-06-21","v":3126.554798},{"d":"2013-06-24","v":3075.8614265},{"d":"2013-06-25","v":3120.8421584999996},{"d":"2013-06-26","v":3192.2163245},{"d":"2013-06-27","v":3227.536527},{"d":"2013-06-28","v":3200.02754745},{"d":"2013-07-01","v":3237.493259},{"d":"2013-07-02","v":3211.6979999999994},{"d":"2013-07-03","v":3166.276554},{"d":"2013-07-04","v":3267.550611},{"d":"2013-07-05","v":3209.8365645000003},{"d":"2013-07-08","v":3286.6563724999996},{"d":"2013-07-09","v":3313.7905389999996},{"d":"2013-07-10","v":3303.7587765000003},{"d":"2013-07-11","v":3322.8258100000003},{"d":"2013-07-12","v":3307.8779855},{"d":"2013-07-15","v":3329.7492515},{"d":"2013-07-16","v":3294.0275575},{"d":"2013-07-17","v":3312.255894},{"d":"2013-07-18","v":3364.7357205},{"d":"2013-07-19","v":3358.1367795},{"d":"2013-07-22","v":3363.82495},{"d":"2013-07-23","v":3365.640545},{"d":"2013-07-24","v":3404.3956375},{"d":"2013-07-25","v":3383.5730775},{"d":"2013-07-26","v":3379.876994},{"d":"2013-07-29","v":3385.6252905},{"d":"2013-07-30","v":3402.2438905},{"d":"2013-07-31","v":3409.3919475},{"d":"2013-08-01","v":3474.9898399999997},{"d":"2013-08-02","v":3467.79015},{"d":"2013-08-05","v":3454.7470380000004},{"d":"2013-08-06","v":3438.3804990000003},{"d":"2013-08-07","v":3434.785926},{"d":"2013-08-08","v":3466.8750600000003},{"d":"2013-08-09","v":3477.066691},{"d":"2013-08-12","v":3481.2111525},{"d":"2013-08-13","v":3515.7819725},{"d":"2013-08-14","v":3535.8661799999995},{"d":"2013-08-15","v":3505.2647530000004},{"d":"2013-08-16","v":3510.6093865000003},{"d":"2013-08-19","v":3479.6377075},{"d":"2013-08-20","v":3431.306385},{"d":"2013-08-21","v":3417.588915},{"d":"2013-08-22","v":3468.012408},{"d":"2013-08-23","v":3485.5087675},{"d":"2013-08-26","v":3480.1175025},{"d":"2013-08-27","v":3377.8905855},{"d":"2013-08-28","v":3372.9989085000007},{"d":"2013-08-29","v":3400.0308215},{"d":"2013-08-30","v":3345.5162094999996},{"d":"2013-09-02","v":3419.7594475},{"d":"2013-09-03","v":3395.8442225},{"d":"2013-09-04","v":3407.1777224999996},{"d":"2013-09-05","v":3438.7596099999996},{"d":"2013-09-06","v":3468.251053},{"d":"2013-09-09","v":3458.5712445000004},{"d":"2013-09-10","v":3536.1637100000003},{"d":"2013-09-11","v":3547.372644},{"d":"2013-09-12","v":3541.6685215},{"d":"2013-09-13","v":3543.6046045000003},{"d":"2013-09-16","v":3579.367092},{"d":"2013-09-17","v":3575.3824124999996},{"d":"2013-09-18","v":3588.007374},{"d":"2013-09-19","v":3618.13245},{"d":"2013-09-20","v":3603.5172495},{"d":"2013-09-23","v":3572.0494675},{"d":"2013-09-24","v":3595.0577535},{"d":"2013-09-25","v":3600.7868675},{"d":"2013-09-26","v":3588.7009724999994},{"d":"2013-09-27","v":3575.753599},{"d":"2013-09-30","v":3540.7816275000005},{"d":"2013-10-01","v":3593.0961509999997},{"d":"2013-10-02","v":3577.1184824999996},{"d":"2013-10-03","v":3554.951894},{"d":"2013-10-04","v":3599.6250674999997},{"d":"2013-10-07","v":3585.254712},{"d":"2013-10-08","v":3562.2652825},{"d":"2013-10-09","v":3574.9964475},{"d":"2013-10-10","v":3659.3524135},{"d":"2013-10-11","v":3673.087086},{"d":"2013-10-14","v":3675.8094205},{"d":"2013-10-15","v":3708.37818},{"d":"2013-10-16","v":3727.18517},{"d":"2013-10-17","v":3714.6707405},{"d":"2013-10-18","v":3744.4695295},{"d":"2013-10-21","v":3736.8998024999996},{"d":"2013-10-22","v":3755.8912754999997},{"d":"2013-10-23","v":3708.2404979999997},{"d":"2013-10-24","v":3742.327292},{"d":"2013-10-25","v":3738.048825},{"d":"2013-10-28","v":3731.161686},{"d":"2013-10-29","v":3769.2182519999997},{"d":"2013-10-30","v":3755.4041845},{"d":"2013-10-31","v":3779.5610025},{"d":"2013-11-01","v":3755.505663},{"d":"2013-11-04","v":3764.1799869999995},{"d":"2013-11-05","v":3735.851356},{"d":"2013-11-06","v":3767.16582},{"d":"2013-11-07","v":3739.974569},{"d":"2013-11-08","v":3738.5538834999993},{"d":"2013-11-11","v":3763.0708995},{"d":"2013-11-12","v":3740.3948339999997},{"d":"2013-11-13","v":3722.5346155},{"d":"2013-11-14","v":3766.5739304999997},{"d":"2013-11-15","v":3769.7481995000003},{"d":"2013-11-18","v":3798.4725750000002},{"d":"2013-11-19","v":3760.9987364999997},{"d":"2013-11-20","v":3752.01275},{"d":"2013-11-21","v":3748.0391910000003},{"d":"2013-11-22","v":3756.869013},{"d":"2013-11-25","v":3787.0107375000002},{"d":"2013-11-26","v":3767.788255},{"d":"2013-11-27","v":3798.9037275},{"d":"2013-11-28","v":3810.0160610000003},{"d":"2013-11-29","v":3802.5861480000003},{"d":"2013-12-02","v":3786.6853765},{"d":"2013-12-03","v":3704.81199},{"d":"2013-12-04","v":3669.5432280000005},{"d":"2013-12-05","v":3618.9621764999997},{"d":"2013-12-06","v":3642.2316650000002},{"d":"2013-12-09","v":3655.2928435},{"d":"2013-12-10","v":3615.358103},{"d":"2013-12-11","v":3601.1707235000003},{"d":"2013-12-12","v":3580.35873},{"d":"2013-12-13","v":3573.362064},{"d":"2013-12-16","v":3636.6313545},{"d":"2013-12-17","v":3584.0932960000005},{"d":"2013-12-18","v":3639.8738605},{"d":"2013-12-19","v":3716.2188525000006},{"d":"2013-12-20","v":3735.6062174999997},{"d":"2013-12-23","v":3759.2544765000002},{"d":"2013-12-24","v":3765.81444},{"d":"2013-12-25","v":3765.04622},{"d":"2013-12-26","v":3771.19198},{"d":"2013-12-27","v":3813.4506404999997},{"d":"2013-12-30","v":3799.1043895},{"d":"2013-12-31","v":3816.9193},{"d":"2014-01-01","v":3816.9193},{"d":"2014-01-02","v":3759.8889875},{"d":"2014-01-03","v":3780.7802924999996},{"d":"2014-01-06","v":3781.665494},{"d":"2014-01-07","v":3851.2129320000004},{"d":"2014-01-08","v":3848.041953},{"d":"2014-01-09","v":3813.5353530000007},{"d":"2014-01-10","v":3830.3658925000004},{"d":"2014-01-13","v":3825.041051},{"d":"2014-01-14","v":3850.9038085},{"d":"2014-01-15","v":3918.3301780000006},{"d":"2014-01-16","v":3880.88889},{"d":"2014-01-17","v":3887.585955},{"d":"2014-01-20","v":3890.8541215000005},{"d":"2014-01-21","v":3892.319606},{"d":"2014-01-22","v":3891.0306325},{"d":"2014-01-23","v":3830.423758},{"d":"2014-01-24","v":3726.65433},{"d":"2014-01-27","v":3693.6631549999997},{"d":"2014-01-28","v":3732.76817},{"d":"2014-01-29","v":3679.5401825},{"d":"2014-01-30","v":3703.447455},{"d":"2014-01-31","v":3682.9084220000004},{"d":"2014-02-03","v":3613.2154379999997},{"d":"2014-02-04","v":3619.4221574999992},{"d":"2014-02-05","v":3623.0016045},{"d":"2014-02-06","v":3686.2607365},{"d":"2014-02-07","v":3718.6559865},{"d":"2014-02-10","v":3711.0585874999997},{"d":"2014-02-11","v":3769.2691459999996},{"d":"2014-02-12","v":3788.6095935},{"d":"2014-02-13","v":3785.2302075000002},{"d":"2014-02-14","v":3801.1984219999995},{"d":"2014-02-17","v":3810.8401835},{"d":"2014-02-18","v":3808.420576},{"d":"2014-02-19","v":3808.78036},{"d":"2014-02-20","v":3809.4323565000004},{"d":"2014-02-21","v":3826.03953075},{"d":"2014-02-24","v":3854.2861825},{"d":"2014-02-25","v":3849.125994},{"d":"2014-02-26","v":3836.8565625},{"d":"2014-02-27","v":3817.573185},{"d":"2014-02-28","v":3829.9360645},{"d":"2014-03-03","v":3704.3371704999995},{"d":"2014-03-04","v":3824.51921025},{"d":"2014-03-05","v":3821.2108046999997},{"d":"2014-03-06","v":3836.1693735000003},{"d":"2014-03-07","v":3773.4924210000004},{"d":"2014-03-10","v":3767.40481875},{"d":"2014-03-11","v":3763.3859460000003},{"d":"2014-03-12","v":3725.1163374000002},{"d":"2014-03-13","v":3662.5812384},{"d":"2014-03-14","v":3644.703436},{"d":"2014-03-17","v":3707.22044795},{"d":"2014-03-18","v":3740.00068125},{"d":"2014-03-19","v":3748.2677876000002},{"d":"2014-03-20","v":3761.4153079999996},{"d":"2014-03-21","v":3775.78249375},{"d":"2014-03-24","v":3721.4514963499996},{"d":"2014-03-25","v":3778.7214096},{"d":"2014-03-26","v":3818.29092195},{"d":"2014-03-27","v":3818.3176875},{"d":"2014-03-28","v":3869.4921817499994},{"d":"2014-03-31","v":3850.35456},{"d":"2014-04-01","v":3883.033241},{"d":"2014-04-02","v":3890.4420975},{"d":"2014-04-03","v":3920.1518634},{"d":"2014-04-04","v":3954.8930189999996},{"d":"2014-04-07","v":3887.0426985},{"d":"2014-04-08","v":3873.7264229999996},{"d":"2014-04-09","v":3878.7070335},{"d":"2014-04-10","v":3836.557691},{"d":"2014-04-11","v":3791.2709099999997},{"d":"2014-04-14","v":3807.6446473},{"d":"2014-04-15","v":3759.056456},{"d":"2014-04-16","v":3824.3877987000005},{"d":"2014-04-17","v":3849.2992474999996},{"d":"2014-04-18","v":3846.3012280000003},{"d":"2014-04-21","v":3851.8238955},{"d":"2014-04-22","v":3909.23725595},{"d":"2014-04-23","v":3876.1125865},{"d":"2014-04-24","v":3890.1327854999995},{"d":"2014-04-25","v":3839.3558900000003},{"d":"2014-04-28","v":3859.95042},{"d":"2014-04-29","v":3916.354374},{"d":"2014-04-30","v":3903.4750755},{"d":"2014-05-01","v":3899.9662049999997},{"d":"2014-05-02","v":3872.97399025},{"d":"2014-05-05","v":3862.1555265},{"d":"2014-05-06","v":3835.0268144999995},{"d":"2014-05-07","v":3850.8478125},{"d":"2014-05-08","v":3902.6771850000005},{"d":"2014-05-09","v":3851.9528775000003},{"d":"2014-05-12","v":3917.2817852999997},{"d":"2014-05-13","v":3917.568655},{"d":"2014-05-14","v":3917.193963},{"d":"2014-05-15","v":3864.189552},{"d":"2014-05-16","v":3877.539748},{"d":"2014-05-19","v":3877.263185},{"d":"2014-05-20","v":3866.1642635000003},{"d":"2014-05-21","v":3896.5877496},{"d":"2014-05-22","v":3892.8931374999997},{"d":"2014-05-23","v":3912.1658640000005},{"d":"2014-05-26","v":3955.7060925},{"d":"2014-05-27","v":3966.294514},{"d":"2014-05-28","v":3963.8213519999995},{"d":"2014-05-29","v":3962.2165589999995},{"d":"2014-05-30","v":3930.3462099999997},{"d":"2014-06-02","v":3968.2919520000005},{"d":"2014-06-03","v":3959.1410276},{"d":"2014-06-04","v":3949.7889105},{"d":"2014-06-05","v":3978.7768425000004},{"d":"2014-06-06","v":4015.892034},{"d":"2014-06-09","v":4030.6158333000003},{"d":"2014-06-10","v":4036.738608},{"d":"2014-06-11","v":4004.6315295},{"d":"2014-06-12","v":3998.2824720000003},{"d":"2014-06-13","v":3997.842552},{"d":"2014-06-16","v":3971.9529612},{"d":"2014-06-17","v":3990.4983055000002},{"d":"2014-06-18","v":3993.5737200000003},{"d":"2014-06-19","v":4032.9514200000003},{"d":"2014-06-20","v":4018.229089},{"d":"2014-06-23","v":3993.094441},{"d":"2014-06-24","v":3994.9202258},{"d":"2014-06-25","v":3957.2481924999997},{"d":"2014-06-26","v":3932.6906565000004},{"d":"2014-06-27","v":3926.1146512500004},{"d":"2014-06-30","v":3919.8904199999997},{"d":"2014-07-01","v":3955.9110045},{"d":"2014-07-02","v":3948.0688875},{"d":"2014-07-03","v":3999.8425375},{"d":"2014-07-04","v":3975.910379},{"d":"2014-07-07","v":3927.021714},{"d":"2014-07-08","v":3870.454671},{"d":"2014-07-09","v":3893.1918795},{"d":"2014-07-10","v":3825.9189665000004},{"d":"2014-07-11","v":3833.7636675000003},{"d":"2014-07-14","v":3869.8482127},{"d":"2014-07-15","v":3832.9731375},{"d":"2014-07-16","v":3891.411953},{"d":"2014-07-17","v":3833.7513710000003},{"d":"2014-07-18","v":3844.51515},{"d":"2014-07-21","v":3809.802517},{"d":"2014-07-22","v":3875.4763595999993},{"d":"2014-07-23","v":3878.5353545000003},{"d":"2014-07-24","v":3913.1900675},{"d":"2014-07-25","v":3857.7715994999994},{"d":"2014-07-28","v":3852.9575175},{"d":"2014-07-29","v":3879.8561670000004},{"d":"2014-07-30","v":3857.8244482500004},{"d":"2014-07-31","v":3790.8902578},{"d":"2014-08-01","v":3739.6249470000002},{"d":"2014-08-04","v":3736.289251},{"d":"2014-08-05","v":3735.94881},{"d":"2014-08-06","v":3704.5218465},{"d":"2014-08-07","v":3659.0825024},{"d":"2014-08-08","v":3650.7426445},{"d":"2014-08-11","v":3697.7569259999996},{"d":"2014-08-12","v":3668.2865755},{"d":"2014-08-13","v":3706.3701675},{"d":"2014-08-14","v":3705.4195639999994},{"d":"2014-08-15","v":3669.1941159999997},{"d":"2014-08-18","v":3723.300268},{"d":"2014-08-19","v":3743.4887655},{"d":"2014-08-20","v":3734.6581125},{"d":"2014-08-21","v":3782.3736168000005},{"d":"2014-08-22","v":3749.959625},{"d":"2014-08-25","v":3822.4632984999994},{"d":"2014-08-26","v":3863.427705},{"d":"2014-08-27","v":3854.9025374999997},{"d":"2014-08-28","v":3817.6911714},{"d":"2014-08-29","v":3827.2228847500005},{"d":"2014-09-01","v":3832.7616075},{"d":"2014-09-02","v":3838.4510155},{"d":"2014-09-03","v":3883.6914020000004},{"d":"2014-09-04","v":3953.29751625},{"d":"2014-09-05","v":3952.4079375},{"d":"2014-09-08","v":3941.7151905},{"d":"2014-09-09","v":3916.7471954999996},{"d":"2014-09-10","v":3925.271392},{"d":"2014-09-11","v":3915.908832},{"d":"2014-09-12","v":3915.5669745000005},{"d":"2014-09-15","v":3911.4880949999997},{"d":"2014-09-16","v":3893.6217915},{"d":"2014-09-17","v":3918.435504},{"d":"2014-09-18","v":3947.2350419999993},{"d":"2014-09-19","v":3951.4674},{"d":"2014-09-22","v":3933.5699739999995},{"d":"2014-09-23","v":3871.0001784999995},{"d":"2014-09-24","v":3919.8994835000003},{"d":"2014-09-25","v":3865.9887474999996},{"d":"2014-09-26","v":3895.2893525},{"d":"2014-09-29","v":3846.8079974999996},{"d":"2014-09-30","v":3891.2780625},{"d":"2014-10-01","v":3856.7970434000003},{"d":"2014-10-02","v":3753.953249},{"d":"2014-10-03","v":3793.7277274999997},{"d":"2014-10-06","v":3805.7943085},{"d":"2014-10-07","v":3735.0428850000003},{"d":"2014-10-08","v":3701.3750475},{"d":"2014-10-09","v":3684.2548274999995},{"d":"2014-10-10","v":3615.82605},{"d":"2014-10-13","v":3624.3092496},{"d":"2014-10-14","v":3623.2452764999994},{"d":"2014-10-15","v":3491.4524775},{"d":"2014-10-16","v":3470.9673960000005},{"d":"2014-10-17","v":3566.2407359999997},{"d":"2014-10-20","v":3532.519275},{"d":"2014-10-21","v":3610.243501},{"d":"2014-10-22","v":3628.7384595000003},{"d":"2014-10-23","v":3673.1001650000003},{"d":"2014-10-24","v":3655.2322939999995},{"d":"2014-10-27","v":3615.9113068},{"d":"2014-10-28","v":3661.4450925000006},{"d":"2014-10-29","v":3645.491883},{"d":"2014-10-30","v":3660.2328350000003},{"d":"2014-10-31","v":3746.8806200000004},{"d":"2014-11-03","v":3716.3840472},{"d":"2014-11-04","v":3654.5903679999997},{"d":"2014-11-05","v":3721.132121},{"d":"2014-11-06","v":3735.6677975000002},{"d":"2014-11-07","v":3689.4740730000003},{"d":"2014-11-10","v":3721.72069},{"d":"2014-11-11","v":3735.5979174999998},{"d":"2014-11-12","v":3663.6468980000004},{"d":"2014-11-13","v":3674.7321200000006},{"d":"2014-11-14","v":3677.0369835},{"d":"2014-11-17","v":3705.9278904499997},{"d":"2014-11-18","v":3748.404525},{"d":"2014-11-19","v":3751.9602119999995},{"d":"2014-11-20","v":3729.0115305000004},{"d":"2014-11-21","v":3838.334463},{"d":"2014-11-24","v":3861.908665},{"d":"2014-11-25","v":3879.94542825},{"d":"2014-11-26","v":3878.4417672},{"d":"2014-11-27","v":3900.5560860000005},{"d":"2014-11-28","v":3908.1054995},{"d":"2014-12-01","v":3889.1422363499996},{"d":"2014-12-02","v":3898.8114825000002},{"d":"2014-12-03","v":3908.1438619999994},{"d":"2014-12-04","v":3836.6803125},{"d":"2014-12-05","v":3941.377188},{"d":"2014-12-08","v":3904.6686182},{"d":"2014-12-09","v":3802.1239555},{"d":"2014-12-10","v":3791.0654924999994},{"d":"2014-12-11","v":3794.722932},{"d":"2014-12-12","v":3684.61815},{"d":"2014-12-15","v":3582.4629000000004},{"d":"2014-12-16","v":3663.03799},{"d":"2014-12-17","v":3665.43999},{"d":"2014-12-18","v":3797.13908},{"d":"2014-12-19","v":3780.2163520000004},{"d":"2014-12-22","v":3795.987712},{"d":"2014-12-23","v":3838.7855514999997},{"d":"2014-12-24","v":3829.075951},{"d":"2014-12-25","v":3829.5536499999994},{"d":"2014-12-26","v":3830.031349},{"d":"2014-12-29","v":3831.6002515},{"d":"2014-12-30","v":3770.3526849999994},{"d":"2014-12-31","v":3785.15529},{"d":"2015-01-01","v":3783.2674319999996},{"d":"2015-01-02","v":3772.7435339999997},{"d":"2015-01-05","v":3632.605024},{"d":"2015-01-06","v":3613.101492},{"d":"2015-01-07","v":3635.6288084999996},{"d":"2015-01-08","v":3765.23108},{"d":"2015-01-09","v":3654.5229000000004},{"d":"2015-01-12","v":3704.10018},{"d":"2015-01-13","v":3764.235939},{"d":"2015-01-14","v":3710.0757360000002},{"d":"2015-01-15","v":3156.097056},{"d":"2015-01-16","v":3183.346784},{"d":"2015-01-19","v":3287.25054},{"d":"2015-01-20","v":3279.316152},{"d":"2015-01-21","v":3268.4548053},{"d":"2015-01-22","v":3288.7589700000003},{"d":"2015-01-23","v":3342.5344335},{"d":"2015-01-26","v":3462.4213480000003},{"d":"2015-01-27","v":3460.941596},{"d":"2015-01-28","v":3429.4981599999996},{"d":"2015-01-29","v":3523.899533},{"d":"2015-01-30","v":3482.313732},{"d":"2015-02-02","v":3545.3557200000005},{"d":"2015-02-03","v":3618.347964},{"d":"2015-02-04","v":3578.9631105},{"d":"2015-02-05","v":3603.952512},{"d":"2015-02-06","v":3562.1212199999995},{"d":"2015-02-09","v":3505.0942499999996},{"d":"2015-02-10","v":3549.579996},{"d":"2015-02-11","v":3548.9204520000003},{"d":"2015-02-12","v":3626.767732},{"d":"2015-02-13","v":3661.3405800000005},{"d":"2015-02-16","v":3631.0580800000007},{"d":"2015-02-17","v":3675.69236},{"d":"2015-02-18","v":3722.09591},{"d":"2015-02-19","v":3763.9871279999998},{"d":"2015-02-20","v":3726.140775},{"d":"2015-02-23","v":3791.9954919999996},{"d":"2015-02-24","v":3825.54735},{"d":"2015-02-25","v":3816.799217},{"d":"2015-02-26","v":3812.137269},{"d":"2015-02-27","v":3843.7320000000004},{"d":"2015-03-02","v":3848.2120440000003},{"d":"2015-03-03","v":3813.1637840000003},{"d":"2015-03-04","v":3825.6805440000003},{"d":"2015-03-05","v":3886.8620924999996},{"d":"2015-03-06","v":3866.8740179999995},{"d":"2015-03-09","v":3862.0970300000004},{"d":"2015-03-10","v":3807.98586625},{"d":"2015-03-11","v":3882.8733399000002},{"d":"2015-03-12","v":3881.100922},{"d":"2015-03-13","v":3858.398413},{"d":"2015-03-16","v":3947.1327375},{"d":"2015-03-17","v":3913.2373039999998},{"d":"2015-03-18","v":3906.0566700000004},{"d":"2015-03-19","v":3874.8225880000005},{"d":"2015-03-20","v":3933.0531885},{"d":"2015-03-23","v":3912.1047040000003},{"d":"2015-03-24","v":3905.97718},{"d":"2015-03-25","v":3880.0309279999997},{"d":"2015-03-26","v":3846.673878},{"d":"2015-03-27","v":3851.208604},{"d":"2015-03-30","v":3904.8705000000004},{"d":"2015-03-31","v":3860.9890649999998},{"d":"2015-04-01","v":3866.4575119999995},{"d":"2015-04-02","v":3880.227988},{"d":"2015-04-03","v":3882.2713865},{"d":"2015-04-06","v":3892.3026155},{"d":"2015-04-07","v":3937.5586559999997},{"d":"2015-04-08","v":3899.8204600000004},{"d":"2015-04-09","v":3940.8142694999997},{"d":"2015-04-10","v":3963.323584},{"d":"2015-04-13","v":3958.1927640000004},{"d":"2015-04-14","v":3921.5299860000005},{"d":"2015-04-15","v":3920.318985},{"d":"2015-04-16","v":3860.5198799999994},{"d":"2015-04-17","v":3780.5974499999998},{"d":"2015-04-20","v":3819.1706879999997},{"d":"2015-04-21","v":3816.6417869999996},{"d":"2015-04-22","v":3875.8905185},{"d":"2015-04-23","v":3819.170464},{"d":"2015-04-24","v":3854.7190840000003},{"d":"2015-04-27","v":3921.930855},{"d":"2015-04-28","v":3895.4320990000006},{"d":"2015-04-29","v":3782.4119270000006},{"d":"2015-04-30","v":3784.076494},{"d":"2015-05-01","v":3775.7606370000003},{"d":"2015-05-04","v":3781.163952},{"d":"2015-05-05","v":3676.186768},{"d":"2015-05-06","v":3698.2163820000005},{"d":"2015-05-07","v":3689.3900645},{"d":"2015-05-08","v":3807.684958},{"d":"2015-05-11","v":3777.360102},{"d":"2015-05-12","v":3723.3488549999997},{"d":"2015-05-13","v":3699.6432330000002},{"d":"2015-05-14","v":3749.5507979999998},{"d":"2015-05-15","v":3746.721202},{"d":"2015-05-18","v":3761.3230989999997},{"d":"2015-05-19","v":3833.4910879999998},{"d":"2015-05-20","v":3828.424938},{"d":"2015-05-21","v":3837.006544},{"d":"2015-05-22","v":3822.9943739999994},{"d":"2015-05-25","v":3794.4983504999996},{"d":"2015-05-26","v":3752.49024},{"d":"2015-05-27","v":3815.45332},{"d":"2015-05-28","v":3774.103998},{"d":"2015-05-29","v":3690.0440520000006},{"d":"2015-06-01","v":3694.2675839999997},{"d":"2015-06-02","v":3706.1465449999996},{"d":"2015-06-03","v":3772.6873140000002},{"d":"2015-06-04","v":3727.797516},{"d":"2015-06-05","v":3670.5929575},{"d":"2015-06-08","v":3630.4534925000003},{"d":"2015-06-09","v":3629.6295},{"d":"2015-06-10","v":3721.1416959999997},{"d":"2015-06-11","v":3727.374354},{"d":"2015-06-12","v":3661.2703425},{"d":"2015-06-15","v":3607.223044},{"d":"2015-06-16","v":3621.267956},{"d":"2015-06-17","v":3585.1114560000005},{"d":"2015-06-18","v":3613.1387175},{"d":"2015-06-19","v":3600.25244},{"d":"2015-06-22","v":3758.0729535000005},{"d":"2015-06-23","v":3782.0680085},{"d":"2015-06-24","v":3777.0537},{"d":"2015-06-25","v":3787.6640445},{"d":"2015-06-26","v":3774.916088},{"d":"2015-06-29","v":3605.054325},{"d":"2015-06-30","v":3567.949385},{"d":"2015-07-01","v":3664.1014400000004},{"d":"2015-07-02","v":3622.2131750000003},{"d":"2015-07-03","v":3596.983376},{"d":"2015-07-06","v":3506.7066599999994},{"d":"2015-07-07","v":3429.4164995},{"d":"2015-07-08","v":3484.058875},{"d":"2015-07-09","v":3582.1394220000006},{"d":"2015-07-10","v":3695.7227129999997},{"d":"2015-07-13","v":3754.153608},{"d":"2015-07-14","v":3752.9204760000002},{"d":"2015-07-15","v":3776.797314},{"d":"2015-07-16","v":3829.348656},{"d":"2015-07-17","v":3823.3931780000003},{"d":"2015-07-20","v":3848.236533},{"d":"2015-07-21","v":3824.3388659999996},{"d":"2015-07-22","v":3813.5416410000003},{"d":"2015-07-23","v":3830.9105600000003},{"d":"2015-07-24","v":3804.48},{"d":"2015-07-27","v":3749.8829399999995},{"d":"2015-07-28","v":3784.4163280000002},{"d":"2015-07-29","v":3798.4642955},{"d":"2015-07-30","v":3796.6671259999994},{"d":"2015-07-31","v":3819.4319175000005},{"d":"2015-08-03","v":3859.3406400000003},{"d":"2015-08-04","v":3853.8412879999996},{"d":"2015-08-05","v":3924.3791125000002},{"d":"2015-08-06","v":3930.9490284999997},{"d":"2015-08-07","v":3923.3673000000003},{"d":"2015-08-10","v":3983.451213},{"d":"2015-08-11","v":3933.5407440000004},{"d":"2015-08-12","v":3791.734962},{"d":"2015-08-13","v":3827.5050825},{"d":"2015-08-14","v":3784.4510715},{"d":"2015-08-17","v":3791.3738100000005},{"d":"2015-08-18","v":3767.6701020000005},{"d":"2015-08-19","v":3679.532352},{"d":"2015-08-20","v":3611.69796},{"d":"2015-08-21","v":3498.597924},{"d":"2015-08-24","v":3320.0295475},{"d":"2015-08-25","v":3482.6913225},{"d":"2015-08-26","v":3423.1201079999996},{"d":"2015-08-27","v":3561.614768},{"d":"2015-08-28","v":3538.671453},{"d":"2015-08-31","v":3544.1154385},{"d":"2015-09-01","v":3459.6126135000004},{"d":"2015-09-02","v":3481.479281},{"d":"2015-09-03","v":3539.872425},{"d":"2015-09-04","v":3447.0729750000005},{"d":"2015-09-07","v":3484.0284165},{"d":"2015-09-08","v":3545.0971},{"d":"2015-09-09","v":3578.99311},{"d":"2015-09-10","v":3535.5232639999995},{"d":"2015-09-11","v":3502.270884},{"d":"2015-09-14","v":3479.2092719999996},{"d":"2015-09-15","v":3519.5391},{"d":"2015-09-16","v":3565.912914},{"d":"2015-09-17","v":3573.5551039999996},{"d":"2015-09-18","v":3455.191255},{"d":"2015-09-21","v":3463.223764},{"d":"2015-09-22","v":3336.5914350000003},{"d":"2015-09-23","v":3373.9750455},{"d":"2015-09-24","v":3301.9502239999997},{"d":"2015-09-25","v":3412.179018},{"d":"2015-09-28","v":3327.882856},{"d":"2015-09-29","v":3310.425036},{"d":"2015-09-30","v":3375.8544625000004},{"d":"2015-10-01","v":3355.2389125000004},{"d":"2015-10-02","v":3363.491247},{"d":"2015-10-05","v":3482.6297239999994},{"d":"2015-10-06","v":3511.830154},{"d":"2015-10-07","v":3530.00424},{"d":"2015-10-08","v":3514.5614080000005},{"d":"2015-10-09","v":3550.8011595},{"d":"2015-10-12","v":3551.1177215},{"d":"2015-10-13","v":3512.483712},{"d":"2015-10-14","v":3478.8113000000003},{"d":"2015-10-15","v":3505.2021225},{"d":"2015-10-16","v":3533.960232},{"d":"2015-10-19","v":3544.764534},{"d":"2015-10-20","v":3531.3166979999996},{"d":"2015-10-21","v":3560.3498515},{"d":"2015-10-22","v":3623.2030105},{"d":"2015-10-23","v":3693.8796325},{"d":"2015-10-26","v":3710.98728},{"d":"2015-10-27","v":3682.934193},{"d":"2015-10-28","v":3715.3037400000003},{"d":"2015-10-29","v":3709.5015825},{"d":"2015-10-30","v":3716.641479},{"d":"2015-11-02","v":3734.503575},{"d":"2015-11-03","v":3739.6111499999997},{"d":"2015-11-04","v":3711.369514},{"d":"2015-11-05","v":3734.1487935},{"d":"2015-11-06","v":3746.7072630000002},{"d":"2015-11-09","v":3688.752276},{"d":"2015-11-10","v":3695.8353300000003},{"d":"2015-11-11","v":3723.431495},{"d":"2015-11-12","v":3662.4424699999995},{"d":"2015-11-13","v":3640.92821},{"d":"2015-11-16","v":3627.3418355000003},{"d":"2015-11-17","v":3726.36923},{"d":"2015-11-18","v":3730.840232},{"d":"2015-11-19","v":3750.5389285},{"d":"2015-11-20","v":3743.83678},{"d":"2015-11-23","v":3731.2165800000002},{"d":"2015-11-24","v":3691.23296},{"d":"2015-11-25","v":3756.161997},{"d":"2015-11-26","v":3797.9269409999997},{"d":"2015-11-27","v":3807.1858879999995},{"d":"2015-11-30","v":3812.3877625},{"d":"2015-12-01","v":3794.199456},{"d":"2015-12-02","v":3748.580862},{"d":"2015-12-03","v":3632.53891},{"d":"2015-12-04","v":3612.0318374999997},{"d":"2015-12-07","v":3641.2915665},{"d":"2015-12-08","v":3565.2137519999997},{"d":"2015-12-09","v":3551.8401980000003},{"d":"2015-12-10","v":3535.9820595},{"d":"2015-12-11","v":3460.9082445},{"d":"2015-12-14","v":3403.0931219999998},{"d":"2015-12-15","v":3512.500236},{"d":"2015-12-16","v":3504.89901},{"d":"2015-12-17","v":3565.035954},{"d":"2015-12-18","v":3515.8713399999997},{"d":"2015-12-21","v":3479.2078785000003},{"d":"2015-12-22","v":3477.2513760000006},{"d":"2015-12-23","v":3552.0794100000003},{"d":"2015-12-24","v":3551.8258579999997},{"d":"2015-12-25","v":3556.5883395},{"d":"2015-12-28","v":3530.5236334999995},{"d":"2015-12-29","v":3593.3423760000005},{"d":"2015-12-30","v":3551.8403949999997},{"d":"2015-12-31","v":3553.264624},{"d":"2016-01-01","v":3555.06176},{"d":"2016-01-04","v":3435.34698},{"d":"2016-01-05","v":3446.869646},{"d":"2016-01-06","v":3409.9293840000005},{"d":"2016-01-07","v":3349.3455440000002},{"d":"2016-01-08","v":3297.3818899999997},{"d":"2016-01-11","v":3293.1522474999997},{"d":"2016-01-12","v":3333.8903809999997},{"d":"2016-01-13","v":3365.110551},{"d":"2016-01-14","v":3302.6616},{"d":"2016-01-15","v":3227.5035120000002},{"d":"2016-01-18","v":3213.2246634999997},{"d":"2016-01-19","v":3263.3385009999997},{"d":"2016-01-20","v":3154.2741075},{"d":"2016-01-21","v":3223.003616},{"d":"2016-01-22","v":3316.763691},{"d":"2016-01-25","v":3298.355864},{"d":"2016-01-26","v":3352.501336},{"d":"2016-01-27","v":3367.599555},{"d":"2016-01-28","v":3305.5175190000004},{"d":"2016-01-29","v":3375.786774},{"d":"2016-02-01","v":3354.9826555},{"d":"2016-02-02","v":3285.4090499999998},{"d":"2016-02-03","v":3228.7286295},{"d":"2016-02-04","v":3232.4367800000005},{"d":"2016-02-05","v":3183.7415229999997},{"d":"2016-02-08","v":3079.1446935000004},{"d":"2016-02-09","v":3007.9608},{"d":"2016-02-10","v":3064.0503300000005},{"d":"2016-02-11","v":2949.5911574999996},{"d":"2016-02-12","v":3031.500384},{"d":"2016-02-15","v":3121.5078049999997},{"d":"2016-02-16","v":3106.7715120000003},{"d":"2016-02-17","v":3200.241968},{"d":"2016-02-18","v":3193.92948},{"d":"2016-02-19","v":3162.8922325000003},{"d":"2016-02-22","v":3234.342384},{"d":"2016-02-23","v":3155.4732330000006},{"d":"2016-02-24","v":3072.3694559999994},{"d":"2016-02-25","v":3140.2723170000004},{"d":"2016-02-26","v":3192.491484},{"d":"2016-02-29","v":3198.49535},{"d":"2016-03-01","v":3248.08676},{"d":"2016-03-02","v":3273.5820479999998},{"d":"2016-03-03","v":3272.278107},{"d":"2016-03-04","v":3319.2160799999997},{"d":"2016-03-07","v":3313.6825665000006},{"d":"2016-03-08","v":3290.0528595},{"d":"2016-03-09","v":3308.4478419999996},{"d":"2016-03-10","v":3270.086085},{"d":"2016-03-11","v":3367.04052},{"d":"2016-03-14","v":3390.665268},{"d":"2016-03-15","v":3361.8155205},{"d":"2016-03-16","v":3359.2219525000005},{"d":"2016-03-17","v":3331.28157},{"d":"2016-03-18","v":3339.2799895000003},{"d":"2016-03-21","v":3325.903193},{"d":"2016-03-22","v":3329.197053},{"d":"2016-03-23","v":3318.063252},{"d":"2016-03-24","v":3257.626411},{"d":"2016-03-25","v":3260.613141},{"d":"2016-03-28","v":3256.8797284999996},{"d":"2016-03-29","v":3279.0643875},{"d":"2016-03-30","v":3329.6365800000003},{"d":"2016-03-31","v":3288.895885},{"d":"2016-04-01","v":3223.6527840000003},{"d":"2016-04-04","v":3235.55033},{"d":"2016-04-05","v":3145.4233874999995},{"d":"2016-04-06","v":3170.765996},{"d":"2016-04-07","v":3120.9658545000007},{"d":"2016-04-08","v":3164.594265},{"d":"2016-04-11","v":3184.0478355000005},{"d":"2016-04-12","v":3200.2583975000002},{"d":"2016-04-13","v":3313.0210190000003},{"d":"2016-04-14","v":3333.27654},{"d":"2016-04-15","v":3336.713733},{"d":"2016-04-18","v":3343.469536},{"d":"2016-04-19","v":3401.0972244999994},{"d":"2016-04-20","v":3451.115464},{"d":"2016-04-21","v":3468.5924295},{"d":"2016-04-22","v":3450.206208},{"d":"2016-04-25","v":3426.8879039999997},{"d":"2016-04-26","v":3434.043258},{"d":"2016-04-27","v":3442.3773495},{"d":"2016-04-28","v":3428.909253},{"d":"2016-04-29","v":3326.4886850000003},{"d":"2016-05-02","v":3337.2246699999996},{"d":"2016-05-03","v":3265.6716},{"d":"2016-05-04","v":3232.7719374999997},{"d":"2016-05-05","v":3245.7053475},{"d":"2016-05-06","v":3257.396086},{"d":"2016-05-09","v":3268.2612309999995},{"d":"2016-05-10","v":3305.3161634999997},{"d":"2016-05-11","v":3280.174074},{"d":"2016-05-12","v":3242.509116},{"d":"2016-05-13","v":3261.754216},{"d":"2016-05-16","v":3265.7130349999998},{"d":"2016-05-17","v":3259.0763325000003},{"d":"2016-05-18","v":3275.428797},{"d":"2016-05-19","v":3239.312473},{"d":"2016-05-20","v":3292.4408399999998},{"d":"2016-05-23","v":3256.138886},{"d":"2016-05-24","v":3331.901828},{"d":"2016-05-25","v":3386.74192},{"d":"2016-05-26","v":3401.672196},{"d":"2016-05-27","v":3403.5674879999997},{"d":"2016-05-30","v":3415.2335525000003},{"d":"2016-05-31","v":3388.8215760000003},{"d":"2016-06-01","v":3360.1199275},{"d":"2016-06-02","v":3352.2636070000003},{"d":"2016-06-03","v":3324.4328275000003},{"d":"2016-06-06","v":3309.444655},{"d":"2016-06-07","v":3333.2043780000004},{"d":"2016-06-08","v":3301.9565720000005},{"d":"2016-06-09","v":3261.330633},{"d":"2016-06-10","v":3159.5732385},{"d":"2016-06-13","v":3106.05652},{"d":"2016-06-14","v":3021.6536949999995},{"d":"2016-06-15","v":3063.941265},{"d":"2016-06-16","v":3054.852515},{"d":"2016-06-17","v":3083.2293154999998},{"d":"2016-06-20","v":3203.030592},{"d":"2016-06-21","v":3212.14555},{"d":"2016-06-22","v":3235.1892374999998},{"d":"2016-06-23","v":3342.7092509999998},{"d":"2016-06-24","v":3003.1741620000003},{"d":"2016-06-27","v":2907.031088},{"d":"2016-06-28","v":2995.6397530000004},{"d":"2016-06-29","v":3086.6513729999997},{"d":"2016-06-30","v":3103.516079},{"d":"2016-07-01","v":3125.8136520000003},{"d":"2016-07-04","v":3100.345872},{"d":"2016-07-05","v":3042.6922960000006},{"d":"2016-07-06","v":2988.630751},{"d":"2016-07-07","v":3011.265315},{"d":"2016-07-08","v":3082.6464620000006},{"d":"2016-07-11","v":3136.631372},{"d":"2016-07-12","v":3209.1833600000004},{"d":"2016-07-13","v":3196.3690289999995},{"d":"2016-07-14","v":3230.931528},{"d":"2016-07-15","v":3209.247655},{"d":"2016-07-18","v":3208.69696},{"d":"2016-07-19","v":3183.76082},{"d":"2016-07-20","v":3225.5196925},{"d":"2016-07-21","v":3225.264385},{"d":"2016-07-22","v":3219.9653705},{"d":"2016-07-25","v":3222.0785140000003},{"d":"2016-07-26","v":3247.149945},{"d":"2016-07-27","v":3271.532836},{"d":"2016-07-28","v":3221.7778200000002},{"d":"2016-07-29","v":3240.3389220000004},{"d":"2016-08-01","v":3205.1398965},{"d":"2016-08-02","v":3146.660501},{"d":"2016-08-03","v":3158.936759},{"d":"2016-08-04","v":3179.096411},{"d":"2016-08-05","v":3234.0583105},{"d":"2016-08-08","v":3249.8913399999997},{"d":"2016-08-09","v":3304.078085},{"d":"2016-08-10","v":3290.272323},{"d":"2016-08-11","v":3312.6186435},{"d":"2016-08-12","v":3313.3514609999997},{"d":"2016-08-15","v":3315.5168625},{"d":"2016-08-16","v":3271.3596740000003},{"d":"2016-08-17","v":3238.058656},{"d":"2016-08-18","v":3245.7070799999997},{"d":"2016-08-19","v":3227.1754499999997},{"d":"2016-08-22","v":3224.435004},{"d":"2016-08-23","v":3259.7229105},{"d":"2016-08-24","v":3276.35451},{"d":"2016-08-25","v":3262.7068645},{"d":"2016-08-26","v":3296.946272},{"d":"2016-08-29","v":3282.7578},{"d":"2016-08-30","v":3321.702},{"d":"2016-08-31","v":3318.187488},{"d":"2016-09-01","v":3310.1865299999995},{"d":"2016-09-02","v":3368.465625},{"d":"2016-09-05","v":3362.035784},{"d":"2016-09-06","v":3348.316496},{"d":"2016-09-07","v":3370.527732},{"d":"2016-09-08","v":3377.093008},{"d":"2016-09-09","v":3344.93326},{"d":"2016-09-12","v":3290.06496},{"d":"2016-09-13","v":3260.3808000000004},{"d":"2016-09-14","v":3245.5277849999998},{"d":"2016-09-15","v":3249.735856},{"d":"2016-09-16","v":3210.7232125},{"d":"2016-09-19","v":3251.4867739999995},{"d":"2016-09-20","v":3238.071849},{"d":"2016-09-21","v":3251.172636},{"d":"2016-09-22","v":3313.6775865},{"d":"2016-09-23","v":3302.792052},{"d":"2016-09-26","v":3245.494728},{"d":"2016-09-27","v":3235.24476},{"d":"2016-09-28","v":3258.6647895},{"d":"2016-09-29","v":3242.8727200000003},{"d":"2016-09-30","v":3278.8964159999996},{"d":"2016-10-03","v":3273.1625999999997},{"d":"2016-10-04","v":3323.3615},{"d":"2016-10-05","v":3304.2438180000004},{"d":"2016-10-06","v":3303.7955719999995},{"d":"2016-10-07","v":3271.8215280000004},{"d":"2016-10-10","v":3323.550048},{"d":"2016-10-11","v":3301.4631355},{"d":"2016-10-12","v":3279.9559120000004},{"d":"2016-10-13","v":3243.983616},{"d":"2016-10-14","v":3287.1714540000003},{"d":"2016-10-17","v":3272.1334359999996},{"d":"2016-10-18","v":3311.9257805},{"d":"2016-10-19","v":3316.306088},{"d":"2016-10-20","v":3337.9897185000004},{"d":"2016-10-21","v":3328.6323575},{"d":"2016-10-24","v":3345.081432},{"d":"2016-10-25","v":3343.047548},{"d":"2016-10-26","v":3339.1661240000003},{"d":"2016-10-27","v":3340.313559},{"d":"2016-10-28","v":3341.8991719999995},{"d":"2016-10-31","v":3316.9321625000002},{"d":"2016-11-01","v":3260.16496},{"d":"2016-11-02","v":3219.775668},{"d":"2016-11-03","v":3216.721482},{"d":"2016-11-04","v":3187.642417},{"d":"2016-11-07","v":3238.135744},{"d":"2016-11-08","v":3261.978627},{"d":"2016-11-09","v":3286.1230079999996},{"d":"2016-11-10","v":3273.8656140000003},{"d":"2016-11-11","v":3250.908458},{"d":"2016-11-14","v":3257.1457},{"d":"2016-11-15","v":3276.314196},{"d":"2016-11-16","v":3242.290786},{"d":"2016-11-17","v":3254.8673894999997},{"d":"2016-11-18","v":3231.8349755},{"d":"2016-11-21","v":3249.8273549999994},{"d":"2016-11-22","v":3269.914853},{"d":"2016-11-23","v":3253.789434},{"d":"2016-11-24","v":3264.23613},{"d":"2016-11-25","v":3275.331891},{"d":"2016-11-28","v":3244.7192400000004},{"d":"2016-11-29","v":3273.8975499999997},{"d":"2016-11-30","v":3287.499453},{"d":"2016-12-01","v":3264.517009},{"d":"2016-12-02","v":3250.6116530000004},{"d":"2016-12-05","v":3308.7230875},{"d":"2016-12-06","v":3356.107586},{"d":"2016-12-07","v":3404.3028159999994},{"d":"2016-12-08","v":3436.3523835},{"d":"2016-12-09","v":3433.678329},{"d":"2016-12-12","v":3449.1204465},{"d":"2016-12-13","v":3484.641986},{"d":"2016-12-14","v":3450.982395},{"d":"2016-12-15","v":3488.433403},{"d":"2016-12-16","v":3496.8385959999996},{"d":"2016-12-19","v":3481.012725},{"d":"2016-12-20","v":3505.361349},{"d":"2016-12-21","v":3500.1931124999996},{"d":"2016-12-22","v":3499.3565530000005},{"d":"2016-12-23","v":3516.4074785},{"d":"2016-12-26","v":3514.2793979999997},{"d":"2016-12-27","v":3524.5836765000004},{"d":"2016-12-28","v":3512.656672},{"d":"2016-12-29","v":3511.0892440000002},{"d":"2016-12-30","v":3528.589122},{"d":"2017-01-02","v":3544.4127375000003},{"d":"2017-01-03","v":3543.9221310000003},{"d":"2017-01-04","v":3553.229796},{"d":"2017-01-05","v":3551.4418995},{"d":"2017-01-06","v":3563.0840228},{"d":"2017-01-09","v":3552.3447435},{"d":"2017-01-10","v":3548.3898825},{"d":"2017-01-11","v":3550.2466050000003},{"d":"2017-01-12","v":3525.807425},{"d":"2017-01-13","v":3568.2468258},{"d":"2017-01-16","v":3531.2419805},{"d":"2017-01-17","v":3524.683668},{"d":"2017-01-18","v":3527.7093000000004},{"d":"2017-01-19","v":3530.6886065000003},{"d":"2017-01-20","v":3536.6037472},{"d":"2017-01-23","v":3512.79018},{"d":"2017-01-24","v":3526.1680615},{"d":"2017-01-25","v":3573.1166375},{"d":"2017-01-26","v":3545.6606225},{"d":"2017-01-27","v":3535.9174653},{"d":"2017-01-30","v":3473.0023039999996},{"d":"2017-01-31","v":3450.850842},{"d":"2017-02-01","v":3485.577886},{"d":"2017-02-02","v":3475.6688825},{"d":"2017-02-03","v":3504.0933727},{"d":"2017-02-06","v":3449.2858965},{"d":"2017-02-07","v":3448.1343615},{"d":"2017-02-08","v":3445.760266},{"d":"2017-02-09","v":3498.8769355},{"d":"2017-02-10","v":3489.8120685000004},{"d":"2017-02-13","v":3522.2183495},{"d":"2017-02-14","v":3522.1479604999995},{"d":"2017-02-15","v":3541.5791905},{"d":"2017-02-16","v":3524.105424},{"d":"2017-02-17","v":3522.3936855},{"d":"2017-02-20","v":3525.8735354999994},{"d":"2017-02-21","v":3552.8801535},{"d":"2017-02-22","v":3561.8323455000004},{"d":"2017-02-23","v":3551.1674940000003},{"d":"2017-02-24","v":3527.9420975000003},{"d":"2017-02-27","v":3535.490655},{"d":"2017-02-28","v":3531.8990595},{"d":"2017-03-01","v":3608.3593699999997},{"d":"2017-03-02","v":3604.2084435},{"d":"2017-03-03","v":3643.1588254999997},{"d":"2017-03-06","v":3628.1390330000004},{"d":"2017-03-07","v":3624.9557520000003},{"d":"2017-03-08","v":3626.3849569999998},{"d":"2017-03-09","v":3651.1397175},{"d":"2017-03-10","v":3685.52332005},{"d":"2017-03-13","v":3666.6992895},{"d":"2017-03-14","v":3641.9793305},{"d":"2017-03-15","v":3661.780146},{"d":"2017-03-16","v":3691.5930740000003},{"d":"2017-03-17","v":3706.1786475000004},{"d":"2017-03-20","v":3686.181678},{"d":"2017-03-21","v":3683.9263229999997},{"d":"2017-03-22","v":3662.372455},{"d":"2017-03-23","v":3697.457389},{"d":"2017-03-24","v":3695.5729499999998},{"d":"2017-03-27","v":3680.3176550000003},{"d":"2017-03-28","v":3718.1933635000005},{"d":"2017-03-29","v":3727.0533115},{"d":"2017-03-30","v":3721.6349410000003},{"d":"2017-03-31","v":3741.6189375000004},{"d":"2017-04-03","v":3711.3573310000006},{"d":"2017-04-04","v":3723.113121},{"d":"2017-04-05","v":3721.043099},{"d":"2017-04-06","v":3739.5976905},{"d":"2017-04-07","v":3741.72953},{"d":"2017-04-10","v":3719.3722060000005},{"d":"2017-04-11","v":3707.5642379999995},{"d":"2017-04-12","v":3711.1322745},{"d":"2017-04-13","v":3681.1899630000003},{"d":"2017-04-14","v":3680.8451370000002},{"d":"2017-04-17","v":3686.0175270000004},{"d":"2017-04-18","v":3645.2253090000004},{"d":"2017-04-19","v":3657.5514585},{"d":"2017-04-20","v":3681.3481045},{"d":"2017-04-21","v":3678.5086975},{"d":"2017-04-24","v":3870.904029},{"d":"2017-04-25","v":3891.1326019999997},{"d":"2017-04-26","v":3875.5639945000003},{"d":"2017-04-27","v":3851.7383255000004},{"d":"2017-04-28","v":3859.4854575},{"d":"2017-05-01","v":3864.8248425},{"d":"2017-05-02","v":3878.2429085},{"d":"2017-05-03","v":3882.6535624999997},{"d":"2017-05-04","v":3930.2637980000004},{"d":"2017-05-05","v":3972.8971214999997},{"d":"2017-05-08","v":3974.0883265},{"d":"2017-05-09","v":3997.749594},{"d":"2017-05-10","v":3997.0070489999994},{"d":"2017-05-11","v":3967.2437175000005},{"d":"2017-05-12","v":3980.3562599999996},{"d":"2017-05-15","v":3983.670438},{"d":"2017-05-16","v":3979.6752975000004},{"d":"2017-05-17","v":3916.6060164999994},{"d":"2017-05-18","v":3875.5172489999995},{"d":"2017-05-19","v":3911.0963535},{"d":"2017-05-22","v":3912.5449935},{"d":"2017-05-23","v":3925.2335055000003},{"d":"2017-05-24","v":3917.1270329999998},{"d":"2017-05-25","v":3909.847912500001},{"d":"2017-05-26","v":3896.5506543999995},{"d":"2017-05-29","v":3904.4555025},{"d":"2017-05-30","v":3884.0445929999996},{"d":"2017-05-31","v":3867.9271085},{"d":"2017-06-01","v":3886.803343},{"d":"2017-06-02","v":3901.2373339},{"d":"2017-06-05","v":3888.2861875},{"d":"2017-06-06","v":3856.463009},{"d":"2017-06-07","v":3855.282334},{"d":"2017-06-08","v":3864.493278},{"d":"2017-06-09","v":3893.2886169},{"d":"2017-06-12","v":3846.4261324999998},{"d":"2017-06-13","v":3863.3131395},{"d":"2017-06-14","v":3864.0878525000003},{"d":"2017-06-15","v":3833.0563850000003},{"d":"2017-06-16","v":3863.1658686},{"d":"2017-06-19","v":3894.0461029999997},{"d":"2017-06-20","v":3873.8200469999997},{"d":"2017-06-21","v":3860.2018175},{"d":"2017-06-22","v":3853.910476},{"d":"2017-06-23","v":3845.9736224},{"d":"2017-06-26","v":3872.8797360000003},{"d":"2017-06-27","v":3853.7612280000003},{"d":"2017-06-28","v":3853.7612280000003}]}},{"instrumentId":72,"timeSeries":{"entries":[{"d":"2010-01-01","v":1131.325559},{"d":"2010-01-04","v":1148.388498},{"d":"2010-01-05","v":1146.1408665},{"d":"2010-01-06","v":1143.0290165},{"d":"2010-01-07","v":1143.173881},{"d":"2010-01-08","v":1143.912222},{"d":"2010-01-11","v":1141.4601575000002},{"d":"2010-01-12","v":1133.4853215},{"d":"2010-01-13","v":1134.1702575},{"d":"2010-01-14","v":1141.671027},{"d":"2010-01-15","v":1127.049372},{"d":"2010-01-18","v":1134.1174509999998},{"d":"2010-01-19","v":1146.3026895},{"d":"2010-01-20","v":1125.340224},{"d":"2010-01-21","v":1106.0090615},{"d":"2010-01-22","v":1095.3221535},{"d":"2010-01-25","v":1084.5170685},{"d":"2010-01-26","v":1092.7516005},{"d":"2010-01-27","v":1081.661425},{"d":"2010-01-28","v":1064.263857},{"d":"2010-01-29","v":1075.429065},{"d":"2010-02-01","v":1082.0160764999998},{"d":"2010-02-02","v":1093.154545},{"d":"2010-02-03","v":1084.5163425},{"d":"2010-02-04","v":1049.4363715},{"d":"2010-02-05","v":1029.1422675000001},{"d":"2010-02-08","v":1038.222333},{"d":"2010-02-09","v":1039.925139},{"d":"2010-02-10","v":1047.8225185},{"d":"2010-02-11","v":1050.9736455},{"d":"2010-02-12","v":1049.929721},{"d":"2010-02-15","v":1056.0765425},{"d":"2010-02-16","v":1069.9475994999998},{"d":"2010-02-17","v":1082.98953},{"d":"2010-02-18","v":1089.27108},{"d":"2010-02-19","v":1093.2837100000002},{"d":"2010-02-22","v":1087.3106595},{"d":"2010-02-23","v":1073.836893},{"d":"2010-02-24","v":1077.142668},{"d":"2010-02-25","v":1059.114196},{"d":"2010-02-26","v":1069.8553475},{"d":"2010-03-01","v":1081.592721},{"d":"2010-03-02","v":1091.0883935},{"d":"2010-03-03","v":1098.87631},{"d":"2010-03-04","v":1100.472798},{"d":"2010-03-05","v":1119.7261529999998},{"d":"2010-03-08","v":1118.870805},{"d":"2010-03-09","v":1119.1330375},{"d":"2010-03-10","v":1124.022725},{"d":"2010-03-11","v":1119.5437725},{"d":"2010-03-12","v":1117.0272265},{"d":"2010-03-15","v":1106.944902},{"d":"2010-03-16","v":1117.979814},{"d":"2010-03-17","v":1125.820773},{"d":"2010-03-18","v":1118.6484265},{"d":"2010-03-19","v":1109.637829},{"d":"2010-03-22","v":1108.516545},{"d":"2010-03-23","v":1107.5717574999999},{"d":"2010-03-24","v":1110.94347},{"d":"2010-03-25","v":1119.506292},{"d":"2010-03-26","v":1114.7557575},{"d":"2010-03-29","v":1120.1847655},{"d":"2010-03-30","v":1120.2772499999999},{"d":"2010-03-31","v":1112.6893865},{"d":"2010-04-01","v":1136.1520885},{"d":"2010-04-02","v":1137.3422334999998},{"d":"2010-04-05","v":1136.6281465},{"d":"2010-04-06","v":1140.3047435},{"d":"2010-04-07","v":1136.4275894999998},{"d":"2010-04-08","v":1128.0461595000002},{"d":"2010-04-09","v":1147.0722125},{"d":"2010-04-12","v":1147.7275425},{"d":"2010-04-13","v":1140.957444},{"d":"2010-04-14","v":1149.317875},{"d":"2010-04-15","v":1156.6151025},{"d":"2010-04-16","v":1134.058448},{"d":"2010-04-19","v":1129.2572445},{"d":"2010-04-20","v":1143.976885},{"d":"2010-04-21","v":1132.0370504999999},{"d":"2010-04-22","v":1116.85728},{"d":"2010-04-23","v":1124.5536645},{"d":"2010-04-26","v":1135.23159},{"d":"2010-04-27","v":1096.0969535},{"d":"2010-04-28","v":1086.9708004999998},{"d":"2010-04-29","v":1096.4886485},{"d":"2010-04-30","v":1085.997643},{"d":"2010-05-03","v":1088.4085135},{"d":"2010-05-04","v":1057.5679035},{"d":"2010-05-05","v":1055.9388075},{"d":"2010-05-06","v":1020.0256549999999},{"d":"2010-05-07","v":989.2097050000001},{"d":"2010-05-10","v":1065.9477885},{"d":"2010-05-11","v":1050.770638},{"d":"2010-05-12","v":1058.2292925},{"d":"2010-05-13","v":1059.8410845},{"d":"2010-05-14","v":1021.1355990000001},{"d":"2010-05-17","v":1023.6453825000001},{"d":"2010-05-18","v":1035.8148335},{"d":"2010-05-19","v":1028.433911},{"d":"2010-05-20","v":1015.143745},{"d":"2010-05-21","v":1014.7451045},{"d":"2010-05-24","v":1008.9126705},{"d":"2010-05-25","v":986.4065975},{"d":"2010-05-26","v":993.053656},{"d":"2010-05-27","v":1032.6261915},{"d":"2010-05-28","v":1028.0034625},{"d":"2010-05-31","v":1031.207373},{"d":"2010-06-01","v":1022.9792849999999},{"d":"2010-06-02","v":1024.1200545},{"d":"2010-06-03","v":1031.0158875},{"d":"2010-06-04","v":1002.03017},{"d":"2010-06-07","v":992.2406715},{"d":"2010-06-08","v":977.765425},{"d":"2010-06-09","v":989.7470485},{"d":"2010-06-10","v":1007.1493609999999},{"d":"2010-06-11","v":1021.3861895},{"d":"2010-06-14","v":1034.13909},{"d":"2010-06-15","v":1041.8594625},{"d":"2010-06-16","v":1039.1045945},{"d":"2010-06-17","v":1031.0816595},{"d":"2010-06-18","v":1027.3969875},{"d":"2010-06-21","v":1036.1753820000001},{"d":"2010-06-22","v":1022.2429585000001},{"d":"2010-06-23","v":1013.6427309999999},{"d":"2010-06-24","v":994.0238639999999},{"d":"2010-06-25","v":983.366395},{"d":"2010-06-28","v":983.3770625000001},{"d":"2010-06-29","v":941.8325760000001},{"d":"2010-06-30","v":942.8951050000001},{"d":"2010-07-01","v":926.4890509999999},{"d":"2010-07-02","v":929.6124},{"d":"2010-07-05","v":925.7396040000001},{"d":"2010-07-06","v":952.0006815},{"d":"2010-07-07","v":962.4508065000001},{"d":"2010-07-08","v":976.0996074999999},{"d":"2010-07-09","v":984.6838430000001},{"d":"2010-07-12","v":988.5851145},{"d":"2010-07-13","v":1011.5784550000001},{"d":"2010-07-14","v":1009.4848800000001},{"d":"2010-07-15","v":1002.7979020000001},{"d":"2010-07-16","v":990.2606804999999},{"d":"2010-07-19","v":987.7447225000001},{"d":"2010-07-20","v":984.5289999999999},{"d":"2010-07-21","v":980.2599755},{"d":"2010-07-22","v":1003.9903499999999},{"d":"2010-07-23","v":1020.42051},{"d":"2010-07-26","v":1025.5426675},{"d":"2010-07-27","v":1044.644583},{"d":"2010-07-28","v":1039.56937},{"d":"2010-07-29","v":1027.012941},{"d":"2010-07-30","v":1019.7126014999999},{"d":"2010-08-02","v":1056.9240750000001},{"d":"2010-08-03","v":1060.5951814999999},{"d":"2010-08-04","v":1070.7215685},{"d":"2010-08-05","v":1062.4132789999999},{"d":"2010-08-06","v":1052.127603},{"d":"2010-08-09","v":1074.3892895000001},{"d":"2010-08-10","v":1062.033407},{"d":"2010-08-11","v":1028.8603435},{"d":"2010-08-12","v":1020.0553849999999},{"d":"2010-08-13","v":1018.7956179999999},{"d":"2010-08-16","v":1012.0903500000001},{"d":"2010-08-17","v":1027.9377419999998},{"d":"2010-08-18","v":1020.7739099999999},{"d":"2010-08-19","v":992.181656},{"d":"2010-08-20","v":982.292616},{"d":"2010-08-23","v":991.1497395000001},{"d":"2010-08-24","v":964.3659025000001},{"d":"2010-08-25","v":958.137697},{"d":"2010-08-26","v":963.382656},{"d":"2010-08-27","v":975.8237160000001},{"d":"2010-08-30","v":966.9738485},{"d":"2010-08-31","v":958.952493},{"d":"2010-09-01","v":994.398951},{"d":"2010-09-02","v":992.0391135},{"d":"2010-09-03","v":1011.47956},{"d":"2010-09-06","v":1006.0314525},{"d":"2010-09-07","v":987.6277074999999},{"d":"2010-09-08","v":1000.8727525},{"d":"2010-09-09","v":1012.860585},{"d":"2010-09-10","v":1012.0400480000001},{"d":"2010-09-13","v":1022.3007185},{"d":"2010-09-14","v":1018.332056},{"d":"2010-09-15","v":1022.2195830000001},{"d":"2010-09-16","v":1031.89485},{"d":"2010-09-17","v":1017.796341},{"d":"2010-09-20","v":1027.7903895},{"d":"2010-09-21","v":1026.9019250000001},{"d":"2010-09-22","v":1012.3514895},{"d":"2010-09-23","v":1005.1660814999999},{"d":"2010-09-24","v":1027.1261690000001},{"d":"2010-09-27","v":1019.9230924999999},{"d":"2010-09-28","v":1016.3112409999999},{"d":"2010-09-29","v":1011.9745230000001},{"d":"2010-09-30","v":1013.0450874999999},{"d":"2010-10-01","v":1014.5450070000002},{"d":"2010-10-04","v":997.5647574999999},{"d":"2010-10-05","v":1019.2653225000001},{"d":"2010-10-06","v":1025.6570485},{"d":"2010-10-07","v":1029.913027},{"d":"2010-10-08","v":1028.2530869999998},{"d":"2010-10-11","v":1027.256812},{"d":"2010-10-12","v":1020.0037994999999},{"d":"2010-10-13","v":1040.4701969999999},{"d":"2010-10-14","v":1039.3329675},{"d":"2010-10-15","v":1040.2997355},{"d":"2010-10-18","v":1044.278787},{"d":"2010-10-19","v":1036.5238125},{"d":"2010-10-20","v":1047.1678585},{"d":"2010-10-21","v":1051.3562745},{"d":"2010-10-22","v":1061.5984365},{"d":"2010-10-25","v":1054.382741},{"d":"2010-10-26","v":1059.7903275},{"d":"2010-10-27","v":1051.8740125},{"d":"2010-10-28","v":1061.3193675},{"d":"2010-10-29","v":1061.86625},{"d":"2010-11-01","v":1067.962685},{"d":"2010-11-02","v":1071.2371075},{"d":"2010-11-03","v":1066.0823489999998},{"d":"2010-11-04","v":1076.0031494999998},{"d":"2010-11-05","v":1071.4185320000001},{"d":"2010-11-08","v":1068.0493325},{"d":"2010-11-09","v":1063.734864},{"d":"2010-11-10","v":1058.7470985},{"d":"2010-11-11","v":1056.711157},{"d":"2010-11-12","v":1059.835821},{"d":"2010-11-15","v":1064.3420370000001},{"d":"2010-11-16","v":1043.12625},{"d":"2010-11-17","v":1047.6005695000001},{"d":"2010-11-18","v":1076.10166},{"d":"2010-11-19","v":1064.2347},{"d":"2010-11-22","v":1048.3441215},{"d":"2010-11-23","v":1021.91925},{"d":"2010-11-24","v":1026.8169449999998},{"d":"2010-11-25","v":1037.438253},{"d":"2010-11-26","v":1026.759005},{"d":"2010-11-29","v":996.999185},{"d":"2010-11-30","v":987.9594795000002},{"d":"2010-12-01","v":1017.8881019999999},{"d":"2010-12-02","v":1029.5916189999998},{"d":"2010-12-03","v":1020.912525},{"d":"2010-12-06","v":1021.9426875},{"d":"2010-12-07","v":1033.1711885},{"d":"2010-12-08","v":1037.515663},{"d":"2010-12-09","v":1040.885748},{"d":"2010-12-10","v":1036.7984299999998},{"d":"2010-12-13","v":1037.599668},{"d":"2010-12-14","v":1032.0551874999999},{"d":"2010-12-15","v":1023.0225615},{"d":"2010-12-16","v":1025.564225},{"d":"2010-12-17","v":1018.1915224999999},{"d":"2010-12-20","v":1016.083376},{"d":"2010-12-21","v":1017.316244},{"d":"2010-12-22","v":1011.3077175000001},{"d":"2010-12-23","v":1021.6461954999999},{"d":"2010-12-24","v":1025.4332430000002},{"d":"2010-12-27","v":1017.05232},{"d":"2010-12-28","v":1006.8211009999999},{"d":"2010-12-29","v":1008.4244000000001},{"d":"2010-12-30","v":989.31613},{"d":"2010-12-31","v":987.2254770000001},{"d":"2011-01-03","v":993.1136039999999},{"d":"2011-01-04","v":1016.2488820000001},{"d":"2011-01-05","v":1026.7892599999998},{"d":"2011-01-06","v":1019.2504475},{"d":"2011-01-07","v":1009.7588445},{"d":"2011-01-10","v":1003.9736539999999},{"d":"2011-01-11","v":1022.5629775},{"d":"2011-01-12","v":1046.347568},{"d":"2011-01-13","v":1057.413966},{"d":"2011-01-14","v":1058.1939315},{"d":"2011-01-17","v":1053.285172},{"d":"2011-01-18","v":1070.466705},{"d":"2011-01-19","v":1053.9308354999998},{"d":"2011-01-20","v":1057.3219255},{"d":"2011-01-21","v":1068.089584},{"d":"2011-01-24","v":1065.34428},{"d":"2011-01-25","v":1051.652008},{"d":"2011-01-26","v":1060.421115},{"d":"2011-01-27","v":1067.197984},{"d":"2011-01-28","v":1043.877486},{"d":"2011-01-31","v":1051.6707179999999},{"d":"2011-02-01","v":1068.498594},{"d":"2011-02-02","v":1079.136492},{"d":"2011-02-03","v":1071.527015},{"d":"2011-02-04","v":1080.416709},{"d":"2011-02-07","v":1090.658142},{"d":"2011-02-08","v":1102.334606},{"d":"2011-02-09","v":1098.2369700000002},{"d":"2011-02-10","v":1098.82333},{"d":"2011-02-11","v":1102.026625},{"d":"2011-02-14","v":1096.0022235000001},{"d":"2011-02-15","v":1097.8002675},{"d":"2011-02-16","v":1102.3345445},{"d":"2011-02-17","v":1098.486298},{"d":"2011-02-18","v":1097.163239},{"d":"2011-02-21","v":1083.061356},{"d":"2011-02-22","v":1064.981239},{"d":"2011-02-23","v":1057.8930175},{"d":"2011-02-24","v":1047.9251665},{"d":"2011-02-25","v":1057.7942875},{"d":"2011-02-28","v":1070.201272},{"d":"2011-03-01","v":1058.3062875},{"d":"2011-03-02","v":1054.307919},{"d":"2011-03-03","v":1074.866338},{"d":"2011-03-04","v":1060.6743840000001},{"d":"2011-03-07","v":1054.388552},{"d":"2011-03-08","v":1063.284894},{"d":"2011-03-09","v":1051.679872},{"d":"2011-03-10","v":1036.294732},{"d":"2011-03-11","v":1034.609966},{"d":"2011-03-14","v":1023.9040319999999},{"d":"2011-03-15","v":991.891675},{"d":"2011-03-16","v":953.8332465},{"d":"2011-03-17","v":977.5336860000001},{"d":"2011-03-18","v":990.3333135},{"d":"2011-03-21","v":1014.603196},{"d":"2011-03-22","v":1009.8094319999999},{"d":"2011-03-23","v":1014.2352},{"d":"2011-03-24","v":1029.7512649999999},{"d":"2011-03-25","v":1038.3468665},{"d":"2011-03-28","v":1035.9597105},{"d":"2011-03-29","v":1041.6104875},{"d":"2011-03-30","v":1047.3693845},{"d":"2011-03-31","v":1037.7388305},{"d":"2011-04-01","v":1064.995828},{"d":"2011-04-04","v":1063.0518225},{"d":"2011-04-05","v":1067.8089630000002},{"d":"2011-04-06","v":1072.253427},{"d":"2011-04-07","v":1068.9151709999999},{"d":"2011-04-08","v":1073.9152845},{"d":"2011-04-11","v":1069.767414},{"d":"2011-04-12","v":1043.7355335},{"d":"2011-04-13","v":1046.1261525},{"d":"2011-04-14","v":1040.98575},{"d":"2011-04-15","v":1039.586619},{"d":"2011-04-18","v":1011.9544635000001},{"d":"2011-04-19","v":1027.192192},{"d":"2011-04-20","v":1044.897843},{"d":"2011-04-21","v":1049.8734075},{"d":"2011-04-22","v":1050.4431725000002},{"d":"2011-04-25","v":1045.5594725},{"d":"2011-04-26","v":1044.594158},{"d":"2011-04-27","v":1062.235676},{"d":"2011-04-28","v":1066.498208},{"d":"2011-04-29","v":1058.546055},{"d":"2011-05-02","v":1059.5957724999998},{"d":"2011-05-03","v":1052.575315},{"d":"2011-05-04","v":1039.4452795000002},{"d":"2011-05-05","v":1028.316604},{"d":"2011-05-06","v":1037.9413275000002},{"d":"2011-05-09","v":1028.286499},{"d":"2011-05-10","v":1049.0064115},{"d":"2011-05-11","v":1044.7322035},{"d":"2011-05-12","v":1038.704955},{"d":"2011-05-13","v":1033.014191},{"d":"2011-05-16","v":1027.4948325},{"d":"2011-05-17","v":1018.779772},{"d":"2011-05-18","v":1025.828195},{"d":"2011-05-19","v":1035.389646},{"d":"2011-05-20","v":1020.0880520000001},{"d":"2011-05-23","v":1004.99696},{"d":"2011-05-24","v":1006.3417585},{"d":"2011-05-25","v":1005.4366429999999},{"d":"2011-05-26","v":1000.356658},{"d":"2011-05-27","v":1001.744562},{"d":"2011-05-30","v":1000.8929965},{"d":"2011-05-31","v":1017.9386804999999},{"d":"2011-06-01","v":990.167095},{"d":"2011-06-02","v":986.143424},{"d":"2011-06-03","v":982.2110215000001},{"d":"2011-06-06","v":974.3687385},{"d":"2011-06-07","v":982.1551259999999},{"d":"2011-06-08","v":966.6213164999999},{"d":"2011-06-09","v":977.6200544999999},{"d":"2011-06-10","v":957.0108230000001},{"d":"2011-06-13","v":957.042381},{"d":"2011-06-14","v":975.8553425},{"d":"2011-06-15","v":956.7399375},{"d":"2011-06-16","v":952.464777},{"d":"2011-06-17","v":963.0856249999999},{"d":"2011-06-20","v":956.8970385},{"d":"2011-06-21","v":969.8441760000001},{"d":"2011-06-22","v":958.3729465000001},{"d":"2011-06-23","v":939.1300925},{"d":"2011-06-24","v":926.6491425},{"d":"2011-06-27","v":935.381874},{"d":"2011-06-28","v":940.8589045},{"d":"2011-06-29","v":961.8679005},{"d":"2011-06-30","v":984.7454099999999},{"d":"2011-07-01","v":1001.759946},{"d":"2011-07-04","v":1003.0787305},{"d":"2011-07-05","v":987.7415735000001},{"d":"2011-07-06","v":978.4030725},{"d":"2011-07-07","v":990.0638465},{"d":"2011-07-08","v":966.9217634999999},{"d":"2011-07-11","v":941.8371600000002},{"d":"2011-07-12","v":923.438316},{"d":"2011-07-13","v":920.8684890000001},{"d":"2011-07-14","v":917.3053890000001},{"d":"2011-07-15","v":914.5596},{"d":"2011-07-18","v":899.9771445},{"d":"2011-07-19","v":916.8640559999999},{"d":"2011-07-20","v":928.94145},{"d":"2011-07-21","v":947.12275},{"d":"2011-07-22","v":949.9134435000001},{"d":"2011-07-25","v":933.1772685},{"d":"2011-07-26","v":935.117456},{"d":"2011-07-27","v":915.7984009999999},{"d":"2011-07-28","v":916.0405754999999},{"d":"2011-07-29","v":895.3504905000001},{"d":"2011-08-01","v":876.1919165},{"d":"2011-08-02","v":838.177285},{"d":"2011-08-03","v":837.4175614999999},{"d":"2011-08-04","v":795.2053125000001},{"d":"2011-08-05","v":789.6867725},{"d":"2011-08-08","v":743.315664},{"d":"2011-08-09","v":727.4148299999999},{"d":"2011-08-10","v":689.7832314999999},{"d":"2011-08-11","v":744.7199999999999},{"d":"2011-08-12","v":787.784216},{"d":"2011-08-15","v":804.60066},{"d":"2011-08-16","v":818.954865},{"d":"2011-08-17","v":814.6560095000001},{"d":"2011-08-18","v":777.7651140000002},{"d":"2011-08-19","v":759.0611674999999},{"d":"2011-08-22","v":769.8476625},{"d":"2011-08-23","v":783.17152},{"d":"2011-08-24","v":793.688197},{"d":"2011-08-25","v":779.8733215000001},{"d":"2011-08-26","v":791.870109},{"d":"2011-08-29","v":809.026022},{"d":"2011-08-30","v":816.406637},{"d":"2011-08-31","v":821.4289670000001},{"d":"2011-09-01","v":809.370569},{"d":"2011-09-02","v":779.935635},{"d":"2011-09-05","v":740.235712},{"d":"2011-09-06","v":799.19091},{"d":"2011-09-07","v":822.926864},{"d":"2011-09-08","v":832.8625460000001},{"d":"2011-09-09","v":806.03852},{"d":"2011-09-12","v":783.5181569999999},{"d":"2011-09-13","v":794.3960685000001},{"d":"2011-09-14","v":803.7766625},{"d":"2011-09-15","v":822.1164815},{"d":"2011-09-16","v":827.9653950000001},{"d":"2011-09-19","v":810.112279},{"d":"2011-09-20","v":830.9816969999999},{"d":"2011-09-21","v":821.003601},{"d":"2011-09-22","v":786.1357660000001},{"d":"2011-09-23","v":794.4429375},{"d":"2011-09-26","v":810.1457525},{"d":"2011-09-27","v":842.7605025000001},{"d":"2011-09-28","v":836.0150985},{"d":"2011-09-29","v":842.6074305},{"d":"2011-09-30","v":832.6970524999999},{"d":"2011-10-03","v":823.5843135000001},{"d":"2011-10-04","v":811.7481190000001},{"d":"2011-10-05","v":841.17929},{"d":"2011-10-06","v":865.4486820000001},{"d":"2011-10-07","v":874.542059},{"d":"2011-10-10","v":881.828038},{"d":"2011-10-11","v":883.950186},{"d":"2011-10-12","v":891.5218454999999},{"d":"2011-10-13","v":885.532505},{"d":"2011-10-14","v":891.3621929999999},{"d":"2011-10-17","v":885.2419124999999},{"d":"2011-10-18","v":879.59682},{"d":"2011-10-19","v":890.8134765000001},{"d":"2011-10-20","v":871.5831489999998},{"d":"2011-10-21","v":887.0704790000001},{"d":"2011-10-24","v":894.9534395000001},{"d":"2011-10-25","v":884.9559875},{"d":"2011-10-26","v":890.122167},{"d":"2011-10-27","v":914.7375},{"d":"2011-10-28","v":915.769923},{"d":"2011-10-31","v":894.3645735},{"d":"2011-11-01","v":868.2182675},{"d":"2011-11-02","v":875.0686034999999},{"d":"2011-11-03","v":888.8538010000001},{"d":"2011-11-04","v":884.8158279999999},{"d":"2011-11-07","v":894.1233470000001},{"d":"2011-11-08","v":900.8453374999999},{"d":"2011-11-09","v":883.224875},{"d":"2011-11-10","v":881.5493925},{"d":"2011-11-11","v":904.1368309999999},{"d":"2011-11-14","v":895.7263145},{"d":"2011-11-15","v":893.278452},{"d":"2011-11-16","v":894.571435},{"d":"2011-11-17","v":888.1908875},{"d":"2011-11-18","v":881.090325},{"d":"2011-11-21","v":853.4797950000001},{"d":"2011-11-22","v":845.9642675},{"d":"2011-11-23","v":831.4378065},{"d":"2011-11-24","v":827.72484},{"d":"2011-11-25","v":837.5466329999999},{"d":"2011-11-28","v":865.5716385000001},{"d":"2011-11-29","v":870.43084},{"d":"2011-11-30","v":900.9824415},{"d":"2011-12-01","v":899.537675},{"d":"2011-12-02","v":909.9740895},{"d":"2011-12-05","v":914.9363705},{"d":"2011-12-06","v":919.6318125},{"d":"2011-12-07","v":917.9506845000001},{"d":"2011-12-08","v":905.83194},{"d":"2011-12-09","v":916.1232585},{"d":"2011-12-12","v":902.0245},{"d":"2011-12-13","v":905.506133},{"d":"2011-12-14","v":893.7813239999999},{"d":"2011-12-15","v":892.6858285000001},{"d":"2011-12-16","v":884.793096},{"d":"2011-12-19","v":883.9001834999999},{"d":"2011-12-20","v":897.5733285},{"d":"2011-12-21","v":894.7242435000001},{"d":"2011-12-22","v":905.142485},{"d":"2011-12-23","v":914.2689060000001},{"d":"2011-12-26","v":914.4558959999999},{"d":"2011-12-27","v":913.536055},{"d":"2011-12-28","v":906.8695755},{"d":"2011-12-29","v":914.8853670000001},{"d":"2011-12-30","v":920.8670054999999},{"d":"2012-01-02","v":927.2580065},{"d":"2012-01-03","v":942.631602},{"d":"2012-01-04","v":940.8628125},{"d":"2012-01-05","v":932.841861},{"d":"2012-01-06","v":930.5517735},{"d":"2012-01-09","v":922.972642},{"d":"2012-01-10","v":938.8512575000001},{"d":"2012-01-11","v":933.7840525},{"d":"2012-01-12","v":926.9949615},{"d":"2012-01-13","v":923.1834645},{"d":"2012-01-16","v":934.873068},{"d":"2012-01-17","v":941.218179},{"d":"2012-01-18","v":940.3393895},{"d":"2012-01-19","v":949.5939915},{"d":"2012-01-20","v":945.020655},{"d":"2012-01-23","v":946.6409424999999},{"d":"2012-01-24","v":947.3211305},{"d":"2012-01-25","v":940.1246775000001},{"d":"2012-01-26","v":946.8039160000001},{"d":"2012-01-27","v":937.2186180000001},{"d":"2012-01-30","v":928.7824424999999},{"d":"2012-01-31","v":932.6466720000001},{"d":"2012-02-01","v":948.889799},{"d":"2012-02-02","v":948.808168},{"d":"2012-02-03","v":965.6339885},{"d":"2012-02-06","v":965.3333335000001},{"d":"2012-02-07","v":965.2883224999999},{"d":"2012-02-08","v":962.0571485},{"d":"2012-02-09","v":964.68795},{"d":"2012-02-10","v":954.6125159999999},{"d":"2012-02-13","v":962.337073},{"d":"2012-02-14","v":959.4105504999999},{"d":"2012-02-15","v":964.1254165},{"d":"2012-02-16","v":966.239293305795},{"d":"2012-02-17","v":969.9468525},{"d":"2012-02-20","v":974.2259009999999},{"d":"2012-02-21","v":972.053599},{"d":"2012-02-22","v":962.4835770000001},{"d":"2012-02-23","v":960.7743145},{"d":"2012-02-24","v":960.2793055000001},{"d":"2012-02-27","v":960.5768589999999},{"d":"2012-02-28","v":960.8373525},{"d":"2012-02-29","v":959.7044175},{"d":"2012-03-01","v":971.1153565000001},{"d":"2012-03-02","v":970.9468125},{"d":"2012-03-05","v":966.6738900000001},{"d":"2012-03-06","v":944.7892455},{"d":"2012-03-07","v":948.96564},{"d":"2012-03-08","v":962.8320900000001},{"d":"2012-03-09","v":967.4538749999999},{"d":"2012-03-12","v":965.8823845000001},{"d":"2012-03-13","v":984.246657},{"d":"2012-03-14","v":991.4199755},{"d":"2012-03-15","v":988.9886789999999},{"d":"2012-03-16","v":992.6166195000001},{"d":"2012-03-19","v":992.5003355},{"d":"2012-03-20","v":981.7910115000001},{"d":"2012-03-21","v":981.0645344999999},{"d":"2012-03-22","v":970.7893800000002},{"d":"2012-03-23","v":968.0367500000001},{"d":"2012-03-26","v":975.5326500000001},{"d":"2012-03-27","v":970.1057249999999},{"d":"2012-03-28","v":960.4998824999999},{"d":"2012-03-29","v":949.4485834999999},{"d":"2012-03-30","v":955.2937414999999},{"d":"2012-04-02","v":971.1457950000001},{"d":"2012-04-03","v":960.1696725000002},{"d":"2012-04-04","v":943.889904},{"d":"2012-04-05","v":943.2839910000001},{"d":"2012-04-06","v":942.420645},{"d":"2012-04-09","v":943.2839910000001},{"d":"2012-04-10","v":921.1202454999999},{"d":"2012-04-11","v":927.806319},{"d":"2012-04-12","v":933.694853},{"d":"2012-04-13","v":922.0386599999999},{"d":"2012-04-16","v":926.0855175},{"d":"2012-04-17","v":944.2250594999999},{"d":"2012-04-18","v":940.6097250000001},{"d":"2012-04-19","v":936.3248270000001},{"d":"2012-04-20","v":943.0524495000001},{"d":"2012-04-23","v":927.1140725000001},{"d":"2012-04-24","v":934.367665},{"d":"2012-04-25","v":939.1014915000001},{"d":"2012-04-26","v":940.2908134999999},{"d":"2012-04-27","v":945.7694255},{"d":"2012-04-30","v":940.230741},{"d":"2012-05-01","v":944.730703},{"d":"2012-05-02","v":940.879524},{"d":"2012-05-03","v":941.2039154999999},{"d":"2012-05-04","v":928.16301},{"d":"2012-05-07","v":934.5364625},{"d":"2012-05-08","v":920.4561180000001},{"d":"2012-05-09","v":919.0554705},{"d":"2012-05-10","v":924.9646365},{"d":"2012-05-11","v":928.8507584999999},{"d":"2012-05-14","v":914.2512705},{"d":"2012-05-15","v":908.9870454999999},{"d":"2012-05-16","v":902.9373794999999},{"d":"2012-05-17","v":892.858287},{"d":"2012-05-18","v":886.2668054999999},{"d":"2012-05-21","v":888.6107699999999},{"d":"2012-05-22","v":904.8950909999999},{"d":"2012-05-23","v":887.6942019999999},{"d":"2012-05-24","v":898.70043},{"d":"2012-05-25","v":901.8984999999999},{"d":"2012-05-28","v":899.9572985},{"d":"2012-05-29","v":903.6548275},{"d":"2012-05-30","v":892.0776695},{"d":"2012-05-31","v":891.9117405},{"d":"2012-06-01","v":877.819228},{"d":"2012-06-04","v":874.9048725},{"d":"2012-06-05","v":876.42975},{"d":"2012-06-06","v":896.485156},{"d":"2012-06-07","v":904.9551435},{"d":"2012-06-08","v":903.50503},{"d":"2012-06-11","v":904.678902},{"d":"2012-06-12","v":914.5395225},{"d":"2012-06-13","v":915.2121105},{"d":"2012-06-14","v":912.3977435},{"d":"2012-06-15","v":919.259649},{"d":"2012-06-18","v":920.259389},{"d":"2012-06-19","v":934.6633565},{"d":"2012-06-20","v":937.3114304999999},{"d":"2012-06-21","v":932.7898745},{"d":"2012-06-22","v":928.064914},{"d":"2012-06-25","v":916.5290114999999},{"d":"2012-06-26","v":918.4691590000001},{"d":"2012-06-27","v":930.45073},{"d":"2012-06-28","v":924.8756139999999},{"d":"2012-06-29","v":943.809111},{"d":"2012-07-02","v":959.038425},{"d":"2012-07-03","v":968.253928},{"d":"2012-07-04","v":967.5778905},{"d":"2012-07-05","v":967.9587389999999},{"d":"2012-07-06","v":960.6677584999999},{"d":"2012-07-09","v":956.6811694999999},{"d":"2012-07-10","v":961.8288454999999},{"d":"2012-07-11","v":965.6191349999999},{"d":"2012-07-12","v":955.676925},{"d":"2012-07-13","v":967.692964},{"d":"2012-07-16","v":968.2178995},{"d":"2012-07-17","v":966.1857375},{"d":"2012-07-18","v":976.8980385},{"d":"2012-07-19","v":985.1152659999999},{"d":"2012-07-20","v":970.6525784999999},{"d":"2012-07-23","v":949.0507375},{"d":"2012-07-24","v":943.713027},{"d":"2012-07-25","v":941.455053},{"d":"2012-07-26","v":963.0538144999999},{"d":"2012-07-27","v":975.3035045},{"d":"2012-07-30","v":991.237026},{"d":"2012-07-31","v":983.4655855},{"d":"2012-08-01","v":989.4301184999999},{"d":"2012-08-02","v":981.219435},{"d":"2012-08-03","v":1003.9551024999998},{"d":"2012-08-06","v":1004.653425},{"d":"2012-08-07","v":1011.860925},{"d":"2012-08-08","v":1016.9061749999998},{"d":"2012-08-09","v":1020.267954},{"d":"2012-08-10","v":1018.7050720000001},{"d":"2012-08-13","v":1015.4512629999999},{"d":"2012-08-14","v":1022.4298439999999},{"d":"2012-08-15","v":1021.8763455},{"d":"2012-08-16","v":1023.0784110000001},{"d":"2012-08-17","v":1025.7767099999999},{"d":"2012-08-20","v":1022.2126114999999},{"d":"2012-08-21","v":1023.8939415},{"d":"2012-08-22","v":1011.4520995},{"d":"2012-08-23","v":1005.9763425},{"d":"2012-08-24","v":1008.665966},{"d":"2012-08-27","v":1012.809173},{"d":"2012-08-28","v":1006.3723425},{"d":"2012-08-29","v":1004.47458},{"d":"2012-08-30","v":996.9336615000001},{"d":"2012-08-31","v":999.0582955},{"d":"2012-09-03","v":1008.0295154999999},{"d":"2012-09-04","v":995.886639},{"d":"2012-09-05","v":997.7466485000001},{"d":"2012-09-06","v":1021.15937},{"d":"2012-09-07","v":1024.64606},{"d":"2012-09-10","v":1018.641456},{"d":"2012-09-11","v":1025.255747},{"d":"2012-09-12","v":1024.041169},{"d":"2012-09-13","v":1029.8533814999998},{"d":"2012-09-14","v":1040.1387375},{"d":"2012-09-17","v":1037.8386464999999},{"d":"2012-09-18","v":1031.9962575},{"d":"2012-09-19","v":1036.422705},{"d":"2012-09-20","v":1034.020104},{"d":"2012-09-21","v":1039.8768525},{"d":"2012-09-24","v":1037.8456255},{"d":"2012-09-25","v":1040.890348},{"d":"2012-09-26","v":1023.291558},{"d":"2012-09-27","v":1026.7396660000002},{"d":"2012-09-28","v":1011.5097850000001},{"d":"2012-10-01","v":1026.4716179999998},{"d":"2012-10-02","v":1023.1342275},{"d":"2012-10-03","v":1025.0080294999998},{"d":"2012-10-04","v":1023.1304369999999},{"d":"2012-10-05","v":1033.1851325},{"d":"2012-10-08","v":1023.9804225},{"d":"2012-10-09","v":1020.1620449999999},{"d":"2012-10-10","v":1011.2920260000001},{"d":"2012-10-11","v":1019.883043},{"d":"2012-10-12","v":1015.6980914999999},{"d":"2012-10-15","v":1020.1494875000001},{"d":"2012-10-16","v":1034.6705775},{"d":"2012-10-17","v":1041.124319},{"d":"2012-10-18","v":1041.5960775},{"d":"2012-10-19","v":1034.8249315},{"d":"2012-10-22","v":1030.9649075},{"d":"2012-10-23","v":1013.5419924999999},{"d":"2012-10-24","v":1016.8438864999999},{"d":"2012-10-25","v":1018.3912375000001},{"d":"2012-10-26","v":1019.6634525},{"d":"2012-10-29","v":1014.662958},{"d":"2012-10-30","v":1024.559965},{"d":"2012-10-31","v":1014.8259689999999},{"d":"2012-11-01","v":1024.7669250000001},{"d":"2012-11-02","v":1028.8131195},{"d":"2012-11-05","v":1023.2530275},{"d":"2012-11-06","v":1030.200879},{"d":"2012-11-07","v":1014.563764},{"d":"2012-11-08","v":1014.180993},{"d":"2012-11-09","v":1013.0345850000001},{"d":"2012-11-12","v":1008.9522135},{"d":"2012-11-13","v":1012.4142244999999},{"d":"2012-11-14","v":1001.2693514999999},{"d":"2012-11-15","v":992.642901},{"d":"2012-11-16","v":982.662577},{"d":"2012-11-19","v":1004.3849250000001},{"d":"2012-11-20","v":1006.581447},{"d":"2012-11-21","v":1008.9939},{"d":"2012-11-22","v":1013.2431615},{"d":"2012-11-23","v":1018.0832795000001},{"d":"2012-11-26","v":1013.6296615000001},{"d":"2012-11-27","v":1015.6399875000001},{"d":"2012-11-28","v":1017.348492},{"d":"2012-11-29","v":1028.14695},{"d":"2012-11-30","v":1026.68016},{"d":"2012-12-03","v":1030.4929634999999},{"d":"2012-12-04","v":1035.4850235},{"d":"2012-12-05","v":1036.389039},{"d":"2012-12-06","v":1041.972921},{"d":"2012-12-07","v":1041.939724},{"d":"2012-12-10","v":1045.0337835},{"d":"2012-12-11","v":1051.342386},{"d":"2012-12-12","v":1051.651599},{"d":"2012-12-13","v":1045.5129425},{"d":"2012-12-14","v":1043.8778445},{"d":"2012-12-17","v":1043.4012225000001},{"d":"2012-12-18","v":1046.312141},{"d":"2012-12-19","v":1047.8998144999998},{"d":"2012-12-20","v":1046.4563724999998},{"d":"2012-12-21","v":1045.2250760000002},{"d":"2012-12-24","v":1043.5563875},{"d":"2012-12-25","v":1043.2107675},{"d":"2012-12-26","v":1043.2971724999998},{"d":"2012-12-27","v":1043.3671125},{"d":"2012-12-28","v":1035.943802},{"d":"2012-12-31","v":1039.3713945},{"d":"2013-01-01","v":1040.0600905000001},{"d":"2013-01-02","v":1059.631543},{"d":"2013-01-03","v":1066.0883785},{"d":"2013-01-04","v":1070.8478129999999},{"d":"2013-01-07","v":1065.8094075000001},{"d":"2013-01-08","v":1065.77905},{"d":"2013-01-09","v":1073.6317085},{"d":"2013-01-10","v":1073.5954245},{"d":"2013-01-11","v":1077.7375005000001},{"d":"2013-01-14","v":1085.8463935},{"d":"2013-01-15","v":1091.7387765},{"d":"2013-01-16","v":1089.4248075},{"d":"2013-01-17","v":1100.7258404999998},{"d":"2013-01-18","v":1096.0761295},{"d":"2013-01-21","v":1095.333964},{"d":"2013-01-22","v":1090.93592},{"d":"2013-01-23","v":1096.5741795},{"d":"2013-01-24","v":1103.5068165},{"d":"2013-01-25","v":1109.6982134999998},{"d":"2013-01-28","v":1107.5731085},{"d":"2013-01-29","v":1111.704102},{"d":"2013-01-30","v":1098.6453370000002},{"d":"2013-01-31","v":1092.7479475},{"d":"2013-02-01","v":1094.7394590000001},{"d":"2013-02-04","v":1067.9417819999999},{"d":"2013-02-05","v":1079.9200274999998},{"d":"2013-02-06","v":1072.3698905},{"d":"2013-02-07","v":1068.1789274999999},{"d":"2013-02-08","v":1077.9493865},{"d":"2013-02-11","v":1080.1986594999998},{"d":"2013-02-12","v":1086.091433},{"d":"2013-02-13","v":1088.8688359999999},{"d":"2013-02-14","v":1084.7500685},{"d":"2013-02-15","v":1082.5693964999998},{"d":"2013-02-18","v":1081.5996015},{"d":"2013-02-19","v":1095.3971985},{"d":"2013-02-20","v":1088.6742150000002},{"d":"2013-02-21","v":1069.084401},{"d":"2013-02-22","v":1083.1686485},{"d":"2013-02-25","v":1076.4026},{"d":"2013-02-26","v":1063.0734435},{"d":"2013-02-27","v":1075.4815999999998},{"d":"2013-02-28","v":1088.9539375},{"d":"2013-03-01","v":1088.3335545},{"d":"2013-03-04","v":1085.5253114999998},{"d":"2013-03-05","v":1107.144279},{"d":"2013-03-06","v":1107.888776},{"d":"2013-03-07","v":1113.766853},{"d":"2013-03-08","v":1125.062652},{"d":"2013-03-11","v":1122.6312974999998},{"d":"2013-03-12","v":1121.603364},{"d":"2013-03-13","v":1121.4933795000002},{"d":"2013-03-14","v":1132.4718025},{"d":"2013-03-15","v":1124.8417279999999},{"d":"2013-03-18","v":1120.97949},{"d":"2013-03-19","v":1111.7857904999998},{"d":"2013-03-20","v":1119.6114825000002},{"d":"2013-03-21","v":1112.28545},{"d":"2013-03-22","v":1111.4422545},{"d":"2013-03-25","v":1107.633153},{"d":"2013-03-26","v":1109.218308},{"d":"2013-03-27","v":1105.60125},{"d":"2013-03-28","v":1108.7693829999998},{"d":"2013-03-29","v":1109.2249729999999},{"d":"2013-04-01","v":1108.131557},{"d":"2013-04-02","v":1123.732181},{"d":"2013-04-03","v":1110.6380475},{"d":"2013-04-04","v":1101.5567795},{"d":"2013-04-05","v":1084.0394575},{"d":"2013-04-08","v":1089.0363855},{"d":"2013-04-09","v":1093.4374225000001},{"d":"2013-04-10","v":1110.0432605},{"d":"2013-04-11","v":1115.863866},{"d":"2013-04-12","v":1103.140705},{"d":"2013-04-15","v":1100.565405},{"d":"2013-04-16","v":1093.119804},{"d":"2013-04-17","v":1075.339677},{"d":"2013-04-18","v":1078.6105625},{"d":"2013-04-19","v":1085.094404},{"d":"2013-04-22","v":1088.1823425},{"d":"2013-04-23","v":1121.3658365},{"d":"2013-04-24","v":1133.8482645000001},{"d":"2013-04-25","v":1136.668754},{"d":"2013-04-26","v":1133.435072},{"d":"2013-04-29","v":1139.5245235},{"d":"2013-04-30","v":1134.7763005},{"d":"2013-05-01","v":1134.3580025},{"d":"2013-05-02","v":1139.3451615},{"d":"2013-05-03","v":1155.3487725},{"d":"2013-05-06","v":1154.739775},{"d":"2013-05-07","v":1162.0483695},{"d":"2013-05-08","v":1170.0718185},{"d":"2013-05-09","v":1176.5288255},{"d":"2013-05-10","v":1187.9100525},{"d":"2013-05-13","v":1183.094055},{"d":"2013-05-14","v":1194.678444},{"d":"2013-05-15","v":1200.1911075},{"d":"2013-05-16","v":1196.252587},{"d":"2013-05-17","v":1206.4613795},{"d":"2013-05-20","v":1207.2742484999999},{"d":"2013-05-21","v":1215.6216875},{"d":"2013-05-22","v":1225.98847},{"d":"2013-05-23","v":1195.4819985000001},{"d":"2013-05-24","v":1185.4636809999997},{"d":"2013-05-27","v":1189.180308},{"d":"2013-05-28","v":1213.3798705},{"d":"2013-05-29","v":1179.0147525},{"d":"2013-05-30","v":1180.28274},{"d":"2013-05-31","v":1167.340713},{"d":"2013-06-03","v":1154.340336},{"d":"2013-06-04","v":1160.846592},{"d":"2013-06-05","v":1137.5867974999999},{"d":"2013-06-06","v":1121.277013},{"d":"2013-06-07","v":1143.3798425},{"d":"2013-06-10","v":1142.9373375},{"d":"2013-06-11","v":1124.796533},{"d":"2013-06-12","v":1118.2224224999998},{"d":"2013-06-13","v":1121.458975},{"d":"2013-06-14","v":1117.2358925},{"d":"2013-06-17","v":1130.6590635},{"d":"2013-06-18","v":1127.0528175},{"d":"2013-06-19","v":1126.3594595},{"d":"2013-06-20","v":1085.804871},{"d":"2013-06-21","v":1074.625978},{"d":"2013-06-24","v":1058.941858},{"d":"2013-06-25","v":1075.4725135},{"d":"2013-06-26","v":1095.9925135},{"d":"2013-06-27","v":1107.3505770000002},{"d":"2013-06-28","v":1100.7591137499999},{"d":"2013-07-01","v":1115.3132305000001},{"d":"2013-07-02","v":1109.9185125},{"d":"2013-07-03","v":1099.7772344999998},{"d":"2013-07-04","v":1128.3589815},{"d":"2013-07-05","v":1113.6581505000001},{"d":"2013-07-08","v":1132.1442304999998},{"d":"2013-07-09","v":1144.4290695},{"d":"2013-07-10","v":1143.4984470000002},{"d":"2013-07-11","v":1146.45496},{"d":"2013-07-12","v":1143.554988},{"d":"2013-07-15","v":1150.389457},{"d":"2013-07-16","v":1137.5573049999998},{"d":"2013-07-17","v":1144.0144645},{"d":"2013-07-18","v":1154.957832},{"d":"2013-07-19","v":1152.970556},{"d":"2013-07-22","v":1153.2214875000002},{"d":"2013-07-23","v":1150.7007475},{"d":"2013-07-24","v":1156.9317045},{"d":"2013-07-25","v":1146.9222325},{"d":"2013-07-26","v":1142.2597755},{"d":"2013-07-29","v":1143.841555},{"d":"2013-07-30","v":1141.582351},{"d":"2013-07-31","v":1143.7964054999998},{"d":"2013-08-01","v":1159.5630725},{"d":"2013-08-02","v":1160.6055835},{"d":"2013-08-05","v":1156.2680745},{"d":"2013-08-06","v":1155.3548875000001},{"d":"2013-08-07","v":1150.4229425},{"d":"2013-08-08","v":1153.4835150000001},{"d":"2013-08-09","v":1160.064096},{"d":"2013-08-12","v":1162.0373084999999},{"d":"2013-08-13","v":1175.04107},{"d":"2013-08-14","v":1180.5643349999998},{"d":"2013-08-15","v":1165.619871},{"d":"2013-08-16","v":1161.9091660000001},{"d":"2013-08-19","v":1156.9870865},{"d":"2013-08-20","v":1148.8189725},{"d":"2013-08-21","v":1143.433525},{"d":"2013-08-22","v":1155.412224},{"d":"2013-08-23","v":1160.5453495},{"d":"2013-08-26","v":1161.860562},{"d":"2013-08-27","v":1139.0937015},{"d":"2013-08-28","v":1137.4144740000002},{"d":"2013-08-29","v":1146.906866},{"d":"2013-08-30","v":1133.8663855},{"d":"2013-09-02","v":1158.070005},{"d":"2013-09-03","v":1151.2088899999999},{"d":"2013-09-04","v":1157.5404225},{"d":"2013-09-05","v":1169.3170969999999},{"d":"2013-09-06","v":1174.0924645},{"d":"2013-09-09","v":1167.255899},{"d":"2013-09-10","v":1182.979085},{"d":"2013-09-11","v":1187.437725},{"d":"2013-09-12","v":1185.9102075},{"d":"2013-09-13","v":1187.303008},{"d":"2013-09-16","v":1193.839563},{"d":"2013-09-17","v":1187.898375},{"d":"2013-09-18","v":1191.1549995},{"d":"2013-09-19","v":1195.9848825000001},{"d":"2013-09-20","v":1191.459432},{"d":"2013-09-23","v":1184.9639765},{"d":"2013-09-24","v":1188.5498830000001},{"d":"2013-09-25","v":1190.2209810000002},{"d":"2013-09-26","v":1188.4006124999999},{"d":"2013-09-27","v":1182.47019},{"d":"2013-09-30","v":1175.1774855},{"d":"2013-10-01","v":1181.9404905},{"d":"2013-10-02","v":1174.9304049999998},{"d":"2013-10-03","v":1170.2559825},{"d":"2013-10-04","v":1175.7899175},{"d":"2013-10-07","v":1168.779495},{"d":"2013-10-08","v":1159.2100905},{"d":"2013-10-09","v":1156.65885},{"d":"2013-10-10","v":1176.746368},{"d":"2013-10-11","v":1186.589358},{"d":"2013-10-14","v":1188.4420485},{"d":"2013-10-15","v":1198.40738},{"d":"2013-10-16","v":1202.7631735000002},{"d":"2013-10-17","v":1202.9038180000002},{"d":"2013-10-18","v":1211.5509525},{"d":"2013-10-21","v":1213.6025215},{"d":"2013-10-22","v":1220.941815},{"d":"2013-10-23","v":1210.0365964999999},{"d":"2013-10-24","v":1217.5223005},{"d":"2013-10-25","v":1217.8685024999997},{"d":"2013-10-28","v":1219.883586},{"d":"2013-10-29","v":1225.196091},{"d":"2013-10-30","v":1223.638138},{"d":"2013-10-31","v":1227.8968845000002},{"d":"2013-11-01","v":1224.420795},{"d":"2013-11-04","v":1225.8011955},{"d":"2013-11-05","v":1225.184802},{"d":"2013-11-06","v":1232.278839},{"d":"2013-11-07","v":1229.0622905},{"d":"2013-11-08","v":1230.568876},{"d":"2013-11-11","v":1234.301751},{"d":"2013-11-12","v":1228.6921185},{"d":"2013-11-13","v":1222.4036935000001},{"d":"2013-11-14","v":1234.6217775},{"d":"2013-11-15","v":1238.6546475},{"d":"2013-11-18","v":1243.3886325},{"d":"2013-11-19","v":1235.349513},{"d":"2013-11-20","v":1237.2708125},{"d":"2013-11-21","v":1235.2004835},{"d":"2013-11-22","v":1233.5297899999998},{"d":"2013-11-25","v":1241.9028915},{"d":"2013-11-26","v":1229.8809250000002},{"d":"2013-11-27","v":1237.1068710000002},{"d":"2013-11-28","v":1240.748273},{"d":"2013-11-29","v":1241.1896250000002},{"d":"2013-12-02","v":1236.1736135},{"d":"2013-12-03","v":1217.375445},{"d":"2013-12-04","v":1206.360987},{"d":"2013-12-05","v":1194.176516},{"d":"2013-12-06","v":1201.52064},{"d":"2013-12-09","v":1203.212129},{"d":"2013-12-10","v":1189.7544885},{"d":"2013-12-11","v":1183.386162},{"d":"2013-12-12","v":1173.39981},{"d":"2013-12-13","v":1170.1797075},{"d":"2013-12-16","v":1184.5541295},{"d":"2013-12-17","v":1172.2354525},{"d":"2013-12-18","v":1187.2236455},{"d":"2013-12-19","v":1211.3374000000001},{"d":"2013-12-20","v":1217.5894455},{"d":"2013-12-23","v":1225.202769},{"d":"2013-12-24","v":1229.262285},{"d":"2013-12-25","v":1229.0115175},{"d":"2013-12-26","v":1231.0176575},{"d":"2013-12-27","v":1243.372899},{"d":"2013-12-30","v":1238.5408894999998},{"d":"2013-12-31","v":1245.403434},{"d":"2014-01-01","v":1245.403434},{"d":"2014-01-02","v":1235.3238125},{"d":"2014-01-03","v":1242.6008875},{"d":"2014-01-06","v":1241.6498765000001},{"d":"2014-01-07","v":1259.1313245000001},{"d":"2014-01-08","v":1259.1560835},{"d":"2014-01-09","v":1248.6981735000002},{"d":"2014-01-10","v":1253.1749410000002},{"d":"2014-01-13","v":1249.824303},{"d":"2014-01-14","v":1257.2749805},{"d":"2014-01-15","v":1273.7577895},{"d":"2014-01-16","v":1268.021496},{"d":"2014-01-17","v":1276.502733},{"d":"2014-01-20","v":1276.9284785},{"d":"2014-01-21","v":1278.7544105000002},{"d":"2014-01-22","v":1279.4109075000001},{"d":"2014-01-23","v":1260.2962714999999},{"d":"2014-01-24","v":1231.1914860000002},{"d":"2014-01-27","v":1213.7694075},{"d":"2014-01-28","v":1222.4428795000001},{"d":"2014-01-29","v":1210.12024},{"d":"2014-01-30","v":1217.5635545},{"d":"2014-01-31","v":1213.1275210000001},{"d":"2014-02-03","v":1191.865185},{"d":"2014-02-04","v":1190.4121125},{"d":"2014-02-05","v":1192.5107745},{"d":"2014-02-06","v":1209.8169655000002},{"d":"2014-02-07","v":1218.0856665000001},{"d":"2014-02-10","v":1217.068325},{"d":"2014-02-11","v":1233.7083925},{"d":"2014-02-12","v":1243.932264},{"d":"2014-02-13","v":1240.2632795000002},{"d":"2014-02-14","v":1243.366488},{"d":"2014-02-17","v":1251.0522150000002},{"d":"2014-02-18","v":1253.4495494999999},{"d":"2014-02-19","v":1253.7804895},{"d":"2014-02-20","v":1255.0933645},{"d":"2014-02-21","v":1261.7731454999998},{"d":"2014-02-24","v":1267.4192725},{"d":"2014-02-25","v":1264.5571364999998},{"d":"2014-02-26","v":1263.6975000000002},{"d":"2014-02-27","v":1262.1248100000003},{"d":"2014-02-28","v":1261.1353885},{"d":"2014-03-03","v":1229.5067675},{"d":"2014-03-04","v":1260.04404675},{"d":"2014-03-05","v":1257.5266901999998},{"d":"2014-03-06","v":1258.0734375000002},{"d":"2014-03-07","v":1238.48369},{"d":"2014-03-10","v":1232.3039749999998},{"d":"2014-03-11","v":1229.6489832},{"d":"2014-03-12","v":1215.919114},{"d":"2014-03-13","v":1200.52716},{"d":"2014-03-14","v":1193.62873025},{"d":"2014-03-17","v":1206.4189853999999},{"d":"2014-03-18","v":1215.1975536},{"d":"2014-03-19","v":1215.485816},{"d":"2014-03-20","v":1216.2222043999998},{"d":"2014-03-21","v":1223.09409375},{"d":"2014-03-24","v":1210.4033456},{"d":"2014-03-25","v":1228.0502907},{"d":"2014-03-26","v":1234.5584084500001},{"d":"2014-03-27","v":1236.1175250000001},{"d":"2014-03-28","v":1248.1201979999998},{"d":"2014-03-31","v":1246.83483},{"d":"2014-04-01","v":1252.455351},{"d":"2014-04-02","v":1257.6669255000002},{"d":"2014-04-03","v":1261.44940885},{"d":"2014-04-04","v":1270.529568},{"d":"2014-04-07","v":1249.8070195000003},{"d":"2014-04-08","v":1252.0374929999998},{"d":"2014-04-09","v":1254.2223935000002},{"d":"2014-04-10","v":1248.3542465},{"d":"2014-04-11","v":1231.8887249999998},{"d":"2014-04-14","v":1245.2902202},{"d":"2014-04-15","v":1234.39490075},{"d":"2014-04-16","v":1249.2371528},{"d":"2014-04-17","v":1255.586255},{"d":"2014-04-18","v":1254.6083440000002},{"d":"2014-04-21","v":1256.4097590000001},{"d":"2014-04-22","v":1273.6795875},{"d":"2014-04-23","v":1265.4601960000002},{"d":"2014-04-24","v":1269.819851},{"d":"2014-04-25","v":1260.3734170000002},{"d":"2014-04-28","v":1265.703425},{"d":"2014-04-29","v":1282.8834884999999},{"d":"2014-04-30","v":1282.3878375},{"d":"2014-05-01","v":1284.2726025},{"d":"2014-05-02","v":1281.12372},{"d":"2014-05-05","v":1279.2296400000002},{"d":"2014-05-06","v":1274.1295484999998},{"d":"2014-05-07","v":1280.4918750000002},{"d":"2014-05-08","v":1293.2314895},{"d":"2014-05-09","v":1281.391395},{"d":"2014-05-12","v":1303.9405749999999},{"d":"2014-05-13","v":1305.3154625},{"d":"2014-05-14","v":1309.9896445000002},{"d":"2014-05-15","v":1307.7716639999999},{"d":"2014-05-16","v":1316.402208},{"d":"2014-05-19","v":1311.192337},{"d":"2014-05-20","v":1306.0812575},{"d":"2014-05-21","v":1314.1331069999999},{"d":"2014-05-22","v":1313.72305},{"d":"2014-05-23","v":1316.878938},{"d":"2014-05-26","v":1321.2055175},{"d":"2014-05-27","v":1324.168356},{"d":"2014-05-28","v":1320.589996},{"d":"2014-05-29","v":1321.6384335},{"d":"2014-05-30","v":1308.9000154999999},{"d":"2014-06-02","v":1322.825076},{"d":"2014-06-03","v":1317.9098315499998},{"d":"2014-06-04","v":1314.3395810000002},{"d":"2014-06-05","v":1315.716426},{"d":"2014-06-06","v":1322.8886790000001},{"d":"2014-06-09","v":1328.29135875},{"d":"2014-06-10","v":1332.849764},{"d":"2014-06-11","v":1328.4688049999997},{"d":"2014-06-12","v":1328.2564439999999},{"d":"2014-06-13","v":1328.972962},{"d":"2014-06-16","v":1323.4119262},{"d":"2014-06-17","v":1327.4776095},{"d":"2014-06-18","v":1326.5796480000001},{"d":"2014-06-19","v":1334.762382},{"d":"2014-06-20","v":1335.678253},{"d":"2014-06-23","v":1329.1540925000002},{"d":"2014-06-24","v":1328.0928836},{"d":"2014-06-25","v":1315.3189175},{"d":"2014-06-26","v":1309.400775},{"d":"2014-06-27","v":1308.46161875},{"d":"2014-06-30","v":1306.0351575},{"d":"2014-07-01","v":1319.005233},{"d":"2014-07-02","v":1321.481691},{"d":"2014-07-03","v":1337.0337695000003},{"d":"2014-07-04","v":1334.814286},{"d":"2014-07-07","v":1322.3488275},{"d":"2014-07-08","v":1306.8396855},{"d":"2014-07-09","v":1308.17129905},{"d":"2014-07-10","v":1293.549907},{"d":"2014-07-11","v":1294.6792525},{"d":"2014-07-14","v":1306.0643579000002},{"d":"2014-07-15","v":1303.0103307},{"d":"2014-07-16","v":1318.536637},{"d":"2014-07-17","v":1303.64689},{"d":"2014-07-18","v":1305.01935},{"d":"2014-07-21","v":1298.611385},{"d":"2014-07-22","v":1317.3401826},{"d":"2014-07-23","v":1317.603734},{"d":"2014-07-24","v":1323.674605},{"d":"2014-07-25","v":1312.8372239999999},{"d":"2014-07-28","v":1312.3660095},{"d":"2014-07-29","v":1317.1767180000002},{"d":"2014-07-30","v":1310.177428},{"d":"2014-07-31","v":1294.288886},{"d":"2014-08-01","v":1281.618471},{"d":"2014-08-04","v":1277.9723755},{"d":"2014-08-05","v":1282.032873},{"d":"2014-08-06","v":1273.982339},{"d":"2014-08-07","v":1266.4233096},{"d":"2014-08-08","v":1258.247928},{"d":"2014-08-11","v":1270.7657219999999},{"d":"2014-08-12","v":1267.7296185},{"d":"2014-08-13","v":1274.042385},{"d":"2014-08-14","v":1277.1154494999998},{"d":"2014-08-15","v":1268.503467},{"d":"2014-08-18","v":1285.9314456000002},{"d":"2014-08-19","v":1291.8149245},{"d":"2014-08-20","v":1292.4327307499998},{"d":"2014-08-21","v":1300.3513260000002},{"d":"2014-08-22","v":1296.4319025000002},{"d":"2014-08-25","v":1308.9721244999998},{"d":"2014-08-26","v":1319.7835575},{"d":"2014-08-27","v":1318.5795225000002},{"d":"2014-08-28","v":1310.7192413999999},{"d":"2014-08-29","v":1316.20914425},{"d":"2014-09-01","v":1322.5776829999998},{"d":"2014-09-02","v":1320.306744},{"d":"2014-09-03","v":1330.4506195000001},{"d":"2014-09-04","v":1343.9824327500003},{"d":"2014-09-05","v":1338.7322474999999},{"d":"2014-09-08","v":1333.375149},{"d":"2014-09-09","v":1329.9366315},{"d":"2014-09-10","v":1333.4011985},{"d":"2014-09-11","v":1331.797962},{"d":"2014-09-12","v":1331.5786560000001},{"d":"2014-09-15","v":1331.2760685},{"d":"2014-09-16","v":1328.1360225},{"d":"2014-09-17","v":1333.7088720000002},{"d":"2014-09-18","v":1343.5852979999997},{"d":"2014-09-19","v":1347.1748400000001},{"d":"2014-09-22","v":1341.274087},{"d":"2014-09-23","v":1325.2125984999998},{"d":"2014-09-24","v":1338.4409610000002},{"d":"2014-09-25","v":1325.4759925},{"d":"2014-09-26","v":1330.4027474999998},{"d":"2014-09-29","v":1321.7438909999998},{"d":"2014-09-30","v":1328.153625},{"d":"2014-10-01","v":1319.9210333},{"d":"2014-10-02","v":1289.3315585},{"d":"2014-10-03","v":1302.1979475},{"d":"2014-10-06","v":1307.977685},{"d":"2014-10-07","v":1287.7360469999999},{"d":"2014-10-08","v":1278.3539925},{"d":"2014-10-09","v":1273.313925},{"d":"2014-10-10","v":1251.5000670000002},{"d":"2014-10-13","v":1255.0883617999998},{"d":"2014-10-14","v":1250.6576444999998},{"d":"2014-10-15","v":1211.8781999999999},{"d":"2014-10-16","v":1205.5201704},{"d":"2014-10-17","v":1234.274397},{"d":"2014-10-20","v":1229.62998},{"d":"2014-10-21","v":1253.4344099999998},{"d":"2014-10-22","v":1260.161397},{"d":"2014-10-23","v":1270.593674},{"d":"2014-10-24","v":1265.460606},{"d":"2014-10-27","v":1256.6534940000001},{"d":"2014-10-28","v":1266.4525115000001},{"d":"2014-10-29","v":1268.3752785},{"d":"2014-10-30","v":1273.5280950000001},{"d":"2014-10-31","v":1296.67497},{"d":"2014-11-03","v":1287.3124528},{"d":"2014-11-04","v":1271.2608415},{"d":"2014-11-05","v":1292.383078},{"d":"2014-11-06","v":1296.4594225},{"d":"2014-11-07","v":1290.09770525},{"d":"2014-11-10","v":1297.5030055},{"d":"2014-11-11","v":1302.5060925},{"d":"2014-11-12","v":1289.0150816000003},{"d":"2014-11-13","v":1293.248927},{"d":"2014-11-14","v":1291.0527600000003},{"d":"2014-11-17","v":1297.69165745},{"d":"2014-11-18","v":1304.6535999999999},{"d":"2014-11-19","v":1305.1105994999998},{"d":"2014-11-20","v":1301.5196375},{"d":"2014-11-21","v":1329.0369165000002},{"d":"2014-11-24","v":1329.957798},{"d":"2014-11-25","v":1329.30659805},{"d":"2014-11-26","v":1330.35909685},{"d":"2014-11-27","v":1332.1238305000002},{"d":"2014-11-28","v":1332.318802},{"d":"2014-12-01","v":1325.1360969},{"d":"2014-12-02","v":1335.6260115},{"d":"2014-12-03","v":1340.3152969999999},{"d":"2014-12-04","v":1318.7600475000002},{"d":"2014-12-05","v":1341.7287939999999},{"d":"2014-12-08","v":1331.4624372},{"d":"2014-12-09","v":1300.5700204999998},{"d":"2014-12-10","v":1295.455668},{"d":"2014-12-11","v":1295.229936},{"d":"2014-12-12","v":1258.9700624999998},{"d":"2014-12-15","v":1228.17863},{"d":"2014-12-16","v":1253.20747},{"d":"2014-12-17","v":1256.3661},{"d":"2014-12-18","v":1294.80568},{"d":"2014-12-19","v":1298.0835120000002},{"d":"2014-12-22","v":1303.968},{"d":"2014-12-23","v":1309.1674375},{"d":"2014-12-24","v":1308.9383275000002},{"d":"2014-12-25","v":1309.101625},{"d":"2014-12-26","v":1309.2649225},{"d":"2014-12-29","v":1312.514686},{"d":"2014-12-30","v":1296.644481},{"d":"2014-12-31","v":1303.3302},{"d":"2015-01-01","v":1302.6801600000001},{"d":"2015-01-02","v":1296.69732675},{"d":"2015-01-05","v":1265.0685119999998},{"d":"2015-01-06","v":1255.097844},{"d":"2015-01-07","v":1265.1833064999998},{"d":"2015-01-08","v":1303.24113},{"d":"2015-01-09","v":1279.73756},{"d":"2015-01-12","v":1288.74506},{"d":"2015-01-13","v":1307.5718899999997},{"d":"2015-01-14","v":1285.3603360000002},{"d":"2015-01-15","v":1103.9382480000002},{"d":"2015-01-16","v":1112.209021},{"d":"2015-01-19","v":1140.0510239999999},{"d":"2015-01-20","v":1138.107402},{"d":"2015-01-21","v":1132.7280637000001},{"d":"2015-01-22","v":1138.309592},{"d":"2015-01-23","v":1159.1135283},{"d":"2015-01-26","v":1193.514572},{"d":"2015-01-27","v":1197.5343520000001},{"d":"2015-01-28","v":1188.8524},{"d":"2015-01-29","v":1214.2285329999997},{"d":"2015-01-30","v":1199.8118160000001},{"d":"2015-02-02","v":1217.64792},{"d":"2015-02-03","v":1236.638228},{"d":"2015-02-04","v":1232.1353794999998},{"d":"2015-02-05","v":1242.083136},{"d":"2015-02-06","v":1235.7085475},{"d":"2015-02-09","v":1229.20941},{"d":"2015-02-10","v":1232.70508},{"d":"2015-02-11","v":1233.698292},{"d":"2015-02-12","v":1250.496856},{"d":"2015-02-13","v":1261.1037600000002},{"d":"2015-02-16","v":1253.9751680000002},{"d":"2015-02-17","v":1270.7416799999999},{"d":"2015-02-18","v":1283.8750065},{"d":"2015-02-19","v":1292.071176},{"d":"2015-02-20","v":1281.437675},{"d":"2015-02-23","v":1301.0574659999997},{"d":"2015-02-24","v":1310.798115},{"d":"2015-02-25","v":1307.0924615000001},{"d":"2015-02-26","v":1308.5074214999997},{"d":"2015-02-27","v":1314.88956},{"d":"2015-03-02","v":1315.0460880000003},{"d":"2015-03-03","v":1308.415064},{"d":"2015-03-04","v":1314.023432},{"d":"2015-03-05","v":1330.7486724999999},{"d":"2015-03-06","v":1324.506057},{"d":"2015-03-09","v":1322.8849425},{"d":"2015-03-10","v":1304.26384785},{"d":"2015-03-11","v":1318.0452354},{"d":"2015-03-12","v":1321.1317334999999},{"d":"2015-03-13","v":1310.028314},{"d":"2015-03-16","v":1333.9056495000002},{"d":"2015-03-17","v":1329.7287265},{"d":"2015-03-18","v":1336.5806750000002},{"d":"2015-03-19","v":1332.6844440000002},{"d":"2015-03-20","v":1347.2090205},{"d":"2015-03-23","v":1341.015648},{"d":"2015-03-24","v":1328.7660479999997},{"d":"2015-03-25","v":1321.3131239999998},{"d":"2015-03-26","v":1306.874796},{"d":"2015-03-27","v":1306.176104},{"d":"2015-03-30","v":1321.3898250000002},{"d":"2015-03-31","v":1307.2025924999998},{"d":"2015-04-01","v":1308.306416},{"d":"2015-04-02","v":1309.4791639999999},{"d":"2015-04-03","v":1310.1687595},{"d":"2015-04-06","v":1313.5540465},{"d":"2015-04-07","v":1333.875264},{"d":"2015-04-08","v":1331.12374},{"d":"2015-04-09","v":1346.7766815},{"d":"2015-04-10","v":1355.3716},{"d":"2015-04-13","v":1351.9105980000002},{"d":"2015-04-14","v":1349.432898},{"d":"2015-04-15","v":1351.721822},{"d":"2015-04-16","v":1339.7579999999998},{"d":"2015-04-17","v":1318.2313199999999},{"d":"2015-04-20","v":1329.4638719999998},{"d":"2015-04-21","v":1330.9370729999998},{"d":"2015-04-22","v":1350.3890660000002},{"d":"2015-04-23","v":1338.1060079999997},{"d":"2015-04-24","v":1347.29799},{"d":"2015-04-27","v":1363.340097},{"d":"2015-04-28","v":1356.7676915},{"d":"2015-04-29","v":1322.674559},{"d":"2015-04-30","v":1318.2973599999998},{"d":"2015-05-01","v":1312.904403},{"d":"2015-05-04","v":1314.717744},{"d":"2015-05-05","v":1293.593669},{"d":"2015-05-06","v":1290.009734},{"d":"2015-05-07","v":1285.2241835},{"d":"2015-05-08","v":1329.081831},{"d":"2015-05-11","v":1332.598608},{"d":"2015-05-12","v":1315.3901354999998},{"d":"2015-05-13","v":1308.912957},{"d":"2015-05-14","v":1317.8314449999998},{"d":"2015-05-15","v":1318.897622},{"d":"2015-05-18","v":1325.9501759999998},{"d":"2015-05-19","v":1341.573576},{"d":"2015-05-20","v":1342.736265},{"d":"2015-05-21","v":1351.698292},{"d":"2015-05-22","v":1350.778045},{"d":"2015-05-25","v":1346.4027525},{"d":"2015-05-26","v":1332.796032},{"d":"2015-05-27","v":1349.12064},{"d":"2015-05-28","v":1340.290686},{"d":"2015-05-29","v":1315.7558820000002},{"d":"2015-06-01","v":1317.5315835},{"d":"2015-06-02","v":1312.413865},{"d":"2015-06-03","v":1324.791369},{"d":"2015-06-04","v":1308.0697440000001},{"d":"2015-06-05","v":1295.30778},{"d":"2015-06-08","v":1286.2464},{"d":"2015-06-09","v":1283.0790000000002},{"d":"2015-06-10","v":1313.154192},{"d":"2015-06-11","v":1314.404982},{"d":"2015-06-12","v":1296.65353},{"d":"2015-06-15","v":1281.220088},{"d":"2015-06-16","v":1288.756184},{"d":"2015-06-17","v":1282.553872},{"d":"2015-06-18","v":1285.8059565},{"d":"2015-06-19","v":1282.309948},{"d":"2015-06-22","v":1316.992911},{"d":"2015-06-23","v":1329.7322924999999},{"d":"2015-06-24","v":1331.18144},{"d":"2015-06-25","v":1328.9357340000001},{"d":"2015-06-26","v":1321.29412},{"d":"2015-06-29","v":1282.579995},{"d":"2015-06-30","v":1267.2925265},{"d":"2015-07-01","v":1292.54032},{"d":"2015-07-02","v":1289.845716},{"d":"2015-07-03","v":1280.759599},{"d":"2015-07-06","v":1262.9958614999998},{"d":"2015-07-07","v":1243.3988884999999},{"d":"2015-07-08","v":1252.376505},{"d":"2015-07-09","v":1279.6295280000002},{"d":"2015-07-10","v":1304.9043809999998},{"d":"2015-07-13","v":1329.0935280000003},{"d":"2015-07-14","v":1331.8056359999998},{"d":"2015-07-15","v":1338.226488},{"d":"2015-07-16","v":1355.350752},{"d":"2015-07-17","v":1355.314202},{"d":"2015-07-20","v":1360.721106},{"d":"2015-07-21","v":1351.6481384999997},{"d":"2015-07-22","v":1341.6385185000001},{"d":"2015-07-23","v":1341.99496},{"d":"2015-07-24","v":1332.698776},{"d":"2015-07-27","v":1316.5631819999999},{"d":"2015-07-28","v":1328.167632},{"d":"2015-07-29","v":1343.6071625},{"d":"2015-07-30","v":1349.2518399999997},{"d":"2015-07-31","v":1348.29811},{"d":"2015-08-03","v":1359.0072400000001},{"d":"2015-08-04","v":1360.164872},{"d":"2015-08-05","v":1384.0861125000001},{"d":"2015-08-06","v":1378.9455484999999},{"d":"2015-08-07","v":1375.9503},{"d":"2015-08-10","v":1391.3907385},{"d":"2015-08-11","v":1377.3196990000001},{"d":"2015-08-12","v":1335.4172760000001},{"d":"2015-08-13","v":1348.7896484999999},{"d":"2015-08-14","v":1340.3519415},{"d":"2015-08-17","v":1343.9818050000001},{"d":"2015-08-18","v":1339.376982},{"d":"2015-08-19","v":1309.116384},{"d":"2015-08-20","v":1288.33971},{"d":"2015-08-21","v":1243.233408},{"d":"2015-08-24","v":1176.629905},{"d":"2015-08-25","v":1227.7368675},{"d":"2015-08-26","v":1200.19132},{"d":"2015-08-27","v":1253.3577679999999},{"d":"2015-08-28","v":1247.5292220000001},{"d":"2015-08-31","v":1254.108471},{"d":"2015-09-01","v":1218.0082680000003},{"d":"2015-09-02","v":1223.6210214999999},{"d":"2015-09-03","v":1247.06165},{"d":"2015-09-04","v":1216.8945300000003},{"d":"2015-09-07","v":1229.9563665},{"d":"2015-09-08","v":1250.4046749999998},{"d":"2015-09-09","v":1265.9972050000001},{"d":"2015-09-10","v":1251.264},{"d":"2015-09-11","v":1240.681938},{"d":"2015-09-14","v":1231.114764},{"d":"2015-09-15","v":1245.42264},{"d":"2015-09-16","v":1265.246114},{"d":"2015-09-17","v":1260.4399359999998},{"d":"2015-09-18","v":1231.4392245},{"d":"2015-09-21","v":1238.431558},{"d":"2015-09-22","v":1196.001067},{"d":"2015-09-23","v":1209.3329820000001},{"d":"2015-09-24","v":1183.264264},{"d":"2015-09-25","v":1221.9313424999998},{"d":"2015-09-28","v":1193.2767649999998},{"d":"2015-09-29","v":1182.52098},{"d":"2015-09-30","v":1207.3366500000002},{"d":"2015-10-01","v":1206.9261350000002},{"d":"2015-10-02","v":1208.2921185000002},{"d":"2015-10-05","v":1248.0917759999998},{"d":"2015-10-06","v":1254.6807700000002},{"d":"2015-10-07","v":1259.845209},{"d":"2015-10-08","v":1255.798336},{"d":"2015-10-09","v":1262.6318609999998},{"d":"2015-10-12","v":1263.9578964999998},{"d":"2015-10-13","v":1249.43484},{"d":"2015-10-14","v":1238.1855},{"d":"2015-10-15","v":1249.674075},{"d":"2015-10-16","v":1261.234128},{"d":"2015-10-19","v":1265.5369695000002},{"d":"2015-10-20","v":1257.803526},{"d":"2015-10-21","v":1259.200265},{"d":"2015-10-22","v":1279.7710034999998},{"d":"2015-10-23","v":1301.4800974999998},{"d":"2015-10-26","v":1306.322732},{"d":"2015-10-27","v":1296.9532590000001},{"d":"2015-10-28","v":1307.63088},{"d":"2015-10-29","v":1307.2298400000002},{"d":"2015-10-30","v":1304.1837309999999},{"d":"2015-11-02","v":1306.9947},{"d":"2015-11-03","v":1313.8954124999998},{"d":"2015-11-04","v":1313.7032525},{"d":"2015-11-05","v":1313.969265},{"d":"2015-11-06","v":1311.70026},{"d":"2015-11-09","v":1296.258084},{"d":"2015-11-10","v":1299.0450105},{"d":"2015-11-11","v":1307.9335675},{"d":"2015-11-12","v":1290.0117639999999},{"d":"2015-11-13","v":1281.835544},{"d":"2015-11-16","v":1279.6995045},{"d":"2015-11-17","v":1315.252005},{"d":"2015-11-18","v":1322.402795},{"d":"2015-11-19","v":1327.450215},{"d":"2015-11-20","v":1327.0453440000001},{"d":"2015-11-23","v":1319.88459},{"d":"2015-11-24","v":1305.702208},{"d":"2015-11-25","v":1324.7022510000002},{"d":"2015-11-26","v":1337.2673340000001},{"d":"2015-11-27","v":1339.928128},{"d":"2015-11-30","v":1337.0239425},{"d":"2015-12-01","v":1336.6886479999998},{"d":"2015-12-02","v":1324.8625510000002},{"d":"2015-12-03","v":1284.710195},{"d":"2015-12-04","v":1275.09631},{"d":"2015-12-07","v":1279.6497754999998},{"d":"2015-12-08","v":1255.3488839999998},{"d":"2015-12-09","v":1252.731906},{"d":"2015-12-10","v":1248.2347455},{"d":"2015-12-11","v":1220.0549445},{"d":"2015-12-14","v":1200.520332},{"d":"2015-12-15","v":1236.6584999999998},{"d":"2015-12-16","v":1234.58097},{"d":"2015-12-17","v":1248.534036},{"d":"2015-12-18","v":1236.1920599999999},{"d":"2015-12-21","v":1224.746664},{"d":"2015-12-22","v":1222.250094},{"d":"2015-12-23","v":1257.4418175},{"d":"2015-12-24","v":1257.9277359999999},{"d":"2015-12-25","v":1259.614434},{"d":"2015-12-28","v":1255.2397114999999},{"d":"2015-12-29","v":1273.837422},{"d":"2015-12-30","v":1260.6193425},{"d":"2015-12-31","v":1261.768235},{"d":"2016-01-01","v":1262.4064},{"d":"2016-01-04","v":1229.30704},{"d":"2016-01-05","v":1238.949426},{"d":"2016-01-06","v":1224.896878},{"d":"2016-01-07","v":1196.33444},{"d":"2016-01-08","v":1174.8296},{"d":"2016-01-11","v":1171.0607725},{"d":"2016-01-12","v":1181.84024},{"d":"2016-01-13","v":1195.1704215000002},{"d":"2016-01-14","v":1178.6919659999999},{"d":"2016-01-15","v":1146.3098845000002},{"d":"2016-01-18","v":1145.8467804999998},{"d":"2016-01-19","v":1160.221734},{"d":"2016-01-20","v":1121.846985},{"d":"2016-01-21","v":1143.0587839999998},{"d":"2016-01-22","v":1180.2821219999998},{"d":"2016-01-25","v":1172.3097200000002},{"d":"2016-01-26","v":1190.537908},{"d":"2016-01-27","v":1197.16661},{"d":"2016-01-28","v":1179.2898775},{"d":"2016-01-29","v":1205.414038},{"d":"2016-02-01","v":1204.2915255},{"d":"2016-02-02","v":1179.65757},{"d":"2016-02-03","v":1161.821988},{"d":"2016-02-04","v":1155.76888},{"d":"2016-02-05","v":1139.501249},{"d":"2016-02-08","v":1105.284668},{"d":"2016-02-09","v":1078.4361119999999},{"d":"2016-02-10","v":1098.248448},{"d":"2016-02-11","v":1059.2821655},{"d":"2016-02-12","v":1094.0375330000002},{"d":"2016-02-15","v":1124.972965},{"d":"2016-02-16","v":1118.841224},{"d":"2016-02-17","v":1148.2888560000001},{"d":"2016-02-18","v":1143.930144},{"d":"2016-02-19","v":1133.0139755},{"d":"2016-02-22","v":1152.845824},{"d":"2016-02-23","v":1127.3075605000001},{"d":"2016-02-24","v":1098.126094},{"d":"2016-02-25","v":1125.574736},{"d":"2016-02-26","v":1143.3813930000001},{"d":"2016-02-29","v":1144.6395020000002},{"d":"2016-03-01","v":1157.7228400000001},{"d":"2016-03-02","v":1170.4625919999999},{"d":"2016-03-03","v":1165.863184},{"d":"2016-03-04","v":1180.8796799999998},{"d":"2016-03-07","v":1183.2050005},{"d":"2016-03-08","v":1172.7212975},{"d":"2016-03-09","v":1179.0139339999998},{"d":"2016-03-10","v":1161.8416249999998},{"d":"2016-03-11","v":1185.8800399999998},{"d":"2016-03-14","v":1193.7806919999998},{"d":"2016-03-15","v":1179.7005359999998},{"d":"2016-03-16","v":1178.9557530000002},{"d":"2016-03-17","v":1173.1243080000002},{"d":"2016-03-18","v":1170.9203285},{"d":"2016-03-21","v":1170.033886},{"d":"2016-03-22","v":1166.407722},{"d":"2016-03-23","v":1165.600562},{"d":"2016-03-24","v":1148.910659},{"d":"2016-03-25","v":1149.9640289999998},{"d":"2016-03-28","v":1148.6473164999998},{"d":"2016-03-29","v":1153.9095750000001},{"d":"2016-03-30","v":1168.6159200000002},{"d":"2016-03-31","v":1156.328305},{"d":"2016-04-01","v":1135.888761},{"d":"2016-04-04","v":1144.1864874999999},{"d":"2016-04-05","v":1118.5686449999998},{"d":"2016-04-06","v":1132.3214545},{"d":"2016-04-07","v":1123.9007165},{"d":"2016-04-08","v":1135.153845},{"d":"2016-04-11","v":1141.3325700000003},{"d":"2016-04-12","v":1148.2615325000002},{"d":"2016-04-13","v":1184.251937},{"d":"2016-04-14","v":1190.26611},{"d":"2016-04-15","v":1191.9394214999998},{"d":"2016-04-18","v":1196.5662719999998},{"d":"2016-04-19","v":1215.9753735},{"d":"2016-04-20","v":1230.7417580000001},{"d":"2016-04-21","v":1233.1112475},{"d":"2016-04-22","v":1225.968176},{"d":"2016-04-25","v":1220.2658880000001},{"d":"2016-04-26","v":1223.5654260000001},{"d":"2016-04-27","v":1225.5269355},{"d":"2016-04-28","v":1225.252251},{"d":"2016-04-29","v":1195.95892},{"d":"2016-05-02","v":1198.0819239999998},{"d":"2016-05-03","v":1175.50782},{"d":"2016-05-04","v":1160.99277},{"d":"2016-05-05","v":1172.0127375},{"d":"2016-05-06","v":1174.0020005000001},{"d":"2016-05-09","v":1176.7301679999998},{"d":"2016-05-10","v":1195.6732709999999},{"d":"2016-05-11","v":1190.674644},{"d":"2016-05-12","v":1180.629618},{"d":"2016-05-13","v":1187.550672},{"d":"2016-05-16","v":1189.963295},{"d":"2016-05-17","v":1192.8319875},{"d":"2016-05-18","v":1202.8802670000002},{"d":"2016-05-19","v":1189.9553704999998},{"d":"2016-05-20","v":1205.57736},{"d":"2016-05-23","v":1198.29437},{"d":"2016-05-24","v":1223.3126730000001},{"d":"2016-05-25","v":1244.729426},{"d":"2016-05-26","v":1246.6591799999999},{"d":"2016-05-27","v":1249.0184319999998},{"d":"2016-05-30","v":1250.1593275},{"d":"2016-05-31","v":1238.7891319999999},{"d":"2016-06-01","v":1226.40944},{"d":"2016-06-02","v":1226.1519655000002},{"d":"2016-06-03","v":1219.2673890000003},{"d":"2016-06-06","v":1217.4465595},{"d":"2016-06-07","v":1225.200816},{"d":"2016-06-08","v":1214.9322949999998},{"d":"2016-06-09","v":1201.486587},{"d":"2016-06-10","v":1167.2505110000002},{"d":"2016-06-13","v":1148.73759},{"d":"2016-06-14","v":1118.2639975},{"d":"2016-06-15","v":1130.5719179999999},{"d":"2016-06-16","v":1128.8965675},{"d":"2016-06-17","v":1140.9215665},{"d":"2016-06-20","v":1186.377768},{"d":"2016-06-21","v":1191.626825},{"d":"2016-06-22","v":1200.7081624999998},{"d":"2016-06-23","v":1232.6890945},{"d":"2016-06-24","v":1130.6649060000002},{"d":"2016-06-27","v":1097.238701},{"d":"2016-06-28","v":1132.2027760000003},{"d":"2016-06-29","v":1171.4688665},{"d":"2016-06-30","v":1176.864772},{"d":"2016-07-01","v":1183.0356720000002},{"d":"2016-07-04","v":1176.9942879999999},{"d":"2016-07-05","v":1162.4272710000002},{"d":"2016-07-06","v":1143.5906490000002},{"d":"2016-07-07","v":1154.8436985},{"d":"2016-07-08","v":1173.226344},{"d":"2016-07-11","v":1189.2982709999999},{"d":"2016-07-12","v":1207.10866},{"d":"2016-07-13","v":1201.1589834999997},{"d":"2016-07-14","v":1208.3267600000001},{"d":"2016-07-15","v":1202.042846},{"d":"2016-07-18","v":1204.3072000000002},{"d":"2016-07-19","v":1196.514472},{"d":"2016-07-20","v":1209.302174},{"d":"2016-07-21","v":1207.94897},{"d":"2016-07-22","v":1206.288558},{"d":"2016-07-25","v":1204.630083},{"d":"2016-07-26","v":1213.4545605},{"d":"2016-07-27","v":1217.0139669999999},{"d":"2016-07-28","v":1198.3175640000002},{"d":"2016-07-29","v":1204.8939105},{"d":"2016-08-01","v":1193.5117425},{"d":"2016-08-02","v":1177.9329145},{"d":"2016-08-03","v":1182.639876},{"d":"2016-08-04","v":1190.895409},{"d":"2016-08-05","v":1205.2772875},{"d":"2016-08-08","v":1205.81502},{"d":"2016-08-09","v":1216.1098975000002},{"d":"2016-08-10","v":1211.852187},{"d":"2016-08-11","v":1221.5391929999998},{"d":"2016-08-12","v":1219.9793725},{"d":"2016-08-15","v":1220.559435},{"d":"2016-08-16","v":1206.975418},{"d":"2016-08-17","v":1200.428544},{"d":"2016-08-18","v":1203.955452},{"d":"2016-08-19","v":1198.0190300000002},{"d":"2016-08-22","v":1198.55568},{"d":"2016-08-23","v":1207.2951030000002},{"d":"2016-08-24","v":1212.4926},{"d":"2016-08-25","v":1206.5732835},{"d":"2016-08-26","v":1216.460544},{"d":"2016-08-29","v":1214.691548},{"d":"2016-08-30","v":1223.48672},{"d":"2016-08-31","v":1220.158016},{"d":"2016-09-01","v":1215.8050999999998},{"d":"2016-09-02","v":1241.2203124999999},{"d":"2016-09-05","v":1238.868992},{"d":"2016-09-06","v":1231.1347159999998},{"d":"2016-09-07","v":1233.386868},{"d":"2016-09-08","v":1234.870856},{"d":"2016-09-09","v":1223.7622165},{"d":"2016-09-12","v":1209.7176},{"d":"2016-09-13","v":1199.6158400000002},{"d":"2016-09-14","v":1196.0474295},{"d":"2016-09-15","v":1200.8232799999998},{"d":"2016-09-16","v":1192.6574704999998},{"d":"2016-09-19","v":1206.867904},{"d":"2016-09-20","v":1202.5336005},{"d":"2016-09-21","v":1206.240888},{"d":"2016-09-22","v":1219.5507105000002},{"d":"2016-09-23","v":1214.065888},{"d":"2016-09-26","v":1196.7153799999999},{"d":"2016-09-27","v":1197.7148699999998},{"d":"2016-09-28","v":1205.1169065000001},{"d":"2016-09-29","v":1200.08556},{"d":"2016-09-30","v":1206.6728489999998},{"d":"2016-10-03","v":1207.211356},{"d":"2016-10-04","v":1224.1093899999998},{"d":"2016-10-05","v":1213.6895415},{"d":"2016-10-06","v":1211.5309359999999},{"d":"2016-10-07","v":1200.5194960000001},{"d":"2016-10-10","v":1212.3486759999998},{"d":"2016-10-11","v":1205.6222155},{"d":"2016-10-12","v":1196.953888},{"d":"2016-10-13","v":1185.177568},{"d":"2016-10-14","v":1196.248806},{"d":"2016-10-17","v":1187.3109615},{"d":"2016-10-18","v":1202.9275650000002},{"d":"2016-10-19","v":1203.2589079999998},{"d":"2016-10-20","v":1208.2328685000002},{"d":"2016-10-21","v":1205.49563},{"d":"2016-10-24","v":1204.164876},{"d":"2016-10-25","v":1203.09908},{"d":"2016-10-26","v":1197.685704},{"d":"2016-10-27","v":1199.9672369999998},{"d":"2016-10-28","v":1196.8905459999999},{"d":"2016-10-31","v":1188.2982075},{"d":"2016-11-01","v":1168.1660160000001},{"d":"2016-11-02","v":1157.681012},{"d":"2016-11-03","v":1157.2230960000002},{"d":"2016-11-04","v":1146.3420389999999},{"d":"2016-11-07","v":1161.6712985},{"d":"2016-11-08","v":1169.8620589999998},{"d":"2016-11-09","v":1185.1714559999998},{"d":"2016-11-10","v":1183.209822},{"d":"2016-11-11","v":1175.125912},{"d":"2016-11-14","v":1177.589215},{"d":"2016-11-15","v":1183.706712},{"d":"2016-11-16","v":1177.756482},{"d":"2016-11-17","v":1183.4431984999999},{"d":"2016-11-18","v":1176.792206},{"d":"2016-11-21","v":1181.1573099999998},{"d":"2016-11-22","v":1183.045963},{"d":"2016-11-23","v":1180.7748539999998},{"d":"2016-11-24","v":1184.98449},{"d":"2016-11-25","v":1189.2012599999998},{"d":"2016-11-28","v":1179.9966605},{"d":"2016-11-29","v":1184.4849749999998},{"d":"2016-11-30","v":1190.09331},{"d":"2016-12-01","v":1185.9936075000003},{"d":"2016-12-02","v":1182.6002330000001},{"d":"2016-12-05","v":1195.3456494999998},{"d":"2016-12-06","v":1206.60378},{"d":"2016-12-07","v":1218.489146},{"d":"2016-12-08","v":1229.4129105000002},{"d":"2016-12-09","v":1237.0859384999999},{"d":"2016-12-12","v":1237.2957215},{"d":"2016-12-13","v":1250.944604},{"d":"2016-12-14","v":1242.712975},{"d":"2016-12-15","v":1254.2726525},{"d":"2016-12-16","v":1257.943063},{"d":"2016-12-19","v":1251.480625},{"d":"2016-12-20","v":1258.661817},{"d":"2016-12-21","v":1256.2383835},{"d":"2016-12-22","v":1254.2524609999998},{"d":"2016-12-23","v":1257.583664},{"d":"2016-12-26","v":1256.822592},{"d":"2016-12-27","v":1259.7543405000001},{"d":"2016-12-28","v":1259.6611895},{"d":"2016-12-29","v":1257.1844935000001},{"d":"2016-12-30","v":1260.890577},{"d":"2017-01-02","v":1263.1965750000002},{"d":"2017-01-03","v":1271.2501170000003},{"d":"2017-01-04","v":1275.0528935000002},{"d":"2017-01-05","v":1276.3889490000001},{"d":"2017-01-06","v":1278.28886},{"d":"2017-01-09","v":1273.273242},{"d":"2017-01-10","v":1274.0228775},{"d":"2017-01-11","v":1276.0835175},{"d":"2017-01-12","v":1265.6197225},{"d":"2017-01-13","v":1277.5786425},{"d":"2017-01-16","v":1263.6789945},{"d":"2017-01-17","v":1260.6947910000001},{"d":"2017-01-18","v":1262.8428210000002},{"d":"2017-01-19","v":1262.915467},{"d":"2017-01-20","v":1261.0346636},{"d":"2017-01-23","v":1254.7043775},{"d":"2017-01-24","v":1256.6324975},{"d":"2017-01-25","v":1274.4364874999999},{"d":"2017-01-26","v":1269.8608224999998},{"d":"2017-01-27","v":1267.6651548},{"d":"2017-01-30","v":1249.2385199999999},{"d":"2017-01-31","v":1243.4654595},{"d":"2017-02-01","v":1255.7158729999999},{"d":"2017-02-02","v":1246.4127349999999},{"d":"2017-02-03","v":1259.4506651000002},{"d":"2017-02-06","v":1247.07762},{"d":"2017-02-07","v":1249.4639685},{"d":"2017-02-08","v":1252.0895314999998},{"d":"2017-02-09","v":1269.432889},{"d":"2017-02-10","v":1268.39016},{"d":"2017-02-13","v":1275.1035075},{"d":"2017-02-14","v":1272.975755},{"d":"2017-02-15","v":1281.0148655},{"d":"2017-02-16","v":1275.6766925},{"d":"2017-02-17","v":1282.101438},{"d":"2017-02-20","v":1281.9597129999997},{"d":"2017-02-21","v":1289.315889},{"d":"2017-02-22","v":1295.6490885000003},{"d":"2017-02-23","v":1292.751252},{"d":"2017-02-24","v":1288.1229225000002},{"d":"2017-02-27","v":1285.631023},{"d":"2017-02-28","v":1282.1767845},{"d":"2017-03-01","v":1301.7639109999998},{"d":"2017-03-02","v":1305.2398875000001},{"d":"2017-03-03","v":1312.8962204999998},{"d":"2017-03-06","v":1306.6917105},{"d":"2017-03-07","v":1303.4279115000002},{"d":"2017-03-08","v":1302.1679275000001},{"d":"2017-03-09","v":1304.6446300000002},{"d":"2017-03-10","v":1316.55346155},{"d":"2017-03-13","v":1313.0912115},{"d":"2017-03-14","v":1307.6898099999999},{"d":"2017-03-15","v":1316.6671545000002},{"d":"2017-03-16","v":1327.465087},{"d":"2017-03-17","v":1331.6904825000001},{"d":"2017-03-20","v":1326.475503},{"d":"2017-03-21","v":1323.3850244999999},{"d":"2017-03-22","v":1314.3727660000002},{"d":"2017-03-23","v":1325.253007},{"d":"2017-03-24","v":1324.11419},{"d":"2017-03-27","v":1317.5043375000002},{"d":"2017-03-28","v":1327.9101055},{"d":"2017-03-29","v":1332.7872375},{"d":"2017-03-30","v":1335.2361345},{"d":"2017-03-31","v":1335.4993125},{"d":"2017-04-03","v":1329.4219730000002},{"d":"2017-04-04","v":1334.634348},{"d":"2017-04-05","v":1337.4229859999998},{"d":"2017-04-06","v":1339.219572},{"d":"2017-04-07","v":1339.500211},{"d":"2017-04-10","v":1338.0459785},{"d":"2017-04-11","v":1337.9878815},{"d":"2017-04-12","v":1341.3214185000002},{"d":"2017-04-13","v":1331.6084925},{"d":"2017-04-14","v":1331.4837575},{"d":"2017-04-17","v":1333.3547825},{"d":"2017-04-18","v":1316.7061230000002},{"d":"2017-04-19","v":1316.936204},{"d":"2017-04-20","v":1321.0894735},{"d":"2017-04-21","v":1321.3043025},{"d":"2017-04-24","v":1364.8329469999999},{"d":"2017-04-25","v":1373.3466675},{"d":"2017-04-26","v":1374.2310615000001},{"d":"2017-04-27","v":1370.0500775},{"d":"2017-04-28","v":1370.2534649999998},{"d":"2017-05-01","v":1370.1404975},{"d":"2017-05-02","v":1377.616704},{"d":"2017-05-03","v":1379.0903964999998},{"d":"2017-05-04","v":1391.584742},{"d":"2017-05-05","v":1402.9507755},{"d":"2017-05-08","v":1410.6059855},{"d":"2017-05-09","v":1422.3854314999999},{"d":"2017-05-10","v":1426.6912184999999},{"d":"2017-05-11","v":1420.7977935000001},{"d":"2017-05-12","v":1428.6418574999998},{"d":"2017-05-15","v":1429.8260275},{"d":"2017-05-16","v":1431.6882675000002},{"d":"2017-05-17","v":1417.8676879999998},{"d":"2017-05-18","v":1402.8136095},{"d":"2017-05-19","v":1412.5157144999998},{"d":"2017-05-22","v":1416.555855},{"d":"2017-05-23","v":1415.9329169999999},{"d":"2017-05-24","v":1416.5076285},{"d":"2017-05-25","v":1413.6229075},{"d":"2017-05-26","v":1408.0198016},{"d":"2017-05-29","v":1412.1911370000003},{"d":"2017-05-30","v":1408.3018124999999},{"d":"2017-05-31","v":1404.496968},{"d":"2017-06-01","v":1409.9090315},{"d":"2017-06-02","v":1409.45778215},{"d":"2017-06-05","v":1410.1806125},{"d":"2017-06-06","v":1398.8356095000001},{"d":"2017-06-07","v":1396.1661565},{"d":"2017-06-08","v":1393.563246},{"d":"2017-06-09","v":1400.0366052},{"d":"2017-06-12","v":1387.359491},{"d":"2017-06-13","v":1392.4506059999999},{"d":"2017-06-14","v":1388.7578475},{"d":"2017-06-15","v":1386.9504625000002},{"d":"2017-06-16","v":1398.55918215},{"d":"2017-06-19","v":1408.874535},{"d":"2017-06-20","v":1398.994905},{"d":"2017-06-21","v":1392.7722410000001},{"d":"2017-06-22","v":1393.7118765},{"d":"2017-06-23","v":1391.91451555},{"d":"2017-06-26","v":1402.7793615},{"d":"2017-06-27","v":1396.7477430000001},{"d":"2017-06-28","v":1396.7477430000001}]}},{"instrumentId":75,"timeSeries":{"entries":[{"d":"2010-01-01","v":37.5},{"d":"2010-01-04","v":37.81},{"d":"2010-01-05","v":38.32},{"d":"2010-01-06","v":38.31},{"d":"2010-01-07","v":38.09},{"d":"2010-01-08","v":38.37},{"d":"2010-01-11","v":38.18},{"d":"2010-01-12","v":38.68},{"d":"2010-01-13","v":38.62},{"d":"2010-01-14","v":39.38},{"d":"2010-01-15","v":39.57},{"d":"2010-01-18","v":39.7},{"d":"2010-01-19","v":39.87},{"d":"2010-01-20","v":39.19},{"d":"2010-01-21","v":39.75},{"d":"2010-01-22","v":39.59},{"d":"2010-01-25","v":39.36},{"d":"2010-01-26","v":39.38},{"d":"2010-01-27","v":38.9},{"d":"2010-01-28","v":38.84},{"d":"2010-01-29","v":38.83},{"d":"2010-02-01","v":38.82},{"d":"2010-02-02","v":39.4},{"d":"2010-02-03","v":39.26},{"d":"2010-02-04","v":38.51},{"d":"2010-02-05","v":38.82},{"d":"2010-02-08","v":38.9},{"d":"2010-02-09","v":38.66},{"d":"2010-02-10","v":38.64},{"d":"2010-02-11","v":38.94},{"d":"2010-02-12","v":38.9},{"d":"2010-02-15","v":38.93},{"d":"2010-02-16","v":38.77},{"d":"2010-02-17","v":39.35},{"d":"2010-02-18","v":39.43},{"d":"2010-02-19","v":39.01},{"d":"2010-02-22","v":39.27},{"d":"2010-02-23","v":39.27},{"d":"2010-02-24","v":39.34},{"d":"2010-02-25","v":39.35},{"d":"2010-02-26","v":39.43},{"d":"2010-03-01","v":40.2},{"d":"2010-03-02","v":40.42},{"d":"2010-03-03","v":40.14},{"d":"2010-03-04","v":39.9},{"d":"2010-03-05","v":40.31},{"d":"2010-03-08","v":40.53},{"d":"2010-03-09","v":40.65},{"d":"2010-03-10","v":40.24},{"d":"2010-03-11","v":40.37},{"d":"2010-03-12","v":40.24},{"d":"2010-03-15","v":40.2},{"d":"2010-03-16","v":40.36},{"d":"2010-03-17","v":40.48},{"d":"2010-03-18","v":40.6},{"d":"2010-03-19","v":40.46},{"d":"2010-03-22","v":40.53},{"d":"2010-03-23","v":40.77},{"d":"2010-03-24","v":40.67},{"d":"2010-03-25","v":40.88},{"d":"2010-03-26","v":40.94},{"d":"2010-03-29","v":41.19},{"d":"2010-03-30","v":41.61},{"d":"2010-03-31","v":40.6},{"d":"2010-04-01","v":40.76},{"d":"2010-04-02","v":40.76},{"d":"2010-04-05","v":40.76},{"d":"2010-04-06","v":41.83},{"d":"2010-04-07","v":41.99},{"d":"2010-04-08","v":41.84},{"d":"2010-04-09","v":41.93},{"d":"2010-04-12","v":41.97},{"d":"2010-04-13","v":41.36},{"d":"2010-04-14","v":41.53},{"d":"2010-04-15","v":41.79},{"d":"2010-04-16","v":41.34},{"d":"2010-04-19","v":41.01},{"d":"2010-04-20","v":41.27},{"d":"2010-04-21","v":41.47},{"d":"2010-04-22","v":41.19},{"d":"2010-04-23","v":41.34},{"d":"2010-04-26","v":42.01},{"d":"2010-04-27","v":41.75},{"d":"2010-04-28","v":41.54},{"d":"2010-04-29","v":41.78},{"d":"2010-04-30","v":41.59},{"d":"2010-05-03","v":41.59},{"d":"2010-05-04","v":40.9},{"d":"2010-05-05","v":41.58},{"d":"2010-05-06","v":40.93},{"d":"2010-05-07","v":40.91},{"d":"2010-05-10","v":41.9},{"d":"2010-05-11","v":41.13},{"d":"2010-05-12","v":41.41},{"d":"2010-05-13","v":41.41},{"d":"2010-05-14","v":41.3},{"d":"2010-05-17","v":41.6},{"d":"2010-05-18","v":41.43},{"d":"2010-05-19","v":41.68},{"d":"2010-05-20","v":41.28},{"d":"2010-05-21","v":41.16},{"d":"2010-05-24","v":41.16},{"d":"2010-05-25","v":40.53},{"d":"2010-05-26","v":40.49},{"d":"2010-05-27","v":41.34},{"d":"2010-05-28","v":41.04},{"d":"2010-05-31","v":40.77},{"d":"2010-06-01","v":40.92},{"d":"2010-06-02","v":40.53},{"d":"2010-06-03","v":40.73},{"d":"2010-06-04","v":40.36},{"d":"2010-06-07","v":39.71},{"d":"2010-06-08","v":39.44},{"d":"2010-06-09","v":39.55},{"d":"2010-06-10","v":39.81},{"d":"2010-06-11","v":40.04},{"d":"2010-06-14","v":39.97},{"d":"2010-06-15","v":40.16},{"d":"2010-06-16","v":40.36},{"d":"2010-06-17","v":39.79},{"d":"2010-06-18","v":39.64},{"d":"2010-06-21","v":40.14},{"d":"2010-06-22","v":39.88},{"d":"2010-06-23","v":39.5},{"d":"2010-06-24","v":38.89},{"d":"2010-06-25","v":38.77},{"d":"2010-06-28","v":38.42},{"d":"2010-06-29","v":37.4},{"d":"2010-06-30","v":37.19},{"d":"2010-07-01","v":36.6},{"d":"2010-07-02","v":36.72},{"d":"2010-07-05","v":36.78},{"d":"2010-07-06","v":37.82},{"d":"2010-07-07","v":37.75},{"d":"2010-07-08","v":37.63},{"d":"2010-07-09","v":37.6},{"d":"2010-07-12","v":37.71},{"d":"2010-07-13","v":37.74},{"d":"2010-07-14","v":37.97},{"d":"2010-07-15","v":36.95},{"d":"2010-07-16","v":36.88},{"d":"2010-07-19","v":36.59},{"d":"2010-07-20","v":36.38},{"d":"2010-07-21","v":36.77},{"d":"2010-07-22","v":36.83},{"d":"2010-07-23","v":37.58},{"d":"2010-07-26","v":37.25},{"d":"2010-07-27","v":37.72},{"d":"2010-07-28","v":38.14},{"d":"2010-07-29","v":37.66},{"d":"2010-07-30","v":37.45},{"d":"2010-08-02","v":37.92},{"d":"2010-08-03","v":38.01},{"d":"2010-08-04","v":38.27},{"d":"2010-08-05","v":38.1},{"d":"2010-08-06","v":37.81},{"d":"2010-08-09","v":38.51},{"d":"2010-08-10","v":38.41},{"d":"2010-08-11","v":37.41},{"d":"2010-08-12","v":36.99},{"d":"2010-08-13","v":37.05},{"d":"2010-08-16","v":36.86},{"d":"2010-08-17","v":37.45},{"d":"2010-08-18","v":37.33},{"d":"2010-08-19","v":36.76},{"d":"2010-08-20","v":36.8},{"d":"2010-08-23","v":36.75},{"d":"2010-08-24","v":36.4},{"d":"2010-08-25","v":35.96},{"d":"2010-08-26","v":36},{"d":"2010-08-27","v":36.56},{"d":"2010-08-30","v":36.32},{"d":"2010-08-31","v":35.67},{"d":"2010-09-01","v":36.47},{"d":"2010-09-02","v":36.14},{"d":"2010-09-03","v":36.62},{"d":"2010-09-06","v":36.83},{"d":"2010-09-07","v":36.59},{"d":"2010-09-08","v":36.66},{"d":"2010-09-09","v":36.89},{"d":"2010-09-10","v":37.14},{"d":"2010-09-13","v":37.13},{"d":"2010-09-14","v":36.67},{"d":"2010-09-15","v":36.71},{"d":"2010-09-16","v":36.78},{"d":"2010-09-17","v":36.55},{"d":"2010-09-20","v":36.91},{"d":"2010-09-21","v":36.67},{"d":"2010-09-22","v":36.06},{"d":"2010-09-23","v":35.85},{"d":"2010-09-24","v":36.13},{"d":"2010-09-27","v":36.19},{"d":"2010-09-28","v":36.4},{"d":"2010-09-29","v":36.45},{"d":"2010-09-30","v":36.04},{"d":"2010-10-01","v":35.85},{"d":"2010-10-04","v":35.25},{"d":"2010-10-05","v":36.03},{"d":"2010-10-06","v":36.27},{"d":"2010-10-07","v":36.67},{"d":"2010-10-08","v":36.51},{"d":"2010-10-11","v":36.72},{"d":"2010-10-12","v":36.05},{"d":"2010-10-13","v":36.28},{"d":"2010-10-14","v":36.29},{"d":"2010-10-15","v":36.21},{"d":"2010-10-18","v":36.48},{"d":"2010-10-19","v":36.77},{"d":"2010-10-20","v":36.55},{"d":"2010-10-21","v":36.45},{"d":"2010-10-22","v":36.76},{"d":"2010-10-25","v":36.76},{"d":"2010-10-26","v":36.79},{"d":"2010-10-27","v":36.82},{"d":"2010-10-28","v":36.75},{"d":"2010-10-29","v":36.77},{"d":"2010-11-01","v":36.78},{"d":"2010-11-02","v":36.36},{"d":"2010-11-03","v":36.22},{"d":"2010-11-04","v":36.54},{"d":"2010-11-05","v":36.76},{"d":"2010-11-08","v":37.12},{"d":"2010-11-09","v":37.32},{"d":"2010-11-10","v":37.33},{"d":"2010-11-11","v":37.54},{"d":"2010-11-12","v":37.51},{"d":"2010-11-15","v":37.82},{"d":"2010-11-16","v":37.22},{"d":"2010-11-17","v":37.76},{"d":"2010-11-18","v":39.08},{"d":"2010-11-19","v":38.87},{"d":"2010-11-22","v":38.54},{"d":"2010-11-23","v":37.81},{"d":"2010-11-24","v":38.58},{"d":"2010-11-25","v":38.8},{"d":"2010-11-26","v":38.49},{"d":"2010-11-29","v":38.23},{"d":"2010-11-30","v":38.07},{"d":"2010-12-01","v":39.11},{"d":"2010-12-02","v":39.02},{"d":"2010-12-03","v":38.64},{"d":"2010-12-06","v":39.04},{"d":"2010-12-07","v":38.69},{"d":"2010-12-08","v":38.75},{"d":"2010-12-09","v":38.79},{"d":"2010-12-10","v":38.58},{"d":"2010-12-13","v":38.66},{"d":"2010-12-14","v":38.62},{"d":"2010-12-15","v":38.36},{"d":"2010-12-16","v":38.6},{"d":"2010-12-17","v":38.52},{"d":"2010-12-20","v":38.44},{"d":"2010-12-21","v":38.47},{"d":"2010-12-22","v":38.38},{"d":"2010-12-23","v":38.77},{"d":"2010-12-24","v":38.77},{"d":"2010-12-27","v":38.85},{"d":"2010-12-28","v":38.69},{"d":"2010-12-29","v":38.99},{"d":"2010-12-30","v":38.01},{"d":"2010-12-31","v":38.01},{"d":"2011-01-03","v":38.01},{"d":"2011-01-04","v":38.96},{"d":"2011-01-05","v":39.63},{"d":"2011-01-06","v":39.54},{"d":"2011-01-07","v":39.78},{"d":"2011-01-10","v":39.81},{"d":"2011-01-11","v":40.37},{"d":"2011-01-12","v":40.64},{"d":"2011-01-13","v":40.53},{"d":"2011-01-14","v":40.4},{"d":"2011-01-17","v":40.1},{"d":"2011-01-18","v":40.28},{"d":"2011-01-19","v":40.28},{"d":"2011-01-20","v":39.95},{"d":"2011-01-21","v":39.43},{"d":"2011-01-24","v":39.21},{"d":"2011-01-25","v":39.46},{"d":"2011-01-26","v":39.28},{"d":"2011-01-27","v":39.17},{"d":"2011-01-28","v":38.84},{"d":"2011-01-31","v":38.66},{"d":"2011-02-01","v":39.26},{"d":"2011-02-02","v":39.56},{"d":"2011-02-03","v":39.93},{"d":"2011-02-04","v":40.39},{"d":"2011-02-07","v":40.71},{"d":"2011-02-08","v":40.96},{"d":"2011-02-09","v":40.64},{"d":"2011-02-10","v":40.93},{"d":"2011-02-11","v":41.28},{"d":"2011-02-14","v":41.44},{"d":"2011-02-15","v":41.27},{"d":"2011-02-16","v":41.46},{"d":"2011-02-17","v":41.37},{"d":"2011-02-18","v":41.25},{"d":"2011-02-21","v":40.79},{"d":"2011-02-22","v":40.13},{"d":"2011-02-23","v":39.59},{"d":"2011-02-24","v":39.18},{"d":"2011-02-25","v":39.67},{"d":"2011-02-28","v":40.19},{"d":"2011-03-01","v":40.22},{"d":"2011-03-02","v":39.66},{"d":"2011-03-03","v":39.99},{"d":"2011-03-04","v":39.56},{"d":"2011-03-07","v":39.3},{"d":"2011-03-08","v":39.58},{"d":"2011-03-09","v":39.58},{"d":"2011-03-10","v":38.72},{"d":"2011-03-11","v":37.63},{"d":"2011-03-14","v":34.13},{"d":"2011-03-15","v":33.4},{"d":"2011-03-16","v":33.7},{"d":"2011-03-17","v":34.18},{"d":"2011-03-18","v":34.15},{"d":"2011-03-21","v":35.63},{"d":"2011-03-22","v":35.84},{"d":"2011-03-23","v":35.67},{"d":"2011-03-24","v":35.95},{"d":"2011-03-25","v":35.86},{"d":"2011-03-28","v":35.84},{"d":"2011-03-29","v":35.5},{"d":"2011-03-30","v":36},{"d":"2011-03-31","v":35.52},{"d":"2011-04-01","v":35.52},{"d":"2011-04-04","v":35.3},{"d":"2011-04-05","v":34.67},{"d":"2011-04-06","v":33.93},{"d":"2011-04-07","v":34.13},{"d":"2011-04-08","v":34.34},{"d":"2011-04-11","v":34},{"d":"2011-04-12","v":33.44},{"d":"2011-04-13","v":33.65},{"d":"2011-04-14","v":33.64},{"d":"2011-04-15","v":33.72},{"d":"2011-04-18","v":33.43},{"d":"2011-04-19","v":33.67},{"d":"2011-04-20","v":34.03},{"d":"2011-04-21","v":33.9},{"d":"2011-04-22","v":33.9},{"d":"2011-04-25","v":33.9},{"d":"2011-04-26","v":33.76},{"d":"2011-04-27","v":33.68},{"d":"2011-04-28","v":34.22},{"d":"2011-04-29","v":34.19},{"d":"2011-05-02","v":34.3},{"d":"2011-05-03","v":34.3},{"d":"2011-05-04","v":33.74},{"d":"2011-05-05","v":34.15},{"d":"2011-05-06","v":34.89},{"d":"2011-05-09","v":34.51},{"d":"2011-05-10","v":34.93},{"d":"2011-05-11","v":34.75},{"d":"2011-05-12","v":34.72},{"d":"2011-05-13","v":34.61},{"d":"2011-05-16","v":33.96},{"d":"2011-05-17","v":33.54},{"d":"2011-05-18","v":33.87},{"d":"2011-05-19","v":33.52},{"d":"2011-05-20","v":33.09},{"d":"2011-05-23","v":32.71},{"d":"2011-05-24","v":32.76},{"d":"2011-05-25","v":32.71},{"d":"2011-05-26","v":32.72},{"d":"2011-05-27","v":32.56},{"d":"2011-05-30","v":32.37},{"d":"2011-05-31","v":32.84},{"d":"2011-06-01","v":32.18},{"d":"2011-06-02","v":32.18},{"d":"2011-06-03","v":31.83},{"d":"2011-06-06","v":31.4},{"d":"2011-06-07","v":31.78},{"d":"2011-06-08","v":31.68},{"d":"2011-06-09","v":32.01},{"d":"2011-06-10","v":31.81},{"d":"2011-06-13","v":31.81},{"d":"2011-06-14","v":32.16},{"d":"2011-06-15","v":32.13},{"d":"2011-06-16","v":31.9},{"d":"2011-06-17","v":31.91},{"d":"2011-06-20","v":31.68},{"d":"2011-06-21","v":31.93},{"d":"2011-06-22","v":32.18},{"d":"2011-06-23","v":31.68},{"d":"2011-06-24","v":32.18},{"d":"2011-06-27","v":31.82},{"d":"2011-06-28","v":31.9},{"d":"2011-06-29","v":32.6},{"d":"2011-06-30","v":33.2},{"d":"2011-07-01","v":33.53},{"d":"2011-07-04","v":33.8},{"d":"2011-07-05","v":33.53},{"d":"2011-07-06","v":33.55},{"d":"2011-07-07","v":33.96},{"d":"2011-07-08","v":33.41},{"d":"2011-07-11","v":33.17},{"d":"2011-07-12","v":33.28},{"d":"2011-07-13","v":33.34},{"d":"2011-07-14","v":32.93},{"d":"2011-07-15","v":32.95},{"d":"2011-07-18","v":32.49},{"d":"2011-07-19","v":32.99},{"d":"2011-07-20","v":33.28},{"d":"2011-07-21","v":33.49},{"d":"2011-07-22","v":33.56},{"d":"2011-07-25","v":32.94},{"d":"2011-07-26","v":32.93},{"d":"2011-07-27","v":32.59},{"d":"2011-07-28","v":32.67},{"d":"2011-07-29","v":32.2},{"d":"2011-08-01","v":32.2},{"d":"2011-08-02","v":31.06},{"d":"2011-08-03","v":30.4},{"d":"2011-08-04","v":29.26},{"d":"2011-08-05","v":28.69},{"d":"2011-08-08","v":28.51},{"d":"2011-08-09","v":28.11},{"d":"2011-08-10","v":27.22},{"d":"2011-08-11","v":28.18},{"d":"2011-08-12","v":28.66},{"d":"2011-08-15","v":29.16},{"d":"2011-08-16","v":29.53},{"d":"2011-08-17","v":29.6},{"d":"2011-08-18","v":28.47},{"d":"2011-08-19","v":28.51},{"d":"2011-08-22","v":28.23},{"d":"2011-08-23","v":28.52},{"d":"2011-08-24","v":28.5},{"d":"2011-08-25","v":28.44},{"d":"2011-08-26","v":29.18},{"d":"2011-08-29","v":29.87},{"d":"2011-08-30","v":29.94},{"d":"2011-08-31","v":29.97},{"d":"2011-09-01","v":29.81},{"d":"2011-09-02","v":28.68},{"d":"2011-09-05","v":27.97},{"d":"2011-09-06","v":30.32},{"d":"2011-09-07","v":30.98},{"d":"2011-09-08","v":31.22},{"d":"2011-09-09","v":31.03},{"d":"2011-09-12","v":31.06},{"d":"2011-09-13","v":31.46},{"d":"2011-09-14","v":31.54},{"d":"2011-09-15","v":31.58},{"d":"2011-09-16","v":32},{"d":"2011-09-19","v":32.02},{"d":"2011-09-20","v":32.03},{"d":"2011-09-21","v":32.34},{"d":"2011-09-22","v":31.81},{"d":"2011-09-23","v":31.88},{"d":"2011-09-26","v":31.71},{"d":"2011-09-27","v":32.45},{"d":"2011-09-28","v":32.6},{"d":"2011-09-29","v":32.63},{"d":"2011-09-30","v":32.44},{"d":"2011-10-03","v":32.44},{"d":"2011-10-04","v":32.19},{"d":"2011-10-05","v":32.37},{"d":"2011-10-06","v":32.74},{"d":"2011-10-07","v":32.46},{"d":"2011-10-10","v":32.56},{"d":"2011-10-11","v":32.69},{"d":"2011-10-12","v":32.4},{"d":"2011-10-13","v":32.37},{"d":"2011-10-14","v":32.25},{"d":"2011-10-17","v":32.45},{"d":"2011-10-18","v":32.44},{"d":"2011-10-19","v":32.43},{"d":"2011-10-20","v":31.95},{"d":"2011-10-21","v":31.92},{"d":"2011-10-24","v":32.09},{"d":"2011-10-25","v":31.79},{"d":"2011-10-26","v":31.72},{"d":"2011-10-27","v":32.1},{"d":"2011-10-28","v":32.29},{"d":"2011-10-31","v":31.15},{"d":"2011-11-01","v":31.02},{"d":"2011-11-02","v":30.52},{"d":"2011-11-03","v":31.15},{"d":"2011-11-04","v":31.15},{"d":"2011-11-07","v":31.65},{"d":"2011-11-08","v":31.37},{"d":"2011-11-09","v":31.69},{"d":"2011-11-10","v":31.45},{"d":"2011-11-11","v":31.43},{"d":"2011-11-14","v":31.71},{"d":"2011-11-15","v":31.95},{"d":"2011-11-16","v":31.79},{"d":"2011-11-17","v":31.66},{"d":"2011-11-18","v":31.7},{"d":"2011-11-21","v":30.95},{"d":"2011-11-22","v":31.09},{"d":"2011-11-23","v":31.25},{"d":"2011-11-24","v":30.59},{"d":"2011-11-25","v":31.15},{"d":"2011-11-28","v":31.44},{"d":"2011-11-29","v":31.64},{"d":"2011-11-30","v":32.17},{"d":"2011-12-01","v":32},{"d":"2011-12-02","v":32.6},{"d":"2011-12-05","v":32.58},{"d":"2011-12-06","v":32.53},{"d":"2011-12-07","v":32.54},{"d":"2011-12-08","v":32.43},{"d":"2011-12-09","v":32.6},{"d":"2011-12-12","v":32.55},{"d":"2011-12-13","v":32.96},{"d":"2011-12-14","v":32.74},{"d":"2011-12-15","v":32.17},{"d":"2011-12-16","v":32.06},{"d":"2011-12-19","v":31.66},{"d":"2011-12-20","v":31.86},{"d":"2011-12-21","v":31.79},{"d":"2011-12-22","v":31.94},{"d":"2011-12-23","v":32.39},{"d":"2011-12-26","v":32.39},{"d":"2011-12-27","v":32.03},{"d":"2011-12-28","v":31.89},{"d":"2011-12-29","v":32.19},{"d":"2011-12-30","v":32.37},{"d":"2012-01-02","v":32.37},{"d":"2012-01-03","v":32.99},{"d":"2012-01-04","v":33.24},{"d":"2012-01-05","v":33.28},{"d":"2012-01-06","v":33.15},{"d":"2012-01-09","v":32.96},{"d":"2012-01-10","v":33.35},{"d":"2012-01-11","v":33.28},{"d":"2012-01-12","v":32.88},{"d":"2012-01-13","v":33.25},{"d":"2012-01-16","v":33.3},{"d":"2012-01-17","v":33.3},{"d":"2012-01-18","v":33.3},{"d":"2012-01-19","v":33.3},{"d":"2012-01-20","v":33.57},{"d":"2012-01-23","v":33.6},{"d":"2012-01-24","v":33.3},{"d":"2012-01-25","v":33.46},{"d":"2012-01-26","v":33.4},{"d":"2012-01-27","v":33.33},{"d":"2012-01-30","v":33.71},{"d":"2012-01-31","v":33.4},{"d":"2012-02-01","v":33.53},{"d":"2012-02-02","v":33.61},{"d":"2012-02-03","v":33.93},{"d":"2012-02-06","v":33.85},{"d":"2012-02-07","v":33.87},{"d":"2012-02-08","v":33.69},{"d":"2012-02-09","v":34.01},{"d":"2012-02-10","v":33.78},{"d":"2012-02-13","v":33.95},{"d":"2012-02-14","v":33.74},{"d":"2012-02-15","v":34.59},{"d":"2012-02-16","v":34.52},{"d":"2012-02-17","v":35},{"d":"2012-02-20","v":34.39},{"d":"2012-02-21","v":34.24},{"d":"2012-02-22","v":34.37},{"d":"2012-02-23","v":34.61},{"d":"2012-02-24","v":34.54},{"d":"2012-02-27","v":34.31},{"d":"2012-02-28","v":34.81},{"d":"2012-02-29","v":34.21},{"d":"2012-03-01","v":34.56},{"d":"2012-03-02","v":34.82},{"d":"2012-03-05","v":34.46},{"d":"2012-03-06","v":34.36},{"d":"2012-03-07","v":34.56},{"d":"2012-03-08","v":34.82},{"d":"2012-03-09","v":35.4},{"d":"2012-03-12","v":34.96},{"d":"2012-03-13","v":35},{"d":"2012-03-14","v":35.61},{"d":"2012-03-15","v":35.48},{"d":"2012-03-16","v":35.41},{"d":"2012-03-19","v":35.14},{"d":"2012-03-20","v":34.9},{"d":"2012-03-21","v":34.73},{"d":"2012-03-22","v":34.98},{"d":"2012-03-23","v":34.6},{"d":"2012-03-26","v":34.69},{"d":"2012-03-27","v":35.1},{"d":"2012-03-28","v":35.28},{"d":"2012-03-29","v":35.08},{"d":"2012-03-30","v":34.66},{"d":"2012-04-02","v":35.14},{"d":"2012-04-03","v":34.93},{"d":"2012-04-04","v":34.24},{"d":"2012-04-05","v":34.62},{"d":"2012-04-06","v":34.62},{"d":"2012-04-09","v":34.62},{"d":"2012-04-10","v":33.78},{"d":"2012-04-11","v":34.16},{"d":"2012-04-12","v":34.28},{"d":"2012-04-13","v":34.3},{"d":"2012-04-16","v":34.29},{"d":"2012-04-17","v":34.33},{"d":"2012-04-18","v":34.24},{"d":"2012-04-19","v":34.14},{"d":"2012-04-20","v":33.87},{"d":"2012-04-23","v":33.6},{"d":"2012-04-24","v":33.8},{"d":"2012-04-25","v":33.85},{"d":"2012-04-26","v":33.89},{"d":"2012-04-27","v":33.77},{"d":"2012-04-30","v":33.75},{"d":"2012-05-01","v":33.75},{"d":"2012-05-02","v":33.4},{"d":"2012-05-03","v":32.82},{"d":"2012-05-04","v":33.04},{"d":"2012-05-07","v":33.31},{"d":"2012-05-08","v":32.96},{"d":"2012-05-09","v":32.96},{"d":"2012-05-10","v":33.15},{"d":"2012-05-11","v":33},{"d":"2012-05-14","v":32.79},{"d":"2012-05-15","v":32.69},{"d":"2012-05-16","v":32.33},{"d":"2012-05-17","v":32.33},{"d":"2012-05-18","v":32.29},{"d":"2012-05-21","v":32.14},{"d":"2012-05-22","v":32.37},{"d":"2012-05-23","v":32.16},{"d":"2012-05-24","v":32.44},{"d":"2012-05-25","v":32.4},{"d":"2012-05-28","v":32.4},{"d":"2012-05-29","v":32.71},{"d":"2012-05-30","v":32.69},{"d":"2012-05-31","v":32.91},{"d":"2012-06-01","v":32.23},{"d":"2012-06-04","v":31.86},{"d":"2012-06-05","v":32.52},{"d":"2012-06-06","v":32.74},{"d":"2012-06-07","v":32.67},{"d":"2012-06-08","v":32.36},{"d":"2012-06-11","v":32.44},{"d":"2012-06-12","v":32.69},{"d":"2012-06-13","v":32.08},{"d":"2012-06-14","v":32.45},{"d":"2012-06-15","v":32.82},{"d":"2012-06-18","v":33.14},{"d":"2012-06-19","v":33.04},{"d":"2012-06-20","v":33.16},{"d":"2012-06-21","v":33.46},{"d":"2012-06-22","v":33.31},{"d":"2012-06-25","v":33.22},{"d":"2012-06-26","v":33.3},{"d":"2012-06-27","v":33.65},{"d":"2012-06-28","v":34.05},{"d":"2012-06-29","v":34.18},{"d":"2012-07-02","v":34.45},{"d":"2012-07-03","v":34.79},{"d":"2012-07-04","v":34.79},{"d":"2012-07-05","v":35.03},{"d":"2012-07-06","v":34.92},{"d":"2012-07-09","v":34.74},{"d":"2012-07-10","v":34.84},{"d":"2012-07-11","v":34.72},{"d":"2012-07-12","v":34.33},{"d":"2012-07-13","v":34.49},{"d":"2012-07-16","v":34.58},{"d":"2012-07-17","v":34.6},{"d":"2012-07-18","v":34.47},{"d":"2012-07-19","v":34.37},{"d":"2012-07-20","v":34.11},{"d":"2012-07-23","v":33.67},{"d":"2012-07-24","v":33.7},{"d":"2012-07-25","v":33.34},{"d":"2012-07-26","v":33.44},{"d":"2012-07-27","v":33.41},{"d":"2012-07-30","v":34.03},{"d":"2012-07-31","v":34.04},{"d":"2012-08-01","v":34.04},{"d":"2012-08-02","v":33.98},{"d":"2012-08-03","v":33.88},{"d":"2012-08-06","v":34.07},{"d":"2012-08-07","v":34.5},{"d":"2012-08-08","v":34.49},{"d":"2012-08-09","v":34.8},{"d":"2012-08-10","v":34.66},{"d":"2012-08-13","v":34.29},{"d":"2012-08-14","v":34.65},{"d":"2012-08-15","v":34.7},{"d":"2012-08-16","v":34.75},{"d":"2012-08-17","v":35.16},{"d":"2012-08-20","v":34.92},{"d":"2012-08-21","v":34.81},{"d":"2012-08-22","v":34.41},{"d":"2012-08-23","v":34.35},{"d":"2012-08-24","v":34.48},{"d":"2012-08-27","v":34.46},{"d":"2012-08-28","v":33.9},{"d":"2012-08-29","v":34.04},{"d":"2012-08-30","v":33.69},{"d":"2012-08-31","v":33.46},{"d":"2012-09-03","v":33.03},{"d":"2012-09-04","v":32.84},{"d":"2012-09-05","v":32.65},{"d":"2012-09-06","v":32.97},{"d":"2012-09-07","v":33.13},{"d":"2012-09-10","v":33.18},{"d":"2012-09-11","v":33.07},{"d":"2012-09-12","v":33.34},{"d":"2012-09-13","v":33.6},{"d":"2012-09-14","v":33.78},{"d":"2012-09-17","v":33.59},{"d":"2012-09-18","v":33.56},{"d":"2012-09-19","v":33.65},{"d":"2012-09-20","v":33.56},{"d":"2012-09-21","v":33.71},{"d":"2012-09-24","v":33.62},{"d":"2012-09-25","v":33.86},{"d":"2012-09-26","v":33.45},{"d":"2012-09-27","v":33.84},{"d":"2012-09-28","v":33.22},{"d":"2012-10-01","v":33.17},{"d":"2012-10-02","v":32.85},{"d":"2012-10-03","v":32.81},{"d":"2012-10-04","v":32.9},{"d":"2012-10-05","v":32.92},{"d":"2012-10-08","v":33},{"d":"2012-10-09","v":32.45},{"d":"2012-10-10","v":32.2},{"d":"2012-10-11","v":32.3},{"d":"2012-10-12","v":32.16},{"d":"2012-10-15","v":32.39},{"d":"2012-10-16","v":32.63},{"d":"2012-10-17","v":32.75},{"d":"2012-10-18","v":32.86},{"d":"2012-10-19","v":32.83},{"d":"2012-10-22","v":32.93},{"d":"2012-10-23","v":32.52},{"d":"2012-10-24","v":32.75},{"d":"2012-10-25","v":32.93},{"d":"2012-10-26","v":32.69},{"d":"2012-10-29","v":32.64},{"d":"2012-10-30","v":32.41},{"d":"2012-10-31","v":32.48},{"d":"2012-11-01","v":32.72},{"d":"2012-11-02","v":32.94},{"d":"2012-11-05","v":33},{"d":"2012-11-06","v":33.03},{"d":"2012-11-07","v":32.67},{"d":"2012-11-08","v":32.67},{"d":"2012-11-09","v":33.13},{"d":"2012-11-12","v":32.41},{"d":"2012-11-13","v":32.5},{"d":"2012-11-14","v":32.2},{"d":"2012-11-15","v":32.26},{"d":"2012-11-16","v":32.97},{"d":"2012-11-19","v":33.4},{"d":"2012-11-20","v":33.13},{"d":"2012-11-21","v":33.18},{"d":"2012-11-22","v":33.37},{"d":"2012-11-23","v":33.31},{"d":"2012-11-26","v":33.12},{"d":"2012-11-27","v":33.2},{"d":"2012-11-28","v":32.92},{"d":"2012-11-29","v":33.28},{"d":"2012-11-30","v":33.23},{"d":"2012-12-03","v":33.11},{"d":"2012-12-04","v":33.25},{"d":"2012-12-05","v":33.11},{"d":"2012-12-06","v":33.55},{"d":"2012-12-07","v":33.67},{"d":"2012-12-10","v":33.62},{"d":"2012-12-11","v":33.65},{"d":"2012-12-12","v":33.54},{"d":"2012-12-13","v":33.28},{"d":"2012-12-14","v":33.25},{"d":"2012-12-17","v":33.25},{"d":"2012-12-18","v":33.79},{"d":"2012-12-19","v":34.22},{"d":"2012-12-20","v":34.49},{"d":"2012-12-21","v":34.48},{"d":"2012-12-24","v":34.48},{"d":"2012-12-25","v":34.48},{"d":"2012-12-26","v":34.48},{"d":"2012-12-27","v":34.37},{"d":"2012-12-28","v":33.96},{"d":"2012-12-31","v":33.96},{"d":"2013-01-01","v":33.96},{"d":"2013-01-02","v":33.96},{"d":"2013-01-03","v":35.69},{"d":"2013-01-04","v":35.47},{"d":"2013-01-07","v":34.98},{"d":"2013-01-08","v":34.56},{"d":"2013-01-09","v":35.11},{"d":"2013-01-10","v":35.15},{"d":"2013-01-11","v":35.05},{"d":"2013-01-14","v":35.48},{"d":"2013-01-15","v":35.79},{"d":"2013-01-16","v":35.9},{"d":"2013-01-17","v":35.2},{"d":"2013-01-18","v":35.84},{"d":"2013-01-21","v":35.34},{"d":"2013-01-22","v":35.23},{"d":"2013-01-23","v":35.17},{"d":"2013-01-24","v":35.66},{"d":"2013-01-25","v":35.48},{"d":"2013-01-28","v":35.28},{"d":"2013-01-29","v":35.63},{"d":"2013-01-30","v":35.55},{"d":"2013-01-31","v":35.41},{"d":"2013-02-01","v":35.19},{"d":"2013-02-04","v":35.33},{"d":"2013-02-05","v":35.19},{"d":"2013-02-06","v":35.63},{"d":"2013-02-07","v":35.89},{"d":"2013-02-08","v":35.88},{"d":"2013-02-11","v":36.33},{"d":"2013-02-12","v":36.13},{"d":"2013-02-13","v":36.03},{"d":"2013-02-14","v":35.87},{"d":"2013-02-15","v":35.84},{"d":"2013-02-18","v":35.98},{"d":"2013-02-19","v":36.28},{"d":"2013-02-20","v":36.68},{"d":"2013-02-21","v":36.33},{"d":"2013-02-22","v":36.77},{"d":"2013-02-25","v":36.81},{"d":"2013-02-26","v":37.12},{"d":"2013-02-27","v":36.93},{"d":"2013-02-28","v":37.19},{"d":"2013-03-01","v":38},{"d":"2013-03-04","v":38.16},{"d":"2013-03-05","v":38.33},{"d":"2013-03-06","v":38.72},{"d":"2013-03-07","v":38.53},{"d":"2013-03-08","v":38.83},{"d":"2013-03-11","v":39.05},{"d":"2013-03-12","v":38.63},{"d":"2013-03-13","v":39.04},{"d":"2013-03-14","v":39.47},{"d":"2013-03-15","v":39.04},{"d":"2013-03-18","v":39.32},{"d":"2013-03-19","v":39.32},{"d":"2013-03-20","v":39.56},{"d":"2013-03-21","v":39.82},{"d":"2013-03-22","v":39.7},{"d":"2013-03-25","v":39.76},{"d":"2013-03-26","v":39.81},{"d":"2013-03-27","v":40.27},{"d":"2013-03-28","v":39.95},{"d":"2013-03-29","v":39.95},{"d":"2013-04-01","v":39.95},{"d":"2013-04-02","v":38.86},{"d":"2013-04-03","v":38.98},{"d":"2013-04-04","v":40.28},{"d":"2013-04-05","v":40.05},{"d":"2013-04-08","v":40.29},{"d":"2013-04-09","v":39.92},{"d":"2013-04-10","v":40.89},{"d":"2013-04-11","v":41.45},{"d":"2013-04-12","v":41.2},{"d":"2013-04-15","v":41.13},{"d":"2013-04-16","v":40.99},{"d":"2013-04-17","v":41.11},{"d":"2013-04-18","v":40.84},{"d":"2013-04-19","v":41.06},{"d":"2013-04-22","v":41.32},{"d":"2013-04-23","v":42},{"d":"2013-04-24","v":42.75},{"d":"2013-04-25","v":42.87},{"d":"2013-04-26","v":42.56},{"d":"2013-04-29","v":42.68},{"d":"2013-04-30","v":42.53},{"d":"2013-05-01","v":42.53},{"d":"2013-05-02","v":42.64},{"d":"2013-05-03","v":42.78},{"d":"2013-05-06","v":43.24},{"d":"2013-05-07","v":43.31},{"d":"2013-05-08","v":43.24},{"d":"2013-05-09","v":43.24},{"d":"2013-05-10","v":44.19},{"d":"2013-05-13","v":44.58},{"d":"2013-05-14","v":44.93},{"d":"2013-05-15","v":45.79},{"d":"2013-05-16","v":45.1},{"d":"2013-05-17","v":46},{"d":"2013-05-20","v":46},{"d":"2013-05-21","v":46.36},{"d":"2013-05-22","v":47.46},{"d":"2013-05-23","v":42.44},{"d":"2013-05-24","v":41.93},{"d":"2013-05-27","v":39.14},{"d":"2013-05-28","v":43.74},{"d":"2013-05-29","v":41.71},{"d":"2013-05-30","v":41.34},{"d":"2013-05-31","v":41.14},{"d":"2013-06-03","v":39.24},{"d":"2013-06-04","v":41.05},{"d":"2013-06-05","v":39.25},{"d":"2013-06-06","v":38.57},{"d":"2013-06-07","v":39.92},{"d":"2013-06-10","v":40.85},{"d":"2013-06-11","v":40.11},{"d":"2013-06-12","v":40.03},{"d":"2013-06-13","v":39.89},{"d":"2013-06-14","v":39.41},{"d":"2013-06-17","v":41.04},{"d":"2013-06-18","v":41.07},{"d":"2013-06-19","v":41.07},{"d":"2013-06-20","v":39.55},{"d":"2013-06-21","v":40.37},{"d":"2013-06-24","v":39.1},{"d":"2013-06-25","v":40.07},{"d":"2013-06-26","v":40.08},{"d":"2013-06-27","v":41.43},{"d":"2013-06-28","v":41.9},{"d":"2013-07-01","v":42.36},{"d":"2013-07-02","v":43.09},{"d":"2013-07-03","v":42.51},{"d":"2013-07-04","v":43.39},{"d":"2013-07-05","v":43.51},{"d":"2013-07-08","v":43.72},{"d":"2013-07-09","v":44.3},{"d":"2013-07-10","v":44.47},{"d":"2013-07-11","v":43.94},{"d":"2013-07-12","v":43.91},{"d":"2013-07-15","v":44.3},{"d":"2013-07-16","v":44.04},{"d":"2013-07-17","v":44.32},{"d":"2013-07-18","v":44.79},{"d":"2013-07-19","v":44.06},{"d":"2013-07-22","v":44},{"d":"2013-07-23","v":44.02},{"d":"2013-07-24","v":43.8},{"d":"2013-07-25","v":42.58},{"d":"2013-07-26","v":41.45},{"d":"2013-07-29","v":40.95},{"d":"2013-07-30","v":41.5},{"d":"2013-07-31","v":40.97},{"d":"2013-08-01","v":40.97},{"d":"2013-08-02","v":42.54},{"d":"2013-08-05","v":42.94},{"d":"2013-08-06","v":42.86},{"d":"2013-08-07","v":42.06},{"d":"2013-08-08","v":41.23},{"d":"2013-08-09","v":41.54},{"d":"2013-08-12","v":41.77},{"d":"2013-08-13","v":42.21},{"d":"2013-08-14","v":42.44},{"d":"2013-08-15","v":41.84},{"d":"2013-08-16","v":41.43},{"d":"2013-08-19","v":41.48},{"d":"2013-08-20","v":40.51},{"d":"2013-08-21","v":40.13},{"d":"2013-08-22","v":40.62},{"d":"2013-08-23","v":40.88},{"d":"2013-08-26","v":40.88},{"d":"2013-08-27","v":40.27},{"d":"2013-08-28","v":40.29},{"d":"2013-08-29","v":40.88},{"d":"2013-08-30","v":39.9},{"d":"2013-09-02","v":40.09},{"d":"2013-09-03","v":41.09},{"d":"2013-09-04","v":41.51},{"d":"2013-09-05","v":41.89},{"d":"2013-09-06","v":41.76},{"d":"2013-09-09","v":42.09},{"d":"2013-09-10","v":42.88},{"d":"2013-09-11","v":42.28},{"d":"2013-09-12","v":42.24},{"d":"2013-09-13","v":42.32},{"d":"2013-09-16","v":42.58},{"d":"2013-09-17","v":42.45},{"d":"2013-09-18","v":42.72},{"d":"2013-09-19","v":43.16},{"d":"2013-09-20","v":42.76},{"d":"2013-09-23","v":42.4},{"d":"2013-09-24","v":42.96},{"d":"2013-09-25","v":42.76},{"d":"2013-09-26","v":43.27},{"d":"2013-09-27","v":42.78},{"d":"2013-09-30","v":42.22},{"d":"2013-10-01","v":42.49},{"d":"2013-10-02","v":41.74},{"d":"2013-10-03","v":41.49},{"d":"2013-10-04","v":41.48},{"d":"2013-10-07","v":41.11},{"d":"2013-10-08","v":40.98},{"d":"2013-10-09","v":41.73},{"d":"2013-10-10","v":42.62},{"d":"2013-10-11","v":42.57},{"d":"2013-10-14","v":42.48},{"d":"2013-10-15","v":42.91},{"d":"2013-10-16","v":43.03},{"d":"2013-10-17","v":42.68},{"d":"2013-10-18","v":42.93},{"d":"2013-10-21","v":42.86},{"d":"2013-10-22","v":42.7},{"d":"2013-10-23","v":41.74},{"d":"2013-10-24","v":42.27},{"d":"2013-10-25","v":41.68},{"d":"2013-10-28","v":41.94},{"d":"2013-10-29","v":42.3},{"d":"2013-10-30","v":42.18},{"d":"2013-10-31","v":42.16},{"d":"2013-11-01","v":42.14},{"d":"2013-11-04","v":41.83},{"d":"2013-11-05","v":41.82},{"d":"2013-11-06","v":43.31},{"d":"2013-11-07","v":42},{"d":"2013-11-08","v":42.27},{"d":"2013-11-11","v":42.34},{"d":"2013-11-12","v":42.59},{"d":"2013-11-13","v":42.78},{"d":"2013-11-14","v":43.33},{"d":"2013-11-15","v":43.92},{"d":"2013-11-18","v":43.74},{"d":"2013-11-19","v":43.4},{"d":"2013-11-20","v":43.73},{"d":"2013-11-21","v":43.77},{"d":"2013-11-22","v":43.35},{"d":"2013-11-25","v":43.43},{"d":"2013-11-26","v":42.89},{"d":"2013-11-27","v":43.08},{"d":"2013-11-28","v":42.31},{"d":"2013-11-29","v":43.07},{"d":"2013-12-02","v":43.14},{"d":"2013-12-03","v":42.57},{"d":"2013-12-04","v":42.22},{"d":"2013-12-05","v":41.6},{"d":"2013-12-06","v":41.97},{"d":"2013-12-09","v":41.9},{"d":"2013-12-10","v":41.62},{"d":"2013-12-11","v":41.35},{"d":"2013-12-12","v":41.62},{"d":"2013-12-13","v":41.25},{"d":"2013-12-16","v":41.03},{"d":"2013-12-17","v":40.86},{"d":"2013-12-18","v":41.43},{"d":"2013-12-19","v":41.83},{"d":"2013-12-20","v":41.72},{"d":"2013-12-23","v":41.89},{"d":"2013-12-24","v":41.89},{"d":"2013-12-25","v":41.89},{"d":"2013-12-26","v":41.89},{"d":"2013-12-27","v":42.39},{"d":"2013-12-30","v":42.37},{"d":"2013-12-31","v":42.37},{"d":"2014-01-01","v":42.37},{"d":"2014-01-02","v":42.37},{"d":"2014-01-03","v":42.76},{"d":"2014-01-06","v":43},{"d":"2014-01-07","v":43.22},{"d":"2014-01-08","v":43.44},{"d":"2014-01-09","v":43.12},{"d":"2014-01-10","v":42.97},{"d":"2014-01-13","v":42.76},{"d":"2014-01-14","v":42.65},{"d":"2014-01-15","v":43.41},{"d":"2014-01-16","v":43.06},{"d":"2014-01-17","v":43.6},{"d":"2014-01-20","v":43.53},{"d":"2014-01-21","v":43.41},{"d":"2014-01-22","v":43.53},{"d":"2014-01-23","v":42.47},{"d":"2014-01-24","v":41.24},{"d":"2014-01-27","v":41.12},{"d":"2014-01-28","v":41.33},{"d":"2014-01-29","v":41.06},{"d":"2014-01-30","v":41.67},{"d":"2014-01-31","v":40.9},{"d":"2014-02-03","v":39.78},{"d":"2014-02-04","v":39.41},{"d":"2014-02-05","v":39.76},{"d":"2014-02-06","v":40.1},{"d":"2014-02-07","v":40.56},{"d":"2014-02-10","v":40.63},{"d":"2014-02-11","v":40.91},{"d":"2014-02-12","v":41.1},{"d":"2014-02-13","v":40.35},{"d":"2014-02-14","v":40.17},{"d":"2014-02-17","v":40.26},{"d":"2014-02-18","v":40.77},{"d":"2014-02-19","v":40.71},{"d":"2014-02-20","v":40.14},{"d":"2014-02-21","v":40.78},{"d":"2014-02-24","v":41.1},{"d":"2014-02-25","v":40.94},{"d":"2014-02-26","v":41.07},{"d":"2014-02-27","v":40.57},{"d":"2014-02-28","v":40.52},{"d":"2014-03-03","v":39.48},{"d":"2014-03-04","v":40.44},{"d":"2014-03-05","v":40.45},{"d":"2014-03-06","v":40.86},{"d":"2014-03-07","v":40.37},{"d":"2014-03-10","v":40.49},{"d":"2014-03-11","v":39.96},{"d":"2014-03-12","v":39.34},{"d":"2014-03-13","v":38.66},{"d":"2014-03-14","v":38.33},{"d":"2014-03-17","v":38.52},{"d":"2014-03-18","v":38.61},{"d":"2014-03-19","v":38.48},{"d":"2014-03-20","v":38.28},{"d":"2014-03-21","v":38.26},{"d":"2014-03-24","v":38.28},{"d":"2014-03-25","v":38.54},{"d":"2014-03-26","v":39.06},{"d":"2014-03-27","v":39.3},{"d":"2014-03-28","v":39.84},{"d":"2014-03-31","v":39.87},{"d":"2014-04-01","v":39.66},{"d":"2014-04-02","v":40.13},{"d":"2014-04-03","v":40.29},{"d":"2014-04-04","v":40.35},{"d":"2014-04-07","v":39.66},{"d":"2014-04-08","v":38.67},{"d":"2014-04-09","v":38.67},{"d":"2014-04-10","v":37.92},{"d":"2014-04-11","v":37.66},{"d":"2014-04-14","v":38.11},{"d":"2014-04-15","v":37.84},{"d":"2014-04-16","v":38.83},{"d":"2014-04-17","v":38.85},{"d":"2014-04-18","v":38.85},{"d":"2014-04-21","v":38.85},{"d":"2014-04-22","v":38.97},{"d":"2014-04-23","v":38.97},{"d":"2014-04-24","v":38.62},{"d":"2014-04-25","v":38.62},{"d":"2014-04-28","v":38.5},{"d":"2014-04-29","v":38.85},{"d":"2014-04-30","v":38.5},{"d":"2014-05-01","v":38.5},{"d":"2014-05-02","v":38.76},{"d":"2014-05-05","v":38.82},{"d":"2014-05-06","v":38.56},{"d":"2014-05-07","v":38.26},{"d":"2014-05-08","v":38.57},{"d":"2014-05-09","v":38.93},{"d":"2014-05-12","v":39.09},{"d":"2014-05-13","v":39.66},{"d":"2014-05-14","v":39.67},{"d":"2014-05-15","v":39.12},{"d":"2014-05-16","v":39.38},{"d":"2014-05-19","v":39.29},{"d":"2014-05-20","v":39.12},{"d":"2014-05-21","v":39.56},{"d":"2014-05-22","v":39.93},{"d":"2014-05-23","v":40.35},{"d":"2014-05-26","v":40.57},{"d":"2014-05-27","v":40.67},{"d":"2014-05-28","v":40.65},{"d":"2014-05-29","v":40.65},{"d":"2014-05-30","v":41.06},{"d":"2014-06-02","v":41.69},{"d":"2014-06-03","v":41.54},{"d":"2014-06-04","v":41.73},{"d":"2014-06-05","v":41.65},{"d":"2014-06-06","v":41.8},{"d":"2014-06-09","v":41.8},{"d":"2014-06-10","v":41.58},{"d":"2014-06-11","v":41.83},{"d":"2014-06-12","v":42.11},{"d":"2014-06-13","v":42.21},{"d":"2014-06-16","v":41.22},{"d":"2014-06-17","v":42.14},{"d":"2014-06-18","v":42.33},{"d":"2014-06-19","v":42.96},{"d":"2014-06-20","v":43.26},{"d":"2014-06-23","v":42.74},{"d":"2014-06-24","v":43.12},{"d":"2014-06-25","v":42.77},{"d":"2014-06-26","v":42.09},{"d":"2014-06-27","v":42.53},{"d":"2014-06-30","v":42.75},{"d":"2014-07-01","v":43.18},{"d":"2014-07-02","v":43.25},{"d":"2014-07-03","v":43.35},{"d":"2014-07-04","v":43.43},{"d":"2014-07-07","v":43.12},{"d":"2014-07-08","v":42.82},{"d":"2014-07-09","v":43.06},{"d":"2014-07-10","v":42.37},{"d":"2014-07-11","v":42.47},{"d":"2014-07-14","v":42.93},{"d":"2014-07-15","v":43.21},{"d":"2014-07-16","v":43.45},{"d":"2014-07-17","v":43.36},{"d":"2014-07-18","v":43.36},{"d":"2014-07-21","v":43.16},{"d":"2014-07-22","v":43.69},{"d":"2014-07-23","v":43.62},{"d":"2014-07-24","v":43.52},{"d":"2014-07-25","v":43.75},{"d":"2014-07-28","v":43.96},{"d":"2014-07-29","v":44.27},{"d":"2014-07-30","v":44.21},{"d":"2014-07-31","v":43.97},{"d":"2014-08-01","v":43.97},{"d":"2014-08-04","v":43.3},{"d":"2014-08-05","v":43.16},{"d":"2014-08-06","v":42.66},{"d":"2014-08-07","v":42.72},{"d":"2014-08-08","v":42.1},{"d":"2014-08-11","v":42.93},{"d":"2014-08-12","v":42.87},{"d":"2014-08-13","v":43.25},{"d":"2014-08-14","v":43.05},{"d":"2014-08-15","v":42.78},{"d":"2014-08-18","v":43.45},{"d":"2014-08-19","v":43.56},{"d":"2014-08-20","v":43.37},{"d":"2014-08-21","v":43.69},{"d":"2014-08-22","v":43.52},{"d":"2014-08-25","v":43.7},{"d":"2014-08-26","v":43.54},{"d":"2014-08-27","v":43.26},{"d":"2014-08-28","v":43.11},{"d":"2014-08-29","v":43.21},{"d":"2014-09-01","v":43.38},{"d":"2014-09-02","v":43.84},{"d":"2014-09-03","v":43.81},{"d":"2014-09-04","v":44.29},{"d":"2014-09-05","v":43.66},{"d":"2014-09-08","v":44.08},{"d":"2014-09-09","v":43.78},{"d":"2014-09-10","v":44.3},{"d":"2014-09-11","v":44.03},{"d":"2014-09-12","v":44.05},{"d":"2014-09-15","v":43.92},{"d":"2014-09-16","v":43.96},{"d":"2014-09-17","v":43.68},{"d":"2014-09-18","v":43.95},{"d":"2014-09-19","v":44.34},{"d":"2014-09-22","v":44.37},{"d":"2014-09-23","v":44.07},{"d":"2014-09-24","v":44.71},{"d":"2014-09-25","v":44.69},{"d":"2014-09-26","v":45.22},{"d":"2014-09-29","v":44.9},{"d":"2014-09-30","v":44.95},{"d":"2014-10-01","v":44.4},{"d":"2014-10-02","v":43.11},{"d":"2014-10-03","v":44.32},{"d":"2014-10-06","v":44.16},{"d":"2014-10-07","v":43.95},{"d":"2014-10-08","v":43.42},{"d":"2014-10-09","v":42.88},{"d":"2014-10-10","v":42.44},{"d":"2014-10-13","v":41.86},{"d":"2014-10-14","v":42},{"d":"2014-10-15","v":41.01},{"d":"2014-10-16","v":41.03},{"d":"2014-10-17","v":41.31},{"d":"2014-10-20","v":41.95},{"d":"2014-10-21","v":42.13},{"d":"2014-10-22","v":42.81},{"d":"2014-10-23","v":42.87},{"d":"2014-10-24","v":42.75},{"d":"2014-10-27","v":42.65},{"d":"2014-10-28","v":42.71},{"d":"2014-10-29","v":43.11},{"d":"2014-10-30","v":43.65},{"d":"2014-10-31","v":46.15},{"d":"2014-11-03","v":46.32},{"d":"2014-11-04","v":45.12},{"d":"2014-11-05","v":45.34},{"d":"2014-11-06","v":44.98},{"d":"2014-11-07","v":44.71},{"d":"2014-11-10","v":44.97},{"d":"2014-11-11","v":45.33},{"d":"2014-11-12","v":44.9},{"d":"2014-11-13","v":45.33},{"d":"2014-11-14","v":45.13},{"d":"2014-11-17","v":44.53},{"d":"2014-11-18","v":44.75},{"d":"2014-11-19","v":44.57},{"d":"2014-11-20","v":44.29},{"d":"2014-11-21","v":45.23},{"d":"2014-11-24","v":45.42},{"d":"2014-11-25","v":44.87},{"d":"2014-11-26","v":44.8},{"d":"2014-11-27","v":44.45},{"d":"2014-11-28","v":44.94},{"d":"2014-12-01","v":45.05},{"d":"2014-12-02","v":45.84},{"d":"2014-12-03","v":46},{"d":"2014-12-04","v":45.25},{"d":"2014-12-05","v":45.95},{"d":"2014-12-08","v":45.44},{"d":"2014-12-09","v":44.69},{"d":"2014-12-10","v":44.54},{"d":"2014-12-11","v":44.85},{"d":"2014-12-12","v":43.88},{"d":"2014-12-15","v":43.17},{"d":"2014-12-16","v":43.35},{"d":"2014-12-17","v":43.92},{"d":"2014-12-18","v":45.03},{"d":"2014-12-19","v":45.56},{"d":"2014-12-22","v":45.4},{"d":"2014-12-23","v":45.79},{"d":"2014-12-24","v":45.79},{"d":"2014-12-25","v":45.79},{"d":"2014-12-26","v":45.79},{"d":"2014-12-29","v":45.45},{"d":"2014-12-30","v":44.74},{"d":"2014-12-31","v":44.74},{"d":"2015-01-01","v":44.74},{"d":"2015-01-02","v":44.74},{"d":"2015-01-05","v":45.06},{"d":"2015-01-06","v":44.46},{"d":"2015-01-07","v":45.45},{"d":"2015-01-08","v":46.1},{"d":"2015-01-09","v":45.48},{"d":"2015-01-12","v":45.23},{"d":"2015-01-13","v":46.14},{"d":"2015-01-14","v":45.61},{"d":"2015-01-15","v":40.03},{"d":"2015-01-16","v":38.81},{"d":"2015-01-19","v":39.88},{"d":"2015-01-20","v":39.99},{"d":"2015-01-21","v":39.29},{"d":"2015-01-22","v":39.9},{"d":"2015-01-23","v":40.27},{"d":"2015-01-26","v":41.68},{"d":"2015-01-27","v":41.93},{"d":"2015-01-28","v":42.33},{"d":"2015-01-29","v":42.85},{"d":"2015-01-30","v":42.84},{"d":"2015-02-02","v":42.93},{"d":"2015-02-03","v":42.59},{"d":"2015-02-04","v":43.33},{"d":"2015-02-05","v":43.39},{"d":"2015-02-06","v":43.29},{"d":"2015-02-09","v":42.74},{"d":"2015-02-10","v":43.46},{"d":"2015-02-11","v":43.27},{"d":"2015-02-12","v":43.45},{"d":"2015-02-13","v":44.41},{"d":"2015-02-16","v":44.4},{"d":"2015-02-17","v":44.59},{"d":"2015-02-18","v":45.74},{"d":"2015-02-19","v":47},{"d":"2015-02-20","v":46.36},{"d":"2015-02-23","v":46.54},{"d":"2015-02-24","v":46.28},{"d":"2015-02-25","v":46.67},{"d":"2015-02-26","v":47.38},{"d":"2015-02-27","v":46.98},{"d":"2015-03-02","v":47.46},{"d":"2015-03-03","v":47.21},{"d":"2015-03-04","v":47.43},{"d":"2015-03-05","v":47.98},{"d":"2015-03-06","v":48.54},{"d":"2015-03-09","v":48.42},{"d":"2015-03-10","v":48.25},{"d":"2015-03-11","v":49.12},{"d":"2015-03-12","v":49.95},{"d":"2015-03-13","v":50.06},{"d":"2015-03-16","v":50.49},{"d":"2015-03-17","v":50.43},{"d":"2015-03-18","v":50.2},{"d":"2015-03-19","v":50.07},{"d":"2015-03-20","v":49.96},{"d":"2015-03-23","v":49.7},{"d":"2015-03-24","v":49.29},{"d":"2015-03-25","v":49.12},{"d":"2015-03-26","v":48.91},{"d":"2015-03-27","v":48.8},{"d":"2015-03-30","v":49.47},{"d":"2015-03-31","v":48.95},{"d":"2015-04-01","v":48.39},{"d":"2015-04-02","v":48.53},{"d":"2015-04-03","v":48.53},{"d":"2015-04-06","v":48.53},{"d":"2015-04-07","v":49.67},{"d":"2015-04-08","v":49.95},{"d":"2015-04-09","v":50.19},{"d":"2015-04-10","v":50.5},{"d":"2015-04-13","v":50.26},{"d":"2015-04-14","v":50.11},{"d":"2015-04-15","v":50.5},{"d":"2015-04-16","v":49.92},{"d":"2015-04-17","v":49.2},{"d":"2015-04-20","v":49.46},{"d":"2015-04-21","v":50.24},{"d":"2015-04-22","v":51.24},{"d":"2015-04-23","v":50.5},{"d":"2015-04-24","v":50.71},{"d":"2015-04-27","v":50.64},{"d":"2015-04-28","v":51.15},{"d":"2015-04-29","v":49.49},{"d":"2015-04-30","v":48.65},{"d":"2015-05-01","v":48.65},{"d":"2015-05-04","v":48.65},{"d":"2015-05-05","v":47.33},{"d":"2015-05-06","v":46.84},{"d":"2015-05-07","v":47.2},{"d":"2015-05-08","v":48.68},{"d":"2015-05-11","v":48.44},{"d":"2015-05-12","v":47.28},{"d":"2015-05-13","v":48.72},{"d":"2015-05-14","v":48.72},{"d":"2015-05-15","v":48.12},{"d":"2015-05-18","v":48.83},{"d":"2015-05-19","v":49.8},{"d":"2015-05-20","v":49.71},{"d":"2015-05-21","v":49.64},{"d":"2015-05-22","v":50.08},{"d":"2015-05-25","v":50.08},{"d":"2015-05-26","v":49.74},{"d":"2015-05-27","v":50.11},{"d":"2015-05-28","v":49.65},{"d":"2015-05-29","v":49.14},{"d":"2015-06-01","v":50.15},{"d":"2015-06-02","v":50.02},{"d":"2015-06-03","v":49.06},{"d":"2015-06-04","v":48.72},{"d":"2015-06-05","v":48.91},{"d":"2015-06-08","v":48.12},{"d":"2015-06-09","v":47.5},{"d":"2015-06-10","v":48.3},{"d":"2015-06-11","v":48.72},{"d":"2015-06-12","v":47.97},{"d":"2015-06-15","v":48.45},{"d":"2015-06-16","v":48.04},{"d":"2015-06-17","v":47.25},{"d":"2015-06-18","v":47.16},{"d":"2015-06-19","v":47.51},{"d":"2015-06-22","v":48.02},{"d":"2015-06-23","v":49.2},{"d":"2015-06-24","v":48.82},{"d":"2015-06-25","v":49.24},{"d":"2015-06-26","v":49.08},{"d":"2015-06-29","v":47.89},{"d":"2015-06-30","v":48.34},{"d":"2015-07-01","v":49.07},{"d":"2015-07-02","v":48.89},{"d":"2015-07-03","v":48.86},{"d":"2015-07-06","v":48.7},{"d":"2015-07-07","v":48.63},{"d":"2015-07-08","v":47.38},{"d":"2015-07-09","v":47.61},{"d":"2015-07-10","v":47.59},{"d":"2015-07-13","v":48.91},{"d":"2015-07-14","v":48.94},{"d":"2015-07-15","v":49.45},{"d":"2015-07-16","v":49.73},{"d":"2015-07-17","v":50.1},{"d":"2015-07-20","v":50.33},{"d":"2015-07-21","v":49.72},{"d":"2015-07-22","v":49.77},{"d":"2015-07-23","v":49.72},{"d":"2015-07-24","v":49.39},{"d":"2015-07-27","v":48.94},{"d":"2015-07-28","v":49.17},{"d":"2015-07-29","v":49.39},{"d":"2015-07-30","v":49.84},{"d":"2015-07-31","v":50.23},{"d":"2015-08-03","v":50.08},{"d":"2015-08-04","v":50.16},{"d":"2015-08-05","v":51.11},{"d":"2015-08-06","v":50.82},{"d":"2015-08-07","v":51.07},{"d":"2015-08-10","v":51.98},{"d":"2015-08-11","v":51.06},{"d":"2015-08-12","v":49.44},{"d":"2015-08-13","v":50.46},{"d":"2015-08-14","v":50.53},{"d":"2015-08-17","v":50.76},{"d":"2015-08-18","v":50.51},{"d":"2015-08-19","v":49.54},{"d":"2015-08-20","v":48.1},{"d":"2015-08-21","v":46.1},{"d":"2015-08-24","v":42.61},{"d":"2015-08-25","v":45.27},{"d":"2015-08-26","v":45.07},{"d":"2015-08-27","v":47.37},{"d":"2015-08-28","v":47.41},{"d":"2015-08-31","v":47.25},{"d":"2015-09-01","v":45.12},{"d":"2015-09-02","v":45.61},{"d":"2015-09-03","v":46.71},{"d":"2015-09-04","v":45.28},{"d":"2015-09-07","v":45.43},{"d":"2015-09-08","v":45.87},{"d":"2015-09-09","v":46.47},{"d":"2015-09-10","v":46.47},{"d":"2015-09-11","v":45.54},{"d":"2015-09-14","v":45.46},{"d":"2015-09-15","v":45.86},{"d":"2015-09-16","v":46.17},{"d":"2015-09-17","v":46.11},{"d":"2015-09-18","v":44.71},{"d":"2015-09-21","v":45.25},{"d":"2015-09-22","v":44.39},{"d":"2015-09-23","v":44.64},{"d":"2015-09-24","v":43.65},{"d":"2015-09-25","v":45.61},{"d":"2015-09-28","v":44.55},{"d":"2015-09-29","v":43.51},{"d":"2015-09-30","v":44.54},{"d":"2015-10-01","v":44.81},{"d":"2015-10-02","v":44.75},{"d":"2015-10-05","v":46.67},{"d":"2015-10-06","v":46.2},{"d":"2015-10-07","v":47.04},{"d":"2015-10-08","v":46.76},{"d":"2015-10-09","v":46.68},{"d":"2015-10-12","v":46.8},{"d":"2015-10-13","v":46.46},{"d":"2015-10-14","v":45.35},{"d":"2015-10-15","v":46.11},{"d":"2015-10-16","v":46.55},{"d":"2015-10-19","v":46.43},{"d":"2015-10-20","v":46.29},{"d":"2015-10-21","v":47.09},{"d":"2015-10-22","v":48.39},{"d":"2015-10-23","v":48.91},{"d":"2015-10-26","v":49.2},{"d":"2015-10-27","v":48.97},{"d":"2015-10-28","v":49.39},{"d":"2015-10-29","v":49.25},{"d":"2015-10-30","v":48.96},{"d":"2015-11-02","v":48.83},{"d":"2015-11-03","v":49.29},{"d":"2015-11-04","v":49.2},{"d":"2015-11-05","v":49.7},{"d":"2015-11-06","v":49.96},{"d":"2015-11-09","v":49.71},{"d":"2015-11-10","v":50.42},{"d":"2015-11-11","v":50.63},{"d":"2015-11-12","v":50.11},{"d":"2015-11-13","v":50.05},{"d":"2015-11-16","v":50.19},{"d":"2015-11-17","v":51.24},{"d":"2015-11-18","v":51.2},{"d":"2015-11-19","v":51.24},{"d":"2015-11-20","v":51.75},{"d":"2015-11-23","v":52.16},{"d":"2015-11-24","v":51.34},{"d":"2015-11-25","v":51.51},{"d":"2015-11-26","v":52.04},{"d":"2015-11-27","v":51.75},{"d":"2015-11-30","v":51.16},{"d":"2015-12-01","v":51.91},{"d":"2015-12-02","v":51.74},{"d":"2015-12-03","v":51.04},{"d":"2015-12-04","v":49.81},{"d":"2015-12-07","v":49.73},{"d":"2015-12-08","v":48.74},{"d":"2015-12-09","v":48.71},{"d":"2015-12-10","v":48.61},{"d":"2015-12-11","v":47.62},{"d":"2015-12-14","v":47.33},{"d":"2015-12-15","v":47.98},{"d":"2015-12-16","v":48.38},{"d":"2015-12-17","v":49.24},{"d":"2015-12-18","v":48.36},{"d":"2015-12-21","v":48.12},{"d":"2015-12-22","v":48.07},{"d":"2015-12-23","v":49.23},{"d":"2015-12-24","v":49.23},{"d":"2015-12-25","v":49.23},{"d":"2015-12-28","v":48.52},{"d":"2015-12-29","v":49.44},{"d":"2015-12-30","v":49.1},{"d":"2015-12-31","v":49.1},{"d":"2016-01-01","v":49.1},{"d":"2016-01-04","v":48.28},{"d":"2016-01-05","v":49.38},{"d":"2016-01-06","v":48.52},{"d":"2016-01-07","v":47.68},{"d":"2016-01-08","v":46.32},{"d":"2016-01-11","v":46.87},{"d":"2016-01-12","v":46.27},{"d":"2016-01-13","v":46.96},{"d":"2016-01-14","v":46.62},{"d":"2016-01-15","v":45.31},{"d":"2016-01-18","v":45.52},{"d":"2016-01-19","v":45.91},{"d":"2016-01-20","v":43.61},{"d":"2016-01-21","v":44.37},{"d":"2016-01-22","v":45.43},{"d":"2016-01-25","v":45.74},{"d":"2016-01-26","v":45.94},{"d":"2016-01-27","v":46.5},{"d":"2016-01-28","v":45.89},{"d":"2016-01-29","v":46.99},{"d":"2016-02-01","v":47.69},{"d":"2016-02-02","v":46.83},{"d":"2016-02-03","v":45.32},{"d":"2016-02-04","v":44.89},{"d":"2016-02-05","v":44.08},{"d":"2016-02-08","v":43.38},{"d":"2016-02-09","v":42.26},{"d":"2016-02-10","v":42.4},{"d":"2016-02-11","v":40.71},{"d":"2016-02-12","v":40.62},{"d":"2016-02-15","v":42.82},{"d":"2016-02-16","v":42.85},{"d":"2016-02-17","v":43.94},{"d":"2016-02-18","v":44.08},{"d":"2016-02-19","v":43.48},{"d":"2016-02-22","v":44.68},{"d":"2016-02-23","v":43.6},{"d":"2016-02-24","v":42.96},{"d":"2016-02-25","v":44.07},{"d":"2016-02-26","v":45.08},{"d":"2016-02-29","v":44.36},{"d":"2016-03-01","v":45},{"d":"2016-03-02","v":45.8},{"d":"2016-03-03","v":45.77},{"d":"2016-03-04","v":46.48},{"d":"2016-03-07","v":46.13},{"d":"2016-03-08","v":45.55},{"d":"2016-03-09","v":45.61},{"d":"2016-03-10","v":44.97},{"d":"2016-03-11","v":46},{"d":"2016-03-14","v":46.65},{"d":"2016-03-15","v":45.57},{"d":"2016-03-16","v":45.58},{"d":"2016-03-17","v":44.92},{"d":"2016-03-18","v":45.04},{"d":"2016-03-21","v":45.03},{"d":"2016-03-22","v":45.5},{"d":"2016-03-23","v":45.28},{"d":"2016-03-24","v":44.73},{"d":"2016-03-25","v":44.73},{"d":"2016-03-28","v":44.73},{"d":"2016-03-29","v":45.46},{"d":"2016-03-30","v":45.45},{"d":"2016-03-31","v":44.61},{"d":"2016-04-01","v":43.37},{"d":"2016-04-04","v":43.3},{"d":"2016-04-05","v":42.23},{"d":"2016-04-06","v":42.52},{"d":"2016-04-07","v":42.69},{"d":"2016-04-08","v":43.84},{"d":"2016-04-11","v":43.75},{"d":"2016-04-12","v":44.67},{"d":"2016-04-13","v":46.31},{"d":"2016-04-14","v":46.78},{"d":"2016-04-15","v":46.61},{"d":"2016-04-18","v":46.18},{"d":"2016-04-19","v":47},{"d":"2016-04-20","v":47.44},{"d":"2016-04-21","v":47.93},{"d":"2016-04-22","v":48.2},{"d":"2016-04-25","v":47.74},{"d":"2016-04-26","v":47.47},{"d":"2016-04-27","v":47.37},{"d":"2016-04-28","v":46.06},{"d":"2016-04-29","v":44.51},{"d":"2016-05-02","v":44.99},{"d":"2016-05-03","v":44.44},{"d":"2016-05-04","v":44.26},{"d":"2016-05-05","v":44.26},{"d":"2016-05-06","v":45.39},{"d":"2016-05-09","v":45.62},{"d":"2016-05-10","v":46.75},{"d":"2016-05-11","v":46.21},{"d":"2016-05-12","v":46.1},{"d":"2016-05-13","v":46.07},{"d":"2016-05-16","v":46.07},{"d":"2016-05-17","v":46.46},{"d":"2016-05-18","v":46.86},{"d":"2016-05-19","v":46.48},{"d":"2016-05-20","v":47.03},{"d":"2016-05-23","v":46.9},{"d":"2016-05-24","v":47.13},{"d":"2016-05-25","v":47.38},{"d":"2016-05-26","v":47.32},{"d":"2016-05-27","v":47.34},{"d":"2016-05-30","v":47.44},{"d":"2016-05-31","v":47.89},{"d":"2016-06-01","v":47.42},{"d":"2016-06-02","v":47.07},{"d":"2016-06-03","v":46.59},{"d":"2016-06-06","v":46.98},{"d":"2016-06-07","v":47.15},{"d":"2016-06-08","v":47.32},{"d":"2016-06-09","v":46.51},{"d":"2016-06-10","v":45.72},{"d":"2016-06-13","v":45.31},{"d":"2016-06-14","v":44.43},{"d":"2016-06-15","v":45.1},{"d":"2016-06-16","v":44.69},{"d":"2016-06-17","v":44.47},{"d":"2016-06-20","v":46.12},{"d":"2016-06-21","v":46.35},{"d":"2016-06-22","v":46.07},{"d":"2016-06-23","v":46.09},{"d":"2016-06-24","v":45.13},{"d":"2016-06-27","v":45.11},{"d":"2016-06-28","v":45.83},{"d":"2016-06-29","v":46.67},{"d":"2016-06-30","v":46.02},{"d":"2016-07-01","v":46},{"d":"2016-07-04","v":46.33},{"d":"2016-07-05","v":46.1},{"d":"2016-07-06","v":45.84},{"d":"2016-07-07","v":46.23},{"d":"2016-07-08","v":46.72},{"d":"2016-07-11","v":47.98},{"d":"2016-07-12","v":48.41},{"d":"2016-07-13","v":47.98},{"d":"2016-07-14","v":48.14},{"d":"2016-07-15","v":48.04},{"d":"2016-07-18","v":47.99},{"d":"2016-07-19","v":47.93},{"d":"2016-07-20","v":48.41},{"d":"2016-07-21","v":48.04},{"d":"2016-07-22","v":48.18},{"d":"2016-07-25","v":47.88},{"d":"2016-07-26","v":48.29},{"d":"2016-07-27","v":48.39},{"d":"2016-07-28","v":47.44},{"d":"2016-07-29","v":48.02},{"d":"2016-08-01","v":48.02},{"d":"2016-08-02","v":47.29},{"d":"2016-08-03","v":47.38},{"d":"2016-08-04","v":48.11},{"d":"2016-08-05","v":48.69},{"d":"2016-08-08","v":49.1},{"d":"2016-08-09","v":49.5},{"d":"2016-08-10","v":49.39},{"d":"2016-08-11","v":49.47},{"d":"2016-08-12","v":49.53},{"d":"2016-08-15","v":49.62},{"d":"2016-08-16","v":48.68},{"d":"2016-08-17","v":48.85},{"d":"2016-08-18","v":48.5},{"d":"2016-08-19","v":48.47},{"d":"2016-08-22","v":46.98},{"d":"2016-08-23","v":48.89},{"d":"2016-08-24","v":49.17},{"d":"2016-08-25","v":49.07},{"d":"2016-08-26","v":49.07},{"d":"2016-08-29","v":49.32},{"d":"2016-08-30","v":49.51},{"d":"2016-08-31","v":49.46},{"d":"2016-09-01","v":49.69},{"d":"2016-09-02","v":50.19},{"d":"2016-09-05","v":50.01},{"d":"2016-09-06","v":50},{"d":"2016-09-07","v":50.19},{"d":"2016-09-08","v":50.06},{"d":"2016-09-09","v":49.73},{"d":"2016-09-12","v":49.34},{"d":"2016-09-13","v":48.96},{"d":"2016-09-14","v":48.49},{"d":"2016-09-15","v":48.69},{"d":"2016-09-16","v":48.72},{"d":"2016-09-19","v":49.12},{"d":"2016-09-20","v":49.59},{"d":"2016-09-21","v":50.69},{"d":"2016-09-22","v":50.97},{"d":"2016-09-23","v":50.6},{"d":"2016-09-26","v":49.74},{"d":"2016-09-27","v":50.61},{"d":"2016-09-28","v":50.44},{"d":"2016-09-29","v":50.04},{"d":"2016-09-30","v":50.12},{"d":"2016-10-03","v":49.99},{"d":"2016-10-04","v":50.41},{"d":"2016-10-05","v":50.23},{"d":"2016-10-06","v":50.11},{"d":"2016-10-07","v":50.06},{"d":"2016-10-10","v":50.5},{"d":"2016-10-11","v":50.28},{"d":"2016-10-12","v":50.29},{"d":"2016-10-13","v":49.88},{"d":"2016-10-14","v":50.28},{"d":"2016-10-17","v":50.25},{"d":"2016-10-18","v":50.62},{"d":"2016-10-19","v":50.91},{"d":"2016-10-20","v":51.2},{"d":"2016-10-21","v":51.35},{"d":"2016-10-24","v":51.37},{"d":"2016-10-25","v":51.35},{"d":"2016-10-26","v":51.41},{"d":"2016-10-27","v":51.46},{"d":"2016-10-28","v":51.4},{"d":"2016-10-31","v":51.38},{"d":"2016-11-01","v":50.55},{"d":"2016-11-02","v":50.01},{"d":"2016-11-03","v":50.2},{"d":"2016-11-04","v":49.44},{"d":"2016-11-07","v":49.96},{"d":"2016-11-08","v":49.91},{"d":"2016-11-09","v":50.05},{"d":"2016-11-10","v":50.14},{"d":"2016-11-11","v":50.12},{"d":"2016-11-14","v":50.6},{"d":"2016-11-15","v":51.04},{"d":"2016-11-16","v":51.18},{"d":"2016-11-17","v":51.7},{"d":"2016-11-18","v":51.35},{"d":"2016-11-21","v":51.58},{"d":"2016-11-22","v":51.77},{"d":"2016-11-23","v":51.83},{"d":"2016-11-24","v":51.61},{"d":"2016-11-25","v":51.51},{"d":"2016-11-28","v":51.97},{"d":"2016-11-29","v":52.12},{"d":"2016-11-30","v":52.34},{"d":"2016-12-01","v":51.58},{"d":"2016-12-02","v":51.5},{"d":"2016-12-05","v":51.68},{"d":"2016-12-06","v":51.59},{"d":"2016-12-07","v":52.04},{"d":"2016-12-08","v":53.34},{"d":"2016-12-09","v":53.65},{"d":"2016-12-12","v":53.13},{"d":"2016-12-13","v":53.29},{"d":"2016-12-14","v":53},{"d":"2016-12-15","v":53.49},{"d":"2016-12-16","v":52.91},{"d":"2016-12-19","v":53.24},{"d":"2016-12-20","v":53.59},{"d":"2016-12-21","v":53.07},{"d":"2016-12-22","v":52.92},{"d":"2016-12-23","v":53.13},{"d":"2016-12-26","v":53.13},{"d":"2016-12-27","v":52.89},{"d":"2016-12-28","v":53.07},{"d":"2016-12-29","v":52.1},{"d":"2016-12-30","v":51.7},{"d":"2017-01-02","v":51.7},{"d":"2017-01-03","v":52.37},{"d":"2017-01-04","v":53.28},{"d":"2017-01-05","v":53.14},{"d":"2017-01-06","v":53.3},{"d":"2017-01-09","v":53.33},{"d":"2017-01-10","v":53.26},{"d":"2017-01-11","v":53.21},{"d":"2017-01-12","v":52.85},{"d":"2017-01-13","v":53.38},{"d":"2017-01-16","v":53.15},{"d":"2017-01-17","v":52.52},{"d":"2017-01-18","v":52.55},{"d":"2017-01-19","v":52.73},{"d":"2017-01-20","v":52.88},{"d":"2017-01-23","v":52.4},{"d":"2017-01-24","v":52.41},{"d":"2017-01-25","v":53.04},{"d":"2017-01-26","v":53.54},{"d":"2017-01-27","v":52.91},{"d":"2017-01-30","v":52.36},{"d":"2017-01-31","v":51.83},{"d":"2017-02-01","v":52.55},{"d":"2017-02-02","v":52.24},{"d":"2017-02-03","v":52.71},{"d":"2017-02-06","v":52.55},{"d":"2017-02-07","v":52.83},{"d":"2017-02-08","v":52.78},{"d":"2017-02-09","v":53.14},{"d":"2017-02-10","v":53.68},{"d":"2017-02-13","v":53.94},{"d":"2017-02-14","v":53.53},{"d":"2017-02-15","v":53.53},{"d":"2017-02-16","v":53.03},{"d":"2017-02-17","v":53.17},{"d":"2017-02-20","v":53.54},{"d":"2017-02-21","v":54.23},{"d":"2017-02-22","v":54.35},{"d":"2017-02-23","v":54.07},{"d":"2017-02-24","v":53.9},{"d":"2017-02-27","v":53.72},{"d":"2017-02-28","v":53.57},{"d":"2017-03-01","v":54.38},{"d":"2017-03-02","v":54.05},{"d":"2017-03-03","v":53.9},{"d":"2017-03-06","v":53.88},{"d":"2017-03-07","v":54.03},{"d":"2017-03-08","v":53.87},{"d":"2017-03-09","v":53.79},{"d":"2017-03-10","v":53.92},{"d":"2017-03-13","v":54.11},{"d":"2017-03-14","v":53.72},{"d":"2017-03-15","v":53.97},{"d":"2017-03-16","v":53.77},{"d":"2017-03-17","v":53.8},{"d":"2017-03-20","v":53.96},{"d":"2017-03-21","v":53.26},{"d":"2017-03-22","v":52.96},{"d":"2017-03-23","v":53.34},{"d":"2017-03-24","v":53.6},{"d":"2017-03-27","v":52.91},{"d":"2017-03-28","v":53.57},{"d":"2017-03-29","v":53.79},{"d":"2017-03-30","v":53.99},{"d":"2017-03-31","v":53.52},{"d":"2017-04-03","v":53.82},{"d":"2017-04-04","v":53.74},{"d":"2017-04-05","v":53.76},{"d":"2017-04-06","v":53.24},{"d":"2017-04-07","v":53.52},{"d":"2017-04-10","v":53.45},{"d":"2017-04-11","v":53.15},{"d":"2017-04-12","v":53.32},{"d":"2017-04-13","v":53.02},{"d":"2017-04-14","v":53.02},{"d":"2017-04-17","v":53.02},{"d":"2017-04-18","v":52.95},{"d":"2017-04-19","v":53.06},{"d":"2017-04-20","v":53.08},{"d":"2017-04-21","v":53.52},{"d":"2017-04-24","v":53.69},{"d":"2017-04-25","v":53.76},{"d":"2017-04-26","v":53.98},{"d":"2017-04-27","v":53.92},{"d":"2017-04-28","v":53.71},{"d":"2017-05-01","v":53.71},{"d":"2017-05-02","v":54.02},{"d":"2017-05-03","v":53.79},{"d":"2017-05-04","v":53.95},{"d":"2017-05-05","v":54.05},{"d":"2017-05-08","v":54.85},{"d":"2017-05-09","v":55.22},{"d":"2017-05-10","v":55.12},{"d":"2017-05-11","v":54.8},{"d":"2017-05-12","v":54.67},{"d":"2017-05-15","v":54.6},{"d":"2017-05-16","v":54.11},{"d":"2017-05-17","v":53.58},{"d":"2017-05-18","v":53.65},{"d":"2017-05-19","v":53.88},{"d":"2017-05-22","v":53.83},{"d":"2017-05-23","v":53.79},{"d":"2017-05-24","v":53.86},{"d":"2017-05-25","v":53.86},{"d":"2017-05-26","v":53.93},{"d":"2017-05-29","v":53.93},{"d":"2017-05-30","v":54.14},{"d":"2017-05-31","v":53.74},{"d":"2017-06-01","v":54.31},{"d":"2017-06-02","v":54.93},{"d":"2017-06-05","v":54.93},{"d":"2017-06-06","v":54.92},{"d":"2017-06-07","v":55},{"d":"2017-06-08","v":54.99},{"d":"2017-06-09","v":54.86},{"d":"2017-06-12","v":54.81},{"d":"2017-06-13","v":54.94},{"d":"2017-06-14","v":54.87},{"d":"2017-06-15","v":54.72},{"d":"2017-06-16","v":54.82},{"d":"2017-06-19","v":55.04},{"d":"2017-06-20","v":55.31},{"d":"2017-06-21","v":55.09},{"d":"2017-06-22","v":55.1},{"d":"2017-06-23","v":54.89},{"d":"2017-06-26","v":55},{"d":"2017-06-27","v":54.38},{"d":"2017-06-28","v":54.38}]}},{"instrumentId":78,"timeSeries":{"entries":[{"d":"2010-01-01","v":38.21},{"d":"2010-01-04","v":38.72},{"d":"2010-01-05","v":39.18},{"d":"2010-01-06","v":39.17},{"d":"2010-01-07","v":39},{"d":"2010-01-08","v":39.2},{"d":"2010-01-11","v":38.98},{"d":"2010-01-12","v":39.1},{"d":"2010-01-13","v":39.01},{"d":"2010-01-14","v":39.73},{"d":"2010-01-15","v":39.68},{"d":"2010-01-18","v":39.96},{"d":"2010-01-19","v":40.14},{"d":"2010-01-20","v":39.39},{"d":"2010-01-21","v":39.48},{"d":"2010-01-22","v":39.21},{"d":"2010-01-25","v":38.98},{"d":"2010-01-26","v":38.94},{"d":"2010-01-27","v":38.43},{"d":"2010-01-28","v":38.49},{"d":"2010-01-29","v":38.44},{"d":"2010-02-01","v":38.42},{"d":"2010-02-02","v":38.79},{"d":"2010-02-03","v":38.86},{"d":"2010-02-04","v":37.95},{"d":"2010-02-05","v":38.08},{"d":"2010-02-08","v":38.28},{"d":"2010-02-09","v":38.18},{"d":"2010-02-10","v":38.16},{"d":"2010-02-11","v":38.65},{"d":"2010-02-12","v":38.6},{"d":"2010-02-15","v":38.82},{"d":"2010-02-16","v":38.88},{"d":"2010-02-17","v":39.66},{"d":"2010-02-18","v":39.59},{"d":"2010-02-19","v":39.31},{"d":"2010-02-22","v":39.52},{"d":"2010-02-23","v":39.5},{"d":"2010-02-24","v":39.53},{"d":"2010-02-25","v":39.14},{"d":"2010-02-26","v":39.44},{"d":"2010-03-01","v":40.37},{"d":"2010-03-02","v":40.6},{"d":"2010-03-03","v":40.4},{"d":"2010-03-04","v":40.2},{"d":"2010-03-05","v":40.62},{"d":"2010-03-08","v":40.87},{"d":"2010-03-09","v":41.07},{"d":"2010-03-10","v":40.84},{"d":"2010-03-11","v":40.78},{"d":"2010-03-12","v":40.61},{"d":"2010-03-15","v":40.4},{"d":"2010-03-16","v":40.65},{"d":"2010-03-17","v":40.96},{"d":"2010-03-18","v":41.07},{"d":"2010-03-19","v":41.07},{"d":"2010-03-22","v":40.81},{"d":"2010-03-23","v":41.09},{"d":"2010-03-24","v":41.07},{"d":"2010-03-25","v":41.35},{"d":"2010-03-26","v":41.27},{"d":"2010-03-29","v":41.5},{"d":"2010-03-30","v":41.88},{"d":"2010-03-31","v":40.86},{"d":"2010-04-01","v":41.49},{"d":"2010-04-02","v":41.49},{"d":"2010-04-05","v":41.49},{"d":"2010-04-06","v":42.28},{"d":"2010-04-07","v":42.46},{"d":"2010-04-08","v":42.26},{"d":"2010-04-09","v":42.44},{"d":"2010-04-12","v":42.14},{"d":"2010-04-13","v":41.71},{"d":"2010-04-14","v":42.08},{"d":"2010-04-15","v":42.42},{"d":"2010-04-16","v":42.48},{"d":"2010-04-19","v":41.46},{"d":"2010-04-20","v":41.9},{"d":"2010-04-21","v":41.99},{"d":"2010-04-22","v":41.71},{"d":"2010-04-23","v":41.68},{"d":"2010-04-26","v":42.38},{"d":"2010-04-27","v":42},{"d":"2010-04-28","v":41.93},{"d":"2010-04-29","v":42.08},{"d":"2010-04-30","v":41.82},{"d":"2010-05-03","v":41.82},{"d":"2010-05-04","v":41.82},{"d":"2010-05-05","v":41.82},{"d":"2010-05-06","v":40.63},{"d":"2010-05-07","v":40.25},{"d":"2010-05-10","v":41.82},{"d":"2010-05-11","v":41.06},{"d":"2010-05-12","v":41.28},{"d":"2010-05-13","v":41.28},{"d":"2010-05-14","v":40.98},{"d":"2010-05-17","v":41.04},{"d":"2010-05-18","v":41.04},{"d":"2010-05-19","v":40.62},{"d":"2010-05-20","v":39.82},{"d":"2010-05-21","v":39.92},{"d":"2010-05-24","v":39.92},{"d":"2010-05-25","v":39.34},{"d":"2010-05-26","v":39.65},{"d":"2010-05-27","v":40.8},{"d":"2010-05-28","v":40.48},{"d":"2010-05-31","v":40.47},{"d":"2010-06-01","v":40.16},{"d":"2010-06-02","v":39.98},{"d":"2010-06-03","v":40.32},{"d":"2010-06-04","v":39.7},{"d":"2010-06-07","v":39.06},{"d":"2010-06-08","v":38.91},{"d":"2010-06-09","v":39.33},{"d":"2010-06-10","v":39.7},{"d":"2010-06-11","v":40.04},{"d":"2010-06-14","v":40.2},{"d":"2010-06-15","v":40.19},{"d":"2010-06-16","v":40.38},{"d":"2010-06-17","v":39.67},{"d":"2010-06-18","v":39.85},{"d":"2010-06-21","v":40.33},{"d":"2010-06-22","v":40.17},{"d":"2010-06-23","v":39.51},{"d":"2010-06-24","v":38.81},{"d":"2010-06-25","v":38.6},{"d":"2010-06-28","v":38.38},{"d":"2010-06-29","v":37.07},{"d":"2010-06-30","v":36.85},{"d":"2010-07-01","v":36.01},{"d":"2010-07-02","v":36.27},{"d":"2010-07-05","v":36.18},{"d":"2010-07-06","v":37.24},{"d":"2010-07-07","v":37.12},{"d":"2010-07-08","v":37.37},{"d":"2010-07-09","v":37.59},{"d":"2010-07-12","v":37.66},{"d":"2010-07-13","v":37.72},{"d":"2010-07-14","v":37.98},{"d":"2010-07-15","v":36.97},{"d":"2010-07-16","v":36.86},{"d":"2010-07-19","v":36.61},{"d":"2010-07-20","v":36.66},{"d":"2010-07-21","v":37.04},{"d":"2010-07-22","v":37.19},{"d":"2010-07-23","v":37.94},{"d":"2010-07-26","v":37.81},{"d":"2010-07-27","v":38.3},{"d":"2010-07-28","v":38.29},{"d":"2010-07-29","v":37.94},{"d":"2010-07-30","v":38.18},{"d":"2010-08-02","v":38.19},{"d":"2010-08-03","v":38.56},{"d":"2010-08-04","v":38.91},{"d":"2010-08-05","v":38.67},{"d":"2010-08-06","v":38.23},{"d":"2010-08-09","v":39.11},{"d":"2010-08-10","v":38.9},{"d":"2010-08-11","v":38.03},{"d":"2010-08-12","v":37.38},{"d":"2010-08-13","v":37.59},{"d":"2010-08-16","v":37.3},{"d":"2010-08-17","v":38},{"d":"2010-08-18","v":37.75},{"d":"2010-08-19","v":37.08},{"d":"2010-08-20","v":36.97},{"d":"2010-08-23","v":37.2},{"d":"2010-08-24","v":36.59},{"d":"2010-08-25","v":36.36},{"d":"2010-08-26","v":36.33},{"d":"2010-08-27","v":36.93},{"d":"2010-08-30","v":36.81},{"d":"2010-08-31","v":36.19},{"d":"2010-09-01","v":37.34},{"d":"2010-09-02","v":37.04},{"d":"2010-09-03","v":37.54},{"d":"2010-09-06","v":37.74},{"d":"2010-09-07","v":37.5},{"d":"2010-09-08","v":37.6},{"d":"2010-09-09","v":37.99},{"d":"2010-09-10","v":38.15},{"d":"2010-09-13","v":38.32},{"d":"2010-09-14","v":37.9},{"d":"2010-09-15","v":38.01},{"d":"2010-09-16","v":38.09},{"d":"2010-09-17","v":37.9},{"d":"2010-09-20","v":38.34},{"d":"2010-09-21","v":38.06},{"d":"2010-09-22","v":37.5},{"d":"2010-09-23","v":37.34},{"d":"2010-09-24","v":37.73},{"d":"2010-09-27","v":37.82},{"d":"2010-09-28","v":37.83},{"d":"2010-09-29","v":37.92},{"d":"2010-09-30","v":37.57},{"d":"2010-10-01","v":37.43},{"d":"2010-10-04","v":37.05},{"d":"2010-10-05","v":37.64},{"d":"2010-10-06","v":37.9},{"d":"2010-10-07","v":38.27},{"d":"2010-10-08","v":38.15},{"d":"2010-10-11","v":38.36},{"d":"2010-10-12","v":37.69},{"d":"2010-10-13","v":38.01},{"d":"2010-10-14","v":38},{"d":"2010-10-15","v":37.96},{"d":"2010-10-18","v":38.12},{"d":"2010-10-19","v":38.29},{"d":"2010-10-20","v":38.13},{"d":"2010-10-21","v":38.09},{"d":"2010-10-22","v":38.39},{"d":"2010-10-25","v":38.67},{"d":"2010-10-26","v":38.67},{"d":"2010-10-27","v":38.26},{"d":"2010-10-28","v":38.52},{"d":"2010-10-29","v":38.5},{"d":"2010-11-01","v":38.9},{"d":"2010-11-02","v":38.61},{"d":"2010-11-03","v":38.52},{"d":"2010-11-04","v":39.06},{"d":"2010-11-05","v":39.1},{"d":"2010-11-08","v":39.38},{"d":"2010-11-09","v":39.46},{"d":"2010-11-10","v":39.36},{"d":"2010-11-11","v":39.45},{"d":"2010-11-12","v":39.32},{"d":"2010-11-15","v":39.63},{"d":"2010-11-16","v":39},{"d":"2010-11-17","v":39.33},{"d":"2010-11-18","v":40.57},{"d":"2010-11-19","v":40.19},{"d":"2010-11-22","v":39.84},{"d":"2010-11-23","v":39.01},{"d":"2010-11-24","v":39.79},{"d":"2010-11-25","v":40},{"d":"2010-11-26","v":39.57},{"d":"2010-11-29","v":39.33},{"d":"2010-11-30","v":39.2},{"d":"2010-12-01","v":40.2},{"d":"2010-12-02","v":40.44},{"d":"2010-12-03","v":39.93},{"d":"2010-12-06","v":40.25},{"d":"2010-12-07","v":40.29},{"d":"2010-12-08","v":40.02},{"d":"2010-12-09","v":40.49},{"d":"2010-12-10","v":40.01},{"d":"2010-12-13","v":39.99},{"d":"2010-12-14","v":39.99},{"d":"2010-12-15","v":39.6},{"d":"2010-12-16","v":39.81},{"d":"2010-12-17","v":39.71},{"d":"2010-12-20","v":39.56},{"d":"2010-12-21","v":39.72},{"d":"2010-12-22","v":39.62},{"d":"2010-12-23","v":40.07},{"d":"2010-12-24","v":40.07},{"d":"2010-12-27","v":40.08},{"d":"2010-12-28","v":39.9},{"d":"2010-12-29","v":40.19},{"d":"2010-12-30","v":39.31},{"d":"2010-12-31","v":39.31},{"d":"2011-01-03","v":39.72},{"d":"2011-01-04","v":40.06},{"d":"2011-01-05","v":40.73},{"d":"2011-01-06","v":40.99},{"d":"2011-01-07","v":40.7},{"d":"2011-01-10","v":40.73},{"d":"2011-01-11","v":41.23},{"d":"2011-01-12","v":41.53},{"d":"2011-01-13","v":41.39},{"d":"2011-01-14","v":41.27},{"d":"2011-01-17","v":41.12},{"d":"2011-01-18","v":41.4},{"d":"2011-01-19","v":41.26},{"d":"2011-01-20","v":40.82},{"d":"2011-01-21","v":40.48},{"d":"2011-01-24","v":40.31},{"d":"2011-01-25","v":40.08},{"d":"2011-01-26","v":40.29},{"d":"2011-01-27","v":40.25},{"d":"2011-01-28","v":39.81},{"d":"2011-01-31","v":39.66},{"d":"2011-02-01","v":40.29},{"d":"2011-02-02","v":40.47},{"d":"2011-02-03","v":40.88},{"d":"2011-02-04","v":41.53},{"d":"2011-02-07","v":41.77},{"d":"2011-02-08","v":41.81},{"d":"2011-02-09","v":41.57},{"d":"2011-02-10","v":41.79},{"d":"2011-02-11","v":42.09},{"d":"2011-02-14","v":42.16},{"d":"2011-02-15","v":42},{"d":"2011-02-16","v":42.11},{"d":"2011-02-17","v":41.95},{"d":"2011-02-18","v":41.88},{"d":"2011-02-21","v":41.44},{"d":"2011-02-22","v":40.6},{"d":"2011-02-23","v":40.06},{"d":"2011-02-24","v":39.72},{"d":"2011-02-25","v":40.37},{"d":"2011-02-28","v":40.71},{"d":"2011-03-01","v":40.68},{"d":"2011-03-02","v":40.2},{"d":"2011-03-03","v":40.62},{"d":"2011-03-04","v":40.27},{"d":"2011-03-07","v":40.28},{"d":"2011-03-08","v":40.43},{"d":"2011-03-09","v":40.43},{"d":"2011-03-10","v":39.36},{"d":"2011-03-11","v":38.54},{"d":"2011-03-14","v":36.1},{"d":"2011-03-15","v":34.31},{"d":"2011-03-16","v":34.55},{"d":"2011-03-17","v":35.52},{"d":"2011-03-18","v":35.65},{"d":"2011-03-21","v":36.9},{"d":"2011-03-22","v":36.9},{"d":"2011-03-23","v":37.19},{"d":"2011-03-24","v":37.52},{"d":"2011-03-25","v":37.71},{"d":"2011-03-28","v":37.54},{"d":"2011-03-29","v":37.61},{"d":"2011-03-30","v":38.21},{"d":"2011-03-31","v":38.1},{"d":"2011-04-01","v":38.41},{"d":"2011-04-04","v":38.01},{"d":"2011-04-05","v":37.64},{"d":"2011-04-06","v":37.3},{"d":"2011-04-07","v":36.93},{"d":"2011-04-08","v":37.36},{"d":"2011-04-11","v":37.38},{"d":"2011-04-12","v":36.42},{"d":"2011-04-13","v":36.64},{"d":"2011-04-14","v":36.58},{"d":"2011-04-15","v":36.72},{"d":"2011-04-18","v":36.3},{"d":"2011-04-19","v":36.52},{"d":"2011-04-20","v":37.06},{"d":"2011-04-21","v":36.95},{"d":"2011-04-22","v":36.95},{"d":"2011-04-25","v":36.95},{"d":"2011-04-26","v":36.8},{"d":"2011-04-27","v":36.67},{"d":"2011-04-28","v":37.05},{"d":"2011-04-29","v":36.87},{"d":"2011-05-02","v":36.94},{"d":"2011-05-03","v":36.66},{"d":"2011-05-04","v":35.82},{"d":"2011-05-05","v":36.17},{"d":"2011-05-06","v":37.1},{"d":"2011-05-09","v":36.74},{"d":"2011-05-10","v":37.2},{"d":"2011-05-11","v":37.11},{"d":"2011-05-12","v":36.83},{"d":"2011-05-13","v":36.67},{"d":"2011-05-16","v":36.3},{"d":"2011-05-17","v":35.85},{"d":"2011-05-18","v":36.26},{"d":"2011-05-19","v":36.21},{"d":"2011-05-20","v":35.76},{"d":"2011-05-23","v":35.14},{"d":"2011-05-24","v":35.24},{"d":"2011-05-25","v":35.09},{"d":"2011-05-26","v":35.08},{"d":"2011-05-27","v":34.98},{"d":"2011-05-30","v":34.84},{"d":"2011-05-31","v":35.24},{"d":"2011-06-01","v":34.55},{"d":"2011-06-02","v":34.55},{"d":"2011-06-03","v":33.81},{"d":"2011-06-06","v":33.75},{"d":"2011-06-07","v":34.03},{"d":"2011-06-08","v":33.74},{"d":"2011-06-09","v":34.13},{"d":"2011-06-10","v":33.78},{"d":"2011-06-13","v":33.78},{"d":"2011-06-14","v":34.29},{"d":"2011-06-15","v":34.16},{"d":"2011-06-16","v":33.8},{"d":"2011-06-17","v":33.85},{"d":"2011-06-20","v":33.53},{"d":"2011-06-21","v":34.12},{"d":"2011-06-22","v":33.99},{"d":"2011-06-23","v":33.99},{"d":"2011-06-24","v":33.8},{"d":"2011-06-27","v":33.44},{"d":"2011-06-28","v":33.58},{"d":"2011-06-29","v":34.37},{"d":"2011-06-30","v":35.14},{"d":"2011-07-01","v":35.48},{"d":"2011-07-04","v":35.68},{"d":"2011-07-05","v":35.32},{"d":"2011-07-06","v":35.14},{"d":"2011-07-07","v":35.71},{"d":"2011-07-08","v":35.11},{"d":"2011-07-11","v":34.66},{"d":"2011-07-12","v":34.58},{"d":"2011-07-13","v":34.68},{"d":"2011-07-14","v":34.28},{"d":"2011-07-15","v":34.06},{"d":"2011-07-18","v":33.65},{"d":"2011-07-19","v":34.24},{"d":"2011-07-20","v":34.63},{"d":"2011-07-21","v":34.91},{"d":"2011-07-22","v":35},{"d":"2011-07-25","v":34.37},{"d":"2011-07-26","v":34.45},{"d":"2011-07-27","v":34.13},{"d":"2011-07-28","v":34.19},{"d":"2011-07-29","v":33.31},{"d":"2011-08-01","v":33.31},{"d":"2011-08-02","v":32.26},{"d":"2011-08-03","v":31.36},{"d":"2011-08-04","v":30.28},{"d":"2011-08-05","v":29.39},{"d":"2011-08-08","v":28.65},{"d":"2011-08-09","v":28.13},{"d":"2011-08-10","v":27.21},{"d":"2011-08-11","v":29},{"d":"2011-08-12","v":29.71},{"d":"2011-08-15","v":30.44},{"d":"2011-08-16","v":30.77},{"d":"2011-08-17","v":30.98},{"d":"2011-08-18","v":29.62},{"d":"2011-08-19","v":29.67},{"d":"2011-08-22","v":29.43},{"d":"2011-08-23","v":29.89},{"d":"2011-08-24","v":30},{"d":"2011-08-25","v":29.94},{"d":"2011-08-26","v":30.65},{"d":"2011-08-29","v":31.56},{"d":"2011-08-30","v":31.65},{"d":"2011-08-31","v":31.7},{"d":"2011-09-01","v":31.31},{"d":"2011-09-02","v":30.26},{"d":"2011-09-05","v":29.36},{"d":"2011-09-06","v":31.93},{"d":"2011-09-07","v":32.83},{"d":"2011-09-08","v":33.21},{"d":"2011-09-09","v":32.75},{"d":"2011-09-12","v":32.47},{"d":"2011-09-13","v":32.69},{"d":"2011-09-14","v":32.59},{"d":"2011-09-15","v":32.73},{"d":"2011-09-16","v":33.15},{"d":"2011-09-19","v":32.93},{"d":"2011-09-20","v":33.23},{"d":"2011-09-21","v":33},{"d":"2011-09-22","v":32.05},{"d":"2011-09-23","v":32.19},{"d":"2011-09-26","v":32.07},{"d":"2011-09-27","v":33.06},{"d":"2011-09-28","v":32.82},{"d":"2011-09-29","v":32.77},{"d":"2011-09-30","v":32.79},{"d":"2011-10-03","v":32.79},{"d":"2011-10-04","v":31.84},{"d":"2011-10-05","v":32.47},{"d":"2011-10-06","v":33.09},{"d":"2011-10-07","v":33.2},{"d":"2011-10-10","v":33.47},{"d":"2011-10-11","v":33.56},{"d":"2011-10-12","v":33.58},{"d":"2011-10-13","v":33.42},{"d":"2011-10-14","v":33.34},{"d":"2011-10-17","v":33.59},{"d":"2011-10-18","v":33.44},{"d":"2011-10-19","v":33.59},{"d":"2011-10-20","v":32.91},{"d":"2011-10-21","v":33.04},{"d":"2011-10-24","v":33.5},{"d":"2011-10-25","v":33.07},{"d":"2011-10-26","v":33.01},{"d":"2011-10-27","v":33.71},{"d":"2011-10-28","v":33.96},{"d":"2011-10-31","v":32.93},{"d":"2011-11-01","v":33.53},{"d":"2011-11-02","v":33.53},{"d":"2011-11-03","v":32.91},{"d":"2011-11-04","v":33.48},{"d":"2011-11-07","v":33.49},{"d":"2011-11-08","v":33.3},{"d":"2011-11-09","v":33.39},{"d":"2011-11-10","v":33.16},{"d":"2011-11-11","v":33.35},{"d":"2011-11-14","v":33.46},{"d":"2011-11-15","v":33.63},{"d":"2011-11-16","v":33.51},{"d":"2011-11-17","v":33.21},{"d":"2011-11-18","v":33.09},{"d":"2011-11-21","v":32.08},{"d":"2011-11-22","v":32.2},{"d":"2011-11-23","v":31.77},{"d":"2011-11-24","v":31.95},{"d":"2011-11-25","v":32.16},{"d":"2011-11-28","v":32.68},{"d":"2011-11-29","v":32.92},{"d":"2011-11-30","v":33.75},{"d":"2011-12-01","v":33.46},{"d":"2011-12-02","v":34.25},{"d":"2011-12-05","v":34.36},{"d":"2011-12-06","v":34.24},{"d":"2011-12-07","v":34.19},{"d":"2011-12-08","v":33.91},{"d":"2011-12-09","v":34.04},{"d":"2011-12-12","v":33.79},{"d":"2011-12-13","v":34.27},{"d":"2011-12-14","v":33.87},{"d":"2011-12-15","v":33.42},{"d":"2011-12-16","v":33.42},{"d":"2011-12-19","v":32.89},{"d":"2011-12-20","v":33.23},{"d":"2011-12-21","v":33.24},{"d":"2011-12-22","v":33.53},{"d":"2011-12-23","v":33.82},{"d":"2011-12-26","v":33.82},{"d":"2011-12-27","v":33.57},{"d":"2011-12-28","v":33.36},{"d":"2011-12-29","v":33.58},{"d":"2011-12-30","v":33.77},{"d":"2012-01-02","v":33.77},{"d":"2012-01-03","v":34.45},{"d":"2012-01-04","v":34.77},{"d":"2012-01-05","v":34.81},{"d":"2012-01-06","v":34.63},{"d":"2012-01-09","v":34.41},{"d":"2012-01-10","v":35},{"d":"2012-01-11","v":35},{"d":"2012-01-12","v":34.6},{"d":"2012-01-13","v":34.91},{"d":"2012-01-16","v":34.92},{"d":"2012-01-17","v":35.2},{"d":"2012-01-18","v":35.05},{"d":"2012-01-19","v":35.17},{"d":"2012-01-20","v":35.3},{"d":"2012-01-23","v":36.03},{"d":"2012-01-24","v":35.14},{"d":"2012-01-25","v":35.34},{"d":"2012-01-26","v":35.38},{"d":"2012-01-27","v":35.32},{"d":"2012-01-30","v":35.16},{"d":"2012-01-31","v":35.24},{"d":"2012-02-01","v":35.45},{"d":"2012-02-02","v":35.57},{"d":"2012-02-03","v":35.96},{"d":"2012-02-06","v":35.95},{"d":"2012-02-07","v":35.79},{"d":"2012-02-08","v":35.87},{"d":"2012-02-09","v":35.89},{"d":"2012-02-10","v":35.57},{"d":"2012-02-13","v":35.78},{"d":"2012-02-14","v":35.95},{"d":"2012-02-15","v":36.64},{"d":"2012-02-16","v":36.57},{"d":"2012-02-17","v":36.53},{"d":"2012-02-20","v":36.54},{"d":"2012-02-21","v":36.4},{"d":"2012-02-22","v":36.41},{"d":"2012-02-23","v":36.29},{"d":"2012-02-24","v":36.14},{"d":"2012-02-27","v":36.07},{"d":"2012-02-28","v":36.36},{"d":"2012-02-29","v":36.55},{"d":"2012-03-01","v":36.61},{"d":"2012-03-02","v":36.64},{"d":"2012-03-05","v":36.2},{"d":"2012-03-06","v":35.81},{"d":"2012-03-07","v":35.99},{"d":"2012-03-08","v":36.23},{"d":"2012-03-09","v":36.86},{"d":"2012-03-12","v":36.34},{"d":"2012-03-13","v":36.78},{"d":"2012-03-14","v":37.17},{"d":"2012-03-15","v":37.08},{"d":"2012-03-16","v":37.02},{"d":"2012-03-19","v":36.78},{"d":"2012-03-20","v":36.36},{"d":"2012-03-21","v":36.23},{"d":"2012-03-22","v":36.27},{"d":"2012-03-23","v":36.09},{"d":"2012-03-26","v":36.23},{"d":"2012-03-27","v":36.52},{"d":"2012-03-28","v":36.58},{"d":"2012-03-29","v":36.32},{"d":"2012-03-30","v":36.39},{"d":"2012-04-02","v":36.55},{"d":"2012-04-03","v":36.28},{"d":"2012-04-04","v":35.76},{"d":"2012-04-05","v":36.23},{"d":"2012-04-06","v":36.23},{"d":"2012-04-09","v":36.23},{"d":"2012-04-10","v":35.67},{"d":"2012-04-11","v":35.65},{"d":"2012-04-12","v":36.01},{"d":"2012-04-13","v":35.95},{"d":"2012-04-16","v":36.02},{"d":"2012-04-17","v":35.77},{"d":"2012-04-18","v":36.07},{"d":"2012-04-19","v":36.07},{"d":"2012-04-20","v":35.79},{"d":"2012-04-23","v":35.45},{"d":"2012-04-24","v":35.69},{"d":"2012-04-25","v":35.84},{"d":"2012-04-26","v":35.8},{"d":"2012-04-27","v":35.78},{"d":"2012-04-30","v":35.73},{"d":"2012-05-01","v":35.73},{"d":"2012-05-02","v":35.66},{"d":"2012-05-03","v":35.54},{"d":"2012-05-04","v":35.15},{"d":"2012-05-07","v":35.32},{"d":"2012-05-08","v":34.86},{"d":"2012-05-09","v":34.89},{"d":"2012-05-10","v":35.13},{"d":"2012-05-11","v":35},{"d":"2012-05-14","v":35.12},{"d":"2012-05-15","v":34.71},{"d":"2012-05-16","v":34.24},{"d":"2012-05-17","v":34.24},{"d":"2012-05-18","v":33.84},{"d":"2012-05-21","v":33.74},{"d":"2012-05-22","v":34.1},{"d":"2012-05-23","v":33.66},{"d":"2012-05-24","v":33.99},{"d":"2012-05-25","v":33.92},{"d":"2012-05-28","v":33.92},{"d":"2012-05-29","v":34.4},{"d":"2012-05-30","v":34.24},{"d":"2012-05-31","v":34.33},{"d":"2012-06-01","v":33.79},{"d":"2012-06-04","v":33.45},{"d":"2012-06-05","v":34.03},{"d":"2012-06-06","v":34.48},{"d":"2012-06-07","v":34.55},{"d":"2012-06-08","v":34.15},{"d":"2012-06-11","v":34.23},{"d":"2012-06-12","v":34.56},{"d":"2012-06-13","v":34.18},{"d":"2012-06-14","v":34.17},{"d":"2012-06-15","v":34.5},{"d":"2012-06-18","v":34.95},{"d":"2012-06-19","v":35.07},{"d":"2012-06-20","v":35.11},{"d":"2012-06-21","v":35.14},{"d":"2012-06-22","v":34.91},{"d":"2012-06-25","v":34.7},{"d":"2012-06-26","v":34.8},{"d":"2012-06-27","v":35.32},{"d":"2012-06-28","v":35.43},{"d":"2012-06-29","v":35.76},{"d":"2012-07-02","v":36.12},{"d":"2012-07-03","v":36.49},{"d":"2012-07-04","v":36.63},{"d":"2012-07-05","v":36.92},{"d":"2012-07-06","v":36.76},{"d":"2012-07-09","v":37.17},{"d":"2012-07-10","v":37.26},{"d":"2012-07-11","v":36.65},{"d":"2012-07-12","v":36.22},{"d":"2012-07-13","v":36.54},{"d":"2012-07-16","v":36.58},{"d":"2012-07-17","v":36.55},{"d":"2012-07-18","v":36.77},{"d":"2012-07-19","v":37.12},{"d":"2012-07-20","v":36.77},{"d":"2012-07-23","v":36.19},{"d":"2012-07-24","v":36.25},{"d":"2012-07-25","v":35.98},{"d":"2012-07-26","v":36.14},{"d":"2012-07-27","v":36.47},{"d":"2012-07-30","v":36.98},{"d":"2012-07-31","v":36.95},{"d":"2012-08-01","v":36.95},{"d":"2012-08-02","v":36.95},{"d":"2012-08-03","v":36.97},{"d":"2012-08-06","v":37.06},{"d":"2012-08-07","v":37.32},{"d":"2012-08-08","v":37.44},{"d":"2012-08-09","v":37.77},{"d":"2012-08-10","v":37.57},{"d":"2012-08-13","v":37.36},{"d":"2012-08-14","v":37.48},{"d":"2012-08-15","v":37.37},{"d":"2012-08-16","v":37.52},{"d":"2012-08-17","v":37.89},{"d":"2012-08-20","v":37.9},{"d":"2012-08-21","v":37.73},{"d":"2012-08-22","v":37.27},{"d":"2012-08-23","v":37.17},{"d":"2012-08-24","v":37.19},{"d":"2012-08-27","v":37.68},{"d":"2012-08-28","v":36.72},{"d":"2012-08-29","v":36.84},{"d":"2012-08-30","v":36.42},{"d":"2012-08-31","v":36.36},{"d":"2012-09-03","v":36.06},{"d":"2012-09-04","v":35.7},{"d":"2012-09-05","v":36.17},{"d":"2012-09-06","v":36.06},{"d":"2012-09-07","v":36.2},{"d":"2012-09-10","v":36.22},{"d":"2012-09-11","v":36.2},{"d":"2012-09-12","v":36.39},{"d":"2012-09-13","v":36.61},{"d":"2012-09-14","v":36.89},{"d":"2012-09-17","v":36.67},{"d":"2012-09-18","v":36.59},{"d":"2012-09-19","v":36.71},{"d":"2012-09-20","v":36.59},{"d":"2012-09-21","v":36.82},{"d":"2012-09-24","v":36.63},{"d":"2012-09-25","v":36.83},{"d":"2012-09-26","v":36.44},{"d":"2012-09-27","v":36.8},{"d":"2012-09-28","v":36.46},{"d":"2012-10-01","v":36.47},{"d":"2012-10-02","v":37.02},{"d":"2012-10-03","v":36.25},{"d":"2012-10-04","v":36.26},{"d":"2012-10-05","v":36.29},{"d":"2012-10-08","v":36.17},{"d":"2012-10-09","v":36.01},{"d":"2012-10-10","v":35.9},{"d":"2012-10-11","v":35.89},{"d":"2012-10-12","v":35.73},{"d":"2012-10-15","v":35.97},{"d":"2012-10-16","v":36.16},{"d":"2012-10-17","v":36.34},{"d":"2012-10-18","v":36.45},{"d":"2012-10-19","v":36.37},{"d":"2012-10-22","v":36.36},{"d":"2012-10-23","v":36.02},{"d":"2012-10-24","v":36.36},{"d":"2012-10-25","v":36.56},{"d":"2012-10-26","v":36.37},{"d":"2012-10-29","v":36.31},{"d":"2012-10-30","v":36.11},{"d":"2012-10-31","v":36.13},{"d":"2012-11-01","v":36.41},{"d":"2012-11-02","v":36.53},{"d":"2012-11-05","v":36.7},{"d":"2012-11-06","v":36.81},{"d":"2012-11-07","v":36.7},{"d":"2012-11-08","v":36.7},{"d":"2012-11-09","v":36.7},{"d":"2012-11-12","v":36.7},{"d":"2012-11-13","v":36.68},{"d":"2012-11-14","v":35.88},{"d":"2012-11-15","v":35.74},{"d":"2012-11-16","v":36.19},{"d":"2012-11-19","v":36.69},{"d":"2012-11-20","v":36.55},{"d":"2012-11-21","v":36.53},{"d":"2012-11-22","v":36.67},{"d":"2012-11-23","v":36.68},{"d":"2012-11-26","v":36.49},{"d":"2012-11-27","v":37.32},{"d":"2012-11-28","v":36.57},{"d":"2012-11-29","v":36.87},{"d":"2012-11-30","v":36.82},{"d":"2012-12-03","v":36.78},{"d":"2012-12-04","v":36.84},{"d":"2012-12-05","v":36.84},{"d":"2012-12-06","v":37.28},{"d":"2012-12-07","v":37.41},{"d":"2012-12-10","v":37.45},{"d":"2012-12-11","v":37.6},{"d":"2012-12-12","v":37.47},{"d":"2012-12-13","v":37.17},{"d":"2012-12-14","v":37.79},{"d":"2012-12-17","v":37.66},{"d":"2012-12-18","v":37.94},{"d":"2012-12-19","v":37.64},{"d":"2012-12-20","v":37.86},{"d":"2012-12-21","v":37.8},{"d":"2012-12-24","v":37.8},{"d":"2012-12-25","v":37.8},{"d":"2012-12-26","v":37.8},{"d":"2012-12-27","v":37.7},{"d":"2012-12-28","v":37.67},{"d":"2012-12-31","v":37.67},{"d":"2013-01-01","v":37.67},{"d":"2013-01-02","v":37.67},{"d":"2013-01-03","v":39.12},{"d":"2013-01-04","v":38.96},{"d":"2013-01-07","v":38.61},{"d":"2013-01-08","v":38.27},{"d":"2013-01-09","v":38.7},{"d":"2013-01-10","v":38.81},{"d":"2013-01-11","v":38.56},{"d":"2013-01-14","v":38.9},{"d":"2013-01-15","v":39.72},{"d":"2013-01-16","v":39.21},{"d":"2013-01-17","v":39.43},{"d":"2013-01-18","v":40.27},{"d":"2013-01-21","v":39.54},{"d":"2013-01-22","v":39.16},{"d":"2013-01-23","v":39.15},{"d":"2013-01-24","v":39.57},{"d":"2013-01-25","v":39.24},{"d":"2013-01-28","v":39.18},{"d":"2013-01-29","v":39.47},{"d":"2013-01-30","v":39.5},{"d":"2013-01-31","v":39.5},{"d":"2013-02-01","v":39.47},{"d":"2013-02-04","v":38.91},{"d":"2013-02-05","v":38.81},{"d":"2013-02-06","v":39.12},{"d":"2013-02-07","v":39.33},{"d":"2013-02-08","v":39.56},{"d":"2013-02-11","v":39.84},{"d":"2013-02-12","v":39.69},{"d":"2013-02-13","v":39.79},{"d":"2013-02-14","v":39.83},{"d":"2013-02-15","v":39.82},{"d":"2013-02-18","v":39.99},{"d":"2013-02-19","v":40.32},{"d":"2013-02-20","v":40.49},{"d":"2013-02-21","v":40.04},{"d":"2013-02-22","v":40.46},{"d":"2013-02-25","v":40.6},{"d":"2013-02-26","v":40.52},{"d":"2013-02-27","v":40.62},{"d":"2013-02-28","v":40.96},{"d":"2013-03-01","v":41.65},{"d":"2013-03-04","v":41.51},{"d":"2013-03-05","v":41.88},{"d":"2013-03-06","v":42.27},{"d":"2013-03-07","v":42.15},{"d":"2013-03-08","v":42.47},{"d":"2013-03-11","v":42.7},{"d":"2013-03-12","v":42.29},{"d":"2013-03-13","v":42.57},{"d":"2013-03-14","v":42.7},{"d":"2013-03-15","v":42.7},{"d":"2013-03-18","v":42.5},{"d":"2013-03-19","v":42.27},{"d":"2013-03-20","v":42.47},{"d":"2013-03-21","v":42.62},{"d":"2013-03-22","v":42.53},{"d":"2013-03-25","v":42.65},{"d":"2013-03-26","v":42.82},{"d":"2013-03-27","v":43.21},{"d":"2013-03-28","v":42.97},{"d":"2013-03-29","v":42.97},{"d":"2013-04-01","v":42.97},{"d":"2013-04-02","v":42.45},{"d":"2013-04-03","v":43.14},{"d":"2013-04-04","v":43.59},{"d":"2013-04-05","v":42.24},{"d":"2013-04-08","v":42.49},{"d":"2013-04-09","v":42.58},{"d":"2013-04-10","v":43.43},{"d":"2013-04-11","v":44},{"d":"2013-04-12","v":44},{"d":"2013-04-15","v":43.19},{"d":"2013-04-16","v":43.21},{"d":"2013-04-17","v":43.13},{"d":"2013-04-18","v":42.97},{"d":"2013-04-19","v":43.16},{"d":"2013-04-22","v":43.36},{"d":"2013-04-23","v":44.19},{"d":"2013-04-24","v":44.96},{"d":"2013-04-25","v":45.25},{"d":"2013-04-26","v":44.8},{"d":"2013-04-29","v":45.51},{"d":"2013-04-30","v":44.85},{"d":"2013-05-01","v":44.85},{"d":"2013-05-02","v":44.92},{"d":"2013-05-03","v":45.3},{"d":"2013-05-06","v":45.41},{"d":"2013-05-07","v":45.43},{"d":"2013-05-08","v":45.37},{"d":"2013-05-09","v":45.37},{"d":"2013-05-10","v":46.3},{"d":"2013-05-13","v":46.42},{"d":"2013-05-14","v":46.73},{"d":"2013-05-15","v":47.32},{"d":"2013-05-16","v":46.73},{"d":"2013-05-17","v":47.53},{"d":"2013-05-20","v":47.53},{"d":"2013-05-21","v":47.55},{"d":"2013-05-22","v":48.39},{"d":"2013-05-23","v":45.08},{"d":"2013-05-24","v":44.21},{"d":"2013-05-27","v":43.68},{"d":"2013-05-28","v":45.16},{"d":"2013-05-29","v":45},{"d":"2013-05-30","v":43.28},{"d":"2013-05-31","v":42.97},{"d":"2013-06-03","v":41.52},{"d":"2013-06-04","v":42.75},{"d":"2013-06-05","v":41.03},{"d":"2013-06-06","v":40.31},{"d":"2013-06-07","v":41.3},{"d":"2013-06-10","v":41.77},{"d":"2013-06-11","v":41},{"d":"2013-06-12","v":40.81},{"d":"2013-06-13","v":40.93},{"d":"2013-06-14","v":40.95},{"d":"2013-06-17","v":42.04},{"d":"2013-06-18","v":41.91},{"d":"2013-06-19","v":41.91},{"d":"2013-06-20","v":40.21},{"d":"2013-06-21","v":40.68},{"d":"2013-06-24","v":39.7},{"d":"2013-06-25","v":40.76},{"d":"2013-06-26","v":41.03},{"d":"2013-06-27","v":42.13},{"d":"2013-06-28","v":42.27},{"d":"2013-07-01","v":43.02},{"d":"2013-07-02","v":43.12},{"d":"2013-07-03","v":42.44},{"d":"2013-07-04","v":43.39},{"d":"2013-07-05","v":43.32},{"d":"2013-07-08","v":43.72},{"d":"2013-07-09","v":44.4},{"d":"2013-07-10","v":44.23},{"d":"2013-07-11","v":44.16},{"d":"2013-07-12","v":43.99},{"d":"2013-07-15","v":44.52},{"d":"2013-07-16","v":44.92},{"d":"2013-07-17","v":44.37},{"d":"2013-07-18","v":44.73},{"d":"2013-07-19","v":44.14},{"d":"2013-07-22","v":44.12},{"d":"2013-07-23","v":44.23},{"d":"2013-07-24","v":44.07},{"d":"2013-07-25","v":43.17},{"d":"2013-07-26","v":42.46},{"d":"2013-07-29","v":42.15},{"d":"2013-07-30","v":42.17},{"d":"2013-07-31","v":41.9},{"d":"2013-08-01","v":41.9},{"d":"2013-08-02","v":43.07},{"d":"2013-08-05","v":43.3},{"d":"2013-08-06","v":44.1},{"d":"2013-08-07","v":42.43},{"d":"2013-08-08","v":42.07},{"d":"2013-08-09","v":42.39},{"d":"2013-08-12","v":42.6},{"d":"2013-08-13","v":43.24},{"d":"2013-08-14","v":43.45},{"d":"2013-08-15","v":42.89},{"d":"2013-08-16","v":42.6},{"d":"2013-08-19","v":42.52},{"d":"2013-08-20","v":41.55},{"d":"2013-08-21","v":41.19},{"d":"2013-08-22","v":41.62},{"d":"2013-08-23","v":41.82},{"d":"2013-08-26","v":41.88},{"d":"2013-08-27","v":41.22},{"d":"2013-08-28","v":41.23},{"d":"2013-08-29","v":41.82},{"d":"2013-08-30","v":41.22},{"d":"2013-09-02","v":42.1},{"d":"2013-09-03","v":42.41},{"d":"2013-09-04","v":42.78},{"d":"2013-09-05","v":43.14},{"d":"2013-09-06","v":43.06},{"d":"2013-09-09","v":43.29},{"d":"2013-09-10","v":44.1},{"d":"2013-09-11","v":43.63},{"d":"2013-09-12","v":43.54},{"d":"2013-09-13","v":43.61},{"d":"2013-09-16","v":44.06},{"d":"2013-09-17","v":43.91},{"d":"2013-09-18","v":44.07},{"d":"2013-09-19","v":44.38},{"d":"2013-09-20","v":44.02},{"d":"2013-09-23","v":43.85},{"d":"2013-09-24","v":44.08},{"d":"2013-09-25","v":43.96},{"d":"2013-09-26","v":44.9},{"d":"2013-09-27","v":43.83},{"d":"2013-09-30","v":43.32},{"d":"2013-10-01","v":43.53},{"d":"2013-10-02","v":42.99},{"d":"2013-10-03","v":43.01},{"d":"2013-10-04","v":43.21},{"d":"2013-10-07","v":42.82},{"d":"2013-10-08","v":42.69},{"d":"2013-10-09","v":43.19},{"d":"2013-10-10","v":43.92},{"d":"2013-10-11","v":44.16},{"d":"2013-10-14","v":44.34},{"d":"2013-10-15","v":44.6},{"d":"2013-10-16","v":44.64},{"d":"2013-10-17","v":44.54},{"d":"2013-10-18","v":44.72},{"d":"2013-10-21","v":44.88},{"d":"2013-10-22","v":44.64},{"d":"2013-10-23","v":43.72},{"d":"2013-10-24","v":44.07},{"d":"2013-10-25","v":43.81},{"d":"2013-10-28","v":43.99},{"d":"2013-10-29","v":44.24},{"d":"2013-10-30","v":44.1},{"d":"2013-10-31","v":44.49},{"d":"2013-11-01","v":44.28},{"d":"2013-11-04","v":44.05},{"d":"2013-11-05","v":44.06},{"d":"2013-11-06","v":44.56},{"d":"2013-11-07","v":44.33},{"d":"2013-11-08","v":44.58},{"d":"2013-11-11","v":44.48},{"d":"2013-11-12","v":44.44},{"d":"2013-11-13","v":44.42},{"d":"2013-11-14","v":44.86},{"d":"2013-11-15","v":45.29},{"d":"2013-11-18","v":45.22},{"d":"2013-11-19","v":44.87},{"d":"2013-11-20","v":45.23},{"d":"2013-11-21","v":45.11},{"d":"2013-11-22","v":44.68},{"d":"2013-11-25","v":44.81},{"d":"2013-11-26","v":44.35},{"d":"2013-11-27","v":44.48},{"d":"2013-11-28","v":44.21},{"d":"2013-11-29","v":44.37},{"d":"2013-12-02","v":44.38},{"d":"2013-12-03","v":43.76},{"d":"2013-12-04","v":43.48},{"d":"2013-12-05","v":42.83},{"d":"2013-12-06","v":43.09},{"d":"2013-12-09","v":43.05},{"d":"2013-12-10","v":42.57},{"d":"2013-12-11","v":42.04},{"d":"2013-12-12","v":42.15},{"d":"2013-12-13","v":42.03},{"d":"2013-12-16","v":42.03},{"d":"2013-12-17","v":41.72},{"d":"2013-12-18","v":42.12},{"d":"2013-12-19","v":42.63},{"d":"2013-12-20","v":42.72},{"d":"2013-12-23","v":42.99},{"d":"2013-12-24","v":42.99},{"d":"2013-12-25","v":42.99},{"d":"2013-12-26","v":42.99},{"d":"2013-12-27","v":43.84},{"d":"2013-12-30","v":43.21},{"d":"2013-12-31","v":43.21},{"d":"2014-01-01","v":43.21},{"d":"2014-01-02","v":43.21},{"d":"2014-01-03","v":43.82},{"d":"2014-01-06","v":43.72},{"d":"2014-01-07","v":44.14},{"d":"2014-01-08","v":44.28},{"d":"2014-01-09","v":43.97},{"d":"2014-01-10","v":43.88},{"d":"2014-01-13","v":43.76},{"d":"2014-01-14","v":43.53},{"d":"2014-01-15","v":44.13},{"d":"2014-01-16","v":43.77},{"d":"2014-01-17","v":44.26},{"d":"2014-01-20","v":44.17},{"d":"2014-01-21","v":44.44},{"d":"2014-01-22","v":44.23},{"d":"2014-01-23","v":43.05},{"d":"2014-01-24","v":41.84},{"d":"2014-01-27","v":41.57},{"d":"2014-01-28","v":42.02},{"d":"2014-01-29","v":42.66},{"d":"2014-01-30","v":42.14},{"d":"2014-01-31","v":41.58},{"d":"2014-02-03","v":40.65},{"d":"2014-02-04","v":40.81},{"d":"2014-02-05","v":41.03},{"d":"2014-02-06","v":41.37},{"d":"2014-02-07","v":41.72},{"d":"2014-02-10","v":41.84},{"d":"2014-02-11","v":42.2},{"d":"2014-02-12","v":42.57},{"d":"2014-02-13","v":41.93},{"d":"2014-02-14","v":42.01},{"d":"2014-02-17","v":42.05},{"d":"2014-02-18","v":42.36},{"d":"2014-02-19","v":42.35},{"d":"2014-02-20","v":42.03},{"d":"2014-02-21","v":42.46},{"d":"2014-02-24","v":42.8},{"d":"2014-02-25","v":42.46},{"d":"2014-02-26","v":42.72},{"d":"2014-02-27","v":42.34},{"d":"2014-02-28","v":42.18},{"d":"2014-03-03","v":41.27},{"d":"2014-03-04","v":42.54},{"d":"2014-03-05","v":42.28},{"d":"2014-03-06","v":42.68},{"d":"2014-03-07","v":42.18},{"d":"2014-03-10","v":41.96},{"d":"2014-03-11","v":41.73},{"d":"2014-03-12","v":41.08},{"d":"2014-03-13","v":40.62},{"d":"2014-03-14","v":40.29},{"d":"2014-03-17","v":40.63},{"d":"2014-03-18","v":40.78},{"d":"2014-03-19","v":40.61},{"d":"2014-03-20","v":40.44},{"d":"2014-03-21","v":40.59},{"d":"2014-03-24","v":40.56},{"d":"2014-03-25","v":40.97},{"d":"2014-03-26","v":41.42},{"d":"2014-03-27","v":41.62},{"d":"2014-03-28","v":42.14},{"d":"2014-03-31","v":42.26},{"d":"2014-04-01","v":42.06},{"d":"2014-04-02","v":42.5},{"d":"2014-04-03","v":42.64},{"d":"2014-04-04","v":42.85},{"d":"2014-04-07","v":42.23},{"d":"2014-04-08","v":41.66},{"d":"2014-04-09","v":41.71},{"d":"2014-04-10","v":41.23},{"d":"2014-04-11","v":41.03},{"d":"2014-04-14","v":41.33},{"d":"2014-04-15","v":40.97},{"d":"2014-04-16","v":41.86},{"d":"2014-04-17","v":41.92},{"d":"2014-04-18","v":41.92},{"d":"2014-04-21","v":41.92},{"d":"2014-04-22","v":42.23},{"d":"2014-04-23","v":42},{"d":"2014-04-24","v":41.78},{"d":"2014-04-25","v":41.46},{"d":"2014-04-28","v":41.62},{"d":"2014-04-29","v":41.91},{"d":"2014-04-30","v":41.56},{"d":"2014-05-01","v":41.56},{"d":"2014-05-02","v":41.63},{"d":"2014-05-05","v":41.63},{"d":"2014-05-06","v":41.51},{"d":"2014-05-07","v":41.26},{"d":"2014-05-08","v":41.59},{"d":"2014-05-09","v":41.93},{"d":"2014-05-12","v":42.16},{"d":"2014-05-13","v":42.64},{"d":"2014-05-14","v":42.71},{"d":"2014-05-15","v":42.29},{"d":"2014-05-16","v":42.61},{"d":"2014-05-19","v":42.4},{"d":"2014-05-20","v":42.21},{"d":"2014-05-21","v":42.58},{"d":"2014-05-22","v":42.91},{"d":"2014-05-23","v":43.27},{"d":"2014-05-26","v":43.44},{"d":"2014-05-27","v":43.52},{"d":"2014-05-28","v":43.49},{"d":"2014-05-29","v":43.49},{"d":"2014-05-30","v":43.78},{"d":"2014-06-02","v":44.3},{"d":"2014-06-03","v":44.35},{"d":"2014-06-04","v":44.11},{"d":"2014-06-05","v":44.09},{"d":"2014-06-06","v":44.28},{"d":"2014-06-09","v":44.28},{"d":"2014-06-10","v":44.26},{"d":"2014-06-11","v":44.37},{"d":"2014-06-12","v":44.53},{"d":"2014-06-13","v":44.61},{"d":"2014-06-16","v":44.37},{"d":"2014-06-17","v":44.38},{"d":"2014-06-18","v":44.43},{"d":"2014-06-19","v":45.01},{"d":"2014-06-20","v":45.16},{"d":"2014-06-23","v":44.82},{"d":"2014-06-24","v":45.1},{"d":"2014-06-25","v":44.72},{"d":"2014-06-26","v":44.83},{"d":"2014-06-27","v":44.78},{"d":"2014-06-30","v":44.69},{"d":"2014-07-01","v":45.07},{"d":"2014-07-02","v":45.34},{"d":"2014-07-03","v":45.52},{"d":"2014-07-04","v":45.64},{"d":"2014-07-07","v":45.41},{"d":"2014-07-08","v":45.11},{"d":"2014-07-09","v":45.2},{"d":"2014-07-10","v":44.64},{"d":"2014-07-11","v":44.87},{"d":"2014-07-14","v":45.25},{"d":"2014-07-15","v":45.4},{"d":"2014-07-16","v":45.72},{"d":"2014-07-17","v":45.57},{"d":"2014-07-18","v":45.7},{"d":"2014-07-21","v":45.5},{"d":"2014-07-22","v":46.1},{"d":"2014-07-23","v":46.12},{"d":"2014-07-24","v":46.06},{"d":"2014-07-25","v":46.23},{"d":"2014-07-28","v":46.43},{"d":"2014-07-29","v":46.64},{"d":"2014-07-30","v":46.75},{"d":"2014-07-31","v":46.29},{"d":"2014-08-01","v":46.29},{"d":"2014-08-04","v":45.85},{"d":"2014-08-05","v":45.74},{"d":"2014-08-06","v":45.4},{"d":"2014-08-07","v":45.35},{"d":"2014-08-08","v":44.98},{"d":"2014-08-11","v":45.41},{"d":"2014-08-12","v":45.45},{"d":"2014-08-13","v":45.91},{"d":"2014-08-14","v":45.71},{"d":"2014-08-15","v":45.41},{"d":"2014-08-18","v":46.12},{"d":"2014-08-19","v":46.35},{"d":"2014-08-20","v":46.41},{"d":"2014-08-21","v":46.54},{"d":"2014-08-22","v":46.58},{"d":"2014-08-25","v":46.76},{"d":"2014-08-26","v":46.56},{"d":"2014-08-27","v":46.36},{"d":"2014-08-28","v":46.18},{"d":"2014-08-29","v":46.3},{"d":"2014-09-01","v":46.43},{"d":"2014-09-02","v":46.71},{"d":"2014-09-03","v":47.08},{"d":"2014-09-04","v":47.41},{"d":"2014-09-05","v":46.94},{"d":"2014-09-08","v":47.04},{"d":"2014-09-09","v":46.81},{"d":"2014-09-10","v":47.12},{"d":"2014-09-11","v":46.79},{"d":"2014-09-12","v":46.58},{"d":"2014-09-15","v":46.33},{"d":"2014-09-16","v":46.31},{"d":"2014-09-17","v":46.04},{"d":"2014-09-18","v":46.14},{"d":"2014-09-19","v":46.45},{"d":"2014-09-22","v":46.23},{"d":"2014-09-23","v":45.98},{"d":"2014-09-24","v":46.36},{"d":"2014-09-25","v":46.36},{"d":"2014-09-26","v":46.66},{"d":"2014-09-29","v":46.2},{"d":"2014-09-30","v":46.34},{"d":"2014-10-01","v":45.99},{"d":"2014-10-02","v":44.99},{"d":"2014-10-03","v":46.12},{"d":"2014-10-06","v":46.05},{"d":"2014-10-07","v":45.84},{"d":"2014-10-08","v":45.35},{"d":"2014-10-09","v":45.16},{"d":"2014-10-10","v":44.52},{"d":"2014-10-13","v":44.24},{"d":"2014-10-14","v":44.31},{"d":"2014-10-15","v":43.53},{"d":"2014-10-16","v":43.65},{"d":"2014-10-17","v":44.07},{"d":"2014-10-20","v":44.42},{"d":"2014-10-21","v":44.78},{"d":"2014-10-22","v":45.36},{"d":"2014-10-23","v":45.45},{"d":"2014-10-24","v":45.37},{"d":"2014-10-27","v":45.22},{"d":"2014-10-28","v":45.44},{"d":"2014-10-29","v":45.69},{"d":"2014-10-30","v":46.08},{"d":"2014-10-31","v":48.14},{"d":"2014-11-03","v":48.1},{"d":"2014-11-04","v":47.19},{"d":"2014-11-05","v":47.29},{"d":"2014-11-06","v":47.16},{"d":"2014-11-07","v":47.06},{"d":"2014-11-10","v":47.32},{"d":"2014-11-11","v":47.55},{"d":"2014-11-12","v":47.22},{"d":"2014-11-13","v":47.5},{"d":"2014-11-14","v":47.43},{"d":"2014-11-17","v":46.86},{"d":"2014-11-18","v":47.18},{"d":"2014-11-19","v":46.41},{"d":"2014-11-20","v":46.17},{"d":"2014-11-21","v":47.28},{"d":"2014-11-24","v":46.93},{"d":"2014-11-25","v":46.69},{"d":"2014-11-26","v":46.78},{"d":"2014-11-27","v":46.56},{"d":"2014-11-28","v":46.73},{"d":"2014-12-01","v":46.42},{"d":"2014-12-02","v":47.18},{"d":"2014-12-03","v":47.2},{"d":"2014-12-04","v":46.7},{"d":"2014-12-05","v":47.33},{"d":"2014-12-08","v":46.92},{"d":"2014-12-09","v":46},{"d":"2014-12-10","v":45.88},{"d":"2014-12-11","v":46.1},{"d":"2014-12-12","v":45.17},{"d":"2014-12-15","v":45},{"d":"2014-12-16","v":44.64},{"d":"2014-12-17","v":45},{"d":"2014-12-18","v":46.07},{"d":"2014-12-19","v":46.56},{"d":"2014-12-22","v":46.73},{"d":"2014-12-23","v":47},{"d":"2014-12-24","v":47},{"d":"2014-12-25","v":47},{"d":"2014-12-26","v":47},{"d":"2014-12-29","v":47.14},{"d":"2014-12-30","v":46.56},{"d":"2014-12-31","v":46.56},{"d":"2015-01-01","v":46.56},{"d":"2015-01-02","v":46.56},{"d":"2015-01-05","v":46.73},{"d":"2015-01-06","v":46.95},{"d":"2015-01-07","v":47.08},{"d":"2015-01-08","v":47.76},{"d":"2015-01-09","v":47.46},{"d":"2015-01-12","v":47.23},{"d":"2015-01-13","v":48.04},{"d":"2015-01-14","v":47.41},{"d":"2015-01-15","v":47.2},{"d":"2015-01-16","v":40.37},{"d":"2015-01-19","v":41.24},{"d":"2015-01-20","v":41.28},{"d":"2015-01-21","v":40.72},{"d":"2015-01-22","v":41.41},{"d":"2015-01-23","v":41.7},{"d":"2015-01-26","v":42.98},{"d":"2015-01-27","v":43.22},{"d":"2015-01-28","v":43.6},{"d":"2015-01-29","v":44.09},{"d":"2015-01-30","v":44.11},{"d":"2015-02-02","v":44.4},{"d":"2015-02-03","v":44.47},{"d":"2015-02-04","v":44.95},{"d":"2015-02-05","v":44.97},{"d":"2015-02-06","v":45.45},{"d":"2015-02-09","v":44.54},{"d":"2015-02-10","v":44.63},{"d":"2015-02-11","v":44.71},{"d":"2015-02-12","v":44.89},{"d":"2015-02-13","v":45.89},{"d":"2015-02-16","v":45.8},{"d":"2015-02-17","v":46.06},{"d":"2015-02-18","v":47.06},{"d":"2015-02-19","v":47.6},{"d":"2015-02-20","v":47.38},{"d":"2015-02-23","v":47.65},{"d":"2015-02-24","v":47.93},{"d":"2015-02-25","v":47.99},{"d":"2015-02-26","v":48.43},{"d":"2015-02-27","v":48.09},{"d":"2015-03-02","v":48.55},{"d":"2015-03-03","v":48.44},{"d":"2015-03-04","v":48.57},{"d":"2015-03-05","v":48.96},{"d":"2015-03-06","v":49.34},{"d":"2015-03-09","v":49.25},{"d":"2015-03-10","v":49.02},{"d":"2015-03-11","v":49.79},{"d":"2015-03-12","v":50.57},{"d":"2015-03-13","v":50.29},{"d":"2015-03-16","v":51.01},{"d":"2015-03-17","v":50.67},{"d":"2015-03-18","v":50.38},{"d":"2015-03-19","v":50.52},{"d":"2015-03-20","v":50.52},{"d":"2015-03-23","v":50.28},{"d":"2015-03-24","v":49.91},{"d":"2015-03-25","v":49.72},{"d":"2015-03-26","v":49.56},{"d":"2015-03-27","v":49.35},{"d":"2015-03-30","v":49.9},{"d":"2015-03-31","v":49.49},{"d":"2015-04-01","v":49.11},{"d":"2015-04-02","v":49.04},{"d":"2015-04-03","v":49.04},{"d":"2015-04-06","v":49.04},{"d":"2015-04-07","v":50.17},{"d":"2015-04-08","v":50.65},{"d":"2015-04-09","v":51.06},{"d":"2015-04-10","v":51.38},{"d":"2015-04-13","v":51.1},{"d":"2015-04-14","v":51.05},{"d":"2015-04-15","v":51.05},{"d":"2015-04-16","v":50.66},{"d":"2015-04-17","v":49.75},{"d":"2015-04-20","v":50.04},{"d":"2015-04-21","v":50.57},{"d":"2015-04-22","v":50.86},{"d":"2015-04-23","v":50.76},{"d":"2015-04-24","v":51.26},{"d":"2015-04-27","v":51.34},{"d":"2015-04-28","v":51.52},{"d":"2015-04-29","v":50.17},{"d":"2015-04-30","v":49.8},{"d":"2015-05-01","v":49.8},{"d":"2015-05-04","v":49.95},{"d":"2015-05-05","v":48.27},{"d":"2015-05-06","v":47.59},{"d":"2015-05-07","v":47.76},{"d":"2015-05-08","v":48.96},{"d":"2015-05-11","v":48.73},{"d":"2015-05-12","v":48.39},{"d":"2015-05-13","v":48.46},{"d":"2015-05-14","v":48.46},{"d":"2015-05-15","v":49.05},{"d":"2015-05-18","v":49.18},{"d":"2015-05-19","v":49.84},{"d":"2015-05-20","v":49.75},{"d":"2015-05-21","v":49.78},{"d":"2015-05-22","v":50.21},{"d":"2015-05-25","v":50.21},{"d":"2015-05-26","v":50},{"d":"2015-05-27","v":50.32},{"d":"2015-05-28","v":49.6},{"d":"2015-05-29","v":49.34},{"d":"2015-06-01","v":49.66},{"d":"2015-06-02","v":48.75},{"d":"2015-06-03","v":49.02},{"d":"2015-06-04","v":48.5},{"d":"2015-06-05","v":48.66},{"d":"2015-06-08","v":47.93},{"d":"2015-06-09","v":47.36},{"d":"2015-06-10","v":48.24},{"d":"2015-06-11","v":48.59},{"d":"2015-06-12","v":47.94},{"d":"2015-06-15","v":48.35},{"d":"2015-06-16","v":48.07},{"d":"2015-06-17","v":47.75},{"d":"2015-06-18","v":47.46},{"d":"2015-06-19","v":47.71},{"d":"2015-06-22","v":48.08},{"d":"2015-06-23","v":49.22},{"d":"2015-06-24","v":48.95},{"d":"2015-06-25","v":49.22},{"d":"2015-06-26","v":48.74},{"d":"2015-06-29","v":47.52},{"d":"2015-06-30","v":48.02},{"d":"2015-07-01","v":48.73},{"d":"2015-07-02","v":48.77},{"d":"2015-07-03","v":48.43},{"d":"2015-07-06","v":48.21},{"d":"2015-07-07","v":47.96},{"d":"2015-07-08","v":46.95},{"d":"2015-07-09","v":47.35},{"d":"2015-07-10","v":48.13},{"d":"2015-07-13","v":48.59},{"d":"2015-07-14","v":48.48},{"d":"2015-07-15","v":48.93},{"d":"2015-07-16","v":49.3},{"d":"2015-07-17","v":49.58},{"d":"2015-07-20","v":49.87},{"d":"2015-07-21","v":49.39},{"d":"2015-07-22","v":49.23},{"d":"2015-07-23","v":49.11},{"d":"2015-07-24","v":48.77},{"d":"2015-07-27","v":48.63},{"d":"2015-07-28","v":48.7},{"d":"2015-07-29","v":48.95},{"d":"2015-07-30","v":49.28},{"d":"2015-07-31","v":49.56},{"d":"2015-08-03","v":49.34},{"d":"2015-08-04","v":49.73},{"d":"2015-08-05","v":50.48},{"d":"2015-08-06","v":49.88},{"d":"2015-08-07","v":49.98},{"d":"2015-08-10","v":50.84},{"d":"2015-08-11","v":49.72},{"d":"2015-08-12","v":48.14},{"d":"2015-08-13","v":49.08},{"d":"2015-08-14","v":49.1},{"d":"2015-08-17","v":49.29},{"d":"2015-08-18","v":48.94},{"d":"2015-08-19","v":48.04},{"d":"2015-08-20","v":47.33},{"d":"2015-08-21","v":44.96},{"d":"2015-08-24","v":41.86},{"d":"2015-08-25","v":44.44},{"d":"2015-08-26","v":43.83},{"d":"2015-08-27","v":46.11},{"d":"2015-08-28","v":46.04},{"d":"2015-08-31","v":45.78},{"d":"2015-09-01","v":43.73},{"d":"2015-09-02","v":44.19},{"d":"2015-09-03","v":45.23},{"d":"2015-09-04","v":43.85},{"d":"2015-09-07","v":43.95},{"d":"2015-09-08","v":44.88},{"d":"2015-09-09","v":45.45},{"d":"2015-09-10","v":44.59},{"d":"2015-09-11","v":44.52},{"d":"2015-09-14","v":44.55},{"d":"2015-09-15","v":44.76},{"d":"2015-09-16","v":45.35},{"d":"2015-09-17","v":45.16},{"d":"2015-09-18","v":44.12},{"d":"2015-09-21","v":44.54},{"d":"2015-09-22","v":43.61},{"d":"2015-09-23","v":43.79},{"d":"2015-09-24","v":42.86},{"d":"2015-09-25","v":45.16},{"d":"2015-09-28","v":43.54},{"d":"2015-09-29","v":42.58},{"d":"2015-09-30","v":43.56},{"d":"2015-10-01","v":43.83},{"d":"2015-10-02","v":43.74},{"d":"2015-10-05","v":45.56},{"d":"2015-10-06","v":45.17},{"d":"2015-10-07","v":46.11},{"d":"2015-10-08","v":45.78},{"d":"2015-10-09","v":46.01},{"d":"2015-10-12","v":46.02},{"d":"2015-10-13","v":45.68},{"d":"2015-10-14","v":44.8},{"d":"2015-10-15","v":45.72},{"d":"2015-10-16","v":45.9},{"d":"2015-10-19","v":45.75},{"d":"2015-10-20","v":45.58},{"d":"2015-10-21","v":46.18},{"d":"2015-10-22","v":47.44},{"d":"2015-10-23","v":48.05},{"d":"2015-10-26","v":48.25},{"d":"2015-10-27","v":48.06},{"d":"2015-10-28","v":48.31},{"d":"2015-10-29","v":47.92},{"d":"2015-10-30","v":47.63},{"d":"2015-11-02","v":47.43},{"d":"2015-11-03","v":48.05},{"d":"2015-11-04","v":48.03},{"d":"2015-11-05","v":48.27},{"d":"2015-11-06","v":48.34},{"d":"2015-11-09","v":47.86},{"d":"2015-11-10","v":48.37},{"d":"2015-11-11","v":48.66},{"d":"2015-11-12","v":48.27},{"d":"2015-11-13","v":48.2},{"d":"2015-11-16","v":48.21},{"d":"2015-11-17","v":49.19},{"d":"2015-11-18","v":49.34},{"d":"2015-11-19","v":49.67},{"d":"2015-11-20","v":50.08},{"d":"2015-11-23","v":50.16},{"d":"2015-11-24","v":49.74},{"d":"2015-11-25","v":49.95},{"d":"2015-11-26","v":50.38},{"d":"2015-11-27","v":50.39},{"d":"2015-11-30","v":49.66},{"d":"2015-12-01","v":50.53},{"d":"2015-12-02","v":50.34},{"d":"2015-12-03","v":48.7},{"d":"2015-12-04","v":48.31},{"d":"2015-12-07","v":48.3},{"d":"2015-12-08","v":47.2},{"d":"2015-12-09","v":47.19},{"d":"2015-12-10","v":47.3},{"d":"2015-12-11","v":46.09},{"d":"2015-12-14","v":46.36},{"d":"2015-12-15","v":46.38},{"d":"2015-12-16","v":46.73},{"d":"2015-12-17","v":47.47},{"d":"2015-12-18","v":46.95},{"d":"2015-12-21","v":46.86},{"d":"2015-12-22","v":46.71},{"d":"2015-12-23","v":47.9},{"d":"2015-12-24","v":47.9},{"d":"2015-12-25","v":47.9},{"d":"2015-12-28","v":47.32},{"d":"2015-12-29","v":48.32},{"d":"2015-12-30","v":48.07},{"d":"2015-12-31","v":48.07},{"d":"2016-01-01","v":48.07},{"d":"2016-01-04","v":47.17},{"d":"2016-01-05","v":47.92},{"d":"2016-01-06","v":47.12},{"d":"2016-01-07","v":46.02},{"d":"2016-01-08","v":45.36},{"d":"2016-01-11","v":44.75},{"d":"2016-01-12","v":44.77},{"d":"2016-01-13","v":45.38},{"d":"2016-01-14","v":44.96},{"d":"2016-01-15","v":43.46},{"d":"2016-01-18","v":43.82},{"d":"2016-01-19","v":44.26},{"d":"2016-01-20","v":43.09},{"d":"2016-01-21","v":43.15},{"d":"2016-01-22","v":44.67},{"d":"2016-01-25","v":44.71},{"d":"2016-01-26","v":43.84},{"d":"2016-01-27","v":45},{"d":"2016-01-28","v":44.65},{"d":"2016-01-29","v":45.81},{"d":"2016-02-01","v":45.69},{"d":"2016-02-02","v":45.21},{"d":"2016-02-03","v":43.91},{"d":"2016-02-04","v":43.89},{"d":"2016-02-05","v":43.03},{"d":"2016-02-08","v":43.29},{"d":"2016-02-09","v":41.23},{"d":"2016-02-10","v":41.14},{"d":"2016-02-11","v":41.26},{"d":"2016-02-12","v":40.29},{"d":"2016-02-15","v":42.18},{"d":"2016-02-16","v":42.16},{"d":"2016-02-17","v":43},{"d":"2016-02-18","v":43.39},{"d":"2016-02-19","v":42.87},{"d":"2016-02-22","v":44.19},{"d":"2016-02-23","v":43.16},{"d":"2016-02-24","v":42.28},{"d":"2016-02-25","v":43.16},{"d":"2016-02-26","v":44.03},{"d":"2016-02-29","v":43.58},{"d":"2016-03-01","v":44.27},{"d":"2016-03-02","v":45.13},{"d":"2016-03-03","v":45.3},{"d":"2016-03-04","v":46.08},{"d":"2016-03-07","v":46.01},{"d":"2016-03-08","v":45.34},{"d":"2016-03-09","v":45.7},{"d":"2016-03-10","v":44.94},{"d":"2016-03-11","v":45.91},{"d":"2016-03-14","v":46.65},{"d":"2016-03-15","v":45.39},{"d":"2016-03-16","v":45.49},{"d":"2016-03-17","v":45.21},{"d":"2016-03-18","v":45.42},{"d":"2016-03-21","v":45.31},{"d":"2016-03-22","v":45.65},{"d":"2016-03-23","v":45.3},{"d":"2016-03-24","v":44.79},{"d":"2016-03-25","v":44.79},{"d":"2016-03-28","v":44.79},{"d":"2016-03-29","v":45.15},{"d":"2016-03-30","v":45.41},{"d":"2016-03-31","v":44.79},{"d":"2016-04-01","v":43.73},{"d":"2016-04-04","v":43.64},{"d":"2016-04-05","v":43.22},{"d":"2016-04-06","v":42.87},{"d":"2016-04-07","v":42.84},{"d":"2016-04-08","v":43.75},{"d":"2016-04-11","v":43.71},{"d":"2016-04-12","v":44.56},{"d":"2016-04-13","v":45.96},{"d":"2016-04-14","v":46.63},{"d":"2016-04-15","v":46.37},{"d":"2016-04-18","v":46.37},{"d":"2016-04-19","v":47.05},{"d":"2016-04-20","v":47.59},{"d":"2016-04-21","v":47.81},{"d":"2016-04-22","v":47.94},{"d":"2016-04-25","v":47.57},{"d":"2016-04-26","v":47.41},{"d":"2016-04-27","v":47.02},{"d":"2016-04-28","v":46.33},{"d":"2016-04-29","v":44.98},{"d":"2016-05-02","v":45.22},{"d":"2016-05-03","v":45.37},{"d":"2016-05-04","v":44.41},{"d":"2016-05-05","v":44.41},{"d":"2016-05-06","v":45.44},{"d":"2016-05-09","v":45.42},{"d":"2016-05-10","v":46.4},{"d":"2016-05-11","v":46.04},{"d":"2016-05-12","v":45.77},{"d":"2016-05-13","v":45.82},{"d":"2016-05-16","v":45.82},{"d":"2016-05-17","v":46.24},{"d":"2016-05-18","v":46.53},{"d":"2016-05-19","v":46.05},{"d":"2016-05-20","v":46.66},{"d":"2016-05-23","v":46.48},{"d":"2016-05-24","v":46.75},{"d":"2016-05-25","v":46.97},{"d":"2016-05-26","v":46.89},{"d":"2016-05-27","v":47.08},{"d":"2016-05-30","v":47.1},{"d":"2016-05-31","v":47.77},{"d":"2016-06-01","v":47},{"d":"2016-06-02","v":46.71},{"d":"2016-06-03","v":46.36},{"d":"2016-06-06","v":46.8},{"d":"2016-06-07","v":47.02},{"d":"2016-06-08","v":46.82},{"d":"2016-06-09","v":46.46},{"d":"2016-06-10","v":46.34},{"d":"2016-06-13","v":45.28},{"d":"2016-06-14","v":44.34},{"d":"2016-06-15","v":44.89},{"d":"2016-06-16","v":44.43},{"d":"2016-06-17","v":44.37},{"d":"2016-06-20","v":45.9},{"d":"2016-06-21","v":46.04},{"d":"2016-06-22","v":45.94},{"d":"2016-06-23","v":46.07},{"d":"2016-06-24","v":44.99},{"d":"2016-06-27","v":44.69},{"d":"2016-06-28","v":45.54},{"d":"2016-06-29","v":46.43},{"d":"2016-06-30","v":46.1},{"d":"2016-07-01","v":46.22},{"d":"2016-07-04","v":46.46},{"d":"2016-07-05","v":46.06},{"d":"2016-07-06","v":45.91},{"d":"2016-07-07","v":46.25},{"d":"2016-07-08","v":46.89},{"d":"2016-07-11","v":47.53},{"d":"2016-07-12","v":48.55},{"d":"2016-07-13","v":48.17},{"d":"2016-07-14","v":48.4},{"d":"2016-07-15","v":48.29},{"d":"2016-07-18","v":48.32},{"d":"2016-07-19","v":48.19},{"d":"2016-07-20","v":48.68},{"d":"2016-07-21","v":48.51},{"d":"2016-07-22","v":48.49},{"d":"2016-07-25","v":48.31},{"d":"2016-07-26","v":48.81},{"d":"2016-07-27","v":48.88},{"d":"2016-07-28","v":48.08},{"d":"2016-07-29","v":48.38},{"d":"2016-08-01","v":48.38},{"d":"2016-08-02","v":47.89},{"d":"2016-08-03","v":47.77},{"d":"2016-08-04","v":48.38},{"d":"2016-08-05","v":49.01},{"d":"2016-08-08","v":49.58},{"d":"2016-08-09","v":49.78},{"d":"2016-08-10","v":49.57},{"d":"2016-08-11","v":49.64},{"d":"2016-08-12","v":49.59},{"d":"2016-08-15","v":49.74},{"d":"2016-08-16","v":48.85},{"d":"2016-08-17","v":48.89},{"d":"2016-08-18","v":48.63},{"d":"2016-08-19","v":48.54},{"d":"2016-08-22","v":48.73},{"d":"2016-08-23","v":49.08},{"d":"2016-08-24","v":49.31},{"d":"2016-08-25","v":49.19},{"d":"2016-08-26","v":49.15},{"d":"2016-08-29","v":49.3},{"d":"2016-08-30","v":49.45},{"d":"2016-08-31","v":49.26},{"d":"2016-09-01","v":49.42},{"d":"2016-09-02","v":49.89},{"d":"2016-09-05","v":49.91},{"d":"2016-09-06","v":49.9},{"d":"2016-09-07","v":49.98},{"d":"2016-09-08","v":50.15},{"d":"2016-09-09","v":49.53},{"d":"2016-09-12","v":49.01},{"d":"2016-09-13","v":48.42},{"d":"2016-09-14","v":48.22},{"d":"2016-09-15","v":48.55},{"d":"2016-09-16","v":48.61},{"d":"2016-09-19","v":49.09},{"d":"2016-09-20","v":49.37},{"d":"2016-09-21","v":50.14},{"d":"2016-09-22","v":50.5},{"d":"2016-09-23","v":50.21},{"d":"2016-09-26","v":49.5},{"d":"2016-09-27","v":50.19},{"d":"2016-09-28","v":50.09},{"d":"2016-09-29","v":49.95},{"d":"2016-09-30","v":50.07},{"d":"2016-10-03","v":50.01},{"d":"2016-10-04","v":50.72},{"d":"2016-10-05","v":50.22},{"d":"2016-10-06","v":50.18},{"d":"2016-10-07","v":50.11},{"d":"2016-10-10","v":50.13},{"d":"2016-10-11","v":50.19},{"d":"2016-10-12","v":50.22},{"d":"2016-10-13","v":49.78},{"d":"2016-10-14","v":50.25},{"d":"2016-10-17","v":50.13},{"d":"2016-10-18","v":50.54},{"d":"2016-10-19","v":50.84},{"d":"2016-10-20","v":50.85},{"d":"2016-10-21","v":50.98},{"d":"2016-10-24","v":51.09},{"d":"2016-10-25","v":51.17},{"d":"2016-10-26","v":51.18},{"d":"2016-10-27","v":50.84},{"d":"2016-10-28","v":50.74},{"d":"2016-10-31","v":50.68},{"d":"2016-11-01","v":49.92},{"d":"2016-11-02","v":49.36},{"d":"2016-11-03","v":49.75},{"d":"2016-11-04","v":48.83},{"d":"2016-11-07","v":49.6},{"d":"2016-11-08","v":49.6},{"d":"2016-11-09","v":48.76},{"d":"2016-11-10","v":49.79},{"d":"2016-11-11","v":49.65},{"d":"2016-11-14","v":50.23},{"d":"2016-11-15","v":50.5},{"d":"2016-11-16","v":50.49},{"d":"2016-11-17","v":50.98},{"d":"2016-11-18","v":51.08},{"d":"2016-11-21","v":51},{"d":"2016-11-22","v":51.2},{"d":"2016-11-23","v":51.44},{"d":"2016-11-24","v":51.38},{"d":"2016-11-25","v":51.32},{"d":"2016-11-28","v":51.95},{"d":"2016-11-29","v":51.73},{"d":"2016-11-30","v":51.87},{"d":"2016-12-01","v":51.36},{"d":"2016-12-02","v":51.23},{"d":"2016-12-05","v":51.39},{"d":"2016-12-06","v":51.28},{"d":"2016-12-07","v":51.79},{"d":"2016-12-08","v":52.65},{"d":"2016-12-09","v":52.97},{"d":"2016-12-12","v":52.58},{"d":"2016-12-13","v":52.35},{"d":"2016-12-14","v":52.48},{"d":"2016-12-15","v":52.78},{"d":"2016-12-16","v":52.14},{"d":"2016-12-19","v":52.28},{"d":"2016-12-20","v":52.69},{"d":"2016-12-21","v":52.23},{"d":"2016-12-22","v":52.27},{"d":"2016-12-23","v":52.12},{"d":"2016-12-26","v":52.12},{"d":"2016-12-27","v":52.1},{"d":"2016-12-28","v":52.29},{"d":"2016-12-29","v":51.73},{"d":"2016-12-30","v":51.2},{"d":"2017-01-02","v":51.2},{"d":"2017-01-03","v":52.37},{"d":"2017-01-04","v":52.69},{"d":"2017-01-05","v":52.66},{"d":"2017-01-06","v":52.78},{"d":"2017-01-09","v":52.73},{"d":"2017-01-10","v":53},{"d":"2017-01-11","v":52.98},{"d":"2017-01-12","v":53.38},{"d":"2017-01-13","v":53.14},{"d":"2017-01-16","v":52.95},{"d":"2017-01-17","v":52.39},{"d":"2017-01-18","v":52.43},{"d":"2017-01-19","v":53.01},{"d":"2017-01-20","v":52.68},{"d":"2017-01-23","v":52.26},{"d":"2017-01-24","v":52.41},{"d":"2017-01-25","v":52.87},{"d":"2017-01-26","v":53.23},{"d":"2017-01-27","v":52.86},{"d":"2017-01-30","v":53.17},{"d":"2017-01-31","v":51.76},{"d":"2017-02-01","v":52.4},{"d":"2017-02-02","v":52.29},{"d":"2017-02-03","v":52.67},{"d":"2017-02-06","v":52.83},{"d":"2017-02-07","v":52.69},{"d":"2017-02-08","v":52.68},{"d":"2017-02-09","v":53.12},{"d":"2017-02-10","v":53.68},{"d":"2017-02-13","v":53.94},{"d":"2017-02-14","v":53.64},{"d":"2017-02-15","v":53.94},{"d":"2017-02-16","v":53.49},{"d":"2017-02-17","v":53.56},{"d":"2017-02-20","v":54.37},{"d":"2017-02-21","v":54.42},{"d":"2017-02-22","v":54.69},{"d":"2017-02-23","v":54.5},{"d":"2017-02-24","v":54.43},{"d":"2017-02-27","v":54.01},{"d":"2017-02-28","v":54.1},{"d":"2017-03-01","v":54.7},{"d":"2017-03-02","v":54.73},{"d":"2017-03-03","v":54.63},{"d":"2017-03-06","v":54.28},{"d":"2017-03-07","v":54.53},{"d":"2017-03-08","v":54.22},{"d":"2017-03-09","v":54.06},{"d":"2017-03-10","v":54.15},{"d":"2017-03-13","v":54.28},{"d":"2017-03-14","v":53.92},{"d":"2017-03-15","v":54.34},{"d":"2017-03-16","v":54.2},{"d":"2017-03-17","v":54.23},{"d":"2017-03-20","v":54.43},{"d":"2017-03-21","v":53.86},{"d":"2017-03-22","v":53.27},{"d":"2017-03-23","v":53.65},{"d":"2017-03-24","v":53.86},{"d":"2017-03-27","v":53.19},{"d":"2017-03-28","v":53.86},{"d":"2017-03-29","v":54.99},{"d":"2017-03-30","v":54.6},{"d":"2017-03-31","v":54.21},{"d":"2017-04-03","v":54.35},{"d":"2017-04-04","v":53.91},{"d":"2017-04-05","v":54.44},{"d":"2017-04-06","v":54.35},{"d":"2017-04-07","v":54.21},{"d":"2017-04-10","v":54.25},{"d":"2017-04-11","v":54.49},{"d":"2017-04-12","v":54.12},{"d":"2017-04-13","v":54.08},{"d":"2017-04-14","v":54.08},{"d":"2017-04-17","v":54.08},{"d":"2017-04-18","v":53.54},{"d":"2017-04-19","v":53.55},{"d":"2017-04-20","v":53.72},{"d":"2017-04-21","v":54.15},{"d":"2017-04-24","v":54.15},{"d":"2017-04-25","v":54.43},{"d":"2017-04-26","v":54.47},{"d":"2017-04-27","v":54.36},{"d":"2017-04-28","v":54.3},{"d":"2017-05-01","v":54.3},{"d":"2017-05-02","v":54.61},{"d":"2017-05-03","v":54.25},{"d":"2017-05-04","v":54.21},{"d":"2017-05-05","v":54.16},{"d":"2017-05-08","v":54.83},{"d":"2017-05-09","v":55.25},{"d":"2017-05-10","v":55.33},{"d":"2017-05-11","v":55.02},{"d":"2017-05-12","v":54.81},{"d":"2017-05-15","v":54.82},{"d":"2017-05-16","v":54.34},{"d":"2017-05-17","v":53.57},{"d":"2017-05-18","v":53.6},{"d":"2017-05-19","v":53.76},{"d":"2017-05-22","v":53.74},{"d":"2017-05-23","v":54.05},{"d":"2017-05-24","v":53.98},{"d":"2017-05-25","v":53.98},{"d":"2017-05-26","v":53.86},{"d":"2017-05-29","v":53.85},{"d":"2017-05-30","v":53.99},{"d":"2017-05-31","v":53.62},{"d":"2017-06-01","v":54.03},{"d":"2017-06-02","v":54.52},{"d":"2017-06-05","v":54.52},{"d":"2017-06-06","v":54.44},{"d":"2017-06-07","v":54.5},{"d":"2017-06-08","v":54.5},{"d":"2017-06-09","v":54.53},{"d":"2017-06-12","v":54.51},{"d":"2017-06-13","v":54.7},{"d":"2017-06-14","v":55},{"d":"2017-06-15","v":55},{"d":"2017-06-16","v":54.73},{"d":"2017-06-19","v":55.1},{"d":"2017-06-20","v":54.99},{"d":"2017-06-21","v":54.66},{"d":"2017-06-22","v":54.74},{"d":"2017-06-23","v":54.55},{"d":"2017-06-26","v":54.69},{"d":"2017-06-27","v":54.1},{"d":"2017-06-28","v":54.1}]}},{"instrumentId":152,"timeSeries":{"entries":[{"d":"2010-01-01","v":1154.2398},{"d":"2010-01-04","v":1167.3556649999998},{"d":"2010-01-05","v":1174.763755},{"d":"2010-01-06","v":1169.1093649999998},{"d":"2010-01-07","v":1181.6952150000002},{"d":"2010-01-08","v":1172.9103749999997},{"d":"2010-01-11","v":1165.828895},{"d":"2010-01-12","v":1157.34295},{"d":"2010-01-13","v":1167.92049},{"d":"2010-01-14","v":1170.9643050000002},{"d":"2010-01-15","v":1165.32138},{"d":"2010-01-18","v":1164.6395400000001},{"d":"2010-01-19","v":1188.16709},{"d":"2010-01-20","v":1188.954655},{"d":"2010-01-21","v":1164.64005},{"d":"2010-01-22","v":1137.0399149999998},{"d":"2010-01-25","v":1141.3335749999999},{"d":"2010-01-26","v":1143.4372549999998},{"d":"2010-01-27","v":1152.391275},{"d":"2010-01-28","v":1142.5363949999996},{"d":"2010-01-29","v":1139.139425},{"d":"2010-02-01","v":1151.6190699999997},{"d":"2010-02-02","v":1164.78495},{"d":"2010-02-03","v":1162.715295},{"d":"2010-02-04","v":1135.5551400000002},{"d":"2010-02-05","v":1144.19515},{"d":"2010-02-08","v":1135.9349750000001},{"d":"2010-02-09","v":1140.98163},{"d":"2010-02-10","v":1142.492265},{"d":"2010-02-11","v":1157.693845},{"d":"2010-02-12","v":1161.48402},{"d":"2010-02-15","v":1164.2930600000002},{"d":"2010-02-16","v":1170.3222299999998},{"d":"2010-02-17","v":1189.09897},{"d":"2010-02-18","v":1204.7598749999997},{"d":"2010-02-19","v":1195.4774100000002},{"d":"2010-02-22","v":1195.8037},{"d":"2010-02-23","v":1189.846255},{"d":"2010-02-24","v":1197.90879},{"d":"2010-02-25","v":1196.066025},{"d":"2010-02-26","v":1188.9600099999998},{"d":"2010-03-01","v":1206.9014850000003},{"d":"2010-03-02","v":1206.6549},{"d":"2010-03-03","v":1199.30785},{"d":"2010-03-04","v":1213.3125315000002},{"d":"2010-03-05","v":1227.102125},{"d":"2010-03-08","v":1226.8598550000002},{"d":"2010-03-09","v":1230.50223},{"d":"2010-03-10","v":1230.236485},{"d":"2010-03-11","v":1233.640975},{"d":"2010-03-12","v":1221.2781499999999},{"d":"2010-03-15","v":1226.5615449999998},{"d":"2010-03-16","v":1228.532935},{"d":"2010-03-17","v":1234.52675},{"d":"2010-03-18","v":1237.9641562499999},{"d":"2010-03-19","v":1230.963565},{"d":"2010-03-22","v":1233.60694625},{"d":"2010-03-23","v":1241.7868649999998},{"d":"2010-03-24","v":1252.7000600000001},{"d":"2010-03-25","v":1253.3459249999999},{"d":"2010-03-26","v":1241.773173},{"d":"2010-03-29","v":1246.93562},{"d":"2010-03-30","v":1251.3079},{"d":"2010-03-31","v":1233.0045},{"d":"2010-04-01","v":1241.6708999999998},{"d":"2010-04-02","v":1250.6236999999999},{"d":"2010-04-05","v":1261.7656200000001},{"d":"2010-04-06","v":1272.7161600000002},{"d":"2010-04-07","v":1271.00886},{"d":"2010-04-08","v":1274.60708375},{"d":"2010-04-09","v":1274.223675},{"d":"2010-04-12","v":1269.1841299999999},{"d":"2010-04-13","v":1262.8284549999998},{"d":"2010-04-14","v":1274.615825},{"d":"2010-04-15","v":1280.761755},{"d":"2010-04-16","v":1266.94672},{"d":"2010-04-19","v":1273.400585},{"d":"2010-04-20","v":1290.93796},{"d":"2010-04-21","v":1291.3636499999998},{"d":"2010-04-22","v":1305.01917},{"d":"2010-04-23","v":1306.4999687499999},{"d":"2010-04-26","v":1300.204575},{"d":"2010-04-27","v":1289.951},{"d":"2010-04-28","v":1296.04897},{"d":"2010-04-29","v":1309.1888687500002},{"d":"2010-04-30","v":1280.50171875},{"d":"2010-05-03","v":1307.061175},{"d":"2010-05-04","v":1297.83212},{"d":"2010-05-05","v":1305.7555499999999},{"d":"2010-05-06","v":1257.213873},{"d":"2010-05-07","v":1232.4826500000001},{"d":"2010-05-10","v":1289.20176},{"d":"2010-05-11","v":1288.5508349999998},{"d":"2010-05-12","v":1304.2235249999999},{"d":"2010-05-13","v":1297.4061449999997},{"d":"2010-05-14","v":1290.5445350000002},{"d":"2010-05-17","v":1288.7175249999998},{"d":"2010-05-18","v":1293.1058},{"d":"2010-05-19","v":1286.3017200000002},{"d":"2010-05-20","v":1238.4844100000003},{"d":"2010-05-21","v":1253.4585624999997},{"d":"2010-05-24","v":1250.2438249999998},{"d":"2010-05-25","v":1245.136173},{"d":"2010-05-26","v":1243.9757749999999},{"d":"2010-05-27","v":1275.7890600000003},{"d":"2010-05-28","v":1267.7507635},{"d":"2010-05-31","v":1263.5400570000002},{"d":"2010-06-01","v":1244.4984550000001},{"d":"2010-06-02","v":1274.0356749999999},{"d":"2010-06-03","v":1280.8593449999998},{"d":"2010-06-04","v":1242.3700099999996},{"d":"2010-06-07","v":1227.3234049999999},{"d":"2010-06-08","v":1229.7017700000001},{"d":"2010-06-09","v":1217.825175},{"d":"2010-06-10","v":1248.075675},{"d":"2010-06-11","v":1260.8264400000003},{"d":"2010-06-14","v":1251.5236065},{"d":"2010-06-15","v":1269.8},{"d":"2010-06-16","v":1266.99534},{"d":"2010-06-17","v":1247.1650100000002},{"d":"2010-06-18","v":1238.5718295},{"d":"2010-06-21","v":1238.266445},{"d":"2010-06-22","v":1213.4329649999997},{"d":"2010-06-23","v":1207.373805},{"d":"2010-06-24","v":1183.82211},{"d":"2010-06-25","v":1178.7221062500003},{"d":"2010-06-28","v":1168.689805},{"d":"2010-06-29","v":1127.5000949999999},{"d":"2010-06-30","v":1112.55677},{"d":"2010-07-01","v":1088.8963400000002},{"d":"2010-07-02","v":1086.2327},{"d":"2010-07-05","v":1088.3789000000002},{"d":"2010-07-06","v":1090.0619550000001},{"d":"2010-07-07","v":1116.62227625},{"d":"2010-07-08","v":1124.69778},{"d":"2010-07-09","v":1141.8389399999999},{"d":"2010-07-12","v":1145.7121650000001},{"d":"2010-07-13","v":1156.30987},{"d":"2010-07-14","v":1152.7061375},{"d":"2010-07-15","v":1142.3720400000002},{"d":"2010-07-16","v":1120.62329},{"d":"2010-07-19","v":1131.3194050000002},{"d":"2010-07-20","v":1141.15536},{"d":"2010-07-21","v":1124.9309549999998},{"d":"2010-07-22","v":1142.0613434999998},{"d":"2010-07-23","v":1165.2119349999998},{"d":"2010-07-26","v":1170.2086199999999},{"d":"2010-07-27","v":1182.374225},{"d":"2010-07-28","v":1171.196025},{"d":"2010-07-29","v":1148.3946250000001},{"d":"2010-07-30","v":1147.635025},{"d":"2010-08-02","v":1171.7455400000001},{"d":"2010-08-03","v":1166.58301},{"d":"2010-08-04","v":1190.195435},{"d":"2010-08-05","v":1180.805975},{"d":"2010-08-06","v":1167.3595080000002},{"d":"2010-08-09","v":1185.2295840000002},{"d":"2010-08-10","v":1177.8585624999998},{"d":"2010-08-11","v":1159.1811500000001},{"d":"2010-08-12","v":1140.452055},{"d":"2010-08-13","v":1138.175635},{"d":"2010-08-16","v":1125.3085700000001},{"d":"2010-08-17","v":1143.516855},{"d":"2010-08-18","v":1144.505855},{"d":"2010-08-19","v":1113.69918},{"d":"2010-08-20","v":1111.698905},{"d":"2010-08-23","v":1115.5316085999998},{"d":"2010-08-24","v":1088.85854},{"d":"2010-08-25","v":1090.81121},{"d":"2010-08-26","v":1077.502585},{"d":"2010-08-27","v":1098.03993},{"d":"2010-08-30","v":1080.2275825000002},{"d":"2010-08-31","v":1068.106675},{"d":"2010-09-01","v":1101.7909099999997},{"d":"2010-09-02","v":1109.095305},{"d":"2010-09-03","v":1127.0305150000002},{"d":"2010-09-06","v":1121.2087900000001},{"d":"2010-09-07","v":1108.8441400000002},{"d":"2010-09-08","v":1116.631535},{"d":"2010-09-09","v":1126.1153},{"d":"2010-09-10","v":1136.614731},{"d":"2010-09-13","v":1135.71036},{"d":"2010-09-14","v":1121.937675},{"d":"2010-09-15","v":1134.1358599999999},{"d":"2010-09-16","v":1148.4184249999998},{"d":"2010-09-17","v":1135.7552849999997},{"d":"2010-09-20","v":1147.867605},{"d":"2010-09-21","v":1136.66555},{"d":"2010-09-22","v":1119.28527},{"d":"2010-09-23","v":1108.949035},{"d":"2010-09-24","v":1130.46031},{"d":"2010-09-27","v":1126.645065},{"d":"2010-09-28","v":1119.0071950000001},{"d":"2010-09-29","v":1118.429135},{"d":"2010-09-30","v":1122.411485},{"d":"2010-10-01","v":1116.0148749999998},{"d":"2010-10-04","v":1104.683125},{"d":"2010-10-05","v":1121.58462},{"d":"2010-10-06","v":1116.034555},{"d":"2010-10-07","v":1120.0189050000001},{"d":"2010-10-08","v":1122.02305},{"d":"2010-10-11","v":1124.914275},{"d":"2010-10-12","v":1120.4292550000002},{"d":"2010-10-13","v":1130.0863200000001},{"d":"2010-10-14","v":1119.3350699999999},{"d":"2010-10-15","v":1128.21335},{"d":"2010-10-18","v":1136.38371},{"d":"2010-10-19","v":1132.923015},{"d":"2010-10-20","v":1134.086205},{"d":"2010-10-21","v":1142.848685},{"d":"2010-10-22","v":1158.6763035},{"d":"2010-10-25","v":1152.87375},{"d":"2010-10-26","v":1168.3828800000001},{"d":"2010-10-27","v":1172.02119},{"d":"2010-10-28","v":1164.0496},{"d":"2010-10-29","v":1164.04576},{"d":"2010-11-01","v":1175.758335},{"d":"2010-11-02","v":1170.0784125},{"d":"2010-11-03","v":1165.614125},{"d":"2010-11-04","v":1171.8009700000002},{"d":"2010-11-05","v":1179.8167875000001},{"d":"2010-11-08","v":1183.314645},{"d":"2010-11-09","v":1177.123995},{"d":"2010-11-10","v":1184.79735},{"d":"2010-11-11","v":1186.2453375},{"d":"2010-11-12","v":1178.721687},{"d":"2010-11-15","v":1182.235485},{"d":"2010-11-16","v":1177.64164},{"d":"2010-11-17","v":1172.190579},{"d":"2010-11-18","v":1194.59676375},{"d":"2010-11-19","v":1193.5775250000002},{"d":"2010-11-22","v":1187.417105},{"d":"2010-11-23","v":1180.50700875},{"d":"2010-11-24","v":1197.3723},{"d":"2010-11-25","v":1202.4207000000001},{"d":"2010-11-26","v":1191.8609999999999},{"d":"2010-11-29","v":1192.7520390000002},{"d":"2010-11-30","v":1189.3684687500001},{"d":"2010-12-01","v":1213.790805},{"d":"2010-12-02","v":1216.89824},{"d":"2010-12-03","v":1196.8871550000001},{"d":"2010-12-06","v":1205.8101000000001},{"d":"2010-12-07","v":1213.253325},{"d":"2010-12-08","v":1215.2326},{"d":"2010-12-09","v":1216.7464400000001},{"d":"2010-12-10","v":1221.3355199999999},{"d":"2010-12-13","v":1206.30132},{"d":"2010-12-14","v":1196.395655},{"d":"2010-12-15","v":1200.586101},{"d":"2010-12-16","v":1204.07613},{"d":"2010-12-17","v":1204.15625},{"d":"2010-12-20","v":1202.6391999999998},{"d":"2010-12-21","v":1201.6750650000001},{"d":"2010-12-22","v":1197.23693},{"d":"2010-12-23","v":1204.818},{"d":"2010-12-24","v":1209.1512},{"d":"2010-12-27","v":1206.554125},{"d":"2010-12-28","v":1197.838685},{"d":"2010-12-29","v":1188.9996},{"d":"2010-12-30","v":1175.73344},{"d":"2010-12-31","v":1171.801375},{"d":"2011-01-03","v":1186.4564249999999},{"d":"2011-01-04","v":1203.5799299999999},{"d":"2011-01-05","v":1232.93858},{"d":"2011-01-06","v":1229.7593650000001},{"d":"2011-01-07","v":1229.8252200000002},{"d":"2011-01-10","v":1228.9759299999998},{"d":"2011-01-11","v":1240.7221950000003},{"d":"2011-01-12","v":1242.9185700000003},{"d":"2011-01-13","v":1238.0403537500001},{"d":"2011-01-14","v":1246.12875},{"d":"2011-01-17","v":1247.8743},{"d":"2011-01-18","v":1247.98996},{"d":"2011-01-19","v":1225.7493749999999},{"d":"2011-01-20","v":1239.1099600000002},{"d":"2011-01-21","v":1230.1055250000002},{"d":"2011-01-24","v":1224.96535},{"d":"2011-01-25","v":1217.4918349999998},{"d":"2011-01-26","v":1222.852935},{"d":"2011-01-27","v":1229.640405},{"d":"2011-01-28","v":1203.05854},{"d":"2011-01-31","v":1215.1895800000002},{"d":"2011-02-01","v":1223.0073300000001},{"d":"2011-02-02","v":1226.8852125},{"d":"2011-02-03","v":1237.11341},{"d":"2011-02-04","v":1252.679225},{"d":"2011-02-07","v":1261.4352450000001},{"d":"2011-02-08","v":1276.7153849999997},{"d":"2011-02-09","v":1267.0708855},{"d":"2011-02-10","v":1282.7859345000002},{"d":"2011-02-11","v":1295.359965},{"d":"2011-02-14","v":1294.3377150000001},{"d":"2011-02-15","v":1286.140195},{"d":"2011-02-16","v":1284.491525},{"d":"2011-02-17","v":1275.039375},{"d":"2011-02-18","v":1271.03944},{"d":"2011-02-21","v":1273.7973049999998},{"d":"2011-02-22","v":1237.0268050000002},{"d":"2011-02-23","v":1222.6131300000002},{"d":"2011-02-24","v":1211.6916850000002},{"d":"2011-02-25","v":1228.3532250000003},{"d":"2011-02-28","v":1236.4309},{"d":"2011-03-01","v":1215.3577250000003},{"d":"2011-03-02","v":1211.9211650000002},{"d":"2011-03-03","v":1243.740195},{"d":"2011-03-04","v":1226.80467},{"d":"2011-03-07","v":1217.6332350000002},{"d":"2011-03-08","v":1239.6892900000003},{"d":"2011-03-09","v":1230.8960249999998},{"d":"2011-03-10","v":1211.08246875},{"d":"2011-03-11","v":1216.4849000000002},{"d":"2011-03-14","v":1201.7270250000001},{"d":"2011-03-15","v":1178.8309199999999},{"d":"2011-03-16","v":1136.27527125},{"d":"2011-03-17","v":1148.796175},{"d":"2011-03-18","v":1153.9283200000002},{"d":"2011-03-21","v":1174.47135},{"d":"2011-03-22","v":1168.1997949999998},{"d":"2011-03-23","v":1177.50729},{"d":"2011-03-24","v":1188.146575},{"d":"2011-03-25","v":1208.6821499999999},{"d":"2011-03-28","v":1201.02111},{"d":"2011-03-29","v":1213.7053700000001},{"d":"2011-03-30","v":1219.558835},{"d":"2011-03-31","v":1217.3750850000001},{"d":"2011-04-01","v":1233.2952175},{"d":"2011-04-04","v":1230.32295},{"d":"2011-04-05","v":1232.9363400000002},{"d":"2011-04-06","v":1227.8675899999998},{"d":"2011-04-07","v":1221.61116},{"d":"2011-04-08","v":1205.3059200000002},{"d":"2011-04-11","v":1201.08105},{"d":"2011-04-12","v":1179.0886950000001},{"d":"2011-04-13","v":1178.07879},{"d":"2011-04-14","v":1174.23878},{"d":"2011-04-15","v":1180.8997399999998},{"d":"2011-04-18","v":1169.68704},{"d":"2011-04-19","v":1181.461725},{"d":"2011-04-20","v":1182.52695},{"d":"2011-04-21","v":1185.75903},{"d":"2011-04-22","v":1185.4245799999999},{"d":"2011-04-25","v":1177.5688599999999},{"d":"2011-04-26","v":1177.3319894999997},{"d":"2011-04-27","v":1188.2656949999998},{"d":"2011-04-28","v":1189.3972350000001},{"d":"2011-04-29","v":1179.096275},{"d":"2011-05-02","v":1178.09867},{"d":"2011-05-03","v":1169.1103549999998},{"d":"2011-05-04","v":1160.953715},{"d":"2011-05-05","v":1162.473805},{"d":"2011-05-06","v":1180.4903000000002},{"d":"2011-05-09","v":1175.0952},{"d":"2011-05-10","v":1195.452195},{"d":"2011-05-11","v":1192.0122600000002},{"d":"2011-05-12","v":1194.3098200000002},{"d":"2011-05-13","v":1196.4410399999997},{"d":"2011-05-16","v":1177.599385},{"d":"2011-05-17","v":1172.0957549999998},{"d":"2011-05-18","v":1183.77878},{"d":"2011-05-19","v":1186.3691840000001},{"d":"2011-05-20","v":1171.960115},{"d":"2011-05-23","v":1167.08025},{"d":"2011-05-24","v":1160.830125},{"d":"2011-05-25","v":1155.4337249999999},{"d":"2011-05-26","v":1150.6495},{"d":"2011-05-27","v":1131.430495},{"d":"2011-05-30","v":1137.7054649999998},{"d":"2011-05-31","v":1151.97855},{"d":"2011-06-01","v":1111.0706850000001},{"d":"2011-06-02","v":1110.154575},{"d":"2011-06-03","v":1087.24633},{"d":"2011-06-06","v":1077.7193174999998},{"d":"2011-06-07","v":1078.6859200000001},{"d":"2011-06-08","v":1074.0406699999999},{"d":"2011-06-09","v":1088.5775},{"d":"2011-06-10","v":1076.3698},{"d":"2011-06-13","v":1068.78515},{"d":"2011-06-14","v":1092.9479799999997},{"d":"2011-06-15","v":1084.43325},{"d":"2011-06-16","v":1079.05845},{"d":"2011-06-17","v":1079.226225},{"d":"2011-06-20","v":1080.15045},{"d":"2011-06-21","v":1088.9334},{"d":"2011-06-22","v":1080.5063249999998},{"d":"2011-06-23","v":1075.2265304999999},{"d":"2011-06-24","v":1057.5319949999998},{"d":"2011-06-27","v":1068.49091},{"d":"2011-06-28","v":1078.5496150000001},{"d":"2011-06-29","v":1091.05448},{"d":"2011-06-30","v":1110.725505},{"d":"2011-07-01","v":1138.199472},{"d":"2011-07-04","v":1135.1728799999999},{"d":"2011-07-05","v":1125.275195},{"d":"2011-07-06","v":1125.013075},{"d":"2011-07-07","v":1143.72432},{"d":"2011-07-08","v":1125.1968000000002},{"d":"2011-07-11","v":1103.467155},{"d":"2011-07-12","v":1090.0287},{"d":"2011-07-13","v":1065.79456},{"d":"2011-07-14","v":1067.4068250000003},{"d":"2011-07-15","v":1070.310475},{"d":"2011-07-18","v":1068.716325},{"d":"2011-07-19","v":1094.292485},{"d":"2011-07-20","v":1087.663675},{"d":"2011-07-21","v":1098.3125850000001},{"d":"2011-07-22","v":1101.6045900000001},{"d":"2011-07-25","v":1078.335225},{"d":"2011-07-26","v":1068.3066250000002},{"d":"2011-07-27","v":1046.3019},{"d":"2011-07-28","v":1043.38775},{"d":"2011-07-29","v":1016.5338000000002},{"d":"2011-08-01","v":1009.1844699999999},{"d":"2011-08-02","v":959.810265},{"d":"2011-08-03","v":970.0580450000001},{"d":"2011-08-04","v":922.6948500000001},{"d":"2011-08-05","v":920.95356},{"d":"2011-08-08","v":870.915768},{"d":"2011-08-09","v":847.5594600000001},{"d":"2011-08-10","v":816.516735},{"d":"2011-08-11","v":896.225205},{"d":"2011-08-12","v":918.7964200000001},{"d":"2011-08-15","v":945.96235},{"d":"2011-08-16","v":953.550865},{"d":"2011-08-17","v":945.3331650000001},{"d":"2011-08-18","v":909.1521450000001},{"d":"2011-08-19","v":884.2803200000001},{"d":"2011-08-22","v":891.0742849999999},{"d":"2011-08-23","v":922.61234},{"d":"2011-08-24","v":939.7396799999999},{"d":"2011-08-25","v":923.0887799999999},{"d":"2011-08-26","v":951.840945},{"d":"2011-08-29","v":990.6616799999999},{"d":"2011-08-30","v":997.7151600000001},{"d":"2011-08-31","v":985.8387420000001},{"d":"2011-09-01","v":961.17065},{"d":"2011-09-02","v":928.54015},{"d":"2011-09-05","v":927.5384250000001},{"d":"2011-09-06","v":1008.2198199999999},{"d":"2011-09-07","v":1031.84762},{"d":"2011-09-08","v":1041.6000000000001},{"d":"2011-09-09","v":1024.32708},{"d":"2011-09-12","v":1027.921035},{"d":"2011-09-13","v":1036.52409},{"d":"2011-09-14","v":1046.098995},{"d":"2011-09-15","v":1056.1374250000001},{"d":"2011-09-16","v":1064.5847205},{"d":"2011-09-19","v":1061.434975},{"d":"2011-09-20","v":1065.487305},{"d":"2011-09-21","v":1049.145165},{"d":"2011-09-22","v":1025.0509499999998},{"d":"2011-09-23","v":1028.27501},{"d":"2011-09-26","v":1048.0779599999998},{"d":"2011-09-27","v":1053.68733},{"d":"2011-09-28","v":1037.2837325},{"d":"2011-09-29","v":1041.7228249999998},{"d":"2011-09-30","v":1027.119125},{"d":"2011-10-03","v":1011.9606150000002},{"d":"2011-10-04","v":1030.8880100000001},{"d":"2011-10-05","v":1056.61149},{"d":"2011-10-06","v":1073.047635},{"d":"2011-10-07","v":1072.920975},{"d":"2011-10-10","v":1080.94341},{"d":"2011-10-11","v":1086.09795},{"d":"2011-10-12","v":1081.135125},{"d":"2011-10-13","v":1082.3605650000002},{"d":"2011-10-14","v":1092.895405},{"d":"2011-10-17","v":1081.168275},{"d":"2011-10-18","v":1102.4232299999999},{"d":"2011-10-19","v":1093.258815},{"d":"2011-10-20","v":1087.70123},{"d":"2011-10-21","v":1093.849295},{"d":"2011-10-24","v":1104.500235},{"d":"2011-10-25","v":1080.1856465},{"d":"2011-10-26","v":1095.76665},{"d":"2011-10-27","v":1105.036675},{"d":"2011-10-28","v":1110.1395},{"d":"2011-10-31","v":1101.82725},{"d":"2011-11-01","v":1084.658781},{"d":"2011-11-02","v":1097.249505},{"d":"2011-11-03","v":1108.538125},{"d":"2011-11-04","v":1111.6989194999999},{"d":"2011-11-07","v":1137.4132100000002},{"d":"2011-11-08","v":1144.58994},{"d":"2011-11-09","v":1121.3193245},{"d":"2011-11-10","v":1126.1527199999998},{"d":"2011-11-11","v":1141.14327},{"d":"2011-11-14","v":1139.61591},{"d":"2011-11-15","v":1154.9833214999999},{"d":"2011-11-16","v":1141.2258},{"d":"2011-11-17","v":1124.8923125},{"d":"2011-11-18","v":1118.2424824999998},{"d":"2011-11-21","v":1097.5905225000001},{"d":"2011-11-22","v":1088.741055},{"d":"2011-11-23","v":1071.71092},{"d":"2011-11-24","v":1072.29372},{"d":"2011-11-25","v":1082.25285},{"d":"2011-11-28","v":1104.6240249999998},{"d":"2011-11-29","v":1104.399975},{"d":"2011-11-30","v":1142.2211149999998},{"d":"2011-12-01","v":1144.537745},{"d":"2011-12-02","v":1150.8970499999998},{"d":"2011-12-05","v":1162.29687},{"d":"2011-12-06","v":1168.72569},{"d":"2011-12-07","v":1170.034725},{"d":"2011-12-08","v":1147.591075},{"d":"2011-12-09","v":1163.378475},{"d":"2011-12-12","v":1165.524535},{"d":"2011-12-13","v":1163.376225},{"d":"2011-12-14","v":1160.36481},{"d":"2011-12-15","v":1148.8444625},{"d":"2011-12-16","v":1138.264785},{"d":"2011-12-19","v":1127.7788950000001},{"d":"2011-12-20","v":1154.717775},{"d":"2011-12-21","v":1161.920775},{"d":"2011-12-22","v":1172.214025},{"d":"2011-12-23","v":1184.084715},{"d":"2011-12-26","v":1183.1367900000002},{"d":"2011-12-27","v":1181.606335},{"d":"2011-12-28","v":1176.709995},{"d":"2011-12-29","v":1186.4739},{"d":"2011-12-30","v":1178.75875},{"d":"2012-01-02","v":1179.38625},{"d":"2012-01-03","v":1188.3171475000001},{"d":"2012-01-04","v":1203.12555},{"d":"2012-01-05","v":1219.5169799999999},{"d":"2012-01-06","v":1220.077485},{"d":"2012-01-09","v":1215.10183},{"d":"2012-01-10","v":1225.637395},{"d":"2012-01-11","v":1232.3742},{"d":"2012-01-12","v":1223.286705},{"d":"2012-01-13","v":1226.2347},{"d":"2012-01-16","v":1233.57858},{"d":"2012-01-17","v":1227.7599500000001},{"d":"2012-01-18","v":1229.172615},{"d":"2012-01-19","v":1225.4043900000001},{"d":"2012-01-20","v":1229.04399},{"d":"2012-01-23","v":1220.880165},{"d":"2012-01-24","v":1219.62015},{"d":"2012-01-25","v":1222.13692},{"d":"2012-01-26","v":1214.2850999999998},{"d":"2012-01-27","v":1202.9234099999999},{"d":"2012-01-30","v":1204.991325},{"d":"2012-01-31","v":1207.8156999999999},{"d":"2012-02-01","v":1211.239445},{"d":"2012-02-02","v":1216.3439},{"d":"2012-02-03","v":1234.87539},{"d":"2012-02-06","v":1235.931625},{"d":"2012-02-07","v":1228.408665},{"d":"2012-02-08","v":1234.487485},{"d":"2012-02-09","v":1234.00944},{"d":"2012-02-10","v":1231.0826625},{"d":"2012-02-13","v":1241.5896000000002},{"d":"2012-02-14","v":1243.4100250000001},{"d":"2012-02-15","v":1243.26712},{"d":"2012-02-16","v":1250.4943835000001},{"d":"2012-02-17","v":1253.8125149999998},{"d":"2012-02-20","v":1244.127405},{"d":"2012-02-21","v":1245.356985},{"d":"2012-02-22","v":1238.2312800000002},{"d":"2012-02-23","v":1230.9769945},{"d":"2012-02-24","v":1226.5504750000002},{"d":"2012-02-27","v":1233.95994},{"d":"2012-02-28","v":1231.9096244999998},{"d":"2012-02-29","v":1239.41441},{"d":"2012-03-01","v":1247.351745},{"d":"2012-03-02","v":1254.9630240000001},{"d":"2012-03-05","v":1247.365125},{"d":"2012-03-06","v":1238.015625},{"d":"2012-03-07","v":1243.395315},{"d":"2012-03-08","v":1244.25468},{"d":"2012-03-09","v":1263.6492349999999},{"d":"2012-03-12","v":1260.85191},{"d":"2012-03-13","v":1293.4025390000002},{"d":"2012-03-14","v":1302.212325},{"d":"2012-03-15","v":1299.76028},{"d":"2012-03-16","v":1285.7092},{"d":"2012-03-19","v":1283.918175},{"d":"2012-03-20","v":1280.0403800000001},{"d":"2012-03-21","v":1279.3461450000002},{"d":"2012-03-22","v":1271.5224},{"d":"2012-03-23","v":1268.44095},{"d":"2012-03-26","v":1278.3842750000001},{"d":"2012-03-27","v":1277.517915},{"d":"2012-03-28","v":1271.604675},{"d":"2012-03-29","v":1270.9746049999999},{"d":"2012-03-30","v":1270.1766049999999},{"d":"2012-04-02","v":1282.3045200000001},{"d":"2012-04-03","v":1284.8303299999998},{"d":"2012-04-04","v":1280.9078100000002},{"d":"2012-04-05","v":1285.998105},{"d":"2012-04-06","v":1281.9441949999998},{"d":"2012-04-09","v":1266.99363},{"d":"2012-04-10","v":1248.17355},{"d":"2012-04-11","v":1256.9065},{"d":"2012-04-12","v":1264.446295},{"d":"2012-04-13","v":1260.93373},{"d":"2012-04-16","v":1254.350125},{"d":"2012-04-17","v":1272.669841},{"d":"2012-04-18","v":1269.7369050000002},{"d":"2012-04-19","v":1260.20686},{"d":"2012-04-20","v":1253.344725},{"d":"2012-04-23","v":1249.371465},{"d":"2012-04-24","v":1250.1388949999998},{"d":"2012-04-25","v":1264.889125},{"d":"2012-04-26","v":1276.3670399999999},{"d":"2012-04-27","v":1272.7055449999998},{"d":"2012-04-30","v":1268.830705},{"d":"2012-05-01","v":1277.42661},{"d":"2012-05-02","v":1273.6598625},{"d":"2012-05-03","v":1263.902625},{"d":"2012-05-04","v":1243.4805},{"d":"2012-05-07","v":1261.3885500000001},{"d":"2012-05-08","v":1261.50352},{"d":"2012-05-09","v":1260.6173800000001},{"d":"2012-05-10","v":1263.42177},{"d":"2012-05-11","v":1260.49495},{"d":"2012-05-14","v":1255.9200335},{"d":"2012-05-15","v":1257.716216},{"d":"2012-05-16","v":1254.569905},{"d":"2012-05-17","v":1238.7469320000002},{"d":"2012-05-18","v":1219.42626},{"d":"2012-05-21","v":1237.680645},{"d":"2012-05-22","v":1252.01332},{"d":"2012-05-23","v":1262.1864750000002},{"d":"2012-05-24","v":1269.9753515},{"d":"2012-05-25","v":1267.44666},{"d":"2012-05-28","v":1265.99356},{"d":"2012-05-29","v":1286.12715},{"d":"2012-05-30","v":1279.3896},{"d":"2012-05-31","v":1277.428255},{"d":"2012-06-01","v":1238.192208},{"d":"2012-06-04","v":1231.252365},{"d":"2012-06-05","v":1245.1382899999999},{"d":"2012-06-06","v":1259.983575},{"d":"2012-06-07","v":1262.464025},{"d":"2012-06-08","v":1277.26753},{"d":"2012-06-11","v":1265.9864025},{"d":"2012-06-12","v":1276.590264},{"d":"2012-06-13","v":1262.32506},{"d":"2012-06-14","v":1269.379782},{"d":"2012-06-15","v":1274.839732},{"d":"2012-06-18","v":1283.4528},{"d":"2012-06-19","v":1284.46835},{"d":"2012-06-20","v":1281.071784},{"d":"2012-06-21","v":1267.7156800000002},{"d":"2012-06-22","v":1274.8766500000002},{"d":"2012-06-25","v":1261.4599199999998},{"d":"2012-06-26","v":1268.9877},{"d":"2012-06-27","v":1282.7356533},{"d":"2012-06-28","v":1281.8617069999998},{"d":"2012-06-29","v":1290.7517675},{"d":"2012-07-02","v":1303.12446},{"d":"2012-07-03","v":1309.1172534},{"d":"2012-07-04","v":1317.7123740000002},{"d":"2012-07-05","v":1326.2816424999999},{"d":"2012-07-06","v":1324.2521620000002},{"d":"2012-07-09","v":1319.8030239999998},{"d":"2012-07-10","v":1314.920764},{"d":"2012-07-11","v":1316.351088},{"d":"2012-07-12","v":1314.27244},{"d":"2012-07-13","v":1331.503875},{"d":"2012-07-16","v":1325.4737245000001},{"d":"2012-07-17","v":1333.5326200000002},{"d":"2012-07-18","v":1343.409915},{"d":"2012-07-19","v":1347.619185},{"d":"2012-07-20","v":1348.037013},{"d":"2012-07-23","v":1339.619985},{"d":"2012-07-24","v":1333.544795},{"d":"2012-07-25","v":1324.0070560000001},{"d":"2012-07-26","v":1331.7970679999999},{"d":"2012-07-27","v":1352.164455},{"d":"2012-07-30","v":1358.8559800000003},{"d":"2012-07-31","v":1345.2063640000001},{"d":"2012-08-01","v":1352.028135},{"d":"2012-08-02","v":1347.2703999999999},{"d":"2012-08-03","v":1352.1730214999998},{"d":"2012-08-06","v":1353.19704},{"d":"2012-08-07","v":1359.7709599999998},{"d":"2012-08-08","v":1365.0781095000002},{"d":"2012-08-09","v":1372.564515},{"d":"2012-08-10","v":1376.4997400000002},{"d":"2012-08-13","v":1370.747875},{"d":"2012-08-14","v":1372.6954604999999},{"d":"2012-08-15","v":1377.856725},{"d":"2012-08-16","v":1380.2066955000003},{"d":"2012-08-17","v":1385.2597400000002},{"d":"2012-08-20","v":1383.295415},{"d":"2012-08-21","v":1365.340176},{"d":"2012-08-22","v":1359.4652469999999},{"d":"2012-08-23","v":1344.3354049999998},{"d":"2012-08-24","v":1358.0714699999999},{"d":"2012-08-27","v":1360.192323},{"d":"2012-08-28","v":1351.5153400000002},{"d":"2012-08-29","v":1356.1752359999998},{"d":"2012-08-30","v":1348.774245},{"d":"2012-08-31","v":1347.640404},{"d":"2012-09-03","v":1346.6663999999998},{"d":"2012-09-04","v":1347.9576885},{"d":"2012-09-05","v":1346.606415},{"d":"2012-09-06","v":1371.493915},{"d":"2012-09-07","v":1363.5576750000002},{"d":"2012-09-10","v":1357.7911629999999},{"d":"2012-09-11","v":1351.6243064999999},{"d":"2012-09-12","v":1353.5840549999998},{"d":"2012-09-13","v":1371.100247},{"d":"2012-09-14","v":1364.576148},{"d":"2012-09-17","v":1361.23361},{"d":"2012-09-18","v":1361.87987},{"d":"2012-09-19","v":1361.236635},{"d":"2012-09-20","v":1369.0977200000002},{"d":"2012-09-21","v":1360.7482949999999},{"d":"2012-09-24","v":1362.7274425},{"d":"2012-09-25","v":1350.72135},{"d":"2012-09-26","v":1346.0702414999998},{"d":"2012-09-27","v":1355.363584},{"d":"2012-09-28","v":1353.3323970000001},{"d":"2012-10-01","v":1354.677825},{"d":"2012-10-02","v":1353.206375},{"d":"2012-10-03","v":1361.6551410000002},{"d":"2012-10-04","v":1359.693125},{"d":"2012-10-05","v":1358.6343519999998},{"d":"2012-10-08","v":1359.2039650000002},{"d":"2012-10-09","v":1356.39567},{"d":"2012-10-10","v":1346.76036},{"d":"2012-10-11","v":1340.1866240000002},{"d":"2012-10-12","v":1333.635237},{"d":"2012-10-15","v":1344.756272},{"d":"2012-10-16","v":1343.98913},{"d":"2012-10-17","v":1348.59266},{"d":"2012-10-18","v":1348.0767359999998},{"d":"2012-10-19","v":1331.3437580799998},{"d":"2012-10-22","v":1329.0521749999998},{"d":"2012-10-23","v":1318.8829199999998},{"d":"2012-10-24","v":1315.64609},{"d":"2012-10-25","v":1322.285642},{"d":"2012-10-26","v":1321.67904},{"d":"2012-10-29","v":1323.74275},{"d":"2012-10-30","v":1317.77778},{"d":"2012-10-31","v":1316.887275},{"d":"2012-11-01","v":1331.2470150000001},{"d":"2012-11-02","v":1331.145304},{"d":"2012-11-05","v":1338.341541},{"d":"2012-11-06","v":1348.61316},{"d":"2012-11-07","v":1320.28414},{"d":"2012-11-08","v":1305.8998119999999},{"d":"2012-11-09","v":1311.34564},{"d":"2012-11-12","v":1311.18773475},{"d":"2012-11-13","v":1305.7669349999999},{"d":"2012-11-14","v":1284.9317517099998},{"d":"2012-11-15","v":1278.51112},{"d":"2012-11-16","v":1289.37835},{"d":"2012-11-19","v":1310.6741650000001},{"d":"2012-11-20","v":1308.4695140000001},{"d":"2012-11-21","v":1309.2263249999999},{"d":"2012-11-22","v":1304.206125},{"d":"2012-11-23","v":1311.713865},{"d":"2012-11-26","v":1307.321925},{"d":"2012-11-27","v":1306.0232440000002},{"d":"2012-11-28","v":1314.651437},{"d":"2012-11-29","v":1318.30512},{"d":"2012-11-30","v":1319.1984},{"d":"2012-12-03","v":1308.907575},{"d":"2012-12-04","v":1309.062625},{"d":"2012-12-05","v":1310.5800749999999},{"d":"2012-12-06","v":1325.17033},{"d":"2012-12-07","v":1330.7969675},{"d":"2012-12-10","v":1330.20628815},{"d":"2012-12-11","v":1336.875144},{"d":"2012-12-12","v":1329.7636599999998},{"d":"2012-12-13","v":1317.4661785},{"d":"2012-12-14","v":1304.45376545},{"d":"2012-12-17","v":1319.6576415},{"d":"2012-12-18","v":1327.8604595},{"d":"2012-12-19","v":1319.8206299999997},{"d":"2012-12-20","v":1322.91392},{"d":"2012-12-21","v":1308.1705849999998},{"d":"2012-12-24","v":1304.23917},{"d":"2012-12-25","v":1304.0612325},{"d":"2012-12-26","v":1294.3405125},{"d":"2012-12-27","v":1293.2289187200001},{"d":"2012-12-28","v":1278.964005},{"d":"2012-12-31","v":1303.692345},{"d":"2013-01-01","v":1302.19704},{"d":"2013-01-02","v":1340.3195899999998},{"d":"2013-01-03","v":1351.108127805},{"d":"2013-01-04","v":1353.410205},{"d":"2013-01-07","v":1343.714933775},{"d":"2013-01-08","v":1345.0529635200003},{"d":"2013-01-09","v":1350.9930239999999},{"d":"2013-01-10","v":1344.031748},{"d":"2013-01-11","v":1343.4109149999997},{"d":"2013-01-14","v":1355.4528705},{"d":"2013-01-15","v":1371.3542149999998},{"d":"2013-01-16","v":1369.844275},{"d":"2013-01-17","v":1380.322},{"d":"2013-01-18","v":1386.0103530000001},{"d":"2013-01-21","v":1383.1030850000002},{"d":"2013-01-22","v":1385.3207654999999},{"d":"2013-01-23","v":1388.84226},{"d":"2013-01-24","v":1387.944195},{"d":"2013-01-25","v":1392.441875},{"d":"2013-01-28","v":1390.6986899999997},{"d":"2013-01-29","v":1388.829078},{"d":"2013-01-30","v":1367.6704484999998},{"d":"2013-01-31","v":1362.4945500000001},{"d":"2013-02-01","v":1372.760108},{"d":"2013-02-04","v":1358.6974402499998},{"d":"2013-02-05","v":1372.364775},{"d":"2013-02-06","v":1375.9792479999999},{"d":"2013-02-07","v":1386.9902880000002},{"d":"2013-02-08","v":1392.6283799999999},{"d":"2013-02-11","v":1397.7030495},{"d":"2013-02-12","v":1394.09941},{"d":"2013-02-13","v":1395.90174195},{"d":"2013-02-14","v":1403.8168345},{"d":"2013-02-15","v":1402.6063100000001},{"d":"2013-02-18","v":1404.507685},{"d":"2013-02-19","v":1414.40555},{"d":"2013-02-20","v":1403.133676},{"d":"2013-02-21","v":1399.8085199999998},{"d":"2013-02-22","v":1412.2732199999998},{"d":"2013-02-25","v":1389.0972},{"d":"2013-02-26","v":1398.508943},{"d":"2013-02-27","v":1412.352843},{"d":"2013-02-28","v":1419.7518450000002},{"d":"2013-03-01","v":1434.6254650000003},{"d":"2013-03-04","v":1438.9007399999998},{"d":"2013-03-05","v":1452.146622},{"d":"2013-03-06","v":1465.50975},{"d":"2013-03-07","v":1458.802494},{"d":"2013-03-08","v":1479.16704},{"d":"2013-03-11","v":1478.493471},{"d":"2013-03-12","v":1474.9590240000002},{"d":"2013-03-13","v":1485.20559675},{"d":"2013-03-14","v":1483.9196399999998},{"d":"2013-03-15","v":1462.386635},{"d":"2013-03-18","v":1467.488415},{"d":"2013-03-19","v":1465.4708850000002},{"d":"2013-03-20","v":1472.04895},{"d":"2013-03-21","v":1461.625371},{"d":"2013-03-22","v":1463.94704},{"d":"2013-03-25","v":1469.39085},{"d":"2013-03-26","v":1480.9154850000002},{"d":"2013-03-27","v":1489.8339340000002},{"d":"2013-03-28","v":1487.6913189999998},{"d":"2013-03-29","v":1487.3309779999997},{"d":"2013-04-01","v":1477.871525},{"d":"2013-04-02","v":1487.9865699999998},{"d":"2013-04-03","v":1467.4590435},{"d":"2013-04-04","v":1465.1619300000002},{"d":"2013-04-05","v":1451.658248},{"d":"2013-04-08","v":1460.6025525000002},{"d":"2013-04-09","v":1462.242375},{"d":"2013-04-10","v":1479.7564199999997},{"d":"2013-04-11","v":1481.8758315},{"d":"2013-04-12","v":1472.7906},{"d":"2013-04-15","v":1443.6056669999998},{"d":"2013-04-16","v":1451.7294659999998},{"d":"2013-04-17","v":1446.7807695000001},{"d":"2013-04-18","v":1437.748557},{"d":"2013-04-19","v":1451.063744},{"d":"2013-04-22","v":1459.1978204999998},{"d":"2013-04-23","v":1491.683676},{"d":"2013-04-24","v":1495.384102},{"d":"2013-04-25","v":1497.784146},{"d":"2013-04-26","v":1491.696832},{"d":"2013-04-29","v":1493.05518},{"d":"2013-04-30","v":1484.2256000000002},{"d":"2013-05-01","v":1467.429708},{"d":"2013-05-02","v":1493.966025},{"d":"2013-05-03","v":1509.436272},{"d":"2013-05-06","v":1518.0464519999998},{"d":"2013-05-07","v":1529.36587943},{"d":"2013-05-08","v":1527.4658430000002},{"d":"2013-05-09","v":1544.59237895},{"d":"2013-05-10","v":1563.01665},{"d":"2013-05-13","v":1565.2413399999998},{"d":"2013-05-14","v":1596.61749},{"d":"2013-05-15","v":1604.9532955},{"d":"2013-05-16","v":1594.4728240000002},{"d":"2013-05-17","v":1623.90885},{"d":"2013-05-20","v":1613.7623890000002},{"d":"2013-05-21","v":1622.0672269999998},{"d":"2013-05-22","v":1624.7616705},{"d":"2013-05-23","v":1603.04505},{"d":"2013-05-24","v":1589.353766},{"d":"2013-05-27","v":1591.337462},{"d":"2013-05-28","v":1624.83415},{"d":"2013-05-29","v":1589.33379},{"d":"2013-05-30","v":1580.6086450000003},{"d":"2013-05-31","v":1562.305377},{"d":"2013-06-03","v":1557.134075},{"d":"2013-06-04","v":1548.782352},{"d":"2013-06-05","v":1519.1177311999998},{"d":"2013-06-06","v":1513.779552},{"d":"2013-06-07","v":1542.528},{"d":"2013-06-10","v":1539.13312},{"d":"2013-06-11","v":1507.759461},{"d":"2013-06-12","v":1489.23225},{"d":"2013-06-13","v":1514.4267250000003},{"d":"2013-06-14","v":1503.1844174999999},{"d":"2013-06-17","v":1517.6989800000001},{"d":"2013-06-18","v":1524.6791325000002},{"d":"2013-06-19","v":1517.0039675},{"d":"2013-06-20","v":1477.6061200000001},{"d":"2013-06-21","v":1486.4137079999998},{"d":"2013-06-24","v":1465.91951},{"d":"2013-06-25","v":1487.4810725},{"d":"2013-06-26","v":1510.1201999999998},{"d":"2013-06-27","v":1522.1657300000002},{"d":"2013-06-28","v":1515.7604539999998},{"d":"2013-07-01","v":1525.1101760000001},{"d":"2013-07-02","v":1532.704075},{"d":"2013-07-03","v":1526.9184},{"d":"2013-07-04","v":1542.32064},{"d":"2013-07-05","v":1570.844418},{"d":"2013-07-08","v":1579.8887814999998},{"d":"2013-07-09","v":1606.5084875},{"d":"2013-07-10","v":1577.1375816},{"d":"2013-07-11","v":1584.719136},{"d":"2013-07-12","v":1585.733415},{"d":"2013-07-15","v":1595.3705625},{"d":"2013-07-16","v":1574.5507225},{"d":"2013-07-17","v":1580.56159609},{"d":"2013-07-18","v":1594.622523},{"d":"2013-07-19","v":1591.737447},{"d":"2013-07-22","v":1586.67255},{"d":"2013-07-23","v":1581.3575159999998},{"d":"2013-07-24","v":1579.436848},{"d":"2013-07-25","v":1571.4713250000002},{"d":"2013-07-26","v":1570.220172},{"d":"2013-07-29","v":1569.91008},{"d":"2013-07-30","v":1567.4975064},{"d":"2013-07-31","v":1562.6426330000002},{"d":"2013-08-01","v":1598.452758},{"d":"2013-08-02","v":1588.210975},{"d":"2013-08-05","v":1583.53269},{"d":"2013-08-06","v":1571.6064485},{"d":"2013-08-07","v":1559.4335680000002},{"d":"2013-08-08","v":1562.4147},{"d":"2013-08-09","v":1561.4445439999997},{"d":"2013-08-12","v":1566.1031487999999},{"d":"2013-08-13","v":1583.0549350000001},{"d":"2013-08-14","v":1578.30959},{"d":"2013-08-15","v":1540.59561},{"d":"2013-08-16","v":1536.182788},{"d":"2013-08-19","v":1522.96911},{"d":"2013-08-20","v":1518.9481300000002},{"d":"2013-08-21","v":1517.522952},{"d":"2013-08-22","v":1533.339919},{"d":"2013-08-23","v":1535.07006},{"d":"2013-08-26","v":1531.433},{"d":"2013-08-27","v":1498.797745},{"d":"2013-08-28","v":1511.2665909999998},{"d":"2013-08-29","v":1529.030129},{"d":"2013-08-30","v":1520.2266750000001},{"d":"2013-09-02","v":1528.965585},{"d":"2013-09-03","v":1540.1699099999998},{"d":"2013-09-04","v":1551.005625},{"d":"2013-09-05","v":1568.5958340000002},{"d":"2013-09-06","v":1557.222744},{"d":"2013-09-09","v":1562.9942709},{"d":"2013-09-10","v":1579.018935},{"d":"2013-09-11","v":1576.6058},{"d":"2013-09-12","v":1571.9108},{"d":"2013-09-13","v":1574.6843350000004},{"d":"2013-09-16","v":1579.3697849999999},{"d":"2013-09-17","v":1584.022665},{"d":"2013-09-18","v":1579.5143499499998},{"d":"2013-09-19","v":1573.4116999999999},{"d":"2013-09-20","v":1553.89344},{"d":"2013-09-23","v":1547.9688385000002},{"d":"2013-09-24","v":1547.944524},{"d":"2013-09-25","v":1537.6216479999998},{"d":"2013-09-26","v":1544.5183800000002},{"d":"2013-09-27","v":1530.0621765},{"d":"2013-09-30","v":1520.8265199999998},{"d":"2013-10-01","v":1534.3050700000001},{"d":"2013-10-02","v":1527.399335},{"d":"2013-10-03","v":1507.65809},{"d":"2013-10-04","v":1532.085635},{"d":"2013-10-07","v":1512.6463350000001},{"d":"2013-10-08","v":1496.02194},{"d":"2013-10-09","v":1506.7944},{"d":"2013-10-10","v":1541.8999649999998},{"d":"2013-10-11","v":1553.230902},{"d":"2013-10-14","v":1556.271948},{"d":"2013-10-15","v":1548.5294700000002},{"d":"2013-10-16","v":1571.704587},{"d":"2013-10-17","v":1563.48372},{"d":"2013-10-18","v":1572.718178},{"d":"2013-10-21","v":1573.37576},{"d":"2013-10-22","v":1569.796713},{"d":"2013-10-23","v":1558.1245349999997},{"d":"2013-10-24","v":1563.21375},{"d":"2013-10-25","v":1570.35375},{"d":"2013-10-28","v":1578.6771514999998},{"d":"2013-10-29","v":1592.4925449999998},{"d":"2013-10-30","v":1586.6981449999998},{"d":"2013-10-31","v":1595.2063549999998},{"d":"2013-11-01","v":1607.6343140000001},{"d":"2013-11-04","v":1609.5685505000001},{"d":"2013-11-05","v":1610.4115335000001},{"d":"2013-11-06","v":1615.8612679999997},{"d":"2013-11-07","v":1602.6736740000001},{"d":"2013-11-08","v":1634.6137999999999},{"d":"2013-11-11","v":1630.54606},{"d":"2013-11-12","v":1623.87344},{"d":"2013-11-13","v":1629.94725},{"d":"2013-11-14","v":1643.636995},{"d":"2013-11-15","v":1647.0973999999999},{"d":"2013-11-18","v":1637.943122},{"d":"2013-11-19","v":1631.410875},{"d":"2013-11-20","v":1635.231375},{"d":"2013-11-21","v":1643.7477149999997},{"d":"2013-11-22","v":1639.9467},{"d":"2013-11-25","v":1647.0746550000001},{"d":"2013-11-26","v":1638.6411240000002},{"d":"2013-11-27","v":1644.406592},{"d":"2013-11-28","v":1640.90192},{"d":"2013-11-29","v":1640.584},{"d":"2013-12-02","v":1640.6566400000002},{"d":"2013-12-03","v":1625.5152},{"d":"2013-12-04","v":1622.0902095},{"d":"2013-12-05","v":1603.83922},{"d":"2013-12-06","v":1613.9848000000002},{"d":"2013-12-09","v":1615.49398},{"d":"2013-12-10","v":1604.1924},{"d":"2013-12-11","v":1584.424288},{"d":"2013-12-12","v":1583.8161754999999},{"d":"2013-12-13","v":1585.179},{"d":"2013-12-16","v":1590.4703136},{"d":"2013-12-17","v":1580.6505375},{"d":"2013-12-18","v":1626.0333},{"d":"2013-12-19","v":1629.4172200000003},{"d":"2013-12-20","v":1626.59604},{"d":"2013-12-23","v":1631.763441},{"d":"2013-12-24","v":1639.0528000000002},{"d":"2013-12-25","v":1638.13815},{"d":"2013-12-26","v":1648.2324967499999},{"d":"2013-12-27","v":1638.5737159999999},{"d":"2013-12-30","v":1633.0568799999999},{"d":"2013-12-31","v":1648.0165735},{"d":"2014-01-01","v":1647.9888700000001},{"d":"2014-01-02","v":1645.200772},{"d":"2014-01-03","v":1655.621328},{"d":"2014-01-06","v":1648.6255800000001},{"d":"2014-01-07","v":1668.365292},{"d":"2014-01-08","v":1672.289296},{"d":"2014-01-09","v":1665.697438},{"d":"2014-01-10","v":1661.9555699999999},{"d":"2014-01-13","v":1634.1293954999999},{"d":"2014-01-14","v":1657.970723},{"d":"2014-01-15","v":1678.217779},{"d":"2014-01-16","v":1668.6137179999998},{"d":"2014-01-17","v":1671.7212224999998},{"d":"2014-01-20","v":1671.629405},{"d":"2014-01-21","v":1677.0509900000002},{"d":"2014-01-22","v":1680.06037},{"d":"2014-01-23","v":1640.6316449999997},{"d":"2014-01-24","v":1600.135272},{"d":"2014-01-27","v":1595.2099134999999},{"d":"2014-01-28","v":1611.253953},{"d":"2014-01-29","v":1586.04105},{"d":"2014-01-30","v":1617.747903},{"d":"2014-01-31","v":1614.9344300000002},{"d":"2014-02-03","v":1569.4371614999998},{"d":"2014-02-04","v":1585.12963},{"d":"2014-02-05","v":1583.18646},{"d":"2014-02-06","v":1598.935068},{"d":"2014-02-07","v":1614.06544},{"d":"2014-02-10","v":1614.7167015},{"d":"2014-02-11","v":1634.535261},{"d":"2014-02-12","v":1639.2763484999998},{"d":"2014-02-13","v":1634.919835},{"d":"2014-02-14","v":1642.56252},{"d":"2014-02-17","v":1640.391084},{"d":"2014-02-18","v":1636.032776},{"d":"2014-02-19","v":1626.562797},{"d":"2014-02-20","v":1637.8456500000002},{"d":"2014-02-21","v":1632.0237499999998},{"d":"2014-02-24","v":1643.8499},{"d":"2014-02-25","v":1639.1796040000002},{"d":"2014-02-26","v":1646.34804},{"d":"2014-02-27","v":1650.6390599999997},{"d":"2014-02-28","v":1639.7245799999998},{"d":"2014-03-03","v":1633.345653},{"d":"2014-03-04","v":1664.7818790000001},{"d":"2014-03-05","v":1665.5020875},{"d":"2014-03-06","v":1656.0780900000002},{"d":"2014-03-07","v":1652.583932},{"d":"2014-03-10","v":1651.5744},{"d":"2014-03-11","v":1643.617278},{"d":"2014-03-12","v":1636.8272},{"d":"2014-03-13","v":1619.9546400000002},{"d":"2014-03-14","v":1611.34316},{"d":"2014-03-17","v":1627.499385},{"d":"2014-03-18","v":1638.83478},{"d":"2014-03-19","v":1645.78122},{"d":"2014-03-20","v":1659.1202390000003},{"d":"2014-03-21","v":1645.4494},{"d":"2014-03-24","v":1633.1283675000002},{"d":"2014-03-25","v":1644.651525},{"d":"2014-03-26","v":1636.818027},{"d":"2014-03-27","v":1636.4493640000003},{"d":"2014-03-28","v":1645.3890450000001},{"d":"2014-03-31","v":1653.35541},{"d":"2014-04-01","v":1663.3675875000001},{"d":"2014-04-02","v":1675.0067279999998},{"d":"2014-04-03","v":1681.07056},{"d":"2014-04-04","v":1663.154},{"d":"2014-04-07","v":1636.588954},{"d":"2014-04-08","v":1635.515835},{"d":"2014-04-09","v":1645.9897565},{"d":"2014-04-10","v":1605.3535749999999},{"d":"2014-04-11","v":1590.009449},{"d":"2014-04-14","v":1609.644204875},{"d":"2014-04-15","v":1621.3283999999999},{"d":"2014-04-16","v":1641.2316375},{"d":"2014-04-17","v":1645.898256},{"d":"2014-04-18","v":1646.8488449999998},{"d":"2014-04-21","v":1655.3601119999998},{"d":"2014-04-22","v":1662.7325549999998},{"d":"2014-04-23","v":1656.214475},{"d":"2014-04-24","v":1656.1252845000001},{"d":"2014-04-25","v":1642.51893},{"d":"2014-04-28","v":1645.135375},{"d":"2014-04-29","v":1659.22185},{"d":"2014-04-30","v":1657.542282},{"d":"2014-05-01","v":1656.0358875},{"d":"2014-05-02","v":1650.97874},{"d":"2014-05-05","v":1654.13918},{"d":"2014-05-06","v":1633.2043199999998},{"d":"2014-05-07","v":1646.01668},{"d":"2014-05-08","v":1652.09364125},{"d":"2014-05-09","v":1666.1714200000001},{"d":"2014-05-12","v":1684.8637837499998},{"d":"2014-05-13","v":1690.92894},{"d":"2014-05-14","v":1682.322051},{"d":"2014-05-15","v":1669.67778},{"d":"2014-05-16","v":1678.3462499999998},{"d":"2014-05-19","v":1684.1742050000003},{"d":"2014-05-20","v":1673.09604},{"d":"2014-05-21","v":1689.573942},{"d":"2014-05-22","v":1695.598165},{"d":"2014-05-23","v":1704.831705},{"d":"2014-05-26","v":1703.32794},{"d":"2014-05-27","v":1717.50348},{"d":"2014-05-28","v":1719.2239539999998},{"d":"2014-05-29","v":1727.1940450000002},{"d":"2014-05-30","v":1724.3896600000003},{"d":"2014-06-02","v":1733.35447},{"d":"2014-06-03","v":1728.34596},{"d":"2014-06-04","v":1733.30068},{"d":"2014-06-05","v":1733.424525},{"d":"2014-06-06","v":1745.8709999999999},{"d":"2014-06-09","v":1754.6459700000003},{"d":"2014-06-10","v":1759.0308},{"d":"2014-06-11","v":1753.89016},{"d":"2014-06-12","v":1738.9569},{"d":"2014-06-13","v":1747.55826},{"d":"2014-06-16","v":1743.3253119999997},{"d":"2014-06-17","v":1752.3789520000003},{"d":"2014-06-18","v":1759.112067},{"d":"2014-06-19","v":1756.72768},{"d":"2014-06-20","v":1753.17315},{"d":"2014-06-23","v":1751.6569},{"d":"2014-06-24","v":1740.6861450000001},{"d":"2014-06-25","v":1746.0697870000001},{"d":"2014-06-26","v":1746.4127520000002},{"d":"2014-06-27","v":1744.7561999999998},{"d":"2014-06-30","v":1735.5079560000001},{"d":"2014-07-01","v":1748.64125},{"d":"2014-07-02","v":1753.2859465000001},{"d":"2014-07-03","v":1770.65934},{"d":"2014-07-04","v":1772.72062},{"d":"2014-07-07","v":1764.55434},{"d":"2014-07-08","v":1752.403576},{"d":"2014-07-09","v":1756.398336},{"d":"2014-07-10","v":1752.403219},{"d":"2014-07-11","v":1754.1937420000002},{"d":"2014-07-14","v":1762.2462},{"d":"2014-07-15","v":1766.5891100000001},{"d":"2014-07-16","v":1778.2845780000002},{"d":"2014-07-17","v":1756.595105},{"d":"2014-07-18","v":1776.3443675400001},{"d":"2014-07-21","v":1772.3500080000001},{"d":"2014-07-22","v":1789.1514},{"d":"2014-07-23","v":1792.4280399999998},{"d":"2014-07-24","v":1793.0149},{"d":"2014-07-25","v":1789.6625800000002},{"d":"2014-07-28","v":1788.12189},{"d":"2014-07-29","v":1786.3365000000001},{"d":"2014-07-30","v":1790.006505},{"d":"2014-07-31","v":1754.975701},{"d":"2014-08-01","v":1743.9537500000001},{"d":"2014-08-04","v":1758.0200189999998},{"d":"2014-08-05","v":1746.042935},{"d":"2014-08-06","v":1742.9392149999999},{"d":"2014-08-07","v":1736.558215},{"d":"2014-08-08","v":1749.5176640000002},{"d":"2014-08-11","v":1757.0423674999997},{"d":"2014-08-12","v":1756.362162},{"d":"2014-08-13","v":1768.387324},{"d":"2014-08-14","v":1774.7895239999998},{"d":"2014-08-15","v":1766.8623000000002},{"d":"2014-08-18","v":1789.3052320000002},{"d":"2014-08-19","v":1804.1784989999999},{"d":"2014-08-20","v":1817.2436059999998},{"d":"2014-08-21","v":1818.34275},{"d":"2014-08-22","v":1820.3177340000002},{"d":"2014-08-25","v":1833.2314},{"d":"2014-08-26","v":1838.167981},{"d":"2014-08-27","v":1831.887},{"d":"2014-08-28","v":1831.78135},{"d":"2014-08-29","v":1842.7185100000002},{"d":"2014-09-01","v":1845.6789825},{"d":"2014-09-02","v":1843.8466320000002},{"d":"2014-09-03","v":1840.1889999999999},{"d":"2014-09-04","v":1866.9391614900003},{"d":"2014-09-05","v":1872.615654},{"d":"2014-09-08","v":1876.3288895},{"d":"2014-09-09","v":1859.2968239999998},{"d":"2014-09-10","v":1874.2857704999997},{"d":"2014-09-11","v":1874.4073999999998},{"d":"2014-09-12","v":1858.759072},{"d":"2014-09-15","v":1861.268274},{"d":"2014-09-16","v":1869.786744},{"d":"2014-09-17","v":1892.3598375},{"d":"2014-09-18","v":1885.2006199999998},{"d":"2014-09-19","v":1888.0049700000002},{"d":"2014-09-22","v":1872.32864},{"d":"2014-09-23","v":1860.739572},{"d":"2014-09-24","v":1887.378612},{"d":"2014-09-25","v":1859.084558},{"d":"2014-09-26","v":1883.2164},{"d":"2014-09-29","v":1879.4646989999999},{"d":"2014-09-30","v":1881.73802},{"d":"2014-10-01","v":1859.4436249999999},{"d":"2014-10-02","v":1854.200539},{"d":"2014-10-03","v":1901.92056},{"d":"2014-10-06","v":1880.8998525},{"d":"2014-10-07","v":1849.20831},{"d":"2014-10-08","v":1872.3274239999998},{"d":"2014-10-09","v":1839.385279},{"d":"2014-10-10","v":1824.32523},{"d":"2014-10-13","v":1777.4891965499999},{"d":"2014-10-14","v":1790.69554},{"d":"2014-10-15","v":1756.3197440000001},{"d":"2014-10-16","v":1756.5074730000001},{"d":"2014-10-17","v":1782.643495},{"d":"2014-10-20","v":1794.62415},{"d":"2014-10-21","v":1842.403545},{"d":"2014-10-22","v":1838.378214},{"d":"2014-10-23","v":1859.9538345000003},{"d":"2014-10-24","v":1870.111815},{"d":"2014-10-27","v":1862.8334399999999},{"d":"2014-10-28","v":1878.7442899999999},{"d":"2014-10-29","v":1891.059005},{"d":"2014-10-30","v":1906.87032},{"d":"2014-10-31","v":1941.320322},{"d":"2014-11-03","v":1947.867403},{"d":"2014-11-04","v":1929.568255},{"d":"2014-11-05","v":1951.87281},{"d":"2014-11-06","v":1976.69013},{"d":"2014-11-07","v":1965.1794300000001},{"d":"2014-11-10","v":1974.5264},{"d":"2014-11-11","v":1969.7783125},{"d":"2014-11-12","v":1972.39518},{"d":"2014-11-13","v":1967.595259},{"d":"2014-11-14","v":1959.0700800000002},{"d":"2014-11-17","v":1972.068315},{"d":"2014-11-18","v":1970.8134},{"d":"2014-11-19","v":1964.7352359999998},{"d":"2014-11-20","v":1970.4740210000002},{"d":"2014-11-21","v":2004.2379640000001},{"d":"2014-11-24","v":2003.2300779999998},{"d":"2014-11-25","v":1996.7475100000004},{"d":"2014-11-26","v":1996.4585999999997},{"d":"2014-11-27","v":2003.3107199999997},{"d":"2014-11-28","v":1999.48},{"d":"2014-12-01","v":1984.4111679999999},{"d":"2014-12-02","v":2013.487455},{"d":"2014-12-03","v":2032.5925024999995},{"d":"2014-12-04","v":2017.1054100000001},{"d":"2014-12-05","v":2035.592},{"d":"2014-12-08","v":2016.5136000000002},{"d":"2014-12-09","v":2005.44311},{"d":"2014-12-10","v":1964.1924788200001},{"d":"2014-12-11","v":1977.457636},{"d":"2014-12-12","v":1936.017108},{"d":"2014-12-15","v":1925.87003},{"d":"2014-12-16","v":1899.3620609999998},{"d":"2014-12-17","v":1965.63639},{"d":"2014-12-18","v":2026.0097620000004},{"d":"2014-12-19","v":2032.3839720000003},{"d":"2014-12-22","v":2042.1272099999996},{"d":"2014-12-23","v":2052.36225},{"d":"2014-12-24","v":2047.8850050000003},{"d":"2014-12-25","v":2044.1451450000002},{"d":"2014-12-26","v":2059.5122640000004},{"d":"2014-12-29","v":2065.033936},{"d":"2014-12-30","v":2052.5412},{"d":"2014-12-31","v":2043.6636660000001},{"d":"2015-01-01","v":2042.255717},{"d":"2015-01-02","v":2057.895025},{"d":"2015-01-05","v":2031.21954},{"d":"2015-01-06","v":2020.97948},{"d":"2015-01-07","v":2053.0418799999998},{"d":"2015-01-08","v":2097.81215},{"d":"2015-01-09","v":2071.605625},{"d":"2015-01-12","v":2056.8974999999996},{"d":"2015-01-13","v":2060.8118400000003},{"d":"2015-01-14","v":2046.16082},{"d":"2015-01-15","v":1709.889421845},{"d":"2015-01-16","v":1731.2859134999999},{"d":"2015-01-19","v":1773.5072354999998},{"d":"2015-01-20","v":1766.9709750000002},{"d":"2015-01-21","v":1747.7267880000002},{"d":"2015-01-22","v":1795.3371},{"d":"2015-01-23","v":1807.0565139999997},{"d":"2015-01-26","v":1853.795895},{"d":"2015-01-27","v":1829.93124},{"d":"2015-01-28","v":1812.1976509999997},{"d":"2015-01-29","v":1864.0665606999996},{"d":"2015-01-30","v":1837.2237025},{"d":"2015-02-02","v":1874.9988319999998},{"d":"2015-02-03","v":1892.7728100000002},{"d":"2015-02-04","v":1888.463067},{"d":"2015-02-05","v":1899.0144779999998},{"d":"2015-02-06","v":1905.1504525},{"d":"2015-02-09","v":1891.579257},{"d":"2015-02-10","v":1917.0976784999998},{"d":"2015-02-11","v":1921.2415850000002},{"d":"2015-02-12","v":1945.0034159999998},{"d":"2015-02-13","v":1955.9257860000002},{"d":"2015-02-16","v":1955.1496000000002},{"d":"2015-02-17","v":1968.6256450000003},{"d":"2015-02-18","v":1979.0988985000004},{"d":"2015-02-19","v":1994.1170659999998},{"d":"2015-02-20","v":1981.83373605},{"d":"2015-02-23","v":2006.77063215},{"d":"2015-02-24","v":2014.376643},{"d":"2015-02-25","v":2007.120083},{"d":"2015-02-26","v":2013.161982},{"d":"2015-02-27","v":2009.5173389999998},{"d":"2015-03-02","v":2031.2881800000002},{"d":"2015-03-03","v":2028.9476479999998},{"d":"2015-03-04","v":2025.1465533},{"d":"2015-03-05","v":2049.0701289999997},{"d":"2015-03-06","v":2045.6802500000001},{"d":"2015-03-09","v":2053.9816260000002},{"d":"2015-03-10","v":2048.57012},{"d":"2015-03-11","v":2063.71175},{"d":"2015-03-12","v":2077.6272000000004},{"d":"2015-03-13","v":2069.3866688000003},{"d":"2015-03-16","v":2101.6520800000003},{"d":"2015-03-17","v":2091.7656599999996},{"d":"2015-03-18","v":2068.558725},{"d":"2015-03-19","v":2072.300675},{"d":"2015-03-20","v":2052.9177674999996},{"d":"2015-03-23","v":2026.605},{"d":"2015-03-24","v":2002.9805579999997},{"d":"2015-03-25","v":1976.047024},{"d":"2015-03-26","v":1978.3101520000002},{"d":"2015-03-27","v":1978.3238310000002},{"d":"2015-03-30","v":2014.98535},{"d":"2015-03-31","v":2006.5305645},{"d":"2015-04-01","v":1988.76931},{"d":"2015-04-02","v":1980.53739},{"d":"2015-04-03","v":1960.6164124999998},{"d":"2015-04-06","v":1991.2192300000002},{"d":"2015-04-07","v":2002.708268},{"d":"2015-04-08","v":2009.63122875},{"d":"2015-04-09","v":2041.318575},{"d":"2015-04-10","v":2061.5426},{"d":"2015-04-13","v":2044.4820200000001},{"d":"2015-04-14","v":2037.1540815000003},{"d":"2015-04-15","v":2030.2286400000003},{"d":"2015-04-16","v":2011.1371999999997},{"d":"2015-04-17","v":1980.2038750000002},{"d":"2015-04-20","v":2006.774565},{"d":"2015-04-21","v":2002.9376},{"d":"2015-04-22","v":2044.7433825000003},{"d":"2015-04-23","v":2015.332156},{"d":"2015-04-24","v":2018.7061637049997},{"d":"2015-04-27","v":2013.6965800000003},{"d":"2015-04-28","v":2020.3514880000002},{"d":"2015-04-29","v":1980.4003214999998},{"d":"2015-04-30","v":1946.18256},{"d":"2015-05-01","v":1965.3643679999998},{"d":"2015-05-04","v":1972.8940859999998},{"d":"2015-05-05","v":1935.4898349999999},{"d":"2015-05-06","v":1905.80243},{"d":"2015-05-07","v":1926.2200269999998},{"d":"2015-05-08","v":1968.626793},{"d":"2015-05-11","v":1967.7035754999997},{"d":"2015-05-12","v":1950.0317649999997},{"d":"2015-05-13","v":1926.5134600000004},{"d":"2015-05-14","v":1937.0528799999997},{"d":"2015-05-15","v":1946.3434140000002},{"d":"2015-05-18","v":1973.41255},{"d":"2015-05-19","v":1996.1230545000003},{"d":"2015-05-20","v":1995.05814},{"d":"2015-05-21","v":2000.441625},{"d":"2015-05-22","v":2010.3806615},{"d":"2015-05-25","v":2014.054739},{"d":"2015-05-26","v":2008.8559400000001},{"d":"2015-05-27","v":2020.9690500000002},{"d":"2015-05-28","v":2004.0077039999999},{"d":"2015-05-29","v":1985.0432669999996},{"d":"2015-06-01","v":2001.8436044999999},{"d":"2015-06-02","v":1972.0944800000004},{"d":"2015-06-03","v":1979.428164},{"d":"2015-06-04","v":1962.74331198},{"d":"2015-06-05","v":1970.9779430000003},{"d":"2015-06-08","v":1934.2982879999997},{"d":"2015-06-09","v":1941.0030199999999},{"d":"2015-06-10","v":1966.581375},{"d":"2015-06-11","v":1976.1057065000002},{"d":"2015-06-12","v":1948.157765},{"d":"2015-06-15","v":1944.9843875000004},{"d":"2015-06-16","v":1960.223825},{"d":"2015-06-17","v":1942.0609800000002},{"d":"2015-06-18","v":1960.5123640000002},{"d":"2015-06-19","v":1934.1290475},{"d":"2015-06-22","v":1952.8418069999996},{"d":"2015-06-23","v":1981.0897200000002},{"d":"2015-06-24","v":1965.575325},{"d":"2015-06-25","v":1965.0870680000003},{"d":"2015-06-26","v":1958.6906819999997},{"d":"2015-06-29","v":1899.7138889999999},{"d":"2015-06-30","v":1925.623825},{"d":"2015-07-01","v":1966.58125},{"d":"2015-07-02","v":1956.17716},{"d":"2015-07-03","v":1949.232275},{"d":"2015-07-06","v":1947.8192},{"d":"2015-07-07","v":1969.4605530000001},{"d":"2015-07-08","v":1934.0459065},{"d":"2015-07-09","v":1944.470265},{"d":"2015-07-10","v":1947.6043859999995},{"d":"2015-07-13","v":1993.3394250000003},{"d":"2015-07-14","v":1991.357894},{"d":"2015-07-15","v":2004.9018950000002},{"d":"2015-07-16","v":2033.17587},{"d":"2015-07-17","v":2043.3139199999998},{"d":"2015-07-20","v":2050.324255},{"d":"2015-07-21","v":2028.882625},{"d":"2015-07-22","v":2028.4544789999998},{"d":"2015-07-23","v":2017.4127300000002},{"d":"2015-07-24","v":2002.7903999999999},{"d":"2015-07-27","v":1990.1366205000002},{"d":"2015-07-28","v":2014.0267290000002},{"d":"2015-07-29","v":2039.8320600000002},{"d":"2015-07-30","v":2043.7417849999997},{"d":"2015-07-31","v":2034.37725},{"d":"2015-08-03","v":2033.3476170000001},{"d":"2015-08-04","v":2047.1082600000002},{"d":"2015-08-05","v":2057.110475},{"d":"2015-08-06","v":2043.600975},{"d":"2015-08-07","v":2044.5540025},{"d":"2015-08-10","v":2071.3244474999997},{"d":"2015-08-11","v":2061.763935},{"d":"2015-08-12","v":2037.8265719999997},{"d":"2015-08-13","v":2036.532033},{"d":"2015-08-14","v":2044.0229679999998},{"d":"2015-08-17","v":2060.6968565},{"d":"2015-08-18","v":2051.882564},{"d":"2015-08-19","v":2010.3921599999996},{"d":"2015-08-20","v":1955.66436},{"d":"2015-08-21","v":1869.836719},{"d":"2015-08-24","v":1768.027625},{"d":"2015-08-25","v":1761.1526245},{"d":"2015-08-26","v":1856.2957140000003},{"d":"2015-08-27","v":1924.2806455},{"d":"2015-08-28","v":1918.906976},{"d":"2015-08-31","v":1911.5578515},{"d":"2015-09-01","v":1839.0743},{"d":"2015-09-02","v":1894.69536},{"d":"2015-09-03","v":1903.4837},{"d":"2015-09-04","v":1872.822196},{"d":"2015-09-07","v":1878.7154500000001},{"d":"2015-09-08","v":1932.1486950000003},{"d":"2015-09-09","v":1900.8582149999997},{"d":"2015-09-10","v":1905.7478024999998},{"d":"2015-09-11","v":1906.4401110000001},{"d":"2015-09-14","v":1897.7688199999998},{"d":"2015-09-15","v":1933.0004000000001},{"d":"2015-09-16","v":1944.5285020000001},{"d":"2015-09-17","v":1919.6349895},{"d":"2015-09-18","v":1893.2166525},{"d":"2015-09-21","v":1909.6894300000001},{"d":"2015-09-22","v":1890.2346799999998},{"d":"2015-09-23","v":1895.828},{"d":"2015-09-24","v":1887.4300500000002},{"d":"2015-09-25","v":1888.1847075},{"d":"2015-09-28","v":1830.8413799999998},{"d":"2015-09-29","v":1827.35065},{"d":"2015-09-30","v":1866.2366625},{"d":"2015-10-01","v":1877.5904249999999},{"d":"2015-10-02","v":1894.3957500000001},{"d":"2015-10-05","v":1937.166435},{"d":"2015-10-06","v":1913.42046},{"d":"2015-10-07","v":1941.4757009999998},{"d":"2015-10-08","v":1944.09102},{"d":"2015-10-09","v":1936.2912750000003},{"d":"2015-10-12","v":1940.6376},{"d":"2015-10-13","v":1918.495125},{"d":"2015-10-14","v":1892.0094374999999},{"d":"2015-10-15","v":1924.6216725},{"d":"2015-10-16","v":1938.8604045},{"d":"2015-10-19","v":1944.6239400000002},{"d":"2015-10-20","v":1941.885653},{"d":"2015-10-21","v":1936.9526},{"d":"2015-10-22","v":1997.5903199999998},{"d":"2015-10-23","v":1981.9280099999999},{"d":"2015-10-26","v":2034.3131999999998},{"d":"2015-10-27","v":2039.142},{"d":"2015-10-28","v":2076.1376474999997},{"d":"2015-10-29","v":2065.4644395},{"d":"2015-10-30","v":2053.9221435},{"d":"2015-11-02","v":2076.5492999999997},{"d":"2015-11-03","v":2091.432},{"d":"2015-11-04","v":2089.1693040000005},{"d":"2015-11-05","v":2092.148325},{"d":"2015-11-06","v":2112.4773},{"d":"2015-11-09","v":2087.97876},{"d":"2015-11-10","v":2098.42644},{"d":"2015-11-11","v":2086.1250800000003},{"d":"2015-11-12","v":2049.1169400000003},{"d":"2015-11-13","v":2037.4511299999997},{"d":"2015-11-16","v":2075.7338999999997},{"d":"2015-11-17","v":2083.979475},{"d":"2015-11-18","v":2128.3154449999997},{"d":"2015-11-19","v":2112.924325},{"d":"2015-11-20","v":2132.0398088},{"d":"2015-11-23","v":2129.273415},{"d":"2015-11-24","v":2128.356775},{"d":"2015-11-25","v":2138.9364199999995},{"d":"2015-11-26","v":2141.3435999999997},{"d":"2015-11-27","v":2158.5727799999995},{"d":"2015-11-30","v":2147.8374799999997},{"d":"2015-12-01","v":2161.68214},{"d":"2015-12-02","v":2124.5977165},{"d":"2015-12-03","v":2044.2774250000002},{"d":"2015-12-04","v":2089.0938819999997},{"d":"2015-12-07","v":2084.1771375},{"d":"2015-12-08","v":2053.761876},{"d":"2015-12-09","v":2019.457298},{"d":"2015-12-10","v":2034.9220149999999},{"d":"2015-12-11","v":1983.9252299999998},{"d":"2015-12-14","v":1999.080132},{"d":"2015-12-15","v":2032.6240935},{"d":"2015-12-16","v":2060.8491950000002},{"d":"2015-12-17","v":2038.4594300000003},{"d":"2015-12-18","v":1984.5263692800002},{"d":"2015-12-21","v":2001.57475},{"d":"2015-12-22","v":2010.407025},{"d":"2015-12-23","v":2041.9672300000002},{"d":"2015-12-24","v":2028.1487760000002},{"d":"2015-12-25","v":2033.5170240000002},{"d":"2015-12-28","v":2027.372195},{"d":"2015-12-29","v":2058.7561},{"d":"2015-12-30","v":2035.9269450000002},{"d":"2015-12-31","v":2041.656115},{"d":"2016-01-01","v":2040.840635},{"d":"2016-01-04","v":2014.8154416},{"d":"2016-01-05","v":2030.4135600000002},{"d":"2016-01-06","v":2003.6085499999997},{"d":"2016-01-07","v":1929.6332},{"d":"2016-01-08","v":1909.18283095},{"d":"2016-01-11","v":1923.7895400000002},{"d":"2016-01-12","v":1942.1273328},{"d":"2016-01-13","v":1900.1018750000003},{"d":"2016-01-14","v":1929.952115},{"d":"2016-01-15","v":1881.1988649999998},{"d":"2016-01-18","v":1888.05393},{"d":"2016-01-19","v":1886.99404},{"d":"2016-01-20","v":1865.4111999999998},{"d":"2016-01-21","v":1881.368475},{"d":"2016-01-22","v":1935.2069},{"d":"2016-01-25","v":1900.4179199999996},{"d":"2016-01-26","v":1935.1898999999999},{"d":"2016-01-27","v":1909.4254349999999},{"d":"2016-01-28","v":1917.5754000000002},{"d":"2016-01-29","v":1981.763784},{"d":"2016-02-01","v":1974.8427000000001},{"d":"2016-02-02","v":1937.5402399999998},{"d":"2016-02-03","v":1923.6171499999998},{"d":"2016-02-04","v":1903.8334},{"d":"2016-02-05","v":1862.2931775},{"d":"2016-02-08","v":1830.7072859999998},{"d":"2016-02-09","v":1805.3464800000002},{"d":"2016-02-10","v":1804.251895},{"d":"2016-02-11","v":1778.5877900000003},{"d":"2016-02-12","v":1823.785686},{"d":"2016-02-15","v":1841.534199},{"d":"2016-02-16","v":1876.63953},{"d":"2016-02-17","v":1914.43044},{"d":"2016-02-18","v":1908.99042},{"d":"2016-02-19","v":1900.4063999999998},{"d":"2016-02-22","v":1947.41044},{"d":"2016-02-23","v":1907.1412799999998},{"d":"2016-02-24","v":1910.4582},{"d":"2016-02-25","v":1936.0415399999997},{"d":"2016-02-26","v":1945.0198150800002},{"d":"2016-02-29","v":1931.97075},{"d":"2016-03-01","v":1976.206683},{"d":"2016-03-02","v":1983.5524},{"d":"2016-03-03","v":1981.768},{"d":"2016-03-04","v":1990.6707600000002},{"d":"2016-03-07","v":1997.1843645},{"d":"2016-03-08","v":1975.4688},{"d":"2016-03-09","v":1988.5862129999998},{"d":"2016-03-10","v":1965.06992},{"d":"2016-03-11","v":1992.664452},{"d":"2016-03-14","v":1999.4850000000001},{"d":"2016-03-15","v":1995.8222399999997},{"d":"2016-03-16","v":1989.163383},{"d":"2016-03-17","v":1979.692935},{"d":"2016-03-18","v":1981.137092},{"d":"2016-03-21","v":1986.7316899999998},{"d":"2016-03-22","v":1989.95968},{"d":"2016-03-23","v":1981.8993275999999},{"d":"2016-03-24","v":1982.34964},{"d":"2016-03-25","v":1986.1581400000002},{"d":"2016-03-28","v":1979.740516},{"d":"2016-03-29","v":1982.8412373600002},{"d":"2016-03-30","v":1987.9899900000003},{"d":"2016-03-31","v":1976.9996400000002},{"d":"2016-04-01","v":1982.355676},{"d":"2016-04-04","v":1977.628125},{"d":"2016-04-05","v":1952.3550358000002},{"d":"2016-04-06","v":1973.89125},{"d":"2016-04-07","v":1949.048175},{"d":"2016-04-08","v":1949.67492288},{"d":"2016-04-11","v":1948.08592485},{"d":"2016-04-12","v":1967.184648},{"d":"2016-04-13","v":2011.2637355999998},{"d":"2016-04-14","v":2011.768715},{"d":"2016-04-15","v":2011.248066},{"d":"2016-04-18","v":2017.3797468000002},{"d":"2016-04-19","v":2018.9231499999999},{"d":"2016-04-20","v":2041.7518},{"d":"2016-04-21","v":2037.4574999999998},{"d":"2016-04-22","v":2045.2102869999997},{"d":"2016-04-25","v":2034.2291235000002},{"d":"2016-04-26","v":2034.22535848},{"d":"2016-04-27","v":2033.16533},{"d":"2016-04-28","v":2005.021577},{"d":"2016-04-29","v":1979.72339292},{"d":"2016-05-02","v":1986.0615074999998},{"d":"2016-05-03","v":1968.8718998000002},{"d":"2016-05-04","v":1963.278265},{"d":"2016-05-05","v":1984.0071149999999},{"d":"2016-05-06","v":2000.7401459999996},{"d":"2016-05-09","v":1999.6576771599998},{"d":"2016-05-10","v":2034.3365075},{"d":"2016-05-11","v":2005.21825},{"d":"2016-05-12","v":2004.695784},{"d":"2016-05-13","v":1997.300706},{"d":"2016-05-16","v":2021.6880600000002},{"d":"2016-05-17","v":2008.3572431999999},{"d":"2016-05-18","v":2023.8141059999998},{"d":"2016-05-19","v":2022.9073},{"d":"2016-05-20","v":2034.7414310000001},{"d":"2016-05-23","v":2030.1425299999999},{"d":"2016-05-24","v":2065.126089},{"d":"2016-05-25","v":2074.5926400000003},{"d":"2016-05-26","v":2071.3146300000003},{"d":"2016-05-27","v":2091.46752},{"d":"2016-05-30","v":2086.84224},{"d":"2016-05-31","v":2085.59976},{"d":"2016-06-01","v":2079.0446250000005},{"d":"2016-06-02","v":2089.06355},{"d":"2016-06-03","v":2051.901726},{"d":"2016-06-06","v":2048.2985249999997},{"d":"2016-06-07","v":2043.389376},{"d":"2016-06-08","v":2036.5221149999998},{"d":"2016-06-09","v":2045.8297200000002},{"d":"2016-06-10","v":2025.6840029999998},{"d":"2016-06-13","v":2010.1069029799999},{"d":"2016-06-14","v":2004.194948},{"d":"2016-06-15","v":1998.67965},{"d":"2016-06-16","v":2010.1766454999997},{"d":"2016-06-17","v":1982.137656},{"d":"2016-06-20","v":1999.2987575},{"d":"2016-06-21","v":2006.433018},{"d":"2016-06-22","v":1995.751835},{"d":"2016-06-23","v":2029.9948949999998},{"d":"2016-06-24","v":1975.1751809999998},{"d":"2016-06-27","v":1951.8385},{"d":"2016-06-28","v":1992.444178395},{"d":"2016-06-29","v":2024.6480199999999},{"d":"2016-06-30","v":2044.3712625},{"d":"2016-07-01","v":2042.32995924},{"d":"2016-07-04","v":2039.0656908},{"d":"2016-07-05","v":2036.99934},{"d":"2016-07-06","v":2044.7825309999998},{"d":"2016-07-07","v":2051.573829},{"d":"2016-07-08","v":2090.711005},{"d":"2016-07-11","v":2097.6793199999997},{"d":"2016-07-12","v":2125.6727925},{"d":"2016-07-13","v":2116.9405079999997},{"d":"2016-07-14","v":2120.537022},{"d":"2016-07-15","v":2120.637665},{"d":"2016-07-18","v":2125.93905804},{"d":"2016-07-19","v":2130.7362115},{"d":"2016-07-20","v":2143.236788},{"d":"2016-07-21","v":2131.9295567499994},{"d":"2016-07-22","v":2143.963284},{"d":"2016-07-25","v":2135.90902},{"d":"2016-07-26","v":2150.7127125},{"d":"2016-07-27","v":2135.5908900000004},{"d":"2016-07-28","v":2126.0259675},{"d":"2016-07-29","v":2105.206376},{"d":"2016-08-01","v":2100.141905},{"d":"2016-08-02","v":2079.1121409800003},{"d":"2016-08-03","v":2104.1339850000004},{"d":"2016-08-04","v":2110.4273943999997},{"d":"2016-08-05","v":2139.7894410000004},{"d":"2016-08-08","v":2143.322475},{"d":"2016-08-09","v":2141.174884},{"d":"2016-08-10","v":2121.347962},{"d":"2016-08-11","v":2132.777695},{"d":"2016-08-12","v":2129.275005},{"d":"2016-08-15","v":2132.074335},{"d":"2016-08-16","v":2096.66622},{"d":"2016-08-17","v":2101.5382874999996},{"d":"2016-08-18","v":2089.4783060000004},{"d":"2016-08-19","v":2100.486283},{"d":"2016-08-22","v":2102.1602615},{"d":"2016-08-23","v":2108.9219669999998},{"d":"2016-08-24","v":2106.26094},{"d":"2016-08-25","v":2108.0979500000003},{"d":"2016-08-26","v":2125.4112705000002},{"d":"2016-08-29","v":2136.5730836800003},{"d":"2016-08-30","v":2144.2916},{"d":"2016-08-31","v":2138.1714180000004},{"d":"2016-09-01","v":2130.3133049999997},{"d":"2016-09-02","v":2142.253374},{"d":"2016-09-05","v":2139.9168149999996},{"d":"2016-09-06","v":2124.7192269399998},{"d":"2016-09-07","v":2125.27304},{"d":"2016-09-08","v":2124.8240165},{"d":"2016-09-09","v":2080.247808},{"d":"2016-09-12","v":2102.71663},{"d":"2016-09-13","v":2083.854144},{"d":"2016-09-14","v":2075.164455},{"d":"2016-09-15","v":2092.478544},{"d":"2016-09-16","v":2091.794132},{"d":"2016-09-19","v":2091.5140345},{"d":"2016-09-20","v":2090.12877},{"d":"2016-09-21","v":2101.97889},{"d":"2016-09-22","v":2104.4742},{"d":"2016-09-23","v":2095.664574},{"d":"2016-09-26","v":2076.371232},{"d":"2016-09-27","v":2091.9667295},{"d":"2016-09-28","v":2103.8776959999996},{"d":"2016-09-29","v":2073.8088000000002},{"d":"2016-09-30","v":2100.954345},{"d":"2016-10-03","v":2101.1577500000003},{"d":"2016-10-04","v":2101.695732},{"d":"2016-10-05","v":2100.5273005},{"d":"2016-10-06","v":2117.0607360000004},{"d":"2016-10-07","v":2101.865472},{"d":"2016-10-10","v":2124.5826},{"d":"2016-10-11","v":2110.0863665},{"d":"2016-10-12","v":2117.3318249999998},{"d":"2016-10-13","v":2101.0667369999996},{"d":"2016-10-14","v":2110.665888},{"d":"2016-10-17","v":2099.811679},{"d":"2016-10-18","v":2115.6542015},{"d":"2016-10-19","v":2119.9791800000003},{"d":"2016-10-20","v":2123.34717},{"d":"2016-10-21","v":2126.8007149999994},{"d":"2016-10-24","v":2136.6512699999994},{"d":"2016-10-25","v":2129.3959335},{"d":"2016-10-26","v":2123.806136},{"d":"2016-10-27","v":2116.1918825},{"d":"2016-10-28","v":2099.268207},{"d":"2016-10-31","v":2103.01221},{"d":"2016-11-01","v":2057.537409},{"d":"2016-11-02","v":2041.50429},{"d":"2016-11-03","v":2033.5693950000002},{"d":"2016-11-04","v":2019.410505},{"d":"2016-11-07","v":2076.5072999999998},{"d":"2016-11-08","v":2096.3403045000005},{"d":"2016-11-09","v":2129.9286552},{"d":"2016-11-10","v":2141.5535459999996},{"d":"2016-11-11","v":2138.0348219999996},{"d":"2016-11-14","v":2160.4744205},{"d":"2016-11-15","v":2186.0742000000005},{"d":"2016-11-16","v":2183.384205},{"d":"2016-11-17","v":2204.900815},{"d":"2016-11-18","v":2207.287},{"d":"2016-11-21","v":2220.102675},{"d":"2016-11-22","v":2230.17409},{"d":"2016-11-23","v":2243.96725},{"d":"2016-11-24","v":2244.18795},{"d":"2016-11-25","v":2246.7666000000004},{"d":"2016-11-28","v":2233.79312},{"d":"2016-11-29","v":2234.394195},{"d":"2016-11-30","v":2240.27289},{"d":"2016-12-01","v":2218.864635},{"d":"2016-12-02","v":2220.85496},{"d":"2016-12-05","v":2223.5915},{"d":"2016-12-06","v":2238.61575},{"d":"2016-12-07","v":2261.6097},{"d":"2016-12-08","v":2288.762325},{"d":"2016-12-09","v":2295.339085},{"d":"2016-12-12","v":2291.799375},{"d":"2016-12-13","v":2305.04508},{"d":"2016-12-14","v":2304.31482},{"d":"2016-12-15","v":2336.7100250000003},{"d":"2016-12-16","v":2309.4730000000004},{"d":"2016-12-19","v":2316.756925},{"d":"2016-12-20","v":2328.6372},{"d":"2016-12-21","v":2316.9646250000005},{"d":"2016-12-22","v":2310.93383},{"d":"2016-12-23","v":2316.5745850000003},{"d":"2016-12-26","v":2317.8159899999996},{"d":"2016-12-27","v":2326.395005},{"d":"2016-12-28","v":2307.393},{"d":"2016-12-29","v":2294.9883250000003},{"d":"2016-12-30","v":2276.0942250000003},{"d":"2017-01-02","v":2288.388375},{"d":"2017-01-03","v":2313.7779},{"d":"2017-01-04","v":2314.17483},{"d":"2017-01-05","v":2286.5267999999996},{"d":"2017-01-06","v":2313.22501},{"d":"2017-01-09","v":2296.07794},{"d":"2017-01-10","v":2302.41882},{"d":"2017-01-11","v":2303.2482},{"d":"2017-01-12","v":2289.53871},{"d":"2017-01-13","v":2290.0263},{"d":"2017-01-16","v":2295.7025500000004},{"d":"2017-01-17","v":2266.34625},{"d":"2017-01-18","v":2283.59925},{"d":"2017-01-19","v":2273.55824},{"d":"2017-01-20","v":2272.16154},{"d":"2017-01-23","v":2253.58475},{"d":"2017-01-24","v":2279.1864},{"d":"2017-01-25","v":2294.3225799999996},{"d":"2017-01-26","v":2293.98799},{"d":"2017-01-27","v":2287.86824},{"d":"2017-01-30","v":2263.89495},{"d":"2017-01-31","v":2252.0919400000002},{"d":"2017-02-01","v":2261.4047},{"d":"2017-02-02","v":2260.1617100000003},{"d":"2017-02-03","v":2276.42884},{"d":"2017-02-06","v":2268.4673700000003},{"d":"2017-02-07","v":2283.6765},{"d":"2017-02-08","v":2279.7918000000004},{"d":"2017-02-09","v":2310.1508},{"d":"2017-02-10","v":2320.88775},{"d":"2017-02-13","v":2341.4334300000005},{"d":"2017-02-14","v":2351.9568},{"d":"2017-02-15","v":2362.59044},{"d":"2017-02-16","v":2341.0972799999995},{"d":"2017-02-17","v":2357.48252},{"d":"2017-02-20","v":2357.7176099999997},{"d":"2017-02-21","v":2388.07602},{"d":"2017-02-22","v":2387.6094000000003},{"d":"2017-02-23","v":2379.7686},{"d":"2017-02-24","v":2385.39224},{"d":"2017-02-27","v":2392.677010000001},{"d":"2017-02-28","v":2379.36114},{"d":"2017-03-01","v":2418.66086},{"d":"2017-03-02","v":2414.6281800000006},{"d":"2017-03-03","v":2402.55834},{"d":"2017-03-06","v":2406.1006199999997},{"d":"2017-03-07","v":2401.9950000000003},{"d":"2017-03-08","v":2400.8474399999996},{"d":"2017-03-09","v":2397.9706400000005},{"d":"2017-03-10","v":2403.0459},{"d":"2017-03-13","v":2396.17356},{"d":"2017-03-14","v":2392.4531},{"d":"2017-03-15","v":2391.4116},{"d":"2017-03-16","v":2375.4992799999995},{"d":"2017-03-17","v":2366.03346},{"d":"2017-03-20","v":2365.0955300000005},{"d":"2017-03-21","v":2321.1726299999996},{"d":"2017-03-22","v":2323.12048},{"d":"2017-03-23","v":2324.85402},{"d":"2017-03-24","v":2318.2541800000004},{"d":"2017-03-27","v":2302.09148},{"d":"2017-03-28","v":2335.08036},{"d":"2017-03-29","v":2346.44948},{"d":"2017-03-30","v":2365.02661},{"d":"2017-03-31","v":2365.4151600000005},{"d":"2017-04-03","v":2357.0652800000003},{"d":"2017-04-04","v":2358.5676799999997},{"d":"2017-04-05","v":2358.3651},{"d":"2017-04-06","v":2366.8783200000003},{"d":"2017-04-07","v":2374.1088},{"d":"2017-04-10","v":2373.4039},{"d":"2017-04-11","v":2367.99444},{"d":"2017-04-12","v":2346.38478},{"d":"2017-04-13","v":2337.65554},{"d":"2017-04-14","v":2337.88805},{"d":"2017-04-17","v":2355.3173699999998},{"d":"2017-04-18","v":2330.04681},{"d":"2017-04-19","v":2329.7312},{"d":"2017-04-20","v":2350.34058},{"d":"2017-04-21","v":2336.04722},{"d":"2017-04-24","v":2361.73886},{"d":"2017-04-25","v":2369.99425},{"d":"2017-04-26","v":2367.7888},{"d":"2017-04-27","v":2372.1612},{"d":"2017-04-28","v":2368.41984},{"d":"2017-05-01","v":2377.2528},{"d":"2017-05-02","v":2367.8820900000005},{"d":"2017-05-03","v":2371.92208},{"d":"2017-05-04","v":2356.32244},{"d":"2017-05-05","v":2367.0375},{"d":"2017-05-08","v":2394.2034},{"d":"2017-05-09","v":2411.63968},{"d":"2017-05-10","v":2419.8085599999995},{"d":"2017-05-11","v":2412.71102},{"d":"2017-05-12","v":2392.1897999999997},{"d":"2017-05-15","v":2394.1088999999997},{"d":"2017-05-16","v":2366.4685600000003},{"d":"2017-05-17","v":2307.02706},{"d":"2017-05-18","v":2320.58277},{"d":"2017-05-19","v":2319.23292},{"d":"2017-05-22","v":2331.48768},{"d":"2017-05-23","v":2343.3680999999997},{"d":"2017-05-24","v":2342.5789600000003},{"d":"2017-05-25","v":2352.08304},{"d":"2017-05-26","v":2355.22224},{"d":"2017-05-29","v":2363.44038},{"d":"2017-05-30","v":2355.1079999999997},{"d":"2017-05-31","v":2337.1392},{"d":"2017-06-01","v":2363.9990400000006},{"d":"2017-06-02","v":2350.38042},{"d":"2017-06-05","v":2354.74749},{"d":"2017-06-06","v":2339.4369899999997},{"d":"2017-06-07","v":2350.58802},{"d":"2017-06-08","v":2359.05906},{"d":"2017-06-09","v":2359.61654},{"d":"2017-06-12","v":2356.4548800000007},{"d":"2017-06-13","v":2369.2004},{"d":"2017-06-14","v":2371.5704},{"d":"2017-06-15","v":2377.4888100000003},{"d":"2017-06-16","v":2362.5856799999997},{"d":"2017-06-19","v":2386.90296},{"d":"2017-06-20","v":2369.3475},{"d":"2017-06-21","v":2362.9317},{"d":"2017-06-22","v":2359.67628},{"d":"2017-06-23","v":2356.65909},{"d":"2017-06-26","v":2365.75196},{"d":"2017-06-27","v":2337.04374},{"d":"2017-06-28","v":2337.04374}]}}]}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__queries_me__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__queries_news__ = __webpack_require__(60);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



var schema = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLSchema"]({
  query: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
    name: 'Query',
    fields: {
      me: __WEBPACK_IMPORTED_MODULE_1__queries_me__["a" /* default */],
      news: __WEBPACK_IMPORTED_MODULE_2__queries_news__["a" /* default */]
    }
  })
});
/* harmony default export */ __webpack_exports__["a"] = (schema);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types_UserType__ = __webpack_require__(59);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var me = {
  type: __WEBPACK_IMPORTED_MODULE_0__types_UserType__["a" /* default */],
  resolve: function resolve(_ref) {
    var request = _ref.request;
    return request.user && {
      id: request.user.id,
      email: request.user.email
    };
  }
};
/* harmony default export */ __webpack_exports__["a"] = (me);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var UserType = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'User',
  fields: {
    id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    email: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (UserType);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_fetch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_NewsItemType__ = __webpack_require__(61);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


 // React.js News Feed (RSS)

var url = 'https://api.rss2json.com/v1/api.json' + '?rss_url=https%3A%2F%2Freactjsnews.com%2Ffeed.xml';
var items = [];
var lastFetchTask;
var lastFetchTime = new Date(1970, 0, 1);
var news = {
  type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__types_NewsItemType__["a" /* default */]),
  resolve: function resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if (new Date() - lastFetchTime > 1000 * 60 * 10
    /* 10 mins */
    ) {
        lastFetchTime = new Date();
        lastFetchTask = __WEBPACK_IMPORTED_MODULE_1_node_fetch___default()(url).then(function (response) {
          return response.json();
        }).then(function (data) {
          if (data.status === 'ok') {
            items = data.items;
          }

          lastFetchTask = null;
          return items;
        }).catch(function (err) {
          lastFetchTask = null;
          throw err;
        });

        if (items.length) {
          return items;
        }

        return lastFetchTask;
      }

    return items;
  }
};
/* harmony default export */ __webpack_exports__["a"] = (news);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var NewsItemType = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'NewsItem',
  fields: {
    title: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    link: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    author: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    pubDate: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    content: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (NewsItemType);

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("./assets.json");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map