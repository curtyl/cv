//requires
var gulp = require('gulp');
var sass = require('gulp-sass');
var contact = require('gulp-contact');
var browerSync = require('brower-sync').create();


//tasks
gulp.task('sass', function(){
  return gulp.src('assets/scss/**/*.scss')
    .pire(sass())
    .pipe(contact('style.css'))
    .pipe(gulp.dest('assets/css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('watch', function(){
  gulp.watch('assets/scss/**/*.scss', ['sass']);
  gulp.watch('*.html');
  //gulp.watch('assets/js/**/*.js', browserSync.reload);
})

gulp.task('browserSync', ['browserSync' , 'sass'], function(){
  browserSync.init({
    server: {
      baseDir; 'cv'
    },
  })
})
