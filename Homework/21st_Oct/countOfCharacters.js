arr = [1, 2, 1, 3, 2]

let output =  arr.reduce((map, cv) => {

    if(map.has(cv)) {
        map.set(cv, map.get(cv) + 1)
    }else {
        map.set(cv, 1)
    }
    
    return map
}, new Map());


for(let [key, value] of output.entries()) {
    console.log(key, "appears", value, "times");    
}