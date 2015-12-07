<a name="0.4.3"></a>
## [0.4.3](https://github.com/outbrain/postit/compare/v0.4.2...v0.4.3) (2015-12-07)


### Build

* Add `watch` task, which will run the `test` task, upon file change, and additionally, minor, `gulpfile.js` cleanup. ([72607e88f837e0f791180d5a9313cb7a6190ef81](https://github.com/outbrain/postit/commit/72607e88f837e0f791180d5a9313cb7a6190ef81))
* Remove `postversion` command in `package.json`. ([de99dda9e732df6fc2558603dd1fe30759b3b25c](https://github.com/outbrain/postit/commit/de99dda9e732df6fc2558603dd1fe30759b3b25c))
* Update `version` command in `package.json`. ([97c34dd666f662049060ea7500f668f4e21baaef](https://github.com/outbrain/postit/commit/97c34dd666f662049060ea7500f668f4e21baaef))

### Docs

* Add 'commit message guidelines' and fix spacing. ([f189b1dd5e1c2ff1d79201c73131db07fd67b99c](https://github.com/outbrain/postit/commit/f189b1dd5e1c2ff1d79201c73131db07fd67b99c))
* Add 'Versioning' to `README` and minor document updates. ([fe214b4f5aaaf86d7142ccacc37c9fb224a61855](https://github.com/outbrain/postit/commit/fe214b4f5aaaf86d7142ccacc37c9fb224a61855))
* Update `CONTRIBUTOR` documentation. ([60404f492d5cd41cce4e7ee1660fbecc8548c512](https://github.com/outbrain/postit/commit/60404f492d5cd41cce4e7ee1660fbecc8548c512))



<a name="0.4.2"></a>
## [0.4.2](https://github.com/outbrain/postit/compare/v0.4.1...v0.4.2) (2015-11-24)


### Build

* Add `CHANGELOG` to the `release` task. ([e5a7a91325f938f5e1116f99cc3bbb5155030d9f](https://github.com/outbrain/postit/commit/e5a7a91325f938f5e1116f99cc3bbb5155030d9f))

---
* Add `npm-version` for releases.
* Remove extra semicolon, and add a `ESLint` rule, to check for such.
* Add additional `ESLint` rules, replace `console.error` with `console.warn`, where appropriate, and refactor `.on`.
* Update filename case for `CHANGELOG`.

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
