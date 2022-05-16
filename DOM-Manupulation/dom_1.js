// Examine the document object
// console.dir(document);

console.log("domain name\n", document.domain);
console.log("url name\n", document.URL);
console.log("title of the page\n", document.title);

//suppose we want to change the title
// you can also do this passing in a variable
document.title = "DOM Manupulation";
console.log("New Title\n", document.title);

// select particulat section of the pages
console.log(document.body);
console.log(document.head);
// we can select particular items with their index number

//selecting the items by their type
console.log(document.forms);


// ---------------------------------------------------------

// GETELEMENTBYID

console.log(document.getElementById('header-title'));
console.log(document.getElementById('todo-header'));

// we can store them in the varibale
// and we can change as your requirement
let headerTitle = document.getElementById('header-title');
console.log("Previous\n", headerTitle.innerText);

headerTitle.innerText = "JavaScript";       //  changing the name
console.log("New\n", headerTitle.innerText);

/*
NOTE:
1. We can also do this same thing with textContent
2. Difference is innerText cannot see the hidden content 
3. Another way is innerHtml which we will cover later on
*/

// Changing the syles

let submit_btn = document.getElementById('submit-btn');
submit_btn.style.backgroundColor = "black";

// ---------------------------------------------------------

// GETELEMENTSBYCLASSNAME

var items = document.getElementsByClassName("item");
console.log(items);
// suppose we want to select individually
console.log(items[2]);

// change the text contents
var list_name = document.getElementsByClassName('todo-header');
list_name[0].textContent = "List of Tasks";
list_name[0].style.color = "orange";
console.log(list_name);


// change background multiple items
// For that we need to itterate through all the items

for(let i=0; i<items.length; i++){
    items[i].style.backgroundColor = "#e6e9ed";
    items[i].style.border = "none";
}


// ---------------------------------------------------------

// GETELEMENTBYTAGNAME

var all_div = document.getElementsByTagName("div");
console.log("ALL THE div tag\n\n",all_div);


// ---------------------------------------------------------

// QUERYSELECTOR -- it is very important and very useful
/*
We can select anything by just passing them in argument
1. FOR ID - ("#header-title")
2. FOR CLASS - (".header-title")
3. FOR TAG - ("input")
*/

var header = document.querySelector("#header-title");
console.log(header);
console.log(header.textContent);

// we want to chage a value -- but this time with tag name

var button_name = document.querySelector('input[type="button"]');
button_name.value = "Add";
console.log(button_name);

