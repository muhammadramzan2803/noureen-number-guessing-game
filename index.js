#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWellcome to CLI - Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your Guess Number(Number Limit from 1 to 5):",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulation ! You Guess a Correct Number.");
}
else {
    console.log("Sorry, You Guess a Wrong Number");
}
