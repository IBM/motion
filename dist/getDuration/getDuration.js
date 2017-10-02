'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getDuration = function getDuration() {
	var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
	var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
	var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'move';
	var motionMode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'mechanical';
	var easing = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'ease-in-out';
	var version = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 7;
	var params = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};


	params.durationMultiplier = params.durationMultiplier || 1;
	distance = parseFloat(distance);
	size = parseFloat(size);
	params.sizeFactorAdjuster = parseFloat(params.sizeFactorAdjuster || 1);

	var SIZE_BASE = 20;

	var ret = void 0,
	    sizeFactorNatural = Math.min(1.5, Math.pow(SIZE_BASE / size, 0.1 * params.sizeFactorAdjuster || 1)),
	    sizeFactorMechanical = Math.min(1.5, Math.pow(SIZE_BASE / size, 0.05 * params.sizeFactorAdjuster || 1));

	console.log('getDuration...', distance, size, property, motionMode, easing, version, params);

	switch (version) {

		case 6:
			{

				switch (property) {

					case 'fade':
						{

							switch (motionMode) {

								default:
								case 'mechanical':
									{
										ret = Math.max(6, 0.005357142857 * distance + 3.257142857) / 60 * 1000 / sizeFactorMechanical * params.durationMultiplier;
										break;
									}

								case 'natural':
									{
										ret = Math.max(6, 0.01 * distance + 5.4285714284) / 60 * 1000 / sizeFactorNatural * params.durationMultiplier;
										break;
									}
							}
							break;
						}

					case 'move':
					case 'scale':
					default:
						{

							switch (motionMode) {

								default:
								case 'mechanical':
									{
										ret = Math.max(80, distance / (5 * distance + 2500 * sizeFactorMechanical) * 1000) * params.durationMultiplier;
										break;
									}

								case 'natural':
									{
										ret = Math.max(110, distance / (3 * distance + 1200 * sizeFactorNatural) * 1000) * params.durationMultiplier;
										break;
									}
							}
							break;
						}
				}
				break;
			}

		default:
		case 7:
			{

				switch (property) {

					case 'fade':
						{

							var adjustedSize = size / SIZE_BASE * 100;

							switch (motionMode) {

								case 'natural':
									{
										ret = Math.max(0.01 * adjustedSize + 130, 0) * params.durationMultiplier;
										break;
									}

								case 'mechanical':
									{
										ret = Math.max(0.002 * adjustedSize + 80, 0) * params.durationMultiplier;
										break;
									}
							}
							break;
						}

					case 'move':
					case 'scale':
					default:
						{

							switch (motionMode) {

								case 'natural':
									{
										ret = Math.max(Math.min(0.1 * distance + 112, 142), distance / (3 * distance + 1200 * sizeFactorNatural) * 1000) * params.durationMultiplier;
										break;
									}

								default:
								case 'mechanical':
									{
										ret = Math.max(Math.min(0.03 * distance + 95, 140), distance / (5 * distance + 2500 * sizeFactorMechanical) * 1000) * params.durationMultiplier;
										break;
									}
							}
							break;
						}
				}
			}
	}

	return ret;
};

exports.default = getDuration;