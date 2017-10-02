'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _CURVES;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CURVES = (_CURVES = {}, (0, _defineProperty3.default)(_CURVES, '7', {
	'fade': {
		natural: {
			curves: {
				easeInOut: 'cubic-bezier(0.4, 0.14, 0.3, 1)',
				easeIn: 'cubic-bezier(0.4, 0.14, 1, 1)',
				easeOut: 'cubic-bezier(0, 0, 0.3, 1)'
			}
		},
		mechanical: {
			curves: {
				easeInOut: 'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
				easeIn: 'cubic-bezier(0.2, 0, 1, 0.9)',
				easeOut: 'cubic-bezier(0, 0, 0.38, 0.9)'
			}
		}
	},
	'move': {
		natural: {
			curves: {
				easeInOut: 'cubic-bezier(0.4, 0.14, 0.3, 1)',
				easeIn: 'cubic-bezier(0.4, 0.14, 1, 1)',
				easeOut: 'cubic-bezier(0, 0, 0.3, 1)'
			}
		},
		mechanical: {
			curves: {
				easeInOut: 'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
				easeIn: 'cubic-bezier(0.2, 0.1, 1, 1)',
				easeOut: 'cubic-bezier(0, 0, 0.38, 0.9)'
			}
		}
	}
}), (0, _defineProperty3.default)(_CURVES, '6', {
	'fade': {
		natural: {
			curves: {
				easeInOut: 'cubic-bezier(0.4, 0.14, 0.3, 1)',
				easeIn: 'cubic-bezier(0.4, 0.14, 1, 1)',
				easeOut: 'cubic-bezier(0, 0, 0.3, 1)'
			}
		},
		mechanical: {
			curves: {
				easeInOut: 'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
				easeIn: 'cubic-bezier(0.2, 0, 1, 0.9)',
				easeOut: 'cubic-bezier(0, 0, 0.38, 0.9)'
			}
		}
	},
	'move': {
		natural: {
			curves: {
				easeInOut: 'cubic-bezier(0.4, 0.14, 0.3, 1)',
				easeIn: 'cubic-bezier(0.4, 0.14, 1, 1)',
				easeOut: 'cubic-bezier(0, 0, 0.3, 1)'
			}
		},
		mechanical: {
			curves: {
				easeInOut: 'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
				easeIn: 'cubic-bezier(0.2, 0, 1, 1)',
				easeOut: 'cubic-bezier(0, 0, 0.38, 0.9)'
			}
		}
	}
}), _CURVES);

var getCurve = function getCurve() {
	var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
	var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
	var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'move';
	var motionMode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'mechanical';
	var easing = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'easeInOut';
	var version = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 7;
	var params = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
	return CURVES[version][property === 'scale' ? 'move' : property][motionMode].curves[easing];
};

exports.default = getCurve;