var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');
const fileinclude = require('gulp-file-include');

/*
 * Processes include instructions in the src folder and outputs the result to the root
 */

gulp.task('fileinclude', function(){

  return gulp.src("./src/**/*")
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});