const express = require('express');
//const morgan = require('morgan');
const router = express.Router();
const layout = require('../views/layout');

router.get('/', (req, res, next)=>{
    res.send(layout(''));
}
)

module.exports = router;