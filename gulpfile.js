/*
 * Build configuration
 * By Michael Suzuki
 */
var gulp = require('gulp')              // Builds task manager.
var uglify = require('gulp-uglify')     // Minify js.
var concat = require('gulp-concat')     // Merge into a single file
var reactify = require('reactify')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var babel = require("gulp-babel")
var path = {
    dest : 'app/*.js',
    dist : 'dist',
    jsx : 'app/components/index.jsx'
}
/**
 * Compress js files.
 */
gulp.task('scripts',function(){
    gulp.src(path.dest)
    .pipe(uglify())
    .pipe(gulp.dest(path.dist))
})
// /*
//  * Compile project code to es5
//  */
// gulp.task('compile', ['browserify-vendor'], function() {
//   return browserify('app/*.js*')
//     .transform(babelify, { presets: ['es2015', 'react'] })
//     .bundle()
//     .pipe(source('bundle.js'))
//     .pipe(gulpif(production, streamify(uglify({ mangle: false }))))
//     .pipe(gulp.dest('public/js'));
// });
/**
 * Transform jsx files to js.
 */
 gulp.task('transform', function(){
    bundleApp()
 })

 function bundleApp(){
     // Browserify will bundle all our js files together in to one and will let
	// us use modules in the front end.
	var appBundler = browserify({
    	entries: path.jsx,
    	debug: true
  	})
    appBundler
    // transform ES6 and jsx to ES5 with babelify
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public'));
 }
