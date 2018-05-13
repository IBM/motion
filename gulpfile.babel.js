'use strict';

const browserify = require('browserify');
const gulp = require('gulp');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const gutil = require('gulp-util');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const babelify = require('babelify');
const sass = require('gulp-sass');
const gulpFn  = require('gulp-fn');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const fs = require('fs');
const autoprefixer = require('gulp-autoprefixer');
const gulpCopy = require('gulp-copy');

const motionConstants = require('./src/config-constants.js');
import getDuration from './src/getDuration.js';

gulp.task('build-script-index', function () {

    browserify({entries: './src/index.js', extensions: ['.js'], debug: true, standalone:'motion'})
		.transform(babelify)
		.bundle()
		.pipe(source('index.js'))
		.pipe(gulp.dest('dist'))
	;

});

gulp.task('build-script-getDuration', function () {

    browserify({entries: './src/getDuration.js', extensions: ['.js'], debug: true, standalone:'getDuration'})
		.transform(babelify)
		.bundle()
		.pipe(source('getDuration.js'))
		.pipe(gulp.dest('dist'))
	;

});

gulp.task('build-script-getCurve', function () {

    browserify({entries: './src/getCurve.js', extensions: ['.js'], debug: true, standalone:'getCurve'})
		.transform(babelify)
		.bundle()
		.pipe(source('getCurve.js'))
		.pipe(gulp.dest('dist'))
	;

});
/*
gulp.task('copy-config-constants', () => {
	return gulp
		.src('./src/config-constants.js')
	    .pipe(gulp.dest('dist'))
	;
});

gulp.task('copy-constants', () => {
	return gulp
		.src('./src/constants.js')
	    .pipe(gulp.dest('dist'))
	;
});

gulp.task('copy-helpers', () => {
	return gulp
		.src('./src/helpers.js')
	    .pipe(gulp.dest('dist'))
	;
});
*/
gulp.task('build-script', [
	'build-script-index', 
	'build-script-getDuration',
	'build-script-getCurve',
	// 'copy-config-constants', 
	// 'copy-constants', 
	// 'copy-helpers'
]);

function buildSassFiles(){

	//-----------------------------------------------------
	//	Curves
	let output = `$curves:(${
	Object.keys(motionConstants.curves).map( (propKey, propI) => 
	`
		"${propKey}":(
			${Object.keys(motionConstants.curves[propKey]).map( (motionModeKey, motionModeI) => `
				"${motionModeKey}":(
					${Object.keys(motionConstants.curves[propKey][motionModeKey]).map( (easingKey, easingI) => `
						"${{
								['easeInOut']:'ease-in-out',
								['easeIn']:'ease-in',
								['easeOut']:'ease-out'
							}[easingKey]}":"${motionConstants.curves[propKey][motionModeKey][easingKey]}"`)}
				)`)}
		)`
	)}
);`;

	if(fs.existsSync('./_temp') !== true){
		fs.mkdirSync('_temp');
	}
	fs.writeFileSync('./_temp/curves.scss', output);

	//-----------------------------------------------------
	//	duration scale
	output = `${
		Object.keys(motionConstants.distances).map( propKey => 
			motionConstants.motionModes.map( motionMode =>
				motionConstants.distances[propKey].map( distance => 				
`.ibm-motion-${motionMode}-${propKey}-dur-${distance}{
	transition-duration:${Math.round(getDuration(distance, 250, propKey, motionMode))}ms;
}
`
				).join('')
			).join('')
		).join('')
	}`;
	fs.writeFileSync('./_temp/durations.scss', output);

}

gulp.task('demo-sass', () => {

	return gulp
		.src('src-demo/styles/index.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(base64())
		.pipe(rename('index.css'))
	    .pipe(gulp.dest('./dist-demo/css'))
	;
});

gulp.task('sass', () => {

	return gulp
		.src('src/scss/ibm-motion.scss')
		.pipe(gulpFn(buildSassFiles))
		.pipe(sass().on('error', sass.logError))
		.pipe(rename('ibm-motion.css'))
	    .pipe(gulp.dest('./dist/css'))
	    .pipe(cleanCSS({
			level: 2
		}))
		.pipe(rename('ibm-motion.min.css'))
		.pipe(gulp.dest('./dist/css'))
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename('ibm-motion-prefixed.min.css'))
        .pipe(gulp.dest('./dist/css'))
	;
});

gulp.task('copy-ibm-type-files', () => {
	return gulp
		.src('./node_modules/@ibm/type/dist/**/*')
	    .pipe(gulpCopy('./dist-demo/css'))
	;
});

gulp.task('default', ['build-script', 'sass', 'copy-ibm-type-files']);