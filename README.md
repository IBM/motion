# IBM motion

This package includes various tools to help with applying motion to user interfaces.

## Introduction

Designing and applying consistent motion for a system of components, pages or interfaces, and / or across multiple platforms can be challenging. What makes things even more challenging is the fact that most of these experiences are also dynamic and responsive.

Motion in interface design is defined by many things such as the property that is being animated, path, choreography - this package primarily addresses two very fundamental elements that directly impacts the quality of a motion - the acceleration curve (AKA easing, timing), and the duration of the motion.

### Core concepts

#### Moments

This package recognizes that there is a need for multiple types of motion for different moments. Currently it supports two type of moments, the productive moment that is efficient and quick for micro interactions, and the celebratory moment for more conversational exprience. Much attention has been given to maintaining consistency between these two moments - even though they use different acceleration curves and different duration, they feel the same.

#### Dynamic duration

The duration should change depending on the distance (or the amount of scaling or fading). The duration also should be influenced by the size of the element - a larger element should slow down a bit. This package supports both. Furthermore, this package uses a non-linear algorithm when calculating the duration that makes an element move slightly faster when the distance is larger to maintain perceived consistency.

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
));

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
));

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
));

// returns a float value, duration in ms.
```

