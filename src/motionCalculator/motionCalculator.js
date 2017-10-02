/*-----------------------------------------------------
 *	generates motion parameters based on the distance (amount of change) of the motion, and optionally the size of the element.
 *	@param 		{float}		distance - the distance or amount of change in pixels, or percent in the case of fade.
 *	@param 		{float} 	size - the size (area) of the element to be animated, in px^2. passing 20 will result in the standard speed.
 *	@param 		{string} 	mode - ["move"|"scale"|"fade"]. 
 * 	@param 		{int}		version - NOT USED IN THIS VERSION
 *	@param 		{object} 	params - NOT USED IN THIS VERSION
 *	@returns	{object}	an example return object structure is as follows
							{
								"meta":{
									"version":6,
									"params":{}
								},
								"input":{
									"distance":100
									"size":20
								},
								"natural":{
									"curves":{
										"easeInOut":"cubic-bezier(0.4, 0.14, 0.3, 1)",
										"easeIn":"cubic-bezier(0.4, 0.14, 1, 1)",
										"easeOut":"cubic-bezier(0, 0, 0.3, 1)"
									},
									"speed":1600,
									"duration":80
								},
								"mechanical":{
									"curves":{
										"easeInOut":'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
										"easeIn":'cubic-bezier(0.2, 0, 1, 0.9)',
										"easeOut":'cubic-bezier(0, 0, 0.38, 0.9)'
									},
									"speed":2100,
									"duration":60
								},
								speedUnit:'px/s',
								durationUnit:'ms'
							}
							* passing null for @param:mode will return a slightly different object that contains motion definitions for all three modes.
 */
import "babel-polyfill";
const motionCalculator = (distance, size = 20, mode = 'move', version = 7, params = {}) => {
	// console.log('motionCalc:motionCalculator...', size, params);

	params.durationMultiplier = params.durationMultiplier || 1;

	let ret;

	switch(version){

		case 6:{
			const 
				SIZE_BASE = 20
			;
			
			let 
				sizeFactorNatural = Math.min(1.5, Math.pow(SIZE_BASE /size, 0.1 *params.sizeFactorAdjuster || 1)),
				sizeFactorMechanical = Math.min(1.5, Math.pow(SIZE_BASE /size, 0.05 *params.sizeFactorAdjuster || 1))
			;

			distance = parseFloat(distance);
			size = parseFloat(size);
			params.sizeFactorAdjuster = parseFloat(params.sizeFactorAdjuster);

			switch(mode){

				case 'fade':{
					ret = {
						natural:{
							curves:{
								easeInOut:'cubic-bezier(0.4, 0.14, 0.3, 1)',
								easeIn:'cubic-bezier(0.4, 0.14, 1, 1)',
								easeOut:'cubic-bezier(0, 0, 0.3, 1)'
							},
							duration:Math.max(6, 0.01 *distance +5.4285714284) /60 *1000 /sizeFactorNatural *params.durationMultiplier
						},
						mechanical:{
							curves:{
								easeInOut:'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
								easeIn:'cubic-bezier(0.2, 0, 1, 0.9)',
								easeOut:'cubic-bezier(0, 0, 0.38, 0.9)'
							},
							duration:Math.max(6, 0.005357142857 *distance +3.257142857) /60 *1000 /sizeFactorMechanical *params.durationMultiplier
						}
					};
					break;
				}

				case 'move':
				case 'scale':
				default:{
					ret = {
						natural:{
							curves:{
								easeInOut:'cubic-bezier(0.4, 0.14, 0.3, 1)',
								easeIn:'cubic-bezier(0.4, 0.14, 1, 1)',
								easeOut:'cubic-bezier(0, 0, 0.3, 1)'
							},
							duration:Math.max(110, distance /(3 *distance +1200 *sizeFactorNatural) *1000) *params.durationMultiplier
						},
						mechanical:{
							curves:{
								easeInOut:'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
								easeIn:'cubic-bezier(0.2, 0, 1, 1)',
								easeOut:'cubic-bezier(0, 0, 0.38, 0.9)'
							},
							duration:Math.max(80, distance /(5 *distance +2500 *sizeFactorMechanical) *1000) *params.durationMultiplier
						}
					};
					break;
				}
			}
			break;
		}

		default:
		case 7:{

			const 
				SIZE_BASE = 20
			;
			
			let 
				sizeFactorNatural = Math.min(1.5, Math.pow(SIZE_BASE /size, 0.1 *params.sizeFactorAdjuster || 1)),
				sizeFactorMechanical = Math.min(1.5, Math.pow(SIZE_BASE /size, 0.05 *params.sizeFactorAdjuster || 1))
			;

			distance = parseFloat(distance);
			size = parseFloat(size);
			params.sizeFactorAdjuster = parseFloat(params.sizeFactorAdjuster);

			switch(mode){

				case 'fade':{

					let adjustedSize = size / SIZE_BASE *100;

					ret = {
						natural:{
							curves:{
								easeInOut:'cubic-bezier(0.4, 0.14, 0.3, 1)',
								easeIn:'cubic-bezier(0.4, 0.14, 1, 1)',
								easeOut:'cubic-bezier(0, 0, 0.3, 1)'
							},
							duration:Math.max(
								0.01 *adjustedSize +130,
								0
							) *params.durationMultiplier
						},
						mechanical:{
							curves:{
								easeInOut:'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
								easeIn:'cubic-bezier(0.2, 0, 1, 0.9)',
								easeOut:'cubic-bezier(0, 0, 0.38, 0.9)'
							},
							duration:Math.max(
								0.002 *adjustedSize +80,
								0
							) *params.durationMultiplier
						}
					}
					break;
				}

				case 'move':
				case 'scale':
				default:{
					ret = {
						natural:{
							curves:{
								easeInOut:'cubic-bezier(0.4, 0.14, 0.3, 1)',
								easeIn:'cubic-bezier(0.4, 0.14, 1, 1)',
								easeOut:'cubic-bezier(0, 0, 0.3, 1)'
							},
							duration:Math.max(
								Math.min(0.1 *distance +112, 142),
								distance /(3 *distance +1200 *sizeFactorNatural) *1000
							) *params.durationMultiplier
						},
						mechanical:{
							curves:{
								easeInOut:'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
								easeIn:'cubic-bezier(0.2, 0.1, 1, 1)',
								easeOut:'cubic-bezier(0, 0, 0.38, 0.9)'
							},
							duration:Math.max(
								Math.min(0.03 *distance +95, 140),
								distance /(5 *distance +2500 *sizeFactorMechanical) *1000
							) *params.durationMultiplier
						}
					};
					break;
				}
			}
		}
	}

	ret = {
		...ret,
		'meta':{
			version,
			params,
			units:{
				duration:'ms',
				distance:'px'
			}
		},
		'input':{
			caller:params.caller || 'none',
			mode,
			distance,
			size,
			sizeFactorAdjuster:params.sizeFactorAdjuster
		}
	};

	if(params.caller === 'OpacityTester') console.log('motionCalculator:ret===', ret);

	return ret;
}

export default motionCalculator;