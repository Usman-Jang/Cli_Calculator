#! /usr/bin/env node
import inquirer from "inquirer";

const calc = await inquirer.prompt([
    {message:"Enter Your First Number", type:"number", name:"firstNumber"},
    {message:"Enter Your Second Number", type:"number", name:"secondNumber"},
    {message:"Select One Of The Operator To Perform Your Operation",
        type:"list",
        name:"operator",
        choices:["Addition","Subtraction","Multiplication","Division"],
    },
]);
// Conditional Instructions

if(calc.operator === "Addition"){
    console.log(calc.firstNumber + calc.secondNumber);
}
else if(calc.operator === "Subtraction"){
    console.log(calc.firstNumber - calc.secondNumber);
}
else if(calc.operator === "Multiplication"){
    console.log(calc.firstNumber * calc.secondNumber);
}
else if(calc.operator === "Division"){
    console.log(calc.firstNumber / calc.secondNumber);
}
else{
    console.log("Invalid Input");
}