const express = require('express');
const router = express.Router();
const Book = require('../models/Book')

router.get('/', (req, res) => {
    res.send('We are on books!');
});

router.post('/', (req,res) => {
    console.log(req.body);
});

module.exports = router;