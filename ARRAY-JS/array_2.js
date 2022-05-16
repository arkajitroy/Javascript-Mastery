
// taking new array

const cars = new Array("bmw", "volvo", "toyota", "ferari");
console.log(cars);

// accessing the elements

let car1 = cars[2];
console.log(car1);

let car2 = cars[0];
console.log(car2);

// changing the elements

console.log("prev array -> "+cars);
cars[1] = "swift";
cars[3] = "maruti";
console.log("new array -> "+cars);

// printing array 
// document.getElementById("name_of_the_div").innerHTML= cars;

// json format - object basis

const person = {
    firstname : "Ryan",
    lastname : "Reynolds",
    age : 52
}

console.log(person);

// looping through the array

cars.forEach(elements => {
    console.log(elements);
});

// converting arrays to string

let cars_st = cars.toString();
console.log(cars_st);

// array concatination

console.log("\nArray concatination");
let arr1 = ["C++","JAVA","Python"];
let arr2 = ["spring","pandas","React"];

const concat_arr = arr1.concat(arr2);
console.log(concat_arr);

// array filtering

let values = [64, 23, 25, 14, 15, 16, 19, 78, 11, 27, 64, 11];

function over18(value) {
    return value > 18;
}

let result = values.filter(over18);
console.log(result);
