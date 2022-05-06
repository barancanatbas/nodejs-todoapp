const { task } = require("../models/task");

const getTasks = async () => {
  try {
    const tasks = await task.findAll();
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
    const Onetask = await task.findOne({ where: { id: id } });
    return new Promise((resolve, reject) => {
      resolve(Onetask);
    });
  } catch (err) {
    return new Promise((resolve, reject) => {
      reject(err);
    });
  }
};

const addTask = async (insertTask) => {
  try {
    await task.create(insertTask);
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
    const result = await task.destroy({ where: { id: id } });
    return new Promise((resolve, reject) => {
      resolve("silme başarılı.");
    });
  } catch (err) {
    return new Promise((resolve, reject) => {
      reject(err);
    });
  }
};

const updateTask = async (updateTask, id) => {
  try {
    const result = await task.update(updateTask, { where: { id: id } });
    return new Promise((resolve, reject) => {
      resolve(updateTask);
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
  updateTask,
};
