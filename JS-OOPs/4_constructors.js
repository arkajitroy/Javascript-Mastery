
// CONSTRUCTORS
/*
        Remember : When you are creating a constructor 
                 always give capital alphabet at first
*/

function Person(first, last, age, eyecolor){
    this.fname = first;
    this.lname = last;
    this.age_count = age;
    this.eye = eyecolor;
}

const per1 = new Person("John","Doe",60,"brown");
const per2 = new Person("Rojer","Dicken",55,"black");
console.log(per1);
console.log(per2);


// adding methods to the object
per1.name = function(){
    return this.fname+ " " +this.lname;
};
console.log(per1.name());


// CONSTRUCTOR WITH METHODS

function PersonNew(first, last, age, eyecolor){
    this.fname = first;
    this.lname = last;
    this.age_count = age;
    this.eye = eyecolor;

    this.full_name = function(){
        return this.fname+ " " +this.lname;
    };
}

const p1 = new PersonNew("Lionel","Messi",34,"brown");
const p2 = new PersonNew("Christiano","Ronaldo",38,"black");

console.log(p1);
console.log(p2.full_name());


// BUILT IN JAVASCRIPT Constructors
/*
    new String()    // A new String object
    new Number()    // A new Number object
    new Boolean()   // A new Boolean object
    new Object()    // A new Object object
    new Array()     // A new Array object
    new RegExp()    // A new RegExp object
    new Function()  // A new Function object
    new Date()      // A new Date object
*/