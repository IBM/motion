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
		console.log('getCurve!');
		return constants.curves[property][motionMode === constants.MOMENT_PRODUCTIVE ? 'n' : 'm'][constants.EASE_IN_OUT]
	}
;

export default getCurve;
