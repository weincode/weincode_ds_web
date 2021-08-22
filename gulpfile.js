var gulp = require('gulp');
var sass = require('gulp-sass');
var run = require('gulp-run');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var version= require('./package.json');

//npm install gulp --save --only=dev
//npm install gulp-sass
gulp.task('try', function() {
  console.log('Hola todo anda bien ');
});


//npm install gulp-minify-css
gulp.task('style_min', function(){
  return gulp.src('scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(minifyCSS())
    .pipe(concat('style_main_'+version.version+'.min.css'))
    .pipe(gulp.dest('public/stylesheets/min'))
  
});

//gulp watch
gulp.task('watch', ['style_min'], function (){
  gulp.watch('scss/**/*.scss', ['style_min']);
});
