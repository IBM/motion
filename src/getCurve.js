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
	) => ({
			['7']:{
				[constants.PROPERTY_FADE]:{
					[constants.MOMENT_CELEBRATORY]:{
						curves:{
							easeInOut:'cubic-bezier(0.4, 0.14, 0.3, 1)',
							easeIn:'cubic-bezier(0.4, 0.14, 1, 1)',
							easeOut:'cubic-bezier(0, 0, 0.3, 1)',
						},
					},
					[constants.MOMENT_PRODUCTIVE]:{
						curves:{
							easeInOut:'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
							easeIn:'cubic-bezier(0.2, 0, 1, 0.9)',
							easeOut:'cubic-bezier(0, 0, 0.38, 0.9)',
						},
					},
				},
				[constants.PROPERTY_MOVE]:{
					[constants.MOMENT_CELEBRATORY]:{
						curves:{
							easeInOut:'cubic-bezier(0.4, 0.14, 0.3, 1)',
							easeIn:'cubic-bezier(0.4, 0.14, 1, 1)',
							easeOut:'cubic-bezier(0, 0, 0.3, 1)',
						},
					},
					[constants.MOMENT_PRODUCTIVE]:{
						curves:{
							easeInOut:'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
							easeIn:'cubic-bezier(0.2, 0.1, 1, 1)',
							easeOut:'cubic-bezier(0, 0, 0.38, 0.9)',
						},
					},
				},
				[constants.PROPERTY_ROTATE]:{
					[constants.MOMENT_CELEBRATORY]:{
						curves:{
							easeInOut:'cubic-bezier(0.4, 0.14, 0.3, 1)',
							easeIn:'cubic-bezier(0.4, 0.14, 1, 1)',
							easeOut:'cubic-bezier(0, 0, 0.3, 1)',
						},
					},
					[constants.MOMENT_PRODUCTIVE]:{
						curves:{
							easeInOut:'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
							easeIn:'cubic-bezier(0.2, 0.1, 1, 1)',
							easeOut:'cubic-bezier(0, 0, 0.38, 0.9)',
						},
					},
				},
			},
		})['7'][property === constants.PROPERTY_SCALE || property === constants.PROPERTY_ROTATE ? constants.PROPERTY_MOVE : property][motionMode].curves[easing]
;

export default getCurve;
