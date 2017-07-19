'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import connect from'gulp-connect';
import open from'gulp-open';
import browserify from'browserify'; // Bundle JS
import reactify from'reactify'; //transfor jsx to JS
import babelify from'babelify';
import buffer from'vinyl-buffer';
import uglify from'gulp-uglify';
import sourcemaps from'gulp-sourcemaps';
import livereload from'gulp-livereload';
import source from'vinyl-source-stream'; // Use conventional text streams with gulp
import concat from'gulp-concat'; // concatenates files
import eslint from'gulp-eslint'; //Lint JS and JSX files

var config = {
    port: process.env.PORT || 3000, 
    devBaseUrl: process.env.IP || "0.0.0.0",
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/toastr/toastr.css'
            ],
        dist: './dist',
        mainJS: './src/main.js'
    }
}

gulp.task('connect', function() {
   connect.server({
       root: ['dist'],
       port: config.port,
       base: config.devBaseUrl,
       livereload: false
   }); 
});

gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html').pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
    gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(livereload())
});

// gulp.task('js', function() {
//     browserify(config.paths.mainJS)
//     .transform(reactify)
//     .bundle()
//     .on('error', console.error.bind(console))
//     .pipe(source('bundle.js'))
//     .pipe(babel({presets: ['es2015', 'stage-0']}))
//     .pipe(gulp.dest(config.paths.dist + '/scripts'))
//     .pipe(connect.reload());
// });

gulp.task('js', function() {
    browserify(config.paths.mainJS)
    .transform('babelify', { presets: ['react','es2015', 'stage-0']})
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(sourcemaps.write('.maps'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(livereload());
});

gulp.task('css', function() {
   gulp.src(config.paths.css)
   .pipe(concat('bundle.css'))
   .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images', function() {
   gulp.src('./src/favicon.ico')
   .pipe(gulp.dest(config.paths.dist));
});

gulp.task('watch', function() {
   gulp.watch(config.paths.html, ['html']);
   gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('lint', function() {
   return gulp.src(config.paths.js)
   .pipe(eslint({
       config: 'eslint.config.json'
   }))
   .pipe(eslint.format());
});

gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']);