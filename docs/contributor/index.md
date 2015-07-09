# Contributing to PostIt

## Build a Local Copy of PostIt

Create a fork of the `PostIt` repo., on github at: `https://github.com/outbrain/postit`

Change the directory to your web root directory, whatever that might be:

```bash
$ cd /path/to/your/www/root/
```

Clone your `PostIt` fork, to work locally:

```bash
$ git clone git@github.com:outbrain/postit.git
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

Run the necessary `Gulp` tasks:

```bash
# Unit Tests
$ npm run test:unit

# JSHint
$ npm run test:jshint

# JSHint and Unit Tests
$ npm test

# Contributor API Docs
$ npm run docs

# Unit Tests/JSHint/Contributor API Docs
$ npm run deploy
```

## Browser Support

|      Browser      | Version |
|:-----------------:|:-------:|
| Chrome            | Latest  |
| Firefox           | Latest  |
| Safari            | Latest  |
| Internet Explorer | 9+ *    |

*= `PostIt.window` does not work in IE, cross-domain, whilst using `.postMessage`; however, `iframe` support is available.

## Coding Guidelines

Please adhere to the current style conventions. JSHint will catch most of the problematic issues that could occur, syntactically. In addition, when adding new features and/or updating existing code, please update/add unit tests accordingly.

### Contributor API Docs

[Contributor API Docs](api)
