var bigO = require("../big-o");
var expect = require('chai').expect;

describe('push', function() {
	it('will add a value on to the end of an array', function() {
		expect(bigO.newPush([1, 2, 3], 4, 5)).to.eql([1, 2, 3, 4, 5]);
	});
});

describe('pop', function() {
	it('will return the last value of an array', function() {
		expect(bigO.newPop([1, 2, 3])).to.eql(3);
	});
	it('will modify the array without the popped value', function() {
		var arr = [1, 2, 3];
		bigO.newPop(arr);
		expect(arr).to.eql([1, 2]);
	});
});

describe('newUnshift', function() {
	it('will return an array with the agruments inserted before the original array', function() {
		expect(bigO.newUnshift([3,4,5], 1,2)).to.eql([1, 2, 3, 4, 5]);
	});
});

describe('newShift', function() {
	it('will return the zero value of an array and move the rest of the values left once', function() {
		expect(bigO.newShift([1, 2, 3])).to.eql(1);
	});
	it('will modify the input array to exclude the previous first value', function() {
		var arr = [1, 2, 3];
		bigO.newShift(arr);
		expect(arr).to.eql([2, 3]);
	});
})

describe('unique', function() {
	it('will return an array with only unique values in the form of a string', function() {
		expect(bigO.unique([1, 2, 3, 4, 4,"hello"])).to.eql(["1", "2", "3", "4", "hello"]);
	});
});

describe('frequency2', function() {
	it('will give me the most common letter in an array of words', function() {
		expect(bigO.frequency2(["hello", "goodbye", "awesome", "banana"])).to.eql("e");
	});
});


