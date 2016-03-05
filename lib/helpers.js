'use strict';

/**
 * Helpers Module.
 * @public
 */

var helpers = module.exports = {};

/**
 * Serializes an object into a formatted string.
 * @param {object} params
 * @returns {string}
 * @public
 */

helpers.serialize = function(params) {
	var _params = [];

	for (var param in params) {
		_params.push(param + '=' + params[param]);
	}

	return _params.join(', ');
};

/**
 * Merges a shallow `source` object into the `destination` object.
 * @param {object} destination
 * @param {object} source
 * @returns {object}
 * @public
 */

helpers.shallowMerge = function(destination, source) {
	for (var prop in source) {
		if (null != source[prop]) {
			destination[prop] = source[prop];
		}
	}

	return destination;
};

/**
 * Loads a resource into a new browsing context (`window`).
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/open|Window.open()} for more options.
 * @param {string} url
 * @param {string} name
 * @param {object} options
 * @param {number} options.width
 * @param {number} options.height
 * @returns {object}
 * @public
 */

/* istanbul ignore next */
helpers.openWindow = function(url, name, options) {
	options = options || {};

	var that = this;
	var nativeScreen = screen || {};
	var nativeWindow = window;
	var nativeDocument = document;
	var nativeDocumentElement = nativeDocument.documentElement || {};
	var dualScreenLeft = nativeWindow.screenLeft || nativeScreen.left || 0;
	var dualScreenTop = nativeWindow.screenTop || nativeScreen.top || 0;
	var width = nativeWindow.innerWidth || nativeDocumentElement.clientWidth || nativeScreen.width || 0;
	var height = nativeWindow.innerHeight || nativeDocumentElement.clientHeight || nativeScreen.height || 0;
	var left = ((width / 2) - (options.width / 2)) + dualScreenLeft;
	var top = ((height / 2) - (options.height / 2)) + dualScreenTop;
	var features = that.serialize(that.shallowMerge({
		top: top,
		left: left
	}, options));
	var newWindow = nativeWindow.open(url, name, features);

	if (nativeWindow.focus) {
		newWindow.focus();
	}

	return newWindow;
};
