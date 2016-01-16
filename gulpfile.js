var gulp = require('gulp'),
	sass = require('gulp-sass').
	autoprefixer = require('gulp-autoprefixer'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-require'),
	notify = require('gulp-notify'),
	cache = require('gulp-cache'),
	rename = require('gulp-rename'),
	del = require('del');

gulp.task('styles', function() {
  return sass('styles/main.scss', {style: expanded})

  .pipe(autoprefixer())
  .pipe(gulp.dest('dist'))
  .pipe(rename({suffex: '.min'}))
  .pipe(cssnano())
  .pipe(gulp.dest('dist'))
  .pipe(notify({message: 'Styles Task Complete'}));
});