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

wikiRouter.get('/:slug', async (req, res, next) => {
  try {
    const page = await models.Page.findOne({
      where: {
        slug: req.params.slug
      }
    });
    res.send(views.wikiPage(page));
  } catch (error) {next(error)}
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
    console.log(page);
    res.redirect(`/wiki/${page.slug}`);
  } catch (error) { next(error) }
});


module.exports = wikiRouter
