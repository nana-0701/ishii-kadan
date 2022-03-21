var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var sassGlob = require('gulp-sass-glob');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssdeclsort = require('css-declaration-sorter');
var merge = require('merge-stream');

gulp.task('sass', function() {
  var commom = gulp.src('./src/scss/*.scss')
    .pipe( plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }) )
    .pipe( sassGlob() )
    .pipe( sass({
      outputStyle: 'expanded'
    }) )
    .pipe( postcss([ autoprefixer(
    {"overrideBrowserslist": ["last 2 versions", "ie >= 11", "Android >= 5"],
    cascade: false}
    ) ]) )
    .pipe( postcss([ cssdeclsort({ order: 'alphabetical' }) ]) )
    .pipe(gulp.dest('./css'));

  var top = gulp.src('./src/scss/page/top/top.scss')
    .pipe( plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }) )
    .pipe( sassGlob() )
    .pipe( sass({
      outputStyle: 'expanded'
    }) )
    .pipe( postcss([ autoprefixer(
    {"overrideBrowserslist": ["last 2 versions", "ie >= 11", "Android >= 5"],
    cascade: false}
    ) ]) )
    .pipe( postcss([ cssdeclsort({ order: 'alphabetical' }) ]) )
    .pipe(gulp.dest('./css/top'));

  var room = gulp.src('./src/scss/page/room/room.scss')
    .pipe( plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }) )
    .pipe( sassGlob() )
    .pipe( sass({
      outputStyle: 'expanded'
    }) )
    .pipe( postcss([ autoprefixer(
    {"overrideBrowserslist": ["last 2 versions", "ie >= 11", "Android >= 5"],
    cascade: false}
    ) ]) )
    .pipe( postcss([ cssdeclsort({ order: 'alphabetical' }) ]) )
    .pipe(gulp.dest('./css/room'));

  var hotSpring = gulp.src('./src/scss/page/hotSpring/hotSpring.scss')
    .pipe( plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }) )
    .pipe( sassGlob() )
    .pipe( sass({
      outputStyle: 'expanded'
    }) )
    .pipe( postcss([ autoprefixer(
    {"overrideBrowserslist": ["last 2 versions", "ie >= 11", "Android >= 5"],
    cascade: false}
    ) ]) )
    .pipe( postcss([ cssdeclsort({ order: 'alphabetical' }) ]) )
    .pipe(gulp.dest('./css/hotSpring'));

  var dishes = gulp.src('./src/scss/page/dishes/dishes.scss')
    .pipe( plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }) )
    .pipe( sassGlob() )
    .pipe( sass({
      outputStyle: 'expanded'
    }) )
    .pipe( postcss([ autoprefixer(
    {"overrideBrowserslist": ["last 2 versions", "ie >= 11", "Android >= 5"],
    cascade: false}
    ) ]) )
    .pipe( postcss([ cssdeclsort({ order: 'alphabetical' }) ]) )
    .pipe(gulp.dest('./css/dishes'));

  return merge(commom, top, room, hotSpring, dishes);
});

gulp.task('watch', function() {
  gulp.watch('./src/scss/**/*.scss', gulp.task('sass'));
});

gulp.task('default', gulp.series(gulp.parallel('watch')));
