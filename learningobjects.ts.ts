#!usr/bin/env node
// Tasks:
// 1. Miles-to-Kilometers Converter (Operators):
// • Create a variable named miles and assign a numeric value representing distance in miles.
// • Calculate the equivalent distance in kilometers using the conversion factor (1 mile = 
// 1.60934 kilometers). You can achieve this by multiplying miles by 1.60934.
// • Store the converted distance in kilometers in a variable named kilometers.
// • Use console.log to print a message in the following format: 
// The distance of 130 kms is equal to 209.2142 miles

let miles =  42;
let kilometers = miles * 1.60934
console.log(`The distance of ${kilometers} is euqal to ${miles} miles`)


// 2.Evaluating a number game:
// • Prompt the user to enter a number.
// • Compare the entered number with a dynamic number value.
// • Output the result indicating whether the entered number is greater than, equal to, or less 
// than the dynamic number value.

let userNumber : any = prompt("Please enter a number:");
let enteredNumber = Number(userNumber);
let dynamicNumber = 23

if (enteredNumber > dynamicNumber) {
  console.log(`The entered number ${enteredNumber} is greater than the dynamic number ${dynamicNumber}.`);
} else if (enteredNumber < dynamicNumber) {
  console.log(`The entered number ${enteredNumber} is less than the dynamic number ${dynamicNumber}.`);
} else {
  console.log(`The entered number ${enteredNumber} is equal to the dynamic number ${dynamicNumber}.`);
}

// 3.Friend checker game:
// • Prompt the user to enter a name.
// • Use a switch statement to check if the entered name is a known friend.
// • Output a confirmation message if the name is known, otherwise output a default 
// response.

let userName = prompt("Please enter a name")
switch (userName) {
    case 'Sania':
      console.log("Sania is a known friend.");
      break;
    case 'Adeeba':
      console.log("Adeeba is a known friend.");
      break;
    case 'Wania':
      console.log("Wania is a known friend.");
      break;
    case 'Tayyaba':
      console.log("Tayyaba is a known friend.");
      break;
    case 'Sana':
      console.log("Sana is a known friend.");
      break;
    default:
      console.log(`${userName} is not a known friend.`);
      break;
  }

// 4.Functions:
// • Set up two different variables with different values.
// • Call a function with these variables as arguments and output the result using console.log.
// // • Create a second call to the function with two more numbers as arguments.

let num1 = 22;
let num2 = 32;
function Addnumber(num1:number,num2:number) {
    return num1 + num2
}
let result = Addnumber(num1,num2)
console.log(`The sum of ${num1} & ${num2} is ${result}`)

let num3 = 70;
let num4 = 20;
function substractNumbers(num3:number,num4:number){
    return num3 - num4
}
let result1 = substractNumbers(num3, num4);
console.log(`The substract of ${num3} and ${num4} is ${result1}.`);


// .Calculator project using function:
// • Set up two variables containing number values.
// • Set up a variable to hold an operator (+ or -).
// • Create a function that takes two numbers and an operator as parameters, performs the 
// corresponding operation, and returns the result.
// • Call the function with the variables and operator, and output the result using console.log.
// • Update the operator value and call the function again with the updated arguments.

let num5 = 40
let num6 = 21
let operator = "+"
function Calculator(num5:number,num6:number,operator:string){
    let result;
    switch (operator) {
      case '+':
        result = num5 + num6;
        break;
      case '-':
        result = num5 - num6;
        break;
      case '*':
        result = num5 * num6;
        break;
      case '/':
        result = num5 / num6;
        break;
      default:
        result = 'Invalid operator';
    }
    return result;
  }
  let results = Calculator(num5, num6, operator);
console.log(`The result of ${num5} ${operator} ${num6} is ${results}.`);


operator = '-';
let result2 = Calculator(num5, num6, operator);
console.log(`The result of ${num5} ${operator} ${num6} is ${result2}.`);


operator = '*';
let result3 = Calculator(num5, num6, operator);
console.log(`The result of ${num5} ${operator} ${num6} is ${result3}.`);

operator = '/';
let result4 = Calculator(num5, num6, operator);
console.log(`The result of ${num5} ${operator} ${num6} is ${result4}.`);


// 4.Anonymous functions:
// • Assign a function expression to a variable, with one parameter that outputs the provided 
// argument to the console.
// • Pass an argument into the function.
// • Create the same function as a normal function declaration

let anonymous = function(argument:any) {
    console.log(argument);
  };
  
  anonymous("Hello from anonymous function!");

  function normalFunction(argument:any) {
    console.log(argument);
  }

  normalFunction("Hello from normal function declaration!");
