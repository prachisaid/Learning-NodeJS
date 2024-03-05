const TASK = require("../models/taskmodel")

async function getTasks(req, res) {
    const tasks = await TASK.find({});
    res.send(tasks)
    // res.send("Hello")
}

async function addTasks(req, res) {
    const t = req.body;
    console.log(t)

    TASK.create(t)

    res.send({msg : "Inserted successfully"})
}

async function updateTasks(req, res) {
    const id = req.params.id;
    const task = req.body;
    console.log(id)
    await TASK.findByIdAndUpdate({id, task});

    res.send({msg : "Updation successful"})
}

async function deleteTask(req, res) {
    const id = req.params.id;
    console.log(id)
    await TASK.findByIdAndDelete(id);
    
    res.send({msg : "Deleted successfully"})
}

module.exports = {
    getTasks,
    addTasks,
    updateTasks,
    deleteTask
}