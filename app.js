const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const views = require('./views/index')
const { db } = require('./models');
// const { Page, User } = require('./models/index');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));


const PORT = 3000;


app.get("/", (req, res) => {
  let post = ""
  res.send(views.main(post));
})

const sync = async () => {
  await db.Page.sync();
  await db.User.sync();
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}
sync();

// app.listen(PORT, () => {
//   console.log(`App listening in port ${PORT}`);
// });

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// });
