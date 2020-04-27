/**
 * creating express app
 */
const express = require('express');
const app = express();
const port = 3000;
/**
 * loading other middlewares
 */
const bodyParser = require('body-parser');
app.use(bodyParser.json());
/**
 * loading database in server code
 */
const { Task  } = require('./db/models/task.model');
const { mongoose } =require('./db/mongoose');

/**
 * enabling CORS Middleware
*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, HEAD, DELETE, OPTIONS, PATCH");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
 * CRUD applications will be written here
 */

app.get('/', (req, res) => {
  Task.find({}).then((task) => {
    res.send(task);
  })
});

app.get('/:id', (req, res) => {
  Task.find({
    _id: req.params.id
  }).then((task) => {
    res.send(task);
  })
});

app.post('/', (req, res) => {
  let title = req.body.title;
  let newTask = new Task({
    title
  });
  newTask.save().then((taskDoc) => {
    res.send(taskDoc);
  })
});

app.patch('/:id', (req, res) => {
  Task.findOneAndUpdate({ _id: req.params.id}, {
    $set: req.body
  }).then(() => {
    res.sendStatus(200)
    })
});

app.delete('/:id', (req, res) => {
  Task.findOneAndDelete({ _id: req.params.id})
  .then((TaskDocRem) => {
     res.send(TaskDocRem)
  })
});

/**
 * Listening app at given port
 */
app.listen(port ,  () => console.log(`listening at port ${port}`));
