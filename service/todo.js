const repository = require("../repository/todo.js");

const getTodos = async () => {
    try {
      const todos = await repository.getTodos();
      return new Promise((resolve, reject) => {
        resolve(todos);
      });
    }catch(err){
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }
};

const addTodo = async (title, completed) => {
    try {
      const todo = await repository.addTodo(title, completed);
      return new Promise((resolve, reject) => {
        resolve(todo);
      });
    }catch(err){
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }
};

const deleteTodo = async (id) => {
    try {
      const todo = await repository.deleteTodo(id);
      return new Promise((resolve, reject) => {
        resolve("Todo deleted");
      });
    }catch(err){
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }
};

const updateTodo = async (id, title, completed) => {
  try{
    const todoIndex = await repository.getTodoIndex(id);
    const todo = await repository.updateTodo(id, title, completed,todoIndex);
    return new Promise((resolve, reject) => {
      resolve(todo);
    });
  } catch(err){
    return new Promise((resolve, reject) => {
      reject(err);
    });
  }

};

const completedTodo = async (id) => {
  id = parseInt(id);
  try {
    const todoIndex = await repository.getTodoIndex(id);
    await repository.completedTodo(todoIndex);
    const todo = await repository.getTodo(id);
    return new Promise((resolve, reject) => {
      resolve(todo);
    });
  } catch(err){
    return new Promise((resolve, reject) => {
      reject(err);
    });
  }
};

const searchTodo = async (key) => {
  try {
    const todo = await repository.searchTodo(key);
    return new Promise((resolve, reject) => {
      resolve(todo);
    });
  } catch(err){
    return new Promise((resolve, reject) => {
      reject(err);
    });
  }
}

module.exports = {
    getTodos,
    addTodo,
    deleteTodo,
    updateTodo,
    completedTodo,
    searchTodo,
};