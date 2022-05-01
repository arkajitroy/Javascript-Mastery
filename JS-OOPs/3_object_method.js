
// OBJECT and Methods

// object-01
const book1 = {
    title: "Fire Flames",
    year: 1995,
    author: "Rick Stans",
    
    //method
    Summary: () => {
        return `${this.title} was written by ${this.author}.`
    }
}

//object-02
const book2 = {
    title: "Do Epic Shit",
    year: 2022,
    author: "Warekoo",
    
    //method
    Summary: () => {
        return `${this.title} was written by ${this.author}.`
    }
}

//-------------------------------------------------------------------------

//Printing particular values of the object
console.log("Author (Book-1) -> ", book1.author);
console.log("Year (Book-2) -> ", book2.year);

// printing the whole object
console.log(book1);

//this will print all the values in an array
console.log(Object.values(book2));

//this will print all the attributes in an array
console.log(Object.keys(book2));