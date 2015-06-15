'use strict';

var gulp = require('gulp'),
    debug = require('gulp-debug'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-minify-html'),
    webserver = require('gulp-webserver');
var htmlToDataURI = require('gulp-html-to-data-uri');


var server = {
    dev: {
        port: 8000
    }
}

var distDir = 'dist/';

/*
 * Dist
 *
 */

gulp.task('build', [], function () {
    console.log('Running build..');
    gulp.src('link.html')
        .pipe(htmlToDataURI());
});

/*
 * Dev
 *
 */

gulp.task('watch', function () {
    //html
    gulp.watch(['link.html']).on('change', function (event) {
        console.log('gulpfile.js ' + event.path + ' was ' + event.type);
    })
});

gulp.task('webserver:dev', ['build', 'watch'], function () {
    gulp.src(['./'])
        .pipe(webserver({
            host: '0.0.0.0',
            port: server.dev.port,
            livereload: true,
            directoryListing: false,
            open: 'http://localhost:' + server.dev.port + '/app/index.html'
        }));
});

//Assume default is just a build
gulp.task('default', ['build'], function () {
    console.log('Running default..');
});
