const gulp = require('gulp');
const zip = require('gulp-zip');
 
gulp.task('pack-extension', () => {
    return gulp.src('src/*')
        .pipe(zip('provisional-zoom.zip'))
        .pipe(gulp.dest('dist'));
});