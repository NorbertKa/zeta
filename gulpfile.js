var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps')

gulp.task('sass', function() {
    gulp.src('./src/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./dist'))
    .pipe(gulp.dest('./dist'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.sass', ['sass']);
});