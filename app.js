const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const views = require('./views/index')

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));

const PORT = 3000;


app.get("/", (req, res) => {
  let post = ""
  res.send(views.main(post));
})

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

