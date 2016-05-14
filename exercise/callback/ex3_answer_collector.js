// Write a function answer_collector that takes an array of functions as an input
// and runs each of them, in turn. Each time you run a function, 
// collect its return value and add it to a results_array. 
// Return the results array from answer_collector.

var answer_collector = function (arrayFunc) {
	var results_array = []
	//iterate each array and run collect its return value add it to a results_array
	arrayFunc.forEach(function (element, index) {
		results_array[index] = element();
	});
	//return results_array
	return results_array;
};

var fn1 = function () {
 return "this should be the first value in results array";
};

console.log(answer_collector([fn1, function(){ return "this should be the second value in results array"; }]));