const express = require('express');
//const morgan = require('morgan');
const routerWiki = express.Router();
const layout = require('../views/layout')
const addPage = require('../views/addPage');

routerWiki.get('/', (req, res, next)=>{
    res.send(layout('Hiiii'));
});

routerWiki.post('/', (req, res, next)=>{
    res.send(layout('submit'));
});

routerWiki.get('/add', (req, res, next)=>{
    res.send(addPage());
});

module.exports = routerWiki;
