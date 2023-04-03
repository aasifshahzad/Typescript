//Ecma Module writing 
//npm init --yesConst answer = await inquirer.prompt
import inquirer from "inquirer";
const answer = await inquirer.prompt({
    message: "What is your name?",
    name: "fullName",
    type: "input"
});
console.log(answer.fullName);
// import inquirer from 'inquirer';
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
