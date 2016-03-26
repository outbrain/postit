'use strict';

var Factory = require('./factory');
var helpers = require('./helpers');

/**
 * Manager Module.
 * @public
 */

var Manager = module.exports = {};

/**
 * Creates and manages a `PostIt` instance (`id`).
 * @param {string} id
 * @returns {object}
 * @public
 */

Manager.add = function(id) {
	var that = this;

	if ('string' !== typeof id) {
		console.warn(id + ' should be a `String`.');

		return that;
	}

	// Create a memoized factory.
	Factory.add(id);

	return that;
};

/**
 * Removes a `PostIt` instance (`id`).
 * @param {string} id
 * @returns {object}
 * @public
 */

Manager.remove = function(id) {
	var that = this;
	var record = that.get(id);

	if (!record) {
		return that;
	}

	// Remove listeners to avoid memory leaks.
	for (var event in record.listeners) {
		record.off(event);
	}

	Factory.remove(id);

	return that;
};

/**
 * Removes all `PostIt` instances.
 * @return {object}
 * @public
 */

Manager.removeAll = function() {
	var that = this;
	var records = that.getAll();

	for (var record in records) {
		that.remove(record);
	}

	return that;
};

/**
 * Returns the length of all `PostIt` instances.
 * @return {number}
 * @public
 */

Manager.size = function() {
	var size = 0;
	var records = this.getAll();

	for (var record in records) {
		size++;
	}

	return size;
};

/**
 * Gets a `PostIt` instance (`id`).
 * @param {string} id
 * @returns {object|void}
 */

Manager.get = function(id) {
	return Factory.get(id) || console.warn(id + ' does not match any `PostIt` instances.');
};

/**
 * Gets all `PostIt` instances.
 * @returns {object}
 */

Manager.getAll = function() {
	return Factory.getAll();
};

/**
 * @see {@link postit.md#PostIt+on} for further information.
 * @param {string} id
 * @param {string} event
 * @param {function} listener
 * @returns {object}
 * @public
 */

Manager.on = function(id, event, listener) {
	var that = this;
	var record = that.get(id);

	if (!record) {
		return that;
	}

	record.on(event, listener);

	return that;
};

/**
 * @see {@link postit.md#PostIt+off} for further information.
 * @param {string} id
 * @param {string} event
 * @param {function=} listener
 * @returns {object}
 * @public
 */

Manager.off = function(id, event, listener) {
	var that = this;
	var record = that.get(id);

	if (!record) {
		return that;
	}

	record.off(event, listener);

	return that;
};

/**
 * @see {@link postit.md#PostIt+emit} for further information.
 * @param {string} id
 * @param {string} event
 * @param {object} target
 * @param {string|array|object} message
 * @param {string} origin
 * @returns {object}
 * @public
 */

Manager.emit = function(id, event, target, message, origin) {
	var that = this;
	var record = that.get(id);

	if (!record) {
		return that;
	}

	record.emit(event, target, message, origin);

	return that;
};

/**
 * @see {@link helpers.md#helpers.openWindow} for further information.
 * @param {string} url
 * @param {string} name
 * @param {object} options
 * @param {number} options.width
 * @param {number} options.height
 * @public
 */

Manager.openWindow = function(url, name, options) {
	return helpers.openWindow(url, name, options);
};
