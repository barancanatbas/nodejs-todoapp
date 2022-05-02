
const service = require("../service/todo.js");

const getTodos = (req, res) => {
    service.getTodos().then((todos) => {
        res.status(200).json(todos);
    }).catch((err) => {
        res.status(500).send(err);
    });
};

const addTodo = (req, res) => {
    service.addTodo(req.body.title, req.body.completed).then((todo) => {
        res.status(200).json(todo);
    }).catch((err) => {
        res.status(500).send(err);
    });
};

const deleteTodo = (req,res) => {
    console.log(req.params);
    service.deleteTodo(req.params.id).then((todo) => {
        res.status(200).json(todo);
    }).catch((err) => {
        res.status(500).send(err);
    });
};

const updateTodo = (req,res) => {
    let {id,title,completed} = req.body;

    service.updateTodo(id,title,completed).then((todo) => {
        res.status(200).json(todo);
    }).catch((err) => {
        res.status(500).send(err);
    });
};

const completedTodo = (req,res) => {
    let {id} = req.params;

    service.completedTodo(id).then((todo) => {
        res.status(200).json(todo);
    }).catch((err) => {
        res.status(500).send(err);
    });
};

const searchTodo = (req,res) => {
    let {key} = req.params;

    service.searchTodo(key).then((todos) => {
        res.status(200).json(todos);
    }).catch((err) => {
        res.status(500).send(err);
    });
};

module.exports = {
    getTodos,
    addTodo,
    deleteTodo,
    updateTodo,
    completedTodo,
    searchTodo,
}