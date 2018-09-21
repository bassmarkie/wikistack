const express = require('express');
const wikiRouter = express.Router();

wikiRouter.get('/', (req, res, next) => {
  res.send('test')
})



module.exports = wikiRouter
