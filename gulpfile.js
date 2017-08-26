var gulp = require('gulp')
, sourcemaps = require('gulp-sourcemaps')
, sass = require('gulp-sass')
, concat = require('gulp-concat')
, CacheBuster = require('gulp-cachebust')
, print = require('gulp-print')
, uglify = require('gulp-uglify')
, annotate = require('gulp-ng-annotate')
, babel = require('gulp-babel');

cachebust = new CacheBuster();

gulp.task('build-css', function() {
  return gulp.src('./css/*')
    .pipe(sourcemaps.init())
    .pipe(sass())
    // .pipe(cachebust.resources())
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/css'))
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

gulp.task('build-forms', function() {
   return gulp.src('./forms/**/*')
      .pipe(gulp.dest('./dist/forms'));
});

gulp.task('build-vendor', function() {
   return gulp.src('./vendor/**/*')
      .pipe(gulp.dest('./dist/vendor'));
});

gulp.task('views', function(){
  return gulp.src("./public/views/*")
  .pipe(gulp.dest("./dist/views"))
});

gulp.task('build-templates', function() {
   return gulp.src('./js/templates/*')
      .pipe(gulp.dest('./dist/templates'));
});

gulp.task('build-templates-clients', function() {
   return gulp.src('./templates/clients/*')
      .pipe(gulp.dest('./dist/templates/clients'));
});

gulp.task('build', ['build-css', 'build-js', 'build-img', 'build-forms', 'build-vendor', 'build-templates', 'build-templates-clients', 'views', 'watch'], function() {
    return gulp.src('./index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    return gulp.watch(['./index.html','./partials/*.html', './templates/**/*.html', './styles/*.css', './js/**/*.js'], ['build']);
});
