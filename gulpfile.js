'use strict';

var path = require('path');
var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var header = require('gulp-header');
var eslint = require('gulp-eslint');
var gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
var conventionalChangelog = require('gulp-conventional-changelog');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var Server = require('karma').Server;
var del = require('del');
var version = require('./package').version;

var basePath = path.resolve(__dirname, '.');
var libPath = path.join(basePath, 'lib');

var glob = {
	all: ['*.js', path.join(libPath, '**', '*.js')],
	lib: [path.join(libPath, '**', '*.js')],
	docs: [path.join(libPath, '**', '!(*.unit).js')],
	app: [path.join(libPath, 'manager.js')]
};

var banner = ['/*',
	' * PostIt v<%= version %>',
	' * Copyright 2016 coopersemantics',
	' * Available under MIT license <https://github.com/outbrain/postit/blob/master/LICENSE>',
	' * @Date <%= date %>',
	' */',
	''].join('\n');

// Linting.
gulp.task('lint', function () {
	return gulp.src(glob.all)
		.pipe(eslint())
		.pipe(eslint.format());
});

// Functional tests (unit).
gulp.task('unit', function (done) {
	del.sync('./coverage/**');

	return new Server({
		configFile: path.join(basePath, 'karma.conf.js'),
		singleRun: true
	}, done).start();
});

// Build `dist` dir/files.
gulp.task('build', function () {
	del.sync('./dist/**');

	return browserify({
		entries: glob.app,
		standalone: 'PostIt',
		debug: true
	})
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('postit.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(uglify())
		.pipe(header(banner, {
			version: version,
			date: new Date()
		}))
		.pipe(rename('postit.js'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dist'))
		.on('finish', console.log.bind(console, '`build` task complete'));
});

// `CHANGELOG.md` creation.
gulp.task('changelog', function () {
	return gulp.src('CHANGELOG.md', {
		buffer: false
	})
		.pipe(conventionalChangelog({
			preset: 'eslint'
		}))
		.pipe(gulp.dest('./'));
});

// Documentation creation.
gulp.task('docs', function () {
	del.sync('./docs/**');

	return gulp.src(glob.docs)
		.pipe(gulpJsdoc2md())
		.on('error', function (err) {
			throw new Error(err);
		})
		.pipe(rename(function (path) {
			path.extname = '.md';
		}))
		.pipe(gulp.dest('./docs'));
});

// Run the `test` task, when a file changes.
gulp.task('watch', function() {
	return gulp.watch(glob.lib, ['test']);
});

gulp.task('test', ['lint', 'unit']);
gulp.task('release', ['build', 'changelog', 'docs']);
gulp.task('default', ['watch']);
