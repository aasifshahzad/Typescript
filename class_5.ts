//Ecma Module writing 

//npm init --yes

import inquirer from "inquirer";
const answer =inquirer.prompt({
    message: "What is your name?",
    name: "fullName",
    type: "input"
})
//console.log(answer);
