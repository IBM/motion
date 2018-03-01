import constants from './constants.js';

const curves = {
	[constants.PROPERTY_MOVE]:{
		[constants.MOMENT_EXPRESSIVE]:{
			"easeInOut":"cubic-bezier(0.4, 0.14, 0.3, 1)",
			"easeIn":"cubic-bezier(0.4, 0.14, 1, 1)",
			"easeOut":"cubic-bezier(0, 0, 0.3, 1)",
		},
		[constants.MOMENT_PRODUCTIVE]:{
			"easeInOut":"cubic-bezier(0.2, 0.2, 0.38, 0.9)",
			"easeIn":"cubic-bezier(0.2, 0, 1, 0.9)",
			"easeOut":"cubic-bezier(0, 0, 0.38, 0.9)",
		},
		[constants.MOMENT_NARRATIVE]:{
			"easeInOut":"cubic-bezier(0.29, 0.04, 0.23, 1)",
			"easeIn":"cubic-bezier(0.39, .06, 1, 1)",
			"easeOut":"cubic-bezier(0, 0, 0.3, 1)",
		},
		[constants.MOMENT_CELEBRATORY]:{
			"easeInOut":"cubic-bezier(0.29, 0.04, 0.23, 1)",
			"easeIn":"cubic-bezier(0.39, .06, 1, 1)",
			"easeOut":"cubic-bezier(0, 0, 0.3, 1)",
		}
	},
	[constants.PROPERTY_SCALE]:{
		[constants.MOMENT_EXPRESSIVE]:{
			"easeInOut":"cubic-bezier(0.4, 0.14, 0.3, 1)",
			"easeIn":"cubic-bezier(0.4, 0.14, 1, 1)",
			"easeOut":"cubic-bezier(0, 0, 0.3, 1)",
		},
		[constants.MOMENT_PRODUCTIVE]:{
			"easeInOut":"cubic-bezier(0.2, 0.2, 0.38, 0.9)",
			"easeIn":"cubic-bezier(0.2, 0, 1, 0.9)",
			"easeOut":"cubic-bezier(0, 0, 0.38, 0.9)",
		},
		[constants.MOMENT_NARRATIVE]:{
			"easeInOut":"cubic-bezier(0.29, 0.04, 0.23, 1)",
			"easeIn":"cubic-bezier(0.39, .06, 1, 1)",
			"easeOut":"cubic-bezier(0, 0, 0.3, 1)",
		},
		[constants.MOMENT_CELEBRATORY]:{
			"easeInOut":"cubic-bezier(0.29, 0.04, 0.23, 1)",
			"easeIn":"cubic-bezier(0.39, .06, 1, 1)",
			"easeOut":"cubic-bezier(0, 0, 0.3, 1)",
		}
	},
	[constants.PROPERTY_FADE]:{
		[constants.MOMENT_EXPRESSIVE]:{
			"easeInOut":"cubic-bezier(0.4, 0.14, 0.3, 1)",
			"easeIn":"cubic-bezier(0.4, 0.14, 1, 1)",
			"easeOut":"cubic-bezier(0, 0, 0.3, 1)",
		},
		[constants.MOMENT_PRODUCTIVE]:{
			"easeInOut":"cubic-bezier(0.2, 0.2, 0.38, 0.9)",
			"easeIn":"cubic-bezier(0.2, 0, 1, 0.9)",
			"easeOut":"cubic-bezier(0, 0, 0.38, 0.9)",
		},
		[constants.MOMENT_NARRATIVE]:{
			"easeInOut":"cubic-bezier(0.29, 0.04, 0.23, 1)",
			"easeIn":"cubic-bezier(0.39, .06, 1, 1)",
			"easeOut":"cubic-bezier(0, 0, 0.3, 1)",
		},
		[constants.MOMENT_CELEBRATORY]:{
			"easeInOut":"cubic-bezier(0.29, 0.04, 0.23, 1)",
			"easeIn":"cubic-bezier(0.39, .06, 1, 1)",
			"easeOut":"cubic-bezier(0, 0, 0.3, 1)",
		}
	},
	[constants.PROPERTY_ROTATE]:{
		[constants.MOMENT_EXPRESSIVE]:{
			"easeInOut":"cubic-bezier(0.4, 0.14, 0.3, 1)",
			"easeIn":"cubic-bezier(0.4, 0.14, 1, 1)",
			"easeOut":"cubic-bezier(0, 0, 0.3, 1)",
		},
		[constants.MOMENT_PRODUCTIVE]:{
			"easeInOut":"cubic-bezier(0.2, 0.2, 0.38, 0.9)",
			"easeIn":"cubic-bezier(0.2, 0, 1, 0.9)",
			"easeOut":"cubic-bezier(0, 0, 0.38, 0.9)",
		},
		[constants.MOMENT_NARRATIVE]:{
			"easeInOut":"cubic-bezier(0.29, 0.04, 0.23, 1)",
			"easeIn":"cubic-bezier(0.39, .06, 1, 1)",
			"easeOut":"cubic-bezier(0, 0, 0.3, 1)",
		},
		[constants.MOMENT_CELEBRATORY]:{
			"easeInOut":"cubic-bezier(0.29, 0.04, 0.23, 1)",
			"easeIn":"cubic-bezier(0.39, .06, 1, 1)",
			"easeOut":"cubic-bezier(0, 0, 0.3, 1)",
		}
	}
};

const motionModes = [constants.MOMENT_EXPRESSIVE, constants.MOMENT_PRODUCTIVE, constants.MOMENT_NARRATIVE, constants.MOMENT_CELEBRATORY];

const distances = {
	[constants.PROPERTY_MOVE]:[10, 25, 50, 75, 100, 200, 400, 800, 1600, 3200],
	[constants.PROPERTY_SCALE]:[100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600, 51200, 102400, 204800],
	[constants.PROPERTY_FADE]:[25, 50, 75, 100],
	[constants.PROPERTY_ROTATE]:[30, 60, 90, 120, 150, 180, 270, 360]
};

const sizes = '123456789'.split('').reduce( (prev, curr, i) => [...prev, prev[prev.length-1] * 4], [8*8]);

module.exports = {
	curves, distances, sizes, motionModes
}
