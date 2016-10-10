//requires
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

//tasks
gulp.task('sass', function(){
  return gulp.src('assets/scss/**/*.scss')
    .pipe(sass())
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('assets/css/'))

})

gulp.task('watch', function(){
  gulp.watch('assets/scss/**/*.scss', ['sass']);
  gulp.watch('*.html');
  //gulp.watch('assets/js/**/*.js', browserSync.reload);
})

gulp.task('browserSync', ['browserSync' , 'sass'], function(){
  browserSync.init({
    server: {
      baseDir: 'cv'
    },
  })
})
