let todos = [
  {
    id: 1,
    title: "learn nodejs and express",
    completed: false,
  },
  {
    id: 2,
    title: "learn golang and gorm",
    completed: true,
  },
];

// otomatik artan id oluşturmak için.
const newID = () => {
  const lastTodo = todos[todos.length - 1];
  return lastTodo.id + 1;
};

const getTodos = () => {
  return new Promise((resolve, reject) => {
    resolve(todos);
  });
};

const getTodo = (id) => {
  return new Promise((resolve, reject) => {
    const todo = todos.find((todo) => {
      return todo.id === id;
    });
    resolve(todo);
  });
};

const addTodo = (title, completed) => {
  return new Promise((resolve, reject) => {
    const todo = {
      id: newID(),
      title,
      completed,
    };
    todos.push(todo);
    resolve(todo);
  });
};

const updateTodo = (id, title, completed, index) => {
  return new Promise((resolve, reject) => {
    const todo = todos[index];

    if (todo) {
      todo.title = title;
      todo.completed = completed;

      todos[index] = todo;
      resolve(todo);
    } else reject(new Error("Todo not found"));
  });
};

const deleteTodo = (id) => {
  return new Promise((resolve, reject) => {
    const todo = todos.findIndex((todo) => {
      return todo.id === parseInt(id);
    });
    if (todo > -1) {
      todos.splice(todo, 1);
      resolve(todo);
    } else reject(new Error("Todo not found"));
  });
};

const getTodoIndex = (id) => {
  return new Promise((resolve, reject) => {
    const todoIndex = todos.findIndex((todo) => {
      return todo.id === parseInt(id);
    });

    if (todoIndex > -1) resolve(todoIndex);
    else reject(new Error("Todo not found"));
  });
};

const completedTodo = (todoIndex) => {
  return new Promise((resolve, reject) => {
    todos[todoIndex].completed = true;
    resolve("Todo completed");
  });
};


const searchTodo = (key) => {
  return new Promise((resolve, reject) => {
    const todo = todos.find((todo) => {
      return todo.title === key;
    });

    if (todo) resolve(todo);
    else reject(new Error("Todo not found"));
  });
}

module.exports = {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
  getTodoIndex,
  completedTodo,
  searchTodo,
};
