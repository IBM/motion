'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _constants = require('./constants.js');

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