'use strict';

var PostIt = require('./postit');
var instances = {};

/**
 * Factory Module.
 * @public
 */

var Factory = module.exports = {};

/**
 * Creates a `PostIt` factory (Singleton).
 * @param {string} id
 * @returns {object}
 * @public
 */

Factory.create = function (id) {
	var instance = instances[id];

	// If a given `instance` is found, use it and RETURN EARLY.
	if (instance) {
		return instance;
	}

	// Otherwise, create a new `instance` and store it.
	return (instances[id] = new PostIt(id));
};

/**
 * Destroys an explicit `PostIt`, factory instance.
 * @param {string} id
 * @returns {void}
 * @public
 */

Factory.destroy = function (id) {
	delete instances[id];
};

/**
 * Gets an explicit `PostIt`, factory instance.
 * @param {string} id
 * @returns {object}
 * @public
 */

Factory.get = function (id) {
	return instances[id];
};

/**
 * Gets all `PostIt`, factory instances.
 * @returns {object}
 * @public
 */

Factory.getAll = function () {
	return instances;
};
