var gulp = require('gulp'),
    connect = require('gulp-connect'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    jshint = require('gulp-jshint'),
    inject = require('gulp-inject'),
    //gulpif = require('gulp-if'),
    minifycss = require('gulp-minify-css'),
    //useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    wiredep = require('wiredep').stream;


// Preprocesa archivos Stylus a CSS
gulp.task('css', function() {
    gulp.src('./public/app/stylesheets/main.styl')
        .pipe(stylus({ use: nib()
        }))
        .pipe(gulp.dest('./public/app/stylesheets/'))
        .pipe(connect.reload());
});


// Busca errores en el JS y los muestra
gulp.task('jshint', function() {
    return gulp.src('./public/app/scripts/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});

// Busca en las carpetas de estilos y js los archivos y los inyecta en el HTML
gulp.task('inject', function() {
    var sources = gulp.src(['./public/app/scripts/**/*.js', './public/app/stylesheets/**/*.css']);
    return gulp.src('index.html', {cwd: './app'})
        .pipe(inject(sources, {
            read: false,
            ignorePath: '/public/app'
        }))
        .pipe(gulp.dest('./public/app'));
});

// Inyecta las librerías que se instalan vía Bower
gulp.task('wiredep', function() {
    gulp.src('./public/app/index.html')
        .pipe(wiredep({directory: './public/app/lib' }))
        .pipe(gulp.dest('./public/app'));
});

gulp.task('watch', function() {
    //gulp.watch(['./public/app/**/*.html'], ['html']);
    gulp.watch(['./public/app/stylesheets/**/*.styl'], ['css', 'inject']);
    gulp.watch(['./public/app/scripts/**/*.js', './gulpfile.js'], ['jshint', 'inject']);
    gulp.watch(['./bower.json'], ['wiredep']);
});

gulp.task('default',['watch', 'inject', 'wiredep']);