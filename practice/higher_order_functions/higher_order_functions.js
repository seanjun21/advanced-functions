// Take a callback function as input

// $('#button').on('click', function(){
//  console.log('The button has been clicked.');
// })

// Return a function as an output

var add = function(num){
 var num1 = num;

 return addToNum1 = function(num2){
   return num1 + num2;
 };
};

var invokeLater = add(5);

console.log(invokeLater(7)); //12

