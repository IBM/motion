import constants from './constants'
import helpers from './helpers';

const getDuration = (
	_distance = 100, 
	_size = 20, 
	property = constants.PROPERTY_MOVE, 
	motionMode = constants.MOMENT_PRODUCTIVE, 
	easing = constants.EASE_IN_OUT, 
	version = 7, 
	params = {}
) => {

	let distance = parseFloat(_distance);
	let size = parseFloat(_size);
	params.durationMultiplier = params.durationMultiplier || 1;
	params.sizeFactorAdjuster = parseFloat(params.sizeFactorAdjuster || 1);

	const 
		SIZE_BASE = constants.SIZE_BASE
	;

	let 
		ret,
		sizeFactorNatural = helpers.getSizeFactor(distance, size, constants.MOMENT_CELEBRATORY, 1),
		sizeFactorMechanical = helpers.getSizeFactor(distance, size, constants.MOMENT_PRODUCTIVE, 1)
	;

	switch(property){

		case constants.PROPERTY_FADE:{

			let adjustedSize = size / SIZE_BASE *100;

			switch(motionMode){

				case constants.MOMENT_CELEBRATORY:{
					ret = Math.max(
							0.01 *adjustedSize +130,
							0
						) *params.durationMultiplier
					;
					break;
				}

				case constants.MOMENT_PRODUCTIVE:{
					ret = Math.max(
							0.002 *adjustedSize +80,
							0
						) *params.durationMultiplier
					;
					break;
				}
			}
			break;
		}

		case constants.PROPERTY_MOVE:
		case constants.PROPERTY_SCALE:
		default:{

			switch(motionMode){

				case constants.MOMENT_CELEBRATORY:{
					ret = Math.max(
							Math.min(0.1 *distance +112, 142),
							distance /(3 *distance +1200 *sizeFactorNatural) *1000
						) *params.durationMultiplier
					;
					break;
				}

				default:
				case constants.MOMENT_PRODUCTIVE:{
					ret = Math.max(
							Math.min(0.03 *distance +95, 140),
							distance /(5 *distance +2500 *sizeFactorMechanical) *1000
						) *params.durationMultiplier
					;
					break;
				}
			}
			break;
		}
	}

	return ret;
}

export default getDuration;
