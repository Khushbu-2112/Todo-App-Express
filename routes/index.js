var express = require('express');
var router = express.Router();

const Todo = require('../models/todo');

/* GET home page. */  // Todolist
router.get('/',(req, res, next) =>{
  Todo.find({})
    .then( (data) => {
      res.render('index', { title: 'Todo App', todos: data});
      // res.send(data);
    })
    .catch((err) => {
      console.log(err);
    })
});

//Add Todo

router.post('/',(req, res, next) =>{
  ( new Todo({
    title: req.body.title,
    description: req.body.description
  }))
  .save()
    .then( () => {
      Todo.find().then((data)=>{
        res.render('index', { title: 'Todo App', todos: data});
      })
      // res.send(data);
    })
    .catch((err) => {
      console.log(err);
    })
});

//Update Todo

router.get('/edit/:id', (req, res, next) =>{
  Todo.findOneAndUpdate({ _id: req.params.id},{ $set:{completed:true}},{new:true})
    .then( () => {
      Todo.find().then((data)=>{
        res.render('index', { title: 'Todo App', todos: data});
      })
      // res.send(data);
    })
    .catch((err) => {
      console.log(err);
    })
});

//Delete Todo
router.get('/delete/:id', (req, res, next) =>{
  Todo.findByIdAndDelete(req.params.id)
    .then( () => {
      Todo.find().then((data)=>{
        res.render('index', { title: 'Todo App', todos: data});
      })
      // res.send(data);
    })
    .catch((err) => {
      console.log(err);
    })
});

module.exports = router;
