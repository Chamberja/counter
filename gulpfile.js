var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer');
  browserSync = require('browser-sync').create();
  notify = require("gulp-notify");
  plumber = require('gulp-plumber');
  cssnano = require('gulp-cssnano');
  rename = require("gulp-rename");
  clean = require("gulp-clean")

gulp.task('serve', ['styles'], function() {
  browserSync.init({
    server: 'dist',
    index: '/views/index.html'
  });
  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('src/views/**/*.html', ['views']);
  gulp.watch('src/**/*').on('change', browserSync.reload);
});

gulp.task('styles', ['views'], function() {
  gulp.src('src/styles/*.scss')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/styles'))
    .pipe(browserSync.stream())
    // .pipe(notify('Build Finished'));
});

gulp.task('fonts', function() {
  gulp.src('src/assets/fonts/*.*')
    .pipe(gulp.dest('dist/assets'))
});

gulp.task('videos', function() {
  gulp.src('src/assets/videos/*.*')
    .pipe(gulp.dest('dist/assets'))
});

gulp.task('views', function() {
  gulp.src('src/views/*.html')
    .pipe(gulp.dest('dist/views'))
});

gulp.task('clean', function() {
  return gulp.src('dist', {read: false })
    .pipe(clean());
});

gulp.task('default', ['serve']);
