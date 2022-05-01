
// ARROW Functions (ES6)
// Arrow functions were introduced in ES6. It allow us to write shorter function syntax

// EXAMPLE 01 (Write a function that prints hello world)

const helloWorld = () =>{
    console.log("Hello World");
}
helloWorld();

// EXAMPLE 02 (Check the number is odd or even)

const oddEven = (num) =>{       // passing parameter num
    if(num % 2 == 0){
        console.log(num, "is Even");
    }else{
        console.log(num, "is Odd");
    }
}
oddEven(7);

// Example 03 (Find the sum of the element in an array)

const sumElement = (arr, size) => {
    res = 0
    for(let i=0; i<size; i++){
        res = res + arr[i];
    }
    return res;
}

let arr = [45, 21, 13, 35, 24];
let size = arr.length;

console.log(arr);
console.log("Sum of the element (array) -> ", sumElement(arr, size));