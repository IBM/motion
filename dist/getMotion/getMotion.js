'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

require('babel-polyfill');

var _getDuration = require('../getDuration');

var _getDuration2 = _interopRequireDefault(_getDuration);

var _getCurve = require('../getCurve');

var _getCurve2 = _interopRequireDefault(_getCurve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMotion = function getMotion() {
	var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
	var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
	var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'move';
	var version = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 7;
	var params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

	console.log('getMotion...', distance, size, property, version, params);

	params.durationMultiplier = params.durationMultiplier || 1;

	var ret = void 0;

	switch (version) {

		case 6:
			{
				var SIZE_BASE = 20;

				var sizeFactorNatural = Math.min(1.5, Math.pow(SIZE_BASE / size, 0.1 * params.sizeFactorAdjuster || 1)),
				    sizeFactorMechanical = Math.min(1.5, Math.pow(SIZE_BASE / size, 0.05 * params.sizeFactorAdjuster || 1));

				distance = parseFloat(distance);
				size = parseFloat(size);
				params.sizeFactorAdjuster = parseFloat(params.sizeFactorAdjuster);

				switch (property) {

					case 'fade':
						{
							ret = {
								natural: {
									curves: {
										easeInOut: (0, _getCurve2.default)(distance, size, property, 'natural', 'easeInOut', version, params),
										easeIn: (0, _getCurve2.default)(distance, size, property, 'natural', 'easeIn', version, params),
										easeOut: (0, _getCurve2.default)(distance, size, property, 'natural', 'easeOut', version, params)
									},
									duration: (0, _getDuration2.default)(distance, size, property, 'natural', 'easeInOut', version, params)
								},
								mechanical: {
									curves: {
										easeInOut: 'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
										easeIn: 'cubic-bezier(0.2, 0, 1, 0.9)',
										easeOut: 'cubic-bezier(0, 0, 0.38, 0.9)'
									},
									duration: (0, _getDuration2.default)(distance, size, property, 'mechanical', 'easeInOut', version, params)
								}
							};
							break;
						}

					case 'move':
					case 'scale':
					default:
						{
							ret = {
								natural: {
									curves: {
										easeInOut: 'cubic-bezier(0.4, 0.14, 0.3, 1)',
										easeIn: 'cubic-bezier(0.4, 0.14, 1, 1)',
										easeOut: 'cubic-bezier(0, 0, 0.3, 1)'
									},
									duration: (0, _getDuration2.default)(distance, size, property, 'natural', 'easeInOut', version, params)
								},
								mechanical: {
									curves: {
										easeInOut: 'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
										easeIn: 'cubic-bezier(0.2, 0, 1, 1)',
										easeOut: 'cubic-bezier(0, 0, 0.38, 0.9)'
									},
									duration: (0, _getDuration2.default)(distance, size, property, 'mechanical', 'easeInOut', version, params)
								}
							};
							break;
						}
				}
				break;
			}

		default:
		case 7:
			{

				var _SIZE_BASE = 20;

				var _sizeFactorNatural = Math.min(1.5, Math.pow(_SIZE_BASE / size, 0.1 * params.sizeFactorAdjuster || 1)),
				    _sizeFactorMechanical = Math.min(1.5, Math.pow(_SIZE_BASE / size, 0.05 * params.sizeFactorAdjuster || 1));

				distance = parseFloat(distance);
				size = parseFloat(size);
				params.sizeFactorAdjuster = parseFloat(params.sizeFactorAdjuster);

				switch (property) {

					case 'fade':
						{

							var adjustedSize = size / _SIZE_BASE * 100;

							ret = {
								natural: {
									curves: {
										easeInOut: 'cubic-bezier(0.4, 0.14, 0.3, 1)',
										easeIn: 'cubic-bezier(0.4, 0.14, 1, 1)',
										easeOut: 'cubic-bezier(0, 0, 0.3, 1)'
									},
									duration: (0, _getDuration2.default)(distance, size, property, 'natural', 'easeInOut', version, params)
								},
								mechanical: {
									curves: {
										easeInOut: 'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
										easeIn: 'cubic-bezier(0.2, 0, 1, 0.9)',
										easeOut: 'cubic-bezier(0, 0, 0.38, 0.9)'
									},
									duration: (0, _getDuration2.default)(distance, size, property, 'mechanical', 'easeInOut', version, params)
								}
							};
							break;
						}

					case 'move':
					case 'scale':
					default:
						{
							ret = {
								natural: {
									curves: {
										easeInOut: 'cubic-bezier(0.4, 0.14, 0.3, 1)',
										easeIn: 'cubic-bezier(0.4, 0.14, 1, 1)',
										easeOut: 'cubic-bezier(0, 0, 0.3, 1)'
									},
									duration: (0, _getDuration2.default)(distance, size, property, 'natural', 'easeInOut', version, params)
								},
								mechanical: {
									curves: {
										easeInOut: 'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
										easeIn: 'cubic-bezier(0.2, 0.1, 1, 1)',
										easeOut: 'cubic-bezier(0, 0, 0.38, 0.9)'
									},
									duration: (0, _getDuration2.default)(distance, size, property, 'mechanical', 'easeInOut', version, params)
								}
							};
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