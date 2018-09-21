const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const views = require('./views/index')
// const { db } = require('./models');
const models= require('./models');
const wikiRouter = require('./routes/wiki')
const userRouter = require('./routes/user');



const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/wiki', wikiRouter)
app.use('/user', userRouter)


const PORT = 3000;


app.get("/", (req, res) => {
  let post = ""
  res.send(views.main(post));
})

const init = async () => {
  await models.Page.sync({force: true});
  await models.User.sync({force: true});
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}
init();

// app.listen(PORT, () => {
//   console.log(`App listening in port ${PORT}`);
// });

models.db.authenticate().
then(() => {
  console.log('connected to the database');
});
