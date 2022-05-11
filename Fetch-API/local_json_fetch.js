
// fetching the students.json -- from local json file

fetch("./student.json")
    .then( (res) =>{
        return res.json();
    })
    .then( (data) =>{
        console.log(data);

        for(let x in data){
            var name = `${data[x].name}`;
            var city = `${data[x].city}`;
            document.write(name," from ",city,"<br> <br>");
        }
    })
    .catch((err) =>{
        document.write("Can't fetch the data");
    });