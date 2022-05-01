
// Javascript Function
// Just like other programming language js also has functions
// So basically there are two way of implementing the functions
//      (1) Normal Way      (2) Arrow Function (ES6)


// Example-01
// Creating a function which adds two number

function addNum(n1, n2){
    res = n1 + n2;
    console.log("sum of two numbers -> ", res);
    // console.log(n1+n2);  <--- OR we can do this
}
addNum(5,4);

// OR -- we can declare the variable in the parameter
// for this we just need to call the function without passing argument

function addNum2(num1= 50, num2= 25){
    console.log("sum of two numbers -> ", (num1+num2));
}

addNum2();

//---------------------------------------------------------------------------------
// EXAMPLE - 02 -- linear-search

function linearS(arr, x){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == x){
            return i;
        }
    }
    return -1;
}

const arr = [25, 30, 45, 11, 46];
let key = 11;
let pos = linearS(arr, key);
console.log(arr);                       // printing the array
console.log(key+" found at "+(pos+1));  // printing the result by increamenting 1