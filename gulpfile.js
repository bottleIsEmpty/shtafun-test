const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imageMin = require('gulp-imagemin');
const webpackStream = require('webpack-stream');
const config = require('./webpack.config');

gulp.task('css', () => {
  return gulp.src('src/css/style.css')
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('script', () => {
  return gulp.src('src/js/script.js')
    .pipe(webpackStream(config))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('html', () => {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
});

gulp.task('images', () => {
  return gulp.src('src/images/*')
    .pipe(imageMin())
    .pipe(gulp.dest('dist/images'));
});

const watchScript = gulp.series('script', 'html', 'css');

gulp.watch(['src/js/**/*.js', 'src/index.html', 'src/css/style.css'], watchScript);


const build = gulp.series('css', 'script', 'html', 'images');

exports.build = build;