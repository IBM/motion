(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.getCurve = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./config-constants.js":1,"./constants.js":2}]},{},[3])(3)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29uZmlnLWNvbnN0YW50cy5qcyIsInNyYy9jb25zdGFudHMuanMiLCJzcmMvZ2V0Q3VydmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7OztBQUVBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxpREFDSixvQkFBVSxhQUROLHNFQUVILG9CQUFVLGlCQUZQLEVBRTBCO0FBQzdCLGNBQVksaUNBRGlCO0FBRTdCLFdBQVMsK0JBRm9CO0FBRzdCLFlBQVU7QUFIbUIsQ0FGMUIsMENBT0gsb0JBQVUsaUJBUFAsRUFPMEI7QUFDN0IsY0FBWSxtQ0FEaUI7QUFFN0IsV0FBUyw4QkFGb0I7QUFHN0IsWUFBVTtBQUhtQixDQVAxQiwwQ0FZSCxvQkFBVSxnQkFaUCxFQVl5QjtBQUM1QixjQUFZLG1DQURnQjtBQUU1QixXQUFTLCtCQUZtQjtBQUc1QixZQUFVO0FBSGtCLENBWnpCLDBDQWlCSCxvQkFBVSxrQkFqQlAsRUFpQjJCO0FBQzlCLGNBQVksbUNBRGtCO0FBRTlCLFdBQVMsK0JBRnFCO0FBRzlCLFlBQVU7QUFIb0IsQ0FqQjNCLHFEQXVCSixvQkFBVSxjQXZCTixzRUF3Qkgsb0JBQVUsaUJBeEJQLEVBd0IwQjtBQUM3QixjQUFZLGlDQURpQjtBQUU3QixXQUFTLCtCQUZvQjtBQUc3QixZQUFVO0FBSG1CLENBeEIxQiwwQ0E2Qkgsb0JBQVUsaUJBN0JQLEVBNkIwQjtBQUM3QixjQUFZLG1DQURpQjtBQUU3QixXQUFTLDhCQUZvQjtBQUc3QixZQUFVO0FBSG1CLENBN0IxQiwwQ0FrQ0gsb0JBQVUsZ0JBbENQLEVBa0N5QjtBQUM1QixjQUFZLG1DQURnQjtBQUU1QixXQUFTLCtCQUZtQjtBQUc1QixZQUFVO0FBSGtCLENBbEN6QiwwQ0F1Q0gsb0JBQVUsa0JBdkNQLEVBdUMyQjtBQUM5QixjQUFZLG1DQURrQjtBQUU5QixXQUFTLCtCQUZxQjtBQUc5QixZQUFVO0FBSG9C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QUFRLFFBWE07QUFZZCxXQUFTO0FBWkssQzs7Ozs7Ozs7O0FDQWY7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxXQUNMLFNBREssUUFDTCxHQU9LO0FBQUEsS0FOSixTQU1JLHVFQU5RLEdBTVI7O0FBQUEsS0FMSixLQUtJLHVFQUxJLEVBS0o7O0FBQUEsS0FKSixRQUlJLHVFQUpPLG9CQUFVLGFBSWpCO0FBQUEsS0FISixVQUdJLHVFQUhTLG9CQUFVLGlCQUduQjtBQUFBLEtBRkosTUFFSSx1RUFGSyxvQkFBVSxXQUVmO0FBQUEsS0FESixJQUNJLHVFQURHLEtBQ0g7QUFBQSxLQURVLE9BQ1YsdUVBRG9CLEVBQ3BCOztBQUNKLFFBQU8sMEJBQWdCLE1BQWhCLENBQXVCLFFBQXZCLEVBQWlDLFVBQWpDLEVBQTZDLE1BQTdDLENBQVA7QUFDQSxDQVZGOztrQkFhZSxRIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMuanMnO1xuXG5jb25zdCBjdXJ2ZXMgPSB7XG5cdFtjb25zdGFudHMuUFJPUEVSVFlfTU9WRV06e1xuXHRcdFtjb25zdGFudHMuTU9NRU5UX0VYUFJFU1NJVkVdOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC40LCAwLjE0LCAwLjMsIDEpXCIsXG5cdFx0XHRcImVhc2VJblwiOlwiY3ViaWMtYmV6aWVyKDAuNCwgMC4xNCwgMSwgMSlcIixcblx0XHRcdFwiZWFzZU91dFwiOlwiY3ViaWMtYmV6aWVyKDAsIDAsIDAuMywgMSlcIixcblx0XHR9LFxuXHRcdFtjb25zdGFudHMuTU9NRU5UX1BST0RVQ1RJVkVdOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC4yLCAwLjIsIDAuMzgsIDAuOSlcIixcblx0XHRcdFwiZWFzZUluXCI6XCJjdWJpYy1iZXppZXIoMC4yLCAwLCAxLCAwLjkpXCIsXG5cdFx0XHRcImVhc2VPdXRcIjpcImN1YmljLWJlemllcigwLCAwLCAwLjM4LCAwLjkpXCIsXG5cdFx0fSxcblx0XHRbY29uc3RhbnRzLk1PTUVOVF9OQVJSQVRJVkVdOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC4yOSwgMC4wNCwgMC4yMywgMSlcIixcblx0XHRcdFwiZWFzZUluXCI6XCJjdWJpYy1iZXppZXIoMC4zOSwgLjA2LCAxLCAxKVwiLFxuXHRcdFx0XCJlYXNlT3V0XCI6XCJjdWJpYy1iZXppZXIoMCwgMCwgMC4zLCAxKVwiLFxuXHRcdH0sXG5cdFx0W2NvbnN0YW50cy5NT01FTlRfQ0VMRUJSQVRPUlldOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC4yOSwgMC4wNCwgMC4yMywgMSlcIixcblx0XHRcdFwiZWFzZUluXCI6XCJjdWJpYy1iZXppZXIoMC4zOSwgLjA2LCAxLCAxKVwiLFxuXHRcdFx0XCJlYXNlT3V0XCI6XCJjdWJpYy1iZXppZXIoMCwgMCwgMC4zLCAxKVwiLFxuXHRcdH1cblx0fSxcblx0W2NvbnN0YW50cy5QUk9QRVJUWV9TQ0FMRV06e1xuXHRcdFtjb25zdGFudHMuTU9NRU5UX0VYUFJFU1NJVkVdOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC40LCAwLjE0LCAwLjMsIDEpXCIsXG5cdFx0XHRcImVhc2VJblwiOlwiY3ViaWMtYmV6aWVyKDAuNCwgMC4xNCwgMSwgMSlcIixcblx0XHRcdFwiZWFzZU91dFwiOlwiY3ViaWMtYmV6aWVyKDAsIDAsIDAuMywgMSlcIixcblx0XHR9LFxuXHRcdFtjb25zdGFudHMuTU9NRU5UX1BST0RVQ1RJVkVdOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC4yLCAwLjIsIDAuMzgsIDAuOSlcIixcblx0XHRcdFwiZWFzZUluXCI6XCJjdWJpYy1iZXppZXIoMC4yLCAwLCAxLCAwLjkpXCIsXG5cdFx0XHRcImVhc2VPdXRcIjpcImN1YmljLWJlemllcigwLCAwLCAwLjM4LCAwLjkpXCIsXG5cdFx0fSxcblx0XHRbY29uc3RhbnRzLk1PTUVOVF9OQVJSQVRJVkVdOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC4yOSwgMC4wNCwgMC4yMywgMSlcIixcblx0XHRcdFwiZWFzZUluXCI6XCJjdWJpYy1iZXppZXIoMC4zOSwgLjA2LCAxLCAxKVwiLFxuXHRcdFx0XCJlYXNlT3V0XCI6XCJjdWJpYy1iZXppZXIoMCwgMCwgMC4zLCAxKVwiLFxuXHRcdH0sXG5cdFx0W2NvbnN0YW50cy5NT01FTlRfQ0VMRUJSQVRPUlldOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC4yOSwgMC4wNCwgMC4yMywgMSlcIixcblx0XHRcdFwiZWFzZUluXCI6XCJjdWJpYy1iZXppZXIoMC4zOSwgLjA2LCAxLCAxKVwiLFxuXHRcdFx0XCJlYXNlT3V0XCI6XCJjdWJpYy1iZXppZXIoMCwgMCwgMC4zLCAxKVwiLFxuXHRcdH1cblx0fSxcblx0W2NvbnN0YW50cy5QUk9QRVJUWV9GQURFXTp7XG5cdFx0W2NvbnN0YW50cy5NT01FTlRfRVhQUkVTU0lWRV06e1xuXHRcdFx0XCJlYXNlSW5PdXRcIjpcImN1YmljLWJlemllcigwLjQsIDAuMTQsIDAuMywgMSlcIixcblx0XHRcdFwiZWFzZUluXCI6XCJjdWJpYy1iZXppZXIoMC40LCAwLjE0LCAxLCAxKVwiLFxuXHRcdFx0XCJlYXNlT3V0XCI6XCJjdWJpYy1iZXppZXIoMCwgMCwgMC4zLCAxKVwiLFxuXHRcdH0sXG5cdFx0W2NvbnN0YW50cy5NT01FTlRfUFJPRFVDVElWRV06e1xuXHRcdFx0XCJlYXNlSW5PdXRcIjpcImN1YmljLWJlemllcigwLjIsIDAuMiwgMC4zOCwgMC45KVwiLFxuXHRcdFx0XCJlYXNlSW5cIjpcImN1YmljLWJlemllcigwLjIsIDAsIDEsIDAuOSlcIixcblx0XHRcdFwiZWFzZU91dFwiOlwiY3ViaWMtYmV6aWVyKDAsIDAsIDAuMzgsIDAuOSlcIixcblx0XHR9LFxuXHRcdFtjb25zdGFudHMuTU9NRU5UX05BUlJBVElWRV06e1xuXHRcdFx0XCJlYXNlSW5PdXRcIjpcImN1YmljLWJlemllcigwLjI5LCAwLjA0LCAwLjIzLCAxKVwiLFxuXHRcdFx0XCJlYXNlSW5cIjpcImN1YmljLWJlemllcigwLjM5LCAuMDYsIDEsIDEpXCIsXG5cdFx0XHRcImVhc2VPdXRcIjpcImN1YmljLWJlemllcigwLCAwLCAwLjMsIDEpXCIsXG5cdFx0fSxcblx0XHRbY29uc3RhbnRzLk1PTUVOVF9DRUxFQlJBVE9SWV06e1xuXHRcdFx0XCJlYXNlSW5PdXRcIjpcImN1YmljLWJlemllcigwLjI5LCAwLjA0LCAwLjIzLCAxKVwiLFxuXHRcdFx0XCJlYXNlSW5cIjpcImN1YmljLWJlemllcigwLjM5LCAuMDYsIDEsIDEpXCIsXG5cdFx0XHRcImVhc2VPdXRcIjpcImN1YmljLWJlemllcigwLCAwLCAwLjMsIDEpXCIsXG5cdFx0fVxuXHR9LFxuXHRbY29uc3RhbnRzLlBST1BFUlRZX1JPVEFURV06e1xuXHRcdFtjb25zdGFudHMuTU9NRU5UX0VYUFJFU1NJVkVdOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC40LCAwLjE0LCAwLjMsIDEpXCIsXG5cdFx0XHRcImVhc2VJblwiOlwiY3ViaWMtYmV6aWVyKDAuNCwgMC4xNCwgMSwgMSlcIixcblx0XHRcdFwiZWFzZU91dFwiOlwiY3ViaWMtYmV6aWVyKDAsIDAsIDAuMywgMSlcIixcblx0XHR9LFxuXHRcdFtjb25zdGFudHMuTU9NRU5UX1BST0RVQ1RJVkVdOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC4yLCAwLjIsIDAuMzgsIDAuOSlcIixcblx0XHRcdFwiZWFzZUluXCI6XCJjdWJpYy1iZXppZXIoMC4yLCAwLCAxLCAwLjkpXCIsXG5cdFx0XHRcImVhc2VPdXRcIjpcImN1YmljLWJlemllcigwLCAwLCAwLjM4LCAwLjkpXCIsXG5cdFx0fSxcblx0XHRbY29uc3RhbnRzLk1PTUVOVF9OQVJSQVRJVkVdOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC4yOSwgMC4wNCwgMC4yMywgMSlcIixcblx0XHRcdFwiZWFzZUluXCI6XCJjdWJpYy1iZXppZXIoMC4zOSwgLjA2LCAxLCAxKVwiLFxuXHRcdFx0XCJlYXNlT3V0XCI6XCJjdWJpYy1iZXppZXIoMCwgMCwgMC4zLCAxKVwiLFxuXHRcdH0sXG5cdFx0W2NvbnN0YW50cy5NT01FTlRfQ0VMRUJSQVRPUlldOntcblx0XHRcdFwiZWFzZUluT3V0XCI6XCJjdWJpYy1iZXppZXIoMC4yOSwgMC4wNCwgMC4yMywgMSlcIixcblx0XHRcdFwiZWFzZUluXCI6XCJjdWJpYy1iZXppZXIoMC4zOSwgLjA2LCAxLCAxKVwiLFxuXHRcdFx0XCJlYXNlT3V0XCI6XCJjdWJpYy1iZXppZXIoMCwgMCwgMC4zLCAxKVwiLFxuXHRcdH1cblx0fVxufTtcblxuY29uc3QgbW90aW9uTW9kZXMgPSBbY29uc3RhbnRzLk1PTUVOVF9FWFBSRVNTSVZFLCBjb25zdGFudHMuTU9NRU5UX1BST0RVQ1RJVkUsIGNvbnN0YW50cy5NT01FTlRfTkFSUkFUSVZFLCBjb25zdGFudHMuTU9NRU5UX0NFTEVCUkFUT1JZXTtcblxuY29uc3QgZGlzdGFuY2VzID0ge1xuXHRbY29uc3RhbnRzLlBST1BFUlRZX01PVkVdOlsxMCwgMjUsIDUwLCA3NSwgMTAwLCAyMDAsIDQwMCwgODAwLCAxNjAwLCAzMjAwXSxcblx0W2NvbnN0YW50cy5QUk9QRVJUWV9TQ0FMRV06WzEwMCwgMjAwLCA0MDAsIDgwMCwgMTYwMCwgMzIwMCwgNjQwMCwgMTI4MDAsIDI1NjAwLCA1MTIwMCwgMTAyNDAwLCAyMDQ4MDBdLFxuXHRbY29uc3RhbnRzLlBST1BFUlRZX0ZBREVdOlsyNSwgNTAsIDc1LCAxMDBdLFxuXHRbY29uc3RhbnRzLlBST1BFUlRZX1JPVEFURV06WzMwLCA2MCwgOTAsIDEyMCwgMTUwLCAxODAsIDI3MCwgMzYwXVxufTtcblxuY29uc3Qgc2l6ZXMgPSAnMTIzNDU2Nzg5Jy5zcGxpdCgnJykucmVkdWNlKCAocHJldiwgY3VyciwgaSkgPT4gWy4uLnByZXYsIHByZXZbcHJldi5sZW5ndGgtMV0gKiA0XSwgWzgqOF0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Y3VydmVzLCBkaXN0YW5jZXMsIHNpemVzLCBtb3Rpb25Nb2Rlc1xufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRNT01FTlRfRVhQUkVTU0lWRTpcImV4cHJcIixcblx0TU9NRU5UX1BST0RVQ1RJVkU6XCJwcm9kXCIsXG5cdE1PTUVOVF9OQVJSQVRJVkU6XCJuYXJyXCIsXG5cdE1PTUVOVF9DRUxFQlJBVE9SWTpcImNlbGViXCIsXG5cdFNJWkVfQkFTRToyMCxcblx0UFJPUEVSVFlfTU9WRTpcIm1vdmVcIixcblx0UFJPUEVSVFlfU0NBTEU6XCJzY2FsZVwiLFxuXHRQUk9QRVJUWV9GQURFOlwiZmFkZVwiLFxuXHRQUk9QRVJUWV9ST1RBVEU6XCJyb3RhdGVcIixcblx0RUFTRV9JTl9PVVQ6XCJlYXNlSW5PdXRcIixcblx0RUFTRV9JTjpcImVhc2VJblwiLFxuXHRFQVNFX09VVDpcImVhc2VPdXRcIlxufSIsImltcG9ydCBjb25maWdDb25zdG5hdHMgZnJvbSAnLi9jb25maWctY29uc3RhbnRzLmpzJztcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMuanMnO1xuXG5jb25zdCBnZXRDdXJ2ZSA9IFxuXHQoXG5cdFx0X2Rpc3RhbmNlID0gMTAwLCBcblx0XHRfc2l6ZSA9IDE2LCBcblx0XHRwcm9wZXJ0eSA9IGNvbnN0YW50cy5QUk9QRVJUWV9NT1ZFLCBcblx0XHRtb3Rpb25Nb2RlID0gY29uc3RhbnRzLk1PTUVOVF9QUk9EVUNUSVZFLCBcblx0XHRlYXNpbmcgPSBjb25zdGFudHMuRUFTRV9JTl9PVVQsIFxuXHRcdHVuaXQgPSAncmVtJywgcmVtU2l6ZSA9IDE2LFxuXHQpID0+IHtcblx0XHRyZXR1cm4gY29uZmlnQ29uc3RuYXRzLmN1cnZlc1twcm9wZXJ0eV1bbW90aW9uTW9kZV1bZWFzaW5nXVxuXHR9XG47XG5cbmV4cG9ydCBkZWZhdWx0IGdldEN1cnZlO1xuIl19
