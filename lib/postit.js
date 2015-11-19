'use strict';

/**
 * PostIt Module.
 * @constructor
 * @param {string} id
 * @public
 */

var PostIt = module.exports = function (id) {
	this.id = id;
	this.token = 0;
	this.listeners = {};
};

/**
 * Registers `.postMessage` event listeners.
 * @param {string} event
 * @param {function} listener
 * @returns {object}
 * @public
 */

PostIt.prototype.on = function (event, listener) {
	var that = this;

	that.listeners[event] = that.listeners[event] || [];

	function wrapListener(evt) {
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

		listener.call(this, evt);
	};

	listener.__token = wrapListener.__token = that.token++;

	window.addEventListener('message', wrapListener, false);
	that.listeners[event].push(wrapListener);

	return that;
};

/**
 * Unregisters (all | explicit) `.postMessage` event listeners.
 * @param {string} event
 * @param {function=} listener
 * @returns {object}
 * @public
 */

PostIt.prototype.off = function (event, listener) {
	var that = this;
	var listeners = that.listeners[event] || [];

	for (var i = 0; i < listeners.length; ++i) {
		if (!listener || listener.__token === listeners[i].__token) {
			window.removeEventListener('message', listeners[i], false);
			listeners.splice(i, 1);

			--i;
		}
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

PostIt.prototype.emit = function (event, target, message, origin) {
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
