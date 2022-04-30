
// SWITCH-CASE

// EXAMPLE-01

var day;
var data = new Date().getDay();

switch(data){
    case 0:
        day = "Sunday";
        break;
    
    case 1:
        day = "Monday";
        break;
    
    case 2:
        day = "Tuesday";
        break;

    case 3:
        day = "Wednesday";
        break;
    
    case 4:
        day = "Thursday";
        break;
    
    case 5:
        day = "Friday";
        break;
    
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Unknown day";
}

console.log(day);


// EXAMPLE - 02 (Multiple case but same result)

switch(data){   
    case 1:    
    case 2:
    case 3:
        day = "Week has just started";
        break;

    case 4:    
    case 5:
        day = "Weekend is very near";
        break;

    case 6:
    case 0:
        day = "Hurray !! its the weekend ";
}

console.log(day);