'use strict';

describe('Manager', function () {
	var noop = function () {};
	var Manager = require('./manager');

	afterEach(function () {
		Manager.removeAll();
	});

	describe('add', function () {
		it('should add a new record', function () {
			Manager.add('foo');
			Manager.add('bar');

			expect(Manager.__records).to.contain.all.keys(['foo', 'bar']);
		});
	});

	describe('remove', function () {
		it('should remove an explicit record', function () {
			var foo = Manager.add('foo')
				.on('foo', 'foo.bar', noop)
				.on('foo', 'foo.baz', noop);

			var bar = Manager.add('bar')
				.on('bar', 'bar.bar', noop)
				.on('bar', 'bar.baz', noop);

			foo.remove('foo');
			bar.remove('bar');

			expect(Manager.__records).to.be.empty;
		});
	});

	describe('removeAll', function () {
		it('should remove all record', function () {
			var foo = Manager.add('foo')
				.on('foo', 'foo.bar', noop)
				.on('foo', 'foo.baz', noop);

			var bar = Manager.add('bar')
				.on('bar', 'bar.bar', noop)
				.on('bar', 'bar.baz', noop);

			Manager.removeAll();

			expect(Manager.__records).to.be.empty;
		});
	});

	describe('size', function () {
		it('should return the length of all records', function () {
			Manager.add('foo')
				.on('foo', 'foo.bar', noop)
				.on('foo', 'foo.baz', noop);

			Manager.add('bar')
				.on('bar', 'bar.bar', noop)
				.on('bar', 'bar.baz', noop);

			expect(Manager.size()).to.equal(2);
		});
	});

	describe('on', function () {
		it('should register event listeners', function () {
			Manager.add('foo')
				.on('foo', 'foo.bar', noop)
				.on('foo', 'foo.bar', noop)
				.on('foo', 'foo.baz', noop);

			Manager.add('bar')
				.on('bar', 'bar.bar', noop)
				.on('bar', 'bar.baz', noop)
				.on('bar', 'bar.baz', noop);

			expect(Manager.__records.foo.instance.listeners['foo.bar']).to.have.length(2);
			expect(Manager.__records.foo.instance.listeners['foo.baz']).to.have.length(1);

			expect(Manager.__records.bar.instance.listeners['bar.bar']).to.have.length(1);
			expect(Manager.__records.bar.instance.listeners['bar.baz']).to.have.length(2);
			expect(Manager.__records.foo.instance.listeners['foo.boo']).to.not.exist;
		});
	});

	describe('off', function () {
		it('should unregister all event listeners', function () {
			var foo = Manager.add('foo')
				.on('foo', 'foo.bar', noop)
				.on('foo', 'foo.bar', noop)
				.on('foo', 'foo.bar', noop);

			var bar = Manager.add('bar')
				.on('bar', 'bar.bar', noop)
				.on('bar', 'bar.bar', noop)
				.on('bar', 'bar.bar', noop);

			bar.off('bar', 'bar.bar');
			foo.off('foo', 'foo.bar');

			expect(Manager.__records.foo.instance.listeners['foo.bar']).to.have.length(0);
			expect(Manager.__records.bar.instance.listeners['bar.bar']).to.have.length(0);
		});

		it('should unregister explicit event listeners', function () {
			var listener1 = function () {};
			var listener2 = function () {};

			var foo = Manager.add('foo')
				.on('foo', 'foo.bar', noop)
				.on('foo', 'foo.bar', listener1)
				.on('foo', 'foo.bar', noop);

			var bar = Manager.add('bar')
				.on('bar', 'bar.bar', noop)
				.on('bar', 'bar.bar', listener2)
				.on('bar', 'bar.bar', noop);

			foo.off('foo', 'foo.bar', listener1);
			bar.off('bar', 'bar.bar', listener2);

			expect(Manager.__records.foo.instance.listeners['foo.bar']).to.have.length(2);
			expect(Manager.__records.foo.instance.listeners['foo.bar']).to.not.include(listener1);

			expect(Manager.__records.bar.instance.listeners['bar.bar']).to.have.length(2);
			expect(Manager.__records.bar.instance.listeners['bar.bar']).to.not.include(listener2);
		});
	});

	describe('emit', function () {
		it('should emit `message` events to explicit listeners', function (done) {
			var listener1 = sinon.spy();
			var listener2 = sinon.spy();
			var listener3 = sinon.spy();
			var listener4 = sinon.spy();

			var fooEvent = {
				dataParsed: {
					foo: 'bar',
					__event: 'foo.bar',
					__id: 'foo'
				}
			};

			var barEvent = {
				dataParsed: {
					bar: 'bar',
					__event: 'bar.bar',
					__id: 'bar'
				}
			};

			var foo = Manager.add('foo')
				.on('foo', 'foo.bar', listener1)
				.on('foo', 'foo.bar', listener2);

			var bar = Manager.add('bar')
				.on('bar', 'bar.bar', listener3)
				.on('bar', 'bar.bar', listener4);

			foo.emit('foo', 'foo.bar', window.self, { foo: 'bar' }, '*');
			bar.emit('bar', 'bar.bar', window.self, { bar: 'bar' }, '*');
			window.self.postMessage('foo', '*');

			setTimeout(function () {
				var listener1Args = listener1.args[0][0];
				var listener2Args = listener2.args[0][0];
				var listener3Args = listener3.args[0][0];
				var listener4Args = listener4.args[0][0];

				expect(listener1.calledOnce).to.be.true;
				expect(listener1Args.dataParsed).to.deep.equal(fooEvent.dataParsed);

				expect(listener2.calledOnce).to.be.true;
				expect(listener2Args.dataParsed).to.deep.equal(fooEvent.dataParsed);

				expect(listener3.calledOnce).to.be.true;
				expect(listener3Args.dataParsed).to.deep.equal(barEvent.dataParsed);

				expect(listener4.calledOnce).to.be.true;
				expect(listener4Args.dataParsed).to.deep.equal(barEvent.dataParsed);

				listener1.reset();
				listener2.reset();
				listener3.reset();
				listener4.reset();
				done();
			}, 1);
		});

		it('should emit `message` events to all listeners', function (done) {
			var listener1 = sinon.spy();
			var listener2 = sinon.spy();

			var foo = Manager.add('foo')
				.on('foo', 'foo.bar', noop)
				.on('foo', 'foo.baz', noop)
				.on('foo', '*', listener1);

			var bar = Manager.add('bar')
				.on('bar', 'bar.bar', noop)
				.on('bar', 'bar.baz', noop)
				.on('bar', '*', listener2);

			foo.emit('foo', 'foo.bar', window.self, { foo: 'bar' }, '*');
			foo.emit('foo', 'foo.baz', window.self, { foo: 'baz' }, '*');

			bar.emit('bar', 'bar.bar', window.self, { bar: 'bar' }, '*');
			bar.emit('bar', 'bar.baz', window.self, { bar: 'baz' }, '*');
			window.self.postMessage('foo', '*');

			setTimeout(function () {
				var listener1Args1 = listener1.args[0][0];
				var listener1Args2 = listener1.args[1][0];
				var listener1Args3 = listener1.args[2][0];
				var listener1Args4 = listener1.args[3][0];
				var listener1Args5 = listener1.args[4][0];

				var listener2Args1 = listener2.args[0][0];
				var listener2Args2 = listener2.args[1][0];
				var listener2Args3 = listener2.args[2][0];
				var listener2Args4 = listener2.args[3][0];
				var listener2Args5 = listener2.args[4][0];

				expect(listener1Args1.dataParsed.foo).to.equal('bar');
				expect(listener1Args2.dataParsed.foo).to.equal('baz');
				expect(listener1Args3.dataParsed.bar).to.equal('bar');
				expect(listener1Args4.dataParsed.bar).to.equal('baz');
				expect(listener1Args5.data).to.equal('foo');
				expect(listener1.callCount).to.equal(5);

				expect(listener2Args3.dataParsed.bar).to.equal('bar');
				expect(listener2Args4.dataParsed.bar).to.equal('baz');
				expect(listener2Args1.dataParsed.foo).to.equal('bar');
				expect(listener2Args2.dataParsed.foo).to.equal('baz');
				expect(listener2Args5.data).to.equal('foo');
				expect(listener2.callCount).to.equal(5);

				listener1.reset();
				listener2.reset();
				done();
			}, 1);
		});

		it('should normalize the `message` being sent via the `.postMessage` emitter', function (done) {
			var listener1 = sinon.spy();
			var listener2 = sinon.spy();
			var listener3 = sinon.spy();
			var listener4 = sinon.spy();
			var listener5 = sinon.spy();
			var listener6 = sinon.spy();

			var foo = Manager.add('foo')
				.on('foo', 'foo.bar', listener1)
				.on('foo', 'foo.baz', listener2)
				.on('foo', 'foo.boo', listener3);

			var bar = Manager.add('bar')
				.on('bar', 'bar.bar', listener4)
				.on('bar', 'bar.baz', listener5)
				.on('bar', 'bar.boo', listener6);

			foo.emit('foo', 'foo.bar', window.self, { foo: 'bar' }, '*');
			foo.emit('foo', 'foo.baz', window.self, 'foobar', '*');
			foo.emit('foo', 'foo.boo', window.self, [0, 1, 2], '*');

			bar.emit('bar', 'bar.bar', window.self, { bar: 'bar' }, '*');
			bar.emit('bar', 'bar.baz', window.self, 'barbar', '*');
			bar.emit('bar', 'bar.boo', window.self, [0, 1, 2], '*');

			setTimeout(function () {
				var listener1Args = listener1.args[0][0];
				var listener2Args = listener2.args[0][0];
				var listener3Args = listener3.args[0][0];
				var listener4Args = listener4.args[0][0];
				var listener5Args = listener5.args[0][0];
				var listener6Args = listener6.args[0][0];

				expect(listener1Args.dataParsed.foo).to.equal('bar');
				expect(listener2Args.dataParsed.__value).to.equal('foobar');
				expect(listener3Args.dataParsed.__value).to.have.members([0, 1, 2]);

				expect(listener4Args.dataParsed.bar).to.equal('bar');
				expect(listener5Args.dataParsed.__value).to.equal('barbar');
				expect(listener6Args.dataParsed.__value).to.have.members([0, 1, 2]);

				listener1.reset();
				listener2.reset();
				listener3.reset();
				listener4.reset();
				listener5.reset();
				listener6.reset();
				done();
			}, 1);
		});
	});

	describe('openWindow', function () {
		it('should open a new `window`', function () {
			var openWindow = Manager.openWindow({
				url: 'http://www.foo.com',
				title: 'foo',
				width: 700,
				height: 700
			});

			expect(openWindow).not.to.be.null;
		});
	});
});
