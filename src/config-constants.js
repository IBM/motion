import constants from './constants.js';

const curves = {
	"move":{
		"expr":{
			"easeInOut":"cubic-bezier(0.4, 0.14, 0.3, 1)",
			"easeIn":"cubic-bezier(0.4, 0.14, 1, 1)",
			"easeOut":"cubic-bezier(0, 0, 0.3, 1)",
		},
		"prod":{
			"easeInOut":"cubic-bezier(0.2, 0.2, 0.38, 0.9)",
			"easeIn":"cubic-bezier(0.2, 0, 1, 0.9)",
			"easeOut":"cubic-bezier(0, 0, 0.38, 0.9)",
		}
	},
	"scale":{
		"expr":{
			"easeInOut":"cubic-bezier(0.4, 0.14, 0.3, 1)",
			"easeIn":"cubic-bezier(0.4, 0.14, 1, 1)",
			"easeOut":"cubic-bezier(0, 0, 0.3, 1)",
		},
		"prod":{
			"easeInOut":"cubic-bezier(0.2, 0.2, 0.38, 0.9)",
			"easeIn":"cubic-bezier(0.2, 0, 1, 0.9)",
			"easeOut":"cubic-bezier(0, 0, 0.38, 0.9)",
		}
	},
	"fade":{
		"expr":{
			"easeInOut":"cubic-bezier(0.4, 0.14, 0.3, 1)",
			"easeIn":"cubic-bezier(0.4, 0.14, 1, 1)",
			"easeOut":"cubic-bezier(0, 0, 0.3, 1)",
		},
		"prod":{
			"easeInOut":"cubic-bezier(0.2, 0.2, 0.38, 0.9)",
			"easeIn":"cubic-bezier(0.2, 0, 1, 0.9)",
			"easeOut":"cubic-bezier(0, 0, 0.38, 0.9)",
		}
	},
	"rotate":{
		"expr":{
			"easeInOut":"cubic-bezier(0.4, 0.14, 0.3, 1)",
			"easeIn":"cubic-bezier(0.4, 0.14, 1, 1)",
			"easeOut":"cubic-bezier(0, 0, 0.3, 1)",
		},
		"prod":{
			"easeInOut":"cubic-bezier(0.2, 0.2, 0.38, 0.9)",
			"easeIn":"cubic-bezier(0.2, 0, 1, 0.9)",
			"easeOut":"cubic-bezier(0, 0, 0.38, 0.9)",
		}
	}
};

const motionModes = [constants.MOMENT_CELEBRATORY, constants.MOMENT_PRODUCTIVE];

const distances = {
	"move":[10, 25, 50, 75, 100, 200, 400, 800, 1600, 3200],
	"scale":[100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600, 51200, 102400, 204800],
	"fade":[25, 50, 75, 100],
	"rotate":[30, 60, 90, 120, 150, 180, 270, 360]
};

const sizes = [
	'123456789'.split('').reduce( (prev, curr, i) => [...prev, prev[prev.length-1] * 4], [8*8])
];

module.exports = {
	curves, distances, sizes, motionModes
}
