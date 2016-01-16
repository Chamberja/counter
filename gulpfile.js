var gulp = require('gulp'),
	sass = require('gulp-sass').
	autoprefixer = require('gulp-autoprefixer'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	cache = require('gulp-cache'),
	rename = require('gulp-rename'),
	del = require('del');

gulp.task('styles', function() {
	gulp.src('styles/*.scss')
  .pipe(autoprefixer())
  .pipe(gulp.dest('dist'))
  .pipe(rename({suffex: '.min'}))
  .pipe(gulp.dest('dist'))
  .pipe(notify({message: 'Styles Task Complete'}));
});