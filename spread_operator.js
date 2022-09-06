// spread & rest operator ==> (...)
/*
    * Spread - It unpacks element
    * Rest - It packs element
    
    # It could be object, array
*/

// ********************** SPREAD OPERATOR *******************//

//Cloning
const numbers = [1, 2, 3];
const new_numbers = [...numbers]; // using rest to unpack
console.log(new_numbers);

// Merge
const set_num_1 = [1, 2, 3];
const set_num_2 = [4, 5, 6];
console.log([...set_num_1, ...set_num_2]);

// Compose
const num_1 = [1, 2, 3];
const num_2 = [4, 5, 6];
console.log(["Apple", ...num_1, ...num_2, "Orange"]);

// ---------------------------- String -------------------------
// converting the string into array
const st = "apple";
console.log([...st]);

// ---------------------------- Objects ------------------------
const order = {
  id: 1,
  customerName: "Tony",
  date: "1/10/2022",
  items: {
    1: "bag",
    2: "cap",
  },
};
// Cloning the object - (Shallow Clone)
const new_order = { ...order }; // unpacking the object into this object
console.log(new_order);

// Merging two objects

const user = {
  name: "Tony",
  age: 45,
};

const address = {
  street: "new york",
  country: "united state of America",
};
// merging two objects using spread operator
const user_details = {
  ...user,
  ...address,
};

console.log(user_details);
