let str = "testing"
let str_array = str.split("")

for (let index = 0; index < str_array.length/2; index++) {
    let temp = str_array[str.length - index - 1]
    str_array[str.length - index - 1] = str_array[index]
     str_array[index] = temp    
}

console.log(str_array.join(""));
