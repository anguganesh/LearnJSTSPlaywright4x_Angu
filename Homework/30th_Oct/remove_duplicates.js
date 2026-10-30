str = "Hello World"

let uniqueChar = new Array()

for(let eachChar of str) {
    if(!uniqueChar.includes(eachChar)) {
        uniqueChar.push(eachChar)
    }
}

console.log(uniqueChar.join(""));

