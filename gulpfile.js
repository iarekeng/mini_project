var gulp = require('gulp'),
   uglify = require('gulp-uglify'),
   sass = require('gulp-sass'),
   browserSync = require('browser-sync').create();

gulp.task('js', function () {
    return gulp.src('js/*.js')
       .pipe(jshint())
       .pipe(jshint.reporter('default'))
       .pipe(uglify())
       .pipe(concat('app.js'))
       .pipe(gulp.dest('build'));
 });

 
 gulp.task('default', function(cb) {
cb();
 })

gulp.task('sass', function() {
  gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
})

