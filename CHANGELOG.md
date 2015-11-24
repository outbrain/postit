<a name="0.4.2"></a>
## [0.4.2](https://github.com/outbrain/postit/compare/v0.4.1...v0.4.2) (2015-11-24)


### Build

* Add `CHANGELOG` to the `release` task. ([e5a7a91325f938f5e1116f99cc3bbb5155030d9f](https://github.com/outbrain/postit/commit/e5a7a91325f938f5e1116f99cc3bbb5155030d9f))
* Add `npm-version` for releases. ([2ee08240743274c3abe858f20dd18988166e0e27](https://github.com/outbrain/postit/commit/2ee08240743274c3abe858f20dd18988166e0e27))
* Remove extra semicolon, and add a `ESLint` rule, to check for such. ([02ca59f9efcb79f19d3440b0ec4d55700e6afef3](https://github.com/outbrain/postit/commit/02ca59f9efcb79f19d3440b0ec4d55700e6afef3))
* Add additional `ESLint` rules, replace `console.error` with `console. ([e9a5ab5e8ded4bff8a839f7ec9e6de00656118c7](https://github.com/outbrain/postit/commit/e9a5ab5e8ded4bff8a839f7ec9e6de00656118c7))
* Update filename case for `CHANGELOG`. ([ccaf4524e45766ccd299c87c23d23db2eb1516e3](https://github.com/outbrain/postit/commit/ccaf4524e45766ccd299c87c23d23db2eb1516e3))

<a name="0.4.1"></a>
## [0.4.1](https://github.com/outbrain/postit/compare/v0.4.0...v0.4.1) (2015-11-17)

* Remove `gulp-browserify`, given that it is no longer maintained, and replace with a recommended recipe. In addition, restructure `/docs`.
* Update `README`/`contributor` documentation.
* Update `devDependencies` and remove unused, example code.
* Update `/example/*.html` and `README` documentation.

<a name="0.4.0"></a>
## [0.4.0](https://github.com/outbrain/postit/compare/v0.3.2...v0.4.0) (2015-11-6)

* Update `/example/*.html` to be more succinct, and additionally, ensure that `.on` fails gracefully, for a thrown `syntaxError` exception.
* Add external source map.
* Refactor `.on` to leverage parsed data, and additionally, fix event origin.
* Add `origin` checking in `.on`, to avoid manual checking.
* Update `README`/`contributor` documentation.

<a name="0.3.2"></a>
## [0.3.2](https://github.com/outbrain/postit/compare/v0.3.1...v0.3.2) (2015-10-21)

* Add `browserify-istanbul` in replacement of `sourceStore`.
* Add `sourceStore` fix for `karma-coverage`.
* Remove `bootstrap.js` and add new `ESLint` rules.
* Add `karma-browserify` in replacement of `karma-commonjs`.
* Add `ESLint` in replacement of `JSHint`.
* Add `files` property in `package.json` for `npm` installs.

<a name="0.3.1"></a>
## [0.3.1](https://github.com/outbrain/postit/compare/v0.3.0...v0.3.1) (2015-09-24)

* Add a pre-commit hook, for `Git`.
* Update `README` documentation.
* Add `CommonJS` browser shimming support.
* Update `README`/`contributor' documentation, add source maps, and rename `gulp` tasks.

<a name="0.3.0"></a>
## [0.3.0](https://github.com/outbrain/postit/compare/v0.2.0...v0.3.0) (2015-08-12)

* Additional tweaks to `.off`'s functionality.
* Modify `.off`'s functionality.
* Modify incoming `event` filtering and add a format fix for `contributor` doc.
* Update `contributor` browser support.
* Fix minor typos, fix regex in `.on`, and update docs.
* Add additional test coverage for `manager` and update docs.
* Fix `.emit` documentation.
* Refactor `manager` to leverage `factory`, as it should, and additionally, update unit tests and docs.

<a name="0.2.0"></a>
## [0.2.0](https://github.com/outbrain/postit/compare/v0.1.0...v0.2.0) (2015-07-07)

* Update docs and increase unit test coverage.
* Deprecate `PostIt.__records`.
* Fix a factory memoization bug.
* Add `PostIt.get` and `PostIt.getAll` methods to the API.
* Add `Factory.destroy` internal method.
* Add error handling for unknown/non-string `id`s.
* Fix `Contributor API Docs` linkable source.
* Update Contributor docs.
* Add `Changelog` and contributing documentation.
* Minor documentation corrections.

<a name="0.1.0"></a>
## [0.1.0]() (2015-06-24)

* Initial release.
