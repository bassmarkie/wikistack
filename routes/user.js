const express = require('express');
const userRouter = express.Router();
const views = require('../views');
const models = require('../models');

//GET
userRouter.get('/', async (req, res, next) => {
  // list of all users
  // res.send('Something models.users(?).SOMEMETHOD ???')
});

userRouter.get('/:id', async (req, res, next) => {
  // retrieve user stuff from database
  // res.send(views.userPages(req.params.id, 'models.User.findAll()???')); // To-do later -- use id for userID???
  // send them to a page with their pages
});

//POST
userRouter.post('/', async (req, res, next) => {
  // create a user in the database
  // send client to the new user page
});

// userRouter.get('/add', (req, res, next) => {
//   res.send('GET /user/add')
// });

// DELETE

userRouter.delete('/', async (req, res, next) => {
  // delete a user from the database
  // redirect somewhere
});


module.exports = userRouter
