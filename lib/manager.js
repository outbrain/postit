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
 * @returns {object}
 * @public
 */

Manager.add = function (id) {
	var that = this;

	records[id] = {
		instance: Factory.create(id)
	};

	return that;
};

/**
 * Removes an explicit `PostIt` instance.
 * @param {string} id
 * @returns {object}
 * @public
 */

Manager.remove = function (id) {
	var that = this;
	var record = records[id];
	var instance = record.instance;

	// Remove listeners to avoid memory leaks.
	for (var event in instance.listeners) {
		for (var i = 0; i < instance.listeners[event].length; ++i) {
			instance.off(event, instance.listeners[event][i]);
		}
	}

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
		size += 1;
	}

	return size;
};

/**
 * @see {@link postit.md#PostIt+on} for further information.
 * @public
 */

Manager.on = function (id, event, listener) {
	var record = records[id];

	record.instance.on(event, listener);

	return this;
};

/**
 * @see {@link postit.md#PostIt+off} for further information.
 * @public
 */

Manager.off = function (id, event, listener) {
	var record = records[id];

	record.instance.off(event, listener);

	return this;
};

/**
 * @see {@link postit.md#PostIt+emit} for further information.
 * @public
 */

Manager.emit = function (id, event, target, message, origin) {
	var record = records[id];

	record.instance.emit(event, target, message, origin);

	return this;
};

/**
 * @see {@link helpers.md#helpers.openWindow} for further information.
 * @public
 */

Manager.openWindow = function (options) {
	return helpers.openWindow(options);
};

/**
 * Accesses the Manager's records.
 * @public
 */

Manager.__records = records;
