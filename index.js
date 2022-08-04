var numbers = [45, 68, 78, 56, 89, 98];

// 1. get element value by index
var element = numbers[1];
console.log(element);

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(numbers[5]);
console.log(numbers);

// 2. set element value by index 
numbers[1] = 77;
console.log(numbers);

numbers[3] = 44;
console.log(numbers);

// 3. find index of an element
var positionIndex = numbers.indexOf(89);
console.log(positionIndex);

var positionIndex = numbers.indexOf(1189);
console.log(positionIndex); 