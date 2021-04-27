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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/messages.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Chats/Chat.js":
/*!**********************************!*\
  !*** ./components/Chats/Chat.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
var _jsxFileName = "C:\\Users\\User\\Desktop\\REACT\\mernChat\\components\\Chats\\Chat.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Chat({
  chat,
  deleteChat,
  connectedUsers
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const isOnine = connectedUsers.length > 0 && connectedUsers.filter(connectedUser => connectedUser.userId === chat.messagesWith).length > 0;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    selection: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    active: router.query.message === chat.messagesWith,
    onClick: () => router.push(`/messages?message=${chat.messagesWith}`, undefined, {
      shallow: true
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Avatar, {
    src: chat.profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Author, {
    as: "a",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, chat.name, ' ', isOnine && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "circle",
    size: "sm",
    color: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }), ' '), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Metadata, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, Object(_utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__["default"])(chat.date)), __jsx("div", {
    style: {
      position: 'absolute',
      right: '10px',
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "trash alternate",
    color: "red",
    onClick: () => deleteChat(chat.messagesWith),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 19
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, chat.lastMessage.length > 20 ? `${chat.lastMessage.substring(0, 20)} ...` : chat.lastMessage))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ }),

/***/ "./components/Chats/ChatListSearch.js":
/*!********************************************!*\
  !*** ./components/Chats/ChatListSearch.js ***!
  \********************************************/
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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
var _jsxFileName = "C:\\Users\\User\\Desktop\\REACT\\mernChat\\components\\Chats\\ChatListSearch.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






let cancel;

function ChatListSearch({
  chats,
  setChats
}) {
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: results,
    1: setResults
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  const handleChange = async e => {
    const {
      value
    } = e.target;
    setText(value);
    setLoading(true);

    try {
      cancel && cancel();
      const CancelToken = axios__WEBPACK_IMPORTED_MODULE_2___default.a.CancelToken;
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('token');
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__["default"]}/api/search/${value}`, {
        headers: {
          Authorization: token
        },
        cancelToken: new CancelToken(canceler => {
          cancel = canceler;
        })
      });
      if (res.data.length === 0) return setLoading(false);
      setResults(res.data);
    } catch (error) {
      alert('Error Searching');
    }

    setLoading(false);
  };

  const addChat = result => {
    const alreadyInChats = chats.length > 0 && chats.filter(chat => chat.messagesWith === result._id).length > 0;

    if (alreadyInChats) {
      return router.push(`/messages?message=${result._id}`);
    } else {
      const newChat = {
        messagesWith: result._id,
        name: result.name,
        profilePicUrl: result.profilePicUrl,
        lastMessage: '',
        date: Date.now()
      };
      setChats(prev => [newChat, ...prev]);
      return router.push(`/messages?message=${result._id}`);
    }
  };

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Search"], {
    onBlur: () => {
      results.length > 0 && setResults([]);
      loading && setLoading(false);
      setText('');
    },
    loading: loading,
    value: text,
    resultRenderer: ResultRenderer,
    results: results,
    onSearchChange: handleChange,
    minCharacters: 1,
    onResultSelect: (e, data) => addChat(data.result),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  });
}

const ResultRenderer = ({
  _id,
  profilePicUrl,
  name
}) => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    key: _id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: profilePicUrl,
    alt: "ProfilePic",
    avatar: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
    header: name,
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatListSearch);

/***/ }),

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

/***/ "./components/Messages/Banner.js":
/*!***************************************!*\
  !*** ./components/Messages/Banner.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\REACT\\mernChat\\components\\Messages\\Banner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Banner = ({
  bannerData
}) => {
  const {
    name,
    profilePicUrl
  } = bannerData;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    color: "teal",
    attached: "top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    floated: "left",
    width: 14,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    avatar: true,
    src: profilePicUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 15
    }
  }), name)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/Messages/Message.js":
/*!****************************************!*\
  !*** ./components/Messages/Message.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
var _jsxFileName = "C:\\Users\\User\\Desktop\\REACT\\mernChat\\components\\Messages\\Message.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Message({
  message,
  user,
  deleteMsg,
  bannerProfilePic,
  divRef
}) {
  const {
    0: deleteIcon,
    1: showDeleteIcon
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const ifYouSender = message.sender === user._id;
  return __jsx("div", {
    className: "bubbleWrapper",
    ref: divRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: ifYouSender ? 'inlineContainer own' : 'inlineContainer',
    onClick: () => ifYouSender && showDeleteIcon(!deleteIcon),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "inlineIcon",
    src: ifYouSender ? user.profilePicUrl : bannerProfilePic,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: ifYouSender ? 'ownBubble own' : 'otherBubble other',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, message.msg), deleteIcon && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Popup"], {
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "trash",
      color: "red",
      style: {
        cursor: 'pointer'
      },
      onClick: () => deleteMsg(message._id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 15
      }
    }),
    content: "This will only delete the message from your end!",
    position: "top right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  })), __jsx("span", {
    className: ifYouSender ? 'own' : 'other',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, Object(_utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__["default"])(message.date)));
}

/* harmony default export */ __webpack_exports__["default"] = (Message);

/***/ }),

/***/ "./components/Messages/MessageInputField.js":
/*!**************************************************!*\
  !*** ./components/Messages/MessageInputField.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\REACT\\mernChat\\components\\Messages\\MessageInputField.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const MessageInputField = ({
  sendMsg
}) => {
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx("div", {
    style: {
      position: 'sticky',
      bottom: '0'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    secondary: true,
    color: "teal",
    attached: "bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    reply: true,
    onSubmit: e => {
      e.preventDefault();
      sendMsg(text);
      setText('');
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    size: "large",
    placeholder: "Send New Message",
    value: text,
    onChange: e => setText(e.target.value),
    action: {
      color: 'blue',
      icon: 'telegram place',
      disabled: text === '',
      loading: loading
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MessageInputField);

/***/ }),

/***/ "./pages/messages.js":
/*!***************************!*\
  !*** ./pages/messages.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Chats_Chat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Chats/Chat */ "./components/Chats/Chat.js");
/* harmony import */ var _components_Chats_ChatListSearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Chats/ChatListSearch */ "./components/Chats/ChatListSearch.js");
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Messages_Banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Messages/Banner */ "./components/Messages/Banner.js");
/* harmony import */ var _components_Messages_MessageInputField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Messages/MessageInputField */ "./components/Messages/MessageInputField.js");
/* harmony import */ var _components_Messages_Message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Messages/Message */ "./components/Messages/Message.js");
/* harmony import */ var _utils_getUserInfo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/getUserInfo */ "./utils/getUserInfo.js");
/* harmony import */ var _utils_newMessageSound__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/newMessageSound */ "./utils/newMessageSound.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\REACT\\mernChat\\pages\\messages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















const scrollDivToBottom = divRef => divRef.current !== null && divRef.current.scrollIntoView({
  behaviour: 'smooth'
});

function Messages({
  chatsData,
  user
}) {
  const {
    0: chats,
    1: setChats
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(chatsData);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const socket = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: connectedUsers,
    1: setConnectedUsers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: messages,
    1: setMessages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: bannerData,
    1: setBannerData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: '',
    profilePicUrl: ''
  });
  const divRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // This ref is for persisting the state of query string in url throughout re-renders. This ref is the value of query string inside url

  const openChatId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(''); //CONNECTION useEffect

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!socket.current) {
      socket.current = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__["default"]);
    }

    if (socket.current) {
      socket.current.emit('join', {
        userId: user._id
      });
      socket.current.on('connectedUsers', ({
        users
      }) => {
        users.length > 0 && setConnectedUsers(users);
      });

      if (chats.length > 0 && !router.query.message) {
        router.push(`/messages?message=${chats[0].messagesWith}`, undefined, {
          shallow: true
        });
      }
    }

    return () => {
      if (socket.current) {
        socket.current.emit('disconnect');
        socket.current.off();
      }
    };
  }, []); // LOAD MESSAGES useEffect

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const loadMessages = () => {
      socket.current.emit('loadMessages', {
        userId: user._id,
        messagesWith: router.query.message
      });
      socket.current.on('messagesLoaded', async ({
        chat
      }) => {
        setMessages(chat.messages);
        setBannerData({
          name: chat.messagesWith.name,
          profilePicUrl: chat.messagesWith.profilePicUrl
        });
        openChatId.current = chat.messagesWith._id;
        divRef.current && scrollDivToBottom(divRef);
      });
      socket.current.on('noChatFound', async () => {
        const {
          name,
          profilePicUrl
        } = await Object(_utils_getUserInfo__WEBPACK_IMPORTED_MODULE_13__["default"])(router.query.message);
        setBannerData({
          name,
          profilePicUrl
        });
        setMessages([]);
        openChatId.current = router.query.message;
      });
    };

    if (socket.current && router.query.message) loadMessages();
  }, [router.query.message]);

  const sendMsg = msg => {
    if (socket.current) {
      socket.current.emit('sendNewMsg', {
        userId: user._id,
        msgSendToUserId: openChatId.current,
        msg
      });
    }
  }; // Confirming msg is sent and receving the messages useEffect


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (socket.current) {
      socket.current.on('msgSent', ({
        newMsg
      }) => {
        if (newMsg.receiver === openChatId.current) {
          setMessages(prev => [...prev, newMsg]);
          setChats(prev => {
            const previousChat = prev.find(chat => chat.messagesWith === newMsg.receiver);
            previousChat.lastMessage = newMsg.msg;
            previousChat.date = newMsg.date;
            return [...prev];
          });
        }
      });
      socket.current.on('newMsgReceived', async ({
        newMsg
      }) => {
        let senderName; // WHEN CHAT WITH SENDER IS CURRENTLY OPENED INSIDE YOUR BROWSER

        if (newMsg.sender === openChatId.current) {
          setMessages(prev => [...prev, newMsg]);
          setChats(prev => {
            const previousChat = prev.find(chat => chat.messagesWith === newMsg.sender);
            previousChat.lastMessage = newMsg.msg;
            previousChat.date = newMsg.date;
            senderName = previousChat.name;
            return [...prev];
          });
        } //
        else {
            const ifPreviouslyMessaged = chats.filter(chat => chat.messagesWith === newMsg.sender).length > 0;

            if (ifPreviouslyMessaged) {
              setChats(prev => {
                const previousChat = prev.find(chat => chat.messagesWith === newMsg.sender);
                previousChat.lastMessage = newMsg.msg;
                previousChat.date = newMsg.date;
                senderName = previousChat.name;
                return [previousChat, ...prev.filter(chat => chat.messagesWith !== newMsg.sender)];
              });
            } //IF NO PREVIOUS CHAT WITH THE SENDER
            else {
                const {
                  name,
                  profilePicUrl
                } = await Object(_utils_getUserInfo__WEBPACK_IMPORTED_MODULE_13__["default"])(newMsg.sender);
                senderName = name;
                const newChat = {
                  messagesWith: newMsg.sender,
                  name,
                  profilePicUrl,
                  lastMessage: newMsg.msg,
                  date: newMsg.date
                };
                setChats(prev => [newChat, ...prev]);
              }
          }

        Object(_utils_newMessageSound__WEBPACK_IMPORTED_MODULE_14__["default"])(senderName);
      });
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    messages.length > 0 && scrollDivToBottom(divRef);
  }, [messages]);

  const deleteMsg = messageId => {
    if (socket.current) {
      socket.current.emit('deleteMsg', {
        userId: user._id,
        messagesWith: openChatId.current,
        messageId
      });
      socket.current.on('msgDeleted', () => {
        setMessages(prev => prev.filter(message => message._id !== messageId));
      });
    }
  };

  const deleteChat = async messagesWith => {
    try {
      await axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__["default"]}/api/chats/${messagesWith}`, {
        headers: {
          Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_15___default.a.get('token')
        }
      });
      setChats(prev => prev.filter(chat => chat.messagesWith !== messagesWith));
      router.push('/messages', undefined, {
        shallow: true
      });
    } catch (error) {
      alert('Error deleting chat');
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Segment"], {
    padded: true,
    basic: true,
    size: "large",
    style: {
      marginTop: '5px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    icon: "home",
    content: "Go Back!",
    onClick: () => router.push('/'),
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      marginBottom: '10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 9
    }
  }, __jsx(_components_Chats_ChatListSearch__WEBPACK_IMPORTED_MODULE_8__["default"], {
    chats: chats,
    setChats: setChats,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 11
    }
  })), chats.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    stackable: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    width: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Comment"].Group, {
    size: "big",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Segment"], {
    raised: true,
    style: {
      overflow: 'auto',
      maxHeight: '32rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 19
    }
  }, chats.map((chat, i) => __jsx(_components_Chats_Chat__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: i,
    chat: chat,
    connectedUsers: connectedUsers,
    deleteChat: deleteChat,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 23
    }
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    width: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 15
    }
  }, router.query.message && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      overflow: 'auto',
      overflowX: 'hidden',
      maxHeight: '35rem',
      height: '35rem',
      backgroundColor: 'whitesmoke'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      position: 'sticky',
      top: '0'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 23
    }
  }, __jsx(_components_Messages_Banner__WEBPACK_IMPORTED_MODULE_10__["default"], {
    bannerData: bannerData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 25
    }
  })), messages.length > 0 && messages.map((message, i) => __jsx(_components_Messages_Message__WEBPACK_IMPORTED_MODULE_12__["default"], {
    divRef: divRef,
    key: i,
    bannerProfilePic: bannerData.profilePicUrl,
    message: message,
    user: user,
    deleteMsg: deleteMsg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 27
    }
  }))), __jsx(_components_Messages_MessageInputField__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sendMsg: sendMsg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 21
    }
  }))))) : __jsx(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_9__["NoMessages"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 11
    }
  })));
}

Messages.getInitialProps = async ctx => {
  try {
    const {
      token
    } = Object(nookies__WEBPACK_IMPORTED_MODULE_4__["parseCookies"])(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__["default"]}/api/chats`, {
      headers: {
        Authorization: token
      }
    });
    return {
      chatsData: res.data
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Messages);

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

/***/ "./utils/getUserInfo.js":
/*!******************************!*\
  !*** ./utils/getUserInfo.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);




const getUserInfo = async userToFindId => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1__["default"]}/api/chats/user/${userToFindId}`, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("token")
      }
    });
    return {
      name: res.data.name,
      profilePicUrl: res.data.profilePicUrl
    };
  } catch (error) {
    console.error(error);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getUserInfo);

/***/ }),

/***/ "./utils/newMessageSound.js":
/*!**********************************!*\
  !*** ./utils/newMessageSound.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const newMsgSound = senderName => {
  const sound = new Audio('/light.mp3');
  sound && sound.play();

  if (senderName) {
    document.title = `New message from ${senderName}`;

    if (document.visibilityState === 'visible') {
      setTimeout(() => {
        document.title = 'Messages';
      }, 5000);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (newMsgSound);

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

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0cy9DaGF0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhdHMvQ2hhdExpc3RTZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvTm9EYXRhLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVzc2FnZXMvQmFubmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVzc2FnZXMvTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lc3NhZ2VzL01lc3NhZ2VJbnB1dEZpZWxkLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL21lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Jhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY2FsY3VsYXRlVGltZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRVc2VySW5mby5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9uZXdNZXNzYWdlU291bmQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvLWNsaWVudFwiIl0sIm5hbWVzIjpbIkNoYXQiLCJjaGF0IiwiZGVsZXRlQ2hhdCIsImNvbm5lY3RlZFVzZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNPbmluZSIsImxlbmd0aCIsImZpbHRlciIsImNvbm5lY3RlZFVzZXIiLCJ1c2VySWQiLCJtZXNzYWdlc1dpdGgiLCJxdWVyeSIsIm1lc3NhZ2UiLCJwdXNoIiwidW5kZWZpbmVkIiwic2hhbGxvdyIsInByb2ZpbGVQaWNVcmwiLCJuYW1lIiwiY2FsY3VsYXRlVGltZSIsImRhdGUiLCJwb3NpdGlvbiIsInJpZ2h0IiwiY3Vyc29yIiwibGFzdE1lc3NhZ2UiLCJzdWJzdHJpbmciLCJjYW5jZWwiLCJDaGF0TGlzdFNlYXJjaCIsImNoYXRzIiwic2V0Q2hhdHMiLCJ0ZXh0Iiwic2V0VGV4dCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsIkNhbmNlbFRva2VuIiwiYXhpb3MiLCJ0b2tlbiIsImNvb2tpZSIsImdldCIsInJlcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNhbmNlbFRva2VuIiwiY2FuY2VsZXIiLCJkYXRhIiwiZXJyb3IiLCJhbGVydCIsImFkZENoYXQiLCJyZXN1bHQiLCJhbHJlYWR5SW5DaGF0cyIsIl9pZCIsIm5ld0NoYXQiLCJEYXRlIiwibm93IiwicHJldiIsIlJlc3VsdFJlbmRlcmVyIiwiTm9Qcm9maWxlUG9zdHMiLCJOb0ZvbGxvd0RhdGEiLCJmb2xsb3dlcnNDb21wb25lbnQiLCJmb2xsb3dpbmdDb21wb25lbnQiLCJOb01lc3NhZ2VzIiwiTm9Qb3N0cyIsIk5vUHJvZmlsZSIsIk5vTm90aWZpY2F0aW9ucyIsIk5vUG9zdEZvdW5kIiwiQmFubmVyIiwiYmFubmVyRGF0YSIsIk1lc3NhZ2UiLCJ1c2VyIiwiZGVsZXRlTXNnIiwiYmFubmVyUHJvZmlsZVBpYyIsImRpdlJlZiIsImRlbGV0ZUljb24iLCJzaG93RGVsZXRlSWNvbiIsImlmWW91U2VuZGVyIiwic2VuZGVyIiwibXNnIiwiTWVzc2FnZUlucHV0RmllbGQiLCJzZW5kTXNnIiwiYm90dG9tIiwicHJldmVudERlZmF1bHQiLCJjb2xvciIsImljb24iLCJkaXNhYmxlZCIsInNjcm9sbERpdlRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3VyIiwiTWVzc2FnZXMiLCJjaGF0c0RhdGEiLCJzb2NrZXQiLCJ1c2VSZWYiLCJzZXRDb25uZWN0ZWRVc2VycyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJzZXRCYW5uZXJEYXRhIiwib3BlbkNoYXRJZCIsInVzZUVmZmVjdCIsImlvIiwiZW1pdCIsIm9uIiwidXNlcnMiLCJvZmYiLCJsb2FkTWVzc2FnZXMiLCJnZXRVc2VySW5mbyIsIm1zZ1NlbmRUb1VzZXJJZCIsIm5ld01zZyIsInJlY2VpdmVyIiwicHJldmlvdXNDaGF0IiwiZmluZCIsInNlbmRlck5hbWUiLCJpZlByZXZpb3VzbHlNZXNzYWdlZCIsIm5ld01zZ1NvdW5kIiwibWVzc2FnZUlkIiwiZGVsZXRlIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwib3ZlcmZsb3ciLCJtYXhIZWlnaHQiLCJtYXAiLCJpIiwib3ZlcmZsb3dYIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwidG9wIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicGFyc2VDb29raWVzIiwiZXJyb3JMb2FkaW5nIiwiY3JlYXRlZEF0IiwidG9kYXkiLCJtb21lbnQiLCJwb3N0RGF0ZSIsImRpZmZJbkhvdXJzIiwiZGlmZiIsInVzZXJUb0ZpbmRJZCIsImNvbnNvbGUiLCJzb3VuZCIsIkF1ZGlvIiwicGxheSIsImRvY3VtZW50IiwidGl0bGUiLCJ2aXNpYmlsaXR5U3RhdGUiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FB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RyxDQUFDTSxJQUFKLENBQVNsQyxJQUFqQjtBQUF1QkQsbUJBQWEsRUFBRTZCLEdBQUcsQ0FBQ00sSUFBSixDQUFTbkM7QUFBL0MsS0FBUDtBQUNELEdBTkQsQ0FNRSxPQUFPb0MsS0FBUCxFQUFjO0FBQ2QyRixXQUFPLENBQUMzRixLQUFSLENBQWNBLEtBQWQ7QUFDRDtBQUNGLENBVkQ7O0FBWWUyRCwwRUFBZixFOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQSxNQUFNUSxXQUFXLEdBQUlGLFVBQUQsSUFBZ0I7QUFDbEMsUUFBTTJCLEtBQUssR0FBRyxJQUFJQyxLQUFKLENBQVUsWUFBVixDQUFkO0FBRUFELE9BQUssSUFBSUEsS0FBSyxDQUFDRSxJQUFOLEVBQVQ7O0FBRUEsTUFBSTdCLFVBQUosRUFBZ0I7QUFDZDhCLFlBQVEsQ0FBQ0MsS0FBVCxHQUFrQixvQkFBbUIvQixVQUFXLEVBQWhEOztBQUVBLFFBQUk4QixRQUFRLENBQUNFLGVBQVQsS0FBNkIsU0FBakMsRUFBNEM7QUFDMUNDLGdCQUFVLENBQUMsTUFBTTtBQUNmSCxnQkFBUSxDQUFDQyxLQUFULEdBQWlCLFVBQWpCO0FBQ0QsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdEO0FBQ0Y7QUFDRixDQWREOztBQWdCZTdCLDBFQUFmLEU7Ozs7Ozs7Ozs7O0FDaEJBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL21lc3NhZ2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9tZXNzYWdlcy5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERpdmlkZXIsIENvbW1lbnQsIEljb24sIExpc3QgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSAnLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZSc7XHJcblxyXG5mdW5jdGlvbiBDaGF0KHsgY2hhdCwgZGVsZXRlQ2hhdCwgY29ubmVjdGVkVXNlcnMgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBpc09uaW5lID1cclxuICAgIGNvbm5lY3RlZFVzZXJzLmxlbmd0aCA+IDAgJiZcclxuICAgIGNvbm5lY3RlZFVzZXJzLmZpbHRlcihcclxuICAgICAgKGNvbm5lY3RlZFVzZXIpID0+IGNvbm5lY3RlZFVzZXIudXNlcklkID09PSBjaGF0Lm1lc3NhZ2VzV2l0aFxyXG4gICAgKS5sZW5ndGggPiAwO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExpc3Qgc2VsZWN0aW9uPlxyXG4gICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgIGFjdGl2ZT17cm91dGVyLnF1ZXJ5Lm1lc3NhZ2UgPT09IGNoYXQubWVzc2FnZXNXaXRofVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgcm91dGVyLnB1c2goYC9tZXNzYWdlcz9tZXNzYWdlPSR7Y2hhdC5tZXNzYWdlc1dpdGh9YCwgdW5kZWZpbmVkLCB7XHJcbiAgICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q29tbWVudD5cclxuICAgICAgICAgICAgPENvbW1lbnQuQXZhdGFyIHNyYz17Y2hhdC5wcm9maWxlUGljVXJsfSAvPlxyXG4gICAgICAgICAgICA8Q29tbWVudC5Db250ZW50PlxyXG4gICAgICAgICAgICAgIDxDb21tZW50LkF1dGhvciBhcz1cImFcIj5cclxuICAgICAgICAgICAgICAgIHtjaGF0Lm5hbWV9eycgJ31cclxuICAgICAgICAgICAgICAgIHtpc09uaW5lICYmIDxJY29uIG5hbWU9XCJjaXJjbGVcIiBzaXplPVwic21cIiBjb2xvcj1cImdyZWVuXCIgLz59eycgJ31cclxuICAgICAgICAgICAgICA8L0NvbW1lbnQuQXV0aG9yPlxyXG5cclxuICAgICAgICAgICAgICA8Q29tbWVudC5NZXRhZGF0YT5cclxuICAgICAgICAgICAgICAgIDxkaXY+e2NhbGN1bGF0ZVRpbWUoY2hhdC5kYXRlKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0cmFzaCBhbHRlcm5hdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVDaGF0KGNoYXQubWVzc2FnZXNXaXRoKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ29tbWVudC5NZXRhZGF0YT5cclxuXHJcbiAgICAgICAgICAgICAgPENvbW1lbnQuVGV4dD5cclxuICAgICAgICAgICAgICAgIHtjaGF0Lmxhc3RNZXNzYWdlLmxlbmd0aCA+IDIwXHJcbiAgICAgICAgICAgICAgICAgID8gYCR7Y2hhdC5sYXN0TWVzc2FnZS5zdWJzdHJpbmcoMCwgMjApfSAuLi5gXHJcbiAgICAgICAgICAgICAgICAgIDogY2hhdC5sYXN0TWVzc2FnZX1cclxuICAgICAgICAgICAgICA8L0NvbW1lbnQuVGV4dD5cclxuICAgICAgICAgICAgPC9Db21tZW50LkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0NvbW1lbnQ+XHJcbiAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGlzdCwgSW1hZ2UsIFNlYXJjaCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gJy4uLy4uL3V0aWxzL2Jhc2VVcmwnO1xyXG5sZXQgY2FuY2VsO1xyXG5cclxuZnVuY3Rpb24gQ2hhdExpc3RTZWFyY2goeyBjaGF0cywgc2V0Q2hhdHMgfSkge1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRUZXh0KHZhbHVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY2FuY2VsICYmIGNhbmNlbCgpO1xyXG4gICAgICBjb25zdCBDYW5jZWxUb2tlbiA9IGF4aW9zLkNhbmNlbFRva2VuO1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGNvb2tpZS5nZXQoJ3Rva2VuJyk7XHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3NlYXJjaC8ke3ZhbHVlfWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH0sXHJcbiAgICAgICAgY2FuY2VsVG9rZW46IG5ldyBDYW5jZWxUb2tlbigoY2FuY2VsZXIpID0+IHtcclxuICAgICAgICAgIGNhbmNlbCA9IGNhbmNlbGVyO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggPT09IDApIHJldHVybiBzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHJcbiAgICAgIHNldFJlc3VsdHMocmVzLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWxlcnQoJ0Vycm9yIFNlYXJjaGluZycpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZENoYXQgPSAocmVzdWx0KSA9PiB7XHJcbiAgICBjb25zdCBhbHJlYWR5SW5DaGF0cyA9XHJcbiAgICAgIGNoYXRzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgY2hhdHMuZmlsdGVyKChjaGF0KSA9PiBjaGF0Lm1lc3NhZ2VzV2l0aCA9PT0gcmVzdWx0Ll9pZCkubGVuZ3RoID4gMDtcclxuXHJcbiAgICBpZiAoYWxyZWFkeUluQ2hhdHMpIHtcclxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKGAvbWVzc2FnZXM/bWVzc2FnZT0ke3Jlc3VsdC5faWR9YCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBuZXdDaGF0ID0ge1xyXG4gICAgICAgIG1lc3NhZ2VzV2l0aDogcmVzdWx0Ll9pZCxcclxuICAgICAgICBuYW1lOiByZXN1bHQubmFtZSxcclxuICAgICAgICBwcm9maWxlUGljVXJsOiByZXN1bHQucHJvZmlsZVBpY1VybCxcclxuICAgICAgICBsYXN0TWVzc2FnZTogJycsXHJcbiAgICAgICAgZGF0ZTogRGF0ZS5ub3coKSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNldENoYXRzKChwcmV2KSA9PiBbbmV3Q2hhdCwgLi4ucHJldl0pO1xyXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2goYC9tZXNzYWdlcz9tZXNzYWdlPSR7cmVzdWx0Ll9pZH1gKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlYXJjaFxyXG4gICAgICBvbkJsdXI9eygpID0+IHtcclxuICAgICAgICByZXN1bHRzLmxlbmd0aCA+IDAgJiYgc2V0UmVzdWx0cyhbXSk7XHJcbiAgICAgICAgbG9hZGluZyAmJiBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRUZXh0KCcnKTtcclxuICAgICAgfX1cclxuICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgIHJlc3VsdFJlbmRlcmVyPXtSZXN1bHRSZW5kZXJlcn1cclxuICAgICAgcmVzdWx0cz17cmVzdWx0c31cclxuICAgICAgb25TZWFyY2hDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgbWluQ2hhcmFjdGVycz17MX1cclxuICAgICAgb25SZXN1bHRTZWxlY3Q9eyhlLCBkYXRhKSA9PiBhZGRDaGF0KGRhdGEucmVzdWx0KX1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgUmVzdWx0UmVuZGVyZXIgPSAoeyBfaWQsIHByb2ZpbGVQaWNVcmwsIG5hbWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdCBrZXk9e19pZH0+XHJcbiAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgPEltYWdlIHNyYz17cHJvZmlsZVBpY1VybH0gYWx0PVwiUHJvZmlsZVBpY1wiIGF2YXRhciAvPlxyXG4gICAgICAgIDxMaXN0LkNvbnRlbnQgaGVhZGVyPXtuYW1lfSBhcz1cImFcIiAvPlxyXG4gICAgICA8L0xpc3QuSXRlbT5cclxuICAgIDwvTGlzdD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdExpc3RTZWFyY2g7XHJcbiIsImltcG9ydCB7IE1lc3NhZ2UsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBOb1Byb2ZpbGVQb3N0cyA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPE1lc3NhZ2VcclxuICAgICAgaW5mb1xyXG4gICAgICBpY29uPVwibWVoXCJcclxuICAgICAgaGVhZGVyPVwiU29ycnlcIlxyXG4gICAgICBjb250ZW50PVwiVXNlciBoYXMgbm90IHBvc3RlZCBhbnl0aGluZyB5ZXQhXCJcclxuICAgIC8+XHJcbiAgICA8QnV0dG9uXHJcbiAgICAgIGljb249XCJsb25nIGFycm93IGFsdGVybmF0ZSBsZWZ0XCJcclxuICAgICAgY29udGVudD1cIkdvIEJhY2tcIlxyXG4gICAgICBhcz1cImFcIlxyXG4gICAgICBocmVmPVwiL1wiXHJcbiAgICAvPlxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vRm9sbG93RGF0YSA9ICh7IGZvbGxvd2Vyc0NvbXBvbmVudCwgZm9sbG93aW5nQ29tcG9uZW50IH0pID0+IChcclxuICA8PlxyXG4gICAge2ZvbGxvd2Vyc0NvbXBvbmVudCAmJiAoXHJcbiAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgaWNvbj1cInVzZXIgb3V0bGluZVwiXHJcbiAgICAgICAgaW5mb1xyXG4gICAgICAgIGNvbnRlbnQ9e2BVc2VyIGRvZXMgbm90IGhhdmUgZm9sbG93ZXJzYH1cclxuICAgICAgLz5cclxuICAgICl9XHJcblxyXG4gICAge2ZvbGxvd2luZ0NvbXBvbmVudCAmJiAoXHJcbiAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgaWNvbj1cInVzZXIgb3V0bGluZVwiXHJcbiAgICAgICAgaW5mb1xyXG4gICAgICAgIGNvbnRlbnQ9e2BVc2VyIGRvZXMgbm90IGZvbGxvdyBhbnkgdXNlcnNgfVxyXG4gICAgICAvPlxyXG4gICAgKX1cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb01lc3NhZ2VzID0gKCkgPT4gKFxyXG4gIDxNZXNzYWdlXHJcbiAgICBpbmZvXHJcbiAgICBpY29uPVwidGVsZWdyYW0gcGxhbmVcIlxyXG4gICAgaGVhZGVyPVwiU29ycnlcIlxyXG4gICAgY29udGVudD1cIllvdSBoYXZlIG5vdCBtZXNzYWdlZCBhbnlvbmUgeWV0LlNlYXJjaCBhYm92ZSB0byBtZXNzYWdlIHNvbWVvbmUhXCJcclxuICAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUG9zdHMgPSAoKSA9PiAoXHJcbiAgPE1lc3NhZ2VcclxuICAgIGluZm9cclxuICAgIGljb249XCJtZWhcIlxyXG4gICAgaGVhZGVyPVwiSGV5IVwiXHJcbiAgICBjb250ZW50PVwiTm8gUG9zdHMuIE1ha2Ugc3VyZSB5b3UgaGF2ZSBmb2xsb3dlZCBzb21lb25lLlwiXHJcbiAgLz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb1Byb2ZpbGUgPSAoKSA9PiAoXHJcbiAgPE1lc3NhZ2UgaW5mbyBpY29uPVwibWVoXCIgaGVhZGVyPVwiSGV5IVwiIGNvbnRlbnQ9XCJObyBQcm9maWxlIEZvdW5kLlwiIC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Ob3RpZmljYXRpb25zID0gKCkgPT4gKFxyXG4gIDxNZXNzYWdlIGNvbnRlbnQ9XCJObyBOb3RpZmljYXRpb25zXCIgaWNvbj1cInNtaWxlXCIgaW5mbyAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUG9zdEZvdW5kID0gKCkgPT4gKFxyXG4gIDxNZXNzYWdlIGluZm8gaWNvbj1cIm1laFwiIGhlYWRlcj1cIkhleSFcIiBjb250ZW50PVwiTm8gUG9zdCBGb3VuZC5cIiAvPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTZWdtZW50LCBHcmlkLCBJbWFnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuXHJcbmNvbnN0IEJhbm5lciA9ICh7IGJhbm5lckRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IHsgbmFtZSwgcHJvZmlsZVBpY1VybCB9ID0gYmFubmVyRGF0YTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNlZ21lbnQgY29sb3I9XCJ0ZWFsXCIgYXR0YWNoZWQ9XCJ0b3BcIj5cclxuICAgICAgICA8R3JpZD5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPVwibGVmdFwiIHdpZHRoPXsxNH0+XHJcbiAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICA8SW1hZ2UgYXZhdGFyIHNyYz17cHJvZmlsZVBpY1VybH0gLz5cclxuICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L1NlZ21lbnQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEljb24sIFBvcHVwIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tICcuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lJztcclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2UoeyBtZXNzYWdlLCB1c2VyLCBkZWxldGVNc2csIGJhbm5lclByb2ZpbGVQaWMsIGRpdlJlZiB9KSB7XHJcbiAgY29uc3QgW2RlbGV0ZUljb24sIHNob3dEZWxldGVJY29uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaWZZb3VTZW5kZXIgPSBtZXNzYWdlLnNlbmRlciA9PT0gdXNlci5faWQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1YmJsZVdyYXBwZXJcIiByZWY9e2RpdlJlZn0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2lmWW91U2VuZGVyID8gJ2lubGluZUNvbnRhaW5lciBvd24nIDogJ2lubGluZUNvbnRhaW5lcid9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaWZZb3VTZW5kZXIgJiYgc2hvd0RlbGV0ZUljb24oIWRlbGV0ZUljb24pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lSWNvblwiXHJcbiAgICAgICAgICBzcmM9e2lmWW91U2VuZGVyID8gdXNlci5wcm9maWxlUGljVXJsIDogYmFubmVyUHJvZmlsZVBpY31cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aWZZb3VTZW5kZXIgPyAnb3duQnViYmxlIG93bicgOiAnb3RoZXJCdWJibGUgb3RoZXInfT5cclxuICAgICAgICAgIHttZXNzYWdlLm1zZ31cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge2RlbGV0ZUljb24gJiYgKFxyXG4gICAgICAgICAgPFBvcHVwXHJcbiAgICAgICAgICAgIHRyaWdnZXI9e1xyXG4gICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidHJhc2hcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZU1zZyhtZXNzYWdlLl9pZCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250ZW50PVwiVGhpcyB3aWxsIG9ubHkgZGVsZXRlIHRoZSBtZXNzYWdlIGZyb20geW91ciBlbmQhXCJcclxuICAgICAgICAgICAgcG9zaXRpb249XCJ0b3AgcmlnaHRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17aWZZb3VTZW5kZXIgPyAnb3duJyA6ICdvdGhlcid9PlxyXG4gICAgICAgIHtjYWxjdWxhdGVUaW1lKG1lc3NhZ2UuZGF0ZSl9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgU2VnbWVudCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuXHJcbmNvbnN0IE1lc3NhZ2VJbnB1dEZpZWxkID0gKHsgc2VuZE1zZyB9KSA9PiB7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3N0aWNreScsIGJvdHRvbTogJzAnIH19PlxyXG4gICAgICA8U2VnbWVudCBzZWNvbmRhcnkgY29sb3I9XCJ0ZWFsXCIgYXR0YWNoZWQ9XCJib3R0b21cIj5cclxuICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgcmVwbHlcclxuICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNlbmRNc2codGV4dCk7XHJcbiAgICAgICAgICAgIHNldFRleHQoJycpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbmQgTmV3IE1lc3NhZ2VcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICdibHVlJyxcclxuICAgICAgICAgICAgICBpY29uOiAndGVsZWdyYW0gcGxhY2UnLFxyXG4gICAgICAgICAgICAgIGRpc2FibGVkOiB0ZXh0ID09PSAnJyxcclxuICAgICAgICAgICAgICBsb2FkaW5nOiBsb2FkaW5nLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvU2VnbWVudD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlSW5wdXRGaWVsZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tICcuLi91dGlscy9iYXNlVXJsJztcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSAnbm9va2llcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgU2VnbWVudCwgSGVhZGVyLCBEaXZpZGVyLCBDb21tZW50LCBHcmlkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgQ2hhdCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXRzL0NoYXQnO1xyXG5pbXBvcnQgQ2hhdExpc3RTZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50cy9DaGF0cy9DaGF0TGlzdFNlYXJjaCc7XHJcbmltcG9ydCB7IE5vTWVzc2FnZXMgfSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGEnO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvTWVzc2FnZXMvQmFubmVyJztcclxuaW1wb3J0IE1lc3NhZ2VJbnB1dEZpZWxkIGZyb20gJy4uL2NvbXBvbmVudHMvTWVzc2FnZXMvTWVzc2FnZUlucHV0RmllbGQnO1xyXG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnRzL01lc3NhZ2VzL01lc3NhZ2UnO1xyXG5pbXBvcnQgZ2V0VXNlckluZm8gZnJvbSAnLi4vdXRpbHMvZ2V0VXNlckluZm8nO1xyXG5pbXBvcnQgbmV3TXNnU291bmQgZnJvbSAnLi4vdXRpbHMvbmV3TWVzc2FnZVNvdW5kJztcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuY29uc3Qgc2Nyb2xsRGl2VG9Cb3R0b20gPSAoZGl2UmVmKSA9PlxyXG4gIGRpdlJlZi5jdXJyZW50ICE9PSBudWxsICYmXHJcbiAgZGl2UmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvdXI6ICdzbW9vdGgnIH0pO1xyXG5cclxuZnVuY3Rpb24gTWVzc2FnZXMoeyBjaGF0c0RhdGEsIHVzZXIgfSkge1xyXG4gIGNvbnN0IFtjaGF0cywgc2V0Q2hhdHNdID0gdXNlU3RhdGUoY2hhdHNEYXRhKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3Qgc29ja2V0ID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgW2Nvbm5lY3RlZFVzZXJzLCBzZXRDb25uZWN0ZWRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtiYW5uZXJEYXRhLCBzZXRCYW5uZXJEYXRhXSA9IHVzZVN0YXRlKHsgbmFtZTogJycsIHByb2ZpbGVQaWNVcmw6ICcnIH0pO1xyXG5cclxuICBjb25zdCBkaXZSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgLy8gVGhpcyByZWYgaXMgZm9yIHBlcnNpc3RpbmcgdGhlIHN0YXRlIG9mIHF1ZXJ5IHN0cmluZyBpbiB1cmwgdGhyb3VnaG91dCByZS1yZW5kZXJzLiBUaGlzIHJlZiBpcyB0aGUgdmFsdWUgb2YgcXVlcnkgc3RyaW5nIGluc2lkZSB1cmxcclxuICBjb25zdCBvcGVuQ2hhdElkID0gdXNlUmVmKCcnKTtcclxuXHJcbiAgLy9DT05ORUNUSU9OIHVzZUVmZmVjdFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXNvY2tldC5jdXJyZW50KSB7XHJcbiAgICAgIHNvY2tldC5jdXJyZW50ID0gaW8oYmFzZVVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvY2tldC5jdXJyZW50KSB7XHJcbiAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoJ2pvaW4nLCB7IHVzZXJJZDogdXNlci5faWQgfSk7XHJcblxyXG4gICAgICBzb2NrZXQuY3VycmVudC5vbignY29ubmVjdGVkVXNlcnMnLCAoeyB1c2VycyB9KSA9PiB7XHJcbiAgICAgICAgdXNlcnMubGVuZ3RoID4gMCAmJiBzZXRDb25uZWN0ZWRVc2Vycyh1c2Vycyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGNoYXRzLmxlbmd0aCA+IDAgJiYgIXJvdXRlci5xdWVyeS5tZXNzYWdlKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9tZXNzYWdlcz9tZXNzYWdlPSR7Y2hhdHNbMF0ubWVzc2FnZXNXaXRofWAsIHVuZGVmaW5lZCwge1xyXG4gICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmIChzb2NrZXQuY3VycmVudCkge1xyXG4gICAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoJ2Rpc2Nvbm5lY3QnKTtcclxuICAgICAgICBzb2NrZXQuY3VycmVudC5vZmYoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIExPQUQgTUVTU0FHRVMgdXNlRWZmZWN0XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGxvYWRNZXNzYWdlcyA9ICgpID0+IHtcclxuICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdCgnbG9hZE1lc3NhZ2VzJywge1xyXG4gICAgICAgIHVzZXJJZDogdXNlci5faWQsXHJcbiAgICAgICAgbWVzc2FnZXNXaXRoOiByb3V0ZXIucXVlcnkubWVzc2FnZSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzb2NrZXQuY3VycmVudC5vbignbWVzc2FnZXNMb2FkZWQnLCBhc3luYyAoeyBjaGF0IH0pID0+IHtcclxuICAgICAgICBzZXRNZXNzYWdlcyhjaGF0Lm1lc3NhZ2VzKTtcclxuICAgICAgICBzZXRCYW5uZXJEYXRhKHtcclxuICAgICAgICAgIG5hbWU6IGNoYXQubWVzc2FnZXNXaXRoLm5hbWUsXHJcbiAgICAgICAgICBwcm9maWxlUGljVXJsOiBjaGF0Lm1lc3NhZ2VzV2l0aC5wcm9maWxlUGljVXJsLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBvcGVuQ2hhdElkLmN1cnJlbnQgPSBjaGF0Lm1lc3NhZ2VzV2l0aC5faWQ7XHJcbiAgICAgICAgZGl2UmVmLmN1cnJlbnQgJiYgc2Nyb2xsRGl2VG9Cb3R0b20oZGl2UmVmKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzb2NrZXQuY3VycmVudC5vbignbm9DaGF0Rm91bmQnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCBwcm9maWxlUGljVXJsIH0gPSBhd2FpdCBnZXRVc2VySW5mbyhyb3V0ZXIucXVlcnkubWVzc2FnZSk7XHJcblxyXG4gICAgICAgIHNldEJhbm5lckRhdGEoeyBuYW1lLCBwcm9maWxlUGljVXJsIH0pO1xyXG4gICAgICAgIHNldE1lc3NhZ2VzKFtdKTtcclxuXHJcbiAgICAgICAgb3BlbkNoYXRJZC5jdXJyZW50ID0gcm91dGVyLnF1ZXJ5Lm1lc3NhZ2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoc29ja2V0LmN1cnJlbnQgJiYgcm91dGVyLnF1ZXJ5Lm1lc3NhZ2UpIGxvYWRNZXNzYWdlcygpO1xyXG4gIH0sIFtyb3V0ZXIucXVlcnkubWVzc2FnZV0pO1xyXG5cclxuICBjb25zdCBzZW5kTXNnID0gKG1zZykgPT4ge1xyXG4gICAgaWYgKHNvY2tldC5jdXJyZW50KSB7XHJcbiAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoJ3NlbmROZXdNc2cnLCB7XHJcbiAgICAgICAgdXNlcklkOiB1c2VyLl9pZCxcclxuICAgICAgICBtc2dTZW5kVG9Vc2VySWQ6IG9wZW5DaGF0SWQuY3VycmVudCxcclxuICAgICAgICBtc2csXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIENvbmZpcm1pbmcgbXNnIGlzIHNlbnQgYW5kIHJlY2V2aW5nIHRoZSBtZXNzYWdlcyB1c2VFZmZlY3RcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNvY2tldC5jdXJyZW50KSB7XHJcbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKCdtc2dTZW50JywgKHsgbmV3TXNnIH0pID0+IHtcclxuICAgICAgICBpZiAobmV3TXNnLnJlY2VpdmVyID09PSBvcGVuQ2hhdElkLmN1cnJlbnQpIHtcclxuICAgICAgICAgIHNldE1lc3NhZ2VzKChwcmV2KSA9PiBbLi4ucHJldiwgbmV3TXNnXSk7XHJcblxyXG4gICAgICAgICAgc2V0Q2hhdHMoKHByZXYpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNDaGF0ID0gcHJldi5maW5kKFxyXG4gICAgICAgICAgICAgIChjaGF0KSA9PiBjaGF0Lm1lc3NhZ2VzV2l0aCA9PT0gbmV3TXNnLnJlY2VpdmVyXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHByZXZpb3VzQ2hhdC5sYXN0TWVzc2FnZSA9IG5ld01zZy5tc2c7XHJcbiAgICAgICAgICAgIHByZXZpb3VzQ2hhdC5kYXRlID0gbmV3TXNnLmRhdGU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnByZXZdO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKCduZXdNc2dSZWNlaXZlZCcsIGFzeW5jICh7IG5ld01zZyB9KSA9PiB7XHJcbiAgICAgICAgbGV0IHNlbmRlck5hbWU7XHJcblxyXG4gICAgICAgIC8vIFdIRU4gQ0hBVCBXSVRIIFNFTkRFUiBJUyBDVVJSRU5UTFkgT1BFTkVEIElOU0lERSBZT1VSIEJST1dTRVJcclxuICAgICAgICBpZiAobmV3TXNnLnNlbmRlciA9PT0gb3BlbkNoYXRJZC5jdXJyZW50KSB7XHJcbiAgICAgICAgICBzZXRNZXNzYWdlcygocHJldikgPT4gWy4uLnByZXYsIG5ld01zZ10pO1xyXG5cclxuICAgICAgICAgIHNldENoYXRzKChwcmV2KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzQ2hhdCA9IHByZXYuZmluZChcclxuICAgICAgICAgICAgICAoY2hhdCkgPT4gY2hhdC5tZXNzYWdlc1dpdGggPT09IG5ld01zZy5zZW5kZXJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcHJldmlvdXNDaGF0Lmxhc3RNZXNzYWdlID0gbmV3TXNnLm1zZztcclxuICAgICAgICAgICAgcHJldmlvdXNDaGF0LmRhdGUgPSBuZXdNc2cuZGF0ZTtcclxuXHJcbiAgICAgICAgICAgIHNlbmRlck5hbWUgPSBwcmV2aW91c0NoYXQubmFtZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBbLi4ucHJldl07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGlmUHJldmlvdXNseU1lc3NhZ2VkID1cclxuICAgICAgICAgICAgY2hhdHMuZmlsdGVyKChjaGF0KSA9PiBjaGF0Lm1lc3NhZ2VzV2l0aCA9PT0gbmV3TXNnLnNlbmRlcikubGVuZ3RoID5cclxuICAgICAgICAgICAgMDtcclxuXHJcbiAgICAgICAgICBpZiAoaWZQcmV2aW91c2x5TWVzc2FnZWQpIHtcclxuICAgICAgICAgICAgc2V0Q2hhdHMoKHByZXYpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c0NoYXQgPSBwcmV2LmZpbmQoXHJcbiAgICAgICAgICAgICAgICAoY2hhdCkgPT4gY2hhdC5tZXNzYWdlc1dpdGggPT09IG5ld01zZy5zZW5kZXJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHByZXZpb3VzQ2hhdC5sYXN0TWVzc2FnZSA9IG5ld01zZy5tc2c7XHJcbiAgICAgICAgICAgICAgcHJldmlvdXNDaGF0LmRhdGUgPSBuZXdNc2cuZGF0ZTtcclxuXHJcbiAgICAgICAgICAgICAgc2VuZGVyTmFtZSA9IHByZXZpb3VzQ2hhdC5uYW1lO1xyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNDaGF0LFxyXG4gICAgICAgICAgICAgICAgLi4ucHJldi5maWx0ZXIoKGNoYXQpID0+IGNoYXQubWVzc2FnZXNXaXRoICE9PSBuZXdNc2cuc2VuZGVyKSxcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvL0lGIE5PIFBSRVZJT1VTIENIQVQgV0lUSCBUSEUgU0VOREVSXHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgeyBuYW1lLCBwcm9maWxlUGljVXJsIH0gPSBhd2FpdCBnZXRVc2VySW5mbyhuZXdNc2cuc2VuZGVyKTtcclxuICAgICAgICAgICAgc2VuZGVyTmFtZSA9IG5hbWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdDaGF0ID0ge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2VzV2l0aDogbmV3TXNnLnNlbmRlcixcclxuICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgIHByb2ZpbGVQaWNVcmwsXHJcbiAgICAgICAgICAgICAgbGFzdE1lc3NhZ2U6IG5ld01zZy5tc2csXHJcbiAgICAgICAgICAgICAgZGF0ZTogbmV3TXNnLmRhdGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHNldENoYXRzKChwcmV2KSA9PiBbbmV3Q2hhdCwgLi4ucHJldl0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3TXNnU291bmQoc2VuZGVyTmFtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgc2Nyb2xsRGl2VG9Cb3R0b20oZGl2UmVmKTtcclxuICB9LCBbbWVzc2FnZXNdKTtcclxuXHJcbiAgY29uc3QgZGVsZXRlTXNnID0gKG1lc3NhZ2VJZCkgPT4ge1xyXG4gICAgaWYgKHNvY2tldC5jdXJyZW50KSB7XHJcbiAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoJ2RlbGV0ZU1zZycsIHtcclxuICAgICAgICB1c2VySWQ6IHVzZXIuX2lkLFxyXG4gICAgICAgIG1lc3NhZ2VzV2l0aDogb3BlbkNoYXRJZC5jdXJyZW50LFxyXG4gICAgICAgIG1lc3NhZ2VJZCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzb2NrZXQuY3VycmVudC5vbignbXNnRGVsZXRlZCcsICgpID0+IHtcclxuICAgICAgICBzZXRNZXNzYWdlcygocHJldikgPT5cclxuICAgICAgICAgIHByZXYuZmlsdGVyKChtZXNzYWdlKSA9PiBtZXNzYWdlLl9pZCAhPT0gbWVzc2FnZUlkKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUNoYXQgPSBhc3luYyAobWVzc2FnZXNXaXRoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5kZWxldGUoYCR7YmFzZVVybH0vYXBpL2NoYXRzLyR7bWVzc2FnZXNXaXRofWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoJ3Rva2VuJykgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRDaGF0cygocHJldikgPT5cclxuICAgICAgICBwcmV2LmZpbHRlcigoY2hhdCkgPT4gY2hhdC5tZXNzYWdlc1dpdGggIT09IG1lc3NhZ2VzV2l0aClcclxuICAgICAgKTtcclxuICAgICAgcm91dGVyLnB1c2goJy9tZXNzYWdlcycsIHVuZGVmaW5lZCwgeyBzaGFsbG93OiB0cnVlIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWxlcnQoJ0Vycm9yIGRlbGV0aW5nIGNoYXQnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNlZ21lbnQgcGFkZGVkIGJhc2ljIHNpemU9XCJsYXJnZVwiIHN0eWxlPXt7IG1hcmdpblRvcDogJzVweCcgfX0+XHJcbiAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgaWNvbj1cImhvbWVcIlxyXG4gICAgICAgICAgY29udGVudD1cIkdvIEJhY2shXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyl9XHJcbiAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICA8Q2hhdExpc3RTZWFyY2ggY2hhdHM9e2NoYXRzfSBzZXRDaGF0cz17c2V0Q2hhdHN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtjaGF0cy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEdyaWQgc3RhY2thYmxlPlxyXG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudC5Hcm91cCBzaXplPVwiYmlnXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWdtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgcmFpc2VkXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb3ZlcmZsb3c6ICdhdXRvJywgbWF4SGVpZ2h0OiAnMzJyZW0nIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hhdHMubWFwKChjaGF0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXQ9e2NoYXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RlZFVzZXJzPXtjb25uZWN0ZWRVc2Vyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ2hhdD17ZGVsZXRlQ2hhdH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgIDwvQ29tbWVudC5Hcm91cD5cclxuICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG5cclxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEyfT5cclxuICAgICAgICAgICAgICAgIHtyb3V0ZXIucXVlcnkubWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnMzVyZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICczNXJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlc21va2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnc3RpY2t5JywgdG9wOiAnMCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXIgYmFubmVyRGF0YT17YmFubmVyRGF0YX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZSZWY9e2RpdlJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbm5lclByb2ZpbGVQaWM9e2Jhbm5lckRhdGEucHJvZmlsZVBpY1VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlTXNnPXtkZWxldGVNc2d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlSW5wdXRGaWVsZCBzZW5kTXNnPXtzZW5kTXNnfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxOb01lc3NhZ2VzIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9TZWdtZW50PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuTWVzc2FnZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHRva2VuIH0gPSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL2NoYXRzYCwge1xyXG4gICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBjaGF0c0RhdGE6IHJlcy5kYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IGVycm9yTG9hZGluZzogdHJ1ZSB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VzO1xyXG4iLCJjb25zdCBiYXNlVXJsID1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFzZVVybDtcclxuIiwiaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiO1xyXG5cclxuY29uc3QgY2FsY3VsYXRlVGltZSA9IGNyZWF0ZWRBdCA9PiB7XHJcbiAgY29uc3QgdG9kYXkgPSBtb21lbnQoRGF0ZS5ub3coKSk7XHJcbiAgY29uc3QgcG9zdERhdGUgPSBtb21lbnQoY3JlYXRlZEF0KTtcclxuICBjb25zdCBkaWZmSW5Ib3VycyA9IHRvZGF5LmRpZmYocG9zdERhdGUsIFwiaG91cnNcIik7XHJcblxyXG4gIGlmIChkaWZmSW5Ib3VycyA8IDI0KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIFRvZGF5IDxNb21lbnQgZm9ybWF0PVwiaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGRpZmZJbkhvdXJzID4gMjQgJiYgZGlmZkluSG91cnMgPCAzNikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICBZZXN0ZXJkYXkgPE1vbWVudCBmb3JtYXQ9XCJoaDptbSBBXCI+e2NyZWF0ZWRBdH08L01vbWVudD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAoZGlmZkluSG91cnMgPiAzNikge1xyXG4gICAgcmV0dXJuIDxNb21lbnQgZm9ybWF0PVwiREQvTU0vWVlZWSBoaDptbSBBXCI+e2NyZWF0ZWRBdH08L01vbWVudD47XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FsY3VsYXRlVGltZTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi9iYXNlVXJsXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY29uc3QgZ2V0VXNlckluZm8gPSBhc3luYyB1c2VyVG9GaW5kSWQgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL2NoYXRzL3VzZXIvJHt1c2VyVG9GaW5kSWR9YCwge1xyXG4gICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBuYW1lOiByZXMuZGF0YS5uYW1lLCBwcm9maWxlUGljVXJsOiByZXMuZGF0YS5wcm9maWxlUGljVXJsIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFVzZXJJbmZvO1xyXG4iLCJjb25zdCBuZXdNc2dTb3VuZCA9IChzZW5kZXJOYW1lKSA9PiB7XHJcbiAgY29uc3Qgc291bmQgPSBuZXcgQXVkaW8oJy9saWdodC5tcDMnKTtcclxuXHJcbiAgc291bmQgJiYgc291bmQucGxheSgpO1xyXG5cclxuICBpZiAoc2VuZGVyTmFtZSkge1xyXG4gICAgZG9jdW1lbnQudGl0bGUgPSBgTmV3IG1lc3NhZ2UgZnJvbSAke3NlbmRlck5hbWV9YDtcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSAndmlzaWJsZScpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSAnTWVzc2FnZXMnO1xyXG4gICAgICB9LCA1MDAwKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXdNc2dTb3VuZDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tY2xpZW50XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=