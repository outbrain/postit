'use strict';

describe('helpers', function() {
	var helpers = require('./helpers');

	describe('serialize', function() {
		it('should serialize an object into a formatted string', function() {
			var object = {
				a: 'fooa',
				b: 'foob',
				c: 'fooc'
			};

			expect(helpers.serialize(object)).to.equal('a=fooa, b=foob, c=fooc');
		});
	});

	describe('shallowMerge', function() {
		it('should merge a shallow object', function() {
			var object1 = {
				a: 'bara',
				b: 'barb',
				c: 'barc'
			};
			var object2 = {
				a: 'fooa',
				b: 'foob',
				c: 'fooc'
			};
			var object3 = {
				a: 'bara',
				b: 'barb',
				c: 'barc'
			};
			var object4 = {
				a: undefined,
				b: 'bazb',
				c: 'bazc'
			};

			var merged1 = helpers.shallowMerge(object1, object2);
			var merged2 = helpers.shallowMerge(object3, object4);

			expect(merged1).to.deep.equal(object2);
			expect(merged2).to.deep.equal({
				a: 'bara',
				b: 'bazb',
				c: 'bazc'
			});
		});
	});
});
