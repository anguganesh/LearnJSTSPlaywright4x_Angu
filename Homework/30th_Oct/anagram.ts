let s1 = "evils"
let s2 = "live"

let is_anagram = true

if(s1.length !== s2.length) {
    is_anagram = false
}
else {
    
    let s1_map = charCount(s1)
    let s2_map = charCount(s2)

    for(let [key, value] of s1_map.entries()) {
        if(s2_map.get(key) !== value) {
            is_anagram = false
            break
        }        
    }    
}

if(is_anagram) {
    console.log("YES");    
} else {
    console.log("NO");    
}

function charCount(str: string) {
    let map = new Map<string, number>()

    for(let eachChar of str) {
        if(map.has(eachChar)) {
            map.set(eachChar, Number(map.get(eachChar)) + 1)
        } else {
            map.set(eachChar, 1)
        }
    }
 
    return map
}