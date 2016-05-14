// It is often desirable to create generalized functions which take callback functions. 
// We can use these generalized functions, often called utility functions, 
// to compose higher order functions which do more specific tasks.


var doMathSoIDontHaveTo = function(n, func){ return func(n); };

var increment = function(n){ return n + 1; };

var square = function(n){ return n*n; };

doMathSoIDontHaveTo(5, square);
//25

doMathSoIDontHaveTo(4, increment);
//5
