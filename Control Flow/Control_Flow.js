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






// EQUALL MEANS STRICT EQALITY

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

// ...................................

// SWITCH CASES





// switch (expression){
    //  case x:
    //    print
    //    break;

    //  case y:
    //    print
    //    break;
// }




let x = '0';
let bulb;

switch(x){
    case 0: 
       bulb = "off";
       console.log(bulb);
       break;
    case 1:
        bulb = "on";
        console.log(bulb);
        break;
    default:
        bulb = "no value found";
        console.log(bulb);


}



// .............................

let fruit = "banana";

 switch(fruit){
    case 'banana':
        console.log("Banana is good");
        break;
    case 'orange':
        console.log("I'm not a fan of oranges");
        break; 
    case 'apples':
        console.log("How you like them apples?");
        break;
    default:
        console.log("I have never heard that fruit");
           
 }







//  FOR LOOP  

// Dry princeple

//    for( initialExpression; condition; inc/dec){
//      //code
//    }
/*

for (let  i  = 0;   i <= 5;   i++) {
    console.log("hello ", i);
    
    
}


// nested loops

for (let  i  = 0;   i <= 5;   i++) {
    console.log("...Outer loop...", i);
    // nested loops
    for (let j = 0; j <= 5; j++) {
        console.log("...inner loop...", j);
        
    }
    
}


// priint your name and numbers from 0 to 1000 
let name99999 = "Nirupam Chakraborty";
for (let i = 0; i <= 1000 ; i++) {
    console.log(i, name99999);
    
}


// while loops in js
/*

while (condition) {
    // code
}

 */
/*
let i = 1;
while (i <= 5) {
    console.log("hello", i);
    i++;   // this is the breaking condition ofr the while loop
    // if if is not given then the loop will go to a infinite while loop
}
*/

// ....................................


/*

let i = 10;
while (i<= 100) {
console.log("Nirupam Chakraborty",i);
i++;    
}




// DO WHILE LOOPS
let i = 1;
do {
    console.log("hello" , i);
    i++
}while(i <= 5);





let i = 20;
do{
    console.log("Nirupam Chakraborty",i);
    i++;
}while (i <=400);





// LOGICAL OPERATORS




// 1. Logical AND (&&)
// --> True if both the operands/ boolean values are true, else evalutes to False
const a = true;
const b = false;
const c = 4;
console.log(a && a); // false




 
// 2. Logical OR (||)
// --> True if either of the operands/ boolean values is true, evalutes to false if both are false

console.log(a || b); // true 
console.log(b || b ); // false  
console.log(c > 2 || c < 2);  // true





// 3. Logical NOT (!)

console.log(a); //  true
console.log(!a); // false

// --> True if the operands is false and vice versa

*/

let Password = "Nirupam Chakraborty";
if (Password.length >= 8 && Password.includes("Nirupam")) {
    console.log("Valid password");
} else {
    console.log("Invalid Password");
}





// ...................




// ARRAYS IN JS





// ARRAYS --> 0 indexed 
const numbersArray = [1,2,3,4,5];
console.log(numbersArray);
         
const arrString = ["eat", "sleep", "code", "apply", "get job"];
console.log(arrString); // This will print the entire array

//  Accessing the items in array

console.log(arrString[3]);
console.log(arrString[4]);
console.log(arrString[0]);
console.log(arrString[1]);
console.log(arrString[2]);

// NESTED ARRAY || Two dimensional array
const arrNested = ["one", ["two", "three"], "four", "five"];
console.log(arrNested[1][1]);

// const arr = [{id:1},];
// console.log(arr);

// ..........................

const favSingers = ["Sonu", "Arijit", "Kishore"];
console.log(favSingers);

const favNumber = [5,77,88,99,999];
console.log(favNumber);

const mixedArray =["String",["AnotherArray"], 123, true];
console.log(mixedArray[0]);
console.log(mixedArray[1]); //console.log(mixedArray[1][1]);
console.log(mixedArray[2]);
// console.log(mixedArray[...PASSWORD...]);
console.log(mixedArray[3]);




// .....................


// Array Methods  

const arrFruits = [
    "apples",
    "pomegranate",
    "mango",
    "strawberry",
    "pineapple",
    "grapefruit"
];


/*

console.log(arrFruits);
console.log(arrFruits.length);  // 6

// Push --> it pushes item at the end of the array
arrFruits.push("Banana");

console.log(arrFruits);
console.log(arrFruits.length);  // 71
console.log(arrFruits);

// Pop --> It removes the last element of an array and returns the removed element 
arrFruits.pop();
console.log(arrFruits);

// Shift --> it removes the first element fromn an array and returns it. if the array is empty, undefined is returned and the array is not modified
arrFruits.shift();
console.log(arrFruits);

//  Unshift --> ELEMENTS TO INSERT AT THE Start of the array. Inserts new elements at the start of an array , and returns the new length of the array.
arrFruits.unshift("orange");

const newFruits = ["apples", "pomegranate", "mango"];
const moreFruits = ["Strawberries", "pineapple", "grapefruit"];
const totalFruits = newFruits.concat(moreFruits);

console.log(totalFruits); // this adds items iof both the arrays hence totalFruits contains 6  elements

const pl = ["Javascript","python","Golang","php"];
const numbers = [1,2,3,4,5];

console.log(pl.includes.("Golang")); // true

// console.log(pl.includes.("Dart")); // false 
console.log(pl.join("-----")); // Javascript-----python-----Golang-----php

console.log(pl.reverse()); // it reverses the order of the array

console.log(pl.slice(0,1)); // Javascript   // display from 0 index and just before 1 index
console.log(pl.slice(0,2)); // Javascript Python

console.log(numbers);
console.log(nukbers.sort());
*/
// .........................

// OBJECTS --> {label or key : value};

const person  = { 
    firstName: "Nirupam",
    lastName: "Chakraborty",
    age: 99,
    location: ["Planet", "Earth"],
    isProgramer : true,
};

console.log(person);
console.log(typeof person);


// const arr = [];
// console.log(typeof arr); // object

// Accessing items from ur object
console.log(person.age);
console.log(person.isProgramer);

// or we can also access by 
console.log(person["age"]); // 99


// to add new properties to the objects

person.middleName = "Naru";
console.log(person);

// to delete something from the object use reserve keyword delete

delete person.location;
console.log(person);

// ..................................

const car = {
    type: "SUV",
    model: "bmw",
    clolor: "white",
};

console.log(typeof car);

console.log(car.type = "toyota"); 
car.wheels = "alloy";
console.log(car);





// ...................................





// FUNCTIONS


//  Function declaration

function greet() {
    console.log("Hello");
}

// call , run , execute the function 
greet();
greet();
greet();


// function parameter

function sayHello(name1){
// console.log("hello ${name1}");
console.log("hello" + " " + name1);
}
sayHello("Sonu");
sayHello("Nirupam");

// return keyword in function

function add(x,y) {
    return x + y; 
}
const ans1 = add(90,99);
console.log(ans1);

const ans2 = add(90,999);
console.log(ans2);


// .................................
 
function myFunction(x,y) {
    return x*y;
    
}

const myAns = myFunction(5,99);
console.log(myAns);

// Function declaration 
sayHello("Nirupam");   // we can call the function before declaration 
function sayHello(name1){
    // console.log("hello ${name1}");
    console.log("hello" + " " + name1);
    }
   // sayHello("Sonu");






//  function Expression   
// it means storing a function in a variable
// we cannot call the functio before exression


const greetings1 = function(user){
    console.log("hello" +" "+ user);
}

greetings1("Induamti");




//  CALLbc_ak function
// when we provide function as an argument to other
// function that function is known as  CALLbc_ak function

function showCallFunc (fn){
    const value = 10;
    fn(value);
}
showCallFunc(function (value){
    console.log(value);
});



function greet1(name, cb){
    console.log("hello" + " " + name);
    cb()
}
function cb(){
    console.log(" cb function");

}

greet1("Jimjam", cb)


// greet1("Jimjam", functiom cb(){
//     console.log(" cb function");

// }
// )

// both works




// .............................
// function showCall(fn){
//  const value1 = 10;
//  fn(value1);
// }
// function showCall( functio (value1){
//     console.log(value1);
// });




// ........................





//  SCOPE

//scope in js refers to the current contextof code, which determines the accessibility of variables  to Javascript
// there are two types
// global scope variables are those declared outside of the block.

// local scope variables are those declared inside of a block.

let textMsg = "hello"; // global variable
{
    let msg = "world"; //local  variable
}
console.log(textMsg);

// local variable

function showMsg() {
    let textMsg = "tumse kiran dhup ki"; // local variable
    console.log(textMsg);
}

showMsg();

//....................

// for (let i = 0; i < 5; i++) {
//     console.log(i); // local variable
    
// }
// console.log(i); //GLOBALLY ERROR



// Methods in js are when functions are passed in objects , these are called object methods

function greet2(){
    return 'hello my name is ${person2.name2} I am  ${person2.age} years old';
}

const person2 = {
    name2 : "jimjam",
    age : 99,
    greet2,
};
console.log(person2.greet2());






// const person1 = {
//     name3 : "ani",
//     age : "99",
//     greet5: function(){
//         return 'hello, my name is ${person1.name3} and I am ${person1.age} years old';
//     },
// };

// console.log(person1.greet5());



// JSON IN JS  MEANS JAVASCRIPT OBJECT NOTATION
//  YOU MUST PEROVIDE DOUBLE QUOTES

// {
//     "name" : we can give any name
// }

// JSON

const data = {
    "name" : "jim",
    "age": 20,
    "email" : "js@GMAIL.COM",
    "isSubscribed" : true,
    "hobbies" : ["reading", "coding", "sleeping"],

    "address" : {
        "city" : "Digboi",
        "state" : "ASSAM"
    },
};


// JSON.stringify()  ==> converst json data into  string
console.log(data);

const jsonString = JSON.stringify(data);
console.log(jsonString);


//  PARSED  converts string into json data
const parsedObject = JSON.parse(jsonString);

console.log(parsedObject);


// date and time in js
// year, months , day, hours, minutes, seconds, miliseconds
const currDate = new Date();
console.log(currDate);

const cdate = new Date(7,7,7,7,8);
console.log(cdate);

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const Day = date.getDay();
console.log(year);
console.log(month);
console.log(Day);


console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());

// setdate and get date
date.setDate(date.getDate() + 1);
console.log(date);


// setInterval -> used rto execute code at specific time interval

// setInterval(
//     () => console.log('This function will be executed every 2 seconds' ), 2000
// );





// setTimeout

setTimeout(function(){
    console.log("this function will be executed after 3 seconds")
}, 3000)


// setInterval will run our code4 again and again untill we use clear Interval


// stop the interval after 10 seconds
const intervalId = setInterval(function(){
 console.log("this function is being executed at the interval");
}, 1000);

setTimeout(function(){
    clearInterval(intervalId)
    console.log("Interval stop");
}, 10000)




