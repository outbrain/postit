'use strict';

var Factory = require('./factory');
var helpers = require('./helpers');
var records = {};

/**
 * Manager Module.
 * @public
 */

var Manager = module.exports = {};

/**
 * Creates and manages a new `PostIt` instance.
 * @param {string} id
 * @returns {object|void}
 * @public
 */

Manager.add = function (id) {
	var that = this;

	if ('string' !== typeof id) {
		return console.error('`id` should be a `String`.');
	}

	records[id] = {
		instance: Factory.create(id)
	};

	return that;
};

/**
 * Removes an explicit `PostIt` instance.
 * @param {string} id
 * @returns {object|void}
 * @public
 */

Manager.remove = function (id) {
	var that = this;
	var record = that.get(id);

	if (!record) {
		return;
	}

	var instance = record.instance;

	// Remove listeners to avoid memory leaks.
	for (var event in instance.listeners) {
		for (var i = 0; i < instance.listeners[event].length; ++i) {
			instance.off(event, instance.listeners[event][i]);
		}
	}

	// Destroy memoized, factory instance.
	Factory.destroy(id);

	delete records[id];

	return that;
};

/**
 * Remove all `PostIt` instances.
 * @return {object}
 * @public
 */

Manager.removeAll = function () {
	var that = this;

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

Manager.size = function () {
	var size = 0;

	for (var record in records) {
		size++;
	}

	return size;
};

/**
 * Gets an explicit `PostIt` instance.
 * @param {string} id
 * @returns {object|void}
 */

Manager.get = function (id) {
	return records[id] || console.error('`id` does not match any `PostIt` instances.');
};

/**
 * Gets all `PostIt` instances.
 * @param {string} id
 * @returns {object}
 */

Manager.getAll = function (id) {
	return records;
};

/**
 * @see {@link postit.md#PostIt+on} for further information (signature, etc.).
 * @param {string} id
 * @returns {object|void}
 * @public
 */

Manager.on = function (id, event, listener) {
	var record = this.get(id);

	if (!record) {
		return;
	}

	record.instance.on(event, listener);

	return this;
};

/**
 * @see {@link postit.md#PostIt+off} for further information (signature, etc.).
 * @param {string} id
 * @returns {object|void}
 * @public
 */

Manager.off = function (id, event, listener) {
	var record = this.get(id);

	if (!record) {
		return;
	}

	record.instance.off(event, listener);

	return this;
};

/**
 * @see {@link postit.md#PostIt+emit} for further information (signature, etc.).
 * @param {string} id
 * @returns {object|void}
 * @public
 */

Manager.emit = function (id, event, target, message, origin) {
	var record = this.get(id);

	if (!record) {
		return;
	}

	record.instance.emit(event, target, message, origin);

	return this;
};

/**
 * @see {@link helpers.md#helpers.openWindow} for further information (signature, etc.).
 * @public
 */

Manager.openWindow = function (options) {
	return helpers.openWindow(options || {});
};

/**
 * Exposes the Manager's records.
 * @deprecated since v0.2.0
 * @public
 */

Manager.__records = records;
