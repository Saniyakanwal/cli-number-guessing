#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number
// 2) User input for guessing number
// 3) compare user input with computer generated number and show result
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessnumber",
        type: "number",
        message: "please guess a number between 1 to 6:",
    },
]);
if (answers.userguessnumber === randomnumber) {
    console.log("Congratulation! you guessed right number.");
}
else {
    console.log("You guessed Wrong number");
}
