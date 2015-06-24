'use strict';

var PostIt = require('./postit');
var instances = {};
var instance = null;

/**
 * Factory Module.
 * @public
 */

var Factory = module.exports = {};

/**
 * Creates a `PostIt` factory (Singleton).
 * @param {string} id
 * @public
 */

Factory.create = function (id) {
	instance = instances[id];

	// If a given `instance` is found, use it and RETURN EARLY.
	if (instance) {
		return instance;
	}

	// Otherwise, create a new `instance` and store it.
	return (instances[id] = new PostIt(id));
};
