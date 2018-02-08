import configConstnats from './config-constants.js';
import constants from './constants.js';

const getCurve = 
	(
		distance = 100, 
		size = 20, 
		property = constants.PROPERTY_MOVE, 
		motionMode = constants.MOMENT_PRODUCTIVE, 
		easing = constants.EASE_IN_OUT, 
		version = 7, 
		params = {}
	) => {
		return configConstnats.curves[property][motionMode][easing]
	}
;

export default getCurve;
