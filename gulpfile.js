'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var header = require('gulp-header');
var eslint = require('gulp-eslint');
var gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
var Server = require('karma').Server;
var del = require('del');
var version = require('./package').version;

var DIRECTORY = 'lib';

var glob = {
	all: ['*.js', DIRECTORY + '/**/*.js'],
	lib: [DIRECTORY + '/**/*.js'],
	docs: [DIRECTORY + '/**/!(*.unit|bootstrap).js'],
	app: ['lib/bootstrap.js']
};

var banner = ['/*',
	' * PostIt v<%= version %>',
	' * Copyright 2015 coopersemantics',
	' * Available under MIT license <https://github.com/outbrain/postit/blob/master/LICENSE>',
	' * @Date <%= date %>',
	' */',
	''].join('\n');

// Linting.
gulp.task('lint', function () {
	gulp.src(glob.all)
		.pipe(eslint())
		.pipe(eslint.format());
});

// Functional Tests (Unit).
gulp.task('unit', function (done) {
	del.sync('coverage/**');

	new Server({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, done).start();
});

// Build `dist` dir/files.
gulp.task('dist', function () {
	del.sync('dist/**');

	gulp.src(glob.app)
		.pipe(browserify({
			standalone: 'PostIt',
			debug: true
		}))
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(rename('postit.js'))
		.pipe(header(banner, {
			version: version,
			date: new Date()
		}))
		.pipe(gulp.dest('./dist'))
		.on('error', console.error.bind(console))
		.on('finish', console.log.bind(console, '`dist` task complete'));
});

// Documentation Creation.
gulp.task('docs', function () {
	// Delete the current `docs/contributor/api` files.
	del.sync('docs/contributor/api/**');

	gulp.src(glob.docs)
		.pipe(gulpJsdoc2md())
		.on('error', function (err) {
			throw new Error(err);
		})
		.pipe(rename(function (path) {
			path.extname = '.md';
		}))
		.pipe(gulp.dest('docs/contributor/api'));
});


gulp.task('test', ['lint', 'unit']);
gulp.task('deploy', ['test', 'dist', 'docs']);
gulp.task('default', ['deploy']);
