# PostIt

An elegant wrapper for [`postMessage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).

[![Unit Test Coverage](http://img.shields.io/badge/coverage-98.51%-green.svg?style=flat)](#)

## Getting Started

`PostIt` requires [git](http://git-scm.com/downloads) and [Node.js](http://nodejs.org/download), before proceeding.

```bash
# Clone the postit repo.
$ git clone git@github.com:outbrain/postit.git

# Navigate to the root /postit directory.
$ cd postit

# Install Dependencies
$ npm install
```

## Testing

Run Unit Tests/JSHint.

```bash
# Unit Tests
$ npm run test:unit

# JSHint
$ npm run test:jshint

# JSHint and Unit Tests
$ npm test
```

## Deploy

Executes all necessary tasks for deploying code (`test`, `dist` and `docs`).

```bash
$ npm run deploy
```

## API

### .add(id) => `object`

Creates and manages a new `PostIt` instance.

| Param |   Type   |
|:-----:|:--------:|
| id    | `string` |

```javascript
PostIt.add('baz');
```

### .remove(id) => `object`

Removes an explicit `PostIt` instance.

| Param |   Type   |
|:-----:|:--------:|
| id    | `string` |

```javascript
PostIt.remove('baz');
```

### .removeAll() => `object`

Remove all `PostIt` instances.

```javascript
PostIt.removeAll();
```

### .size() => `number`

Returns the length of all `PostIt` instances.

```javascript
PostIt.size();
```

### .on(id, event, listener) => `object`

Registers `.postMessage` event listeners.

|   Param  |    Type    |
|:--------:|:----------:|
| id       | `string`   |
| event    | `string`   |
| listener | `function` |

```javascript
PostIt.on('foo', 'foo.bar', function (event) {
	if (event.origin !== 'http://www.foo.com') {
		return;
	}
});
```

### .off(id, event[, listener]) => `object`

Unregisters (all | explicit) `.postMessage` event listeners.

|   Param  |    Type    |
|:--------:|:----------:|
| id       | `string`   |
| event    | `string`   |
| listener | `function` |

```javascript
// Unregister all listeners of a given `event`:
PostIt.off('foo', 'foo.bar');

function fooBar() {}

// Unregister an explicit listener of a given `event`:
PostIt.off('foo', 'foo.bar', fooBar)
```

### .emit(id, event, target, message, origin) => `object | void`

Emits explicit `.postMessage` events.

|  Param  |   Type   |
|:-------:|:--------:|
| id      | `string` |
| event   | `string` |
| target  | `node`   |
| message | `string` |
| origin  | `string` |

```javascript
PostIt.emit('foo', 'foo.bar', event.source, { foo: 'bar' }, 'http://www.foo.com');
```

### .openWindow(options) => `object`

Loads a resource into a new browsing context (`window`).

|      Param     |   Type   |
|:--------------:|:--------:|
| options.url    | `string` |
| options.title  | `string` |
| options.width  | `number` |
| options.height | `number` |
| options.top    | `number` |
| options.left   | `number` |

See: [window.open](https://developer.mozilla.org/en-US/docs/Web/API/Window/open) for additional paramters that can be utilized as parameters of `options`.

```javascript
PostIt.openWindow({
	url: 'bar.html',
	title: 'bar',
	width: 700,
	height: 500
});
```

To view the internal docs, primarily targeted for contributors, visit [contributor docs](docs/contributor).

## Run PostIt in a Browser

Use [`dist/postit.js`](dist/postit.js).

```html
<script src="path/to/postit.js"></script>
<!-- `PostIt` is now in the global context. -->
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

## License

[MIT License](LICENSE).
