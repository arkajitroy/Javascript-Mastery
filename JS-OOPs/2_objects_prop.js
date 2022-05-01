
// OBJECT PROPERTIES

// Looping through out all the properties and printing
const person_1 = {
    f_name : "Richie",
    l_name : "Rich",
    age : 32
}

let p1_data = "";
for(let x in person_1){
    p1_data += person_1[x]+ " ";      // adding and storing the data in a variable
}                                      // datas are being stored in the form of string
console.log(p1_data);

// adding a new property
person_1.nationality = "American";
console.log(person_1);

// deletting a property
delete person_1.age;
console.log(person_1);
