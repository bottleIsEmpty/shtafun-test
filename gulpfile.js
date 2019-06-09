const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imageMin = require('gulp-imagemin');

function css() {
  return gulp.src('src/style.css')
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
}

function sctipt() {
  return gulp.src('src/script.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
}

function html() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
}

function images() {
  return gulp.src('src/images/*')
    .pipe(imageMin())
    .pipe(gulp.dest('dist/images'));
}

const build = gulp.series(html, css, images, sctipt);

exports.build = build;