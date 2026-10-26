let str = "Hello World".toLocaleLowerCase()


let vowels : Array<string> = ["a", "e", "i", "o", "u"]
let modified_string = str.replaceAll(" ", "")
let charArray = modified_string.split("")

let vowelsCount = charArray.filter((eachChar) => vowels.includes(eachChar)).length
let consonentsCount = charArray.filter((eachChar) => !vowels.includes(eachChar)).length         

console.log("Vowels:",vowelsCount, "Consonants:",consonentsCount);

