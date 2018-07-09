const express = require('express');
const router = express.Router();
const todos = require('../controllers/todos');

router.get('/', todos.getTodos);

router.get('/todo/:id', todos.findTodoById)

router.post('/todo', todos.createTodo);

router.patch('/todo/:id', todos.updateTodo);

router.delete("/todo/:id", todos.deleteTodo);

module.exports = router;