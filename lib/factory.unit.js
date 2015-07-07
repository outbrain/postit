'use strict';

describe('Factory', function () {
	var Factory = require('./factory');

	describe('create', function () {
		it('should create a new instance', function () {
			expect(Factory.create('foo')).to.contain.all.keys(['id', 'token', 'listeners']);
		});

		it('should memoize existing instances', function () {
			var foo1 = Factory.create('foo');
			var foo2 = Factory.create('foo');

			var bar1 = Factory.create('bar');
			var bar2 = Factory.create('bar');

			expect(foo1).to.equal(foo2);
			expect(bar1).to.equal(bar2);
		});
	});
});
