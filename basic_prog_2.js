
// String Operations

const s = "Hello World";
console.log(s);
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5));

let s1 = s.substring(6,11); // extracting substring
console.log(s1);
s1 = s1.toUpperCase();  // storing in same variable
console.log(s1);


const st1 = 'tech, code, gui, cli, uiUx';
console.log(st1.split(''));     // will print each charecters
console.log(st1.split(', '));   // will print each strings

// escape chrecters

const st2 = "We are the so called \"vikings\" from the north";
console.log(st2);

// string to object

let name_new = "McDonnalds"
console.log("\nString -> "+name_new+" type is -> "+typeof name_new);

let name_new_obj = new String("McDonnalds")
console.log("\nString -> "+name_new_obj+" type is -> "+typeof name_new_obj);


// replacing string content

let name_1 = "Microsoft is the best company";
let new_name = name_1.replace("Microsoft","Tata");
console.log(new_name);

// string concatination

let f_name = "Tony";
let l_name = "Stark";
console.log(f_name.concat(" ", l_name));


// string search

// search string of index

let st_new = "please locate to kolkata";
console.log("\nstring -> "+st_new);      // l is on 7 index
console.log(st_new.indexOf("locate"));
console.log(st_new.search("locate"));    // l is located on which index

// string match

let st_44 = "rain in spain stays mainly in the plain";
console.log(st_44.match(/ain/g));    // how many times "ain" has occured