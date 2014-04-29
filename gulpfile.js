var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    notify = require('gulp-notify'),
    header = require('gulp-header');

var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license%>',
  ' */',
  ''].join('\n');

gulp.task('wacss', function() {
    return gulp.src('./src/css/waslidemenu.css')
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('./dist'))
        .pipe(gulp.dest('./demo/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('./dist'))
        .pipe(notify({
            message: 'CSS task complete'
        }));
});

gulp.task('wajs', function() {
	return gulp.src('./src/js/waslidemenu.js')
		.pipe(rename({
			prefix: 'jquery.'
		}))
        .pipe(header(banner, { pkg : pkg } ))
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
        .pipe(gulp.dest('./dist'))
        .pipe(gulp.dest('./demo/js'))
		.pipe(rename({
			suffix: '.min'
		}))
        .pipe(uglify())
		.pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('./dist'))
        .pipe(gulp.dest('./demo/js'))
		.pipe(notify({
            message: 'JS task complete'
        }));
});

gulp.task('clean', function() {
  return gulp.src([ './dist','./js','./css', './demo/css/waslidemenu*.css', './demo/js/*waslidemenu*.js'], {read: false})
    .pipe(clean());
});

gulp.task('default', ['clean'], function() {
	gulp.start('wacss', 'wajs');
});
