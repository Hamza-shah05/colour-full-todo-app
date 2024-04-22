#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList  = [];
let conditions = true;

console.log(chalk.magenta.bold("\n \t Welcome to codiiingwithhamza - Todo-List Application"));
while(conditions){
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.green.bold("Enter your New Task :")
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo-List successfully`);

    let addMoreTask =await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.yellow.bold("Do you want to add more task ?"),
            default: "false"
        }
    ]);
    conditions = addMoreTask.addmore
}
console.log("your updated Todo-List:" , todoList);