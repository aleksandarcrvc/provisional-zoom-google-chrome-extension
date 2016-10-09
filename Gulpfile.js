const gulp = require('gulp');
const zip = require('gulp-zip');

const jasmine = require('gulp-jasmine-livereload-task');

gulp.task('test', jasmine({
    files: [
        './src/**/*.js', 
        '!./src/vendor/**/*.js', 
        './specs/**/*.js'
        ],
    port: 8080,
}));
 
gulp.task('pack-extension', () => {
    return gulp.src('src/*')
        .pipe(zip('provisional-zoom.zip'))
        .pipe(gulp.dest('dist'));
});