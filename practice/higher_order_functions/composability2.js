// It is often desirable to create generalized functions which take callback functions. 
// We can use these generalized functions, often called utility functions, 
// to compose higher order functions which do more specific tasks.


var ifThen = function(condition, isTrue, isFalse, arg){
  if(condition(arg)){
    return isTrue(arg);
  } else {
    return isFalse(arg);
  }
};

var isEven = function(number){ return number % 2 === 0 };
var double = function(number){ return number * 2 };
var triple = function(number){ return number * 3};

var range = [1,2,3,4,5,6]; 

var oddOrEven = function(array){
  for (var i = 0; i < array.length; i++){
    array[i] = ifThen(isEven, double, triple, array[i]); 
  }

  return array; 
}

oddOrEven(range)//[3, 4, 9, 8, 15, 12]

/////////

array.forEach(callback); 

var range = [1,2,3,4,5,6];
var logger = function (value){
  console.log(value);
}

range.forEach(oddOrEven(number)) //['1','2','3','4','5','6'];
