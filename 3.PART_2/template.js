
//  TEMPLATE STRINGS 
/*

Template strings, also known as template literals, are a feature in js 
that allows you to create strings with embedded expressions. They are denoted by bts ` ` instead of 
single or double quotes. Template stings provide a more flexible and consise 
way to construct strings, especially when they involve variables or expressions.

*/
console.log(`this is 
    a template string `);

console.log(`${2 + 2}`);  // 4

const place = "mountain";
const state = "Arunachal Pradesh";

console.log(`${ place} ${state}`);


function info(){
    return `My name is Nirupam`;
}
console.log(`${info()}`);

// Arrow functions 
/*
Arrow functions also known as fat arrow functions, are a conciser
and shorter way tov define functions in JS. They were introduced in ECMAScript 6 (ES6)
and provide a more compact syntax compared to traditional expression 
 */


//  function greet99(username){
//     return `Hello ${username}`;  
//  }

//refractorev using arrow function

 greet99 = (username) => {
    return `Hello ${username}`;  
 }



 const greet99 = (username) => {
    return `Hello ${username}`;  
 }


 console.log("Nirupam");

//..........................
//  function double(number){
//     return number * 2;

//  }

const double = (number) => {
    return number * 2;

 }
 console.log(double(99));
//  ..............................


setTimeout (() =>{
 console.log("Hello"); 
 setTimeout(()=>{
    console.log("hey");
    setTimeout(()=>{
        console.log("Namaste");
        setTimeout(()=>{
            console.log("yo");
            setTimeout(()=>{
                console.log("Namashkar");
            },2000)
        },2000)
    },2000)
 },2000)
},2000) ;