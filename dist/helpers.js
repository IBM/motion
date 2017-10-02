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