const express = require('express');
const router = express.Router();
const Book = require('../models/Book')


router.get('/', async (req, res) => {
    try{ 
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.json({message: err });
    }
});

router.post('/', async (req,res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn
    });

   
    try {
        const savedBook = await book.save();
        res.json(savedBook);

    } catch (err) {
        res.json({message: err });
    }

});

module.exports = router;