# IBM motion

This package includes various tools to help with applying motion to user interfaces.

---

**Warning:** IBM Motion is in development and things may change. Look out for a stable release later this year (2017).

## Installation and build

```
$ npm install @ibm/motion
```

## Guidelines

**Note:** detailed motion guide will be published with the aforementioned stable release.

## Components

### getDuration

Calculate recommended duration based on various factors including distance, size.

```
import getDuration from '@ibm/motion';
console.log(getDuration(
	200, // distance of motion in pixels
	20, // size (area) of the element being animated. set to 20 for the standard size
	'move', // property. 'move', 'scale', 'fade'
	'mechanical', // motion mode. 'natural', 'mechanical'
	'easeInOut', // easing. 'easeInOut', 'easeIn', 'easeOut'
	7 // motion definition version. supports 6 and 7
)):

// returns a float value, duration in ms.
```

### getCurve

Calculate recommended bezier curve based on various factors including distance, size.

```
import getCurve from '@ibm/motion';
console.log(getCurve(
	200, // distance of motion in pixels
	20, // size (area) of the element being animated. set to 20 for the standard size
	'move', // property. 'move', 'scale', 'fade'
	'mechanical', // motion mode. 'natural', 'mechanical'
	'easeInOut', // easing. 'easeInOut', 'easeIn', 'easeOut'
	7 // motion definition version. supports 6 and 7
)):

// returns a float value, duration in ms.
```

### getMotion

Generate a full JavaScript object that contains durations and curves based on various factors including distance, size.

```
import getMotion from '@ibm/motion';
console.log(getMotion(
	200, // distance of motion in pixels
	20, // size (area) of the element being animated. set to 20 for the standard size
	'move', // property. 'move', 'scale', 'fade'
	'mechanical', // motion mode. 'natural', 'mechanical'
	'easeInOut', // easing. 'easeInOut', 'easeIn', 'easeOut'
	7 // motion definition version. supports 6 and 7
)):

// returns a float value, duration in ms.
```

