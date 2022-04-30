
// So basically in javascript like all other languages
// it contains all the basic conditional statements
//      if    if-else   else-if    switch-case



let hr = new Date().getHours();
let min = new Date().getMinutes();

// IF-ELSE
// This program will print good night when time is more than 20:00

if( hr > 20){
    console.log("The time is ", hr,":",min," Good Night !!");
}else{
    console.log("The time is ", hr,":",min);
}

// ELSE-IF

if(hr<12){
    console.log("The time is ", hr,":",min," Good Morning !!");
}
else if(hr>12 && hr<16){
    console.log("The time is ", hr,":",min," Good Afternoon !!");
}
else if(hr>16 && hr<20){
    console.log("The time is ", hr,":",min," Good Evening !!");
}else{
    console.log("The time is ", hr,":",min," Good Night !!");
}


// EXAMPLE - EXERCISE
/*
    <html>
        <p> Choose a letter between A to E </p>
        <input id="mytext" type="text">
        <button onClick="guess()" />

        <div id="result"></div>
    </html>
*/
// JS - section
let guess_txt = document.getElementById("mytext").value;
var text;

function guess(){
    if(guess_txt === "c"){
        text = "Correct !!";
    }
    else if(guess_txt === "b" || guess_txt === "d"){
        text = "So close, try again";
    }
    else if(guess_txt === "a" || guess_txt === "e"){
        text = "Way offf, try again";
    }

    document.getElementById("result").innerHTML = text;     // updating the value
}