var gulp = require('gulp');
var sass = require('gulp-sass');
const mocha = require('gulp-mocha');
var cssnano = require('gulp-cssnano');

gulp.task('default', ['styles', 'test'], () => {
  console.log("hello");
});

gulp.task('styles', () => {
  console.log("Compiling SCSS to CSS...");
  return gulp.src('./src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(gulp.dest('./dest'));
});


gulp.task('test', () =>
    gulp.src('./test/**/*-test.js', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'nyan'}))
);

gulp.task('watch', () => {
  gulp.watch('./src/styles/**/*.scss', ['styles']);
  gulp.watch('./test/**/*-test.js', ['test']);
})
