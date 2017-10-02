import constants from '../constants'
import helpers from '../helpers.js';

const getDuration = (distance = 100, size = 20, property = constants.PROPERTY_MOVE, motionMode = constants.MOMENT_PRODUCTIVE, easing = constants.EASE_IN_OUT, version = 7, params = {}) => {

	params.durationMultiplier = params.durationMultiplier || 1;
	distance = parseFloat(distance);
	size = parseFloat(size);
	params.sizeFactorAdjuster = parseFloat(params.sizeFactorAdjuster || 1);

	const 
		SIZE_BASE = constants.SIZE_BASE
	;

	let 
		ret,
		sizeFactorNatural = helpers.getSizeFactor(distance, size, constants.MOMENT_CELEBRATORY, 1),
		sizeFactorMechanical = helpers.getSizeFactor(distance, size, constants.MOMENT_PRODUCTIVE, 1)
	;

	switch(version){

		case 6:{

			switch(property){

				case constants.PROPERTY_FADE:{

					switch(motionMode){

						default:
						case constants.MOMENT_PRODUCTIVE:{
							ret = Math.max(6, 0.005357142857 *distance +3.257142857) /60 *1000 /sizeFactorMechanical *params.durationMultiplier;
							break;
						}

						case constants.MOMENT_CELEBRATORY:{
							ret = Math.max(6, 0.01 *distance +5.4285714284) /60 *1000 /sizeFactorNatural *params.durationMultiplier;
							break;
						}
					}
					break;
				}

				case constants.PROPERTY_MOVE:
				case constants.PROPERTY_SCALE:
				default:{

					switch(motionMode){

						default:
						case constants.MOMENT_PRODUCTIVE:{
							ret = Math.max(80, distance /(5 *distance +2500 *sizeFactorMechanical) *1000) *params.durationMultiplier;
							break;
						}

						case constants.MOMENT_CELEBRATORY:{
							ret = Math.max(110, distance /(3 *distance +1200 *sizeFactorNatural) *1000) *params.durationMultiplier;
							break;
						}
					}
					break;
				}
			}
			break;
		}

		default:
		case 7:{

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
		}
	}

	return ret;
}

export default getDuration;
