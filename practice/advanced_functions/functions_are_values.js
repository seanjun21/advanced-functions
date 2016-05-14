//Functions are values, just like numbers, strings, arrays and objects. 
// They can be saved to variables:

var say_hi = function () {
  console.log('hi');
};

var greeter = say_hi;

say_hi();
greeter();

say_hi = function () {
  console.log('meh');
};

say_hi(); // ??
greeter(); // ??