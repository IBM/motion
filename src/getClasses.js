/*-----------------------------------------------------
 *	use this function to get approxmiation classes
 */

import configConstants from './config-constants.js';
import constants from './constants.js';

const getClasses = 
	(
		distance = 100, 
		size = 20, 
		property = constants.PROPERTY_MOVE, 
		motionMode = constants.MOMENT_PRODUCTIVE, 
		easing = constants.EASE_IN_OUT, 
		version = 7, 
		params = {}
	) => {

		let theParameter;

		switch(property){
			case constants.PROPERTY_SCALE: 
				theParameter = configConstants.sizes.reduce( (prev, curr, i) => Math.abs(size - curr) < Math.abs(size - prev) ? curr : prev, 99999999999); 
				break;
			default: 
				theParameter = configConstants.distances[property].reduce( (prev, curr, i) => Math.abs(distance - curr) < Math.abs(distance - prev) ? curr : prev, 99999999999);
				break;
		}

		return `.ibm-motion-${motionMode}-${property}-dur-${theParameter} .ibm-motion-${motionMode}-${property}-${{
			[constants.EASE_IN_OUT]:'ease-in-out',
			[constants.EASE_IN]:'ease-in',
			[constants.EASE_OUT]:'ease-out'
		}[easing]}`
	}
;

export default getClasses;