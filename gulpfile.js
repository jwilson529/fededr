var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var stylish = require('gulp-jscs-stylish');
var nodemon = require('gulp-nodemon');
var jsFiles = ['*.js', 'routes/*.js'];
var less = require('gulp-less');
var path = require('path');


gulp.task('style', function() {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jscs())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('less', function() {
    return gulp.src('./public/less/style.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('serve', function() {
    var options = {
        script: './bin/www',
        delayTime: 1,
        env: {
            'PORT': 8080
        },
        watch: jsFiles
    };

    return nodemon(options)
        .on('restart', function() {
            console.log('Restarting...');
        });
});

gulp.task('default', ['style', 'less', 'serve'], function() {

});
