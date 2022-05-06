const express = require("express");
const app = express();
// var jwt = require('jsonwebtoken');
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

const redis = require("./config/redis");

const todoController = require("./controller/todo.js");
const userController = require("./controller/user.js");
const taskController = require("./controller/task.js");

app.use(express.json()); // bunu kullanmak zorunda kalıyoruz.
redis.connect();

app.get("/todos", todoController.getTodos);
app.post("/todo", todoController.addTodo);
app.delete("/todo/:id", todoController.deleteTodo);
app.put("/todo", todoController.updateTodo);
app.get("/todo/completed/:id", todoController.completedTodo);
app.get("/todo/:key", todoController.searchTodo);

app.get("/users", userController.getUsers);
app.get("/user/:id", userController.getUser);
app.post("/user", userController.insertUser);
app.put("/user", userController.updateUser);
app.delete("/user/:id", userController.deleteUser);

app.get("/tasks",taskController.getTasks);
app.get("/task/:id",taskController.getTask);
app.post("/task",taskController.addTask);
app.delete("/task/:id",taskController.deleteTask);
app.put("/task",taskController.updateTask);

app.post("/login", userController.login);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});