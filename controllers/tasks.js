const getAllTasks = (req, res) => {
    res.send('Sending all tasks');
};

const createTask = (req, res) => {
    res.json(req.body);
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