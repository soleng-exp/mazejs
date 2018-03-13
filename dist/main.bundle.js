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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/program.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Lib/Environment/Field.ts":
/*!**************************************!*\
  !*** ./src/Lib/Environment/Field.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LibAbs_Environment_Zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LibAbs/Environment/Zone */ "./src/LibAbs/Environment/Zone.ts");

class Field extends _LibAbs_Environment_Zone__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(name) {
        super(name);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Field);


/***/ }),

/***/ "./src/Lib/Environment/Maze.ts":
/*!*************************************!*\
  !*** ./src/Lib/Environment/Maze.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LibAbs_Environment_Environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LibAbs/Environment/Environment */ "./src/LibAbs/Environment/Environment.ts");

class Maze extends _LibAbs_Environment_Environment__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
    }
    load(fab) {
        let b1 = fab.createZone("b1");
        let b2 = fab.createZone("b2");
        let a1 = fab.createAccess(b1, b2);
        this.addZone([b1, b2]);
        this.addAccess(fab, [a1]);
    }
    loadPerson(fab) {
        let p1 = fab.createPerson(10, 20, "doe");
        this.addPerson(p1);
    }
    run() {
        console.log('simulation');
        console.log(this);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Maze);


/***/ }),

/***/ "./src/Lib/Environment/Way.ts":
/*!************************************!*\
  !*** ./src/Lib/Environment/Way.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LibAbs_Environment_Access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LibAbs/Environment/Access */ "./src/LibAbs/Environment/Access.ts");

class Way extends _LibAbs_Environment_Access__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(start, end) {
        super(start, end);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Way);


/***/ }),

/***/ "./src/Lib/Person/PLost.ts":
/*!*********************************!*\
  !*** ./src/Lib/Person/PLost.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class PLost {
    constructor() {
        this.energize = 0;
        this.health = 0;
        this.name = "";
    }
}
/* harmony default export */ __webpack_exports__["default"] = (PLost);


/***/ }),

/***/ "./src/LibAbs/Environment/Access.ts":
/*!******************************************!*\
  !*** ./src/LibAbs/Environment/Access.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Access {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    get name() {
        return this.start.name + "->" + this.end.name;
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Access);


/***/ }),

/***/ "./src/LibAbs/Environment/Environment.ts":
/*!***********************************************!*\
  !*** ./src/LibAbs/Environment/Environment.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Environment {
    constructor() {
        this.personList = [];
        this.zoneList = [];
        this.accessList = [];
    }
    addPerson(person) {
        this.personList.push(person);
        this.zoneList[0].addPerson(person);
    }
    addZone(zones) {
        console.log(zones);
        this.zoneList = this.zoneList.concat(zones);
        console.log(this);
    }
    addAccess(fab, access) {
        this.accessList = this.accessList.concat(access);
        /** @var Access access */
        access.forEach((access) => {
            let accessInv = fab.createAccess(access.end, access.start);
            this.accessList.push(accessInv);
        });
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Environment);


/***/ }),

/***/ "./src/LibAbs/Environment/Zone.ts":
/*!****************************************!*\
  !*** ./src/LibAbs/Environment/Zone.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Zone {
    constructor(name) {
        this.name = name;
        this.accessList = [];
        this.personList = [];
    }
    addPerson(person) {
        this.personList.push(person);
    }
    removePerson(person) {
        this.personList.splice(this.personList.indexOf(person), 1);
    }
    addAccess(access) {
        this.accessList.push(access);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Zone);


/***/ }),

/***/ "./src/fab/MazeFabric.ts":
/*!*******************************!*\
  !*** ./src/fab/MazeFabric.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Lib_Environment_Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Lib/Environment/Field */ "./src/Lib/Environment/Field.ts");
/* harmony import */ var _Lib_Person_PLost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Lib/Person/PLost */ "./src/Lib/Person/PLost.ts");
/* harmony import */ var _Lib_Environment_Way__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Lib/Environment/Way */ "./src/Lib/Environment/Way.ts");
/* harmony import */ var _Lib_Environment_Maze__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Lib/Environment/Maze */ "./src/Lib/Environment/Maze.ts");




class MazeFabric {
    createEnvironment() {
        return new _Lib_Environment_Maze__WEBPACK_IMPORTED_MODULE_3__["default"]();
    }
    createZone(name) {
        return new _Lib_Environment_Field__WEBPACK_IMPORTED_MODULE_0__["default"](name);
    }
    createAccess(start, end) {
        return new _Lib_Environment_Way__WEBPACK_IMPORTED_MODULE_2__["default"](start, end);
    }
    createPerson(energize, health, name) {
        let p = new _Lib_Person_PLost__WEBPACK_IMPORTED_MODULE_1__["default"]();
        p.energize = energize;
        p.health = health;
        p.name = name;
        return p;
    }
}
/* harmony default export */ __webpack_exports__["default"] = (MazeFabric);


/***/ }),

/***/ "./src/program.ts":
/*!************************!*\
  !*** ./src/program.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fab_MazeFabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fab/MazeFabric */ "./src/fab/MazeFabric.ts");

function main() {
    let fab = new _fab_MazeFabric__WEBPACK_IMPORTED_MODULE_0__["default"]();
    let env = fab.createEnvironment();
    env.load(fab);
    env.loadPerson(fab);
    env.run();
}
main();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xpYi9FbnZpcm9ubWVudC9GaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTGliL0Vudmlyb25tZW50L01hemUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xpYi9FbnZpcm9ubWVudC9XYXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xpYi9QZXJzb24vUExvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xpYkFicy9FbnZpcm9ubWVudC9BY2Nlc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xpYkFicy9FbnZpcm9ubWVudC9FbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTGliQWJzL0Vudmlyb25tZW50L1pvbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZhYi9NYXplRmFicmljLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9ncmFtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuRWlEO0FBRWpELFdBQVksU0FBUSxnRUFBSTtJQUNwQixZQUFZLElBQVk7UUFDcEIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lB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QUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsWUFBWSxDQUFDLFFBQWdCLEVBQUUsTUFBYyxFQUFFLElBQVk7UUFDdkQsSUFBSSxDQUFDLEdBQVcsSUFBSSx5REFBSyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxRQUFRO1FBQ3JCLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTTtRQUNqQixDQUFDLENBQUMsSUFBSSxHQUFHLElBQUk7UUFFYixNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztDQUNKO0FBRUQsK0RBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ2dCO0FBRzFDO0lBQ0ksSUFBSSxHQUFHLEdBQVUsSUFBSSx1REFBVSxFQUFFLENBQUM7SUFDbEMsSUFBSSxHQUFHLEdBQWUsR0FBRyxDQUFDLGlCQUFpQixFQUFFO0lBQzdDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2IsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDbkIsR0FBRyxDQUFDLEdBQUcsRUFBRTtBQUNiLENBQUM7QUFFRCxJQUFJLEVBQUUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcHJvZ3JhbS50c1wiKTtcbiIsImltcG9ydCBab25lIGZyb20gXCIuLi8uLi9MaWJBYnMvRW52aXJvbm1lbnQvWm9uZVwiO1xuXG5jbGFzcyBGaWVsZCBleHRlbmRzIFpvbmUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpZWxkO1xuIiwiaW1wb3J0IFBlcnNvbiBmcm9tIFwiLi4vLi4vTGliQWJzL1BlcnNvbi9QZXJzb25cIjtcbmltcG9ydCBGYWJyaWMgZnJvbSBcIi4uLy4uL2ZhYi9GYWJyaWNcIjtcbmltcG9ydCBBY2Nlc3MgZnJvbSBcIi4uLy4uL0xpYkFicy9FbnZpcm9ubWVudC9BY2Nlc3NcIjtcbmltcG9ydCBab25lIGZyb20gXCIuLi8uLi9MaWJBYnMvRW52aXJvbm1lbnQvWm9uZVwiO1xuaW1wb3J0IEVudmlyb25tZW50IGZyb20gXCIuLi8uLi9MaWJBYnMvRW52aXJvbm1lbnQvRW52aXJvbm1lbnRcIjtcblxuY2xhc3MgTWF6ZSBleHRlbmRzIEVudmlyb25tZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBsb2FkKGZhYjogRmFicmljKTogdm9pZCB7XG4gICAgICAgIGxldCBiMTogWm9uZSA9IGZhYi5jcmVhdGVab25lKFwiYjFcIilcbiAgICAgICAgbGV0IGIyOiBab25lID0gZmFiLmNyZWF0ZVpvbmUoXCJiMlwiKVxuICAgICAgICBsZXQgYTE6IEFjY2VzcyA9IGZhYi5jcmVhdGVBY2Nlc3MoYjEsIGIyKTtcbiAgICAgICAgdGhpcy5hZGRab25lKFtiMSwgYjJdKVxuICAgICAgICB0aGlzLmFkZEFjY2VzcyhmYWIsIFthMV0pXG4gICAgfVxuXG4gICAgbG9hZFBlcnNvbihmYWI6IEZhYnJpYyk6IHZvaWQge1xuICAgICAgICBsZXQgcDE6IFBlcnNvbiA9IGZhYi5jcmVhdGVQZXJzb24oMTAsIDIwLCBcImRvZVwiKVxuICAgICAgICB0aGlzLmFkZFBlcnNvbihwMSlcbiAgICB9XG5cblxuICAgIHJ1bigpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NpbXVsYXRpb24nKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF6ZTtcbiIsImltcG9ydCBBY2Nlc3MgZnJvbSBcIi4uLy4uL0xpYkFicy9FbnZpcm9ubWVudC9BY2Nlc3NcIjtcbmltcG9ydCBab25lIGZyb20gXCIuLi8uLi9MaWJBYnMvRW52aXJvbm1lbnQvWm9uZVwiO1xuXG5jbGFzcyBXYXkgZXh0ZW5kcyBBY2Nlc3Mge1xuICAgIGNvbnN0cnVjdG9yKHN0YXJ0OiBab25lLCBlbmQ6IFpvbmUpIHtcbiAgICAgICAgc3VwZXIoc3RhcnQsIGVuZCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXk7XG4iLCJpbXBvcnQgUGVyc29uIGZyb20gXCIuLi8uLi9MaWJBYnMvUGVyc29uL1BlcnNvblwiO1xuXG5jbGFzcyBQTG9zdCBpbXBsZW1lbnRzIFBlcnNvbiB7XG4gICAgZW5lcmdpemU6IG51bWJlcjtcbiAgICBoZWFsdGg6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbmVyZ2l6ZSA9IDBcbiAgICAgICAgdGhpcy5oZWFsdGggPSAwXG4gICAgICAgIHRoaXMubmFtZSA9IFwiXCJcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBMb3N0O1xuIiwiaW1wb3J0IFpvbmUgZnJvbSBcIi4vWm9uZVwiO1xuXG5hYnN0cmFjdCBjbGFzcyBBY2Nlc3Mge1xuICAgIHB1YmxpYyBzdGFydDogWm9uZVxuICAgIHB1YmxpYyBlbmQ6IFpvbmVcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihzdGFydDogWm9uZSwgZW5kOiBab25lKSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydFxuICAgICAgICB0aGlzLmVuZCA9IGVuZFxuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydC5uYW1lICsgXCItPlwiICsgdGhpcy5lbmQubmFtZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjZXNzO1xuIiwiaW1wb3J0IEZhYnJpYyBmcm9tIFwiLi4vLi4vZmFiL0ZhYnJpY1wiO1xuaW1wb3J0IFBlcnNvbiBmcm9tIFwiLi4vUGVyc29uL1BlcnNvblwiO1xuaW1wb3J0IEFjY2VzcyBmcm9tIFwiLi9BY2Nlc3NcIjtcbmltcG9ydCBab25lIGZyb20gXCIuL1pvbmVcIjtcblxuYWJzdHJhY3QgY2xhc3MgRW52aXJvbm1lbnQge1xuICAgIHBlcnNvbkxpc3Q6IFBlcnNvbltdXG4gICAgem9uZUxpc3Q6IFpvbmVbXVxuICAgIGFjY2Vzc0xpc3Q6IEFjY2Vzc1tdXG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGVyc29uTGlzdCA9IFtdXG4gICAgICAgIHRoaXMuem9uZUxpc3QgPSBbXVxuICAgICAgICB0aGlzLmFjY2Vzc0xpc3QgPSBbXVxuICAgIH1cblxuICAgIHB1YmxpYyBhYnN0cmFjdCBydW4oKTogdm9pZDtcbiAgICBwdWJsaWMgYWJzdHJhY3QgbG9hZChmYWI6IEZhYnJpYyk6IHZvaWRcbiAgICBwdWJsaWMgYWJzdHJhY3QgbG9hZFBlcnNvbihmYWI6IEZhYnJpYyk6IHZvaWRcblxuICAgIHB1YmxpYyBhZGRQZXJzb24ocGVyc29uOiBQZXJzb24pIHtcbiAgICAgICAgdGhpcy5wZXJzb25MaXN0LnB1c2gocGVyc29uKVxuICAgICAgICB0aGlzLnpvbmVMaXN0WzBdLmFkZFBlcnNvbihwZXJzb24pXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZFpvbmUoem9uZXM6Wm9uZVtdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHpvbmVzKVxuICAgICAgICB0aGlzLnpvbmVMaXN0ID0gdGhpcy56b25lTGlzdC5jb25jYXQoem9uZXMpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZEFjY2VzcyhmYWI6RmFicmljLCBhY2Nlc3M6QWNjZXNzW10pIHtcbiAgICAgICAgdGhpcy5hY2Nlc3NMaXN0ID0gdGhpcy5hY2Nlc3NMaXN0LmNvbmNhdChhY2Nlc3MpXG4gICAgICAgIC8qKiBAdmFyIEFjY2VzcyBhY2Nlc3MgKi9cbiAgICAgICAgYWNjZXNzLmZvckVhY2goKGFjY2VzczpBY2Nlc3MpID0+IHtcbiAgICAgICAgICAgIGxldCBhY2Nlc3NJbnY6QWNjZXNzID0gZmFiLmNyZWF0ZUFjY2VzcyhhY2Nlc3MuZW5kLCBhY2Nlc3Muc3RhcnQpXG4gICAgICAgICAgICB0aGlzLmFjY2Vzc0xpc3QucHVzaChhY2Nlc3NJbnYpXG4gICAgICAgIH0pXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVudmlyb25tZW50O1xuIiwiaW1wb3J0IFBlcnNvbiBmcm9tIFwiLi4vUGVyc29uL1BlcnNvblwiO1xuaW1wb3J0IEFjY2VzcyBmcm9tIFwiLi9BY2Nlc3NcIjtcblxuYWJzdHJhY3QgY2xhc3MgWm9uZSB7XG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBhY2Nlc3NMaXN0OiBBY2Nlc3NbXVxuICAgIHByb3RlY3RlZCBwZXJzb25MaXN0OiBQZXJzb25bXVxuICAgIHByb3RlY3RlZCBwb3NpdGlvbjogUG9zaXRpb25cblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmFjY2Vzc0xpc3QgPSBbXVxuICAgICAgICB0aGlzLnBlcnNvbkxpc3QgPSBbXVxuICAgIH1cblxuICAgIHB1YmxpYyBhZGRQZXJzb24ocGVyc29uOiBQZXJzb24pIHtcbiAgICAgICAgdGhpcy5wZXJzb25MaXN0LnB1c2gocGVyc29uKVxuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVQZXJzb24ocGVyc29uOiBQZXJzb24pIHtcbiAgICAgICAgdGhpcy5wZXJzb25MaXN0LnNwbGljZSh0aGlzLnBlcnNvbkxpc3QuaW5kZXhPZihwZXJzb24pLCAxKVxuICAgIH1cblxuICAgIHB1YmxpYyBhZGRBY2Nlc3MoYWNjZXNzOiBBY2Nlc3MpIHtcbiAgICAgICAgdGhpcy5hY2Nlc3NMaXN0LnB1c2goYWNjZXNzKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWm9uZTsiLCJpbXBvcnQgRmFicmljIGZyb20gXCIuL0ZhYnJpY1wiO1xuaW1wb3J0IEVudmlyb25tZW50IGZyb20gXCIuLi9MaWJBYnMvRW52aXJvbm1lbnQvRW52aXJvbm1lbnRcIjtcbmltcG9ydCBab25lIGZyb20gXCIuLi9MaWJBYnMvRW52aXJvbm1lbnQvWm9uZVwiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuLi9MaWIvRW52aXJvbm1lbnQvRmllbGRcIjtcbmltcG9ydCBBY2Nlc3MgZnJvbSBcIi4uL0xpYkFicy9FbnZpcm9ubWVudC9BY2Nlc3NcIjtcbmltcG9ydCBQZXJzb24gZnJvbSBcIi4uL0xpYkFicy9QZXJzb24vUGVyc29uXCI7XG5pbXBvcnQgUExvc3QgZnJvbSBcIi4uL0xpYi9QZXJzb24vUExvc3RcIjtcbmltcG9ydCBXYXkgZnJvbSBcIi4uL0xpYi9FbnZpcm9ubWVudC9XYXlcIjtcbmltcG9ydCBNYXplIGZyb20gXCIuLi9MaWIvRW52aXJvbm1lbnQvTWF6ZVwiO1xuXG5jbGFzcyBNYXplRmFicmljIGltcGxlbWVudHMgRmFicmljIHtcbiAgICBjcmVhdGVFbnZpcm9ubWVudCgpOiBFbnZpcm9ubWVudCB7XG4gICAgICAgIHJldHVybiBuZXcgTWF6ZSgpO1xuICAgIH1cblxuICAgIGNyZWF0ZVpvbmUobmFtZTogc3RyaW5nKTogWm9uZSB7XG4gICAgICAgIHJldHVybiBuZXcgRmllbGQobmFtZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQWNjZXNzKHN0YXJ0OiBab25lLCBlbmQ6IFpvbmUpOiBBY2Nlc3Mge1xuICAgICAgICByZXR1cm4gbmV3IFdheShzdGFydCwgZW5kKTtcbiAgICB9XG5cbiAgICBjcmVhdGVQZXJzb24oZW5lcmdpemU6IG51bWJlciwgaGVhbHRoOiBudW1iZXIsIG5hbWU6IHN0cmluZyk6IFBlcnNvbiB7XG4gICAgICAgIGxldCBwOiBQZXJzb24gPSBuZXcgUExvc3QoKTtcbiAgICAgICAgcC5lbmVyZ2l6ZSA9IGVuZXJnaXplXG4gICAgICAgIHAuaGVhbHRoID0gaGVhbHRoXG4gICAgICAgIHAubmFtZSA9IG5hbWVcblxuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hemVGYWJyaWM7XG4iLCJpbXBvcnQgRmFicmljIGZyb20gXCIuL2ZhYi9GYWJyaWNcIjtcbmltcG9ydCBNYXplRmFicmljIGZyb20gXCIuL2ZhYi9NYXplRmFicmljXCI7XG5pbXBvcnQgRW52aXJvbm1lbnQgZnJvbSBcIi4vTGliQWJzL0Vudmlyb25tZW50L0Vudmlyb25tZW50XCI7XG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gICAgbGV0IGZhYjpGYWJyaWMgPSBuZXcgTWF6ZUZhYnJpYygpO1xuICAgIGxldCBlbnY6RW52aXJvbm1lbnQgPSBmYWIuY3JlYXRlRW52aXJvbm1lbnQoKVxuICAgIGVudi5sb2FkKGZhYilcbiAgICBlbnYubG9hZFBlcnNvbihmYWIpXG4gICAgZW52LnJ1bigpXG59XG5cbm1haW4oKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==