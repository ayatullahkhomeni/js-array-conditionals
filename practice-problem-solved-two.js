// practice-problem-solved-1
var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits);
console.log(fruits[1]);
console.log(fruits);
fruits[1] = 'Mango';
console.log(fruits);
var index = fruits.indexOf('Orange');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('watermelon');
console.log(fruits);

// practice-problem-solved-2

var name = ['self', 'tom', 'jane', 'peter', 'john'];
var myScore = 85;
var tomScore = 66;
var janeScore = 95;
var peterScore = 56;
var johnScore = 40;

if (myScore >= 80) {
    console.log('A');
}
else if (myScore >= 60) {
    console.log('B');
}
else if (myScore >= 50) {
    console.log('C');
}
else if (myScore >= 40) {
    console.log('D');
}
else {
    console.log('F');
}

if (tomScore >= 80) {
    console.log('A');
}
else if (tomScore >= 60) {
    console.log('B');
}
else if (tomScore >= 50) {
    console.log('C');
}
else if (tomScore >= 40) {
    console.log('D');
}
else {
    console.log('F');
}

if (janeScore >= 80) {
    console.log('A');
}
else if (janeScore >= 60) {
    console.log('B');
}
else if (janeScore >= 50) {
    console.log('C');
}
else if (janeScore >= 40) {
    console.log('D');
}
else {
    console.log('F');
}

if (peterScore >= 80) {
    console.log('A');
}
else if (peterScore >= 60) {
    console.log('B');
}
else if (peterScore >= 50) {
    console.log('C');
}
else if (peterScore >= 40) {
    console.log('D');
}
else {
    console.log('F');
}

if (johnScore >= 80) {
    console.log('A');
}
else if (johnScore >= 60) {
    console.log('B');
}
else if (johnScore >= 50) {
    console.log('C');
}
else if (johnScore >= 40) {
    console.log('D');
}
else {
    console.log('F');
}

// practice-problem-solved-3(i)

var num1 = 13;
var num2 = 79;
var num3 = 45;

/* if (num1 > num2 && num2 > num3 || num1 < num2 && num2 < num3) {
    console.log('The Largest Number');
}
else { console.log('The Lower Number') } */

if (num1 > num2) {
    console.log('The Largest Number');
}
else { console.log('The Lower Number') }

if (num2 > num3) {
    console.log('The Largest Number');
}
else { console.log('The Lower Number') }

if (num1 < num2) {
    console.log('The Largest Number');
}
else { console.log('The Lower Number') }

if (num2 < num3) {
    console.log('The Largest Number');
}
else { console.log('The Lower Number') }


// practice-problem-solved-3(ii)

var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 > side2 && side2 > side3 || side1 < side2 && side2 < side3) {
    console.log('Isosceles => two sides are equal');
}
else { console.log('false') } 