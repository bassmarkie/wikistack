const express = require('express');
const wikiRouter = express.Router();
// const views = require('../views/index');
const views = require('../views');


// GET
wikiRouter.get('/', (req, res, next) => {
  res.send(views.main());  // currently redirect
});

wikiRouter.get('/add', (req, res, next) => {
  res.send(views.addPage());
});

// POST

wikiRouter.post('/', (req, res, next) => {
  console.log(req.body)
  res.send('POST main wiki')
});


module.exports = wikiRouter
