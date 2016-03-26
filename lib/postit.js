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
 * Registers a `listener` to a `PostIt` instance (`id`), for a given `event`.
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

		if (/__postit\s?"/.test(evt.data)) {
			try {
				data = evt.dataParsed = JSON.parse(evt.data);
			} catch (err) {
				console.error(err);
			}
		}

		if (!data || // The preferred symbol (`__postit`) is not present, or an 'Uncaught SyntaxError' occurs, whilst parsing `evt.data` => RETURN EARLY,
			that.id !== data.__id || // or an instance identifier does not match => RETURN EARLY,
			(event !== data.__event && '*' !== event) || // or an event does not match, and an asterisk (*) is not the event => RETURN EARLY
			('null' !== evt.origin && -1 === data.__origin.indexOf(evt.origin)) // or `'null'` is not the `evt.origin`, and the origins do not match. => RETURN EARLY
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
 * - If a `listener` is not provided, then unregister all listeners from a `PostIt` instance (`id`), for a given `event`.
 * - If a `listener` is provided, then unregister a `listener` from a `PostIt` instance (`id`), for a given `event`.
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
 * - If `event` is an asterisk (\*), then emit an `event` to all listeners registered to a `PostIt` instance (`id`), for all given `event`s.
 * - If `event` is not an asterisk (\*), then emit an `event` to all listeners registered to a `PostIt` instance (`id`), for a given `event`.
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
	var symbol = 'postit';

	switch (Object.prototype.toString.call(message)) {
		case '[object Function]':
			console.warn(message + ' should either be an `Object`, `Array` or `String`.');

			return that;

		case '[object Object]':
			message.__postit = symbol;
			message.__id = that.id;
			message.__event = event;
			message.__origin = eventOrigin;
			message = JSON.stringify(message);

			break;

		default:
			message = JSON.stringify({
				__postit: symbol,
				__value: message,
				__id: that.id,
				__event: event,
				__origin: eventOrigin
			});
	}

	target.postMessage(message, origin);

	return that;
};
