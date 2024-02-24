// creating our own server
const http = require("http");
const fs = require("fs")
const url = require("url")

const myServer = http.createServer((req, res) => {
    if(req.url === '/favicon.ico') return res.end();
    // const log = `${Date.now()} : ${req.url} New Request Received\n`;
    // fs.appendFile("./log.txt", log, (err, data) => {
    //     res.end("Hello from server again")
    // })

    const log = `${Date.now()} : ${req.method} : ${req.url} New Request Received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl)
    fs.appendFile("./log.txt", log, (err, data) => {
        switch(myUrl.pathname) {
            case '/' : res.end("HomePage")
            break
            case '/about' : 
                const username = myUrl.query.myName;
                res.end("Hello " +username)
            break
            case '/signup' :
                if(req.method === 'GET') res.end('This is a signup form')
                else if(req.method == 'POST') {
                    // DB QUERY
                    res.end("Success")
                }
            case '/search' :
                const search = myUrl.query.search_query;
                res.end("Here are your results for " + search)
            break
            default : res.end("404 Not Found")
        }
    })

    console.log("New Req Received")
    // console.log(req)
    // res.end("<html><ead></head><body></body><h1>Hello From Server</h1></html>")
    // res.end("Hello from server")
})

myServer.listen(8000, () => {
    console.log("Server Started")
})