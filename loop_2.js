
// Loops in Array - with higher order array functions !!

const todos = [
    {
        id:1,
        text:"Take out the trash !!",
        date: "21 JAN 2022",
        done: true
    },
    {
        id:2,
        text:"Drink some water",
        date: "24 JAN 2022",
        done: false
    },
    {
        id:3,
        text:"Visit your aunts place",
        date: "25 JUNE 2022",
        done: true
    },
    {
        id:4,
        text:"Go to the post office",
        date: "31 MAR 2022",
        done: false
    }
];

// Looping through this array -- for (in in datset)

for(let i of todos){
    console.log(i.id);
    console.log(i.text);
}

// High Order Array Methods
// FOR EACH / MAP / FILTER

//------------------------------------------------------------FOR EACH LOOP

todos.forEach(function(x){
    console.log(x.text);
});

//-------------------------------------------------------------MAP FUNCTION

const todo_date = todos.map(function(x){
    return x.date;
});

console.log(todo_date);

//-------------------------------------------------------------FILTER FUNCTION
// This is will return the array values which matches with the condition.

const fil = todos.filter(function(x){
    return x.done == true;
});
console.log(fil);

// But we just want to get the text, for that we have to do !!

const fil_2 = todos.filter(function(x){
    return x.done == true;
}).map(function(todo){
    return todo.text;
});
console.log(fil_2);
