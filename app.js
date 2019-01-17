//const layout = require('./views/layout');
const express = require('express');
const routerWiki = require('./routes/wiki');
const routerUser = require('./routes/user');
const morgan = require('morgan');
const models = require("./models");
// const Sequelize = require('sequelize');
// const db = new Sequelize('postgres://localhost:5432/your-db');

const app = express();
app.use(express.static('public'));
//app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routerWiki);

app.get('/', (req, res, next)=>{
    res.redirect('/wiki');
});

models.db.authenticate().
then(() => {
  console.log('connected to the database');
})

const PORT = 3000;

const asyncFunc = async()=> {
  await models.db.sync({force: true});

  app.listen(PORT, ()=> {
    console.log(`html listening in port ${PORT}`);
  })
}

asyncFunc();
