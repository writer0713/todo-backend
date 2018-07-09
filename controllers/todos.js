const Todo = require('../models/Todo.model');

module.exports.getTodos = function(req, res) {
  Todo.find({})
    .select('_id title isDone time')
    .exec()
    .then(todos => {
      console.log('connect to /todos :: ', todos);

      if(todos.length > 0) {
        res.status(200).json(todos);
      } else {
        res.status(404).send('no todos');
      }
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports.findTodoById = function(req, res) {
  Todo.findById(req.params.id, (err, todo) => {
    if(err) return res.status(500).send(err);

    if(todo) return res.status(200).send(todo);
    return res.status(404).send('no todo for id ' + req.params.id);
  });
};

module.exports.createTodo = function(req, res) {
  let title = req.body.title;
  let todo = new Todo(req.body);
  todo.save(err => {
    if(err) return res.status(500).send(err);
    return res.status(201).json(todo);
  });
};

module.exports.updateTodo = function(req, res) {
  Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, todo) => {
      if(err) return res.status(500).send(err);
      return res.status(200).json(todo);
    }
  )
};

module.exports.deleteTodo = function(req, res) {
  Todo.findByIdAndRemove(req.params.id, (err, todo) => {
    if(err) return res.status(500).send(err);
    const response = {
      "message": "Todo is successfully deleted",
      "id": todo._id
    };

    return res.status(200).send(response);
  });
};