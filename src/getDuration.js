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
		sizeFactorNatural = helpers.getSizeFactor(distance, size, constants.MOMENT_EXPRESSIVE, 1),
		sizeFactorMechanical = helpers.getSizeFactor(distance, size, constants.MOMENT_PRODUCTIVE, 1)
	;

	switch(property){

		case constants.PROPERTY_FADE:{

			const FADE_PRODUCTIVE_MIN = .12;
			const FADE_PRODUCTIVE_SLOPE = (.18 - FADE_PRODUCTIVE_MIN) / (1280000 - 1600);
			const FADE_PRODUCTIVE_DISPLACEMENT = FADE_PRODUCTIVE_MIN - FADE_EXPRESSIVE_SLOPE * 1600;

			const FADE_EXPRESSIVE_MIN = .22;
			const FADE_EXPRESSIVE_SLOPE = (.33 - FADE_EXPRESSIVE_MIN) / (1280000 - 1600);
			const FADE_EXPRESSIVE_DISPLACEMENT = FADE_EXPRESSIVE_MIN - FADE_EXPRESSIVE_SLOPE * 1600;

			const FADE_NARRATIVE_MIN = .12;
			const FADE_NARRATIVE_SLOPE = (.6 - FADE_NARRATIVE_MIN) / (1280000 - 1600);
			const FADE_NARRATIVE_DISPLACEMENT = FADE_NARRATIVE_MIN - FADE_EXPRESSIVE_SLOPE * 1600;

			let adjustedSize = size / SIZE_BASE *100;

			switch(motionMode){

				case constants.MOMENT_PRODUCTIVE:{
					ret = Math.max(
							FADE_PRODUCTIVE_SLOPE * size + FADE_PRODUCTIVE_DISPLACEMENT,
							FADE_PRODUCTIVE_MIN
						) *params.durationMultiplier
					;
					break;
				}

				case constants.MOMENT_EXPRESSIVE:{
					ret = Math.max(
							FADE_EXPRESSIVE_SLOPE * size + FADE_EXPRESSIVE_DISPLACEMENT,
							FADE_EXPRESSIVE_MIN
						) *params.durationMultiplier
					;
					break;
				}

				case constants.MOMENT_NARRATIVE:{
					ret = Math.max(
							FADE_NARRATIVE_SLOPE * size + FADE_NARRATIVE_DISPLACEMENT,
							FADE_NARRATIVE_MIN
						) *params.durationMultiplier
					;
					break;
				}
			}
			ret = ret * 1000;
			break;
		}

		case constants.PROPERTY_ROTATE:{

			const ROTATE_SIZE_SLOPE = 0.00001526251526;

			switch(motionMode){

				case constants.MOMENT_PRODUCTIVE:{
					ret = (2 * Math.sqrt(size * ROTATE_SIZE_SLOPE) + 4.7) / 5 * distance * 0.01666666667 + 2;
					break;
				}

				case constants.MOMENT_EXPRESSIVE:{
					ret = (5 * Math.sqrt(size * ROTATE_SIZE_SLOPE) + 9) / 8 * distance * 0.03 + 4;
					break;
				}

				case constants.MOMENT_NARRATIVE:{
					ret = (8 * Math.sqrt(size * ROTATE_SIZE_SLOPE) + 16) / 8 * distance * 0.03 + 7;
					break;
				}
			}
			ret = ret / 60 * 1000;
			break;
		}

		case constants.PROPERTY_MOVE:
		case constants.PROPERTY_SCALE:
		default:{

			const DISTANCE1 = 100;
			const DISTANCE2 = 1400;

			const SIZE_DUR1 = 200;
			const SIZE_DUR2 = 192;
			const SIZE_DISTANCE1 = 100 * 100;
			const SIZE_DISTANCE2 = 400 * 400;
			const SIZE_SLOPE = (SIZE_DUR2 - SIZE_DUR1) / (SIZE_DISTANCE2 - SIZE_DISTANCE1) / SIZE_DUR1;
			const SIZE_DISPLACEMENT = (SIZE_DUR2 - SIZE_DISTANCE2 * SIZE_SLOPE) / SIZE_DUR1;

			switch(motionMode){

				case constants.MOMENT_NARRATIVE:{

					const DUR1 = 201;
					const DUR2 = 369;
					
					const SLOPE = (DUR2 - DUR1) / (DISTANCE2 - DISTANCE1);
					const DISPLACEMENT = DUR1 - SLOPE * DISTANCE1;

					ret = SLOPE * distance + DISPLACEMENT;
					ret = ret * (size * SIZE_SLOPE + SIZE_DISPLACEMENT);
					break;
				}

				case constants.MOMENT_EXPRESSIVE:{
					
					const DUR1 = 128;
					const DUR2 = 268;
					
					const SLOPE = (DUR2 - DUR1) / (DISTANCE2 - DISTANCE1);
					const DISPLACEMENT = DUR1 - SLOPE * DISTANCE1;

					ret = SLOPE * distance + DISPLACEMENT;
					ret = ret * (size * SIZE_SLOPE + SIZE_DISPLACEMENT);

					break;
				}

				default:
				case constants.MOMENT_PRODUCTIVE:{
					
					const DUR1 = 90;
					const DUR2 = 190;
					
					const SLOPE = (DUR2 - DUR1) / (DISTANCE2 - DISTANCE1);
					const DISPLACEMENT = DUR1 - SLOPE * DISTANCE1;

					ret = SLOPE * distance + DISPLACEMENT;
					ret = ret * (size * SIZE_SLOPE + SIZE_DISPLACEMENT);
					break;
				}
			}
			break;
		}
	}

	return ret;
}

export default getDuration;
