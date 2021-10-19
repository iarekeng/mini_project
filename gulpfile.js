const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();



function style() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    injectChanges: true,
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./css/**/*.css').on('change', browserSync.reload)
  gulp.watch('./*.html').on('change', browserSync.reload);
}

function build(cb) {
  cb();
}


exports.watch = watch;
exports.default = style;
exports.build = build;
