# Contributing to PostIt

## Working with a Fork

The first step to contributing fixes and improvements to `PostIt`, is [forking the repository](https://help.github.com/articles/fork-a-repo) into your own `GitHub` account. Make sure to [follow the instructions](https://help.github.com/articles/fork-a-repo) on how to 'Configure Remotes' and 'Pull in upstream changes' -- you will need to keep your fork in sync with changes that happen in the official repository.

## Never Commit on Master

When working on a fork, always think of your master branch as a 'landing place' for upstream changes. Only make commits to topic branches. Only `PostIt` maintainers, have the authority to merge in upstream commits.

## Commit Message Guidelines

Commit messages are written in a simple format, which clearly describes the purpose of a change.

Commit message summaries, must follow the following format:

```
Type: message (fixes|refs #number)
```

`Type` is one of the following:

* `Fix` - Bug fix.
* `Update` - Backward-compatible enhancement.
* `Breaking` - Backward-incompatible enhancement.
* `Docs` - Documentation change.
* `Build` - Build process change.
* `New` - New feature.
* `Upgrade` - Dependency upgrade.

The message should succinctly summarize, the change. In addition, an issue number, must be added, at the end, e.g.,

```
Build: Allow revert commits in commit messages. (refs #734)
Fix: Properly parse and add response Headers to Response. (fixes #840)
```

It is important to note, that if a commit does not completely fix a given issue, then, use `(refs #1234)` instead of `(fixes #1234)`.

The commit message format, is important, given that the `CHANGELOG` is generated based on said conventions.

## Submit a Pull Request

When a commit is ready to be reviewed by a `PostIt` maintainer, submit a [pull request](https://help.github.com/articles/creating-a-pull-request).
Push the topic branch to your fork and then use one of the several options in `GitHub`'s interface to initiate the request. Please do not commit `docs` and/or `dist` files; `PostIt` maintainers will address such, when cutting a new release.

Unless a rather minor change, has been made, it is generally a good practice, to file an issue, explaining your idea, before writing code or submitting a pull request -- especially when introducing new features.

## Gulp Tasks

### Testing/Linting

Run unit tests and/or linting.

```bash
# Lint and Unit Tests
$ npm test
```

### Watch

Run unit tests/linting when a file changes.

```bash
# Lint and Unit Tests
$ npm run watch
```

## Versioning

Releases will be numbered using the following format:

```
<major>.<minor>.<patch>
```

And constructed with the following guidelines:

- Breaking backward compatibility **bumps the major** while resetting minor and patch.
- New additions without breaking backward compatibility **bumps the minor** while resetting the patch.
- Bug fixes and misc. changes **bumps only the patch**.

For more information on SemVer, please visit <http://semver.org/>.

## Browser Support

|      Browser      | Version |
|:-----------------:|:-------:|
| Chrome            | Latest  |
| Firefox           | Latest  |
| Safari            | Latest  |
| Internet Explorer | 9+ *    |

*= `PostIt.openWindow` does not work in IE, cross-domain, whilst using `.postMessage`; however, `iframe` support is available.

## Coding Guidelines

Please adhere to the current style conventions. `ESLint` will catch most of the problematic issues that could occur, syntactically. In addition, when adding new features and/or updating existing code, please update/add unit tests, accordingly.

### Contributor API Docs

[Contributor API Docs](docs)
