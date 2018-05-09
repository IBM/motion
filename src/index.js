import getCurve from "./getCurve.js";
import getDuration from "./getDuration.js";
import getMotion from "./getMotion.js";
import constants from "./constants.js";

const ret = {
	test:'test message',
	getCurve:getCurve,
	getDuration:getDuration,
	constants:constants,
};

console.log('exporting @ibm/motion/index.js', ret);

export default ret;