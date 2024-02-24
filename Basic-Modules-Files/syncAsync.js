const os = require('os');
// console.log(os.cpus().length)

const fs = require('fs');

console.log(1)

// Blocking
// const read = fs.readFileSync("./contact.txt", "utf-8")
// console.log(read)

// Non - Blocking
fs.readFile("./contact.txt", "utf-8", (err, read) => {
    console.log(read)
})

console.log(2)