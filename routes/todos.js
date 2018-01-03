const express = require('express');
const uuidv1 = require('uuid/v1');
const router = express.Router();
const todos = [{_id:'1', title:"doit"}];


router.get('/', function(req, res) {
  res.json(todos);
});

router.post('/', function(req, res) {
    req.body._id = uuidv1();
    todos.push(req.body);
    res.json(todos);
});

router.delete('/:id', function(req, res) {
    todos.forEach((todo, index) => {
        if (todo._id === req.params.id) {
            todos.splice(index ,1)
        }
    });
    res.json(todos);
});

router.put('/:id', function(req, res) {
    todos.forEach((todo, index) => {
        if (todo._id === req.params.id) {
            todo.completed = req.body.completed;
            todo.title = req.body.title;
        }
    });
    res.json(todos);
});

module.exports = router;
