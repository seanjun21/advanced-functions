var say_hi = function () {
  console.log('hi');
};

var greeter = say_hi;

//They can be passed as arguments (inputs) to functions:

var runner = function (fn) {
  console.log('Invoking a function now!');
  fn();
};

runner( function(){ console.log('okay'); } );
runner(say_hi);
runner(greeter);

// runner( say_hi() ); // ??