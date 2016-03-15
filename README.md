# PostIt

An elegant wrapper for [`.postMessage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).

![Unit Test Coverage](http://img.shields.io/badge/coverage-99.31%-green.svg?style=flat)

## Getting Started

`PostIt` requires [git](http://git-scm.com/downloads) and [Node.js](http://nodejs.org/download), before proceeding.

```bash
$ npm install --save postit-js
```

## Run PostIt in a Browser

### HTML Script Element

[`path/to/postit.js`](dist/postit.js)

```html
<script src="path/to/postit.js"></script>
```

### CommonJS Browser Shimming (Browserify and Other Flavors)

```js
var PostIt = require('postit');
```

## API Documentation

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

Removes all `PostIt` instances.

```javascript
PostIt.removeAll();
```

### .size() => `number`

Returns the length of all `PostIt` instances.

```javascript
PostIt.size();
```

### .get(id) => `object` | `void`

Gets an explicit `PostIt` instance.

| Param |   Type   |
|:-----:|:--------:|
| id    | `string` |

```javascript
PostIt.get('baz');
```

### .getAll() => `object`

Gets all `PostIt` instances.

```javascript
PostIt.getAll();
```

### .on(id, event, listener) => `object`

Registers `.postMessage` event listeners.

|   Param  |    Type    |
|:--------:|:----------:|
| id       | `string`   |
| event    | `string`   |
| listener | `function` |

```javascript
PostIt.on('baz', 'bar', function (event) {
	//
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
PostIt.off('baz', 'bar');

function bazBar() {}

// Unregister an explicit listener of a given `event`:
PostIt.off('baz', 'bar', bazBar);
```

### .emit(id, event, target, message, origin) => `object`

Emits explicit `message` events, using the client's `.postMessage` emitter.

|  Param  |            Type           |
|:-------:|:-------------------------:|
| id      | `string`                  |
| event   | `string`                  |
| target  | `object`                  |
| message | `string` `array` `object` |
| origin  | `string`                  |

```javascript
PostIt.emit('baz', 'bar', window.parent.opener, { baz: 'bar' }, 'http://www.baz.com');
```

### .openWindow(url, name, options) => `object`

Loads a resource into a new browsing context (`window`).

|      Param     |   Type   |
|:--------------:|:--------:|
| url            | `string` |
| name           | `string` |
| options        | `object` |
| options.width  | `number` |
| options.height | `number` |

See: [window.open](https://developer.mozilla.org/en-US/docs/Web/API/Window/open) for more options.

```javascript
PostIt.openWindow('http://www.foo.com', 'foo', {
	width: 700,
	height: 500
});
```

## Example

[Example](example)

## Contributing

[Contributing](CONTRIBUTING.md)

## Changelog

[Changelog](CHANGELOG.md)

## License

[MIT License](LICENSE)
