//const layout = require('./views/layout');
const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(express.static('public'));
const router = require('./routes/fileRoutes');
//app.use(bodyParser.urlencoded({extended: true}));

app.use('/', router);

const PORT = 3000;
app.listen(PORT, ()=> {
  console.log(`html listening in port ${PORT}`);
})