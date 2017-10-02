import constants from './constants.js';

const getSizeFactor = (distance = 100, size = 20, motionMode = constants.PRODUCTIVE_MOTION, adjustmentFactor = 1) => Math.min(1.5, Math.pow(constants.SIZE_BASE /size, (motionMode === constants.PRODUCTIVE_MOTION ? 0.05 : 0.1) *adjustmentFactor || 1));

export default {
	getSizeFactor
};