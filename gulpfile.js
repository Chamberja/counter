var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer');
  browserSync = require('browser-sync').create();
  notify = require("gulp-notify");
  plumber = require('gulp-plumber');
  cssnano = require('gulp-cssnano');
  rename = require("gulp-rename");

gulp.task('serve', ['styles'], function() {
  browserSync.init({
   server: './dist'      
  });
  gulp.watch('styles/**/*.scss', ['styles']);
  gulp.watch('dist/*.html').on('change', browserSync.reload);
});

gulp.task('styles', function() {
  gulp.src('styles/*.scss')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/styles'))
    .pipe(browserSync.stream())
    .pipe(notify('Build Finished'));
});

gulp.task('default', ['serve']);