var gulp = require('gulp')
, sourcemaps = require('gulp-sourcemaps')
, sass = require('gulp-sass')
, concat = require('gulp-concat')
, CacheBuster = require('gulp-cachebust')
, print = require('gulp-print')
, uglify = require('gulp-uglify')
, annotate = require('gulp-ng-annotate')
, babel = require('gulp-babel')
, browserSync = require('browser-sync');

cachebust = new CacheBuster();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('build-css', function() {
  return gulp.src('./styles/*')
    .pipe(sourcemaps.init())
    .pipe(sass())
    // .pipe(cachebust.resources())
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('build-js', function() {
   return gulp.src('./js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(print())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
      //.pipe(uglify())
      .pipe(annotate())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js'));
});

gulp.task('build-img', function() {
   return gulp.src('./img/**/*')
      .pipe(gulp.dest('./dist/img'));
});

gulp.task('build-img', function() {
   return gulp.src('./forms/**/*')
      .pipe(gulp.dest('./dist/forms'));
});

gulp.task('build-templates', function() {
   return gulp.src('./templates/*')
      .pipe(gulp.dest('./dist/templates'));
});

gulp.task('build-templates-clients', function() {
   return gulp.src('./templates/clients/*')
      .pipe(gulp.dest('./dist/templates/clients'));
});

gulp.task('build', ['build-css', 'build-js', 'build-img', 'build-templates', 'build-templates-clients', 'watch'], function() {
    return gulp.src('./index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    return gulp.watch(['./index.html','./partials/*.html', './templates/**/*.html', './styles/*.css', './js/**/*.js'], ['build']);
});

gulp.task('default', ['build-js', 'browser-sync', 'build-templates', 'build-templates-clients', 'build-img', 'build-css', 'watch'
]);
