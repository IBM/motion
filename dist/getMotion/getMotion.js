'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

require('babel-polyfill');

var _getDuration = require('../getDuration');

var _getDuration2 = _interopRequireDefault(_getDuration);

var _getCurve = require('../getCurve');

var _getCurve2 = _interopRequireDefault(_getCurve);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _helpers = require('../helpers.js');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMotion = function getMotion() {
	var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
	var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
	var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants2.default.PROPERTY_MOVE;
	var version = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 7;
	var params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

	// console.log('getMotion...', distance, size, property, version, params);

	params.durationMultiplier = params.durationMultiplier || 1;

	var ret = void 0;

	switch (version) {

		case 6:
			{
				var SIZE_BASE = _constants2.default.SIZE_BASE;

				var sizeFactorNatural = _helpers2.default.getSizeFactor(distance, size, _constants2.default.MOMENT_CELEBRATORY, 1),
				    sizeFactorMechanical = _helpers2.default.getSizeFactor(distance, size, _constants2.default.MOMENT_PRODUCTIVE, 1);

				distance = parseFloat(distance);
				size = parseFloat(size);
				params.sizeFactorAdjuster = parseFloat(params.sizeFactorAdjuster);

				switch (property) {

					case _constants2.default.PROPERTY_FADE:
						{
							var _ret;

							ret = (_ret = {}, (0, _defineProperty3.default)(_ret, _constants2.default.MOMENT_CELEBRATORY, {
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

					case _constants2.default.PROPERTY_MOVE:
					case _constants2.default.PROPERTY_SCALE:
					default:
						{
							var _ret2;

							ret = (_ret2 = {}, (0, _defineProperty3.default)(_ret2, _constants2.default.MOMENT_CELEBRATORY, {
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
				break;
			}

		default:
		case 7:
			{

				var _SIZE_BASE = _constants2.default.SIZE_BASE;

				var _sizeFactorNatural = _helpers2.default.getSizeFactor(distance, size, _constants2.default.MOMENT_CELEBRATORY, 1),
				    _sizeFactorMechanical = _helpers2.default.getSizeFactor(distance, size, _constants2.default.MOMENT_PRODUCTIVE, 1);

				distance = parseFloat(distance);
				size = parseFloat(size);
				params.sizeFactorAdjuster = parseFloat(params.sizeFactorAdjuster);

				switch (property) {

					case _constants2.default.PROPERTY_FADE:
						{
							var _ret3;

							var adjustedSize = size / _SIZE_BASE * 100;

							ret = (_ret3 = {}, (0, _defineProperty3.default)(_ret3, _constants2.default.MOMENT_CELEBRATORY, {
								curves: {
									easeInOut: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_CELEBRATORY, _constants2.default.EASE_IN_OUT, version, params),
									easeIn: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_CELEBRATORY, _constants2.default.EASE_IN, version, params),
									easeOut: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_CELEBRATORY, _constants2.default.EASE_OUT, version, params)
								},
								duration: (0, _getDuration2.default)(distance, size, property, _constants2.default.MOMENT_CELEBRATORY, _constants2.default.EASE_IN_OUT, version, params)
							}), (0, _defineProperty3.default)(_ret3, _constants2.default.MOMENT_PRODUCTIVE, {
								curves: {
									easeInOut: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_PRODUCTIVE, _constants2.default.EASE_IN_OUT, version, params),
									easeIn: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_PRODUCTIVE, _constants2.default.EASE_IN, version, params),
									easeOut: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_PRODUCTIVE, _constants2.default.EASE_OUT, version, params)
								},
								duration: (0, _getDuration2.default)(distance, size, property, _constants2.default.MOMENT_PRODUCTIVE, _constants2.default.EASE_IN_OUT, version, params)
							}), _ret3);
							break;
						}

					case _constants2.default.PROPERTY_MOVE:
					case _constants2.default.PROPERTY_SCALE:
					default:
						{
							var _ret4;

							ret = (_ret4 = {}, (0, _defineProperty3.default)(_ret4, _constants2.default.MOMENT_CELEBRATORY, {
								curves: {
									easeInOut: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_CELEBRATORY, _constants2.default.EASE_IN_OUT, version, params),
									easeIn: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_CELEBRATORY, _constants2.default.EASE_IN, version, params),
									easeOut: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_CELEBRATORY, _constants2.default.EASE_OUT, version, params)
								},
								duration: (0, _getDuration2.default)(distance, size, property, _constants2.default.MOMENT_CELEBRATORY, _constants2.default.EASE_IN_OUT, version, params)
							}), (0, _defineProperty3.default)(_ret4, _constants2.default.MOMENT_PRODUCTIVE, {
								curves: {
									easeInOut: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_PRODUCTIVE, _constants2.default.EASE_IN_OUT, version, params),
									easeIn: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_PRODUCTIVE, _constants2.default.EASE_IN, version, params),
									easeOut: (0, _getCurve2.default)(distance, size, property, _constants2.default.MOMENT_PRODUCTIVE, _constants2.default.EASE_OUT, version, params)
								},
								duration: (0, _getDuration2.default)(distance, size, property, _constants2.default.MOMENT_PRODUCTIVE, _constants2.default.EASE_IN_OUT, version, params)
							}), _ret4);
							break;
						}
				}
			}
	}

	ret = (0, _extends3.default)({}, ret, {
		'meta': {
			version: version,
			params: params,
			units: {
				duration: 'ms',
				distance: 'px'
			}
		},
		'input': {
			caller: params.caller || 'none',
			property: property,
			distance: distance,
			size: size,
			sizeFactorAdjuster: params.sizeFactorAdjuster
		}
	});

	return ret;
}; /*-----------------------------------------------------
    *	generates motion parameters based on the distance (amount of change) of the motion, and optionally the size of the element.
    *	@param 		{float}		distance - the distance or amount of change in pixels, or percent in the case of fade.
    *	@param 		{float} 	size - the size (area) of the element to be animated, in px^2. passing 20 will result in the standard speed.
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
   							* passing null for @param:mode will return a slightly different object that contains motion definitions for all three modes.
    */
exports.default = getMotion;