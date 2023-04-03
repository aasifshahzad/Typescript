//25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'yellow'. 
import chalk from 'chalk';
let alien_color = "green";
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points. 
if (alien_color == 'green') {
    console.log(chalk.green('The alen color is green'));
    console.log(chalk.green('The player just earned 5 points'));
}
else {
    console.log(chalk.yellow('The alen color is yellow'));
    console.log(chalk.yellow('The player do not earned any points'));
}
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
alien_color = "yellow";
if (alien_color == 'green') {
    console.log(chalk.green('The alen color is green'));
    console.log(chalk.green('The player just earned 5 points'));
}
//26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain. • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien. • If the alien’s color isn’t green, print a statement that the player just earned 10 points. • Write one version of this program that runs the if block and another that runs the else block.
alien_color = 'green';
if (alien_color == 'green') {
    console.log(chalk.green('The alen color is green'));
    console.log(chalk.green('The player just earned 5 points'));
}
else {
    console.log(chalk.yellow('The alen color is yellow'));
    console.log(chalk.yellow('The player just earned 10 points'));
}
//27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain. • If the alien is green, print a message that the player earned 5 points. • If the alien is yellow, print a message that the player earned 10 points. • If the alien is yellow, print a message that the player earned 15 points. • Write three versions of this program, making sure each message is printed for the appropriate color alien.
import inquirer from 'inquirer';
const questions1 = [
    {
        type: 'list',
        name: 'color',
        message: "Enter an alean color: ",
        choices: ['green', 'yellow', 'red'],
    },
];
inquirer.prompt(questions1).then((answers) => {
    if (answers.color == 'green') {
        console.log(chalk.green('The alen color is green'));
        console.log(chalk.green('The player just earned 5 points'));
    }
    else if (answers.color == 'yellow') {
        console.log(chalk.yellow('The alen color is yellow'));
        console.log(chalk.yellow('The player just earned 10 points'));
    }
    else if (answers.color == 'red') {
        console.log(chalk.red('The alen color is red'));
        console.log(chalk.red('The player just earned 15 points'));
    }
    else {
        console.log("Bad Choice");
    }
});
// const questions2 = [
//   {
//     type: 'list',
//     name: 'menu',
//     message: 'What would you like to do?',
//     choices: ['Option A', 'Option B', 'Option C'],
//   },
// ];
// inquirer.prompt(questions2).then((answers: Answers) => {
//   if (answers.menu === 'Option A') {
//     console.log('You selected Option A');
//     // Do something
//   } else if (answers.menu === 'Option B') {
//     console.log('You selected Option B');
//     // Do something else
//   } else {
//     console.log('You selected Option C');
//     // Do something else
//   }
// });
