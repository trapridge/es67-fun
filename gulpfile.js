var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var jasmine = require('gulp-jasmine');

gulp.task('jasmine', function () {
  return gulp.src('spec/**/*.js')
    .pipe(jasmine({
      verbose: true
    }));
});

gulp.task('babel', function () {
  return gulp.src('src/**/*.js')
    //.pipe(sourcemaps.init())
    .pipe(babel({
      stage: 0  // http://babeljs.io/docs/usage/experimental/
    }))
    .on('error', console.error.bind(console))
    //.pipe(concat('all.js'))
    //.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
  gulp.watch(['src/**/*.js', 'spec/**/*.js'], ['babel', 'jasmine']);
});

gulp.task('default', ['watch']);
