const gulp = require('gulp');
const sass = require('gulp-sass');
const print = require('gulp-print');

gulp.task('sass', function () {
  return gulp.src('main.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});