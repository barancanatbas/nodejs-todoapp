const service = require('../service/task.js');

const getTasks = async (req,res) => {
    try {
        const tasks = await service.getTasks();
        res.json({tasks:tasks});
    } catch (err) {
        res.json(err);
    }
};

const getTask = async (req,res) => {
    const {id} = req.params;
    try {
        const task = await service.getTask(parseInt(id));
        res.json({task:task});
    } catch (err) {
        res.json(err);
    }
};

const addTask = async (req,res) => {
    const {title,description,completed} = req.body;
    try {
        await service.addTask(title,description,completed);
        res.json({message:"ekleme başarılı."});
    } catch (err) {
        res.json(err);
    }
};

const deleteTask = async (req,res) => {
    const {id} = req.params;

    try {
        await service.deleteTask(parseInt(id));
        res.json({message:"silme başarılı."});
    } catch (err) {
        res.json(err);
    }
};

const updateTask = async (req,res) => {
    const {title,description,completed,id} = req.body;

    try {
        await service.updateTask(title,description,completed,parseInt(id));
        res.json({message:"güncelleme başarılı."});
    } catch (err) {
        res.json(err);
    }
};


module.exports = {
    getTasks,
    getTask,
    addTask,
    deleteTask,
    updateTask
};