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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	MOMENT_CELEBRATORY: "natural",
	MOMENT_PRODUCTIVE: "mechanical",
	SIZE_BASE: 20,
	PROPERTY_MOVE: "move",
	PROPERTY_SCALE: "scale",
	PROPERTY_FADE: "fade",
	PROPERTY_ROTATE: "rotate",
	EASE_IN_OUT: "easeInOut",
	EASE_IN: "easeIn",
	EASE_OUT: "easeOut"
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(8)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = __webpack_require__(4);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCurve = function getCurve() {
	var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
	var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
	var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants2.default.PROPERTY_MOVE;
	var motionMode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _constants2.default.MOMENT_PRODUCTIVE;
	var easing = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _constants2.default.EASE_IN_OUT;

	var _constants$PROPERTY_F, _constants$PROPERTY_M, _;

	var version = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 7;
	var params = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
	return (0, _defineProperty3.default)({}, '7', (_ = {}, (0, _defineProperty3.default)(_, _constants2.default.PROPERTY_FADE, (_constants$PROPERTY_F = {}, (0, _defineProperty3.default)(_constants$PROPERTY_F, _constants2.default.MOMENT_CELEBRATORY, {
		curves: {
			easeInOut: 'cubic-bezier(0.4, 0.14, 0.3, 1)',
			easeIn: 'cubic-bezier(0.4, 0.14, 1, 1)',
			easeOut: 'cubic-bezier(0, 0, 0.3, 1)'
		}
	}), (0, _defineProperty3.default)(_constants$PROPERTY_F, _constants2.default.MOMENT_PRODUCTIVE, {
		curves: {
			easeInOut: 'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
			easeIn: 'cubic-bezier(0.2, 0, 1, 0.9)',
			easeOut: 'cubic-bezier(0, 0, 0.38, 0.9)'
		}
	}), _constants$PROPERTY_F)), (0, _defineProperty3.default)(_, _constants2.default.PROPERTY_MOVE, (_constants$PROPERTY_M = {}, (0, _defineProperty3.default)(_constants$PROPERTY_M, _constants2.default.MOMENT_CELEBRATORY, {
		curves: {
			easeInOut: 'cubic-bezier(0.4, 0.14, 0.3, 1)',
			easeIn: 'cubic-bezier(0.4, 0.14, 1, 1)',
			easeOut: 'cubic-bezier(0, 0, 0.3, 1)'
		}
	}), (0, _defineProperty3.default)(_constants$PROPERTY_M, _constants2.default.MOMENT_PRODUCTIVE, {
		curves: {
			easeInOut: 'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
			easeIn: 'cubic-bezier(0.2, 0.1, 1, 1)',
			easeOut: 'cubic-bezier(0, 0, 0.38, 0.9)'
		}
	}), _constants$PROPERTY_M)), _))['7'][property === _constants2.default.PROPERTY_SCALE || property === _constants2.default.PROPERTY_ROTATE ? _constants2.default.PROPERTY_MOVE : property][motionMode].curves[easing];
};

exports.default = getCurve;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(13);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(20);
var IE8_DOM_DEFINE = __webpack_require__(21);
var toPrimitive = __webpack_require__(23);
var dP = Object.defineProperty;

exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

var _helpers = __webpack_require__(10);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDuration = function getDuration() {
	var _distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

	var _size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

	var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants2.default.PROPERTY_MOVE;
	var motionMode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _constants2.default.MOMENT_PRODUCTIVE;
	var easing = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _constants2.default.EASE_IN_OUT;
	var version = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 7;
	var params = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};


	var distance = parseFloat(_distance);
	var size = parseFloat(_size);
	params.durationMultiplier = params.durationMultiplier || 1;
	params.sizeFactorAdjuster = parseFloat(params.sizeFactorAdjuster || 1);

	var SIZE_BASE = _constants2.default.SIZE_BASE;

	var ret = void 0,
	    sizeFactorNatural = _helpers2.default.getSizeFactor(distance, size, _constants2.default.MOMENT_CELEBRATORY, 1),
	    sizeFactorMechanical = _helpers2.default.getSizeFactor(distance, size, _constants2.default.MOMENT_PRODUCTIVE, 1);

	switch (property) {

		case _constants2.default.PROPERTY_FADE:
			{

				var adjustedSize = size / SIZE_BASE * 100;

				switch (motionMode) {

					case _constants2.default.MOMENT_CELEBRATORY:
						{
							ret = Math.max(0.01 * adjustedSize + 130, 0) * params.durationMultiplier;
							break;
						}

					case _constants2.default.MOMENT_PRODUCTIVE:
						{
							ret = Math.max(0.002 * adjustedSize + 80, 0) * params.durationMultiplier;
							break;
						}
				}
				break;
			}

		case _constants2.default.PROPERTY_ROTATE:
			{

				switch (motionMode) {

					case _constants2.default.MOMENT_CELEBRATORY:
						{
							ret = (24 * Math.sqrt(size * 0.00001526251526) + 9) / 8 * distance * 0.03 + 3;
							break;
						}

					case _constants2.default.MOMENT_PRODUCTIVE:
						{
							ret = (18 * Math.sqrt(size * 0.00001526251526) + 4.7) / 5 * distance * 0.01666666667 + 2;
							break;
						}
				}
				ret = ret / 60 * 1000;
				break;
			}

		case _constants2.default.PROPERTY_MOVE:
		case _constants2.default.PROPERTY_SCALE:
		default:
			{

				switch (motionMode) {

					case _constants2.default.MOMENT_CELEBRATORY:
						{
							ret = Math.max(Math.min(0.1 * distance + 112, 142), distance / (3 * distance + 1200 * sizeFactorNatural) * 1000) * params.durationMultiplier;
							break;
						}

					default:
					case _constants2.default.MOMENT_PRODUCTIVE:
						{
							ret = Math.max(Math.min(0.03 * distance + 95, 140), distance / (5 * distance + 2500 * sizeFactorMechanical) * 1000) * params.durationMultiplier;
							break;
						}
				}
				break;
			}
	}

	return ret;
};

exports.default = getDuration;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getSizeFactor = function getSizeFactor() {
	var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
	var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
	var motionMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants2.default.PRODUCTIVE_MOTION;
	var adjustmentFactor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
	return Math.min(1.5, Math.pow(_constants2.default.SIZE_BASE / size, (motionMode === _constants2.default.PRODUCTIVE_MOTION ? 0.05 : 0.1) * adjustmentFactor || 1));
};

exports.default = {
	getSizeFactor: getSizeFactor
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dist = __webpack_require__(12);

var _dist2 = _interopRequireDefault(_dist);

var _documentReadyPromise = __webpack_require__(26);

var _documentReadyPromise2 = _interopRequireDefault(_documentReadyPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _documentReadyPromise2.default)().then(function () {

	console.log('app.js!');

	window.motion = _dist2.default;
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getCurve = __webpack_require__(3);

var _getCurve2 = _interopRequireDefault(_getCurve);

var _getDuration = __webpack_require__(9);

var _getDuration2 = _interopRequireDefault(_getDuration);

var _getMotion = __webpack_require__(25);

var _getMotion2 = _interopRequireDefault(_getMotion);

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	getCurve: _getCurve2.default,
	getDuration: _getDuration2.default,
	getMotion: _getMotion2.default,
	constants: _constants2.default
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(14), __esModule: true };

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(15);
var $Object = __webpack_require__(6).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(16);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(1), 'Object', { defineProperty: __webpack_require__(7).f });


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(6);
var ctx = __webpack_require__(17);
var hide = __webpack_require__(19);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(18);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var createDesc = __webpack_require__(24);
module.exports = __webpack_require__(1) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(8)(function () {
  return Object.defineProperty(__webpack_require__(22)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
var document = __webpack_require__(5).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(2);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = __webpack_require__(4);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getDuration = __webpack_require__(9);

var _getDuration2 = _interopRequireDefault(_getDuration);

var _getCurve = __webpack_require__(3);

var _getCurve2 = _interopRequireDefault(_getCurve);

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

var _helpers = __webpack_require__(10);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*-----------------------------------------------------
 *	generates motion parameters based on the distance (amount of change) of the motion, and optionally the size of the element.
 *	@param 		{float}		distance - the distance or amount of change in pixels, or percent in the case of fade.
 *	@param 		{float} 	size - the size (area) of the element to be animated, in px^2. 
 							passing 20 will result in the standard speed.
 *	@param 		{string} 	property - ["move"|"scale"|"fade"]. 
 * 	@param 		{int}		version - 6 or 7
 *	@param 		{object} 	params - NOT USED IN THIS VERSION
 *	@returns	{object}	an example return object structure is as follows
							{
								"meta":{
									"version":6,
									"params":{}
								},
								"input":{
									"distance":100
									"size":20
								},
								"natural":{
									"curves":{
										"easeInOut":"cubic-bezier(0.4, 0.14, 0.3, 1)",
										"easeIn":"cubic-bezier(0.4, 0.14, 1, 1)",
										"easeOut":"cubic-bezier(0, 0, 0.3, 1)"
									},
									"speed":1600,
									"duration":80
								},
								"mechanical":{
									"curves":{
										"easeInOut":'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
										"easeIn":'cubic-bezier(0.2, 0, 1, 0.9)',
										"easeOut":'cubic-bezier(0, 0, 0.38, 0.9)'
									},
									"speed":2100,
									"duration":60
								},
								speedUnit:'px/s',
								durationUnit:'ms'
							}
							* passing null for @param:mode will return a slightly different object 
							  that contains motion definitions for all three modes.
 */
var getMotion = function getMotion() {
	var _distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

	var _size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

	var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants2.default.PROPERTY_MOVE;
	var version = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 7;
	var params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

	// console.log('getMotion...', distance, size, property, version, params);

	params.durationMultiplier = params.durationMultiplier || 1;

	var SIZE_BASE = _constants2.default.SIZE_BASE;

	var sizeFactorNatural = _helpers2.default.getSizeFactor(distance, size, _constants2.default.MOMENT_CELEBRATORY, 1),
	    sizeFactorMechanical = _helpers2.default.getSizeFactor(distance, size, _constants2.default.MOMENT_PRODUCTIVE, 1);

	var distance = parseFloat(_distance);
	var size = parseFloat(_size);
	params.sizeFactorAdjuster = parseFloat(params.sizeFactorAdjuster);

	var meta = {
		version: version,
		params: params,
		units: {
			duration: 'ms',
			distance: 'px'
		}
	};

	var input = {
		caller: params.caller || 'none',
		property: property,
		distance: distance,
		size: size,
		sizeFactorAdjuster: params.sizeFactorAdjuster
	};

	var ret = void 0;
	switch (property) {

		case _constants2.default.PROPERTY_FADE:
			{
				var _ret;

				var adjustedSize = size / SIZE_BASE * 100;

				ret = (_ret = {
					meta: meta,
					input: input
				}, (0, _defineProperty3.default)(_ret, _constants2.default.MOMENT_CELEBRATORY, {
					curves: {
						easeInOut: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_CELEBRATORY, _constants2.default.EASE_IN_OUT, version, params),
						easeIn: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_CELEBRATORY, _constants2.default.EASE_IN, version, params),
						easeOut: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_CELEBRATORY, _constants2.default.EASE_OUT, version, params)
					},
					duration: (0, _getDuration2.default)(distance, size, property, _constants2.default.MOMENT_CELEBRATORY, _constants2.default.EASE_IN_OUT, version, params)
				}), (0, _defineProperty3.default)(_ret, _constants2.default.MOMENT_PRODUCTIVE, {
					curves: {
						easeInOut: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_PRODUCTIVE, _constants2.default.EASE_IN_OUT, version, params),
						easeIn: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_PRODUCTIVE, _constants2.default.EASE_IN, version, params),
						easeOut: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_PRODUCTIVE, _constants2.default.EASE_OUT, version, params)
					},
					duration: (0, _getDuration2.default)(distance, size, property, _constants2.default.MOMENT_PRODUCTIVE, _constants2.default.EASE_IN_OUT, version, params)
				}), _ret);
				break;
			}

		case _constants2.default.PROPERTY_ROTATE:
		case _constants2.default.PROPERTY_MOVE:
		case _constants2.default.PROPERTY_SCALE:
		default:
			{
				var _ret2;

				ret = (_ret2 = {
					meta: meta,
					input: input
				}, (0, _defineProperty3.default)(_ret2, _constants2.default.MOMENT_CELEBRATORY, {
					curves: {
						easeInOut: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_CELEBRATORY, _constants2.default.EASE_IN_OUT, version, params),
						easeIn: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_CELEBRATORY, _constants2.default.EASE_IN, version, params),
						easeOut: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_CELEBRATORY, _constants2.default.EASE_OUT, version, params)
					},
					duration: (0, _getDuration2.default)(distance, size, property, _constants2.default.MOMENT_CELEBRATORY, _constants2.default.EASE_IN_OUT, version, params)
				}), (0, _defineProperty3.default)(_ret2, _constants2.default.MOMENT_PRODUCTIVE, {
					curves: {
						easeInOut: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_PRODUCTIVE, _constants2.default.EASE_IN_OUT, version, params),
						easeIn: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_PRODUCTIVE, _constants2.default.EASE_IN, version, params),
						easeOut: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_PRODUCTIVE, _constants2.default.EASE_OUT, version, params)
					},
					duration: (0, _getDuration2.default)(distance, size, property, _constants2.default.MOMENT_PRODUCTIVE, _constants2.default.EASE_IN_OUT, version, params)
				}), _ret2);
				break;
			}
	}

	return ret;
};

exports.default = getMotion;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

(function (document, promise) {
  if (true) module.exports = promise
  else document.ready = promise
})(window.document, function (chainVal) {
  'use strict'

  var d = document,
      w = window,
      loaded = /^loaded|^i|^c/.test(d.readyState),
      DOMContentLoaded = 'DOMContentLoaded',
      load = 'load'

  return new Promise(function (resolve) {
    if (loaded) return resolve(chainVal)

    function onReady () {
      resolve(chainVal)
      d.removeEventListener(DOMContentLoaded, onReady)
      w.removeEventListener(load, onReady)
    }

    d.addEventListener(DOMContentLoaded, onReady)
    w.addEventListener(load, onReady)
  })
})


/***/ })
/******/ ]);