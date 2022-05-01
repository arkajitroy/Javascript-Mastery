
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

// Nested Objects

const myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "Suzuki",
        car3: "Honda"
    }
}
// Accessing the elements
console.log(myObj);
console.log(myObj.cars.car2);           // printing the nested array elements
console.log(myObj["cars"]["car1"]);     // another way of accessing


// Nested Array and objects

const carObject = {
    name: "Hyundai",
    nation: "South Korea",

    cars : [
        {
            name : "Grand i10",
            price : 530990,
            color : ['silver','black','white']
        },
        {
            name : "Aura",
            price : 599990,
            color : ['brown','orange']
        },
        {
            name : "Verna",
            price : 932600,
            color : ['white','black','silver']
        }
    ]
}
// Accessing
console.log(carObject);
console.log(carObject.cars);
console.log(carObject.cars[2]);