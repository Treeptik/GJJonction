var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require("gulp-concat");
var watcher = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('hello', function() {
	console.log('hello world');
});


/*
=============
Compile SCSS from assets/style to dist folder
*/
var scssSources = 'assets/styles/*.scss';
var scssTarget = 'dist'

gulp.task('sass', function() {
    return gulp.src(scssSources)
        .pipe(sass())
        .pipe(gulp.dest(scssTarget));
});


/*
=============
Compile JS from assets/scripts to dist folder
*/
var jsSources = 'assets/scripts/*.js';
var jsTarget = 'dist';

gulp.task('js', function() {
    return gulp.src(jsSources)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsTarget));
});


/*
=============
Watch file for CSS, JS and HTML files
*/
gulp.task('watch', function() {
    browserSync.init({
     	server: './',
        	port: 8089
        
    });

    watcher('assets/styles/*.scss', function() {
    	gulp.start('sass');
    	browserSync.reload();
    });

    watcher('assets/scripts/*.js', function() {
    	gulp.start('js');
    	browserSync.reload();
    });
});
