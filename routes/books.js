const express = require('express');
const router = express.Router();
const Book = require('../models/Book')


router.get('/', (req, res) => {
    res.send('We are on books!');
});

router.post('/', (req,res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn
    });

    book.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err });
    });
});

module.exports = router;