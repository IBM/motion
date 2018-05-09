import getCurve from './getCurve.js';
import getDuration from './getDuration.js';

const ret = {
	getCurve,
	getDuration
};

console.log('exporting @ibm/motion/motion.js', ret);

window.IBM = window.IBM || {};
window.IBM.motion = ret;
