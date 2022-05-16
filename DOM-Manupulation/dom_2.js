
// DOM TRAVERSING

var items = document.querySelector(".text-inp");
console.log(items);

//parentNode Method
console.log("PARENT NODE METHOD");
console.log(items.parentNode);
console.log(items.parentNode.parentNode); // parent of parent

//items.parentNode.parentNode.style.backgroundColor = "#ffefc4";

//parentElement Method
console.log("PARENT ELEMENT METHOD");
console.log(items.parentElement);
console.log(items.parentElement.parentElement);


// CHILD NODES
let child_elm = document.querySelector(".item-list")
console.log(child_elm.childNodes);
console.log(child_elm.childElementCount);   // number of child elements

// CHILDREN
let submit_form = document.querySelector(".search-section");
console.log(submit_form.children);
console.log(submit_form.children[1]);

/*
So there are some similar methods by which you can select the items
Siblings - (nextSibling / nextElementSibling / previousSibling)
*/

// CREATE ELEMENTS

// createElement - Method
// create new div

var newDiv = document.createElement("div");
// adding classname and id
newDiv.className = 'new-div';
newDiv.id = 'new-div';
//adding attributes
newDiv.setAttribute('title','new_created_div');

//create text node - and we will append that into the div

var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
console.log("NEWLY CREATED DIV\n",newDiv);


// NOW WE WILL INSERT THIS INTO OUR PAGE

var main_cont = document.querySelector("header");
var main_text = document.querySelector(".header-text");

const new_div = main_cont.insertBefore(newDiv, main_text);
new_div.style.color = "yellow";

// console.log(main_cont);
// console.log(main_text);