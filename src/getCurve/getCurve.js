const CURVES = {
	['7']:{
		'fade':{
			natural:{
				curves:{
					easeInOut:'cubic-bezier(0.4, 0.14, 0.3, 1)',
					easeIn:'cubic-bezier(0.4, 0.14, 1, 1)',
					easeOut:'cubic-bezier(0, 0, 0.3, 1)'
				}
			},
			mechanical:{
				curves:{
					easeInOut:'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
					easeIn:'cubic-bezier(0.2, 0, 1, 0.9)',
					easeOut:'cubic-bezier(0, 0, 0.38, 0.9)'
				}
			}
		},
		'move':{
			natural:{
				curves:{
					easeInOut:'cubic-bezier(0.4, 0.14, 0.3, 1)',
					easeIn:'cubic-bezier(0.4, 0.14, 1, 1)',
					easeOut:'cubic-bezier(0, 0, 0.3, 1)'
				},
			},
			mechanical:{
				curves:{
					easeInOut:'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
					easeIn:'cubic-bezier(0.2, 0.1, 1, 1)',
					easeOut:'cubic-bezier(0, 0, 0.38, 0.9)'
				}
			}
		}
	},
	['6']:{
		'fade':{
			natural:{
				curves:{
					easeInOut:'cubic-bezier(0.4, 0.14, 0.3, 1)',
					easeIn:'cubic-bezier(0.4, 0.14, 1, 1)',
					easeOut:'cubic-bezier(0, 0, 0.3, 1)'
				}
			},
			mechanical:{
				curves:{
					easeInOut:'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
					easeIn:'cubic-bezier(0.2, 0, 1, 0.9)',
					easeOut:'cubic-bezier(0, 0, 0.38, 0.9)'
				}
			}
		},
		'move':{
			natural:{
				curves:{
					easeInOut:'cubic-bezier(0.4, 0.14, 0.3, 1)',
					easeIn:'cubic-bezier(0.4, 0.14, 1, 1)',
					easeOut:'cubic-bezier(0, 0, 0.3, 1)'
				}
			},
			mechanical:{
				curves:{
					easeInOut:'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
					easeIn:'cubic-bezier(0.2, 0, 1, 1)',
					easeOut:'cubic-bezier(0, 0, 0.38, 0.9)'
				}
			}
		}
	}
};

const getCurve = 
	(
		distance = 100, 
		size = 20, 
		property = 'move', 
		motionMode = 'mechanical', 
		easing = 'easeInOut', 
		version = 7, 
		params = {}
	) => CURVES[version][property === 'scale' ? 'move' : property][motionMode].curves[easing]
;

export default getCurve;
