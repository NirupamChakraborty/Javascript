//  VARIABLES
//  variables can be written by let, const, var.
// cannot write a reserved keyword as a variable.

// (reserve keyword) (variable name) (type of value)


// declare a variable
// let name;
// let name = 5;

// ASSIGN A VALUE

let banana;
banana = " IT IS A INDIAN FRUIT"

console.log(banana);

// let const var

let youtubeChannel = "kunal kushwaha";

youtubeChannel = "huxn webdev"
console.log(youtubeChannel);



// const youtubeChannel = "kunal kushwaha";

// in const we cannot change the value of the variable, it gives an error .


// youtubeChannel = "huxn webdev"
// console.log(youtubeChannel);

let name = "NIRUPAM CHAKRABORTY";
let whatDoYouWannaBecomeInYourLife = "PROGRAMMER";
let gender = "Male";
let twitterHandle = "@NirupamCty";
console.log(name);
console.log(whatDoYouWannaBecomeInYourLife);
console.log(gender);
console.log(twitterHandle);

// Primitive types

// 1. Number 

let num = 1000000.99;

console.log(num);
console.log(typeof num);

// BASIC MATH IN JS

console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(2 / 3);
console.log(2 % 3);
console.log(2 ** 3);


// increment and decrement
let counter = 0;
counter++;
console.log(counter);

// .........................


let firstFavNum = 99;
let secondFavNum = 90;
console.log(firstFavNum + secondFavNum);
console.log(firstFavNum - secondFavNum);
console.log(firstFavNum * secondFavNum);
console.log(firstFavNum / secondFavNum);
console.log(firstFavNum % secondFavNum);
console.log(firstFavNum ** secondFavNum);




//  BOOLEAN --> True \\ false


// let isTrue = true;
// console.log(isTrue);

// let isbool = false;
// console.log(isbool);






// NaN --> Not a Number 

let isTrue = NaN;

console.log(isTrue);

let number = 89;

console.log(number + undefined);
// this will give a NaN





// FALSY VALUES IN JAVASCRIPT (falsy)

//       --> null
//       --> false
//       --> undefined
//       --> 0
//       --> -0
//       --> NaN 
//       --> '' , "" ,``, (empty quotes)



// undefined injs means error but it can be assigned to a variable

let notDefined = undefined;
console.log(notDefined);

// difference between null and undefined is that 
// null can be set by programers and undefined can be set by js compilers
//  if variable is not assigned to any thing
let notDefined1 = null;
console.log(notDefined1);


// let notDefined;
// console.log(notDefined);    --> undefined



// ...........................
let isProgramingLanguage = true;
let isJsHard = false;
console.log(isProgramingLanguage);
console.log(isJsHard);
let favNumb = 99;
console.log(favNumb + undefined);

// .................................




// COMPARISION OPERATORS

// --> Relational Operators
// --> Equality Operators




// --> Relational Operators

// > Greater then
// < less than
// >= greater than or equall to 
// <= less than or equall to 

console.log(10 > 10); // false
console.log(10 < 10); // false
console.log(10 >= 10); // true
console.log(10 <= 10); // true

// .................................


// Equality operator

// === (triple equality) strict equality  (type + value) 
// !== strict not equality operator (type + value)
// == lose equality operator (value)
// !=  lose not equality operator (value)




// console.log(10 === 10); strict equality
// console.log(10 !== 10); strict ineqality
console.log(10 !== 10);
console.log(10 !== "10");
console.log(10 !== 90);
console.log(10 !== "90");

console.log(10 ==10 ); // lose equality
console.log(10 == "10");
console.log(10 != 10);
console.log(10 != "20");

// ..............................

let firstFavNumb = 99;
let secondFavNumb = 90;
console.log(firstFavNumb > secondFavNumb);
console.log(firstFavNumb < secondFavNumb);
console.log(firstFavNumb >= secondFavNumb);
console.log(firstFavNumb <= secondFavNumb);
console.log(firstFavNumb === secondFavNumb);
console.log(firstFavNumb == secondFavNumb);
console.log(firstFavNumb !== secondFavNumb);
console.log(firstFavNumb != secondFavNumb);






// STRINGS IN JAVASCRIPT

let firstName = "Sonu";
let secondName = "Chakraborty";
// let fullName = firstName + secondName;
// let fullName = firstName + " " + secondName;
console.log(fullName);
console.log(fullName);

//  1. CONCATENATION
let fullName = firstName.concat(secondName);
console.log(fullName);















 
