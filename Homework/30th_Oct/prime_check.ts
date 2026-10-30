
let num  = 4

let is_prime = true

for (let start = 2; start <= Math.sqrt(num); start++) {
    
    if(num % start === 0) {
        is_prime = false
        break
    }    
}

if(is_prime) {
    console.log("YES");    
} else {
    console.log("NO");    
}