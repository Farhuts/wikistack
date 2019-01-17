const express = require('express');
//const morgan = require('morgan');
const routerUser = express.Router();
// const layout = require('../views/layout');

routerUser.get('/', (req, res, next)=>{
    res.send('hola');
}
)

module.exports = routerUser;
