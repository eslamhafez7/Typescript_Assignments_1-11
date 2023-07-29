"use strict";
function calculate(numOne, numTwo) {
    return numOne + numTwo;
}
console.log(calculate(10, 20));
console.log(calculate(+true, +true));
function printInfo(valueOne, valueTwo) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}
console.log(printInfo(10, 20));
console.log(printInfo("10", "20"));
let arr = [
    20, [true, false, true], ["Eslam", ["Hafez", 20]], [[1, 2, 3], "Typescript"]
];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
let nothing;
let theName = "Elzero";
function showMyDetails(a = "", b = "", c) {
    return `${a}${b}${c}`;
}
console.log(showMyDetails(undefined, nothing, theName));
function showMsg(user, age, country) {
    return `${user}${age}${country}`;
}
console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));
function printInConsole(...all) {
    for (let i = 0; i < all.length; i++) {
        let value = all[i];
        console.log(`the value is ${value} and type is ${typeof value}`);
    }
    return "#".repeat(20);
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
//# sourceMappingURL=main.js.map