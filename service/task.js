const repo = require('../repository/task.js');

const getTasks = async () => {
    try {
        const tasks = await repo.getTasks();
        return new Promise((resolve, reject) => {
            resolve(tasks);
        });
    } catch (err) {
        return new Promise((resolve, reject) => {
            reject(err);
        });
    }
};

const getTask = async (id) => {
    try {
        const task = await repo.getTask(id);
        return new Promise((resolve, reject) => {
            resolve(task);
        });
    } catch (err) {
        return new Promise((resolve, reject) => {
            reject(err);
        });
    }
};

const addTask = async (title,description,completed) => {
    try {
        await repo.addTask({title:title,description:description,completed:completed});
        return new Promise((resolve, reject) => {
            resolve("ekleme başarılı.");
        });
    } catch (err) {
        return new Promise((resolve, reject) => {
            reject(err);
        });
    }
};

const deleteTask = async (id) => {
    try {
        await repo.deleteTask(id);
        return new Promise((resolve, reject) => {
            resolve("silme başarılı");
        });
    } catch (err) {
        return new Promise((resolve, reject) => {
            reject(err);
        });
    }
};

const updateTask = async (title,description,completed,id) => {
    try {
         await repo.updateTask({title:title,description:description,completed:completed},id);
        return new Promise((resolve, reject) => {
            resolve("güncelleme başarılı");
        });
    } catch (err) {
        return new Promise((resolve, reject) => {
            reject(err);
        });
    }
};

module.exports = {
    getTasks,
    getTask,
    addTask,
    deleteTask,
    updateTask
};