/*Task 1 
Define 2 variables with values 11 and 2 and find the remaider and store it in variable "c" and print "c"*/

// let a:number = 11;
// let b:number = 2;
// let c:number = a%b;
// console.log(c);

/* Define  string with the value "Imran is a smart boy" and split this string into an array and sort it in asc and dsc order do not use library.*/
// let sentence:string  = "Imran is a smart boy";
// let splitted = sentence.split(" ");
// console.log(splitted[0]);
// console.log(splitted[1]);
// console.log(splitted[2]);
// console.log(splitted[3]);
// console.log(splitted[4]);



// template literals
// let fname:string = "hamza";
// let lname:string = "sayed";
// console.log(fname + lname);
// console.log(`${fname} ${lname}`) //template literal syntax

// Operators

// Arithmatic Operators
// let n1 = 12;
// let n2 = 5;
// console.log(`${"Addition Result: "} ${n1 + n2}`);
// console.log(`${"Subtraction Result: "} ${n1 - n2}`);
// console.log(`${"Division Result: "} ${n1 / n2}`);
// console.log(`${"Multiplaction Result: "} ${n1 * n2}`);
// console.log(`${"Reminder Result: "} ${n1 % n2}`);
// console.log(`${"Exponential Result: "} ${n1 ** n2}`);


// Assignment operators
// let num1 = 5;
// let num2 = 5;

// console.log(num1 += num2)
// console.log(`${"num1 value: "}${num1}`)
// console.log(num1 -= num2)
// console.log(`${"num1 value: "}${num1}`)
// console.log(num1 /= num2)
// console.log(`${"num1 value: "}${num1}`)
// console.log(num1 /= num2)
// console.log(`${"num1 value: "}${num1}`)


//Comparison operators

// let n = 5;
// console.log(n == 5); // true compares only values
// console.log(n === 5); // true compares value and type also
// console.log(n != 5); // false
// console.log(n > 8); // false
// console.log(n < 8); // true
// console.log(n >= 8); // false
// console.log(n <= 8); // true


// typeof

// let a = 10.9;
// let b = "10.9";
// let c = true;
// let data = {name: 'Jonathan', age: 30, hobbies: ['running','swimming','coding']};
// //let data2:{name:string,age:number,hobbies:string[]} = {name: 'Jonathan', age: 30, hobbies: ['running','swimming','coding']};


// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(data));


//Explicit Types


// let message1:string = "ASIF"
// // Accessing the property 'toLowerCase'
// // on 'message' and then calling it
// console.log(message1.toLowerCase());

// console.log(message1.toUpperCase());




// let obj: any = { x: 0 };
// // None of the following lines of code will throw compiler errors.
// // Using `any` disables all further type checking, and it is assumed 
// // you know the environment better than TypeScript.
// //obj.foo();
// //obj();
// obj.bar = 100;
// obj = "hello";
// const n: number = obj;

//functions

// function greet (person:string, date:string) {
//     console.log(`Hello ${person.toUpperCase()}, today is ${date}`)
    
// }
// greet("asif","10-02-2023")

// //Explicit Types
// function greet1(person: string, date: Date) {
//   console.log(`Hello, ${person} today is ${date.toDateString()} !`); // to declair date in java script Template literals format
//   console.log("Hello, " + person + " today is " + date.toDateString() + " !" ) // using "+" style
//   console.log("Hello,", person, "today is", date.toDateString(), "!" ) // using comma style does not require spaces to be added sepratly
// }
// greet1("Nasir", new Date())

// let names = ['asif','saqib','wasif']
// names.forEach(function (s){
//   console.log(s.toLocaleUpperCase());
// });

// function printcord(pt: {x:number, y:number}) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's x value is " + pt.y);
// }
// printcord({x:52.68,y:69.35})

// function printName(obj: {first:string,last?:string},pt: {x:number, y:number}) {
//   console.log(obj.first.toLocaleUpperCase());
//   console.log(obj.last?.toLowerCase());
//   console.log(pt.x);
//   console.log(pt.y);
// } 

// printName({first:"asif", last:"ASIF"},{x:12,y:32})

//Union Types 
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log("Your ID is: " + id.toUpperCase());
  } else {
    console.log("Your ID is: " + id);
  }
  
}
// // OK
// printId(101);
// // OK
printId("asif");
// // Error
// //printId({ myID: 22342 });

//Another example is to use a function like Array.isArray:

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and ")); // using join method 
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}
welcomePeople(['asif','saqib','wasif']);
welcomePeople('asif');

//Type Aliases
//Interfaces

type Point = {
  x: number;
  y: number;
}
// interface Point { // another way to declair Point
//   x: number;
//   y: number;
// }
function printcordinate(pt:Point) {
  console.log("The X co-ordinate value is", pt.x);
  console.log("The Y co-ordinate value is", pt.y);
}
printcordinate({x:126.36 , y:86.635});

//Differences Between Type Aliases and Interfaces
/*Extending an interface

interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear = getBear() 
bear.name
bear.honey
*/       
/*Extending a type via intersections

type Animal = {
  name: string
}

type Bear = Animal & { 
  honey: boolean 
}

const bear = getBear();
bear.name;
bear.honey;
  */      

/*this code might look illegal, but is OK according to TypeScript because both types are aliases for the same type*/

// type UserInputSanitizedString = string;
 
// function sanitizeInput(str: string): UserInputSanitizedString {
//   return sanitize(str);
// }
// let str = "string"
// function getInput(str: string){}

// // Create a sanitized input
// let userInput = sanitizeInput(getInput("string"));
 
// Can still be re-assigned with a string though



//Type Assertions
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;