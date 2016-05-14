// Not only can functions be passed as inputs, they can also be returned as outputs.

var returns_a_func = function () {
  return function(){ console.log('BOOP!'); };
};

// have we booped yet?
var booper = returns_a_func();

// how about now?
booper();