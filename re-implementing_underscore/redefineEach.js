var range = [1, 2, 3, 4, 5, 6]
var myObj = {
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6
};

var logger = function(value, index, collection) {
	console.log(value, index, collection);
};

var each = function(collection, callback) {
	if(Array.isArray(collection)){
		for (var i = 0; i < collection.length; i++) {
			callback(collection[i], i, collection);
		}
	} else {
		for (var key in collection) {
			callback(collection[key], key, collection);
		}
	}
}

each(range, logger);

each(myObj, logger);