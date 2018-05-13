(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.motion = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _constants$PROPERTY_M, _constants$PROPERTY_S, _constants$PROPERTY_F, _constants$PROPERTY_R, _curves, _distances;

var _constants = require("./constants.js");

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var curves = (_curves = {}, _defineProperty(_curves, _constants2.default.PROPERTY_MOVE, (_constants$PROPERTY_M = {}, _defineProperty(_constants$PROPERTY_M, _constants2.default.MOMENT_EXPRESSIVE, {
	"easeInOut": "cubic-bezier(0.4, 0.14, 0.3, 1)",
	"easeIn": "cubic-bezier(0.4, 0.14, 1, 1)",
	"easeOut": "cubic-bezier(0, 0, 0.3, 1)"
}), _defineProperty(_constants$PROPERTY_M, _constants2.default.MOMENT_PRODUCTIVE, {
	"easeInOut": "cubic-bezier(0.2, 0.2, 0.38, 0.9)",
	"easeIn": "cubic-bezier(0.2, 0, 1, 0.9)",
	"easeOut": "cubic-bezier(0, 0, 0.38, 0.9)"
}), _defineProperty(_constants$PROPERTY_M, _constants2.default.MOMENT_NARRATIVE, {
	"easeInOut": "cubic-bezier(0.29, 0.04, 0.23, 1)",
	"easeIn": "cubic-bezier(0.39, .06, 1, 1)",
	"easeOut": "cubic-bezier(0, 0, 0.3, 1)"
}), _defineProperty(_constants$PROPERTY_M, _constants2.default.MOMENT_CELEBRATORY, {
	"easeInOut": "cubic-bezier(0.29, 0.04, 0.23, 1)",
	"easeIn": "cubic-bezier(0.39, .06, 1, 1)",
	"easeOut": "cubic-bezier(0, 0, 0.3, 1)"
}), _constants$PROPERTY_M)), _defineProperty(_curves, _constants2.default.PROPERTY_SCALE, (_constants$PROPERTY_S = {}, _defineProperty(_constants$PROPERTY_S, _constants2.default.MOMENT_EXPRESSIVE, {
	"easeInOut": "cubic-bezier(0.4, 0.14, 0.3, 1)",
	"easeIn": "cubic-bezier(0.4, 0.14, 1, 1)",
	"easeOut": "cubic-bezier(0, 0, 0.3, 1)"
}), _defineProperty(_constants$PROPERTY_S, _constants2.default.MOMENT_PRODUCTIVE, {
	"easeInOut": "cubic-bezier(0.2, 0.2, 0.38, 0.9)",
	"easeIn": "cubic-bezier(0.2, 0, 1, 0.9)",
	"easeOut": "cubic-bezier(0, 0, 0.38, 0.9)"
}), _defineProperty(_constants$PROPERTY_S, _constants2.default.MOMENT_NARRATIVE, {
	"easeInOut": "cubic-bezier(0.29, 0.04, 0.23, 1)",
	"easeIn": "cubic-bezier(0.39, .06, 1, 1)",
	"easeOut": "cubic-bezier(0, 0, 0.3, 1)"
}), _defineProperty(_constants$PROPERTY_S, _constants2.default.MOMENT_CELEBRATORY, {
	"easeInOut": "cubic-bezier(0.29, 0.04, 0.23, 1)",
	"easeIn": "cubic-bezier(0.39, .06, 1, 1)",
	"easeOut": "cubic-bezier(0, 0, 0.3, 1)"
}), _constants$PROPERTY_S)), _defineProperty(_curves, _constants2.default.PROPERTY_FADE, (_constants$PROPERTY_F = {}, _defineProperty(_constants$PROPERTY_F, _constants2.default.MOMENT_EXPRESSIVE, {
	"easeInOut": "cubic-bezier(0.4, 0.14, 0.3, 1)",
	"easeIn": "cubic-bezier(0.4, 0.14, 1, 1)",
	"easeOut": "cubic-bezier(0, 0, 0.3, 1)"
}), _defineProperty(_constants$PROPERTY_F, _constants2.default.MOMENT_PRODUCTIVE, {
	"easeInOut": "cubic-bezier(0.2, 0.2, 0.38, 0.9)",
	"easeIn": "cubic-bezier(0.2, 0, 1, 0.9)",
	"easeOut": "cubic-bezier(0, 0, 0.38, 0.9)"
}), _defineProperty(_constants$PROPERTY_F, _constants2.default.MOMENT_NARRATIVE, {
	"easeInOut": "cubic-bezier(0.29, 0.04, 0.23, 1)",
	"easeIn": "cubic-bezier(0.39, .06, 1, 1)",
	"easeOut": "cubic-bezier(0, 0, 0.3, 1)"
}), _defineProperty(_constants$PROPERTY_F, _constants2.default.MOMENT_CELEBRATORY, {
	"easeInOut": "cubic-bezier(0.29, 0.04, 0.23, 1)",
	"easeIn": "cubic-bezier(0.39, .06, 1, 1)",
	"easeOut": "cubic-bezier(0, 0, 0.3, 1)"
}), _constants$PROPERTY_F)), _defineProperty(_curves, _constants2.default.PROPERTY_ROTATE, (_constants$PROPERTY_R = {}, _defineProperty(_constants$PROPERTY_R, _constants2.default.MOMENT_EXPRESSIVE, {
	"easeInOut": "cubic-bezier(0.4, 0.14, 0.3, 1)",
	"easeIn": "cubic-bezier(0.4, 0.14, 1, 1)",
	"easeOut": "cubic-bezier(0, 0, 0.3, 1)"
}), _defineProperty(_constants$PROPERTY_R, _constants2.default.MOMENT_PRODUCTIVE, {
	"easeInOut": "cubic-bezier(0.2, 0.2, 0.38, 0.9)",
	"easeIn": "cubic-bezier(0.2, 0, 1, 0.9)",
	"easeOut": "cubic-bezier(0, 0, 0.38, 0.9)"
}), _defineProperty(_constants$PROPERTY_R, _constants2.default.MOMENT_NARRATIVE, {
	"easeInOut": "cubic-bezier(0.29, 0.04, 0.23, 1)",
	"easeIn": "cubic-bezier(0.39, .06, 1, 1)",
	"easeOut": "cubic-bezier(0, 0, 0.3, 1)"
}), _defineProperty(_constants$PROPERTY_R, _constants2.default.MOMENT_CELEBRATORY, {
	"easeInOut": "cubic-bezier(0.29, 0.04, 0.23, 1)",
	"easeIn": "cubic-bezier(0.39, .06, 1, 1)",
	"easeOut": "cubic-bezier(0, 0, 0.3, 1)"
}), _constants$PROPERTY_R)), _curves);

var motionModes = [_constants2.default.MOMENT_EXPRESSIVE, _constants2.default.MOMENT_PRODUCTIVE, _constants2.default.MOMENT_NARRATIVE, _constants2.default.MOMENT_CELEBRATORY];

var distances = (_distances = {}, _defineProperty(_distances, _constants2.default.PROPERTY_MOVE, [10, 25, 50, 75, 100, 200, 400, 800, 1600, 3200]), _defineProperty(_distances, _constants2.default.PROPERTY_SCALE, [100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600, 51200, 102400, 204800]), _defineProperty(_distances, _constants2.default.PROPERTY_FADE, [25, 50, 75, 100]), _defineProperty(_distances, _constants2.default.PROPERTY_ROTATE, [30, 60, 90, 120, 150, 180, 270, 360]), _distances);

var sizes = '123456789'.split('').reduce(function (prev, curr, i) {
	return [].concat(_toConsumableArray(prev), [prev[prev.length - 1] * 4]);
}, [8 * 8]);

module.exports = {
	curves: curves, distances: distances, sizes: sizes, motionModes: motionModes
};

},{"./constants.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	MOMENT_EXPRESSIVE: "expr",
	MOMENT_PRODUCTIVE: "prod",
	MOMENT_NARRATIVE: "narr",
	MOMENT_CELEBRATORY: "celeb",
	SIZE_BASE: 20,
	PROPERTY_MOVE: "move",
	PROPERTY_SCALE: "scale",
	PROPERTY_FADE: "fade",
	PROPERTY_ROTATE: "rotate",
	EASE_IN_OUT: "easeInOut",
	EASE_IN: "easeIn",
	EASE_OUT: "easeOut"
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _configConstants = require('./config-constants.js');

var _configConstants2 = _interopRequireDefault(_configConstants);

var _constants = require('./constants.js');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCurve = function getCurve() {
	var _distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

	var _size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;

	var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants2.default.PROPERTY_MOVE;
	var motionMode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _constants2.default.MOMENT_PRODUCTIVE;
	var easing = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _constants2.default.EASE_IN_OUT;
	var unit = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'rem';
	var remSize = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 16;

	return _configConstants2.default.curves[property][motionMode][easing];
};

exports.default = getCurve;

},{"./config-constants.js":1,"./constants.js":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

var _helpers = require('./helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDuration = function getDuration() {
	var _distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

	var _size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;

	var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants2.default.PROPERTY_MOVE;
	var motionMode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _constants2.default.MOMENT_PRODUCTIVE;
	var easing = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _constants2.default.EASE_IN_OUT;
	var unit = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'rem';
	var remSize = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 16;


	if (unit === 'rem') {
		if (property === _constants2.default.PROPERTY_MOVE || property === _constants2.default.PROPERTY_SCALE) _distance *= remSize;
		_size *= remSize * remSize;
	}

	var distance = Math.max(10, parseFloat(_distance));
	var size = Math.max(unit === 'rem' ? 1 : 16, parseFloat(_size));

	var SIZE_BASE = _constants2.default.SIZE_BASE;

	var ret = void 0,
	    sizeFactorNatural = _helpers2.default.getSizeFactor(distance, size, _constants2.default.MOMENT_EXPRESSIVE, 1),
	    sizeFactorMechanical = _helpers2.default.getSizeFactor(distance, size, _constants2.default.MOMENT_PRODUCTIVE, 1);

	switch (property) {

		case _constants2.default.PROPERTY_FADE:
			{

				var SIZE1 = 48 * 48;
				var SIZE2 = 400 * 400;

				switch (motionMode) {

					case _constants2.default.MOMENT_CELEBRATORY:
						{

							var DUR1 = 310;
							var DUR2 = 438;

							var SLOPE = (DUR2 - DUR1) / (SIZE2 - SIZE1);
							var DISPLACEMENT = DUR1 - SLOPE * SIZE1;

							ret = Math.max(310, SLOPE * size + DISPLACEMENT);
							break;
						}

					case _constants2.default.MOMENT_NARRATIVE:
						{

							var _DUR = 228;
							var _DUR2 = 344;

							var _SLOPE = (_DUR2 - _DUR) / (SIZE2 - SIZE1);
							var _DISPLACEMENT = _DUR - _SLOPE * SIZE1;

							ret = Math.max(230, _SLOPE * size + _DISPLACEMENT);
							break;
						}

					case _constants2.default.MOMENT_EXPRESSIVE:
						{

							var _DUR3 = 146;
							var _DUR4 = 240;

							var _SLOPE2 = (_DUR4 - _DUR3) / (SIZE2 - SIZE1);
							var _DISPLACEMENT2 = _DUR3 - _SLOPE2 * SIZE1;

							ret = Math.max(150, _SLOPE2 * size + _DISPLACEMENT2);

							break;
						}

					default:
					case _constants2.default.MOMENT_PRODUCTIVE:
						{

							var _DUR5 = 108;
							var _DUR6 = 160;

							var _SLOPE3 = (_DUR6 - _DUR5) / (SIZE2 - SIZE1);
							var _DISPLACEMENT3 = _DUR5 - _SLOPE3 * SIZE1;

							ret = Math.max(110, _SLOPE3 * size + _DISPLACEMENT3);

							break;
						}
				}
				ret = ret / 100 * distance;
				console.log('fade:ret===' + ret);
				break;
			}

		case _constants2.default.PROPERTY_ROTATE:
			{

				var _SIZE = 16 * 10;
				var _SIZE2 = 400 * 400;

				switch (motionMode) {

					case _constants2.default.MOMENT_CELEBRATORY:
						{

							var _DUR7 = 360;
							var _DUR8 = 480;

							var _SLOPE4 = (_DUR8 - _DUR7) / (_SIZE2 - _SIZE);
							var _DISPLACEMENT4 = _DUR7 - _SLOPE4 * _SIZE;

							ret = _SLOPE4 * size + _DISPLACEMENT4;
							break;
						}

					case _constants2.default.MOMENT_NARRATIVE:
						{

							var _DUR9 = 268;
							var _DUR10 = 394;

							var _SLOPE5 = (_DUR10 - _DUR9) / (_SIZE2 - _SIZE);
							var _DISPLACEMENT5 = _DUR9 - _SLOPE5 * _SIZE;

							ret = _SLOPE5 * size + _DISPLACEMENT5;
							break;
						}

					case _constants2.default.MOMENT_EXPRESSIVE:
						{

							var _DUR11 = 188;
							var _DUR12 = 280;

							var _SLOPE6 = (_DUR12 - _DUR11) / (_SIZE2 - _SIZE);
							var _DISPLACEMENT6 = _DUR11 - _SLOPE6 * _SIZE;

							ret = _SLOPE6 * size + _DISPLACEMENT6;

							break;
						}

					default:
					case _constants2.default.MOMENT_PRODUCTIVE:
						{

							var _DUR13 = 128;
							var _DUR14 = 190;

							var _SLOPE7 = (_DUR14 - _DUR13) / (_SIZE2 - _SIZE);
							var _DISPLACEMENT7 = _DUR13 - _SLOPE7 * _SIZE;

							ret = _SLOPE7 * size + _DISPLACEMENT7;

							break;
						}
				}
				ret = ret / 180 * distance;
				break;
			}

		case _constants2.default.PROPERTY_SCALE:
			{

				var AREA_DELTA_1 = 100 * 200 - 100 * 100;
				var AREA_DELTA_2 = 400 * 400 - 100 * 100;

				switch (motionMode) {

					case _constants2.default.MOMENT_CELEBRATORY:
						{

							var _DUR15 = 268;
							var _DUR16 = 392;

							var _SLOPE8 = (_DUR16 - _DUR15) / (AREA_DELTA_2 - AREA_DELTA_1);
							var _DISPLACEMENT8 = _DUR15 - _SLOPE8 * AREA_DELTA_1;

							ret = _SLOPE8 * size + _DISPLACEMENT8;
							break;
						}

					case _constants2.default.MOMENT_NARRATIVE:
						{

							var _DUR17 = 208;
							var _DUR18 = 260;

							var _SLOPE9 = (_DUR18 - _DUR17) / (AREA_DELTA_2 - AREA_DELTA_1);
							var _DISPLACEMENT9 = _DUR17 - _SLOPE9 * AREA_DELTA_1;

							ret = _SLOPE9 * size + _DISPLACEMENT9;
							break;
						}

					case _constants2.default.MOMENT_EXPRESSIVE:
						{

							var _DUR19 = 128;
							var _DUR20 = 168;

							var _SLOPE10 = (_DUR20 - _DUR19) / (AREA_DELTA_2 - AREA_DELTA_1);
							var _DISPLACEMENT10 = _DUR19 - _SLOPE10 * AREA_DELTA_1;

							ret = _SLOPE10 * size + _DISPLACEMENT10;

							break;
						}

					default:
					case _constants2.default.MOMENT_PRODUCTIVE:
						{

							var _DUR21 = 94;
							var _DUR22 = 143;

							var _SLOPE11 = (_DUR22 - _DUR21) / (AREA_DELTA_2 - AREA_DELTA_1);
							var _DISPLACEMENT11 = _DUR21 - _SLOPE11 * AREA_DELTA_1;

							ret = _SLOPE11 * size + _DISPLACEMENT11;

							break;
						}
				}
				break;
			}

		case _constants2.default.PROPERTY_MOVE:
		default:
			{

				var DISTANCE1 = 100;
				var DISTANCE2 = 1400;

				var SIZE_DUR1 = 200;
				var SIZE_DUR2 = 208;
				var SIZE_DISTANCE1 = 100 * 100;
				var SIZE_DISTANCE2 = 400 * 400;
				var SIZE_SLOPE = (SIZE_DUR2 - SIZE_DUR1) / (SIZE_DISTANCE2 - SIZE_DISTANCE1) / SIZE_DUR1;
				var SIZE_DISPLACEMENT = (SIZE_DUR2 - SIZE_DISTANCE2 * SIZE_SLOPE) / SIZE_DUR1;

				switch (motionMode) {

					case _constants2.default.MOMENT_CELEBRATORY:
						{

							var _DUR23 = 276;
							var _DUR24 = 466;

							var _SLOPE12 = (_DUR24 - _DUR23) / (DISTANCE2 - DISTANCE1);
							var _DISPLACEMENT12 = _DUR23 - _SLOPE12 * DISTANCE1;

							ret = _SLOPE12 * distance + _DISPLACEMENT12;
							ret = ret * (size * SIZE_SLOPE + SIZE_DISPLACEMENT);
							break;
						}

					case _constants2.default.MOMENT_NARRATIVE:
						{

							var _DUR25 = 201;
							var _DUR26 = 369;

							var _SLOPE13 = (_DUR26 - _DUR25) / (DISTANCE2 - DISTANCE1);
							var _DISPLACEMENT13 = _DUR25 - _SLOPE13 * DISTANCE1;

							ret = _SLOPE13 * distance + _DISPLACEMENT13;
							ret = ret * (size * SIZE_SLOPE + SIZE_DISPLACEMENT);
							break;
						}

					case _constants2.default.MOMENT_EXPRESSIVE:
						{

							var _DUR27 = 128;
							var _DUR28 = 268;

							var _SLOPE14 = (_DUR28 - _DUR27) / (DISTANCE2 - DISTANCE1);
							var _DISPLACEMENT14 = _DUR27 - _SLOPE14 * DISTANCE1;

							ret = _SLOPE14 * distance + _DISPLACEMENT14;
							ret = ret * (size * SIZE_SLOPE + SIZE_DISPLACEMENT);

							break;
						}

					default:
					case _constants2.default.MOMENT_PRODUCTIVE:
						{

							var _DUR29 = 90;
							var _DUR30 = 190;

							var _SLOPE15 = (_DUR30 - _DUR29) / (DISTANCE2 - DISTANCE1);
							var _DISPLACEMENT15 = _DUR29 - _SLOPE15 * DISTANCE1;

							ret = _SLOPE15 * distance + _DISPLACEMENT15;
							ret = ret * (size * SIZE_SLOPE + SIZE_DISPLACEMENT);
							break;
						}
				}
				break;
			}
	}

	return ret;
};

exports.default = getDuration;

},{"./constants":2,"./helpers":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = require('./constants.js');

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

},{"./constants.js":2}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getCurve = require("./getCurve.js");

var _getCurve2 = _interopRequireDefault(_getCurve);

var _getDuration = require("./getDuration.js");

var _getDuration2 = _interopRequireDefault(_getDuration);

var _constants = require("./constants.js");

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ret = {
	getCurve: _getCurve2.default,
	getDuration: _getDuration2.default,
	constants: _constants2.default
};

exports.default = ret;

},{"./constants.js":2,"./getCurve.js":3,"./getDuration.js":4}]},{},[6])(6)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29uZmlnLWNvbnN0YW50cy5qcyIsInNyYy9jb25zdGFudHMuanMiLCJzcmMvZ2V0Q3VydmUuanMiLCJzcmMvZ2V0RHVyYXRpb24uanMiLCJzcmMvaGVscGVycy5qcyIsInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7O0FBRUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNLGlEQUNKLG9CQUFVLGFBRE4sc0VBRUgsb0JBQVUsaUJBRlAsRUFFMEI7QUFDN0IsY0FBWSxpQ0FEaUI7QUFFN0IsV0FBUywrQkFGb0I7QUFHN0IsWUFBVTtBQUhtQixDQUYxQiwwQ0FPSCxvQkFBVSxpQkFQUCxFQU8wQjtBQUM3QixjQUFZLG1DQURpQjtBQUU3QixXQUFTLDhCQUZvQjtBQUc3QixZQUFVO0FBSG1CLENBUDFCLDBDQVlILG9CQUFVLGdCQVpQLEVBWXlCO0FBQzVCLGNBQVksbUNBRGdCO0FBRTVCLFdBQVMsK0JBRm1CO0FBRzVCLFlBQVU7QUFIa0IsQ0FaekIsMENBaUJILG9CQUFVLGtCQWpCUCxFQWlCMkI7QUFDOUIsY0FBWSxtQ0FEa0I7QUFFOUIsV0FBUywrQkFGcUI7QUFHOUIsWUFBVTtBQUhvQixDQWpCM0IscURBdUJKLG9CQUFVLGNBdkJOLHNFQXdCSCxvQkFBVSxpQkF4QlAsRUF3QjBCO0FBQzdCLGNBQVksaUNBRGlCO0FBRTdCLFdBQVMsK0JBRm9CO0FBRzdCLFlBQVU7QUFIbUIsQ0F4QjFCLDBDQTZCSCxvQkFBVSxpQkE3QlAsRUE2QjBCO0FBQzdCLGNBQVksbUNBRGlCO0FBRTdCLFdBQVMsOEJBRm9CO0FBRzdCLFlBQVU7QUFIbUIsQ0E3QjFCLDBDQWtDSCxvQkFBVSxnQkFsQ1AsRUFrQ3lCO0FBQzVCLGNBQVksbUNBRGdCO0FBRTVCLFdBQVMsK0JBRm1CO0FBRzVCLFlBQVU7QUFIa0IsQ0FsQ3pCLDBDQXVDSCxvQkFBVSxrQkF2Q1AsRUF1QzJC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LGVBQXpCO0FBQ0EsYUFBTSxPQUFPLE9BQU8sVUFBUCxHQUFvQixpQkFBM0IsQ0FBTjtBQUNBO0FBQ0E7QUF0REY7QUF3REE7QUFDQTtBQTlRRjs7QUFpUkEsUUFBTyxHQUFQO0FBQ0EsQ0E3U0Q7O2tCQStTZSxXOzs7Ozs7Ozs7QUNsVGY7Ozs7OztBQUVBLElBQU0sZ0JBQWdCLFNBQWhCLGFBQWdCO0FBQUEsS0FDckIsUUFEcUIsdUVBQ1YsR0FEVTtBQUFBLEtBRXJCLElBRnFCLHVFQUVkLEVBRmM7QUFBQSxLQUdyQixVQUhxQix1RUFHUixvQkFBVSxpQkFIRjtBQUFBLEtBSXJCLGdCQUpxQix1RUFJRixDQUpFO0FBQUEsUUFLakIsS0FBSyxHQUFMLENBQ0gsR0FERyxFQUVILEtBQUssR0FBTCxDQUNDLG9CQUFVLFNBQVYsR0FBcUIsSUFEdEIsRUFFQyxDQUFDLGVBQWUsb0JBQVUsaUJBQXpCLEdBQTZDLElBQTdDLEdBQW9ELEdBQXJELElBQTJELGdCQUEzRCxJQUErRSxDQUZoRixDQUZHLENBTGlCO0FBQUEsQ0FBdEI7O2tCQWNlO0FBQ2Q7QUFEYyxDOzs7Ozs7Ozs7QUNoQmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLE1BQU07QUFDWCxXQUFTLGtCQURFO0FBRVgsY0FBWSxxQkFGRDtBQUdYLFlBQVU7QUFIQyxDQUFaOztrQkFNZSxHIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMuanMnO1xuXG5jb25zdCBjdXJ2ZXMgPSB7XG5cdFtjb25zdGFudHMuUFJPUEVSVFlfTU9WRV06e1xuXHRcdFtjb25zdGFudHMuTU9NRU5UX0VYUFJFU1NJVkVdOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC40LCAwLjE0LCAwLjMsIDEpXCIsXG5cdFx0XHRcImVhc2VJblwiOlwiY3ViaWMtYmV6aWVyKDAuNCwgMC4xNCwgMSwgMSlcIixcblx0XHRcdFwiZWFzZU91dFwiOlwiY3ViaWMtYmV6aWVyKDAsIDAsIDAuMywgMSlcIixcblx0XHR9LFxuXHRcdFtjb25zdGFudHMuTU9NRU5UX1BST0RVQ1RJVkVdOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC4yLCAwLjIsIDAuMzgsIDAuOSlcIixcblx0XHRcdFwiZWFzZUluXCI6XCJjdWJpYy1iZXppZXIoMC4yLCAwLCAxLCAwLjkpXCIsXG5cdFx0XHRcImVhc2VPdXRcIjpcImN1YmljLWJlemllcigwLCAwLCAwLjM4LCAwLjkpXCIsXG5cdFx0fSxcblx0XHRbY29uc3RhbnRzLk1PTUVOVF9OQVJSQVRJVkVdOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC4yOSwgMC4wNCwgMC4yMywgMSlcIixcblx0XHRcdFwiZWFzZUluXCI6XCJjdWJpYy1iZXppZXIoMC4zOSwgLjA2LCAxLCAxKVwiLFxuXHRcdFx0XCJlYXNlT3V0XCI6XCJjdWJpYy1iZXppZXIoMCwgMCwgMC4zLCAxKVwiLFxuXHRcdH0sXG5cdFx0W2NvbnN0YW50cy5NT01FTlRfQ0VMRUJSQVRPUlldOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC4yOSwgMC4wNCwgMC4yMywgMSlcIixcblx0XHRcdFwiZWFzZUluXCI6XCJjdWJpYy1iZXppZXIoMC4zOSwgLjA2LCAxLCAxKVwiLFxuXHRcdFx0XCJlYXNlT3V0XCI6XCJjdWJpYy1iZXppZXIoMCwgMCwgMC4zLCAxKVwiLFxuXHRcdH1cblx0fSxcblx0W2NvbnN0YW50cy5QUk9QRVJUWV9TQ0FMRV06e1xuXHRcdFtjb25zdGFudHMuTU9NRU5UX0VYUFJFU1NJVkVdOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC40LCAwLjE0LCAwLjMsIDEpXCIsXG5cdFx0XHRcImVhc2VJblwiOlwiY3ViaWMtYmV6aWVyKDAuNCwgMC4xNCwgMSwgMSlcIixcblx0XHRcdFwiZWFzZU91dFwiOlwiY3ViaWMtYmV6aWVyKDAsIDAsIDAuMywgMSlcIixcblx0XHR9LFxuXHRcdFtjb25zdGFudHMuTU9NRU5UX1BST0RVQ1RJVkVdOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC4yLCAwLjIsIDAuMzgsIDAuOSlcIixcblx0XHRcdFwiZWFzZUluXCI6XCJjdWJpYy1iZXppZXIoMC4yLCAwLCAxLCAwLjkpXCIsXG5cdFx0XHRcImVhc2VPdXRcIjpcImN1YmljLWJlemllcigwLCAwLCAwLjM4LCAwLjkpXCIsXG5cdFx0fSxcblx0XHRbY29uc3RhbnRzLk1PTUVOVF9OQVJSQVRJVkVdOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC4yOSwgMC4wNCwgMC4yMywgMSlcIixcblx0XHRcdFwiZWFzZUluXCI6XCJjdWJpYy1iZXppZXIoMC4zOSwgLjA2LCAxLCAxKVwiLFxuXHRcdFx0XCJlYXNlT3V0XCI6XCJjdWJpYy1iZXppZXIoMCwgMCwgMC4zLCAxKVwiLFxuXHRcdH0sXG5cdFx0W2NvbnN0YW50cy5NT01FTlRfQ0VMRUJSQVRPUlldOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC4yOSwgMC4wNCwgMC4yMywgMSlcIixcblx0XHRcdFwiZWFzZUluXCI6XCJjdWJpYy1iZXppZXIoMC4zOSwgLjA2LCAxLCAxKVwiLFxuXHRcdFx0XCJlYXNlT3V0XCI6XCJjdWJpYy1iZXppZXIoMCwgMCwgMC4zLCAxKVwiLFxuXHRcdH1cblx0fSxcblx0W2NvbnN0YW50cy5QUk9QRVJUWV9GQURFXTp7XG5cdFx0W2NvbnN0YW50cy5NT01FTlRfRVhQUkVTU0lWRV06e1xuXHRcdFx0XCJlYXNlSW5PdXRcIjpcImN1YmljLWJlemllcigwLjQsIDAuMTQsIDAuMywgMSlcIixcblx0XHRcdFwiZWFzZUluXCI6XCJjdWJpYy1iZXppZXIoMC40LCAwLjE0LCAxLCAxKVwiLFxuXHRcdFx0XCJlYXNlT3V0XCI6XCJjdWJpYy1iZXppZXIoMCwgMCwgMC4zLCAxKVwiLFxuXHRcdH0sXG5cdFx0W2NvbnN0YW50cy5NT01FTlRfUFJPRFVDVElWRV06e1xuXHRcdFx0XCJlYXNlSW5PdXRcIjpcImN1YmljLWJlemllcigwLjIsIDAuMiwgMC4zOCwgMC45KVwiLFxuXHRcdFx0XCJlYXNlSW5cIjpcImN1YmljLWJlemllcigwLjIsIDAsIDEsIDAuOSlcIixcblx0XHRcdFwiZWFzZU91dFwiOlwiY3ViaWMtYmV6aWVyKDAsIDAsIDAuMzgsIDAuOSlcIixcblx0XHR9LFxuXHRcdFtjb25zdGFudHMuTU9NRU5UX05BUlJBVElWRV06e1xuXHRcdFx0XCJlYXNlSW5PdXRcIjpcImN1YmljLWJlemllcigwLjI5LCAwLjA0LCAwLjIzLCAxKVwiLFxuXHRcdFx0XCJlYXNlSW5cIjpcImN1YmljLWJlemllcigwLjM5LCAuMDYsIDEsIDEpXCIsXG5cdFx0XHRcImVhc2VPdXRcIjpcImN1YmljLWJlemllcigwLCAwLCAwLjMsIDEpXCIsXG5cdFx0fSxcblx0XHRbY29uc3RhbnRzLk1PTUVOVF9DRUxFQlJBVE9SWV06e1xuXHRcdFx0XCJlYXNlSW5PdXRcIjpcImN1YmljLWJlemllcigwLjI5LCAwLjA0LCAwLjIzLCAxKVwiLFxuXHRcdFx0XCJlYXNlSW5cIjpcImN1YmljLWJlemllcigwLjM5LCAuMDYsIDEsIDEpXCIsXG5cdFx0XHRcImVhc2VPdXRcIjpcImN1YmljLWJlemllcigwLCAwLCAwLjMsIDEpXCIsXG5cdFx0fVxuXHR9LFxuXHRbY29uc3RhbnRzLlBST1BFUlRZX1JPVEFURV06e1xuXHRcdFtjb25zdGFudHMuTU9NRU5UX0VYUFJFU1NJVkVdOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC40LCAwLjE0LCAwLjMsIDEpXCIsXG5cdFx0XHRcImVhc2VJblwiOlwiY3ViaWMtYmV6aWVyKDAuNCwgMC4xNCwgMSwgMSlcIixcblx0XHRcdFwiZWFzZU91dFwiOlwiY3ViaWMtYmV6aWVyKDAsIDAsIDAuMywgMSlcIixcblx0XHR9LFxuXHRcdFtjb25zdGFudHMuTU9NRU5UX1BST0RVQ1RJVkVdOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC4yLCAwLjIsIDAuMzgsIDAuOSlcIixcblx0XHRcdFwiZWFzZUluXCI6XCJjdWJpYy1iZXppZXIoMC4yLCAwLCAxLCAwLjkpXCIsXG5cdFx0XHRcImVhc2VPdXRcIjpcImN1YmljLWJlemllcigwLCAwLCAwLjM4LCAwLjkpXCIsXG5cdFx0fSxcblx0XHRbY29uc3RhbnRzLk1PTUVOVF9OQVJSQVRJVkVdOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC4yOSwgMC4wNCwgMC4yMywgMSlcIixcblx0XHRcdFwiZWFzZUluXCI6XCJjdWJpYy1iZXppZXIoMC4zOSwgLjA2LCAxLCAxKVwiLFxuXHRcdFx0XCJlYXNlT3V0XCI6XCJjdWJpYy1iZXppZXIoMCwgMCwgMC4zLCAxKVwiLFxuXHRcdH0sXG5cdFx0W2NvbnN0YW50cy5NT01FTlRfQ0VMRUJSQVRPUlldOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC4yOSwgMC4wNCwgMC4yMywgMSlcIixcblx0XHRcdFwiZWFzZUluXCI6XCJjdWJpYy1iZXppZXIoMC4zOSwgLjA2LCAxLCAxKVwiLFxuXHRcdFx0XCJlYXNlT3V0XCI6XCJjdWJpYy1iZXppZXIoMCwgMCwgMC4zLCAxKVwiLFxuXHRcdH1cblx0fVxufTtcblxuY29uc3QgbW90aW9uTW9kZXMgPSBbY29uc3RhbnRzLk1PTUVOVF9FWFBSRVNTSVZFLCBjb25zdGFudHMuTU9NRU5UX1BST0RVQ1RJVkUsIGNvbnN0YW50cy5NT01FTlRfTkFSUkFUSVZFLCBjb25zdGFudHMuTU9NRU5UX0NFTEVCUkFUT1JZXTtcblxuY29uc3QgZGlzdGFuY2VzID0ge1xuXHRbY29uc3RhbnRzLlBST1BFUlRZX01PVkVdOlsxMCwgMjUsIDUwLCA3NSwgMTAwLCAyMDAsIDQwMCwgODAwLCAxNjAwLCAzMjAwXSxcblx0W2NvbnN0YW50cy5QUk9QRVJUWV9TQ0FMRV06WzEwMCwgMjAwLCA0MDAsIDgwMCwgMTYwMCwgMzIwMCwgNjQwMCwgMTI4MDAsIDI1NjAwLCA1MTIwMCwgMTAyNDAwLCAyMDQ4MDBdLFxuXHRbY29uc3RhbnRzLlBST1BFUlRZX0ZBREVdOlsyNSwgNTAsIDc1LCAxMDBdLFxuXHRbY29uc3RhbnRzLlBST1BFUlRZX1JPVEFURV06WzMwLCA2MCwgOTAsIDEyMCwgMTUwLCAxODAsIDI3MCwgMzYwXVxufTtcblxuY29uc3Qgc2l6ZXMgPSAnMTIzNDU2Nzg5Jy5zcGxpdCgnJykucmVkdWNlKCAocHJldiwgY3VyciwgaSkgPT4gWy4uLnByZXYsIHByZXZbcHJldi5sZW5ndGgtMV0gKiA0XSwgWzgqOF0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Y3VydmVzLCBkaXN0YW5jZXMsIHNpemVzLCBtb3Rpb25Nb2Rlc1xufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRNT01FTlRfRVhQUkVTU0lWRTpcImV4cHJcIixcblx0TU9NRU5UX1BST0RVQ1RJVkU6XCJwcm9kXCIsXG5cdE1PTUVOVF9OQVJSQVRJVkU6XCJuYXJyXCIsXG5cdE1PTUVOVF9DRUxFQlJBVE9SWTpcImNlbGViXCIsXG5cdFNJWkVfQkFTRToyMCxcblx0UFJPUEVSVFlfTU9WRTpcIm1vdmVcIixcblx0UFJPUEVSVFlfU0NBTEU6XCJzY2FsZVwiLFxuXHRQUk9QRVJUWV9GQURFOlwiZmFkZVwiLFxuXHRQUk9QRVJUWV9ST1RBVEU6XCJyb3RhdGVcIixcblx0RUFTRV9JTl9PVVQ6XCJlYXNlSW5PdXRcIixcblx0RUFTRV9JTjpcImVhc2VJblwiLFxuXHRFQVNFX09VVDpcImVhc2VPdXRcIlxufSIsImltcG9ydCBjb25maWdDb25zdG5hdHMgZnJvbSAnLi9jb25maWctY29uc3RhbnRzLmpzJztcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMuanMnO1xuXG5jb25zdCBnZXRDdXJ2ZSA9IFxuXHQoXG5cdFx0X2Rpc3RhbmNlID0gMTAwLCBcblx0XHRfc2l6ZSA9IDE2LCBcblx0XHRwcm9wZXJ0eSA9IGNvbnN0YW50cy5QUk9QRVJUWV9NT1ZFLCBcblx0XHRtb3Rpb25Nb2RlID0gY29uc3RhbnRzLk1PTUVOVF9QUk9EVUNUSVZFLCBcblx0XHRlYXNpbmcgPSBjb25zdGFudHMuRUFTRV9JTl9PVVQsIFxuXHRcdHVuaXQgPSAncmVtJywgcmVtU2l6ZSA9IDE2LFxuXHQpID0+IHtcblx0XHRyZXR1cm4gY29uZmlnQ29uc3RuYXRzLmN1cnZlc1twcm9wZXJ0eV1bbW90aW9uTW9kZV1bZWFzaW5nXVxuXHR9XG47XG5cbmV4cG9ydCBkZWZhdWx0IGdldEN1cnZlO1xuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4vaGVscGVycyc7XG5cbmNvbnN0IGdldER1cmF0aW9uID0gKFxuXHRfZGlzdGFuY2UgPSAxMDAsIFxuXHRfc2l6ZSA9IDE2LCBcblx0cHJvcGVydHkgPSBjb25zdGFudHMuUFJPUEVSVFlfTU9WRSwgXG5cdG1vdGlvbk1vZGUgPSBjb25zdGFudHMuTU9NRU5UX1BST0RVQ1RJVkUsIFxuXHRlYXNpbmcgPSBjb25zdGFudHMuRUFTRV9JTl9PVVQsIFxuXHR1bml0ID0gJ3JlbScsIHJlbVNpemUgPSAxNixcbikgPT4ge1xuXG5cdGlmKHVuaXQgPT09ICdyZW0nKXtcblx0XHRpZihwcm9wZXJ0eSA9PT0gY29uc3RhbnRzLlBST1BFUlRZX01PVkUgfHwgcHJvcGVydHkgPT09IGNvbnN0YW50cy5QUk9QRVJUWV9TQ0FMRSkgX2Rpc3RhbmNlICo9IHJlbVNpemU7XG5cdFx0X3NpemUgKj0gKHJlbVNpemUgKiByZW1TaXplKTtcblx0fVxuXG5cdGxldCBkaXN0YW5jZSA9IE1hdGgubWF4KDEwLCBwYXJzZUZsb2F0KF9kaXN0YW5jZSkpO1xuXHRsZXQgc2l6ZSA9IE1hdGgubWF4KHVuaXQgPT09ICdyZW0nID8gMSA6IDE2LCBwYXJzZUZsb2F0KF9zaXplKSk7XG5cblx0Y29uc3QgXG5cdFx0U0laRV9CQVNFID0gY29uc3RhbnRzLlNJWkVfQkFTRVxuXHQ7XG5cblx0bGV0IFxuXHRcdHJldCxcblx0XHRzaXplRmFjdG9yTmF0dXJhbCA9IGhlbHBlcnMuZ2V0U2l6ZUZhY3RvcihkaXN0YW5jZSwgc2l6ZSwgY29uc3RhbnRzLk1PTUVOVF9FWFBSRVNTSVZFLCAxKSxcblx0XHRzaXplRmFjdG9yTWVjaGFuaWNhbCA9IGhlbHBlcnMuZ2V0U2l6ZUZhY3RvcihkaXN0YW5jZSwgc2l6ZSwgY29uc3RhbnRzLk1PTUVOVF9QUk9EVUNUSVZFLCAxKVxuXHQ7XG5cblx0c3dpdGNoKHByb3BlcnR5KXtcblxuXHRcdGNhc2UgY29uc3RhbnRzLlBST1BFUlRZX0ZBREU6e1xuXG5cdFx0XHRjb25zdCBTSVpFMSA9IDQ4ICogNDg7XG5cdFx0XHRjb25zdCBTSVpFMiA9IDQwMCAqIDQwMDtcblx0XHRcdFxuXHRcdFx0c3dpdGNoKG1vdGlvbk1vZGUpe1xuXG5cdFx0XHRcdGNhc2UgY29uc3RhbnRzLk1PTUVOVF9DRUxFQlJBVE9SWTp7XG5cblx0XHRcdFx0XHRjb25zdCBEVVIxID0gMzEwO1xuXHRcdFx0XHRcdGNvbnN0IERVUjIgPSA0Mzg7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y29uc3QgU0xPUEUgPSAoRFVSMiAtIERVUjEpIC8gKFNJWkUyIC0gU0laRTEpO1xuXHRcdFx0XHRcdGNvbnN0IERJU1BMQUNFTUVOVCA9IERVUjEgLSBTTE9QRSAqIFNJWkUxO1xuXG5cdFx0XHRcdFx0cmV0ID0gTWF0aC5tYXgoXG5cdFx0XHRcdFx0XHQzMTAsXG5cdFx0XHRcdFx0XHRTTE9QRSAqIHNpemUgKyBESVNQTEFDRU1FTlRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y2FzZSBjb25zdGFudHMuTU9NRU5UX05BUlJBVElWRTp7XG5cblx0XHRcdFx0XHRjb25zdCBEVVIxID0gMjI4O1xuXHRcdFx0XHRcdGNvbnN0IERVUjIgPSAzNDQ7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y29uc3QgU0xPUEUgPSAoRFVSMiAtIERVUjEpIC8gKFNJWkUyIC0gU0laRTEpO1xuXHRcdFx0XHRcdGNvbnN0IERJU1BMQUNFTUVOVCA9IERVUjEgLSBTTE9QRSAqIFNJWkUxO1xuXG5cdFx0XHRcdFx0cmV0ID0gTWF0aC5tYXgoXG5cdFx0XHRcdFx0XHQyMzAsXG5cdFx0XHRcdFx0XHRTTE9QRSAqIHNpemUgKyBESVNQTEFDRU1FTlRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y2FzZSBjb25zdGFudHMuTU9NRU5UX0VYUFJFU1NJVkU6e1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNvbnN0IERVUjEgPSAxNDY7XG5cdFx0XHRcdFx0Y29uc3QgRFVSMiA9IDI0MDtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjb25zdCBTTE9QRSA9IChEVVIyIC0gRFVSMSkgLyAoU0laRTIgLSBTSVpFMSk7XG5cdFx0XHRcdFx0Y29uc3QgRElTUExBQ0VNRU5UID0gRFVSMSAtIFNMT1BFICogU0laRTE7XG5cblx0XHRcdFx0XHRyZXQgPSBNYXRoLm1heChcblx0XHRcdFx0XHRcdDE1MCxcblx0XHRcdFx0XHRcdFNMT1BFICogc2l6ZSArIERJU1BMQUNFTUVOVFxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGNhc2UgY29uc3RhbnRzLk1PTUVOVF9QUk9EVUNUSVZFOntcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjb25zdCBEVVIxID0gMTA4O1xuXHRcdFx0XHRcdGNvbnN0IERVUjIgPSAxNjA7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y29uc3QgU0xPUEUgPSAoRFVSMiAtIERVUjEpIC8gKFNJWkUyIC0gU0laRTEpO1xuXHRcdFx0XHRcdGNvbnN0IERJU1BMQUNFTUVOVCA9IERVUjEgLSBTTE9QRSAqIFNJWkUxO1xuXG5cdFx0XHRcdFx0cmV0ID0gTWF0aC5tYXgoXG5cdFx0XHRcdFx0XHQxMTAsXG5cdFx0XHRcdFx0XHRTTE9QRSAqIHNpemUgKyBESVNQTEFDRU1FTlRcblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldCA9IHJldCAvIDEwMCAqIGRpc3RhbmNlO1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZhZGU6cmV0PT09JytyZXQpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0Y2FzZSBjb25zdGFudHMuUFJPUEVSVFlfUk9UQVRFOntcblxuXHRcdFx0Y29uc3QgU0laRTEgPSAxNiAqIDEwO1xuXHRcdFx0Y29uc3QgU0laRTIgPSA0MDAgKiA0MDA7XG5cdFx0XHRcblx0XHRcdHN3aXRjaChtb3Rpb25Nb2RlKXtcblxuXHRcdFx0XHRjYXNlIGNvbnN0YW50cy5NT01FTlRfQ0VMRUJSQVRPUlk6e1xuXG5cdFx0XHRcdFx0Y29uc3QgRFVSMSA9IDM2MDtcblx0XHRcdFx0XHRjb25zdCBEVVIyID0gNDgwO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNvbnN0IFNMT1BFID0gKERVUjIgLSBEVVIxKSAvIChTSVpFMiAtIFNJWkUxKTtcblx0XHRcdFx0XHRjb25zdCBESVNQTEFDRU1FTlQgPSBEVVIxIC0gU0xPUEUgKiBTSVpFMTtcblxuXHRcdFx0XHRcdHJldCA9IFNMT1BFICogc2l6ZSArIERJU1BMQUNFTUVOVDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhc2UgY29uc3RhbnRzLk1PTUVOVF9OQVJSQVRJVkU6e1xuXG5cdFx0XHRcdFx0Y29uc3QgRFVSMSA9IDI2ODtcblx0XHRcdFx0XHRjb25zdCBEVVIyID0gMzk0O1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNvbnN0IFNMT1BFID0gKERVUjIgLSBEVVIxKSAvIChTSVpFMiAtIFNJWkUxKTtcblx0XHRcdFx0XHRjb25zdCBESVNQTEFDRU1FTlQgPSBEVVIxIC0gU0xPUEUgKiBTSVpFMTtcblxuXHRcdFx0XHRcdHJldCA9IFNMT1BFICogc2l6ZSArIERJU1BMQUNFTUVOVDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhc2UgY29uc3RhbnRzLk1PTUVOVF9FWFBSRVNTSVZFOntcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjb25zdCBEVVIxID0gMTg4O1xuXHRcdFx0XHRcdGNvbnN0IERVUjIgPSAyODA7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y29uc3QgU0xPUEUgPSAoRFVSMiAtIERVUjEpIC8gKFNJWkUyIC0gU0laRTEpO1xuXHRcdFx0XHRcdGNvbnN0IERJU1BMQUNFTUVOVCA9IERVUjEgLSBTTE9QRSAqIFNJWkUxO1xuXG5cdFx0XHRcdFx0cmV0ID0gU0xPUEUgKiBzaXplICsgRElTUExBQ0VNRU5UO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRjYXNlIGNvbnN0YW50cy5NT01FTlRfUFJPRFVDVElWRTp7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y29uc3QgRFVSMSA9IDEyODtcblx0XHRcdFx0XHRjb25zdCBEVVIyID0gMTkwO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNvbnN0IFNMT1BFID0gKERVUjIgLSBEVVIxKSAvIChTSVpFMiAtIFNJWkUxKTtcblx0XHRcdFx0XHRjb25zdCBESVNQTEFDRU1FTlQgPSBEVVIxIC0gU0xPUEUgKiBTSVpFMTtcblxuXHRcdFx0XHRcdHJldCA9IFNMT1BFICogc2l6ZSArIERJU1BMQUNFTUVOVDtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXQgPSByZXQgLyAxODAgKiBkaXN0YW5jZTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGNhc2UgY29uc3RhbnRzLlBST1BFUlRZX1NDQUxFOntcblxuXHRcdFx0Y29uc3QgQVJFQV9ERUxUQV8xID0gMTAwICogMjAwIC0gMTAwICogMTAwO1xuXHRcdFx0Y29uc3QgQVJFQV9ERUxUQV8yID0gNDAwICogNDAwIC0gMTAwICogMTAwO1xuXHRcdFx0XG5cdFx0XHRzd2l0Y2gobW90aW9uTW9kZSl7XG5cblx0XHRcdFx0Y2FzZSBjb25zdGFudHMuTU9NRU5UX0NFTEVCUkFUT1JZOntcblxuXHRcdFx0XHRcdGNvbnN0IERVUjEgPSAyNjg7XG5cdFx0XHRcdFx0Y29uc3QgRFVSMiA9IDM5Mjtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjb25zdCBTTE9QRSA9IChEVVIyIC0gRFVSMSkgLyAoQVJFQV9ERUxUQV8yIC0gQVJFQV9ERUxUQV8xKTtcblx0XHRcdFx0XHRjb25zdCBESVNQTEFDRU1FTlQgPSBEVVIxIC0gU0xPUEUgKiBBUkVBX0RFTFRBXzE7XG5cblx0XHRcdFx0XHRyZXQgPSBTTE9QRSAqIHNpemUgKyBESVNQTEFDRU1FTlQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlIGNvbnN0YW50cy5NT01FTlRfTkFSUkFUSVZFOntcblxuXHRcdFx0XHRcdGNvbnN0IERVUjEgPSAyMDg7XG5cdFx0XHRcdFx0Y29uc3QgRFVSMiA9IDI2MDtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjb25zdCBTTE9QRSA9IChEVVIyIC0gRFVSMSkgLyAoQVJFQV9ERUxUQV8yIC0gQVJFQV9ERUxUQV8xKTtcblx0XHRcdFx0XHRjb25zdCBESVNQTEFDRU1FTlQgPSBEVVIxIC0gU0xPUEUgKiBBUkVBX0RFTFRBXzE7XG5cblx0XHRcdFx0XHRyZXQgPSBTTE9QRSAqIHNpemUgKyBESVNQTEFDRU1FTlQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlIGNvbnN0YW50cy5NT01FTlRfRVhQUkVTU0lWRTp7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y29uc3QgRFVSMSA9IDEyODtcblx0XHRcdFx0XHRjb25zdCBEVVIyID0gMTY4O1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNvbnN0IFNMT1BFID0gKERVUjIgLSBEVVIxKSAvIChBUkVBX0RFTFRBXzIgLSBBUkVBX0RFTFRBXzEpO1xuXHRcdFx0XHRcdGNvbnN0IERJU1BMQUNFTUVOVCA9IERVUjEgLSBTTE9QRSAqIEFSRUFfREVMVEFfMTtcblxuXHRcdFx0XHRcdHJldCA9IFNMT1BFICogc2l6ZSArIERJU1BMQUNFTUVOVDtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0Y2FzZSBjb25zdGFudHMuTU9NRU5UX1BST0RVQ1RJVkU6e1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNvbnN0IERVUjEgPSA5NDtcblx0XHRcdFx0XHRjb25zdCBEVVIyID0gMTQzO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNvbnN0IFNMT1BFID0gKERVUjIgLSBEVVIxKSAvIChBUkVBX0RFTFRBXzIgLSBBUkVBX0RFTFRBXzEpO1xuXHRcdFx0XHRcdGNvbnN0IERJU1BMQUNFTUVOVCA9IERVUjEgLSBTTE9QRSAqIEFSRUFfREVMVEFfMTtcblxuXHRcdFx0XHRcdHJldCA9IFNMT1BFICogc2l6ZSArIERJU1BMQUNFTUVOVDtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRjYXNlIGNvbnN0YW50cy5QUk9QRVJUWV9NT1ZFOlxuXHRcdGRlZmF1bHQ6e1xuXG5cdFx0XHRjb25zdCBESVNUQU5DRTEgPSAxMDA7XG5cdFx0XHRjb25zdCBESVNUQU5DRTIgPSAxNDAwO1xuXG5cdFx0XHRjb25zdCBTSVpFX0RVUjEgPSAyMDA7XG5cdFx0XHRjb25zdCBTSVpFX0RVUjIgPSAyMDg7XG5cdFx0XHRjb25zdCBTSVpFX0RJU1RBTkNFMSA9IDEwMCAqIDEwMDtcblx0XHRcdGNvbnN0IFNJWkVfRElTVEFOQ0UyID0gNDAwICogNDAwO1xuXHRcdFx0Y29uc3QgU0laRV9TTE9QRSA9IChTSVpFX0RVUjIgLSBTSVpFX0RVUjEpIC8gKFNJWkVfRElTVEFOQ0UyIC0gU0laRV9ESVNUQU5DRTEpIC8gU0laRV9EVVIxO1xuXHRcdFx0Y29uc3QgU0laRV9ESVNQTEFDRU1FTlQgPSAoU0laRV9EVVIyIC0gU0laRV9ESVNUQU5DRTIgKiBTSVpFX1NMT1BFKSAvIFNJWkVfRFVSMTtcblxuXHRcdFx0c3dpdGNoKG1vdGlvbk1vZGUpe1xuXG5cdFx0XHRcdGNhc2UgY29uc3RhbnRzLk1PTUVOVF9DRUxFQlJBVE9SWTp7XG5cblx0XHRcdFx0XHRjb25zdCBEVVIxID0gMjc2O1xuXHRcdFx0XHRcdGNvbnN0IERVUjIgPSA0NjY7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y29uc3QgU0xPUEUgPSAoRFVSMiAtIERVUjEpIC8gKERJU1RBTkNFMiAtIERJU1RBTkNFMSk7XG5cdFx0XHRcdFx0Y29uc3QgRElTUExBQ0VNRU5UID0gRFVSMSAtIFNMT1BFICogRElTVEFOQ0UxO1xuXG5cdFx0XHRcdFx0cmV0ID0gU0xPUEUgKiBkaXN0YW5jZSArIERJU1BMQUNFTUVOVDtcblx0XHRcdFx0XHRyZXQgPSByZXQgKiAoc2l6ZSAqIFNJWkVfU0xPUEUgKyBTSVpFX0RJU1BMQUNFTUVOVCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlIGNvbnN0YW50cy5NT01FTlRfTkFSUkFUSVZFOntcblxuXHRcdFx0XHRcdGNvbnN0IERVUjEgPSAyMDE7XG5cdFx0XHRcdFx0Y29uc3QgRFVSMiA9IDM2OTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjb25zdCBTTE9QRSA9IChEVVIyIC0gRFVSMSkgLyAoRElTVEFOQ0UyIC0gRElTVEFOQ0UxKTtcblx0XHRcdFx0XHRjb25zdCBESVNQTEFDRU1FTlQgPSBEVVIxIC0gU0xPUEUgKiBESVNUQU5DRTE7XG5cblx0XHRcdFx0XHRyZXQgPSBTTE9QRSAqIGRpc3RhbmNlICsgRElTUExBQ0VNRU5UO1xuXHRcdFx0XHRcdHJldCA9IHJldCAqIChzaXplICogU0laRV9TTE9QRSArIFNJWkVfRElTUExBQ0VNRU5UKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhc2UgY29uc3RhbnRzLk1PTUVOVF9FWFBSRVNTSVZFOntcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjb25zdCBEVVIxID0gMTI4O1xuXHRcdFx0XHRcdGNvbnN0IERVUjIgPSAyNjg7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y29uc3QgU0xPUEUgPSAoRFVSMiAtIERVUjEpIC8gKERJU1RBTkNFMiAtIERJU1RBTkNFMSk7XG5cdFx0XHRcdFx0Y29uc3QgRElTUExBQ0VNRU5UID0gRFVSMSAtIFNMT1BFICogRElTVEFOQ0UxO1xuXG5cdFx0XHRcdFx0cmV0ID0gU0xPUEUgKiBkaXN0YW5jZSArIERJU1BMQUNFTUVOVDtcblx0XHRcdFx0XHRyZXQgPSByZXQgKiAoc2l6ZSAqIFNJWkVfU0xPUEUgKyBTSVpFX0RJU1BMQUNFTUVOVCk7XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGNhc2UgY29uc3RhbnRzLk1PTUVOVF9QUk9EVUNUSVZFOntcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjb25zdCBEVVIxID0gOTA7XG5cdFx0XHRcdFx0Y29uc3QgRFVSMiA9IDE5MDtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjb25zdCBTTE9QRSA9IChEVVIyIC0gRFVSMSkgLyAoRElTVEFOQ0UyIC0gRElTVEFOQ0UxKTtcblx0XHRcdFx0XHRjb25zdCBESVNQTEFDRU1FTlQgPSBEVVIxIC0gU0xPUEUgKiBESVNUQU5DRTE7XG5cblx0XHRcdFx0XHRyZXQgPSBTTE9QRSAqIGRpc3RhbmNlICsgRElTUExBQ0VNRU5UO1xuXHRcdFx0XHRcdHJldCA9IHJldCAqIChzaXplICogU0laRV9TTE9QRSArIFNJWkVfRElTUExBQ0VNRU5UKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0RHVyYXRpb247XG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzLmpzJztcblxuY29uc3QgZ2V0U2l6ZUZhY3RvciA9IChcblx0ZGlzdGFuY2UgPSAxMDAsIFxuXHRzaXplID0gMjAsIFxuXHRtb3Rpb25Nb2RlID0gY29uc3RhbnRzLlBST0RVQ1RJVkVfTU9USU9OLCBcblx0YWRqdXN0bWVudEZhY3RvciA9IDFcbikgPT4gTWF0aC5taW4oXG5cdFx0MS41LCBcblx0XHRNYXRoLnBvdyhcblx0XHRcdGNvbnN0YW50cy5TSVpFX0JBU0UgL3NpemUsIFxuXHRcdFx0KG1vdGlvbk1vZGUgPT09IGNvbnN0YW50cy5QUk9EVUNUSVZFX01PVElPTiA/IDAuMDUgOiAwLjEpICphZGp1c3RtZW50RmFjdG9yIHx8IDFcblx0XHQpXG5cdClcbjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRnZXRTaXplRmFjdG9yLFxufTsiLCJpbXBvcnQgZ2V0Q3VydmUgZnJvbSBcIi4vZ2V0Q3VydmUuanNcIjtcbmltcG9ydCBnZXREdXJhdGlvbiBmcm9tIFwiLi9nZXREdXJhdGlvbi5qc1wiO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuY29uc3QgcmV0ID0ge1xuXHRnZXRDdXJ2ZTpnZXRDdXJ2ZSxcblx0Z2V0RHVyYXRpb246Z2V0RHVyYXRpb24sXG5cdGNvbnN0YW50czpjb25zdGFudHMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXQ7Il19
