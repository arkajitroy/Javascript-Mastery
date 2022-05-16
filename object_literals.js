
// OBJECT LITERALS

const person = {
    firstname : 'John',
    lastname : 'Denver',
    age : 37,
    hobbies : ['music', 'movies', 'sports', 'reading'],
    address : {
        street : '50/A Main Street',
        city : 'boston',
        state : 'MA'
    }
}

console.log(person);
console.log(person.firstname, person.lastname);
console.log(person.hobbies[2]);     // it will print sports

// destructuring - ES6 feature -- by this we dont have write this.firstname .etc.

const {firstname, lastname} = person;
console.log(firstname);
console.log(lastname);

const {address: {city}} = person;
console.log(city);

// adding new propertes to the object

person.email = "john@email.com";
console.log(person.email);

// new object -- similar to json format

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isComplete: true
    },
    {
        id: 2,
        text: 'Go to shopping',
        isComplete: false
    },
    {
        id: 3,
        text: 'Buy some notebook',
        isComplete: true
    }
];

console.log(todos);

// converting this todos object to a string
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// taking a new 
const todos_new = [
    {
        id: 1,
        text: 'Take out trash',
        isComplete: true
    },
    {
        id: 2,
        text: 'Go to shopping',
        isComplete: false
    },
    {
        id: 3,
        text: 'Buy some notebook',
        isComplete: true
    }
];

console.log("\nLoop through Object---")

// looping through the array
for (let i = 0; i < todos_new.length; i++) {
    console.log(todos_new[i].text);
}

//other method
for(let todo of todos_new){
    console.log(todo);
}

// for each
todos_new.forEach(todo => {
    console.log(todo.text);
});


/*
// FOR LOOP

for (let i = 0; i < 10; i++) {
    console.log(`For loop number : ${i}`);
}

// while

let i=0;
while(i < 10){
    console.log(`while loop number : ${i}`);
    i++;
}
*/