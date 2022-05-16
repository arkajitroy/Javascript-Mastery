
// arrays - variables that hold multiple values

const num = new Array(1, 2, 3, 4, 5, 6);
console.log(num);

const fruits = ['apple', 'mango', 'pear', 'orange', 'banana'];
console.log(fruits);

// in javascript we can have mutiple data type elements
// this is only possible in javascript

const rand = ['apple', 45, 'banana', 64, 'banana']
console.log(rand)

// another way of assigning new array

const cars = [];
cars[0] = "bmw";
cars[1] = "suzuki";
cars[2] = "hondaCity";
cars[3] = "ferari";

console.log(cars)

// accessing the elements

console.log(fruits[2]);

// adding elements

num[6] = 45;
console.log(num);

// we can also add using - push method - insert at end

num.push(78);
console.log(num);

// unshift method - insert at beginning

num.unshift(111);
console.log(num);

// deleting the elements

fruits.pop();               // delete from last element
console.log(fruits);

// check something if it is array 

let check1 = Array.isArray(fruits);
console.log(check1);