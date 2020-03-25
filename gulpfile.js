var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');
const fileinclude = require('gulp-file-include');

gulp.task('fileinclude', function() {
    gulp.src(['index.html'])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('./'));
  });

/**
 * Push build to gh-pages
 */
gulp.task('deploy', ['fileinclude'], function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});