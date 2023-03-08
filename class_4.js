"use strict";
// Aero funcion
// let calc = (num1 : number, num2 :number) => {
//     console.log("Calculator Aero Function");
//     return(num1+num2);
// };
// function adding (num3 : number, num4 :number) {
//     console.log(num3 + num4);
//     return(num3 + num4);
// };
// npm prompts
// prompt sync an npm library
// let age:number = 15;
// if (age >= 18){
//     console.log("You are allowed")
// }
// else{
//     console.log("You are not allowed");
// }
// Nested if statements
// import { Prompt } from 'prompt-sync';
// var prompt = require('prompt-sync')();
// let country = prompt("Where do you live?");
// let age = prompt("What is your age?")
// if (country === "Pakistan") {
//     if (age >= 18) {
//     console.log("Here are your tickets");
//     } else {
//         console.log("Age restriction");
//     }   
// } else {
//     console.log("Invalid country");
// }
//Arrays
//Array Methods
// Pop ===> removes the last element from the Array
//         and it returns the value which it eleminates
//         student.pop()
// let student = ["asif","kashif","nasif"]
let fruits = ["apple", "banana", "orange", "grapes", "strawberry"];
console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[3]);
// fruits[5]= "pineapple"  // ddding array item at index 5
// console.log(fruits.pop()); // removing item from end of the array
// console.log(fruits.push("ajwa")); // returns array lenght by default and addx a new element at the end of array
// console.log(fruits);
// console.log(fruits.shift()); // removing item from start of the array
// console.log(fruits.unshift("ajwa")); // returns array lenght by default and addx a new element at the start of array
// console.log(fruits);
// fruits.splice(2, 1, "Lemon", "Tomatto"); // adds elements to an array at 2nd inde // deleted the item at position index 2 elements
// console.log(fruits);
let citrus = fruits.slice(2); // [Orange,Lemon,Apple,Mango]
console.log(citrus);
