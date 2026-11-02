

n = 4

for (let i = 1; i <= n;  i++) {
   
    for (let space = 1; space <= n-i; space++) {
        process.stdout.write(" ")       
    }

    for (let star = 1; star <= (2 * i) - 1; star++) {
      process.stdout.write("*") 
    }
    console.log()   
}