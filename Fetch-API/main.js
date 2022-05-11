
// basic implementation of fetch-api

// so basically we are taking a text file
// and fetching the data and printing in the console

fetch("./content.txt")
    .then( (res) =>{
        return res.text();  // fetching the text
    })
    .then( (data) =>{
        console.log(data); 
    });                     


// Fetching data from api -- fetching a user data

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) =>{
        return res.json();
    })
    .then ((data) =>{
        console.log(data);
        for(let key in data){
            document.write(`Name -> ${data[key].name} <br>`);      // printing the objects
            document.write(`Company -> ${data[key].company.name} <br>`); // objects under object
            document.write(`Website -> ${data[key].website} <br> <br>`);
        }
    })
    .catch((err) =>{
        console.log(err);
    })
