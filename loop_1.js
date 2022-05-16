
// basic loop

let a = 10;

for (let i = 0; i < a; i++) {
    //console.log("loop "+i);
}

// break and continue

for(let i=0; i<a; i++){
    if(i==7){
        break;
    }
    //console.log(i);
}

for (let i = 0; i < a; i++) {
    if(i==5){           // 5 will skip and then loop will continue uptil the range
        continue;
    }
    //console.log(i);
}

// while loop
let b = 1;
while(b<=5){
    //console.log(b);
    b++;
}

// do while loop
let counter = 1;
do{
    console.log("Printing the string for "+counter+" time");
    counter++;
}while(counter<10)