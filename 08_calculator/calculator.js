const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(arr) {
  let accumulator = 0
  for(i = 0; i < arr.length; i++){
    accumulator += arr[i];
  }
  return accumulator; 

	
};

const multiply = function(arr) {
  let accumulator = 1;
  for(i = 0; i < arr.length; i++){
    accumulator *= arr[i] 
  }
  return accumulator;

};

const power = function(a, b) {
  return Math.pow(a, b);
	
};

const factorial = function(num) {
  if (num === 0 || num === 1)
  return 1;
for(i = num - 1; i >= 1; i--){
  num *= i;
} 

return num

	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
