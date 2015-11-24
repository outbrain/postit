# Contributing to PostIt

## Build a Local Copy of PostIt

Create a fork of the `PostIt` repo., on github at: `https://github.com/outbrain/postit`

Clone your `PostIt` fork, to work locally:

```bash
$ git clone git@github.com:USERNAME/postit.git
```

Change the directory to the newly created dir. `postit/`, and install dependencies.

```bash
$ cd postit && npm install
```

Add the `PostIt` master as a remote, e.g.: `upstream`:

```bash
$ git remote add upstream git://github.com/outbrain/postit.git
```

Get in the habit of pulling in the `upstream master`, to stay up to date, as `PostIt` receives new commits.

```bash
$ git pull upstream master
```

## Gulp Tasks

### Testing/Linting

Run unit tests and/or linting.

```bash
# Unit Tests
$ npm run unit

# Lint
$ npm run lint

# Lint and Unit Tests
$ npm test
```

### Contributor API Docs

Create Contributor API Docs.

```bash
$ npm run docs
```

### Commit Message Guidelines

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
