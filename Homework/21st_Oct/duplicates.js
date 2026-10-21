arr = [1, 2, 1, 3, 2]
let uniqueElements = new Set()
let duplicates = new Set()


for(let eachValue of arr) {
    if(!uniqueElements.has(eachValue)){
        uniqueElements.add(eachValue)
    } else {
        duplicates.add(eachValue)
    }   
}

duplicates.forEach(eachValue => console.log(eachValue))



// let uniqueElements = new Array();
// let duplicates = new Array();
// for (let index = 0; index < arr.length; index++) {
//     let eachElement = arr.at(index)
//     if (!uniqueElements.includes(eachElement))
//         uniqueElements.push(eachElement)
//     else if (!duplicates.includes(eachElement))
//         duplicates.push(eachElement);
// }

// console.log(duplicates.join(" "));