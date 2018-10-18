const gulp = require('gulp');
const sass = require('gulp-sass');
const print = require('gulp-print');
const exec = require('gulp-exec');

gulp.task('sass', function () {
  return gulp.src('main.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('dynamodb', function() {
  var options = {
    continueOnError: false, // default = false, true means don't emit error event
    pipeStdout: false, // default = false, true means stdout is written to file.contents
    customTemplatingThing: "test" // content passed to lodash.template()
  };
  var reportOptions = {
  	err: true, // default = true, false means don't write err
  	stderr: true, // default = true, false means don't write stderr
  	stdout: true // default = true, false means don't write stdout
  };
  return gulp.src('./**/**')
    .pipe(exec('java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb', options))
    .pipe(exec.reporter(reportOptions));
});