/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/row */ "./src/js/utils/row.js");
/* harmony import */ var _utils_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/column */ "./src/js/utils/column.js");
/* harmony import */ var _utils_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/image */ "./src/js/utils/image.js");



var parentNode = document.querySelector('#image-grid');

function img(src) {
  return new _utils_image__WEBPACK_IMPORTED_MODULE_2__["default"](src);
}

function drawStoryboard(element, options) {
  element.width = options.width;
  element.draw(parentNode);
}

function drawStoryboardCol(element, options) {
  element.height = options.height;
  element.draw(parentNode);
} // Код пользователя


document.onreadystatechange = function () {
  var row1 = new _utils_row__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var col1 = new _utils_column__WEBPACK_IMPORTED_MODULE_1__["default"]();
  row1.add(img('images/img1.jpg')).add(img('images/img2.jpg')).add(img('images/img3.jpg'));
  col1.add(img('images/img1.jpg')).add(img('images/img2.jpg')).add(img('images/img3.jpg'));
  drawStoryboard(row1, {
    width: 800
  });
  drawStoryboardCol(col1, {
    height: 900
  });
};

/***/ }),

/***/ "./src/js/utils/column.js":
/*!********************************!*\
  !*** ./src/js/utils/column.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return column; });
/* harmony import */ var _imageField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageField */ "./src/js/utils/imageField.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var column =
/*#__PURE__*/
function (_imageField) {
  _inherits(column, _imageField);

  function column() {
    _classCallCheck(this, column);

    return _possibleConstructorReturn(this, _getPrototypeOf(column).call(this));
  }

  _createClass(column, [{
    key: "draw",
    value: function draw(parentNode) {
      var _this = this;

      var ratioSum = this.elements.reduce(function (acc, cur) {
        return acc + cur.WHratio;
      }, 0);
      this.width = this.height / ratioSum;
      this.WHratio = this.width / this.height;
      var div = document.createElement('div');
      div.className = 'column';
      parentNode.appendChild(div);
      this.elements.forEach(function (el) {
        var elWidth = _this.width;
        var elHeight = _this.width / el.WHratio;
        el.draw(elHeight, elWidth, div);
      });
    }
  }]);

  return column;
}(_imageField__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/utils/image.js":
/*!*******************************!*\
  !*** ./src/js/utils/image.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return image; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var image =
/*#__PURE__*/
function () {
  function image(src) {
    _classCallCheck(this, image);

    this.element = document.createElement('img');
    this.element.src = src;
    this.WHratio = this.element.naturalWidth / this.element.naturalHeight;
  }

  _createClass(image, [{
    key: "draw",
    value: function draw(height, width, parentNode) {
      this.element.width = width;
      this.element.height = height;
      parentNode.appendChild(this.element);
    }
  }]);

  return image;
}();



/***/ }),

/***/ "./src/js/utils/imageField.js":
/*!************************************!*\
  !*** ./src/js/utils/imageField.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return imageField; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var imageField =
/*#__PURE__*/
function () {
  function imageField() {
    _classCallCheck(this, imageField);

    this.elements = [];
    this.height = null;
    this.WHratio = null;
  }

  _createClass(imageField, [{
    key: "add",
    value: function add(element) {
      this.elements.push(element);
      return this;
    }
  }]);

  return imageField;
}();


;

/***/ }),

/***/ "./src/js/utils/row.js":
/*!*****************************!*\
  !*** ./src/js/utils/row.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return row; });
/* harmony import */ var _imageField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageField */ "./src/js/utils/imageField.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var row =
/*#__PURE__*/
function (_imageField) {
  _inherits(row, _imageField);

  function row() {
    _classCallCheck(this, row);

    return _possibleConstructorReturn(this, _getPrototypeOf(row).call(this));
  }

  _createClass(row, [{
    key: "draw",
    value: function draw(parentNode) {
      var _this = this;

      var ratioSum = this.elements.reduce(function (acc, cur) {
        return acc + cur.WHratio;
      }, 0);
      this.height = this.width / ratioSum;
      this.WHratio = this.width / this.height;
      var div = document.createElement('div');
      div.className = 'row';
      parentNode.appendChild(div);
      this.elements.forEach(function (el) {
        var elHeight = _this.height;
        var elWidth = _this.height * el.WHratio;
        el.draw(elHeight, elWidth, div);
      });
    }
  }]);

  return row;
}(_imageField__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ })

/******/ });
//# sourceMappingURL=script.js.map