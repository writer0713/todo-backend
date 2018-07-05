# todo-backend

## [ TODO LIST Backend with Node.js ]

<br>


### GET
- ALL TODOS : http://localhost:3000/todos
- ONE TODO : http://localhost:3000/todos/todo/:id


### POST
- ONE TODO : http://localhost:3000/todos/todo


### PATCH
- ONE TODO : http://localhost:3000/todos/todo/:id

### DELETE
- ONE TODO : http://localhost:3000/todos/todo/:id

<br><br>

--- 

### Todo Schema for mongodb
```js
const TodoSchema = new Schema({
  title: {type: String, required: true},
  isDone: {type: String, required: true, default: false},
  time: {type: Date, required: true, default: moment().format('l')}
});
```