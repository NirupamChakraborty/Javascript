//  CONTROL FLOW



//  PSEUDO CODE
// if === money
//   --> buy some stuff
// else !== money
//   -->bring some money dude  






// ...............................





//  IF ELSE  STATEMENTS SYNTAX




// if (condition){...code...}

//  else if (condition){...code...}

//  else {...code...} 



let a = 20;
let b = 20;

if (a > b){
    console.log("a is greater than b");
}
else if(a < b){
    console.log("a is less than b");
}
else{
    console.log("a is eqall to b");
}




// .................
// Conditional statement

let time = 10;
let greetings;

if (time < 10){
    greetings = "Good Morning";
    console.log(greetings);
} else if (time < 20){
    greetings = "Good Afternoon";
    console.log(greetings);
}else {
    greetings = "Good Evening";
    console.log(greetings);
}


// .......................

let PASSWORD;

if(PASSWORD === 8){
    console.log("WELCOME");
}else if(PASSWORD <= 8){
    console.log("PASSWORD IS TOO SHORT");
}else if(PASSWORD >= 8){
    console.log("PASSWORD IS TOO LONG" + " PASSWORD SHOULD BE 8 CHARACTERS");
}else{
    console.log("PLEASE PROVIDE A PASSWORD");
}