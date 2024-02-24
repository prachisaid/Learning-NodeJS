const fs = require("fs");

// Synchronous call
// fs.writeFileSync("./test.txt", "Hello World");

// Asynchronous call
// fs.writeFile("./test.txt", "Hey There Hello World", (err) => {})

// const result = fs.readFileSync("./contact.txt", "utf-8")
// console.log(result)

// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//     if(err) {
//         console.log("Error ", err)
//     }
//     else {
//         console.log(result)
//     }
// })

// fs.appendFileSync("./test.txt", " " + new Date().getDate().toString())
// fs.appendFileSync("./test.txt", `\nHey There`)

// fs.cpSync("./test.txt", "./copy.txt")

// fs.unlinkSync("./copy.txt")

// console.log(fs.statSync("./test.txt").isFile())

fs.mkdirSync("my-docs")