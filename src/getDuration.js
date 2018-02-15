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
							0.0000000391113892365457 * size + 0.179937421777222,
							0.18
						) *params.durationMultiplier
					;
					break;
				}

				case constants.MOMENT_PRODUCTIVE:{
					ret = Math.max(
							0.0000000469336670838548 * size + 0.119924906132666,
							0.1
						) *params.durationMultiplier
					;
					break;
				}
			}
			console.log('getDuration:fade:', ret);
			ret = ret * 1000;
			console.log('getDuration:fade:', ret);
			break;
		}

		case constants.PROPERTY_ROTATE:{

			switch(motionMode){

				case constants.MOMENT_CELEBRATORY:{
					ret = (5 * Math.sqrt(size * 0.00001526251526) + 9) / 8 * distance * 0.03 + 4;
					break;
				}

				case constants.MOMENT_PRODUCTIVE:{
					ret = (2 * Math.sqrt(size * 0.00001526251526) + 4.7) / 5 * distance * 0.01666666667 + 2;
					break;
				}
			}
			ret = ret / 60 * 1000;
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
