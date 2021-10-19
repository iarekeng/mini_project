var gulp = require('gulp'),
   uglify = require('gulp-uglify'),
   browserSync = require('browser-sync').create();
var sass = require('gulp-sass')(require('sass'));

gulp.task('js', function () {
    return gulp.src('js/*.js')
       .pipe(jshint())
       .pipe(jshint.reporter('default'))
       .pipe(uglify())
       .pipe(concat('app.js'))
       .pipe(gulp.dest('build'));
 });

 gulp.task('build', function(cb) {
   cb();
 })
 
 gulp.task('default', function(cb) {
cb();
 })

 function style() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    injectChanges: true,
    server: {
      baseDir: './dist'
    }
  });

  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./dist/css/**/*.css').on('change', browserSync.reload)
  gulp.watch('./dist/*.html').on('change', browserSync.reload);
}

exports.watch = watch;
exports.default = style;