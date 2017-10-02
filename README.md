# IBM motion

This package includes various tools to help with applying motion to user interfaces.

## Components

### getDuration

```
import getDuration from '@ibm/motion';
console.log(getDuration(
	200, // distance of motion
	20, // size. set to 20 for the standard size
	'move', // property. 'move', 'scale', 'fade'
	'mechanical', // motion mode. 'natural', 'mechanical'
	'easeInOut', // easing. 'easeInOut', 'easeIn', 'easeOut'
	7 // motion definition version. supports 6 and 7
)):
```

### getCurve

```
import getDuration from '@ibm/motion';
console.log(getCurve(
	200, // distance of motion
	20, // size. set to 20 for the standard size
	'move', // property. 'move', 'scale', 'fade'
	'mechanical', // motion mode. 'natural', 'mechanical'
	'easeInOut', // easing. 'easeInOut', 'easeIn', 'easeOut'
	7 // motion definition version. supports 6 and 7
)):
```

### getMotion

```
import getDuration from '@ibm/motion';
console.log(getMotion(
	200, // distance of motion
	20, // size. set to 20 for the standard size
	'move', // property. 'move', 'scale', 'fade'
	'mechanical', // motion mode. 'natural', 'mechanical'
	'easeInOut', // easing. 'easeInOut', 'easeIn', 'easeOut'
	7 // motion definition version. supports 6 and 7
)):
```

