
// Closures
/*
    A closure is the combination of a function bundled together (enclosed) 
    with references to its surrounding state (the lexical environment). 
    In other words, a closure gives you access to an outer function's scope 
    from an inner function.
*/

// Lexical Scopping

const car_func = () =>{
    console.log("This is the car-function (Parent Function)");

    const ford_func = () =>{
        console.log("This is the Ford-car-function (Subclass)");
    }

    const maruti_func = () => {
        console.log("This is the maruti-car function (Subclass)");
    }

    ford_func();        // by running this functions withing the the functions
    maruti_func();      // will show us the child functions
}

car_func();     // if we only run this it will not show the subclass


// CLOSURES

function makeFunc(){
    var name = 'Google';
    function showName(){
        console.log(name);
    }
    return showName();
}

var call_func = makeFunc();     // show google


// CLOSURE - another example

function adding(a){
    return function(b){
        console.log("a", a, " b ",b);
        return a + b;
    }
}

var add_5 = adding(5);
var add_10 = adding(10);

console.log(add_5(4));      // output : 9
console.log(add_10(3));     // output : 13
