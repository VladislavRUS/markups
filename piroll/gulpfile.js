const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', () => {
    gulp.watch('index.html', browserSync.reload);
    gulp.watch('./styles/**/*.scss', ['sass']);
});

gulp.task('sass', () => {
    return gulp.src('./styles//main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles/'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['watch', 'browser-sync']);