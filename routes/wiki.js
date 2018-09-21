const express = require('express');
const wikiRouter = express.Router();
// const views = require('../views/index');
const views = require('../views');
const models = require('../models');

// GET
wikiRouter.get('/', async (req, res, next) => {
  res.send(views.main());  // currently redirect
});

wikiRouter.get('/add', async (req, res, next) => {
  res.send(views.addPage());
});

// POST

wikiRouter.post('/', async (req, res, next) => {
  let title = req.body.title;
  let content = req.body.pageContent;
  let status = req.body.pageStatus;


  const page = new models.Page ({
    title: title,
    content: content,
    // slug: generateSlug(title),
    // status: status
  });
  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});


module.exports = wikiRouter
