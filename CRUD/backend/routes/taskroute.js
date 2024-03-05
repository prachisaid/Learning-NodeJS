const express = require("express")
const {getTasks, addTasks, updateTasks, deleteTask} = require("../controllers/taskcontroller")

const router = express.Router();

router.get('/get', getTasks);
router.post('/post', addTasks);
router.put('/update/:id', updateTasks);
router.delete('/delete/:id', deleteTask)

module.exports = router