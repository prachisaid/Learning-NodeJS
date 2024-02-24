const express = require("express")
const user = require("./MOCK_DATA.json")
const app = express();
const PORT = 8000;

app.get("/api/users", (req, res) => {
    return res.json(user)
})

app.get("/users", (req, res) => {
    const html = `
        <ul>
            ${user.map((u) => `<li>${(u.first_name)}</li>`).join("")}
        </ul>
    `
    return res.send(html)
})

app.get("/api/users/:id", (req, res) => {
    const id  = Number (req.params.id);
    const u = user.find((temp) => temp.id === id);

    res.json(u);
})

app.listen(PORT, () => console.log("Server Started Yay"))