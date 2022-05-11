
// So basically how we can save the data into out server
// Here we will use -- Insert, Update, Delete method

// post -- method

// adding event listener - through submit button
document.getElementById('submit-btn').addEventListener("click", (e) => {

    e.preventDefault();     // will not refresh the page

    // taking all the value from the form
    var input_data = {
        title : document.getElementById('title-inp').value,
        msg : document.getElementById('msg-inp').value,
        id : document.getElementById('id-inp').value
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method : 'POST',
        body : JSON.stringify(input_data),
        headers : {
            'Content-type' : 'application/json; charset=UTF-8',
        }
    })
        .then( (res) =>{
            return res.json();
        })
        .then( (data) =>{
            console.log(data);
        })
});