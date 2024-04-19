#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

console.log(chalk.bold.italic.underline.bgBlueBright("********Welcome to my number.guessing Game*******"));

const randomNumber = Math.floor(Math.random()*5)

let answers = await inquirer.prompt([
    {
     name : "user_input_number",
     type : "input",
     message : chalk.bold.italic.bgGreenBright("Please enter number between 1 to 5")   
    }
]);

if(answers.user_input_number == randomNumber){
    console.log(chalk.bold.italic.bgMagentaBright("****Congratulations you guess right number.****"));
}else{
    console.log(chalk.bold.italic.bgRed("You guess wrong number."));
}