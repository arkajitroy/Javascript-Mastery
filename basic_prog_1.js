
// output
console.log('Hello World') // most used
console.log('This is an error !!') // it will show an error output
console.warn('This is a warning')

// variables - var / let / const

// var - globally scoped (which is not efficient for script)
// let - we can reassign the value (it works locally)
// const - constant variable we can not reassign the value.

let score = 50;
console.log("current score is -> ", score)
score = 120;
console.log("updated score -> ", score)

// const

const marks = 80;       // value will not be changed and it will show a error
console.log("\nCuurent Marks -> ", marks);


// data types - String, Numbers, Boolean, null, undefined

const fname = 'John';
const lname = 'Wick';
const age = 40;
const rating = 4.7;
const isCool = true;
const x = null;
const y = undefined;

console.log('\nData Types---------')

console.log(typeof fname, typeof lname);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);

// print the variables with string

const name1 = "Rojar";
const age1 = 45;
const place = "France";

//old-way / classic-way
console.log(name1+" is "+age1+" old and he lives in "+place);

// template-literals - new_way
console.log(`${name1} is ${age1} old and he lives in ${place}`);

// storing in a variable
const output = `${name1} is ${age1} old and he lives in ${place}`;
console.log(output)