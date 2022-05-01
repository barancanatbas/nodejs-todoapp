const express = require("express");
const app = express();

const todoController = require("./controller/todo.js");

app.use(express.json()); // bunu kullanmak zorunda kalıyoruz.

app.get("/todos",todoController.getTodos);
app.post("/todo",todoController.addTodo);
app.delete("/todo/:id",todoController.deleteTodo);
app.put("/todo",todoController.updateTodo);
app.get("/todo/completed/:id",todoController.completedTodo);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});