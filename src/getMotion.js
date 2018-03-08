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
import getDuration from './getDuration';
import getCurve from './getCurve';
import constants from './constants'
import helpers from './helpers';
const getMotion = (
	_distance = 100, 
	_size = 16, 
	property = constants.PROPERTY_MOVE, 
	motionMode = constants.MOMENT_PRODUCTIVE, 
	easing = constants.EASE_IN_OUT, 
	unit = 'rem', remSize = 16,
) => {
	// console.log('getMotion...', distance, size, property, version, params);

	const 
		SIZE_BASE = constants.SIZE_BASE
	;
	
	let 
		sizeFactorNatural = helpers.getSizeFactor(distance, size, constants.MOMENT_EXPRESSIVE, 1),
		sizeFactorMechanical = helpers.getSizeFactor(distance, size, constants.MOMENT_PRODUCTIVE, 1)
	;

	let distance = parseFloat(_distance);
	let size = parseFloat(_size);
	
	let meta = {
		version,
		units:{
			duration:'ms',
			distance:'px',
		},
	};

	let input = {
		caller:params.caller || 'none',
		property,
		distance,
		size,
	}

	let ret;
	switch(property){

		case constants.PROPERTY_FADE:{

			let adjustedSize = size / SIZE_BASE *100;

			ret = {
				meta,
				input,
				[constants.MOMENT_EXPRESSIVE]:{
					curves:{
						easeInOut:getCurve(
							distance, 
							size, 
							property, 
							constants.MOMENT_EXPRESSIVE, 
							constants.EASE_IN_OUT, 
							unit, unitSize
						),
						easeIn:getCurve(
							distance, 
							size, 
							property, 
							constants.MOMENT_EXPRESSIVE, 
							constants.EASE_IN, 
							unit, unitSize
						),
						easeOut:getCurve(
							distance, 
							size, 
							property, 
							constants.MOMENT_EXPRESSIVE, 
							constants.EASE_OUT, 
							unit, unitSize
						),
					},
					duration:getDuration(
						distance, 
						size, 
						property, 
						constants.MOMENT_EXPRESSIVE, 
						constants.EASE_IN_OUT, 
						unit, unitSize
					),
				},
				[constants.MOMENT_PRODUCTIVE]:{
					curves:{
						easeInOut:getCurve(
							distance, 
							size, 
							property, 
							constants.MOMENT_PRODUCTIVE, 
							constants.EASE_IN_OUT, 
							unit, unitSize
						),
						easeIn:getCurve(
							distance, 
							size, 
							property, 
							constants.MOMENT_PRODUCTIVE, 
							constants.EASE_IN, 
							unit, unitSize
						),
						easeOut:getCurve(
							distance, 
							size, 
							property, 
							constants.MOMENT_PRODUCTIVE, 
							constants.EASE_OUT, 
							unit, unitSize
						),
					},
					duration:getDuration(
						distance, 
						size, 
						property, 
						constants.MOMENT_PRODUCTIVE, 
						constants.EASE_IN_OUT, 
						unit, unitSize
					),
				},
			}
			break;
		}

		case constants.PROPERTY_ROTATE:
		case constants.PROPERTY_MOVE:
		case constants.PROPERTY_SCALE:
		default:{
			ret = {
				meta,
				input,
				[constants.MOMENT_EXPRESSIVE]:{
					curves:{
						easeInOut:getCurve(
							distance, 
							size, 
							property, 
							constants.MOMENT_EXPRESSIVE, 
							constants.EASE_IN_OUT, 
							unit, unitSize
						),
						easeIn:getCurve(
							distance, 
							size, 
							property, 
							constants.MOMENT_EXPRESSIVE, 
							constants.EASE_IN, 
							unit, unitSize
						),
						easeOut:getCurve(
							distance, 
							size, 
							property, 
							constants.MOMENT_EXPRESSIVE, 
							constants.EASE_OUT, 
							unit, unitSize
						),
					},
					duration:getDuration(
						distance, 
						size, 
						property, 
						constants.MOMENT_EXPRESSIVE, 
						constants.EASE_IN_OUT, 
						unit, unitSize
					),
				},
				[constants.MOMENT_PRODUCTIVE]:{
					curves:{
						easeInOut:getCurve(
							distance, 
							size, 
							property, 
							constants.MOMENT_PRODUCTIVE, 
							constants.EASE_IN_OUT, 
							unit, unitSize
						),
						easeIn:getCurve(
							distance, 
							size, 
							property, 
							constants.MOMENT_PRODUCTIVE, 
							constants.EASE_IN, 
							unit, unitSize
						),
						easeOut:getCurve(
							distance, 
							size, 
							property, 
							constants.MOMENT_PRODUCTIVE, 
							constants.EASE_OUT, 
							unit, unitSize
						),
					},
					duration:getDuration(
						distance, 
						size, 
						property, 
						constants.MOMENT_PRODUCTIVE, 
						constants.EASE_IN_OUT, 
						unit, unitSize
					),
				},
			};
			break;
		}
	}

	return ret;
}

export default getMotion;