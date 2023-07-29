// Assignment 1 Done

// Assignment 2

function calculate(numOne: number, numTwo: number) {
    return numOne + numTwo;
}
console.log(calculate(10, 20)); // 30
//   console.log(calculate("10", "20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2
// Done

/********************************************************************** */
// Assignment 3

function printInfo(valueOne: number | string, valueTwo: number | string) {
  return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}

console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
//   console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

/********************************************************************** */
// Assignment 4
let arr: (number | boolean[] | (string | (string | number)[])[])[] = [
  20, [true, false, true], ["Eslam", ["Hafez", 20]], [[1, 2, 3], "Typescript"]
];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

/********************************************************************** */
// Assignment 5
/*
1- age is sdeclared but it's value is never used
2- rank is sdeclared but it's value is never used
3- [console.log line] Unreachable Code Detected
*/
/*
function reportErrors(username, age: number) {
  let rank = "Professor";
  return `Username: ${username}`;
  console.log("We Will Not Reach Here");
}

console.log(reportErrors("Elzero", 40));
*/

/********************************************************************** */
// Assignment 6
let nothing;
let theName: string = "Elzero";
function showMyDetails(a = "", b = "", c) {
  return `${a}${b}${c}`;
}

// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(undefined, nothing, theName)) // Elzero

/********************************************************************** */
// Assignment 7
function showMsg(user?: number | string, age?: (boolean | number | string), country?: boolean | string) {
  return `${user}${age}${country}`;
}

console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));

// /********************************************************************** */
// Assignment 8

// /********************************************************************** */
// Assignment 8
// Write The Function Here

function printInConsole(...all: (number | string | boolean)[]) {
  for (let i = 0; i < all.length; i++) {
    let value = all[i];
    console.log(`the value is ${value} and type is ${typeof value}`);
  }
  return "#".repeat(20);
}
// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));


// /********************************************************************** */
// Assignment 9