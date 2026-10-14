

let prompt = require("prompt-sync")();

let inputYear = prompt("Enter the Year : ")

if (inputYear % 100 == 0) {
    if (inputYear % 400 == 0) {
        isLeapYear = true
    } else {
        isLeapYear = false
    }
} else if (inputYear % 4 == 0) {
    isLeapYear = true
} else {
    isLeapYear = false
}


if(isLeapYear) {
    console.log("YES");    
}
else {
    console.log("NO");    
}