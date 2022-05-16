
// EVENT LISTENER

// method-1 (bit old method)
function buttonclick(){
    console.log("Black Button Clicked !!")
}

//method-2
document.getElementById("c_btn_3").addEventListener('click', function(){
    console.log("Violet Button Clicked");
});

//method-2 extended
const red_btn_click = () =>{
    console.log("Red Button Clicked");
}
document.getElementById("c_btn_2").addEventListener("click", red_btn_click)


// CHANGING THE CONTENT USING EVENTLISTENER
const change_black = () =>{
    let res_box = document.getElementById("result-box");
    res_box.style.backgroundColor="black";
    res_box.style.color= "white";
}

const change_red = () =>{
    let res_box = document.getElementById("result-box");
    res_box.style.backgroundColor="red";
    res_box.style.color= "white";
}

const change_vio = () =>{
    let res_box = document.getElementById("result-box");
    res_box.style.backgroundColor="blue";
    res_box.style.color= "white";
}

document.getElementById("c_btn_1").addEventListener("click", change_black);
document.getElementById("c_btn_2").addEventListener("click", change_red);
document.getElementById("c_btn_3").addEventListener("click", change_vio);


// EVENT-PARAMETER - This will fire an event in the console
function event_call(e){
    console.log(e);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.type);            // more attributes are there !!
}
document.getElementById("c_btn_1").addEventListener("click", event_call);
document.getElementById("c_btn_2").addEventListener("click", event_call);
document.getElementById("c_btn_3").addEventListener("click", event_call);


//EVENT TYPE

var sub_btn = document.getElementById("submit-btn");

function run_event(e){
    console.log("Event TYPE -> ", e.type);
    console.log("value ->\n", e.target.value);
}

sub_btn.addEventListener('click', run_event);
sub_btn.addEventListener('dblclick', run_event);
sub_btn.addEventListener('mousedown', run_event);
sub_btn.addEventListener('mouseup', run_event);         //release hold
sub_btn.addEventListener('mouseenter', run_event);      // mouse hover
sub_btn.addEventListener('mouseleave', run_event);
sub_btn.addEventListener('mouseover', run_event);       // similar to mouseenter
sub_btn.addEventListener('mouseout', run_event);        // similar to mouseleave


// TRACK WHAT WE ARE WRITTING

let item_inp = document.querySelector('input[type="text"]');
let form = document.querySelector('form');

item_inp.addEventListener('keydown', run_event)
