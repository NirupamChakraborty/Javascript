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

// let fullName = firstName.concat(secondName);
// console.log(fullName);

//  2. APPEND
// firstName += " Nirupam";  Sonu Nirupam 
// console.log(firstName); 


// 3. LENGTH OF STRING IN JS

console.log(firstName.length);

// 4. CASES IN JS 

console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

// 5. SLICE OF STRINGS IN JS




console.log(firstName.slice(0,1));
   //   slice(index, postion of the letter)




//     6. SPLIT AND JOIN IN JS 
console.log(firstName.split(" ").join(" "));
// THE SPLIT SPLITS THE ALPHABETS OF THE STRING INTO AN ARRAY 
// JOIN  JOINS THE EACH ALPHABET INTO THE STRING 




// 7. INCLUDES -> give true if an alphabet in present in our string
console.log(firstName.includes("N"));


// 8. TRIM -> IT TRIMS IS THERE IS ANY SPACES IN OUR STRING
  


// console.log(firstName.trim());


// use of ` ` in strings  -> ` ` this is used to write multiline string including spaces


let desc = `This is a 
     string
     99
     99
     99
     99
     99
     99
     99
     99
     99
     99
     99
     99
     99
     99
     99
     99
     99
     99
     99
     99`;

     console.log(desc);


    //  ` ` this is also used to append strings 

    let name1 = "Sonu";
    let title = "Chakraborty";

    let fullName1 = `${name1} ${title}`;

    console.log(fullName1);     // Sonu Chakraborty

    // let fullName1 = `${name1} ${title} anything`;

    // console.log(fullName1);     // Sonu Chakraborty anything 





// ..................................................





let favActorFirstName = "Shreema "
let favActorLastName = "Bhattacharjee"
let fullname99 = favActorFirstName + " " + favActorLastName;
console.log(fullname99);
let fullname999 = favActorFirstName.concat(favActorLastName);
console.log(fullname999);
 


let UPPERCASE = fullname999.toUpperCase(); 
console.log(UPPERCASE);

let messege = ` my fav actress is ${UPPERCASE} 
she is a very  good actress`;
console.log(messege);
 let msg = ` ${messege} her fav show is Silicon Valley`;
 console.log(msg);







//   TYPE CONVERSION IN JS

let money = "50";
// console.log(typeof money); // STRING



// CONVERT STRING TO NUMBER 

// money = parseInt(money);  // parse method is used in type conversion , this is the first way
// money =  +money; // number  this is the second way
// money = Number(money); // Number , this is the third way

console.log(money); //50
console.log(typeof money); // number



//  CONVERT NUMBER TO STRING

// money = money.toString();
// money = String(money);





//  CONVERT STRING TO DECIMAL 
// money = parseFloat(money);  // FLOAT / DECIMAL



 





