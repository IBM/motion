const getDuration = (distance = 100, size = 20, property = 'move', motionMode = 'mechanical', easing = 'ease-in-out', version = 7, params = {}) => {

	params.durationMultiplier = params.durationMultiplier || 1;
	distance = parseFloat(distance);
	size = parseFloat(size);
	params.sizeFactorAdjuster = parseFloat(params.sizeFactorAdjuster || 1);

	const 
		SIZE_BASE = 20
	;

	let ret,
		sizeFactorNatural = Math.min(1.5, Math.pow(SIZE_BASE /size, 0.1 *params.sizeFactorAdjuster || 1)),
		sizeFactorMechanical = Math.min(1.5, Math.pow(SIZE_BASE /size, 0.05 *params.sizeFactorAdjuster || 1))
	;

	console.log('getDuration...', distance, size, property, motionMode, easing, version, params);

	switch(version){

		case 6:{

			switch(property){

				case 'fade':{

					switch(motionMode){

						default:
						case 'mechanical':{
							ret = Math.max(6, 0.005357142857 *distance +3.257142857) /60 *1000 /sizeFactorMechanical *params.durationMultiplier;
							break;
						}

						case 'natural':{
							ret = Math.max(6, 0.01 *distance +5.4285714284) /60 *1000 /sizeFactorNatural *params.durationMultiplier;
							break;
						}
					}
					break;
				}

				case 'move':
				case 'scale':
				default:{

					switch(motionMode){

						default:
						case 'mechanical':{
							ret = Math.max(80, distance /(5 *distance +2500 *sizeFactorMechanical) *1000) *params.durationMultiplier;
							break;
						}

						case 'natural':{
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

				case 'fade':{

					let adjustedSize = size / SIZE_BASE *100;

					switch(motionMode){

						case 'natural':{
							ret = Math.max(
									0.01 *adjustedSize +130,
									0
								) *params.durationMultiplier
							;
							break;
						}

						case 'mechanical':{
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

				case 'move':
				case 'scale':
				default:{

					switch(motionMode){

						case 'natural':{
							ret = Math.max(
									Math.min(0.1 *distance +112, 142),
									distance /(3 *distance +1200 *sizeFactorNatural) *1000
								) *params.durationMultiplier
							;
							break;
						}

						default:
						case 'mechanical':{
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
