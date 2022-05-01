
// OBJECT ORIENTED PROGRAMMING
// always use const in object -- good practice

// Creating an object -- naming person1
// properties -- f_name, l_name, age, eye_color

const person1 = {
    f_name : "John",
    l_name : "Willow",
    age : 47,
    eye_color : "blue"
}

console.log("Hello, "+person1.f_name+" "+person1.l_name);
console.log("Age is "+person1.age);

// Creating an empty javascript object then adding properties to it

const person2 = {};
person2.f_name = "Jack";
person2.l_name = "Danicks";
person2.age = 43;
person2.eye_color = "brown";

console.log(person2);       // printing the whole object - JSON Format

// Using new keyword

const person3 = new Object();
person3.f_name = "Jack";
person3.l_name = "Danicks";
person3.age = 43;
person3.eye_color = "brown";

console.log(person3);


// Nested Object