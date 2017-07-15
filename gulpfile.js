var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var runSequence = require('run-sequence');

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('useref', function() {
  return gulp.src('app/*.html')
  .pipe(useref())
  .pipe(gulpIf('*.js', uglify()))
  .pipe(gulp.dest('dist'))
});

gulp.task('images', function() {
  return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin({
    interlaced: true
  }))
  .pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});

gulp.task('watch', ['default', 'browserSync', 'sass', 'images', 'fonts'], function() {
  gulp.watch('app/scss/**/*.scss', [sass]);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('default', function(callback) {
  runSequence(['sass', 'fonts', 'images', 'browserSync', 'watch'],
    callback
  )
});
