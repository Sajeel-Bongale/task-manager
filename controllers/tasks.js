const Task = require('../models/Task')

const getAllTasks = (req, res) => {
    res.send('Sending all tasks');
};

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({msg: error})
    }

};

const getTask = (req, res) => {
    res.json(req.params.id);
};

const updateTask = (req, res) => {
    res.send('Updating task');
};

const deleteTask = (req, res) => {
    res.send('Deleting task');
};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getTask
}