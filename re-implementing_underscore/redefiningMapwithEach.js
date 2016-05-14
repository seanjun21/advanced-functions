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

// function that accepts array, or object as a single parameter and a function as a second parameter 
var map = function(input, funct) {
	var transformed_values = [];
	//create a return array
	if (typeof input === 'object') {
		transformed_values.push(each(input,funct));
	//if is array 
	// if(Array.isArray(input)){
	// 	//for loop
	// 	for (var i=0; i<input.length; i++) {
	// 		//function that receives value, index, array and function. Returns an array of values transformed by the function
	// 		transformed_values.push(funct(input[i], i, input)); 	
	// 	}
	// }
	// //else if object
	// else if (typeof input === 'object') {
	// 	for (var key in input) {
	// 		transformed_values.push(funct(input[key], key, input));
	// 	}
		
	} else {
		return 'Err 1: not an array or value';
	}

};

var numbers = [1,2,3,4,5,6];
var numb_object = {
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6
}
var doubler = function(value) { 
	return value * 2;
};
var modulo = function(value) {
	return value % 3;
}
var logger = function(value, index, collection) {
	console.log(value, index, collection);
};

var doubled_array = map(numbers, doubler);
var doubled_string = map('Hello World', doubler);
var modulo_object = map(numb_object, modulo);
var logged = each(numbers, logger)

console.log(doubled_array);
console.log(modulo_object);
console.log(doubled_string);