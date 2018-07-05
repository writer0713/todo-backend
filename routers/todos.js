const express = require('express');
const router = express.Router();
const TodoModel = require('../models/Todo.model');

router.get('/', (req, res) => {
  TodoModel.find({})
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
});

router.get('/todo/:id', (req, res) => {
  TodoModel.findById(req.params.id, (err, todo) => {
    if(err) return res.status(500).send(err);

    if(todo) return res.status(200).send(todo);
    return res.status(404).send('no todo for id ' + req.params.id);
  })
})

router.post('/todo', (req, res) => {
  let title = req.body.title;
  
  // if(!title) {
  //   return res.status(422).send({'error': 'title is needed'});
  // }

  let todo = new TodoModel(req.body);
  //todo.title = title;

  todo.save(err => {
    if(err) return res.status(500).send(err);
    return res.status(200).json(todo);
  });
});

router.patch('/todo/:id', (req, res) => {
  TodoModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, todo) => {
      if(err) return res.status(500).send(err);
      return res.status(200).json(todo);
    }
  )
});

router.delete("/todo/:id", (req, res) => {
  TodoModel.findByIdAndRemove(req.params.id, (err, todo) => {
    if(err) return res.status(500).send(err);
    const response = {
      "message": "Todo is successfully deleted",
      "id": todo._id
    };

    return res.status(200).send(response);
  });
});

module.exports = router;