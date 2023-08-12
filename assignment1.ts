// //  Task 1 Create a Program to calculate the student grades
// Importing prompt
import  { Prompt } from 'prompt-sync';
var prompt = require('prompt-sync')();

// // Function to take exam marks in English and Urdu
// function takeInput() {
//     let englishMarksString:string = prompt("Enter the English Marks: ");
//     let urduMarksString:string= prompt("Enter the Urdu Marks: ");

//     let englishMarks = parseInt(englishMarksString);
//     let urduMarks = parseInt(urduMarksString);
    
//     return [englishMarks, urduMarks];
// }

// // Function to calculate average and decide grades
// function decideGrade () {
//     const averageMarks: number = (marks[0] + marks[1])/2
//     console.log(`You got an average: ${averageMarks} %.`);
//     var grade: string;
//     if (averageMarks >= 80) {
//         // console.log("You are awarded with A grade.");
//         return grade = "A"
//     } else if(averageMarks >= 70) {
//         // console.log("You are awarded with B grade.");
//         return grade = "B"
//     } else if (averageMarks >= 60){
//         // console.log("You are awarded with C grade.");
//         return grade = "C"
//     } else {
//         // console.log("You are awarded with F grade.")
//         return grade = "F"
//     } 
// }

// let marks = takeInput(); // calling function to take input
// // console.log(marks);
// let grade:string = decideGrade(); // calling function to decide grade
// console.log(`You got Grade ${grade} in exam`);

//___________________________________________________________________________________

// Task 2 Create an array manipulation program
// var fruits:string[] = ["apple", "mango", "banana", "strawberry", "orange", "cherry"]

// console.log(fruits);
// fruits.push("pineapple")  // Append a string at the end of array
// fruits.unshift("date")       // Prepend a string at the start of array
// fruits.splice(2,1,"coconut")   //[ 'apple', 'mango', 'coconut', 'strawberry', 'orange', 'cherry' ]
// console.log(fruits);
//Results
// C:\Users\asif1\Documents\GitHub\Typescript>node assignment1.js
// [ 'apple', 'mango', 'banana', 'strawberry', 'orange', 'cherry' ]
// [  'apple',  'mango', 'banana',  'strawberry', 'orange',  'cherry',  'pineapple' ]

// C:\Users\asif1\Documents\GitHub\Typescript>node assignment1.js
// [ 'apple', 'mango', 'banana', 'strawberry', 'orange', 'cherry' ]
// [ 'date', 'apple', 'mango', 'banana', 'strawberry', 'orange', 'cherry' ]

// C:\Users\asif1\Documents\GitHub\Typescript>node assignment1.js
// [ 'apple', 'mango', 'banana', 'strawberry', 'orange', 'cherry' ]
// [ 'apple', 'mango', 'coconut', 'strawberry', 'orange', 'cherry' ]

//___________________________________________________________________________________

//Task 3 Create a function to calculate a discount amount of for a product

// function to take input of product price and discount percentage
// function productInfo(){
//     let productPriceString:string = prompt(`Enter the product price: `);
//     let productDiscountString:string = prompt(`Enter the discount percentage:`);

//     let productPrice: number = parseInt(productPriceString);
//     let productDiscount:number = parseFloat(productDiscountString);

//     return [productPrice,productDiscount]
// }

// // function to calculate the discount amount and other information
// function discountCalculator(){
//     let discountAmount:number = info[0]*(info[1]/100);
//     let finalAmountPayable:number = info[0]- discountAmount;
//     if (discountAmount >= (info[0]/2)) {

//         console.log("Discount Percentage is invalid");        
//     } else {
//         console.log(   `
//                     Product Original Price: ${info[0]}
//                     Product Discount Percentage: ${info[1]}
//                     Product Discount Amount: ${discountAmount}
//                     Product Final Payable Amount: ${finalAmountPayable}
//                     `);
//     };
// }

// let info = productInfo(); // take product info from user
// // console.log(info);
// discountCalculator();     // Calculate the discount

//___________________________________________________________________________________
//Task 4 Create a function to calculate the factorial of a function
// let numInputString:string = prompt("Enter a number to find its Factorial: ")
// let num:number = parseInt(numInputString);
// function calculateFactorial(num:number) {
//   if (num === 0 || num === 1)
//     return 1;
//   for (var i = num - 1; i >= 1; i--) {
//     num *= i;
//   }
//   return num;
// }

// let result = calculateFactorial(num);
// console.log(`The Factorial of ${num} is ${result}.`);

//___________________________________________________________________________________