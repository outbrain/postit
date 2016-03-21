'use strict';

/**
 * PostIt Module.
 * @constructor
 * @param {string} id
 * @public
 */

var PostIt = module.exports = function(id) {
	this.id = id;
	this.nextGuid = 0;
	this.listeners = {};
};

/**
 * Registers an explicit event listener.
 * @param {string} event
 * @param {function} listener
 * @returns {object}
 * @public
 */

PostIt.prototype.on = function(event, listener) {
	var that = this;

	var listeners = that.listeners[event] = that.listeners[event] || [];
	listener.guid = that.nextGuid++;
	listeners.dispatcher = dispatcher;

	listeners.push(listener);

	function dispatcher(evt) {
		var data = null;

		if (/__event\s?"/.test(evt.data)) {
			try {
				data = evt.dataParsed = JSON.parse(evt.data);
			} catch (err) {
				console.error(err);
			}
		}

		if ('*' !== event &&
			(!data ||
			event !== data.__event ||
			that.id !== data.__id ||
			'null' !== evt.origin && -1 === data.__origin.indexOf(evt.origin))
		) {
			return;
		}

		for (var i = 0; i < listeners.length; ++i) {
			listeners[i].call(this, evt);
		}
	}

	// Only attach one dispatcher per `event`.
	if (listeners.length === 1) {
		window.addEventListener('message', dispatcher, false);
	}

	return that;
};

/**
 * Unregisters (all | explicit) event listeners.
 * @param {string} event
 * @param {function=} listener
 * @returns {object}
 * @public
 */

PostIt.prototype.off = function(event, listener) {
	var that = this;
	var listeners = that.listeners[event] || [];

	for (var i = 0; i < listeners.length; ++i) {
		if (!listener || listener.guid === listeners[i].guid) {
			listeners.splice(i--, 1);
		}
	}

	if (!listeners.length) {
		window.removeEventListener('message', listeners.dispatcher, false);

		delete that.listeners[event];
	}

	return that;
};

/**
 * Emits explicit `message` events, using the client's `.postMessage` emitter.
 * @param {string} event
 * @param {object} target
 * @param {string|array|object} message
 * @param {string} origin
 * @returns {object}
 * @public
 */

PostIt.prototype.emit = function(event, target, message, origin) {
	var that = this;
	var eventOrigin = window.location.href;

	switch (Object.prototype.toString.call(message)) {
		case '[object Function]':
			console.warn(message + ' should either be an `Object`, `Array` or `String`.');

			return that;

		case '[object Object]':
			message.__id = that.id;
			message.__event = event;
			message.__origin = eventOrigin;
			message = JSON.stringify(message);

			break;

		default:
			message = JSON.stringify({
				__value: message,
				__id: that.id,
				__event: event,
				__origin: eventOrigin
			});
	}

	target.postMessage(message, origin);

	return that;
};
