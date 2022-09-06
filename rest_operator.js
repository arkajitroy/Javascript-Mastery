// spread & rest operator ==> (...)
/*
    * Spread - It unpacks element
    * Rest - It packs element
    
    # It could be object, array
*/

// ********************** REST *********************** //

// packing all the parameters using spread
function sum(...numbers) {
  console.log("Parameters => ", numbers);
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  return result;
}

console.log("Summation result => ", sum(4, 8, 5));

// Using rest and spread

// using rest
function sum(...numbers) {
  console.log("Parameters => ", numbers);
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  return result;
}

const nums = [4, 7, 8, 9, 15];
console.log("Sumation Result => ", sum(...nums));

// COMPOSE
// using rest in a different way

function sum1(num1, num2, ...numbers) {
  console.log("Parameters => ", numbers);
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  return result;
}

console.log(sum1(4, 5, 6, 8));

// PRACTICAL EXAMPLE

console.log("------- PRACTICAL EXAMPLE --------");

const numbers_backend = [7, 150, 8, 9, 1, 2, 5, 6, 3, 4, 2];
console.log("Maximum Number = ", Math.max(...numbers_backend));

// Destructuring

console.log("------- DESTRUCTURING --------");
const user = {
  name: "Rakesh",
  city: "Mumbai",
  street: "main street",
};

const { name, ...address } = user;
// name is seperately treated
// but the other 2 properties of the object are being packed
// using rest
console.log("Name => ", name);
console.log("Address => ", address);
