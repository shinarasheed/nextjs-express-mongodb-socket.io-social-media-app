module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/reset/[token].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/reset/[token].js":
/*!********************************!*\
  !*** ./pages/reset/[token].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\REACT\\mernChat\\pages\\reset\\[token].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function TokenPage() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    0: newPassword,
    1: setNewPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    field1: '',
    field2: ''
  });
  const {
    field1,
    field2
  } = newPassword;
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: success,
    1: setSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setNewPassword(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    errorMsg !== null && setTimeout(() => setErrorMsg(null), 5000);
  }, [errorMsg]);

  const resetPassword = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      if (field1 !== field2) {
        return setErrorMsg('Passwords do not match');
      }

      await axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default.a}/api/reset/token`, {
        password: field1,
        token: router.query.token
      });
      setSuccess(true);
    } catch (error) {
      setErrorMsg(Object(_utils_catchErrors__WEBPACK_IMPORTED_MODULE_4__["default"])(error));
    }

    setLoading(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, success ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
    attached: true,
    success: true,
    size: "large",
    header: "Password reset successfull",
    icon: "check",
    content: "Login Again",
    style: {
      cursor: 'pointer'
    },
    onClick: () => router.push('/login'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
    attached: true,
    icon: "settings",
    header: "Reset Password",
    color: "teal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }), !success && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    loading: loading,
    onSubmit: resetPassword,
    error: errorMsg !== null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
    error: true,
    header: "Oops!",
    content: errorMsg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
    fluid: true,
    icon: "eye",
    type: "password",
    iconPosition: "left",
    label: "New Password",
    placeholder: "Enter new Password",
    name: "field1",
    onChange: handleChange,
    value: field1,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
    fluid: true,
    icon: "eye",
    type: "password",
    iconPosition: "left",
    label: "Confirm Password",
    placeholder: "Confirm new Password",
    name: "field2",
    onChange: handleChange,
    value: field2,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    disabled: field1 === '' || field2 === '' || loading,
    icon: "configure",
    type: "submit",
    color: "orange",
    content: "Reset",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (TokenPage);

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

const baseUrl = 'http://localhost:3000';
module.exports = baseUrl;

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catchErrors = error => {
  let errorMsg;

  if (error.response) {
    // If the request was made and the server not responded with a status code in the range of 2xx
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    // if something else happened while making the request
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVzZXQvW3Rva2VuXS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NhdGNoRXJyb3JzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiVG9rZW5QYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwibmV3UGFzc3dvcmQiLCJzZXROZXdQYXNzd29yZCIsInVzZVN0YXRlIiwiZmllbGQxIiwiZmllbGQyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldiIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJyZXNldFBhc3N3b3JkIiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInBvc3QiLCJiYXNlVXJsIiwicGFzc3dvcmQiLCJ0b2tlbiIsInF1ZXJ5IiwiZXJyb3IiLCJjYXRjaEVycm9ycyIsImN1cnNvciIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsInJlcXVlc3QiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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QUFDRCxHQUxNLE1BS0E7QUFDTDtBQUNBQSxZQUFRLEdBQUdvQixLQUFLLENBQUNVLE9BQWpCO0FBRUFGLFdBQU8sQ0FBQ1IsS0FBUixDQUFjcEIsUUFBZDtBQUNEOztBQUNELFNBQU9BLFFBQVA7QUFDRCxDQXJCRDs7QUF1QmVxQiwwRUFBZixFOzs7Ozs7Ozs7OztBQ3ZCQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9yZXNldC9bdG9rZW5dLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9yZXNldC9bdG9rZW5dLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBNZXNzYWdlLCBTZWdtZW50LCBEaXZpZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tICcuLi8uLi91dGlscy9iYXNlVXJsJztcclxuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gJy4uLy4uL3V0aWxzL2NhdGNoRXJyb3JzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmZ1bmN0aW9uIFRva2VuUGFnZSgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW25ld1Bhc3N3b3JkLCBzZXROZXdQYXNzd29yZF0gPSB1c2VTdGF0ZSh7IGZpZWxkMTogJycsIGZpZWxkMjogJycgfSk7XHJcblxyXG4gIGNvbnN0IHsgZmllbGQxLCBmaWVsZDIgfSA9IG5ld1Bhc3N3b3JkO1xyXG5cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuXHJcbiAgICBzZXROZXdQYXNzd29yZCgocHJldikgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGVycm9yTXNnICE9PSBudWxsICYmIHNldFRpbWVvdXQoKCkgPT4gc2V0RXJyb3JNc2cobnVsbCksIDUwMDApO1xyXG4gIH0sIFtlcnJvck1zZ10pO1xyXG5cclxuICBjb25zdCByZXNldFBhc3N3b3JkID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGZpZWxkMSAhPT0gZmllbGQyKSB7XHJcbiAgICAgICAgcmV0dXJuIHNldEVycm9yTXNnKCdQYXNzd29yZHMgZG8gbm90IG1hdGNoJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7YmFzZVVybH0vYXBpL3Jlc2V0L3Rva2VuYCwge1xyXG4gICAgICAgIHBhc3N3b3JkOiBmaWVsZDEsXHJcbiAgICAgICAgdG9rZW46IHJvdXRlci5xdWVyeS50b2tlbixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRTdWNjZXNzKHRydWUpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3JNc2coY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3N1Y2Nlc3MgPyAoXHJcbiAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgIGF0dGFjaGVkXHJcbiAgICAgICAgICBzdWNjZXNzXHJcbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgaGVhZGVyPVwiUGFzc3dvcmQgcmVzZXQgc3VjY2Vzc2Z1bGxcIlxyXG4gICAgICAgICAgaWNvbj1cImNoZWNrXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJMb2dpbiBBZ2FpblwiXHJcbiAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9sb2dpbicpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgIGF0dGFjaGVkXHJcbiAgICAgICAgICBpY29uPVwic2V0dGluZ3NcIlxyXG4gICAgICAgICAgaGVhZGVyPVwiUmVzZXQgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgY29sb3I9XCJ0ZWFsXCJcclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgeyFzdWNjZXNzICYmIChcclxuICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgIG9uU3VibWl0PXtyZXNldFBhc3N3b3JkfVxyXG4gICAgICAgICAgZXJyb3I9e2Vycm9yTXNnICE9PSBudWxsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17ZXJyb3JNc2d9IC8+XHJcblxyXG4gICAgICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICBpY29uPVwiZXllXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTmV3IFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG5ldyBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImZpZWxkMVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB2YWx1ZT17ZmllbGQxfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICBpY29uPVwiZXllXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlybSBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIG5ldyBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImZpZWxkMlwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB2YWx1ZT17ZmllbGQyfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZmllbGQxID09PSAnJyB8fCBmaWVsZDIgPT09ICcnIHx8IGxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgaWNvbj1cImNvbmZpZ3VyZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJSZXNldFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9rZW5QYWdlO1xyXG4iLCJjb25zdCBiYXNlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVcmw7XHJcbiIsImNvbnN0IGNhdGNoRXJyb3JzID0gZXJyb3IgPT4ge1xyXG4gIGxldCBlcnJvck1zZztcclxuXHJcbiAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAvLyBJZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciBub3QgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZSBpbiB0aGUgcmFuZ2Ugb2YgMnh4XHJcblxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgLy8gaWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIG5vIHJlc3BvbnNlIHdhcyByZWNldmllZCBmcm9tIHNlcnZlclxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXF1ZXN0O1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpZiBzb21ldGhpbmcgZWxzZSBoYXBwZW5lZCB3aGlsZSBtYWtpbmcgdGhlIHJlcXVlc3RcclxuICAgIGVycm9yTXNnID0gZXJyb3IubWVzc2FnZTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yTXNnO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0Y2hFcnJvcnM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=