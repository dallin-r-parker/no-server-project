// REQUIRE DEPENDENCIES
// ============================================================
var gulp = require('gulp');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var sass = require('gulp-sass');

// DECLARE FILE PATHS
// ============================================================
var paths = {
    jsSource: ['js/**/*.js', '!/bundle.js'],
    sassSource: ['app/**/*.sass']
};

// DEFINE TASKS
// ============================================================
gulp.task('js', function() {
    return gulp.src(paths.jsSource)
        .pipe(concat('bundle.js'))
        .pipe(annotate())
        .pipe(gulp.dest('./'));
});

gulp.task('sass', function() {
    return gulp.src(paths.sassSource)
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./styles'));
});

// WATCH TASKS
// ============================================================
gulp.task('watch', function() {
    gulp.watch(paths.jsSource, ['js']);
    gulp.watch(paths.sassSource, ['sass']);
});

// RUN DEFAULT TASK - first thing to run when gulp is called
// ============================================================
gulp.task('default', ['watch', 'js', 'sass']);
