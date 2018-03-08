import configConstnats from './config-constants.js';
import constants from './constants.js';

const getCurve = 
	(
		_distance = 100, 
		_size = 16, 
		property = constants.PROPERTY_MOVE, 
		motionMode = constants.MOMENT_PRODUCTIVE, 
		easing = constants.EASE_IN_OUT, 
		unit = 'rem', remSize = 16,
	) => {
		return configConstnats.curves[property][motionMode][easing]
	}
;

export default getCurve;
