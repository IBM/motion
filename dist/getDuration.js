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

	var _size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

	var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants2.default.PROPERTY_MOVE;
	var motionMode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _constants2.default.MOMENT_PRODUCTIVE;
	var easing = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _constants2.default.EASE_IN_OUT;
	var version = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 7;
	var params = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};


	params.durationMultiplier = params.durationMultiplier || 1;
	distance = parseFloat(_distance);
	size = parseFloat(_size);
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