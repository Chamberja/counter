var gulp = require('gulp'),
	sass = require('gulp-sass').
	autoprefixer = require('gulp-autoprefixer'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	rename = require('gulp-rename'),
	del = require('del');

gulp.task('styles', function() {
	gulp.src('styles/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('dist'));
});