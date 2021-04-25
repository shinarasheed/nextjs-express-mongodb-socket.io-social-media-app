module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/notifications.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout/NoData.js":
/*!*************************************!*\
  !*** ./components/Layout/NoData.js ***!
  \*************************************/
/*! exports provided: NoProfilePosts, NoFollowData, NoMessages, NoPosts, NoProfile, NoNotifications, NoPostFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoProfilePosts", function() { return NoProfilePosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoFollowData", function() { return NoFollowData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoMessages", function() { return NoMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPosts", function() { return NoPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoProfile", function() { return NoProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoNotifications", function() { return NoNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPostFound", function() { return NoPostFound; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\REACT\\mernChat\\components\\Layout\\NoData.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const NoProfilePosts = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  info: true,
  icon: "meh",
  header: "Sorry",
  content: "User has not posted anything yet!",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  icon: "long arrow alternate left",
  content: "Go Back",
  as: "a",
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}));
const NoFollowData = ({
  followersComponent,
  followingComponent
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, followersComponent && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  icon: "user outline",
  info: true,
  content: `User does not have followers`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 7
  }
}), followingComponent && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  icon: "user outline",
  info: true,
  content: `User does not follow any users`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 7
  }
}));
const NoMessages = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  info: true,
  icon: "telegram plane",
  header: "Sorry",
  content: "You have not messaged anyone yet.Search above to message someone!",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 3
  }
});
const NoPosts = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Posts. Make sure you have followed someone.",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 3
  }
});
const NoProfile = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Profile Found.",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 3
  }
});
const NoNotifications = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  content: "No Notifications",
  icon: "smile",
  info: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 3
  }
});
const NoPostFound = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Post Found.",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 3
  }
});

/***/ }),

/***/ "./components/Notifications/CommentNotifications.js":
/*!**********************************************************!*\
  !*** ./components/Notifications/CommentNotifications.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
var _jsxFileName = "C:\\Users\\User\\Desktop\\REACT\\mernChat\\components\\Notifications\\CommentNotifications.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CommentNotifications = ({
  notification
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Event, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Label, {
    image: notification.user.profilePicUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Summary, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].User, {
    as: "a",
    href: `/${notification.user.username}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, notification.user.name), ' ', "commented on your", ' ', __jsx("a", {
    href: `/post/${notification.post._id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, "post"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Date, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, Object(_utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__["default"])(notification.date)))), notification.post.picUrl && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Extra, {
    images: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: `/post/${notification.post._id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: notification.post.picUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Extra, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, notification.text)))), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CommentNotifications);

/***/ }),

/***/ "./components/Notifications/FollowNotifications.js":
/*!*********************************************************!*\
  !*** ./components/Notifications/FollowNotifications.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");
var _jsxFileName = "C:\\Users\\User\\Desktop\\REACT\\mernChat\\components\\Notifications\\FollowNotifications.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const FollowNotifications = ({
  notification,
  loggedUserFollowStats,
  setUserFollowStats
}) => {
  const {
    0: disabled,
    1: setDisabled
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const isFollowing = loggedUserFollowStats.following.length > 0 && loggedUserFollowStats.following.filter(following => following.user === notification.user._id).length > 0;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Event, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Label, {
    image: notification.user.profilePicUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Summary, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].User, {
    as: "a",
    href: `/${notification.user.username}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, notification.user.name), ' ', "started following you", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Date, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, Object(_utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__["default"])(notification.date)))), __jsx("div", {
    style: {
      position: 'absolute',
      right: '5px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    disabled: disabled,
    size: "small",
    compact: true,
    icon: isFollowing ? 'check circle' : 'add user',
    color: isFollowing ? 'instagram' : 'twitter',
    onClick: async () => {
      setDisabled(true);
      isFollowing ? await Object(_utils_profileActions__WEBPACK_IMPORTED_MODULE_3__["unFollowerUser"])(notification.user._id, setUserFollowStats) : await Object(_utils_profileActions__WEBPACK_IMPORTED_MODULE_3__["followUser"])(notification.user._id, setUserFollowStats);
      setDisabled(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  })))), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FollowNotifications);

/***/ }),

/***/ "./components/Notifications/LikeNotifications.js":
/*!*******************************************************!*\
  !*** ./components/Notifications/LikeNotifications.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
var _jsxFileName = "C:\\Users\\User\\Desktop\\REACT\\mernChat\\components\\Notifications\\LikeNotifications.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const LikeNotifications = ({
  notification
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Event, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Label, {
    image: notification.user.profilePicUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Summary, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].User, {
    as: "a",
    href: `/${notification.user.username}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, notification.user.name), ' ', "liked your ", __jsx("a", {
    href: `/post/${notification.post._id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 26
    }
  }, "post"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Date, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, Object(_utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__["default"])(notification.date)))), notification.post.picUrl && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Extra, {
    images: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: `/post/${notification.post._id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: notification.post.picUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }))))), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LikeNotifications);

/***/ }),

/***/ "./pages/notifications.js":
/*!********************************!*\
  !*** ./pages/notifications.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Notifications_LikeNotifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Notifications/LikeNotifications */ "./components/Notifications/LikeNotifications.js");
/* harmony import */ var _components_Notifications_CommentNotifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Notifications/CommentNotifications */ "./components/Notifications/CommentNotifications.js");
/* harmony import */ var _components_Notifications_FollowNotifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Notifications/FollowNotifications */ "./components/Notifications/FollowNotifications.js");
var _jsxFileName = "C:\\Users\\User\\Desktop\\REACT\\mernChat\\pages\\notifications.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function Notifications({
  notifications,
  errorLoading,
  user,
  userFollowStats
}) {
  const {
    0: loggedUserFollowStats,
    1: setUserFollowStats
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(userFollowStats);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const notificationRead = async () => {
      try {
        await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__["default"]}/api/notifications`, {}, {
          headers: {
            Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('token')
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    notificationRead();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    style: {
      marginTop: '1.5rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, notifications.length > 0 ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    color: "teal",
    raised: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      maxHeight: '40rem',
      overflow: 'auto',
      height: '40rem',
      position: 'relative',
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"], {
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, notifications.map(notification => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, notification.type === 'newLike' && notification.post !== null && __jsx(_components_Notifications_LikeNotifications__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: notification._id,
    notification: notification,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }), notification.type === 'newComment' && notification.post !== null && __jsx(_components_Notifications_CommentNotifications__WEBPACK_IMPORTED_MODULE_8__["default"], {
    key: notification._id,
    notification: notification,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }), notification.type === 'newFollower' && __jsx(_components_Notifications_FollowNotifications__WEBPACK_IMPORTED_MODULE_9__["default"], {
    key: notification._id,
    notification: notification,
    loggedUserFollowStats: loggedUserFollowStats,
    setUserFollowStats: setUserFollowStats,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 23
    }
  })))))) : __jsx(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_6__["NoNotifications"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  })));
}

Notifications.getInitialProps = async ctx => {
  try {
    const {
      token
    } = Object(nookies__WEBPACK_IMPORTED_MODULE_4__["parseCookies"])(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__["default"]}/api/notifications`, {
      headers: {
        Authorization: token
      }
    });
    return {
      notifications: res.data
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Notifications);

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "./utils/calculateTime.js":
/*!********************************!*\
  !*** ./utils/calculateTime.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ "react-moment");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\REACT\\mernChat\\utils\\calculateTime.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const calculateTime = createdAt => {
  const today = moment__WEBPACK_IMPORTED_MODULE_1___default()(Date.now());
  const postDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(createdAt);
  const diffInHours = today.diff(postDate, "hours");

  if (diffInHours < 24) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Today ", __jsx(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {
      format: "hh:mm A",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }
    }, createdAt));
  } else if (diffInHours > 24 && diffInHours < 36) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Yesterday ", __jsx(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {
      format: "hh:mm A",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 19
      }
    }, createdAt));
  } else if (diffInHours > 36) {
    return __jsx(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {
      format: "DD/MM/YYYY hh:mm A",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 12
      }
    }, createdAt);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (calculateTime);

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

/***/ "./utils/profileActions.js":
/*!*********************************!*\
  !*** ./utils/profileActions.js ***!
  \*********************************/
/*! exports provided: followUser, unFollowerUser, profileUpdate, passwordUpdate, toggleMessagePopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followUser", function() { return followUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unFollowerUser", function() { return unFollowerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileUpdate", function() { return profileUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordUpdate", function() { return passwordUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMessagePopup", function() { return toggleMessagePopup; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Axios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: `${_baseUrl__WEBPACK_IMPORTED_MODULE_1__["default"]}/api/profile`,
  headers: {
    Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('token')
  }
});
const followUser = async (userToFollowId, setUserFollowStats) => {
  try {
    await Axios.post(`/follow/${userToFollowId}`);
    setUserFollowStats(prev => _objectSpread(_objectSpread({}, prev), {}, {
      following: [...prev.following, {
        user: userToFollowId
      }]
    }));
  } catch (error) {
    alert(Object(_catchErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(error));
  }
};
const unFollowerUser = async (userToUnFollowId, setUserFollowStats) => {
  try {
    await Axios.put(`/unfollow/${userToUnFollowId}`);
    setUserFollowStats(prev => _objectSpread(_objectSpread({}, prev), {}, {
      following: prev.following.filter(following => following.user !== userToUnFollowId)
    }));
  } catch (error) {
    alert(Object(_catchErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(error));
  }
};
const profileUpdate = async (profile, setLoading, setError, profilePicUrl) => {
  try {
    const {
      bio,
      facebook,
      youtube,
      twitter,
      instagram
    } = profile;
    await Axios.post('/update', {
      bio,
      facebook,
      youtube,
      twitter,
      instagram,
      profilePicUrl
    });
    setLoading(false);
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.reload();
  } catch (error) {
    setError(Object(_catchErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(error));
    setLoading(false);
  }
};
const passwordUpdate = async (setSuccess, userPasswords) => {
  const {
    currentPassword,
    newPassword
  } = userPasswords;

  try {
    await Axios.post(`/settings/password`, {
      currentPassword,
      newPassword
    });
    setSuccess(true);
  } catch (error) {
    alert(Object(_catchErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(error));
  }
};
const toggleMessagePopup = async (popupSetting, setPopupSetting, setSuccess) => {
  try {
    await Axios.post(`/settings/messagePopup`);
    setPopupSetting(!popupSetting);
    setSuccess(true);
  } catch (error) {
    alert(Object(_catchErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(error));
  }
};

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-moment");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvTm9EYXRhLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy9Db21tZW50Tm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMvRm9sbG93Tm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMvTGlrZU5vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NhbGN1bGF0ZVRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY2F0Y2hFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcHJvZmlsZUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiTm9Qcm9maWxlUG9zdHMiLCJOb0ZvbGxvd0RhdGEiLCJmb2xsb3dlcnNDb21wb25lbnQiLCJmb2xsb3dpbmdDb21wb25lbnQiLCJOb01lc3NhZ2VzIiwiTm9Qb3N0cyIsIk5vUHJvZmlsZSIsIk5vTm90aWZpY2F0aW9ucyIsIk5vUG9zdEZvdW5kIiwiQ29tbWVudE5vdGlmaWNhdGlvbnMiLCJub3RpZmljYXRpb24iLCJ1c2VyIiwicHJvZmlsZVBpY1VybCIsInVzZXJuYW1lIiwibmFtZSIsInBvc3QiLCJfaWQiLCJjYWxjdWxhdGVUaW1lIiwiZGF0ZSIsInBpY1VybCIsInRleHQiLCJGb2xsb3dOb3RpZmljYXRpb25zIiwibG9nZ2VkVXNlckZvbGxvd1N0YXRzIiwic2V0VXNlckZvbGxvd1N0YXRzIiwiZGlzYWJsZWQiLCJzZXREaXNhYmxlZCIsInVzZVN0YXRlIiwiaXNGb2xsb3dpbmciLCJmb2xsb3dpbmciLCJsZW5ndGgiLCJmaWx0ZXIiLCJwb3NpdGlvbiIsInJpZ2h0IiwidW5Gb2xsb3dlclVzZXIiLCJmb2xsb3dVc2VyIiwiTGlrZU5vdGlmaWNhdGlvbnMiLCJOb3RpZmljYXRpb25zIiwibm90aWZpY2F0aW9ucyIsImVycm9yTG9hZGluZyIsInVzZXJGb2xsb3dTdGF0cyIsInVzZUVmZmVjdCIsIm5vdGlmaWNhdGlvblJlYWQiLCJheGlvcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvb2tpZSIsImdldCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1hcmdpblRvcCIsIm1heEhlaWdodCIsIm92ZXJmbG93IiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXAiLCJ0eXBlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwidG9rZW4iLCJwYXJzZUNvb2tpZXMiLCJyZXMiLCJkYXRhIiwiY3JlYXRlZEF0IiwidG9kYXkiLCJtb21lbnQiLCJEYXRlIiwibm93IiwicG9zdERhdGUiLCJkaWZmSW5Ib3VycyIsImRpZmYiLCJjYXRjaEVycm9ycyIsImVycm9yTXNnIiwicmVzcG9uc2UiLCJyZXF1ZXN0IiwibWVzc2FnZSIsIkF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInVzZXJUb0ZvbGxvd0lkIiwicHJldiIsImFsZXJ0IiwidXNlclRvVW5Gb2xsb3dJZCIsInB1dCIsInByb2ZpbGVVcGRhdGUiLCJwcm9maWxlIiwic2V0TG9hZGluZyIsInNldEVycm9yIiwiYmlvIiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwidHdpdHRlciIsImluc3RhZ3JhbSIsIlJvdXRlciIsInJlbG9hZCIsInBhc3N3b3JkVXBkYXRlIiwic2V0U3VjY2VzcyIsInVzZXJQYXNzd29yZHMiLCJjdXJyZW50UGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsInRvZ2dsZU1lc3NhZ2VQb3B1cCIsInBvcHVwU2V0dGluZyIsInNldFBvcHVwU2V0dGluZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUVPLE1BQU1BLGNBQWMsR0FBRyxNQUM1QixtRUFDRSxNQUFDLHlEQUFEO0FBQ0UsTUFBSSxNQUROO0FBRUUsTUFBSSxFQUFDLEtBRlA7QUFHRSxRQUFNLEVBQUMsT0FIVDtBQUlFLFNBQU8sRUFBQyxtQ0FK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QUYsQ0FBZjtBQUNBTCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0QsR0FMRCxDQUtFLE9BQU9qRCxLQUFQLEVBQWM7QUFDZGtDLFNBQUssQ0FBQ1YsNERBQVcsQ0FBQ3hCLEtBQUQsQ0FBWixDQUFMO0FBQ0Q7QUFDRixDQWJNLEM7Ozs7Ozs7Ozs7O0FDekVQLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL25vdGlmaWNhdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL25vdGlmaWNhdGlvbnMuanNcIik7XG4iLCJpbXBvcnQgeyBNZXNzYWdlLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qcm9maWxlUG9zdHMgPSAoKSA9PiAoXHJcbiAgPD5cclxuICAgIDxNZXNzYWdlXHJcbiAgICAgIGluZm9cclxuICAgICAgaWNvbj1cIm1laFwiXHJcbiAgICAgIGhlYWRlcj1cIlNvcnJ5XCJcclxuICAgICAgY29udGVudD1cIlVzZXIgaGFzIG5vdCBwb3N0ZWQgYW55dGhpbmcgeWV0IVwiXHJcbiAgICAvPlxyXG4gICAgPEJ1dHRvblxyXG4gICAgICBpY29uPVwibG9uZyBhcnJvdyBhbHRlcm5hdGUgbGVmdFwiXHJcbiAgICAgIGNvbnRlbnQ9XCJHbyBCYWNrXCJcclxuICAgICAgYXM9XCJhXCJcclxuICAgICAgaHJlZj1cIi9cIlxyXG4gICAgLz5cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb0ZvbGxvd0RhdGEgPSAoeyBmb2xsb3dlcnNDb21wb25lbnQsIGZvbGxvd2luZ0NvbXBvbmVudCB9KSA9PiAoXHJcbiAgPD5cclxuICAgIHtmb2xsb3dlcnNDb21wb25lbnQgJiYgKFxyXG4gICAgICA8TWVzc2FnZVxyXG4gICAgICAgIGljb249XCJ1c2VyIG91dGxpbmVcIlxyXG4gICAgICAgIGluZm9cclxuICAgICAgICBjb250ZW50PXtgVXNlciBkb2VzIG5vdCBoYXZlIGZvbGxvd2Vyc2B9XHJcbiAgICAgIC8+XHJcbiAgICApfVxyXG5cclxuICAgIHtmb2xsb3dpbmdDb21wb25lbnQgJiYgKFxyXG4gICAgICA8TWVzc2FnZVxyXG4gICAgICAgIGljb249XCJ1c2VyIG91dGxpbmVcIlxyXG4gICAgICAgIGluZm9cclxuICAgICAgICBjb250ZW50PXtgVXNlciBkb2VzIG5vdCBmb2xsb3cgYW55IHVzZXJzYH1cclxuICAgICAgLz5cclxuICAgICl9XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9NZXNzYWdlcyA9ICgpID0+IChcclxuICA8TWVzc2FnZVxyXG4gICAgaW5mb1xyXG4gICAgaWNvbj1cInRlbGVncmFtIHBsYW5lXCJcclxuICAgIGhlYWRlcj1cIlNvcnJ5XCJcclxuICAgIGNvbnRlbnQ9XCJZb3UgaGF2ZSBub3QgbWVzc2FnZWQgYW55b25lIHlldC5TZWFyY2ggYWJvdmUgdG8gbWVzc2FnZSBzb21lb25lIVwiXHJcbiAgLz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb1Bvc3RzID0gKCkgPT4gKFxyXG4gIDxNZXNzYWdlXHJcbiAgICBpbmZvXHJcbiAgICBpY29uPVwibWVoXCJcclxuICAgIGhlYWRlcj1cIkhleSFcIlxyXG4gICAgY29udGVudD1cIk5vIFBvc3RzLiBNYWtlIHN1cmUgeW91IGhhdmUgZm9sbG93ZWQgc29tZW9uZS5cIlxyXG4gIC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qcm9maWxlID0gKCkgPT4gKFxyXG4gIDxNZXNzYWdlIGluZm8gaWNvbj1cIm1laFwiIGhlYWRlcj1cIkhleSFcIiBjb250ZW50PVwiTm8gUHJvZmlsZSBGb3VuZC5cIiAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vTm90aWZpY2F0aW9ucyA9ICgpID0+IChcclxuICA8TWVzc2FnZSBjb250ZW50PVwiTm8gTm90aWZpY2F0aW9uc1wiIGljb249XCJzbWlsZVwiIGluZm8gLz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb1Bvc3RGb3VuZCA9ICgpID0+IChcclxuICA8TWVzc2FnZSBpbmZvIGljb249XCJtZWhcIiBoZWFkZXI9XCJIZXkhXCIgY29udGVudD1cIk5vIFBvc3QgRm91bmQuXCIgLz5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmVlZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSAnLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZSc7XHJcblxyXG5jb25zdCBDb21tZW50Tm90aWZpY2F0aW9ucyA9ICh7IG5vdGlmaWNhdGlvbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGZWVkLkV2ZW50PlxyXG4gICAgICAgIDxGZWVkLkxhYmVsIGltYWdlPXtub3RpZmljYXRpb24udXNlci5wcm9maWxlUGljVXJsfSAvPlxyXG4gICAgICAgIDxGZWVkLkNvbnRlbnQ+XHJcbiAgICAgICAgICA8RmVlZC5TdW1tYXJ5PlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxGZWVkLlVzZXIgYXM9XCJhXCIgaHJlZj17YC8ke25vdGlmaWNhdGlvbi51c2VyLnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAge25vdGlmaWNhdGlvbi51c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9GZWVkLlVzZXI+eycgJ31cclxuICAgICAgICAgICAgICBjb21tZW50ZWQgb24geW91cnsnICd9XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17YC9wb3N0LyR7bm90aWZpY2F0aW9uLnBvc3QuX2lkfWB9PnBvc3Q8L2E+XHJcbiAgICAgICAgICAgICAgPEZlZWQuRGF0ZT57Y2FsY3VsYXRlVGltZShub3RpZmljYXRpb24uZGF0ZSl9PC9GZWVkLkRhdGU+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgPC9GZWVkLlN1bW1hcnk+XHJcblxyXG4gICAgICAgICAge25vdGlmaWNhdGlvbi5wb3N0LnBpY1VybCAmJiAoXHJcbiAgICAgICAgICAgIDxGZWVkLkV4dHJhIGltYWdlcz5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtgL3Bvc3QvJHtub3RpZmljYXRpb24ucG9zdC5faWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17bm90aWZpY2F0aW9uLnBvc3QucGljVXJsfSAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9GZWVkLkV4dHJhPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICA8RmVlZC5FeHRyYT5cclxuICAgICAgICAgICAgPHN0cm9uZz57bm90aWZpY2F0aW9uLnRleHR9PC9zdHJvbmc+XHJcbiAgICAgICAgICA8L0ZlZWQuRXh0cmE+XHJcbiAgICAgICAgPC9GZWVkLkNvbnRlbnQ+XHJcbiAgICAgIDwvRmVlZC5FdmVudD5cclxuXHJcbiAgICAgIDxiciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnROb3RpZmljYXRpb25zO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZlZWQsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSAnLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZSc7XHJcbmltcG9ydCB7IGZvbGxvd1VzZXIsIHVuRm9sbG93ZXJVc2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJvZmlsZUFjdGlvbnMnO1xyXG5cclxuY29uc3QgRm9sbG93Tm90aWZpY2F0aW9ucyA9ICh7XHJcbiAgbm90aWZpY2F0aW9uLFxyXG4gIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cyxcclxuICBzZXRVc2VyRm9sbG93U3RhdHMsXHJcbn0pID0+IHtcclxuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaXNGb2xsb3dpbmcgPVxyXG4gICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5sZW5ndGggPiAwICYmXHJcbiAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHMuZm9sbG93aW5nLmZpbHRlcihcclxuICAgICAgKGZvbGxvd2luZykgPT4gZm9sbG93aW5nLnVzZXIgPT09IG5vdGlmaWNhdGlvbi51c2VyLl9pZFxyXG4gICAgKS5sZW5ndGggPiAwO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZlZWQuRXZlbnQ+XHJcbiAgICAgICAgPEZlZWQuTGFiZWwgaW1hZ2U9e25vdGlmaWNhdGlvbi51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XHJcbiAgICAgICAgPEZlZWQuQ29udGVudD5cclxuICAgICAgICAgIDxGZWVkLlN1bW1hcnk+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPEZlZWQuVXNlciBhcz1cImFcIiBocmVmPXtgLyR7bm90aWZpY2F0aW9uLnVzZXIudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9uLnVzZXIubmFtZX1cclxuICAgICAgICAgICAgICA8L0ZlZWQuVXNlcj57JyAnfVxyXG4gICAgICAgICAgICAgIHN0YXJ0ZWQgZm9sbG93aW5nIHlvdVxyXG4gICAgICAgICAgICAgIDxGZWVkLkRhdGU+e2NhbGN1bGF0ZVRpbWUobm90aWZpY2F0aW9uLmRhdGUpfTwvRmVlZC5EYXRlPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgIDwvRmVlZC5TdW1tYXJ5PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICc1cHgnIH19PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgY29tcGFjdFxyXG4gICAgICAgICAgICAgIGljb249e2lzRm9sbG93aW5nID8gJ2NoZWNrIGNpcmNsZScgOiAnYWRkIHVzZXInfVxyXG4gICAgICAgICAgICAgIGNvbG9yPXtpc0ZvbGxvd2luZyA/ICdpbnN0YWdyYW0nIDogJ3R3aXR0ZXInfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldERpc2FibGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaXNGb2xsb3dpbmdcclxuICAgICAgICAgICAgICAgICAgPyBhd2FpdCB1bkZvbGxvd2VyVXNlcihcclxuICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi51c2VyLl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFVzZXJGb2xsb3dTdGF0c1xyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgOiBhd2FpdCBmb2xsb3dVc2VyKG5vdGlmaWNhdGlvbi51c2VyLl9pZCwgc2V0VXNlckZvbGxvd1N0YXRzKTtcclxuICAgICAgICAgICAgICAgIHNldERpc2FibGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9GZWVkLkNvbnRlbnQ+XHJcbiAgICAgIDwvRmVlZC5FdmVudD5cclxuXHJcbiAgICAgIDxiciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd05vdGlmaWNhdGlvbnM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZlZWQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gJy4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWUnO1xyXG5cclxuY29uc3QgTGlrZU5vdGlmaWNhdGlvbnMgPSAoeyBub3RpZmljYXRpb24gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RmVlZC5FdmVudD5cclxuICAgICAgICA8RmVlZC5MYWJlbCBpbWFnZT17bm90aWZpY2F0aW9uLnVzZXIucHJvZmlsZVBpY1VybH0gLz5cclxuICAgICAgICA8RmVlZC5Db250ZW50PlxyXG4gICAgICAgICAgPEZlZWQuU3VtbWFyeT5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8RmVlZC5Vc2VyIGFzPVwiYVwiIGhyZWY9e2AvJHtub3RpZmljYXRpb24udXNlci51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb24udXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvRmVlZC5Vc2VyPnsnICd9XHJcbiAgICAgICAgICAgICAgbGlrZWQgeW91ciA8YSBocmVmPXtgL3Bvc3QvJHtub3RpZmljYXRpb24ucG9zdC5faWR9YH0+cG9zdDwvYT5cclxuICAgICAgICAgICAgICA8RmVlZC5EYXRlPntjYWxjdWxhdGVUaW1lKG5vdGlmaWNhdGlvbi5kYXRlKX08L0ZlZWQuRGF0ZT5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICA8L0ZlZWQuU3VtbWFyeT5cclxuXHJcbiAgICAgICAgICB7bm90aWZpY2F0aW9uLnBvc3QucGljVXJsICYmIChcclxuICAgICAgICAgICAgPEZlZWQuRXh0cmEgaW1hZ2VzPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e2AvcG9zdC8ke25vdGlmaWNhdGlvbi5wb3N0Ll9pZH1gfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtub3RpZmljYXRpb24ucG9zdC5waWNVcmx9IC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0ZlZWQuRXh0cmE+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRmVlZC5Db250ZW50PlxyXG4gICAgICA8L0ZlZWQuRXZlbnQ+XHJcblxyXG4gICAgICA8YnIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWtlTm90aWZpY2F0aW9ucztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZlZWQsIFNlZ21lbnQsIERpdmlkZXIsIENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSAnLi4vdXRpbHMvYmFzZVVybCc7XHJcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gJ25vb2tpZXMnO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7IE5vTm90aWZpY2F0aW9ucyB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L05vRGF0YSc7XHJcbmltcG9ydCBMaWtlTm90aWZpY2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy9MaWtlTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBDb21tZW50Tm90aWZpY2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy9Db21tZW50Tm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBGb2xsb3dlck5vdGlmaWNhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMvRm9sbG93Tm90aWZpY2F0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBOb3RpZmljYXRpb25zKHsgbm90aWZpY2F0aW9ucywgZXJyb3JMb2FkaW5nLCB1c2VyLCB1c2VyRm9sbG93U3RhdHMgfSkge1xyXG4gIGNvbnN0IFtsb2dnZWRVc2VyRm9sbG93U3RhdHMsIHNldFVzZXJGb2xsb3dTdGF0c10gPSB1c2VTdGF0ZSh1c2VyRm9sbG93U3RhdHMpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uUmVhZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybH0vYXBpL25vdGlmaWNhdGlvbnNgLFxyXG4gICAgICAgICAge30sXHJcbiAgICAgICAgICB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldCgndG9rZW4nKSB9IH1cclxuICAgICAgICApO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBub3RpZmljYXRpb25SZWFkKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbnRhaW5lciBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxLjVyZW0nIH19PlxyXG4gICAgICAgIHtub3RpZmljYXRpb25zLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICA8U2VnbWVudCBjb2xvcj1cInRlYWxcIiByYWlzZWQ+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnNDByZW0nLFxyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzQwcmVtJyxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEZlZWQgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9ucy5tYXAoKG5vdGlmaWNhdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb24udHlwZSA9PT0gJ25ld0xpa2UnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb24ucG9zdCAhPT0gbnVsbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaWtlTm90aWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtub3RpZmljYXRpb24uX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbj17bm90aWZpY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge25vdGlmaWNhdGlvbi50eXBlID09PSAnbmV3Q29tbWVudCcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5wb3N0ICE9PSBudWxsICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnROb3RpZmljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e25vdGlmaWNhdGlvbi5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uPXtub3RpZmljYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9uLnR5cGUgPT09ICduZXdGb2xsb3dlcicgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvbGxvd2VyTm90aWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bm90aWZpY2F0aW9uLl9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uPXtub3RpZmljYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cz17bG9nZ2VkVXNlckZvbGxvd1N0YXRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyRm9sbG93U3RhdHM9e3NldFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L0ZlZWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8Tm9Ob3RpZmljYXRpb25zIC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuTm90aWZpY2F0aW9ucy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgdG9rZW4gfSA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvbm90aWZpY2F0aW9uc2AsIHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgbm90aWZpY2F0aW9uczogcmVzLmRhdGEgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgZXJyb3JMb2FkaW5nOiB0cnVlIH07XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9ucztcclxuIiwiY29uc3QgYmFzZVVybCA9XCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhc2VVcmw7XHJcbiIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIjtcclxuXHJcbmNvbnN0IGNhbGN1bGF0ZVRpbWUgPSBjcmVhdGVkQXQgPT4ge1xyXG4gIGNvbnN0IHRvZGF5ID0gbW9tZW50KERhdGUubm93KCkpO1xyXG4gIGNvbnN0IHBvc3REYXRlID0gbW9tZW50KGNyZWF0ZWRBdCk7XHJcbiAgY29uc3QgZGlmZkluSG91cnMgPSB0b2RheS5kaWZmKHBvc3REYXRlLCBcImhvdXJzXCIpO1xyXG5cclxuICBpZiAoZGlmZkluSG91cnMgPCAyNCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICBUb2RheSA8TW9tZW50IGZvcm1hdD1cImhoOm1tIEFcIj57Y3JlYXRlZEF0fTwvTW9tZW50PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChkaWZmSW5Ib3VycyA+IDI0ICYmIGRpZmZJbkhvdXJzIDwgMzYpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgWWVzdGVyZGF5IDxNb21lbnQgZm9ybWF0PVwiaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGRpZmZJbkhvdXJzID4gMzYpIHtcclxuICAgIHJldHVybiA8TW9tZW50IGZvcm1hdD1cIkREL01NL1lZWVkgaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhbGN1bGF0ZVRpbWU7XHJcbiIsImNvbnN0IGNhdGNoRXJyb3JzID0gZXJyb3IgPT4ge1xyXG4gIGxldCBlcnJvck1zZztcclxuXHJcbiAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAvLyBJZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciBub3QgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZSBpbiB0aGUgcmFuZ2Ugb2YgMnh4XHJcblxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgLy8gaWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIG5vIHJlc3BvbnNlIHdhcyByZWNldmllZCBmcm9tIHNlcnZlclxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXF1ZXN0O1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpZiBzb21ldGhpbmcgZWxzZSBoYXBwZW5lZCB3aGlsZSBtYWtpbmcgdGhlIHJlcXVlc3RcclxuICAgIGVycm9yTXNnID0gZXJyb3IubWVzc2FnZTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yTXNnO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0Y2hFcnJvcnM7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gJy4vYmFzZVVybCc7XHJcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tICcuL2NhdGNoRXJyb3JzJztcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IEF4aW9zID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBgJHtiYXNlVXJsfS9hcGkvcHJvZmlsZWAsXHJcbiAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KCd0b2tlbicpIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbGxvd1VzZXIgPSBhc3luYyAodXNlclRvRm9sbG93SWQsIHNldFVzZXJGb2xsb3dTdGF0cykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBBeGlvcy5wb3N0KGAvZm9sbG93LyR7dXNlclRvRm9sbG93SWR9YCk7XHJcbiAgICBzZXRVc2VyRm9sbG93U3RhdHMoKHByZXYpID0+ICh7XHJcbiAgICAgIC4uLnByZXYsXHJcbiAgICAgIGZvbGxvd2luZzogWy4uLnByZXYuZm9sbG93aW5nLCB7IHVzZXI6IHVzZXJUb0ZvbGxvd0lkIH1dLFxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1bkZvbGxvd2VyVXNlciA9IGFzeW5jICh1c2VyVG9VbkZvbGxvd0lkLCBzZXRVc2VyRm9sbG93U3RhdHMpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQXhpb3MucHV0KGAvdW5mb2xsb3cvJHt1c2VyVG9VbkZvbGxvd0lkfWApO1xyXG4gICAgc2V0VXNlckZvbGxvd1N0YXRzKChwcmV2KSA9PiAoe1xyXG4gICAgICAuLi5wcmV2LFxyXG4gICAgICBmb2xsb3dpbmc6IHByZXYuZm9sbG93aW5nLmZpbHRlcihcclxuICAgICAgICAoZm9sbG93aW5nKSA9PiBmb2xsb3dpbmcudXNlciAhPT0gdXNlclRvVW5Gb2xsb3dJZFxyXG4gICAgICApLFxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9maWxlVXBkYXRlID0gYXN5bmMgKFxyXG4gIHByb2ZpbGUsXHJcbiAgc2V0TG9hZGluZyxcclxuICBzZXRFcnJvcixcclxuICBwcm9maWxlUGljVXJsXHJcbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGJpbywgZmFjZWJvb2ssIHlvdXR1YmUsIHR3aXR0ZXIsIGluc3RhZ3JhbSB9ID0gcHJvZmlsZTtcclxuXHJcbiAgICBhd2FpdCBBeGlvcy5wb3N0KCcvdXBkYXRlJywge1xyXG4gICAgICBiaW8sXHJcbiAgICAgIGZhY2Vib29rLFxyXG4gICAgICB5b3V0dWJlLFxyXG4gICAgICB0d2l0dGVyLFxyXG4gICAgICBpbnN0YWdyYW0sXHJcbiAgICAgIHByb2ZpbGVQaWNVcmwsXHJcbiAgICB9KTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgUm91dGVyLnJlbG9hZCgpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBzZXRFcnJvcihjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkVXBkYXRlID0gYXN5bmMgKHNldFN1Y2Nlc3MsIHVzZXJQYXNzd29yZHMpID0+IHtcclxuICBjb25zdCB7IGN1cnJlbnRQYXNzd29yZCwgbmV3UGFzc3dvcmQgfSA9IHVzZXJQYXNzd29yZHM7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEF4aW9zLnBvc3QoYC9zZXR0aW5ncy9wYXNzd29yZGAsIHsgY3VycmVudFBhc3N3b3JkLCBuZXdQYXNzd29yZCB9KTtcclxuXHJcbiAgICBzZXRTdWNjZXNzKHRydWUpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVNZXNzYWdlUG9wdXAgPSBhc3luYyAoXHJcbiAgcG9wdXBTZXR0aW5nLFxyXG4gIHNldFBvcHVwU2V0dGluZyxcclxuICBzZXRTdWNjZXNzXHJcbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBBeGlvcy5wb3N0KGAvc2V0dGluZ3MvbWVzc2FnZVBvcHVwYCk7XHJcblxyXG4gICAgc2V0UG9wdXBTZXR0aW5nKCFwb3B1cFNldHRpbmcpO1xyXG4gICAgc2V0U3VjY2Vzcyh0cnVlKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==