const express = require("express")
const users = require("./MOCK_DATA.json")
const fs = require("fs")


const app = express()
const PORT = 8000


// middleware plugin
app.use(express.urlencoded({extended : false}))  // req.body = (Processing)

app.use((req, res, next) => {
    console.log("Hello from middleware 1")
    req.myUserName = "prachisaid" // (Can also use for validation)
    // return res.json({msgs : "Hello from middleware 1"})
    next()
})

app.use((req, res, next) => {
    console.log("Hello from middleware 2 " + req.myUserName)
    // return res.end("Hey")
    next()
})


// HTTP methods (Requests) REST API's
app.get('/users', (req, res) => {
    const html = `
        <ul>
            ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;

    res.send(html)
})

app.get('/api/users', (req, res) => {
    res.setHeader("X-MyName", "Prachi")
    return res.json(users)
})

app.post('/api/users', (req, res) => {
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({msg : 'All fields are required'})
    }
    // Create new user
    users.push({id : users.length + 1, ...body})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.status(201).json({status : 'success', id : users.length})
    })
})

// Merging multiple routes
app
    .route('/api/users/:id')

    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id)

        if(!user) {
            return res.status(404).json({error : 'User not found'})
        }
        
        return res.json(user)
    })
    
    .patch((req, res) => {
        const id = Number(req.params.id);
        const index = users.findIndex((user) => user.id == id)
        
        console.log(index)

        users[index].last_name = req.body.last_name;

        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
            return res.json({status : 'succes'})
        })
    })  
    
    .delete((req, res) => {
        const id = Number(req.params.id);
        const index = users.findIndex((user) => user.id == id)
        users.splice(index, 1);

        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
            return res.json({status : 'success', id : id})
        })
})

app.listen(PORT, () => {console.log("Server started at port " +PORT)})