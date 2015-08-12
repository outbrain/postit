# Changelog

## v0.1.0

### Jun 24, 2015 - [Docs](https://github.com/outbrain/postit/tree/v0.1.0/docs/contributor)

- Initial release.

## v0.2.0

### July 7, 2015 - [Diff](https://github.com/outbrain/postit/compare/v0.1.0...v0.2.0) - [Docs](https://github.com/outbrain/postit/tree/v0.2.0/docs/contributor/api)

- Minor documentation corrections.
- Add `Changelog` and contributing documentation.
- Update Contributor docs.
- Fix `Contributor API Docs` linkable source.
- Add error handling for unknown/non-string `id`s.
- Add `Factory.destroy` internal method.
- Add `PostIt.get` and `PostIt.getAll` methods to the API.
- Fix a factory memoization bug.
- Deprecate `PostIt.__records`.
- Update docs and increase unit test coverage.

## v0.3.0

### August 12, 2015 - [Diff](https://github.com/outbrain/postit/compare/v0.2.0...v0.3.0) - [Docs](https://github.com/outbrain/postit/tree/v0.3.0/docs/contributor/api)

- Refactor `manager` to leverage `factory`, as it should, and additionally, update unit tests and docs.
- Fix `.emit` documentation.
- Add additional test coverage for `manager` and update docs.
- Fix minor typos, fix regex in `.on`, and update docs.
- Update `contributor` browser support.
- Modify incoming `event` filtering and add a format fix for `contributor` doc.
- Modify `.off`'s functionality.
- Additional tweaks to `.off`'s functionality.
