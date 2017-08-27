var gulp = require('gulp'),
    browserSync = require('browser-sync').create();
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    htmlmin = require('gulp-htmlmin');

gulp.task('html', function () {
    return gulp.src('./index.dev.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./'));
});

gulp.task('css', () => {
  return gulp.src('./assets/css/index.dev.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('index.css'))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['html', 'css']);


gulp.task('dev', ['browser-sync'], function () {
  gulp.watch(['assets/css/index.dev.css'], ['css']);
  gulp.watch(['assets/css/index.css'], browserSync.reload);
  gulp.watch(['index.dev.html'], ['html']);
  gulp.watch(['index.html'], browserSync.reload);
})
