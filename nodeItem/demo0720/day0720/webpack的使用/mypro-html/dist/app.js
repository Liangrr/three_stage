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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _a = __webpack_require__(1);

var _a2 = _interopRequireDefault(_a);

var _b = __webpack_require__(2);

var bAllModule = _interopRequireWildcard(_b);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 引入指定名字输出的内容
// es6 模块化开发   ESM, webpack可以直接编译。

// commonJS引入模块方式
// var aModule = require('./a');

//es6引入模块方式：
// 引入的是默认输出的内容
console.log(bAllModule.default);

// 引入所有内容


// 引入的是默认输出的内容


console.log(_b.num);
console.log(_b.obj);

console.log(bAllModule);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

// commonJS输出方式
/*
module.exports = {
    num: 123,
    bool: true,
    obj: {
        message: 'hello esm'
    },
    arr: ['item1', 'item2', 'item3'],
    func: function(){
        alert(1);
    }
}
*/

// es6输出方式

//默认输出内容，方式1
/*
export default {
    num: 123,
    bool: true,
    obj: {
        message: 'hello esm'
    },
    arr: ['item1', 'item2', 'item3'],
    func: function(){
        alert(1);
    }
}
*/

//默认输出内容，方式2：
var num = 123;
var bool = true;
var obj = {
    message: 'hello esm'
};
var arr = ['item1', 'item2', 'item3'];
var func = function func() {
    alert(1);
};

var moduleObj = {
    num: num,
    bool: bool,
    obj: obj,
    arr: arr,
    func: func
};
// export default moduleObj;

exports.default = {
    num: num,
    bool: bool,
    obj: obj,
    arr: arr,
    func: func
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//一个模块中，可以有多个export输出，只能有一个export default

//这种写法不支持
/*
let num = 123;
export  num;
*/

// 正确的写法：
var num = exports.num = 123;

var obj = exports.obj = {
    message: 'hello esm'
};

exports.default = 'test';


console.log('12345');
console.log(obj);

/***/ })
/******/ ]);