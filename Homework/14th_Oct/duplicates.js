let arr = [2,3,4,1,4,2,4]


let charCountInMap = arr.reduce((map, eachValue) => {
    if(map.has(eachValue)){
        map.set(eachValue, map.get(eachValue) + 1)
    }
    else {
        map.set(eachValue, 1)
    }
    return map

}, new Map())

console.log(charCountInMap);

for(let [key , value] of charCountInMap.entries() ){   
    if(value > 1) {
         console.log(key);
    }
}
    
        



   