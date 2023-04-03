//23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'BMW'; 
// console.log("Is car == 'subaru'? I predict True.") 
// console.log(car === 'subaru') 
//• Look closely at your results, and make sure you understand why each line evaluates to True or False. 
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. 
// let a:string = "string";
// let b:number = 5;
// let c:number = 9000000000585465855415545524;
// let d:string[] = ['a','n','c'];
// let e:number[] = [1,2,3];
// let f = true;
// let g = false;
// let h = 5;
// let i = 10;

// console.log(i > h); // output: true
// console.log(i < h); // output: false
// console.log(i >= h); // output: true
// console.log(i <= h); // output: false
// console.log(i === h); // output: false
// console.log(i !== h); // output: true
// console.log(e[9] == 1); // output: false
// console.log(d[9] == "1");// output: false
// console.log(typeof(c) == "bigint");// output: false
// console.log(typeof(b) == 'string');// output: false
// console.log(g == false);// output: true
// console.log(f == true);// output: true








//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False
// • Tests for equality and inequality with strings 
// let aString:string = "aString"
// console.log(aString == "aString");// output: true
// console.log(aString === "string");  // output: false     

// // • Tests using the lower case function 
// aString = aString.toLowerCase();
// console.log(aString == 'astring'); // output: true
// console.log(aString == 'aString'); // output: false

// // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// let h = 5;
// let i = 10;

// console.log(i > h); // output: true
// console.log(i < h); // output: false
// console.log(i >= h); // output: true
// console.log(i <= h); // output: false
// console.log(i === h); // output: false
// console.log(i !== h); // output: true

// // • Tests using "and" and "or" operators
const age = 25;
const isStudent = true;

// Test condition with logical "and" operator
if (age >= 18 && isStudent) {
  console.log("You're an adult student.");
} else {
  console.log("You're not an adult student.");
}

// Test condition with logical "or" operator
if (age >= 18 || isStudent) {
  console.log("You're either an adult or a student.");
} else {
  console.log("You're neither an adult nor a student.");
}



//Testing based on if else
import inquirer from 'inquirer';
inquirer.prompt([{  type: 'number',
                    name : 'name',
                    message: 'Enter any number?',
                    validate: function (value) {
                    var valid = !isNaN(parseFloat(value));
                    return valid || 'Please enter a number';
                    },
                    filter: Number,
},
{
type: 'input',
name: 'input',
message: 'What is your name?'
}]).then((answer) => {
    console.log(answer.name);
    if (typeof(answer.name ) == 'number' ){
    console.log('you entered is a number.');
} else {
    console.log('you entered is a string');
}
  if (typeof(answer.input ) == 'string' ){
    console.log('Given input is a string.');
} else {
    console.log('Given input is a number');
}
});



// import inquirer from 'inquirer';+
// this will take a number as input

inquirer
  .prompt([
    {
      type: 'number',
      name: 'age',
      message: 'What is your age?',
      validate: function (value) {
        var valid = !isNaN(parseFloat(value));
        return valid || 'Please enter a number';
      },
      filter: Number,
    },
  ])
  .then((answers) => {
    console.log(`Your age is ${answers.age}`);
    console.log(typeof(answers.age));
  });

/*Input
Number
Confirm
List
Raw List
Expand
Checkbox
Password
Editor
Autocomplete
Confirm-like prompt
List-like prompt
RawList-like prompt
Expand-like prompt
Checkbox-like prompt
Password-like prompt
Editor-like prompt
Input-like prompt
Number-like prompt
Generic prompt
Multi-select
Auto-complete
Date
Date-time
Time
Invisible
Snippet
URL */
// • Test whether an item is in a array use indexof and includes methods
// • Test whether an item is not in a array 
const fruits = ["apple", "banana", "orange", "pear"];

// Test if an item is in the array using includes() method
if (fruits.includes("apple")) {
  console.log("The array contains an apple.");
} else {
  console.log("The array does not contain an apple.");
}

// Test if an item is in the array using indexOf() method
if (fruits.indexOf("banana") !== -1) {
  console.log("The array contains a banana.");
} else {
  console.log("The array does not contain a banana.");
}
