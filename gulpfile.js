var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('browser-sync', function() {

    browserSync.init({
        server: "./src"
    });
    gulp.watch("src/**/*.css").on('change', browserSync.reload);
    gulp.watch("src/**/*.html").on('change', browserSync.reload);
    gulp.watch("src/**/*.js").on('change', browserSync.reload);
});