arr = [1,2,3,4,5]

for (let index = arr.length - 1, new_index = 0 ; index >= arr.length / 2; index--, new_index++) {  
    let temp = arr[index]
    arr[index] = arr[new_index]
    arr[new_index] = temp
}

console.log(arr.join(" "));

