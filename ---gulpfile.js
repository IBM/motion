const gulp = require('gulp');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const fs = require('fs');
const motionConstants = require('./src/config-constants.js');
var gulpFn  = require('gulp-fn');
import getDuration from './src/getDuration.js';
const autoprefixer = require('gulp-autoprefixer');
const gulpCopy = require('gulp-copy');
const base64 = require('gulp-base64');

gulp.task('build-script-index', () => {
	return 
		gulp.src("./src/test.js")
	    .pipe(babel())
	    .pipe(gulp.dest("./dist"))
    ;
});

gulp.task('build-script-getduration', () => {
	return 
		browserify({
			entries: './src/getDuration.js', 
			debug: true
		})
		.transform("babelify", { presets: ["env"] })
		.bundle()
		.pipe(gulp.dest('./dist'))
    ;
});

gulp.task('build-demo-script', () => {
	return browserify({entries: './src-demo/app.js', debug: true})
		.transform("babelify", { presets: ["env", "react"] })
		.on('error', err => console.log(err))
		.bundle()
		.on('error', err => console.log(err))
		.pipe(source('app.js'))
		.pipe(buffer())
        .pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(sourcemaps.write('./dist-demo/maps'))
		.pipe(gulp.dest('./dist-demo'))
    ;
});

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
gulp.task('sass:watch', function () {
	gulp.watch('src/scss/**/*.scss', ['sass']);
});
gulp.task('demo-sass:watch', function () {
	gulp.watch('src-demo/styles/**/*.scss', ['demo-sass']);
});

gulp.task('script:watch', function(){
	gulp.watch(['src/**/*', 'src-demo/**/*'], ['build-script', 'build-demo-script']);
});

gulp.task('copy-ibm-type-files', () => {
	return gulp
		.src('./node_modules/@ibm/type/dist/**/*')
	    .pipe(gulpCopy('./dist-demo/css'))
	;
});

gulp.task('build-script', ['build-script-index']);

gulp.task('watch', ['default', 'script:watch', 'sass:watch', 'demo-sass:watch']);

gulp.task('default', ['build-script', 'build-demo-script', 'sass', 'demo-sass', 'copy-ibm-type-files']);

