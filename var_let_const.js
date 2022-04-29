/*
        In javascript we can declare variable in 3 different ways
                VAR     LET     CONST
        Here all three variable can store variable but in a different way

        >> const is only one which can store constant value
*/

//-----------------------using VAR

console.log(var_a);     // 1st output -- undefined
var var_a = 10;
console.log("using var ",var_a);     // 2nd output -- 10

// but the catch is var is declared in the global scope
// this thing makes it different than let

//---------------------Similarly with let

// console.log(let_a)      // 1st output -- will give error
let let_a = 20;
console.log("using let ",let_a);         // 2nd output -- 20 (normal)

// this is showing us an error of RefferenceError
// this is because the let is locally scope

// --------------------Similarly with const

//console.log(const_a);       // 1st output -- will give same error as let
let const_a = 55;
console.log("using const ",const_a);       // 2nd output -- 55 (normal)

/*  
    SUMMARY--

    MEMORY ALLOCATION happens differently in "var"
    but in let and const it is happened differently
*/

//      TYPES OF ERROR
//      SyntaxError     RefferenceError     TypeError


//--------------------------------------------------------------------------

// VAR

var greet_var = "Hello there!!";

function func_var(){
    console.log(greet_var);     // before decalring
    greet_var = "Hey pal";      // after updating
    console.log(greet_var);     // after updating
}

console.log(greet_var);         // it will show "Hello there"
func_var();
console.log(greet_var);         // now if we print, the values has been updated
                                // this happens due to its global scope


// PROBLEMS WITH VAR

var greet_v = "namaste";
var times_v = 4;

if(times_v > 3){
    var greet_v = "Hello brother"       // var does not restrict if we redeclare variable
}

console.log(greet_v);


// ------------------------------------------------------------------------------------------

// LET

let greet_l = "let variable greet"
console.log(greet_l);       // printing the value

function func_let(){
    greet_l = "let is in the lexical scope";    // updates the value
    console.log(greet_l);
}

console.log(greet_l);       // printing the updated value


// EXAMPLE - 01


function func_let_a(){
    let a = 45;
    console.log("using let ",a);
}

func_let_a();
// console.log(a);      // it can not print the value because a was in the lexical scope


// EXAMPLE - 02

function func_let_b(){
    for(let i=1; i<=5; i++){
        console.log(i);         // i will only work in this scope
    }
}

function func_let_c(){
    for(let i=5; i<=10; i++){       // i will only work in this scope
        console.log(i);
    }
}

func_let_b();
func_let_c();

// ------------------------------------------------------------------------------------

// CONST

const var_c = 1000;
console.log("using const ", var_c);

// EXAMPLE 01

const var_c_1 = 5000;
const var_c_2 = 7500;

console.log("sum of 2 const -> ",var_c_1 + var_c_2);

// Thing we can not do in const
/*
    1. value updation
    2. we can not decalre the value later on,
        we have to initialize and decalre at the same time
*/