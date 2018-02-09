# IBM motion

This package includes various tools to help with applying motion to user interfaces.

## Introduction

Designing and applying consistent motion for a system of components, pages or interfaces, and / or across multiple platforms can be challenging. What makes things even more challenging is the fact that most of these experiences are also dynamic and responsive.

Motion in interface design is defined by many things such as the property that is being animated, path, choreography - this package primarily addresses two very fundamental elements that directly impacts the quality of a motion - the acceleration curve (AKA easing, timing), and the duration of the motion.

### Core concepts

#### Motion modes

This package recognizes that there is a need for multiple types of motion for different moments. Currently it supports two type of motions for different moments - the productive motion that is efficient and quick, ideal for micro interactions, and the  expressive motion for more conversational exprience. Much attention has been given to maintaining consistency between these two modes - even though they use different acceleration curves and different duration, they feel the same.

#### Dynamic duration

The duration should change depending on the distance (or the amount of scaling or fading). The duration also should be influenced by the size of the element - a larger element should slow down a bit. This package supports both. Furthermore, this package uses a non-linear algorithm when calculating the duration that makes an element move slightly faster when the distance is larger to maintain perceived consistency.

---

**Warning:** IBM Motion is in development and things may change. Look out for a stable release later this year (2018).

## Installation and build

```
$ npm install @ibm/motion
```

## Demo site

This package includes a simple demo site.

```
$ npm install
$ gulp
$ npm start
```

## Guidelines

**Note:** detailed motion guide will be published with the aforementioned stable release.

### Transition timing function classes (easing)

This package provides classes that sets the `transition-timing-function` and `transition-duration` rules on your element.

## Motion generator

A tool to make it easy to use IBM Motion is available at: https://ibm.github.io/motion/

|---|---|---|

## JavascriptcComponents of this package

### getDuration() method

Calculate recommended duration based on various factors including distance, size.

```
import getDuration from '@ibm/motion/getDuration.js';
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

### getCurve() method

Calculate recommended bezier curve based on various factors including distance, size.

```
import getCurve from '@ibm/motion/getCurve.js';
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

### getMotion() method

Generate a full JavaScript object that contains durations and curves based on various factors including distance, size.

```
import getMotion from '@ibm/motion/getMotion.js';
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

## Motion Classes

This package includes classes for easier implementation of IBM motions.

### Transition timing function classes (easing)

These classes follow this pattern:

`ibm-motion-[motion mode:expr|prod]-[property:move|scale|rotate|fade]-[ease-in-out|ease-in|ease-out]`

Examples:

`ibm-motion-expr-move-ease-in-out`

### Transition duration classes

These classes allow you to simply use classes to approximate the dynamic duration instead of using the JavaScript function to calculate on the fly.

The classes for `move` use distance of the travel and follow this pattern:

`ibm-motion-[motion mode:expr|prod]-[property:move|scale|fade|rotate]-dur-[distance steps:10|25|50|75|100|200|400|800|1600|3200]`

The classes for `fade` use amount of opacity change and follow this pattern:

`ibm-motion-[motion mode:expr|prod]-[property:move|scale|fade|rotate]-dur-[distance steps:25|50|75|100]`

The classes for `rotate` use amount of angle change and follow this pattern:

`ibm-motion-[motion mode:expr|prod]-[property:move|scale|fade|rotate]-dur-[distance steps:30|60|90|120|150|180|270|360]`

The classes for `scale` uses the size change as the differentiator and follows this pattern:

`ibm-motion-[motion mode:expr|prod]-[property:move|scale|fade|rotate]-dur-[width*height steps:64|256|1024|4096|16384|65536|262144|1048576|4194304|16777216]`

