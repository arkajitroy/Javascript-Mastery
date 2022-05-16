
// All the important Methods that we should know in the array

const items = [
    {
        name: "Redmi Note 10 Pro", brand: "xiaomi",price:20000,
    },
    {
        name: "IN NOTE 3", brand: "micromax", price:15000,
    },
    {
        name: "Realme 8 Pro", brand: "realme", price:18500,
    },
    {
        name: "Moto G60", brand: "motorola", price:17000,
    },
    {
        name: "Galaxy F62", brand: "samsung", price:21000,
    },
    {
        name: "Mi 10T", brand: "xiaomi", price:30000,
    },
    {
        name: "Oneplus 9 pro", brand: "oneplus", price:45000,
    }
];

// Filter Method
const filteritems = items.filter((flag) => {
    return flag.price >20000;
});
console.log(filteritems);


// MAP Method
const all_brand = items.map((flag) => {
    return flag.brand;
});
console.log(all_brand);


//FIND Method
const find_item = items.find((flag) =>{
    return flag.brand === "samsung";
})
console.log(find_item);


//FOR EACH LOOP     -> This works similar to like FOR LOOP
items.forEach((x) =>{
    console.log(x.name);
})

//SOME FUNCTION     -> This returns boolean value
const check_some = items.some((flag) =>{
    return flag.price <= 30000;
})
console.log("Is there are any product which is <30,000 -> ", check_some);


// REDUCE FUNCTION
const total = items.reduce((total, item) => {
    return item.price + total
}, 0);
console.log(total);


//Includes

const items_arr = [1, 2, 5, 7, 9, 10];

console.log(items_arr);
const check_1 = items_arr.includes(15);
console.log("Contains 15 -> ", check_1);

const check_2 = items_arr.includes(10);
console.log("Contains 10 -> ", check_2);