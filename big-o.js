function newPush(array) {
	var args = arguments;
	var newArr = array;
	for(var i =1; i < args.length; i++){
		newArr[newArr.length] = args[i];
	}
	return newArr;
}

function newPop(array) { 
	var end = array[array.length-1];
	
	delete array[array.length-1];
	return end;
}

function newUnshift(array) {
	var args = arguments;
	var newArr = array;
	for(var i = array.length + args.length-2; i >= 0 + args.length-1; i--) {
		newArr[i] = array[i-(args.length-1)];
	}
	for(var i = 0; i < args.length-1; i ++) {
		newArr[i] = args[i+1];
	}
	return newArr;
}

function newShift(array) {
	var start = array[0];
	for(var i = 0; i < array.length - 1; i ++) {
		array[i] = array[i+1];
	}
	delete array[array.length - 1];
	return start;
}



function unique(array) {
	var hash = {};
	var newArray = [];
	for(var i = 0; i < array.length; i++) {
		if(!hash[array[i]]) {
			hash[array[i]] = 0;
		}
	}
	for(key in hash) {
			newArray.push(key);
	}
	return newArray;
}

function frequency2(array) {
	var hash = {};
	for(var i = 0; i < array.length; i++) {
		var current = array[i];
		for(var j = 0; j < current.length; j++) {
			if(!hash[current.charAt(j)]) {
				hash[current.charAt(j)] = 1;
			} else {
				hash[current.charAt(j)]++;
			}
		}
	}
	//if another letter has the same value it will keep the first value
	var high = 0;
	var value;
	for(key in hash) {
		if(hash[key] > high) {
			high = hash[key];
			value = key;
		}
	}
	return value;
}



exports.newPush = newPush;
exports.newPop = newPop;
exports.newShift = newShift;
exports.newUnshift = newUnshift;
exports.unique = unique;
exports.frequency2 = frequency2;