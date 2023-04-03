//import { calculator } from "../calculator.js";

//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let obj = {"montain":["K2","Mountain everest","Queen Hill"],
                "rivers":["ravi","satluj","chanab"],
                "countries":["Pakistan","China","Afganistan"],
                "cities":["Lahore","karachi","Islamabad"],
                "languages":["punjabi","urdu","english"],  
                func: () => { },           
}
console.log(obj.rivers);
console.log(obj.cities[2]);
console.log(obj.func())

//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

import inquirer from 'inquirer';

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'list',
    name: 'color',
    message: 'What is your favorite color?',
    choices: ['Red', 'Blue', 'Green']
  },
  {
    type: 'confirm',
    name: 'confirm',
    message: 'Are you sure?'
  }
];

inquirer.prompt(questions)
  .then(answers => {
    console.log('Answers:', answers);
  })
  .catch(error => {
    console.error('Error:', error);
  });
/*

? What is your name? asif
? What is your favorite color? Green
? Are you sure? Yes
Answers: { name: 'asif', color: 'Green', confirm: true }
*/

