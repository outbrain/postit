'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var header = require('gulp-header');
var jshint = require('gulp-jshint');
var karma = require('gulp-karma');
var gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
var stylish = require('jshint-stylish');
var del = require('del');
var version = require('./package').version;

var JSHINTRC = '.jshintrc';
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
	' * Available under MIT license <https://github.com/outbrain/postit/LICENSE>',
	' * @Date <%= date %>',
	' */',
	''].join('\n');

// Tests (JSHint).
gulp.task('test:jshint', function () {
	gulp.src(glob.all)
		.pipe(jshint(JSHINTRC))
		.pipe(jshint.reporter(stylish));
});

// Tests (Unit).
gulp.task('test:unit', function (cb) {
	// Delete the current `coverage` files.
	del.sync('coverage/**');

	gulp.src(glob.lib)
		.pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function (err) {
      throw new Error(err);
    });
});

// Tests (JSHint/Unit).
gulp.task('test', ['test:jshint', 'test:unit']);

// Build `dist` dir/files.
gulp.task('dist', function () {
	// Delete the current `dist` files.
	del.sync('dist/**');

	gulp.src(glob.app)
		.pipe(browserify())
		.pipe(uglify())
		.pipe(rename('postit.js'))
		.pipe(header(banner, {
			version: version,
			date: new Date()
		}))
		.pipe(gulp.dest('./dist'))
		.on('error', console.error.bind(console))
		.on('finish', console.log.bind(console, '`dist` task complete'));
});

// Create contributor `docs`.
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

// Build.
gulp.task('build', ['test:jshint', 'dist']);

// Deploy.
gulp.task('deploy', ['test', 'dist', 'docs']);

// Default.
gulp.task('default', ['build']);
